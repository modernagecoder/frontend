/**
 * Render the pricing page once for every country we price, and read back what
 * a visitor there would actually see.
 *
 * Counting anchors would pass on broken output. This reads the rendered text.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const ROOT = process.argv[2];
const page = process.argv[3] || 'src/pages/pricing.html';
const html = fs.readFileSync(path.join(ROOT, page), 'utf8');

const FILES = ['pricing-data.generated', 'international-pricing', 'local-currency', 'country-switcher'];
const src = {};
FILES.forEach(f => { src[f] = fs.readFileSync(path.join(ROOT, 'src', 'js', f + '.js'), 'utf8'); });

const data = JSON.parse(src['pricing-data.generated']
    .replace(/^[\s\S]*?window\.MAC_PRICING = /, '').replace(/;\s*$/, ''));
const isos = Object.keys(data.worldwide.countries);

const errors = [], badPrice = [], noSwitcher = [], slow = [];
const currencies = {};
const t0 = Date.now();

isos.forEach(function (cc) {
    const dom = new JSDOM(html, {
        url: 'https://x.test/pricing?country=' + cc,
        runScripts: 'outside-only', pretendToBeVisual: true
    });
    const win = dom.window;
    const started = Date.now();
    try {
        FILES.forEach(f => win.eval(src[f]));
        win.document.dispatchEvent(new win.Event('DOMContentLoaded', { bubbles: true }));
    } catch (e) {
        errors.push(cc + ': ' + e.message.slice(0, 60));
        return;
    }
    const ms = Date.now() - started;
    if (ms > 500) slow.push(cc + ' ' + ms + 'ms');

    const el = win.document.querySelector('#tab-coding .price-amount');
    const txt = el ? el.textContent.trim() : '';

    const looksWrong = !txt || /undefined|NaN|null/.test(txt) || !/\d/.test(txt) ||
        /^[^\d]*0(\D|$)/.test(txt);
    if (looksWrong) badPrice.push(cc + ' = "' + txt + '"');

    if (!win.document.querySelector('.mac-cs-btn')) noSwitcher.push(cc);

    const cur = data.worldwide.countries[cc].currency || '(none)';
    (currencies[cur] = currencies[cur] || []).push(cc);
});

console.log('');
console.log('  countries rendered      : ' + isos.length + '  in ' + ((Date.now() - t0) / 1000).toFixed(1) + 's');
console.log('  script errors           : ' + errors.length + (errors.length ? '  ' + errors.slice(0, 3).join(' | ') : ''));
console.log('  missing / broken price  : ' + badPrice.length + (badPrice.length ? '  ' + badPrice.slice(0, 6).join(' | ') : ''));
console.log('  missing switcher        : ' + noSwitcher.length + (noSwitcher.length ? '  ' + noSwitcher.slice(0, 6).join(', ') : ''));
console.log('  slower than 500ms       : ' + slow.length + (slow.length ? '  ' + slow.slice(0, 3).join(' | ') : ''));
console.log('  distinct currencies     : ' + Object.keys(currencies).length);
console.log('');

const ok = !errors.length && !badPrice.length && !noSwitcher.length;
console.log(ok ? '  Every country renders a real price with a working switcher.'
               : '  PROBLEMS ABOVE need fixing.');
process.exit(ok ? 0 : 1);
