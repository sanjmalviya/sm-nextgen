// Unified Data-Access Layer for SM NextGen Growth OS
// Supports Managed PostgreSQL (Supabase, Neon, AWS RDS) with local file engine for offline dev.
import fs from "fs";
import path from "path";
import { PostgresCollection } from "./postgresDb.js";

const DATA_DIR = path.join(process.cwd(), "data");
const DB_FILE = path.join(DATA_DIR, "growth_os_db.json");

const hasPgConfig = Boolean(
  process.env.DATABASE_URL ||
  process.env.POSTGRES_URL ||
  process.env.SUPABASE_DB_URL
);

// In production, require managed PostgreSQL to prevent ephemeral serverless data loss
if (process.env.NODE_ENV === "production" && !hasPgConfig) {
  console.error("================================================================");
  console.error("FATAL CONFIG ERROR: DATABASE_URL is missing in production.");
  console.error("SM NextGen Growth OS requires a managed cloud PostgreSQL database");
  console.error("in production to prevent data loss on serverless hosting (e.g. Vercel).");
  console.error("================================================================");
}

// -------------------------------------------------------------
// Local Development Engine (Active only when DATABASE_URL unset)
// -------------------------------------------------------------
const INITIAL_SCHEMA = {
  users: [],
  workspaces: [],
  workspace_members: [],
  businesses: [],
  audits: [],
  tasks: [],
  reviews: [],
  posts: [],
  settings: [],
  integrations: []
};

function readLocalDb() {
  try {
    if (!fs.existsSync(DB_FILE)) {
      if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
      fs.writeFileSync(DB_FILE, JSON.stringify(INITIAL_SCHEMA, null, 2), "utf-8");
      return INITIAL_SCHEMA;
    }
    const data = fs.readFileSync(DB_FILE, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("[Local DB Error] Reading database file failed:", err);
    return INITIAL_SCHEMA;
  }
}

function writeLocalDb(data) {
  try {
    if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
    const tempFile = `${DB_FILE}.${Date.now()}.tmp`;
    fs.writeFileSync(tempFile, JSON.stringify(data, null, 2), "utf-8");
    fs.renameSync(tempFile, DB_FILE);
  } catch (err) {
    console.error("[Local DB Error] Write failed:", err);
    throw err;
  }
}

class LocalJsonCollection {
  constructor(name) {
    this.name = name;
  }

  async find(query = {}) {
    const dbData = readLocalDb();
    const items = dbData[this.name] || [];
    return items.filter(item => {
      for (const [key, val] of Object.entries(query)) {
        if (item[key] !== val) return false;
      }
      return true;
    });
  }

  async findOne(query = {}) {
    const results = await this.find(query);
    return results[0] || null;
  }

  async insertOne(doc) {
    const dbData = readLocalDb();
    if (!dbData[this.name]) dbData[this.name] = [];
    const id = doc.id || `${this.name.slice(0, 3)}_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const newDoc = {
      ...doc,
      id,
      createdAt: doc.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    dbData[this.name].push(newDoc);
    writeLocalDb(dbData);
    return newDoc;
  }

  async updateOne(query, updates) {
    const dbData = readLocalDb();
    const items = dbData[this.name] || [];
    const index = items.findIndex(item => {
      for (const [key, val] of Object.entries(query)) {
        if (item[key] !== val) return false;
      }
      return true;
    });

    if (index === -1) return null;

    const existing = items[index];
    const updated = {
      ...existing,
      ...updates,
      id: existing.id,
      updatedAt: new Date().toISOString()
    };
    dbData[this.name][index] = updated;
    writeLocalDb(dbData);
    return updated;
  }

  async deleteOne(query) {
    const dbData = readLocalDb();
    const items = dbData[this.name] || [];
    const index = items.findIndex(item => {
      for (const [key, val] of Object.entries(query)) {
        if (item[key] !== val) return false;
      }
      return true;
    });

    if (index === -1) return false;
    dbData[this.name].splice(index, 1);
    writeLocalDb(dbData);
    return true;
  }

  async deleteMany(query) {
    const dbData = readLocalDb();
    const items = dbData[this.name] || [];
    const remaining = items.filter(item => {
      for (const [key, val] of Object.entries(query)) {
        if (item[key] === val) return false;
      }
      return true;
    });
    dbData[this.name] = remaining;
    writeLocalDb(dbData);
    return true;
  }

  async count(query = {}) {
    const results = await this.find(query);
    return results.length;
  }
}

// -------------------------------------------------------------
// Unified Database Export with Dynamic Runtime Driver Selection
// -------------------------------------------------------------
class DynamicCollection {
  constructor(name, tableName) {
    this.name = name;
    this.tableName = tableName;
    this.localCol = new LocalJsonCollection(name);
    this.pgCol = new PostgresCollection(tableName);
  }

  getDriver() {
    const hasPg = Boolean(
      process.env.DATABASE_URL ||
      process.env.POSTGRES_URL ||
      process.env.SUPABASE_DB_URL
    );
    return hasPg ? this.pgCol : this.localCol;
  }

  async findOne(query) {
    return await this.getDriver().findOne(query);
  }

  async find(query, options) {
    return await this.getDriver().find(query, options);
  }

  async insertOne(doc) {
    return await this.getDriver().insertOne(doc);
  }

  async updateOne(query, updates) {
    return await this.getDriver().updateOne(query, updates);
  }

  async deleteOne(query) {
    return await this.getDriver().deleteOne(query);
  }

  async deleteMany(query) {
    return await this.getDriver().deleteMany(query);
  }

  async count(query = {}) {
    return await this.getDriver().count(query);
  }
}

function createCollection(name, tableName) {
  return new DynamicCollection(name, tableName);
}

export const db = {
  users: createCollection("users", "users"),
  workspaces: createCollection("workspaces", "workspaces"),
  workspaceMembers: createCollection("workspace_members", "workspace_members"),
  businesses: createCollection("businesses", "businesses"),
  audits: createCollection("audits", "audits"),
  tasks: createCollection("tasks", "tasks"),
  reviews: createCollection("reviews", "reviews"),
  posts: createCollection("posts", "posts"),
  settings: createCollection("settings", "settings"),
  integrations: createCollection("integrations", "integrations")
};

export default db;
