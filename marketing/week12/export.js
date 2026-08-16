// Week 12: render all 42 carousel slides to 1080x1080 PNGs.
// Run from the frontend/ dir:  node marketing/week12/export.js
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const BASE = 'http://localhost:8157/marketing/week12/html';
const OUT = path.join(__dirname);

const CAROUSELS = [
  { id: 1, folder: '01-recursion' },
  { id: 2, folder: '02-big-o' },
  { id: 3, folder: '03-list-copy-trap' },
  { id: 4, folder: '04-how-ai-learns' },
  { id: 5, folder: '05-dictionaries' },
  { id: 6, folder: '06-apis' },
  { id: 7, folder: '07-binary' },
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1080 }, deviceScaleFactor: 1 });
  const report = [];

  for (const c of CAROUSELS) {
    const dir = path.join(OUT, c.folder);
    fs.mkdirSync(dir, { recursive: true });
    for (let s = 1; s <= 6; s++) {
      const url = `${BASE}/c${c.id}-${s}.html`;
      await page.goto(url, { waitUntil: 'networkidle' });
      const info = await page.evaluate(async () => {
        await document.fonts.ready;
        const imgs = [...document.images];
        await Promise.all(imgs.map(im => im.complete ? 1 : new Promise(r => { im.onload = im.onerror = r; })));
        await new Promise(r => setTimeout(r, 120));
        const main = document.querySelector('.main'), fit = document.querySelector('.fit');
        let scale = 1;
        if (main && fit) {
          fit.style.transform = 'none';
          scale = Math.min(1, main.clientHeight / fit.scrollHeight, main.clientWidth / fit.scrollWidth);
          if (scale < 1) fit.style.transform = `scale(${scale.toFixed(4)})`;
        }
        const fr = document.querySelector('.frame');
        return {
          scale: +scale.toFixed(3),
          broken: imgs.filter(i => !i.naturalWidth).map(i => i.getAttribute('src')),
          overflow: fr ? (fr.scrollHeight > 1082 || fr.scrollWidth > 1082) : null,
        };
      });
      const file = path.join(dir, `${s}.png`);
      await page.screenshot({ path: file });
      report.push({ slide: `c${c.id}-${s}`, ...info });
    }
  }

  await browser.close();

  const bad = report.filter(r => r.broken.length || r.overflow);
  console.log(`rendered ${report.length} slides`);
  console.log('scaled slides:', report.filter(r => r.scale < 1).map(r => `${r.slide}@${r.scale}`).join(', ') || 'none');
  console.log('PROBLEMS:', bad.length ? JSON.stringify(bad, null, 1) : 'none');
})();
