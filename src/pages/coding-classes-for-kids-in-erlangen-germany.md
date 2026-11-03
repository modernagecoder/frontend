---
title: "Coding Classes for Kids in Erlangen: Live Online, in English"
description: "Coding classes for kids in Erlangen aged 6 to 12, live online in English: when Bavarian schools start Informatik, free contests and an Erlangen tree data project."
canonical: https://learn.modernagecoders.com/coding-classes-for-kids-in-erlangen-germany
source: src/pages/coding-classes-for-kids-in-erlangen-germany.html
---
> Erlangen children aged 6 to 12 learn coding with Modern Age Coders in live online classes taught in English. Six and seven year olds start with picture puzzles and Scratch blocks; by nine or ten they type Python and count things in small real files. One mentor stays with each child, adjusting to their speed and the way they speak, whether in an age group of fifteen to twenty or alone, after school or at the weekend.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / Kids in Erlangen

Erlangen · Coding for children · Ages 6 to 12

# Coding classes for kids in Erlangen

Erlangen keeps a register of 23,250 trees. Ask a child to turn it into a picture, one star for every 500 trees, and the picture tells a small fib: the birches vanish completely. Working out why is what our live lessons in English are really about, for children from 6 to 12. Further down: when Bavarian schools bring in Informatik, a pair of contests a third grader can enter in 2026/27, and lesson times for Erlangen.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Ages: 6 to 12, grouped by age; First: Puzzles and Scratch; Next: Typed Python from about 9; Group size: 15 to 20, or one to one; Teaching: In English, mentors in India; Trial: A free first class. Rated 4.9 across 547 Google reviews.

## Which coding course should an Erlangen child start with?

Three gentle starts. The free class shows which one suits your child.

- [Scratch Coding for Kids](/courses/scratch-programming-complete-course): From 6. Games and animated stories made with blocks; a short course to see whether coding clicks.
- [Coding for Kids](/courses/kids-coding-blocks-masterclass): Ages 6 to 12 in age groups. A longer path from blocks to apps, step by step.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass): Nine and up. Real typed code, turtle drawings, then the tree star chart further down.

## When do children in Erlangen meet Informatik at school?

After Grundschule, and how much depends on the school type. The Gesellschaft für Informatik records the Bavarian rules for 2026/27.

**Computing in an Erlangen child's school years**

| Grades | School type | Informatik on the timetable |
|---|---|---|
| 1 to 4 | Grundschule | Before the Bavarian Informatik rules begin |
| 5 to 10 | Mittelschule | A required Informatik hour every week, every year |
| 6 and 7 | Gymnasium | Informatik as the focus of one Natur und Technik hour a week |

The KMK primary-school page sets out the four Grundschule years; the GI Informatik-Monitor for 2026/27 (Bavaria), checked on 2 November 2026, gives the secondary rules, and for the Gymnasium says "in den Jahrgangsstufen 6 und 7 im Umfang von je einer Wochenstunde der Schwerpunkt Informatik".

### The primary years

From about 6 to 10 an Erlangen child is in Grundschule. These are the years when children are most curious about how games and apps work, and the school timetable has not yet reached Informatik.

A weekly class fills that space with play that has a purpose: building, testing and fixing.

### Arriving ready

At a Mittelschule computing starts in grade 5, at a Gymnasium in grade 6. A child who has already written small programs meets it with confidence.

What we offer sits next to school: there is no tutoring for tests and nothing we do turns into a mark.

## Which trees does Erlangen have most of, and why does our star chart fib?

Maples first, oaks a close second, and the chart fibs because of one tiny symbol in the code. Stadt Erlangen publishes its tree register as open data under CC BY 4.0, and our older children turn it into a picture.

### The register

The city's Baumkataster lists 23,250 trees, each with its botanical genus, species and German name. Our copy dates from 3 November 2026; children work from a cut-down file, erlangen_trees.csv, with just the genus and the name.

The genus is the tree's family name in Latin: Acer for maples, Quercus for oaks, Tilia for limes, Betula for birches.

### The idea

First, count the trees of each genus. Then draw a bar for each one out of stars, one star for every 500 trees, so the whole chart fits on a screen.

Before running the chart, children predict how many stars the birches will get. Most say "about one".

**Step 1: count the trees by genus** (Python)
```python
import csv
from collections import Counter

with open("erlangen_trees.csv", encoding="utf-8") as f:
    genus = Counter(row["genus"] for row in csv.DictReader(f))

print("Trees in the file:", sum(genus.values()))
for name, count in genus.most_common(12):
    print(name, count)
```
It prints Trees in the file: 23250, then the twelve largest genera: Acer 4953, Quercus 4603, Tilia 2104, Carpinus 1704, Pinus 1339, Fraxinus 1050, Robinia 849, Prunus 621, Platanus 550, Betula 474, Populus 474, Aesculus 393.

**Step 2: one star per 500 trees** (Python)
```python
print("One star for every 500 trees:")
for name, count in genus.most_common(12):
    print(name.ljust(10), "*" * (count // 500))
```
Run after Step 1, it prints the chart: Acer and Quercus get nine stars each, Tilia four, Carpinus three, Pinus and Fraxinus two, Robinia, Prunus and Platanus one, and Betula, Populus and Aesculus get no stars at all.

The birches have 474 trees and no stars. The poplars too. And the maples, with 350 more trees than the oaks, look exactly the same size. The reason is the // sign. In Python, 474 // 500 means "how many whole 500s fit into 474", and the answer is 0. Whole-number division throws the rest away, every time.

The fix is to decide how to round. Version 3 divides normally, which gives 0.948 for the birches, and then rounds to the nearest whole star.

**Step 3: round to the nearest star** (Python)
```python
print("Rounded to the nearest 500:")
for name, count in genus.most_common(12):
    print(name.ljust(10), "*" * round(count / 500))
```
Run after Steps 1 and 2, it prints a fairer chart: Acer ten stars, Quercus nine, Tilia four, Carpinus and Pinus three, Fraxinus and Robinia two, and Prunus, Platanus, Betula, Populus and Aesculus one each.

**Erlangen's twelve largest tree genera and their stars (our counts and charts)**

| Genus (common name) | Trees | Stars with // | Stars rounded |
|---|---|---|---|
| Acer (maple) | 4,953 | 9 | 10 |
| Quercus (oak) | 4,603 | 9 | 9 |
| Tilia (lime) | 2,104 | 4 | 4 |
| Carpinus (hornbeam) | 1,704 | 3 | 3 |
| Pinus (pine) | 1,339 | 2 | 3 |
| Fraxinus (ash) | 1,050 | 2 | 2 |
| Robinia (black locust) | 849 | 1 | 2 |
| Prunus (cherry and plum) | 621 | 1 | 1 |
| Platanus (plane) | 550 | 1 | 1 |
| Betula (birch) | 474 | 0 | 1 |
| Populus (poplar) | 474 | 0 | 1 |
| Aesculus (horse chestnut) | 393 | 0 | 1 |

Counts and charts are ours, made from the Stadt Erlangen Baumkataster (CC BY 4.0) as fetched on 3 November 2026. 262 trees in the file have no genus and are counted under an empty name. By single species the most common tree is the Stiel-Eiche (pedunculate oak) with 3,523, while by genus the maples lead: how you group decides the winner.

Every chart has a scale, and every scale hides something. A good chart says its scale out loud, "one star = 500 trees, rounded", so the reader knows what the picture can and cannot show. Children who learn this at ten read charts in the newspaper differently for the rest of their lives.

1. **Ages 6 to 8, no screen.** Count the trees on your street or in a park. Draw one leaf for every 5 trees. What happens to a kind of tree you only saw 3 times?
2. **Eight to ten, in Scratch.** Program the pen to draw a bar whose length is the number of trees divided by 100. Try it with 474 and with 500. Are the bars the right size?
3. **Ten to twelve, in Python.** Change the scale to one star per 250 trees and run both versions again. Which genus now gets different stars, and why?

## Will my child manage coding lessons in English?

Almost always, because a coding lesson is something a child watches and does, not just listens to.

### Only in English

All lessons are live and taught in English by mentors based in India. We do not offer lessons in German, and we say so before you book.

### Pace and accent

Mentors use short sentences, repeat when needed and show on screen what they mean. Over a few weeks they get used to how each child speaks.

### A bonus subject

Children at German schools practise English every week without it feeling like a lesson. Blocks, keywords and error messages are the same English words everywhere.

## Which contests can an Erlangen primary pupil take part in this school year?

The Informatik-Biber for logic puzzles and Pangea for maths both start at grade 3. The school is usually the way in, so a question to the teacher comes first.

**Two contests open to primary pupils in 2026/27 (organisers' own pages)**

|  | Informatik-Biber | Pangea Mathematikwettbewerb |
|---|---|---|
| Open to | Klasse 3 upwards, nothing to learn beforehand | Klasse 3 upwards |
| Klasse 3 and 4 | 9 puzzles, 30 minutes | 15 tasks, 45 to 60 minutes |
| Key dates | Biberwochen 9 to 20 November 2026 | Registration 1 October 2026 to 17 February 2027; first round 23 February to 3 March 2027 |
| Cost | Free | See the organiser |

Taken on 2 November 2026 from bwinf.de for the Biber and from the Termine and Ablauf pages of pangea-wettbewerb.de. Modern Age Coders has no link to either contest.

The Biber asks children to follow rules, spot patterns and find routes; Pangea asks for careful maths thinking. Both reward reading a question slowly, which is what the star chart teaches too. Real contest tasks stay with the organisers; in class children meet puzzles our mentors invented.

## What times would work for an Erlangen child?

After-school hours in Erlangen fall in the Indian evening, where our mentors are, and weekend mornings suit younger children.

**Sample Erlangen start times, with the time in India**

| Erlangen | India, winter | India, from 28 March 2027 |
|---|---|---|
| 14:15 | 18:45 | 17:45 |
| 16:20 | 20:50 | 19:50 |
| Saturday 08:45 | 13:15 | 12:15 |
| Sunday 09:45 | 14:15 | 13:15 |

The Einheitenzeitgesetz puts German clocks one hour ahead of UTC in winter and two in summer; they changed on 25 October 2026 and change again on 28 March 2027. Indian time, fixed at UTC+5:30, is therefore four and a half hours ahead today and three and a half from late March. Pick any time that suits you.

Erlangen follows the Bavarian holiday dates in the KMK table of 9 October 2025. The longest breaks are at Christmas (from Thursday 24 December 2026 until Friday 8 January 2027) and in summer (Monday 2 August until Monday 13 September 2027); there are also a week in November and in February, two weeks around Easter and nearly two at Whitsun. Lessons can carry on through the holidays, or pause, as you prefer.

## What will my child be able to do as they progress?

Our own five milestones for ages 6 to 12, used to place children in groups and to report back to parents.

**Five steps we track for children (ours)**

| Milestone | Usual age | What your child can do |
|---|---|---|
| Order | 6 to 7 | Put steps in the right order so a sprite follows them |
| Repeat | 7 to 9 | Use a loop instead of copying the same blocks |
| Count | 8 to 10 | Keep a tally in a variable and show it |
| Divide and round | 9 to 11 | Scale a number for a picture and choose how to round |
| Read a file | 10 to 12 | Count real records and explain a chart's scale |

### For parents

After the tree project, ask your child why the birches had no stars. If they talk about remainders, the lesson worked.
Monthly notes tell you what was built and understood, not how long the screen was on.

### For children

When you shrink numbers to fit a picture, something small can disappear. Check the smallest bar.
Write your scale under every chart: one star equals how many?

## Nine more courses for Erlangen children

Grouped into thinking, playing and making.

### Thinking

Puzzles and numbers

- [Problem solving](/courses/problem-solving-and-computational-thinking-for-kids): Logic first, code later.
- [Mental maths](/courses/mental-maths-mastery-kids): Quick sums, no calculator.
- [Reasoning for young thinkers](/courses/reasoning-and-readiness-course-for-young-thinkers): Patterns and logic for the youngest.

### Playing

Games and worlds

- [Minecraft coding](/courses/minecraft-coding-for-kids-course): Code in a familiar world.
- [Roblox coding](/courses/roblox-game-coding-for-kids-lua-course): Make real Roblox games.
- [Godot games](/courses/godot-game-development-course-for-kids-and-teens): A real game engine for older children.

### Making

Bigger projects

- [C++ for kids](/courses/cpp-programming-for-kids-course): A second typed language.
- [Hackathon prep](/courses/hackathon-prep-for-kids-coding-innovation-ai-projects-course): Build an idea fast, then present it.
- [Maths through coding](/courses/maths-through-coding): School maths turned into programs.

## How do live coding lessons run for an Erlangen child?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Early afternoon** Soon after Grundschule ends.
- **Later afternoon** For older children with more homework.
- **Weekend mornings** Saturday or Sunday, unhurried.

- **A steady mentor** The same mentor each week.
- **Short, lively lessons** Sized for young attention spans.
- **Children drive** The child builds; the mentor guides.
- **Same-age classes** Six year olds learn with six year olds.
- **Notes for parents** A short monthly summary.
- **Two formats** Groups of 15 to 20, or private.

## Fees for Erlangen families

Eight live lessons are included in each monthly fee. To show euro we apply the reference rate of the European Central Bank; what your card is actually charged is a US dollar amount that your bank changes into euro, so the final sum may move a little.

- Free first class: Free. A free first lesson. A puzzle and a first Scratch game. No card needed.
- Group batch: €90 (charged in US dollars) a month. 15 to 20 children of a similar age. One regular mentor. Two lessons a week. Monthly, stop at any time.
- One to one: €134 (charged in US dollars) a month. Your child and one mentor. Their own pace and projects. Times that suit you.

## Coding classes for kids in Erlangen: questions from families

### Are the classes in German?

No. Teaching happens in English and nothing else. Mentors keep their language simple, follow the child's tempo and accent, and demonstrate on screen rather than lecture.

### What is a good age to start?

Six, with puzzles and Scratch blocks, which need no typing. Most children start typing Python at around 9.

### When does Informatik start at Bavarian schools?

After Grundschule. The Gesellschaft für Informatik records compulsory Informatik at the Mittelschule with one weekly lesson in grades 5 to 10, and at the Gymnasium one weekly Informatik-focused lesson in grades 6 and 7 within Natur und Technik.

### When are classes in Erlangen time?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. The mentors are in India, where an Erlangen afternoon is already evening.

### What is the Erlangen tree project?

A Python exercise we created from Stadt Erlangen's tree register of 23,250 trees. A star chart with one star per 500 trees gives the 474 birches no stars, and children learn why whole-number division drops the remainder and how to round fairly.

### Can my child enter the Informatik-Biber?

Through the school, yes. Entry is free from Klasse 3, and the 2026 contest weeks are 9 to 20 November 2026.

### What is Pangea?

A maths contest that primary pupils can enter from grade 3. For 2027 registration runs from 1 October 2026 to 17 February 2027 and the first round from 23 February to 3 March 2027, according to the organisers.

### Which equipment does my child need?

Any laptop or desktop with a mouse, internet that copes with video, and headphones if possible. For the first few lessons it helps if an adult can sit close by.

### How big are the groups?

Between fifteen and twenty children close in age. A child can also learn alone with a mentor.

### What do the fees cover?

Eight live lessons every month. Prices appear in euro via the ECB reference rate; your card is charged in US dollars and your bank does the exchange. The trial lesson is free of charge.

## Related pages

- [Coding classes in Germany](/coding-classes-in-germany): The Germany starting point.
- [Coding classes in Bavaria](/coding-classes-in-bavaria): The whole of Bavaria.
- [Scratch classes for kids](/scratch-coding-classes-for-kids): Where most children start.
- [Python for 10 year olds](/python-for-10-year-olds): What ten year olds can type.
- [AI projects for kids](/ai-projects-for-kids): Project ideas by age.
- [How we teach](/how-we-teach): Our live lessons explained.

## Contact

Book the free first class at [https://learn.modernagecoders.com/coding-classes-for-kids-in-erlangen-germany](https://learn.modernagecoders.com/coding-classes-for-kids-in-erlangen-germany#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
