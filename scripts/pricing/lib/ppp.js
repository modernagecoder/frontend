/**
 * Purchasing-power pricing engine.
 *
 * Turns the international list price into a per-country price using World Bank
 * price-level data, subject to a floor that guarantees the merchant never nets
 * less from a foreign enrolment than from an Indian one.
 *
 * WHY THE FLOOR IS NOT OPTIONAL
 * -----------------------------
 * Steam and Google Play can discount deeply by country because a copy of a
 * game costs nothing to produce. A live class costs a teacher-hour priced in
 * rupees whether the seat sells in Lagos or Oslo. At raw purchasing power
 * parity, 81 of the 208 economies the World Bank publishes would pay less than
 * an Indian family does for that same teacher. The floor is what makes this a
 * ladder from the India price up to the US list — roughly 55% wide — instead
 * of a 90% giveaway.
 *
 * Data: World Bank indicator PA.NUS.PRVT.PLI (price level index, household
 * final consumption, US = 100). CC BY 4.0.
 */

'use strict';

const cfgLib = require('./config');

/**
 * Net rupees kept from an Indian enrolment, after the domestic gateway fee,
 * GST on that fee, and (if applicable) GST on the service itself.
 */
function indiaNetInr(indiaGross, config) {
    const c = config.worldwide.costs;
    const feeRate = (c.domesticGatewayPercent * (1 + c.gstOnGatewayFeePercent / 100)) / 100;
    return (indiaGross * (1 - feeRate)) / (1 + c.gstOnServicePercent / 100);
}

/**
 * Fraction of a US dollar charged internationally that survives to the bank:
 * gateway fee + GST on it, the FX spread buffer, and service GST.
 *
 * The FX spread is a buffer, not a measurement — Razorpay does not publish its
 * card conversion spread anywhere. It is a config dial for exactly that reason.
 */
function internationalNetKeep(config) {
    const c = config.worldwide.costs;
    const feeRate = (c.internationalGatewayPercent * (1 + c.gstOnGatewayFeePercent / 100)) / 100;
    return ((1 - feeRate) * (1 - c.fxSpreadBufferPercent / 100)) / (1 + c.gstOnServicePercent / 100);
}

/** Price ending in .99, the way the rest of the web prices things. */
function charmRound(usd) {
    return Math.ceil(usd) - 0.01;
}

/** The USD price needed to bank a given number of rupees after all costs. */
function usdToNetInr(targetInr, usdInrRate, config) {
    const margin = 1 + (config.worldwide.floor.safetyMarginPercent || 0) / 100;
    return ((targetInr / usdInrRate) / internationalNetKeep(config)) * margin;
}

/**
 * The hard minimum in rupees for a tier, from worldwide.floor.minNetInr.
 *
 * A tier with no explicit figure is scaled from the group figure by its
 * list-price ratio, so a 1-on-1 plan listed at 2.5x the group price inherits
 * 2.5x the group minimum rather than silently getting none.
 */
function minNetInrFor(tier, config, intlTable) {
    const min = (config.worldwide.floor && config.worldwide.floor.minNetInr) || {};
    if (min[tier] !== null && min[tier] !== undefined) return min[tier];
    if (min.group === null || min.group === undefined) return null;
    if (!intlTable || !intlTable.group || !intlTable[tier]) return null;
    return min.group * (intlTable[tier] / intlTable.group);
}

/**
 * The lowest USD price allowed for a tier: the greater of the owner's hard
 * rupee minimum and the matching India plan's net.
 */
function floorUsd(indiaGross, usdInrRate, config, tier, intlTable) {
    const margin = 1 + (config.worldwide.floor.safetyMarginPercent || 0) / 100;

    let floor = 0;
    if (indiaGross !== null && indiaGross !== undefined) {
        floor = ((indiaNetInr(indiaGross, config) / usdInrRate) / internationalNetKeep(config)) * margin;
    }

    const hardMin = minNetInrFor(tier, config, intlTable);
    if (hardMin !== null && hardMin !== undefined) {
        floor = Math.max(floor, usdToNetInr(hardMin, usdInrRate, config));
    }
    return floor;
}

/**
 * Price one country, one tier.
 *
 * @param {object} args
 *   listUsd      international list price for this tier
 *   indiaGross   the Indian price this tier must not undercut (null = no floor)
 *   pli          World Bank price level index for the country (US = 100)
 *   usdInrRate   current USD -> INR rate
 * @returns {object} { usd, floorBound, multiplier, discountPercent }
 */
function priceForCountry(args, config) {
    const cfg = config || cfgLib.load();
    const w = cfg.worldwide;

    // Worldwide pricing switched off entirely: behave exactly as the site did
    // before this existed, list price for everyone, no floor logic at all.
    if (!w.enabled) {
        return { usd: args.listUsd, floorBound: false, multiplier: 1, discountPercent: 0, reason: 'list' };
    }

    // No usable price level for this country (missing, or older than
    // maxDataAgeYears). Such a country charges list price rather than being
    // priced off a stale index — but it still has to clear the floor. Returning
    // early here was a real bug: American Samoa has no recent figure, took the
    // early return, and was charged $40, netting Rs3,584 against a Rs9,500
    // minimum.
    const hasPli = args.pli !== null && args.pli !== undefined;

    const multiplier = hasPli
        ? Math.min(
            Math.max(Math.pow(args.pli / 100, w.dampingExponent), 1 - w.maxDiscountPercent / 100),
            w.maxPremiumPercent / 100)
        : 1;

    let usd = args.listUsd * multiplier;
    const atList = usd >= args.listUsd;
    let floorBound = false;

    // The floor is applied AFTER the list cap, and deliberately overrides it.
    // Once a hard rupee minimum is set it can sit above the list price, and in
    // that case the minimum is the real price — clamping back down to list
    // would silently break the guarantee the owner asked for.
    const floor = floorUsd(args.indiaGross, args.usdInrRate, cfg, args.tier, args.intlTable);
    if (usd < floor) { usd = floor; floorBound = true; }

    if (floorBound || !atList) {
        usd = (w.rounding === 'charm') ? charmRound(usd) : Math.round(usd);
    } else {
        // At or above list with no floor in play, charge list exactly.
        // Charm-rounding here would quietly move $40 to $39.99 for American
        // visitors, which is a price change nobody asked for.
        usd = args.listUsd;
    }

    return {
        usd: Number(usd.toFixed(2)),
        floorBound: floorBound,
        multiplier: Number(multiplier.toFixed(4)),
        discountPercent: Number((100 - (usd / args.listUsd) * 100).toFixed(1)),
        reason: floorBound ? 'floor' : (usd >= args.listUsd ? 'list' : 'ppp')
    };
}

/**
 * Build the complete country -> tier -> price table that ships to the browser.
 * Countries whose World Bank figure is older than maxDataAgeYears are charged
 * list price rather than being priced off a stale index — Venezuela's latest
 * value is from 2011.
 */
function buildTable(subject, config, pppData, fxData) {
    const cfg = config || cfgLib.load();
    const intl = cfg.plans[subject].international;
    const india = cfg.plans[subject].india;
    const usdInr = fxData.rates.INR;
    const thisYear = new Date(fxData.fetchedAt).getUTCFullYear();

    const floorMap = cfg.worldwide.floor.matchIndiaTier;
    const table = {};
    let stale = 0;

    Object.keys(pppData.countries).forEach(function (iso2) {
        const entry = pppData.countries[iso2];
        const tooOld = (thisYear - entry.year) > cfg.worldwide.maxDataAgeYears;
        if (tooOld) stale++;

        const tiers = {};
        Object.keys(intl).forEach(function (tier) {
            if (intl[tier] === null || intl[tier] === undefined) return;   // not sold
            const indiaTier = floorMap[tier];
            const result = priceForCountry({
                listUsd: intl[tier],
                indiaGross: indiaTier ? india[indiaTier] : null,
                pli: tooOld ? null : entry.pli,
                usdInrRate: usdInr,
                // Both are required for the hard rupee minimum to apply. Omit
                // them and every price silently falls back to the India-only
                // floor, which is far lower.
                tier: tier,
                intlTable: intl
            }, cfg);
            tiers[tier] = result.usd;
        });

        table[iso2] = { tiers: tiers, currency: entry.currency || null };
    });

    return { table: table, staleCount: stale };
}

module.exports = {
    indiaNetInr: indiaNetInr,
    minNetInrFor: minNetInrFor,
    internationalNetKeep: internationalNetKeep,
    floorUsd: floorUsd,
    charmRound: charmRound,
    priceForCountry: priceForCountry,
    buildTable: buildTable
};
