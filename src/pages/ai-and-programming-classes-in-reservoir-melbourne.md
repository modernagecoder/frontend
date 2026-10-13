---
title: "AI and Programming Classes in Reservoir, Melbourne"
description: "Live online AI and programming classes for Reservoir children, teenagers and adults: Scratch, Python, calculus for machine learning and AI, in groups or one to one."
canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-reservoir-melbourne
source: src/pages/ai-and-programming-classes-in-reservoir-melbourne.html
---
> Live online AI and programming classes for Reservoir children, teenagers and adults: Scratch, Python, calculus for machine learning and AI, in groups or one to one.

Skip to contentCourse picks for Reservoir

## Courses that open up the model

Each course goes beneath the library call to the gradients and loss functions that the checking project tests. The free first class sets the level.

[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)Ages 13 to 17AI and Machine Learning for TeensModels built from scratch in Python before any library does it for you.See the syllabus](/courses/ai-ml-masterclass-teens)[![High School Mathematics course thumbnail](/images/high-school-maths.webp)Ages 14 to 18High School MathematicsAlgebra through to calculus, the maths that gradients are made of.See the syllabus](/courses/complete-high-school-mathematics-mastery)[![AI and ML Masterclass course thumbnail](/images/ai-ml-college.webp)University and adultAI and ML MasterclassMachine learning and deep learning with the derivations shown.See the syllabus](/courses/ai-ml-masterclass-complete-college)[![Maths for Data Science course thumbnail](/images/data-analytics-maths.webp)Ages 16 and upMaths for Data ScienceCalculus, linear algebra and statistics as used in machine learning.See the syllabus](/courses/data-analytics-mathematics-masterclass)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Reservoir in the Census

## A large suburb of houses and townhouses

Figures for the Reservoir suburb (ABS code SAL22161, listed as Reservoir (Vic.)) from the 2021 Census QuickStats, alongside Victoria. The City of Darebin is covered separately.

| Headline | Reservoir |
| --- | --- |
| Residents | 51,096 |
| Median age | 38 |
| Families | 13,259 |
| Private dwellings | 23,146 |
| Average people per household | 2.4 |

| Measure | Reservoir | Victoria |
| --- | --- | --- |
| Separate houses | 63.2% (12,804) | 73.4% |
| Semi-detached, row or terrace houses and townhouses | 32.5% (6,582) | 13.9% |
| Workers who drove to work | 45.7% (11,155) | 49.9% |
| Workers who took the train | 3.5% (860) | 1.6% |
| Workers who took a bus | 0.9% (216) | 0.6% |

### Townhouse country

Almost a third of Reservoir homes are townhouses or semi-detached, more than double the Victorian share.

### Area

The bureau measures the suburb at 19.03 square kilometres, within the City of Darebin.

### Lockdown caveat

The 2021 Census was held in an August lockdown, when 27.7% of employed residents, 6,761 people, worked from home.

For confidentiality the bureau adds small random changes to each count, so table parts can differ from totals. We report numbers exactly as published and do not add them up.

Signature project

## One copied line, caught by a check

We fitted the simplest model there is: predict each station's FY24-25 entries from its FY23-24 entries with a straight line, for the 221 stations that appear in both files. Then we wrote the gradient by hand twice, once correctly and once with a classic copy-paste slip: the bias gradient copied from the weight line, still multiplied by last year's entries.

| Version | Weight gradient error | Bias gradient error | Verdict |
| --- | --- | --- | --- |
| Correct, at two test points | About 1 in 10 billion or less | About 1 in 4 billion or less | Pass |
| Buggy, first test point | About 1 in 60 billion | 0.73 | Fail |
| Buggy, second test point | About 1 in 20 billion | 0.80 | Fail |

| Model | Typical error per station | Reservoir prediction |
| --- | --- | --- |
| Correct gradient | 102,645 entries | 873,741 |
| Buggy gradient | 774,902 entries | 1,572,056 |
| No model: same as last year | 105,234 entries | 852,650 |

### Silent failure

The buggy version trained without any error and settled on a line, just a much worse one. Only the comparison with the numerical gradient flagged it.

### Reservoir itself

Reservoir recorded 757,800 entries in FY24-25, down from 852,650. Every method overshot it, and simply repeating last year came closest.

### Matches the library

The correctly trained line, 1.0055 times last year plus a small constant, matched NumPy's own least-squares fit to the digits we printed.

### An honest baseline

The correct model beat "same as last year" by a small margin, 102,645 against 105,234 entries of typical error, and lost to it for Reservoir. A one-year straight line is a teaching model, not a forecast. The point of the project is the bug the check catches, not the prediction.

Station figures arrive pre-rounded to multiples of 50 by the transport department. McKinnon station is spelled differently in the two years' files, which is why 221 stations, not 222, matched. The model, the bug, the checks and every error figure are our own work.

The method

## Nudge each setting both ways

To estimate a gradient numerically, add a tiny amount to one setting, measure the loss, subtract the same amount, measure again, and divide the difference by twice the step. Compare that with the formula, setting by setting.

| Relative error | Usual meaning | Next step |
| --- | --- | --- |
| Below about 1 in a million | The formula is right | Train with confidence |
| Around 1 in a thousand | Suspicious; often a scaling slip | Check each term and the step size |
| Around 0.1 or above | The formula is wrong | Fix it before training |

The numerical estimate is far too slow to train with, since it needs two loss evaluations per setting, and models have millions of settings. That is exactly why it makes a good referee: slow, simple and hard to get wrong. Deep learning libraries compute gradients automatically, but anyone writing a custom layer or loss still checks it this way.

### Children

Roll a ball down a slope drawn in Scratch and change the steepness to see which way it goes.

### Teenagers

Code the station model, plant the bug, and write the check that finds it.

### Adults

Add gradient checks to the tests for a custom loss function at work.

Around Reservoir

## Three stations and thirteen schools

Station entries from the patronage file and school counts from the 2025 school locations file.

### Reservoir station

Reservoir counted 757,800 entries in FY24-25, 47th of 222 metropolitan stations, against 959,050 in FY18-19.

### Regent and Ruthven

Regent rose from 369,000 to 382,700 entries between FY23-24 and FY24-25, while Ruthven slipped from 302,050 to 289,350.

### Schools

The file lists 13 open schools in Reservoir, eight of them government, including Reservoir Views Primary School, Reservoir High School and William Ruthven Secondary College.

Term 3, 2027

Victorian government schools run Term 3 from Monday 12 July to Friday 17 September 2027, a natural point to start or change a course.

Learning ladder

## From slopes in Scratch to checked gradients

Ages are only a guide; the free first class places each learner.

Ages 6 to 10

### Scratch

Games with motion, speed and simple slopes.

[Scratch Coding for Kids](/courses/scratch-programming-complete-course)[AI Literacy for Kids (Ages 8 to 14)](/courses/ai-literacy-for-kids-course)Ages 10 to 14

### Python and graphs

Straight lines, plotting and a first model fitted by hand.

[Python and AI for Kids](/courses/python-ai-kids-masterclass)[Maths Through Coding](/courses/maths-through-coding)Ages 13 to 17

### Machine learning

Loss, gradients and training loops written from scratch.

[AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens)[High School Mathematics](/courses/complete-high-school-mathematics-mastery)University and adult

### Deep learning

Neural networks, custom losses and the checks that keep them honest.

[AI and ML Masterclass](/courses/ai-ml-masterclass-complete-college)[Maths for Data Science](/courses/data-analytics-mathematics-masterclass)AI and programming

## If AI tools compute gradients for you, why should a Reservoir learner check one?

Because the moment you write anything custom, the automatic safety net has a hole in it.

An assistant asked to write gradient descent for a new model will often write the gradient by hand, and a copied line like the one in our project is exactly the kind of mistake that gets through. The code runs, the loss falls a little, and nothing looks broken.

A learner who has seen a relative error of 0.73 next to one of a ten-billionth knows to ask for a gradient check before trusting any training run, whoever or whatever wrote the code.

Our Reservoir classes teach the maths inside AI so that learners can test it, not just run it. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

Delivery

## Reservoir lessons, live online

Every lesson is a live video class taken from home.

### Learner drives

The learner types, runs and fixes the code with the screen shared, and the teacher guides from there.

### School-term rhythm

Courses run in Victorian terms and break in the holidays.

### Free first class

The trial is a real lesson, after which the teacher proposes a course and a weekly time.

### Level-matched

Groups run with fifteen to twenty learners who are working at about the same point.

### Two per week

Two set lessons a week, around eight a month, with holiday gaps agreed ahead.

### Teachers in India

Our teachers are in India, so a 4:30pm Reservoir class during daylight saving is 11am India time, and noon in the Melbourne winter.

Melbourne clocks

Daylight saving in Melbourne began on Sunday 4 October 2026 and ends on Sunday 4 April 2027. India keeps one time all year, so lesson times are always confirmed in Melbourne time.

Fees

## Reservoir class fees

A free trial and two monthly rates.

First class**USD 0**

Your first lesson is free and finishes with a plain recommendation.

Group tuition**USD 100**

A month in a group of fifteen to twenty learners at one level, generally eight lessons.

Private tuition**USD 150**

Close to eight private lessons a month with one teacher.

Families outside India are billed in US dollars, so Reservoir pays what every other overseas family pays. We take no payment until the trial has fixed course and time; the pricing page explains holidays, missed lessons and changes of format.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20AI%20or%20programming%20class%20for%20a%20learner%20in%20Reservoir.)Reviews

## What Google reviewers write about our classes

Rated 4.9 across 547 Google reviews. These are real reviews, reproduced as written.

★★★★★

"The one step solution for my son. Modern Age Coders make learning coding so simple that kids love it. The teachers explain complex concepts clearly with practical exercises and interactive content."

Ria Mukherjee

Parent

★★★★★

"Modern Age Coders has been a game-changer for me. I struggled to grasp IT concepts and coding before joining, but their classes transformed everything. I can now confidently write complex programs with ease."

Samriddha Mondal

Student

★★★★★

"One of the most wonderful education centres out there. Education is not limited to school syllabus but focuses on skill development."

Vansh Agarwal

Student

★★★★★

"My child Dhairya is really enjoying the Modern Age Coders classes. This is his first online class and he eagerly looks forward to it. I can already see his improvement, and the teachers are very cooperative."

Sonam Oswal

Parent of Dhairya

★★★★★

"Modern Age Coders have wonderful teachers who teach in a clear, easy and practical way. The teacher boosts students' confidence and inspires them to learn without hesitation."

Sonu Goyal

Parent

★★★★★

"I highly recommend this computer coding class! The teachers are incredibly knowledgeable and passionate about coding."

Ritu Kedia

Parent

Free placement class

## Book a free Reservoir class

Mention how old the learner is and something they enjoy. Seven-year-olds often open with a Scratch racing game; senior secondary students sometimes open by hunting a planted gradient bug.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Reservoir one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20AI%20or%20programming%20class%20for%20a%20learner%20in%20Reservoir.)

Submitted details are used for placement and follow-up.

FAQ

## Reservoir AI and programming questions

Questions we get from Reservoir households and adult learners.

### How many people live in Reservoir?

The 2021 Census QuickStats for the Reservoir (Vic.) suburb count 51,096 residents, 13,259 families and 23,146 private dwellings, with a median age of 38.

### What is gradient checking?

A test that compares a hand-written gradient with a numerical estimate made by nudging each parameter up and down by a tiny amount. If the two disagree by more than a very small relative error, the formula has a bug.

### What is gradient descent?

The method most machine learning models use to learn: repeatedly move each parameter a small step in the direction that reduces the error, as given by the gradient.

### What did the Reservoir project find?

A copied line in the bias gradient gave relative errors of 0.73 and 0.80 in a gradient check. Trained anyway, the buggy model's typical error was 774,902 entries per station against 102,645 for the correct one.

### Do students need calculus for machine learning?

A little helps, and we teach it as needed. Teenagers can start with slopes of straight lines and build up to the derivatives that gradients are made of.

### What do younger Reservoir children start with?

Six-year-olds and up begin in Scratch, where games with movement and speed come first.

### Do you have a Reservoir venue?

No. All lessons are live online, we have no Australian premises, and our phone number is an Indian one.

### How much are AI classes for Reservoir learners?

The first lesson is free. After it, group classes cost USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, and one-to-one classes cost USD 150 a month. Course, format and time are agreed before payment.

### How many are in a group?

Fifteen to twenty learners grouped on level, pace and goals, with one-to-one lessons if no group time suits.

### Can adults study machine learning with you?

Yes. Adults have their own groups or one-to-one lessons, often to understand the models their workplace has started to use.

Explore Melbourne and Victoria

## More for Reservoir learners

Across the city, the [Melbourne page](/vibe-coding-and-ai-agents-classes-in-melbourne) brings our classes together, and the [Victoria guide](/coding-and-ai-classes-in-victoria) does the same for the state. A primary-age beginner may suit our [kids coding page for Melbourne](/coding-classes-for-kids-melbourne) better.

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20AI%20or%20programming%20class%20for%20a%20learner%20in%20Reservoir.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-reservoir-melbourne*
