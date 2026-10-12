---
title: "AI and Programming Classes in Hume, Melbourne"
description: "Live online AI and programming classes for Hume learners of every age: Scratch, Python, data and machine learning, in small groups or one to one, first lesson free."
canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-hume-melbourne
source: src/pages/ai-and-programming-classes-in-hume-melbourne.html
---
> Where the score came from. A model can look accurate because one of its inputs quietly contains the answer, which is called target leakage. Our Hume project shows it with real data: 49 government schools, a 98% score, and a model that learned nothing about schools.

[Home](/) / [Australia](/coding-classes-in-australia) / [Victoria](/coding-and-ai-classes-in-victoria) / [Melbourne](/vibe-coding-and-ai-agents-classes-in-melbourne) / Hume

Hume City Council, Melbourne, Victoria / Live online

# AI and programming classes in Hume

**What should a Hume learner know before trusting an AI model's score?** Where the score came from. A model can look accurate because one of its inputs quietly contains the answer, which is called target leakage. Our Hume project shows it with real data: 49 government schools, a 98% score, and a model that learned nothing about schools.

Hume City Council takes in both Broadmeadows and Sunbury, and the 2025 state file lists 49 government schools inside it. We asked a simple question of that list: can a program tell which schools are secondary? One version gets 48 of 49 right. It is also a model that has learned nothing, and seeing why is the lesson.

Facts last verified 10 October 2026. Teaching is online; no Hume branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## AI and programming courses

Each course below builds towards real models and real data, with honest testing. The free lesson tells us which one fits.

- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 13 to 17): Machine learning from first principles, with train and test splits done properly.
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data) (Ages 13 to 17): Python, tables and charts on public data sets.
- [AI and ML Masterclass](/courses/ai-ml-masterclass-complete-college) (University and adult): Models, evaluation and the mistakes that inflate scores.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass) (Ages 9 to 12): First Python and simple AI ideas for younger learners.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## A young council of family homes

All values are for Hume (ABS LGA23270) as printed on the 2021 Census QuickStats page, which we read on 10 October 2026.

**Hume, 2021 Census**

| Measure | Hume |
|---|---|
| Persons | 243,901 |
| Median age | 33 |
| Families | 63,644 |
| Private dwellings | 83,928 |
| Household size, average | 3.1 |
| Motor vehicles per dwelling, average | 2 |

**Hume against Victoria**

| Indicator | Hume | Victoria |
|---|---|---|
| Dwellings that are separate houses | 87.8% (66,487) | 73.4% |
| Dwellings that are flats | 3.0% (2,242) | 12.1% |
| Holding a bachelor degree or higher | 20.2% (38,291) | 29.2% |
| Employed as professionals | 16.8% (17,264) | 25.0% |

### Under-fives

There were 18,851 Hume children aged 0 to 4, which is 7.7% of residents.

### Early primary

18,924 residents, 7.8%, were aged 5 to 9.

### Read with care

Census night came during a Melbourne lockdown. 17.8% of employed Hume residents (18,302) said they worked at home that day.

QuickStats rounds percentages and applies small random adjustments to protect privacy, so we print each number as published and never add groups together to make new totals.

## The model that read the answer

The task: label each of Hume's 49 government schools in the 2025 file as secondary or not secondary. Nine are secondary. We tried four rules and scored every one on Hume, then checked the name rules on the other 854 government schools in metropolitan Melbourne councils.

**Four rules, scored on real schools (our calculation)**

| Rule | Hume (49) | Other metro councils (854) |
|---|---|---|
| Always say "not secondary" | 40 right, 81.6% | 688 right, 80.6% |
| Name contains "College" | 48 right, 98.0% | 785 right, 91.9% |
| Name contains "Secondary College" or "High School" | 47 right, 95.9% | 817 right, 95.7% |
| Five nearest schools by location vote | 40 right, 81.6% | not scored |

### Why 98% is hollow

A school's name is chosen because of what kind of school it is. Feeding the name to a model hands it the label in disguise. That is target leakage: the score measures the naming convention, not any pattern a model discovered.

### It does not travel

The "College" rule scored 98.0% in Hume but 91.9% across the rest of Melbourne. Its one Hume miss is Mount Ridley P-12 College, which teaches primary and secondary years.

### The honest model

Location carries no leak. The five-nearest-schools vote, trained on the other councils, never once predicted "secondary" in Hume and matched the do-nothing baseline at 81.6%. Here the simple baseline is as good as it gets.

### The question to ask any score

Would this input exist before we knew the answer? A school name is decided alongside the school type, so it fails. That single question catches most leakage before a model is ever trained.

The two misses for the stricter name rule are Sunbury College and Roxburgh College, both secondary schools without "Secondary" in their names. Names follow habits, and habits have exceptions. Specific-purpose schools are included in the 49 but not named here.

## Three checks before believing a score

Learners build these checks into every project, starting with spreadsheets and ending with Python.

**A leakage checklist**

| Check | What it catches |
|---|---|
| Compare with a do-nothing baseline | A model that barely beats "always the common answer". |
| Drop one feature at a time | A single input that carries almost the whole score. |
| Score on a different place or time | A rule that only fits the data it was built on. |

The scikit-learn documentation describes the same trap in its guide to common pitfalls: information that would not be available when the model is really used must stay out of training.

### Primary school learners

Play a guessing game where one clue gives the answer away, then talk about why that clue is unfair.

### High school learners

Rebuild the four rules in Python and find the three schools that break them.

### Adults

Audit a model at work for any column that is filled in after the outcome is known.

## Around Hume

Counts taken from the state school locations list and the department's station entries file.

### 49 government schools

Hume has 34 primary, 9 secondary, 1 combined primary and secondary, and 5 specific-purpose government schools in the 2025 list.

### Six train stations

Sunbury, Broadmeadows, Roxburgh Park, Craigieburn, Coolaroo and Upfield fall inside the boundary; Broadmeadows logged 878,300 entries in FY24-25.

### The 2027 school year

Term 1 at Victorian government schools starts on Thursday 28 January 2027 and ends on Thursday 25 March.

**Which Hume** This page follows the ABS outline of Hume City Council, about 503.8 square kilometres. School addresses inside it include Broadmeadows, Craigieburn, Greenvale, Mickleham, Roxburgh Park and Sunbury.

## From guessing games to real models

Starting points by age; the trial lesson sets the real one.

- **Ages 6 to 9: Blocks and logic** Scratch projects that sort, count and decide. [Scratch Coding for Kids](/courses/scratch-programming-complete-course), [AI Literacy for Kids (Ages 8 to 14)](/courses/ai-literacy-for-kids-course)
- **Ages 9 to 12: Python and AI ideas** Typed code, simple data and how a program learns from examples. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [Maths Through Coding](/courses/maths-through-coding)
- **Ages 13 to 17: Data and machine learning** Real data sets, models and honest evaluation. [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens), [Data Science for Teens](/courses/data-science-course-for-teens-python-data)
- **University and adult: Applied AI** Machine learning and generative AI for study and work. [AI and ML Masterclass](/courses/ai-ml-masterclass-complete-college), [Generative AI Course](/courses/complete-generative-ai-masterclass-college)

## Can Hume students just ask an AI to build the model?

They can, and the leak will still be there.

Give an AI assistant the school file and ask for the most accurate classifier. A tool that is optimising for accuracy has every reason to use the name column, and it may well report a score near 98% without a word of warning.

Spotting that takes a person who understands where the data came from. A learner who has seen the "College" rule fall from 98.0% to 91.9% knows to ask what each column means before trusting any number, generated or hand made.

In Hume classes, AI speeds up the code, and the learner stays in charge of the judgement. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## How lessons work for Hume

Everything happens on a video call, whether the learner is in Sunbury, Campbellfield or Greenvale.

- **Teacher and screen** The learner shares their screen; the teacher talks through the learner's own code.
- **In step with terms** Lessons follow the Victorian school term pattern, with breaks in the holidays.
- **First class free** A complete trial lesson with no charge, followed by a course suggestion.
- **Matched groups** Five to ten learners grouped by level, from different suburbs and countries.
- **Twice a week** Two scheduled lessons weekly, so roughly eight in a month.
- **India time** A 5pm Hume lesson is 11:30am India time while Melbourne is on daylight saving, and 12:30pm after it ends.

**Clock changes** Melbourne daylight saving runs from Sunday 4 October 2026 until Sunday 4 April 2027. India stays on one time all year, so we confirm every booking in Melbourne time.

## Hume class fees

One price list for every family outside India.

- First class: USD 0. The first lesson costs nothing and ends with a recommendation.
- Group tuition: USD 100 a month. Group classes: a month of lessons, about eight, in a group of five to ten.
- Private tuition: USD 150 a month. One-to-one classes: a month of lessons, about eight, with a teacher to themselves.

Hume families are billed in US dollars. Nothing is paid until the trial has settled the course and a weekly time; rules for holidays and missed lessons are on the pricing page.

## Hume AI and programming questions

### How many people live in Hume?

Hume City Council had 243,901 residents at the 2021 Census, with a median age of 33.

### What is target leakage?

Target leakage is when a model's input contains information about the answer that would not really be known at prediction time. The model scores well in testing and fails in use.

### How do you spot target leakage?

Compare against a simple baseline, remove one input at a time, and test on different data. A single input that carries the whole score is the usual sign.

### How many government schools are in Hume?

The 2025 Victorian school locations file lists 49 government schools in Hume, nine of them secondary.

### What age can a child start learning AI?

Ideas about how computers learn from examples suit children from about seven. Building real models in Python usually starts around 13.

### Do you teach generative AI to adults?

Yes. Adults can take machine learning or generative AI courses, in groups or one to one.

### Where are your Hume classes held?

Only online. We have no Australian premises, and our listed phone number is an Indian one.

### What do Hume classes cost?

The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of five to ten, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.

### How are groups formed?

By level and pace, with five to ten learners in each, rather than by age or suburb. One-to-one lessons cover any timing a group cannot.

### Is the school data on this page official?

The school counts come from the Victorian Government's 2025 school locations file. The classifier scores are our own calculation.

## More pages for Hume

See the [Melbourne page](/vibe-coding-and-ai-agents-classes-in-melbourne) for the wider city, the [Victoria guide](/coding-and-ai-classes-in-victoria) for the state, or [coding for kids in Melbourne](/coding-classes-for-kids-melbourne) for younger learners.

## Contact

Book the free class on [https://learn.modernagecoders.com/ai-and-programming-classes-in-hume-melbourne](https://learn.modernagecoders.com/ai-and-programming-classes-in-hume-melbourne#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
