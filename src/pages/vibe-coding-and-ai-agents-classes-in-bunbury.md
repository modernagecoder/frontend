---
title: "Vibe Coding and AI Agents Classes in Bunbury | Live Online"
description: "Live online vibe coding and AI agents classes for Bunbury teenagers and adults: build agents, test their tools and understand the code. First lesson free."
canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-bunbury
source: src/pages/vibe-coding-and-ai-agents-classes-in-bunbury.html
---
> Live online vibe coding and AI agents classes for Bunbury teenagers and adults: build agents, test their tools and understand the code. First lesson free.

Skip to contentCourse picks for Bunbury

## Courses for Bunbury's agent builders

All four connect to the suburb-matching project. The free lesson chooses the right one, and booking requires no card.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Ages 13 to 17Vibe Coding for TeensPython and web projects built with an AI assistant, then read, tested and repaired line by line.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python for Teens course thumbnail](/images/python-teens.webp)Ages 13 to 17Python for TeensStrings, functions and tests, the Python that every agent tool is made from.See the syllabus](/courses/python-complete-masterclass-teens)[![Generative AI Course course thumbnail](/images/generative-ai-college.webp)University and adultGenerative AI CourseLanguage models, tool calling and agents, designed and measured rather than taken on trust.See the syllabus](/courses/complete-generative-ai-masterclass-college)[![Vibe Coding for College course thumbnail](/images/vibe-coding-college.webp)AdultsVibe Coding for CollegeFull applications built alongside AI, with the data structures and testing that keep them correct.See the syllabus](/courses/vibe-coding-for-college-fullstack-ai-dsa-career-course)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Bunbury in the 2021 Census

## The South West's city of houses and trades

The bureau's QuickStats for the Bunbury Significant Urban Area, set against Western Australia and Australia.

| Measure | Bunbury | Western Australia | Australia |
| --- | --- | --- | --- |
| Population | 76,452 | no figure here | no figure here |
| Median age | 39 | no figure here | no figure here |
| Families | 20,598 | no figure here | no figure here |
| Technicians and trades workers, share of employed | 6,573 (18.4%) | 15.3% | 12.9% |
| Separate houses, share of occupied homes | 24,294 (85.5%) | 79.7% | 72.3% |
| Teenagers aged 15 to 19 | 4,749 (6.2%) | 5.8% | 5.7% |

### Trades and technical work

6,573 employed residents worked as technicians or trades workers, a larger share than in Western Australia overall.

### Homes

The urban area had 32,807 private dwellings and 2.5 people per household; only 610 occupied homes were flats or apartments.

### Degrees

A bachelor degree or above was held by 8,911 residents aged 15 or older, 14.5%, while 5,826 of those in work were classed as professionals.

Census counts are nudged slightly at random by the bureau to protect privacy, so the parts of a table do not always add up to its total. We use each published figure as it stands and never produce our own totals by summing parts.

Signature project

## How should an agent match a misspelt suburb?

A place-name lookup tool for an AI agent, built on the Department of Education's open schools list and scored with Jaro-Winkler similarity.

| Item | Figure |
| --- | --- |
| Schools in the statewide list | 1,152 |
| Schools within 25 km of central Bunbury | 44 |
| Distinct suburb names among them | 16 |
| Deliberate typos generated: swapped, dropped and doubled letters | 192 |
| Suburb names elsewhere in the list, used as impostors | 483 |

| Accept a match scoring at least | Typos correctly accepted | Impostors wrongly accepted |
| --- | --- | --- |
| 0.85 | 192 of 192 | 6 of 483 |
| 0.90 | 191 of 192 | 0 of 483 |
| 0.95 | 182 of 192 | 0 of 483 |

### 1. Score

Jaro-Winkler compares two words by their shared letters, how far those letters moved and whether the first few match. Identical names score 1.

### 2. Rank

For each query, find the closest of the 16 local suburbs. On all 192 typos the closest was the right one, for Jaro-Winkler and for edit distance alike.

### 3. Decide

Ranking always returns something. The real design question is the cut-off below which the tool says "no match" instead.

### A gap of one ten-thousandth

The weakest genuine typo, BUUREKUP for BUREKUP, scored 0.8905. The strongest impostor, SOUTH YUNDERUP from elsewhere in the state, scored 0.89 against SOUTH BUNBURY because the two share a long opening. There is almost no clear water between them. A threshold of 0.90 rejects every impostor and loses one real typo; 0.85 keeps every typo and admits six strangers. Choosing between those is a product decision, and an agent builder has to make it deliberately.

All scores are ours: Jaro-Winkler written from its definition, checked against the standard textbook examples, and run on the department's list as downloaded on 7 October 2026 with typos generated by a fixed random seed. A query for BUSSELTON still returns BUREKUP as its closest local name, at 0.67, which is exactly why a threshold is needed. We use school locations only to define the area; no school information beyond suburb names appears in the project.

Designing the tool

## What a trustworthy lookup tool returns

An agent cannot see inside its tools. Everything it needs to behave well has to come back in the result.

| Situation | Example | What the tool should return |
| --- | --- | --- |
| Exact name | EATON | The match, with a score of 1 |
| Small typo | BUNBRY | BUNBURY, scored 0.971, flagged as corrected |
| Missing letter | AUSTRLIND | AUSTRALIND, scored 0.98, flagged as corrected |
| Unknown town | PERTH | No match: the closest, EATON, scores only 0.60 |
| Near neighbours | SOUTH BUNBURY and EAST BUNBURY | Kept apart: they score 0.7675 against each other |

Vibe coding gets the first version of this tool written in moments: describe it, and an AI produces a fuzzy matcher. Our learners then do the engineering. They build the typo set, find the impostors, plot where the scores of each fall and pick a threshold with their eyes open. The tool returns the score and a "corrected" flag, so the agent can tell the user it assumed AUSTRALIND rather than silently changing the question.

### Teenagers

Write Jaro-Winkler from its definition in Python, test it on famous examples, then on Bunbury suburb names.

### University students

Compare similarity measures, build evaluation sets with impostors and choose thresholds with precision and recall.

### Adults

Clean messy names in work data and build lookups that say when they are unsure.

We have no tie to the WA Department of Education, the state government, the City of Bunbury or the statistics bureau, and do not suggest one. The bureau supplied the population figures; our scripts produced every distance, score and threshold on this page.

Bunbury's calendar

## Western Australian terms and Western time

Two calendar facts that matter for a Bunbury learner's week.

### First term of 2027

Runs from Monday 1 February to Friday 9 April, according to the WA Department of Education's published dates.

### Last term of 2027

Runs from Monday 11 October to Thursday 16 December, finishing on a Thursday.

### No daylight saving

Western Australia keeps Western Standard Time all year, so lesson times never shift with the seasons.

Names are data too

Suburb names in the department's list are stored in capitals, with spaces inside some, such as GLEN IRIS and BRUNSWICK JUNCTION. A matcher that ignores spaces or case differently from the data will score names inconsistently, so learners normalise both sides the same way before comparing anything.

Learning ladder

## From comparing words to designing agent tools

Ages give a rough idea; the free lesson decides where each learner starts.

Ages 13 to 14

### Words in code

Python strings, loops and functions that compare names letter by letter and count the differences.

[Python for Teens](/courses/python-complete-masterclass-teens)[Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course)Ages 15 to 18

### Fuzzy matching

Jaro-Winkler and edit distance, built by hand and tested on Bunbury typos and impostors.

[Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[AI Tools Course for Teens (13+)](/courses/teens-ai-tools-mastery-course)University

### Tools for agents

Tool interfaces, evaluation sets and thresholds for agents that call real data.

[Generative AI Course](/courses/complete-generative-ai-masterclass-college)[Vibe Coding for College](/courses/vibe-coding-for-college-fullstack-ai-dsa-career-course)Adults

### Agents at work

Coding agents and automation for professional tasks, with tests that keep them honest.

[Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)[Python Automation Course](/courses/python-ai-automation-masterclass-college)Coding and AI

## An AI agent can guess what you meant to type. Why should a Bunbury learner decide how it guesses?

Because without a threshold the agent will happily turn BUSSELTON into BUREKUP and answer a question nobody asked.

A fuzzy lookup always has a closest match. Ask about a town outside the list and the tool still returns its nearest neighbour, and an agent built on it will pass that answer on confidently. Our Bunbury tests show how thin the line can be: a real typo at 0.8905 and an impostor at 0.89. Where the cut-off sits decides whether the agent occasionally refuses a fair question or occasionally answers the wrong one.

That decision is invisible to anyone who only vibe codes the matcher. Learners who have built the test set see it immediately and design around it: return the score, flag corrections, refuse below the threshold, and tell the user what was assumed. Those are the habits that make an agent safe to put in front of other people.

In 2026 any AI can produce a fuzzy matcher; a Bunbury learner who can show where it is safe to trust is the one others will want building their agents. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

Delivery

## Australind, Eaton or Dalyellup, the same live lesson

Greater Bunbury spreads around Koombana Bay and the estuary, and a video lesson reaches every suburb on it.

### Around the bay

A learner in Carey Park and another in Gelorup can work in the same class without either travelling.

### Western Australian schooling

Teachers follow WA year levels and the state's four terms, and senior students can relate projects to their own courses. Teaching is in English.

### The trial is real teaching

Your free first session is a proper lesson that ends with a level, a course suggestion and a time. No card is ever requested.

### Groups at one level

Fifteen to twenty learners at the same stage, from Bunbury and elsewhere, so regional learners always find classmates.

### Two lessons a week

Around eight a month in a fixed slot, with school holidays and exam periods planned with the teacher.

### Teachers two and a half hours behind

Western Australia and India both skip daylight saving, so a 6pm lesson in Bunbury is 3:30pm for our teachers all year round.

The smallest gap in Australia

Bunbury runs on Western Standard Time, just two and a half hours ahead of India, the shortest difference of any Australian state. Lesson times are always confirmed in Bunbury time.

Fees

## What classes cost in Bunbury

Three straightforward prices.

First class**USD 0**

A full first lesson for free, after which you get a level, a suggested course and a time.

Group tuition**USD 100**

A month of lessons, usually eight, in a group of fifteen to twenty learners at your level.

Private tuition**USD 150**

About eight lessons a month with your own teacher, one to one.

Outside India all our fees are set in US dollars, which means Withers and College Grove households receive matching invoices and WA has no price list of its own. Payment begins once the trial has pinned down a course and a lesson slot, and our pricing page answers questions about breaks, absences and changing format.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20vibe%20coding%20or%20AI%20agents%20class%20for%20a%20learner%20in%20Bunbury.)Reviews

## Google reviews written by our families

Rated 4.9 across 547 Google reviews. These are real reviews, reproduced as written.

★★★★★

"The one step solution for my son. Modern Age Coders make learning coding so simple that kids love it. The teachers explain complex concepts clearly with practical exercises and interactive content."

Ria Mukherjee

Parent

★★★★★

"Modern Age Coders has been a game-changer for me. I struggled to grasp IT concepts and coding before joining, but their classes transformed everything. I can now confidently write complex programs with ease."

Samriddha Mondal

Student

★★★★★

"One of the most wonderful education centres out there. Education is not limited to school syllabus but focuses on skill development."

Vansh Agarwal

Student

★★★★★

"My child Dhairya is really enjoying the Modern Age Coders classes. This is his first online class and he eagerly looks forward to it. I can already see his improvement, and the teachers are very cooperative."

Sonam Oswal

Parent of Dhairya

★★★★★

"Modern Age Coders have wonderful teachers who teach in a clear, easy and practical way. The teacher boosts students' confidence and inspires them to learn without hesitation."

Sonu Goyal

Parent

★★★★★

"I highly recommend this computer coding class! The teachers are incredibly knowledgeable and passionate about coding."

Ritu Kedia

Parent

Free placement class

## Book a free vibe coding or AI agents lesson

Share an age and an interest. A Year 9 student might begin by comparing two misspelt names letter by letter; an adult might build the whole lookup tool and its tests.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Bunbury one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20vibe%20coding%20or%20AI%20agents%20class%20for%20a%20learner%20in%20Bunbury.)

Submitted details are used for placement and follow-up.

FAQ

## Questions from Bunbury

Answers to what Bunbury learners and parents raise most.

### How many people live in Bunbury?

The 2021 Census counted 76,452 people in the Bunbury urban area, according to the statistics bureau's QuickStats. The median age was 39.

### What is Jaro-Winkler similarity?

A score between 0 and 1 for how alike two short strings are, such as names. It counts matching letters, penalises letters that appear out of order and gives extra weight to a shared beginning, which suits typing mistakes.

### What is the Bunbury suburb-matching project?

Learners take the WA Department of Education's open schools list, collect the 16 suburb names within 25 km of central Bunbury, generate 192 typos and test a Jaro-Winkler lookup. Every typo finds its suburb; the challenge is choosing a threshold that rejects names from elsewhere.

### What is vibe coding?

Building software by explaining the goal to an AI assistant in ordinary words and letting it draft the code. Our lessons add the part that matters: reading that draft, testing it and repairing it.

### Do you teach Western Australian senior students?

Yes. We follow WA year levels and help senior students with computing and maths. Anything submitted for school assessment is the student's own work.

### What time are lessons for Bunbury learners?

Usually after school or at weekends, agreed at the trial and quoted in Bunbury time. Neither WA nor India changes its clocks, so the two and a half hour gap to our teachers never moves.

### Can younger children learn about AI?

Yes. From age six children use Scratch and simple AI activities, moving to Python later. This page is written for teenagers and adults.

### Is there a Modern Age Coders centre in Bunbury?

No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.

### What do Bunbury classes cost?

The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.

### How big are the groups?

Fifteen to twenty learners, matched on level, pace and goals rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.

Explore Australia

## Where Bunbury learners can go next

The [Western Australia page](/coding-and-ai-classes-in-western-australia) covers the whole state, and Perth has its own [Perth Python page](/online-coding-and-python-classes-in-perth-western-australia). For more on keeping AI-written code honest, read [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-australia). The [Australia coding page](/coding-classes-in-australia) lists every page we have written for Australian learners.

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20vibe%20coding%20or%20AI%20agents%20class%20for%20a%20learner%20in%20Bunbury.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-bunbury*
