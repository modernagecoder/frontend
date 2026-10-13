---
title: "Coding Classes in County Durham | Live Online, Ages 6 to 67"
description: "Live online coding, Python, databases and maths classes across County Durham and the Tees, from Durham and Darlington to Hartlepool, Stockton and Consett."
canonical: https://learn.modernagecoders.com/coding-classes-in-county-durham
source: src/pages/coding-classes-in-county-durham.html
---
> Live online coding, Python, databases and maths classes across County Durham and the Tees, from Durham and Darlington to Hartlepool, Stockton and Consett.

Skip to contentCourses for County Durham

## How County Durham learners usually begin

A seven-year-old in Shildon who loves trains, an eleven-year-old in Chester-le-Street who has outgrown Scratch, a Year 10 in Darlington sitting GCSE Computer Science, and a stock controller in Stockton learning SQL for work. Each starts with a free lesson.

[![Coding for Kids course thumbnail](/images/kids-coding.webp)Ages 6 to 12Coding for KidsBlock coding from a first Scratch game onwards, including trains and signals that wait their turn.See the syllabus](/courses/kids-coding-blocks-masterclass)[![Python and AI for Kids course thumbnail](/images/python-kids.webp)Ages 10 to 13Python and AI for KidsFirst typed Python for children: conditions, loops and the idea of a program waiting for something.See the syllabus](/courses/python-ai-kids-masterclass)[![GCSE Computer Science course thumbnail](/images/gcse-computer-science.webp)GCSE yearsGCSE Computer ScienceTaught to the specification your child sits, AQA 8525, OCR J277 or Edexcel 1CP2.See the syllabus](/courses/gcse-computer-science-course)[![MySQL Course course thumbnail](/images/database-college.webp)AdultsMySQL CourseSQL, database design, stored procedures and transactions, the place where real deadlocks happen.See the syllabus](/courses/mysql-database-complete-masterclass-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)The area in figures

## Four councils, 918,800 people and thirty-one towns

The four council totals are the 2021 Census on Nomis; Stockton-on-Tees is counted as a whole borough. Towns are ONS built-up areas, each checked against census output areas we added up ourselves.

| Council | Usual residents | Main towns |
| --- | --- | --- |
| Durham County Council | 522,068 | Durham, Consett, Newton Aycliffe, Chester-le-Street, Bishop Auckland, Seaham |
| Stockton-on-Tees | 196,595 | Stockton-on-Tees, Billingham, Ingleby Barwick, Thornaby-on-Tees, Yarm |
| Darlington | 107,799 | Darlington |
| Hartlepool | 92,338 | Hartlepool |

Durham County Council alone covers more than half a million people, but no single town in it is large: the city of Durham's built-up area has 50,510 residents, and the next biggest, Consett, under 30,000. The large towns lie on the edge, in Darlington, Hartlepool and Stockton. Between them, the former coalfield towns and villages sit close on the map but can be awkward to link by bus, especially in the evening.

| Town | Residents | Town | Residents |
| --- | --- | --- | --- |
| Darlington | 93,015 | Egglescliffe | 10,250 |
| Hartlepool | 87,995 | Crook | 9,715 |
| Stockton-on-Tees | 84,815 | Shildon | 9,645 |
| Durham | 50,510 | Yarm | 9,600 |
| Billingham | 33,920 | Brandon | 9,505 |
| Consett | 29,885 | Ferryhill | 8,860 |
| Newton Aycliffe | 25,765 | Annfield Plain | 7,785 |
| Chester-le-Street | 23,560 | Pelton and Ouston | 7,305 |
| Ingleby Barwick | 23,380 | Murton | 7,240 |
| Bishop Auckland | 23,355 | Easington | 6,965 |
| Thornaby-on-Tees | 23,350 | Horden | 6,805 |
| Seaham | 21,665 | Ushaw Moor and Bearpark | 6,480 |
| Spennymoor | 20,410 | Barnard Castle | 5,785 |
| Peterlee | 19,750 | Willington | 5,685 |
| Stanley | 19,415 | Sacriston | 5,190 |

Wingate, with 5,035, is the thirty-first. Every row agrees with our output-area count to within rounding. Fence Houses is listed by the ONS partly against County Durham, but only about 1,650 of its 6,945 residents are on this side of the line, so it belongs with Sunderland. The four councils and academies set school calendars separately, and we did not read them; lesson breaks are agreed family by family.

The County Durham project

## Two trains, one track, and a deadlock nobody planned

A six-section railway in Python, a thousand random timetables per setting, and a rule borrowed from real single-line railways.

The learner builds a toy line of six single-track sections, with passing places at each end and one in the middle where trains can wait side by side. Each section can hold only one train. Trains set off from either end at random times. The first rule anyone tries is the obvious one: move into the next section whenever it is empty. Run it, and it often works. Run it a thousand times with different random timetables, and a pattern appears. Sooner or later an eastbound train sits in one section wanting the next, while a westbound train sits in that next section wanting the first. Both wait for ever.

| Trains on the line | Deadlocks with the naive rule | Deadlocks with the token rule | Average finish time with tokens |
| --- | --- | --- | --- |
| 2 | 304 of 1,000 | 0 of 1,000 | 13.0 steps |
| 3 | 641 of 1,000 | 0 of 1,000 | 14.5 steps |
| 4 | 844 of 1,000 | 0 of 1,000 | 15.8 steps |
| 6 | 963 of 1,000 | 0 of 1,000 | 18.6 steps |
| 8 | 991 of 1,000 | 0 of 1,000 | 21.7 steps |

The fix is the token rule, an idea railways have long used on single lines: a train may only leave a passing place once it holds the right to every section up to the next passing place, all at once. If any of them is taken, it waits where there is room to wait. With that one change, not a single run out of five thousand deadlocks. The price shows in the last column: trains sometimes wait at a station when they could have crept forward, so with eight trains the line takes 21.7 steps on average against 16.2 for the few naive runs that happened to finish.

This is exactly the deadlock that computer scientists study. Four things together cause it: something only one user can hold at a time, users holding one thing while waiting for another, no way to take a thing away from its holder, and a circle of waiting. Break any one and deadlock is impossible. The token rule breaks the second: nobody holds part of what they need while waiting for the rest. Databases, operating systems and online games all use versions of the same trick.

### Ages 10 to 13

Act it out with two toy trains on a paper track, find the jam, then write the simple rule in Python and watch it happen on screen.

### Ages 13 to 16

Run the naive rule a thousand times with different random seeds, count the deadlocks, and see how the count grows with more trains.

### Ages 16 and up

Implement the token rule, prove it cannot deadlock using the four conditions, and measure the time it costs in exchange.

### What the model is

The railway, the rules and the numbers are our own simplified model, not a description of how the Stockton and Darlington Railway or any modern line was signalled. The railway history is Locomotion's. The point of the model is the computer science, which is the same whether the track is iron or a table in a database.

Why Shildon

## The world's first railway town, in its museum's words

The County Durham link, from Locomotion, part of the Science Museum Group.

| Topic | What the museum says |
| --- | --- |
| The first passenger service | On 27 September 1825 Locomotion No.1 ran the first passenger service on the brand-new Stockton and Darlington Railway. |
| Its builder | Built by Robert Stephenson and Co in Newcastle. |
| Its significance | Considered by many to be the start of the modern railway as we know it today. |
| The engineer | Timothy Hackworth, the first locomotive superintendent of the Stockton and Darlington Railway. |
| The town | Shildon, described by Locomotion as the world's first railway town. |

The railway that opened here two centuries ago had to answer questions that now belong to computing: how many things can share one resource, who goes first, what happens when two want the same thing at once. A County Durham learner working through this project is doing, in a few dozen lines of Python, the same reasoning that keeps a modern signalling system, a bank's database and a multiplayer game from seizing up.

Modern Age Coders has no connection with Locomotion, the Science Museum Group or any of the four councils, and nothing here implies one. The history is theirs; the model and any error in it are ours.

Nearby pages

[Durham](/best-coding-class-in-durham) and [Sunderland](/best-coding-class-in-sunderland) have city pages of their own, and the [UK hub](/coding-classes-in-united-kingdom) links everything else.

The route up

## From taking turns to proving a system cannot jam

Where to begin is decided in the free lesson. Year group helps; ability decides.

Ages 6 to 10

### Taking turns

Block-coding projects where characters wait, signal and go, the first idea of sharing something fairly.

[Coding for Kids](/courses/kids-coding-blocks-masterclass)[Scratch Coding for Kids](/courses/scratch-programming-complete-course)Ages 10 to 13

### Rules that wait

Python with conditions and loops, and small simulations where things move only when it is safe.

[Python and AI for Kids](/courses/python-ai-kids-masterclass)[Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)Ages 13 to 18

### Systems thinking

GCSE and A level computing topics on processes and resources, backed by simulations that test a rule thousands of times.

[GCSE Computer Science](/courses/gcse-computer-science-course)[Python for Teens](/courses/python-complete-masterclass-teens)Ages 18 to 67

### Databases at work

SQL, transactions and locking for adults, where deadlocks are a daily fact of life and preventing them is part of the job.

[MySQL Course](/courses/mysql-database-complete-masterclass-college)[Data Analysis Course](/courses/data-analysis-mastery-course-college)AI and systems that jam

## An AI can write code for two processes sharing a resource. Will it notice the deadlock?

Deadlocks hide in code that looks correct line by line.

Ask a chatbot to write two workers that each lock a pair of shared records and it will often produce tidy, readable code that deadlocks under the wrong timing, exactly like our naive trains. Each line is correct; the problem is in how they interact, and it may only appear once in hundreds of runs. A quick test passes, and the fault waits for a busy day.

A County Durham student who has watched 991 of 1,000 timetables jam knows to ask how a design behaves when things happen at the same time, to test it many times rather than once, and to look for the four conditions that make deadlock possible. That is how experienced engineers review concurrent code, whoever or whatever wrote it.

So a County Durham teenager should learn to code in 2026, two hundred years on from Locomotion No.1, to be the one who spots the jam before the trains do. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

Getting started

## Barnard Castle to Hartlepool, with no connection to miss

The area's towns are spread across dales, coalfield and coast. Online lessons turn every journey into zero.

### Learning from home

A bedroom in Spennymoor, a kitchen in Peterlee, a desk in Yarm. Teacher and learner share one screen.

### The same school words

Key Stages, GCSE options and A levels are named as local schools name them, and every lesson is in English.

### First lesson free

A real lesson with real work and an honest recommendation. There is no card to hand over.

### Right-level classmates

Fifteen to twenty learners at the same stage, gathered from many places, so the pace suits everyone.

### Holidays fitted in

Two lessons a week is usual, paused when your own school stops, whichever council or trust sets its dates.

### Times written in UK time

Teachers work from India, five and a half hours ahead of UK winter time and four and a half ahead of UK summer time; your timetable shows UK time.

Why groups follow level, not location

Thirty-one towns, most of them small, mean few places have enough learners at the same stage on the same evening. Level-based groups let a Crook learner and a Billingham learner share a class.

Fees

## Fees across County Durham

The same fees in every town on this page, and in every country outside India.

First class**USD 0**

A full lesson of real work, finishing with a recommended level and course.

Group tuition**USD 100**

Around eight lessons a month in a group of fifteen to twenty learners at one level.

Private tuition**USD 150**

Around eight lessons a month, one teacher with one learner.

All families outside India pay in US dollars, and there is no pound price list. The first payment follows the free lesson, once a course and weekly slot are agreed; details on pausing, missed lessons and changing between group and private are on the pricing page.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20lesson%20for%20a%20learner%20in%20County%20Durham.)Reviews

## Parents and learners, reviewing us on Google

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

## Ask for the free first lesson

We only need to know an age or a school year, and what the learner is into. The first lesson might be a block-coding train game, a first Python loop, or the deadlock railway on this page.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented County Durham one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20lesson%20for%20a%20learner%20in%20County%20Durham.)

Submitted details are used for placement and follow-up.

FAQ

## County Durham questions

About the area, the railway project and how lessons run.

### How many people live in County Durham and the Tees boroughs?

Durham County Council, Stockton-on-Tees, Darlington and Hartlepool together held 918,800 usual residents at the 2021 Census, from ONS data on Nomis. Durham County Council's area alone had 522,068.

### What are the largest towns here?

By ONS built-up area: Darlington 93,015, Hartlepool 87,995, Stockton-on-Tees 84,815, Durham 50,510 and Billingham 33,920. The page lists thirty-one towns above five thousand people.

### What is the railway deadlock project?

Learners build a six-section single-track railway in Python and run a thousand random timetables. With the naive rule, 991 of 1,000 jam when eight trains run; with the token rule, none do.

### What is a deadlock?

A situation where two or more things each hold something the other needs and wait for ever. It happens in railways, databases and computer programs whenever resources are shared carelessly.

### When did the Stockton and Darlington Railway open?

Locomotion, the Shildon museum, says Locomotion No.1 ran the first passenger service on the brand-new line on 27 September 1825.

### Is there a classroom in Durham or Darlington?

Not in either town, or anywhere else. We teach over live video only, which means a Seaham learner and a Newton Aycliffe learner can be classmates without leaving home.

### What ages do you teach?

Six to sixty-seven. Block coding for young children, typed Python from around ten, GCSE computing and algorithms for teenagers, and databases or Python for adults. The free lesson finds the level.

### Do you teach SQL and databases to adults?

Yes. The adult MySQL course covers SQL, database design, stored procedures, transactions and Python integration.

### What does it cost?

The first lesson has no charge. Carrying on costs USD 100 a month in a group or USD 150 a month one to one, with nothing to pay to register and no minimum period.

### When are school holidays here?

Each council and academy trust sets its own dates. Tell us your school’s dates and we pause lessons to match.

More of the North East

## Pages near County Durham

City pages for [Durham](/best-coding-class-in-durham) and [Sunderland](/best-coding-class-in-sunderland) each have their own project, and [Cumbria](/coding-classes-in-cumbria) lies over the Pennines. The [UK hub](/coding-classes-in-united-kingdom) has everything else.

Book the free class[Book a priority demo](/book-demo)[WhatsApp us](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20lesson%20for%20a%20learner%20in%20County%20Durham.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/coding-classes-in-county-durham*
