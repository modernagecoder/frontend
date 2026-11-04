---
title: "Online Python Classes in Bochum: Live Lessons in English"
description: "Online Python classes for Bochum: what a live lesson looks like, the path from first line to real data, NRW Informatik facts and a Bochum solar roof project."
canonical: https://learn.modernagecoders.com/online-python-classes-bochum-germany
source: src/pages/online-python-classes-bochum-germany.html
---
> Online Python classes for Bochum learners at Modern Age Coders are live video lessons in English, never recordings: a regular mentor shares the screen with the learner, watches each line as it is typed and explains errors on the spot, at the learner's pace and in an accent they can follow. Children start from about 9, teenagers and adults at any level. Classes run in a group of 15 to 20 or one to one, after school, after work or at weekends.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / [Coding classes in North Rhine-Westphalia](/coding-classes-in-north-rhine-westphalia) / Python in Bochum

Bochum · Python · Live online

# Online Python classes in Bochum

"Online" can mean a video you pause or a person who watches you type. Our Python classes in Bochum are the second kind: a mentor and a learner on the same screen, in real time, in English. This page shows what one lesson looks like from the first minute to the last, the route from a first line of Python to a real dataset, how that sits next to Informatik at an NRW school, and a project on the solar panels the city has put on its own roofs.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Language taught: Python 3; Ages: 9 to 12, 13 to 18, adults; Format: Live video, shared screen; Group: 15 to 20 learners, or 1-on-1; You need: A laptop or desktop and a headset; First class: Free, no card needed. Rated 4.9 across 547 Google reviews.

## Python courses for Bochum learners, by age

The same language at three speeds. All three begin with typed code in the first lesson and end with projects on real data.

- [Python and AI for Kids](/courses/python-ai-kids-masterclass): Ages 9 to 12. Turtle graphics, small games and child-safe AI ideas, with short exercises so a young typist never gets lost.
- [Python for Teens](/courses/python-complete-masterclass-teens): Ages 13 to 18. The whole language, from variables to classes and files, at the depth an Oberstufe Informatik pupil needs.
- [Python from Zero to Advanced](/courses/python-programming-masterclass-zero-to-advanced-college): Adults and students. A complete route for beginners, with automation and data work once the basics are solid.

## What happens in a live online Python lesson?

Parents often picture a webinar. It is closer to sitting next to a patient programmer who can see your screen. Here is how one of our lessons usually runs.

1. **Minutes 0 to 5: a quick look back.** The mentor asks what the learner remembers from last time and runs last week's program together, so the lesson starts from something that works.
2. **Minutes 5 to 20: one new idea.** A single concept, such as a loop or a dictionary, shown in a few lines. The mentor types slowly and says each line aloud in plain English.
3. **Minutes 20 to 45: the learner drives.** The learner shares their screen and writes the next part themselves. When an error appears, the mentor asks what the message says before saying what it means.
4. **Minutes 45 to 55: a small change.** The learner alters the program on purpose, a different file, a new rule, a larger number, and predicts the result before running it.
5. **Minutes 55 to 60: what to try next.** One short task for the week, never hours of homework, and a note on what was hard today.

Our own lesson pattern. Group lessons follow the same rhythm, with learners taking turns to share their screen.

### What a Bochum learner needs at home

A laptop or desktop computer, a stable internet connection and a headset with a microphone. A tablet is fine for watching but awkward for typing code, so we ask for a keyboard from the first lesson.

Python itself is free. In the first lesson the mentor helps install it or opens a browser editor, whichever suits the computer, so nothing has to be set up in advance.

### What online gives that a room cannot

The mentor sees the learner's actual code, not a description of it. A missing bracket on line 14 is found in seconds, and the learner sees how it was found.

There is no journey across Bochum after school, no waiting for a course to open in your part of the city, and the same mentor follows the learner if the family moves.

Every lesson is taught in English only. Python's own words, print, for, if, are English already, so a learner picks up programming English along the way. Mentors keep sentences short, repeat when asked, and get used to each learner's accent within a few weeks.

## How long does it take to go from a first line of Python to real data?

For most learners, between six months and a year at two lessons a week. The stages are the same at every age; only the pace and the examples change.

**Our Python stages, with a typical time at two lessons a week**

| Stage | The learner writes | Children from 9 | Teenagers and adults |
|---|---|---|---|
| 1. Talking to the computer | print, input, variables and arithmetic | Weeks 1 to 4 | Weeks 1 to 2 |
| 2. Decisions and repeats | if, for and while | Months 2 to 3 | Weeks 3 to 6 |
| 3. Collections | Lists and dictionaries | Months 4 to 6 | Months 2 to 3 |
| 4. Files and data | Reading a CSV file and summarising it | Months 7 to 10 | Months 3 to 5 |
| 5. Own projects | A program with a question of their own | From month 10 | From month 5 |

Our own course plan; real progress varies with practice time and with the learner's English.

The solar project below sits at stage 4. It uses nothing more advanced than a list, a dictionary, a loop and the statistics module that comes with Python, which is exactly why we like it: a learner who has done stages 1 to 3 properly can write all of it.

## How much solar power has Bochum put on its own buildings?

Stadt Bochum publishes a list of the photovoltaic installations on municipal buildings, with their capacity and the year each one went into operation, under the Datenlizenz Deutschland Namensnennung 2.0. Fifty-eight rows, and two lessons inside them.

### The file

The dataset is Photovoltaikanlagen auf städtischen Gebäuden on the city's open data portal. We downloaded bochum_pvanlagen.csv on 3 November 2026: 58 rows, separated by semicolons, with the building, the Stadtbezirk, the roof shape, the capacity and the year.

The portal explains its columns: LEISTUNG is "Installierte Leistung in kWp", the installed capacity in kilowatt peak, and INBETRIEBN is described as the date of commissioning, although the file holds only a year.

### The questions

What is a typical installation on a Bochum city building? And when did most of the capacity arrive?

Both sound like one line of code. Both have an answer that changes once you look at the numbers properly.

**Step 1: total, mean and median** (Python)
```python
import csv
import statistics

with open("bochum_pvanlagen.csv", encoding="utf-8-sig") as f:
    roofs = list(csv.DictReader(f, delimiter=";"))

kwp = [float(r["LEISTUNG"]) for r in roofs]
print("Installations:", len(kwp))
print("Total kWp:", round(sum(kwp), 2))
print("Mean kWp:", round(statistics.mean(kwp), 2))
print("Median kWp:", statistics.median(kwp))
print("Largest:", max(kwp), " Smallest:", min(kwp))
```
It prints Installations: 58, Total kWp: 3629.06, Mean kWp: 62.57, Median kWp: 30.04 and Largest: 625.0 Smallest: 2.28.

The mean says a typical installation is about 63 kWp. The median, the middle value when all 58 are lined up, says about 30. They disagree by a factor of two because one installation is enormous: the largest is 625 kWp, more than a sixth of the city's whole list on its own. The mean shares that giant out across every row; the median hardly notices it. Step 2 proves it.

**Step 2: take the largest away and look again** (Python)
```python
rest = sorted(kwp)[:-1]          # every installation except the largest
print("Mean without the largest:", round(statistics.mean(rest), 2))
print("Median without the largest:", statistics.median(rest))
```
Run after Step 1. It prints Mean without the largest: 52.7 and Median without the largest: 30.0.

Removing one row out of 58 moves the mean by almost 10 kWp and the median by 0.04. That is the habit we want a learner to keep for life: when someone quotes an average, ask which one, and whether a single huge value is doing the work.

**Step 3: a running total by year** (Python)
```python
by_year = {}
for r in roofs:
    year = r["INBETRIEBN"]
    by_year[year] = by_year.get(year, 0) + float(r["LEISTUNG"])

running = 0
for year in sorted(by_year):
    running += by_year[year]
    if year >= "2021":
        print(year, "added", round(by_year[year], 2), " running total", round(running, 2))

print("Share added in 2025:", round(100 * by_year["2025"] / running, 1), "%")
```
Run after Step 1. It prints five lines from 2021 added 84.2 running total 493.48 to 2025 added 2279.95 running total 3629.06, then Share added in 2025: 62.8 %.

**Capacity added on Bochum city buildings by year of commissioning, 2021 to 2025 (our calculation)**

| Year | Rows in the file | kWp added | Running total, kWp |
|---|---|---|---|
| 2021 | 2 | 84.2 | 493.48 |
| 2022 | 4 | 149.86 | 643.34 |
| 2023 | 3 | 73.5 | 716.84 |
| 2024 | 10 | 632.27 | 1,349.11 |
| 2025 | 21 | 2,279.95 | 3,629.06 |

Data: Stadt Bochum, Bochum, POI, Photovoltaikanlagen auf städtischen Gebäuden, bochum.opendata.ruhr, Datenlizenz Deutschland Namensnennung 2.0, file bochum_pvanlagen.csv downloaded 3 November 2026. Sums, shares and the running total are our own. The earliest row in the file is from 1998.

The running total tells a story the full list hides. Almost two thirds of all the capacity in the file, 62.8 percent, is in rows dated 2025, and 2024 and 2025 together hold 31 of the 58 rows. A learner can say exactly that, and should stop there: the file lists installations, not plans or reasons, so it cannot tell us why 2025 was so busy or whether removed panels are still listed. Saying what the data cannot answer is part of the answer.

1. **Ages 9 to 12.** Copy ten capacities into a list, find the largest and the smallest, then sort the list and point to the middle one.
2. **Ages 13 to 18.** Run all three steps, then group by BEZIRK and decide whether the mean or the median is fairer for comparing the city districts.
3. **Adults.** Plot the running total as a line chart and write the one sentence you would put under it in a report, with the licence named.
4. **Going further.** The file mixes spellings such as Flachdach/ Schrägdach and Flach-/Schrägdach. Write a small function that tidies the roof shapes into fewer groups, and count how many rows each group has.

## Where does Python meet Informatik at a Bochum school?

Bochum schools follow the rules of Nordrhein-Westfalen, which gives every pupil a short, early start in Informatik and leaves the rest to choice.

### Grades 5 and 6

NRW makes Informatik a compulsory subject in grades 5 and 6 at all general school types, according to the GI Informatik-Monitor 2026/27. For many Bochum children this is the first time code appears on the timetable.

### The middle years

After grade 6, Informatik depends on what the school offers and what the pupil picks. A learner who wants to keep programming between 12 and 15 often has to do it outside school, which is where a weekly class helps most.

### The Oberstufe

In the Qualifikationsphase Informatik can be a Grundkurs of three hours a week or a Leistungskurs of five. Written Abitur tasks are set centrally, and no computer is used to answer them.

Because the written Informatik Abitur in NRW is done on paper, a pupil has to read and trace a program without running it. Our older learners practise that on purpose: before pressing run, they write down what they expect each line to print. We teach next to school and never instead of it; the school course is the one that counts for marks.

On the Destatis municipal register Bochum counted 358,676 residents on 31 December 2024. It sits between Essen (574,682) and Dortmund (603,462), with Herne (155,851) and Gelsenkirchen (267,930) to the north and Witten and Hattingen to the south. Since every lesson is online, a learner in any of those places gets the same mentor and the same lessons; only the school holidays depend on the Land, and all of these towns are in NRW.

Python learners who enjoy puzzles can try the national informatics competitions run by BWINF. The Informatik-Biber 2026 runs in schools from 9 to 20 November 2026, round 3 of the Jugendwettbewerb Informatik closes on 23 November 2026, and round 1 of the 45th Bundeswettbewerb Informatik runs from 1 September to 23 November 2026. We have no connection with BWINF.

## What time are online Python classes in Bochum?

Learners pick slots that suit Bochum; the mentor works in Indian time, several hours ahead. Below are typical examples, not fixed batches.

**Sample Bochum lesson times and the matching time for a mentor in India**

| Bochum | Mentor, MEZ months | Mentor, MESZ months |
|---|---|---|
| 16:45 on a weekday | 21:15 | 20:15 |
| 17:45 on a weekday | 22:15 | 21:15 |
| Saturday 12:00 | 16:30 | 15:30 |
| Sunday 09:45 | 14:15 | 13:15 |

The Einheitenzeitgesetz gives Germany MEZ, one hour ahead of UTC, for the winter months and MESZ, two hours ahead, for the summer months. MESZ ended this year on 25 October 2026 and resumes on 28 March 2027. India stays at UTC+5:30, which puts the mentor four and a half hours ahead of Bochum until late March, then three and a half.

### School holidays in NRW, 2026/27

The KMK calendar for Nordrhein-Westfalen lists the Herbstferien from 17 to 31 October 2026, Christmas from 23 December 2026 to 6 January 2027, the Osterferien from 22 March to 3 April 2027, a single Pfingsten day on 18 May 2027, and the Sommerferien from 19 July to 31 August 2027.

### What happens to classes

Nothing, unless you ask. The mentors do not follow the NRW calendar, so many Bochum learners use the long summer break for extra practice. If you travel, tell the mentor and the lessons wait for you.

## How a Bochum learner knows the Python is sinking in

Our own checkpoints. The mentor uses them to decide when to move on, and shares them in the monthly progress note.

**Python checkpoints (ours)**

| Checkpoint | Usually reached | The learner can |
|---|---|---|
| Reads an error | Month 1 | Find the line an error points to and say what went wrong |
| Predicts output | Month 2 | Write down what a short loop prints before running it |
| Chooses a structure | Month 4 | Decide between a list and a dictionary and explain why |
| Summarises a file | Month 6 | Read a CSV file and report a count, a total and a median |
| Questions a result | Month 8 | Spot when one value or one missing row changes the story |

### For learners

An average without a median is half a sentence.
Before you press run, say out loud what you expect to see.

### For parents

Ask your child to show you an error message and explain it. That one habit is worth more than a finished game.
Progress shows in what your child can explain, not in how long they spent at the computer.

## Nine more courses for Bochum Python learners

For when the basics are in place. Each is taught live, in English, by the same mentor every week.

### Python with data

Teenagers and adults

- [Data science for teens](/courses/data-science-course-for-teens-python-data): Charts, tables and a first model, on datasets like this one.
- [Data analysis for adults](/courses/data-analysis-mastery-course-college): Python, SQL and spreadsheets used together at work.
- [Statistics and probability](/courses/statistics-probability-maths-course): Means, medians and spread, with the reasons behind them.

### Python to build things

Ages 13 and up

- [Web apps with Django and Flask](/courses/python-web-development-django-flask-course): From a script to a site other people can use.
- [Automation with Python](/courses/python-ai-automation-masterclass-college): Scripts that rename, sort and report while you do something else.
- [Machine learning for teens](/courses/ai-ml-masterclass-teens): Models trained and tested in Python, maths included.

### Python for school and contests

Ages 10 to 19

- [Informatik Abitur in English](/courses/informatik-abitur-course-java-python): Grundkurs and Leistungskurs topics, in Java or Python.
- [Biber, BWINF and BWKI](/courses/german-informatics-competitions-course-biber-bwinf-bwki): Puzzle thinking for the national contests, with problems we write.
- [Maths through coding](/courses/maths-through-coding): School maths explored with short Python programs.

## How online Python classes are organised for Bochum

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Weekday late afternoon** The usual choice for school pupils in Bochum.
- **Weekday early evening** Often taken by students and working adults.
- **Saturday or Sunday** Morning or midday, for anyone with full weekdays.

- **Shared screen** The mentor sees every keystroke as it happens.
- **Two lessons a week** Short gaps, so nothing is forgotten in between.
- **Plain English** Short sentences, repeated whenever asked.
- **No recordings** Every minute is taught by a person, live.
- **Small weekly task** Ten or twenty minutes, never an evening of homework.
- **Group or solo** Join 15 to 20 others, or learn alone with a mentor.

## Fees for online Python classes in Bochum

A month of lessons, eight in all, has one price. That price is displayed here in euro using the European Central Bank reference rate; when you pay, the amount is charged in US dollars and converted by your card provider, which can leave a small difference on the statement.

- Free first class: Free. A free first Python lesson. A short program written together. No card needed.
- Group batch: €90 (charged in US dollars) a month. 15 to 20 learners at a similar level. A regular mentor. Two lessons a week. Monthly, no long contract.
- One to one: €134 (charged in US dollars) a month. One learner and one mentor. Pace and projects chosen together. Times agreed in advance.

## Online Python classes in Bochum: what people ask

### Are the classes in German?

No. Every lesson is live and taught in English only, by mentors who adapt to the learner's pace and accent. Python's keywords are English words anyway, so learners pick up programming English as they go.

### Is an online Python class a recorded course?

No. Each lesson is live with a mentor on video who sees the learner's screen, answers questions as they come and fixes errors together with the learner. Nothing is pre-recorded.

### What age can someone start Python?

Most children are ready to type Python at about 9. Younger children usually start with Scratch first. There is no upper age limit; adults join from zero.

### What equipment do we need in Bochum?

A laptop or desktop computer with a keyboard, a reliable internet connection and a headset with a microphone. Python is free, and the mentor helps set it up in the first lesson.

### Does this help with Informatik at an NRW school?

It can, as extra practice next to school. NRW teaches compulsory Informatik in grades 5 and 6 and offers it as a Grundkurs or Leistungskurs in the Oberstufe. The school course is the one that counts for marks; we do not set or grade school work.

### When do online Python classes run in Bochum time?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. School pupils mostly take late afternoon slots, adults early evening or weekend ones.

### Where are the mentors based?

In India. In winter India is four and a half hours ahead of Bochum, so a 16:45 lesson in Bochum is 21:15 for the mentor. From 28 March 2027 the gap is three and a half hours.

### How is the fee shown and paid?

It is a monthly fee for eight lessons. This page shows it in euro using the European Central Bank reference rate; the charge is taken in US dollars and your card provider converts it, so your statement may show a slightly different euro amount.

### Can my child join a group with friends from Bochum?

Groups are formed by age and level rather than by city, with 15 to 20 learners. Friends of a similar level can ask to be placed together, and we try to arrange it.

### What will the learner build?

Short programs first, then games, then tools that read real data, such as the Bochum solar roof file on this page. Older learners finish with a project around a question of their own.

## Related pages

- [Coding classes in Germany](/coding-classes-in-germany): Our hub for learners across Germany.
- [Coding classes in North Rhine-Westphalia](/coding-classes-in-north-rhine-westphalia): NRW rules, holidays and data.
- [Python classes for kids](/python-classes-for-kids-germany): When children are ready to type code.
- [Coding for teens in Germany](/coding-classes-for-teens-germany): Courses for ages 13 to 18.
- [Abitur computer science in English](/abitur-computer-science-in-english): Informatik in the Oberstufe.
- [Informatik-Biber practice](/informatik-biber-practice-in-english): Puzzles in the spirit of the contest.

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
- [Online Python classes in Bottrop](/online-python-classes-bottrop-germany)
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

Book the free first class at [https://learn.modernagecoders.com/online-python-classes-bochum-germany](https://learn.modernagecoders.com/online-python-classes-bochum-germany#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
