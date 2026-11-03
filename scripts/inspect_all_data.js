const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const { Client } = require('pg');

async function main() {
  const c = new Client({ connectionString: process.env.DATABASE_URL });
  await c.connect();

  console.log('=== BUSINESSES ===');
  const b = await c.query('SELECT * FROM businesses');
  console.log(`Count: ${b.rows.length}`);
  for (const row of b.rows) {
    console.log(`- ID: ${row.id}, Name: ${row.name}, City: ${row.city}, Category: ${row.category}, GoogleConnected: ${row.google_connected}, PlaceID: ${row.google_place_id}`);
  }

  console.log('\n=== REVIEWS ===');
  const r = await c.query('SELECT * FROM reviews');
  console.log(`Count: ${r.rows.length}`);
  for (const row of r.rows) {
    console.log(`- BusinessID: ${row.business_id}, Author: ${row.author}, Rating: ${row.rating}, Text: ${row.text ? row.text.slice(0, 50) : ''}`);
  }

  console.log('\n=== POSTS ===');
  const p = await c.query('SELECT * FROM posts');
  console.log(`Count: ${p.rows.length}`);
  for (const row of p.rows) {
    console.log(`- BusinessID: ${row.business_id}, Title: ${row.title}, Content: ${row.content ? row.content.slice(0, 50) : ''}`);
  }

  console.log('\n=== AUDITS ===');
  const a = await c.query('SELECT * FROM audits');
  console.log(`Count: ${a.rows.length}`);
  for (const row of a.rows) {
    console.log(`- BusinessID: ${row.business_id}, Score: ${row.overall_score}`);
  }

  await c.end();
}

main().catch(console.error);
