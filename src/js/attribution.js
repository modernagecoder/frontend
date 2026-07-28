/**
 * LEAD ATTRIBUTION - FIRST TOUCH CAPTURE
 *
 * Records where a visitor came from so that when they eventually fill in a
 * form, the admin panel can say which page earned the lead.
 *
 * WHY FIRST TOUCH
 * A parent typically lands on a blog post or a city page from Google, reads a
 * few pages, and only then submits from /book-demo or the callback modal.
 * Crediting /book-demo would hide the page that actually did the work, so we
 * remember the FIRST page of the visit and keep it for 90 days, while also
 * reporting the page the form was submitted from. Both are useful and they are
 * usually different.
 *
 * This is loaded on every page automatically - scripts/inline-components.js
 * injects it at build time - so no individual page needs editing.
 *
 * Deliberately small, dependency-free and ES5, matching the other site scripts.
 * It stores nothing that identifies a person: only page paths and the referring
 * site, the same information already in any server access log.
 */
(function () {
    'use strict';

    var STORAGE_KEY = 'mac_attr';

    // After this long, a returning visitor counts as a fresh first touch rather
    // than being credited to a page they saw last spring.
    var TTL_DAYS = 90;

    // Cap on the stored page trail. Enough to see the path a parent took
    // without letting a long browsing session bloat every lead record.
    var MAX_JOURNEY = 10;

    var currentPath = window.location.pathname + window.location.search;

    /**
     * localStorage can throw outright in private browsing modes and in
     * embedded webviews. Every access is wrapped so a storage failure quietly
     * degrades attribution instead of throwing on a page with a lead form.
     */
    function readStore() {
        try {
            return JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || null;
        } catch (e) {
            return null;
        }
    }

    function writeStore(value) {
        try {
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
        } catch (e) {
            /* storage unavailable - attribution falls back to this page only */
        }
    }

    function isExpired(store) {
        if (!store || !store.firstSeenAt) return true;
        var seen = new Date(store.firstSeenAt).getTime();
        if (isNaN(seen)) return true;
        return (Date.now() - seen) > (TTL_DAYS * 24 * 60 * 60 * 1000);
    }

    var store = readStore();

    if (isExpired(store)) {
        store = {
            landingPage: currentPath,
            // On the first page of a visit this is the external site that sent
            // them. On later pages it would be our own domain, which is why it
            // is only captured when the record is created.
            referrer: document.referrer || '',
            firstSeenAt: new Date().toISOString(),
            journey: []
        };
    }

    // Append this page to the trail, ignoring reloads and repeat views of the
    // same page so the trail stays readable.
    var journey = store.journey || [];
    if (journey[journey.length - 1] !== currentPath) {
        journey.push(currentPath);
        if (journey.length > MAX_JOURNEY) {
            journey = journey.slice(-MAX_JOURNEY);
        }
    }
    store.journey = journey;

    writeStore(store);

    /**
     * LEAD ENDPOINTS
     *
     * Same shape as the list in country-code-selector.js, which already
     * augments these requests with the caller's country. Kept narrow on
     * purpose: only lead submissions are touched, never payments or any other
     * API call.
     */
    var LEAD_ENDPOINT_RE = /\/api\/(contact|callback|business[-_]?solution|corporate[-_]?training)\b/i;

    /**
     * ADD ATTRIBUTION TO A REQUEST BODY
     *
     * Returns the body unchanged if it is not JSON, is not an object, or
     * already carries attribution - so a page that sends its own attribution
     * explicitly always wins over this automatic path.
     */
    function augmentBody(body) {
        if (typeof body !== 'string') return body;

        var data;
        try {
            data = JSON.parse(body);
        } catch (e) {
            return body;
        }

        if (!data || typeof data !== 'object' || Array.isArray(data)) return body;
        if (data.attribution) return body;

        data.attribution = window.MACAttribution.get();
        return JSON.stringify(data);
    }

    /**
     * FETCH HOOK
     *
     * The site has 232 pages with a lead form, each with its own inline submit
     * handler. Editing every one of them would be a large change with a large
     * chance of breaking a working form, so instead we intercept the request on
     * its way out - the same approach country-code-selector.js already uses to
     * attach the caller's country.
     *
     * Wrapped in try/catch throughout: a tracking failure must never stop a
     * parent from submitting an enquiry.
     */
    function installFetchHook() {
        if (typeof window.fetch !== 'function') return;
        if (window.__macAttrFetchHooked) return;
        window.__macAttrFetchHooked = true;

        var origFetch = window.fetch.bind(window);

        window.fetch = function (input, init) {
            try {
                var url = typeof input === 'string' ? input : (input && input.url) || '';
                if (LEAD_ENDPOINT_RE.test(url) && init && init.body) {
                    init.body = augmentBody(init.body);
                }
            } catch (e) {
                /* never break the original request */
            }
            return origFetch(input, init);
        };
    }

    window.MACAttribution = {

        /**
         * Returns the attribution payload to send with a lead form.
         * Safe to call at any time; never throws.
         */
        get: function () {
            var saved = readStore() || {};
            return {
                landingPage: saved.landingPage || currentPath,
                referrer: saved.referrer || '',
                // Where the form was actually submitted from. Read live rather
                // than from storage so it is always this page.
                formPage: window.location.pathname + window.location.search,
                journey: (saved.journey || []).slice(-MAX_JOURNEY),
                firstSeenAt: saved.firstSeenAt || null
            };
        },

        /**
         * Convenience wrapper so wiring a form is a single line:
         *
         *   body: JSON.stringify(MACAttribution.attach(formData))
         *
         * Returns the same object with an `attribution` key added. If anything
         * goes wrong it returns the payload untouched - a tracking problem must
         * never stop a parent submitting an enquiry.
         */
        attach: function (payload) {
            try {
                payload = payload || {};
                payload.attribution = window.MACAttribution.get();
            } catch (e) {
                /* leave payload as-is */
            }
            return payload;
        }
    };

    // Install after MACAttribution exists, since the hook calls into it.
    installFetchHook();
})();
