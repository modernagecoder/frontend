# Creating New Pages — Modern Age Coders Style Guide

This document is the **single source of truth** for creating any new HTML page on the Modern Age Coders site so that it inherits all the Phase 1-6 UI/UX overhaul polish (architecture, visuals, performance, UX, SEO, page-specific elevation).

> **TL;DR for the impatient**: Copy `_template/newpage-starter.html` (or use the table below), set the right `body` class, and you're done. The shared CSS/JS will automatically polish your page.

---

## 1. Decide what kind of page you're building

| Page kind | `body class` | Page CSS to load | Example |
|---|---|---|---|
| **Homepage variant** | `index-page` | `pages/homepage.css` | `/` |
| **About / company** | `about-page` | `pages/about.css` | `/about`, `/our-team` |
| **Pricing / plans** | `pricing-page` | `pages/pricing.css` | `/pricing` |
| **Contact / form** | `contact-page` | `pages/contact.css` | `/contact`, `/book-demo` |
| **Course listing** | `courses-page` | `pages/courses-listing.css` | `/courses`, `/courses/coding/kids` |
| **Course detail** | `course-detail-page` | `pages/course-detail.css` | `/courses/<slug>` (auto-generated) |
| **Blog listing** | `blog-page` | `pages/blog.css` | `/blog` |
| **Blog post** | `blog-detail-page` | `pages/blog.css` | `/blog/<slug>` (auto-generated) |
| **City landing** | `best-coding-page <city>-page` | `pages/landing.css` | `/best-coding-class-in-<city>` |
| **School landing** | `best-coding-page <school>-page` | `pages/landing.css` | `/coding-classes-for-<school>` |
| **FAQ** | `faq-page` | `pages/faq.css` | `/faq` |
| **Anything else** | (your-page-name)`-page` | (none) — `global.css` covers it | `/refund`, `/terms` |

If your page is a brand-new TYPE that doesn't fit any of the above, you may create a new `pages/<name>.css` file. Add the body-class → file mapping to `scripts/inject-phase6-polish.js` so future runs pick it up automatically.

---

## 2. The required `<head>` block

Every new page MUST include this exact block in its `<head>`, just before `</head>`:

```html
<!-- Phase 6 UI/UX Polish -->
<link rel="stylesheet" href="/css/pages/global.css?v=20260411-p6">
<link rel="stylesheet" href="/css/pages/<your-page-css>.css?v=20260411-p6">
<script src="/js/ux-enhancements.js" defer></script>
<script src="/js/hover-prefetch.js" defer></script>
<script>
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function () {
            navigator.serviceWorker.register('/sw.js').catch(function () { });
        });
    }
</script>
```

That's it. The shared CSS gives you typography refinement, branded scrollbar, focus glow, button shimmer, back-to-top button, sticky mobile CTA (on landing/home), service worker caching, hover-prefetch, and modal focus trapping.

If your page doesn't need a page-specific CSS, just omit that one line.

**Better yet:** instead of adding it manually, run:

```bash
node scripts/inject-phase6-polish.js
```

This script auto-detects your `body` class and injects the right block. It is **idempotent** — safe to re-run anytime.

---

## 3. The required `<head>` baseline (SEO, social, performance)

Every new page MUST also have these in `<head>`:

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Concise descriptive title — 50-60 chars | Modern Age Coders</title>

<meta name="robots" content="index, follow">
<meta name="description" content="A 150-160 character pitch that includes 1-2 keywords, value prop, and CTA. Truncates at ~155 chars in Google.">
<meta name="author" content="Modern Age Coders">

<!-- Canonical (always self-referencing unless this is a duplicate page) -->
<link rel="canonical" href="https://learn.modernagecoders.com/your-path">

<!-- hreflang for international (we serve English globally) -->
<link rel="alternate" hreflang="en" href="https://learn.modernagecoders.com/your-path" />
<link rel="alternate" hreflang="en-in" href="https://learn.modernagecoders.com/your-path" />
<link rel="alternate" hreflang="x-default" href="https://learn.modernagecoders.com/your-path" />

<!-- Favicon set -->
<link rel="icon" href="/favicon.ico" type="image/x-icon">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
<link rel="manifest" href="/favicon/site.webmanifest">
<meta name="theme-color" content="#a855f7">

<!-- Open Graph for social sharing -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://learn.modernagecoders.com/your-path">
<meta property="og:title" content="Title — appears as link preview headline (under 95 chars)">
<meta property="og:description" content="A 150-200 char teaser for social shares">
<meta property="og:image" content="https://learn.modernagecoders.com/images/og-modern-age-coders.png">
<meta property="og:site_name" content="Modern Age Coders">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="https://learn.modernagecoders.com/your-path">
<meta name="twitter:title" content="Same as og:title">
<meta name="twitter:description" content="Same as og:description">
<meta name="twitter:image" content="https://learn.modernagecoders.com/images/og-modern-age-coders.png">

<!-- Google site verification (already site-wide; no per-page change needed) -->
<meta name="google-site-verification" content="fpweGaVH4rJIwjSfE5wSdzUGWTYsLz2KFENZxOoX91k" />
```

### Title and description rules

- **Title**: 50–60 characters. Include the primary keyword first, brand at the end. Example: `"Online Coding Classes for Kids (Ages 6-12) | Modern Age Coders"`
- **Meta description**: 150–160 characters. Include 1-2 keywords, the value prop, and a soft CTA. Example: `"Live 1-on-1 coding classes for ages 6-12 with expert instructors. Hands-on Python, Scratch, AI projects. Book a free demo today!"`

---

## 4. JSON-LD structured data — required schemas per page type

Every page should have at least **WebPage + BreadcrumbList**. Add type-specific schemas as listed.

### Universal (every page)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://learn.modernagecoders.com/your-path#webpage",
      "url": "https://learn.modernagecoders.com/your-path",
      "name": "Your Page Title",
      "description": "Same as your meta description",
      "inLanguage": "en",
      "datePublished": "2026-04-11",
      "dateModified": "2026-04-11",
      "isPartOf": { "@id": "https://learn.modernagecoders.com/#website" },
      "breadcrumb": { "@id": "https://learn.modernagecoders.com/your-path#breadcrumb" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://learn.modernagecoders.com/your-path#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://learn.modernagecoders.com/" },
        { "@type": "ListItem", "position": 2, "name": "Your Section", "item": "https://learn.modernagecoders.com/your-section" },
        { "@type": "ListItem", "position": 3, "name": "Current Page" }
      ]
    }
  ]
}
</script>
```

### Course detail page — add Course schema

```json
{
  "@type": "Course",
  "name": "Python Programming Masterclass",
  "description": "From 'Hello World' to AI-Powered Production Applications",
  "provider": {
    "@type": "EducationalOrganization",
    "name": "Modern Age Coders",
    "url": "https://learn.modernagecoders.com"
  },
  "educationalLevel": "Intermediate to Advanced",
  "teaches": ["Python", "OOP", "Web Scraping", "AI Automation"],
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "Online",
    "instructor": { "@type": "Person", "name": "MAC Instructor" }
  },
  "offers": {
    "@type": "Offer",
    "price": "1499",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock",
    "url": "https://learn.modernagecoders.com/courses/python-programming-masterclass-zero-to-advanced-college"
  }
}
```

### Blog post — add Article schema

```json
{
  "@type": "Article",
  "headline": "Your Blog Post Title",
  "description": "Article description",
  "datePublished": "2026-04-11",
  "dateModified": "2026-04-11",
  "author": { "@type": "Person", "name": "Author Name" },
  "publisher": {
    "@type": "Organization",
    "name": "Modern Age Coders",
    "logo": {
      "@type": "ImageObject",
      "url": "https://learn.modernagecoders.com/images/logo.svg"
    }
  },
  "image": "https://learn.modernagecoders.com/images/blog-cover.webp",
  "mainEntityOfPage": "https://learn.modernagecoders.com/blog/your-slug"
}
```

### City/landing page — add LocalBusiness

```json
{
  "@type": "LocalBusiness",
  "name": "Modern Age Coders — Kolkata",
  "image": "https://learn.modernagecoders.com/images/og-modern-age-coders.png",
  "telephone": "+919123366161",
  "email": "contact@modernagecoders.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Kolkata",
    "addressRegion": "WB",
    "addressCountry": "IN"
  },
  "areaServed": "Kolkata",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "247"
  }
}
```

### FAQ page — add FAQPage

```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do classes work?",
      "acceptedAnswer": { "@type": "Answer", "text": "Live 1-on-1 over video call..." }
    }
  ]
}
```

---

## 5. HTML structure — semantic + accessibility

Use semantic HTML5 elements. Every new page MUST have:

```html
<body class="<page-type>-page">

    <!-- Skip link for keyboard users -->
    <a href="#main" class="skip-link">Skip to main content</a>

    <!-- Header / Nav — use the inline build script:  npm run build:inline -->
    <div id="nav-placeholder"></div>

    <main id="main" role="main" aria-label="Concise page name for screen readers">

        <section class="section hero-section" aria-label="Hero — short summary of what this section is">
            <h1>Your H1 — exactly one per page, includes primary keyword</h1>
            ...
        </section>

        <section aria-labelledby="features-heading">
            <h2 id="features-heading">Section Title</h2>
            ...
        </section>

    </main>

    <!-- Footer -->
    <div id="footer-placeholder"></div>

</body>
```

### HTML rules
- **Exactly one `<h1>`** per page; include the primary keyword
- Use `<h2>` → `<h3>` → `<h4>` in order; never skip levels
- Wrap each major content area in `<section>` with `aria-labelledby` (or `aria-label`)
- Use `<article>` for self-contained content (blog posts, course cards)
- Use `<nav>` for any navigation block; mark current page with `aria-current="page"`
- Use `<button>` for actions, `<a>` for navigation
- All interactive elements must be keyboard-reachable

---

## 6. Image rules (zero CLS, fast LCP)

Every `<img>` MUST have:

```html
<img
  src="/images/your-image.webp"
  alt="Descriptive alt text — what's in the image, not 'image of...'"
  width="800"
  height="450"
  loading="lazy"
  decoding="async">
```

### Above-the-fold images (logo, hero) — different rules:
```html
<img
  src="/images/logo.svg"
  alt="Modern Age Coders Logo"
  width="40"
  height="40"
  fetchpriority="high">
```

- **Always** include `width` + `height` (prevents Cumulative Layout Shift)
- **Below the fold**: `loading="lazy" decoding="async"`
- **Above the fold**: `fetchpriority="high"` (no lazy loading)
- **Format priority**: AVIF → WebP → PNG (use `<picture>` for art direction)
- **Logo**: Always SVG (`/images/logo.svg`)
- **Hero/OG images**: 1200×630 px for og:image

---

## 7. CSS rules — DON'T touch shared files

The Phase 1-6 architecture lives in:

```
src/css/
├── tokens.css           ← Design tokens (colors, spacing, type)
├── reset.css            ← Modern CSS reset
├── base.css             ← Body, typography, links
├── layout.css           ← Container, grid, sections
├── components.css       ← .c-btn, .c-card, .c-field, etc.
├── utilities.css        ← .u-text-center, .u-gradient-text, etc.
├── core.css             ← Auto-merged from above (npm run build:core-css)
└── pages/
    ├── global.css       ← Universal polish (loaded by every page)
    ├── homepage.css     ← Homepage-only elevation
    ├── about.css        ← About page elevation
    ├── pricing.css
    ├── contact.css
    ├── courses-listing.css
    ├── course-detail.css
    ├── blog.css
    ├── landing.css
    ├── faq.css
    └── <new-page>.css   ← Add yours here for new page types
```

### Rules:
1. **Never edit `tokens.css`, `reset.css`, `base.css`, `layout.css`, `components.css`, `utilities.css`, or `core.css`** — they are shared across all pages
2. **`global.css`** is shared too — only edit if you want a change to apply to every page
3. **Page-specific styles** go in `pages/<your-page>.css`, scoped to `body.<your-page>-page`
4. **Use the existing tokens**: `var(--color-primary)`, `var(--space-4)`, `var(--shadow-lg)`, `var(--ease-spring)`, etc.
5. **Use the existing components**: `.c-btn--primary`, `.c-card`, `.c-field`, `.l-container`, `.l-section`
6. **Don't use `!important`** — if you find yourself reaching for it, the architecture is fighting you. Use higher specificity instead

### Page-specific CSS template

```css
/**
 * pages/<your-page>.css — <Your Page> elevation
 * Phase 6 Page-by-Page Polish
 */

/* Hero mesh gradient + noise */
body.<your-page>-page .hero-section {
    position: relative;
    isolation: isolate;
}

body.<your-page>-page .hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    pointer-events: none;
    background-image:
        radial-gradient(ellipse 80% 50% at 25% 30%, rgba(168, 85, 247, 0.13) 0%, transparent 60%),
        radial-gradient(ellipse 60% 40% at 78% 25%, rgba(78, 205, 196, 0.09) 0%, transparent 60%),
        radial-gradient(ellipse 50% 50% at 50% 85%, rgba(245, 158, 11, 0.06) 0%, transparent 60%);
}

body.<your-page>-page .hero-section > * {
    position: relative;
    z-index: 1;
}

body.<your-page>-page h1 {
    letter-spacing: -0.04em;
    text-wrap: balance;
}

/* Page-specific component polish goes here */
```

---

## 8. JavaScript rules

The shared `ux-enhancements.js` already provides:
- Back-to-top button
- Modal focus trapping (for any element with id `callbackModalOverlay`)
- Sticky mobile CTA (homepage + landing pages)
- Form auto-save (homepage Try Coding form only)
- Active section nav highlighting

### If you need page-specific JS:

1. Create `src/js/<your-page>.js`
2. Wrap in IIFE: `(function () { 'use strict'; ... })();`
3. Guard with body class check: `if (!document.body.classList.contains('<your-page>-page')) return;`
4. Use `addEventListener` (never inline `onclick`)
5. Wait for DOM: `if (document.readyState !== 'loading') init(); else document.addEventListener('DOMContentLoaded', init);`
6. Load in your HTML: `<script src="/js/<your-page>.js" defer></script>`

### Don't:
- Use jQuery (the site is vanilla JS)
- Use `eval()` or `document.write()`
- Add new global variables to `window` without a `mac-` prefix
- Block the main thread (large loops should yield via `requestIdleCallback` or `setTimeout(fn, 0)`)
- Re-implement features that already exist in `ux-enhancements.js` or `mainbundle.js`

---

## 9. Performance checklist (per page)

- [ ] Title is 50-60 chars
- [ ] Meta description is 150-160 chars
- [ ] All images have `width` + `height` attributes
- [ ] Above-the-fold images use `fetchpriority="high"`, no `loading="lazy"`
- [ ] Below-the-fold images use `loading="lazy" decoding="async"`
- [ ] All scripts use `defer` or `async` (never blocking)
- [ ] No render-blocking `@import` in CSS files
- [ ] Page weight < 500 KB (excluding images)
- [ ] LCP element identified and optimized
- [ ] No layout shift (test with `npm run test:performance`)
- [ ] Service worker registered

---

## 10. SEO checklist (per page)

- [ ] Self-referencing canonical
- [ ] hreflang tags (en, en-in, x-default)
- [ ] Open Graph (og:type, og:url, og:title, og:description, og:image, og:site_name)
- [ ] Twitter Card (summary_large_image)
- [ ] WebPage + BreadcrumbList JSON-LD (universal)
- [ ] Type-specific schema (Course / Article / LocalBusiness / FAQPage)
- [ ] Exactly one `<h1>` containing the primary keyword
- [ ] Alt text on every `<img>`
- [ ] Internal links to related pages (2-5 contextual links)
- [ ] No duplicate content
- [ ] Page added to sitemap (auto-generated by build)

---

## 11. Accessibility checklist (per page)

- [ ] `<html lang="en">` declared
- [ ] `<main>` has `role="main"` and `aria-label`
- [ ] Each `<section>` has `aria-labelledby` or `aria-label`
- [ ] Skip link present and visible on focus
- [ ] Color contrast meets WCAG AA (4.5:1 for body text, 3:1 for large text)
- [ ] All interactive elements keyboard-reachable
- [ ] All form inputs have associated `<label>` (or `aria-label`)
- [ ] Modals trap focus when open (handled by `ux-enhancements.js` if you use the standard modal)
- [ ] No reliance on color alone to convey meaning
- [ ] `prefers-reduced-motion` respected (handled by `global.css`)

---

## 12. Step-by-step: creating a new page

1. **Plan** the page: type, body class, primary keyword, what schemas it needs
2. **Decide** the page CSS: pick from the table in section 1, or create `pages/<new>.css` if it's a new type
3. **Copy** an existing similar page as a starting point (e.g. `src/pages/about.html` for a static info page)
4. **Set the body class**: `<body class="<your-page>-page">`
5. **Update meta tags**: title, description, canonical, OG, Twitter
6. **Update JSON-LD**: WebPage + BreadcrumbList minimum, plus type-specific
7. **Build the content** following the HTML structure rules in section 5
8. **Add images** following the image rules in section 6
9. **Run** `node scripts/inject-phase6-polish.js` — this auto-adds the polish CSS/JS
10. **Test** locally:
    ```bash
    npm run dev
    # Open http://localhost:3001/your-path
    ```
11. **Verify** the checklists in sections 9, 10, 11
12. **Commit** when everything passes

---

## 13. Adding a new page type

If your new page doesn't fit any existing type:

1. Create the page CSS file: `src/css/pages/<new-type>.css`
   - Use the template from section 7
   - Scope all selectors to `body.<new-type>-page`
2. Update `scripts/inject-phase6-polish.js` — add to `PAGE_CSS_MAP`:
   ```js
   '<new-type>-page': '<new-type>.css',
   ```
3. (Optional) If the page needs page-specific behavior in `ux-enhancements.js`, add a guarded init function and call it from the `ready()` block
4. Document the new type by adding a row to section 1's table

---

## 14. Cache busting

When you change a shared CSS or JS file, bump its version query in HTML:

- Old: `<link href="/css/pages/global.css?v=20260411-p6">`
- New: `<link href="/css/pages/global.css?v=20260411-p7">`

Why: the service worker caches by full URL. Bumping the query forces fresh fetch.

You can do this site-wide with sed:

```bash
grep -rl "v=20260411-p6" src/pages content/blog/generated content/courses/generated | xargs sed -i 's/v=20260411-p6/v=20260411-p7/g'
```

---

## 15. Don't disturb existing pages

- **Never modify** files in `src/css/` (except `pages/<new>.css`)
- **Never modify** `src/js/ux-enhancements.js` core features without a regression test
- **Never modify** `tokens.css`, `reset.css`, `base.css`, `layout.css`, `components.css`, `utilities.css`, `core.css`, `global.css` casually — these affect every page
- **Never delete** files in `src/css/` without grepping for usage first
- **Always run** `node scripts/inject-phase6-polish.js` after creating a new page (it's idempotent — won't double-inject)
- **Always test** at desktop (1280px) AND mobile (390px) before committing

---

## Quick reference card

```
Body class:        <type>-page
Page CSS:          src/css/pages/<type>.css
Wire it up:        node scripts/inject-phase6-polish.js
Dev server:        npm run dev
Test URL:          http://localhost:3001/your-path
Lighthouse target: > 90 for Performance, A11y, Best Practices, SEO
```
