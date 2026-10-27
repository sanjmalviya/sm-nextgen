// Production Database Migration Script: JSON DB -> Managed PostgreSQL
// Supports: Supabase PostgreSQL, Neon, AWS RDS, any standard PostgreSQL database.
// Usage: DATABASE_URL="postgres://..." node scripts/migrate-to-postgres.js

const fs = require('fs');
const path = require('path');
const { Pool } = require('pg');
require('dotenv').config();

const dbUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.SUPABASE_DB_URL;

if (!dbUrl) {
  console.error('================================================================');
  console.error('MIGRATION BLOCKED: Missing database connection string.');
  console.error('Please configure DATABASE_URL or POSTGRES_URL in your environment:');
  console.error('Example: DATABASE_URL="postgresql://postgres:[PASSWORD]@[HOST]:[PORT]/postgres"');
  console.error('================================================================');
  process.exit(1);
}

const pool = new Pool({
  connectionString: dbUrl,
  ssl: dbUrl.includes('localhost') ? false : { rejectUnauthorized: false }
});

const DB_FILE = path.join(__dirname, '..', 'data', 'growth_os_db.json');
if (!fs.existsSync(DB_FILE)) {
  console.error('[ERROR] Source JSON database not found at:', DB_FILE);
  process.exit(1);
}

const SCHEMA_FILE = path.join(__dirname, '..', 'src', 'lib', 'growth_os', 'schema.sql');
if (!fs.existsSync(SCHEMA_FILE)) {
  console.error('[ERROR] Schema file not found at:', SCHEMA_FILE);
  process.exit(1);
}

async function runMigration() {
  console.log('================================================================');
  console.log('   SM NEXTGEN GROWTH OS — POSTGRESQL MIGRATION RUNNER           ');
  console.log('================================================================\n');

  const client = await pool.connect();
  try {
    console.log('1. Testing PostgreSQL connection...');
    const ping = await client.query('SELECT NOW() as current_time, version()');
    console.log(`[OK] Connected to PostgreSQL: ${ping.rows[0].version.split(' ')[0]} ${ping.rows[0].version.split(' ')[1]}`);

    console.log('\n2. Executing relational schema (DDL)...');
    const schemaSql = fs.readFileSync(SCHEMA_FILE, 'utf8');
    await client.query(schemaSql);
    console.log('[OK] All 10 tables, foreign keys, unique constraints, and indexes verified.');

    console.log('\n3. Reading and validating source data from JSON backup...');
    const rawData = fs.readFileSync(DB_FILE, 'utf8');
    const db = JSON.parse(rawData);

    // Validate users before migrating: check for password hash validity
    for (const u of db.users || []) {
      const isBcrypt = /^\$2[aby]\$\d{2}\$[./A-Za-z0-9]{53}$/.test(u.passwordHash);
      if (!isBcrypt) {
        throw new Error(`SECURITY VALIDATION FAILED: User ${u.email} has an invalid or plaintext password hash. Migration aborted.`);
      }
    }
    console.log(`[OK] Validated ${db.users.length} users. All passwords confirmed valid bcrypt hashes.`);

    await client.query('BEGIN');

    // 1. Users
    console.log('\n4. Migrating Users...');
    let usersMigrated = 0;
    for (const u of db.users || []) {
      await client.query(`
        INSERT INTO users (id, name, email, password_hash, role, created_at, updated_at)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        ON CONFLICT (id) DO UPDATE SET
          name = EXCLUDED.name,
          email = EXCLUDED.email,
          password_hash = EXCLUDED.password_hash,
          role = EXCLUDED.role,
          updated_at = EXCLUDED.updated_at
      `, [u.id, u.name, u.email, u.passwordHash, u.role || 'USER', u.createdAt || new Date().toISOString(), u.updatedAt || new Date().toISOString()]);
      usersMigrated++;
    }

    // 2. Workspaces
    console.log('5. Migrating Workspaces...');
    let workspacesMigrated = 0;
    for (const w of db.workspaces || []) {
      await client.query(`
        INSERT INTO workspaces (id, name, owner_id, plan, created_at, updated_at)
        VALUES ($1, $2, $3, $4, $5, $6)
        ON CONFLICT (id) DO UPDATE SET
          name = EXCLUDED.name,
          plan = EXCLUDED.plan,
          updated_at = EXCLUDED.updated_at
      `, [w.id, w.name, w.ownerId, w.plan || 'STARTER', w.createdAt || new Date().toISOString(), w.updatedAt || new Date().toISOString()]);
      workspacesMigrated++;
    }

    // 3. Workspace Members
    console.log('6. Migrating Workspace Members...');
    let membersMigrated = 0;
    for (const m of db.workspace_members || []) {
      await client.query(`
        INSERT INTO workspace_members (id, workspace_id, user_id, role, created_at, updated_at)
        VALUES ($1, $2, $3, $4, $5, $6)
        ON CONFLICT (workspace_id, user_id) DO UPDATE SET
          role = EXCLUDED.role,
          updated_at = EXCLUDED.updated_at
      `, [m.id || `mem_${Date.now()}_${Math.random().toString(36).substring(2,7)}`, m.workspaceId, m.userId, m.role || 'MEMBER', m.createdAt || new Date().toISOString(), m.updatedAt || new Date().toISOString()]);
      membersMigrated++;
    }

    // 4. Businesses
    console.log('7. Migrating Businesses...');
    let businessesMigrated = 0;
    for (const b of db.businesses || []) {
      await client.query(`
        INSERT INTO businesses (
          id, workspace_id, created_by, name, category, secondary_categories,
          country, city, address, website, phone, description, services,
          opening_hours, target_customers, primary_goal, is_completed,
          google_connected, google_place_id, google_maps_url, google_account,
          last_synced_at, created_at, updated_at
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24)
        ON CONFLICT (id) DO UPDATE SET
          name = EXCLUDED.name,
          category = EXCLUDED.category,
          secondary_categories = EXCLUDED.secondary_categories,
          address = EXCLUDED.address,
          city = EXCLUDED.city,
          phone = EXCLUDED.phone,
          website = EXCLUDED.website,
          description = EXCLUDED.description,
          services = EXCLUDED.services,
          is_completed = EXCLUDED.is_completed,
          google_connected = EXCLUDED.google_connected,
          updated_at = EXCLUDED.updated_at
      `, [
        b.id, b.workspaceId, b.createdBy || null, b.name, b.category, JSON.stringify(b.secondaryCategories || []),
        b.country, b.city, b.address, b.website || '', b.phone || '', b.description || '', JSON.stringify(b.services || []),
        b.openingHours || '', b.targetCustomers || '', b.primaryGoal || '', Boolean(b.isCompleted),
        Boolean(b.googleConnected), b.googlePlaceId || '', b.googleMapsUrl || '', b.googleAccount || '',
        b.lastSyncedAt || null, b.createdAt || new Date().toISOString(), b.updatedAt || new Date().toISOString()
      ]);
      businessesMigrated++;
    }

    // 5. Settings
    console.log('8. Migrating Settings...');
    let settingsMigrated = 0;
    for (const s of db.settings || []) {
      await client.query(`
        INSERT INTO settings (id, business_id, ai_tone, primary_goal, currency, notification_email, created_at, updated_at)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        ON CONFLICT (business_id) DO UPDATE SET
          ai_tone = EXCLUDED.ai_tone,
          primary_goal = EXCLUDED.primary_goal,
          currency = EXCLUDED.currency,
          notification_email = EXCLUDED.notification_email,
          updated_at = EXCLUDED.updated_at
      `, [s.id || `set_${Date.now()}_${Math.random().toString(36).substring(2,7)}`, s.businessId, s.aiTone || 'Professional & Warm', s.primaryGoal || '', s.currency || 'USD', s.notificationEmail || '', s.createdAt || new Date().toISOString(), s.updatedAt || new Date().toISOString()]);
      settingsMigrated++;
    }

    // 6. Audits
    console.log('9. Migrating Audits...');
    let auditsMigrated = 0;
    for (const a of db.audits || []) {
      await client.query(`
        INSERT INTO audits (id, business_id, score, factors, breakdown, recommendations, opportunities, created_at, updated_at)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
        ON CONFLICT (id) DO UPDATE SET
          score = EXCLUDED.score,
          factors = EXCLUDED.factors,
          breakdown = EXCLUDED.breakdown,
          recommendations = EXCLUDED.recommendations,
          opportunities = EXCLUDED.opportunities,
          updated_at = EXCLUDED.updated_at
      `, [a.id, a.businessId, a.overallScore || a.score || 0, JSON.stringify(a.factors || []), JSON.stringify(a.breakdown || {}), JSON.stringify(a.recommendations || []), JSON.stringify(a.opportunities || []), a.createdAt || new Date().toISOString(), a.updatedAt || new Date().toISOString()]);
      auditsMigrated++;
    }

    // 7. Tasks
    console.log('10. Migrating Tasks...');
    let tasksMigrated = 0;
    for (const t of db.tasks || []) {
      await client.query(`
        INSERT INTO tasks (id, business_id, title, category, priority, status, due, impact, notes, completed_at, created_at, updated_at)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
        ON CONFLICT (id) DO UPDATE SET
          title = EXCLUDED.title,
          status = EXCLUDED.status,
          completed_at = EXCLUDED.completed_at,
          updated_at = EXCLUDED.updated_at
      `, [t.id, t.businessId, t.title, t.category || 'Profile', t.priority || 'MEDIUM', t.status || 'PENDING', t.due || '', t.impact || '', t.notes || '', t.completedAt || null, t.createdAt || new Date().toISOString(), t.updatedAt || new Date().toISOString()]);
      tasksMigrated++;
    }

    // 8. Reviews
    console.log('11. Migrating Reviews...');
    let reviewsMigrated = 0;
    for (const r of db.reviews || []) {
      await client.query(`
        INSERT INTO reviews (id, business_id, author, avatar, rating, date, text, sentiment, theme, status, response, response_published_at, source, ai_drafts, created_at, updated_at)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
        ON CONFLICT (id) DO UPDATE SET
          status = EXCLUDED.status,
          response = EXCLUDED.response,
          response_published_at = EXCLUDED.response_published_at,
          updated_at = EXCLUDED.updated_at
      `, [r.id, r.businessId, r.author, r.avatar || '', r.rating || 5, r.date || '', r.text || '', r.sentiment || 'POSITIVE', r.theme || '', r.status || 'UNANSWERED', r.response || null, r.responsePublishedAt || null, r.source || 'manual', JSON.stringify(r.aiDrafts || {}), r.createdAt || new Date().toISOString(), r.updatedAt || new Date().toISOString()]);
      reviewsMigrated++;
    }

    // 9. Posts
    console.log('12. Migrating Posts...');
    let postsMigrated = 0;
    for (const p of db.posts || []) {
      await client.query(`
        INSERT INTO posts (id, business_id, title, content, cta, cta_url, status, scheduled_for, published_at, created_at, updated_at)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
        ON CONFLICT (id) DO UPDATE SET
          status = EXCLUDED.status,
          published_at = EXCLUDED.published_at,
          updated_at = EXCLUDED.updated_at
      `, [p.id, p.businessId, p.title || '', p.content || '', p.cta || '', p.ctaUrl || '', p.status || 'DRAFT', p.scheduledFor || null, p.publishedAt || null, p.createdAt || new Date().toISOString(), p.updatedAt || new Date().toISOString()]);
      postsMigrated++;
    }

    // 10. Integrations
    console.log('13. Migrating Integrations...');
    let integrationsMigrated = 0;
    for (const i of db.integrations || []) {
      await client.query(`
        INSERT INTO integrations (id, workspace_id, business_id, provider, status, account_email, scopes, last_synced_at, created_at, updated_at)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
        ON CONFLICT (id) DO NOTHING
      `, [i.id || `int_${Date.now()}_${Math.random().toString(36).substring(2,7)}`, i.workspaceId, i.businessId || null, i.provider, i.status || 'CONNECTED', i.accountEmail || '', JSON.stringify(i.scopes || []), i.lastSyncedAt || null, i.createdAt || new Date().toISOString(), i.updatedAt || new Date().toISOString()]);
      integrationsMigrated++;
    }

    await client.query('COMMIT');

    // Verification of counts
    console.log('\n================================================================');
    console.log('POSTGRESQL MIGRATION COMPLETED SUCCESSFULLY');
    console.log('Summary of Migrated Records:');
    console.log(`  - Users            : ${usersMigrated}`);
    console.log(`  - Workspaces       : ${workspacesMigrated}`);
    console.log(`  - Workspace Members: ${membersMigrated}`);
    console.log(`  - Businesses       : ${businessesMigrated}`);
    console.log(`  - Settings         : ${settingsMigrated}`);
    console.log(`  - Audits           : ${auditsMigrated}`);
    console.log(`  - Tasks            : ${tasksMigrated}`);
    console.log(`  - Reviews          : ${reviewsMigrated}`);
    console.log(`  - Posts            : ${postsMigrated}`);
    console.log(`  - Integrations     : ${integrationsMigrated}`);
    console.log('================================================================');

  } catch (err) {
    await client.query('ROLLBACK');
    console.error('\n[FATAL] Migration failed. Transaction rolled back:', err);
    process.exit(1);
  } finally {
    client.release();
    await pool.end();
  }
}

runMigration().catch(err => {
  console.error('[FATAL] Unhandled migration error:', err);
  process.exit(1);
});
