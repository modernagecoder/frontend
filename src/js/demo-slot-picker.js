/**
 * DEMO TIME PICKER (shared, the ONLY one on the site)
 *
 * Injected on every page by scripts/inline-components.js, exactly like
 * attribution.js. Every form that lets a visitor pick a demo time builds its
 * chips through window.MACDemoTime.build, so a page built later gets the same
 * behaviour without writing a picker of its own:
 *
 *   - the callback modal (#callbackForm, via __macBuildCallbackSlotPicker)
 *   - /book-demo (#bd-day-row / #bd-time-row / #demo-slot, mounted below)
 *   - the priority demo payment form (demo-choice.js)
 *
 * WHAT THE VISITOR SEES
 * Visitors in India see the demo window in IST, as before. Everyone else sees
 * days and times in THEIR OWN clock only, from 8 am to 9 pm, with no IST
 * anywhere on screen, plus a box to type a time if none of the chips suit.
 * The team checks the time against IST after the booking arrives.
 *
 * WHAT THE SERVER GETS (the hidden field)
 * Always IST first, so backend parseDemoSlot works unchanged, and for
 * overseas visitors their own date, time and time zone in brackets:
 *   'Tue, 29 Jul, 06:00 pm IST'
 *   'Tue, 29 Jul, 02:30 am IST (Mon, 28 Jul, 05:00 pm America/New_York)'
 *   'Visitor typed: weekday evenings after 6 (their time zone America/New_York)'
 * The WhatsApp and email alerts show both clocks side by side from this.
 * What the visitor sees is kept in the field's data-display attribute, and
 * MACDemoTime.display(raw) rebuilds it from a stored string.
 *
 * Every date is derived from one instant, never from the browser's midnight,
 * so a visitor ahead of India (Singapore, Sydney, Auckland) gets the right IST
 * date in the string.
 *
 * Preview the overseas view from India with ?tz=America/New_York (any IANA
 * zone; it sticks for the tab).
 */
(function () {
    if (window.MACDemoTime) return;

    var IST_TZ = 'Asia/Kolkata';
    var INDIA_HOURS = { start: 10, end: 20 };   // IST, as offered in India
    var ABROAD_HOURS = { start: 8, end: 21 };   // the visitor's own clock
    var TYPED_MAX = 120;
    var TYPED_PREFIX = 'Visitor typed: ';

    function validZone(z) {
        if (!z || typeof z !== 'string' || z.length > 64) return false;
        try { new Intl.DateTimeFormat('en-GB', { timeZone: z }); return true; } catch (e) { return false; }
    }

    function visitorZone() {
        try {
            var q = new URLSearchParams(window.location.search).get('tz');
            if (q && validZone(q)) {
                try { sessionStorage.setItem('mac_test_tz', q); } catch (e) { }
                return q;
            }
            var s = sessionStorage.getItem('mac_test_tz');
            if (s && validZone(s)) return s;
        } catch (e) { }
        try { return Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch (e) { return ''; }
    }

    // No zone at all (very old browser) is treated as India: the IST view is
    // still correct for the team, and nothing is mislabelled as local.
    function isIndiaZone(z) {
        return !z || z === 'Asia/Kolkata' || z === 'Asia/Calcutta';
    }

    function fmt(dt, tz, opts) {
        var o = {};
        for (var k in opts) if (opts.hasOwnProperty(k)) o[k] = opts[k];
        if (tz) o.timeZone = tz;
        try { return new Intl.DateTimeFormat('en-GB', o).format(dt); } catch (e) { return ''; }
    }

    // Wall-clock parts of an instant in a zone. Month is 0-based.
    function partsIn(dt, tz) {
        var out = {};
        try {
            var p = new Intl.DateTimeFormat('en-GB', {
                timeZone: tz, year: 'numeric', month: 'numeric', day: 'numeric',
                hour: 'numeric', minute: 'numeric', hourCycle: 'h23'
            }).formatToParts(dt);
            for (var i = 0; i < p.length; i++) out[p[i].type] = parseInt(p[i].value, 10);
        } catch (e) { return null; }
        return { y: out.year, m: out.month - 1, d: out.day, h: (out.hour || 0) % 24, mi: out.minute || 0 };
    }

    // The instant when the clock in `tz` reads y-m-d h:00, or null when that
    // hour does not exist there (the spring-forward gap).
    function zonedInstant(y, m, d, h, tz) {
        var want = Date.UTC(y, m, d, h, 0);
        var guess = want;
        for (var i = 0; i < 3; i++) {
            var p = partsIn(new Date(guess), tz);
            if (!p) return null;
            var diff = want - Date.UTC(p.y, p.m, p.d, p.h, p.mi);
            if (!diff) return new Date(guess);
            guess += diff;
        }
        var last = partsIn(new Date(guess), tz);
        return last && last.h === h && last.d === d ? new Date(guess) : null;
    }

    // 'Thu, 10 Sep' built from parts, because newer browsers format en-GB as
    // 'Thu 10 Sept' and the server's parser expects three-letter months.
    function dayLabel(dt, tz) {
        var weekday = fmt(dt, tz, { weekday: 'short' }).replace(/[^A-Za-z]/g, '').slice(0, 3);
        var day = fmt(dt, tz, { day: 'numeric' }).replace(/\D/g, '');
        var month = fmt(dt, tz, { month: 'short' }).replace(/[^A-Za-z]/g, '').slice(0, 3);
        return weekday + ', ' + day + ' ' + month;
    }

    // '06:00 pm'. Some engines put a narrow no-break space before am/pm.
    function timeLabel(dt, tz) {
        return fmt(dt, tz, { hour: '2-digit', minute: '2-digit', hour12: true })
            .replace(/[  ]/g, ' ').replace(/\./g, '').toLowerCase();
    }

    function cityOf(zone) {
        var last = String(zone || '').split('/').pop();
        return last.replace(/_/g, ' ');
    }

    function esc(s) {
        return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
        });
    }

    function cleanTyped(text) {
        return String(text || '').replace(/[()\[\]\r\n\t]+/g, ' ').replace(/\s{2,}/g, ' ').trim().slice(0, TYPED_MAX);
    }

    /** The string the server stores for a picked instant. */
    function machineFor(dt, zone) {
        var s = dayLabel(dt, IST_TZ) + ', ' + timeLabel(dt, IST_TZ) + ' IST';
        if (!isIndiaZone(zone)) s += ' (' + dayLabel(dt, zone) + ', ' + timeLabel(dt, zone) + ' ' + zone + ')';
        return s;
    }

    /**
     * What the visitor should see for a stored slot string: their own clock
     * when the string carries it, the IST text for India, the words they typed.
     * opts.short returns '' for a typed time (for button labels).
     */
    function display(raw, opts) {
        var text = String(raw || '').trim();
        if (!text) return '';
        if (text.indexOf(TYPED_PREFIX) === 0) {
            if (opts && opts.short) return '';
            return text.slice(TYPED_PREFIX.length).replace(/\s*\([^)]*\)\s*$/, '');
        }
        var local = text.match(/\(([^)]+)\)\s*$/);
        if (local) return local[1].replace(/\s+\S+\/\S+$/, '') + ' your time';
        return text;
    }

    function injectStyles() {
        if (document.getElementById('mac-slot-styles')) return;
        var css =
            '.mac-slot-typed{margin-top:8px}' +
            '.mac-slot-typed-toggle{background:none;border:none;padding:4px 0;color:#B45309;font:inherit;font-size:12.5px;' +
            'font-weight:600;text-decoration:underline;text-underline-offset:2px;cursor:pointer}' +
            '.mac-slot-typed-input{display:block;width:100%;box-sizing:border-box;margin-top:6px;padding:9px 11px;' +
            'border:1.5px solid #e5e0d6;border-radius:9px;background:#fff;color:#1C1814;font:inherit;font-size:13.5px}' +
            '.mac-slot-typed-input:focus{outline:none;border-color:#D97706}' +
            '.mac-slot-note{font-size:11.5px;color:#6B6259;margin:6px 0 0;line-height:1.45}';
        var style = document.createElement('style');
        style.id = 'mac-slot-styles';
        style.textContent = css;
        document.head.appendChild(style);
    }

    /**
     * Build a picker.
     *
     * opts.dayRow, opts.timeRow  empty elements for the two chip rows
     * opts.hidden                the input that receives the server string
     * opts.note                  optional element for the helper line
     * opts.classes               { chip, day, time, hot, active } class names
     * opts.startOffset           0 offers today, 1 starts tomorrow (default 1)
     * opts.days                  how many days to offer (default 5)
     * opts.minLeadMinutes        a slot must be at least this far away
     * opts.todayWords            label the first chips Today / Tomorrow
     * opts.indiaSuffix           show ' IST' after times for India (default true)
     * opts.typed                 offer the "type a time" box (default true)
     * opts.onChange(raw)         called after every change
     *
     * Returns { hasDays, zone, india, clear() }.
     */
    function build(opts) {
        var dayRow = opts.dayRow, timeRow = opts.timeRow, hidden = opts.hidden;
        if (!dayRow || !timeRow || !hidden) return { hasDays: false };
        injectStyles();

        var cls = opts.classes || {};
        var chipCls = cls.chip || 'mac-slot-chip';
        var activeCls = cls.active || 'active';
        var zone = visitorZone();
        var india = isIndiaZone(zone);
        var tz = india ? IST_TZ : zone;
        var hours = india ? INDIA_HOURS : ABROAD_HOURS;
        var startOffset = opts.startOffset == null ? 1 : opts.startOffset;
        var days = opts.days || 5;
        var earliest = Date.now() + (opts.minLeadMinutes || 0) * 60 * 1000;
        var indiaSuffix = opts.indiaSuffix !== false;

        var selectedDay = null;
        var selectedSlot = null;
        var typedInput = null;

        function showRow(el, show) {
            el.hidden = !show;
            el.style.display = show ? 'flex' : 'none';
        }

        function setValue(raw, shown) {
            hidden.value = raw || '';
            if (raw) hidden.setAttribute('data-display', shown || '');
            else hidden.removeAttribute('data-display');
            if (opts.onChange) opts.onChange(hidden.value);
        }

        function clearActive(row) {
            var chips = row.querySelectorAll('.' + chipCls.split(' ')[0]);
            for (var i = 0; i < chips.length; i++) chips[i].classList.remove(activeCls);
        }

        function slotsFor(y, m, d) {
            var out = [];
            for (var h = hours.start; h <= hours.end; h++) {
                var dt = zonedInstant(y, m, d, h, tz);
                if (!dt || dt.getTime() < earliest) continue;
                out.push(dt);
            }
            return out;
        }

        function writeSlot() {
            if (selectedSlot) {
                var shown = india ? machineFor(selectedSlot, zone)
                    : dayLabel(selectedSlot, zone) + ', ' + timeLabel(selectedSlot, zone) + ' your time';
                if (typedInput) typedInput.value = '';
                setValue(machineFor(selectedSlot, zone), shown);
            } else if (typedInput && cleanTyped(typedInput.value)) {
                var words = cleanTyped(typedInput.value);
                setValue(TYPED_PREFIX + words + (india ? '' : ' (their time zone ' + zone + ')'), words);
            } else {
                setValue('');
            }
        }

        function renderTimes() {
            timeRow.innerHTML = '';
            if (!selectedDay) { showRow(timeRow, false); return; }
            showRow(timeRow, true);
            var slots = selectedDay.slots;
            for (var i = 0; i < slots.length; i++) {
                (function (dt) {
                    var btn = document.createElement('button');
                    btn.type = 'button';
                    btn.className = chipCls + (cls.time ? ' ' + cls.time : '');
                    btn.innerHTML = '<b>' + esc(timeLabel(dt, tz)) + (india && indiaSuffix ? ' IST' : '') + '</b>';
                    btn.addEventListener('click', function () {
                        selectedSlot = dt;
                        clearActive(timeRow);
                        btn.classList.add(activeCls);
                        writeSlot();
                    });
                    timeRow.appendChild(btn);
                })(slots[i]);
            }
        }

        var today = partsIn(new Date(), tz) || (function () {
            var n = new Date(); return { y: n.getFullYear(), m: n.getMonth(), d: n.getDate() };
        })();
        var shownDays = 0;
        var todaySkipped = false;
        for (var off = startOffset; off < startOffset + days; off++) {
            (function (offset) {
                var probe = new Date(Date.UTC(today.y, today.m, today.d + offset));
                var y = probe.getUTCFullYear(), m = probe.getUTCMonth(), d = probe.getUTCDate();
                var slots = slotsFor(y, m, d);
                if (!slots.length) { if (offset === 0) todaySkipped = true; return; }
                var noon = zonedInstant(y, m, d, 12, tz) || slots[0];
                var top = opts.todayWords && offset === 0 ? 'Today'
                    : opts.todayWords && offset === 1 ? 'Tomorrow'
                    : dayLabel(noon, tz).split(',')[0];
                var btn = document.createElement('button');
                btn.type = 'button';
                btn.className = chipCls + (cls.day ? ' ' + cls.day : '') + (cls.hot && offset - startOffset <= 1 ? ' ' + cls.hot : '');
                btn.innerHTML = '<b>' + esc(top) + '</b><span>' + esc(fmt(noon, tz, { day: 'numeric', month: 'short' })) + '</span>';
                btn.addEventListener('click', function () {
                    selectedDay = { slots: slots };
                    selectedSlot = null;
                    clearActive(dayRow);
                    btn.classList.add(activeCls);
                    renderTimes();
                    writeSlot();
                });
                dayRow.appendChild(btn);
                shownDays++;
            })(off);
        }
        showRow(timeRow, false);

        var typedWrap = null;
        if (opts.typed !== false) {
            typedWrap = document.createElement('div');
            typedWrap.className = 'mac-slot-typed';
            var toggle = document.createElement('button');
            toggle.type = 'button';
            toggle.className = 'mac-slot-typed-toggle';
            toggle.textContent = 'None of these suit you? Type a time that works';
            typedInput = document.createElement('input');
            typedInput.type = 'text';
            typedInput.className = 'mac-slot-typed-input';
            typedInput.maxLength = TYPED_MAX;
            typedInput.setAttribute('aria-label', 'Type a day and time that works for you');
            typedInput.placeholder = 'e.g. Saturday 10 am, or weekdays after 5 pm';
            typedInput.style.display = 'none';
            toggle.addEventListener('click', function () {
                typedInput.style.display = 'block';
                toggle.style.display = 'none';
                typedInput.focus();
            });
            // Enter here must not submit the form (on the priority form that
            // would open the payment before they have finished typing).
            typedInput.addEventListener('keydown', function (e) {
                if (e.key === 'Enter') e.preventDefault();
            });
            typedInput.addEventListener('input', function () {
                if (cleanTyped(typedInput.value)) {
                    selectedDay = null;
                    selectedSlot = null;
                    clearActive(dayRow);
                    renderTimes();
                }
                writeSlot();
            });
            typedWrap.appendChild(toggle);
            typedWrap.appendChild(typedInput);
            if (timeRow.nextSibling) timeRow.parentNode.insertBefore(typedWrap, timeRow.nextSibling);
            else timeRow.parentNode.appendChild(typedWrap);
        }

        if (opts.note) {
            var lead = '';
            if (startOffset === 0 && opts.minLeadMinutes) {
                lead = todaySkipped
                    ? 'Today’s slots are over for now, so tomorrow is the earliest. '
                    : 'Slots today start at least ' + opts.minLeadMinutes + ' minutes from now. ';
            }
            opts.note.textContent = lead + (india
                ? 'Times are in IST (India).'
                : 'Times are in your local time (' + cityOf(zone) + ').');
        }

        hidden.value = '';
        hidden.removeAttribute('data-display');

        return {
            hasDays: shownDays > 0,
            zone: zone,
            india: india,
            clear: function () {
                selectedDay = null;
                selectedSlot = null;
                if (typedInput) typedInput.value = '';
                clearActive(dayRow);
                renderTimes();
                writeSlot();
            }
        };
    }

    window.MACDemoTime = {
        build: build,
        display: display,
        zone: visitorZone,
        isIndia: function () { return isIndiaZone(visitorZone()); },
        // Exposed for the offline check in scripts/test-demo-time.js.
        _machineFor: machineFor,
        _zonedInstant: zonedInstant
    };

    // ───────────────────── the callback modal ─────────────────────
    // The modal's markup is inlined into hundreds of pages, so the picker is
    // added at runtime. callback-modal.js and mainbundle.js both call these.

    function injectModalStyles() {
        if (document.getElementById('mac-cbslot-styles')) return;
        var css =
            '.mac-cbslot{margin:2px 0 0}' +
            '.mac-cbslot-label{font-size:12.5px;color:#6b7280;margin:0 0 8px;font-weight:600}' +
            '.mac-cbslot-row{display:flex;gap:6px;overflow-x:auto;padding-bottom:4px;-webkit-overflow-scrolling:touch}' +
            '.mac-cbslot-row::-webkit-scrollbar{height:0}' +
            '.mac-cbslot-chip{flex:0 0 auto;padding:7px 11px;border:1.5px solid #e5e7eb;background:#fff;' +
            'border-radius:9px;font-size:12.5px;color:#374151;cursor:pointer;line-height:1.25;font-family:inherit}' +
            '.mac-cbslot-chip:hover{border-color:#d97706}' +
            '.mac-cbslot-chip.active{border-color:#d97706;background:#fffbeb;color:#92400e;font-weight:600}' +
            '.mac-cbslot-chip b{display:block;font-size:12.5px}' +
            '.mac-cbslot-chip span{display:block;font-size:10.5px;color:#9ca3af;margin-top:1px}' +
            '.mac-cbslot-chip.active span{color:#b45309}' +
            '.mac-cbslot-clear{background:none;border:none;color:#9ca3af;font-size:11.5px;cursor:pointer;' +
            'padding:6px 0 0;text-decoration:underline;font-family:inherit}';
        var style = document.createElement('style');
        style.id = 'mac-cbslot-styles';
        style.textContent = css;
        document.head.appendChild(style);
    }

    /**
     * Builds the modal picker above the submit button. Safe to call
     * repeatedly - it returns early once built.
     */
    window.__macBuildCallbackSlotPicker = function () {
        var form = document.getElementById('callbackForm');
        if (!form || form.querySelector('.mac-cbslot')) return;
        injectModalStyles();

        var wrap = document.createElement('div');
        wrap.className = 'mac-cbslot';
        var label = document.createElement('p');
        label.className = 'mac-cbslot-label';
        label.textContent = 'Prefer a time for your free demo? (optional)';
        var dayRow = document.createElement('div');
        dayRow.className = 'mac-cbslot-row';
        var timeRow = document.createElement('div');
        timeRow.className = 'mac-cbslot-row';
        timeRow.style.marginTop = '6px';
        var hidden = document.createElement('input');
        hidden.type = 'hidden';
        hidden.id = 'callbackDemoSlot';
        var note = document.createElement('p');
        note.className = 'mac-slot-note';
        var clear = document.createElement('button');
        clear.type = 'button';
        clear.className = 'mac-cbslot-clear';
        clear.textContent = 'Clear selected time';
        clear.style.display = 'none';

        wrap.appendChild(label);
        wrap.appendChild(dayRow);
        wrap.appendChild(timeRow);
        wrap.appendChild(note);
        wrap.appendChild(clear);
        wrap.appendChild(hidden);

        // Sit above the submit button so the button stays the last thing.
        var submitBtn = document.getElementById('callbackSubmitBtn');
        if (submitBtn && submitBtn.parentNode === form) form.insertBefore(wrap, submitBtn);
        else form.appendChild(wrap);

        var picker = build({
            dayRow: dayRow, timeRow: timeRow, hidden: hidden, note: note,
            classes: { chip: 'mac-cbslot-chip' },
            startOffset: 1, days: 5,
            onChange: function (raw) { clear.style.display = raw ? 'block' : 'none'; }
        });
        clear.addEventListener('click', function () { picker.clear(); });
    };

    /**
     * Resets the picker between openings so a previous choice is not silently
     * resubmitted by the next person using the same browser.
     */
    window.__macResetCallbackSlotPicker = function () {
        var form = document.getElementById('callbackForm');
        if (!form) return;
        var existing = form.querySelector('.mac-cbslot');
        if (existing && existing.parentNode) existing.parentNode.removeChild(existing);
        window.__macBuildCallbackSlotPicker();
    };

    // ───────────────────── /book-demo ─────────────────────
    // Any page carrying these three ids gets the picker, so a future demo page
    // only has to copy the markup.

    function mountBookDemo() {
        var dayRow = document.getElementById('bd-day-row');
        var timeRow = document.getElementById('bd-time-row');
        var hidden = document.getElementById('demo-slot');
        if (!dayRow || !timeRow || !hidden || dayRow.getAttribute('data-mac-slot')) return;
        dayRow.setAttribute('data-mac-slot', '1');
        build({
            dayRow: dayRow, timeRow: timeRow, hidden: hidden,
            note: document.querySelector('.bd-slot-note'),
            classes: { chip: 'bd-chip', day: 'bd-day-chip', time: 'bd-time-chip' },
            startOffset: 1, days: 7
        });
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mountBookDemo);
    else mountBookDemo();
})();
