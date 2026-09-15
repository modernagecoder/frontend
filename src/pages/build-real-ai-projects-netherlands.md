---
title: "Build Real AI Projects in the Netherlands | Live Online"
description: "Build real AI projects on Dutch open data, from CBS StatLine to KNMI weather, with licences, limits and results handled properly. Live online, first lesson free."
canonical: https://learn.modernagecoders.com/build-real-ai-projects-netherlands
source: src/pages/build-real-ai-projects-netherlands.html
---
> Modern Age Coders teaches learners in the Netherlands to build AI and data projects on real Dutch open data, live online. Learners fetch data from CBS StatLine, the KNMI Data Platform and the government data register, clean it, model it and publish the result with its licence, its limits and its sources written down. Teenagers usually start once they can write Python; students and adults can start at any rung. Groups hold five to ten learners at one level, or lessons are one to one. The opening lesson is free; after it a group place is USD 100 a month and one-to-one lessons USD 150.

[Home](/) / [Courses](/courses) / [AI and Python Academy, Netherlands](/ai-and-python-academy-netherlands) / Real AI projects

Netherlands · Project work · Live online

# Build real AI projects in the Netherlands

A tutorial project uses a tidy dataset that someone else cleaned years ago, answers a question nobody asked and ends when the notebook does. A real project is different in three ways: the data comes from somewhere that matters, the rules that come with that data are respected, and the result is written up so that someone else could check it. The Netherlands makes the first part unusually easy. The national statistics office publishes every one of its StatLine tables as open data, the meteorological institute publishes weather observations taken every ten minutes, and the government's data register lists tens of thousands of entries. The other two parts, the licences and limits and the honest write-up, are what we teach. This page is for learners in the Netherlands, from confident teenagers to working adults, who want to build AI projects on real Dutch data, live online and in English.

At a glance: Data: CBS StatLine, KNMI, data.overheid.nl; Skills: Python, APIs, cleaning, models, publishing; Standard: Licences respected, limits measured; For: Confident teens, students, adults; Format: Live video with a teacher; Groups: Five to ten, or one to one; Language: English; Start: A free first lesson. Rated 4.9 across 547 Google reviews.

## Three courses for project builders

A data course for teenagers, a full data science course for students and adults, and an automation course for turning a project into something that runs by itself. Each card opens its own syllabus and timetable.

- [Data Science for Teens](/courses/data-science-course-for-teens-python-data): A teenager fetches a real CBS table, cleans it, plots it and builds a first model, then writes down what the data cannot say.
- [Data Science Course](/courses/data-science-complete-masterclass-college): Statistics, SQL, APIs and modelling for students and adults, ending in a portfolio project on public data that an employer can open and rerun.
- [Python and AI Automation](/courses/python-ai-automation-masterclass-college): Scheduled scripts that fetch new observations, refresh a model and publish the result, so a project keeps working after the lesson ends.

## Real projects start with real data, and the Netherlands publishes a great deal of it

Three public sources carry most of our learners' projects. Each was read at its own page on 15 September 2026, and each comes with rules of its own.

**Three Dutch open data sources and the rule each one brings**

| Source | What it offers | How learners reach it | The rule to respect |
|---|---|---|---|
| data.overheid.nl, the Dataregister van de Nederlandse Overheid | The national register of government data, listing both open and closed data; its search showed 26,986 results across datasets, data services, applications and organisations | Search the register, then follow each entry to its publisher | Check each dataset's own licence and whether it is open at all |
| CBS StatLine | Every StatLine table from the national statistics office, published as open data | A catalogue service, a standard API and a feed, built on OData 3 with OData 4 in development | The standard API returns at most 10,000 cells per request; larger downloads go through the feed |
| KNMI Data Platform | 10-minute observations, hourly to yearly ground-based weather observations, and the HARMONIE weather model | Datasets in the platform's catalogue, downloaded through its APIs | CC BY 4.0: users must state that the data comes from the KNMI |

The breadth matters for learners. A teenager interested in climate can work with ten-minute weather observations. A student interested in housing, work or population can pull CBS tables for every municipality. An adult interested in their own sector can search the government register for what their ministry or province publishes.

None of these sources was designed for a school project, which is exactly why they teach so well. The columns have official names, the units are stated, the documentation is written for professionals, and the data arrives with the quirks real data has.

Each source also brings a rule, and meeting it is part of the project rather than an obstacle to it. A learner who has respected an attribution licence, designed around an API limit and checked whether a dataset is actually open has learned more about working with data than any clean practice set could teach.

The same approach runs through the city academy pages: [Amsterdam](/ai-and-python-academy-amsterdam) reads the public algorithm register, and [Rotterdam](/ai-and-python-academy-rotterdam) scores forecasts against what happened.

Sources: [data.overheid.nl](https://data.overheid.nl/); [CBS, StatLine als open data](https://www.cbs.nl/nl-nl/onze-diensten/open-data/statline-als-open-data); [KNMI Data Platform, open data](https://www.knmidata.nl/open-data). Read 15 September 2026; counts and services may change after that date. We have no connection with any of these organisations.

## Licence, limit and record: the three constraints that make a project real

Every project on our track is built around the same three questions. They are simple to ask and easy to skip, and skipping them is what turns a real dataset back into a toy.

### The licence: may I use this, and how?

KNMI publishes its open data under CC BY 4.0, which allows reuse on one condition: the user must say that the data comes from the KNMI. The government register lists open and closed data side by side, so each dataset has to be checked before it is used. A learner writes the licence and the attribution into the project before writing any model.

### The limit: how much can I ask for at once?

The standard StatLine API returns at most 10,000 cells in a single request, while the feed has no maximum number of records. A project that needs a large table therefore has to be designed for it: download through the feed, or request the data in pieces and join them. Learning to read an API's limits before writing the code is a professional habit worth starting young.

### The record: could someone repeat this?

Public data changes as tables are revised and observations added. A project records which table or dataset it used, when it was downloaded and what was removed during cleaning, and keeps the raw download next to the cleaned version. Without that record, nobody, including the learner a month later, can check the result.

**Project ideas our learners build on Dutch open data (our own examples)**

| Project | Data | The AI or data step | The constraint it teaches |
|---|---|---|---|
| Rain and your own measurements | KNMI daily observations joined to data the learner collects | A simple model relating weather to the learner's variable | Attribution under CC BY 4.0 |
| A municipality comparison | CBS StatLine tables for several municipalities | Clustering municipalities by their figures | The 10,000-cell API limit |
| A dataset nobody has used yet | An entry found on data.overheid.nl | Cleaning, a first chart and a baseline model | Checking whether the data is open |
| A weekly refresh | Any of the above, fetched on a schedule | Automation that retrains and republishes | Recording versions and download dates |

The rules in this section are quoted from the source pages listed above. The project ideas are our own teaching examples and make no claim about what the data will show.

## Finished means published, with its limits written down

A project on our track is not finished when the model runs. It is finished when a stranger could open it, understand it and rerun it.

Every project ends in a public repository with a short write-up: the question, the data and its licence, the steps taken, the result with its error, and the limits, the things the data cannot say. For teenagers, that write-up is often the most impressive part of a university application; for adults, it is the part an employer reads first.

For ideas at school level, see [AI projects for high school students](/ai-projects-for-high-school-students) and [AI science fair project ideas](/science-fair-project-ideas-ai).

For students and adults, [AI and ML projects for students](/ai-ml-projects-for-students) goes further into model-driven projects, and [vibe coding projects](/vibe-coding-projects-for-students) shows what can be built quickly with AI help, and what still needs checking.

The national [AI and Python Academy](/ai-and-python-academy-netherlands) sets out the full ladder that these projects sit on.

## From a first chart to a project that runs by itself

A good project needs each rung beneath it. The model is the exciting part, but the download, the cleaning and the write-up decide whether anyone should believe it.

**The route from first data to published project**

| Rung | Usually | What the learner can do |
|---|---|---|
| 1. Python by hand | Age 11 and up, or any adult beginner | Read a file, loop through it, make a first chart |
| 2. Real data | Once Python is comfortable | Fetch from an API, respect its limits, clean and record |
| 3. Models | Upper school, students, adults | Fit a model, compare it with a baseline, state its error |
| 4. Automation | After the first model | Refresh data and results on a schedule, safely |
| 5. Publishing | At every stage | A repository with licence, sources, results and limits |

### Why the second rung takes longest

Fetching and cleaning real data is where most of the time goes, in learner projects and in professional ones. We do not skip it with pre-cleaned files, because that is where the real learning happens.
The order of every subject we teach is on the [coding roadmap](/coding-roadmap).

### Projects around school and work

Teenagers often build one project a term, timed around school tests. Adults usually choose a project close to their work and use their own sector's public data.
Younger children work with simpler data first, in the kids courses, and reach these projects later.

## Ten live courses behind the projects

Grouped by stage. Each card opens the full course with its own timetable and fee; the free lesson settles where a learner starts.

### Getting started with data

For teenagers and younger learners ready to type

- [Python and AI for Kids](/courses/python-ai-kids-masterclass): For children of nine to twelve: typed Python, small datasets and a first program that learns from examples.
- [Python for Teens](/courses/python-complete-masterclass-teens): The Python foundation, including files, loops and functions, that every later project depends on.
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data): Reading, cleaning and plotting real datasets, then a first model with its error stated.

### Models and machine learning

For upper-school learners, students and adults

- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens): From statistics to neural networks, each model trained on real data and compared with a simple baseline.
- [Data Science Course](/courses/data-science-complete-masterclass-college): Statistics, SQL, APIs, modelling and a portfolio built on public data.
- [AI and Machine Learning Masterclass](/courses/ai-ml-masterclass-complete-college): Classical methods to deep learning, with evaluation and deployment given proper weight.

### Running and publishing projects

The skills that keep a project alive

- [Python and AI Automation](/courses/python-ai-automation-masterclass-college): Scheduled fetching, retraining and publishing, so a project updates itself.
- [MySQL Course](/courses/mysql-database-complete-masterclass-college): Storing downloads and results properly, with versions and dates kept.
- [Git and GitHub for College Students](/courses/git-github-version-control-course-for-college-students): Version control and public repositories, the home of every finished project.
- [Git and GitHub for Teens](/courses/git-github-version-control-course-for-teens): The same habits for teenagers, from the first commit to a public portfolio.

## Project lessons, live and hands-on

Our teachers are in India, where clocks do not change for summer, so they sit three and a half hours ahead of the Netherlands in the Dutch summer and four and a half ahead in winter. Project lessons usually happen in the late afternoon, evening or at the weekend, at a fixed time agreed in the free lesson.

- **Late afternoon** Dutch time, for teenagers building projects after school.
- **Evening** Dutch time, by arrangement, for students and working adults.
- **Weekend** Longer sessions on Saturday or Sunday, popular for project work.

- **A free project lesson** The first lesson starts a small project on real data, so both learner and teacher see how the learner works before anything is decided.
- **Groups of five to ten** Learners at the same level, often working on different projects with the same data sources, which makes for useful comparison.
- **One to one for big projects** For a school profile project, a thesis, a portfolio piece for an application, or an adult's work-related project.
- **Code seen as it is written** Shared screens mean the teacher catches a wrong join or a missed licence line while it is still easy to fix.
- **English, with Dutch data** Lessons are in English, while the data itself often has Dutch column names; learners get used to working across both.
- **Everything in a repository** Raw downloads, cleaned data, code, results and the write-up all live in the learner's own GitHub repository.

## Fees for project learners

Charged monthly in US dollars, the same in every country outside India. There is no separate project fee, no enrolment charge and no annual contract. Copilot Studio courses, which are taught one to one only, use the one-to-one rate.

- Free first class: USD 0. A real project lesson. Places you at the right rung. No card needed.
- Group batch: USD 100 a month. Five to ten learners at one level. The same live teacher throughout. Project work reviewed weekly. A certificate at the end.
- One to one: USD 150 a month. A teacher for your project alone. Pace set by your deadline. Right for theses and portfolios.

## What learners ask before building on Dutch data

### Is Dutch government data really free to use?

Much of it is, but not all. KNMI open data is published under CC BY 4.0, which requires crediting the KNMI. The government data register lists open and closed data together, so each dataset's own terms must be checked. Our projects always record the licence.

### What is StatLine?

The database of the national statistics office, CBS. All its tables are available as open data through a catalogue service, a standard API that returns at most 10,000 cells per request, and a feed for larger downloads.

### Do I need to read Dutch?

It helps a little, because many column names are Dutch, but teachers help learners work with them. The lessons themselves are in English.

### What age is right for these projects?

Most teenagers are ready once they can write basic Python, usually from about thirteen. Younger children start with simpler data in the kids courses. Students and adults can start at any rung.

### Can I use a project for school or university?

Yes. Many learners use one for a profile project, an application portfolio or a thesis. We teach the skills; the work and the conclusions are the learner's own.

### Will my project be public?

Usually yes, in the learner's own GitHub repository, because a published project is worth far more. Learners decide, and nothing personal or confidential is ever published.

### Is there any connection with CBS, KNMI or the government?

No. We use their public data under its published terms, like any other user.

### What does it cost?

A group place is USD 100 a month and one-to-one lessons are USD 150 a month, billed in US dollars, with no enrolment fee and no yearly contract. The opening lesson is free.

### When are lessons?

Late afternoons, evenings or weekends, Dutch time. The teacher is three and a half hours ahead of Dutch summer time and four and a half ahead of winter time.

### What happens after I send the form?

We phone at a Dutch hour to set up the first project lesson. It costs nothing, and payment only comes up if you decide to continue.

## More on projects and on AI in the Netherlands

- [AI projects for high school students](/ai-projects-for-high-school-students): Project ideas pitched at secondary-school level.
- [AI and ML projects for students](/ai-ml-projects-for-students): Model-driven projects for students.
- [AI science fair project ideas](/science-fair-project-ideas-ai): Ideas that suit a school fair or profile project.
- [AI and Python Academy, Netherlands](/ai-and-python-academy-netherlands): The national ladder these projects sit on.
- [Coding for college students](/coding-for-college-students-netherlands): For students building portfolios alongside a degree.
- [Coding classes for teens](/coding-classes-for-teens-netherlands): For teenagers still building their Python foundation.

## Contact

Book the free first class at [https://learn.modernagecoders.com/build-real-ai-projects-netherlands](https://learn.modernagecoders.com/build-real-ai-projects-netherlands#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email contact@modernagecoders.com.
