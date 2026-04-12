/**
 * hover-prefetch.js — Prefetches internal links on hover.
 * Phase 3 Performance.
 *
 * When the user hovers an internal link, we inject a <link rel="prefetch">
 * for that URL. This warms the browser cache so the click-through navigation
 * is near-instant. Costs are tiny (~0 per page until interaction) and the
 * UX win is significant.
 *
 * Safety: only prefetches same-origin links, only once per URL, only if
 * the connection isn't slow / data-saver isn't enabled.
 */
(function () {
    'use strict';

    // Bail on slow connections / data saver mode
    var conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (conn) {
        if (conn.saveData) return;
        if (/2g/.test(conn.effectiveType || '')) return;
    }

    var prefetched = new Set();
    var origin = location.origin;

    function prefetch(url) {
        if (prefetched.has(url)) return;
        prefetched.add(url);
        var link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = url;
        link.as = 'document';
        document.head.appendChild(link);
    }

    function shouldPrefetch(href) {
        if (!href) return false;
        if (href.charAt(0) === '#') return false;
        if (href.indexOf('mailto:') === 0) return false;
        if (href.indexOf('tel:') === 0) return false;
        if (href.indexOf('javascript:') === 0) return false;
        if (href.indexOf('whatsapp') !== -1) return false;
        if (href.indexOf('wa.me') !== -1) return false;
        try {
            var u = new URL(href, location.href);
            if (u.origin !== origin) return false;
            if (u.pathname === location.pathname) return false;
            return true;
        } catch (e) {
            return false;
        }
    }

    function handleHover(e) {
        var link = e.target.closest && e.target.closest('a[href]');
        if (!link) return;
        var href = link.getAttribute('href');
        if (!shouldPrefetch(href)) return;
        prefetch(link.href);
    }

    // Use mouseover for desktop hover, and touchstart for mobile (when user
    // starts to tap, it's a strong signal they're about to navigate).
    document.addEventListener('mouseover', handleHover, { passive: true });
    document.addEventListener('touchstart', handleHover, { passive: true });
})();
