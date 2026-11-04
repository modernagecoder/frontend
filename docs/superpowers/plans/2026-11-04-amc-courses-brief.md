# AMC 8, AMC 10, AMC 12 courses: writer brief (2026-11-04)

Owner request: "make detailed courses on AMC 10 and AMC 12 and AMC 8 in courses and atlas-courses so that
anyone reads in detail and understands everything." Three course data files, one per writer.

## Files (write ONLY your own file; touch nothing else in the repo)
| Course | Data file | slug | image_path |
|---|---|---|---|
| AMC 8 | content/courses/data/amc-8-math-prep.json | amc-8-math-competition-prep-course | amc-8-math-prep.webp |
| AMC 10 | content/courses/data/amc-10-math-prep.json | amc-10-math-competition-prep-course | amc-10-math-prep.webp |
| AMC 12 | content/courses/data/amc-12-math-prep.json | amc-12-math-competition-prep-course | amc-12-math-prep.webp |

## Model to copy the SHAPE from
`content/courses/data/shsat-math-prep.json` (read it whole first). Same top-level keys, in this order:
meta, program_overview, phase_1_*, phase_2_*, phase_3_*, (phase_4_* for AMC 10 and 12), faqs,
additional_learning_resources, prerequisites, who_is_this_for, career_paths_after_completion, course_guarantees.
meta: slug, date "2026-11-04", title, description (150 to 160 chars), keywords (12 to 15 real search terms),
category "Competition Mathematics & Olympiad Training", taxonomy "mathematics",
price {group "₹1,499/month", miniBatch "₹2,999/month", personal "₹4,999/month"}, duration, level, commitment,
certification (say it is not an MAA document or score), image_path, dateModified "2026-11-04".
career_paths_after_completion MUST be a list. course_guarantees: same honest style as the SHSAT file
(live classes with a real teacher; group batches of 15 to 20 or 1-on-1; original problems; feedback; independence:
"We are independent of the MAA and promise learning, never scores, AIME qualification or awards").
prerequisites.timing: copy the SHSAT wording exactly.

## Structure and depth (this is the point of the request)
- AMC 8: 6 months, 24 weeks, 3 phases x 2 months x 2 week-pair blocks (week_1_2, week_3_4 ...) = 12 blocks.
- AMC 10: 8 months, 32 weeks, 4 phases x 2 months x 2 blocks = 16 blocks.
- AMC 12: 8 months, 32 weeks, 4 phases x 2 months x 2 blocks = 16 blocks; phase 4 includes an AIME bridge.
Phase key: phase_N_<snake_name> with title "PHASE N: <name> (Months a-b, Weeks x-y)" and description.
Month key: month_N_<snake> with title "Month N: ..." and weeks "Weeks x-y".
EVERY week block has:
- title "Weeks x-y: ..."
- description: 2 to 4 plain sentences that TEACH the central idea in words a parent and a 12-year-old can follow
  (what it is, why it matters on the contest, the one trap students fall into).
- topics: 6 to 9 specific items (named techniques, not vague headings).
- worked_example: { "problem": an ORIGINAL contest-style problem (multiple choice is fine, list choices in the text
  as (A) ... (E) ...), "steps": 3 to 6 short numbered-step strings, "answer": final answer with the letter if MC,
  "idea": one sentence, the transferable lesson }.
- projects: 1 item (a concrete thing the student makes: an error log page, a formula sheet, a problem set they write).
- practice: one sentence, specific and timed where sensible.
- assessment: on the second block of each month (a timed set; phase end = phase assessment).
Plain text only inside strings (no HTML, no markdown). The page escapes HTML.

## Verified facts (use these; do not add other numbers, dates or rules)
Sources: MAA announcement of 26 Aug 2026 as reported by CompeteMap (checked 28 Aug 2026 against the MAA AIME FAQ
and the 2026-27 schedule), Math Prep Pro 2026-27 guide, Wikipedia. maa.org itself returns 403 to us; do not try it.
- AMC 8: 25 multiple-choice questions, 40 minutes, no calculators. 1 point per correct answer, 0 for wrong or blank,
  max 25, so ALWAYS answer every question (no penalty for guessing). For students in grade 8 or below; the MAA age
  limit for 2026-27 is under 15.5 on competition day. 2027 window: 21 to 27 January 2027. Registration is done by a
  school or approved competition manager, not by us.
- AMC 10 and AMC 12: 25 multiple-choice questions, 75 minutes, no calculators. 6 points correct, 1.5 points blank,
  0 wrong, max 150. AMC 10: grade 10 or below and under 17.5 on competition day. AMC 12: grade 12 or below and under
  19.5. Two dates each year: 10A and 12A, then 10B and 12B; 2026 dates were 5 November (A) and 13 November (B).
  A student may sit one A and one B contest, but not the AMC 10 and AMC 12 on the same date. AMC 10 content:
  elementary algebra, basic geometry, area and volume, elementary number theory, elementary probability; no
  trigonometry, advanced algebra or advanced geometry. AMC 12: the whole high school curriculum including
  trigonometry, advanced algebra and advanced geometry, but no calculus.
- Blank-versus-guess maths (teach this, it is correct): with 5 choices a random guess is worth 6/5 = 1.2 points on
  average, less than the 1.5 for a blank; once you can eliminate 2 choices a guess among 3 is worth 2 points, more
  than 1.5. (Eliminating 1 choice: 6/4 = 1.5, break-even.)
- From the 2027 AIME (MAA, 26 Aug 2026): qualification is a FIXED score, AMC 10 of 100 or more, or AMC 12 of 85 or
  more, plus other eligibility rules. AIME is 15 questions, every answer an integer from 000 to 999, now computer
  based at Pearson testing centers in the United States and Canada on 5 or 6 February 2027, in two parts: 8
  questions in 90 minutes, then 7 questions in 90 minutes, and you cannot return to Part 1. No rulers or compasses;
  graph-paper booklets are supplied. Students must be at least 13. Fee $85 plus taxes. USAJMO and USAMO selection
  is now primarily based on the AIME score; AMC scores are no longer a factor. (Students outside the US and Canada:
  say only "check with your competition manager what applies to you".)

## Hard rules
- No em dashes or en dashes anywhere (use commas, colons, "to"). No emoji. Never the word "Premium". No "best".
- Every problem is ORIGINAL. Never copy, paraphrase or reconstruct an actual AMC/AIME problem. Do not name a
  specific past contest problem number. Saying "past AMC papers are published by the MAA" is fine.
- No promises of scores, cutoffs met, AIME qualification, awards or honor roll. No invented statistics, pass rates,
  student counts or testimonials (do NOT add a testimonials key).
- VERIFY EVERY WORKED EXAMPLE with a Python script (brute force where possible) before writing it into the file.
  Every listed answer choice must be distinct and exactly one must be correct. Keep the verification script in your
  own scratch area and report the check in your final message.
- Calculus is never part of AMC; never suggest a calculator.
- AMC 8 audience: roughly ages 10 to 14; AMC 10: roughly 13 to 16; AMC 12: roughly 15 to 18. Under-18 courses never
  recommend tools with an 18+ age limit.
- FAQs: 12 to 15, each answer 2 to 5 sentences, covering format, scoring, eligibility, how to register (through a
  school or competition manager), when to start, which contest to choose (AMC 10 vs 12, AMC 8 to AMC 10), the AIME
  2027 changes (for 10 and 12), what a class looks like, the difference from our Middle School Math Competitions
  course (AMC 8 file) or our year-long Olympiad course (AMC 10/12 files), and what we do not promise.
- program_overview.description: 4 to 6 paragraphs separated by \n\n that explain the contest from zero (what it
  is, who runs it, format, scoring and what it means for strategy, the topics, where it leads), then what the course
  does month by month. A parent who has never heard of the AMC must understand everything after reading it.

## Done means
JSON parses (python3 -m json.tool), python check of every worked example passes, grep finds no "—", "–", "Premium",
"best" (case-insensitive) in your file. Report: blocks count, faqs count, and the verification output.
