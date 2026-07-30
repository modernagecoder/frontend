#!/usr/bin/env node
/**
 * Refresh the live data the worldwide pricing depends on.
 *
 *   node scripts/pricing/refresh.js
 *
 * Writes two committed files:
 *   pricing/data/ppp.json  World Bank price level index, 208 economies
 *   pricing/data/fx.json   US dollar exchange rates, 160+ currencies
 *
 * Both are fetched HERE, at build time, and committed — never from the
 * visitor's browser. Calling a third-party API from the page would leak every
 * visitor's IP address to a company they have no relationship with, add a
 * network round trip before the price could be shown, and take the pricing
 * down with it whenever that API had a bad day.
 *
 * Purchasing power parity is an annual statistic, not a live one: the World
 * Bank republishes it roughly once a year. Exchange rates move daily, which is
 * why they are a separate file with its own freshness stamp.
 *
 * Sources:
 *   World Bank Indicators API, PA.NUS.PRVT.PLI, CC BY 4.0, no key required.
 *   exchangerate-api open endpoint, no key required.
 */

'use strict';

const fs = require('fs');
const path = require('path');
const https = require('https');

const cfgLib = require('./lib/config');

const PPP_URL = 'https://api.worldbank.org/v2/country/all/indicator/PA.NUS.PRVT.PLI?format=json&mrnev=1&per_page=400';
const FX_URL = 'https://open.er-api.com/v6/latest/USD';
const FX_CROSSCHECK_URL = 'https://api.frankfurter.app/latest?base=USD&symbols=INR,EUR,GBP,AUD';

function get(url, redirectsLeft) {
    const hops = redirectsLeft === undefined ? 3 : redirectsLeft;
    return new Promise(function (resolve, reject) {
        const req = https.get(url, { timeout: 30000, headers: { 'User-Agent': 'modernagecoders-pricing/1.0' } }, function (res) {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                res.resume();
                if (hops <= 0) return reject(new Error('Too many redirects for ' + url));
                return resolve(get(res.headers.location, hops - 1));
            }
            if (res.statusCode !== 200) {
                res.resume();
                return reject(new Error('HTTP ' + res.statusCode + ' from ' + url));
            }
            let body = '';
            res.setEncoding('utf8');
            res.on('data', function (c) { body += c; });
            res.on('end', function () {
                try { resolve(JSON.parse(body)); }
                catch (e) { reject(new Error('Bad JSON from ' + url + ': ' + e.message)); }
            });
        });
        req.on('timeout', function () { req.destroy(new Error('Timed out fetching ' + url)); });
        req.on('error', reject);
    });
}

async function main() {
    const config = cfgLib.load();
    const currencyMap = JSON.parse(
        fs.readFileSync(path.join(cfgLib.DATA_DIR, 'country-currency.json'), 'utf8')
    );

    console.log('Fetching World Bank price level index (PA.NUS.PRVT.PLI)...');
    const wb = await get(PPP_URL);
    if (!Array.isArray(wb) || !Array.isArray(wb[1])) {
        throw new Error('Unexpected World Bank response shape. Nothing written.');
    }
    const meta = wb[0];
    const rows = wb[1];

    // The "all countries" endpoint also returns aggregates such as "World" and
    // "Euro area". Those have no ISO-2 country code of their own in the shape we
    // need, and pricing an aggregate would be meaningless.
    const countries = {};
    let skippedNoValue = 0;
    rows.forEach(function (row) {
        const iso2 = row.country && row.country.id;
        if (!iso2 || iso2.length !== 2) return;
        if (row.value === null || row.value === undefined) { skippedNoValue++; return; }
        countries[iso2] = {
            name: row.country.value,
            pli: Number(row.value.toFixed(4)),
            year: parseInt(row.date, 10),
            currency: currencyMap[iso2] || null
        };
    });

    const withCurrency = Object.keys(countries).filter(function (k) { return countries[k].currency; }).length;
    console.log('  ' + Object.keys(countries).length + ' economies with a price level'
        + ' (' + skippedNoValue + ' had no value)');
    console.log('  ' + withCurrency + ' of them mapped to a local currency');
    console.log('  World Bank last updated: ' + meta.lastupdated);

    console.log('Fetching exchange rates...');
    const fx = await get(FX_URL);
    if (!fx || fx.result !== 'success' || !fx.rates || !fx.rates.INR) {
        throw new Error('Unexpected exchange-rate response. Nothing written.');
    }
    console.log('  ' + Object.keys(fx.rates).length + ' currencies, updated ' + fx.time_last_update_utc);
    console.log('  1 USD = ' + fx.rates.INR + ' INR');

    // Cross-check the majors against European Central Bank reference rates. Two
    // independent sources disagreeing by more than a couple of percent means one
    // of them is wrong, and a wrong rate silently mis-floors every price.
    let crosscheck = null;
    try {
        const ecb = await get(FX_CROSSCHECK_URL);
        crosscheck = { source: 'ECB via frankfurter.app', date: ecb.date, rates: ecb.rates };
        const drift = [];
        Object.keys(ecb.rates).forEach(function (c) {
            if (!fx.rates[c]) return;
            const pct = Math.abs(ecb.rates[c] - fx.rates[c]) / ecb.rates[c] * 100;
            if (pct > 2) drift.push(c + ' differs by ' + pct.toFixed(1) + '%');
        });
        if (drift.length) {
            throw new Error('Exchange rates disagree between sources:\n  ' + drift.join('\n  ') +
                '\nNothing written. Re-run in a few minutes, or check both APIs.');
        }
        console.log('  cross-checked against ECB reference rates: agree within 2%');
    } catch (err) {
        if (/disagree/.test(err.message)) throw err;
        console.log('  cross-check unavailable (' + err.message + ') — continuing with the primary source');
    }

    const now = new Date().toISOString();

    fs.writeFileSync(path.join(cfgLib.DATA_DIR, 'ppp.json'), JSON.stringify({
        _source: 'World Bank World Development Indicators, PA.NUS.PRVT.PLI (price level index, household final consumption, US = 100)',
        _licence: 'CC BY 4.0 — attribution required wherever these prices are shown',
        _url: 'https://api.worldbank.org/v2/country/all/indicator/PA.NUS.PRVT.PLI',
        worldBankLastUpdated: meta.lastupdated,
        fetchedAt: now,
        countries: countries
    }, null, 2) + '\n');

    fs.writeFileSync(path.join(cfgLib.DATA_DIR, 'fx.json'), JSON.stringify({
        _source: fx.provider || 'https://www.exchangerate-api.com',
        _note: 'Used only to convert the US dollar charge into a labelled local estimate, and to work out the India floor. Never used to charge a customer.',
        base: 'USD',
        providerUpdatedAt: fx.time_last_update_utc,
        fetchedAt: now,
        crosscheck: crosscheck,
        rates: fx.rates
    }, null, 2) + '\n');

    console.log('\nWritten:');
    console.log('  pricing/data/ppp.json');
    console.log('  pricing/data/fx.json');
    console.log('\nNext: npm run pricing:check');
}

main().catch(function (err) {
    console.error('\nRefresh failed: ' + err.message);
    console.error('Existing data files were left untouched.');
    process.exit(1);
});
