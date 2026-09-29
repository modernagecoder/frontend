---
title: "Online Coding and Python Classes in Musselburgh | AI, 6 to 67"
description: "Live online coding, Python, AI and vibe coding lessons for Musselburgh, Fisherrow, Inveresk and Wallyford learners aged 6 to 67, taught live. First lesson free."
canonical: https://learn.modernagecoders.com/online-coding-and-python-classes-in-musselburgh
source: src/pages/online-coding-and-python-classes-in-musselburgh.html
---
> East Lothian's largest locality is Musselburgh, put at 21,100 residents by National Records of Scotland for mid-2020. Fisherrow, Inveresk, Levenhall, Monktonhall, Stoneybank and Pinkie Braes are suburbs on record in the EH21 district, and Wallyford and Whitecraig are listed there as villages. Six-year-olds through to adults of 67 study coding, Python, AI, vibe coding and maths with an India-based tutor on a live video call, alone or with a handful of classmates at the same stage. We start from algorithmic thinking, so a learner knows what a program is doing before trusting its output. There is no charge for the first lesson, and we end it by naming a course. The Musselburgh project turns 120.5 km of mapped roads into a single table giving the shortest drive between every pair of 1,124 junctions. Afterwards a place in a class is USD 100 a month, and private tuition USD 150 a month.

[Home](/) / [United Kingdom](/coding-classes-in-united-kingdom) / [Scotland](/coding-and-ai-classes-in-scotland) / Musselburgh

Musselburgh, East Lothian, Scotland / Live online

# Online coding and Python classes in Musselburgh

**Which are the best online coding and Python classes in Musselburgh?** East Lothian's largest locality is Musselburgh, put at 21,100 residents by National Records of Scotland for mid-2020. Fisherrow, Inveresk, Levenhall, Monktonhall, Stoneybank and Pinkie Braes are suburbs on record in the EH21 district, and Wallyford and Whitecraig are listed there as villages. Six-year-olds through to adults of 67 study coding, Python, AI, vibe coding and maths with an India-based tutor on a live video call, alone or with a handful of classmates at the same stage. We start from algorithmic thinking, so a learner knows what a program is doing before trusting its output. There is no charge for the first lesson, and we end it by naming a course. The Musselburgh project turns 120.5 km of mapped roads into a single table giving the shortest drive between every pair of 1,124 junctions. Afterwards a place in a class is USD 100 a month, and private tuition USD 150 a month.

Old road atlases carried a triangular chart listing the distance between every pair of towns. Filling one in for a whole street network is a classic computing problem called all-pairs shortest paths. One way is to run a route-finder from every starting point in turn. Another, the Floyd-Warshall algorithm, is startlingly short: for each junction k, check whether going via k shortens the route between every pair i and j, and keep the better value. Three nested loops, and when they finish, every entry in the table is correct. This project writes it in Python, speeds it up with numpy, and runs it on Musselburgh's roads as mapped on OpenStreetMap.

Facts last verified 29 September 2026. Teaching is online; no Musselburgh branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Musselburgh courses in algorithms, Python and AI

Four ways in, arranged by age. Lesson one on any of them is live, free, and bookable without card details.

- [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids) (Ages 7 to 12): The how-to-think course: tables, shortcuts and checking whether a detour through a third place helps.
- [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev) (Ages 8 to 12): Scratch games the learner designs and an AI helps build, tested scene by scene.
- [Python for Teens](/courses/python-complete-masterclass-teens) (Ages 13 to 17): Python from first lines to numpy and graphs, including the Musselburgh distance table.
- [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college) (Students and adults): Python for algorithms, data, performance and AI agents.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Musselburgh, Fisherrow, Inveresk and Levenhall

The NRS estimate for Musselburgh, and neighbourhoods recorded in EH21.

**Musselburgh in National Records of Scotland estimates**

| Area | People |
|---|---|
| Musselburgh locality, mid-2020 | 21,100 |

In EH21, postcodes.io records Fisherrow, Inveresk, Levenhall, Monktonhall, Pinkie, Pinkie Braes, Stoneybank and Stoneyhill as suburban areas of East Lothian, with Wallyford, Whitecraig and Old Craighall as villages. East Lothian schools run on the Curriculum for Excellence; our tutors plan in P and S years and prepare learners for SQA Computing Science and Maths, National 5 through Advanced Higher. Holiday weeks come out of the timetable once we have the dates.

### East Lothian, Edinburgh and SQA subjects

Read [coding classes in East Lothian](/coding-classes-in-east-lothian), [Edinburgh](/best-coding-class-in-edinburgh) and [Higher Maths tuition](/higher-maths-tuition-online). Why we teach reasoning before tools is on [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

## A road distance chart for Musselburgh with the Floyd-Warshall algorithm

Every junction to every junction, three loops, a numpy speed-up and a cross-check.

From OpenStreetMap the learner keeps the public roads in a rectangle over Musselburgh, 120.5 km of them, and merges points where a road merely bends, leaving 1,124 junctions joined by 1,286 road segments. A 1,124 by 1,124 table starts with the length of each direct segment and infinity everywhere else. Floyd-Warshall then makes 1,124 passes: on pass k, any pair whose route would be shorter by going through junction k gets its entry lowered. That is about 1.42 billion small updates, which numpy handles in 10.1 seconds on an ordinary laptop by updating a whole row block at a time.

To be sure the table is right, the learner compares it with Dijkstra's algorithm run from a sample of junctions: every value agrees. Dijkstra from every junction would take an estimated 4.2 seconds here, so on a sparse road network the repeated single-source approach is faster, while Floyd-Warshall wins on simplicity and on dense networks. Across all pairs, the average drive between two junctions is 3.21 km and the longest shortest route, the network's diameter within the rectangle, is 10.26 km.

**Part of the Musselburgh road distance chart, shortest drive in km between recorded places, our Python run on OpenStreetMap data**

| From | To | By road | Straight line |
|---|---|---|---|
| Monktonhall | Stoneybank | 0.4 km | 0.31 km |
| Levenhall | Pinkie Braes | 0.8 km | 0.41 km |
| Fisherrow | Stoneyhill | 1.3 km | 0.87 km |
| Inveresk | Monktonhall | 3.2 km | 1.09 km |
| Wallyford | Monktonhall | 5.1 km | 2.93 km |

Most pairs of places are about one and a half times as far by road as in a straight line, but Inveresk to Monktonhall stands out at nearly three times. The table cannot say why; a learner would look at the map to see what the roads must go round. Distances here use public roads inside the rectangle only, so any quicker route leaving the box is not counted.

### P5 to P7

Fill in a small distance chart for five places, then check whether any trip is shorter via a third.

### S1 to S3

Write Floyd-Warshall in plain Python for a ten-junction map of Musselburgh streets.

### S4 and up

Vectorise it with numpy for 1,124 junctions and time it against Dijkstra from every start.

### OpenStreetMap roads, our table

Road geometry is from OpenStreetMap and its contributors under the Open Database Licence; place points from postcodes.io. The rectangle, the simplification, the timings and every distance are our own work, not an official route planner.

## What this teaches about vibe coding and AI agents

Short code can hide a very large amount of work.

**From the Musselburgh distance chart to coding with AI**

| In the Floyd-Warshall project | When an AI writes code for you |
|---|---|
| Three loops did 1.42 billion updates | Count the work, not the lines |
| numpy made it take 10.1 seconds | How code runs matters as much as what it says |
| Repeated Dijkstra was faster here | The textbook choice depends on the data |
| A cross-check confirmed every value | Verify results a second, independent way |
| Routes leaving the box were ignored | Know the limits of your input |

Ask an AI assistant for "distances between all places" and it will usually produce working Floyd-Warshall code in seconds, correct and possibly far too slow if written as plain Python loops. Vibe coding means the learner states what is needed and an AI drafts the code; in Musselburgh lessons the learner then times it, estimates its cost and checks a sample of answers another way before using it. AI agents that write and run code for you make these speed and correctness trade-offs silently. Agent building comes once a learner writes Python unassisted, normally in the senior years or adulthood, and Copilot Studio agents are taught in private lessons only. See [how students in the UK move on to AI agents](/ai-agents-course-for-students-uk), and the reasoning in [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk).

We have no affiliation with OpenStreetMap, National Records of Scotland or postcodes.io. Their data is open and was used as published; the analysis and any error in it belong to Modern Age Coders.

## From distance charts to dynamic programming

A school year tells us roughly where to start; the free lesson pins it down.

- **P1 to P7: How to think** Tables, shortcuts and checking every possible route. [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **P5 to S2: Vibe coding for kids** Games and small apps the learner plans and an AI helps build. [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev), [Python and AI for Kids](/courses/python-ai-kids-masterclass)
- **S3 to S6: Python and algorithms** Graphs, dynamic programming and numpy alongside SQA Computing Science. [Python for Teens](/courses/python-complete-masterclass-teens), [Data Structures & Algorithms Course](/courses/data-structures-algorithms-masterclass-college)
- **Adults: Python, performance and agents** Efficient code, data work and AI agents, built step by step. [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college), [Generative AI Course](/courses/complete-generative-ai-masterclass-college)

## What is the Floyd-Warshall algorithm, and how do you run it in Python?

Floyd-Warshall finds the shortest route between every pair of points in a network by checking, for each point in turn, whether going through it shortens any route; in Python it is three nested loops, and numpy makes it fast.

On 120.5 km of Musselburgh roads with 1,124 junctions, a numpy version filled the whole distance table in 10.1 seconds, agreeing with Dijkstra's algorithm at every checked value.

Learners who have built it ask of any code an AI hands them: how much work does this really do, and how would I check its answers?

Being able to weigh an algorithm's cost lets Musselburgh teenagers judge AI-written code instead of simply running it, which is reason enough to learn Python in 2026. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Fisherrow to Wallyford, on screen

The whole set-up is a computer with a camera and an internet line good enough to stream.

- **Learner drives the code** Typing, prompting and running are the student's job; the tutor watches on screen share and questions every choice.
- **Trial finds the start** In the free session we see the current level and note any SQA exam coming up.
- **First session free** The opening lesson costs nothing and finishes with a course suggestion.
- **Classes of equals** Five to ten learners from across the UK make each group, matched by stage.
- **Two per week** None during Scottish school holidays.
- **Fixed evening** Clock changes are our tutors' problem; your lesson time does not move.

**Why lessons are online** Gathering five learners of one level in one room on one evening is hard in any town. Over video it is easy.

## Musselburgh fees

Musselburgh learners are charged our international rates, which cover every country outside India.

- First class: USD 0. One whole lesson free, then a course suggestion.
- Group tuition: USD 100 a month. About eight live small-class lessons per month.
- Private tuition: USD 150 a month. About eight live one-to-one lessons per month.

All pricing is in US dollars, never sterling, and the first invoice waits until the trial has agreed a course and a regular weekly time. The pricing page explains holidays, missed sessions and moving between private and group lessons.

## Musselburgh questions

### What is the population of Musselburgh?

National Records of Scotland estimated 21,100 people in the Musselburgh locality in mid-2020.

### Do you teach online Python classes in Musselburgh?

We do, over live video, for learners aged 6 to 67 in Musselburgh, Wallyford, Whitecraig and the rest of East Lothian.

### What is the difference between Floyd-Warshall and Dijkstra?

Dijkstra finds shortest routes from one starting point; Floyd-Warshall finds them between all pairs at once. On Musselburgh's sparse road network, running Dijkstra from every junction was quicker, but Floyd-Warshall is simpler to write.

### What is all-pairs shortest paths?

The problem of finding the shortest route between every pair of points in a network, the computer version of a road atlas distance chart.

### What does the Musselburgh project involve?

Building a road network of 1,124 junctions from OpenStreetMap, filling its complete distance table with Floyd-Warshall in numpy, and checking it against Dijkstra.

### Is vibe coding taught?

Throughout, at every age: the learner plans, the AI helps draft, and the learner tests and fixes.

### When can students start building AI agents?

When they write Python without help, usually senior pupils or adults; Copilot Studio agents are private lessons only.

### Is there help with SQA exams?

Yes, in Computing Science and Maths from National 5 to Advanced Higher, taught for understanding with no promised grades.

### What are the fees?

No charge for the trial lesson, then USD 100 a month in a class or USD 150 a month for one-to-one teaching.

### What happens in the school holidays?

Lessons pause; send the dates and we plan round them.

## Other Lothians pages

Each with a different project: [East Lothian](/coding-classes-in-east-lothian) (predators and prey), [Edinburgh](/best-coding-class-in-edinburgh), [Midlothian](/coding-classes-in-midlothian) and [Livingston](/best-coding-and-ai-classes-in-livingston) (a hash tree of the map). Beyond them, go through [Scotland](/coding-and-ai-classes-in-scotland) or the [UK hub](/coding-classes-in-united-kingdom).

## Contact

Book the free class on [https://learn.modernagecoders.com/online-coding-and-python-classes-in-musselburgh](https://learn.modernagecoders.com/online-coding-and-python-classes-in-musselburgh#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
