---
title: "Online Coding and Python Classes in Wanneroo, Perth"
description: "Live online coding and Python classes for the City of Wanneroo, ages 6 to adult, with a Python error-handling project on 97 Main Roads traffic count sites."
canonical: https://learn.modernagecoders.com/online-coding-and-python-classes-in-wanneroo-perth
source: src/pages/online-coding-and-python-classes-in-wanneroo-perth.html
---
> How to handle missing values without hiding mistakes. Main Roads lists 97 traffic count sites in the City of Wanneroo, and 23 have no weekend average. Learners compare two Python styles: look before you leap, which checks first, and easier to ask forgiveness than permission, which tries and catches the error. Both work. A careless version of the second silently throws away every row.

[Home](/) / [Australia](/coding-classes-in-australia) / [Western Australia](/coding-and-ai-classes-in-western-australia) / [Perth](/online-coding-and-python-classes-in-perth-western-australia) / Wanneroo

City of Wanneroo, outer north of Perth, Western Australia / Live online

# Online coding and Python classes in Wanneroo

**What does the Wanneroo Python project teach?** How to handle missing values without hiding mistakes. Main Roads lists 97 traffic count sites in the City of Wanneroo, and 23 have no weekend average. Learners compare two Python styles: look before you leap, which checks first, and easier to ask forgiveness than permission, which tries and catches the error. Both work. A careless version of the second silently throws away every row.

The City of Wanneroo covers about 683 square kilometres of Perth's outer north, from Girrawheen and Koondoola in the south to Yanchep and Two Rocks in the north. It is growing fast, with a median age of 35 at the 2021 Census, and its main roads carry heavy commuter traffic toward the city. Their published counts are real, and so are their gaps.

Facts last verified 12 October 2026. Teaching is online; no Wanneroo branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Python, from first programs to robust scripts

Four courses that build careful Python habits. The free trial lesson decides where to begin.

- [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college) (University and adult): Exceptions, testing and scripts that fail loudly when they should.
- [Python for Teens](/courses/python-complete-masterclass-teens) (Ages 13 to 17): Conditions, try and except, and reading real data files.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (University and adult): Automation that copes with messy inputs at work.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass) (Ages 8 to 12): Typed Python for children, one small program at a time.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Young families on Perth's growing edge

Council-wide figures for the City of Wanneroo (ABS LGA58760) from 2021 Census QuickStats, read on 12 October 2026, and the bureau's 2025 estimate.

**City of Wanneroo counts**

| Measure | Value |
|---|---|
| Residents, 2021 Census | 209,111 |
| Estimated residents, 2025 | 246,147 |
| Median age | 35 |
| Families | 57,797 |
| Private dwellings | 78,029 |
| People per household | 2.8 |

**Wanneroo shares beside the state**

| Share | Wanneroo | WA |
|---|---|---|
| Separate houses | 92.1% (65,649) | 79.7% |
| Couple families with children | 50.1% (28,985) | 44.6% |
| Residents aged 5 to 9 | 7.6% (15,950) | 6.5% |
| Train to work | 2.5% (2,611) | 1.8% |

### Growth

The ABS estimate for 2025 is 246,147 residents against 209,111 counted in 2021. Different methods produce them, so both appear here unsubtracted.

### Apartments are rare

Only 302 dwellings, 0.4%, were flats or apartments, compared with 6.5% across Western Australia.

### Schools

Our map test counts 50 government schools inside the council outline, 38 of them primary schools.

Because the Census was held during the pandemic, journey-to-work answers describe that week. The ABS also rounds shares and perturbs small counts slightly, so its rows may not sum exactly to its totals; we reproduce its figures as printed.

## Look before you leap, or ask forgiveness?

Each Main Roads count site has an average weekday volume and, usually, an average weekend volume. Learners want the weekend-to-weekday ratio for every Wanneroo site. The first attempt divides one by the other for all 97 rows, and Python stops at the fifth with a TypeError, because that site's weekend value is None.

**Four ways to handle the 23 missing weekend values (our runs on Main Roads data)**

| Approach | Sites kept | Result |
|---|---|---|
| Divide every row | 0 | Crashes at row 5 with TypeError |
| LBYL: check for None first | 74 | Median ratio 0.793 |
| EAFP: try, except TypeError | 74 | Median ratio 0.793 |
| Replace None with 0 | 97 | Mean drops from 0.793 to 0.605 |

### Two honest styles

Checking first and catching the specific error give the same 74 ratios. Python programmers often prefer the try style, but here the choice is about clarity, not correctness.

### The zero trap

Filling gaps with zero keeps all 97 rows and looks complete. It invents 23 empty weekends and pulls the average ratio down by almost a quarter.

### The broad except

Catch every exception and mistype one field name, and the loop raises KeyError on every row, catches it, and keeps 0 of 97 sites with no message at all.

### What the 74 ratios show

Most Wanneroo roads are quieter at weekends: the median site carries about four-fifths of its weekday traffic. Three sites run the other way, led by Indian Ocean Drive north of Breakwater Drive, whose weekend average is 1.178 times its weekday figure. The steepest weekend drop is on Flynn Drive east of Wanneroo Road, at 0.541.

Volumes are from the Main Roads Traffic Digest, downloaded on 12 October 2026, for the 97 sites Main Roads assigns to the City of Wanneroo. Of the 23 sites without weekend averages, 21 have a 2024/25 count year. Each ratio compares two numbers from the same site and year; the medians and means are our own calculation.

## Catch the error you expect, and only that one

The lesson ends with one rule: name the exception you mean, keep the try block small, and record what was skipped.

**Lesson steps**

| Step | Learner task |
|---|---|
| 1 | Load the Wanneroo rows and run the naive loop to see the TypeError. |
| 2 | Write the LBYL version with an explicit None check. |
| 3 | Write the EAFP version catching only TypeError, and list the skipped sites. |
| 4 | Plant a field-name typo, wrap it in except Exception, and watch every row vanish. |

Step 3 asks learners to print the skipped list, not just count it. Four of the gaps sit on Wanneroo Road and five on Marmion Avenue, so a road-by-road summary built from the 74 survivors would quietly under-represent those roads. Learners finish by writing one sentence that reports the coverage alongside the answer: 74 of 97 sites had a weekend figure.

### Younger learners

Program a robot that checks a door is open before walking through, then one that tries the door and steps back if it is locked.

### Teenagers

Write both versions, test them on rows with gaps, and explain why except Exception is dangerous.

### Adults

Review error handling in work scripts and replace silent broad excepts with named ones and logs.

## Counted roads and the coming school year

Facts from Main Roads and the WA Department of Education.

### Busiest counter

Joondalup Drive west of Wanneroo Road averages 44,223 vehicles a day across the week, from a 2024/25 count.

### Wanneroo Road

With 17 count sites, Wanneroo Road has more counters than any other road in the council.

### 2027 starts

WA public school students go back on Monday 1 February 2027, and the first term runs until Friday 9 April.

**Boundary note** Figures use the ABS council boundary of about 683.3 square kilometres. Traffic sites follow the council Main Roads records; school counts use our own point-in-polygon test.

## From robot doors to exception handling

A rough age guide; the trial lesson settles it.

- **Ages 6 to 10: Blocks and rules** Scratch programs with if-then checks and safe fallbacks. [Scratch Coding for Kids](/courses/scratch-programming-complete-course), [Coding for Kids](/courses/kids-coding-blocks-masterclass)
- **Ages 10 to 14: First Python** Variables, conditions and the first try and except. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [Maths Through Coding](/courses/maths-through-coding)
- **Ages 14 to 18: Robust Python** Real files, missing values and tested functions. [Python for Teens](/courses/python-complete-masterclass-teens), [Data Science for Teens](/courses/data-science-course-for-teens-python-data)
- **University and adult: Python on the job** Automation and data scripts that fail clearly. [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college), [Python Automation Course](/courses/python-ai-automation-masterclass-college)

## Do AI assistants handle errors well?

They often write the broad catch-all, because it makes code run.

Ask an assistant to fix the Wanneroo crash and a common suggestion is to wrap the loop in except Exception. The error disappears, and so might every row, the next time a field name changes.

A learner who has watched 97 sites become 0 will ask which exception is expected, how many rows were skipped and why. That turns a quick patch into reliable code.

In Wanneroo classes, a script that runs is only the start of the review. The longer argument is in [is coding still worth learning in 2026](/blog/is-coding-worth-learning-2026).

## How lessons reach Wanneroo

Classes are taught live over video, which spares families the long drives of the outer north.

- **Teacher present** Each lesson is live, with code checked while learners type.
- **Term-based** Lessons line up with WA school terms and stop for holidays.
- **Try it first** A free trial lesson leads to a written plan.
- **Group options** Five to ten learners per level, or private sessions.
- **Regular schedule** Two sessions every week, around eight a month.
- **India hours** A 5pm Wanneroo session starts at 2:30pm Indian time.

**No seasonal shift** Daylight saving in Western Australia last ended in March 2009, the IANA time zone database shows, so lesson times keep the same two-and-a-half-hour gap with India.

## Wanneroo class fees

All learners pay the same fees.

- First class: USD 0. No fee for the first lesson, which comes with a plan.
- Group tuition: USD 100 a month. Groups: roughly eight lessons a month, five to ten learners.
- Private tuition: USD 150 a month. Private: roughly eight lessons a month with one teacher.

Fees are billed in US dollars and start only when the trial has set the course and a regular weekly time. Holiday and missed-lesson details are on the pricing page.

## Wanneroo coding and Python questions

### What was the City of Wanneroo's population?

The 2021 Census counted 209,111 residents with a median age of 35. The ABS estimate for 2025 is 246,147.

### What do EAFP and LBYL mean?

EAFP is easier to ask forgiveness than permission: try the operation and catch the error. LBYL is look before you leap: check conditions first.

### Which style should beginners use?

Either, as long as the check or the caught exception is specific. The real mistake is catching every exception and hiding problems.

### Why not replace missing values with zero?

Because zero is a measurement and missing is not. In Wanneroo it would invent 23 empty weekends.

### When can a child start Python?

Often around 9 or 10, after some block coding. The free lesson checks readiness.

### How many traffic counters does Wanneroo have?

Main Roads lists 97 count sites on 34 roads in the City of Wanneroo, 74 of them with a weekend average.

### Do you have a centre in Wanneroo?

No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.

### What do Wanneroo classes cost?

The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of five to ten, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.

### How are groups arranged?

By level and pace, five to ten learners, not by age or suburb. One-to-one lessons are available when no group time fits.

### Can adults learn Python here?

Yes. Adults study in adult groups or privately, often to automate spreadsheets and reports.

## Other pages to try

Families north of the city can also read the [Perth Python and coding page](/online-coding-and-python-classes-in-perth-western-australia), our [state guide for Western Australia](/coding-and-ai-classes-in-western-australia), and [moving from Scratch to Python](/after-scratch-next-step-python-australia).

## Contact

Book the free class on [https://learn.modernagecoders.com/online-coding-and-python-classes-in-wanneroo-perth](https://learn.modernagecoders.com/online-coding-and-python-classes-in-wanneroo-perth#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
