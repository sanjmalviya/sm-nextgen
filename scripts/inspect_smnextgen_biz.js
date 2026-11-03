const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const { Client } = require('pg');

async function main() {
  const c = new Client({ connectionString: process.env.DATABASE_URL });
  await c.connect();

  const b = await c.query("SELECT * FROM businesses WHERE name LIKE '%SM NextGen%'");
  console.log('=== SM NEXTGEN ROWS ===');
  console.log(b.rows);

  await c.end();
}

main().catch(console.error);
