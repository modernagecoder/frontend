#!/usr/bin/env node
/**
 * Write the config's prices into every tagged page.
 *
 *   npm run pricing:preview     show what would change, change nothing
 *   npm run pricing:apply       actually write it
 *
 * Only touches anchors that are already in the markup — a [data-price]
 * element or a JSON-LD block with data-price-scope. It never looks for
 * numbers that "look like" a price, because on this site 9999 is a z-index in
 * nav.html, a border-radius, a quiz answer and a price, and 4999 is a
 * substring of 49999.
 *
 * Also emits src/js/pricing-data.generated.js so the browser and the payment
 * code read the same numbers as the pages do.
 */

'use strict';

const fs = require('fs');
const path = require('path');

const cfgLib = require('./lib/config');
const stamper = require('./lib/stamp');
const ppp = require('./lib/ppp');
const applyLib = require('./apply-lib');
const ensureScripts = applyLib.ensureScripts;

const DRY = process.argv.indexOf('--dry-run') !== -1;
const VERBOSE = process.argv.indexOf('--verbose') !== -1;
const ROOT = cfgLib.REPO_ROOT;

// content/courses/template is deliberately absent. It is a source template
// full of {{PLACEHOLDERS}} that generate-courses.js fills in; its anchors get
// stamped in content/courses/generated once the generator has run.
const SEARCH_DIRS = [
    'src/pages',
    'components',
    'content/courses/generated'
];

function walk(dir, out) {
    const full = path.join(ROOT, dir);
    if (!fs.existsSync(full)) return out;
    fs.readdirSync(full, { withFileTypes: true }).forEach(function (e) {
        const rel = path.join(dir, e.name);
        if (e.isDirectory()) walk(rel, out);
        else if (/\.html?$/i.test(e.name)) out.push(rel);
    });
    return out;
}

/**
 * The price table the browser gets. Generated, never hand-written — a number
 * typed into a script that fans out across the site is a site-wide claim.
 */
function emitRuntimeData(config) {
    const pppData = cfgLib.loadData('ppp');
    const fxData = cfgLib.loadData('fx');

    const plans = {};
    Object.keys(config.plans).forEach(function (subject) {
        plans[subject] = {};
        cfgLib.REGIONS.forEach(function (region) {
            const tiers = config.plans[subject][region] || {};
            plans[subject][region] = {};
            Object.keys(tiers).forEach(function (tier) {
                plans[subject][region][tier] = tiers[tier];   // null stays null: not sold
            });
        });
    });

    const worldwide = { enabled: false, countries: {}, currencies: {} };
    if (config.worldwide.enabled && pppData && fxData) {
        worldwide.enabled = true;
        worldwide.fxDate = fxData.providerUpdatedAt;
        worldwide.unstable = config.worldwide.unstableCurrencies;
        Object.keys(config.plans).forEach(function (subject) {
            if (!config.plans[subject].international) return;
            const built = ppp.buildTable(subject, config, pppData, fxData);
            Object.keys(built.table).forEach(function (iso) {
                if (!worldwide.countries[iso]) {
                    worldwide.countries[iso] = {
                        currency: built.table[iso].currency,
                        name: built.table[iso].name,
                        tiers: {}
                    };
                }
                worldwide.countries[iso].tiers[subject] = built.table[iso].tiers;
            });
        });
        // Only the rates for currencies actually referenced, to keep the file small.
        const needed = {};
        Object.keys(worldwide.countries).forEach(function (iso) {
            const c = worldwide.countries[iso].currency;
            if (c && fxData.rates[c]) needed[c] = fxData.rates[c];
        });
        worldwide.currencies = needed;
    }

    const payload = {
        version: config.version,
        updated: config.updated,
        generatedFrom: 'pricing/pricing.config.jsonc',
        plans: plans,
        courseOverrides: config.courseOverrides || {},
        display: config.display,
        worldwide: worldwide
    };

    const js = '/**\n' +
        ' * GENERATED FILE — DO NOT EDIT.\n' +
        ' *\n' +
        ' * Written by scripts/pricing/apply.js from pricing/pricing.config.jsonc.\n' +
        ' * Any edit here is overwritten on the next build. Change the price in the\n' +
        ' * config file instead.\n' +
        ' *\n' +
        ' * Country price levels: World Bank PA.NUS.PRVT.PLI, CC BY 4.0.\n' +
        ' */\n' +
        'window.MAC_PRICING = ' + JSON.stringify(payload, null, 2) + ';\n';

    const outPath = path.join(ROOT, 'src', 'js', 'pricing-data.generated.js');
    const existing = fs.existsSync(outPath) ? fs.readFileSync(outPath, 'utf8') : null;
    if (existing !== js && !DRY) fs.writeFileSync(outPath, js);
    return { path: 'src/js/pricing-data.generated.js', changed: existing !== js, bytes: js.length };
}

/**
 * Rewrite the pricing inside content/courses/data/courses-config.json.
 *
 * That file is fetched at runtime by course-payment.js and is what Razorpay is
 * given for an Indian enrolment, which made it a second authority on price
 * alongside the config. Only the amount and display strings are touched;
 * descriptions, the indiaOnly flag, course names and everything else in the
 * file are left exactly as they are.
 */
function syncCoursesConfig(config) {
    const p = path.join(ROOT, 'content', 'courses', 'data', 'courses-config.json');
    if (!fs.existsSync(p)) return { changed: false, courses: 0 };

    const before = fs.readFileSync(p, 'utf8');
    const json = JSON.parse(before);
    const changes = [];

    function writeTier(target, tier, amount, label) {
        if (!target || !target[tier]) return;                    // tier absent here

        // A tier set to null in the config is no longer sold. Delete it rather
        // than leaving the old figure behind — a stale entry here is what
        // Razorpay would still be handed if any code path asked for it.
        if (amount === null || amount === undefined) {
            changes.push(label + '.' + tier + ': removed (no longer sold)');
            delete target[tier];
            return;
        }

        const display = cfgLib.format(amount, 'INR', { style: 'display' }) +
            (tier === 'lifetime' ? '' : '/month');
        if (target[tier].amount !== amount || target[tier].display !== display) {
            changes.push(label + '.' + tier + ': ' + target[tier].amount + ' → ' + amount);
        }
        target[tier].amount = amount;
        target[tier].display = display;
    }

    // Defaults follow the plain coding prices.
    const coding = config.plans.coding.india;
    cfgLib.MONTHLY_TIERS.forEach(function (t) {
        writeTier(json.defaultPricing, t, coding[t], 'defaultPricing');
    });

    // The internationalPricing block is a third stale copy — it still carried
    // the old flat $40/$100 long after the config moved. Nothing should have to
    // remember to update it.
    if (json.internationalPricing) {
        const intl = config.plans.coding.international;
        const camps = (config.plans.camps && config.plans.camps.international) || {};

        function writeIntl(tier, amount, suffix) {
            const target = json.internationalPricing;
            if (!target[tier]) return;
            if (amount === null || amount === undefined) {
                changes.push('internationalPricing.' + tier + ': removed (no longer sold)');
                delete target[tier];
                return;
            }
            const display = cfgLib.format(amount, 'USD', { style: 'display' }) + suffix;
            if (target[tier].amount !== amount || target[tier].display !== display) {
                changes.push('internationalPricing.' + tier + ': ' + target[tier].amount + ' → ' + amount);
            }
            target[tier].amount = amount;
            target[tier].display = display;
        }

        writeIntl('group', intl.group, '/month');
        writeIntl('personal', intl.personal, '/month');
        writeIntl('miniBatch', intl.miniBatch, '/month');
        writeIntl('lifetime', intl.lifetime, '');
        writeIntl('summer', camps.oneTime, '');
    }

    // Keep the file's own instructions honest about which tiers exist.
    if (json.notes && typeof json.notes.howToAddNewCourse === 'string') {
        const sold = cfgLib.MONTHLY_TIERS.filter(function (t) { return coding[t] !== null; });
        json.notes.howToAddNewCourse =
            "Add a new entry in the 'courses' object with the course slug as key. " +
            'Each course should include ' + sold.join(', ') + ' pricing. ' +
            'GENERATED: prices in this file are written by npm run pricing:apply from ' +
            'pricing/pricing.config.jsonc — edit that file, not this one.';
    }

    // Slugs of courses that actually exist. courses-config.json still carries
    // seven entries for courses that were renamed or split, and those entries
    // are never looked up. Rewriting them would churn the file and could
    // destroy a figure someone still wants; they are left exactly as found.
    const realSlugs = new Set();
    const dataDir = path.join(ROOT, 'content', 'courses', 'data');
    if (fs.existsSync(dataDir)) {
        fs.readdirSync(dataDir).forEach(function (f) {
            if (!/\.json$/.test(f) || f === 'courses-config.json') return;
            try {
                const c = JSON.parse(fs.readFileSync(path.join(dataDir, f), 'utf8'));
                if (c && c.meta && c.meta.slug) realSlugs.add(c.meta.slug);
            } catch (e) { /* a malformed course file is not this script's problem */ }
        });
    }

    let n = 0;
    const orphans = [];
    Object.keys(json.courses || {}).forEach(function (slug) {
        const prices = cfgLib.coursePrices(slug, config).india;
        const orphaned = realSlugs.size && !realSlugs.has(slug);

        if (orphaned) {
            orphans.push(slug);
            // An orphaned entry keeps its own figures — they may still be wanted
            // if the course comes back. But a tier that is no longer sold at all
            // is deleted even here, so the file never advertises a product that
            // does not exist.
            cfgLib.MONTHLY_TIERS.forEach(function (t) {
                if (prices[t] === null || prices[t] === undefined) {
                    writeTier(json.courses[slug].pricing, t, null, slug + ' (orphan)');
                }
            });
            return;
        }

        cfgLib.MONTHLY_TIERS.forEach(function (t) {
            writeTier(json.courses[slug].pricing, t, prices[t], slug);
        });
        n++;
    });

    const after = JSON.stringify(json, null, 2) + '\n';
    const changed = after !== before;
    if (changed && !DRY) fs.writeFileSync(p, after);
    return { changed: changed, courses: n, changes: changes, orphans: orphans };
}

/**
 * Rewrite the pricing answer inside llms.txt.
 *
 * llms.txt is the file AI engines read and quote verbatim, and it is otherwise
 * hand-maintained, so it rots silently. Its pricing answer still described a
 * flat $40/$100 international rate months after the config had moved to a
 * per-country ladder.
 *
 * Only the answer to the pricing question is replaced, matched by its own
 * question line, so the rest of the hand-written file is untouched.
 */
function syncLlmsTxt(config) {
    const p = path.join(ROOT, 'llms.txt');
    if (!fs.existsSync(p)) return { changed: false };

    const before = fs.readFileSync(p, 'utf8');
    const QUESTION = 'Q: How much do Modern Age Coders courses cost?';
    const qAt = before.indexOf(QUESTION);
    if (qAt === -1) return { changed: false, missing: true };

    // This file is stored with Windows line endings, so every boundary has to
    // tolerate a carriage return. Matching only \n found nothing and the sync
    // quietly reported "no pricing question" while the stale text sat there
    // being quoted by AI engines.
    const aMatch = /\r?\nA:/.exec(before.slice(qAt));
    if (!aMatch) return { changed: false, missing: true };
    const aAt = qAt + aMatch.index + aMatch[0].length - 2;   // index of "A:"

    // The answer runs to the next blank line followed by another question.
    const endMatch = /\r?\n\r?\nQ:/.exec(before.slice(aAt));
    if (!endMatch) return { changed: false, missing: true };
    const endAt = aAt + endMatch.index;

    const india = config.plans.coding.india;
    const intl = config.plans.coding.international;
    const agents = config.plans.agents.india;
    const inr = function (n) { return cfgLib.format(n, 'INR', { style: 'display' }); };
    const usd = function (n) { return cfgLib.format(n, 'USD', { style: 'display' }); };

    const indiaTiers = [];
    if (india.group != null) indiaTiers.push('group batches of 4-8 students at ' + inr(india.group) + ' per month (two live classes per week)');
    if (india.miniBatch != null) indiaTiers.push('mini batches of 3-4 students at ' + inr(india.miniBatch) + ' per month');
    if (india.personal != null) indiaTiers.push('one-on-one classes at ' + inr(india.personal) + ' per month');

    const agentTiers = [];
    if (agents.group != null) agentTiers.push(inr(agents.group) + ' group');
    if (agents.miniBatch != null) agentTiers.push(inr(agents.miniBatch) + ' mini batch (India only)');
    if (agents.personal != null) agentTiers.push(inr(agents.personal) + ' one-on-one');

    // Spelled out, because this text is read aloud by assistants and quoted in
    // answers: "there are 3 tiers" reads like a database dump.
    const WORDS = ['no', 'one', 'two', 'three', 'four', 'five', 'six'];
    const count = WORDS[indiaTiers.length] || String(indiaTiers.length);

    const answer = 'A: In India there are ' + count + ' tiers, all billed monthly with no lock-in: ' +
        indiaTiers.join(', ') + '. Outside India the price is set for each country using World Bank ' +
        'purchasing power data, so a family pays what is reasonable where they live: ' +
        usd(intl.group) + ' per month for group classes and ' + usd(intl.personal) + ' for one-on-one in the ' +
        'highest-income countries, less elsewhere, and the price is shown in the local currency with the ' +
        'exact US dollar charge stated beside it. One exception: the two premium Codex + Claude Code AI ' +
        'coding agents courses are ' + agentTiers.join(', ') + ' per month in India ' +
        '(students also need their own Claude and ChatGPT subscriptions). A free demo class is ' +
        'available before enrollment, with no card required.';

    // Wrap to the file's existing line width so it stays readable.
    const wrapped = answer.replace(/(.{1,92})(\s|$)/g, '$1\n').trimEnd();

    // Preserve whatever line ending the file already uses.
    const eol = before.indexOf(String.fromCharCode(13,10)) !== -1
        ? String.fromCharCode(13,10) : String.fromCharCode(10);
    const after = before.slice(0, aAt)
        + wrapped.split(String.fromCharCode(10)).join(eol)
        + before.slice(endAt);
    const changed = after !== before;
    if (changed && !DRY) fs.writeFileSync(p, after);
    return { changed: changed };
}

function main() {
    let config;
    try {
        config = cfgLib.load({ fresh: true });
    } catch (e) {
        console.error('\n✗ ' + e.message + '\n');
        process.exit(1);
    }

    const files = [];
    SEARCH_DIRS.forEach(function (d) { walk(d, files); });

    console.log((DRY ? 'Previewing' : 'Applying') + ' prices across ' + files.length + ' files...\n');

    let touched = 0;
    let anchors = 0;
    const allChanges = [];
    const allErrors = [];
    const notSold = {};

    let scriptsAdded = 0;

    files.forEach(function (rel) {
        const full = path.join(ROOT, rel);
        const before = fs.readFileSync(full, 'utf8');
        let out = before;

        // Every page that shows a price gets the scripts that localise it,
        // whether or not it has any [data-price] anchors yet. This runs on
        // every build, so a page added later is covered without anyone having
        // to remember.
        const ensured = ensureScripts(out);
        if (ensured.added) { out = ensured.html; scriptsAdded++; }

        if (out.indexOf('data-price') !== -1) {
            const result = stamper.stamp(out, config);
            anchors += result.report.anchors;
            result.report.errors.forEach(function (e) { allErrors.push(rel + ': ' + e); });
            result.report.notSold.forEach(function (k) { notSold[k] = (notSold[k] || 0) + 1; });
            if (result.html !== out) {
                result.report.changes.forEach(function (c) { allChanges.push({ file: rel, change: c }); });
                out = result.html;
            }
        }

        if (out !== before) {
            touched++;
            if (!DRY) fs.writeFileSync(full, out);
        }
    });

    const runtime = emitRuntimeData(config);
    const coursesCfg = syncCoursesConfig(config);
    const llms = syncLlmsTxt(config);

    // ─── report ───
    if (allChanges.length) {
        console.log('─── Changes ───────────────────────────────────────────────────');
        const byKey = {};
        allChanges.forEach(function (c) {
            const k = c.change.key + '  ' + c.change.from + ' → ' + c.change.to;
            (byKey[k] = byKey[k] || []).push(c.file);
        });
        Object.keys(byKey).sort().forEach(function (k) {
            console.log('  ' + k + '   (' + byKey[k].length + ' file' + (byKey[k].length === 1 ? '' : 's') + ')');
            if (VERBOSE) byKey[k].forEach(function (f) { console.log('      ' + f); });
        });
        console.log('');
    }

    if (Object.keys(notSold).length) {
        console.log('─── Plans marked as not sold (left hidden, no price invented) ──');
        Object.keys(notSold).forEach(function (k) {
            console.log('  ' + k + '  on ' + notSold[k] + ' page(s)');
        });
        console.log('');
    }

    if (allErrors.length) {
        console.log('─── Problems ──────────────────────────────────────────────────');
        allErrors.slice(0, 40).forEach(function (e) { console.log('  ✗ ' + e); });
        if (allErrors.length > 40) console.log('  ... and ' + (allErrors.length - 40) + ' more');
        console.log('\n' + allErrors.length + ' problem(s). ' + (DRY ? '' : 'Nothing further was written. '));
        process.exit(1);
    }

    console.log(anchors + ' price anchors across ' + files.length + ' files.');
    if (scriptsAdded) console.log(scriptsAdded + ' page(s) ' + (DRY ? 'would get' : 'given') + ' the currency scripts they were missing.');
    console.log(touched + ' file(s) ' + (DRY ? 'would change' : 'changed') + '.');
    console.log(runtime.path + (runtime.changed ? (DRY ? ' would be rewritten' : ' rewritten') : ' unchanged') +
        ' (' + (runtime.bytes / 1024).toFixed(1) + ' KB).');
    console.log('courses-config.json (the Razorpay amount for ' + coursesCfg.courses + ' courses) ' +
        (coursesCfg.changed ? (DRY ? 'would change' : 'updated') : 'unchanged') + '.');
    console.log('llms.txt (what AI engines quote) ' +
        (llms.missing ? 'has no pricing question to update' :
         llms.changed ? (DRY ? 'would change' : 'updated') : 'unchanged') + '.');
    if (coursesCfg.changes && coursesCfg.changes.length) {
        coursesCfg.changes.slice(0, 10).forEach(function (c) { console.log('    ' + c); });
        if (coursesCfg.changes.length > 10) console.log('    ... and ' + (coursesCfg.changes.length - 10) + ' more');
    }

    if (DRY) console.log('\nNothing was written. Run  npm run pricing:apply  to make it real.');
    else console.log('\nNext: npm run pricing:verify');
}

main();
