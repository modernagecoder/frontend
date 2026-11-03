---
title: "Coding and AI Classes in Magdeburg: Live Online, in English"
description: "Coding and AI classes in Magdeburg for children, teens and adults, live online in English: Informatik in Saxony-Anhalt, and a frost forecast on city weather data."
canonical: https://learn.modernagecoders.com/coding-and-ai-classes-in-magdeburg-germany
source: src/pages/coding-and-ai-classes-in-magdeburg-germany.html
---
> Modern Age Coders teaches coding and AI to Magdeburg learners of every age in live online classes held in English. Children begin with Scratch and Python; teenagers learn Python, data and machine learning; adults learn to build and judge AI models for work. A regular mentor matches each learner's pace and accent, and you choose a group of 15 to 20 or one-to-one lessons, at times from mid afternoon to the weekend.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / Coding and AI in Magdeburg

Magdeburg · Coding and AI · Children, teens, adults

# Coding and AI classes in Magdeburg

Here is a question a Magdeburg gardener, cyclist or parent asks every autumn evening: will it freeze tonight? It is also a perfect first machine-learning problem, because the answer is a simple yes or no and the city's weather station has written down the result every day for decades. On this page you will see how we use it to teach AI honestly, what Informatik looks like at schools in Sachsen-Anhalt, and how our live classes in English work for children, teenagers and adults.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Learners: Children from 8, teens, adults; Core: Python, data and machine learning; Lessons: Live on video, two a week; Size: 15 to 20 learners, or one to one; Language: English, mentors in India; Trial: Free first class. Rated 4.9 across 547 Google reviews.

## Which AI course is right for which learner in Magdeburg?

A course without code for teenagers who want to see machine learning first, a Python route for teenagers who want to build it, and a full course for adults.

- [Visual Machine Learning for Teens](/courses/orange-data-mining-visual-machine-learning-course-for-teens): Machine learning with drag-and-drop blocks before any code, so teenagers grasp training, testing and errors first. A gentle bridge to Python.
- [Machine learning in Python, ages 13 to 18](/courses/ai-ml-masterclass-teens): Python from the ground up, then real datasets and models, tested the honest way. Projects like the frost forecast below.
- [Grown-up route: AI and ML in depth](/courses/ai-ml-masterclass-complete-college): For adults and students. Classic machine learning, neural networks and where generative AI fits, with code you write yourself.

## Can a computer learn to warn Magdeburg of frost?

The Deutscher Wetterdienst publishes daily records from its Magdeburg station, number 3126, free to reuse with attribution (CC BY 4.0). Learners from about 14 upward take roughly twenty years of them to build a frost warning, and then learn the hardest lesson in AI: how to tell whether it is any good.

### The data

The station sits 79 metres above sea level at the same spot since 1946. From its daily file we keep three columns from 6 April 2006 to 31 December 2025: the day's mean temperature, the mean cloud cover in eighths of the sky, and the lowest temperature, 7,210 days in all.

The DWD marks a missing value as -999, and our first program skips any day with one.

### The task

From today's mean temperature, and later today's cloud, guess whether tomorrow's lowest temperature will be below 0 °C. Learn the rule from the years before 2020, then test it on 2020 to 2025, years it has never seen.

Every guess is either a hit (frost warned, frost came), a miss (no warning, frost came) or a false alarm (warning, no frost). We count all three.

**Version 1: learn one number** (Python)
```python
import csv

days = []
with open("magdeburg_days.csv", encoding="utf-8") as f:
    for row in csv.DictReader(f):
        days.append((row["date"], float(row["mean"]), float(row["cloud"]), float(row["low"])))

pairs = []                       # today's weather, and did tomorrow freeze?
for today, tomorrow in zip(days, days[1:]):
    if -999 not in (today[1], today[2], tomorrow[3]):
        pairs.append((today[0], today[1], today[2], tomorrow[3] < 0))

train = [p for p in pairs if p[0] < "2020"]
test = [p for p in pairs if p[0] >= "2020"]

def score(rule, data):
    hits = sum(1 for p in data if rule(p) and p[3])
    misses = sum(1 for p in data if not rule(p) and p[3])
    alarms = sum(1 for p in data if rule(p) and not p[3])
    return hits, misses, alarms

# learn one number: the mean temperature below which we say "frost tomorrow"
chosen_t, fewest = None, None
for tenth in range(-100, 101):
    t = tenth / 10
    hits, misses, alarms = score(lambda p: p[1] <= t, train)
    if fewest is None or misses + alarms < fewest:
        chosen_t, fewest = t, misses + alarms

print("Training days:", len(train), " test days:", len(test))
print("Learned rule: frost tomorrow if today's mean is at or below", chosen_t, "C")
print("On the test years (hits, misses, false alarms):", score(lambda p: p[1] <= chosen_t, test))
```
It prints: Training days: 4981 test days: 2168, Learned rule: frost tomorrow if today's mean is at or below 2.8 C and On the test years (hits, misses, false alarms): (193, 113, 89).

The computer tried every threshold from -10 to +10 °C in tenths and kept the one with the fewest mistakes on the training years: warn of frost when today's mean is 2.8 °C or colder. On the six test years it warned correctly 193 times, missed 113 frosts and raised 89 false alarms. Is that good? Here is the trap. Frost came on only 306 of the 2,168 test nights, so a lazy rule that always says "no frost" is right 1,862 times, 85.9 percent. Our rule is right 1,966 times, 90.7 percent. Better, but the percentage hides the part that matters: the lazy rule misses every single frost.

**Version 2: let the sky help** (Python)
```python
# clear skies let heat escape at night: allow a warmer day to count when the sky is clearer
choice, fewest = None, None
for tenth in range(-100, 101):
    for step in range(0, 21):
        t, extra = tenth / 10, step / 10
        rule = lambda p: p[1] <= t + extra * (8 - p[2])
        hits, misses, alarms = score(rule, train)
        if fewest is None or misses + alarms < fewest:
            choice, fewest = (t, extra), misses + alarms

t, extra = choice
print("Two-number rule: base", t, "C, plus", extra, "C for every clear eighth of sky")
print("On the test years:", score(lambda p: p[1] <= t + extra * (8 - p[2]), test))
print("Frost nights in the test years:", sum(1 for p in test if p[3]), "of", len(test))
```
It prints: Two-number rule: base 1.2 C, plus 0.8 C for every clear eighth of sky, On the test years: (200, 106, 78) and Frost nights in the test years: 306 of 2168.

**Three frost rules on the test years 2020 to 2025, Magdeburg station 3126 (our calculation)**

| Rule | Frosts warned | Frosts missed | False alarms | Right overall |
|---|---|---|---|---|
| Always say "no frost" | 0 | 306 | 0 | 85.9% |
| One number: mean at or below 2.8 °C | 193 | 113 | 89 | 90.7% |
| Two numbers: temperature and clear sky | 200 | 106 | 78 | 91.5% |

Data: Deutscher Wetterdienst, Climate Data Center, daily climate data, station 3126 Magdeburg, file to 31 December 2025, reused under CC BY 4.0 and fetched on 3 November 2026. "Frost" here means a daily minimum below 0 °C at 2 metres. The rules, the training and test split and all counts are ours, for teaching; they are not a weather service.

Clear nights lose heat to the sky, so the second rule allows a slightly warmer day to count as frost risk when there are few clouds: the base of 1.2 °C rises by 0.8 °C for every clear eighth. It catches seven more frosts and gives eleven fewer false alarms. Small gains, honestly measured, are what real machine learning mostly looks like. Learners then ask the question that matters for any AI system: who pays for a miss, and who pays for a false alarm? A gardener might accept many false alarms to save the plants; a road service with a gritting budget might not.

1. **Run and read.** Run Version 1 and explain in your own words what 113 means.
2. **Change what counts.** Make a miss count twice as much as a false alarm while learning. What threshold does the computer choose now?
3. **Add a feature.** Try yesterday's lowest temperature as a second number instead of cloud. Does it help more?
4. **For younger learners.** On paper, sort ten made-up days into "frost" and "no frost" by temperature alone, then find the day your rule gets wrong.

## Is Informatik compulsory at Magdeburg schools?

It depends on the school type. That is unusual, and it is worth knowing which side of the line your child is on.

**Informatik by school type in Sachsen-Anhalt**

| School type | Grades 5 to 10 | Oberstufe |
|---|---|---|
| Sekundarschule, Gemeinschaftsschule | One compulsory lesson a week in grades 6 to 10, plus an hour brought forward into grade 5 | Where offered |
| Gymnasium | Elective only | Grade 10 Einführungsphase, 11 and 12 Qualifikationsphase (G8) |

Source: Gesellschaft für Informatik, Informatik-Monitor 2026/27, Sachsen-Anhalt page ("für die Jahrgangsstufen 6 bis 10 im Pflichtbereich je eine Wochenstunde Informatikunterricht") and national overview, read 2 November 2026. The monitor counts Sachsen-Anhalt among six Länder "ohne einen für alle verbindlichen Informatikunterricht". Modern Age Coders has no tie to the Land, the KMK or any Magdeburg school.

So a pupil at a Magdeburg Sekundarschule has an hour of Informatik a week from grade 6, while a pupil at a Gymnasium may go through Sekundarstufe I without any, unless they choose it. For a Gymnasium pupil who is curious about programming or AI, outside lessons fill a real gap. For a Sekundarschule pupil, they add depth to the weekly hour. Either way our lessons run next to school, never in place of it; marks and the Abitur are decided by the school course alone.

Teenagers who want a challenge can aim at the Bundeswettbewerb Künstliche Intelligenz. The Tübingen AI Center organises it for Sekundarstufe I and II, accepting solo entries and teams, and every entry needs a written report, code that runs and a brief video. This year's finalists meet in Tübingen on 13 November 2026; dates for the following year appear on the contest's own site. We can coach method and testing; the project must stay the pupil's own, and we have no link with the competition.

## What do children, teenagers and adults each learn?

One idea runs through all three: learn from examples, test on new ones, and look hard at the mistakes. The tools change with age.

### Children, 8 to 12

Scratch first, then typed Python. Around ten, children build a game that sorts animals by size or sounds by loudness and learn that the computer is following a rule they chose. No chatbot accounts; children build the "AI" themselves and see how it works.

### Teenagers, 13 to 18

Python, files and real data, then models like the frost rule. Teenagers learn to split training and test data, to count misses and false alarms, and to write down what a model cannot know. Good preparation for school Informatik and for the BWKI.

### Adults

Practical Python, data handling and machine learning, with time to understand rather than just copy. Adults in Magdeburg bring questions from work or hobbies and leave able to judge an AI claim by asking how it was tested.

**From first program to judged model, by age (our plan)**

| Step | Children | Teens | Adults |
|---|---|---|---|
| Give exact instructions | Scratch, weeks 1 to 6 | Python, weeks 1 to 3 | Python, weeks 1 to 2 |
| Store examples in data | Lists in Scratch | Lists and CSV files | CSV files and tables |
| Learn a rule | A threshold chosen by the child | A threshold found by search | Search, then library models |
| Test fairly | Try it on new examples | Separate test years | Test sets and error measures |
| Judge the cost of mistakes | Which mistake is worse? | Misses versus false alarms | Costs written into the model |

This table is our plan, not an official curriculum. Where a learner starts is decided in the free first class, and under-18s are never asked to open accounts with AI tools that require an adult or a parent's consent.

## Why are the classes in English, and can I keep up?

We teach only in English. Most learners keep up comfortably, because the mentors make it their job that they do.

### No German option

Our mentors, based in India, teach every class in English. We do not offer lessons in German, and we tell you so before you book.

### Pace and accent matched

Mentors adapt how fast they speak and which words they use, check often that the point has landed, and tune in to how each learner speaks within a few lessons.

### The field speaks English

Python, its libraries, AI papers and most tutorials are in English. Taught in English, the lesson and the manuals use the same words.

## What times do the classes run in Magdeburg?

India is ahead of Magdeburg, so a Magdeburg afternoon or early evening is the mentor's evening. These sample slots just show the difference.

**Sample Magdeburg times and India time**

| Magdeburg clock | India clock before 28 March 2027 | India clock after 28 March 2027 |
|---|---|---|
| 16:10 | 20:40 | 19:40 |
| 17:45 | 22:15 | 21:15 |
| Sunday 12:00 | 16:30 | 15:30 |

Germany runs on MEZ (UTC+1) in winter and MESZ (UTC+2) in summer under the Einheitenzeitgesetz; 25 October 2026 ended this year's summer time and 28 March 2027 starts the next. India has no clock change and stays at UTC+5:30, putting it 4 hours 30 minutes ahead of Magdeburg in winter and 3 hours 30 minutes ahead in summer.

In Sachsen-Anhalt the Christmas holidays are 21 December 2026 to 2 January 2027 and the summer holidays 10 July to 20 August 2027, as listed by the KMK. Lessons go on through the holidays, and a family trip just means a pause.

## How do we measure progress in coding and AI?

By what a learner can build and explain. These milestones are ours.

**Coding and AI milestones (ours)**

| Milestone | Reached around | The learner can |
|---|---|---|
| Commands | Age 8 and up | Write steps a computer follows exactly |
| Examples | Age 10 and up | Keep labelled examples in a list or file |
| Rule | Age 12 and up | Find a threshold that separates two groups |
| Test | Age 13 and up | Measure a rule on data it has not seen |
| Judgement | Age 14 and up | Weigh misses against false alarms and explain the choice |

### For parents

Judgement is what the frost project trains. It is the difference between a teenager who can use AI and one who can question it.
Younger children reach Rule through games, not through adult tools.

### For adults

If you already code, Rule takes days. Test and Judgement are where the real learning is.
Bring your own question. The method transfers to almost any yes-or-no decision.

## Nine more courses for Magdeburg learners

Grouped by age, all live and in English, with a regular mentor.

### Children

Ages 8 to 14

- [Python and AI for Kids](/courses/python-ai-kids-masterclass): Typed Python and playful AI projects from 9.
- [Understanding AI, ages 8 to 14](/courses/ai-literacy-for-kids-course): Guessing machines, built and fooled by children.
- [Coding for Kids](/courses/kids-coding-blocks-masterclass): Scratch first, for younger beginners.

### Teenagers

Ages 13 to 18

- [Teen data science](/courses/data-science-course-for-teens-python-data): Public datasets, tidied and plotted with Python.
- [Python for teens](/courses/python-complete-masterclass-teens): A full Python course before machine learning.
- [Abitur Informatik support](/courses/informatik-abitur-course-java-python): Java and Python practice for grades 10 to 12.

### Adults

Students and professionals

- [Data science course](/courses/data-science-complete-masterclass-college): From statistics to deep learning.
- [Generative AI](/courses/complete-generative-ai-masterclass-college): Large language models, retrieval and agents, for adults.
- [Statistics and probability](/courses/statistics-probability-maths-course): The maths for judging any model.

## A normal week of lessons, seen from Magdeburg

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **After school** Afternoon slots for children and teens.
- **After work** Evening slots for adults.
- **Weekends** Saturday and Sunday options.

- **Two lessons a week** About an hour each, live.
- **A mentor who stays** The same person week after week.
- **Your own code** Typed by you, not pasted.
- **Honest testing** Every model meets new data.
- **Safe for children** No adult AI accounts for under-18s.
- **Group or private** 15 to 20 learners, or one.

## What the Magdeburg classes cost

Each month's fee covers eight live lessons. The prices shown are in euro at the European Central Bank reference rate; the payment is actually made in US dollars and converted by your bank, which is why your statement may differ by a small amount.

- Free first class: Free. A free first lesson. A short task at your level. No card details.
- Group batch: €90 (charged in US dollars) a month. 15 to 20 learners of similar age and level. A regular mentor. Two live lessons per week. Monthly, stop any month.
- One to one: €134 (charged in US dollars) a month. Private lessons with one mentor. Projects around your interests. Times arranged with you.

## Coding and AI classes in Magdeburg: questions

### Are the classes in German?

No. We only teach in English, live, and our mentors work from India. They set their speed and vocabulary by the learner and get used to each accent. Since nearly all programming and AI material is written in English, that tends to help.

### Which ages do you teach?

Children from about 8, teenagers and adults. Children start with Scratch and Python, teenagers learn Python, data and machine learning, and adults learn applied AI. Each group is formed by age and level.

### Is Informatik compulsory in Magdeburg schools?

At Sekundarschulen and Gemeinschaftsschulen, yes: one lesson a week in grades 6 to 10, according to the Gesellschaft für Informatik. At Gymnasien in Sachsen-Anhalt it is an elective in Sekundarstufe I.

### Will my child use ChatGPT in class?

No. Children in our classes never need an account with an adult chatbot. Certain AI services are restricted to adults and others ask for parental consent below 18, so instead the children make tiny models of their own and find out how the big ones work.

### When are the classes?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. In Magdeburg, pupils mostly book late afternoons and working adults the early evening or Sunday.

### Do I need to be good at maths for AI?

Not at the start. The frost project uses only comparisons and counting. Teenagers and adults who go further meet statistics and some algebra, introduced when they need it.

### Can you help with a BWKI entry?

Yes. We coach how to plan, code and test an AI project, while the idea and the work remain the pupil's. The contest belongs to the Tübingen AI Center and has no connection with us.

### How big are the groups?

Between 15 and 20 people at a similar age and stage. Prefer private teaching? Take the one-to-one plan: two lessons each week with the mentor on your own.

### What currency are fees charged in?

Payment is in US dollars once a month. We display euro equivalents worked out with the ECB reference rate, and the exact euro debit is set by your own bank's conversion. There is no charge for the first lesson.

### What is the frost model on this page?

An original project of ours on the Deutscher Wetterdienst's Magdeburg station data. Learners teach the computer to warn of frost from today's temperature and cloud, test it on 2020 to 2025, and learn why counting misses and false alarms matters more than a single accuracy figure.

## Related pages

- [Coding classes in Saxony-Anhalt](/coding-classes-in-saxony-anhalt): Our page for the Land.
- [AI and ML in Germany](/ai-and-machine-learning-classes-in-germany): Machine learning for all of Germany.
- [BWKI project help](/bundeswettbewerb-ki-bwki-project-help): Coaching for a contest entry.
- [AI course for kids](/ai-course-for-kids-germany): AI for younger learners.
- [AI tools age guide](/ai-tools-age-guide): Which tools suit which age.
- [How we teach](/how-we-teach): Our live lessons explained.

## Contact

Book the free first class at [https://learn.modernagecoders.com/coding-and-ai-classes-in-magdeburg-germany](https://learn.modernagecoders.com/coding-and-ai-classes-in-magdeburg-germany#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
