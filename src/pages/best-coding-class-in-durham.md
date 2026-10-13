---
title: "Best Coding Classes in Durham | Modern Age Coders"
description: "Live online coding, Python, AI and maths lessons for Durham learners aged 6 to 67, from Gilesgate and Framwellgate Moor to Belmont. Your first lesson is free."
canonical: https://learn.modernagecoders.com/best-coding-class-in-durham
source: src/pages/best-coding-class-in-durham.html
---
> Live online coding, Python, AI and maths lessons for Durham learners aged 6 to 67, from Gilesgate and Framwellgate Moor to Belmont. Your first lesson is free.

Skip to contentCourse picks for Durham

## Four courses for the cathedral city

Pick by what the learner already enjoys; the level is settled in the free live lesson that opens every course, which never needs a card to book.

[![Scratch Coding for Kids course thumbnail](/images/scratch-kids.webp)Ages 6 to 12Scratch Coding for KidsBlock programming for younger children, where sprites move across a grid step by step, much as a line is drawn on a screen.See the syllabus](/courses/scratch-programming-complete-course)[![Python for Teens course thumbnail](/images/python-teens.webp)Ages 13 to 18Python for TeensPython from a first program to full projects, the base a teenager needs to load a grid of heights and trace lines across it.See the syllabus](/courses/python-complete-masterclass-teens)[![Data Science for Teens course thumbnail](/images/data-science-teens.webp)Ages 13 to 18Data Science for TeensWorking with real data files in Python, including checking a result by computing it two different ways.See the syllabus](/courses/data-science-course-for-teens-python-data)[![Python Automation Course course thumbnail](/images/python-college.webp)University and adultPython Automation CoursePython for adults whose work involves maps, sites and plans, from reading open data to answering a clear question with it.See the syllabus](/courses/python-ai-automation-masterclass-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Durham today

## A county of half a million and a city of students

Census 2021 figures from the Office for National Statistics on Nomis, for the County Durham unitary authority and for four middle-layer areas around the city, named by the House of Commons Library.

| Area | Usual residents | Students among those aged 5 and over | Residents per square kilometre |
| --- | --- | --- | --- |
| County Durham | 522,068 | 19.9% | 234.5 |
| Durham City | 12,666 | 79.9% | 1,787.9 |
| Gilesgate and Old Durham | 6,746 | 35.6% | 2,086.8 |
| Aykley Heads, Neville's Cross and Langley Moor | 13,300 | 40.1% | 1,052.6 |
| Pity Me and Framwellgate Moor | 6,194 | 20.0% | 2,439.6 |
| England | 56,490,048 | 20.4% | 433.5 |

### Colleges on the map

In the Durham City area, 6,315 of the 12,666 residents lived in communal establishments such as college accommodation, and 42.2% were aged 20 to 24.

### A spread-out county

County Durham as a whole had 234.5 residents per square kilometre, well under England's 433.5, with 508,762 people living in households.

### Close to the national mix

Across the county, 19.9% of residents aged five and over were in study, near England's 20.4%; the city centre is the exception, not the rule.

Our Durham learners reflect that range. A Year 3 child in Newton Hall might be making a first animation, a Year 10 student in Gilesgate choosing GCSE Computer Science projects, and an adult in Framwellgate Moor learning Python for work, each in a small group at the right level.

The peninsula

## A tower rebuilt after lightning, and a battle watched from the top

From the Durham World Heritage Site's own pages and Historic England's open listing data.

### 1346

Medieval sources, the World Heritage Site says, record that the monks watched the Battle of Neville's Cross from the top of the central tower and began to sing when they saw the Scots defeated.

### 1429 and after

The central tower was struck by lightning and repaired in 1429, then struck again thirty years later. A new tower was built between 1465 and 1474, and a second storey followed ten years later.

### 1986

UNESCO inscribed Durham Castle and Cathedral on the World Heritage List. Historic England lists the Cathedral at Grade I, and records a registered battlefield for 1346 on the city's western edge.

The dates matter for our project. The tower visitors climb today was built more than a century after the battle, so the tower the monks stood on in 1346 was an earlier one, and we could not find its height in any source we were able to check. That is why the project asks how high an eye would need to be, rather than pretending to know. The site also recalls that, for many years afterwards, monks climbed the tower on 17 October to sing to the north, south and east, with St Cuthbert's shrine still at the heart of the cathedral below.

Where the heights come from

Ordnance Survey Terrain 50 is a free grid of ground heights across Great Britain, one value for every 50 metre square. It shows bare ground, with no buildings or trees, which suits a question about 1346 better than a modern surface would, though it smooths the steep banks of the peninsula.

Signature project

## Could the monks have seen the Battle of Neville's Cross?

Bresenham's algorithm picks the grid cells a straight line passes through using only whole-number steps. Line of sight then asks whether any cell along the way rises above the line from eye to target.

| Eye height above the cathedral's ground | Cells in view | Share |
| --- | --- | --- |
| 0 to 30 metres | 0 | 0% |
| 40 metres | 3 | 2% |
| 50 metres | 4 | 3% |
| 60 metres | 16 | 10% |
| 70 metres | 37 | 24% |
| Any height up to 300 metres | 143 | 91% |

### 1. Draw the line

From the cathedral cell to the monument cell, Bresenham visits 23 squares, updating a running error term with whole-number additions and never touching a fraction. The heights dip to 29.9 metres where the line crosses the Wear.

### 2. Test the slope

Work out the angle from the eye to the target, then check each square in between. If any square's angle is steeper, the target is hidden. At 1,110 metres, the curve of the Earth changes heights by only 0.08 metres.

### 3. Find the height

Visibility only improves as the eye rises, so bisection can find the lowest eye that works: 10.4 metres for the monument, from 32.2 metres to well over 85.2 metres for the battlefield squares.

### A story the terrain neither proves nor rules out

The monument itself is easy to see, but the registered battlefield lies beyond rising ground as seen from the cathedral, and even from 70 metres most of it stays hidden. That does not mean the chroniclers were wrong. Fighting moves, the registered boundary is a modern judgement, and a person 1.7 metres tall is only one choice of target. What the model does show is exactly which assumptions the story depends on, and that is the most useful thing a model can do.

We checked the method as well as the answer. Sampling each line every 5 metres with smoothly interpolated heights, instead of Bresenham's whole squares, gave the same verdict for all 157 battlefield cells at 20 and 40 metres. Widening the question to a full viewshed, every square within 5 kilometres, shows the cost of the simple approach: 1,854,044 square visits for one eye height, with 6.3% of the area in view from the ground, 40.4% from 40 metres and 65.1% from 70 metres.

Line of sight in practice

## Five checks before trusting a visibility map

Practised on Neville's Cross, then used for phone masts, wind farm planning, security cameras, games and flight paths.

| Check | For the 1346 question | If it is skipped |
| --- | --- | --- |
| What surface? | Bare ground, no buildings or trees | A modern town hiding a medieval view |
| How fine a grid? | 50 metre squares, steep banks smoothed | Cliffs turned into slopes without warning |
| Where exactly is the eye? | The listed point, at stated heights | One precise answer from an unknown height |
| What counts as seen? | A person 1.7 metres tall | Ground level targets, which hide far more easily |
| Does the method agree with another? | Bresenham against 5 metre sampling | A grid artefact reported as history |

The third row changes everything. Report one height and the page would announce either that the monks saw the battle or that they could not, and both would sound certain. Reporting the answer across a range of heights, and saying plainly that the 1346 tower's height is unknown, is less dramatic and much more honest.

### Younger learners

Drawing lines on squared paper square by square, then standing toy figures behind blocks to see who can spot whom.

### Teenagers

Bresenham in Python, a height grid from Ordnance Survey, a line of sight test, bisection for the lowest eye, and a second method to check the first.

### Adults

Visibility and terrain questions at work, with the surface, grid size and assumptions written down beside every map.

We are not connected with Durham Cathedral, Durham University, the Durham World Heritage Site, Historic England, Ordnance Survey or Durham County Council. The height grid, listing records and census tables are open data; the lines, heights and viewsheds on this page are our own calculations.

Learning ladder

## From squared paper to a viewshed

Treat the age bands as a guide; the free lesson decides where each learner begins.

Ages 6 to 10

### Lines on a grid

Colouring the squares a straight line passes through, and hiding figures behind blocks to test who can see whom.

[Scratch Coding for Kids](/courses/scratch-programming-complete-course)[Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)Ages 11 to 13

### Grids in code

Storing a small map of heights as a list of lists in Python and finding the tallest square along a row.

[Python and AI for Kids](/courses/python-ai-kids-masterclass)[Maths Through Coding](/courses/maths-through-coding)Ages 14 to 18

### Bresenham and sightlines

Writing Bresenham's algorithm, testing line of sight on real Ordnance Survey heights and finding the lowest eye by bisection.

[Python for Teens](/courses/python-complete-masterclass-teens)[Data Science for Teens](/courses/data-science-course-for-teens-python-data)Ages 18 to 67

### Terrain questions at work

Answering visibility and site questions with open height data, and stating every assumption alongside the result.

[Python Automation Course](/courses/python-ai-automation-masterclass-college)[Data Science Course](/courses/data-science-complete-masterclass-college)Coding and AI

## AI can draw a map in seconds. Why should a Durham teenager trace a line through one?

Because the useful question is not what the answer is, but what it depends on.

Ask an AI tool whether the monks could see the battle and it will probably give a confident yes or no. A learner who has traced the line square by square knows the answer depends on the tower's height, the grid, the surface and what counts as seen, and can ask the tool the questions that expose a guess.

Bresenham's algorithm is also a reminder that fast, simple code still runs everywhere. It was designed for drawing lines with whole numbers, and the same idea of stepping through a grid sits behind graphics, games and robot navigation. Building it by hand makes the grid underneath modern tools visible.

So a Durham teenager should keep learning to code in 2026, within sight of a tower rebuilt after lightning: machines will answer quickly, but someone has to know which assumptions the answer is standing on. The longer argument is in [why coding is worth learning in 2026](/blog/is-coding-worth-learning-2026).

Delivery

## Gilesgate, Belmont or Brandon, and never a trip to the peninsula

The city spreads from the colleges by the river to the estates and villages on the hills around it. Online, every one of them is next door to the lesson.

### Hills and river

A learner in Sherburn and another in Ushaw Moor can share one class without crossing the Wear or finding a bus into town.

### English school stages

We teach to the stages used in County Durham schools, Reception and Key Stages 1 to 4 through to GCSE and A level, entirely in English.

### A lesson with substance

The free session works through a real task and closes with a recommended level, course and weekly slot. We do not ask for card details.

### Stage, not postcode

Groups hold fifteen to twenty learners at the same stage, from Durham, the rest of the UK and overseas, so every level has sensible times.

### Two lessons a week

Two regular lessons each week, around eight a month, with half terms and exam seasons planned with the teacher in advance.

### An evening here, late there

A 4.30 pm lesson in Durham starts at 9 pm in India while the UK is on summer time and at 10 pm in winter, because India keeps one time zone all year; our teachers work their evenings around UK families.

Across the North East

Families in Chester-le-Street, Spennymoor, Bishop Auckland or Consett join the same live groups, since every class is online and arranged by level.

Fees

## Durham lesson fees

The first lesson is free; after that there is one monthly fee.

First class**USD 0**

A full lesson with nothing to pay, ending with advice on level, course and a weekly slot.

Group tuition**USD 100**

Roughly eight live lessons a month, in a group of fifteen to twenty learners at one stage.

Private tuition**USD 150**

Roughly eight live lessons a month, with the teacher working with your learner alone.

Whether you live in Newton Hall or Neville's Cross, the fee is set in US dollars, as it is for every family outside India, and the site shows no pound prices. Nothing is billed until after the free lesson, when the course and weekly slot are agreed; pauses, missed lessons and changing between group and private teaching are all set out on the pricing page.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20please%20could%20we%20book%20a%20free%20coding%20lesson%20for%20a%20learner%20in%20Durham%3F)Reviews

## Six Google reviews from families, word for word

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

## Book a free lesson for a Durham learner

The first task depends on the learner: a grid-drawing game for a young child, a short Python program that finds the highest square on a map for a beginner, or Ordnance Survey heights and Bresenham's line for a teenager ready for real data.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Durham one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20please%20could%20we%20book%20a%20free%20coding%20lesson%20for%20a%20learner%20in%20Durham%3F)

Submitted details are used for placement and follow-up.

FAQ

## Durham coding class questions

The questions we hear most often from Durham families.

### How many people live in County Durham?

The 2021 census counted 522,068 usual residents in the County Durham unitary authority, 508,762 of them in households. The middle-layer area the House of Commons Library names Durham City had 12,666.

### Why is the Durham City area so different from the county?

It is where many students live: 10,073 of its 12,608 residents aged five and over were studying in 2021 (79.9%, against 19.9% for the county), and 6,315 residents lived in communal establishments such as college accommodation.

### What is Bresenham's line algorithm?

A method published by Jack Bresenham in 1965 for choosing which grid squares a straight line passes through using only whole-number addition and comparison. It was designed to control a digital plotter, later drew lines on screens, and is used here to walk across a grid of heights.

### Could the monks see the Battle of Neville's Cross?

It depends on assumptions. On Ordnance Survey Terrain 50, a person at the Neville's Cross monument is visible from 10.4 metres above the cathedral's ground, but most of the registered battlefield needs an eye far higher, and the height of the 1346 tower is unknown.

### Where do the heights and battlefield come from?

The heights are Ordnance Survey Terrain 50, free open data on a 50 metre grid. The Cathedral's position, the monument and the registered battlefield boundary come from Historic England's open listing data.

### What happened to the cathedral's central tower?

The Durham World Heritage Site says it was struck by lightning and repaired in 1429, struck again thirty years later, and rebuilt between 1465 and 1474, with a second storey added ten years later. We are not connected with the Cathedral or the World Heritage Site.

### What times do Durham lessons run?

Durham families usually go for a slot after school, a weekday evening or a weekend morning, and we agree the time in the free lesson. India runs four and a half hours ahead of the UK in summer and five and a half in winter.

### Do you have a centre in Durham?

No. We have no Durham centre and no premises anywhere in the UK, because every lesson is live online. Learners need a computer with sound and a stable connection, and the number you will call is Indian.

### How much are lessons for a Durham learner?

The first lesson is free. Then a group place is USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners; one-to-one lessons on the same timetable are USD 150 a month. The course, format and time are agreed before anything is charged.

### How do you decide which group a learner joins?

By level, pace and aims rather than age or address, so each group has fifteen to twenty learners at one stage. If no group fits the learner's timetable, one-to-one lessons are available instead.

Explore England and the UK

## The North East and beyond

Down the road, the [Sunderland page](/best-coding-class-in-sunderland) builds a quadtree so a search can skip most of the map, and [Newcastle upon Tyne](/best-coding-class-in-newcastle-upon-tyne) colours 26 wards with four colours. Further south, [Hull](/best-coding-class-in-hull) floods a grid of heights cell by cell. The [England guide](/coding-and-ai-classes-in-england) sets out the school stages, and every other city is linked from the [UK coding page](/coding-classes-in-united-kingdom).

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20please%20could%20we%20book%20a%20free%20coding%20lesson%20for%20a%20learner%20in%20Durham%3F)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/best-coding-class-in-durham*
