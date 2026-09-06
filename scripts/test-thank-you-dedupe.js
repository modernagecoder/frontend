#!/usr/bin/env node
/**
 * test-thank-you-dedupe.js
 * Proves the thank-you page counts a lead once per server id, and never on a
 * direct visit. Needs the dev server (port 3001) and Playwright (see
 * test-nav-aria.js for PLAYWRIGHT_ROOT).
 */
'use strict';
const path = require('path');
const PW_ROOT = process.env.PLAYWRIGHT_ROOT || 'C:/Users/hp/Desktop/SkyCoders/dashboard3/node_modules';
const { chromium } = require(path.join(PW_ROOT, 'playwright'));
const BASE = process.env.BASE_URL || 'http://localhost:3001';

async function leadEvents(page) {
  return page.evaluate(() => (window.dataLayer || []).filter((e) => e && e[0] === 'event' && e[1] === 'lead_thank_you').length);
}

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext();
  // block the real tag so the page uses the inline gtag() stub that only pushes to dataLayer
  await ctx.route('**googletagmanager.com/**', (r) => r.abort());
  const page = await ctx.newPage();
  const failures = [];
  const lid = 'test-' + Date.now();

  await page.goto(`${BASE}/thank-you?src=book-demo&lid=${lid}`, { waitUntil: 'load' });
  const first = await leadEvents(page);
  if (first !== 1) failures.push(`first visit with lid fired ${first} events, expected 1`);

  await page.reload({ waitUntil: 'load' });
  const second = await leadEvents(page);
  if (second !== 0) failures.push(`reload fired ${second} events, expected 0`);

  await page.goto(`${BASE}/thank-you?src=book-demo&lid=${lid}`, { waitUntil: 'load' });
  const third = await leadEvents(page);
  if (third !== 0) failures.push(`revisit with same lid fired ${third} events, expected 0`);

  await page.goto(`${BASE}/thank-you`, { waitUntil: 'load' });
  const direct = await leadEvents(page);
  if (direct !== 0) failures.push(`direct visit fired ${direct} events, expected 0`);

  await page.goto(`${BASE}/thank-you?src=callback`, { waitUntil: 'load' });
  const legacy1 = await leadEvents(page);
  await page.reload({ waitUntil: 'load' });
  const legacy2 = await leadEvents(page);
  if (legacy1 !== 1 || legacy2 !== 0) failures.push(`legacy src-only: first=${legacy1} reload=${legacy2}, expected 1 then 0`);

  await browser.close();
  console.log(`lid first=${first} reload=${second} revisit=${third} · direct=${direct} · src-only first=${legacy1} reload=${legacy2}`);
  if (failures.length) { console.error('THANK-YOU DEDUPE FAILED:'); failures.forEach((f) => console.error('  - ' + f)); process.exit(1); }
  console.log('✓ thank-you counts a lead once per id, never on a direct visit.');
})().catch((e) => { console.error(e); process.exit(1); });
