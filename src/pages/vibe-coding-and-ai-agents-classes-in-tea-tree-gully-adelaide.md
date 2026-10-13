---
title: "Vibe Coding and AI Agents Classes in Tea Tree Gully, Adelaide"
description: "Live online vibe coding and AI agent classes for Tea Tree Gully teens and adults, plus Scratch and Python for children from six, in small groups or one to one."
canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-tea-tree-gully-adelaide
source: src/pages/vibe-coding-and-ai-agents-classes-in-tea-tree-gully-adelaide.html
---
> Usually because the tool descriptions do not say clearly what each tool does, so the agent guesses from names. Our live online classes teach learners to write tool descriptions an agent cannot misread. The City of Tea Tree Gully had 101,174 residents in 2021.

[Home](/) / [Australia](/coding-classes-in-australia) / [South Australia](/coding-and-ai-classes-in-south-australia) / [Adelaide](/ai-and-programming-classes-in-adelaide) / Tea Tree Gully

City of Tea Tree Gully, Adelaide, South Australia / Live online

# Vibe coding and AI agent classes in Tea Tree Gully

**Why do AI agents in Tea Tree Gully projects pick the wrong tool?** Usually because the tool descriptions do not say clearly what each tool does, so the agent guesses from names. Our live online classes teach learners to write tool descriptions an agent cannot misread. The City of Tea Tree Gully had 101,174 residents in 2021.

Asked how many bus stops serve Tea Tree Gully, our scripted agent answered: none. Not one stop name in South Australia's timetable contains the words "Tea Tree Gully". The agent had searched names because both of its tools were described the same way, as "find stops for a place".

Facts last verified 14 October 2026. Teaching is online; no Tea Tree Gully branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 15 to 20 students per group.

## Courses for building agents that choose well

This project needs Python functions, docstrings and an understanding of how agents read tools. These courses build all three; a free trial lesson finds the fit.

- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Adults 18 and over): Building and directing coding agents, including the tools they call.
- [Generative AI Course](/courses/complete-generative-ai-masterclass-college) (University and adult): Tool use, function calling and evaluating agent behaviour.
- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Making apps with AI help, with clear instructions as a core skill.
- [Python for Teens](/courses/python-complete-masterclass-teens) (Ages 13 to 17): Functions, parameters and docstrings that explain themselves.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Separate houses and bus commuters in the north-east

Council-wide figures from the 2021 Census for the City of Tea Tree Gully (ABS code LGA47700), set beside South Australia.

**City of Tea Tree Gully, 2021**

| Measure | City of Tea Tree Gully |
|---|---|
| Residents | 101,174 |
| Median age | 41 |
| Families | 29,197 |
| Private dwellings | 41,022 |
| People per household | 2.5 |

**Tea Tree Gully compared with the state**

| Indicator | Tea Tree Gully | South Australia |
|---|---|---|
| Separate houses | 89.1% (34,400) | 78.0% |
| Workers who took a bus to work | 5.8% (2,944) | 3.1% |
| Workers who drove to work | 65.5% (33,080) | 63.9% |
| Adults with a bachelor degree or higher | 21.0% (17,603) | 22.7% |

### School ages

Residents aged 5 to 9 numbered 6,030, aged 10 to 14 6,173, and aged 15 to 19 5,846.

### Older residents

2,482 residents were aged 85 or over.

### Size

The council area spans about 95 square kilometres in the north-east of Adelaide.

Figures are exactly as the ABS released them; its privacy noise on small cells is one reason we never add them up.

## Same description, wrong tool

The agent had two Python functions available as tools. stops_named(text) searches stop names. stops_in_council(name) returns stop records whose location falls inside a council boundary. In version one, both docstrings read "Find stops for a place."

**What each tool returned for Tea Tree Gully (our run on timetable version 1708)**

| Tool call | Result |
|---|---|
| stops_named("Tea Tree Gully") | 0 stop records |
| stops_named("Tea Tree") | 8 records, all at one interchange |
| stops_in_council("Tea Tree Gully") | 607 stop records |
| Wednesday 21 October 2026 visits at those 607 | 27,084 |

**The two versions of the descriptions**

| Tool | Version one | Version two |
|---|---|---|
| stops_named | Find stops for a place. | Search stop NAMES for text. Suburb and council names rarely appear in stop names. |
| stops_in_council | Find stops for a place. | Return every stop record located inside a council boundary. Use for questions about an area. |

### What the agent saw

With identical descriptions, the agent had nothing to go on but the function names, and "named" sounded like the right match for a place name.

### What changed

With version two, our scripted agent chose stops_in_council and reported 607 stop records. Nothing else about the agent or the data changed.

### Why zero was believable

An empty result looks like an answer. The agent reported "no stops found" with no error, which is exactly why it is dangerous.

### Descriptions are instructions

For an agent, a tool's description is the main evidence for when to use it. Write what the tool does, what it does not do, and when to prefer another tool. Test with a question that only one tool can answer correctly, as Tea Tree Gully does here.

Adelaide Metro publishes the timetable openly; working out which stops fall within the council, and all the tallies, was done in our own code. The agent is a small script of ours built to isolate the effect of wording, so no commercial model's output appears here.

## Writing tool descriptions an agent can use

A few lines of plain English decide most tool choices.

**A checklist for tool descriptions**

| Include | Why | In the Tea Tree Gully tools |
|---|---|---|
| What the input means | Agents fill parameters from it | text versus council name |
| What the tool does not do | Prevents near-miss choices | Name search ignores location |
| When to use it | Guides choice between similar tools | Area questions use the boundary tool |
| What an empty result means | Stops false "none found" answers | Zero names is not zero stops |

### Primary learners

Label two boxes so clearly that a friend always picks the right one without asking.

### Secondary learners

Give an AI tool two functions with vague docstrings, ask it a question, then rewrite the docstrings and ask again.

### Adults

Review the descriptions of tools your agents use at work, especially pairs that sound alike.

Good descriptions help people too. The same docstring that steers an agent tells the next programmer what the function is for.

## A bus-only council

Council-wide timetable markers for Wednesday 21 October 2026, with weekend days for comparison.

### No train

None of the 607 stop records inside the council is a railway station; all visits are by bus, including 243 school bus visits.

### Routes

66 routes served the council's stop records that Wednesday.

### Weekends

Visits fell to 13,399 on Saturday 24 October and 11,976 on Sunday 25 October.

**Council figures** This page covers the whole City of Tea Tree Gully. Suburbs inside it, such as Golden Grove and Modbury, have their own pages, and their figures are not repeated here. Neighbouring councils include Salisbury, Playford, Port Adelaide Enfield, Campbelltown and Adelaide Hills.

## From labelled boxes to well-described tools

The trial lesson matters more than these age bands.

- **Ages 6 to 10: Scratch and play** Clear names and instructions in first programs. [Scratch Coding for Kids](/courses/scratch-programming-complete-course), [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)
- **Ages 10 to 14: Python and AI basics** Functions and a realistic idea of AI. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [AI Literacy for Kids (Ages 8 to 14)](/courses/ai-literacy-for-kids-course)
- **Ages 14 to 18: Vibe coding** Directing AI tools with precise instructions. [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course), [AI Tools Course for Teens (13+)](/courses/teens-ai-tools-mastery-course)
- **Adults 18 and over: Agents** Tools, descriptions and agent evaluation. [Generative AI Course](/courses/complete-generative-ai-masterclass-college), [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)

## If the agent picks the tool, who writes the label?

The person building the agent. An agent can only be as precise as the descriptions it reads.

Vibe coding often means asking an agent to "add a tool for that". It will, and it may describe the new tool in the vaguest possible words. Later, when two tools sound alike, the agent chooses by guesswork and reports the result with confidence.

Learners who have watched "no stops" become 607 with two rewritten sentences treat tool descriptions as part of the program. That is how they build agents that keep working as more tools are added.

In Tea Tree Gully, the learner who writes clear tool descriptions gets the 607, not the zero. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Tea Tree Gully lessons online

Lessons run live over video, so learners join from home.

- **Tools on screen** Every tool, description and agent answer is reviewed together.
- **Holidays respected** We pause when South Australian schools break and restart with each new term.
- **Trial lesson free** One full class without charge, then honest advice.
- **Fifteen to twenty learners** Grouped by level, or taught one to one.
- **Twice weekly** Two fixed lessons a week, roughly eight a month.
- **India time** With teachers in India, a 6pm Tea Tree Gully class is 1pm India time in summer and 2pm from April.

**Summer and winter time** South Australia's daylight saving runs from the first Sunday in October to the first Sunday in April (IANA time zone database); India has none, so the gap moves between five and four hours.

## Tea Tree Gully class fees

Three clear prices.

- First class: USD 0. The first lesson is free and ends with a written recommendation.
- Group tuition: USD 100 a month. Group month: around eight lessons with fifteen to twenty learners.
- Private tuition: USD 150 a month. Private month: around eight lessons with one teacher.

Fees are charged in US dollars once the trial has fixed a course and a weekly time. Holiday pauses and missed lessons are covered on the pricing page.

## Tea Tree Gully vibe coding and agent questions

### What is the population of the City of Tea Tree Gully?

The 2021 Census QuickStats count 101,174 residents in the City of Tea Tree Gully local government area, with 41,022 private dwellings and a median age of 41.

### What is a tool description for an AI agent?

A short text, often a function's docstring, telling the agent what a tool does and when to use it. Agents rely on it to choose between tools.

### Why did the agent report no stops?

It searched stop names for "Tea Tree Gully" because both tools were described identically. No stop name contains those words, so the search returned zero.

### How many stop records are in the City of Tea Tree Gully?

By our boundary check of the Adelaide Metro timetable, 607 stop records lie inside the council, with 27,084 scheduled visits on Wednesday 21 October 2026.

### What does vibe coding mean in practice?

You explain the program you want to an AI assistant, it drafts the code, and you test, question and refine that draft until it works properly.

### Is Claude part of the teen courses?

No. We keep Claude for learners who are 18 or older, and teenagers work with other AI tools.

### Is there a classroom in Tea Tree Gully?

No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.

### What do lessons cost for Tea Tree Gully learners?

The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.

### Who is in each group?

Fifteen to twenty learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.

### Can a group class here cover Copilot Studio?

No. We teach Copilot Studio only in private lessons; groups write agents in Python.

## More for Tea Tree Gully learners

Two suburbs here have their own pages: [Golden Grove](/vibe-coding-and-ai-agents-classes-in-golden-grove-adelaide) and [Modbury](/online-coding-and-python-classes-in-modbury-adelaide). For the city as a whole, see [the Adelaide page](/ai-and-programming-classes-in-adelaide) and [the South Australia guide](/coding-and-ai-classes-in-south-australia).

## Contact

Book the free class on [https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-tea-tree-gully-adelaide](https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-tea-tree-gully-adelaide#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
