---
title: "AI and Programming Classes in Carindale, Brisbane"
description: "Live online AI and programming classes for Carindale learners aged 6 to adult, with a probability project built on real Carindale bus interchange timetable data."
canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-carindale-brisbane
source: src/pages/ai-and-programming-classes-in-carindale-brisbane.html
---
> That a model which has never seen something should not call it impossible. Learning from the first 20 buses at the Carindale interchange, a plain count gives five routes zero chance, so its score on the full day is infinitely bad. Adding one to every count fixes that, yet still loses to simply guessing every route equally.

[Home](/) / [Australia](/coding-classes-in-australia) / [Queensland](/coding-and-ai-classes-in-queensland) / [Brisbane](/best-coding-classes-in-brisbane) / Carindale

Carindale, City of Brisbane, Queensland / Live online

# AI and programming classes in Carindale

**What AI idea does the Carindale project teach?** That a model which has never seen something should not call it impossible. Learning from the first 20 buses at the Carindale interchange, a plain count gives five routes zero chance, so its score on the full day is infinitely bad. Adding one to every count fixes that, yet still loses to simply guessing every route equally.

Carindale is a suburb of separate houses with a shopping centre and bus interchange near its middle. The Translink timetable for Wednesday 21 October 2026 shows 5,556 stop visits inside the suburb, all by bus, on 23 routes. One stop record, number 6291, collects 244 of those visits from ten routes, a neat small data set for the oldest trick in language models.

Facts last verified 12 October 2026. Teaching is online; no Carindale branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 15 to 20 students per group.

## AI and programming courses

Courses that join coding with the maths behind AI. A free trial lesson places each learner.

- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 13 to 17): Machine learning ideas built and tested in Python.
- [Statistics & Probability](/courses/statistics-probability-maths-course) (Teens and adults): Probability, sampling and estimation, the ground under AI.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass) (Ages 8 to 12): Python and playful AI projects for younger coders.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (University and adult): Python with AI services for work and study.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Separate houses and an older median age

Numbers for the Carindale suburb (ABS SAL30540) from the 2021 Census QuickStats page, read on 12 October 2026.

**Carindale headline counts**

| Measure | Carindale |
|---|---|
| People | 16,535 |
| Median age | 43 |
| Families | 4,768 |
| Private dwellings | 6,058 |
| People per household | 2.8 |
| Motor vehicles per dwelling | 2 |

**Carindale shares next to Queensland**

| Share | Carindale | Queensland |
|---|---|---|
| Separate house | 88.7% (5,093) | 74.8% |
| Flat or apartment | 3.7% (214) | 12.5% |
| Bachelor degree or above | 38.9% (5,282) | 21.9% |
| Professionals among workers | 33.5% (2,803) | 21.4% |

### Primary age

The Census counted 1,029 residents aged 5 to 9 (6.2% of the suburb).

### Early teens

A further 1,132 residents were aged 10 to 14, or 6.9%.

### Census timing

The 2021 count took place in August during the pandemic, so work and travel answers reflect an unusual week.

Percentages are rounded by the bureau and small counts are perturbed for privacy. We show the published figures unchanged and do not add age bands or other rows together.

## Guessing the next bus at stop 6291

Learners pretend they only saw the first few buses of the morning at Carindale Shopping Centre Interchange, then ask a simple model to give each of the ten routes a probability. The whole Wednesday, 244 visits, is the test.

**Average surprise in bits per bus on the full day, lower is better (our calculation)**

| Smoothing | First 10 buses | First 20 | First 40 |
|---|---|---|---|
| None (add 0) | infinite | infinite | infinite |
| Add 0.1 | 4.470 | 4.707 | 3.542 |
| Add 1 (Laplace) | 3.279 | 3.475 | 3.265 |
| Add 2 | 3.175 | 3.284 | 3.187 |
| Add 5 | 3.175 | 3.193 | 3.138 |

### Zero is a trap

The first 20 buses, from 6:11am to 8:39am, cover only five of the ten routes. Raw counts give the other five a probability of zero, so the first one that turns up scores infinitely badly.

### The baseline wins once

Giving every route a tenth scores 3.32 bits. At 20 buses the add-one model scores 3.475, so the honest naive guess beats it.

### Heavier smoothing helps here

Adding 2 or 5 does better than adding 1 at every sample size, because a morning sample is a poor picture of the whole day.

### The floor nobody reaches

If a model knew the true daily shares, route 222 with 81 visits and route 209 with 51 among them, it would average 2.85 bits. No model trained on a morning sample can score below that floor.

The departures come from the Translink timetable feed, not from live tracking. The scores are our calculation, using log loss in bits on the full Wednesday after learning from the earliest visits.

## One added to every count

Laplace smoothing pretends each possible outcome was seen once more than it was. With ten routes and 20 buses, each route gets its count plus one, divided by 30.

**Lesson plan**

| Step | What learners do |
|---|---|
| 1 | Pull the Wednesday visits for stop 6291 and sort them by time. |
| 2 | Count routes in the first 10, 20 and 40 buses. |
| 3 | Turn counts into probabilities with and without smoothing. |
| 4 | Score each model on all 244 visits and compare with an equal guess. |

The same trick appears in spam filters and early word predictors, where a word never seen in training must not wipe out a whole message's score. Modern language models use other methods, but the zero-probability problem they solve is the one learners meet here.

### Children

Pull coloured counters from a bag and argue about colours that have not appeared yet.

### Teenagers

Code the counts and the scoring in Python, then try other values of the added number.

### Adults

Connect smoothing to Bayesian priors and to the base rates in their own work data.

## An interchange with ten platforms

From the Translink feed for Wednesday 21 October 2026, the ABS suburb outline and the Queensland 2027 school calendar.

### Platforms A to J

The feed lists ten lettered platform records under the Carindale Shopping Centre interchange, plus stop 6291 itself.

### Buses only

No rail stop lies inside the outline; all 5,556 Wednesday visits are by bus.

### 2027 terms

Term 1 in Queensland state schools runs from Wednesday 27 January to Thursday 25 March 2027.

**Outline used** Carindale here means the ABS suburb outline of about 10.68 square kilometres. Stops are assigned to it by our own point-in-polygon test.

## From chance games to models

Ages are a starting guess; the trial lesson sets the actual level.

- **Ages 6 to 9: Chance and patterns** Dice, spinners and sorting games in Scratch. [Scratch Coding for Kids](/courses/scratch-programming-complete-course), [AI Literacy for Kids (Ages 8 to 14)](/courses/ai-literacy-for-kids-course)
- **Ages 8 to 12: First predictions** Python programs that count and guess. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)
- **Ages 13 to 17: Machine learning** Training, testing and honest evaluation. [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens), [Data Science for Teens](/courses/data-science-course-for-teens-python-data)
- **University and adult: Applied AI** Models, probability and data work at depth. [Statistics & Probability](/courses/statistics-probability-maths-course), [Data Analysis Course](/courses/data-analysis-mastery-course-college)

## Does probability still matter when AI does the maths?

More than ever, because AI outputs are probabilities.

A chatbot that says "the next bus is route 222" is reporting its most likely answer, not a certainty. Learners who have built a tiny model know there is a whole spread of chances behind every confident sentence.

They also know what a fair comparison looks like. Our add-one model sounded clever and still lost to an equal guess at 20 samples. Checking against a simple baseline is a habit worth more than any single tool.

Carindale classes teach AI from the numbers up. The longer argument is in [whether coding is still worth learning](/blog/is-coding-worth-learning-2026).

## Learning online from Carindale

Lessons happen on a live video call, so the classroom is wherever the laptop is.

- **Teacher on screen** Explanations, questions and code review happen live in every lesson.
- **Term-time schedule** Weekly lessons pause for Queensland school holidays.
- **Free opening session** One full lesson at no charge, followed by a written suggestion.
- **Who learns together** Groups of fifteen to twenty at one level, or a private teacher.
- **Twice a week** About eight lessons a month.
- **Brisbane and India** A 6pm Carindale class is 1:30pm for our teachers in India.

**Steady time zone** Queensland has not used daylight saving since March 1992, according to the IANA time zone database, so the four and a half hour gap to India never moves.

## Carindale class fees

Fees are the same for every learner.

- First class: USD 0. There is no charge for the opening lesson, which ends with a plan.
- Group tuition: USD 100 a month. Group option: around eight lessons a month with fifteen to twenty classmates.
- Private tuition: USD 150 a month. Private option: around eight lessons a month, one to one.

Carindale families pay in US dollars, and only once the trial has fixed the course and lesson times. Holidays and missed lessons are covered on the pricing page.

## Carindale AI and programming questions

### How many people live in Carindale?

The 2021 Census counted 16,535 people in the Carindale suburb, with a median age of 43.

### What is Laplace smoothing?

It adds one to every count before turning counts into probabilities, so an outcome that has not been seen yet still gets a small chance instead of zero.

### Why is a zero probability a problem?

If a model gives an outcome zero chance and it then happens, the log loss is infinite, and the model has no way to recover from that mistake.

### Do children need advanced maths for AI classes?

No. Younger learners use counting and fractions. Logarithms and probability notation come later, in teen and adult courses.

### Is the AI course suitable for adults with no coding?

Yes. Adults start with Python basics and move to models once they can read and change code comfortably.

### Which bus routes use the Carindale interchange stop most?

On Wednesday 21 October 2026, stop 6291 has 81 visits by route 222 and 51 by route 209, the two busiest of its ten routes.

### Do you have a centre in Carindale?

No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.

### What do Carindale classes cost?

The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.

### Who is in each group?

Fifteen to twenty learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.

### How many bus routes stop in Carindale?

The Translink timetable shows 23 routes calling inside the suburb on Wednesday 21 October 2026.

## Next pages to read

Try the [Brisbane page](/best-coding-classes-in-brisbane) for the city overview, the [Queensland guide](/coding-and-ai-classes-in-queensland) for the state, and [AI classes for teens](/ai-classes-for-teens-australia) for secondary students.

## Contact

Book the free class on [https://learn.modernagecoders.com/ai-and-programming-classes-in-carindale-brisbane](https://learn.modernagecoders.com/ai-and-programming-classes-in-carindale-brisbane#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
