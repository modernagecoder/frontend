---
title: "Best Coding and AI Classes in Burnside, Adelaide"
description: "Live online coding and AI classes for Burnside children, teenagers and adults, from Scratch to Python and AI projects on real Adelaide data, in groups or one to one."
canonical: https://learn.modernagecoders.com/best-coding-and-ai-classes-in-burnside-adelaide
source: src/pages/best-coding-and-ai-classes-in-burnside-adelaide.html
---
> At live online lessons, private or in a small group, that take children from Scratch at six to Python and AI as teenagers and adults, with projects built on real Adelaide data and careful checks. Burnside counted 3,060 residents at the 2021 Census.

[Home](/) / [Australia](/coding-classes-in-australia) / [South Australia](/coding-and-ai-classes-in-south-australia) / [Adelaide](/ai-and-programming-classes-in-adelaide) / Burnside

Burnside, City of Burnside, South Australia / Live online

# Coding and AI classes in Burnside

**Where should Burnside learners look for the best coding and AI classes?** At live online lessons, private or in a small group, that take children from Scratch at six to Python and AI as teenagers and adults, with projects built on real Adelaide data and careful checks. Burnside counted 3,060 residents at the 2021 Census.

On each of the three Sundays we checked, half of Burnside's bus stop records saw no buses at all. A data script written to guard against that, using Python's assert, catches it at once. Run the same script with the -O optimisation flag and the guard disappears: the script announces that every stop is served.

Facts last verified 13 October 2026. Teaching is online; no Burnside branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Courses that make data checks dependable

The Sunday-service project is about validation, error handling and knowing how Python runs. These courses teach it; the trial lesson finds the starting point.

- [Python for Teens](/courses/python-complete-masterclass-teens) (Ages 13 to 17): Exceptions, assertions and validating real data properly.
- [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college) (University and adult): Robust Python for scripts that others will run.
- [Data Analysis Course](/courses/data-analysis-mastery-course-college) (University and adult): Checking data before analysis, with checks that cannot be switched off.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass) (Ages 8 to 12): First Python projects with simple built-in checks.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## A foothills suburb of families

Census 2021 QuickStats for the suburb of Burnside (ABS code SAL40192), with South Australia for comparison.

**Burnside residents, 2021**

| Measure | Burnside |
|---|---|
| Residents | 3,060 |
| Median age | 43 |
| Families | 872 |
| Private dwellings | 1,257 |
| People per household | 2.7 |

**Burnside set against South Australia**

| Indicator | Burnside | South Australia |
|---|---|---|
| Adults with a bachelor degree or higher | 49.6% (1,222) | 22.7% |
| Semi-detached, row or townhouse homes | 25.6% (294) | 14.6% |
| Employed residents working from home | 17.2% (255) | 9.6% |
| Employed people in professional jobs | 39.6% (585) | 21.5% |

### School ages

Residents aged 5 to 9 numbered 229, with 219 aged 10 to 14 and 210 aged 15 to 19.

### Households

Homes held 2.7 people on average, and 810 were separate houses.

### Size

The ABS suburb boundary covers about 1.7 square kilometres in Adelaide's eastern foothills.

The Census bureau alters small counts very slightly to keep people anonymous, so we reproduce every figure unchanged and calculate no totals from them.

## A check that a flag can switch off

The script collects Sunday 25 October 2026 visits for each of the 18 stop records inside Burnside, asserts that none is missing, then reports an average. We ran it twice: once normally, once with python -O.

**The same script, two ways to run it (our run, Python 3.13.6)**

| Command | Last line printed |
|---|---|
| python brns_assert.py | AssertionError: 9 stops have no Sunday service |
| python -O brns_assert.py | every stop served on Sunday; average 7.6 visits per stop |

**What the timetable actually shows (our count)**

| Day | Stop records with service | Routes |
|---|---|---|
| Wednesday 21 October 2026 | 18 of 18 | 7 |
| Sunday 25 October 2026 | 9 of 18 | 2: 141 and 142 |

### What -O does

Python's -O flag removes every assert statement before the code runs. The check is not skipped at a decision point; it is simply gone.

### The false report

Without the check, the script divides 136 Sunday visits by all 18 records and calls it an average of 7.6. The 9 stops that are served average 15.1.

### Which stops

The unserved Sunday records are all on Greenhill Road; the Glynburn Road and Hallett Road records keep a Sunday service.

### assert or raise?

assert is for conditions that should be impossible if the code is right, as a developer's aid. Checks on incoming data belong in an if statement that raises an exception, such as ValueError, which runs whatever flags are used.

The timetable is Adelaide Metro open data, feed version 1708. Burnside membership is our point-in-boundary check, and both printed lines come from our own runs of the same file.

## Checks that always run

The fix is a few characters longer than the assert, and it cannot be optimised away.

**assert compared with an explicit check**

| Aspect | assert missing == [] | if missing: raise ValueError(...) |
|---|---|---|
| Runs under python -O | No, removed | Yes |
| Intended for | Internal sanity checks | Validating inputs and data |
| Exception type | AssertionError | Any type you choose |
| Burnside Sunday data | Caught only without -O | Always caught |

### Primary learners

Add an "is everyone here?" check before a Scratch game starts, and see what happens when a sprite is missing.

### Secondary learners

Run the Burnside script both ways, then rewrite the check as a raise and prove it survives -O.

### Adults

Audit production scripts for data checks written as assert; each is a guard that may not be there in deployment.

Few people run Python with -O on purpose, but some deployment tools and environment settings such as PYTHONOPTIMIZE switch it on. Validation that depends on it being off is fragile.

## Greenhill, Glynburn and Hallett roads

Details from the timetable that belong to Burnside itself.

### Weekday service

On Wednesday 21 October 2026 the 18 stop records had 440 scheduled visits on 7 routes, by our count; 14 were school bus services.

### Busiest record

Stop 20 on Hallett Road (east side) had the most Wednesday visits, 37.

### No rail or tram

Every Burnside stop record is served by buses only.

**Burnside suburb only** Figures here cover the suburb of Burnside, not the whole City of Burnside. Stonyfell, Beaumont, Hazelwood Park, Leabrook, Erindale, Waterfall Gully and Greenhill border it and are counted separately.

## From roll calls to robust validation

Ages are approximate; a trial lesson shows where each learner fits.

- **Ages 6 to 10: Scratch and logic** Games with simple checks and conditions. [Scratch Coding for Kids](/courses/scratch-programming-complete-course), [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)
- **Ages 10 to 14: Python basics** Conditions, loops and first error messages. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [Maths Through Coding](/courses/maths-through-coding)
- **Ages 14 to 18: Python with data** Exceptions and validation on real datasets. [Python for Teens](/courses/python-complete-masterclass-teens), [Data Science for Teens](/courses/data-science-course-for-teens-python-data)
- **University and adult: Robust Python** Code that behaves the same wherever it runs. [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college), [Data Analysis Course](/courses/data-analysis-mastery-course-college)

## AI likes assert. Do you know when it vanishes?

AI tools often add assert lines as quick guards, which is fine for development and risky for data checks.

Ask an assistant to "make sure every stop has Sunday service" and a one-line assert is a likely answer. It looks responsible and works in testing. Deployed with optimisation on, it would let the Burnside report claim full Sunday coverage that does not exist.

Learners who have seen the -O run print a false sentence know to turn data checks into explicit exceptions. That small edit is the difference between a guard and a decoration.

In Burnside, the learner who knows how Python runs writes checks that stay switched on. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Burnside lessons, live online

Every class happens over video from home.

- **Run it both ways** Learners try their code in different settings while the teacher watches the results.
- **State school calendar** Lessons follow South Australian terms and pause for holidays.
- **No-cost opening class** One full lesson free, with a written suggestion after.
- **Five to ten learners** Grouped by level, or one-to-one teaching.
- **Twice weekly** Two fixed lessons a week, roughly eight a month.
- **India time** Our teachers work from India: a 5:30pm Burnside lesson is 12:30pm India time in summer, 1:30pm in winter.

**Two time changes a year** Adelaide starts daylight saving on the first Sunday in October and ends it on the first Sunday in April (IANA time zone database); India keeps one time, so lesson times there move by an hour.

## Burnside class fees

Three prices, the same for all.

- First class: USD 0. Lesson one is free, with written feedback.
- Group tuition: USD 100 a month. Roughly eight group lessons a month with five to ten learners.
- Private tuition: USD 150 a month. Roughly eight private lessons a month.

Burnside families pay in US dollars, never before the trial, and only once course and time are agreed. Holidays and absences are explained on the pricing page.

## Burnside coding and AI questions

### How many people live in Burnside, SA?

The 2021 Census QuickStats count 3,060 residents in the suburb of Burnside, with 872 families and a median age of 43.

### What does python -O do to assert statements?

Running Python with -O removes assert statements from the code, so any check written as an assert does not run at all.

### Should I use assert to validate data?

No. Use an if statement that raises an exception such as ValueError. Keep assert for internal conditions that should never be false if the code is correct.

### What did the Burnside Sunday check find?

On Sunday 25 October 2026, 9 of the 18 stop records inside Burnside had no scheduled service. With -O the script wrongly reported every stop served.

### How young can coding start?

At six, with Scratch; typed Python normally follows between eight and ten.

### Do Burnside teenagers use Claude?

No. Claude-based courses accept learners aged 18 and over only; teenagers use other AI tools.

### Is there a classroom in Burnside?

No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.

### What do lessons cost for Burnside learners?

The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of five to ten, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.

### Who is in each group?

Five to ten learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.

### Is Copilot Studio available in Burnside groups?

No. Copilot Studio is private-lesson only; group learners code agents in Python.

## More for Burnside learners

Visit [the Adelaide page](/ai-and-programming-classes-in-adelaide) or [coding for Adelaide kids](/coding-classes-for-kids-adelaide). Across the gulf, [Port Lincoln](/best-coding-classes-in-port-lincoln) has a page of its own, and [our South Australia guide](/coding-and-ai-classes-in-south-australia) covers everything else.

## Contact

Book the free class on [https://learn.modernagecoders.com/best-coding-and-ai-classes-in-burnside-adelaide](https://learn.modernagecoders.com/best-coding-and-ai-classes-in-burnside-adelaide#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
