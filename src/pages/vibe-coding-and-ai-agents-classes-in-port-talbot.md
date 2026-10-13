---
title: "Vibe Coding and AI Agents Classes in Port Talbot | Ages 6 to 67"
description: "Live online vibe coding and AI agents classes for Port Talbot, Aberavon, Sandfields and Margam, ages 6 to 67, with Python and maths. The first lesson is free."
canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-port-talbot
source: src/pages/vibe-coding-and-ai-agents-classes-in-port-talbot.html
---
> Live online vibe coding and AI agents classes for Port Talbot, Aberavon, Sandfields and Margam, ages 6 to 67, with Python and maths. The first lesson is free.

Skip to contentCourses to start with

## Vibe coding and AI agents courses for Port Talbot learners

Pick by age. Each one begins with a live lesson that is free, with no card asked for.

[![Problem Solving and Computational Thinking for Kids course thumbnail](/images/problem-solving-kids.webp)Ages 7 to 12Problem Solving and Computational Thinking for KidsLogic, order and timing puzzles: who did what first, and how can you tell?See the syllabus](/courses/problem-solving-and-computational-thinking-for-kids)[![Vibe Coding for Kids course thumbnail](/images/vibe-coding-kids.webp)Ages 8 to 12Vibe Coding for KidsDescribe a Scratch game to an AI, then test it and put right what it gets wrong.See the syllabus](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Ages 13 to 17Vibe Coding for TeensPython built with AI help, including the three-agent clock project.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Masterclass course thumbnail](/images/python-college.webp)Students and adultsPython MasterclassPython from zero to data work and multi-agent systems you can debug.See the syllabus](/courses/python-programming-masterclass-zero-to-advanced-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Port Talbot by numbers

## Port Talbot, Aberavon, Sandfields, Taibach and Margam

The census headline counts and the neighbourhoods inside the built-up area.

| Area | Usual residents |
| --- | --- |
| Port Talbot built-up area | 31,555 |
| Neath Port Talbot county borough | 142,289 |

Neath Port Talbot also contains Neath, Baglan, Cwmavon and the upper valleys, so the borough figure is a count in its own right. Using postcodes.io, Aberavon, Sandfields, Taibach, Margam and Velindre are suburban areas whose nearest postcode lies inside the Port Talbot built-up area; Baglan, Cwmavon and Bryn each have a built-up area of their own and are not counted here. Port Talbot schools teach the Curriculum for Wales, from progression step 1 to WJEC GCSEs and A levels. We teach in English and use the Welsh school year as a starting guess, which the trial lesson then confirms or changes.

### Neighbouring pages

See [Swansea](/best-coding-class-in-swansea), [Neath Port Talbot](/coding-classes-in-neath-port-talbot), [Bridgend](/coding-classes-in-bridgend) and [WJEC GCSE Computer Science help](/wjec-gcse-computer-science-help-wales). Why we start with thinking rather than tools is argued in [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

The Port Talbot project

## Three agents, three clocks and one merged log

A simulation of agents sending each other messages, and three ways of putting their logs in order.

The agents here are simulated, and the numbers that drive them are our own choices, stated plainly: three agents, something happening somewhere in the system about ten times a second, a little over a third of those events being a message to another agent, and messages taking a fifth of a second on average to arrive. Each agent stamps every event with its own wall clock, and each clock is wrong by a fixed amount, up to the "skew" the learner sets. Twenty runs of about three hundred events produce 1,537 messages to examine.

The first check is the most basic rule of cause and effect: a message cannot be received before it was sent. The learner merges the three logs, sorts them by wall-clock time, and counts how often a receive appears earlier than its send. With perfect clocks the answer is zero. It does not stay zero for long.

| Clocks wrong by up to | Sorted by wall clock | Sorted by Lamport clock |
| --- | --- | --- |
| 0 seconds | 0 of 1,537 | 0 |
| 0.05 seconds | 84 (5.5%) | 0 |
| 0.2 seconds | 305 (19.8%) | 0 |
| 0.5 seconds | 484 (31.5%) | 0 |
| 1 second | 618 (40.2%) | 0 |

A Lamport clock is just a counter. Each agent adds one for every event, attaches its counter to every message, and on receiving a message jumps its own counter past the one it was sent. That guarantees the number on a receipt is always bigger than the number on its send, whatever the wall clocks say, which is why the right-hand column stays at zero even when clocks are a full second out.

Lamport clocks have a blind spot, though. Many pairs of events have no connection at all: two agents each did something without hearing from the other. Of 899,102 pairs of events across the twenty runs, 57,104 were concurrent in exactly that sense. Lamport counters still give 52,786 of those pairs different numbers, so a log sorted by them shows an order that never existed. Vector clocks fix this by having each agent carry a small list, one counter per agent. Comparing two lists tells you whether one event came first, the other did, or neither, and in our runs they flagged all 57,104 concurrent pairs correctly. The price is that every message carries a list as long as the number of agents: three numbers here, a hundred in a system of a hundred agents.

### Ages 8 to 11

Pass notes around the room with a counter on each one, and rebuild the story of who heard what first.

### Ages 11 to 15

Simulate two agents in Python with skewed clocks and catch a reply logged before its question.

### Ages 15 and up

Add Lamport and vector clocks, count concurrent pairs, and explain what each clock can and cannot tell you.

### Where this comes from

The clock rules follow Lamport (1978); vector clocks are explained in Schwarz and Mattern (1994). The agents, their timings and every count above come from our own simulation; nothing on this page describes a real computer system in Port Talbot.

Teams of agents

## What clocks that disagree teach about building multi-agent AI

The moment more than one agent works on a task, "what happened first?" becomes a real question.

| Result from the three agents | Lesson for anyone wiring agents together |
| --- | --- |
| Small clock errors put replies before questions | Do not debug a multi-agent run by timestamps alone |
| A counter on each message fixed cause and effect | Pass ordering information along with the work |
| Lamport numbers invented orders for 52,786 pairs | A neat sorted log can still be misleading |
| Vector clocks recognised every concurrent pair | Sometimes the honest answer is "neither came first" |
| The vector grows with the number of agents | Every guarantee has a running cost |

Multi-agent frameworks are popular, and vibe coding makes it easy to spin up several agents that talk to each other. The trouble comes later, when something goes wrong and the logs disagree about the order of events. A learner who has watched 40.2% of replies jump ahead of their questions knows not to trust timestamps from different machines, and knows there is a forty-line fix. Our learners only start on agents of their own once they can write Python unaided, which for most arrives in Year 12 or later; Copilot Studio is reserved for private lessons. Two related reads: [learn to train AI, not just prompt it](/learn-to-train-ai-not-just-prompt-it-uk), and the outline of [agent lessons for UK students](/ai-agents-course-for-students-uk).

The ONS and postcodes.io are not connected with Modern Age Coders; their data gives the place figures. The simulation is ours.

Growth path

## From note-passing puzzles at seven to multi-agent logs at seventeen

We begin from the Welsh school year, and the trial lesson fine-tunes it.

Years 2 to 6

### Order and logic

Puzzles about sequence and cause, often played before any typing.

[Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)[Scratch Coding for Kids](/courses/scratch-programming-complete-course)Years 4 to 8

### AI as a helper

Scratch games built with an AI, then a first Python program.

[Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[Python and AI for Kids](/courses/python-ai-kids-masterclass)Years 9 to 13

### Simulating agents

Agents, messages and logs in Python, checked against what should happen.

[Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[Python for Teens](/courses/python-complete-masterclass-teens)Adults

### Agents that can be debugged

Python for work and multi-agent designs whose behaviour can be traced.

[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)[Data Structures & Algorithms Course](/courses/data-structures-algorithms-masterclass-college)Clocks and agents

## What is a vector clock, and why does it matter for teams of AI agents?

A vector clock is a small list of counters, one per agent, that each agent updates and attaches to its messages, so that comparing two lists shows whether one event happened before another or whether the two were independent, without trusting anyone's wall clock.

In our simulated three-agent system, sorting by wall clocks that were up to half a second out placed 484 of 1,537 replies before their own messages, while Lamport clocks placed none there and vector clocks also identified all 57,104 independent pairs.

Learners who reach those numbers stop treating a merged log as the truth and start asking what ordering information their agents pass along.

For a Port Talbot teenager, being able to untangle what a team of agents actually did is what keeps them in charge of it, and that skill grows from writing the code. The longer argument is in [why coding is still worth learning for teenagers in 2026](/blog/is-coding-worth-learning-2026).

Class set-up

## Lessons for a Port Talbot learner

Classes take place live on video. Learners need a computer with a keyboard; a tablet alone will not run Python properly.

### Learner does the typing

Every program is written and run by the learner, with the tutor asking why.

### Trial shows the level

We see where a learner is before recommending a course.

### Trial costs nothing

The first session is free and needs no card.

### Classes of fifteen to twenty

Learners at the same stage, joining from across the UK.

### Around eight a month

Two lessons a week in term, with Neath Port Talbot holidays skipped on request.

### Stable UK hour

The lesson time stays fixed when the clocks change.

Why lessons are online

A class of fifteen to twenty learners at one precise level forms far more easily across the UK than in one town, and video spares everyone a journey.

Fees

## Fees for Port Talbot families

Port Talbot learners pay the same as every learner outside India.

First class**USD 0**

First lesson: free, full length, with a course suggestion afterwards.

Group tuition**USD 100**

Group class, about eight lessons a month.

Private tuition**USD 150**

Private lessons, about eight a month.

All fees are charged in US dollars; we quote no sterling price. The trial is free, and billing begins once you have chosen a course and a weekly time. The pricing page covers holidays, missed lessons and changing between group and private classes.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20would%20like%20to%20book%20a%20free%20vibe%20coding%20or%20AI%20agents%20trial%20lesson.%20We%20are%20in%20Port%20Talbot.)Reviews

## Google reviews from Welsh families and learners across Britain

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

## Book a free Port Talbot lesson

Let us know roughly how old the learner is, or their school year, and an interest or two. A trial could be a note-passing logic puzzle, an AI-made Scratch game, some first Python, or a two-agent clock experiment.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Port Talbot one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20would%20like%20to%20book%20a%20free%20vibe%20coding%20or%20AI%20agents%20trial%20lesson.%20We%20are%20in%20Port%20Talbot.)

Submitted details are used for placement and follow-up.

FAQ

## Port Talbot questions

The clock project, multi-agent systems, vibe coding and how lessons are organised.

### How many people live in Port Talbot?

The ONS counted 31,555 usual residents in the Port Talbot built-up area at the 2021 census. Neath Port Talbot had 142,289.

### Are vibe coding and AI agents classes available in Port Talbot?

Yes. Anyone aged 6 to 67 can join live from Port Talbot, Aberavon, Sandfields, Taibach, Margam or elsewhere in the borough.

### What is a Lamport clock?

A counter that each process increases with every event and sends with every message; a receiver moves its counter past the one it receives, so causes always get smaller numbers than their effects.

### What does concurrent mean in distributed systems?

Two events are concurrent when neither could have influenced the other: no chain of messages links them, so neither truly came first.

### What did the Port Talbot simulation show?

With clocks up to one second out, 618 of 1,537 replies were stamped before their own messages. Lamport and vector clocks put none in the wrong order.

### What is vibe coding?

Getting an AI to draft code from a plain-English request, after which you test it, read it and mend it. We do this in Python the learner types, so the judgement stays theirs.

### At what point do learners make their own agents?

From the point where Python comes without prompting, for most in Year 12 or beyond. Copilot Studio is taught privately and nowhere else.

### Is this useful for WJEC computer science?

Programming, networks and logic all feature in WJEC GCSE and A level computer science, and lessons give them proper time. Grades are never promised.

### How much are lessons?

Nothing for the trial. Afterwards it is USD 100 per month to join a group, or USD 150 per month for one-to-one.

### Can lessons pause for school holidays?

Yes. Tell us the Neath Port Talbot term dates and the holiday weeks stay free.

Along the coast

## More pages along the South Wales coast

Read about [Swansea](/best-coding-class-in-swansea), [Neath Port Talbot](/coding-classes-in-neath-port-talbot) and [Bridgend](/coding-classes-in-bridgend), or our [WJEC Digital Technology help](/wjec-gcse-digital-technology-help-wales). For other towns, go to the [Wales overview](/coding-and-ai-classes-in-wales) or the [UK hub](/coding-classes-in-united-kingdom).

Book the free class[Book a priority demo](/book-demo)[Send a WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20would%20like%20to%20book%20a%20free%20vibe%20coding%20or%20AI%20agents%20trial%20lesson.%20We%20are%20in%20Port%20Talbot.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-port-talbot*
