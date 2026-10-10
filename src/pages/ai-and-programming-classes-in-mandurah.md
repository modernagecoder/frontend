---
title: "AI and Programming Classes in Mandurah | Live Online Teacher"
description: "Live online AI and programming classes for Mandurah teenagers and adults, with a project that tests whether one error band fits every distance on local roads."
canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-mandurah
source: src/pages/ai-and-programming-classes-in-mandurah.html
---
> Live lessons in which a Mandurah teenager or adult builds a prediction from real Western Australian data and then measures honestly how far off it can be. The City of Mandurah held 90,306 people at the 2021 Census. Classes are online, in a small group at the same level or one to one, and the first costs nothing.

[Home](/) / [Western Australia](/coding-and-ai-classes-in-western-australia) / [Australia](/coding-classes-in-australia) / Mandurah

Mandurah, Peel region, Western Australia / Live online

# AI and programming classes in Mandurah

**What are the best AI and programming classes in Mandurah?** Live lessons in which a Mandurah teenager or adult builds a prediction from real Western Australian data and then measures honestly how far off it can be. The City of Mandurah held 90,306 people at the 2021 Census. Classes are online, in a small group at the same level or one to one, and the first costs nothing.

Main Roads WA marks its roads with reference points every hundred metres or so, each one tagged with its distance along the road and its exact position. Around Mandurah that open dataset holds 5,887 points. Pair them up along each road and a simple question appears: if you know how far a trip runs along the road, how well can you predict the straight-line distance? A line through the data answers on average. But the errors are tiny for short hops and large for longer ones, so a single error band of plus or minus 507 metres is far too wide for a 300 metre trip and too narrow for a 3 kilometre one. Our Mandurah learners find out why a model's uncertainty must grow with what it is predicting.

Facts last verified 10 October 2026. Teaching is online; no Mandurah branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Routes in for a Mandurah learner

Each course reaches the road-distance project below. The free lesson recommends one, with no card details asked for.

- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 13 to 17): Machine learning basics, from fitting a line to measuring how wrong it is.
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data) (Ages 14 to 18): Python with real tables, charts of errors and fair comparisons between models.
- [Artificial Intelligence Course](/courses/artificial-intelligence-complete-masterclass-college) (University and adult): AI and machine learning in full, including uncertainty and evaluation.
- [Data Science Course](/courses/data-science-complete-masterclass-college) (University and adult): Regression, residual analysis, weighting and intervals that hold up.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## A coastal city of 90,306 south of Perth

The 2021 Census for the City of Mandurah council area, set beside Western Australia and Australia.

Mandurah counted 90,306 residents with a median age of 45, living as 25,111 families in 44,094 private dwellings at 2.4 people per household.

**Mandurah beside WA and Australia (2021 Census shares)**

| Measure | Mandurah | WA | Australia |
|---|---|---|---|
| Technicians and trades workers (6,739 people) | 18.6% | 15.3% | 12.9% |
| Professionals (5,215 people) | 14.4% | 22.0% | 24.0% |
| Bachelor degree or higher (9,103 people) | 12.2% | 23.8% | 26.3% |
| Residents aged 65 to 69 (6,242 people) | 6.9% | 5.0% | 5.1% |

### Houses

Separate houses numbered 29,540, 83.5% of dwellings, against 79.7% across WA.

### Apartments

Flats and apartments numbered 1,006, only 2.8% of dwellings.

### Teenagers

The count included 4,962 people aged 15 to 19 and 4,506 aged 20 to 24.

The ABS estimate for the City of Mandurah at 30 June 2025 is 106,827. Census values include small random adjustments for privacy, so a table's rows can differ from its total; we print what the bureau printed and never add rows to make a total.

## Does one error band fit every distance on Mandurah's roads?

Pairs of Main Roads WA reference points on the same road, comparing distance along the road with distance as the crow flies, for trips up to 4 kilometres.

**How the errors grow with distance, 1,623 pairs (our analysis, 10 October 2026)**

| Distance along the road | Pairs | Typical error | Fixed band covers | Scaled band covers |
|---|---|---|---|---|
| Up to 0.5 km | 520 | 28 m | 100.0% | 99.4% |
| 0.5 to 1 km | 503 | 107 m | 99.6% | 97.2% |
| 1 to 2 km | 408 | 276 m | 92.2% | 91.2% |
| 2 to 4 km | 192 | 606 m | 78.6% | 85.4% |

### 1. Fit a line

A straight line through the origin predicts the crow-flies distance as 0.8710 times the road distance. On average that is a fair summary of how much the roads bend.

### 2. Look at the misses

The typical miss grows from 28 metres on short hops to 606 metres between 2 and 4 kilometres. Statisticians call errors whose size changes like this heteroscedastic.

### 3. Test the band

A single band of plus or minus 507 metres catches 95.4% of all pairs, which sounds right, but only 78.6% of the longest group, while being absurdly wide for the shortest.

### An average that hides two failures

Overall coverage of 95.4% looks like a well calibrated model. It is really two mistakes cancelling: far too cautious for short trips and overconfident for long ones. A band that grows in proportion to distance is much narrower where errors are small, about 175 metres wide on average for the shortest trips, and catches more of the long ones. Weighting the fit so that noisy long pairs count less also moves the slope from 0.8710 to 0.9132.

Pairs come from 102 roads whose points run continuously, led by Lakelands Lake Clifton Road, Pinjarra Road and Melville Mandurah Highway. Beyond 4 kilometres nearly all pairs come from a few long main roads, so the analysis stops there. Every fit and percentage is our own calculation from the Main Roads WA open data.

## Checking whether a model's errors behave

Practised on Mandurah's road points, then used on house price models, delivery time estimates or any AI prediction with a confidence figure.

**Checks on the Mandurah road model**

| Check | Method | What it showed |
|---|---|---|
| Plot residuals against the input | Scatter of error against road distance | A funnel that widens to the right |
| Split coverage by group | Band coverage for each distance range | 100.0% for short trips, 78.6% for long |
| Let the band grow | Width proportional to distance | Closer to 95% in three of four ranges, far narrower for short trips |
| Weight the fit | Least squares weighted by 1 over distance squared | Slope rises from 0.8710 to 0.9132 |

An overall accuracy figure is a single number covering many situations. Breaking it down by the size of the input, or by any group that matters, is how hidden overconfidence is found, and it costs only a few lines of code.

### Secondary students

Fit the line, plot the residuals and explain in a paragraph why the points fan out.

### University students

Weighted least squares, conformal-style bands and testing calibration within groups.

### Adults at work

Any forecast with a plus or minus attached deserves the same check by size and by group.

Modern Age Coders is not affiliated with Main Roads Western Australia, the ABS or the City of Mandurah. The road data and statistics are theirs, used under their open licences; the analysis is ours.

## Perth time and the WA school year

Details that shape when a Mandurah learner can take a live lesson.

### Steady clock

Mandurah keeps Western Australian time, UTC plus 8, with no daylight saving in any season.

### India time

India time is two and a half hours behind Mandurah all year, which makes early evening slots easy to fill.

### Eastern states

Sydney is two hours ahead of Mandurah in winter and three during eastern daylight saving.

**WA public school terms in 2027** The department lists Term 1 from Monday 1 February to Friday 9 April, Term 2 from Monday 26 April to Friday 2 July, Term 3 from Monday 19 July to Friday 24 September and Term 4 from Monday 11 October to Thursday 16 December.

## From a first scatter plot to calibrated models

Age bands are a starting guide; the free lesson decides.

- **Ages 12 to 14: Plotting data** Reading a table, drawing points and describing a pattern in words. [Python for Teens](/courses/python-complete-masterclass-teens), [Maths Through Coding](/courses/maths-through-coding)
- **Ages 15 to 18: Lines and errors** Fitting lines, measuring residuals and seeing where a model fails. [Data Science for Teens](/courses/data-science-course-for-teens-python-data), [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens)
- **University: Uncertainty** Weighted fits, prediction intervals and calibration checks. [Data Science Course](/courses/data-science-complete-masterclass-college), [Artificial Intelligence Course](/courses/artificial-intelligence-complete-masterclass-college)
- **Adults: Models at work** Building and auditing predictions that colleagues will rely on. [Data Analysis Course](/courses/data-analysis-mastery-course-college), [Python Automation Course](/courses/python-ai-automation-masterclass-college)

## Would an AI assistant report the right uncertainty?

It tends to give one number for everything.

Ask a chatbot to fit this data and add a 95% interval, and it will usually compute one standard deviation from all the residuals and apply it everywhere. The summary statistics look perfect, and the band is wrong for nearly every individual trip.

Our Mandurah learners let AI write the regression, then split the errors by distance and test coverage in each range themselves. When the tool says 95%, they ask: for whom?

A Mandurah learner who has seen a 95% band cover only 78.6% of the cases that matter will question any confidence figure an AI produces, in 2026 and long after. The longer argument is in [how to learn AI properly rather than just using it](/blog/is-coding-worth-learning-2026).

## Peel region learners, live from home

An online lesson reaches Mandurah without the trip up the freeway.

- **Kept in WA time** Every slot is set in Western Australian time, which never changes during the year.
- **WA year levels** Teachers work to WA year levels, ATAR students included, and teach entirely in English.
- **Learn first, decide later** The trial is a genuine programming lesson. Afterwards we suggest a course and time, and payment details are never taken.
- **Five to ten learners** Each group shares one level, with learners from different places so every stage has a sensible hour.
- **Twice weekly sessions** About eight a month, with holiday and exam breaks agreed early.
- **Adults and retirees too** Daytime and evening groups suit adults at any stage of working life, as do one-to-one lessons.

**Times in Mandurah time** All lesson times are written in Western Australian time, so nobody converts from the East Coast.

## Cost of AI and programming classes in Mandurah

Here is everything you pay for.

- First class: USD 0. One free lesson, with a recommended level, course and time at the end.
- Group tuition: USD 100 a month. Close to eight group lessons each month, with five to ten learners at one level.
- Private tuition: USD 150 a month. Close to eight private lessons each month with the same teacher.

Mandurah pays the national US dollar rate, with nothing added or removed for location. No payment is due until the trial fixes a course and slot, and the pricing page sets out holidays, missed lessons and changes of format.

## Questions about AI and programming in Mandurah

### How many people live in Mandurah?

The 2021 Census counted 90,306 people in the City of Mandurah council area. The ABS estimate at 30 June 2025 is 106,827.

### What does heteroscedastic mean?

Heteroscedastic describes errors whose spread changes with the input. In the Mandurah road data the typical error is about 28 metres for trips under half a kilometre and about 606 metres for trips of 2 to 4 kilometres, so one fixed error band cannot suit both.

### What is the Mandurah road distance project?

Learners download Main Roads WA reference points around Mandurah, pair points on the same road, predict straight-line distance from road distance, and test whether a fixed or a distance-scaled error band gives honest coverage at every distance.

### What is an SLK?

SLK stands for straight line kilometre, the distance along a road from its starting point that Main Roads WA uses to locate places on the network. The open data gives the SLK and coordinates of each reference point.

### Can ATAR students join?

Yes. Year 11 and 12 students fit lessons around ATAR courses, and assessed school work always stays their own.

### What lesson times work in Mandurah?

After school, evenings, weekends and some daytime slots for adults, agreed in the trial and written in Western Australian time. India time is two and a half hours behind Mandurah year round.

### Are younger children catered for?

Yes, from age 6 with visual coding, although the road data project is designed for teenagers and adults.

### Is there a Modern Age Coders office in Mandurah?

No, and we do not claim one. Teaching is live and online only, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a steady connection, and the contact number on this page is an Indian number.

### What do AI and programming classes in Mandurah cost?

The first lesson is free. After that a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before any payment.

### How large are the groups?

Between five and ten learners, matched on level, pace and goals rather than on age or postcode. When no group fits a workable time, one-to-one lessons are offered instead.

## Nearby pages for Mandurah learners

Up the coast is [online coding and Python in Perth](/online-coding-and-python-classes-in-perth-western-australia), with [coding classes for kids in Perth](/coding-classes-for-kids-perth) for younger learners. Further south there is [a Bunbury page on vibe coding and AI agents](/vibe-coding-and-ai-agents-classes-in-bunbury), and the whole state is covered at [coding and AI classes in Western Australia](/coding-and-ai-classes-in-western-australia).

## Contact

Book the free class on [https://learn.modernagecoders.com/ai-and-programming-classes-in-mandurah](https://learn.modernagecoders.com/ai-and-programming-classes-in-mandurah#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
