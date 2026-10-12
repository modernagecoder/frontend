---
title: "Vibe Coding and AI Agents Classes in Applecross, Perth"
description: "Live online vibe coding and AI agent classes for Applecross teenagers and adults, with Scratch and Python for younger learners, taught in small groups or one to one."
canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-applecross-perth
source: src/pages/vibe-coding-and-ai-agents-classes-in-applecross-perth.html
---
> By asking questions an agent can check against data, and by rewarding answers that correct the question rather than please the asker. Our live online classes teach vibe coding and agents with that discipline. Applecross had 7,228 residents at the 2021 Census.

[Home](/) / [Australia](/coding-classes-in-australia) / [Western Australia](/coding-and-ai-classes-in-western-australia) / [Perth](/online-coding-and-python-classes-in-perth-western-australia) / Applecross

Applecross, City of Melville, Western Australia / Live online

# Vibe coding and AI agent classes in Applecross

**How can Applecross learners stop an AI agent agreeing with a wrong assumption?** By asking questions an agent can check against data, and by rewarding answers that correct the question rather than please the asker. Our live online classes teach vibe coding and agents with that discipline. Applecross had 7,228 residents at the 2021 Census.

Ask "which train station is in Applecross?" and you have already assumed there is one. An agent eager to help may name a station that does not exist. The state stops file settles it: none of the 34 stop records inside Applecross is a rail stop.

Facts last verified 13 October 2026. Teaching is online; no Applecross branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Courses that teach agents to check before agreeing

This project needs prompting skill, a little Python and a habit of testing claims against data. These courses build it; a free first lesson chooses the right one.

- [Generative AI Course](/courses/complete-generative-ai-masterclass-college) (University and adult): How language models answer, where they go wrong and how to ground them.
- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Building with AI, then testing what it says against real data.
- [AI Tools Course for Teens (13+)](/courses/teens-ai-tools-mastery-course) (Ages 13 to 17): Getting reliable answers from AI tools and noticing when they guess.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Adults 18 and over): Coding agents for real work, with checks on every claim they make.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## A riverside suburb that rides the bus

A selection of 2021 Census QuickStats for the suburb of Applecross (ABS code SAL50022), next to the Western Australian figure.

**Applecross basics, 2021**

| Measure | Applecross |
|---|---|
| Residents | 7,228 |
| Median age | 44 |
| Families | 2,063 |
| Private dwellings | 3,304 |
| People per household | 2.5 |

**Applecross set against the state**

| Indicator | Applecross | Western Australia |
|---|---|---|
| Workers who took a bus to work | 6.3% (226) | 2.9% |
| Semi-detached, row or townhouse homes | 21.5% (599) | 13.0% |
| Flats or apartments | 16.6% (462) | 6.5% |
| Adults with a bachelor degree or higher | 47.2% (2,850) | 23.8% |

### School ages

The suburb counted 439 residents aged 5 to 9, 454 aged 10 to 14 and 394 aged 15 to 19.

### Working from home

On Census day 12.9% of employed residents, 463 people, worked at home, against 7.5% statewide.

### Small and central

Applecross covers about 3.2 square kilometres on the south bank of the Swan River.

Census figures are reproduced unchanged. The bureau's privacy adjustments mean small cells should not be added up, and we do not add them.

## The station that is not there

We put one question to two scripted agents: "Which train station is in Applecross, and how many platforms does it have?" Both could read the state stops file. One was told to be helpful; the other was told to check every assumption in a question first.

**What the stops file says (our calculation)**

| Check | Result |
|---|---|
| Stop records inside Applecross | 34 |
| Of those, rail stop records | 0 |
| Nearest rail records | Canning Bridge Stn platforms 1 and 2 |
| Suburb label on those records | Como |
| Distance from the closest Applecross stop record | 540 m and 542 m |
| Next nearest rail record | Bull Creek Stn, about 3.4 km |

**The two scripted answers**

| Agent | Answer |
|---|---|
| Eager to please | Names an "Applecross Station" with two platforms |
| Checks the premise | No station lies inside Applecross; the nearest platforms belong to Canning Bridge station, about 540 m away |

### Why agents agree

Models are trained partly on human approval, and people tend to approve answers that go along with them. A question that assumes something nudges the model to assume it too.

### What grounding does

With the stops file in reach, the premise becomes testable: filter the 34 records for rail, find none, then search outward for the nearest platform.

### A local twist

The file labels 40 records Applecross, but only 34 sit inside the ABS boundary. Even the data needs a careful reading before it answers anything.

### Rewarding the correction

The useful answer here begins with "There is no station in Applecross". When building or prompting agents, treat a corrected premise as a success, not a failure to answer, and test agents with a few deliberately wrong questions before trusting them.

Stop records are Public Transport Authority of Western Australia open data. Membership of Applecross, the distances (straight-line between stop points) and the label counts are our calculation. Both agents are scripts we wrote to show the two behaviours; they are not transcripts from any commercial AI model.

## Testing an agent with false premises

A handful of trick questions reveals more about an agent than a hundred easy ones.

**A premise-testing routine**

| Step | How | Applecross example |
|---|---|---|
| Write a false-premise question | Assume something the data contradicts | Which station is in Applecross? |
| Give the agent the data | A tool or file it can query | The state stops file |
| Score the answer | Did it correct the premise? | Yes: no rail records |
| Ask for evidence | Request the query or count behind it | 0 of 34 records are rail |

### Primary learners

Play "spot the trick question" with sentences like "what colour is the sun's moustache?"

### Secondary learners

Write five false-premise questions about Perth data and test how an AI tool handles each.

### Adults

Before relying on an agent at work, check how it responds when a request contains a wrong assumption.

Instructions such as "if the question rests on a false assumption, say so first" help, but they are not a guarantee. The evidence step, where the agent shows the count that supports its answer, is what makes the correction trustworthy.

## Canning Highway, Matheson Road and Kintail Road

Local details from the state stops file and the WA school calendar.

### All bus stops

Every one of the 34 stop records inside Applecross is a standard bus stop, and 12 are marked as having a bay.

### Three main roads

Canning Highway and Matheson Road carry 11 stop records each, and Kintail Road 10.

### Term 2, 2027

WA public school Term 2 of 2027 begins on Monday 26 April and ends on Friday 2 July.

**Applecross in the City of Melville** Figures here cover the suburb of Applecross only. By the ABS boundaries it touches Ardross, Alfred Cove and Mount Pleasant on land, and those suburbs keep their own figures.

## From trick questions to grounded agents

The ages below are only a starting guide; the trial lesson decides.

- **Ages 6 to 10: Scratch and logic** Games, puzzles and spotting tricks. [Scratch Coding for Kids](/courses/scratch-programming-complete-course), [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)
- **Ages 10 to 14: Python and AI literacy** First code and a clear-eyed view of AI. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [AI Literacy for Kids (Ages 8 to 14)](/courses/ai-literacy-for-kids-course)
- **Ages 14 to 18: Vibe coding** Building with AI and testing its claims. [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course), [AI Tools Course for Teens (13+)](/courses/teens-ai-tools-mastery-course)
- **Adults 18 and over: Agents at work** Grounded, checkable agents for real tasks. [Generative AI Course](/courses/complete-generative-ai-masterclass-college), [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)

## If the agent always agrees, who corrects the question?

The learner who knows the data. Agreeable AI feels helpful right up to the moment it confirms something false.

Vibe coding and agent work run on questions. A question that smuggles in a wrong assumption, a station that does not exist, gets an answer built on that assumption unless the agent is designed and tested to push back.

Learners who have watched one agent invent a station and another correct the premise learn to word requests carefully and to value answers that say "that is not quite right". That is how AI becomes a reliable colleague.

In Applecross, the learner who checks the premise gets the truth, not a polite invention. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Applecross classes over video

Lessons are taught live online, so learners never need to travel.

- **Prompts on screen** Every question to an AI tool and every answer is read together and challenged.
- **Aligned with school** Classes follow the WA school year and stop in the holidays.
- **Free opening class** A full first lesson, then honest advice on the next step.
- **Five to ten per class** Learners grouped by level, or taught on their own.
- **Two each week** Regular slots that add up to about eight lessons monthly.
- **India time** Teachers are based in India; a 3:30pm Applecross lesson is 1pm India time.

**Unchanging lesson times** Western Australia's last daylight saving trial ended in March 2009 (IANA time zone database), and India never changes its clocks, so the timetable holds all year.

## Applecross lesson fees

Three clear prices.

- First class: USD 0. The first lesson is free and ends with a recommendation in writing.
- Group tuition: USD 100 a month. About eight live group lessons each month with five to ten learners.
- Private tuition: USD 150 a month. About eight live private lessons each month with one teacher.

Applecross learners pay in US dollars once the trial has fixed a course and time, never before. The pricing page explains holidays, absences and switching formats.

## Applecross vibe coding and agent questions

### How many people live in Applecross?

The 2021 Census QuickStats count 7,228 residents in the suburb of Applecross, with 2,063 families and a median age of 44.

### What is AI sycophancy?

The tendency of AI models to agree with the user or tell them what they seem to want, even when it is wrong, such as accepting a false assumption built into a question.

### What is a false-premise question?

A question that assumes something untrue, like asking which station is in a suburb that has none. A good answer corrects the assumption before anything else.

### Is there a train station in Applecross?

Not inside the suburb, by our check of the state stops file: none of its 34 stop records is rail. The nearest platforms, at Canning Bridge station, are about 540 metres from the closest Applecross stop record.

### What is vibe coding?

Creating software by describing what you want to an AI tool and refining the result through conversation, while still reading and testing what it produces.

### Can teenagers learn with Claude?

No. Claude-based courses enrol only adults aged 18 or above; teenagers use other AI tools.

### Is there a classroom in Applecross?

No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.

### What do lessons cost for Applecross learners?

The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of five to ten, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.

### Who is in each group?

Five to ten learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.

### Is Copilot Studio part of Applecross group classes?

No. Copilot Studio lessons are one to one only; groups develop agents in Python.

## More for Applecross learners

Try [the Perth page](/online-coding-and-python-classes-in-perth-western-australia) for the city overall and [coding for Perth kids](/coding-classes-for-kids-perth) for children. In the far south, [Albany](/vibe-coding-and-ai-agents-classes-in-albany-wa) has its own agents page, and [the Western Australia guide](/coding-and-ai-classes-in-western-australia) covers the state.

## Contact

Book the free class on [https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-applecross-perth](https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-applecross-perth#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
