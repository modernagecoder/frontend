#!/usr/bin/env node
/**
 * Update the OLD India figures inside prose and schema text after the
 * 2026-08-01 price change — the first India price change ever, which is why
 * hundreds of hand-written sentences carry the previous numbers.
 *
 *   node scripts/pricing/sweep-india.js            report only
 *   node scripts/pricing/sweep-india.js --write    apply
 *
 * Old → new, resolved per page/course subject:
 *   coding/maths: ₹2,499 miniBatch → ₹2,999 · ₹4,999 1-on-1 → ₹7,500 (maths ₹8,500)
 *   agents (now standard): ₹2,499 → ₹1,499 · ₹4,999 → ₹2,999 · ₹9,999 → ₹7,500
 *
 * A figure is only touched when it is unmistakably a monthly class price:
 * followed by /month, /mo, or "per month", or inside a "priceRange" schema
 * string. Camp fees (one-time), lesson content, salaries and testimonials
 * never match.
 */

'use strict';

const fs = require('fs');
const path = require('path');
const cfgLib = require('./lib/config');

const WRITE = process.argv.indexOf('--write') !== -1;
const ROOT = cfgLib.REPO_ROOT;
const config = cfgLib.load({ fresh: true });

const LEGACY_INDIA = {
    coding: { 2499: 'miniBatch', 4999: 'personal', 1499: 'group' },
    maths: { 2499: 'miniBatch', 4999: 'personal', 1499: 'group' },
    agents: { 2499: 'group', 4999: 'miniBatch', 9999: 'personal' },
    school: {}
};

function pageSubject(file, html) {
    if (/data-price-tier\s*=\s*"agents"/.test(html)) return 'agents';
    if (/data-subject\s*=\s*"maths"/.test(html)) return 'maths';
    if (/coding-and-maths-for-/.test(file)) return 'school';
    if (/math|calculus|algebra|abacus|vedic/i.test(file)) return 'maths';
    return 'coding';
}

function courseSubject(slug) {
    // The shared resolver in lib/config.js — never a private regex. This
    // file's own wider maths pattern once matched "igcse" and swept the
    // IGCSE Computer Science course to the maths ₹8,500 while its page
    // charged the coding price (fixed by hand 2026-08-03).
    return cfgLib.courseSubject(slug, config);
}

/** Replace old monthly figures with new, for one subject, in one text. */
function sweep(text, subject, counts) {
    const legacy = LEGACY_INDIA[subject] || {};
    const table = config.plans[subject] && config.plans[subject].india;
    if (!table) return text;

    let out = text;
    Object.keys(legacy).forEach(function (oldAmount) {
        const tier = legacy[oldAmount];
        const newAmount = table[tier];
        if (newAmount === null || newAmount === undefined) return;
        if (String(newAmount) === String(oldAmount)) return;      // e.g. group 1499 unchanged

        const oldComma = String(oldAmount).replace(/\B(?=(\d{3})+(?!\d))/g, ',?');
        const newDisp = cfgLib.format(newAmount, 'INR', { style: 'amount' });   // 2,999
        const newPlain = String(newAmount);

        // 1. "₹4,999 per month" / "₹4999/month" / "₹4,999/mo"
        const rx1 = new RegExp(
            '((?:₹|&#8377;|Rs\\.?\\s?)\\s?)' + oldComma +
            '(?=\\s*(?:/\\s*(?:month|mo)\\b|\\s?per\\s+month))', 'g');
        out = out.replace(rx1, function (m, pre) {
            counts[subject + ' ' + oldAmount + '→' + newAmount] =
                (counts[subject + ' ' + oldAmount + '→' + newAmount] || 0) + 1;
            return pre + newDisp;
        });

        // 2. schema "priceRange": "₹1499 - ₹4999 per month"
        const rx2 = new RegExp('("priceRange":\\s?"[^"]*?₹?)' + oldComma + '((?:[^"\\d][^"]*)?")', 'g');
        out = out.replace(rx2, function (m, pre, post) {
            counts['priceRange ' + oldAmount + '→' + newAmount] =
                (counts['priceRange ' + oldAmount + '→' + newAmount] || 0) + 1;
            return pre + newPlain + post;
        });
    });
    return out;
}

function main() {
    const counts = {};
    let files = 0;

    // ── pages ──
    const dir = path.join(ROOT, 'src', 'pages');
    fs.readdirSync(dir).forEach(function (f) {
        if (!/\.html$/.test(f)) return;
        const p = path.join(dir, f);
        const before = fs.readFileSync(p, 'utf8');
        const after = sweep(before, pageSubject(f, before), counts);
        if (after !== before) { files++; if (WRITE) fs.writeFileSync(p, after); }
    });

    // ── course sources (FAQ text flows into visible + FAQPage schema) ──
    const cd = path.join(ROOT, 'content', 'courses', 'data');
    fs.readdirSync(cd).forEach(function (f) {
        if (!/\.json$/.test(f) || f === 'courses-config.json') return;
        const p = path.join(cd, f);
        const before = fs.readFileSync(p, 'utf8');
        let slug = null;
        try { slug = JSON.parse(before).meta.slug; } catch (e) { return; }
        const after = sweep(before, courseSubject(slug), counts);
        if (after !== before) {
            JSON.parse(after);                       // never write broken JSON
            files++; if (WRITE) fs.writeFileSync(p, after);
        }
    });

    console.log('');
    Object.keys(counts).sort().forEach(function (k) {
        console.log('  ' + String(counts[k]).padStart(4) + '  ' + k);
    });
    console.log('\n  ' + files + ' file(s) ' + (WRITE ? 'changed' : 'would change'));
    if (!WRITE) console.log('  Nothing written. Re-run with --write.\n');
}

main();
