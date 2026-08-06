/* Strip behaviour for the course-page "vibe zone" (moments photos, review notes,
   feedback videos) — vanilla port of the Wall of Love SnapCarousel.
   Binds every [data-mac-strip]; the strips work without JS as native horizontal
   scrollers. Adds:
   - seamless infinite loop (content cloned once, scrollLeft wrapped inside the
     middle band so user momentum and drift never hit an edge)
   - gentle auto-drift ONLY where data-mac-strip="drift" (never on videos: a row
     that moves while you watch is hostile), pausing on hover/touch/drag
   - mouse drag-to-scroll with click suppression
   - arrow buttons (.mac-arrow inside the same .mac-shell)
   - click-to-play for [data-mac-videos] .cd-vid-play (course.html only; course
     detail pages already bind .cd-vid-play in their own inline script)
   Respects prefers-reduced-motion (no drift). */
(function () {
    'use strict';

    var DRIFT_PX_PER_SEC = 32;     // time-based so speed is identical at any refresh rate
    var RESUME_MS = 2500;          // idle time before drift resumes
    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function initStrip(strip) {
        var shell = strip.closest('.mac-shell') || strip.parentElement;
        var wantsDrift = strip.getAttribute('data-mac-strip') === 'drift';
        var pausedUntil = 0;
        var hovered = false;
        var drag = null;

        // Clone the full set once for the wrap illusion.
        Array.prototype.slice.call(strip.children).forEach(function (node) {
            var copy = node.cloneNode(true);
            copy.setAttribute('aria-hidden', 'true');
            copy.querySelectorAll('button').forEach(function (b) { b.tabIndex = -1; });
            strip.appendChild(copy);
        });

        function half() { return strip.scrollWidth / 2; }
        function loopable() { return half() > strip.clientWidth * 1.5; }

        // Keep scrollLeft in [0.25W, 1.25W): x and x±W show identical pixels.
        function wrap() {
            if (!loopable()) return;
            var W = half();
            if (strip.scrollLeft < W * 0.25) strip.scrollLeft += W;
            else if (strip.scrollLeft >= W * 1.25) strip.scrollLeft -= W;
        }

        function pause() { pausedUntil = Date.now() + RESUME_MS; }

        // Start inside the wrappable band.
        if (loopable()) strip.scrollLeft = half() * 0.3;

        strip.addEventListener('scroll', wrap, { passive: true });
        strip.addEventListener('wheel', pause, { passive: true });
        strip.addEventListener('touchstart', pause, { passive: true });
        strip.addEventListener('touchmove', pause, { passive: true });
        strip.addEventListener('mouseenter', function () { hovered = true; });
        strip.addEventListener('mouseleave', function () { hovered = false; });

        // Mouse drag-to-scroll (touch scrolls natively).
        strip.addEventListener('pointerdown', function (e) {
            if (e.pointerType !== 'mouse' || e.button !== 0) return;
            drag = { startX: e.clientX, startLeft: strip.scrollLeft, moved: false };
            pause();
        });
        strip.addEventListener('pointermove', function (e) {
            if (!drag) return;
            var dx = e.clientX - drag.startX;
            if (Math.abs(dx) > 5 && !drag.moved) {
                drag.moved = true;
                strip.classList.add('is-dragging');
                try { strip.setPointerCapture(e.pointerId); } catch (err) { /* no-op */ }
            }
            if (drag.moved) {
                strip.scrollLeft = drag.startLeft - dx;
                wrap();
            }
        });
        function endDrag(e) {
            if (drag && drag.moved) {
                strip.classList.remove('is-dragging');
                try { strip.releasePointerCapture(e.pointerId); } catch (err) { /* no-op */ }
            }
            // let the click-capture below read drag.moved first, then clear
            requestAnimationFrame(function () { drag = null; });
        }
        strip.addEventListener('pointerup', endDrag);
        strip.addEventListener('pointercancel', endDrag);
        // a drag must not activate links/buttons under the pointer
        strip.addEventListener('click', function (e) {
            if (drag && drag.moved) { e.preventDefault(); e.stopPropagation(); }
        }, true);

        // Arrow buttons.
        if (shell) {
            shell.querySelectorAll('.mac-arrow').forEach(function (btn) {
                btn.addEventListener('click', function () {
                    pause();
                    var dir = btn.classList.contains('next') ? 1 : -1;
                    strip.scrollBy({ left: dir * strip.clientWidth * 0.75, behavior: 'smooth' });
                });
            });
        }

        // Auto-drift. Time-based (not per-frame) so the speed is the same at any
        // refresh rate, with the delta clamped so a throttled/occluded tab never
        // lurches on wake. Whole CSS pixels only: browsers quantize scrollLeft to
        // device pixels (0.8px at 125% Windows scaling), so sub-pixel increments
        // round away to nothing and the strip stalls.
        if (wantsDrift && !reduced) {
            var acc = 0;
            var last = performance.now();
            (function tick(now) {
                now = now || performance.now();
                var dt = Math.min(now - last, 100);
                last = now;
                if (!document.hidden && !hovered && !drag && Date.now() > pausedUntil) {
                    acc += (dt / 1000) * DRIFT_PX_PER_SEC;
                    if (acc >= 1) {
                        var step = Math.floor(acc);
                        acc -= step;
                        strip.scrollLeft += step;
                        wrap();
                    }
                }
                requestAnimationFrame(tick);
            })();
        }
    }

    // Click-to-play for video strips that have no page-local handler (course.html).
    // Course detail pages bind .cd-vid-play themselves, so this stays scoped to
    // [data-mac-videos] — never widen it or those pages double-bind.
    function initVideos(section) {
        section.querySelectorAll('.cd-vid-play').forEach(function (btn) {
            btn.addEventListener('click', function () {
                var id = btn.getAttribute('data-yt');
                if (!id) return;
                var f = document.createElement('iframe');
                f.setAttribute('src', 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0');
                f.setAttribute('title', btn.getAttribute('data-title') || 'Feedback video');
                f.setAttribute('loading', 'lazy');
                f.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
                f.setAttribute('allowfullscreen', '');
                var holder = btn.parentNode;
                holder.innerHTML = '';
                holder.appendChild(f);
            });
        });
    }

    function boot() {
        document.querySelectorAll('[data-mac-strip]').forEach(initStrip);
        document.querySelectorAll('[data-mac-videos]').forEach(initVideos);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot);
    } else {
        boot();
    }
})();
