---
title: "AI and Programming Classes in Grafton | Live Online Lessons"
description: "AI and programming classes for Grafton teens and adults, live online: Python, machine learning and privacy-aware training on Clarence Valley data. First lesson free."
canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-grafton
source: src/pages/ai-and-programming-classes-in-grafton.html
---
> Grafton teenagers and adults learn AI well by training real models in Python and asking where the data lives and who may see it. Grafton's urban area held 19,255 residents at the 2021 Census, whose median age was 43. Every lesson is taught live over video by a teacher, privately or in a small group, and there is no charge for the first.

[Home](/) / [Australia](/coding-classes-in-australia) / [New South Wales](/coding-and-ai-classes-in-new-south-wales) / Grafton

Grafton, New South Wales, Australia / Live online

# AI and programming classes in Grafton

**What are the best AI and programming classes in Grafton?** Grafton teenagers and adults learn AI well by training real models in Python and asking where the data lives and who may see it. Grafton's urban area held 19,255 residents at the 2021 Census, whose median age was 43. Every lesson is taught live over video by a teacher, privately or in a small group, and there is no charge for the first.

Some AI systems are now trained without collecting everyone's data in one place. Each device or site trains a copy of the model on its own data, and only the model's numbers travel to be averaged. That is federated learning, and its hardest case is when every participant sees a different kind of data. Grafton gives a clean example. We took the state's address points on both sides of the Clarence and gave one imaginary client only the Grafton points on the north bank, and the other only the South Grafton points. Neither can learn the river alone: their models are right 65.8% and 47.7% of the time. Averaged together round by round, they match a model trained on all the data at once, with one mistake in 1,911 test points.

Facts last verified 10 October 2026. Teaching is online; no Grafton branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 15 to 20 students per group.

## AI courses for the Clarence Valley

Every course reaches projects like the two-bank model. Start with the free trial, which asks for no card.

- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 13 to 17): Machine learning for teenagers in Python, from a first classifier to training and testing it honestly.
- [Python for Teens](/courses/python-complete-masterclass-teens) (Ages 13 to 17): The Python foundations machine learning depends on: lists, loops, functions and data files.
- [Artificial Intelligence Course](/courses/artificial-intelligence-complete-masterclass-college) (University and adult): AI from search and logic to machine learning and modern models, with the maths explained.
- [Data Science Course](/courses/data-science-complete-masterclass-college) (Adults): Data science in Python, from cleaning data to models, evaluation and responsible use.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## A river city on two banks

The Grafton Significant Urban Area at the 2021 Census, against New South Wales and Australia.

**Grafton urban area: core 2021 counts**

| Measure | Grafton |
|---|---|
| Residents | 19,255 |
| Median age | 43 |
| Families | 4,973 |
| Private dwellings | 8,711 |
| Average people per household | 2.3 |
| Area of the urban area | about 106.3 square kilometres |

**Grafton beside New South Wales and Australia**

| Measure | Grafton | NSW | Australia |
|---|---|---|---|
| Community and personal service workers | 1,305 (18.1%) | 10.6% | 11.5% |
| Labourers among employed residents | 957 (13.3%) | 8.2% | 9.0% |
| Professionals among employed residents | 1,115 (15.5%) | 25.8% | 24.0% |
| Separate houses among occupied homes | 6,265 (82.3%) | 65.6% | 72.3% |
| Drove to work | 4,875 (67.8%) | 43.1% | 52.7% |

### Service work

Community and personal service workers make up 18.1% of employed residents, far above the state share of 10.6%.

### Houses and cars

Separate houses are 82.3% of occupied homes, and 67.8% of workers drove themselves to work.

### Both banks

The urban area takes in the localities of Grafton, South Grafton, Junction Hill, Great Marlow, Waterview, Koolkhan, Trenayr, Southampton, Alumy Creek, Carrs Creek, Carrs Island, Carrs Peninsula and Crowther Island.

The bureau slightly randomises Census counts for privacy, which can leave parts not quite matching totals. Figures here are exactly as published.

## Can two banks of the Clarence train one model without sharing data?

The task: given a point's position, is it addressed to Grafton or South Grafton? Each client holds only one answer.

**Test accuracy on 1,911 held-out address points (our calculation)**

| How the model was trained | Rounds of averaging | Accuracy |
|---|---|---|
| All training data in one place | none | 99.95% |
| Federated, 1 local step per round | 400 | 99.95% |
| Federated, 5 local steps per round | 80 | 99.95% |
| Federated, 20 local steps per round | 20 | 99.90% |
| Federated, 100 local steps per round | 4 | 99.79% |
| North bank client alone | none | 65.83% |
| South bank client alone | none | 47.67% |

**The address points used (NSW Spatial Services, our count)**

| Group | Points |
|---|---|
| Inside the Grafton urban area | 10,887 |
| Addressed to Grafton (north client) | 6,155 |
| Addressed to South Grafton (south client) | 3,402 |
| Held back for testing | 1,911 |
| Used for training | 7,646 |

### Local training

Each client starts from the shared model and takes a few gradient steps of logistic regression on its own points.

### Averaging

The server averages the two sets of weights, weighted by how many points each client holds, and sends the result back.

### Same budget

Every federated run uses 400 local steps in total, so the only difference is how often the clients synchronise.

### Client drift

With one local step per round, federated averaging reproduces the central model exactly. With 100 local steps, each client pulls far towards its own one-sided answer before averaging, the shared weights shrink, and accuracy slips from 99.95% to 99.79%. The data never moved in either case. What changed was how long each client trained alone, which is the central trade-off in real federated systems.

Addresses come from NSW Spatial Services address points, copyright Spatial Services; we used only each point's position and its locality label, and print no addresses. The task is easy on purpose, so the effect of uneven data stands out. The split, the training and every accuracy figure are our own calculations.

## What federated learning teaches about data

Training without pooling data protects privacy, but it changes how a model learns.

The local-only models fail for a simple reason: a client that has only ever seen north bank points has never seen a reason to say South Grafton, so it says Grafton for almost every point, 1,859 of the 1,911. Averaging gives the shared model both halves of the picture without either client revealing a single point. Real systems face the same pattern in milder form: hospitals with different patients, phones with different users, schools with different students. Learners who have watched drift happen on a map of their own town understand why federated systems synchronise often and test on everyone's data.

### Teenagers

Train a classifier on half the data, see it fail on the other half, then average two models and watch it recover.

### University students

Implement federated averaging, vary local steps and client imbalance, and plot the drift.

### Adults

Understand what privacy-preserving AI can and cannot promise before relying on it at work.

Modern Age Coders has no ties to NSW Spatial Services, the Australian Bureau of Statistics or Clarence Valley Council. Their data is used under its published terms; the federated experiment and its results are ours.

## Lesson times and terms for Clarence Valley learners

Grafton is on New South Wales time, with summer daylight saving.

### Clocks

Daylight saving in Grafton runs from 4 October 2026 to 4 April 2027, moving the clocks one hour forward for summer.

### The India gap

Teachers in India are four and a half hours behind Grafton through winter and five and a half through summer.

### Third term

New South Wales public schools hold Term 3 of 2027 from Monday 19 July to Friday 24 September, a good stretch for a steady weekly lesson.

## From a first classifier to federated models

Ages are only a guide; the free first lesson places each learner.

- **Ages 13 to 14: Data and decisions** Python that plots points, draws a dividing line and counts how often it is right. [Python for Teens](/courses/python-complete-masterclass-teens), [Maths Through Coding](/courses/maths-through-coding)
- **Ages 15 to 18: Training models** Logistic regression, gradient descent and honest testing on held-out data. [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens), [Statistics & Probability](/courses/statistics-probability-maths-course)
- **University: Distributed learning** Federated averaging, uneven data and the privacy questions around shared models. [Artificial Intelligence Course](/courses/artificial-intelligence-complete-masterclass-college), [Maths for Data Science](/courses/data-analytics-mathematics-masterclass)
- **Adults: AI with care** Building and evaluating models on sensitive data while keeping that data where it belongs. [Data Science Course](/courses/data-science-complete-masterclass-college), [Python Automation Course](/courses/python-ai-automation-masterclass-college)

## If AI tools can train a model for you, why should Grafton learners understand federated learning?

Because "your data never leaves your device" is a promise about privacy, not about accuracy, and the difference matters.

More and more products advertise that they learn without collecting your data. That can be true and still hide a weakness: if each participant's data is lopsided, the shared model may drift, and nobody sees it unless they test on everyone. In the project, the drift was small because the task is easy. In harder tasks it can matter much more.

Our Grafton learners build the clients, the averaging server and the tests themselves. They come away able to ask good questions of any system that claims to protect privacy while learning: how often do clients synchronise, how different is their data, and who checks the result.

Training a model takes a few lines in 2026; understanding what it learned, and from whom, is still the valuable part. The longer argument is in [why programming still repays the effort](/blog/is-coding-worth-learning-2026).

## How Grafton lessons work

Every class is a live video lesson, so learners on both sides of the river join from home.

- **Getting set up** Learners need only a laptop or desktop, a headset or built-in mic, and internet that copes with video.
- **NSW year levels** Teachers plan around New South Wales year levels and term dates, teaching in English.
- **Free trial class** The first lesson is a full class and ends with a recommended course and time.
- **Groups of a level** Each group has fifteen to twenty learners at the same level, from Grafton and elsewhere.
- **Twice a week** Groups meet on two set days weekly, close to eight lessons a month.
- **India-based teachers** Our teachers work in India, and every lesson is booked in Grafton time.

**Quiet hours** Adults can choose early evening or weekend one-to-one lessons that fit around work and family.

## Grafton class fees

Pricing is simple and the same throughout Australia.

- First class: USD 0. The first class is free, finishing with a suggested level, course and weekly time.
- Group tuition: USD 100 a month. A month of group classes, close to eight, with fifteen to twenty learners at one level.
- Private tuition: USD 150 a month. Close to eight private lessons a month with your own teacher.

Outside India, fees are charged in US dollars, and Grafton pays what all of Australia pays. Nothing is billed until the trial settles what to study and when; holidays, absences and switching formats are all covered on our pricing page.

## Grafton AI class questions

### What is federated learning?

Federated learning trains one shared model across many devices or sites. Each trains on its own data and sends only model updates, which a server averages.

### What is client drift?

Client drift happens when clients with very different data train alone for too long between averaging rounds, so the shared model moves away from the right overall answer.

### How many people live in Grafton?

The 2021 Census counted 19,255 people in the Grafton urban area, with a median age of 43.

### How accurate was the federated model?

With frequent averaging it scored 99.95% on 1,911 held-out points, the same as a model trained on all the data; with only four rounds it scored 99.79%.

### Do you help HSC students in Grafton?

Yes, with programming and the maths behind computing subjects, planned around NSW terms. Assessed work always remains the student's own.

### When are Grafton lessons held?

Weekday afternoons, early evenings and Saturday mornings are popular, always set in Grafton time.

### Is there anything for primary school children?

Yes. Children from six begin with Scratch and block coding; the federated project suits teenagers and adults.

### Is there a Modern Age Coders centre in Grafton?

No. We have no premises in Australia and claim none. All classes are live online; learners need a computer and a dependable connection, and our listed phone number is in India.

### What do Grafton AI classes cost?

The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, or USD 150 a month one-to-one. All of it is agreed before payment.

### How many learners share a group?

Five to ten, grouped by level and goals rather than age or town. If no group time suits, one-to-one lessons are offered.

## More for the Northern Rivers and NSW

Find every New South Wales page in the [NSW state guide](/coding-and-ai-classes-in-new-south-wales). Down the coast are [coding classes in Coffs Harbour](/best-coding-classes-in-coffs-harbour), and to the north [coding classes in Lismore](/best-coding-classes-in-lismore). For why training models beats only prompting them, read [learn to train AI, not just prompt it](/learn-to-train-ai-not-just-prompt-it-australia).

## Contact

Book the free class on [https://learn.modernagecoders.com/ai-and-programming-classes-in-grafton](https://learn.modernagecoders.com/ai-and-programming-classes-in-grafton#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
