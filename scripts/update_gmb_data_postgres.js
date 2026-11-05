const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const { Client } = require('pg');

const verifiedReviews = [
  {
    author: "Sanjay Lohar",
    avatar: "S",
    rating: 5,
    date: "6 months ago",
    text: "SM NextGen did an amazing job for our business in Udaipur. Their SEO, keyword research, and local branding strategies drove remarkable organic reach and quality inquiries.",
    sentiment: "POSITIVE",
    theme: "Local SEO & Branding",
    status: "ANSWERED",
    response: "Thank you so much Sanjay! We loved partnering with you to scale your online presence and dominate local search.",
    source: "google"
  }
];

async function updateDb() {
  const c = new Client({ connectionString: process.env.DATABASE_URL });
  await c.connect();
  console.log('Connected to PostgreSQL database...');

  // 1. Get all SM NextGen businesses
  const bizRes = await c.query("SELECT id, name, created_by, workspace_id FROM businesses WHERE name LIKE '%SM NextGen%'");
  console.log(`Found ${bizRes.rows.length} SM NextGen business records:`, bizRes.rows.map(r => r.id));

  // 2. Update each business with official Store Code 03602514580438245940 and Google details
  for (const biz of bizRes.rows) {
    await c.query(
      `UPDATE businesses
       SET google_place_id = $1,
           address = $2,
           city = $3,
           country = $4,
           phone = $5,
           category = $6,
           google_connected = true,
           google_maps_url = $7,
           opening_hours = $8,
           last_synced_at = NOW(),
           updated_at = NOW()
       WHERE id = $9`,
      [
        '03602514580438245940',
        'HPPQ+Q5V, Sunderwas, Ganapati Nagar,, Udaipur, Rajasthan 313001',
        'Udaipur',
        'India',
        '+91 88243 25438',
        'Marketing agency',
        'https://www.google.com/maps/place/SM+NextGen/@24.5869375,73.7379375,17z/data=!3m1!4b1!4m6!3m5!1s0x4452fc3201be4139:0xcc236a7cdf4cc286!8m2!3d24.5869375!4d73.7379375!16s%2Fg%2F11n49dydt9?entry=ttu',
        'Open 24 hours',
        biz.id
      ]
    );

    // 3. Clear all fake reviews for this business
    await c.query("DELETE FROM reviews WHERE business_id = $1", [biz.id]);

    // 4. Insert only 100% verified review
    let idx = 1;
    for (const r of verifiedReviews) {
      const reviewId = `rev_${biz.id.slice(0, 10)}_sanjay`;
      await c.query(
        `INSERT INTO reviews (id, business_id, author, avatar, rating, date, text, sentiment, theme, status, response, source, created_at, updated_at)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, NOW(), NOW())`,
        [
          reviewId,
          biz.id,
          r.author,
          r.avatar,
          r.rating,
          r.date,
          r.text,
          r.sentiment,
          r.theme,
          r.status,
          r.response,
          r.source
        ]
      );
    }
  }

  // 5. Verification query
  const checkRev = await c.query("SELECT id, business_id, author, rating FROM reviews");
  console.log('Total verified reviews in database:', checkRev.rows);

  await c.end();
  console.log('Database update completed successfully!');
}

updateDb().catch(console.error);
