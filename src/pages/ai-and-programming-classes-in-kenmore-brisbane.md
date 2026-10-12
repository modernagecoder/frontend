---
title: "AI and Programming Classes in Kenmore, Brisbane"
description: "Live online AI and programming classes for Kenmore learners from age 6 to adult, with a data drift project measured on real Kenmore bus timetable data."
canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-kenmore-brisbane
source: src/pages/ai-and-programming-classes-in-kenmore-brisbane.html
---
> Whether new data still looks like the data a model learned from. We compare the time-of-day pattern of Kenmore bus visits on Wednesday with other days. Thursday is identical, Saturday shifts a little and Sunday shifts a lot. The score used, the population stability index, also misses something a simple count spots at once.

[Home](/) / [Australia](/coding-classes-in-australia) / [Queensland](/coding-and-ai-classes-in-queensland) / [Brisbane](/best-coding-classes-in-brisbane) / Kenmore

Kenmore, City of Brisbane, Queensland / Live online

# AI and programming classes in Kenmore

**What does the Kenmore AI project measure?** Whether new data still looks like the data a model learned from. We compare the time-of-day pattern of Kenmore bus visits on Wednesday with other days. Thursday is identical, Saturday shifts a little and Sunday shifts a lot. The score used, the population stability index, also misses something a simple count spots at once.

Kenmore is a suburb where nearly every home is a separate house. Its bus stops carry 2,614 scheduled visits on Wednesday 21 October 2026, all by bus, on 10 routes numbered from 425 to 446. Weekday and weekend timetables differ, which makes Kenmore a clean example of the drift that quietly breaks AI models.

Facts last verified 12 October 2026. Teaching is online; no Kenmore branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## AI and data courses

Courses that pair programming with careful thinking about data. A free trial sets the level.

- [Data Science for Teens](/courses/data-science-course-for-teens-python-data) (Ages 13 to 17): Python, charts and honest comparisons on real data.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 13 to 17): Machine learning, from training to checking it still works.
- [Data Analysis Course](/courses/data-analysis-mastery-course-college) (University and adult): Analysis and monitoring skills for study and work.
- [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids) (Ages 8 to 12): Patterns, comparisons and logic for younger learners.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Houses, families and degree holders

Numbers for the Kenmore suburb (ABS SAL31504) from its 2021 Census QuickStats, read on 12 October 2026.

**Kenmore headline counts**

| Measure | Kenmore |
|---|---|
| People | 9,675 |
| Median age | 40 |
| Families | 2,784 |
| Private dwellings | 3,566 |
| People per household | 2.8 |
| Motor vehicles per dwelling | 1.9 |

**Kenmore shares compared with Queensland**

| Share | Kenmore | Queensland |
|---|---|---|
| Separate house | 92.2% (3,112) | 74.8% |
| Bachelor degree or above | 49.9% (3,761) | 21.9% |
| Professionals among workers | 40.1% (1,958) | 21.4% |
| Car as driver to work | 45.7% (2,228) | 59.5% |

### Ages 5 to 9

Kenmore had 789 residents aged 5 to 9, or 8.2%, against 6.4% for Queensland.

### Ages 10 to 14

Another 774 residents, 8.0%, were aged 10 to 14.

### Census caveat

The August 2021 Census was taken during the pandemic, so the low car-to-work share may partly reflect that week.

The bureau rounds percentages and slightly adjusts small counts for privacy. We quote its figures unchanged and do not add rows to create totals.

## Does Sunday look like Wednesday?

Learners split each day's Kenmore bus visits into six time bands and treat Wednesday as the data a model was trained on. The population stability index (PSI) then scores how far each other day's shape has moved.

**Kenmore stop visits by time band and PSI against Wednesday (our calculation)**

| Day | Before 7am | 7 to 9am | 9am to 3pm | 3 to 6pm | 6 to 9pm | After 9pm | Total | PSI |
|---|---|---|---|---|---|---|---|---|
| Wednesday | 163 | 399 | 841 | 580 | 495 | 136 | 2,614 | baseline |
| Thursday | 163 | 399 | 841 | 580 | 495 | 136 | 2,614 | 0.000 |
| Saturday | 26 | 169 | 672 | 337 | 304 | 132 | 1,640 | 0.118 |
| Sunday | 12 | 119 | 649 | 309 | 176 | 77 | 1,342 | 0.227 |

### Reading the score

A common rule of thumb calls PSI under 0.1 stable, 0.1 to 0.25 a moderate shift and above 0.25 a large one. Those cut-offs are a convention, not a law.

### What moved

Early-morning buses almost vanish at the weekend: 163 before 7am on Wednesday, 12 on Sunday. The middle of the day takes a bigger share instead.

### What PSI misses

PSI compares shares, not sizes. Saturday has 37% fewer visits than Wednesday, yet scores only 0.118. A plain count of rows catches that drop immediately.

### The lesson for AI

A model trained on weekday patterns will meet weekend data. Monitoring needs at least two checks: has the shape changed, and has the amount changed? Here the simple count is the better alarm for volume.

The visit counts come from the Translink timetable feed for 21 to 25 October 2026 at stops inside the ABS outline of Kenmore. The bands, the PSI values and the percentage drop are our own calculation.

## Shares, differences and a logarithm

For each band, PSI multiplies the difference between the new share and the old share by the natural log of their ratio, then adds the bands together.

**Steps in the lesson**

| Step | Learner task |
|---|---|
| 1 | Select Kenmore stop visits for each day from the feed. |
| 2 | Count visits in six time bands and convert to shares. |
| 3 | Write a psi(expected, actual) function and test it on Thursday. |
| 4 | Add a volume check and decide which alarm fired first. |

Thursday makes a perfect unit test: its bands match Wednesday exactly, so a correct function must return zero. Learners also try moving the band edges and see that the score changes with them, another reason not to treat 0.25 as magic.

### Younger learners

Compare two bar charts of a school day and a weekend, and say what changed.

### Teenagers

Code PSI in Python and chart it for every day of the feed.

### Adults

Set up drift and volume monitoring for a model or report at work.

## Kenmore Village stops and 2027 dates

Details from the Translink feed for Wednesday 21 October 2026 and the Queensland Department of Education.

### Kenmore Village

Stops on Moggill, Brookfield and Cedarleigh roads all carry the Kenmore Village name in the feed.

### No railway

No railway station lies inside the outline, and all 2,614 Wednesday visits at its 57 stop records are by bus.

### Term 1, 2027

Queensland state schools start on Wednesday 27 January 2027 and Term 1 ends on Thursday 25 March.

**Outline used** Kenmore is the ABS suburb outline of about 5.59 square kilometres. Stops are matched to it by our own point-in-polygon test; Kenmore Hills is a separate suburb and is not included.

## From bar charts to model monitoring

Treat ages as a guide; the trial lesson sets the rung.

- **Ages 6 to 9: Spot the difference** Charts and patterns in playful block code. [Scratch Coding for Kids](/courses/scratch-programming-complete-course), [AI Literacy for Kids (Ages 8 to 14)](/courses/ai-literacy-for-kids-course)
- **Ages 8 to 12: Counting and comparing** Logic puzzles and first Python counts. [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids), [Python and AI for Kids](/courses/python-ai-kids-masterclass)
- **Ages 13 to 17: Data and models** Training, testing and monitoring models. [Data Science for Teens](/courses/data-science-course-for-teens-python-data), [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens)
- **University and adult: Data in production** Statistics and analysis for real decisions. [Data Analysis Course](/courses/data-analysis-mastery-course-college), [Statistics & Probability](/courses/statistics-probability-maths-course)

## Why learn about drift when AI tools exist?

Because the tools fail quietly when the world changes.

An AI model learns patterns from past data. When the data changes, as Kenmore's buses do every weekend, the model keeps answering confidently with old patterns.

Learners who have computed PSI by hand know what a drift alert means, and also what it ignores. That makes them better at choosing checks than anyone who only reads a dashboard.

Kenmore learners study AI as a system to test, not a box to trust. The longer argument is in [why coding is still worth learning this year](/blog/is-coding-worth-learning-2026).

## Online classes for Kenmore

Lessons run live over video, so learners join from home.

- **Taught live** The teacher leads, questions and reviews code during every lesson.
- **Holiday pauses** Classes follow the Queensland terms and stop in school holidays.
- **Trial lesson** A free first lesson, then a written recommendation.
- **Level-based groups** Groups of five to ten, or private lessons.
- **Regular rhythm** Two lessons a week, around eight a month.
- **India time** A 4:30pm Kenmore lesson is noon in India throughout the year.

**Queensland clocks** The IANA time zone database shows that Queensland's last daylight saving ended in March 1992, so the gap to India is always four and a half hours.

## Kenmore class fees

One set of fees for every learner.

- First class: USD 0. Lesson one is free and comes with a plan.
- Group tuition: USD 100 a month. Groups: about eight lessons a month, five to ten learners.
- Private tuition: USD 150 a month. One to one: about eight lessons a month with a dedicated teacher.

Kenmore fees are in US dollars and only start after the trial has set the course and a weekly time. The pricing page sets out holiday and missed-lesson rules.

## Kenmore AI and programming questions

### How many people live in Kenmore?

The 2021 Census counted 9,675 people in the Kenmore suburb, with a median age of 40.

### What is the population stability index?

A score that compares how a quantity is spread across bins in two data sets. Zero means identical shares; larger values mean the shape has shifted.

### What is data drift?

A change in the data a model sees after training, such as weekend patterns reaching a model built on weekdays.

### Is PSI enough to monitor a model?

No. It ignores changes in volume and depends on how the bins are chosen, so it is paired with counts and accuracy checks.

### Do children need statistics before AI?

No. Younger learners compare charts and counts; formal statistics comes in the teen and adult courses.

### How many bus routes serve Kenmore?

On Wednesday 21 October 2026 the Translink timetable shows 10 bus routes stopping inside the suburb.

### Do you have a centre in Kenmore?

No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.

### What do Kenmore classes cost?

The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of five to ten, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.

### Who is in each group?

Five to ten learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.

### Can adults join AI classes?

Yes. Adults learn in their own groups or one to one, often with data from their own work.

## Explore further

Go to the [Brisbane page](/best-coding-classes-in-brisbane) for the city, the [Queensland guide](/coding-and-ai-classes-in-queensland) for the state, and [AI classes for teens](/ai-classes-for-teens-australia) for secondary learners.

## Contact

Book the free class on [https://learn.modernagecoders.com/ai-and-programming-classes-in-kenmore-brisbane](https://learn.modernagecoders.com/ai-and-programming-classes-in-kenmore-brisbane#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
