---
title: "Online Python Classes in Freiburg: Live Lessons in English"
description: "Online Python classes in Freiburg im Breisgau, live in English for teens and adults: how live lessons work, the Python path, and a city bike-counter data project."
canonical: https://learn.modernagecoders.com/online-python-classes-freiburg-im-breisgau-germany
source: src/pages/online-python-classes-freiburg-im-breisgau-germany.html
---
> Modern Age Coders gives online Python classes for Freiburg im Breisgau as live video lessons in English. A mentor watches your shared screen as you write code, asks why, and helps the moment something breaks. Teenagers from about 13 and adults progress from first scripts to real data files and then a project they design. Classes run for 15 to 20 people or for one learner alone, and the mentor, the same each week, sets the speed and the English to suit you.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / Python in Freiburg

Freiburg im Breisgau · Python · Live online, in English

# Online Python classes in Freiburg im Breisgau

Freiburg counts its cyclists every hour, and publishes the counts. That file has more than six hundred thousand rows, and the first thing it teaches a new programmer is humility: add it up the obvious way and you count every bike twice. This page explains how our live online Python lessons in English work, the stages from a first script to a file that size, where Informatik stands in Baden-Württemberg's schools, and the bike-counter project in full.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Who: From about 13, and adults; What: Python 3, data files, projects; How: Live video, shared screen; Size: 15 to 20, or one to one; Teachers: Mentors in India, English only; First lesson: Free. Rated 4.9 across 547 Google reviews.

## Which Python course should a Freiburg learner pick?

One for pupils, one for adults and university students, and one for anyone who already writes loops and wants to work with data.

- [Python for Teens](/courses/python-complete-masterclass-teens): For school pupils from about 13. Building blocks first, then files and small projects, with every task checked live by the mentor.
- [Adult Python, zero to confident](/courses/python-programming-masterclass-zero-to-advanced-college): For students at Freiburg's universities and for working adults. Clear, organised Python that you can use on your own files.
- [Data Analysis](/courses/data-analysis-mastery-course-college): For adults who want answers from data. Spreadsheets, SQL and Python together, with projects on large public files like the bike counters.

## How does a live online Python lesson actually work?

Think of it as sitting next to an experienced programmer who can see your screen, except the programmer is on a video call.

### You drive

From the first lesson you write the code. The mentor watches your shared screen, and when something goes wrong asks a question rather than taking over: what did you expect this line to do? What does the error say?

It feels slower than watching a video. It is much faster at the one thing that matters, which is being able to do it alone afterwards.

### The mentor steers

The mentor chooses problems a little above what you can already do, and spots habits early, such as copying code you do not understand or ignoring the last line of an error message.

In a group, the mentor follows several screens and stops the class when one learner's mistake will help everyone. One to one, the whole hour is yours.

**What you need for live online Python, and what you do not (ours)**

| Need | Do not need |
|---|---|
| A laptop or desktop with a real keyboard | An expensive computer: any recent machine works |
| A microphone, a webcam if you like | Paid software: Python and the editor are free |
| A stable internet connection | Prior programming knowledge |
| Two hours a week, plus a little practice | Fluent English: the mentor adapts |

Our own summary of how Modern Age Coders teaches. Lessons are live, never pre-recorded, and taught in English by mentors based in India.

## Do you also teach Python in German?

No. Our lessons are in English only. For Python, that is less of a hurdle than it sounds.

### Clear about it

All lessons are taught in English by mentors who work from India. There is no German-speaking option, and we say so before anyone books.

### Fitted to you

Mentors slow down, reword, and repeat without impatience, and adjust to your accent over the first lessons. A German word in the middle of a sentence is fine.

### Code is English already

Every Python keyword is an English word, and so is every error it prints. Learning in English means fewer things to translate in your head.

Freiburg is a university city close to France and Switzerland, and many learners here already study or work in English. School pupils gain a weekly hour of spoken technical English on top of the programming.

## What are the stages from first script to real data?

Four stages, each ending with something you have built and can explain. Speeds vary, and the mentor tells you honestly where you are.

1. **Talk to Python.** Printing, variables, input, if and else. You finish with a short quiz program that scores the answers.
2. **Repeat and organise.** Loops, lists, dictionaries and functions. You finish with a game or a tool split into small functions you can test one at a time.
3. **Read real files.** CSV files, counting, grouping, and checking your own totals. You finish with a counted answer from a large public dataset, like Freiburg's bike counters.
4. **Make it yours.** You choose a question, gather data, write the program and explain both the answer and how far to trust it.

**The four stages at two lessons a week (our planning figures)**

| Stage | Typical span | Proof you can do it |
|---|---|---|
| Talk to Python | 4 to 6 weeks | A quiz that keeps score |
| Repeat and organise | 6 to 8 weeks | A program of tested functions |
| Read real files | 8 to 10 weeks | A checked total from a public file |
| Make it yours | Open | A project with its limits written down |

Spans are ours and not a promise. Anyone who already knows a bit begins wherever the trial lesson shows they should.

## How many bikes passed Freiburg's counters, and how do you avoid counting them twice?

Stadt Freiburg publishes the hourly counts of its bicycle counters as one long file under Datenlizenz Deutschland Namensnennung 2.0. Our Stage 3 learners use it to learn that a table can contain its own totals, and that adding everything is then wrong.

### The file

The download has 653,041 rows. Each row is one hour at one counter: the date, the hour, a counter number from 1 to 18, the number of bikes, a direction code and a usage code. The file does not name the counters, so we refer to them by number.

The column for direction is headed "Fahrrad-Zählstelle Richtung (in, out, all)", and the values are 1, 2 and 3. The dataset page says the series runs from 2015 to the end of 2025; the file we downloaded on 3 November 2026 already reaches 8 April 2026.

### The trap

Some counters have rows for code 1, code 2 and code 3 in the same hour. If 1 is in, 2 is out and 3 is all, then the code 3 row already contains the other two, and summing the whole file counts each bike twice.

That "if" needs checking. The first program shows the problem; the second checks the guess on every hour in the file before relying on it.

**Version 1: add up one counter, the obvious way** (Python)
```python
import csv

totals = {}
with open("freiburg_bikes.csv", encoding="utf-8-sig") as counts_file:
    rows = csv.reader(counts_file, delimiter=";")
    next(rows)                      # skip the header line
    for row in rows:
        year, counter, bikes = row[0][:4], row[3], row[4]
        if counter == "5" and year == "2024" and bikes != "":
            totals[row[5]] = totals.get(row[5], 0) + int(bikes)

print("Rows added up by direction code:", totals)
print("Naive total for counter 5 in 2024:", sum(totals.values()))
```
It prints: Rows added up by direction code: {'3': 234431, '1': 118546, '2': 115885} and Naive total for counter 5 in 2024: 468862.

Look at the three numbers: 118,546 plus 115,885 is 234,431, exactly the code 3 figure. The naive total of 468,862 is precisely twice the real number of bikes. A learner who reported it would have doubled Freiburg's cycling at that counter with one line of code.

**Version 2: check the rule everywhere, then use only code 3** (Python)
```python
import csv

by_hour = {}
with open("freiburg_bikes.csv", encoding="utf-8-sig") as counts_file:
    rows = csv.reader(counts_file, delimiter=";")
    next(rows)
    for row in rows:
        if row[4] != "":
            by_hour.setdefault((row[3], row[2]), {})[row[5]] = int(row[4])

checked = broken = 0
for codes in by_hour.values():
    if "1" in codes and "2" in codes and "3" in codes:
        checked += 1
        if codes["3"] != codes["1"] + codes["2"]:
            broken += 1
print("Hours with all three codes:", checked, " where 3 is not 1 + 2:", broken)

yearly = {}
for (counter, stamp), codes in by_hour.items():
    if counter == "1" and "3" in codes:
        yearly[stamp[:4]] = yearly.get(stamp[:4], 0) + codes["3"]
for year in ("2015", "2019", "2024", "2025"):
    print("Counter 1,", year, ":", yearly[year])
```
It prints: Hours with all three codes: 55131 where 3 is not 1 + 2: 0, then Counter 1, 2015 : 2587770, Counter 1, 2019 : 2507586, Counter 1, 2024 : 2436346 and Counter 1, 2025 : 2676857.

**Counter 1, bikes per year from code 3 rows only (our calculation)**

| Year | Bikes | Hours with a count |
|---|---|---|
| 2015 | 2,587,770 | 8,760 |
| 2018 | 2,710,305 | 8,760 |
| 2021 | 2,343,945 | 8,760 |
| 2023 | 2,675,823 | 8,748 |
| 2025 | 2,676,857 | 8,759 |

Data: Stadt Freiburg i. Br., Garten- und Tiefbauamt, Fahrrad-Zählstellen Zeitreihe (FR.ITZ dataset 3800), licence Datenlizenz Deutschland Namensnennung 2.0, downloaded 3 November 2026. The reading of codes 1, 2 and 3 as in, out and all is ours, from the column heading and the check above. Totals are ours.

In all 55,131 hours that have the three codes, code 3 equals code 1 plus code 2 without a single exception, so the guess holds and the safe rule is: use code 3 only. Counter 1, which has run since 2015, then gives between about 2.3 and 2.7 million bikes a year, with 2018 the busiest of the years shown and 2021 the quietest. Two smaller checks belong in any write-up: 2023 has 8,748 counted hours instead of 8,760, so twelve are missing, and the file reaches further than its description says. Both are worth a sentence, not a panic.

1. **Reproduce it.** Run Version 1 for counter 10 instead of 5. Do the numbers show the same pattern?
2. **Commuter rhythm.** For counter 1 in 2025 we found weekday averages of 682 bikes at 08:00 and 713 at 17:00, but 124 and 372 at weekends. Write the code that reproduces those four numbers.
3. **Missing hours.** Find the twelve hours of 2023 with no count at counter 1. Are they together or spread out?
4. **Explain it.** In four sentences for a non-programmer, say why the naive total was wrong and how you proved the fix.

## How is Informatik changing at Baden-Württemberg schools?

Quickly. A new compulsory subject started in 2025/26 and grows by a year at a time, while few pupils carry Informatik into the Abitur.

**Informatik in Baden-Württemberg, as the Informatik-Monitor 2026/27 records it**

| Topic | What the monitor says |
|---|---|
| New subject | Informatik und Medienbildung, compulsory across Sekundarstufe I school types from 2025/26, starting in grades 5 and 6 |
| Older profile | The profile subject IMP (Informatik, Mathematik, Physik) is being phased out |
| Hours | One of four Länder that already give four compulsory hours, the near-term target |
| Oberstufe | At most Gymnasien grade 10 is the Einführungsphase and grades 11 and 12 the Qualifikationsphase |
| Abitur uptake | About one pupil in twelve takes Informatik in the Oberstufe |

Source: Gesellschaft für Informatik, Informatik-Monitor 2026/27, Baden-Württemberg page and national overview, read 2 November 2026. We work next to the school subject, not instead of it: grades come from school, and Modern Age Coders is independent of the Land and its schools.

For a Freiburg pupil in grade 7 today, that means a compulsory subject has only just begun and is still being built up year by year. Outside lessons in Python give such a pupil depth the timetable cannot yet offer, and give an Oberstufe pupil practice for writing and reading real programs. With entries accepted from 1 September to 23 November 2026, round one of the Bundeswettbewerb Informatik is a good target for Stage 2 or 3 learners; we practise with our own problems only.

Baden-Württemberg's Christmas holidays run from 23 December 2026 to 9 January 2027 and its summer holidays from 29 July to 11 September 2027, later than most Länder, according to the KMK. Lessons continue through the holidays for anyone who wants them.

## When could my Python lessons be, in Freiburg time?

India is ahead of Freiburg, so Freiburg afternoons and early evenings fall in the mentor's evening. The rows show the gap, not set batches.

**Sample slots: Freiburg and India**

| Freiburg | India while Germany is on winter time | India once summer time starts on 28 March 2027 |
|---|---|---|
| 16:20 | 20:50 | 19:50 |
| 18:10 | 22:40 | 21:40 |
| Saturday 13:00 | 17:30 | 16:30 |

Germany's legal time (Einheitenzeitgesetz) is MEZ, UTC+1, in winter and MESZ, UTC+2, in summer; this autumn's change was on 25 October 2026 and the spring change is on 28 March 2027. India keeps UTC+5:30 all year: four and a half hours ahead of Freiburg now, three and a half from late March.

## How will I see my progress?

Five checkpoints of ours, each one something you can show.

**Five checkpoints we use with every Python learner**

| Checkpoint | Typically around | What you can show |
|---|---|---|
| First run | Week 1 | Write and run a script on your own computer |
| Choices | Week 4 | Branch with if, elif and else |
| Functions | Week 10 | Split a program into small, testable functions |
| Big files | Week 18 | Read a file of hundreds of thousands of rows |
| Self-check | Week 22 | Prove your total is right before reporting it |

### For pupils and parents

Self-check is the bike project. It is also what teachers mean by "show your working" in Informatik.
Parents of pupils receive short notes after each checkpoint.

### For adults

Adults with some spreadsheet experience often reach Big files in three to four months.
If work gets in the way, the plan bends; the mentor picks up where you are.

## Nine more courses for Freiburg learners

The same live format in English, the same regular mentor.

### School-age

Ages 9 to 18

- [Python and AI for Kids](/courses/python-ai-kids-masterclass): For younger siblings, typed Python from 9.
- [Informatik companion](/courses/informatik-companion-course-klasse-5-10): Help beside the new compulsory subject.
- [Oberstufe Informatik](/courses/informatik-abitur-course-java-python): Abitur-style Java and Python, in English.

### Data and maths

Teens and adults

- [Teen data projects](/courses/data-science-course-for-teens-python-data): Public data, charts and first models.
- [Statistics and probability](/courses/statistics-probability-maths-course): The tools for honest totals and averages.
- [Data science course](/courses/data-science-complete-masterclass-college): Python, statistics and machine learning.

### Building

Teens and adults

- [Python on the web](/courses/python-web-development-django-flask-course): From a first route to a site people can use.
- [PCEP and PCAP](/courses/pcep-pcap-python-certification-course): Towards the Python Institute certificates.
- [Git and GitHub](/courses/git-github-version-control-course-for-teens): Version control from the first commit.

## How the weekly live Python lessons fit a Freiburg week

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Afternoon** After school for pupils.
- **Evening** After lectures or work.
- **Saturday** A midday slot for anyone.

- **Two per week** Live lessons of about an hour.
- **Your mentor** The same one every week.
- **Your keyboard** You type; the mentor guides.
- **Real files** Public data, not toy lists.
- **Checked work** Homework reviewed live.
- **Group or solo** 15 to 20 learners, or one.

## Fees for online Python in Freiburg

You pay per month for eight live lessons. Here we list the fee in euro, converted with the European Central Bank reference rate; the actual charge is in US dollars and your bank changes it into euro, so the booked amount may be a little higher or lower.

- Free first class: Free. A free first lesson. A script written live. No card.
- Group batch: €90 (charged in US dollars) a month. 15 to 20 learners at a similar stage. A regular mentor. Two lessons weekly. Monthly, cancel anytime.
- One to one: €134 (charged in US dollars) a month. You and one mentor. Your pace, your data. Times that suit you.

## Online Python classes in Freiburg im Breisgau: questions

### Are the classes in German?

No. Lessons happen live and solely in English; the mentors sit in India and tune their speed and wording to each learner and their accent. As Python itself is written in English words, nothing gets lost between the explanation and the code.

### Is this a recorded course?

No. All lessons are live video calls. The mentor sees your shared screen, follows your code as you write it, answers straight away and reviews your homework in the next lesson.

### Do I need to know any Python?

No. The first stage starts from zero. If you already know some, the free first lesson places you at the right stage.

### What lesson times are possible?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Freiburg pupils often choose late afternoons, students and adults the evening or Saturday.

### Does it help with the new school subject in Baden-Württemberg?

It can add depth. Informatik und Medienbildung became compulsory in Sekundarstufe I from 2025/26, starting in grades 5 and 6. We teach alongside school; the school decides marks and the Abitur.

### Are university students and adults welcome?

Yes. The Python Masterclass and the Data Analysis course are built for adults and students, and one-to-one lessons can fit around lectures, shifts or family.

### How many learners are in a group?

15 to 20 at a similar stage. With the one-to-one plan you have two private lessons a week at agreed times.

### What currency do I pay in?

The monthly charge is made in dollars (USD). For orientation we print euro figures based on the ECB reference rate; your bank's own exchange decides the final euro debit. Your first lesson is free of charge.

### What is the bike-counter project?

A teaching project we wrote around Stadt Freiburg's open hourly bike counts. Learners find that adding every row counts bikes twice, because the all-directions row already contains the in and out rows, prove the rule on 55,131 hours, and then total counter 1 by year.

## Related pages

- [Coding classes in Baden-Württemberg](/coding-classes-in-baden-wuerttemberg): Our page for the Land.
- [Informatik Abitur BW](/informatik-abitur-baden-wuerttemberg): The exam subject in this Land.
- [Python course in Germany](/python-course-germany): Every Python course we offer.
- [Python and DSA](/python-and-dsa-for-international-students-germany): For international students.
- [Coding for adults](/coding-classes-for-adults-germany): Starting as a grown-up.
- [How we teach](/how-we-teach): The live format, step by step.

## Contact

Book the free first class at [https://learn.modernagecoders.com/online-python-classes-freiburg-im-breisgau-germany](https://learn.modernagecoders.com/online-python-classes-freiburg-im-breisgau-germany#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
