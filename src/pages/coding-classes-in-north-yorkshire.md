---
title: "Coding Classes in North Yorkshire | Live Online, Ages 6 to 67"
description: "Live online coding, Python and maths classes across North Yorkshire, from York, Harrogate and Scarborough to Middlesbrough, Redcar, Selby, Ripon and Skipton."
canonical: https://learn.modernagecoders.com/coding-classes-in-north-yorkshire
source: src/pages/coding-classes-in-north-yorkshire.html
---
> This page covers North Yorkshire as a county: the North Yorkshire Council area, counted at the 2021 Census as seven districts, together with York, Middlesbrough and Redcar and Cleveland. Adding up the ten published counts gives our total of 1,098,768 residents. The biggest places are Middlesbrough, York, Harrogate and Scarborough. We teach live over video from India, and place each learner in a class matched to their ability, whatever their age. That runs from 6 to 67, with groups of five to ten or one-to-one lessons in coding, Python, data science and maths. The North Yorkshire project uses real census data on who commutes where. A first lesson is on us; carrying on costs USD 100 a month for a group or USD 150 a month for one-to-one.

[Home](/) / [United Kingdom](/coding-classes-in-united-kingdom) / North Yorkshire

North Yorkshire / Live online

# Coding classes in North Yorkshire

**What are the best coding classes in North Yorkshire?** This page covers North Yorkshire as a county: the North Yorkshire Council area, counted at the 2021 Census as seven districts, together with York, Middlesbrough and Redcar and Cleveland. Adding up the ten published counts gives our total of 1,098,768 residents. The biggest places are Middlesbrough, York, Harrogate and Scarborough. We teach live over video from India, and place each learner in a class matched to their ability, whatever their age. That runs from 6 to 67, with groups of five to ten or one-to-one lessons in coding, Python, data science and maths. The North Yorkshire project uses real census data on who commutes where. A first lesson is on us; carrying on costs USD 100 a month for a group or USD 150 a month for one-to-one.

Why do more people commute from Selby to York than from Scarborough to Richmondshire? Big places attract more journeys, and near places attract more than far ones. Geographers turned that common sense into a formula borrowed from physics, the gravity model: the flow between two places grows with their size and shrinks with the distance between them. The census recorded where people lived and where they worked, so the formula can be tested properly. This page's project fits it in Python to the real 2011 Census flows between ten North Yorkshire areas, measures how much it explains, and then studies the places where it gets the answer badly wrong, because that is where the interesting geography is.

Facts last verified 26 September 2026. Teaching is online; no North Yorkshire branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Where North Yorkshire learners start

A seven-year-old in Northallerton building a first game, a Year 8 in Knaresborough who loves maps, a Year 12 in Guisborough keen on data science, and an adult in Scarborough who works with spreadsheets every day. Each of them begins with a free lesson.

- [Python and AI for Kids](/courses/python-ai-kids-masterclass) (Ages 8 to 12): Typed Python for children, with games, puzzles and first steps with data and AI.
- [Maths Through Coding](/courses/maths-through-coding) (Ages 10 to 15): Maths learned by coding it, with graphs, logs and ratios turned into Python projects.
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data) (Ages 13 to 18): Real data in Python for teenagers, including fitting a model and reading what it gets wrong.
- [Data Analysis Course](/courses/data-analysis-mastery-course-college) (Adults): Spreadsheets, statistics and SQL, then Python and dashboards, for adults whose work runs on data.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## 1,098,768 people from the Dales to the Tees

Area counts are 2021 Census figures on Nomis; the county total is our own sum. Town figures are ONS built-up areas, which we checked by totalling census output areas.

**The twelve largest built-up areas in North Yorkshire, 2021 Census**

| Town | Residents | Town | Residents |
|---|---|---|---|
| Middlesbrough | 148,215 | Selby | 19,475 |
| York | 141,685 | Guisborough | 18,095 |
| Harrogate | 75,515 | Ripon | 16,590 |
| Scarborough | 59,505 | Knaresborough | 15,785 |
| Redcar | 37,660 | Skipton | 15,050 |
| Eston | 29,635 | Catterick Garrison | 14,210 |

The ONS Middlesbrough area crosses into Redcar and Cleveland, so it is larger than the borough, which had 143,926. York is the largest single council at 202,821, and Richmondshire the smallest of the old districts at 49,776. Beyond the table are Northallerton, Whitby, Huntington and Haxby. The seven districts the census used have since become one North Yorkshire Council, which appears in the ONS list of councils from April 2023. The southern part of Stockton-on-Tees also lies in the ceremonial county, and our County Durham page covers that borough whole. North Yorkshire Council, York, the two Teesside councils and academy trusts set school holidays, which we did not read; lesson breaks are arranged with each family.

### Two city pages already

Our [York](/best-coding-class-in-york) page is about street names, and [Ripon](/best-coding-class-in-ripon) is about river floods. This page is for the rest of the county, from Skipton to Saltburn.

## Does commuting obey a law of gravity?

Real census flows between ten areas, a formula from physics, and the places where it fails.

The learner downloads the 2011 Census table WU01UK from Nomis, which counts people by where they lived and where they worked. For our ten areas that gives 90 journeys between different areas: 62,358 people commuted across a boundary between two of them, while 262,282 lived and worked in the same one. For each area the learner totals the commuters leaving and the jobs filled, finds a centre point from ONS population-weighted centroids, and measures the distance between every pair of centres.

Newton's gravity falls with the square of distance. The commuting version is flow = k × (size of origin)ᵃ × (size of destination)ᵇ ÷ distanceᶜ, and taking logarithms turns it into a straight line that ordinary least squares can fit. Fitted to the 89 pairs with at least one commuter, it gives a distance power of 3.3 and explains 77.6 per cent of the variation in the logged flows, an R² of 0.776. Forcing Newton's square law instead drops the fit to 0.677: commuting falls away with distance much faster than gravity does.

**Where our fitted model misses by most, 2011 Census commuters**

| From | To | Actual | Model | What it tells you |
|---|---|---|---|---|
| York | Hambleton | 2,915 | 552 | Centres 40 km apart; journeys near the edges are much shorter. |
| Selby | York | 5,093 | 5,403 | A near hit, for comparison. |
| Redcar and Cleveland | Middlesbrough | 10,569 | 32,225 | Centres only 11 km apart, and a steep power law overshoots. |
| Middlesbrough | Redcar and Cleveland | 5,111 | 26,499 | Half the flow of the reverse trip, yet predicted almost as high. |
| Harrogate | Leeds | 8,481 | not in model | Leeds lies outside the ten areas, so the model never sees it. |

Each big miss is a lesson in its own right. York to Hambleton flows more than five times what the model expects, and the likely reason is the crude distance: we measured from centre to centre of two large districts, while real journeys start and end all over them. Between Middlesbrough and Redcar and Cleveland the model overshoots in both directions, predicting 32,225 and 26,499 where the census found 10,569 and 5,111: a distance raised to the power 3.3 becomes tiny for centres only 11 km apart, so the formula explodes. It also barely separates the two directions, although one flow is double the other. And the largest flow from Harrogate in the whole table goes somewhere our model does not include: 8,481 people commuted to Leeds, more than four times Harrogate's biggest flow inside the ten areas, 1,920 to Hambleton.

### Ages 10 to 13

Put pins in a paper map for five towns, guess the busiest commute between them, then check the real census number.

### Ages 13 to 16

Load the flow table into Python, compute distances, and plot logged flow against logged distance to see the straight line appear.

### Ages 16 and up

Fit the full model with least squares, compare it with Newton's square law, and write up the five largest residuals with an explanation for each.

### Whose numbers these are

The commuting counts are from the 2011 Census, published by the ONS on Nomis, and the centre points from ONS centroids. The fitted formula, its powers, R² values and every model prediction are ours, computed for teaching. Commuting in 2011 may differ from commuting now.

## A big, varied county is a fair test

Why this county suits a gravity model, and where its limits show.

**Some 2011 Census commuting flows, from Nomis table WU01UK**

| From | To | Commuters |
|---|---|---|
| Selby | York | 5,093 |
| Harrogate | Leeds | 8,481 |
| Selby | Leeds | 6,193 |
| York | Leeds | 5,023 |
| Harrogate | York | 1,837 |
| Scarborough | Ryedale | 2,036 |

A county that runs from Pennine towns through market towns to a coast and an industrial river gives a model plenty to explain: short busy links like Selby to York, long thin ones across the moors, and strong pulls from cities just outside, like Leeds. A learner who fits the model and then argues with its mistakes is doing what transport planners and data scientists do every day, and learning that a good fit and a complete explanation are not the same thing.

We have no link with the Office for National Statistics, Nomis, North Yorkshire Council or any council named here. The census counts are theirs; the model and any error in it are ours.

**Nearby pages** [York](/best-coding-class-in-york) and [Ripon](/best-coding-class-in-ripon) have their own pages; the [East Riding](/coding-classes-in-east-riding-of-yorkshire) is to the south-east, [County Durham](/coding-classes-in-county-durham) to the north and [Leeds](/best-coding-class-in-leeds) to the south.

## From maps and games to models of real data

The free lesson settles where each learner starts. Age is a first guess only.

- **Ages 6 to 10: Games and maps** Block coding with games that move around a map, measuring how far a sprite has travelled. [Coding for Kids](/courses/kids-coding-blocks-masterclass), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **Ages 8 to 13: Numbers in Python** Typed Python with tables, totals and simple graphs built from real numbers. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [Maths Through Coding](/courses/maths-through-coding)
- **Ages 13 to 18: Models and data** Data science in Python, fitting lines and curves to real tables and questioning the leftovers. [Data Science for Teens](/courses/data-science-course-for-teens-python-data), [Python for Teens](/courses/python-complete-masterclass-teens)
- **Ages 18 to 67: Data for work** Spreadsheets, SQL and Python for adults who need to explain what the numbers really show. [Data Analysis Course](/courses/data-analysis-mastery-course-college), [Data and AI Analytics for Non-Programmers (Excel, Sheets, Power BI)](/courses/data-and-ai-analytics-for-non-programmers-course)

## An AI can fit a model in seconds. Can it tell you what the model left out?

A good score hides the questions that matter most.

Hand an assistant the flow table and ask for a gravity model, and it will return a formula and an R² close to ours without fuss. It is far less likely to notice that the biggest flow from Harrogate goes to a city outside the data, or that the model treats Middlesbrough to Redcar and the reverse journey as nearly the same. Those gaps sit outside the numbers it was given.

Every AI system is a fitted model of some data, and its failures often come from what was left out of that data. A North Yorkshire student who has chased down the Leeds commuters knows to ask what a model was never shown, which is one of the most useful questions anyone can put to an AI tool.

So a young person in North Yorkshire should learn to code in 2026 to see what a model is missing, not just how well it scores. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Dales, moors and coast, one screen away

In a county this size, a weekly class in York or Middlesbrough can mean a long drive each way. Online lessons remove it.

- **Lessons at home** A farmhouse in Wensleydale, a terrace in Redcar, a flat in Harrogate. The teacher shares a screen and the learner does the coding.
- **Words from your school** Year groups, key stages, GCSEs and A levels are named as North Yorkshire schools name them, and lessons are in English.
- **A free lesson first** A proper lesson with real work, then clear advice on level and course, with no card details asked for.
- **Classmates at your level** Five to ten learners at the same stage, from across the county, the UK and further afield.
- **Breaks when school breaks** Two lessons a week is typical, and we pause for your own school's holidays.
- **UK times, always** Your lesson time is set in UK time and does not shift with the clocks; the teacher, who keeps India time several hours ahead, adjusts instead.

**Why groups go by level** Even York or Middlesbrough rarely has five learners at the same stage free on the same evening. Grouping by level means a learner in Whitby or Settle joins a class that fits.

## Fees in North Yorkshire

Skipton or Saltburn, the fee is identical, and it is the fee in every country we teach apart from India.

- First class: USD 0. A full lesson of real work, ending with a suggested level and course.
- Group tuition: USD 100 a month. Around eight lessons a month with five to ten learners at one level.
- Private tuition: USD 150 a month. Around eight lessons a month with a teacher to themselves.

We bill in US dollars and quote no sterling prices. Nothing is charged until the free lesson has settled a course and a weekly time, and our pricing page explains pauses, missed lessons and switching between group and private.

## North Yorkshire questions

### How many people live in North Yorkshire?

Counting the North Yorkshire Council area with York, Middlesbrough and Redcar and Cleveland, there were 1,098,768 usual residents at the 2021 Census, by our sum of the ten ONS area figures on Nomis.

### What are the largest towns in North Yorkshire?

By ONS built-up area: Middlesbrough 148,215, York 141,685, Harrogate 75,515, Scarborough 59,505 and Redcar 37,660.

### What is the commuting project?

Learners fit a gravity model to 2011 Census commuting flows between ten North Yorkshire areas, find it explains 77.6 per cent of the variation in logged flows, and investigate the largest misses, such as York to Hambleton and Harrogate to Leeds.

### What is a gravity model?

A formula saying the flow between two places rises with their sizes and falls with the distance between them. It is borrowed from Newton's law of gravity and is used for commuting, trade and migration.

### Why use 2011 commuting data?

It is the Nomis table we read at local authority level for this page. The model is a teaching exercise, and commuting today may be different.

### Are lessons held anywhere in the county?

No. Every lesson is live online, so nobody drives to a class.

### Which ages can join?

Ages 6 to 67. Children start with block coding or early Python, teenagers move on to data science and advanced Python, and adults take Python, data or SQL. The free lesson sets the level.

### Can a teenager learn data science?

Yes. The teen data science course uses Python on real tables, including fitting models and reading the parts they get wrong.

### How much are lessons?

The first lesson is free. Groups are then USD 100 per month and one-to-one USD 150 per month, with no joining fee and no fixed contract.

### Do lessons pause for North Yorkshire school holidays?

Yes, if you like. North Yorkshire Council, York, Middlesbrough, Redcar and Cleveland and academy trusts publish their own dates, and we fit breaks to yours.

## Neighbouring pages

Start with [York](/best-coding-class-in-york) or [Ripon](/best-coding-class-in-ripon), then [County Durham](/coding-classes-in-county-durham), the [East Riding](/coding-classes-in-east-riding-of-yorkshire) and [Leeds](/best-coding-class-in-leeds). The [UK hub](/coding-classes-in-united-kingdom) lists the rest.

## Contact

Book the free class on [https://learn.modernagecoders.com/coding-classes-in-north-yorkshire](https://learn.modernagecoders.com/coding-classes-in-north-yorkshire#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email contact@modernagecoders.com. Rated 4.9 across 547 Google reviews.
