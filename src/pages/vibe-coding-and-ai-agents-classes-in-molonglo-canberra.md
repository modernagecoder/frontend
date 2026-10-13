---
title: "Vibe Coding and AI Agents Classes in Molonglo, Canberra"
description: "Live online vibe coding and AI agent classes for Molonglo Valley, ages 6 to adult, with an agent project measuring smart and wasteful ways to query ACT open data."
canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-molonglo-canberra
source: src/pages/vibe-coding-and-ai-agents-classes-in-molonglo-canberra.html
---
> That an agent should push work to the tool built for it. Asked how many public trees each Molonglo suburb has, an agent can download every record and count, or ask the ACT data service to count. We measured both: 22 calls and 17.7 megabytes against one call and 192 bytes, with identical answers.

[Home](/) / [Australia](/coding-classes-in-australia) / [Australian Capital Territory](/coding-and-ai-classes-in-australian-capital-territory) / [Canberra](/vibe-coding-and-ai-agents-classes-in-canberra) / Molonglo

Molonglo Valley district, west Canberra, ACT / Live online

# Vibe coding and AI agents classes in Molonglo

**What does the Molonglo agent project teach?** That an agent should push work to the tool built for it. Asked how many public trees each Molonglo suburb has, an agent can download every record and count, or ask the ACT data service to count. We measured both: 22 calls and 17.7 megabytes against one call and 192 bytes, with identical answers.

Molonglo Valley is a young district of five suburbs west of the city, from Wright and Coombs to Denman Prospect and Whitlam. Its population is rising fast and its public records grow with every new street. That makes it a good place to teach an AI agent to ask data services clever questions instead of bulk-downloading.

Facts last verified 13 October 2026. Teaching is online; no Molonglo branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Agents, APIs and Python

Courses that build the skills behind the query project. The trial lesson sets the starting point.

- [Generative AI Course](/courses/complete-generative-ai-masterclass-college) (University and adult): Agents that call APIs and check what comes back.
- [Codex & Claude Code for Teens](/courses/codex-and-claude-code-ai-coding-agents-course-for-teens) (Ages 13 to 17): Coding agents for teenagers, with every tool call reviewed.
- [Python for Teens](/courses/python-complete-masterclass-teens) (Ages 13 to 17): Requests, JSON and simple counting in Python.
- [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev) (Ages 6 to 12): First steps building with AI help, in blocks.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## A new district, growing quickly

Figures for the Molonglo statistical area (ABS SA3 80110) from the 2021 Census QuickStats, read on 13 October 2026, with the latest two ABS estimates.

**Molonglo counts**

| Measure | Value |
|---|---|
| Residents, 2021 Census | 11,435 |
| Estimated residents, 2024 | 16,180 |
| Estimated residents, 2025 | 18,064 |
| Median age | 31 |
| Private dwellings | 4,601 |
| Bedrooms per dwelling | 3.0 |

**Molonglo shares compared with the ACT**

| Share | Molonglo | ACT |
|---|---|---|
| Flat or apartment | 35.2% (1,471) | 19.4% |
| Bachelor degree or higher | 55.5% (4,866) | 42.9% |
| Residents aged 5 to 9 | 8.9% (1,023) | 6.4% |
| Professionals among workers | 39.0% (2,726) | 31.4% |

### Growth

Between the ABS estimates for 2024 and 2025, Molonglo grew by 1,884 residents, about 12% in one year, by far the fastest of the districts on our pages.

### Mixed housing

Separate houses made up only 40.8% of dwellings in 2021, with apartments and townhouses taking most of the rest.

### Young families

Couples with children were 51.2% of families, and almost one resident in eleven was aged 5 to 9.

Because the district has grown so fast, the 2021 Census already describes a smaller place. It was also held during the pandemic. ABS shares are rounded and small counts adjusted, so we copy the published figures and compare only like with like.

## Let the data service do the counting

An agent is asked: how many public tree records does each Molonglo suburb have, and how many are native? It has one tool, the ACT open data API for the tree asset list. A naive agent downloads matching records page by page and counts them itself. A better agent sends a single query that groups and counts on the server. We ran both on 13 October 2026.

**Three ways to answer the same question (our measurement)**

| Approach | Calls | Data moved | Time | Answer |
|---|---|---|---|---|
| Download every record, 1,000 per page | 22 | 17,689,823 bytes | 107.6 s | 21,041 records |
| One call, no paging | 1 | 838,642 bytes | not timed | 1,000 records, wrong |
| Group and count on the server | 1 | 192 bytes | 1.4 s | 21,041 records |

### Same totals

Both complete methods agree: Denman Prospect 6,938 records, Coombs 5,018, Whitlam 4,842, Wright 4,058 and the suburb of Molonglo 185.

### Native and exotic

One more grouped call of 847 bytes splits each suburb by label. Denman Prospect has 4,800 exotic records against 1,511 native.

### Why it matters

Agents pay for every byte they read, in time, money and context space. Pushing the aggregation down cut the data moved by a factor of about 92,000.

### The quiet wrong answer

The middle row is the dangerous one. The API returns 1,000 records by default, and an agent that counts them reports 1,000 trees for the whole district with total confidence. Pushing the count to the server avoids the trap because the server counts everything that matches.

Records come from the ACTGOV Tree Assets dataset on data.act.gov.au, licensed CC BY 4.0, queried through its public API. Calls, bytes and times are our own measurements on one connection and will differ elsewhere; the counts themselves come from the data.

## Describe the tool so the agent uses it well

The fix is mostly in the tool description: tell the agent that the API can filter, group and count, and show one example query.

**Lesson steps**

| Step | Learner task |
|---|---|
| 1 | Write a tool that fetches tree records for a list of suburbs, page by page. |
| 2 | Measure calls, bytes and seconds for the Molonglo question. |
| 3 | Add a second tool that sends a grouped count query, and measure again. |
| 4 | Give an agent both tools and check which one it chooses for five questions. |

In step 4 learners discover that the description of a tool shapes the agent's choices as much as the code does. A count question should go to the grouped tool, while a request to list the native trees on one street still needs records. Writing those two cases into the descriptions, and testing them, is the craft.

### Younger learners

Ask a librarian for "how many dinosaur books" instead of carrying every book to the table to count.

### Teenagers

Build both tools in Python and log every call the agent makes.

### Adults

Push filtering and aggregation into databases and APIs before data reach an agent at work.

## Sculptures, shelters and Monday bins

Local details from ACT Government open data.

### Sculpture valley

Of the 49 artworks recorded in Molonglo suburbs, 45 are sculptures.

### Shelters

The ACT shelter list places 85 shelters in the district, more than in Woden, Weston Creek or North Canberra.

### Bin day

All five Molonglo suburbs in the ACT NOWaste list collect garbage on a Monday.

**District used** Molonglo is the ABS statistical area of about 27.2 square kilometres; our test assigns five named suburbs to it. In 2027, ACT Term 3 runs from Tuesday 20 July to Friday 24 September.

## From library questions to API queries

Ages give a starting point; the trial decides.

- **Ages 6 to 10: Ask, then build** Scratch and AI-assisted games built step by step. [Scratch Coding for Kids](/courses/scratch-programming-complete-course), [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)
- **Ages 10 to 14: Python and data** Lists, counts and first web requests. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [AI Literacy for Kids (Ages 8 to 14)](/courses/ai-literacy-for-kids-course)
- **Ages 14 to 18: Agents** Tools, APIs and agents that justify their calls. [Codex & Claude Code for Teens](/courses/codex-and-claude-code-ai-coding-agents-course-for-teens), [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course)
- **Adults 18 and over: Agents at work** Efficient, auditable agents for real systems. [Generative AI Course](/courses/complete-generative-ai-masterclass-college), [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)

## Will agents learn this on their own?

Only if their tools are described well, and someone checks.

Left alone, many agents fetch first and think later, because downloading feels safe. On a small table that costs nothing; on 21,041 records it costs 17.7 megabytes, and without paging it silently gives the wrong total.

Molonglo learners measure the cost of each plan and design tools that make the efficient plan the obvious one. That is engineering, not prompting.

Our agent classes measure what agents do, not just what they say. The longer argument is in [why programming still repays the effort](/blog/is-coding-worth-learning-2026).

## How Molonglo lessons run

All lessons are live online, so families join from home anywhere in the valley.

- **Live teaching** A teacher leads and checks each learner's work in real time.
- **ACT calendar** Lessons pause in ACT school holidays.
- **Free trial** Start with one free lesson and a plan.
- **Group or solo** Level groups of five to ten, or private lessons.
- **Rhythm** Two lessons a week, about eight a month.
- **India time** From April to October a 6pm Molonglo lesson is 1:30pm in India.

**Time zone** Molonglo keeps Canberra time, which the IANA database links to Sydney: daylight saving from the first Sunday in October to the first Sunday in April.

## Molonglo fees

The same fees apply to every learner.

- First class: USD 0. The opening lesson is free and ends with a plan.
- Group tuition: USD 100 a month. Group classes: around eight a month, five to ten learners.
- Private tuition: USD 150 a month. One-to-one: around eight a month with a single teacher.

Fees are charged in US dollars once the trial has fixed a course and weekly time. The pricing page sets out holiday and missed-lesson rules.

## Molonglo agents and vibe coding questions

### How many people live in Molonglo?

The 2021 Census counted 11,435 people. The ABS estimates 16,180 for 2024 and 18,064 for 2025.

### What is push-down aggregation?

Sending a counting or summing query to the database or API that holds the data, so only the small answer travels back.

### Why did one call return only 1,000 records?

The ACT open data API returns 1,000 rows unless asked for more, so an agent that does not page or count on the server undercounts.

### Does a smarter model fix this?

Not by itself. The tools and their descriptions decide what an agent can do efficiently.

### Can children learn about agents?

Younger learners start with block coding and AI-assisted projects; building agents usually starts in the teens.

### Which suburbs are in Molonglo?

Our test places five: Coombs, Denman Prospect, Molonglo, Whitlam and Wright.

### Do you have a centre in Molonglo?

No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.

### What do Molonglo classes cost?

The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of five to ten, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.

### How are groups organised?

By level and pace, five to ten learners each, not by age or suburb. One-to-one lessons are available when no group time fits.

### Can adults build agents with you?

Yes. Adults learn in adult groups or one to one, often wiring agents to their own systems.

## Further reading

Molonglo families can explore the [Canberra agents page](/vibe-coding-and-ai-agents-classes-in-canberra), the [ACT guide](/coding-and-ai-classes-in-australian-capital-territory) and [thinking, not just using AI tools](/learn-to-think-not-just-use-ai-tools-australia).

## Contact

Book the free class on [https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-molonglo-canberra](https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-molonglo-canberra#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
