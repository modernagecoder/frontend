---
title: "Online Coding and Python Classes in Palmerston, Darwin"
description: "Live online coding and Python classes for Palmerston NT, ages 6 to adult, with a Python project pairing consecutive bus stops from the Darwin public bus timetable."
canonical: https://learn.modernagecoders.com/online-coding-and-python-classes-in-palmerston-nt-darwin
source: src/pages/online-coding-and-python-classes-in-palmerston-nt-darwin.html
---
> itertools.pairwise, which turns a list into neighbouring pairs. Learners pair each stop on a Palmerston bus trip with the next to measure how long each hop takes. Run it over the whole timetable at once and 375 pairs join the last stop of one trip to the first stop of another, 171 of them going backwards in time. Grouping by trip first fixes every one.

[Home](/) / [Australia](/coding-classes-in-australia) / [Northern Territory](/coding-and-ai-classes-in-northern-territory) / [Darwin](/online-coding-and-python-classes-in-darwin) / Palmerston

City of Palmerston, Greater Darwin, Northern Territory / Live online

# Online coding and Python classes in Palmerston

**What Python tool does the Palmerston project use?** itertools.pairwise, which turns a list into neighbouring pairs. Learners pair each stop on a Palmerston bus trip with the next to measure how long each hop takes. Run it over the whole timetable at once and 375 pairs join the last stop of one trip to the first stop of another, 171 of them going backwards in time. Grouping by trip first fixes every one.

Palmerston is the satellite city south-east of Darwin, with its own council, a bus interchange and a young population. Its suburbs are served by local routes 70 to 78, 87 and 88 and by the longer routes 8 and 9 towards Darwin. The Northern Territory Government publishes the whole bus timetable, ready for a careful Python learner.

Facts last verified 13 October 2026. Teaching is online; no Palmerston branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 15 to 20 students per group.

## Python courses for the Top End

Courses that build tidy, testable Python. The free trial picks the starting level.

- [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college) (University and adult): The standard library, itertools included, in depth.
- [Python for Teens](/courses/python-complete-masterclass-teens) (Ages 13 to 17): Lists, grouping and real timetable data.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass) (Ages 8 to 12): First typed Python in small projects.
- [Data Analysis Course](/courses/data-analysis-mastery-course-college) (University and adult): Turning raw records into checked summaries.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## A young, car-based city of families

Figures for the City of Palmerston council area (ABS LGA72800) from 2021 Census QuickStats, read on 13 October 2026, with the ABS 2025 estimate.

**City of Palmerston counts**

| Measure | Value |
|---|---|
| Residents, 2021 Census | 37,247 |
| Estimated residents, 2025 | 43,193 |
| Median age | 31 |
| Families | 9,502 |
| Private dwellings | 14,535 |
| People per household | 2.8 |

**Palmerston shares beside the Northern Territory**

| Share | Palmerston | NT |
|---|---|---|
| Residents aged 5 to 9 | 8.8% (3,271) | 7.2% |
| Drove a car to work | 73.1% (14,074) | 63.4% |
| Separate houses | 75.9% (9,348) | 66.8% |
| Technicians and trades workers | 16.5% (3,179) | 13.8% |

### Families

Couples with children were 48.4% of Palmerston families, above the territory share.

### Driving city

Nearly three in four workers drove to work, and only 1.2% walked, compared with 7.6% across the NT.

### Two figures

The Census count of 37,247 and the ABS 2025 estimate of 43,193 use different methods, so both appear without subtraction.

The 2021 Census was held during the pandemic, so travel answers describe that week. The bureau rounds its shares and lightly perturbs small counts, so we print its figures exactly and never build totals by adding rows.

## Pairs that must stay inside one trip

The bus timetable lists every stop of every trip in order. To measure each hop, learners pair each stop with the next using itertools.pairwise, added to Python in version 3.10. We use Wednesday 30 September 2026, a weekday on which the feed's weekday timetable runs, and keep the 376 trips that touch the 118 stops inside the City of Palmerston.

**Two ways to pair consecutive stops (our run, Python 3.13)**

| Method | Pairs | Problem pairs |
|---|---|---|
| pairwise over all rows sorted by trip and stop | 7,762 | 375 cross from one trip to the next |
| Of those crossing pairs, time runs backwards | 171 | Negative hop times |
| Group by trip, then pairwise inside each | 7,387 | None |

### One per boundary

There are 376 trips, so a single list has 375 places where one trip ends and the next begins. pairwise pairs across every one of them.

### Short hops

Grouped correctly, the 135 stop-to-stop segments inside Palmerston have a median hop of 1 minute.

### Zero-minute hops

Of the 7,387 correct pairs, 1,083 show 0 minutes, because the timetable records whole minutes. Learners decide how to treat them before averaging.

### A calendar surprise

The same feed switches its weekday service off on 51 weekday dates between 5 October and 28 December 2026, while leaving it on from 14 to 25 December. We do not know why, so the project uses a date the weekday timetable clearly covers and reports this exception rather than guessing.

Timetables come from the NT Government's Darwin bus GTFS feed on data.nt.gov.au, licensed Creative Commons Attribution, downloaded on 13 October 2026. Stops are placed in the City of Palmerston by our point-in-polygon test on the ABS council outline; pairs, hop times and counts are our own calculation.

## Group first, then pair

The correct version is only two lines longer. The lesson is noticing that the short version is wrong.

**Lesson steps**

| Step | Learner task |
|---|---|
| 1 | Read stop_times, keep active trips for the chosen day and sort by trip and stop sequence. |
| 2 | Run pairwise over the whole list and count pairs whose two trips differ. |
| 3 | Group rows into a dict of trips, then run pairwise inside each trip. |
| 4 | Summarise hop times for Palmerston segments and decide what to do with zeros. |

A useful check falls out of step 2: the number of bad pairs should equal the number of trips minus one. Here it is exactly 375 for 376 trips, which confirms the explanation. Learners also find the longest hops, such as an express segment of 28 minutes into Palmerston Interchange, and check they are real rather than errors.

### Younger learners

Hold hands with the next person in each team line, and notice what goes wrong when two lines stand end to end.

### Teenagers

Write both versions, prove the 375, and chart the hop times.

### Adults

Compute differences between consecutive events in logs or sensor data without crossing groups.

## Interchange, routes and Territory time

Local details from the Darwin bus timetable feed and the IANA time zone database.

### Busiest stop

Palmerston Interchange has 315 scheduled departures on the chosen Wednesday, the most of any stop in the council area.

### 20 route names

Trips touching Palmerston that day run on 20 route names, from local 70s and 80s to the Orbital services and rural 440s.

### No daylight saving

Darwin time has stayed at nine and a half hours ahead of UTC since daylight saving last ended in March 1944.

**Area used** The City of Palmerston is the ABS council outline of about 52.7 square kilometres, drawn in three parts. School term dates are not given here because the NT education sources could not be read directly.

## From holding hands to itertools

Most Palmerston learners start on one of these rungs; the trial confirms which.

- **Ages 6 to 10: Order and sequence** Scratch projects where steps must happen in the right order. [Scratch Coding for Kids](/courses/scratch-programming-complete-course), [Coding for Kids](/courses/kids-coding-blocks-masterclass)
- **Ages 10 to 14: Moving to text** Loops, lists and first timetable puzzles typed out. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [Maths Through Coding](/courses/maths-through-coding)
- **Ages 14 to 18: Real public files** itertools, grouping and messy government data. [Python for Teens](/courses/python-complete-masterclass-teens), [Data Science for Teens](/courses/data-science-course-for-teens-python-data)
- **University and adult: Pipelines** Clean, repeatable data processing and automation. [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college), [Python Automation Course](/courses/python-ai-automation-masterclass-college)

## Would an AI assistant group first?

Not always, because the short version looks so neat.

Ask for "time between consecutive stops" and an assistant may well write pairwise over the sorted rows. The output looks plausible until someone notices a few negative times among thousands.

A Palmerston learner who has counted the 375 bad pairs knows to check group boundaries in any generated code that compares neighbours.

In our Python classes, every neat one-liner gets a sanity check. The longer argument is in [why understanding code still beats copying it](/blog/is-coding-worth-learning-2026).

## How Palmerston lessons work

Every session is a live video class, joined from home in Palmerston, Rosebery or anywhere nearby.

- **Real-time teaching** Your teacher is on the call the whole time, reading code line by line.
- **Territory terms** Lessons pause in Northern Territory school holidays.
- **Try before paying** The first session is on us, and you receive a short written plan.
- **Class size** Up to twenty learners of similar level, or a private teacher.
- **Two a week** Around eight lessons a month.
- **India time** A 4pm Palmerston lesson is noon in India, all year.

**Darwin time** The IANA time zone database keeps Darwin at UTC+9:30 with no daylight saving since 1944, exactly four hours ahead of India.

## Palmerston fees

Every learner pays the same fees.

- First class: USD 0. The first lesson is free and includes a plan.
- Group tuition: USD 100 a month. Group lessons: two a week through term, with fifteen to twenty classmates.
- Private tuition: USD 150 a month. Individual lessons: the same two a week, with the teacher all to yourself.

Fees are set in US dollars and begin only when the trial has chosen a course and weekly time. Holiday and missed-lesson rules are on the pricing page.

## Palmerston coding and Python questions

### How many people live in Palmerston?

The 2021 Census counted 37,247 residents in the City of Palmerston, median age 31. The ABS estimate for 2025 is 43,193.

### What does itertools.pairwise do?

It returns overlapping pairs of neighbours from a sequence: first and second, second and third, and so on. It was added in Python 3.10.

### Why did some pairs go backwards in time?

Because they joined the last stop of one trip to the first stop of the next. Grouping by trip before pairing removes them.

### What are zero-minute hops?

Pairs of stops with the same scheduled minute. The timetable records whole minutes, so short hops round to zero.

### Can 10-year-olds learn Python?

Often, especially those who have already built things in Scratch. The free lesson shows whether typing code suits them yet.

### Where does the bus data come from?

From the Northern Territory Government's Darwin bus GTFS feed on data.nt.gov.au, licensed Creative Commons Attribution.

### Do you have a centre in Palmerston?

No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.

### What do Palmerston classes cost?

The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.

### How are groups formed?

By level and pace, fifteen to twenty learners each, not by age or suburb. One-to-one lessons suit anyone no group time fits.

### Can adults learn with you?

Yes. Working adults join their own groups or take private lessons, and many bring a spreadsheet they want to automate.

## Explore further

For the wider Top End, read the [Darwin page](/online-coding-and-python-classes-in-darwin) and the [Northern Territory guide](/coding-and-ai-classes-in-northern-territory); children ready to leave blocks behind can start with [our Scratch-to-Python step](/after-scratch-next-step-python-australia).

## Contact

Book the free class on [https://learn.modernagecoders.com/online-coding-and-python-classes-in-palmerston-nt-darwin](https://learn.modernagecoders.com/online-coding-and-python-classes-in-palmerston-nt-darwin#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
