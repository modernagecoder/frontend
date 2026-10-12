---
title: "AI and Programming Classes in Eight Mile Plains, Brisbane"
description: "Live online AI and programming classes for Eight Mile Plains learners aged 6 to 67, with machine learning tested on real Brisbane data, in groups or one to one."
canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-eight-mile-plains-brisbane
source: src/pages/ai-and-programming-classes-in-eight-mile-plains-brisbane.html
---
> The ability to build machine learning models and the discipline to test whether a recommended technique actually helps on their own data. Children begin with Scratch at six; teenagers and adults train models in Python. Eight Mile Plains recorded 15,326 residents at the 2021 Census.

[Home](/) / [Australia](/coding-classes-in-australia) / [Queensland](/coding-and-ai-classes-in-queensland) / [Brisbane](/best-coding-classes-in-brisbane) / Eight Mile Plains

Eight Mile Plains, City of Brisbane, Queensland / Live online

# AI and programming classes in Eight Mile Plains

**What do Eight Mile Plains learners gain from AI and programming classes?** The ability to build machine learning models and the discipline to test whether a recommended technique actually helps on their own data. Children begin with Scratch at six; teenagers and adults train models in Python. Eight Mile Plains recorded 15,326 residents at the 2021 Census.

Textbooks say k-means++ picks better starting centres than random guesses. We tried both, a thousand times each, on the 47 bus stop records inside Eight Mile Plains. The fancy method won on some measures and lost on another, which is exactly why learners should run the experiment rather than quote the rule.

Facts last verified 12 October 2026. Teaching is online; no Eight Mile Plains branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Courses that test methods, not just apply them

The stop-clustering project needs Python, numpy and the habit of comparing methods fairly. These courses build each part; the trial lesson finds the level.

- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 13 to 17): Clustering, classification and regression built by hand, then compared honestly.
- [AI and ML Masterclass](/courses/ai-ml-masterclass-complete-college) (University and adult): Machine learning from first principles to evaluated, working models.
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data) (Ages 13 to 17): Python data work with maps, charts and repeatable experiments.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass) (Ages 8 to 12): First Python and AI projects, small enough to test by eye.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Houses, townhouses and bus commuters

A selection of 2021 Census QuickStats for the suburb of Eight Mile Plains (ABS code SAL30950), shown beside the Queensland figure.

**Eight Mile Plains counts, 2021**

| Measure | Eight Mile Plains |
|---|---|
| Residents | 15,326 |
| Median age | 36 |
| Families | 4,125 |
| Private dwellings | 5,631 |
| People per household | 2.8 |

**Eight Mile Plains and Queensland side by side**

| Indicator | Eight Mile Plains | Queensland |
|---|---|---|
| Workers who rode a bus to work | 7.2% (534) | 1.7% |
| Semi-detached, row or townhouse homes | 26.1% (1,348) | 11.7% |
| Employed people in professional jobs | 29.5% (2,184) | 21.4% |
| Adults with a bachelor degree or higher | 38.9% (4,920) | 21.9% |
| People in education who attend university | 22.0% (1,045) | 14.2% |

### Children counted

The suburb had 947 residents aged 5 to 9 and 843 aged 10 to 14.

### All ages

Residents aged 85 and over numbered 362, so lessons here span grandchildren and grandparents.

### Area

The ABS boundary takes in roughly 7.6 square kilometres of Brisbane's southern suburbs.

The bureau adds small privacy perturbations to Census cells, so these figures are reproduced exactly and never summed into totals of our own making.

## Does smart seeding beat a random start?

k-means groups points around k centres, but it needs starting centres, and a bad start can trap it in a poor answer. Random seeding picks k stops at random. k-means++ picks one at random, then favours stops far from the centres already chosen. We ran each method 1,000 times on the 47 stop records with k = 4, 5 and 6.

**k = 5, 1,000 runs per method (our calculation)**

| Measure | Random start | k-means++ |
|---|---|---|
| Median typical distance from stop to its centre | 494 m | 493 m |
| Worst run | 632 m | 596 m |
| Runs reaching the tightest answer found (470 m) | 10.5% | 9.3% |
| Average iterations to settle | 5.22 | 4.43 |

**Median and worst runs at other values of k (our calculation)**

| k | Random: median, worst | k-means++: median, worst |
|---|---|---|
| 4 | 574 m, 676 m | 571 m, 666 m |
| 6 | 450 m, 591 m | 440 m, 558 m |

### Where k-means++ helped

Its worst runs were tighter at every k, and it settled in fewer rounds, about 4.4 against 5.2 at k = 5.

### Where it did not

Medians were within 10 metres. At k = 5, random seeding actually reached the tightest clustering more often, 10.5% of runs against 9.3%.

### What really matters

Neither method found the tightest answer reliably in one go. Running several restarts and keeping the tightest is what fixes a bad start.

### An honest tie

With only 47 stops in one suburb, almost any start lands near a good answer, so the plain baseline holds its own. k-means++ was designed for large datasets where random starts often fail badly. Reporting the tie is the result; claiming a win would be repeating a textbook, not measuring Eight Mile Plains.

Stop positions come from the Translink timetable feed; membership of the suburb is our point-in-boundary check. Distances use a flat projection in metres, fine at suburb scale. The typical distance is the root mean square distance from each stop to its cluster centre. All runs, seeds and statistics are our calculation with numpy, seed 2026.

## Running a fair comparison

The interesting part of this project is not k-means itself but the experiment around it.

**Experiment design, and what it showed**

| Choice | Why | Here |
|---|---|---|
| Many runs per method | One run is luck, not evidence | 1,000 each |
| Same data and seed source | Differences must come from the method | 47 stops, seed 2026 |
| Several values of k | A result at one k may not hold at another | k = 4, 5 and 6 |
| Report medians and worst cases | Averages hide the bad runs | Worst 632 m against 596 m |

### Primary learners

Drop counters on a map, pick meeting points, and see how the first guess changes the final groups.

### Secondary learners

Code k-means in numpy, add k-means++ seeding, and run both enough times to make a fair call.

### Adults

Question any "standard practice" in an analytics tool by testing it on your own data first.

Library defaults are worth reading. In scikit-learn, k-means++ is the default seeding and, with the default n_init setting, it runs from a single start, while random seeding runs 10 times and keeps the tightest result. Our runs suggest restarts deserve as much thought as seeding.

## Warrigal Road and 35 council parks

Local markers from the timetable feed, the council park register and the Queensland school calendar.

### Stops and routes

On Wednesday 21 October 2026, the 47 stop records inside the suburb had 2,195 scheduled bus visits on 9 routes, by our count.

### Busiest stops

Warrigal Rd at Fanfare, at Bordeaux and at Padstow Views tied that day with 139 scheduled visits each.

### Term 1, 2027

Queensland state schools open on Wednesday 27 January 2027, and Term 1 ends on Thursday 25 March.

**Just this suburb** Brisbane City Council's park register lists 35 parks in Eight Mile Plains. Kuraby, Macgregor, Rochedale, Runcorn, Sunnybank, Upper Mount Gravatt and Wishart all border the suburb, and their figures stay separate from these.

## From grouping counters to training models

Ages are a guide; the trial lesson shows where to begin.

- **Ages 6 to 10: Scratch and logic** Puzzles and games that build step-by-step thinking. [Scratch Coding for Kids](/courses/scratch-programming-complete-course), [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)
- **Ages 10 to 14: Python and AI ideas** First code and models that learn from examples. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [AI Literacy for Kids (Ages 8 to 14)](/courses/ai-literacy-for-kids-course)
- **Ages 14 to 18: Machine learning** Clustering, regression and fair evaluation in Python. [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens), [Data Science for Teens](/courses/data-science-course-for-teens-python-data)
- **University and adult: Applied AI** Data science and models for study and work. [Data Science Course](/courses/data-science-complete-masterclass-college), [AI and ML Masterclass](/courses/ai-ml-masterclass-complete-college)

## If AI recommends the method, who checks it works?

The learner. AI assistants repeat standard advice faithfully, but that advice was measured on someone else's data.

Ask an assistant how to cluster bus stops and it will recommend k-means++ with confidence. Good advice in general. On the Eight Mile Plains stops, though, it made almost no difference to the typical result, and random seeding found the tightest clustering slightly more often.

Learners who have run the comparison themselves know to treat advice as a hypothesis. They set up a fair test, report what it shows, and change course when the data disagrees. That habit is what AI cannot supply.

In Eight Mile Plains, the learner who tests the advice is the one ready to use AI well. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## How classes run for Eight Mile Plains

Lessons happen live over video, so learners anywhere in the suburb join from home.

- **Shared notebooks** Teacher and learner run code and read the results together, line by line.
- **School-year rhythm** Plans follow Queensland terms, with breaks in the holidays.
- **Free trial** One real lesson at no charge, closing with an honest recommendation.
- **Matched groups** Five to ten learners of similar level, or one to one.
- **Two per week** Set weekly times, close to eight lessons a month.
- **India time** Our teachers are based in India, so a 7pm class here starts at 2:30pm India time, all year.

**Clocks that never change** Brisbane has had no daylight saving since March 1992 (IANA time zone database), and India has none either, so agreed lesson times hold year round.

## Fees for Eight Mile Plains learners

Three prices for every family.

- First class: USD 0. The trial lesson is free and ends with a written plan.
- Group tuition: USD 100 a month. About eight group lessons a month with five to ten learners at the same level.
- Private tuition: USD 150 a month. About eight private lessons a month, one teacher to one learner.

Payment is in US dollars and comes after the trial, once the course and time are agreed. Holiday breaks, missed lessons and format changes are covered on the pricing page.

## Eight Mile Plains AI and programming questions

### What is the population of Eight Mile Plains?

The 2021 Census QuickStats count 15,326 residents in the suburb of Eight Mile Plains, with 4,125 families and a median age of 36.

### What is k-means clustering?

An algorithm that splits points into k groups by repeatedly assigning each point to its nearest centre and moving each centre to the middle of its group, until nothing changes.

### What is k-means++?

A way to choose starting centres for k-means. It picks the first at random and each later one with probability that grows with distance from the centres already chosen, which spreads the starts out.

### Did k-means++ beat random starts in Eight Mile Plains?

Only partly. Over 1,000 runs at k = 5, medians were 493 m and 494 m; k-means++ had a better worst run and fewer iterations, but random starts found the tightest clustering more often.

### At what age can children learn AI?

From six with Scratch and simple AI activities. Training models in Python usually starts around thirteen.

### Can teenagers take Claude-based courses?

No. Our Claude-based courses are for people aged 18 and over only; teenagers use other AI tools.

### Is there a classroom in Eight Mile Plains?

No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.

### What do lessons cost for Eight Mile Plains learners?

The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of five to ten, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.

### Who is in each group?

Five to ten learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.

### Can Copilot Studio be learned in a group?

No. Copilot Studio is taught one to one only; group learners build agents in Python code.

## More for Eight Mile Plains learners

Try [the Brisbane guide](/best-coding-classes-in-brisbane) or [coding for Brisbane children](/coding-classes-for-kids-brisbane). Families to the south may also want [Logan](/best-coding-classes-in-logan) or [the Gold Coast](/best-coding-classes-in-gold-coast), and [the Queensland guide](/coding-and-ai-classes-in-queensland) covers the rest.

## Contact

Book the free class on [https://learn.modernagecoders.com/ai-and-programming-classes-in-eight-mile-plains-brisbane](https://learn.modernagecoders.com/ai-and-programming-classes-in-eight-mile-plains-brisbane#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
