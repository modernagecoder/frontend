# Class 10 board prep, wave 3: 80 new pages and the existing 20 improved

Owner request, 2026-11-06. Approved slug list the same day ("yes go and start building").

## Intent

Any search about preparing for CBSE Class 10 Artificial Intelligence (417) or ICSE Class 10 Computer Applications (Java), on Google, Bing or an AI answer engine, should land on one of our pages, and that page should make it easy to see the course and book. The pages are only about board preparation: live classes, full revision from start to end, mock tests, worksheets, previous year and sample or specimen paper questions, doubt discussions, viva and oral practice, practical file and internal assessment help.

## The offer (owner facts, unchanged since 2026-08-25)

- CBSE AI 417: group batch, Monday and Wednesday 9:00 PM IST, `coding.india.group` (Rs 1,499 a month).
- ICSE Computer Applications: mini batch, Tuesday 5:30 PM and Wednesday 8:00 PM IST, `coding.india.miniBatch` (Rs 2,999 a month), India only. Abroad, one to one only (option c, 2026-10-13).
- Both: personalised one to one at the family's time, `coding.india.personal`, for when the batch times do not fit.
- Prices only as `data-price` spans; never typed, never both currencies.

## Scope

- 40 new CBSE pages and 40 new ICSE pages. The registry with slug, primary and secondary keywords and the distinct angle of every page is `scripts/board-prep/series.json` (wave 3 entries). Research method: live web searches of what ranks and what people ask; no keyword-volume tool was available, so the order is judgement.
- Improve the existing 20: absorb the keywords the research assigned to them (list below), the new grouped related-pages block, and links down to the new pages.

### Keywords the existing pages absorb

- sample-paper-and-mock-tests (both boards): mock test series, online test, sample paper solutions.
- important-questions (both): most expected questions, chapter wise question bank; link to every unit or topic page.
- project-and-practical-file / project-and-internal-assessment: practical file program list, project file format, lab assignment list.
- exam-date-and-paper-pattern (both): marking scheme pointer, unit-wise weightage, reading time.
- syllabus-explained (both): deleted syllabus, chapter-wise weightage.
- board-exam-preparation (both): how to score full marks, topper strategy, study plan.
- icse-class-10-java-programs-practice: becomes the hub linking every program-family page.
- python-for-cbse-class-10-ai: advance python, Jupyter, NumPy mean median mode program.

## Non-goals and anti-goals

- No thin pages: every page answers its own search with original worked content (questions, tables, traces, plans), not a re-skinned sibling. Uniqueness gate must pass.
- No copied third-party material: no reproduced past papers, publisher solutions or textbook text. Describe, summarise and write original questions in the same shapes.
- No promises about the 2028 CBSE scheme or any unpublished 2027 paper; no unverified year tags on questions.
- No new design. Same "answer sheet" chassis (`board-prep.css`, `bx-`), so the 100 pages read as one series.

## How it is built (decided)

- Generator `scripts/board-prep/build.js` with one module per page in `content/board-prep/<slug>.js`. Page codes `cb01`..`cb40`, `ic01`..`ic40`.
- Related pages: replace the flat 20-link strip with a grouped block that lists every page of the page's own board (50 links in six groups from `series.json`) and a short row to the other board's hub pages. Same block retrofitted into the 10 hand-written wave-1 pages.
- Course, both formats and fee in the first or second section (the hero offer card), as on every board page.
- Gates per page: build, `wire-board-prep-routes.js`, `pricing:apply`, `verify-cluster-pages.js board-prep`, `check-cluster-uniqueness.js board-prep`, `audit-rendered-ag-pages.mjs --prefix=bx`, render check at 1280 and 390. The gates' slug lists come from `series.json`.
- Discovery: sitemap, llms.txt board-prep section, `.md` twin per page, FAQPage + Course + Article schema, links from the existing CBSE, ICSE, Class 10 and coding-for-board pages.

## Order of work

1. Infrastructure: registry, grouped related block, gates and wiring read the registry.
2. Two preview pages (CBSE `cbse-class-10-ai-mcq-questions`, ICSE `icse-class-10-java-output-questions`). Owner previews before the rest (preview-before-sweep rule).
3. The remaining 78 in batches, highest value first, each batch gated and committed.
4. Retrofit and improve the existing 20.
5. Inbound links, llms.txt, knowledge base mention. Commit, do not push until told.

## Facts to keep straight (verified, see project_board_prep_cluster memory)

- CBSE 417 2026-27: theory 50, practical 50. Part A 10 (five units, 2 each). Part B theory U1 7, U2 11, U3 10, U5 4, U6 8; U4 Statistical Data and U7 Advance Python practical only. Part C: file 15 (at least 15 programs), practical exam 15, viva 5, project 10, project viva 5. CBSE lists 8 suggested programs; any 15-program list is ours, not CBSE's.
- ICSE CA 2027: one 2-hour paper of 100 marks (external) plus internal assessment; Section A 40 compulsory (Q1 20 MCQs x1, Q2 10 x2), Section B any 4 of 6 at 15. At least 20 lab assignments. 2D arrays and wrapper classes in; recursion out (official 2027 syllabus PDF, checked 2026-10-13; a third-party page lists recursion as revision, so the page says recursion is not examined).
- Confirmed 2026-11-06: assertion-reason and two-statement items appear in Section A of the 2025 and 2026 AI 417 main papers and the 2025-26 SQP (marking schemes). The cbseacademic "2026-27" 417 SQP is the 2025-26 paper re-listed.
- Unconfirmed, do not state: separate-vs-combined passing rule for AI, AI in the 2027 second exam, 2027 ICSE specimen changes.
