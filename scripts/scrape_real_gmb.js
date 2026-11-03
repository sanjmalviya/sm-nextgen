const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const TEMP_USER_DATA = path.join(process.env.TEMP || 'C:\\Windows\\Temp', 'chrome_cdp_gmb_' + Date.now());

class CdpClient {
  constructor(wsUrl) {
    this.wsUrl = wsUrl;
    this.ws = null;
    this.id = 1;
    this.pending = new Map();
  }

  async connect() {
    return new Promise((resolve, reject) => {
      this.ws = new WebSocket(this.wsUrl);
      this.ws.onopen = () => resolve();
      this.ws.onerror = (err) => reject(err);
      this.ws.onmessage = (event) => {
        try {
          const msg = JSON.parse(event.data);
          if (msg.id && this.pending.has(msg.id)) {
            const { resolve, reject } = this.pending.get(msg.id);
            this.pending.delete(msg.id);
            if (msg.error) reject(new Error(msg.error.message));
            else resolve(msg.result);
          }
        } catch (e) {
          console.error('[CDP Parse Error]', e);
        }
      };
    });
  }

  async send(method, params = {}) {
    const id = this.id++;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }

  async close() {
    if (this.ws) {
      this.ws.close();
    }
  }
}

async function scrapeGmb() {
  const chromeProcess = spawn(CHROME_PATH, [
    '--headless=new',
    '--remote-debugging-port=9223',
    '--disable-gpu',
    '--no-sandbox',
    '--user-data-dir=' + TEMP_USER_DATA,
    '--lang=en-US'
  ]);

  console.log('Waiting for Chrome debugging port 9223...');
  await new Promise(r => setTimeout(r, 2500));

  let target = null;
  for (let i = 0; i < 10; i++) {
    try {
      const res = await fetch('http://127.0.0.1:9223/json/new?about:blank', { method: 'PUT' });
      if (res.ok) {
        target = await res.json();
        break;
      }
    } catch (e) {
      await new Promise(r => setTimeout(r, 500));
    }
  }

  if (!target) {
    chromeProcess.kill();
    throw new Error('Could not connect to Chrome DevTools port');
  }

  const cdp = new CdpClient(target.webSocketDebuggerUrl);
  await cdp.connect();
  await cdp.send('Page.enable');
  await cdp.send('Runtime.enable');
  await cdp.send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 1,
    mobile: false
  });

  const gmbUrl = 'https://www.google.com/maps/place/SM+NextGen/@24.5869516,73.7379416,17z/data=!3m1!4b1!4m6!3m5!1s0x4452fc3201be4139:0xcc236a7cdf4cc286!8m2!3d24.5869516!4d73.7379416!16s%2Fg%2F11y4_g4j0l?entry=ttu';
  console.log('Navigating to:', gmbUrl);
  await cdp.send('Page.navigate', { url: gmbUrl });

  // Wait for Google Maps rendering
  console.log('Waiting for Google Maps to render DOM...');
  await new Promise(r => setTimeout(r, 10000));

  const pageDetails = await cdp.send('Runtime.evaluate', {
    expression: `(() => {
      const title = document.title;
      const h1 = document.querySelector('h1')?.innerText || '';
      
      // Look for rating and reviews
      const ratingEl = document.querySelector('div.F7nice span[aria-hidden="true"]') || document.querySelector('span.ceNzKf');
      const rating = ratingEl ? ratingEl.innerText : '';
      
      const reviewCountEl = document.querySelector('div.F7nice span:last-child') || document.querySelector('span[aria-label*="reviews"]');
      const reviewCount = reviewCountEl ? reviewCountEl.innerText : '';

      // Category
      const catEl = document.querySelector('button[jsaction*="category"]') || document.querySelector('span[jsaction*="pane.rating.category"]');
      const category = catEl ? catEl.innerText : '';

      // Address
      const addressEl = document.querySelector('button[data-item-id*="address"]') || document.querySelector('div[aria-label*="Address"]');
      const address = addressEl ? addressEl.innerText : '';

      // Phone
      const phoneEl = document.querySelector('button[data-item-id*="phone"]') || document.querySelector('div[aria-label*="Phone"]');
      const phone = phoneEl ? phoneEl.innerText : '';

      // Website
      const webEl = document.querySelector('a[data-item-id*="authority"]') || document.querySelector('div[aria-label*="Website"]');
      const website = webEl ? (webEl.href || webEl.innerText) : '';

      // Collect all text in pane
      const pane = document.querySelector('div[role="main"]');
      const paneText = pane ? pane.innerText : document.body.innerText;

      return {
        title,
        h1,
        rating,
        reviewCount,
        category,
        address,
        phone,
        website,
        url: window.location.href,
        paneTextSnippet: paneText.slice(0, 2000)
      };
    })()`,
    returnByValue: true
  });

  console.log('Scraped Details:', JSON.stringify(pageDetails.result.value, null, 2));

  // Let's also click on Reviews tab if available and scrape actual reviews
  const reviewClick = await cdp.send('Runtime.evaluate', {
    expression: `(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const revBtn = buttons.find(b => b.innerText && b.innerText.toLowerCase().includes('review'));
      if (revBtn) {
        revBtn.click();
        return true;
      }
      return false;
    })()`,
    returnByValue: true
  });
  console.log('Clicked reviews tab:', reviewClick.result.value);

  await new Promise(r => setTimeout(r, 4000));

  const reviewsScrape = await cdp.send('Runtime.evaluate', {
    expression: `(() => {
      const revEls = document.querySelectorAll('div.jftiEf, div[data-review-id]');
      const reviews = [];
      revEls.forEach(el => {
        const author = el.querySelector('div.d4r55, .WNx5fc, .section-review-title')?.innerText || '';
        const ratingAria = el.querySelector('span.kvMYJc, span[aria-label*="star"]')?.getAttribute('aria-label') || '';
        const text = el.querySelector('span.wiI7pd, .section-review-text')?.innerText || '';
        const date = el.querySelector('span.rsqaWe, .section-review-publish-date')?.innerText || '';
        if (author) {
          reviews.push({ author, ratingAria, text, date });
        }
      });
      return {
        count: reviews.length,
        reviews
      };
    })()`,
    returnByValue: true
  });

  console.log('Scraped Reviews:', JSON.stringify(reviewsScrape.result.value, null, 2));

  await cdp.close();
  chromeProcess.kill();
}

scrapeGmb().catch(err => {
  console.error(err);
  process.exit(1);
});
