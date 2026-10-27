// PostgreSQL Database Driver for SM NextGen Growth OS
// Production-grade relational data access with connection pooling
import { Pool } from "pg";

let poolInstance = null;
let currentConnectionString = null;

export function getPool() {
  const connectionString =
    process.env.DATABASE_URL ||
    process.env.POSTGRES_URL ||
    process.env.SUPABASE_DB_URL;

  if (!connectionString) {
    return null;
  }

  if (!poolInstance || currentConnectionString !== connectionString) {
    currentConnectionString = connectionString;
    const isLocalhost = connectionString.includes("localhost") || connectionString.includes("127.0.0.1");
    poolInstance = new Pool({
      connectionString,
      ssl: isLocalhost ? false : { rejectUnauthorized: false },
      max: 10,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 10000
    });

    poolInstance.on("error", (err) => {
      console.error("[PostgreSQL Pool Error]: Unexpected client error", err);
    });
  }

  return poolInstance;
}

// Convert camelCase object keys to snake_case column names
export function toSnake(str) {
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}

// Convert snake_case column names to camelCase object keys
export function toCamel(str) {
  return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}

export function formatDocFromRow(row) {
  if (!row) return null;
  const doc = {};
  for (const [key, val] of Object.entries(row)) {
    const camelKey = toCamel(key);
    // Special camelCase mappings for acronyms
    if (key === "google_place_id") doc.googlePlaceId = val;
    else if (key === "google_maps_url") doc.googleMapsUrl = val;
    else if (key === "owner_id") doc.ownerId = val;
    else if (key === "user_id") doc.userId = val;
    else if (key === "workspace_id") doc.workspaceId = val;
    else if (key === "business_id") doc.businessId = val;
    else if (key === "password_hash") doc.passwordHash = val;
    else if (key === "cta_url") doc.ctaUrl = val;
    else if (key === "ai_tone") doc.aiTone = val;
    else if (key === "ai_drafts") doc.aiDrafts = val;
    else if (key === "secondary_categories") doc.secondaryCategories = val;
    else if (key === "opening_hours") doc.openingHours = val;
    else if (key === "target_customers") doc.targetCustomers = val;
    else if (key === "primary_goal") doc.primaryGoal = val;
    else if (key === "is_completed") doc.isCompleted = Boolean(val);
    else if (key === "google_connected") doc.googleConnected = Boolean(val);
    else if (key === "notification_email") doc.notificationEmail = val;
    else if (key === "account_email") doc.accountEmail = val;
    else if (key === "completed_at") doc.completedAt = val;
    else if (key === "published_at") doc.publishedAt = val;
    else if (key === "scheduled_for") doc.scheduledFor = val;
    else if (key === "last_synced_at") doc.lastSyncedAt = val;
    else if (key === "response_published_at") doc.responsePublishedAt = val;
    else if (key === "created_at") doc.createdAt = val instanceof Date ? val.toISOString() : val;
    else if (key === "updated_at") doc.updatedAt = val instanceof Date ? val.toISOString() : val;
    else doc[camelKey] = val;
  }
  return doc;
}

const JSON_COLUMNS = new Set([
  "secondary_categories",
  "services",
  "factors",
  "breakdown",
  "recommendations",
  "opportunities",
  "ai_drafts",
  "scopes"
]);

export class PostgresCollection {
  constructor(tableName) {
    this.tableName = tableName;
  }

  async find(query = {}) {
    const pool = getPool();
    if (!pool) {
      throw new Error("DATABASE_URL is not configured for PostgreSQL connection.");
    }

    const whereClauses = [];
    const values = [];
    let idx = 1;

    for (const [key, val] of Object.entries(query)) {
      const col = toSnake(key);
      whereClauses.push(`${col} = $${idx}`);
      values.push(val);
      idx++;
    }

    const whereSql = whereClauses.length > 0 ? `WHERE ${whereClauses.join(" AND ")}` : "";
    const sql = `SELECT * FROM ${this.tableName} ${whereSql} ORDER BY created_at ASC`;

    try {
      const res = await pool.query(sql, values);
      return res.rows.map(formatDocFromRow);
    } catch (err) {
      console.error(`[PostgreSQL] Query failed on ${this.tableName}:`, err.message);
      throw err;
    }
  }

  async findOne(query = {}) {
    const results = await this.find(query);
    return results[0] || null;
  }

  async insertOne(doc) {
    const pool = getPool();
    if (!pool) {
      throw new Error("DATABASE_URL is not configured for PostgreSQL connection.");
    }

    const id = doc.id || `${this.tableName.slice(0, 3)}_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const fullDoc = {
      ...doc,
      id,
      createdAt: doc.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    const columns = [];
    const placeholders = [];
    const values = [];
    let idx = 1;

    for (const [key, val] of Object.entries(fullDoc)) {
      const col = toSnake(key);
      columns.push(col);
      placeholders.push(`$${idx}`);
      if (JSON_COLUMNS.has(col) && typeof val === "object" && val !== null) {
        values.push(JSON.stringify(val));
      } else {
        values.push(val);
      }
      idx++;
    }

    const sql = `INSERT INTO ${this.tableName} (${columns.join(", ")}) VALUES (${placeholders.join(", ")}) RETURNING *`;

    try {
      const res = await pool.query(sql, values);
      return formatDocFromRow(res.rows[0]);
    } catch (err) {
      console.error(`[PostgreSQL] Insert failed on ${this.tableName}:`, err.message);
      throw err;
    }
  }

  async updateOne(query, updates) {
    const pool = getPool();
    if (!pool) {
      throw new Error("DATABASE_URL is not configured for PostgreSQL connection.");
    }

    const setClauses = [];
    const values = [];
    let idx = 1;

    const fullUpdates = {
      ...updates,
      updatedAt: new Date().toISOString()
    };

    for (const [key, val] of Object.entries(fullUpdates)) {
      if (key === "id") continue;
      const col = toSnake(key);
      setClauses.push(`${col} = $${idx}`);
      if (JSON_COLUMNS.has(col) && typeof val === "object" && val !== null) {
        values.push(JSON.stringify(val));
      } else {
        values.push(val);
      }
      idx++;
    }

    if (setClauses.length === 0) return null;

    const whereClauses = [];
    for (const [key, val] of Object.entries(query)) {
      const col = toSnake(key);
      whereClauses.push(`${col} = $${idx}`);
      values.push(val);
      idx++;
    }

    const sql = `UPDATE ${this.tableName} SET ${setClauses.join(", ")} WHERE ${whereClauses.join(" AND ")} RETURNING *`;

    try {
      const res = await pool.query(sql, values);
      return formatDocFromRow(res.rows[0]) || null;
    } catch (err) {
      console.error(`[PostgreSQL] Update failed on ${this.tableName}:`, err.message);
      throw err;
    }
  }

  async deleteOne(query) {
    const pool = getPool();
    if (!pool) {
      throw new Error("DATABASE_URL is not configured for PostgreSQL connection.");
    }

    const whereClauses = [];
    const values = [];
    let idx = 1;

    for (const [key, val] of Object.entries(query)) {
      const col = toSnake(key);
      whereClauses.push(`${col} = $${idx}`);
      values.push(val);
      idx++;
    }

    const sql = `DELETE FROM ${this.tableName} WHERE ctid IN (SELECT ctid FROM ${this.tableName} WHERE ${whereClauses.join(" AND ")} LIMIT 1)`;

    try {
      const res = await pool.query(sql, values);
      return res.rowCount > 0;
    } catch (err) {
      console.error(`[PostgreSQL] Delete failed on ${this.tableName}:`, err.message);
      throw err;
    }
  }

  async deleteMany(query) {
    const pool = getPool();
    if (!pool) {
      throw new Error("DATABASE_URL is not configured for PostgreSQL connection.");
    }

    const whereClauses = [];
    const values = [];
    let idx = 1;

    for (const [key, val] of Object.entries(query)) {
      const col = toSnake(key);
      whereClauses.push(`${col} = $${idx}`);
      values.push(val);
      idx++;
    }

    const whereSql = whereClauses.length > 0 ? `WHERE ${whereClauses.join(" AND ")}` : "";
    const sql = `DELETE FROM ${this.tableName} ${whereSql}`;

    try {
      const res = await pool.query(sql, values);
      return res.rowCount > 0;
    } catch (err) {
      console.error(`[PostgreSQL] DeleteMany failed on ${this.tableName}:`, err.message);
      throw err;
    }
  }

  async count(query = {}) {
    const pool = getPool();
    if (!pool) {
      throw new Error("DATABASE_URL is not configured for PostgreSQL connection.");
    }

    const whereClauses = [];
    const values = [];
    let idx = 1;

    for (const [key, val] of Object.entries(query)) {
      const col = toSnake(key);
      whereClauses.push(`${col} = $${idx}`);
      values.push(val);
      idx++;
    }

    const whereSql = whereClauses.length > 0 ? `WHERE ${whereClauses.join(" AND ")}` : "";
    const sql = `SELECT COUNT(*)::int as count FROM ${this.tableName} ${whereSql}`;

    try {
      const res = await pool.query(sql, values);
      return res.rows[0]?.count || 0;
    } catch (err) {
      console.error(`[PostgreSQL] Count failed on ${this.tableName}:`, err.message);
      throw err;
    }
  }
}
