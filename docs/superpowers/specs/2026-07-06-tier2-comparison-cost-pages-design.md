# Tier 2 — Comparison & Cost Pages ("The Fair Comparison" cluster) — Design Spec

**Date:** 2026-07-06
**Source plan:** `marketing/50-HIGH-IMPACT-PAGES.md` Tier 2 + items 38-46
**Approved by user:** all 14 autonomously · extend existing vs-page design · listicles feature MAC with disclosure.

## Scope (14 items)

7 NEW vs-pages: `/modern-age-coders-vs-{mathnasium,kumon,cuemath,juni-learning,tynker,codingal,outschool}`
4 NEW cost pages: `/online-math-tutor-cost`, `/coding-classes-for-kids-cost`, `/coding-classes-cost-india-2026`, `/private-math-tutor-vs-online-tutoring`
2 NEW listicles: `/best-online-math-tutoring-2026`, `/best-online-coding-classes-for-kids-2026`
1 IMPROVE: `/coding-fee-calculator` — add maths tiers + align USD with real flat intl pricing.

All 13 slugs verified collision-free (checked src/pages, _redirects).

## Design system

Extract the live `/modern-age-coders-vs-whitehat-jr-cuemath-codingal` identity into shared `src/css/compare-pages.css`, prefix `cx-`: Source Serif 4 (display) + Inter (body) + JetBrains Mono (data/labels), warm paper surfaces, fair-comparison tables with highlighted MAC column, scroll-reveal with noscript fallback. Pages are SELF-CONTAINED (own light `header.nav` + own footer like the existing vs-page — no build:inline dependency). Per-page accent color allowed within the system. Existing combined vs-page untouched.

## Verified fact base (as of July 2026 — cite source + date on-page)

- Mathnasium: $300-450/mo typical US ($150-500 range), $99-200 enrollment fee (tutors.com, brighterly.com)
- Kumon: $150-220/subject/mo (metro $180-220) + ~$50 registration (tutors.com, ruvimo.com)
- Juni Learning: 1-on-1 from ~$275-299/mo (4 sessions); semi-private from $160/mo (myelearningworld.com)
- Cuemath US: $200/mo K-7, $256/mo grades 8-12; 1:1, 2x60min/wk (cuemath.com/pricing, brighterly.com)
- Outschool: $10-30/hr typical, pay-per-class marketplace; series/1-on-1 $50-100+ (brighterly.com, myelearningworld.com)
- Tynker: self-paced app, ~$180/yr individual (~$15/mo), family $225/yr; NO live teachers (tynker.com, myelearningworld.com)
- Codingal India: ~Rs 800/class; plans Rs 8,999-12,999/mo; packs Rs 29,500+ (grabon.in)
- US private math tutors: $25-80/hr common; online $20-70; in-person $35-100; elite $75-150+ (tutors.com, brighterly.com, myengineeringbuddy.com)
- MAC: coding $40 group / $100 1-on-1; maths $100 group / $150 1-on-1 (PREMIUM positioning, intentional); all 2 classes/wk = 8/mo; India Rs 1,499 / 2,499 / 4,999. Per-class: coding $5/$12.50; maths $12.50/$18.75.

## Page blueprints

**vs-page (7):** hero (fair-comparison promise + accent) → verdict cards (3 quick takeaways) → sourced comparison table (price, per-class math, format, batch size, coding+maths, contracts; MAC column highlighted; source note + date under table) → "Where {competitor} is genuinely a better fit" (honest, specific — the AI-citation earner) → "Where Modern Age Coders wins" → per-class price math band → 2-3 REAL Google review quotes (from the verified 8) → FAQ 5-6 Q&A + FAQPage schema → CTA (free demo + /guarantee). Cross-links: /pricing, existing combined vs-page, 2 sibling vs-pages, relevant listicle.

**Cost page (4):** hero (direct answer: the number range up front, AEO-style) → cost-by-format table (private tutor / center / online platform / app) → what drives price → per-class vs per-hour math → where MAC lands (market currency of the page; link /pricing; NO intl-swap script on these article pages) → FAQ + FAQPage schema → CTA. India page uses INR market facts (WhiteHat Jr Rs 5,000+, Codingal Rs 8,999+/mo, already-published site table facts).

**Listicle (2):** hero (criteria-first: how we ranked) → ranked provider cards 6-7 (real, verified facts each; MAC featured WITH explicit disclosure box: "Full disclosure: Modern Age Coders is our own program") → comparison summary table → how-to-choose guide → FAQ + FAQPage + ItemList schema → CTA.

**Fee calculator:** add maths tier options; replace/align exchange-rate-derived USD with real flat intl pricing ($40/$100 coding, $100/$150 maths); verify existing currency dropdown behavior end-to-end.

## Brand positioning (USER RULE, 2026-07-06 — overrides any earlier framing)

NEVER position Modern Age Coders as budget/cheap/affordable-first. The identity is PREMIUM TEACHING: very deep, real knowledge with application; interactive, never boring; one-hour live classes students eagerly wait for; highest quality. Price appears ONLY as the closing proof of value ("all of this, and it costs less"), never as the lead or the headline. Heroes and CTAs lead with depth/engagement/quality; per-class price maths stays (factual value proof) but framed as "more teaching for the money", not "cheap".

## Hard constraints

- Only verified facts above; every competitor number carries "typical published prices, as of July 2026" + named sources; nothing invented.
- Real testimonials only (the verified 8 Google reviewers). No refund/money-back language. No em dashes/emojis/AI-marketing words.
- Article pages (all 13) do NOT load international-pricing.js; MAC prices shown in the page's market currency with /pricing cross-link.
- Honesty sections are genuine (e.g., Tynker better for self-paced tinkering under $200/yr; Outschool better for one-off hobby workshops; Kumon better for worksheet drill discipline; Mathnasium better if in-center presence is required).
- Schema per page: FAQPage + BreadcrumbList + mac-org-ld Organization block; listicles add ItemList. Site AggregateRating convention respected (none added here).
- Routing: each page in BOTH `_redirects` + `netlify.toml`, `sitemap.xml`, `.md` twin (+ twin routes). Head: full SEO (title <=60, description <=155, canonical, hreflang trio, OG/Twitter, md alternate).
- Internal linking: /pricing intl comparison note gains "See detailed comparisons" link to the cluster; each page's related-links row.
- Commit per page; browser-verify (1440 + 390, zero console errors) before each commit. User pushes.

## Build order

compare-pages.css + vs-mathnasium (template-setter) → vs-kumon → vs-cuemath → vs-juni-learning → vs-tynker → vs-outschool → vs-codingal → online-math-tutor-cost → coding-classes-for-kids-cost → private-math-tutor-vs-online-tutoring → coding-classes-cost-india-2026 → best-online-math-tutoring-2026 → best-online-coding-classes-for-kids-2026 → fee-calculator upgrade → final sweep (routing parity, sitemap count +13, link check).

## Out of scope

Tier 3-5 pages; editing the existing combined vs-page; new India city pages; review schema changes; backend.
