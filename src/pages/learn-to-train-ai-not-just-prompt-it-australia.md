---
title: "Learn to Train AI, Not Just Prompt It | Australian Students"
description: "For Australian students: what the curriculum says about training AI models, why labels matter more than prompts, and the agreement maths that caps any model built."
canonical: https://learn.modernagecoders.com/learn-to-train-ai-not-just-prompt-it-australia
source: src/pages/learn-to-train-ai-not-just-prompt-it-australia.html
---
> Training AI means building a model from labelled examples and testing it on examples it has not seen, rather than prompting a model someone else built. The labels set the ceiling: two careful labellers who are each right 90% of the time agree on only about 82% of two-label examples. Students who check their own labels, hold back test data and measure honestly understand AI in a way prompting alone cannot teach.

[Home](/) / [Courses](/courses) / [Coding classes in Australia](/coding-classes-in-australia) / Train AI, not just prompt it

Australia · Ages 10 and up · Build the model

# Learn to train AI, not just prompt it

Typing a request into a chatbot uses a model that someone else trained, on data someone else chose, tested in ways someone else decided. Training a model, even a tiny one, puts all three decisions in the student's hands. It is also where the most important lesson in machine learning becomes obvious: a model can only be as good as the labels it learns from. This page explains the difference between prompting and training, what the Australian Curriculum asks students to explore, and a short calculation every young model-builder should do before trusting their own results.

At a glance: For: Ages 10 and up; Focus: Training and testing models; Starts with: Labelling your own data; Then: Python and real libraries; Curriculum: Digital Technologies, Years 7 to 10; Format: Live online video; Group: Five to ten, or one to one; Start: A free first lesson. Rated 4.9 across 547 Google reviews.

## Three courses where students build the model

From labelling pictures to training in Python. The free first lesson picks the right level.

- [How machines learn, for children](/courses/ai-literacy-for-kids-course): Ages 8 to 14. Collect and label examples, train a simple classifier, then try to fool it.
- [Machine learning without code first](/courses/orange-data-mining-visual-machine-learning-course-for-teens): Teens. Build and test models visually, so the ideas come before the syntax.
- [Machine learning in Python](/courses/ai-ml-masterclass-teens): Teens ready for Python. Real datasets, real libraries, honest test scores.

## Two very different ways to use AI

Both are useful. Only one teaches how AI actually works.

**Prompting a model compared with training one**

| Question | When you prompt a chatbot | When you train a model |
|---|---|---|
| Who chose the data? | The company that built it | You |
| Who decided what counts as right? | Its builders and their labellers | You and your labels |
| How was it tested? | In ways you usually cannot see | On test data you held back |
| Can you explain a wrong answer? | Rarely | Often, by inspecting your data |
| What you learn | How to ask | How AI learns, and where it fails |

Students who have trained even a small classifier read AI news differently. When a system makes a strange mistake, their first question is "what was it trained on, and who labelled it?", which is exactly the right question.

## What the Australian Curriculum asks students to explore

Training, not only prompting, is already part of the Australian Curriculum v9. The elaborations for Digital Technologies in Years 7 to 10 describe it directly.

**Machine learning in the Australian Curriculum v9, Digital Technologies, as published**

| Years | Code | Elaboration |
|---|---|---|
| 7 and 8 | AC9TDI8P02 | "comparing the output from a classification model against data tagged manually to verify its accuracy and effectiveness" |
| 9 and 10 | AC9TDI10P02 | "exploring machine learning, a form of artificial intelligence where an algorithm is trained using a data set, for example to classify images into categories" |
| 9 and 10 | AC9TDI10P02 | "adjusting parameters of an AI model to observe the impact of different factors on predicted outcomes" |

### Data tagged manually

The Years 7 and 8 example compares a model's output with "data tagged manually". That phrase hides the whole subject of this page: someone has to tag the data, and people do not always agree.

If the manual tags are unreliable, comparing a model against them measures the tags as much as the model.

### Trained using a data set

The Years 9 and 10 example describes machine learning as an algorithm "trained using a data set". The data set is where the student's choices live: what to collect, how to label it, and what to keep aside for testing.

We teach those choices explicitly, because they matter more than any single algorithm.

Source, read 7 October 2026: ACARA, [Australian Curriculum v9, Digital Technologies content, Years 7 to 10](https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx). Elaborations are examples, not compulsory content.

## Inter-annotator agreement: the ceiling on your model

Before training anything, ask two people to label the same examples independently and count how often they agree. Machine learning practitioners call this inter-annotator agreement, and it tells you how much your labels can be trusted.

**How often two independent labellers agree on two-label data (our calculation and simulation)**

| Each labeller is right | Agreement, by formula | Agreement, 500 simulated runs of 200 items |
|---|---|---|
| 95% of the time | 90.5% | 90.5% |
| 90% of the time | 82.0% | 82.1% |
| 80% of the time | 68.0% | 68.0% |

### Why agreement falls so fast

Two labellers agree when both are right or both are wrong in the same way. On two-label data the chance is p times p plus (1 minus p) times (1 minus p). At 90% each, that is 0.81 plus 0.01, or 82.0%.

So two people who are each careful nine times in ten still disagree on nearly one example in five. Children are usually amazed by this, and then they understand why labelled data is precious.

### What it means for a model

Test a perfect model against labels that are 90% right and it will appear to score about 90%, because the "mistakes" are in the labels. A model can never look better than its answer key.

One fix is a majority vote: three labellers at 90% each produce a majority label that is right 97.2% of the time. Better labels raise the ceiling for every model trained on them.

The scikit-learn library, which our older students use, has a ready-made measure called Cohen's kappa, which its documentation describes as "a statistic that measures inter-annotator agreement". Younger students start with simple percentage agreement, counted by hand and then by a few lines of Python.

Source, read 7 October 2026: [scikit-learn, cohen_kappa_score](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.cohen_kappa_score.html). The agreement figures are our own calculation and simulation, labelled as such.

## Keep some data back, every time

The second habit of a real model-builder is never testing on the examples the model learned from.

### The rule, in a library's own words

The scikit-learn user guide puts it bluntly: "Learning the parameters of a prediction function and testing it on the same data is a methodological mistake."

A model that memorised its training examples would score perfectly on them and still fail on anything new.

### How children practise it

Younger students label 40 pictures, train on 30 and test on the other 10, which they hid in a separate folder. Older students use a train and test split in Python.

Both learn the same thing: a score only means something if the model has never seen the test.

### Label twice

Have two people label a sample independently and count agreement before training.

### Hide the test set

Set test examples aside before training starts, and do not peek.

### Change one thing

Adjust one setting at a time and watch the test score, just as the curriculum's example suggests.

Source, read 7 October 2026: [scikit-learn User Guide, 3.1 Cross-validation](https://scikit-learn.org/stable/modules/cross_validation.html).

## A labelling experiment for a kitchen table

Families can run the first stage of this page in half an hour with a pile of photos and two pencils. It needs no computer at all, and it makes the rest of machine learning easier to grasp.

**A home labelling experiment in five steps**

| Step | What to do | What it teaches |
|---|---|---|
| 1. Choose a question | Pick something with two answers, such as "is this photo of a dog or a cat?" or "is this leaf from a gum tree?" | A model always starts from a clearly defined question |
| 2. Gather 30 examples | Print or collect 30 pictures, including a few awkward ones | Real data contains hard cases |
| 3. Label separately | Two family members label every picture without talking | Labels are human judgements |
| 4. Count agreement | Count how many of the 30 labels match and turn it into a percentage | Agreement is a measurement, not a feeling |
| 5. Discuss the misses | Look at every disagreement and decide what the rule should have been | Better instructions make better labels |

### What families usually find

Most pairs agree on the easy pictures and split on the strange ones: a blurry photo, an animal half out of frame, a leaf from a garden shrub. Those disagreements are exactly the examples a model will find hard too.

Writing a one-line rule for each disputed case, then labelling again, usually raises agreement. That is how professional labelling teams work.

### The step into code

Once the labels are agreed, the same 30 pictures become a first training set. Children train a simple classifier on 20 and test it on the other 10, and then explain every test mistake.

The habit they carry forward is the most valuable one in the field: look hard at the data before trusting any score.

## From prompting to building

The progression we use, from a first labelled set to a tested model.

**Four stages of training AI**

| Stage | What the student does |
|---|---|
| 1. Label | Collect and label a small set of examples, and measure agreement |
| 2. Train | Train a simple classifier in a visual tool |
| 3. Test | Hold back data, test honestly and explain the errors |
| 4. Code | Train and evaluate models in Python with real libraries |

### For children

Stages one and two use pictures, sounds and simple tools that need no adult-only accounts.
The lessons are hands-on: children see their own labelling mistakes turn into model mistakes.

### For teens and adults

Stages three and four use Python, real datasets and libraries such as scikit-learn.
For the thinking side of AI use, read our page on [learning to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-australia).

## Nine courses for building AI yourself

Grouped by age and experience. The free first lesson places each learner.

### Children

Ages 8 to 12

- [Machines that learn from examples](/courses/ai-literacy-for-kids-course): Label, train, test, repeat.
- [Python and small models](/courses/python-ai-kids-masterclass): First code that learns.
- [Games with an AI helper](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev): Describe, build, then understand.

### Teenagers

Ages 13 to 18

- [Visual machine learning](/courses/orange-data-mining-visual-machine-learning-course-for-teens): Models built with blocks and charts.
- [Python machine learning](/courses/ai-ml-masterclass-teens): Real data, honest evaluation.
- [Data science for teens](/courses/data-science-course-for-teens-python-data): Cleaning and labelling data well.

### Adults

18 and over

- [Machine learning and deep learning](/courses/ai-ml-masterclass-complete-college): From Python to neural networks.
- [Data science, end to end](/courses/data-science-complete-masterclass-college): Data, models and evaluation.
- [Machine learning without code](/courses/orange-data-mining-machine-learning-course-for-college-students): For analysts and students.

## Lessons where students make the data

Students collect, label, train and test in every course. Teachers ask "how do you know?" until the answer is a measurement.

- **After school** Weekday afternoons in your state.
- **Evenings** For senior students and adults.
- **Weekends** Saturday and Sunday options.

- **Their own data** Students build datasets about things they care about.
- **Agreement checked** Labels are double-checked before any training.
- **Tests held back** Every model is tested on data it has never seen.
- **Errors explained** Students find out why a model got something wrong.
- **Small groups** Fifteen to twenty learners, or one to one.
- **Age-appropriate tools** Younger students use tools that need no adult accounts.

## Fees

A monthly fee in US dollars applies to every country outside India, at one shared rate. There is no charge to start and no term-length commitment, so any month can be your last.

- Free first class: USD 0. A trial lesson at no cost. A frank view of the right level. Card details not needed.
- Group batch: USD 100 a month. Fifteen to twenty learners. A dedicated teacher. Similar age and level. Pay as you go, monthly.
- One to one: USD 150 a month. Individual teaching. Flexible weekly time. Learner-led pace.

## Common questions about training AI

### What does learn to train AI, not just prompt it mean?

It means building and testing machine learning models from labelled data yourself, rather than only typing requests into a chatbot that someone else trained.

### What is inter-annotator agreement?

Inter-annotator agreement measures how often two or more people labelling the same examples independently give the same label. It shows how reliable the labels are, and therefore how far any model trained on them can be trusted.

### Why does agreement matter so much?

Because a model learns from labels and is scored against labels. If two careful labellers at 90% each agree only about 82% of the time, a model tested on those labels cannot show its true quality.

### Is training AI part of the Australian Curriculum?

Yes. The Australian Curriculum v9 includes elaborations in Digital Technologies about exploring machine learning trained on a data set and comparing a classification model with manually tagged data.

### What age can my child start training models?

Children from about 8 can label examples and train simple classifiers in visual tools. Training in Python usually starts from around 12 or 13.

### Does my child need maths to train AI?

Basic percentages are enough to begin. More maths becomes useful later, and our maths and coding courses support each other.

### What is a test set?

A test set is a group of examples kept aside and never shown to the model during training, so that its score on them shows how well it handles new data.

### Will my child use ChatGPT or Claude in these courses?

Not to build the models. Students train their own. Where chatbots appear, we follow each tool's minimum age in its terms.

### Are classes live?

Yes. Every lesson is live online with a teacher, in a group of fifteen to twenty or one to one, at times set for your state.

### How much are the courses?

The first lesson is free. Families then pay monthly with no joining fee and no term lock-in, as shown in the fees section.

## Related pages

- [Coding classes in Australia](/coding-classes-in-australia): Our main page for Australian families.
- [Learn to think, not just use AI](/learn-to-think-not-just-use-ai-tools-australia): Checking AI answers properly.
- [Python and AI for kids](/python-ai-course-for-kids-australia): A first AI course in Python.
- [AI classes for teens](/ai-classes-for-teens-australia): AI for secondary students.
- [Understand the code](/understand-the-code-dont-copy-paste-australia): Owning what you write.
- [AI and machine learning in Australia](/ai-and-machine-learning-classes-in-australia): Our AI hub for Australian learners.

## Contact

Book the free first class at [https://learn.modernagecoders.com/learn-to-train-ai-not-just-prompt-it-australia](https://learn.modernagecoders.com/learn-to-train-ai-not-just-prompt-it-australia#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
