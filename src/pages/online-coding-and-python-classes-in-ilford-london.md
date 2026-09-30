---
title: "Online Coding and Python Classes in Ilford, London | AI, 6 to 67"
description: "Live online coding, Python, AI and vibe coding lessons for Ilford, Gants Hill, Cranbrook and Newbury Park learners aged 6 to 67, taught live. First lesson free."
canonical: https://learn.modernagecoders.com/online-coding-and-python-classes-in-ilford-london
source: src/pages/online-coding-and-python-classes-in-ilford-london.html
---
> No official figure covers Ilford as one place; the ONS instead reports its 2022 wards one by one at Census 2021, with 12,327 usual residents in Ilford Town, 13,503 in Clementswood and 15,123 in Loxford. Gants Hill, Cranbrook, Newbury Park and Seven Kings are recorded suburban areas of Redbridge. India-based tutors teach coding, Python, AI, vibe coding and maths on camera to anyone from six to 67, individually or in a class of five to ten of similar level. Every course teaches careful reasoning first, so learners can tell when a program, or an AI, has produced a number that cannot be right. We teach lesson one without charge and finish by naming a course. The Ilford project takes 1,325 real postcodes and shows a correct textbook formula returning a negative spread, then fixes it in a few lines of Python. Staying on costs USD 100 monthly for a seat in a class, or USD 150 monthly for lessons on your own.

[Home](/) / [United Kingdom](/coding-classes-in-united-kingdom) / [London](/best-coding-class-in-london) / Ilford

Ilford, Redbridge, London / Live online

# Online coding and Python classes in Ilford

**Which are the best online coding and Python classes in Ilford?** No official figure covers Ilford as one place; the ONS instead reports its 2022 wards one by one at Census 2021, with 12,327 usual residents in Ilford Town, 13,503 in Clementswood and 15,123 in Loxford. Gants Hill, Cranbrook, Newbury Park and Seven Kings are recorded suburban areas of Redbridge. India-based tutors teach coding, Python, AI, vibe coding and maths on camera to anyone from six to 67, individually or in a class of five to ten of similar level. Every course teaches careful reasoning first, so learners can tell when a program, or an AI, has produced a number that cannot be right. We teach lesson one without charge and finish by naming a course. The Ilford project takes 1,325 real postcodes and shows a correct textbook formula returning a negative spread, then fixes it in a few lines of Python. Staying on costs USD 100 monthly for a seat in a class, or USD 150 monthly for lessons on your own.

Variance measures how spread out some numbers are, and it can never be negative. Yet one of the most common ways of calculating it, the average of the squares minus the square of the average, can come out negative on a real computer. The formula is mathematically correct; the trouble is that computers store numbers with limited precision, and subtracting two huge, nearly equal numbers wipes out the digits that mattered, an effect called catastrophic cancellation. This project finds it happening on Ilford's own postcodes from the Ordnance Survey, whose map coordinates are hundreds of thousands of metres, and then fixes it with Welford's method.

Facts last verified 30 September 2026. Teaching is online; no Ilford branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Ilford courses in reasoning, Python and AI

Four courses, arranged by age. Try any of them with a free live lesson, booked without card details.

- [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids) (Ages 7 to 12): The how-to-think course: estimating first, then spotting an answer that cannot possibly be right.
- [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev) (Ages 8 to 12): Scratch games planned by the learner, built with AI help and checked thoroughly.
- [Python for Teens](/courses/python-complete-masterclass-teens) (Ages 13 to 17): Python from first programs to real data, including the Ilford postcode precision puzzle.
- [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college) (Students and adults): Python for data, numerical methods, machine learning and AI agents.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Ilford Town, Clementswood, Loxford and Gants Hill

Census 2021 ward counts, and places recorded in Redbridge.

**Usual residents by 2022 ward, Census 2021, ONS via Nomis**

| Ward | Residents (2021) |
|---|---|
| Valentines | 15,209 |
| Loxford | 15,123 |
| Clementswood | 13,503 |
| Ilford Town | 12,327 |

These are separate ward figures, not a total for Ilford, which has no single official count. Postcodes.io lists Cranbrook and Loxford in IG1, Gants Hill and Newbury Park in IG2, and Seven Kings and Goodmayes in IG3 as suburban areas of Redbridge. Redbridge schools work to the national curriculum for England, so we plan by year group with GCSE and A level in mind, and leave out the holiday weeks you tell us about.

### Redbridge, London and our teaching

See [coding classes in Redbridge](/coding-classes-in-redbridge-london) and [London](/best-coding-class-in-london) for more. Our case for thinking before tools is on [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

## When a correct formula gives an impossible answer: variance, float32 and Welford's method

Real postcode coordinates, three ways to compute one statistic, and a result below zero.

The learner downloads Code-Point Open, the Ordnance Survey's free postcode file, and keeps the 1,325 postcodes in the IG1 and IG2 districts. Each has an easting and a northing in metres; for Ilford the eastings average 543,986 m. The task is to measure how spread out the postcodes are, the variance of their coordinates, three ways. First, the textbook one-pass formula: average of the squares minus the square of the average. Second, the two-pass method: find the average, then average the squared distances from it. Third, Welford's online algorithm, which updates a running mean and a running sum of squared differences one value at a time. Each is run in 32-bit floating point, the compact number format common on graphics cards, and checked against an exact answer from Python's fractions.

**Variance of Ilford postcode coordinates in square metres, our Python run on OS Code-Point Open**

| Method (32-bit floats) | Eastings | Northings |
|---|---|---|
| Exact answer | 603,291.8 | 1,277,505.9 |
| One-pass textbook formula | 1,933,312 (220% too high) | 1,433,600 (12% too high) |
| Two-pass method | 603,293.0 | 1,277,506.1 |
| Welford online | 603,046.9 (0.04% low) | 1,277,274.8 (0.02% low) |

The textbook formula is wrong by a factor of three on the eastings, because squaring numbers around 544,000 gives about 296 billion, far more than a 32-bit float can hold precisely, and the tiny true spread is lost when two such giant numbers are subtracted. On postcode sector IG1 1, 220 postcodes, it goes further and returns a variance of minus 98,304, a mathematical impossibility; the true value is 158,907.5. Welford's method never forms those giant squares, so it stays within a small fraction of a percent while reading each value only once. In Python's ordinary 64-bit floats the textbook formula happens to survive on this data, off by only 0.00005, which is exactly why the problem goes unnoticed until someone switches to a smaller number type.

### Ages 8 to 11

Use a calculator that shows only a few digits, subtract two big close numbers, and see the answer go wrong.

### Ages 11 to 15

Load Ilford postcode coordinates in Python and work out their average and spread.

### Ages 15 and up

Code all three variance methods in float32 and float64, and explain every difference.

### OS postcodes, our calculations

Postcode coordinates are from Ordnance Survey Code-Point Open, contains OS data, Crown copyright and database right, under the Open Government Licence. Every variance and error figure is our own calculation.

## What this teaches about vibe coding and AI agents

The maths was right; the arithmetic inside the machine was not.

**From the Ilford precision puzzle to working with AI**

| In the variance project | When AI writes numerical code |
|---|---|
| The textbook formula was 220% off in float32 | Correct maths can fail in finite precision |
| One sector gave a negative variance | Sanity-check results that cannot be true |
| Float64 hid the problem | Passing one test is not the same as being right |
| Welford read each value once, accurately | Stable algorithms beat clever shortcuts |
| Graphics cards favour small number types | AI hardware makes precision matter more |

AI models are trained and run on hardware that prefers 32-bit, 16-bit and even 8-bit numbers, so the same traps appear in machine learning code, from averages to softmax. An AI assistant asked for "a variance function" may well produce the textbook one-pass version, which passes a quick test and fails later. In vibe coding the learner describes what they need while an AI writes it; our Ilford learners then test the code on awkward real data and check that the answers are possible at all. AI agents that crunch numbers for you need the same checks. Agent building is for learners whose Python already works without a helper, which tends to mean sixth-formers and adults; Copilot Studio is private tuition only. The thinking behind this is on [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk), and the next steps on [our agents pathway for UK students](/ai-agents-course-for-students-uk).

Nobody at Ordnance Survey, the ONS, Nomis or postcodes.io has reviewed this page. Their open data went in; the arithmetic and any mistakes are ours.

## From calculator puzzles to numerical Python

The school year guides where we begin; the trial lesson settles it.

- **Years 2 to 7: How to think** Estimating, rounding and spotting impossible answers. [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **Years 4 to 8: Vibe coding for kids** Games and apps planned by the learner and built with AI help. [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev), [Python and AI for Kids](/courses/python-ai-kids-masterclass)
- **Years 9 to 13: Python and numbers** Real data, floating point and statistics beside GCSE and A level. [Python for Teens](/courses/python-complete-masterclass-teens), [Statistics & Probability](/courses/statistics-probability-maths-course)
- **Adults: Python, data and agents** Numerical code, machine learning and AI agents in Python. [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college), [Generative AI Course](/courses/complete-generative-ai-masterclass-college)

## Why can a correct formula give a wrong answer in Python?

Because computers store numbers with limited precision, subtracting two huge, nearly equal values can wipe out the digits that mattered, called catastrophic cancellation; stable methods such as Welford's algorithm avoid forming those huge values in the first place.

On 1,325 Ilford postcodes in 32-bit floats, the textbook variance formula was 220% too high for eastings and negative for one postcode sector, while Welford's method stayed within 0.04% of the exact answer.

Learners who have seen that ask of any number a program or an AI returns: could this possibly be true, and what precision was it computed in?

Checking that answers are even possible lets Ilford teenagers trust code for the right reasons, a solid reason to learn Python in 2026. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Gants Hill to Cranbrook, online

A computer with a webcam and a video-ready connection is all that is required.

- **Learner at the keyboard** Students write and run the code; the tutor follows the shared screen and asks what answer they expect first.
- **Trial sets the start** The free lesson shows where to begin, and any GCSE or A level board is noted.
- **Opening lesson free** No charge for lesson one, which finishes with a course suggestion.
- **Level-matched groups** Five to ten UK learners at one stage in every class.
- **Twice weekly** Holiday weeks off.
- **Constant time** Tutors adjust for UK clock changes so your lesson hour holds.

**Why online** Five learners at one level, free on one evening, are rarely next-door neighbours. Online, it does not matter.

## Ilford fees

Ilford learners are charged our international rates, which apply everywhere apart from India.

- First class: USD 0. A complete free lesson, then a recommendation.
- Group tuition: USD 100 a month. Roughly eight live group lessons a month.
- Private tuition: USD 150 a month. Roughly eight live private lessons a month.

All prices are in US dollars, never sterling, and invoicing begins only after the trial has fixed a course and a weekly slot. The pricing page sets out holidays, absences and moving between group and private.

## Ilford questions

### How many people live in Ilford?

There is no single official Ilford figure. Census 2021 counted 12,327 in Ilford Town ward, 13,503 in Clementswood and 15,123 in Loxford, each measured separately.

### Are online Python classes available in Ilford?

They are. Lessons happen on live video, so Gants Hill, Newbury Park and the whole of Redbridge are covered, from age 6 to 67.

### What is catastrophic cancellation?

The loss of accuracy when two large, nearly equal numbers are subtracted, leaving mostly rounding error. It made a textbook variance formula negative on real Ilford data.

### What is Welford's algorithm?

A way to compute the mean and variance in one pass, updating a running mean and a running sum of squared differences, which stays accurate even in low precision.

### What does the Ilford project involve?

Computing the spread of 1,325 Ilford postcode coordinates three ways in 32-bit floats, comparing each with an exact answer, and explaining the failures.

### Is vibe coding on the timetable?

For every age group. The learner sets out what the program should do, and tests whatever the AI writes.

### When do learners build AI agents?

After their own Python runs reliably, typically sixth form or later; Copilot Studio is taught privately.

### Do you support GCSE and A level?

Yes, in computer science and maths, for understanding rather than promised grades.

### How much will it cost?

Nothing for lesson one; afterwards USD 100 per month in a class or USD 150 per month with your own tutor.

### Do lessons pause for holidays?

Yes, school holidays are skipped; send us the dates.

## More east London pages

Each of these teaches something different: [Redbridge](/coding-classes-in-redbridge-london) (finding a position from distances), [Barking and Dagenham](/coding-classes-in-barking-and-dagenham-london), [Newham](/coding-classes-in-newham-london) and [London](/best-coding-class-in-london). Everywhere else is linked from the [UK hub](/coding-classes-in-united-kingdom).

## Contact

Book the free class on [https://learn.modernagecoders.com/online-coding-and-python-classes-in-ilford-london](https://learn.modernagecoders.com/online-coding-and-python-classes-in-ilford-london#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
