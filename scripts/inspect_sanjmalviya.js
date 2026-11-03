const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const { Client } = require('pg');

async function main() {
  const c = new Client({ connectionString: process.env.DATABASE_URL });
  await c.connect();

  const u = await c.query("SELECT * FROM users WHERE email LIKE '%sanjmalviya%'");
  console.log('=== USER sanjmalviya ===');
  console.log(u.rows);

  if (u.rows.length > 0) {
    const w = await c.query('SELECT * FROM workspaces WHERE owner_id = $1', [u.rows[0].id]);
    console.log('=== WORKSPACES ===');
    console.log(w.rows);
    if (w.rows.length > 0) {
      const b = await c.query('SELECT * FROM businesses WHERE workspace_id = $1', [w.rows[0].id]);
      console.log('=== BUSINESSES ===');
      console.log(b.rows);
    }
  }

  await c.end();
}

main().catch(console.error);
