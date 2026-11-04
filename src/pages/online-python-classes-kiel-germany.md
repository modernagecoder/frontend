---
title: "Online Python Classes in Kiel: Live Lessons in English"
description: "Online Python classes in Kiel for teens and adults, live in English: what a live lesson is like, the Python path, Informatik in Schleswig-Holstein, a ferry project."
canonical: https://learn.modernagecoders.com/online-python-classes-kiel-germany
source: src/pages/online-python-classes-kiel-germany.html
---
> Modern Age Coders teaches online Python classes for Kiel as live lessons on video, in English: a mentor sees your shared screen, follows every line you type and helps the moment you are stuck. Teenagers from about 13 and adults go from a first script to working with real data files and then a project of their own, in a group of 15 to 20 or one to one, with a regular mentor who adapts to your pace and accent.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / [Coding classes in Schleswig-Holstein](/coding-classes-in-schleswig-holstein) / Python in Kiel

Kiel · Python · Live online in English

# Online Python classes in Kiel

If you live in Kiel, the nearest Python teacher who can see your screen is, with us, a video call away. This page answers the honest questions about learning that way, lays out the Python path stage by stage, explains where Informatik sits in Schleswig-Holstein's schools, and works through a project on the city's own figures for the fjord ferries, where the number everyone would quote turns out to be the least interesting one in the file.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; For: Teens from about 13, and adults; You learn: Python 3, files, real data; How: Live video with screen sharing; Group: 15 to 20, or one to one; Mentors: In India, teaching in English; Try it: First lesson free. Rated 4.9 across 547 Google reviews.

## Which Python course suits a learner in Kiel?

Choose by who you are and what you want at the end: pupils, grown-ups, or anyone aiming at a recognised Python certificate.

- [Python for Teens](/courses/python-complete-masterclass-teens): For pupils from about 13. A steady course from first print() to files, small games and data, with homework that is checked live.
- [Python Masterclass for adults](/courses/python-programming-masterclass-zero-to-advanced-college): For students, career changers and professionals. Clean scripts, functions, modules and data handling at a working adult's pace.
- [PCEP and PCAP preparation](/courses/pcep-pcap-python-certification-course): For learners who like a clear goal. A structured route through the Python Institute's entry and associate syllabuses.

## What is a live online Python lesson really like?

Five questions Kiel learners ask before they book, with straight answers.

1. **Will I just watch someone else code?** No. You type, the mentor watches your shared screen. Explanations are short and the keyboard stays with you for most of the hour.
2. **What if I get stuck halfway through a line?** You say so, or type it in the chat, and the mentor looks at the exact line. That is the whole reason a lesson is live.
3. **Is a group lesson still personal?** In a group of 15 to 20, the mentor moves between learners' screens and brings the most useful mistake to everyone. If you want all the attention, one to one is there.
4. **What do I need at home in Kiel?** Any computer with a real keyboard, a headset or microphone, and internet that does not drop. The software costs nothing, and setting it up is the first job you do together.
5. **What happens between lessons?** One small task, written in the chat. The next lesson starts by running it together, mistakes included.

**An hour of live Python, roughly how it is spent (our lesson plan)**

| Minutes | What happens |
|---|---|
| 0 to 10 | Run last week's task together; fix whatever broke |
| 10 to 20 | A new idea, shown on a tiny example |
| 20 to 50 | You write code for a real problem; the mentor follows and questions |
| 50 to 60 | Recap in your own words; the next small task |

Our own lesson plan, adjusted by the mentor to the learner. Every minute is live, with an India-based mentor speaking English; there are no recordings to sit through.

## Can I learn Python in German with you?

No. Our classes are only in English. Here is why that works for most Kiel learners.

### One language, clearly

Every lesson is in English, taught by mentors in India. We do not offer German-speaking teachers, and we prefer you hear that before booking.

### Adapted to you

Mentors adjust their speed and words, repeat in a simpler way when asked, and soon know how you speak. Mixing in a German word is fine; you will be given the English one.

### Python speaks English

for, while, if, return, True, False: the language is built from English words, and its error messages are English too. Learning in English removes a layer of translation.

Kiel is a university and port city, and many learners here already work or study in English. For school pupils, an hour of spoken technical English each week is a bonus on top of the Python.

## What will I learn, and in what order?

Four stages. You finish each by building something, not by sitting a test.

**The Python path (our course plan, two live lessons a week)**

| Stage | Roughly | You learn | You build |
|---|---|---|---|
| First scripts | Weeks 1 to 5 | print, variables, input, if and else | A small quiz that keeps score |
| Structure | Weeks 5 to 12 | Loops, lists, dictionaries, functions | A game or a converter with clean functions |
| Data | Weeks 12 to 22 | Reading CSV files, counting, rates, missing values | An answer from a public dataset, like the ferries below |
| Your project | From about week 22 | Choosing a question and testing your own answer | A program and a short written explanation |

Week ranges are our planning figures, not guarantees. A learner who already knows some Python starts at the stage agreed in the free first lesson.

Two habits run through all four stages. First, you read every error message before asking for help, because it nearly always says which line is wrong. Second, when a program gives an answer, you ask whether it could be wrong. The ferry project trains the second habit.

## Are Kiel's fjord ferries as busy as they used to be?

The Landeshauptstadt Kiel publishes a yearly series for the ferries of the Schlepp- und Fährgesellschaft Kiel, from 1988, free to reuse under Datenlizenz Deutschland Zero 2.0. Our Data-stage learners use it to see why a rate tells you more than a total.

### The file

One row per year from 1988 to 2023, with the number of lines, the number of ships, the sailing hours (Fahrstunden) and the passengers (Fahrgaeste). Where there is no figure the file writes "k.A.", short for keine Angabe: no hours for 1988 to 1990, no passengers for 1999.

In 1988 the ferries carried 1,739,683 passengers with 11 ships. In 2023 they carried 1,262,500 with 16 ships.

### The question

Fewer passengers with more ships: are the ferries emptier? A total cannot say. What you need is a rate: passengers per sailing hour, which accounts for how much the boats actually ran.

The learner's copy is called kiel_ferries.csv. The first program skips the k.A. years and works out the rate for a few years across the decades.

**Version 1: passengers per sailing hour** (Python)
```python
import csv

years = []
with open("kiel_ferries.csv", encoding="utf-8") as f:
    rows = csv.reader(f, delimiter=";")
    next(rows)
    for row in rows:
        year, ships, hours, riders = row[4], row[6], row[7], row[8]
        if hours == "k.A." or riders == "k.A.":
            continue                    # k.A. = keine Angabe, no figure given
        years.append((int(year), int(ships), int(hours), int(riders)))

for year, ships, hours, riders in years:
    if year in (1991, 1998, 2019, 2023):
        print(year, "riders per sailing hour:", round(riders / hours))
print("Years with both figures:", len(years))
```
It prints: 1991 riders per sailing hour: 90, 1998 riders per sailing hour: 53, 2019 riders per sailing hour: 70, 2023 riders per sailing hour: 70 and Years with both figures: 32.

In 1991 every sailing hour carried about 90 passengers. By 1998, the lowest passenger year in the file at 1,010,924, it was about 53. Since then it has recovered to about 70 an hour, in 2019 and again in 2023. So the ferries are not emptier than in the late 1990s, even with more ships. A second look at the totals shows something odder.

**Version 2: does the series look measured?** (Python)
```python
flat = [r for y, s, h, r in years if 2008 <= y <= 2019]
print("2008 to 2019, lowest:", min(flat), " highest:", max(flat))
print("Spread as a share of the lowest:", round((max(flat) - min(flat)) / min(flat) * 100, 2), "%")
round_years = [y for y, s, h, r in years if r % 1000 == 0]
print("Years whose rider count ends in 000:", round_years)
```
It prints: 2008 to 2019, lowest: 1399437 highest: 1406574, Spread as a share of the lowest: 0.51 % and Years whose rider count ends in 000: [2007].

**Selected years from the Kiel ferry series, with our rate**

| Year | Ships | Sailing hours | Passengers | Per sailing hour (ours) |
|---|---|---|---|---|
| 1991 | 11 | 20,867 | 1,868,194 | 90 |
| 1998 | 9 | 19,067 | 1,010,924 | 53 |
| 2007 | 9 | 15,639 | 1,400,000 | 90 |
| 2019 | 11 | 20,109 | 1,402,801 | 70 |
| 2023 | 16 | 17,925 | 1,262,500 | 70 |

Data: Landeshauptstadt Kiel, Passagiere Schiffsverkehr der Kieler Schlepp- und Fährgesellschaft, via kiel.de/opendata and GovData, licence Datenlizenz Deutschland Zero 2.0, downloaded 3 November 2026. Rates and spreads are our own calculations; years marked k.A. are left out. We are not connected with the city or the ferry company.

For twelve years, 2008 to 2019, passengers stay between 1,399,437 and 1,406,574, a spread of half a percent, while sailing hours swing between 17,446 and 20,983. Real counts of a ferry service rarely sit that still while the timetable moves. And 2007 is exactly 1,400,000. A good analyst does not call this wrong; the file does not say how it was made. But they would write the question down: were these years counted, or estimated from tickets or a formula? Asking how numbers were produced is part of reading them.

1. **Run it.** Type Version 1 yourself and add 2010 and 2020 to the years printed.
2. **Passengers per ship.** Compute it for every year. When was it highest?
3. **Spot the flat line.** Find any other run of five or more years where passengers change by less than 1 percent.
4. **Write it up.** In five sentences, answer the page's question and say what you cannot know from this file.

## How much Informatik do pupils in Kiel get at school?

Since 2024/25 every pupil in Schleswig-Holstein has it, four weekly hours in total across grades 7 to 10.

### Sekundarstufe I

The Gesellschaft für Informatik quotes the rule in its Informatik-Monitor 2026/27: "Ab dem Schuljahr 2024/25 ist Informatik an allen Schularten verpflichtendes Unterrichtsfach. Der Gesamtumfang beträgt vier Wochenstunden in den Jahrgangsstufen 7 bis 10."

Schleswig-Holstein is one of four Länder the monitor lists as meeting the short-term recommendation of four compulsory hours.

### The Oberstufe

At Gemeinschaftsschulen and some Gymnasien, the Oberstufe has grade 11 as Einführungsphase and grades 12 and 13 as Qualifikationsphase; selected Gymnasien keep an eight-year route.

Python practice outside school helps most where the four hours run out: in the step from short exercises to a program of real size.

**Schleswig-Holstein school calendar, 2026 to 2027**

| Holiday | Dates |
|---|---|
| Autumn | 12 to 24 October 2026 |
| Christmas | 21 December 2026 to 6 January 2027 |
| Easter | 30 March to 10 April 2027 |
| Summer | 3 July to 14 August 2027 |

Sources: Gesellschaft für Informatik, Informatik-Monitor 2026/27, Schleswig-Holstein page and national overview; Kultusministerkonferenz, Ferien 2026/2027 (Stand 09.10.2025). Read 2 November 2026. Our lessons add to school Informatik rather than replace it, school marks are decided by the school alone, and we have no link to the Land or the KMK.

Pupils looking for a challenge this term have until 23 November 2026 for two national contests: the first round of the Bundeswettbewerb Informatik, open since 1 September 2026, and round 3 of the Jugendwettbewerb Informatik. Entry is usually through the school. We practise with our own problems and never reproduce the organisers' tasks.

## What time are lessons in Kiel?

India is ahead of Kiel, so an afternoon or early evening here is evening there. These are sample slots only.

**Sample Kiel lesson times next to India time**

| Kiel | India in winter (to 28 March 2027) | India in summer (from 28 March 2027) |
|---|---|---|
| 17:15 | 21:45 | 20:45 |
| 18:00 | 22:30 | 21:30 |
| Sunday 10:30 | 15:00 | 14:00 |

German time follows the Einheitenzeitgesetz: MEZ is UTC+1, MESZ is UTC+2. Clocks went back on 25 October 2026 and go forward on 28 March 2027. India holds UTC+5:30 year round, which makes the gap four and a half hours in the cold months and three and a half in the warm ones.

## How will I know I am getting better at Python?

Our checkpoints, shared with the learner and, for pupils, with parents.

**Python checkpoints (ours)**

| Checkpoint | Usually by | You can |
|---|---|---|
| Run | Week 1 | Write, save and run a script without help |
| Branch | Week 4 | Make a program choose between paths |
| Repeat | Week 8 | Use loops and lists without copying lines |
| Read data | Week 16 | Open a CSV file and handle a missing value |
| Compare fairly | Week 22 | Turn totals into rates before comparing years |

### Pupils and parents

Compare fairly is the ferry project. It is the same skill that makes a school chart or a Facharbeit convincing.
Progress notes describe what was built, never only time spent.

### Adults

Most adults reach Read data in about four months. That is when Python starts to save real time at work.
If a busy month gets in the way, the mentor continues from where you actually are.

## Nine more courses for Kiel learners

Taught the same way: live, in English, with a mentor who stays with you.

### Further Python

Teens and adults

- [Problem solving and DSA](/courses/problem-solving-dsa-masterclass-teens): Data structures and algorithms for teenagers.
- [Web apps in Python](/courses/python-web-development-django-flask-course): Flask and Django from first page to working app.
- [Git and GitHub](/courses/git-github-version-control-course-for-teens): Saving and sharing code the professional way.

### Data

Teens and adults

- [Data science for teens](/courses/data-science-course-for-teens-python-data): Cleaning, counting and charting real data.
- [Data analysis](/courses/data-analysis-mastery-course-college): Spreadsheets, SQL and Python together.
- [Statistics](/courses/statistics-probability-maths-course): Rates, spreads and fair comparisons.

### School and beyond

Pupils and adults

- [Informatik companion](/courses/informatik-companion-course-klasse-5-10): Support next to school Informatik.
- [Informatik Abitur in English](/courses/informatik-abitur-course-java-python): For the Oberstufe, beside the school course.
- [Python automation](/courses/python-ai-automation-masterclass-college): Scripts that do the boring work.

## How a week of live Python works from Kiel

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **After school** Late afternoons, for pupils.
- **Evenings** Weekday evenings, for adults.
- **Sunday** A relaxed morning slot.

- **Two live lessons** About an hour each.
- **One mentor** The same person each week.
- **Shared screen** Your code, seen as you type it.
- **One task** Small, clear, checked next time.
- **Real data** Files from public sources.
- **Your choice** Group of 15 to 20, or one to one.

## Fees for Python lessons in Kiel

A monthly plan covers eight live lessons. The amount appears in euro here, using the European Central Bank reference rate, but the charge itself is in US dollars, so your bank converts it and the euro figure on your statement can be a little different.

- Free first class: Free. First lesson free. Your first script, run live. No card.
- Group batch: €90 (charged in US dollars) a month. 15 to 20 learners at a similar stage. A regular mentor. Two lessons a week. Monthly, cancel anytime.
- One to one: €134 (charged in US dollars) a month. Just you and the mentor. Your own pace and project. Times you agree.

## Online Python classes in Kiel: questions

### Are the classes in German?

No. Lessons are live and only in English, taught by mentors based in India who adapt to your pace and accent. Python is written with English keywords, so the lesson and the code use the same words.

### Is this a video course?

No. Every lesson is a live call. The mentor sees your shared screen while you type, answers questions on the spot and checks your homework at the start of the next lesson.

### Do I need experience?

None. The first stage starts from print and variables. If you already code a little, the free first lesson finds the right stage for you.

### When are the lessons?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. In Kiel, pupils often choose late afternoons and adults weekday evenings or Sunday mornings.

### Does it replace Informatik at school?

No. In Schleswig-Holstein every pupil has four weekly hours of Informatik in total across grades 7 to 10. We teach alongside school, and the school course is the one that counts for marks and the Abitur.

### Can adults take part?

Yes. The Python Masterclass is designed for adults, and one-to-one lessons fit shifts and family life. Many adults use Python to handle spreadsheets and files at work.

### How large are the groups?

15 to 20 learners at a similar stage. A one-to-one plan gives two private lessons each week at times agreed with you.

### In which currency do I pay?

In US dollars, monthly. The fees here are shown in euro at the European Central Bank reference rate; your bank converts the dollar charge, so the euro amount booked may vary slightly. The first lesson is free.

### What is the ferry project?

An original project of ours on the Landeshauptstadt Kiel's ferry passenger series since 1988. Learners turn totals into passengers per sailing hour, find the low point in 1998, and notice that 2008 to 2019 barely moves and that 2007 is exactly 1,400,000.

## Related pages

- [Coding classes in Schleswig-Holstein](/coding-classes-in-schleswig-holstein): Our page for the Land.
- [Python course in Germany](/python-course-germany): The Python route in depth.
- [Coding for teens](/coding-classes-for-teens-germany): Courses for ages 13 to 18.
- [Career changers](/online-coding-course-for-career-changers-germany): Python as a new start.
- [Jugendwettbewerb Informatik](/jugendwettbewerb-informatik-preparation): Preparing for the contest.
- [How we teach](/how-we-teach): Our live format in detail.

## More pages for this Land

Part of the guide: [Coding classes in Schleswig-Holstein](/coding-classes-in-schleswig-holstein)

### Cities and pages in Schleswig-Holstein

- [Coding and AI classes in Lübeck](/coding-and-ai-classes-in-luebeck-germany)

More guides: [Coding classes in North Rhine-Westphalia](/coding-classes-in-north-rhine-westphalia), [Coding classes in Lower Saxony](/coding-classes-in-lower-saxony), [Coding classes in Land Bremen](/coding-classes-in-land-bremen), [Coding classes in Hesse](/coding-classes-in-hesse), [Coding classes in Bavaria](/coding-classes-in-bavaria), [Coding classes in Saxony-Anhalt](/coding-classes-in-saxony-anhalt), [Coding classes in Baden-Württemberg](/coding-classes-in-baden-wuerttemberg), [Coding classes in Saarland](/coding-classes-in-saarland), [Coding classes in Rhineland-Palatinate](/coding-classes-in-rhineland-palatinate), [Coding and maths in Berlin](/coding-and-maths-classes-in-berlin-germany), [Coding and maths in Hamburg](/coding-and-maths-classes-in-hamburg-germany), [Coding classes in Saxony](/coding-classes-in-saxony), [Coding classes in Thuringia](/coding-classes-in-thuringia), [Coding classes in Brandenburg](/coding-classes-in-brandenburg), [Coding classes in Mecklenburg-Vorpommern](/coding-classes-in-mecklenburg-vorpommern)

## Contact

Book the free first class at [https://learn.modernagecoders.com/online-python-classes-kiel-germany](https://learn.modernagecoders.com/online-python-classes-kiel-germany#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
