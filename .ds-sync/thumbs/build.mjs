// Renders course thumbnail cards to 800x450 PNGs in public/images/.
//   node .ds-sync/thumbs/build.mjs python-kids scratch-kids
//   node .ds-sync/thumbs/build.mjs --all
// Card specs live in .ds-sync/thumbs/cards/<image-base-name>.mjs
import { chromium } from 'playwright';
import { readdirSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { renderCard } from './system.mjs';

const ROOT = 'C:/Users/hp/Desktop/SkyCoders/kiro24/frontend';
const CARDS = `${ROOT}/.ds-sync/thumbs/cards`;
const OUT = `${ROOT}/public/images`;

let names = process.argv.slice(2);
if (names.length === 1 && names[0] === '--all') {
  names = readdirSync(CARDS).filter(f => f.endsWith('.mjs')).map(f => f.replace('.mjs', ''));
}
if (!names.length) { console.error('usage: build.mjs <card-name>... | --all'); process.exit(1); }

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 800, height: 450 } });
for (const name of names) {
  const mod = await import(pathToFileURL(`${CARDS}/${name}.mjs`).href);
  const html = renderCard(mod.default);
  try { await page.setContent(html, { waitUntil: 'networkidle', timeout: 20000 }); } catch {}
  await page.evaluate(() => Promise.race([document.fonts ? document.fonts.ready : 0, new Promise(r => setTimeout(r, 5000))]));
  await page.screenshot({ path: `${OUT}/${name}.png` });
  console.log('rendered', name);
}
await browser.close();
