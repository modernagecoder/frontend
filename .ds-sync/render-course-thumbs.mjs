// Renders the 16 course thumbnail cards in .ds-sync/course-thumbs/ to 800x450 PNGs
// in public/images/. Lives in .ds-sync/ so `import 'playwright'` resolves against
// .ds-sync/node_modules. Run from the repo root: node .ds-sync/render-course-thumbs.mjs
import { chromium } from 'playwright';
import { readFileSync, readdirSync } from 'node:fs';

const DIR = 'C:/Users/hp/Desktop/SkyCoders/kiro24/frontend/.ds-sync/course-thumbs';
const OUT = 'C:/Users/hp/Desktop/SkyCoders/kiro24/frontend/public/images';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 800, height: 450 } });
for (const f of readdirSync(DIR).filter(x => x.endsWith('.html'))) {
  const html = readFileSync(`${DIR}/${f}`, 'utf8');
  try { await page.setContent(html, { waitUntil: 'networkidle', timeout: 15000 }); } catch {}
  await page.evaluate(() => Promise.race([document.fonts ? document.fonts.ready : 0, new Promise(r => setTimeout(r, 5000))]));
  await page.screenshot({ path: `${OUT}/${f.replace('.html', '.png')}` });
  console.log('rendered', f);
}
await browser.close();
