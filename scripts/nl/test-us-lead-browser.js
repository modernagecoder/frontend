#!/usr/bin/env node
'use strict';
/**
 * Browser test of the US lead forms with the real country picker (src/js/country-code-selector.js) on the page.
 * Needs the dev server on :3001 and the built US pages. Stubs the lead API, so nothing reaches the backend.
 *
 *   node scripts/nl/test-us-lead-browser.js [slug ...]
 *
 * A US visitor's number must be sent as exactly 10 national digits starting 2-9 (NANP); short, long or
 * 0/1-led numbers are refused on the page. A visitor whose country differs (UK time zone, UK mobile) must
 * still be able to send: the picker hands the page an international number and the page must not refuse it.
 */
const { chromium } = require(require('path').join(process.cwd(), 'node_modules', 'playwright'));
const PAGES = process.argv.slice(2).length ? process.argv.slice(2) : ['congressional-app-challenge-guide', 'coding-and-ai-classes-in-north-carolina'];
const CASES = [
  // [label, timezone, typed, expect: 'sent:<digits>' | 'refused']
  ['US (415) 555-0123', 'America/New_York', '(415) 555-0123', 'sent:4155550123'],
  ['US +1 415 555 0123', 'America/New_York', '+1 415 555 0123', 'sent:4155550123'],
  ['US 9 digits', 'America/New_York', '415555012', 'refused'],
  ['US starts with 1 (1415555012)', 'America/New_York', '1415555012', 'refused'],
  ['UK visitor, UK mobile', 'Europe/London', '07700 900123', 'sent:any'],
  // The area code files a Toronto number as Canadian, so the US page's own 10-digit check stands aside.
  ['Toronto number on a New York clock', 'America/New_York', '(416) 555-0123', 'sent:4165550123']
];

let fails = 0;
const ok = (c, m) => { console.log((c ? 'ok    ' : 'FAIL  ') + m); if (!c) fails++; };

(async () => {
  const browser = await chromium.launch();
  for (const slug of PAGES) {
    for (const [label, tz, typed, expect] of CASES) {
      const ctx = await browser.newContext({ timezoneId: tz, viewport: { width: 1280, height: 900 } });
      const page = await ctx.newPage();
      const sent = [];
      await page.route(/(localhost:5000|backend-modernagecoders\.vercel\.app)\//, async route => {
        const body = route.request().postData() || '';
        sent.push(body);
        await route.fulfill({ status: 201, contentType: 'application/json', body: '{"success":true}' });
      });
      await page.goto('http://localhost:3001/' + slug, { waitUntil: 'networkidle', timeout: 60000 });
      const form = page.locator('form:has(input[type="tel"]), form:has(input[name="phone"])').last();
      await form.scrollIntoViewIfNeeded();
      for (const sel of ['input[name="name"]', 'input[type="text"]']) { const f = form.locator(sel).first(); if (await f.count()) { await f.fill('Test Parent'); break; } }
      const email = form.locator('input[type="email"]').first(); if (await email.count()) await email.fill('test@example.com');
      const grade = form.locator('input[name="grade"]').first(); if (await grade.count()) await grade.fill('Grade 9');
      for (const s of await form.locator('select').all()) { const opts = await s.locator('option').all(); for (const o of opts) { const v = await o.getAttribute('value'); if (v) { await s.selectOption(v); break; } } }
      await form.locator('input[type="tel"], input[name="phone"]').first().fill(typed);
      const submit = form.locator('button[type="submit"]').first();
      await submit.click();
      await page.waitForTimeout(800);
      // The picker may warn once about an unusual number and send on the second press.
      if (!sent.length) { await submit.click().catch(() => {}); await page.waitForTimeout(800); }
      const digitsSent = sent.map(b => { try { const j = JSON.parse(b); return String(j.phone || j.contact || j.phoneNumber || j.mobile || ''); } catch (e) { return b; } });
      if (expect === 'refused') ok(!sent.length, `${slug}: ${label} refused (sent ${sent.length})`);
      else if (expect === 'sent:any') ok(sent.length > 0, `${slug}: ${label} sent (${digitsSent.join(',') || 'nothing'})`);
      else ok(digitsSent.some(d => d.replace(/\D/g, '').endsWith(expect.slice(5)) && d.replace(/\D/g, '').length <= 11), `${slug}: ${label} sent as ${expect.slice(5)} (got ${digitsSent.join(',') || 'nothing'})`);
      await ctx.close();
    }
  }
  await browser.close();
  console.log(fails ? `${fails} FAILED` : 'US lead forms in the browser: all checks pass');
  process.exit(fails ? 1 : 0);
})();
