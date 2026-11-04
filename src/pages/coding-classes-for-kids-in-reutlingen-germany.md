---
title: "Coding Classes for Kids in Reutlingen: Live Online, English"
description: "Coding classes for kids in Reutlingen aged 6 to 12, live online in English: a first lesson step by step, school Informatik, contests, and a household data project."
canonical: https://learn.modernagecoders.com/coding-classes-for-kids-in-reutlingen-germany
source: src/pages/coding-classes-for-kids-in-reutlingen-germany.html
---
> Coding classes for kids in Reutlingen at Modern Age Coders are live online lessons in English for children from 6 to 12. Younger children start with puzzles and Scratch games, older ones type Python and work with small real data files, and every child stays with one mentor who adapts to their speed and the way they speak. Children learn in age groups of fifteen to twenty, or alone with the mentor, after school or on weekend mornings.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / [Coding classes in Baden-Württemberg](/coding-classes-in-baden-wuerttemberg) / Kids in Reutlingen

Reutlingen · Coding for children · Ages 6 to 12

# Coding classes for kids in Reutlingen

How many people live in the homes of central Reutlingen? A ten year old with a few lines of Python can answer, but only with two small words in front: "at least". Learning why is the kind of thinking our live coding classes in English build. This page shows what a first lesson looks like for a Reutlingen child, when schools in Baden-Württemberg start Informatik, two free contests open to primary pupils this school year, and the household project itself.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; For: Children aged 6 to 12; Begins with: Puzzles and Scratch; Then: Python, from about 9; Groups: 15 to 20 by age, or 1-on-1; Language: English, matched to the child; First class: Free. Rated 4.9 across 547 Google reviews.

## What are good first coding courses for a Reutlingen child?

Three starting points for different ages and temperaments.

- [Coding for Kids](/courses/kids-coding-blocks-masterclass): Ages 6 to 12, grouped by age, about a year long. Blocks and games first, then apps, at a speed set for the group.
- [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev): Ages 8 to 12. Scratch games with the mentor and a careful, account-free first look at what AI can do.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass): Ages 9 to 12. Real typed code from the start, then the Reutlingen household list below.

## What happens in a first coding lesson for a Reutlingen child?

It is short, friendly and hands-on. Here is how a free first class usually goes for a child of 6 to 9.

1. **Hello on video.** The mentor says hello, asks the child's name and what games they like, and speaks slowly and simply. A parent sits nearby for the first few minutes.
2. **A puzzle without a computer.** The child gives the mentor step-by-step instructions to draw a house, and laughs when the mentor follows them a little too exactly.
3. **The same idea in Scratch.** The child drags blocks to make a cat walk and speak. The mentor watches and asks questions but lets the child do the clicking.
4. **A small surprise.** One block in the wrong place makes the cat do something silly, and the child finds and fixes it. That is the first piece of debugging.
5. **A goodbye and a note.** The mentor tells the parent what the child managed and suggests a group, or one-to-one lessons if that suits better.

### If English is not yet strong

Every lesson is taught in English, by a mentor based in India. That is fine for most children, because coding lessons are full of things you can see: blocks, characters, colours and movement.

Mentors use short sentences, repeat and show. When a child answers in German, the mentor understands the meaning and offers the English words, without fuss.

### Older children, 10 to 12

For older children the first class can start straight in Python. They type a few lines, see the result, and change it. Within one lesson many write a small program that asks a question and answers it.

From there, real data comes quickly, like the household file below, which most ten year olds find more interesting than invented numbers.

## How many people live in the homes of central Reutlingen?

At least 4,852, and the "at least" is the clever part. Stadt Reutlingen publishes its household statistics for every part of the city, free to reuse under the Datenlizenz Deutschland Namensnennung 2.0, and our older children use them to learn what to say when the data does not tell you everything.

### The file

The city's statistics office lists, for each of 30 parts of Reutlingen and each year from 2012 to 2025, how many homes there are, how many have one person, two people, three people, and "4 und mehr Personen", four or more. Our copy is from 3 November 2026.

Children get just the 2025 rows, saved as haushalte_2025.csv, with six columns: the area, the number of homes and the four size groups.

### The question

In the Zentrum area there are 2,939 homes: 1,810 with one person, 614 with two, 246 with three and 269 with four or more. How many people is that?

Children usually multiply each group by its size and add. That works perfectly for the first three groups. But how many people are in a "four or more" home? Four? Five? Seven? The file does not say.

**Count the people we can be sure of** (Python)
```python
import csv

with open("haushalte_2025.csv", encoding="utf-8") as f:
    areas = list(csv.DictReader(f))

zentrum = areas[0]
print("Area:", zentrum["area"])
at_least = (1 * int(zentrum["one"]) + 2 * int(zentrum["two"])
            + 3 * int(zentrum["three"]) + 4 * int(zentrum["four_or_more"]))
print("People living in these homes: at least", at_least)
```
It prints: Area: 010 Zentrum and People living in these homes: at least 4852.

The program counts every "four or more" home as exactly four, the smallest it could be. So 4,852 is a floor, not the answer: the true number can only be the same or bigger. If every one of those 269 homes had five people, there would be 269 more. Saying "at least 4,852" is completely honest. Saying "4,852" would not be.

Ten year olds often ask whether we could find the real number somewhere. Sometimes, from another table. But the lesson stands on its own: when a group has no top, you can give a lower bound and explain it, and that is real mathematics, not a failure.

**Which part of Reutlingen has the most one-person homes?** (Python)
```python
for area in areas:
    share = 100 * int(area["one"]) / int(area["households"])
    area["share"] = round(share, 1)

most = max(areas, key=lambda a: a["share"])
fewest = min(areas, key=lambda a: a["share"])
print("Most homes with one person:", most["area"], most["share"], "%")
print("Fewest homes with one person:", fewest["area"], fewest["share"], "%")
```
Added below the first program, the output is Most homes with one person: 010 Zentrum 61.6 % and Fewest homes with one person: 131 Mittelstadt 32.4 %.

**Share of homes with one person, selected parts of Reutlingen, 2025 (our calculation)**

| Area | Homes | One-person homes, % |
|---|---|---|
| 010 Zentrum | 2,939 | 61.6 |
| 011 Honauer Bahn | 3,960 | 50.8 |
| 014 Schieferstr. | 3,032 | 48.4 |
| 101 Reicheneck | 412 | 33.3 |
| 091 Oferdingen | 1,077 | 32.8 |
| 131 Mittelstadt | 1,558 | 32.4 |

Data: Stadt Reutlingen, Kommunale Statistikstelle, Privathaushalte nach Haushaltsgröße auf Stadtteilebene, 2025 rows, licence Datenlizenz Deutschland Namensnennung 2.0, downloaded 3 November 2026. Shares and the lower bound are our own calculations.

In the city centre almost two homes in three have one person living in them; in Mittelstadt it is about one in three. Children love guessing why. One idea worth testing is that town-centre flats tend to be smaller than houses in the outer districts, but this file alone cannot prove it, and saying so is part of the lesson.

1. **Ages 6 to 8, no screen.** Ask five neighbours or relatives how many people live in their home. Make a tally with boxes 1, 2, 3 and "4 or more". Then try to work out the total number of people. Where do you get stuck?
2. **Ages 8 to 10, Scratch.** Make four sliders for the four groups and a sprite that says "At least ... people". Test it with Zentrum's numbers.
3. **Ages 10 to 12, Python.** Change the first program so it works out the "at least" number for every area in the file, then find the area with the biggest one.

## When will a Reutlingen child meet Informatik at school?

In grade 5, now that Baden-Württemberg has a compulsory subject for it. The four Grundschule years come first.

**Computing in school for a Reutlingen child**

| Grades | School | What happens |
|---|---|---|
| 1 to 4 | Grundschule | Comes before the new Informatik subject |
| 5 and 6 | Every secondary school type | The new required subject Informatik und Medienbildung (from 2025/26) |
| Later grades | Secondary school | The subject is being introduced year by year |

The KMK describes the primary stage; the GI Informatik-Monitor 2026/27, read on 2 November 2026, describes the new BW subject and places Baden-Württemberg in the small group of Länder that already reach four required Informatik hours.

So a Reutlingen child who starts coding at 7 has three or four years of practice before the first school Informatik lesson. Our lessons are not school tutoring and give no grades; they simply let a curious child build things now, and arrive in grade 5 confident. We teach alongside school, never instead of it.

## Which contests can a Reutlingen primary pupil try in 2026/27?

Two national ones, both run through schools: the Informatik-Biber for informatics puzzles and the Mathematik-Olympiade for maths.

### Informatik-Biber

Free, open to grades 3 to 13, and no previous knowledge is needed, according to the organisers, Bundesweite Informatikwettbewerbe. It takes 30 to 40 minutes, so it fits into one school lesson.

The Biberwochen 2026 run from 9 to 20 November 2026. The school registers its pupils, so the first step is a question to the class teacher.

### Mathematik-Olympiade

A national maths competition with about 200,000 participants a year, which has also been offered to primary schools since 2005, according to its organisers.

The 66th Mathematik-Olympiade holds its regional round, the Regionalrunde, on 11 November 2026, after a first round at school. Again, the school is the way in.

Both contests reward the same thinking a coding class practises: read carefully, find the rule, check the edge cases. We do not reuse the organisers' tasks. Our mentors write their own puzzles, and children who enjoy them tend to enjoy contest day too. We are not connected with either competition.

## What times would suit a Reutlingen child?

Reutlingen afternoons are Indian evenings, so after-school lessons work well; weekend mornings are popular with younger children.

**Example Reutlingen lesson times and the time in India**

| Reutlingen | India in winter | India from 28 March 2027 |
|---|---|---|
| 15:50 | 20:20 | 19:20 |
| 16:10 | 20:40 | 19:40 |
| Saturday 09:45 | 14:15 | 13:15 |
| Sunday 11:30 | 16:00 | 15:00 |

Under the Einheitenzeitgesetz Germany is one hour ahead of UTC in winter and two in summer; the switch back happened on 25 October 2026 and the next switch forward is on 28 March 2027. India is always UTC+5:30: 4 h 30 later than Reutlingen in winter, 3 h 30 later in summer. Times are examples; you pick your own.

**Baden-Württemberg holidays in 2026/27, as listed by the KMK**

| When | Holiday |
|---|---|
| 26 to 30 October 2026, and 31 October | Autumn break |
| 23 December 2026 to 9 January 2027 | Christmas |
| 25 March 2027, and 30 March to 3 April 2027 | Easter |
| 18 to 29 May 2027 | Whitsun |
| 29 July to 11 September 2027 | Summer |

From the Kultusministerkonferenz holiday overview for 2026/2027 (version of 9 October 2025). Lessons continue in the holidays unless you ask to pause.

## What will my child be able to do, stage by stage?

Our five stages for ages 6 to 12, used to choose a group and to report progress.

**Five coding stages for children (ours)**

| Stage | Typical age | Can do |
|---|---|---|
| Instructions | 6 to 7 | Gives steps so exact that a sprite follows them |
| Loops | 7 to 9 | Repeats actions instead of copying blocks |
| Numbers | 8 to 10 | Keeps a score and compares two values |
| Python | 9 to 11 | Types programs that count and decide |
| Data | 10 to 12 | Works out a result from a real file and says how sure it is |

### For parents

The household project belongs to the last stage. A child who says "at least" without being asked has understood something many adults miss.
You hear about what was built and explained, not about time spent.

### For children

If a box in a table says "or more", you cannot know the exact number. Say "at least".
An honest answer with "at least" is better than an exact answer that might be wrong.

## Nine more courses for Reutlingen children

Live lessons for children, all in English, with a mentor who knows them.

### First steps

From age 6

- [Scratch coding](/courses/scratch-programming-complete-course): A short course of games and stories.
- [Problem solving](/courses/problem-solving-and-computational-thinking-for-kids): Logic and patterns before code.
- [Abacus and mental maths](/courses/abacus-mental-maths-course-for-kids): Fast, confident counting.

### Games

Ages 7 to 12

- [Minecraft coding](/courses/minecraft-coding-for-kids-course): Code inside a familiar world.
- [Roblox coding](/courses/roblox-game-coding-for-kids-lua-course): Real game scripts in Luau.
- [Game development](/courses/game-development-masterclass-for-kids): Several game tools in one course.

### Bigger projects

Ages 9 to 12

- [App making](/courses/block-coding-app-development-masterclass): Phone apps made with blocks.
- [Maths through coding](/courses/maths-through-coding): School maths explored with Python.
- [AI literacy](/courses/ai-literacy-for-kids-course): What AI is, without adult accounts.

## How are the lessons organised for Reutlingen families?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **After school** Reutlingen afternoons, Monday to Friday.
- **Weekend mornings** Saturday or Sunday, fresh and calm.
- **Your own time** One to one, when it suits you.

- **One mentor** Your child sees the same face each week.
- **Clear English** Short sentences, shown on screen.
- **The child clicks** Children build; mentors guide.
- **Same-age groups** Children only learn with peers.
- **Parent notes** A short report every month.
- **Two sizes** A group of 15 to 20, or private.

## Fees for Reutlingen families

The monthly fee includes eight live lessons. We display it in euro using the rate the European Central Bank publishes for reference; your card is debited in US dollars and your bank converts that, which can shift the final figure a little.

- Free first class: Free. A free first class. A puzzle and a first Scratch program. No card required.
- Group batch: €90 (charged in US dollars) a month. A group of 15 to 20 children the same age. One regular mentor. Two lessons each week. Monthly, cancel when you like.
- One to one: €134 (charged in US dollars) a month. Your child alone with a mentor. Their own speed and projects. Times chosen by you.

## Coding classes for kids in Reutlingen: parents' questions

### Are the classes in German?

No. All lessons are live and taught in English only. The mentors speak slowly and clearly and adjust to your child's pace and accent, and they show far more than they say.

### What age is right to start?

Six is a good age to begin with puzzles and Scratch, which needs no typing. Most children move on to typed Python at about 9.

### Does my child need good English?

Basic English is enough to start. Coding lessons are very visual, mentors keep sentences short, and children pick up the words they need as they build.

### When does Informatik start at school in Reutlingen?

In grade 5. Baden-Württemberg introduced the compulsory subject Informatik und Medienbildung in 2025/26, starting in grades 5 and 6, according to the Gesellschaft für Informatik.

### When are classes in Reutlingen time?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. The mentors are in India, where a Reutlingen afternoon falls in the evening.

### What is the Reutlingen household project?

A Python exercise we built on Stadt Reutlingen's household statistics for 2025. Children find that the homes in the Zentrum area hold at least 4,852 people, and learn why a "4 or more" group only allows an "at least" answer.

### Can my child take part in the Informatik-Biber?

Yes, when the school signs up. It is free, starts at grade 3, and this year the Biber weeks are 9 to 20 November 2026; the class teacher will know.

### What do we need at home?

A computer with a mouse or trackpad, an internet connection and ideally headphones. For the first lessons a parent nearby helps with screen sharing.

### How many children are in each group?

Between 15 and 20 children of a similar age. If you prefer, your child can have one-to-one lessons with the same mentor.

### How are fees charged?

Monthly, for eight live lessons. Amounts appear in euro at the European Central Bank reference rate and are charged in US dollars, which your bank converts. The first class is free.

## Related pages

- [Coding classes in Germany](/coding-classes-in-germany): Our Germany hub.
- [Coding classes in Baden-Württemberg](/coding-classes-in-baden-wuerttemberg): School rules for all of BW.
- [Scratch classes for kids](/scratch-coding-classes-for-kids): Blocks before typing.
- [Python for 10 year olds](/python-for-10-year-olds): What a ten year old can type.
- [AI projects for kids](/ai-projects-for-kids): Ideas by age.
- [How we teach](/how-we-teach): A look inside our lessons.

## More pages for this Land

Part of the guide: [Coding classes in Baden-Württemberg](/coding-classes-in-baden-wuerttemberg)

### Cities and pages in Baden-Württemberg

- [Coding and AI classes in Pforzheim](/coding-and-ai-classes-in-pforzheim-germany)
- [Coding classes for kids in Heidelberg](/coding-classes-for-kids-in-heidelberg-germany)
- [Coding classes for kids in Karlsruhe](/coding-classes-for-kids-in-karlsruhe-germany)
- [Coding classes for kids in Ulm](/coding-classes-for-kids-in-ulm-germany)
- [Coding classes for kids in Stuttgart](/coding-classes-for-kids-stuttgart)
- [Coding for international school students in Stuttgart](/coding-for-international-school-students-stuttgart)
- [Informatik-Abitur Baden-Württemberg (Unterricht auf Englisch)](/informatik-abitur-baden-wuerttemberg)
- [Online Python classes in Freiburg im Breisgau](/online-python-classes-freiburg-im-breisgau-germany)
- [Online Python classes in Heilbronn](/online-python-classes-heilbronn-germany)
- [Online Python classes in Mannheim](/online-python-classes-mannheim-germany)
- [Programmieren lernen für Kinder in Stuttgart](/programmieren-lernen-kinder-stuttgart)

More guides: [Coding classes in North Rhine-Westphalia](/coding-classes-in-north-rhine-westphalia), [Coding classes in Lower Saxony](/coding-classes-in-lower-saxony), [Coding classes in Land Bremen](/coding-classes-in-land-bremen), [Coding classes in Hesse](/coding-classes-in-hesse), [Coding classes in Bavaria](/coding-classes-in-bavaria), [Coding classes in Saxony-Anhalt](/coding-classes-in-saxony-anhalt), [Coding classes in Schleswig-Holstein](/coding-classes-in-schleswig-holstein), [Coding classes in Saarland](/coding-classes-in-saarland), [Coding classes in Rhineland-Palatinate](/coding-classes-in-rhineland-palatinate), [Coding and maths in Berlin](/coding-and-maths-classes-in-berlin-germany), [Coding and maths in Hamburg](/coding-and-maths-classes-in-hamburg-germany), [Coding classes in Saxony](/coding-classes-in-saxony), [Coding classes in Thuringia](/coding-classes-in-thuringia), [Coding classes in Brandenburg](/coding-classes-in-brandenburg), [Coding classes in Mecklenburg-Vorpommern](/coding-classes-in-mecklenburg-vorpommern)

## Contact

Book the free first class at [https://learn.modernagecoders.com/coding-classes-for-kids-in-reutlingen-germany](https://learn.modernagecoders.com/coding-classes-for-kids-in-reutlingen-germany#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
