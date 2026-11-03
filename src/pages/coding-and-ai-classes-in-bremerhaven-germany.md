---
title: "Coding and AI Classes in Bremerhaven: Live Online, English"
description: "Coding and AI classes in Bremerhaven for kids, teens and adults, live online in English: Informatik in the Land Bremen, AI tool ages and a ship data project."
canonical: https://learn.modernagecoders.com/coding-and-ai-classes-in-bremerhaven-germany
source: src/pages/coding-and-ai-classes-in-bremerhaven-germany.html
---
> Modern Age Coders runs coding and AI classes for Bremerhaven live online, taught in English, from primary school age to adulthood. Six to twelve year olds move from Scratch to Python, teenagers handle real data and small machine-learning models, and adults bring Python and AI into their work. A single mentor adapts to each learner's speed and accent, whether in a shared group of fifteen to twenty or in private lessons.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / Bremerhaven, all ages

Bremerhaven · Coding and AI · Every age from 6

# Coding and AI classes in Bremerhaven

On 1 December 2025 a single radio receiver in Bremerhaven logged more than 170,000 position reports from ships. How many ships was that? Getting that one answer right is a small lesson in coding and a big one in AI, and it is where this page starts. It then explains how our live classes in English work for every age, what schools in the Land Bremen teach in Informatik and what changes in 2027/28, and which AI tools each age may use.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Ages: 6 to 12, 13 to 18, adults; Children: Scratch and Python; Teenagers: Data, models, AI basics; Adults: Python and AI for work; Groups: 15 to 20, or one to one; Trial: One free class. Rated 4.9 across 547 Google reviews.

## Which coding and AI course fits each age in Bremerhaven?

One course per stage of life to begin with; the free class confirms it.

- [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev): Ages 8 to 12. Scratch games made with the mentor and a safe first look at AI, with no chatbot accounts.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens): Teenagers. Real files first, such as the ship signals below, then models that are checked on data they have not seen.
- [Data Analysis](/courses/data-analysis-mastery-course-college): Adults. Python for large files, counts, summaries and charts that hold up when someone checks them.

## How many ships does a receiver in Bremerhaven hear in one day?

Far fewer than the number of messages suggests. The Bundesamt für Seeschifffahrt und Hydrographie (BSH) publishes what the AIS receiver at its Bremerhaven measuring station records, open data under the Datenlizenz Deutschland Namensnennung 2.0. Our learners use one day of it.

### What AIS is

AIS, the Automatic Identification System, is a radio system on ships. Each ship regularly sends a short message with its identity, status and speed, and from time to time a longer one with its type and voyage. The BSH describes the records as navigation data and ship identity logged by the receiver at the Bremerhaven station.

We downloaded the log for 1 December 2025 on 3 November 2026: 185,120 lines, from midnight to 23:59:59.

### What we give learners

Two small files of our own. ais_positions_2025-12-01.csv has one row per position message: a ship number, its status, its speed in knots and the time. ais_ship_types_2025-12-01.csv has one row each time a ship announced its type.

We show no ship names, numbers or positions on this page. The question is about counting, and counting needs none of them.

**Version 1: messages or ships?** (Python)
```python
import csv

messages = 0
ships = set()
with open("ais_positions_2025-12-01.csv", encoding="utf-8") as f:
    for row in csv.DictReader(f):
        messages += 1
        ships.add(row["ship_id"])

print("Position messages:", messages)
print("Different ships:", len(ships))
print("Messages per ship, on average:", round(messages / len(ships)))
```
It prints: Position messages: 172306, Different ships: 170 and Messages per ship, on average: 1014.

A newcomer reading the file would say "172,306 ships". The set says 170. A set keeps each value once, however often it is added, so it turns a stream of messages into a list of distinct ships. On average each ship sent about a thousand position reports that day, because ships that move report often.

Next question: what kinds of ship were they? The type comes in the longer messages, so Version 2 builds a dictionary from ship number to type, then compares it with the set of ships from Version 1. Set subtraction shows which ships never said what they are.

**Version 2: join the types** (Python)
```python
from collections import Counter

kind = {}
with open("ais_ship_types_2025-12-01.csv", encoding="utf-8") as f:
    for row in csv.DictReader(f):
        kind[row["ship_id"]] = row["ship_type"]

by_messages = Counter(kind[s] for s in kind)
print("Ships that sent their type:", len(kind))
print("Seen moving or moored but never said their type:", len(ships - set(kind)))
print("Top kinds:", by_messages.most_common(4))
```
Run after Version 1, it prints: Ships that sent their type: 136, Seen moving or moored but never said their type: 34 and Top kinds: [('Cargo ship', 43), ('Tug', 23), ('Other ship', 18), ('Cargo shipA', 7)].

Thirty-four ships sent positions but no type during the day, so any chart of "ship types in Bremerhaven" built from this file is missing a fifth of the ships. Then there is that odd label, "Cargo shipA". The file also contains Cargo shipB, C and D: the letter is an extra category attached to the type. For a simple count of cargo ships they belong together, which Version 3 does.

**Version 3: tidy the labels** (Python)
```python
tidy = Counter()
for s, k in kind.items():
    if k.startswith("Cargo ship"):
        k = "Cargo ship"
    tidy[k] += 1
print("Top kinds after tidying:", tidy.most_common(3))
```
Added after the first two versions, the output is Top kinds after tidying: [('Cargo ship', 56), ('Tug', 23), ('Other ship', 18)].

**Position messages by reported status, Bremerhaven receiver, 1 December 2025 (our count)**

| Status in the message | Messages |
|---|---|
| under way | 142,895 |
| moored | 19,746 |
| restr.manv (restricted manoeuvrability) | 8,319 |
| anchored | 1,060 |
| unknown | 265 |
| other labels | 21 |

Data: Bundesamt für Seeschifffahrt und Hydrographie, AIS-Daten zur Schiffsabgasmessung an der Messstation Bremerhaven 2025 12, day file for 1 December 2025, licence Datenlizenz Deutschland Namensnennung 2.0, "Quelle: Bundesamt für Seeschifffahrt und Hydrographie", downloaded 3 November 2026. All counts are ours. Message counts are not ship counts: one moving ship can fill thousands of rows.

1. **Ages 6 to 8, no screen.** Count every car that passes a window for five minutes, writing a tally mark each time. Then count how many different cars it was. Why are the numbers different?
2. **From about 9, Python.** Run the first version, then count how many messages said "moored" and how many different ships ever said "moored".
3. **Teenagers.** Find the two ships that reported two different types during the day. Which type does the dictionary keep, and how would you decide which is right?
4. **Adults.** Work out, for each hour of the day, how many different ships were heard. Which hour was the quietest, and does that match the message counts?

## Why does counting come before AI?

Because a model trained on the wrong unit learns the wrong thing. That is as true for a ten year old's project as for a large AI system.

### The unit matters

A model that learned from messages instead of ships would think one busy tug is a thousand vessels. Deciding what one row means is the first step of every data and AI project we teach.

### Gaps matter

Thirty-four ships in the file never said their type. A model trained only on ships with a type quietly ignores them. Learners write that limit down before they draw any chart.

### Labels matter

Cargo shipA and Cargo ship look different to a computer and the same to a person. Tidying labels, and saying exactly how, is part of building a fair model.

### AI tools and age rules

Each chat tool sets its own lower age limit in its terms: 13 plus parental consent up to 18 for ChatGPT, 16 in Germany for Gemini, and 18 for Claude.

So nobody under those ages is asked to sign up for anything in our classes; instead they write small programs that learn a rule from data, which teaches more.

### What schools are asked to teach

In 2026 the Kultusministerkonferenz added AI-related competences to the framework that grew out of its 2016 digital strategy, putting AI on the list of things schools should address.

Our classes work alongside school and never replace any subject. Nothing we teach is graded or counts towards school reports.

## Do schools in Bremerhaven teach Informatik?

Not yet as a subject for everyone. Bremerhaven belongs to the Land Bremen, which plans to change that from the 2027/28 school year.

**Informatik in the Land Bremen, from the Informatik-Monitor 2026/27**

| Question | What the Monitor records |
|---|---|
| Compulsory for all pupils today? | No; Bremen is one of six Länder without it |
| Sek I at Oberschule and Gymnasium | No curricular offers with an Informatik focus |
| Planned change | Compulsory Informatik at all schools from 2027/28, two to four weekly hours in total |
| Oberstufe | About one pupil in twelve takes Informatik |

Source: Gesellschaft für Informatik, Informatik-Monitor 2026/27, Bremen page and national overview, read on 2 November 2026. Its words on the plan: "Zum Schuljahr 2027/28 wird Bremen Informatik als Pflichtfach an allen Schulen im Gesamtumfang von zwei bis vier Wochenstunden einführen."

For a Bremerhaven family this is a year of transition. Pupils in Sekundarstufe I today have no curricular Informatik at Oberschule or Gymnasium, according to the Monitor, while those starting in 2027/28 will meet a compulsory subject. Children who begin coding now arrive ready for it; teenagers who would otherwise miss it can learn the same ideas in a weekly class. We teach alongside school and promise no grades.

## When are live classes in Bremerhaven time?

A Bremerhaven afternoon or early evening is evening in India, where the mentors teach. School holidays need not stop classes.

**Bremerhaven times as examples, with India's time alongside**

| Bremerhaven | India until 28 March 2027 | India after 28 March 2027 |
|---|---|---|
| 15:40 | 20:10 | 19:10 |
| 17:50 | 22:20 | 21:20 |
| Saturday 10:15 | 14:45 | 13:45 |
| Sunday 12:00 | 16:30 | 15:30 |

German clock time (Einheitenzeitgesetz) is UTC+1 from late October and UTC+2 from late March; the 2026 change back came on 25 October and the 2027 change forward is on 28 March. With India on UTC+5:30 all year, the difference is four and a half hours now and three and a half in summer. The rows illustrate, they do not fix a batch.

**Bremerhaven school breaks in 2026/27**

| Break | Starts | Ends |
|---|---|---|
| Autumn | Mon 12 Oct 2026 | Sat 24 Oct 2026 |
| Christmas | Wed 23 Dec 2026 | Sat 9 Jan 2027 |
| Winter | Mon 1 Feb 2027 | Tue 2 Feb 2027 |
| Easter | Mon 22 Mar 2027 | Sat 3 Apr 2027 |
| Summer | Thu 8 Jul 2027 | Wed 18 Aug 2027 |

Dates from the KMK holiday table for 2026/2027 (as of 9 October 2025), Bremen line, valid for Bremerhaven too; the line also has two single free days in May 2027, the 7th and the 18th.

## What are the steps from a first program to an AI project?

Our stages, the same for every age. Children take years, adults take months.

**Stages in coding and AI (ours)**

| Stage | Children, roughly | Teens and adults, roughly |
|---|---|---|
| Precise instructions | Age 6 to 8 | Week 1 |
| Loops and decisions | Age 8 to 10 | Weeks 2 to 4 |
| Counting what is real (sets) | Age 10 to 12 | Month 2 |
| Joining two files | Age 11 to 12 | Month 2 to 3 |
| A first model, tested fairly | Teenagers | Months 3 to 5 |
| Explaining limits in writing | Teenagers | From month 4 |

### For learners

Before counting, ask what one row stands for. A message? A ship? A day?
When two files are joined, count what did not match. Those rows are part of the story.

### For parents

Ask your child what the difference between 172,306 and 170 is. The answer shows they understand data.
Monthly notes report what was built and understood.

## Nine more courses for Bremerhaven learners

By age band. Live lessons in English, each with a regular mentor.

### Children

6 to 12

- [Coding for Kids](/courses/kids-coding-blocks-masterclass): From first blocks to apps.
- [Python and AI for kids](/courses/python-ai-kids-masterclass): Typed Python from about 9.
- [Minecraft coding](/courses/minecraft-coding-for-kids-course): Coding in a world they know.

### Teenagers

13 to 18

- [Python for teens](/courses/python-complete-masterclass-teens): The whole language, with projects.
- [Informatik Companion](/courses/informatik-companion-course-klasse-5-10): Ready for the new Bremen subject.
- [SQL for teens](/courses/mysql-mastery-for-teens): Distinct counts and joins in a database.

### Adults

For work

- [Python from zero](/courses/python-programming-masterclass-zero-to-advanced-college): A full course for beginners.
- [Automation and applied AI](/courses/python-ai-automation-masterclass-college): Python that does the routine work.
- [SQL databases](/courses/mysql-database-complete-masterclass-college): Structured data, queried properly.

## How are live coding and AI lessons arranged for Bremerhaven?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Afternoons** Pupils after school.
- **Early evenings** Adults after work.
- **Weekends** Saturday or Sunday, any age.

- **A regular mentor** The same mentor every week.
- **Real time** Every lesson is live.
- **Real data** German open data from early on.
- **Age bands** Children, teens and adults apart.
- **Limits written down** Every project names what it cannot know.
- **Group or private** 15 to 20, or one to one.

## What do the classes cost in Bremerhaven?

Each month's fee covers eight live classes. Amounts shown here are in euro, derived from the European Central Bank reference rate; payment is collected in US dollars and your bank turns it into euro, so the booked amount can vary slightly.

- Free first class: Free. A free first class. A small problem and a first program. No card details.
- Group batch: €90 (charged in US dollars) a month. 15 to 20 learners of similar age. A regular mentor. Two live classes a week. Monthly, cancel any time.
- One to one: €134 (charged in US dollars) a month. Private lessons. Your pace and projects. Times arranged with you.

## Coding and AI classes in Bremerhaven: common questions

### Are the classes in German?

No. Every class is live and in English only, with mentors in India who adapt to the learner's pace and accent. We do not teach in German.

### Which ages do you teach?

Six upwards, with no top limit. Primary pupils, teenagers and adults each learn in their own groups, from Scratch at the start to data, AI and work automation later.

### Is Informatik compulsory in Bremerhaven schools?

Not yet. The Gesellschaft für Informatik counts Bremen among six Länder without Informatik that is compulsory for all, and reports that the Land Bremen will introduce it at all schools from 2027/28, with two to four weekly hours in total.

### Can my child use ChatGPT in your classes?

We do not use it with children. The tool itself is closed to under-13s and needs parental consent until 18; in class, younger learners program the ideas behind AI themselves instead.

### When are classes in Bremerhaven time?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Bremerhaven afternoons are evenings in India.

### What is the Bremerhaven ship project?

A Python project we wrote on one day of AIS records from the BSH receiver at its Bremerhaven measuring station. The file holds 172,306 position messages but only 170 different ships, and learners discover why counting rows is not counting ships.

### Is the ship data free to use?

Yes. The BSH publishes it under the Datenlizenz Deutschland Namensnennung 2.0, which allows reuse with the source named. We show no ship names, numbers or positions on the page.

### Can adults with no programming background join?

Absolutely. Adult beginners write their very first program in lesson one and reach data work and AI services step by step.

### How large are the classes?

A group is fifteen to twenty people close in age; otherwise you book private lessons with one mentor.

### How are fees paid?

By the month. You see euro on this page, worked out from the ECB reference rate, and the card charge is made in US dollars, which your bank exchanges. Nothing is charged for the trial class.

## Related pages

- [Coding classes in Germany](/coding-classes-in-germany): The Germany overview.
- [Coding classes in the Land Bremen](/coding-classes-in-land-bremen): Bremen and Bremerhaven together.
- [AI and machine learning in Germany](/ai-and-machine-learning-classes-in-germany): A model built on German data.
- [AI tools age guide](/ai-tools-age-guide): Every tool's minimum age.
- [Student labs](/student-labs): Our students' projects.
- [How we teach](/how-we-teach): Our live classes explained.

## Contact

Book the free first class at [https://learn.modernagecoders.com/coding-and-ai-classes-in-bremerhaven-germany](https://learn.modernagecoders.com/coding-and-ai-classes-in-bremerhaven-germany#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
