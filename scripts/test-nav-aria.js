#!/usr/bin/env node
/**
 * test-nav-aria.js
 * ------------------------------------------------------------------
 * Proves the navigation is only marked hidden when it really is
 * off-screen. Three nav scripts (unified-mobile-nav.js,
 * mobile-navigation.js and the copy inside mainbundle.js) used to set
 * aria-hidden="true" on #navMenu at load regardless of viewport, so on
 * a desktop the fully visible menu was announced as hidden to screen
 * readers and to any agent reading the accessibility tree.
 *
 * Run with the dev server up (npm run dev, port 3001):
 *   NODE_PATH=<dir containing node_modules/playwright> node scripts/test-nav-aria.js
 * Playwright lives in the sibling dashboard3 project on this machine;
 * pass PLAYWRIGHT_ROOT to point somewhere else.
 */
'use strict';
const path = require('path');
const PW_ROOT = process.env.PLAYWRIGHT_ROOT || 'C:/Users/hp/Desktop/SkyCoders/dashboard3/node_modules';
const { chromium } = require(path.join(PW_ROOT, 'playwright'));

const BASE = process.env.BASE_URL || 'http://localhost:3001';
// One page per nav script: mainbundle.js (/), unified-mobile-nav.js (/book-demo),
// mobile-navigation.js (/courses and every generated course page).
const PAGES = ['/', '/book-demo', '/courses', '/courses/python-complete-masterclass-teens'];

// The nav scripts initialise after the componentsLoaded event or a 1 s fallback
// timer, so over a real network a fixed wait is a coin toss. Wait for the script's
// own ready flag (both nav scripts set one), then settle briefly.
async function navReady(page) {
  await page.waitForFunction(
    () => window.__mobileNavInitialized || window.__unifiedMobileNavInitialized,
    null,
    { timeout: 8000 }
  ).catch(() => { /* pages that use navigation.js set no flag; fall through */ });
  await page.waitForTimeout(250);
}

async function state(page) {
  return page.evaluate(() => {
    const menu = document.getElementById('navMenu');
    const btn = document.getElementById('mobileMenuBtn');
    const link = menu && menu.querySelector('.nav-link');
    const btnShown = btn && getComputedStyle(btn).display !== 'none';
    return {
      ariaHidden: menu ? menu.getAttribute('aria-hidden') : 'NO_MENU',
      expanded: btn ? btn.getAttribute('aria-expanded') : 'NO_BTN',
      hamburgerVisible: !!btnShown,
      firstLinkVisible: !!(link && link.getClientRects().length && getComputedStyle(link).visibility !== 'hidden'),
    };
  });
}

(async () => {
  const browser = await chromium.launch();
  const failures = [];
  for (const url of PAGES) {
    // Desktop: the menu is visible, so it must not be aria-hidden.
    const d = await browser.newPage({ viewport: { width: 1280, height: 800 } });
    await d.goto(BASE + url, { waitUntil: 'load' });
    await navReady(d);
    const ds = await state(d);
    if (ds.hamburgerVisible) failures.push(`${url} @1280: hamburger is visible on desktop`);
    if (ds.ariaHidden === 'true') failures.push(`${url} @1280: #navMenu is aria-hidden="true" while visible`);
    if (!ds.firstLinkVisible) failures.push(`${url} @1280: first nav link not rendered`);
    await d.close();

    // Mobile: closed menu is hidden, open menu is not.
    const m = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
    await m.goto(BASE + url, { waitUntil: 'load' });
    await navReady(m);
    const closed = await state(m);
    if (!closed.hamburgerVisible) failures.push(`${url} @390: hamburger not visible`);
    if (closed.ariaHidden !== 'true') failures.push(`${url} @390 closed: expected aria-hidden="true", got ${closed.ariaHidden}`);
    await m.click('#mobileMenuBtn');
    await m.waitForTimeout(400);
    const open = await state(m);
    if (open.ariaHidden === 'true') failures.push(`${url} @390 open: menu still aria-hidden="true"`);
    if (open.expanded !== 'true') failures.push(`${url} @390 open: aria-expanded is ${open.expanded}`);
    await m.close();
    console.log(`${url}: desktop aria-hidden=${ds.ariaHidden} · mobile closed=${closed.ariaHidden} open=${open.ariaHidden} expanded=${open.expanded}`);
  }
  await browser.close();
  if (failures.length) {
    console.error('\nNAV ARIA FAILED:');
    failures.forEach((f) => console.error('  - ' + f));
    process.exit(1);
  }
  console.log('✓ nav aria: visible navigation is never marked hidden, off-screen navigation is.');
})().catch((e) => { console.error(e); process.exit(1); });
