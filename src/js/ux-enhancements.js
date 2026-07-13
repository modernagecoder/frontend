/**
 * ux-enhancements.js — Phase 4 + 6 UX Flow Improvements
 * Modern Age Coders — universal enhancements for all pages.
 *
 * Adds focused UX wins without touching any existing markup or behavior:
 *   1. Back-to-top button (appears after scrolling past fold) — ALL pages
 *   2. Try-Coding form auto-save (sessionStorage, prevents data loss) — homepage
 *   3. Callback modal focus trapping + Escape to close — ALL pages with the modal
 *   4. Sticky mobile CTA bar (mobile only, "Book Free Demo") — homepage + landing pages
 *   5. Active section highlighting in nav (subtle indicator as user scrolls)
 *
 * Loaded with defer so it never blocks rendering. Wrapped in an IIFE to
 * keep the global scope clean. Each feature is independently guarded so
 * a missing element never breaks the others.
 */
(function () {
    'use strict';

    // Page type detection — used to scope features that should only run on
    // certain pages (e.g. sticky mobile CTA on homepage and landing pages).
    var bodyClass = document.body.className || '';
    var isHomepage = /\bindex-page\b/.test(bodyClass);
    var isLanding = /\b(best-coding-page|landing-page|book-demo-page)\b/.test(bodyClass);
    var showStickyCTA = isHomepage || isLanding;

    // Wait for DOMContentLoaded so we can safely query elements.
    function ready(fn) {
        if (document.readyState !== 'loading') return fn();
        document.addEventListener('DOMContentLoaded', fn, { once: true });
    }

    // ──────────────────────────────────────────────────────────
    // 1. BACK-TO-TOP BUTTON
    // ──────────────────────────────────────────────────────────
    function initBackToTop() {
        var btn = document.createElement('button');
        btn.id = 'mac-back-to-top';
        btn.type = 'button';
        btn.setAttribute('aria-label', 'Back to top');
        btn.innerHTML =
            '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
            '<polyline points="18 15 12 9 6 15"></polyline>' +
            '</svg>';
        btn.addEventListener('click', function () {
            // Use Lenis if available for smooth branded scroll, otherwise native.
            if (window.lenis && typeof window.lenis.scrollTo === 'function') {
                window.lenis.scrollTo(0, { duration: 1.2 });
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
        document.body.appendChild(btn);

        // Show after scrolling past 60% of one viewport
        var threshold = window.innerHeight * 0.6;
        var ticking = false;
        function update() {
            var shown = window.scrollY > threshold;
            btn.classList.toggle('is-visible', shown);
            ticking = false;
        }
        window.addEventListener('scroll', function () {
            if (!ticking) {
                requestAnimationFrame(update);
                ticking = true;
            }
        }, { passive: true });
        update();
    }

    // ──────────────────────────────────────────────────────────
    // 2. FORM AUTO-SAVE — Try Coding form (homepage only)
    // ──────────────────────────────────────────────────────────
    function initFormAutoSave() {
        if (!isHomepage) return;
        var form = document.querySelector('#contact form, #contact, .try-coding-form');
        if (!form || !form.querySelectorAll) return;

        var inputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], textarea');
        if (!inputs.length) return;

        var STORAGE_KEY = 'mac-try-coding-form-v1';
        var saved = {};
        try {
            saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '{}');
        } catch (e) { saved = {}; }

        // Restore saved values
        inputs.forEach(function (input, i) {
            var key = input.name || input.id || 'field-' + i;
            if (saved[key] && !input.value) {
                input.value = saved[key];
            }
        });

        // Save on input (debounced)
        var saveTimer;
        function save() {
            clearTimeout(saveTimer);
            saveTimer = setTimeout(function () {
                var data = {};
                inputs.forEach(function (input, i) {
                    var key = input.name || input.id || 'field-' + i;
                    if (input.value && input.value.trim()) {
                        data[key] = input.value;
                    }
                });
                try {
                    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
                } catch (e) { /* quota or storage disabled — fail silently */ }
            }, 300);
        }
        inputs.forEach(function (input) {
            input.addEventListener('input', save, { passive: true });
        });

        // Clear on successful submit
        form.addEventListener('submit', function () {
            try { sessionStorage.removeItem(STORAGE_KEY); } catch (e) { }
        });
    }

    // ──────────────────────────────────────────────────────────
    // 3. CALLBACK MODAL FOCUS TRAPPING + ESC TO CLOSE
    // ──────────────────────────────────────────────────────────
    function initModalFocusTrap() {
        var modal = document.getElementById('callbackModalOverlay');
        if (!modal) return;

        var lastFocused = null;
        var focusableSelector =
            'a[href], button:not([disabled]), textarea:not([disabled]), ' +
            'input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

        // Detect when the modal opens (style.display changes from none)
        function isOpen() {
            return getComputedStyle(modal).display !== 'none';
        }

        // Use a MutationObserver on the modal's style attribute to detect open/close
        var observer = new MutationObserver(function () {
            if (isOpen()) onOpen();
            else onClose();
        });
        observer.observe(modal, { attributes: true, attributeFilter: ['style', 'class'] });

        function onOpen() {
            lastFocused = document.activeElement;
            // Focus the first focusable element inside the modal
            var first = modal.querySelector(focusableSelector);
            if (first) setTimeout(function () { first.focus(); }, 10);
            document.addEventListener('keydown', handleKey);
        }

        function onClose() {
            document.removeEventListener('keydown', handleKey);
            if (lastFocused && typeof lastFocused.focus === 'function') {
                try { lastFocused.focus(); } catch (e) { }
            }
        }

        function handleKey(e) {
            if (e.key === 'Escape' || e.keyCode === 27) {
                if (typeof window.closeCallbackModal === 'function') {
                    window.closeCallbackModal();
                }
                e.preventDefault();
                return;
            }
            if (e.key !== 'Tab' && e.keyCode !== 9) return;

            var focusable = Array.prototype.slice.call(modal.querySelectorAll(focusableSelector))
                .filter(function (el) { return el.offsetParent !== null; });
            if (!focusable.length) return;

            var first = focusable[0];
            var last = focusable[focusable.length - 1];
            if (e.shiftKey) {
                if (document.activeElement === first) {
                    last.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === last) {
                    first.focus();
                    e.preventDefault();
                }
            }
        }
    }

    // ──────────────────────────────────────────────────────────
    // 4. STICKY MOBILE CTA BAR — homepage + landing pages only
    // ──────────────────────────────────────────────────────────
    function initStickyMobileCTA() {
        if (!showStickyCTA) return;
        // Only render on mobile (sized via CSS, but we also guard JS-side)
        if (window.matchMedia && !window.matchMedia('(max-width: 768px)').matches) return;

        var bar = document.createElement('div');
        bar.id = 'mac-sticky-cta';
        bar.innerHTML =
            '<a href="/contact" class="mac-sticky-cta__btn" aria-label="Book a free demo class">' +
            '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
            '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>' +
            '</svg>' +
            '<span>Book a Free Demo</span>' +
            '</a>';
        document.body.appendChild(bar);

        // Show after scrolling past hero
        var hero = document.querySelector('.hero-section');
        var threshold = hero ? hero.offsetHeight * 0.7 : 400;
        var ticking = false;
        function update() {
            bar.classList.toggle('is-visible', window.scrollY > threshold);
            ticking = false;
        }
        window.addEventListener('scroll', function () {
            if (!ticking) {
                requestAnimationFrame(update);
                ticking = true;
            }
        }, { passive: true });
        update();
    }

    // ──────────────────────────────────────────────────────────
    // 5. ACTIVE SECTION NAV HIGHLIGHTING
    // ──────────────────────────────────────────────────────────
    function initActiveSectionNav() {
        if (!('IntersectionObserver' in window)) return;

        // Map nav text → section identifier we can match
        var navLinks = document.querySelectorAll('.nav-menu a[href]');
        if (!navLinks.length) return;

        // Find sections that have an id we care about
        var sections = document.querySelectorAll('section[id]');
        if (!sections.length) return;

        var sectionMap = {};
        sections.forEach(function (s) { sectionMap[s.id] = s; });

        // For each nav link, see if its href matches a section id on this page
        var linkToSection = [];
        navLinks.forEach(function (link) {
            var href = link.getAttribute('href') || '';
            var hashMatch = href.match(/#([^?]+)/);
            if (hashMatch && sectionMap[hashMatch[1]]) {
                linkToSection.push({ link: link, sectionId: hashMatch[1] });
            }
        });
        if (!linkToSection.length) return;

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var id = entry.target.id;
                    linkToSection.forEach(function (m) {
                        m.link.classList.toggle('is-current-section', m.sectionId === id);
                    });
                }
            });
        }, {
            rootMargin: '-40% 0px -55% 0px',
            threshold: 0
        });

        linkToSection.forEach(function (m) {
            var sec = sectionMap[m.sectionId];
            if (sec) observer.observe(sec);
        });
    }

    // ──────────────────────────────────────────────────────────
    // 6b. SECTION REVEAL — global IntersectionObserver for
    // .section elements that start at opacity:0 and need
    // .animate-in to become visible.
    // ──────────────────────────────────────────────────────────
    function initSectionReveal() {
        if (!('IntersectionObserver' in window)) {
            // Fallback: show all sections immediately
            document.querySelectorAll('.section').forEach(function (s) {
                s.classList.add('animate-in');
            });
            return;
        }
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.05 });

        document.querySelectorAll('.section').forEach(function (s) {
            if (!s.classList.contains('animate-in')) {
                observer.observe(s);
            }
        });
    }

    // ──────────────────────────────────────────────────────────
    // INIT — kick everything off when DOM is ready
    // ──────────────────────────────────────────────────────────
    ready(function () {
        try { initBackToTop(); } catch (e) { }
        try { initFormAutoSave(); } catch (e) { }
        try { initModalFocusTrap(); } catch (e) { }
        try { initStickyMobileCTA(); } catch (e) { }
        try { initActiveSectionNav(); } catch (e) { }
        // Dev branch badge retired — the Phase 1-6 overhaul shipped. (kept fn below, no longer invoked)
        try { initSectionReveal(); } catch (e) { }
    });

    // ──────────────────────────────────────────────────────────
    // 6. DEV BRANCH BADGE — only on localhost
    // Tiny pill in the bottom-left corner so you can instantly
    // tell which branch (and which Phase set) you're viewing.
    // Click to dismiss for the rest of the session.
    // ──────────────────────────────────────────────────────────
    function initDevBranchBadge() {
        // Only show on local dev — never production
        var host = location.hostname;
        var isLocal = host === 'localhost' ||
            host === '127.0.0.1' ||
            host === '0.0.0.0' ||
            /^192\.168\./.test(host) ||
            /^10\./.test(host) ||
            host.endsWith('.local');
        if (!isLocal) return;

        // Don't show if user dismissed it
        try {
            if (sessionStorage.getItem('mac-dev-badge-dismissed') === '1') return;
        } catch (e) { }

        var badge = document.createElement('div');
        badge.id = 'mac-dev-badge';
        badge.setAttribute('aria-hidden', 'true');
        badge.innerHTML =
            '<span class="mac-dev-badge__dot" aria-hidden="true"></span>' +
            '<span class="mac-dev-badge__label">UI/UX OVERHAUL</span>' +
            '<span class="mac-dev-badge__phase">Phases 1-6</span>' +
            '<button class="mac-dev-badge__close" type="button" aria-label="Hide dev badge">×</button>';

        var style = document.createElement('style');
        style.id = 'mac-dev-badge-style';
        style.textContent =
            '#mac-dev-badge{' +
            'position:fixed;left:14px;bottom:14px;z-index:99999;' +
            'display:flex;align-items:center;gap:8px;' +
            'padding:8px 10px 8px 12px;' +
            'font:600 11px/1 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;' +
            'letter-spacing:0.05em;text-transform:uppercase;color:#fff;' +
            'background:linear-gradient(135deg,rgba(124,58,237,0.95),rgba(168,85,247,0.95));' +
            'border:1px solid rgba(255,255,255,0.2);border-radius:9999px;' +
            'box-shadow:0 8px 24px rgba(0,0,0,0.4),0 0 20px rgba(168,85,247,0.4);' +
            'backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);' +
            'animation:macDevBadgeIn 0.4s cubic-bezier(0.34,1.56,0.64,1);' +
            'pointer-events:auto;user-select:none;}' +
            '#mac-dev-badge .mac-dev-badge__dot{' +
            'width:8px;height:8px;border-radius:50%;' +
            'background:#10b981;box-shadow:0 0 8px rgba(16,185,129,0.8);' +
            'animation:macDevBadgePulse 2s ease-in-out infinite;}' +
            '#mac-dev-badge .mac-dev-badge__phase{' +
            'opacity:0.85;font-weight:500;padding-left:6px;' +
            'border-left:1px solid rgba(255,255,255,0.3);}' +
            '#mac-dev-badge .mac-dev-badge__close{' +
            'all:unset;cursor:pointer;width:18px;height:18px;' +
            'display:inline-flex;align-items:center;justify-content:center;' +
            'border-radius:50%;font-size:14px;font-weight:700;line-height:1;' +
            'opacity:0.7;transition:opacity 0.2s,background 0.2s;}' +
            '#mac-dev-badge .mac-dev-badge__close:hover{' +
            'opacity:1;background:rgba(255,255,255,0.15);}' +
            '@keyframes macDevBadgeIn{' +
            'from{opacity:0;transform:translateY(20px) scale(0.85);}' +
            'to{opacity:1;transform:none;}}' +
            '@keyframes macDevBadgePulse{' +
            '0%,100%{opacity:1;transform:scale(1);}' +
            '50%{opacity:0.6;transform:scale(0.85);}}' +
            '@media (max-width:480px){' +
            '#mac-dev-badge{left:10px;bottom:10px;padding:6px 8px 6px 10px;font-size:10px;}' +
            '#mac-dev-badge .mac-dev-badge__phase{display:none;}}';
        document.head.appendChild(style);
        document.body.appendChild(badge);

        // Click × to dismiss for the rest of this session
        badge.querySelector('.mac-dev-badge__close').addEventListener('click', function () {
            badge.style.transition = 'opacity 0.2s, transform 0.2s';
            badge.style.opacity = '0';
            badge.style.transform = 'translateY(20px) scale(0.85)';
            setTimeout(function () { badge.remove(); }, 200);
            try { sessionStorage.setItem('mac-dev-badge-dismissed', '1'); } catch (e) { }
        });
    }
})();
