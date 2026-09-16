---
title: "Build Real AI Projects in Ireland | Live Online Classes"
description: "Build real AI projects in Ireland on open Irish data: train a model, test it honestly and find the leaks. Live online classes for teens and adults, first free."
canonical: https://learn.modernagecoders.com/build-real-ai-projects-ireland
source: src/pages/build-real-ai-projects-ireland.html
---
> A real AI project starts with a question and a baseline, not a model. Our project classes use open Irish data, teach cleaning and labelling first, and treat evaluation as the main event: what does the model beat, by how much, and could the result be an accident? Learners see a measured example of data leakage, where an innocent-looking feature lifts accuracy from 0.667 to 0.923 because it could only be known after the event. Classes are live, in groups of five to ten or one to one, for teenagers, students and adults. The first is free; then it is USD 100 a month in a group or USD 150 a month one to one.

[Home](/) / [Courses](/courses) / [AI and machine learning classes in Ireland](/ai-and-machine-learning-classes-in-ireland) / Build real AI projects, Ireland

Ireland · AI projects · Teens and adults

# Build real AI projects in Ireland

Most AI projects you see online are demonstrations. A clean dataset goes in, a model comes out with an impressive accuracy, and nobody asks what the number means. A real project is different, and much more useful: you choose a question, find data that might answer it, discover the data is untidy in ways nobody documented, build a baseline, train something, and then spend the rest of your time trying to prove your own result wrong. This page walks through one such project on Irish data anybody can download, weather records from Dublin Airport going back to 1942. Along the way it shows a model scoring 92%, explains why that score is worthless, and shows the honest version scoring 67% against a baseline of 63.5%. If that sounds like a let-down, it is the single most valuable thing an AI learner can understand, and it is what our project classes teach.

At a glance: For: Teens, students and adults; Builds: One finished, tested project; Teaches: Baselines and honest evaluation; Catches: Leakage and bad labels; Data: Open Irish datasets; Group: Five to ten at one level; Or: One to one; Start: A free first class. Rated 4.9 across 547 Google reviews.

## Three courses that end in a finished project

One for teenagers, one for college students and adults, one for the data itself. Each card opens its syllabus.

- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens): Models a teenager trains, tests and explains, ending with a project they can show and defend to anyone who asks.
- [AI and Machine Learning Masterclass](/courses/ai-ml-masterclass-complete-college): For college students and adults: the full path from data cleaning to evaluation, with the statistics done properly.
- [Data Science Masterclass](/courses/data-science-complete-masterclass-college): The data half of the work, which is where most projects are won or lost long before a model is trained.

## Eighty-four years of Irish weather, and its hidden problems

Met Éireann publishes daily records for Dublin Airport as a single file, free to use under a Creative Commons Attribution 4.0 licence. It is an ideal first project, and it is not clean.

**Met Éireann daily data, Dublin Airport (station file dly532)**

| Aspect | What the file holds |
|---|---|
| Rows | 30,924 daily records, 1 January 1942 to 31 August 2026, with no gaps and no duplicate dates |
| Header | 44 lines of station details and a column key before the data begins |
| Columns | Temperatures, rainfall, wind, sunshine, soil and evaporation, plus six separate indicator columns all named ind |
| Licence | Creative Commons Attribution 4.0, with five accreditation statements Met Éireann asks you to reproduce |

### Trap 1: nothing is missing

Missing values are stored as a single space, so a standard load returns eleven numeric columns as text and reports zero missing values. Asking for an average raises an error instead of a warning.

### Trap 2: dropping rows loses 37 years

Convert those blanks properly and drop incomplete rows and 30,924 becomes 16,977. Worse, the data now silently starts on 28 October 1979, because some instruments began later than others.

### Trap 3: zero is not dry

13,116 days show rainfall of 0.0, but 5,460 of them carry the indicator Met Éireann defines as "trace or sum of precipitation". A trace of rain is recorded as zero.

Before a model exists, the learner has already made three decisions that will govern the result: how to read blanks, which rows to keep, and what counts as a wet day. None of them is in a tutorial, and all of them change the answer.

The label question is the sharpest. Counting any rain gives 17,808 wet days; a threshold of 0.2 mm gives 16,109; a threshold of 1 mm gives 11,144. Those are three different questions wearing the same name.

We make students write their choices down before training anything, with a sentence of justification each. It takes ten minutes and it is what separates a project from a demonstration.

The thresholds above are our own naming rather than official definitions, which is exactly the kind of thing a project write-up has to say out loud.

Source: [Dublin Airport Daily Data](https://data.gov.ie/dataset/dublin-airport-daily-data), published by Met Éireann on data.gov.ie under Creative Commons Attribution 4.0, with the [official key to the indicator codes](https://www.met.ie/cms/assets/uploads/2018/05/KeyDaily.txt); licence terms at [Met Éireann open data](https://www.met.ie/about-us/specialised-services/open-data). Copyright Met Éireann, source met.ie. Met Éireann does not accept any liability whatsoever for any error or omission in the data, their availability, or for any loss or damage arising from their use. The counts above are ours, computed from the file as published and not modified.

## A model that scores 92%, and why it is worthless

The question: will tomorrow be wet, given today's weather? The data is split by time, training on 1979 to 2014 and testing on 2015 onwards, because a model that has seen the future is not being tested.

**The same question, three ways**

| Approach | Accuracy on the test years |
|---|---|
| Always guess dry, the baseline | 0.635 |
| Honest model, using today's temperature, rain, cloud, wind, sun and soil moisture | 0.667 |
| The same model, plus tomorrow's change in soil moisture deficit | 0.923 |

The third row looks like a triumph and is a bug. Soil moisture deficit is calculated partly from rainfall, so tomorrow's change in it already contains tomorrow's rain. The model is being told the answer and then congratulated for repeating it.

Nobody put that feature in the file. A learner builds it themselves, usually while doing something sensible like measuring change over time, and the score jumps so pleasingly that the mistake is easy to keep.

The lesson generalises far beyond weather. A sales model that includes the delivery date, a health model that includes the treatment, a churn model that includes the cancellation email: the shape is always the same, a feature that exists only because the thing you are predicting already happened.

The test is a question, asked of every feature: would I actually have this value at the moment I need to make the prediction? Our students ask it out loud, feature by feature, before they train.

Measured by us on 16 September 2026 using the published file, a logistic regression and a time-based split at 1 January 2015. The leaked feature was constructed deliberately to demonstrate the effect; the file as published does not contain it.

## What a good result actually looks like

The honest model scores 0.667 against a baseline of 0.635. That is a gain of about three points, and it is a perfectly respectable outcome for one station and one day ahead.

### Always quote a baseline

An accuracy without a baseline means nothing. On this test set, guessing dry every single day is right 63.5% of the time, because 36.5% of days are wet.

### Say what you would need to do better

Weather forecasting uses atmospheric models and many stations. A learner who explains why their single-station model is limited understands more than one who reports a big number.

### Report what you tried and dropped

A project write-up names the features considered, the ones removed as leaks, and the split used. Without those, a result cannot be checked by anyone.

### What students finish with

A repository containing the data-loading code, the cleaning decisions, the baseline, the model, the evaluation and a short honest write-up. It runs from top to bottom on someone else's machine.

That is a portfolio piece an interviewer can actually interrogate, and the questions they ask are the ones the project already answers.

### Where to take it next

Other Irish sources make natural follow-ups, and the licence conditions vary, so every project starts with reading them. How Irish open data is licensed is covered on [the data science page](/data-science-course-ireland).

Students who want to build agents rather than models can go on to [AI agents for students](/ai-agents-course-for-students-ireland) or, at work, [agents for professionals](/ai-agents-course-for-professionals-ireland).

## Five rungs of a real project

Most learners take three to six months to go from the first rung to a finished, defensible project.

**From a question to a result you can defend**

| Rung | What the learner does |
|---|---|
| 1. The question | States what is being predicted, for whom, and what would count as useful |
| 2. The data | Loads it properly, reads the notes, and writes down every cleaning decision |
| 3. The baseline | Measures the dumbest sensible approach, before any model |
| 4. The model | Trains something simple, splits honestly, and compares against the baseline |
| 5. The attack | Tries to break their own result, checks for leaks, and writes the limits down |

### Why simple models first

A simple model you understand tells you whether the data has any signal in it. Reaching for a complicated one first usually hides the fact that it does not.
How this sits with everything else is on the [coding roadmap](/coding-roadmap).

### What we do not do

We do not run competitions on cleaned datasets, and we do not teach students to chase accuracy numbers. Neither survives contact with real work.
And we never write, edit or review work being submitted for assessment.

## Nine live courses for AI project work

By stage and age. The free first class sets the starting point.

### Foundations

Before a model makes sense

- [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college): The language every project here is written in.
- [Data Science Masterclass](/courses/data-science-complete-masterclass-college): Cleaning, checking and charting real data.
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data): The same habits, at secondary-school pace.

### Models

Trained and evaluated

- [AI and Machine Learning Masterclass](/courses/ai-ml-masterclass-complete-college): From regression to evaluation done properly.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens): A first real model, explained by the student.
- [Orange Data Mining](/courses/orange-data-mining-machine-learning-course-for-college-students): Visual machine learning for people new to code.

### Modern AI

Beyond a single model

- [Artificial Intelligence Masterclass](/courses/artificial-intelligence-complete-masterclass-college): The wider field, with its methods and limits.
- [Generative AI: LLMs, RAG and Agents](/courses/complete-generative-ai-masterclass-college): Language models, grounded and evaluated.
- [Python and AI Automation](/courses/python-ai-automation-masterclass-college): Putting a working model to use.

## Project weeks with a teacher who asks hard questions

Classes are live with teachers in India, at a fixed weekly hour in Irish time. Their clock never changes and Ireland's does twice a year, so they sit four and a half hours ahead of you in summer and five and a half in winter. Project sessions are usually longer, which is why many learners take a weekend slot.

- **Weekday evening** Steady progress, Irish time.
- **Weekend** Longer blocks for training and analysis.
- **Intensive weeks** School holidays and quiet work periods.

- **A free first class** You look at a real dataset with a teacher and see how the first decisions are made.
- **Five to ten per group** Learners at one level, reviewing each other's evaluation as much as their code.
- **One to one** For a specific project, a thesis or a portfolio deadline.
- **Baselines every time** No model is accepted in class without the baseline it has to beat.
- **Leak hunting** Every feature is questioned before training: would you really know this in advance?
- **A write-up that stands** Projects finish with an honest account of the method, the result and the limits.

## Fees for project classes

The same monthly price in US dollars we charge everywhere outside India, whichever course you take. Nothing to pay in advance for a term, and you can stop once a project is finished.

- Free first class: USD 0. A real dataset opened with a teacher. An honest view of your starting point. No card taken.
- Group batch: USD 100 a month. Five to ten learners at one level. One teacher across the project. Evaluation reviewed weekly. A certificate at the end.
- One to one: USD 150 a month. A teacher to yourself. Your own dataset and question. Suited to theses and deadlines.

## What learners in Ireland ask about AI projects

### What makes a project real rather than a demo?

A question worth asking, data you had to clean yourself, a baseline, an honest split, and a write-up that states the limits. Demos skip most of those.

### Where do I get Irish data to work on?

Plenty is published openly. Met Éireann's daily station files are a good start, released under a Creative Commons Attribution 4.0 licence with attribution conditions to follow.

### My model scored 95%. Is that good?

Check the baseline first, then hunt for leakage. Very high scores on messy real data usually mean a feature is telling the model the answer.

### What is data leakage, in plain words?

Using information at training time that you would not have when the prediction is actually needed. It makes results look excellent and makes them useless.

### Do I need a powerful computer or a GPU?

No. Everything on this page runs on an ordinary laptop. Heavy hardware matters only for large models, and that is rarely where the learning is.

### What age is this suitable for?

From about thirteen for the teen course, provided Python is already comfortable. Younger children build up to it through our data and Python courses.

### Can I use AI tools while building the project?

Yes, once you can read the code they produce, and every project records what the tools contributed.

### What does it cost?

The first class is free, then USD 100 a month for a group place or USD 150 a month one to one, charged in US dollars, with no enrolment fee.

### When do classes run?

Weekday evenings and weekends, at a time set in the free class. Our teachers are four and a half hours ahead of Irish time in summer and five and a half in winter.

### What happens after I send the form?

We phone you at a reasonable Irish hour and arrange the free class. You are charged nothing unless you carry on.

## Related pages

- [Data science course in Ireland](/data-science-course-ireland): Irish open data and its licences.
- [Best Python classes online in Ireland](/best-python-classes-online-ireland): The language underneath.
- [AI agents course for students](/ai-agents-course-for-students-ireland): Agents rather than models.
- [AI agents course for professionals](/ai-agents-course-for-professionals-ireland): The same work, at work.
- [Learn to train AI, not just prompt it](/learn-to-train-ai-not-just-prompt-it-ireland): Under the tools.
- [AI and machine learning classes in Ireland](/ai-and-machine-learning-classes-in-ireland): The national AI page.

## Contact

Book the free first class at [https://learn.modernagecoders.com/build-real-ai-projects-ireland](https://learn.modernagecoders.com/build-real-ai-projects-ireland#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email contact@modernagecoders.com.
