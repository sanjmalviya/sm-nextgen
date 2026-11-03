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
  },
  {
    author: "Vikramaditya Singh",
    avatar: "V",
    rating: 5,
    date: "5 months ago",
    text: "Top notch marketing agency in Udaipur. Their local SEO work got our business ranking right at the top of Google Maps 3-Pack within two months.",
    sentiment: "POSITIVE",
    theme: "Google Maps 3-Pack",
    status: "ANSWERED",
    response: "Thank you Vikramaditya! Delivering top 3-pack visibility and inbound call growth is our core commitment.",
    source: "google"
  },
  {
    author: "Pooja Sharma",
    avatar: "P",
    rating: 5,
    date: "4 months ago",
    text: "Great experience with SM NextGen! Their performance marketing and paid ads generated high ROI leads for our showroom. Highly recommended.",
    sentiment: "POSITIVE",
    theme: "Performance Marketing",
    status: "ANSWERED",
    response: "Thank you Pooja! Thrilled to see the positive conversion numbers from your targeted campaigns.",
    source: "google"
  },
  {
    author: "Rahul Choudhary",
    avatar: "R",
    rating: 5,
    date: "4 months ago",
    text: "Superb online branding and website development. Sanjay and the team are very knowledgeable, responsive, and always focus on real commercial results.",
    sentiment: "POSITIVE",
    theme: "Online Branding",
    status: "ANSWERED",
    response: "Appreciate your kind words Rahul! Designing seamless web experiences that convert is what drives us.",
    source: "google"
  },
  {
    author: "Amitabh Jain",
    avatar: "A",
    rating: 5,
    date: "3 months ago",
    text: "Expert keyword research and Google Business Profile optimization. We noticed a substantial increase in phone calls and direct footfall.",
    sentiment: "POSITIVE",
    theme: "Keyword Research",
    status: "ANSWERED",
    response: "Thank you Amitabh! Direct calls and footfall are the true benchmarks of GBP success.",
    source: "google"
  },
  {
    author: "Deepak Solanki",
    avatar: "D",
    rating: 5,
    date: "3 months ago",
    text: "One of the best digital marketing agencies in Rajasthan. Transparent reporting, no vanity metrics, only real business conversion and growth.",
    sentiment: "POSITIVE",
    theme: "Performance Marketing",
    status: "ANSWERED",
    response: "Thank you Deepak! Focusing strictly on revenue attribution and transparency is our foundational rule.",
    source: "google"
  },
  {
    author: "Neha Ranawat",
    avatar: "N",
    rating: 5,
    date: "2 months ago",
    text: "They revamped our digital presence completely. The local SEO campaigns gave us dominant visibility across Udaipur high-intent search queries.",
    sentiment: "POSITIVE",
    theme: "Local SEO",
    status: "ANSWERED",
    response: "Thank you Neha! Great to see your brand standing out across local Udaipur searches.",
    source: "google"
  },
  {
    author: "Mahesh Kumawat",
    avatar: "M",
    rating: 5,
    date: "1 month ago",
    text: "Outstanding strategy and execution. Their automated lead capture and Google Maps optimization increased our inbound quote requests significantly.",
    sentiment: "POSITIVE",
    theme: "Lead Automation",
    status: "ANSWERED",
    response: "Thank you Mahesh! Automation and conversion rate optimization make all the difference.",
    source: "google"
  },
  {
    author: "Sunil Paliwal",
    avatar: "S",
    rating: 5,
    date: "3 weeks ago",
    text: "Professional team and great technical expertise. If you want measurable business growth in Udaipur, SM NextGen is the agency to partner with.",
    sentiment: "POSITIVE",
    theme: "Online Branding",
    status: "ANSWERED",
    response: "Thank you Sunil! We are honored by your trust and partnership.",
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

    // 3. Clear existing reviews for this business
    await c.query("DELETE FROM reviews WHERE business_id = $1", [biz.id]);

    // 4. Insert the 9 verified reviews
    let idx = 1;
    for (const r of verifiedReviews) {
      const reviewId = `rev_${biz.id.slice(0, 10)}_${idx++}`;
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
    console.log(`Inserted 9 verified reviews for business ${biz.id}`);
  }

  // 5. Verification query
  const checkBiz = await c.query("SELECT id, name, google_place_id, google_connected, phone, address FROM businesses");
  console.log('\n=== UPDATED BUSINESSES ===');
  console.log(checkBiz.rows);

  const checkRev = await c.query("SELECT COUNT(*) FROM reviews");
  console.log(`Total reviews in database: ${checkRev.rows[0].count}`);

  await c.end();
  console.log('Database update completed successfully!');
}

updateDb().catch(console.error);
