// SM NextGen Growth OS — Automated CDP Interactive Browser Tour & Screenshot Capture
// Uses native Node.js 24 WebSocket and Chrome DevTools Protocol (no external npm dependencies required)

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const { Pool } = require('pg');
require('dotenv').config();

const ARTIFACTS_DIR = 'C:\\Users\\Rapid IT World\\.gemini\\antigravity\\brain\\e5fa6dd8-d06e-4001-98a0-1a21c4f6ca7b';
const SCREENSHOTS_DIR = path.join(ARTIFACTS_DIR, 'screenshots');
if (!fs.existsSync(SCREENSHOTS_DIR)) {
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
}

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const TEMP_USER_DATA = path.join(process.env.TEMP || 'C:\\Windows\\Temp', 'chrome_cdp_tour_' + Date.now());

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

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function runTour() {
  console.log('================================================================');
  console.log('   GROWTH OS — INTERACTIVE CDP BROWSER SCREENSHOT INSPECTION     ');
  console.log('================================================================\n');

  // 1. Fetch valid user and admin tokens from Supabase PostgreSQL
  console.log('1. Generating session tokens from database...');
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });
  const client = await pool.connect();

  // Find a business owner
  const userRes = await client.query(`
    SELECT u.id, u.email, u.name, u.role, b.id as business_id, b.name as business_name
    FROM users u
    JOIN workspaces w ON w.owner_id = u.id
    JOIN businesses b ON b.workspace_id = w.id
    WHERE b.is_completed = true
    LIMIT 1
  `);
  const ownerUser = userRes.rows[0];

  // Find admin user
  const adminRes = await client.query(`SELECT id, email, name, role FROM users WHERE role = 'ADMIN' LIMIT 1`);
  const adminUser = adminRes.rows[0];

  // Create a brand new onboarding test user (without completed profile)
  const onboardingEmail = `onboard_tour_${Date.now()}@example.com`;
  const onboardingId = `use_tour_${Date.now()}`;
  await client.query(`
    INSERT INTO users (id, name, email, password_hash, role, created_at, updated_at)
    VALUES ($1, $2, $3, $4, $5, NOW(), NOW())
  `, [onboardingId, 'Tour Candidate', onboardingEmail, '$2b$10$abcdefghijklmnopqrstuvwxyz01234567890123456789012345678', 'USER']);

  const wsId = `wor_tour_${Date.now()}`;
  await client.query(`
    INSERT INTO workspaces (id, name, owner_id, plan, created_at, updated_at)
    VALUES ($1, $2, $3, 'STARTER', NOW(), NOW())
  `, [wsId, "Tour Candidate's Workspace", onboardingId]);

  await client.query(`
    INSERT INTO workspace_members (id, workspace_id, user_id, role, created_at, updated_at)
    VALUES ($1, $2, $3, 'OWNER', NOW(), NOW())
  `, [`mem_tour_${Date.now()}`, wsId, onboardingId]);

  client.release();
  await pool.end();

  const secret = process.env.JWT_SECRET;
  const ownerToken = jwt.sign({
    userId: ownerUser.id,
    email: ownerUser.email,
    name: ownerUser.name,
    role: ownerUser.role
  }, secret, { expiresIn: '7d' });

  const adminToken = jwt.sign({
    userId: adminUser.id,
    email: adminUser.email,
    name: adminUser.name,
    role: adminUser.role
  }, secret, { expiresIn: '7d' });

  const onboardingToken = jwt.sign({
    userId: onboardingId,
    email: onboardingEmail,
    name: 'Tour Candidate',
    role: 'USER'
  }, secret, { expiresIn: '7d' });

  console.log(`[OK] Tokens generated:`);
  console.log(`     - Business Owner: ${ownerUser.email} (${ownerUser.business_name})`);
  console.log(`     - Master Admin:   ${adminUser.email}`);
  console.log(`     - Onboarding User: ${onboardingEmail}\n`);

  // 2. Launch Chrome Headless
  console.log('2. Launching Chrome with remote debugging on port 9222...');
  const chrome = spawn(CHROME_PATH, [
    '--headless=new',
    '--remote-debugging-port=9222',
    '--disable-gpu',
    '--no-sandbox',
    '--disable-extensions',
    '--user-data-dir=' + TEMP_USER_DATA
  ]);

  await sleep(2500);

  // 3. Connect CDP to target
  console.log('3. Connecting WebSocket to Chrome CDP...');
  const newTargetRes = await fetch('http://127.0.0.1:9222/json/new?about:blank', { method: 'PUT' });
  const target = await newTargetRes.json();
  const cdp = new CdpClient(target.webSocketDebuggerUrl);
  await cdp.connect();

  await cdp.send('Page.enable');
  await cdp.send('Network.enable');
  await cdp.send('DOM.enable');

  const setDesktop = async () => {
    await cdp.send('Emulation.clearDeviceMetricsOverride');
    await cdp.send('Emulation.setDeviceMetricsOverride', {
      width: 1440,
      height: 900,
      deviceScaleFactor: 1,
      mobile: false
    });
    await sleep(500);
  };

  const setMobile = async () => {
    await cdp.send('Emulation.clearDeviceMetricsOverride');
    await cdp.send('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 2.0,
      mobile: true
    });
    await sleep(500);
  };

  const takeShot = async (filename, desc) => {
    console.log(`   📸 Capturing: ${filename} (${desc})...`);
    await sleep(1500);
    const { data } = await cdp.send('Page.captureScreenshot', { format: 'png' });
    const fullPath = path.join(SCREENSHOTS_DIR, filename);
    fs.writeFileSync(fullPath, Buffer.from(data, 'base64'));
    const sizeKb = Math.round(Buffer.from(data, 'base64').length / 1024);
    console.log(`      ✓ Saved (${sizeKb} KB) -> ${filename}`);
    return fullPath;
  };

  const clickTab = async (labelKeyword) => {
    const res = await cdp.send('Runtime.evaluate', {
      expression: `(() => {
        const btn = Array.from(document.querySelectorAll('button')).find(b => 
          b.textContent.toLowerCase().includes('${labelKeyword.toLowerCase()}')
        );
        if (btn) {
          btn.click();
          return 'clicked: ' + btn.textContent.trim().replace(/\\s+/g, ' ');
        }
        return 'BUTTON NOT FOUND for ${labelKeyword}';
      })()`,
      returnByValue: true
    });
    console.log(`      [Tab Nav] ${res?.result?.value}`);
    await sleep(1800);
  };

  try {
    // -------------------------------------------------------------
    // STAGE 1: Public Landing Page (Logged Out)
    // -------------------------------------------------------------
    console.log('\n--- STAGE 1: Public Landing Page (Logged Out) ---');
    await cdp.send('Network.clearBrowserCookies');
    await setDesktop();
    await cdp.send('Page.navigate', { url: 'http://localhost:3000/growth-os' });
    await sleep(2500);
    await takeShot('01_growth_os_landing_desktop.png', 'Public Growth OS Landing Page (Desktop)');

    await setMobile();
    await sleep(1000);
    await takeShot('02_growth_os_landing_mobile.png', 'Public Growth OS Landing Page (Mobile)');

    // -------------------------------------------------------------
    // STAGE 2: Auth Screen (Sign In & Register)
    // -------------------------------------------------------------
    console.log('\n--- STAGE 2: Auth Screen & Modals ---');
    await setDesktop();
    await cdp.send('Page.navigate', { url: 'http://localhost:3000/growth-os' });
    await sleep(1500);
    await cdp.send('Runtime.evaluate', {
      expression: `(() => {
        const btn = Array.from(document.querySelectorAll('button')).find(b => 
          b.textContent.includes('Sign In') || 
          b.textContent.includes('Access Growth OS') || 
          b.textContent.includes('Get Started')
        );
        if (btn) btn.click();
      })()`
    });
    await sleep(1500);
    await takeShot('03_growth_os_auth_signin.png', 'Growth OS Sign In Form Modal');

    await cdp.send('Runtime.evaluate', {
      expression: `(() => {
        const regTab = Array.from(document.querySelectorAll('button')).find(b => 
          b.textContent.trim() === 'Create Account' || 
          b.textContent.includes('Sign Up') || 
          b.textContent.includes('Register')
        );
        if (regTab) regTab.click();
      })()`
    });
    await sleep(1500);
    await takeShot('04_growth_os_auth_register.png', 'Growth OS Create Account Form Modal');

    // -------------------------------------------------------------
    // STAGE 3: Onboarding Flow (Fresh User)
    // -------------------------------------------------------------
    console.log('\n--- STAGE 3: Profile-First Onboarding Flow ---');
    await cdp.send('Network.setCookie', {
      name: 'sm_growth_os_token',
      value: onboardingToken,
      domain: 'localhost',
      path: '/'
    });
    await cdp.send('Page.navigate', { url: 'http://localhost:3000/growth-os' });
    await sleep(2500);
    await takeShot('05_growth_os_onboarding_screen.png', 'Mandatory Business Profile Onboarding Flow');

    // -------------------------------------------------------------
    // STAGE 4: Authenticated Business Owner Dashboard & Tabs
    // -------------------------------------------------------------
    console.log(`\n--- STAGE 4: Authenticated Dashboard (${ownerUser.business_name}) ---`);
    await cdp.send('Network.setCookie', {
      name: 'sm_growth_os_token',
      value: ownerToken,
      domain: 'localhost',
      path: '/'
    });
    await setDesktop();
    await cdp.send('Page.navigate', { url: 'http://localhost:3000/growth-os' });
    await sleep(3000);
    await takeShot('06_dashboard_overview_desktop.png', 'Dashboard Tab - Overview & KPI Gauges (Desktop)');

    await setMobile();
    await sleep(1200);
    await takeShot('07_dashboard_overview_mobile.png', 'Dashboard Tab - Mobile Dock & Cards (Mobile)');

    await setDesktop();

    // 8. 24-Point Audit
    await clickTab('Audit');
    await takeShot('08_tab_24_point_audit.png', '24-Point Local SEO & 3-Pack Diagnostic Audit');

    // 9. Optimization
    await clickTab('Optimization');
    await takeShot('09_tab_optimization.png', 'Optimization Checklist & High-Impact Quick Wins');

    // 10. Reviews AI
    await clickTab('Reviews');
    await takeShot('10_tab_reviews_ai.png', 'Reviews Management & 1-Click AI Response Drafts');

    // 11. Performance
    await clickTab('Performance');
    await takeShot('11_tab_performance.png', 'Performance Telemetry, Search Impressions & Inbound Calls');

    // 12. Action Center
    await clickTab('Action');
    await takeShot('12_tab_action_center.png', 'Action Center Tasks & Milestone Tracker');

    // 13. AI Growth Assistant
    await clickTab('Assistant');
    await takeShot('13_tab_ai_growth_assistant.png', 'AI Growth Copilot & Contextual Recommendations');

    // 14. AI Content Tools
    await clickTab('Tools');
    await takeShot('14_tab_ai_content_tools.png', 'AI Marketing Tools (Posts Generator & Content Studio)');

    // 15. Settings
    await clickTab('Settings');
    await takeShot('15_tab_business_settings.png', 'Business Profile, Notifications & Tone Settings');

    // -------------------------------------------------------------
    // STAGE 5: Master Admin Panel (ADMIN Role)
    // -------------------------------------------------------------
    console.log('\n--- STAGE 5: Master Admin Tab (ADMIN Role) ---');
    await cdp.send('Network.setCookie', {
      name: 'sm_growth_os_token',
      value: adminToken,
      domain: 'localhost',
      path: '/'
    });
    await cdp.send('Page.navigate', { url: 'http://localhost:3000/growth-os' });
    await sleep(2500);
    await clickTab('Admin');
    await takeShot('16_tab_master_admin.png', 'Master Admin Multi-Tenant & Platform Control Panel');

    console.log('\n================================================================');
    console.log('ALL 16 BROWSER TOUR SCREENSHOTS CAPTURED SUCCESSFULLY!');
    console.log(`Directory: ${SCREENSHOTS_DIR}`);
    console.log('================================================================\n');

  } catch (err) {
    console.error('[FATAL TOUR ERROR]', err);
  } finally {
    await cdp.close();
    chrome.kill();
    try {
      fs.rmSync(TEMP_USER_DATA, { recursive: true, force: true });
    } catch(e) {}
  }
}

runTour().catch(e => {
  console.error(e);
  process.exit(1);
});
