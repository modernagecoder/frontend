---
title: "AI and Python Academy, Rotterdam | Build Real AI"
description: "Rotterdam's port forecasts its ships 24 hours ahead. Learn to build forecasts and check them against what really happened, live online for ages 6 to 67."
canonical: https://learn.modernagecoders.com/ai-and-python-academy-rotterdam
source: src/pages/ai-and-python-academy-rotterdam.html
---
> Modern Age Coders teaches a live online AI and Python track to learners in Rotterdam aged six to sixty-seven. It starts with Python typed by hand, moves through data to forecasting and prediction models, and ends with agents, and it treats every forecast the same way: write it down before the event, then measure how wrong it was, separately for each lead time. The example throughout is local: the Port of Rotterdam Authority's AI tool that forecasts a day of ship movements, and the port's own frank account of its limits. Classes are taught in English to groups of five to ten at one level, or privately. The opening lesson is free; after it, group classes cost USD 100 a month and private tuition USD 150.

[Home](/) / [Courses](/courses) / [AI and Python Academy, Netherlands](/ai-and-python-academy-netherlands) / Rotterdam

Rotterdam · Live online · Ages 6 to 67

# AI and Python classes in Rotterdam, where forecasts get checked

Every day the Port of Rotterdam needs to know which ships will come in and go out, and when. Its Authority now has an AI tool for that: trained on ship positions, past port calls, basic navigation rules and the weather, it forecasts the traffic of the next 24 hours and advises the Harbour Master on planning the fairway. What makes the port's own account worth reading is its honesty. The tool is good at some things and struggles with others, departures in particular, and the port says it is still working to quantify what the forecasts actually gain. That is the most useful lesson in applied AI: a forecast is a claim about the future, and it is worth only what you can show about it afterwards. Rotterdam has a long history with that lesson; the economist who built the first national economic model taught here. This page teaches AI and Python, from a first program to forecasting models that are scored honestly, live online for learners in Rotterdam.

At a glance: Who: Rotterdam learners, 6 to 67; What: Python, data, forecasts, agents; Habit: Every prediction scored against the outcome; Format: Live online, never recorded; Group: Five to ten, or a private teacher; Hours: Afternoons, evenings, weekends; Language: English; Begin with: A free lesson. Rated 4.9 across 547 Google reviews.

## Three courses for Rotterdam learners who like to predict things

A game-maker's first course for a child, a data course for a teenager who wants to test predictions, and a full data science course for students and adults. Each card opens the course page with syllabus and timetable.

- [Scratch Coding for Kids](/courses/scratch-programming-complete-course): A child builds a harbour game in which boats arrive on a timer, then guesses when the next one will come and counts how often the guess was right.
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data): Real data in Python, a first forecast, and the step most beginners skip: comparing every prediction with what actually happened.
- [Data Science Course](/courses/data-science-complete-masterclass-college): Statistics, SQL, forecasting and machine learning for students and working adults, with evaluation built in from the first model.

## A port that forecasts its ships a day ahead, and says what it cannot yet do

Both documents below are primary: the Port of Rotterdam Authority's own digital report, and a research paper posted on arXiv that uses the port as its case. Neither is a sales brochure, and the first is notably candid.

In its **Digital Report 2025** the Port of Rotterdam Authority describes an AI tool for **fairway traffic planning**, built with its IT partner BIT. It quickly shows which vessels, incoming and outgoing, are expected over the **next 24 hours**. The model was trained with **AIS data**, the position signals ships broadcast, together with vessel visit data, basic restriction rules and weather information. It predicts the actual arrival and departure times of those vessels and gives the **Harbour Master** advice on planning the fairway.

The planning advice was shared in a pilot with two terminals, **APM Terminals Maasvlakte II** and **Rotterdam World Gateway**.

The report is just as clear about the limits. The tool is good at establishing the draught of every vessel in the port at any moment. It finds it hard to recognise reliable patterns, or to predict departure times, from data available through open sources such as **Vesselfinder**. And the results are not yet counted: gains can be achieved across the entire chain, says **Frank van Veen**, but we are now working on quantifying those gains based on data.

That last sentence is the lesson. A forecasting tool can be built, trained and put in front of a Harbour Master, and still need a second project to show, in numbers, how much better its forecasts are than what came before.

**Two Rotterdam forecasting systems, as their own documents describe them**

| System | What it predicts | What it learns from | What the document says about results |
|---|---|---|---|
| Fairway traffic planning tool (Port Authority, Digital Report 2025) | Arrival and departure times of vessels over the next 24 hours | AIS data, vessel visit data, restriction rules, weather | Gains are being quantified; departures from open data are hard |
| Time-slot decision support for container terminals (research paper, 2023) | Truck waiting times at terminal gates and the cost of schedules | Large volumes of historical data | Simulations with real-world data show significant gains possible |

Sources: [Port of Rotterdam Authority, Digital Report 2025, case study 2](https://publications.portofrotterdam.com/digital-report-2025/case-study-2); A. Nadi, M. Snelder, J.W.C. van Lint and L. Tavasszy, [A data-driven and multi-agent decision support system for time slot management at container terminals: a case study for the Port of Rotterdam](https://arxiv.org/abs/2311.15298) (arXiv, 26 November 2023). Read 15 September 2026. We have no connection with the Port Authority, BIT, the terminals or the authors.

## How a forecast earns trust: write it down, then measure it by lead time

The economist Jan Tinbergen, who taught mathematics and statistics at the Netherlands School of Economics in Rotterdam until 1973, built the first comprehensive national macroeconomic model, for the Netherlands, in 1936. In 1969 he shared the first Nobel Memorial Prize in Economic Sciences with Ragnar Frisch, for developing and applying dynamic models of economic processes. Models of that kind, and the port's, are judged the same way.

### Write it down first

A forecast only counts if it was recorded before the event. A learner's forecasting program saves every prediction with the time it was made, so it can never be quietly improved after the answer is known.

### Score it by lead time

A prediction made a day ahead and one made an hour ahead are different claims. Averaging them together hides the fact that errors almost always grow with the distance into the future. Each lead time gets its own score.

### Split what behaves differently

The port's report says departures are harder than arrivals when only open data is available. A good evaluation keeps them apart, because one easy category can make a whole model look better than it is.

**An invented example: five ships, predicted times scored against actual times, errors in minutes**

| Forecast | Ship errors (minutes) | Total | Mean absolute error |
|---|---|---|---|
| Arrival, 24 hours ahead | 90, 40, 150, 60, 120 | 460 | 92 minutes |
| Arrival, 6 hours ahead | 30, 15, 45, 20, 40 | 150 | 30 minutes |
| Arrival, 1 hour ahead | 8, 5, 12, 6, 9 | 40 | 8 minutes |
| Departure, 6 hours ahead | 70, 20, 110, 35, 90 | 325 | 65 minutes |

The mean absolute error is the plainest honest score: take how far off each prediction was, ignore whether it was early or late, and average. In the example it falls from 92 minutes a day ahead to 8 minutes an hour ahead. Reported as one number over all four rows, it would say little about any of them.

The departure row shows the second point. At the same six-hour lead time, the invented departures are more than twice as far off as the arrivals, 65 minutes against 30, which is the kind of gap the port's report describes in words.

None of this needs advanced mathematics. It needs discipline: keep the predictions, keep the outcomes, and compare them by category and lead time. Learners on our track do it for every forecasting model they build, from a child guessing boat arrivals in a game to an adult predicting demand at work.

It is also the fair way to judge an AI tool someone else is selling: ask for its errors by lead time, on data it was not trained on, and compare them with the simple forecast it replaces.

Tinbergen facts from the [encyclopaedia entry for Jan Tinbergen](https://en.wikipedia.org/wiki/Jan_Tinbergen), read 15 September 2026. The table is invented for teaching and describes no real ship or system: 460 divided by 5 is 92, 150 by 5 is 30, 40 by 5 is 8, and 325 by 5 is 65.

## From guessing the next boat to forecasting demand at work

Forecasting sounds like an adult subject, but the habit at its heart, guess first and check afterwards, is one a child can learn in a single lesson.

A child building a harbour game can add a simple guess: when will the next boat appear? Keeping score of the guesses, right or wrong, is a first lesson in evaluation, and a surprisingly exciting one for an eight-year-old.

A teenager with real data, bus times, weather or football results, builds a first forecasting model and learns to score it by lead time. The first time a model that looked brilliant turns out to be no better than yesterday's value, the lesson sticks for good.

Adults in Rotterdam often work where forecasts drive decisions, in logistics, energy, retail or the public sector. For them the track is practical: build a forecast, report its errors honestly, and know what questions to ask of a vendor's model.

For the city, see [coding classes in Rotterdam](/coding-classes-in-rotterdam) and [Rotterdam Centrum](/coding-classes-in-rotterdam-centrum); nearby, [Schiedam](/coding-classes-in-schiedam) and the province of [Zuid-Holland](/coding-classes-in-zuid-holland). The [national academy page](/ai-and-python-academy-netherlands) covers the whole country.

## From a first program to a forecast that is scored honestly

Each rung makes the next one possible. A learner cannot score a forecast without clean data to score it against, and cannot trust an agent that plans ahead without knowing how far ahead its predictions can be believed.

**The five rungs for a Rotterdam learner, with the forecasting habit added at each**

| Rung | Commonly | What the learner adds |
|---|---|---|
| 1. Python by hand | Groep 6 to 8, or any adult beginner | Programs that make a guess and record it |
| 2. Data | Brugklas to the third year | Real records with timestamps, cleaned and kept apart from the guesses |
| 3. Models | Havo 4 to vwo 6, students, adults | Forecasts scored by lead time against a simple baseline |
| 4. Agents | Upper school and beyond | Programs that plan using forecasts and know when not to trust them |
| 5. Publishing | At every stage | A repository with the forecasts, the outcomes and the scores side by side |

### Why the baseline comes first

Every forecasting model should be compared with the simplest possible guess, such as tomorrow will be like today. A model that cannot beat that baseline has not learned anything useful, however sophisticated it is. Learners meet the baseline on rung 3 and never build a model without one again.
Our wider order of subjects is laid out on the [coding roadmap](/coding-roadmap).

### Fitting the rungs around Rotterdam schooling

Rung 1 belongs in the last years of the basisschool, eased off around the doorstroomtoets. A pupil choosing a profile, particularly one weighing Economie en Maatschappij against the Nature profiles, can use rung 2 to find out how much they enjoy working with data.
Students and adults generally begin at rung 2 or 3, frequently in private lessons.

## Eleven live courses for Rotterdam learners, matched to ability

Sorted by stage of life. Each course has a page of its own with the timetable and fee, and the learner's actual starting point comes out of the free lesson.

### Children, groep 3 to 8

Games, first programs and first guesses

- [Scratch Coding for Kids](/courses/scratch-programming-complete-course): Block-based games for young learners, from moving sprites to timed levels where the player has to predict what comes next.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass): Typed Python for nine- to twelve-year-olds, with games, drawings and a first program that learns from past examples to guess the next one.
- [App Making for Kids](/courses/block-coding-app-development-masterclass): Children aged eight to twelve build real apps with blocks, such as a timer or a tracker that records what happened.

### Teenagers, havo and vwo

Data, forecasts and models, always checked

- [Data Science for Teens](/courses/data-science-course-for-teens-python-data): Working with real records in Python, from cleaning to a first forecast scored against what actually happened.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens): From statistics to neural networks, with every model tested on data it never saw and compared with a simple baseline.
- [Python for Teens](/courses/python-complete-masterclass-teens): The two-year route through Python, for teenagers who want to build their own forecasting tools from scratch.
- [MySQL for Teens](/courses/mysql-mastery-for-teens): Storing and querying data with SQL, so that every prediction and every outcome can be kept and compared.

### Students and working adults

Forecasting and data science for decisions that matter

- [Data Science Course](/courses/data-science-complete-masterclass-college): Statistics, SQL, feature engineering, modelling and evaluation, aimed at the kind of portfolio an employer can check.
- [Data Analysis Course](/courses/data-analysis-mastery-course-college): Excel, SQL, Python and business intelligence for analysts whose reports and forecasts shape plans.
- [Maths for Data Science](/courses/data-analytics-mathematics-masterclass): The statistics and mathematics behind forecasting and machine learning, explained through code rather than proofs.
- [Python and AI Automation](/courses/python-ai-automation-masterclass-college): Automating the collection of data and the running of forecasts, so that the scoring happens every time without anyone remembering to do it.

## Five in the afternoon in Rotterdam, evening in India

Rotterdam's clocks go forward in March and back in October; India's never move. So a class at five in the afternoon in Rotterdam starts at half past eight in the evening in India in summer and half past nine in winter. Late afternoons and weekends suit both sides best, weekday evenings are possible by arrangement, and the regular time is set during the free lesson.

- **Late afternoon** Rotterdam time, after school. The usual slot for children and the lower years of secondary school.
- **Evening** Rotterdam time, arranged with the teacher. For senior pupils, students and adults after work.
- **Weekend** Saturday or Sunday, Rotterdam time. Favoured by working adults and families with packed weekdays.

- **An opening lesson with a task** The learner is given something real to solve while the teacher watches the approach. That reveals the right starting rung better than any quiz.
- **Five to ten at one level** Learners from several countries who are at the same stage, so a quick learner from Rotterdam is challenged and a newcomer keeps up.
- **Private classes available** For shift workers, students with shifting timetables, anyone with a specific target, and the Copilot Studio courses, which are only taught privately.
- **Live screens** The teacher watches the code appear and steps in at the moment of confusion, not a week later over homework.
- **English teaching, Dutch school words** Lessons are in English; groep, brugklas, havo and vwo are used in Dutch, as Rotterdam families use them.
- **Predictions kept** Everything goes into the learner's own GitHub repository, including every forecast made and how far off it turned out to be.

## What the classes cost

Charged monthly in US dollars at the rate used for every country outside India. There is no Rotterdam supplement, no joining fee and no year-long contract. Copilot Studio courses run only as private lessons and are priced accordingly.

- Free first class: USD 0. A proper lesson on a real task. Settles the starting rung. No payment details asked.
- Group batch: USD 100 a month. Five to ten learners at the same level. One live teacher every week. Work reviewed weekly. A certificate on completion.
- One to one: USD 150 a month. One learner with one teacher. Goal-led pace and content. The format for Copilot Studio.

## What Rotterdam families, students and professionals ask

### Does the port really use AI to predict ships?

Its own Digital Report 2025 describes an AI tool for fairway traffic planning that forecasts incoming and outgoing vessels over the next 24 hours, trained on AIS data, vessel visit data, restriction rules and weather, and advises the Harbour Master. The report also says the gains are still being quantified. We have no connection with the port.

### What is a lead time?

How far ahead a forecast is made. A prediction a day before a ship arrives has a longer lead time than one an hour before, and it is usually less accurate. Scoring each lead time separately is the habit this page teaches.

### What is the mean absolute error?

The average distance between predictions and what actually happened, ignoring whether each prediction was early or late. In the invented example on this page it is 92 minutes a day ahead and 8 minutes an hour ahead.

### Who was Jan Tinbergen?

A Dutch economist who taught mathematics and statistics at the Netherlands School of Economics in Rotterdam until 1973. He built the first comprehensive national macroeconomic model, for the Netherlands, in 1936, and shared the first Nobel Memorial Prize in Economic Sciences with Ragnar Frisch in 1969.

### Is my child too young for forecasting?

No. A child can guess when the next boat will appear in a game and keep score. The same habit grows, over the rungs, into proper forecasting models.

### I work in logistics. Where should I start?

Usually the data analysis or data science course, depending on your background, often one to one. Both include scoring forecasts properly and comparing them with a simple baseline.

### Are the lessons in Dutch?

No, in English, which is also the language of the tools and documentation. Dutch school terms are kept as families use them.

### How much does it cost?

USD 100 a month for a place in a group and USD 150 a month for private classes, charged in US dollars with no joining fee or annual contract. The first lesson is free of charge.

### Where do the teachers teach from?

From India, live over video. A class at five in the afternoon in Rotterdam is half past eight in the evening for the teacher in summer and half past nine in winter, so late afternoons and weekends work best.

### What happens after I fill in the form?

We call back at a Dutch hour to arrange the free lesson. There is no charge and nothing is booked until after that lesson, when the family decides whether to go on.

## Other pages for Rotterdam and the region

- [Coding classes in Rotterdam](/coding-classes-in-rotterdam): Programming for every age across the city and its eight gebieden.
- [Coding classes in Schiedam](/coding-classes-in-schiedam): The neighbouring town to the west, with a page of its own.
- [Coding classes in Zuid-Holland](/coding-classes-in-zuid-holland): All the municipalities of the province, from the coast to the rivers.
- [AI and Python Academy, Netherlands](/ai-and-python-academy-netherlands): The national picture: informatica in Dutch schools and the country's new AI factory.
- [AI and Python Academy, Eindhoven](/ai-and-python-academy-eindhoven): AI that has to work in machines, from soccer robots to drones.
- [AI and Python Academy, Utrecht](/ai-and-python-academy-utrecht): Four questions to ask of any chatbot, and a small ELIZA to build.

## Contact

Book the free first class at [https://learn.modernagecoders.com/ai-and-python-academy-rotterdam](https://learn.modernagecoders.com/ai-and-python-academy-rotterdam#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email contact@modernagecoders.com.
