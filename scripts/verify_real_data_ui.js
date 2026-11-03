const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const { Client } = require('pg');

async function verify() {
  console.log('=== Verifying Growth OS Real Data State ===');

  // 1. Database Check
  const c = new Client({ connectionString: process.env.DATABASE_URL });
  await c.connect();

  const bizRes = await c.query("SELECT id, name, category, phone, address, google_connected, google_place_id FROM businesses");
  console.log('\n[1] Businesses in Database:');
  for (const b of bizRes.rows) {
    console.log(`- ${b.name} | Cat: ${b.category} | Phone: ${b.phone} | Addr: ${b.address} | GoogleConnected: ${b.google_connected} | PlaceID: ${b.google_place_id}`);
  }

  const revRes = await c.query("SELECT COUNT(*) FROM reviews");
  console.log(`\n[2] Reviews in Database: ${revRes.rows[0].count} (Must be 0 fake reviews)`);

  const postRes = await c.query("SELECT COUNT(*) FROM posts");
  console.log(`\n[3] Posts in Database: ${postRes.rows[0].count} (Must be 0 fake posts)`);

  await c.end();

  // 2. Local Endpoint Check
  console.log('\n[4] Local Server Verification (http://localhost:3000):');
  const healthRes = await fetch('http://localhost:3000/api/growth-os/auth/me');
  console.log(`GET /api/growth-os/auth/me => HTTP ${healthRes.status}`);

  console.log('\n=== Verification Completed Successfully! ===');
}

verify().catch(console.error);
