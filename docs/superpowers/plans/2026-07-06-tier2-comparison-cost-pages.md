# Tier 2 Comparison & Cost Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans. Content blueprints, verified fact base, and hard constraints live in the spec: `docs/superpowers/specs/2026-07-06-tier2-comparison-cost-pages-design.md` — every task below implicitly includes them.

**Goal:** Ship the 14-item "Fair Comparison" cluster: 7 vs-competitor pages, 4 cost pages, 2 disclosed listicles, fee-calculator maths/USD upgrade.

**Architecture:** One shared stylesheet `src/css/compare-pages.css` (`cx-` prefix, extracted from the live combined vs-page identity: Source Serif 4 / Inter / JetBrains Mono, fair tables, reveal-with-noscript). One page template `scratchpad/cx-template.html` with tokens ({{TITLE}} {{DESC}} {{SLUG}} {{ACCENT}} {{SCHEMA}} {{MAIN}}), self-contained light nav + footer copied from the existing vs-page. A render script fills tokens per page from per-page main-content files. Pages do NOT load international-pricing.js.

**Tech Stack:** Static HTML/CSS, Node render script (scratchpad), Netlify routing, JSON-LD.

## Global constraints
Spec's fact base is the ONLY source of competitor numbers; every table carries "typical published prices, as of July 2026" + sources. Real Google reviewers only. No refund language, em dashes, emojis. Full head SEO + mac-org-ld. Routing: `_redirects` + `netlify.toml` + `sitemap.xml` + `.md` twin (+ twin route) per page. Browser-verify 1440+390, zero console errors, then commit — one commit per page (or tight group).

### Task 1: Cluster foundation
- [ ] Read existing vs-page fully; extract its two `<style>` blocks into `src/css/compare-pages.css` under `cx-` names (keep: nav, hero, verdict cards, compare table w/ highlighted MAC column, section rhythm, quotes, FAQ accordion, CTA, footer, reveal+noscript, responsive).
- [ ] Build `cx-template.html` (tokens above) with the light self-contained nav/footer from the existing vs-page, head SEO block, hreflang trio, md alternate, mac-org-ld.
- [ ] Render script `render-cx.js`: reads config JSON per page {slug,title,desc,ogTitle,accent,schemaFile,mainFile} → writes `src/pages/<slug>.html`.

### Task 2: vs-mathnasium (template-setter) — full blueprint from spec; verify hard, this sets the cluster bar. Routes+twin+sitemap+commit.
### Task 3-8: vs-kumon, vs-cuemath, vs-juni-learning, vs-tynker, vs-outschool, vs-codingal — same blueprint, per-competitor facts + genuinely different honesty sections. Routes+twins+sitemap+commit each.
### Task 9-12: cost pages (online-math-tutor-cost, coding-classes-for-kids-cost, private-math-tutor-vs-online-tutoring, coding-classes-cost-india-2026) — cost blueprint from spec; answer-first hero (AEO), cost-by-format table, market currency only. Routes+twins+sitemap+commit each.
### Task 13-14: listicles (best-online-math-tutoring-2026, best-online-coding-classes-for-kids-2026) — ranked cards + disclosure box + ItemList schema. Routes+twins+sitemap+commit each.
### Task 15: fee-calculator — read internals; add maths tier options; replace exchange-rate USD derivation with flat intl prices (coding $40/$100, maths $100/$150) for all non-INR currencies (other currencies may keep FX display derived FROM the USD flat price); update its md twin; verify calculator interactions in browser; commit.
### Task 16: final sweep — routing parity for all 13 slugs + twins; sitemap +13; every page's related-links resolve (no 404 hrefs); add "See detailed comparisons" link under /pricing intl table note → /best-online-math-tutoring-2026 + 2 vs-pages; full console-error pass; commit.
