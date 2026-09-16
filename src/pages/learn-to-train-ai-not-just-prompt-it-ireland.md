---
title: "Learn to Train AI, Not Just Prompt It | Ireland"
description: "Learn to train AI in Ireland, not just prompt it: labels, splits, baselines and overfitting, worked on a real Irish dataset. Live online, first class free."
canonical: https://learn.modernagecoders.com/learn-to-train-ai-not-just-prompt-it-ireland
source: src/pages/learn-to-train-ai-not-just-prompt-it-ireland.html
---
> Training a model means deciding what to predict, choosing evidence you would genuinely have in advance, splitting the data so the test is fair, setting a baseline, and only then fitting anything. We teach that on real Irish data rather than on tidied teaching sets, because every important lesson lives in the mess: categories that repeat themselves as totals, missing values that are missing for a reason, and splits that let a model memorise instead of learn. Classes are live, in groups of five to ten at one level or one to one, for teenagers, students and adults. The first class is free, then USD 100 a month in a group or USD 150 a month one to one.

[Home](/) / [Courses](/courses) / [AI and machine learning classes in Ireland](/ai-and-machine-learning-classes-in-ireland) / Learn to train AI, Ireland

Ireland · Training, not prompting · Live online

# Learn to train AI, not just prompt it

Prompting is a genuine skill, and it is a shallow one. It takes a weekend to get good at, the tools change every few months, and none of it tells you whether the answer you got is right. Training is the other half of AI, the half that decides what a model learns and how you would know if it had learned nothing useful. It involves choices no tool makes for you: what exactly are you predicting, what evidence would have been available at the moment of the prediction, how do you split the data so the test is honest, and what is the simplest possible approach your model has to beat? Ireland's 2024 National AI Strategy refresh makes a related point about people rather than models: "the skills needed for AI are not only digital skills, and the continued development of empathetic and cognitive skills will be crucial to the success of AI adoption in Ireland." This page shows the training half being done properly, on an Irish dataset anyone can download.

At a glance: For: Teens, students and adults; Teaches: Labels, features, splits, baselines; Catches: Overfitting and group leakage; Uses: Open Irish data; Needs: Python, at least the basics; Group: Five to ten at one level; Or: One to one; Start: A free first class. Rated 4.9 across 547 Google reviews.

## Three courses where you train the model

The mechanics of training, at three levels. Each card opens its syllabus.

- [AI and Machine Learning Masterclass](/courses/ai-ml-masterclass-complete-college): The full training loop for students and adults: features, splits, fitting, validation and the arithmetic of deciding whether a result is real.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens): The same ideas at secondary-school pace, with a first model the student trains, breaks on purpose and then fixes.
- [Orange Data Mining](/courses/orange-data-mining-machine-learning-course-for-college-students): Training made visible, for learners who want to see the pipeline before they write one in code.

## What training actually asks of you

Both skills matter. They are simply not the same work, and only one of them makes you able to judge a model.

**Two different jobs**

| Question | Prompting | Training |
|---|---|---|
| What do you control? | The words you send | The data, the labels, the features and the split |
| How do you know it worked? | It looks right | It beats a baseline you defined in advance |
| What can go wrong quietly? | A confident wrong answer | A score inflated by leakage or a bad split |
| What transfers when tools change? | Some habits | Almost everything |

The first thing a learner meets in training is that the task has to be defined precisely enough to argue about. Predicting "how a place is doing" is not a task. Predicting one named number, for one month, from evidence that existed the month before, is.

The second is that you must be able to fail. A prompt never reports an error rate. A trained model does, and the number is only meaningful beside the simplest alternative anyone could have used instead.

The skills side of this is national policy. The 2024 refresh of Ireland's National AI Strategy notes that AI skills "are not only digital skills", and that cognitive skills will matter for adoption here.

The practical version of that sentence, for a learner, is judgement: knowing which questions the data can answer, and saying clearly when it cannot. The tool side is covered on [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-ireland).

Source: [Ireland's National AI Strategy: AI, Here for Good, Refresh 2024](https://enterprise.gov.ie/en/publications/publication-files/national-ai-strategy-refresh-2024.pdf), Department of Enterprise, Trade and Employment, read 16 September 2026.

## Driving test pass rates: a training set every Irish family understands

The Central Statistics Office publishes driving test figures from the Road Safety Authority, monthly, by test centre and test category. It is open under a Creative Commons Attribution 4.0 licence, and it is a superb first training set precisely because it is awkward.

**CSO table ROA30, Driving Tests Delivered and Pass Rate**

| Aspect | Measured |
|---|---|
| Shape | An exact cube: 4 statistics by 68 months by 18 test categories by 73 centres, which is 357,408 rows |
| Period | January 2021 to August 2026 |
| The task we set | Predict the car-test pass rate for a given centre in a given month |
| Usable rows for that task | 3,887, across 68 centres, once rows with no recorded pass rate are dropped |
| The number to beat | Predicting the overall mean of 53.285% for every row gives an average error of 6.787 percentage points |

### Why a baseline first

That 6.787 is the whole point of the exercise. It is what you achieve by knowing nothing except the national average, and any model that cannot beat it has taught you only that your features are useless.

Students compute it themselves in the first session, before any model exists. It takes two lines and it reframes everything that follows.

### And why this dataset

Because almost every household in Ireland has someone who has sat this test, so learners have real intuitions to check the model against, which is exactly when mistakes become visible.

We publish no ranking of test centres, and neither should a learner. The data supports a forecasting exercise; it does not support judgements about the places or the people in them.

Source: [ROA30, Driving Tests Delivered and Pass Rate](https://data.gov.ie/dataset/roa30-driving-tests-delivered-and-pass-rate), published by the Central Statistics Office with the Road Safety Authority as source, listed on data.gov.ie as "Licensed under: Creative Commons Attribution 4.0", read and measured on 16 September 2026. Contains Irish Public Sector Data licensed under a Creative Commons Attribution 4.0 International (CC BY 4.0) licence. All counts above are ours, computed from the published file.

## Five traps in one file, each of them measured

These are not hypothetical warnings. Every number below came out of this file, and each one has ruined somebody's project at some point.

**Measured traps in ROA30**

| Trap | What we measured | What it costs you |
|---|---|---|
| A random split | A random 80/20 split put 67 centres in the test set, and all 67 also appeared in training | The model can memorise centres instead of learning; centre memorisation alone cuts the error by 24% |
| Time drift | Yearly mean pass rates ran 55.90, 52.19, 52.72, 51.59, 53.14 and 54.71 across the period | Training on one era and testing across all of them is not forecasting |
| Missing for a reason | 81.48% of raw cells are blank, from 20.6% for the car test to 100% for one category; 43 centres never miss a value and 4 always do | Dropping blank rows silently deletes whole categories and venues |
| Totals hiding in the rows | 24,480 rows, 6.8% of the file, are totals, verified as exact sums of the detailed rows in all 68 months | Training on them means training repeatedly on the same observations |
| Columns that die | Once you select the pass-rate statistic, three columns hold a single value each | A pipeline that encodes every column wastes features on constants |

### Split by group, not by row

Hold out whole test centres, or whole months, depending on the question. If your model will meet new places, test it on places it has never seen.

### Ask why a value is missing

Here, small overflow venues are missing 55.7% of their values against 16.2% at permanent centres. The publisher does not say why cells are blank, so we do not claim a reason, but the pattern is clearly not random.

### Read the names carefully

One centre name uses an en dash where three otherwise identical names use a hyphen. A split on the wrong character quietly mangles one row, and nothing warns you.

Working through these is the course. A learner who has met group leakage once, with a measured 24% gap attached to it, will check for it forever afterwards.

And when the honest model finally beats 6.787, they know exactly what the improvement is worth, which is the only thing that separates a result from a screenshot.

## The limits are part of the training

A model that predicts a number says nothing about why the number is what it is. Confusing those two is the most common mistake in applied AI.

### Prediction is not explanation

A model can forecast a pass rate without any idea what causes it. Who sits the test where, when and after how much practice all sit outside this file.

### Do not rank people or places

We do not publish league tables from data like this, and we teach students not to. The same restraint applies to staff, schools and patients in every other dataset they will meet.

### Say what would change your mind

Every project ends with the conditions under which the model would stop working: a new category, a new venue, a change in how the figures are recorded.

## Five rungs of training a model

The order matters more than the algorithm. Most learners reach the last rung in three to five months.

**The training loop, in order**

| Rung | What the learner does |
|---|---|
| 1. Define the target | States the exact quantity, the unit and the moment of prediction |
| 2. Choose honest features | Keeps only evidence that exists before the target is known |
| 3. Split with intent | Holds out groups or time periods, not random rows |
| 4. Baseline, then fit | Measures the naive approach, then trains and compares |
| 5. Test the result | Checks stability, looks for leakage, and writes the limits down |

### Where overfitting shows up

Usually between rungs three and four: the training score climbs while the held-out score stalls. Seeing it happen once, on your own data, teaches more than any definition.
The wider sequence of subjects is on the [coding roadmap](/coding-roadmap).

### After this

Learners who want a finished, defensible project go on to [build real AI projects](/build-real-ai-projects-ireland), which works on a different Irish dataset.
Those heading for agents and language models take [AI agents for students](/ai-agents-course-for-students-ireland) instead.

## Nine live courses on training and evaluating models

By level. The free first class decides where you start.

### Before training

The groundwork

- [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college): Enough Python to write a training pipeline yourself.
- [Data Analysis Mastery](/courses/data-analysis-mastery-course-college): Reading a file properly before modelling it.
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data): The same groundwork for secondary students.

### Training

The loop itself

- [AI and Machine Learning Masterclass](/courses/ai-ml-masterclass-complete-college): Features, splits, fitting, validation, judgement.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens): A model a teenager trains and interrogates.
- [Orange Data Mining](/courses/orange-data-mining-machine-learning-course-for-college-students): The pipeline seen before it is written.

### Beyond one model

Scale and modern methods

- [Artificial Intelligence Masterclass](/courses/artificial-intelligence-complete-masterclass-college): The field around the training loop.
- [Generative AI: LLMs, RAG and Agents](/courses/complete-generative-ai-masterclass-college): What training means for language models.
- [Data Science Masterclass](/courses/data-science-complete-masterclass-college): The analysis that surrounds any model.

## Live sessions with the data open in front of you

Classes are live, with teachers working from India at a weekly hour set in Irish time. India does not change its clocks and Ireland does, so the gap is four and a half hours through the Irish summer and five and a half through the winter. Training sessions suit longer slots, so many learners choose a weekend time.

- **Weekday evening** Steady weekly progress, Irish time.
- **Weekend** Longer blocks for fitting and evaluation.
- **Quiet periods** Intensive weeks during holidays.

- **A free first class** You define a task and compute its baseline with a teacher, before any model is trained.
- **Five to ten per group** Learners at one level, comparing splits and scores on the same data.
- **One to one** For work data, a thesis, or a deadline that will not wait.
- **Baseline before model** No result is accepted in class without the naive score it has to beat.
- **Splits are checked** Every split is inspected for group and time leakage before training begins.
- **Limits written down** Each project ends with the conditions under which its model should not be trusted.

## Fees

One monthly fee in US dollars, identical in every country outside India, for any course on this page. Nothing to pay in advance for a term, and you stop whenever you choose.

- Free first class: USD 0. A task defined and a baseline computed. An honest view of your starting level. No card taken.
- Group batch: USD 100 a month. Five to ten learners at one level. The same teacher throughout. Splits and scores reviewed weekly. A certificate at the end.
- One to one: USD 150 a month. A teacher to yourself. Your own dataset and question. Suited to work projects and theses.

## What learners in Ireland ask about training models

### Is prompting not enough for most jobs?

For using a tool, often yes. For deciding whether to trust one, no. Training teaches you what a model can and cannot know, which is what judgement rests on.

### Do I need a lot of maths?

Less than you fear. You need to be comfortable with averages, percentages and the idea of error. The heavier maths is taught only where a problem needs it.

### What is a baseline, and why does it matter?

The simplest sensible prediction, such as always guessing the overall average. On the driving-test data that gives an average error of 6.787 percentage points, and any model has to beat it to be worth anything.

### What is group leakage?

Letting the same group appear in training and testing. On this dataset, a random split put every one of the 67 test-fold centres into training too, so the model could memorise rather than generalise.

### Where do I get data like this?

Ireland publishes plenty openly. This table is on the national portal under a Creative Commons Attribution 4.0 licence, which allows re-use with attribution.

### Do I need a GPU?

No. Everything on this page trains in seconds on an ordinary laptop. Large models are a different subject and rarely where the learning is.

### Can I train a model on my company's data?

Yes, in one-to-one lessons, and we will be careful about what leaves your machine. The method is identical; only the data changes.

### What does it cost?

The first class is free. After that a group place is USD 100 a month and one-to-one lessons are USD 150 a month, in US dollars, with no enrolment fee.

### When are the classes?

Evenings and weekends, at a weekly hour set in the free class. Our teachers are four and a half hours ahead of Irish time in summer and five and a half in winter.

### What happens after I send the form?

We phone you at a reasonable Irish hour and arrange the free class. There is no charge unless you continue.

## Related pages

- [Build real AI projects in Ireland](/build-real-ai-projects-ireland): A finished project, start to finish.
- [Data science course in Ireland](/data-science-course-ireland): The data work underneath.
- [Learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-ireland): The judgement side.
- [AI agents course for professionals](/ai-agents-course-for-professionals-ireland): Agents at work.
- [Best Python classes online in Ireland](/best-python-classes-online-ireland): The language for all of it.
- [AI and machine learning classes in Ireland](/ai-and-machine-learning-classes-in-ireland): The national AI page.

## Contact

Book the free first class at [https://learn.modernagecoders.com/learn-to-train-ai-not-just-prompt-it-ireland](https://learn.modernagecoders.com/learn-to-train-ai-not-just-prompt-it-ireland#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email contact@modernagecoders.com.
