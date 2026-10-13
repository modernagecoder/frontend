---
title: "Vibe Coding and AI Agents Classes in Fremantle, Perth"
description: "Live online vibe coding and AI agent classes for the City of Fremantle, with an agent project that merges Main Roads car and bike counter data through one adapter."
canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-fremantle-perth
source: src/pages/vibe-coding-and-ai-agents-classes-in-fremantle-perth.html
---
> An agent that answers questions from public data and is honest about what that data contains. In our Fremantle project the agent ranks counted places using two Main Roads tools, one for vehicles and one for bicycles. The tools name the same idea differently. Learners write a small adapter so the agent sees one clear schema and never turns a missing count into a zero.

[Home](/) / [Australia](/coding-classes-in-australia) / [Western Australia](/coding-and-ai-classes-in-western-australia) / [Perth](/online-coding-and-python-classes-in-perth-western-australia) / Fremantle

City of Fremantle, southern Perth, Western Australia / Live online

# Vibe coding and AI agents classes in Fremantle

**What can a Fremantle learner build with an AI agent?** An agent that answers questions from public data and is honest about what that data contains. In our Fremantle project the agent ranks counted places using two Main Roads tools, one for vehicles and one for bicycles. The tools name the same idea differently. Learners write a small adapter so the agent sees one clear schema and never turns a missing count into a zero.

The City of Fremantle is small, at about 19 square kilometres, and busy. Main Roads lists 46 vehicle count sites on 27 roads here, plus 7 permanent bicycle counters on paths by the beaches, the river and the railway. Those two lists are a ready-made test of how an AI agent copes when its tools disagree about names.

Facts last verified 12 October 2026. Teaching is online; no Fremantle branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 15 to 20 students per group.

## Agents, vibe coding and Python

Courses that suit the adapter project below. A free trial lesson sets the starting point.

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Projects built with an AI partner, then read, tested and explained.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Adults 18 and over): Coding agents on real repositories, with every change reviewed.
- [Generative AI Course](/courses/complete-generative-ai-masterclass-college) (University and adult): Tool use, structured output and checking what a model returns.
- [Python for Teens](/courses/python-complete-masterclass-teens) (Ages 13 to 17): Dictionaries, functions and error handling, the parts every adapter needs.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Older terraces, short commutes and a port city

Figures for the City of Fremantle council area (ABS LGA53430), from 2021 Census QuickStats read on 12 October 2026, with the latest ABS estimate.

**City of Fremantle counts**

| Measure | Value |
|---|---|
| Residents, 2021 Census | 31,930 |
| Estimated residents, 2025 | 37,542 |
| Median age | 42 |
| Private dwellings | 15,687 |
| People per household | 2.2 |
| Bedrooms per dwelling | 2.8 |

**Fremantle shares compared with the state**

| Share | Fremantle | WA |
|---|---|---|
| Semi-detached, terrace or townhouse | 22.3% (2,932) | 13.0% |
| Flat or apartment | 16.4% (2,154) | 6.5% |
| Walked to work | 4.0% (661) | 2.2% |
| Professionals among workers | 37.5% (6,213) | 22.0% |

### Children

Residents aged 5 to 9 numbered 1,449, or 4.5%, below the 6.5% share for Western Australia.

### Degrees

Of residents aged 15 and over, 39.2% held a bachelor degree or higher, against 23.8% statewide.

### Growth

The ABS estimate of 37,542 residents for 2025 sits well above the 2021 Census count. They are different measures, so we show both and leave them unsubtracted.

The Census was taken during the pandemic, so the travel-to-work shares describe that week. The ABS rounds figures and lightly perturbs small counts, so parts of its tables may not add up to its totals; we quote each number as published.

## Two tools, one question, one adapter

The task given to the agent is short: rank the counted places in Fremantle by how much traffic they carry. It has two tools. One returns Traffic Digest rows for vehicles; the other returns Bike Count Sites. Only 10 field names appear in both, and none of them is a volume.

**What each tool calls the same idea (Main Roads field names)**

| Idea | Vehicle tool | Bike tool |
|---|---|---|
| Average per day, whole week | MON_SUN | COMBINED_DIRECTION_MON_SUN |
| Average per weekday | MON_FRI | COMBINED_DIRECTION_MON_FRI |
| Average per weekend day | SAT_SUN | COMBINED_DIRECTION_SAT_SUN |
| Fields found only here | 8 | 12 |

**Three versions of the agent's ranking step on 53 Fremantle rows (our scripts)**

| Version | Result |
|---|---|
| row["MON_SUN"] | KeyError on all 7 bike rows; the run stops |
| row.get("MON_SUN", 0) | Runs, but all 7 bike counters score zero |
| Adapter, then rank by mode | 46 vehicle sites and 5 bike counters ranked; 2 marked as no count yet |

### The quiet failure

The second version is worse than the crash. It looks finished, yet it reports the path counter at Stirling Bridge, averaging 703 riders a day, as carrying nothing.

### Missing is not zero

Two underpass counters were commissioned on 21 July 2026 and have no counts yet. The adapter maps their volume to None and the agent says so in words.

### Separate rankings

Mixing modes puts the busiest bike counter 45th of 51, behind 44 vehicle sites. The adapter adds a mode field, and the agent ranks vehicles and bikes apart.

### What the adapter reveals

Once both tools speak one schema, a real local pattern appears. Four of the five counted bike paths are busier at the weekend than on weekdays; the path at Stirling Bridge rises from 619 to 911 riders. Vehicle sites go the other way, with a median weekend to weekday ratio of 0.908.

Volumes come from the Main Roads Traffic Digest and Bike Count Sites layers, downloaded on 12 October 2026, for sites Main Roads assigns to the City of Fremantle. Count years differ between sites, from 2021/22 to 2026/27. The adapter, the rankings and the ratios are our own scripts and calculations.

## One function between the agent and its tools

An adapter is a translation layer. It takes a row from either tool and returns a dictionary with the same keys every time.

**Lesson steps**

| Step | Learner task |
|---|---|
| 1 | Print the keys of one row from each tool and list the shared names. |
| 2 | Run the naive ranking and read the KeyError carefully. |
| 3 | Write adapt(row) returning site, road, place, mode, per_day, weekday, weekend and year. |
| 4 | Give the agent only adapted rows, and test it on a counter with no data. |

Step 4 is where most first attempts slip. A default of zero feels harmless while writing the adapter, but it turns a new counter into a dead path. Learners write a test that feeds in a bike row with blank volumes and asserts that the agent's answer contains the words no count yet. When the agent later meets a third tool, such as pedestrian counts, the same adapter pattern absorbs it in a few lines.

### Younger learners

Translate two picture cards that say the same thing in different words, then make one shared card.

### Teenagers

Write the adapter in Python, then let an AI assistant extend it and check every field it maps.

### Adults

Put adapters between an agent and two internal systems that disagree about names and units.

## Bridges, beaches and the 2027 school year

Local details from the two Main Roads layers and the WA Department of Education.

### Busiest road site

Stirling Highway north of Stirling Bridge averages 36,707 vehicles a day across the week, from a 2023/24 count.

### Coast path

The South Beach counter north of Douro Road averages 359 riders a day, with 174 heading to Fremantle and 185 to Coogee.

### Term 3, 2027

WA public schools run Term 3 from Monday 19 July to Friday 24 September 2027, a good moment to begin or switch a course.

**Area used** The council area is the ABS outline of about 19.3 square kilometres. Count sites are those Main Roads attaches to the City of Fremantle. Our point-in-polygon test places 11 government schools inside the outline.

## From translation cards to agent tools

Ages are guidance; the free trial sets the rung.

- **Ages 6 to 10: Blocks and stories** Scratch games built step by step, with each step said aloud. [Scratch Coding for Kids](/courses/scratch-programming-complete-course), [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)
- **Ages 10 to 14: Python and AI basics** First typed code and a sense of what AI gets wrong. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [AI Literacy for Kids (Ages 8 to 14)](/courses/ai-literacy-for-kids-course)
- **Ages 14 to 18: Vibe coding** Apps made with AI help, then tested by the learner. [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course), [AI Tools Course for Teens (13+)](/courses/teens-ai-tools-mastery-course)
- **Adults 18 and over: Agents at work** Coding agents and tool use for study and jobs. [Generative AI Course](/courses/complete-generative-ai-masterclass-college), [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)

## Why teach adapters when agents can write them?

Because an agent that guesses field names can be confidently wrong.

Ask a coding agent to merge the two Fremantle tools and it may well produce a working adapter. It may also choose the primary-direction column instead of the combined one, or fill gaps with zero, and the output will still look tidy.

A learner who has mapped the fields by hand knows which column means both directions and why a blank must stay blank. That knowledge turns a plausible draft into a checked one.

Fremantle learners let agents draft the glue code and then read every line of it. The longer argument is in [why checking code still beats trusting it in 2026](/blog/is-coding-worth-learning-2026).

## Classes for Fremantle, online

Lessons happen live over video, so there is no travel across the river or the city.

- **Teacher-led** Every lesson is run live, with code checked as learners write it.
- **Term-time rhythm** Classes match the WA school terms and break for the holidays.
- **Free first session** One trial lesson, then a short written plan.
- **Group or solo** Groups of fifteen to twenty at one level, or private lessons.
- **Twice weekly** Two lessons each week, about eight a month.
- **Clock check** A 4pm Fremantle lesson begins at 1:30pm in India, all year.

**No clock changes** The IANA time zone database shows Western Australia last ended daylight saving in March 2009, so the gap with India stays at two and a half hours.

## Fremantle class fees

One fee table for every learner.

- First class: USD 0. The trial lesson is free and includes a plan.
- Group tuition: USD 100 a month. Group lessons: around eight a month, with fifteen to twenty learners.
- Private tuition: USD 150 a month. Private lessons: around eight a month with a dedicated teacher.

Fremantle fees are in US dollars and start only after the trial has fixed a course and a weekly slot. Holiday and missed-lesson rules are on the pricing page.

## Fremantle vibe coding and agents questions

### How many people live in the City of Fremantle?

The 2021 Census counted 31,930 residents, with a median age of 42. The ABS estimate for 2025 is 37,542.

### What is an adapter in programming?

A small piece of code that converts data from one shape into another, so the rest of a program, or an agent, only has to understand one format.

### Why not just use a default of zero?

Because a missing count and a count of zero mean different things. In Fremantle, two new path counters would be reported as unused.

### What is vibe coding?

Building software by describing what you want to an AI assistant and steering its drafts. Our classes add the reading and testing that keep the result correct.

### Are agents safe for children to use?

Younger learners work with guided, age-appropriate tools in class. Open agent tools come later, under supervision and within each tool's age rules.

### How many bike counters are in Fremantle?

Main Roads lists 7 permanent bicycle counters in the City of Fremantle, five of them with counts in the data downloaded on 12 October 2026.

### Do you have a centre in Fremantle?

No. All lessons are live online, we have no Australian office, and our listed phone number is Indian.

### What do Fremantle classes cost?

The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.

### Who will my child learn with?

Fifteen to twenty learners matched by level and pace, not by age or suburb. One-to-one lessons are there when no group time fits.

### Can adults learn about agents?

Yes. Adults join adult groups or private lessons and often build agents around their own tools at work.

## Where to go next

Read the [Perth page](/online-coding-and-python-classes-in-perth-western-australia) for the city, the [Western Australia guide](/coding-and-ai-classes-in-western-australia) for the state, or [thinking, not just using AI tools](/learn-to-think-not-just-use-ai-tools-australia) for the habits behind this project.

## Contact

Book the free class on [https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-fremantle-perth](https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-fremantle-perth#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
