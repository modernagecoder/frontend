---
title: "Online Coding and Python Classes in Redlands, Brisbane"
description: "Live online coding and Python classes for Redlands learners aged 6 to adult, with a type-checking project built on real public transport stop IDs in Redland City."
canonical: https://learn.modernagecoders.com/online-coding-and-python-classes-in-redlands-brisbane
source: src/pages/online-coding-and-python-classes-in-redlands-brisbane.html
---
> To let a tool check your assumptions before your users do. Redland City has 691 stop records in the Translink feed, and 11 of their IDs are words, not numbers. A function that treats every ID as a number is wrong, and the type checker mypy says so in one line before the program ever runs.

[Home](/) / [Australia](/coding-classes-in-australia) / [Queensland](/coding-and-ai-classes-in-queensland) / [Brisbane](/best-coding-classes-in-brisbane) / Redlands

Redland City, Brisbane, Queensland / Live online

# Online coding and Python classes in Redlands

**What does a Redlands Python project teach?** To let a tool check your assumptions before your users do. Redland City has 691 stop records in the Translink feed, and 11 of their IDs are words, not numbers. A function that treats every ID as a number is wrong, and the type checker mypy says so in one line before the program ever runs.

Redland City stretches from Thorneside and Capalaba out to the Southern Moreton Bay Islands. On Wednesday 21 October 2026 the Translink timetable has 16,809 stop visits inside the council area on 31 routes: 16,167 by bus, 540 by train and 102 by ferry. Every one of those stops carries an ID, and that is where the lesson starts.

Facts last verified 12 October 2026. Teaching is online; no Redlands branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 15 to 20 students per group.

## Python and coding courses

All taught live, in level-matched groups or one to one. The trial lesson finds the right fit.

- [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college) (University and adult): Python in depth, including type hints and testing.
- [Python for Teens](/courses/python-complete-masterclass-teens) (Ages 13 to 17): Python projects on real files and data.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass) (Ages 8 to 12): A gentle start in Python with games and AI.
- [Coding for Kids](/courses/kids-coding-blocks-masterclass) (Ages 6 to 10): Logic and sequencing with blocks before typing.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## A council of family houses by the bay

Figures for the Redland local government area (ABS LGA36250) from its 2021 Census QuickStats, read on 12 October 2026.

**Redland City headline counts**

| Measure | Redland City |
|---|---|
| People | 159,222 |
| Median age | 43 |
| Families | 45,763 |
| Private dwellings | 65,165 |
| People per household | 2.6 |
| Motor vehicles per dwelling | 2 |

**Redland City shares next to Queensland**

| Share | Redland City | Queensland |
|---|---|---|
| Separate house | 83.9% (49,276) | 74.8% |
| Aged 10 to 14 | 6.8% (10,750) | 6.6% |
| Car as driver to work | 61.6% (47,296) | 59.5% |
| Train to work | 1.0% (780) | 1.1% |

### Primary years

Redland City had 9,447 residents aged 5 to 9 at the Census, 5.9% of its people.

### Townhouses and units

Semi-detached homes, terraces and townhouses made up 11.4% of dwellings, flats 4.4%.

### An odd week

The August 2021 Census was held during the pandemic, so travel and work answers describe that week only.

The bureau rounds its percentages and slightly perturbs small counts for confidentiality. We print the published values and never sum rows into totals the bureau did not publish.

## Eleven IDs that are not numbers

Of the 691 stop records inside Redland City, 680 have numeric IDs. The other 11 group platforms and berths under a name: Birkdale, Cleveland, Ormiston, Thorneside and Wellington Point stations, Capalaba station, Victoria Point Central, three island ferry terminals and Redland Bay Marina.

**One bug, four versions of the code (our run, mypy 2.4.0, Python 3.13)**

| Version | mypy before running | When it runs |
|---|---|---|
| is_station(stop_id: int), called with text IDs | 1 error: incompatible type "str"; expected "int" | TypeError on the first comparison |
| Same code, no type hints | nothing to check | the same TypeError, found only at run time |
| "Fixed" with int(stop_id) | no issues found | ValueError on place_birsta |
| is_station(stop_id: str) using startswith("place_") | no issues found | runs: 691 IDs, 11 grouped places |

### What mypy caught

The loader promises a list of strings and the checker promises an integer. mypy reads both promises and reports the clash at line 11 without touching the data.

### What mypy missed

Wrapping each ID in int() satisfies the types, so mypy is happy. The data still contains "place_birsta", and the program fails on it. Types check shapes, not values.

### The real fix

Keep IDs as text, as the feed defines them, and test for the place_ prefix. The checker passes and all 691 records load.

### A sorting myth we tested

Sorting IDs as text instead of numbers can scramble their order. Here it does not matter: 679 numeric IDs have six digits and one, 11370, has five. We checked rather than assumed.

The stop IDs are real Translink records placed in Redland City by our own point-in-polygon test. The four code versions and their outputs come from our run in an isolated environment.

## Promises the checker can read

A type hint such as stop_id: str tells readers and tools what a function expects. Python itself ignores hints when running; mypy reads them and reports mismatches.

**The lesson in four moves**

| Step | Learner task |
|---|---|
| 1 | Load stop IDs from the feed and count numeric and text ones. |
| 2 | Write is_station with an int hint and run mypy. |
| 3 | Try the int() shortcut, then watch it fail on real data. |
| 4 | Rewrite with str and a prefix test; rerun both checks. |

Many teams run a type checker on every change, next to their tests. Tests check behaviour on chosen examples; a type checker checks every call site at once. They catch different mistakes, so learners use both.

### Young coders

Sort cards into number and word piles, then find the card that broke the rule.

### Teenagers

Add hints to a real script and fix each mypy message one at a time.

### Adults

Introduce gradual typing to an existing codebase without stopping work.

## Trains, buses, island ferries and the 2027 terms

Translink counts for Wednesday 21 October 2026 and 2027 dates from the Queensland Department of Education.

### Island ferries

The 102 ferry visits counted inside the outline that Wednesday are all at Redland Bay Marina, under one route code, SMBI.

### Five rail stations

Train visits total 540 at the five stations from Thorneside to Cleveland.

### School year

Queensland state school Term 1 runs from Wednesday 27 January to Thursday 25 March 2027.

**Area used** Redlands here is the ABS outline of Redland City local government area, about 537 square kilometres. Stops are assigned to it with our own point-in-polygon test, and address-style data appears only as counts.

## From sorting cards to typed Python

Ages are a guide; the free lesson places each learner.

- **Ages 6 to 9: Rules and kinds** Block programs that sort numbers from words. [Coding for Kids](/courses/kids-coding-blocks-masterclass), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **Ages 8 to 12: Starting Python** Variables, types and friendly error messages. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)
- **Ages 13 to 17: Reliable scripts** Files, hints and checks on real data. [Python for Teens](/courses/python-complete-masterclass-teens), [Data Science for Teens](/courses/data-science-course-for-teens-python-data)
- **University and adult: Professional Python** Typing, testing and maintainable code. [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college), [Python Automation Course](/courses/python-ai-automation-masterclass-college)

## Does AI-written code need type checking?

Yes, and often more than hand-written code.

AI assistants guess at data shapes from names. Ask for a function about stop IDs and you may well get one that treats them as integers, because many IDs look like numbers.

Running mypy over generated code is a cheap second opinion. A Redlands learner who has seen int() pass the checker and still crash also knows its limit, and tests the data as well.

In Redlands classes, learners check AI output with real tools, not hope. The longer argument is in [is learning to code still worth it](/blog/is-coding-worth-learning-2026).

## Studying online from Redlands

Lessons are live video sessions, so learners on the mainland or the islands join the same way.

- **Teacher present** Every lesson is taught live, with the learner's screen shared.
- **School holidays** Classes follow Queensland terms and stop over the holidays.
- **Free trial** One full lesson without charge, then a written course suggestion.
- **Group or private** Groups of fifteen to twenty at one level, or one to one.
- **Two per week** About eight lessons each month.
- **India hours** A 6:30pm Redlands lesson is 2pm in India.

**Fixed offset** Queensland ended its last daylight saving period in March 1992, the IANA time zone database records, so lessons never move with clock changes.

## Redlands class fees

Fees are identical for every learner.

- First class: USD 0. The first lesson is free and ends with a recommended plan.
- Group tuition: USD 100 a month. Group study: about eight lessons a month, fifteen to twenty learners.
- Private tuition: USD 150 a month. Private study: about eight lessons a month, one to one.

Redlands fees are billed in US dollars, after the trial has fixed a course and a weekly time. The pricing page explains holidays and missed lessons.

## Redlands coding and Python questions

### How many people live in Redland City?

The 2021 Census counted 159,222 people in the Redland local government area, with a median age of 43.

### What is mypy?

mypy is a free static type checker for Python. It reads type hints in the code and reports calls that do not match them, without running the program.

### Do type hints slow Python down?

No. Python ignores hints at run time. They help readers and tools such as mypy and code editors.

### When should learners start using type hints?

Usually after they are comfortable with functions, often in the teen or adult Python courses.

### Can island families join classes?

Yes. Classes are online, so any home with a stable internet connection works.

### How many stop records are in Redland City?

Our point-in-polygon count finds 691 Translink stop records inside the council area, 680 with numeric IDs and 11 grouped places.

### Do you have a centre in Redlands?

No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.

### What do Redlands classes cost?

The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.

### Who is in each group?

Fifteen to twenty learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.

### Which train stations are in Redland City?

Birkdale, Cleveland, Ormiston, Thorneside and Wellington Point stations sit inside the council outline in the Translink feed.

## Further reading

Read the [Brisbane page](/best-coding-classes-in-brisbane) for the region, the [Queensland guide](/coding-and-ai-classes-in-queensland) for the state, and [kids coding in Brisbane](/coding-classes-for-kids-brisbane) for younger learners.

## Contact

Book the free class on [https://learn.modernagecoders.com/online-coding-and-python-classes-in-redlands-brisbane](https://learn.modernagecoders.com/online-coding-and-python-classes-in-redlands-brisbane#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
