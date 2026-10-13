---
title: "Vibe Coding and AI Agents Classes in Cwmbran | Ages 6 to 67"
description: "Live online vibe coding and AI agents classes for Cwmbran, Croesyceiliog, Llantarnam and Pontnewydd, ages 6 to 67, with Python and maths. The first lesson is free."
canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-cwmbran
source: src/pages/vibe-coding-and-ai-agents-classes-in-cwmbran.html
---
> Live online vibe coding and AI agents classes for Cwmbran, Croesyceiliog, Llantarnam and Pontnewydd, ages 6 to 67, with Python and maths. The first lesson is free.

Skip to contentRecommended starts

## Vibe coding and AI agents courses for Cwmbran learners

Pick by age. Each course opens with a free live lesson, and no card is asked for.

[![Problem Solving and Computational Thinking for Kids course thumbnail](/images/problem-solving-kids.webp)Ages 7 to 12Problem Solving and Computational Thinking for KidsThinking skills before tools: rules, choices, and games where every player follows the same rule.See the syllabus](/courses/problem-solving-and-computational-thinking-for-kids)[![Vibe Coding for Kids course thumbnail](/images/vibe-coding-kids.webp)Ages 8 to 12Vibe Coding for KidsVibe coding for children: describe a Scratch game to an AI, then test and repair it.See the syllabus](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Ages 13 to 17Vibe Coding for TeensVibe coding in Python with simulations, including the Cwmbran route-agent project.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Masterclass course thumbnail](/images/python-college.webp)Students and adultsPython MasterclassPython from the start to data work and AI agents you can explain line by line.See the syllabus](/courses/python-programming-masterclass-zero-to-advanced-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Cwmbran in numbers

## Cwmbran, Croesyceiliog, Llantarnam and Pontnewydd

Census counts for the built-up area and the county borough, and how people in Torfaen got to work.

| Measure | Count |
| --- | --- |
| Usual residents, Cwmbrân built-up area | 47,090 |
| Usual residents, Torfaen | 92,276 |
| Torfaen residents in work the week before the census | 40,654 |
| Of those, driving a car or van to work | 25,181 |

Torfaen also includes Pontypool and Blaenavon, so the borough and town rows are separate counts. The census was taken in March 2021, when many people worked from home, so the travel figure describes that week rather than a typical one. On postcodes.io, Croesyceiliog, Llantarnam, Pontnewydd, Fairwater, Henllys, Oakfield, Coed Eva, Greenmeadow, Thornhill, St Dials, Two Locks, Llanyrafon, Northville, Southville, Old Cwmbran, Ty Canol, Hollybush, Pontrhydyrun and Upper Cwmbran are all suburban areas in NP44 whose nearest postcode is inside the Cwmbrân built-up area. Schools follow the Curriculum for Wales, so we place learners by Welsh school year and use WJEC names for GCSE and A level; lessons are taught in English.

### South Wales pages

See [Newport](/best-coding-class-in-newport-wales), [Blaenau Gwent](/coding-classes-in-blaenau-gwent), the [Torfaen page](/coding-classes-in-torfaen) and our [WJEC GCSE Computer Science help](/wjec-gcse-computer-science-help-wales). Why thinking comes before tools is argued in [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

The Cwmbran project

## Four thousand agents and a shortcut that slows everyone down

A model road network, agents that each want the quickest trip, and a count of the minutes lost.

The network is invented and has nothing to do with Cwmbran's real roads; it is the textbook example used to explain Braess's result. Four thousand drivers travel from Start to End. The top route runs Start to A, which takes one minute for every hundred cars on it, then A to End, a fixed 45 minutes. The bottom route mirrors it: Start to B, a fixed 45, then B to End at one minute per hundred cars. The learner writes each driver as a small agent with one job: look at yesterday's journey times and, if another route was quicker, consider switching to it.

With only the two routes, and one agent in ten on a slower route switching each round, the crowd settles near 2,000 on each route and every trip takes about 65 minutes. Then the learner adds a free link from A to B that takes no time at all. A driver can now go Start to A, across, then B to End. Nobody is forced to use it.

| Round | Agents using the shortcut | Average trip |
| --- | --- | --- |
| 0 | 0 | 65.00 min |
| 1 | 425 | 64.70 min |
| 5 | 1,580 | 66.15 min |
| 10 | 2,576 | 70.07 min |
| 49, settled | 3,974 | 79.77 min |

The first switchers really do gain, and for one round the average trip is slightly shorter. But each car on the shortcut also loads both busy halves of the network, and as more agents follow, the other routes get slower too, which pushes even more agents onto the shortcut. By round 49 almost everyone uses it and the average trip is 79.77 minutes, nearly 15 minutes worse than before the link existed. No agent can do better by switching back alone, so nothing changes from there. Economists call such a state a Wardrop or Nash equilibrium.

Two more runs finish the lesson. If a single coordinator assigned routes, a grid search finds that sending 500 cars over the shortcut and 1,750 along each other route gives 64.69 minutes, better than either result above. The ratio between the selfish outcome and the coordinated one is the price of anarchy. And if every agent reacts to the same information at the same moment, the crowd lurches: with no shortcut and everyone switching at once, all 4,000 cars pile onto one route, then all onto the other, and every trip takes 85 minutes, round after round.

### Ages 8 to 11

A classroom game: everyone picks one of two paths, and the busier path costs more points.

### Ages 11 to 15

Code the two-route network in Python and count journey times for any split of cars.

### Ages 15 and up

Write the agents, add the shortcut, vary how many switch per round, and search for the coordinated split.

### Where this comes from

The network follows Braess (1968), translated into English by Braess, Nagurney and Wakolbinger (2005). The Torfaen travel figures are from the ONS Census 2021 table TS061 via Nomis. The agents, the random seed (20260930) and every number in the table are from our own run.

Agents and vibe coding

## What selfish agents teach about building AI agents

An agent that does its own job well can still leave the whole system worse off.

| What the simulation showed | What it means for agent builders |
| --- | --- |
| Each agent chose sensibly, all were slower | Judge agents by the whole system, not one run |
| Early switchers gained, then everyone lost | A short test can reward the wrong behaviour |
| A coordinator reached 64.69 minutes | Sometimes agents need shared rules or a planner |
| Everyone reacting at once made the crowd lurch | Stagger or randomise how agents update |
| The network was invented and said so | Label models as models |

This is where vibe coding meets agents. A learner can describe the whole simulation to an AI and get working Python back in a minute, and many Cwmbran learners do exactly that. The real work starts afterwards: reading the update rule, spotting that it lets every agent move at once, and changing one number to watch the crowd settle instead of lurch. That habit of checking what a system of agents does, not just one agent, is what we build towards. Agent-building projects start when a learner's Python is strong without help, most often in sixth form or adulthood, and anything in Copilot Studio is taught one-to-one only. Further reading: [how we teach agents to UK students](/ai-agents-course-for-students-uk) and [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk).

Neither the Office for National Statistics nor postcodes.io has any link with Modern Age Coders. We used their open data for context; the simulation is ours.

Growing with us

## From path games at seven to agent simulations at seventeen

The trial lesson sets the starting point, with the Welsh school year only as a first guess.

Years 2 to 6

### Rules and choices

Games, patterns and instructions, often acted out before coding.

[Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)[Scratch Coding for Kids](/courses/scratch-programming-complete-course)Years 4 to 8

### Making with AI

Scratch games built with an AI, then the step into Python.

[Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[Python and AI for Kids](/courses/python-ai-kids-masterclass)Years 9 to 13

### Simulations in Python

Loops, randomness and many small agents, checked against expectations.

[Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[Python for Teens](/courses/python-complete-masterclass-teens)Adults

### Agents in practice

Python for real work, then agents designed with the whole system in view.

[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)[Data Structures & Algorithms Course](/courses/data-structures-algorithms-masterclass-college)Agents and networks

## What is Braess's paradox, and why does it matter for AI agents?

Braess's paradox is the finding that adding a link to a network can make every journey slower when each traveller picks the fastest route for themselves, and it matters because many AI agents pursuing their own goals in one system can produce the same collective loss.

In our model 4,000 agents averaged 65.00 minutes before a free shortcut opened and 79.77 minutes once they had all adopted it, while a coordinated split with the shortcut managed 64.69.

Learners who have produced those numbers look past whether one agent works to what happens when many of them run together.

For a Cwmbran teenager, seeing a whole system and not just one clever agent is what lets them direct AI rather than be carried along by it, and the way in is writing the code yourself. The longer argument is in [the case for learning to code in 2026](/blog/is-coding-worth-learning-2026).

How classes work

## A typical lesson for a Cwmbran learner

Classes are live video sessions. A computer with a keyboard is needed; a tablet alone will not do for Python.

### Code typed, not watched

The learner writes and runs everything, with the tutor asking questions throughout.

### Placement by trial

The first lesson shows the learner's level before we suggest a course.

### No cost to try

The trial lesson is free, with no card required.

### Fifteen to twenty in a class

Classmates share a level and join from across the UK.

### Around eight a month

Usually two lessons a week in term, with Torfaen holidays left clear on request.

### Welsh time kept

Your lesson stays at the same UK time when the clocks go forward or back.

Why the lessons are online

Gathering fifteen to twenty learners at one exact stage is far easier across the whole UK than in one valley. Video lets them learn together without travelling.

Fees

## Prices for Cwmbran families

Cwmbran learners pay what everyone outside India pays.

First class**USD 0**

First lesson: free and full length, with a course suggestion to finish.

Group tuition**USD 100**

Group class, around eight lessons a month.

Private tuition**USD 150**

Private one-to-one lessons, around eight a month.

All fees are in US dollars; we publish no pound figure. You are not charged for the trial, and billing starts only once a course and a regular time are agreed. See the pricing page for holidays, missed lessons and switching between group and private classes.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20would%20like%20to%20book%20a%20free%20vibe%20coding%20or%20AI%20agents%20trial%20lesson.%20We%20are%20in%20Cwmbran.)Reviews

## Families in Wales and across Britain, reviewing us on Google

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

## Book a free Cwmbran lesson

Let us know the learner's age or school year and what they enjoy. The trial might be a path-choosing game, an AI-built Scratch game, a first Python program, or a first agent simulation.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Cwmbran one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20would%20like%20to%20book%20a%20free%20vibe%20coding%20or%20AI%20agents%20trial%20lesson.%20We%20are%20in%20Cwmbran.)

Submitted details are used for placement and follow-up.

FAQ

## Cwmbran questions

The agent project, Braess's paradox, vibe coding and how lessons work.

### How many people live in Cwmbran?

The ONS counted 47,090 usual residents in the Cwmbrân built-up area at the 2021 census. Torfaen county borough had 92,276.

### Are there vibe coding and AI agents classes for Cwmbran?

Yes. Classes run live online for ages 6 to 67 in Cwmbran, Croesyceiliog, Llantarnam, Pontnewydd and the rest of Torfaen.

### What is a Nash equilibrium in traffic?

A pattern of route choices in which no single driver can get home sooner by changing route alone. In traffic it is often called a Wardrop equilibrium.

### What happened in the Cwmbran simulation?

On an invented network, 4,000 agents averaged 65.00 minutes. After a free shortcut opened they drifted onto it until the average was 79.77 minutes, even though a coordinated plan with the shortcut gave 64.69.

### Is the road network real?

No. It is the standard textbook network for Braess's paradox, and we say so. Only the census figures describe Torfaen.

### What is vibe coding?

Vibe coding is building software by describing it to an AI, then running, reading and correcting the code. We teach it with typed Python so learners can judge the result.

### When do learners build their own AI agents?

Once their Python is solid without help, typically in sixth form or as adults. Copilot Studio agents are one-to-one only.

### Does this help with WJEC GCSE computer science?

Algorithms, simulation and programming run through WJEC GCSE and A level courses, and we cover them carefully. We do not promise any grade.

### How much do classes cost?

The trial lesson is free. Group classes then cost USD 100 a month and private lessons USD 150 a month.

### What about school holidays?

Tell us the Torfaen holiday dates and lessons stop for those weeks.

Neighbouring pages

## More pages for South Wales

Browse [Newport](/best-coding-class-in-newport-wales), [Blaenau Gwent](/coding-classes-in-blaenau-gwent) and [Torfaen](/coding-classes-in-torfaen), plus [WJEC GCSE Computer Science help](/wjec-gcse-computer-science-help-wales). The [Wales page](/coding-and-ai-classes-in-wales) and the [UK hub](/coding-classes-in-united-kingdom) list everything else.

Book the free class[Book a priority demo](/book-demo)[Send us a WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20would%20like%20to%20book%20a%20free%20vibe%20coding%20or%20AI%20agents%20trial%20lesson.%20We%20are%20in%20Cwmbran.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-cwmbran*
