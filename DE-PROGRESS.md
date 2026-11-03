# Germany cluster progress

Spec: docs/superpowers/specs/2026-11-02-de-cluster-design.md. Rows: ~/Desktop/SkyCoders/keyword-research-2026-09/de/rows.tsv (204). Commit only on local main, never push until the owner says push. Ship with `bash scripts/nl/de-ship.sh`.
Owner rules for this cluster (2026-11-02): English pages plus German-language doors; classes are live, in English only, with mentors who match the learner's pace and accent (every page says so; the at-a-glance panel carries it automatically); pages show euro through data-price anchors, checkout charges USD (pricing.config.jsonc "germany").

## Done

| row | slug | type | words | overlap | spine | trap | commit |
|---|---|---|---|---|---|---|---|
| P1-1 | coding-classes-for-kids-berlin (ber, #8A2D1C) | city door (EN) | 4,183 | 5.2% vs abitur-maths-in-english | Berlin school gaps, Biber 2026, bike counter | a missing value is not a zero | 08e0769b |
| P1-2 | informatik-nachhilfe-online (inf, #1E5560) | German door (DE) | 3,438 | 0.7% vs coding-classes-for-kids-berlin | Informatik Pflichtfach in all 16 Laender, Schreibtischtest | trace the loop, test the boundary | ec10827e |
| P1-3 | abitur-maths-in-english (abm, #2B4A6F) | pillar (EN) | 3,611 | 5.2% vs coding-classes-for-kids-berlin | IQB pool structure, marks, NRW 2027 dates, operators | answer the operator | f54e2c36 |
| DE001 | coding-classes-in-germany (gmy, #3D5A3A) | country hub (EN) | 4,476 | 3.2% vs coding-classes-for-kids-berlin | KMK school stages, 2026/27 contests, summer holidays 2027 | is the last day in or out | a56448ae |
| DE002 | ai-and-machine-learning-classes-in-germany (dki, #5B3A68) | AI door (EN) | 4,070 | 3% vs coding-classes-in-germany | KMK AI frame, BWKI, tool ages, Bochum weather model | beat the baseline, test on unseen data | 0d9bd24a |
| DE004 | informatik-in-german-schools-by-state (isb, #784617) | pillar (en) | 4,075 | 1.7% vs coding-classes-in-germany | Is Computer Science Compulsory in German Schools? By State | a guarantee "for all" is the minimum across groups, not the maximum | b23421d5 |
| DE007 | abitur-vs-ib-vs-a-levels-maths (aib, #026256) | pillar (en) | 3,983 | 1.7% vs informatik-in-german-schools-by-state | Abitur vs IB vs A Levels: Maths Compared for Germany | apply a published formula, then test it at its endpoints | 97bd3532 |
| DE003 | german-school-system-maths-and-computing-explained (ssm, #7B4409) | pillar (en) | 4,669 | 1.8% vs coding-classes-in-germany | German School System Explained in English: Maths and Computing | model the system as a graph, list every path, and guard against going round in circles | 1347cc2f |
| DE006 | abitur-computer-science-in-english (acs, #00634A) | pillar (en) | 3,820 | 1.4% vs informatik-in-german-schools-by-state | Informatik Abitur in English: How the Exam Works by Land | predict the row count before you run a query | c3418f0b |
| DE012 | learn-to-think-not-copy-ai-germany (lto, #6C4170) | pillar (en) | 3,829 | 1.9% vs informatik-in-german-schools-by-state | Learn to Think, Not Copy AI: Coding Classes in Germany | check a confident rule against the definition across many cases, not just the one you tried | d45f32ce |
| DE021 | ib-computer-science-tutor-germany (ico, #604073) | door-en (en) | 4,481 | 1.7% vs ai-and-machine-learning-classes-in-germany | IB Computer Science Tutor in Germany, Live Online in English | turn a rulebook into code, then test it with cases that should fail | 84ffdf90 |
| DE023 | igcse-computer-science-tutor-germany (igc, #6E4604) | door-en (en) | 3,807 | 1.7% vs ib-computer-science-tutor-germany | IGCSE Computer Science Tutor in Germany (0478), in English | write it in pseudocode first, then translate it line by line into Python | b29223fc |
| DE024 | ap-computer-science-tutor-germany (aco, #285D29) | door-en (en) | 3,949 | 2% vs ib-computer-science-tutor-germany | AP Computer Science Tutor in Germany: CSA and CSP in English | trace the 2D array by hand, column by column, before you trust the loop | bb2ed43f |
| DE026 | coding-for-international-school-students-germany (cis, #843D56) | door-en (en) | 3,674 | 2% vs igcse-computer-science-tutor-germany | Coding for International School Students in Germany | tidy messy labels before you count, and keep "unknown" as its own answer | (this commit) |

## Notes

- Pilots (P1) for owner preview: coding-classes-for-kids-berlin, abitur-maths-in-english, informatik-nachhilfe-online.
