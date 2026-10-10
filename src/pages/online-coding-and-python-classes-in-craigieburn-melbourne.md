---
title: "Online Coding and Python Classes in Craigieburn, Melbourne"
description: "Live online coding and Python classes for Craigieburn children, teenagers and adults, from Scratch games to pandas data projects, in small groups or one to one."
canonical: https://learn.modernagecoders.com/online-coding-and-python-classes-in-craigieburn-melbourne
source: src/pages/online-coding-and-python-classes-in-craigieburn-melbourne.html
---
> A teacher meets the learner live online and builds real programs with them, Scratch first for young children, then Python and data analysis. Craigieburn gives the data a local angle: entries at Craigieburn station went from 1,236,250 in FY18-19 to 1,508,250 in FY24-25, by the state's published, rounded figures.

[Home](/) / [Australia](/coding-classes-in-australia) / [Victoria](/coding-and-ai-classes-in-victoria) / [Melbourne](/vibe-coding-and-ai-agents-classes-in-melbourne) / Craigieburn

Craigieburn, City of Hume, Melbourne, Victoria / Live online

# Online coding and Python classes in Craigieburn

**How do online coding and Python classes work for Craigieburn learners?** A teacher meets the learner live online and builds real programs with them, Scratch first for young children, then Python and data analysis. Craigieburn gives the data a local angle: entries at Craigieburn station went from 1,236,250 in FY18-19 to 1,508,250 in FY24-25, by the state's published, rounded figures.

Comparing two years of station figures sounds like one line of pandas. It is, once the two files are joined. The join is where the trouble hides: rows that do not match simply vanish, and the result looks complete. pandas has a switch that shows exactly what went missing.

Facts last verified 10 October 2026. Teaching is online; no Craigieburn branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Courses that build up to pandas

The station join uses Python, pandas and careful checking, and each course here reaches that point by its own route. A free first lesson finds the right one.

- [Python for Teens](/courses/python-complete-masterclass-teens) (Ages 13 to 17): Python foundations, then files and tables of real data.
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data) (Ages 13 to 17): pandas, joins and charts on public data sets.
- [Data Analysis Course](/courses/data-analysis-mastery-course-college) (University and adult): Joining, checking and comparing data for reports.
- [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college) (University and adult): Python from scratch to confident, tested scripts.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Houses, cars and plenty of children

Figures for the Craigieburn suburb (ABS code SAL20661) from the 2021 Census QuickStats. Mickleham and Roxburgh Park have their own counts.

**Craigieburn, 2021 Census headline counts**

| Headline | Craigieburn |
|---|---|
| Residents | 65,178 |
| Median age | 32 |
| Families | 16,781 |
| Private dwellings | 20,732 |
| Average people per household | 3.3 |
| Average motor vehicles per dwelling | 2 |

**Craigieburn beside Victoria**

| Measure | Craigieburn | Victoria |
|---|---|---|
| Homes that are separate houses | 89.2% (16,907) | 73.4% |
| Homes that are flats or apartments | 1.2% (222) | 12.1% |
| Workers who drove to work | 60.4% (16,864) | 49.9% |
| Workers who took the train to work | 2.1% (598) | 1.6% |
| Median age | 32 | 38 |

### Primary years

The Census counted 6,067 Craigieburn residents aged 5 to 9, which is 9.3%.

### Early teens

4,993 residents were aged 10 to 14 and 4,053 were aged 15 to 19.

### Lockdown count

August 2021 was a Melbourne lockdown, so 16.7% (4,660) of workers were at home and travel figures are lower than usual.

The bureau rounds percentages and perturbs small counts, so we reproduce each number as QuickStats publishes it and never add parts together.

## Which stations disappear when two years are joined?

The FY18-19 and FY24-25 metropolitan station entry files have 222 rows each. We joined them in pandas three ways with indicator=True, which labels every row "both", "left_only" or "right_only".

**The same two files, three join keys (our calculation, pandas 3.0.0)**

| Join key | both | left_only (FY18-19) | right_only (FY24-25) |
|---|---|---|---|
| Station name | 219 | 3 | 3 |
| Station name, lower case | 220 | 2 | 2 |
| Stop_ID | 220 | 2 | 2 |

**The rows that did not match on station name**

| Station | Label | What is going on |
|---|---|---|
| Mckinnon / McKinnon | left_only and right_only | Same station, capital K added |
| Surrey Hills | left_only | In FY18-19 only |
| Mont Albert | left_only | In FY18-19 only |
| Union | right_only | In FY24-25 only |
| East Pakenham | right_only | In FY24-25 only |

### An inner join hides it

A plain inner join on station name returns 219 rows and no warning. McKinnon drops out over a single capital letter.

### Craigieburn survives

Craigieburn matches on every key: 1,236,250 entries in FY18-19 and 1,508,250 in FY24-25, or 122.0% by our calculation.

### In good company

Of the 219 stations matched by name, 19 were above their FY18-19 level in FY24-25. Craigieburn ranked sixth by that ratio.

### validate is a different check

pandas also offers validate="one_to_one", which passed here. It checks that no key repeats; it does not check that every key found a partner. Only the indicator shows that.

The publisher rounds each figure to the nearest 50, so ratios are between rounded values. The files record counts, not causes, so we say nothing about why stations appear or vanish between the years.

## One extra argument that audits a join

merge(..., how="outer", indicator=True) keeps every row from both sides and adds a _merge column saying where each row came from.

**Reading the _merge column**

| Label | Meaning | What to do |
|---|---|---|
| both | Key found in both files | Safe to compare |
| left_only | Key only in the first file | Check for renames or closures |
| right_only | Key only in the second file | Check for renames or new rows |

A quick value_counts() on _merge is the whole audit: if anything other than "both" appears, look at those rows before drawing conclusions.

### Younger learners

Match two class lists by name and spot who is missing from each.

### Secondary students

Run the three joins on the station files and explain each mismatch.

### Adults

Reconcile two exports from work systems before building a report.

## Schools, the station and the term dates

From the Victorian school locations file, the timetable feed and the state calendar.

### Thirteen schools

The 2025 school locations file places 13 schools inside Craigieburn, including Aitken Creek Primary School, Willmott Park Primary School and Mount Ridley P-12 College.

### End of a line

In the metropolitan train feed, the Craigieburn line runs through 20 stations from Craigieburn to Flinders Street.

### Term 1, 2027

Victorian government school students start Term 1 on Thursday 28 January 2027, and it ends on Thursday 25 March.

**Suburb boundary** Census and school figures use the ABS boundary of the Craigieburn suburb, 35.45 square kilometres, which also holds 201 metropolitan bus stop entries.

## From class lists to pandas joins

The bands are guides. A free first lesson decides the start.

- **Ages 6 to 10: Scratch** Games about matching, sorting and counting. [Scratch Coding for Kids](/courses/scratch-programming-complete-course), [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)
- **Ages 10 to 14: Python start** Typing real code, with lists and simple files. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [Maths Through Coding](/courses/maths-through-coding)
- **Ages 14 to 18: Python and data** pandas tables, joins and checks. [Python for Teens](/courses/python-complete-masterclass-teens), [Data Science for Teens](/courses/data-science-course-for-teens-python-data)
- **University and adult: Data at work** Reconciling, comparing and reporting. [Data Analysis Course](/courses/data-analysis-mastery-course-college), [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)

## An AI writes the merge in a second. Does a Craigieburn learner still need to understand it?

Yes, because the default join drops rows without a word, and the AI usually writes the default.

Ask an assistant to compare the two years and it will typically produce an inner merge on the station name. The code runs and the table looks full, with 219 stations. Nothing mentions McKinnon, which fell out over a capital letter.

A learner who has used indicator=True asks the follow-up question every time: which rows did not match, and why? That one habit catches renames, new rows and missing rows before they reach a chart.

A Craigieburn learner who audits the join can trust the comparison that follows it. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Craigieburn lessons on a screen at home

All lessons are live online, so Craigieburn learners need no lift or train to attend.

- **Home desk** Join on a laptop; the teacher sees the screen and guides each step.
- **In step with school** Lessons follow Victorian terms and pause in the state school holidays.
- **Free first class** A whole lesson first, then a suggested course and lesson time.
- **Groups by ability** Five to ten learners at the same level, from many areas.
- **Two each week** Two set lessons a week, close to eight per month.
- **Teachers in India** Our teachers work in India: 5pm in Craigieburn is 11:30am India time under daylight saving and 12:30pm afterwards.

**Times given in Melbourne time** Melbourne's daylight saving period is Sunday 4 October 2026 to Sunday 4 April 2027. Since India does not change its clocks, we always state lesson times in Melbourne time.

## Craigieburn class fees

Three simple options.

- First class: USD 0. A free first lesson, finishing with honest advice on the next step.
- Group tuition: USD 100 a month. A month of group lessons, close to eight, five to ten learners at one level.
- Private tuition: USD 150 a month. A month of one-to-one lessons, close to eight, one teacher throughout.

Craigieburn families pay in US dollars, the same as every family outside India. No payment is due until the trial fixes the course and time; see the pricing page for holidays and missed lessons.

## Craigieburn coding and Python questions

### How many people live in Craigieburn?

The 2021 Census QuickStats for the Craigieburn suburb count 65,178 residents, a median age of 32 and 16,781 families.

### What is pandas in Python?

pandas is a Python library for working with tables of data: reading files, joining them, filtering rows and calculating summaries.

### What does indicator=True do in a pandas merge?

It adds a _merge column that labels each row both, left_only or right_only, so you can see which keys matched and which did not.

### How did entries at Craigieburn station change?

The published figures, rounded to 50, are 1,236,250 for FY18-19 and 1,508,250 for FY24-25; FY24-25 is 122.0% of FY18-19 by our calculation.

### When should a child start coding?

From about six with Scratch. Most move to Python at around ten or eleven.

### Are Copilot Studio lessons available in Craigieburn groups?

No. We offer Copilot Studio only as one-to-one lessons; group courses use Python for agents.

### Do you teach in person in Craigieburn?

No. All teaching is live online, there is no Australian office, and the phone number we list is in India.

### How much are classes for Craigieburn learners?

The first lesson is free. After it, group classes cost USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one classes cost USD 150 a month. We confirm course, format and time before any payment.

### How many learners share a class?

Five to ten, grouped by level, pace and goals, not by age or suburb. One-to-one lessons cover anyone no group time suits.

### Can adults learn Python with you?

Yes. Adults learn in adult groups or privately, often starting with data from their own job.

## More for Craigieburn learners

Start from the [Melbourne page](/vibe-coding-and-ai-agents-classes-in-melbourne), read [coding for Melbourne kids](/coding-classes-for-kids-melbourne), or see the [Victoria guide](/coding-and-ai-classes-in-victoria) and the [Australia overview](/coding-classes-in-australia).

## Contact

Book the free class on [https://learn.modernagecoders.com/online-coding-and-python-classes-in-craigieburn-melbourne](https://learn.modernagecoders.com/online-coding-and-python-classes-in-craigieburn-melbourne#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
