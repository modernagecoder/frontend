---
title: "Best Coding and AI Classes in Subiaco, Perth"
description: "Live online coding and AI classes for Subiaco learners aged 6 to 67, from Scratch and Python to data and AI projects, in groups or one to one. First lesson free."
canonical: https://learn.modernagecoders.com/best-coding-and-ai-classes-in-subiaco-perth
source: src/pages/best-coding-and-ai-classes-in-subiaco-perth.html
---
> Live online lessons, in a small group or one to one, beginning with Scratch at six and moving through Python to data work and AI for teenagers and adults, using real Western Australian data. The 2021 Census counted 9,940 people in Subiaco.

[Home](/) / [Australia](/coding-classes-in-australia) / [Western Australia](/coding-and-ai-classes-in-western-australia) / [Perth](/online-coding-and-python-classes-in-perth-western-australia) / Subiaco

Subiaco, City of Subiaco, Western Australia / Live online

# Coding and AI classes in Subiaco

**Where can Subiaco learners find the best coding and AI classes?** Live online lessons, in a small group or one to one, beginning with Scratch at six and moving through Python to data work and AI for teenagers and adults, using real Western Australian data. The 2021 Census counted 9,940 people in Subiaco.

The state's public transport stops file has 29 columns. In Subiaco, five of them hold the same value on every one of the suburb's 58 stop records, so a tidy-minded analyst might delete all five. Run the same check on the whole state file and only two survive the cut.

Facts last verified 12 October 2026. Teaching is online; no Subiaco branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 15 to 20 students per group.

## Courses that teach careful data work

The stops project needs Python, a feel for tables and the habit of testing a conclusion on more than one sample. These courses build it, and the free trial sets the level.

- [Data Science for Teens](/courses/data-science-course-for-teens-python-data) (Ages 13 to 17): Python with real public tables, from loading to honest conclusions.
- [Data Analysis Course](/courses/data-analysis-mastery-course-college) (University and adult): Cleaning and profiling data before any chart or model is built.
- [Python for Teens](/courses/python-complete-masterclass-teens) (Ages 13 to 17): Core Python: lists, sets, dictionaries and files.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass) (Ages 8 to 12): First typed Python and AI projects in short steps.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Apartments, graduates and the train

Selected 2021 Census QuickStats for the suburb of Subiaco (ABS code SAL51416), alongside the Western Australian figure.

**Subiaco at a glance, 2021**

| Measure | Subiaco |
|---|---|
| Residents | 9,940 |
| Median age | 40 |
| Families | 2,549 |
| Private dwellings | 5,333 |
| People per household | 2.1 |

**Subiaco compared with Western Australia**

| Indicator | Subiaco | Western Australia |
|---|---|---|
| Flats or apartments | 41.7% (1,869) | 6.5% |
| Adults with a bachelor degree or higher | 56.2% (4,795) | 23.8% |
| Employed people in professional jobs | 48.4% (2,676) | 22.0% |
| Workers who took the train to work | 6.2% (342) | 1.8% |
| Workers who took a bus to work | 8.5% (473) | 2.9% |

### Children and teenagers

Subiaco counted 446 residents aged 5 to 9, 515 aged 10 to 14 and 379 aged 15 to 19.

### Home workers

On Census day 666 employed residents, 12.0%, worked from home, against 7.5% across the state.

### A compact suburb

The ABS boundary of Subiaco takes in about 3.1 square kilometres west of the Perth city centre.

Census counts carry deliberate small adjustments for privacy, so we copy them unchanged and build no new totals from them.

## Constant here, or constant everywhere?

A column whose value never changes cannot separate one row from another, so it is safe to drop. The catch is the word never. We counted distinct values in all 29 columns of the stops file, first for Subiaco's records and then for the whole state.

**Distinct values per column (our calculation)**

| Column | In Subiaco (58 records) | Statewide (16,822 records) |
|---|---|---|
| accessible | 1 | 1, every record is Y |
| shelter | 1 | 1, every record is Y |
| status | 1 | 2: 16,821 Active, 1 Planned |
| area_lg | 1 | 17 service areas |
| sunphear | 1 | 2: 16,718 records hold 0, 104 hold 1 |
| stoptype | 3 | 8 |

### Truly constant

Two columns, accessible and shelter, read Y on all 16,822 records. Whatever they were meant to describe, in this file they cannot tell any stop from another.

### Constant only here

Three more look constant in Subiaco but vary statewide. Drop them on local evidence and a later model of the whole network loses the regional areas and the one planned stop.

### Varied locally

The other 24 columns already change inside Subiaco, from stop names to the three stop types: 50 standard, 5 rail and 3 marked Standard/CAT.

### The rule we teach

Decide which columns to drop using the data the code will actually run on. A sample of 58 stop records from one inner suburb is uniform in ways the state is not: every Subiaco record sits in the Perth Metro area, while statewide there are 17 service areas. A check that passed in Subiaco would quietly break a statewide analysis.

Stop records are open data from the Public Transport Authority of Western Australia. Membership of Subiaco is our point-in-boundary check, and every distinct-value count is our calculation. We describe what the columns contain, not what each was intended to mean, since the file carries no data dictionary.

## Finding single-valued columns in code

The check is short in plain Python or in pandas. What matters is where you run it.

**Ways to find constant columns**

| Approach | Code idea | Statewide result |
|---|---|---|
| Plain Python | len(set(row[c] for row in rows)) == 1 | accessible, shelter |
| pandas | df.columns[df.nunique() == 1] | Same two columns |
| Count missing too | df.nunique(dropna=False) | Same answer here |
| Compare samples | Run on one suburb, then the state | 5 locally, 2 statewide |

### Primary learners

Sort a bag of buttons and notice which feature, like having holes, is the same on every button.

### Secondary learners

Profile the Subiaco records in Python, then rerun on the state file and explain the difference.

### Adults

Profile work spreadsheets on the full dataset before deleting columns that look useless in a filtered view.

A constant column is not always an error. Sometimes it is a placeholder for data not yet collected. The useful habit is to report it, ask what it was meant to hold, and only then decide whether to drop it.

## Three stations along one line

Local markers from the stops file, our boundary checks and the WA school calendar.

### Rail platforms

By our boundary check, the 58 stop records inside Subiaco include five rail platform records, at Subiaco, Daglish and West Leederville stations.

### Labels and lines

Of those 58 records, 52 carry the suburb label Subiaco, 5 say Daglish and 1 says West Leederville, a reminder that a label and a boundary can disagree.

### Term 1, 2027

WA public school Term 1 of 2027 runs from Monday 1 February to Friday 9 April.

**Subiaco alone** Figures here describe the suburb of Subiaco only. Bagot Road carries the most stop records, 12. Neighbouring suburbs such as Shenton Park, Jolimont and West Leederville have their own separate numbers, none added in.

## From sorting buttons to profiling data

These bands are rough; a learner's trial class shows where they really belong.

- **Ages 6 to 10: Scratch and patterns** Games and puzzles that train careful observation. [Scratch Coding for Kids](/courses/scratch-programming-complete-course), [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)
- **Ages 10 to 14: Python basics** Lists, sets and counting things in code. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [Maths Through Coding](/courses/maths-through-coding)
- **Ages 14 to 18: Data with Python** Real tables, profiling and honest summaries. [Data Science for Teens](/courses/data-science-course-for-teens-python-data), [Python for Teens](/courses/python-complete-masterclass-teens)
- **University and adult: Data analysis** Cleaning, profiling and modelling data for work or study. [Data Analysis Course](/courses/data-analysis-mastery-course-college), [Data Science Course](/courses/data-science-complete-masterclass-college)

## An AI can clean the table. Which table did it look at?

Whatever it was given. AI tools profile the data in front of them, and a filtered sample is easy to hand over by mistake.

Give an assistant the Subiaco records and ask it to remove useless columns, and it will reasonably remove five. The advice is correct for those 58 rows and wrong for the file the analysis was meant to cover.

Learners who have run the check at both scales ask the follow-up question every time: is this sample the whole story? That one question is the difference between using an AI tool and trusting it blindly.

In Subiaco, the learner who checks the full dataset keeps the columns that matter. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## How Subiaco lessons run

Lessons happen over live video, so nobody travels anywhere.

- **Hands on the keys** Subiaco learners write every line themselves while the teacher watches and questions.
- **WA school terms** Plans follow the Western Australian school year and break for its holidays.
- **Try before paying** One complete lesson at no cost, then a plain suggestion of what fits.
- **Groups of fifteen to twenty** Matched by level and pace, or one to one.
- **Two classes a week** Fixed weekly times, about eight lessons a month.
- **Teachers in India** A 5pm Subiaco lesson starts at 2:30pm India time, all year.

**Perth time, all year** Western Australia last used daylight saving in a trial that ended in March 2009 (IANA time zone database), and India does not use it, so lesson times never shift.

## Subiaco class fees

Three prices for every family.

- First class: USD 0. The first lesson is free and ends with a clear suggestion.
- Group tuition: USD 100 a month. A month of group classes, about eight lessons, with fifteen to twenty learners at one level.
- Private tuition: USD 150 a month. About eight lessons a month with one teacher for one learner.

Subiaco families pay in US dollars, only after the trial and once a course and time are agreed. The pricing page covers school holidays, missed lessons and switching between group and private.

## Questions from Subiaco

### How many people live in Subiaco, Perth?

The 2021 Census QuickStats record 9,940 residents in the suburb of Subiaco, with 2,549 families and a median age of 40.

### What is a constant column?

A column in a table that holds the same value in every row. It cannot distinguish one row from another, so it adds nothing to a filter, a chart or a machine learning model.

### How do you find constant columns in pandas?

Count the distinct values in each column with df.nunique() and list the columns where the count is 1. Run it on the full dataset, not a filtered sample.

### What did the Subiaco stops check find?

Across the 58 stop records inside Subiaco, 5 of 29 columns were constant. Across all 16,822 records in the state file, only 2 were, so 3 would have been dropped wrongly.

### How young can a Subiaco child begin?

Six is a comfortable start, using Scratch blocks. Most children move on to typing Python somewhere around nine.

### Can under-18s take Claude-based courses?

No. Courses that use Claude admit adults of 18 and older; school students learn on other AI tools instead.

### Is there a classroom in Subiaco?

No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.

### What do lessons cost for Subiaco learners?

The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.

### Who is in each group?

Fifteen to twenty learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.

### Can a Subiaco group class cover Copilot Studio?

No. Copilot Studio lessons run privately, one learner and one teacher; group classes write their agents in Python.

## More for Subiaco learners

See [the Perth page](/online-coding-and-python-classes-in-perth-western-australia) for the whole city and [coding for Perth children](/coding-classes-for-kids-perth) for younger learners. [The Western Australia guide](/coding-and-ai-classes-in-western-australia) covers the state.

## Contact

Book the free class on [https://learn.modernagecoders.com/best-coding-and-ai-classes-in-subiaco-perth](https://learn.modernagecoders.com/best-coding-and-ai-classes-in-subiaco-perth#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
