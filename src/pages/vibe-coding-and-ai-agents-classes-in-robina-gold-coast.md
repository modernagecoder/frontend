---
title: "Vibe Coding and AI Agents Classes in Robina, Gold Coast"
description: "Live online vibe coding and AI agent classes for Robina, ages 6 to adult, with an agent project that traces why a bus helper gives different answers each run."
canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-robina-gold-coast
source: src/pages/vibe-coding-and-ai-agents-classes-in-robina-gold-coast.html
---
> Why an AI agent can give different answers to the same question. Learners give an agent a tool that looks up the next bus from a Robina stop by name. Twenty-two stop names belong to two stops each, one per direction. The tool picks one at random-looking order, so 20 runs produce 20 different answer sets. Fixing it is a lesson in deterministic tools.

[Home](/) / [Australia](/coding-classes-in-australia) / [Queensland](/coding-and-ai-classes-in-queensland) / [Gold Coast](/best-coding-classes-in-gold-coast) / Robina

Robina, City of Gold Coast, Queensland / Live online

# Vibe coding and AI agents classes in Robina

**What does the Robina agent project uncover?** Why an AI agent can give different answers to the same question. Learners give an agent a tool that looks up the next bus from a Robina stop by name. Twenty-two stop names belong to two stops each, one per direction. The tool picks one at random-looking order, so 20 runs produce 20 different answer sets. Fixing it is a lesson in deterministic tools.

Robina is in the southern Gold Coast, with a station on the Gold Coast rail line, a town centre and many townhouses. Its 90 served stop records carry buses and trains through the day, and many of them share a name with a stop across the road. That small detail is enough to make a careless agent unpredictable.

Facts last verified 13 October 2026. Teaching is online; no Robina branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 15 to 20 students per group.

## Agents, vibe coding and Python

For learners who like to know why software behaves as it does. The free session points to the right one.

- [Codex & Claude Code for Teens](/courses/codex-and-claude-code-ai-coding-agents-course-for-teens) (Ages 13 to 17): Agents with tools that teenagers write and test themselves.
- [Generative AI Course](/courses/complete-generative-ai-masterclass-college) (University and adult): Tool calling, evaluation and repeatable behaviour.
- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): AI-assisted projects, run twice to check they agree.
- [AI Literacy for Kids (Ages 8 to 14)](/courses/ai-literacy-for-kids-course) (Ages 8 to 12): Why computers sometimes surprise us, explained simply.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Townhouses and home offices

From the 2021 Census QuickStats for the Robina suburb and locality (ABS SAL32445), read on 13 October 2026.

**Robina counts**

| Measure | Value |
|---|---|
| People | 25,659 |
| Median age | 39 |
| Families | 7,163 |
| Private dwellings | 10,180 |
| People per household | 2.6 |
| Motor vehicles per dwelling | 1.9 |

**Robina shares compared with Queensland**

| Share | Robina | Queensland |
|---|---|---|
| Semi-detached, terrace or townhouse | 31.6% (2,962) | 11.7% |
| Worked at home | 15.2% (1,949) | 14.1% |
| Bachelor degree or higher | 25.5% (5,471) | 21.9% |
| Residents aged 15 to 19 | 6.6% (1,684) | 6.1% |

### Townhouse suburb

Almost a third of Robina homes were townhouses or terraces, nearly three times the Queensland share.

### Houses too

Separate houses still made up 54.6% of dwellings, so the suburb mixes both kinds of home.

### Pandemic Census

The working-at-home share comes from a Census taken during the pandemic, so it may be higher than usual.

Shares are as the bureau printed them; it rounds and slightly perturbs small counts, so we never add its rows into totals of our own.

## Same question, different answer

The agent's tool takes a stop name and returns the next bus after 8am on Wednesday 21 October 2026. To find the stop, it builds a lookup from a Python set of (name, stop) pairs. There are 90 served stop records in Robina but only 68 distinct names: 22 names are used twice, usually for the stops on opposite sides of one road.

**The naive tool run under 20 different PYTHONHASHSEED values (our measurement)**

| What we measured | Result |
|---|---|
| Stop names asked about | 68 |
| Names whose answer changed between runs | 22 of 68 |
| Different complete answer sets in 20 runs | 20 |
| Bond University at 8am | Route 750 at 8:02 (11 runs) or route 753 at 8:11 (9 runs) |

### Why it happens

Python randomises the order of strings in a set each time it starts. Building a dict from that set keeps whichever duplicate name comes last, so the chosen stop changes run to run.

### Why it looks fine

Every answer is a real bus at a real Robina stop. Nothing crashes, and a single test passes. Only running twice reveals the problem.

### Direction matters

The two stops with one name usually serve opposite directions, so the agent may send someone towards Robina station or away from it.

### The deterministic fix

Key the lookup by stop ID, not name. When a name matches two stops, return both with their direction and let the agent ask which way the person is going. Sort any list before choosing from it. With those changes, all 20 runs return identical answers.

Stops and timetables come from the Translink SEQ GTFS feed on data.qld.gov.au, CC BY 4.0, valid 7 October to 6 December 2026. Which stops lie in Robina is our point-in-polygon test on the ABS outline; the tool, the 20 runs and every count are our own scripts.

## Run it twice before you trust it

Repeatability is a property you test for, not one you assume.

**Lesson steps**

| Step | Learner task |
|---|---|
| 1 | Build the naive name lookup and ask it about every Robina stop name. |
| 2 | Run the same script under 20 hash seeds and compare the outputs. |
| 3 | Count duplicate names and explain each changing answer. |
| 4 | Rewrite the tool around stop IDs and deterministic sorting, then rerun all 20. |

Learners also meet the other sources of drift an agent faces: model sampling, unsorted database results and network timing. Each one gets a matching habit, from fixing seeds in tests to sorting before choosing. The Robina case is the easiest to see because the data are public and the bug is one line long.

### Younger learners

Draw names from a hat with two cards saying the same thing and see why the result changes.

### Teenagers

Reproduce the bug with hash seeds and fix it with IDs and sorted output.

### Adults

Add repeat-run checks to agents and scripts that feed reports at work.

## Trains, counts and 2027 terms

A few more Robina facts from the timetable feed and council open data.

### Rail and bus

On Wednesday 21 October 2026 the feed schedules 4,546 stop visits in Robina, 88 of them by train.

### Traffic surveys

City of Gold Coast traffic counts include 223 surveys recorded in Robina between 2017 and 2026.

### Term 2, 2027

Queensland state schools run Term 2 from Monday 12 April to Friday 25 June 2027.

**Outline used** Robina is the ABS suburb outline of about 15.0 square kilometres; stops inside it come from our point-in-polygon test.

## From names in a hat to reliable agents

A rough guide to where learners start.

- **Ages 6 to 10: Rules and chance** Scratch games where luck and logic meet. [Scratch Coding for Kids](/courses/scratch-programming-complete-course), [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)
- **Ages 10 to 14: Python and AI** First programs and an honest look at AI. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [AI Literacy for Kids (Ages 8 to 14)](/courses/ai-literacy-for-kids-course)
- **Ages 14 to 18: Agents** Tools, tests and repeatable behaviour. [Codex & Claude Code for Teens](/courses/codex-and-claude-code-ai-coding-agents-course-for-teens), [AI Tools Course for Teens (13+)](/courses/teens-ai-tools-mastery-course)
- **Adults 18 and over: Agents at work** Agents that give the same answer every time. [Generative AI Course](/courses/complete-generative-ai-masterclass-college), [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)

## Is randomness always the model's fault?

No. Often the tools around the model are the unpredictable part.

People blame AI agents for inconsistent answers, and sometimes the model is the cause. In Robina the model is not involved at all: the tool itself returns different stops depending on how Python happens to order a set.

Learners who have chased this bug check their tools before blaming the model, and they write tests that run each question more than once.

Our agent classes teach learners to make software repeatable before making it clever. The longer argument is in [why checking code still beats trusting it in 2026](/blog/is-coding-worth-learning-2026).

## Robina sessions, online

Learners log in from home for a live session; nobody has to drive to the town centre.

- **Real teacher** Each session is taught live, with questions answered on the spot.
- **Term pattern** Sessions follow Queensland school terms and pause for breaks.
- **Free start** Try one session free, then receive a short plan.
- **Group size** Groups of fifteen to twenty at a matching level, or private.
- **Weekly** Two sessions each week, around eight monthly.
- **Indian time** A 5pm Robina session is 12:30pm in India on any date.

**No daylight saving** Queensland has stayed on standard time since daylight saving last ended in March 1992, according to the IANA time zone database.

## Robina fees

Every learner pays the same published fees.

- First class: USD 0. The opening session is free, with a course suggestion afterwards.
- Group tuition: USD 100 a month. Group: around eight sessions a month, fifteen to twenty learners.
- Private tuition: USD 150 a month. Private: around eight sessions a month with a personal teacher.

Billing is in US dollars and begins once the trial has settled a course and a regular slot. Holiday and absence rules are on the pricing page.

## Robina agents and vibe coding questions

### What is Robina's population?

The 2021 Census counted 25,659 people in the Robina suburb, median age 39.

### What does nondeterministic mean?

Giving different results for the same input on different runs. In agents it can come from the model, the tools or the data order.

### What is PYTHONHASHSEED?

A setting that controls how Python randomises string hashing. Changing it changes the iteration order of sets of strings.

### How did you fix the Robina tool?

By looking stops up by ID, returning both stops when a name is shared, and sorting results before choosing.

### Are agents suitable for children?

Younger learners explore AI ideas through guided games; building agents usually starts in the teens.

### How many stop names are shared in Robina?

In the timetable feed, 22 names belong to two stop records each, out of 68 distinct names.

### Do you have a centre in Robina?

No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.

### What do Robina classes cost?

The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.

### Who are the other learners?

Fifteen to twenty learners at a similar level and pace, not grouped by age or suburb. One-to-one lessons suit anyone no group time fits.

### Can adults build agents here?

Yes. Adults have their own groups or private sessions and often bring a tool from work to make reliable.

## Where next

Robina families can also read our [Gold Coast overview](/best-coding-classes-in-gold-coast), the statewide [Queensland guide](/coding-and-ai-classes-in-queensland), and [thinking, not just using AI tools](/learn-to-think-not-just-use-ai-tools-australia).

## Contact

Book the free class on [https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-robina-gold-coast](https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-robina-gold-coast#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
