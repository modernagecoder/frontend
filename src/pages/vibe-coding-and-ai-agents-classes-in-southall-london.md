---
title: "Vibe Coding and AI Agents Classes in Southall | Ages 6 to 67"
description: "Live online vibe coding, AI agents and Python lessons for Southall, Norwood Green and Dormers Wells learners in west London, aged 6 to 67. First lesson free."
canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-southall-london
source: src/pages/vibe-coding-and-ai-agents-classes-in-southall-london.html
---
> Southall has no single official headcount, so here are its 2022 wards as Census 2021 recorded them: Southall Green 15,694 usual residents, Southall Broadway 10,825 and Southall West 6,581, each an ONS figure of its own. Norwood Green and Dormer's Wells are recorded suburban areas of Ealing alongside them. Vibe coding, AI agents, Python, coding and maths are taught on live video by India-based tutors to anyone aged six to 67, solo or in a class of five to ten at one level. We explain how an agent decides before handing over tools, so learners can judge what it chose to ignore. Lesson one is free, ending with our suggested course. The Southall project gives a route-finding agent a limited memory, lets it keep only its most promising plans at each step, and measures what that costs on 150 real journeys. Past the trial, a shared class is USD 100 per month and solo tuition USD 150 per month.

[Home](/) / [United Kingdom](/coding-classes-in-united-kingdom) / [London](/best-coding-class-in-london) / Southall

Southall, Ealing, London / Live online

# Vibe coding and AI agents classes in Southall

**Where can Southall learners find the best vibe coding and AI agents classes?** Southall has no single official headcount, so here are its 2022 wards as Census 2021 recorded them: Southall Green 15,694 usual residents, Southall Broadway 10,825 and Southall West 6,581, each an ONS figure of its own. Norwood Green and Dormer's Wells are recorded suburban areas of Ealing alongside them. Vibe coding, AI agents, Python, coding and maths are taught on live video by India-based tutors to anyone aged six to 67, solo or in a class of five to ten at one level. We explain how an agent decides before handing over tools, so learners can judge what it chose to ignore. Lesson one is free, ending with our suggested course. The Southall project gives a route-finding agent a limited memory, lets it keep only its most promising plans at each step, and measures what that costs on 150 real journeys. Past the trial, a shared class is USD 100 per month and solo tuition USD 150 per month.

An agent working through a problem step by step usually has far too many possible paths to keep track of. Beam search is the classic compromise: at every step keep only the k most promising partial plans, called the beam, and drop the rest. Keep one and you have a greedy agent that commits to its first hunch; keep more and you pay for the memory but lose fewer good options. Large language models use the same trick when they choose words, because the number of possible sentences explodes. This project makes the trade-off visible on something concrete: walking routes across Southall's streets and paths from OpenStreetMap.

Facts last verified 30 September 2026. Teaching is online; no Southall branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Southall courses in thinking, vibe coding and agents

Choose the course that fits the learner's age; on all four, the first live lesson is free and booking asks for no card.

- [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids) (Ages 7 to 12): The how-to-think course: keeping a few options open, and noticing when you gave up on the good one too early.
- [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev) (Ages 8 to 12): Scratch games described to an AI, then built and tested by the young maker.
- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python and web projects with AI help, including the beam search agent on Southall paths.
- [Generative AI Course](/courses/complete-generative-ai-masterclass-college) (Students and adults): How language models choose words, planning agents and search, built in Python.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Southall Broadway, Southall Green, Norwood Green and Dormers Wells

Census 2021 ward counts, and places recorded in Ealing.

**Usual residents by 2022 ward, Census 2021, ONS via Nomis**

| Ward | Residents (2021) |
|---|---|
| Southall Green | 15,694 |
| Dormers Wells | 15,609 |
| Southall Broadway | 10,825 |
| Southall West | 6,581 |

These are four separate ward figures and are not totalled; no single official count exists for Southall. Postcodes.io records Norwood Green and Dormer's Wells as suburban areas of Ealing, with Southall itself listed as a settlement. Ealing schools follow England's national curriculum; our lessons work by school year and cover GCSE and A level, and we stop for the holidays once you tell us the dates.

### Ealing, London and our approach

More nearby options: [coding classes in Ealing](/coding-classes-in-ealing-london) and [London](/best-coding-class-in-london). Why we teach thinking before tools is on [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

## Beam search: how many plans should an agent keep in mind?

One street map, 150 journeys, five beam widths, and a comparison with a search that remembers everything.

Street and path data for a rectangle over Southall come from OpenStreetMap, simplified to 3,058 junctions and 218.7 km, of which 832 junctions are dead ends. Python picks 150 random journeys at least 800 m apart; the typical shortest walk is 2,840 m. The agent grows partial routes one junction at a time, scores each by distance walked plus straight-line distance still to go, keeps only the k highest-scoring after every step, and never walks back through a junction it has already used on that route.

**Beam search on 150 Southall walking journeys, our Python run on OpenStreetMap data**

| Beam width k | Journeys completed | Typical route against the shortest | Partial routes examined (median) |
|---|---|---|---|
| 1 (greedy) | 3 of 150 | 1.5% longer | 9 |
| 2 | 30 of 150 | 5.9% longer | 49.5 |
| 5 | 75 of 150 | 5.0% longer | 211 |
| 20 | 129 of 150 | 3.5% longer | 1,180.5 |
| 100 | 149 of 150 | 2.1% longer | 4,836 |

A beam of one almost always fails: it follows the most promising street straight into a cul-de-sac with nothing left to fall back on. Widening the beam rescues more journeys, and at 100 it completes 149 of the 150, with routes typically 2.1% longer than the true shortest. It never guarantees the shortest; even at width 100 it found the exact optimum on only 14 journeys, because good routes that looked unpromising early were thrown away. For comparison, A* search, which remembers every junction it has seen, found the shortest route on every journey after examining a median of 438 junctions. On a town map memory is cheap, so A* wins. Beam search earns its place where remembering everything is impossible, such as choosing the next word from tens of thousands, step after step.

### Ages 8 to 11

Walk a paper maze keeping only your two favourite paths, and see when that goes wrong.

### Ages 11 to 15

Code a greedy route-finder on a few Southall streets in Python and watch it hit a dead end.

### Ages 15 and up

Build beam search, vary the width on 150 journeys and compare it with A*.

### OpenStreetMap data, our agent

Streets and paths are from OpenStreetMap and its contributors under the Open Database Licence, fetched with the Overpass API. The journeys, the agent and all results are our own calculations.

## What this teaches about vibe coding and AI agents

Pruning early is cheap until the good option is the one pruned.

**From the Southall beam search to real AI agents**

| In the route project | When an AI agent plans or writes |
|---|---|
| A beam of one failed 147 of 150 times | Committing to the first hunch is fragile |
| Wider beams completed more journeys | Keeping options open costs memory but helps |
| Even width 100 rarely found the shortest | Pruned search is good, not guaranteed |
| A* won when memory was cheap | Pick the method that fits the problem size |
| Language models face vast choices | That is why they use beams and sampling |

Agents that plan multi-step tasks, and models that write text, keep a small set of candidates at each step because they cannot consider everything. When an agent commits too early it can walk confidently into a dead end, just like the greedy router here. In vibe coding the learner describes the program and an AI writes it; our Southall learners ask the AI for more than one approach before choosing, and test each. Building agents comes after a learner can code Python without support, typically sixteen upwards, and anything in Copilot Studio is taught privately. Read [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk) for the principle and [agents for UK learners](/ai-agents-course-for-students-uk) for the route.

OpenStreetMap, the ONS, Nomis and postcodes.io provided open data only and have no link to Modern Age Coders; the agent and any faults in it are ours.

## From paper mazes to planning agents

We start from the school year and let the trial lesson fine-tune it.

- **Years 2 to 7: How to think** Mazes, options and knowing when to backtrack. [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **Years 4 to 8: Vibe coding for kids** Games and apps planned by the learner and built with AI help. [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev), [Python and AI for Kids](/courses/python-ai-kids-masterclass)
- **Years 9 to 13: Python and search** Graphs, search and heuristics next to GCSE and A level. [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course), [Data Structures & Algorithms Course](/courses/data-structures-algorithms-masterclass-college)
- **Adults: Agents and language models** Search, decoding and planning agents in Python. [Generative AI Course](/courses/complete-generative-ai-masterclass-college), [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)

## What is beam search in AI, and why do language models use it?

Beam search keeps only the k most promising partial answers at each step and drops the rest; language models use it because the number of possible sentences is far too large to explore, and it trades a small loss in quality for a huge saving in memory.

Finding walking routes across Southall, a beam of one completed just 3 of 150 journeys, while a beam of 100 completed 149 with routes typically 2.1% longer than the shortest.

Learners who have tuned a beam ask of any AI agent: how many options did it keep, and what did it throw away too early?

A Southall teenager who has watched a greedy agent walk into a cul-de-sac builds agents that keep their options open, and coding is how that lesson sticks. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Lessons reaching Southall by video

Bring a computer, a webcam and a connection able to hold a video call.

- **Hands on keys** Students type and run it all while our tutor, following over screen share, keeps asking what the agent should try next.
- **Plan from day one** What the trial reveals becomes lesson two's starting point, with any GCSE board written down.
- **First lesson free** Lesson one is on us and ends with a course suggestion.
- **Grouped by ability** Classes hold between five and ten learners from around the UK, sorted by level.
- **Two a week** No lessons in school holidays.
- **Fixed slot** Tutors follow UK clock changes, so your time holds.

**Why online** Five learners at one level, all free the same evening, are rarely neighbours. On video they do not need to be.

## Southall fees

The international rate card, which applies outside India, is what Southall learners pay.

- First class: USD 0. A free first lesson, then our advice.
- Group tuition: USD 100 a month. Around eight live group lessons each month.
- Private tuition: USD 150 a month. Around eight live private lessons each month.

Billing is in US dollars, with no sterling tariff, beginning after the trial settles a course and a time slot; the pricing page covers school breaks, missed sessions and format switches.

## Southall questions

### How many people live in Southall?

There is no single official figure. Census 2021 counted 15,694 in Southall Green ward, 10,825 in Southall Broadway and 6,581 in Southall West, each measured on its own.

### Are vibe coding and AI agents classes available online in Southall?

They are: every class is a live video call, open to ages 6 to 67 from Norwood Green to Dormers Wells and across Ealing.

### What is beam width?

The number of partial answers beam search keeps at each step. Wider beams find more and better answers but use more memory and time.

### Is beam search better than A*?

Not when memory is cheap: A* finds the shortest route with certainty. Beam search is useful when the choices are too many to remember, as in text generation.

### What does the Southall project involve?

Running beam search with widths from 1 to 100 on 150 walking journeys across Southall's mapped streets and comparing it with A*.

### How does vibe coding fit in?

Throughout, for all ages: learners describe the program, the AI drafts it, and the learner tests and repairs it.

### When do learners build AI agents?

When Python is something they can do alone, most often from sixteen; Copilot Studio is one-to-one only.

### Can you help with GCSE and A level?

Yes, in computer science and maths, aiming at understanding; no grade is ever promised.

### How much are lessons?

Lesson one has no fee. Monthly after that: USD 100 in a class, USD 150 with a personal tutor.

### Are there lessons in the holidays?

No, they pause for school holidays; send the dates.

## More west London pages

Pages with projects of their own: [Ealing](/coding-classes-in-ealing-london) (a river rating curve), [Hillingdon](/coding-classes-in-hillingdon-london), [Hounslow](/coding-classes-in-hounslow-london) and [London](/best-coding-class-in-london). The [UK hub](/coding-classes-in-united-kingdom) lists the rest.

## Contact

Book the free class on [https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-southall-london](https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-southall-london#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
