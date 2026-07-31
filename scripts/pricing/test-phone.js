#!/usr/bin/env node
/**
 * Tests for international phone acceptance.
 *
 *   node scripts/pricing/test-phone.js
 *
 * These sit alongside the pricing tests on purpose. A correct price in a
 * visitor's own currency is worth nothing if the enquiry form then refuses
 * their phone number — the lead is lost at the last step, silently, and shows
 * up in no report.
 *
 * The rules live in src/js/country-code-selector.js. This exercises the real
 * file in a real DOM rather than a copy of the logic.
 */

'use strict';

const fs = require('fs');
const path = require('path');
const assert = require('assert');
const { JSDOM } = require('jsdom');

const ROOT = path.resolve(__dirname, '..', '..');

let passed = 0;
const failures = [];

function test(name, fn) {
    try { fn(); passed++; }
    catch (e) { failures.push({ name: name, message: e.message }); }
}

// Load the real validator.
const dom = new JSDOM('<!doctype html><html><body></body></html>', { runScripts: 'outside-only' });
const win = dom.window;
win.eval(fs.readFileSync(path.join(ROOT, 'src', 'js', 'country-code-selector.js'), 'utf8'));
const MACPhone = win.MACPhone;

test('the validator is exposed', function () {
    assert.ok(MACPhone, 'window.MACPhone must exist');
    assert.strictEqual(typeof MACPhone.isValid, 'function');
    assert.strictEqual(typeof MACPhone.hint, 'function');
});

test('real numbers from the markets this site sells to are accepted', function () {
    // National significant numbers, no country code. Each is a realistic
    // length for that country, not a made-up string of digits.
    const good = [
        ['IN', '9876543210', 'India'],
        ['AE', '501234567', 'UAE'],
        ['OM', '91234567', 'Oman'],
        ['SA', '512345678', 'Saudi Arabia'],
        ['QA', '33123456', 'Qatar'],
        ['KW', '51234567', 'Kuwait'],
        ['SG', '81234567', 'Singapore'],
        ['HK', '51234567', 'Hong Kong'],
        ['GB', '7911123456', 'United Kingdom'],
        ['DE', '15112345678', 'Germany'],
        ['FR', '612345678', 'France'],
        ['NO', '40123456', 'Norway'],
        ['DK', '20123456', 'Denmark'],
        ['NL', '612345678', 'Netherlands'],
        ['AU', '412345678', 'Australia'],
        ['US', '2125551234', 'United States'],
        ['CA', '4165551234', 'Canada'],
        ['NG', '8012345678', 'Nigeria'],
        ['KE', '712345678', 'Kenya'],
        ['ZA', '821234567', 'South Africa'],
        ['PK', '3001234567', 'Pakistan'],
        ['BD', '1712345678', 'Bangladesh'],
        ['CN', '13812345678', 'China'],
        ['JP', '9012345678', 'Japan'],
        ['BR', '11987654321', 'Brazil']
    ];
    const rejected = good.filter(function (c) { return !MACPhone.isValid(c[1], c[0]); });
    assert.strictEqual(rejected.length, 0,
        'these real numbers were refused:\n      ' +
        rejected.map(function (c) { return c[2] + ' ' + c[0] + ' ' + c[1]; }).join('\n      '));
});

test('a ten-digit-only rule would have rejected most of them', function () {
    // This is the regression. Before the fix every form tested /^[0-9]{10}$/,
    // so a visitor in Oman, the UAE, Singapore, Norway or Germany could not
    // submit an enquiry at all.
    const wouldFail = ['501234567', '91234567', '81234567', '40123456', '15112345678', '13812345678'];
    const blockedByOldRule = wouldFail.filter(function (n) { return !/^[0-9]{10}$/.test(n); });
    assert.strictEqual(blockedByOldRule.length, wouldFail.length,
        'sanity check: these should all fail the old rule');
    // And all of them pass now.
    const isos = ['AE', 'OM', 'SG', 'NO', 'DE', 'CN'];
    wouldFail.forEach(function (n, i) {
        assert.ok(MACPhone.isValid(n, isos[i]), isos[i] + ' ' + n + ' still refused');
    });
});

test('formatting characters do not matter', function () {
    assert.ok(MACPhone.isValid('98765 43210', 'IN'));
    assert.ok(MACPhone.isValid('(416) 555-1234', 'CA'));
    assert.ok(MACPhone.isValid('+971 50 123 4567', 'AE'), 'a pasted full international number');
    assert.ok(MACPhone.isValid('+91 98765 43210', 'IN'), 'pasted Indian number with country code');
    assert.ok(!MACPhone.isValid('+971 999', 'AE'), 'but a country code alone is not a number');
});

test('obvious rubbish is still refused', function () {
    assert.ok(!MACPhone.isValid('', 'IN'), 'empty');
    assert.ok(!MACPhone.isValid('12', 'IN'), 'far too short');
    assert.ok(!MACPhone.isValid('98765', 'IN'), 'too short for India');
    assert.ok(!MACPhone.isValid('1234567890123456789', 'IN'), 'longer than E.164 allows');
    assert.ok(!MACPhone.isValid('abcdefghij', 'IN'), 'letters');
});

test('an unknown country falls back to the ITU range rather than blocking', function () {
    assert.ok(MACPhone.isValid('12345678', 'ZZ'), 'unknown country must not block a plausible number');
    assert.ok(MACPhone.isValid('12345678', null), 'nor must a missing country');
    assert.ok(!MACPhone.isValid('123', 'ZZ'), 'but still refuses nonsense');
});

test('the error wording matches the country', function () {
    assert.ok(/10-digit/.test(MACPhone.hint('IN')), 'India: ' + MACPhone.hint('IN'));
    assert.ok(!/10/.test(MACPhone.hint('OM')), 'Oman must not be told 10 digits: ' + MACPhone.hint('OM'));
    assert.ok(/7|8/.test(MACPhone.hint('OM')), 'Oman: ' + MACPhone.hint('OM'));
});

// ─── the markup itself ───

test('no page still hard-codes a ten-digit-only phone rule', function () {
    const dir = path.join(ROOT, 'src', 'pages');
    const offenders = [];
    fs.readdirSync(dir).forEach(function (f) {
        if (!/\.html$/.test(f)) return;
        const t = fs.readFileSync(path.join(dir, f), 'utf8');
        // A ten-digit test is fine when it is the India branch of a ternary.
        // It is a bug when it stands alone.
        const rx = /\/\^\[0-9\]\{10\}\$\//g;
        let m;
        while ((m = rx.exec(t)) !== null) {
            const around = t.slice(Math.max(0, m.index - 60), m.index + 60);
            if (/===\s*'IN'\s*\?|=== "IN" \?/.test(around)) continue;   // country-aware
            offenders.push(f + ': ' + around.replace(/\s+/g, ' ').trim().slice(0, 90));
        }
    });
    assert.strictEqual(offenders.length, 0,
        offenders.length + ' page(s) still block international numbers:\n      ' +
        offenders.slice(0, 5).join('\n      '));
});

test('no phone field truncates typing at ten characters', function () {
    const dir = path.join(ROOT, 'src', 'pages');
    const offenders = [];
    fs.readdirSync(dir).forEach(function (f) {
        if (!/\.html$/.test(f)) return;
        const t = fs.readFileSync(path.join(dir, f), 'utf8');
        const tags = t.match(/<input\b[^>]*>/gi) || [];
        tags.forEach(function (tag) {
            if (!/maxlength\s*=\s*"10"/i.test(tag)) return;
            const isPhone = /type\s*=\s*"tel"/i.test(tag) ||
                /(id|name)\s*=\s*"[^"]*(phone|mobile|contact|tel)[^"]*"/i.test(tag);
            if (isPhone) offenders.push(f + ': ' + tag.slice(0, 80));
        });
    });
    assert.strictEqual(offenders.length, 0,
        'maxlength="10" silently truncates an 11-digit German or Chinese number:\n      ' +
        offenders.slice(0, 5).join('\n      '));
});

console.log('');
failures.forEach(function (f) {
    console.log('  ✗ ' + f.name);
    console.log('      ' + f.message.split('\n').slice(0, 4).join('\n      '));
});
console.log('  ' + passed + ' passed, ' + failures.length + ' failed\n');
process.exit(failures.length ? 1 : 0);
