---
title: "AI and Programming Classes in Roundhay, Leeds | Ages 6 to 67"
description: "Live online AI, programming, Python and vibe coding lessons for Roundhay, Oakwood and Gledhow learners in Leeds LS8, ages 6 to 67. The first lesson is free."
canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-roundhay-leeds
source: src/pages/ai-and-programming-classes-in-roundhay-leeds.html
---
> Roundhay ward in Leeds counted 23,809 usual residents at the 2021 census, and Roundhay, Oakwood and Gledhow are the suburban areas recorded in its LS8 postcode district. AI, programming, Python, vibe coding and maths lessons are open to anyone from six to 67 and run on live video with tutors in India, either privately or in a class of five to ten at a shared level. Sound reasoning is taught before any tool, so a learner can ask the awkward question when a model's score looks good. We give the first lesson free and close it with a course suggestion. The Roundhay project tunes a machine learning model on Census data for all 2,607 small areas of Leeds and asks how to spend a budget of 16 attempts: on a tidy grid, at random, or with a Latin hypercube. Continuing costs USD 100 a month in a class or USD 150 a month privately.

[Home](/) / [United Kingdom](/coding-classes-in-united-kingdom) / [Leeds](/best-coding-class-in-leeds) / Roundhay

Roundhay, Leeds, West Yorkshire / Live online

# AI and programming classes in Roundhay

**Which are the best AI and programming classes in Roundhay?** Roundhay ward in Leeds counted 23,809 usual residents at the 2021 census, and Roundhay, Oakwood and Gledhow are the suburban areas recorded in its LS8 postcode district. AI, programming, Python, vibe coding and maths lessons are open to anyone from six to 67 and run on live video with tutors in India, either privately or in a class of five to ten at a shared level. Sound reasoning is taught before any tool, so a learner can ask the awkward question when a model's score looks good. We give the first lesson free and close it with a course suggestion. The Roundhay project tunes a machine learning model on Census data for all 2,607 small areas of Leeds and asks how to spend a budget of 16 attempts: on a tidy grid, at random, or with a Latin hypercube. Continuing costs USD 100 a month in a class or USD 150 a month privately.

Machine learning models have settings that are chosen before training starts, such as how fast to learn or how much data each step sees. They are called hyperparameters, and finding good values means training the model again and again, which costs time and money. So the real question is how to search when tries are limited. The obvious plan is a grid: a few values of each setting, every combination. The less obvious plan is to pick the combinations at random. This project runs both, plus a third design called a Latin hypercube, on a model that predicts car ownership across Leeds, with exactly 16 tries each.

Facts last verified 30 September 2026. Teaching is online; no Roundhay branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Roundhay courses in reasoning, Python and AI

Pick the row that matches the learner's age. All four courses open with a live lesson that costs nothing and needs no card.

- [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids) (Ages 7 to 12): Our how-to-think course: searching sensibly when you cannot try everything.
- [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev) (Ages 8 to 12): A child explains a Scratch game, an AI builds it, the child finds the faults.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 13 to 17): Machine learning in Python, including tuning a model on Leeds Census data.
- [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college) (Students and adults): Python through data science, model tuning and AI agents.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Roundhay, Oakwood and Gledhow

The census figure for Roundhay ward, and the places recorded in LS8.

**Roundhay in the 2021 census (ONS table TS001, via Nomis)**

| Area | Usual residents |
|---|---|
| Roundhay ward | 23,809 |

The count is for the council ward called Roundhay. Postcodes.io records Roundhay, Oakwood and Gledhow as suburban areas of Leeds in LS8, a postcode district that also reaches into the Chapel Allerton, Moortown, Gipton and Harehills and Killingbeck and Seacroft wards. Leeds schools follow England's national curriculum; tell us when the holidays are and we leave those weeks empty.

### Leeds, West Yorkshire and why thinking comes first

For the whole city see [coding classes in Leeds](/best-coding-class-in-leeds); for the county, [West Yorkshire](/coding-classes-in-west-yorkshire). Our reasons for teaching reasoning before tools are on [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

## Sixteen tries to tune a model: grid search, random search and a Latin hypercube

One model, two settings, a fixed budget, and three ways to spend it.

The learner downloads four Census 2021 tables from the Nomis API for the 2,607 output areas of Leeds, which hold 341,381 households, 98,083 of them with no car or van. A gradient boosting model predicts each area's no-car share from its population density, its share of one-person households and its share of flats. Two settings are searched: the learning rate, anywhere from 0.001 to 1, and the subsample, the fraction of areas each tree sees, from 0.3 to 1. Every candidate is scored by cross-validation on 70% of the areas; the other 30% are kept back for a final check. Guessing the average for every area is wrong by 15.62 points.

**Lowest cross-validated error found with 16 tries, our Python run on Census 2021 data for Leeds**

| Search method | Typical result | Worst of 20 runs | Ahead of the grid |
|---|---|---|---|
| Grid, 4 learning rates by 4 subsamples | 8.587 | One run only | Not applicable |
| Random search | 8.479 | 8.526 | 20 of 20 runs |
| Latin hypercube | 8.474 | 8.496 | 20 of 20 runs |

The grid reveals why it loses. Reading across its rows, the error is about 14.5 at a learning rate of 0.001, about 9.6 at 0.01, about 8.6 at 0.1, and between 11.63 and 27.24 at 1.0. The learning rate decides almost everything, and the subsample hardly matters except when the rate is far too high. Yet the grid spends its 16 tries on only four different learning rates. Random search tries 16 different ones, so it lands closer to the sweet spot, near 0.04, every time. A Latin hypercube goes one step further and guarantees the 16 values of each setting are evenly spread, which made its worst run (8.496) better than random search's worst (8.526).

The gain is real but modest, a little over one per cent, and it carries to the held-back areas: the grid's winner scores 8.874 there, and the overall winner from all our searches scores 8.567. Tuning polishes a model; it does not rescue a poor one. The bigger lesson is about where to spend effort: when one setting matters far more than the others, a grid wastes most of its budget.

### Ages 8 to 11

Hunt for treasure on a squared map with 16 guesses: a neat pattern, or scattered picks?

### Ages 11 to 15

Train a small model in Python with three different learning rates and compare the errors.

### Ages 15 and up

Run grid, random and Latin hypercube searches with equal budgets and explain which wins and why.

### Census data, our search

Household, car, housing and density counts are Office for National Statistics Census 2021 data from Nomis, under the Open Government Licence. The model, the three searches and every error figure are our own work.

## What this teaches about vibe coding and AI agents

A limited budget should go where it changes the answer.

**From the Roundhay search to working with AI**

| In the tuning project | When AI tunes or tests for you |
|---|---|
| The grid tried only four learning rates | Tidy plans can waste most of their effort |
| Random search won 20 times out of 20 | Varying everything at once explores more |
| Latin hypercube had the safest worst case | Designed spread beats pure chance |
| The gain was about one per cent | Report how much, not just which |
| 30% of areas were held back | Confirm on data the search never saw |

Ask an AI assistant to "tune this model" and it will often write a grid search, because grids are easy to explain. In vibe coding, a learner states the goal and an AI produces the code; Roundhay learners go on to ask what the budget is, which settings matter, and whether the winner was checked on unseen data. AI agents that run experiments unattended spend real compute on the same choice, so the search plan belongs in their instructions. We hold agent building until a learner is fluent in Python, generally from the later teens, and Copilot Studio agents are taught in one-to-one lessons only. More is on [AI agents for UK students](/ai-agents-course-for-students-uk) and on [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk).

This page is independent of the Office for National Statistics, Nomis and postcodes.io, whose open data it uses. The analysis is ours, and so are any mistakes in it.

## From treasure maps to tuned models

A year group tells us roughly where to begin; the free lesson tells us exactly.

- **Years 2 to 7: How to think** Searching, guessing well and learning from each try. [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **Years 4 to 8: Vibe coding for kids** Games and apps made with AI help and tested by the child. [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev), [Python and AI for Kids](/courses/python-ai-kids-masterclass)
- **Years 9 to 13: Python and machine learning** Models, settings and fair testing beside GCSE and A level. [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens), [Python for Teens](/courses/python-complete-masterclass-teens)
- **Adults: Machine learning and agents** Training, tuning and AI agents, step by step in Python. [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college), [Generative AI Course](/courses/complete-generative-ai-masterclass-college)

## What is hyperparameter tuning, and is grid search or random search better?

Hyperparameter tuning is the search for the settings that make a model perform well, and with a limited number of tries random search usually beats grid search, because it tests many more distinct values of whichever setting turns out to matter.

Tuning a model on 2,607 Leeds Census areas with 16 tries, a 4 by 4 grid reached an error of 8.587, while random search reached a median 8.479 and a Latin hypercube 8.474, both ahead of the grid in 20 of 20 runs.

Learners who have run the three searches ask of any AI-tuned model: how many settings were tried, how were they chosen, and was the winner checked on fresh data?

A Roundhay teenager who knows where a search budget is wasted can direct an AI's experiments instead of just watching them, and that starts with writing the code. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## How lessons reach Roundhay

Bring a computer with a webcam and a connection steady enough for video; that is all.

- **Hands on** Students do the typing and the running. The tutor follows over screen share and asks them to predict each result first.
- **The trial sets the start** In the free session we see what the learner already knows and note any exam board.
- **First lesson free** Nothing to pay for the opening lesson, which ends with our course advice.
- **Classes of five to ten** Grouped by stage, with classmates from all over the UK.
- **Two a week** In term time.
- **Your time stays fixed** When British clocks change, the tutor adjusts, not you.

**Why online** In any one neighbourhood it is rare to find five learners at one level who are free together. Video lets the class form anyway.

## Roundhay fees

Roundhay learners are on our international rate, the one for all countries other than India.

- First class: USD 0. One complete free lesson, then a recommendation.
- Group tuition: USD 100 a month. Roughly eight live lessons a month in a small class.
- Private tuition: USD 150 a month. Roughly eight live one-to-one lessons a month.

Our fees are in US dollars; there is no sterling tariff. Billing starts only when the trial has agreed a course and a weekly slot, and the pricing page explains holidays, absences and changing format.

## Roundhay questions

### How many people live in Roundhay?

Roundhay ward had 23,809 usual residents at the 2021 census.

### Are AI and programming classes available online in Roundhay?

Yes. Lessons are live video calls for ages 6 to 67 in Roundhay, Oakwood, Gledhow and across Leeds.

### What is a hyperparameter?

A setting chosen before a model is trained, such as the learning rate or the number of trees, as opposed to the values the model learns from data.

### What is a Latin hypercube?

A way of choosing trial points so that each setting's range is divided into equal slices and every slice is used exactly once, giving an even spread with few trials.

### What does the Roundhay project involve?

Tuning a gradient boosting model on Census data for 2,607 Leeds areas with 16 tries, comparing a grid, random search and a Latin hypercube, then checking the winner on held-back areas.

### Do you teach vibe coding?

Yes, to all ages: learners describe the program, an AI drafts it, and they test and fix it.

### When are learners ready to build AI agents?

When they are fluent in Python, generally from the later teens; Copilot Studio agents are one-to-one lessons only.

### Do you support GCSE and A level?

Yes, in computer science and maths, with understanding as the goal and no promised grades.

### What are the fees?

The first lesson is free, then USD 100 a month in a class or USD 150 a month privately.

### Do lessons pause for school holidays?

Yes; send the dates.

## More Leeds pages

Different projects on each page: [Headingley](/online-coding-and-python-classes-in-headingley-leeds) (a generator over 1.7 million postcodes), [Horsforth](/best-coding-and-ai-classes-in-horsforth-leeds), [Leeds](/best-coding-class-in-leeds) and [Harrogate](/ai-and-programming-classes-in-harrogate). For other areas, begin at the [UK hub](/coding-classes-in-united-kingdom).

## Contact

Book the free class on [https://learn.modernagecoders.com/ai-and-programming-classes-in-roundhay-leeds](https://learn.modernagecoders.com/ai-and-programming-classes-in-roundhay-leeds#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
