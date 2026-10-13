---
title: "Vibe Coding and AI Agents Classes in Lake Macquarie"
description: "Live online vibe coding and AI agent classes for teenagers and adults across Lake Macquarie, plus Scratch and Python for children from six, in groups or one to one."
canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-lake-macquarie-newcastle
source: src/pages/vibe-coding-and-ai-agents-classes-in-lake-macquarie-newcastle.html
---
> Because an AI model has no clock. Unless the date is passed in, "last month" means whatever the model assumes now is. Our live online lessons teach agent building with that in mind. The Lake Macquarie council area had 213,845 residents at the 2021 Census.

[Home](/) / [Australia](/coding-classes-in-australia) / [New South Wales](/coding-and-ai-classes-in-new-south-wales) / [Newcastle](/online-coding-and-python-classes-in-newcastle-nsw) / Lake Macquarie

Lake Macquarie City Council, Hunter, New South Wales / Live online

# Vibe coding and AI agent classes in Lake Macquarie

**Why would an AI agent give Lake Macquarie figures for the wrong month?** Because an AI model has no clock. Unless the date is passed in, "last month" means whatever the model assumes now is. Our live online lessons teach agent building with that in mind. The Lake Macquarie council area had 213,845 residents at the 2021 Census.

We asked an agent which Lake Macquarie railway station had the most entries last month. It answered quickly and confidently, with a real figure from the Transport for NSW file. The figure was for May 2025, sixteen months out of date, because nobody had told the agent what day it was.

Facts last verified 14 October 2026. Teaching is online; no Lake Macquarie branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Courses for agents that know what day it is

The project below needs Python dates, data files and agent design. These courses build those skills; the free first lesson chooses between them.

- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Adults 18 and over): Building and checking coding agents on real tasks.
- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Making things with AI help and checking what comes back.
- [AI Tools Course for Teens (13+)](/courses/teens-ai-tools-mastery-course) (Ages 13 to 17): How AI tools work, including what they cannot know.
- [Python for Teens](/courses/python-complete-masterclass-teens) (Ages 13 to 17): datetime, files and the code agents call.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## A big council wrapped around a lake

Census 2021 figures for the Lake Macquarie local government area (ABS code LGA14650), with New South Wales alongside.

**Lake Macquarie council area, 2021**

| Measure | Lake Macquarie |
|---|---|
| Residents | 213,845 |
| Median age | 42 |
| Families | 60,257 |
| Private dwellings | 88,815 |
| People per household | 2.5 |

**Lake Macquarie compared with the state**

| Indicator | Lake Macquarie | New South Wales |
|---|---|---|
| Separate houses | 85.2% (68,750) | 65.6% |
| Flats or apartments | 4.4% (3,589) | 21.7% |
| Adults with a bachelor degree or higher | 19.0% (33,332) | 27.8% |
| Employed people in professional jobs | 21.5% (20,897) | 25.8% |

### Under twenty

The council had 13,451 residents aged 5 to 9, 13,344 aged 10 to 14 and 12,340 aged 15 to 19.

### Over eighty-five

6,305 residents were aged 85 or over.

### Area

The council area takes in about 649 square kilometres around the lake.

Each figure is the one QuickStats prints. The bureau nudges small cells to protect privacy, which is why we leave every number as published rather than combining them.

## Last month, according to whom?

Nine railway stations sit inside the council, going by the state mapping agency's station points. Transport for NSW publishes monthly entries for each, October 2024 to August 2026 in the file we downloaded. Our scripted agent was asked: which of these stations had the most entries last month?

**Three versions of the same agent (our run)**

| Agent setup | Month it chose | Answer |
|---|---|---|
| No date given; assumes 1 June 2025 | May 2025 | Cardiff, 16,995 entries |
| Given today's date, 14 October 2026 | September 2026 | No rows found |
| Given the date and told to check the file | August 2026, latest published | Cardiff, 22,208 entries |

**August 2026 entries at Lake Macquarie stations (Transport for NSW)**

| Station | Entries |
|---|---|
| Cardiff | 22,208 |
| Morisset | 17,093 |
| Fassifern | 10,149 |
| Wyee | 6,850 |
| Cockle Creek | 1,560 |
| Dora Creek | 1,223 |
| Teralba | 1,146 |
| Booragul | 982 |
| Awaba | 612 |

### The first mistake

A language model learns from text up to a cut-off and has no clock. Without the date in its instructions, "last month" is a guess, and the guess can be over a year old.

### The second mistake

Given the real date, the agent asked for September 2026. Usage files are published after the month ends, so that month was not there yet.

### The fix

Pass the date in, and have the tool report the newest month it holds. The agent then says plainly that it is answering for August.

### Put the date in the prompt

Any agent that answers questions with words like today, recent or last week needs the current date supplied by the program around it. It also needs to say which period its answer covers, so a person can see at once whether it is stale.

Which stations count as Lake Macquarie is decided by our own boundary query; the monthly counts are Transport for NSW's Opal figures. The agent is a short script of ours standing in for an AI model, not a transcript from a commercial product.

## Words an agent should never guess

Relative time words and how a well-built agent resolves them.

**Resolving relative dates**

| Phrase | Needs | Good practice |
|---|---|---|
| last month | Today's date | Pass the date in; state the month used |
| the latest figures | What the data holds | Ask the tool for its newest period |
| this school term | A calendar source | Look it up, never assume |
| recently | A definition | Ask the person what they mean |

### Primary learners

Ask a friend who has been asleep for a year what day it is, then talk about why they are wrong.

### Secondary learners

Write a function that turns "last month" into a year and month from a date passed in, and test it in January.

### Adults

Check the system prompt of any assistant at work for a date line before trusting its answers about time.

January is the case to test first. Last month is then December of the previous year, and code that only subtracts one from the month number breaks.

## Rail, homes and the 2027 calendar

A few council-wide markers from state open data.

### Two busy stations

Cardiff and Morisset recorded 22,208 and 17,093 entries in August 2026, well ahead of the other seven.

### Address points

The state address register holds 109,432 points touching the council area; we use the count and nothing else.

### Term 3, 2027

NSW public school Term 3 of 2027 runs from 19 July to 24 September.

**Council figures** This page covers the whole Lake Macquarie local government area. Charlestown, inside it, has a page and figures of its own that are not repeated here. By the ABS boundaries the council meets Newcastle, Cessnock and Central Coast.

## From calendars to grounded agents

Ages are a starting point; the trial lesson decides.

- **Ages 6 to 10: Scratch and play** Timers, days and simple games. [Scratch Coding for Kids](/courses/scratch-programming-complete-course), [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)
- **Ages 10 to 14: Python and AI basics** Dates in Python and how AI tools learn. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [AI Literacy for Kids (Ages 8 to 14)](/courses/ai-literacy-for-kids-course)
- **Ages 14 to 18: Vibe coding** Building with AI and checking its assumptions. [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course), [AI Tools Course for Teens (13+)](/courses/teens-ai-tools-mastery-course)
- **Adults 18 and over: Agents** Agents grounded in today's date and real data. [Generative AI Course](/courses/complete-generative-ai-masterclass-college), [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)

## An answer that is true and still wrong

The May 2025 figure was real. It answered a different question.

Nothing in the first agent's reply looked broken. It named a real station and a real number taken straight from the file. Only someone who checked the month would notice it was over a year old, and agent replies rarely invite that check.

Learners who build the three versions themselves start writing the date into every agent they make and asking each one to state the period it used. It is a small habit with a large effect on whether people can trust what an agent says.

For Lake Macquarie learners, a grounded agent is one that knows the date and says which data it used. The longer argument is in [why understanding code still beats copying it](/blog/is-coding-worth-learning-2026).

## Lake Macquarie lessons online

Lessons happen live on video, from Morisset to Belmont.

- **Build all three** Learners rebuild the agent and watch the answer change with the date.
- **School year** Classes run in NSW term time and break for holidays.
- **First lesson free** A full lesson without charge and a written recommendation after it.
- **Class size** Between five and ten classmates working at about the same stage, unless one-to-one suits better.
- **Regular times** Two lessons each week at fixed times, about eight a month.
- **India time** Lessons are taught from India: a 6pm Lake Macquarie class is 12:30pm India time in summer and 1:30pm in winter.

**NSW clocks** Lake Macquarie follows New South Wales daylight saving from the first Sunday in October to the first Sunday in April (IANA time zone database); India keeps one time all year.

## Lake Macquarie fees

Three fixed prices, the same around the lake.

- First class: USD 0. The first lesson is free, followed by written advice.
- Group tuition: USD 100 a month. Roughly eight group lessons a month, five to ten learners in each.
- Private tuition: USD 150 a month. Roughly eight private lessons a month.

Lake Macquarie families pay in US dollars after the trial has decided the course and lesson times. Holiday and missed-lesson rules are on the pricing page.

## Lake Macquarie agent questions

### How many people live in the Lake Macquarie council area?

The 2021 Census QuickStats count 213,845 residents in the Lake Macquarie local government area, with 88,815 private dwellings and a median age of 42.

### Does an AI model know today's date?

Not by itself. A model only knows what was in its training text and what it is told. Applications that need the date pass it into the instructions.

### What is date grounding for an AI agent?

Giving the agent the current date and the dates its data covers, so relative words such as last month resolve correctly.

### Which Lake Macquarie station had the most entries in August 2026?

Cardiff, with 22,208 entries in Transport for NSW's monthly usage file, ahead of Morisset with 17,093.

### What is vibe coding?

Building software by describing what you want to an AI tool and shaping what it produces, rather than typing every line yourself.

### Will teenagers use Claude?

No. Our Claude-based courses are for adults aged 18 and over; teenagers use other tools.

### Is there a classroom in Lake Macquarie?

No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.

### What do lessons cost for Lake Macquarie learners?

The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of five to ten, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.

### Who is in each group?

Five to ten learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.

### Do Lake Macquarie groups learn Copilot Studio?

No. Copilot Studio is taught in one-to-one lessons only; group learners build their agents in Python.

## More for Lake Macquarie learners

[Charlestown](/ai-and-programming-classes-in-charlestown-newcastle) has its own page within the council area. [The Newcastle page](/online-coding-and-python-classes-in-newcastle-nsw) is the city-wide view, and [our New South Wales guide](/coding-and-ai-classes-in-new-south-wales) looks at the whole state.

## Contact

Book the free class on [https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-lake-macquarie-newcastle](https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-lake-macquarie-newcastle#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
