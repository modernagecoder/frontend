---
title: "Vibe Coding and AI Agents Classes in Port Talbot | Ages 6 to 67"
description: "Live online vibe coding and AI agents classes for Port Talbot, Aberavon, Sandfields and Margam, ages 6 to 67, with Python and maths. The first lesson is free."
canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-port-talbot
source: src/pages/vibe-coding-and-ai-agents-classes-in-port-talbot.html
---
> Port Talbot's built-up area numbered 31,555 usual residents in Census 2021; the wider county borough of Neath Port Talbot numbered 142,289. Aberavon, Sandfields, Taibach, Margam and Velindre all sit within that built-up area. Learners from Port Talbot, from six-year-olds to people of 67, study vibe coding, AI agents, Python, coding and maths with us over live video, taught by tutors in India either privately or in a level-matched class of five to ten. The first lesson is a free trial that ends with a course recommendation. The Port Talbot project tackles a puzzle every team of AI agents runs into: when three agents each write their own log and their clocks disagree, how do you work out what happened first? Fees after the trial are USD 100 a month for a group place and USD 150 a month for private lessons.

[Home](/) / [United Kingdom](/coding-classes-in-united-kingdom) / [Wales](/coding-and-ai-classes-in-wales) / Port Talbot

Port Talbot, Neath Port Talbot, Wales / Live online

# Vibe coding and AI agents classes in Port Talbot

**Where are the best vibe coding and AI agents classes for Port Talbot?** Port Talbot's built-up area numbered 31,555 usual residents in Census 2021; the wider county borough of Neath Port Talbot numbered 142,289. Aberavon, Sandfields, Taibach, Margam and Velindre all sit within that built-up area. Learners from Port Talbot, from six-year-olds to people of 67, study vibe coding, AI agents, Python, coding and maths with us over live video, taught by tutors in India either privately or in a level-matched class of five to ten. The first lesson is a free trial that ends with a course recommendation. The Port Talbot project tackles a puzzle every team of AI agents runs into: when three agents each write their own log and their clocks disagree, how do you work out what happened first? Fees after the trial are USD 100 a month for a group place and USD 150 a month for private lessons.

Put three AI agents on one job, perhaps one gathering facts, one drafting and one checking, and give each its own log. Something goes wrong, and you merge the logs to see the order of events. If you sort by the times the agents wrote down, you will sometimes see a reply recorded before the question that caused it. Nobody lied; their clocks simply disagree by a fraction of a second. In 1978 Leslie Lamport showed how to order events without trusting clocks at all, and the idea is about forty lines of Python.

Facts last verified 1 October 2026. Teaching is online; no Port Talbot branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Vibe coding and AI agents courses for Port Talbot learners

Pick by age. Each one begins with a live lesson that is free, with no card asked for.

- [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids) (Ages 7 to 12): Logic, order and timing puzzles: who did what first, and how can you tell?
- [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev) (Ages 8 to 12): Describe a Scratch game to an AI, then test it and put right what it gets wrong.
- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python built with AI help, including the three-agent clock project.
- [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college) (Students and adults): Python from zero to data work and multi-agent systems you can debug.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Port Talbot, Aberavon, Sandfields, Taibach and Margam

The census headline counts and the neighbourhoods inside the built-up area.

**Census 2021 (ONS)**

| Area | Usual residents |
|---|---|
| Port Talbot built-up area | 31,555 |
| Neath Port Talbot county borough | 142,289 |

Neath Port Talbot also contains Neath, Baglan, Cwmavon and the upper valleys, so the borough figure is a count in its own right. Using postcodes.io, Aberavon, Sandfields, Taibach, Margam and Velindre are suburban areas whose nearest postcode lies inside the Port Talbot built-up area; Baglan, Cwmavon and Bryn each have a built-up area of their own and are not counted here. Port Talbot schools teach the Curriculum for Wales, from progression step 1 to WJEC GCSEs and A levels. We teach in English and use the Welsh school year as a starting guess, which the trial lesson then confirms or changes.

### Neighbouring pages

See [Swansea](/best-coding-class-in-swansea), [Neath Port Talbot](/coding-classes-in-neath-port-talbot), [Bridgend](/coding-classes-in-bridgend) and [WJEC GCSE Computer Science help](/wjec-gcse-computer-science-help-wales). Why we start with thinking rather than tools is argued in [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

## Three agents, three clocks and one merged log

A simulation of agents sending each other messages, and three ways of putting their logs in order.

The agents here are simulated, and the numbers that drive them are our own choices, stated plainly: three agents, something happening somewhere in the system about ten times a second, a little over a third of those events being a message to another agent, and messages taking a fifth of a second on average to arrive. Each agent stamps every event with its own wall clock, and each clock is wrong by a fixed amount, up to the "skew" the learner sets. Twenty runs of about three hundred events produce 1,537 messages to examine.

The first check is the most basic rule of cause and effect: a message cannot be received before it was sent. The learner merges the three logs, sorts them by wall-clock time, and counts how often a receive appears earlier than its send. With perfect clocks the answer is zero. It does not stay zero for long.

**Messages whose receipt is stamped before their sending, our Python run**

| Clocks wrong by up to | Sorted by wall clock | Sorted by Lamport clock |
|---|---|---|
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

## What clocks that disagree teach about building multi-agent AI

The moment more than one agent works on a task, "what happened first?" becomes a real question.

**From the simulation to real agent teams**

| Result from the three agents | Lesson for anyone wiring agents together |
|---|---|
| Small clock errors put replies before questions | Do not debug a multi-agent run by timestamps alone |
| A counter on each message fixed cause and effect | Pass ordering information along with the work |
| Lamport numbers invented orders for 52,786 pairs | A neat sorted log can still be misleading |
| Vector clocks recognised every concurrent pair | Sometimes the honest answer is "neither came first" |
| The vector grows with the number of agents | Every guarantee has a running cost |

Multi-agent frameworks are popular, and vibe coding makes it easy to spin up several agents that talk to each other. The trouble comes later, when something goes wrong and the logs disagree about the order of events. A learner who has watched 40.2% of replies jump ahead of their questions knows not to trust timestamps from different machines, and knows there is a forty-line fix. Our learners only start on agents of their own once they can write Python unaided, which for most arrives in Year 12 or later; Copilot Studio is reserved for private lessons. Two related reads: [learn to train AI, not just prompt it](/learn-to-train-ai-not-just-prompt-it-uk), and the outline of [agent lessons for UK students](/ai-agents-course-for-students-uk).

The ONS and postcodes.io are not connected with Modern Age Coders; their data gives the place figures. The simulation is ours.

## From note-passing puzzles at seven to multi-agent logs at seventeen

We begin from the Welsh school year, and the trial lesson fine-tunes it.

- **Years 2 to 6: Order and logic** Puzzles about sequence and cause, often played before any typing. [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **Years 4 to 8: AI as a helper** Scratch games built with an AI, then a first Python program. [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev), [Python and AI for Kids](/courses/python-ai-kids-masterclass)
- **Years 9 to 13: Simulating agents** Agents, messages and logs in Python, checked against what should happen. [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course), [Python for Teens](/courses/python-complete-masterclass-teens)
- **Adults: Agents that can be debugged** Python for work and multi-agent designs whose behaviour can be traced. [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college), [Data Structures & Algorithms Course](/courses/data-structures-algorithms-masterclass-college)

## What is a vector clock, and why does it matter for teams of AI agents?

A vector clock is a small list of counters, one per agent, that each agent updates and attaches to its messages, so that comparing two lists shows whether one event happened before another or whether the two were independent, without trusting anyone's wall clock.

In our simulated three-agent system, sorting by wall clocks that were up to half a second out placed 484 of 1,537 replies before their own messages, while Lamport clocks placed none there and vector clocks also identified all 57,104 independent pairs.

Learners who reach those numbers stop treating a merged log as the truth and start asking what ordering information their agents pass along.

For a Port Talbot teenager, being able to untangle what a team of agents actually did is what keeps them in charge of it, and that skill grows from writing the code. The longer argument is in [why coding is still worth learning for teenagers in 2026](/blog/is-coding-worth-learning-2026).

## Lessons for a Port Talbot learner

Classes take place live on video. Learners need a computer with a keyboard; a tablet alone will not run Python properly.

- **Learner does the typing** Every program is written and run by the learner, with the tutor asking why.
- **Trial shows the level** We see where a learner is before recommending a course.
- **Trial costs nothing** The first session is free and needs no card.
- **Classes of five to ten** Learners at the same stage, joining from across the UK.
- **Around eight a month** Two lessons a week in term, with Neath Port Talbot holidays skipped on request.
- **Stable UK hour** The lesson time stays fixed when the clocks change.

**Why lessons are online** A class of five to ten learners at one precise level forms far more easily across the UK than in one town, and video spares everyone a journey.

## Fees for Port Talbot families

Port Talbot learners pay the same as every learner outside India.

- First class: USD 0. First lesson: free, full length, with a course suggestion afterwards.
- Group tuition: USD 100 a month. Group class, about eight lessons a month.
- Private tuition: USD 150 a month. Private lessons, about eight a month.

All fees are charged in US dollars; we quote no sterling price. The trial is free, and billing begins once you have chosen a course and a weekly time. The pricing page covers holidays, missed lessons and changing between group and private classes.

## Port Talbot questions

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

## More pages along the South Wales coast

Read about [Swansea](/best-coding-class-in-swansea), [Neath Port Talbot](/coding-classes-in-neath-port-talbot) and [Bridgend](/coding-classes-in-bridgend), or our [WJEC Digital Technology help](/wjec-gcse-digital-technology-help-wales). For other towns, go to the [Wales overview](/coding-and-ai-classes-in-wales) or the [UK hub](/coding-classes-in-united-kingdom).

## Contact

Book the free class on [https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-port-talbot](https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-port-talbot#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
