/**
 * Local currency display.
 *
 * Shows the price in the visitor's own currency, with the exact US dollar
 * amount they will be charged stated underneath, plus the rate and the date it
 * was taken.
 *
 * WHY BOTH NUMBERS APPEAR
 * -----------------------
 * The charge is made in US dollars — Razorpay settles an Indian merchant in
 * rupees and a local-currency charge would need that currency enabled on the
 * account. So the local figure is an estimate, and it is labelled as one. The
 * customer's own bank applies its rate and any cross-border fee, so the euros
 * actually debited will not match to the cent.
 *
 * That is defensible only because the charged number is exact, prominent and
 * on the same screen. Showing a local price and revealing a different charge
 * at checkout is the pattern regulators call drip pricing — prohibited under
 * the UK DMCCA and named in India's CCPA dark-patterns guidelines. The UK CMA
 * asks specifically that when converting from a foreign currency you tell the
 * customer what rate you used, which is why the rate and date are printed.
 *
 * Prices, rates and country data all come from window.MAC_PRICING. Nothing
 * here is hardcoded and nothing is fetched at runtime.
 */

(function () {
  'use strict';

  var LocalCurrency = {

    STYLE_ID: 'mac-local-currency-styles',

    init: function () {
      if (window.__MAC_LOCAL_CURRENCY_INIT_DONE) return;
      window.__MAC_LOCAL_CURRENCY_INIT_DONE = true;

      var data = window.MAC_PRICING;
      if (!data || !data.worldwide || !data.worldwide.enabled) return;

      // Indian visitors are billed in rupees directly. There is nothing to
      // convert and nothing to disclose.
      if (window.__MAC_IS_INDIAN !== false) return;

      var country = window.__MAC_COUNTRY;
      var entry = country && data.worldwide.countries[country];
      if (!entry || !entry.currency) return;

      var currency = entry.currency;
      if (currency === 'USD') return;                       // already the charge currency

      var unstable = data.worldwide.unstable || [];
      if (unstable.indexOf(currency) !== -1) return;        // too volatile to quote

      var rate = data.worldwide.currencies && data.worldwide.currencies[currency];
      if (!rate) return;

      this.addStyles();
      this.annotate(currency, rate, data);
    },

    /**
     * Round up to a clean, quotable number. Rounding UP matters: this figure
     * sits beside an exact charge, and an estimate that lands below what the
     * customer is billed reads as a bait and switch.
     */
    niceRoundUp: function (amount) {
      var step =
        amount < 10 ? 0.5 :
        amount < 100 ? 1 :
        amount < 1000 ? 10 :
        amount < 10000 ? 100 :
        amount < 100000 ? 500 : 1000;
      return Math.ceil(amount / step) * step;
    },

    /**
     * Format in the visitor's currency, using one English locale for the whole
     * world because every page here is written in English. Formatting each
     * currency in its own locale renders Mexican pesos as a bare "$1,900" next
     * to a US dollar charge, and Arabic locales emit right-to-left control
     * characters mid-sentence. 'symbol' rather than 'narrowSymbol' keeps A$ and
     * CA$ distinct from $.
     */
    format: function (amount, currency) {
      var value = this.niceRoundUp(amount);
      try {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: currency,
          currencyDisplay: 'symbol',
          minimumFractionDigits: 0,
          maximumFractionDigits: value < 10 ? 1 : 0
        }).format(value);
      } catch (e) {
        return currency + ' ' + Math.round(value).toLocaleString('en-US');
      }
    },

    /** "31 Jul 2026" from the exchange-rate timestamp. */
    rateDate: function (data) {
      var raw = data.worldwide.fxDate;
      if (!raw) return '';
      var d = new Date(raw);
      if (isNaN(d.getTime())) return '';
      return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    },

    /**
     * Attach a local-currency line to every price on the page.
     *
     * Reads the dollar figure already rendered rather than recomputing it, so
     * the estimate can never describe a different price from the one shown.
     */
    annotate: function (currency, rate, data) {
      var self = this;
      var date = this.rateDate(data);
      var seen = 0;

      // [data-price] first: anchored prices are the ones under config control,
      // and they carry no particular class of their own.
      var selectors = ['[data-price]', '.price-amount', '.plan-price', '.price-amt',
                       '.enrollment-option .price'];
      var nodes = document.querySelectorAll(selectors.join(','));

      Array.prototype.forEach.call(nodes, function (el) {
        if (el.getAttribute('data-local-annotated')) return;

        // If this element CONTAINS an anchored price, the anchor is the real
        // one. Rewriting the wrapper's textContent here would destroy it before
        // the loop reached it.
        if (!el.hasAttribute('data-price') && el.querySelector('[data-price]')) return;

        // Hidden plans (a tier not sold in this region) must not be annotated.
        var card = el.closest('[data-india-only], .pricing-card-new, .pricing-card, .price-card');
        if (card && card.style.display === 'none') return;

        var text = el.textContent || '';
        var m = text.replace(/,/g, '').match(/\$\s*([\d]+(?:\.\d{1,2})?)/);
        if (!m) return;                                   // not a dollar price

        var usd = parseFloat(m[1]);
        if (!isFinite(usd) || usd <= 0) return;

        var local = self.format(usd * rate, currency);
        var exact = '$' + usd.toFixed(2).replace(/\.00$/, '');

        // The price is shown in the visitor's own currency, and nothing else.
        // The owner asked on 2026-08-01 for the on-page dollar conversion to go.
        //
        // The exact US dollar amount is still disclosed before anyone pays:
        // the payment modal in course-payment.js prints the currency and the
        // amount it is about to charge. That is the moment consumer rules care
        // about — what is prohibited is revealing a different figure only after
        // the customer has committed.
        //
        // The charge stays on the element as data-usd-charge, so the checkout
        // and any future disclosure can read it without recomputing, and it is
        // repeated in the title attribute for anyone who hovers.
        el.setAttribute('data-local-annotated', '1');
        el.setAttribute('data-usd-charge', exact);
        el.setAttribute('title',
          'Shown in ' + currency + ' at 1 USD = ' + Number(rate.toPrecision(4)) +
          (date ? ' on ' + date : '') + '. Billed in US dollars as ' + exact + '.');
        el.textContent = local;
        seen++;
      });

      if (seen) {
        console.log('[Local Currency] ' + seen + ' price(s) shown in ' + currency +
          ', charged in USD at ' + rate);
      }
    },

    addStyles: function () {
      // Nothing to style any more: the conversion note was removed, so this
      // module only rewrites text. Kept as a no-op so callers stay unchanged.
      return;
    }
  };

  // Runs after international-pricing.js has swapped the dollar figures in, so
  // it annotates the final prices rather than the rupee ones it replaced.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { LocalCurrency.init(); });
  } else {
    LocalCurrency.init();
  }

  window.MACLocalCurrency = LocalCurrency;
})();
