# Canada Cluster, Plan 2: build every remaining Canada page

> Owner 2026-10-22, after previewing the 3 pilots: "yes go ahead build all canada pages". Spec `docs/superpowers/specs/2026-10-22-ca-cluster-design.md`; Plan A (pipeline, phone fix, live fixes, C1 + C3, pilots) is done. Writer brief: `docs/superpowers/plans/2026-10-22-ca-writer-brief.md` (every writer reads it whole).

**Goal:** the remaining 171 rows of `keyword-research-2026-09/ca/rows.tsv`, courses C2, C4, C5, and Phase 0b, all committed on local `main`, never pushed.

**Allocation (fixed):** `keyword-research-2026-09/ca/alloc.tsv` gives each row its `cluster` (ag for topic rows, cg for provinces, cities and math-tutor cities), `pageType` (`market` 3,000-word floor, `city` 2,200), unique `code` and accent (at least 10 max-channel units from every other Canada accent, 6 from every other site colour, contrast at least 4.8 on #EDE7DA).

**Workflow:** writer agents draft `content/ca/<slug>.js` and prove each with `node scripts/nl/build.js <slug> --dry-run`. Only the main session ships, one page at a time: link down from the Canada hub (`node scripts/nl/link-down.js ... --anchor "<!-- CA-GUIDES -->" --insert $'\n<li>...'`), then `CA_LOGS=... bash scripts/nl/ca-ship.sh <slug> <row> "<family>" "<spine>" "<lesson family>" <msg>`. Every 10 ships: `npm run -s pricing:verify`, `verify:sitemap`, `verify:hreflang`.

## Decisions taken by default (reversible)
- **Cost pages (rows 82, 83, 84) wait for Plan B.** Their search intent needs market prices, which are in Canadian dollars; Canada pages are currency-neutral until the Canadian price region is live. They are built in Plan B with CAD figures.
- **Comparison pages (87 to 90)** name the competitor (as the existing `modern-age-coders-vs-*` pages do) with facts from that competitor's own site only (`facts-competitors.md`), dated and neutral, and no competitor prices (currency-neutral rule).
- **Spokes of existing hubs:** CCC rows link up to `canadian-computing-competition-ccc-prep`; Waterloo maths contest rows to `cemc-waterloo-contests-preparation`; math-tutor cities to `online-math-tutor-canada`; provinces and cities to the Canada hub (and their province page once it exists).
- **CONDITIONAL rows** (27, 30, 31, 34, 60, 92 to 100 where a source was blocked): the writer re-fetches first; a row still under 8 verified facts is reported SKIP and logged.

## Waves
- **Wave 1 (Phase 2, 84 rows without the 3 cost rows):** 14 writer groups, launched 7 at a time (RAM): Ontario CS, Ontario math, Ontario senior math, Quebec + reference tables, CS contests, Waterloo maths contests (two groups), admissions, BC, Alberta, doors (two groups), best/think/breaks, comparisons.
- **Wave 2:** 10 provinces and territories, then 58 cities and 16 math-tutor cities.
- **Courses C2, C4, C5** (Waterloo Math Contests, Ontario Grade 12 University Math, Western Canada Grade 12 Math) are built and wired alongside Wave 1, before the pages that pick them ship.
- **Phase 0b** (strengthen the 8 older Canada pages, global pages Canadians already find, the hub's school-names section) after Wave 2.
