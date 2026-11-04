---
title: "Online Python Classes in Mannheim: Live, in English"
description: "Online Python classes in Mannheim, live in English: how live lessons differ from video courses, the first month week by week, BW Informatik and a nextbike project."
canonical: https://learn.modernagecoders.com/online-python-classes-mannheim-germany
source: src/pages/online-python-classes-mannheim-germany.html
---
> Modern Age Coders teaches Python to Mannheim learners in live online lessons held in English: a regular mentor and the learner share a screen, write code together and fix errors as they happen, at a pace and in an accent the learner can follow. Nine year olds can join, and so can teenagers and adults with or without experience, either in a class of 15 to 20 or alone with the mentor, in Mannheim afternoons, evenings or weekends.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / [Coding classes in Baden-Württemberg](/coding-classes-in-baden-wuerttemberg) / Python in Mannheim

Mannheim · Python · Live online

# Online Python classes in Mannheim

Search for online Python and you will mostly find videos. They work for some people, but most beginners stall the first time an error message appears and nobody is there to read it with them. Our Python classes for Mannheim are live: a mentor, a shared screen and real code, in English. Here is how that compares with the alternatives, what the first month looks like, where Python sits next to Informatik in Baden-Württemberg, and a project on Mannheim's bike-share data that keeps changing while you study it.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Language: Python 3; Learners: From age 9 to adult; Format: Live video and shared screen; Pace: Two lessons a week; Group: 15 to 20 learners, or 1-on-1; First lesson: Free, no card needed. Rated 4.9 across 547 Google reviews.

## Python courses for Mannheim learners

Three courses for three situations: a child ready to type, a teenager who wants the whole language, and an adult who would like a recognised Python certificate at the end.

- [Python and AI for Kids](/courses/python-ai-kids-masterclass): For 9 to 12 year olds. Short typed programs, drawings, games and small projects with real data, paced for young typists.
- [Python for Teens](/courses/python-complete-masterclass-teens): For 13 to 18 year olds. From variables to classes, files and data, with the reading and tracing skills an Informatik course values.
- [PCEP and PCAP Certification](/courses/pcep-pcap-python-certification-course): For adults and older teens who want to finish with the Python Institute's entry and associate exams in view.

## How is a live online Python class different from a recorded course?

All three formats can teach Python. They differ in what happens at the moment a learner gets stuck, which for a beginner is several times every lesson.

**Three ways to learn Python, compared (our assessment)**

|  | Recorded video course | In-person class | Live online class (ours) |
|---|---|---|---|
| When you are stuck | Pause, search, hope | Raise a hand and wait for the teacher | The mentor sees your screen and helps at once |
| Who sees your code | Nobody | The teacher, when they reach your desk | The mentor, line by line, as you type |
| Pace | Yours, with nobody checking | The room's | Yours, with someone checking |
| Travel in Mannheim | None | To the venue and back | None |
| Language | Whatever the video uses | Usually German | English only, at your pace and accent |

Our own comparison. We teach only the third format, so read it as our view rather than an independent test.

### Why the shared screen matters

Most beginner errors are tiny: a missing colon, a capital letter, a space that Python treats as meaningful. On a video they can cost an evening. With a mentor watching the screen they cost a minute, and the learner sees how the error was found, which is the real lesson.

Learners share their screen for most of each lesson, so they are typing, not watching.

### Why English

Every class is taught in English only. Python itself reads like short English sentences, its error messages are in English, and nearly all of its documentation is too. Learning in English removes a translation step most German learners otherwise do in their heads.

The mentors, who teach from India, keep their speech clear and unhurried and soon tune in to how each learner talks.

## What does the first month of live online Python look like?

Eight lessons, two a week. Here is the usual route for a teenage or adult beginner; children take the same steps with smaller programs and more time per step.

1. **Week 1: Python answers back.** Install Python or open a browser editor with the mentor, then print, input and arithmetic. By the second lesson the learner has written a small calculator that asks for two numbers.
2. **Week 2: decisions.** if, elif and else, comparisons and the first error messages read aloud together. Project: a quiz that keeps score.
3. **Week 3: repetition.** for and while loops, and the habit of predicting what a loop prints before running it. Project: a times-table trainer.
4. **Week 4: collections and a first file.** Lists and dictionaries, then reading a small CSV file of real data. The bike project below is the kind of file a learner opens for the first time here, in a simpler version.

Our own course plan for beginners. The pace is set by the learner, not by the calendar.

At the end of the month the mentor writes a short note: what the learner can now do alone, what still needs practice, and which course suits them next. For a child that note goes to a parent; adults get it themselves. Nobody is moved on before they are ready, and nobody is held back if they are flying.

## How fast does Mannheim's bike-share data change?

Stadt Mannheim publishes the live status of every VRNnextbike station in the city as open data under the Datenlizenz Deutschland Namensnennung 2.0. Unlike a yearly statistic, this file is a moment. That makes it a perfect first lesson in data that moves.

### The file

The dataset is called VRN-Nextbike on the city's open data portal. Each download is a CSV file with one row per station: its name, its number, how many bikes are available, how many racks it has and more. Ours had 103 stations.

There is no column saying when the snapshot was taken. So we downloaded it three times on 3 November 2026, at 14:45, 14:50 and 14:58 German time, and named each file after the moment we fetched it.

### The questions

How many bikes does the 14:45 file show, and how many stations are empty? Then: how much changed five minutes later, and eight minutes after that?

A learner at the end of their first month can write both programs below. The answers are short; the thinking behind them is not.

**Program 1: one snapshot** (Python)
```python
import csv

BIKES = "Anzahl verfügbare Fahrräder"

def load(path):
    with open(path, encoding="utf-8-sig") as f:
        return {r["Stationsnummer"]: r for r in csv.DictReader(f, delimiter=";")}

first = load("nextbike_1445.csv")
bikes = sum(int(r[BIKES] or 0) for r in first.values())
empty = sum(1 for r in first.values() if int(r[BIKES] or 0) == 0)
print("Stations:", len(first), " Bikes shown:", bikes, " Empty stations:", empty)
```
It prints Stations: 103 Bikes shown: 435 Empty stations: 22.

At 14:45 the file showed 435 bikes across 103 stations, and 22 stations had none. That is our count of one column at one moment, not an official fleet size: bikes that were being ridden, or parked away from a station, are not in it. A careful learner writes that sentence next to the number before anyone asks.

**Program 2: compare snapshots** (Python)
```python
def compare(a, b):
    moved = [s for s in a if s in b and a[s][BIKES] != b[s][BIKES]]
    before = sum(int(a[s][BIKES] or 0) for s in a)
    after = sum(int(b[s][BIKES] or 0) for s in b)
    return len(moved), after - before

second = load("nextbike_1450.csv")
third = load("nextbike_1458.csv")
print("14:45 to 14:50, stations changed and net bikes:", compare(first, second))
print("14:50 to 14:58, stations changed and net bikes:", compare(second, third))
```
Run after Program 1. It prints 14:45 to 14:50, stations changed and net bikes: (17, -2) and 14:50 to 14:58, stations changed and net bikes: (0, 0).

**Three downloads of the Mannheim nextbike file on 3 November 2026 (our comparison)**

| Downloaded (German time) | Stations that changed since the last download | Change in bikes shown |
|---|---|---|
| 14:45 | First download | Baseline: 435 |
| 14:50 | 17 | -2 |
| 14:58 | 0 | 0 |

Data: Stadt Mannheim, VRN-Nextbike (free_bike_status), mannheim.opendatasoft.com via Open Data BW, licence Datenlizenz Deutschland Namensnennung 2.0, downloaded on 3 November 2026 at the times shown. All counts and comparisons are our own.

In five minutes, 17 of 103 stations changed. The station Universität Schloss went from 20 bikes to 14, and the Hauptbahnhof from 3 to 8. Then the third download, eight minutes later, was byte for byte identical to the second. Did nobody take a bike for eight minutes? Possibly, but the likelier explanation is that the published file is refreshed at intervals rather than every second. The data does not tell us which, so the honest conclusion is narrower: a new download is not proof of new data.

Two more surprises wait in the file for curious learners. Only 46 of the 103 stations list a number of racks at all, and at 6 of those 46 the file shows more bikes than racks, presumably bikes parked beside the stand. A number that looks like a limit is not always a limit. Each of these is a small, true observation, and saying exactly how far it goes is a skill that matters far beyond Python.

1. **Ages 9 to 12.** Count bikes at three stations from Program 1's file by hand, then let Python do it. Which was faster, and which made fewer mistakes?
2. **Ages 13 to 18.** Change Program 2 so it also prints the station with the biggest change, and its name.
3. **Adults.** Download the file yourself every five minutes for an hour, saving each with the time in its name, and chart how many stations change each time.
4. **Going further.** Find the stations where bikes exceed racks and decide how you would report them without implying that something is wrong.

## How does Python fit next to Informatik in Baden-Württemberg?

Baden-Württemberg is changing fast. A new compulsory subject has reached grades 5 and 6, while in the Oberstufe Informatik is still a minority choice.

### The new subject

From the 2025/26 school year, Baden-Württemberg made Informatik und Medienbildung compulsory across secondary school types, starting in grades 5 and 6 and growing year by year, according to the GI Informatik-Monitor 2026/27.

### An older profile fading out

The profile subject IMP, which combined Informatik, Mathematik and Physik, is being phased out. At Gemeinschaftsschulen it can still be offered in grades 8 to 10 while it lasts.

### The Oberstufe gap

The same monitor names Baden-Württemberg among the Länder where only about one pupil in twelve takes Informatik in the Oberstufe. Most Mannheim teenagers therefore finish school without an Informatik Abitur course.

That is where a Python class earns its place. A Mannheim pupil in grades 5 to 7 meets the new subject at school and can go further with us at their own pace; a teenager whose school offers little in the Oberstufe can still learn a real programming language properly. We teach next to school, not instead of it, and the school's subject and its marks are what count.

Teenagers who enjoy algorithmic puzzles can test themselves nationally, and 23 November 2026 is the date to remember: it closes the first round of the 45th Bundeswettbewerb Informatik, open since 1 September, and the third round of the Jugendwettbewerb Informatik. BWINF organises both; we are independent of it and write our own practice problems.

## When are live Python lessons in Mannheim time?

Afternoons for school pupils, early evenings for adults, and weekend slots for anyone. Mentors teach from India, which is ahead of Mannheim.

**Illustrative Mannheim lesson times and the mentor's time in India**

| Mannheim | Mentor in India, winter | Mentor in India, summer |
|---|---|---|
| 15:40, after school | 20:10 | 19:10 |
| 18:20, after work | 22:50 | 21:50 |
| Saturday 11:30 | 16:00 | 15:00 |
| Sunday 14:00 | 18:30 | 17:30 |

In Germany the Einheitenzeitgesetz sets MEZ (UTC+1) for winter and MESZ (UTC+2) for summer. This winter began on 25 October 2026; summer time comes back on 28 March 2027. With India fixed at UTC+5:30, the mentor is four and a half hours ahead of Mannheim until then and three and a half hours ahead afterwards. Not fixed batch times.

Baden-Württemberg's school holidays for 2026/27, from the KMK table: autumn 26 to 31 October 2026, a Christmas break lasting until 9 January 2027 (from 23 December), Easter on 25 March and from 30 March to 3 April 2027, a long Pfingsten break from 18 to 29 May 2027, and summer from 29 July to 11 September 2027. Lessons continue through all of them unless you ask for a pause.

Mannheim had 318,035 residents on 31 December 2024, according to Destatis. Across the Rhine, Ludwigshafen am Rhein (177,222) is in Rheinland-Pfalz, and Heidelberg (155,756) is a short ride up the Neckar; learners in all three cities, and in Viernheim or Schwetzingen, join the same online lessons. Only the school holidays differ where the Land does.

## How a Mannheim learner can tell the Python is working

Our own checkpoints, reported in the mentor's monthly note.

**Python checkpoints (ours)**

| Checkpoint | Usually by | The learner can |
|---|---|---|
| Error reader | Week 2 | Say which line an error points to and what it means |
| Loop predictor | Week 3 | Write down what a loop will print before running it |
| File opener | Week 4 | Read a small CSV file and count something in it |
| Function writer | Month 2 | Wrap repeated code in a function and reuse it |
| Careful reporter | Month 3 | State what a result shows and what it does not |

### For learners

Write the time into every file name when the data is live.
If two downloads match exactly, ask whether the data changed or only the clock did.

### For parents

Ask your child what their program cannot tell you. A good answer is a sign of real understanding.
Time at the keyboard says little; a clear explanation of their own code says a lot.

## Nine more courses for Mannheim Python learners

For learners who have the basics. Each is live, in English, with a regular mentor, in a group or solo.

### Python and data

Ages 13 and up

- [Data science for teens](/courses/data-science-course-for-teens-python-data): Charts, cleaning and a first model on real files.
- [Data analysis for adults](/courses/data-analysis-mastery-course-college): Python and SQL for reports that build themselves.
- [Machine learning for teens](/courses/ai-ml-masterclass-teens): Training and testing models, maths included.

### Python on the web

Ages 13 and up

- [Django and Flask](/courses/python-web-development-django-flask-course): Turning a script into a site with pages and forms.
- [Backend for teens](/courses/backend-coding-masterclass-for-teens): APIs and databases behind real apps.
- [Git and GitHub](/courses/git-github-version-control-course-for-teens): Saving, sharing and undoing code like a team does.

### Python for school and contests

Ages 12 to 19

- [Informatik Abitur in English](/courses/informatik-abitur-course-java-python): Oberstufe Informatik topics in Python or Java.
- [Problem solving for teens](/courses/problem-solving-dsa-masterclass-teens): Data structures and algorithms, step by step.
- [Competitive programming](/courses/competitive-programming-for-teens-course): Contest-style problems, written by us.

## How live Python lessons are arranged for Mannheim

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **After school** Afternoon slots for school pupils in Mannheim.
- **After work** Early evening, the usual choice for adults.
- **Weekend** Saturday or Sunday, late morning or afternoon.

- **Screen shared** The mentor follows the code as it is written.
- **Two a week** Close enough together that nothing fades.
- **English, plainly** Short sentences, said again on request.
- **All live** There are no recordings to watch alone.
- **One mentor** The same teacher from the first lesson on.
- **Group or solo** A class of 15 to 20, or private lessons.

## Fees for live Python lessons in Mannheim

Lessons are billed by the month, eight at a time. On this page the monthly fee is converted to euro with the European Central Bank reference rate; at checkout the charge runs in US dollars and your bank makes the final conversion, so a cent or two of difference is normal.

- Free first class: Free. A free first Python lesson. A first program written together. No card needed.
- Group batch: €90 (charged in US dollars) a month. 15 to 20 learners at one level. A regular mentor. Two lessons a week. Monthly, stop any month.
- One to one: €134 (charged in US dollars) a month. A mentor for one learner. Your pace, your projects. Times agreed in advance.

## Online Python classes in Mannheim: questions answered

### Are the classes in German?

No. All lessons are live and taught in English only. The mentor speaks clearly, adapts to the learner's pace and accent, and repeats in simpler words when asked. Python's keywords and error messages are English anyway.

### Is a live online lesson really better than a video course?

For most beginners, yes, because a mentor sees the code as it is typed and helps the moment an error appears. Video courses suit some confident self-learners; we only teach live.

### What does the learner need?

A computer with a real keyboard, an internet connection that holds a video call and a headset. Python costs nothing; setting it up is part of lesson one.

### From what age can my child learn Python?

Nine is the usual starting age for typed code with us; six to eight year olds begin with Scratch blocks instead. Adults of any age are welcome.

### How does this relate to Informatik at a Baden-Württemberg school?

Baden-Württemberg introduced the compulsory subject Informatik und Medienbildung from 2025/26, starting in grades 5 and 6. Our lessons are extra practice and depth next to that; the school subject and its marks are what count.

### When are lessons in Mannheim time?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. School pupils often choose afternoons, adults early evenings.

### Where are the mentors?

They teach from India. While Germany is on winter time the mentor's clock reads four and a half hours later than Mannheim's, so 15:40 here is 20:10 there; after the change on 28 March 2027 the gap shrinks to three and a half hours.

### Can adults earn a Python certificate?

Our PCEP and PCAP course prepares for the Python Institute's exams, which are taken with the Python Institute, not with us. We do not award German qualifications.

### How is the fee shown and charged?

Monthly, for eight lessons. It is shown here in euro at the European Central Bank reference rate and charged in US dollars, which your bank converts, so the amount on your statement may differ very slightly. The first lesson is free.

### What will the learner build in the first month?

A calculator, a scoring quiz, a times-table trainer and a first program that reads a small data file, such as a simpler version of the Mannheim bike project on this page.

## Related pages

- [Coding classes in Germany](/coding-classes-in-germany): The hub for all our Germany pages.
- [Coding classes in Baden-Württemberg](/coding-classes-in-baden-wuerttemberg): The Land page for Baden-Württemberg.
- [Python classes for kids](/python-classes-for-kids-germany): Typed code for primary-age learners.
- [Coding for adults](/coding-classes-for-adults-germany): Starting Python later in life.
- [Informatik by Land](/informatik-in-german-schools-by-state): The rules in all sixteen Länder.
- [Bundeswettbewerb Informatik](/bundeswettbewerb-informatik-preparation): Preparing for the national contest.

## More pages for this Land

Part of the guide: [Coding classes in Baden-Württemberg](/coding-classes-in-baden-wuerttemberg)

### Cities and pages in Baden-Württemberg

- [Coding and AI classes in Pforzheim](/coding-and-ai-classes-in-pforzheim-germany)
- [Coding classes for kids in Heidelberg](/coding-classes-for-kids-in-heidelberg-germany)
- [Coding classes for kids in Karlsruhe](/coding-classes-for-kids-in-karlsruhe-germany)
- [Coding classes for kids in Reutlingen](/coding-classes-for-kids-in-reutlingen-germany)
- [Coding classes for kids in Ulm](/coding-classes-for-kids-in-ulm-germany)
- [Coding classes for kids in Stuttgart](/coding-classes-for-kids-stuttgart)
- [Coding for international school students in Stuttgart](/coding-for-international-school-students-stuttgart)
- [Informatik-Abitur Baden-Württemberg (Unterricht auf Englisch)](/informatik-abitur-baden-wuerttemberg)
- [Online Python classes in Freiburg im Breisgau](/online-python-classes-freiburg-im-breisgau-germany)
- [Online Python classes in Heilbronn](/online-python-classes-heilbronn-germany)
- [Programmieren lernen für Kinder in Stuttgart](/programmieren-lernen-kinder-stuttgart)

More guides: [Coding classes in North Rhine-Westphalia](/coding-classes-in-north-rhine-westphalia), [Coding classes in Lower Saxony](/coding-classes-in-lower-saxony), [Coding classes in Land Bremen](/coding-classes-in-land-bremen), [Coding classes in Hesse](/coding-classes-in-hesse), [Coding classes in Bavaria](/coding-classes-in-bavaria), [Coding classes in Saxony-Anhalt](/coding-classes-in-saxony-anhalt), [Coding classes in Schleswig-Holstein](/coding-classes-in-schleswig-holstein), [Coding classes in Saarland](/coding-classes-in-saarland), [Coding classes in Rhineland-Palatinate](/coding-classes-in-rhineland-palatinate), [Coding and maths in Berlin](/coding-and-maths-classes-in-berlin-germany), [Coding and maths in Hamburg](/coding-and-maths-classes-in-hamburg-germany), [Coding classes in Saxony](/coding-classes-in-saxony), [Coding classes in Thuringia](/coding-classes-in-thuringia), [Coding classes in Brandenburg](/coding-classes-in-brandenburg), [Coding classes in Mecklenburg-Vorpommern](/coding-classes-in-mecklenburg-vorpommern)

## Contact

Book the free first class at [https://learn.modernagecoders.com/online-python-classes-mannheim-germany](https://learn.modernagecoders.com/online-python-classes-mannheim-germany#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
