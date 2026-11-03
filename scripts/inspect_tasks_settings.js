const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const { Client } = require('pg');

async function main() {
  const c = new Client({ connectionString: process.env.DATABASE_URL });
  await c.connect();

  const tasks = await c.query("SELECT * FROM tasks");
  console.log('=== TASKS ===');
  console.log(`Count: ${tasks.rows.length}`);
  for (const t of tasks.rows.slice(0, 10)) {
    console.log(`- ID: ${t.id}, BusinessID: ${t.business_id}, Title: ${t.title}`);
  }

  const settings = await c.query("SELECT * FROM settings");
  console.log('=== SETTINGS ===');
  console.log(settings.rows);

  await c.end();
}

main().catch(console.error);
