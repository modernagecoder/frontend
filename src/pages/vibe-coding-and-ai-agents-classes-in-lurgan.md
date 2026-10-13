---
title: "Vibe Coding and AI Agents Classes in Lurgan | Ages 6 to 67"
description: "Live online vibe coding, AI agents and Python lessons for Lurgan, Mourneview, Taghneven and Toberhewny learners in County Armagh, aged 6 to 67. First lesson free."
canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-lurgan
source: src/pages/vibe-coding-and-ai-agents-classes-in-lurgan.html
---
> Live online vibe coding, AI agents and Python lessons for Lurgan, Mourneview, Taghneven and Toberhewny learners in County Armagh, aged 6 to 67. First lesson free.

Skip to contentLurgan course picks

## Where Lurgan learners begin

Four routes in, one per age range; the first live lesson on each costs nothing and needs no card.

[![Problem Solving and Computational Thinking for Kids course thumbnail](/images/problem-solving-kids.webp)Ages 7 to 12Problem Solving and Computational Thinking for KidsThe how-to-think course: board-game moves, chance and planning a safe way across.See the syllabus](/courses/problem-solving-and-computational-thinking-for-kids)[![Vibe Coding for Kids course thumbnail](/images/vibe-coding-kids.webp)Ages 8 to 12Vibe Coding for KidsScratch games the learner designs, builds with an AI and tests to destruction.See the syllabus](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Ages 13 to 17Vibe Coding for TeensPython and web projects with AI help, including the Lurgan robot grid.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Generative AI Course course thumbnail](/images/generative-ai-college.webp)Students and adultsGenerative AI CourseAgents that plan, cope with failure and use tools, built in Python.See the syllabus](/courses/complete-generative-ai-masterclass-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Lurgan in the census

## Lurgan, Mourneview, Taghneven and Toberhewny

NISRA's count for the Lurgan electoral area, and neighbourhood names on the map.

| Area | Census geography | Usual residents |
| --- | --- | --- |
| Lurgan | District Electoral Area | 38,198 |

NISRA counts Lurgan together with Portadown and Craigavon as one urban settlement, so no stand-alone Lurgan settlement figure exists; the electoral area also includes countryside. OpenStreetMap places Ballyblagh, Dougher, Drumnamoe, Knocknashane, Mourneview, Silverwood, Taghneven, Tannaghmore and Toberhewny as neighbourhood names in and around the town. Local schools follow the Northern Ireland Curriculum; we plan lessons by primary class and post-primary year and support CCEA GCSE and A level. Tell us when your holidays are and lessons will skip them.

### Other Northern Ireland pages and CCEA

Visit [coding and AI classes in Northern Ireland](/coding-and-ai-classes-in-northern-ireland), [Portadown](/best-coding-and-ai-classes-in-portadown) and [CCEA A level Software Systems Development help](/ccea-a-level-software-systems-development-help). Why we teach thinking before tools is on [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

The Lurgan project

## Planning for slips: a Markov decision process on a grid over central Lurgan

A robot, 3,600 squares of real town, moves that sometimes go astray, and two ways of deciding what to do.

The learner downloads OpenStreetMap data and lays a 60 by 60 grid of 20 m squares over central Lurgan, centred on the point the map uses to label the town. A square is blocked if its centre falls inside a mapped building (503 squares) and counts as a main-road square if a trunk, primary, secondary or tertiary road crosses it (346). A toy delivery robot must get from near one corner to near the opposite one. Every move costs 1, and landing on a main-road square costs 10 more, standing in for the risk of being there. The twist: a move goes the chosen way only 80% of the time; otherwise the robot slips sideways.

The naive planner finds the cheapest route as if slips never happened, and after each slip simply replans from wherever it ended up. The Markov decision process instead uses value iteration to work out, for all 3,085 reachable squares, the expected cost to the goal and the action that minimises it, slips included. It needed 229 rounds of updates to settle.

| Approach | Average cost | Main-road squares entered | Worst tenth of runs cost at least |
| --- | --- | --- | --- |
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

Agents and uncertainty

## What this teaches about vibe coding and AI agents

Hoping every step works is not a strategy.

| In the grid project | When an AI agent acts in the world |
| --- | --- |
| Moves went astray 20% of the time | Tools fail and actions misfire |
| The naive planner averaged 186.9 | Planning as if all goes well costs more |
| The MDP policy averaged 173.3 | Planning for failure pays off |
| It kept away from main roads | Leave a margin near costly mistakes |
| Model and simulation agreed | Check the maths against real runs |

Software agents face their own slips: a web page that fails to load, a tool that returns an error, an instruction misread. An agent designed around the happy path keeps getting into trouble; one that plans for likely failures keeps a margin. In vibe coding the learner explains a program while an AI writes it; our Lurgan learners also ask what happens when each step fails, and write that into the design. Agents that act on your behalf need that thinking most of all. Learners take on agent building once their Python stands up on its own, typically Year 12 onwards or as adults, and Copilot Studio agents are private lessons only. Read [the UK student agents course](/ai-agents-course-for-students-uk) and [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk).

OpenStreetMap, NISRA and Armagh City, Banbridge and Craigavon Borough Council have no part in this page; we used openly published data only, and the robot model with any errors in it is ours.

Stages

## From dice-roll board games to planning agents

We take primary class or school year as a hint and let the free lesson decide.

P1 to P7

### How to think

Chance, safe paths and thinking a move ahead.

[Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)[Scratch Coding for Kids](/courses/scratch-programming-complete-course)P5 to Year 9

### Vibe coding for kids

Games and small apps built with AI help and tested by the learner.

[Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[Python and AI for Kids](/courses/python-ai-kids-masterclass)Years 10 to 14

### Python and probability

Grids, expected values and simulation beside CCEA GCSE and A level.

[Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[Statistics & Probability](/courses/statistics-probability-maths-course)Adults

### Agents under uncertainty

Decision-making, failure handling and tool use in Python agents.

[Generative AI Course](/courses/complete-generative-ai-masterclass-college)[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)Agents and planning

## What is a Markov decision process, and why do AI agents need one?

A Markov decision process describes a task as states, actions, the probability of each outcome and its cost, so an agent can compute the lowest-cost action for every state even when actions do not always work as intended.

On a 20 m grid over central Lurgan with a 20% chance of slipping, a policy found by value iteration averaged a cost of 173.3 per journey and entered 2.92 main-road squares, against 186.9 and 3.65 for a planner that assumed every move would work.

Learners who have built that robot ask of any AI agent: what does it do when a step fails, and did anyone plan for that?

Planning for failure is what keeps Lurgan teenagers in charge of the agents they build, and learning to code is how that becomes a habit in 2026. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

How it works

## Mourneview to Toberhewny, over video

Bring a laptop or desktop with a camera and an internet line good enough for a call.

### Learner does the typing

Code, prompts and runs come from the student, while the tutor watches the shared screen and asks what could go wrong.

### Start set by the trial

The free session shows the right first topic; CCEA courses are noted.

### Trial without charge

Lesson one costs nothing and closes with our course pick.

### Stage-based groups

Fifteen to twenty learners from across the UK, all at one level.

### Twice weekly

No lessons during school holidays.

### Fixed hour

UK clock changes are our tutors' job, not your timetable's.

Why online

Five learners at the same level, all free the same evening, seldom live near each other. Online, they can still learn together.

Fees

## Lurgan fees

Lurgan learners are on our international price list, used in every country except India.

First class**USD 0**

One whole lesson free, followed by advice.

Group tuition**USD 100**

Around eight live small-group lessons per month.

Private tuition**USD 150**

Around eight live one-to-one lessons per month.

Lurgan accounts are billed in US dollars, never pounds, starting only once the free trial has pinned down a course and a lesson slot. The pricing page covers holidays, absences and moving between private and group tuition.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20could%20we%20book%20a%20free%20vibe%20coding%20or%20AI%20agents%20lesson%20for%20a%20learner%20in%20Lurgan%3F)Reviews

## Parents and learners from across the UK on Google

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

## Book a free Lurgan lesson

Share an age or school year and something the learner likes doing. A trial might be a slippery-dice board game, a Scratch game designed with an AI, early Python, or a tiny robot planner on a real map.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Lurgan one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20could%20we%20book%20a%20free%20vibe%20coding%20or%20AI%20agents%20lesson%20for%20a%20learner%20in%20Lurgan%3F)

Submitted details are used for placement and follow-up.

FAQ

## Lurgan questions

Planning under uncertainty, the robot grid, vibe coding, Python and practical points.

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

Nearby

## Other Northern Ireland pages

Each has its own project: [Portadown](/best-coding-and-ai-classes-in-portadown) (what makes a junction central), [Armagh](/best-coding-class-in-armagh), [Lisburn](/best-coding-class-in-lisburn) and [Belfast](/best-coding-class-in-belfast). Everywhere else is on the [Northern Ireland page](/coding-and-ai-classes-in-northern-ireland) or the [UK hub](/coding-classes-in-united-kingdom).

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20could%20we%20book%20a%20free%20vibe%20coding%20or%20AI%20agents%20lesson%20for%20a%20learner%20in%20Lurgan%3F)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-lurgan*
