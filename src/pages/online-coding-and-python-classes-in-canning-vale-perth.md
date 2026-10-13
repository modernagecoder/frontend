---
title: "Online Coding and Python Classes in Canning Vale, Perth"
description: "Live online coding and Python classes for Canning Vale learners aged 6 to adult, with a Python project on closures tested against real WA school enrolment data."
canonical: https://learn.modernagecoders.com/online-coding-and-python-classes-in-canning-vale-perth
source: src/pages/online-coding-and-python-classes-in-canning-vale-perth.html
---
> Live online coding and Python classes for Canning Vale learners aged 6 to adult, with a Python project on closures tested against real WA school enrolment data.

Skip to contentCourse picks for Canning Vale

## Python from first steps to tested code

Courses that build the habits the closure project needs. A free trial sets the level.

[![Python for Teens course thumbnail](/images/python-teens.webp)Ages 13 to 17Python for TeensFunctions, scope and tests, practised on real tables.See the syllabus](/courses/python-complete-masterclass-teens)[![Python Masterclass course thumbnail](/images/python-college.webp)University and adultPython MasterclassPython from scratch to readable, checked programs.See the syllabus](/courses/python-programming-masterclass-zero-to-advanced-college)[![Python and AI for Kids course thumbnail](/images/python-kids.webp)Ages 8 to 12Python and AI for KidsTyped Python for children, in short projects they can verify.See the syllabus](/courses/python-ai-kids-masterclass)[![Data Analysis Course course thumbnail](/images/data-analysis-college.webp)University and adultData Analysis CourseCleaning and summarising data before trusting any output.See the syllabus](/courses/data-analysis-mastery-course-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Canning Vale in the Census

## A suburb of houses and young families

Counts for the Canning Vale suburb and locality (ABS SAL50245) from 2021 Census QuickStats, read on 12 October 2026.

| Measure | Value |
| --- | --- |
| People | 34,504 |
| Median age | 37 |
| Families | 9,386 |
| Private dwellings | 11,053 |
| People per household | 3.1 |
| Bedrooms per dwelling | 3.9 |

| Share | Canning Vale | WA |
| --- | --- | --- |
| Separate houses | 94.4% (9,854) | 79.7% |
| Couple families with children | 57.7% (5,417) | 44.6% |
| Residents aged 15 to 19 | 7.2% (2,481) | 5.8% |
| Drove a car to work | 66.5% (11,553) | 62.1% |

### Equal age bands

The Census counted exactly 2,394 residents aged 5 to 9 and another 2,394 aged 10 to 14. Equal numbers in real data turn out to matter in the project below.

### Two councils

Our grid test puts about 61% of the suburb's area in the City of Canning and 39% in the City of Gosnells. The suburb figures here cover both parts.

### Census timing

The 2021 Census was taken during the pandemic, so the share driving to work describes that particular week.

The ABS rounds percentages and slightly adjusts small counts to protect privacy, so table parts may not sum to totals. We quote its figures exactly and do not add rows together.

Signature project

## Eight functions that all read Year 6

The Department of Education list gives student numbers for every year level at each WA school, as at the 2026 Semester 1 census. Our map test finds five government primary schools inside the Canning Vale outline. Learners want one small function per year level, so they write a loop.

| Year level | Published | Buggy function | Fixed function |
| --- | --- | --- | --- |
| Kindergarten | 81 | 130 | 81 |
| Pre-primary | 90 | 130 | 90 |
| Year 1 | 118 | 130 | 118 |
| Year 2 | 125 | 130 | 125 |
| Year 3 | 135 | 130 | 135 |
| Year 4 | 133 | 130 | 133 |
| Year 5 | 127 | 130 | 127 |
| Year 6 | 130 | 130 | 130 |

### Why it happens

Each lambda stores the name of the loop variable, not its value. Python looks the name up when the function runs, and by then the loop has finished on Y06.

### 33 of 40 wrong

Across five schools and eight year levels, 33 lookups return the wrong number. The bug is total, yet it does not crash and every output looks like a plausible enrolment.

### 7 lucky passes

Five checks pass because Year 6 is genuinely Year 6. Two more pass because one school has 64 students in both Year 4 and Year 6, and another has 38 in both Year 5 and Year 6.

### The testing lesson

A learner who tested only the last item, or happened to pick a school with matching numbers, would ship the bug. Good tests use values that cannot coincide. Here that means checking a year where the published figure differs from Year 6, at more than one school.

Student numbers come from the WA Department of Education schools list, downloaded on 12 October 2026. Which schools sit inside the ABS outline is decided by our own point-in-polygon test on the list's coordinates. The lookups, counts and checks are our own script; schools are described by size rather than named.

Fixing the closure

## Capture the value, not the name

The fix is one short change: give each lambda a default argument, yl=yl, which is evaluated once, at the moment the function is created.

| Step | Learner task |
| --- | --- |
| 1 | Read the schools list and keep government primaries inside Canning Vale. |
| 2 | Build a dict of eight getters with a comprehension and print every result. |
| 3 | Count wrong lookups, then list the lucky passes and explain each one. |
| 4 | Apply the default-argument fix, or a small factory function, and rerun the checks. |

A second dataset makes the point again. The suburb's government secondary college lists 247 students in Year 8 and 247 in Year 11. A getter that wrongly read Year 11 would pass a Year 8 check there and fail nowhere else in that row. Learners write a rule of thumb for their notebooks: before trusting a test, ask whether the wrong answer could equal the right one.

### Younger learners

Label boxes with sticky notes, move the last note onto every box, and spot why each box now says the same thing.

### Teenagers

Reproduce the bug, fix it two ways, and design tests that a coincidence cannot pass.

### Adults

Find the same pattern in callbacks, event handlers and loops that schedule work in real code.

Canning Vale facts

## Schools, area and the 2027 calendar

Details from the Department of Education list, the ABS boundaries and the 2027 term dates.

### Seven government schools

Inside the outline our test finds five primary schools, one senior high college and one education support centre.

### Across the boundary

Four of those seven sit on the City of Gosnells side and three on the City of Canning side, by the same test.

### Term 1, 2027

WA public schools start on Monday 1 February 2027; the first term closes on Friday 9 April.

Outline used

Canning Vale is the ABS suburb outline of about 25.3 square kilometres. Council shares come from our own test of a regular grid of points against the two ABS council outlines.

Learning ladder

## From sticky notes to closures

Ages give a rough guide; the trial lesson decides.

Ages 6 to 10

### Blocks first

Scratch projects that build careful sequencing.

[Scratch Coding for Kids](/courses/scratch-programming-complete-course)[Coding for Kids](/courses/kids-coding-blocks-masterclass)Ages 10 to 14

### Typed Python

Variables, loops and small functions in real code.

[Python and AI for Kids](/courses/python-ai-kids-masterclass)[Maths Through Coding](/courses/maths-through-coding)Ages 14 to 18

### Python with data

Files, functions and tests on public tables.

[Python for Teens](/courses/python-complete-masterclass-teens)[Data Science for Teens](/courses/data-science-course-for-teens-python-data)University and adult

### Python at work

Automation and clean, tested scripts.

[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)[Python Automation Course](/courses/python-ai-automation-masterclass-college)Python and AI

## Will AI assistants avoid this bug?

Not reliably, and that is the reason to understand it.

Closures created in loops are a classic trap, and AI assistants still write them, especially in callbacks and dictionary comprehensions. The code runs, the numbers look sensible, and nothing warns you.

A Canning Vale learner who has watched 33 lookups go wrong will recognise the pattern in generated code at a glance, and will know to test with values that cannot coincide.

Our Python classes treat AI output as a draft that still needs a proper test. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

Delivery

## Online classes for Canning Vale

Lessons run live over video, so there is no drive along Ranford or Nicholson Road.

### Live teaching

A teacher leads every lesson and reviews code as it is typed.

### School terms

Classes follow the WA terms and pause in the holidays.

### Trial first

One free lesson, followed by a written recommendation.

### Level groups

Fifteen to twenty learners at one level, or one to one.

### Two a week

Around eight lessons a month.

### Indian time

A 5:30pm Canning Vale lesson starts at 3pm in India.

Steady clocks

The IANA time zone database records Western Australia's last daylight saving period ending in March 2009, so lesson times never shift against India.

Fees

## Canning Vale class fees

Fees are identical for every learner.

First class**USD 0**

Your first lesson is free and includes a plan.

Group tuition**USD 100**

Group classes: about eight lessons monthly, fifteen to twenty learners.

Private tuition**USD 150**

One-to-one: about eight lessons monthly with one teacher.

Fees are set in US dollars and begin only once the trial has chosen a course and a weekly time. The pricing page covers holidays and missed lessons.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20coding%20or%20Python%20class%20for%20a%20learner%20in%20Canning%20Vale.)Reviews

## What families say on Google

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

## Book a free Canning Vale lesson

Tell us the learner's age and interests. A younger child might play the sticky-note game; a teenager might fix the closure bug.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Canning Vale one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20coding%20or%20Python%20class%20for%20a%20learner%20in%20Canning%20Vale.)

Submitted details are used for placement and follow-up.

FAQ

## Canning Vale coding and Python questions

Common questions from Canning Vale families and adult learners.

### How many people live in Canning Vale?

The 2021 Census counted 34,504 people in the Canning Vale suburb, with a median age of 37.

### Which council is Canning Vale in?

Both. Our test of the ABS outlines puts about 61% of its area in the City of Canning and 39% in the City of Gosnells.

### What is a closure in Python?

A function that remembers variables from the place where it was created. It remembers the variable itself, not a snapshot of its value.

### What does late binding mean?

Python looks up a closure's free variables when the function is called. In a loop, that is usually after the loop has ended.

### What age can children start Python?

Many start typed Python at about 9 or 10 after some block coding. The trial lesson checks readiness.

### Where do the school numbers come from?

From the WA Department of Education schools list, which gives student numbers by year level as at the 2026 Semester 1 census.

### Do you have a centre in Canning Vale?

No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.

### What do Canning Vale classes cost?

The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.

### How are learners grouped?

By level and pace in groups of fifteen to twenty, not by age or suburb. One-to-one lessons suit anyone no group time fits.

### Can adults learn Python with you?

Yes. Adults join adult groups or private lessons, often to automate tasks at work.

More for Perth learners

## Explore more

See the [Perth page](/online-coding-and-python-classes-in-perth-western-australia) for the city, the [Western Australia guide](/coding-and-ai-classes-in-western-australia) for the state, and the [Python and AI course for kids](/python-ai-course-for-kids-australia) for younger starters.

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20coding%20or%20Python%20class%20for%20a%20learner%20in%20Canning%20Vale.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/online-coding-and-python-classes-in-canning-vale-perth*
