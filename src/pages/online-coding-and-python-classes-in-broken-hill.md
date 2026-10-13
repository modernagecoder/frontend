---
title: "Online Coding and Python Classes in Broken Hill | Live Lessons"
description: "Live online Python and coding classes for Broken Hill teenagers and adults, with a project that reads a real time zone file byte by byte to find the city's clock."
canonical: https://learn.modernagecoders.com/online-coding-and-python-classes-in-broken-hill
source: src/pages/online-coding-and-python-classes-in-broken-hill.html
---
> Live online Python and coding classes for Broken Hill teenagers and adults, with a project that reads a real time zone file byte by byte to find the city's clock.

Skip to contentCourse picks for Broken Hill

## Four ways into Python from Broken Hill

Each one leads towards the binary file project below. The free lesson decides the starting point, and nobody asks for a card.

[![Python for Teens course thumbnail](/images/python-teens.webp)Ages 13 to 17Python for TeensVariables, loops and files, then opening a file in binary mode and printing its bytes.See the syllabus](/courses/python-complete-masterclass-teens)[![Python Masterclass course thumbnail](/images/python-college.webp)University and adultPython MasterclassPython from scratch to modules, file formats, struct and careful testing.See the syllabus](/courses/python-programming-masterclass-zero-to-advanced-college)[![Problem Solving for Teens course thumbnail](/images/problem-solving-teens.webp)Ages 14 to 18Problem Solving for TeensSearching sorted lists of times, the job a clock library does on every lookup.See the syllabus](/courses/problem-solving-dsa-masterclass-teens)[![Python Automation Course course thumbnail](/images/python-college.webp)Adults automating workPython Automation CourseScripts that read awkward file formats and check their own output.See the syllabus](/courses/python-ai-automation-masterclass-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Broken Hill in the Census

## A far west city of 17,588 people

The 2021 Census picture of the Broken Hill urban area, with New South Wales and national shares beside it.

The bureau counted 17,588 residents, a median age of 44, and 4,505 families spread across 9,551 private dwellings, with an average of 2.2 people in each household.

| Measure | Broken Hill | NSW | Australia |
| --- | --- | --- | --- |
| Separate houses (6,910 dwellings) | 94.6% | 65.6% | 72.3% |
| Professionals among workers (1,181 people) | 16.5% | 25.8% | 24.0% |
| Bachelor degree or higher (1,522 people) | 10.4% | 27.8% | 26.3% |
| Technicians and trades workers (1,115 people) | 15.5% | 11.9% | 12.9% |

### Almost no flats

Only 186 dwellings, 2.5% of the total, were flats or apartments on Census night.

### Teenagers and twenties

There were 971 residents aged 15 to 19 and 896 aged 20 to 24.

### The latest estimate

The ABS puts the Broken Hill council area at 17,515 people on 30 June 2025, a different boundary and date from the Census count.

Census tables are slightly randomised by the ABS to protect privacy, so rows rarely add up exactly to a published total. We print each figure as published and never present a sum of rows as a total.

Signature project

## What does a computer store when Broken Hill keeps Adelaide time?

The Australia/Broken_Hill file from the IANA time zone database, as shipped in Python's tzdata package, opened in binary mode and decoded with struct.unpack.

| Field in the file | Read big-endian (correct) | Read little-endian (wrong) |
| --- | --- | --- |
| Number of clock changes | 85 | 1,426,063,360 |
| Number of local time types | 5 | 83,886,080 |
| Characters of abbreviations | 19 | 318,767,104 |
| First clock change, in seconds from 1970 | -2,364,110,748 (31 January 1895) | About 230 billion years in the future |
| Offset of the first time type | 33,948 seconds (9:25:48) | -1,669,070,848 |

### 1. Check the label

The first five bytes spell TZif2: the format name and its version. A parser that does not find them stops immediately rather than guessing.

### 2. State the byte order

Every count is a four-byte integer stored with the most significant byte first. In Python the format string '>6l' says so; leave out the '>' on a typical laptop and the numbers come out reversed.

### 3. Compare with neighbours

From 2000 onwards all 17 changes stored for Broken Hill fall at exactly the same instants as Adelaide's, and not one matches Sydney's.

### A clock history written in bytes

The database gives Broken Hill its own local mean time of 9:25:48 ahead of Greenwich until February 1895, then ten hours, then nine from August 1896, and nine and a half since May 1899. From 1971 until 2000 its summer time followed New South Wales rules, so in 1982, 1990, 1992, 1994 and 1995 its clocks changed on different dates from Adelaide's. Since 2000 it follows South Australia, and the file's final line, ACST-9:30ACDT,M10.1.0,M4.1.0/3, is the rule both cities share.

The decoding is our own, run against tzdata 2025.3 (IANA release 2025c); the zone history comes from the IANA australasia source file. For comparison, the Adelaide file is 921 bytes with 84 changes and the Sydney file 904 bytes with 83.

Reading binary safely

## Habits for opening any binary file

Practised on 941 bytes from Broken Hill, then used on images, sound files, sensor logs and network packets.

| Habit | In practice | What it caught |
| --- | --- | --- |
| Test the magic bytes first | Compare the opening bytes with b'TZif' | A wrong file is rejected before any number is trusted |
| Write the byte order down | Use '>' in every struct format | The 1.4 billion transition count disappears |
| Check lengths add up | Work out each block's size from the counts | The legacy first block is exactly 51 bytes |
| Compare with a trusted reader | Check our times against Python's zoneinfo module | All 85 decoded changes agree with the library |

Text files forgive a lot; binary files forgive nothing. A single misplaced offset turns every later number into noise, and the program usually keeps running. The defence is to check something you already know, such as a file size or a date in history, before relying on anything you do not.

### Secondary students

Open the file in binary mode, print the first 44 bytes in hexadecimal and decode the six header counts by hand and with struct.

### University students

Write a complete TZif reader, including the footer rule, and test it against the standard library on every Australian zone.

### Adults at work

The same care applies to any export, log or device format where a wrong byte order fails quietly.

Modern Age Coders has no link with IANA, the ABS or the NSW Government. The time zone data and statistics belong to their publishers; the decoding and comparisons are our own work.

Around Broken Hill

## Adelaide time inside New South Wales

The details that decide when a Broken Hill learner can join a live lesson.

### Half an hour behind Sydney

Broken Hill runs on UTC plus 9:30, moving to 10:30 from the first Sunday in October to the first Sunday in April, exactly like Adelaide.

### NSW schools

The NSW public schools master dataset lists 9 schools in the Broken Hill council area.

### India time

India time is four hours behind Broken Hill in winter and five hours behind while daylight saving runs.

Two possible Term 1 starts in 2027

The NSW Department of Education lists Term 1 of 2027 from Thursday 28 January for the Eastern division and from Thursday 4 February for the Western division, both ending on Friday 9 April. Term 2 runs from Tuesday 27 April to Friday 2 July, Term 3 from Monday 19 July to Friday 24 September and Term 4 from Monday 11 October to Monday 20 December. Families confirm their division with their own school.

Learning ladder

## From printing text to decoding bytes

Bands are a guide only; the free lesson sets the real first step.

Ages 13 to 14

### Text and files

Reading and writing text files, counting lines and finding patterns.

[Python for Teens](/courses/python-complete-masterclass-teens)[Maths Through Coding](/courses/maths-through-coding)Ages 15 to 18

### Bytes and number bases

Binary and hexadecimal, opening files in binary mode and decoding simple headers.

[Python for Teens](/courses/python-complete-masterclass-teens)[Problem Solving for Teens](/courses/problem-solving-dsa-masterclass-teens)University

### Real file formats

Parsers with tests, version handling and comparison against reference libraries.

[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)[Data Structures & Algorithms Course](/courses/data-structures-algorithms-masterclass-college)Adults

### Formats at work

Reading exports and device logs reliably, with checks that fail loudly.

[Python Automation Course](/courses/python-ai-automation-masterclass-college)[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)Coding and AI

## Would an AI assistant notice the byte order?

Sometimes, and when it misses, nothing crashes.

Ask a chatbot for code to read a TZif header and it will usually write a struct format string. If that string drops the byte order character, the code still runs on a Broken Hill laptop and confidently reports more than 1.4 billion clock changes in a file of 941 bytes.

Our Broken Hill learners let AI tools draft the parser, then test it against facts they can check by hand: the file size, the TZif label and the date of the first clock change in 1895. The assistant writes quickly; the learner decides whether to believe it.

A Broken Hill learner who has caught a billion-fold error with one sanity check carries that habit into every file format and every AI tool that follows 2026. The longer argument is in [why every student should still learn to code](/blog/is-coding-worth-learning-2026).

Delivery

## From the far west, the same live class

Distance from Sydney or Adelaide makes no difference to an online lesson.

### Taught on your clock

Lesson times are fixed in Broken Hill time, which is half an hour behind most of New South Wales.

### Pitched to NSW stages

Teachers work with the NSW stage and Year system, HSC students included, and teach in English.

### Code before commitment

The first lesson is real programming with a teacher. Afterwards you receive a suggested course and time, and no payment details are taken.

### Fifteen to twenty per group

Learners at one level, drawn from across Australia and abroad, so each stage has a workable slot.

### Two lessons a week

Around eight a month. Holidays and exam weeks are planned with the teacher ahead of time.

### Daylight saving handled

When South Australian clocks change, Broken Hill lessons stay at the same local hour.

One time zone on every message

Times are always written in Broken Hill time, the same as Adelaide, so there is never a Sydney time to convert.

Fees

## Fees for online Python in Broken Hill

Three lines cover it.

First class**USD 0**

One free lesson, ending in a recommended level, course and time.

Group tuition**USD 100**

A month of group lessons, normally eight, with fifteen to twenty learners at the same stage.

Private tuition**USD 150**

About eight private lessons a month with one teacher.

Living far from a capital costs nothing extra: Broken Hill families pay the same US dollar rate as everyone else. Payment starts only after the trial settles a course and time, and the pricing page explains breaks, missed lessons and switching format.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20online%20Python%20class%20for%20a%20learner%20in%20Broken%20Hill.)Reviews

## Reviews left on Google by our learners

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

## Tell us about the learner and we will prepare the first lesson

We set the first task in advance: printing a file line by line for a Year 8 beginner, decoding the TZif header for a Year 11 student, or a full time zone reader for an adult.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Broken Hill one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20online%20Python%20class%20for%20a%20learner%20in%20Broken%20Hill.)

Submitted details are used for placement and follow-up.

FAQ

## Questions about Python classes in Broken Hill

What Broken Hill families and adult learners usually ask before booking.

### How many people live in Broken Hill?

The 2021 Census counted 17,588 people in the Broken Hill urban area. The ABS estimate for the council area on 30 June 2025 is 17,515.

### What does big-endian mean?

Big-endian means a number stored across several bytes puts its most significant byte first. TZif files use big-endian order, while most laptops store numbers little-endian, so a program has to state the order explicitly or it will misread every number.

### What is the Broken Hill time zone project?

Learners open the Australia/Broken_Hill file from the IANA time zone database in binary mode, decode its header and clock changes with Python's struct module, and compare the results with the Adelaide and Sydney files to see which city Broken Hill follows.

### Why does Broken Hill use South Australian time?

The time zone database records Broken Hill on UTC plus 9:30 since 1899, the same standard time as Adelaide. Since 2000 it has also followed South Australian daylight saving dates; from 1971 to 1999 it followed New South Wales dates.

### Can HSC students take part?

Yes. Senior students fit the weekly lessons around their HSC subjects, and any assessed school work remains entirely their own.

### When are lessons held for Broken Hill learners?

After school, in the evening or at weekends, agreed in the trial and written in Broken Hill time. India time is four hours behind Broken Hill in winter and five in summer.

### Is there anything for younger children?

Yes, from age 6 there are visual coding courses, though the binary file project on this page is meant for teenagers and adults.

### Is there a Modern Age Coders office in Broken Hill?

No, and we do not claim one. Teaching is live and online only, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a steady connection, and the contact number on this page is an Indian number.

### What do online Python classes in Broken Hill cost?

The first lesson is free. After that a group place costs USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before any payment.

### How large are the groups?

Between five and ten learners, matched on level, pace and goals rather than on age or postcode. When no group fits a workable time, one-to-one lessons are offered instead.

More in New South Wales

## Other pages for western New South Wales

Closer to the ranges there are [AI and programming classes in Dubbo](/ai-and-programming-classes-in-dubbo) and [vibe coding and AI agents classes in Orange](/vibe-coding-and-ai-agents-classes-in-orange). Since Broken Hill shares Adelaide's clock, [the Adelaide page](/ai-and-programming-classes-in-adelaide) may also help, and the statewide guide is [coding and AI classes in New South Wales](/coding-and-ai-classes-in-new-south-wales).

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20online%20Python%20class%20for%20a%20learner%20in%20Broken%20Hill.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/online-coding-and-python-classes-in-broken-hill*
