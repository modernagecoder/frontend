---
title: "Coding Classes for Kids in Moers: Live Online, in English"
description: "Coding classes for kids in Moers aged 6 to 12: live online in English, what NRW schools teach, free contests and a St. Martin lantern walk data project."
canonical: https://learn.modernagecoders.com/coding-classes-for-kids-in-moers-germany
source: src/pages/coding-classes-for-kids-in-moers-germany.html
---
> For Moers children between 6 and 12, Modern Age Coders gives coding lessons that happen live over video and only in English. Six to eight year olds snap Scratch blocks into stories and games; nine to twelve year olds type Python and play with real data from their own town. Their mentor teaches from India and slows down or speeds up for each child. Parents pick a group of fifteen to twenty or private lessons, weekday afternoons or weekend mornings.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / Kids in Moers

Moers · Coding for children · Ages 6 to 12

# Coding classes for kids in Moers

Every November, Moers children walk through the streets with paper lanterns for St. Martin, and the city publishes the list of processions as open data. That list hides a neat puzzle: given only dates, which weekday is each walk on? A child can solve it with counting and one clever idea, the same idea a computer uses. Parents of six to twelve year olds will find the lantern project below, then the point at which NRW schools bring in Informatik, what our English-language lessons are like for a small child, and two contests that cost nothing.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Ages: 6 to 12, by age group; First steps: Scratch blocks; From about 9: Typed Python; Moers times: After school and weekend mornings; Teachers: Mentors based in India; First class: Free, no card needed. Rated 4.9 across 547 Google reviews.

## Three courses for Moers children

A year-long course for young beginners, a shorter Scratch course, and typed Python for older children.

- [Coding for Kids](/courses/kids-coding-blocks-masterclass): For the whole 6 to 12 range, taught in age bands. Scratch adventures and games first, later simple apps and a first, gentle look at AI.
- [Scratch Coding for Kids](/courses/scratch-programming-complete-course): A one-term start of roughly fourteen weeks. A child who has never coded finishes with a handful of games they designed.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass): Once a child is about nine. Typed Python from day one, drawing with code, number games and real data like the lantern walks.

## On which weekdays did Moers hold its St. Martin lantern walks?

The City of Moers publishes its list of St. Martin processions as open data under the Datenlizenz Deutschland Zero 2.0. The file on its portal is the 2019 list: 42 walks, each with a date and a start time. Children use it to discover that the days of the week go round in a circle.

### The data

The city's open data portal says the list is updated every year; the copy it offers today, which we downloaded on 3 November 2026, is the one for November 2019. Each row has a date, a start time, the organiser and an address.

We only use the dates and times. The organisers are mostly schools and nurseries, and we leave their names out of the project. We saved the file as martinszuege_2019.csv.

### The puzzle

The file says "05.11.2019" but never says "Tuesday". Which weekday was busiest for lantern walks? A grown-up would look at a calendar. A child can work it out from one fact and some counting.

The one fact: 4 November 2019 was a Monday. Every 7 days later is also a Monday. So what matters is how many days after the 4th a date is, and what is left over when you take away whole weeks.

**Version 1: count the walks on each date** (Python)
```python
import csv

walks = {}
with open("martinszuege_2019.csv", encoding="utf-8") as src:
    for row in csv.DictReader(src, delimiter=";"):
        walks[row["Datum"]] = walks.get(row["Datum"], 0) + 1

print("Lantern walks:", sum(walks.values()), "on", len(walks), "evenings")
for day in sorted(walks, key=lambda d: d[3:5] + d[:2]):
    print(day, walks[day])
```
It prints Lantern walks: 42 on 12 evenings, then one line per date from 04.11.2019 2 to 18.11.2019 2; the busiest dates are 6 and 8 November with 6 walks each.

Now the clever part. Take the day number, subtract 4, and divide by 7. Throw away the whole weeks and keep only the remainder. A remainder of 0 means Monday, 1 means Tuesday, and so on up to 6 for Sunday. 13 November: 13 minus 4 is 9, and 9 divided by 7 leaves 2, so it was a Wednesday. In Python the remainder is written with the percent sign, %, and the whole rule fits on one line.

**Version 2: the weekday from a remainder** (Python)
```python
NAMES = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

def weekday(date):                 # date like "13.11.2019", only for November 2019
    day = int(date[:2])
    return NAMES[(day - 4) % 7]    # 4 November 2019 was a Monday

per_weekday = {name: 0 for name in NAMES}
for day, n in walks.items():
    per_weekday[weekday(day)] += n
for name in NAMES:
    print(name, per_weekday[name])
```
It prints Monday 8, Tuesday 7, Wednesday 9, Thursday 8, Friday 8, Saturday 2 and Sunday 0.

**St. Martin lantern walks in Moers, November 2019, by weekday (our count)**

| Weekday | Walks |
|---|---|
| Monday | 8 |
| Tuesday | 7 |
| Wednesday | 9 |
| Thursday | 8 |
| Friday | 8 |
| Saturday | 2 |
| Sunday | 0 |

Data: Stadt Moers, St. Martinszüge (Stadt Moers), file martinszuge-2019.csv, offenesdatenportal.de, Datenlizenz Deutschland Zero 2.0, downloaded 3 November 2026. The weekday rule and all counts are ours; we checked the rule against Python's own calendar.

The walks are spread almost evenly from Monday to Friday, there are two on Saturday 9 November and none at all on a Sunday. Forty of the 42 start between five and six in the evening, when it is dark enough for lanterns to glow. St. Martin's Day itself, 11 November, fell on a Monday in 2019 and had four walks. For 2026 our program's calendar check gives a Wednesday for 11 November.

1. **Ages 6 to 8, no screen.** Seven children stand in a circle, each named after a day. Count round the circle from Monday: where do you land on the 10th step? On the 17th?
2. **Ages 8 to 10, Scratch.** Make a list of the seven day names and use the "mod" block to pick the right one for any number of days after a Monday.
3. **Ages 10 to 12, Python.** Try the two programs, then rewrite the weekday rule so that a date in any month of 2019 works, not just November.
4. **Going further.** One start time in the file is written 17.45 instead of 17:45. Find it with a program, then work out the most common start time.

## When do Moers children start Informatik at school?

In grade 5, at about ten. North Rhine-Westphalia is one of the Länder where every child gets two years of compulsory Informatik early on.

### Before grade 5

Primary school in Moers covers four years, grades 1 to 4. Computing has no lesson of its own there, and the four years end without any exam.

Those four years, roughly ages 6 to 10, are the open window. A child who has built games, puzzled over loops and fixed a few bugs arrives at secondary school already comfortable with the way computers think.

### Grades 5 and 6

Its 2026/27 Informatik-Monitor lets the Gesellschaft für Informatik state it plainly: Informatik is compulsory in grades 5 and 6 at every type of general school in NRW, the Gymnasium and the Sekundarschule included.

After grade 6 the subject becomes a choice. Many children never take it again, which makes those two years, and what a child brings to them, count for more.

**Computing for a Moers child from 6 to 12**

| Age, roughly | School stage | Informatik at school |
|---|---|---|
| 6 to 10 | Grundschule, grades 1 to 4 | No separate subject |
| 10 to 12 | Secondary school, grades 5 and 6 | Compulsory at every general school |
| 12 and up | Grade 7 onwards | Optional, if a school offers it |

Based on the KMK pages on primary schooling and school types and on the NRW entry in the Informatik-Monitor 2026/27, all checked on 2 November 2026. The age column is only our rough guide.

We teach alongside school, never in place of it, and we do not give school marks. For children in grades 5 and 6, the [Informatik companion course](/courses/informatik-companion-course-klasse-5-10) follows the school topics in English. Our [North Rhine-Westphalia page](/coding-classes-in-north-rhine-westphalia) covers the Land in more detail.

## How do live coding classes in English work for a child in Moers?

They are short, practical and friendly. The child is at the controls; the mentor guides with questions.

### English only, kept simple

Lessons are given in English and nothing else, which we mention before any booking. Because the mentor demonstrates each step and talks in short, clear sentences, a Moers child with a few words of English still keeps up.

### A mentor who knows them

Each child keeps the same mentor, who is based in India and soon learns whether the child likes a challenge, needs time before answering, or prefers to start by changing a finished game.

### Short tasks, quick wins

For the youngest, an hour becomes six or seven bite-sized jobs: draw a lantern, light it up, march it across the street, add a song. Each one ends with something that runs.

A week holds two sixty-minute lessons, and a few lines go home to parents afterwards. Puzzle-lovers have a free contest coming up: the Informatik-Biber, celebrating its 20th edition, is held in schools between 9 and 20 November 2026, with nine puzzles in half an hour at primary level and twelve in 35 minutes for grades 5 and 6. The maths contest Känguru der Mathematik is on 8 April 2027. Our own English warm-up puzzles are on the [Biber practice page](/informatik-biber-practice-in-english); neither contest has any tie to us.

## When are classes in Moers time?

Most Moers children log in after school or on a Saturday or Sunday morning. India is hours ahead, so for the mentor those lessons land in the late afternoon or evening.

**Example Moers class times on both clocks**

| Moers | India in winter | India from 28 March 2027 |
|---|---|---|
| 15:20 | 19:50 | 18:50 |
| 16:10 | 20:40 | 19:40 |
| Saturday 09:15 | 13:45 | 12:45 |
| Sunday 10:45 | 15:15 | 14:15 |

German clocks, set by the Einheitenzeitgesetz, went back to UTC+1 on 25 October 2026 and jump to UTC+2 on 28 March 2027, while Indian clocks sit at UTC+5:30 year round. The rows show the gap, not a timetable.

In NRW the 2026/27 breaks, as listed by the Kultusministerkonferenz, are: autumn, which ended on 31 October 2026; Christmas from 23 December into 6 January 2027; Easter from 22 March up to 3 April 2027; a single day on 18 May 2027; and summer from 19 July until the last day of August 2027. Lessons keep going in the breaks for families who like. Children join from every part of Moers and from nearby Neukirchen-Vluyn, Kamp-Lintfort, Rheinberg, Duisburg and Krefeld.

## What a Moers child learns, stage by stage

Five stages we use to decide a child's group and to explain progress at home.

**Children's coding stages (ours)**

| Stage | Often at | A child at this stage can |
|---|---|---|
| 1. First steps | 6 to 7 | Snap blocks in order and predict what happens |
| 2. Repeating | 7 to 9 | Use a loop rather than the same block five times |
| 3. Counting | 8 to 10 | Count things into a list, one box per item |
| 4. Typing | 9 to 11 | Write a few lines of Python that repeat and decide |
| 5. Patterns | 10 to 12 | Use a remainder to make something go round in a circle |

### For parents

Stage 5 is the lantern project. The remainder trick returns in clocks, calendars, games that wrap round the screen, and school maths.
Reports are about things your child built and could talk through.

### For children

When something repeats every 7, every 12 or every 60, try the remainder.
Check your rule with one answer you already know.

## Nine more courses for Moers children

Same format throughout: live, English, one mentor who stays, group or private.

### Thinking and numbers

Ages 5 to 12

- [Young thinkers](/courses/reasoning-and-readiness-course-for-young-thinkers): Patterns and logic for 6 to 9.
- [Mental maths](/courses/mental-maths-mastery-kids): Number sense and quick reasoning.
- [Maths through coding](/courses/maths-through-coding): Remainders, patterns and more in Python.

### Play and games

Ages 7 to 12

- [Roblox games](/courses/roblox-game-coding-for-kids-lua-course): Real games scripted in Luau.
- [Minecraft coding](/courses/minecraft-coding-for-kids-course): Building and scripting inside the game children love.
- [Game development](/courses/game-development-masterclass-for-kids): Three game tools in one long course.

### Making

Ages 8 to 12

- [Apps for kids](/courses/block-coding-app-development-masterclass): Phone apps built from blocks.
- [C++ for kids](/courses/cpp-programming-for-kids-course): A stricter second language for keen ten year olds.
- [Office skills for kids](/courses/microsoft-office-kids-mastery): Word, PowerPoint and Excel for school.

## How live classes fit into a Moers family week

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Weekday afternoons** Once Moers schools finish for the day.
- **Weekend mornings** An unhurried lesson before lunch.
- **One to one** A time you agree with your child's mentor.

- **Small steps** Something works every few minutes.
- **Child in charge** The child clicks and types; the mentor asks.
- **Similar ages** Younger and older children learn apart.
- **Short updates** Parents hear what was built.
- **Clear English** Simple words, shown on screen.
- **Class or private** Fifteen to twenty children, or one alone.

## Fees for Moers families

Eight live classes per month, one fee. Here it appears in euro, via the ECB reference rate; you actually pay in US dollars, so after your bank's conversion the euro on your statement may not match to the cent.

- Free first class: Free. A free first class. A puzzle and a first Scratch program. No card needed.
- Group batch: €90 (charged in US dollars) a month. Fifteen to twenty children of similar age. The same mentor each week. Two classes a week. Pay monthly, stop when you wish.
- One to one: €134 (charged in US dollars) a month. Your child with a mentor of their own. Pace and projects for your child. Times that suit your family.

## Coding classes for kids in Moers: common questions

### Are the classes in German?

No, they are always in English, and always live. A child who is only starting English copes well, because the mentor demonstrates on screen, keeps words simple and adjusts to how fast the child works and how they speak.

### From what age can my child start?

From 6, with Scratch blocks that need no typing. Children usually move to typed Python at about 9.

### Is coding taught at Moers schools?

From grade 5. NRW makes Informatik compulsory in grades 5 and 6 at every general school, according to the Gesellschaft für Informatik. Grundschule has no separate computing subject.

### Why start before grade 5?

Because ages 6 to 10 are when puzzles and games feel like play. Children who start then arrive at secondary school already used to breaking problems into steps and fixing their own mistakes.

### When are classes in Moers time?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Moers children mostly pick a weekday afternoon or a Saturday or Sunday morning.

### What is the Informatik-Biber?

A free puzzle contest open from grade 3 up to grade 13; no programming knowledge is needed. Schools enter their classes, and this year's window is 9 to 20 November 2026, so the class teacher will know whether your child's school is in.

### Where are the teachers based?

In India. They teach live online, and because India is hours ahead, a Moers afternoon is an Indian evening.

### How many children are in a group?

Fifteen to twenty, of similar age. The one-to-one option gives your child a mentor to themselves, twice a week.

### Which currency do we pay in?

US dollars. The euro figure we show is only a conversion at the ECB reference rate, so once your bank exchanges the payment the statement may be a few cents away from it. The first lesson costs nothing.

### What is the lantern walk project?

Children use the City of Moers list of 42 St. Martin walks from November 2019 and work out each weekday with a remainder: count the days after Monday 4 November and divide by 7. Wednesday had the most walks, nine, and Sunday none.

## Related pages

- [Coding classes in Germany](/coding-classes-in-germany): Our national page and city list.
- [Coding classes in North Rhine-Westphalia](/coding-classes-in-north-rhine-westphalia): School rules for the whole Land.
- [Coding classes for kids in Germany](/coding-classes-for-kids-germany): Our page for children across Germany.
- [Scratch classes](/scratch-classes-for-kids-germany): The usual first step at 6 to 8.
- [Python for 10 year olds](/python-for-10-year-olds): How a ten year old moves from blocks to text.
- [How we teach](/how-we-teach): A live class, explained.

## Contact

Book the free first class at [https://learn.modernagecoders.com/coding-classes-for-kids-in-moers-germany](https://learn.modernagecoders.com/coding-classes-for-kids-in-moers-germany#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
