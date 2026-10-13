---
title: "Vibe Coding and AI Agents Classes in Clarence, Hobart"
description: "Live online vibe coding and AI agent classes across Clarence for teenagers and adults, with Scratch and Python for children from six, in small groups or one to one."
canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-clarence-hobart
source: src/pages/vibe-coding-and-ai-agents-classes-in-clarence-hobart.html
---
> Often because it assumes where it will be run from, so file paths that worked in the agent's session break elsewhere. Our live online lessons cover building with AI and agents while watching for exactly that. The Clarence council area had 61,531 residents in 2021.

[Home](/) / [Australia](/coding-classes-in-australia) / [Tasmania](/coding-and-ai-classes-in-tasmania) / [Hobart](/best-coding-classes-in-hobart) / Clarence

Clarence City Council, Hobart, Tasmania / Live online

# Vibe coding and AI agent classes in Clarence

**Why does code an AI agent writes for Clarence projects work once and then fail?** Often because it assumes where it will be run from, so file paths that worked in the agent's session break elsewhere. Our live online lessons cover building with AI and agents while watching for exactly that. The Clarence council area had 61,531 residents in 2021.

An agent wrote a tidy script to total Clarence's road network from a small data file, ran it, and reported 14,374 road segments. Run the same script from its own folder and Python cannot find the file. Nothing in the code changed; only the folder it was started from.

Facts last verified 14 October 2026. Teaching is online; no Clarence branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Courses for agent-built code that travels

This project needs Python files, paths and a working knowledge of how scripts run. These courses cover them; a free first lesson picks the right one.

- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Adults 18 and over): Coding agents on real projects, including how and where their code runs.
- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Building with AI help and testing on more than one machine or folder.
- [Python for Teens](/courses/python-complete-masterclass-teens) (Ages 13 to 17): Files, paths and pathlib, explained from the ground up.
- [AI Tools Course for Teens (13+)](/courses/teens-ai-tools-mastery-course) (Ages 13 to 17): Using AI tools well, including checking their assumptions.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Hobart's eastern shore

Census 2021 figures for the Clarence local government area (ABS code LGA61410), with Tasmania alongside.

**Clarence council area, 2021**

| Measure | Clarence |
|---|---|
| Residents | 61,531 |
| Median age | 41 |
| Families | 17,067 |
| Private dwellings | 25,855 |
| People per household | 2.4 |

**Clarence and Tasmania compared**

| Indicator | Clarence | Tasmania |
|---|---|---|
| Separate houses | 93.2% (21,987) | 87.7% |
| Adults with a bachelor degree or higher | 25.8% (13,155) | 21.9% |
| Workers who took a bus to work | 4.2% (1,227) | 2.5% |
| Employed people in professional jobs | 23.6% (6,856) | 20.0% |

### School ages

Clarence had 3,546 residents aged 5 to 9, 3,726 aged 10 to 14 and 3,162 aged 15 to 19.

### Older residents

1,673 residents were aged 85 or over.

### A large council

The council area covers about 378 square kilometres east of the Derwent.

Census cells carry small, deliberate privacy adjustments, so each figure is shown as published and none are combined.

## It worked on the agent's machine

We exported road segment totals for the Clarence council area from the LIST into data/clarence_roads.csv. Our scripted agent wrote scripts/report.py, which opens "data/clarence_roads.csv" and adds up the rows. We ran it from two folders, then ran a corrected version.

**The same script, started from different folders (our run)**

| Script and folder | Output |
|---|---|
| report.py, from the project folder | segments 14374 km 1837.0 |
| report.py, from the scripts folder | FileNotFoundError: data/clarence_roads.csv |
| report_fixed.py, from the scripts folder | segments 14374 km 1837.0 |
| report_fixed.py, from the project folder | segments 14374 km 1837.0 |

**What the data file holds (LIST, our query)**

| Road class | Segments | Recorded length |
|---|---|---|
| Access Road | 6,141 | 752.3 km |
| Local Road | 4,877 | 434.7 km |
| Vehicular Track | 1,410 | 398.3 km |
| Collector Road | 746 | 67.8 km |
| Arterial Road | 549 | 66.7 km |
| Sub Arterial Road | 383 | 53.8 km |
| National/State Highway | 268 | 63.4 km |

### Why it broke

A relative path is resolved from the folder Python was started in, not the folder the script lives in. The agent tested from one place; a person ran it from another.

### The tempting fix

Copying the data file into the scripts folder makes the error go away and leaves two copies that will drift apart. Agents sometimes do exactly that.

### The real fix

Build the path from the script's own location: Path(__file__).resolve().parent.parent / 'data' / 'clarence_roads.csv'. It works from anywhere.

### Ask where it will run

Before accepting agent-written code, run it from a different folder, or ask the agent how it finds its files. Hidden assumptions about the working directory are among the most common reasons code works in a demo and fails in use.

The road totals come from the LIST, State of Tasmania, via its map service's statistics query for segments intersecting the council boundary. The scripts, folders and outputs are our own; the agent is our own short script standing in for one, not a commercial AI model.

## Paths that do not depend on luck

A short guide to finding files reliably in Python.

**Ways to locate a data file**

| Approach | Works from any folder? | Note |
|---|---|---|
| open('data/file.csv') | No | Depends on the current folder |
| Path(__file__).resolve().parent | Yes | Anchored to the script itself |
| A path passed as an argument | Yes | The caller decides explicitly |
| os.chdir() at the top of the script | Yes, but risky | Changes state for everything else |

### Primary learners

Give directions to a toy box from the kitchen, then try the same directions from the garden.

### Secondary learners

Ask an AI tool for a script that reads a CSV, run it from two folders, and fix it with pathlib.

### Adults

Check scheduled jobs and agent-written tools at work for relative paths before they run unattended.

print(Path.cwd()) at the start of a script shows the working directory in one line. It is the quickest way to explain a FileNotFoundError that seems impossible.

## Sealed streets and long rural tracks

Council-wide markers from the LIST open data and the Tasmanian school calendar.

### Surfaces

Of the 14,374 segments, 9,016 are sealed, 5,143 unsealed and 215 need four-wheel drive.

### Places and addresses

The LIST records 510 points of interest and 30,912 address points in or on the council boundary, counts only.

### Term 3, 2027

Tasmanian government school Term 3 of 2027 runs from 19 July to 24 September.

**Clarence council area** Figures describe the Clarence local government area, not Greater Hobart. By the ABS boundaries it touches Brighton, Sorell and Southern Midlands on land; the City of Hobart lies across the river.

## From giving directions to robust scripts

Ages are a loose guide; a trial lesson finds the level.

- **Ages 6 to 10: Scratch and play** Clear instructions and where things live in a project. [Scratch Coding for Kids](/courses/scratch-programming-complete-course), [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)
- **Ages 10 to 14: Python and AI basics** Files, folders and first AI tools. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [AI Literacy for Kids (Ages 8 to 14)](/courses/ai-literacy-for-kids-course)
- **Ages 14 to 18: Vibe coding** Building with AI, then testing outside the demo. [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course), [AI Tools Course for Teens (13+)](/courses/teens-ai-tools-mastery-course)
- **Adults 18 and over: Coding agents** Agent-built tools that run reliably. [Generative AI Course](/courses/complete-generative-ai-masterclass-college), [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)

## If the agent ran it, why does it fail for you?

Because the agent ran it from somewhere you may not be.

Coding agents usually work inside one project folder and test from there. Their scripts pass every check they run. The first time a person double-clicks the file or a scheduler starts it elsewhere, a relative path points at nothing.

Learners who have seen 14,374 become FileNotFoundError with no code change check how files are found in any script an agent writes. That small habit separates a demo from a tool people can rely on.

In Clarence, the learner who anchors file paths ships scripts that run from anywhere. The longer argument is in [why knowing how code runs still matters alongside AI](/blog/is-coding-worth-learning-2026).

## Clarence lessons online

All lessons are live on video, with no trip across the bridge.

- **Run it twice** Learners test agent code from more than one folder while the teacher watches.
- **Term-time classes** Lessons follow the Tasmanian school year and pause in holidays.
- **A free start** One complete lesson without charge, then a written suggestion.
- **Groups of five to ten** Learners matched by level, or private sessions.
- **Twice weekly** Two fixed lessons a week, about eight each month.
- **India time** Teaching comes from India: a 7pm Clarence class is 1:30pm India time in summer and 2:30pm after April.

**Hobart clocks** Hobart changes to daylight saving on the first Sunday in October and back on the first Sunday in April (IANA time zone database); India stays on one time.

## Clarence class fees

Three fixed prices, whichever suburb a learner lives in.

- First class: USD 0. The first lesson is free and comes with written advice.
- Group tuition: USD 100 a month. About eight group lessons a month with five to ten learners.
- Private tuition: USD 150 a month. About eight private lessons a month.

Clarence families pay in US dollars once the trial has fixed a course and time. The pricing page sets out holidays and missed lessons.

## Clarence vibe coding and agent questions

### What is the population of the Clarence council area?

The 2021 Census QuickStats count 61,531 residents in the Clarence local government area, with 17,067 families and 25,855 private dwellings.

### What is the working directory in Python?

The folder a program was started from. Relative file paths are resolved from it, not from the folder where the script file is saved.

### How do I make a script find its data file from any folder?

Build the path from the script's location with pathlib, for example Path(__file__).resolve().parent, or pass the full path in as an argument.

### How many road segments does the LIST record for Clarence?

The LIST transport layer returned 14,374 road segments intersecting the Clarence council area in October 2026, with 1,837.0 km of recorded length across its road classes.

### What is an AI coding agent?

An AI system that writes, runs and edits code over several steps to complete a task, rather than answering a single message.

### Which AI tools will a Clarence teenager use?

Tools suited to their age. Claude appears only in our adult courses, which start at 18.

### Is there a classroom in Clarence?

No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.

### What do lessons cost for Clarence learners?

The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of five to ten, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.

### Who is in each group?

Five to ten learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.

### Is Copilot Studio part of the Clarence group course?

No. We teach Copilot Studio only in private sessions, while group learners write their agents in Python.

## More for Clarence learners

Across the river, [Sandy Bay](/online-coding-and-python-classes-in-sandy-bay-hobart) and [Glenorchy](/best-coding-and-ai-classes-in-glenorchy-hobart) have their own pages. [The Hobart page](/best-coding-classes-in-hobart) covers the whole city and [the Tasmania guide](/coding-and-ai-classes-in-tasmania) the state.

## Contact

Book the free class on [https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-clarence-hobart](https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-clarence-hobart#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
