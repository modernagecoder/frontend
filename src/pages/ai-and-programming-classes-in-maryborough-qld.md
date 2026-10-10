---
title: "AI and Programming Classes in Maryborough, Queensland"
description: "Live online AI, machine learning and programming classes for Maryborough teenagers and adults, with a real teacher, in small groups or one to one. First lesson free."
canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-maryborough-qld
source: src/pages/ai-and-programming-classes-in-maryborough-qld.html
---
> Classes in which Maryborough teenagers and adults learn how artificial intelligence actually computes, writing Python with a teacher and testing ideas on real Queensland data. The 2021 Census counted 27,489 people in the Maryborough urban area, with a median age of 47. Every lesson is live on video, one to one or in a small group at the same level, and the first is free.

[Home](/) / [Australia](/coding-classes-in-australia) / [Queensland](/coding-and-ai-classes-in-queensland) / Maryborough

Maryborough, Queensland, Australia / Live online

# AI and programming classes in Maryborough

**What are the best AI and programming classes in Maryborough, Queensland?** Classes in which Maryborough teenagers and adults learn how artificial intelligence actually computes, writing Python with a teacher and testing ideas on real Queensland data. The 2021 Census counted 27,489 people in the Maryborough urban area, with a median age of 47. Every lesson is live on video, one to one or in a small group at the same level, and the first is free.

Route 705 links Maryborough and Hervey Bay and back, and its path in the state's transit file is 1,220 points long. Add up the gaps between them and you get 102,231 metres. Do the same sum in half precision, the 16-bit numbers that many AI chips use to go fast, and the answer is not slightly wrong: it is infinity, because a 16-bit float cannot hold any number above 65,504. Store the map coordinates in half precision instead and the route grows by a third. Our Maryborough project makes these numbers in Python and shows why AI engineers think so hard about precision.

Facts last verified 9 October 2026. Teaching is online; no Maryborough branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## AI and programming courses that start from first principles

Each one connects to the precision project below. The free trial lesson points to the right one, and no card is requested.

- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 13 to 17): Machine learning from the inside: data, models, training and the arithmetic that makes them run.
- [Python for Teens](/courses/python-complete-masterclass-teens) (Ages 13 to 17): Python from the first line, including how numbers are stored and why that matters.
- [AI and ML Masterclass](/courses/ai-ml-masterclass-complete-college) (University and adult): A full machine learning course, from classic methods to neural networks and the hardware they run on.
- [Data Science Course](/courses/data-science-complete-masterclass-college) (University and adult): Real data, careful calculation and models whose numbers can be checked.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Nearly nine in ten homes are separate houses

Figures the statistics bureau released for the Maryborough Significant Urban Area from the 2021 Census, compared with Queensland and Australia.

**Maryborough urban area, 2021 Census QuickStats**

| Census figure | Maryborough |
|---|---|
| Residents | 27,489 |
| Families | 7,259 |
| Private dwellings | 12,282 |
| Average household size | 2.3 people |

**How Maryborough compares**

| Measure | Maryborough | Queensland | Australia |
|---|---|---|---|
| Median age | 47 | 38 | 38 |
| Separate houses, share of occupied homes | 88.4% (9,467) | 74.8% | 72.3% |
| Flats or apartments, share of occupied homes | 3.6% (385) | 12.5% | 14.2% |
| Technicians and trades workers, share of workers | 14.8% (1,369) | 13.7% | 12.9% |

### Nine years older

Maryborough's median age of 47 was nine years above both the Queensland and the national median in 2021.

### Mostly houses

9,467 occupied homes, 88.4%, were separate houses, against 74.8% across Queensland.

### Teenagers

The Census recorded 1,654 residents aged 10 to 14 and 1,576 aged 15 to 19.

One caution about these tables: the bureau randomly adjusts small census counts so individuals cannot be picked out, and as a result rows may not sum to the printed total. We use the published totals and percentages exactly as given and never total the rows ourselves.

## How much precision does it take to add up a bus route?

Translink publishes the exact path of every Maryborough bus as a list of map points. We measured each route by adding the distances between its points, once with exact arithmetic and then in the lower-precision number formats used across computing and AI.

**Route 705, its longest path: 1,220 points, the same sum in five formats (our calculation)**

| How the sum is done | Result | Error |
|---|---|---|
| Exact sum (Python math.fsum) | 102,231.22 m | reference |
| 64-bit floats, ordinary running sum | 102,231.22 m | about a ten-billionth of a metre |
| 32-bit floats | 102,231.16 m | 0.056 m short |
| 16-bit floats, in metres | infinity | overflow above 65,504 |
| 16-bit floats, in kilometres | 101.812 km | 419 m short |

**Each Maryborough route's longest path, exact and in 16-bit metres (our calculation)**

| Route | Exact length | 16-bit result |
|---|---|---|
| 701 | 13,004.6 m | 12,992 m |
| 702 | 15,079.4 m | 15,080 m |
| 703 | 22,213.0 m | 22,272 m |
| 704 | 18,584.3 m | 18,608 m |
| 706 | 29,320.5 m | 29,376 m |
| 707, to Aldershot, Torbanlea and Howard | 70,325.2 m | infinity (70.312 km in 16-bit kilometres) |

### 1. Measure

Read the shape file, sort each path's points by sequence, and add the haversine distance between neighbours. A typical gap is about 50 metres.

### 2. Shrink the numbers

Repeat the sum with numpy float32 and float16 accumulators. Watch the 16-bit total stop growing smoothly, then jump to infinity on the long routes.

### 3. Rescale and compare

Switch the unit to kilometres and the 16-bit sum survives, but rounding still costs hundreds of metres. The exact sum and 64-bit floats agree to a fraction of a millimetre.

### Why the long routes vanish into infinity

A 16-bit float spends only 10 bits on its digits, so between 32,768 and 65,504 it can only count in steps of 32. Adding a 50-metre segment rounds to a step of 32 or 64, and once the total passes 65,504 there is no larger number to hold it. Storing the coordinates themselves in 16 bits is worse in a different way: near Maryborough the format can only mark latitude every 0.0156 degrees and longitude every 0.125 degrees, so the route's points snap to a coarse grid and its length becomes 135,472 metres.

All lengths here come from our own code on Translink's published shapes, measured as straight lines between consecutive points on a sphere. They are not official route distances and say nothing about how the buses are run.

## What bus routes teach about how AI is computed

Modern AI training and inference often use 16-bit and even 8-bit numbers, because they are faster and use less memory. The Maryborough project shows exactly what that trade costs and how engineers protect against it.

**From the route experiment to real AI practice**

| Problem seen with the routes | In AI systems | The usual remedy |
|---|---|---|
| 16-bit sums overflow above 65,504 | Gradients and activations can overflow | Loss scaling and careful ranges |
| Small additions to a big total are rounded away | Tiny weight updates can be lost | Keep a 32-bit master copy of the weights |
| Changing the unit rescued the sum | Normalising inputs keeps values in range | Scale data before training |
| Coordinates snapped to a coarse grid | Quantised models lose fine detail | Choose the precision per layer |

Mixed-precision training, the common practice of computing in 16 bits while accumulating in 32, exists for precisely the reason our route totals failed. A learner who has watched route 707 turn into infinity understands that design choice far more clearly than one who has only read about it.

### Teenagers

Write the distance function, add up a route, then rerun it in three precisions and explain each difference.

### University students

IEEE 754 formats, compensated summation, loss scaling and quantisation in real model training.

### Adults

Understanding why AI tools trade accuracy for speed, and when that trade matters for your work.

Modern Age Coders has no connection with Translink, the Queensland Department of Transport and Main Roads, Fraser Coast Regional Council or the Australian Bureau of Statistics. They publish the transit file and the census figures; the measurements and every precision result shown here are from our own code.

## Seven routes, 244 stops and a 2027 school year

A few further facts from the transit feed and the Queensland calendar.

### The local network

Routes 701 to 707 serve Maryborough in the current feed, running 80 trips between them and calling at 244 different stops.

### Out of town

Route 707 continues to Aldershot, Torbanlea and Howard, and route 705 links Maryborough with Hervey Bay.

### School terms

Queensland's 2027 school year begins on Wednesday 27 January and Term 4 ends on Friday 10 December.

**A second precision puzzle to try** Instead of adding many small gaps to one big total, add them in pairs, then pairs of pairs, the way a tree is built. On route 705 in 16-bit kilometres, pairwise summation gives 102.25 km, within about 19 metres of the exact length, where the simple running sum lost 419 metres; each addition joins numbers of similar size. It is the same idea that keeps large AI computations stable.

## From adding numbers to understanding AI hardware

Treat the ages as a starting guide; the free lesson decides the actual level.

- **Ages 13 to 14: Numbers in code** Python variables, loops and functions, measuring distances and adding them up on real map data. [Python for Teens](/courses/python-complete-masterclass-teens), [Maths Through Coding](/courses/maths-through-coding)
- **Ages 15 to 18: Inside machine learning** How models train, why precision matters and how to test a calculation two ways. [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens), [Data Science for Teens](/courses/data-science-course-for-teens-python-data)
- **University: Numerics for AI** Floating point, stability and the engineering choices behind fast model training. [AI and ML Masterclass](/courses/ai-ml-masterclass-complete-college), [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)
- **Adults: AI you can question** Reading claims about AI speed and accuracy with a clear sense of what is being traded away. [Data Science Course](/courses/data-science-complete-masterclass-college), [Data Analysis Course](/courses/data-analysis-mastery-course-college)

## Why should a Maryborough learner care how many bits a number has?

Because the speed of modern AI comes from using fewer bits, and the cost of that speed is invisible unless you know where to look.

AI hardware is built to crunch huge numbers of 16-bit and 8-bit values, and that is a large part of why today's models are affordable to run. The catch is that low-precision arithmetic fails in ways that do not announce themselves: totals stop growing, small updates disappear, and occasionally a value becomes infinite and spoils everything after it.

Learners who have added up a Maryborough bus route in four formats know what those failures look like and how engineers defend against them, with 32-bit accumulators, rescaling and pairwise sums. That knowledge turns AI from a black box into a machine they can reason about.

In 2026 almost everyone uses AI and very few understand its arithmetic, and a Maryborough learner who does is the one trusted to make it work properly. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Tinana to Granville, the same live lesson

Maryborough's seven bus routes connect suburbs such as Tinana and Granville with the city centre, and an online class reaches every one of them without a trip.

- **Across the city** A teenager in Tinana and an adult in Granville can learn side by side without either of them catching a bus.
- **Queensland years** Lessons follow Queensland's year levels and four terms, and senior students can link projects to the computing and maths subjects they take.
- **A proper trial** The first lesson is a full class with real code. Afterwards you receive a recommended level, course and time, and no payment details are taken.
- **Level-matched groups** Five to ten learners at one stage, from Maryborough and further afield, so the group always has enough people.
- **Two lessons a week** Fixed times twice weekly, about eight lessons a month, with breaks for school holidays and exams planned ahead.
- **One steady time gap** Queensland does not use daylight saving, so a 5pm Maryborough lesson starts at 12:30pm in India all year round.

**No clock changes to plan around** Maryborough keeps Australian Eastern Standard Time throughout the year, four and a half hours ahead of India. Unlike families in New South Wales or Victoria, Maryborough learners never see their lesson time move in October or April.

## Maryborough class fees

Three numbers explain the cost.

- First class: USD 0. A full lesson at no charge, finished with a suggested level, course and lesson time.
- Group tuition: USD 100 a month. Close to eight lessons a month with five to ten learners at one level.
- Private tuition: USD 150 a month. Close to eight lessons a month with a teacher working one to one.

Families outside India are billed in US dollars, so a learner in Tinana and one in Granville pay the same and there is no Maryborough price list. We charge nothing until the trial has fixed a course and a weekly time, and the pricing page sets out breaks, absences and changes of format.

## Maryborough AI and programming questions

### How many people live in Maryborough, Queensland?

The 2021 Census QuickStats record 27,489 residents in the Maryborough Significant Urban Area. The median age was 47, against 38 for Queensland.

### What is half precision, or float16?

Half precision is a way of storing numbers in 16 bits. It is fast and compact, which is why AI hardware uses it, but it keeps only about three decimal digits and cannot store values above 65,504.

### What is the Maryborough bus route project?

Learners measure the length of each Maryborough bus route from Translink's published map points, then repeat the sums in 64-bit, 32-bit and 16-bit numbers. Route 705's 102,231-metre path turns into infinity in 16-bit metres and grows to 135,472 metres when its coordinates are stored in 16 bits.

### Is this an official route distance?

No. The lengths are our own calculation of straight lines between published points, made to study arithmetic. They are not timetabled distances and say nothing about the bus service.

### Do you help senior Queensland students?

Yes. Year 11 and 12 learners studying computing or maths in Queensland get lessons matched to their year and terms. Assessed school work must be the student's own; we teach methods and never produce marked work.

### What time are lessons?

Times are set at the trial and written in Maryborough time. Because Queensland has no daylight saving, the gap to our teachers in India is always four and a half hours.

### Can younger children learn with you?

Yes, from age six. Younger learners begin with Scratch and drawing programs; the precision project on this page is designed for teenagers and adults.

### Is there a Modern Age Coders centre in Maryborough?

No, and none is claimed. Every lesson is live and online, and we have no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection; the contact number shown is Indian.

### What do Maryborough classes cost?

The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with five to ten learners, or USD 150 a month for the same pattern one to one. Course, format and time are settled before any payment.

### How big are the groups?

Five to ten learners, grouped by level, pace and goals rather than by age or postcode. When no group suits the time a learner needs, one-to-one lessons are offered instead.

## More for Fraser Coast and Queensland learners

Neighbours on the coast can read about [vibe coding and AI agents classes in Hervey Bay](/vibe-coding-and-ai-agents-classes-in-hervey-bay) and [online coding and Python classes in Bundaberg](/online-coding-and-python-classes-in-bundaberg). Our [Queensland page](/coding-and-ai-classes-in-queensland) covers the state, and the [Australia hub](/coding-classes-in-australia) links every other place and topic.

## Contact

Book the free class on [https://learn.modernagecoders.com/ai-and-programming-classes-in-maryborough-qld](https://learn.modernagecoders.com/ai-and-programming-classes-in-maryborough-qld#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
