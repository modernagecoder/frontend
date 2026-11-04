---
title: "Online Python Classes in Würzburg: Live Lessons in English"
description: "Online Python classes in Würzburg, live in English: how online compares with a classroom, Bavarian Oberstufe Informatik, and a Python project on Würzburg car parks."
canonical: https://learn.modernagecoders.com/online-python-classes-wuerzburg-germany
source: src/pages/online-python-classes-wuerzburg-germany.html
---
> Online Python classes in Würzburg from Modern Age Coders are live lessons in English over video: a mentor shares the screen, watches your code as you type and adapts to your pace and accent. From the first class, pupils of about 12 and up, students and adults type their own Python, and soon handle real city data, either privately or with fifteen to twenty others.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / [Bavaria](/coding-classes-in-bavaria) / Online Python in Würzburg

Würzburg · Python, live online · Teens and adults

# Online Python classes in Würzburg

Is a live online Python class as good as sitting in a classroom? In some ways it is better and in some ways it is not, and we would rather say which. This page compares the two honestly, shows how Bavarian schools teach and examine Informatik, points Würzburg teenagers to a national contest round that closes this month, and builds a Python project on the status of Würzburg's car parks, where the answer to "which one is fullest?" depends on reading two short definitions.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; For: Pupils from about 12, students, adults; Lesson: Live video with screen sharing; Language: Python 3, typed by you; Group: Fifteen to twenty, or private; Mentors: In India, teaching in English; Start: A free first class. Rated 4.9 across 547 Google reviews.

## Which Python course fits a Würzburg learner?

A pupil heading for the Oberstufe, an adult with a job to automate, and a teenager who wants the full language.

- [Python for Teens](/courses/python-complete-masterclass-teens): The full language for 13 to 17 year olds, with tracing by hand that matches how Bavaria examines Informatik.
- [Informatik Abitur in English](/courses/informatik-abitur-course-java-python): For Oberstufe pupils: Java and Python practice, algorithms and paper-based exam technique, alongside school.
- [Python Automation](/courses/python-ai-automation-masterclass-college): For adults and students: scripts that read files, clean data and save hours of repetitive work.

## Is a live online Python class as good as a classroom course?

For programming, live online has real advantages. It also has two weaknesses, which we try to design around.

**Live online class compared with a classroom (our view)**

| Question | Live online with us | Typical classroom |
|---|---|---|
| Who sees my code? | The mentor, on my shared screen, line by line | The teacher, when they reach my desk |
| Whose computer? | My own, set up the way I will keep using it | Often a lab machine |
| Travel | None | There and back |
| Being with others | On video, less natural | In the room, easier |
| Distractions | Home can be noisy; needs a quiet corner | Classmates and the room itself |
| Language | English only | Usually German |

This comparison is our own opinion, not a study. It is meant to help you decide whether live online suits you, not to claim it suits everyone.

### Where online wins

Programming happens on a screen anyway. When the mentor sees your screen, they see exactly what you see: the error, the typo, the half-finished line. Nothing is lost in describing it.

You also learn on the machine you will use afterwards. When the course ends, your editor, your files and your habits are already where they need to be.

### Where we work harder

Being with other learners feels less natural on video. In a batch, the mentor asks learners to show and explain their programs to each other, so the class still talks, not just listens.

Concentration at home needs a quiet place and a fixed time. We keep classes to an hour, with a task every few minutes, and ask younger learners' parents to help with the quiet corner.

Classes are taught only in English, by mentors based in India, live. They match their pace and wording to each learner and get used to each accent quickly. What we never do is hand over finished code: you plan, type, run and explain your own programs, since thinking a problem through is the skill being taught.

## Which Würzburg car park is most often full?

The Smarte Region Würzburg publishes the status of the city's car parks every few minutes as open data. It is a perfect beginner's dataset, because the trap is in the words, not the code.

### The data

Parkplatzdaten Würzburg comes from the Smarte Region Würzburg, with readings supplied by WVV/SVG, and GovData records its licence as CC BY 4.0. We exported it on 3 November 2026: 356,842 readings for 18 car parks, from 25 August to 3 November 2026.

Each reading has a car park, a time and one of three status words: frei, fast voll or belegt. We save these as wuerzburg_parking.csv.

### The definitions

The dataset description defines the words exactly; in its own German, "belegt" bedeutet: 2 oder weniger Plätze frei. In English: belegt means two or fewer spaces are free. "fast voll" means at least 85 per cent of spaces are taken and more than two are free. Anything else is "frei".

Read those twice. One rule counts spaces; the other counts a percentage. That difference is the whole lesson.

**Version 1: rank by "belegt"** (Python)
```python
import csv
from collections import Counter

counts = {}
with open("wuerzburg_parking.csv", encoding="utf-8") as f:
    for row in csv.DictReader(f):
        counts.setdefault(row["car_park"], Counter())[row["status"]] += 1

def share(c, labels):
    return 100 * sum(c[l] for l in labels) / sum(c.values())

ranked = sorted(counts, key=lambda p: share(counts[p], ["belegt"]), reverse=True)
print("Car parks:", len(counts))
for p in ranked[:3]:
    print(p, round(share(counts[p], ["belegt"]), 1), "% belegt")
```
It prints Car parks: 18, then Kranengarage 7.3 % belegt, PP Residenz 3.4 % belegt and Juliusspital 3.1 % belegt.

Kranengarage wins clearly: in 7.3 per cent of readings it had two or fewer spaces left. But "two spaces left" is a much easier bar to reach in a small car park than a big one. Our own arithmetic shows why: with 50 spaces, two free means 96 per cent full; with 1,000 spaces, two free means 99.8 per cent full. Ranking by "belegt" quietly favours small car parks; the file gives no sizes, so we cannot say which car parks are small.

So Version 2 counts a reading as nearly full if it is either belegt or fast voll, which brings in the percentage rule as well. Then it lists any car park that never reached even fast voll.

**Version 2: belegt or fast voll** (Python)
```python
nearly = ["belegt", "fast voll"]
ranked = sorted(counts, key=lambda p: share(counts[p], nearly), reverse=True)
for p in ranked[:3]:
    print(p, round(share(counts[p], nearly), 1), "% belegt or fast voll")
never = [p for p in counts if share(counts[p], nearly) == 0]
print("Never even fast voll:", sorted(never))
```
It prints Juliusspital 18.2 % belegt or fast voll, Kranengarage 16.7 % belegt or fast voll, PP Residenz 13.2 % belegt or fast voll and Never even fast voll: ['PH Bahnhof', 'Skyline Hill Parkhaus'].

Now Juliusspital comes first. Neither ranking is "the truth"; they answer different questions. "Where am I most likely to find no space at all?" and "Where is it most often busy?" are both reasonable, and the program must say which it answers. Splitting by day of the week, converted from the file's UTC times to Würzburg time, adds a second surprise: the car parks are not busy on the same days.

**Share of readings belegt or fast voll, by day (our calculation, Würzburg time)**

| Car park | Tuesday | Saturday | Sunday |
|---|---|---|---|
| Juliusspital | 27.9 % | 10.0 % | 0.0 % |
| Kranengarage | 17.0 % | 36.5 % | 3.4 % |
| PP Residenz | 16.5 % | 24.2 % | 1.2 % |
| Marktgarage | 9.9 % | 28.2 % | 1.5 % |

Data: Parkplatzdaten Würzburg, Smarte Region Würzburg, data from WVV/SVG, licence CC BY 4.0, exported 3 November 2026; the status definitions are quoted from the dataset description. Rankings and shares are our own. The data does not give the number of spaces in each car park, so we do not guess sizes; the 50 and 1,000 space examples are ours.

1. **Ages 12 to 14.** Without code: if a car park has 40 spaces, how many must be taken for it to be fast voll, and how many for belegt? Repeat for 400.
2. **Ages 15 to 17.** Run both versions, then write Version 3 that ranks by fast voll alone. Predict the top car park first.
3. **Oberstufe practice.** On paper, trace share() for a Counter of 6 frei, 3 fast voll and 1 belegt with each label list. Bavaria's Informatik Abitur rewards exactly this kind of tracing.
4. **Adults.** Convert the times to Würzburg local time with zoneinfo and find the hour when Juliusspital is most often nearly full. Explain why converting matters across 25 October 2026.

## How do Würzburg Gymnasien teach and examine Informatik?

Bavaria has gone back to a nine-year Gymnasium, puts Informatik into grade 11 for everyone, and examines it on paper.

**Informatik in the Bavarian Gymnasium**

| Stage | What the rules say |
|---|---|
| Grades 5 to 13 | The reintroduced nine-year Gymnasium covers all of them in 2025/26 |
| Grades 9 and 10, NTG branch | Compulsory Informatik |
| Grade 11 (Einführungsphase) | Every pupil, in every branch, has two required informatics lessons a week |
| Grades 12 and 13 (Qualifikationsphase) | Informatik as an Abitur subject where chosen |
| Written Abitur | Set centrally; mostly programming on paper, no work at a computer |

Read on 2 November 2026: the Gymnasium pages of the Bavarian education ministry and the Bavarian entry in the GI Informatik-Monitor for 2026/27. Destatis counts Würzburg 133,258 and Bayern at 13,248,928 (31 December 2024). Learners from Höchberg, Veitshöchheim, Gerbrunn, Kitzingen and Ochsenfurt come under the same rules.

### Why paper matters

Because the Bavarian Informatik Abitur is written without a computer, a pupil cannot test an idea by running it. They need to read code and know what it does. In our classes we often ask for the output before anyone presses Run, and sometimes hide the Run button altogether.

Our role sits next to the school, never above it: grades come from the school course and the Abitur, while we add practice time and someone to ask.

### A contest closing on 23 November 2026

Round 1 of the 45th Bundeswettbewerb Informatik runs from 1 September to 23 November 2026. It is open to young people up to 21 who are not yet studying or working, and group work is allowed in round 1. Round 2, from early 2027 to April 2027, must be done alone and, depending on Land and school, can count as the besondere Lernleistung in the Abitur.

We are not connected to BWINF and never use its tasks in class; learners are pointed to the organisers' own free archive.

## When do online Python classes run in Würzburg time?

Times are chosen when you book and shown in your own clock. Here is how a few Würzburg slots look for a mentor in India.

**Würzburg slots against the Indian clock**

| Würzburg | India during German winter time | India during German summer time |
|---|---|---|
| Tuesday 16:10 | 20:40 | 19:40 |
| Wednesday 18:00 | 22:30 | 21:30 |
| Saturday 09:15 | 13:45 | 12:45 |

German winter time (MEZ) is UTC+1 and summer time (MESZ) UTC+2, under the Einheitenzeitgesetz. Winter time began on 25 October 2026; summer time returns on 28 March 2027. Indian time does not change (UTC+5:30), so the mentor's clock reads 4 h 30 later than Würzburg's in winter and 3 h 30 later in summer. The slots illustrate; they are not fixed batches.

**Bavarian holidays still to come in 2026/27 (KMK table)**

| Break | Dates |
|---|---|
| Christmas | 24 December 2026 to 8 January 2027 |
| Easter | 22 March to 2 April 2027 |
| Whitsun | 18 to 28 May 2027 |
| Summer | 2 August to 13 September 2027 |

From the KMK holiday overview for 2026/2027, version of 9 October 2025, row Bayern; the autumn break ran from 2 to 6 November 2026. Classes continue in the holidays if you wish.

## What can a Würzburg learner do after each stage?

Five stages of our own, used to place learners and to describe progress. They are not a school or exam scale.

**Python stages for Würzburg learners (ours)**

| Stage | The learner can |
|---|---|
| 1. Read | Say what a five-line program prints without running it |
| 2. Write | Write loops and conditions that work first time more often than not |
| 3. Count | Use dictionaries and Counter to summarise a file |
| 4. Define | Turn a written rule, like the belegt definition, into code and test it |
| 5. Question | Explain why two fair rankings of the same data disagree |

### For parents and adults

The car-park project lives at stage 5. Seeing that a ranking hangs on its definition is useful in any job that touches data.
Progress reports describe what was built and could be explained.

### For learners

Before you rank anything, write down exactly what the category means.
If two rankings disagree, ask which question each one answers.

## Nine more courses for Würzburg learners

All taught live, in English, by a mentor who stays with you, privately or in a batch.

### School years

Grades 5 to 13

- [Informatik Companion](/courses/informatik-companion-course-klasse-5-10): Klasse 5 to 10 support in English.
- [Informatics contests](/courses/german-informatics-competitions-course-biber-bwinf-bwki): BwInf-style problems, written by us.
- [Problem solving for teens](/courses/problem-solving-dsa-masterclass-teens): Algorithms and data structures, step by step.

### Building with Python

Ages 13 and up

- [Python on the web](/courses/python-web-development-django-flask-course): Websites built in Python, from an empty project to a working app.
- [Data science for teens](/courses/data-science-course-for-teens-python-data): Teen projects that turn city data into charts and first predictions.
- [SQL for teens](/courses/mysql-mastery-for-teens): Databases that Python can query.

### Adults

Students and professionals

- [Python masterclass](/courses/python-programming-masterclass-zero-to-advanced-college): The complete language for grown-ups, beginners welcome.
- [PCAP preparation](/courses/pcap-python-certification-prep-course): Associate-level Python Institute exam topics.
- [Data structures and algorithms](/courses/data-structures-algorithms-masterclass-college): Interview-level problem solving.

## Where do live Python classes sit in a Würzburg week?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **After school** Late afternoons for Würzburg pupils.
- **After work** Evening slots for students and adults.
- **Private** Arranged with your mentor.

- **Screen shared** The mentor sees exactly what you see.
- **Your own setup** Learn on the computer you will keep using.
- **Read before run** Predict the output, then check it.
- **Plain English** Clear speech at a pace that suits you.
- **One mentor** The same person through the course.
- **Batch or private** Fifteen to twenty learners, or one.

## Fees for online Python in Würzburg

A month of classes, eight live lessons, has one fee. That fee is displayed in euro at the European Central Bank reference rate and collected in US dollars, with your bank converting it, so your statement may show a slightly different euro figure.

- Free first class: Free. A free first class. A first program and your goals discussed. No card required.
- Group batch: €90 (charged in US dollars) a month. Fifteen to twenty learners at a similar stage. A regular mentor. Two live lessons each week. Monthly, no fixed term.
- One to one: €134 (charged in US dollars) a month. A private mentor. Your pace and your projects. Times you choose.

## Online Python classes in Würzburg: frequent questions

### Are the classes in German?

No, never. Lessons happen live, in English. The mentor keeps an even pace, gets used to the way you speak and says things another way if a sentence does not land. Python's keywords are English anyway.

### Is learning Python online as effective as in a classroom?

For programming it often works well, because the mentor sees your screen and your exact error. It needs a quiet place and a fixed time at home. The free first class is the easiest way to find out if it suits you.

### Does this help with the Bavarian Informatik Abitur?

With the underlying skills, yes. Bavaria writes the paper centrally and asks for code on paper, without a computer, so our lessons include plenty of hand tracing. Grades still come only from the school course and the Abitur itself.

### What is the Bundeswettbewerb Informatik?

A national informatics contest for young people up to 21 who are not yet studying or working. Round 1 of the 45th contest runs from 1 September to 23 November 2026 and allows group work; round 2, in 2027, is done alone.

### When are classes in Würzburg time?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Pupils usually choose late afternoons, adults evenings or Saturday mornings.

### Where are the mentors based?

In India. They teach live over video. India is 4 hours 30 minutes ahead of Würzburg in winter and 3 hours 30 minutes in summer.

### Do I need any software?

Only Python and a free code editor; we set both up together during lesson one. Bring a computer with a keyboard and a steady internet line.

### How big are the groups?

A Würzburg batch has between fifteen and twenty people working at about the same level. Learning privately instead means two personal lessons weekly, timed around you.

### How do I pay?

Each month. You see euro prices based on the reference rate of the European Central Bank, but the card is charged in US dollars and converted by your bank, so expect a small gap on the statement. Lesson one is free of charge.

### Will I be allowed to use AI to write code?

In class you write your own code and explain it, because that is how you learn to think through a problem. Adults later learn how to check AI-written code with tests rather than trust it.

## Related pages

- [Coding classes in Bavaria](/coding-classes-in-bavaria): Everything Bavaria-wide on one page.
- [Python course in Germany](/python-course-germany): The national Python overview.
- [Coding for teens](/coding-classes-for-teens-germany): Choosing a course as a teenager.
- [Python and DSA for students](/python-and-dsa-for-international-students-germany): For university students in Germany.
- [Competitions in Germany](/math-and-coding-competitions-germany): Contests by date and age.
- [How we teach](/how-we-teach): Our live lessons explained.

## More pages for this Land

Part of the guide: [Coding classes in Bavaria](/coding-classes-in-bavaria)

### Cities and pages in Bavaria

- [Coding and AI classes in Fürth](/coding-and-ai-classes-in-fuerth-germany)
- [Coding classes for kids in Erlangen](/coding-classes-for-kids-in-erlangen-germany)
- [Coding classes for kids in Ingolstadt](/coding-classes-for-kids-in-ingolstadt-germany)
- [Coding classes for kids in Munich](/coding-classes-for-kids-munich)
- [Coding classes for kids in Nuremberg](/coding-classes-for-kids-nuremberg)
- [Coding for international school students in Munich](/coding-for-international-school-students-munich)
- [Informatik-Abitur Bayern (Unterricht auf Englisch)](/informatik-abitur-bayern)
- [Maths tutor in Munich, in English](/math-tutor-munich-in-english)
- [Online Python classes in Augsburg](/online-python-classes-augsburg-germany)
- [Online Python classes in Regensburg](/online-python-classes-regensburg-germany)
- [Programmieren lernen für Kinder in München (auf Englisch)](/programmieren-lernen-kinder-muenchen)
- [Programmieren lernen für Kinder in Nürnberg](/programmieren-lernen-kinder-nuernberg)

More guides: [Coding classes in North Rhine-Westphalia](/coding-classes-in-north-rhine-westphalia), [Coding classes in Lower Saxony](/coding-classes-in-lower-saxony), [Coding classes in Land Bremen](/coding-classes-in-land-bremen), [Coding classes in Hesse](/coding-classes-in-hesse), [Coding classes in Saxony-Anhalt](/coding-classes-in-saxony-anhalt), [Coding classes in Schleswig-Holstein](/coding-classes-in-schleswig-holstein), [Coding classes in Baden-Württemberg](/coding-classes-in-baden-wuerttemberg), [Coding classes in Saarland](/coding-classes-in-saarland), [Coding classes in Rhineland-Palatinate](/coding-classes-in-rhineland-palatinate), [Coding and maths in Berlin](/coding-and-maths-classes-in-berlin-germany), [Coding and maths in Hamburg](/coding-and-maths-classes-in-hamburg-germany), [Coding classes in Saxony](/coding-classes-in-saxony), [Coding classes in Thuringia](/coding-classes-in-thuringia), [Coding classes in Brandenburg](/coding-classes-in-brandenburg), [Coding classes in Mecklenburg-Vorpommern](/coding-classes-in-mecklenburg-vorpommern)

## Contact

Book the free first class at [https://learn.modernagecoders.com/online-python-classes-wuerzburg-germany](https://learn.modernagecoders.com/online-python-classes-wuerzburg-germany#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
