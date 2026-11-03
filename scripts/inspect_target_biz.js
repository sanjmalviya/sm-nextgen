const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const { Client } = require('pg');

async function main() {
  const c = new Client({ connectionString: process.env.DATABASE_URL });
  await c.connect();

  const u = await c.query("SELECT id, name, email, role FROM users WHERE id = 'use_1793207771824_g9ust' OR email LIKE '%smnextgen%'");
  console.log('=== TARGET USERS ===');
  console.log(u.rows);

  const b = await c.query("SELECT * FROM businesses WHERE id = 'bus_1793207928402_mblud' OR workspace_id = 'wor_1793207772052_yzene'");
  console.log('=== TARGET BUSINESS ===');
  console.log(b.rows);

  const rev = await c.query("SELECT * FROM reviews WHERE business_id = 'bus_1793207928402_mblud'");
  console.log('=== REVIEWS FOR SM NEXTGEN ===');
  console.log(rev.rows);

  await c.end();
}

main().catch(console.error);
