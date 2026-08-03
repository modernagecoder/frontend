#!/usr/bin/env node
/**
 * Prove the prices on the site are correct.
 *
 *   npm run pricing:verify
 *
 * This exists because counting is not verification. This project has twice
 * shipped bugs past a step that counted matches and reported success on broken
 * output, so every check below reads the actual value and compares it to the
 * config.
 *
 * Checks, in order of how much damage they prevent:
 *
 *   1. Every [data-price] key names a plan that exists.
 *   2. Every [data-price] element shows the price the config says it should.
 *   3. Every scoped structured-data offer carries the config's price.
 *   4. The price a page SHOWS matches the price it TELLS GOOGLE.
 *      This is the one that was already failing in production.
 *   5. The payment code contains no price literals of its own, so the amount
 *      charged cannot drift from the amount displayed.
 *
 * Exits non-zero on any failure, so it is safe in a build.
 */

'use strict';

const fs = require('fs');
const path = require('path');

const cfgLib = require('./lib/config');
const stamper = require('./lib/stamp');

const ROOT = cfgLib.REPO_ROOT;
const STRICT = process.argv.indexOf('--strict') !== -1;

const SEARCH_DIRS = ['src/pages', 'components', 'content/courses/generated'];

const failures = [];
const notes = [];
let filesChecked = 0;
let anchorsChecked = 0;
let schemaChecked = 0;

function fail(file, msg) { failures.push(file + '\n      ' + msg); }

function walk(dir, out) {
    const full = path.join(ROOT, dir);
    if (!fs.existsSync(full)) return out;
    fs.readdirSync(full, { withFileTypes: true }).forEach(function (e) {
        const rel = path.posix.join(dir, e.name);
        if (e.isDirectory()) walk(rel, out);
        else if (/\.html?$/i.test(e.name)) out.push(rel);
    });
    return out;
}

/** All digits of a price, ignoring separators, so ₹1,499 and 1499 compare equal. */
function digits(s) {
    const m = String(s).replace(/&#8377;|&nbsp;/g, '').match(/[\d.,]+/);
    return m ? m[0].replace(/,/g, '').replace(/\.00$/, '') : null;
}

const PRICING_SCRIPTS = [
    '/js/pricing-data.generated.js',
    '/js/international-pricing.js'
];

let pagesWithPrices = 0;

/**
 * A page that shows a price must load the scripts that localise it, or every
 * visitor on earth sees rupees.
 *
 * This was not hypothetical: 185 pages were in exactly that state, including
 * ones written for the UAE, Canada, Hong Kong and Singapore. apply now injects
 * the scripts automatically, and this check is what stops the problem coming
 * back through a page added later.
 */
function checkScripts(rel, html) {
    const visible = html
        .replace(/<script[\s\S]*?<\/script>/gi, '')
        .replace(/<style[\s\S]*?<\/style>/gi, '');
    const shows = /₹|&#8377;|\$\s?\d|\bRs\.?\s?\d/.test(visible) || /data-price\s*=/.test(html);
    if (!shows) return;

    pagesWithPrices++;
    const missing = PRICING_SCRIPTS.filter(function (s) { return html.indexOf(s) === -1; });
    if (missing.length) {
        fail(rel, 'shows a price but does not load ' + missing.join(', ') +
            ', so every visitor sees Indian rupees. Run: npm run pricing:apply');
    }

    // The data file's tag must carry a content-hash version. Without it,
    // sw.js (cache-first) plus the HTTP cache keep serving a RETURNING
    // visitor the previous deploy's prices — they would see and be charged
    // old amounts after a price change. apply stamps this automatically.
    const dataTag = html.match(/src="\/js\/pricing-data\.generated\.js(\?v=[A-Za-z0-9]+)?"/);
    if (dataTag && !dataTag[1]) {
        fail(rel, 'loads pricing-data.generated.js without a ?v= content hash, so a ' +
            'returning visitor\'s cache can serve stale prices after a price change. ' +
            'Run: npm run pricing:apply');
    }
}

// $100/$150 are CURRENT again (flat model, 2026-08-01). Retired now means the
// old $40 flat rate and the withdrawn per-country list figures.
const RETIRED = /(?:\$|USD\s?)(?:40(?![\d.])|149\.99|374\.99|121\.99|61\.99)|(?:₹|&#8377;|Rs\.?\s?)\s?(?<![\d,])(?:2,?499|4,?999|9,?999)(?![\d.])/;
const COMPETITOR_CUE = /kumon|mathnasium|juni|cuemath|outschool|tynker|whitehat|byju|registration fee|per subject|per hour|per class|\$\d+\s*(?:-|–|to)\s*\$?\d+|million|billion|freelance|salary|LPA|k USD/i;

/**
 * The retired flat prices must never re-enter Google-facing text. This is the
 * tripwire for the class of rot the 2026-08-01 audit found on 160+ pages:
 * schema FAQ answers, offer descriptions and meta descriptions still quoting
 * $40/$100/$150 months after the worldwide ladder replaced them.
 */
function checkRetiredFigures(rel, html) {
    const targets = [];

    const metaRx = /<meta\s+(?:name|property)="(?:description|og:description|twitter:description)"\s+content="([^"]*)"/gi;
    let m;
    while ((m = metaRx.exec(html)) !== null) targets.push(['meta description', m[1]]);

    const ldRx = /<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi;
    while ((m = ldRx.exec(html)) !== null) {
        const body = m[1];
        const textRx = /"(?:text|description)"\s*:\s*"([^"]*)"/g;
        let t;
        while ((t = textRx.exec(body)) !== null) targets.push(['schema text', t[1]]);
    }

    targets.forEach(function (pair) {
        if (!RETIRED.test(pair[1])) return;
        if (COMPETITOR_CUE.test(pair[1])) return;   // quoting others is fine
        fail(rel, pair[0] + ' quotes a retired price: "' +
            pair[1].slice(0, 90) + '..." — see pricing/pricing.config.jsonc for the real ones.');
    });

    // Bare price fields in structured data ("highPrice": "4999") — the shape
    // that hid retired figures on 40 locality pages and /pricing itself,
    // because the formatted-figure regex above cannot see plain digits.
    // 4999 is allowed on camp pages only (the current one-time camp fee).
    const ldRx2 = /<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi;
    while ((m = ldRx2.exec(html)) !== null) {
        const bare = /"(?:price|lowPrice|highPrice)"\s*:\s*"?(2499|4999|9999)"?/g;
        let b;
        while ((b = bare.exec(m[1])) !== null) {
            if (b[1] === '4999' && /camp/i.test(rel)) continue;
            fail(rel, 'structured data publishes the retired figure ' + b[1] +
                ' in a price field. The stamper never writes this — the block is ' +
                'unanchored or hand-edited; give its <script> tag a data-price-scope.');
        }
    }

    // Visible text. 2,499 and 9,999 have no current use at all; 4,999 is only
    // legitimate as the one-time camp fee, so it fails when a monthly marker
    // follows; "$40 a month" was the retired flat group price ($40/hour is a
    // competitor rate and stays legal).
    const visible = html.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ');
    const VISIBLE_RETIRED = [
        /(?:₹|&#8377;|Rs\.?\s)\s?(?<![\d,])(?:2,?499|9,?999)(?![\d.])/g,
        /(?:₹|&#8377;|Rs\.?\s)\s?(?<![\d,])4,?999(?![\d.])(?=[^<₹$]{0,40}(?:\/\s?month|\/\s?mo\b|per month|a month))/g,
        /\b(?:2,?499|9,?999) rupees\b/g,
        /\b4,?999 rupees(?=[^<]{0,30}(?:a month|per month|\/\s?month))/g,
        /(?:\$|USD\s?)40(?![\dk.,%])(?=[^<]{0,30}(?:a month|\/\s?month|\/\s?mo\b|per month))/g
    ];
    VISIBLE_RETIRED.forEach(function (rx) {
        let v;
        while ((v = rx.exec(visible)) !== null) {
            const around = visible.slice(Math.max(0, v.index - 120), v.index + 140);
            if (COMPETITOR_CUE.test(around)) continue;
            fail(rel, 'visible text still shows the retired price "' + v[0] +
                '": …' + around.replace(/\s+/g, ' ').trim().slice(0, 110) + '…');
        }
    });
}

function checkFile(rel, config) {
    const html = fs.readFileSync(path.join(ROOT, rel), 'utf8');
    checkScripts(rel, html);
    checkRetiredFigures(rel, html);
    // No early return on pages without anchors: the schema scan below must run
    // everywhere. The old `return` here is how 16 country pages' $40 Offers
    // stayed invisible to this gate while it printed a green tick.
    if (html.indexOf('data-price') !== -1) filesChecked++;

    // ─── 1 + 2: visible anchors show the configured price ───
    const seenVisible = {};
    const anchorRx = /<([a-z][a-z0-9]*)\b([^>]*\bdata-price\s*=\s*"([^"]*)"[^>]*)>/ig;
    let m;
    while ((m = anchorRx.exec(html)) !== null) {
        const tagName = m[1];
        const attrs = m[2];
        const key = m[3];
        const end = stamper.findElementEnd(html, tagName, m.index + m[0].length);
        if (end === -1) { fail(rel, 'Unclosed <' + tagName + ' data-price="' + key + '">'); continue; }

        const shown = html.slice(m.index + m[0].length, end);
        anchorsChecked++;

        let r;
        try { r = cfgLib.resolve(key, config); }
        catch (e) { fail(rel, e.message); continue; }

        if (!r.exists) continue;   // not sold; apply leaves the markup alone

        const derive = (attrs.match(/data-price-derive\s*=\s*"([^"]*)"/i) || [])[1];
        let expectAmount = r.amount;
        if (derive) {
            expectAmount = cfgLib.derive(derive, r.amount, config);
            expectAmount = r.currency === 'INR' ? Math.round(expectAmount) : Math.round(expectAmount * 100) / 100;
        }

        const shownDigits = digits(shown);
        const expectDigits = String(expectAmount);
        // Numeric comparison: a derived $12.50 must equal the computed 12.5 —
        // string equality failed on trailing-zero formatting alone.
        if (Number(shownDigits) !== Number(expectDigits)) {
            fail(rel, 'shows "' + shown.trim().slice(0, 60) + '" for ' + key +
                ' but the config says ' + expectDigits + '. Run: npm run pricing:apply');
        }
        if (!derive) {
            (seenVisible[key.split('.').slice(0, 2).join('.')] =
                seenVisible[key.split('.').slice(0, 2).join('.')] || {})[key.split('.')[2]] = expectDigits;
        }
    }

    // ─── 3 + 4: structured data matches config, and matches the page ───
    const blockRx = /<script\b([^>]*\btype\s*=\s*"application\/ld\+json"[^>]*)>([\s\S]*?)<\/script>/ig;
    let b;
    while ((b = blockRx.exec(html)) !== null) {
        const scopeM = b[1].match(/data-price-scope\s*=\s*"([^"]*)"/i);
        const body = b[2];

        if (!scopeM) {
            // An untagged block that nonetheless publishes a price is exactly how
            // the homepage came to tell Google 2499 for a plan sold at 4,999.
            if (/"price"\s*:\s*"\d/.test(body) || /"lowPrice"/.test(body)) {
                const msg = 'a JSON-LD block publishes a price but has no data-price-scope, ' +
                    'so nothing keeps it in step with the config. Add data-price-scope="subject.region" to the <script> tag.';
                if (STRICT) fail(rel, msg); else notes.push(rel + ': ' + msg);
            }
            continue;
        }

        const scope = scopeM[1];
        const offerRx = /\{[^{}]*"@type"\s*:\s*"Offer"[\s\S]*?\}/g;
        let o;
        while ((o = offerRx.exec(body)) !== null) {
            const offerText = o[0];
            const nameM = offerText.match(/"name"\s*:\s*"([^"]*)"/);
            const priceM = offerText.match(/"price"\s*:\s*"([^"]*)"/);
            if (!nameM || !priceM) continue;
            const tier = stamper.tierFromName(nameM[1]);
            if (!tier) { fail(rel, 'Offer "' + nameM[1] + '" matches no plan'); continue; }

            schemaChecked++;

            // Same rule as the stamper: the offer's own priceCurrency decides
            // its region, the scope only supplies the subject. India-facing
            // pages legitimately publish INR and USD offers in one block.
            const curM = offerText.match(/"priceCurrency"\s*:\s*"([^"]*)"/);
            const region = (curM && curM[1] === 'INR') ? 'india' : scope.split('.')[1];
            const key = scope.split('.')[0] + '.' + region + '.' + tier;

            let r;
            try { r = cfgLib.resolve(key, config); }
            catch (e) { fail(rel, e.message); continue; }

            if (!r.exists) {
                fail(rel, 'publishes an Offer "' + nameM[1] + '" for ' + key +
                    ', which is set to null (not sold). Remove the Offer.');
                continue;
            }
            if (priceM[1] !== String(r.amount)) {
                fail(rel, 'tells Google "' + priceM[1] + '" for ' + key +
                    ' but the config says ' + r.amount + '. Run: npm run pricing:apply');
            }

            // The check that matters: does the page SHOW what it TELLS Google?
            const visible = seenVisible[scope.split('.')[0] + '.' + region] &&
                seenVisible[scope.split('.')[0] + '.' + region][tier];
            if (visible && visible !== String(r.amount)) {
                fail(rel, 'VISIBLE/SCHEMA MISMATCH — page shows ' + visible +
                    ' for ' + scope + '.' + tier + ' but tells Google ' + priceM[1]);
            }
        }
    }
}

/** No price literals may survive in the code that charges a card. */
function checkPaymentCode() {
    const files = [
        'src/js/course-payment.js',
        'src/js/summer-camp-enrollment.js',
        'src/js/winter-camp-enrollment.js',
        'src/js/international-pricing.js'
    ];
    const priceLiteral = /\b(1499|2499|4999|9999|49999|1999|2999|599)\b/g;

    files.forEach(function (rel) {
        const full = path.join(ROOT, rel);
        if (!fs.existsSync(full)) return;
        const src = fs.readFileSync(full, 'utf8');
        const hits = [];
        src.split('\n').forEach(function (line, i) {
            // A comment citing a price is documentation — explaining why a rule
            // exists, or recording a bug that was fixed. Only executable code
            // can charge anyone the wrong amount.
            if (/^\s*(\/\/|\*|\/\*)/.test(line)) return;
            if (/z-index|border-radius|setTimeout|9999px/.test(line)) return;
            const found = line.match(priceLiteral);
            if (found) hits.push('line ' + (i + 1) + ': ' + line.trim().slice(0, 90));
        });
        if (hits.length) {
            const msg = rel + ' still holds price literals, so the amount charged can drift ' +
                'from the amount shown:\n      ' + hits.slice(0, 4).join('\n      ') +
                (hits.length > 4 ? '\n      ... and ' + (hits.length - 4) + ' more' : '');
            if (STRICT) failures.push(msg); else notes.push(msg);
        }
    });
}

/**
 * courses-config.json is the file the payment modal charges from — the one
 * place where a wrong number bills a real customer. Three rules:
 *   1. defaultPricing must equal the coding India table.
 *   2. A real course whose resolved India prices differ from the defaults
 *      must have its own entry. This is exactly how every maths course once
 *      showed ₹8,500 on the page while Razorpay charged the coding ₹7,500 —
 *      the entry simply did not exist, so the modal fell back silently.
 *   3. Every entry — including orphans left over from renamed courses — must
 *      match the config. No retired figure may survive in a file the
 *      browser downloads to decide a charge.
 */
function checkCoursesConfig(config) {
    const rel = 'content/courses/data/courses-config.json';
    const full = path.join(ROOT, rel);
    if (!fs.existsSync(full)) return;
    let json;
    try { json = JSON.parse(fs.readFileSync(full, 'utf8')); }
    catch (e) { fail(rel, 'not parseable JSON: ' + e.message); return; }

    const coding = config.plans.coding.india;
    cfgLib.MONTHLY_TIERS.forEach(function (t) {
        const entry = json.defaultPricing && json.defaultPricing[t];
        if (coding[t] === null || coding[t] === undefined) {
            if (entry) fail(rel, 'defaultPricing.' + t + ' still exists but the tier is no longer sold.');
            return;
        }
        if (!entry) { fail(rel, 'defaultPricing.' + t + ' is missing.'); return; }
        if (entry.amount !== coding[t]) {
            fail(rel, 'defaultPricing.' + t + ' charges ' + entry.amount +
                ' but the config says ' + coding[t] + '.');
        }
    });

    const realSlugs = new Set();
    const dataDir = path.join(ROOT, 'content', 'courses', 'data');
    fs.readdirSync(dataDir).forEach(function (f) {
        if (!/\.json$/.test(f) || f === 'courses-config.json') return;
        try {
            const c = JSON.parse(fs.readFileSync(path.join(dataDir, f), 'utf8'));
            if (c && c.meta && c.meta.slug) realSlugs.add(c.meta.slug);
        } catch (e) { /* malformed course files are caught elsewhere */ }
    });

    realSlugs.forEach(function (slug) {
        const prices = cfgLib.coursePrices(slug, config).india;
        const differs = cfgLib.MONTHLY_TIERS.some(function (t) {
            return (prices[t] || null) !== (coding[t] || null);
        });
        if (differs && !(json.courses && json.courses[slug])) {
            fail(rel, slug + ' prices differ from the defaults but it has no entry, so the ' +
                'payment modal would silently charge defaultPricing.');
        }
    });

    Object.keys(json.courses || {}).forEach(function (slug) {
        const prices = cfgLib.coursePrices(slug, config).india;
        const pricing = (json.courses[slug] && json.courses[slug].pricing) || {};
        cfgLib.MONTHLY_TIERS.forEach(function (t) {
            const entry = pricing[t];
            const want = (prices[t] === undefined) ? null : prices[t];
            if (want === null) {
                if (entry) fail(rel, slug + '.' + t + ' still exists but the tier is not sold — ' +
                    'Razorpay could be handed ' + entry.amount + '.');
                return;
            }
            if (!entry) {
                if (want !== (coding[t] || null)) {
                    fail(rel, slug + '.' + t + ' is missing, so the modal falls back to the default ' +
                        coding[t] + ' instead of ' + want + '.');
                }
                return;
            }
            if (entry.amount !== want) {
                fail(rel, slug + '.' + t + ' charges ' + entry.amount +
                    ' but the config says ' + want + '.');
            }
        });
    });
}

/**
 * Refuse to report success on an empty run.
 *
 * walk() returns [] for a directory that does not exist, so without this a
 * fresh clone — or a build that runs verify before generate:all — would check
 * nothing, accumulate no failures, and print a tick. content/courses/generated
 * is gitignored, which makes that scenario ordinary rather than exotic. A
 * verifier that cannot fail is worse than none, because it launders confidence.
 */
/**
 * The .md twins must agree with the pages they are derived from.
 *
 * 391 of them carry a price, they are git-tracked, and they are what AI
 * crawlers read — yet every check in this file looked only at HTML, so a twin
 * whose price disagreed with its parent could ship unnoticed. That gap is how
 * 132 twins came to be published carrying retired $40/$100/$150 figures after
 * generate:static-md ran before pricing:apply.
 *
 * Tags are stripped before comparing, because a page writes a price split
 * across elements (<span>₹</span>1499) while the twin renders it as one string.
 */
function checkMarkdownTwins() {
    const dir = path.join(ROOT, 'src', 'pages');
    if (!fs.existsSync(dir)) return;

    const PRICE = /(?:₹|\$)\s?\d[\d,]*(?:\.\d{2})?/g;
    let checked = 0;

    fs.readdirSync(dir).forEach(function (f) {
        if (!/\.md$/.test(f)) return;
        const htmlPath = path.join(dir, f.replace(/\.md$/, '.html'));
        if (!fs.existsSync(htmlPath)) return;

        const md = fs.readFileSync(path.join(dir, f), 'utf8');
        const rendered = fs.readFileSync(htmlPath, 'utf8')
            .replace(/<script[\s\S]*?<\/script>/gi, '')
            .replace(/<style[\s\S]*?<\/style>/gi, '')
            .replace(/<[^>]+>/g, '')
            .replace(/&#8377;/g, '₹')
            .replace(/\s+/g, '');

        const figures = (md.match(PRICE) || []).map(function (x) { return x.replace(/\s+/g, ''); });
        const unique = figures.filter(function (v, i, a) { return a.indexOf(v) === i; });
        if (!unique.length) return;
        checked++;

        const missing = unique.filter(function (x) { return rendered.indexOf(x) === -1; });
        if (missing.length) {
            // A note rather than a failure. Two legitimate cases produce a
            // mismatch that is not drift: a price still sitting in prose (it is
            // in TAGGING-REVIEW.md), and a price the page renders with
            // JavaScript, which is absent from the static HTML by design.
            // --strict promotes these, so the signal is still available.
            const msg = 'quotes ' + missing.slice(0, 3).join(', ') +
                ', which its own page does not show. Either the twin is stale ' +
                '(generate:static-md must run AFTER pricing:apply), or that ' +
                'price is prose or rendered by JavaScript.';
            if (STRICT) fail('src/pages/' + f, msg);
            else notes.push('src/pages/' + f + ': ' + msg);
        }
    });

    if (checked) console.log('  ' + checked + ' markdown twin(s) checked against their pages');
}

function assertCoverage() {
    const dataDir = path.join(ROOT, 'content', 'courses', 'data');
    const genDir = path.join(ROOT, 'content', 'courses', 'generated');

    if (fs.existsSync(dataDir)) {
        const sources = fs.readdirSync(dataDir)
            .filter(function (f) { return /\.json$/.test(f) && f !== 'courses-config.json'; }).length;
        const generated = fs.existsSync(genDir)
            ? fs.readdirSync(genDir, { withFileTypes: true }).filter(function (e) { return e.isDirectory(); }).length
            : 0;

        if (generated === 0) {
            failures.push('content/courses/generated is empty, so no course page was checked. ' +
                'Run: npm run generate:courses  (in a build, pricing:verify must come after generate:all)');
        } else if (generated < sources - 1) {
            failures.push(sources + ' course sources but only ' + generated + ' generated pages. ' +
                'Some courses were not built, so their prices went unchecked.');
        }
    }

    if (filesChecked === 0) {
        failures.push('Not one page carrying a price anchor was found. Either the tree is incomplete ' +
            'or the anchors have been stripped. Refusing to report success on an empty check.');
    }
    if (schemaChecked === 0) {
        failures.push('No structured-data offer was checked. The data-price-scope attributes are ' +
            'missing from the pages that publish prices to Google.');
    }
}

function main() {
    let config;
    try { config = cfgLib.load({ fresh: true }); }
    catch (e) { console.error('\n✗ ' + e.message + '\n'); process.exit(1); }

    const files = [];
    SEARCH_DIRS.forEach(function (d) { walk(d, files); });
    files.forEach(function (f) { checkFile(f, config); });
    checkPaymentCode();
    checkCoursesConfig(config);
    checkMarkdownTwins();
    assertCoverage();

    console.log('');
    console.log('  ' + pagesWithPrices + ' page(s) show a price — all load the currency scripts');
    console.log('  ' + filesChecked + ' page(s) carry price anchors');
    console.log('  ' + anchorsChecked + ' visible price(s) checked against the config');
    console.log('  ' + schemaChecked + ' structured-data offer(s) checked');
    console.log('');

    if (notes.length) {
        console.log('─── Not yet under the config (' + notes.length + ') ───────────────────────');
        notes.slice(0, 15).forEach(function (n) { console.log('  · ' + n); });
        if (notes.length > 15) console.log('  · ... and ' + (notes.length - 15) + ' more');
        console.log('\n  These are migration work, not breakage. Run with --strict to treat them as failures.\n');
    }

    if (failures.length) {
        console.log('─── FAILURES ──────────────────────────────────────────────────');
        failures.forEach(function (f) { console.log('  ✗ ' + f); });
        console.log('\n  ' + failures.length + ' failure(s).\n');
        process.exit(1);
    }

    console.log('  ✓ Every checked price matches the config, and every page shows what it tells Google.\n');
}

main();
