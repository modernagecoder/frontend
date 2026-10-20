---
title: "AI and Python Classes for Teens in Portland, Oregon | Live"
description: "AI and Python classes for teens in Portland, Oregon, taught live online: Pacific Time planning, Oregon's AI literacy guidance, and a street tree data project."
canonical: https://learn.modernagecoders.com/ai-and-python-classes-for-teens-in-portland-oregon
source: src/pages/ai-and-python-classes-for-teens-in-portland-oregon.html
---
> Yes. Our live online teachers take Portland, Oregon teenagers, roughly seventh through twelfth grade, from first Python lines to data science and machine learning, either in a group of peers at their level or one to one, with every session booked on Pacific Time. Teens start with real code on real data, such as the city&rsquo;s street tree inventory of 354 species, and move on to building and testing their own AI models.

[Home](/) / [United States](/coding-classes-in-united-states) / Portland, Oregon

Portland, Oregon / Live online

# AI and Python classes for teens in Portland, Oregon

**Can a Portland teenager learn AI and Python live online after school?** Yes. Our live online teachers take Portland, Oregon teenagers, roughly seventh through twelfth grade, from first Python lines to data science and machine learning, either in a group of peers at their level or one to one, with every session booked on Pacific Time. Teens start with real code on real data, such as the city&rsquo;s street tree inventory of 354 species, and move on to building and testing their own AI models.

Portland is one of the few American cities where a teenager can download a list of nearly every tree planted along its streets, with species, size and condition for each one. That list is a better introduction to artificial intelligence than any chatbot, because the questions it raises (which kinds are most common, how varied is the mix, what does "Unknown" mean) are the same ones a machine learning engineer asks about training data. This page explains how the Oregon Department of Education frames AI literacy, what the published figures say about computer science in Oregon high schools, how our teen classes work on Pacific Time, and the street tree project a Portland student can build in Python with us.

Facts last verified 18 October 2026. Teaching is online; no Portland, Oregon branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 15 to 20 students per group.

## Four courses that start with real data

Chosen by grade and interest; the free first class settles where a teen starts.

- [Python for Teens](/courses/python-complete-masterclass-teens) (Grades 7 to 10): Python from first principles, with counting, sorting and file work that a tree inventory needs.
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data) (Grades 8 to 12): pandas, charts and careful summaries, with the Portland street tree file as a running example.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Grades 9 to 12): Machine learning built step by step, starting from why class balance in the data matters.
- [Orange Data Mining Course for Teens](/courses/orange-data-mining-visual-machine-learning-course-for-teens) (Grades 8 to 11): Visual machine learning workflows for teens who want to see models work before coding them.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Which street trees does Portland plant most, and how diverse is the mix?

The City of Portland publishes its Street Tree Inventory as open data. We downloaded the active records on 18 October 2026 and counted them the way a teen does in class: one species at a time.

**The ten most common species in Portland&rsquo;s Street Tree Inventory (our counts from the city&rsquo;s active records, downloaded 18 October 2026; 252,205 records)**

| Rank | Species as recorded | Trees | Share of records |
|---|---|---|---|
| 1 | Acer platanoides, Norway maple | 18,150 | 7.20% |
| 2 | Prunus, cherry species and cultivars | 9,718 | 3.85% |
| 3 | Acer x freemanii, red-silver maple hybrid | 9,326 | 3.70% |
| 4 | Prunus cerasifera, flowering plum | 7,472 | 2.96% |
| 5 | Pyrus calleryana, flowering pear | 6,880 | 2.73% |
| 6 | Malus spp., ornamental crabapple | 6,805 | 2.70% |
| 7 | Acer palmatum, Japanese maple | 5,705 | 2.26% |
| 8 | Acer rubrum, red maple | 5,647 | 2.24% |
| 9 | Cornus spp., dogwood | 5,619 | 2.23% |
| 10 | Styrax japonicus, Japanese snowbell | 5,171 | 2.05% |

### 1. Count with a Counter

One pass through the file with collections.Counter gives every species and its tally. The ten largest together hold 31.92% of all records in our download, so no single species dominates.

### 2. Change the grouping level

Group by genus instead, the first word of each name, and the picture shifts: maples (Acer) alone are 58,650 trees, or 23.25%, and the top ten genera reach 60.51%. Same data, a different answer.

### 3. Score the diversity

The Gini-Simpson index asks how likely two random trees are to differ in species. Our value is 0.9818, high, yet it hides 37 species represented by a single tree each.

### Check against the city

Urban Forestry writes that Portland&rsquo;s streets feature 354 different tree species, and our count of distinct species values is also 354. It says more than 18,000 Norway maples make up about 7% of street trees; we count 18,150, or 7.20%. The page gives 252,180 trees along streets, while our file has 252,205 records, a gap of 25 worth investigating rather than ignoring.

One label needs care. The species list includes "Unknown", and it appears on exactly 2,875 rows, the same number as rows whose Condition is Dead. That is not a coincidence a student should paper over: it means 354 includes one category that is not a species at all, and a diversity score computed with it is very slightly off. Deciding whether to drop it, and saying so, is the honest move.

All figures in this section are ours, computed from one download. The city&rsquo;s open data site lists a CC BY-SA licence, the inventory dates in our file run from 2022 to 2024, and the city may update records at any time, so a later download will give slightly different counts. We use species, size and condition only; the file also holds street addresses, which we do not print or analyse.

## The city&rsquo;s own numbers, and the questions they invite

Figures published by the City of Portland&rsquo;s Urban Forestry team, read on 18 October 2026.

**Portland&rsquo;s trees, as Urban Forestry describes them**

| Measure | City of Portland figure |
|---|---|
| Street trees | 333,000, including 252,180 along streets and 81,000 in natural areas beside roads |
| Trees in parks and natural areas | 1.2 million |
| Trees on private property | 2.9 million |
| Tree canopy cover | 32% of Portland&rsquo;s land area; 12% in the Central City |
| Canopy goal | 45% over the next 40 years |
| 2019 park tree inventory | 25,734 trees across 174 parks, 303 species |
| Douglas-firs in that inventory | Nearly 7,000, about 27% of inventoried park trees |

### Streets versus parks

Douglas-fir is about 27% of inventoried park trees but only a small share of street trees in our count. A teen can chart both and explain why planting rules differ between a sidewalk strip and a park.

### A nuisance at number one

The city has designated the Norway maple a nuisance plant and does not recommend it for streets, yet it tops the inventory. Data records the past; policy aims at the future.

### A goal you can model

Going from 32% to 45% canopy over 40 years is a growth problem. Older students build a simple projection and then list every assumption it makes.

## How Oregon&rsquo;s education department talks about AI literacy

The Oregon Department of Education (ODE) publishes guidance on generative AI for K-12 schools, and the published access figures show where computer science stands.

ODE&rsquo;s guidance says that foundational computer science knowledge, including computational thinking, underpins information and AI literacy, and that educational leaders should treat those literacies not as optional enrichment, but as foundational. It points districts to the AI Assessment Scale (AIAS) when planning policy, recommends writing assignments that put process ahead of product, and asks schools to shift the classroom culture from policing to coaching. ODE has also released Navigating Now: A Practical Toolkit for Information Literacy in the Age of AI. Our classes fit that framing: teens learn how AI systems are built, and their school work stays their own.

**Oregon high schools offering foundational computer science, by year (Code.org, 2025, Access data)**

| Year | Oregon |
|---|---|
| 2018 to 2019 | 54% |
| 2020 to 2021 | 63% |
| 2021 to 2022 | 64% |
| 2022 to 2023 | 60.2% |
| 2023 to 2024 | 56.2%, 195 of 347 high schools |

Unusually, the Oregon figures fall after 2021 to 2022, from 64% to 56.2% in the most recent year, and the sheet has no 2019 to 2020 or 2024 to 2025 value. We report the numbers without guessing at a cause. Please cite them as Code.org (2025). 2025 State of AI + CS Education. We looked for a current ODE computer science standards page and could not find one at the addresses we tried, so this page does not summarise Oregon CS standards.

## Class times for Portland, and the two weekends that matter

Portland uses America/Los_Angeles in the IANA time zone database, on Pacific Time, and India keeps one time all year.

**Where a 6:30 pm Portland lesson falls for a teacher in India, season by season (worked out by us from the IANA rules)**

| Season in Portland | Clock | Gap | Teacher&rsquo;s local time |
|---|---|---|---|
| Late summer and October 2026 | Pacific Daylight | India twelve and a half hours later | 7:00 am, following day |
| Winter, from November 1, 2026 | Pacific Standard | India 13 hours 30 minutes later | 8:00 am, following day |
| Spring, from March 14, 2027 | Pacific Daylight | India twelve and a half hours later | 7:00 am, following day |

### Pick your rhythm

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

### Why evenings suit

Pacific evenings land on Indian mornings, which is why early-evening slots after school and practice are often easy to arrange for Portland teens.

### Confirmed in Pacific Time

Each slot is written in Pacific Time, and we check it again the week the clocks change in early November and mid March, because the gap to India changes by an hour.

## From counting trees to training models

The grades are guidance only; the free class with a teacher sets the starting rung.

- **Grades 6 to 8: Python basics** Variables, loops and lists, with small games and first tallies of real data. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [Python for Teens](/courses/python-complete-masterclass-teens)
- **Grades 8 to 10: Data skills** Files, Counters and pandas, with charts that tell the truth about a dataset. [Data Science for Teens](/courses/data-science-course-for-teens-python-data), [MySQL for Teens](/courses/mysql-mastery-for-teens)
- **Grades 9 to 12: Machine learning** Classifiers, train and test splits, and what imbalanced classes do to a model. [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens), [Orange Data Mining Course for Teens](/courses/orange-data-mining-visual-machine-learning-course-for-teens)
- **Grades 10 to 12: Building with AI** Web apps that use AI services responsibly, and AP Computer Science A for students who want it. [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course), [AP Computer Science A](/courses/ap-computer-science-a-java-exam-prep-course)

## What a tree count teaches about AI training data

Machine learning models inherit the shape of their data, and the street tree file shows that shape plainly.

Train a model to identify Portland street trees from photos and it will see Norway maples more than seven times as often as Japanese snowbells, and some species only once. A model trained that way tends to guess the common answer. Teens who have counted the classes themselves understand why, and know to ask about balance before trusting an accuracy score.

The same goes for labels. "Unknown" sits in the species column on rows marked Dead, and a careless pipeline would treat it as one more kind of tree. Our AI lessons begin with this kind of inspection, then move to building and evaluating models, with AI assistants used for drafting code and every suggestion tested before it stays.

Oregon&rsquo;s guidance calls computer science the foundation of AI literacy; counting the trees on your own street is a very Portland way to lay it. The longer argument is in [is coding still worth learning in 2026](/blog/is-coding-worth-learning-2026).

## From St. Johns to Lents, a class at the kitchen table

Portland teens join from home, so a class needs no bus ride across the river.

- **Taught live** A teacher shares the screen, watches code run and answers questions in the moment. Recorded lectures are not the course.
- **US school aware** Teachers plan around US grades and the Oregon school year, and keep graded school work clearly the student&rsquo;s own.
- **Free trial class** A full first lesson, then a suggestion for level, course and slot. No payment details are taken for it.
- **Level-matched groups** A typical group seats fifteen to twenty teenagers who placed at a similar stage, some from Oregon and others from elsewhere in the country.
- **One to one** A private teacher for teens with a project, a portfolio or AP preparation in mind.
- **Pacific Time slots** Weekdays or weekends, flexible, always agreed in Pacific Time.

**Online, not local** Our teachers work from India and every lesson streams live. There is no Modern Age Coders building anywhere in Oregon, we do not pretend otherwise, and we have no link with the City of Portland, its Urban Forestry team or the Oregon Department of Education.

## Fees for Portland families

A free start, then a monthly fee in US dollars.

- First class: USD 0. A free lesson with a teacher, ending with a suggested level, course and Pacific Time slot.
- Group tuition: USD 100 a month. A month in a group of fifteen to twenty teens at the same level.
- Private tuition: USD 150 a month. A month of private lessons with one teacher.

Portland pays the same US dollar fee as every other US city. Nothing is charged before the free lesson, and the pricing page sets out how holidays and missed lessons work.

## Portland parents ask

### What is the Portland street tree project?

Teens download the City of Portland Street Tree Inventory, count species with Python, compare species and genus groupings, and compute a diversity index, checking each result against the city's own figures.

### How many street tree species does Portland have?

The city says its streets feature 354 different tree species. Our count of distinct species values in the open data also came to 354, one of which is the label Unknown.

### What is the most common street tree in Portland?

The Norway maple. The city puts it at more than 18,000 trees, about 7%; our count of the active records was 18,150. The city has designated it a nuisance plant.

### What does Oregon say about AI in schools?

ODE guidance says foundational computer science knowledge, including computational thinking, underpins information and AI literacy, and treats those literacies as foundational rather than optional.

### What share of Oregon high schools teach computer science?

In its 2025 data Code.org counts 195 of 347 Oregon high schools, or 56.2%, with a foundational CS course in the 2023 to 2024 school year, a drop from 64% two years earlier.

### What time are classes for Portland teens?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Slots are set in Pacific Time.

### Does the class time change in November?

Portland moves to Pacific Standard Time on November 1, 2026, and India does not change, so we reconfirm each slot that week and again before March 14, 2027.

### Does my teen need to know Python already?

Not at all. The beginner group assumes no experience, and teens who already write code are moved up after the trial lesson.

### Which AI tools will my teen use?

We check the published age limit of each service first and use it only if the student's age. is old enough; anything restricted to adults is off the table, and the bulk of lessons is hand-written Python.

### Is there an office in Portland?

No. Classes run live online from India, so a laptop, a headset and a reliable connection at home are all that is needed.

## More for Portland and US teens

Teens who like a deadline can read the [Congressional App Challenge guide](/congressional-app-challenge-guide), and future AP students can look at [AP Computer Science A classes](/ap-computer-science-a-online-classes). For every US option in one place, open [the United States hub](/coding-classes-in-united-states).

## Contact

Book the free class on [https://learn.modernagecoders.com/ai-and-python-classes-for-teens-in-portland-oregon](https://learn.modernagecoders.com/ai-and-python-classes-for-teens-in-portland-oregon#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
