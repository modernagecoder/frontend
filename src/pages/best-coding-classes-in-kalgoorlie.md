---
title: "Best Coding Classes in Kalgoorlie | Live Online, Teens and Adults"
description: "Live online coding and Python classes for Kalgoorlie-Boulder teenagers and adults: geometry, grids and real elevation data, taught in small groups or one to one."
canonical: https://learn.modernagecoders.com/best-coding-classes-in-kalgoorlie
source: src/pages/best-coding-classes-in-kalgoorlie.html
---
> A Kalgoorlie-Boulder teenager or adult writes working Python on real data, explains each decision aloud, and a teacher questions the reasoning as well as the answer. The urban area counted 29,072 people in 2021. Every lesson is live and online, one to one or in a small group at the learner's level, and the first one is free.

[Home](/) / [Western Australia](/coding-and-ai-classes-in-western-australia) / [Australia](/coding-classes-in-australia) / Kalgoorlie-Boulder

Kalgoorlie-Boulder, Western Australia / Live online

# Coding classes in Kalgoorlie

**What do the best coding classes in Kalgoorlie look like?** A Kalgoorlie-Boulder teenager or adult writes working Python on real data, explains each decision aloud, and a teacher questions the reasoning as well as the answer. The urban area counted 29,072 people in 2021. Every lesson is live and online, one to one or in a small group at the learner's level, and the first one is free.

NASA's radar elevation survey of February 2000 shows a deep hollow on the edge of Kalgoorlie-Boulder, its lowest sample at 145 metres while the median across our grid is 365. Take every grid point below 300 metres that links to that lowest point and ask for the area. Counting grid squares gives 735 cells. Drawing a polygon through the outer points and applying Pick's theorem, area equals interior points plus half the boundary points minus one, gives 681. Both are honest arithmetic, and they disagree by exactly 54. Working out why, and then finding the one height where Pick's theorem stops working altogether, is a real lesson in geometry and in code.

Facts last verified 9 October 2026. Teaching is online; no Kalgoorlie-Boulder branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 15 to 20 students per group.

## Courses a Kalgoorlie learner could begin with

Four courses that sit closest to the project below. Which one fits is decided in the free trial, and no payment details are taken.

- [Python for Teens](/courses/python-complete-masterclass-teens) (Ages 13 to 17): Python from first variables to reading a grid of heights and looping over it.
- [Maths Through Coding](/courses/maths-through-coding) (Ages 10 to 15): Area, coordinates and proofs like Pick's theorem, tested by writing code that checks them.
- [Competitive Programming for Teens](/courses/competitive-programming-for-teens-course) (Ages 14 to 18): Flood fill, boundary tracing and the edge cases contest problems love.
- [Data Structures & Algorithms Course](/courses/data-structures-algorithms-masterclass-college) (University and adult): Grid search, polygon algorithms and the conditions each one needs to be correct.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## A Goldfields city of 29,072 with a young median age

The ABS 2021 QuickStats for the Kalgoorlie-Boulder urban area, next to Western Australia and Australia.

**Kalgoorlie-Boulder, 2021 Census**

| Item | Kalgoorlie-Boulder | Western Australia | Australia |
|---|---|---|---|
| Residents | 29,072 | Not listed here | Not listed here |
| Median age | 34 | 38 | 38 |
| Families | 7,026 | Not listed here | Not listed here |
| Private dwellings | 13,141 | Not listed here | Not listed here |
| Separate houses among occupied dwellings | 8,106, or 81.3% | 79.7% | 72.3% |
| Machinery operators and drivers | 2,499, or 16.5% | 7.7% | 6.3% |
| Technicians and trades workers | 3,366, or 22.2% | 15.3% | 12.9% |

### Gold in the workforce

Gold ore mining was the leading industry, employing 20.3% of working residents against 1.3% across WA and 0.2% nationally.

### Plenty of school-age children

There were 2,216 children aged 5 to 9 and 2,033 aged 10 to 14, both above the state shares.

### Degrees less common

A bachelor degree or higher was held by 3,123 residents aged 15 and over, 13.8%, against 23.8% in WA.

To protect privacy the ABS makes small random changes to census cells, so components of a table may not add exactly to its total. We print each figure as published and never present our own sum as a census result.

## Why do 735 squares and Pick's theorem give different areas for the same hollow?

NASA's SRTM elevation grid around Kalgoorlie-Boulder, sampled every 0.0004 degrees, and the region below a chosen height.

**Region linked to the lowest point (our measurement, 8 October 2026)**

| Below | Grid points (cells) | Boundary B | Interior I | Pick: I + B/2 - 1 |
|---|---|---|---|---|
| 200 m | 129 | 47 | 82 | 104.5 |
| 250 m | 338 | 81 | 257 | 296.5 |
| 300 m | 735 | 106 | 629 | 681.0 |
| 320 m | 851 | 115 | 738 | 794.5, wrong |
| 350 m | 1,032 | 119 | 913 | 971.5 |

### 1. Flood from the bottom

Starting at the 145 m low point, a flood fill collects every neighbouring point below the chosen height. That set is the region, one grid point per cell.

### 2. Trace the outline

A boundary-following routine walks the outer points in order, giving a polygon whose corners are grid points. Its area comes from the shoelace formula or from Pick's theorem.

### 3. Explain the gap

Counting cells treats each boundary point as a whole square, while the polygon cuts through them. For a simple polygon the gap is always B/2 + 1: 106 boundary points give the 54 at 300 m.

### The height where the theorem breaks

At 320 m the traced outline passes through one point twice, pinching the region where it touches itself diagonally. Pick's theorem needs a simple polygon, so its 794.5 now disagrees with the shoelace result of 792.5. At 330 m the pinch has filled in and the two agree again on 847.0. A learner who checks both methods side by side finds this in seconds; one who trusts a single formula never notices.

At 300 m the 735 cells cover about 124.37 hectares on our 38.26 by 44.23 metre spacing, and the polygon about 115.23. We read the hollow as the Fimiston open pit, which Northern Star Resources describes as part of operations adjacent to the City of Kalgoorlie-Boulder, but the grid itself carries no labels, and it shows the ground as surveyed in February 2000, not today.

## Three ways to measure the same shape, and what each assumes

Worked on the Kalgoorlie grid, then reused for floor plans, paddocks, images or any shape stored as points.

**Methods compared at 300 m**

| Method | Result | What it assumes |
|---|---|---|
| Count the cells | 735 | Each point owns a full rectangle around it |
| Pick's theorem | 681.0 | The outline is a simple polygon on grid points |
| Shoelace formula | 681.0 | The outline is listed in order without crossing |
| Convert to hectares | 124.37 or 115.23 | A flat, even spacing between samples |

No method here is the true area. The grid is coarse, the survey is a quarter of a century old and the edge of a hollow is a matter of where you draw the height line. The skill is knowing what each calculation assumes, checking two against each other, and reporting the range rather than a single confident number.

### Secondary students

Prove Pick's theorem on small hand-drawn shapes, then write a checker and run it on the real grid.

### University students

Boundary tracing, flood fill and polygon validity tests, with careful handling of pinch points.

### Adults at work

Area estimates from survey or drone grids, with the habit of cross-checking methods before a figure goes in a report.

SRTM version 3 fills gaps from other elevation models, so a few samples on steep ground may not come from the 2000 radar itself. Modern Age Coders has no link with NASA, Northern Star Resources or the ABS; the counts, areas and comparisons on this page are our own analysis.

## WA school terms and Perth time all year

Dates and clocks that affect when Goldfields learners study.

### Term 3 in 2027

The WA Department of Education sets Term 3 from Monday 19 July to Friday 24 September 2027.

### The spring break

Students are then off from Saturday 25 September to Sunday 10 October, with Term 4 starting Monday 11 October.

### Perth time, no changes

Kalgoorlie-Boulder keeps UTC plus 8 through the year, since Western Australia does not use daylight saving.

**The gap to our teachers** India is two and a half hours behind Kalgoorlie-Boulder in every season. A 4:30pm lesson in Kalgoorlie starts at 2pm for the teacher, winter or summer.

## From counting squares to proving why a formula fails

Age bands are only a guide. The trial lesson places each learner properly.

- **Ages 13 to 14: Grids and loops** Storing heights in lists, finding the lowest point and counting squares in Python. [Python for Teens](/courses/python-complete-masterclass-teens), [Maths Through Coding](/courses/maths-through-coding)
- **Ages 15 to 18: Geometry in code** Flood fill, outline tracing, Pick's theorem and the shoelace formula, checked against each other. [Competitive Programming for Teens](/courses/competitive-programming-for-teens-course), [Problem Solving for Teens](/courses/problem-solving-dsa-masterclass-teens)
- **University: Robust algorithms** Polygon validity, degenerate cases and proofs of correctness for grid algorithms. [Data Structures & Algorithms Course](/courses/data-structures-algorithms-masterclass-college), [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)
- **Adults: Measuring from data** Turning survey or sensor grids into areas and volumes that hold up to scrutiny. [Data Analysis Course](/courses/data-analysis-mastery-course-college), [Python Automation Course](/courses/python-ai-automation-masterclass-college)

## Would a chatbot have caught the pinch at 320 metres?

Only if someone asked it to check the polygon first.

Ask an AI assistant for the area of a traced grid outline using Pick's theorem and it will produce tidy code that counts boundary and interior points. At 320 m on the Kalgoorlie grid that code returns 794.5 without complaint. The formula is right; the shape just breaks its one condition, and the assistant has no reason to look.

Our Kalgoorlie learners are taught to state a method's assumptions before running it, then to compute the same quantity a second way. When the shoelace answer comes back as 792.5, the two-point disagreement is the clue that sends them looking for the pinch.

A Kalgoorlie learner who has found a hidden assumption in a famous theorem will question an AI's confident output in 2026, which is the habit that makes coding worth learning. The longer argument is in [why coding still matters in 2026](/blog/is-coding-worth-learning-2026).

## Kalgoorlie to Boulder, one live lesson

The twin towns are a short drive apart, and an online lesson makes the distance irrelevant.

- **From either town** A learner in Kalgoorlie and one in Boulder log in to the same live class from home.
- **WA year levels** Teaching follows Western Australian year levels through to Years 11 and 12, in English.
- **Trial lesson first** You code something real with a teacher, then hear a suggested level, course and time; no card is needed.
- **Fifteen to twenty per group** Learners at one level from across Australia and beyond, so there is always a workable slot.
- **About eight a month** Usually two lessons a week, with WA holidays and exam periods planned in advance.
- **Shift-friendly times** Weekend and after-school slots suit families working rosters, agreed in the trial.

**Booked in Kalgoorlie time** Every confirmed time is written in Western Australian time, so nothing needs converting at home.

## What coding classes cost in Kalgoorlie-Boulder

Three prices cover everything.

- First class: USD 0. A trial lesson at no charge that ends with a level, course and time.
- Group tuition: USD 100 a month. A month in a group of fifteen to twenty learners, usually eight lessons.
- Private tuition: USD 150 a month. Around eight private lessons a month with the same teacher.

Goldfields families pay the same US dollar rate as the rest of Australia, with no remote surcharge. Billing starts only after the trial has agreed a course and slot; the pricing page explains holidays, missed lessons and changing between group and private.

## Kalgoorlie-Boulder coding class questions

### How many people live in Kalgoorlie-Boulder?

The urban area counted 29,072 residents at the 2021 Census, with a median age of 34.

### What is Pick's theorem?

Pick's theorem gives the area of a simple polygon whose corners are grid points: area equals the number of interior grid points plus half the boundary points, minus one. It fails when the outline touches or crosses itself.

### What is the Kalgoorlie elevation project?

Learners load a NASA SRTM elevation grid around Kalgoorlie-Boulder, flood fill from the lowest point below a chosen height, and measure the area by counting cells, by Pick's theorem and by the shoelace formula, then explain every disagreement.

### Is the hollow really the Super Pit?

That is our reading, not a label in the data. The grid shows the ground in February 2000, and Northern Star Resources lists the Fimiston open pit among operations adjacent to the city.

### Do senior students fit lessons around ATAR?

Yes. Year 11 and 12 learners plan weekly lessons around WA term dates and assessments, and their school work stays their own.

### Which times suit Kalgoorlie learners?

After school or at weekends, settled in the trial and written in WA time. India time is two and a half hours behind Kalgoorlie-Boulder all year round.

### Do you teach children under 13?

Yes, from age 6, often starting with Scratch and simple games. This page focuses on teenagers and adults.

### Is there a Modern Age Coders centre in Kalgoorlie-Boulder?

No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.

### What do Kalgoorlie-Boulder coding classes cost?

The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.

### How big are the groups?

Fifteen to twenty learners, matched on level, pace and what they want to build rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.

## More for Goldfields and WA learners

West of the Goldfields there are [online Python classes in Perth](/online-coding-and-python-classes-in-perth-western-australia) and [coding for Perth kids](/coding-classes-for-kids-perth), useful for younger Kalgoorlie siblings. Students sitting selective entry tests can try [WA GATE ASET maths practice](/wa-gate-aset-maths-practice), and the state overview is at [coding and AI classes in Western Australia](/coding-and-ai-classes-in-western-australia).

## Contact

Book the free class on [https://learn.modernagecoders.com/best-coding-classes-in-kalgoorlie](https://learn.modernagecoders.com/best-coding-classes-in-kalgoorlie#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
