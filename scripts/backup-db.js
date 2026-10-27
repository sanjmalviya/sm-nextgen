// Database Backup Utility for SM NextGen Growth OS
const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data');
const DB_FILE = path.join(DATA_DIR, 'growth_os_db.json');

if (!fs.existsSync(DB_FILE)) {
  console.error('[ERROR] Database file not found:', DB_FILE);
  process.exit(1);
}

const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
const BACKUP_FILE = path.join(DATA_DIR, `growth_os_db.backup.${timestamp}.json`);

try {
  fs.copyFileSync(DB_FILE, BACKUP_FILE);
  const data = JSON.parse(fs.readFileSync(BACKUP_FILE, 'utf8'));
  const counts = Object.keys(data).reduce((acc, table) => {
    acc[table] = Array.isArray(data[table]) ? data[table].length : 0;
    return acc;
  }, {});

  console.log('================================================================');
  console.log('DATABASE BACKUP CREATED SUCCESSFULLY');
  console.log(`Source: ${DB_FILE}`);
  console.log(`Backup: ${BACKUP_FILE}`);
  console.log('Record Counts:');
  for (const [k, v] of Object.entries(counts)) {
    console.log(`  - ${k.padEnd(20)}: ${v} records`);
  }
  console.log('================================================================');
} catch (err) {
  console.error('[FATAL] Backup creation failed:', err);
  process.exit(1);
}
