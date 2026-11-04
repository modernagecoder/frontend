---
title: "Coding Classes for Kids in Leipzig: Live Online, in English"
description: "Coding classes for kids in Leipzig, ages 6 to 12: live online in English, Informatik in Saxon schools from grade 7, the Mathematik-Olympiade and a tree data project."
canonical: https://learn.modernagecoders.com/coding-classes-for-kids-leipzig
source: src/pages/coding-classes-for-kids-leipzig.html
---
> Leipzig children aged 6 to 12 learn to code with Modern Age Coders in live online classes taught in English. They begin with block games, move to typed Python from around nine, and later try small data projects such as counting the trees in Leipzig's open register. Each child keeps one mentor, who adapts the pace and speaks clearly for young learners of English. Families choose a class of fifteen to twenty or private lessons, in the afternoon or on weekend mornings.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / [Coding classes in Saxony](/coding-classes-in-saxony) / Kids in Leipzig

Leipzig · Coding for children · Ages 6 to 12

# Coding classes for kids in Leipzig

Saxony is one of the Länder that already gives every secondary pupil a weekly Informatik lesson, from grade 7. That still leaves six school years, from the first day of Grundschule to the end of grade 6, before a Leipzig child writes a program in class. This page explains the Saxon timetable, how our English-language video lessons run for six to twelve year olds, a maths olympiad that primary pupils can enter, and what Leipzig's own tree register teaches about counting carefully.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Ages: 6 to 12, grouped by age; Begins with: Visual blocks, then typed Python; Group size: Fifteen to twenty, or one to one; Leipzig times: Afternoons and weekend mornings, flexible; Mentors: Based in India, live by video; First class: Free, no card needed. Rated 4.9 across 547 Google reviews.

## Three courses for Leipzig children

A short taster in blocks, a puzzle course that trains the thinking behind code, and a typed Python course that leads to projects like the tree count below.

- [A first term of Scratch](/courses/scratch-programming-complete-course): Suits complete beginners from about 7. Three to four months of building games, so you can see quickly whether coding clicks.
- [Thinking like a programmer](/courses/problem-solving-and-computational-thinking-for-kids): Suits 7 to 12 year olds. Logic puzzles, patterns and step-by-step plans, useful for school maths and olympiad problems alike.
- [Python with small AI projects](/courses/python-ai-kids-masterclass): Suits 9 to 12 year olds who read fluently. Real typed code, drawings, games and data work such as counting Leipzig's trees.

## When do Leipzig schools start teaching computing?

In grade 7 as its own subject, with some computing inside a broader subject in grades 5 and 6. The details come from the Sachsen page of the Informatik-Monitor 2026/27, published by the GI.

### Primary school and grades 5 and 6

In Saxony the Grundschule covers grades 1 to 4 and has no computing subject. In grades 5 and 6, both the Oberschule and the Gymnasium teach Technik/Computer, a combined subject whose curriculum names some media and some informatics skills.

So a Leipzig child of eight sees computers at school, but nobody is required to teach that child how a program works.

### From grade 7: Informatik for everyone

From grade 7 to grade 10, Informatik is taught for one lesson a week at both the Oberschule and the Gymnasium, under a curriculum dated 2022. Saxony is one of four Länder the monitor counts as meeting the short-term goal of four compulsory hours.

The subject is popular later on. The monitor puts the share of Saxon upper-secondary pupils taking Informatik at 43 percent, and its national summary says about half take it in Saxony and Mecklenburg-Vorpommern.

**Computing on a Leipzig pupil's timetable, 2026/27**

| Grades | Stage | Computing lessons |
|---|---|---|
| 1 to 4 | Grundschule | None as a subject |
| 5 and 6 | Oberschule or Gymnasium | Technik/Computer, a combined subject with some informatics |
| 7 to 10 | Oberschule or Gymnasium | Informatik, one lesson a week, compulsory |
| 10 | Gymnasium | Einführungsphase of the Oberstufe (eight-year route) |
| 11 and 12 | Gymnasium | Informatik as a Grundkurs; a Leistungskurs only at selected schools |

Source: Informatik-Monitor 2026/27 of the Gesellschaft für Informatik, Sachsen page and national summary, read on 2 November 2026. Leipzig, with 611,850 residents on 31 December 2024 according to Destatis, is the largest city in Saxony, slightly ahead of Dresden with 564,904; the Land as a whole has 4,042,422.

Because the rules are set for the whole Land, a family in Markkleeberg, Taucha, Schkeuditz or Markranstädt sees the same timetable as one in Connewitz or Gohlis. A child who has spent the primary years making games and solving puzzles walks into grade 7 Informatik already comfortable with loops and variables, and has time to enjoy the subject instead of catching up.

## Do the classes happen in German or English?

English, always, and live. Here is why that works for children who are still learning the language.

### We say it up front

There is no German-language version of our classes. We would rather a Leipzig family knew that before booking than discovered it in the trial.

### Pace that fits the child

The mentor waits, rephrases and demonstrates. When a seven year old mixes German and English in one sentence, the mentor understands and calmly supplies the missing English word.

### Code keeps its words

Programs use the same keywords in every country: repeat, if, print. A child who learns them in English meets exactly the same words in grade 7 Informatik.

The mentors are in India and teach over a live video link with the screen shared. India is ahead of Leipzig by several hours, so the late afternoon here is the mentor's evening, and a child keeps the same mentor for months. That continuity matters at this age: the mentor learns which child needs encouragement before trying, and which one wants the harder version straight away.

## What is the most common tree in Leipzig?

Leipzig publishes a register of the trees it looks after, open for anyone to reuse. It is a perfect file for a child's first data question, because the answer changes depending on how you decide to group the trees.

### The register

The Baumkataster lists street trees and trees on city land: parks, cemeteries, allotment gardens, forest, river banks, sports grounds, schools and children's centres. The copy we downloaded in November 2026 has 187,690 rows, one per tree, and the city notes that the inventory is not finished yet.

Each row gives a genus, such as Acer, and a German species name, such as Berg-Ahorn. We save just those two columns as leipzig_trees.csv.

### The question

Which tree does Leipzig have most of? Children guess oak, or chestnut, or "the ones on our street". The first program counts each species name and prints the top three.

The second program counts by genus, the larger family a species belongs to. Watch how the winner changes, and look closely at the third name in the first answer.

**Version 1: count by species name** (Python)
```python
import csv

species = {}
with open("leipzig_trees.csv", encoding="utf-8") as f:
    for row in csv.DictReader(f):
        name = row["species"]
        species[name] = species.get(name, 0) + 1

top = sorted(species, key=species.get, reverse=True)[:3]
for name in top:
    print(name, species[name])
```
It prints: Gemeine Esche 12411, Berg-Ahorn 11522 and Linde 11340.

Common ash comes first with 12,411 trees. Third is "Linde", plain linden, with 11,340. But Linde is not a species: in the scientific column those rows say Tilia species, which means someone recorded that the tree is a linden without saying which kind. The register also lists Winter-Linde, Stadt-Linde, Kaiser-Linde and many more as separate names. So the species count mixes exact names with an "unknown kind" bucket, and splits one family into many small piles.

**Version 2: count by genus** (Python)
```python
genus = {}
with open("leipzig_trees.csv", encoding="utf-8") as f:
    for row in csv.DictReader(f):
        name = row["genus"]
        genus[name] = genus.get(name, 0) + 1

top = sorted(genus, key=genus.get, reverse=True)[:3]
for name in top:
    print(name, genus[name])
```
It prints: Acer 37236, Tilia 36025 and Fraxinus 16204.

Counted by family, the maples (Acer) win with 37,236 trees and the lindens (Tilia) are close behind with 36,025. The ashes (Fraxinus), first by species, drop to third with 16,204. Neither answer is wrong. They answer two different questions, and a careful programmer says which question was asked before printing a winner.

**Leipzig's register counted two ways (our calculation)**

| Counted by | First | Second | Third |
|---|---|---|---|
| Species name (615 different names) | Gemeine Esche, 12,411 | Berg-Ahorn, 11,522 | Linde (kind not recorded), 11,340 |
| Genus (102 different genera) | Acer, maples, 37,236 | Tilia, lindens, 36,025 | Fraxinus, ashes, 16,204 |

Data: Stadt Leipzig, Baumkataster, published through the Freistaat Sachsen open data portal, licence Datenlizenz Deutschland Namensnennung 2.0, downloaded 2 November 2026. All counts are our own; rows with an empty name are counted as their own group and do not reach the top three.

1. **Ages 6 to 8, at the table.** Sort a bag of buttons by colour, then by size. Which pile is biggest each time? Is it the same pile?
2. **Ages 8 to 10, in Scratch.** Make two lists, one of tree names and one of families, and let a sprite announce which family appears most often.
3. **Ages 10 to 12, in Python.** Run Version 1, find out what Linde really means, then write Version 2 without looking.
4. **Going further.** The register also has a height column. Sort by it and look at the top two entries, 9,002 and 6,961 metres. No tree is that tall. What should a program do with values that cannot be true?

## Can a Leipzig primary pupil enter a maths olympiad?

Yes. The Mathematik-Olympiade has a primary version for grades 3 and 4, entered through the school.

### The competition

The Mathematik-Olympiade is a national contest with about 200,000 pupils a year, and since 2005 it has been offered to primary schools as well. For grades 3 and 4 it runs in three rounds.

Its problems ask children to explain their reasoning, not only to find a number, which is the same habit good programmers need.

### How to take part

The organisers ask pupils to go straight to the maths teacher at their own school. Its information page says the school round starts each year when the new school year begins, so the moment to ask is early in the autumn term.

For older pupils, the national association lists the Landesrunde of the 66th olympiad for 26 to 28 February 2027 and the Bundesrunde, held in Kaiserslautern, for 30 May to 2 June 2027.

We never use the olympiad's own problems in class. Our mentors write fresh puzzles that build the same skills, such as trying small cases, spotting a rule and checking it. We have no connection with the Mathematik-Olympiaden e.V. or with any Saxon school.

## What times suit a Leipzig family?

Weekday afternoons and weekend mornings are the usual choices. The rows below translate a few Leipzig start times into the mentor's time.

**Example Leipzig start times and the matching time in India**

| Leipzig | India until 27 March 2027 | India from 28 March 2027 |
|---|---|---|
| 15:40 | 20:10 | 19:10 |
| 17:10 | 21:40 | 20:40 |
| Sunday 10:00 | 14:30 | 13:30 |

Example times, not fixed batches. German legal time is CET (UTC+1) in winter and CEST (UTC+2) in summer under the Einheitenzeitgesetz; the clocks went back on 25 October 2026 and go forward on 28 March 2027. India is on UTC+5:30 all year: four and a half hours ahead of Leipzig in winter, three and a half in summer.

Saxon school holidays for 2026/27, from the KMK table: autumn break 12 to 24 October 2026, Christmas 23 December 2026 to 2 January 2027, a winter break from 8 to 19 February 2027, Easter 26 March to 2 April 2027, Whitsun 15 to 18 May 2027 and summer 10 July to 20 August 2027. Classes carry on through all of them, and families who travel simply skip a week.

## Five steps from first blocks to real data

Our own scale. We use it to place a new child and to tell parents, in plain words, what has moved on.

**Our coding steps for ages 6 to 12**

| Step | Age, roughly | What the child does |
|---|---|---|
| 1. Sequence | 6 to 7 | Snaps blocks in order so a character walks, jumps and talks |
| 2. Loop | 7 to 8 | Replaces a long chain of copies with one repeat block |
| 3. Branch | 8 to 9 | Builds a game that reacts to keys and keeps a score |
| 4. Text code | 9 to 11 | Types Python with variables, lists and loops |
| 5. Grouping data | 10 to 12 | Counts items in a file and explains how they were grouped |

### For parents

Step 5 is the tree project. The skill that matters is the sentence at the end: "counted by family, maples win".
Updates describe what your child made and understood, not minutes spent at a screen.

### For children

Before you say what is biggest, say how you sorted.
If a name looks vague, find out what it really means before you trust it.

## Nine more courses for Leipzig children

Live, in English and with a regular mentor, either in a class or one to one.

### Early starters

Ages 5 to 10

- [Readiness for young thinkers](/courses/reasoning-and-readiness-course-for-young-thinkers): Patterns and order for six to nine year olds.
- [A year of block coding](/courses/kids-coding-blocks-masterclass): Games that grow into apps, by age group.
- [Abacus maths](/courses/abacus-mental-maths-course-for-kids): Bead work that turns into mental arithmetic.

### Building games

Ages 7 to 14

- [Coding inside Minecraft](/courses/minecraft-coding-for-kids-course): From visual blocks to written commands.
- [Roblox in Luau](/courses/roblox-game-coding-for-kids-lua-course): Scripted worlds for 8 to 14 year olds.
- [Three game platforms](/courses/game-development-masterclass-for-kids): Scratch, Roblox and Minecraft in sequence.

### Beyond games

Ages 8 to 15

- [Maths meets code](/courses/maths-through-coding): School topics explored with short programs.
- [First steps in C++](/courses/cpp-programming-for-kids-course): Puzzles and small games for 9 to 12.
- [A kids' hackathon](/courses/hackathon-prep-for-kids-coding-innovation-ai-projects-course): Twelve weeks towards a finished project.

## A normal week of classes for a Leipzig child

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Weekday afternoons** After Hort or homework, from mid-afternoon.
- **Weekend mornings** Quieter sessions that suit the youngest.
- **1-on-1** Booked around your family's week.

- **Continuity** The mentor who taught last week teaches this week.
- **Clear speech** Short instructions, shown as well as said.
- **Child at the controls** Your child builds; the mentor guides.
- **Age-matched groups** Classes are formed by age and level.
- **Notes home** A few lines after lessons on progress.
- **Your choice of format** A class of fifteen to twenty, or private teaching.

## Fees for Leipzig families

Each month covers eight live classes. Figures on this page are shown in euro, using the reference rate set by the European Central Bank, while the payment is processed in US dollars; your bank handles the conversion, so the statement may show a slightly different amount.

- Free first class: Free. A free trial class. A puzzle and a first small program. No card required.
- Group batch: €90 (charged in US dollars) a month. Fifteen to twenty children close in age. A regular mentor. Two classes each week. Paid monthly, easy to stop.
- One to one: €134 (charged in US dollars) a month. One child, one mentor. Projects chosen with your child. Times set around your week.

## Coding classes for kids in Leipzig: frequently asked questions

### Are the classes taught in German?

No. Classes are live and in English only. The mentor uses simple sentences, shows each step on screen and adapts to your child's pace and accent, so children who are new to English manage well. Keywords in Scratch and Python are the same in any language.

### Do Leipzig primary schools teach coding?

Not as a subject. Grundschule in Saxony runs from grade 1 to grade 4 without one. Grades 5 and 6 have Technik/Computer, a combined subject with some informatics, and Informatik itself starts in grade 7 with one lesson a week.

### Is Informatik compulsory in Saxony?

Yes, from grade 7 to grade 10, at both the Oberschule and the Gymnasium, one lesson a week, according to the Informatik-Monitor 2026/27. In the Oberstufe it can be a Grundkurs, and a Leistungskurs exists at selected Gymnasien.

### How young can my child start?

At 6. The youngest work with picture blocks, so they need neither typing nor fluent reading. Most children move to typed Python somewhere around 9, when reading and typing feel easy.

### When are classes in Leipzig time?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Leipzig families often pick a slot between about 15:30 and 17:30, or a Sunday morning.

### Which contest could my primary-age child try?

The Mathematik-Olympiade has a primary version for grades 3 and 4 with three rounds. Pupils enter through their maths teacher at school, and the school round begins at the start of the school year.

### Where do the mentors teach from?

From India, live over video. A 15:40 class in Leipzig starts at 20:10 for the mentor in winter. Your child has the same mentor each week.

### How large are the groups?

Fifteen to twenty children of a similar age. If you would prefer private teaching, the one-to-one plan gives your child two lessons a week with the mentor alone.

### What does it cost, and in which currency?

Fees are monthly. You see them in euro at the European Central Bank reference rate, but the payment is made in US dollars and converted by your bank, so the amount may differ slightly. The trial class is free and needs no card.

### What kind of projects will my child do?

Young children make games and animated stories from blocks. Older children write Python, draw with code and, from about 10, ask questions of real data, such as counting the trees in Leipzig's register.

## Related pages

- [Coding classes in Germany](/coding-classes-in-germany): Our hub for families across Germany.
- [Informatik by Land](/informatik-in-german-schools-by-state): How Saxony compares with the other fifteen Länder.
- [Maths olympiad preparation](/math-olympiad-germany-preparation): More on the Mathematik-Olympiade and how to prepare.
- [Python for 10 year olds](/python-for-10-year-olds): What typed code looks like at ten.
- [AI projects for kids](/ai-projects-for-kids): Ideas sorted by age.
- [How we teach](/how-we-teach): What happens in one of our lessons.

## More pages for this Land

Part of the guide: [Coding classes in Saxony](/coding-classes-in-saxony)

### Cities and pages in Saxony

- [Coding classes for kids in Dresden](/coding-classes-for-kids-dresden)
- [Coding classes for kids in Chemnitz](/coding-classes-for-kids-in-chemnitz-germany)
- [Programmieren lernen für Kinder in Leipzig](/programmieren-lernen-kinder-leipzig)

More guides: [Coding classes in North Rhine-Westphalia](/coding-classes-in-north-rhine-westphalia), [Coding classes in Lower Saxony](/coding-classes-in-lower-saxony), [Coding classes in Land Bremen](/coding-classes-in-land-bremen), [Coding classes in Hesse](/coding-classes-in-hesse), [Coding classes in Bavaria](/coding-classes-in-bavaria), [Coding classes in Saxony-Anhalt](/coding-classes-in-saxony-anhalt), [Coding classes in Schleswig-Holstein](/coding-classes-in-schleswig-holstein), [Coding classes in Baden-Württemberg](/coding-classes-in-baden-wuerttemberg), [Coding classes in Saarland](/coding-classes-in-saarland), [Coding classes in Rhineland-Palatinate](/coding-classes-in-rhineland-palatinate), [Coding and maths in Berlin](/coding-and-maths-classes-in-berlin-germany), [Coding and maths in Hamburg](/coding-and-maths-classes-in-hamburg-germany), [Coding classes in Thuringia](/coding-classes-in-thuringia), [Coding classes in Brandenburg](/coding-classes-in-brandenburg), [Coding classes in Mecklenburg-Vorpommern](/coding-classes-in-mecklenburg-vorpommern)

## Contact

Book the free first class at [https://learn.modernagecoders.com/coding-classes-for-kids-leipzig](https://learn.modernagecoders.com/coding-classes-for-kids-leipzig#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
