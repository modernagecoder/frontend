---
title: "Online Python Classes in Augsburg, Live in English"
description: "Online Python classes in Augsburg, live in English: is live online right for you, Informatik by school type in Bavaria, and a project on Annastraße footfall data."
canonical: https://learn.modernagecoders.com/online-python-classes-augsburg-germany
source: src/pages/online-python-classes-augsburg-germany.html
---
> Online Python classes for Augsburg learners at Modern Age Coders are live lessons in English with a regular mentor who shares the learner's screen, follows every line as it is typed and works through errors on the spot, at a pace and in an accent the learner can follow. Children join from about 9, teenagers and adults at any level, in a class of 15 to 20 or one to one, on weekday afternoons and evenings or at weekends.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / Python in Augsburg

Augsburg · Python · Live online

# Online Python classes in Augsburg

Before you book anything, it is worth asking whether a live online class suits the learner at all. This page starts there, with an honest checklist, then explains how Bavarian schools teach Informatik very differently at a Mittelschule and a Gymnasium, and where Python fits around that. The project at the end uses the city's own hourly count of people walking along the Annastraße, and its first answer is wrong for a reason that catches professional programmers too.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Language: Python 3; Ages: 9 to 12, 13 to 18, adults; Format: Live video, shared screen; Lessons: Two a week; Group: 15 to 20 learners, or 1-on-1; First lesson: Free, no card needed. Rated 4.9 across 547 Google reviews.

## Three Python courses for Augsburg learners

One for children who have just learned to type, one for teenagers, and one for adults, each built around real projects.

- [Python and AI for Kids](/courses/python-ai-kids-masterclass): Nine to twelve. Programs that draw, count and play, then small projects with real data, in short, friendly steps.
- [Python for Teens](/courses/python-complete-masterclass-teens): Thirteen to eighteen. The full language, plus the skill of reading code on paper that a Bavarian Informatik Abitur expects.
- [Python Automation and Applied AI](/courses/python-ai-automation-masterclass-college): Adults. Scripts that handle files, spreadsheets and reports, then AI services called from Python, all checked by you.

## Is a live online Python class right for my child, or for me?

Live online lessons suit most learners, but not all. Go through these points honestly; if most are true, it is likely to work well.

1. **There is a computer with a keyboard.** Python is typed. A tablet can join the video, but writing code on a touch screen is slow and frustrating.
2. **There is a quiet corner for an hour.** Two lessons a week, about an hour each. Younger children settle faster with a parent nearby for the first few lessons.
3. **The learner can follow spoken English.** Lessons are in English only. Perfect English is not needed; mentors slow down, repeat and adapt to each accent, but the learner must be willing to listen and answer in English.
4. **The learner wants to type, not watch.** In our lessons the learner shares their screen and writes most of the code. Someone who would rather watch videos alone may prefer a recorded course.
5. **The learner can wait a moment for help.** In a class of 15 to 20, the mentor helps one learner at a time on screen. Learners who need constant attention are better in one-to-one lessons.

Our own checklist, written from what we see in the free first lesson.

### What a lesson feels like

The mentor shows one small idea, then hands over. The learner types, runs, gets an error, reads it aloud and fixes it with a hint rather than an answer. By the end of an hour they have a working program they wrote themselves.

Nothing is recorded and nothing is left to work out alone for a week.

### Who the mentors are

Our mentors are based in India and teach live over video, in English. The learner has the same mentor every lesson, who soon knows whether they like hints or challenges and how they speak.

For Augsburg families that means afternoon and evening times, since India is several hours ahead.

## How much Informatik does a pupil in Augsburg get at school?

In Bavaria the answer depends strongly on the type of school. The rules below come from the GI Informatik-Monitor 2026/27 and the Bavarian ministry of education.

**Informatik in Bavaria, by school type and grade**

| School type | Grades | What is compulsory |
|---|---|---|
| Mittelschule | 5 to 10 | Informatik, one lesson a week in every grade |
| Gymnasium, all branches | 6 and 7 | One weekly lesson with an Informatik focus, inside Natur und Technik |
| Gymnasium, NTG branch | 9 and 10 | Informatik as a compulsory subject |
| Gymnasium, all branches | 11 | Two weekly lessons of an informatics subject |
| Gymnasium, Abitur | 12 and 13 | Five exam subjects, three written and two oral; Informatik written tasks set centrally |

Sources: GI Informatik-Monitor 2026/27, Bayern entry; Bayerisches Staatsministerium für Unterricht und Kultus, Gymnasium page. Read on 2 November 2026. Bavaria's Gymnasium is nine years again, grades 5 to 13, and the monitor notes that the switch back from G8 was completed in 2024/25.

### What stands out

A Mittelschule pupil in Augsburg gets Informatik every year from grade 5 to grade 10, which is more continuous than in most Länder. A Gymnasium pupil outside the NTG branch gets a short Informatik focus in grades 6 and 7, then a gap until grade 11.

The written Informatik Abitur in Bavaria is mostly programming on paper, with no practical work at a computer, according to the monitor.

### Where Python helps

For a Gymnasium pupil, the years between grade 7 and grade 11 are where a weekly Python class keeps the skill alive. For anyone heading to an Informatik Abitur, writing and tracing code by hand is a skill we practise deliberately.

We teach alongside school and never instead of it; the school course and its marks are what count, and we award no German qualification.

Some Augsburg pupils study at an international school instead. The AGIS directory lists International School Augsburg, ISA, as offering the IB Diploma, with German Abitur recognition, and IGCSE, with Mittlere Reife recognition. Our IB and IGCSE computer science courses are written for those programmes; we name the school only as context, not as a source of students.

## When is the Annastraße at its busiest?

Augsburg counts the people walking along the Annastraße, one of its main shopping streets, every hour, and publishes the counts under a CC BY 4.0 licence. Nearly fifty thousand rows, and a trap on the very first question.

### The file

The dataset is Augsburg: Passanten Annastraße, from the city's economic development office. We downloaded the file on 3 November 2026 and saved it as annastrasse.csv. Each row is one hour: the place, the year, a date such as "Mi., 16.12.2020", an hour such as "13 Uhr" and the number of passers-by.

The counts begin in December 2020 and, in our download, run to August 2026.

### The questions

First, a warm-up: what is the most recent day in the file? Then the real question: at what hour of the day is the street busiest?

The warm-up looks too easy to get wrong. Run Step 1 and look closely.

**Step 1: the latest day, the quick way** (Python)
```python
import csv

with open("annastrasse.csv", encoding="utf-8-sig") as f:
    rows = list(csv.DictReader(f, delimiter=";"))

texts = [r["Datum"][5:] for r in rows]        # "Mi., 16.12.2020" -> "16.12.2020"
print("Rows:", len(rows))
print("First and last row:", texts[0], texts[-1])
print("max() of the text says the latest day is:", max(texts))
```
It prints Rows: 48956, First and last row: 16.12.2020 11.08.2026 and max() of the text says the latest day is: 31.12.2025.

The last row of the file is from 11 August 2026, yet max() claims the latest day is 31 December 2025. Nothing is broken: the dates are still text, and text is compared character by character from the left. "31.12.2025" starts with a 3, and no date that starts with 1 can beat it, so the year at the end never gets a say. German date order, day first, makes the trap easy to fall into. The fix is to turn each text into a real date before comparing.

**Step 2: real dates, then the busiest hour of 2025** (Python)
```python
from datetime import datetime

days = [datetime.strptime(t, "%d.%m.%Y").date() for t in texts]
print("Real latest day:", max(days), " real earliest:", min(days))

by_hour = {}
for r, day in zip(rows, days):
    if day.year == 2025:
        hour = int(r["Stunde"].split()[0])          # "13 Uhr" -> 13
        by_hour.setdefault(hour, []).append(int(r["Passanten"]))
peak = max(by_hour, key=lambda h: sum(by_hour[h]) / len(by_hour[h]))
print("Busiest hour in 2025:", peak, "Uhr, on average", round(sum(by_hour[peak]) / len(by_hour[peak])), "people")
```
Run after Step 1. It prints Real latest day: 2026-08-11 real earliest: 2020-12-16 and Busiest hour in 2025: 16 Uhr, on average 1867 people.

**Average passers-by in the Annastraße per hour, 2025 (our calculation, selected hours)**

| Hour | Average people |
|---|---|
| 04 Uhr | 11 |
| 08 Uhr | 312 |
| 12 Uhr | 1,735 |
| 16 Uhr | 1,867 |
| 20 Uhr | 436 |

Data: Stadt Augsburg, Wirtschaftsförderung, Augsburg: Passanten Annastraße, via open.bydata, licence CC BY 4.0, file downloaded 3 November 2026. Averages over the 365 days of 2025 are our own.

The street fills up from late morning and stays close to its peak from about noon until five, with 16 Uhr narrowly ahead. Older learners usually go on to ask about days of the week, and the answer is striking. Adding up each day's hourly counts, our own sums give an average of 28,668 passers-by on a 2025 Saturday against 6,123 on a Sunday, when most shops are shut. The single busiest day of 2025 in the file was Saturday 29 November 2025, with 44,111. The data does not say why, and a careful learner does not pretend that it does.

1. **Ages 9 to 12.** Write five dates like 05.03.2024 on paper and sort them as words, then as dates. Where do the two orders disagree?
2. **Ages 13 to 18.** Run both steps, then find the busiest hour on Saturdays only. Is it the same as for the whole year?
3. **Adults.** Compare December 2024 with December 2025 by week, and write one sentence for a report that names the licence and the counting method.
4. **Going further.** One hour of 2025 appears 366 times instead of 365. Find it and explain how that could happen in a file of hourly counts.

## What time are online Python lessons in Augsburg?

School pupils mostly come in the afternoon, adults in the early evening, and anyone can choose a weekend slot.

**Example Augsburg lesson times and the hour in India**

| Augsburg | India, winter months | India, summer months |
|---|---|---|
| 16:20, after school | 20:50 | 19:50 |
| 17:50, after work | 22:20 | 21:20 |
| Saturday 08:45 | 13:15 | 12:15 |
| Sunday 11:45 | 16:15 | 15:15 |

Time in Augsburg follows the Einheitenzeitgesetz: MEZ, UTC+1, in winter and MESZ, UTC+2, in summer. The winter period began on 25 October 2026 and runs until 28 March 2027. India is on UTC+5:30 with no clock changes, which makes it four and a half hours later than Augsburg now and three and a half hours later in summer. Examples only, not batch times.

**Bavarian school holidays 2026/27**

| Ferien | Dates |
|---|---|
| Herbstferien | 2 to 6 November 2026 |
| Weihnachten | 24 December 2026 to 8 January 2027 |
| Winterferien | 8 to 12 February 2027 |
| Osterferien | 22 March to 2 April 2027 |
| Pfingstferien | 18 to 28 May 2027 |
| Sommerferien | 2 August to 13 September 2027 |

Source: KMK, Ferien im Schuljahr 2026/2027, Bayern row, Stand 9 October 2025. Bavaria's Herbstferien fall in the week this page was written.

Lessons carry on through the Bavarian holidays unless you ask for a pause, so a free week such as the Herbstferien can be a good moment to start. Augsburg had 301,105 residents on 31 December 2024, according to Destatis. Learners in Friedberg, Königsbrunn and Gersthofen, and further afield in München or Ulm, join exactly the same online lessons; Ulm is in Baden-Württemberg, so its school holidays differ.

## How an Augsburg learner moves through Python

Our own markers. The mentor's monthly note says which one the learner has reached.

**Python progress markers (ours)**

| Marker | Usually reached | The learner can |
|---|---|---|
| Talks to Python | Week 1 | Print, ask for input and do arithmetic |
| Makes decisions | Week 3 | Use if and else and explain each branch |
| Repeats work | Month 1 | Write loops and predict what they print |
| Handles real types | Month 2 | Turn text into numbers and dates before comparing |
| Answers a question with data | Month 4 | Read a large file and summarise it honestly |

### For learners

If something looks like a date but sorts strangely, it is probably still text.
Check the first and last rows before you trust any maximum.

### For parents

Ask your child why their first answer was wrong. Being able to say why is the real progress.
Two short lessons a week beat one long one for building a habit.

## Nine more courses for Augsburg Python learners

Each is live, in English, with a regular mentor, in a class or privately.

### Data and AI

Ages 13 and up

- [Data science for teens](/courses/data-science-course-for-teens-python-data): Large files, charts and a first predictive model.
- [Machine learning for teens](/courses/ai-ml-masterclass-teens): Models trained, tested and explained in Python.
- [Data science for adults](/courses/data-science-complete-masterclass-college): From pandas to deep learning, for students and professionals.

### School programmes

Ages 12 to 19

- [Informatik Abitur in English](/courses/informatik-abitur-course-java-python): Topics and paper-based code reading for the Abitur.
- [IB Computer Science](/courses/ib-diploma-computer-science-course): For IB Diploma pupils, internal assessment included.
- [IGCSE Computer Science 0478](/courses/igcse-computer-science-0478-course): The Cambridge syllabus, with pseudocode and Python.

### Building software

Ages 13 and up

- [Web apps in Python](/courses/python-web-development-django-flask-course): Django and Flask, from first page to working app.
- [Git and GitHub](/courses/git-github-version-control-course-for-college-students): Version control the way teams use it.
- [Data structures and algorithms](/courses/data-structures-algorithms-masterclass-college): The ideas behind fast, reliable code.

## How live Python lessons are set up for Augsburg

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Weekday afternoon** After school, for children and teenagers.
- **Weekday evening** After work, mostly for adults.
- **Weekend** Morning or midday, Saturday or Sunday.

- **You type** The learner writes most of the code in every lesson.
- **Errors read together** Hints first, answers only when needed.
- **Unhurried English** Spoken slowly, repeated when asked.
- **Live only** No pre-recorded lessons at any stage.
- **Your own mentor** The same person for months, not a rota.
- **Class or solo** 15 to 20 learners, or one-to-one.

## Fees for Python lessons in Augsburg

Eight live lessons each month for one fee. The figure on this page is in euro, calculated from the European Central Bank reference rate; payment goes through in US dollars, and your bank converts it at its own rate, so the euro on your statement may vary slightly.

- Free first class: Free. A free first Python lesson. A short program of your own. No card needed.
- Group batch: €90 (charged in US dollars) a month. 15 to 20 learners at a similar level. A regular mentor. Two lessons a week. Monthly, cancel any month.
- One to one: €134 (charged in US dollars) a month. One learner, one mentor. Projects you choose. Times fixed with you.

## Online Python classes in Augsburg: what learners and parents ask

### Are the classes in German?

No. Lessons are live and taught in English only. Mentors speak slowly, rephrase whenever needed and get used to each learner's accent. Python itself uses English words, so the language of the lesson and of the code match.

### How do I know whether online lessons will suit my child?

Check that there is a computer with a keyboard, a quiet place for an hour, and a child who is willing to listen and answer in English. The free first lesson shows the rest, and the mentor will say honestly if one-to-one lessons would suit better.

### What Informatik will my child have at school in Augsburg?

It depends on the school type. At a Mittelschule, Informatik is compulsory for one lesson a week from grade 5 to grade 10. At a Gymnasium there is an Informatik focus in grades 6 and 7, compulsory Informatik in grades 9 and 10 in the NTG branch, and two compulsory lessons in grade 11 for everyone.

### Is the Informatik Abitur in Bavaria done on a computer?

No. According to the GI Informatik-Monitor 2026/27, the written tasks are set centrally and largely consist of programming on paper, with no practical work at a computer.

### From what age can someone start Python with you?

From about 9 for typed Python. Younger children begin with Scratch. Adults of any age can start from zero.

### When are lessons in Augsburg time?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. School pupils usually choose afternoons and adults early evenings.

### Do lessons stop in the Bavarian school holidays?

No, unless you ask. The mentors are not on the Bavarian calendar, so learners often use a holiday week, such as the Herbstferien from 2 to 6 November 2026, to get started.

### Where are the mentors?

In India. In winter India is four and a half hours ahead of Augsburg, so a 16:20 lesson in Augsburg is 20:50 for the mentor.

### How is the fee shown, and how is it charged?

It is a monthly fee for eight lessons, shown here in euro at the European Central Bank reference rate and charged in US dollars. Your bank converts the charge, so the amount on your statement can differ a little. The first lesson is free.

### Do you teach IB or IGCSE computer science?

Yes. We have courses for IB Diploma Computer Science and Cambridge IGCSE Computer Science 0478, taught live in English. The school and the exam board set and grade the actual coursework and exams.

## Related pages

- [Coding classes in Germany](/coding-classes-in-germany): Our hub page for Germany.
- [Coding classes in Bavaria](/coding-classes-in-bavaria): The Land page for Bavaria.
- [Python classes for kids](/python-classes-for-kids-germany): Starting typed code at nine.
- [IB Computer Science](/ib-computer-science-tutor-germany): For IB pupils in Germany.
- [IGCSE Computer Science](/igcse-computer-science-tutor-germany): For Cambridge pupils in Germany.
- [Abitur computer science](/abitur-computer-science-in-english): Informatik in the Oberstufe.

## Contact

Book the free first class at [https://learn.modernagecoders.com/online-python-classes-augsburg-germany](https://learn.modernagecoders.com/online-python-classes-augsburg-germany#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
