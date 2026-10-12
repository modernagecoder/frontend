---
title: "Vibe Coding and AI Agents Classes in Armadale, Perth"
description: "Live online vibe coding and AI agent classes for Armadale teenagers and adults, plus Scratch and Python for children from six, in small groups or one to one."
canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-armadale-perth
source: src/pages/vibe-coding-and-ai-agents-classes-in-armadale-perth.html
---
> That every package the agent asks to install really exists and is the one intended, because agents sometimes invent plausible names. Our live online classes teach vibe coding and agent work with that habit built in. Armadale had 13,415 residents at the 2021 Census.

[Home](/) / [Australia](/coding-classes-in-australia) / [Western Australia](/coding-and-ai-classes-in-western-australia) / [Perth](/online-coding-and-python-classes-in-perth-western-australia) / Armadale

Armadale, City of Armadale, Western Australia / Live online

# Vibe coding and AI agent classes in Armadale

**What should Armadale learners check before running code an AI agent writes?** That every package the agent asks to install really exists and is the one intended, because agents sometimes invent plausible names. Our live online classes teach vibe coding and agent work with that habit built in. Armadale had 13,415 residents at the 2021 Census.

We asked for something simple: count the public transport stop records inside Armadale, grouped by type. The scripted agent opened with a pip install command for a package named after the stops data. That package does not exist, and neither do four other names it went on to suggest. The job needed none of them.

Facts last verified 13 October 2026. Teaching is online; no Armadale branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Courses for working safely with coding agents

This project needs Python, a little knowledge of packages and the discipline to verify what an agent proposes. These courses cover it; a free trial lesson picks the right one.

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Building with AI help, and checking every install command before it runs.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Adults 18 and over): Coding agents on real projects, with dependency and change review.
- [AI Tools Course for Teens (13+)](/courses/teens-ai-tools-mastery-course) (Ages 13 to 17): Getting good results from AI tools and spotting when they guess.
- [Python for Teens](/courses/python-complete-masterclass-teens) (Ages 13 to 17): Python foundations, including pip, imports and the standard library.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Townhouses, young children and the end of the line

Figures from the 2021 Census QuickStats for the suburb of Armadale (ABS code SAL50026), set against Western Australia as a whole.

**Armadale headline counts, 2021**

| Measure | Armadale |
|---|---|
| Residents | 13,415 |
| Median age | 39 |
| Families | 3,275 |
| Private dwellings | 6,549 |
| People per household | 2.2 |

**Armadale beside the state figure**

| Indicator | Armadale | Western Australia |
|---|---|---|
| Semi-detached, row or townhouse homes | 30.7% (1,683) | 13.0% |
| Workers who drove to work | 66.7% (3,127) | 62.1% |
| Workers who took the train to work | 3.0% (142) | 1.8% |
| Adults with a bachelor degree or higher | 8.0% (880) | 23.8% |

### Under-tens

There were 920 children under five and 820 aged 5 to 9, with 727 more aged 10 to 14.

### Older residents

At the other end, 347 residents were aged 85 or older.

### Footprint

The ABS outline of the suburb covers roughly 8.3 square kilometres in Perth's south-east.

Every Census number above is copied as the bureau released it. Its small privacy adjustments mean cells should not be summed, and we have not summed any.

## Five packages that were never there

Request to the agent: "Count the stop records inside Armadale and group them by stop type." Before writing any code, our scripted agent proposed packages to install. We looked up each name on PyPI, the main Python package index, using its JSON API on 12 October 2026.

**What PyPI returned (our check)**

| Names checked | PyPI response | Meaning |
|---|---|---|
| Five names the agent invented, each echoing the transport data or the state | 404 for all five | No such packages |
| requests | 200 | Exists, widely used |
| shapely and pyshp | 200 | Exist, but were not needed |

**What the working script found (our calculation)**

| Stop type | Records inside Armadale |
|---|---|
| Standard | 104 |
| Rail | 4 |
| Regional coach | 1 |
| All types | 109 |

### Why agents invent names

A language model predicts likely-looking text. A package named after the stops data sounds exactly like something that ought to exist for this task, so the model offers it with confidence.

### Why it matters

An install that fails is only annoying. The real risk comes later, if someone registers an invented name and fills it with harmful code, so the next person who trusts the agent installs it.

### What the job needed

Only requests, to call the state's map service, and the standard library. The four rail records are platforms at Armadale and Sherwood stations; one record is a regional coach stop.

### A name that exists is not proof

A 200 response only says some package uses that name. Before installing, check who publishes it, when it was last updated and whether it does what you expect. On this task the safest dependency list was the shortest: one well-known package.

Stop records are Public Transport Authority of Western Australia open data; membership of Armadale is our point-in-boundary check and the counts are ours. The agent turns are scripts we wrote to show the pattern, not transcripts from a commercial AI model. PyPI responses can change as packages are published.

## Checking a package before pip install

A thirty-second routine catches invented or wrong packages before anything runs on your machine.

**A dependency check routine**

| Step | How | Armadale result |
|---|---|---|
| Ask why | Make the agent say what each package is for | Five could not justify themselves |
| Look it up | GET pypi.org/pypi/name/json | Five 404 responses |
| Prefer the standard library | json, csv and urllib come with Python | Plus requests was enough |
| Pin what you keep | Write exact versions in requirements.txt | One line |

### Primary learners

Before using a Scratch extension, ask a grown-up where it came from and what it does.

### Secondary learners

Write a tiny script that checks a list of package names against PyPI and flags any that are missing.

### Adults

Add a dependency review step to every agent-written change before it reaches a shared project.

Agents are improving at this, and many now search before suggesting. The habit still pays: an agent that checks is a bonus, a person who checks is a guarantee.

## Two stations and the Albany Highway

Details that belong to Armadale rather than its neighbours, from the stops file and the WA school calendar.

### Rail and coach

Inside the suburb, by our check, are rail platform records for Armadale and Sherwood stations, plus a stop for regional coaches at Armadale station.

### Busiest roads

Seventh Road carries 14 of the 109 stop records, and Armadale Road and Forrest Road 11 each.

### Term 2, 2027

WA public schools hold Term 2 of 2027 from Monday 26 April to Friday 2 July.

**Armadale the suburb** These figures describe the suburb of Armadale, not the wider City of Armadale. Kelmscott, Mount Nasura, Seville Grove, Haynes and the other neighbouring suburbs have separate counts that we leave out.

## From asking where things come from to reviewing agents

Starting points depend on skill as much as age; the trial lesson decides.

- **Ages 6 to 10: Scratch and play** Games built block by block, with every piece understood. [Scratch Coding for Kids](/courses/scratch-programming-complete-course), [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)
- **Ages 10 to 14: Python and AI basics** Typed code and a realistic picture of what AI can do. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [AI Literacy for Kids (Ages 8 to 14)](/courses/ai-literacy-for-kids-course)
- **Ages 14 to 18: Vibe coding** Building with AI and verifying what it produces. [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course), [AI Tools Course for Teens (13+)](/courses/teens-ai-tools-mastery-course)
- **Adults 18 and over: Coding agents** Agents for real work, with reviews built in. [Generative AI Course](/courses/complete-generative-ai-masterclass-college), [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)

## If the agent picks the tools, who checks them?

The person at the keyboard. An agent will propose packages as readily as it writes code.

Vibe coding hands the typing to an AI, and that is a genuine speed-up. But an install command is different from a line of code: it pulls someone else's software onto your computer. Five of the names suggested for the Armadale task pointed to nothing at all.

Learners who have looked names up on PyPI themselves develop a reflex: no install without a reason and a check. That reflex is worth more than any single package.

In Armadale, the learner who checks the install list keeps the project and the computer safe. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Armadale lessons, live and online

Classes are taught over video, so the learner stays at home.

- **Every command visible** Prompts, installs and outputs all appear on the shared screen for the teacher to question.
- **Built around terms** Lessons pause in WA school holidays and resume each term.
- **Free trial** A real first lesson, then an honest view of the right course.
- **Five to ten in a group** Grouped by level and goal, or taught privately.
- **Twice a week** Regular times, close to eight lessons each month.
- **India time** With our teachers in India, a 6pm Armadale class starts at 3:30pm India time.

**A fixed time difference** Perth has not changed its clocks since March 2009 (IANA time zone database) and India keeps one time all year, so the gap stays two and a half hours.

## Armadale lesson fees

Three prices, applied to everyone.

- First class: USD 0. Lesson one costs nothing and ends with a suggested next step.
- Group tuition: USD 100 a month. Group month: about eight live lessons with five to ten learners at one level.
- Private tuition: USD 150 a month. Private month: about eight live lessons with one teacher.

Armadale families pay in US dollars and only after the trial, once course and time suit them. The pricing page sets out holidays, absences and changes of format.

## Armadale vibe coding and agent questions

### What is the population of Armadale, WA?

The 2021 Census QuickStats count 13,415 people in the suburb of Armadale, with 6,549 private dwellings and a median age of 39.

### What is a hallucinated package?

A software package name an AI tool suggests that does not actually exist. The install fails, or worse, someone later publishes a harmful package under that name.

### How do I check a Python package exists?

Look it up on PyPI. The address pypi.org/pypi/name/json returns details if the package exists and a 404 error if it does not.

### How many stop records are in Armadale?

By our boundary check of the state stops file, 109: 104 standard stops, 4 rail platform records at Armadale and Sherwood stations, and 1 regional coach stop.

### What is an AI coding agent?

An AI system that plans and carries out programming steps, such as writing files, installing packages and running tests, rather than answering a single question.

### Do teenagers use Claude in lessons?

No. Claude-based courses are open to adults aged 18 and above only, and teenagers work with other AI tools.

### Is there a classroom in Armadale?

No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.

### What do lessons cost for Armadale learners?

The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of five to ten, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.

### Who is in each group?

Five to ten learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.

### Will Armadale groups learn Copilot Studio?

No. Copilot Studio is reserved for private lessons; groups build agents in Python code.

## More for Armadale learners

For the city as a whole, read [the Perth page](/online-coding-and-python-classes-in-perth-western-australia); for younger children, [coding for Perth kids](/coding-classes-for-kids-perth). South of the city, [Mandurah](/ai-and-programming-classes-in-mandurah) has its own page, and [the Western Australia guide](/coding-and-ai-classes-in-western-australia) covers the state.

## Contact

Book the free class on [https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-armadale-perth](https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-armadale-perth#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
