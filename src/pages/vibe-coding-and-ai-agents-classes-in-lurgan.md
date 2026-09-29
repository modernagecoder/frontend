---
title: "Vibe Coding and AI Agents Classes in Lurgan | Ages 6 to 67"
description: "Live online vibe coding, AI agents and Python lessons for Lurgan, Mourneview, Taghneven and Toberhewny learners in County Armagh, aged 6 to 67. First lesson free."
canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-lurgan
source: src/pages/vibe-coding-and-ai-agents-classes-in-lurgan.html
---
> The Lurgan District Electoral Area had 38,198 usual residents in NISRA's Census 2021 tables; the town itself is counted inside the Craigavon Urban Area settlement, which NISRA does not divide. Mourneview, Taghneven, Toberhewny, Drumnamoe, Knocknashane and Ballyblagh are among the neighbourhood names OpenStreetMap places around the centre. Learners from P1 up to adults of 67 can take vibe coding, AI agents, Python, coding and maths with a tutor in India on live video, privately or in a group of five to ten who share a stage. We put reasoning ahead of tools, so a learner knows why an agent chose what it did. There is no charge for the first lesson, which ends with a suggested course. The Lurgan project lays a 1.2 km grid over the town centre and teaches a small robot agent to plan for the fact that its moves sometimes go wrong. Group lessons afterwards cost USD 100 a month, private lessons USD 150 a month.

[Home](/) / [United Kingdom](/coding-classes-in-united-kingdom) / [Northern Ireland](/coding-and-ai-classes-in-northern-ireland) / Lurgan

Lurgan, County Armagh, Northern Ireland / Live online

# Vibe coding and AI agents classes in Lurgan

**Where can Lurgan learners find the best vibe coding and AI agents classes?** The Lurgan District Electoral Area had 38,198 usual residents in NISRA's Census 2021 tables; the town itself is counted inside the Craigavon Urban Area settlement, which NISRA does not divide. Mourneview, Taghneven, Toberhewny, Drumnamoe, Knocknashane and Ballyblagh are among the neighbourhood names OpenStreetMap places around the centre. Learners from P1 up to adults of 67 can take vibe coding, AI agents, Python, coding and maths with a tutor in India on live video, privately or in a group of five to ten who share a stage. We put reasoning ahead of tools, so a learner knows why an agent chose what it did. There is no charge for the first lesson, which ends with a suggested course. The Lurgan project lays a 1.2 km grid over the town centre and teaches a small robot agent to plan for the fact that its moves sometimes go wrong. Group lessons afterwards cost USD 100 a month, private lessons USD 150 a month.

Most route planners assume that every step goes exactly as intended. Real agents, from delivery robots to software agents calling unreliable tools, cannot assume that. The standard way to plan when actions are uncertain is a Markov decision process: list the states, the actions, the chance of each outcome and the cost of each, then work out the cheapest action in every state, not just along one route. The method that does the working out, value iteration, repeats one simple update until the numbers stop changing. This project builds a small robot world on a 20 m grid over central Lurgan from OpenStreetMap, where buildings block the way and main roads are expensive to stray onto, and compares a naive planner with a proper policy.

Facts last verified 29 September 2026. Teaching is online; no Lurgan branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Where Lurgan learners begin

Four routes in, one per age range; the first live lesson on each costs nothing and needs no card.

- [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids) (Ages 7 to 12): The how-to-think course: board-game moves, chance and planning a safe way across.
- [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev) (Ages 8 to 12): Scratch games the learner designs, builds with an AI and tests to destruction.
- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python and web projects with AI help, including the Lurgan robot grid.
- [Generative AI Course](/courses/complete-generative-ai-masterclass-college) (Students and adults): Agents that plan, cope with failure and use tools, built in Python.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Lurgan, Mourneview, Taghneven and Toberhewny

NISRA's count for the Lurgan electoral area, and neighbourhood names on the map.

**Lurgan in NISRA Census 2021 table MS-A01, usual residents**

| Area | Census geography | Usual residents |
|---|---|---|
| Lurgan | District Electoral Area | 38,198 |

NISRA counts Lurgan together with Portadown and Craigavon as one urban settlement, so no stand-alone Lurgan settlement figure exists; the electoral area also includes countryside. OpenStreetMap places Ballyblagh, Dougher, Drumnamoe, Knocknashane, Mourneview, Silverwood, Taghneven, Tannaghmore and Toberhewny as neighbourhood names in and around the town. Local schools follow the Northern Ireland Curriculum; we plan lessons by primary class and post-primary year and support CCEA GCSE and A level. Tell us when your holidays are and lessons will skip them.

### Other Northern Ireland pages and CCEA

Visit [coding and AI classes in Northern Ireland](/coding-and-ai-classes-in-northern-ireland), [Portadown](/best-coding-and-ai-classes-in-portadown) and [CCEA A level Software Systems Development help](/ccea-a-level-software-systems-development-help). Why we teach thinking before tools is on [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

## Planning for slips: a Markov decision process on a grid over central Lurgan

A robot, 3,600 squares of real town, moves that sometimes go astray, and two ways of deciding what to do.

The learner downloads OpenStreetMap data and lays a 60 by 60 grid of 20 m squares over central Lurgan, centred on the point the map uses to label the town. A square is blocked if its centre falls inside a mapped building (503 squares) and counts as a main-road square if a trunk, primary, secondary or tertiary road crosses it (346). A toy delivery robot must get from near one corner to near the opposite one. Every move costs 1, and landing on a main-road square costs 10 more, standing in for the risk of being there. The twist: a move goes the chosen way only 80% of the time; otherwise the robot slips sideways.

The naive planner finds the cheapest route as if slips never happened, and after each slip simply replans from wherever it ended up. The Markov decision process instead uses value iteration to work out, for all 3,085 reachable squares, the expected cost to the goal and the action that minimises it, slips included. It needed 229 rounds of updates to settle.

**Robot runs across central Lurgan with a 20% chance of slipping, 4,000 simulated journeys each, our Python run on OpenStreetMap data**

| Approach | Average cost | Main-road squares entered | Worst tenth of runs cost at least |
|---|---|---|---|
| Cheapest route with no slips at all | 132 | n/a | n/a |
| Plan that ignores slips, replanning | 186.9 | 3.65 | 214 |
| MDP policy from value iteration | 173.3 | 2.92 | 194 |

Slips make every journey dearer, but the policy that expects them does noticeably better: its average cost is 7% lower, it strays onto main roads 20% less often, and its bad days are less bad, with the worst tenth of runs costing 194 rather than 214. The difference shows in where it walks: of the naive planner's steps off the main roads, 10.7% were on a square right beside one, against 6.4% for the policy, which gives itself room to slip. The model's own prediction of its average cost, 173.6, matched the simulation closely, a useful check that the maths and the code agree.

### P5 to P7

Play a board game where a dice roll sometimes pushes your counter sideways, and find the safer path.

### Years 8 to 10

Build the Lurgan grid in Python from map data and mark buildings and main roads.

### Years 11 to 14

Code value iteration, simulate thousands of runs and compare the policy with a naive plan.

### OpenStreetMap data, our robot

Buildings and roads are from OpenStreetMap and its contributors under the Open Database Licence. The grid, the costs, the slip rate and every result are our own modelling choices for a teaching exercise, not advice about real streets.

## What this teaches about vibe coding and AI agents

Hoping every step works is not a strategy.

**From the Lurgan robot to real AI agents**

| In the grid project | When an AI agent acts in the world |
|---|---|
| Moves went astray 20% of the time | Tools fail and actions misfire |
| The naive planner averaged 186.9 | Planning as if all goes well costs more |
| The MDP policy averaged 173.3 | Planning for failure pays off |
| It kept away from main roads | Leave a margin near costly mistakes |
| Model and simulation agreed | Check the maths against real runs |

Software agents face their own slips: a web page that fails to load, a tool that returns an error, an instruction misread. An agent designed around the happy path keeps getting into trouble; one that plans for likely failures keeps a margin. In vibe coding the learner explains a program while an AI writes it; our Lurgan learners also ask what happens when each step fails, and write that into the design. Agents that act on your behalf need that thinking most of all. Learners take on agent building once their Python stands up on its own, typically Year 12 onwards or as adults, and Copilot Studio agents are private lessons only. Read [the UK student agents course](/ai-agents-course-for-students-uk) and [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk).

OpenStreetMap, NISRA and Armagh City, Banbridge and Craigavon Borough Council have no part in this page; we used openly published data only, and the robot model with any errors in it is ours.

## From dice-roll board games to planning agents

We take primary class or school year as a hint and let the free lesson decide.

- **P1 to P7: How to think** Chance, safe paths and thinking a move ahead. [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **P5 to Year 9: Vibe coding for kids** Games and small apps built with AI help and tested by the learner. [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev), [Python and AI for Kids](/courses/python-ai-kids-masterclass)
- **Years 10 to 14: Python and probability** Grids, expected values and simulation beside CCEA GCSE and A level. [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course), [Statistics & Probability](/courses/statistics-probability-maths-course)
- **Adults: Agents under uncertainty** Decision-making, failure handling and tool use in Python agents. [Generative AI Course](/courses/complete-generative-ai-masterclass-college), [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)

## What is a Markov decision process, and why do AI agents need one?

A Markov decision process describes a task as states, actions, the probability of each outcome and its cost, so an agent can compute the lowest-cost action for every state even when actions do not always work as intended.

On a 20 m grid over central Lurgan with a 20% chance of slipping, a policy found by value iteration averaged a cost of 173.3 per journey and entered 2.92 main-road squares, against 186.9 and 3.65 for a planner that assumed every move would work.

Learners who have built that robot ask of any AI agent: what does it do when a step fails, and did anyone plan for that?

Planning for failure is what keeps Lurgan teenagers in charge of the agents they build, and learning to code is how that becomes a habit in 2026. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Mourneview to Toberhewny, over video

Bring a laptop or desktop with a camera and an internet line good enough for a call.

- **Learner does the typing** Code, prompts and runs come from the student, while the tutor watches the shared screen and asks what could go wrong.
- **Start set by the trial** The free session shows the right first topic; CCEA courses are noted.
- **Trial without charge** Lesson one costs nothing and closes with our course pick.
- **Stage-based groups** Five to ten learners from across the UK, all at one level.
- **Twice weekly** No lessons during school holidays.
- **Fixed hour** UK clock changes are our tutors' job, not your timetable's.

**Why online** Five learners at the same level, all free the same evening, seldom live near each other. Online, they can still learn together.

## Lurgan fees

Lurgan learners are on our international price list, used in every country except India.

- First class: USD 0. One whole lesson free, followed by advice.
- Group tuition: USD 100 a month. Around eight live small-group lessons per month.
- Private tuition: USD 150 a month. Around eight live one-to-one lessons per month.

Lurgan accounts are billed in US dollars, never pounds, starting only once the free trial has pinned down a course and a lesson slot. The pricing page covers holidays, absences and moving between private and group tuition.

## Lurgan questions

### How many people live in Lurgan?

NISRA's Census 2021 counts 38,198 usual residents in the Lurgan District Electoral Area. The town is part of the Craigavon Urban Area settlement, which NISRA does not split by town.

### Are vibe coding and AI agents classes available online in Lurgan?

Yes, through live video lessons for ages 6 to 67 in Lurgan and across County Armagh.

### What is value iteration?

A method for solving a Markov decision process: start with guesses of each state's cost to the goal and repeatedly update them using the cheapest action, until they stop changing. On our Lurgan grid it settled after 229 rounds.

### What is the difference between a plan and a policy?

A plan is one fixed sequence of moves; a policy says what to do in every possible state. A policy copes when a slip puts the agent somewhere unexpected.

### What does the Lurgan project involve?

Building a 20 m grid over central Lurgan from OpenStreetMap, solving it as a Markov decision process and comparing 4,000 simulated journeys against a planner that ignores slips.

### Do you teach vibe coding?

Yes, at every age; learners describe the program, then check and fix what the AI writes.

### When can learners build AI agents?

Usually from Year 12, or in adulthood, once Python holds up without help; Copilot Studio is taught privately.

### Do you support CCEA exams?

Yes, in computing and maths at GCSE and A level, taught for understanding and never with a promised grade.

### What do lessons cost?

Nothing for the taster. Continuing costs USD 100 for each month of group classes or USD 150 for each month of private teaching.

### Are lessons paused for holidays?

Yes, during school holidays; send us the dates.

## Other Northern Ireland pages

Each has its own project: [Portadown](/best-coding-and-ai-classes-in-portadown) (what makes a junction central), [Armagh](/best-coding-class-in-armagh), [Lisburn](/best-coding-class-in-lisburn) and [Belfast](/best-coding-class-in-belfast). Everywhere else is on the [Northern Ireland page](/coding-and-ai-classes-in-northern-ireland) or the [UK hub](/coding-classes-in-united-kingdom).

## Contact

Book the free class on [https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-lurgan](https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-lurgan#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
