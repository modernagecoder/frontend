---
title: "Online Coding and Python Classes in Prospect, Adelaide"
description: "Live online coding and Python classes for the City of Prospect, for children, teens and adults, built on real Adelaide transport data, in small groups or one to one."
canonical: https://learn.modernagecoders.com/online-coding-and-python-classes-in-prospect-sa-adelaide
source: src/pages/online-coding-and-python-classes-in-prospect-sa-adelaide.html
---
> A working understanding of how Python behaves, including which operations change data in place and which hand back something new. Six-year-olds begin in Scratch, while older learners move on to Python with real open data. The City of Prospect had 22,272 residents in 2021.

[Home](/) / [Australia](/coding-classes-in-australia) / [South Australia](/coding-and-ai-classes-in-south-australia) / [Adelaide](/ai-and-programming-classes-in-adelaide) / Prospect

City of Prospect, Adelaide, South Australia / Live online

# Online coding and Python classes in Prospect

**What do Prospect learners take from online Python classes?** A working understanding of how Python behaves, including which operations change data in place and which hand back something new. Six-year-olds begin in Scratch, while older learners move on to Python with real open data. The City of Prospect had 22,272 residents in 2021.

Rank the City of Prospect's bus stops by how many buses call on a Wednesday, and show the top three. One natural line of Python, ranked = pairs.sort(...), leaves ranked holding None. The data was sorted; the answer was thrown away.

Facts last verified 14 October 2026. Teaching is online; no Prospect branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Courses that explain Python's behaviour

The ranking bug is about methods, return values and reading errors. Each course below builds part of that, and a free first lesson tells us which fits.

- [Python for Teens](/courses/python-complete-masterclass-teens) (Ages 13 to 17): Lists, methods and return values, practised on real data.
- [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college) (University and adult): From first scripts to programs that do what you expect.
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data) (Ages 13 to 17): Ranking, sorting and summarising public datasets.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass) (Ages 8 to 12): Early Python where every result is printed and checked.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## A compact inner-north council

2021 Census QuickStats for the City of Prospect (ABS code LGA46510), alongside South Australia.

**City of Prospect, 2021**

| Measure | City of Prospect |
|---|---|
| Residents | 22,272 |
| Median age | 37 |
| Families | 5,884 |
| Private dwellings | 9,468 |
| People per household | 2.5 |

**Prospect beside South Australia**

| Indicator | Prospect | South Australia |
|---|---|---|
| Adults with a bachelor degree or higher | 40.3% (7,428) | 22.7% |
| Employed people in professional jobs | 32.6% (4,010) | 21.5% |
| Workers who caught a bus to work | 6.2% (759) | 3.1% |
| Flats or apartments | 14.5% (1,253) | 6.8% |

### Children

Prospect counted 1,155 children under five, 1,344 aged 5 to 9 and 1,355 aged 10 to 14.

### Students

24.8% of residents in education, 1,690 people, were at university, against 16.7% statewide.

### Size

At about 7.8 square kilometres, the council area sits just north of the Adelaide park lands.

Because small Census cells are adjusted slightly by the bureau, the numbers are shown unchanged and never combined.

## The ranking that came back empty

The script counts Wednesday 21 October 2026 visits for each of the 84 stop records inside the City of Prospect, stores them as (stop, visits) pairs, then ranks them.

**What our run printed (Python 3.13.6)**

| Line | Output |
|---|---|
| ranked = pairs.sort(key=..., reverse=True) | ranked = None |
| print(ranked[:3]) | TypeError: 'NoneType' object is not subscriptable |
| pairs[:3] after the sort | Already sorted: the list itself changed |
| sorted(counts.items(), key=..., reverse=True)[:3] | A new, ranked list |

**The top of the ranking (our count)**

| Stop record | Wednesday visits |
|---|---|
| Stop 13 North East Road, north-west side | 222 |
| Stop 7A Torrens Road, north-east side | 129 |
| Four records, on Main North Road and North East Road | 125 each |

### In place

list.sort() rearranges the list it belongs to and returns None, a signal that nothing new was created.

### New list

sorted() leaves the original alone and returns a fresh sorted list, which is what the assignment expected.

### The tie

Third place is shared by four records at 125 visits, so "top three" needs a rule for ties as well as a working sort.

### A Python convention

Methods that change an object in place, such as sort, append, reverse and extend, return None. Assigning their result is almost always a mistake, and the None usually surfaces a few lines later, far from the real cause.

Stop records and trips come from the Adelaide Metro timetable, version 1708. Membership of the City of Prospect is our point-in-boundary check, and the output lines are copied from our own run.

## Change in place, or make a new one?

Knowing which operations mutate and which return a copy prevents a whole family of bugs.

**Mutating and non-mutating pairs**

| Changes the list, returns None | Returns something new | Note |
|---|---|---|
| lst.sort() | sorted(lst) | sorted works on any iterable |
| lst.reverse() | reversed(lst) or lst[::-1] | reversed gives an iterator |
| lst.append(x) | lst + [x] | The + version copies |
| lst.extend(other) | lst + other | Same idea |

### Primary learners

Tidy a toy shelf yourself, or ask for a photo of a tidied shelf: one changes the shelf, one gives you something new.

### Secondary learners

Reproduce the Prospect None, read the traceback, and fix it with sorted() and with a separate sort() call.

### Adults

Watch for assignments from in-place methods in scripts, including pandas calls that take inplace=True.

Linters and type checkers often flag this pattern because the assigned value is always None. Running one is a cheap way to catch it before the TypeError does.

## Three railway stations and North East Road

Council-wide timetable details for Wednesday 21 October 2026.

### Rail

Dudley Park, Islington and Ovingham railway station records lie inside the council by our check, with 198 scheduled train visits that day.

### Buses

6,549 of the 6,805 visits were regular buses, on 47 routes in all.

### Weekend

Visits dropped to 3,481 on Saturday 24 October and 3,028 on Sunday 25 October.

**The council, not the NSW suburb** This page is about the City of Prospect in Adelaide. Its figures cover the whole council area; neighbouring Walkerville, Port Adelaide Enfield, Charles Sturt and the City of Adelaide have their own.

## From tidy shelves to tidy code

Ages are rough guides; a trial lesson sets the level.

- **Ages 6 to 10: Blocks** Scratch projects with lists and order. [Scratch Coding for Kids](/courses/scratch-programming-complete-course), [Coding for Kids](/courses/kids-coding-blocks-masterclass)
- **Ages 10 to 14: First Python** Lists, sorting and printing results. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [Maths Through Coding](/courses/maths-through-coding)
- **Ages 14 to 18: Python and data** Ranking and summarising real data. [Python for Teens](/courses/python-complete-masterclass-teens), [Data Science for Teens](/courses/data-science-course-for-teens-python-data)
- **University and adult: Professional Python** Readable, tested scripts for work. [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college), [Python Automation Course](/courses/python-ai-automation-masterclass-college)

## AI fixes the TypeError. Does it explain the None?

Sometimes. The fix is easy; the understanding is what prevents the next one.

Paste the traceback into an assistant and it will likely suggest sorted(). Good. But the same misunderstanding returns with reverse(), append() and pandas inplace calls, each failing somewhere new.

Learners who know why sort() returns None spot the whole family of mistakes in AI-written code before running it. That is the difference between fixing one bug and preventing a dozen.

In Prospect, the learner who understands in-place methods reads AI code without surprises. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Prospect lessons online

Lessons happen live on video, from home.

- **Tracebacks read together** Errors are treated as clues and read line by line with the teacher.
- **Follows SA terms** Lessons pause in South Australian school holidays.
- **Free opening class** A complete first lesson at no cost, then advice.
- **Level groups** Five to ten learners at a matching stage, or private.
- **Two a week** Fixed weekly lessons, around eight a month.
- **India time** Our teachers are in India: a 4:30pm Prospect lesson is 11:30am India time in summer and 12:30pm from April.

**Adelaide and India** Adelaide switches to daylight saving on the first Sunday in October and back on the first Sunday in April (IANA time zone database). India keeps one time all year.

## Prospect class fees

Three prices, no surprises.

- First class: USD 0. Lesson one is free, with written advice afterwards.
- Group tuition: USD 100 a month. Around eight group lessons a month, five to ten learners.
- Private tuition: USD 150 a month. Around eight private lessons a month.

Prospect families pay in US dollars after the trial, when course and time are settled. The pricing page covers holidays and missed lessons.

## Prospect Python questions

### What is the population of the City of Prospect?

The 2021 Census QuickStats count 22,272 residents in the City of Prospect, with 9,468 private dwellings and a median age of 37.

### Why does list.sort() return None?

Because it sorts the list in place. Python's convention is that methods which change an object return None, so you cannot mistake them for operations that make a copy.

### What is the difference between sort() and sorted()?

list.sort() changes the existing list and returns None. sorted() works on any iterable and returns a new sorted list, leaving the original unchanged.

### Which Prospect stop had the most Wednesday buses?

Stop 13 on the north-west side of North East Road led with 222 timetabled visits on 21 October 2026, our count from the Adelaide Metro feed.

### Is my nine-year-old ready for Python?

Often, yes, if Scratch already feels easy and typing is comfortable. A free first lesson will show us.

### Do teenagers learn with Claude?

No. Claude-based courses start at 18; younger learners use other AI tools.

### Is there a classroom in Prospect?

No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.

### What do lessons cost for Prospect learners?

The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of five to ten, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.

### Who is in each group?

Five to ten learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.

### Does the Prospect group course include Copilot Studio?

No. Copilot Studio stays in private lessons; in groups, agents are built with Python.

## More for Prospect learners

See [our Adelaide page](/ai-and-programming-classes-in-adelaide) for the wider city, or [Adelaide kids' coding](/coding-classes-for-kids-adelaide) for children. Just south-east, [Norwood](/online-coding-and-python-classes-in-norwood-adelaide) has a Python page too, and [the state guide](/coding-and-ai-classes-in-south-australia) covers the rest.

## Contact

Book the free class on [https://learn.modernagecoders.com/online-coding-and-python-classes-in-prospect-sa-adelaide](https://learn.modernagecoders.com/online-coding-and-python-classes-in-prospect-sa-adelaide#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
