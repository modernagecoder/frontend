#!/usr/bin/env node
'use strict';
/**
 * Proves the scripts/nl renderers serve the US market: the lead contract, the locale tags and the
 * NANP phone normaliser. Renders one cg- and one ag- UK module in memory with the US market swapped
 * in. Writes nothing.
 *
 *   node scripts/nl/test-market-us.js
 *
 * The placeholder (201) 555-0123 uses 555-0100 to 555-0199, which NANPA reserves for fictional use,
 * so it can never be a real person's number. The lead backend needs exactly 10 national digits.
 */
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
const cg = require('./lib/render-cg');
const ag = require('./lib/render-ag');

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, stripTrunk: true };
const OK10 = [['(415) 555-0123', '4155550123'], ['+1 415 555 0123', '4155550123'], ['1-415-555-0123', '4155550123'], ['001 415 555 0123', '4155550123'], ['4155550123', '4155550123']];

let fails = 0;
const ok = (c, m) => { console.log((c ? 'ok    ' : 'FAIL  ') + m); if (!c) fails++; };
// Lifts the rendered normaliser out of the page script and runs it on its own variable.
function normaliserFrom(html, re, v) {
  const m = html.match(re);
  return m ? new Function(v, m[1] + ' return ' + v + ';') : null;
}

const cgHtml = cg.render(Object.assign({}, require(path.join(ROOT, 'content/uk/best-coding-class-in-london.js')), { market: US }));
ok(/countryIso:'US'/.test(cgHtml) && /countryCode:'\+1'/.test(cgHtml) && /countryName:'United States'/.test(cgHtml), 'cg lead contract sends +1 / US / United States');
ok(cgHtml.includes('content="en_US"') && cgHtml.includes('name="geo.region" content="US"'), 'cg og:locale en_US and geo.region US');
ok(cgHtml.includes('placeholder="(201) 555-0123"') && cgHtml.includes('US mobile number'), 'cg phone label and NANPA fiction placeholder');
const cgNorm = normaliserFrom(cgHtml, /var digits=phone\.replace\(\/\\D\/g,''\);(.*?)if\(digits\.length<7/, 'digits');
ok(!!cgNorm, 'cg normaliser present');
if (cgNorm) for (const [inp, want] of OK10) { const got = cgNorm(inp.replace(/\D/g, '')); ok(got === want, `cg "${inp}" -> ${got}`); }
ok(/if\(digits\.length>10\)/.test(cgHtml), 'cg maximum 10 national digits enforced on the page');

const agHtml = ag.render(Object.assign({}, require(path.join(ROOT, 'content/uk/best-online-coding-classes-uk.js')), { market: US }));
ok(/countryIso: 'US'/.test(agHtml) && /countryCode: '\+1'/.test(agHtml), 'ag lead contract sends +1 / US');
ok(agHtml.includes('<html lang="en-US">') && agHtml.includes('content="en_US"'), 'ag html lang en-US and og:locale en_US');
ok(/phoneDigits\.length < 10\b/.test(agHtml), 'ag minimum 10 national digits');
ok(/if \(phoneDigits\.length > 10\)/.test(agHtml), 'ag maximum 10 national digits enforced on the page');
const agNorm = normaliserFrom(agHtml.replace(/\n\s*/g, ' '), /var phoneDigits = phoneRaw\.replace\(\/\\D\/g, ''\);(.*?)if \(phoneDigits\.length </, 'phoneDigits');
ok(!!agNorm, 'ag normaliser present');
if (agNorm) for (const [inp, want] of OK10) { const got = agNorm(inp.replace(/\D/g, '')); ok(got === want, `ag "${inp}" -> ${got}`); }
// A 12-digit entry must not normalise to 10 digits: it has to reach the max check and be refused.
if (agNorm) ok(agNorm('441555012345').length !== 10, 'ag 12 digits are not silently cut to 10');

console.log(fails ? `${fails} FAILED` : 'US market: all checks pass');
process.exit(fails ? 1 : 0);
