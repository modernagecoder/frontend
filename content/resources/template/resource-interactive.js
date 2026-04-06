/**
 * Resource Interactive JS
 * Handles collapsible sections, code copy buttons, and smooth scroll for TOC
 */

(function () {
    'use strict';

    // --- Collapsible Sections ---
    function initCollapsibles() {
        const toggleButtons = document.querySelectorAll('.collapsible-toggle');
        toggleButtons.forEach(function (btn) {
            btn.addEventListener('click', function () {
                const targetId = btn.getAttribute('data-target');
                const target = document.getElementById(targetId);
                if (!target) return;

                const isOpen = target.classList.toggle('is-open');
                const labelClosed = btn.getAttribute('data-label-closed') || 'Show';
                const labelOpen = btn.getAttribute('data-label-open') || 'Hide';
                btn.textContent = isOpen ? labelOpen : labelClosed;
                btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            });
        });
    }

    // --- Code Copy Buttons ---
    function initCodeCopyButtons() {
        const codeExamples = document.querySelectorAll('.code-example pre');
        codeExamples.forEach(function (pre) {
            const copyBtn = document.createElement('button');
            copyBtn.className = 'code-copy-btn';
            copyBtn.textContent = 'Copy';
            copyBtn.type = 'button';
            copyBtn.setAttribute('aria-label', 'Copy code to clipboard');

            copyBtn.addEventListener('click', function () {
                const code = pre.querySelector('code');
                const text = code ? code.textContent : pre.textContent;

                navigator.clipboard.writeText(text).then(function () {
                    copyBtn.textContent = 'Copied!';
                    copyBtn.classList.add('copied');
                    setTimeout(function () {
                        copyBtn.textContent = 'Copy';
                        copyBtn.classList.remove('copied');
                    }, 2000);
                }).catch(function () {
                    // Fallback for older browsers
                    var textarea = document.createElement('textarea');
                    textarea.value = text;
                    textarea.style.position = 'fixed';
                    textarea.style.opacity = '0';
                    document.body.appendChild(textarea);
                    textarea.select();
                    try {
                        document.execCommand('copy');
                        copyBtn.textContent = 'Copied!';
                        copyBtn.classList.add('copied');
                        setTimeout(function () {
                            copyBtn.textContent = 'Copy';
                            copyBtn.classList.remove('copied');
                        }, 2000);
                    } catch (e) {
                        copyBtn.textContent = 'Error';
                    }
                    document.body.removeChild(textarea);
                });
            });

            pre.style.position = 'relative';
            pre.appendChild(copyBtn);
        });
    }

    // --- Smooth Scroll for TOC Links ---
    function initSmoothScroll() {
        const tocLinks = document.querySelectorAll('.toc-list a[href^="#"], a.practice-link[href^="#"]');
        tocLinks.forEach(function (link) {
            link.addEventListener('click', function (e) {
                const targetId = link.getAttribute('href');
                if (!targetId || targetId === '#') return;

                const target = document.querySelector(targetId);
                if (!target) return;

                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });

                // Update URL hash without jumping
                if (history.pushState) {
                    history.pushState(null, null, targetId);
                }
            });
        });
    }

    // --- Initialize ---
    function init() {
        initCollapsibles();
        initCodeCopyButtons();
        initSmoothScroll();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
