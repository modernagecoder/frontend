#!/usr/bin/env node
'use strict';
/**
 * Proves the scripts/nl renderers serve the Australian market without a code change:
 * renders one cg- and one ag- UK module in memory with the AU market object swapped in,
 * checks the lead contract and locale tags, and runs the rendered phone normaliser on
 * the ways an Australian parent types a mobile number. Writes nothing.
 *
 *   node scripts/nl/test-market-au.js
 *
 * The placeholder 491 570 156 is from the ACMA list of numbers reserved for fiction
 * (acma.gov.au/phone-numbers-use-tv-shows-films-and-creative-works), so it can never be
 * a real person's number.
 */
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
const cg = require('./lib/render-cg');
const ag = require('./lib/render-ag');

const AU = { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true };
const CASES = [['0491 570 156', '491570156'], ['+61 491 570 156', '491570156'], ['0061 491 570 156', '491570156'], ['491570156', '491570156'], ['61491570156', '491570156']];

let fails = 0;
const ok = (c, m) => { console.log((c ? 'ok    ' : 'FAIL  ') + m); if (!c) fails++; };

// Lifts the rendered normaliser out of the page script and runs it on its own variable.
function normaliserFrom(html, re, v) {
  const m = html.match(re);
  if (!m) return null;
  return new Function(v, m[1] + ' return ' + v + ';');
}

const cgPage = Object.assign({}, require(path.join(ROOT, 'content/uk/best-coding-class-in-london.js')), { market: AU });
const cgHtml = cg.render(cgPage);
ok(/countryIso:'AU'/.test(cgHtml) && /countryCode:'\+61'/.test(cgHtml) && /countryName:'Australia'/.test(cgHtml), 'cg lead contract sends +61 / AU / Australia');
ok(cgHtml.includes('content="en_AU"') && cgHtml.includes('name="geo.region" content="AU"'), 'cg og:locale en_AU and geo.region AU');
ok(cgHtml.includes('placeholder="491 570 156"') && cgHtml.includes('Australian mobile number'), 'cg phone label and ACMA fiction placeholder');
const cgNorm = normaliserFrom(cgHtml, /var digits=phone\.replace\(\/\\D\/g,''\);(.*?)if\(digits\.length<7/, 'digits');
ok(!!cgNorm, 'cg trunk normaliser present');
if (cgNorm) for (const [inp, want] of CASES) { const got = cgNorm(inp.replace(/\D/g, '')); ok(got === want, `cg "${inp}" -> ${got}`); }

const agPage = Object.assign({}, require(path.join(ROOT, 'content/uk/best-online-coding-classes-uk.js')), { market: AU });
const agHtml = ag.render(agPage);
ok(/countryIso: 'AU'/.test(agHtml) && /countryCode: '\+61'/.test(agHtml), 'ag lead contract sends +61 / AU');
ok(agHtml.includes('<html lang="en-AU">') && agHtml.includes('content="en_AU"'), 'ag html lang en-AU and og:locale en_AU');
ok(/phoneDigits\.length < 9\b/.test(agHtml), 'ag minimum 9 national digits');
const agNorm = normaliserFrom(agHtml.replace(/\n\s*/g, ' '), /var phoneDigits = phoneRaw\.replace\(\/\\D\/g, ''\);(.*?)if \(phoneDigits\.length </, 'phoneDigits');
ok(!!agNorm, 'ag trunk normaliser present');
if (agNorm) for (const [inp, want] of CASES) { const got = agNorm(inp.replace(/\D/g, '')); ok(got === want, `ag "${inp}" -> ${got}`); }

console.log(fails ? `${fails} FAILED` : 'AU market: all checks pass');
process.exit(fails ? 1 : 0);
