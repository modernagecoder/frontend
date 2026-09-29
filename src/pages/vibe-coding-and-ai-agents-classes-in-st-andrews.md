---
title: "Vibe Coding and AI Agents Classes in St Andrews | Ages 6 to 67"
description: "Live online vibe coding, AI agents and Python lessons for St Andrews, Strathkinness, Guardbridge and Boarhills learners in Fife, aged 6 to 67. First lesson free."
canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-st-andrews
source: src/pages/vibe-coding-and-ai-agents-classes-in-st-andrews.html
---
> National Records of Scotland puts the St Andrews locality at 18,410 people for mid-2020. Strathkinness, Guardbridge and Boarhills are villages recorded in the KY16 district, with Kincaple listed as a hamlet. Tutors based in India teach vibe coding, AI agents, Python, coding and maths live on camera to anyone six to 67, one-to-one or with five to ten peers of similar ability. We explain how things work before handing over tools, so learners understand what an agent is doing when it searches. The trial lesson is free and closes with our suggested course. In the St Andrews project, agents with no map explore 172.4 km of the town's paths in different orders, and the learner measures how much each has to look at and how good a route it brings back. Continuing lessons are priced at USD 100 a month per group place and USD 150 a month for a private tutor.

[Home](/) / [United Kingdom](/coding-classes-in-united-kingdom) / [Scotland](/coding-and-ai-classes-in-scotland) / St Andrews

St Andrews, Fife, Scotland / Live online

# Vibe coding and AI agents classes in St Andrews

**Where can St Andrews learners find the best vibe coding and AI agents classes?** National Records of Scotland puts the St Andrews locality at 18,410 people for mid-2020. Strathkinness, Guardbridge and Boarhills are villages recorded in the KY16 district, with Kincaple listed as a hamlet. Tutors based in India teach vibe coding, AI agents, Python, coding and maths live on camera to anyone six to 67, one-to-one or with five to ten peers of similar ability. We explain how things work before handing over tools, so learners understand what an agent is doing when it searches. The trial lesson is free and closes with our suggested course. In the St Andrews project, agents with no map explore 172.4 km of the town's paths in different orders, and the learner measures how much each has to look at and how good a route it brings back. Continuing lessons are priced at USD 100 a month per group place and USD 150 a month for a private tutor.

An AI agent that has to find something, a file in a folder tree, an answer in a set of web pages, a place in a town, often cannot see the whole picture at once. It must explore, one step at a time, and the order it explores in matters. Breadth-first search looks at everything one step away, then two steps, then three. Depth-first search follows one path as far as it goes before backing up. Neither uses any sense of direction, which is why they are called uninformed. This project lets both loose on the walking network of St Andrews from OpenStreetMap, with Dijkstra's algorithm as the yardstick, and sends them to 60 random destinations.

Facts last verified 29 September 2026. Teaching is online; no St Andrews branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## St Andrews courses in reasoning, vibe coding and agents

Four routes in, set by age. Every one opens with a live lesson that costs nothing, booked without card details.

- [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids) (Ages 7 to 12): The how-to-think course: mazes, search orders and knowing when you have looked everywhere.
- [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev) (Ages 8 to 12): Scratch games dreamed up by the learner, built with an AI and tested thoroughly.
- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python and web projects with AI help, including the exploring agents on St Andrews paths.
- [Generative AI Course](/courses/complete-generative-ai-masterclass-college) (Students and adults): How agents search, plan and use tools, built in Python.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## St Andrews, Strathkinness, Guardbridge and Boarhills

The NRS estimate for St Andrews, and places recorded in KY16.

**St Andrews in National Records of Scotland estimates**

| Area | People |
|---|---|
| St Andrews locality, mid-2020 | 18,410 |

Postcodes.io lists Boarhills, Guardbridge and Strathkinness as villages and Kincaple as a hamlet in the KY16 postcode district of Fife. Schools in the area teach the Curriculum for Excellence; lessons follow the Scottish year structure, and we support SQA Computing Science and Maths from National 5 up to Advanced Higher. Holiday weeks are skipped once you send us the dates.

### Fife pages and SQA support

See [coding classes in Fife](/coding-classes-in-fife), [Glenrothes](/best-coding-and-ai-classes-in-glenrothes) and [Advanced Higher Computing Science project help](/advanced-higher-computing-science-project-help). Why understanding comes before tools is on [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

## Breadth-first against depth-first: agents exploring St Andrews without a map

One start, 60 destinations, three ways to explore, and a count of every junction looked at.

The learner downloads the walkable paths and streets of St Andrews from OpenStreetMap and simplifies them to 3,086 junctions joined by 3,890 segments, 172.4 km in all. Every search starts from the point OpenStreetMap uses to label the town. For each of 60 random destinations the program runs three searches: breadth-first, which counts steps between junctions; depth-first, which dives down one path at a time in a random order; and Dijkstra's algorithm, which always expands the nearest point by actual distance and so finds the true shortest route. The median destination is 1,270 m away, 25 junctions from the start.

**Exploring St Andrews paths to 60 random destinations, medians, our Python run on OpenStreetMap data**

| Strategy | Junctions explored before finding the target | Route returned against the true shortest |
|---|---|---|
| Dijkstra (reference) | 1,300 | Always the shortest |
| Breadth-first search | 1,387 | 1.27 times as long |
| Depth-first search | 1,637 | 11.43 times as long |

All three look at a large share of the town before finding a destination only 25 junctions away, because none of them knows which way the target lies. Breadth-first finds routes with the fewest junctions, but fewest junctions is not the same as fewest metres, so its routes ran about 27% long and it found the true shortest in none of the 60 runs. Depth-first is the one to watch: it explored the most, and the route it brought back was typically eleven times the shortest, over three times too long for 91.7% of destinations, because it follows whatever path it happens to be on. An agent that explores depth-first and reports the first route it finds can be wildly wasteful.

### P5 to P7

Explore a paper maze two ways, ring by ring and one corridor at a time, and count the squares visited.

### S1 to S3

Write breadth-first search in Python on a small piece of the St Andrews path network.

### S4 and up

Compare BFS, DFS and Dijkstra on 60 destinations and explain every difference in the table.

### OpenStreetMap paths, our agents

Paths and streets are from OpenStreetMap and its contributors under the Open Database Licence. The simplification, start point, destinations and all counts are our own work.

## What this teaches about vibe coding and AI agents

Search order is a design choice, and it shapes both effort and answer.

**From the St Andrews search race to real AI agents**

| In the path project | When an AI agent explores |
|---|---|
| All three explored over 1,300 junctions | Without guidance, search is expensive |
| BFS routes ran 27% long | Fewest steps is not always cheapest |
| DFS routes ran eleven times long | The first answer found can be a poor one |
| Dijkstra always found the shortest | The right measure of cost matters |
| None knew where the target was | Hints and heuristics make agents efficient |

AI agents searching files, websites or options face the same choices: look broadly first or dig deep, and stop at the first answer or keep going for a better one. An agent that dives down the first promising link and reports what it finds there behaves a lot like depth-first search. In vibe coding the learner describes a program and the AI writes it; our St Andrews learners also decide how their agents should search and when they may stop, then measure the result. Agent building waits until the learner can write Python without help, which for most is S5 or beyond, and Copilot Studio work happens only in private lessons. The steps are on [our AI agents course for UK learners](/ai-agents-course-for-students-uk), and the approach on [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk).

OpenStreetMap, National Records of Scotland and postcodes.io supply the open data used here and are not linked to us; the agents, and any mistakes in them, are ours.

## From paper mazes to searching agents

Your year group gives us a first idea; the trial settles the level.

- **P1 to P7: How to think** Mazes, orders of search and checking you missed nothing. [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **P5 to S2: Vibe coding for kids** Games and apps planned by the learner and built with AI help. [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev), [Python and AI for Kids](/courses/python-ai-kids-masterclass)
- **S3 to S6: Python and search** Queues, stacks and graph search alongside SQA Computing Science. [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course), [Data Structures & Algorithms Course](/courses/data-structures-algorithms-masterclass-college)
- **Adults: Agents that search** Search strategies, tools and planning in Python agents. [Generative AI Course](/courses/complete-generative-ai-masterclass-college), [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)

## What is the difference between breadth-first and depth-first search?

Breadth-first search explores everything one step away, then two, then three, so it finds the route with the fewest steps; depth-first search follows one path as far as possible before backing up, so it can find a route quickly but often a very long one.

Exploring St Andrews paths to 60 random destinations, breadth-first returned routes a median 1.27 times the shortest, while depth-first returned routes 11.43 times the shortest after exploring more of the town.

After this race, learners greet any agent's answer with two questions: what order did it search in, and did it settle for the first hit?

A St Andrews teenager who has coded both searches can tell a thorough agent from a hasty one, and that judgement is built by writing code. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Strathkinness to Boarhills, online

Laptop or desktop, a camera, and a connection strong enough for video: that is all.

- **Code by the learner** Students write and run everything; the tutor watches through screen share and asks them to predict each search.
- **Trial finds the level** The free session shows where to begin; SQA exams are noted if one is ahead.
- **Free first session** Lesson one is free of charge and ends with a course suggestion.
- **Groups by stage** Five to ten learners from around Britain at one level per class.
- **Two a week in term** Holidays off.
- **Stable timetable** UK clock changes are absorbed by our tutors, not by your slot.

**Why online** Five learners at the same level, free on one evening and living close together, are hard to find in a small town. Online, it stops mattering.

## St Andrews fees

St Andrews learners pay our international rates, used in every country but India.

- First class: USD 0. A free first lesson, then our advice.
- Group tuition: USD 100 a month. Around eight live group lessons monthly.
- Private tuition: USD 150 a month. Around eight live one-to-one lessons monthly.

We invoice in US dollars, never sterling, and not until the trial has settled a course and a weekly time; holidays, absences and moving between group and private are set out on the pricing page.

## St Andrews questions

### What is the population of St Andrews?

National Records of Scotland estimated 18,410 people in the St Andrews locality in mid-2020.

### Are vibe coding and AI agents classes available online in St Andrews?

All lessons are live video calls, so Guardbridge, Strathkinness and the rest of north-east Fife are covered for ages 6 to 67.

### What is uninformed search?

Search that has no sense of where the goal lies, such as breadth-first and depth-first search. Informed search adds a hint, like the straight-line distance to the goal.

### Why did depth-first search return such long routes?

It follows whatever path it is on until it runs out, so the first route it reaches the target by is often a long detour. In our St Andrews test it was over three times the shortest for 91.7% of destinations.

### What does the St Andrews project involve?

Letting breadth-first, depth-first and Dijkstra searches explore 172.4 km of mapped St Andrews paths to 60 random destinations and comparing effort and route length.

### Where does vibe coding come in?

From the start, at any age: the learner explains the program, the AI drafts it, and the learner tests and fixes it.

### When do learners start on AI agents?

Once they write Python unaided, commonly in the senior phase or as adults; Copilot Studio agents are one-to-one.

### Do you support Advanced Higher Computing Science?

Yes, along with National 5 and Higher, in Computing Science and Maths, taught for understanding with no promised grades.

### How much are lessons?

Trial lesson free; from then on, USD 100 monthly for class lessons or USD 150 monthly for solo ones.

### Do lessons stop for holidays?

They do; school holidays are lesson-free once you tell us the dates.

## More Fife and Tayside pages

Each has its own experiment: [Glenrothes](/best-coding-and-ai-classes-in-glenrothes) (where rain flows), [Kirkcaldy](/ai-and-programming-classes-in-kirkcaldy), [Dundee](/best-coding-class-in-dundee) and [Fife](/coding-classes-in-fife). Everywhere else is reached from the [Scotland page](/coding-and-ai-classes-in-scotland) or the [UK hub](/coding-classes-in-united-kingdom).

## Contact

Book the free class on [https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-st-andrews](https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-st-andrews#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
