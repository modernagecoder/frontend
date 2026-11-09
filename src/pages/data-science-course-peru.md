---
title: "Data Science Course in Peru: Live Online, in English"
description: "Data science course for Peru, live online in English: Python, statistics and machine learning on real Peruvian open data, for adults and teens 14+, any hour."
canonical: https://learn.modernagecoders.com/data-science-course-peru
source: src/pages/data-science-course-peru.html
---
> Modern Age Coders teaches data science to learners in Peru live online and in English: adults and university students from 18 start with Python, then learn pandas, statistics, visualisation and machine learning, and teenagers from 14 who know some Python have their own course. We work on real open data, including Peruvian datasets, and teach learners to question a dataset before trusting a result. A mentor is on video in every class, with a group of fifteen to twenty or one to one, at any day and hour you choose.

[Home](/) / [Courses](/courses) / [Coding and AI classes in Peru](/coding-and-ai-classes-in-peru) / Data science course

Peru · Data science · Live online, in English · 14 to adult

# Data science course in Peru

Most data science courses start with a clean file and a model. Real work starts earlier, with a question nobody likes: can this data answer what we are asking? This page explains what a data science course should teach, where Peruvian open data comes from, and walks through an analysis of eight years of hourly weather near Huancayo in which the most interesting result turns out to be a warning.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; For: Adults and university students; teens from 14 with some Python; Tools: Python, pandas, charts, statistics, machine learning; Data: Real open datasets, including Peruvian ones; Group size: Fifteen to twenty, or one to one; Peru time: Any day and hour you choose; First class: Free, no card. Rated 4.9 across 547 Google reviews.

## Three data science courses for learners in Peru

A complete route for adults, a shorter route for teenagers, and an analysis-first route for people whose work lives in spreadsheets.

- [Data science: Python, ML and deep learning](/courses/data-science-complete-masterclass-college): For complete beginners from 18, 10 to 12 months. Python first, then data handling, statistics, machine learning and a capstone on real data.
- [Data science for teens](/courses/data-science-course-for-teens-python-data): Ages 14 to 18 who know basic Python, six months. Charts, real datasets and first models, built and explained by the student.
- [Data analysis: Excel, SQL, Python and BI](/courses/data-analysis-mastery-course-college): For beginners from 18, 8 to 10 months. The route for analysts: from spreadsheets to SQL, Python and dashboards.

## What does a data scientist actually do all day?

Less modelling than people expect, and much more checking. A data science course that skips the checking produces people who can run a model and cannot tell when its answer is nonsense.

### Ask

Turn a vague request, "are frosts getting worse?", into a question the data could answer: which months, which hours, which threshold, compared with what.

### Inspect

Open the file and look before computing. Blanks, units, duplicates, a column whose meaning changed halfway through. This step takes the longest and is taught the least.

### Analyse

Summaries, charts, statistical tests and, where they earn their place, models. Each result written in a sentence a manager could repeat without misquoting it.

### What we teach, in order

Python as a language first, so learners can write their own checks instead of hunting for a library function. Then pandas for tables, charts with matplotlib, descriptive statistics, probability, sampling and hypothesis tests, and finally machine learning with scikit-learn and an introduction to deep learning.

Running through all of it is the habit this page's lesson is about: looking at the data from more than one side before believing a number.

### The maths behind it

Data science needs school algebra, comfort with percentages and averages, and then statistics and some linear algebra taught as needed. Peruvian school maths already includes a competency on managing data and uncertainty, "gestión de datos e incertidumbre", in MINEDU's national curriculum, so many learners have met the ideas without the code.

If your maths is rusty, we have a separate course on the mathematics of data science, listed further down the page.

Our Spanish page, [curso de data science en inglés](/curso-de-data-science-en-ingles-peru), starts from the spreadsheet, uses a university enrolment dataset from Huánuco and teaches how a fake zero distorts an average. Here we take a weather dataset and a different trap.

## Where can you find open data about Peru?

On the Plataforma Nacional de Datos Abiertos, datosabiertos.gob.pe, where ministries, regional governments, municipalities, universities and institutes publish datasets, most of them under an open licence. Our lesson uses one from the Instituto Geofísico del Perú.

**The dataset used in this page's analysis, as its publisher describes it**

| Field | What the dataset page says |
|---|---|
| Publisher | Instituto Geofísico del Perú (IGP) |
| Station | Automatic weather station at the Huancayo Observatory, Huayao, Junín |
| Position | 12.0401 south, 75.32049 west, 3,329 metres above sea level |
| Frequency | Hourly |
| Period | 1 January 2018, 00:00, to 31 December 2025, 23:00 |
| Temperature (TT) | Air between 1.25 and 2 metres above the ground, in degrees Celsius |
| Other columns | Humidity (%), rain (mm), pressure (hPa), wind speed (m/s) and direction (degrees) |
| Released and modified | Released 30 May 2025; last modified 29 May 2026 |
| Licence | Open Data Commons Attribution License (ODC-By) |

Source: Plataforma Nacional de Datos Abiertos, dataset "Estación Meteorológica Automática para variables atmosféricas de LAMAR, Junín, Perú" by the IGP, read and downloaded on 9 November 2026. The file has 70,128 rows of data, one for every hour of the eight years; counts are ours.

### What ODC-By asks of you

The Open Data Commons Attribution License lets anyone copy, analyse and publish work built on the data, provided the source is credited. That is why every chart in our lesson names the IGP and the licence, and why our learners are taught to write the credit line before the first chart, not after.

Not every Peruvian dataset uses the same licence, so checking it is the first step of any project, alongside reading the data dictionary.

### Why this station

The observatory sits in the Mantaro valley, outside the city of Huancayo, which had 456,250 people at the 2017 census, in the department of Junín, counted at 1,422,780 in the 2025 census. Cold mornings in the dry months are part of life in the valley.

An hourly temperature record is also a perfect teaching file: easy to understand, big enough to need code, and, as we found, complicated in a way nobody warns you about.

## Did frost really arrive in the Mantaro valley in 2021?

A simple question for the IGP file: how many nights a year did the temperature drop below zero? The first answer is dramatic. The second program shows why a data scientist should not publish it.

### Version 1: count frost nights

For every day, the program finds the lowest hourly temperature, then counts the days whose lowest reading is below 0 °C, year by year. Blank readings are skipped, which is the right thing to do with a blank.

The output shows no frost at all in 2018, 2019 and 2020, then between 26 and 48 frost nights in every year from 2021. Read naively, frost appeared out of nowhere.

### Why a careful analyst stops here

Weather does not usually switch on like that. A station at more than 3,300 metres with no sub-zero hour in three whole years, followed by dozens of frost nights every year after, is a pattern that deserves suspicion before it deserves a headline.

So the mentor asks the class one question: if the cold had truly changed, what else in the data would have changed with it?

**Version 1: frost nights per year** (Python)
```python
import csv

FILE = "IGP_EstacionEMA_data_2018_2025.csv"

coldest = {}                                  # (year, month, day) -> lowest TT
with open(FILE, encoding="utf-8") as f:
    for row in csv.DictReader(f):
        if row["TT"] == "":
            continue
        day = (row["year"], row["month"], row["day"])
        coldest[day] = min(coldest.get(day, 99.0), float(row["TT"]))

frost = {}
for (year, month, day), low in coldest.items():
    if low < 0:
        frost[year] = frost.get(year, 0) + 1

for year in range(2018, 2026):
    print(year, "frost nights:", frost.get(str(year), 0))
```
Run from the folder holding the downloaded file, it prints 2018 frost nights: 0, 2019 frost nights: 0, 2020 frost nights: 0, then 2021 frost nights: 29, 2022 frost nights: 40, 2023 frost nights: 48, 2024 frost nights: 26 and 2025 frost nights: 29.

If winters really got colder, the number of cold hours would rise too, not only the hours below zero. Version 2 counts, for June and July of each year, every hour under 3 °C, and how many of those were under 0 °C. It also finds the first sub-zero reading in the whole file and counts the blanks.

**Version 2: look at the whole cold end, not just below zero** (Python)
```python
import csv

FILE = "IGP_EstacionEMA_data_2018_2025.csv"

cold = {}       # year -> hours under 3 °C in June and July
below = {}      # year -> of those, hours under 0 °C
blank = 0
first_negative = None
with open(FILE, encoding="utf-8") as f:
    for row in csv.DictReader(f):
        if row["TT"] == "":
            blank += 1
            continue
        t = float(row["TT"])
        if t < 0 and first_negative is None:
            first_negative = (row["year"], row["month"], row["day"], row["hour"])
        if row["month"] in ("6", "7") and t < 3:
            cold[row["year"]] = cold.get(row["year"], 0) + 1
            if t < 0:
                below[row["year"]] = below.get(row["year"], 0) + 1

print("blank TT readings:", blank)
print("first reading below 0:", first_negative)
for year in range(2018, 2026):
    y = str(year)
    print(y, "hours under 3 C:", cold.get(y, 0), "of which under 0 C:", below.get(y, 0))
```
It prints blank TT readings: 700 and first reading below 0: ('2021', '5', '27', '4'), then one line per year, from 2018 hours under 3 C: 243 of which under 0 C: 0 to 2025 hours under 3 C: 276 of which under 0 C: 126.

**June and July hours under 3 °C, and those under 0 °C, IGP Huayao station (our counts)**

| Year | Hours under 3 °C | Of which under 0 °C |
|---|---|---|
| 2018 | 243 | 0 |
| 2019 | 270 | 0 |
| 2020 | 222 | 0 |
| 2021 | 226 | 75 |
| 2022 | 306 | 121 |
| 2023 | 349 | 150 |
| 2024 | 259 | 100 |
| 2025 | 276 | 126 |

Data: Instituto Geofísico del Perú, Estación Meteorológica Automática, Huancayo Observatory, Huayao, via the Plataforma Nacional de Datos Abiertos, Open Data Commons Attribution License (ODC-By). Counts are our own, computed on 9 November 2026 with the programs above.

The cold hours do not jump in 2021. They wander between 222 and 349 a season across all eight years. What jumps is the share of them below zero: none for three years, then a large share every year. In the earlier years, the coldest July reading never went lower than about 0.2 °C, and the first negative value in the whole file appears on 27 May 2021. That pattern fits a change in how temperatures were recorded or processed at least as well as it fits a change in the weather.

We have not asked the IGP, and this page does not claim to know the cause. That is the point of the lesson. The honest report says: "In this file, sub-zero readings begin in May 2021; the number of cold hours did not change in the same way; before comparing frost across that date, confirm with the publisher whether the sensor or processing changed." A data scientist who writes that sentence has done more useful work than one who fits a trend line to the first output.

1. **Look at the shape.** Plot a histogram of July temperatures for 2019 and for 2022 on the same axes. Where do the two shapes differ?
2. **Test one idea.** If negative values had lost their minus sign before 2021, what would you expect to see between 0 and 3 °C in 2018 to 2020? Does the table above agree?
3. **Report the blanks.** 700 hourly readings are blank. Which months do they fall in, and could they affect any count on this page?
4. **Write to the publisher.** Draft a short, polite email to a data provider asking about a suspected change, with the evidence in three lines.

## How long does it take to learn data science?

For a beginner with school maths, about a year to work confidently on real data with a mentor's review. Here is the route we usually suggest.

**A suggested data science route (our plan)**

| Stage | Focus | Evidence at the end |
|---|---|---|
| First | Python as a language | Small programs that read a CSV file without pandas, like the ones above |
| Second | pandas and charts | A cleaned dataset and five charts, each with a one-sentence finding |
| Third | Statistics and probability | A comparison with a stated uncertainty, not just two averages |
| Fourth | Machine learning | A model, its baseline and an honest test on unseen data |
| Final | A capstone on open data | A report a non-specialist can read, with sources and licence |

Our plan, adjusted to each learner. Our main adult course runs 10 to 12 months from zero; the teen course is six months for learners who already know basic Python. We make no job or salary promises.

### For teenagers

Teenagers from 14 who already write basic Python can take the teen data science course: real datasets, charts and first models. Younger learners or those new to code start with Python first.

For a teenager or adult who has never coded, the [Python course page, in Spanish](/curso-de-python-en-ingles-peru), explains how Python starts from zero.

### For engineering and science students

University students in Peru often meet data in lab courses and numerical methods before they meet it in a data science course. If that is you, our page on [Python for engineering students](/python-para-estudiantes-de-ingenieria-peru) covers that path.

From there, the step to data science is mostly statistics and judgement, which is where we spend the most class time.

## Are the classes in Spanish?

No. All our classes are live, online and given in English, by mentors based in India who match their pace to the learner.

### Learning data science in English

Mentors speak calmly, define each new term the first time it appears and check understanding before moving on. A learner who is unsure can ask again, in any words they have, and the explanation changes shape until it lands.

The libraries are English: pandas, NumPy, scikit-learn and their documentation, error messages and forums. So are most research papers and data dictionaries outside Peru.

### English in Peru, measured

EF's English Proficiency Index 2025 scores Huancayo at 499, in EF's low band, and Lima at 555, in its high band. The gap between cities is real.

That is why the free first class matters: the mentor checks whether English-taught data science will be comfortable for you now, or whether you would gain more by starting with our shorter courses first.

## When are classes in Peru time?

Whenever you book them. Peru and India keep fixed clocks, so a weekly slot never moves.

**Peru time with the matching India time (illustrations, not a schedule)**

| Peru time | India time | Suits |
|---|---|---|
| 05:30 | 16:00 | Early risers |
| 10:30 | 21:00 | Students free in the morning |
| 17:30 | 04:00, next day | After university |
| 21:00 | 07:30, next day | After a full working day |

America/Lima stays at UTC minus 5 and has had no summer time since 1994 (tz database); Asia/Kolkata stays at UTC plus 5:30. India is 10 hours 30 minutes ahead throughout the year.

You pick in your own time zone when you book, and the mentor sees the converted time. Huancayo, Lima and the rest of Peru share one time zone, so the same slot works wherever you are in the country.

## How do you know you are thinking like a data scientist?

Our own milestones. The mentor checks each with work you explain, not with a quiz.

**Data science milestones (ours)**

| Milestone | You can | The mentor checks |
|---|---|---|
| 1. Read | Open an unknown file and describe its columns, units and gaps | A short data note before any analysis |
| 2. Count | Write correct counts and summaries in plain Python | Numbers that match a second method |
| 3. Doubt | Spot a result that is too clean or too sudden | A list of checks run before reporting |
| 4. Compare | State a difference with its uncertainty | A confidence interval or a test, explained |
| 5. Model | Fit a model and beat a simple baseline honestly | Results on data the model never saw |
| 6. Report | Write findings that survive a sceptical reader | A two-page report with sources and licence |

### For learners

Milestone 3 is the Huancayo lesson. It is the one that separates analysts people trust from analysts people double-check.
If your result is surprising, the first suspect is the data, the second is your code, and only the third is the world.

### For employers

Every milestone leaves a notebook or report in the learner's portfolio, with data sources credited.
Our certificate of completion is our own; it is not a Peruvian university degree.

## Nine more courses for working with data

Foundations and maths for adults, routes for teenagers, and practical options for professionals. All live and in English.

### Foundations and maths

18 and over

- [Python masterclass](/courses/python-programming-masterclass-zero-to-advanced-college): Python from zero before any data library.
- [Statistics and probability](/courses/statistics-probability-maths-course): Six months, no programming needed.
- [Maths for data science](/courses/data-analytics-mathematics-masterclass): Statistics, linear algebra and the maths of ML.

### Teenagers

Ages 13 to 18

- [Python for teens](/courses/python-complete-masterclass-teens): The way in before the teen data science course.
- [Orange data mining for teens](/courses/orange-data-mining-visual-machine-learning-course-for-teens): Machine learning ideas without code, 24 classes.
- [AI and ML for teens](/courses/ai-ml-masterclass-teens): From school maths to working models.

### Professionals

Working adults

- [Data and AI for non-programmers](/courses/data-and-ai-analytics-for-non-programmers-course): Excel, Sheets and Power BI, four months.
- [Orange data mining](/courses/orange-data-mining-machine-learning-course-for-college-students): Applied machine learning, visually, in 24 classes.
- [Python and AI automation](/courses/python-ai-automation-masterclass-college): Automate the reports you build by hand.

## How live data science classes run

Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.

- **Morning** A Peru morning is the Indian evening, an easy hour to think about data.
- **Night** Late Peru evenings are Indian mornings, and our mentors take those classes too.
- **1-on-1** Your own pace, data and slot, with one mentor.

- **Real files** Open datasets with real gaps, never toy tables only.
- **You write the code** The mentor questions; you type and explain.
- **One mentor** Who knows your projects and your blind spots.
- **English, explained** New terms defined, ideas repeated until clear.
- **Credit the source** Every chart names its data and licence.
- **Group or private** Fifteen to twenty learners, or one to one.

## Fees for the data science course

Pay one month at a time. The fee is in US dollars and your card is charged in dollars; the switch to soles happens at your bank, at the bank's rate, so the statement can differ slightly from the price.

- Free first class: Free. A free first class. A short look at a real dataset with the mentor. No card needed.
- Group batch: USD 100 a month. Fifteen to twenty learners at a similar level. One mentor throughout. Two live classes a week. Monthly, stop any time.
- One to one: USD 150 a month. One learner, one mentor. Your own data or field. Days and times you choose.

## Data science course in Peru: questions and answers

### Are the classes in Spanish?

No. Our data science classes are given live, online and only in English. Mentors in India define each term, keep a calm pace and adapt to how you speak; pandas, scikit-learn and their documentation are English too.

### Can I learn data science from zero?

Yes. The adult course starts with Python itself, assuming no programming. Some school maths helps; statistics is taught inside the course.

### Is there a data science course for teenagers in Peru?

Yes, for ages 14 to 18 who already know basic Python, over six months. Teens who are new to code start with our Python course for teens first.

### Do you use Peruvian data?

Yes, alongside international datasets. This page's lesson uses the Instituto Geofísico del Perú's hourly weather data from Huayao, published on datosabiertos.gob.pe under the ODC-By licence.

### What does the ODC-By licence require?

That you credit the source when you share work built on the data. We teach learners to name the publisher, the dataset and the licence under every chart.

### How much maths do I need?

School algebra, percentages and averages to begin. Statistics, probability and the linear algebra used in machine learning are taught as the course needs them.

### What time are classes?

Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India runs 10 hours 30 minutes ahead of Peru, so a 21:00 class in Peru is 07:30 the next morning for the mentor.

### How long does it take?

Our full adult course runs 10 to 12 months from zero; the teen course is six months. Progress depends on practice between classes, and we promise no job.

### How much does it cost?

The fee section shows the monthly price in US dollars, which is what your card pays; your bank turns it into soles. Visitors in India see rupees. The first class is free and asks for no card.

### Will I get a certificate?

Yes, our own certificate of completion after the final exam. It is not a Peruvian university qualification; your analyses and reports are the stronger evidence.

### Are you connected with the IGP?

No. We use the IGP's published open data under its licence and credit it; we have no connection with the IGP or any public body, and our conclusions are our own.

## Related pages

- [Data science en inglés](/curso-de-data-science-en-ingles-peru): The Spanish page, with UNHEVAL enrolment data and a lesson on fake zeros.
- [Curso de Python en inglés](/curso-de-python-en-ingles-peru): Python from zero, explained in Spanish.
- [Python para ingeniería](/python-para-estudiantes-de-ingenieria-peru): Numerical methods and lab data for engineering students.
- [Coding and AI classes in Peru](/coding-and-ai-classes-in-peru): Our full list of Peru pages.
- [Data science course](/data-science-course): The course overview for every country.
- [How we teach](/how-we-teach): What a live class looks like.

## Contact

Book the free first class at [https://learn.modernagecoders.com/data-science-course-peru](https://learn.modernagecoders.com/data-science-course-peru#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
