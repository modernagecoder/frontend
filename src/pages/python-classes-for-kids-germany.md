---
title: "Python Classes for Kids in Germany: Live Online, in English"
description: "Python classes for kids in Germany aged 9 to 14, live online in English: when to start typed code, a project on German solar and wind data, and the Jugendwettbewerb."
canonical: https://learn.modernagecoders.com/python-classes-for-kids-germany
source: src/pages/python-classes-for-kids-germany.html
---
> Python classes for kids in Germany at Modern Age Coders are live online lessons in English for children of about 9 to 14 who are ready to type real code. Our Python and AI for Kids course begins with turtle drawings and small games, then moves to lists, functions and real German open data. A mentor based in India teaches at your child's speed, in German afternoons or at weekends, either in a class of fifteen to twenty or one to one.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / Python for kids

Germany · Python for children · Ages 9 to 14

# Python classes for kids in Germany

There comes a point when dragging blocks feels slow and a child wants to type real code. For most children that is somewhere between 9 and 11. This page is about that step: why Python is a good language to take it in, how it lines up with Informatik at a German school, a first project on real German electricity data that goes wrong in an instructive way, and a free national contest to aim at afterwards.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Ages: About 9 to 14; Language: Python 3, typed; First projects: Turtle drawings and games; Later: Real data and small AI; Group size: Fifteen to twenty, or one to one; First class: Free, no card needed. Rated 4.9 across 547 Google reviews.

## Three ways into Python for children in Germany

The main Python course, one that follows school Informatik in English, and one that uses Python to make school maths visible.

- [Python and AI, ages 9 and up](/courses/python-ai-kids-masterclass): The core course. Turtle art, games, then lists, files and small AI projects like the electricity one on this page.
- [Informatik Companion, from Klasse 5](/courses/informatik-companion-course-klasse-5-10): Follows the topics of German school Informatik in English, so typed code at home and Informatik at school support each other.
- [Maths through coding](/courses/maths-through-coding): Ages 10 to 15. Fractions, primes, graphs and chance worked out in Python, a good fit for children who like numbers.

## Is Python a good first typed language for a child?

For most children, yes. Python reads almost like short English sentences, it costs nothing, and it is a language adults use at work, so nothing learned is thrown away later.

### Free, and kept current

Python is developed, in the words of python.org, "under an OSI-approved open source license, making it freely usable and distributable, even for commercial use". No family needs to buy a licence, and a child can install it on any computer at home.

It is also very much alive: python.org lists Python 3.15.0 as released on 9 October 2026 and 3.15.2 on 25 October 2026. The programs on this page were tested with Python 3.14.

### Turtle, made for learners

Python ships with a drawing module called turtle. Its documentation explains that turtle graphics is "an implementation of the drawing tools introduced in Logo in 1967", created as an educational tool whose "instant, visible feedback" helps learners meet programming ideas.

That is why our nine year olds start there: four lines of code, and a square appears. Change one number, and it becomes a star.

**Scratch or Python? How we decide for each child (ours)**

| Sign | Stay with Scratch a little longer | Ready for Python |
|---|---|---|
| Reading | Still reads slowly or guesses words | Reads instructions alone and enjoys it |
| Typing | Hunts for every letter | Can type a short line without help |
| Patience | Upset when a game breaks | Curious about why it broke |
| Projects | Still has Scratch ideas to finish | Asks how to do things Scratch cannot |

Sources: python.org, About and Downloads pages; Python documentation, turtle module; both read on 3 November 2026. The table is our own placement guide; age alone does not decide it.

At a German school, typed programming arrives at different ages. The Informatik-Monitor 2026/27 shows Informatik for every pupil in grades 5 and 6 in Nordrhein-Westfalen, an Informatik focus in grades 6 and 7 at a Bavarian Gymnasium, one weekly lesson in grades 7 to 10 in Sachsen, and grades 9 and 10 in Niedersachsen. Which language a school uses is up to its curriculum and its teacher. What we teach is the thinking under any language: variables, conditions, loops, functions and data, so that whatever arrives on the school timetable feels familiar.

## Did the sun or the wind give Germany more electricity in 2025?

The Bundesnetzagentur publishes how much electricity Germany generated from each source, every day, on its SMARD platform, under a Creative Commons licence that allows reuse with credit. It is perfect for an eleven year old, and the first thing it teaches is that German numbers need translating before Python can read them.

### The data

From SMARD's download centre we take daily generation for Germany for all of 2025: 365 rows, one per day, with columns for solar (Photovoltaik), onshore wind and offshore wind, in megawatt hours. We keep those three in a small file, strom_2025.csv.

The file is written the German way. Columns are separated by semicolons, the thousands are marked with a full stop and the decimals with a comma, so 56.781,25 means fifty-six thousand, seven hundred and eighty-one and a quarter.

### The question

On how many days in 2025 did solar power produce more than all wind power together? A child usually guesses "summer, so about half". The program will tell us exactly, but only after we teach it to read the numbers.

The first version simply tries to treat the text as a number, which is what most beginners would do.

**Version 1: just read the number** (Python)
```python
import csv

with open("strom_2025.csv", encoding="utf-8") as f:
    rows = list(csv.DictReader(f, delimiter=";"))

first = rows[0]
print(first["datum"], first["sonne"])
print(float(first["sonne"]) + 1)
```
It prints 01.01.2025 56.781,25 and then stops with ValueError: could not convert string to float: '56.781,25'. Python expects 56781.25, written the English way.

Nothing is wrong with the data, and nothing is wrong with Python. They are simply using different conventions, and a programmer's job is to translate. A small function, zahl, removes the full stops and turns the comma into a point. With that in place the real question can be answered.

**Version 2: translate first, then compare** (Python)
```python
import csv

def zahl(text):
    # German style: 56.781,25 means 56781.25
    return float(text.replace(".", "").replace(",", "."))

with open("strom_2025.csv", encoding="utf-8") as f:
    rows = list(csv.DictReader(f, delimiter=";"))

sun_days = []
for row in rows:
    sun = zahl(row["sonne"])
    wind = zahl(row["wind_land"]) + zahl(row["wind_see"])
    if sun > wind:
        sun_days.append(row["datum"])

print("Days in 2025:", len(rows))
print("Days the sun beat the wind:", len(sun_days))
print("First:", sun_days[0], "Last:", sun_days[-1])
```
It prints: Days in 2025: 365, Days the sun beat the wind: 121 and First: 01.02.2025 Last: 08.11.2025.

So the sun won on 121 days, about one in three, the first on 1 February and the last on 8 November 2025. Version 3 counts the wins month by month, which turns one number into a pattern a child can explain.

**Version 3: count the wins by month** (Python)
```python
wins = {}
for row in rows:
    month = row["datum"][3:5]
    sun = zahl(row["sonne"])
    wind = zahl(row["wind_land"]) + zahl(row["wind_see"])
    wins[month] = wins.get(month, 0) + (1 if sun > wind else 0)

print(wins)
```
After Version 2, it prints: {'01': 0, '02': 5, '03': 11, '04': 21, '05': 16, '06': 17, '07': 16, '08': 22, '09': 8, '10': 4, '11': 1, '12': 0}.

**Solar against all wind in Germany, 2025, by month (our sums of SMARD daily values)**

| Month | Solar, TWh | Wind, TWh | Days solar was higher |
|---|---|---|---|
| January | 1.63 | 15.74 | 0 |
| April | 8.95 | 6.92 | 21 |
| June | 10.54 | 10.53 | 17 |
| August | 9.67 | 7.16 | 22 |
| October | 3.64 | 16.60 | 4 |
| December | 1.51 | 15.90 | 0 |
| Whole year | 73.78 | 132.96 | 121 |

Data: Bundesnetzagentur | SMARD.de, Stromerzeugung, daily values for Germany, 1 January to 31 December 2025, downloaded 3 November 2026, licence CC BY 4.0. Wind is onshore plus offshore. Monthly and yearly figures are our own sums of the daily values, in terawatt hours (1 TWh is 1,000,000 MWh), rounded to two decimals.

Over the whole year wind still produced far more, 132.96 TWh against 73.78. But the months tell a richer story. In April and August the sun led on most days; in January and December it never did once; and June was almost exactly a tie, 10.54 against 10.53. The sunniest single day was 20 June 2025, the dullest 5 January 2025, and the longest run of sunny wins was twelve days in a row, from 11 to 22 June.

1. **Ages 9 to 10.** Type float("56.781,25") into Python and read the error out loud. Then fix the text by hand until Python accepts it.
2. **Ages 10 to 12.** Run Version 2 and write zahl yourself without looking. Then find the sunniest day of the year with max.
3. **Ages 12 to 14.** Write Version 3, then add a line that prints a bar of # signs for each month, a text chart.
4. **Going further.** SMARD's full download also has a column for nuclear power, Kernenergie, and every day of 2025 shows only a dash there. What happens when zahl meets "-", and what should a careful program do instead?

## Is there a coding competition for children in Germany?

Yes. The Jugendwettbewerb Informatik, run by the Bundesweite Informatikwettbewerbe, is free, online and open in principle from grade 3. It sits one step above the Informatik-Biber puzzle quiz and is where real programming tasks begin.

**Jugendwettbewerb Informatik levels, as published by the organisers for 2026**

| Level | Recommended for | Tasks and time |
|---|---|---|
| Bronze | Grades 5 and 6 | 3 tasks in 30 minutes |
| Silber | Grades 7, 8 and 9 | 4 tasks in 40 minutes |
| Gold | Grade 10 and up | 6 tasks in 60 minutes |

Source: Bundesweite Informatikwettbewerbe, bwinf.de/jugendwettbewerb, read on 2 November 2026. Rounds in 2026: round 1 from 23 February to 8 March 2026, round 2 from 17 April to 3 May, and round 3 from 1 September together with the Bundeswettbewerb Informatik, with a deadline of 23 November 2026. The organisers report a record 71,971 participants.

Entry usually runs through a school, so a child should ask their Informatik or maths teacher. We are not connected with the organisers and we never use or copy their tasks. In class we write our own problems in the same spirit, and the free past rounds on the organisers' website are the right place to practise for real. Children who want a structured route can take our [German informatics competitions course](/courses/german-informatics-competitions-course-biber-bwinf-bwki).

## What can a child write in Python at 9, 11 and 13?

Roughly this, though children move at their own speed and the mentor sets the pace for each one.

### Around 9

Turtle drawings with loops, a guess-the-number game, a quiz that keeps score. Short programs, typed carefully, with lots of running and fixing.

### Around 11

Lists and functions, reading a small file, programs that answer a question about data, like the sun and wind file. Errors become clues rather than disasters.

### Around 13

Dictionaries, larger games, simple simulations and first steps in how a machine learns from examples. Code that another person can read and reuse.

Through all of it, the rule is the same: the child writes the code and can explain it. We do not let children paste in code they do not understand, from an AI tool or anywhere else. A short program that a ten year old can defend line by line is worth more than a long one they cannot.

**Example class times in Germany, and the mentor's side**

| In Germany | Mentor's time now | Mentor's time from 28 March 2027 |
|---|---|---|
| Weekday 16:15 | 20:45 | 19:45 |
| Saturday 12:00 | 16:30 | 15:30 |

Germany runs on MEZ (UTC+1) until 28 March 2027 and on MESZ (UTC+2) after it, under the Einheitenzeitgesetz; summer time last ended on 25 October 2026. India stays on UTC+5:30, so the mentor is four and a half hours ahead now and three and a half from late March. Examples only, not fixed batch times.

## Five Python milestones for children

Our own steps. They help us put a child in the right group and give parents a clear picture of progress.

**From first line to real data (ours)**

| Milestone | Usual age | Your child can |
|---|---|---|
| 1. Draw | 9 to 10 | Use turtle and a loop to draw a shape, and change it on purpose |
| 2. Decide | 9 to 11 | Write a game that reacts to the player with if, elif and else |
| 3. Reuse | 10 to 12 | Wrap a repeated job in a function and call it with different values |
| 4. Translate | 11 to 13 | Clean messy text, such as German-style numbers, before computing with it |
| 5. Ask the data | 12 to 14 | Answer a real question from a file and say how sure the answer is |

### For parents

Milestone 4 is the sun and wind project. Children who reach it stop being surprised by errors and start reading them.
We describe progress in what your child can build and explain, never in hours spent online.

### For children

An error message is Python telling you exactly what confused it. Read it slowly before you change anything.
Data from another country may write numbers differently. Look at a few rows before you trust any total.

## Nine more courses for children learning Python in Germany

Some come before Python, some sit beside it, some come after. All are live and in English.

### Before typing

Ages 6 to 12

- [Scratch Coding for Kids](/courses/scratch-programming-complete-course): Blocks first, for children not yet ready to type.
- [Coding for Kids](/courses/kids-coding-blocks-masterclass): The year-long route that ends where Python begins.
- [Computational thinking](/courses/problem-solving-and-computational-thinking-for-kids): Puzzles that build the logic Python needs.

### Beside Python

Ages 8 to 14

- [German informatics competitions](/courses/german-informatics-competitions-course-biber-bwinf-bwki): Original practice for the Biber and the Jugendwettbewerb.
- [AI literacy for kids](/courses/ai-literacy-for-kids-course): How machines learn from examples, without chatbot accounts.
- [Hackathon prep for kids](/courses/hackathon-prep-for-kids-coding-innovation-ai-projects-course): Twelve weeks of project work towards a free event, 8 to 12.

### After Python basics

Ages 9 to 16

- [C++ for kids](/courses/cpp-programming-for-kids-course): A second, stricter language, 9 to 12.
- [Websites for kids](/courses/kids-ai-web-development-course): HTML, CSS and a little JavaScript, built live.
- [Godot game development](/courses/godot-game-development-course-for-kids-and-teens): A real engine with a Python-like language, GDScript.

## How Python lessons run for a child in Germany

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Weekdays** Late afternoon in Germany, early evening for the mentor.
- **Saturday** Around midday, good for a longer project session.
- **Private** One to one at a time you agree, at your child's speed.

- **Typed from day one** No copying from slides; the child types every line.
- **Read the error** Mistakes are read aloud and fixed together.
- **Same mentor** One person all year, who knows your child's code.
- **Real data** Files from German open-data publishers, not toy lists only.
- **Explain it back** Each child explains their program before moving on.
- **A note home** Parents hear what was built and what comes next.

## Python class fees for families in Germany

The monthly fee buys eight live Python lessons. Prices on this page are euro figures derived from the European Central Bank reference rate, while the payment is processed in US dollars, so the final euro amount depends on your bank's own conversion.

- Free first class: Free. A free first Python class. A first program typed together. No card asked for.
- Group batch: €90 (charged in US dollars) a month. Fifteen to twenty children, similar age and level. One mentor for the year. Two lessons each week. Billed monthly, stop when you like.
- One to one: €134 (charged in US dollars) a month. Just your child and the mentor. Projects chosen around your child. Times to suit your family.

## Python classes for kids in Germany: questions

### Are the classes in German?

No. Lessons are live and in English only. Python itself is written in English words such as print, if and while, so learning it in English is natural. The mentor matches your child's pace and accent and keeps the language simple.

### What age is right for Python?

Usually around 9 to 11, once a child reads well and can type a short line. Younger children start with Scratch and move across when they are ready; age alone does not decide it.

### Does my child need to know Scratch first?

It helps but is not required. Children who have used Scratch already understand loops and conditions, so the first Python weeks feel easier. Beginners of 10 or older can start Python directly.

### Is Python free to install?

Yes. Python is open source under a licence that python.org describes as making it freely usable and distributable. It runs on Windows, macOS and Linux, and at the very start it can also run in a browser.

### Do German schools teach Python?

Schools choose their own tools within each Land's curriculum, and the language varies. What is fixed is when Informatik arrives, from grade 5 in Länder such as Nordrhein-Westfalen to grade 9 in Niedersachsen, according to the Informatik-Monitor 2026/27.

### When are the classes in German time?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. A class at 16:15 in Germany is 20:45 for the mentor in India until 28 March 2027.

### Can my child enter the Jugendwettbewerb Informatik?

Usually yes, through the school. It is free, online and open in principle from grade 3, with Bronze, Silber and Gold levels from 2026. Ask a teacher whether the school takes part. We are not connected with the organisers.

### Will my child use AI tools like ChatGPT in class?

No. We teach children to write and understand their own code. ChatGPT's own terms require users to be at least 13, with a parent's permission under 18, so it has no place in a class for younger children.

### How are fees shown and paid?

The monthly fee appears in euro, calculated with the European Central Bank reference rate. Payment goes through in US dollars, and your bank converts it, so the statement may differ slightly. The first class is free.

### What does my child need?

A laptop or desktop with a keyboard, a headset and a stable internet connection. We help install Python in class when the time comes.

## Related pages

- [Coding classes in Germany](/coding-classes-in-germany): Every Germany page in one place.
- [Coding for kids in Germany](/coding-classes-for-kids-germany): When each Land starts Informatik.
- [Python for beginner kids](/python-for-beginners-kids): The very first steps in Python.
- [Python at eleven](/python-for-11-year-olds): What an eleven year old can build.
- [Python at thirteen](/python-for-13-year-olds): Bigger programs for young teens.
- [AI tools age guide](/ai-tools-age-guide): Which AI tools allow which ages.

## Contact

Book the free first class at [https://learn.modernagecoders.com/python-classes-for-kids-germany](https://learn.modernagecoders.com/python-classes-for-kids-germany#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
