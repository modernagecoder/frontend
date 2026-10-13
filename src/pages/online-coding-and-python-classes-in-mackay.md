---
title: "Online Coding and Python Classes in Mackay | Live Teacher"
description: "Live online Python, pandas and data classes for Mackay teenagers and adults, built on real Queensland open data, one to one or in small groups. First lesson free."
canonical: https://learn.modernagecoders.com/online-coding-and-python-classes-in-mackay
source: src/pages/online-coding-and-python-classes-in-mackay.html
---
> Live Python lessons for Mackay teenagers and adults, with a teacher who works through genuine Queensland data beside you, from the first line to confident pandas. Mackay's urban area had 84,333 residents at the 2021 Census, and almost one employed person in five worked in a trade or technical job. Classes are online, privately or with a small group at your level, and the first lesson is free.

[Home](/) / [Queensland](/coding-and-ai-classes-in-queensland) / [Australia](/coding-classes-in-australia) / Mackay

Mackay, Queensland, Australia / Live online

# Online coding and Python classes in Mackay

**What are the best online coding and Python classes in Mackay?** Live Python lessons for Mackay teenagers and adults, with a teacher who works through genuine Queensland data beside you, from the first line to confident pandas. Mackay's urban area had 84,333 residents at the 2021 Census, and almost one employed person in five worked in a trade or technical job. Classes are online, privately or with a small group at your level, and the first lesson is free.

Joining two tables is the most common thing anyone does with data, and the easiest to get silently wrong. Translink publishes Mackay's bus timetable as a set of linked tables: stops, routes, trips and the 4,687 rows that say when each bus reaches each stop. Join those rows to the stops table by stop number and you still have 4,687 rows. Join them by stop name instead, which looks just as reasonable, and you get 5,572, because 34 names belong to two stops each. Join them to the route shapes and the table explodes to 1,725,944 rows. No error appears in any of these. Our Mackay learners find out why, and how to make pandas refuse.

Facts last verified 7 October 2026. Teaching is online; no Mackay branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 15 to 20 students per group.

## Python and data courses for Mackay learners

All four connect to the timetable-join project. Your free lesson works out which suits, and no card is needed.

- [Python for Teens](/courses/python-complete-masterclass-teens) (Ages 13 to 17): Python for teenagers, from the first variable to loading and combining real data tables.
- [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college) (University and adult): A complete Python course for adults, covering files, functions, testing and working with data.
- [Data Analysis Course](/courses/data-analysis-mastery-course-college) (Adults): pandas and SQL for analysing public and workplace data, with every join checked before it is trusted.
- [MySQL Course](/courses/mysql-database-complete-masterclass-college) (University and adult): Relational databases, keys and joins from first principles, the theory behind every merge.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## A trades city between the cane fields and the reef

Selected QuickStats for the Mackay Significant Urban Area, with Queensland and Australian comparisons.

**QuickStats 2021, Mackay urban area, compared with Queensland and Australia**

| Measure | Mackay | Queensland | Australia |
|---|---|---|---|
| Residents | 84,333 | no comparison | no comparison |
| Median age | 37 | no comparison | no comparison |
| Families | 22,006 | no comparison | no comparison |
| Technicians and trades workers, share of employed | 8,110 (19.6%) | 13.7% | 12.9% |
| Professionals, share of employed | 6,929 (16.7%) | 21.4% | 24.0% |
| Separate houses, share of occupied homes | 24,705 (81.2%) | 74.8% | 72.3% |

### Trade skills

Technicians and trades workers made up 19.6% of employed Mackay residents, well above the Queensland share of 13.7%.

### Homes

The Census counted 36,057 private dwellings, with 2.5 people in the average household and 1,476 flats or apartments among occupied homes.

### Study

9,573 residents aged 15 and over held a bachelor degree or higher, 14.2%, and 5,093 people were aged 15 to 19.

One caution we apply to every census table: the bureau makes tiny random changes to small counts to protect privacy, so categories will not always sum to the published total. We copy the bureau's numbers as printed and never add pieces together to create new totals.

## Why did my table grow when I joined it?

The Mackay bus timetable in pandas, joined three ways. Only one of them keeps the row count it should.

**Tables in Translink's Mackay feed, downloaded 7 October 2026 (our count)**

| Table | Rows |
|---|---|
| Stops | 277 |
| Routes (300 to 310) | 11 |
| Trips: 204 weekday and 76 Saturday | 280 |
| Stop times, one per bus per stop | 4,687 |
| Shape points tracing the 30 route shapes | 10,220 |

**What each join does to the 4,687 stop-time rows (our calculation, pandas 3.0)**

| Join | Relationship | Rows afterwards |
|---|---|---|
| Stop times to trips, on trip_id | Many to one | 4,687 |
| Then to routes and to stops, on stop_id | Many to one | 4,687 |
| Stop times to stops, on stop name | Many to many, because names repeat | 5,572 |
| Stop times to shape points, through shape_id | Many to many | 1,725,944 |

### 1. Count before and after

Note the row count of the left table, join, and count again. Any growth on a many-to-one join is a bug.

### 2. Check the key

Is the column on the right unique? Mackay has 277 stops but only 243 distinct stop names, so the name is not a key.

### 3. Make pandas check

Pass validate='many_to_one' to merge. On the name join pandas stops with a MergeError instead of quietly adding 885 rows.

### A duplicate that is not an error

Thirty-four stop names belong to two stops, Hoey St at Nott Street among them. That is normal for a bus network: the two stops usually face each other across the road, one for each direction. The data is fine. The mistake is treating a descriptive name as if it were a unique identifier, and it only shows up as rows multiplying somewhere downstream.

All row counts are ours, from Translink's Mackay feed downloaded on 7 October 2026 and joined with pandas 3.0. We make no claim about how buses actually run on any given day; a GTFS feed is a published schedule, not a record of service.

## Join habits that would have caught every bad merge

Five checks that take seconds to write and save hours of chasing wrong totals later.

**Join hygiene, tested on the Mackay timetable**

| Habit | In the Mackay project | What it catches |
|---|---|---|
| Assert the row count | Expect 4,687 after a many-to-one join | Silent row multiplication |
| Test the key is unique | 243 names against 277 stop IDs | Columns that only look like keys |
| Use validate in merge | validate='many_to_one' on every lookup join | Bad joins at the moment they happen |
| Join on IDs, display names | Merge on stop_id, show stop_name later | Name collisions and spelling variants |
| Aggregate before joining | Summarise shape points per shape first | Million-row tables nobody needed |

The shape join is the most instructive failure. Every stop time on a trip meets every shape point on that trip's route, so a 20-stop trip on a 400-point shape produces 8,000 rows. Across the network that becomes 1,725,944. If you needed the route length for each trip, one sum per shape before the join gives the answer in 30 rows.

### Teenagers

Join small tables by hand on paper, then in pandas, predicting the row count before running each merge.

### University students

Keys, normal forms and join cardinality across pandas and SQL, tested on full transport feeds.

### Adults

Combine workplace spreadsheets safely and stop reports from double-counting because of a careless merge.

Modern Age Coders is independent of Translink, the Queensland Government, Mackay Regional Council and the statistics bureau, and claims no partnership with them. Census figures are the bureau's; every row count here came from our own pandas code.

## A ten-week Term 4 and a long summer break

The Queensland calendar Mackay families plan around, and why it matters for timetabled data.

### Term 4 of 2026

Ten weeks from Tuesday 6 October to Friday 11 December, according to the Queensland Department of Education.

### Summer holidays

The department lists 46 days of school holidays from Saturday 12 December 2026 until school returns in late January.

### Constant clock

Queensland does not use daylight saving, so Mackay lesson times stay put all year.

**Calendars inside data** The Mackay feed has one calendar for weekdays and another for Saturdays, each with its own start and end date. Joining trips to calendars is another join with a cardinality to check, and getting it wrong quietly puts Saturday buses on a Tuesday.

## From one table to many, joined correctly

Treat the ages as a rough guide; the free lesson sets the starting point.

- **Ages 13 to 14: Lists and dictionaries** Python that looks things up by key, the idea underneath every join, using stop numbers and names. [Python for Teens](/courses/python-complete-masterclass-teens), [Maths Through Coding](/courses/maths-through-coding)
- **Ages 15 to 18: Tables in pandas** Loading, filtering and merging the Mackay timetable, with row counts checked at every step. [Python for Teens](/courses/python-complete-masterclass-teens), [Problem Solving for Teens](/courses/problem-solving-dsa-masterclass-teens)
- **University: Relational thinking** Keys, cardinality and normal forms in pandas and SQL on complete public datasets. [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college), [MySQL Course](/courses/mysql-database-complete-masterclass-college)
- **Adults: Reliable reporting** Python and SQL that combine work data without double counting, plus tests that prove it. [Data Analysis Course](/courses/data-analysis-mastery-course-college), [Python Automation Course](/courses/python-ai-automation-masterclass-college)

## An AI assistant writes pandas merges instantly. Why should a Mackay learner check them?

Because a merge on stop name runs without complaint and adds 885 rows that will inflate every total built on top of it.

Ask an AI tool to combine Mackay's stop times with stop details and it will usually produce a tidy one-line merge. Whether it joins on the identifier or on the name is close to a coin toss, and both versions run. One keeps 4,687 rows; the other quietly gives 5,572. Any count, average or chart drawn from the second table is wrong, and nothing on screen says so.

Learners who have watched a join multiply rows develop reflexes that catch it instantly: count before and after, check that the key is unique, ask pandas to validate the relationship. Applied to AI-written analysis, those three habits are the difference between a report you can sign and one you will have to retract.

In 2026 code is quick to generate; a Mackay learner who checks every join is the one whose numbers survive a second look. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Andergrove, Mount Pleasant or Walkerston, the same live lesson

Mackay spreads from the beaches to the cane country inland, and a video lesson reaches all of it without anyone getting on a bus.

- **Coast and valley** A learner in Bucasia and another in Marian can work together in one class, each from their own home.
- **Queensland school terms** Lessons are planned around Queensland year levels and terms, and senior students can relate projects to the subjects they study. Teaching is in English.
- **A trial that counts** The free session is a real lesson that ends with a recommended level, course and regular time. You are never asked for card details.
- **Same-level classmates** Fifteen to twenty learners at one stage, from Mackay and elsewhere, so regional students learn alongside peers at their level.
- **Regular schedule** Two lessons a week, about eight a month, at a fixed time, with school holidays and exam weeks agreed in advance.
- **Teachers in India** Mackay never changes its clocks, so a 5pm lesson always begins at 12:30pm where our teachers are.

**A fixed gap all year** Neither Queensland nor India uses daylight saving, so the gap between a Mackay learner and our teachers is four and a half hours in every month. Lesson times are always confirmed in Mackay time.

## What classes cost in Mackay

Three prices, plainly stated.

- First class: USD 0. A full first lesson that costs nothing and ends with a level, a course and a time.
- Group tuition: USD 100 a month. A month of classes, typically eight, alongside fifteen to twenty learners at your stage.
- Private tuition: USD 150 a month. About eight classes a month on the same pattern, one teacher with one learner.

Fees are in US dollars wherever you live, India apart, so families in Slade Point and Beaconsfield get the same invoice and there is no regional rate. We invoice only after the trial agrees a course and a time; the pricing page covers holidays, absences and moving between group and private lessons.

## Mackay Python class questions

### How many people live in Mackay?

The 2021 Census counted 84,333 people in the Mackay urban area, according to the statistics bureau. The median age was 37.

### What is join cardinality?

The relationship between matching rows in two tables: one to one, many to one or many to many. It decides how many rows a join produces. A many-to-one join should never add rows; a many-to-many join can multiply them enormously.

### What is the Mackay timetable project?

Learners load Translink's open Mackay bus feed into pandas and join its tables three ways. Joining on stop number keeps 4,687 rows; joining on stop name gives 5,572; joining to route shapes gives 1,725,944. They then add checks that catch the bad joins.

### What does validate do in a pandas merge?

It tells pandas what relationship you expect, such as many_to_one, and raises an error if the data breaks it. On the Mackay stop-name join it stops the merge instead of letting 885 extra rows slip through.

### Do you teach Queensland senior students?

Yes. We follow Queensland year levels and help senior students with computing and maths. Assessment work submitted at school is always the student's own.

### When are lessons for Mackay learners?

Commonly after school or on Saturday morning, chosen at the trial and quoted in Mackay time. Queensland has no daylight saving, so the gap to our India-based teachers stays the same all year.

### Can younger children start coding?

Yes. From age six children work in Scratch and with picture-based tasks, and typed Python follows when they are ready. This page is aimed at teenagers and adults.

### Is there a Modern Age Coders centre in Mackay?

No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.

### What do Mackay Python classes cost?

The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.

### How big are the groups?

Fifteen to twenty learners, matched on level, pace and goals rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.

## More for Mackay and Queensland learners

The [Queensland coding page](/coding-and-ai-classes-in-queensland) covers the whole state, and Toowoomba learners have their own [Toowoomba page](/best-coding-classes-in-toowoomba). Anyone moving from blocks to typed code should read [after Scratch, the next step is Python](/after-scratch-next-step-python-australia). Every Australian page is listed on the [Australia coding page](/coding-classes-in-australia).

## Contact

Book the free class on [https://learn.modernagecoders.com/online-coding-and-python-classes-in-mackay](https://learn.modernagecoders.com/online-coding-and-python-classes-in-mackay#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
