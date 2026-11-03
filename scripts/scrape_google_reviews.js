const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const TEMP_USER_DATA = path.join(process.env.TEMP || 'C:\\Windows\\Temp', 'chrome_cdp_search_' + Date.now());

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

async function main() {
  const chromeProcess = spawn(CHROME_PATH, [
    '--headless=new',
    '--remote-debugging-port=9226',
    '--disable-gpu',
    '--no-sandbox',
    '--user-data-dir=' + TEMP_USER_DATA,
    '--lang=en-US'
  ]);

  await new Promise(r => setTimeout(r, 2500));

  let target = null;
  for (let i = 0; i < 10; i++) {
    try {
      const res = await fetch('http://127.0.0.1:9226/json/new?about:blank', { method: 'PUT' });
      if (res.ok) {
        target = await res.json();
        break;
      }
    } catch (e) {
      await new Promise(r => setTimeout(r, 500));
    }
  }

  const client = new CdpClient(target.webSocketDebuggerUrl);
  await client.connect();

  await client.send('Page.enable');
  await client.send('Runtime.enable');

  const searchUrl = 'https://www.google.com/search?q=sm+nextgen+udaipur';
  await client.send('Page.navigate', { url: searchUrl });

  await new Promise(r => setTimeout(r, 6000));

  const urlRes = await client.send('Runtime.evaluate', { expression: 'window.location.href' });
  console.log('Current URL:', urlRes.result.value);

  const textRes = await client.send('Runtime.evaluate', { expression: 'document.body.innerText.slice(0, 500)' });
  console.log('Body Text:\n', textRes.result.value);

  await client.close();
  chromeProcess.kill();
  await new Promise(r => setTimeout(r, 1000));
  try { fs.rmSync(TEMP_USER_DATA, { recursive: true, force: true }); } catch (e) {}
}

main().catch(console.error);
