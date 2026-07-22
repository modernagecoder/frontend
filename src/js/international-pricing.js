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
  // NOTE: For Indian users, site shows 3 tiers: Group ₹1,499, Mini Batch ₹2,499, Personal 1-on-1 ₹4,999.
  // For international users, only 2 tiers are shown ($40 Group, $100 Personal). The Mini Batch tier
  // is hidden via [data-india-only="true"] — NOT re-priced. No USD price exists for Mini Batch.
  PRICES: {
    india: {
      group:     { amount: 1499,  display: '₹1,499',  symbol: '₹', period: '/month' },
      miniBatch: { amount: 2499,  display: '₹2,499',  symbol: '₹', period: '/month' },
      personal:  { amount: 4999,  display: '₹4,999',  symbol: '₹', period: '/month' },
      lifetime:  { amount: 49999, display: '₹49,999', symbol: '₹', period: '' },
      summer:    { amount: 4999,  display: '₹4,999',  symbol: '₹', period: '' }
    },
    international: {
      group:    { amount: 40,  display: '$40',  symbol: '$', period: '/month', currency: 'USD' },
      personal: { amount: 100, display: '$100', symbol: '$', period: '/month', currency: 'USD' },
      lifetime: { amount: 599, display: '$599', symbol: '$', period: '',       currency: 'USD' },
      summer:   { amount: 60,  display: '$60',  symbol: '$', period: '',       currency: 'USD' }
    },
    // MATHS-ONLY international pricing. Maths is priced above the flat coding
    // price: 1-hour live classes, 2 per week, 8 per month. Indian (₹) prices are
    // unchanged; the coding international prices above are unchanged. Applied on
    // the pricing.html Maths tab and on any page tagged data-subject="maths".
    internationalMaths: {
      group:    { amount: 100, display: '$100', symbol: '$', period: '/month', currency: 'USD' },
      personal: { amount: 150, display: '$150', symbol: '$', period: '/month', currency: 'USD' }
    },
    // AGENTS-ONLY international pricing for the premium Codex + Claude Code
    // courses (pages tagged data-price-tier="agents"). Students run the real
    // paid agent tools on their own Claude / ChatGPT subscriptions, so these
    // two courses are premium-priced: India Group ₹2,499 / Mini Batch ₹4,999 /
    // 1-on-1 ₹9,999; international Group $100 / 1-on-1 $150. No other course
    // uses this table. Keep in sync with courses-config.json and
    // getTierPrices() in scripts/generate-courses.js.
    internationalAgents: {
      group:    { amount: 100, display: '$100', symbol: '$', period: '/month', currency: 'USD' },
      personal: { amount: 150, display: '$150', symbol: '$', period: '/month', currency: 'USD' }
    }
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

    // Store globals for payment JS files and inline scripts to read
    window.__MAC_IS_INDIAN = this.isIndian;
    window.__MAC_CURRENCY = this.isIndian ? 'INR' : 'USD';
  },

  // ─── Initialize (DOM-dependent: runs on DOMContentLoaded) ───
  init() {
    // Detection may have already run via detectRegion(); redo it if not.
    if (typeof window.__MAC_IS_INDIAN === 'undefined') {
      this.detectRegion();
    }

    console.log('[International Pricing] Detected:', this.isIndian ? 'INDIA (INR)' : 'INTERNATIONAL (USD)');

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
    // On the premium agents pages the Mini Batch tier is ₹4,999 (₹2,499 is the
    // GROUP tier there and must never be hidden); everywhere else it is ₹2,499.
    var priceRx = this.isAgentsContext()
      ? /(?:₹|\bRs\.?)\s*4,?999(?!\d)/
      : /(?:₹|\bRs\.?)\s*2,?499(?!\d)/;
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
  genericPriceSwap() {
    // Premium agents pages (data-price-tier="agents") carry their own tiers:
    // Group ₹2,499 -> $100 and 1-on-1 ₹9,999 -> $150. The Mini Batch tier
    // (₹4,999) is deliberately NOT swapped: it is an India-only plan with no
    // USD price, and inline prose labels it "(India only)", so keeping the ₹
    // figure stays truthful while a fabricated USD figure would not.
    // Maths pages price Group at $100 and 1-on-1 at $150. Every other page
    // keeps the flat coding swap (Group $40, 1-on-1 $100).
    var rules = this.isAgentsContext() ? [
      { rx: /(?:₹|\bRs\.?)\s*49,?999(?!\d)/g, usd: '$599' },
      { rx: /(?:₹|\bRs\.?)\s*9,?999(?!\d)/g,  usd: '$150' },  // agents 1-on-1 tier
      { rx: /(?:₹|\bRs\.?)\s*2,?499(?!\d)/g,  usd: '$100' }   // agents group tier
    ] : this.isMathsContext() ? [
      { rx: /(?:₹|\bRs\.?)\s*49,?999(?!\d)/g, usd: '$599' },
      { rx: /(?:₹|\bRs\.?)\s*1,?499(?!\d)/g,  usd: '$100' },  // maths group tier
      { rx: /(?:₹|\bRs\.?)\s*1,?999(?!\d)/g,  usd: '$100' },
      { rx: /(?:₹|\bRs\.?)\s*2,?499(?!\d)/g,  usd: '$150' },
      { rx: /(?:₹|\bRs\.?)\s*2,?999(?!\d)/g,  usd: '$150' },
      { rx: /(?:₹|\bRs\.?)\s*4,?999(?!\d)/g,  usd: '$150' }   // maths 1-on-1 tier
    ] : [
      { rx: /(?:₹|\bRs\.?)\s*49,?999(?!\d)/g, usd: '$599' },
      { rx: /(?:₹|\bRs\.?)\s*1,?499(?!\d)/g,  usd: '$40'  },
      { rx: /(?:₹|\bRs\.?)\s*1,?999(?!\d)/g,  usd: '$40'  },  // school bootcamp group tier
      { rx: /(?:₹|\bRs\.?)\s*2,?499(?!\d)/g,  usd: '$40'  },
      { rx: /(?:₹|\bRs\.?)\s*2,?999(?!\d)/g,  usd: '$100' },  // school-page 1-on-1 tier
      { rx: /(?:₹|\bRs\.?)\s*4,?999(?!\d)/g,  usd: '$100' }
    ];
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
