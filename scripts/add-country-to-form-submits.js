/**
 * Patch every page that builds a `contact: phone` JSON body manually so the
 * country picker's choice is included in the request body directly — no
 * reliance on the global fetch hook.
 *
 * Looks for the pattern (with any indentation):
 *
 *     body: JSON.stringify({
 *         name: ...,
 *         email: ...,
 *         contact: phone,
 *         message: ...
 *     })
 *
 * and rewrites it to also include countryCode / countryIso / countryName
 * read from #contactPhone (or #phone) via window.MACCountryCode.read().
 *
 * Idempotent: skips bodies that already mention countryCode.
 *
 * Usage: node scripts/add-country-to-form-submits.js
 */
const fs = require('fs');
const path = require('path');

const FRONTEND_ROOT = path.resolve(__dirname, '..');
const SEARCH_DIRS = [path.join(FRONTEND_ROOT, 'src', 'pages')];

function walk(dir, out) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.isFile() && full.endsWith('.html')) out.push(full);
  }
}

// Matches: contact: phone[,)] inside JSON.stringify({...}) bodies that don't
// already include countryCode. We do a light, careful transform: read the
// phone variable name and inject country fields right after the contact line.
const CONTACT_LINE_RE = /(JSON\.stringify\(\{[\s\S]{0,1200}?)contact\s*:\s*([A-Za-z_$][A-Za-z0-9_$]*)\s*,([\s\S]{0,1200}?\}\))/g;

function transform(file) {
  const original = fs.readFileSync(file, 'utf8');

  // Skip files we already converted.
  if (/countryCode\s*:\s*cc\.dial/.test(original) || /MACCountryCode\.read/.test(original)) {
    return { status: 'skip-already' };
  }

  let touched = false;
  const updated = original.replace(CONTACT_LINE_RE, function (match, head, phoneVar, tail) {
    // If this body already includes countryCode somewhere in head/tail, leave alone.
    if (/countryCode/.test(match)) return match;
    touched = true;
    // Inject the country fields right after the contact line. We resolve the
    // dial/iso/name via window.MACCountryCode.read() if the helper is
    // available; otherwise fall back to the data attributes the picker writes
    // directly onto the input (also falling back to India).
    const inject =
      `contact: ${phoneVar},\n                            countryCode: ((window.MACCountryCode && window.MACCountryCode.read) ? window.MACCountryCode.read(document.getElementById('contactPhone') || document.getElementById('phone')).dial : '+91'),\n                            countryIso:  ((window.MACCountryCode && window.MACCountryCode.read) ? window.MACCountryCode.read(document.getElementById('contactPhone') || document.getElementById('phone')).iso  : 'IN'),\n                            countryName: ((window.MACCountryCode && window.MACCountryCode.read) ? window.MACCountryCode.read(document.getElementById('contactPhone') || document.getElementById('phone')).name : 'India'),`;
    return head + inject + tail;
  });

  if (!touched) return { status: 'skip-no-match' };
  fs.writeFileSync(file, updated, 'utf8');
  return { status: 'updated' };
}

function main() {
  const files = [];
  for (const d of SEARCH_DIRS) walk(d, files);

  const counts = { updated: 0, 'skip-already': 0, 'skip-no-match': 0 };
  for (const f of files) counts[transform(f).status]++;

  console.log('add-country-to-form-submits results:');
  console.log('  updated      :', counts.updated);
  console.log('  already done :', counts['skip-already']);
  console.log('  no match     :', counts['skip-no-match']);
  console.log('  total scanned:', files.length);
}

main();
