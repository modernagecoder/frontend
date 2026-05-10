/**
 * Relax client-side `validatePhone` functions across all HTML pages so that
 * non-India users picked through the global country-code dropdown aren't
 * blocked by a hardcoded /^[0-9]{10}$/ rule.
 *
 * Idempotent: skips files that already use the new dataset-aware check.
 *
 * Usage: node scripts/relax-phone-validators.js
 */
const fs = require('fs');
const path = require('path');

const FRONTEND_ROOT = path.resolve(__dirname, '..');
const SEARCH_DIRS = [path.join(FRONTEND_ROOT, 'src', 'pages')];

// New body (compact form) — keeps semantics identical for India and allows
// 7–15 digits everywhere else. Looks at the most likely tel input on the page
// based on common ids used in our templates.
const NEW_BODY = `
            const cleaned = (phone || '').replace(/\\D/g, '');
            const _ccEl = document.getElementById('contactPhone') || document.getElementById('phone') || document.querySelector('input[type="tel"][data-country-iso]');
            const _iso = (_ccEl && _ccEl.dataset && _ccEl.dataset.countryIso) || 'IN';
            const _re = _iso === 'IN' ? /^[0-9]{10}$/ : /^[0-9]{7,15}$/;
            return _re.test(cleaned);
        `;

// Match patterns we use — accept varied whitespace/quoting.
const VARIANTS = [
  /function\s+validatePhone\s*\(\s*phone\s*\)\s*\{\s*const\s+re\s*=\s*\/\^\[0-9\]\{10\}\$\/\s*;\s*const\s+cleaned\s*=\s*phone\.replace\([^)]+\)\s*;\s*return\s+re\.test\(cleaned\)\s*;\s*\}/,
  /function\s+validatePhone\s*\(\s*phone\s*\)\s*\{\s*return\s*\/\^\[0-9\]\{10\}\$\/\s*\.test\(\s*phone\.replace\([^)]+\)\s*\)\s*;\s*\}/
];

function walk(dir, out) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.isFile() && full.endsWith('.html')) out.push(full);
  }
}

function transform(file) {
  const original = fs.readFileSync(file, 'utf8');

  // Skip files we've already converted (the new helper uses _ccEl / _iso / _re).
  if (/_ccEl|_iso === 'IN'/.test(original)) return { file, status: 'skip-already' };

  let updated = original;
  let matched = false;
  for (const re of VARIANTS) {
    if (re.test(updated)) {
      updated = updated.replace(re, `function validatePhone(phone) {${NEW_BODY}}`);
      matched = true;
      break;
    }
  }
  if (!matched) return { file, status: 'skip-no-match' };

  fs.writeFileSync(file, updated, 'utf8');
  return { file, status: 'updated' };
}

function main() {
  const files = [];
  for (const d of SEARCH_DIRS) walk(d, files);

  const counts = { updated: 0, 'skip-already': 0, 'skip-no-match': 0 };
  for (const f of files) {
    const r = transform(f);
    counts[r.status]++;
  }

  console.log('relax-phone-validators results:');
  console.log('  updated         :', counts.updated);
  console.log('  already relaxed :', counts['skip-already']);
  console.log('  no validator    :', counts['skip-no-match']);
  console.log('  total scanned   :', files.length);
}

main();
