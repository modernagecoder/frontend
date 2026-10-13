---
title: "Vibe Coding and AI Agents Classes in Coleraine | Ages 6 to 67"
description: "Live online vibe coding, AI agents and Python lessons for Coleraine, Killowen and Causeway Coast and Glens learners aged 6 to 67, P1 to adult. First lesson free."
canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-coleraine
source: src/pages/vibe-coding-and-ai-agents-classes-in-coleraine.html
---
> Live online vibe coding, AI agents and Python lessons for Coleraine, Killowen and Causeway Coast and Glens learners aged 6 to 67, P1 to adult. First lesson free.

Skip to contentColeraine course picks

## Coleraine courses in systems thinking, vibe coding and agents

Four starting points by age. Each one opens with a free live class, and nobody is asked for card details.

[![Problem Solving and Computational Thinking for Kids course thumbnail](/images/problem-solving-kids.webp)Ages 7 to 12Problem Solving and Computational Thinking for KidsThe how-to-think course: passing messages along a chain and seeing how long news takes to spread.See the syllabus](/courses/problem-solving-and-computational-thinking-for-kids)[![Vibe Coding for Kids course thumbnail](/images/vibe-coding-kids.webp)Ages 8 to 12Vibe Coding for KidsScratch games planned by the learner, coded with an AI and tested hard.See the syllabus](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Ages 13 to 17Vibe Coding for TeensPython and web projects with AI help, including the Coleraine junction agents.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Generative AI Course course thumbnail](/images/generative-ai-college.webp)Students and adultsGenerative AI CourseMulti-agent systems, message passing and building agents in Python.See the syllabus](/courses/complete-generative-ai-masterclass-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Coleraine and Causeway Coast and Glens

## Coleraine, Killowen and the Causeway Coast and Glens

NISRA 2021 census counts for the town, its electoral area and the district.

| NISRA area | Type | People |
| --- | --- | --- |
| Coleraine town | Settlement, approximated | 24,483 |
| Coleraine | Electoral area (DEA) | 23,625 |
| Causeway Coast and Glens | Council | 141,746 |

The settlement and the electoral area share a name but not a boundary, which is why their figures differ; we show each as NISRA publishes it and never combine them. On OpenStreetMap, Killowen and The Crannagh appear as localities within the town. Coleraine pupils follow the Northern Ireland Curriculum, and our tutors use the same P1 to Year 14 structure, with CCEA GCSE and A level work where needed. Share your school holiday dates and we will plan around them.

### Causeway Coast, Derry~Londonderry and CCEA

See [coding classes in Causeway Coast and Glens](/coding-classes-in-causeway-coast-and-glens), [Derry~Londonderry](/best-coding-class-in-derry-londonderry) and [CCEA A level Software Systems Development help](/ccea-a-level-software-systems-development-help). Our reasons for teaching thinking first are on [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

The Coleraine project

## Agents that only talk to neighbours: distance-vector routing on Coleraine's roads

A network of junction agents, rounds of messages, a closed bridge, and a fix called poison reverse.

The learner downloads the public roads of Coleraine from OpenStreetMap and simplifies them to 1,459 junctions joined by 1,601 links, 119.7 km in total, ignoring one-way rules for this experiment. The destination is the junction nearest the point OpenStreetMap uses to label the town. Each junction becomes an agent that remembers one number, how far it believes it is from the destination. In every round, all agents at once ask each neighbour for that neighbour's number, add the length of the road between them, and keep the smallest total. The destination always says zero; everyone else starts at infinity.

| Situation | Rounds until every agent is right | Messages exchanged |
| --- | --- | --- |
| Starting from nothing | 41 | 134,442 |
| After closing the Bann Bridge, plain method | 663 | 2,124,136 |
| After closing the Bann Bridge, with poison reverse | 167 | 537,432 |
| Reopening the bridge | 36 | Not counted |

From a cold start the agents agree in 41 rounds, and every final estimate matches Dijkstra's algorithm exactly; the farthest junction is 35 links from the destination, so good news needs only a little longer than that to reach everyone. Then the learner deletes the road OpenStreetMap names the A2 Coleraine Bann Bridge. Traffic can still cross by Sandelford Bridge, but 610 junctions now have a longer true route, typically by 2,229 m. Their agents do not know that. Each still hears old, optimistic numbers from neighbours who were relying on it, so estimates creep upwards a little at a time. The plain method takes 663 rounds and over two million messages to settle. With poison reverse, where an agent tells the neighbour it routes through that its own distance is infinite, it takes 167. Reopening the bridge, good news again, takes just 36.

### P5 to P7

Pass a whispered number down a row of friends, then change the start and see how long the correction takes to arrive.

### Years 8 to 10

Build a tiny road network in Python and let each junction update from its neighbours one round at a time.

### Years 11 to 14

Run distance-vector routing on all of Coleraine, close a bridge, and add poison reverse to speed recovery.

### OpenStreetMap roads, our agents

Road geometry and bridge names are from OpenStreetMap and its contributors under the Open Database Licence. One-way rules were ignored and the closure is imaginary; the agents, rounds and message counts are our own work.

Agent teams

## What this teaches about vibe coding and AI agents

Stale news loves an echo chamber, even one made of software.

| In the routing project | When AI agents share information |
| --- | --- |
| 41 rounds to agree from scratch | Local messages can reach a correct global answer |
| 663 rounds after a bridge closed | Bad news spreads slowly through a team |
| Neighbours kept echoing old numbers | Agents can reinforce each other's stale beliefs |
| Poison reverse cut it to 167 | Simple rules about who to trust help a lot |
| Reopening took only 36 rounds | Good news spreads fast, which can hide the problem |

Multi-agent AI systems pass summaries, plans and findings between agents, and the same trap applies: if agent A relied on agent B, and B now relies on A, a wrong belief can bounce between them for a long time. With vibe coding the learner states the goal while an AI produces the code; in Coleraine lessons they also decide what each agent may believe from others and how old news is flagged, then test it by breaking something on purpose. Agents that act for people need that design more than any. Agent building is for learners whose Python already stands on its own, mostly sixth-formers and adults, and Copilot Studio agents are covered only one-to-one. Next steps are on [the agents course for UK students](/ai-agents-course-for-students-uk); our teaching principle is on [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk).

We used NISRA and OpenStreetMap open data; neither organisation is involved with Modern Age Coders, and the junction agents, bugs included, are our own.

Stages

## From whisper chains to agent networks

The school year, P1 to Year 14, is our first guide; the trial lesson confirms the level.

P1 to P7

### How to think

Passing messages, keeping track and noticing when news goes stale.

[Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)[Scratch Coding for Kids](/courses/scratch-programming-complete-course)P5 to Year 9

### Vibe coding for kids

Games and apps planned by the learner and built with AI help.

[Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[Python and AI for Kids](/courses/python-ai-kids-masterclass)Years 10 to 14

### Python and networks

Graphs, routing and simulation alongside CCEA GCSE and A level.

[Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[Data Structures & Algorithms Course](/courses/data-structures-algorithms-masterclass-college)Adults

### Multi-agent AI

Agent teams, message passing and trust rules, built in Python.

[Generative AI Course](/courses/complete-generative-ai-masterclass-college)[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)Agents and coordination

## How do AI agents coordinate when each can only talk to its neighbours?

They pass messages: each agent shares its current estimate with its neighbours and updates from theirs, as in distance-vector routing, a distributed Bellman-Ford method that reaches the right answer but spreads bad news slowly.

On Coleraine's road network, 1,459 junction agents agreed on every route in 41 rounds, but after the Bann Bridge was removed they needed 663 rounds to recover, or 167 with poison reverse.

Learners who have watched that happen ask of any team of AI agents: how does a correction reach everyone, and what stops old beliefs bouncing back?

Designing how agents share news keeps Coleraine teenagers in control of the systems they build, and learning to code is where that begins in 2026. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

How it works

## Lessons reach Coleraine by video

No kit beyond a webcam-equipped computer and broadband good enough for a call.

### Learner-built

Everything on screen is typed by the student, and the tutor keeps asking what the next round will change.

### Level from the trial

The free session shows where to start, with any CCEA exam noted.

### Trial on the house

Session one is free, and it closes with the course we would choose for the learner.

### Classmates at your level

Each group seats fifteen to twenty learners, chosen by stage rather than by town.

### Twice a week

Lessons pause in school holidays.

### Same hour all year

Our tutors move with the UK clock changes so you do not have to.

Why online

Five learners at one level who share a free evening rarely live near each other. Online, distance is no obstacle.

Fees

## Coleraine fees

Coleraine learners pay our international rates, which cover every country except India.

First class**USD 0**

A full lesson free, followed by our advice.

Group tuition**USD 100**

Around eight live group lessons a month.

Private tuition**USD 150**

Around eight live one-to-one lessons a month.

Fees are set in US dollars, never pounds, and billing starts only once the trial has fixed a course and a weekly slot. The pricing page explains holidays, absences and switching between group and private.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20could%20we%20book%20a%20free%20vibe%20coding%20or%20AI%20agents%20lesson%20for%20a%20learner%20in%20Coleraine%3F)Reviews

## Google reviews: north coast parents and UK learners

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

## Book a free Coleraine lesson

All we need is an age or year group and one interest. The trial could open with a whisper-chain puzzle, a Scratch game made with an AI, first steps in Python, or a few junction agents passing messages.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Coleraine one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20could%20we%20book%20a%20free%20vibe%20coding%20or%20AI%20agents%20lesson%20for%20a%20learner%20in%20Coleraine%3F)

Submitted details are used for placement and follow-up.

FAQ

## Coleraine questions

Neighbour-to-neighbour agents, the bridge experiment, vibe coding and lesson logistics.

### What is the population of Coleraine?

NISRA approximates the Coleraine settlement at 24,483 usual residents in the 2021 census.

### Can Coleraine learners take these classes online?

They are. Every class is a live video call, open to ages 6 to 67 from Coleraine to Limavady and Ballymoney.

### What is the Bellman-Ford algorithm?

A shortest-path method that repeatedly relaxes every link, improving each distance estimate from its neighbours. Run by many agents at once, it becomes distance-vector routing.

### What is the count-to-infinity problem?

When a route breaks, neighbours keep quoting each other's outdated distances, so estimates climb slowly instead of updating at once. After our Bann Bridge closure the plain method took 663 rounds to settle.

### What does the Coleraine project involve?

Turning 119.7 km of Coleraine roads into 1,459 junction agents that learn routes by messaging neighbours, then closing a bridge and measuring the recovery with and without poison reverse.

### How does vibe coding fit in?

It runs through every stage: the learner sets the goal in words, the AI drafts code, and the learner hunts down whatever is wrong with it.

### How soon do learners build agents?

When their Python no longer needs propping up, usually sixth form or later; Copilot Studio is private tuition only.

### Do you support CCEA GCSE and A level?

Yes, in computing and maths, including A level Software Systems Development, taught for understanding with no grade promised.

### What are the fees?

The trial costs nothing; carrying on is USD 100 per month with a group or USD 150 per month on your own.

### Are lessons paused in the holidays?

They do stop for school holidays; just tell us when.

Nearby

## Elsewhere on the north coast and across Northern Ireland

Each runs a different experiment: [Causeway Coast and Glens](/coding-classes-in-causeway-coast-and-glens) (why three runways), [Derry~Londonderry](/best-coding-class-in-derry-londonderry), [Mid and East Antrim](/coding-classes-in-mid-and-east-antrim) and [Belfast](/best-coding-class-in-belfast). For other places, start from [Northern Ireland](/coding-and-ai-classes-in-northern-ireland) or the [UK hub](/coding-classes-in-united-kingdom).

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20could%20we%20book%20a%20free%20vibe%20coding%20or%20AI%20agents%20lesson%20for%20a%20learner%20in%20Coleraine%3F)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-coleraine*
