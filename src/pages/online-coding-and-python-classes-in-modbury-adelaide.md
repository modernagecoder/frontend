---
title: "Online Coding and Python Classes in Modbury, Adelaide"
description: "Live online coding and Python classes for Modbury children, teens and adults, built around real Adelaide bus data and careful logic, in small groups or one to one."
canonical: https://learn.modernagecoders.com/online-coding-and-python-classes-in-modbury-adelaide
source: src/pages/online-coding-and-python-classes-in-modbury-adelaide.html
---
> Precise, readable logic: conditions that say exactly what they mean and data checks that catch the near misses. Children start with Scratch at six; teenagers and adults write Python on public data. Modbury, home to the Tea Tree Plaza interchange, had 5,593 residents in 2021.

[Home](/) / [Australia](/coding-classes-in-australia) / [South Australia](/coding-and-ai-classes-in-south-australia) / [Adelaide](/ai-and-programming-classes-in-adelaide) / Modbury

Modbury, City of Tea Tree Gully, South Australia / Live online

# Online coding and Python classes in Modbury

**What do Modbury learners gain from online Python classes?** Precise, readable logic: conditions that say exactly what they mean and data checks that catch the near misses. Children start with Scratch at six; teenagers and adults write Python on public data. Modbury, home to the Tea Tree Plaza interchange, had 5,593 residents in 2021.

Modbury's stop records see thousands of bus visits on a weekday. How many fall in the morning peak, from 7am up to 9am? The answer depends on how the condition is written. Four plausible versions in Python give 707, 4,840, 710 and 0.

Facts last verified 13 October 2026. Teaching is online; no Modbury branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 15 to 20 students per group.

## Courses that sharpen logic in code

The morning-peak project is about conditions, strings and boundaries. These courses build that precision; the trial lesson matches the level.

- [Python for Teens](/courses/python-complete-masterclass-teens) (Ages 13 to 17): Conditions, comparisons and string handling, tested on real data.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass) (Ages 8 to 12): Early Python with clear true-or-false logic.
- [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college) (University and adult): Python from basics to dependable, readable programs.
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data) (Ages 13 to 17): Filtering time-based data without boundary mistakes.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## A bus-commuting suburb

Census 2021 numbers for the suburb of Modbury (ABS code SAL40898), with the South Australian figure next to each.

**Modbury in 2021**

| Measure | Modbury |
|---|---|
| Residents | 5,593 |
| Median age | 37 |
| Families | 1,437 |
| Private dwellings | 2,394 |
| People per household | 2.3 |

**Modbury compared with South Australia**

| Indicator | Modbury | South Australia |
|---|---|---|
| Workers who took a bus to work | 10.5% (275) | 3.1% |
| People in education attending university | 22.8% (360) | 16.7% |
| Semi-detached, row or townhouse homes | 18.5% (410) | 14.6% |
| Workers who drove to work | 62.1% (1,626) | 63.9% |

### Children

Modbury had 281 children under five and 299 aged 5 to 9.

### Teenagers

There were 257 residents aged 10 to 14 and 259 aged 15 to 19.

### Footprint

The suburb boundary covers about 3.3 square kilometres in Adelaide's north-east.

Published Census counts include small privacy tweaks by the bureau, so we neither alter them nor add them together.

## Four ways to say "between 7 and 9"

Each scheduled visit at a Modbury stop record on Wednesday 21 October 2026 carries a departure time such as 07:42:00. We counted visits in the morning peak, 7am up to but not including 9am, with four versions of the condition.

**Morning-peak visits by version of the condition (our run)**

| Condition on time t | Visits counted | What happened |
|---|---|---|
| '07:00:00' <= t < '09:00:00' | 707 | Correct |
| t >= '07:00:00' or t < '09:00:00' | 4,840 | or makes every time pass |
| '07:00:00' <= t <= '09:00:00' | 710 | 3 visits at exactly 9am slip in |
| '7:00:00' <= t < '9:00:00' | 0 | Unpadded text compares wrongly |

### The chain

Python reads a <= t < b as (a <= t) and (t < b), with t evaluated once. It looks like the maths and leaves no room to type or instead of and.

### The or slip

Every time is either after 7am or before 9am, so the or version counted all 4,840 Wednesday visits, the entire day.

### The padding trap

Times are text here. "7:00:00" sorts after "09:..." because 7 comes after 0, so the unpadded version matched nothing.

### Boundaries matter

Half-open ranges, start included and end excluded, let consecutive periods meet without overlap: 7 to 9 then 9 to 11 never counts a 9am visit twice. The inclusive version did exactly that with 3 visits. For the afternoon, 4pm up to 6pm, the correct count was 729.

The timetable is Adelaide Metro open data, feed version 1708, whose times are zero-padded strings. Modbury membership is our point-in-boundary check and all four counts come from our own Python run.

## Writing ranges that read like maths

Chained comparisons are one of Python's small pleasures, and one of its quiet safeguards.

**Chaining in practice**

| Write | Means | Note |
|---|---|---|
| a <= t < b | (a <= t) and (t < b) | t evaluated only once |
| 0 < x < y < 10 | Three comparisons, all must hold | Any number can chain |
| a b | t larger than both | Legal but confusing |
| start <= t < end on parsed times | Safe with datetime.time values | Avoids padding issues |

### Primary learners

In Scratch, make a sprite react only when its score is between two numbers, and test the edges.

### Secondary learners

Recreate the four Modbury counts, then switch to datetime.time and show the padding problem disappears.

### Adults

Review date and time filters in reports for or-versus-and slips and inclusive end points.

Timetable times can also run past midnight, written as 25:10:00 for 1:10am the next morning, which no clock type accepts. Zero-padded strings compare correctly for that case, which is one reason the raw text is often kept.

## Tea Tree Plaza and Smart Road

What the timetable for Wednesday 21 October 2026 shows inside Modbury.

### Busiest records

Stop 42A on Smart Road (south side) had 286 scheduled visits and Zone A at Tea Tree Plaza Interchange 285.

### Many routes

The 60 stop records in Modbury were served by 48 routes that day, with 4,840 visits in all, by our count.

### Early start

The first scheduled departure from a Modbury stop record was at 4:20am.

**Modbury only** Figures cover the suburb of Modbury in the City of Tea Tree Gully. Modbury North, Ridgehaven, St Agnes, Hope Valley, Holden Hill and the other neighbours keep separate figures.

## From score ranges to time filters

These ages are approximate; the trial class settles the level.

- **Ages 6 to 10: Blocks** Scratch conditions and simple ranges. [Scratch Coding for Kids](/courses/scratch-programming-complete-course), [Coding for Kids](/courses/kids-coding-blocks-masterclass)
- **Ages 10 to 14: First Python** Comparisons, booleans and testing edges. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [Maths Through Coding](/courses/maths-through-coding)
- **Ages 14 to 18: Python and data** Filtering real data precisely. [Python for Teens](/courses/python-complete-masterclass-teens), [Data Science for Teens](/courses/data-science-course-for-teens-python-data)
- **University and adult: Professional Python** Reliable data filters and automation. [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college), [Python Automation Course](/courses/python-ai-automation-masterclass-college)

## AI writes the filter. Who checks the edges?

The learner who knows where filters go wrong. Most AI-written ranges are fine; the faulty ones look fine too.

An assistant will usually produce a correct chained comparison for "between 7 and 9". But ask it to edit someone else's code, or to handle times that arrive without leading zeros, and the or slip or the padding trap can survive into the final script.

Learners who have seen 4,840 and 0 come out of plausible conditions test the boundaries every time: one value just inside, one just outside, one exactly on the edge.

In Modbury, the learner who tests the edges gets the 707 that is actually true. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Modbury lessons from home

Lessons happen over live video, so there is no travel at all.

- **Edge cases together** Teacher and learner test boundaries live on the shared screen.
- **Term-time classes** Plans follow the SA school year, with holiday breaks.
- **Free opening lesson** A real first class at no cost, then honest advice.
- **Small level groups** Fifteen to twenty learners matched by level, or private lessons.
- **Two per week** Regular weekly times, about eight lessons a month.
- **India time** Our teachers work in India: a 7:30pm Modbury class is 2:30pm India time until April and 3:30pm after.

**A changing gap** Adelaide observes daylight saving from the first Sunday in October to the first Sunday in April (IANA time zone database). India does not, so the difference is five hours in summer and four in winter.

## Modbury class fees

Three prices for every family.

- First class: USD 0. Lesson one is free, and you receive a written suggestion afterwards.
- Group tuition: USD 100 a month. About eight group lessons per month, fifteen to twenty learners.
- Private tuition: USD 150 a month. About eight private lessons per month.

Fees are in US dollars and paid only after the trial, once a course and time are agreed. The pricing page explains holidays and absences.

## Modbury Python questions

### How many people live in Modbury?

The 2021 Census QuickStats count 5,593 residents in the suburb of Modbury, with 2,394 private dwellings and a median age of 37.

### What is a chained comparison in Python?

Writing several comparisons in a row, such as a <= x < b. Python treats it as (a <= x) and (x < b), evaluating x only once.

### Why did "or" count every bus?

Any time is either at least 7am or before 9am, so a condition joined with or is true for all times. A range needs both conditions, which and, or a chained comparison, provides.

### How many morning-peak visits does Modbury have?

By our count of the Adelaide Metro timetable, stop records inside Modbury had 707 scheduled visits from 7am up to 9am on Wednesday 21 October 2026.

### When can children start learning Python?

Usually between eight and ten, after some Scratch. The free trial lesson shows whether a child is ready.

### Is Claude used with teenage learners?

No. Claude-based courses accept adults of 18 and over only; teenagers use other AI tools.

### Is there a classroom in Modbury?

No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.

### What do lessons cost for Modbury learners?

The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.

### Who is in each group?

Fifteen to twenty learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.

### Can Modbury groups learn Copilot Studio?

No. Copilot Studio is one-to-one only; groups create agents in Python.

## More for Modbury learners

Our [Adelaide page](/ai-and-programming-classes-in-adelaide) covers the wider city, and [Adelaide kids' coding](/coding-classes-for-kids-adelaide) suits children. On Eyre Peninsula, [Whyalla](/online-coding-and-python-classes-in-whyalla) has a Python page, and [the state guide](/coding-and-ai-classes-in-south-australia) lists the rest.

## Contact

Book the free class on [https://learn.modernagecoders.com/online-coding-and-python-classes-in-modbury-adelaide](https://learn.modernagecoders.com/online-coding-and-python-classes-in-modbury-adelaide#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
