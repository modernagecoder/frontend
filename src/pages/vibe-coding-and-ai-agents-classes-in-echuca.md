---
title: "Vibe Coding and AI Agents Classes in Echuca | Live Online"
description: "Vibe coding and AI agents classes for Echuca and Moama teens and adults, live online: build agents that choose the right state's tool. First lesson free."
canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-echuca
source: src/pages/vibe-coding-and-ai-agents-classes-in-echuca.html
---
> Live online classes in which Echuca and Moama teenagers and adults vibe code real programs, then build AI agents in Python that call tools and pick the right one for each question. The 2021 Census counted 22,568 people in the Echuca - Moama urban area, which spans two states. A teacher leads every lesson, and the first is free.

[Home](/) / [Australia](/coding-classes-in-australia) / [Victoria](/coding-and-ai-classes-in-victoria) / Echuca

Echuca, Victoria, Australia / Live online

# Vibe coding and AI agents classes in Echuca

**What are the best vibe coding and AI agents classes in Echuca?** Live online classes in which Echuca and Moama teenagers and adults vibe code real programs, then build AI agents in Python that call tools and pick the right one for each question. The 2021 Census counted 22,568 people in the Echuca - Moama urban area, which spans two states. A teacher leads every lesson, and the first is free.

Echuca is one of the few Australian towns where a single local bus crosses a state border. Route 3 runs from Echuca over the bridge to Moama, and when we placed every stop on the five town routes inside the bureau's locality boundaries, 31 of the 93 stops were in New South Wales. That matters to an AI agent. Give an assistant two tools, a Victorian school calendar and a New South Wales one, and ask whether a student has school on a given day: if it picks the wrong tool, it gives a confident wrong answer. Across the last three terms of 2027 the two calendars disagree on 32 of 181 weekdays. Teaching an agent to route each question to the right tool, and on the right fact, is the project at the heart of this page.

Facts last verified 10 October 2026. Teaching is online; no Echuca branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 15 to 20 students per group.

## Courses for agents that use the right tool

All four lead to projects like the two-calendar agent. Book the free trial first; it asks for no card.

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Vibe coding with Python underneath: describe a program, then read, run and correct what the AI writes.
- [Python for Teens](/courses/python-complete-masterclass-teens) (Ages 13 to 17): The Python an agent builder needs: functions, dictionaries, dates and reading data files.
- [Generative AI Course](/courses/complete-generative-ai-masterclass-college) (University and adult): Language models, tool calling and agent design, with each agent tested against known answers.
- [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college) (Adults): Python from first steps to the level needed to write and test the tools an agent calls.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Twin river towns, counted as one

The bureau treats Echuca and Moama as one urban area across the Murray. Figures from the 2021 Census, with Victoria as the comparison.

**Echuca - Moama urban area: core 2021 counts**

| Measure | Echuca - Moama |
|---|---|
| Residents | 22,568 |
| Median age | 46 |
| Families | 6,168 |
| Private dwellings | 10,298 |
| Average people per household | 2.4 |
| Area of the urban area | about 351 square kilometres |

**Echuca - Moama alongside Victoria and Australia**

| Measure | Echuca - Moama | Vic | Australia |
|---|---|---|---|
| Occupied homes that are separate houses | 7,564 (86.2%) | 73.4% | 72.3% |
| Occupied homes that are flats or apartments | 21 (0.2%) | 12.1% | 14.2% |
| Technicians and trades workers among employed residents | 1,621 (16.0%) | 12.6% | 12.9% |
| Workers who drove themselves on Census day | 6,857 (67.5%) | 49.9% | 52.7% |
| Residents aged 20 to 24 | 1,051 (4.7%) | 6.3% | 6.2% |

### Almost no flats

Just 21 occupied homes were flats or apartments, 0.2% of the total, against 12.1% across Victoria.

### Trades country

Technicians and trades workers are 16.0% of employed residents, above the Victorian 12.6%.

### Two banks

Bureau localities lying almost wholly inside the urban area are Echuca and Echuca Village. The Moama locality stretches far beyond the town, so only part of it is inside.

Census tables are slightly randomised to protect privacy, so components may not add exactly to totals. Every figure is copied as the bureau printed it.

## Which state's calendar should the agent call?

An assistant has two tools. Learners write the code that decides which one answers each question.

**Stops on the Echuca town bus routes, placed in bureau locality boundaries (our count from the Victorian timetable data)**

| Route | Stops in Victoria | Stops in New South Wales |
|---|---|---|
| 1 Echuca - Echuca South | 34 | 0 |
| 2 Echuca - Echuca East | 26 | 0 |
| 3 Echuca - Moama | 1 | 28 |
| 4 Echuca - Cunningham Downs | 5 | 0 |
| 5 Echuca - 24 Lane | 1 | 4 |
| All five routes, distinct stops | 62 | 31 |

**Weekdays from 12 April to 20 December 2027, by which state is in term (our count from the published term dates)**

| Situation | Weekdays | Calendars agree? |
|---|---|---|
| Both states in term | 139 | Yes |
| Neither state in term | 10 | Yes |
| New South Wales in term, Victoria on holiday | 11 | No |
| Victoria in term, New South Wales on holiday | 21 | No |
| Total weekdays | 181 | 32 disagree (17.7%) |

### Two tools

One function answers from the Victorian 2027 term dates and one from the New South Wales dates. Each is tested alone first.

### A router

The agent reads the question, finds the place, looks up its state from the locality boundaries and calls the matching tool.

### The right attribute

A student who lives in Moama may attend a school in Echuca. The router must use the school's state when it is given, not the home or the bus stop.

### Why 17.7% matters

An agent that always calls the Victorian tool, because Echuca is a Victorian town, is wrong on 32 of 181 weekdays for a student at a New South Wales school. Victorian Term 2 starts on Monday 12 April, fifteen days before the New South Wales term on Tuesday 27 April, and in each later term the gap is a week at the start. Nothing in the agent's output looks unusual on those days; it is simply wrong.

Term 1 is left out because New South Wales schools in the Eastern and Western divisions start on different dates. Stop locations come from the Victorian Department of Transport and Planning timetable data; the state of each stop, the weekday counts and the router are our own work.

## Tool choice is where many agents go wrong

A modern AI agent is a language model plus tools. Choosing the tool is a decision the builder must be able to test.

Learners build the router twice. First they let the language model decide from a description of each tool, then they write a small deterministic rule: find the place, look up its state, call that tool. Next they run both versions over a test set of questions mentioning Echuca, Moama, the bridge and named schools, and count the wrong calls. The lesson generalises far beyond calendars: tax rules, opening hours and transport fares all change at borders, and an agent that serves more than one place needs routing that can be checked.

### Teenagers

Write two calendar functions and an if statement that picks between them, then try to break it with tricky questions.

### University students

Compare model-chosen and rule-based routing on a labelled test set, and report how often each picks the wrong tool.

### Adults

Design an assistant for a business with customers in two states, and make the rule for choosing state-specific answers explicit.

Modern Age Coders is independent of the Victorian and New South Wales governments, the Department of Transport and Planning and Campaspe Shire Council. The timetable, boundaries and term dates are theirs; the stop counts, weekday analysis and agents described here are ours.

## One clock on both banks of the Murray

School terms differ across the bridge, but the time does not.

### Same time zone

Victoria and New South Wales keep the same standard time and change their clocks on the same days, so an Echuca lesson time is the same in Moama.

### Summer clocks

Daylight saving runs from Sunday 4 October 2026 to Sunday 4 April 2027 in both states.

### Teachers in India

India is four and a half hours behind Echuca in winter and five and a half in summer, so a 5pm lesson starts at 12:30 or 11:30 India time.

## From one if statement to agents with many tools

The age bands are only a guide; the free first lesson places each learner.

- **Ages 13 to 14: Decisions in code** Python conditions, functions and dates, building toward a program that answers from the right table. [Python for Teens](/courses/python-complete-masterclass-teens), [Coding for Kids](/courses/kids-coding-blocks-masterclass)
- **Ages 15 to 18: First agents** Vibe coded apps and simple agents that call tools, with every tool tested on its own. [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course), [Problem Solving for Teens](/courses/problem-solving-dsa-masterclass-teens)
- **University: Agent evaluation** Tool calling, routing and measuring an agent's mistakes on labelled questions. [Generative AI Course](/courses/complete-generative-ai-masterclass-college), [Data Structures & Algorithms Course](/courses/data-structures-algorithms-masterclass-college)
- **Adults: Assistants for work** Agents that answer from the right rules for each customer, site or state. [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college), [Python Automation Course](/courses/python-ai-automation-masterclass-college)

## If an AI agent can call any tool, why should Echuca learners learn to route?

Because the agent cannot know which fact decides the answer unless someone who understands the problem tells it.

An agent that assumes Echuca always means Victoria is right most of the time. On a route where 28 of 29 stops are in Moama, and for students who cross the bridge every morning, the same assumption fails on almost one weekday in five. The failure is quiet: the agent answers in a calm, confident sentence either way.

Our Echuca learners build both calendar tools, then the router, then a test set that tries to fool it. They finish knowing that every agent has a decision point like this, and that the person who builds the agent is responsible for testing it.

Connecting a model to tools is easy in 2026; making sure it calls the right one is what a builder is for. The longer argument is in [why coding is still worth learning when AI can write code](/blog/is-coding-worth-learning-2026).

## How lessons reach Echuca and Moama

Classes are live on video, so learners on either side of the river join the same way.

- **Home set-up** A computer, a microphone and a steady internet connection are enough to join.
- **Either state** Teachers know both the Victorian and New South Wales school years, and plan around the learner's own school.
- **Trial class** The free first class teaches real material and ends with a suggested course and weekly time.
- **Small groups** Groups hold fifteen to twenty learners at one level, drawn from many towns.
- **Weekly rhythm** Two group lessons a week on fixed days, close to eight each month.
- **Teaching team** Teachers are based in India and confirm every time in Echuca time.

**Holidays on both sides** Families with children in schools in different states can pause lessons around either set of holidays.

## Echuca class fees

Fees are simple and the same for every Australian learner.

- First class: USD 0. The first class is free and finishes with a recommended level, course and lesson time.
- Group tuition: USD 100 a month. One month of group lessons, close to eight, with fifteen to twenty learners at the same level.
- Private tuition: USD 150 a month. Close to eight one-to-one lessons a month with a dedicated teacher.

Fees outside India are charged in US dollars, and Echuca and Moama pay the same as the rest of Australia. Nothing is billed until the trial has settled the course and time, and the pricing page covers holidays, missed classes and changing between group and private lessons.

## Echuca AI agents questions

### What is tool routing in an AI agent?

Tool routing is the step where an agent decides which of its tools should answer a question. A wrong choice gives a fluent but wrong answer, so routing has to be tested.

### How often do the Victorian and NSW calendars disagree?

From 12 April to 20 December 2027 they disagree on 32 of 181 weekdays, or 17.7%, by our count from the published term dates.

### How many people live in Echuca - Moama?

The 2021 Census counted 22,568 people in the Echuca - Moama urban area, with a median age of 46.

### How many town bus stops are in New South Wales?

Of 93 distinct stops on the five Echuca town routes, 31 fall in New South Wales, almost all of them on route 3 to Moama.

### Can Moama learners join?

Yes. Lessons are online, so learners in Moama and anywhere in New South Wales join exactly as Echuca learners do.

### What is vibe coding?

Vibe coding is building software by describing it to an AI in plain words. We pair it with reading and testing the code, so the learner always understands what was built.

### Can primary school children start?

Yes. Children from six begin with Scratch and block coding; the agent project is for teenagers and adults.

### Is there a Modern Age Coders centre in Echuca?

No. We have no premises in Australia and claim none. Every class is live online; learners need a computer and a steady connection, and our listed phone number is in India.

### What do Echuca classes cost?

The first class is free. After that a group place is USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, or USD 150 a month one-to-one. Nothing is charged before the plan is agreed.

### How big are the groups?

Fifteen to twenty learners, grouped by level and goals rather than age or town. When no group time suits, one-to-one lessons are offered.

## More for northern Victoria

Start with the [Victorian state guide](/coding-and-ai-classes-in-victoria), or look south to [AI and programming classes in Bendigo](/ai-and-programming-classes-in-bendigo) and east to [online coding in Shepparton](/online-coding-and-python-classes-in-shepparton). Senior students choosing subjects can read [VCE Software Development help](/vce-applied-computing-software-development-help).

## Contact

Book the free class on [https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-echuca](https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-echuca#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
