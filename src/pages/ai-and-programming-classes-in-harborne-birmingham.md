---
title: "AI and Programming Classes in Harborne, Birmingham | 6 to 67"
description: "Live online AI, programming, Python and vibe coding lessons for Harborne, Edgbaston, Weoley Castle and B17 learners aged 6 to 67. First lesson free."
canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-harborne-birmingham
source: src/pages/ai-and-programming-classes-in-harborne-birmingham.html
---
> The 2021 census recorded 23,002 usual residents in Birmingham's Harborne ward. Postcodes.io records Harborne in the B17 postcode district, with Edgbaston in B15 and Weoley Castle in B29. From age six right up to 67, AI, programming, Python, vibe coding and maths are taught here on video calls by tutors working in India, to a single learner or to a class of five to ten at matching level. We teach the reasoning behind a method before the tool that runs it, so learners can tell what a model has actually found. The opening lesson is free and ends with a recommended course. The Harborne project hands a mixture model the floor areas of 4,422 mapped buildings and asks it to discover the groups hidden inside them, with a result nobody predicted. Tuition after that runs to USD 100 each month in a class, or USD 150 each month for a tutor of your own.

[Home](/) / [United Kingdom](/coding-classes-in-united-kingdom) / [West Midlands region](/coding-and-ai-classes-in-west-midlands-region) / Harborne

Harborne, Birmingham, England / Live online

# AI and programming classes in Harborne, Birmingham

**Which are the best AI and programming classes in Harborne?** The 2021 census recorded 23,002 usual residents in Birmingham's Harborne ward. Postcodes.io records Harborne in the B17 postcode district, with Edgbaston in B15 and Weoley Castle in B29. From age six right up to 67, AI, programming, Python, vibe coding and maths are taught here on video calls by tutors working in India, to a single learner or to a class of five to ten at matching level. We teach the reasoning behind a method before the tool that runs it, so learners can tell what a model has actually found. The opening lesson is free and ends with a recommended course. The Harborne project hands a mixture model the floor areas of 4,422 mapped buildings and asks it to discover the groups hidden inside them, with a result nobody predicted. Tuition after that runs to USD 100 each month in a class, or USD 150 each month for a tutor of your own.

Measure the floor area of every building in a neighbourhood and you get one long, lumpy list. You might guess it is really several lists mixed together: houses, garages, shops, big blocks. A Gaussian mixture model turns that guess into a calculation. It assumes the data is a blend of a few bell curves and works out where each curve sits, how wide it is and how much of the data belongs to it. The fitting method, called expectation-maximisation, alternates between two steps: guess which curve each building belongs to, then move the curves to fit their buildings better. This project runs it on Harborne's buildings as drawn on OpenStreetMap.

Facts last verified 30 September 2026. Teaching is online; no Harborne branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Harborne courses in reasoning, Python and AI

Ages run down the left. Whatever the course, its first live lesson is on the house and no card is involved.

- [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids) (Ages 7 to 12): The how-to-think course: sorting a mixed pile into groups and defending where the lines go.
- [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev) (Ages 8 to 12): Scratch games the learner designs and an AI helps to write, tested until they work.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 13 to 17): Machine learning in Python, including the Harborne mixture model.
- [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college) (Students and adults): Python from the beginning through statistics, clustering and AI agents.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Harborne ward and the B17 district

The Census 2021 count for Harborne ward, and places recorded around it.

**Harborne ward, Birmingham, Census 2021 via Nomis**

| Area | Residents (2021) |
|---|---|
| Harborne ward | 23,002 |

The ward boundary we use for the project is the ONS one, which covers 5.09 square kilometres. Postcodes.io lists Harborne as a suburban area of Birmingham in B17, Edgbaston in B15, and Weoley Castle and California in B29. Schools in Birmingham teach England's national curriculum, so with the holiday dates in hand we keep lessons out of those weeks.

### Birmingham, Edgbaston and our approach

See [coding classes in Birmingham](/coding-classes-in-birmingham) and [Edgbaston](/online-coding-and-python-classes-in-edgbaston-birmingham). Why thinking comes before tools is argued on [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

## A Gaussian mixture model of Harborne's buildings, fitted by expectation-maximisation

One measurement per building, a choice of how many groups, and a lesson in what a cluster is.

The learner downloads OpenStreetMap data for south-west Birmingham and keeps the building outlines whose centre falls inside Harborne ward: 4,422 of them, with a median floor area of 101.2 square metres. Because areas range from a few square metres to thousands, the model works with the logarithm of the area. It is fitted with one, two, three, four and five components, and each fit is scored with the Bayesian information criterion, which rewards a close fit and penalises extra components.

**Mixture models of log building area in Harborne ward, our Python run on OpenStreetMap data (lower BIC is better)**

| Components | BIC | What the model found |
|---|---|---|
| 1 | 1,888.2 | One broad curve |
| 2 | 1,561.3 | Typical and large |
| 3 | 1,500.0 | Narrow 48.6 sq m, main 102.4 sq m, wide 207.9 sq m |
| 4 | 1,515.4 | No improvement |
| 5 | 1,511.9 | No improvement |

Three components score lowest. The obvious guess is that they are garages, houses and big buildings. They are not. Of the 68 outlines tagged as garages or sheds, 66 sit in the middle component alongside the houses, because in this data the mapped garage blocks are of similar size to the houses. The small component is something else: a very narrow spike around 48.6 square metres holding 7.7% of the buildings. Looking at the data, 292 outlines measure between 45 and 52 square metres and most are tagged residential, which suggests rows of near-identical small footprints. The model found real structure, but not the structure a person would have named in advance.

Two more cautions came out of the fitting. The starting point matters: all 30 runs started from randomly chosen buildings reached the same answer after between 192 and 1,345 steps, but the library's default start stopped after 11 steps at a noticeably worse one, with no warning. And membership is soft: for 31.5% of buildings the model's most likely component has a probability under 0.8, so drawing hard lines between the groups would overstate what it knows.

### Ages 8 to 11

Sort a mixed bag of buttons by size into piles, then argue about the ones in between.

### Ages 11 to 15

Draw a histogram of Harborne building areas in Python and look for bumps.

### Ages 15 and up

Fit mixtures with one to five components, compare BIC, and test different starting points.

### OpenStreetMap outlines, our model

Building outlines and tags are from OpenStreetMap and its contributors under the Open Database Licence; the ward boundary is from the ONS Open Geography Portal. Areas are outlines on a map, not measured floor space, and the mixture model and its reading are ours.

## What this teaches about vibe coding and AI agents

Ask for groups and you will get groups; what they mean is still your call.

**Harborne footprints on the left, everyday AI clustering on the right**

| What the mixture model did | The general lesson |
|---|---|
| BIC chose three components | Let a criterion, not a hunch, set the number |
| 66 of 68 garages sat with the houses | Clusters need not match your categories |
| A narrow spike held 7.7% | Look at the data behind each group |
| The default start gave a worse fit | Rerun from several starting points |
| 31.5% had uncertain membership | Keep the probabilities, not just the labels |

Give an AI assistant a column of numbers and ask for "the segments" and it will return tidy groups with confident names, typically from a single run. In vibe coding, where the learner describes the analysis and an AI writes it, our Harborne learners ask for several starting points, a score for each number of groups, and a look inside every cluster before accepting a label. Agents that segment customers or sort records automatically deserve the same checks. Our agent units are reserved for learners already fluent in Python, which mostly means sixth form upward, and Copilot Studio is taught privately and nowhere else. Start with [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk); the agent syllabus for British students is [set out here](/ai-agents-course-for-students-uk).

OpenStreetMap, the ONS, Nomis and postcodes.io supplied open data and nothing more; they are not connected with us, and any error in the model is ours.

## From button piles to mixture models

The school year suggests a level; the trial lesson settles it.

- **Years 2 to 7: How to think** Grouping, borderline cases and explaining a choice. [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **Years 4 to 8: Vibe coding for kids** Games and apps built with AI help and tested by the learner. [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev), [Python and AI for Kids](/courses/python-ai-kids-masterclass)
- **Years 9 to 13: Python and machine learning** Histograms, distributions and clustering next to GCSE and A level. [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens), [Statistics & Probability](/courses/statistics-probability-maths-course)
- **Adults: Machine learning and agents** Statistics, unsupervised learning and AI agents in Python. [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college), [Generative AI Course](/courses/complete-generative-ai-masterclass-college)

## What is a Gaussian mixture model, and how does the EM algorithm fit one?

A Gaussian mixture model describes data as a blend of several bell curves, and the expectation-maximisation algorithm fits it by repeatedly estimating which curve each point belongs to and then adjusting the curves to match.

On the floor areas of 4,422 buildings in Harborne ward, the criterion BIC chose three components, yet 66 of 68 tagged garages fell in the same component as the houses, and the library's default starting point produced a worse fit than 30 random starts.

Learners who have fitted that model ask of any AI clustering: how many starts, how was the number of groups chosen, and what is really inside each one?

Opening up each cluster before naming it is what keeps Harborne teenagers ahead of an AI's confident labels, and it is a habit learned by coding the model themselves. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Harborne lessons over live video

A computer with a camera and a connection fit for video calls covers everything.

- **Hands stay on the keyboard** Pupils produce every line themselves. Our tutor sees it live and keeps asking what the numbers mean.
- **Pitched from lesson one** The free trial reveals the level, and exam boards are noted if one applies.
- **Free to try** The first lesson carries no fee and finishes with a course suggestion.
- **Level-matched classes** Groups of five to ten from across the UK, all at one stage.
- **Two sessions weekly** None during school holidays.
- **Fixed time** We absorb the UK clock changes so your slot holds.

**Why online** Five learners at one level with one free evening in common rarely share a neighbourhood. Online classes draw on the whole country.

## Harborne fees

Harborne learners pay the international rate that applies outside India.

- First class: USD 0. A free full lesson and then our recommendation.
- Group tuition: USD 100 a month. About eight live class lessons per month.
- Private tuition: USD 150 a month. About eight live one-to-one lessons per month.

All prices are in US dollars; we do not quote sterling. You are billed from the point the trial has pinned down both course and timetable; for holiday weeks, absences or a move between class and solo tuition, the pricing page has the rules.

## Harborne questions

### How many people live in Harborne?

Harborne ward in Birmingham had 23,002 usual residents at the 2021 census.

### Are AI and programming classes available online in Harborne?

They are. We teach by live video, so B17 and the rest of Birmingham are covered for anyone aged 6 to 67.

### What is the difference between k-means and a Gaussian mixture model?

K-means gives every point to exactly one cluster of roughly equal width. A Gaussian mixture gives each point a probability for every cluster and lets clusters have different widths.

### What is BIC?

The Bayesian information criterion, a score that balances how well a model fits against how many parameters it uses. The lowest BIC is preferred; for Harborne that was three components.

### What does the Harborne project involve?

Fitting Gaussian mixtures to the areas of 4,422 mapped buildings, choosing the number of components with BIC, and checking what each component really contains.

### Where does vibe coding fit?

In every course: the learner specifies, an AI drafts, and the learner tests and repairs.

### How soon do agents come into it?

Fluent Python comes first, so in practice sixth formers and adults; Copilot Studio is a private-lesson topic.

### What about exam classes?

We tutor GCSE and A level computer science and maths with understanding as the target; nobody here will promise a grade.

### What do lessons cost?

The trial is free of charge; regular tuition is USD 100 a month (class) or USD 150 a month (one-to-one).

### Are lessons held in school holidays?

No; give us the dates and we pause.

## More Birmingham pages

Each of these teaches something different: [Edgbaston](/online-coding-and-python-classes-in-edgbaston-birmingham) (finding near-duplicate names), [Moseley](/best-coding-and-ai-classes-in-moseley-birmingham), [Sutton Coldfield](/vibe-coding-and-ai-agents-classes-in-sutton-coldfield-birmingham) and [Birmingham](/coding-classes-in-birmingham). Other areas are on the [UK hub](/coding-classes-in-united-kingdom).

## Contact

Book the free class on [https://learn.modernagecoders.com/ai-and-programming-classes-in-harborne-birmingham](https://learn.modernagecoders.com/ai-and-programming-classes-in-harborne-birmingham#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
