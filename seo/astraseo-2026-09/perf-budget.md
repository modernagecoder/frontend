# Performance budget report (2026-09-07)

Measured by `node scripts/perf-budget.js --md` on the committed sources. Third-party scripts are listed, not sized. Real-user Core Web Vitals for the homepage were already green in the spec's baseline (LCP 1.9 s mobile, INP 154 ms, CLS 0).

| Page | HTML gz | CSS gz (min) | JS gz (min) | Hero image | Initial total | Third-party scripts |
|---|---:|---:|---:|---:|---:|---|
| Homepage | 53.6 KB | 11.5 (9.4) KB | 72.7 (37.6) KB | 15.9 KB `kids-coding.webp` | 116.5 KB | fonts.googleapis.com |
| Catalog /courses | 48.7 KB | 12.9 (9.9) KB | 53.7 (27.3) KB | 16.0 KB `hackathon-kids.webp` | 101.9 KB | fonts.googleapis.com, www.googletagmanager.com |
| Book demo | 22.8 KB | 9.4 (7.2) KB | 38.1 (21.1) KB | 0.0 KB  | 51.1 KB | fonts.googleapis.com, www.googletagmanager.com |
| Pricing | 22.1 KB | 9.1 (6.8) KB | 48.9 (25.1) KB | 0.0 KB  | 54.0 KB | fonts.googleapis.com, www.googletagmanager.com |
| Course page | 64.8 KB | 18.3 (14.2) KB | 67.5 (36.3) KB | 20.8 KB `python-teens.webp` | 136.1 KB | fonts.googleapis.com, www.googletagmanager.com, unpkg.com, checkout.razorpay.com |
| Blog post | 20.4 KB | 10.5 (8.3) KB | 45.2 (23.7) KB | 77.8 KB `00-hero.png` | 130.2 KB | fonts.googleapis.com, www.googletagmanager.com, unpkg.com |
| Resource chapter | 10.4 KB | 8.3 (6.5) KB | 19.9 (11.5) KB | 0.0 KB  | 28.4 KB | cdnjs.cloudflare.com, www.googletagmanager.com, cdnjs.cloudflare.com, cdnjs.cloudflare.com |
| International (UK) | 32.6 KB | 29.7 (23.0) KB | 30.7 (15.4) KB | 0.0 KB  | 71.0 KB | www.googletagmanager.com |

Budgets: JS 150.0 KB, CSS 80.0 KB, hero 150.0 KB, initial 1024.0 KB (gzip level 6; "min" = as the deploy minifier ships it).

## Reading the table

- Every page type is inside every budget. The largest first-visit transfer is the course page at about 136 KB, against a 1 MB budget; JavaScript peaks at about 38 KB against 150 KB; CSS at about 23 KB against 80 KB.
- The remaining weight is third-party: the Google tag on every page, Razorpay's checkout script on course pages (loaded synchronously; moving it to on-click is held until a test payment can be run), and Lenis smooth-scroll from unpkg in the footer.
- Blog posts carry the heaviest first image (ImageKit hero, about 78 KB). Under budget, but the one image worth resizing if blog LCP ever regresses.
- What changed this week to get here: hero images eager with dimensions (A3), first image per page eager on 152 pages (A10), the minifier now covering every asset the pages load instead of 7 CSS + 3 JS (A6), 394 duplicate floating-button anchors and 197 style blocks removed from 104 pages (B6), a stylesheet that never existed no longer requested by 4 legal pages (E2).

## Held

- Razorpay on click (spec item 4): touches the live payment flow; needs one test payment before shipping.
- CSS purge of style.css (147 KB source, ~22 KB gzip after minify): under budget already, so the visual-regression risk is not worth it now.
