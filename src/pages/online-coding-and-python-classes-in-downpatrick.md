---
title: "Online Coding and Python Classes in Downpatrick | AI, 6 to 67"
description: "Live online coding, Python, AI and vibe coding lessons for Downpatrick, Killyleagh, Ardglass and Quoile learners in County Down, aged 6 to 67. First lesson free."
canonical: https://learn.modernagecoders.com/online-coding-and-python-classes-in-downpatrick
source: src/pages/online-coding-and-python-classes-in-downpatrick.html
---
> Downpatrick town counted 11,545 residents in NISRA's 2021 census tables, with 21,916 across its electoral area in the Newry, Mourne and Down district. Cathedral and Quoile are two of the census wards at the town, while Killyleagh and Ardglass are among the smaller settlements elsewhere in the district. From primary school up to age 67, learners study coding, Python, AI, vibe coding and maths on live video with tutors based in India, in one-to-one lessons or a group of five to ten who share a stage. Clear geometric and logical thinking comes first, so learners can check a program's answer rather than trust it. Lesson one costs nothing, and we close it by naming the course that fits. In the Downpatrick project, Python finds the smallest circle that holds all 40 mapped shops, then shows why the same clever algorithm can run several times slower on sorted input. Staying on means USD 100 per month for class lessons, or USD 150 per month with a tutor to yourself.

[Home](/) / [United Kingdom](/coding-classes-in-united-kingdom) / [Northern Ireland](/coding-and-ai-classes-in-northern-ireland) / Downpatrick

Downpatrick, County Down, Northern Ireland / Live online

# Online coding and Python classes in Downpatrick

**Which are the best online coding and Python classes in Downpatrick?** Downpatrick town counted 11,545 residents in NISRA's 2021 census tables, with 21,916 across its electoral area in the Newry, Mourne and Down district. Cathedral and Quoile are two of the census wards at the town, while Killyleagh and Ardglass are among the smaller settlements elsewhere in the district. From primary school up to age 67, learners study coding, Python, AI, vibe coding and maths on live video with tutors based in India, in one-to-one lessons or a group of five to ten who share a stage. Clear geometric and logical thinking comes first, so learners can check a program's answer rather than trust it. Lesson one costs nothing, and we close it by naming the course that fits. In the Downpatrick project, Python finds the smallest circle that holds all 40 mapped shops, then shows why the same clever algorithm can run several times slower on sorted input. Staying on means USD 100 per month for class lessons, or USD 150 per month with a tutor to yourself.

Here is a question that sounds simple: what is the smallest circle that contains every point in a set? Delivery planners ask it about customers, phone engineers about masts, and game programmers about collision boxes. The obvious approaches, a circle around the average point or around the middle of the bounding box, are close but not right. The exact answer comes from an elegant algorithm published by Emo Welzl in 1991, which adds points one at a time and only rebuilds the circle when a point falls outside it. It is fast on average, provided the points arrive in random order. This project runs it in Python on the shops and buildings of Downpatrick as mapped on OpenStreetMap.

Facts last verified 29 September 2026. Teaching is online; no Downpatrick branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Downpatrick starting courses in geometry, Python and AI

Choose by age and interest. Each course opens with a live class that is free, and booking takes no card.

- [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids) (Ages 7 to 12): The how-to-think course: shapes, distances and finding the tightest fit.
- [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev) (Ages 8 to 12): Scratch games that the learner plans, an AI helps build and the learner then tests hard.
- [Python for Teens](/courses/python-complete-masterclass-teens) (Ages 13 to 17): Python from first programs to geometry and algorithms, including the Downpatrick circle.
- [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college) (Students and adults): Python for data, algorithms, randomisation and AI agents.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Downpatrick, Quoile, Killyleagh and Ardglass

NISRA figures for the town, its electoral area and the district, with nearby settlements and wards.

**People usually resident in 2021, from NISRA table MS-A01**

| Place | NISRA geography | Residents |
|---|---|---|
| Downpatrick | Settlement | 11,545 |
| Downpatrick | District electoral area | 21,916 |
| Killyleagh | Settlement | 2,787 |
| Ardglass | Settlement | 1,761 |

Each figure is a separate NISRA count for a different kind of area, so none is added to another; the whole Newry, Mourne and Down district held 182,074. Cathedral ward (4,217 residents) and Quoile ward (4,172) are census wards at Downpatrick. Lessons follow the Northern Ireland Curriculum year structure used in County Down, and exam support is matched to CCEA specifications. Send us your holiday weeks and lessons will skip them.

### County Down neighbours and CCEA

See [Newry](/best-coding-class-in-newry), [Northern Ireland](/coding-and-ai-classes-in-northern-ireland) and [CCEA GCSE Maths help](/ccea-gcse-maths-help). Why thinking comes before tools is explained on [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

## The smallest circle round every Downpatrick shop: Welzl's algorithm in Python

Forty shops, one exact circle, two tempting shortcuts, and a test of what input order does to speed.

OpenStreetMap supplies 40 shops inside a rectangle over Downpatrick; where a shop is drawn as an outline, its centre stands in for it. Positions are converted to metres. Welzl's algorithm then builds the smallest enclosing circle: it takes the shops one at a time, and whenever a shop falls outside the current circle, it rebuilds the circle so that this shop sits on its edge. The final circle always rests on two or three points, its support points; every other shop could move a little without changing it.

**Circles holding all 40 mapped shops in Downpatrick, our Python run on OpenStreetMap data**

| Method | Radius | Point checks |
|---|---|---|
| Welzl's algorithm (exact) | 1,834.3 m | 229 |
| Try every circle through 2 or 3 shops | 1,834.3 m | 15,409 |
| Centre on the middle of the shops' box | 1,855.9 m | Not exact |
| Centre on the average shop position | 2,338.7 m | Not exact |

Here the tightest circle rests on just two shops, the two farthest apart, and the brute-force search agrees at 1,834.3 m after 15,409 checks against Welzl's 229. The box-centre shortcut happens to come within 22 m, but the average-position shortcut needs a radius 504 m larger, because the average is pulled towards wherever shops cluster: the true centre is 509.4 m away from it. The second experiment uses all 5,865 building centres in the rectangle. With the buildings shuffled, the algorithm needed a median of about 50,200 checks over 20 shuffles. Fed them sorted from west to east, it needed 239,155, and sorted east to west, 205,503. Sorted input keeps putting the next point outside the circle, forcing rebuild after rebuild, which is why the algorithm shuffles first.

### P5 to P7

Pin coins on a map and find the smallest paper circle that covers them all; notice which coins touch the edge.

### Years 8 to 10

Compute the average-centre circle for Downpatrick's shops in Python and measure how much too big it is.

### Year 11 and up

Code Welzl's algorithm, count its checks on shuffled and sorted input, and compare with brute force.

### OpenStreetMap places, our circles

Shops and buildings are from OpenStreetMap and its contributors under the Open Database Licence. The rectangle, the circles and every count are our own work; shops are not named.

## What this teaches about vibe coding and AI agents

Correct is not the same as quick; the input decides.

**From the Downpatrick circle to coding with AI**

| In the geometry project | When AI writes code for you |
|---|---|
| Welzl needed 229 checks, brute force 15,409 | A known algorithm can beat a naive loop by miles |
| The average-centre circle was 504 m too wide | An intuitive shortcut can be quietly wrong |
| Two shops fixed the whole circle | A few points can decide the answer |
| Sorted input took several times the checks | Test code on awkward inputs, not just tidy ones |
| Shuffling first protected the speed | Randomness can be a deliberate design choice |

Ask an AI assistant for "the smallest circle containing these points" and it may centre a circle on the average and call it done, which our Downpatrick shops show can be 504 m too wide. In vibe coding the learner describes what the program must do and the AI writes the code; our Downpatrick learners then check the result against a brute-force search on a small set and time it on sorted input. AI agents that crunch data for you will not run those checks unless told. We move learners on to agent building once their Python is steady, usually around Year 12 or as adults, and Copilot Studio agents are only taught one-to-one. Two pages say more: [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk), and the [agents route for UK students](/ai-agents-course-for-students-uk).

OpenStreetMap and NISRA publish the open data this page relies on and have no link with Modern Age Coders; the circles and any errors in them are ours.

## From coins on a map to randomised algorithms

School year is a first guide; the free lesson shows the real starting point.

- **P1 to P7: How to think** Shapes, distances and the tightest fit. [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **P5 to Year 9: Vibe coding for kids** Games and small apps built with AI help and tested by the learner. [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev), [Python and AI for Kids](/courses/python-ai-kids-masterclass)
- **Years 10 to 14: Python and algorithms** Geometry, recursion and algorithm analysis alongside CCEA GCSE and A level. [Python for Teens](/courses/python-complete-masterclass-teens), [Data Structures & Algorithms Course](/courses/data-structures-algorithms-masterclass-college)
- **Adults: Python for data and agents** Algorithms, data and AI agents built in Python. [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college), [Generative AI Course](/courses/complete-generative-ai-masterclass-college)

## How do you find the smallest circle that contains a set of points?

Use Welzl's algorithm: add the points in random order and, whenever one falls outside the current circle, rebuild the circle with that point on its edge; the result rests on just two or three points and takes expected linear time.

For Downpatrick's 40 mapped shops it found a 1,834.3 m circle with 229 point checks, where trying every candidate circle took 15,409 and a circle centred on the average shop needed 2,338.7 m.

Learners who have run it ask of any code an AI writes: is this the exact answer, and how does it behave on the worst kind of input?

A Downpatrick teenager who can test an algorithm on its worst input will not be fooled by code that only works on tidy examples, and Python is where that habit is formed. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Taught online across County Down

A computer, a camera and broadband that can hold a video call are all the equipment required.

- **Learner at the keyboard** The student writes and runs each step; our tutor follows on screen share and asks them to predict the result first.
- **Trial sets the starting topic** We see what the learner can already do and note any CCEA course ahead.
- **Free opening class** The first class is free and finishes with our course recommendation.
- **Level-matched groups** Classes hold five to ten learners drawn together by stage, not by town.
- **Twice weekly in term** School holidays off.
- **Fixed hour** When UK clocks change, our tutors shift so your slot stays the same.

**Why online** Five learners at one level, all free on the same evening, rarely live close together. Video makes the distance irrelevant.

## Downpatrick fees

Learners in Downpatrick pay our international rates, applied in every country except India.

- First class: USD 0. One complete free lesson, then a suggestion.
- Group tuition: USD 100 a month. Roughly eight live group lessons monthly.
- Private tuition: USD 150 a month. Roughly eight live one-to-one lessons monthly.

Downpatrick families see prices in US dollars only. Nothing is invoiced until after the trial, once a course and a regular slot are fixed; the pricing page handles breaks, missed sessions and format changes.

## Downpatrick questions

### What is the population of Downpatrick?

NISRA's Census 2021 counts 11,545 usual residents in the Downpatrick settlement and 21,916 in the Downpatrick district electoral area.

### Are online Python classes available in Downpatrick?

You can: lessons run over live video, so anyone 6 to 67 in Killyleagh, Ardglass or elsewhere in the district can join.

### What is Welzl's algorithm?

A randomised method for finding the smallest circle around a set of points. It adds points one at a time and rebuilds the circle only when a point falls outside, running in expected linear time.

### Why does input order matter for a randomised algorithm?

Its speed guarantee assumes random order. On sorted input, each new point tends to fall outside the circle, forcing repeated rebuilds; in our test, sorted building data took about four to five times as many checks as a typical shuffle.

### What does the Downpatrick project involve?

Finding the smallest circle round 40 mapped Downpatrick shops with Welzl's algorithm, comparing it with shortcuts and brute force, and timing it on 5,865 buildings in different orders.

### Is vibe coding included?

It is, for all ages: the learner sets out what the program must do, then checks and corrects what the AI writes.

### When can learners build AI agents?

Once Python feels natural, which is usually from Year 12 or in adulthood; Copilot Studio needs private lessons.

### Which CCEA subjects can you help with?

Yes, in Maths, Digital Technology and Software Systems Development, taught for understanding with no promised grades.

### What do lessons cost?

Free for the trial; afterwards USD 100 monthly as part of a class, USD 150 monthly one-to-one.

### Are lessons paused for holidays?

Yes, for school holidays; send the dates.

## Other pages across Northern Ireland

A different experiment on each: [Newry](/best-coding-class-in-newry) (an exact test on heritage records), [Lisburn](/best-coding-class-in-lisburn), [Belfast](/best-coding-class-in-belfast) and [Armagh](/best-coding-class-in-armagh). The [Northern Ireland page](/coding-and-ai-classes-in-northern-ireland) and the [UK hub](/coding-classes-in-united-kingdom) cover the rest.

## Contact

Book the free class on [https://learn.modernagecoders.com/online-coding-and-python-classes-in-downpatrick](https://learn.modernagecoders.com/online-coding-and-python-classes-in-downpatrick#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
