---
title: "AI and Programming Classes in Kingston, Melbourne"
description: "Live online AI and programming classes for Kingston learners: Scratch, Python, data science and machine learning, in groups or one to one, first lesson free."
canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-kingston-melbourne
source: src/pages/ai-and-programming-classes-in-kingston-melbourne.html
---
> Because accuracy hides them. In our Kingston project only 15 of 197 Melbourne stations are as busy on Saturday as on a weekday. A plain model scores 93.4% and finds two of them; weighting the rare class finds nine but raises 42 false alarms. Choosing between them is the real skill.

[Home](/) / [Australia](/coding-classes-in-australia) / [Victoria](/coding-and-ai-classes-in-victoria) / [Melbourne](/vibe-coding-and-ai-agents-classes-in-melbourne) / Kingston

City of Kingston, Melbourne, Victoria / Live online

# AI and programming classes in Kingston

**Why does a Kingston machine learning class care about rare cases?** Because accuracy hides them. In our Kingston project only 15 of 197 Melbourne stations are as busy on Saturday as on a weekday. A plain model scores 93.4% and finds two of them; weighting the rare class finds nine but raises 42 false alarms. Choosing between them is the real skill.

Southland station is unusual. In FY24-25 it averaged more entries on a Saturday than on a normal weekday, something only four of the 197 stations with at least 500 weekday entries managed. Teaching a model to recognise that pattern from weekday travel times is a perfect lesson in imbalanced data, because the easy answer, "never Saturday-busy", is already right 92.4% of the time.

Facts last verified 10 October 2026. Teaching is online; no Kingston branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Machine learning and programming courses

Each course here gets learners evaluating models honestly, not just training them. The free lesson shows which suits.

- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 13 to 17): Machine learning with Python, including precision, recall and imbalanced data.
- [Orange Data Mining Course for Teens](/courses/orange-data-mining-visual-machine-learning-course-for-teens) (Ages 13 to 17): Visual machine learning with Orange before writing code.
- [Data Science Course](/courses/data-science-complete-masterclass-college) (University and adult): Data science from cleaning to modelling and evaluation.
- [AI and ML Masterclass](/courses/ai-ml-masterclass-complete-college) (University and adult): A complete machine learning course for study and work.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## A higher share of apartments than Victoria

Totals for the City of Kingston (ABS LGA23430), read from 2021 Census QuickStats on 10 October 2026. This is the Victorian council, not any other Kingston.

**City of Kingston, Census 2021**

| Item | Kingston |
|---|---|
| Usual residents | 158,129 |
| Median age (years) | 41 |
| Families counted | 43,676 |
| Private dwellings | 67,560 |
| People per household | 2.5 |
| Motor vehicles per dwelling | 1.8 |

**Kingston percentages next to Victoria**

| Measure | Kingston | Victoria |
|---|---|---|
| Separate houses | 58.8% (35,855) | 73.4% |
| Flats or apartments | 15.0% (9,155) | 12.1% |
| Bachelor degree or above | 31.1% (40,750) | 29.2% |
| Professionals | 26.5% (21,568) | 25.0% |

### Aged 5 to 9

9,279 Kingston residents, 5.9%, were in this age band.

### Aged 0 to 4

There were 8,611 under-fives, or 5.4% of the population.

### Census in lockdown

With Melbourne in lockdown on Census night, 30.0% of Kingston workers (24,383) worked from home; that share reflects the restrictions.

QuickStats percentages are rounded and small counts are randomly adjusted by the bureau to protect privacy. We use each published value as it stands and never add categories up.

## Finding Saturday stations

From the FY24-25 entries file we kept the 197 stations averaging at least 500 entries on a normal weekday. We labelled a station "Saturday-busy" if its Saturday average reached 80% of its weekday average: 15 do. Each station's features are the shares of its weekday entries in the file's five time bands. We trained logistic regression and tested every station while leaving it out of training.

**Leave-one-out results over 197 stations (our calculation)**

| Model | Accuracy | Saturday-busy found | False alarms |
|---|---|---|---|
| Always say "no" | 92.4% | 0 of 15 | 0 |
| Logistic regression, plain | 93.4% | 2 of 15 | 0 |
| Logistic regression, balanced weights | 75.6% | 9 of 15 | 42 |

**The eleven modelled Kingston stations**

| Station | Saturday-busy? | Plain score | Weighted score |
|---|---|---|---|
| Southland | yes | 0.34 | 0.95 |
| Mordialloc | yes | 0.06 | 0.44 |
| Carrum | yes | 0.04 | 0.31 |
| Moorabbin | no | 0.11 | 0.64 |
| Edithvale | no | 0.11 | 0.63 |
| Chelsea | no | 0.06 | 0.42 |
| Westall | no | 0.06 | 0.41 |
| Parkdale | no | 0.05 | 0.34 |
| Aspendale | no | 0.05 | 0.33 |
| Mentone | no | 0.03 | 0.21 |
| Cheltenham | no | 0.03 | 0.19 |

### Accurate and useless

The plain model beats the do-nothing answer by one point and flags no Kingston station at all. With 182 "no" stations to 15 "yes", the cheapest way to score well is to ignore the rare class.

### What weighting does

Balanced weights count each rare example more, here about 6.6 times a common one. Recall rises from 2 of 15 to 9 of 15, and Southland jumps from 0.34 to 0.95.

### The price

Weighting also flags 42 stations that are not Saturday-busy, Moorabbin and Edithvale among them, and still misses Carrum and Mordialloc. Only 9 of 51 alarms are right.

### No model wins on every number

If missing a Saturday-busy station is costly, the weighted model is better. If false alarms are costly, the plain one is. On accuracy alone, the simple baseline is almost as good as either. Learners write down the cost of each mistake before choosing.

Weekday time shares are a weak signal for Saturday use, which is why neither model is strong; that limit is part of the lesson. Station entries are departmental estimates rounded to the nearest 50, and which stations are in Kingston is our test against the ABS outline. Bonbeach falls below the 500-entry cut and is left out.

## Making rare examples count

The idea fits in one line: weight each class by the number of samples divided by twice that class's count.

**Balanced weights for this data**

| Class | Stations | Weight per station |
|---|---|---|
| Saturday-busy | 15 | about 6.6 |
| Not Saturday-busy | 182 | about 0.54 |

scikit-learn applies the same formula when class_weight is set to "balanced", n_samples divided by (n_classes times the class count). We wrote it by hand with NumPy so learners can see every step, then compare with the library.

### Primary age

Sort a bag of mostly red counters with a few blue ones, and see why "always red" seems smart.

### Teenagers

Train both models, draw the confusion tables, and argue which mistake matters more.

### Adults

Re-check a work model built on rare events, such as faults or returns, with recall alongside accuracy.

## Kingston schools and stations

From the 2025 school locations list and the metropolitan entries file.

### 30 government schools

The 2025 list has 23 primary, 5 secondary and 2 specific-purpose government schools in Kingston.

### Twelve stations

Twelve stations sit inside the council outline. Cheltenham was the busiest in FY24-25, with 717,500 entries.

### Back to school, 2027

Term 1 for Victorian government schools runs from Thursday 28 January to Thursday 25 March 2027.

**Council outline** Figures use the ABS boundary of the City of Kingston, about 91.4 square kilometres. School addresses inside it include Cheltenham, Mentone, Mordialloc, Chelsea, Dingley Village and Patterson Lakes.

## From counters to class weights

Rough starting points by age; the free lesson fine-tunes them.

- **Ages 6 to 9: Coding with blocks** Scratch games, sorting and simple patterns. [Scratch Coding for Kids](/courses/scratch-programming-complete-course), [AI Literacy for Kids (Ages 8 to 14)](/courses/ai-literacy-for-kids-course)
- **Ages 9 to 12: Python and data** First Python, tables of numbers and simple predictions. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [Maths Through Coding](/courses/maths-through-coding)
- **Ages 13 to 17: Machine learning** Models, evaluation and imbalanced data. [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens), [Orange Data Mining Course for Teens](/courses/orange-data-mining-visual-machine-learning-course-for-teens)
- **University and adult: Data science** End-to-end projects for study and careers. [Data Science Course](/courses/data-science-complete-masterclass-college), [AI and ML Masterclass](/courses/ai-ml-masterclass-complete-college)

## If AI tools train models automatically, what is left for Kingston learners?

Deciding what "good" means, which no tool can do for you.

Automated tools usually rank models by accuracy unless told otherwise. On this data that would pick the plain model, 93.4%, which never flags a Kingston station. Nothing in the output warns that the rare class has been ignored.

A learner who has seen recall jump from 2 to 9 while false alarms reach 42 knows to ask which mistake is worse before any model is chosen. That question shapes everything that follows, including how an AI tool is set up.

Kingston learners use AI tools well when they choose the measure that matters. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Lessons for Kingston, online

Every class runs on video, for learners in Mentone, Chelsea, Dingley Village or elsewhere in Kingston.

- **Live and hands-on** The learner shares their screen and builds while the teacher explains.
- **Term-based plan** Teaching tracks the Victorian term dates and breaks for holidays.
- **No-fee first lesson** A complete lesson free of charge, with a course suggestion afterwards.
- **Level groups** Five to ten learners at the same level, drawn from many suburbs.
- **Two lessons a week** Two fixed sessions weekly, about eight each month.
- **India-based teachers** A 4:45pm Kingston class is 11:15am India time under Melbourne daylight saving and 12:15pm once it ends.

**Daylight saving dates** Melbourne observes daylight saving from Sunday 4 October 2026 to Sunday 4 April 2027. India keeps one time all year, so our times are always in Melbourne time.

## Kingston class fees

Fees are simple and identical for every family.

- First class: USD 0. Lesson one is free, with clear advice at the end.
- Group tuition: USD 100 a month. Group option: a month of lessons, usually eight, five to ten learners together.
- Private tuition: USD 150 a month. Private option: a month of lessons, usually eight, one learner with one teacher.

Kingston families pay in US dollars. You pay nothing until the trial agrees a course and a weekly slot; holiday and missed-lesson rules sit on the pricing page.

## Kingston AI and programming questions

### How many people live in the City of Kingston?

The 2021 Census counted 158,129 residents in the City of Kingston, Victoria, with a median age of 41.

### What is an imbalanced data set?

An imbalanced data set has one class much rarer than the other, such as 15 Saturday-busy stations among 197. Models then tend to ignore the rare class.

### What are class weights in machine learning?

Class weights make mistakes on some classes count more during training. Balanced weights give each class equal total influence, so rare examples matter as much as common ones.

### Why is accuracy misleading for rare classes?

When one answer is right 92.4% of the time, a model can score well by always giving it. Recall and precision show what happens to the rare cases.

### What age can children start learning AI?

The ideas suit children from about seven through games and sorting. Training real models in Python usually starts around 13.

### Do you have data science classes for adults?

Yes. Adults can learn data science and machine learning in groups or one to one.

### Do you teach in Kingston in person?

No. Every class is live online; we have no office in Australia, and the phone number we list is Indian.

### How much do Kingston classes cost?

The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of five to ten, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.

### How are learners grouped?

Into groups of five to ten by level and pace, not by age or suburb, with one-to-one lessons for anyone whose timing no group fits.

### Which Kingston station had the most entries in FY24-25?

Cheltenham, with 717,500 entries, among the twelve stations inside the council outline by our calculation.

## More for Kingston learners

Try the [Melbourne page](/vibe-coding-and-ai-agents-classes-in-melbourne) for the city, the [Victoria guide](/coding-and-ai-classes-in-victoria) for the state, and [coding for kids in Melbourne](/coding-classes-for-kids-melbourne) for younger learners.

## Contact

Book the free class on [https://learn.modernagecoders.com/ai-and-programming-classes-in-kingston-melbourne](https://learn.modernagecoders.com/ai-and-programming-classes-in-kingston-melbourne#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
