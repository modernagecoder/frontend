---
title: "AI and Programming Classes in Dubbo | Live Online Lessons"
description: "AI and programming classes for Dubbo teens and adults, live online: Python, machine learning and data cleaning on real local data. First lesson free."
canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-dubbo
source: src/pages/ai-and-programming-classes-in-dubbo.html
---
> Dubbo teenagers and adults do well with classes that teach AI from the data up: Python, then cleaning and checking data, then models that learn from it. At the 2021 Census the Dubbo urban area had 40,578 residents. Every lesson is live online with a teacher, one to one or in a small matched group, and the first lesson costs nothing.

[Home](/) / [New South Wales](/coding-and-ai-classes-in-new-south-wales) / [Australia](/coding-classes-in-australia) / Dubbo

Dubbo, New South Wales, Australia / Live online

# AI and programming classes in Dubbo

**What are the best AI and programming classes in Dubbo?** Dubbo teenagers and adults do well with classes that teach AI from the data up: Python, then cleaning and checking data, then models that learn from it. At the 2021 Census the Dubbo urban area had 40,578 residents. Every lesson is live online with a teacher, one to one or in a small matched group, and the first lesson costs nothing.

Before any AI model learns from data, someone has to find the bad rows. One of the simplest tools for that is the Hampel filter: slide a window along a sequence, take the median, and flag anything that sits too far from it. We pointed one at house numbers. The NSW address map lists every numbered site in Dubbo, so we walked the filter along Darling Street and Fitzroy Street in order. On Darling Street it raised 59 alarms. Almost all of them were false, and the fix was not a cleverer threshold. It was understanding how streets are numbered.

Facts last verified 8 October 2026. Teaching is online; no Dubbo branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## AI learning paths for the Orana region

All four are taught live and use data like the address project. Book the free trial, which needs no card, and the teacher will recommend one.

- [Python for Teens](/courses/python-complete-masterclass-teens) (Ages 13 to 17): Python from scratch, through lists and loops to programs that sort and check real data.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 13 to 17): Machine learning for teenagers, including how messy data trips models up and how to prepare it.
- [Artificial Intelligence Course](/courses/artificial-intelligence-complete-masterclass-college) (University and adult): A complete AI course, from search and probability to neural networks and modern models.
- [Data Analysis Course](/courses/data-analysis-mastery-course-college) (Adults): Cleaning, exploring and summarising data properly, the work that comes before any model.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## A young, working city in the Central West

Figures for the Dubbo Significant Urban Area from the 2021 Census.

**Dubbo urban area: core 2021 counts**

| Measure | Dubbo |
|---|---|
| Residents | 40,578 |
| Median age | 35 |
| Families | 10,276 |
| Private dwellings | 16,842 |
| Average household size | 2.5 |

**How Dubbo differs from New South Wales and Australia**

| Measure | Dubbo | NSW | Australia |
|---|---|---|---|
| Children aged 0 to 4 | 3,066 (7.6%) | 5.8% | 5.8% |
| Children aged 5 to 9 | 2,887 (7.1%) | 6.2% | 6.2% |
| Employed people who worked full-time | 12,642 (62.9%) | 55.2% | 55.9% |
| Occupied homes that are separate houses | 11,998 (82.3%) | 65.6% | 72.3% |
| Occupied homes that are flats or apartments | 1,106 (7.6%) | 21.7% | 14.2% |
| Technicians and trades workers | 2,726 (14.1%) | 11.9% | 12.9% |
| Bachelor degree or above, people 15 and over | 6,075 (19.1%) | 27.8% | 26.3% |

### Lots of young children

7.6% of residents are under five, well above the 5.8% for both the state and the country.

### Full-time work

62.9% of employed residents worked full-time, against 55.2% across NSW.

### Places inside the boundary

NSW place names within the urban area include Dubbo, North Dubbo, South Dubbo, West Dubbo, Delroy Gardens and Orana Heights.

Census cells are randomly adjusted by small amounts to protect privacy, so details may not sum to totals. We print the bureau's published figures without change.

## Can an outlier detector find odd house numbers?

Order every address point along the street, read off the house numbers, and ask the Hampel filter which ones look wrong.

**The two Dubbo streets in the NSW address points (our counts, extracted 8 October 2026)**

| Item | Darling Street | Fitzroy Street |
|---|---|---|
| Address points | 328 | 444 |
| Distinct numbered sites after merging duplicates | 212 | 311 |
| Approximate length covered | 3.3 km | 5.7 km |
| Highest odd and even numbers | 363 and 272 | 411 and 434 |

**Hampel flags, window of 5 either side, threshold 3 (our calculation)**

| How the numbers are fed in | Darling Street flags | Fitzroy Street flags |
|---|---|---|
| Both sides mixed in one sequence | 59 | 6 |
| Odd side only | 2 of 106 sites | 0 of 147 sites |
| Even side only | 0 of 106 sites | 3 of 164 sites |
| Even side, with a minimum spread of 4 | 0 | 1 |

### Put the points in order

Find the direction each street mostly runs in and sort the address points along it, so the numbers form a sequence from one end to the other.

### Slide a window

For each number, look at the five before and five after. Take their median and their median absolute deviation, a robust measure of spread.

### Flag the far ones

If a number is more than three scaled deviations from its neighbours' median, flag it for a human to check.

### Odd and even sides do not line up

On Darling Street the odd side reaches 363 while the even side stops at 272, so opposite houses can carry very different numbers. Mixed together, the sequence jumps back and forth and the filter sees outliers everywhere: 59 of them. Split by side, the alarms fall to two, both among the lowest odd numbers. On Fitzroy Street the split leaves three flags on the even side, and requiring a minimum spread of 4 leaves just one.

A flag means "worth checking", not "wrong": a number can be unusual for good reasons, such as a corner block or a renumbered lot. We publish counts only, never individual addresses. Address data (c) Spatial Services; every count and flag is our own calculation.

## Why data cleaning is AI work

Most real AI projects spend more time on this step than on the model.

The Hampel filter uses the median and the median absolute deviation rather than the mean and standard deviation, because a single wild value can drag a mean a long way but barely moves a median. That robustness is why it is popular for cleaning sensor readings and logs before they reach a machine learning model. Yet the Dubbo test shows its weak point: it assumes neighbours should be similar. When the data has hidden structure, such as two interleaved sides of a street, the assumption fails and so does the filter.

### Teenagers

Write a median function, then a rolling window, then the full filter, and test it on a short list with one planted mistake.

### University students

Compare the Hampel filter with isolation forests and other anomaly detectors, and measure false alarms on structured data.

### Adults

Learn to look at how data is organised before cleaning it, and to report flags as questions rather than errors.

Modern Age Coders has no affiliation with Spatial Services, the NSW Government, Dubbo Regional Council or the statistics bureau. The bureau supplied the Census tables; the ordering, filtering and every flag count came from our own Python.

## NSW terms in 2027 and lesson clocks

Useful dates for planning a regular slot from Dubbo.

### Term 2

NSW public schools run Term 2 of 2027 from Tuesday 27 April to Friday 2 July, with development days counted inside the term.

### Term 3

Term 3 of 2027 runs from Monday 19 July to Friday 24 September, then two weeks of spring holidays.

### Term 4 and the clocks

Term 4 of 2027 is Monday 11 October to Monday 20 December. Daylight saving in NSW starts on the first Sunday in October.

## From sorting a list to cleaning data for models

The ages are a starting point; the free lesson sets the real level.

- **Ages 13 to 14: Lists and order** Python that sorts, finds medians and spots the odd one out in a short list. [Python for Teens](/courses/python-complete-masterclass-teens), [Maths Through Coding](/courses/maths-through-coding)
- **Ages 15 to 18: Learning from data** First machine learning models and the data preparation that decides whether they work. [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens), [Statistics & Probability](/courses/statistics-probability-maths-course)
- **University: Robust methods** Robust statistics, anomaly detection and evaluating models when the data is messy. [Artificial Intelligence Course](/courses/artificial-intelligence-complete-masterclass-college), [Data Science Course](/courses/data-science-complete-masterclass-college)
- **Adults: Clean data at work** Spreadsheets and databases checked with code, with problems reported clearly to colleagues. [Data Analysis Course](/courses/data-analysis-mastery-course-college), [MySQL Course](/courses/mysql-database-complete-masterclass-college)

## AI tools can clean data automatically. Why should Dubbo learners know how?

Because an automatic cleaner applied without understanding would have raised 59 alarms on one street, and someone has to know why most of them are wrong.

AI data tools increasingly offer to "fix" a dataset in one click, flagging outliers and suggesting corrections. Underneath, many use exactly this kind of rolling robust filter. Run on Darling Street with both sides mixed, that one click would mark dozens of perfectly good addresses as errors, and a trusting user might "correct" them.

Our Dubbo learners build the filter themselves, run it on real streets, and then work out why it misfires. Once they understand the structure, they can tell an AI tool how to group the data, or check its suggestions before accepting any. That judgement is what separates using AI from relying on it blindly.

Models learn from whatever they are given; the person who cleans the data decides what that is. The longer argument is in [why coding still matters in 2026](/blog/is-coding-worth-learning-2026).

## How Dubbo lessons work

Every class is a live video lesson, so distance from a big city is no obstacle.

- **At home** Learners connect from their own desk; there is no long drive to Sydney or Orange for a class.
- **Fits NSW school** Teachers plan with NSW year levels in mind and work around the state's four terms. Everything is taught in English.
- **Trial first** A real, free first lesson ends with a recommended course and a weekly time that suits.
- **Matched groups** Five to ten learners at the same level, gathered from Dubbo and elsewhere so each group stays full.
- **Twice weekly** A learner meets the class on two set days each week, which comes to roughly eight sessions in a month.
- **Teachers in India** India time is five and a half hours behind Dubbo during daylight saving and four and a half hours behind for the rest of the year.

**Times in Dubbo time** We always book in Dubbo time, so when NSW clocks change the adjustment is ours to make.

## Dubbo class fees

The pricing is short and the same across Australia.

- First class: USD 0. Your first lesson is free, with a level, course and weekly time suggested at the end.
- Group tuition: USD 100 a month. A month of group classes, about eight, with five to ten learners at the same stage.
- Private tuition: USD 150 a month. About eight private lessons a month with your own teacher.

Outside India we charge in US dollars, and Dubbo pays the same as every other Australian town. You are billed only once the trial has settled what and when you will study, and our pricing page deals with holidays, absences and moving from group to private or back.

## Dubbo AI class questions

### What is a Hampel filter?

A Hampel filter is an outlier detector that slides a window along a sequence and flags any value more than a set number of scaled median absolute deviations from the window's median.

### What did the Dubbo project find?

With both sides of Darling Street mixed, the filter flagged 59 house numbers; split into odd and even sides, it flagged only 2. On Fitzroy Street, splitting left 3 flags, and adding a minimum spread left 1.

### How many people live in Dubbo?

Census night 2021 counted 40,578 people in the Dubbo urban area, and their median age was 35, younger than the state as a whole.

### Why is data cleaning part of learning AI?

Because machine learning models learn whatever patterns are in their data, including mistakes. Finding and judging odd values is a core step in every real AI project.

### Do you help NSW senior students?

Yes, with the programming and maths behind senior NSW subjects, organised around NSW terms. Assessed work always remains the student's own.

### When are lessons for Dubbo learners?

Weekday after-school slots and Saturday mornings are common, agreed at the trial and always quoted in Dubbo time.

### Can younger children join?

Yes. Our youngest learners are six and start with Scratch and simple games. The address filter project is for teenagers and adults.

### Is there a Modern Age Coders centre in Dubbo?

No. We hold no premises in Australia and claim none. All classes are live online; learners need a computer, sound and a dependable connection, and our listed phone number is in India.

### What do Dubbo AI classes cost?

The first lesson is free. Then a group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, or USD 150 a month one to one. Everything is agreed before you pay.

### How many learners share a group?

Between five and ten, matched by level and goals rather than age or location. If no group time works, we offer one-to-one lessons.

## Further reading from the Central West

The state guide is [coding and AI classes in New South Wales](/coding-and-ai-classes-in-new-south-wales). To go beyond prompting, read [learn to train AI, not just prompt it](/learn-to-train-ai-not-just-prompt-it-australia), and for younger teens see [AI classes for teens in Australia](/ai-classes-for-teens-australia). All Australian pages are on the [Australia coding hub](/coding-classes-in-australia).

## Contact

Book the free class on [https://learn.modernagecoders.com/ai-and-programming-classes-in-dubbo](https://learn.modernagecoders.com/ai-and-programming-classes-in-dubbo#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
