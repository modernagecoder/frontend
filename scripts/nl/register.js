'use strict';
/**
 * Registers a Netherlands cg- page in every registry that must know about it.
 * Missing any one of these is a page that 404s with all gates green (Oman
 * lesson, project_oman_wilayat_expansion). Idempotent: each edit checks for
 * its own presence first, and every anchor is asserted so a silent no-op is
 * impossible.
 *
 *   1. src/css/coding-global.css              accent for .cg-root.cg-<code>
 *   2. scripts/verify-cluster-pages.js        coding-global fileRe, siblingRe, markets
 *   3. scripts/check-cluster-uniqueness.js    coding-global fileRe
 *   4. scripts/wire-coding-global-routes.js   MARKETS table (slug, label)
 *   5. content/coding-global-dossiers.json    the dossier entry (+ pageType, bodyClass)
 *
 * Routing itself (_redirects, netlify.toml, sitemaps, llms.txt) is done by
 * wire-coding-global-routes.js, which build.js invokes after this.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');

function read(f) { return fs.readFileSync(path.join(ROOT, f), 'utf8'); }
function write(f, s) { fs.writeFileSync(path.join(ROOT, f), s, 'utf8'); }

function hexToRgb(hex) { const h = hex.replace('#', ''); return [0, 2, 4].map(i => parseInt(h.slice(i, i + 2), 16)); }

function registerCss(page) {
  const f = 'src/css/coding-global.css';
  let css = read(f);
  const eol = css.includes('\r\n') ? '\r\n' : '\n';
  const sel = `.cg-root.cg-${page.code}`;
  if (new RegExp('\\.cg-root\\.cg-' + page.code + '\\s*\\{').test(css)) return 'css: present';
  const marker = '/* Netherlands cluster. Accents from scripts/nl/lib/accent.js: 4.5:1 on all three paper tints, separated only from the pages each one links to. */';
  if (!css.includes(marker)) css = css.replace(/\s*$/, '') + eol + eol + marker + eol;
  const [r, g, b] = hexToRgb(page.accent);
  const line = `${sel}  { --cg-accent: ${page.accent}; --cg-accent-soft: rgba(${r},${g},${b},.10); }   /* ${page.accentRationale} */`;
  css = css.replace(/\s*$/, '') + eol + line + eol;
  write(f, css);
  return 'css: added';
}

function insertAlternation(src, reLabel, place) {
  // Insert "<place>|" right after "coding-classes-in-(" inside the coding-global block.
  const start = src.indexOf("'coding-global': {");
  if (start === -1) throw new Error('coding-global block not found');
  const key = reLabel + ': /^' + (reLabel === 'siblingRe' ? '\\/' : '') + 'coding-classes-in-(';
  const idx = src.indexOf(key, start);
  if (idx === -1) throw new Error(key + ' not found');
  const at = idx + key.length;
  const end = src.indexOf(')', at);
  const alts = src.slice(at, end).split('|');
  if (alts.includes(place)) return src;
  return src.slice(0, at) + place + '|' + src.slice(at);
}

function registerVerify(page) {
  const f = 'scripts/verify-cluster-pages.js';
  let s = read(f);
  const place = page.slug.replace(/^coding-classes-in-/, '');
  s = insertAlternation(s, 'fileRe', place);
  s = insertAlternation(s, 'siblingRe', place);
  const start = s.indexOf("'coding-global': {");
  const mk = s.indexOf('markets: [', start);
  if (mk === -1) throw new Error('markets array not found');
  const close = s.indexOf(']', mk);
  const slice = s.slice(mk, close);
  if (!new RegExp("'" + page.code + "'").test(slice)) {
    s = s.slice(0, close) + `, '${page.code}'` + s.slice(close);
  }
  write(f, s);
  return 'verify: registered';
}

function registerUniqueness(page) {
  const f = 'scripts/check-cluster-uniqueness.js';
  let s = read(f);
  s = insertAlternation(s, 'fileRe', page.slug.replace(/^coding-classes-in-/, ''));
  write(f, s);
  return 'uniqueness: registered';
}

function registerRoutes(page) {
  const f = 'scripts/wire-coding-global-routes.js';
  let s = read(f);
  if (s.includes(`['${page.slug}',`)) return 'routes table: present';
  const start = s.indexOf('const MARKETS = [');
  if (start === -1) throw new Error('MARKETS not found');
  const close = s.indexOf('\n];', start);
  if (close === -1) throw new Error('MARKETS close not found');
  const eol = s.includes('\r\n') ? '\r\n' : '\n';
  const line = `  ['${page.slug}', '${page.routeLabel.replace(/'/g, "\\'")}'],`;
  const marker = '  // Netherlands cluster (scripts/nl)';
  let head = s.slice(0, close).replace(/\r?\n$/, '');
  // The previous last entry may lack a trailing comma; without one the next
  // array literal parses as an index expression and the whole table collapses.
  if (/\]\s*$/.test(head)) head = head.replace(/\]\s*$/, '],');
  const body = s.includes(marker) ? line : marker + eol + line;
  s = head + eol + body + s.slice(close);
  write(f, s);
  return 'routes table: added';
}

function registerDossier(page) {
  const f = 'content/coding-global-dossiers.json';
  const raw = read(f);
  const crlf = raw.includes('\r\n');
  const d = JSON.parse(raw);
  const entry = Object.assign({ market: page.place.name, bodyClass: 'cg-' + page.code, pageType: page.pageType }, page.dossier);
  // Collision check before writing: no requiredMention may exist in any other dossier.
  for (const [slug, other] of Object.entries(d)) {
    if (slug === page.slug || slug === '_comment') continue;
    const shared = (entry.requiredMentions || []).filter(m => (other.requiredMentions || []).includes(m));
    if (shared.length) throw new Error(`dossier collision with ${slug}: ${shared.join(' | ')}`);
  }
  d[page.slug] = entry;
  let out = JSON.stringify(d, null, 2) + '\n';
  if (crlf) out = out.replace(/\n/g, '\r\n');
  write(f, out);
  return 'dossier: written';
}

function register(page) {
  return [registerCss(page), registerVerify(page), registerUniqueness(page), registerRoutes(page), registerDossier(page)];
}

module.exports = { register };
