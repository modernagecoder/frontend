---
title: "Coding for International School Students in Munich"
description: "Coding for international school students in Munich: IB and IGCSE computer science live online in English, what AGIS says on the IB, and a Munich traffic project."
canonical: https://learn.modernagecoders.com/coding-for-international-school-students-munich
source: src/pages/coding-for-international-school-students-munich.html
---
> Modern Age Coders teaches coding to international school students in Munich live online in English: IB Diploma and IGCSE Computer Science, plus the Python and Java foundations MYP pupils need first. One regular mentor matches the pupil's pace and accent and works from their own school's next assessment. Lessons run in a group of fifteen to twenty or one to one, in the Munich evening or on Sundays.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / [Coding classes in Bavaria](/coding-classes-in-bavaria) / International pupils, Munich

Munich · International schools · IB and IGCSE computing

# Coding for international school students in Munich

Around Munich, several large international schools teach the IB in English, and their pupils often want more programming than a single subject gives them, or help with the computing they already take. This page sets out what the schools' own association says about these qualifications in Germany, what changes for a pupil who moves to a Bavarian Gymnasium, and a project on real Munich traffic data that teaches one of the most useful ideas in computer science: the two-dimensional array.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; For: International school pupils, about 11 to 18; Programmes: IB MYP and DP, IGCSE; Languages: Python, Java, pseudocode; Class size: Fifteen to twenty, or one to one; Munich times: Evenings and Sundays, flexible; Trial: A free first class, no card. Rated 4.9 across 547 Google reviews.

## Three computing courses for Munich international school pupils

One for each stage: the IB Diploma years, the IGCSE years, and the coding foundations that make both easier.

- [IB DP Computer Science](/courses/ib-diploma-computer-science-course): For the two Diploma years, SL and HL: programming, algorithms, data and the written work, taught in English by one mentor who follows your child through to the exams.
- [IGCSE Computer Science](/courses/igcse-computer-science-0478-course): For pupils on a Cambridge route: theory and programming papers, with practice in the pseudocode and Python styles the course expects.
- [Python for Teens](/courses/python-complete-masterclass-teens): For MYP-age pupils who want real programming before the Diploma: from first scripts to files, functions and small data projects like the one below.

## Which international schools are there around Munich, and what do they teach?

We name schools here only as context, from the directory of AGIS, the association of international schools in Germany, and we are not connected to any of them.

**AGIS member schools in and near Munich, as listed in the AGIS school directory**

| School | Location | Pupils listed | Programmes listed |
|---|---|---|---|
| Munich International School | Starnberg, Schloss Buchhof | 1,314 | IB PYP, IB MYP, IB Diploma |
| Bavarian International School | Haimhausen | 1,265 | IB PYP, MYP, DP and CP |
| International School Augsburg | Gersthofen, near Augsburg | 380 | IB Diploma with Abitur recognition, IGCSE with Mittlere Reife recognition |

Source: AGIS e.V., school directory pages for each school (pupil figures as shown on the AGIS pages), read 2 and 3 November 2026. Munich itself has 1,505,005 inhabitants (Destatis, 31 December 2024). Other international and bilingual schools in Munich are not AGIS members and are not listed here.

### What AGIS says about the qualifications

AGIS says on its homepage that it represents 23 member schools, that they bring together children from up to 65 nations, and that English is their common language of teaching. Every member, it adds, is an authorised IB school offering at least one of the four IB programmes.

On recognition, AGIS states that the IB Diploma, with prescribed subject combinations, is equivalent to the German Abitur and opens university access worldwide, and that MYP or IGCSE schools give pupils a qualification equivalent to the Mittlere Reife.

### What that means for computing

The subject combination matters, so families should check the exact rules with the school's IB coordinator before choosing Computer Science; we teach the subject, and we do not advise on recognition.

In practice, international school pupils come to us for three things: help with the CS course they already take, a programming head start in the MYP years, and projects with real data for an extended essay or a portfolio.

## Is the teaching in English, and does it match how international schools teach?

Yes. Every lesson is in English, the language these pupils already learn computing in.

### English only

We do not teach in German at all. For a pupil whose whole school day is in English, that means no switching: the terms used in class, in the mentor's explanation and in the exam paper are the same words.

### Pace and accent

International classrooms mix many accents. Our mentors speak clearly, adapt to the pupil's own pace and accent, and slow down for a pupil whose English is still their second or third language.

### From their syllabus

We start from the pupil's own assignment calendar: the next test, the next coding task, the next piece of written work. The school's teacher and the exam board decide the grade; we build the understanding underneath it.

Our mentors work from India and teach over live video. A Munich evening lands late in the Indian evening in winter, so we usually suggest weekday slots before 19:00 Munich time and Sunday lessons for longer project work.

## When is the motorway at München-West busiest? A two-dimensional array project

The federal highway research institute, BASt, publishes every hourly count from the automatic counters on Germany's motorways as open data. One of them sits at Autobahnkreuz München-West on the A99, the motorway ring around the city. A year of its data makes a classic computer science exercise: fold 8,760 rows into a table of 7 days by 24 hours.

### The data

The file for counter 9220 holds 8,760 rows for 2023, one per hour, with the date, a weekday number from 1 to 7, an hour number from 01 to 24, and vehicle counts for each of the two directions. Next to each count sits a one-letter flag column; most rows carry a dash there, and 171 hours carry a letter.

We give the pupil a slimmed file, a99_west_2023.csv, with seven columns: date, weekday, hour, the two counts and the two flags. Because the BASt pages that explain the flag letters were not reachable when we built this, the program does not interpret them: it simply leaves flagged hours out and reports how many.

### The question

On which day of the week, and in which hour, is the counter busiest on average? Answering it means grouping every row by two keys at once, which is exactly what a two-dimensional array is for: a list of 7 lists, each of 24 numbers.

We keep two such tables, one for the totals and one for how many hours went into each cell, then divide. It is the same pattern an IB pupil uses for a grade book, a seating plan or a game board.

**Version 1: build the 7 by 24 table and find the peak** (Python)
```python
import csv

DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
total = [[0] * 24 for _ in range(7)]
count = [[0] * 24 for _ in range(7)]
flagged = 0

with open("a99_west_2023.csv") as hours:
    for rec in csv.DictReader(hours):
        if rec["flag_n"] != "-" or rec["flag_s"] != "-":
            flagged += 1
            continue
        d = int(rec["weekday"]) - 1
        h = int(rec["hour"]) - 1
        total[d][h] += int(rec["north"]) + int(rec["south"])
        count[d][h] += 1

peak = (0, 0, 0)
for d in range(7):
    for h in range(24):
        avg = total[d][h] / count[d][h]
        if avg > peak[0]:
            peak = (avg, d, h)

print("Hours left out (flagged):", flagged)
print(f"Busiest slot on average: {DAYS[peak[1]]}, hour {peak[2] + 1:02d}, {peak[0]:.0f} vehicles")
```
It prints: Hours left out (flagged): 171 and Busiest slot on average: Wed, hour 18, 4858 vehicles.

Wednesday, hour 18, with 4,858 vehicles in an average hour across both directions. A nice check for pupils: run it again without the flag filter. The peak stays in the same cell and moves only to 4,866, so the answer does not depend on those 171 hours. When a result survives a change like that, you can state it with more confidence.

Version 2 reads two rows of the table, the morning slot 08 and the evening slot 18, across all seven days, and compares an ordinary weekday morning with a Sunday morning.

**Version 2: read two rows of the table** (Python)
```python
for slot in (8, 18):
    line = [round(total[d][slot - 1] / count[d][slot - 1]) for d in range(7)]
    print(f"hour {slot:02d}:", line)

weekday = sum(total[d][7] for d in range(5)) / sum(count[d][7] for d in range(5))
sunday = total[6][7] / count[6][7]
print(f"hour 08, Mon to Fri vs Sun: {weekday / sunday:.1f} times as many")
```
Run after Version 1, it prints: hour 08: [4558, 4720, 4830, 4617, 4135, 1739, 809], hour 18: [4654, 4701, 4858, 4767, 4482, 3577, 4026] and hour 08, Mon to Fri vs Sun: 5.7 times as many.

**Average vehicles per hour at counter 9220, A99 München-West, 2023, both directions (our calculation)**

| Hour slot | Wednesday | Friday | Saturday | Sunday |
|---|---|---|---|---|
| 08 | 4,830 | 4,135 | 1,739 | 809 |
| 18 | 4,858 | 4,482 | 3,577 | 4,026 |

Data: Bundesanstalt für Straßenwesen, automatic counting stations on the A99, 2023, station 9220 (listed on GovData as Zählstelle AK München-West), licence CC BY 4.0, downloaded 3 November 2026. Averages are our own, over the 8,589 hours without a flag letter. All 8,760 hours as published add up to 22,760,004 vehicles, about 62,356 a day.

The table hides two stories a pupil can investigate. Friday mornings are quieter than other weekday mornings. And at slot 18, Sunday is busier than Saturday, 4,026 against 3,577. The data cannot say why; a good write-up offers a hypothesis, such as weekend trips returning, and says what extra data would test it.

1. **Warm-up.** On paper, draw a 3 by 4 grid and fill it from a list of twelve numbers, row by row. Then write the index pair of the largest number.
2. **Core.** Run Version 1, then print the whole 7 by 24 table of averages with one row per day, neatly aligned.
3. **Extension.** Split the totals by direction, north and south, and find whether the two directions peak at different hours.
4. **For a write-up.** State one finding that the table supports and one claim it cannot support, and explain why in two sentences each.

## What if my child moves from an international school to a Bavarian Gymnasium?

Computing looks different in the Bavarian state system, especially in the Oberstufe. The Gesellschaft für Informatik summarises the rules.

**Informatik in the Bavarian Gymnasium Oberstufe, 2026/27**

| Stage | What the rules say |
|---|---|
| Grade 11 (Einführungsphase) | Two compulsory hours of Informatik, or a variant of it, in every branch |
| Qualifikationsphase, scientific branch | Informatik at basic level for three hours or at raised level for five hours |
| Qualifikationsphase, other branches | Late-starting Informatik at basic level for three hours |
| Written Abitur in Informatik | Tasks set centrally; much of it is programming on paper, with no work at the computer |

Source: Gesellschaft für Informatik, Informatik-Monitor 2026/27, Bayern, compiled from the Gymnasialschulordnung; read 2 November 2026.

The last row surprises most international school families. In the Bavarian written Abitur, code is written by hand, so a pupil used to running and testing every line on a laptop needs practice in tracing a program on paper, step by step, and in writing syntax correctly without an editor's help. We practise exactly that with original tasks, in English, and our Informatik Abitur course covers the Java and Python side.

If your family is considering a move, also note the calendar: Bavarian Gymnasien follow the Land's holidays, such as summer from 2 August to 13 September 2027 in the KMK table, which can differ from an international school's own term dates.

## What time are lessons for Munich pupils?

International school days can run late, so most pupils pick an early evening slot or a Sunday.

**Sample Munich lesson times and the matching time in India**

| Munich time | India, until 28 March 2027 | India, from 28 March 2027 |
|---|---|---|
| 17:15 | 21:45 | 20:45 |
| 18:45 | 23:15 | 22:15 |
| Sunday 12:30 | 17:00 | 16:00 |

German time follows the Einheitenzeitgesetz: UTC+1 in winter, UTC+2 in summer, with summer time back on 28 March 2027 after ending on 25 October 2026. India stays on UTC+5:30, so the gap is four and a half hours in winter and three and a half in summer. Examples, not fixed batch times.

Because 18:45 in Munich is already late evening in India during winter, we suggest the earlier weekday slot or Sunday for one-to-one exam work, and move times when summer time returns in spring.

## How a pupil grows from first scripts to exam-ready work

Our own stages for international school pupils, used to plan lessons and to report to families.

**Computing stages for ages 11 to 18 (ours)**

| Stage | Typical point | The pupil can |
|---|---|---|
| 1. Scripts | MYP 1 to 2 | Write short Python programs with input, output and conditions |
| 2. Structures | MYP 3 to 4 | Use lists, loops and functions to solve multi-step tasks |
| 3. Tables | MYP 5 or IGCSE | Work with two-dimensional arrays and files, as in the traffic project |
| 4. Algorithms | IGCSE or DP 1 | Trace, compare and write searching and sorting algorithms on paper |
| 5. Projects | DP 1 to 2 | Plan, build, test and document a substantial program of their own |

### For parents

Stage 3 is where many pupils first feel that programming is powerful: one loop over a whole year of data.
We report what your child built and can explain, never only hours.

### For pupils

A table is just a list of lists. Name both indices before you write the loop.
If a result survives when you change one assumption, say so. That is evidence.

## Nine more courses for international school pupils

Each one live and in English, with a mentor who stays the same, in a batch or one to one.

### Programming depth

Ages 12 to 18

- [Java for teens](/courses/java-programming-masterclass-for-teens): Object-oriented programming from the ground up.
- [Data structures and algorithms](/courses/problem-solving-dsa-masterclass-teens): The algorithmic thinking IB and IGCSE papers test.
- [Data science for teens](/courses/data-science-course-for-teens-python-data): Python with real datasets and first models.

### Other programmes

Ages 14 to 19

- [AP Computer Science A](/courses/ap-computer-science-a-java-exam-prep-course): For pupils at schools offering AP.
- [Informatik Abitur](/courses/informatik-abitur-course-java-python): For pupils moving into the German Oberstufe.
- [IB Maths AA and AI](/courses/ib-mathematics-aa-ai-masterclass): The maths that sits next to IB computing.

### Beyond the syllabus

Ages 12 to 18

- [German informatics contests](/courses/german-informatics-competitions-course-biber-bwinf-bwki): From the Biber to the Bundeswettbewerb.
- [Full stack web for teens](/courses/full-stack-web-development-teens-masterclass): React and Node.js projects for a portfolio.
- [Cybersecurity for teens](/courses/cybersecurity-course-for-teens-ethical-defensive): Defensive, ethical security skills.

## How live lessons work for an international school pupil

Two live lessons a week with one mentor, planned around the school's calendar. Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Evenings** From about 17:15 Munich time, after a long school day.
- **Sundays** Longer project sessions without school the next morning.
- **1-on-1** Times set around assessments and deadlines.

- **One mentor** The same person through the whole course.
- **Their syllabus** Lessons start from the next assessment.
- **Code and paper** Running code, and tracing it by hand.
- **Real data** Projects on open data with a licence.
- **Family updates** What was done and what comes next.
- **Batch or private** Fifteen to twenty, or one to one.

## Fees for Munich families

The fee is monthly and covers eight live lessons. On this page it appears in euro at the European Central Bank reference rate, while the card payment itself is in US dollars; your bank converts it, so the statement can show a slightly different sum.

- Free first class: Free. A free first lesson. A look at a current task or test. No card needed.
- Group batch: €90 (charged in US dollars) a month. Fifteen to twenty pupils at a similar stage. One regular mentor. Two lessons a week. Monthly, stop when you like.
- One to one: €134 (charged in US dollars) a month. Your child and one mentor. Built around their own syllabus. Times that fit the school week.

## Coding for international school students in Munich: common questions

### Are the classes in German?

No. Every lesson is live and in English only, the same language your child learns computing in at an international school. The mentor adapts to your child's pace and accent, which helps in classrooms where English is a second or third language.

### Do you teach IB Diploma Computer Science?

Yes, at SL and HL. We work from your child's own school plan and deadlines, and we write our own practice tasks. The school and the IB set and mark the assessments; we do not.

### Can you help a pupil in the MYP years?

Yes. Many MYP pupils start with our Python for Teens course to build real programming skill before the Diploma, so that algorithms and larger projects feel familiar later.

### Is the IB Diploma recognised as an Abitur in Germany?

AGIS states that the IB Diploma, with prescribed subject combinations, is equivalent to the German Abitur. The exact combination rules matter, so please check them with the school's IB coordinator; we do not give advice on recognition.

### What changes if my child moves to a Bavarian Gymnasium?

In grade 11 every branch has two compulsory hours of Informatik, and the written Informatik Abitur in Bavaria is set centrally, with much of it programming on paper and no work at the computer, according to the Gesellschaft für Informatik.

### Are you connected to any Munich international school?

No. We name schools on this page only as context, from the AGIS directory. We are an independent online school and are not linked to any school, AGIS or the IB.

### What time are lessons in Munich?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Most pupils choose a slot between about 17:00 and 19:00 or a Sunday.

### Where are the mentors based?

In India. They teach live over video, in English, and your child keeps the same mentor through the course.

### Can a project like the traffic grid help with an extended essay?

It can show the skills, but your child must choose and write their own topic and work, with their school supervisor. We teach the methods, such as cleaning data and building tables, and we never write the essay or code it for them.

### What does it cost?

A monthly fee, shown on this page in euro at the European Central Bank reference rate. The payment is taken in US dollars and converted by your bank, so the amount you see on your statement can differ a little. The first lesson is free.

## Related pages

- [Coding classes in Germany](/coding-classes-in-germany): Our hub page for Germany.
- [International school pupils in Germany](/coding-for-international-school-students-germany): The national picture, beyond Munich.
- [IB Computer Science tutor](/ib-computer-science-tutor-germany): How the subject sits in the diploma in Germany.
- [IGCSE Computer Science tutor](/igcse-computer-science-tutor-germany): For pupils on a Cambridge route.
- [Abitur computer science](/abitur-computer-science-in-english): Informatik in the German Abitur, in English.
- [How we teach](/how-we-teach): What a live lesson looks like.

## More pages for this Land

Part of the guide: [Coding classes in Bavaria](/coding-classes-in-bavaria)

### Cities and pages in Bavaria

- [Coding and AI classes in Fürth](/coding-and-ai-classes-in-fuerth-germany)
- [Coding classes for kids in Erlangen](/coding-classes-for-kids-in-erlangen-germany)
- [Coding classes for kids in Ingolstadt](/coding-classes-for-kids-in-ingolstadt-germany)
- [Coding classes for kids in Munich](/coding-classes-for-kids-munich)
- [Coding classes for kids in Nuremberg](/coding-classes-for-kids-nuremberg)
- [Informatik-Abitur Bayern (Unterricht auf Englisch)](/informatik-abitur-bayern)
- [Maths tutor in Munich, in English](/math-tutor-munich-in-english)
- [Online Python classes in Augsburg](/online-python-classes-augsburg-germany)
- [Online Python classes in Regensburg](/online-python-classes-regensburg-germany)
- [Online Python classes in Würzburg](/online-python-classes-wuerzburg-germany)
- [Programmieren lernen für Kinder in München (auf Englisch)](/programmieren-lernen-kinder-muenchen)
- [Programmieren lernen für Kinder in Nürnberg](/programmieren-lernen-kinder-nuernberg)

More guides: [Coding classes in North Rhine-Westphalia](/coding-classes-in-north-rhine-westphalia), [Coding classes in Lower Saxony](/coding-classes-in-lower-saxony), [Coding classes in Land Bremen](/coding-classes-in-land-bremen), [Coding classes in Hesse](/coding-classes-in-hesse), [Coding classes in Saxony-Anhalt](/coding-classes-in-saxony-anhalt), [Coding classes in Schleswig-Holstein](/coding-classes-in-schleswig-holstein), [Coding classes in Baden-Württemberg](/coding-classes-in-baden-wuerttemberg), [Coding classes in Saarland](/coding-classes-in-saarland), [Coding classes in Rhineland-Palatinate](/coding-classes-in-rhineland-palatinate), [Coding and maths in Berlin](/coding-and-maths-classes-in-berlin-germany), [Coding and maths in Hamburg](/coding-and-maths-classes-in-hamburg-germany), [Coding classes in Saxony](/coding-classes-in-saxony), [Coding classes in Thuringia](/coding-classes-in-thuringia), [Coding classes in Brandenburg](/coding-classes-in-brandenburg), [Coding classes in Mecklenburg-Vorpommern](/coding-classes-in-mecklenburg-vorpommern)

## Contact

Book the free first class at [https://learn.modernagecoders.com/coding-for-international-school-students-munich](https://learn.modernagecoders.com/coding-for-international-school-students-munich#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
