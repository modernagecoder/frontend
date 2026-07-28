/**
 * DEMO SLOT PICKER (shared)
 *
 * Injected on every page by scripts/inline-components.js, exactly like
 * attribution.js.
 *
 * WHY ITS OWN FILE
 * The callback modal is driven by callback-modal.js on most pages, but the
 * homepage has callback-modal.js commented out and uses its own copy inside
 * mainbundle.js instead. Putting the picker in either file would mean keeping
 * two copies of it in step - the same duplication that has already caused bugs
 * between those two files. One shared file, two callers.
 */
/**
 * OPTIONAL DEMO SLOT PICKER
 *
 * Lets a parent say when they would like their free demo, instead of the team
 * playing phone tag to find a time.
 *
 * BUILT IN JAVASCRIPT, NOT HTML, ON PURPOSE
 * The callback modal's markup is inlined into 438 pages at build time, so
 * adding fields to the HTML would mean editing every one of them. Injecting the
 * picker into the existing #callbackForm at runtime reaches all of them at once
 * and keeps the markup in components/nav.html unchanged.
 *
 * The value written is deliberately the SAME string format the /book-demo
 * picker produces ("Tue, 29 Jul, 06:00 pm IST"), so the server parses both with
 * one function.
 *
 * Kept optional throughout. The modal works because it asks for almost nothing,
 * and a required time field would cost more callbacks than it gains.
 */
(function () {
    var IST_TZ = 'Asia/Kolkata';
    var DEMO_HOURS_IST = { start: 10, end: 20 };
    var DAYS_AHEAD = 5;

    function fmt(dt, tz, opts) {
        var o = {};
        for (var k in opts) if (opts.hasOwnProperty(k)) o[k] = opts[k];
        if (tz) o.timeZone = tz;
        try {
            return new Intl.DateTimeFormat('en-GB', o).format(dt);
        } catch (e) {
            return '';
        }
    }

    function istDate(base, hour) {
        // hour:00 IST on base's calendar date. IST is UTC+5:30.
        return new Date(Date.UTC(base.getFullYear(), base.getMonth(), base.getDate(), hour - 5, -30));
    }

    function injectStyles() {
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
     * Builds the picker and inserts it above the submit button.
     * Safe to call repeatedly - it returns early once built.
     */
    window.__macBuildCallbackSlotPicker = function () {
        var form = document.getElementById('callbackForm');
        if (!form) return;
        if (form.querySelector('.mac-cbslot')) return;

        injectStyles();

        var localTz = '';
        try { localTz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch (e) { }
        var isIST = localTz === 'Asia/Kolkata' || localTz === 'Asia/Calcutta';

        var wrap = document.createElement('div');
        wrap.className = 'mac-cbslot';

        var label = document.createElement('p');
        label.className = 'mac-cbslot-label';
        label.textContent = 'Prefer a time for your free demo? (optional)';

        var dayRow = document.createElement('div');
        dayRow.className = 'mac-cbslot-row';

        var timeRow = document.createElement('div');
        timeRow.className = 'mac-cbslot-row';
        timeRow.style.display = 'none';
        timeRow.style.marginTop = '6px';

        var hidden = document.createElement('input');
        hidden.type = 'hidden';
        hidden.id = 'callbackDemoSlot';

        var clear = document.createElement('button');
        clear.type = 'button';
        clear.className = 'mac-cbslot-clear';
        clear.textContent = 'Clear selected time';
        clear.style.display = 'none';

        var selectedDay = null;
        var selectedTime = null;

        function writeSlot() {
            if (selectedDay && selectedTime) {
                var dayLabel = fmt(selectedDay, IST_TZ, { weekday: 'short', day: 'numeric', month: 'short' });
                hidden.value = dayLabel + ', ' + selectedTime.ist + ' IST' +
                    (isIST ? '' : ' (' + selectedTime.local + ' ' + localTz + ')');
                clear.style.display = 'block';
            } else {
                hidden.value = '';
                clear.style.display = 'none';
            }
        }

        function renderTimes() {
            timeRow.innerHTML = '';
            if (!selectedDay) { timeRow.style.display = 'none'; return; }
            timeRow.style.display = 'flex';

            for (var h = DEMO_HOURS_IST.start; h <= DEMO_HOURS_IST.end; h++) {
                (function (hour) {
                    var dt = istDate(selectedDay, hour);
                    var istLabel = fmt(dt, IST_TZ, { hour: '2-digit', minute: '2-digit', hour12: true });
                    var localLabel = fmt(dt, null, { hour: '2-digit', minute: '2-digit', hour12: true });

                    var btn = document.createElement('button');
                    btn.type = 'button';
                    btn.className = 'mac-cbslot-chip';
                    btn.innerHTML = '<b>' + istLabel + ' IST</b>' +
                        (isIST ? '' : '<span>' + localLabel + ' your time</span>');

                    btn.addEventListener('click', function () {
                        selectedTime = { ist: istLabel, local: localLabel };
                        var chips = timeRow.querySelectorAll('.mac-cbslot-chip');
                        for (var i = 0; i < chips.length; i++) chips[i].classList.remove('active');
                        btn.classList.add('active');
                        writeSlot();
                    });

                    timeRow.appendChild(btn);
                })(h);
            }
        }

        var now = new Date();
        for (var i = 1; i <= DAYS_AHEAD; i++) {
            (function (offset) {
                var d = new Date(now.getFullYear(), now.getMonth(), now.getDate() + offset);
                var btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'mac-cbslot-chip';
                btn.innerHTML = '<b>' + fmt(d, null, { weekday: 'short' }) + '</b><span>' +
                    fmt(d, null, { day: 'numeric', month: 'short' }) + '</span>';

                btn.addEventListener('click', function () {
                    selectedDay = d;
                    selectedTime = null;
                    var chips = dayRow.querySelectorAll('.mac-cbslot-chip');
                    for (var j = 0; j < chips.length; j++) chips[j].classList.remove('active');
                    btn.classList.add('active');
                    renderTimes();
                    writeSlot();
                });

                dayRow.appendChild(btn);
            })(i);
        }

        clear.addEventListener('click', function () {
            selectedDay = null;
            selectedTime = null;
            var chips = wrap.querySelectorAll('.mac-cbslot-chip');
            for (var k = 0; k < chips.length; k++) chips[k].classList.remove('active');
            timeRow.style.display = 'none';
            writeSlot();
        });

        wrap.appendChild(label);
        wrap.appendChild(dayRow);
        wrap.appendChild(timeRow);
        wrap.appendChild(clear);
        wrap.appendChild(hidden);

        // Sit above the submit button so the button stays the last thing.
        var submitBtn = document.getElementById('callbackSubmitBtn');
        if (submitBtn && submitBtn.parentNode === form) {
            form.insertBefore(wrap, submitBtn);
        } else {
            form.appendChild(wrap);
        }
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
})();
