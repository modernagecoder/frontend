---
title: "Online Python Classes in Bottrop: Live, Taught in English"
description: "Online Python classes in Bottrop, live in English for pupils and adults: how a lesson runs, NRW Informatik and the Abitur, and a project on Bottrop school data."
canonical: https://learn.modernagecoders.com/online-python-classes-bottrop-germany
source: src/pages/online-python-classes-bottrop-germany.html
---
> Modern Age Coders teaches Python to Bottrop learners in live video lessons held in English. Learner and mentor look at one shared screen of code; the learner types, runs and fixes it while the mentor guides as it happens. From roughly age 10 up to adults, everyone works through one Python sequence at a speed that suits them, taught by a mentor who adapts to how they speak, either among fifteen to twenty classmates or privately.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / [Coding classes in North Rhine-Westphalia](/coding-classes-in-north-rhine-westphalia) / Bottrop, Python

Bottrop · Python · Live online, in English

# Online Python classes in Bottrop

Can a pupil in Bottrop take Informatik in the Oberstufe, and as a Leistungskurs? The answer is sitting in two open files from the NRW school ministry, and a learner who knows a little Python can find it in six steps. That project is the centre of this page. Around it: how our live online Python lessons in English actually run, what NRW schools teach in Informatik from grade 5 to the Abitur, and the times that suit Bottrop.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Format: Live video, screen shared; Language taught: Python 3; Learners: About 10 to adult; Group: 15 to 20, or one to one; Lessons: Two a week, live; Start: Free trial lesson. Rated 4.9 across 547 Google reviews.

## Which online Python course should a Bottrop learner choose?

Three starting points by age and goal; the trial lesson decides.

- [Python and AI for Kids](/courses/python-ai-kids-masterclass): Younger learners from 9. First typed programs, games and small files, at a gentler pace.
- [Python for Teens](/courses/python-complete-masterclass-teens): Teenagers. Lists, dictionaries, sets, functions and real files, like the NRW school data below.
- [Informatik Oberstufe and Abitur](/courses/informatik-abitur-course-java-python): Oberstufe pupils. Java and Python alongside the school course, including tracing code on paper for the written exam.

## How does a live online Python lesson work?

A video call, one shared screen, and the learner's hands on the keyboard. Nothing is recorded and nothing is left for later.

### The mentor is there

A real person on video for the whole hour, who sees the learner's code as it is typed and can point to a line the moment something goes wrong.

### The learner types

The mentor explains and asks, but the learner writes every line. Learning to type, run and read Python is the skill; watching someone else do it is not.

### Errors are lessons

When Python prints an error, mentor and learner read it together from the bottom up. After a few weeks most learners can fix their own mistakes before asking.

### What you need

Bring a computer with a keyboard, a connection that handles video calls, and somewhere calm to sit; headphones are a plus. Setting up Python and a free editor is part of lesson one.

Tablets and phones are not suitable for typed Python. For children under 12, a parent nearby for the first lessons makes the screen sharing easier.

### English as the language of the lesson

Lessons are only ever in English. The mentors work from India and get used to each learner's voice and tempo within the first weeks.

Python is itself written in English words, so a Bottrop pupil reads print, for and if as they are, and practises English along the way.

## Which Oberstufen in Bottrop offer Informatik, according to the Land's own data?

Four of the five, and none as a Leistungskurs, as the files listed them. The NRW school ministry publishes its list of schools and the Oberstufe courses each one offers, free to reuse under the Datenlizenz Deutschland Namensnennung 2.0. Our learners answer the question in six steps and print a count after each one.

### The two files

Schulgrunddaten NRW lists every school with a school number, a school type code and a municipality code. The course file, Kursangebot in der gymnasialen Oberstufe, lists for each school number the subjects it offers as Grundkurs and Leistungskurs in each phase. The ministry notes that the two can be linked "über die Schulnummer".

We downloaded both on 3 November 2026 and kept only the columns we need in two class files, schulen_nrw.csv and kurse_nrw.csv. In the key file the subject code for Informatik is IF.

### Why steps, and why counts

A filter that returns zero is a mystery: was there really nothing, or did one condition go wrong? Printing the count after every step turns the mystery into a map. If a step drops more rows than expected, that is where to look.

Bottrop's municipality code is 05512000, and school types are codes too: 15 is Gesamtschule and 20 is Gymnasium, the two school types with an Oberstufe in this file.

**Steps 1 to 3: from all of NRW to Bottrop's Oberstufe schools** (Python)
```python
import csv

with open("schulen_nrw.csv", encoding="utf-8") as f:
    schools = list(csv.DictReader(f))
print("Step 1, all schools in NRW:", len(schools))

bottrop = [s for s in schools if s["municipality"] == "05512000"]
print("Step 2, in Bottrop:", len(bottrop))

upper = [s for s in bottrop if s["school_type"] in ("15", "20")]
print("Step 3, Gesamtschule or Gymnasium:", len(upper))
```
It prints: Step 1, all schools in NRW: 5646, Step 2, in Bottrop: 32 and Step 3, Gesamtschule or Gymnasium: 5.

Each count can be checked by eye. Thirty-two entries in Bottrop, including primary schools and a few that are not schools at all, such as the school supervision office, which has its own type code. Five of them are a Gesamtschule or a Gymnasium. Now the second file: keep only the courses of those five, then narrow down to Informatik, then to Leistungskurs.

**Steps 4 to 6: join the course file and narrow down** (Python)
```python
numbers = {s["school_no"] for s in upper}
with open("kurse_nrw.csv", encoding="utf-8") as f:
    courses = [c for c in csv.DictReader(f) if c["school_no"] in numbers]
print("Step 4, schools with any Oberstufe course listed:", len({c["school_no"] for c in courses}))

informatik = [c for c in courses if c["subject"] == "IF"]
print("Step 5, offering Informatik:", len({c["school_no"] for c in informatik}))

lk = [c for c in informatik if c["lk_q1"] == "1" or c["lk_q2"] == "1"]
print("Step 6, offering it as Leistungskurs:", len({c["school_no"] for c in lk}))
```
Run after Steps 1 to 3, it prints: Step 4, schools with any Oberstufe course listed: 5, Step 5, offering Informatik: 4 and Step 6, offering it as Leistungskurs: 0.

**The six-step funnel for Bottrop (our counts from the NRW files)**

| Step | Count |
|---|---|
| 1. Schools and school offices in NRW | 5,646 |
| 2. In Bottrop (municipality 05512000) | 32 |
| 3. Gesamtschule or Gymnasium | 5 |
| 4. With Oberstufe courses listed | 5 |
| 5. Listing Informatik | 4 |
| 6. Listing Informatik as Leistungskurs | 0 |

Files from the NRW Ministerium für Schule und Bildung (Schulgrunddaten NRW; Kursangebot in der gymnasialen Oberstufe), Datenlizenz Deutschland Namensnennung 2.0, retrieved on 3 November 2026; every count here is our own. The ministry notes that schools may offer further subjects through cooperations not listed here, and that the data come from the previous year's survey, with 15 October as the reference date.

That last note matters more than any line of code. Step 6 says 0, but the file only lists what each school offers itself; a cooperation with a neighbouring school could add a Leistungskurs that the file never shows. A careful analyst reports "none listed in the ministry file" rather than "impossible in Bottrop". Across the whole of NRW the same file lists Informatik at 654 of 956 schools with Oberstufe courses, and as a Leistungskurs at 109.

1. **Younger pupils.** Before running anything, guess the count after each step and write it down. Which guess was furthest off?
2. **Teenagers.** Change the subject code from IF to another subject you take, and run the funnel again. At which step does your subject drop out, if it does?
3. **Adults.** Wrap the six steps in a function that takes a municipality code and a subject code, then run it for Bottrop and two neighbouring cities and print one line each.

## What Informatik do Bottrop pupils get at school?

Early, from grade 5, and with a written exam on paper at the end. The NRW rules for 2026/27 are summarised by the GI's Informatik-Monitor.

**Informatik in North Rhine-Westphalia, from grade 5 to the Abitur**

| Stage | What NRW provides |
|---|---|
| Grades 5 and 6 | Compulsory Informatik at all general school types |
| Qualifikationsphase | Grundkurs with three weekly lessons, or Leistungskurs with five, where offered |
| Written Abitur | Tasks set centrally; no computer is used in the written exam |
| Written exams 2027 | 13 April to 5 May 2027 |

Sources: Gesellschaft für Informatik, Informatik-Monitor 2026/27, NRW page, and the NRW school ministry's standardsicherung page on Zentralabitur dates for 2027, both read on 2 November 2026. The Monitor's words on the exam: "Der Einsatz eines Computers ist für die Bearbeitung der schriftlich Abituraufgaben nicht vorgesehen."

Two practical points follow for Bottrop families. First, whether a Leistungskurs exists depends on the school, as the data project shows. Second, because the written exam is on paper, a pupil must be able to read and trace code without running it. In our classes every program is predicted on paper before it runs. Our role is to support, not to replace: marks come only from the school.

## What order should Python be learned in?

Our order, for every age. The funnel project above uses everything up to sets and files.

### The first months

Printing and variables first, then decisions with if, then loops. After that come lists, and from lists the comprehension, the one-line filter used in every step of the funnel.

Then dictionaries and sets. A set is how the funnel counts schools rather than course rows: a school offering Informatik in three phases is still one school.

### The next months

Files, with the habit of looking at the first lines before parsing. Both NRW files begin with a line "sep=;" before the real header, which our class files remove.

Then functions, so a six-step analysis can be rerun for any city and any subject, and finally projects that a learner can explain to someone else.

As our own rough guide, a teenager or adult with two lessons a week can write a funnel like this one after about three months. Younger pupils need longer, which is normal.

## Which lesson times work in Bottrop?

Late afternoon in Bottrop is evening in India, where the mentors are. NRW holidays do not pause lessons unless you want them to.

**Bottrop example times and the time in India**

| In Bottrop | In India now | In India from 28 March 2027 |
|---|---|---|
| 15:25 | 19:55 | 18:55 |
| 17:10 | 21:40 | 20:40 |
| Saturday 14:00 | 18:30 | 17:30 |
| Sunday 10:45 | 15:15 | 14:15 |

Time in Germany follows the Einheitenzeitgesetz: UTC+1 in winter, UTC+2 in summer. The 2026 summer time ended on 25 October 2026; 2027 summer time starts on 28 March 2027. India never changes from UTC+5:30, so it is four and a half hours later than Bottrop in winter and three and a half in summer. Examples, not set times.

**NRW school holidays 2026/27 (KMK table)**

| Break | From | Until |
|---|---|---|
| Autumn | 17 October 2026 | 31 October 2026 |
| Christmas | 23 December 2026 | 6 January 2027 |
| Easter | Mon 22 March 2027 | Sat 3 April 2027 |
| Whitsun | 18 May 2027 | 18 May 2027 |
| Summer | 19 July 2027 | 31 August 2027 |

Source: KMK, Ferien im Schuljahr 2026/2027, Nordrhein-Westfalen row, status 9 October 2025. NRW has no winter break in this table.

## How can a Bottrop learner tell their Python is improving?

Our checkpoints, each one a thing the learner can do without help.

**Python checkpoints (ours)**

| Checkpoint | Shows that the learner can |
|---|---|
| Prediction | Say what a program prints before running it |
| Comprehension | Write a one-line filter over a list |
| Sets | Count distinct things, not rows |
| Funnel | Print a count after every filtering step |
| Caveat | Say what the data cannot show |

### For learners

When a filter gives you zero, do not trust it yet. Print the count after every step and find where the rows went.
Read the notes that come with a dataset. They often say what the data leaves out.

### For parents

Ask your child to walk you through their steps and the count at each one.
A monthly note sums up what was built and what is next.

## Nine more courses for Bottrop Python learners

For three age groups, all live and in English with a regular mentor.

### Younger learners

About 9 to 13

- [Informatik Companion](/courses/informatik-companion-course-klasse-5-10): Beside school Informatik from grade 5.
- [Problem solving](/courses/problem-solving-and-computational-thinking-for-kids): Logic puzzles that prepare for code.
- [Scratch coding](/courses/scratch-programming-complete-course): For younger siblings first.

### Teenagers

13 to 18

- [Java for teens](/courses/java-programming-masterclass-for-teens): Object-oriented programming in Java.
- [Competitive programming](/courses/competitive-programming-for-teens-course): Fast, correct solutions under time limits.
- [SQL for teens](/courses/mysql-mastery-for-teens): Joins and filters in a database.

### Adults

Work and study

- [Python from zero](/courses/python-programming-masterclass-zero-to-advanced-college): A full course for adult beginners.
- [Data analysis](/courses/data-analysis-mastery-course-college): From files to clear findings.
- [Web development](/courses/full-stack-web-development-masterclass-college): Build complete web applications.

## What does the weekly routine look like?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Afternoon** After school in Bottrop.
- **Early evening** For adults after work.
- **Weekend** Saturday afternoon or Sunday morning.

- **One screen, two people** Learner and mentor see the same code.
- **Typed by the learner** Every line comes from the learner.
- **Same mentor** Continuity from week to week.
- **Public data** Projects on real German files.
- **Paper practice** Code traced by hand, for the exam.
- **Group or private** 15 to 20 learners, or one to one.

## How much do online Python classes cost in Bottrop?

A monthly fee pays for eight live lessons. We show euro amounts calculated with the European Central Bank reference rate; the actual payment is in US dollars, and your bank converts it, so the euro debit can come out marginally different.

- Free first class: Free. A free trial lesson. Your first program, written live. No card needed.
- Group batch: €90 (charged in US dollars) a month. 15 to 20 learners close in age. Your regular mentor. Two live lessons weekly. Monthly, stop any month.
- One to one: €134 (charged in US dollars) a month. A mentor for you alone. Your own pace and goals. Times agreed with you.

## Online Python classes in Bottrop: what learners and parents ask

### Are the classes in German?

No, English is the only teaching language. Mentors in India keep to each learner's tempo and accent, and there is no German option.

### Is the lesson really live?

Yes, every minute of it. You and the mentor are on a video call together, looking at your own code, and no part of the course is pre-recorded.

### From what age?

Typed Python suits most learners from about 10, and our children's Python course takes nine year olds. Below that, Scratch comes first. There is no upper limit.

### Does Bottrop have Informatik in the Oberstufe?

In the NRW ministry's course file, four of Bottrop's five Gymnasien and Gesamtschulen list Informatik in the Oberstufe and none lists it as Leistungskurs. Schools may offer more through cooperations not shown in the file, so ask the school.

### When are classes in Bottrop time?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Bottrop afternoons are evenings in India.

### Is Informatik compulsory in NRW?

Yes, in grades 5 and 6 at all general school types, according to the Gesellschaft für Informatik. In the Qualifikationsphase it can be a three-hour Grundkurs or a five-hour Leistungskurs where a school offers it.

### Can you help with the Informatik Abitur?

We teach alongside the school course, including Java and Python and tracing code on paper, since the written NRW exam uses no computer. We promise no marks; school grades come from school.

### What is the Bottrop school data project?

A Python task we designed around the NRW school ministry's open files. Learners filter from 5,646 entries for NRW down to Bottrop's five Oberstufe schools in six steps, printing a count after each, and find Informatik listed at four of them.

### How big are the groups?

Each group has fifteen to twenty people of about the same age; private lessons are the alternative.

### How are fees charged?

Per month. Euro figures here use the ECB reference rate, the charge itself goes through in US dollars, and your bank converts it. Your trial costs nothing.

## Related pages

- [Coding classes in Germany](/coding-classes-in-germany): All of Germany on one page.
- [Coding classes in North Rhine-Westphalia](/coding-classes-in-north-rhine-westphalia): The NRW overview.
- [Informatik-Abitur in NRW](/informatik-abitur-nrw): The exam in detail.
- [AI and machine learning in Germany](/ai-and-machine-learning-classes-in-germany): A machine-learning project on German data.
- [Student labs](/student-labs): Projects by our students.
- [How we teach](/how-we-teach): How a live class works.

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
- [Online Python classes in Hagen](/online-python-classes-hagen-germany)
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

Book the free first class at [https://learn.modernagecoders.com/online-python-classes-bottrop-germany](https://learn.modernagecoders.com/online-python-classes-bottrop-germany#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
