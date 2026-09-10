/**
 * DEMO CHOICE - free queue or paid priority demo
 *
 * Shown the moment a demo request has been submitted, on every page and from
 * every form, and offers two ways to get the demo:
 *
 *   Free      wait in the queue. Mentors teach live classes most of the day,
 *             so free demos are scheduled in order as slots open up and it
 *             can take a few weeks (owner's wording, 2026-09-10).
 *   Priority  pay ₹499 in India or $10 elsewhere and a mentor steps out of a
 *             running batch to teach the demo today or tomorrow, at a time
 *             the visitor picks. Paid through Razorpay, verified server-side.
 *
 * HOW IT REACHES EVERY FORM WITHOUT EDITING ANY OF THEM
 * The site has more than five hundred pages with their own inline demo forms,
 * plus the callback modal on every page, /book-demo, /contact and the
 * homepage. All of them post to one of two endpoints. Like attribution.js and
 * country-code-selector.js, this file hooks window.fetch and watches for a
 * successful POST to those endpoints, then opens the chooser. It is injected
 * on every page at build time by scripts/inline-components.js, so a page
 * written next month gets it without anyone remembering to add it.
 *
 * Forms that redirect to /thank-you after success are covered too: the
 * request details are kept in sessionStorage before the page unloads, and the
 * thank-you page renders the same chooser inline in its hero, prefilled.
 *
 * A page can opt out with <meta name="mac-demo-choice" content="off"> - the
 * business-services pages do, since a software enquiry is not a demo.
 *
 * WHAT DECIDES THE PRICE
 * The country of the phone number in the payment form. Before the form is
 * opened, the card shows the price for the region the site already detected
 * (window.__MAC_IS_INDIAN from international-pricing.js, or the same
 * locale-and-timezone test when that script is not on the page). The button
 * always shows the exact amount that will be charged.
 *
 * The backend allowlists exactly these two amounts for productType 'demo';
 * see backend/lib/paidDemo.js. Change the price there and here together.
 *
 * Dependency-free ES5 with every storage access wrapped, matching the other
 * site scripts. A failure anywhere in here must never stop a form working.
 */
(function () {
    'use strict';

    if (window.__macDemoChoiceLoaded) return;
    window.__macDemoChoiceLoaded = true;

    var SESSION_KEY = 'mac_demo_choice';      // the lead just submitted (this tab)
    var PAID_KEY = 'mac_demo_paid_v1';        // a priority demo already booked in this browser
    var PAID_TTL_DAYS = 3;
    var SESSION_TTL_MS = 2 * 60 * 60 * 1000;

    var PRODUCT = {
        productType: 'demo',
        productId: 'priority-live-demo',
        productName: 'Priority Live Demo Class'
    };
    var PRICES = {
        INR: { currency: 'INR', amount: 499, display: '₹499' },
        USD: { currency: 'USD', amount: 10, display: '$10' }
    };

    var LEAD_ENDPOINT_RE = /\/api\/(contact\/submit|callback\/request)\b/i;
    var WA_NUMBER = '919123366161';
    var RAZORPAY_SRC = 'https://checkout.razorpay.com/v1/checkout.js';

    var IST_TZ = 'Asia/Kolkata';
    var DEMO_HOURS_IST = { start: 10, end: 20 };
    var DAYS_AHEAD = 5;              // today and the next four days
    var MIN_LEAD_MINUTES = 90;       // a slot today must be at least this far away
    var OPEN_DELAY_MS = 350;         // lets a redirecting page leave before the popup shows

    // ───────────────────────── small helpers ─────────────────────────

    function apiUrl() {
        var h = window.location.hostname;
        return (h === 'localhost' || h === '127.0.0.1')
            ? 'http://localhost:5000'
            : 'https://backend-modernagecoders.vercel.app';
    }

    function optedOut() {
        var meta = document.querySelector('meta[name="mac-demo-choice"]');
        if (meta && /^off$/i.test(meta.getAttribute('content') || '')) return true;
        var b = document.body;
        return !!(b && b.getAttribute('data-demo-choice') === 'off');
    }

    function inlineMount() {
        return document.querySelector('[data-mac-demo-choice="inline"]');
    }

    function readJson(storage, key) {
        try { return JSON.parse(storage.getItem(key)) || null; } catch (e) { return null; }
    }
    function writeJson(storage, key, value) {
        try { storage.setItem(key, JSON.stringify(value)); } catch (e) { /* storage blocked */ }
    }
    function readSession() {
        var rec = null;
        try { rec = readJson(window.sessionStorage, SESSION_KEY); } catch (e) { }
        if (!rec || !rec.at || (Date.now() - rec.at) > SESSION_TTL_MS) return null;
        return rec;
    }
    function writeSession(rec) {
        try { writeJson(window.sessionStorage, SESSION_KEY, rec); } catch (e) { }
    }
    function readPaid() {
        var rec = null;
        try { rec = readJson(window.localStorage, PAID_KEY); } catch (e) { }
        if (!rec || !rec.at) return null;
        if ((Date.now() - rec.at) > PAID_TTL_DAYS * 24 * 60 * 60 * 1000) return null;
        return rec;
    }
    function writePaid(rec) {
        try { writeJson(window.localStorage, PAID_KEY, rec); } catch (e) { }
    }

    function track(name, params) {
        try { if (typeof gtag === 'function') gtag('event', name, params || {}); } catch (e) { }
    }

    function esc(s) {
        return String(s === undefined || s === null ? '' : s)
            .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    function waLink(text) {
        return 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(text);
    }

    // ───────────────────────── region and price ─────────────────────────

    // Same two signals international-pricing.js uses, so a page without that
    // script reaches the same answer. Deliberately India-biased: an Indian
    // family browsing in en-US must still see rupees.
    function detectIndia() {
        var languages = navigator.languages || [navigator.language || ''];
        var indianLocale = false;
        for (var i = 0; i < languages.length; i++) {
            var u = String(languages[i] || '').toUpperCase();
            if (u.indexOf('-IN') !== -1 || /^(HI|BN|TA|TE|MR|GU|KN|ML|PA|OR|AS)/.test(u)) { indianLocale = true; break; }
        }
        var tz = '';
        try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch (e) { }
        return indianLocale || tz === 'Asia/Kolkata' || tz === 'Asia/Calcutta';
    }

    // The same preview switch international-pricing.js honours, so the owner
    // can check the outside-India view from India: ?test=intl (or
    // ?test=international) shows dollars, ?test=india shows rupees.
    function testRegion() {
        try {
            var t = (new URLSearchParams(window.location.search).get('test') || '').toLowerCase();
            if (t === 'intl' || t === 'international') return false;
            if (t === 'india') return true;
        } catch (e) { }
        return null;
    }

    function regionIsIndia(phoneIso) {
        if (phoneIso) return String(phoneIso).toUpperCase() === 'IN';
        var forced = testRegion();
        if (forced !== null) return forced;
        if (typeof window.__MAC_IS_INDIAN === 'boolean') return window.__MAC_IS_INDIAN;
        return detectIndia();
    }

    function priceFor(isIndia) { return isIndia ? PRICES.INR : PRICES.USD; }

    // ───────────────────────── phone helpers ─────────────────────────

    function readPhone(input) {
        if (window.MACCountryCode && window.MACCountryCode.read) {
            return window.MACCountryCode.read(input);
        }
        // No selector on this page: fall back to what the form told us.
        var dial = (input && input.dataset.countryDial) || '+91';
        var iso = (input && input.dataset.countryIso) || 'IN';
        var name = (input && input.dataset.countryName) || 'India';
        var digits = ((input && input.value) || '').replace(/\D/g, '');
        var dialDigits = dial.replace(/\D/g, '');
        if ((input.value || '').charAt(0) === '+' && digits.indexOf(dialDigits) === 0) {
            digits = digits.slice(dialDigits.length);
        }
        return { dial: dial, iso: iso, name: name, digits: digits, fullPhone: digits ? dial + digits : '' };
    }

    function phoneValid(digits, iso) {
        if (window.MACPhone && window.MACPhone.isValid) return window.MACPhone.isValid(digits, iso);
        return iso === 'IN' ? /^[0-9]{10}$/.test(digits) : /^[0-9]{7,15}$/.test(digits);
    }

    function phoneHint(iso) {
        if (window.MACPhone && window.MACPhone.hint) return window.MACPhone.hint(iso);
        return iso === 'IN' ? 'Please enter a valid 10-digit phone number' : 'Please enter a valid phone number (7-15 digits)';
    }

    // ───────────────────────── slot picker ─────────────────────────
    // Writes the SAME string format as demo-slot-picker.js and /book-demo
    // ("Thu, 10 Sep, 06:00 pm IST (01:30 pm Europe/London)") so the server
    // parses it with the one function it already has.

    function fmt(dt, tz, opts) {
        var o = {};
        for (var k in opts) if (opts.hasOwnProperty(k)) o[k] = opts[k];
        if (tz) o.timeZone = tz;
        try { return new Intl.DateTimeFormat('en-GB', o).format(dt); } catch (e) { return ''; }
    }

    // hour:00 IST on the IST calendar date given by (y, m, d). IST is UTC+5:30.
    function istDate(y, m, d, hour) {
        return new Date(Date.UTC(y, m, d, hour - 5, -30));
    }

    // "Thu, 10 Sep" built from parts rather than one locale string, because
    // newer browsers format en-GB as "Thu 10 Sept" (no comma, four-letter
    // month) and the server's parser documents the three-letter form.
    function dayLabel(dt) {
        var weekday = fmt(dt, IST_TZ, { weekday: 'short' }).replace(/[^A-Za-z]/g, '').slice(0, 3);
        var day = fmt(dt, IST_TZ, { day: 'numeric' }).replace(/\D/g, '');
        var month = fmt(dt, IST_TZ, { month: 'short' }).replace(/[^A-Za-z]/g, '').slice(0, 3);
        return weekday + ', ' + day + ' ' + month;
    }

    // Today's date as it is in India right now, as [year, monthIndex, day].
    function istToday() {
        var parts;
        try {
            parts = new Intl.DateTimeFormat('en-GB', { timeZone: IST_TZ, year: 'numeric', month: '2-digit', day: '2-digit' })
                .formatToParts(new Date());
        } catch (e) { parts = null; }
        if (parts) {
            var y, m, d;
            for (var i = 0; i < parts.length; i++) {
                if (parts[i].type === 'year') y = parseInt(parts[i].value, 10);
                if (parts[i].type === 'month') m = parseInt(parts[i].value, 10) - 1;
                if (parts[i].type === 'day') d = parseInt(parts[i].value, 10);
            }
            if (y && d >= 1) return [y, m, d];
        }
        var now = new Date(Date.now() + 5.5 * 60 * 60 * 1000);
        return [now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()];
    }

    function buildSlotPicker(container, hidden, onChange) {
        var localTz = '';
        try { localTz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch (e) { }
        var isIST = localTz === 'Asia/Kolkata' || localTz === 'Asia/Calcutta';

        var dayRow = document.createElement('div');
        dayRow.className = 'mac-dc-chips';
        var timeRow = document.createElement('div');
        timeRow.className = 'mac-dc-chips mac-dc-chips--times';
        timeRow.style.display = 'none';
        var note = document.createElement('p');
        note.className = 'mac-dc-tiny';

        var selectedDay = null;   // { y, m, d, label }
        var selectedTime = null;  // { ist, local }
        var earliest = Date.now() + MIN_LEAD_MINUTES * 60 * 1000;

        function hoursFor(day) {
            var out = [];
            for (var h = DEMO_HOURS_IST.start; h <= DEMO_HOURS_IST.end; h++) {
                var dt = istDate(day.y, day.m, day.d, h);
                if (dt.getTime() < earliest) continue;
                out.push({ hour: h, dt: dt });
            }
            return out;
        }

        function write() {
            if (selectedDay && selectedTime) {
                hidden.value = selectedDay.label + ', ' + selectedTime.ist + ' IST' +
                    (isIST ? '' : ' (' + selectedTime.local + ' ' + localTz + ')');
            } else {
                hidden.value = '';
            }
            if (onChange) onChange(hidden.value);
        }

        function renderTimes() {
            timeRow.innerHTML = '';
            if (!selectedDay) { timeRow.style.display = 'none'; return; }
            timeRow.style.display = 'flex';
            var hours = hoursFor(selectedDay);
            for (var i = 0; i < hours.length; i++) {
                (function (slot) {
                    var istLabel = fmt(slot.dt, IST_TZ, { hour: '2-digit', minute: '2-digit', hour12: true });
                    var localLabel = fmt(slot.dt, null, { hour: '2-digit', minute: '2-digit', hour12: true });
                    var btn = document.createElement('button');
                    btn.type = 'button';
                    btn.className = 'mac-dc-chip';
                    btn.innerHTML = '<b>' + esc(istLabel) + ' IST</b>' +
                        (isIST ? '' : '<span>' + esc(localLabel) + ' your time</span>');
                    btn.addEventListener('click', function () {
                        selectedTime = { ist: istLabel, local: localLabel };
                        var chips = timeRow.querySelectorAll('.mac-dc-chip');
                        for (var j = 0; j < chips.length; j++) chips[j].classList.remove('active');
                        btn.classList.add('active');
                        write();
                    });
                    timeRow.appendChild(btn);
                })(hours[i]);
            }
        }

        var today = istToday();
        var shown = 0;
        var todaySkipped = false;
        for (var offset = 0; offset < DAYS_AHEAD; offset++) {
            (function (off) {
                var probe = new Date(Date.UTC(today[0], today[1], today[2] + off));
                var day = { y: probe.getUTCFullYear(), m: probe.getUTCMonth(), d: probe.getUTCDate() };
                if (!hoursFor(day).length) { if (off === 0) todaySkipped = true; return; }
                var noon = istDate(day.y, day.m, day.d, 12);
                day.label = dayLabel(noon);
                var top = off === 0 ? 'Today' : (off === 1 ? 'Tomorrow' : day.label.split(',')[0]);
                var btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'mac-dc-chip' + (off <= 1 ? ' mac-dc-chip--hot' : '');
                btn.innerHTML = '<b>' + esc(top) + '</b><span>' +
                    esc(fmt(noon, IST_TZ, { day: 'numeric', month: 'short' })) + '</span>';
                btn.addEventListener('click', function () {
                    selectedDay = day;
                    selectedTime = null;
                    var chips = dayRow.querySelectorAll('.mac-dc-chip');
                    for (var j = 0; j < chips.length; j++) chips[j].classList.remove('active');
                    btn.classList.add('active');
                    renderTimes();
                    write();
                });
                dayRow.appendChild(btn);
                shown++;
            })(offset);
        }

        note.textContent = (todaySkipped
            ? 'Today’s slots are over for now, so tomorrow is the earliest. '
            : 'Slots today start at least 90 minutes from now. ') +
            'Times are in IST (India)' + (isIST ? '.' : ', with your local time underneath.');

        container.appendChild(dayRow);
        container.appendChild(timeRow);
        container.appendChild(note);
        return { hasDays: shown > 0 };
    }

    // ───────────────────────── styles ─────────────────────────

    function injectStyles() {
        if (document.getElementById('mac-dc-styles')) return;
        var css = [
            // z-index sits above the floating WhatsApp and Misti buttons
            // (2147483645/6), which otherwise cover the buttons on a phone.
            // Razorpay's checkout is appended to <body> later and shares the
            // maximum value, so DOM order keeps it on top of this overlay.
            '.mac-dc-overlay{position:fixed;inset:0;background:rgba(17,12,8,.62);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);z-index:2147483647;display:flex;align-items:center;justify-content:center;padding:16px;box-sizing:border-box;animation:macDcFade .22s ease}',
            '.mac-dc{position:relative;box-sizing:border-box;width:100%;max-width:820px;background:#fff;color:#1c1814;border-radius:20px;padding:30px 28px 22px;font-family:"Inter",system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;line-height:1.5;text-align:left;box-shadow:0 30px 70px -30px rgba(28,24,20,.55);border:1px solid rgba(28,24,20,.08)}',
            '.mac-dc-overlay .mac-dc{max-height:92vh;overflow:auto;animation:macDcUp .28s ease;-webkit-overflow-scrolling:touch}',
            '.mac-dc--inline{margin:26px auto 0;box-shadow:0 24px 50px -30px rgba(28,24,20,.40)}',
            '.mac-dc *{box-sizing:border-box}',
            // The grid rule below sets display:grid, which would beat the
            // browser\'s own [hidden]{display:none}. Keep hidden meaning hidden.
            '.mac-dc [hidden]{display:none!important}',
            '.mac-dc h2,.mac-dc h3,.mac-dc p,.mac-dc ul{margin:0}',
            // This card sits on light editorial pages and on dark course pages
            // alike, whose global h3/button/span rules would otherwise leak in
            // (white headings on a white card, chips laid out as flex rows).
            '.mac-dc h2,.mac-dc h3{color:#1c1814;font-family:inherit;text-shadow:none;letter-spacing:normal;text-transform:none;background:none;-webkit-text-fill-color:#1c1814}',
            '.mac-dc button{text-transform:none;letter-spacing:normal;box-shadow:none;min-height:0;height:auto}',
            '.mac-dc .mac-dc-chip{display:block!important}',
            '.mac-dc-close{position:absolute;top:12px;right:12px;width:34px;height:34px;border:none;border-radius:50%;background:#f3efe8;color:#6b6259;font-size:22px;line-height:34px;cursor:pointer;font-family:inherit}',
            '.mac-dc-close:hover{background:#e9e3d9;color:#1c1814}',
            '.mac-dc-eyebrow{display:inline-flex;align-items:center;gap:7px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#1f8a55;background:rgba(31,138,85,.08);border:1px solid rgba(31,138,85,.3);border-radius:999px;padding:5px 12px}',
            '.mac-dc-title{font-size:clamp(22px,3vw,29px);font-weight:800;letter-spacing:-.01em;margin:12px 0 6px!important;color:#1c1814}',
            '.mac-dc-sub{font-size:15px;color:#6b6259;max-width:600px}',
            '.mac-dc-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:20px}',
            '.mac-dc-opt{position:relative;border:1.5px solid rgba(28,24,20,.12);border-radius:16px;padding:20px 20px 18px;background:#fff;display:flex;flex-direction:column;gap:10px}',
            '.mac-dc-opt--paid{border-color:#d97706;background:linear-gradient(180deg,#fffaf0 0%,#fff 70%);box-shadow:0 14px 30px -20px rgba(180,83,9,.45)}',
            '.mac-dc-badge{position:absolute;top:-12px;right:16px;background:linear-gradient(135deg,#f59e0b,#d97706);color:#fff;font-size:11.5px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;padding:5px 10px;border-radius:999px;box-shadow:0 6px 14px -6px rgba(217,119,6,.6)}',
            '.mac-dc-kicker{font-size:11.5px;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:#8f6b3f}',
            '.mac-dc-opt--free .mac-dc-kicker{color:#1f8a55}',
            '.mac-dc-opt h3{font-size:19px;font-weight:800;color:#1c1814;line-height:1.25}',
            '.mac-dc-price{display:flex;align-items:baseline;gap:8px;flex-wrap:wrap}',
            '.mac-dc-price b{font-size:28px;font-weight:800;color:#1c1814;letter-spacing:-.02em}',
            '.mac-dc-opt--paid .mac-dc-price b{color:#b45309}',
            '.mac-dc-price span{font-size:12.5px;color:#6b6259}',
            '.mac-dc-opt p.mac-dc-body{font-size:14px;color:#3a332c}',
            '.mac-dc-opt ul{list-style:none;padding:0;display:grid;gap:5px;font-size:13.5px;color:#3a332c}',
            '.mac-dc-opt li{padding-left:20px;position:relative}',
            '.mac-dc-opt li::before{content:"";position:absolute;left:0;top:7px;width:11px;height:11px;border-radius:50%;background:#1f8a55}',
            '.mac-dc-opt--paid li::before{background:#d97706}',
            '.mac-dc-opt .mac-dc-btn{margin-top:auto}',
            '.mac-dc-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;width:100%;padding:13px 18px;border-radius:12px;font-size:15px;font-weight:700;cursor:pointer;font-family:inherit;text-decoration:none;border:1.5px solid transparent;transition:transform .15s ease,box-shadow .15s ease;line-height:1.2;text-align:center}',
            '.mac-dc-btn:hover{transform:translateY(-1px)}',
            '.mac-dc-btn:disabled{opacity:.65;cursor:not-allowed;transform:none}',
            '.mac-dc-btn--ghost{background:#fff;color:#1c1814;border-color:rgba(28,24,20,.22)}',
            '.mac-dc-btn--ghost:hover{border-color:#1c1814}',
            '.mac-dc-btn--solid{background:linear-gradient(135deg,#f59e0b,#d97706);color:#fff;box-shadow:0 10px 22px -10px rgba(217,119,6,.7)}',
            '.mac-dc-btn--wa{background:#25D366;color:#fff}',
            '.mac-dc-btn--link{width:auto;padding:6px 2px;background:none;color:#8f3f08;text-decoration:underline;text-underline-offset:3px;font-weight:600;font-size:13.5px}',
            '.mac-dc-panel{margin-top:18px}',
            '.mac-dc-foot{margin-top:18px!important;padding-top:14px;border-top:1px dashed rgba(28,24,20,.15);font-size:13px;color:#6b6259;text-align:center}',
            '.mac-dc-foot a{color:#1f8a55;font-weight:700;text-decoration:none}',
            '.mac-dc-form{border:1.5px solid #d97706;border-radius:16px;padding:20px;background:#fff}',
            '.mac-dc-form h3{font-size:19px;font-weight:800;margin-bottom:4px!important}',
            '.mac-dc-form .mac-dc-sub{font-size:13.5px;margin-bottom:14px}',
            '.mac-dc-row{display:grid;grid-template-columns:1fr 1fr;gap:12px}',
            '.mac-dc-field{display:flex;flex-direction:column;gap:6px;margin-bottom:12px}',
            '.mac-dc-field label,.mac-dc-label{font-size:12.5px;font-weight:700;color:#3a332c}',
            '.mac-dc-field input{width:100%;padding:12px 13px;border:1.5px solid rgba(28,24,20,.18);border-radius:10px;font-size:15px;color:#1c1814;background:#fff;font-family:inherit;outline:none}',
            '.mac-dc-field input:focus{border-color:#d97706;box-shadow:0 0 0 3px rgba(217,119,6,.15)}',
            '.mac-dc-field .mac-cc-wrap{display:flex;align-items:stretch;gap:6px}',
            '.mac-dc-label{display:block;margin:6px 0 8px}',
            '.mac-dc-chips{display:flex;gap:6px;overflow-x:auto;padding-bottom:4px;-webkit-overflow-scrolling:touch}',
            '.mac-dc-chips--times{margin-top:6px}',
            '.mac-dc-chips::-webkit-scrollbar{height:0}',
            '.mac-dc-chip{flex:0 0 auto;padding:8px 12px;border:1.5px solid rgba(28,24,20,.15);background:#fff;border-radius:10px;font-size:13px;color:#3a332c;cursor:pointer;line-height:1.25;font-family:inherit;text-align:left}',
            '.mac-dc-chip b{display:block;font-size:13px;color:#1c1814}',
            '.mac-dc-chip span{display:block;font-size:10.5px;color:#9a9086;margin-top:1px}',
            '.mac-dc-chip:hover{border-color:#d97706}',
            '.mac-dc-chip--hot{border-color:rgba(217,119,6,.5);background:#fffaf0}',
            '.mac-dc-chip.active{border-color:#d97706;background:#fff3dc;box-shadow:0 0 0 2px rgba(217,119,6,.18)}',
            '.mac-dc-chip.active b{color:#8f3f08}',
            '.mac-dc-tiny{font-size:12px;color:#6b6259;margin-top:8px!important}',
            '.mac-dc-err{display:none;background:#fdecea;color:#8a2a22;border:1px solid rgba(176,71,60,.35);border-radius:10px;padding:10px 12px;font-size:13.5px;margin:10px 0}',
            '.mac-dc-err a{color:#8a2a22;font-weight:700}',
            '.mac-dc-secure{font-size:12.5px;color:#6b6259;text-align:center;margin-top:10px!important;display:flex;flex-wrap:wrap;justify-content:center;gap:4px 10px;align-items:center}',
            '.mac-dc-done{text-align:center;padding:10px 6px 4px}',
            '.mac-dc-tick{display:inline-flex;align-items:center;justify-content:center;width:64px;height:64px;border-radius:50%;background:rgba(31,138,85,.1);color:#1f8a55;margin-bottom:12px}',
            '.mac-dc-tick svg{width:32px;height:32px}',
            '.mac-dc-done h3{font-size:22px;font-weight:800;color:#1c1814}',
            '.mac-dc-done .mac-dc-slotbox{display:inline-block;margin:12px 0 6px;padding:10px 16px;border-radius:12px;background:#fff3dc;border:1px solid rgba(217,119,6,.4);color:#8f3f08;font-weight:800;font-size:17px}',
            '.mac-dc-done p{font-size:14.5px;color:#3a332c;margin-top:6px!important}',
            '.mac-dc-done code{font-family:"JetBrains Mono",ui-monospace,Consolas,monospace;font-size:13px;background:#f3efe8;padding:2px 6px;border-radius:6px}',
            '.mac-dc-done .mac-dc-btn{width:auto;min-width:260px;margin-top:14px}',
            '.mac-dc-queue{border:1.5px solid rgba(31,138,85,.35);background:rgba(31,138,85,.05);border-radius:16px;padding:20px;text-align:center}',
            '.mac-dc-queue h3{font-size:20px;font-weight:800;color:#1c1814}',
            '.mac-dc-queue p{font-size:14.5px;color:#3a332c;margin-top:8px!important;max-width:560px;margin-left:auto!important;margin-right:auto!important}',
            '.mac-dc-queue .mac-dc-actions{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-top:14px}',
            '.mac-dc-queue .mac-dc-btn{width:auto;min-width:220px}',
            '.mac-dc-paidtag{display:inline-block;font-size:12px;font-weight:700;color:#1f8a55;background:rgba(31,138,85,.1);border-radius:999px;padding:4px 10px}',
            '@keyframes macDcFade{from{opacity:0}to{opacity:1}}',
            '@keyframes macDcUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}',
            '@media (max-width:680px){.mac-dc{padding:24px 18px 18px;border-radius:16px}.mac-dc-grid{grid-template-columns:1fr}.mac-dc-row{grid-template-columns:1fr}.mac-dc-badge{right:12px}.mac-dc-overlay{padding:12px;align-items:flex-end}.mac-dc-overlay .mac-dc{max-height:94vh}}',
            '@media (prefers-reduced-motion:reduce){.mac-dc-overlay,.mac-dc-overlay .mac-dc{animation:none}}'
        ].join('\n');
        var style = document.createElement('style');
        style.id = 'mac-dc-styles';
        style.textContent = css;
        document.head.appendChild(style);
    }

    // ───────────────────────── markup ─────────────────────────

    var ICON_TICK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';
    var ICON_WA = '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>';

    function chooserHtml(mode, price, paid) {
        var paidCard;
        if (paid) {
            paidCard =
                '<section class="mac-dc-opt mac-dc-opt--paid">' +
                    '<span class="mac-dc-badge">Booked</span>' +
                    '<span class="mac-dc-kicker">Option 2 · Priority</span>' +
                    '<h3>Your priority demo is booked</h3>' +
                    '<p class="mac-dc-price"><b>' + esc(paid.slot || 'Time to be fixed by call') + '</b></p>' +
                    '<p class="mac-dc-body">Paid ' + esc(paid.display) + ' · Order ID ' + esc(paid.orderId) + '. A mentor confirms on WhatsApp. No need to pay again.</p>' +
                    '<button type="button" class="mac-dc-btn mac-dc-btn--solid" data-action="paid-view">View my booking</button>' +
                '</section>';
        } else {
            paidCard =
                '<section class="mac-dc-opt mac-dc-opt--paid">' +
                    '<span class="mac-dc-badge">Today or tomorrow</span>' +
                    '<span class="mac-dc-kicker">Option 2 · Priority</span>' +
                    '<h3>Live demo today or tomorrow</h3>' +
                    // Only the visitor's own price, the way course pricing
                    // works: rupees in India, dollars elsewhere, no mention of
                    // the other region.
                    '<p class="mac-dc-price"><b data-dc-price>' + esc(price.display) + '</b><span data-dc-price-note>one-time</span></p>' +
                    '<p class="mac-dc-body">Skip the queue. A mentor steps out of a running batch to teach your live demo today or tomorrow, at a time you choose.</p>' +
                    '<ul><li>Pick your own day and time</li><li>Confirmed on WhatsApp within the hour</li><li>Same live class, same mentors, just sooner</li></ul>' +
                    '<button type="button" class="mac-dc-btn mac-dc-btn--solid" data-action="paid">Book priority demo · <span data-dc-price>' + esc(price.display) + '</span></button>' +
                '</section>';
        }

        return (
            (mode === 'modal' ? '<button type="button" class="mac-dc-close" aria-label="Close">&times;</button>' : '') +
            '<div class="mac-dc-head">' +
                // The thank-you hero already says "Request received" right above
                // the inline card, so the eyebrow is for the popup only.
                (mode === 'modal'
                    ? '<span class="mac-dc-eyebrow"><span style="display:inline-flex;width:13px;height:13px">' + ICON_TICK + '</span>Your request is submitted</span>'
                    : '') +
                '<h2 class="mac-dc-title">Now choose: how soon do you want your demo?</h2>' +
                '<p class="mac-dc-sub">Pick one to complete your booking. Both are the same live class with the same mentors. The only difference is how soon.</p>' +
            '</div>' +
            '<div class="mac-dc-grid">' +
                '<section class="mac-dc-opt mac-dc-opt--free">' +
                    '<span class="mac-dc-kicker">Option 1 · Free</span>' +
                    '<h3>Free demo, in the queue</h3>' +
                    '<p class="mac-dc-price"><b>₹0</b><span>nothing to pay</span></p>' +
                    '<p class="mac-dc-body">Our mentors spend most of the day teaching live classes, so free demos are scheduled in order as slots open up. You are in a queue, and it can take a few weeks. We call or WhatsApp you with a time.</p>' +
                    '<ul><li>No payment, no card</li><li>Scheduled in order, usually within a few weeks</li><li>Watch a full recorded class while you wait</li></ul>' +
                    '<button type="button" class="mac-dc-btn mac-dc-btn--ghost" data-action="free">Wait in the free queue</button>' +
                '</section>' +
                paidCard +
            '</div>' +
            '<div class="mac-dc-panel" hidden></div>' +
            '<p class="mac-dc-foot">Not sure which to pick? Contact <a href="' + waLink('Hi, I just requested a demo on the website and have a question about the free queue vs the priority demo.') + '" target="_blank" rel="noopener noreferrer">9123366161</a> directly on WhatsApp for a faster response.</p>'
        );
    }

    function queueHtml() {
        return (
            '<div class="mac-dc-queue">' +
                '<span class="mac-dc-tick">' + ICON_TICK + '</span>' +
                '<h3>Response submitted. You’re in the free queue.</h3>' +
                '<p>Thank you for your patience. Our mentors are teaching live classes for most of the day, so free demos take time: you are in a queue and it can be a few weeks. We contact you on the number you shared, in order, and fix a time that suits you.</p>' +
                '<p><b>While you wait, watch a full recorded class.</b> It shows exactly how we teach, and most parents say it answers their questions before the demo.</p>' +
                '<div class="mac-dc-actions">' +
                    '<a class="mac-dc-btn mac-dc-btn--ghost" href="/how-we-teach">Watch a recorded class</a>' +
                    '<a class="mac-dc-btn mac-dc-btn--wa" href="' + waLink('Hi! I just booked a free demo on the website and would like to confirm my slot and timing.') + '" target="_blank" rel="noopener noreferrer">' + ICON_WA + 'Message us on WhatsApp</a>' +
                '</div>' +
                '<p class="mac-dc-tiny">Changed your mind? <button type="button" class="mac-dc-btn mac-dc-btn--link" data-action="back">Book the priority demo instead</button></p>' +
            '</div>'
        );
    }

    function formHtml(rec, price) {
        return (
            '<form class="mac-dc-form" novalidate>' +
                '<h3>Book your priority demo</h3>' +
                '<p class="mac-dc-sub">Today or tomorrow, at a time you pick. A mentor confirms on WhatsApp within the hour.</p>' +
                '<div class="mac-dc-row">' +
                    '<div class="mac-dc-field"><label for="macDcName">Student or parent name</label><input id="macDcName" name="name" type="text" autocomplete="name" value="' + esc(rec.name || '') + '" placeholder="Full name"></div>' +
                    '<div class="mac-dc-field"><label for="macDcEmail">Email</label><input id="macDcEmail" name="email" type="email" autocomplete="email" value="' + esc(rec.email || '') + '" placeholder="you@example.com"></div>' +
                '</div>' +
                '<div class="mac-dc-field"><label for="macDcPhone">WhatsApp number</label><input id="macDcPhone" name="phone" type="tel" autocomplete="tel" maxlength="15" placeholder="Phone number"></div>' +
                '<span class="mac-dc-label">Pick your slot</span>' +
                '<div class="mac-dc-slots"></div>' +
                '<input type="hidden" name="slot" id="macDcSlot">' +
                '<div class="mac-dc-err" role="alert"></div>' +
                '<button type="submit" class="mac-dc-btn mac-dc-btn--solid" data-dc-pay>Pay ' + esc(price.display) + ' · we’ll call to fix the time</button>' +
                '<p class="mac-dc-secure"><span>🔒 Secured by Razorpay</span><span>·</span><button type="button" class="mac-dc-btn mac-dc-btn--link" data-action="back">Back to both options</button></p>' +
            '</form>'
        );
    }

    function successHtml(paid) {
        var msg = 'Hi! I just paid ' + paid.display + ' for a priority live demo (Order ID ' + paid.orderId + ')' +
            (paid.slot ? ' for ' + paid.slot : '') + '. Please confirm my slot.';
        return (
            '<div class="mac-dc-done">' +
                '<span class="mac-dc-tick">' + ICON_TICK + '</span>' +
                '<h3>Payment received. Your priority demo is booked.</h3>' +
                '<div class="mac-dc-slotbox">' + esc(paid.slot || 'We call you within the hour to fix the time') + '</div>' +
                '<p>Paid ' + esc(paid.display) + ' · Order ID <code>' + esc(paid.orderId) + '</code></p>' +
                '<p>A mentor confirms your demo on WhatsApp shortly. To move faster, send us the confirmation yourself:</p>' +
                '<a class="mac-dc-btn mac-dc-btn--wa" href="' + waLink(msg) + '" target="_blank" rel="noopener noreferrer">' + ICON_WA + 'Confirm on WhatsApp</a>' +
                '<p class="mac-dc-tiny">Keep a laptop or desktop ready with Chrome and a stable connection. The demo is a real class, not a sales call.</p>' +
            '</div>'
        );
    }

    // ───────────────────────── Razorpay ─────────────────────────

    var razorpayPromise = null;
    function loadRazorpay() {
        if (window.Razorpay) return Promise.resolve();
        if (razorpayPromise) return razorpayPromise;
        razorpayPromise = new Promise(function (resolve, reject) {
            var existing = document.querySelector('script[src^="' + RAZORPAY_SRC + '"]');
            var s = existing || document.createElement('script');
            var done = false;
            function ok() { if (!done) { done = true; resolve(); } }
            function fail() { if (!done) { done = true; razorpayPromise = null; reject(new Error('checkout script blocked')); } }
            s.addEventListener('load', ok);
            s.addEventListener('error', fail);
            if (!existing) {
                s.src = RAZORPAY_SRC;
                s.async = true;
                document.head.appendChild(s);
            } else if (window.Razorpay) {
                ok();
            }
            setTimeout(function () { if (window.Razorpay) ok(); else fail(); }, 15000);
        });
        return razorpayPromise;
    }

    // ───────────────────────── the chooser ─────────────────────────

    function Chooser(root, mode, rec) {
        this.root = root;
        this.mode = mode;
        this.rec = rec || {};
        this.render();
    }

    Chooser.prototype.render = function () {
        // In preview mode (?test=intl / ?test=india) the "already booked"
        // memory is ignored, so the owner can look at the price card after
        // making a real test payment in the same browser.
        var paid = testRegion() === null ? readPaid() : null;
        var price = priceFor(regionIsIndia(this.rec.countryIso));
        this.root.className = 'mac-dc' + (this.mode === 'inline' ? ' mac-dc--inline' : '');
        this.root.setAttribute('role', this.mode === 'modal' ? 'dialog' : 'region');
        this.root.setAttribute('aria-label', 'Choose how you would like your demo');
        this.root.innerHTML = chooserHtml(this.mode, price, paid);
        this.grid = this.root.querySelector('.mac-dc-grid');
        this.panel = this.root.querySelector('.mac-dc-panel');
        if (!this.bound) { this.bind(); this.bound = true; }

        // A choice already made in this tab (in the popup, or before a reload)
        // is shown as made, so the visitor is never asked twice.
        if (this.rec.choice === 'paid' && paid) this.showSuccess(paid);
        else if (this.rec.choice === 'free') this.showQueue(true);

        track('demo_choice_shown', { mode: this.mode, region: price.currency });
    };

    Chooser.prototype.bind = function () {
        var self = this;
        this.root.addEventListener('click', function (e) {
            var t = e.target && e.target.closest ? e.target.closest('[data-action]') : null;
            if (!t) {
                if (e.target && e.target.closest && e.target.closest('.mac-dc-close')) self.close();
                return;
            }
            var action = t.getAttribute('data-action');
            if (action === 'free') self.showQueue();
            else if (action === 'paid') self.showForm();
            else if (action === 'paid-view') self.showSuccess(readPaid());
            else if (action === 'back') self.showOptions();
        });
    };

    Chooser.prototype.showOptions = function () {
        this.grid.hidden = false;
        this.panel.hidden = true;
        this.panel.innerHTML = '';
        this.scrollTop();
    };

    /**
     * The free-queue choice. `silent` re-shows a choice already made (render
     * after a reload, or the inline card mirroring the popup) without
     * recording it a second time.
     */
    Chooser.prototype.showQueue = function (silent) {
        this.grid.hidden = true;
        this.panel.innerHTML = queueHtml();
        this.panel.hidden = false;
        this.scrollTop();
        if (silent) return;

        this.rec.choice = 'free';
        writeSession(this.rec);
        submitChoice(this.rec, 'free');
        track('demo_choice_free', { source: this.rec.kind || 'unknown' });
        syncInline(this);
    };

    Chooser.prototype.showSuccess = function (paid) {
        if (!paid) return;
        this.grid.hidden = true;
        this.panel.innerHTML = successHtml(paid);
        this.panel.hidden = false;
        this.scrollTop();
    };

    Chooser.prototype.scrollTop = function () {
        try {
            if (this.mode === 'modal') this.root.scrollTop = 0;
            else if (this.root.scrollIntoView) this.root.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } catch (e) { }
    };

    Chooser.prototype.close = function () {
        if (this.mode !== 'modal') return;
        var overlay = this.root.parentNode;
        if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay);
        document.body.style.overflow = '';
        activeModal = null;
    };

    Chooser.prototype.showForm = function () {
        var self = this;
        var rec = this.rec;
        var price = priceFor(regionIsIndia(rec.countryIso));

        this.grid.hidden = true;
        this.panel.innerHTML = formHtml(rec, price);
        this.panel.hidden = false;
        this.scrollTop();
        track('demo_choice_paid_start', { region: price.currency, source: rec.kind || 'unknown' });

        var form = this.panel.querySelector('form');
        var phone = form.querySelector('#macDcPhone');
        var payBtn = form.querySelector('[data-dc-pay]');
        var err = form.querySelector('.mac-dc-err');
        var slotHidden = form.querySelector('#macDcSlot');

        // Prefill the number the visitor typed seconds ago. The country picker
        // (country-code-selector.js) attaches itself to new tel inputs and
        // recognises a leading "+dial", so handing it the full number selects
        // the right flag and strips the prefix. Without the picker, the data
        // attributes carry the country instead.
        var digits = String(rec.phone || '').replace(/\D/g, '');
        var dial = rec.countryDial || '+91';
        phone.dataset.countryDial = dial;
        phone.dataset.countryIso = rec.countryIso || 'IN';
        phone.dataset.countryName = rec.countryName || 'India';
        phone.value = digits;
        if (digits && window.MACCountryCode && rec.countryIso && rec.countryIso !== 'IN') {
            setTimeout(function () {
                try {
                    if (window.MACCountryCode.rescan) window.MACCountryCode.rescan(form);
                    phone.value = dial + digits;
                    phone.dispatchEvent(new Event('input', { bubbles: true }));
                } catch (e) { phone.value = digits; }
            }, 0);
        } else if (window.MACCountryCode && window.MACCountryCode.rescan) {
            setTimeout(function () { try { window.MACCountryCode.rescan(form); } catch (e) { } }, 0);
        }

        var currentPrice = price;
        function refreshPrice() {
            var cc = readPhone(phone);
            currentPrice = priceFor(regionIsIndia(cc.iso));
            var slot = slotHidden.value;
            payBtn.textContent = slot
                ? 'Pay ' + currentPrice.display + ' & book ' + slot.replace(/\s*\(.*\)\s*$/, '')
                : 'Pay ' + currentPrice.display + ' · we’ll call to fix the time';
        }
        phone.addEventListener('countrycodechange', refreshPrice);
        phone.addEventListener('input', refreshPrice);
        if (typeof MutationObserver === 'function') {
            new MutationObserver(refreshPrice).observe(phone, { attributes: true, attributeFilter: ['data-country-iso'] });
        }

        buildSlotPicker(form.querySelector('.mac-dc-slots'), slotHidden, refreshPrice);
        refreshPrice();

        function showError(html) {
            err.innerHTML = html;
            err.style.display = 'block';
        }
        function clearError() { err.style.display = 'none'; err.innerHTML = ''; }
        function setBusy(busy, label) {
            payBtn.disabled = !!busy;
            if (label) payBtn.textContent = label; else refreshPrice();
        }

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            clearError();

            var name = form.querySelector('#macDcName').value.trim();
            var email = form.querySelector('#macDcEmail').value.trim();
            var cc = readPhone(phone);
            var slot = slotHidden.value;

            if (name.length < 2) { showError('Please enter your name.'); return; }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) { showError('Please enter a valid email address.'); return; }
            if (!phoneValid(cc.digits, cc.iso)) { showError(esc(phoneHint(cc.iso))); return; }

            var isIndia = regionIsIndia(cc.iso);
            var charge = priceFor(isIndia);
            setBusy(true, 'Opening secure checkout…');

            var notes = {
                region: isIndia ? 'india' : 'international',
                leadPage: rec.page || window.location.pathname
            };
            if (slot) notes.demoSlot = slot;
            if (rec.lid) notes.leadId = String(rec.lid);
            if (rec.kind) notes.leadKind = rec.kind;

            loadRazorpay().then(function () {
                return fetch(apiUrl() + '/api/payment/create-order', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        amount: charge.amount,
                        currency: charge.currency,
                        productType: PRODUCT.productType,
                        productId: PRODUCT.productId,
                        productName: PRODUCT.productName + (slot ? ' - ' + slot : ''),
                        customerName: name,
                        customerEmail: email,
                        customerPhone: cc.digits,
                        customerCountryCode: cc.dial,
                        customerCountryIso: cc.iso,
                        customerCountryName: cc.name,
                        notes: notes
                    })
                });
            }).then(function (r) { return r.json(); }).then(function (data) {
                if (!data || !data.success || !data.order) {
                    throw new Error((data && (data.error || data.message)) || 'Could not start the payment');
                }
                var rz = new window.Razorpay({
                    key: data.key,
                    amount: data.order.amount,
                    currency: data.order.currency,
                    name: 'Modern Age Coders',
                    description: PRODUCT.productName + (slot ? ' · ' + slot.replace(/\s*\(.*\)\s*$/, '') : ''),
                    order_id: data.order.id,
                    prefill: { name: name, email: email, contact: cc.dial + cc.digits },
                    notes: notes,
                    theme: { color: '#d97706' },
                    handler: function (resp) {
                        setBusy(true, 'Confirming your booking…');
                        self.verify(resp, {
                            orderId: data.order.orderId,
                            amount: charge.amount,
                            currency: charge.currency,
                            display: charge.display,
                            slot: slot
                        }, function (failure) {
                            setBusy(false);
                            showError(failure);
                        });
                    },
                    modal: { ondismiss: function () { setBusy(false); } }
                });
                rz.on('payment.failed', function (resp) {
                    setBusy(false);
                    var why = resp && resp.error && resp.error.description ? resp.error.description : 'The payment did not go through.';
                    showError(esc(why) + ' You can try again, or <a href="' + waLink('Hi, my priority demo payment failed on the website. Can you help?') + '" target="_blank" rel="noopener noreferrer">message us on WhatsApp</a>.');
                });
                rz.open();
            }).catch(function (error) {
                setBusy(false);
                showError('We could not open the payment right now (' + esc(error && error.message ? error.message : 'network error') + '). ' +
                    'Please try again, or <a href="' + waLink('Hi, I want to book the ' + charge.display + ' priority demo but the payment page did not open.') + '" target="_blank" rel="noopener noreferrer">book it on WhatsApp</a> and we will send a payment link.');
            });
        });
    };

    Chooser.prototype.verify = function (resp, order, onFail) {
        var self = this;
        fetch(apiUrl() + '/api/payment/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                razorpay_order_id: resp.razorpay_order_id,
                razorpay_payment_id: resp.razorpay_payment_id,
                razorpay_signature: resp.razorpay_signature
            })
        }).then(function (r) { return r.json(); }).then(function (data) {
            if (!data || !data.success) throw new Error((data && data.error) || 'verification failed');
            var paid = {
                orderId: (data.payment && data.payment.orderId) || order.orderId,
                amount: order.amount,
                currency: order.currency,
                display: order.display,
                slot: order.slot,
                paymentId: resp.razorpay_payment_id,
                at: Date.now()
            };
            writePaid(paid);
            self.rec.choice = 'paid';
            writeSession(self.rec);
            self.showSuccess(paid);
            syncInline(self);
            track('demo_priority_paid', {
                value: order.amount, currency: order.currency,
                transaction_id: paid.orderId, source: self.rec.kind || 'unknown'
            });
            try {
                if (typeof fbq === 'function') fbq('track', 'Purchase', { value: order.amount, currency: order.currency, content_name: 'Priority Live Demo' });
            } catch (e) { }
        }).catch(function (error) {
            // The money may already be taken. Say so plainly, with the ids the
            // team needs, rather than sending the parent round the loop again.
            onFail('Your payment went through but we could not confirm it automatically (' + esc(error.message) + '). ' +
                'Please do not pay again. <a href="' + waLink('Hi, I paid for a priority demo (payment ID ' + resp.razorpay_payment_id + ', order ' + order.orderId + ') but the site could not confirm it. Please check.') +
                '" target="_blank" rel="noopener noreferrer">Send us your payment ID on WhatsApp</a> and we will confirm your slot by hand.');
        });
    };

    // ───────────────────────── recording the choice ─────────────────────────

    /**
     * Tell the server which path the visitor chose, so the lead in the admin
     * panel says "free queue" or "priority demo". Only the free choice goes
     * this way; the paid one is recorded by the verified payment itself.
     * Fire-and-forget: the confirmation on screen never waits on it, and a
     * lead without an id (a static form) simply is not recorded.
     */
    function submitChoice(rec, choice) {
        if (!rec || !rec.lid || !rec.kind || choice !== 'free') return;
        try {
            fetch(apiUrl() + '/api/demo-choice', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ leadId: String(rec.lid), leadKind: rec.kind, choice: 'free' })
            }).catch(function () { });
        } catch (e) { }
    }

    // ───────────────────────── mounting ─────────────────────────

    var activeModal = null;
    var inlineChooser = null;

    /**
     * The thank-you page shows the chooser twice: as the popup the visitor
     * cannot miss, and inline on the page underneath. A choice made in one is
     * mirrored in the other, so closing the popup never "loses" the answer.
     */
    function syncInline(source) {
        if (!inlineChooser || inlineChooser === source) return;
        inlineChooser.rec = readSession() || inlineChooser.rec;
        inlineChooser.render();
    }

    function openModal(rec) {
        if (activeModal) return;
        injectStyles();
        var overlay = document.createElement('div');
        overlay.className = 'mac-dc-overlay';
        var card = document.createElement('div');
        overlay.appendChild(card);
        document.body.appendChild(overlay);
        document.body.style.overflow = 'hidden';
        activeModal = new Chooser(card, 'modal', rec);
        // Deliberately NOT closed by a click on the dim background: a stray tap
        // beside the card on a phone must not dismiss the one question we
        // need answered. The × button and Escape still close it.
        document.addEventListener('keydown', function onKey(e) {
            if (e.key === 'Escape' && activeModal) { activeModal.close(); document.removeEventListener('keydown', onKey); }
        });
        try { var title = card.querySelector('.mac-dc-title'); if (title) { title.setAttribute('tabindex', '-1'); title.focus(); } } catch (e) { }
    }

    function renderInline(rec) {
        var mount = inlineMount();
        if (!mount) return;
        injectStyles();
        mount.innerHTML = '';
        var card = document.createElement('div');
        mount.appendChild(card);
        inlineChooser = new Chooser(card, 'inline', rec);
    }

    // ───────────────────────── fetch hook ─────────────────────────

    var unloading = false;
    window.addEventListener('beforeunload', function () { unloading = true; });
    window.addEventListener('pagehide', function () { unloading = true; });

    function parseBody(body) {
        if (typeof body !== 'string') return {};
        try { var d = JSON.parse(body); return (d && typeof d === 'object') ? d : {}; } catch (e) { return {}; }
    }

    function recordFromRequest(url, init) {
        var body = parseBody(init && init.body);
        return {
            kind: /callback/i.test(url) ? 'callback' : 'contact',
            lid: '',
            name: String(body.name || '').slice(0, 120),
            email: String(body.email || '').slice(0, 160),
            phone: String(body.contact || body.phone || '').slice(0, 24),
            countryDial: String(body.countryCode || '').slice(0, 8),
            countryIso: String(body.countryIso || '').toUpperCase().slice(0, 2),
            countryName: String(body.countryName || '').slice(0, 60),
            slot: String(body.demoSlot || '').slice(0, 300),
            page: window.location.pathname,
            at: Date.now()
        };
    }

    function afterLeadSaved(rec) {
        if (optedOut()) return;
        if (inlineMount()) renderInline(rec);
        setTimeout(function () {
            if (unloading) return;         // the page is on its way to /thank-you
            openModal(rec);
        }, OPEN_DELAY_MS);
    }

    function installFetchHook() {
        if (typeof window.fetch !== 'function') return;
        if (window.__macDemoChoiceFetchHooked) return;
        window.__macDemoChoiceFetchHooked = true;

        var origFetch = window.fetch.bind(window);

        window.fetch = function (input, init) {
            var url = '';
            var isLead = false;
            var rec = null;
            try {
                url = typeof input === 'string' ? input : (input && input.url) || '';
                var method = (init && init.method) || (input && input.method) || 'GET';
                isLead = LEAD_ENDPOINT_RE.test(url) && /^post$/i.test(method);
                if (isLead) {
                    // Saved before the request leaves, so a page that redirects
                    // to /thank-you the instant it succeeds still hands over
                    // the details for prefilling.
                    rec = recordFromRequest(url, init);
                    writeSession(rec);
                }
            } catch (e) { isLead = false; }

            var result = origFetch(input, init);
            if (!isLead) return result;

            result.then(function (res) {
                if (!res || !res.ok) return;
                res.clone().json().then(function (data) {
                    if (data && data.success === false) return;
                    rec.lid = String((data && (data.contactId || data.requestId)) || '');
                    rec.ok = true;
                    writeSession(rec);
                    afterLeadSaved(rec);
                }).catch(function () { });
            }).catch(function () { });

            return result;
        };
    }

    // ───────────────────────── boot ─────────────────────────

    installFetchHook();

    function bootInline() {
        var mount = inlineMount();
        if (!mount || optedOut()) return;
        var rec = readSession() || {};
        try {
            var params = new URLSearchParams(window.location.search);
            if (!rec.lid && params.get('lid')) rec.lid = params.get('lid');
            if (!rec.kind && params.get('src')) rec.kind = params.get('src') === 'callback' ? 'callback' : 'contact';
        } catch (e) { }
        // A record built here from the URL alone (a static form, a fresh tab)
        // needs a timestamp, or readSession() treats it as expired and a reload
        // would ask the question again.
        if (!rec.at) rec.at = Date.now();
        renderInline(rec);

        // The visitor arrived here by submitting a form. The inline card can
        // sit below the fold, so the same choice opens as a popup they cannot
        // miss - unless it has already been answered in this tab.
        if (!rec.choice) openModal(rec);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bootInline);
    } else {
        bootInline();
    }

    // Exposed for the thank-you page, tests and manual checks:
    //   MACDemoChoice.open()  opens the chooser as a popup on any page.
    window.MACDemoChoice = {
        open: function (rec) { openModal(rec || readSession() || {}); },
        renderInline: function (rec) { renderInline(rec || readSession() || {}); },
        prices: PRICES,
        version: '20260910f'
    };
})();
