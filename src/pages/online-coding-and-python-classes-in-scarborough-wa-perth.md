---
title: "Online Coding and Python Classes in Scarborough, Perth"
description: "Live online coding and Python classes for Scarborough, WA learners of all ages, from Scratch for children to Python data projects for teens and adults, in groups."
canonical: https://learn.modernagecoders.com/online-coding-and-python-classes-in-scarborough-wa-perth
source: src/pages/online-coding-and-python-classes-in-scarborough-wa-perth.html
---
> Clean, readable Python and the debugging sense to trace an error back to where it really started, often many lines earlier. Children begin with Scratch at six; teens and adults analyse real data. Scarborough in Western Australia had 17,605 residents in 2021.

[Home](/) / [Australia](/coding-classes-in-australia) / [Western Australia](/coding-and-ai-classes-in-western-australia) / [Perth](/online-coding-and-python-classes-in-perth-western-australia) / Scarborough

Scarborough, City of Stirling, Western Australia / Live online

# Online coding and Python classes in Scarborough

**What do Scarborough learners take away from online Python classes?** Clean, readable Python and the debugging sense to trace an error back to where it really started, often many lines earlier. Children begin with Scratch at six; teens and adults analyse real data. Scarborough in Western Australia had 17,605 residents in 2021.

A short survey of Scarborough's 73 bus stop records goes well for ten lines. The script counts each kind of stop sign and remembers the biggest count in a variable called max. Ten lines later it asks Python's built-in max() for the longest stop name, and crashes.

Facts last verified 13 October 2026. Teaching is online; no Scarborough branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 15 to 20 students per group.

## Courses that build tidy Python habits

The max() bug is about names, scope and reading error messages. These courses teach exactly that; the free trial sets the starting level.

- [Python for Teens](/courses/python-complete-masterclass-teens) (Ages 13 to 17): Names, functions and built-ins, with real debugging practice.
- [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college) (University and adult): Python from first steps to well-structured programs.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass) (Ages 8 to 12): Early Python with clear naming from the very start.
- [Data Analysis Course](/courses/data-analysis-mastery-course-college) (University and adult): Data scripts that are readable, testable and safe to rerun.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## A coastal suburb of townhouses

2021 Census QuickStats for the suburb of Scarborough, Western Australia (ABS code SAL51330), with the state figure beside it.

**Scarborough, WA in 2021**

| Measure | Scarborough |
|---|---|
| Residents | 17,605 |
| Median age | 36 |
| Families | 4,463 |
| Private dwellings | 9,180 |
| People per household | 2.1 |

**Scarborough compared with the state**

| Indicator | Scarborough | Western Australia |
|---|---|---|
| Semi-detached, row or townhouse homes | 47.6% (3,635) | 13.0% |
| Separate houses | 36.2% (2,765) | 79.7% |
| Flats or apartments | 16.1% (1,227) | 6.5% |
| Adults with a bachelor degree or higher | 39.3% (5,924) | 23.8% |

### Young children

Scarborough had 1,014 children under five, more than in either of the next two age bands.

### School ages

There were 832 residents aged 5 to 9 and 697 aged 10 to 14.

### On the coast

The ABS boundary covers about 5 square kilometres of Perth's northern beaches.

Census figures appear as the bureau published them; small privacy adjustments make adding cells unreliable, so we never do.

## When max stops being max()

The script first counts the asset type of each of the 73 stop records inside Scarborough, by our boundary check. To find the most common type it loops through the counts, keeping the running largest in a variable called max. Later it needs the longest stop name and writes max(len(s) for s in names).

**Asset types on Scarborough stop records (our count)**

| Asset type in the file | Records |
|---|---|
| Infounit Narrow | 20 |
| Orange Post | 18 |
| InfoCube Plus | 17 |
| Infounit Small | 11 |
| Blue Post | 6 |
| InfoCube Real Time | 1 |

**What our run printed (Python 3.13.6)**

| Step | Output |
|---|---|
| max = 0, then the loop over counts | largest count 20 |
| max(len(s) for s in names) | TypeError: 'int' object is not callable |
| Rename the variable to largest | longest name 61 characters |

### What went wrong

Assigning max = 0 made the name max point at a number for the rest of the script. Python found that number first and tried to call it.

### Why it is confusing

The error appears on the line that uses max(), not on the line that broke it. Beginners stare at a perfectly correct line.

### The longest name

With the variable renamed, the answer is a 61-character record that repeats Scarborough Beach Bus Stn twice before a Cat Id number.

### Names to avoid

max, min, sum, list, dict, str, id, input and type are all built-in names that are easy to reuse by accident. Linters such as Pylint report it as redefining a built-in, which is the quickest way to catch the problem before it bites.

Asset types and stop names come from the Public Transport Authority of Western Australia open data file; we report what the file says rather than what each sign type looks like. Membership of Scarborough and every count are from our own run.

## How Python finds a name

Python looks for a name in the local scope, then any enclosing function, then the module, and only then the built-ins. A module-level max wins over the built-in max().

**Fixes for a shadowed built-in**

| Fix | Code | When to use |
|---|---|---|
| Rename the variable | largest = 0 | Always the first choice |
| Delete the shadowing name | del max | Quick repair in a notebook |
| Reach the built-in directly | import builtins; builtins.max(...) | When the name cannot change |
| Use a linter | Pylint warns on redefined built-ins | Before every commit |

### Primary learners

Name a Scratch variable after a block, then see how confusing the program becomes to read aloud.

### Secondary learners

Recreate the Scarborough crash, read the traceback carefully, and trace it back to the line that caused it.

### Adults

In long notebooks, check for reused built-in names whenever a familiar function suddenly fails.

Notebooks make this worse: a cell that set max = 0 an hour ago still affects every later cell. Restarting the kernel and running from the top is often the fastest diagnosis.

## The beach bus station and West Coast Highway

Details belonging to Scarborough itself, from the stops file and the WA school calendar.

### Stop records

Our boundary check finds 73 stop records in Scarborough: 66 standard, 6 typed as school stops and 1 marked Standard/CAT.

### Busiest roads

West Coast Highway has the most stop records, 9, followed by Cobb Street with 7 and Stewart Street with 6.

### Term 3, 2027

WA public schools return for Term 3 on Monday 19 July 2027 and break on Friday 24 September.

**Scarborough, Western Australia** This page is about the Perth suburb in the City of Stirling, not the English town. Its figures are for the suburb alone; Trigg, Doubleview, Karrinyup, Wembley Downs and City Beach border it and keep their own counts.

## From naming sprites to debugging scripts

A learner's trial lesson matters more than these age bands.

- **Ages 6 to 10: Scratch blocks** Programs with clear, sensible names from day one. [Scratch Coding for Kids](/courses/scratch-programming-complete-course), [Coding for Kids](/courses/kids-coding-blocks-masterclass)
- **Ages 10 to 14: Starting Python** Variables, functions and reading error messages. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [Maths Through Coding](/courses/maths-through-coding)
- **Ages 14 to 18: Python and data** Scripts that analyse real data and survive debugging. [Python for Teens](/courses/python-complete-masterclass-teens), [Data Science for Teens](/courses/data-science-course-for-teens-python-data)
- **University and adult: Working Python** Readable, linted, automated code. [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college), [Python Automation Course](/courses/python-ai-automation-masterclass-college)

## When AI-written code crashes, who reads the traceback?

Someone who can follow it back to the cause. AI tools explain errors well, but only for the code they can see.

Paste the TypeError into an assistant with only the failing line and it may suggest rewriting a line that was already correct. The real cause, max = 0 ten lines earlier or in another notebook cell, is invisible to it.

Learners who have chased the Scarborough crash learn to ask what each name currently refers to, and to share enough context for an AI to help properly. That is debugging as a skill, not guesswork.

In Scarborough, the learner who traces an error to its source fixes it once. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Scarborough lessons, delivered live

Lessons are given over video, so learners log in from home.

- **Debugging together** When code breaks, teacher and learner read the traceback side by side.
- **Term planning** Classes follow the WA school calendar, with holidays off.
- **Free first lesson** An opening class at no charge, with a written suggestion afterwards.
- **Matched groups** Fifteen to twenty learners of similar level, or private lessons.
- **Twice a week** Consistent weekly times, near eight lessons a month.
- **India time** Our teachers are in India, so a 7:30pm Scarborough lesson starts at 5pm India time.

**One time difference** Perth has kept standard time all year since a daylight saving trial ended in March 2009 (IANA time zone database); with India also fixed, lessons never move.

## Scarborough class fees

Three straightforward prices.

- First class: USD 0. The first lesson costs nothing and finishes with advice in writing.
- Group tuition: USD 100 a month. Close to eight group lessons a month with fifteen to twenty learners.
- Private tuition: USD 150 a month. Close to eight one-to-one lessons a month.

Scarborough families pay in US dollars, after the trial and only when course and time are agreed. Holidays, missed lessons and format changes are on the pricing page.

## Scarborough, WA Python questions

### How many people live in Scarborough, WA?

The 2021 Census QuickStats count 17,605 people in the suburb of Scarborough in Western Australia, with 9,180 private dwellings and a median age of 36.

### What does "int object is not callable" mean?

Python tried to call something that is a number, as if it were a function. It usually means a variable has reused a function's name, such as max = 0 followed later by max(...).

### What is shadowing a built-in in Python?

Giving a variable the same name as a built-in function, such as max, list or sum. The variable hides the built-in until it is renamed or deleted.

### What did the Scarborough stop survey show?

After a variable called max stored the largest asset count, 20, the call max(len(s) for s in names) failed with a TypeError; renaming the variable gave the longest stop name, 61 characters.

### When do children usually start Python?

Typically between eight and ten, after a grounding in Scratch. The trial lesson confirms readiness.

### Can teenagers use Claude in classes?

No. Our Claude-based courses are for those aged 18 or over; teenagers use different AI tools.

### Is there a classroom in Scarborough?

No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.

### What do lessons cost for Scarborough learners?

The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.

### Who is in each group?

Fifteen to twenty learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.

### Do Scarborough groups learn Copilot Studio?

No. Copilot Studio is taught privately only; group learners create agents in Python.

## More for Scarborough learners

Go to [the Perth page](/online-coding-and-python-classes-in-perth-western-australia) for the city, or [coding for Perth kids](/coding-classes-for-kids-perth) for children. Far up the coast, [Karratha](/ai-and-programming-classes-in-karratha) has its own page, and [the Western Australia guide](/coding-and-ai-classes-in-western-australia) covers the rest.

## Contact

Book the free class on [https://learn.modernagecoders.com/online-coding-and-python-classes-in-scarborough-wa-perth](https://learn.modernagecoders.com/online-coding-and-python-classes-in-scarborough-wa-perth#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
