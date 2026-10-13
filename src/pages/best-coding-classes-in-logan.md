---
title: "Best Coding Classes in Logan | Live Online, Teens and Adults"
description: "Live online coding and Python classes for Logan teenagers and adults, with a project that measures how rugged the city's hills are and why the answer shifts."
canonical: https://learn.modernagecoders.com/best-coding-classes-in-logan
source: src/pages/best-coding-classes-in-logan.html
---
> Live online coding and Python classes for Logan teenagers and adults, with a project that measures how rugged the city's hills are and why the answer shifts.

Skip to contentCourse picks for Logan

## Good first courses for Logan learners

Each heads towards the ruggedness project below. The free lesson decides the fit, and we ask for no card details.

[![Python for Teens course thumbnail](/images/python-teens.webp)Ages 13 to 17Python for TeensPython basics through to grids of numbers, nested loops and simple maps.See the syllabus](/courses/python-complete-masterclass-teens)[![Data Science for Teens course thumbnail](/images/data-science-teens.webp)Ages 14 to 18Data Science for TeensNumPy, summaries and the habit of asking what a statistic depends on.See the syllabus](/courses/data-science-course-for-teens-python-data)[![Maths Through Coding course thumbnail](/images/maths-through-coding.webp)Ages 11 to 16Maths Through CodingSquares, square roots and averages, worked out in code on real numbers.See the syllabus](/courses/maths-through-coding)[![Data Science Course course thumbnail](/images/data-science-college.webp)University and adultData Science CourseSpatial data, resampling, scale effects and reporting methods with results.See the syllabus](/courses/data-science-complete-masterclass-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Logan in the Census

## A city of 345,098 between Brisbane and the Gold Coast

Figures for the City of Logan council area from the 2021 Census, with Queensland and national comparisons.

At the Census Logan had 345,098 residents and a median age of 34. They lived as 90,481 families in 125,926 private dwellings, averaging 2.9 people per household.

| Group | Logan | Queensland | Australia |
| --- | --- | --- | --- |
| Separate houses (95,721 dwellings) | 85.0% | 74.8% | 72.3% |
| Technicians and trades workers (23,874 people) | 15.7% | 13.7% | 12.9% |
| Professionals (21,402 people) | 14.1% | 21.4% | 24.0% |
| Bachelor degree or above (36,742 people) | 13.7% | 21.9% | 26.3% |

### Apartments are rare

Flats and apartments made up 3,075 dwellings, 2.7% of the total, against 12.5% in Queensland.

### Lots of teenagers

There were 23,169 residents aged 15 to 19, 6.7% of the population, above the state share of 6.1%.

### Young adults

A further 22,856 residents were aged 20 to 24.

The ABS estimate for Logan at 30 June 2025 is 403,515. The bureau adds small random changes to Census cells for privacy, so rows and totals may not reconcile; we quote figures exactly as published and never total rows ourselves.

Signature project

## Is Logan rugged or level, and who decides?

A 5.9 by 5.0 kilometre block of SRTM elevation inside the City of Logan, centred on Slacks Creek and rising into Daisy Hill, run through the terrain ruggedness index in Python.

| Grid spacing | Cells measured | Average ruggedness | Called level on the published scale |
| --- | --- | --- | --- |
| About 30 m | 29,651 | 4.99 m | All of them |
| About 90 m | 3,185 | 12.37 m | All of them |
| About 270 m | 315 | 25.29 m | 313 of 315 |
| About 800 m | 24 | 38.56 m | 22 of 24 |

### 1. Compare with neighbours

For each cell, take the height difference to each of its eight neighbours, square them, add them up and take the square root. A flat cell scores zero; a cell on a steep slope scores high.

### 2. Run it on Logan

Heights in the block range from about sea level to 127 metres, the highest point falling in Daisy Hill. On 30 metre cells the average score is 4.99 m, with the most rugged cell, also in Daisy Hill, scoring 29.73 m.

### 3. Change the ruler

Keep every third cell and neighbours are three times further apart, so height differences grow. Each step up in cell size raises the score, from 4.99 m to 38.56 m.

### A scale built for a different grid

The 1999 paper that introduced the index sorted scores into seven classes, from level (0 to 80 metres) to extremely rugged (959 to 4,367 metres). Those breaks were set for grid cells of one square kilometre in mountain country. Apply them to 30 metre cells and every cell in Logan is level, including the side of Daisy Hill. The formula is fine; the labels only make sense at the cell size they were built for.

All four corners of the block and the midpoints of its edges lie inside the City of Logan on the ABS boundary layer. Eight cells record heights at or below zero, a reminder that radar measurements carry noise. A gentler variant of the index, the mean absolute difference, ranks cells almost identically (correlation 0.992) but gives numbers about 3.4 times smaller. All scores are our own calculations.

Measuring with care

## What to report alongside any terrain number

Learned on Logan's hills, then applied to image analysis, flood mapping, sensor grids and any measurement on a raster.

| Choice | Options tested | Effect |
| --- | --- | --- |
| Grid spacing | 30, 90, 270 and 800 m | Average rises from 4.99 m to 38.56 m |
| Formula | Root of summed squares against mean absolute difference | Same ranking, about 3.4 times different scale |
| Class labels | Published breaks for 1 km cells | Everything at 30 m is called level |
| Data quality | Check minimum heights | 8 cells at or below zero metres |

A terrain score without its cell size is half a fact. The same is true of any measurement on a grid, from pixel brightness to rainfall totals: the resolution, the formula and the reference scale belong in the same sentence as the result.

### Secondary students

Compute the index for a 3 by 3 patch by hand, then for the whole Logan grid with loops.

### University students

Vectorise with NumPy slicing, resample properly rather than by skipping, and study the scale effect.

### Adults at work

Whenever a dashboard reports a grid-based metric, ask what resolution it was computed at.

Modern Age Coders has no association with NASA, OpenTopoData, the ABS or Logan City Council. The elevation data and statistics are theirs; the ruggedness analysis is our own.

Around Logan

## Queensland clocks and the 2027 school year

What shapes when a Logan learner can join a live lesson.

### Queensland time

Logan stays on UTC plus 10 all year, with no daylight saving.

### India time

Logan sits four and a half hours ahead of India time throughout the year.

### Across the border

From October to April the New South Wales side of the border runs an hour ahead of Logan.

First half of 2027 in Queensland schools

The education department lists Term 1 of 2027 as nine weeks, Wednesday 27 January to Thursday 25 March, and Term 2 as eleven weeks, Monday 12 April to Friday 25 June.

Learning ladder

## From a first grid to spatial analysis

Ages here are rough markers; where a learner actually begins is settled in the free lesson.

Ages 11 to 14

### Numbers in a grid

Lists of lists, neighbours and simple maps drawn with code.

[Maths Through Coding](/courses/maths-through-coding)[Python for Teens](/courses/python-complete-masterclass-teens)Ages 15 to 18

### Formulas on real data

Applying a published index to an elevation grid and checking it by hand.

[Python for Teens](/courses/python-complete-masterclass-teens)[Data Science for Teens](/courses/data-science-course-for-teens-python-data)University

### Scale and resampling

Raster analysis, resolution effects and reproducible methods.

[Data Science Course](/courses/data-science-complete-masterclass-college)[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)Adults

### Grids at work

Automating spatial summaries and documenting how they were made.

[Data Analysis Course](/courses/data-analysis-mastery-course-college)[Python Automation Course](/courses/python-ai-automation-masterclass-college)Coding and AI

## Would an AI assistant mention the cell size?

Not unless asked.

Ask a chatbot to classify Logan's terrain with the ruggedness index and it will likely compute the scores, apply the published classes and announce that the area is level. Every step looks correct, and the conclusion rests on a scale built for a grid 30 times coarser.

Our Logan learners have AI write the index quickly, then test it on a hand-worked 3 by 3 patch and rerun it at several cell sizes. They report the resolution with every result, which is the part the assistant leaves out.

A Logan learner who has watched the same hills change from level to rugged as the grid changed will ask what any AI-produced number depends on, long after 2026. The longer argument is in [the skills that make a good programmer](/blog/is-coding-worth-learning-2026).

Delivery

## Logan homes, live online lessons

A class online reaches every corner of a large city equally.

### Queensland time throughout

Lesson times are set in Logan time and never move for daylight saving.

### Queensland curriculum years

Teachers plan around Queensland year levels, QCE seniors included, and teach in English.

### Code in the first hour

The free lesson is real programming with a teacher. You then receive a recommended course and time, and payment details are never requested.

### Fifteen to twenty per class

Learners grouped by level, drawn from several places so each stage has a workable hour.

### Two lessons weekly

Roughly eight a month, with holiday and exam breaks planned with the teacher.

### Families with several learners

Siblings at different levels join separate groups at times that suit the household.

Logan time on every booking

Every time we send is in Queensland time, so nothing needs converting.

Fees

## Coding class fees in Logan

All of it in three lines.

First class**USD 0**

A free lesson, then a recommended level, course and time.

Group tuition**USD 100**

Near enough eight group lessons a month, fifteen to twenty learners per class.

Private tuition**USD 150**

Near enough eight one-to-one lessons a month with one teacher.

Logan pays the national US dollar rate, the same as every other Australian city. There is no charge until the trial agrees a course and time; the pricing page explains holidays, missed lessons and changes of format.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20coding%20class%20for%20a%20learner%20in%20Logan.)Reviews

## Reviews on Google from learners and parents

Rated 4.9 across 547 Google reviews. These are real reviews, reproduced as written.

★★★★★

"The one step solution for my son. Modern Age Coders make learning coding so simple that kids love it. The teachers explain complex concepts clearly with practical exercises and interactive content."

Ria Mukherjee

Parent

★★★★★

"Modern Age Coders has been a game-changer for me. I struggled to grasp IT concepts and coding before joining, but their classes transformed everything. I can now confidently write complex programs with ease."

Samriddha Mondal

Student

★★★★★

"One of the most wonderful education centres out there. Education is not limited to school syllabus but focuses on skill development."

Vansh Agarwal

Student

★★★★★

"My child Dhairya is really enjoying the Modern Age Coders classes. This is his first online class and he eagerly looks forward to it. I can already see his improvement, and the teachers are very cooperative."

Sonam Oswal

Parent of Dhairya

★★★★★

"Modern Age Coders have wonderful teachers who teach in a clear, easy and practical way. The teacher boosts students' confidence and inspires them to learn without hesitation."

Sonu Goyal

Parent

★★★★★

"I highly recommend this computer coding class! The teachers are incredibly knowledgeable and passionate about coding."

Ritu Kedia

Parent

Free placement class

## Tell us a little and we will plan the first lesson

The trial task is set beforehand: a grid of numbers for a Year 7 beginner, the 3 by 3 ruggedness calculation for a Year 11 student, or the full scale comparison for an adult.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Logan one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20coding%20class%20for%20a%20learner%20in%20Logan.)

Submitted details are used for placement and follow-up.

FAQ

## Logan coding class questions

What Logan families and adult learners want to know first.

### How many people live in Logan?

The 2021 Census counted 345,098 people in the City of Logan council area. The ABS estimate at 30 June 2025 is 403,515.

### What is the terrain ruggedness index?

The terrain ruggedness index is a measure introduced in 1999 that compares each cell of an elevation grid with its eight neighbours: the height differences are squared, summed and square-rooted. Larger values mean more uneven ground, but the values depend on the grid cell size.

### What is the Logan ruggedness project?

Learners download public SRTM elevation data for a block of Logan around Slacks Creek and Daisy Hill, compute the ruggedness index in Python, repeat it at four grid sizes, and see how both the scores and the published labels change.

### Why does every cell come out as level?

The published labels were designed for one square kilometre grid cells. With 30 metre cells, neighbours are much closer, height differences are smaller and every Logan score falls in the lowest class.

### Can senior students join?

Yes. Seniors slot the weekly sessions in beside QCE study, and anything assessed at school is done by the student alone.

### What times work in Logan?

Weekday afternoons, evenings or weekends, chosen together during the trial and always stated in Logan time, which is four and a half hours ahead of India time.

### Do you have classes for younger kids?

Yes, from age 6 with Scratch and other visual tools. The ruggedness project suits teenagers and adults.

### Is there a Modern Age Coders office in Logan?

No, and we do not claim one. Teaching is live and online only, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a steady connection, and the contact number on this page is an Indian number.

### What do Logan coding classes cost?

The first lesson is free. After that a group place costs USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before any payment.

### How large are the groups?

Between five and ten learners, matched on level, pace and goals rather than on age or postcode. When no group fits a workable time, one-to-one lessons are offered instead.

More in Queensland

## Pages for Logan's neighbours

To the north is [the Brisbane coding page](/best-coding-classes-in-brisbane), and to the south [coding classes on the Gold Coast](/best-coding-classes-in-gold-coast). For primary-aged children see [coding classes for kids on the Gold Coast](/coding-classes-for-kids-gold-coast), and for the whole state read [coding and AI classes in Queensland](/coding-and-ai-classes-in-queensland).

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20coding%20class%20for%20a%20learner%20in%20Logan.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/best-coding-classes-in-logan*
