/**
 * International Pricing System
 * Modern Age Coders - Auto-detect India vs International
 * 
 * Uses browser locale + timezone to detect India (zero network calls, privacy-safe).
 * If India → show existing ₹ prices. If not → show flat USD prices.
 * Runs synchronously on DOMContentLoaded, no flicker.
 */

const InternationalPricing = {

  // ─── Price Maps ───
  //
  // NO PRICES ARE WRITTEN HERE ANY MORE.
  //
  // Every figure comes from window.MAC_PRICING, generated from
  // pricing/pricing.config.jsonc by `npm run pricing:apply`. That is what keeps
  // the price shown on a page, the price Google is told, and the amount
  // Razorpay charges from ever drifting apart.
  //
  // This table used to be hardcoded, and the price values doubled as the regex
  // keys that genericPriceSwap() matched on. Changing a price therefore
  // silently disabled the international swap on 325 pages. Both problems are
  // fixed by deriving everything below from the config at runtime.
  //
  // For Indian visitors the site shows 3 tiers. Outside India the Mini Batch
  // tier is hidden via [data-india-only="true"] rather than re-priced, because
  // it is set to null in the config: it has never been sold in USD.
  PRICES: null,

  /**
   * Build the price tables from the generated config data.
   * Returns false if the data is missing, in which case this whole module
   * stands down and the page keeps the rupee prices already in its markup, * the safe failure, and what already happens on pages that never loaded
   * this script.
   */
  loadTables: function () {
    var data = window.MAC_PRICING;
    if (!data || !data.plans) {
      console.error('[International Pricing] window.MAC_PRICING is missing. ' +
        'Add <script src="/js/pricing-data.generated.js"></script> before this file. ' +
        'Leaving the page\'s existing prices untouched.');
      return false;
    }

    // Outside India the visitor is on the flat USD list, or, in a Canadian
    // time zone once Canada is live, on the CAD list. Every "international"
    // table below is built from that region, so the swaps, course cards and
    // checkout that read PRICES.international need no Canada branch of their
    // own: for a Canadian visitor the international table IS the CAD one.
    var abroad = this.abroadRegion();

    function money(amount, currency) {
      if (amount === null || amount === undefined) return null;
      var symbol = currency === 'INR' ? '₹' : '$';
      var grouped = new Intl.NumberFormat(currency === 'INR' ? 'en-IN' : 'en-US', {
        minimumFractionDigits: Number.isInteger(amount) ? 0 : 2,
        maximumFractionDigits: Number.isInteger(amount) ? 0 : 2
      }).format(amount);
      return { amount: amount, display: symbol + grouped, symbol: symbol, currency: currency };
    }

    function tierSet(subject, region) {
      var src = (data.plans[subject] && data.plans[subject][region]) || {};
      var currency = data.display.chargeCurrencies[region];
      var out = {};
      Object.keys(src).forEach(function (tier) {
        var m = money(src[tier], currency);
        if (!m) return;                       // null = not sold, so no entry at all
        m.period = (tier === 'oneTime') ? data.display.periodLabels.oneTime
                                        : data.display.periodLabels.monthly;
        out[tier] = m;
      });
      // The camps one-time fee is referred to as "summer" throughout this file.
      var camp = data.plans.camps && data.plans.camps[region];
      if (camp && camp.oneTime !== null && camp.oneTime !== undefined) {
        out.summer = money(camp.oneTime, currency);
        out.summer.period = '';
      }
      return out;
    }

    this.PRICES = {
      india:                 tierSet('coding', 'india'),
      international:         tierSet('coding', abroad),
      internationalMaths:    tierSet('maths', abroad),
      internationalAgents:   tierSet('agents', abroad),
      indiaMaths:            tierSet('maths', 'india'),
      indiaAgents:           tierSet('agents', 'india')
    };
    return true;
  },

  isIndian: true, // default to India
  region: 'india', // 'india' | 'international' | 'canada'

  // The price list a visitor outside India is on: 'canada' or 'international'.
  abroadRegion() {
    return this.region === 'canada' ? 'canada' : 'international';
  },

  // The currency each region is shown and charged in (INR / USD / CAD).
  regionCurrency(region) {
    var data = window.MAC_PRICING;
    var cc = data && data.display && data.display.chargeCurrencies;
    return (cc && cc[region]) || (region === 'india' ? 'INR' : region === 'canada' ? 'CAD' : 'USD');
  },

  // ─── Synchronous Detection (runs on script parse, before DOMContentLoaded) ───
  // Sets window.__MAC_IS_INDIAN immediately so consumers like course.html's
  // generateCourseCard() see the correct region flag when they build cards
  // inside their own DOMContentLoaded listeners.
  detectRegion() {
    // FLAT MODEL (owner, 2026-08-01): India, or one USD list for the rest of
    // the world. Canada (owner 2026-10-22/23) is the one exception: a
    // Canadian time zone gets the CAD list once MAC_PRICING.canada.live is
    // true. ?test=canada shows it before then, and stays on for the browser
    // tab so a preview can be followed from page to checkout.
    var testMode = new URLSearchParams(window.location.search).get('test');
    try {
      if (testMode === 'canada') sessionStorage.setItem('mac_test_region', 'canada');
      else if (testMode) sessionStorage.removeItem('mac_test_region');
      else if (sessionStorage.getItem('mac_test_region') === 'canada') testMode = 'canada';
    } catch (e) { /* storage blocked: the query string alone still works */ }
    if (testMode === 'intl' || testMode === 'international') {
      this.region = 'international';
    } else if (testMode === 'india') {
      this.region = 'india';
    } else if (testMode === 'canada') {
      this.region = 'canada';
    } else {
      this.region = this.detectVisitorRegion();
    }
    this.isIndian = this.region === 'india';

    // Store globals for payment JS files and inline scripts to read.
    // __MAC_IS_INDIAN stays false for Canada, so every India-only rule
    // (Mini Batch, India-only cards) applies to Canadians as to the world.
    window.__MAC_IS_INDIAN = this.isIndian;
    window.__MAC_REGION = this.region;
    window.__MAC_CURRENCY = this.regionCurrency(this.region);
  },

  // Indian time zone: India. Canadian time zone (Canada live): Canada, even
  // with an Indian browser language (owner 2026-10-23). Otherwise an Indian
  // language means India, and everyone else is international.
  detectVisitorRegion() {
    var tz = '';
    try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch (e) {}
    if (tz === 'Asia/Kolkata' || tz === 'Asia/Calcutta') return 'india';
    var ca = window.MAC_PRICING && window.MAC_PRICING.canada;
    if (ca && ca.live && Array.isArray(ca.timeZones) && ca.timeZones.indexOf(tz) !== -1) return 'canada';
    return this.detectIndia() ? 'india' : 'international';
  },

  // ─── Initialize (DOM-dependent: runs on DOMContentLoaded) ───
  init() {
    // Run once, whatever fires it. A second DOMContentLoaded (or a duplicate
    // script include) used to re-run updatePriceAnchors over prices that
    // local-currency had already converted, rewriting "OMR 38" back to
    // "$97.99" while local-currency's own guard stopped it re-annotating.
    if (window.__MAC_PRICING_INIT_DONE) return;
    window.__MAC_PRICING_INIT_DONE = true;

    // Detection may have already run via detectRegion(); redo it if not.
    if (typeof window.__MAC_IS_INDIAN === 'undefined') {
      this.detectRegion();
    }

    // Every price this module writes comes from the config. Without it, stand
    // down and leave the page exactly as the server sent it.
    if (!this.loadTables()) return;

    console.log('[International Pricing] Detected:', this.region.toUpperCase() + ' (' + this.regionCurrency(this.region) + ')');

    // Anchors first, and for every visitor: they are the precise mechanism,
    // and the text-scanning fallbacks below must not run over a value they
    // have already set correctly.
    this.updatePriceAnchors();
    this.updateCurrencyLabels();

    // Toggle catalog price chips (course.html) regardless of region
    this.updateCatalogPriceChips();

    // Inverse region pair for pages WRITTEN for international audiences.
    // Most of the site ships the India view as its static markup and uses
    // [data-india-only]/[data-intl-only] to adapt it abroad. Pages whose
    // static copy is USD-coherent (the US/grade tutoring cluster) do the
    // opposite: [data-intl-default] is visible for crawlers and international
    // visitors, and an Indian visitor, whose prices the anchors above have
    // just rewritten to rupees, gets it swapped for [data-india-reveal].
    if (this.isIndian) this.applyIndiaOverlays();

    // Pages that ship their own India/International toggle panels (the maths hub
    // pages) keep both currencies in static markup. Just activate the panel that
    // matches the visitor; skip DOM price-swapping so the static prices stand.
    var hasManualPanels = this.applyRegionPanels();

    if (!this.isIndian && !hasManualPanels) {
      this.updateAllPages();
    } else if (this.region === 'canada') {
      // A page with its own India / International tabs keeps its static
      // prices, so its typed USD fees still need the CAD rewrite.
      this.applyCanadaOverlays();
      this.usdProseToCad();
    }
  },

  // ─── Region toggle panels (pages with their own India/International tabs) ───
  // Returns true if this page has such panels (so the caller skips swapping).
  applyRegionPanels() {
    var intlPanel = document.getElementById('panel-international');
    var indiaPanel = document.getElementById('panel-indian');
    if (!intlPanel || !indiaPanel) return false;

    var wantIntl = !this.isIndian;
    indiaPanel.classList.toggle('active', !wantIntl);
    intlPanel.classList.toggle('active', wantIntl);
    document.querySelectorAll('.price-tab').forEach(function(btn) {
      var isIntlBtn = btn.getAttribute('data-panel') === 'international';
      btn.classList.toggle('active', isIntlBtn === wantIntl);
    });
    return true;
  },

  // ─── Maths context ───
  // True on dedicated maths pages, which tag <body>/<html> data-subject="maths".
  // Used to pick maths USD prices (group $100, 1-on-1 $150) over the flat coding
  // prices when swapping ₹ markup or course cards.
  isMathsContext() {
    var el = document.documentElement;
    var b = document.body;
    return (!!el && el.getAttribute('data-subject') === 'maths') ||
           (!!b && b.getAttribute('data-subject') === 'maths');
  },

  // ─── Premium agents context ───
  // True on the premium agents course pages (Codex + Claude Code, and the
  // 1-on-1-only AI Agents with Copilot Studio trio), which the generator tags
  // <body data-price-tier="agents">. Picks the agents USD prices (group $100,
  // 1-on-1 $150) when swapping ₹ markup and when charging card payments.
  isAgentsContext() {
    var el = document.documentElement;
    var b = document.body;
    return (!!el && el.getAttribute('data-price-tier') === 'agents') ||
           (!!b && b.getAttribute('data-price-tier') === 'agents');
  },

  // ─── Page price subject (generic) ───
  // The name of the price set this page sells from, as a key of
  // window.MAC_PRICING.plans: the generator tags <body data-price-tier="X">
  // for any row other than coding (agents, gemini, ...), and maths pages carry
  // data-subject="maths". Every ₹ -> $ decision below goes through this, so a
  // new premium row in the config needs no change in this file.
  pageSubject() {
    var data = window.MAC_PRICING;
    var el = document.documentElement;
    var b = document.body;
    var tier = (b && b.getAttribute('data-price-tier')) ||
               (el && el.getAttribute('data-price-tier')) || '';
    if (tier && data && data.plans && data.plans[tier]) return tier;
    if (this.isAgentsContext()) return 'agents';
    if (this.isMathsContext()) return 'maths';
    return 'coding';
  },

  // The international price table for this page's subject, in the same shape
  // as PRICES.international (built by loadTables). Falls back to the coding
  // table when the subject sells nothing abroad.
  pageIntlTable() {
    var data = window.MAC_PRICING;
    var subject = this.pageSubject();
    if (subject === 'coding' || !data || !this.PRICES) return this.PRICES ? this.PRICES.international : null;
    var cache = this._intlTables || (this._intlTables = {});
    var abroad = this.abroadRegion();
    var currency = this.regionCurrency(abroad);
    if (!cache[subject]) {
      var src = (data.plans[subject] && data.plans[subject][abroad]) || {};
      var out = {};
      Object.keys(src).forEach(function (tier) {
        var amount = src[tier];
        if (amount === null || amount === undefined) return;
        var grouped = new Intl.NumberFormat('en-US', {
          minimumFractionDigits: Number.isInteger(amount) ? 0 : 2,
          maximumFractionDigits: Number.isInteger(amount) ? 0 : 2
        }).format(amount);
        out[tier] = { amount: amount, display: '$' + grouped, symbol: '$', currency: currency,
                      period: (tier === 'oneTime') ? data.display.periodLabels.oneTime : data.display.periodLabels.monthly };
      });
      if (this.PRICES.international && this.PRICES.international.summer) out.summer = this.PRICES.international.summer;
      cache[subject] = out;
    }
    return cache[subject];
  },

  // ─── Detection ───
  detectIndia() {
    // Signal 1: Browser locale contains India country code or Indian language
    const languages = navigator.languages || [navigator.language || ''];
    const hasIndianLocale = languages.some(function(lang) {
      var u = lang.toUpperCase();
      return u.includes('-IN') || u.startsWith('HI') || u.startsWith('BN') ||
             u.startsWith('TA') || u.startsWith('TE') || u.startsWith('MR') ||
             u.startsWith('GU') || u.startsWith('KN') || u.startsWith('ML') ||
             u.startsWith('PA') || u.startsWith('OR') || u.startsWith('AS');
    });

    // Signal 2: Timezone is Indian
    var tz = '';
    try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch (e) {}
    var hasIndianTimezone = (tz === 'Asia/Kolkata' || tz === 'Asia/Calcutta');

    // EITHER signal = India. NEITHER = International.
    return hasIndianLocale || hasIndianTimezone;
  },

  /**
   * Re-price every [data-price] anchor for the visitor in front of us.
   *
   * The region baked into an anchor decides only what is in the HTML for
   * crawlers and for anyone without JavaScript. It must NOT decide what a
   * visitor sees: a maths page anchored to maths.international.group would
   * otherwise show the US list price to an Indian family and to Nigeria alike.
   *
   * So the anchor names the plan, and the region follows the visitor:
   *   Indian visitor        -> subject.india.tier
   *   International visitor -> that country's price for subject.tier
   *
   * Runs for everyone, including India, because a page may be anchored to the
   * international side and still need rupees.
   */
  // A [data-price-currency] element names the currency the visitor's prices
  // are shown and charged in (the ISO code), so a bare "$" is never ambiguous:
  // pages written for countries with their own dollar use it beside the fee.
  updateCurrencyLabels: function () {
    var code = this.regionCurrency(this.region);
    document.querySelectorAll('[data-price-currency]').forEach(function (el) {
      el.textContent = code;
    });
  },

  updatePriceAnchors: function () {
    var data = window.MAC_PRICING;
    if (!data) return;
    var self = this;

    document.querySelectorAll('[data-price]').forEach(function (el) {
      var parts = (el.getAttribute('data-price') || '').split('.');
      if (parts.length !== 3) return;
      var subject = parts[0], tier = parts[2];

      // The anchor names the PLAN; the region follows the visitor. A maths
      // page anchored to maths.international.personal must still show rupees
      // to an Indian family.
      var region = self.isIndian ? 'india' : self.abroadRegion();
      var table = (data.plans[subject] && data.plans[subject][region]) || {};
      var amount = table[tier];
      var currency = self.regionCurrency(region);

      // Not sold in this region. Leave the markup untouched and let the
      // India-only hiding rules deal with the card.
      if (amount === null || amount === undefined) return;

      var derive = el.getAttribute('data-price-derive');
      if (derive) {
        // A plan can run on its own timetable: the India 1-on-1 plan is 1
        // class a week (4 a month), while everything else runs 8 a month.
        // The overrides map is keyed by the resolved subject.region.tier, // resolved, because an Indian visitor on an internationally-anchored
        // element must get the Indian schedule along with the rupee price.
        var overrides = (data.display && data.display.classesPerMonthOverrides) || {};
        var perMonth = overrides[subject + '.' + region + '.' + tier] ||
          (data.display && data.display.classesPerMonth) || 8;
        var hours = (data.display && data.display.hoursPerClass) || 1;
        if (derive === 'perClass') amount = amount / perMonth;
        else if (derive === 'perHour') amount = amount / (perMonth * hours);
        amount = currency === 'INR' ? Math.round(amount) : Math.round(amount * 100) / 100;
      }

      var symbol = currency === 'INR' ? '₹' : '$';
      var text = symbol + new Intl.NumberFormat(currency === 'INR' ? 'en-IN' : 'en-US', {
        minimumFractionDigits: Number.isInteger(amount) ? 0 : 2,
        maximumFractionDigits: Number.isInteger(amount) ? 0 : 2
      }).format(amount);

      var cur = el.querySelector('.price-currency');
      if (cur) {
        cur.textContent = symbol;
        var rest = '';
        el.childNodes.forEach(function (n) { if (n !== cur) rest += n.textContent; });
        if (rest.trim() !== String(amount)) {
          while (el.lastChild && el.lastChild !== cur) el.removeChild(el.lastChild);
          el.appendChild(document.createTextNode(String(amount)));
        }
      } else {
        el.textContent = text;
      }
    });
  },

  // ─── Update ALL pages ───
  updateAllPages() {
    this.showIntlOnlySections();
    if (this.region === 'canada') this.applyCanadaOverlays();
    this.hideIndiaOnlyCards();
    this.updatePricingPage();
    this.updateHomePage();
    this.updateCoursePages();
    this.updateSummerCampPages();
    this.hideInternationalSections();
    // Generic fallback for pages with custom pricing markup (SEO clusters,
    // city/state/school/complex pages). Must run LAST: the specific handlers
    // above rewrite their own markup first, so any ₹ still in the DOM at this
    // point belongs to markup they don't know about.
    this.hideGenericMiniBatchCards();
    this.genericPriceSwap();
    if (this.region === 'canada') this.usdProseToCad();
  },

  // Canada: blocks rendered three ways (India / rest of world / Canada, e.g.
  // the 6-month cards) carry data-not-ca on the USD copy and data-ca-only on
  // the CAD copy, which ships hidden.
  applyCanadaOverlays() {
    document.querySelectorAll('[data-not-ca="true"]').forEach(function (el) {
      el.hidden = true;
      el.style.display = 'none';
    });
    document.querySelectorAll('[data-ca-only="true"]').forEach(function (el) {
      el.hidden = false;
      el.style.removeProperty('display');
    });
  },

  /**
   * Canada: pages written for other countries quote our fees as typed prose.
   * For a visitor on the CAD list each such figure becomes the CAD price of
   * the same plan, so the page never shows two currencies:
   *   "USD 100 a month"            -> "CAD 140 a month"
   *   "$100 per month", "$150/mo"  -> "$140 per month", "$210/mo"
   *   "$100 to $150 a month"       -> "$140 to $210 a month"
   *   "billed in US dollars"       -> "billed in Canadian dollars"
   * Only amounts that are our own USD prices on exactly one plan are
   * touched, a bare "$N" only when a monthly fee follows it ("a month", "per
   * month", "/month", "/mo", "monthly"), and never inside
   * [data-no-price-swap] (sections quoting other providers). Other bare
   * dollar figures (salaries, funding, other providers) are left alone.
   */
  usdProseToCad() {
    var data = window.MAC_PRICING;
    if (!data || !data.plans) return;
    var map = {}, clash = {};
    function pair(usd, cad) {
      if (usd === null || usd === undefined || cad === null || cad === undefined) return;
      if (map[usd] !== undefined && map[usd] !== cad) clash[usd] = true;
      map[usd] = cad;
    }
    Object.keys(data.plans).forEach(function (subject) {
      var u = data.plans[subject].international || {}, c = data.plans[subject].canada || {};
      Object.keys(u).forEach(function (tier) { pair(u[tier], c[tier]); });
    });
    var su = (data.sixMonth && data.sixMonth.international) || {}, sc = (data.sixMonth && data.sixMonth.canada) || {};
    Object.keys(su).forEach(function (tier) { pair(su[tier], sc[tier]); });
    // 10 is also the priority demo (CAD 14), and a bare "USD 10" is too
    // common a figure to claim; leave it.
    delete map[10];
    Object.keys(clash).forEach(function (k) { delete map[k]; });
    var keys = Object.keys(map).sort(function (a, b) { return b - a; });
    if (!keys.length) return;
    map[0] = 0;                       // "USD 0" (the free first class)
    var cadVals = keys.map(function (k) { return map[k]; });
    // Spaces in the source may be line breaks or no-break spaces.
    var S = '[\\s\\u00a0]*', S1 = '[\\s\\u00a0]+';
    // Not "1,000" or "100.50", but "USD 100, billed monthly" is ours.
    var end = '(?!\\d|[,.]\\d)';
    var n = '(' + keys.join('|') + ')' + end;
    // What may follow a bare "$N" for it to be our monthly fee: a month, the
    // per-class sum worked from it ("$150 ÷ 8"), "for 8 classes", or a
    // "USD" label ("$150 USD per month").
    var monthText = S + '(?:a' + S1 + 'month|per' + S1 + 'month|/' + S + '(?:month|mo|Monat)\\b|monthly|per 8-class month|' +
      'for 8 (?:live |taught |structured |private )?(?:classes|lessons|sessions|hours)|÷' + S + '8|USD\\b)';
    var month = '(?=' + monthText + ')';
    var monthStart = new RegExp('^' + monthText);
    var usdWord = new RegExp('\\bUSD' + S + '(0|' + keys.join('|') + ')' + end, 'g');
    // (^|[^\w$]) instead of a lookbehind, which older Safari lacks.
    var range = new RegExp('(^|[^\\w$])\\$' + n + '(' + S + '(?:to|-|–)' + S + ')\\$' + n + month, 'g');
    var single = new RegExp('(^|[^\\w$])\\$' + n + month, 'g');
    // "$140 USD": an anchor already re-priced to CAD, with a typed USD label.
    var dollarUsd = new RegExp('(\\$' + S + '(?:' + cadVals.join('|') + ')' + end + S + ')USD\\b', 'g');
    var alone = new RegExp('^(\\s*)\\$' + n + '(\\s*)$');
    var bareNum = new RegExp('^\\s*' + n + '\\s*$');
    // Per-class figures worked from the monthly fees ($150 / 8 = $18.75),
    // when a unit follows, directly or after a range: "$18.75 per hour",
    // "$12.50 a lesson", "$12.50 to $18.75 per 60-minute live class".
    var perMonth = (data.display && data.display.classesPerMonth) || 8;
    var perClass = {};
    keys.forEach(function (k) {
      var u = Math.round(k / perMonth * 100) / 100, c = Math.round(map[k] / perMonth * 100) / 100;
      if (!Number.isInteger(u)) perClass[u.toFixed(2)] = c.toFixed(2);
    });
    var perKeys = Object.keys(perClass).map(function (k) { return k.replace('.', '\\.'); });
    var unit = '(?:per|a|an|/)' + S + '(?:\\d+-minute |live |dedicated |private |one-to-one |taught )*(?:class|lesson|hour|session)';
    var perRx = perKeys.length ? new RegExp('(^|[^\\w$])\\$(' + perKeys.join('|') + ')(?!\\d)(?=' + S +
      '(?:(?:to|-|–)' + S + '\\$[\\d.]+' + S + ')?' + unit + ')', 'g') : null;
    var phrases = [
      [new RegExp('\\bin' + S1 + 'US' + S1 + 'dollars\\b', 'g'), 'in Canadian dollars'],
      [new RegExp('\\bin' + S1 + 'USD\\b', 'g'), 'in CAD'],
      [new RegExp('\\bUSD' + S1 + 'pricing\\b', 'g'), 'CAD pricing']
    ];
    // "$140" just before, or "... in" ("We bill in <b>USD</b>").
    var cadBefore = new RegExp('(?:\\$' + S + '(?:' + cadVals.join('|') + ')|\\bin)' + S + '$');
    // The text beside a node: its sibling, or, when the node is all its
    // element holds, the element's sibling ("<div>$140</div><div>USD /
    // month</div>"). Fees are often split this way in cards.
    function step(n, dir) {
      var s = dir < 0 ? n.previousSibling : n.nextSibling;
      while (s && s.nodeType === 3 && !s.nodeValue.trim()) s = dir < 0 ? s.previousSibling : s.nextSibling;
      return s;
    }
    function beside(node, parent, dir) {
      var sib = step(node, dir);
      if (sib) return sib.textContent;
      if (parent.textContent.trim() !== node.nodeValue.trim()) return '';
      var up = step(parent, dir);
      return up ? up.textContent : '';
    }
    var skip = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, TEXTAREA: 1, TITLE: 1 };
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    var node;
    while ((node = walker.nextNode())) {
      var parent = node.parentNode;
      if (!parent || skip[parent.nodeName]) continue;
      var text = node.nodeValue;
      if (!/USD|\$|US[\s ]/.test(text)) continue;
      if (parent.closest && parent.closest('[data-no-price-swap]')) continue;
      var next = parent.childNodes.length === 1 ? parent.nextElementSibling : null;
      // A fee split over elements, "<span>USD</span><span>100</span>".
      if (text.trim() === 'USD' && next && next.childNodes.length === 1 && bareNum.test(next.textContent)) {
        node.nodeValue = text.replace('USD', 'CAD');
        next.textContent = next.textContent.replace(new RegExp(n), function (a) { return map[a]; });
        continue;
      }
      // A USD label after a fee already in CAD, "$140<small> USD / month".
      if (/^[\s ]*USD\b/.test(text) && cadBefore.test(beside(node, parent, -1))) {
        text = text.replace('USD', 'CAD');
        node.nodeValue = text;
      }
      var out = text
        .replace(usdWord, function (m, a) { return 'CAD ' + map[a]; })
        .replace(range, function (m, pre, a, sep, b) { return pre + '$' + map[a] + sep + '$' + map[b]; })
        .replace(single, function (m, pre, a) { return pre + '$' + map[a]; })
        .replace(dollarUsd, '$1CAD');
      if (perRx) out = out.replace(perRx, function (m, pre, a) { return pre + '$' + perClass[a]; });
      // A fee in its own element, "<span>$100</span><span>per month</span>":
      // the month phrase is in the next element.
      var lone = out.match(alone);
      if (lone && monthStart.test(beside(node, parent, 1).replace(/^\s+/, ' '))) {
        out = lone[1] + '$' + map[lone[2]] + lone[3];
      }
      phrases.forEach(function (p) { out = out.replace(p[0], p[1]); });
      if (out !== text) node.nodeValue = out;
    }
  },

  // Hide cards/blocks that are India-only (e.g., Mini Batch tier has no USD price).
  hideIndiaOnlyCards() {
    document.querySelectorAll('[data-india-only="true"]').forEach(function(el) {
      el.style.display = 'none';
    });
  },

  // Reveal intl-only blocks. They ship hidden in the markup so India visitors
  // and crawlers always see the India-default view without any JS.
  showIntlOnlySections() {
    document.querySelectorAll('[data-intl-only="true"]').forEach(function(el) {
      el.hidden = false;
      el.style.removeProperty('display');
    });
  },

  // For Indian visitors on internationally-written pages: hide the
  // USD-schedule copy, reveal the India-schedule copy. See init().
  applyIndiaOverlays() {
    document.querySelectorAll('[data-intl-default="true"]').forEach(function(el) {
      el.style.display = 'none';
    });
    document.querySelectorAll('[data-india-reveal="true"]').forEach(function(el) {
      el.hidden = false;
      el.style.removeProperty('display');
    });
  },

  // Swap course.html catalog chip: show INR chip for India, USD chip for international.
  updateCatalogPriceChips() {
    var isIndian = this.isIndian;
    document.querySelectorAll('.price-chip-india').forEach(function(el) {
      el.hidden = !isIndian;
    });
    document.querySelectorAll('.price-chip-intl').forEach(function(el) {
      el.hidden = isIndian;
    });
  },

  // ─── Pricing Page (pricing.html) ───
  updatePricingPage() {
    var coding = this.PRICES.international;
    var maths = this.PRICES.internationalMaths;

    // Each tab (Coding, Maths, Custom) has cards: Group (1st) and Personal (2nd).
    // The Maths tab (#tab-maths) uses the higher maths-only USD prices; every
    // other tab keeps the flat coding prices.
    document.querySelectorAll('.pricing-tab-content').forEach(function(tab) {
      var prices = (tab.id === 'tab-maths') ? maths : coding;
      var cards = tab.querySelectorAll('.pricing-card-new');
      cards.forEach(function(card) {
        // Skip "Custom Quote" cards
        var priceAmount = card.querySelector('.price-amount');
        if (!priceAmount) return;
        if (priceAmount.textContent.toLowerCase().includes('custom')) return;

        // Determine group vs personal from card heading
        var heading = card.querySelector('h3');
        if (!heading) return;
        var text = heading.textContent.toLowerCase();

        if (text.includes('group')) {
          InternationalPricing.swapPrice(card, prices.group);
        } else if (text.includes('personal')) {
          InternationalPricing.swapPrice(card, prices.personal);
        }
      });
    });
  },

  // ─── Homepage (index.html) ───
  updateHomePage() {
    var prices = this.PRICES.international;

    document.querySelectorAll('.pricing-card').forEach(function(card) {
      var title = card.querySelector('.plan-title');
      if (!title) return;
      var text = title.textContent.toLowerCase();

      // Skip "Custom Pricing" cards
      var planPrice = card.querySelector('.plan-price');
      if (planPrice && planPrice.textContent.toLowerCase().includes('custom')) return;

      if (text.includes('group')) {
        InternationalPricing.swapPlanPrice(card, prices.group);
      } else if (text.includes('personalized') || text.includes('personal')) {
        InternationalPricing.swapPlanPrice(card, prices.personal);
      }
    });
  },

  // ─── Generated Course Pages (course-template.html) ───
  updateCoursePages() {
    var prices = this.pageIntlTable() || this.PRICES.international;

    // Template 1: .enrollment-option > h4 + .price
    document.querySelectorAll('.enrollment-option').forEach(function(option) {
      var priceEl = option.querySelector('.price');
      var heading = option.querySelector('h4');
      if (!priceEl || !heading) return;
      var text = heading.textContent.toLowerCase();

      if (text.includes('group')) {
        priceEl.textContent = prices.group.display + prices.group.period;
      } else if (text.includes('personal') || text.includes('mentorship')) {
        priceEl.textContent = prices.personal.display + prices.personal.period;
      }
    });

    // Template 2: .price-card > .price-label + .price-amt (used on ai-ml, java, girls, etc.)
    document.querySelectorAll('.price-card').forEach(function(card) {
      var label = card.querySelector('.price-label');
      var amt = card.querySelector('.price-amt');
      if (!label || !amt) return;

      // Skip Custom/Corporate/Advanced cards (non-standard SKUs)
      var amtText = amt.textContent.toLowerCase();
      if (amtText.includes('custom')) return;
      var labelText = label.textContent.toLowerCase();
      if (labelText.includes('advanced') || labelText.includes('corporate') ||
          labelText.includes('school')) return;

      if (labelText.includes('1-on-1') || labelText.includes('personal') ||
          labelText.includes('private') || labelText.includes('mentor')) {
        amt.innerHTML = '<sup>' + prices.personal.symbol + '</sup>' + prices.personal.amount;
      } else if (labelText.includes('group') || labelText.includes('kids track') ||
                 labelText.includes('teens track') || labelText.includes('code queens')) {
        amt.innerHTML = '<sup>' + prices.group.symbol + '</sup>' + prices.group.amount;
      }
    });
  },

  // ─── Summer Camp Pages ───
  updateSummerCampPages() {
    var price = this.PRICES.international.summer;

    // Update pricing display: .pricing-amount > .currency + .price
    document.querySelectorAll('.pricing-amount').forEach(function(el) {
      var currencyEl = el.querySelector('.currency');
      var priceEl = el.querySelector('.price');
      if (currencyEl) currencyEl.textContent = price.symbol;
      if (priceEl) priceEl.textContent = price.amount;
    });

    // Update hero stat with ₹4,999
    document.querySelectorAll('.hero-stat strong').forEach(function(el) {
      if (el.textContent.includes('₹') || el.textContent.includes('4,999')) {
        el.textContent = price.display;
      }
    });

    // Update enroll buttons text
    document.querySelectorAll('[data-enroll-camp], .btn-premium-solid').forEach(function(btn) {
      if (btn.textContent.includes('₹')) {
        btn.textContent = btn.textContent.replace(/₹[\d,]+/, price.display);
      }
    });
  },

  // ─── Generic Mini Batch hiding (custom-markup pages) ───
  // The Mini Batch tier (₹2,499, up to 6 students) is India-only and has no USD
  // price. Pages with bespoke pricing markup (e.g. .bj-plan on the Java
  // pillar) don't carry [data-india-only], so detect the card by content:
  // a plan/card/tier element that mentions both "Mini Batch" and ₹2,499.
  hideGenericMiniBatchCards() {
    var nameRx = /mini\s*batch/i;

    // Which rupee figure identifies the Mini Batch card depends on the page:
    // on the premium agents pages it is the agents mini-batch price, and the
    // standard mini-batch figure is that page's GROUP tier, which must never be
    // hidden. Read it from the config rather than hardcoding both, because a
    // stale figure here fails OPEN. It leaves an India-only card visible to a
    // foreign visitor who can then click toward a plan with no USD price.
    var data = window.MAC_PRICING;
    var subject = this.pageSubject();
    var miniBatch = data && data.plans[subject] && data.plans[subject].india
      ? data.plans[subject].india.miniBatch : null;
    if (miniBatch === null || miniBatch === undefined) return;

    var digits = String(miniBatch).replace(/\B(?=(\d{3})+(?!\d))/g, ',?');
    var priceRx = new RegExp('(?:₹|\\bRs\\.?)\\s*' + digits + '(?!\\d)');
    var candidates = document.querySelectorAll('[class*="plan"], [class*="card"], [class*="tier"]');
    candidates.forEach(function(el) {
      var txt = el.textContent || '';
      if (!nameRx.test(txt) || !priceRx.test(txt)) return;
      // Hide only the innermost matching container, never a wrapper that
      // also holds the other plans.
      var hasMatchingChild = Array.prototype.some.call(
        el.querySelectorAll('[class*="plan"], [class*="card"], [class*="tier"]'),
        function(c) { var t = c.textContent || ''; return nameRx.test(t) && priceRx.test(t); }
      );
      if (!hasMatchingChild) el.style.display = 'none';
    });
  },

  // ─── Generic ₹ → $ text swap (custom-markup pages) ───
  // Rewrites any remaining INR price mention to the flat USD price. Order
  // matters: ₹49,999 must be handled before ₹4,999. ₹2,499 maps to the $40
  // group price (no USD Mini Batch exists; inline "from ₹2,499" mentions on
  // hyper-local pages must not surface a third SKU).
  /**
   * Build the ₹ -> $ rules from the config, rather than hardcoding them.
   *
   * The old version listed the rupee figures literally, which meant the prices
   * were also the match keys: change ₹1,499 to anything else and no rule fired,
   * so every international visitor on 325 pages saw raw rupees. Deriving the
   * rules from window.MAC_PRICING removes that trap entirely.
   *
   * Rules are sorted by rupee value, largest first. That ordering used to be a
   * hand-written warning comment ("₹49,999 must be handled before ₹4,999")
   * because ₹4,999 is a prefix match inside ₹49,999. Sorting makes it a
   * property of the code instead of something a future editor has to remember.
   */
  buildSwapRules: function () {
    var data = window.MAC_PRICING;
    if (!data) return [];

    var subject = this.pageSubject();

    var intl = this.pageIntlTable() || this.PRICES.international;
    var coding = this.PRICES.international;

    var rules = [];
    var seen = {};

    // The subject's own Mini Batch price is claimed FIRST, with no rule.
    // Mini Batch is India-only, its rupee figure must never be rewritten to
    // dollars. Without this reservation, other rules that happen to share the
    // number claimed it: on the premium agents pages the ₹4,999 Mini Batch was
    // matched by the camps rule and rendered as "$60 per month", and on the
    // pricing capsule it was caught by the coding 1-on-1 rule and shown as
    // "$374.99 mini batch". Registering the value in `seen` blocks every later
    // rule from touching it, so the ₹ figure survives, which is correct,
    // because the plan genuinely costs rupees and is labelled "(India only)".
    (function reserveMiniBatch() {
      var data = window.MAC_PRICING;
      if (!data) return;
      var subj = InternationalPricing.pageSubject();
      var india = data.plans[subj] && data.plans[subj].india;
      if (india && india.miniBatch !== null && india.miniBatch !== undefined) {
        seen[india.miniBatch] = true;
      }
    })();

    function add(inr, usdEntry) {
      if (inr === null || inr === undefined || !usdEntry) return;
      if (seen[inr]) return;                       // first rule for a value wins
      seen[inr] = true;
      // Match ₹1,499 / ₹1499 / Rs 1,499, but never a longer number that merely
      // starts with these digits.
      var digits = String(inr).replace(/\B(?=(\d{3})+(?!\d))/g, ',?');
      rules.push({
        value: inr,
        rx: new RegExp('(?:₹|\\bRs\\.?)\\s*' + digits + '(?!\\d)', 'g'),
        usd: usdEntry.display
      });
    }

    // The subject's own tiers first, so an agents page maps its ₹2,499 group
    // price to the group price rather than to the standard mini-batch rule.
    var indiaTable = (data.plans[subject] && data.plans[subject].india) || {};
    ['lifetime', 'personal', 'group'].forEach(function (tier) {
      add(indiaTable[tier], intl[tier]);
    });

    // Mini Batch is deliberately absent: it is sold only in India, has no USD
    // price, and the card carrying it is hidden from international visitors.
    // Inventing a dollar figure for it would publish a plan that is not sold.

    // Camps, then the in-school bootcamp tiers. School programmes run inside
    // Indian schools and have no USD price of their own, so they borrow the
    // matching coding tier rather than leaving a lone rupee figure on an
    // otherwise dollar-priced page.
    var camps = (data.plans.camps && data.plans.camps.india) || {};
    add(camps.oneTime, this.PRICES.international.summer);

    var school = (data.plans.school && data.plans.school.india) || {};
    add(school.personal, coding.personal);
    add(school.group, coding.group);

    // Any remaining India price for this subject, mapped by tier name.
    Object.keys(indiaTable).forEach(function (tier) {
      add(indiaTable[tier], intl[tier] || coding[tier]);
    });

    rules.sort(function (a, b) { return b.value - a.value; });
    return rules;
  },

  genericPriceSwap() {
    var rules = this.buildSwapRules();
    if (!rules.length) return;
    var skip = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, TEXTAREA: 1, TITLE: 1 };
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    var node;
    while ((node = walker.nextNode())) {
      var parent = node.parentNode;
      if (!parent || skip[parent.nodeName]) continue;
      var text = node.nodeValue;
      if (text.indexOf('₹') === -1 && !/\bRs\.?\s*\d/.test(text)) continue;
      var out = text;
      rules.forEach(function(rule) {
        // Replacement via function so "$" in the price is never treated as a
        // regex group reference.
        out = out.replace(rule.rx, function() { return rule.usd; });
      });
      if (out !== text) node.nodeValue = out;
    }
  },

  // ─── Hide Old International Sections ───
  hideInternationalSections() {
    // .intl-pricing-section (pricing.html, and nowhere else) used to be hidden
    // here. That left it with no audience at all: this function only runs
    // abroad, so the one visitor who ever saw the section was the Indian one it
    // is not written for, and its anchors re-priced to rupees under a
    // hardcoded "USD / month" label. The section now ships
    // data-intl-only="true" hidden, so India never sees it and the visitor
    // outside India does, in dollars. Nothing else is changed here: the course
    // template's own international block is still hidden by the heading loop
    // and the #intl-pricing-grid rule below.

    // Course template: International pricing box (by heading text)
    document.querySelectorAll('h3, h4').forEach(function(heading) {
      var text = heading.textContent.toLowerCase();
      if (text.includes('international student') || text.includes('international pricing') ||
          text.includes('outside india')) {
        var section = heading.closest('div[style]') || heading.closest('div') || heading.parentElement;
        if (section) section.style.display = 'none';
      }
    });

    // Hide showInternationalContactModal buttons
    document.querySelectorAll('[onclick*="showInternationalContactModal"]').forEach(function(el) {
      var parent = el.closest('div[style]') || el.closest('div');
      if (parent) parent.style.display = 'none';
    });

    // Hide the entire international pricing container on course pages
    var intlGrid = document.getElementById('intl-pricing-grid');
    if (intlGrid) {
      var container = intlGrid.closest('div[style]') || intlGrid.parentElement;
      if (container) container.style.display = 'none';
    }

    // Hide "Also available in EUR, GBP..." note
    document.querySelectorAll('p').forEach(function(p) {
      if (p.textContent.includes('Also available in EUR') || p.textContent.includes('Also available in GBP')) {
        p.style.display = 'none';
      }
    });
  },

  // ─── Price Swap Helpers ───

  // For pricing.html cards (.price-amount > .price-currency)
  swapPrice: function(card, priceData) {
    var amountEl = card.querySelector('.price-amount');
    if (amountEl) {
      amountEl.innerHTML = '<span class="price-currency">' + priceData.symbol + '</span>' + priceData.amount;
    }
    var periodEl = card.querySelector('.price-period');
    if (periodEl) periodEl.textContent = priceData.period;
  },

  // For index.html cards (.plan-price > .price-currency)
  swapPlanPrice: function(card, priceData) {
    var planPrice = card.querySelector('.plan-price');
    if (planPrice) {
      planPrice.innerHTML = '<span class="price-currency">' + priceData.symbol + '</span>' +
        priceData.amount + '<span class="price-period">' + priceData.period + '</span>';
    }
  }
};

// ─── Add WhatsApp Help Styles ───
(function addIntlStyles() {
  if (document.getElementById('intl-pricing-styles')) return;
  var styles = document.createElement('style');
  styles.id = 'intl-pricing-styles';
  styles.textContent = [
    '.whatsapp-help { text-align: center; margin-top: 1rem; padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.1); }',
    '.whatsapp-help p { color: #64748b; font-size: 0.8rem; margin-bottom: 0.3rem; }',
    '.whatsapp-help a, .wa-help-link { color: #25D366; font-size: 0.8rem; text-decoration: none; display: inline-block; margin-top: 0.5rem; }',
    '.wa-help-link:hover, .whatsapp-help a:hover { text-decoration: underline; }'
  ].join('\n');
  document.head.appendChild(styles);
})();

// ─── Detect region synchronously on script parse (before DOMContentLoaded) ───
// This guarantees window.__MAC_IS_INDIAN is set when any inline DOMContentLoaded
// listener queries it, even if that listener was registered before this script parsed.
InternationalPricing.detectRegion();

// ─── Run DOM-touching work as soon as the DOM is usable ───
//
// These scripts sit at the end of <body>, so by the time this line runs the
// document has already been parsed and every price is in the DOM. Waiting for
// DOMContentLoaded anyway meant an international visitor watched rupee prices
// sit on screen through the rest of page setup before they were swapped. When
// the document is already parsed, do the work now; only genuinely early loads
// wait for the event.
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function () {
    InternationalPricing.init();
  });
} else {
  InternationalPricing.init();
}

// Export for global use
window.InternationalPricing = InternationalPricing;
