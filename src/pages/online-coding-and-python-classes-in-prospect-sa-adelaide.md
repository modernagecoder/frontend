---
title: "Online Coding and Python Classes in Prospect, Adelaide"
description: "Live online coding and Python classes for the City of Prospect, for children, teens and adults, built on real Adelaide transport data, in small groups or one to one."
canonical: https://learn.modernagecoders.com/online-coding-and-python-classes-in-prospect-sa-adelaide
source: src/pages/online-coding-and-python-classes-in-prospect-sa-adelaide.html
---
> Live online coding and Python classes for the City of Prospect, for children, teens and adults, built on real Adelaide transport data, in small groups or one to one.

Skip to contentCourse picks for Prospect

## Courses that explain Python's behaviour

The ranking bug is about methods, return values and reading errors. Each course below builds part of that, and a free first lesson tells us which fits.

[![Python for Teens course thumbnail](/images/python-teens.webp)Ages 13 to 17Python for TeensLists, methods and return values, practised on real data.See the syllabus](/courses/python-complete-masterclass-teens)[![Python Masterclass course thumbnail](/images/python-college.webp)University and adultPython MasterclassFrom first scripts to programs that do what you expect.See the syllabus](/courses/python-programming-masterclass-zero-to-advanced-college)[![Data Science for Teens course thumbnail](/images/data-science-teens.webp)Ages 13 to 17Data Science for TeensRanking, sorting and summarising public datasets.See the syllabus](/courses/data-science-course-for-teens-python-data)[![Python and AI for Kids course thumbnail](/images/python-kids.webp)Ages 8 to 12Python and AI for KidsEarly Python where every result is printed and checked.See the syllabus](/courses/python-ai-kids-masterclass)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Prospect in the Census

## A compact inner-north council

2021 Census QuickStats for the City of Prospect (ABS code LGA46510), alongside South Australia.

| Measure | City of Prospect |
| --- | --- |
| Residents | 22,272 |
| Median age | 37 |
| Families | 5,884 |
| Private dwellings | 9,468 |
| People per household | 2.5 |

| Indicator | Prospect | South Australia |
| --- | --- | --- |
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

Signature project

## The ranking that came back empty

The script counts Wednesday 21 October 2026 visits for each of the 84 stop records inside the City of Prospect, stores them as (stop, visits) pairs, then ranks them.

| Line | Output |
| --- | --- |
| ranked = pairs.sort(key=..., reverse=True) | ranked = None |
| print(ranked[:3]) | TypeError: 'NoneType' object is not subscriptable |
| pairs[:3] after the sort | Already sorted: the list itself changed |
| sorted(counts.items(), key=..., reverse=True)[:3] | A new, ranked list |

| Stop record | Wednesday visits |
| --- | --- |
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

Python lists

## Change in place, or make a new one?

Knowing which operations mutate and which return a copy prevents a whole family of bugs.

| Changes the list, returns None | Returns something new | Note |
| --- | --- | --- |
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

Around Prospect

## Three railway stations and North East Road

Council-wide timetable details for Wednesday 21 October 2026.

### Rail

Dudley Park, Islington and Ovingham railway station records lie inside the council by our check, with 198 scheduled train visits that day.

### Buses

6,549 of the 6,805 visits were regular buses, on 47 routes in all.

### Weekend

Visits dropped to 3,481 on Saturday 24 October and 3,028 on Sunday 25 October.

The council, not the NSW suburb

This page is about the City of Prospect in Adelaide. Its figures cover the whole council area; neighbouring Walkerville, Port Adelaide Enfield, Charles Sturt and the City of Adelaide have their own.

Learning ladder

## From tidy shelves to tidy code

Ages are rough guides; a trial lesson sets the level.

Ages 6 to 10

### Blocks

Scratch projects with lists and order.

[Scratch Coding for Kids](/courses/scratch-programming-complete-course)[Coding for Kids](/courses/kids-coding-blocks-masterclass)Ages 10 to 14

### First Python

Lists, sorting and printing results.

[Python and AI for Kids](/courses/python-ai-kids-masterclass)[Maths Through Coding](/courses/maths-through-coding)Ages 14 to 18

### Python and data

Ranking and summarising real data.

[Python for Teens](/courses/python-complete-masterclass-teens)[Data Science for Teens](/courses/data-science-course-for-teens-python-data)University and adult

### Professional Python

Readable, tested scripts for work.

[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)[Python Automation Course](/courses/python-ai-automation-masterclass-college)Coding and AI

## AI fixes the TypeError. Does it explain the None?

Sometimes. The fix is easy; the understanding is what prevents the next one.

Paste the traceback into an assistant and it will likely suggest sorted(). Good. But the same misunderstanding returns with reverse(), append() and pandas inplace calls, each failing somewhere new.

Learners who know why sort() returns None spot the whole family of mistakes in AI-written code before running it. That is the difference between fixing one bug and preventing a dozen.

In Prospect, the learner who understands in-place methods reads AI code without surprises. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

Delivery

## Prospect lessons online

Lessons happen live on video, from home.

### Tracebacks read together

Errors are treated as clues and read line by line with the teacher.

### Follows SA terms

Lessons pause in South Australian school holidays.

### Free opening class

A complete first lesson at no cost, then advice.

### Level groups

Fifteen to twenty learners at a matching stage, or private.

### Two a week

Fixed weekly lessons, around eight a month.

### India time

Our teachers are in India: a 4:30pm Prospect lesson is 11:30am India time in summer and 12:30pm from April.

Adelaide and India

Adelaide switches to daylight saving on the first Sunday in October and back on the first Sunday in April (IANA time zone database). India keeps one time all year.

Fees

## Prospect class fees

Three prices, no surprises.

First class**USD 0**

Lesson one is free, with written advice afterwards.

Group tuition**USD 100**

Around eight group lessons a month, fifteen to twenty learners.

Private tuition**USD 150**

Around eight private lessons a month.

Prospect families pay in US dollars after the trial, when course and time are settled. The pricing page covers holidays and missed lessons.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20coding%20or%20Python%20class%20for%20a%20learner%20in%20Prospect.)Reviews

## Reviews on our Google profile

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

## Book a free Prospect lesson

Let us know who is learning and what they like. Teens could repair the ranking script in two ways; younger children could line up Scratch sprites by size.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Prospect one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20coding%20or%20Python%20class%20for%20a%20learner%20in%20Prospect.)

Submitted details are used for placement and follow-up.

FAQ

## Prospect Python questions

What Prospect families and adult learners ask most.

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

The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.

### Who is in each group?

Fifteen to twenty learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.

### Does the Prospect group course include Copilot Studio?

No. Copilot Studio stays in private lessons; in groups, agents are built with Python.

Explore Adelaide and South Australia

## More for Prospect learners

See [our Adelaide page](/ai-and-programming-classes-in-adelaide) for the wider city, or [Adelaide kids' coding](/coding-classes-for-kids-adelaide) for children. Just south-east, [Norwood](/online-coding-and-python-classes-in-norwood-adelaide) has a Python page too, and [the state guide](/coding-and-ai-classes-in-south-australia) covers the rest.

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20coding%20or%20Python%20class%20for%20a%20learner%20in%20Prospect.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/online-coding-and-python-classes-in-prospect-sa-adelaide*
