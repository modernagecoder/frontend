---
title: "Online Python Classes in Göttingen: Live and in English"
description: "Online Python classes in Göttingen, live in English for ages 10 to adult: what live online means, what to learn first, Informatik in Lower Saxony, a weather project."
canonical: https://learn.modernagecoders.com/online-python-classes-goettingen-germany
source: src/pages/online-python-classes-goettingen-germany.html
---
> Online Python classes for Göttingen at Modern Age Coders are live lessons over video, taught in English: the mentor and the learner see the same code, the learner types and runs it, and the mentor explains and corrects in real time. Pupils from about 10, students and adults move along one Python path at their own speed, and the mentor tunes the lesson to how fast they work and how they speak, whether they share it with fifteen to twenty others or have it alone.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / Göttingen, Python

Göttingen · Python · Taught live online

# Online Python classes in Göttingen

Göttingen has kept a weather record since the nineteenth century, and that record makes a fine Python teacher. On this page: what "live online" means in our Python classes, the order in which a beginner should learn the language, how it relates to Informatik at schools in Lower Saxony, and a project on seventy years of Göttingen weather in which copying three lines of code produces a wrong number that nobody would question.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; How: Live video and shared code; What: Python 3, from first line to projects; Who: From about 10 to adult; Size: 15 to 20, or one to one; Rhythm: Two live hours a week; First step: A free trial lesson. Rated 4.9 across 547 Google reviews.

## Which online Python course is right for a Göttingen learner?

One for pupils who like maths, one for teenagers, one for adults who want Python for data.

- [Maths through Coding](/courses/maths-through-coding): Pupils of about 10 to 15. School maths explored in Python: patterns, counting, averages and small simulations.
- [Python for Teens](/courses/python-complete-masterclass-teens): Ages 13 to 18. The full language from variables to functions and files, with projects on real data.
- [Data Analysis](/courses/data-analysis-mastery-course-college): Students and adults. Python for reading, checking and summarising data, the skills the weather project uses.

## Is an online Python class really live?

Ours are. Every lesson is a real-time video call with a mentor, and the learner's own code is on the shared screen for most of it.

**A live online class compared with a recorded course (our summary)**

|  | Our live online class | A typical recorded course |
|---|---|---|
| Who explains | A mentor, in real time | A video, the same for everyone |
| When you are stuck | You ask, and get an answer in seconds | You search, or wait for a forum reply |
| Who types | You, while the mentor watches | You, alone, after watching |
| Pace | Set by the mentor for you or your group | Set by you, which is easy to let slip |
| Errors | Read together, line by line | Often the point where learners stop |

### What a learner needs

A laptop or desktop computer, a browser, headphones and an internet connection good enough for a video call. In the first lesson the mentor helps install Python and a free editor.

Nothing else. There is no software to buy and no textbook to order.

### Language of teaching

All lessons are in English, taught by mentors based in India who adjust to each learner's accent and speed.

For a Göttingen learner that is rarely a hurdle: Python's keywords are English, and most of what is said in class is about code everyone can see.

## What can seventy years of Göttingen weather teach about Python functions?

That copied code drifts, and that a function stops it. The Deutscher Wetterdienst publishes every daily reading of its Göttingen station, open data under CC BY 4.0, and the years 1950 to 2019 have no missing highs, lows or rain values at all.

### The record

Station 01691 is simply called Göttingen. Its daily file starts on 1 January 1858 and ends on 31 December 2025, 59,690 days in all. We downloaded it on 3 November 2026 and keep four columns for class in goettingen_daily.csv: the date, the day's highest and lowest temperature, and the rain in millimetres.

The early decades have many gaps, so we work with 1950 to 2019, seven complete decades.

### Three questions

How many summer days, with a high of 25 degrees or more? How many frost days, with a low below 0? How many wet days, with 1 mm of rain or more? We ask them first for the 2010s.

A beginner usually writes the first count, then copies it twice and edits the copies. That is what Version 1 does, with one small slip in the third copy, the kind every programmer has made.

**Version 1: copy, paste, edit** (Python)
```python
import csv

with open("goettingen_daily.csv", encoding="utf-8") as f:
    days = [row for row in csv.DictReader(f) if "2010" <= row["date"][:4] <= "2019"]

summer = 0
for day in days:
    if day["high"] != "-999" and float(day["high"]) >= 25:
        summer += 1

frost = 0
for day in days:
    if day["low"] != "-999" and float(day["low"]) < 0:
        frost += 1

wet = 0
for day in days:
    if day["low"] != "-999" and float(day["low"]) >= 1.0:
        wet += 1

print("2010s days:", len(days), " summer:", summer, " frost:", frost, " wet:", wet)
```
It prints: 2010s days: 3652 summer: 436 frost: 792 wet: 2647.

Does 2,647 wet days in ten years sound right? It is about 72% of all days. Many people would accept it without a second look. But look at the third block: it still reads the column "low", copied from the frost block, and only the rule was changed. It has counted nights that stayed above 1 degree, not rainy days. No error message, just a believable wrong number.

The fix is not to be more careful with copying. It is to stop copying. The Python tutorial puts it plainly: "The keyword def introduces a function definition." Version 2 writes the counting once, as a function that takes the days, the column and the rule, and calls it three times for every decade. The rule is passed as a small anonymous function; in the tutorial's words, "Small anonymous functions can be created with the lambda keyword."

**Version 2: one function, called for every decade** (Python)
```python
def count(days, column, rule):
    total = 0
    for day in days:
        if day[column] != "-999" and rule(float(day[column])):
            total += 1
    return total

with open("goettingen_daily.csv", encoding="utf-8") as f:
    everything = list(csv.DictReader(f))

for start in range(1950, 2020, 10):
    decade = [d for d in everything if start <= int(d["date"][:4]) < start + 10]
    print(start, len(decade),
          count(decade, "high", lambda t: t >= 25),
          count(decade, "low", lambda t: t < 0),
          count(decade, "rain_mm", lambda r: r >= 1.0))
```
Run after Version 1, it prints one line per decade (start year, days, summer days, frost days, wet days): 1950 3652 265 926 1148, 1960 3653 269 842 1229, 1970 3652 306 673 1150, 1980 3653 333 764 1243, 1990 3652 376 692 1156, 2000 3653 379 753 1164, 2010 3652 436 792 1072.

**Göttingen station by decade, 1950 to 2019 (our counts)**

| Decade | Summer days (25 degrees or more) | Frost days (below 0) | Wet days (1 mm or more) |
|---|---|---|---|
| 1950s | 265 | 926 | 1,148 |
| 1960s | 269 | 842 | 1,229 |
| 1970s | 306 | 673 | 1,150 |
| 1980s | 333 | 764 | 1,243 |
| 1990s | 376 | 692 | 1,156 |
| 2000s | 379 | 753 | 1,164 |
| 2010s | 436 | 792 | 1,072 |

Counts are ours, from the DWD Climate Data Center daily file for station 01691 Göttingen (CC BY 4.0), fetched on 3 November 2026. The station metadata lists new positions on 15 December 1967, 12 August 1978, 10 November 1993 and 24 August 2007, so decades are not measured at exactly the same spot.

The real 2010s figure is 1,072 wet days, not 2,647. And with the function in place, the whole seventy-year table costs one loop. Any later fix, such as changing wet days to 5 mm or more, is made in one line and applies to every decade at once. That is why functions matter more than any other idea in the first months of Python.

1. **Pupils, about 10 to 13.** Before running Version 1, read the third block aloud and find the slip. Then run it and see whether you were right.
2. **Teenagers.** Add a fourth question, days of 30 degrees or more, with one line using count. Which decade had the most?
3. **Adults and students.** Rewrite count so it returns a share of days instead of a number, and explain why that is fairer for decades with 3,652 and 3,653 days.

## What should a beginner learn first in Python?

Our order, which every learner follows at their own speed. The weather project sits at step 5.

1. **Printing and variables.** Make the computer say and remember things.
2. **Decisions.** if, elif and else, with conditions such as "25 degrees or more".
3. **Loops.** for and while, and counting inside a loop.
4. **Lists and dictionaries.** Many values under one name.
5. **Functions.** Write a piece of code once, give it parameters, call it many times.
6. **Files.** Read a CSV file and check what is missing before trusting it.
7. **Projects.** A real question, real data and an answer you can explain.

Most self-taught beginners skip step 5 because programs still work without it, for a while. Then the copies drift, as Version 1 showed. In our classes functions come early and are used in every project from then on.

How long does it take? As our own rough guide, teenagers and adults with two lessons a week usually reach step 5 within two to three months and step 7 within six; younger pupils take longer. That is a planning figure from our teaching, not a promise.

## How does Python fit with Informatik at schools in Göttingen?

Every pupil in Lower Saxony now has Informatik in the last two years of Sekundarstufe I. Earlier, it depends on the school.

### What school provides

The Gesellschaft für Informatik reports that since the 2024/25 school year every general school in Lower Saxony teaches Informatik as a required subject in Klasse 9 and 10. Haupt-, Real- and Oberschulen may add a two-hour elective from Klasse 6.

Later on, few keep going: the same Monitor puts Lower Saxony among the three Länder where only about every twelfth Oberstufe pupil chooses Informatik.

### What our classes add

Learners who already write functions and read files arrive at grade 9 Informatik with time to think about ideas instead of syntax.

Our lessons run beside school and never replace it; marks come from the school course alone, and we promise none.

From the GI's Informatik-Monitor for 2026/27 (the Lower Saxony page and the Germany-wide summary), consulted 2 November 2026.

## What time are online Python lessons in Göttingen?

Late afternoon in Göttingen is evening in India, and weekend afternoons work well too. Lessons continue through Lower Saxony's school holidays unless you pause them.

**Göttingen start times as examples, with India's clock**

| Göttingen | India in winter (to 28 March 2027) | India in summer (from 28 March 2027) |
|---|---|---|
| 15:20 | 19:50 | 18:50 |
| 17:40 | 22:10 | 21:10 |
| Saturday 13:30 | 18:00 | 17:00 |
| Sunday 14:00 | 18:30 | 17:30 |

Germany switches between UTC+1 and UTC+2 under the Einheitenzeitgesetz. The clocks went back on 25 October 2026 and go forward on 28 March 2027; India stays at UTC+5:30, 4 h 30 ahead in winter and 3 h 30 in summer. No batch is fixed to these times.

**Göttingen school holidays in 2026/27**

| Holiday | First day | Last day |
|---|---|---|
| Autumn | 12 October 2026 | 24 October 2026 |
| Christmas | 23 December 2026 | 9 January 2027 |
| Winter | 1 February 2027 | 2 February 2027 |
| Easter | 22 March 2027 | 3 April 2027 |
| Summer | 8 July 2027 | 18 August 2027 |

Taken from the Kultusministerkonferenz overview of holidays for 2026/2027 (dated 9 October 2025), line for Niedersachsen, which also marks 7 May and 18 May 2027 as free days.

## How do you know your Python is getting stronger?

Our checkpoints. Each one is a habit, not a topic.

**Python habits, in the order we build them (ours)**

| Habit | What it looks like |
|---|---|
| Predict | Says what a program will print before running it |
| Read errors | Reads a traceback from the bottom and finds the line |
| No copies | Turns repeated code into a function |
| Check data | Counts missing values before computing anything |
| Explain | Describes a result and its limits in plain words |

### For learners

If you are about to paste the same block a third time, stop and write a function.
When a number looks reasonable, check it anyway. Reasonable is not the same as right.

### For parents

Ask your teenager to show you a function they wrote and the three places it is used.
A short note each month says what was built, what was hard and what is next.

## Nine more courses for Göttingen Python learners

For pupils, teenagers and adults. Taught live, in English, by a regular mentor.

### Pupils

About 9 to 13

- [Python and AI for kids](/courses/python-ai-kids-masterclass): A first Python course for younger pupils.
- [Informatik Companion](/courses/informatik-companion-course-klasse-5-10): Alongside school Informatik, grades 5 to 10.
- [Informatics competitions](/courses/german-informatics-competitions-course-biber-bwinf-bwki): Contest-style problems we write ourselves.

### Teenagers

13 to 18

- [Algorithms for teens](/courses/problem-solving-dsa-masterclass-teens): Faster programs and why they are faster.
- [Informatik Oberstufe](/courses/informatik-abitur-course-java-python): Java and Python for the Abitur years.
- [Git and GitHub](/courses/git-github-version-control-course-for-teens): Keep every version of your code.

### Adults

Study and work

- [Python from zero](/courses/python-programming-masterclass-zero-to-advanced-college): The complete language for adult beginners.
- [Maths for data analytics](/courses/data-analytics-mathematics-masterclass): The numbers behind every summary.
- [SQL databases](/courses/mysql-database-complete-masterclass-college): Store and query data properly.

## How are online Python lessons set up for Göttingen?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Weekday afternoons** After school or lectures.
- **Weekday evenings** Until about 18:00 Göttingen time.
- **Weekends** Saturday or Sunday afternoons.

- **Shared screen** Mentor and learner see the same code.
- **Learner at the keys** You type; the mentor guides.
- **Same mentor** One person who follows your progress.
- **Real data** German open data from the first months.
- **Two hours a week** Two live lessons of an hour.
- **Your choice of size** A class of 15 to 20, or one to one.

## What does an online Python class cost in Göttingen?

Eight live lessons make up each monthly fee. Our euro figures come from the European Central Bank reference rate; your card is charged in US dollars and your bank does the exchange, so the euro amount it books can be a little different.

- Free first class: Free. A free trial lesson. Your first Python program, live. No payment details needed.
- Group batch: €90 (charged in US dollars) a month. A class of 15 to 20 of similar age. One mentor throughout. Two lessons each week. Pay by the month.
- One to one: €134 (charged in US dollars) a month. A private mentor. The plan built around you. Times you agree together.

## Online Python classes in Göttingen: frequently asked

### Are the classes in German?

No. All lessons are live and taught in English only, by mentors based in India who adapt to your pace and accent. We do not run German-language classes.

### Are the lessons live or recorded?

Live. Every lesson is a real-time video call with a mentor, with your code on the shared screen. There are no recorded lessons to work through alone.

### From what age can someone start?

From about 10 for this Python path, once typing is comfortable; younger children usually start with Scratch. Adults of any age are welcome.

### What should I learn first in Python?

Printing, variables, decisions and loops, then lists and dictionaries, then functions, then files. Functions come early in our classes because copied code causes hidden mistakes.

### When are lessons in Göttingen time?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Mentors in India teach in their evening while it is afternoon in Göttingen.

### Is Informatik compulsory at schools in Lower Saxony?

For Klasse 9 and 10, yes: the Gesellschaft für Informatik records it as required at every general school since 2024/25, with optional electives from Klasse 6 at some school types.

### What is the Göttingen weather project?

A Python project we wrote on the DWD station Göttingen. Counting summer, frost and wet days by copying code gives 2,647 wet days in the 2010s, a believable but wrong number; one function gives the right answer, 1,072, and a seventy-year table.

### Do I need to install anything?

Python and a free code editor, which the mentor helps you install in the first lesson. You also need a browser for the video call and ideally headphones.

### How large are the groups?

Between 15 and 20 people of roughly the same age share a group. Private lessons with your own mentor are the other option.

### How are fees paid?

Each month. The page converts fees into euro with the ECB reference rate, while the charge runs in US dollars for your bank to change. Your trial costs nothing.

## Related pages

- [Coding classes in Germany](/coding-classes-in-germany): Everything we offer in Germany.
- [Coding classes in Lower Saxony](/coding-classes-in-lower-saxony): Rules and dates for the whole Land.
- [Informatik-Abitur in Niedersachsen](/informatik-abitur-niedersachsen): The exam at the end of school.
- [AI and machine learning in Germany](/ai-and-machine-learning-classes-in-germany): Where Python can lead.
- [Student labs](/student-labs): What our students build.
- [How we teach](/how-we-teach): Our method in detail.

## Contact

Book the free first class at [https://learn.modernagecoders.com/online-python-classes-goettingen-germany](https://learn.modernagecoders.com/online-python-classes-goettingen-germany#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
