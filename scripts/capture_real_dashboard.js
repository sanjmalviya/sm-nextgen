const http = require('http');
const { WebSocket } = require('ws');
const fs = require('fs');
const path = require('path');

function getDebuggerUrl() {
  return new Promise((resolve, reject) => {
    http.get('http://127.0.0.1:9222/json/list', (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const list = JSON.parse(data);
          const page = list.find(t => t.type === 'page');
          if (page && page.webSocketDebuggerUrl) {
            resolve(page.webSocketDebuggerUrl);
          } else {
            resolve(null);
          }
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function capture() {
  const wsUrl = await getDebuggerUrl();
  if (!wsUrl) {
    console.log('No Chrome debugger found on port 9222, skipping visual screenshot.');
    return;
  }

  const ws = new WebSocket(wsUrl);
  let id = 1;

  function send(method, params = {}) {
    return new Promise((resolve) => {
      const msgId = id++;
      const handler = (data) => {
        const msg = JSON.parse(data);
        if (msg.id === msgId) {
          ws.off('message', handler);
          resolve(msg.result);
        }
      };
      ws.on('message', handler);
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });
  }

  await new Promise(r => ws.on('open', r));
  console.log('Connected to CDP');

  await send('Page.enable');
  await send('Page.navigate', { url: 'http://localhost:3000/growth-os' });
  await new Promise(r => setTimeout(r, 4000));

  const screenshot = await send('Page.captureScreenshot', { format: 'png' });
  const outPath = path.resolve(__dirname, '../../../../.gemini/antigravity/brain/e5fa6dd8-d06e-4001-98a0-1a21c4f6ca7b/real_gmb_dashboard.png');
  fs.writeFileSync(outPath, Buffer.from(screenshot.data, 'base64'));
  console.log('Saved screenshot to:', outPath);

  ws.close();
}

capture().catch(console.error);
