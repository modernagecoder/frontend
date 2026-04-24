// One-shot: update per-course JSON data files to the 3-tier pricing structure.
// Adds miniBatch, bumps personal from 2499 to 4999. Preserves existing lifetime values.
// Idempotent — skips files that already have miniBatch.

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'content', 'courses', 'data');

const files = fs.readdirSync(DATA_DIR).filter(f => f.endsWith('.json') && f !== 'courses-config.json');

let updated = 0;
let skipped = 0;
const reasons = [];

for (const f of files) {
  const full = path.join(DATA_DIR, f);
  const raw = fs.readFileSync(full, 'utf8');

  let parsed;
  try { parsed = JSON.parse(raw); } catch (e) {
    reasons.push(`${f}: invalid JSON — ${e.message}`);
    skipped++;
    continue;
  }

  const price = parsed?.meta?.price;
  if (!price || typeof price !== 'object') {
    reasons.push(`${f}: no meta.price block`);
    skipped++;
    continue;
  }

  if (price.miniBatch) {
    reasons.push(`${f}: already has miniBatch — skipped`);
    skipped++;
    continue;
  }

  const oldPersonal = price.personal;
  const needsUpdate =
    typeof oldPersonal === 'string' && /2[,]?499/.test(oldPersonal);

  if (!needsUpdate) {
    reasons.push(`${f}: personal="${oldPersonal}" — not the 2499 pattern, skipped`);
    skipped++;
    continue;
  }

  // Rebuild price in canonical order: group, miniBatch, personal, lifetime, ...
  const rebuilt = {};
  if (price.group) rebuilt.group = price.group;
  rebuilt.miniBatch = '₹2499/month';
  rebuilt.personal = '₹4999/month';
  for (const k of Object.keys(price)) {
    if (k === 'group' || k === 'miniBatch' || k === 'personal') continue;
    rebuilt[k] = price[k];
  }

  parsed.meta.price = rebuilt;

  // Preserve original newline style; pretty-print with 2 spaces.
  const out = JSON.stringify(parsed, null, 2) + '\n';
  fs.writeFileSync(full, out, 'utf8');
  updated++;
  reasons.push(`${f}: updated (was "${oldPersonal}")`);
}

console.log(`\n${updated} updated, ${skipped} skipped (of ${files.length} total).\n`);
for (const r of reasons) console.log('  ' + r);
