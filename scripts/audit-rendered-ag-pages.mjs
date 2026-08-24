// Rendered audit for the vibe coding and AI series (15 ag- pages).
// Serves the repo with Netlify-like rewrites, then measures the RENDERED
// pages at 1280 and 390: console page errors, horizontal overflow, pick
// thumbnails actually loaded, sub-12px visible text, and the ag-btn
// colour-vs-background contrast trap. Alpha-composited contrast.
import http from 'http';
import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';

import { fileURLToPath } from 'url';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const require2 = createRequire(path.join(ROOT, 'package.json'));
const { chromium } = require2('playwright');
const SLUGS = [
  'what-is-vibe-coding','vibe-coding-for-teens','vibe-coding-for-beginners',
  'parents-guide-to-vibe-coding','vibe-coding-projects-for-students',
  'learn-to-code-with-ai','ai-coding-course','build-apps-with-ai',
  'ai-agents-for-teens','ai-literacy-for-students','should-my-child-learn-ai',
  'best-ai-courses-for-teens-2026','ai-projects-for-kids','ai-classes-for-adults',
  'one-on-one-ai-classes'
];

const MIME = { '.html':'text/html', '.css':'text/css', '.js':'text/javascript',
  '.webp':'image/webp', '.png':'image/png', '.svg':'image/svg+xml', '.ico':'image/x-icon', '.jpg':'image/jpeg' };

const server = http.createServer((req, res) => {
  let url = req.url.split('?')[0];
  let file = null;
  if (url.startsWith('/css/')) file = path.join(ROOT, 'src', url);
  else if (url.startsWith('/js/')) file = path.join(ROOT, 'src', url);
  else if (url.startsWith('/images/') || url.startsWith('/favicon')) file = path.join(ROOT, 'public', url);
  else file = path.join(ROOT, 'src/pages', url.replace(/^\//, '') + '.html');
  if (file && fs.existsSync(file) && fs.statSync(file).isFile()) {
    res.writeHead(200, { 'content-type': MIME[path.extname(file)] || 'application/octet-stream' });
    res.end(fs.readFileSync(file));
  } else { res.writeHead(404); res.end('nf'); }
});
await new Promise(r => server.listen(8765, r));

const browser = await chromium.launch();
let failures = 0;

for (const slug of SLUGS) {
  for (const [w, h] of [[1280, 900], [390, 844]]) {
    const page = await browser.newPage({ viewport: { width: w, height: h } });
    const errs = [];
    page.on('pageerror', e => errs.push('pageerror: ' + String(e).slice(0, 90)));
    page.on('console', m => {
      if (m.type() === 'error' && !/net::|Failed to load resource|googletagmanager|google-analytics/.test(m.text()))
        errs.push('console: ' + m.text().slice(0, 90));
    });
    await page.goto(`http://localhost:8765/${slug}`, { waitUntil: 'load', timeout: 30000 });
    await page.waitForTimeout(400);

    const r = await page.evaluate(() => {
      const out = { overflow: 0, picks: 0, picksBroken: 0, tiny: [], btnBad: [], smallTap: 0 };
      out.overflow = document.documentElement.scrollWidth - document.documentElement.clientWidth;
      // pick thumbnails
      document.querySelectorAll('.ag-pick-shot img').forEach(img => {
        out.picks++; if (!img.complete || img.naturalWidth === 0) out.picksBroken++;
      });
      // visible text under 12px
      const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      const seen = new Set();
      while (walk.nextNode()) {
        const el = walk.currentNode.parentElement;
        if (!el || seen.has(el) || !walk.currentNode.textContent.trim()) continue;
        seen.add(el);
        const cs = getComputedStyle(el);
        if (cs.display === 'none' || cs.visibility === 'hidden') continue;
        const fs2 = parseFloat(cs.fontSize);
        if (fs2 < 12) out.tiny.push(el.className + ' ' + fs2.toFixed(1));
      }
      // contrast helpers with alpha compositing over ancestors
      function parse(c) { const m = c.match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?\)/); return m ? [+m[1], +m[2], +m[3], m[4] === undefined ? 1 : +m[4]] : null; }
      function bgOf(el) {
        let rgb = [255, 255, 255]; const stack = [];
        for (let n = el; n; n = n.parentElement) stack.unshift(n);
        for (const n of stack) {
          const c = parse(getComputedStyle(n).backgroundColor);
          if (c && c[3] > 0) rgb = [0, 1, 2].map(i => c[i] * c[3] + rgb[i] * (1 - c[3]));
        }
        return rgb;
      }
      function lum(rgb) { const s = rgb.map(v => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }); return 0.2126 * s[0] + 0.7152 * s[1] + 0.0722 * s[2]; }
      function ratio(a, b) { const l1 = Math.max(lum(a), lum(b)), l2 = Math.min(lum(a), lum(b)); return (l1 + 0.05) / (l2 + 0.05); }
      document.querySelectorAll('.ag-btn').forEach(b => {
        const cs = getComputedStyle(b);
        const fg = parse(cs.color); if (!fg) return;
        const bg = bgOf(b);
        const rr = ratio([fg[0], fg[1], fg[2]], bg);
        if (rr < 4.5) out.btnBad.push((b.textContent.trim().slice(0, 22)) + ' ' + rr.toFixed(2));
        const rect = b.getBoundingClientRect();
        if (rect.height > 0 && rect.height < 40) out.smallTap++;
      });
      return out;
    });

    const bad = [];
    if (errs.length) bad.push('js errors: ' + errs.join(' | '));
    if (r.overflow > 1) bad.push('horizontal overflow ' + r.overflow + 'px');
    if (r.picks !== 3 || r.picksBroken) bad.push(`picks ${r.picks}, broken ${r.picksBroken}`);
    if (r.tiny.length) bad.push('sub-12px text: ' + r.tiny.slice(0, 3).join(' ; '));
    if (r.btnBad.length) bad.push('low-contrast btn: ' + r.btnBad.slice(0, 3).join(' ; '));
    if (bad.length) { failures++; console.log(`FAIL ${w}px ${slug}\n      ` + bad.join('\n      ')); }
    else console.log(`PASS ${w}px ${slug}` + (r.smallTap ? `  (note: ${r.smallTap} taps <40px)` : ''));
    await page.close();
  }
}
await browser.close();
server.close();
console.log(failures ? `\n${failures} page-width failures` : '\nAll rendered checks pass.');
process.exit(failures ? 1 : 0);
