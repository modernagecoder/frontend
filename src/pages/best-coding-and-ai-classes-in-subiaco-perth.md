---
title: "Best Coding and AI Classes in Subiaco, Perth"
description: "Live online coding and AI classes for Subiaco learners aged 6 to 67, from Scratch and Python to data and AI projects, in groups or one to one. First lesson free."
canonical: https://learn.modernagecoders.com/best-coding-and-ai-classes-in-subiaco-perth
source: src/pages/best-coding-and-ai-classes-in-subiaco-perth.html
---
> Live online coding and AI classes for Subiaco learners aged 6 to 67, from Scratch and Python to data and AI projects, in groups or one to one. First lesson free.

Skip to contentCourse picks for Subiaco

## Courses that teach careful data work

The stops project needs Python, a feel for tables and the habit of testing a conclusion on more than one sample. These courses build it, and the free trial sets the level.

[![Data Science for Teens course thumbnail](/images/data-science-teens.webp)Ages 13 to 17Data Science for TeensPython with real public tables, from loading to honest conclusions.See the syllabus](/courses/data-science-course-for-teens-python-data)[![Data Analysis Course course thumbnail](/images/data-analysis-college.webp)University and adultData Analysis CourseCleaning and profiling data before any chart or model is built.See the syllabus](/courses/data-analysis-mastery-course-college)[![Python for Teens course thumbnail](/images/python-teens.webp)Ages 13 to 17Python for TeensCore Python: lists, sets, dictionaries and files.See the syllabus](/courses/python-complete-masterclass-teens)[![Python and AI for Kids course thumbnail](/images/python-kids.webp)Ages 8 to 12Python and AI for KidsFirst typed Python and AI projects in short steps.See the syllabus](/courses/python-ai-kids-masterclass)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Subiaco in the Census

## Apartments, graduates and the train

Selected 2021 Census QuickStats for the suburb of Subiaco (ABS code SAL51416), alongside the Western Australian figure.

| Measure | Subiaco |
| --- | --- |
| Residents | 9,940 |
| Median age | 40 |
| Families | 2,549 |
| Private dwellings | 5,333 |
| People per household | 2.1 |

| Indicator | Subiaco | Western Australia |
| --- | --- | --- |
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

Signature project

## Constant here, or constant everywhere?

A column whose value never changes cannot separate one row from another, so it is safe to drop. The catch is the word never. We counted distinct values in all 29 columns of the stops file, first for Subiaco's records and then for the whole state.

| Column | In Subiaco (58 records) | Statewide (16,822 records) |
| --- | --- | --- |
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

Profiling a table

## Finding single-valued columns in code

The check is short in plain Python or in pandas. What matters is where you run it.

| Approach | Code idea | Statewide result |
| --- | --- | --- |
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

Around Subiaco

## Three stations along one line

Local markers from the stops file, our boundary checks and the WA school calendar.

### Rail platforms

By our boundary check, the 58 stop records inside Subiaco include five rail platform records, at Subiaco, Daglish and West Leederville stations.

### Labels and lines

Of those 58 records, 52 carry the suburb label Subiaco, 5 say Daglish and 1 says West Leederville, a reminder that a label and a boundary can disagree.

### Term 1, 2027

WA public school Term 1 of 2027 runs from Monday 1 February to Friday 9 April.

Subiaco alone

Figures here describe the suburb of Subiaco only. Bagot Road carries the most stop records, 12. Neighbouring suburbs such as Shenton Park, Jolimont and West Leederville have their own separate numbers, none added in.

Learning ladder

## From sorting buttons to profiling data

These bands are rough; a learner's trial class shows where they really belong.

Ages 6 to 10

### Scratch and patterns

Games and puzzles that train careful observation.

[Scratch Coding for Kids](/courses/scratch-programming-complete-course)[Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)Ages 10 to 14

### Python basics

Lists, sets and counting things in code.

[Python and AI for Kids](/courses/python-ai-kids-masterclass)[Maths Through Coding](/courses/maths-through-coding)Ages 14 to 18

### Data with Python

Real tables, profiling and honest summaries.

[Data Science for Teens](/courses/data-science-course-for-teens-python-data)[Python for Teens](/courses/python-complete-masterclass-teens)University and adult

### Data analysis

Cleaning, profiling and modelling data for work or study.

[Data Analysis Course](/courses/data-analysis-mastery-course-college)[Data Science Course](/courses/data-science-complete-masterclass-college)Coding and AI

## An AI can clean the table. Which table did it look at?

Whatever it was given. AI tools profile the data in front of them, and a filtered sample is easy to hand over by mistake.

Give an assistant the Subiaco records and ask it to remove useless columns, and it will reasonably remove five. The advice is correct for those 58 rows and wrong for the file the analysis was meant to cover.

Learners who have run the check at both scales ask the follow-up question every time: is this sample the whole story? That one question is the difference between using an AI tool and trusting it blindly.

In Subiaco, the learner who checks the full dataset keeps the columns that matter. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

Delivery

## How Subiaco lessons run

Lessons happen over live video, so nobody travels anywhere.

### Hands on the keys

Subiaco learners write every line themselves while the teacher watches and questions.

### WA school terms

Plans follow the Western Australian school year and break for its holidays.

### Try before paying

One complete lesson at no cost, then a plain suggestion of what fits.

### Groups of fifteen to twenty

Matched by level and pace, or one to one.

### Two classes a week

Fixed weekly times, about eight lessons a month.

### Teachers in India

A 5pm Subiaco lesson starts at 2:30pm India time, all year.

Perth time, all year

Western Australia last used daylight saving in a trial that ended in March 2009 (IANA time zone database), and India does not use it, so lesson times never shift.

Fees

## Subiaco class fees

Three prices for every family.

First class**USD 0**

The first lesson is free and ends with a clear suggestion.

Group tuition**USD 100**

A month of group classes, about eight lessons, with fifteen to twenty learners at one level.

Private tuition**USD 150**

About eight lessons a month with one teacher for one learner.

Subiaco families pay in US dollars, only after the trial and once a course and time are agreed. The pricing page covers school holidays, missed lessons and switching between group and private.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20coding%20or%20AI%20class%20for%20a%20learner%20in%20Subiaco.)Reviews

## Google reviews from our families and students

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

## Book a first Subiaco lesson

Let us know how old the learner is and what they like doing. Teenagers could open by profiling the stops file at two scales, and younger children with a Scratch sorting game.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Subiaco one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20coding%20or%20AI%20class%20for%20a%20learner%20in%20Subiaco.)

Submitted details are used for placement and follow-up.

FAQ

## Questions from Subiaco

What Subiaco parents and adult learners usually want to know.

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

Explore Perth and Western Australia

## More for Subiaco learners

See [the Perth page](/online-coding-and-python-classes-in-perth-western-australia) for the whole city and [coding for Perth children](/coding-classes-for-kids-perth) for younger learners. [The Western Australia guide](/coding-and-ai-classes-in-western-australia) covers the state.

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20coding%20or%20AI%20class%20for%20a%20learner%20in%20Subiaco.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/best-coding-and-ai-classes-in-subiaco-perth*
