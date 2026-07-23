# B2B Services Cluster — Design Spec

**Date:** 2026-07-23
**Goal:** Add a lead-generating B2B/software-services arm to learn.modernagecoders.com. Modern Age Coders is not only an education brand; it builds products, scales software, fixes bugs, and delivers SEO/AEO/GEO for SMEs and large companies worldwide. That side of the business has no dedicated pages, so it captures no leads. Build 10 ultra-depth, SEO/AEO/GEO-optimized pages that convert business visitors into consultation requests.

## Decisions (owner-confirmed 2026-07-23)

- **Page set:** 1 pillar hub + 9 service spokes (list below).
- **Lead capture:** each page gets a "Discuss your requirement" form PLUS WhatsApp / Call / Email buttons. Form posts to the existing, proven backend `POST https://backend-modernagecoders.vercel.app/api/contact/submit` (returns 201, verified 2026-07-23). No new backend.
- **Pricing:** free consultation + custom quote. No fixed prices anywhere.
- **Rollout:** pilot first — build hub + 2 flagships (Custom Software, AEO/GEO) to full depth, owner approves the design/depth, then produce the other 7 to match.
- **Proof:** capability- and process-led. NO fabricated clients, logos, project counts, or case studies. Trust is anchored to the REAL education-side facts only (from `scripts/brand-facts.json`): since 2020, 10,000+ learners, 25+ countries, rated 4.9 across 547 Google reviews. Framing: "the team that teaches these exact tools to 10,000+ learners builds with them too." If the owner later supplies real client proof, it gets added then.
- **Old page:** `/business-solutions` (retired dark theme, overlaps the new Custom-Software + AI spokes) → 301 to `/for-business` in BOTH `netlify.toml` and `_redirects`.

## The 10 pages

| # | Page | URL slug | Primary intent | Pilot |
|---|------|----------|----------------|-------|
| 1 | For Business — Software & Growth Partner (pillar hub) | `for-business` | brand / "software development company" | ✅ |
| 2 | Custom Software Development | `custom-software-development-services` | bespoke builds | ✅ |
| 3 | Web & Web-App Development | `web-application-development-services` | web apps, portals, SaaS UIs | |
| 4 | Mobile App Development | `mobile-app-development-services` | iOS/Android/cross-platform | |
| 5 | AI Development & Automation (AI agents) | `ai-development-services` | AI agents, chatbots, automation | |
| 6 | MVP & Product Development for Startups | `mvp-development-company` | build my MVP/product | |
| 7 | Software Scaling & Modernization | `software-scaling-and-modernization` | scale / re-architect legacy | |
| 8 | Bug Fixing, QA & Maintenance | `software-maintenance-and-support` | fix bugs, support retainers | |
| 9 | SEO Services (technical + content) | `seo-services` | organic growth | |
| 10 | AEO & GEO — AI-Search Optimization | `aeo-geo-optimization-services` | answer/generative-engine optimization | ✅ |

## Page architecture (identical skeleton, per-page content)

Every page is a standalone editorial ("Ledger & Proof") HTML file in `src/pages/`, `body class="biz-page editorial"`.

1. **`<head>`** — unique title + meta description; `<link rel="canonical">`; `robots: index, follow`; OG + Twitter; `<link rel="alternate" type="text/markdown">` to the `.md` twin; favicon; gtag (G-N8BM164YJP + AW-16910316353); Google Fonts (Fraunces + Inter + JetBrains Mono); `editorial-theme.css` + new shared `business-services.css`; `ux-enhancements.js` (REQUIRED — reveals sections); JSON-LD: BreadcrumbList + Service + FAQPage.
2. **Nav** — `<div id="nav-placeholder"></div>` + `components-loader.js` (build inlines nav/footer at deploy).
3. **Hero** (`.section.hero-section`) — eyebrow, H1, subhead, CTA row (Discuss requirement → #lead-form, WhatsApp, Call), real-trust strip.
4. **Answer capsule** (AEO) — answer-first 2-3 sentence summary of the service + how to engage.
5. **What we deliver** — service/deliverable cards.
6. **How we work** — process steps (Discover → Design → Build → QA → Launch → Support).
7. **Tech & capabilities** — stack grid.
8. **Who it's for** — industries / company sizes.
9. **Why Modern Age Coders** — capability + real education trust; explicitly no fabricated client proof.
10. **How we engage** — engagement models (fixed-scope / retainer / dedicated team). No prices; "free consultation, custom quote."
11. **Lead form** (`#lead-form`) — name, work email, phone, company, message (+ hidden service tag). Posts to the backend; on 201 fires Meta Pixel `Lead` and redirects to `/thank-you?src=<page-key>`. Alongside: WhatsApp +91 91233 66161, Call, Email contact@modernagecoders.com.
12. **FAQ** — matches FAQPage schema.
13. **Related services** — interlinks to sibling spokes + hub.
14. **Footer** — `<div id="footer-placeholder"></div>`.

Each page ships with a `.md` twin (answer-first) for AI agents, mirroring existing convention.

## Shared assets

- **`src/css/business-services.css`** — all B2B components (`.biz-hero`, `.biz-trust-strip`, `.svc-grid`/`.svc-card`, `.process-steps`, `.stack-grid`, `.industry-chips`, `.engage-cards`, `.lead-form`, `.biz-cta-row`, `.related-grid`). Editorial tokens only. No purple/cyan, no gradients/glows, no em-dashes.
- **`src/js/biz-lead-form.js`** — shared form handler (validation + POST + success redirect + Meta Pixel Lead). One file, all 10 pages.

## Routing (BOTH files, kept in sync)

For each of the 10 slugs, add to `netlify.toml` and `_redirects`:
`/<slug>` → `/src/pages/<slug>.html` (200 rewrite). Plus the `.md` twin route. Plus `/business-solutions` → `/for-business` (301). No untested splats.

Also: add all 10 `<url>` entries to `sitemap.xml` by hand (generator does not cover these).

## Non-negotiables (brand + safety)

- No em-dashes in any page copy (owner's "AI tell").
- Editorial tokens only; no retired dark/purple "AI look".
- Every stat from `brand-facts.json`; never hand-type a number; never invent B2B proof.
- Every page `index, follow` (never noindex a lead page).
- Include `ux-enhancements.js` and verify by SCROLLING (sections are `opacity:.01` until `.animate-in`).
- Verify the lead form submits end-to-end (201) on the pilot before cloning to the other 7.

## Verification (pilot gate)

1. Build 3 pilot pages + shared CSS/JS + routing + `.md` twins + schema.
2. Load each in a browser, scroll top to bottom, read the copy back (rendered, not source).
3. Submit the lead form once per pilot page; confirm 201 and correct `src` tag.
4. Validate JSON-LD (no syntax errors).
5. Owner reviews depth/design. On approval, produce spokes 3-9 to match.
