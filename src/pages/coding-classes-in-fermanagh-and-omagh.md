---
title: "Coding Classes in Fermanagh and Omagh | Online, Ages 6 to 67"
description: "Live online coding, Python and maths classes across Fermanagh and Omagh: Enniskillen, Omagh, Lisnaskea, Irvinestown, Ballinamallard, Fintona and beyond."
canonical: https://learn.modernagecoders.com/coding-classes-in-fermanagh-and-omagh
source: src/pages/coding-classes-in-fermanagh-and-omagh.html
---
> Live online coding, Python and maths classes across Fermanagh and Omagh: Enniskillen, Omagh, Lisnaskea, Irvinestown, Ballinamallard, Fintona and beyond.

Skip to contentCourses for Fermanagh and Omagh

## First steps for Fermanagh and Omagh learners

A P4 pupil in Lisnaskea who loves mysteries, a Year 8 in Irvinestown trying Python, a Year 13 in Enniskillen taking CCEA A level Software Systems Development, and an Omagh adult learning to code. The free lesson places each one.

[![Coding for Kids course thumbnail](/images/kids-coding.webp)Ages 6 to 12Coding for KidsBlock coding with clues, logic puzzles and detective games.See the syllabus](/courses/kids-coding-blocks-masterclass)[![Python and AI for Kids course thumbnail](/images/python-kids.webp)Ages 9 to 14Python and AI for KidsTyped Python for younger learners, with if statements and ranges.See the syllabus](/courses/python-ai-kids-masterclass)[![Python for Teens course thumbnail](/images/python-teens.webp)Ages 13 to 18Python for TeensComplete Python for teenagers, from functions to testing and debugging.See the syllabus](/courses/python-complete-masterclass-teens)[![Data Analysis Course course thumbnail](/images/data-analysis-college.webp)AdultsData Analysis CoursePython for data, cleaning records and checking them for conflicts.See the syllabus](/courses/data-analysis-mastery-course-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Census figures for the district

## 116,812 people across Fermanagh and Omagh

The district total and the seven electoral areas below come from NISRA's Census 2021 table MS-A01. We print each area exactly as published and never add them up.

| District electoral area | People | District electoral area | People |
| --- | --- | --- | --- |
| Enniskillen | 18,451 | Mid Tyrone | 17,590 |
| Erne East | 15,944 | Omagh | 18,480 |
| Erne North | 15,083 | West Tyrone | 16,603 |
| Erne West | 14,661 |   |   |

NISRA's settlement estimates, which it describes as approximations, put Omagh Town at 20,458 and Enniskillen at 14,086, then Lisnaskea at 3,020, Irvinestown at 2,320, Ballinamallard at 1,364, Fintona at 1,212 and Newtownbutler at 972. Pupils here follow the Northern Ireland Curriculum from P1 through Year 14, sitting CCEA GCSEs and A levels in the final years. We have not checked any school calendars, so families send us their holiday dates.

### Armagh and CCEA support

Our [Armagh](/best-coding-class-in-armagh) page covers the cathedral city. For exams, see [CCEA A level Software Systems Development](/ccea-a-level-software-systems-development-help) and [CCEA GCSE Digital Technology programming](/ccea-gcse-digital-technology-programming-help).

The Fermanagh and Omagh project

## Dating a bridge from its clues

Every clue is a range of years; the answer is where they all overlap.

Historians have Latin names for the two kinds of clue: a terminus post quem is the earliest a thing can be, and a terminus ante quem is the latest. In code both become a pair of numbers, earliest and latest. To combine two ranges you take the later of the two starts and the earlier of the two ends. If the start is still before the end, that overlap is the answer. The learner writes that one small function, feeds it the clues from the record one at a time, and prints how the window shrinks.

| Clue | Range it allows | Window so far | Width |
| --- | --- | --- | --- |
| Built with the Ulster Canal | 1825 to 1842 | 1825 to 1842 | 17 years |
| Missing from the 1834 map | 1834 onwards | 1834 to 1842 | 8 years |
| Canal closed in 1931 | Up to 1931 | 1834 to 1842 | No change |
| Record judges it the same decade | 1834 to 1839 | 1834 to 1839 | 5 years |

Two lessons come out of the table. First, some clues add nothing: the closing date of 1931 is true but does not narrow anything, and a good program can report which clues did the work. Second, the last row is different in kind. The evidence alone gives 1834 to 1842; saying the bridge dates from the same decade adds an expert's judgement that it was built during the canal works rather than at their very end. Code keeps the two apart, so a reader can see which part is proof and which is judgement.

Then the learner adds a made-up clue, a datestone reading 1829, and the overlap vanishes: the start comes after the end. The program must not just crash. It tries removing each clue in turn and finds two ways to restore agreement: drop the datestone, or drop the map. Code cannot say which to trust; that takes judgement about sources. There is also a subtler point: a map shows what was standing when it was surveyed, which can be earlier than the year printed on it. And the classic slip is using the earlier start and the later end, which takes the union rather than the overlap and widens the answer to 1825 to 1931.

### Ages 8 to 11

Play guess-the-year with clue cards on a number line, then turn it into a Scratch game.

### Ages 11 to 15

Write the overlap function in Python, feed it the clues and print the shrinking window.

### Ages 15 and up

Detect contradictions, find which clues to drop, and write tests for the union slip.

### The record's clues, our code

Every real clue comes from the Historic Environment Division's record. The datestone is invented to show a conflict, and the widths are our arithmetic, so the table demonstrates the method rather than re-dating the bridge.

Why the Ulster Canal

## A canal bridge with a towpath beneath

What the Historic Environment Division's record says.

| Record detail | What it says |
| --- | --- |
| Structure | A single semicircular arch carrying a humpbacked road over the Ulster Canal |
| Span | About 6.12 m, of which the canal itself takes 4.09 m |
| Towpath | Runs through the arch on the south side |
| Canal works | Built between 1825 and 1842; consulting engineer William Cubitt, contractor William Dargan |
| Dating | Not shown on the 1834 Ordnance Survey map, so later |
| Canal closed | 1931 |

Combining ranges and spotting conflicts is everyday work in software. Calendars check meeting times against each other, databases reject records whose dates cannot all be true, and version-control tools work out which changes are compatible. A learner in Fermanagh and Omagh who has turned a heap of clues into a firm window, and found the clue that breaks it, is practising the same reasoning.

Modern Age Coders is not connected with NISRA or the Department for Communities. The record belongs to them; the interval code, with any slip in it, belongs to us.

Growing with the learner

## From clue cards to conflict detection

Use these stages as a rough map; the free lesson does the placing.

P3 to P7

### Logic games

Block coding with clues, choices and yes-or-no rules.

[Coding for Kids](/courses/kids-coding-blocks-masterclass)[Scratch Coding for Kids](/courses/scratch-programming-complete-course)Years 8 to 10

### Conditions in Python

If statements, comparisons and number ranges in typed code.

[Python and AI for Kids](/courses/python-ai-kids-masterclass)[Maths Through Coding](/courses/maths-through-coding)Years 11 to 14

### Testing and logic

Functions, tests and inequalities alongside CCEA GCSE and A level.

[Python for Teens](/courses/python-complete-masterclass-teens)[High School Mathematics](/courses/complete-high-school-mathematics-mastery)Adults

### Checking data

Adult Python for cleaning and validating real records.

[Data Analysis Course](/courses/data-analysis-mastery-course-college)[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)AI and evidence

## An AI will give you a date. Will it tell you which part is judgement?

A confident answer often blends proof and guesswork.

Ask a chatbot when a small bridge was built and it may give one tidy year, mixing firm evidence with assumptions and never saying which is which. If two sources disagree, it may simply pick one.

A learner who has coded the overlap of clues knows to ask what range the evidence supports, where judgement comes in, and what happens when a source conflicts.

Separating proof from judgement is a good reason for a Fermanagh and Omagh teenager to keep coding in 2026. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

How lessons work

## From Belleek to Beragh, lessons by video

Lakeside, hillside or town, all anyone needs is a connection.

### Learner at the controls

Each student types their own code, and the tutor reads along on the shared screen, asking questions that point the way.

### Northern Ireland placement

A Fintona P7 or an Enniskillen Year 11 is placed by key stage and school year, and CCEA names are used for exams. We teach in English.

### First lesson free

A full lesson without charge, ending with our straight advice.

### Classes by level

Groups of fifteen to twenty at one stage, drawn from across the UK.

### During term

Two lessons a week in term, with the holidays left free.

### Clock changes handled

Your lesson hour on the local clock stays put when the clocks change; our teachers move instead.

Why a rural district suits online groups

In a spread-out district, five learners at one level rarely live near each other. Online, a Newtownbutler or Ballinamallard learner studies beside peers at the same stage.

Fees

## What lessons cost in Fermanagh and Omagh

Enniskillen and Omagh pay the same, and so does every country we teach outside India.

First class**USD 0**

A full lesson free, with advice on where to go next.

Group tuition**USD 100**

Approximately eight lessons a month in a group of fifteen to twenty.

Private tuition**USD 150**

Approximately eight lessons a month with a personal tutor.

All fees are in US dollars; we publish no sterling price. Billing starts only once the trial has fixed a course and a weekly slot, and the pricing page explains holidays, missed lessons and changing formats.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Fermanagh%20and%20Omagh%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)Reviews

## Google ratings from our families

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

## Book a free Fermanagh and Omagh lesson

Tell us the learner's age or school year and a hobby. The trial could be a Scratch detective game, a first Python program, or the Ulster Canal dating puzzle.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Fermanagh and Omagh one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Fermanagh%20and%20Omagh%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)

Submitted details are used for placement and follow-up.

FAQ

## Fermanagh and Omagh questions

The district, the canal project and the practical side.

### What is the population of Fermanagh and Omagh?

NISRA's Census 2021 counted 116,812 usual residents in the district.

### What are the largest towns in Fermanagh and Omagh?

NISRA estimates Omagh Town at 20,458 and Enniskillen at 14,086, with Lisnaskea next at 3,020.

### What is the Ulster Canal project?

Learners turn each clue about a canal bridge into a range of years in Python, overlap the ranges to date it, and detect clues that contradict each other.

### What does terminus post quem mean?

The earliest date something can be, such as the date of a map on which a building does not yet appear.

### When was the Ulster Canal built?

Between 1825 and 1842, according to the Historic Environment Division record, which also says it closed in 1931.

### Are classes held online?

Yes, every class is live online, joined from home.

### Do you support CCEA qualifications?

Yes, in maths and computing. We teach for understanding and never promise results.

### What ages can join?

Anyone from 6 to 67, with a course to suit.

### What does it cost?

The first lesson is free. Afterwards it is USD 100 a month for a group or USD 150 a month for one-to-one.

### Do lessons stop for school holidays?

They do. Send us your holiday weeks and we leave them out.

Around Northern Ireland

## Other Northern Ireland pages

[Armagh](/best-coding-class-in-armagh) counts how far a star catalogue is out of order, [Causeway Coast and Glens](/coding-classes-in-causeway-coast-and-glens) splits the wind on three runways, and [Antrim and Newtownabbey](/coding-classes-in-antrim-and-newtownabbey) tows aircraft out of a dead-end park. Our [Northern Ireland](/coding-and-ai-classes-in-northern-ireland) guide lists all the districts, and the [UK hub](/coding-classes-in-united-kingdom) covers the other nations.

Book the free class[Book a priority demo](/book-demo)[WhatsApp our team](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Fermanagh%20and%20Omagh%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/coding-classes-in-fermanagh-and-omagh*
