---
title: "Coding and AI Classes in Lübeck: Live Online, in English"
description: "Coding and AI classes in Lübeck for children, teens and adults, live online in English: compulsory Informatik in Schleswig-Holstein and an old town tree AI project."
canonical: https://learn.modernagecoders.com/coding-and-ai-classes-in-luebeck-germany
source: src/pages/coding-and-ai-classes-in-luebeck-germany.html
---
> Coding and AI classes in Lübeck at Modern Age Coders are taught live online, in English, for every age: AI literacy and Python for children, machine learning for teenagers, and a full AI and machine learning path for adults. A regular mentor adapts to each learner's pace and accent, in a batch of fifteen to twenty or one to one, and every model a learner builds is tested on data it has not seen.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / [Schleswig-Holstein](/coding-classes-in-schleswig-holstein) / Lübeck

Lübeck · Coding and AI · Children, teens, adults

# Coding and AI classes in Lübeck

Informatik became a required subject for all Schleswig-Holstein pupils in 2024/25, so a Lübeck teenager now meets algorithms at school. What school has little time for is artificial intelligence done properly: building a model, testing it on data it has never seen, and saying honestly how often it is wrong. That is what our live classes in English add, for children, teenagers and adults alike. Below, a computer tries to guess the trees of the Lübeck old town.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Learners: Children from 6, teenagers, adults; Focus: Coding first, then AI you can test; Live: Two one-hour video classes a week; Group: Fifteen to twenty, or one to one; Mentors: In India, teaching in English; Start: With a free first class. Rated 4.9 across 547 Google reviews.

## Which coding and AI course fits a Lübeck learner?

Three doors into AI. Each one starts where the learner is and ends with models they can test and explain.

- [AI Literacy for Kids](/courses/ai-literacy-for-kids-course): Children aged 8 to 14, four months, joinable in any month. How machines learn from examples and why they get things wrong, with no adult chatbot accounts.
- [Machine Learning Without Code, for Teens](/courses/orange-data-mining-visual-machine-learning-course-for-teens): Teenagers aged 13 to 18, 24 classes. Visual machine learning in Orange: train, test and compare models before writing a line of code.
- [AI and ML Masterclass for Adults](/courses/ai-ml-masterclass-complete-college): Adults 18 and over, 12 to 14 months. Python, statistics, machine learning, deep learning and generative AI, from a complete beginner's start.

## Is Informatik compulsory in Lübeck schools?

Yes, since 2024/25, at every school type: four weekly hours in total, spread across grades 7 to 10.

According to the 2026/27 Informatik-Monitor of the Gesellschaft für Informatik, every school type in the Land has taught the subject as a requirement since 2024/25. Pupils get four weekly hours altogether between grade 7 and grade 10, and the school sets the timing: the GI's own example is two hours a week in grades 7 and 8. By that measure the Land reaches the four-hour level the GI calls its short-term recommendation, one of only four Länder that do.

**Informatik in Schleswig-Holstein, school year 2026/27**

| Stage | What the GI reports |
|---|---|
| Grades 5 and 6 | Informatik may be built into any subject; no separate compulsory hours |
| Grades 7 to 10, all school types | Required: four hours a week summed over the four grades |
| Gemeinschaftsschule, grades 7 to 10 | Optional Wahlpflicht Informatik on top, four hours summed |
| Gymnasium (G9), grades 7 to 10 | Optional Wahlpflicht Informatik on top, six hours summed |
| Oberstufe, basic level | Three weekly hours |
| Oberstufe, raised level | Four hours a week, when it leads the science profile |

Summarised by us from the GI Informatik-Monitor 2026/27 (Land entry and national comparison), consulted on 2 November 2026.

### The Informatik Abitur in the Land

A pupil whose profile is led by Informatik sits a written Abitur paper in it. There is no single paper for the whole Land: the GI describes local teachers sending in suggested tasks, from which the Fachaufsicht picks.

Work at a computer may be part of the paper but does not have to be, and whatever depends on the computer is capped at a quarter of the marks. Pupils on the basic level can instead be examined orally, give an exam presentation or submit a besondere Lernleistung.

### Where we fit

Four hours over four years is a real foundation, and it is far more than many Länder offer. It is still about one hour a week. A Lübeck pupil who wants to build and test AI models, or to aim at the raised level in the Oberstufe, needs far more practice than that.

We teach beside school and never in place of it. The school course gives the grade; our classes give keyboard time, projects, and a mentor who explains in English.

More on the Land, including its school types and holidays, is on our [Schleswig-Holstein page](/coding-classes-in-schleswig-holstein).

## Can a computer guess which tree stands in a Lübeck street?

Nearest neighbours is the oldest trick in machine learning: to guess something about a new example, look at the examples closest to it. We test it on the old town of Lübeck.

### The data

The Hansestadt Lübeck publishes its Baumkataster, the register of the trees its green-spaces department and the Lübeck Port Authority look after, on opendata.luebeck.de under CC0, with no conditions on reuse. The file was last updated on 14 July 2025; our copy was downloaded on 3 November 2026.

It has 64,031 rows: a tree number, two coordinates in metres, the genus, the street and, for many trees, the planting year. Not every row is a tree. City-wide, 8,657 rows have the genus "Fehlplatz", an empty planting place, and a program has to throw those out before it learns anything.

### The experiment

We drew a box about 1.2 km by 1.5 km around the old town island, kept the 1,945 real trees inside it, and hid every fifth one: 389 trees whose genus the program is not allowed to see.

For each hidden tree, the program finds the nearest trees it can see and lets them vote. With k = 1, the single closest tree decides. Before trusting that, we need something to compare with: a lazy rule that always guesses the commonest genus in the box, the lime tree (Tilia).

**Version 1: a lazy rule against the nearest tree** (Python)
```python
import csv
from collections import Counter

def number(text):
    return float(text.replace(",", "."))

trees = []
with open("baumkataster.csv", encoding="utf-8") as f:
    for row in csv.DictReader(f, delimiter=";"):
        x, y = number(row["RECHTSWERT"]), number(row["HOCHWERT"])
        if row["GATTUNG"] != "Fehlplatz" and 610200 <= x <= 611400 and 5969300 <= y <= 5970800:
            trees.append((x, y, row["GATTUNG"]))

test = trees[::5]
train = [t for i, t in enumerate(trees) if i % 5 != 0]

def guess(tree, k):
    near = sorted(train, key=lambda t: (t[0] - tree[0]) ** 2 + (t[1] - tree[1]) ** 2)[:k]
    return Counter(t[2] for t in near).most_common(1)[0][0]

common = Counter(t[2] for t in train).most_common(1)[0]
hits = sum(1 for t in test if guess(t, 1) == t[2])
print("Trees in the old town box:", len(trees), " hidden:", len(test))
print("Always guess", common[0] + ":", round(100 * sum(1 for t in test if t[2] == common[0]) / len(test), 1), "%")
print("Nearest tree, k = 1:", round(100 * hits / len(test), 1), "%")
```
It prints: Trees in the old town box: 1945 hidden: 389, Always guess Tilia: 25.2 % and Nearest tree, k = 1: 57.6 %.

Always saying "lime" is right a quarter of the time. Copying the nearest tree is right more than half the time, 57.6 percent. That makes sense to anyone who has walked through Lübeck: avenues and squares are often planted with one kind of tree, so a neighbour is a good clue. But k = 1 is a choice, not a law. What if we ask three neighbours, or a hundred?

**Version 2: add below Version 1, try different k** (Python)
```python
for k in [1, 3, 7, 25, 101, 501]:
    hits = sum(1 for t in test if guess(t, k) == t[2])
    print("k =", k, ":", round(100 * hits / len(test), 1), "%")
```
It prints: k = 1 : 57.6 %, k = 3 : 58.4 %, k = 7 : 53.7 %, k = 25 : 47.6 %, k = 101 : 38.6 % and k = 501 : 31.1 %.

**Correct guesses for 389 hidden old town trees (our calculation)**

| Neighbours asked (k) | Correct |
|---|---|
| Always "Tilia" | 25.2 % |
| 1 | 57.6 % |
| 3 | 58.4 % |
| 7 | 53.7 % |
| 25 | 47.6 % |
| 101 | 38.6 % |
| 501 | 31.1 % |

Data: Hansestadt Lübeck, Abteilung Grün und Freiräume, Baumkataster (updated 14 July 2025), opendata.luebeck.de, licence CC0, downloaded 3 November 2026. The box, the split, the code and the percentages are ours. The old town box held 381 Fehlplatz rows, removed before counting. We are not connected with the Hansestadt Lübeck.

Three neighbours do a little better than one, because a single odd tree no longer decides alone. After that, every extra neighbour pulls the guess away from the street and towards the whole box, until at 501 neighbours the program is almost back to "always lime". This is the central lesson of machine learning in one table: the setting that works is found by testing on examples the model has not seen, never by guessing, and a model must always beat the lazy rule to be worth anything.

1. **Children, no screen.** On a map of your street, cover one tree with a coin. Guess what it is from the trees next to it. Now guess from the whole street. Which was easier?
2. **Children, Python.** Change the 5 in trees[::5] to 10 so fewer trees are hidden. Does the k = 1 score change?
3. **Teenagers.** Instead of the genus, try to guess the planting year from neighbours. Many rows have no year: decide what to do with them before you start.
4. **Adults.** Our test set is every fifth tree in file order, and the file lists trees mostly street by street. Shuffle the trees with a fixed random seed before splitting and see whether the scores hold. If they fall, ask why.

## What do children, teenagers and adults learn about AI in our classes?

One idea, three depths. Nearest neighbours above is taught at each of them.

### Children

Children learn that a computer "learns" by looking at examples, and that it can only be as good as those examples. They sort pictures, make guessing games in Scratch and, from about 9, write small Python programs that compare things. They use no AI accounts.

### Teenagers

Teenagers train real models, first visually in Orange and then in Python, and learn the habits that matter: a test set kept apart, a lazy rule to beat, and a sentence explaining every result. These habits are what universities look for.

### Adults

Adults go from Python to machine learning, deep learning and generative AI. Many come because AI tools have arrived at work; they leave able to tell when a tool is guessing and when it is right, which is what their employers actually need.

Chatbot age limits come from the companies that make them, and we keep to them: 13 for OpenAI, with a parent or guardian agreeing for anyone under 18, and 18 for Anthropic's Claude. Children therefore make AI rather than talk to it. The exact wording of each company's terms is collected in our [AI tools age guide](/ai-tools-age-guide).

## Do you teach coding and AI in German?

No. Every class is in English, with mentors who adjust to the learner.

### Why we are clear about it

The people teaching are in India and run every class in English over live video. German-language lessons do not exist with us, and a family should know that before booking rather than discover it in a first lesson.

For AI in particular, English is an advantage: nearly every library, tutorial and research paper a learner will meet later is written in it.

### How mentors adapt

Mentors speak at the learner's speed, rephrase when something does not land, and quickly get used to a Lübeck accent. A learner can answer in simple English, or ask for a word, without losing face.

Code, tables and results stay on the shared screen, so meaning never depends on one spoken sentence.

## When can learners in Lübeck take live classes?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

**Example Lübeck times and the time in India**

| Lübeck | India until 28 March 2027 | India from 28 March 2027 | Usual for |
|---|---|---|---|
| 16:15 | 20:45 | 19:45 | Children and teenagers |
| 17:45 | 22:15 | 21:15 | Adults after work |
| Saturday 13:15 | 17:45 | 16:45 | Families |
| Sunday 11:30 | 16:00 | 15:00 | One-to-one learners |

Lübeck runs on MEZ (UTC+1) in winter and MESZ (UTC+2) in summer, as the Einheitenzeitgesetz requires; this winter began when the clocks were turned back on 25 October 2026 and ends with the change on 28 March 2027. India keeps UTC+5:30, which makes the difference 4 h 30 in the cold months and 3 h 30 in the warm ones. No batch time is fixed beforehand.

**Schleswig-Holstein school holidays, 2026/27**

| Holidays | From | To |
|---|---|---|
| Herbstferien | 12 October 2026 | 24 October 2026 |
| Weihnachtsferien | 21 December 2026 | 6 January 2027 |
| Osterferien | 30 March 2027 | 10 April 2027 |
| Bridge day | 7 May 2027 | 7 May 2027 |
| Sommerferien | 3 July 2027 | 14 August 2027 |

Dates copied from the KMK holiday list for the school year 2026/2027, version of 9 October 2025.

Classes continue in the holidays unless you pause them; adults follow no school calendar at all. Destatis counts 216,889 people in Lübeck at the end of 2024, in a Land of 2,959,517 whose capital Kiel has 252,668. Learners from Travemünde on the coast and from nearby Bad Schwartau or Ratzeburg join the same groups. Hamburg, with 1,862,565 people, is a separate Land with its own school rules and holidays.

## Which habits does a good AI learner build, and in what order?

Our own list. Each habit is taught at every age, in simpler or harder form.

**Five AI habits (ours)**

| Habit | In the tree project | At work or at university |
|---|---|---|
| 1. Clean first | Remove the Fehlplatz rows | Check what each row really is |
| 2. Hide a test set | Every fifth tree kept back | Never grade a model on its own training data |
| 3. Beat a lazy rule | Always "Tilia" scores 25.2 % | Ask what a simple rule would score |
| 4. Tune by testing | k = 3 does better than 1 or 501 | Settings come from results, not hunches |
| 5. Doubt the split | Shuffle before splitting | Ask whether the test is fair |

### For families

A child who has learned habit 3 asks "compared with what?" about every impressive number. It is one of the most useful questions a person can learn.
We report which habits a learner has shown in their own work.

### For adults

Habit 5 is where most real AI projects go wrong: the test looks fair and is not. Our adult course spends time on it on purpose.
Bring a problem from your job and we will build the five habits around it.

## Nine more courses for Lübeck learners

Children, teenagers and adults each have three more options, all taught live in English.

### Children

Ages 6 to 12

- [Coding for Kids](/courses/kids-coding-blocks-masterclass): Scratch to apps over a school year, 6 to 12.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass): Typed Python and small AI projects, 9 to 12.
- [Scratch for kids](/courses/scratch-programming-complete-course): A short first course with finished games, 6 to 12.

### Teenagers

Ages 10 to 19

- [AI and ML for teens](/courses/ai-ml-masterclass-teens): Python to real models, 13 to 18.
- [Informatik Companion](/courses/informatik-companion-course-klasse-5-10): Beside compulsory Informatik, Klasse 5 to 10.
- [Informatik Abitur](/courses/informatik-abitur-course-java-python): Oberstufe topics in Java and Python, 16 to 19.

### Adults

18 and over

- [Artificial intelligence](/courses/artificial-intelligence-complete-masterclass-college): Search, logic and agents, the ideas under AI.
- [Data science](/courses/data-science-complete-masterclass-college): Python, statistics and machine learning.
- [Python from zero](/courses/python-programming-masterclass-zero-to-advanced-college): The language under almost all AI work.

## How do live coding and AI classes run?

Two live hours a week with one mentor. Learners write the code and run the experiments themselves; the mentor asks the questions that make them think.

- **Weekday afternoons** For children and teenagers after school in Lübeck.
- **Evenings and weekends** For adults and families who prefer them.
- **One to one** A time you agree, moved when you need to.

- **One mentor** The same person throughout the course.
- **Tested models** Nothing is called accurate without a test set.
- **Real data** Open data from German cities, like Lübeck's trees.
- **Age-matched** Separate batches for children, teenagers and adults.
- **Clear English** Spoken slowly, shown on screen.
- **Short updates** What was learned and what is next.

## How much are coding and AI classes in Lübeck?

You pay monthly for eight live classes. We show the fee in euro using the European Central Bank reference rate; the card is charged in US dollars and your bank converts that into euro, which can leave a small difference on your statement.

- Free first class: Free. A free first class. A first experiment at the learner's level. No payment details.
- Group batch: €90 (charged in US dollars) a month. A batch of fifteen to twenty, grouped by age. One mentor for the course. Two live classes a week. Paid monthly, stop in any month.
- One to one: €134 (charged in US dollars) a month. One learner with one mentor. Projects built around the learner. Times arranged between you.

## Coding and AI classes in Lübeck: what people ask

### Are the classes in German?

No, only in English. The mentors teach live from India, slow down for a learner who needs it and get used to how each person speaks. Because code and results stay visible on screen, imperfect English is rarely a barrier.

### Who can join coding and AI classes in Lübeck?

Anyone from 6 upwards. Children learn what AI is by building small programs, teenagers train and test real models, and adults follow a full path from Python to machine learning and generative AI.

### Is Informatik compulsory in Schleswig-Holstein?

Yes. The Gesellschaft für Informatik reports that every school type has had to teach it since 2024/25: four hours a week added up over grades 7 to 10, with each school choosing in which of those grades.

### How is the Informatik Abitur examined in Schleswig-Holstein?

When it leads a pupil's profile, in a written paper whose tasks local teachers suggest and the Fachaufsicht selects. Work on the computer can count for a quarter of the marks at most. Our classes run beside school and give no grades.

### When are classes in Lübeck time?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Children usually pick late afternoons and adults evenings or weekends.

### Can children use ChatGPT or Claude in your AI classes?

Not children. OpenAI's minimum age is 13, with parental permission until 18, and Claude is for adults only under Anthropic's terms. So the children in our classes write little AI programs themselves; it shows them what is inside the box.

### What is the tree project on this page?

Something we designed around the Hansestadt Lübeck tree register. A program guesses the genus of 389 hidden old town trees from their nearest neighbours, beats a lazy always-lime rule, and shows how the number of neighbours changes the result.

### Do I need maths for AI?

Not to start. Children need none, teenagers need ordinary school maths, and adults refresh what they need inside the course. The nearest-neighbour method on this page uses only distances and counting.

### How big are the batches?

A batch is fifteen to twenty people at a similar stage. With one-to-one, the learner has the mentor to themselves twice a week at times you set.

### What does it cost and how is it paid?

There is one fee per month. This page displays it in euro, converted at the reference rate of the European Central Bank, while the charge runs in US dollars and your bank changes it. Expect a tiny difference. Trying a class is free and asks for no card.

## Related pages

- [Coding classes in Schleswig-Holstein](/coding-classes-in-schleswig-holstein): The Land, its schools and our classes.
- [AI and machine learning in Germany](/ai-and-machine-learning-classes-in-germany): Our deeper guide to learning AI.
- [AI course for school students](/ai-course-for-school-students-germany): AI for pupils beside school.
- [Coding for adults](/coding-classes-for-adults-germany): Starting to code after school.
- [Learn to think, not copy AI](/learn-to-think-not-copy-ai-germany): Why we teach judgement first.
- [How we teach](/how-we-teach): Our live classes, step by step.

## Contact

Book the free first class at [https://learn.modernagecoders.com/coding-and-ai-classes-in-luebeck-germany](https://learn.modernagecoders.com/coding-and-ai-classes-in-luebeck-germany#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
