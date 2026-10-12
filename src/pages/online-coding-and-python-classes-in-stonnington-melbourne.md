---
title: "Online Coding and Python Classes in Stonnington, Melbourne"
description: "Live online coding and Python classes for Stonnington children, teens and adults, with real data projects and careful error handling, in small groups or one to one."
canonical: https://learn.modernagecoders.com/online-coding-and-python-classes-in-stonnington-melbourne
source: src/pages/online-coding-and-python-classes-in-stonnington-melbourne.html
---
> A teacher who writes and runs real Python with them, then shows how programs fail and how to make failures visible. Children start with Scratch at six; teenagers and adults work on public data. The City of Stonnington counted 104,703 residents in the 2021 Census, more than half of them living in flats or apartments.

[Home](/) / [Australia](/coding-classes-in-australia) / [Victoria](/coding-and-ai-classes-in-victoria) / [Melbourne](/vibe-coding-and-ai-agents-classes-in-melbourne) / Stonnington

City of Stonnington, Melbourne, Victoria / Live online

# Online coding and Python classes in Stonnington

**What do Stonnington learners get from live online Python classes?** A teacher who writes and runs real Python with them, then shows how programs fail and how to make failures visible. Children start with Scratch at six; teenagers and adults work on public data. The City of Stonnington counted 104,703 residents in the 2021 Census, more than half of them living in flats or apartments.

Victoria publishes yearly entry counts for every metropolitan train station, one file per year. A short Python script can stitch seven files into one table. Wrap the lookup in a broad try and except to "skip bad rows", though, and the script stops telling you when something is wrong. We measured exactly what it hid.

Facts last verified 11 October 2026. Teaching is online; no Stonnington branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Courses that treat errors as information

The station project depends on reading files, dictionaries and exceptions properly. These courses build each skill, and the trial lesson places the learner.

- [Python for Teens](/courses/python-complete-masterclass-teens) (Ages 13 to 17): Python from the ground up, including try, except, else and finally used with care.
- [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college) (University and adult): Robust scripts for work: error handling, logging and tests.
- [Data Analysis Course](/courses/data-analysis-mastery-course-college) (University and adult): Cleaning and checking public datasets before anyone draws conclusions.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass) (Ages 8 to 12): First Python projects where error messages are explained, not hidden.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Apartments, short commutes and many professionals

Headline figures for the City of Stonnington (ABS code LGA26350) from the 2021 Census QuickStats, alongside Victoria.

**Stonnington at a glance (Census 2021)**

| Count | City of Stonnington |
|---|---|
| Residents | 104,703 |
| Median age | 37 |
| Families | 25,493 |
| Private dwellings | 59,509 |
| People per household | 2.1 |

**How Stonnington differs from the state**

| Indicator | Stonnington share | State share |
|---|---|---|
| Homes that are flats or apartments | 53.1% (25,059) | 12.1% |
| Adults with a bachelor degree or higher | 53.1% (49,196) | 29.2% |
| Workers employed as professionals | 41.1% (25,201) | 25.0% |
| Workers who took the train to work | 4.0% (2,429) | 1.6% |
| Workers who drove to work | 28.4% (17,438) | 49.9% |

### School-age residents

The Census counted 3,859 residents aged 5 to 9 and 4,206 aged 10 to 14.

### Lockdown Census day

In August 2021, during a lockdown, 44.0% of employed residents, 27,006 people, worked from home.

### A small, dense council

The ABS boundary covers about 25.7 square kilometres from South Yarra to Glen Iris.

The bureau slightly adjusts table cells for confidentiality, so figures appear exactly as published and are never added together to form our own totals.

## What did a broad except hide?

Seven yearly files, FY18-19 to FY24-25, name 225 different stations between them. A table of every station against every year has 1,575 cells. We filled it three ways and compared what each version admitted to.

**Three versions of the same loop (our measurement)**

| Version | What it does on a problem | Result |
|---|---|---|
| except Exception: value = 0 | Swallows any error and writes zero | 20 cells silently become 0 |
| Same, with a typo: Pax_Annual | Swallows the KeyError on every row | All 1,575 cells become 0, no message |
| except KeyError around the name only | Skips missing stations, lets other errors through | Stops at once: KeyError 'Pax_Annual' |

**Where the 20 silent zeros came from**

| Name in the table | Years with no matching row | Why |
|---|---|---|
| McKinnon | 6 | Spelled Mckinnon in every file before FY24-25 |
| East Pakenham | 5 | First appears in FY23-24 |
| Union | 4 | First appears in FY22-23 |
| Mont Albert, Surrey Hills | 2 each | No row in FY23-24 or FY24-25 |
| Mckinnon | 1 | The older spelling, absent from FY24-25 |

### Zero is a claim

Writing 0 says "nobody entered the station". For a station that had no row that year, the honest value is missing, not zero.

### Catch narrowly

Catch only the error you expect, at the line where you expect it, and let everything else crash loudly.

### Count what you skipped

A script that skips records should report how many and which ones, so a person can decide whether that is acceptable.

### Why Stonnington never showed the bug

All 15 stations inside the Stonnington boundary, from South Yarra to Heyington, have a row in every one of the seven files. A learner who tested the script only on local stations would see perfect output and ship it. The problems sat at stations elsewhere on the network, which is why testing must include the awkward cases.

The entry figures are the publisher's, rounded to 50; the table, the three versions of the loop and every count above are our own work. We do not claim any reason why a station appears or disappears between files.

## Four habits that keep errors honest

Error handling is where tidy-looking code most often lies. These are the habits learners practise until they are automatic.

**Habits, with the Stonnington example**

| Habit | In code | In the station project |
|---|---|---|
| Catch the specific error | except KeyError, not except Exception | Missing stations are expected; typos are not |
| Keep the try block small | Wrap only the lookup that can fail | The column name sits outside the try |
| Record what was skipped | Append to a list, print the count | 20 skipped cells, listed by name |
| Use None for unknown | value = None rather than 0 | Averages and totals stop pretending |

A Stonnington station such as Windsor makes the point: 915,800 entries in FY18-19 and 586,800 in FY24-25, 64.1% of the earlier figure. Every one of those numbers is real; a zero hidden among them would distort any average built from the table.

### Younger learners

Read real Scratch and Python error messages aloud and guess what each one means before fixing it.

### Secondary students

Run all three versions of the loop and explain every difference in the output.

### Adults

Search a work script for bare except clauses and replace each one with something specific.

## Fifteen stations, twenty-four schools

A few local markers, taken from rail patronage data, the Victorian schools file and the 2027 calendar.

### The busiest local station

South Yarra recorded 4,367,150 entries in FY18-19 and 3,199,050 in FY24-25, 73.3% of the earlier year, both rounded by the publisher.

### The state list

The 2025 file gives 24 schools a Stonnington address: 11 primary, 3 secondary, 8 combined and 2 special. Prahran High School is among the government secondaries.

### Term 1, 2027

For government schools across Victoria, the 2027 school year opens on Thursday 28 January, and the first term wraps up on Thursday 25 March.

**Council-wide figures** The Census numbers on this page cover the whole City of Stonnington, including Prahran, Windsor, Toorak, Armadale and Malvern; each suburb has its own separate figures.

## From reading error messages to robust scripts

Treat the ages as rough; a first free lesson tells us where to begin.

- **Ages 6 to 10: Scratch and debugging** Games that break on purpose so children learn to find and fix the problem. [Scratch Coding for Kids](/courses/scratch-programming-complete-course), [Coding for Kids](/courses/kids-coding-blocks-masterclass)
- **Ages 10 to 14: First Python** Variables, loops and files, with every error message explained. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [Maths Through Coding](/courses/maths-through-coding)
- **Ages 14 to 18: Python with data** Reading public files, handling missing values and testing edge cases. [Python for Teens](/courses/python-complete-masterclass-teens), [Data Science for Teens](/courses/data-science-course-for-teens-python-data)
- **University and adult: Reliable scripts** Error handling, logging and automated tests for work tasks. [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college), [Python Automation Course](/courses/python-ai-automation-masterclass-college)

## AI tools write Python fast. Why should a Stonnington student learn error handling?

Because AI-written scripts often wrap risky code in a broad except to make it "robust", and that is exactly the pattern that hid 20 wrong values here.

Ask an assistant to make the station loop "not crash on bad data" and a common answer is try followed by except Exception with a default value. The script then runs without complaint whatever happens, including the typo that turned all 1,575 cells into zeros. It looks finished and is quietly broken.

A learner who has watched that happen reads AI-generated code differently. They look for broad catches, ask what each default value claims, and insist that skipped records are counted. Those questions make AI a faster helper instead of a hidden source of errors.

The Stonnington learner who questions an AI's error handling is the one whose results can be trusted. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Live from a Stonnington apartment or study

Every class is on screen, so a learner in Toorak joins the same way as one in Windsor.

- **Code from the first minute** Teacher and learner share a screen and edit the same program together.
- **Victorian terms** Plans follow the state school terms and pause over the holidays.
- **A real trial lesson** The free first class teaches proper content and ends with a recommendation.
- **Five to ten per group** Learners matched on level and pace, sometimes from several states.
- **Two lessons each week** Fixed times, about eight lessons a month, with breaks planned ahead.
- **Teachers in India** A 5:30pm Stonnington lesson in daylight saving begins at noon India time; after April it begins at 1pm there.

**Daylight saving and India time** Melbourne clocks go forward on Sunday 4 October 2026 and back on Sunday 4 April 2027; India keeps the same time all year. Lesson times are given in Melbourne time.

## Stonnington class fees

Three prices, with nothing extra later.

- First class: USD 0. The first lesson is free and ends with an honest suggestion.
- Group tuition: USD 100 a month. One month of group lessons, typically eight, with five to ten learners at a matched level.
- Private tuition: USD 150 a month. Around eight lessons a month with one teacher and one learner.

Outside India, every family is billed in US dollars, and no money changes hands before the trial is done and a course and slot are settled. The pricing page covers holidays, missed classes and switching between group and private.

## Stonnington Python and coding questions

### What is the population of Stonnington?

The 2021 Census QuickStats for the City of Stonnington record 104,703 residents, a median age of 37 and 25,493 families.

### What is exception handling in Python?

It is the try and except mechanism that lets a program respond when something goes wrong, such as a missing key or a bad number. Good handling catches only the errors you expect and reports the rest.

### What did the Stonnington station project find?

Filling a 1,575-cell table of station entries, a broad except clause silently wrote zero into 20 cells, and with one typo it wrote zero into all of them. Catching only KeyError made the typo crash immediately instead.

### Why is a bare except a problem?

It catches every error, including mistakes in your own code, and lets the program carry on as if nothing happened. Results can be wrong with no warning at all.

### When do children start Python?

Most start with Scratch at six and move to Python between about nine and twelve, depending on reading and typing.

### Are Copilot Studio agents part of group classes?

No. We run Copilot Studio as private one-to-one tuition; Stonnington group learners build their agents in plain Python instead.

### Is there a classroom in Stonnington?

No. Every lesson is live online, we have no premises in Australia, and the phone number shown is an Indian number.

### How much do classes cost for Stonnington learners?

The first lesson is free. Group lessons then cost USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, or USD 150 a month one to one. Course, format and time are agreed before any payment.

### How big is each group?

Five to ten learners, grouped by level, pace and goal. When no group suits the learner's time, one-to-one lessons are offered.

### Can adults learn Python with you?

Yes. Grown-ups study in adult groups or privately, and many arrive wanting to tidy a report or a spreadsheet they deal with weekly.

## More for Stonnington learners

To the south, [Glen Eira](/vibe-coding-and-ai-agents-classes-in-glen-eira-melbourne) and [Bayside](/best-coding-and-ai-classes-in-bayside-melbourne) have their own pages. Inner-city families comparing options can also read our [Melbourne-wide overview](/vibe-coding-and-ai-agents-classes-in-melbourne) and the [Victorian state guide](/coding-and-ai-classes-in-victoria).

## Contact

Book the free class on [https://learn.modernagecoders.com/online-coding-and-python-classes-in-stonnington-melbourne](https://learn.modernagecoders.com/online-coding-and-python-classes-in-stonnington-melbourne#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
