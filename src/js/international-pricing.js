/**
 * International Pricing System
 * Modern Age Coders - Auto-detect India vs International
 * 
 * Uses browser locale + timezone to detect India (zero network calls, privacy-safe).
 * If India → show existing ₹ prices. If not → show flat USD prices.
 * Runs synchronously on DOMContentLoaded — no flicker.
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

  // The visitor's country, once detected. Drives the purchasing-power price.
  country: null,

  /**
   * Build the price tables from the generated config data.
   * Returns false if the data is missing, in which case this whole module
   * stands down and the page keeps the rupee prices already in its markup —
   * the safe failure, and what already happens on pages that never loaded
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
      international:         tierSet('coding', 'international'),
      internationalMaths:    tierSet('maths', 'international'),
      internationalAgents:   tierSet('agents', 'international'),
      indiaMaths:            tierSet('maths', 'india'),
      indiaAgents:           tierSet('agents', 'india')
    };
    return true;
  },

  /**
   * Swap the USD figures for the visitor's own country, using the
   * purchasing-power table. Falls back to the list price when the country is
   * unknown or the worldwide layer is switched off.
   */
  applyCountryPrices: function () {
    var data = window.MAC_PRICING;
    if (!data || !data.worldwide || !data.worldwide.enabled) return;
    var entry = this.country && data.worldwide.countries[this.country];
    if (!entry) return;

    var self = this;
    [['international', 'coding'], ['internationalMaths', 'maths'], ['internationalAgents', 'agents']]
      .forEach(function (pair) {
        var table = self.PRICES[pair[0]];
        var prices = entry.tiers && entry.tiers[pair[1]];
        if (!table || !prices) return;
        Object.keys(prices).forEach(function (tier) {
          if (!table[tier]) return;
          var amount = prices[tier];
          table[tier].amount = amount;
          table[tier].display = '$' + new Intl.NumberFormat('en-US', {
            minimumFractionDigits: Number.isInteger(amount) ? 0 : 2,
            maximumFractionDigits: Number.isInteger(amount) ? 0 : 2
          }).format(amount);
        });
      });
  },

  isIndian: true, // default to India

  // ─── Synchronous Detection (runs on script parse, before DOMContentLoaded) ───
  // Sets window.__MAC_IS_INDIAN immediately so consumers like course.html's
  // generateCourseCard() see the correct region flag when they build cards
  // inside their own DOMContentLoaded listeners.
  detectRegion() {
    var urlParams = new URLSearchParams(window.location.search);
    var testMode = urlParams.get('test');
    if (testMode === 'intl' || testMode === 'international') {
      this.isIndian = false;
    } else if (testMode === 'india') {
      this.isIndian = true;
    } else {
      this.isIndian = this.detectIndia();
    }

    this.country = this.detectCountry();

    // Store globals for payment JS files and inline scripts to read
    window.__MAC_IS_INDIAN = this.isIndian;
    window.__MAC_CURRENCY = this.isIndian ? 'INR' : 'USD';
    window.__MAC_COUNTRY = this.country;
  },

  // ─── Initialize (DOM-dependent: runs on DOMContentLoaded) ───
  init() {
    // Detection may have already run via detectRegion(); redo it if not.
    if (typeof window.__MAC_IS_INDIAN === 'undefined') {
      this.detectRegion();
    }

    // Every price this module writes comes from the config. Without it, stand
    // down and leave the page exactly as the server sent it.
    if (!this.loadTables()) return;
    this.applyCountryPrices();

    console.log('[International Pricing] Detected:', this.isIndian ? 'INDIA (INR)' : 'INTERNATIONAL (USD)',
      this.country ? '· country ' + this.country : '');

    // Toggle catalog price chips (course.html) regardless of region
    this.updateCatalogPriceChips();

    // Pages that ship their own India/International toggle panels (the maths hub
    // pages) keep both currencies in static markup. Just activate the panel that
    // matches the visitor; skip DOM price-swapping so the static prices stand.
    var hasManualPanels = this.applyRegionPanels();

    if (!this.isIndian && !hasManualPanels) {
      this.updateAllPages();
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
  // True on the two Codex + Claude Code course pages, which the generator tags
  // <body data-price-tier="agents">. Picks the premium USD prices (group $100,
  // 1-on-1 $150) when swapping ₹ markup and when charging card payments.
  isAgentsContext() {
    var el = document.documentElement;
    var b = document.body;
    return (!!el && el.getAttribute('data-price-tier') === 'agents') ||
           (!!b && b.getAttribute('data-price-tier') === 'agents');
  },

  // ─── Country detection ───
  //
  // No network call, and no third-party IP lookup. Sending every visitor's IP
  // to a geolocation service would hand their address to a company they have no
  // relationship with, add a round trip before a price could be shown, and take
  // pricing down whenever that service had a bad day.
  //
  // Signals, in order of trust:
  //   1. ?country=XX          — for testing
  //   2. nf_country cookie    — what the visitor chose in the switcher; also
  //                             the name Netlify itself uses
  //   3. navigator.languages  — the region subtag of en-GB, de-DE, ar-AE...
  //   4. timezone             — a coarse map of the zones that matter here
  //
  // Undetected visitors get the list price, which is the safe default for the
  // merchant, and the switcher lets a real visitor correct it.

  // Only zones whose country is unambiguous and where we actually sell. A zone
  // that is missing simply falls through to the list price.
  TZ_COUNTRY: {
    'Asia/Kolkata': 'IN', 'Asia/Calcutta': 'IN',
    'Asia/Karachi': 'PK', 'Asia/Dhaka': 'BD', 'Asia/Kathmandu': 'NP', 'Asia/Colombo': 'LK',
    'Asia/Dubai': 'AE', 'Asia/Muscat': 'OM', 'Asia/Riyadh': 'SA', 'Asia/Qatar': 'QA',
    'Asia/Bahrain': 'BH', 'Asia/Kuwait': 'KW', 'Asia/Amman': 'JO', 'Asia/Beirut': 'LB',
    'Asia/Jerusalem': 'IL', 'Asia/Tehran': 'IR', 'Asia/Baghdad': 'IQ',
    'Asia/Singapore': 'SG', 'Asia/Kuala_Lumpur': 'MY', 'Asia/Jakarta': 'ID',
    'Asia/Manila': 'PH', 'Asia/Bangkok': 'TH', 'Asia/Ho_Chi_Minh': 'VN', 'Asia/Saigon': 'VN',
    'Asia/Hong_Kong': 'HK', 'Asia/Tokyo': 'JP', 'Asia/Seoul': 'KR', 'Asia/Shanghai': 'CN',
    'Asia/Taipei': 'TW', 'Asia/Yangon': 'MM', 'Asia/Phnom_Penh': 'KH',
    'Africa/Lagos': 'NG', 'Africa/Accra': 'GH', 'Africa/Nairobi': 'KE',
    'Africa/Kampala': 'UG', 'Africa/Dar_es_Salaam': 'TZ', 'Africa/Addis_Ababa': 'ET',
    'Africa/Cairo': 'EG', 'Africa/Johannesburg': 'ZA', 'Africa/Casablanca': 'MA',
    'Africa/Algiers': 'DZ', 'Africa/Tunis': 'TN', 'Africa/Kigali': 'RW',
    'Africa/Lusaka': 'ZM', 'Africa/Harare': 'ZW', 'Africa/Abidjan': 'CI', 'Africa/Dakar': 'SN',
    'Europe/London': 'GB', 'Europe/Dublin': 'IE', 'Europe/Paris': 'FR', 'Europe/Berlin': 'DE',
    'Europe/Madrid': 'ES', 'Europe/Rome': 'IT', 'Europe/Amsterdam': 'NL', 'Europe/Brussels': 'BE',
    'Europe/Vienna': 'AT', 'Europe/Zurich': 'CH', 'Europe/Lisbon': 'PT', 'Europe/Athens': 'GR',
    'Europe/Stockholm': 'SE', 'Europe/Oslo': 'NO', 'Europe/Copenhagen': 'DK',
    'Europe/Helsinki': 'FI', 'Europe/Warsaw': 'PL', 'Europe/Prague': 'CZ',
    'Europe/Budapest': 'HU', 'Europe/Bucharest': 'RO', 'Europe/Sofia': 'BG',
    'Europe/Moscow': 'RU', 'Europe/Kiev': 'UA', 'Europe/Kyiv': 'UA', 'Europe/Istanbul': 'TR',
    'America/New_York': 'US', 'America/Chicago': 'US', 'America/Denver': 'US',
    'America/Los_Angeles': 'US', 'America/Phoenix': 'US', 'America/Anchorage': 'US',
    'Pacific/Honolulu': 'US', 'America/Detroit': 'US',
    'America/Toronto': 'CA', 'America/Vancouver': 'CA', 'America/Edmonton': 'CA',
    'America/Winnipeg': 'CA', 'America/Halifax': 'CA',
    'America/Mexico_City': 'MX', 'America/Bogota': 'CO', 'America/Lima': 'PE',
    'America/Santiago': 'CL', 'America/Sao_Paulo': 'BR', 'America/Argentina/Buenos_Aires': 'AR',
    'America/Caracas': 'VE', 'America/Panama': 'PA', 'America/Guatemala': 'GT',
    'America/Jamaica': 'JM', 'America/Port_of_Spain': 'TT',
    'Australia/Sydney': 'AU', 'Australia/Melbourne': 'AU', 'Australia/Brisbane': 'AU',
    'Australia/Perth': 'AU', 'Australia/Adelaide': 'AU',
    'Pacific/Auckland': 'NZ', 'Pacific/Fiji': 'FJ'
  },

  detectCountry: function () {
    var params = new URLSearchParams(window.location.search);

    var forced = params.get('country');
    if (forced) return forced.toUpperCase();

    var m = document.cookie.match(/(?:^|;\s*)nf_country=([A-Za-z]{2})/);
    if (m) return m[1].toUpperCase();

    // ?test=intl has to keep working for testing, and must not resolve to a
    // real country or it would pick up that country's discounted price.
    var t = params.get('test');
    if (t === 'india') return 'IN';
    if (t === 'intl' || t === 'international') return null;

    var langs = navigator.languages || [navigator.language || ''];
    for (var i = 0; i < langs.length; i++) {
      var region = String(langs[i]).match(/[-_]([A-Za-z]{2})(?:$|[-_])/);
      if (region) return region[1].toUpperCase();
    }

    try {
      var tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
      if (this.TZ_COUNTRY[tz]) return this.TZ_COUNTRY[tz];
    } catch (e) { /* no Intl support; fall through to list price */ }

    return null;
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

  // ─── Update ALL pages ───
  updateAllPages() {
    this.showIntlOnlySections();
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
    var prices = this.isAgentsContext() ? this.PRICES.internationalAgents
      : this.isMathsContext() ? this.PRICES.internationalMaths
      : this.PRICES.international;

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
  // The Mini Batch tier (₹2,499, 3-4 students) is India-only and has no USD
  // price. Pages with bespoke pricing markup (e.g. .bj-plan on the Java
  // pillar) don't carry [data-india-only], so detect the card by content:
  // a plan/card/tier element that mentions both "Mini Batch" and ₹2,499.
  hideGenericMiniBatchCards() {
    var nameRx = /mini\s*batch/i;

    // Which rupee figure identifies the Mini Batch card depends on the page:
    // on the premium agents pages it is the agents mini-batch price, and the
    // standard mini-batch figure is that page's GROUP tier, which must never be
    // hidden. Read it from the config rather than hardcoding both, because a
    // stale figure here fails OPEN — it leaves an India-only card visible to a
    // foreign visitor who can then click toward a plan with no USD price.
    var data = window.MAC_PRICING;
    var subject = this.isAgentsContext() ? 'agents'
      : this.isMathsContext() ? 'maths' : 'coding';
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

    var subject = this.isAgentsContext() ? 'agents'
      : this.isMathsContext() ? 'maths' : 'coding';

    var intl = this.isAgentsContext() ? this.PRICES.internationalAgents
      : this.isMathsContext() ? this.PRICES.internationalMaths
      : this.PRICES.international;
    var coding = this.PRICES.international;

    var rules = [];
    var seen = {};

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
    // Pricing page: .intl-pricing-section
    document.querySelectorAll('.intl-pricing-section').forEach(function(el) {
      el.style.display = 'none';
    });

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
// listener queries it — even if that listener was registered before this script parsed.
InternationalPricing.detectRegion();

// ─── Run DOM-touching work on DOM ready ───
document.addEventListener('DOMContentLoaded', function() {
  InternationalPricing.init();
});

// Export for global use
window.InternationalPricing = InternationalPricing;
