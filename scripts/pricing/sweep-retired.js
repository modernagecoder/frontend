#!/usr/bin/env node
/**
 * Sweep the retired international figures ($40 / $100 / $150) out of the
 * static pages.
 *
 *   node scripts/pricing/sweep-retired.js            report, change nothing
 *   node scripts/pricing/sweep-retired.js --write    apply
 *
 * These figures are the pre-worldwide flat prices. They survive in four
 * places, each handled differently because each rots differently:
 *
 *  1. VISIBLE PRICE ELEMENTS get data-price anchors carrying the list
 *     figure. The build keeps them current and the runtime re-prices them
 *     for each visitor's country. Numbers here are safe because they are
 *     owned by the config from now on.
 *
 *  2. FAQ SENTENCES that appear twice — once as visible text, once inside
 *     FAQPage JSON-LD "text" — are rewritten to identical NO-NUMBER wording
 *     in both. A number inside schema text cannot be anchored, so any number
 *     placed there today is a lie waiting for the next price change; and
 *     Google expects the schema answer to match the visible one, so both
 *     copies must change together.
 *
 *  3. USD OFFER BLOCKS get data-price-scope on their script tag, putting
 *     their price/priceCurrency under the stamper permanently.
 *
 *  4. BROKEN "USD 100 ( )" ARTIFACTS — empty parentheses left where a frozen
 *     AED/SAR conversion was stripped — are cleaned to no-number phrasing.
 *
 * Every transform is a specific regex for a shape that was enumerated by
 * grep first. Anything unmatched is left alone and stays catalogued in
 * pricing/TAGGING-REVIEW.md rather than guessed at.
 */

'use strict';

const fs = require('fs');
const path = require('path');
const cfgLib = require('./lib/config');

const WRITE = process.argv.indexOf('--write') !== -1;
const ROOT = cfgLib.REPO_ROOT;
const PAGES = path.join(ROOT, 'src', 'pages');

const config = cfgLib.load({ fresh: true });

/** Same subject rules the tagger uses. */
function subjectFor(file, html) {
    if (/data-price-tier\s*=\s*"agents"/.test(html)) return 'agents';
    if (/data-subject\s*=\s*"maths"/.test(html)) return 'maths';
    if (/math|calculus|algebra|abacus|vedic|kumon|cuemath/i.test(file)) return 'maths';
    return 'coding';
}

function listUsd(subject, tier) {
    const t = config.plans[subject] && config.plans[subject].international;
    return t && t[tier] != null ? cfgLib.format(t[tier], 'USD', { style: 'display' }) : null;
}

/** Anchored span for a visible element. */
function anchor(subject, tier, opts) {
    const key = subject + '.international.' + tier;
    const display = listUsd(subject, tier);
    if (!display) return null;
    const extra = opts && opts.derive ? ' data-price-derive="' + opts.derive + '"' : '';
    let text = display;
    if (opts && opts.derive === 'perClass') {
        const amount = config.plans[subject].international[tier] / config.display.classesPerMonth;
        text = '$' + (Math.round(amount * 100) / 100);
    }
    return '<span data-price="' + key + '"' + extra + '>' + text + '</span>';
}

// The no-number FAQ wording. Identical in visible text and schema text, and
// durable: nothing in it can rot when a price changes.
const FAQ_PRICE_SENTENCE =
    'Pricing is set for each country and shown on this page in your own currency. ' +
    'Group and 1-on-1 plans are billed month to month, with 8 live one-hour classes ' +
    'a month, and every student starts with a free demo class.';

const GULF_FAQ_SENTENCE =
    'Group and one-on-one classes are billed monthly, with the price set for your ' +
    'country and shown on this page in your local currency.';

/**
 * The transforms. Each: name, test (which files it may touch), rx, replacement
 * (string or fn(subject)). Order matters — more specific first.
 */
function transforms(subject) {
    const G = (o) => anchor(subject, 'group', o);
    const P = (o) => anchor(subject, 'personal', o);
    const g = G(), p = P();
    if (!g || !p) return [];

    return [
        // ── 1. visible price elements → anchors ──
        {
            name: 'v-span $150/mo (maths 1-on-1 stat)',
            rx: /<span class="v">\$150<span class="u">\/mo<\/span><\/span>/g,
            to: '<span class="v"><span data-price="' + subject + '.international.personal">$374.99</span><span class="u">/mo</span></span>'
        },
        {
            name: 'v-span $100/mo (group stat)',
            rx: /<span class="v">\$100<span class="u">\/mo<\/span><\/span>/g,
            to: '<span class="v"><span data-price="' + subject + '.international.group">$149.99</span><span class="u">/mo</span></span>'
        },
        {
            name: 'gulf price-figure $40',
            rx: /(<p class="g[a-z]{2}-price-figure">)\$40( <small>per month<\/small><\/p>)/g,
            to: '$1' + g + '$2'
        },
        {
            name: 'gulf price-figure $100',
            rx: /(<p class="g[a-z]{2}-price-figure">)\$100( <small>per month<\/small><\/p>)/g,
            to: '$1' + p + '$2'
        },
        {
            name: 'p.price $100 group · $150 1-on-1',
            rx: /<p class="price"><strong>\$100<\/strong>\/mo group &middot; <strong>\$150<\/strong>\/mo 1-on-1<\/p>/g,
            to: '<p class="price"><strong>' + g + '</strong>/mo group &middot; <strong>' + p + '</strong>/mo 1-on-1</p>'
        },
        {
            name: 'p.amt $150 / month',
            rx: /<p class="amt">\$150(<span> \/ month<\/span><\/p>)/g,
            to: '<p class="amt">' + p + '$1'
        },
        {
            name: 'p.amt $100 / month',
            rx: /<p class="amt">\$100(<span> \/ month<\/span><\/p>)/g,
            to: '<p class="amt">' + g + '$1'
        },
        {
            name: 'compare cell $100-$150 / month',
            rx: /(<td class="us">)\$100-\$150 \/ month(<\/td>)/g,
            to: '$1' + g + '–' + p + ' / month$2'
        },
        {
            name: 'compare cell $40-$100 / month',
            rx: /(<td class="us">)\$40-\$100 \/ month(<\/td>)/g,
            to: '$1' + g + '–' + p + ' / month$2'
        },
        {
            name: 'compare cell $150 (1:1) / $100 (group)',
            rx: /(<td class="us">)\$150 \(1:1\) \/ \$100 \(group\)(<\/td>)/g,
            to: '$1' + p + ' (1:1) / ' + g + ' (group)$2'
        },
        {
            name: 'compare cell $150 / (1:1)',
            rx: /(<td class="us">)\$150 \/? ?\(1:1\)(<\/td>)/g,
            to: '$1' + p + ' (1:1)$2'
        },
        {
            name: 'cell-us $40 a month group · $100 1-on-1',
            rx: /(<td class="cell-us"><strong>)\$40 a month group &middot; \$100 1-on-1(<\/strong>)/g,
            to: '$1' + g + ' a month group &middot; ' + p + ' 1-on-1$2'
        },
        {
            name: 'math-chip $100 ÷ 8 = $12.50',
            rx: /MAC group maths: \$100 &divide; 8 = <b>\$12\.50 per live class<\/b>/g,
            to: 'MAC group maths: ' + G() + ' &divide; 8 = <b>' + G({ derive: 'perClass' }) + ' per live class</b>'
        },

        // ── 2. FAQ sentence pairs → identical no-number wording ──
        // Maths shapes ($150 1-on-1 / $100 group), visible and schema.
        {
            name: 'faq maths sentence (all variants)',
            rx: /1-on-1 is \$150 a month(?:,| and) small group(?: is)? \$100(?: a month)?, both with (?:8|eight) live one-hour classes[^."]*(?:free demo(?: class)?[^."]*)?/g,
            to: FAQ_PRICE_SENTENCE.replace(/\.$/, '')
        },
        {
            name: 'faq coding sentence (all variants)',
            rx: /1-on-1 is \$100 a month(?:,| and) small group(?: is)? \$40(?: a month)?, both with (?:8|eight) live one-hour classes[^."]*(?:free demo(?: class)?[^."]*)?/g,
            to: FAQ_PRICE_SENTENCE.replace(/\.$/, '')
        },
        {
            name: 'what-we-do sentence ($150/$100)',
            rx: /1-on-1 for \$150 a month or small group for \$100, free demo class first/g,
            to: '1-on-1 or small group, priced for your country and shown in your local currency, free demo class first'
        },
        {
            name: 'what-we-do sentence ($100/$40)',
            rx: /1-on-1 for \$100 a month or small group for \$40, free demo class first/g,
            to: '1-on-1 or small group, priced for your country and shown in your local currency, free demo class first'
        },
        {
            name: 'premium mentorship USD $150 sentence',
            rx: /Premium 1-on-1 mentorship is USD \$150 a month, small group \$100, 8 classes a month,/g,
            to: 'Premium 1-on-1 mentorship and small-group plans are priced for your country (shown on this page in your local currency), 8 classes a month,'
        },

        // Gulf: "Group classes are 40 US dollars per month, about AED 150.
        // One-on-one classes are 100 US dollars a month, about AED 550."
        {
            name: 'gulf US-dollars sentence pair',
            rx: /Group classes are 40 US dollars (?:per|a) month(?:, (?:about|around|near) [A-Z]{3} [\d,]+)?\.? ?One-on-one classes are 100 US dollars(?: (?:per|a) month)?(?:, (?:about|around|near) [A-Z]{3} [\d,]+)?\./g,
            to: GULF_FAQ_SENTENCE
        },
        {
            name: 'gulf standard-fees sentence',
            rx: /(?:The standard fees apply: |A group place is )40 US dollars (?:a |each )?month(?: for group batches)?, (?:about|around|near) [A-Z]{3} [\d,]+, and one-on-one (?:is |at )100 US dollars[^."]*\./g,
            to: GULF_FAQ_SENTENCE
        },

        // ── 4. broken "USD n ( )" artifacts ──
        {
            name: 'offer description USD 100 ( )',
            rx: /USD 100 \( \) per month — 8 sessions?, 2 (?:each week|a week|per week)\.?/g,
            to: 'Priced for each country — 8 sessions, 2 each week.'
        },
        {
            name: 'offer description USD 40 ( )',
            rx: /USD 40 \( \) per month — 8 group sessions?, 2 (?:each week|a week|per week)\.?/g,
            to: 'Priced for each country — 8 group sessions, 2 each week.'
        },
        // ── round 3: phrase-level residuals (surroundings vary per page) ──
        {
            name: 'phrase: group tuition $40 / one to one $100',
            rx: /Group tuition is \$40 a month, one to one teaching is \$100 a month/g,
            to: 'Group and one-to-one tuition are priced for your country and shown on this page in your local currency'
        },
        {
            name: 'phrase: From $40 a month (USD 40)',
            rx: /From \$40 a month \(USD 40\)/g,
            to: 'Priced for your country, billed in USD'
        },
        {
            name: 'meta: $40 a month, first class free',
            rx: /\$40 a month, first class free\.">/g,
            to: 'Priced for your country, first class free.">'
        },
        {
            name: 'phrase: group $40 or 1-on-1 $100 international',
            rx: /group \$40 or 1-on-1 \$100 for international students/g,
            to: 'group or 1-on-1 for international students, priced for each country'
        },
        {
            name: 'phrase: classes are $40 small group or $100 1-on-1',
            rx: /(?:Coding c|C)lasses are \$40 a month for small group or \$100 for 1-on-1/g,
            to: 'Class prices are set for each country and shown in your local currency, for small group and 1-on-1'
        },
        {
            name: 'phrase: 1,499 Indian and $40 international',
            rx: /(1,499 per month for Indian students) and \$40 per month for international students/g,
            to: '$1, with international prices set for each country'
        },
        {
            name: 'phrase: 4,999 Indian and $100 internationally',
            rx: /(4,999 per month for Indian students) and \$100 per month internationally/g,
            to: '$1, priced per country internationally'
        },
        {
            name: 'phrase: pay in USD at $40 per month for group',
            rx: /International students pay in USD at \$40 per month for group classes\./g,
            to: 'International students pay in USD at a price set for their own country.'
        },
        {
            name: 'phrase: 1-on-1 maths $150, small group $100',
            rx: /1-on-1 maths \$150 a month, small group \$100/g,
            to: '1-on-1 and small-group maths priced for your country'
        },
        {
            name: 'phrase: Group $40 a month, true 1-on-1 $100',
            rx: /Group \$40 a month, true 1-on-1 \$100\./g,
            to: 'Group and true 1-on-1 plans are priced for your country.'
        },

        // ── round 2: residual prose, enumerated after the first sweep ──
        {
            name: 'prose: rupees or $40/$100 international',
            rx: /(1,499 rupees a month in India) or \$(?:40|100) international/g,
            to: '$1, with international prices set for your country'
        },
        {
            name: 'prose: MAC maths is $100 ... $150',
            rx: /Modern Age Coders maths is \$100 a month for small[- ]group(?:s| classes)(?: and| or) \$150 for(?: the| true)? 1-on-1[^.]*\./g,
            to: 'Modern Age Coders maths pricing is set for each country and shown on the page in your local currency, for both small-group and 1-on-1 plans.'
        },
        {
            name: 'prose: small group at $40 or true 1-on-1 at $100',
            rx: /small group at \$40 or true 1-on-1 at \$100 for international students/g,
            to: 'small group or true 1-on-1, priced for your country for international students'
        },
        {
            name: 'prose: pay roughly $40 group / $100 1-on-1',
            rx: /International students pay roughly \$40 per month for group and \$100 per month for 1-on-1\./g,
            to: 'International students pay a price set for their own country, shown on each page in their local currency.'
        },
        {
            name: 'prose: 1-on-1 coding is $100 a month ... $12.50',
            rx: /Modern Age Coders 1-on-1 coding is \$100 a month for eight live classes, \$12\.50[^.]*\./g,
            to: 'Modern Age Coders 1-on-1 coding is priced for each country, always for eight live classes a month.'
        },
        {
            name: 'cell: $100 group · $150 true 1-on-1',
            rx: /(<td class="cell-us"><strong>)\$100 group &middot; \$150 true 1-on-1(<\/strong>)/g,
            to: function () { return '$1' + g + ' group &middot; ' + p + ' true 1-on-1$2'; }
        },
        {
            name: 'rc toggle: From $40/mo',
            rx: /(<span class="rc-usd-only">)From \$40\/mo(<\/span>)/g,
            to: function () { return '$1From ' + g + '/mo$2'; }
        },
        {
            name: 'prose: ₹4,999 per month or $150 per month',
            rx: /(&#8377;4,999 per month) or \$150 per month/g,
            to: '$1 in India, priced per country internationally'
        },
        {
            name: 'meta tail: $150/mo."',
            rx: /\s*\$150\/(?:mo|month)(?:nth)?[.,]?\s*(8 classes\.\s*)?(Free tria?l\.?\s*)?">/g,
            to: ' Priced for your country.">'
        },
        {
            name: 'meta: $50 to $100 less per month',
            rx: /\$50 to \$100 less per month/g,
            to: 'at a lower monthly price'
        },
        {
            name: 'prose: MAC maths is $100 a month for small groups or $150 for 1-',
            rx: /Modern Age Coders maths is \$100 a month for small groups or \$150 for 1-[^.]*\./g,
            to: 'Modern Age Coders maths pricing is set for each country and shown in your local currency, for both small-group and 1-on-1 plans.'
        },
        {
            name: 'prose: $150 a month, eight live sessions/classes',
            rx: /<strong>\$150 a month<\/strong>, eight live (?:sessions|classes), two a week[^.<]*/g,
            to: function () { return '<strong>' + p + ' a month</strong>, eight live classes, two a week'; }
        },
        {
            // Offer descriptions still narrate the retired figures even after
            // the stamper corrects the machine-readable price two keys away.
            name: 'offer description USD n per month',
            rx: /"description": "USD (?:40|100|150) per month\s*[—-]\s*([^"]*)"/g,
            to: '"description": "Priced for each country — $1"'
        },
        {
            name: 'meta USD n ( ) remnants',
            rx: /USD (?:40|100|150) \( \)(?:\/mo\.?| per month\.?)?/g,
            to: 'priced for your country'
        }
    ];
}

/**
 * Scope USD Offer blocks so the stamper owns their prices. Only blocks that
 * contain a USD Offer at a retired figure and no scope yet.
 */
function scopeUsdOffers(html, subject, report) {
    return html.replace(
        /<script\b([^>]*type\s*=\s*"application\/ld\+json"[^>]*)>([\s\S]*?)<\/script>/gi,
        function (whole, attrs, body) {
            if (/data-price-scope/.test(attrs)) return whole;
            if (!/"priceCurrency"\s*:\s*"USD"/.test(body)) return whole;
            if (!/"price"\s*:\s*"(40|100|150)(\.00)?"/.test(body)) return whole;
            if (!/"@type"\s*:\s*"Offer"/.test(body)) return whole;
            report.scoped++;
            return '<script type="application/ld+json" data-price-scope="' +
                subject + '.international">' + body + '</script>';
        });
}

function main() {
    const files = fs.readdirSync(PAGES).filter(f => /\.html$/.test(f));
    const counts = {};
    let filesChanged = 0;
    const examples = {};

    files.forEach(function (f) {
        const p = path.join(PAGES, f);
        const before = fs.readFileSync(p, 'utf8');
        let html = before;
        const subject = subjectFor(f, html);
        const report = { scoped: 0 };

        transforms(subject).forEach(function (t) {
            const before2 = html;
            if (typeof t.to === 'function') {
                // functions return a TEMPLATE (may contain $1) evaluated per file
                html = html.replace(t.rx, t.to());
            } else {
                html = html.replace(t.rx, t.to);
            }
            if (html !== before2) {
                const n = (before2.match(t.rx) || []).length;
                counts[t.name] = (counts[t.name] || 0) + n;
                (examples[t.name] = examples[t.name] || []).length < 2 &&
                    examples[t.name].push(f);
            }
        });

        html = scopeUsdOffers(html, subject, report);
        if (report.scoped) counts['scoped USD offer blocks'] =
            (counts['scoped USD offer blocks'] || 0) + report.scoped;

        if (html !== before) {
            filesChanged++;
            if (WRITE) fs.writeFileSync(p, html);
        }
    });

    console.log('');
    Object.keys(counts).sort().forEach(function (k) {
        console.log('  ' + String(counts[k]).padStart(4) + '  ' + k +
            (examples[k] ? '   e.g. ' + examples[k].join(', ') : ''));
    });
    console.log('\n  ' + filesChanged + ' file(s) ' + (WRITE ? 'changed' : 'would change'));
    if (!WRITE) console.log('  Nothing written. Re-run with --write.\n');
}

main();
