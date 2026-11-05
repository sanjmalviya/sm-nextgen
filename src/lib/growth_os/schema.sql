-- SM NextGen Growth OS — Relational Production PostgreSQL Schema
-- Compatible with PostgreSQL 14+, Supabase PostgreSQL, Neon Serverless Postgres, AWS RDS

-- 1. USERS & IDENTITIES
CREATE TABLE IF NOT EXISTS users (
  id VARCHAR(64) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(32) NOT NULL DEFAULT 'USER',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);

-- 2. WORKSPACES
CREATE TABLE IF NOT EXISTS workspaces (
  id VARCHAR(64) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  owner_id VARCHAR(64) NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  plan VARCHAR(32) NOT NULL DEFAULT 'STARTER',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_workspaces_owner ON workspaces(owner_id);

-- 3. WORKSPACE MEMBERS (Many-to-Many Tenant Isolation)
CREATE TABLE IF NOT EXISTS workspace_members (
  id VARCHAR(64) PRIMARY KEY,
  workspace_id VARCHAR(64) NOT NULL REFERENCES workspaces(id) ON DELETE CASCADE,
  user_id VARCHAR(64) NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  role VARCHAR(32) NOT NULL DEFAULT 'MEMBER',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT uq_workspace_member UNIQUE (workspace_id, user_id)
);

CREATE INDEX IF NOT EXISTS idx_workspace_members_user ON workspace_members(user_id);
CREATE INDEX IF NOT EXISTS idx_workspace_members_ws ON workspace_members(workspace_id);

-- 4. BUSINESS PROFILES
CREATE TABLE IF NOT EXISTS businesses (
  id VARCHAR(64) PRIMARY KEY,
  workspace_id VARCHAR(64) NOT NULL REFERENCES workspaces(id) ON DELETE CASCADE,
  created_by VARCHAR(64) REFERENCES users(id) ON DELETE SET NULL,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(255) NOT NULL,
  secondary_categories JSONB DEFAULT '[]'::jsonb,
  country VARCHAR(128) NOT NULL,
  city VARCHAR(128) NOT NULL,
  address TEXT NOT NULL,
  website VARCHAR(512),
  phone VARCHAR(64),
  description TEXT,
  services JSONB DEFAULT '[]'::jsonb,
  opening_hours VARCHAR(255),
  target_customers TEXT,
  primary_goal VARCHAR(255),
  is_completed BOOLEAN NOT NULL DEFAULT false,
  google_connected BOOLEAN NOT NULL DEFAULT false,
  google_place_id VARCHAR(255),
  google_maps_url TEXT,
  google_account VARCHAR(255),
  store_code VARCHAR(64) DEFAULT '03602514580438245940',
  cid VARCHAR(64) DEFAULT '14709717892477010566',
  gmb_rating NUMERIC(2,1) DEFAULT 5.0,
  gmb_review_count INTEGER DEFAULT 9,
  last_synced_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_businesses_workspace ON businesses(workspace_id);

-- 5. WORKSPACE & BUSINESS SETTINGS
CREATE TABLE IF NOT EXISTS settings (
  id VARCHAR(64) PRIMARY KEY,
  business_id VARCHAR(64) NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
  ai_tone VARCHAR(64) DEFAULT 'Professional & Warm',
  primary_goal VARCHAR(255),
  currency VARCHAR(16) DEFAULT 'USD',
  notification_email VARCHAR(255),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT uq_settings_business UNIQUE (business_id)
);

CREATE INDEX IF NOT EXISTS idx_settings_business ON settings(business_id);

-- 6. PROFILE AUDITS & DIAGNOSTICS
CREATE TABLE IF NOT EXISTS audits (
  id VARCHAR(64) PRIMARY KEY,
  business_id VARCHAR(64) NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
  score INTEGER NOT NULL,
  summary TEXT,
  factors JSONB NOT NULL DEFAULT '[]'::jsonb,
  breakdown JSONB NOT NULL DEFAULT '{}'::jsonb,
  recommendations JSONB NOT NULL DEFAULT '[]'::jsonb,
  opportunities JSONB NOT NULL DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_audits_business ON audits(business_id);

-- 7. ACTION CENTER TASKS
CREATE TABLE IF NOT EXISTS tasks (
  id VARCHAR(64) PRIMARY KEY,
  business_id VARCHAR(64) NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
  title VARCHAR(512) NOT NULL,
  category VARCHAR(128) NOT NULL,
  priority VARCHAR(32) NOT NULL DEFAULT 'MEDIUM',
  status VARCHAR(32) NOT NULL DEFAULT 'PENDING',
  due VARCHAR(64),
  impact VARCHAR(64),
  notes TEXT,
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_tasks_business ON tasks(business_id);
CREATE INDEX IF NOT EXISTS idx_tasks_status ON tasks(status);

-- 8. CUSTOMER REVIEWS & AI DRAFTS
CREATE TABLE IF NOT EXISTS reviews (
  id VARCHAR(64) PRIMARY KEY,
  business_id VARCHAR(64) NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
  author VARCHAR(255) NOT NULL,
  avatar VARCHAR(16),
  rating INTEGER NOT NULL DEFAULT 5,
  date VARCHAR(64),
  text TEXT NOT NULL,
  sentiment VARCHAR(32) NOT NULL DEFAULT 'POSITIVE',
  theme VARCHAR(128),
  status VARCHAR(32) NOT NULL DEFAULT 'UNANSWERED',
  response TEXT,
  response_published_at TIMESTAMPTZ,
  source VARCHAR(64) DEFAULT 'manual',
  ai_drafts JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_reviews_business ON reviews(business_id);
CREATE INDEX IF NOT EXISTS idx_reviews_status ON reviews(status);

-- 9. DEDICATED VERIFIED GMB REVIEWS REPOSITORY (Zero Fake Data)
CREATE TABLE IF NOT EXISTS gmb_reviews (
  id VARCHAR(64) PRIMARY KEY,
  business_id VARCHAR(64) NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
  user_id VARCHAR(64) REFERENCES users(id) ON DELETE SET NULL,
  google_review_id VARCHAR(255),
  author_name VARCHAR(255) NOT NULL,
  author_photo_url TEXT,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review_text TEXT NOT NULL,
  review_date VARCHAR(64),
  sentiment VARCHAR(32) NOT NULL DEFAULT 'POSITIVE',
  theme VARCHAR(128),
  status VARCHAR(32) NOT NULL DEFAULT 'UNANSWERED',
  response_text TEXT,
  response_published_at TIMESTAMPTZ,
  source VARCHAR(64) DEFAULT 'google_sync',
  is_verified BOOLEAN NOT NULL DEFAULT true,
  ai_drafts JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_gmb_reviews_biz ON gmb_reviews(business_id);
CREATE INDEX IF NOT EXISTS idx_gmb_reviews_rating ON gmb_reviews(rating);
CREATE INDEX IF NOT EXISTS idx_gmb_reviews_status ON gmb_reviews(status);

-- 10. GMB PERFORMANCE TELEMETRY
CREATE TABLE IF NOT EXISTS gmb_telemetry (
  id VARCHAR(64) PRIMARY KEY,
  business_id VARCHAR(64) NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  search_impressions INTEGER NOT NULL DEFAULT 0,
  maps_impressions INTEGER NOT NULL DEFAULT 0,
  website_clicks INTEGER NOT NULL DEFAULT 0,
  call_clicks INTEGER NOT NULL DEFAULT 0,
  direction_requests INTEGER NOT NULL DEFAULT 0,
  bookings INTEGER NOT NULL DEFAULT 0,
  rating NUMERIC(2,1) DEFAULT 5.0,
  total_reviews INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT uq_gmb_telemetry_biz_date UNIQUE (business_id, date)
);

CREATE INDEX IF NOT EXISTS idx_gmb_telemetry_biz ON gmb_telemetry(business_id);
CREATE INDEX IF NOT EXISTS idx_gmb_telemetry_date ON gmb_telemetry(date);

-- 11. PASSWORD RESET TOKENS
CREATE TABLE IF NOT EXISTS password_resets (
  id VARCHAR(64) PRIMARY KEY,
  user_id VARCHAR(64) NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  email VARCHAR(255) NOT NULL,
  token VARCHAR(255) NOT NULL UNIQUE,
  expires_at TIMESTAMPTZ NOT NULL,
  used BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_password_resets_token ON password_resets(token);
CREATE INDEX IF NOT EXISTS idx_password_resets_email ON password_resets(email);

-- 12. GOOGLE UPDATES & POSTS
CREATE TABLE IF NOT EXISTS posts (
  id VARCHAR(64) PRIMARY KEY,
  business_id VARCHAR(64) NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
  title VARCHAR(255),
  content TEXT NOT NULL,
  cta VARCHAR(64) DEFAULT 'Call Now',
  cta_url TEXT,
  status VARCHAR(32) NOT NULL DEFAULT 'DRAFT',
  scheduled_for TIMESTAMPTZ,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_posts_business ON posts(business_id);

-- 13. EXTERNAL INTEGRATIONS & OAUTH TOKENS
CREATE TABLE IF NOT EXISTS integrations (
  id VARCHAR(64) PRIMARY KEY,
  workspace_id VARCHAR(64) NOT NULL REFERENCES workspaces(id) ON DELETE CASCADE,
  business_id VARCHAR(64) REFERENCES businesses(id) ON DELETE SET NULL,
  provider VARCHAR(64) NOT NULL,
  status VARCHAR(32) NOT NULL DEFAULT 'CONNECTED',
  account_email VARCHAR(255),
  scopes JSONB DEFAULT '[]'::jsonb,
  access_token TEXT,
  refresh_token TEXT,
  token_type VARCHAR(64) DEFAULT 'Bearer',
  expires_at TIMESTAMPTZ,
  metadata JSONB DEFAULT '{}'::jsonb,
  last_synced_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_integrations_ws ON integrations(workspace_id);
