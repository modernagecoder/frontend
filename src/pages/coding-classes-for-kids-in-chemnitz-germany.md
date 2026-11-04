---
title: "Coding Classes for Kids in Chemnitz, Live Online in English"
description: "Coding classes for kids in Chemnitz aged 6 to 12, live online in English: when Saxony teaches Informatik, contests this year, and a hiking-trail map project."
canonical: https://learn.modernagecoders.com/coding-classes-for-kids-in-chemnitz-germany
source: src/pages/coding-classes-for-kids-in-chemnitz-germany.html
---
> Modern Age Coders runs coding classes for Chemnitz children aged 6 to 12 as live online lessons in English. Little ones start with picture puzzles and Scratch; nine year olds move on to typing Python; eleven and twelve year olds analyse real files like the city's hiking-trail map. The same mentor teaches your child each week, matches their pace and accent, and works either with 15 to 20 children of one age band or with your child alone.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / [Coding classes in Saxony](/coding-classes-in-saxony) / Kids in Chemnitz

Chemnitz · Coding for children · Ages 6 to 12

# Coding classes for kids in Chemnitz

Saxony is one of the Länder that takes Informatik most seriously, yet a Chemnitz child usually meets it as a timetabled subject only in grade 7. Between first grade and then there are six curious years. This page is about using them well: what a child between six and twelve can pick up, how our live classes in English are built for them, two contests running this autumn, and a project on the city's hiking trails where every length on the map is wrong in the same way, except one.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Ages: 6 to 12, in age groups; Begins with: Puzzles and Scratch; Then: Typed Python from about 9; Groups: 15 to 20 children, or one to one; Teachers: Mentors in India, in English; First class: Free. Rated 4.9 across 547 Google reviews.

## Which coding course should a Chemnitz child start with?

For a six or seven year old, the long blocks course; for a curious eight year old, Scratch; for a confident nine year old, Python.

- [Coding for Kids](/courses/kids-coding-blocks-masterclass): From 6, in groups by age, over 10 to 12 months. Scratch stories and games, then simple apps and a gentle first look at how AI guesses.
- [Scratch Coding for Kids](/courses/scratch-programming-complete-course): A shorter course of 3 to 4 months. A complete beginner ends with several games and a clear sense of whether coding is their thing.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass): Python typed from day one for the over-nines, with turtle art, games and later data projects like the trail map further down.

## When do Chemnitz children start Informatik at school?

In grade 7. Saxony then keeps it going every year until grade 10, which is generous by German standards.

**Informatik for a pupil in Saxony**

| Grades | School | Informatik at school |
|---|---|---|
| 1 to 4 | Primary (Grundschule) | Coding is not its own subject |
| 5 and 6 | Oberschule or Gymnasium | Not covered by the grade 7 to 10 rule |
| 7 to 10 | Oberschule and Gymnasium | One lesson a week, every year |
| 10 to 12 | Gymnasium Oberstufe (G8) | Informatik as an Abitur course; about half of pupils in Saxony take it |

Taken from the Informatik-Monitor 2026/27 of the Gesellschaft für Informatik (its Sachsen page, "jeweils einstündig in den Jahrgangsstufen 7 bis 10", and its national overview, "etwa die Hälfte der Lernenden") and the KMK page on primary schooling, both consulted on 2 November 2026. Modern Age Coders has no link with the Freistaat, the KMK or any Chemnitz school.

### Why start before grade 7?

Because the core ideas of coding, doing things in order, repeating and deciding, are easy at 7 and fun at 8. Children who meet them through games arrive in grade 7 able to concentrate on the harder part, which is designing a program rather than remembering where the semicolon goes.

And because Saxony's Oberstufe is unusually keen on the subject: the monitor finds about half of its pupils there take Informatik, so an early, confident start is worth having.

### What we do not do

We do not teach the Saxon school syllabus in advance or set school-style tests. School Informatik is the school's job, and the school course is the one that counts.

What we do is give a child the confidence and the habits that make school Informatik easy: trying things, reading what the computer says, and checking an answer before trusting it.

## Will a Chemnitz child understand a class in English?

Children understand far more than they can say. Our mentors teach only in English and build lessons around that.

### English, every time

There is no German version of our classes. Mentors are based in India and teach every lesson in English, and we would rather tell you that now than after a trial.

### Speed and accent

A mentor talks slowly to a six year old, uses short sentences, repeats, and points at the screen. They learn how each child speaks, and a child who answers in German is gently given the English words.

### Learning two things

Scratch blocks and Python words are the same in every country. While a child learns to code, they also hear an hour of friendly spoken English, a useful extra for a pupil at a German school.

## Why does the map say the trails are longer than the signs?

Stadt Chemnitz publishes its marked hiking trails as open data under Datenlizenz Deutschland Namensnennung 2.0. Each trail has two lengths, and they never agree. Our older children find out why, and then find the one trail that breaks the rule.

### Two lengths per trail

The city's file lists 27 trails, from WW 31, the 1.4 km Trimm-Dich-Pfad in the Tiergartenwald, to WW 05, the 59.5 km Rundweg um Chemnitz. Each has a column LAENGE, the length in kilometres that walkers are told, and a column SHAPE__Length, the length the computer measured along the line on the map.

Added up, the signed lengths come to 371.0 km. The map lengths come to 584.1 km.

### The puzzle

Did the city get every trail wrong? Children check one: WW 03 is 10.7 km on the sign and 16.9 km on the map. That is about 1.58 times as long. Then the next. Also about 1.58.

When every answer is wrong by the same amount, the cause is usually the ruler, not the trails. Here the ruler is the map itself.

**Version 1: compare the two lengths** (Python)
```python
import csv

with open("chemnitz_trails.csv", encoding="utf-8-sig") as f:
    for row in csv.DictReader(f):
        signed_km = float(row["LAENGE"])
        map_km = float(row["SHAPE__Length"]) / 1000
        stretch = map_km / signed_km
        print(row["NAME"][:7], signed_km, "km on the sign,", round(map_km, 1), "km on the map, x", round(stretch, 2))
```
The first lines it prints are WW 03 - 10.7 km on the sign, 16.9 km on the map, x 1.58, WW 01 - 16.1 km on the sign, 25.4 km on the map, x 1.58 and WW 13 - 9.2 km on the sign, 14.5 km on the map, x 1.57, one line for each of the 27 trails.

The map layer is stored in the Web Mercator projection, the one most web maps use. To flatten a round Earth onto a square map, it stretches everything more the further you are from the equator. Chemnitz lies at about 50.8 degrees north, and at that latitude the stretch is 1 divided by the cosine of 50.8 degrees, about 1.58: exactly the factor the children found. Our explanation, from the layer's own projection code; the city's signed lengths are the ones to walk by.

**Version 2: find the trail that breaks the pattern** (Python)
```python
import csv

stretches = {}
with open("chemnitz_trails.csv", encoding="utf-8-sig") as f:
    for row in csv.DictReader(f):
        stretches[row["NAME"]] = float(row["SHAPE__Length"]) / 1000 / float(row["LAENGE"])

typical = sorted(stretches.values())[len(stretches) // 2]
odd = min(stretches, key=stretches.get)
print("Trails:", len(stretches), " typical stretch:", round(typical, 2))
print("Odd one out:", odd, round(stretches[odd], 2))
```
It prints: Trails: 27 typical stretch: 1.58 and Odd one out: WW 20 - Lohse-Uhlig-Steig 1.39.

**Three Chemnitz trails: signed length, map length and stretch (our calculation)**

| Trail | On the sign (km) | On the map (km) | Stretch |
|---|---|---|---|
| WW 05 Rundweg um Chemnitz | 59.5 | 94.1 | 1.58 |
| WW 31 Trimm-Dich-Pfad-Tiergartenwald | 1.4 | 2.2 | 1.57 |
| WW 20 Lohse-Uhlig-Steig | 13.8 | 19.2 | 1.39 |

Data: Stadt Chemnitz, Wanderwege, published on the Chemnitz open data portal and listed on GovData through the Freistaat Sachsen, reused under DL-DE BY 2.0 (Namensnennung), file fetched 3 November 2026. Map length is SHAPE__Length in metres, divided by 1,000. Stretch factors and the projection explanation are ours.

Every trail stretches by 1.57 to 1.60, except the Lohse-Uhlig-Steig at 1.39. The program cannot say why. Perhaps the line on the map is drawn more simply than the real path, perhaps the signed length includes a stretch that is not on the map, perhaps one of the numbers is out of date. Children are asked to write down two possible reasons and how they would check each one. Spotting the odd one out is the start of an answer, not the end.

1. **Ages 6 to 7, no screen.** Measure a path across the room with your feet, then with a parent's feet. Why are the numbers different, and which one is "right"?
2. **Ages 8 to 9, Scratch.** Make a list of five signed lengths. Multiply each by 1.58 and show the map length. Then put in 13.8 and ask the sprite to say "odd one!" if the map length is not close.
3. **Ages 10 to 12, Python.** Run Version 1, then change Version 2 to print every trail whose stretch is more than 0.05 away from 1.58.
4. **Family challenge.** Pick one short trail, walk it, and count your steps. Does your number agree with the sign or with the map?

## Which contests can a Chemnitz child enter this school year?

Two classic school contests fall in the next few weeks, both entered through the school.

### Informatik-Biber

A free online puzzle contest from Bundesweite Informatikwettbewerbe, open from grade 3, with no coding knowledge needed. The Biberwochen 2026 run from 9 to 20 November 2026.

Primary pupils solve nine tasks in 30 minutes; grades 5 and 6 get twelve tasks in 35 minutes.

### Mathematik-Olympiade

The Mathematik-Olympiade, with about 200,000 participants a year, runs in rounds. The Regionalrunde of the 66th Olympiade is on 11 November 2026, after the school round in the autumn.

Ask your child's teacher whether the school takes part and who goes through to the regional round.

Sources: bwinf.de, Informatik-Biber 2026; mathe-wettbewerbe.de, Mathematik-Olympiade, read 2 November 2026. Their real tasks stay with them: our classes only use puzzles our mentors invented in a similar style, and say so. Neither organiser has any tie to us.

## What time would classes be in Chemnitz?

The mentors are in India, ahead of Chemnitz, so an afternoon here is their evening. These three rows are only an illustration.

**Example Chemnitz times and the clock in India**

| Chemnitz | India until 28 March 2027 | India from 28 March 2027 |
|---|---|---|
| 14:45 | 19:15 | 18:15 |
| 17:10 | 21:40 | 20:40 |
| Saturday 09:00 | 13:30 | 12:30 |

German clock time comes from the Einheitenzeitgesetz: one hour ahead of UTC (MEZ) for winter, two hours ahead (MESZ) for summer. The switch back happened on 25 October 2026; the switch forward is due on 28 March 2027. With India fixed at UTC+5:30, Chemnitz trails it by 4 h 30 until the end of March and by 3 h 30 after that.

Saxony's winter holidays run from 8 to 19 February 2027 and the summer holidays from 10 July to 20 August 2027, in the KMK holiday list. Our classes carry on in the holidays, which many Chemnitz families find handy, and anyone who goes away simply pauses.

## What should a Chemnitz child be able to do at each age?

These are our own milestones, used to place children in groups and to report back to parents.

**Our own coding milestones for primary-age children**

| Milestone | Usual age | The child can |
|---|---|---|
| Order | 6 to 7 | Put picture steps in the right order and spot a wrong one |
| Loop | 7 to 8 | Make a sprite repeat a dance instead of copying blocks |
| Decide | 8 to 9 | Use if and else to make a game react |
| Type | 9 to 11 | Write and fix a short Python program |
| Compare | 10 to 12 | Divide one number by another and find the result that does not fit |

### For parents

Compare is the trail project. A child who can say "they are all 1.58, except this one" has learned to look for patterns and for breaks in them.
Each month you get a short note on what your child made and what is next.

### For children

If every answer is wrong by the same amount, look at your ruler.
The number that does not fit is the most interesting number on the page.

## Nine more courses for Chemnitz children

Same live, English-speaking format, sorted into three themes.

### Puzzles and numbers

Ages 7 to 15

- [Problem solving for kids](/courses/problem-solving-and-computational-thinking-for-kids): Patterns, logic and step-by-step plans.
- [Maths contest training](/courses/mathematik-olympiade-and-kaenguru-training-course): For Olympiade fans: our own problems, step by step.
- [Maths through coding](/courses/maths-through-coding): Ratios, angles and shapes, checked in Python.

### Games

Ages 7 to 14

- [Minecraft coding](/courses/minecraft-coding-for-kids-course): Building and scripting in a familiar world.
- [Roblox game coding](/courses/roblox-game-coding-for-kids-lua-course): Their own playable games in Luau.
- [Game development](/courses/game-development-masterclass-for-kids): Three platforms, one long course.

### Making and understanding

Ages 8 to 14

- [Understanding AI](/courses/ai-literacy-for-kids-course): Why an AI guesses, and when it guesses badly.
- [Block-built apps](/courses/block-coding-app-development-masterclass): Buttons, screens and a phone app of their own.
- [C++ for kids](/courses/cpp-programming-for-kids-course): Puzzles and small games in a classic language.

## How do live classes work for a Chemnitz family?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Afternoons** After school, from mid afternoon.
- **Weekends** Morning slots suit younger children.
- **One to one** Any time agreed with the mentor.

- **Short, lively lessons** About an hour, with plenty of doing.
- **One mentor** Who knows how your child learns.
- **By age** Younger and older children apart.
- **Child-safe tools** No adult AI accounts.
- **Parent notes** Monthly, in plain English.
- **Group or private** 15 to 20 children, or one.

## Fees for Chemnitz families

The fee is monthly and pays for eight live classes. We show it in euro using the European Central Bank reference rate; your card is charged in US dollars and your bank converts the amount, so the euro figure you see on your statement may be slightly different.

- Free first class: Free. A free first class. A puzzle and a first game. No card needed.
- Group batch: €90 (charged in US dollars) a month. 15 to 20 children of a similar age. A regular mentor. Two classes a week. Monthly, stop any time.
- One to one: €134 (charged in US dollars) a month. Your child with one mentor. Projects chosen together. Times that suit you.

## Coding classes for kids in Chemnitz: questions

### Are the classes in German?

No, they are in English, always live, with India-based mentors. With younger children they use short sentences, plenty of pointing at the screen and patience, and they quickly get used to how your child speaks.

### From what age can my child join?

From 6. Six and seven year olds work with puzzles and Scratch blocks in short, playful lessons. Most children move to typed Python at about 9.

### When does Informatik start at school in Chemnitz?

In grade 7. The Gesellschaft für Informatik records that Saxon Oberschulen and Gymnasien teach Informatik for one lesson a week in grades 7 to 10. Before that, coding is not a separate school subject.

### What times can my child attend?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Chemnitz children usually come after school or on a Saturday or Sunday morning.

### Can my child take part in the Mathematik-Olympiade or the Biber?

Usually yes, through the school. Biber week 2026 is 9 to 20 November 2026, and the regional round of the 66th Mathematik-Olympiade is on 11 November 2026. Ask the teacher whether the school takes part.

### What equipment do we need?

A computer with a keyboard, a headset or built-in microphone, and reliable internet. For the first Scratch weeks a tablet will do. Every program we use is free.

### How many children are in a group?

Between 15 and 20, all of a similar age and level. A one-to-one plan is available for children who prefer to learn alone with a mentor.

### How do we pay, and in which currency?

By card each month, charged in US dollars. The euro amounts on this page use the ECB reference rate as a guide; your bank does the actual conversion, so a small difference is normal. Trying the first class costs nothing.

### What is the trail project?

Something we designed around the city's open hiking-trail file. Children compare each trail's signed length with its map length, find that the map stretches them all by about 1.58 because of how web maps are drawn, and then find the one trail that does not fit.

## Related pages

- [Coding classes in Saxony](/coding-classes-in-saxony): Our page for the Freistaat.
- [Coding for kids in Leipzig](/coding-classes-for-kids-leipzig): Our page for Saxony's largest city.
- [Coding for kids in Dresden](/coding-classes-for-kids-dresden): The Saxon capital.
- [Biber practice](/informatik-biber-practice-in-english): Warm-up puzzles we wrote for it.
- [Python for 10 year olds](/python-for-10-year-olds): What typed code looks like at ten.
- [AI tools age guide](/ai-tools-age-guide): Age limits of AI tools.

## More pages for this Land

Part of the guide: [Coding classes in Saxony](/coding-classes-in-saxony)

### Cities and pages in Saxony

- [Coding classes for kids in Dresden](/coding-classes-for-kids-dresden)
- [Coding classes for kids in Leipzig](/coding-classes-for-kids-leipzig)
- [Programmieren lernen für Kinder in Leipzig](/programmieren-lernen-kinder-leipzig)

More guides: [Coding classes in North Rhine-Westphalia](/coding-classes-in-north-rhine-westphalia), [Coding classes in Lower Saxony](/coding-classes-in-lower-saxony), [Coding classes in Land Bremen](/coding-classes-in-land-bremen), [Coding classes in Hesse](/coding-classes-in-hesse), [Coding classes in Bavaria](/coding-classes-in-bavaria), [Coding classes in Saxony-Anhalt](/coding-classes-in-saxony-anhalt), [Coding classes in Schleswig-Holstein](/coding-classes-in-schleswig-holstein), [Coding classes in Baden-Württemberg](/coding-classes-in-baden-wuerttemberg), [Coding classes in Saarland](/coding-classes-in-saarland), [Coding classes in Rhineland-Palatinate](/coding-classes-in-rhineland-palatinate), [Coding and maths in Berlin](/coding-and-maths-classes-in-berlin-germany), [Coding and maths in Hamburg](/coding-and-maths-classes-in-hamburg-germany), [Coding classes in Thuringia](/coding-classes-in-thuringia), [Coding classes in Brandenburg](/coding-classes-in-brandenburg), [Coding classes in Mecklenburg-Vorpommern](/coding-classes-in-mecklenburg-vorpommern)

## Contact

Book the free first class at [https://learn.modernagecoders.com/coding-classes-for-kids-in-chemnitz-germany](https://learn.modernagecoders.com/coding-classes-for-kids-in-chemnitz-germany#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
