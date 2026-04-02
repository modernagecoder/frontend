/**
 * Winter Coding Camp — Arctic Aurora Edition
 * Modern Age Coders · 2026
 * Snowfall · FAQ Accordion · Scroll Reveal · Nav Scroll
 */

document.addEventListener('DOMContentLoaded', function () {
    initSnowfall();
    initNavScroll();
    initScrollReveal();
    initSmoothScroll();
    initFAQ();
    initCardTilt();
    respectReducedMotion();
});

/* ─────────────────────────────────────────────────────────
   SNOWFALL
   Creates CSS-animated snowflake characters at random
   positions and speeds for a performant, pure-DOM effect.
───────────────────────────────────────────────────────── */
function initSnowfall() {
    const FLAKES = ['❄', '❅', '❆', '✦', '·', '∗'];
    const COUNT = window.innerWidth < 600 ? 20 : 40;

    for (let i = 0; i < COUNT; i++) {
        const el = document.createElement('span');
        el.className = 'snowflake';
        el.textContent = FLAKES[Math.floor(Math.random() * FLAKES.length)];

        const size     = Math.random() * 14 + 7;      // 7–21 px
        const left     = Math.random() * 100;          // 0–100 vw
        const duration = Math.random() * 12 + 8;       // 8–20 s
        const delay    = Math.random() * -22;           // negative = already mid-air
        const opacity  = Math.random() * 0.45 + 0.2;

        el.style.cssText = [
            `left:${left}vw`,
            `font-size:${size}px`,
            `animation-duration:${duration}s`,
            `animation-delay:${delay}s`,
            `opacity:${opacity}`,
        ].join(';');

        document.body.appendChild(el);
    }
}

/* ─────────────────────────────────────────────────────────
   NAV SCROLL — adds .scrolled class after 50px
───────────────────────────────────────────────────────── */
function initNavScroll() {
    const nav = document.querySelector('.winter-nav');
    if (!nav) return;

    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
}

/* ─────────────────────────────────────────────────────────
   SCROLL REVEAL — IntersectionObserver on .reveal elements
───────────────────────────────────────────────────────── */
function initScrollReveal() {
    const elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    elements.forEach(el => observer.observe(el));
}

/* ─────────────────────────────────────────────────────────
   SMOOTH SCROLL — intercept anchor links
───────────────────────────────────────────────────────── */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return;
            const target = document.querySelector(href);
            if (!target) return;
            e.preventDefault();
            const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });
}

/* ─────────────────────────────────────────────────────────
   FAQ ACCORDION
───────────────────────────────────────────────────────── */
function initFAQ() {
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item     = btn.closest('.faq-item');
            const isActive = item.classList.contains('active');
            document.querySelectorAll('.faq-item.active').forEach(i => i.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });
}

/* ─────────────────────────────────────────────────────────
   CARD TILT — subtle 3-D on project/program cards
───────────────────────────────────────────────────────── */
function initCardTilt() {
    const cards = document.querySelectorAll('.project-card, .program-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const r   = card.getBoundingClientRect();
            const rx  = ((e.clientY - r.top)  / r.height - 0.5) * -5;
            const ry  = ((e.clientX - r.left) / r.width  - 0.5) *  5;
            card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

/* ─────────────────────────────────────────────────────────
   REDUCED MOTION — honour prefers-reduced-motion
───────────────────────────────────────────────────────── */
function respectReducedMotion() {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    // Remove all snowflakes
    document.querySelectorAll('.snowflake').forEach(el => el.remove());
}
