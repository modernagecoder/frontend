---
title: "Online Python Classes in Heilbronn: Live, in English"
description: "Online Python classes in Heilbronn, live in English for children, teens and adults: how a lesson runs, the Python path, BW Informatik and a market data project."
canonical: https://learn.modernagecoders.com/online-python-classes-heilbronn-germany
source: src/pages/online-python-classes-heilbronn-germany.html
---
> Online Python classes for Heilbronn at Modern Age Coders are live video lessons in English: a mentor and the learner share code on screen, the learner types every line, and questions are answered on the spot. Children from about 9, teenagers and adults follow the same Python path at their own speed, either in a class of fifteen to twenty or privately, with a mentor who matches their pace and accent.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / Heilbronn, Python

Heilbronn · Python · Live online lessons

# Online Python classes in Heilbronn

"Online" can mean a video you watch alone or a teacher you talk to. Ours are the second kind: a live mentor, a shared screen and your own keyboard, every lesson. This page shows what happens in one of those lessons, the order in which Python is learned, how it sits beside the new compulsory Informatik subject in Baden-Württemberg, and a project on Heilbronn's own market list in which a perfectly ordinary Python dictionary loses two traders without a word of warning.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Format: Live video, shared code; Language: Python 3; Ages: 9 to 12, teens, adults; Class: 15 to 20, or private; Lessons: Two a week, one hour each; Trial: First class free. Rated 4.9 across 547 Google reviews.

## Which Python course suits a Heilbronn learner?

The same language at three ages. The trial lesson settles which one fits.

- [Python and AI for Kids](/courses/python-ai-kids-masterclass): Ages 9 to 12. Typed Python from lesson one: drawings, games, lists and small data files, with the mentor beside them on screen.
- [Python for Teens](/courses/python-complete-masterclass-teens): Ages 13 to 18. From variables to files, functions and dictionaries, then projects on real open data like the Heilbronn market list.
- [Python from Zero to Advanced](/courses/python-programming-masterclass-zero-to-advanced-college): Adults and students. A complete course for beginners who want Python for work, study or a change of direction.

## What actually happens in a live online Python lesson?

Nothing is pre-recorded. Here is a typical hour, step by step, as a Heilbronn learner would see it.

1. **Join the call.** A video link opens in the browser. The learner sees the mentor's face and the mentor sees the learner's screen once it is shared. No special software is needed beyond a browser and a free code editor we help set up in the first lesson.
2. **Recap in two minutes.** The mentor asks what the last program did, in the learner's own words. That small spoken summary is how a mentor spots a gap before it grows.
3. **One new idea.** A short demonstration of a single idea, such as a dictionary, typed live on the mentor's screen with the learner predicting each output before it appears.
4. **The learner drives.** For most of the hour the learner types and the mentor watches, asks questions and points, but does not take the keyboard. Errors are read aloud together, from the last line up.
5. **A real file.** Older learners try the idea on real data, often German open data like the market list below, because real files are messier than textbook ones.
6. **Wrap up.** The learner explains what changed and saves the program. A short practice task follows, small enough to finish before the next lesson.

### What you need at home

A laptop or desktop computer with a keyboard, a stable internet connection and a quiet corner. A tablet works for Scratch but not for typed Python. Headphones help younger children concentrate.

Parents do not need to know Python. For children under 12 we ask that an adult is nearby for the first few lessons, mostly to help with the screen sharing.

### Why live beats a video course for most learners

A recorded course cannot see that a learner has misread an error message. A mentor can, within seconds, and that is where most beginners otherwise give up.

Live classes also set a rhythm. Two fixed lessons a week keep a learner moving through the dull middle part of learning a language, where many self-taught learners stop.

All lessons are taught in English, by mentors based in India. Python itself is written in English words such as print, for and while, so a learner in Heilbronn who studies it in English is reading the language the way it is written.

## Why does a Python dictionary lose traders from the Heilbronn market list?

Because one stall number is shared, and a dictionary keeps only one value per key. Stadt Heilbronn publishes its weekly market list as open data under CC BY 4.0, and our learners use it to discover that rule the memorable way.

### The file

The dataset is called "Heilbronner Wochenmarkt" on the city's open data portal, published on 9 March 2022, with a list of market traders and their market days dated 1 March 2022. We downloaded it on 3 November 2026: 1,717 bytes, semicolon separated, one row per trader.

Each row has a stall number (STANDORT), a category, the trader's name and seven columns MO to SO with a 1 on each day the trader comes. One row describes a visiting service rather than a trader; we take it out before class, which leaves 30 rows in our file wochenmarkt_2022.csv.

### The task

The learner wants to look up any trader by stall number, so a dictionary is the natural choice: the stall as the key, the name as the value. The first program builds it and prints how many stalls it holds.

Before running it, the learner writes down a prediction. Almost everyone predicts 30, one entry per row. The program disagrees.

**Version 1: one dictionary entry per stall** (Python)
```python
import csv

rows = []
stalls = {}
with open("wochenmarkt_2022.csv", encoding="utf-8") as f:
    for row in csv.DictReader(f, delimiter=";"):
        rows.append(row)
        stalls[row["STANDORT"]] = row["NAME"]

print("Rows read:", len(rows))
print("Stalls in the dictionary:", len(stalls))
print("Stall 18 belongs to:", stalls["18"])
```
It prints: Rows read: 30, Stalls in the dictionary: 28 and Stall 18 belongs to: Olivenoel, Tee und Honig aus Kreta.

Thirty rows went in and 28 entries came out. No error, no warning. The Python tutorial explains why in one sentence: "If you store using a key that is already in use, the old value associated with that key is forgotten." Somewhere in the file a stall number appears more than once, and each new trader quietly replaced the one before. Version 2 counts every stall number before trusting it as a key.

**Version 2: count the keys first** (Python)
```python
from collections import Counter

uses = Counter(row["STANDORT"] for row in rows)
shared = {stall: n for stall, n in uses.items() if n > 1}
print("Stall numbers used more than once:", shared)
```
Run after Version 1, it prints: Stall numbers used more than once: {'18': 3}.

Stall 18 is home to three different traders, so the dictionary kept only the last one read and forgot two. The cure is to store a list of names for each stall instead of a single name. Version 3 does that, then answers a question a market visitor might actually ask: how many traders come on each day of the week?

**Version 3: a list per stall, then count by day** (Python)
```python
traders = {}
for row in rows:
    traders.setdefault(row["STANDORT"], []).append(row["NAME"].strip())

print("Traders at stall 18:", len(traders["18"]))
for day in ["MO", "DI", "MI", "DO", "FR", "SA", "SO"]:
    print(day, sum(1 for row in rows if row[day] == "1"))
```
Run after Versions 1 and 2, it prints Traders at stall 18: 3, then one line per day: MO 0, DI 13, MI 0, DO 19, FR 0, SA 25, SO 0.

**Traders per market day on the Heilbronn list of 1 March 2022 (our count, 30 rows)**

| Day | Traders listed |
|---|---|
| Tuesday (DI) | 13 |
| Thursday (DO) | 19 |
| Saturday (SA) | 25 |
| Monday, Wednesday, Friday, Sunday | 0 |

Data: Stadt Heilbronn, Heilbronner Wochenmarkt, resource "Wochenmarkthändler und ihre Markttage 2022", licence CC BY 4.0, downloaded 3 November 2026. Counts are our own, from our 30-row class file. Eleven traders are listed for all three market days. The list dates from 2022, so it describes that market, not today's.

The file has more surprises for sharp eyes, and each one is a small lesson. Stall labels include 13a and 28a, so the stall column is text, not a number, and sorting it naively puts 13a in an odd place. Numbers 4 and 5 never appear. One name starts with a space. Umlauts are written out as ue and ae, and the category for fruit and vegetables is spelled GEMueSE UND OBST, half in capitals. None of this is wrong; it is simply what real files look like.

1. **Ages 9 to 12.** Run Version 1, then find stall 18 in the file by eye. Who are the three traders, and which one did the dictionary keep?
2. **Teenagers.** Sort the stall labels so that 13a comes straight after 13 and 28a after 28. Hint: split each label into its number and its letter first.
3. **Adults.** Write a function that takes any CSV file and a column name and reports whether that column could safely be a dictionary key. Test it on STANDORT and on NAME.

## How long does it take to learn Python online?

Months, not weeks, and the order matters more than the speed. These are our own stages, used for every age; children take longer at each stage than adults.

**Our Python path, with typical lesson counts at two lessons a week**

| Stage | What the learner can do | Teen or adult, typical lessons | Child 9 to 12, typical lessons |
|---|---|---|---|
| 1. First programs | print, input, variables, simple arithmetic | 4 to 6 | 8 to 10 |
| 2. Decisions and loops | if, while and for, small games | 8 to 10 | 12 to 16 |
| 3. Collections | lists and dictionaries, and when each fits | 8 to 10 | 14 to 18 |
| 4. Files | read a CSV file, check it, count with it | 6 to 8 | 10 to 14 |
| 5. Functions and tests | split a program into tested pieces | 8 to 12 | Usually after 12 |
| 6. Projects | a project on real data, explained to others | Ongoing | Ongoing |

Our own planning figures from teaching Python live online since 2020, not a promise; every learner is different. The market project above belongs to stages 3 and 4.

The commonest mistake self-taught learners make is to rush stage 3. Lists and dictionaries look simple, but choosing between them, and knowing what each will silently do with duplicates, is exactly what the market file tests. We spend time there on purpose.

## Does Python come up in Informatik at schools in Heilbronn?

Informatik is now compulsory in Baden-Württemberg from grade 5, but it starts with the basics and grows year by year. The Gesellschaft für Informatik records the details for 2026/27.

**Informatik in Baden-Württemberg, school year 2026/27**

| Topic | What the Informatik-Monitor 2026/27 records |
|---|---|
| New compulsory subject | Informatik und Medienbildung, across all Sek I school types from 2025/26 |
| First grades | Started in grades 5 and 6, then growing year by year |
| National comparison | One of four Länder meeting the short-term goal of four compulsory hours |
| Older profile subject | IMP (Informatik, Mathematik, Physik) is being phased out |
| Oberstufe | Only about one pupil in twelve takes Informatik, among the lowest shares in Germany |

Source: Gesellschaft für Informatik, Informatik-Monitor 2026/27, national overview and Baden-Württemberg page, read on 2 November 2026. Its words for the new subject: "Pflichtfach Informatik und Medienbildung", introduced "mit dem Schuljahr 2025/2026".

For a Heilbronn family this means two things. Younger pupils will meet computing at school sooner than their older siblings did, which is good news. But the Oberstufe figure shows that most pupils still leave school without studying Informatik in depth. Our Python classes sit alongside school for both groups: a head start for the younger ones and depth for teenagers who want more than the timetable gives. We teach alongside school, not instead of it, and the school's own course is the one that counts for grades.

## What time are online Python classes in Heilbronn?

Afternoons and early evenings in Heilbronn fall in the Indian evening, so the hours work for both sides. School holidays do not pause the classes unless you want them to.

**Example Heilbronn lesson times with the hour in India**

| Heilbronn | India until 28 March 2027 | India from 28 March 2027 |
|---|---|---|
| 15:45 | 20:15 | 19:15 |
| 17:45 | 22:15 | 21:15 |
| Saturday 11:30 | 16:00 | 15:00 |
| Sunday 16:00 | 20:30 | 19:30 |

Germany runs on UTC+1 in winter and UTC+2 in summer under the Einheitenzeitgesetz; the 2026 summer time finished on 25 October 2026 and the next begins on 28 March 2027. India stays at UTC+5:30, which puts it 4 h 30 ahead of Heilbronn in winter and 3 h 30 ahead in summer. Times shown are examples only.

**School holidays in Baden-Württemberg, 2026/27 (KMK table)**

| Break | Dates |
|---|---|
| Autumn | 26 to 30 October 2026, plus 31 October |
| Christmas | 23 December 2026 to 9 January 2027 |
| Easter | 25 March, then 30 March to 3 April 2027 |
| Whitsun | 18 to 29 May 2027 |
| Summer | 29 July to 11 September 2027 |

Source: Kultusministerkonferenz, Ferien im Schuljahr 2026/2027, Baden-Württemberg row, status 9 October 2025. The KMK sets summer holidays; Baden-Württemberg sets the rest.

## How can you tell the Python is really sinking in?

Our checkpoints. A learner who can do the right-hand column without help has truly learned the stage.

**Python checkpoints (ours)**

| Stage | Can follow along | Can do alone |
|---|---|---|
| Variables | Copies a program and runs it | Predicts its output before running |
| Loops | Changes a loop that works | Writes a loop from a plain-English task |
| Dictionaries | Looks up a key | Checks a key column for duplicates first |
| Files | Opens a file the mentor chose | Opens a new file and reports its oddities |
| Functions | Calls a function | Writes and tests one |

### For learners

Before you trust a dictionary, ask how many rows went in and how many keys came out. If the numbers differ, something was forgotten.
Say your prediction out loud before you press run. Being wrong is how you learn which idea you had not understood.

### For parents

Ask your child to show you one surprising output from this week and explain it. That is a better progress check than any certificate.
Mentors send a short note each month: what was built, what was hard, and the next stage.

## Nine more courses for Heilbronn Python learners

Where Python leads next, by age. All taught live in English by a regular mentor.

### Ages 9 to 13

Before and around Python

- [Scratch coding](/courses/scratch-programming-complete-course): For younger siblings not ready to type yet.
- [Maths through coding](/courses/maths-through-coding): School maths turned into small Python programs.
- [Informatik Companion](/courses/informatik-companion-course-klasse-5-10): Support beside the new BW subject, in English.

### Teenagers

Python, deeper

- [Data science for teens](/courses/data-science-course-for-teens-python-data): Charts and conclusions from real files.
- [Algorithms and data structures](/courses/problem-solving-dsa-masterclass-teens): Why a dictionary is fast, and when it is not.
- [AI and machine learning](/courses/ai-ml-masterclass-teens): Models built in Python and tested honestly.

### Adults

Python at work

- [Automation and applied AI](/courses/python-ai-automation-masterclass-college): Scripts that save hours each week.
- [Data analysis](/courses/data-analysis-mastery-course-college): From spreadsheets to reproducible Python.
- [SQL databases](/courses/mysql-database-complete-masterclass-college): Where keys must be unique by design.

## How are online Python classes organised for Heilbronn?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **After school** Heilbronn afternoons for pupils.
- **After work** Early evening slots for adults.
- **Weekends** Saturday and Sunday, morning or afternoon.

- **Video and shared code** You see the mentor and the mentor sees your code.
- **Your keyboard** The learner types; the mentor guides.
- **Two lessons weekly** An hour each, at fixed times you choose.
- **Recorded nothing** Every lesson is live; there is no video library to fall behind on.
- **Monthly notes** Short written progress for learners and parents.
- **Group or solo** Join a class of 15 to 20, or learn privately.

## How much are online Python classes in Heilbronn?

You pay monthly, and each month includes eight live lessons. Euro amounts here follow the European Central Bank reference rate, but checkout takes payment in US dollars; your bank does the currency conversion, so the euro total on your statement can be a touch different.

- Free first class: Free. A free trial lesson. Your first Python program. No card details needed.
- Group batch: €90 (charged in US dollars) a month. A class of 15 to 20 near your age. Your regular mentor. Two lessons a week. Pay monthly, stop when you like.
- One to one: €134 (charged in US dollars) a month. Just you and the mentor. Your pace and your projects. Lesson times agreed with you.

## Online Python classes in Heilbronn: questions and answers

### Are the classes in German?

No. Lessons are live and in English only. Our mentors are based in India and adapt to each learner's pace and accent, but they do not teach in German.

### What does live online mean here?

A real mentor on a video call in real time, with the learner's code shared on screen. Nothing is pre-recorded. The learner types, the mentor guides and answers questions as they come up.

### What equipment do we need?

A laptop or desktop with a keyboard, a browser, a steady internet connection and ideally headphones. We help install a free code editor in the first lesson. Tablets are not suitable for typed Python.

### From what age can someone learn Python online?

From about 9, once a child reads and types comfortably. Younger children start with Scratch. There is no upper age limit; many of our Python learners are adults.

### When are classes in Heilbronn time?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Heilbronn afternoons and early evenings are evening in India.

### Is Informatik compulsory at schools in Baden-Württemberg?

Yes, since the 2025/26 school year: the Gesellschaft für Informatik records the new compulsory subject Informatik und Medienbildung across secondary school types, starting in grades 5 and 6 and growing each year.

### Will these classes improve my child's Informatik grade?

We cannot promise grades. We teach alongside school, and the school course is the one that is assessed. What our classes add is regular practice and depth in Python and problem solving.

### What is the Heilbronn market project?

An original Python exercise of ours on Stadt Heilbronn's open Wochenmarkt list, licensed CC BY 4.0. Thirty rows go into a dictionary and only 28 entries come out, because stall 18 is shared by three traders. Learners find out why and fix it.

### How large are the classes?

Group classes have 15 to 20 learners of a similar age. One-to-one lessons are also available, with the same mentor at times you agree.

### How is payment handled?

Monthly. Fees appear in euro, converted at the European Central Bank reference rate, and payment is taken in US dollars, which your bank converts. The trial lesson is free.

## Related pages

- [Coding classes in Germany](/coding-classes-in-germany): All our Germany pages in one place.
- [Coding classes in Baden-Württemberg](/coding-classes-in-baden-wuerttemberg): The Land rules and holidays in full.
- [Informatik-Abitur in Baden-Württemberg](/informatik-abitur-baden-wuerttemberg): For pupils heading to the Oberstufe.
- [AI and machine learning in Germany](/ai-and-machine-learning-classes-in-germany): Where Python leads next.
- [Student labs](/student-labs): Projects built in our classes.
- [How we teach](/how-we-teach): Our teaching approach in detail.

## Contact

Book the free first class at [https://learn.modernagecoders.com/online-python-classes-heilbronn-germany](https://learn.modernagecoders.com/online-python-classes-heilbronn-germany#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
