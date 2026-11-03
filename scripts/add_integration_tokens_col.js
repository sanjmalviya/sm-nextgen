const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const { Client } = require('pg');

async function main() {
  const c = new Client({ connectionString: process.env.DATABASE_URL });
  await c.connect();
  await c.query("ALTER TABLE integrations ADD COLUMN IF NOT EXISTS access_token TEXT");
  await c.query("ALTER TABLE integrations ADD COLUMN IF NOT EXISTS refresh_token TEXT");
  await c.query("ALTER TABLE integrations ADD COLUMN IF NOT EXISTS metadata JSONB DEFAULT '{}'::jsonb");
  console.log('Added access_token, refresh_token, and metadata columns to integrations table.');
  await c.end();
}

main().catch(console.error);
