#!/usr/bin/env node
/**
 * audit-demo-choice-coverage.js
 * ------------------------------------------------------------------
 * Answers one question: "if a visitor fills in ANY form on ANY page, do they
 * get the demo chooser (free waiting list vs paid priority demo)?"
 *
 * The chooser (src/js/demo-choice.js) opens when a page POSTs successfully to
 * one of the lead endpoints it watches, or when the visitor lands on
 * /thank-you. So a form is covered when it:
 *
 *   A. posts to a watched endpoint, inline or through a shared script, or
 *   B. is a Netlify form whose action is /thank-you (the dialog opens there)
 *      AND has a phone field, which installNetlifyBridge in demo-choice.js
 *      copies to the server. Without that copy a Netlify lead never reaches
 *      the admin panel or the WhatsApp alert (nine pages were in that state
 *      until 2026-09-23 while this audit reported them covered).
 *
 * Deliberately NOT covered, and reported separately: business and corporate
 * enquiries (not demos), payment/enrolment forms, login, search, tools.
 *
 * Usage:  node scripts/audit-demo-choice-coverage.js
 * Exit 1 when a demo-type form is not covered.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');

const choiceSrc = fs.readFileSync(path.join(ROOT, 'src/js/demo-choice.js'), 'utf8');
const m = choiceSrc.match(/LEAD_ENDPOINT_RE = (\/.+\/[a-z]*);/);
if (!m) throw new Error('LEAD_ENDPOINT_RE not found in demo-choice.js');
const WATCHED = eval(m[1]); // a regex literal from our own source file

// Shared scripts that submit forms, and the endpoint each one posts to.
const SHARED = {};
fs.readdirSync(path.join(ROOT, 'src/js')).filter((f) => f.endsWith('.js')).forEach((f) => {
  const s = fs.readFileSync(path.join(ROOT, 'src/js', f), 'utf8');
  const eps = [...new Set((s.match(/\/api\/[a-z0-9/_-]+/gi) || []))].filter((e) => /contact|callback|leads|corporate|business/.test(e));
  if (eps.length) SHARED[f] = eps;
});

const DIRS = ['src/pages', 'content/blog/generated', 'content/courses/generated', 'content/resources/generated', 'components'];
function walk(dir, out) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out); else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

const HAS_BRIDGE = /installWhatsAppBridge\(\)/.test(choiceSrc);
const HAS_NETLIFY_BRIDGE = /^\s*installNetlifyBridge\(\);/m.test(choiceSrc);
const BUILD_ADDS_CALLBACK_SCRIPT = /callback-modal\.js\?v=/.test(fs.readFileSync(path.join(ROOT, 'scripts/inline-components.js'), 'utf8').split('// 10.')[1] || '');

const NOT_A_DEMO = /login|search|newsletter|battle|gate-form|join-form|example|aab|quiz|calculator|playground|compiler|feedback|review|comment|filter|admin|coupon|enrol|enroll|payment|checkout/i;

const stats = { pages: 0, pagesWithForms: 0, forms: 0, covered: 0, viaThankYou: 0, business: 0, other: 0, uncovered: [] };
const byEndpoint = {};

for (const dir of DIRS) {
  for (const file of walk(path.join(ROOT, dir), [])) {
    stats.pages++;
    const html = fs.readFileSync(file, 'utf8');
    const forms = html.match(/<form\b[^>]*>/gi) || [];
    if (!forms.length) continue;
    stats.pagesWithForms++;

    const inline = [...new Set(html.match(/\/api\/[a-z0-9/_-]+/gi) || [])];
    const shared = Object.keys(SHARED).filter((f) => html.includes('/js/' + f));
    const endpoints = [...new Set(inline.concat(...shared.map((f) => SHARED[f])))];
    const optedOut = /name="mac-demo-choice"\s+content="off"/i.test(html);

    let from = 0;
    for (const tag of forms) {
      const at = html.indexOf(tag, from);
      from = at + tag.length;
      const end = html.indexOf('</form>', from);
      const formHtml = html.slice(at, end === -1 ? undefined : end);
      stats.forms++;
      const id = (tag.match(/\bid="([^"]+)"/) || tag.match(/\bname="([^"]+)"/) || tag.match(/\bclass="([^"]+)"/) || [0, '(anonymous)'])[1];
      const netlify = /data-netlify/i.test(tag);

      if (netlify) {
        if (/action="\/thank-you/.test(tag)) {
          if (HAS_NETLIFY_BRIDGE && /type="tel"/.test(formHtml)) { stats.viaThankYou++; continue; }
          stats.uncovered.push([file, id, 'Netlify form with no phone field (or no bridge): the lead never reaches the server or WhatsApp']); continue;
        }
        stats.uncovered.push([file, id, 'Netlify form that does not go to /thank-you']); continue;
      }
      if (optedOut || /biz|business|corporate|b2b/i.test(id)) { stats.business++; continue; }
      if (NOT_A_DEMO.test(id)) { stats.other++; continue; }

      // The nav's callback form: callback-modal.js is on the page, or the build
      // adds it (inline-components.js, step 10), and it posts to a watched endpoint.
      if (id === 'callbackForm' && !endpoints.some((e) => WATCHED.test(e))) {
        if (BUILD_ADDS_CALLBACK_SCRIPT) { stats.covered++; byEndpoint['callback script added at build'] = (byEndpoint['callback script added at build'] || 0) + 1; continue; }
      }
      // WhatsApp-only demo forms: demo-choice.js saves the number as a callback
      // request on submit (installWhatsAppBridge), which opens the chooser.
      if ((id === 'demoForm' || /data-mac-lead="whatsapp"/.test(tag)) && !endpoints.length && HAS_BRIDGE && /type="tel"/.test(html)) {
        stats.covered++; byEndpoint['WhatsApp form bridge'] = (byEndpoint['WhatsApp form bridge'] || 0) + 1; continue;
      }

      const watched = endpoints.filter((e) => WATCHED.test(e));
      if (watched.length) { stats.covered++; watched.forEach((e) => { byEndpoint[e] = (byEndpoint[e] || 0) + 1; }); continue; }

      const leadish = endpoints.filter((e) => /contact|callback|leads/.test(e));
      if (leadish.length) { stats.uncovered.push([file, id, 'posts to ' + leadish.join(', ') + ' which the chooser does not watch']); continue; }
      if (endpoints.some((e) => /corporate|business/.test(e))) { stats.business++; continue; }
      stats.uncovered.push([file, id, 'no recognised submit path']);
    }
  }
}

const rel = (p) => path.relative(ROOT, p).replace(/\\/g, '/');
console.log('watched endpoints : ' + WATCHED);
console.log('pages scanned     : ' + stats.pages + ' (' + stats.pagesWithForms + ' with a form)');
console.log('forms             : ' + stats.forms);
console.log('  covered         : ' + stats.covered + '  ' + JSON.stringify(byEndpoint));
console.log('  via /thank-you  : ' + stats.viaThankYou + '  (Netlify forms, copied to the server by installNetlifyBridge)');
console.log('  business/opt-out: ' + stats.business + '  (not demos, by design)');
console.log('  tools/login/etc : ' + stats.other + '  (not demos, by design)');
console.log('  NOT COVERED     : ' + stats.uncovered.length);
const grouped = {};
stats.uncovered.forEach(([f, id, why]) => { const k = id + ' :: ' + why; (grouped[k] = grouped[k] || []).push(rel(f)); });
Object.keys(grouped).sort((a, b) => grouped[b].length - grouped[a].length).forEach((k) => {
  console.log('\n  ' + grouped[k].length + ' x ' + k);
  grouped[k].slice(0, 4).forEach((f) => console.log('      ' + f));
});
process.exit(stats.uncovered.length ? 1 : 0);
