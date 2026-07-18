# Freshness Calendar (VISIBILITY-100X Phase 4.4)

Content under 30 days old earns ~3.2x more AI citations; content over 90 days loses citation share.
The rule that makes this safe: **every `dateModified` / sitemap `lastmod` bump MUST ride a real content
edit.** Fake freshness (bumping the date without changing anything) is detected and penalised. Never
run a date bump on its own.

## The money set (rotate monthly)

| Week | Pages to refresh |
|------|------------------|
| Week 1 | Homepage, `/pricing`, `/courses` |
| Week 2 | The 3 pillars: `best-java-classes-in-india`, `best-c-plus-plus-classes-in-india`, `best-ai-and-machine-learning-course-in-india`; maths hub `online-maths-tuition` |
| Week 3 | Top-10 city pages (by traffic), rotating so each is touched at least quarterly |
| Week 4 | Comparison pages + the oldest blog posts (blog audit: 82/93 have never been updated) |

## What a refresh actually is (pick at least one real change per page)

- Update one statistic to the current figure (from `scripts/brand-facts.json` for self-stats).
- Add or reword one FAQ (keep visible == FAQPage schema; see the pillar/course scripts).
- Refresh one example, screenshot, or dated reference.
- For blogs: improve the TL;DR or a section, then the `meta.dateModified` bump is legitimate.

Then, and only then:

1. Update the visible "updated" date if the page shows one.
2. Bump `meta.dateModified` (blogs/courses JSON) — or just commit the HTML edit for static pages.
3. Refresh sitemap `lastmod`: `node scripts/update-sitemap-lastmod.js --apply --ignore-commits "^Phase 0\."`
   (blog/course lastmod comes from `meta.dateModified`; static pages from the git date of the routed file).
   NOTE: this script rewrites the WHOLE sitemap (600+ URLs) from git dates — review the diff before
   committing so a mechanical sweep (re-inlining nav/footer) does not fake-freshen untouched pages.

## Seasonal calendar (Phase 5.8) — build or refresh 6 to 8 weeks BEFORE the wave

Year-stamped titles flip on the trigger date (for example "Summer Coding Camp 2027" is set in January, well before the season). Every flip is a real edit, so the `dateModified` and sitemap `lastmod` bump is legitimate.

| Season | Prep window | Peak | Pages to year-stamp and refresh |
|--------|-------------|------|---------------------------------|
| India summer camp | Feb to Mar | Apr to Jun | `/summer-coding-camp` + kids camp landing pages, retitle to the coming year |
| US / UK / Gulf summer camp | Mar to Apr | May to Aug | international kids and summer content, retitle to the coming year |
| Back to school | Aug | Aug to Sep | homepage seasonal CTA, kids and board pages, "new school year" framing |
| Board exam prep (India) | Dec to Feb | Jan to Mar | CBSE and ICSE maths + Computer Science board-prep pages, Class 10 and 12 |
| SAT and international exam prep | per test date | rolling | SAT maths + IGCSE and IB pages, stamped to the current cycle |

Owner action: set a reminder about six weeks before each prep window to flip the year in the title + make one real content update, then bump `dateModified` and refresh sitemap `lastmod`.

## Status

- 2026-07-18: whole money set + 93 blogs + 11 comparison pages received REAL content edits this cycle
  (Phase 4.1/4.2/4.3), so their next sitemap-lastmod run legitimately stamps today.
- Next cycle due: 2026-08-18 (Week 1 of the rotation above).
