---
title: "Best Coding Classes in Dundee | Modern Age Coders"
description: "Live online coding, Python, AI and maths lessons for Dundee learners aged 6 to 67, from Broughty Ferry and Lochee to the West End. Book your free first lesson."
canonical: https://learn.modernagecoders.com/best-coding-class-in-dundee
source: src/pages/best-coding-class-in-dundee.html
---
> Live online coding, Python, AI and maths lessons for Dundee learners aged 6 to 67, from Broughty Ferry and Lochee to the West End. Book your free first lesson.

Skip to contentCourse picks for Dundee

## Four courses for the City of Discovery

Let the learner's interests choose. Every course begins with a live lesson at no charge, booked without any card.

[![Python and AI for Kids course thumbnail](/images/python-kids.webp)Ages 8 to 12Python and AI for KidsPython for younger learners, including little prediction games where the computer guesses tomorrow and keeps score of how wrong it was.See the syllabus](/courses/python-ai-kids-masterclass)[![Data Science for Teens course thumbnail](/images/data-science-teens.webp)Ages 13 to 18Data Science for TeensReading a real weather file, building forecasts and scoring them honestly, the route to the Leuchars project on this page.See the syllabus](/courses/data-science-course-for-teens-python-data)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)Ages 13 to 18AI and Machine Learning for TeensMachine learning for teenagers, where every model is compared first with a simple baseline and tested on data it never saw.See the syllabus](/courses/ai-ml-masterclass-teens)[![Data Analysis Course course thumbnail](/images/data-analysis-college.webp)University and adultData Analysis CourseTime series, forecasting and error measures for adults who plan with data at work.See the syllabus](/courses/data-analysis-mastery-course-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Dundee today

## A working-age city on the Tay

From National Records of Scotland's first results of the 2022 census. Counts are rounded to the nearest hundred and printed as released.

| Measure | Dundee | Scotland |
| --- | --- | --- |
| Usual residents, rounded | 148,100 | 5,436,600 |
| Usual residents in 2011 | 147,268 | Not compared |
| Households, rounded | 69,900 | Not compared |
| Households in 2011 | 69,193 | Not compared |
| Aged 20 to 24, rounded | 13,900 | 337,000 |
| Share aged 15 to 64 | 67.1% | 64.6% |
| Share aged 65 and over | 18.1% | 20.1% |
| Residents per square kilometre | 2,476.6 | 69.8 |

### Steady numbers

About 148,100 people lived in Dundee City in 2022, against 147,268 in 2011, in about 69,900 households against 69,193.

### Working age

Two thirds of residents, 67.1%, were aged 15 to 64, above the Scottish share, while 18.1% were 65 or over against 20.1%.

### A compact council

At 2,476.6 residents per square kilometre, the council area is tightly drawn around the city, with Broughty Ferry inside it and Monifieth just beyond.

National Records of Scotland also reports that 21.8% of Dundee households had dependent children in 2022. Our learners here cover every stage: a P3 pupil in Broughty Ferry making a first game, an S5 student in Menzieshill working towards Higher Computing Science, or an adult in Lochee learning Python for a new job, each in a group at the right level.

A ship of science

## Discovery, built in Dundee for the Antarctic

From Dundee Heritage Trust, which has cared for the ship since she came home.

### 1901 to 1904

The Trust describes Discovery as the first British commissioned scientific research ship, built in Dundee for the British National Antarctic Expedition under Captain Scott.

### 1902

The crew compiled the South Polar Times on board, one of the publications the Trust now celebrates in its polar collection.

### 1986

After voyages all over the globe, including oceanographic expeditions in the 1920s, Discovery returned home to Dundee in 1986.

We have no connection with Dundee Heritage Trust. Discovery belongs on this page because she was built to do science at sea, where careful records and honest measurement were the whole point of the voyage. The project below keeps that spirit on dry land: a weather record kept for seventy years, and a test of whether anyone can predict it better than the obvious guess.

Where the records come from

The Met Office publishes monthly records for a set of long-running stations as free text files. Leuchars, in Fife, about 11.6 kilometres from Dundee city centre, has monthly maximum and minimum temperatures, rain and sunshine from January 1957 to the present, with the most recent months marked provisional.

Signature project

## Can you forecast next month better than the obvious guess?

Every forecast here is made in order, month by month, using only the months before it. That rule, called walk-forward testing, is what makes the scores fair.

| Method | Average miss | Fair? |
| --- | --- | --- |
| This month again (persistence) | 2.296 C | Yes |
| Same month last year | 1.375 C | Yes |
| Long-run average for the month (climatology) | 1.113 C | Yes, using earlier years only |
| Climatology plus 0.2 of last month's anomaly | 1.009 C | Yes, 0.2 chosen on 1970 to 1999 |
| Climatology plus 0.4 of last month's anomaly | 0.969 C | No, 0.4 picked by looking at the test years |
| Climatology from all years to 2025 | 1.032 C | No, it averages in the future |

### 1. Start with baselines

Before any clever model, score the obvious guesses. A method that cannot beat the long-run monthly average is not worth using, however sophisticated it looks.

### 2. Walk forward

Forecast January 2000 from data up to December 1999, then February from data up to January, and so on. The model never sees the month it is predicting.

### 3. Freeze choices early

The weight on last month's anomaly was chosen on 1970 to 1999, before the test began. Choosing it on the test years flatters the result.

### Winning most often is not winning

Month by month, the long-run average was the closest of four methods only 54 times out of 312, fewer than simply repeating last month, which won 57. Yet its average miss is less than half the size. Persistence is sometimes spot on and sometimes badly wrong, especially at the turn of the seasons; climatology is rarely exact and never far away. Average error, not a count of wins, is the fair score.

Sunshine is harder to beat. For monthly sunshine hours, the long-run average misses by 20.426 hours, and adding a fifth of last month's anomaly improves that only to 20.258, while persistence misses by 34.773. A learner who reports that honestly, that the extra method barely helps for sunshine, has learned more than one who only reports the temperature success.

Testing predictions

## Five rules for scoring any forecast

Learned on seventy years of Fife weather, then used on sales forecasts, energy demand, exam predictions, sports models and every machine learning project.

| Rule | At Leuchars | What breaks without it |
| --- | --- | --- |
| Beat a baseline | Every method scored against climatology first | Celebrating a model that the monthly average beats |
| Only the past | Each month forecast from earlier months alone | A score no real forecaster could ever achieve |
| Tune before testing | Weight chosen on 1970 to 1999, tested on 2000 to 2025 | A parameter fitted to the answers |
| Average the errors | Mean absolute error over 312 months | Being fooled by a method that wins often but misses badly |
| Report the losses too | Sunshine barely improves, and the page says so | A success story built by leaving results out |

The leaky climatology in the table shows how easily the second rule breaks. Averaging each calendar month over all the years up to 2025, including the year being forecast, cuts the error from 1.113 to 1.032 without any extra skill. The code looks innocent. Only asking what the program could have known at the time exposes it.

### Younger learners

Guessing tomorrow's temperature every day for a fortnight, writing the guesses down first, and adding up how far off they were.

### Teenagers

The Leuchars file read in Python, four forecasting methods, walk-forward testing and a parameter frozen before the test period.

### Adults

Forecast evaluation at work, with baselines, holdout periods and error measures agreed before anyone looks at results.

We are not connected with the Met Office, National Records of Scotland, Dundee Heritage Trust or Dundee City Council. The station record and census figures are published openly; the forecasts, errors and comparisons on this page are our own work.

Learning ladder

## From guessing tomorrow to walk-forward testing

These bands are a loose guide; the free lesson shows where a learner actually belongs.

Ages 6 to 10

### Guess and check

Making a prediction, writing it down before the answer arrives, and measuring how close it was.

[Coding for Kids](/courses/kids-coding-blocks-masterclass)[Mental Maths for Kids](/courses/mental-maths-mastery-kids)Ages 11 to 13

### Averages that predict

Using past months to guess the next one in code, and comparing two guessing rules fairly.

[Python and AI for Kids](/courses/python-ai-kids-masterclass)[Maths Through Coding](/courses/maths-through-coding)Ages 14 to 18

### Forecasts in Python

Baselines, anomalies, walk-forward loops and error measures on seventy years of real weather records.

[Data Science for Teens](/courses/data-science-course-for-teens-python-data)[AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens)Ages 18 to 67

### Forecasting at work

Time series methods for adults, with evaluation designed before modelling so the results can be trusted.

[Data Analysis Course](/courses/data-analysis-mastery-course-college)[Statistics & Probability](/courses/statistics-probability-maths-course)Coding and AI

## An AI model will forecast anything you ask. Why should a Dundee teenager learn to test forecasts?

Because a forecast nobody has tested fairly is only a guess with decimals.

Ask an assistant to predict next month's weather or next quarter's sales and it will produce confident numbers. A learner who has scored forecasts walk-forward knows to ask what baseline it beats, which data it was tuned on, and whether any future information leaked into the test. Those three questions catch most of the misleading results in data science.

Every serious AI project is evaluated the same way: a baseline, a held-out test set that the model never sees during training, and choices frozen before the test is run. Learning those habits on a weather record from across the Tay is easier than learning them on a large model, and the habits are identical.

So a Dundee teenager should still learn to program in 2026, in a city that built a ship to do science at the bottom of the world: predictions are cheap, and knowing which ones deserve belief is the valuable skill. The longer argument is in [why coding is worth learning in 2026](/blog/is-coding-worth-learning-2026).

Delivery

## Broughty Ferry, Lochee or the Hilltown, from home

A dark winter evening in Dundee is no time to cross the city for a lesson. Online, the lesson comes to the learner.

### East and west of the city

A learner in Whitfield and another in Menzieshill can join the same class without either travelling.

### Scottish stages, Scottish names

P1 to P7, S1 to S6, then National 5, Higher and Advanced Higher: lessons follow the names Dundee schools use, and every lesson is in English.

### A first lesson with content

The free session teaches a real task and closes with a recommended level, course and weekly time. No payment card is requested.

### Five to ten at one level

Classmates at the same stage from Dundee, elsewhere in the UK and overseas, so each level has a workable time slot.

### Two lessons weekly

A fixed pair of lessons each week, roughly eight a month, with holidays and exam leave planned with the teacher well in advance.

### Time zones made simple

Indian time is constant all year, which puts it four and a half hours ahead of Dundee in the summer and five and a half in winter, so after-school and evening lessons in the UK fall inside our teachers' working day.

Across Tayside and Fife

Families in Monifieth, Carnoustie, Newport-on-Tay or Forfar join the very same groups, because lessons are online and groups are formed by level.

Fees

## Dundee lesson fees

Start with a free lesson; after that, one monthly fee.

First class**USD 0**

A complete lesson with nothing to pay, closing with a suggested level, course and weekly slot.

Group tuition**USD 100**

Close to eight live lessons a month, shared with fifteen to twenty learners at the same stage.

Private tuition**USD 150**

Close to eight live lessons a month, taught to your learner on their own.

Outside India the fee is the same for everyone and set in US dollars, so Douglas and the West End pay alike, and no prices appear in pounds. Billing starts only once the free lesson has fixed a course and a time; pausing, missed lessons and switching between group and private teaching are explained on the pricing page.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20coding%20lesson%20for%20a%20learner%20in%20Dundee.)Reviews

## Six Google reviews, reproduced as families wrote them

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

## Book a free lesson for a Dundee learner

The first task fits the learner: a guess-and-check prediction game for a young child, a short Python program that averages past months for a beginner, or the Leuchars record and a walk-forward test for a teenager ready for real data.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Dundee one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20coding%20lesson%20for%20a%20learner%20in%20Dundee.)

Submitted details are used for placement and follow-up.

FAQ

## Dundee coding class questions

The questions we hear most from Dundee families.

### How many people live in Dundee?

Scotland's Census 2022 counted about 148,100 usual residents in Dundee City, rounded to the nearest hundred, compared with 147,268 in 2011, living in about 69,900 households.

### How does Dundee compare with Scotland?

In 2022, 67.1% of Dundee residents were aged 15 to 64 against 64.6% nationally, 18.1% were 65 or over against 20.1%, and there were 2,476.6 residents per square kilometre against 69.8.

### What is walk-forward testing?

Testing a forecasting method in time order, so that each prediction is made using only data from before the thing being predicted. It stops a model from being scored with information it could never have had.

### Which forecast came closest at Leuchars?

For monthly average daytime highs from 2000 to 2025, the long-run monthly average plus a fifth of last month's departure from normal missed by 1.009 degrees on average, ahead of the plain average at 1.113 and last month's value at 2.296.

### Where do the weather records come from?

The Met Office publishes monthly records for Leuchars, in Fife, as a free text file, running from January 1957. The latest months are marked provisional, and we leave them out of the tests.

### What was RRS Discovery?

A ship built in Dundee that Dundee Heritage Trust describes as the first British commissioned scientific research ship. She carried the 1901 to 1904 British National Antarctic Expedition and returned to Dundee in 1986. We are not connected with the Trust.

### At what times are Dundee lessons?

After school or in the evening on weekdays, or at weekends, at a UK time we settle in the free lesson. India is four and a half hours ahead of Dundee in summer and five and a half in winter.

### Is there a Modern Age Coders centre in Dundee?

No. We have no Dundee centre and no premises anywhere in the UK; every lesson is live online. A learner needs a computer with sound and a stable connection, and our phone number is Indian.

### How much do Dundee lessons cost?

The first lesson is free. After it, a group place is USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, and one-to-one lessons on the same pattern are USD 150 a month. Course, format and time are agreed before any charge.

### How are Dundee groups arranged?

By level, pace and aims rather than age or postcode, with fifteen to twenty learners at one stage. If no group suits the learner's week, we offer one-to-one lessons.

Explore Scotland and the UK

## Scottish cities and beyond

Up the coast, the [Aberdeen page](/best-coding-class-in-aberdeen) fits every place name in the city into a few kilobytes, and to the south [Edinburgh](/best-coding-class-in-edinburgh) works out why its summer nights never quite go dark. The [Scotland guide](/coding-and-ai-classes-in-scotland) covers the Curriculum for Excellence, with exam support on the [National 5](/national-5-computing-science-help) and [Higher Computing Science](/higher-computing-science-help) pages.

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20coding%20lesson%20for%20a%20learner%20in%20Dundee.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/best-coding-class-in-dundee*
