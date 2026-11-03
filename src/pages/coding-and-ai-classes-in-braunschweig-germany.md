---
title: "Coding and AI Classes in Braunschweig: Live, in English"
description: "Coding and AI classes in Braunschweig for children, teens and adults, live online in English: what AI is, Informatik in Lower Saxony, and a city footfall model."
canonical: https://learn.modernagecoders.com/coding-and-ai-classes-in-braunschweig-germany
source: src/pages/coding-and-ai-classes-in-braunschweig-germany.html
---
> Modern Age Coders offers coding and AI classes for Braunschweig learners of every age, taught live online in English. Children start with Scratch and typed Python; teenagers learn Python and build machine-learning models from real data; adults learn applied Python and AI for work. Each learner has a regular mentor who matches their pace and accent, in a group of 15 to 20 or one to one, with times that suit afternoons, evenings or weekends.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / Coding and AI in Braunschweig

Braunschweig · Coding and AI · Every age

# Coding and AI classes in Braunschweig

Machine learning sounds mysterious until you build a small model yourself and watch it get things wrong. That is how we teach AI to learners in Braunschweig, whether they are nine, sixteen or fifty: code first, then a model, then a careful look at its mistakes. Below you will find what each age group does, how Informatik is organised at Lower Saxony's schools, and a project on the city's own pedestrian counts in which the worst predictions lead to a surprising discovery.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Ages: 8 to adult, grouped by age; Core skills: Python, data, machine learning; Format: Live video lessons; Group size: 15 to 20, or one to one; Teaching: English, by mentors in India; First class: Free of charge. Rated 4.9 across 547 Google reviews.

## Which coding and AI course fits which age in Braunschweig?

Three starting points: one for children, one for teenagers, one for adults. Each ends with a model the learner built and can explain.

- [Python and AI for Kids](/courses/python-ai-kids-masterclass): For children from about 9. Typed Python, turtle drawings and games, then playful projects where the computer learns a simple pattern from examples.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens): For teenagers who want to understand models, not just use apps. Python, data cleaning, training and testing, with projects like the footfall model below.
- [AI and ML Masterclass for adults](/courses/ai-ml-masterclass-complete-college): For adults and university students. Python, classic machine learning, neural networks and how today's generative AI fits in, taught at working pace.

## What does a coding and AI class look like at 9, 15 and 40?

The same ideas, three very different classrooms. All three are live, small enough to ask questions in, and taught in English.

**Coding and AI by age group (our course plan)**

| Learner | Starts with | First AI idea | A project they finish |
|---|---|---|---|
| Child, about 8 to 12 | Scratch, then typed Python | A program that sorts examples into two groups | A guessing game that learns from its mistakes |
| Teenager, 13 to 18 | Python, lists, files | Average of past days as a prediction | A footfall forecast, tested on a year it never saw |
| Adult | Python for work data | Training and testing, error measures | A model for a real work or hobby dataset, with its limits written down |

Our own course plan; mentors place each learner after the free first class. We teach under-18s with tools suitable for their age and do not ask children to open accounts with chatbots that require adult consent.

### Children

Short lessons, lots of building. A child learns that a computer only does what it is told, then that it can be told to look for a pattern. The word "algorithm" arrives after the idea, not before.

### Teenagers

Real Python and real data. Teenagers in Braunschweig can use what they learn in Informatik at school in grades 9 and 10 and, later, in a BWKI project. They learn to ask how a model could be fooled.

### Adults

Clear explanations without hype. Adults learn what machine learning can and cannot do for their work, write the code themselves and learn to judge a model by its errors rather than by its demo.

## What does "AI" mean in a class, as opposed to on the news?

In our lessons it means something small and checkable: a program that learns a rule from past examples and then makes a guess about new ones.

### Learn from the past

Every model in our courses starts the same way. Take examples where you know the answer, find a pattern, and store it. The simplest pattern is an average: on a typical Saturday, this many people walked past.

That is already machine learning in miniature. A neural network is the same idea with millions of stored numbers instead of seven.

### Test on the future

The second step is the one people skip. Hide some examples from the model, let it guess them, and measure how far off it was. Only that number tells you whether the model is any good.

The third step is the one we care about most: look at the largest mistakes one by one. They tell you what the model does not know, and sometimes what the data does not know either.

This is also why we teach thinking rather than copying. A learner who has built and broken a small model of their own can read a confident chatbot answer and ask what it was trained on, what it was tested on and where it would fail. That habit is worth more than any single tool, and it stays useful when the tools change.

## Can a computer predict how many people walk down Hutfiltern?

Stadt Braunschweig publishes daily pedestrian counts from the city centre as open data under CC BY 4.0. Our teenage and adult learners build the simplest honest model on them, and then interrogate its worst days.

### The data

The file holds daily counts from 19 September 2016 to 31 December 2022 for the measuring points Sack, Schuhstraße, Poststraße, Hutfiltern, Damm and Langer Hof, plus Neue Straße from April 2019 and Friedrich-Wilhelm-Straße from July 2021. The last column even carries a short weather note.

We use Hutfiltern, by the Burg Passage, which has a count on most days of the whole period, and we skip days recorded as zero or left blank.

### The model

Learn one number for each weekday from 2017, 2018 and 2019: the average footfall on Mondays, on Tuesdays, and so on. Then predict every day of 2022 with nothing but its weekday, and measure the miss.

It is a deliberately plain model. The point is not to win a competition but to see clearly where a plain model goes wrong.

**Version 1: a weekday model, tested on 2022** (Python)
```python
import csv
from datetime import date

counts = {}
with open("braunschweig_footfall.csv", encoding="latin-1") as f:
    rows = csv.reader(f, delimiter=";")
    next(rows)
    for row in rows:
        if row[0].count(".") == 2 and row[13] not in ("", "0"):
            d, m, y = row[0].split(".")
            counts[date(int(y), int(m), int(d))] = int(row[13])   # column 13: Hutfiltern

# learn: the average footfall for each weekday, from 2017 to 2019
sums, days = [0] * 7, [0] * 7
for day, n in counts.items():
    if 2017 <= day.year <= 2019:
        sums[day.weekday()] += n
        days[day.weekday()] += 1
typical = [round(sums[i] / days[i]) for i in range(7)]
print("Typical Monday to Sunday:", typical)

test = {day: n for day, n in counts.items() if day.year == 2022}
errors = {day: n - typical[day.weekday()] for day, n in test.items()}
average_miss = sum(abs(e) for e in errors.values()) / len(errors)
print("Days tested in 2022:", len(test), " average miss:", round(average_miss))
```
It prints: Typical Monday to Sunday: [17867, 17826, 18412, 18578, 21861, 32978, 7947] and Days tested in 2022: 349 average miss: 5696.

The pattern it learned is sensible: weekdays near 18,000, Friday higher, Saturday the busiest by far at almost 33,000, Sunday under 8,000 because shops are shut. On 2022 the model misses by about 5,700 people a day on average. That sounds poor until you list the worst days: Thursday 10 November 2022 with 79,097 counted against 18,578 expected, then 18 and 19 July, 27 July, 2 August and 25 August, each with more than 50,000.

A beginner says "there must have been events". A careful learner asks a better question: if 79,097 people really walked down Hutfiltern, did they also walk down the next street? People do not teleport. The second program checks the neighbouring counter on Schuhstraße on the same days.

**Version 2: ask the neighbour** (Python)
```python
# a crowd walks past more than one counter: check the neighbour, Schuhstraße (column 25)
schuh = {}
with open("braunschweig_footfall.csv", encoding="latin-1") as f:
    rows = csv.reader(f, delimiter=";")
    next(rows)
    for row in rows:
        if row[0].count(".") == 2 and row[25] not in ("", "0"):
            d, m, y = row[0].split(".")
            schuh[date(int(y), int(m), int(d))] = int(row[25])

normal = [counts[d] / schuh[d] for d in counts if d in schuh and 2017 <= d.year <= 2019]
print("Usual ratio Hutfiltern / Schuhstraße:", round(sum(normal) / len(normal), 2))
worst = sorted(errors, key=lambda day: abs(errors[day]), reverse=True)[:4]
for day in worst:
    print(day, "Hutfiltern", test[day], "Schuhstraße", schuh[day], "ratio", round(test[day] / schuh[day], 2))
```
It prints: Usual ratio Hutfiltern / Schuhstraße: 1.12, then 2022-11-10 Hutfiltern 79097 Schuhstraße 18864 ratio 4.19, 2022-07-19 Hutfiltern 62926 Schuhstraße 15236 ratio 4.13, 2022-08-25 Hutfiltern 63272 Schuhstraße 19432 ratio 3.26 and 2022-07-18 Hutfiltern 56940 Schuhstraße 22103 ratio 2.58.

**The four largest misses of 2022 next to the neighbouring counter (our calculation)**

| Day | Hutfiltern | Schuhstraße | Ratio (usually 1.12) |
|---|---|---|---|
| Thu 10 November 2022 | 79,097 | 18,864 | 4.19 |
| Tue 19 July 2022 | 62,926 | 15,236 | 4.13 |
| Thu 25 August 2022 | 63,272 | 19,432 | 3.26 |
| Mon 18 July 2022 | 56,940 | 22,103 | 2.58 |

Data: Stadt Braunschweig, Passantenfrequenzen Innenstadt, opendata.braunschweig.de, licence CC BY 4.0, downloaded 3 November 2026. The weekday model, the ratios and the averages are our own calculations; days with a zero or blank count are left out. The file does not say why these days are high, so neither do we.

On an ordinary day Hutfiltern counts about 1.12 people for every one on Schuhstraße. On the worst days it counts three or four times as many, while Schuhstraße looks completely normal. A crowd would show up on both. So the model's biggest "errors" are more likely a problem at one counter than a crowd the model failed to foresee, and a learner who removed them would get a fairer picture of how good the model is. Whether a sensor was disturbed, the data do not tell us, and we say so.

1. **Warm up.** Run Version 1. Which weekday is busiest, and by how much compared with Monday?
2. **Investigate.** Run Version 2 for the top ten misses, not four. How many still look like a one-counter problem?
3. **Improve the model.** Learn a separate average for each weekday in each month. Does the average miss on 2022 go down?
4. **Think it through.** Write a short note to the city explaining what you found, what you cannot know, and what extra data would settle it.

## Do Braunschweig schools teach Informatik?

Yes, to every pupil for two years, then by choice. Few carry it into the Oberstufe, which is where outside practice can help.

**Informatik for a pupil in Niedersachsen**

| Stage | Grades | What the Informatik-Monitor 2026/27 records |
|---|---|---|
| Sekundarstufe I | 9 and 10 | Compulsory Informatik at all general school types since 2024/25 |
| Einführungsphase | 11 | First year of the gymnasiale Oberstufe (G9) |
| Qualifikationsphase | 12 and 13 | Abitur courses; in Niedersachsen about one pupil in twelve takes Informatik |

Source: Gesellschaft für Informatik, Informatik-Monitor 2026/27, Niedersachsen page and national overview ("ungefähr jede zwölfte Person"), read 2 November 2026. We are not connected with the Land, the KMK or any school.

So a Braunschweig pupil meets Informatik as a compulsory subject in grades 9 and 10. Before that, between about 8 and 14, coding depends on what the family and the school's clubs offer. After it, only a small share of Oberstufe pupils in Niedersachsen choose the subject. We teach alongside school at every stage, and for Abitur pupils the school course is the one that counts.

For teenagers who want a goal, the Bundeswettbewerb Künstliche Intelligenz (BWKI), run by the Tübingen AI Center, is open to Sekundarstufe I and II pupils, who submit documentation, runnable code and a short video pitch, in German or English. The 2026 final is in Tübingen on 13 November 2026; the next round is announced on bw-ki.de. We help with method and code, the project stays the pupil's own, and we are not connected with the competition.

## Is it a problem that the classes are in English?

For most Braunschweig learners it is the opposite. We teach only in English, and we make it work for every level.

### English only

All classes are taught in English by mentors based in India; there is no German-language version. We would rather say this clearly at the start.

### At your pace

Mentors adapt their speed and vocabulary, check understanding often and get used to each learner's accent. Children are helped gently; adults are not talked down to.

### The language of AI

Python, the libraries and nearly all AI documentation are in English. Learning in English means reading an error message or a research summary without translating it first.

## When do the classes run in Braunschweig time?

Our mentors work from India, which is several hours ahead, so Braunschweig afternoons and evenings fall into their evening. The rows here only show how the clocks line up.

**Three sample slots in Braunschweig with the matching time in India**

| Braunschweig | India, winter (to 28 March 2027) | India, summer (from 28 March 2027) |
|---|---|---|
| 15:45 | 20:15 | 19:15 |
| 17:20 | 21:50 | 20:50 |
| Saturday 12:00 | 16:30 | 15:30 |

The Einheitenzeitgesetz sets German winter time at UTC+1 (MEZ) and summer time at UTC+2 (MESZ). This year the clocks went back on 25 October 2026; they go forward on 28 March 2027. India does not change its clocks (UTC+5:30), so it runs 4.5 hours ahead of Braunschweig in winter and 3.5 hours in summer. Examples only.

Lower Saxony's Christmas holidays run from 23 December 2026 to 9 January 2027, the Easter holidays from 22 March to 3 April 2027 and the summer holidays from 8 July to 18 August 2027, according to the KMK table. Classes do not stop for school holidays; learners who travel just pause.

## How do learners progress from first code to a tested model?

Our milestones, the same for every age; only the speed and the projects differ.

**From first program to honest model (ours)**

| Milestone | Typical age to reach it | The learner can |
|---|---|---|
| 1. Instructions | 8 and up | Write exact steps a computer can follow |
| 2. Data in code | 10 and up | Store examples in a list and loop through them |
| 3. A learned rule | 12 and up | Turn past examples into a prediction, such as an average |
| 4. A fair test | 13 and up | Keep test data apart and measure the error |
| 5. Error analysis | 14 and up | Explain the worst predictions and check them against other evidence |

### For parents

Milestone 5 is the footfall project. It is also the skill that separates someone who uses AI from someone who can judge it.
Children under 13 work up to milestone 3 with games and drawings, not with adult tools.

### For adults

Most adults who code a little already reach milestone 3 in a few weeks. The real work is milestones 4 and 5.
Bring a dataset from your own field if you can. The method is the same, and it sticks better.

## Nine more coding and AI courses for Braunschweig

Grouped by age. Each is taught live in English by a mentor who stays with the learner.

### Children

Ages 7 to 14

- [Coding for Kids](/courses/kids-coding-blocks-masterclass): Scratch games, then apps, a long gentle course.
- [AI literacy for kids](/courses/ai-literacy-for-kids-course): How a machine learns, explained with play.
- [Problem solving for kids](/courses/problem-solving-and-computational-thinking-for-kids): Logic and planning before any typing.

### Teenagers

Ages 13 to 18

- [Data science for teens](/courses/data-science-course-for-teens-python-data): Clean, count and chart real public data.
- [Visual machine learning](/courses/orange-data-mining-visual-machine-learning-course-for-teens): Models built by dragging blocks, then explained.
- [Informatik Abitur in English](/courses/informatik-abitur-course-java-python): For Oberstufe pupils, beside the school course.

### Adults

University and working life

- [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college): From zero to clean, tested Python.
- [Data science course](/courses/data-science-complete-masterclass-college): Python, statistics and models end to end.
- [Python automation and applied AI](/courses/python-ai-automation-masterclass-college): Scripts and AI helpers for everyday work.

## How live coding and AI classes work in Braunschweig

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Afternoon** After school, for children and teens.
- **Evening** After work, for adult learners.
- **Weekend** Saturday or Sunday, for any age.

- **Same mentor** Someone who knows what you built last week.
- **Code you type** No copying finished solutions.
- **Models you test** Every prediction gets checked.
- **Age-appropriate tools** Children never need adult AI accounts.
- **Written feedback** Short notes after milestones.
- **Group or solo** 15 to 20 learners, or one to one.

## Fees for coding and AI classes in Braunschweig

Fees are monthly, for eight live lessons. They appear here in euro, converted at the European Central Bank reference rate, while the payment goes through in US dollars; your bank handles the exchange, so the euro amount it books may differ by a little.

- Free first class: Free. A free first lesson. A short task matched to your age. No payment details.
- Group batch: €90 (charged in US dollars) a month. 15 to 20 learners of similar age and level. A regular mentor. Two lessons per week. Monthly, no long contract.
- One to one: €134 (charged in US dollars) a month. One learner, one mentor. Projects around your goals. Slots that fit your week.

## Coding and AI classes in Braunschweig: questions

### Are the classes in German?

No. We teach in English only, live, with mentors based in India who adapt to each learner's pace and accent. Programming languages and AI documentation are in English, so most learners find this helps rather than hinders.

### What age do you teach?

From about 8 to adult. Children start with Scratch and typed Python, teenagers learn Python and machine learning on real data, and adults learn applied Python and AI. Groups are formed by age and level.

### Do children use ChatGPT or other chatbots in class?

No adult chatbot accounts are needed. Several AI tools set an age limit, and some require a parent's permission under 18, so with children we build small models ourselves and explain how larger ones work. Adults may use AI tools as part of their course.

### Is Informatik compulsory in Braunschweig schools?

Yes, in grades 9 and 10. The Gesellschaft für Informatik records that every general school type in Niedersachsen has taught Informatik as a compulsory subject in those grades since 2024/25. Later it is an Oberstufe choice.

### When are the classes?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Children usually come after school, adults in the evening or at the weekend.

### Do I need maths to learn AI?

Less than you might fear at the start. Averages and differences take you a long way, as the footfall project shows. Teenagers and adults who continue meet more statistics and some algebra, taught when it is needed.

### Can you help with a BWKI project?

Yes, with method, code and testing. The project must remain the pupil's own work. The BWKI is run by the Tübingen AI Center and accepts projects in German or English; we are not connected with it.

### How many learners are in a group?

Between 15 and 20 of a similar age and level. A one-to-one plan is available for anyone who prefers private lessons, with two classes a week at times agreed with the mentor.

### How is the fee charged?

Monthly, in US dollars. This page shows the amount in euro at the European Central Bank reference rate, and your bank converts the dollar payment, so the booked euro figure can vary slightly. The first lesson is free.

### What is the footfall project?

An original project of ours on Stadt Braunschweig's open pedestrian counts. Learners predict each day of 2022 on Hutfiltern from weekday averages of 2017 to 2019, then find that the worst misses are not matched on Schuhstraße, which points to a counter problem rather than crowds.

## Related pages

- [Coding classes in Lower Saxony](/coding-classes-in-lower-saxony): Our page for Niedersachsen.
- [AI and ML in Germany](/ai-and-machine-learning-classes-in-germany): Our national AI page.
- [Informatik Abitur Niedersachsen](/informatik-abitur-niedersachsen): The Abitur subject in this Land.
- [BWKI project help](/bundeswettbewerb-ki-bwki-project-help): Support for the AI competition.
- [AI tools age guide](/ai-tools-age-guide): Age limits of popular AI tools.
- [Think, do not copy](/learn-to-think-not-copy-ai-germany): Why we teach judgement.

## Contact

Book the free first class at [https://learn.modernagecoders.com/coding-and-ai-classes-in-braunschweig-germany](https://learn.modernagecoders.com/coding-and-ai-classes-in-braunschweig-germany#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
