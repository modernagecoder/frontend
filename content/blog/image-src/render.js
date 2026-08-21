// Render one post's figures to PNGs.
//
//   node content/blog/image-src/render.js <slug> [...more slugs]
//
// Reads every NN-name.html in content/blog/image-src/<slug>/, takes the canvas
// size from that file's own --w/--h, and writes public/images/blog/<slug>/NN-name.png.
//
// Loaded over file:// rather than through a local server. The figures only ever
// reference ../base.css and inline SVG, so a server buys nothing and a stale
// port or a cached response has cost this project time before.
//
// The report is the point: a figure whose content overflows its frame, or whose
// image failed to load, is named on stdout rather than shipped unseen.
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const SRC = __dirname;
const OUT = path.join(__dirname, '..', '..', '..', 'public', 'images', 'blog');

const FIT = async () => {
  await document.fonts.ready;
  const imgs = [...document.images];
  await Promise.all(imgs.map(i => (i.complete ? 1 : new Promise(r => { i.onload = i.onerror = r; }))));
  await new Promise(r => setTimeout(r, 120));
  const main = document.querySelector('.main');
  const fit = document.querySelector('.fit');
  let scale = 1;
  let escapes = null;
  if (main && fit) {
    // scrollHeight under-reports: box shadows, the last line's descender and a
    // flex footer that can shrink all conspired to leave content painted under
    // the footer bar on four figures in a row. So compute a first guess, then
    // MEASURE, and keep shrinking until the painted box is genuinely inside.
    fit.style.transform = 'none';
    scale = Math.min(1, main.clientHeight / fit.scrollHeight, main.clientWidth / fit.scrollWidth);
    for (let i = 0; i < 14; i++) {
      fit.style.transform = scale < 1 ? `scale(${scale.toFixed(4)})` : 'none';
      const m = main.getBoundingClientRect();
      const f = fit.getBoundingClientRect();
      const over = Math.max(m.top - f.top, f.bottom - m.bottom, m.left - f.left, f.right - m.right);
      if (over <= 0.5) { escapes = 0; break; }
      escapes = +over.toFixed(1);
      scale *= 0.97;
    }
  }
  const frame = document.querySelector('.frame') || document.body;
  return {
    scale: +scale.toFixed(3),
    escapes,
    broken: imgs.filter(i => !i.naturalWidth).map(i => i.getAttribute('src')),
    overflowY: frame.scrollHeight - frame.clientHeight,
    overflowX: frame.scrollWidth - frame.clientWidth,
  };
};

(async () => {
  const slugs = process.argv.slice(2);
  if (!slugs.length) { console.error('usage: node render.js <slug> [...]'); process.exit(2); }

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 675 }, deviceScaleFactor: 1 });
  const problems = [];
  let n = 0;

  for (const slug of slugs) {
    const dir = path.join(SRC, slug);
    if (!fs.existsSync(dir)) { console.error(`no such figure folder: ${dir}`); process.exit(2); }
    const outDir = path.join(OUT, slug);
    fs.mkdirSync(outDir, { recursive: true });

    for (const file of fs.readdirSync(dir).filter(f => f.endsWith('.html')).sort()) {
      const url = 'file://' + path.join(dir, file).replace(/\\/g, '/');
      await page.goto(url, { waitUntil: 'load' });
      // the canvas size lives in the figure's own :root, so read it, then lay
      // the page out again at exactly that size
      const size = await page.evaluate(() => {
        const cs = getComputedStyle(document.documentElement);
        return { w: parseInt(cs.getPropertyValue('--w')) || 1200,
                 h: parseInt(cs.getPropertyValue('--h')) || 675 };
      });
      await page.setViewportSize({ width: size.w, height: size.h });
      await page.goto(url, { waitUntil: 'load' });
      const info = await page.evaluate(FIT);
      const png = path.join(outDir, file.replace(/\.html$/, '.png'));
      await page.screenshot({ path: png });
      n++;
      const tag = `${slug}/${file}`;
      // a figure squeezed below 0.8 is legible on a laptop and not on a phone,
      // so it is a problem to fix in the CSS, not a success to report
      if (info.broken.length || info.overflowY > 1 || info.overflowX > 1 ||
          info.escapes > 0.5 || info.scale < 0.8) {
        problems.push({ figure: tag, ...info, size });
      }
      console.log(`  ${tag}  ${size.w}x${size.h}${info.scale < 1 ? `  fit@${info.scale}` : ''}`);
    }
  }

  await browser.close();
  console.log(`\nrendered ${n} figures`);
  console.log('PROBLEMS:', problems.length ? '\n' + JSON.stringify(problems, null, 1) : 'none');
  if (problems.length) process.exit(1);
})();
