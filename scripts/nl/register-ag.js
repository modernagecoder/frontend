'use strict';
/**
 * Registers a Netherlands ag- page in every build-ai registry:
 *
 *   1. src/css/ai-global.css               accent for .ag-root.ag-<code>
 *   2. scripts/verify-cluster-pages.js     build-ai fileRe, siblingRe, markets
 *   3. scripts/check-cluster-uniqueness.js build-ai fileRe
 *   4. scripts/wire-ai-global-routes.js    SLUGS + LLMS_LABELS
 *
 * Idempotent; every anchor asserted. Routing itself is done by
 * wire-ai-global-routes.js, which build.js invokes after this.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const read = f => fs.readFileSync(path.join(ROOT, f), 'utf8');
const write = (f, s) => fs.writeFileSync(path.join(ROOT, f), s, 'utf8');
const hexToRgb = hex => { const h = hex.replace('#', ''); return [0, 2, 4].map(i => parseInt(h.slice(i, i + 2), 16)); };

function registerCss(page) {
  const f = 'src/css/ai-global.css';
  let css = read(f);
  const eol = css.includes('\r\n') ? '\r\n' : '\n';
  if (new RegExp('\\.ag-root\\.ag-' + page.code + '\\s*\\{').test(css)) return 'css: present';
  const marker = '/* Netherlands cluster (scripts/nl). Accents from scripts/nl/lib/accent.js: 4.5:1 on all three paper tints. */';
  if (!css.includes(marker)) css = css.replace(/\s*$/, '') + eol + eol + marker + eol;
  const [r, g, b] = hexToRgb(page.accent);
  css = css.replace(/\s*$/, '') + eol + `.ag-root.ag-${page.code} { --ag-accent: ${page.accent}; --ag-accent-soft: rgba(${r},${g},${b},.09); }   /* ${page.accentRationale} */` + eol;
  write(f, css);
  return 'css: added';
}

function insertAlt(src, blockStart, key, slug) {
  const start = src.indexOf(blockStart);
  if (start === -1) throw new Error(blockStart + ' not found');
  const idx = src.indexOf(key, start);
  if (idx === -1) throw new Error(key + ' not found after ' + blockStart);
  const at = idx + key.length;
  const end = src.indexOf(')', at);
  if (src.slice(at, end).split('|').includes(slug)) return src;
  return src.slice(0, at) + slug + '|' + src.slice(at);
}

function registerVerify(page) {
  const f = 'scripts/verify-cluster-pages.js';
  let s = read(f);
  s = insertAlt(s, "'build-ai': {", 'fileRe: /^(', page.slug);
  s = insertAlt(s, "'build-ai': {", 'siblingRe: /^\\/(', page.slug);
  const start = s.indexOf("'build-ai': {");
  const mk = s.indexOf('markets: [', start);
  const close = s.indexOf(']', mk);
  if (!new RegExp("'" + page.code + "'").test(s.slice(mk, close))) s = s.slice(0, close) + `, '${page.code}'` + s.slice(close);
  write(f, s);
  return 'verify: registered';
}

function registerUniqueness(page) {
  const f = 'scripts/check-cluster-uniqueness.js';
  let s = read(f);
  s = insertAlt(s, "'build-ai': {", 'fileRe: /^(', page.slug);
  write(f, s);
  return 'uniqueness: registered';
}

function registerRoutes(page) {
  const f = 'scripts/wire-ai-global-routes.js';
  let s = read(f);
  const eol = s.includes('\r\n') ? '\r\n' : '\n';
  if (!s.includes(`'${page.slug}'`)) {
    const a = s.indexOf('const SLUGS = [');
    const aClose = s.indexOf(eol + '];', a);
    if (a === -1 || aClose === -1) throw new Error('SLUGS not found');
    let head = s.slice(0, aClose).replace(/\r?\n$/, '');
    if (/'\s*$/.test(head)) head = head + ',';
    s = head + eol + `  '${page.slug}',` + s.slice(aClose);
  }
  if (!s.includes(`'${page.slug}':`)) {
    const b = s.indexOf('const LLMS_LABELS = {');
    const bClose = s.indexOf(eol + '};', b);
    if (b === -1 || bClose === -1) throw new Error('LLMS_LABELS not found');
    let head = s.slice(0, bClose).replace(/\r?\n$/, '');
    if (/'\s*$/.test(head)) head = head + ',';
    s = head + eol + `  '${page.slug}': '${page.routeLabel.replace(/'/g, "\\'")}',` + s.slice(bClose);
  }
  write(f, s);
  return 'routes tables: registered';
}

function register(page) {
  return [registerCss(page), registerVerify(page), registerUniqueness(page), registerRoutes(page)];
}

module.exports = { register };
