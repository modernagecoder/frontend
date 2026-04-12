# UI/UX Overhaul Plan — Modern Age Coders Frontend

## Context

The website (learn.modernagecoders.com) is an education platform teaching coding and maths to ages 6-65. It's built with plain HTML/CSS/JS, deployed on Netlify. The site has **135 static pages + 302 generated pages** (blogs, courses, resources).

**Why this overhaul is needed:** The CSS architecture has accumulated severe technical debt — 54 CSS files totaling 67,600 lines, 1,928 `!important` declarations, 12 "fix" patch files, and duplicate `:root` definitions across 5+ files. JavaScript has 4 redundant mobile nav scripts. While the design foundation (glass morphism, dark theme, fluid typography) is solid, the execution is inconsistent across pages, and performance suffers from render-blocking resources, monolithic bundles, and no code splitting.

**The goal:** Transform the site into a world-class, production-ready experience that looks handcrafted by a top designer — fast, beautiful, accessible, and scalable.

---

## Current State Diagnosis

### CSS Architecture (Critical)
- **54 CSS files**, 67,600 total lines
- **1,928 `!important` occurrences** — specificity wars
- **12 "fix" patch files** (mobile-nav-fix, mobile-centering-fix, force-image-size, etc.)
- `:root` variables **redefined in 5+ files** — no single source of truth
- **86 unique box-shadow values** — ad-hoc instead of tokens
- **6 competing card design files** — landscape, vertical, new, redesigned, city-specific
- Monolithic files: style.css (7,088 lines), index-bundle.css (7,148 lines), course.css (7,005 lines)
- Per-page CSS payload: **~14,000 lines** (homepage), **~11,000 lines** (course pages)

### JavaScript Architecture
- **47 JS files**, mainbundle.js at 12,639 lines
- **4 redundant mobile nav scripts** with guard flags (`window.__mobileNavInitialized`, etc.)
- Global scope pollution (multiple `window.*` properties)
- No code splitting — all JS loaded on every page
- Only 3 JS files minified in production

### Performance Issues
- Two render-blocking CSS files (~14,200 lines combined) on homepage
- No critical CSS inlining
- No Service Worker (manifest exists, PWA incomplete)
- Nav logo uses `loading="lazy"` (delays above-the-fold paint)
- 4 `@import` for Google Fonts inside CSS files (render-blocking)
- No `srcset`/`sizes` on images
- Lenis loaded from CDN (extra DNS + connection)

### What Works Well (Preserve These)
- Glass morphism visual identity — distinctive, modern
- Dark theme with purple/cyan accents
- Fluid typography with `clamp()` — well-implemented
- Touch targets 44x44px minimum
- `prefers-reduced-motion`, `prefers-color-scheme`, `prefers-contrast` supported
- GPU-friendly animations (transform + opacity)
- Strong SEO fundamentals (JSON-LD, Open Graph, hreflang)
- Build pipeline (generate → inline → minify)

---

## Phase 1: CSS Architecture Consolidation

### Step 1.1: Create Single Source of Truth — `tokens.css`

**File:** `src/css/tokens.css` (~200 lines)

Extract ALL `:root` declarations from every CSS file into one canonical file. No other file may declare `:root`.

**Consolidate into this file:**
- Color palette from `style.css` lines 1-67 (primary, secondary, glass, demographic, girls palette)
- Add missing semantic roles: `--color-surface`, `--color-surface-elevated`, `--color-success`, `--color-error`
- Consolidate 86 ad-hoc box-shadows into 10 shadow tokens:
  - `--shadow-sm`: 0 1px 3px rgba(0,0,0,0.2)
  - `--shadow-md`: 0 4px 16px rgba(0,0,0,0.25)
  - `--shadow-lg`: 0 8px 32px rgba(0,0,0,0.3)
  - `--shadow-xl`: 0 16px 48px rgba(0,0,0,0.35)
  - `--shadow-2xl`: 0 24px 64px rgba(0,0,0,0.4)
  - `--shadow-glow-primary`: 0 0 40px rgba(168,85,247,0.15)
  - `--shadow-glow-secondary`: 0 0 40px rgba(78,205,196,0.15)
  - `--shadow-glow-warm`: 0 0 40px rgba(245,158,11,0.15)
  - `--shadow-card`: 0 8px 32px rgba(0,0,0,0.3)
  - `--shadow-card-hover`: 0 20px 50px rgba(0,0,0,0.4), 0 0 40px rgba(168,85,247,0.12)
- Add z-index scale: `--z-dropdown: 100` through `--z-tooltip: 700`
- Add letter-spacing tokens: `--tracking-tight: -0.025em` through `--tracking-widest: 0.1em`
- Add easing tokens: `--ease-out`, `--ease-spring`, `--ease-smooth`

**Remove `:root` from:** style.css, course.css, best-coding-class.css, about.css, pricing.css, contact.css, blog-styles.css, spacing-and-tabs-fix.css, and all 138 generated per-directory style.css files.

### Step 1.2: Create Modern Reset — `reset.css`

**File:** `src/css/reset.css` (~80 lines)

Replace the scattered `* { margin:0; padding:0; box-sizing:border-box }` that's currently redefined in style.css line 69, course.css, pricing.css, and best-coding-class.css.

Contents:
- Modern CSS reset (Josh Comeau approach)
- `*, *::before, *::after { box-sizing: border-box }` (one place only)
- `::selection` styling with brand purple
- `@media (prefers-reduced-motion: reduce)` — disable all animations/transitions globally
- Remove all 87 vendor prefixes for widely-supported properties (transform, transition, border-radius all have >98% browser support)

### Step 1.3: Create Base Styles — `base.css`

**File:** `src/css/base.css` (~300 lines)

- Body: near-black background (#000002), text color (#f8fafc), font-family (Inter system stack), line-height 1.6
- Body::before gradient background (replaces old canvas animation)
- Typography system: h1-h6 with fluid sizes from tokens, proper line-heights (1.1-1.3 for headings)
- `text-wrap: balance` on headings (prevents orphaned words)
- `text-wrap: pretty` on paragraphs (better line-break decisions)
- Letter-spacing by heading level: h1/h2 tight, labels wide
- `-webkit-font-smoothing: antialiased` + `-moz-osx-font-smoothing: grayscale` (once only)
- Links: color, hover, focus-visible styles
- Images: `max-width: 100%; height: auto; display: block`
- Scrollbar styling (thin, branded)
- `prefers-color-scheme: light` support
- `prefers-contrast: high` support
- Print styles

### Step 1.4: Create Layout System — `layout.css`

**File:** `src/css/layout.css` (~250 lines)

- `.container` — `max-width: 1200px; margin: 0 auto; padding: 0 clamp(1rem, 3vw, 3rem)`
- `.container--wide` — `max-width: 1400px`
- `.section` — `padding: var(--space-section) 0` where `--space-section: clamp(3rem, 6vw, 6rem)`
- Grid systems:
  - `.grid` — base flex/grid wrapper
  - `.courses-grid` — `grid-template-columns: repeat(auto-fill, minmax(min(320px, 100%), 1fr))`
  - Responsive: single column on mobile (<480px), auto-fill above
- Section reveal animation: `opacity: 0; transform: translateY(24px)` -> `.is-visible` class adds `opacity: 1; transform: none` with 0.6s transition
- Staggered children: nth-child delays at 80ms intervals
- Between-section visual connectors: gradient `::before` lines
- Alternating section tinting: even sections get subtle purple tint
- Safe area insets: `env(safe-area-inset-*)` for notched devices

### Step 1.5: Create Unified Component Library — `components.css`

**File:** `src/css/components.css` (~1,500 lines)

This single file absorbs and replaces ALL of these existing files:

**Navigation (absorbs 3 files):**
- `mobile-nav-fix.css` → absorbed
- `mobile-nav-final-fix.css` → absorbed
- `course-nav-override.css` → absorbed
- Single `.navbar` definition with `position: fixed`, glass bg, backdrop-filter
- Co-located `@media (max-width: 900px)` rules for mobile menu
- Mobile menu: frosted glass slide-down with `backdrop-filter: blur(24px) saturate(180%)`
- Dropdown: scale from 0.95 + fade in, `transform-origin: top center`

**Cards (absorbs 6 files):**
- `landscape-cards.css` → absorbed
- `vertical-large-image-cards.css` → absorbed
- `new-coding-cards.css` → absorbed
- `redesigned-cards.css` → absorbed
- `bengaluru-course-cards.css` → absorbed
- `pune-course-cards.css` → absorbed
- `force-image-size.css` → absorbed

Base `.card`:
```
background: var(--glass-bg)
border: 1px solid var(--glass-border)
border-radius: 1.5rem
box-shadow: var(--shadow-card)
overflow: hidden
```

Card `::before` — invisible gradient top-line that glows on hover

Card hover:
```
transform: translateY(-6px)
box-shadow: var(--shadow-card-hover)
border-color: var(--glass-hover-border)
::before opacity: 1
```

Card image: `aspect-ratio: 16/10; object-fit: cover; scale(1.05) on hover`

Variants: `.card--course`, `.card--testimonial`, `.card--feature`, `.card--pricing`, `.card--demographic`

**Tabs (absorbs 4 files):**
- `beautiful-tabs.css` → absorbed
- `spacing-and-tabs-fix.css` → absorbed
- `mobile-tabs-width-fix.css` → absorbed
- `mobile-tab-content-fix.css` → absorbed
- Horizontal tabs with sliding active indicator
- Mobile: full-width stacked or horizontal scroll with snap

**Testimonials (absorbs 4 files):**
- `testimonials-carousel.css` → absorbed
- `mobile-testimonials-certificates-fix.css` → absorbed
- `mobile-testimonials-improved.css` → absorbed
- `mobile-testimonials-compact.css` → absorbed
- CSS scroll-snap carousel with momentum scrolling
- Quote card with avatar, name, location

**Buttons:**
- `.btn` base: 44px min-height, border-radius, font-weight 600, inline-flex
- `.btn--primary`: gradient bg, glow shadow, hover lift
- `.btn--secondary`: warm gradient
- `.btn--ghost`: transparent bg, border, hover tint
- `.btn--sm`, `.btn--lg` size modifiers
- `:active` — `scale(0.97) translateY(1px)` with spring easing
- Arrow icon shifts right 4px on hover

**Forms:**
- `.form-group`, `.form-input`, `.form-label`, `.form-error`
- Input focus: purple glow `box-shadow: 0 0 0 3px rgba(168,85,247,0.2)`
- Error state: red border + shake animation
- Success state: green checkmark indicator

**Modals:**
- `.modal-overlay`, `.modal-content`
- `role="dialog"`, `aria-modal="true"` support
- Focus trapping (CSS + JS)
- Backdrop blur

**Footer:**
- 4-column grid, responsive to 2-column then 1-column
- Social icons with hover glow

**Floating buttons (WhatsApp, Misti AI):**
- Fixed positioning, responsive show/hide

### Step 1.6: Create Utilities — `utilities.css`

**File:** `src/css/utilities.css` (~150 lines)

- `.sr-only` — screen reader only
- `.gradient-text` — purple-to-cyan gradient text effect
- `.text-center`, `.text-left`, `.text-right`
- `.visually-hidden` — accessible hide
- Spacing utilities if needed

### Step 1.7: Create Page-Specific CSS Files

**Directory:** `src/css/pages/`

| File | Source | Target Lines | What It Contains |
|------|--------|-------------|-----------------|
| `homepage.css` | `indexpagestyle.css` + homepage sections from `style.css` | ~400 | Hero mesh gradients, trust strip, course tabs content, pricing toggle, try-coding form, about cards, student projects, map |
| `course-listing.css` | `course.css` (page-specific rules only) | ~300 | Course hero, filter controls, grid layout for course listing |
| `course-detail.css` | Generated course `style.css` patterns | ~250 | Lesson nav, content area, code blocks, enrollment sidebar |
| `blog.css` | `blog-styles.css` | ~200 | Article layout, TOC, reading progress, share buttons, related posts |
| `landing.css` | `best-coding-class.css` (page-specific rules only) | ~250 | City hero, local trust signals, comparison sections |
| `about.css` | Current `about.css` (page-specific only) | ~150 | Team grid, timeline, stats counters |
| `pricing.css` | Current `pricing.css` (page-specific only) | ~200 | Plan cards, feature comparison, toggle |
| `contact.css` | Current `contact.css` (page-specific only) | ~150 | Contact form, map, info cards |
| `camp.css` | `summer-coding-camp.css` + `winter-coding-camp.css` | ~200 | Camp hero, schedule, registration |
| `challenge.css` | `challenge-pages.css` | ~150 | Challenge cards, leaderboard, timer |
| `resource.css` | `resource-standalone.css` + `resource-template.css` | ~200 | Resource grid, category filters |

**Total CSS target: ~4,500 lines (down from 67,600 — 93% reduction)**

### Step 1.8: Use CSS `@layer` for Cascade Control

This is how we kill all 1,928 `!important` declarations:

```css
/* At top of tokens.css */
@layer reset, base, layout, components, pages, utilities;
```

Each file wraps its content in its assigned layer. Layers cascade in declaration order — `utilities` beats `pages` beats `components`, etc. No `!important` needed.

**Browser support:** Chrome 99+, Firefox 97+, Safari 15.4+ (early 2022). Covers all modern browsers.

**Page scoping:** Pages use body class (`.index-page`, `.courses-page`, `.about-page`, etc.). Page-specific CSS uses `body.{page}-page .component` — slightly higher specificity than generic component, handled cleanly by `@layer pages`.

### Step 1.9: Update Build Pipeline

**Modify `scripts/merge-css.js`:**
Replace current 17-file concatenation with new production:
- `core.css` = tokens.css + reset.css + base.css + layout.css + components.css + utilities.css
- Page CSS files stay separate (code splitting per page type)
- Result: 2 HTTP requests maximum per page (core.css + page.css)

**Modify `scripts/minify.js`:**
- Line 16: Replace hardcoded 7-file `CSS_FILES` array with glob `src/css/**/*.css`
- Line 33: Change `level: 1` to `level: 2` (structural optimization, ~15% extra savings)
- Line 26: Expand `JS_FILES` to include all new JS chunks

**Modify `scripts/generate-blogs.js`:**
- Stop copying style.css, responsive.css, mobile-nav-fix.css, mobile-nav-final-fix.css, blog-styles.css, share-button.css into each of 71 blog directories
- Update blog template to reference shared CSS: `<link href="/css/core.css">` + `<link href="/css/pages/blog.css">`

**Modify `scripts/generate-courses.js`:**
- Stop copying CSS into each of 67 course directories
- Update course template to reference shared CSS

**Update `netlify.toml`:**
- Add `npm run build:critical` step for critical CSS extraction
- Add `npm run build:core-css` step for new merge

### Step 1.10: Delete Eliminated Files

After consolidation and full verification:

**Delete fix/patch files (12):**
- `mobile-nav-fix.css`
- `mobile-nav-final-fix.css`
- `mobile-centering-fix.css`
- `mobile-tab-content-fix.css`
- `mobile-tabs-width-fix.css`
- `spacing-and-tabs-fix.css`
- `mobile-testimonials-certificates-fix.css`
- `mobile-testimonials-improved.css`
- `mobile-testimonials-compact.css`
- `coding-curriculum-fix.css`
- `course-page-mobile-fix.css`
- `force-image-size.css`

**Delete competing card files (6):**
- `landscape-cards.css`
- `vertical-large-image-cards.css`
- `new-coding-cards.css`
- `redesigned-cards.css`
- `bengaluru-course-cards.css`
- `pune-course-cards.css`

**Delete absorbed files:**
- `indexpagestyle.css` (→ pages/homepage.css)
- `beautiful-tabs.css` (→ components.css)
- `testimonials-carousel.css` (→ components.css)
- `certificate-carousel.css` (→ components.css)
- `keyboard-navigation.css` (→ components.css)
- `corporate-training.css` (→ components.css)
- `try-coding-enhanced.css` (→ pages/homepage.css)
- `why-learn-section.css` (→ pages/homepage.css)
- `course-nav-override.css` (→ components.css)
- Per-directory CSS copies in 71 blog directories + 67 course directories

---

## Phase 2: Visual Design Elevation

### Step 2.1: Typography Refinement

**Why this matters:** Typography is 90% of web design. Subtle adjustments to tracking, weight, and rendering separate amateur sites from world-class ones.

**Changes:**
- Letter-spacing by role:
  - h1, h2: `letter-spacing: -0.025em` (tight — pulls large text together)
  - h3, h4: `letter-spacing: 0` (neutral)
  - Labels, tags, stat-labels: `letter-spacing: 0.05em; text-transform: uppercase` (wide — adds authority)
  - Section subtitles: `letter-spacing: 0.01em` (barely perceptible openness)
- Font-weight variation for visual depth:
  - Hero headline: 800 (already there)
  - Section titles: 700 with gradient text fill
  - Body text: 400
  - Captions/metadata: 500
- `text-wrap: balance` on all headings — prevents the ugly single-word last line
- `text-wrap: pretty` on paragraphs — smarter line-break decisions
- `font-variant-ligatures: contextual` on code blocks (Fira Code programming ligatures)
- Optical margin: `text-indent: -0.03em` on large headings for visual alignment

### Step 2.2: Color Depth and Gradient Sophistication

**Why this matters:** Flat 2-color gradients look AI-generated. Multi-stop gradients with organic positioning look handcrafted.

**Changes:**
- **Multi-stop gradients** (3 stops with luminous midpoint):
  - Primary: `#7c3aed → #a855f7 → #c084fc` at 135deg
  - Hero: `#7c3aed → #a855f7 → #06b6d4 → #22d3ee` at 160deg
  - Warm: `#d97706 → #f59e0b → #fbbf24` at 135deg

- **Mesh-gradient section backgrounds** (overlapping radial gradients):
  ```
  radial-gradient(ellipse 80% 50% at 20% 40%, rgba(168,85,247,0.12), transparent 60%),
  radial-gradient(ellipse 60% 40% at 80% 20%, rgba(78,205,196,0.08), transparent 60%),
  radial-gradient(ellipse 50% 60% at 60% 80%, rgba(236,72,153,0.06), transparent 60%)
  ```
  These create organic, non-repeating depth that feels hand-designed.

- **Noise texture overlay** — tiny inline SVG noise at 3% opacity with `mix-blend-mode: overlay`. This single technique eliminates the flat "digital" look that makes sites feel AI-generated. Real design has texture.

- **Alternating section tinting** — even sections get `rgba(168,85,247,0.015)` background shift. Prevents visual monotony without being obvious.

- **Section dividers** — gradient `::before` lines between sections:
  ```
  linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)
  ```

### Step 2.3: Card Design Elevation

**Why this matters:** Cards are the primary content vehicle. 6 competing implementations create visual inconsistency. One beautiful system creates cohesion.

**Base card:**
- Glass morphism: `rgba(16,16,28,0.8)` background, 1px border, blur(20px), 1.5rem radius
- Gradient top-accent via `::before`: invisible at rest, glows purple-to-cyan on hover
- Shadow: resting `--shadow-card`, hover `--shadow-card-hover`
- Transition: transform + shadow + border-color at 300ms with custom ease

**Hover micro-animation (staggered):**
- 0ms: Card lifts `translateY(-6px)`, shadow deepens, border brightens, top accent appears
- 50ms: Title shifts `translateY(-2px)`
- 100ms: Description opacity to 0.95
- 150ms: CTA arrow shifts `translateX(4px)`
- Image zooms `scale(1.05)` throughout

**Image container:**
- `aspect-ratio: 16/10` for consistent sizing (kills all the force-image-size hacks)
- `object-fit: cover` for any image ratio
- Gradient placeholder while loading

**Card variants (modifier classes, NOT separate files):**
- `.card--course` — image + title + tech tags + description + button
- `.card--testimonial` — decorative quote mark, text, avatar row
- `.card--feature` — icon with gradient bg, title, description (horizontal on desktop)
- `.card--pricing` — header with plan name, price, feature list with checkmarks, CTA
- `.card--demographic` — age group indicator, simplified layout

### Step 2.4: Section Transitions and Visual Flow

**Between-section connectors:**
- Gradient divider line: `::before` pseudo-element, 1px height, centered gradient
- Subtle alternating backgrounds for rhythm
- `--space-section: clamp(3rem, 6vw, 6rem)` — sections breathe

**Scroll-triggered reveals:**
- Sections: fade-in + translateY(24px) at 0.6s with custom ease
- Children within sections: staggered at 80ms intervals (up to 4 children)
- Cards: can use the section reveal OR individual card reveal via IntersectionObserver

**View Transitions API (progressive enhancement):**
```css
@view-transition { navigation: auto; }
::view-transition-old(root) { animation: fade-out 200ms ease; }
::view-transition-new(root) { animation: fade-in 200ms ease; }
```

### Step 2.5: Micro-interactions

**Why this matters:** The difference between "good" and "world-class" is in the 50-200ms interactions that users feel but can't articulate.

**Nav links:** Color transition + subtle background fill on hover, active indicator underline via `::after`
**Dropdown menus:** Scale from 0.95 + opacity from 0, transform-origin top center, 200ms
**Form inputs:** Focus glow — `box-shadow: 0 0 0 3px rgba(168,85,247,0.2)` with 150ms transition
**Tab indicator:** Sliding underline that animates from one tab to the next (not just color swap)
**Button press:** `scale(0.97) translateY(1px)` on `:active` with spring easing `cubic-bezier(0.34, 1.56, 0.64, 1)`
**Links with arrows:** Arrow shifts right 4px on hover with spring easing
**Counter animations:** Stats count up from 0 on scroll using CSS `@property` + `counter()`
**Toast notifications:** Slide up from bottom, 300ms, auto-dismiss with progress bar

### Step 2.6: Mobile Native-App Quality

**Touch interactions:**
```css
@media (hover: none) and (pointer: coarse) {
  .card:hover { transform: none; }  /* No hover on touch */
  .card:active { transform: scale(0.98); transition-duration: 100ms; }
  .btn:active { transform: scale(0.95) translateY(1px); }
  * { -webkit-tap-highlight-color: rgba(168,85,247,0.15); }
}
```

**Mobile nav:** Frosted glass slide-down (not left) with `backdrop-filter: blur(24px) saturate(180%)` — feels like iOS Control Center

**Carousels:** CSS `scroll-snap-type: x mandatory` with hidden scrollbar, momentum scrolling

**Bottom sticky CTA:** On course/pricing pages, fixed bottom bar with "Book Free Demo"

**Safe areas:** `padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)` on body

---

## Phase 3: Performance Optimization

### Step 3.1: Core Web Vitals — LCP (Largest Contentful Paint)

**Current blocker:** Two render-blocking CSS files (~14,200 lines combined) must download before any paint.

**Fixes:**
1. **Remove `loading="lazy"` from nav logo** in `components/nav.html` — above-the-fold images must NOT be lazy-loaded
2. **Add `fetchpriority="high"`** to hero images on all landing pages
3. **Critical CSS inlining:** Create `scripts/extract-critical-css.js` — extracts ~3-4KB of above-the-fold rules (`:root` tokens, reset, body, nav, hero) and inlines as `<style>` in `<head>`
4. **Non-blocking full CSS:**
   ```html
   <link rel="preload" href="/css/core.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
   <noscript><link rel="stylesheet" href="/css/core.css"></noscript>
   ```
5. **Add preload hints:**
   ```html
   <link rel="preload" href="/css/core.css" as="style">
   <link rel="preload" href="/images/logo.svg" as="image">
   ```
6. **Remove synchronous GA from `<head>`** (index.html lines 6-14) — keep only the deferred version at bottom

### Step 3.2: Core Web Vitals — CLS (Cumulative Layout Shift)

**Fixes:**
1. **Add `width` and `height` to ALL `<img>` tags** — currently 31 of 34 homepage images lack dimensions
2. **Add `aspect-ratio` in CSS** for image containers: `.card__image img { aspect-ratio: 16/9 }`
3. **Move nav inline `<style>` block** from `components/nav.html` into main stylesheet (prevents reflow)
4. **Add `font-display: swap`** to all `@font-face` declarations across files

### Step 3.3: Core Web Vitals — INP (Interaction to Next Paint)

**Current blocker:** mainbundle.js runs 5 IIFEs synchronously, creating a burst of main-thread work.

**Fixes:**
1. **Split mainbundle.js** (12,639 lines) into 4 chunks:

   | Chunk | Contents | Loading Strategy |
   |-------|----------|-----------------|
   | `core.js` | Callback modal, copyright year | `defer` in `<head>` |
   | `a11y.js` | Tab accessibility, keyboard nav | Load on first Tab keypress |
   | `mobile.js` | Unified mobile nav (1 script) | Load when viewport < 900px |
   | `interactions.js` | Carousels, scroll-reveal, tabs | Load via IntersectionObserver |

2. **Consolidate 4 mobile nav scripts into 1:**
   - DELETE: `mobile-navigation.js`, `mobile-nav-fixed.js`, `mobile-nav-comprehensive-fix.js`
   - KEEP & REFACTOR: `unified-mobile-nav.js` (cleanest CONFIG, best structure)
   - Remove all guard flags (`window.__mobileNavInitialized`, etc.)

3. **Defer auth.js** — only load on pages with login button, or lazily on click
4. **Self-host Lenis** — copy to `/js/vendor/lenis.min.js` (eliminates DNS + connection to unpkg)
5. **Break long tasks:** Wrap IIFEs with `setTimeout(fn, 0)` or `scheduler.yield()` to yield to browser
6. **Remove `components-loader.js`** from templates — nav/footer are inlined at build time, this script is wasted

### Step 3.4: CSS Performance

1. **Replace 4 `@import` in CSS files** with `<link>` tags in HTML templates:
   - `challenge-pages.css` line 7 (Plus Jakarta Sans + JetBrains Mono)
   - `resource-standalone.css` line 11
   - `summer-coding-camp.css` line 6 (Outfit + Inter)
   - `winter-coding-camp.css` line 6 (Yeseva One + Raleway + Nunito)
2. **Self-host Google Fonts:** Download woff2 files via google-webfonts-helper, place in `/public/fonts/`, add local `@font-face` with `font-display: swap`
3. **Subset fonts:** Latin + Latin Extended only (site content is English)
4. **Reduce Fira Code subset** to just programming characters if used only for hero symbol
5. **Per-page CSS payload:** From ~14,000 lines → ~4,500 lines (core.css + page.css)
6. **Upgrade CleanCSS** from level 1 to level 2 in minify.js (~15% additional savings)

### Step 3.5: Image Optimization Pipeline

1. **Create `scripts/generate-responsive-images.js`** using Sharp (already in package.json):
   - Generate 400w and 800w variants of all images in `/public/images/`
   - Generate AVIF format alongside WebP
2. **Update templates with `srcset` and `sizes`:**
   ```html
   <img src="/images/kids-coding.webp"
        srcset="/images/kids-coding-400.webp 400w, /images/kids-coding-800.webp 800w"
        sizes="(max-width: 768px) 100vw, 400px"
        width="800" height="450" loading="lazy"
        alt="Scratch Programming Course">
   ```
3. **Use `<picture>` for hero images** with AVIF as primary, WebP as fallback

### Step 3.6: Service Worker

**Create `public/sw.js`** with Workbox-style strategies:
- **Precache:** core.css, core.js, logo, key images
- **HTML pages:** Network-first (fresh content)
- **Images:** Cache-first (immutable)
- **Fonts:** Stale-while-revalidate
- **Offline fallback:** Custom offline page

Register in every page:
```javascript
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js'));
}
```

### Step 3.7: Resource Hints

Add to `<head>` of all pages:
```html
<link rel="preconnect" href="https://backend-modernagecoders.vercel.app">
<link rel="dns-prefetch" href="https://checkout.razorpay.com">
<link rel="dns-prefetch" href="https://www.googletagmanager.com">
```

Add to homepage only:
```html
<link rel="prefetch" href="/courses">
<link rel="prefetch" href="/about">
```

Add hover-prefetch JavaScript:
```javascript
document.addEventListener('mouseover', function(e) {
    var link = e.target.closest('a[href^="/"]');
    if (link && !link.dataset.prefetched) {
        var l = document.createElement('link');
        l.rel = 'prefetch'; l.href = link.href;
        document.head.appendChild(l);
        link.dataset.prefetched = '1';
    }
});
```

---

## Phase 4: UX Flow Improvements

### Step 4.1: Navigation UX

- **Breadcrumbs** on all pages with JSON-LD BreadcrumbList:
  - Blog: Home > Blog > [Category] > [Title]
  - Course: Home > Courses > [Level] > [Course Name]
  - City: Home > Coding Classes > [City Name]
- **Back-to-top button:** Floating button appears after scrolling past fold, smooth scroll, fade in/out via IntersectionObserver
- **Reading progress bar** on blog posts: thin gradient bar (2px) at viewport top, `transform: scaleX()` driven by scroll position
- **Active section highlighting** in nav: highlight current section based on scroll position using IntersectionObserver

### Step 4.2: Form UX

- **Real-time validation feedback:** Green checkmark or red X inline on blur
- **Input focus enhancement:** Branded purple glow `box-shadow: 0 0 0 3px rgba(168,85,247,0.2)`
- **Error animation:** Subtle shake on invalid submission
- **Phone input formatting:** Visual grouping (98123 66161)
- **Auto-save:** Store callback modal partial data in sessionStorage
- **Form submission:** Disabled state with spinner, success toast

### Step 4.3: Conversion Optimization

- **Sticky CTA on mobile:** Fixed bottom bar on course/pricing pages with "Book Free Demo" button — always accessible, doesn't interfere with content
- **Trust badges near CTAs:** "10,000+ Students" | "15+ Countries" | "4.8/5 Rating" — small badges next to enrollment buttons
- **Exit-intent popup (desktop):** Detect mouse leaving viewport, show "Book a free demo before you go" — once per session only
- **Social proof notifications:** Subtle bottom-left notifications ("Arjun from Bengaluru just enrolled") every 30s on high-intent pages

### Step 4.4: Accessibility Improvements

- **Modal focus trapping:** When auth/callback modal opens, focus stays within modal, Tab cycles through focusable elements, Escape closes
- **ARIA improvements:**
  - Add `role="dialog"`, `aria-modal="true"`, `aria-labelledby` to all modals
  - Add `aria-expanded` to all dropdown triggers
  - Ensure `aria-current="page"` on active nav links
- **Skip link styling:** `.skip-link` visible on `:focus`, positioned at top of viewport
- **Color contrast audit:** Verify `--text-muted` (#94A3B8) on `--color-surface` (#000002) meets WCAG AA 4.5:1 ratio
- **Keyboard navigation:** Ensure all interactive elements are reachable via Tab, all dropdowns navigable via Arrow keys

---

## Phase 5: SEO Technical Optimization

### Step 5.1: Structured Data Completeness

**Add Course schema to all course pages:**
```json
{
  "@type": "Course",
  "name": "Python for Kids",
  "description": "...",
  "provider": { "@type": "Organization", "name": "Modern Age Coders" },
  "educationalLevel": "Beginner",
  "teaches": ["Python", "Programming Logic"],
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "Online",
    "instructor": { "@type": "Person", "name": "..." }
  }
}
```

**Add BreadcrumbList** to all pages (currently only on some)

**Add LocalBusiness schema** to city landing pages with `areaServed`

**Add AggregateRating** to organization if reviews are available

**Ensure blog Article schema** includes `dateModified`, `author` with `@type: Person`, `publisher`

### Step 5.2: Technical SEO

- **Auto-generate sitemap** in build pipeline — verify all 437 pages included
- **Internal linking:**
  - Blog → related courses (2-3 links per post)
  - Course → related blog posts ("Related Articles" section)
  - City → specific courses (not just /courses)
  - Cross-link between city pages
- **Self-referencing canonicals** on all pages (verify existing)
- **Move GA snippet** — remove synchronous GA from `<head>` of index.html lines 6-14
- **Fix Meta Pixel** — currently has placeholder 'YOUR_PIXEL_ID' in meta-pixel.js (non-functional)
- **Ensure mobile-first indexing readiness:**
  - No desktop-only hidden content
  - All content accessible on mobile
  - Touch target validation in CI

---

## Phase 6: Page-by-Page Polish

### Homepage (`src/pages/index.html` — 4,212 lines)
- **Hero:** Mesh-gradient background, noise texture overlay, refined Syne headings with tight tracking, animated symbol with GPU-friendly transform, CTA buttons with glow hover
- **Trust strip:** Staggered entrance animation, counter animation from 0 to value, glass morphism cards
- **Course tabs:** Sliding indicator animation, smooth content crossfade, responsive horizontal scroll on mobile
- **Pricing section:** "Popular" plan highlighted with purple glow border, toggle animation between Coding/Maths/Custom
- **Testimonials:** CSS scroll-snap carousel, auto-play with pause on hover/focus, gradient fade edges
- **Try Coding form:** Enhanced focus states, real-time validation, success animation
- **Popular Courses chips:** Hover glow effect with brand colors, staggered entrance
- **Map section:** Glass morphism overlay, subtle pulse animation on markers

### Course Pages (67 generated)
- Unified card grid with responsive auto-fill
- Skeleton loading states while images load
- Consistent card design across all courses
- Related courses section at bottom

### Blog Pages (71 generated)
- Reading progress indicator (gradient bar)
- Smooth scroll table of contents
- Code blocks with copy button + improved syntax highlighting
- Related articles section at bottom
- Share buttons with micro-interaction

### City Landing Pages (50+)
- City-specific hero with mesh gradient
- Local trust signals prominent (reviews, students from that city)
- Streamlined path: hero → benefits → courses → demo booking
- Schema.org LocalBusiness markup

### About Page
- Team section with hover-reveal bio
- Timeline/milestone visualization with scroll animation
- Stats with animated counters on scroll
- Glass morphism feature cards with icon hover effects

### Pricing Page
- Toggle animation between plan types
- Feature comparison with animated checkmarks
- Highlighted "Popular" plan with glow and slight scale
- Mobile: horizontal scroll for plan comparison

### Contact Page
- Enhanced form with floating labels
- Map integration with glass overlay
- Contact info cards with hover effects
- Form submission success animation

---

## Implementation Priority

| # | Phase | What | Impact | Effort |
|---|-------|------|--------|--------|
| 1 | 1.1-1.6 | Create new CSS architecture files (tokens, reset, base, layout, components, utilities) | Foundation for everything | High |
| 2 | 1.7-1.8 | Page-specific CSS + @layer cascade | Eliminate 1,928 !important | Medium |
| 3 | 3.1-3.3 | Core Web Vitals (LCP, CLS, INP fixes) | Immediate speed gains, Google ranking | Medium |
| 4 | 2.1-2.3 | Typography + color + cards elevation | Visual quality leap — "wow" factor | Medium |
| 5 | 1.9-1.10 | Build pipeline update + delete old files | Clean codebase, smaller deploys | Medium |
| 6 | 2.4-2.6 | Section flow + micro-interactions + mobile polish | Premium feel, longer engagement | Medium |
| 7 | 3.4-3.7 | Image pipeline + service worker + resource hints | Full performance optimization | High |
| 8 | 4.1-4.4 | UX flows + accessibility | User retention, compliance | Medium |
| 9 | 5.1-5.2 | SEO structured data + technical SEO | Search rankings | Low |
| 10 | 6 | Page-by-page polish | Final world-class quality | High |

---

## Critical Files to Modify

| File | What Changes |
|------|-------------|
| `src/css/style.css` (7,088 lines) | Extract tokens → tokens.css, extract components → components.css, extract base → base.css |
| `src/css/index-bundle.css` (7,148 lines) | Replace entirely — 17 files absorbed into new system |
| `src/css/course.css` (7,005 lines) | Extract page-specific → pages/course-listing.css, rest absorbed |
| `src/css/best-coding-class.css` (6,087 lines) | Extract page-specific → pages/landing.css, rest absorbed |
| `scripts/merge-css.js` | Rewrite to produce core.css from new files |
| `scripts/minify.js` | Glob all CSS, upgrade CleanCSS level 2, expand JS list |
| `scripts/generate-blogs.js` | Stop copying CSS per directory, update template references |
| `scripts/generate-courses.js` | Stop copying CSS per directory, update template references |
| `content/blog/template/blog-template.html` | New CSS references, remove stale scripts |
| `content/courses/template/course-template.html` | New CSS references |
| `src/pages/index.html` (4,212 lines) | New CSS links, remove inline styles, add critical CSS |
| `components/nav.html` | Remove logo lazy-load, move inline style to CSS |
| `src/js/mainbundle.js` (12,639 lines) | Split into core.js + a11y.js + mobile.js + interactions.js |
| `src/js/mobile-navigation.js` + 3 others | Consolidate into 1 unified script |
| `netlify.toml` | Add build:critical and build:core-css steps |

---

## Verification Plan

After each phase:
1. **Visual regression:** Screenshot comparison at 375px, 768px, 1440px for: homepage, course listing, course detail, blog listing, blog detail, city landing, about, pricing, contact
2. **Lighthouse audit:** Target > 90 for Performance, Accessibility, Best Practices, SEO
3. **CSS metrics:** Total lines < 5,000, zero `!important`, zero duplicate `:root`, max 2 CSS files per page
4. **JS metrics:** No duplicate mobile nav scripts, bundle sizes documented
5. **Cross-browser:** Chrome, Firefox, Safari, Edge
6. **Mobile testing:** Real device for touch interactions, scroll behavior, safe areas
7. **Accessibility:** axe-core or similar automated scan, keyboard-only navigation test
8. **Build pipeline:** Netlify deploy preview — full build with no errors
9. **SEO:** Google Rich Results Test for structured data, PageSpeed Insights for Core Web Vitals

---

## Risk Mitigation

1. **Generated pages break when per-directory CSS is removed:** Build pipeline must be updated BEFORE old CSS is deleted. During transition, keep old files alongside new shared CSS.
2. **Specificity regression from removing !important:** Test each component visually after consolidation, before deleting fix files. Some !important declarations mask genuine bugs that need proper fixes.
3. **@layer browser support:** Supported since early 2022 (Chrome 99+, Firefox 97+, Safari 15.4+). Check site analytics for older browsers. Fallback: specificity-by-order without @layer.
4. **Inline styles in HTML:** Some index.html elements have inline `style=` attributes that override CSS. Must be moved to CSS classes during Phase 2.
5. **Template changes cascade to hundreds of pages:** Blog template change affects 71+ pages, course template affects 67+ pages. Test thoroughly after template changes by regenerating all content.
