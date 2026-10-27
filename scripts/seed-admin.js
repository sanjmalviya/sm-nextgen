// Controlled server-side CLI script for provisioning/updating administrator accounts
// Usage:
//   node scripts/seed-admin.js --email=admin@smnextgen.com --name="Platform Architect" --password="<custom_password>"
// Or with environment variables:
//   ADMIN_EMAIL=admin@smnextgen.com ADMIN_PASSWORD=... node scripts/seed-admin.js

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const { Pool } = require('pg');
require('dotenv').config();

// Parse args
const args = process.argv.slice(2).reduce((acc, arg) => {
  const [k, v] = arg.split('=');
  if (k.startsWith('--')) acc[k.slice(2)] = v;
  return acc;
}, {});

const email = (args.email || process.env.ADMIN_EMAIL || 'admin@smnextgen.com').trim().toLowerCase();
const name = args.name || process.env.ADMIN_NAME || 'Platform Architect';
let password = args.password || process.env.ADMIN_PASSWORD;

let generatedPassword = false;
if (!password) {
  // Generate high-entropy 16-character alphanumeric password
  password = crypto.randomBytes(12).toString('base64').replace(/[^a-zA-Z0-9]/g, 'A').slice(0, 16);
  generatedPassword = true;
}

const DB_FILE = path.join(__dirname, '..', 'data', 'growth_os_db.json');

async function run() {
  const passwordHash = await bcrypt.hash(password, 10);
  const now = new Date().toISOString();
  const dbUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.SUPABASE_DB_URL;

  if (dbUrl) {
    const pool = new Pool({
      connectionString: dbUrl,
      ssl: dbUrl.includes('localhost') ? false : { rejectUnauthorized: false }
    });
    const client = await pool.connect();
    try {
      await client.query('BEGIN');
      const userRes = await client.query('SELECT * FROM users WHERE email = $1', [email]);
      let userId;
      if (userRes.rows.length > 0) {
        userId = userRes.rows[0].id;
        await client.query(
          'UPDATE users SET name = $1, password_hash = $2, role = $3, updated_at = $4 WHERE id = $5',
          [name, passwordHash, 'ADMIN', now, userId]
        );
        console.log(`[OK] Updated existing PostgreSQL user ${email} to ADMIN with new password hash.`);
      } else {
        userId = `use_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
        await client.query(
          'INSERT INTO users (id, name, email, password_hash, role, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6, $7)',
          [userId, name, email, passwordHash, 'ADMIN', now, now]
        );
        console.log(`[OK] Created new PostgreSQL ADMIN user ${email}.`);
      }

      // Ensure workspace
      const memRes = await client.query('SELECT * FROM workspace_members WHERE user_id = $1 AND role = $2', [userId, 'OWNER']);
      let wsId;
      if (memRes.rows.length === 0) {
        wsId = `wor_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
        await client.query(
          'INSERT INTO workspaces (id, name, owner_id, plan, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6)',
          [wsId, `${name}'s Master Workspace`, userId, 'ENTERPRISE', now, now]
        );
        await client.query(
          'INSERT INTO workspace_members (id, workspace_id, user_id, role, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6)',
          [`mem_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`, wsId, userId, 'OWNER', now, now]
        );
      } else {
        wsId = memRes.rows[0].workspace_id;
      }

      // Ensure business
      const bizRes = await client.query('SELECT * FROM businesses WHERE workspace_id = $1', [wsId]);
      if (bizRes.rows.length === 0) {
        const busId = `bus_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
        await client.query(`
          INSERT INTO businesses (
            id, workspace_id, created_by, name, category, secondary_categories,
            country, city, address, website, phone, description, services,
            opening_hours, target_customers, primary_goal, is_completed, google_connected,
            created_at, updated_at
          ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20)
        `, [
          busId, wsId, userId, 'SM NextGen HQ', 'Digital Marketing & Tech Agency',
          JSON.stringify(['Software Company', 'Business Management Consultant']),
          'India', 'Udaipur, Rajasthan', 'HPPQ+Q5V, Sunderwas, Ganapati Nagar',
          'https://www.smnextgen.com', '+91 70735 38077',
          'SM NextGen is a premier business growth & technology partner.',
          JSON.stringify(['Growth Strategy', 'Local SEO & 3-Pack Optimization', 'AI Business Automations']),
          'Mon-Sat: 09:30 AM - 08:00 PM', 'High-growth businesses, SMBs, enterprises',
          'Dominate Google Maps 3-Pack in local city', true, false, now, now
        ]);
      }

      await client.query('COMMIT');
    } catch (e) {
      await client.query('ROLLBACK');
      console.error('[PostgreSQL Error]: Admin seeding failed:', e);
      throw e;
    } finally {
      client.release();
      await pool.end();
    }
  }

  // Also sync to local JSON file if present
  if (fs.existsSync(DB_FILE)) {
    try {
      const db = JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
      let user = db.users.find(u => u.email === email);
      if (user) {
        user.name = name;
        user.passwordHash = passwordHash;
        user.role = 'ADMIN';
        user.updatedAt = now;
      } else {
        user = {
          id: `use_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
          name,
          email,
          passwordHash,
          role: 'ADMIN',
          createdAt: now,
          updatedAt: now
        };
        db.users.push(user);
      }

      let member = db.workspace_members.find(m => m.userId === user.id && m.role === 'OWNER');
      let workspace = null;
      if (!member) {
        workspace = {
          id: `wor_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
          name: `${user.name}'s Master Workspace`,
          ownerId: user.id,
          plan: 'ENTERPRISE',
          createdAt: now,
          updatedAt: now
        };
        db.workspaces.push(workspace);
        db.workspace_members.push({
          id: `mem_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
          workspaceId: workspace.id,
          userId: user.id,
          role: 'OWNER',
          createdAt: now,
          updatedAt: now
        });
      } else {
        workspace = db.workspaces.find(w => w.id === member.workspaceId);
      }

      let business = db.businesses.find(b => b.workspaceId === workspace.id);
      if (!business) {
        business = {
          id: `bus_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
          workspaceId: workspace.id,
          createdBy: user.id,
          name: 'SM NextGen HQ',
          category: 'Digital Marketing & Tech Agency',
          secondaryCategories: ['Software Company', 'Business Management Consultant'],
          country: 'India',
          city: 'Udaipur, Rajasthan',
          address: 'HPPQ+Q5V, Sunderwas, Ganapati Nagar',
          website: 'https://www.smnextgen.com',
          phone: '+91 70735 38077',
          description: 'SM NextGen is a premier business growth & technology partner.',
          services: ['Growth Strategy', 'Local SEO & 3-Pack Optimization', 'AI Business Automations'],
          openingHours: 'Mon-Sat: 09:30 AM - 08:00 PM',
          targetCustomers: 'High-growth businesses, SMBs, enterprises',
          primaryGoal: 'Dominate Google Maps 3-Pack in local city',
          isCompleted: true,
          googleConnected: false,
          googlePlaceId: '',
          googleMapsUrl: '',
          createdAt: now,
          updatedAt: now
        };
        db.businesses.push(business);
      }

      const tempFile = `${DB_FILE}.${Date.now()}.tmp`;
      fs.writeFileSync(tempFile, JSON.stringify(db, null, 2), 'utf8');
      fs.renameSync(tempFile, DB_FILE);
    } catch (e) {
      console.warn('[Warning] Local JSON sync skipped:', e.message);
    }
  }

  console.log('================================================================');
  console.log('ADMINISTRATOR PROVISIONING COMPLETED SUCCESSFULLY');
  console.log(`Account Email: ${email}`);
  console.log(`Role:          ADMIN`);
  if (generatedPassword) {
    console.log(`Temporary Pass: ${password}`);
    console.log('NOTE: Please store this credential securely and change it upon first login.');
  } else {
    console.log('Password:      [Provided via secure input]');
  }
  console.log('================================================================');
}

run().catch(err => {
  console.error('[FATAL] Admin provisioning failed:', err);
  process.exit(1);
});
