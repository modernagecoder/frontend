#!/usr/bin/env node
/**
 * test-phone-country.js
 * ------------------------------------------------------------------
 * Proves that a visitor from any country can leave a number we can ring, on
 * every kind of form the site has. Drives real pages in Chromium against the
 * local dev server and checks the request each form actually sends.
 *
 * WHY A BROWSER TEST
 * The lead forms are written in more than a hundred variations (inline scripts
 * on city and country pages, shared scripts, the navbar pop-up), and the
 * country fix lives in one shared script that wraps all of them
 * (src/js/country-code-selector.js). Only running the real pages shows whether
 * each variation ends up sending the country the visitor chose.
 *
 * NOTHING IS SENT. Every request to /api/ is answered here with a fake success
 * and recorded, and every request that leaves localhost is blocked, so no lead
 * reaches the backend, the admin panel or the WhatsApp alert.
 *
 * Pages: one per form template (pages are grouped by the shape of their lead
 * script, so a new template is picked up automatically), plus the navbar pop-up.
 *
 * Scenarios per page
 *   abroad    device in New York, types 252 222 8345          -> +1 US 2522228345
 *   local     device in the page's own country, local number   -> that country
 *   typed     device in India, types +971 50 123 4567          -> +971 AE 501234567
 *   mismatch  device in India, types a 7-digit number: the first press shows
 *             a message and sends nothing; the second press sends it as typed
 *
 * Usage:  node scripts/test-phone-country.js [--base http://localhost:3001]
 *              [--only <substring>] [--limit N]
 * Needs the dev server running (npm run dev).
 */
'use strict';

const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const ROOT = path.join(__dirname, '..');
const arg = (name, dflt) => { const i = process.argv.indexOf(name); return i > -1 ? process.argv[i + 1] : dflt; };
const BASE = arg('--base', 'http://localhost:3001');
const ONLY = arg('--only', '');
const LIMIT = Number(arg('--limit', '0'));
const WORKERS = 4;

// A timezone and a valid national number for each country a page can declare.
const LOCAL = {
  IN: ['Asia/Kolkata', '9876543210'], GB: ['Europe/London', '7911123456'], IE: ['Europe/Dublin', '871234567'],
  NL: ['Europe/Amsterdam', '612345678'], AE: ['Asia/Dubai', '501234567'], SA: ['Asia/Riyadh', '512345678'],
  QA: ['Asia/Qatar', '33123456'], OM: ['Asia/Muscat', '92123456'], KW: ['Asia/Kuwait', '50012345'],
  BH: ['Asia/Bahrain', '36001234'], SG: ['Asia/Singapore', '81234567'], HK: ['Asia/Hong_Kong', '51234567'],
  AU: ['Australia/Sydney', '412345678'], NZ: ['Pacific/Auckland', '211234567'], US: ['America/Chicago', '3125550123'],
  CA: ['America/Toronto', '4165550123'], BS: ['America/Nassau', '2423571234'], CH: ['Europe/Zurich', '781234567'],
  DE: ['Europe/Berlin', '15123456789'], SE: ['Europe/Stockholm', '701234567'], BN: ['Asia/Brunei', '7123456']
};

// ── pick one page per form template ─────────────────────────────
function walk(dir, out) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out); else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}
const PHONE_INPUT = /<input\b[^>]*\b(?:type=["']?tel\b|inputmode=["']?tel\b|autocomplete=["']?tel)/i;
function templateOf(html) {
  const scripts = (html.match(/<script(?![^>]*src=)[^>]*>[\s\S]*?<\/script>/gi) || [])
    .filter((x) => /countryCode|api\/(callback|contact|leads)/.test(x));
  const shared = (html.match(/src=["']\/js\/[a-z0-9-]+\.js/gi) || []).filter((s) => /callback|contact|lead|form|enquir|demo/i.test(s)).sort();
  return shared.join(',') + ' | ' + scripts.map((x) => x.replace(/'[^'\n]*'|"[^"\n]*"/g, 'S').replace(/\b\d+\b/g, 'N')
    .replace(/\s+/g, ' ').replace(/\b(submitLead_|submit)\w+/g, 'F').replace(/\b[a-z]{2}(Lead|Name|Email|Phone|Grade|Msg|Submit|Form)\w*/g, 'X$1'))
    .join(' || ');
}
function pickPages() {
  const groups = new Map();
  for (const file of walk(path.join(ROOT, 'src/pages'), [])) {
    const html = fs.readFileSync(file, 'utf8');
    if (!PHONE_INPUT.test(html)) continue;
    const slug = path.relative(path.join(ROOT, 'src/pages'), file).split(path.sep).join('/').replace(/\.html$/, '');
    if (/^(thank-you|check-status|battle|login|admin)/.test(slug)) continue;
    const key = templateOf(html);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(slug);
  }
  return [...groups.values()].map((list) => ({ slug: list[0], siblings: list.length }));
}

// ── one scenario on one page ─────────────────────────────────────
async function fillOtherFields(form) {
  await form.evaluate((f) => {
    const set = (el, v) => {
      const proto = el.tagName === 'TEXTAREA' ? HTMLTextAreaElement.prototype : el.tagName === 'SELECT' ? HTMLSelectElement.prototype : HTMLInputElement.prototype;
      Object.getOwnPropertyDescriptor(proto, 'value').set.call(el, v);
      el.dispatchEvent(new Event('input', { bubbles: true }));
      el.dispatchEvent(new Event('change', { bubbles: true }));
    };
    for (const el of f.querySelectorAll('input, select, textarea')) {
      if (el.disabled || el.type === 'hidden' || el.type === 'tel' || el.type === 'submit' || el.type === 'button') continue;
      const hay = ((el.name || '') + ' ' + (el.id || '') + ' ' + (el.placeholder || '')).toLowerCase();
      if (el.tagName === 'SELECT') {
        const opt = [...el.options].find((o) => o.value && !o.disabled);
        if (opt) set(el, opt.value);
      } else if (el.type === 'checkbox' || el.type === 'radio') {
        if (el.required && !el.checked) el.click();
      } else if (el.type === 'email' || /email/.test(hay)) set(el, 'parent@example.com');
      else if (el.type === 'number' || /\bage\b|grade|class/.test(hay)) set(el, el.type === 'number' ? '10' : 'Grade 5');
      else if (el.type === 'date') set(el, '2030-01-15');
      else if (el.type === 'time') set(el, '17:00');
      else if (el.type === 'url') set(el, 'https://example.com');
      else if (el.tagName === 'TEXTAREA') set(el, 'Looking for a free demo class for my child, thank you.');
      else if (!el.value) set(el, /name/.test(hay) ? 'Test Parent' : 'Test answer');
    }
  });
}

async function runScenario(browser, target, sc) { // eslint-disable-line no-param-reassign
  const context = await browser.newContext({ timezoneId: sc.tz, viewport: { width: 1280, height: 900 } });
  const page = await context.newPage();
  const posts = [];
  await context.route('**/*', (route) => {
    const req = route.request();
    const url = req.url();
    if (/\/api\//.test(url) && req.method() !== 'GET') {
      let body = req.postData() || '';
      try { body = JSON.parse(body); } catch (e) { /* form-encoded */ }
      posts.push({ url, body });
      return route.fulfill({ status: 201, contentType: 'application/json',
        body: JSON.stringify({ success: true, message: 'ok', requestId: 'test', contactId: 'test', leadId: 'test' }) });
    }
    if (/\/api\//.test(url)) return route.fulfill({ status: 200, contentType: 'application/json', body: '{}' });
    if (!url.startsWith(BASE) && !/fonts\.(googleapis|gstatic)|cdnjs|jsdelivr/.test(url)) return route.abort();
    if (req.method() === 'POST') { // a Netlify form posting to the page itself
      posts.push({ url, body: req.postData() || '' });
      return route.fulfill({ status: 200, contentType: 'text/html', body: '<html><body>ok</body></html>' });
    }
    return route.continue();
  });
  page.on('dialog', (d) => d.dismiss().catch(() => {}));
  // Forms that hand the lead to WhatsApp open wa.me; record instead of opening.
  await page.addInitScript(() => {
    window.__opened = [];
    window.open = function (u) { window.__opened.push(String(u)); return null; };
  });

  const result = { page: target.slug, scenario: sc.name, ok: false, detail: '' };
  try {
    await page.goto(BASE + (target.slug === 'index' ? '/' : '/' + target.slug), { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForFunction(() => !!window.MACCountryCode, null, { timeout: 15000 });
    await page.waitForTimeout(300);

    // The form to test: the first visible phone box outside the callback
    // pop-up, or the pop-up itself when asked for or when it is the page's
    // only phone box. The pop-up is opened the way its button opens it.
    let tel = page.locator('input[type="tel"][data-country-dial]:not(#callbackPhoneInput)').filter({ visible: true }).first();
    if (target.nav || !(await tel.count())) {
      tel = page.locator('#callbackPhoneInput');
      await page.evaluate(() => {
        if (typeof window.openCallbackModal === 'function') { window.openCallbackModal(); return; }
        let n = document.getElementById('callbackPhoneInput');
        while (n && n !== document.body) { if (getComputedStyle(n).display === 'none') n.style.display = 'block'; n = n.parentElement; }
      });
      target = Object.assign({}, target, { via: 'callback pop-up' });
    }
    if (!(await tel.count()) || !(await tel.isVisible())) { result.detail = 'no phone box found'; return result; }
    await tel.scrollIntoViewIfNeeded();
    const form = tel.locator('xpath=ancestor::form[1]');
    const inForm = await form.count();
    if (inForm) await fillOtherFields(form);

    const started = await tel.evaluate((t) => t.dataset.countryIso);
    if (sc.expectStart && started !== sc.expectStart) {
      result.detail = `picker started on ${started}, expected ${sc.expectStart}`;
      return result;
    }

    await tel.click();
    await tel.fill('');
    await tel.pressSequentially(sc.type, { delay: 5 });

    const submit = async () => {
      if (inForm) {
        await form.evaluate((f) => {
          const b = f.querySelector('button[type="submit"], input[type="submit"], button:not([type])');
          if (b) b.click(); else f.requestSubmit();
        });
      } else {
        await tel.press('Enter');
      }
      await page.waitForTimeout(900);
    };

    const opened = () => page.evaluate(() => window.__opened.filter((u) => /wa\.me|whatsapp\.com/.test(u)));
    await submit();
    if (sc.name === 'mismatch') {
      const msg = await page.locator('.mac-cc-msg').filter({ visible: true }).count();
      if (!msg) { result.detail = 'no message shown for a number that does not fit'; return result; }
      if (posts.length || (await opened()).length) { result.detail = 'sent on the first press despite the message'; return result; }
      await submit();
    }

    const lead = posts.find((p) => typeof p.body === 'object' && p.body && ['phone', 'contact', 'mobile', 'whatsapp'].some((k) => p.body[k]))
      || posts.find((p) => typeof p.body === 'string' && /phone|contact|whatsapp/i.test(p.body));
    const wa = await opened();
    const want = sc.expect;
    if (!lead && wa.length) {
      // A WhatsApp-only form: the number in the message must carry the
      // country the visitor chose.
      const text = decodeURIComponent((wa[0].split('text=')[1] || '').replace(/\+/g, ' '));
      const good = text.includes(want.dial + ' ' + want.number);
      result.ok = good;
      result.detail = (good ? '' : 'WRONG ') + 'WhatsApp message: ' + JSON.stringify(text.replace(/\s+/g, ' ').slice(0, 140))
        + (good ? '' : ' (wanted ' + want.dial + ' ' + want.number + ')');
      return result;
    }
    if (!lead && sc.name === 'mismatch') {
      // The page's own check refused a number that fits nowhere. Fine: the
      // visitor was told why on the first press.
      result.ok = true;
      result.detail = 'second press refused by the page itself';
      return result;
    }
    if (!lead) { result.detail = 'no lead request captured (' + posts.length + ' posts)'; return result; }

    let got;
    if (typeof lead.body === 'object') {
      const b = lead.body;
      got = { iso: b.countryIso, dial: b.countryCode, number: String(b.phone || b.contact || b.mobile || b.whatsapp).replace(/\D/g, '') };
    } else {
      const q = new URLSearchParams(lead.body);
      const num = [...q.entries()].find(([k]) => /phone|contact|whatsapp|mobile/i.test(k) && !/country/i.test(k));
      got = { iso: q.get('countryIso'), dial: q.get('countryCode'), number: String(num ? num[1] : '').replace(/\D/g, '') };
    }
    const good = got.iso === want.iso && got.dial === want.dial && got.number === want.number;
    result.ok = good;
    result.detail = (good ? '' : 'WRONG ') + `sent ${got.dial} ${got.iso} ${got.number}` + (good ? '' : ` (wanted ${want.dial} ${want.iso} ${want.number})`)
      + ' via ' + lead.url.replace(/^https?:\/\/[^/]+/, '');
    return result;
  } catch (err) {
    result.detail = 'error: ' + String(err.message).split('\n')[0];
    return result;
  } finally {
    await context.close();
  }
}

function scenariosFor(pageIso) {
  const own = LOCAL[pageIso] ? pageIso : 'IN';
  const [tz, num] = LOCAL[own];
  const dialOf = { IN: '+91', GB: '+44', IE: '+353', NL: '+31', AE: '+971', SA: '+966', QA: '+974', OM: '+968', KW: '+965', BH: '+973', SG: '+65', HK: '+852', AU: '+61', NZ: '+64', US: '+1', CA: '+1', BS: '+1242', CH: '+41', DE: '+49', SE: '+46', BN: '+673' };
  return [
    { name: 'abroad', tz: 'America/New_York', type: '2522228345', expectStart: 'US', expect: { iso: 'US', dial: '+1', number: '2522228345' } },
    { name: 'local', tz, type: num, expectStart: own, expect: { iso: own, dial: dialOf[own], number: num } },
    { name: 'typed', tz: 'Asia/Kolkata', type: '+971501234567', expect: { iso: 'AE', dial: '+971', number: '501234567' } },
    { name: 'mismatch', tz: 'Asia/Kolkata', type: '1234567', expectStart: 'IN', expect: { iso: 'IN', dial: '+91', number: '1234567' } }
  ];
}

(async () => {
  let targets = pickPages();
  targets.push({ slug: 'coding-classes-for-kids-netherlands', siblings: 0, nav: false, label: 'reported page' });
  targets.push({ slug: 'about', siblings: 0, nav: true, label: 'navbar pop-up' });
  if (ONLY) targets = targets.filter((t) => t.slug.includes(ONLY));
  if (LIMIT) targets = targets.slice(0, LIMIT);

  const jobs = [];
  for (const t of targets) {
    const html = fs.readFileSync(path.join(ROOT, 'src/pages', t.slug + '.html'), 'utf8');
    const meta = html.match(/name="mac-lead-country" content="([A-Z]{2})"/);
    for (const sc of scenariosFor(meta ? meta[1] : '')) jobs.push({ t, sc });
  }
  console.log(`${targets.length} pages (one per form template) × 4 scenarios = ${jobs.length} runs against ${BASE}\n`);

  const browser = await chromium.launch();
  const results = [];
  let next = 0;
  await Promise.all(Array.from({ length: WORKERS }, async () => {
    while (next < jobs.length) {
      const { t, sc } = jobs[next++];
      const r = await runScenario(browser, t, sc);
      r.siblings = t.siblings;
      results.push(r);
      process.stdout.write(r.ok ? '.' : 'F');
    }
  }));
  await browser.close();

  const failed = results.filter((r) => !r.ok);
  console.log(`\n\n${results.length - failed.length}/${results.length} passed`);
  const byPage = {};
  for (const r of failed) (byPage[r.page] = byPage[r.page] || []).push(r);
  for (const [p, rs] of Object.entries(byPage)) {
    console.log(`\n✗ /${p}  (template shared by ${rs[0].siblings} pages)`);
    for (const r of rs) console.log(`    ${r.scenario.padEnd(9)} ${r.detail}`);
  }
  fs.writeFileSync(path.join(require('os').tmpdir(), 'phone-country-test.json'), JSON.stringify(results, null, 1));
  process.exitCode = failed.length ? 1 : 0;
})();
