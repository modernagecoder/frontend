# SEO + AI-visibility action plan — 2026-09-03

Produced by running all 11 `superseo` skills against the live site. Each skill's full working is in
its own numbered file. This is the decision list.

**Status key:** SHIPPED = changed in this working tree and verified · OWNER = needs a decision only the
owner can make · SPEC = written up ready to execute.

---

## The one-line summary

The site's technical GEO layer is already better than its competitors' (AI crawlers allowed,
`llms.txt` present, per-cluster sitemaps, markdown twins for agents) and it is already cited by name
in AI answers for its category. **What holds it back is not technical. It is that nothing on the site
is corroborated by anyone except the site.** Codingal does not claim to be good; it points at Y
Combinator, STEM.org, IIT Roorkee and the Times of India. That is the gap, and it is Phase 9 work.

---

## SHIPPED in this session

| # | Fix | Scope | Verified by |
|---|---|---|---|
| 1 | Removed a **verifiably false "world's first" claim** | 10 instances, 6 pages + 2 blog posts + 6 `.md` twins | grep to zero; third-party "world's first" facts left intact |
| 2 | **Tariff removed from `FAQPage` schema on every course page** | 106 pages, via one filter in `scripts/generate-courses.js` | 0 leaks after regen, 121/121 FAQPage blocks still emitted, prices still visible |
| 3 | **Mobile horizontal-scroll bug** killed | every `editorial-theme.css` page | Playwright: hScroll 335 → 0 at 390px on 5 page types, sticky and vertical scroll intact |
| 4 | Homepage title 80 → **60 chars**, meta description 205 → **136** | homepage | char count |
| 5 | Two orphan `provider` schema nodes relinked to `#organization` | homepage | JSON-LD reparsed, 3/3 blocks valid |
| 6 | Founder's personal LinkedIn moved off the **organization** `sameAs` | homepage | it stays on the `founder` Person node, where it belongs |
| 7 | `llms.txt` age range 6-65 → **6 to 67** | the file AI agents read first | grep |
| 8 | Kolkata page: price + two stale ages out of FAQ **and** its schema | `/best-coding-class-in-kolkata` | schema reparsed clean |
| 9 | New **"Python classes for kids and teens in Kolkata"** section, ~380 words | the query the page was losing | rendered at 1280 and 390, 1,999 chars, 16.32px, 3 links |
| 10 | **Kids age floor 8 → 6** on generic tracks (owner approved in session) | **310 labels across 297 files** | 75 Python/AI course bands correctly left at 8; 0 invalid JSON-LD site-wide; rendered check on 5 pages |
| 11 | Featured-snippet block rebuilt: `<span>` → query-matching `<h2>`, 90-word answer → **47** | `/best-age-to-start-coding` | rendered, `validate-heading-hierarchy.js` clean |
| 12 | **Crunchbase profile added to organization `sameAs`** | homepage | it already existed and Google already trusts it; it was simply never declared |
| 13 | `brand-facts.json` group batch **5-8 → 5-10** (owner ruling) | source of truth | JSON valid |

### 1 in detail, because it is the important one

> "Modern Age Coders is the world's first platform offering integrated maths and coding online."

Khan Academy shipped computer programming in **August 2012** next to a maths curriculum older than
that. The company was founded in 2020. In the live SERP, WhiteHat Jr's own title tag reads "Live
Online Coding, **Math** & Music Classes".

It was worse than a stale line. It sat inside a `FAQPage` **answer** on the WhiteHat Jr comparison
page ("Yes! This is our biggest differentiator...") which means it was being handed to Google and to
every LLM as pre-parsed structured data, on the page whose subject disproves it. Replaced with the
substance claim, which says the same thing and is true: *maths and coding taught as one subject, not
two.*

Ancillary benefit: this site's numbers are unusually disciplined, and an unfalsifiable superlative
sitting beside them invites a rater, and a model's own reliability weighting, to discount the honest
ones too.

---

## OWNER decisions

### A. The kids age floor — **RESOLVED AND SHIPPED IN THIS SESSION**

Owner approved during the run. 310 labels across 297 files moved from "Ages 8-12" to "Ages 6-12";
75 instances where the range is attached to a Python, AI, vibe-coding, hackathon or Princess Coders
course were left at 8, because 8 is the real floor for those. Verified: no generic 8-12 label
survives, no JSON-LD broke, and five pages render correctly at 390 and 1280.

Original write-up kept below for the record.

### A (original). The kids age floor, on 139 pages · *highest revenue impact on this list*

`brand-facts.json` records the floor moving **8 to 6** on 2026-07-18. The shared nav already says
"For Kids (Ages 6-12)". But **139 pages still label the generic kids track "Ages 8-12"**, and on the
Kolkata page both appeared in one viewport. Codingal advertises from **age 5**. Being wrong by three
years in the older direction turns away enrollments and contradicts the site's own navigation.

Separately, **26 pages** attach "8-12" to a specific Python / AI / vibe-coding course. Those are
probably **correct**, since those courses sit above the Scratch stage. 7 pages have both kinds.

**The decision:** confirm that generic kids-track labels go to 6-12 while course-specific Python/AI
bands stay at 8. Then this is one scripted pass, not 139 judgement calls. Review
`best-age-to-start-coding.html` by hand either way, since there an age range is the subject rather
than a label.

### B. Tariff in `FAQPage` schema — **DONE. Closed site-wide in `1f967d55`**

296 fee Q&As removed from `FAQPage` JSON-LD across 278 `src/pages`, plus a filter added to
`generate-blogs.js` matching the one in `generate-courses.js`, which cleared the last 4 on the blog
comparison posts. **Site-wide result: 0 price leaks, 1,108 FAQPage blocks still emitted, 8,818
questions retained, 0 invalid JSON-LD.** The visible FAQ keeps its price on every page.

Roughly a third of the removed items turned out to exist in the schema but nowhere in the visible
copy, which is its own Google guidelines problem. Those pages are now consistent.

**One correction to what this document said earlier:** the visible FAQ price is **not**
region-switched. It is hardcoded INR followed by a sentence pointing international readers at the
on-page pricing, with no `data-price` anchor. Making the visible copy region-aware is a separate and
larger job, and it is untouched. It is the natural next piece of this work.

Original write-up kept below for the record.

### B (original). The remaining 279 `src/pages` with tariff in `FAQPage` schema

The generated course pages are fixed at the generator (#2 above). **279 hand-maintained pages in
`src/pages` still emit our own INR prices inside `FAQPage` JSON-LD.** Structured data is region-blind,
so `international-pricing.js` never gets a say: a parent in Dubai, London or New Jersey asking Google
or a chatbot what this school costs is quoted rupees.

These are not scriptable as one regex. The proven pattern from the Kolkata fix is: each answer exists
**twice**, once in JSON-LD and once in the visible `<details>`, with identical text, so a paired
replacement is safe per page but the replacement wording has to suit the question. 28 distinct fee
questions exist, so this is roughly 28 wordings, not 279.

**Recommended:** keep prices in the visible copy. Showing real prices is a genuine advantage over
Codingal and Codeyoung, both of which hide fees behind a counsellor call. Only the region-blind schema
copy needs to go. That is exactly what #2 does, and the same approach should be ported to whatever
generates the `src/pages` FAQ schema.

*(An early pass flagged 661 pages. That number was wrong and is not used here: most hits were
third-party figures, developer salaries, Coursera fees, EU and government budgets, which the
one-currency rule does not cover. Filtered to this company's own price points, it is 385: 106 fixed,
279 open.)*

### C. Batch size — **ruled, partially shipped, reconciliation outstanding**

Owner ruled during the run: **the true cap is 10**, the course FAQs were right.
`brand-facts.json` now reads `group: "5–10"` with the decision recorded.

**What is still outstanding, and why I did not sweep it automatically:**

**831 files carry 3,367 instances of the old 5-8 claim.** A guarded script that finds all of them,
in both numeric ("5-8 students", "5–8 learners per batch", "batches of 5-8") and written-out ("a batch
of five to eight students") forms, is saved at `reconcile-batch-size.py` in this folder. It runs dry
by default; pass `--apply`.

I stopped short of running it, for three reasons:

1. **Scale.** 3,367 edits across 831 files is roughly two thirds of the site's content, and it lands
   on the core value proposition rather than on a label.
2. **Some instances are arguments, not statements.** For example: *"as long as the batch is genuinely
   small, five to eight children with a real mentor"*. Mechanically rewriting that to "five to ten"
   weakens a deliberate piece of persuasion. A human should decide those.
3. **Direction of travel.** 5-10 reads as a bigger class than 5-8. That is a marketing call with
   revenue attached, and it deserves a look at the copy rather than a regex.

Also worth knowing: **"Grades 5-8" and "Class 5-8" exist on the site** and must never be caught by
such a sweep. The saved script vetoes them; a naive find-and-replace would not.

**Board-prep is deliberately excluded.** Its "group 10 to 15" was set by the owner in commit
`77f3bf39`, nine days before this run, for a different product. It stays until told otherwise.

### D. `legalName` — confirm before deploy

I changed the homepage `Organization.legalName` from "Modern Age Coders Education" to **"The Mahaviras
Education LLP"**, inferred from a single line on `/about` ("Modern Age Coders comes under The Mahaviras
Education LLP"). It is probably right and it is a legal-entity field in structured data, so please
confirm rather than take my inference.

### E. AggregateRating deadline: **2026-09-15, twelve days out**

Carried forward from the prior audit and still unaddressed. `AggregateRating` is currently kept only
on `Course` and the `/pricing` Product, by the owner's own call. Whatever the plan is for that date,
it needs a decision this week.

---

## SPEC — ready to execute, in priority order

1. **Off-site corroboration (Phase 9).** The real lever, and the reason the site loses category terms
   to Codingal. Full phase-appropriate plan in `10-linkbuilding.md`.
2. **Name the humans.** No instructor is named on the homepage or `/about`; all three competitors name
   people and two publish founder credentials. `02-eeat-audit-about.md`.
3. **Claim the adult-learner category.** Every competitor stops at 18. The 6-to-67 span is real,
   uncopyable, and currently buried in a title-tag suffix. `07-topic-cluster-planning.md`,
   `06-content-brief.md`, `09-write-content.md`.
4. **Finish the Kolkata page** (Scratch 6-9, six local FAQs, WB-boards maths crossover, ~1,100 words).
   `03-semantic-gap-kolkata.md`.
5. **Featured snippet capture** on the terms the site verifiably already ranks for.
   `05-featured-snippet-optimizer.md`.
6. **Ask the owner the eight questions** in `11-expert-interview.md`. Several deliverables above are
   blocked on first-party facts that must not be invented.

---

## Deliverables

| File | Skill |
|---|---|
| `01-page-audit-homepage.md` | page-audit |
| `02-eeat-audit-about.md` | eeat-audit |
| `03-semantic-gap-kolkata.md` | semantic-gap-analysis |
| `04-improve-content-kolkata.md` | improve-content |
| `05-featured-snippet-optimizer.md` | featured-snippet-optimizer |
| `06-content-brief.md` | content-brief |
| `07-topic-cluster-planning.md` | topic-cluster-planning |
| `08-keyword-deep-dive.md` | keyword-deep-dive |
| `09-write-content.md` | write-content |
| `10-linkbuilding.md` | linkbuilding |
| `11-expert-interview.md` | expert-interview |
