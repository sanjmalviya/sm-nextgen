const { spawn } = require('child_process');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const TEMP_USER_DATA = path.join(process.env.TEMP || 'C:\\Windows\\Temp', 'chrome_cdp_gmb_rev_' + Date.now());

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

async function checkReviews() {
  const chromeProcess = spawn(CHROME_PATH, [
    '--headless=new',
    '--remote-debugging-port=9224',
    '--disable-gpu',
    '--no-sandbox',
    '--user-data-dir=' + TEMP_USER_DATA,
    '--lang=en-US'
  ]);

  await new Promise(r => setTimeout(r, 2000));

  const res = await fetch('http://127.0.0.1:9224/json/new?about:blank', { method: 'PUT' });
  const target = await res.json();
  const cdp = new CdpClient(target.webSocketDebuggerUrl);
  await cdp.connect();
  await cdp.send('Page.enable');
  await cdp.send('Runtime.enable');

  const gmbUrl = 'https://www.google.com/maps/place/SM+NextGen/@24.5869375,73.7379375,17z/data=!4m8!3m7!1s0x4452fc3201be4139:0xcc236a7cdf4cc286!8m2!3d24.5869375!4d73.7379375!9m1!1b1!16s%2Fg%2F11n49dydt9?entry=ttu';
  console.log('Navigating directly to reviews page...');
  await cdp.send('Page.navigate', { url: gmbUrl });
  await new Promise(r => setTimeout(r, 7000));

  const evalRes = await cdp.send('Runtime.evaluate', {
    expression: `(() => {
      const allText = document.body.innerText;
      const reviewCards = Array.from(document.querySelectorAll('div[data-review-id]')).map(el => el.innerText);
      const noReviewsNotice = allText.includes("There are no reviews yet") || allText.includes("No reviews");
      return {
        hasReviewCards: reviewCards.length,
        reviewCards,
        noReviewsNotice,
        snippet: allText.slice(0, 1500)
      };
    })()`,
    returnByValue: true
  });

  console.log('Reviews check result:', JSON.stringify(evalRes.result.value, null, 2));

  await cdp.close();
  chromeProcess.kill();
}

checkReviews().catch(console.error);
