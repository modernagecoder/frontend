---
title: "AI and Programming Classes in Wentworthville, Sydney"
description: "Live online AI and programming classes for Wentworthville learners aged 6 to 67, with a project that tests models of station data honestly. First lesson free."
canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-wentworthville-sydney
source: src/pages/ai-and-programming-classes-in-wentworthville-sydney.html
---
> How to build models and, just as important, how to test them honestly. We teach live online in small groups, from Scratch at six to Python and machine learning for teenagers and adults. Wentworthville covers about 3.12 square kilometres; the 2021 Census counted 15,098 residents, median age 33.

[Home](/) / [Australia](/coding-classes-in-australia) / [New South Wales](/coding-and-ai-classes-in-new-south-wales) / [Sydney](/best-coding-classes-in-sydney) / Wentworthville

Wentworthville, western Sydney / Live online

# AI and programming classes in Wentworthville

**What should AI and programming classes teach Wentworthville learners?** How to build models and, just as important, how to test them honestly. We teach live online in small groups, from Scratch at six to Python and machine learning for teenagers and adults. Wentworthville covers about 3.12 square kilometres; the 2021 Census counted 15,098 residents, median age 33.

Fit a model to Wentworthville station's monthly entries and the score can look superb: 0.934 on the standard measure, R squared, meaning 93.4% of the up-and-down is explained. Hide the last six months, refit on the rest and score those six, and the same kind of model gets 0.699 or minus 0.984, depending only on which average you compare it with. Both numbers are correct. Learning why is the most useful hour a future AI builder can spend.

Facts last verified 10 October 2026. Teaching is online; no Wentworthville branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Courses that build and test models

Each course reaches models that are checked on data they have not seen. The first lesson is free and decides the level; no card is asked for.

- [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids) (Ages 8 to 12): Guessing rules from examples, then testing them on new ones.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 13 to 17): Regression, classification and honest train and test splits.
- [Python for Teens](/courses/python-complete-masterclass-teens) (Ages 12 to 17): The Python, lists and files needed before fitting any model.
- [Statistics & Probability](/courses/statistics-probability-maths-course) (University and adult): Means, variation and the maths behind R squared.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Apartments, young children and many graduates

The 2021 Census picture of the Wentworthville suburb and locality, set beside New South Wales and Australia.

**Wentworthville, 2021 Census**

| Measure | Value |
|---|---|
| Residents | 15,098 |
| Median age | 33 |
| Families | 3,926 |
| Private dwellings | 5,721 |
| Average people per household | 2.9 |

**Wentworthville set against NSW and Australia**

| Indicator | Wentworthville | NSW | Australia |
|---|---|---|---|
| Flats or apartments among occupied homes | 40.0% (1,958) | 21.7% | 14.2% |
| Townhouses, terraces and semis | 22.3% (1,089) | 11.7% | 12.6% |
| Bachelor degree or higher (aged 15 and over) | 47.7% (5,801) | 27.8% | 26.3% |
| Children aged 0 to 4 | 7.7% (1,169) | 5.8% | 5.8% |
| Couple families with children | 57.2% (2,246) | 44.7% | 43.7% |

### Two homes in five are flats

At 40.0%, the apartment share was nearly double the state figure; separate houses were 37.2%.

### Young families

Children under five were 7.7% of residents, and the median age was 33.

### Degrees

Nearly half of residents aged 15 and over held a bachelor degree or higher, 47.7%.

All figures are for the suburb and locality. The bureau randomly adjusts small cells, so published parts are never added together on this page.

## Four models and three R squared scores

The data is 23 months of entries at Wentworthville station, from 68,953 in January 2025 to 97,307 in March 2026. Each model is fitted by least squares on October 2024 to February 2026 and then asked to predict March to August 2026.

**R squared and error for each model (our NumPy run)**

| Model | Fitted on all 23 months | Held out, against the test mean | Held out, against the training mean | Average miss on held-out months |
|---|---|---|---|---|
| Overall average | 0.000 | -5.598 | 0.000 | 7,331 |
| Straight-line trend | 0.094 | -7.218 | -0.246 | 8,334 |
| Month of the year | 0.875 | -2.411 | 0.483 | 5,103 |
| Trend and month | 0.934 | -0.984 | 0.699 | 3,865 |

### Seen data flatters

With 13 parameters and 23 points, the trend-and-month model scores 0.934 in-sample. Any model with that many knobs can follow the data it has already seen.

### The baseline decides

R squared compares your errors with those of a plain average. Against the held-out months' own average the trend-and-month model scores -0.984; against the training average, 0.699.

### Negative is allowed

A negative R squared means the model did worse than the chosen average. The straight-line trend does worse than either average on the held-out months.

### Which number would a library print?

scikit-learn's r2_score(y_test, y_pred) uses the mean of y_test as its baseline, so it reports the -0.984 figure. That baseline knows the test period's average in advance, which a forecaster never does.

Entry counts are Transport for NSW monthly Opal figures; the models, scores and errors are our own calculation. We give no reason for any month being high or low.

## What a fair report on the model includes

Learners finish by writing the report a careful reader would want, using Wentworthville and its neighbours for scale.

**Average monthly entries, October 2024 to August 2026 (our calculation)**

| Station | Average a month | Rank among 270 train stations with all 23 months |
|---|---|---|
| Westmead | 151,164 | 35th |
| Wentworthville | 87,159 | 58th of 270 |
| Pendle Hill | 70,999 | 68th |

### Children

Guess tomorrow's classroom temperature from a week of readings, then check the guess and say how far off it was.

### Teenagers

Fit the four models, hold out six months and report every score with its baseline named.

### Adults

Ask any vendor or analyst which data their accuracy was measured on, and against what.

Transport for NSW releases the station figures under a Creative Commons licence and is unconnected with Modern Age Coders.

## Four state schools across two councils

The NSW school locations file lists four government schools with a Wentworthville address, two in Cumberland council and two in City of Parramatta.

**State schools whose listed suburb is Wentworthville**

| School | Level | First teacher | Council |
|---|---|---|---|
| Wentworthville Public School | Primary | 1891 | Cumberland |
| Darcy Road Public School | Primary | 1955 | Parramatta |
| Pendle Hill Public School | Primary | 1955 | Cumberland |
| Pendle Hill High School | Secondary | 1965 | Parramatta |

### Summer break

Eastern division schools are off from Friday 18 December 2026 to Wednesday 27 January 2027.

### Autumn break 2027

Monday 12 April to Friday 23 April, after Term 1 ends on Friday 9 April.

### Holiday timetable

Wentworthville classes also stop for these breaks and resume in their usual weekly slot.

## From guessing games to tested models

The ages are guidelines; the free first lesson finds the right level.

- **Ages 6 to 10: Scratch and patterns** Games that spot patterns, guess the next move and keep score. [Scratch Coding for Kids](/courses/scratch-programming-complete-course), [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)
- **Ages 10 to 13: First Python** Lists, averages and checking a guess against the answer. [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids), [Python and AI for Kids](/courses/python-ai-kids-masterclass)
- **Ages 13 to 18: Models and testing** Regression, train and test splits and scores with named baselines. [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens), [Python for Teens](/courses/python-complete-masterclass-teens)
- **University and adult: Honest evaluation** Validation, error measures and reports decision makers can trust. [Data Science Course](/courses/data-science-complete-masterclass-college), [Statistics & Probability](/courses/statistics-probability-maths-course)

## High scores on seen data are easy to come by

This is the most common way AI results mislead, and it needs no bad intent.

An assistant asked to model Wentworthville's entries will happily fit the trend-and-month model and report R squared 0.934. Nothing in the output says the score was measured on the same months used for fitting, or that a fair test gives a very different number.

Learners who have produced all three scores themselves ask two questions of any reported accuracy: tested on what, and compared with what. Those two questions are most of model evaluation.

In 2026 anyone can fit a model with one prompt; Wentworthville learners who can test one honestly will be the ones others rely on. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Live lessons for Wentworthville learners at home

Classes take place on live video, joined from home in Wentworthville.

- **Real-time teaching** Code and models are built during the class, with the teacher watching each step.
- **Fits NSW schooling** Teachers use NSW stages and years and plan around the state calendar.
- **Trial lesson free** One full lesson without charge, ending in a suggested course and time.
- **Five to ten learners** Groups share a level; individual teaching is available instead.
- **Regular sessions** Two a week at fixed times, close to eight a month, with breaks shared early.
- **Teachers in India** A 5:30pm Wentworthville lesson is noon India time in Sydney summer time and 1pm the rest of the year.

**Daylight saving and India** Sydney moves to daylight saving from Sunday 4 October 2026 until Sunday 4 April 2027. India does not, so Sydney is 5 hours 30 minutes ahead during that time and 4 hours 30 minutes ahead otherwise. Lessons are always timetabled in Sydney time.

## Wentworthville lesson fees

A single flat price list for all courses.

- First class: USD 0. The opening lesson is free, and the teacher then suggests a course and a time.
- Group tuition: USD 100 a month. Two group lessons a week, about eight a month, in a class of five to ten at one level.
- Private tuition: USD 150 a month. Private lessons twice a week, again about eight a month.

Wentworthville families pay in US dollars, and payment begins only after the trial has agreed a course and slot. See the pricing page for holidays, missed lessons and switching formats.

## Wentworthville AI and programming questions

### How many people live in Wentworthville?

The 2021 Census QuickStats for the Wentworthville suburb and locality counted 15,098 residents, median age 33, in 3,926 families and 5,721 private dwellings.

### What is R squared?

It is one minus the model's squared errors divided by the squared errors of a plain average. A score of 1 is perfect, 0 matches the average, and below 0 is worse than the average.

### Why can the same model get different R squared scores?

Because the score depends on which data it is measured on and which average it is compared with. In the Wentworthville project one model scores 0.934, 0.699 and -0.984.

### How busy is Wentworthville station?

From October 2024 to August 2026 it averaged 87,159 entries a month in Transport for NSW figures, 58th of 270 train stations with complete data by our calculation.

### Which state schools have a Wentworthville address?

Wentworthville Public School and Pendle Hill Public School in Cumberland council, and Darcy Road Public School and Pendle Hill High School in City of Parramatta.

### What age can learners start?

Scratch from six. Model-testing projects like this one suit learners from about 14 who know some Python.

### What setup is needed at home?

A keyboard computer such as a laptop, desktop or Chromebook, a working microphone and sound, and a dependable internet link.

### Do you run classes in Wentworthville itself?

No. We teach only online and have no premises anywhere in Australia, including Wentworthville. Our contact phone number is an Indian number.

### How much do Wentworthville lessons cost?

The first lesson is free. A group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners; one-to-one is USD 150 a month on the same plan. Nothing is charged before a course and time are agreed.

### How big are the groups?

Five to ten learners, grouped by level and goals rather than age. If no group fits the learner's schedule, one-to-one lessons are offered instead.

## More for Wentworthville learners

Parramatta, two stops east, has its own guide at [coding and AI classes in Parramatta](/best-coding-and-ai-classes-in-parramatta-sydney), and Blacktown, further west on the same line, at [vibe coding and AI agents classes in Blacktown](/vibe-coding-and-ai-agents-classes-in-blacktown-sydney). Elsewhere in Cumberland council see [vibe coding and AI agents classes in Auburn](/vibe-coding-and-ai-agents-classes-in-auburn-sydney), and for the whole city [coding classes in Sydney](/best-coding-classes-in-sydney).

## Contact

Book the free class on [https://learn.modernagecoders.com/ai-and-programming-classes-in-wentworthville-sydney](https://learn.modernagecoders.com/ai-and-programming-classes-in-wentworthville-sydney#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
