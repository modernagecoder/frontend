---
title: "AI and Programming Classes in Melville, Perth"
description: "Live online AI and programming classes for the City of Melville, ages 6 to adult, with a machine learning project that tests monotonic constraints on traffic data."
canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-melville-perth
source: src/pages/ai-and-programming-classes-in-melville-perth.html
---
> Whether a model respects common sense. A road with more weekday traffic should not be predicted to have less weekend traffic, all else equal. An unconstrained model breaks that rule 2,070 times on a test grid. A monotonic constraint removes every break and improves accuracy, yet a simple ratio still predicts Melville roads more accurately than either model.

[Home](/) / [Australia](/coding-classes-in-australia) / [Western Australia](/coding-and-ai-classes-in-western-australia) / [Perth](/online-coding-and-python-classes-in-perth-western-australia) / Melville

City of Melville, south of the Swan River, Western Australia / Live online

# AI and programming classes in Melville

**What does the Melville machine learning project test?** Whether a model respects common sense. A road with more weekday traffic should not be predicted to have less weekend traffic, all else equal. An unconstrained model breaks that rule 2,070 times on a test grid. A monotonic constraint removes every break and improves accuracy, yet a simple ratio still predicts Melville roads more accurately than either model.

The City of Melville spreads along the southern shore of the Swan River, crossed by Leach Highway, Canning Highway and the Kwinana Freeway. Main Roads lists 79 traffic count sites in the council. They make a compact, real test set for a question every model builder meets: should the model be allowed any shape it likes?

Facts last verified 12 October 2026. Teaching is online; no Melville branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Machine learning and Python

Courses suited to the constraint project below. A free trial lesson sets the starting point.

- [AI and ML Masterclass](/courses/ai-ml-masterclass-complete-college) (University and adult): Models, validation and constraints that encode what you already know.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 13 to 17): Training and testing models on real public data.
- [Statistics & Probability](/courses/statistics-probability-maths-course) (University and adult): Error measures and baselines that keep models honest.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass) (Ages 8 to 12): First Python and AI ideas for children.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## A riverside council of graduates and professionals

Council-level figures for the City of Melville (ABS LGA55320) from 2021 Census QuickStats, read on 12 October 2026, alongside the ABS 2025 estimate.

**City of Melville counts**

| Measure | Value |
|---|---|
| Residents, 2021 Census | 103,523 |
| Estimated residents, 2025 | 115,945 |
| Median age | 42 |
| Families | 28,676 |
| Private dwellings | 42,881 |
| Bedrooms per dwelling | 3.4 |

**Melville shares compared with WA**

| Share | Melville | WA |
|---|---|---|
| Bachelor degree or higher | 38.4% (32,842) | 23.8% |
| Professionals among workers | 33.2% (17,167) | 22.0% |
| Worked at home | 10.0% (5,168) | 7.5% |
| Semi-detached, terrace or townhouse | 18.6% (7,179) | 13.0% |

### Study and work

A third of Melville workers were professionals, about half again the state share, and degree holders were common.

### Two population figures

The 2021 Census count of 103,523 and the 2025 ABS estimate of 115,945 come from different methods, so both are shown without subtraction.

### Schools

Our map test finds 25 government schools inside the council outline, 18 of them primary schools.

The 2021 Census fell during the pandemic, so working-from-home figures in particular may be higher than in a usual week. The ABS rounds shares and lightly perturbs small counts, which means table parts may not add exactly to totals; we copy its numbers as published.

## A model that must not slope the wrong way

The task: predict a site's average weekend traffic from its average weekday traffic and weekday heavy-vehicle share. Learners train a gradient-boosted model on 931 Perth metropolitan count sites outside Melville, then test it on the 70 Melville sites that have both figures. Common sense says busier weekday roads should never get lower weekend predictions, so they check that too.

**Three predictors on 70 Melville sites (our calculation)**

| Predictor | Mean absolute error | Wrong-way steps |
|---|---|---|
| Gradient boosting, unconstrained | 2,599 vehicles | 2,070 of 11,060 |
| Gradient boosting, monotonic in weekday volume | 2,232 vehicles | 0 of 11,060 |
| Weekday volume times median ratio 0.801 | 1,673 vehicles | 0 by design |

### Counting violations

For each Melville site, learners hold its heavy share fixed and sweep weekday volume from 1,000 to 80,000 in 159 steps. Any step where the prediction falls is a wrong-way step. The free model's worst single drop is 7,719 vehicles.

### The constraint

One setting tells the model that predictions may only rise with weekday volume. It removes every violation, and here it also cuts the average error by 367 vehicles.

### The baseline wins

Multiplying weekday volume by the median weekend ratio from the training sites beats both models. Traffic shape is simple enough that the flexible model mostly learns noise.

### Honest conclusion

Constraints make a model safer and easier to trust, but they do not make it the most accurate tool. On this data a one-line rule wins, and the right report says so. Learners who skip the baseline would have shipped the weaker model with pride.

Volumes come from the Main Roads Traffic Digest, downloaded on 12 October 2026. Training uses metropolitan sites in other councils; testing uses sites Main Roads assigns to the City of Melville. Count years vary from 2021/22 to 2026/27. Models were fitted with scikit-learn 1.7.2 and every error and violation figure is our own calculation.

## One parameter, measured properly

In scikit-learn the constraint is a single argument, monotonic_cst, with 1 for features that may only push predictions up and 0 for free ones.

**Lesson steps**

| Step | Learner task |
|---|---|
| 1 | Split the Traffic Digest into Melville test sites and metropolitan training sites. |
| 2 | Fit the free model and write a function that counts wrong-way steps on a grid. |
| 3 | Refit with monotonic_cst=[1, 0] and compare errors and violations. |
| 4 | Build the ratio baseline first next time, and explain why it wins. |

The heavy-vehicle share is left unconstrained on purpose. Freight roads such as Leach Highway carry far more trucks on weekdays, so a higher weekday heavy share could reasonably mean lower weekend traffic. Learners argue each constraint from knowledge of the world, not from the data alone, and write that reasoning beside the code.

### Younger learners

Draw a staircase that must only go up, then spot the steps where a messy drawing dips.

### Teenagers

Train both models, count violations and present the baseline result fairly.

### Adults

Add monotonic constraints to pricing, risk or demand models where the direction is known.

## Freight routes, river paths and 2027 dates

Local facts from Main Roads and the WA Department of Education.

### Leach Highway

West of Moolyeen Road the highway averaged 82,759 vehicles on weekdays in a 2021/22 count. West of Stock Road, 14.2% of all vehicles are heavy.

### Riverside path

The Tompkins Park path counter west of Dunkley Avenue averages 814 riders a day, 501 heading to South Perth and 313 toward Fremantle.

### Term 3, 2027

The third WA school term of 2027 begins on Monday 19 July and ends on Friday 24 September.

**Boundary used** The council is the ABS outline of about 52.9 square kilometres. Count sites are those Main Roads records against the City of Melville; school figures use our point-in-polygon test.

## From staircases to constrained models

Ages are a guide only; the free lesson decides.

- **Ages 6 to 9: Patterns** Block-code games about rising and falling patterns. [Scratch Coding for Kids](/courses/scratch-programming-complete-course), [AI Literacy for Kids (Ages 8 to 14)](/courses/ai-literacy-for-kids-course)
- **Ages 8 to 12: Numbers in code** Python, simple charts and first predictions. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [Maths Through Coding](/courses/maths-through-coding)
- **Ages 13 to 17: Machine learning** Models, baselines and fair testing. [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens), [Data Science for Teens](/courses/data-science-course-for-teens-python-data)
- **University and adult: Applied ML** Constraints, validation and statistics for work. [AI and ML Masterclass](/courses/ai-ml-masterclass-complete-college), [Statistics & Probability](/courses/statistics-probability-maths-course)

## Why learn this if AutoML tools exist?

Because an automatic tool optimises error, not common sense.

An automated pipeline would happily pick the unconstrained model if its validation score looked fine. It would not notice that some busier roads get lower predictions, and it might not try the one-line ratio at all.

A Melville learner who has counted 2,070 wrong-way steps knows to ask what shape a model should have, and to compare it with a simple rule before trusting it.

Our AI classes teach learners to judge models, not just train them. The longer argument is in [the case for learning to code in 2026](/blog/is-coding-worth-learning-2026).

## Melville lessons, delivered live

Every class takes place live over video, so learners join from home on either side of Leach Highway.

- **Live teacher** Lessons are taught in real time with code checked as it is written.
- **School terms** Classes match WA terms and pause during holidays.
- **Free trial** Start with a free lesson and a short written plan.
- **Group sizes** Groups of five to ten at one level, or private lessons.
- **Schedule** Two lessons a week, about eight a month.
- **India timing** A 6:30pm Melville lesson begins at 4pm in India.

**Perth time** WA last used daylight saving in a period that ended in March 2009, according to the IANA time zone database, so the offset from India never changes.

## Melville class fees

Fees are the same for all learners.

- First class: USD 0. Lesson one is free, with a plan afterwards.
- Group tuition: USD 100 a month. Group classes: about eight lessons monthly with five to ten learners.
- Private tuition: USD 150 a month. Private classes: about eight lessons monthly with one teacher.

Fees are in US dollars and start only after the trial has agreed the course and a weekly time. Holiday and missed-lesson rules are on the pricing page.

## Melville AI and programming questions

### How big is the City of Melville?

The 2021 Census counted 103,523 residents, median age 42. The ABS estimate for 2025 is 115,945, and the council covers about 52.9 square kilometres.

### What is a monotonic constraint?

A rule that a model's prediction may only move one way as a chosen input increases, such as weekend traffic never falling as weekday traffic rises.

### Did the constraint make the model better?

Safer and a little more accurate here, but a simple ratio baseline was still more accurate than either model.

### Why compare with a baseline?

Because a complex model is only worth using if it beats a simple rule. Without the comparison, nobody would know the ratio won.

### Do children learn machine learning?

Younger learners explore patterns and AI ideas. Training real models usually starts around 13.

### How many traffic counters are in Melville?

Main Roads lists 79 count sites in the City of Melville; 70 have both weekday and weekend averages.

### Do you have a centre in Melville?

No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.

### What do Melville classes cost?

The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of five to ten, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.

### What are the groups like?

Five to ten learners matched by level and pace, not by age or suburb. One-to-one lessons suit anyone no group time fits.

### Can adults study AI with you?

Yes. Adults learn in adult groups or privately, often applying models to problems at work.

## Where else to look

South-of-the-river families can also browse the [Perth classes page](/online-coding-and-python-classes-in-perth-western-australia), our [Western Australia overview](/coding-and-ai-classes-in-western-australia), and [AI classes for teenagers](/ai-classes-for-teens-australia).

## Contact

Book the free class on [https://learn.modernagecoders.com/ai-and-programming-classes-in-melville-perth](https://learn.modernagecoders.com/ai-and-programming-classes-in-melville-perth#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
