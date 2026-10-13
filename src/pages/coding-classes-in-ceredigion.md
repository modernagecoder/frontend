---
title: "Coding Classes in Ceredigion | Live Online, Ages 6 to 67"
description: "Live online coding, Python and maths classes across Ceredigion, from Aberystwyth, Cardigan and Lampeter to Aberaeron, New Quay, Tregaron and Borth."
canonical: https://learn.modernagecoders.com/coding-classes-in-ceredigion
source: src/pages/coding-classes-in-ceredigion.html
---
> Live online coding, Python and maths classes across Ceredigion, from Aberystwyth, Cardigan and Lampeter to Aberaeron, New Quay, Tregaron and Borth.

Skip to contentCourses for Ceredigion

## Where Ceredigion learners start

A Year 2 pupil in Cardigan who keeps a weather diary, a Year 7 in Lampeter ready to type code, a Year 11 in Aberystwyth preparing for WJEC exams, and an adult in Aberaeron who wants to analyse data. Each begins with a free lesson.

[![Scratch Coding for Kids course thumbnail](/images/scratch-kids.webp)Ages 6 to 11Scratch Coding for KidsScratch projects with weather games, chance and simple charts.See the syllabus](/courses/scratch-programming-complete-course)[![Maths Through Coding course thumbnail](/images/maths-through-coding.webp)Ages 10 to 15Maths Through CodingProbability, fractions and averages, explored by writing code.See the syllabus](/courses/maths-through-coding)[![Python for Teens course thumbnail](/images/python-teens.webp)Ages 12 to 18Python for TeensComplete Python for teenagers, from reading data files to statistics.See the syllabus](/courses/python-complete-masterclass-teens)[![Data Analysis Course course thumbnail](/images/data-analysis-college.webp)AdultsData Analysis CourseData analysis for adults who need to judge what a record really shows.See the syllabus](/courses/data-analysis-mastery-course-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Ceredigion in figures

## 71,475 people in Ceredigion

The county figure is the 2021 census count of usual residents from ONS, read through Nomis. Town sizes are ONS built-up areas from that census.

| Town | Usual residents |
| --- | --- |
| Aberystwyth | 14,640 |
| Cardigan | 3,765 |
| Lampeter | 2,505 |
| Llanbadarn Fawr | 1,765 |

Most people in Ceredigion live outside these four places, in smaller towns and villages. Newcastle Emlyn's built-up area is left out of the table because most of it lies across the county boundary; by our output-area count, 696 of its residents live on the Ceredigion side. Schools follow the Curriculum for Wales, with WJEC GCSE and A level courses for older pupils. Ceredigion County Council sets term dates, which we have not read, so families let us know theirs.

### Nearby pages and WJEC exams

See [Carmarthenshire](/coding-classes-in-carmarthenshire) and [St Davids](/best-coding-class-in-st-davids). For exam support: [WJEC GCSE Computer Science](/wjec-gcse-computer-science-help-wales) and [GCSE Maths and Numeracy in Wales](/gcse-maths-and-numeracy-wales-help).

The Ceredigion project

## Putting a number on never

Sixty-nine years of frost counts, and the rule of three.

The learner downloads the Aberporth file, reads each month's count of air frost days, and skips months marked missing or provisional. Then the program asks, for each calendar month, in how many of the 69 years there was at least one frost. Winter looks as expected: January had frost in 59 of the years, December in 52. The spring and autumn edges are more interesting. April had frost in 21 years, most recently in 2013. October managed it only once, in 1983. And from May to September the answer is zero, every time.

| Month | Years with any air frost | What we can say |
| --- | --- | --- |
| January | 59 of 69 | Frost is usual |
| April | 21 of 69 | Latest in 2013 |
| May to September | 0 of 69 each | At most about 4 per cent a year, with 95 per cent confidence |
| October | 1 of 69 | Once, in 1983 |
| December | 52 of 69 | Frost is usual |

Zero in 69 does not mean the chance is zero. The rule of three says that when something has not happened in n independent tries, you can be about 95 per cent confident its chance per try is below 3 divided by n. Here that is 3 over 69, about 4.3 per cent, so a frosty June at Aberporth is at most roughly a one-in-23-year event, and possibly far rarer. The learner checks the rule against the exact calculation, the Clopper-Pearson bound, which gives 4.2 per cent: the shortcut is remarkably good. With only 10 years of zeros the bound would be much looser, 30 per cent by the rule and 26 by the exact method.

October is the cautionary tale. Anyone reading the record at the end of 1982 would have seen 26 Octobers without frost and might have called it impossible; the next year proved otherwise. The rule of three would have said at most about 12 per cent a year, which was honest. The learner also notes the assumption that years are independent and conditions unchanged, which a warming climate may not respect.

### Ages 8 to 11

Roll a die 20 times and record whether a six appears; talk about what zero sixes would and would not prove.

### Ages 11 to 15

Read the Aberporth file in Python and count, for each month, the years with at least one frost.

### Ages 15 and up

Compute the rule of three and the exact bound for different numbers of years, and discuss the independence assumption.

### Real record, careful claims

The frost counts are the Met Office's. The bounds come from our own calculations and describe how rare a summer frost could be, not a forecast; they assume each year is an independent try under similar conditions.

Why Aberporth

## A weather station 133 metres up

What the Met Office file states.

| File detail | What it says |
| --- | --- |
| Position | Latitude 52.139, longitude -4.570 |
| Height | 133 metres above mean sea level |
| Measurements | Monthly maximum and minimum temperature, air frost days, rain and sunshine |
| Start of file | 1941, with complete air frost counts from 1957 in our reading |
| Flags | Estimated values marked *, missing months ---, recent months provisional |

Reasoning about events that have not happened yet is central to safety engineering, medicine trials, software testing and insurance. If a thousand test runs pass without a crash, the rule of three says the crash rate is probably below three in a thousand, not zero. A Ceredigion student who has put a number on never can apply the same thinking to any "it has never failed" claim.

We have no link with the Met Office or Ceredigion County Council. The weather record belongs to the Met Office; the counts, bounds and any errors in them are ours.

Learning path

## From dice to confidence bounds

Year bands are approximate; the free lesson settles the level.

Years 1 to 4

### Chance games

Block coding with dice, spinners and counting.

[Scratch Coding for Kids](/courses/scratch-programming-complete-course)[Coding for Kids](/courses/kids-coding-blocks-masterclass)Years 5 to 8

### Counting in data

Typed Python reading simple files and counting events.

[Maths Through Coding](/courses/maths-through-coding)[Python and AI for Kids](/courses/python-ai-kids-masterclass)Years 9 to 13

### Probability and statistics

Probability, binomial models and data work alongside WJEC GCSE and A level courses.

[Python for Teens](/courses/python-complete-masterclass-teens)[High School Mathematics](/courses/complete-high-school-mathematics-mastery)Adults

### Judging data

Data analysis and Python for adults who need defensible conclusions.

[Data Analysis Course](/courses/data-analysis-mastery-course-college)[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)AI and never

## An AI can say "that never happens" in seconds. Will it say how sure it is?

Absence of evidence is not proof of impossibility.

Ask a chatbot whether Aberporth ever gets a summer frost and it may answer no, based on the record. The honest answer is that none has been recorded in 69 years, and that the chance is at most about 4 per cent a year, which is a different statement.

A Ceredigion learner who knows the rule of three can turn a flat "never" into a bound with a confidence attached. That is the kind of precision that makes AI answers safe to act on.

Turning "never" into an honest number is a strong reason for Ceredigion teenagers to keep learning to code in 2026. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

How lessons run

## From Cardigan to Borth, lessons at home

Across a county of small towns and villages, video lessons remove the journey.

### Pupils write the code

Learners type every line; the teacher follows the shared screen and helps at the right moment.

### Placed the Welsh way

A Tregaron Year 4 or an Aberystwyth Year 12 is placed by school year and the Curriculum for Wales, with WJEC exam names. We teach in English.

### Free trial first

One complete lesson for free, then plain advice on what suits.

### Classmates at one level

Fifteen to twenty learners working at the same level, some local and many from abroad.

### Term time only

Two lessons a week in term; holidays off.

### UK time stays put

Your lesson keeps its UK hour through the clock changes; teachers on India time adjust.

Why classes reach beyond the county

In a county of 71,475 people, five learners at one level free at the same time are rare in any one town. Grouping by level gives a pupil in New Quay or Lampeter a class that fits.

Fees

## Fees in Ceredigion

Aberystwyth or Aberaeron, the fee is identical, the rate we charge everywhere except India.

First class**USD 0**

A full free lesson, then a clear recommendation.

Group tuition**USD 100**

About eight lessons a month with fifteen to twenty classmates.

Private tuition**USD 150**

About eight lessons a month, just you and a teacher.

Prices are in US dollars with no sterling alternative. We only bill after the trial, once a course and weekly slot are agreed; our pricing page explains holidays, absences and changing between group and private lessons.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Ceredigion%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)Reviews

## What families say on Google

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

## Book a free Ceredigion lesson

Say who the learner is, their year or age, and what grabs their interest. We can then open with a Scratch game, a short Python program, or the Aberporth frost record.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Ceredigion one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Ceredigion%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)

Submitted details are used for placement and follow-up.

FAQ

## Ceredigion questions

The county, the Aberporth project and how lessons work.

### How many people live in Ceredigion?

The 2021 census counted 71,475 usual residents in Ceredigion.

### What are the largest towns in Ceredigion?

ONS 2021 built-up areas: Aberystwyth 14,640, Cardigan 3,765, Lampeter 2,505 and Llanbadarn Fawr 1,765.

### What is the Aberporth project?

Learners read the Met Office Aberporth record in Python, find no air frost from May to September in 69 years, and use the rule of three and the exact Clopper-Pearson bound to say how rare such a frost could be.

### What is the rule of three?

If something has not happened in n independent tries, its chance per try is, with about 95 per cent confidence, below 3 divided by n.

### Has Aberporth ever had an October frost?

Once in the years we analysed, in October 1983, according to the Met Office monthly counts.

### Are lessons held in Aberystwyth?

All lessons are online, so learners join from home anywhere in Ceredigion.

### Can you help with WJEC exams?

Yes, including WJEC GCSE Computer Science and GCSE maths in Wales. We teach for understanding and never promise grades.

### What ages can learn?

Anyone aged 6 to 67, from block coding for children to statistics and Python for adults.

### What does it cost?

The first lesson is free; afterwards USD 100 a month in a group or USD 150 a month one-to-one.

### Do you stop for school holidays?

Yes. Share your school's holiday weeks and we pause.

Nearby pages

## More West Wales pages

[Carmarthenshire](/coding-classes-in-carmarthenshire) measures an elliptical arch, [St Davids](/best-coding-class-in-st-davids) has a city page, and [Anglesey](/coding-classes-in-anglesey) tests a castle for symmetry. Our [Wales](/coding-and-ai-classes-in-wales) page links every area as it is published, and the [UK hub](/coding-classes-in-united-kingdom) covers the rest.

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Ceredigion%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/coding-classes-in-ceredigion*
