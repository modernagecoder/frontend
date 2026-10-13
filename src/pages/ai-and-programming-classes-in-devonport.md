---
title: "AI and Programming Classes in Devonport, Tasmania"
description: "Live online AI and programming classes for Devonport teens and adults: Python, decision trees and Tasmanian map data. Small groups or one to one, first lesson free."
canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-devonport
source: src/pages/ai-and-programming-classes-in-devonport.html
---
> One where the learner builds the model in Python, measures it honestly and can explain each choice to a live teacher. Devonport's urban area held 31,721 residents in 2021. We teach online and in real time, privately or in a small group at the learner's stage, and the first lesson is free.

[Home](/) / [Tasmania](/coding-and-ai-classes-in-tasmania) / [Australia](/coding-classes-in-australia) / Devonport

Devonport, Tasmania / Live online

# AI and programming classes in Devonport

**Which AI and programming class is best for a Devonport learner?** One where the learner builds the model in Python, measures it honestly and can explain each choice to a live teacher. Devonport's urban area held 31,721 residents in 2021. We teach online and in real time, privately or in a small group at the learner's stage, and the first lesson is free.

Land Tasmania maps small structures across the state as points, each tagged with a type. In a rectangle over Devonport there are 5,265 of them, and 4,242 are tagged Shed. Train the simplest decision tree to separate sheds from everything else, using how close each point sits to its neighbour, and something odd happens. Score the split by Gini impurity and the strongest cut, at 10.77 m, is a measurable improvement. Score it by the share of wrong guesses and no cut anywhere improves anything, because both sides are still mostly sheds. Understanding why the textbooks prefer Gini is the start of understanding how machine learning chooses.

Facts last verified 9 October 2026. Teaching is online; no Devonport branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 15 to 20 students per group.

## Courses for Devonport teens and adults

Four options matched to the project below. The free trial settles which suits, and no payment details are taken.

- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 13 to 17): Decision trees, accuracy and the scores models use to choose their splits.
- [Python for Teens](/courses/python-complete-masterclass-teens) (Ages 13 to 17): The Python needed to load map data, compute distances and count classes.
- [Artificial Intelligence Course](/courses/artificial-intelligence-complete-masterclass-college) (University and adult): Tree learning, impurity measures and model evaluation, built from first principles.
- [Data Science Course](/courses/data-science-complete-masterclass-college) (Adults working with data): Feature building and honest baselines on messy public datasets.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## A Tasmanian city of 31,721

Census 2021 QuickStats for the Devonport urban area, beside Tasmania and Australia.

**Devonport at the 2021 Census**

| Count | Devonport | Tasmania | Australia |
|---|---|---|---|
| Residents | 31,721 | Not given | Not given |
| Median age | 43 | 42 | 38 |
| Families | 8,712 | Not given | Not given |
| Private dwellings | 14,512 | Not given | Not given |
| Separate houses, share of occupied dwellings | 11,453, or 88.2% | 87.7% | 72.3% |
| Technicians and trades workers | 2,126, or 15.5% | 13.9% | 12.9% |
| Bachelor degree or above, aged 15 and over | 3,324, or 12.6% | 21.9% | 26.3% |

### Barely any apartments

Devonport counted only 34 flats or apartments, 0.3% of occupied homes, against 5.3% across Tasmania.

### Hands-on work

Labourers made up 15.0% of employed residents and technicians and trades workers 15.5%, both above the state shares.

### Young adults

There were 1,741 residents aged 15 to 19 and 1,714 aged 20 to 24 on Census night.

Small random adjustments are applied to census cells for privacy, so table rows may not sum to the printed totals. Each figure appears exactly as the ABS released it, and none of them is our own total.

## Why does one scoring rule see progress and the other see none?

Land Tasmania's LIST Building Points over Devonport, a one-split decision tree, and two ways to judge the split.

**Strongest single split on distance to the nearest neighbour (our measurement, 8 October 2026)**

| Group | Points | Share tagged Shed | Tree predicts |
|---|---|---|---|
| All points, before splitting | 5,265 | 80.57% | Shed |
| Nearest neighbour within 10.77 m | 895 | 91.4% | Shed |
| Nearest neighbour further than 10.77 m | 4,370 | 78.4% | Shed |

### 1. Gini impurity

Gini measures how mixed a group is. It starts at 0.3131 for all points and falls to a weighted 0.3083 after the split, a gain of 0.0048. Small, but the tree knows it has learnt something.

### 2. Misclassification error

Error counts wrong guesses. Both halves still predict Shed, so the same points are wrong as before. We tried all 3,623 possible cut points and error did not move at any of them.

### 3. Why it matters

A tree that grows only when error falls would stop at the root. A tree using Gini makes this split, and a later split inside the purer group may then change predictions.

### A second feature that does change a guess

Counting how many other points lie within 30 m gives a different picture. The top Gini cut separates 47 points with more than 6 neighbours, of which only 29.8% are tagged Shed, so the tree predicts not-shed there and accuracy rises from 80.57% to 80.93%. Here both scoring rules agree, which shows learners that the disagreement depends on whether a split changes any majority.

The layer holds structures with every side shorter than 25 metres; larger buildings are mapped separately as outlines, which is why sheds dominate the points. Distances are our approximations on a flat projection. The tree describes the map labels and is not a survey of how any building is used.

## Three things a decision tree measures, and when they disagree

Learnt on the Devonport points, then applied to any classification task.

**Comparing split scores on the Devonport points**

| Measure | Before | After the 10.77 m split |
|---|---|---|
| Gini impurity | 0.3131 | 0.3083 |
| Share of points misclassified | 19.43% | 19.43% |
| Accuracy of the prediction | 80.57% | 80.57% |
| Accuracy of always guessing Shed | 80.57% | Unchanged baseline |

The last row is the most important habit of all. A model that guesses the commonest label every time is already right 80.57% of the time here, so any accuracy figure must beat that before it means anything. Learners write the baseline first, and only then train the tree.

### Secondary students

Compute Gini and error by hand for small groups, then check the numbers in Python on the full map.

### University students

Impurity measures, entropy, greedy tree growth and why the criterion changes the shape of the final tree.

### Adults at work

Reading model reports critically: baselines, imbalanced classes and why accuracy alone can mislead.

Modern Age Coders has no tie to Land Tasmania, the Devonport City Council or the ABS. The map layer and census data are theirs; the splits, scores and accuracies are our own analysis.

## Tasmanian terms and daylight saving

School dates and clock changes that shape a Devonport timetable.

### Term 4 in 2026

The Tasmanian Department for Education, Children and Young People lists Term 4 from 19 October to 18 December 2026.

### Term 1 in 2027

Students return on 4 February 2027, with Term 1 running to 9 April.

### Summer time

Tasmania moves its clocks forward on the first Sunday in October and back on the first Sunday in April.

**A midday slot in India** A 4:30pm Devonport lesson falls at noon India time in winter and at 11am in summer, within our teachers' working day either way.

## From counting labels to models with honest baselines

Ages here are rough. The free lesson places each learner.

- **Ages 13 to 14: Counting and rules** Counting categories, writing if-rules by hand and checking how often they are right. [Python for Teens](/courses/python-complete-masterclass-teens), [Data Science for Teens](/courses/data-science-course-for-teens-python-data)
- **Ages 15 to 18: First models** Decision trees, Gini impurity and baselines, trained on real map data. [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens), [Statistics & Probability](/courses/statistics-probability-maths-course)
- **University: Learning algorithms** Tree growth, entropy, pruning and evaluation on imbalanced data. [Artificial Intelligence Course](/courses/artificial-intelligence-complete-masterclass-college), [Data Science Course](/courses/data-science-complete-masterclass-college)
- **Adults: Models at work** Building and checking classifiers for business data without fooling yourself. [Data Analysis Course](/courses/data-analysis-mastery-course-college), [Python Automation Course](/courses/python-ai-automation-masterclass-college)

## Would an AI assistant explain why its tree stopped growing?

Only if the learner knew to ask.

Ask an assistant for a decision tree that scores splits by error rate and it will write one. On the Devonport points it returns a single leaf predicting Shed with 80.57% accuracy, which sounds respectable. Nothing in the output says that this is exactly the do-nothing baseline, or that a different score would have let the tree learn.

Our Devonport learners write the baseline before any model, compare split scores side by side and ask why a number did not move. The assistant is useful for the boilerplate; the questions that expose a stalled model come from understanding what each score measures.

A Devonport learner who has seen a model stall at its own baseline will interrogate AI-generated results in 2026, and that habit is the reason programming still matters. The longer argument is in [why coding still matters in 2026](/blog/is-coding-worth-learning-2026).

## Miandetta to Quoiba, one live lesson

An online class reaches every Devonport suburb equally, with no travel for anyone.

- **Suburb makes no difference** A learner in Miandetta and another in Quoiba join the same lesson from home.
- **Tasmanian year levels** Teaching follows Tasmanian year levels, including Years 11 and 12, in English.
- **Free opening lesson** You build something real with a teacher, then hear a suggested level, course and time; no card details needed.
- **Fifteen to twenty learners** Groups at one level drawn from Tasmania, the mainland and overseas.
- **Two a week** Around eight lessons a month, with Tasmanian holidays planned in advance.
- **Clock changes covered** When summer time starts or ends, the lesson keeps its Devonport time.

**Confirmed in Devonport time** Every lesson time is written in Tasmanian time, so families never need to convert anything.

## What AI and programming classes cost in Devonport

Three lines cover every price.

- First class: USD 0. An opening lesson at no cost, ending with a level, course and time.
- Group tuition: USD 100 a month. A month in a group of fifteen to twenty, normally eight lessons.
- Private tuition: USD 150 a month. Normally eight private lessons a month with a single teacher.

Devonport learners pay the same US dollar rate as the rest of Australia, with no island loading. Payment only begins after the trial has agreed a course and slot; the pricing page covers holidays, missed lessons and switching between formats.

## Devonport AI and programming questions

### How many people live in Devonport?

The Devonport urban area counted 31,721 residents in 2021, with a median age of 43.

### What is Gini impurity?

Gini impurity measures how mixed a group of labels is: the chance that two items drawn at random from the group have different labels. A pure group scores 0, and decision trees choose splits that lower it.

### What is the Devonport decision tree project?

Learners load 5,265 building points from Land Tasmania's LIST, build distance features in Python, and compare how Gini impurity and misclassification error score the same splits, finding a cut that one rule rewards and the other ignores.

### Do I need to know Python first?

No. Beginners learn Python alongside the AI ideas, starting with counting and simple rules before any model.

### Is this useful for TASC subjects?

The programming and data skills overlap with TASC Computer Science. Lessons build understanding; assessed work stays the student's own and no results are promised.

### What times do Devonport lessons run?

After school or at weekends, agreed in the trial and confirmed in Tasmanian time. Summer time changes the gap to India, not the lesson.

### Can younger children join?

Yes, from age 6, usually starting with Scratch. This page is written for teenagers and adults.

### Is there a Modern Age Coders centre in Devonport?

No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.

### What do Devonport coding classes cost?

The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.

### How big are the groups?

Fifteen to twenty learners, matched on level, pace and what they want to build rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.

## More for Devonport and Tasmanian learners

Elsewhere in Tasmania there are [coding classes in Launceston](/best-coding-classes-in-launceston) and [coding classes in Hobart](/best-coding-classes-in-hobart). College students can see [TASC Computer Science help](/tasc-computer-science-help), and the state overview is [coding and AI classes in Tasmania](/coding-and-ai-classes-in-tasmania).

## Contact

Book the free class on [https://learn.modernagecoders.com/ai-and-programming-classes-in-devonport](https://learn.modernagecoders.com/ai-and-programming-classes-in-devonport#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
