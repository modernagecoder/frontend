---
title: "Vibe Coding and AI Agents Classes in Dungannon | Ages 6 to 67"
description: "Live online vibe coding, AI agents and Python lessons for Dungannon, Ballysaggart, Killymeal and Moygashel learners in Tyrone, aged 6 to 67. First lesson free."
canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-dungannon
source: src/pages/vibe-coding-and-ai-agents-classes-in-dungannon.html
---
> Live online vibe coding, AI agents and Python lessons for Dungannon, Ballysaggart, Killymeal and Moygashel learners in Tyrone, aged 6 to 67. First lesson free.

Skip to contentDungannon course picks

## Where Dungannon learners begin: thinking, vibe coding and agents

Four starting points by age. The first live class of each is free and books without card details.

[![Problem Solving and Computational Thinking for Kids course thumbnail](/images/problem-solving-kids.webp)Ages 7 to 12Problem Solving and Computational Thinking for KidsThe how-to-think course: making a plan, spotting when it fails and choosing a sensible way round.See the syllabus](/courses/problem-solving-and-computational-thinking-for-kids)[![Vibe Coding for Kids course thumbnail](/images/vibe-coding-kids.webp)Ages 8 to 12Vibe Coding for KidsScratch games the learner designs, builds with an AI and then tests to breaking point.See the syllabus](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Ages 13 to 17Vibe Coding for TeensPython and web projects with AI help, including the Dungannon replanning agent.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Generative AI Course course thumbnail](/images/generative-ai-college.webp)Students and adultsGenerative AI CourseAgents that plan, fail gracefully and recover, built step by step in Python.See the syllabus](/courses/complete-generative-ai-masterclass-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Dungannon in the 2021 census

## Dungannon, Ballysaggart, Killymeal and Moygashel

NISRA counts for the town, its electoral area and Mid Ulster, plus the wards named around it.

| Place | Kind of area | People |
| --- | --- | --- |
| Dungannon town | NISRA settlement | 16,282 |
| Dungannon | Electoral area (DEA) | 25,640 |
| Mid Ulster | Council district | 150,293 |

These are three different NISRA geographies and are never added together. Ballysaggart (5,062 residents), Killymeal (5,003), Mullaghmore (4,408) and Moygashel (3,606) are census wards in Mid Ulster, and OpenStreetMap marks Granville as a village and Lardan as a locality inside our map rectangle. Tyrone schools teach the Northern Ireland Curriculum; we plan in the same primary and post-primary years and help with CCEA qualifications where needed. Share your school holiday dates and we will fit round them.

### Mid Ulster pages and CCEA help

Visit [coding classes in Mid Ulster](/coding-classes-in-mid-ulster), [Northern Ireland](/coding-and-ai-classes-in-northern-ireland) and [CCEA GCSE Digital Technology help](/ccea-gcse-digital-technology-programming-help). Our reasons for teaching thinking before tools are on [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

The Dungannon project

## When the plan breaks: an agent replanning around road closures in Dungannon

Plan a trip, close a road on the route, and compare three ways to recover.

The learner downloads the public roads inside a rectangle over Dungannon from OpenStreetMap: 105.0 km, simplified to 972 junctions joined by 1,043 road segments. For each trip the program picks a random start and destination at least 800 m apart by road, plans the shortest route, and then quietly closes one segment somewhere in the middle of that route. The agent does not know until it arrives at the closed road. Then it can either replan completely from where it stands, or repair the plan by finding the shortest way around to any later point on its old route and carrying on from there. As a yardstick, the program also works out the route the agent would have taken had it known about the closure before setting off.

| What the agent does | Extra distance, median | Extra distance, 90th percentile | Junctions examined at the closure |
| --- | --- | --- | --- |
| Knew in advance (yardstick) | 0% | 0% | None |
| Replans from scratch | 8.3% | 45.4% | 403 |
| Repairs the plan locally | 10.4% | 49.5% | 117 |

Discovering a problem late always costs something: even a full replan drives a median 8.3% further than a driver who knew all along, and one trip in ten costs over 45% more. The local repair is slightly worse on distance, 10.4% at the median, but it looks at only 117 junctions to find its way round instead of 403, and in 78.7% of trips it lands within 1% of the full replan. A further 83 closures, from 383 attempted trips, left no route inside the rectangle at all. An agent that keeps searching in that situation wastes effort for ever; it has to recognise the goal is unreachable and report back.

### P5 to P7

Plan a walk on a paper map, block one street with a counter, and find the smallest change to the route.

### Years 8 to 10

Load a small piece of Dungannon's roads in Python and find a new route when one road is removed.

### Year 11 and up

Code both recovery strategies, run hundreds of trips and weigh extra distance against search effort.

### OpenStreetMap roads, our agent

Road geometry is from OpenStreetMap and its contributors under the Open Database Licence. The rectangle, the random trips, the closures and every figure are our own; no real closure or roadworks are modelled.

Agents that recover

## What this teaches about vibe coding and AI agents

Recovery, not the first plan, separates a sturdy agent from a fragile one.

| In the road project | When an AI agent's plan fails |
| --- | --- |
| Learning late cost a median 8.3% | Surprises always cost something; plan for them |
| Repair searched 117 junctions, replan 403 | A quick patch is often nearly as good |
| Repair matched replan in 78.7% of trips | Know when the cheap fix is enough |
| 83 closures made the goal unreachable | An agent must be able to say it cannot finish |
| The yardstick knew everything in advance | Compare an agent with an all-knowing run |

AI agents that call tools meet broken steps all the time: an API returns an error, a page has moved, a permission is missing. The weakest agents repeat the failing step or quietly give up; better ones patch around it, replan when the patch is poor, and tell a person when the goal cannot be reached. In vibe coding an AI drafts the program from the learner's plain-English description; our Dungannon learners also write down what the program must do when a step fails, and test that with deliberately broken inputs. Building agents comes after Python is second nature, for most from Year 12 on, and Copilot Studio is kept for one-to-one sessions. Read about the route on [AI agents for UK students](/ai-agents-course-for-students-uk) and the principle behind it on [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk).

OpenStreetMap and NISRA are not connected with Modern Age Coders; we used only their openly published data, and the agent, the closures and any mistakes are ours.

Stages

## From blocked-street puzzles to agents that recover

We read the school year as a first guess and let the trial lesson confirm the level.

P1 to P7

### How to think

Plans, obstacles and choosing a sensible detour.

[Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)[Scratch Coding for Kids](/courses/scratch-programming-complete-course)P5 to Year 9

### Vibe coding for kids

Games and small apps the learner plans and builds with AI help.

[Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[Python and AI for Kids](/courses/python-ai-kids-masterclass)Years 10 to 14

### Python and search

Graphs, shortest paths and failure handling alongside CCEA GCSE and A level.

[Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[Data Structures & Algorithms Course](/courses/data-structures-algorithms-masterclass-college)Adults

### Robust AI agents

Planning, tools, error recovery and hand-over to people, in Python.

[Generative AI Course](/courses/complete-generative-ai-masterclass-college)[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)Agents and plans

## What should an AI agent do when its plan fails?

It should notice the failure, then either repair the plan locally or replan from its current state, choosing by how much the cheaper fix costs, and it should report back when the goal can no longer be reached.

A driving agent on Dungannon's mapped roads that met a closure mid-trip drove a median 8.3% further after a full replan and 10.4% further after a local repair, yet the repair searched 117 junctions instead of 403.

Having built it, a learner asks two things of any AI tool: how it copes with a failed step, and whether it will admit when a job cannot be done.

Designing agents that recover sensibly keeps Dungannon teenagers in charge of the AI they build, and learning to code is where that design sense grows in 2026. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

How it works

## How Dungannon lessons run

Kit: any laptop or desktop with a camera, plus broadband good enough for video.

### The learner types

Every line of code and every prompt comes from the student, while the tutor follows through screen share and asks what should happen if a step fails.

### Level from lesson one

Half an hour of real coding in the trial tells the tutor where to begin; upcoming CCEA exams go on the plan.

### First lesson on us

Session one is free and closes with a course suggestion.

### Classmates at your level

Groups of fifteen to twenty are formed by ability, not by postcode.

### Term-time rhythm

Twice weekly, stopping for holidays.

### Slot that stays put

Tutors adjust to UK clock changes so your lesson time does not.

Why online

Five learners at one level, free on the same evening, rarely live within reach of one room. On video, that stops mattering.

Fees

## Dungannon fees

Dungannon learners pay our international rates, which apply everywhere outside India.

First class**USD 0**

A full lesson free, then our recommendation.

Group tuition**USD 100**

About eight live small-group lessons a month.

Private tuition**USD 150**

About eight live one-to-one lessons a month.

Fees are in US dollars, never sterling, and we invoice only after the trial has settled a course and a weekly time. School holidays, missed lessons and switching between group and private are explained on the pricing page.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20could%20we%20book%20a%20free%20vibe%20coding%20or%20AI%20agents%20lesson%20for%20a%20learner%20in%20Dungannon%3F)Reviews

## What Tyrone parents and learners across Britain write on Google

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

## Book a free Dungannon lesson

An age or school year and a hobby is all we ask. Trials might be a blocked-street puzzle, an AI-assisted Scratch game, a few lines of beginner Python, or an agent forced to find a new route.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Dungannon one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20could%20we%20book%20a%20free%20vibe%20coding%20or%20AI%20agents%20lesson%20for%20a%20learner%20in%20Dungannon%3F)

Submitted details are used for placement and follow-up.

FAQ

## Dungannon questions

Broken plans, closed roads, vibe coding and lesson logistics.

### How many people live in Dungannon?

NISRA's Census 2021 counts 16,282 usual residents in the Dungannon settlement and 25,640 in the Dungannon District Electoral Area.

### Are vibe coding and AI agents classes available online in Dungannon?

They are. Every lesson runs on live video, so Moygashel, Granville and anywhere else in Mid Ulster is covered for ages 6 to 67.

### What is the difference between replanning and plan repair?

Replanning throws the old plan away and plans again from the current state; plan repair keeps as much of the old plan as possible and fixes only the broken part. Repair is cheaper; replanning is usually a little better.

### How does an AI agent know a goal is unreachable?

It searches every option still open and finds no way to the goal. In our Dungannon test, 83 of 383 closures left no route inside the map, and the agent had to report that rather than keep trying.

### What does the Dungannon project involve?

An agent plans trips on 105.0 km of mapped Dungannon roads, meets a closed road partway through, and the learner compares full replanning, local repair and knowing in advance.

### Is vibe coding part of it?

Throughout: learners say what the program should do, then check and fix what the AI produces.

### At what age do agents come in?

Usually around Year 12, or later for adults starting fresh: Python has to be comfortable first. Copilot Studio work is private tuition only.

### Is there CCEA exam help?

For GCSE Digital Technology, A level Software Systems Development and Maths, yes, focused on understanding rather than any promised result.

### How much are lessons?

The first lesson is free; after that, USD 100 a month in a group or USD 150 a month one-to-one.

### Do lessons stop for school holidays?

Yes; send us the dates and we will pause.

Nearby

## More Northern Ireland pages

Each runs its own experiment: [Mid Ulster](/coding-classes-in-mid-ulster) (a linen mill's slowest machine), [Armagh](/best-coding-class-in-armagh), [Newry](/best-coding-class-in-newry) and [Derry](/best-coding-class-in-derry-londonderry). The [Northern Ireland page](/coding-and-ai-classes-in-northern-ireland) and the [UK hub](/coding-classes-in-united-kingdom) list the rest.

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20could%20we%20book%20a%20free%20vibe%20coding%20or%20AI%20agents%20lesson%20for%20a%20learner%20in%20Dungannon%3F)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-dungannon*
