---
title: "Coding Classes in Lucan, Dublin | Modern Age Coders"
description: "Coding, Python, AI and data lessons for Lucan learners aged 6 to 67, taught live online in small same-level groups or one to one. Your first lesson is free."
canonical: https://learn.modernagecoders.com/coding-classes-in-lucan-dublin
source: src/pages/coding-classes-in-lucan-dublin.html
---
> A Lucan learner joins each lesson on video with a live teacher, as part of a small group at one stage or on their own, normally on two days a week, and any age from six to sixty-seven is welcome. Nothing is taught on site anywhere in Lucan or elsewhere. The first lesson costs nothing, and after it a group place is USD 100 a month while one-to-one lessons are USD 150 a month.

[Home](/) / [Ireland](/coding-classes-in-ireland) / [South Dublin](/coding-classes-in-south-dublin) / Lucan

Lucan, County Dublin / Live online

# Coding classes in Lucan

**What are the best coding classes in Lucan?** A Lucan learner joins each lesson on video with a live teacher, as part of a small group at one stage or on their own, normally on two days a week, and any age from six to sixty-seven is welcome. Nothing is taught on site anywhere in Lucan or elsewhere. The first lesson costs nothing, and after it a group place is USD 100 a month while one-to-one lessons are USD 150 a month.

Met Éireann ran a rain gauge called Lucan G.S. from 1949 to 1973, and every day of its record comes with two numbers: the rainfall, and a code saying how that rainfall was obtained. Most days are marked satisfactory. Some are marked trace, which means rain fell but too little to measure. And some are marked estimated. In 1964, 212 of the year's 366 days were estimates, and those days account for 484.9 of the year's 670.9 millimetres. A learner who reads only the rainfall column is mostly reading someone's estimates without knowing it. This page shows how to read the flag first, and how to write code that reports what was measured separately from what was filled in.

Facts last verified 19 September 2026. Teaching is online; no Lucan branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Four ways into coding for Lucan

Pick the band that fits the learner; in the free opening lesson the teacher either confirms the course or suggests a better one.

- [Coding for Kids](/courses/kids-coding-blocks-masterclass) (Ages 6 to 10): Blocks with labels: sorting cards into piles by the colour on the back before counting them.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass) (Ages 10 to 13): Python dictionaries and counting, so each number is kept together with the label that explains it.
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data) (Ages 13 to 18): Real weather records in Python: quality codes, filtering, and every result computed two ways.
- [Data Analysis Course](/courses/data-analysis-mastery-course-college) (College and adult): For adults whose reports mix measured and estimated figures and who need to say which is which.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## One rain gauge, three kinds of zero and a year that is mostly estimates

Daily rainfall at Met Éireann's closed Lucan G.S. station for the sixteen complete years 1950 to 1965, 5,844 days, split by the indicator code published with each value.

**Lucan G.S. daily rainfall 1950 to 1965, by quality code**

| Code | Days | Dry (0 mm) | Median |
|---|---|---|---|
| Satisfactory | 4,255 | 38.8% | 0.5 mm |
| Estimated | 848 | 21.0% | 1.2 mm |
| Trace | 740 | 100% | 0 mm |
| Estimated trace | 1 | 100% | 0 mm |

### Estimates look different

Estimated days are recorded as completely dry on 21.0 percent of occasions, measured days on 38.8 percent, and the typical estimated day is more than twice as wet. Whatever the reason, the two groups cannot be treated as one.

### A flag that grows

The station records no estimated days in 1950 and 24 in 1960, then 101 in 1962, 184 in 1963 and 212 in 1964, 57.9 percent of that year. A trend in any yearly figure over those years is partly a trend in how the figures were obtained.

### Three kinds of zero

A zero can be a measured dry day, a trace, where rain fell but too little to register, or an estimate of no rain. The value column shows 0 in each case; only the code tells them apart.

### Read the flag before the number, and report both

Every day in this record has a value, so nothing looks missing. The trouble is that the values are not all the same kind of thing. Averages, dry-day counts and longest dry spells all come out differently once estimated days are separated from measured ones, and the direction of the change depends on how the estimates were made, which the file does not say. The honest report gives each figure twice, with and without the estimates, and states how many of each went in. That is a different problem from a gap in the record: here the numbers exist, and the question is how much weight each one can bear.

The constructive half of the project is a dry-spell counter. The international climate indices list, which Met Éireann uses for its own indicators, defines CDD as the largest number of consecutive days with less than 1 mm of rain. The learner writes that as a loop that walks through the days, counts a run while each day stays under 1 mm and resets on a wet day. Run over the whole record, the longest spell is 34 days, from 19 February to 24 March 1953. Twelve of those 34 days are traces, and the whole spell collected 0.8 mm, so the spell survives any reasonable treatment of the traces. The estimates are another matter: count an estimated day as unknown rather than as whatever value it carries, and the longest spell of 1959 shrinks from 21 days to 16, of 1962 from 19 to 12, and of 1963 from 17 to 13.

### Why stop at 1965

From 1966 whole months are absent from the file, 1,243 days by the time it ends in October 1973, so yearly figures after 1965 cannot be compared with earlier ones. The project uses the sixteen complete years only.

### Three gauges called Lucan

Met Éireann lists three closed Lucan stations: Lucan G.S. at 29 metres, Lucan (U.C.D.) at 52 metres with climate records from November 1972, and Lucan (Hermitage G.C.) at 46 metres from September 1999. The name alone does not say which one a number came from.

### Zeros that mean not yet

Fingal County Council's 2026 counter tables for St Catherine's Park show 0 for July to December, months that had not happened when the table was last filled. The pedestrian count to June is 26,367. A zero is only as honest as its label.

## Lucan in the words of the people who run its places

Each fact below is published by the body responsible, on its own site; the K78 eircodes come from those same pages.

**Named places in Lucan**

| Place | What its own site says |
|---|---|
| Adamstown station | Adamstown, Co Dublin, K78 EF64 |
| Lucan Community College | Esker Drive, Lucan, K78 TF67 |
| Lucan Library | Lucan Shopping Centre, Newcastle Road, K78 V295 |
| St Catherine's Park | 200 acres across Fingal, Kildare and South Dublin |

### A park in three counties

Fingal describes St Catherine's Park, also called Lucan Demesne, as 200 acres of woodland and grassland in Fingal, Kildare and South Dublin, with the Liffey dividing the South Dublin lands and a pedestrian bridge linking Leixlip and Lucan.

### The river

The same description notes that the Liffey Descent, a 25-mile canoe race, passes through this stretch, and that canoeing is popular near the weir because of a sluice gate.

### The library

South Dublin County Council runs Lucan Library as a full-time branch in the shopping centre on Newcastle Road, open until 8pm Monday to Thursday and until 4.30pm on Friday and Saturday.

**What this page does not claim** No population is printed for Lucan, because the page uses only facts that named bodies publish about the place itself. The rainfall figures describe one closed gauge in the past, not Lucan's weather today, and the reasons behind the estimated days are not given in the data, so none are suggested here.

## How the weeks run for Lucan learners

A standard week has two live lessons, and the teacher stays and teaches throughout each one.

### Children

Children start with block code and sorting games, grouping things by a label before counting them, the same habit that keeps estimates apart from measurements.

### Teenagers

Teenagers progress to Python, websites, AI projects and work with real records such as the Lucan rain gauge, flags and all.

### Adults

Adults can arrive knowing nothing about code; the opening lesson settles the course.

Rainfall values and indicator codes are Met Éireann's, as published for its closed Lucan stations; the counts, medians and dry spells are our own calculations, run on 19 September 2026. The station, the college, the library and the park are described from the websites of the bodies that run them.

## From sorting by label to reporting by flag

Use the ages as a starting guess; the teacher confirms the real level in lesson one.

- **Ages 6 to 10: Labels first** Block-coded sorting games where each item carries a label that decides its pile. [Coding for Kids](/courses/kids-coding-blocks-masterclass), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **Ages 11 to 13: Keeping pairs together** Python that stores each value with its code and counts by code. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [Maths Through Coding](/courses/maths-through-coding)
- **Ages 14 to 18: Flags and streaks** Quality codes, filtering and a dry-spell counter written from a published definition. [Data Science for Teens](/courses/data-science-course-for-teens-python-data), [Python for Teens](/courses/python-complete-masterclass-teens)
- **Ages 18 to 67: Measured or estimated** Reports that show which figures were measured and which were filled in, with results both ways. [Data Analysis Course](/courses/data-analysis-mastery-course-college), [Python Automation Course](/courses/python-ai-automation-masterclass-college)

## Ask an assistant how dry 1964 was in Lucan

It will usually read the rainfall column and nothing else.

Hand an AI assistant the Lucan G.S. file and ask how many dry days there were in 1964, and it will usually count the zeros and give an answer. The count is arithmetically right. It also quietly mixes measured days, trace days and estimates, in a year where more than half the days are estimates.

After building the flag-aware version, the learner asks the assistant what the indicator column means, how many 1964 days carry each code, and how the answer changes if estimates are set aside. An assistant that never mentions the codes has not looked at half the file.

Counting zeros takes one line. Knowing which zeros were measured is the skill. The longer argument is in [why learning to code is still worth the effort](/blog/is-coding-worth-learning-2026).

## How lessons run for Lucan

The arrangement, briefly.

- **Taught live** The teacher is there for the whole lesson, working through each learner's code as it develops.
- **Classes by level** Five to ten learners at a shared stage, some in Lucan, some elsewhere in Ireland and some further afield.
- **Regular days** Roughly eight lessons a month, on the same two days each week once agreed.
- **School calendar** Holidays, mid-terms and exam weeks are accounted for from the start of the course.
- **What is needed** A computer with a keyboard, a microphone and headphones or speakers, and broadband that handles video.
- **Individual lessons** One-to-one teaching for learners far ahead of a group, wanting a gentler pace, or free only at unusual hours.

**No local premises** We have no classroom in Lucan, in South Dublin or anywhere in the country. Each lesson takes place on video and is identical wherever the learner joins from.

## The fees for Lucan learners

Short and complete.

- First class: USD 0. The first lesson, with its level check, free.
- Group tuition: USD 100 a month. A month in a group of five to ten at one level, around eight live lessons.
- Private tuition: USD 150 a month. A month of one-to-one lessons on the same timetable.

Every family outside India pays a single monthly fee in US dollars. Taking the free lesson commits nobody, charging begins with the course itself, and the pricing page covers holidays, missed lessons and moving between group and one-to-one teaching.

## Lucan coding class questions

### Do you have a classroom in Lucan?

No. Every lesson is live on video and we have no premises in Ireland. A learner needs a computer, a working microphone and sound, and a dependable connection. The phone number on this page is in India.

### What is the data project on this page?

Reading Met Éireann's old Lucan G.S. rain gauge record by its quality codes. In 1964, 212 of 366 days were estimates and held 72.3 percent of the year's rain. Learners count, average and find dry spells with and without the estimates and report both.

### Is this about Lucan's weather today?

No. The gauge closed in 1973, and the page uses its complete years from 1950 to 1965 to teach how to handle quality codes. Nothing here describes Lucan's present climate.

### Why does the page not give Lucan's population?

District pages use only what named bodies publish about the place itself, such as the station, the college, the library and the park, and none of those publish a population.

### What times are lessons?

From the end of the school day into the evening on weekdays, and during the day at weekends. All times are in Irish time; our teachers work from India, ahead of Ireland by four and a half hours in summer and five and a half in winter, and only times that suit both are offered.

### Can adults learn with you?

Yes, from complete beginners upwards and up to sixty-seven. After the first lesson an adult chooses between a small same-level group and one-to-one lessons.

### Will my child's classmates be local?

Sometimes, but not by design. Groups are made by level, so classmates may be in Lucan, in another part of Ireland or abroad.

### What do coding classes in Lucan cost?

The first lesson is free. After that a group place costs USD 100 a month for about eight live lessons, two a week, with five to ten learners, and one-to-one lessons on the same timetable cost USD 150 a month. Everything is agreed before any payment.

### How large are the groups?

Five to ten learners, matched on level, pace and goals rather than on age or address. If nothing fits at a workable time, lessons are one to one.

## Around Lucan and the Liffey valley

The [South Dublin](/coding-classes-in-south-dublin) page covers the council area Lucan belongs to, and across the river and the county line are [Leixlip](/best-coding-class-in-leixlip) and [Celbridge](/best-coding-class-in-celbridge). Dublin 15 has its own pages for [Blanchardstown](/coding-classes-in-blanchardstown-dublin) and [Castleknock](/coding-classes-in-castleknock-dublin), and the [Ireland hub](/coding-classes-in-ireland) connects them all.

## Contact

Book the free class on [https://learn.modernagecoders.com/coding-classes-in-lucan-dublin](https://learn.modernagecoders.com/coding-classes-in-lucan-dublin#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email contact@modernagecoders.com. Rated 4.9 across 547 Google reviews.
