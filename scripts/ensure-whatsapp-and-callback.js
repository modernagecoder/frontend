/**
 * ensure-whatsapp-and-callback.js
 * ------------------------------------------------------------------
 * Guarantees, idempotently, that every customer-facing page has:
 *   1. The floating WhatsApp chat button (wa.me/919123366161)
 *   2. A "contact 9123366161 directly for a faster response" line
 *      inside the Request-a-Callback modal (form view + success view)
 *
 * Safe to re-run any time (e.g. after generating new pages) — it only
 * touches files that are missing a piece, and never duplicates.
 *
 * Run from the `frontend` directory:  node scripts/ensure-whatsapp-and-callback.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const WA_NUMBER = '919123366161';

// Directories that hold customer-facing HTML we are allowed to touch.
const INCLUDE_DIRS = [
  'src/pages',
  'content/courses/generated',
  'content/courses/template',
  'content/blog/generated',
  'content/blog/template',
  'components',
];
// Single files outside those dirs.
const INCLUDE_FILES = ['login.html'];

// Never touch these (internal panels, separate app, deps, build output).
const EXCLUDE = [
  'node_modules', 'dist', '.git', '.superpowers', '.kiro', '.claude',
  'src/admin', 'src/subadmin', 'lovewall',
];

// ---- Snippets -----------------------------------------------------

const WHATSAPP_BUTTON = `
<!-- WhatsApp Floating Chat Button (injected: ensure-whatsapp-and-callback.js) -->
<a href="https://wa.me/${WA_NUMBER}?text=Hi%2C%20I'm%20interested%20in%20learning%20more%20about%20your%20courses!"
    target="_blank" rel="noopener noreferrer" class="wa-float-btn" aria-label="Chat on WhatsApp"
    style="position: fixed !important; bottom: 24px !important; right: 24px !important; z-index: 2147483645 !important; display: flex !important; flex-direction: row !important; align-items: center !important; gap: 10px !important; text-decoration: none !important;">
    <span class="wa-label" style="background: #25D366; color: #fff; padding: 8px 16px; border-radius: 20px; font-size: 13px; font-weight: 600; white-space: nowrap; box-shadow: 0 4px 14px rgba(37, 211, 102, 0.4); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; letter-spacing: 0.3px;">Chat with us</span>
    <div class="wa-icon" style="width: 52px; height: 52px; min-width: 52px; min-height: 52px; background: #25D366; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 14px rgba(37, 211, 102, 0.4); transition: transform 0.2s, box-shadow 0.2s; flex-shrink: 0;">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff" style="min-width: 26px; min-height: 26px;">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
    </div>
</a>
<style>
    .wa-float-btn:hover .wa-icon { transform: scale(1.08); box-shadow: 0 6px 20px rgba(37, 211, 102, 0.5); }
    .wa-float-btn:hover .wa-label { box-shadow: 0 6px 20px rgba(37, 211, 102, 0.5); }
    @media (max-width: 768px) {
        .wa-label { display: none !important; visibility: hidden !important; }
        .wa-float-btn { bottom: 20px !important; right: 16px !important; }
        .wa-icon { width: 52px !important; height: 52px !important; min-width: 52px !important; min-height: 52px !important; }
    }
</style>
`;

// Callback modal — form view: shown under "we'll call you right back!"
const CALLBACK_FORM_ANCHOR = `we'll call you right back!</p>`;
const CALLBACK_FORM_LINE = `${CALLBACK_FORM_ANCHOR}
        <p class="callback-direct-line" style="font-size:13.5px; color:#374151; margin:-12px 0 22px; line-height:1.5;">Or contact <a href="https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%20need%20help%20%E2%80%93%20please%20get%20in%20touch" target="_blank" rel="noopener noreferrer" style="color:#10b981; font-weight:700; text-decoration:none;">9123366161</a> directly for a faster response</p>`;

// Callback modal — success view: shown under "Expect a call within 3 hours"
const CALLBACK_SUCCESS_ANCHOR = `Expect a call within 3 hours</p>`;
const CALLBACK_SUCCESS_LINE = `${CALLBACK_SUCCESS_ANCHOR}
            <p class="callback-success-direct" style="font-size:13px; color:#374151; margin:12px 0 0;">For a faster response, contact <a href="https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%20just%20requested%20a%20callback" target="_blank" rel="noopener noreferrer" style="color:#10b981; font-weight:700; text-decoration:none;">9123366161</a> directly</p>`;

// ---- Helpers ------------------------------------------------------

function isExcluded(rel) {
  const norm = rel.split(path.sep).join('/');
  return EXCLUDE.some((e) => norm === e || norm.startsWith(e + '/'));
}

function walk(dir, out) {
  let entries;
  try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    const rel = path.relative(ROOT, full);
    if (isExcluded(rel)) continue;
    if (ent.isDirectory()) walk(full, out);
    else if (ent.isFile() && ent.name.endsWith('.html')) out.push(full);
  }
}

function injectWhatsApp(html) {
  // Already has the button anywhere → skip.
  if (html.includes('wa-float-btn')) return null;
  // Has a footer-placeholder → footer.html supplies the button at build/runtime.
  // Injecting here would create a duplicate, so skip.
  if (html.includes('footer-placeholder')) return null;
  const idx = html.lastIndexOf('</body>');
  if (idx === -1) return null;
  return html.slice(0, idx) + WHATSAPP_BUTTON + '\n' + html.slice(idx);
}

function injectCallbackLines(html) {
  let changed = false;
  if (html.includes(CALLBACK_FORM_ANCHOR) && !html.includes('callback-direct-line')) {
    html = html.replace(CALLBACK_FORM_ANCHOR, CALLBACK_FORM_LINE);
    changed = true;
  }
  if (html.includes(CALLBACK_SUCCESS_ANCHOR) && !html.includes('callback-success-direct')) {
    html = html.replace(CALLBACK_SUCCESS_ANCHOR, CALLBACK_SUCCESS_LINE);
    changed = true;
  }
  return changed ? html : null;
}

// ---- Main ---------------------------------------------------------

const files = [];
for (const d of INCLUDE_DIRS) walk(path.join(ROOT, d), files);
for (const f of INCLUDE_FILES) {
  const full = path.join(ROOT, f);
  if (fs.existsSync(full)) files.push(full);
}

const stats = { scanned: 0, wa: 0, cbForm: 0, cbSuccess: 0, written: 0 };
const waChanged = [];

for (const file of files) {
  stats.scanned++;
  let html = fs.readFileSync(file, 'utf8');
  const before = html;

  const hadForm = html.includes(CALLBACK_FORM_ANCHOR) && !html.includes('callback-direct-line');
  const hadSuccess = html.includes(CALLBACK_SUCCESS_ANCHOR) && !html.includes('callback-success-direct');

  const cb = injectCallbackLines(html);
  if (cb) { html = cb; if (hadForm) stats.cbForm++; if (hadSuccess) stats.cbSuccess++; }

  const wa = injectWhatsApp(html);
  if (wa) { html = wa; stats.wa++; waChanged.push(path.relative(ROOT, file)); }

  if (html !== before) {
    fs.writeFileSync(file, html);
    stats.written++;
  }
}

console.log('--- ensure-whatsapp-and-callback ---');
console.log('HTML files scanned        :', stats.scanned);
console.log('WhatsApp button added     :', stats.wa);
console.log('Callback form line added  :', stats.cbForm);
console.log('Callback success line add :', stats.cbSuccess);
console.log('Files written             :', stats.written);
if (waChanged.length) {
  console.log('\nPages that received the WhatsApp button:');
  waChanged.forEach((f) => console.log('  +', f));
}
