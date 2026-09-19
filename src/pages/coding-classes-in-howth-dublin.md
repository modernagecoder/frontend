---
title: "Coding Classes in Howth, Dublin | Modern Age Coders"
description: "Live online coding, Python, AI and maths lessons for Howth learners aged 6 to 67, in small same-level groups or one to one. The first lesson is free of any charge."
canonical: https://learn.modernagecoders.com/coding-classes-in-howth-dublin
source: src/pages/coding-classes-in-howth-dublin.html
---
> Howth learners are taught by a teacher in live video lessons, in a small group at the same level or one to one, usually twice a week, and anybody from six to sixty-seven can sign up. Nobody needs to travel. The first lesson is free; each month after that is USD 100 in a group or USD 150 for one-to-one teaching.

[Home](/) / [Ireland](/coding-classes-in-ireland) / [Fingal](/coding-classes-in-fingal) / Howth

Howth, County Dublin / Live online

# Coding classes in Howth

**What are the best coding classes in Howth?** Howth learners are taught by a teacher in live video lessons, in a small group at the same level or one to one, usually twice a week, and anybody from six to sixty-seven can sign up. Nobody needs to travel. The first lesson is free; each month after that is USD 100 in a group or USD 150 for one-to-one teaching.

Fingal County Council counts walkers on the paths over Howth Head and publishes monthly totals for four counters: Summit, Balscadden, Baily and Red Rock. Read them closely and some numbers turn up twice. On the Baily path the count for May 2020 was 11,600, and so was June, and every month after it to November. In a real count of thousands of walkers, two months landing on exactly the same figure is rare, and seven in a row is not chance. This page teaches a learner to find repeats like these, measure how unlikely they are, and decide what they mean for any total built on them.

Facts last verified 20 September 2026. Teaching is online; no Howth branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Four first courses for Howth

Choose by age to start; in the free first lesson the teacher checks the level and suggests a different course when one fits better.

- [Coding for Kids](/courses/kids-coding-blocks-masterclass) (Ages 6 to 10): Blocks and a spot-the-difference game: which numbers in a list look copied rather than counted.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass) (Ages 10 to 13): Python that reads a small table, turns text like 15,049 into numbers and flags the odd ones.
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data) (Ages 13 to 18): Real council files in Python: cleaning, repeat detection, and totals reported with and without doubtful months.
- [Data and AI Analytics for Non-Programmers (Excel, Sheets, Power BI)](/courses/data-and-ai-analytics-for-non-programmers-course) (College and adult): For adults who inherit spreadsheets from others and need to know which figures were actually measured.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Counted or copied? Repeated figures in the Howth walk files

The data is Fingal County Council's monthly footfall for its four counters on the Howth walks, from 2019 to 2023, published as open data. The table lists every repeat longer or stranger than a single pair.

**Repeated counts in the Howth walk files**

| Where | When | Count |
|---|---|---|
| Baily | May to November 2020, seven months | 11,600 each |
| Baily | August to October 2019, three months | 19,796 each |
| Summit and Balscadden, the same month | July 2023 | 39,036 on both |
| Summit and Balscadden, the same month | November 2023 | 25,316 on both |
| Balscadden, five years apart | January 2019 and January 2024 | 24,810 both times |

### How rare a repeat should be

Across the four counters there are 207 pairs of neighbouring months with a real count on both sides. In 194 of them the count changed, by a median of 3,109 walkers, and only 7 of those changes were smaller than 100. Even if an exact tie were as likely as any change under 100, about 0.04 of the 207 pairs would match. Thirteen do.

### What a repeat does to a total

Baily's published total for 2020, 128,271, contains the seven months at 11,600, which make up 63.3 percent of it. The yearly totals in these files equal the sums of their months, so every repeated figure passes straight into the year.

### Two trails, one number

In 2023 the Summit and Balscadden columns carry identical figures for July, for November, and for December up to the 15th, at 6,598. Two counters on different paths agreeing to the last walker three times is not something counting produces.

### Treat an exact repeat as a question, not a measurement

In counted data, an exact repeat is a fingerprint. It can come from a figure copied in to fill a gap, a formula dragged down a spreadsheet, or a counter stuck on one reading, and the file alone cannot say which. What it can say is that the repeated months are not independent counts. A careful program flags them, reports totals with and without them, and says plainly which months were measured.

The learner's program reads the four CSV files from Fingal's open data site, turns text such as "15,049" into numbers, and treats N/A and N/a as missing rather than crashing on them. It compares each month with the one before, collects exact repeats, searches the whole table for the same figure turning up anywhere else, and measures how small ordinary month-to-month changes get, which is what makes the thirteen repeats stand out. It then separates zeros that mean nobody walked from zeros that mean nobody counted. Summit's June and July 2021 are stored as 0 with the words "No figures due to gorse fires" written into the column for yearly totals, and April to June 2023 as 0 beside "no data". Added up without care, both look like months in which nobody climbed the hill.

### Words in a number column

Summit's April and June 2022 hold the text N/A and N/a, and the notes about gorse fires sit in the column meant for yearly totals. A program that expects a number in every cell either stops or quietly skips them.

### What the council says

Fingal's own note on these datasets says the figures are estimates of total trips rather than individual visitors, and that distance from the counter beam, overgrown vegetation and occasional malfunctions can affect them. The repeats are a reason to read that note twice.

### The newest files

In the 2024 to 2025 files for Summit, Balscadden and Baily only one month has a figure: Balscadden, January 2024, at 24,810, the same as January 2019. The Red Rock file for those years was not yet available to download on 20 September 2026.

## Howth by its lighthouse, its station and its counters

Every line is taken from the organisation responsible.

**Named places on Howth Head**

| Place | What its own source says |
|---|---|
| Howth station | Howth DART Station, Dublin 13, D13 N8K7 |
| Baily Lighthouse | 41 metres above high water, range 18 nautical miles |
| Summit counter | 53.370956 N, 6.054537 W |
| Red Rock counter | 53.36833 N, 6.091938 W |

### The lighthouse

Irish Lights says the Baily light was first lit on 17 March 1814, 41 metres above high water, and now shows one white flash every 15 seconds. Its keepers were withdrawn on 24 March 1997, and Irish Lights records Baily as the last Irish lighthouse to be automated.

### The station

Irish Rail gives step-free access by gate and ramp from the road, sheltered bike parking with 7 spaces and 5 lockers, a free car park with 10 spaces, and staffing from 05:45 to 00:21 on weekdays.

### The counters

Fingal publishes a position for each counter. Balscadden is the furthest north of the four and Red Rock the furthest west, with Summit and Baily on the southern side of the head.

**What this page does not claim** No population is given for Howth, since the page prints only what named bodies publish about the place. The counts are trips past a sensor, not people, and the page does not say how any repeated figure came about; it only shows that the file cannot be treating them as fresh counts.

## What a Howth learner does across a week

The usual week has two lessons, each led live by the teacher from the first minute to the last.

### Children

Children start with block code and puzzle games, spotting patterns that look too neat to be true.

### Teenagers

Teenagers take on Python, websites, AI projects and real council spreadsheets like the walk counts, with the checking done in code.

### Adults

Adults may start with no background at all; the first lesson settles the course.

Footfall figures are Fingal County Council's open data; the repeat counts, change sizes, tie rates and shares were worked out by us on 20 September 2026. Station and lighthouse details come from Irish Rail and Irish Lights.

## From spot-the-difference to data forensics

Bands give a starting point only; the first lesson fixes the level.

- **Ages 6 to 10: Too neat to be true** Block-coded games that hunt for copied numbers in a list. [Coding for Kids](/courses/kids-coding-blocks-masterclass), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **Ages 11 to 13: Cleaning a table** Python that turns text into numbers and marks cells it cannot read. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [Maths Through Coding](/courses/maths-through-coding)
- **Ages 14 to 18: Repeat detection** Neighbouring-month comparisons, tie rates and totals with and without doubtful months. [Data Science for Teens](/courses/data-science-course-for-teens-python-data), [Python for Teens](/courses/python-complete-masterclass-teens)
- **Ages 18 to 67: Inherited spreadsheets** Deciding which figures in someone else's file were measured and which were filled in. [Data and AI Analytics for Non-Programmers (Excel, Sheets, Power BI)](/courses/data-and-ai-analytics-for-non-programmers-course), [Data Analysis Course](/courses/data-analysis-mastery-course-college)

## Ask an assistant how busy the Howth walks were

It will add up the months. It may not look at them first.

Give an AI assistant the Baily file and ask how many walkers used the path in 2020, and it will likely report the published total of 128,271, or add up the months and reach the same figure. The arithmetic is fine. Nearly two thirds of that total rests on one number repeated seven times, and an answer that does not say so hands on a guess as if it were a count.

The learner who has done this project first asks what the table actually contains: which months repeat, which zeros stand for missing data, which cells hold words. After that, an assistant can help write the checks and the two totals, one with every month and one with only the months that look counted.

Adding up a column is easy. Knowing which cells deserve to be added is the skill. The longer argument is in [why learning to code is worth starting young](/blog/is-coding-worth-learning-2026).

## How lessons run for Howth

At a glance.

- **Live teaching** The teacher leads every lesson in real time and checks each learner's code while it is being written.
- **Groups by level** Five to ten learners at one level, joining from Howth, other parts of Ireland or abroad.
- **Two fixed days** The same two days each week, about eight lessons over a month.
- **Term breaks** Holidays, mid-term weeks and exam time are built into the plan.
- **At the desk** A laptop or desktop, a microphone, headphones or speakers, and broadband steady enough for a video call.
- **One-to-one option** Private lessons for a learner who is ahead, needs more time, or can only do hours no group runs.

**Wholly online** We have no premises in Howth, in Fingal or anywhere in Ireland. Lessons run live on video and are the same from any home.

## Fees for Howth

Without fuss.

- First class: USD 0. A free opening lesson with a check of the learner's level.
- Group tuition: USD 100 a month. One month in a same-level group of five to ten, about eight live lessons.
- Private tuition: USD 150 a month. One month of private lessons on the same schedule.

The US dollar fee is the same for every family outside India and is paid monthly. Nothing is owed for the free lesson, the monthly charge starts with the course, and the pricing page explains how holidays, missed lessons and a switch between group and private lessons work.

## Howth coding class questions

### Does Modern Age Coders have a centre in Howth?

No. Lessons are live on video, and we have no premises in Ireland. A learner needs a computer, a microphone and sound, and a steady connection. The phone number shown here is an Indian number.

### What is the walk counter project?

The learner reads Fingal's monthly footfall files for the Summit, Balscadden, Baily and Red Rock counters and hunts for exact repeats: 13 among 207 pairs of neighbouring months, where chance would give about 0.04, including seven months in a row at 11,600 on the Baily path in 2020.

### Is the page saying the council made the figures up?

No. It shows that some figures repeat in a way real counts would not, and it quotes the council's own note that the figures are estimates affected by conditions and malfunctions. How the repeats arose is not something the file can tell us.

### Why is there no population figure for Howth?

District pages here print only what named organisations publish about the place itself, in this case Fingal County Council, Irish Rail and Irish Lights, and none of them gives a head count for Howth.

### When do lessons happen?

On weekdays after school and into the evening, and in the daytime at weekends. Lesson times are set in Irish time. The teachers are based in India, which runs four and a half hours ahead of Howth in summer and five and a half in winter, so we only offer times that suit both.

### Are there classes for adults?

Yes, for anyone up to sixty-seven, beginners too. After the free lesson an adult chooses between a same-level group and lessons on their own.

### Will my child be in a group with other children from Howth?

Not necessarily; we group by level, so the others may be anywhere in Ireland or outside it.

### What do coding classes in Howth cost?

The first lesson is free. After that a group place costs USD 100 a month for about eight live lessons, two a week, with five to ten learners, and one-to-one lessons on the same schedule cost USD 150 a month. Terms are agreed before any payment.

### How big are the groups?

Five to ten learners, matched on level, pace and goals rather than age or address. When no group fits a workable time, lessons are one to one.

## Around Dublin Bay from Howth

Across the bay, [Clontarf](/coding-classes-in-clontarf-dublin) has a project on the Dublin Port tide gauge. The [Fingal](/coding-classes-in-fingal) page covers the county, and the [Ireland hub](/coding-classes-in-ireland) lists every other county, town and district.

## Contact

Book the free class on [https://learn.modernagecoders.com/coding-classes-in-howth-dublin](https://learn.modernagecoders.com/coding-classes-in-howth-dublin#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email contact@modernagecoders.com. Rated 4.9 across 547 Google reviews.
