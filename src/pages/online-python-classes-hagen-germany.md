---
title: "Online Python Classes in Hagen: Live Lessons in English"
description: "Online Python classes in Hagen, live in English: what a mentor-led class adds, NRW's paper-only Informatik Abitur, and a Hagen rain data task that breaks a float."
canonical: https://learn.modernagecoders.com/online-python-classes-hagen-germany
source: src/pages/online-python-classes-hagen-germany.html
---
> Modern Age Coders teaches online Python classes for Hagen as live video lessons in English: a mentor follows what each learner types and makes sure they understand why the code works. There are separate courses for children from 9, for Oberstufe pupils facing the Informatik Abitur and for adults, each taught by one regular mentor to a batch of fifteen to twenty people or to a single learner.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / [North Rhine-Westphalia](/coding-classes-in-north-rhine-westphalia) / Python in Hagen

Hagen · Python, live and online · Ages 9 to adult

# Online Python classes in Hagen

Add up a year of Hagen rainfall in Python and you can get 970.9999999999999 millimetres instead of 971. Nothing is broken; that is how computers store decimals, and it is exactly the kind of thing a learner alone with a video never notices. Our live online Python classes put a mentor beside you, in English, to catch it. This page explains what that looks like, how Informatik works in North Rhine-Westphalia up to an Abitur written without a computer, and the Hagen rain project in full.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Language: Python 3, typed from day one; Learners: From age 9 to adult; Lessons: Live video, two hours a week; Class size: Fifteen to twenty, or one to one; Mentors: Based in India, English only; Start: Free first class. Rated 4.9 across 547 Google reviews.

## Which Python course fits a Hagen learner?

One for children, one for Oberstufe pupils heading for an Informatik exam, and one for anyone from 13 who wants a recognised Python qualification to aim at.

- [Python and AI for Kids](/courses/python-ai-kids-masterclass): For children of nine to twelve, roughly two terms and a half. A child types every line, draws with turtle graphics, builds small games and reaches real data files.
- [Informatik Abitur in English](/courses/informatik-abitur-course-java-python): Oberstufe pupils aged 16 to 19, six months, Grundkurs and Leistungskurs paths. Java and Python, data structures, and tracing code on paper.
- [PCEP and PCAP Preparation](/courses/pcep-pcap-python-certification-course): From about 13 to adult, five months, joinable any month. Python from zero to the level of the Python Institute's two entry exams.

## What does a live mentor add to learning Python online?

Videos explain. A mentor notices. Most of what goes wrong for a beginner is something only a person watching would notice.

**What tends to happen to a beginner, alone and with a live mentor (from our classes)**

| Moment | Alone with a video | With a live mentor |
|---|---|---|
| First error message | Copied into a search engine, often misread | Read aloud together, line number first |
| Indentation slip | Program silently does the wrong thing | Spotted on the shared screen within seconds |
| A strange decimal like 970.9999999999999 | Assumed to be a bug in Python | Explained: how computers store decimals |
| Stuck for twenty minutes | The evening ends there | One question from the mentor unblocks it |
| Code that works | Moved on from | Explained back in the learner's own words |

Our own observations from teaching live classes, not a study. The decimal row is the subject of the Hagen project below.

Concretely: sixty minutes of video call, one screen shared at a time. The learner types in their own editor on their own computer; the mentor sees it, asks questions and only very rarely takes over the keyboard. Between classes there is one short task. In a batch, learners share their screens in turn, so a mistake one person makes becomes a lesson for everyone.

### In English, at your pace

Every class is taught in English by mentors based in India. We offer no lessons in German, and we say so before anyone books.

Mentors speak calmly, rephrase, and get used to each learner's accent. Since Python's keywords and error messages are English anyway, the class and the code speak the same language.

### What you need

A laptop or desktop computer, a stable connection and a headset. Python costs nothing; setting it up is the first job you and your mentor do together.

A tablet is fine for a ten year old watching Scratch, but Python needs a real keyboard.

## How does Informatik work in Hagen schools, up to the Abitur?

It starts early, in grades 5 and 6 for every pupil, and it ends on paper: NRW's written Informatik Abitur uses no computer.

According to the Informatik-Monitor 2026/27 of the Gesellschaft für Informatik, Informatik is required in grades 5 and 6 at every general school type in North Rhine-Westphalia. In the Oberstufe it can be taken as a three-hour Grundkurs from the Einführungsphase and, in the Qualifikationsphase, either as a three-hour Grundkurs or a five-hour Leistungskurs.

**The written Informatik Abitur in North Rhine-Westphalia**

| Question | What the GI reports |
|---|---|
| Who sets the tasks? | The Land, centrally, the same for every school |
| How many tasks? | One set of four for the Grundkurs and one of four for the Leistungskurs |
| Who chooses? | The teacher picks two of the four in a Grundkurs and three in a Leistungskurs; pupils do not choose |
| Is a computer used? | No: "Der Einsatz eines Computers ist für die Bearbeitung der schriftlich Abituraufgaben nicht vorgesehen." |
| Which aids? | A German spelling dictionary and a scientific calculator or CAS |
| Written or oral? | Always written in a Leistungskurs; written or oral in a Grundkurs |

Quoted and summarised from the GI's Informatik-Monitor 2026/27, NRW entry, as published on 2 November 2026 when we read it.

A paper exam changes how you should learn to program. With no computer to run the code, a pupil must predict what it does: trace the loop, track every variable, know what a number will look like. That is why our Python classes ask learners to predict output before they run anything, and why the rain project below is a good exam habit as much as a coding one. We teach alongside the school course and award no grades; the school's Informatik is the one that counts. Our [Informatik Abitur in NRW](/informatik-abitur-nrw) page goes deeper.

## Why does Python say Hagen had 970.9999999999999 mm of rain?

A simple question, how much rain fell in a year, leads straight to one of the most useful lessons in programming.

### The data

Between June 1978 and December 2007 the Deutscher Wetterdienst operated a station named Hagen-Fley. Its day-by-day observations are open data (CC BY 4.0: reuse is fine as long as the DWD is credited), and our copy dates from 3 November 2026.

From it we made hagen_regen.csv: one row per day from 1 January 1979 to 31 December 2007, 10,592 days, with the date and the rainfall in millimetres, always written with one decimal place, such as 2.2.

### The question

Which year was the wettest, and how much rain fell in 1987? Version 1 adds up each year's daily values as ordinary decimal numbers (floats) and prints the totals.

It also asks a yes-or-no question that looks too easy to fail: was 1987's total exactly 971.0 mm?

**Version 1: add the decimals** (Python)
```python
import csv

rain = {}
with open("hagen_regen.csv", encoding="utf-8") as f:
    for rec in csv.DictReader(f):
        year = rec["datum"][:4]
        rain[year] = rain.get(year, 0) + float(rec["regen_mm"])

wettest = max(rain, key=rain.get)
print("Wettest year:", wettest, rain[wettest], "mm")
print("1987 total:", rain["1987"])
print("Was 1987 exactly 971.0 mm?", rain["1987"] == 971.0)
```
It prints: Wettest year: 1981 1201.2999999999988 mm, 1987 total: 970.9999999999999 and Was 1987 exactly 971.0 mm? False.

Every daily value had one decimal place, so every total should too. Instead Python prints 1201.2999999999988 and 970.9999999999999, and the comparison with 971.0 says False. The reason is that a computer stores numbers in binary, and most decimal fractions, 0.1 among them, have no exact binary form, the way one third has no exact decimal form. Each value is stored as the nearest possible binary number, and after 365 additions the tiny differences show. Try it yourself: in Python, 0.1 + 0.2 prints 0.30000000000000004.

The fix is to count in whole numbers. Every value in this file is given to a tenth of a millimetre, so Version 2 turns each day into an integer number of tenths (2.2 becomes 22), adds integers, which a computer does exactly, and divides by 10 only once, when printing.

**Version 2: add below Version 1, count in tenths** (Python)
```python
tenths = {}
with open("hagen_regen.csv", encoding="utf-8") as f:
    for rec in csv.DictReader(f):
        year = rec["datum"][:4]
        tenths[year] = tenths.get(year, 0) + round(float(rec["regen_mm"]) * 10)

wettest = max(tenths, key=tenths.get)
print("Wettest year:", wettest, tenths[wettest] / 10, "mm")
print("1987 total:", tenths["1987"] / 10)
print("Was 1987 exactly 971.0 mm?", tenths["1987"] == 9710)
print("Years over 1,000 mm:", sorted(y for y in tenths if tenths[y] >= 10000))
```
The new lines it prints: Wettest year: 1981 1201.3 mm, 1987 total: 971.0, Was 1987 exactly 971.0 mm? True and Years over 1,000 mm: ['1981', '1984', '1986', '1993', '1998', '2002', '2007'].

**Yearly rainfall at Hagen-Fley: float totals against integer tenths (our calculation)**

| Year | Adding floats | Adding tenths |
|---|---|---|
| 1981 | 1201.2999999999988 | 1201.3 |
| 1987 | 970.9999999999999 | 971.0 |
| 1989 | 767.3999999999996 | 767.4 |
| 1991 | 754.3000000000003 | 754.3 |
| 2003 | 719.8 | 719.8 |

Rain values: DWD, station 01920 Hagen-Fley, RSK (precipitation per day), years 1979 to 2007, CC BY 4.0, file taken on 3 November 2026. We wrote the code and did the adding; seven of the 29 years passed 1,000 mm. The DWD is not involved in our classes.

Look at 2003: the float total happens to come out as exactly 719.8. That is the dangerous part. The error is not always visible, so a program that seems to work on one year can fail on the next. The rule that follows is short: never compare two floats with ==, and when you need exact sums of decimal values, count in whole units.

1. **Ages 9 to 12.** Add 0.1 to a variable ten times in a loop and print it after every step. At which step does it first look strange?
2. **Teenagers.** Without running it, predict whether round(970.9999999999999, 1) == 971.0 is True. Then check. Why is rounding a fix for printing but a weak fix for comparing?
3. **Adults.** Rewrite Version 1 using math.fsum on a list of each year's values, and compare its 1987 result with both versions on this page.
4. **Exam practice.** On paper, trace a loop that adds 0.5 four times. Then explain why 0.5 behaves perfectly when 0.1 does not.

## What is the Python path for a Hagen learner?

Our sequence, with the habit each stage builds. Children move through it slowly with games; teenagers and adults faster with data.

**Our Python path and the habit behind each stage (ours)**

| Stage | Content | Habit |
|---|---|---|
| 1 | print, variables, arithmetic | Predict before you run |
| 2 | if, for, while | Trace the loop by hand |
| 3 | Lists and dictionaries | Choose the right container |
| 4 | Functions | Write it once, test it twice |
| 5 | Files and real data | Check what the data really contains |
| 6 | Numbers inside the machine | Know what a float can and cannot hold |
| 7 | Projects and exam tasks | Explain every line in words |

Our own outline. Abitur pupils work through stages 1 to 7 with Java alongside Python, as the Informatik Abitur course does.

Stage 6 is where many self-taught programmers have a gap. It looks like trivia until a bank balance, a grade average or a sensor total goes subtly wrong. For pupils facing a paper exam it is also the stage that makes predictions reliable: if you know that 0.1 is stored inexactly, you will not be surprised by the output you are asked to predict.

## When are live Python classes for Hagen learners?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

**Example Hagen times and the mentor's local time**

| Hagen | India, to 28 March 2027 | India, from 28 March 2027 |
|---|---|---|
| 15:35 | 20:05 | 19:05 |
| 17:40 | 22:10 | 21:10 |
| Saturday 12:30 | 17:00 | 16:00 |
| Sunday 09:30 | 14:00 | 13:00 |

Germany switches between MEZ, UTC+1, and MESZ, UTC+2, under the Einheitenzeitgesetz; the latest switch to MEZ was on 25 October 2026 and the next to MESZ is on 28 March 2027. India does not switch (UTC+5:30), so its clocks run four hours thirty ahead of Hagen in winter and three hours thirty in summer. Batch times are agreed, not fixed.

School holidays in North Rhine-Westphalia for 2026/27, from the KMK overview dated 9 October 2025: autumn from 17 to 31 October 2026; Christmas from 23.12.2026 to 06.01.2027; Easter from 22 March to 3 April 2027; a single Whitsun day on 18 May 2027; and summer from 19 July to 31 August 2027. Classes carry on through all of them unless you choose to pause.

Hagen's population on 31 December 2024 was 190,384, by the Destatis count; North Rhine-Westphalia as a whole had 18,034,454. Learners from Dortmund (603,462), Bochum (358,676) or Wuppertal (358,193) are also in North Rhine-Westphalia and share the same school calendar and the same central Abitur.

## How do we know a Python learner really understands?

Five checks we use in class. Each one is a small task, not a test score.

**Five checks of understanding (ours)**

| Check | The learner can |
|---|---|
| Prediction | Write down the output of a short program before running it |
| Tracing | Fill in a table of variable values for each loop step on paper |
| Error reading | Find the failing line from a traceback alone |
| Number sense | Explain why 0.1 + 0.2 is not printed as 0.3 |
| Explanation | Describe a program they wrote in five plain sentences |

### For Abitur pupils

Prediction and tracing are exactly what a paper exam rewards. We practise them on every program, not only before exams.
Number sense often decides the last marks on a tracing task.

### For adults

Number sense is the check most professionals have never been taught. It matters the moment Python touches money or measurements.
Bring a spreadsheet from work and we will test it with you.

## Nine more courses for Hagen learners

Some come before Python, some beside school, some after the first course.

### Younger learners

Ages 6 to 16

- [Scratch first](/courses/scratch-programming-complete-course): Block coding for children not yet typing, 6 to 12.
- [Maths through coding](/courses/maths-through-coding): Graphs, fractions and geometry with code, 10 to 15.
- [Informatik Companion](/courses/informatik-companion-course-klasse-5-10): Support for the school subject, Klasse 5 to 10.

### Teenagers

Ages 13 to 18

- [Python for teens](/courses/python-complete-masterclass-teens): A complete Python course from zero, 13 to 18.
- [Algorithms for teens](/courses/problem-solving-dsa-masterclass-teens): Data structures and problem solving, 13 to 18.
- [Data science for teens](/courses/data-science-course-for-teens-python-data): Pandas, charts and simple models, 14 to 18.

### Adults

18 and over

- [Python masterclass](/courses/python-programming-masterclass-zero-to-advanced-college): From the first line to confident programs.
- [Python automation](/courses/python-ai-automation-masterclass-college): Scripts that take over routine work.
- [MySQL databases](/courses/mysql-database-complete-masterclass-college): Storing and querying data properly.

## How are the live Python classes run?

Two one-hour classes each week on video with the same mentor, and a short task in between. No recordings stand in for a person.

- **School-day afternoons** For children and pupils in Hagen.
- **Evenings and weekends** For adults, and for pupils before exams.
- **One to one** A slot agreed with your mentor.

- **Screen shared** The mentor sees each line as you type.
- **Predict first** Output is guessed before code runs.
- **Same mentor** Continuity from first class to last.
- **Age groups** Children, teenagers and adults apart.
- **Paper practice** Tracing tasks for exam candidates.
- **Short updates** What was learned and what comes next.

## What do online Python classes cost in Hagen?

One fee per month, eight live classes. The euro amount on this page is calculated with the European Central Bank reference rate, but payment is taken in US dollars, so your bank converts it and its euro figure can be a little different from ours.

- Free first class: Free. A free first class. Python installed, a first program written. No card details.
- Group batch: €90 (charged in US dollars) a month. A batch of fifteen to twenty. One mentor throughout. Two classes a week. Monthly, stop in any month.
- One to one: €134 (charged in US dollars) a month. One learner, one mentor. Your own pace, including exam timing. Times you set together.

## Online Python classes in Hagen: common questions

### Are the Python classes in German?

No, English is the only teaching language. Mentors work from India and fit their speed and wording to each learner. Python's own keywords and error messages are English, so the language of the class matches the language of the code.

### Are the classes live?

Yes. A mentor is on the video call for the full hour, sees the learner's shared screen and helps in the moment. There are no pre-recorded lessons in place of the mentor.

### Is the Informatik Abitur in NRW written on a computer?

No, it is a paper exam: the GI states that no computer is used for the written Informatik papers in North Rhine-Westphalia. The Land sets the tasks, and the teacher chooses two of four in a Grundkurs and three of four in a Leistungskurs.

### Do NRW pupils learn Informatik before the Oberstufe?

Yes. Grades 5 and 6 include required Informatik at all general schools, and electives follow later, differing by school type.

### When can I take classes in Hagen time?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Pupils often choose late afternoons, adults evenings or weekend mornings.

### What is the rain project on this page?

A lesson we built from Hagen-Fley rainfall published by the Deutscher Wetterdienst, 1979 to 2007. Adding the daily values as floats gives 970.9999999999999 mm for 1987; counting in whole tenths of a millimetre gives exactly 971.0.

### Why does 0.1 + 0.2 not equal 0.3 in Python?

Because Python stores such numbers in binary, and 0.1 and 0.2 have no exact binary form. Each is stored as the nearest possible value, so the sum prints as 0.30000000000000004. Compare floats with a tolerance, or count in whole units.

### Can my child learn Python online?

From about 9, yes, in our Python and AI for Kids course. Younger children usually start with Scratch, where blocks replace typing.

### How big are the classes?

Batches run with fifteen to twenty learners matched by age and level; with one-to-one there is nobody else, just the learner and the mentor twice a week.

### How do I pay?

Each month. The euro price you see uses the European Central Bank reference rate; the money moves in US dollars, and your bank turns that into euro, so a few cents can differ. The trial costs nothing and needs no card details.

## Related pages

- [North Rhine-Westphalia](/coding-classes-in-north-rhine-westphalia): Informatik across NRW school types.
- [Informatik Abitur in NRW](/informatik-abitur-nrw): The central paper exam in detail.
- [Python course in Germany](/python-course-germany): All our Python courses for Germany.
- [Abitur computer science in English](/abitur-computer-science-in-english): Informatik in the Oberstufe, explained in English.
- [Coding for adults](/coding-classes-for-adults-germany): For those starting after school.
- [How we teach](/how-we-teach): Our live method in detail.

## More pages for this Land

Part of the guide: [Coding classes in North Rhine-Westphalia](/coding-classes-in-north-rhine-westphalia)

### Cities and pages in North Rhine-Westphalia

- [Coding and AI classes in Bergisch Gladbach](/coding-and-ai-classes-in-bergisch-gladbach-germany)
- [Coding and AI classes in Bielefeld](/coding-and-ai-classes-in-bielefeld-germany)
- [Coding and AI classes in Duisburg](/coding-and-ai-classes-in-duisburg-germany)
- [Coding and AI classes in Gütersloh](/coding-and-ai-classes-in-guetersloh-germany)
- [Coding and AI classes in Münster](/coding-and-ai-classes-in-muenster-germany)
- [Coding and AI classes in Neuss](/coding-and-ai-classes-in-neuss-germany)
- [Coding and AI classes in Recklinghausen](/coding-and-ai-classes-in-recklinghausen-germany)
- [Coding classes for kids in Bonn](/coding-classes-for-kids-bonn)
- [Coding classes for kids in Cologne](/coding-classes-for-kids-cologne)
- [Coding classes for kids in Dortmund](/coding-classes-for-kids-dortmund)
- [Coding classes for kids in Düsseldorf](/coding-classes-for-kids-dusseldorf)
- [Coding classes for kids in Essen](/coding-classes-for-kids-essen)
- [Coding classes for kids in Aachen](/coding-classes-for-kids-in-aachen-germany)
- [Coding classes for kids in Krefeld](/coding-classes-for-kids-in-krefeld-germany)
- [Coding classes for kids in Leverkusen](/coding-classes-for-kids-in-leverkusen-germany)
- [Coding classes for kids in Moers](/coding-classes-for-kids-in-moers-germany)
- [Coding classes for kids in Solingen](/coding-classes-for-kids-in-solingen-germany)
- [Coding classes for kids in Wuppertal](/coding-classes-for-kids-in-wuppertal-germany)
- [Coding for international school students in Düsseldorf](/coding-for-international-school-students-dusseldorf)
- [Informatik-Abitur NRW (Unterricht auf Englisch)](/informatik-abitur-nrw)
- [Maths tutor in Cologne, in English](/math-tutor-cologne-in-english)
- [Online Python classes in Bochum](/online-python-classes-bochum-germany)
- [Online Python classes in Bottrop](/online-python-classes-bottrop-germany)
- [Online Python classes in Hamm](/online-python-classes-hamm-germany)
- [Online Python classes in Herne](/online-python-classes-herne-germany)
- [Online Python classes in Mönchengladbach](/online-python-classes-moenchengladbach-germany)
- [Online Python classes in Mülheim an der Ruhr](/online-python-classes-muelheim-an-der-ruhr-germany)
- [Online Python classes in Oberhausen](/online-python-classes-oberhausen-germany)
- [Online Python classes in Remscheid](/online-python-classes-remscheid-germany)
- [Online Python classes in Siegen](/online-python-classes-siegen-germany)
- [Programmieren lernen für Kinder in Düsseldorf (auf Englisch)](/programmieren-lernen-kinder-duesseldorf)
- [Programmieren lernen für Kinder in Köln (auf Englisch)](/programmieren-lernen-kinder-koeln)

More guides: [Coding classes in Lower Saxony](/coding-classes-in-lower-saxony), [Coding classes in Land Bremen](/coding-classes-in-land-bremen), [Coding classes in Hesse](/coding-classes-in-hesse), [Coding classes in Bavaria](/coding-classes-in-bavaria), [Coding classes in Saxony-Anhalt](/coding-classes-in-saxony-anhalt), [Coding classes in Schleswig-Holstein](/coding-classes-in-schleswig-holstein), [Coding classes in Baden-Württemberg](/coding-classes-in-baden-wuerttemberg), [Coding classes in Saarland](/coding-classes-in-saarland), [Coding classes in Rhineland-Palatinate](/coding-classes-in-rhineland-palatinate), [Coding and maths in Berlin](/coding-and-maths-classes-in-berlin-germany), [Coding and maths in Hamburg](/coding-and-maths-classes-in-hamburg-germany), [Coding classes in Saxony](/coding-classes-in-saxony), [Coding classes in Thuringia](/coding-classes-in-thuringia), [Coding classes in Brandenburg](/coding-classes-in-brandenburg), [Coding classes in Mecklenburg-Vorpommern](/coding-classes-in-mecklenburg-vorpommern)

## Contact

Book the free first class at [https://learn.modernagecoders.com/online-python-classes-hagen-germany](https://learn.modernagecoders.com/online-python-classes-hagen-germany#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
