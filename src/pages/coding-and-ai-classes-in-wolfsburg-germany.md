---
title: "Coding and AI Classes in Wolfsburg: Live Online in English"
description: "Coding and AI classes in Wolfsburg for kids, teens and adults, live online in English: Lower Saxony Informatik, the BWKI and a Wolfsburg climate model project."
canonical: https://learn.modernagecoders.com/coding-and-ai-classes-in-wolfsburg-germany
source: src/pages/coding-and-ai-classes-in-wolfsburg-germany.html
---
> Coding and AI classes for Wolfsburg at Modern Age Coders are taught live online, in English, to learners of every age: children from 6 build Scratch games and then type Python, teenagers learn data and train machine-learning models they test honestly, and adults use Python and AI at work. Each learner has one mentor who matches their pace and accent, in a class of fifteen to twenty or privately.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / Wolfsburg, all ages

Wolfsburg · Coding and AI · Learners from 6 to adult

# Coding and AI classes in Wolfsburg

Machine learning sounds mysterious until you have built one model yourself. The simplest is a straight line that a computer learns from data, and our Wolfsburg learners build exactly that on forty years of their own city's weather records. On this page: why we teach coding before AI, what Lower Saxony schools teach in Informatik, a national AI contest for pupils, how live classes in English work, and the moment the model meets something it could never have learned.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Learners: Children, teenagers, adults; Children: Scratch, then Python; Teenagers: Data and machine learning; Adults: Python for work, AI with care; Format: Class of 15 to 20, or private; Start: A free first class. Rated 4.9 across 547 Google reviews.

## Which coding and AI course should a Wolfsburg learner start with?

A first course for each age. The free trial confirms the choice.

- [Coding for Kids](/courses/kids-coding-blocks-masterclass): Ages 6 to 12, in age groups. Scratch games and stories first, then apps, with a first idea of how computers learn.
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data): Ages 13 to 18. Python on real files such as the Wolfsburg weather record, charts that answer questions, and first models.
- [Python from Zero to Advanced](/courses/python-programming-masterclass-zero-to-advanced-college): Adults. Python from the first line, then files, automation and calling AI services from your own code.

## Why learn coding before using AI tools?

Because a person who has built a small model can judge a big one. Our classes teach the ideas inside AI by building them in Python, at a level that fits each age.

### What learners build, by age

Children of 6 to 8 give exact instructions in Scratch and discover that computers do precisely what they are told. From about 9 they type Python and write rules that decide things, the seed of every AI system.

Teenagers train real models: a line, a threshold, a nearest neighbour. Adults go further into the tools of their jobs, but start with the same small models so they know what is happening underneath.

### Why age rules matter

The big AI chat tools set minimum ages in their terms. OpenAI's floor is 13, and a parent must agree for anyone under 18; Gemini is 16 and over in Germany; Claude is limited to adults of 18 and over. Our classes for children never ask them to open such accounts.

That is no loss. A twelve year old who has trained a model on real data understands what an AI answer is, and when to doubt it, better than one who has only typed prompts.

German schools are moving the same way. The Kultusministerkonferenz added AI-related competences in 2026 to its framework "Bildung in der digitalen Welt", which dates from 2016, two years after it issued guidance to school authorities on handling AI (2024). Our classes work alongside that and do not replace any school subject.

## Can a computer learn a warming trend from Wolfsburg weather data?

It can learn a line, and the line beats guessing. But the most important finding is in a file most people never open. Every daily reading of the DWD station Wolfsburg (Südwest) is open data, licensed CC BY 4.0.

### The data

Station 05676, Wolfsburg (Südwest), has daily climate data from 1 April 1981 to 2 January 2024: 15,597 days, each with a mean, a highest and a lowest temperature. We downloaded the file on 3 November 2026.

In class we use a small file, wolfsburg_daily.csv, with the date, the day's mean temperature and its maximum. Missing readings show up in two ways: as the value -999, or as a date that is simply not in the file.

### The plan

First, turn days into yearly averages, keeping only complete years. Second, learn a straight line from the years 1982 to 2002. Third, test it on 2003 to 2023, years the line has never seen, against the plainest possible guess: every year will be like the old average.

Learning a line from points is called least-squares regression. It is the first model in almost every machine-learning course, and it fits in ten lines of Python.

**Step 1: yearly averages from complete years** (Python)
```python
import csv

temps = {}
with open("wolfsburg_daily.csv", encoding="utf-8") as f:
    for row in csv.DictReader(f):
        if row["mean_temp"] != "-999":
            year = int(row["date"][:4])
            temps.setdefault(year, []).append(float(row["mean_temp"]))

yearly = {}
for year, values in temps.items():
    if len(values) >= 365:
        yearly[year] = sum(values) / len(values)

print("Complete years:", len(yearly), " left out:", sorted(set(temps) - set(yearly)))
```
It prints: Complete years: 41 left out: [1981, 2019, 2024].

Three years drop out. 1981 starts in April and 2024 has a single day, which makes sense. But why 2019? The station's own metadata answers it: the daily means are missing from 3 to 12 June 2019 and again from 14 to 26 June 2019. A year without most of June would look colder than it was, so leaving it out is the honest choice.

**Step 2: learn a line, then test it on later years** (Python)
```python
train = [(y, t) for y, t in yearly.items() if y <= 2002]
test = [(y, t) for y, t in yearly.items() if y > 2002]

n = len(train)
mean_year = sum(y for y, t in train) / n
mean_temp = sum(t for y, t in train) / n
slope = sum((y - mean_year) * (t - mean_temp) for y, t in train) / sum((y - mean_year) ** 2 for y, t in train)

def line(year):
    return mean_temp + slope * (year - mean_year)

flat_error = sum(abs(t - mean_temp) for y, t in test) / len(test)
line_error = sum(abs(t - line(y)) for y, t in test) / len(test)
print("Learned slope:", round(slope * 10, 2), "degrees per decade")
print("Flat average, error on later years:", round(flat_error, 2))
print("Straight line, error on later years:", round(line_error, 2))
```
Run after Step 1, it prints: Learned slope: 0.38 degrees per decade, Flat average, error on later years: 0.85 and Straight line, error on later years: 0.48.

The model learned that, from 1982 to 2002, Wolfsburg's yearly mean rose by about 0.38 degrees per decade. On the twenty later years it never saw, the line is off by 0.48 degrees on average, while the flat old average is off by 0.85. A learned model beating a fixed guess on unseen data is the basic test every AI system has to pass.

**Step 3: where the line and the station disagree** (Python)
```python
for year in [2010, 2018, 2023]:
    print(year, "line says", round(line(year), 2), "station measured", round(yearly[year], 2))
```
Run after Steps 1 and 2, it prints: 2010 line says 10.33 station measured 8.57, 2018 line says 10.63 station measured 11.21 and 2023 line says 10.82 station measured 11.18.

Now the twist. The station's geography file shows that it has not always stood in the same place. Since 1 November 1990 it was at 70 metres; from 1 September 2010 it stands at 81.5 metres, at a new position. The model knows nothing about that. It sees one column of numbers called "Wolfsburg" and assumes they all mean the same thing. Whether the move changed the readings, and by how much, cannot be learned from this file alone. A careful data scientist writes that down next to every chart.

**The station's recorded positions while our data was collected (DWD metadata)**

| From | Height, m | Latitude, longitude |
|---|---|---|
| 15 August 1965 | 76 | 52.4175, 10.7200 |
| 1 November 1990 | 70 | 52.4159, 10.6919 |
| 1 September 2010 | 81.5 | 52.3962, 10.6892 |

Data: Deutscher Wetterdienst, Climate Data Center, daily climate data and station metadata, station 05676 Wolfsburg (Südwest), licence CC BY 4.0, downloaded 3 November 2026. The yearly means, the line, its slope and its errors are our own calculations. We print no forecast beyond 2023: a line learned from the past is not a promise about the future.

1. **Ages 6 to 9, no screen.** Measure a plant's height every day for a week, draw the dots, and lay a ruler through them. Where does the ruler say it will be on day 10? Then measure on day 10.
2. **Ages 10 to 12, Python.** Run Step 1 and print the warmest and coldest complete year. Find 2010 and guess why it might stand out, then check the station table.
3. **Teenagers.** Fit the line on 1991 to 2009 only, the years at the middle site, and compare its slope with ours. What does the difference tell you, and what can it not tell you?
4. **Adults.** Replace the yearly mean with the yearly count of days above 25 degrees, using the max_temp column. Fit and test the same way, and write one sentence a manager could act on.

## When do Wolfsburg pupils take Informatik at school?

Later than in Länder such as NRW, where it starts in grade 5. Lower Saxony made Informatik compulsory in grades 9 and 10, and few pupils carry it into the Oberstufe.

**Informatik in Lower Saxony according to the Informatik-Monitor 2026/27**

| Point | What the Monitor records |
|---|---|
| Compulsory subject | Informatik in grades 9 and 10 at all general school types |
| Since when | The 2024/25 school year |
| Earlier grades | Electives possible, e.g. two hours a week from grade 6 at Haupt-, Real- and Oberschule |
| Oberstufe | Roughly one pupil in twelve takes Informatik, as in Baden-Württemberg and Bremen |

Source: Gesellschaft für Informatik, Informatik-Monitor 2026/27, Niedersachsen page and national overview, read on 2 November 2026: "seit dem Schuljahr 2024/25 das Pflichtfach Informatik in den Jahrgangsstufen 9 und 10".

For a Wolfsburg child, that means primary school and grades 5 to 8 pass before Informatik is on every timetable; whether an elective exists earlier depends on the school. Children who start coding at 8 or 10 arrive in grade 9 already able to read and write simple programs. For teenagers already in grade 9 or 10, our classes add depth to the compulsory course. Either way we teach alongside school, and the school course is the one that is graded.

## Is there an AI competition Wolfsburg pupils can enter?

Yes, the Bundeswettbewerb Künstliche Intelligenz, a national contest for pupils who build their own machine-learning projects.

### What the BWKI asks for

The contest is run by the Tübingen AI Center and is open to pupils in Sekundarstufe I and II. Teams submit a written documentation, runnable code and a short video pitch, and projects may be submitted in German or in English.

In 2026 the project deadline was 20 September 2026 and the final in Tübingen takes place on 13 November 2026.

### How our classes connect

A BWKI project needs exactly what the Wolfsburg model above practises: a question, real data, a model, a fair test on unseen data and an honest write-up of its limits.

We never write or polish a pupil's competition work. We teach the methods with our own projects, and the pupil builds their own. We are not connected with the BWKI or the Tübingen AI Center.

## What time are live classes in Wolfsburg?

An afternoon in Wolfsburg is an evening in India, so the timetable works for both. Holidays in Lower Saxony do not interrupt lessons unless you choose.

**Example times in Wolfsburg with the time in India**

| Wolfsburg | India, winter until 28 March 2027 | India, summer from 28 March 2027 |
|---|---|---|
| 14:45 | 19:15 | 18:15 |
| 18:15 | 22:45 | 21:45 |
| Saturday 12:00 | 16:30 | 15:30 |
| Sunday 09:30 | 14:00 | 13:00 |

Time law: the Einheitenzeitgesetz sets UTC+1 for winter and UTC+2 for summer in Germany. This year's summer time ended on 25 October 2026; the next starts on 28 March 2027. India uses UTC+5:30 throughout, which is 4 h 30 ahead of Wolfsburg in winter and 3 h 30 ahead in summer. Examples only, not fixed batch times.

**Lower Saxony school holidays, 2026/27 (KMK table)**

| Ferien | Dates |
|---|---|
| Herbst | 12 to 24 October 2026 |
| Weihnachten | 23 December 2026 to 9 January 2027 |
| Winter | 1 and 2 February 2027 |
| Ostern | 22 March to 3 April 2027 |
| Single days | 7 May and 18 May 2027 |
| Sommer | 8 July to 18 August 2027 |

Source: KMK, Ferien im Schuljahr 2026/2027, Niedersachsen row, status 9 October 2025.

## How does a learner go from first program to tested model?

Our own milestones. Children move through them over years, teenagers and adults over months.

**From code to machine learning (ours)**

| Step | Children, typical age | Teens and adults, typical month |
|---|---|---|
| Exact instructions that work | 6 to 8 | Month 1 |
| Loops, rules and variables | 8 to 10 | Month 1 |
| Averages from a real file | 10 to 12 | Month 2 |
| A line learned from points | 12 and up | Month 3 |
| A fair test on unseen data | Teenagers | Month 4 |
| A written note on the limits | Teenagers | Months 4 to 6 |

### For learners

Always ask what your model could not know. A station move, a missing month or a new measuring method can change the data without changing its name.
Test on data from after your training period, never before it.

### For parents

Ask your child to explain one limit of a model they built. A clear answer shows real understanding.
You get a short monthly note on what was built and what comes next.

## Nine more courses for Wolfsburg learners

Arranged by age. Live, in English, with the same mentor throughout.

### Children

6 to 12

- [Scratch coding](/courses/scratch-programming-complete-course): A short first course in blocks.
- [Python and AI for kids](/courses/python-ai-kids-masterclass): Typed Python and small AI ideas from about 9.
- [Game development for kids](/courses/game-development-masterclass-for-kids): Several game tools in one long course.

### Teenagers

13 to 18

- [AI and machine learning](/courses/ai-ml-masterclass-teens): Models trained and tested properly.
- [Informatik Companion](/courses/informatik-companion-course-klasse-5-10): Help beside grades 9 and 10 Informatik.
- [Statistics and probability](/courses/statistics-probability-maths-course): The maths underneath every model.

### Adults

Work and study

- [Automation and applied AI](/courses/python-ai-automation-masterclass-college): Python scripts that do the routine work.
- [Data analysis](/courses/data-analysis-mastery-course-college): Clean, check and explain real data.
- [Full-stack web development](/courses/full-stack-web-development-masterclass-college): Build and deploy complete web apps.

## What is the format of the Wolfsburg classes?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Mid-afternoon** Pupils straight after school.
- **Evening** Adults after a working day.
- **Saturday and Sunday** Morning or midday for all ages.

- **Same mentor** Someone who knows how you learn.
- **Live every time** No recordings to watch alone.
- **Build, then use** Models made by hand before AI tools.
- **Separate ages** Children, teens and adults apart.
- **Honest testing** Every model is checked on new data.
- **Class or private** 15 to 20 learners, or one to one.

## Fees for Wolfsburg learners

The fee is monthly and pays for eight live classes. Prices on this page are euro amounts based on the European Central Bank reference rate, but the actual charge is in US dollars; your bank converts it, so the final euro figure may vary a little.

- Free first class: Free. A free first class. A short problem and a first program. Nothing to pay up front.
- Group batch: €90 (charged in US dollars) a month. 15 to 20 learners close in age. One mentor all year. Two classes each week. Monthly, cancel any month.
- One to one: €134 (charged in US dollars) a month. Only you and your mentor. Your goals set the pace. Times agreed between you.

## Coding and AI classes in Wolfsburg: what people ask

### Are the classes in German?

No. Classes are live and in English only, taught by mentors in India who adapt to each learner's pace and accent. There are no lessons in German.

### Who can join?

Children from 6, teenagers and adults. Each age group has its own classes: Scratch and Python for children, data and machine learning for teenagers, Python and applied AI for adults.

### Is Informatik compulsory in Lower Saxony?

Yes, in grades 9 and 10 at all general school types since the 2024/25 school year, according to the Gesellschaft für Informatik. Before that, some school types may offer it as an elective, for example from grade 6 at the Oberschule.

### Do children use ChatGPT in your classes?

No. OpenAI requires a minimum age of 13 with a parent's permission under 18, and other AI chat tools set higher ages. Instead, children see what is inside AI by making tiny models of their own in Python.

### When are classes in Wolfsburg time?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Wolfsburg afternoons fall in the Indian evening, so the hours suit both sides.

### What is the Wolfsburg weather model?

A Python exercise we wrote around the DWD station Wolfsburg (Südwest). A straight line learned from 1982 to 2002 predicts later yearly means with an average error of 0.48 degrees, against 0.85 for the old average, and learners then discover the station moved in 2010.

### What is the BWKI?

The Bundeswettbewerb Künstliche Intelligenz, run by the Tübingen AI Center for pupils in Sekundarstufe I and II. Projects need documentation, runnable code and a video pitch, and may be in German or English. The 2026 final is on 13 November 2026 in Tübingen.

### Can adults learn AI with you without a technical background?

Yes. Adult courses start from the first line of Python and build up to data and AI tools, so no previous programming is needed.

### How many people are in a class?

Group classes have 15 to 20 learners of a similar age. One-to-one classes are available with the same mentor at agreed times.

### How do payments work?

Monthly. The euro amounts follow the European Central Bank reference rate; payment is taken in US dollars and converted by your bank. The first class is free.

## Related pages

- [Coding classes in Germany](/coding-classes-in-germany): The full Germany guide.
- [Coding classes in Lower Saxony](/coding-classes-in-lower-saxony): The Land rules and holidays.
- [Informatik-Abitur in Niedersachsen](/informatik-abitur-niedersachsen): For Oberstufe pupils.
- [AI and machine learning in Germany](/ai-and-machine-learning-classes-in-germany): Another model on German data.
- [AI tools age guide](/ai-tools-age-guide): Age limits for AI tools.
- [How we teach](/how-we-teach): Our classes from the inside.

## Contact

Book the free first class at [https://learn.modernagecoders.com/coding-and-ai-classes-in-wolfsburg-germany](https://learn.modernagecoders.com/coding-and-ai-classes-in-wolfsburg-germany#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
