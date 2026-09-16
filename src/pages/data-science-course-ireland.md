---
title: "Data Science Course in Ireland | Live Online Classes"
description: "A data science course for learners in Ireland, taught on Ireland's own open data: cleaning, licences, analysis and honest charts. Live online, first class free."
canonical: https://learn.modernagecoders.com/data-science-course-ireland
source: src/pages/data-science-course-ireland.html
---
> A data science course should spend its time where the work is: finding data, checking whether you may use it, understanding what each column means, cleaning it, and only then analysing. We teach that on Ireland's open data portal, which lists over twenty-two thousand datasets, most of them under a Creative Commons Attribution licence. Students learn Python and pandas, SQL, charts that do not mislead, and the statistics needed to say how sure they are. Classes are live, in groups of five to ten at one level or one to one. The first class is free, then USD 100 a month in a group or USD 150 a month with a teacher to yourself.

[Home](/) / [Courses](/courses) / [Coding classes in Ireland](/coding-classes-in-ireland) / Data science, Ireland

Ireland · Data science · Live online

# Data science course in Ireland

Data science is taught almost everywhere as modelling, and practised almost everywhere as cleaning. The gap between those two is where beginners lose months. This course closes it by working on Ireland's own public data from the first week: the national portal lists more than twenty-two thousand datasets from government bodies, councils, agencies and the Central Statistics Office, and almost all of it is free to use if you follow the licence. Working with it teaches the things a tidy training dataset never can, starting with two questions every professional asks before writing a line of analysis. Am I allowed to publish anything derived from this? And does this column mean what its name suggests? This page shows both questions being answered on real Irish data, and explains how we teach the craft, live and in small groups, to teenagers, students and adults.

At a glance: For: Teens, students and adults; Tools: Python, pandas, SQL, charts; Starts with: Cleaning, not modelling; Includes: Licences and attribution; Group: Five to ten at one level; Or: One to one; Hours: Evenings and weekends, Irish time; Start: A free first class. Rated 4.9 across 547 Google reviews.

## Three ways into data science

One full course, one for people who do not yet code, one for secondary students. Each card opens its syllabus.

- [Data Science Masterclass](/courses/data-science-complete-masterclass-college): The complete path for students and adults: Python and pandas, cleaning, statistics, visualisation and a first machine learning model.
- [Data and AI Analytics for Non-Programmers](/courses/data-and-ai-analytics-for-non-programmers-course): For people whose work is already full of spreadsheets and who need answers before they need a programming language.
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data): Secondary students working with real public data, learning to question a figure before they chart it.

## What Ireland actually publishes, and how to count it

The national portal is the obvious starting point, and it contains a small lesson in careful counting before you have downloaded anything at all.

**Ireland's open data portal, data.gov.ie**

| Measure | Figure | Where it comes from |
|---|---|---|
| Datasets | 22,720 | Stated on the portal homepage |
| Datasets, counted through the portal's own API | 22,720 | The CKAN package search endpoint, which agrees exactly |
| Publishers | 143 | Stated on the portal homepage |
| Organisations listed by the API | 174 | The CKAN organisation list, which probably includes bodies with no datasets |
| Datasets when the current strategy was written | "almost 15,000" from "160 data publishers" | Open Data Strategy 2023 to 2027 |

### Two counts of the same thing

The portal says 143 publishers; its own interface for machines lists 174 organisations. Neither is wrong. They count different things, and the gap is almost certainly bodies that have an account but have published nothing.

A student's first instinct is to pick the bigger number. The professional instinct is to say which count you used and why, in a footnote nobody will read but everybody would miss.

### And a figure that aged

The government strategy that governs all this was published in 2023 and says the portal holds "almost 15,000" datasets from "160 data publishers". Today the portal itself says 22,720.

Quoting the strategy as current would understate the portal by about a third. Every document has a date, and the date is part of the fact.

Sources, read 16 September 2026: [data.gov.ie](https://data.gov.ie/) and its CKAN API; [Open Data Strategy 2023 to 2027](https://data.gov.ie/docs/Open.Data.Strategy_FINAL_ENG.pdf). The strategy also states an aim of "Creating easy access to high quality government data, promoting trust and stimulating innovation."

## May you actually use it? The question most courses skip

Open does not mean unconditional, and the conditions differ between publishers. This is a five-minute check that saves a project.

### The portal default

data.gov.ie states that data and metadata linked from it "will be associated with the Creative Commons Attribution (CC-BY) Licence, at a minimum", and that public bodies may waive copyright entirely where that is appropriate.

It even supplies the sentence to use: "Contains Irish Public Sector Data licensed under a Creative Commons Attribution 4.0 International (CC BY 4.0) licence". Attribution is the price of the data, and it costs one line.

### Not everything matches it

Some registers published by Irish bodies sit outside that default. The Property Services Regulatory Authority, for example, allows free re-use of its property register subject to conditions including "Not use the information in a misleading way" and "Not use the information for the principal purpose of advertising or promoting a particular product or service".

That is a perfectly reasonable condition, and it is the reason no figure from that register appears anywhere on this page, even though it is one of the most interesting datasets in the country to analyse. Read the terms, then decide.

### Check before you download

The licence is on the dataset page, not in the file. Two minutes there beats discovering a restriction after you have built something on it.

### Record the version

Note the download date and the file as it was that day. Public datasets are revised, and a result that cannot be reproduced is not a result.

### Attribute properly

Name the publisher, the dataset and the licence wherever a derived figure is published, and say whether you changed the data.

Sources: [data.gov.ie open data licence](https://data.gov.ie/pages/opendatalicence); [PSRA, re-use of public sector information](https://www.psr.ie/re-use-of-public-sector-information/), read 16 September 2026. Nothing here is legal advice; the licence on the dataset you download is the one that binds you.

## The average of this column is 104.8, and it means nothing

Table CPM01 holds Ireland's Consumer Price Index: 62,608 rows of monthly figures from November 1975 to December 2025. It has one column called value, and that column is not measuring one thing.

**What sits in the single value column of CSO table CPM01**

| Kind of row | What it is |
|---|---|
| Index, base December 2023 equals 100 | An index number, one of six different bases in the same column |
| Index, bases from November 1996 to December 2016 | Five further historical bases, all index numbers, none comparable with another |
| Percentage change over one month | A percentage, in the same column as the indices |
| Percentage change over twelve months | Another percentage, again in the same column |

For all items in December 2025 the table publishes eight values: 104.2, 126.2, 127.8, 133.4, 157.4, 186.1, then 0.5 and 2.8. The first six are the same month expressed against six different base years; the last two are percentage changes.

Average the whole column and you get 104.8. It is an average of index points and percentages together, which is like averaging a temperature and a shoe size.

The fix is one line: filter on the statistic label, or the unit, before any arithmetic. The habit behind it is bigger. Before averaging anything, ask what a single row means, and check that every row means the same thing.

Students do this with the real file, get the absurd number themselves, then rebuild the analysis properly. It is far more memorable than being warned about it.

Source: [CSO table CPM01, Consumer Price Index](https://data.cso.ie/table/CPM01), read 16 September 2026; the table was last updated on 15 January 2026. The arithmetic above is ours, and is the exercise students repeat. Nothing here is commentary on inflation.

## Five rungs of data work

Notice how late modelling arrives. That ordering is deliberate, and it matches how the job is actually done.

**The data science route**

| Rung | What the learner can do |
|---|---|
| 1. Find and check | Locate a dataset, read its licence, notes and units |
| 2. Clean | Load messy files, fix types, handle blanks and document each decision |
| 3. Join and aggregate | Combine sources and group without double counting |
| 4. Show | Make charts that answer a question without misleading |
| 5. Model and judge | Fit a model, measure it against a baseline, and state its limits |

### Why cleaning comes first

Most working data scientists spend the bulk of their time on rungs one to three. A course that skips them produces people who can only work on data somebody else prepared.
How this connects to programming and AI is on the [coding roadmap](/coding-roadmap).

### Tools we teach

Python with pandas as the main tool, SQL for anything in a database, and plain charts. Spreadsheet users are welcome and often move fastest.
For learners who prefer a visual tool first, the Orange courses cover the same ideas without code.

## Nine live courses for data work

By starting point. The free first class decides which course fits.

### Getting started

No code required to begin

- [Data and AI Analytics for Non-Programmers](/courses/data-and-ai-analytics-for-non-programmers-course): Answers from data, without a language first.
- [Orange Data Mining for Teens](/courses/orange-data-mining-visual-machine-learning-course-for-teens): Visual analysis, real concepts.
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data): Public data, questioned properly.

### The craft

Python, SQL and statistics

- [Data Science Masterclass](/courses/data-science-complete-masterclass-college): Cleaning, analysis and a first model.
- [Data Analysis Mastery](/courses/data-analysis-mastery-course-college): Turning messy files into clear answers.
- [MySQL Masterclass](/courses/mysql-database-complete-masterclass-college): SQL for data that lives in a database.

### Going further

Models and automation

- [AI and Machine Learning Masterclass](/courses/ai-ml-masterclass-complete-college): Models trained and evaluated honestly.
- [Orange Data Mining for College](/courses/orange-data-mining-machine-learning-course-for-college-students): Machine learning you can see working.
- [Python and AI Automation](/courses/python-ai-automation-masterclass-college): Running the analysis without you.

## Live classes with real files open

Lessons are live, with teachers working from India at a weekly hour set in Irish time. India keeps one clock all year while Ireland changes twice, so our teachers are four and a half hours ahead of you during Irish summer time and five and a half hours ahead through the winter. Most adults choose an evening slot.

- **Evening** Working adults and college students, Irish time.
- **Weekend** Longer analysis sessions.
- **After school** Secondary students on the teen courses.

- **A free first class** You open a genuine dataset with a teacher and see what the first ten minutes of real work look like.
- **Five to ten per group** Learners at one level, comparing how each of them cleaned the same file.
- **One to one** For work projects, theses, or data you cannot share with a group.
- **Public data throughout** Everything is done on datasets anyone can download, so every result can be checked.
- **Licences taken seriously** Students learn to record source, licence and download date as a matter of habit.
- **Charts that tell the truth** Axes, baselines and scales are taught as ethics, not decoration.

## Fees

One price a month in US dollars, the same in every country outside India, covering any course on this page. No enrolment charge, and no commitment past the month you are in.

- Free first class: USD 0. A real dataset opened with a teacher. An honest view of where to start. No card required.
- Group batch: USD 100 a month. Five to ten learners at one level. The same teacher throughout. Work reviewed each week. A certificate at the end.
- One to one: USD 150 a month. A teacher to yourself. Your own data and questions. Right for work projects.

## What learners in Ireland ask about data science

### Do I need to be able to code first?

No. One of our courses is built for people who do not code at all, and the main masterclass teaches the Python you need as you go.

### How much maths does data science need?

Less than people fear to start with. Averages, percentages and a feel for uncertainty carry you a long way; the rest is taught when a problem needs it.

### Where can I get Irish data to practise on?

The national portal at data.gov.ie lists over twenty-two thousand datasets, and the CSO publishes its statistical tables openly as well. Check each dataset's licence before publishing anything derived from it.

### Is Irish public data free to use commercially?

Usually, under Creative Commons Attribution, which is the portal's stated minimum. Some registers set extra conditions, so read the terms on the dataset page. This is not legal advice.

### Python or R?

We teach Python, because it is what most Irish employers advertise for and because it carries on into automation and AI work.

### Will I finish with something to show?

Yes. Every student finishes an analysis on public data, with the code, the cleaning decisions and an honest write-up in their own repository.

### Is this suitable for a teenager?

Yes, from about thirteen on the teen course, which uses the same public data and the same habits at a gentler pace.

### What does it cost?

The first class is free. After that a group place is USD 100 a month and one-to-one lessons are USD 150 a month, in US dollars, with no enrolment fee.

### When do classes run?

Evenings, weekends or after school, at a weekly hour agreed in the free class. Our teachers are four and a half hours ahead of Irish time in summer and five and a half in winter.

### What happens after I send the form?

We call you at a sensible Irish hour and set up the free class. Nothing is charged unless you decide to continue.

## Related pages

- [Best Python classes online in Ireland](/best-python-classes-online-ireland): The language this runs on.
- [Build real AI projects in Ireland](/build-real-ai-projects-ireland): When the analysis becomes a model.
- [Learn to train AI, not just prompt it](/learn-to-train-ai-not-just-prompt-it-ireland): Training, properly evaluated.
- [Best coding classes for adults in Ireland](/best-coding-classes-for-adults-ireland): Starting from scratch.
- [Full stack software development](/full-stack-software-development-course-ireland): Where the data is stored.
- [Coding classes in Ireland](/coding-classes-in-ireland): The national page.

## Contact

Book the free first class at [https://learn.modernagecoders.com/data-science-course-ireland](https://learn.modernagecoders.com/data-science-course-ireland#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email contact@modernagecoders.com.
