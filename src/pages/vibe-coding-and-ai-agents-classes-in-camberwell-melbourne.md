---
title: "Vibe Coding and AI Agents Classes in Camberwell, Melbourne"
description: "Live online vibe coding and AI agents classes for Camberwell teenagers and adults, plus coding for children, with projects that test what an agent gets wrong."
canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-camberwell-melbourne
source: src/pages/vibe-coding-and-ai-agents-classes-in-camberwell-melbourne.html
---
> Learners build small programs and agents with an AI, then write tests that catch the agent when it guesses. Camberwell suits it: in the 2021 Census, 52.2% of adults held a bachelor degree or higher, against 29.2% across Victoria, and 7.0% of the 21,965 residents were aged 15 to 19.

[Home](/) / [Australia](/coding-classes-in-australia) / [Victoria](/coding-and-ai-classes-in-victoria) / [Melbourne](/vibe-coding-and-ai-agents-classes-in-melbourne) / Camberwell

Camberwell, City of Boroondara, Melbourne, Victoria / Live online

# Vibe coding and AI agents classes in Camberwell

**What should Camberwell learners expect from vibe coding and AI agents classes?** Learners build small programs and agents with an AI, then write tests that catch the agent when it guesses. Camberwell suits it: in the 2021 Census, 52.2% of adults held a bachelor degree or higher, against 29.2% across Victoria, and 7.0% of the 21,965 residents were aged 15 to 19.

Ask an assistant how many people used Camberwell station "last financial year" and it has to know three things: today's date, that Australian financial years end on 30 June, and which years have actually been published. Get any one of them wrong and it either answers about the wrong year or quietly answers nothing at all.

Facts last verified 10 October 2026. Teaching is online; no Camberwell branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 15 to 20 students per group.

## Courses for agents that check their facts

These courses all spend time on the testing habit at the heart of the dates project. The free first class decides the starting point, and Copilot Studio is taught one to one only.

- [Codex & Claude Code for Teens](/courses/codex-and-claude-code-ai-coding-agents-course-for-teens) (Ages 13 to 17): Working with coding agents, then reviewing every change they propose.
- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Describe a program, let the AI draft it, then test and repair it.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (University and adult): Agents for real work, with tests that pin down what correct means.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (University and adult): Python automation with dates, files and checks at each step.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Degrees, teenagers and five stations

Figures for the Camberwell suburb (ABS code SAL20453, recorded as Camberwell (Vic.)) from the 2021 Census QuickStats, with Victoria alongside.

**Camberwell suburb, 2021 Census headline counts**

| Headline | Camberwell |
|---|---|
| Residents | 21,965 |
| Median age | 43 |
| Families | 5,875 |
| Private dwellings | 9,041 |
| Average people per household | 2.6 |

**Camberwell compared with Victoria**

| Measure | Camberwell | Victoria |
|---|---|---|
| Adults with a bachelor degree or higher | 52.2% (9,658) | 29.2% |
| Workers employed as professionals | 39.9% (4,399) | 25.0% |
| Residents aged 15 to 19 | 7.0% (1,539) | 5.6% |
| Workers who drove to work | 32.6% (3,588) | 49.9% |
| Semi-detached, row or terrace houses and townhouses | 21.7% (1,713) | 13.9% |

### Five stations

The suburb holds five metropolitan stations: Camberwell, East Camberwell, Riversdale, Willison and Hartwell.

### Lockdown day

The Census was taken in the August 2021 lockdown, when 4,840 employed residents, 43.9%, worked from home.

### Area

The bureau puts the suburb at 7.59 square kilometres, inside the City of Boroondara.

QuickStats perturbs small counts to protect privacy, so the parts of a table need not match its total. We give each figure exactly as published and do not add rows together.

## What does an agent mean by last financial year?

We wrote 12 everyday ways of naming a year, from "FY23" to "the year to June 2024", and two small resolvers that turn each phrase into one of the seven published station files for Camberwell. Today, for the test, is 10 October 2026.

**Camberwell station entries by financial year (Department of Transport and Planning, rounded to 50)**

| Financial year | Entries |
|---|---|
| FY18-19 | 1,969,600 |
| FY19-20 | 1,496,350 |
| FY20-21 | 641,150 |
| FY21-22 | 789,300 |
| FY22-23 | 1,631,400 |
| FY23-24 | 1,241,500 |
| FY24-25 | 1,260,400 |

**Two resolvers on 12 phrases (our own scripted test)**

| Resolver | Right | Wrong year | No answer, no warning |
|---|---|---|---|
| Calendar arithmetic from today | 2 | 5 | 5 |
| Grounded in financial years and the newest file | 12 | 0 | 0 |

### Close but wrong

For "the year to June 2024" the naive resolver read FY24-25 and reported 1,260,400. The right file, FY23-24, says 1,241,500: only 1.5% apart, which is why nobody would notice.

### Silent gaps

Asked about "last financial year", the naive resolver looked for FY25-26, found no file and returned nothing. The grounded one said FY25-26 is not published yet and the newest year is FY24-25.

### Asking back

For "last year" and "in 2024" the grounded resolver asked which financial year was meant, because each calendar year straddles two of them.

### Where the simple version is fine

When the question already names the year in the file's own style, "2023-24", both resolvers answered correctly, and the naive one also got "two financial years ago" right. Plain lookup is enough when the wording matches the file; grounding earns its keep the moment people speak naturally.

The 12 phrases, both resolvers and the scores are ours. They describe our own scripts, not how any particular assistant behaves. Station figures are the publisher's estimates, quoted unchanged.

## Three facts an agent must hold before it touches a date

Grounding means tying a vague phrase to something the program actually knows. For dates, that is a short list.

**What the grounded resolver checks**

| Fact | Value in our test | Mistake it prevents |
|---|---|---|
| Today | 10 October 2026, in FY 2026-27 | Treating the newest file as this year |
| How years are labelled | Australian financial years end 30 June; FY23 means the year to June 2023 | Reading FY23 as 2023-24 |
| What exists | Files from FY18-19 to FY24-25 | Silently returning nothing for an unpublished year |

The fix is small: hand the agent a tool that lists the available years and a rule for each phrase, and make it say so when a year is missing rather than answering about a different one. Most of the work is writing the 12 test phrases, because that is where the hidden assumptions show up.

### Younger learners

Work out together which school term "next holidays" means on different days of the year.

### Secondary students

Write both resolvers in Python, turn the 12 phrases into tests and fix each failure.

### Adults

List the date phrases colleagues actually use in reports and test an assistant against them.

## Stations, schools and the 2027 year

More from the state station and school files.

### Smaller stations

In FY24-25 East Camberwell logged 185,950 entries, Riversdale 144,000, Hartwell 138,050 and Willison 73,100.

### Schools

The 2025 school file puts five open schools inside the suburb, three government and two Catholic, among them Camberwell High School and Hartwell Primary School.

### Back to school

Victorian government school students begin the 2027 year on Thursday 28 January; Term 3 runs from Monday 12 July to Friday 17 September.

**Which Camberwell** This page is about Camberwell in Melbourne's inner east. London has a Camberwell too, in the borough of Southwark, with its own figures.

## From calendars to grounded agents

The ages are approximate; the free first class finds each learner's level.

- **Ages 6 to 10: Scratch and sequences** Programs that count days and follow rules, built from blocks. [Scratch Coding for Kids](/courses/scratch-programming-complete-course), [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)
- **Ages 10 to 14: Python and AI basics** Dates, lists and the first careful questions to an AI. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [AI Literacy for Kids (Ages 8 to 14)](/courses/ai-literacy-for-kids-course)
- **Ages 14 to 18: Agents with tests** Coding agents, prompts and test suites that hold them to account. [Codex & Claude Code for Teens](/courses/codex-and-claude-code-ai-coding-agents-course-for-teens), [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course)
- **University and adult: Agents at work** Automation that states its assumptions and reports what is missing. [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals), [Generative AI Course](/courses/complete-generative-ai-masterclass-college)

## If an agent can look up the figure, why should a Camberwell learner care how it reads a date?

Because the agent will always produce a number, and only someone who has tested its reading of dates can say whether it is the number for the year that was asked about.

Our naive resolver never crashed. It answered five questions about the wrong year with figures that looked perfectly sensible, and five more with nothing, without saying anything was missing. A report built on it would read smoothly and be wrong.

A learner who has written the 12 phrases, watched FY23 turn into the wrong year and added the rule that fixed it carries that habit into every agent they build: ask what the program assumes about today, and test it.

The Camberwell learner who grounds an agent in the calendar is the one whose answers hold up next year too. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Lessons for Camberwell, held online

Every class is live on screen, so learners join from home without a trip anywhere.

- **Join and build** Click the lesson link, share the screen and write code alongside the teacher.
- **Victorian calendar** Courses run in the Victorian school terms and break for the state holidays.
- **A real trial** The free class is an ordinary lesson; afterwards we recommend a course and a weekly time.
- **Group size** Fifteen to twenty learners per group, matched by level rather than suburb.
- **Two a week** Two scheduled lessons each week, about eight a month, with any breaks arranged ahead.
- **Teachers in India** Teachers work from India: a 5pm Camberwell lesson in summer is 11:30am India time, then 12:30pm after Melbourne's clocks go back.

**Daylight saving dates** Melbourne clocks went forward on Sunday 4 October 2026 and go back on Sunday 4 April 2027, while India stays on one time. Lesson times are always given in Melbourne time.

## Camberwell class fees

Three amounts, stated up front.

- First class: USD 0. The first lesson costs nothing and finishes with a frank recommendation.
- Group tuition: USD 100 a month. A month of group lessons, normally eight, in a group of fifteen to twenty at one level.
- Private tuition: USD 150 a month. Roughly eight lessons a month with one teacher and one learner.

Outside India we charge in US dollars, so Camberwell families pay the same as everyone else abroad. Billing begins only after the trial has fixed the course and time; holidays, absences and format changes are covered on the pricing page.

## Camberwell vibe coding and AI agents questions

### How many people live in Camberwell?

The 2021 Census QuickStats for the Camberwell suburb record 21,965 residents and 5,875 families, with a median age of 43.

### What does grounding mean for an AI agent?

Tying what the agent says to facts it can check, such as today's date or the list of files that exist, instead of letting it fill gaps with guesses.

### What does FY23 mean in Australia?

The financial year ending 30 June 2023, so July 2022 to June 2023. Our naive resolver read it as 2023-24, one of its five wrong-year answers.

### What did the Camberwell dates project find?

On our 12 phrases, a resolver doing plain calendar arithmetic got 2 right; one that knew financial years, today's date and the published files got all 12 right, including two where it asked a question back.

### What is vibe coding?

Describing a program in ordinary words, letting an AI write a first draft, then testing and fixing it. In our classes the testing takes most of the time.

### Is Copilot Studio included in group classes?

No. Microsoft Copilot Studio is taught only in private lessons; group classes build agents in Python.

### Do you have a Camberwell classroom?

No. Lessons are only live online, there is no office in Australia, and the phone number we show is Indian.

### What do classes cost for Camberwell learners?

The first lesson is free. Group classes then cost USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, or USD 150 a month one to one. Course, format and time are agreed before payment.

### How many learners share a group?

Fifteen to twenty, grouped by level, pace and goals; one-to-one lessons are there when no group time works.

### Can adults join agents classes?

Yes. Adults learn in adult groups or privately, often bringing a reporting task they would like an agent to handle reliably.

## More for Camberwell learners

For younger children, see [coding classes for kids in Melbourne](/coding-classes-for-kids-melbourne). The [Melbourne page](/vibe-coding-and-ai-agents-classes-in-melbourne) covers the whole city, and the [Victoria guide](/coding-and-ai-classes-in-victoria) covers the state.

## Contact

Book the free class on [https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-camberwell-melbourne](https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-camberwell-melbourne#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
