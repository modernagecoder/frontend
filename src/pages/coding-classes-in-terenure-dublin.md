---
title: "Coding Classes in Terenure, Dublin | Modern Age Coders"
description: "Coding, Python, AI and maths lessons for Terenure learners aged 6 to 67, taught live online in small same-level groups or one to one. The first lesson is free."
canonical: https://learn.modernagecoders.com/coding-classes-in-terenure-dublin
source: src/pages/coding-classes-in-terenure-dublin.html
---
> For Terenure learners every lesson is taught live over video by a teacher, in a small group of learners at the same level or one to one, usually twice a week, and the classes take anyone aged six to sixty-seven. There is nowhere to get to. The opening lesson is free, then a month of lessons is USD 100 in a group or USD 150 privately.

[Home](/) / [Ireland](/coding-classes-in-ireland) / [Dublin](/best-coding-class-in-dublin) / Terenure

Terenure, Dublin 6W / Live online

# Coding classes in Terenure

**What are the best coding classes in Terenure?** For Terenure learners every lesson is taught live over video by a teacher, in a small group of learners at the same level or one to one, usually twice a week, and the classes take anyone aged six to sixty-seven. There is nowhere to get to. The opening lesson is free, then a month of lessons is USD 100 in a group or USD 150 privately.

Seven Dublin Bus routes stop in Terenure. How alike are they? A standard answer compares the stops two routes share with all the stops either one uses, a score called the Jaccard index that runs from 0, nothing in common, to 1, identical. Routes 16 and 16D score 0.896; routes 65 and 74 both pass through Terenure and score 0. Then comes the surprise: route 15 compared with itself going the other way scores 0.008, because a stop in the timetable is one side of the road. Count stops by name instead and the same comparison gives 0.859. This page teaches a learner to measure similarity, and to decide first what counts as the same thing.

Facts last verified 20 September 2026. Teaching is online; no Terenure branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Four first courses for Terenure

Pick an age band to begin; the teacher uses the free first lesson to confirm the level and will move the learner if another course fits better.

- [Coding for Kids](/courses/kids-coding-blocks-masterclass) (Ages 6 to 10): Blocks and sorting games: which items two lists share, and which belong to only one.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass) (Ages 10 to 13): Python sets: union, intersection and a similarity score computed from real bus stops.
- [Python for Teens](/courses/python-complete-masterclass-teens) (Ages 13 to 18): Real timetable data in Python: stop patterns, Jaccard scores, and matching places by identifier, name or distance.
- [Data Analysis Course](/courses/data-analysis-mastery-course-college) (College and adult): For adults who compare customer lists, product catalogues or service areas and need a fair overlap measure.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## How alike are two bus routes? It depends on what counts as the same stop

Everything here comes from one day of the national timetable feed for Dublin Bus, Tuesday 22 September 2026. For each route and direction that stops at one of the 13 stops named Terenure, the program takes the stop list used by most of that day's trips, then compares routes as sets of stops.

**Jaccard similarity: shared stops divided by all stops used by either route**

| Comparison | By stop identifier | By stop name | Within 100 metres |
|---|---|---|---|
| Route 15, one direction against the other | 0.008 | 0.859 | 0.662 |
| Route 65, one direction against the other | 0.007 | 0.793 | 0.585 |
| Routes 16 and 16D, same direction | 0.896 | 0.896 | not needed |
| Routes 65 and 74, same direction | 0.000 | 0.000 | not needed |

### Near twins

Routes 16 and 16D share 69 of the 77 stops either one uses, a score of 0.896. Six stops are on the 16 alone and two on the 16D alone, which is the whole difference between them on a weekday.

### Strangers in one village

Routes 65 and 74 both stop in Terenure, yet of the 141 stops either uses they share none. The 65 calls at the Terenure stops named Rd E, Lbry and Coll, the 74 at Road West, Garda Stn and South, so as sets they are completely separate.

### A stop is a side of the road

Route 15 going out and route 15 coming back share just 1 stop identifier out of 132, a score of 0.008, because each kerb has its own stop. Matched by name the same pair scores 0.859; matched by distance, treating stops within 100 metres as one place, 0.662.

### Before you measure overlap, decide what counts as the same

A similarity score is only as meaningful as the things it compares. Identifiers are exact but can be too fine: two stops facing each other across a road are different to them. Names are coarser but can merge different places, and in this feed 4,337 stops share only 2,579 distinct names. A distance rule sits between the two and needs a threshold someone has to choose. None is right in general; the question decides, and the answer should say which was used.

The learner's program reads the feed's calendar, trips and stop times, keeps the trips that run on the chosen Tuesday and touch a Terenure stop, and groups them by route and direction. Some routes run more than one stop pattern in a day, so it picks the pattern most trips use and says how many trips follow it. It then turns each pattern into a set and computes the Jaccard index for every pair: the size of the intersection over the size of the union. Finally it repeats the comparison three ways, by stop identifier, by stop name and by location within 100 metres, and prints the three scores side by side so the effect of that one choice is plain.

### Why direction matters

The program only compares routes heading the same way when it asks whether two routes are alike, because otherwise every pair would look almost unrelated for the kerb-side reason above. Choosing the comparison is part of the analysis.

### The main pattern

Route 65 runs three different stop patterns in one direction on the chosen day, and its most common one covers 11 of 17 trips. Using a single pattern per route is a simplification the page states rather than hides.

### A timetable, not the street

The figures describe planned stop lists for one weekday. They say nothing about how many people use each stop, or about weekend and evening variations.

## Terenure from its library, its park and its bus stops

Nothing below is our own description; each line repeats what the responsible body publishes.

**Named places in Terenure**

| Place | What its own source says |
|---|---|
| Terenure Library | Templeogue Road, Dublin 6W, D6W YC59 |
| Bushy Park | In Terenure, with walks along the River Dodder |
| Bus stops named Terenure | 13 stops in the Dublin Bus timetable feed |
| Routes stopping there on a weekday | 15, 15A, 16, 16D, 65, 65B and 74 |

### The park's history

Dublin City Council traces Bushy Park to 1700, when Arthur Bushe built a house on a site of four hectares. John Hobson renamed it Bushy Park in 1772, Abraham Wilkinson added almost 40 hectares from 1791, and the Shaw family sold the estate to Dublin Corporation in 1951.

### The park today

The council lists walks along the River Dodder, GAA pitches, tennis, padel and boules courts, a duck pond, a playground and a skatepark, and a native tree trail available in English or Irish.

### The library

According to the council, the Templeogue Road branch keeps late hours, until 8 pm, on Mondays and Wednesdays, closes at 5 pm on Tuesdays and Thursdays, and has a hearing loop for visitors who use hearing aids.

**What this page does not claim** No population is given for Terenure, because the page prints only what named bodies publish about the place. The bus figures are planned stop patterns on one weekday from the national timetable feed.

## The lessons in a Terenure learner's week

Two lessons in a typical week, each led live by the teacher for its full length.

### Children

The youngest start in block code, sorting objects into two overlapping groups and spotting what both share.

### Teenagers

Older learners build up to Python, web pages, AI work and genuine timetable files, handling sets and similarity in their own code.

### Adults

Adults can begin with no experience at all; the first lesson points to the course.

The stop patterns are published by the National Transport Authority; grouping them by route, comparing them as sets and applying the three matching rules is our own work of 20 September 2026. Park and library details are Dublin City Council's.

## From sorting cards to comparing sets

Bands are only a starting guide; lesson one sets the level.

- **Ages 6 to 10: In both, in one** Block-coded sorting games with two overlapping groups. [Coding for Kids](/courses/kids-coding-blocks-masterclass), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **Ages 11 to 13: Sets in Python** Union, intersection and a similarity score on small lists. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [Maths Through Coding](/courses/maths-through-coding)
- **Ages 14 to 18: Matching rules** Real bus data, Jaccard scores and three ways of deciding two stops are the same. [Python for Teens](/courses/python-complete-masterclass-teens), [Data Science for Teens](/courses/data-science-course-for-teens-python-data)
- **Ages 18 to 67: Overlap at work** Comparing customer lists, catalogues and coverage areas with a clear matching rule. [Data Analysis Course](/courses/data-analysis-mastery-course-college), [Data and AI Analytics for Non-Programmers (Excel, Sheets, Power BI)](/courses/data-and-ai-analytics-for-non-programmers-course)

## Ask an assistant how similar two routes are

It will compute a score. It may not ask what a stop is.

Give an AI assistant the stop lists for route 15 in both directions and ask how similar they are, and it will likely compute a Jaccard index on the stop identifiers and report almost no overlap. Correct, and very misleading: the bus runs along the same roads both ways, but each kerb has its own identifier.

A learner who has worked through this project requests three versions, by identifier, by name and by distance, and then chooses the one that suits the question. An assistant is quick at the arithmetic; deciding what the elements of a set should be is the part that needs a person who understands the data.

Similarity depends on sameness. Define sameness first, then let the code count. The longer argument is in [why learning to code matters more with AI around](/blog/is-coding-worth-learning-2026).

## How lessons run for Terenure

The main points.

- **Live lessons** A teacher leads each lesson in real time and works through each learner's code alongside them.
- **Grouped by level** Five to ten learners on the same level, joining from Terenure, around Ireland or abroad.
- **Two days a week** The same pair of days each week, which comes to roughly eight lessons a month.
- **School calendar** Breaks for holidays, mid-terms and exams are part of the plan.
- **Equipment check** A proper computer rather than a phone, a working mic, a way to hear the teacher, and broadband that keeps video smooth.
- **Just the two of you** Private lessons pair one learner with one teacher, useful for anyone racing ahead, wanting a gentler pace, or free only at unusual times.

**All online** There are no Modern Age Coders premises in Terenure or anywhere in Ireland. Lessons are live on video and run the same wherever the learner is.

## Fees for Terenure

Clearly.

- First class: USD 0. A free first lesson, with a check of the learner's level.
- Group tuition: USD 100 a month. A month in a group of five to ten at one level, around eight live lessons.
- Private tuition: USD 150 a month. A month of one-to-one lessons on the same pattern.

Outside India the fee is a single US dollar amount for every family, paid monthly. Taking the free lesson signs you up to nothing; the first bill arrives only when the course begins, and anything about holidays, missed sessions or changing format is set out on the pricing page.

## Terenure coding class questions

### Is there a Modern Age Coders centre in Terenure?

No. Lessons are live on video and we have no premises in Ireland. A learner needs a computer, a microphone and sound, and a dependable connection. The phone number on the page is Indian.

### What is the bus route project?

The learner takes the Dublin Bus timetable feed, collects the stop lists of the seven routes through Terenure, and measures how alike they are with the Jaccard index: 0.896 for routes 16 and 16D, 0 for routes 65 and 74, and 0.008 or 0.859 for route 15 against itself depending on whether stops are matched by identifier or by name.

### Does the page say which bus to take?

No. It compares planned stop patterns for one weekday as a data exercise. For journeys, check the operator's current timetable.

### Why is there no population figure for Terenure?

The page uses only facts that named organisations publish about Terenure itself, here the National Transport Authority and Dublin City Council, and neither publishes a head count.

### When are lessons held?

On weekday afternoons and evenings after school, and during the day at weekends. Times are given in Irish time. The teaching team is in India; Irish winter puts them five and a half hours ahead of Terenure and Irish summer four and a half, so the timetable only uses hours that are reasonable in both countries.

### Can adults take part?

Yes, up to sixty-seven, beginners included. After the free lesson an adult chooses between a group at their level and one-to-one lessons.

### Will my child be with other Terenure children?

Possibly, but groups are organised by level, so classmates may live anywhere in Ireland or overseas.

### What do coding classes in Terenure cost?

The first lesson is free. After that a group place is USD 100 a month for about eight live lessons, two a week, with five to ten learners, and one-to-one lessons on the same schedule are USD 150 a month. Terms are agreed before any payment.

### How big are the groups?

Five to ten learners, matched by level, pace and goals rather than age or address. If no group runs at a workable time, lessons are one to one.

## Around Terenure

South along the Dodder, [Rathfarnham](/coding-classes-in-rathfarnham-dublin) has a project on the shortest route between heritage sites, and to the north [Rathmines](/coding-classes-in-rathmines-dublin) one on library loans. The [Dublin](/best-coding-class-in-dublin) page covers the city, and the [Ireland hub](/coding-classes-in-ireland) the rest.

## Contact

Book the free class on [https://learn.modernagecoders.com/coding-classes-in-terenure-dublin](https://learn.modernagecoders.com/coding-classes-in-terenure-dublin#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email contact@modernagecoders.com. Rated 4.9 across 547 Google reviews.
