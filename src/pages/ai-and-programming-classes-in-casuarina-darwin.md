---
title: "AI and Programming Classes in Casuarina, Darwin"
description: "Live online AI and programming classes for Casuarina and northern Darwin, ages 6 to adult, with an unsupervised learning project on the Darwin bus timetable."
canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-casuarina-darwin
source: src/pages/ai-and-programming-classes-in-casuarina-darwin.html
---
> Hidden patterns in a timetable, found without being told what to look for. Learners turn the Darwin bus timetable into a grid of 610 stops by 24 hours and factorise it with non-negative matrix factorisation. Three parts emerge: a morning rush, an afternoon rush and all-day service. The Casuarina interchange stops are about half all-day.

[Home](/) / [Australia](/coding-classes-in-australia) / [Northern Territory](/coding-and-ai-classes-in-northern-territory) / [Darwin](/online-coding-and-python-classes-in-darwin) / Casuarina

Casuarina, City of Darwin, Northern Territory / Live online

# AI and programming classes in Casuarina

**What does the Casuarina AI project discover?** Hidden patterns in a timetable, found without being told what to look for. Learners turn the Darwin bus timetable into a grid of 610 stops by 24 hours and factorise it with non-negative matrix factorisation. Three parts emerge: a morning rush, an afternoon rush and all-day service. The Casuarina interchange stops are about half all-day.

Casuarina is the bus hub of Darwin's northern suburbs, a small suburb of about 0.4 square kilometres where 15 bus routes meet. Few people live there, but buses on routes 1 to 5, 10, 12 and the Orbital services start, end or pass through it every weekday. Its timetable is a good place to see what unsupervised learning can find.

Facts last verified 13 October 2026. Teaching is online; no Casuarina branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Machine learning, data and Python

Courses for learners interested in what AI can find on its own. A free trial lesson points the way.

- [AI and ML Masterclass](/courses/ai-ml-masterclass-complete-college) (University and adult): Unsupervised learning, factorisation and evaluation.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 13 to 17): Clustering and pattern finding on real data.
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data) (Ages 13 to 17): Matrices and charts with Python.
- [AI Literacy for Kids (Ages 8 to 14)](/courses/ai-literacy-for-kids-course) (Ages 8 to 12): How computers spot patterns, explained simply.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## A tiny residential count around a big hub

From the 2021 Census QuickStats for the Casuarina suburb and locality (ABS SAL70051), read on 13 October 2026. The numbers are small, so the bureau's privacy adjustments matter more than usual.

**Casuarina counts**

| Measure | Value |
|---|---|
| People | 406 |
| Median age | 27 |
| Families | 24 |
| Private dwellings | 76 |
| Suburb area | about 0.42 sq km |

**Casuarina travel to work compared with the NT**

| Share | Casuarina | NT |
|---|---|---|
| Bus to work | 14.4% (42) | 2.1% |
| Walked to work | 12.4% (36) | 7.6% |
| Drove a car to work | 46.4% (135) | 63.4% |

### Bus users

Of Casuarina workers, 14.4% took the bus to work in 2021, roughly seven times the NT share.

### Small numbers

With only 406 residents, a handful of people moves these shares a lot, so they are better read as signs than measurements.

### Young

The median age was 27, below the NT median of 33.

Remember that 2021 was a pandemic year for travel. Because the ABS nudges small counts to protect privacy, every share above sits next to its count, and none are combined.

## Three patterns nobody labelled

For Wednesday 30 September 2026, a weekday the feed's weekday timetable runs, the Darwin bus GTFS lists 17,967 departures from 610 stops between 5am and 10pm. Learners turn each stop's departures into hourly shares and ask NMF to explain the 610 rows as mixtures of a few non-negative patterns.

**Reconstruction error by number of patterns (our calculation, scikit-learn 1.7.2)**

| Patterns | Relative error |
|---|---|
| 1 | 0.763 |
| 2 | 0.594 |
| 3 | 0.514 |
| 4 | 0.424 |
| 5 | 0.325 |

### Morning rush

One pattern puts 91% of its weight between 6am and 9am. It dominates 70 stops, typically ones served mainly in the morning peak.

### Afternoon rush

Another puts 77% of its weight between 3pm and 6pm, and dominates 57 stops.

### All-day service

The third is spread across the day and dominates 483 stops. The four main Casuarina stops are about half this pattern, with the rest split between the two rushes.

### Why non-negative matters

PCA on the same matrix explains variance well, but its second component has 13 negative values among 24 hours: "minus departures" that no one can picture. NMF only adds patterns together, so every part reads like a timetable. More patterns always lower the error, so learners choose three for meaning, not for the smallest number.

Our timetable is the Territory's public bus data file for Darwin, published openly with an attribution licence. Deciding which stops sit inside Casuarina uses our own outline test against the bureau's suburb boundary, and the matrix, factorisations and tallies are ours as well.

## A matrix, NMF and some judgement

scikit-learn does the factorising. The judgement is in preparing the matrix and reading the parts.

**Lesson steps**

| Step | Learner task |
|---|---|
| 1 | Count departures by stop and hour for one weekday the feed covers. |
| 2 | Divide each row by its total so busy and quiet stops compare fairly. |
| 3 | Fit NMF for 1 to 5 patterns and chart the errors. |
| 4 | Name each of three patterns from its hours and check the Casuarina stops. |

Step 2 is a real decision. Without it, the busiest stops dominate and the patterns describe them alone. Learners try both, and also compare with PCA to see why its negative values make the parts hard to explain. Calendar handling matters too: the feed switches its weekday timetable off on many dates in late 2026, so choosing the day comes first.

### Younger learners

Mix two colours of paint to match a shade, the idea behind building things from positive parts.

### Teenagers

Build the matrix, fit NMF and present the three patterns as charts.

### Adults

Use NMF to find usage patterns in sales, energy or web logs at work.

## The hub in numbers

A closer look at the stops inside the suburb, plus a note on Territory time.

### Busiest stop

Trower Road after Linton Street carries 342 departures that Wednesday, more than any other stop within Casuarina.

### Terminus

The Bradshaw Terrace terminus stop has 268 departures, and eight route names in the feed begin "Casuarina".

### Territory time

Darwin keeps UTC+9:30 all year; the IANA database records its last daylight saving period ending in March 1944.

**Outline used** We use the bureau's Casuarina boundary, about 0.42 square kilometres, which our test places within the City of Darwin. Territory school term dates are left out: we were unable to fetch them from an official source.

## From mixing paint to matrix factorisation

Ages are only a starting guide.

- **Ages 6 to 9: Patterns** Block-code games about repeating patterns. [Scratch Coding for Kids](/courses/scratch-programming-complete-course), [AI Literacy for Kids (Ages 8 to 14)](/courses/ai-literacy-for-kids-course)
- **Ages 8 to 12: Tables of numbers** Python lists, grids and simple charts. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [Maths Through Coding](/courses/maths-through-coding)
- **Ages 13 to 17: Unsupervised learning** Clustering and factorisation on real data. [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens), [Data Science for Teens](/courses/data-science-course-for-teens-python-data)
- **University and adult: Applied ML** Matrix methods and evaluation for work. [AI and ML Masterclass](/courses/ai-ml-masterclass-complete-college), [Statistics & Probability](/courses/statistics-probability-maths-course)

## Is pattern-finding AI always right?

It always finds patterns. Deciding which ones mean something is up to people.

Ask NMF for five patterns and it will return five, with a lower error than three. Some of those extra parts may describe a single unusual stop rather than anything general.

A Casuarina learner who has named three patterns from their hours, and checked them against known stops, treats AI-found patterns as hypotheses to test rather than facts.

Our AI classes pair every pattern a model finds with a reason to believe it. The longer argument is in [is learning to code still worth it](/blog/is-coding-worth-learning-2026).

## Casuarina lessons, live online

Classes run over video, so learners across Darwin's northern suburbs join from home.

- **Live teacher** Each class is taught in real time, with code reviewed as learners type.
- **School holidays** Classes pause during Territory school holidays.
- **No-cost start** Your first class is free, and a short course plan follows.
- **Groups** Five to ten learners at a level, or one-to-one.
- **Pace** Twice-weekly classes across each school term.
- **India time** A 5:30pm Casuarina class starts at 1:30pm in India, every day of the year.

**Four hours ahead** With Darwin fixed at UTC+9:30 and India at UTC+5:30, the IANA database puts Casuarina exactly four hours ahead all year.

## Casuarina class fees

All learners pay the same fees.

- First class: USD 0. Class one is free, followed by a plan.
- Group tuition: USD 100 a month. Group classes: two a week, with five to ten others.
- Private tuition: USD 150 a month. Private classes: about eight a month with your own teacher.

Prices are in US dollars, payable only after the trial class has agreed what and when. For holidays and absences, see our pricing page.

## Casuarina AI and programming questions

### How many people live in Casuarina?

The 2021 Census counted 406 people in the Casuarina suburb, median age 27. Few people live in the suburb itself.

### What is non-negative matrix factorisation?

A way of breaking a table of non-negative numbers into a few additive parts, so each row is a mix of patterns.

### Why three patterns?

Because three gave parts that make sense as timetables. More patterns lower the error but become harder to explain.

### How is NMF different from PCA?

PCA allows negative values, which suits some tasks but makes timetable parts hard to read. NMF only adds positive parts.

### Can children learn about AI patterns?

Younger learners explore pattern games; factorisation suits confident teenagers and adults.

### How many bus routes serve Casuarina?

On the chosen Wednesday, 15 route names in the Darwin timetable stop inside the Casuarina suburb.

### Do you have a centre in Casuarina?

No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.

### What do Casuarina classes cost?

The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of five to ten, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.

### Who would my child learn alongside?

Five to ten learners of similar level and pace, whatever their age or where they live. One-to-one lessons are there if no group time works.

### Do you teach adults?

We do. Grown-up learners have their own groups or private classes, and many analyse data from their workplace.

## Read more

Casuarina learners can also see the [Darwin page](/online-coding-and-python-classes-in-darwin), the [Northern Territory guide](/coding-and-ai-classes-in-northern-territory) and [AI classes for teens](/ai-classes-for-teens-australia).

## Contact

Book the free class on [https://learn.modernagecoders.com/ai-and-programming-classes-in-casuarina-darwin](https://learn.modernagecoders.com/ai-and-programming-classes-in-casuarina-darwin#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
