// Renders the Roblox + Minecraft thumbnail cards to 800x450 PNGs in public/images/.
// Same pipeline as render-git-thumbs.mjs. Run from repo root: node .ds-sync/render-game-thumbs.mjs
import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';

const DIR = 'C:/Users/hp/Desktop/SkyCoders/kiro24/frontend/.ds-sync/course-thumbs';
const OUT = 'C:/Users/hp/Desktop/SkyCoders/kiro24/frontend/public/images';
const CARDS = ['roblox-coding-kids', 'minecraft-coding-kids'];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 800, height: 450 } });
for (const name of CARDS) {
  const html = readFileSync(`${DIR}/${name}.html`, 'utf8');
  try { await page.setContent(html, { waitUntil: 'networkidle', timeout: 15000 }); } catch {}
  await page.evaluate(() => Promise.race([document.fonts ? document.fonts.ready : 0, new Promise(r => setTimeout(r, 5000))]));
  await page.screenshot({ path: `${OUT}/${name}.png` });
  console.log('rendered', name);
}
await browser.close();
