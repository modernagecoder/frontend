---
title: "Build Real AI Projects in Australia | Data, Baselines, Tests"
description: "Build real AI projects in Australia, ages 9 to 67: licensed ABS data, a baseline to beat, honest testing and a written report. Live online lessons, first class free."
canonical: https://learn.modernagecoders.com/build-real-ai-projects-australia
source: src/pages/build-real-ai-projects-australia.html
---
> A real AI project uses data you are permitted to use, compares the model with a simple baseline, tests it on data it has not seen, and reports honestly where it fails. Australian Bureau of Statistics material is published under a Creative Commons Attribution 4.0 licence, with a few exceptions, which makes it a strong source. Modern Age Coders guides Australians aged 9 to 67 through projects like this live online, and the first class is free.

[Home](/) / [Courses](/courses) / [Coding classes in Australia](/coding-classes-in-australia) / Build real AI projects

Australia · Ages 9 to 67 · Real data, real baselines

# Build real AI projects

Most "AI projects" online are tutorials in disguise: a famous dataset, a model copied from a notebook, an accuracy figure nobody questions. A real project is different. It uses data you are allowed to use, it has a simple baseline the model must beat, it is tested on data it never saw, and it ends with an honest account of where it fails. Our live online lessons help Australians from 9 to 67 build projects like that, at a level that fits their age. This page sets out the four tests a real project passes, explains how Australian Bureau of Statistics data is licensed, and works through a full forecasting project on national building approvals in which the simple baselines sometimes win.

At a glance: For: Ages 9 to 67; Data: Licensed public sources; Rule one: Beat a simple baseline; Testing: On unseen, later data; Output: A written project report; Format: Live online lessons; Group: Fifteen to twenty, or one to one; Start: A free first class. Rated 4.9 across 547 Google reviews.

## Three project courses, by age

Children start with small Python projects, teenagers build and test real models, and adults go into deep learning and generative AI. Open a card for the syllabus.

- [Python and AI for Kids](/courses/python-ai-kids-masterclass): Ages 9 to 12: games, turtle art and first smart programs, with no adult AI accounts.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens): Ages 13 to 18: Python to real models, tested properly on held-back data.
- [AI and ML Masterclass for Adults](/courses/ai-ml-masterclass-complete-college): Ages 18 and over: machine learning, deep learning and generative AI, project by project.

## Four tests every real AI project passes

We use the same four tests for a 10 year old's first classifier and an adult's forecasting model. Only the depth changes.

**The four tests**

| Test | The question | A project fails when |
|---|---|---|
| 1. Permission | Are we allowed to use this data, and how must we credit it? | The licence was never checked |
| 2. Baseline | What does the simplest sensible method score? | The model is never compared with anything |
| 3. Unseen data | Was the test data kept away from training, in time order where time matters? | The model was tested on what it learned from |
| 4. Honest write-up | Where does it fail, and for whom? | Only the most flattering number is reported |

### The curriculum points the same way

A Years 9 and 10 Digital Technologies elaboration describes "accessing and storing data from the Australian Bureau of Statistics in a format that is useful for analysis". Another asks students to consider "the complexities associated with training predictive models to capture events that occur with low probability".

Both are exactly the habits a real project needs: real public data, and humility about what a model can predict.

### Why the baseline matters most

A model that scores 85% sounds impressive until a one-line rule scores 87%. Without a baseline, nobody can tell whether the AI added anything.

In our lessons, the baseline is written and scored first, before any model is trained.

## Australian Bureau of Statistics data and its licence

Permission is the first test, and the ABS makes it easier than most sources.

### What the ABS licence says

The ABS states: "All material presented on this website is provided under a Creative Commons Attribution 4.0 International licence", with exceptions including the Commonwealth Coat of Arms, the ABS logo and material protected by a trade mark.

Attribution 4.0 allows reuse, including in projects shared publicly, provided the source is credited. Every project we build on ABS data carries that credit.

### Read the product, not just the website

The ABS also notes that customised reports carry their own licensing and that "Where no indication of licensing is provided within the product, full copyright terms will apply."

Students learn to check the licence of the specific table they download, and to keep a note of it beside the data.

**Choosing data for a project**

| Source type | Usually | Check before using |
|---|---|---|
| ABS tables and Data API | Creative Commons Attribution 4.0 | Exceptions and product-specific terms |
| Other government open data portals | Often an open licence | The licence on each dataset page |
| Websites and social media | Not licensed for reuse | Terms of use; personal information |
| Data you collect yourself | Yours, with consent rules | Privacy and consent of the people involved |

Source, read 13 October 2026: Australian Bureau of Statistics, [website privacy, copyright and disclaimer](https://www.abs.gov.au/website-privacy-copyright-and-disclaimer). This is general information about a licence, not legal advice.

## How far ahead can a model forecast building approvals?

A complete real project on ABS data: the number of new dwelling units approved each month, forecast 1, 3, 6 and 12 months ahead, and tested against three simple baselines.

From the ABS Data API we downloaded the monthly count of dwelling units approved (all residential building, original series) for Australia and each state and territory, 2010-01 to 2026-08. Our model is a ridge regression that looks at the last 12 months and the calendar month being forecast, retrained at every step. We tested it the way a real forecaster works: standing at each month from 2018-12 onwards, using only data available then, forecasting ahead, and comparing with what the ABS later published. The score is the average percentage error.

**Australia: average error by forecast horizon, 92 to 81 test points (our calculation on ABS data)**

| Forecast horizon | This month again | Same month last year | Average of last 12 months | Our model |
|---|---|---|---|---|
| 1 month | 13.4% | 15.7% | 12.5% | 8.9% |
| 3 months | 14.0% | 15.4% | 13.4% | 9.7% |
| 6 months | 16.3% | 15.1% | 15.2% | 12.1% |
| 12 months | 14.6% | 14.6% | 18.4% | 12.8% |

**States and territories: one month and twelve months ahead (our calculation)**

| State or territory | Model error, 1 month | Most accurate, 1 month | Model error, 12 months | Most accurate, 12 months |
|---|---|---|---|---|
| NSW | 17.6% | Our model | 21.9% | Our model |
| Victoria | 13.3% | Our model | 15.6% | Our model |
| Queensland | 13.4% | Our model | 18.5% | Our model |
| South Australia | 11.3% | Our model | 16.4% | Our model |
| Western Australia | 13.7% | Our model | 34.9% | This month again (same as last year's month at 12) |
| Tasmania | 18.6% | Our model | 24.8% | This month again (same as last year's month at 12) |
| Northern Territory | 59.9% | Average of last 12 months | 55.2% | This month again (same as last year's month at 12) |
| ACT | 112.7% | Average of last 12 months | 118.1% | Average of last 12 months |

### Error grows with distance

For Australia as a whole, the model's average error rose from 8.9% one month ahead to 12.8% twelve months ahead. Its lead over the plain "this month again" forecast shrank from 4.5 points to 1.8.

### Where the baselines win

Twelve months ahead, a simple baseline beat the model in 4 of the 8 states and territories. In the smallest markets the model sometimes did worse than repeating the latest month, because there was too little regular pattern to learn.

### Some series barely forecast at all

In the ACT, approvals swing so much from month to month that every method's average error was above 95%. Saying so plainly is part of the project, and it echoes the curriculum's caution about rare, lumpy events.

### What a learner writes up

The model is useful one to three months ahead for the national total and the larger states, and close to useless a year ahead in smaller ones. A one-line baseline is the right tool where it wins, and the report names those places.

At twelve months, "same month last year" and "this month again" are the same forecast, which is why those two columns match; noticing that is part of reading results carefully.

### What we deliberately left out

The ABS also publishes the dollar value of approved building work. We used counts of dwellings only; projects at every age in our classes avoid money figures.

Seasonally adjusted series exist too. We used the original series so that the model had to learn the seasons itself.

Data: Australian Bureau of Statistics, Building Approvals (Data API dataflow BA_GCCSA), number of dwelling units, total residential, original, monthly, licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Downloaded 13 October 2026; all forecasts and errors are our calculation.

## Real projects at every age

The four tests apply at 9 and at 67. The data, tools and maths change.

**Typical real projects**

| Age | Project | Baseline it must beat |
|---|---|---|
| 9 to 12 | A program that learns to sort short words into groups from labelled examples | Always guessing the biggest group |
| 13 to 15 | Predicting tomorrow's school-day temperature from past readings | Today's temperature again |
| 16 to 18 | Classifying public text, such as dataset titles, by topic | A keyword rule |
| Adults | Forecasting a public series, as above, with a full write-up | Last value and same month last year |

### Age rules for AI tools

Real projects at school age are built in Python with no adult-only AI service. Where a project uses any online service, its own minimum age applies; our [AI tool age guide](/ai-tools-age-guide) lists published rules.

Younger learners can start with the [Python AI course for kids](/python-ai-course-for-kids-australia).

### Where these projects lead

Teens can take a project into a school task where the rules allow it, as their own work. Adults often turn one into a portfolio piece or a tool at work.

Learners wanting a broader class route can read about [AI and machine learning classes in Australia](/ai-and-machine-learning-classes-in-australia).

## The one-page report every project ends with

Writing it is where most of the learning happens.

**Report headings**

| Heading | What goes there |
|---|---|
| Data | Source, licence, date downloaded, anything excluded and why |
| Baseline | The simple method and its score |
| Model | What it is, in plain words, and its score on unseen data |
| Where it fails | The cases, groups or horizons where it does worse |
| Use or not | An honest recommendation, including "use the baseline" |

## Four levels of project skill

Learners usually complete a full project, report included, within one or two terms.

**From tutorial follower to project owner**

| Level | What you can do |
|---|---|
| 1. Follower | Run a model on prepared data and read its score |
| 2. Tester | Write a baseline and test on held-back data |
| 3. Builder | Choose licensed data, build, test and report a project end to end |
| 4. Critic | Find where your own model fails and say so first |

### Does a child really need baselines?

Yes, in simple form. "Would guessing the biggest group do as well?" is a question a 10 year old can ask and answer.
Children who learn it early question AI claims for life.

### Do adults need maths?

School maths is enough to start. The ideas behind regression and error are taught as they are needed.
Deeper maths is optional and offered when a project calls for it.

## Courses for project builders

Three age bands. Each course includes at least one full project with a report.

### Children

Ages 9 to 12

- [Python and AI for Kids](/courses/python-ai-kids-masterclass): First smart programs.
- [AI Literacy for Kids](/courses/ai-literacy-for-kids-course): Understanding AI, ages 8 to 14.
- [Maths Through Coding](/courses/maths-through-coding): Python and maths, 10 to 15.

### Teenagers

Ages 13 to 18

- [AI and ML for Teens](/courses/ai-ml-masterclass-teens): Real models, tested.
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data): Data and first models.
- [Orange Data Mining for Teens](/courses/orange-data-mining-visual-machine-learning-course-for-teens): Visual machine learning.

### Adults

Ages 18 and over

- [AI and ML Masterclass](/courses/ai-ml-masterclass-complete-college): Deep learning and GenAI.
- [Data Science Course](/courses/data-science-complete-masterclass-college): Python, ML and more.
- [Maths for Data Science](/courses/data-analytics-mathematics-masterclass): Statistics and linear algebra.

## Project lessons in Australian hours

Lessons come from our team in India, at times that fall in Australian after-school hours, evenings and weekends. Everything is booked in your state's time, daylight saving included.

- **After school** Children and teenagers.
- **Evening** Adults, by arrangement.
- **Weekend** Longer data and modelling sessions.

- **Free first class** A baseline scored on real data, in one lesson.
- **Groups** Fifteen to twenty learners reviewing each other's reports.
- **One to one** For one project, at your depth.
- **Licensed data** Every dataset's licence noted.
- **Baselines first** No model without something to beat.
- **Age rules kept** No service below its minimum age.

## Fees for AI project lessons

Learners in Australia pay a monthly fee in US dollars. Joining costs nothing, and lessons may stop at the close of any month.

- Free first class: USD 0. A baseline on real data. A project idea matched to age. No payment details.
- Group batch: USD 100 a month. Fifteen to twenty learners per group. Report reviews between learners. A regular teacher. Stop at any month's close.
- One to one: USD 150 a month. One learner's own project. Depth set by the learner. Times around school or work.

## Questions about building real AI projects in Australia

### What is a real AI project?

It is a project that uses data you are permitted to use, compares the model with a simple baseline, tests it on data the model has not seen, and reports honestly where it fails.

### Can I use ABS data in my project?

The ABS says material on its website is provided under a Creative Commons Attribution 4.0 International licence, with exceptions such as the Coat of Arms, the ABS logo and trade-marked material. Credit the ABS, and check the specific product.

### What is a baseline?

It is the simplest sensible method, such as repeating last month's value. A model is only worth using where it beats the baseline on unseen data.

### Did your model beat the baselines?

One month ahead it was most accurate in 6 of 8 states and territories and for Australia. Twelve months ahead a simple baseline won in 4 of 8.

### What age can a child start real AI projects?

Around 9, with small Python projects and the same four tests in simple form.

### Do I need an AI account?

No. Projects are built in Python with free tools. Any online AI service used must allow the learner's age.

### Can a project help with school or university?

Skills transfer, but assessed work must be the learner's own under the institution's rules. We never write assessed work.

### What do lessons cost?

The first class is free and needs no card. Monthly fees appear in the fees section above.

## Related pages

- [Coding classes in Australia](/coding-classes-in-australia): Where all our Australian pages meet.
- [AI and machine learning classes](/ai-and-machine-learning-classes-in-australia): The broader class route.
- [Learn to train AI](/learn-to-train-ai-not-just-prompt-it-australia): Labels, training and testing.
- [Python AI course for kids](/python-ai-course-for-kids-australia): For learners aged 9 to 13.
- [AI classes for teens](/ai-classes-for-teens-australia): Use, check and build.
- [AI tool age guide](/ai-tools-age-guide): Published minimum ages.

## Contact

Book the free first class at [https://learn.modernagecoders.com/build-real-ai-projects-australia](https://learn.modernagecoders.com/build-real-ai-projects-australia#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
