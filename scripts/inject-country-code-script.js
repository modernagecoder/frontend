/**
 * Inject the global country-code selector script into every HTML page that
 * could host a phone-number form (i.e. anything under src/pages and the nav
 * component partial).
 *
 * Idempotent: skips files that already include country-code-selector.js.
 *
 * Usage: node scripts/inject-country-code-script.js
 */
const fs = require('fs');
const path = require('path');

const FRONTEND_ROOT = path.resolve(__dirname, '..');
const SCRIPT_TAG = '    <script src="/js/country-code-selector.js" defer></script>';
const NEEDLE = 'country-code-selector.js';

// Directories to scan recursively for .html files.
const SEARCH_DIRS = [
  path.join(FRONTEND_ROOT, 'src', 'pages'),
  path.join(FRONTEND_ROOT, 'components'),
  path.join(FRONTEND_ROOT, 'content'),
];

function walk(dir, out) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      // Skip backups / node_modules / generated archives we don't want to touch.
      if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
      walk(full, out);
    } else if (entry.isFile() && full.endsWith('.html')) {
      out.push(full);
    }
  }
}

function injectInto(file) {
  const original = fs.readFileSync(file, 'utf8');
  if (original.includes(NEEDLE)) return { file, status: 'skip-existing' };

  const closing = original.lastIndexOf('</body>');
  if (closing === -1) return { file, status: 'skip-no-body' };

  const updated =
    original.slice(0, closing) +
    SCRIPT_TAG + '\n' +
    original.slice(closing);

  fs.writeFileSync(file, updated, 'utf8');
  return { file, status: 'injected' };
}

function main() {
  const files = [];
  for (const dir of SEARCH_DIRS) walk(dir, files);

  const counts = { injected: 0, 'skip-existing': 0, 'skip-no-body': 0 };
  for (const f of files) {
    const result = injectInto(f);
    counts[result.status] = (counts[result.status] || 0) + 1;
  }

  console.log('country-code-selector.js injection results:');
  console.log('  injected      :', counts.injected);
  console.log('  already had it:', counts['skip-existing']);
  console.log('  no </body>    :', counts['skip-no-body']);
  console.log('  total scanned :', files.length);
}

main();
