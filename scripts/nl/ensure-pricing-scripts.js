#!/usr/bin/env node
'use strict';
/**
 * Give one built page the two pricing scripts, content-hash versioned exactly as `npm run pricing:apply`
 * does (scripts/pricing/apply.js), so its data-price anchors show the visitor's currency in a local preview
 * and the committed file matches what the deploy build would produce. Idempotent.
 *
 *   node scripts/nl/ensure-pricing-scripts.js <slug>
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const ROOT = path.resolve(__dirname, '..', '..');
const lib = require(path.join(ROOT, 'scripts/pricing/apply-lib'));
const slug = process.argv[2];
if (!slug) { console.error('usage: ensure-pricing-scripts.js <slug>'); process.exit(2); }
const file = path.join(ROOT, 'src', 'pages', slug + '.html');
if (!fs.existsSync(file)) { console.error('no page ' + file); process.exit(2); }
const versions = {};
for (const src of lib.PRICING_SCRIPTS) {
  const p = path.join(ROOT, 'src', src.replace(/^\//, ''));
  if (fs.existsSync(p)) versions[src] = crypto.createHash('sha1').update(fs.readFileSync(p)).digest('hex').slice(0, 10);
}
const before = fs.readFileSync(file, 'utf8');
const after = lib.versionScripts(lib.ensureScripts(before, versions).html, versions);
if (after !== before) fs.writeFileSync(file, after, 'utf8');
const missing = lib.showsAPrice(after) ? lib.PRICING_SCRIPTS.filter(s => !after.includes(s + '?v=' + versions[s])) : [];
if (missing.length) { console.error('pricing scripts missing on ' + slug + ': ' + missing.join(', ')); process.exit(1); }
console.log(`pricing scripts ${after === before ? 'already present' : 'added'} on ${slug}`);
