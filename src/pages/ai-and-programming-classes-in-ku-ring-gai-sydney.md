---
title: "AI and Programming Classes in Ku-ring-gai, Sydney"
description: "Live online AI, machine learning and programming classes for Ku-ring-gai teenagers and adults, with real teachers, in small groups or one to one. First lesson free."
canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-ku-ring-gai-sydney
source: src/pages/ai-and-programming-classes-in-ku-ring-gai-sydney.html
---
> Live online classes in which a teacher builds machine learning models in Python with Ku-ring-gai teenagers and adults, using real public data and checking every result against data the model has not seen. The 2021 Census counted 124,076 people in the Ku-ring-gai council area, where 53.7% of residents aged 15 and over hold a bachelor degree or higher. Lessons are one to one or in a small level-matched group, and the first is free.

[Home](/) / [Australia](/coding-classes-in-australia) / [New South Wales](/coding-and-ai-classes-in-new-south-wales) / [Sydney](/best-coding-classes-in-sydney) / Ku-ring-gai

Ku-ring-gai, Sydney, New South Wales / Live online

# AI and programming classes in Ku-ring-gai

**Which AI and programming classes are best for Ku-ring-gai learners?** Live online classes in which a teacher builds machine learning models in Python with Ku-ring-gai teenagers and adults, using real public data and checking every result against data the model has not seen. The 2021 Census counted 124,076 people in the Ku-ring-gai council area, where 53.7% of residents aged 15 and over hold a bachelor degree or higher. Lessons are one to one or in a small level-matched group, and the first is free.

Eight stations on the North Shore line, from Roseville to Wahroonga, rise and fall together month after month: school holidays, summer and busy weeks show up at all of them at once. Try to predict Gordon from the other seven with ordinary regression and the model does something strange. It gives Pymble a large negative weight, as if more travellers at Pymble meant fewer at Gordon, although the two stations move together with a correlation of 0.924. The lasso, a regression that pays a price for every input it uses, keeps three neighbours, drops the rest, and on six months it never saw predicts Gordon with about half the error. Our Ku-ring-gai project builds both in Python on Transport for NSW's open data.

Facts last verified 10 October 2026. Teaching is online; no Ku-ring-gai branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 15 to 20 students per group.

## Machine learning paths for Ku-ring-gai learners

Each course connects to the lasso project. The free first lesson settles the right one, and no card is needed to book it.

- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Machine learning in Python for teenagers, from linear models to evaluation on unseen data.
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data) (Ages 13 to 17): Tables, charts and correlations with real open data before any modelling starts.
- [AI and ML Masterclass](/courses/ai-ml-masterclass-complete-college) (University and adult): A full machine learning course, including regularisation, model selection and honest testing.
- [Data Science Course](/courses/data-science-complete-masterclass-college) (University and adult): Data science in Python for work, from cleaning to models that survive new data.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## A highly qualified council area with many teenagers

The bureau's 2021 QuickStats for the Ku-ring-gai local government area, measured against New South Wales and Australia.

**Ku-ring-gai council area totals, 2021 Census**

| Quantity | Ku-ring-gai |
|---|---|
| People | 124,076 |
| Families | 35,318 |
| Private dwellings | 45,849 |
| Mean people per household | 2.9 |

**Ku-ring-gai, the state and the nation**

| Statistic | Ku-ring-gai | New South Wales | Australia |
|---|---|---|---|
| Median age | 42 | 39 | 38 |
| Bachelor degree or above, aged 15 and over | 53.7% (53,618) | 27.8% | 26.3% |
| Professionals among workers | 41.6% (24,359) | 25.8% | 24.0% |
| Residents aged 15 to 19 | 7.4% (9,124) | 5.7% | 5.7% |

### Degrees

More than half of residents aged 15 and over hold a bachelor degree or higher, almost double the state share.

### Homes

28,718 occupied homes were separate houses, 68.6% of the total, while flats and apartments made up 27.1%.

### School years

Residents aged 10 to 14 made up 8.0% of the population and those aged 15 to 19 another 7.4%, both above the state shares.

The bureau introduces small random changes into its tables to protect privacy, so the parts of a table may not add to its total. We print the bureau's numbers as they appear and do not compute totals of our own from them.

## Predicting Gordon from its neighbours: least squares against the lasso

Transport for NSW publishes monthly Opal entries for every station. We took 23 months for the eight North Shore line stations from Roseville to Wahroonga and asked how well seven of them predict Gordon.

**Weights given to each neighbour when all 23 months are used (our calculation, inputs standardised)**

| Neighbour | Correlation with Gordon | Least squares weight | Lasso weight, penalty 500 |
|---|---|---|---|
| Roseville | 0.956 | -3,369 | 8,415 |
| Lindfield | 0.939 | 20,850 | 1,927 |
| Killara | 0.912 | 2,455 | 0 |
| Pymble | 0.924 | -22,706 | 0 |
| Turramurra | 0.907 | -16,825 | 0 |
| Warrawee | 0.937 | 4,728 | 4,863 |
| Wahroonga | 0.935 | 30,633 | 0 |

**Trained on October 2024 to February 2026, tested on March to August 2026 (mean absolute error in monthly entries, our calculation)**

| Model | Inputs kept | Error on training months | Error on unseen months |
|---|---|---|---|
| Average of training months only | 0 | 13,400 | 15,633 |
| Least squares, all seven neighbours | 7 | 1,366 | 8,329 |
| Lasso, penalty 2,000 | 3 | 3,572 | 4,285 |
| Lasso, penalty 10,000 | 1 | 9,087 | 9,547 |

### Why the signs go wrong

All eight stations follow the same seasonal rhythm, so their columns are nearly copies of each other. Least squares can then trade large positive and negative weights against each other and still fit the training months closely.

### What the lasso does

It adds a cost proportional to the size of every weight. Inputs that add little are pushed to exactly zero, and as the penalty grows the model keeps three neighbours, then two, then Roseville alone, then none.

### What the test shows

Least squares fits the past most closely yet does worse than the lasso on the future. The three-input lasso gives up some training accuracy and roughly halves the error on months it never saw.

### A fit is not a forecast

An error of 1,366 entries a month on the training data looks excellent, and an error of 8,329 on the next six months tells the real story. Every learner in this project sees the same lesson professional data scientists learn the hard way: judge a model only on data it was not allowed to study.

Every weight and error above is our own calculation from Transport for NSW's published monthly figures, with each station's entries standardised before fitting. The weights describe a statistical model, not anything about how people actually choose stations, and the six test months are too few to make firm claims about which model is better in general.

## Experiments that sharpen a learner's judgement

With the lasso working, a few further runs show why choosing inputs matters in every machine learning system.

**Next experiments on the North Shore line data**

| Experiment | What to watch | What it teaches |
|---|---|---|
| Sweep the penalty from 0 upwards | Inputs dropping out one by one | The regularisation path |
| Swap the lasso for ridge regression | Weights shrink but none reach zero | L1 against L2 penalties |
| Choose the penalty by cross-validation | The penalty with the smallest error on held-out months | Tuning without peeking at the test set |
| Add the month of the year as an input | Whether neighbours still matter | Confounding by a shared cause |

The pattern of several inputs telling the same story is everywhere: test scores in related subjects, sensor readings from nearby devices, word counts in similar documents. A model that cannot cope with it gives unstable explanations, and the lasso is one of the clearest ways to see the problem and fix it.

### Teenagers

Plot the eight stations together, fit least squares by hand with NumPy, and watch the weights change when one month is removed.

### University students

Write coordinate descent for the lasso, compare it with scikit-learn, and trace the full path of weights.

### Adults

Build forecasting models at work that stay simple enough to explain and stable enough to trust.

Transport for NSW, Ku-ring-gai Council, the NSW Department of Education and the statistics bureau make these datasets public and have no connection with us. The regressions, weights and test errors were produced by our own code.

## Twentieth-century schools and a line of stations

A few more facts from the same open sources.

### Schools of the 1900s

The NSW schools file lists 24 government schools in the council area. The earliest first teachers were at Lindfield Public School in 1903, Warrawee Public School in 1906 and Roseville Public School in 1913.

### Gordon Station

Gordon recorded 168,651 Opal entries in August 2026, averaging 150,171 a month across the 23 months in our data.

### Four terms in 2027

Eastern division schools run Term 1 from Wednesday 3 February to Friday 9 April 2027 and Term 4 from Tuesday 12 October to Monday 20 December.

**Another view of the same data** Exits are published alongside entries. Comparing them station by station, and asking why a month might show more people leaving a station than entering it, is a good warm-up in reading data carefully before modelling anything.

## From patterns in data to models that generalise

The bands are a guide; the free trial decides where to begin.

- **Ages 10 to 13: Spotting patterns** Charts and simple rules from real data, built in Scratch and early Python. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [Maths Through Coding](/courses/maths-through-coding)
- **Ages 13 to 16: Python with data** Reading tables, finding correlations and drawing honest charts. [Data Science for Teens](/courses/data-science-course-for-teens-python-data), [Python for Teens](/courses/python-complete-masterclass-teens)
- **Ages 15 to 18: First models** Regression, overfitting, regularisation and testing on unseen data. [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens), [AI Tools Course for Teens (13+)](/courses/teens-ai-tools-mastery-course)
- **University and adult: Models for work** Feature selection, validation and models that can be explained to others. [AI and ML Masterclass](/courses/ai-ml-masterclass-complete-college), [Data Science Course](/courses/data-science-complete-masterclass-college)

## An AI can fit a model in seconds. Why should a Ku-ring-gai learner build one?

Because the hard part of machine learning is not fitting a model, it is knowing when the fit is misleading.

Ask an AI assistant to predict Gordon from its neighbours and it will happily run a regression and report a tight fit. Unless prompted, it is unlikely to mention that the inputs are nearly duplicates, that a weight of minus 22,706 on Pymble makes no physical sense, or that the error on future months is six times the error on past ones.

A learner who has built the lasso on real station data looks for exactly those warning signs: inputs that move together, explanations that flip sign, and accuracy measured only on the data the model learned from. Those habits matter more as AI tools make models cheaper to produce.

In 2026 anyone can fit a model, and the Ku-ring-gai learner who checks it on unseen months is the one whose predictions hold up. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Roseville to Wahroonga, one classroom online

The eight stations in our project run the length of the council area's railway, and a live online lesson serves every one of their neighbourhoods equally.

- **At home** Lessons happen at the learner's own desk, so no evening is lost to driving, parking or waiting for a lift home.
- **Following NSW** Lessons respect the NSW stages and terms, pause for school holidays, and can tie projects to senior computing and maths courses.
- **A proper trial** The free opening lesson teaches real content; the teacher then suggests a level, course and time, and nothing is charged that day.
- **Groups of fifteen to twenty** Learners are matched on skill and pace rather than age or postcode, alongside classmates from elsewhere.
- **Two lessons weekly** A fixed weekly rhythm of two lessons, roughly eight a month, with holiday breaks planned in advance.
- **Teachers in India** A 6:30pm Ku-ring-gai lesson in summer starts at 1pm India time; during the Sydney winter it starts at 2pm there.

**Two time zones, one timetable** Sydney moves its clocks forward on Sunday 4 October 2026 and back on Sunday 4 April 2027; India never changes. We quote every lesson in Sydney time, so the family's timetable stays fixed through both changes.

## Ku-ring-gai class fees

Simple pricing in three parts.

- First class: USD 0. A free first lesson that ends with a recommended course.
- Group tuition: USD 100 a month. A month of small-group lessons, usually eight, with fifteen to twenty learners.
- Private tuition: USD 150 a month. Around eight private lessons a month with one teacher.

Invoices outside India are in US dollars, so every Ku-ring-gai family pays the same rate and no local price list exists. Payment starts only after the trial has fixed a course and time, and the pricing page sets out holidays, missed lessons and format changes.

## Ku-ring-gai AI and programming questions

### How many people live in the Ku-ring-gai council area?

124,076 at the 2021 Census, according to the QuickStats for the Ku-ring-gai local government area, with a median age of 42.

### What is lasso regression?

Lasso regression is linear regression with an extra cost on the absolute size of every weight. The cost pushes unhelpful weights to exactly zero, so the model chooses a small set of inputs and is less likely to overfit.

### What is the Ku-ring-gai station project?

Learners predict Gordon Station's monthly Opal entries from the seven other North Shore line stations between Roseville and Wahroonga. Least squares fits the past closely but errs by 8,329 entries a month on unseen months; a three-input lasso errs by 4,285.

### Why did ordinary regression give Pymble a negative weight?

Because all the stations move together, their inputs are almost interchangeable, and least squares can balance large positive and negative weights against each other. The fit looks good but the individual weights stop meaning anything.

### Does this help with senior maths or computing?

Yes. The project uses statistics and programming that support senior maths and computing courses. Any work a school assesses must be the student's own; we explain methods and do not write assessed work.

### Is this suitable for adults changing careers?

Yes. Adults learning data science or machine learning work on the same kind of project, with more attention to validation and to explaining models to others.

### Can younger children learn with you?

Yes, from age six. Younger children begin with Scratch and simple patterns; the regression project on this page is for older students.

### Is there a Modern Age Coders centre in Ku-ring-gai?

No. Lessons are live online only and we have no premises in Australia. A computer with sound and a reliable connection is all that is needed; our phone number is in India.

### How much are AI classes for Ku-ring-gai learners?

The first lesson is free. Then a group place costs USD 100 a month for two live lessons a week, about eight in total, with fifteen to twenty learners, or USD 150 a month for the same schedule one to one. Course, format and time are agreed before paying.

### How big are classes?

Fifteen to twenty learners at the same level, grouped by ability and goals rather than age or suburb. One-to-one teaching is offered when no group fits the needed time.

## More for Ku-ring-gai learners

Next door, [Hornsby](/online-coding-and-python-classes-in-hornsby-sydney) has a Python page of its own, and the [Sydney page](/best-coding-classes-in-sydney) covers the whole city. Students curious about AI for school can read [AI classes for teens in Australia](/ai-classes-for-teens-australia), and the [New South Wales page](/coding-and-ai-classes-in-new-south-wales) covers the state.

## Contact

Book the free class on [https://learn.modernagecoders.com/ai-and-programming-classes-in-ku-ring-gai-sydney](https://learn.modernagecoders.com/ai-and-programming-classes-in-ku-ring-gai-sydney#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
