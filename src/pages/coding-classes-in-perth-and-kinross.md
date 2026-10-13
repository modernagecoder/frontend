---
title: "Coding Classes in Perth and Kinross | Live Online, Ages 6 to 67"
description: "Live online coding, Python and maths classes across Perth and Kinross, from Blairgowrie, Crieff and Auchterarder to Kinross, Pitlochry, Alyth and Dunkeld."
canonical: https://learn.modernagecoders.com/coding-classes-in-perth-and-kinross
source: src/pages/coding-classes-in-perth-and-kinross.html
---
> Live online coding, Python and maths classes across Perth and Kinross, from Blairgowrie, Crieff and Auchterarder to Kinross, Pitlochry, Alyth and Dunkeld.

Skip to contentCourses for Perth and Kinross

## Four ways into coding in Perth and Kinross

A P2 in Crieff who counts everything, a P6 in Blairgowrie ready for real code, an S4 in Auchterarder heading for National 5, and an adult in Kinross who wants to automate reports. Every one of them opens with a free trial.

[![Coding for Kids course thumbnail](/images/kids-coding.webp)Ages 6 to 12Coding for KidsBlock coding with calendars, clocks and counting games.See the syllabus](/courses/kids-coding-blocks-masterclass)[![Maths Through Coding course thumbnail](/images/maths-through-coding.webp)Ages 10 to 15Maths Through CodingRemainders, patterns and number puzzles solved by writing code.See the syllabus](/courses/maths-through-coding)[![Problem Solving for Teens course thumbnail](/images/problem-solving-teens.webp)Ages 13 to 18Problem Solving for TeensAlgorithms for teenagers, tested systematically rather than by hope.See the syllabus](/courses/problem-solving-dsa-masterclass-teens)[![Python Masterclass course thumbnail](/images/python-college.webp)AdultsPython MasterclassPython for adults from the first line, including working with dates and times.See the syllabus](/courses/python-programming-masterclass-zero-to-advanced-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)The council area in figures

## About 150,800 people in Perth and Kinross

Council totals are rounded first results from the 2022 census, published by National Records of Scotland. Town figures are NRS estimates for mid-2020, a separate series.

| Locality | Residents | Locality | Residents |
| --- | --- | --- | --- |
| Perth | 47,350 | Bridge of Earn | 2,920 |
| Blairgowrie | 9,240 | Pitlochry | 2,880 |
| Crieff | 7,280 | Alyth | 2,370 |
| Auchterarder | 5,840 | Coupar Angus | 2,220 |
| Kinross | 5,610 |   |   |
| Scone | 5,030 |   |   |

At 28.5 residents per square kilometre, Perth and Kinross is well below the Scottish 69.8. Our addition of the census age bands gives 14.7 per cent of residents under 15, a little below Scotland's 15.3, and 24.7 per cent aged 65 or older, against 20.1. Part of Kelty also falls inside the council area. We have not looked up Perth and Kinross Council's term calendar, so each household simply tells us when school is out.

### Perth city and exams

The city has its own page, [Perth](/best-coding-class-in-perth-scotland), with a different project. For qualifications: [National 5 Maths](/national-5-maths-tuition-online) and [Higher Computing Science](/higher-computing-science-help).

The Perth and Kinross project

## Thursday, 7 October 1847

One formula, two famous bugs, and a test that covers 109,938 days.

Zeller's congruence works on the day, the month and the year, split into its century and its last two digits. It adds a handful of whole-number quantities and takes the remainder after dividing by 7, which gives a number from 0 to 6: 0 for Saturday, 1 for Sunday and so on. There is one strange rule. January and February are treated as months 13 and 14 of the previous year, because the formula counts from March so that the awkward February leap day falls at the end. The learner codes it in a few lines of Python and asks it about 7 October 1847. The answer is Thursday, and Python's own date library agrees.

| Version | Days checked | Days wrong | Which days |
| --- | --- | --- | --- |
| Correct formula | 109,938 | 0 | None |
| January and February not shifted | 109,938 | 17,832 | Every January and February day |
| Minus-2J form with a C-style remainder | 109,938 | 2,285 | Scattered, from 2 March 1800 |
| Same form with Python's remainder | 109,938 | 0 | None |

The first bug is the classic. Forget the January and February shift and the formula is wrong on every one of those days and right on all the others, so testing a handful of dates in summer never finds it. The second is subtler. A popular version of the formula subtracts twice the century instead of adding five times it, which is equivalent in mathematics but can make the total negative. Python's remainder of a negative number is still between 0 and 6; the remainder in C, Java and JavaScript keeps the minus sign. Port the formula from one language to another and it returns -6 for 2 March 1800 and is wrong on 2,285 days in three centuries, yet perfect on every date anyone thinks to try by hand.

Exhaustive testing catches both, and the learner can then ask playful questions with confidence. Over a full 400-year cycle of the Gregorian calendar, the 13th of the month falls on a Friday 688 times out of 4,800, slightly more often than on any other day. The cycle repeats exactly every 400 years, so that is a fact, not a sample.

### Ages 8 to 11

Build a Scratch program that counts forward from a known Sunday to find the weekday of a birthday, then check with a calendar.

### Ages 11 to 15

Code Zeller's formula in Python, test it on ten dates, and then on every day of a year.

### Ages 15 and up

Reproduce both bugs, test every day for 300 years against the date library, and explain why the remainder of a negative differs between languages.

### A real floodmark, our arithmetic

The date on the floodmark comes from the Historic Environment Scotland listing. The weekday, the tests and every count in the table come from our own program, checked against Python's date library.

Why Stanley Mills

## Cotton mills at Stanley

What the listings for Mid Mill and Bell Mill record.

| Listing detail | What it records |
| --- | --- |
| Mid Mill dates | Circa 1823 to 1830, extended in the 1830s, upper floors rebuilt after a fire in 1848 |
| Floodmark | Dated 7 October 1847, on the second-floor string course |
| Machinery | Probably the oldest cotton spinning machinery in Scotland |
| Structure | Perhaps the second or third surviving iron-framed cotton mill in Scotland |
| Bell Mill | To designs of Sir Richard Arkwright, 1786 to 1787 |
| Water | Tail races from the wheelhouse ran beneath the mills |

Date arithmetic sits inside nearly every system people use: booking sites, school timetables, bank statements, delivery estimates and phone calendars. Date bugs are notorious precisely because they hide in rare cases, the start of the year, a leap day, a negative number. A pupil from Perth and Kinross who has tested every day for three centuries knows that "it worked when I tried it" is not a test.

Historic Environment Scotland and Perth and Kinross Council have no link with us. The listing facts are theirs; the formula tests and any mistakes are ours.

Learning path

## From counting days to testing algorithms

Stages are only a guide; the free lesson sets the real starting point.

P1 to P4

### Counting and patterns

Block coding with calendars, clocks and repeating patterns.

[Coding for Kids](/courses/kids-coding-blocks-masterclass)[Scratch Coding for Kids](/courses/scratch-programming-complete-course)P5 to S2

### Remainders and rules

Typed Python with division, remainders and simple formulas.

[Maths Through Coding](/courses/maths-through-coding)[Python and AI for Kids](/courses/python-ai-kids-masterclass)S3 to S6

### Algorithms and testing

Algorithms and thorough testing beside National 5, Higher and Advanced Higher Computing Science.

[Problem Solving for Teens](/courses/problem-solving-dsa-masterclass-teens)[Python for Teens](/courses/python-complete-masterclass-teens)Adults

### Dates and data

Python for adults, including dates, schedules and data.

[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)[Data Analysis Course](/courses/data-analysis-mastery-course-college)AI and translation

## An AI can translate code between languages in seconds. Will the remainders still match?

Code that is correct in one language can be quietly wrong in another.

Ask a chatbot to convert a Python weekday function to JavaScript and it will usually produce clean, plausible code. If the formula relies on Python's handling of negative remainders, the translation can be wrong on thousands of dates while passing every example you try.

A Perth and Kinross learner who has tested every day for three centuries knows to test converted code exhaustively, not by spot checks. That habit is exactly what AI-written code needs.

Proving a program right, instead of hoping, is the reason Perth and Kinross teenagers should keep learning to code in 2026. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

How it works

## Lessons from Kinross to Pitlochry, at home

In a council area this spread out, online lessons remove long evening drives.

### Learner in control

The learner types every line; the teacher follows on the shared screen and helps at the right moment.

### Scottish stages

We use P and S stages, National 5, Higher and Advanced Higher, as Perth and Kinross schools do. Lessons are in English.

### First lesson free

A genuine lesson with no charge, then a straight recommendation.

### A class of equals

Every group holds between five and ten learners working at one stage, some from Scotland and some from much further away.

### Term time rhythm

Two lessons a week in term; breaks for school holidays.

### Fixed UK time

Your slot keeps its UK time as the clocks change; teachers in India time adjust instead.

Why groups are not by town

Five learners at one stage, free at one time, rarely live in one Perthshire town. Grouping by stage across a wider pool gives a pupil in Alyth or Coupar Angus a class that fits.

Fees

## Fees in Perth and Kinross

Crieff or Kinross, the fee is identical, the same one we charge everywhere outside India.

First class**USD 0**

A complete free lesson, then honest advice.

Group tuition**USD 100**

About eight lessons a month in a group of fifteen to twenty.

Private tuition**USD 150**

About eight lessons a month with a teacher to yourself.

We charge in US dollars and keep no sterling price list. The trial lesson comes first; an invoice only follows once you have chosen a course and a regular weekday. Our pricing page spells out what happens over holidays, after a missed class or on a switch of format.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Perth%20and%20Kinross%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)Reviews

## Our Google reviews

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

## Book a free Perth and Kinross lesson

Give us an age or school stage and a hobby or two, and we will shape the free lesson around it: perhaps a Scratch calendar game, a Python program, or the weekday formula on this page.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Perth and Kinross one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Perth%20and%20Kinross%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)

Submitted details are used for placement and follow-up.

FAQ

## Perth and Kinross questions

The council area, the Stanley Mills project and practical points.

### What is the population of Perth and Kinross?

Around 150,800, living in about 70,000 households, per the NRS-rounded figures from the 2022 census.

### What are the largest towns after Perth?

NRS mid-2020 estimates: Blairgowrie 9,240, Crieff 7,280, Auchterarder 5,840, Kinross 5,610 and Scone 5,030.

### What is the Stanley Mills project?

Learners code Zeller's congruence in Python, find that the 1847 floodmark date was a Thursday, and test the formula on all 109,938 days from 1800 to 2100 to expose two classic bugs.

### What is Zeller's congruence?

A formula that turns a date into its day of the week using whole-number arithmetic and a remainder after dividing by 7.

### What does the Stanley Mills floodmark record?

Historic Environment Scotland notes a floodmark dated 7 October 1847 on the second-floor string course of Mid Mill.

### Are lessons held in Perth?

All lessons are online, so learners join from home anywhere in Perth and Kinross.

### Do you teach National 5 Maths?

Yes, and Higher Maths and Computing Science too. We teach understanding and never promise grades.

### What ages do you teach?

From 6 to 67: block coding for young children, Python and exam work for secondary pupils, and Python for adults at any level.

### How much are lessons?

The first is free, then USD 100 a month in a group or USD 150 a month one-to-one.

### Do you stop for school holidays?

Holidays mean a break. Tell us the weeks your Perthshire school is closed and no lessons are booked for them.

Nearby pages

## Around Perth and Kinross

The [Perth](/best-coding-class-in-perth-scotland) page tests Soundex on a Walter Scott novel, [Angus](/coding-classes-in-angus) checks every quotation mark in Peter Pan, and [Fife](/coding-classes-in-fife) solves a Forth Bridge frame. Other councils are listed on the [Scotland](/coding-and-ai-classes-in-scotland) page. The [UK hub](/coding-classes-in-united-kingdom) covers the rest.

Book the free class[Book a priority demo](/book-demo)[WhatsApp the team](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Perth%20and%20Kinross%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/coding-classes-in-perth-and-kinross*
