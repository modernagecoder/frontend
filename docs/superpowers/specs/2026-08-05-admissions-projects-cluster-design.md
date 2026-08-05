# Admissions Projects cluster (7 pages)

Date: 2026-08-05
Status: approved by owner, building

## Problem

Parents in the US, UK, Singapore and Canada want their child to build a real coding
or AI project because they believe a submitted project decides admission. Research
run on 2026-08-05 (sources listed below) found the belief is partly true and the
mechanism differs sharply by market. There is real, high-volume search demand around
project ideas, extracurriculars and portfolios. Modern Age Coders has no page
capturing any of it.

## Goal

Seven indexable landing pages that rank for the highest-volume US search terms in
this space, carry genuine depth, and convert into leads through a form that does not
silently drop foreign phone numbers.

## Owner decisions

1. **Offer**: both. A Portfolio Program is the flagship on every page, with the
   existing Python / AI-ML / Vibe Coding courses shown as the feeder path.
2. **Pricing**: show existing live prices, pulled from `pricing/pricing.config.jsonc`.
   Coding: India 1,499 group / 2,999 mini / 7,500 personal. International 100 group /
   150 personal. No hand-typed figures.
3. **Structure**: highest US search volume (option B), chosen over the
   admissions-system split (option A).

Two risks were flagged before the choice and are engineered around rather than
re-argued:

- *"Passion project" scepticism.* Admissions officers now discount manufactured
  passion projects. Rather than drop the keyword, the page leads with that fact.
  Honesty is the differentiator and it is what converts a sceptical parent.
- *Collision with `/ai-ml-projects-for-students`.* Checked: that page targets hiring
  ("a portfolio that gets you hired"). The new page takes school-age admissions
  intent. The two cross-link instead of competing.

## Page map

All seven slugs verified free in `src/pages/` on 2026-08-05.

| Slug | Primary intent | Unique fact spine |
|---|---|---|
| `passion-project-ideas-computer-science` | passion project ideas | NACAC weights, over-coaching signal |
| `computer-science-extracurriculars` | CS extracurriculars | what carries weight vs filler |
| `ai-projects-for-high-school-students` | school-age AI/ML builds | admissions framing, feeder ladder |
| `science-fair-project-ideas-ai` | science fair AI project | ISEF affiliated-fair rule, 12-month cap |
| `hackathons-for-high-school-students` | hackathons | Congressional App Challenge rules |
| `how-to-build-a-coding-portfolio` | portfolio how-to | MIT: codebase plus working demo |
| `summer-research-programs-coding` | summer research | RSI, MIT PRIMES, SSP facts |

## Page architecture

Each page renders these blocks, target 2,200 to 3,000 words:

1. Hero: H1, subhead, CTA row, trust strip, side panel
2. Answer capsule (AEO pattern already used site-wide)
3. TL;DR
4. The honest verdict: verified facts with outbound citations
5. Project or opportunity list: 12 to 16 concrete entries, tiered
6. What finished means: repo, working demo, build log, defence
7. Timeline before the deadline
8. How we do it: Portfolio Program flagship, courses as feeder
9. Proof: real student projects from `student-labs.html`
10. Pricing panel from `pricing.config.jsonc`
11. FAQ, 8 to 10 questions
12. Related links, internal cluster plus existing pages
13. Lead form and WhatsApp

## Implementation

- **Generator**: `scripts/gen-admissions-projects.js`, modelled on
  `scripts/gen-b2b-services.js`. Data-driven `PAGES` array, emits `.html` and `.md`
  twins to `src/pages/`, prints routing and sitemap blocks. Output is regenerable and
  never hand-edited.
- **Shell**: `body.editorial`, `editorial-theme.css` plus new
  `src/css/admissions-projects.css`. Scripts: `ux-enhancements.js` (mandatory, the
  page is blank below the hero without it), `components-loader.js`,
  `callback-modal.js`, `admissions-lead-form.js`.
- **Lead form**: new `src/js/admissions-lead-form.js`, copying the proven 10-digit
  rescue from `biz-lead-form.js`. The backend requires `contact` to be exactly 10
  digits, which is India shaped, so the real number the parent typed always travels in
  the message body. Without this every US, UK and Singapore lead is dropped. Fields
  add student year, target country and deadline; extras fold into the message because
  the backend accepts a fixed field set.
- **Schema**: `WebPage`, `FAQPage`, `BreadcrumbList`, `Organization`, plus `ItemList`
  on the four list pages and `HowTo` on the portfolio page. No `AggregateRating` and
  no `Course`.
- **Routing**: entries in both `netlify.toml` and `_redirects`, inserted above the
  `/*` catch-all which must remain the last line in both files. Manual `<url>` blocks
  in `sitemap.xml`. Every page `index, follow`.

## House rules carried in

- No em-dashes anywhere in copy.
- Every self-referential stat from `scripts/brand-facts.json`: 10,000+ students,
  547 reviews, 4.9 rating, founded 2020, 25+ countries, ages 6 to 67.
- No fabricated student names, outcomes, admissions results or testimonials.
- No claim that a course causes admission.

## Verification before done

Run the dev server, load all seven rendered pages, read the text back, confirm
content below the hero appears. Run `scripts/check-all-links.js`. File counts are not
verification.

## Sources for the factual claims

- NACAC, Factors in the Admission Decision
- MIT Admissions, Creative portfolios
- Oxford Department of Computer Science, personal statement guidance
- Society for Science, Regeneron ISEF rules and FAQ
- Congressional App Challenge, official rules
- Center for Excellence in Education, RSI
- UCAS 2026 personal statement three-question format
