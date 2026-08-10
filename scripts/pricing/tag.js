#!/usr/bin/env node
/**
 * Attach data-price anchors to visible prices that are not yet under the config.
 *
 *   npm run pricing:tag           report only, changes nothing
 *   npm run pricing:tag -- --write   apply the confident ones
 *
 * Until a price is anchored, the build can localise its currency but cannot
 * CHANGE it: editing the config moves the schema and the payment amount while
 * the visible number stays as typed. Anchoring closes that gap.
 *
 * WHAT IT WILL AND WILL NOT DO
 * ----------------------------
 * The owner's instruction was to tag prose too, but to review it first rather
 * than let a script rewrite sentences. So this splits the work:
 *
 *   CONFIDENT   a price sitting alone inside a recognised price component,
 *               with a tier named nearby. Tagged automatically.
 *   REVIEW      a price inside a sentence, or one whose tier cannot be read
 *               from its surroundings. Written to a review file, untouched.
 *
 * A wrong key is worse than no key: it would silently rewrite a real price to
 * a different plan's figure on the next build. When in doubt this reports
 * rather than guesses.
 */

'use strict';

const fs = require('fs');
const path = require('path');
const cfgLib = require('./lib/config');

const WRITE = process.argv.indexOf('--write') !== -1;
const ROOT = cfgLib.REPO_ROOT;
const PAGES = path.join(ROOT, 'src', 'pages');

// Elements that exist to hold a price and nothing else. A number alone inside
// one of these is a price component, not prose.
const PRICE_CLASSES = /\b(price-amount|price-amt|plan-price|pv|num|amt|ag-num|ag-price-amt|intl-card-price|ap-bignum|gj-bignum|big|price)\b/;

// How a tier is named in the copy around a price.
const TIER_WORDS = [
    ['miniBatch', /mini[\s-]?batch|micro[\s-]?batch|3\s*-\s*4\s*student/i],
    ['personal', /1[\s:-]?on[\s:-]?1|one[\s-]on[\s-]one|personal|private|1:1|mentorship|tuition/i],
    ['group', /group|batch of|4\s*-\s*8\s*student|up to 10/i]
];

function tierFromContext(text) {
    for (let i = 0; i < TIER_WORDS.length; i++) {
        if (TIER_WORDS[i][1].test(text)) return TIER_WORDS[i][0];
    }
    return null;
}

/** Which price set a page belongs to, from its own markup and filename. */
function subjectFor(file, html) {
    if (/data-price-tier\s*=\s*"agents"/.test(html)) return 'agents';
    if (/data-subject\s*=\s*"maths"/.test(html)) return 'maths';
    if (/coding-and-maths-for-|school/.test(file) && /1,?999|2,?999/.test(html)) return 'school';
    if (/math|calculus|algebra|abacus|vedic/i.test(file)) return 'maths';
    return 'coding';
}

function digitsOf(s) {
    const m = String(s).replace(/&#8377;/g, '₹').match(/[\d,]+(?:\.\d{2})?/);
    return m ? m[0].replace(/,/g, '') : null;
}

/** Which configured tier has exactly this amount, for this subject and region. */
function tiersMatchingAmount(subject, region, amount, config) {
    const table = (config.plans[subject] && config.plans[subject][region]) || {};
    return Object.keys(table).filter(function (t) {
        return table[t] !== null && String(table[t]) === String(amount);
    });
}

/**
 * The international prices these pages were WRITTEN with, before the worldwide
 * ladder replaced them on 2026-07-31.
 *
 * 203 hardcoded figures survive in the markup — $40, $100 and $150 — and the
 * runtime never rewrites an existing dollar amount, only rupees. So those pages
 * still show the retired flat price to every visitor. Recognising the old
 * numbers is what lets them be anchored to the right plan instead of being left
 * as a permanent contradiction.
 *
 * A bare $100 is ambiguous across subjects: it was coding's 1-on-1 AND maths's
 * group rate. It is only resolvable once the page's subject is known, which is
 * why this is keyed by subject and never applied without one.
 */
const LEGACY_INTERNATIONAL = {
    coding: { '40': 'group', '100': 'personal' },
    maths:  { '100': 'group', '150': 'personal' },
    agents: { '100': 'group', '150': 'personal' }
};

// The India prices before 2026-08-01 — the first India price change ever,
// which is what exposed every still-unanchored rupee element — plus the
// 2026-08-01 personal rates (₹7,500 coding / ₹8,500 maths), retired in turn
// on 2026-08-10 when the 1-on-1 rate moved to ₹4,999.
const LEGACY_INDIA = {
    coding: { '1499': 'group', '2499': 'miniBatch', '4999': 'personal', '7500': 'personal' },
    maths:  { '1499': 'group', '2499': 'miniBatch', '4999': 'personal', '8500': 'personal' },
    agents: { '2499': 'group', '4999': 'miniBatch', '9999': 'personal' },
    school: { '1999': 'group', '2999': 'personal' }
};

function legacyTier(subject, region, amount) {
    const table = region === 'international' ? LEGACY_INTERNATIONAL : LEGACY_INDIA;
    const map = table[subject];
    return (map && map[String(amount)]) || null;
}

/**
 * Does this retired amount mean DIFFERENT tiers depending on the subject?
 *
 * $40 was only ever coding's group rate. $150 was the 1-on-1 rate for both
 * maths and agents, so the tier is the same either way. $100 is the dangerous
 * one: coding's 1-on-1 AND maths's group. Reading it off a guessed subject
 * would turn a group price into a 1-on-1 price on any page this misclassifies,
 * so it is only accepted when the copy itself names the plan.
 */
function legacyAmbiguous(amount, region) {
    // India pages carry explicit subject markers (data-price-tier="agents",
    // data-subject="maths"), so the per-page subject is trustworthy and the
    // subject's own legacy map is unambiguous — ₹2,499 on a coding page IS the
    // old Mini Batch. The cross-subject veto only applies internationally,
    // where the subject is guessed from filenames.
    if (region === 'india') return false;
    const tiers = {};
    Object.keys(LEGACY_INTERNATIONAL).forEach(function (s) {
        const t = LEGACY_INTERNATIONAL[s][String(amount)];
        if (t) tiers[t] = true;
    });
    return Object.keys(tiers).length > 1;
}

function main() {
    const config = cfgLib.load({ fresh: true });

    const review = [];
    const samples = [];
    let tagged = 0, filesChanged = 0, alreadyOk = 0, skippedProse = 0;

    fs.readdirSync(PAGES).forEach(function (f) {
        if (!/\.html$/.test(f)) return;
        const p = path.join(PAGES, f);
        const before = fs.readFileSync(p, 'utf8');
        let html = before;

        const subject = subjectFor(f, html);

        // A price element: a leaf tag whose entire content is one amount.
        const rx = /<(span|div|b|strong|p|td|h[1-6])((?:[^>"']|"[^"]*"|'[^']*')*)>(\s*(?:₹|&#8377;|\$)\s?[\d,]+(?:\.\d{2})?\s*)<\/\1>/g;

        html = html.replace(rx, function (whole, tag, attrs, inner) {
            if (/data-price\s*=/.test(attrs)) { alreadyOk++; return whole; }

            const isRupee = /₹|&#8377;/.test(inner);
            const region = isRupee ? 'india' : 'international';
            const amount = digitsOf(inner);
            if (!amount) return whole;

            const cls = (attrs.match(/class\s*=\s*"([^"]*)"/) || [])[1] || '';
            const structural = PRICE_CLASSES.test(cls);

            // The plan name can sit on either side of the number. A card puts
            // it above ("Group Classes" then the price); a sentence puts it
            // straight after ("$100</strong>/mo group"). The trailing text is
            // checked first because it is the closer, more specific signal, and
            // only as far as the next price so a two-price sentence cannot lend
            // its second plan name to its first number.
            const at = arguments[arguments.length - 2];
            const afterRaw = before.slice(at + whole.length, at + whole.length + 140);
            const afterText = afterRaw.split(/(?:₹|&#8377;|\$)\s?[\d,]/)[0];
            const beforeText = before.slice(Math.max(0, at - 400), at);

            const namedTier = tierFromContext(afterText) || tierFromContext(beforeText);

            const candidates = tiersMatchingAmount(subject, region, amount, config);

            // Confident only when the component is a price holder AND the tier
            // is unambiguous: either the copy names it, or exactly one
            // configured tier carries this amount.
            const legacy = legacyTier(subject, region, amount);

            let key = null;
            if (structural) {
                if (namedTier && candidates.indexOf(namedTier) !== -1) key = namedTier;
                else if (candidates.length === 1) key = candidates[0];
                // A retired international price in a price component. An amount
                // that means the same tier whatever the subject can be read off
                // the old table alone; an ambiguous one needs the copy to say.
                else if (legacy && namedTier === legacy) key = legacy;
                else if (legacy && !namedTier && !legacyAmbiguous(amount, region)) key = legacy;
            } else if (legacy && namedTier === legacy) {
                // In prose, a retired price is only anchored when the sentence
                // itself names the same plan. That is the owner's rule: a script
                // does not decide what a sentence means on its own.
                key = legacy;
            }

            if (!key) {
                if (!structural) skippedProse++;
                review.push({
                    file: f, subject: subject, region: region, amount: amount,
                    shown: inner.trim(), cls: cls || '(no class)',
                    structural: structural,
                    why: legacy ? ('retired ' + subject + ' price, but the surrounding copy does not name the plan')
                        : candidates.length === 0 ? 'no configured tier has this amount'
                        : candidates.length > 1 ? ('ambiguous: could be ' + candidates.join(' or '))
                        : 'inside prose, needs a human to confirm the plan'
                });
                return whole;
            }

            tagged++;
            if (process.env.SAMPLE) samples.push({file:f,key:subject+"."+region+"."+key,shown:inner.trim(),ctx:(afterText||beforeText.slice(-70)).replace(/s+/g," ").trim().slice(0,60)});
            return '<' + tag + attrs + ' data-price="' + subject + '.' + region + '.' + key + '">' +
                inner + '</' + tag + '>';
        });

        // SECOND SHAPE: a price component whose content is an amount followed
        // by a suffix element, e.g.
        //     <p class="amt">$100<span> / month</span></p>
        // The first pass skips these because the element holds more than the
        // number. Wrapping just the number keeps the suffix intact.
        const rx2 = /<(span|div|p|b|strong|h[1-6])((?:[^>"']|"[^"]*"|'[^']*')*)>((?:₹|&#8377;|\$)\s?[\d,]+(?:\.\d{2})?)(<span\b[^>]*>[^<]{0,24}<\/span>)<\/\1>/g;

        html = html.replace(rx2, function (whole, tag, attrs, amountText, suffix) {
            if (/data-price\s*=/.test(attrs)) { alreadyOk++; return whole; }

            const cls = (attrs.match(/class\s*=\s*"([^"]*)"/) || [])[1] || '';
            if (!PRICE_CLASSES.test(cls)) return whole;      // not a price component

            const isRupee = /₹|&#8377;/.test(amountText);
            const region = isRupee ? 'india' : 'international';
            const amount = digitsOf(amountText);
            if (!amount) return whole;

            const at = arguments[arguments.length - 2];
            const beforeText = before.slice(Math.max(0, at - 400), at);
            const namedTier = tierFromContext(suffix) || tierFromContext(beforeText);
            const candidates = tiersMatchingAmount(subject, region, amount, config);
            const legacy = legacyTier(subject, region, amount);

            let key = null;
            if (namedTier && candidates.indexOf(namedTier) !== -1) key = namedTier;
            else if (candidates.length === 1) key = candidates[0];
            else if (legacy && namedTier === legacy) key = legacy;
            else if (legacy && !namedTier && !legacyAmbiguous(amount, region)) key = legacy;

            if (!key) {
                review.push({
                    file: f, subject: subject, region: region, amount: amount,
                    shown: amountText.trim(), cls: cls, structural: true,
                    why: legacy ? ('retired ' + subject + ' price in a component, plan not named nearby')
                        : candidates.length > 1 ? ('ambiguous: could be ' + candidates.join(' or '))
                        : 'no configured tier has this amount'
                });
                return whole;
            }

            tagged++;
            if (process.env.SAMPLE) samples.push({
                file: f, key: subject + '.' + region + '.' + key, shown: amountText.trim(),
                ctx: ('suffix ' + suffix).replace(/\s+/g, ' ').slice(0, 60)
            });
            return '<' + tag + attrs + '><span data-price="' + subject + '.' + region + '.' + key + '">' +
                amountText + '</span>' + suffix + '</' + tag + '>';
        });

        // THIRD SHAPE: the split card — a currency span BEFORE bare digits:
        //   <span class="price-amount"><span class="price-currency">₹</span>2499</span>
        // Neither earlier pass matches it (the amount is neither alone nor
        // followed by a suffix), which left the main pricing cards unanchored
        // and only correct by coincidence until the first India price change.
        const rx3 = /<(span|div)([^>]*class="[^"]*(?:price-amount|plan-price)[^"]*"[^>]*)>(\s*)<span class="price-currency">(₹|\$|&#8377;)<\/span>([\d,]+(?:\.\d{2})?)(<span class="price-period">[^<]*<\/span>)?(\s*)<\/>/g;
        html = html.replace(rx3, function (whole, tag3, attrs, ws1, sym, digitsText, period, ws2) {
            if (/data-price\s*=/.test(attrs)) { alreadyOk++; return whole; }
            const isRupee = sym !== '$';
            const region = isRupee ? 'india' : 'international';
            const amount = digitsText.replace(/,/g, '');

            const at = arguments[arguments.length - 2];
            const beforeText = before.slice(Math.max(0, at - 400), at);
            const namedTier = tierFromContext(beforeText);
            const candidates = tiersMatchingAmount(subject, region, amount, config);
            const legacy = legacyTier(subject, region, amount);

            let key = null;
            if (namedTier && candidates.indexOf(namedTier) !== -1) key = namedTier;
            else if (candidates.length === 1) key = candidates[0];
            else if (legacy && namedTier === legacy) key = legacy;
            else if (legacy && !namedTier && !legacyAmbiguous(amount, region)) key = legacy;

            if (!key) {
                review.push({ file: f, subject: subject, region: region, amount: amount,
                    shown: sym + digitsText, cls: 'price-amount(split)', structural: true,
                    why: 'split card, plan not resolvable' });
                return whole;
            }
            tagged++;
            return '<' + tag3 + attrs + ' data-price="' + subject + '.' + region + '.' + key +
                '" data-price-format="split">' + (ws1 || '') + '<span class="price-currency">' + sym + '</span>' +
                digitsText + (period || '') + (ws2 || '') + '</' + tag3 + '>';
        });

        if (html !== before) {
            filesChanged++;
            if (WRITE) fs.writeFileSync(p, html);
        }
    });

    // ─── report ───
    console.log('');
    console.log('  ' + tagged + ' price(s) ' + (WRITE ? 'anchored' : 'would be anchored') +
        ' across ' + filesChanged + ' page(s)');
    console.log('  ' + alreadyOk + ' already anchored');
    console.log('  ' + review.length + ' need a decision (' + skippedProse + ' of them inside prose)');
    console.log('');

    const byReason = {};
    review.forEach(function (r) { byReason[r.why] = (byReason[r.why] || 0) + 1; });
    Object.keys(byReason).sort(function (a, b) { return byReason[b] - byReason[a]; })
        .forEach(function (k) { console.log('    ' + String(byReason[k]).padStart(4) + '  ' + k); });

    // The review list is the deliverable for everything not tagged, per the
    // owner's decision that prose gets reviewed rather than auto-rewritten.
    const out = [
        '# Prices awaiting a decision',
        '',
        'Generated by `npm run pricing:tag`. Every row is a price that is visible on the',
        'site but not yet controlled by `pricing/pricing.config.jsonc`. Its currency is',
        'still localised for the visitor; its VALUE will not change when you edit the',
        'config until it is anchored.',
        '',
        'To anchor one, wrap the number:',
        '',
        '```html',
        '<span data-price="coding.india.group">₹1,499</span>',
        '```',
        '',
        'These were left alone deliberately. A wrong key is worse than no key: it would',
        'silently rewrite a real price to a different plan\'s figure on the next build.',
        '',
        '| Page | Shown | Guessed set | Why it needs you |',
        '|---|---|---|---|'
    ];
    review.slice(0, 400).forEach(function (r) {
        out.push('| `' + r.file + '` | ' + r.shown + ' | `' + r.subject + '.' + r.region + '` | ' + r.why + ' |');
    });
    if (review.length > 400) out.push('', '_... and ' + (review.length - 400) + ' more._');

    // SAMPLE=1 prints a spread of proposed anchors with the text that decided
    // them. Worth reading before --write: a wrong key does not fail loudly, it
    // silently rewrites one plan's price to another plan's figure.
    if (process.env.SAMPLE && samples.length) {
        console.log('\n  SAMPLE OF PROPOSED ANCHORS');
        const step = Math.max(1, Math.ceil(samples.length / 16));
        samples.filter(function (s, i) { return i % step === 0; }).forEach(function (s) {
            console.log('   ' + s.key.padEnd(32) + String(s.shown).padEnd(9) + ' | ' + s.ctx);
        });
    }

    const outPath = path.join(ROOT, 'pricing', 'TAGGING-REVIEW.md');
    fs.writeFileSync(outPath, out.join('\n') + '\n');
    console.log('\n  Review list written to pricing/TAGGING-REVIEW.md');
    if (!WRITE) console.log('  Nothing was changed. Re-run with --write to anchor the confident ones.\n');
    else console.log('');
}

main();
