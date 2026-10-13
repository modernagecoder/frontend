---
title: "AI and Programming Classes in Woden, Canberra"
description: "Live online AI and programming classes for Woden Valley, ages 6 to adult, with a collaborative filtering project built on ACT vehicle registration data."
canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-woden-canberra
source: src/pages/ai-and-programming-classes-in-woden-canberra.html
---
> Collaborative filtering, the idea behind many "people who liked this also liked that" recommendations. Learners hide one count from the ACT vehicle registration table, such as how many of one car model are registered in Phillip, and predict it from the suburb's other models. The model misses by 6.52 vehicles on average; guessing from overall popularity misses by 9.60.

[Home](/) / [Australia](/coding-classes-in-australia) / [Australian Capital Territory](/coding-and-ai-classes-in-australian-capital-territory) / [Canberra](/vibe-coding-and-ai-agents-classes-in-canberra) / Woden

Woden Valley district, south-west Canberra, ACT / Live online

# AI and programming classes in Woden

**What AI technique does the Woden project use?** Collaborative filtering, the idea behind many "people who liked this also liked that" recommendations. Learners hide one count from the ACT vehicle registration table, such as how many of one car model are registered in Phillip, and predict it from the suburb's other models. The model misses by 6.52 vehicles on average; guessing from overall popularity misses by 9.60.

Woden Valley is a compact district of 12 suburbs, from Curtin and Hughes to Mawson and Torrens, with Woden Town Park in Phillip at its middle. ACT Government open data lists registered vehicles by make, model and suburb, which gives a Woden learner a real table of preferences to model.

Facts last verified 13 October 2026. Teaching is online; no Woden branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## AI, data and Python

Courses that suit the recommender project. A free trial lesson decides the level.

- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 13 to 17): Similarity, prediction and honest validation.
- [AI and ML Masterclass](/courses/ai-ml-masterclass-complete-college) (University and adult): Recommenders, baselines and model selection.
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data) (Ages 13 to 17): Tables, matrices and charts in Python.
- [AI Literacy for Kids (Ages 8 to 14)](/courses/ai-literacy-for-kids-course) (Ages 8 to 12): How recommendations work, explained with games.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Graduates, apartments and buses

Figures for the Woden Valley statistical area (ABS SA3 80109) from 2021 Census QuickStats, read on 13 October 2026, with the 2025 ABS estimate.

**Woden Valley counts**

| Measure | Value |
|---|---|
| Residents, 2021 Census | 39,279 |
| Estimated residents, 2025 | 41,600 |
| Median age | 39 |
| Families | 10,505 |
| Private dwellings | 17,065 |
| People per household | 2.4 |

**Woden shares compared with the ACT**

| Share | Woden Valley | ACT |
|---|---|---|
| Bachelor degree or higher | 50.4% (16,385) | 42.9% |
| Flat or apartment | 21.3% (3,258) | 19.4% |
| Bus to work | 5.4% (1,130) | 3.6% |
| Managers among workers | 18.9% (3,927) | 17.9% |

### Degrees

Half of Woden residents aged 15 and over held a bachelor degree or higher, well above the territory share.

### Transport

Buses carried 5.4% of Woden workers to work, and 5.1% walked, both above the ACT shares.

### Two figures

The 2021 Census count and the ABS 2025 estimate use different methods, so they appear side by side without subtraction.

The 2021 Census took place during the pandemic, so journey-to-work answers reflect that week. ABS shares are rounded and small counts slightly adjusted; parts can miss totals, and we print the published values.

## Predicting a hidden count

The registration table, dated 1 September 2026, has a row for each suburb, make, model and emissions band with more than ten vehicles. Laid out as a grid, that is 118 suburbs by 348 vehicle types, and only 6,936 of the 41,064 cells have a published number. Collaborative filtering predicts a hidden cell from similar vehicle types the same suburb does have.

**Average error predicting each of Woden's 590 published counts with it hidden (our calculation)**

| Method | Mean absolute error |
|---|---|
| Item-item collaborative filtering, 5 neighbours | 6.52 vehicles |
| Popularity: the type's ACT share times the suburb's total | 9.60 vehicles |
| The suburb's average count | 10.12 vehicles |

### How it works

Two vehicle types are similar if suburbs that register many of one also register many of the other. The prediction blends the suburb's counts of the five most similar types.

### Choosing five

The number of neighbours was picked on 4,498 cells in Belconnen, Tuggeranong and Gungahlin before Woden was touched. Five gave 6.60 there; fifty gave 8.68.

### Biggest cell

Woden's largest published count is one popular Toyota model in a single emissions band in Phillip: 172 vehicles.

### The suppression problem

Counts of ten or fewer are not published, so a blank cell can mean none or a handful. The model treats blanks as zero when measuring similarity, and it is only tested on cells above ten. Learners write both limits into their report, because a recommender trained on censored data can look better than it is.

Data come from the ACT Registered Vehicles by Make, Model and Suburb dataset on data.act.gov.au, licensed CC BY 4.0, downloaded on 13 October 2026. Woden suburbs are assigned by our test of ABS suburb outlines; the similarities, predictions and errors are our own calculation in NumPy.

## A matrix, cosine similarity and a fair test

The core is short; the care goes into what counts as a fair test.

**Lesson steps**

| Step | Learner task |
|---|---|
| 1 | Pivot the 6,936 rows into a suburbs by vehicle-type matrix with blanks as zero. |
| 2 | Compute item-item cosine similarities from every suburb except the one being tested. |
| 3 | Hide each Woden cell in turn, predict it, and record the absolute error. |
| 4 | Compare with two baselines and choose k on other districts, never on Woden. |

Step 2 matters: if the test suburb helps compute the similarities, the model has seen the answer. Step 4 matters just as much. Choosing the neighbour count by looking at Woden's own errors would make 6.52 look better than it deserves, so the choice is made elsewhere and simply applied here.

### Younger learners

Guess a friend's favourite snack from the snacks people with similar tastes chose.

### Teenagers

Build the matrix in NumPy, code the predictor and present the baselines fairly.

### Adults

Prototype product or content recommendations and test them against popularity first.

## Trees, street art and the 2027 calendar

Local details from ACT Government open data.

### Public trees

Woden suburbs hold 73,127 public tree records by our count, 33,672 labelled native and 24,507 exotic.

### Street art

Sixteen artworks are listed in the district, half of them street art.

### Second half of 2027

ACT Term 3 in 2027 runs from Tuesday 20 July to Friday 24 September.

**District used** Woden Valley is the ABS statistical area of about 28.6 square kilometres; 12 named suburbs fall inside it by our test.

## From snack guesses to recommenders

Ages are a starting guide only.

- **Ages 6 to 9: Likes and patterns** Block-code games about sorting and matching tastes. [Scratch Coding for Kids](/courses/scratch-programming-complete-course), [AI Literacy for Kids (Ages 8 to 14)](/courses/ai-literacy-for-kids-course)
- **Ages 8 to 12: First data** Tables, counting and simple predictions in Python. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [Maths Through Coding](/courses/maths-through-coding)
- **Ages 13 to 17: Machine learning** Similarity, baselines and fair testing. [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens), [Data Science for Teens](/courses/data-science-course-for-teens-python-data)
- **University and adult: Applied AI** Recommenders and evaluation for work. [AI and ML Masterclass](/courses/ai-ml-masterclass-complete-college), [Statistics & Probability](/courses/statistics-probability-maths-course)

## Is building a recommender still worth learning?

Yes, because knowing how one fails is worth more than calling one.

Library code will give you a recommender in minutes. It will not tell you that the input hides every count of ten or fewer, or that tuning on the test district inflates the score.

A Woden learner who has met both problems in real data will ask the right questions of any AI system that recommends, ranks or predicts.

Our AI classes start with the data and end with an honest comparison. The longer argument is in [the case for learning to code in 2026](/blog/is-coding-worth-learning-2026).

## Woden lessons, live online

Classes run over video, so learners join from any Woden suburb.

- **Taught live** A teacher runs each lesson and checks work as it happens.
- **ACT terms** Lessons follow the school terms and rest in holidays.
- **Free first lesson** A trial lesson, then a short written plan.
- **Groups** Five to ten learners per level, or one-to-one.
- **Schedule** Two lessons a week, about eight a month.
- **India hours** A 6:30pm Woden lesson is 1pm in India while daylight saving runs.

**Summer time** Canberra runs on Sydney time in the IANA database; in 2026 to 2027, daylight saving lasts from 4 October to 4 April.

## Woden class fees

All learners pay the same fees.

- First class: USD 0. Lesson one is free, followed by a plan.
- Group tuition: USD 100 a month. Group lessons: about eight a month, five to ten learners.
- Private tuition: USD 150 a month. Private lessons: about eight a month with one teacher.

Fees are in US dollars and start only once the trial has set a course and weekly time. The pricing page explains holidays and missed lessons.

## Woden AI and programming questions

### How many people live in Woden Valley?

The 2021 Census counted 39,279 residents in the district, median age 39. The ABS estimate for 2025 is 41,600.

### What is collaborative filtering?

A way to predict a missing value from the pattern of other values, such as estimating one suburb's count of a car model from models that tend to appear together.

### Did the AI beat simple guesses?

Yes on this data: 6.52 vehicles average error against 9.60 for a popularity guess, with the neighbour count chosen on other districts.

### What does suppression mean here?

Counts of ten or fewer are not published, so missing cells are uncertain rather than zero.

### Is this suitable for teenagers?

Yes, for confident Python learners. Younger children explore the same idea with guessing games.

### Which suburbs are in Woden Valley?

Our test places 12 named suburbs in the district, including Phillip, Curtin, Hughes, Mawson and Torrens.

### Do you have a centre in Woden?

No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.

### What do Woden classes cost?

The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of five to ten, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.

### How are groups decided?

By level and pace, five to ten learners, not by age or suburb. One-to-one lessons suit anyone no group time fits.

### Can adults study AI here?

Yes. Adults learn in adult groups or privately, often with data from their own work.

## Explore further

Woden learners can continue with the [Canberra page](/vibe-coding-and-ai-agents-classes-in-canberra), the territory-wide [ACT guide](/coding-and-ai-classes-in-australian-capital-territory) and [AI classes for teenagers](/ai-classes-for-teens-australia).

## Contact

Book the free class on [https://learn.modernagecoders.com/ai-and-programming-classes-in-woden-canberra](https://learn.modernagecoders.com/ai-and-programming-classes-in-woden-canberra#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
