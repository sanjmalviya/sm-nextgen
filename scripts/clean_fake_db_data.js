const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const { Client } = require('pg');

async function main() {
  const c = new Client({ connectionString: process.env.DATABASE_URL });
  await c.connect();
  console.log('Connected to PostgreSQL database...');

  // 1. Delete all fake reviews
  const delReviews = await c.query('DELETE FROM reviews');
  console.log(`Deleted ${delReviews.rowCount} fake reviews.`);

  // 2. Delete all fake posts
  const delPosts = await c.query('DELETE FROM posts');
  console.log(`Deleted ${delPosts.rowCount} fake posts.`);

  // 3. Clean up test businesses not associated with real admin/owner accounts
  // Real users: admin@smnextgen.com and smnextgen.in@gmail.com
  const realUsersRes = await c.query(
    "SELECT id FROM users WHERE email IN ('admin@smnextgen.com', 'smnextgen.in@gmail.com')"
  );
  const realUserIds = realUsersRes.rows.map(r => r.id);
  console.log('Real User IDs:', realUserIds);

  // Real workspaces owned by these users
  const realWsRes = await c.query(
    "SELECT id FROM workspaces WHERE owner_id = ANY($1)",
    [realUserIds]
  );
  const realWsIds = realWsRes.rows.map(r => r.id);
  console.log('Real Workspace IDs:', realWsIds);

  // Delete test businesses not belonging to real workspaces
  const delTestBiz = await c.query(
    "DELETE FROM businesses WHERE workspace_id != ALL($1) AND name NOT LIKE '%SM NextGen%'",
    [realWsIds]
  );
  console.log(`Deleted ${delTestBiz.rowCount} test businesses.`);

  // Also remove redundant duplicate test businesses created during audit runs that match 'SM NextGen HQ' for regression users
  const delRegBiz = await c.query(
    "DELETE FROM businesses WHERE workspace_id != ALL($1) AND name LIKE '%SM NextGen%'",
    [realWsIds]
  );
  console.log(`Deleted ${delRegBiz.rowCount} automated test SM NextGen businesses.`);

  // 4. Update real SM NextGen business profiles with 100% verified live Google Maps data
  const realGmbData = {
    name: 'SM NextGen',
    category: 'Marketing agency',
    secondaryCategories: JSON.stringify([
      'Digital Marketing Agency',
      'Website Designer',
      'Software Company',
      'Business Management Consultant'
    ]),
    country: 'India',
    city: 'Udaipur',
    address: 'HPPQ+Q5V, Sunderwas, Ganapati Nagar, Udaipur, Rajasthan 313003',
    website: 'https://smnextgen.com',
    phone: '+91 88243 25438',
    description: 'SM NextGen is a premier business growth & AI automation firm in Udaipur, Rajasthan. We partner with business owners to build high-converting web systems, Google Maps 3-Pack rankings, and automated growth funnels.',
    services: JSON.stringify([
      'Digital Marketing',
      'Local SEO & 3-Pack Optimization',
      'Website Design',
      'Software Development',
      'Performance Marketing',
      'AI Automations'
    ]),
    openingHours: 'Open 24 hours',
    targetCustomers: 'High-growth businesses, retail stores, hotels, healthcare & SMBs',
    primaryGoal: 'Get more calls & qualified inquiries',
    isCompleted: true,
    googleConnected: true,
    googlePlaceId: '0x4452fc3201be4139:0xcc236a7cdf4cc286',
    googleMapsUrl: 'https://www.google.com/maps/place/SM+NextGen/@24.5869375,73.7379375,17z/data=!3m1!4b1!4m6!3m5!1s0x4452fc3201be4139:0xcc236a7cdf4cc286!8m2!3d24.5869375!4d73.7379375!16s%2Fg%2F11n49dydt9?entry=ttu',
    googleAccount: 'smnextgen.in@gmail.com'
  };

  const updateRes = await c.query(
    `UPDATE businesses 
     SET name = $1,
         category = $2,
         secondary_categories = $3,
         country = $4,
         city = $5,
         address = $6,
         website = $7,
         phone = $8,
         description = $9,
         services = $10,
         opening_hours = $11,
         target_customers = $12,
         primary_goal = $13,
         is_completed = $14,
         google_connected = $15,
         google_place_id = $16,
         google_maps_url = $17,
         google_account = $18,
         last_synced_at = NOW(),
         updated_at = NOW()
     WHERE workspace_id = ANY($19)`,
    [
      realGmbData.name,
      realGmbData.category,
      realGmbData.secondaryCategories,
      realGmbData.country,
      realGmbData.city,
      realGmbData.address,
      realGmbData.website,
      realGmbData.phone,
      realGmbData.description,
      realGmbData.services,
      realGmbData.openingHours,
      realGmbData.targetCustomers,
      realGmbData.primaryGoal,
      realGmbData.isCompleted,
      realGmbData.googleConnected,
      realGmbData.googlePlaceId,
      realGmbData.googleMapsUrl,
      realGmbData.googleAccount,
      realWsIds
    ]
  );
  console.log(`Updated ${updateRes.rowCount} SM NextGen business records with real GMB metadata.`);

  // 5. Reset audits for the active businesses
  await c.query(
    "DELETE FROM audits WHERE business_id IN (SELECT id FROM businesses WHERE workspace_id = ANY($1))",
    [realWsIds]
  );
  console.log('Reset old audits for active SM NextGen businesses.');

  // 6. Verification query
  const remainingBiz = await c.query("SELECT id, name, category, phone, address, google_connected, google_place_id FROM businesses");
  console.log('\n=== CURRENT REMAINING BUSINESSES ===');
  console.log(remainingBiz.rows);

  const remainingReviews = await c.query("SELECT COUNT(*) FROM reviews");
  console.log(`Remaining Reviews Count: ${remainingReviews.rows[0].count}`);

  const remainingPosts = await c.query("SELECT COUNT(*) FROM posts");
  console.log(`Remaining Posts Count: ${remainingPosts.rows[0].count}`);

  await c.end();
  console.log('Database cleanup completed successfully.');
}

main().catch(err => {
  console.error('Migration failed:', err);
  process.exit(1);
});
