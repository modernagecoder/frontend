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
| DE026 | coding-for-international-school-students-germany (cis, #843D56) | door-en (en) | 3,674 | 2% vs igcse-computer-science-tutor-germany | Coding for International School Students in Germany | tidy messy labels before you count, and keep "unknown" as its own answer | 15970ced |
| DE043 | coding-interview-prep-for-international-students-germany (cip, #256D6B) | door-en (en) | 3,693 | 1.4% vs ai-and-machine-learning-classes-in-germany | Coding Interview Prep for International Students in Germany | brute force first, then trade memory for time, and prove it by doubling n | 63c84680 |
| DE044 | python-and-dsa-for-international-students-germany (pdi, #88283C) | door-en (en) | 3,627 | 2.1% vs ib-computer-science-tutor-germany | Python and DSA for International Students in Germany | look up the cost of each operation before you choose the data structure | 44a33fd4 |
| DE031 | ai-course-for-school-students-germany (aic, #804728) | door-en (en) | 4,645 | 2% vs coding-for-international-school-students-germany | AI Course for School Students in Germany, Taught in English | the step size decides everything; too small crawls, too large explodes | 3b2be59c |
| DE033 | roblox-coding-classes-germany (rco, #0A5F38) | door-en (en) | 4,008 | 2.4% vs ib-computer-science-tutor-germany | Roblox Coding Classes in Germany, Live in English | never trust the client; the server checks every request | 266ddaea |
| DE034 | minecraft-coding-classes-germany (mco, #007162) | door-en (en) | 3,914 | 1.2% vs ib-computer-science-tutor-germany | Minecraft Coding for Kids in Germany, Live in English | check a result by computing it a second, independent way | ee78cd3d |
| DE039 | online-coding-summer-camp-germany (csc, #5A4B75) | door-en (en) | 3,904 | 2.3% vs roblox-coding-classes-germany | Online Coding Summer Camp in Germany 2027, Live in English | a week is not seven days from any date; align to Mondays before you count | 0afbe862 |
| DE040 | online-coding-classes-europe (ceu, #873A02) | door-en (en) | 3,757 | 2.3% vs online-coding-summer-camp-germany | Online Coding Classes in Europe, Live and in English | convert through UTC; a local time can be missing or happen twice | bbb723fd |
| DE041 | vibe-coding-and-ai-agents-classes-germany (vca, #5E5B00) | door-en (en) | 3,844 | 1.9% vs roblox-coding-classes-germany | Vibe Coding and AI Agents Classes in Germany, in English | write the tests before you trust generated code | 4ad6e6e2 |
| DE042 | app-development-classes-for-teens-germany (adt, #3D5A21) | door-en (en) | 3,892 | 2.2% vs ai-course-for-school-students-germany | App Development Classes for Teens in Germany, in English | never change state in place; copy it, and the screen and undo stay right | c7f3027d |
| DE045 | informatik-biber-practice-in-english (ibp, #702A52) | competition (en) | 4,570 | 1.2% vs coding-classes-for-kids-berlin | Informatik-Biber Practice in English for Pupils in Germany | reason first, then make the computer check every case (exhaustive search as a proof checker) | a2f6a05f |
| DE047 | jugendwettbewerb-informatik-preparation (jip, #345F8D) | competition (en) | 4,246 | 1.9% vs informatik-biber-practice-in-english | Jugendwettbewerb Informatik 2027 Preparation in English | trace the program by hand, then run it (prediction before execution) | (this commit) |

## Notes

- Pilots (P1) for owner preview: coding-classes-for-kids-berlin, abitur-maths-in-english, informatik-nachhilfe-online.
