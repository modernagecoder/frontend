---
title: "Coding Classes in Aberdeenshire | Live Online, Ages 6 to 67"
description: "Live online coding, Python and maths classes across Aberdeenshire, from Peterhead, Inverurie and Fraserburgh to Westhill, Stonehaven, Ellon, Banchory and Huntly."
canonical: https://learn.modernagecoders.com/coding-classes-in-aberdeenshire
source: src/pages/coding-classes-in-aberdeenshire.html
---
> Live online coding, Python and maths classes across Aberdeenshire, from Peterhead, Inverurie and Fraserburgh to Westhill, Stonehaven, Ellon, Banchory and Huntly.

Skip to contentCourses for Aberdeenshire

## Where Aberdeenshire learners begin

A P4 pupil in Ellon who loves organising games, an S2 in Inverurie who likes puzzles with rules, an S5 in Stonehaven working towards Higher Computing Science, and an adult in Peterhead learning to program. Each starts with a free lesson.

[![Problem Solving and Computational Thinking for Kids course thumbnail](/images/problem-solving-kids.webp)Ages 7 to 12Problem Solving and Computational Thinking for KidsLogic puzzles and computational thinking, with step-by-step strategies and real-world challenges.See the syllabus](/courses/problem-solving-and-computational-thinking-for-kids)[![Python and AI for Kids course thumbnail](/images/python-kids.webp)Ages 8 to 12Python and AI for KidsTyped Python for children, with games, puzzles and first steps with data and AI.See the syllabus](/courses/python-ai-kids-masterclass)[![Problem Solving for Teens course thumbnail](/images/problem-solving-teens.webp)Ages 13 to 18Problem Solving for TeensAlgorithms for teenagers, where every method is written, tested and judged by what it costs.See the syllabus](/courses/problem-solving-dsa-masterclass-teens)[![Python Masterclass course thumbnail](/images/python-college.webp)AdultsPython MasterclassPython from zero for adults, building towards programs that organise real work.See the syllabus](/courses/python-programming-masterclass-zero-to-advanced-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Aberdeenshire in figures

## About 263,900 people, from the coast to the Cairngorms

The council figures are Scotland's Census 2022 first results, which the National Records of Scotland rounds to the nearest hundred. Town figures are NRS locality estimates for mid-2020, a different source and year.

| Locality | Residents | Locality | Residents |
| --- | --- | --- | --- |
| Peterhead | 19,060 | Portlethen | 8,940 |
| Inverurie | 14,660 | Banchory | 7,440 |
| Fraserburgh | 12,570 | Turriff | 4,700 |
| Westhill | 12,110 | Kintore | 4,700 |
| Stonehaven | 11,150 | Huntly | 4,550 |
| Ellon | 10,070 | Banff | 4,000 |

Aberdeenshire is spread thin: no town reaches twenty thousand, and adding up all 62 of its localities gives about 188,000, so a large share of the county lives in villages and the countryside around them. By our addition of the census age groups, about 17 per cent of residents are under 15, compared with about 15 per cent for Scotland. Kemnay, Macduff, Laurencekirk, Oldmeldrum, Blackburn and Newtonhill each have around three to four thousand people. Aberdeenshire Council sets school term dates, which we did not read; lesson breaks are arranged with each family.

### Aberdeen is next door

The city has its own council and its own page: [Aberdeen](/best-coding-class-in-aberdeen). For Scottish exams, see our [National 5 Computing Science](/national-5-computing-science-help) and [Higher Computing Science](/higher-computing-science-help) pages.

The Aberdeenshire project

## Every team against every other, exactly once

The circle method, a checker that nearly fooled us, and a fairer schedule.

Imagine eight teams in a contest where each pair meets once. That is 28 contests, and with four arenas running at once they could fit into seven rounds. The circle method finds such a schedule. Write the teams round a circle, keep team 1 fixed, pair them across the circle for round one, then rotate everyone else one place and pair them again. After seven rotations every pair has met exactly once. The learner codes it with a list and a slice, and then writes the part that matters more: a checker that confirms every pair appears once and no team is in two contests in the same round.

| Teams | Rounds | Contests | Breaks, simple version | Breaks, alternating ends |
| --- | --- | --- | --- | --- |
| 6 | 5 | 15 | 16 | 4 |
| 7 (one sits out each round) | 7 | 21 | 32 | 5 |
| 8 | 7 | 28 | 36 | 6 |
| 10 | 9 | 45 | 64 | 8 |
| 12 | 11 | 66 | 100 | 10 |

An odd number of teams needs a trick: add a pretend team called "rest", and whoever is paired with it sits that round out. With seven teams that gives seven rounds, each with one team resting. Here our own first checker failed, reporting that the seven-team schedule was broken. The schedule was fine; the checker had counted the resting team as if it were competing. Testing the tests is part of the job.

Now fairness. In many contests, teams start from one end of the arena or the other, and it is fairer if nobody is stuck at the same end round after round. Scheduling experts call it a break when a team has the same end twice running. The simple circle method gives eight teams 36 breaks; swapping the ends in alternate rounds cuts that to 6, without changing who meets whom. The same schedule becomes much fairer with one extra line of code.

### Ages 8 to 11

Write four team names on cards round a table, pair across, then move every card but one a place along, and check nobody meets twice.

### Ages 11 to 15

Code the circle method in Python for any even number of teams and print each round.

### Ages 15 and up

Add byes for odd numbers, write a checker, count breaks, and invent a rule that reduces them.

### What is the Gathering's and what is ours

The dates and history come from the Braemar Gathering's own website. The teams, contests and schedules are invented for teaching and do not describe how the Gathering organises any event.

Why Braemar

## A Gathering on the first Saturday of September

The Aberdeenshire link, in the Gathering's own words.

| Point | The Gathering says |
| --- | --- |
| When | Held on the first Saturday of September each year. |
| Since | Run in its present form since 1832. |
| The first meeting | On 20 July 1832, at a General Meeting held in Braemar Castle. |
| Next Gathering | Saturday 4 September 2027. |
| Where | Princess Royal and Duke of Fife Memorial Park, Braemar, AB35 5YX. |

Round robins are everywhere: school leagues, chess tournaments, sports fixtures, and in computing, where a processor shares its time by giving each task a turn in rotation. The circle method is a small, elegant idea that works for any even number, and a checker turns "I think it works" into "I know it works". An Aberdeenshire student who has built both, and then improved the fairness, has done real algorithm design from start to finish.

Modern Age Coders has no connection with the Braemar Gathering or Aberdeenshire Council. The Gathering's facts are its own; our schedules and any mistakes are ours.

Nearby pages

[Aberdeen](/best-coding-class-in-aberdeen) is surrounded by Aberdeenshire; [Inverness](/best-coding-class-in-inverness) is west and [Dundee](/best-coding-class-in-dundee) south. The [Scotland](/coding-and-ai-classes-in-scotland) page lists every council.

The path

## From team games to algorithm design

The free lesson places each learner. The school year is a hint; ability decides.

P1 to P4

### Games with rules

Block coding games where turns and rules keep things fair.

[Coding for Kids](/courses/kids-coding-blocks-masterclass)[Scratch Coding for Kids](/courses/scratch-programming-complete-course)P5 to S2

### Puzzles and Python

Logic puzzles and typed Python that organise lists, turns and teams.

[Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)[Python and AI for Kids](/courses/python-ai-kids-masterclass)S3 to S6

### Algorithms that work

Algorithms and full Python, useful for National 5, Higher and beyond, with testing built in.

[Problem Solving for Teens](/courses/problem-solving-dsa-masterclass-teens)[Python for Teens](/courses/python-complete-masterclass-teens)Adults

### Programs for real work

Python and data structures for adults, from basics to scheduling and automation.

[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)[Data Structures & Algorithms Course](/courses/data-structures-algorithms-masterclass-college)AI and checking

## An AI can write a fixture list. Who checks that every team meets every other?

A schedule that looks right can still be wrong, and so can the test for it.

Ask an assistant for a round-robin fixture list and it will usually produce one quickly. It may be perfect, or it may quietly repeat a pairing, drop one, or give a team two contests in the same round, and a long list is hard to check by eye. The only reliable way is a small program that checks every pair and every round.

Our own first checker was wrong, which is the other half of the lesson: tests need testing too. An Aberdeenshire student who has written both the schedule and the checker, and caught a bug in the checker, knows how to trust an AI's output properly: by verifying it.

Learning to code in 2026 gives an Aberdeenshire teenager the means to check the work an AI hands back. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

How lessons run

## Deeside, Donside and the Buchan coast, all online

Aberdeenshire covers a great deal of countryside, and for many homes the nearest club at the right level is a long way off. Online lessons make that irrelevant.

### At home, anywhere

A farmhouse near Turriff, a house in Westhill, a flat in Peterhead. The pupil types and runs the code, and the teacher sees the same screen and guides.

### Scottish school stages

Primary 1 to 7, S1 to S6, then National 5, Higher and Advanced Higher: lessons use the names Aberdeenshire schools use, and teaching is in English.

### A free first lesson

A real lesson, then honest advice on level and course. No card details are asked for.

### A group that matches

Classes of fifteen to twenty are built around a shared stage, not a shared postcode.

### Term and holiday rhythm

Most pupils have two lessons a week in term and pause when the school holidays arrive.

### Scottish clock, not ours

A lesson booked for 5pm in Aberdeenshire stays at 5pm UK time in March and October alike; our teachers, working on India time, move instead.

Why groups follow level

In a council area of small towns and villages, five learners at one stage free on the same evening rarely live near each other. Level-based groups let a learner in Banff or Laurencekirk join a class that fits.

Fees

## Fees in Aberdeenshire

Fraserburgh or Banchory, the fee is the same, as it is in every country we teach apart from India.

First class**USD 0**

A complete lesson of genuine work, then a recommended level and course.

Group tuition**USD 100**

About eight lessons a month with fifteen to twenty learners at one level.

Private tuition**USD 150**

About eight lessons a month, one-to-one.

We charge in US dollars and publish no pound prices. No bill arrives until the free lesson has settled a course and a weekly slot; the pricing page covers holidays, missed lessons and switching format.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Aberdeenshire%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)Reviews

## Google reviews from families

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

## Book a free Aberdeenshire lesson

Let us know the pupil's age or stage, P1 to S6 or adult, and one or two interests. A first lesson could be a Scratch team game, a first Python list, or the Braemar schedule on this page.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Aberdeenshire one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Aberdeenshire%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)

Submitted details are used for placement and follow-up.

FAQ

## Aberdeenshire questions

The council area, the scheduling project and practical details.

### How many people live in Aberdeenshire?

Scotland's Census 2022 counted about 263,900 usual residents in Aberdeenshire, rounded to the nearest hundred by the National Records of Scotland, in about 115,800 households.

### What are the largest towns in Aberdeenshire?

By NRS mid-2020 locality estimates: Peterhead 19,060, Inverurie 14,660, Fraserburgh 12,570, Westhill 12,110 and Stonehaven 11,150.

### What is the Braemar project?

Learners build a round-robin schedule with the circle method in Python, write a checker that confirms every pair meets once, handle an odd number of teams with rest rounds, and reduce breaks from 36 to 6 for eight teams.

### What is a round robin?

A competition or schedule in which every participant meets every other exactly once. In computing the same word describes sharing time by giving each task a turn in rotation.

### When is the Braemar Gathering?

Its website says it is held on the first Saturday of September; the next is on Saturday 4 September 2027.

### Are lessons held in Aberdeenshire?

Not in person. Every lesson is live online, so learners join from anywhere in the council area.

### Do you follow the Scottish curriculum?

Lessons use Scottish stages and qualification names, and our National 5 and Higher Computing Science pages cover exam preparation. We support learning; we do not promise results.

### Who can join, by age?

From 6 to 67. Young pupils start with blocks and games, Python usually begins around P6 or P7, secondary pupils move on to algorithms and exam courses, and adults learn Python.

### How much are lessons?

The first lesson is free. From the second lesson a group place costs USD 100 monthly and private teaching USD 150 monthly. Nobody pays a joining fee.

### Do you pause for Aberdeenshire school holidays?

Yes, if you like. Aberdeenshire Council fixes the term dates, and once you share them we build lesson breaks to match.

Close by

## Pages near Aberdeenshire

See [Aberdeen](/best-coding-class-in-aberdeen), [Inverness](/best-coding-class-in-inverness) and [Dundee](/best-coding-class-in-dundee), or the [Scotland](/coding-and-ai-classes-in-scotland) page for every council. The [UK hub](/coding-classes-in-united-kingdom) covers the rest.

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Aberdeenshire%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/coding-classes-in-aberdeenshire*
