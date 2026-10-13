---
title: "AI and Programming Classes in Charlestown, Newcastle"
description: "Live online AI and programming classes for Charlestown learners: Scratch from six, then Python, data and machine learning for teens and adults, in small groups."
canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-charlestown-newcastle
source: src/pages/ai-and-programming-classes-in-charlestown-newcastle.html
---
> Live online AI and programming classes for Charlestown learners: Scratch from six, then Python, data and machine learning for teens and adults, in small groups.

Skip to contentCourse picks for Charlestown

## Courses that take data seriously

The road project mixes Python, data cleaning and a first machine learning model. These courses build towards it; the free first lesson places the learner.

[![Generative AI Course course thumbnail](/images/generative-ai-college.webp)Adults 18 and overGenerative AI CourseModels, data preparation and AI tools for real projects.See the syllabus](/courses/complete-generative-ai-masterclass-college)[![Python for Teens course thumbnail](/images/python-teens.webp)Ages 13 to 17Python for TeensPython with files, tables and NumPy.See the syllabus](/courses/python-complete-masterclass-teens)[![AI Tools Course for Teens (13+) course thumbnail](/images/ai-tools-kids.webp)Ages 13 to 17AI Tools Course for Teens (13+)How AI systems learn from data and where they go wrong.See the syllabus](/courses/teens-ai-tools-mastery-course)[![Python and AI for Kids course thumbnail](/images/python-kids.webp)Ages 10 to 14Python and AI for KidsFirst Python and simple models built by hand.See the syllabus](/courses/python-ai-kids-masterclass)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Charlestown in the Census

## A Lake Macquarie suburb south of Newcastle

Census 2021 figures for the suburb of Charlestown (ABS code SAL10884), with New South Wales alongside.

| Measure | Charlestown |
| --- | --- |
| Residents | 13,601 |
| Median age | 38 |
| Families | 3,791 |
| Private dwellings | 5,731 |
| People per household | 2.5 |

| Indicator | Charlestown | New South Wales |
| --- | --- | --- |
| Separate houses | 76.0% (4,031) | 65.6% |
| Flats or apartments | 8.9% (470) | 21.7% |
| Adults with a bachelor degree or higher | 26.2% (2,898) | 27.8% |
| Employed people in professional jobs | 26.6% (1,869) | 25.8% |

### School ages

861 residents were aged 5 to 9, 805 were 10 to 14 and 680 were 15 to 19.

### Older residents

427 Charlestown residents were aged 85 or over.

### Size

The suburb covers a little over 7 square kilometres, bordered by Kahibah, Gateshead, Whitebridge and others.

Charlestown has a larger share of separate houses and a smaller share of flats than the state. The bureau applies small random adjustments to Census cells, so these figures are shown as published and kept apart.

Signature project

## The blanks were the answer

We took the 815 road segments that NSW Spatial Services records as touching Charlestown and trained a small model to pick out roundabout segments from two things: segment length and lane count. Lane count is Unknown on 49 rows. We handled the blanks three ways.

| How blanks were handled | Roundabouts found | False alarms |
| --- | --- | --- |
| Rows with blanks dropped | None left to learn from | Not applicable |
| Blanks filled with the most common value | 32 of 34 | 108 |
| Filled, plus a was-missing column | 34 of 34 | 10 |

| Segment type | Lane count known | Lane count Unknown |
| --- | --- | --- |
| Roundabout | 0 | 34 |
| Standard road | 651 | 7 |
| Pathway | 24 | 7 |
| Other types | 91 | 1 |

### Dropping rows

Removing the 49 incomplete rows deletes every roundabout, so the model has nothing to learn from. It looks tidy and destroys the question.

### Filling blanks

Writing the most common lane count into the gaps makes roundabouts look like ordinary roads. The model leans on length alone and raises 108 false alarms.

### Keeping a flag

A column saying whether the lane count was missing lets the model learn that blanks mean roundabout. False alarms fall to 10.

### Ask why the value is missing

Blanks are rarely random. Before filling them, count where they fall. If they cluster in one group, the fact of being missing carries information, and a simple yes or no column keeps it.

Road records come from the NSW Transport Theme published by NSW Spatial Services. The model is a logistic regression in scikit-learn on our extract; which segments count as Charlestown is decided by our boundary query against the ABS suburb outline.

Missing data

## Four ways to treat a blank

Each choice says something about why the value is missing.

| Option | Assumes | Risk |
| --- | --- | --- |
| Drop the row | Blanks are random | Loses whole groups |
| Fill with mean or mode | Blanks look like typical rows | Hides patterns |
| Fill and add a flag | Missingness may matter | One extra column |
| Model that accepts blanks | The method handles them | Behaviour can be opaque |

### Primary learners

Sort picture cards where some labels have been torn off, then notice which cards lost them.

### Secondary learners

Count blanks by category in a real file before deciding what to do with them.

### Adults

Add a was-missing column in your next spreadsheet model and compare results with and without it.

In scikit-learn, SimpleImputer(add_indicator=True) fills blanks and adds the flag columns in one step, which makes the safer choice also the easy one.

Around Charlestown

## Roads and homes in numbers

Suburb markers from NSW open data.

### Road network

The 815 segments add up to 110.06 km of recorded length; 551 are local roads and 85 arterial roads.

### Small pieces

Roundabout segments are short: a median of 18.7 metres, against 109.5 metres for the rest.

### Address points

NSW Spatial Services lists 6,803 address points touching the suburb, used as a count only.

Suburb figures

Figures here are for the suburb of Charlestown inside the City of Lake Macquarie. The council as a whole has its own page, and none of its totals are repeated here.

Learning ladder

## From picture cards to models

Ages guide the start; the free lesson confirms it.

Ages 6 to 10

### Scratch

Sorting, matching and simple games.

[Scratch Coding for Kids](/courses/scratch-programming-complete-course)[Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)Ages 10 to 14

### Python and AI basics

Tables, counting and how AI learns.

[Python and AI for Kids](/courses/python-ai-kids-masterclass)[AI Literacy for Kids (Ages 8 to 14)](/courses/ai-literacy-for-kids-course)Ages 14 to 18

### Data and models

Cleaning data and a first classifier.

[Python for Teens](/courses/python-complete-masterclass-teens)[AI Tools Course for Teens (13+)](/courses/teens-ai-tools-mastery-course)Adults 18 and over

### Applied machine learning

Models that hold up on real records.

[Generative AI Course](/courses/complete-generative-ai-masterclass-college)[Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)AI and data

## Would an AI assistant fill the blanks for you?

Very likely, and with the most common value.

Ask an AI tool to clean a table with missing values and the reply often fills them with the mean or the mode. That is a fair default for blanks that are scattered at random. In the Charlestown road file they are not random, and the default erases the pattern.

A learner who has watched false alarms fall from 108 to 10 asks where the blanks are before accepting any cleaning step. That question is the difference between a model that works on this file and one that only appears to.

For Charlestown learners, good machine learning starts with reading the gaps in the data. The longer argument is in [why reading code beats trusting it in 2026](/blog/is-coding-worth-learning-2026).

Delivery

## How Charlestown lessons work

Live video lessons, so nobody has to leave home.

### Count first

Learners tally blanks and odd values before any model is trained.

### Term time

Classes follow the NSW school calendar with breaks in the holidays.

### No-cost trial

A complete first lesson free, then a written suggestion for what comes next.

### Matched by level

Groups of fifteen to twenty learners at a similar stage, or private teaching.

### Fixed weekly slots

Two lessons a week, so about eight a month.

### Teaching from India

A 5pm Charlestown class is 11:30am India time during daylight saving and 12:30pm in winter.

Charlestown clocks

Charlestown follows New South Wales time, with daylight saving from the first Sunday in October to the first Sunday in April (IANA time zone database). India has no daylight saving.

Fees

## Charlestown class fees

A single price list for all learners.

First class**USD 0**

No charge for the first lesson, and written advice afterwards.

Group tuition**USD 100**

About eight group lessons monthly, with fifteen to twenty in each group.

Private tuition**USD 150**

About eight one-to-one lessons monthly.

Charlestown families pay in US dollars once the trial has settled the course and times. The pricing page sets out how holidays and missed lessons work.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20AI%20or%20programming%20class%20for%20a%20learner%20in%20Charlestown.)Reviews

## What reviewers on Google say

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

## Book a free Charlestown class

Tell us the learner's age and interests. An older student might rerun the roundabout model; a younger one might sort cards in a Scratch game.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Charlestown one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20AI%20or%20programming%20class%20for%20a%20learner%20in%20Charlestown.)

Submitted details are used for placement and follow-up.

FAQ

## Charlestown AI and programming questions

Questions Charlestown families raise.

### How many people live in Charlestown?

Census 2021 QuickStats counts 13,601 residents in the suburb of Charlestown, with 3,791 families and a median age of 38.

### What is a missing-value indicator in machine learning?

An extra column that records whether a value was blank before it was filled in, so a model can learn from the pattern of missing data.

### Should I drop rows with missing values?

Only if the blanks are scattered at random. If they cluster in one group, dropping rows can remove that group entirely.

### How many roundabout segments are in Charlestown?

NSW Spatial Services records 34 roundabout segments among the 815 road segments touching Charlestown, all with lane count Unknown, as of October 2026.

### Can teenagers learn machine learning online?

Yes. Teenagers who are comfortable with Python can train simple models on real data like the Charlestown road file.

### Are Claude courses open to teenagers?

No. Our Claude-based courses are for those aged 18 and over; teenagers learn with other AI tools.

### Is there a classroom in Charlestown?

No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.

### What do lessons cost for Charlestown learners?

The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.

### Who is in each group?

Fifteen to twenty learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.

### Can Charlestown groups study Copilot Studio?

No. Copilot Studio is offered one to one only; group learners build in Python.

Explore Lake Macquarie and Newcastle

## More for Charlestown learners

Charlestown sits inside the City of Lake Macquarie, which has [its own page](/vibe-coding-and-ai-agents-classes-in-lake-macquarie-newcastle). [The Newcastle page](/online-coding-and-python-classes-in-newcastle-nsw) and [the New South Wales guide](/coding-and-ai-classes-in-new-south-wales) cover the wider region.

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20AI%20or%20programming%20class%20for%20a%20learner%20in%20Charlestown.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-charlestown-newcastle*
