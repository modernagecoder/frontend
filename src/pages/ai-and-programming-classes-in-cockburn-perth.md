---
title: "AI and Programming Classes in Cockburn, Perth"
description: "Live online AI and programming classes across the City of Cockburn for learners aged 6 to 67, with machine learning on real local data, in groups or one to one."
canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-cockburn-perth
source: src/pages/ai-and-programming-classes-in-cockburn-perth.html
---
> Live online AI and programming classes across the City of Cockburn for learners aged 6 to 67, with machine learning on real local data, in groups or one to one.

Skip to contentCourse picks for Cockburn

## Courses that teach models and their limits

The bus bay project needs Python, numpy and a feel for evaluation. These courses build that understanding; a free trial chooses the starting level.

[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)Ages 13 to 17AI and Machine Learning for TeensNearest neighbours, regression and honest evaluation, coded by hand.See the syllabus](/courses/ai-ml-masterclass-teens)[![AI and ML Masterclass course thumbnail](/images/ai-ml-college.webp)University and adultAI and ML MasterclassMachine learning foundations through to tuned, validated models.See the syllabus](/courses/ai-ml-masterclass-complete-college)[![Data Science for Teens course thumbnail](/images/data-science-teens.webp)Ages 13 to 17Data Science for TeensMaps, distances and data handling in Python.See the syllabus](/courses/data-science-course-for-teens-python-data)[![Python and AI for Kids course thumbnail](/images/python-kids.webp)Ages 8 to 12Python and AI for KidsBeginner Python and AI with results children can test.See the syllabus](/courses/python-ai-kids-masterclass)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Cockburn in the Census

## A large council of family homes

2021 Census QuickStats for the City of Cockburn local government area (ABS code LGA51820), with the Western Australian figure for comparison.

| Measure | City of Cockburn |
| --- | --- |
| Residents | 118,091 |
| Median age | 37 |
| Families | 32,804 |
| Private dwellings | 48,394 |
| People per household | 2.6 |

| Indicator | Cockburn | Western Australia |
| --- | --- | --- |
| Separate houses | 81.3% (35,391) | 79.7% |
| Workers who drove to work | 64.9% (40,804) | 62.1% |
| Workers who travelled by train | 2.7% (1,685) | 1.8% |
| Adults with a bachelor degree or higher | 24.5% (23,300) | 23.8% |

### Children

The council area counted 7,881 children under five, 7,762 aged 5 to 9 and 7,328 aged 10 to 14.

### Teenagers

A further 6,500 residents were aged 15 to 19.

### Size

The council area covers about 168 square kilometres south of Fremantle.

These are council-wide figures, quoted as the bureau published them after its privacy adjustments, and never added together by us.

Signature project

## One neighbour, five, or forty-five?

By our boundary check, 695 stop records lie inside the City of Cockburn, and 129 of them have Y in the bay field. For each stop we predicted bay or no bay from a vote of its k nearest stops, then scored the guesses two ways: on the stops the model had seen, and leaving each stop out in turn.

| k | Training accuracy | Leave-one-out accuracy | Stops whose guess ever flips |
| --- | --- | --- | --- |
| 1 | 100% | 84.9% | 52.2% |
| 5 | 89.1% | 85.2% | 62.4% |
| 15 | 82.6% | 81.2% | 42.5% |
| 45 | 81.4% | 81.4% | 3.7% |

### Low bias, high variance

With k = 1 the model is perfect on stops it has seen, because each stop is its own nearest neighbour. On unseen stops it drops to 84.9%.

### High bias, low variance

From k = 25 upward the vote is always "no bay", the answer for 81.4% of stops. The guesses never change, and they never find a bay.

### The middle

At k = 5 the model scored highest on unseen stops, 85.2%. That beats always saying no bay by under four points: location alone carries only a modest signal.

### Measuring variance directly

We rebuilt the model on 200 bootstrap resamples of the stops and counted how often each stop's guess changed. Up to k = 15, between 42% and 62% of stops flipped at least once. At k = 45 only 3.7% did. Stability arrived exactly when usefulness left.

Stop records come from the Public Transport Authority of Western Australia open data file, which marks each stop with a bay field. We decided which stops fall inside the council with our own boundary test, measured distances on a flat metre grid, and computed every accuracy and resampling figure ourselves in numpy, seed 2026. The bay field describes the file, not a site survey.

Machine learning practice

## Choosing k without fooling yourself

The trade-off is general: every model has some setting that moves it between memorising and oversimplifying.

| Practice | Why | Here |
| --- | --- | --- |
| Never judge on training data | k = 1 always scores 100% there | Hides the drop to 84.9% |
| Compare with a baseline | Always guessing the majority class | 81.4% |
| Scan the setting | Try a range of k values | Highest at k = 5 |
| Check stability | Refit on resampled data | Flip rates of 3.7% to 62.4% |

### Primary learners

Guess a classmate's favourite colour by asking one friend, then five, then the whole class, and compare.

### Secondary learners

Code nearest neighbours in numpy, plot training against leave-one-out accuracy, and explain the gap.

### Adults

Ask of any model at work: what is the baseline, and how does the score change on data it has not seen?

Leave-one-out testing is cheap for nearest neighbours because the model stores the data and has nothing to retrain. For slower models, k-fold cross-validation does the same job.

Around Cockburn

## Two rail stations and many suburbs

Council-level markers from the state stops file and the WA school calendar.

### Rail

Inside the council boundary, by our check, are platform records for Cockburn and Aubin Grove stations: five in all.

### School stops

42 of the 695 stop records are typed as school stops, and Rockingham Road carries the most records, 47.

### Term 4, 2027

WA public school Term 4 of 2027 starts on Monday 11 October and ends on Thursday 16 December.

Council figures

This page covers the City of Cockburn local government area. Stop records inside it carry many suburb labels, the most common being Hamilton Hill (82), Spearwood (62) and Bibra Lake (61). Those suburbs and the neighbouring councils of Fremantle, Melville and Kwinana have their own separate figures.

Learning ladder

## From asking friends to tuning models

These ages are approximate; the trial lesson places each learner.

Ages 6 to 10

### Scratch and logic

Games that teach step-by-step thinking.

[Scratch Coding for Kids](/courses/scratch-programming-complete-course)[Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)Ages 10 to 14

### Python and AI ideas

First code and simple models trained on examples.

[Python and AI for Kids](/courses/python-ai-kids-masterclass)[AI Literacy for Kids (Ages 8 to 14)](/courses/ai-literacy-for-kids-course)Ages 14 to 18

### Machine learning

Building, testing and tuning models in Python.

[AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens)[Data Science for Teens](/courses/data-science-course-for-teens-python-data)University and adult

### Applied AI

Data science and machine learning for work or study.

[Data Science Course](/courses/data-science-complete-masterclass-college)[AI and ML Masterclass](/courses/ai-ml-masterclass-complete-college)Coding and AI

## AI can tune the model. Can it tell you it barely helps?

Only if you ask the right question. Automated tools will happily report a winning k without mentioning the baseline.

An assistant asked to "tune k" will run a search and report 85.2%. Impressive on its own, less so beside the 81.4% you get by always guessing no bay. Without that comparison, a weak model sounds strong.

Learners who have watched training accuracy sit at 100% while real accuracy falls know which numbers to distrust and which baseline to demand. That judgement is what turns AI output into a decision.

In Cockburn, the learner who asks for the baseline knows how much a model is really worth. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

Delivery

## How Cockburn learners take part

Lessons run live on video, reachable from any suburb in the council area.

### Notebooks together

Teacher and learner run cells and read every score side by side.

### Term calendar

Plans follow WA school terms, with holiday breaks.

### Trial at no cost

A full opening lesson and a candid recommendation.

### Matched classmates

Each group holds fifteen to twenty learners at the same stage; private lessons are the alternative.

### A twice-weekly rhythm

The same two slots each week make roughly eight lessons monthly.

### India time

Teachers work from India, so a 7pm Cockburn class begins at 4:30pm India time.

Perth and India clocks

Neither Western Australia, since March 2009 (IANA time zone database), nor India uses daylight saving, so the two and a half hour gap is constant.

Fees

## Fees for Cockburn learners

Three prices for everyone.

First class**USD 0**

The first lesson is free and comes with a written plan.

Group tuition**USD 100**

Around eight group lessons a month with fifteen to twenty learners.

Private tuition**USD 150**

Around eight private lessons a month with one teacher.

Cockburn families pay in US dollars, after the trial and once a course and weekly time are agreed. School holidays, sick days and moving between formats are all explained on our pricing page.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20AI%20or%20programming%20class%20for%20a%20learner%20in%20Cockburn.)Reviews

## Our Google reviews

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

## Book a free Cockburn class

Mention the learner's age and what they hope to do. Older students might first scan k on the bus bay data, younger ones play a Scratch guessing game.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Cockburn one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20AI%20or%20programming%20class%20for%20a%20learner%20in%20Cockburn.)

Submitted details are used for placement and follow-up.

FAQ

## Cockburn AI and programming questions

What Cockburn families and adult learners tend to ask.

### What is the population of the City of Cockburn?

The 2021 Census QuickStats count 118,091 residents in the City of Cockburn local government area, with 48,394 private dwellings and a median age of 37.

### What is the bias-variance trade-off?

The tension between models that are too simple, which miss real patterns (bias), and models that are too flexible, which chase noise and change with every sample (variance). Good settings balance the two.

### What is k-nearest neighbours?

A method that predicts a value for a point from the k most similar points in the data, for example by majority vote. Small k follows local detail; large k smooths towards the overall average.

### What did the Cockburn bus bay model find?

Across 695 stop records, k = 5 reached 85.2% leave-one-out accuracy, against 81.4% for always guessing no bay; k = 1 scored 100% on training data but 84.9% on unseen stops.

### Can children learn AI?

Yes. Six-year-olds can explore AI through Scratch games, and most learners train genuine models in Python from about thirteen.

### Do under-18s use Claude?

No. Claude-based courses are for adults of 18 and over only; younger learners use other AI tools.

### Is there a classroom in Cockburn?

No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.

### What do lessons cost for Cockburn learners?

The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.

### Who is in each group?

Fifteen to twenty learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.

### Do Cockburn group classes include Copilot Studio?

No. Copilot Studio is taught only one to one; group learners write agents in Python.

Explore Perth and Western Australia

## More for Cockburn learners

Visit [the Perth page](/online-coding-and-python-classes-in-perth-western-australia) or [coding for Perth kids](/coding-classes-for-kids-perth). Down the coast, [Mandurah](/ai-and-programming-classes-in-mandurah) and [Bunbury](/vibe-coding-and-ai-agents-classes-in-bunbury) have pages of their own, and [the Western Australia guide](/coding-and-ai-classes-in-western-australia) covers the rest.

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20AI%20or%20programming%20class%20for%20a%20learner%20in%20Cockburn.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-cockburn-perth*
