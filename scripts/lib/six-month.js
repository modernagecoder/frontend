/**
 * "Pay for 6 months at once" (owner 2026-10-21): ONE place that decides which
 * courses get the offer and renders its cards, for the course pages
 * (generate-courses.js) and the /pricing page (pricing:apply syncs the block
 * between <!-- BEGIN_SIXMONTH --> and <!-- END_SIXMONTH -->).
 *
 * Every figure comes from PRICING.sixMonthOffer, so the cards, pricing:verify
 * and the payment popup all do the same sums. Both regions are rendered: the
 * India grid ships visible (crawler and no-JS view), the international grid
 * ships hidden and international-pricing.js swaps the two by visitor. The
 * cards deliberately avoid the .enrollment-option/.price classes, which that
 * script re-prices to the MONTHLY figure abroad. Styles: src/css/six-month.css
 */

'use strict';

const PRICING = require('../pricing/lib/config.js');

/**
 * A course's length in months, read from meta.duration ("10-12 months (40-48
 * weeks)", "24 classes (12 weeks · 2 classes/week)", "1 year"). A range
 * counts at its upper end. null when the text carries no usable figure.
 */
function courseMonths(duration) {
    const t = String(duration || '').replace(/[–—]/g, '-');
    const pick = (rx) => { const m = t.match(rx); return m ? Number(m[2] || m[1]) : null; };
    const months = pick(/(\d+(?:\.\d+)?)\s*(?:-|to)?\s*(\d+(?:\.\d+)?)?\s*months?\b/i);
    if (months !== null) return months;
    const years = pick(/(\d+(?:\.\d+)?)\s*(?:-|to)?\s*(\d+(?:\.\d+)?)?\s*years?\b/i);
    if (years !== null) return years * 12;
    const weeks = pick(/(\d+(?:\.\d+)?)\s*(?:-|to)?\s*(\d+(?:\.\d+)?)?\s*weeks?\b/i);
    if (weeks !== null) return weeks / 4.345;
    return null;
}

/**
 * The 6-month offer for one course, or null. Owner 2026-10-22: courses that
 * run under 6 months do not get it (a 6-month prepay would outlast the
 * course). A course with no readable duration keeps it.
 */
function offerForCourse(courseData, config) {
    const meta = (courseData && courseData.meta) || {};
    const months = courseMonths(meta.duration);
    if (months !== null && months < 6) return null;
    return PRICING.sixMonthOffer(PRICING.courseSubject(meta.slug || '', config), config);
}

const NAMES = { group: 'Group Classes', miniBatch: 'Mini Batch', personal: 'Personalized 1-on-1' };
const BATCH = { group: '15 to 20 students', miniBatch: 'Up to 6 students' };

/**
 * One region's grid. mode 'course' gives working Enrol buttons (bound by
 * enrollment-modal.js through .enroll-btn + data-billing); mode 'pricing'
 * sends the visitor to pick a course, because payment needs one.
 */
function renderRegion(offer, region, opts) {
    const tiers = opts.oneOnOneOnly ? ['personal'] : ['group', 'miniBatch', 'personal'];
    const cur = region === 'india' ? 'INR' : 'USD';
    const f = (n) => PRICING.format(n, cur, { style: 'display' });
    const sold = tiers.filter((t) => offer[region][t]);
    if (!sold.length) return null;
    const pct = Math.max.apply(null, sold.map((t) => offer[region][t].pct));
    const cta = (tier) => opts.mode === 'pricing'
        ? `<a href="/courses" class="six-cta" data-plan-type="${tier}" data-billing="sixMonth">Choose a course</a>`
        : `<a href="#" class="enroll-btn primary" data-plan-type="${tier}" data-billing="sixMonth">Enrol for 6 months</a>`;
    const refund = (o) => `<p class="six-refund">Stop early? Every session you have not taken is refunded at ${f(o.perSession)}. <a href="/refund#six-month">Refund policy</a></p>`;

    const cards = sold.map((tier) => {
        const o = offer[region][tier];
        const exact = Math.round(o.perSession * o.sessions * 100) === Math.round(o.total * 100);
        if (tier !== 'personal') {
            return `
                        <div class="six-card">
                            <span class="six-badge">Save ${o.pct}%</span>
                            <h4 class="six-name">${NAMES[tier]}</h4>
                            <p class="six-term">6 months &middot; ${o.sessions} sessions</p>
                            <div class="six-total">${f(o.total)}</div>
                            <p class="six-total-note">One payment for all 6 months</p>
                            <dl class="six-math">
                                <div><dt>Paying monthly</dt><dd><s>${f(o.monthly)} &times; 6 months = ${f(o.monthlyTotal)}</s></dd></div>
                                <div class="six-math-save"><dt>You save</dt><dd>${f(o.save)} (${o.pct}%)</dd></div>
                                <div><dt>Per session</dt><dd>${f(o.perSession)} <s>${f(o.monthlyPerSession)}</s></dd></div>
                            </dl>
                            <p class="six-info">${o.sessionsPerMonth / 4} sessions a week &middot; ${BATCH[tier]}</p>
                            ${refund(o)}
                            ${cta(tier)}
                        </div>`;
        }
        const timing = region === 'india' && o.sessionsPerMonth === 4
            ? 'fully flexible timing' : `${o.sessionsPerMonth / 4} sessions a week`;
        return `
                        <div class="six-card six-oneone">
                            <span class="six-badge">Save ${o.pct}%</span>
                            <div class="six-oneone-main">
                                <h4 class="six-name">${NAMES[tier]}</h4>
                                <p class="six-term">6 months &middot; ${o.sessions} sessions</p>
                                <div class="six-total">${f(o.total)}</div>
                                <p class="six-total-note">One payment for all 6 months</p>
                                ${cta('personal')}
                            </div>
                            <div class="six-oneone-side">
                                <p class="six-eyebrow">How your 6-month price works</p>
                                <dl class="six-math">
                                    <div><dt>Sessions</dt><dd>${o.sessions} one-to-one sessions over 6 months, ${timing}</dd></div>
                                    <div><dt>Price per session</dt><dd><b>${f(o.perSession)}</b> instead of <s>${f(o.monthlyPerSession)}</s></dd></div>
                                    ${exact ? `<div><dt>Your 6-month fee</dt><dd>${f(o.perSession)} &times; ${o.sessions} sessions = <b>${f(o.total)}</b></dd></div>` : `<div><dt>Your 6-month fee</dt><dd><b>${f(o.total)}</b></dd></div>`}
                                    <div><dt>Paying monthly instead</dt><dd><s>${f(o.monthly)} &times; 6 months = ${f(o.monthlyTotal)}</s></dd></div>
                                    <div class="six-math-save"><dt>You save</dt><dd>${f(o.save)} (${o.pct}%)</dd></div>
                                </dl>
                                <p class="six-incl">Everything in the monthly 1-on-1 plan is included: your own mentor, flexible timing, personal dashboard, class recordings, progress reports and parent-teacher meetings.</p>
                                ${refund(o)}
                            </div>
                        </div>`;
    }).join('');
    const p = offer[region].personal;
    const lede = opts.mode === 'pricing'
        ? `Pay once for 6 months and save <b>${pct}%</b> on any coding, maths or AI course that runs 6 months or longer. Same live classes, same mentor, a lower price for every session. Pick a course, then choose <b>Pay 6 months at once</b> on its page.`
        : `Pay once for 6 months and save <b>${pct}%</b>. Same live classes, same mentor, a lower price for every session.`;
    return {
        pct: pct,
        sub: p ? `${f(p.perSession)} a session instead of ${f(p.monthlyPerSession)}` : `Save ${pct}% on every plan`,
        grid: `
                    <div class="six-grid${opts.oneOnOneOnly ? ' solo' : ''}" ${region === 'india' ? 'data-india-only="true"' : 'data-intl-only="true" hidden'}>
                        <p class="six-lede">${lede}</p>${cards}
                    </div>`
    };
}

/** Course page: the "Pay monthly / Pay 6 months at once" switch + 6-month panel. */
function renderCourse(courseData, config) {
    const empty = { switchHtml: '', panelHtml: '' };
    const offer = offerForCourse(courseData, config);
    if (!offer) return empty;
    const opts = { mode: 'course', oneOnOneOnly: !!(courseData.meta && courseData.meta.one_on_one_only === true) };
    const india = renderRegion(offer, 'india', opts);
    const intl = renderRegion(offer, 'international', opts);
    if (!india) return empty;
    const gate = (field) => intl
        ? `<span data-india-only="true">${india[field]}</span><span data-intl-only="true" hidden>${intl[field]}</span>`
        : india[field];

    const switchHtml = `
                <input type="radio" name="cd-billing" id="bill-monthly" class="bill-radio" checked>
                <input type="radio" name="cd-billing" id="bill-six" class="bill-radio">
                <div class="bill-switch">
                    <p class="bill-q" id="bill-q">How would you like to pay?</p>
                    <div class="bill-tabs" aria-labelledby="bill-q">
                        <label for="bill-monthly" class="bill-tab bill-tab-monthly">
                            <span class="bill-tab-name">Pay monthly</span>
                            <span class="bill-tab-sub">One month at a time, cancel any time</span>
                        </label>
                        <label for="bill-six" class="bill-tab bill-tab-six">
                            <span class="bill-save">Save ${intl ? `<span data-india-only="true">${india.pct}%</span><span data-intl-only="true" hidden>${intl.pct}%</span>` : india.pct + '%'}</span>
                            <span class="bill-tab-name">Pay 6 months at once</span>
                            <span class="bill-tab-sub">${gate('sub')}</span>
                        </label>
                    </div>
                </div>`;
    const panelHtml = `
                <div class="bill-panel bill-panel-six">${india.grid}${intl ? intl.grid : ''}
                </div>`;
    return { switchHtml, panelHtml };
}

/** /pricing: the inner HTML of the BEGIN_SIXMONTH block (standard price set). */
function renderPricingSection(config) {
    const cfg = config || PRICING.load();
    const subject = (cfg.sixMonth && cfg.sixMonth.appliesTo && cfg.sixMonth.appliesTo[0]) || 'coding';
    const offer = PRICING.sixMonthOffer(subject, cfg);
    if (!offer) return '';
    const india = renderRegion(offer, 'india', { mode: 'pricing' });
    const intl = renderRegion(offer, 'international', { mode: 'pricing' });
    if (!india) return '';
    return `
        <section class="six-section" id="six-months" aria-labelledby="six-section-title">
            <div class="six-section-inner">
                <p class="six-section-eyebrow">Pay for 6 months at once</p>
                <h2 id="six-section-title" class="six-section-title">Save ${intl && intl.pct !== india.pct ? `<span data-india-only="true">${india.pct}%</span><span data-intl-only="true" hidden>${intl.pct}%</span>` : india.pct + '%'} when you pay for 6 months together</h2>${india.grid}${intl ? intl.grid : ''}
            </div>
        </section>
`;
}

module.exports = { courseMonths, offerForCourse, renderCourse, renderPricingSection };
