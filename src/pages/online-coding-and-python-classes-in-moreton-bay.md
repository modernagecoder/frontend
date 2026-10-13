---
title: "Online Coding and Python Classes in Moreton Bay | Live Lessons"
description: "Live online Python and coding classes for Moreton Bay teenagers and adults, with a project that loads every local timetabled stop and measures the memory it uses."
canonical: https://learn.modernagecoders.com/online-coding-and-python-classes-in-moreton-bay
source: src/pages/online-coding-and-python-classes-in-moreton-bay.html
---
> Live Python lessons in which a Moreton Bay teenager or adult works with data big enough to matter, measures what their code costs, and explains the trade-offs to a teacher. The council area counted 476,340 people at the 2021 Census. Lessons run online, privately or in a small group at the same level, and the first lesson is free.

[Home](/) / [Queensland](/coding-and-ai-classes-in-queensland) / [Australia](/coding-classes-in-australia) / Moreton Bay

Moreton Bay, north of Brisbane, Queensland / Live online

# Online coding and Python classes in Moreton Bay

**What are the best online coding and Python classes in Moreton Bay?** Live Python lessons in which a Moreton Bay teenager or adult works with data big enough to matter, measures what their code costs, and explains the trade-offs to a teacher. The council area counted 476,340 people at the 2021 Census. Lessons run online, privately or in a small group at the same level, and the first lesson is free.

Translink publishes its whole south east Queensland timetable as open data: every trip, every stop, every scheduled time. Inside the Moreton Bay council boundary that comes to 1,347 stops and 137,865 timetabled stop times in the current feed, from Kippa-Ring and Petrie stations to the buses of Bribie Island. Load them into Python as dictionaries and they take 38.6 megabytes. Load the same values into a class that declares its fields with __slots__ and they take 13.3. Nothing about the timetable changed, only the containers holding it. Our Moreton Bay learners find out where memory goes in a Python program and how to stop wasting it.

Facts last verified 10 October 2026. Teaching is online; no Moreton Bay branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 15 to 20 students per group.

## Python paths for Moreton Bay learners

Each one arrives at the timetable project below. A free lesson picks the right start, and no card is asked for.

- [Python for Teens](/courses/python-complete-masterclass-teens) (Ages 13 to 17): Python from the start through files, dictionaries and the first custom classes.
- [Problem Solving for Teens](/courses/problem-solving-dsa-masterclass-teens) (Ages 14 to 18): Choosing data structures by cost, measuring speed and memory instead of guessing.
- [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college) (University and adult): Classes, dataclasses, __slots__ and profiling, with tests at every stage.
- [Data Structures & Algorithms Course](/courses/data-structures-algorithms-masterclass-college) (University and adult): How containers are built underneath, and when that changes a design.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## A council area of 476,340 north of Brisbane

The 2021 Census for the Moreton Bay council area, placed beside Queensland and Australia.

Moreton Bay was home to 476,340 people with a median age of 39. They made up 132,607 families and lived in 188,200 private dwellings, at 2.6 people per household.

**Moreton Bay against Queensland and Australia (2021 Census shares)**

| Share | Moreton Bay | Queensland | Australia |
|---|---|---|---|
| Separate houses (138,771 dwellings) | 81.1% | 74.8% | 72.3% |
| Professionals (39,202 people) | 17.9% | 21.4% | 24.0% |
| Bachelor degree or above (65,353 people) | 17.1% | 21.9% | 26.3% |
| Technicians and trades workers (32,335 people) | 14.7% | 13.7% | 12.9% |

### Units and flats

There were 7,974 flats and apartments, 4.7% of dwellings, against 12.5% for Queensland.

### Fifteen to nineteen

Residents aged 15 to 19 numbered 30,026, or 6.3% of the population.

### Twenty to twenty-four

Another 27,256 residents were aged 20 to 24, 5.7% of the total.

The ABS estimates 532,445 people in Moreton Bay at 30 June 2025. Because the bureau adds small random changes to Census cells, rows may not sum to totals; all figures are printed as published, and we never total rows ourselves.

## How much memory does Moreton Bay's timetable take in Python?

The 137,865 stop times at Moreton Bay stops in Translink's open timetable feed, loaded seven different ways and measured with Python's tracemalloc.

**Same 137,865 records, seven containers (our measurements, Python 3.13, 10 October 2026)**

| Container | Memory for all records | Bytes per record |
|---|---|---|
| Dictionary | 38.6 MB | 272 |
| Plain class | 18.8 MB | 176 |
| Dataclass | 18.8 MB | 176 |
| Named tuple | 15.5 MB | 96 |
| Tuple | 14.4 MB | 96 |
| Class with __slots__ | 13.3 MB | 88 |
| Dataclass with slots=True | 13.3 MB | 88 |

### 1. Pick out the stops

The feed lists stops by coordinates. A point-in-polygon test against the ABS council boundary keeps the 1,347 inside Moreton Bay and drops the northern Brisbane suburbs a simple rectangle would catch.

### 2. Load seven ways

Each stop time has seven fields: trip, arrival, departure, stop, sequence and two pickup flags. The same strings and numbers go into every container, so only the container changes.

### 3. Measure, do not guess

tracemalloc counts the bytes each version allocates. Dictionaries cost almost three times as much as slotted objects for exactly the same timetable.

### Where the bytes go

An ordinary Python object keeps its attributes in a hidden dictionary, built to accept new keys at any time. Declaring __slots__ tells Python the fields in advance, so it stores them in fixed positions with no dictionary at all. Across 137,865 records that saves 25.3 megabytes against plain dictionaries. The whole south east Queensland feed holds 2,879,577 stop times, roughly 21 times as many, which is where these choices stop being academic.

The feed is Translink's, valid from 7 October to 6 December 2026, used under its open licence. Memory figures are our own, measured on Python 3.13.6; other versions and platforms give somewhat different numbers, which is why learners measure on their own machines.

## How to find out what your data really costs

Practised on Moreton Bay's timetable, then applied to logs, sensor readings and any program that holds many small records.

**Steps in the Moreton Bay memory study**

| Step | Tool | Why |
|---|---|---|
| Fix the data first | Load the strings once and reuse them | Only the container should differ between runs |
| Measure allocation | tracemalloc | Counts what each version adds, not what the process already held |
| Inspect one object | sys.getsizeof on the object and its __dict__ | Shows 272, 176 and 88 bytes directly |
| Weigh the trade-off | Try adding a new attribute | Slotted objects refuse, which is the price of the saving |

Memory optimisation is not always worth it. For a few thousand records the difference is invisible. The skill is knowing how to measure, so the decision rests on numbers rather than on habit or a rule copied from a forum.

### Secondary students

Load the stop times as dictionaries, then as a small class, and compare sys.getsizeof for one record.

### University students

Profile all seven containers with tracemalloc, explain each result and test how attribute access speed compares.

### Adults at work

Before scaling a script up to millions of rows, measure the container cost on a sample like this one.

Modern Age Coders is not affiliated with Translink, the Queensland Government, the ABS or the City of Moreton Bay. The timetable and statistics belong to them; the measurements are our own.

## Queensland time and the second half of 2027

When a Moreton Bay learner can fit in a live lesson.

### A fixed clock

Moreton Bay keeps Queensland time, UTC plus 10, with no daylight saving to plan around.

### India time

Moreton Bay is four and a half hours ahead of India time all through the year.

### Southern summer

Between October and April, Sydney and Melbourne are an hour ahead; Moreton Bay lessons keep their hour.

**Queensland school terms later in 2027** The department lists Term 3 of 2027 from Monday 12 July to Friday 17 September and Term 4 from Tuesday 5 October to Friday 10 December, with 44 days of summer holidays to follow.

## From a first dictionary to profiled programs

Ages give a rough idea only; the free lesson places each learner.

- **Ages 13 to 14: Lists and dictionaries** Storing records, looking things up and printing tidy results. [Python for Teens](/courses/python-complete-masterclass-teens), [Maths Through Coding](/courses/maths-through-coding)
- **Ages 15 to 18: Classes and costs** Writing classes, comparing containers and timing code. [Python for Teens](/courses/python-complete-masterclass-teens), [Problem Solving for Teens](/courses/problem-solving-dsa-masterclass-teens)
- **University: Profiling** tracemalloc, cProfile and designing for memory and speed together. [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college), [Data Structures & Algorithms Course](/courses/data-structures-algorithms-masterclass-college)
- **Adults: Scaling scripts** Taking a working script from a sample to the full dataset without surprises. [Python Automation Course](/courses/python-ai-automation-masterclass-college), [Data Analysis Course](/courses/data-analysis-mastery-course-college)

## Would an AI assistant choose a lean container?

It usually reaches for a dictionary.

Ask a chatbot to load the Moreton Bay timetable and it will most likely produce a list of dictionaries, the most familiar pattern in its training. It works, and it uses almost three times the memory of a slotted class for the same records.

Our Moreton Bay learners let AI write the loader, then measure it with tracemalloc and try the alternatives themselves. They learn to ask the assistant for the trade-offs, not just the code.

A Moreton Bay learner who has measured 38.6 megabytes shrink to 13.3 will check the cost of AI-written code before trusting it at scale, whatever arrives after 2026. The longer argument is in [why understanding code still beats copying it](/blog/is-coding-worth-learning-2026).

## From Redcliffe to Caboolture, one online class

A live lesson online is equally close to every part of Moreton Bay.

- **Queensland time only** Lesson times are written in Moreton Bay time and stay put all year.
- **Queensland year levels** Teachers plan to Queensland year levels, including QCE seniors, and teach in English.
- **Write code on day one** The trial lesson is genuine programming with a teacher; we then suggest a course and time, and no payment details are taken.
- **Fifteen to twenty per group** Learners share a level, drawn from different places so every stage has a usable slot.
- **Two lessons each week** About eight a month, with holidays and exam periods planned ahead.
- **Evening slots for workers** Adults commuting into Brisbane can join later groups or book one-to-one lessons.

**Written in local time** Every lesson time we send is in Queensland time, so there is nothing to convert.

## Online Python fees for Moreton Bay

Three options, stated plainly.

- First class: USD 0. One free lesson that ends with our suggested level, course and time.
- Group tuition: USD 100 a month. About eight group lessons a month, with fifteen to twenty learners at your level.
- Private tuition: USD 150 a month. About eight one-to-one lessons a month with the same teacher.

Moreton Bay families pay the same US dollar fee as families anywhere else in Australia. Nothing is charged before the trial settles a course and time, and the pricing page explains holidays, missed lessons and changing format.

## Moreton Bay Python class questions

### How many people live in Moreton Bay?

The 2021 Census counted 476,340 people in the Moreton Bay council area. The ABS estimate at 30 June 2025 is 532,445.

### What does __slots__ do in Python?

__slots__ is a class attribute that lists the only fields an object may have. Python then stores those fields in fixed slots instead of a per-object dictionary, which saves memory and stops new attributes being added by mistake.

### What is the Moreton Bay timetable project?

Learners download Translink's open timetable feed, keep the stops inside the Moreton Bay council boundary, load the 137,865 stop times in seven kinds of container, and measure the memory each one uses with tracemalloc.

### Is a dataclass more efficient than a dictionary?

In our Moreton Bay measurements a plain dataclass used 18.8 MB against 38.6 MB for dictionaries, and a dataclass with slots=True used 13.3 MB. The exact numbers vary with Python version, so learners measure on their own machine.

### Can QCE students join?

Yes. Year 11 and 12 students fit lessons around their QCE subjects, and any assessed work stays entirely their own.

### What lesson times suit Moreton Bay?

After school, evenings and weekends, agreed in the trial and written in Queensland time, four and a half hours ahead of India time.

### Is there anything for primary school children?

Yes, from age 6 with visual coding tools; the timetable project here is designed for teenagers and adults.

### Is there a Modern Age Coders office in Moreton Bay?

No, and we do not claim one. Teaching is live and online only, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a steady connection, and the contact number on this page is an Indian number.

### What do online Python classes in Moreton Bay cost?

The first lesson is free. After that a group place costs USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before any payment.

### How large are the groups?

Between five and ten learners, matched on level, pace and goals rather than on age or postcode. When no group fits a workable time, one-to-one lessons are offered instead.

## Pages for Moreton Bay's neighbours

South across the boundary is [the Brisbane coding page](/best-coding-classes-in-brisbane), with [coding classes for kids in Brisbane](/coding-classes-for-kids-brisbane) for younger learners. Further north there is [AI and programming on the Sunshine Coast](/ai-and-programming-classes-in-sunshine-coast), and the state guide is [coding and AI classes in Queensland](/coding-and-ai-classes-in-queensland).

## Contact

Book the free class on [https://learn.modernagecoders.com/online-coding-and-python-classes-in-moreton-bay](https://learn.modernagecoders.com/online-coding-and-python-classes-in-moreton-bay#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
