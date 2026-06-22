/**
 * normalize-review-counts.js
 * ------------------------------------------------------------------
 * Sets every JSON-LD aggregateRating `reviewCount` to the real, verified
 * Google Business Profile review count (547) across src/pages/*.html.
 *
 * Why: the pages previously carried fabricated, inconsistent counts
 * (105–2140; several ABOVE the real total) which is exactly the pattern
 * Google flags as spammy structured data. ratingValue is already "4.9"
 * everywhere — the real rating — so it is left untouched.
 *
 * Safety: this ONLY rewrites the digits inside `"reviewCount": "<n>"` in
 * JSON-LD. It never touches visible page copy (e.g. "487+ Students
 * Enrolled"), so there is zero visual/layout change. Idempotent.
 *
 * Run:  node scripts/normalize-review-counts.js
 */

const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(__dirname, '..', 'src', 'pages');
const REAL_COUNT = '547';
const RE = /("reviewCount"\s*:\s*")\d+(")/g;

let filesChanged = 0;
let occurrences = 0;

function walk(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(full));
    else if (e.name.endsWith('.html')) out.push(full);
  }
  return out;
}

for (const full of walk(PAGES_DIR)) {
  const src = fs.readFileSync(full, 'utf8');
  let n = 0;
  const out = src.replace(RE, (_m, a, b) => { n += 1; return `${a}${REAL_COUNT}${b}`; });
  if (out !== src) {
    fs.writeFileSync(full, out, 'utf8');
    filesChanged += 1;
    occurrences += n;
  }
}

console.log(`reviewCount normalized to ${REAL_COUNT}: ${filesChanged} files, ${occurrences} occurrences.`);
