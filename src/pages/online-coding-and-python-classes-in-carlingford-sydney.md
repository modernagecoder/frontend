---
title: "Online Coding and Python Classes in Carlingford, Sydney"
description: "Live online coding and Python classes for Carlingford learners aged 6 to 67, with a NumPy project on Parramatta Light Rail stop data. First lesson free."
canonical: https://learn.modernagecoders.com/online-coding-and-python-classes-in-carlingford-sydney
source: src/pages/online-coding-and-python-classes-in-carlingford-sydney.html
---
> Live online coding and Python classes for Carlingford learners aged 6 to 67, with a NumPy project on Parramatta Light Rail stop data. First lesson free.

Skip to contentCourse picks for Carlingford

## Python courses that reach real data and maths

Each course works up to arrays, tables and calculations on public data. The opening lesson is free and places the learner, and booking needs no card.

[![Python and AI for Kids course thumbnail](/images/python-kids.webp)Ages 8 to 12Python and AI for KidsFirst Python, lists of numbers and simple totals.See the syllabus](/courses/python-ai-kids-masterclass)[![Data Science for Teens course thumbnail](/images/data-science-teens.webp)Ages 13 to 17Data Science for TeensNumPy, pandas and charts on real datasets.See the syllabus](/courses/data-science-course-for-teens-python-data)[![Python for Teens course thumbnail](/images/python-teens.webp)Ages 12 to 17Python for TeensFunctions, files and data structures for bigger programs.See the syllabus](/courses/python-complete-masterclass-teens)[![Data Science Course course thumbnail](/images/data-science-college.webp)University and adultData Science CourseArrays, linear algebra and analysis for work or study.See the syllabus](/courses/data-science-complete-masterclass-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Carlingford in the Census

## Houses, apartments and young families

The 2021 Census profile of the Carlingford suburb and locality alongside the state and the country.

| Measure | Value |
| --- | --- |
| Residents | 28,044 |
| Median age | 38 |
| Families | 8,017 |
| Private dwellings | 10,144 |
| Average people per household | 3 |

| Indicator | Carlingford | NSW | Australia |
| --- | --- | --- | --- |
| Flats or apartments among occupied homes | 29.5% (2,682) | 21.7% | 14.2% |
| Bachelor degree or higher (aged 15 and over) | 44.7% (9,911) | 27.8% | 26.3% |
| Children aged 5 to 9 | 8.6% (2,419) | 6.2% | 6.2% |
| Professionals among employed residents | 35.5% (4,365) | 25.8% | 24.0% |
| Couple families with children | 56.4% (4,518) | 44.7% | 43.7% |

### Apartments

Close to three occupied homes in ten were flats or apartments, above the state share of 21.7%.

### Primary-age children

Children aged 5 to 9 made up 8.6% of residents, against 6.2% across New South Wales.

### Graduates

44.7% of residents aged 15 and over held a bachelor degree or higher.

These numbers describe the suburb and locality only. Because small Census cells are randomly adjusted, the page never adds published parts together.

Signature project

## The light rail as a 21 by 16 matrix

Rows are the 21 months from December 2024, the first light rail month in the file, to August 2026. Columns are the 16 Parramatta Light Rail stops. Each cell is that stop's entries in that month; none of the 336 cells is suppressed.

| Expression | Result shape | What it means |
| --- | --- | --- |
| M @ ones(16) | 21 numbers | Entries on the whole line each month |
| ones(21) @ M | 16 numbers | Entries at each stop over all 21 months |
| M @ ones(21) | ValueError | Inner sizes 16 and 21 do not match |

| Measure | Value |
| --- | --- |
| Quietest month on the line | December 2024, 91,771 |
| Busiest month on the line | March 2026, 429,899 |
| Carlingford stop, 21 months | 416,808, 5th of 16 stops |
| Carlingford share of the line | 6.07% |
| Telopea and Dundas, the next stops south | 266,656 and 198,407 |

### Inner sizes must agree

An (a, b) matrix times a (b, c) matrix gives (a, c). M is (21, 16), so it can only be multiplied on the right by something with 16 rows.

### A weight vector

Put 1 under Westmead and Carlingford and 0 elsewhere, and M @ w gives the two ends of the line: 19,720 in December 2024 and 46,532 in August 2026.

### One stop, by month

Column Carlingford alone runs from 11,621 entries in December 2024 to 23,923 in August 2026, its highest month in the file.

### The error worth reading

NumPy's message for `M @ ones(21)` begins "matmul: Input operand 1 has a mismatch in its core dimension 0". Translating that sentence into "the inner sizes differ" is the point where matrix multiplication starts to make sense.

Stop entries come from Transport for NSW's monthly Opal figures. Entries count tap-ons, not different people; the sums, shares and ranks are our own calculation, not published totals.

Going further

## From one product to linear algebra

The same matrix supports a sequence of harder exercises.

| Exercise | NumPy idea | Carlingford angle |
| --- | --- | --- |
| Shares by stop | Divide the stop totals by their sum | Carlingford 6.07% of recorded entries |
| Month-on-month change | np.diff along axis 0 | Which months rise or fall at the terminus |
| Exits too | A second matrix of the same shape | Compare entries and exits stop by stop |
| Ranking | np.argsort on the stop totals | Fifth of 16, behind four stops nearer Parramatta |

### Children

Fill a small times-table grid and add up its rows and columns by hand, then in Python.

### Teenagers

Build M from the CSV, compute both products and explain each shape before running the code.

### Adults

Replace spreadsheet SUM formulas with one matrix product and check the results agree.

Transport for NSW publishes the entry figures openly and is not connected with Modern Age Coders.

Schools and the school year

## Seven state schools in Carlingford

All seven are in City of Parramatta council, with first-teacher dates from 1883 to 1969.

| School | Level | First teacher |
| --- | --- | --- |
| Carlingford Public School | Primary | 1883 |
| Cumberland High School | Secondary | 1962 |
| James Ruse Agricultural High School | Secondary | 1962 |
| Roselea Public School | Primary | 1965 |
| Carlingford West Public School | Primary | 1967 |
| Carlingford High School | Secondary | 1968 |
| Murray Farm Public School | Primary | 1969 |

### Winter holidays 2027

For Eastern division schools, Monday 5 July to Friday 16 July 2027.

### Spring holidays 2027

Monday 27 September to Friday 8 October, between Terms 3 and 4.

### Lessons in the breaks

Carlingford groups pause for state holidays and restart in the usual weekly slot.

Learning ladder

## From grids in Scratch to matrices in NumPy

Ages are indicative; the trial lesson sets the actual level.

Ages 6 to 10

### Scratch and grids

Games on a grid, with rows and columns the player moves through.

[Scratch Coding for Kids](/courses/scratch-programming-complete-course)[Coding for Kids](/courses/kids-coding-blocks-masterclass)Ages 10 to 13

### First Python

Lists, nested lists and adding up rows.

[Python and AI for Kids](/courses/python-ai-kids-masterclass)[Maths Through Coding](/courses/maths-through-coding)Ages 13 to 18

### NumPy and data

Arrays, shapes, products and charts from open data.

[Data Science for Teens](/courses/data-science-course-for-teens-python-data)[Python for Teens](/courses/python-complete-masterclass-teens)University and adult

### Linear algebra in code

Matrices for analysis, statistics and machine learning.

[Data Science Course](/courses/data-science-complete-masterclass-college)[Statistics & Probability](/courses/statistics-probability-maths-course)Coding and AI

## Matrix products are what AI models run on

The operation in this project is the same one inside every neural network.

A language model spends most of its time multiplying large matrices. An assistant can write M @ ones(16) for you, but if it swaps the order it either crashes or, with a square matrix, silently computes the wrong thing. Knowing which axis is which is what lets you tell.

Carlingford learners who have built the light rail matrix by hand can read the shape of any array an AI tool hands back, and spot the transposed one.

In 2026 assistants write NumPy quickly; Carlingford learners who understand shapes are the ones who catch the wrong product before it reaches a report. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

Delivery

## Live lessons for Carlingford learners at home

Each session is live on video, so Carlingford learners join from home.

### Coding together

Learner and teacher work through the code in real time, screen shared.

### NSW school framing

Plans use the state's stages and years and respect its calendar.

### Free starter lesson

A full first class costs nothing and ends with a course and time suggested.

### Groups by ability

Fifteen to twenty learners at a similar level; one-to-one also available.

### Two slots weekly

About eight lessons a month at the same times, with breaks listed ahead.

### Teachers in India

A 7pm Carlingford lesson is 1:30pm India time in Sydney summer time and 2:30pm outside it.

Sydney and India time

From Sunday 4 October 2026 to Sunday 4 April 2027 Sydney is on daylight saving, and India never changes its clocks, so the difference is 5 hours 30 minutes in that period and 4 hours 30 minutes otherwise. All our lesson times are stated in Sydney time.

Fees

## Carlingford lesson fees

The same flat rate for every course and every age.

First class**USD 0**

Your first lesson is free and comes with a recommended course and timetable.

Group tuition**USD 100**

Group classes twice a week, close to eight a month, with fifteen to twenty learners at one level.

Private tuition**USD 150**

One-to-one lessons at the same frequency, about eight a month.

Carlingford families are billed in US dollars, and only once the trial has led to an agreed course and time. Holidays, missed lessons and changing format are covered on the pricing page.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20would%20like%20a%20free%20coding%20or%20Python%20lesson%20for%20a%20learner%20in%20Carlingford.)Reviews

## Google reviews

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

## Request a free first lesson

Just give an age and something the learner likes. A six-year-old might start with a Scratch grid game; a teenager or adult might build the light rail matrix.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Carlingford one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20would%20like%20a%20free%20coding%20or%20Python%20lesson%20for%20a%20learner%20in%20Carlingford.)

Submitted details are used for placement and follow-up.

FAQ

## Carlingford coding and Python questions

Questions Carlingford families send us.

### How many people live in Carlingford?

The 2021 Census QuickStats for the Carlingford suburb and locality counted 28,044 residents, median age 38, in 8,017 families and 10,144 private dwellings.

### What is matrix multiplication in NumPy?

The @ operator multiplies arrays whose inner sizes match: a (21, 16) matrix times a vector of 16 values gives 21 values. If the sizes do not match, NumPy raises a ValueError.

### How busy is the Carlingford light rail stop?

In Transport for NSW monthly figures from December 2024 to August 2026, the Carlingford stop recorded 416,808 entries, 5th of the 16 Parramatta Light Rail stops by our calculation.

### What will my child learn from the project?

How to build an array from a CSV file, what its shape means, how to total rows and columns with one product, and how to read a shape error.

### Which state schools are in Carlingford?

Carlingford, Carlingford West, Roselea and Murray Farm public schools, and Carlingford, Cumberland and James Ruse Agricultural high schools, all in City of Parramatta council.

### From what age can a child start?

Scratch from six. NumPy projects suit learners from about 13 who are comfortable with Python lists.

### Which device should a learner use?

A laptop or desktop with a keyboard, any current browser, a microphone and a reliable internet connection.

### Do you run classes in Carlingford itself?

No. We teach only online and have no premises anywhere in Australia, including Carlingford. Our contact phone number is an Indian number.

### How much do Carlingford lessons cost?

The first lesson is free. A group place is USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners; one-to-one is USD 150 a month on the same plan. Nothing is charged before a course and time are agreed.

### How big are the groups?

Fifteen to twenty learners, grouped by level and goals rather than age. If no group fits the learner's schedule, one-to-one lessons are offered instead.

Nearby guides

## More for Carlingford learners

The other end of the light rail is covered on [coding and AI classes in Parramatta](/best-coding-and-ai-classes-in-parramatta-sydney), and the suburb to the east on [vibe coding and AI agents classes in Epping](/vibe-coding-and-ai-agents-classes-in-epping-sydney). To the north-west is [coding and AI classes in Baulkham Hills](/best-coding-and-ai-classes-in-baulkham-hills-sydney), and the city guide is [coding classes in Sydney](/best-coding-classes-in-sydney).

Book the free class[Book a priority demo](/book-demo)[Send a WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20would%20like%20a%20free%20coding%20or%20Python%20lesson%20for%20a%20learner%20in%20Carlingford.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/online-coding-and-python-classes-in-carlingford-sydney*
