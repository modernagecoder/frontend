---
title: "Best Coding and AI Classes in Joondalup, Perth"
description: "Live online coding and AI classes for the City of Joondalup, ages 6 to adult, with a SQL self-join project built on 81 Main Roads traffic count sites."
canonical: https://learn.modernagecoders.com/best-coding-and-ai-classes-in-joondalup-perth
source: src/pages/best-coding-and-ai-classes-in-joondalup-perth.html
---
> Ask what a learner will be able to check, not just build. Our Joondalup project gives one concrete test. Learners pair every road traffic counter in the city with every other counter on the same road. A careless SQL join returns 381 rows, and a careful one returns 123. A course that teaches the reasons for that gap is worth choosing.

[Home](/) / [Australia](/coding-classes-in-australia) / [Western Australia](/coding-and-ai-classes-in-western-australia) / [Perth](/online-coding-and-python-classes-in-perth-western-australia) / Joondalup

City of Joondalup, northern Perth, Western Australia / Live online

# Coding and AI classes in Joondalup

**How do Joondalup learners choose the best coding and AI classes?** Ask what a learner will be able to check, not just build. Our Joondalup project gives one concrete test. Learners pair every road traffic counter in the city with every other counter on the same road. A careless SQL join returns 381 rows, and a careful one returns 123. A course that teaches the reasons for that gap is worth choosing.

The City of Joondalup runs along the coast from Marmion Avenue to Wanneroo Road. Main Roads Western Australia lists 81 traffic count sites inside it on 30 named roads, from Mitchell Freeway to quiet streets in Edgewater. Those sites make a small, honest table for learning how databases compare rows with each other.

Facts last verified 12 October 2026. Teaching is online; no Joondalup branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 15 to 20 students per group.

## Databases, Python and AI

Four courses that suit the SQL project below. The free first lesson places each learner at the right level.

- [MySQL Course](/courses/mysql-database-complete-masterclass-college) (University and adult): Tables, joins and queries that can be checked line by line.
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data) (Ages 13 to 17): Real public data in Python, with every number traced to its row.
- [Problem Solving for Teens](/courses/problem-solving-dsa-masterclass-teens) (Ages 13 to 17): Counting arguments and careful loops behind every join.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass) (Ages 8 to 12): First Python and AI projects in short, testable steps.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Coastal homes, school-age children and a rail line

From the 2021 Census QuickStats for the Joondalup council area (ABS LGA54170), read on 12 October 2026, with a newer population estimate.

**City of Joondalup headline counts**

| Measure | Value |
|---|---|
| Residents at the 2021 Census | 160,003 |
| Estimated residents, 2025 (ABS) | 176,595 |
| Median age | 41 |
| Families | 46,463 |
| Private dwellings | 62,144 |
| Bedrooms per dwelling | 3.7 |

**City of Joondalup shares beside Western Australia**

| Share | Joondalup | WA |
|---|---|---|
| Separate houses | 88.6% (50,982) | 79.7% |
| Train to work | 3.9% (3,259) | 1.8% |
| Bachelor degree or higher | 27.0% (35,118) | 23.8% |
| Residents aged 10 to 14 | 7.0% (11,200) | 6.4% |

### Two estimates

The Census counted 160,003 residents in 2021. The ABS estimate for 2025 is 176,595. The two are different measures, so we print both rather than subtract one from the other.

### Rail commuters

The Joondalup line runs up the middle of the city, and the share of workers taking a train was more than double the state figure.

### Schools

Our map test puts 53 government schools inside the council outline, 35 of them primary schools. These are our counts from the Department of Education list.

Census night fell during the pandemic, so travel figures describe that week rather than a typical one. The bureau also rounds and lightly adjusts small counts, which is why parts of its tables do not always add to its totals. We copy its figures as published.

## One table, joined to itself

The question sounds simple: on each Joondalup road with more than one counter, which two counters disagree the most? Answering it means joining the table of 81 sites to itself, once as a and once as b, wherever the road name matches. Every refinement below is a line of SQL, and each changes the answer.

**Rows returned as the self-join is tightened (our calculation)**

| Join condition | Rows | What changed |
|---|---|---|
| a.road = b.road | 381 | Every site also matches itself |
| and a.site <> b.site | 300 | 81 self-pairs removed |
| and a.site < b.site | 150 | Each pair kept once, not twice |
| and a.year = b.year | 123 | Only counts from the same year compared |

### Where 381 comes from

A road with n counters produces n times n matches. Marmion Avenue alone has 11 counters, so it contributes 121 rows before any filter.

### Mirror images

Without the less-than test, the pair (A, B) appears again as (B, A). The count halves from 300 to 150 and every comparison is reported once.

### Mixed years

Main Roads lists the latest count year for each site, from 2021/22 to 2025/26 here. Comparing a 2021 count with a 2025 count measures time as well as place, so 27 pairs drop out.

**Largest weekday gaps between two counters on one road, same year (Main Roads figures, pairing ours)**

| Road | Counter A | Counter B | Year |
|---|---|---|---|
| Mitchell Fwy | South of Ocean Reef Rd: 107,726 | At Shenton Av Bridge, southbound: 32,601 | 2021/22 |
| Ocean Reef Rd | North of Hodges Dr: 4,806 | West of Joondalup Dr: 41,893 | 2024/25 |
| Marmion Av | North of Shenton Av: 21,966 | North of Hepburn Av: 37,057 | 2024/25 |

### The top row is a trap

The two Shenton Avenue Bridge counters record one direction each, while the site south of Ocean Reef Road counts both. The largest gap in the table is a difference in definition, not in traffic. Learners add a rule that compares only like with like, and the honest leader becomes Ocean Reef Road, where one end carries nearly nine times the weekday volume of the other.

Volumes are average weekday vehicles from the Main Roads Traffic Digest, downloaded on 12 October 2026, using the council name Main Roads attaches to each site. The joins, pair counts and ratios are our own calculation. Our script is in plain SQLite so anyone can rerun it.

## Two aliases and a careful ON clause

A self-join gives the same table two names. Everything that matters happens in the conditions that link them.

**The lesson in steps**

| Step | Learner task |
|---|---|
| 1 | Load the 81 Joondalup sites into a SQLite table with road, place, year and weekday volume. |
| 2 | Predict the row count of the plain join, then run it and explain 381. |
| 3 | Add the inequality, the year match and a direction rule one at a time, recording the count after each. |
| 4 | Rank the surviving pairs by ratio and write one sentence per result a stranger could check. |

The prediction in step 2 is the heart of it. Before running anything, learners group the sites by road and add up the squares of the group sizes. If the database returns a different number, either the prediction or the data is wrong, and finding out which is real debugging. Thirteen of the 30 roads have a single counter, so they add one row each and pair with nothing once self-matches go.

### Younger learners

Match cards that share a colour and count the pairs by hand, then spot the cards matched with themselves.

### Teenagers

Write the four queries, chart the row counts and explain each drop in their own words.

### Adults

Use the same pattern to compare branches, stores or sensors that share a key in a work database.

## Busy corridors and 2027 dates

Local details from the Main Roads Traffic Digest and the WA Department of Education.

### Freeway peak

The site south of Ocean Reef Road on Mitchell Freeway averages 101,649 vehicles a day across the week, the highest in the city, from a 2021/22 count.

### Coastal spine

Marmion Avenue has the most counters of any Joondalup road. Its weekday averages run from 21,966 north of Shenton Avenue to 37,057 north of Hepburn Avenue.

### Term 1, 2027

WA public schools return on Monday 1 February 2027 and Term 1 ends on Friday 9 April, a natural point to start a course.

**Boundaries used** The council area is the ABS outline of about 98.9 square kilometres. Traffic sites are those Main Roads assigns to the City of Joondalup; school counts come from our own point-in-polygon test on the Department of Education coordinates.

## From matching cards to database joins

Ages are a guide only; the free lesson decides where a learner starts.

- **Ages 6 to 9: Sort and match** Block-code games about grouping and counting. [Scratch Coding for Kids](/courses/scratch-programming-complete-course), [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)
- **Ages 9 to 12: First tables** Python lists and simple counting programs. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [Maths Through Coding](/courses/maths-through-coding)
- **Ages 13 to 17: Queries and data** SQL, Python and honest comparisons on public data. [Data Science for Teens](/courses/data-science-course-for-teens-python-data), [Problem Solving for Teens](/courses/problem-solving-dsa-masterclass-teens)
- **University and adult: Databases at work** Schema design, joins and query checking. [MySQL Course](/courses/mysql-database-complete-masterclass-college), [Data Analysis Course](/courses/data-analysis-mastery-course-college)

## Can an AI assistant write the join instead?

It can write one quickly. Knowing whether it is right is the skill.

Ask an AI tool for pairs of counters on the same road and it will usually produce a valid self-join. Whether it remembers the self-pairs, the mirror duplicates, the mixed years and the directional sites is another matter, and each slip changes the answer.

A learner who has predicted 381 from the group sizes can read generated SQL and see at once which condition is missing. That habit of checking a row count before trusting a result transfers to every tool they will meet.

In Joondalup classes, AI writes drafts and learners verify them. The longer argument is in [why learning to code still matters when AI can write it](/blog/is-coding-worth-learning-2026).

## How Joondalup classes run

Every lesson is live on video with a teacher, so learners join from home anywhere in the city.

- **A real teacher** Each session is taught in real time, with questions answered and code reviewed as it is written.
- **WA school year** Classes follow the Western Australian terms and pause for school holidays.
- **Placement first** The first lesson is free and ends with a written course suggestion.
- **Small groups** Fifteen to twenty learners at a similar level, or one-to-one lessons.
- **Steady pace** Two lessons a week, roughly eight in a month.
- **Time in India** A 5pm Joondalup lesson is 2:30pm in India on every day of the year.

**Perth time** Western Australia has kept the same clock since daylight saving last ended in March 2009, according to the IANA time zone database, so Perth stays two and a half hours ahead of India.

## Fees for Joondalup learners

The same fees apply to every learner in every suburb.

- First class: USD 0. The first lesson costs nothing and comes with a course plan.
- Group tuition: USD 100 a month. Group classes: about eight lessons a month with fifteen to twenty learners.
- Private tuition: USD 150 a month. Private classes: about eight lessons a month with one teacher.

Fees are charged in US dollars and begin only after the free lesson has settled the course and a weekly time. The pricing page explains holidays and missed lessons.

## Joondalup coding and AI questions

### How many people live in the City of Joondalup?

The 2021 Census counted 160,003 residents, and the ABS estimated 176,595 for 2025. The median age at the Census was 41.

### What is a self-join in SQL?

A query that joins a table to itself under two aliases, so each row can be compared with other rows of the same table, such as counters on the same road.

### Why did the plain join return 381 rows?

Each road with n counters matches n times n rows, including every counter with itself. Adding those up over 30 Joondalup roads gives 381.

### Is SQL useful for AI work?

Yes. Most training data starts in a database, and a wrong join quietly duplicates or drops rows before any model sees them.

### Do children learn SQL?

Younger learners start with sorting and matching in block code. Real SQL usually begins around age 13.

### How many traffic counters does Joondalup have?

The Main Roads Traffic Digest downloaded on 12 October 2026 lists 81 count sites in the City of Joondalup, on 30 roads.

### Do you have a centre in Joondalup?

No. All classes are live online, we have no Australian office, and our listed phone number is Indian.

### What do Joondalup classes cost?

The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.

### How are groups formed?

By level and pace, with fifteen to twenty learners, not by age or suburb. One-to-one lessons suit anyone no group time fits.

### Can adults join?

Yes. Adults learn in adult groups or one to one, often with data or databases from their own work.

## Keep exploring

Visit the [Perth page](/online-coding-and-python-classes-in-perth-western-australia) for the whole city, the [Western Australia guide](/coding-and-ai-classes-in-western-australia) for the state, and [coding for Perth children](/coding-classes-for-kids-perth) for younger learners.

## Contact

Book the free class on [https://learn.modernagecoders.com/best-coding-and-ai-classes-in-joondalup-perth](https://learn.modernagecoders.com/best-coding-and-ai-classes-in-joondalup-perth#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
