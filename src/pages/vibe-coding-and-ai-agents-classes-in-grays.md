---
title: "Vibe Coding and AI Agents Classes in Grays, Essex | Ages 6 to 67"
description: "Live online vibe coding, AI agents, Python and coding classes for Grays, Little Thurrock, Chadwell St Mary and Orsett, for ages 6 to 67. First lesson free."
canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-grays
source: src/pages/vibe-coding-and-ai-agents-classes-in-grays.html
---
> Live online vibe coding, AI agents, Python and coding classes for Grays, Little Thurrock, Chadwell St Mary and Orsett, for ages 6 to 67. First lesson free.

Skip to contentCourse routes

## Grays courses in vibe coding, clear thinking and agents

Pick by age. Each route opens with a live lesson that is free and asks for no card.

[![Problem Solving and Computational Thinking for Kids course thumbnail](/images/problem-solving-kids.webp)Ages 7 to 12Problem Solving and Computational Thinking for KidsHow to think: a class votes on a secret number while two pupils are told to fib, and works out how to catch them.See the syllabus](/courses/problem-solving-and-computational-thinking-for-kids)[![Vibe Coding for Kids course thumbnail](/images/vibe-coding-kids.webp)Ages 8 to 12Vibe Coding for KidsChildren steer an AI to build Scratch games with several sprites that must share information fairly.See the syllabus](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Ages 13 to 17Vibe Coding for TeensPython and web projects built with AI help, including the Grays liar experiment as a simulation.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Generative AI Course course thumbnail](/images/generative-ai-college.webp)Students and adultsGenerative AI CourseLarge language models, retrieval and agents, with checks for agents that give confident wrong answers.See the syllabus](/courses/complete-generative-ai-masterclass-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)The borough

## Grays and the other built-up areas of Thurrock

Five of the borough's built-up areas, with the populations the ONS published for 2021.

| Built-up area | Residents (2021 census) |
| --- | --- |
| Grays | 44,345 |
| Stanford-le-Hope | 29,525 |
| Chafford Hundred and West Thurrock | 23,585 |
| South Ockendon | 22,440 |
| Tilbury | 14,185 |

Each row is the ONS's own rounded figure for one built-up area, and the rows are not meant to be added; the borough total of 176,001 is a separate count. Postcode data names Little Thurrock as a suburban area whose nearest postcode lies in the Grays built-up area, while Chadwell St Mary forms a built-up area of its own and Orsett is listed as a village. Thurrock schools follow the national curriculum for England, and we leave out any holiday weeks you tell us about.

### Essex, the East of England and how we teach

For the wider county see [coding classes in Essex](/coding-classes-in-essex), and for the region see [East of England](/coding-and-ai-classes-in-east-of-england). The thinking behind our lessons is on [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk), and the teenage route on [vibe coding for teens](/vibe-coding-for-teens).

The Grays project

## Seven agents, 100 points, and a few liars

Ask seven independent sources the same question, see how honest sources disagree, then find out how many dishonest ones the group can survive.

The learner lays a grid of 10 by 10 points, 250 m apart, over Grays and asks seven public elevation models, served by OpenTopoData, for the height of the ground at every point. Each model plays the part of an agent. Even with nobody lying, the answers differ: the gap between the highest and lowest report at a point averages 8.4 m and ranges from 2.0 m to 23.0 m. At the worst point, the seven agents said 17, 22, 28.6, 29, 29, 29 and 40 m. Two of the agents, the 30 m SRTM model and the Mapzen tiles, gave identical heights at all 100 points, which is what you would see if both drew on the same source here. Seven voices, then, but only six independent ones.

| Agent (elevation model) | Average distance from the median |
| --- | --- |
| EU-DEM, 25 m | 0.46 m |
| SRTM, 90 m | 0.50 m |
| SRTM, 30 m | 0.63 m |
| Mapzen | 0.63 m |
| GEBCO 2020 | 2.00 m |
| ASTER, 30 m | 3.89 m |
| ETOPO1 | 4.92 m |

Then some agents turn Byzantine and report whatever does the most damage. If a trusted collector combines the reports, the choice of rule decides everything. One agent claiming 1,000 m drags the mean of seven up by 139.8 m on average. The median barely notices: across every choice of which agent lies, and in either direction, one liar shifted it by 1.07 m on average and 5.00 m at most, two liars by 2.66 m and at most 8.86 m, and three liars by 6.32 m and at most 14.86 m. A fourth liar gives the liars a majority, and then the median goes wherever they send it.

Without a trusted collector, the agents must agree among themselves, relaying what they were told. We coded the Oral Messages algorithm from the 1982 paper by Lamport, Shostak and Pease, with one traitor who changes a height by 50 m. With three agents, the loyal pair ended up wrong or split in 2,000 of 3,000 runs, every run in which the traitor was one of the relaying agents. With four agents, every one of 4,000 runs ended with the loyal agents in agreement, and on the commander's value whenever the commander was loyal. That is the rule the paper proves: tolerating f traitors without a referee takes at least 3f + 1 agents.

### Ages 8 to 11

Five pupils report a measurement, two secretly fib, and the class compares averaging with picking the middle value.

### Ages 11 to 15

Fetch the seven sets of heights in Python, find the median at each point, then add a liar and measure the damage.

### Ages 15 and up

Code Oral Messages for three and four agents, run thousands of trials, and explain why three is not enough.

### Sources and limits

Heights come from the EU-DEM (produced using Copernicus data and information funded by the European Union), SRTM, ASTER GDEM, Mapzen terrain tiles, ETOPO1 and GEBCO 2020 datasets, all read through the public OpenTopoData API. The coarse global models were never meant for street-level work, so their larger gaps are expected. None of the models is ground truth, so we measure disagreement, not error. The grid, the liars, the 50 m lie and the tie rule are our choices, and other choices give other numbers.

Agents you can trust

## Why this matters for AI agents and vibe coding

A multi-agent system is only as reliable as the rule that combines what the agents say.

| In the Grays run | In AI agent design |
| --- | --- |
| Honest agents still differed by up to 23.0 m | Expect disagreement even when nothing is wrong |
| Two agents echoed each other exactly | Count independent sources, not agents |
| One liar moved the mean by 139.8 m | Averaging is fragile against one bad agent |
| The median held until liars were a majority | Robust voting buys safety up to a limit |
| Three agents failed, four agreed | With no referee, f liars need 3f + 1 agents |

Modern AI setups often run several agents or several samples from one model and then vote, a trick sometimes called self-consistency. Grays shows when that works and when it does not. Votes help against occasional wrong answers, but agents built on the same model or fed the same retrieved document can fail together, and one agent that has been manipulated can wreck a naive average. A vibe coder asking an assistant for an agent pipeline should ask one extra question: what happens if one of these agents lies? Our learners move on to building agents once they write Python with confidence, typically in sixth form or later, and Copilot Studio agents are a one-to-one course only. See [agents for UK students](/ai-agents-course-for-students-uk) and [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk).

We used open data from the Copernicus programme, the providers behind the other elevation models, OpenTopoData, the Office for National Statistics and postcodes.io. None of them endorses this page, and the simulations are ours.

Pathway

## From fibbing games to fault-tolerant agents

We place learners by age or school year first, then adjust after the free lesson.

Years 2 to 7

### How to think

Clues, evidence and spotting the witness who does not fit.

[Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)[Scratch Coding for Kids](/courses/scratch-programming-complete-course)Years 4 to 8

### Vibe coding for kids

Games made with an AI partner, then tested by breaking them.

[Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[Python and AI for Kids](/courses/python-ai-kids-masterclass)Years 9 to 13

### Python, simulation and AI

Voting rules, simulations and models, beside GCSE and A level work.

[Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[Python for Teens](/courses/python-complete-masterclass-teens)Adults

### Agents built to be doubted

Sound Python, then language models, retrieval and agents.

[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)[Generative AI Course](/courses/complete-generative-ai-masterclass-college)Agents and trust

## What is Byzantine fault tolerance?

Byzantine fault tolerance is the ability of a group of computers or AI agents to reach a correct shared decision even when some members send wrong or contradictory messages, and without a trusted referee it needs at least 3f + 1 members to survive f such faults.

In the Grays run, seven elevation models acted as agents: one liar moved their mean by 139.8 m, while the median of the seven moved at most 5.00 m and stayed bounded until liars made up a majority.

When the agents had to agree among themselves, three agents with one traitor went wrong in 2,000 of 3,000 runs, and four agents got it right in all 4,000.

A Grays teenager who has written that simulation will design agent systems that assume some agents fail, which is exactly what the field needs. You gain that from building and breaking the code yourself, which is why learning to code still pays in 2026. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

Lessons

## Little Thurrock, Chadwell St Mary and Orsett on a live call

A laptop or desktop with a webcam and a home internet connection is all the kit.

### Code, not slides

Learners type on a shared screen while the tutor keeps asking what the code will do next.

### A trial to find the level

The free lesson shows us where to start, and we write down any exam board.

### Nothing to pay at first

Lesson one is free, no card is taken, and a course suggestion follows.

### Matched classmates

Groups of fifteen to twenty learners at one level, drawn from across the UK.

### Two lessons weekly

Holiday weeks you give us are kept free.

### Clock changes handled

Our tutors move with British Summer Time so your lesson time does not.

Why online

A class where everyone shares a level needs learners from far and wide. A single borough cannot provide them, but the whole UK can.

Fees

## Fees for Grays

Grays pays our international rates, the same for every country except India.

First class**USD 0**

A full free lesson, ending with the course we would suggest.

Group tuition**USD 100**

Roughly eight live group lessons each month.

Private tuition**USD 150**

Roughly eight live one-to-one lessons each month.

We bill in US dollars and quote no sterling amount. Billing starts only after the trial has fixed a course and a regular slot; the pricing page explains breaks, missed sessions and switching between group and private.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20vibe%20coding%20or%20AI%20agents%20lesson%20for%20a%20learner%20in%20Grays.)Reviews

## Google reviews from Essex families and learners around the UK

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

## Book a free lesson for Grays

Tell us an age or school year and one thing the learner enjoys. The trial could be a liar-spotting game, a Scratch project built with AI, first steps in Python, or a small agent that checks its own answers.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Grays one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20vibe%20coding%20or%20AI%20agents%20lesson%20for%20a%20learner%20in%20Grays.)

Submitted details are used for placement and follow-up.

FAQ

## Grays questions

Agents, the liar project, vibe coding and the practical details.

### How many people live in Grays?

The ONS counted 44,345 residents in the Grays built-up area at the 2021 census, within the borough of Thurrock at 176,001.

### Are there online vibe coding classes for Grays?

Yes. Lessons are live on video for ages 6 to 67, so Grays, Little Thurrock, Chadwell St Mary and Orsett are all within reach.

### What is a multi-agent AI system?

A setup in which several AI agents, each with its own task or view, work on one problem and pass results to each other or to a coordinator.

### Why is the median safer than the mean?

One extreme report can drag a mean anywhere, but it can shift a median only as far as the next honest value, so the median holds until liars are a majority.

### What happens in the Grays project?

Learners collect heights for 100 points from seven elevation models in Python, measure how honest sources disagree, then add liars and code the Oral Messages algorithm.

### What is vibe coding?

Vibe coding means telling an AI in plain words what program you want, letting it write the code, and then checking and fixing that code yourself. We teach it at every age, with the checking built in.

### When can learners build AI agents?

Once they can write Python unaided, usually from sixth form or as adults. Copilot Studio agents are taught one-to-one only.

### Can you help with GCSE or A level?

Yes, in computer science and maths, with understanding as the goal. No grade outcome is promised.

### What are the fees?

Nothing for lesson one. Then it is USD 100 monthly for a class seat, or USD 150 monthly to learn with a tutor alone.

### Do lessons stop for holidays?

They can. Give us the dates and those weeks stay empty.

Beyond Grays

## More pages for Essex and the East of England

Other projects are on the [Basildon](/best-coding-and-ai-classes-in-basildon), [Brentwood](/online-coding-and-python-classes-in-brentwood) and [Southend-on-Sea](/best-coding-class-in-southend-on-sea) pages, and the county page is [Essex](/coding-classes-in-essex). Everything else is linked from the [UK hub](/coding-classes-in-united-kingdom).

Book the free class[Book a priority demo](/book-demo)[Chat with us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20vibe%20coding%20or%20AI%20agents%20lesson%20for%20a%20learner%20in%20Grays.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-grays*
