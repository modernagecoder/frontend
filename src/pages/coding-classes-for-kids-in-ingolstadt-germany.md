---
title: "Coding Classes for Kids in Ingolstadt: Live in English"
description: "Coding classes for kids in Ingolstadt aged 6 to 12, live online in English: what each age can learn, Bavarian school facts, and two Ingolstadt weather stations."
canonical: https://learn.modernagecoders.com/coding-classes-for-kids-in-ingolstadt-germany
source: src/pages/coding-classes-for-kids-in-ingolstadt-germany.html
---
> Coding classes for kids in Ingolstadt from Modern Age Coders are live online lessons in English for children aged 6 to 12. Children start with puzzles and Scratch games, move to typed Python around 9, and by 11 or 12 work with real Ingolstadt data. One regular mentor adapts to each child's pace and accent, one to one or in an age-matched batch of fifteen to twenty.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / [Bavaria](/coding-classes-in-bavaria) / Kids in Ingolstadt

Ingolstadt · Coding for children · 6 to 12

# Coding classes for kids in Ingolstadt

Ingolstadt runs two small weather stations about a kilometre apart, one in an industrial estate and one in a protected landscape, and publishes every reading. Ask a ten year old which is warmer and you get a confident answer; ask the data and you get two answers, depending on the time of day. That project sits at the centre of this page, alongside what children of 6 to 12 can learn in our live English classes, what Bavarian schools teach and when, and two free contests open to primary pupils this November.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Ages: 6 to 12, grouped by age; Path: Puzzles and Scratch, then Python; Group: Up to twenty children, or one to one; Each week: Two live lessons of an hour; Mentors: Teaching from India, in English; To try: A free first lesson. Rated 4.9 across 547 Google reviews.

## Which first coding course fits an Ingolstadt child?

Most families pick by how their child likes to learn: by playing, by puzzling or by typing.

- [Scratch Coding for Kids](/courses/scratch-programming-complete-course): For the child who learns by playing: three to four months of block coding that ends in games of their own design.
- [Problem Solving for Kids](/courses/problem-solving-and-computational-thinking-for-kids): For the puzzler: logic, patterns and step-by-step plans, the thinking behind both coding and contests like the Biber.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass): For a confident reader of about nine or older who wants real typed code, games, drawings and data.

## What can a child learn about coding at 6, at 9 and at 12?

More than most parents expect, provided each age gets the right tool. This is how we plan it.

**Coding at three ages (our plan)**

| Age | Tool | A typical project | The big idea |
|---|---|---|---|
| 6 to 7 | Picture puzzles, then Scratch Junior style blocks | A character that walks, jumps and says hello | Steps happen in order |
| 8 to 9 | Scratch | A catch-the-falling-apples game with a score | Repeat, and react to events |
| 9 to 10 | Typed Python | A turtle that draws a star or a spiral | Loops and variables in real code |
| 11 to 12 | Python with data files | Comparing two weather stations | Data can surprise you |

Our plan, not a school curriculum. Children move on when they are ready, not on a birthday; the mentor decides with you.

### At six: order

A six year old learns that a computer does exactly what it is told, in the order it is told. Getting a cat to cross the screen and stop at the right place is a real achievement, and a lesson in patience.

### At nine: rules

By nine, most children can handle if this, then that. A game that keeps score, gets faster and ends when you lose three lives already uses most of the ideas in a first programming course.

### At twelve: doubt

By eleven or twelve, children can read real data and, more importantly, question it. The weather project below is aimed at this age: the computer gives an answer, and the child finds out it is only half the story.

## Is the Ingolstadt industrial estate warmer than the countryside next to it?

The City of Ingolstadt publishes readings from two weather stations every ten minutes, free to reuse. One stands in an industrial estate, one in a protected landscape, about a kilometre apart. Children love this question because everyone has a guess.

### The data

The two datasets are Wetterstation Gewerbegebiet Stadt Ingolstadt and Wetterstation Landschaftsschutzgebiet Stadt Ingolstadt, published by the City of Ingolstadt under the licence CC BY 4.0. Their description says they were set up in the study area Gewerbegebiet Südost as part of an EU project.

We downloaded both on 3 November 2026. They run from 10 August 2025 to 3 November 2026, a reading every ten minutes, with the air temperature in a column called T. We save the time and temperature as industrial.csv and reserve.csv.

### The question

Which place is warmer? Many children guess the industrial estate, thinking of roofs, roads and machines. To test it fairly we must compare the two stations at exactly the same moments, so Version 1 keeps only the times that appear in both files.

Then it counts how often the industrial estate was warmer and works out the average difference.

**Version 1: compare the same moments** (Python)
```python
import csv

def load(name):
    with open(name, encoding="utf-8") as f:
        return {row["time"]: float(row["temp"]) for row in csv.DictReader(f)}

industrial = load("industrial.csv")
reserve = load("reserve.csv")
both = [t for t in industrial if t in reserve]
print("Moments measured at both stations:", len(both))

warmer = sum(1 for t in both if industrial[t] > reserve[t])
print("Industrial estate warmer:", warmer, "times")
gap = sum(industrial[t] - reserve[t] for t in both) / len(both)
print("Average difference:", round(gap, 1), "degrees")
```
It prints Moments measured at both stations: 62011, Industrial estate warmer: 44263 times and Average difference: 0.6 degrees.

So the children were right: the industrial estate was warmer at 44,263 of the 62,011 shared moments, and on average 0.6 degrees warmer. Case closed? Not quite. A single average can hide a pattern, so Version 2 splits the same differences by the hour of the day and looks at three hours: the middle of the night, noon and the evening.

**Version 2: split the difference by hour** (Python)
```python
by_hour = {}
for t in both:
    hour = int(t[11:13])
    by_hour.setdefault(hour, []).append(industrial[t] - reserve[t])

for hour in (3, 12, 21):
    diffs = by_hour[hour]
    print(f"{hour:02d}:00 average difference:", round(sum(diffs) / len(diffs), 1))
```
It prints 03:00 average difference: 1.0, 12:00 average difference: -0.4 and 21:00 average difference: 1.4.

At three in the morning and nine in the evening the industrial estate is clearly warmer. At noon the minus sign means the opposite: the protected landscape is a little warmer. The average of 0.6 was true, but it mixed two different stories into one number. A good scientist, of any age, says "it depends on the time" and shows the table.

**Industrial estate minus protected landscape, by hour (our calculation)**

| Hour in the file | Average difference, degrees | Times the industrial estate was warmer |
|---|---|---|
| 03:00 | 1.0 | 2,521 of 2,700 |
| 06:00 | 1.0 | 2,513 of 2,700 |
| 09:00 | -0.2 | 1,005 of 2,700 |
| 12:00 | -0.4 | 713 of 2,700 |
| 15:00 | 0.2 | 1,474 of 2,700 |
| 18:00 | 0.7 | 2,117 of 2,688 |
| 21:00 | 1.4 | 2,486 of 2,688 |

Data: Stadt Ingolstadt, Wetterstation Gewerbegebiet and Wetterstation Landschaftsschutzgebiet, licence CC BY 4.0, downloaded 3 November 2026. Comparisons and averages are our own. Two oddities a careful coder spots: neither file has any reading from the hour after midnight, and the noon readings are stored in an unexpected place in the file. Because our program looks up each reading by its time, not its line, neither problem changes the answers. The data does not explain why the stations differ, so we do not either.

1. **Ages 6 to 8, no screen.** Put a thermometer, or your hand, on a sunny pavement and on grass at lunchtime, then again after dark if you can. Draw two faces: warm and cool.
2. **Ages 8 to 10, Scratch.** Make two lists of five made-up temperatures, one for each place, and a sprite that says which list has the bigger total.
3. **Ages 10 to 12, Python.** Run both versions, then change Version 2 to print every hour from 1 to 23. Find the hour when the sign first flips.
4. **Going further.** Look at only the summer months. Does the noon difference grow or shrink? Guess first, then check.

## When does a child in Ingolstadt first meet Informatik at school?

Not in Grundschule. In Bavaria the first computing lessons come in grade 5 or 6, depending on the school type.

### Grades 1 to 4

Grundschule runs from grade 1 to grade 4, and there is no Informatik subject in it. Those are the years from about 6 to about 10, when children are curious about how games and tablets work and school has no slot for that question.

Ingolstadt children then move to a Mittelschule, a Realschule or a Gymnasium. The Mittelschule is Bavaria's name for the Hauptschule track.

### Grades 5 to 7

The Gesellschaft für Informatik reports that Bavarian Mittelschulen teach compulsory Informatik for one lesson a week in every grade from 5 to 10. At the Gymnasium, the subject Natur und Technik gives one weekly lesson an Informatik focus in grades 6 and 7.

A child who has coded since 7 or 8 starts those lessons already used to trying, failing and trying again.

**A Bavarian child's first computing lessons**

| School | Grades | Computing |
|---|---|---|
| Grundschule | 1 to 4 | No Informatik subject |
| Mittelschule | 5 to 10 | Informatik, one lesson a week, compulsory |
| Gymnasium | 6 and 7 | One lesson a week with an Informatik focus in Natur und Technik |

Sources: KMK, Primarbereich and school-type overview; Gesellschaft für Informatik, Informatik-Monitor 2026/27, page for Bayern; read on 2 November 2026. Population: Destatis, 31 December 2024: Ingolstadt 141,185, Bayern 13,248,928. Families from nearby Manching, Gaimersheim, Neuburg an der Donau and Eichstätt follow the same Bavarian rules.

### Informatik-Biber, 9 to 20 November 2026

A free online puzzle contest from Bundesweite Informatikwettbewerbe, open from grade 3, needing no coding knowledge. Primary pupils get nine tasks in 30 minutes. Schools sign up whole classes, so a short question to the class teacher tells you whether your child can take part.

### Mathematik-Olympiade, 11 November 2026

The Mathematik-Olympiade is open to grades 3 to 13 and has been offered to grades 3 and 4 since 2005; about 200,000 pupils take part each year. The 66th Olympiad's regional round is on 11 November 2026, after the school round.

We have no connection to either organiser and we never use their tasks. Our mentors write their own puzzles in a similar spirit. We teach alongside school; your child's teachers stay in charge of grades.

## How do classes in English work for an Ingolstadt child?

All our lessons are in English, live, with a mentor who adjusts to the child. We do not teach in German.

### Little English needed

Coding at this age is mostly shown, not told. A six year old who knows "go", "stop", "left" and "again" can follow the first lesson, and picks up the rest by doing.

### Pace and accent

The mentor slows down for younger children, rephrases when a face looks puzzled, and soon understands the child's own way of speaking, German words included.

### One person, every week

Children do better with someone they know. The same mentor teaches your child each week and notices when they are tired, bored or ready for something harder.

Our mentors are in India and teach over a live video link. For Ingolstadt families that means classes in the afternoon after school or on weekend mornings, which are Indian evenings and afternoons. Parents get a short note after classes on what was built and what comes next.

## What time are the classes in Ingolstadt?

Afternoons and weekend mornings, chosen when you book. The table shows a few examples against the mentor's clock.

**Sample Ingolstadt slots and the time in India**

| Ingolstadt | India this winter | India in summer 2027 |
|---|---|---|
| Friday 15:45 | 20:15 | 19:15 |
| Saturday 13:30 | 18:00 | 17:00 |
| Sunday 10:45 | 15:15 | 14:15 |

German time, set by the Einheitenzeitgesetz, is UTC+1 in winter (MEZ) and UTC+2 in summer (MESZ). The switch back happened on 25 October 2026; the next switch forward is 28 March 2027. India stays on UTC+5:30, so its clocks are four and a half hours ahead of Ingolstadt in winter and three and a half in summer. Example slots only.

**Bavarian school holidays in 2026/27 (KMK table)**

| Holiday | Dates |
|---|---|
| Herbstferien | 2 to 6 November 2026, this week |
| Weihnachtsferien | 24 December 2026 to 8 January 2027 |
| Osterferien | 22 March to 2 April 2027 |
| Pfingstferien | 18 to 28 May 2027 |
| Sommerferien | 2 August to 13 September 2027 |

Source: KMK, Ferien im Schuljahr 2026/2027 (Stand 9 October 2025), Bayern. Classes keep running in the holidays; families who travel simply pause.

## How do we track a child's progress?

Five stages of our own, used to choose the right group and to show parents what has changed.

**Five stages from 6 to 12 (our scale)**

| Stage | Age, roughly | The child can |
|---|---|---|
| 1. Steps | 6 to 7 | Give a character instructions in the right order |
| 2. Loops | 7 to 9 | Use repeat instead of copying the same block ten times |
| 3. Score | 8 to 10 | Keep a score in a variable and end the game at the right moment |
| 4. Python | 9 to 11 | Write a short typed program and fix a misspelt word in it |
| 5. It depends | 10 to 12 | Split a result into groups and explain why the groups disagree |

### For parents

Stage 5 is the weather project. "It depends, and here is on what" is one of the most grown-up answers a child can give.
We report what your child built and explained, not minutes on a screen.

### For children

An average is one number for many moments. Sometimes the moments disagree.
If a result has a minus sign, say out loud what it means.

## Nine more courses for Ingolstadt children

Live and in English, with a regular mentor, one to one or in an age-matched batch.

### Games

Ages 6 to 14

- [Coding for kids](/courses/kids-coding-blocks-masterclass): The long course: Scratch to games, apps and a first look at AI.
- [Minecraft coding](/courses/minecraft-coding-for-kids-course): From blocks to code in a familiar world, 7 to 12.
- [Roblox coding](/courses/roblox-game-coding-for-kids-lua-course): Their own Roblox games, scripted in Luau.

### Numbers

Ages 5 to 15

- [Primary maths](/courses/elementary-mathematics-complete-masterclass): Grades 1 to 5, taught live and patiently.
- [Mental maths](/courses/mental-maths-mastery-kids): Quick, confident number sense for 5 to 10 year olds.
- [Maths through coding](/courses/maths-through-coding): Python as a maths laboratory, 10 to 15.

### Making

Ages 8 to 12

- [App making](/courses/block-coding-app-development-masterclass): Working phone apps built from blocks.
- [Websites for kids](/courses/kids-ai-web-development-course): A first website, built from nine.
- [C++ for kids](/courses/cpp-programming-for-kids-course): Puzzles and small games in C++, 9 to 12.

## How do live classes work for an Ingolstadt family?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Weekday afternoons** When Ingolstadt schools let out.
- **Weekend** Saturday early afternoon or Sunday morning.
- **One to one** A slot agreed with your child's mentor.

- **Live** A real mentor, a real call, every lesson.
- **Age-matched** Children learn with others of a similar age.
- **Doing, not watching** Your child builds from minute one.
- **Patient English** Simple words, shown and repeated.
- **Parent notes** A short update on what was made.
- **Your choice of size** Up to twenty children, or just yours.

## Fees for Ingolstadt families

Families pay monthly for eight live classes. Prices are displayed in euro using the European Central Bank reference rate, but the charge goes through in US dollars; your bank converts it, so the amount on your statement may be a few cents different.

- Free first class: Free. A free first lesson. A puzzle and a first small game. No card needed.
- Group batch: €90 (charged in US dollars) a month. Fifteen to twenty children of a similar age. The same mentor each week. Two lessons a week. Monthly, no long contract.
- One to one: €134 (charged in US dollars) a month. Your child and their own mentor. Projects shaped around your child. Times that fit your family.

## Coding classes for kids in Ingolstadt: questions parents ask

### Are the classes in German?

No. Lessons are live and given in English only. Mentors keep the language simple for young children, adapt to each child's pace and accent, and show everything on screen, so a child still learning English can join in.

### Is 6 too young to start coding?

Usually not. Six year olds start with picture puzzles and simple blocks, with short, playful lessons and no typing. The free first class shows whether your child is ready.

### When do Bavarian schools start teaching Informatik?

Not in Grundschule. Mittelschulen teach compulsory Informatik for one lesson a week from grade 5 to 10, and Gymnasien give one weekly lesson in grades 6 and 7 an Informatik focus within Natur und Technik.

### When are classes in Ingolstadt time?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Afternoons after school and weekend mornings are the most popular.

### Where are the teachers?

Our mentors are in India and teach live over video. India is four and a half hours ahead of Ingolstadt in winter, so a Friday 15:45 class here is 20:15 for the mentor.

### How many children are in a group?

Fifteen to twenty children of a similar age. One-to-one lessons are also available: two private classes a week, at times you agree with the mentor.

### Can my child take part in the Informatik-Biber?

If the school registers. The Biber is free, needs no coding, and is open from grade 3; primary pupils get nine tasks in 30 minutes. In 2026 it runs from 9 to 20 November.

### What does my child need at home?

A computer or laptop with a mouse, a stable internet connection and a quiet corner. Younger children often like a parent nearby for the first lesson or two.

### How much does it cost?

A monthly fee, shown on this page in euro at the European Central Bank reference rate and charged in US dollars, which your bank converts, so the statement can differ slightly. The first lesson is free.

### Will my child use AI chatbots?

No adult chatbot accounts are used with children. Children learn how AI works through safe examples and always write and explain their own code.

## Related pages

- [Coding classes in Bavaria](/coding-classes-in-bavaria): Bavarian school rules and dates.
- [Online coding for kids in Germany](/online-coding-classes-for-kids-germany): How our children's classes work.
- [Scratch classes for kids](/scratch-classes-for-kids-germany): The usual first step.
- [Python for kids](/python-classes-for-kids-germany): Typed code from about nine.
- [Game coding for kids](/game-coding-classes-for-kids-germany): Games as a way into coding.
- [How we teach](/how-we-teach): Our live classes, explained.

## Contact

Book the free first class at [https://learn.modernagecoders.com/coding-classes-for-kids-in-ingolstadt-germany](https://learn.modernagecoders.com/coding-classes-for-kids-in-ingolstadt-germany#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
