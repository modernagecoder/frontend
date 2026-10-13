---
title: "Vibe Coding and AI Agents Classes in Glenelg, Adelaide"
description: "Live online vibe coding and AI agent classes for Glenelg teenagers and adults, with Scratch and Python for children from six, taught in small groups or one to one."
canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-glenelg-adelaide
source: src/pages/vibe-coding-and-ai-agents-classes-in-glenelg-adelaide.html
---
> By checking that each test compares the code against an independent answer, not against the same calculation run twice. Our live online classes teach vibe coding and agent work with that check built in. Glenelg had 3,440 residents at the 2021 Census.

[Home](/) / [Australia](/coding-classes-in-australia) / [South Australia](/coding-and-ai-classes-in-south-australia) / [Adelaide](/ai-and-programming-classes-in-adelaide) / Glenelg

Glenelg, City of Holdfast Bay, South Australia / Live online

# Vibe coding and AI agent classes in Glenelg

**How can Glenelg learners tell whether an AI agent's tests mean anything?** By checking that each test compares the code against an independent answer, not against the same calculation run twice. Our live online classes teach vibe coding and agent work with that check built in. Glenelg had 3,440 residents at the 2021 Census.

Trams reach Moseley Square on every day of the week in the timetable, so a count of Wednesday tram visits at Glenelg should not be zero. Our scripted agent's code said zero, and the test it wrote for that code passed. The test was checking the code against itself.

Facts last verified 13 October 2026. Teaching is online; no Glenelg branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 15 to 20 students per group.

## Courses for testing what agents build

This project needs Python, a little testing knowledge and a sceptical eye for green ticks. These courses teach all three; a free lesson finds the fit.

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): AI-assisted building, with tests the learner writes and understands.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Adults 18 and over): Coding agents on real projects, with independent checks on their work.
- [Python for Teens](/courses/python-complete-masterclass-teens) (Ages 13 to 17): Python types, files and the testing basics agents rely on.
- [Generative AI Course](/courses/complete-generative-ai-masterclass-college) (University and adult): Generative AI and agents, including how to evaluate their output.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## A small seaside suburb of apartments

Census 2021 figures for the suburb of Glenelg (ABS code SAL40505), set against the whole of South Australia.

**Glenelg in 2021**

| Measure | Glenelg |
|---|---|
| Residents | 3,440 |
| Median age | 55 |
| Families | 841 |
| Private dwellings | 2,299 |
| People per household | 1.8 |

**Glenelg beside the state**

| Indicator | Glenelg | South Australia |
|---|---|---|
| Flats or apartments | 61.1% (1,026) | 6.8% |
| Separate houses | 15.8% (265) | 78.0% |
| Employed residents working from home | 16.5% (263) | 9.6% |
| Adults with a bachelor degree or higher | 33.4% (1,069) | 22.7% |

### An older population

The median age was 55, and 188 residents were 85 or over.

### Fewer children

Children aged 5 to 9 numbered 83, and those aged 10 to 14 numbered 75.

### Under a square kilometre

The ABS outline of Glenelg encloses just under 1 square kilometre by the beach.

Small Census counts are randomly nudged by the bureau for privacy. That is why we show them exactly as released and do not add any of them up.

## A test that could never fail

The request: count the scheduled tram visits at stop records inside Glenelg on Wednesday 21 October 2026. Tram routes carry route_type 0 in the timetable. The scripted agent wrote a filter, then a test to prove it worked.

**What each version reported (our run)**

| Code or test | Result |
|---|---|
| Agent filter: route_type == 0 | 0 tram visits |
| Agent test: expected = count_trams(data); assert count_trams(data) == expected | Passed |
| Independent test: visits on trips of the route named GLNELG | Expects 474, so it fails |
| Fixed filter: route_type == '0' | 474 tram visits |

### The bug

csv reads every field as text. The column holds "0", the code compared with the number 0, and text never equals a number in Python, so nothing matched.

### The tautology

The agent built its expected value by calling the same function it was testing. Any bug appears on both sides of the comparison, so the test always passes.

### The independent check

Counting by route name instead of route type is a different path to the same truth. It disagreed, which is exactly what a useful test does.

### Where the 474 visits happen

The tram stop records inside Glenelg are Jetty Road (two records) and Moseley Square. Their 474 Wednesday visits sit alongside 1,418 bus visits and 34 school bus visits across the suburb's 20 stop records.

The timetable is Adelaide Metro open data. Glenelg membership is our point-in-boundary check and every count is ours. The agent and its test are scripts we wrote to show the pattern, not output from any commercial AI model.

## Spotting a tautological test

Agents write tests quickly, and many are fine. A short review catches the ones that cannot fail.

**Questions to ask of any agent-written test**

| Question | Warning sign | Glenelg case |
|---|---|---|
| Where does the expected value come from? | From the code under test | count_trams() on both sides |
| Could this test ever fail? | Hard to imagine how | Passes even at 0 |
| Is there a second route to the answer? | None used | Route name GLNELG gives 474 |
| Was the test seen failing first? | Never | Break the code and check |

### Primary learners

Check a sum on a calculator and by counting on fingers: two methods, one answer.

### Secondary learners

Let an AI write a function and its test, then deliberately break the function and see whether the test notices.

### Adults

Ask that every agent-written test names where its expected value comes from before merging the change.

The quickest defence is to make a test fail on purpose before trusting it. A test that stays green when the code is wrong is not testing anything.

## Tram, bus interchange and late services

Local details from the timetable for Wednesday 21 October 2026.

### Visits and routes

Glenelg's 20 stop records had 1,926 scheduled visits on 26 routes, by our count.

### Interchange

Zone B at Glenelg Interchange was the busiest stop record, with 267 visits; a Jetty Road stop had 244.

### After midnight

The last scheduled departure was written as 25:19:00, the timetable's way of saying 1:19am on the same service day.

**Glenelg proper** This page covers the suburb of Glenelg in the City of Holdfast Bay. Glenelg North, Glenelg East and Glenelg South are separate ABS suburbs with their own figures, not included here.

## From finger counting to agent review

Treat the ages loosely; a learner's first lesson shows where to begin.

- **Ages 6 to 10: Scratch and play** Games built and checked block by block. [Scratch Coding for Kids](/courses/scratch-programming-complete-course), [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)
- **Ages 10 to 14: Python and AI basics** First code and a sensible view of AI. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [AI Literacy for Kids (Ages 8 to 14)](/courses/ai-literacy-for-kids-course)
- **Ages 14 to 18: Vibe coding** Building with AI, then testing it independently. [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course), [AI Tools Course for Teens (13+)](/courses/teens-ai-tools-mastery-course)
- **Adults 18 and over: Coding agents** Agents for real work, reviewed like any colleague's code. [Generative AI Course](/courses/complete-generative-ai-masterclass-college), [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)

## If the agent writes the tests, who tests the tests?

The learner who knows what a meaningful test looks like. Green ticks are easy to produce.

Vibe coding often ends with "and add tests", and agents oblige. Some of those tests are excellent. Some, like the Glenelg one, quietly measure the code against itself and would pass whatever the code returned.

Learners who have watched a passing test sit beside a zero tram count stop trusting green ticks on sight. They ask where each expected value came from, which is the question that keeps agent-built software honest.

In Glenelg, the learner who tests the tests ships code that counts the trams. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Glenelg lessons online

Each lesson is a live video class; there is no venue to visit.

- **Shared screen** Prompts, code and test results are all read together.
- **Term-time rhythm** Classes follow South Australian school terms with holiday breaks.
- **Opening class free** A real first lesson, then honest advice on next steps.
- **Groups** Fifteen to twenty learners at a matching level, or private lessons.
- **Twice a week** Regular slots, roughly eight lessons a month.
- **India time** Our teachers are in India: a 6pm Glenelg class is 1pm India time until early April, then 2pm.

**Adelaide summer time** South Australia uses daylight saving from the first Sunday in October to the first Sunday in April (IANA time zone database), so the gap to India is five hours in summer and four otherwise.

## Glenelg class fees

The same three prices for all.

- First class: USD 0. Your first lesson is free and comes with a written plan.
- Group tuition: USD 100 a month. Group month: about eight lessons with fifteen to twenty learners.
- Private tuition: USD 150 a month. Private month: about eight lessons with one teacher.

Glenelg learners pay in US dollars after the trial, once course and timing are agreed. The pricing page details holidays and absences.

## Glenelg vibe coding and agent questions

### How many people live in Glenelg?

The 2021 Census QuickStats count 3,440 residents in the suburb of Glenelg, with 2,299 private dwellings and a median age of 55.

### What is a tautological test?

A test whose expected result is produced by the very code being tested, so it passes whether the code is right or wrong. It gives false confidence.

### Why did "0" not equal 0 in the Glenelg code?

The CSV reader returns text, so the route type was the string "0". Python never treats a string as equal to the integer 0, so the filter matched nothing.

### How many tram visits does Glenelg have?

In the Adelaide Metro timetable for Wednesday 21 October 2026, the tram stop records inside Glenelg had 474 scheduled visits, by our count.

### What is vibe coding?

Building software by describing it to an AI tool and refining the result in conversation, while still reading and testing what comes back.

### Do teenagers use Claude in classes?

No. Claude-based courses are for adults aged 18 and above; teenagers learn with other AI tools.

### Is there a classroom in Glenelg?

No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.

### What do lessons cost for Glenelg learners?

The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.

### Who is in each group?

Fifteen to twenty learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.

### Do Glenelg groups learn Copilot Studio?

No. Copilot Studio is kept for one-to-one lessons; groups build agents in Python.

## More for Glenelg learners

The [Adelaide page](/ai-and-programming-classes-in-adelaide) covers the whole city and [coding for Adelaide kids](/coding-classes-for-kids-adelaide) suits children. Down the south-east, [Mount Gambier](/vibe-coding-and-ai-agents-classes-in-mount-gambier) has its own agents page, and [the South Australia guide](/coding-and-ai-classes-in-south-australia) covers the state.

## Contact

Book the free class on [https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-glenelg-adelaide](https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-glenelg-adelaide#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
