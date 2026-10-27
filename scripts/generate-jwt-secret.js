// Script to safely generate and configure a 256-bit cryptographic JWT secret
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const envPath = path.join(__dirname, '..', '.env');
let envContent = fs.existsSync(envPath) ? fs.readFileSync(envPath, 'utf8') : '';

if (/^JWT_SECRET\s*=\s*\S+/m.test(envContent)) {
  console.log('[INFO] JWT_SECRET is already configured in .env. No action needed.');
} else {
  // Generate 256-bit high-entropy secret
  const secret = crypto.randomBytes(32).toString('hex');
  const newLine = envContent.endsWith('\n') || envContent.length === 0 ? '' : '\n';
  fs.appendFileSync(envPath, `${newLine}# Cryptographically secure session secret for SM NextGen Growth OS\nJWT_SECRET=${secret}\n`, 'utf8');
  console.log('[OK] Generated 256-bit cryptographically secure JWT_SECRET and saved to .env (value suppressed for security).');
}
