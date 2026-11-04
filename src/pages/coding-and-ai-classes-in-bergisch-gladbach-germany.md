---
title: "Coding and AI Classes in Bergisch Gladbach, Live in English"
description: "Coding and AI classes in Bergisch Gladbach for every age: live online in English, how a beginner starts, NRW school facts and a charging station data project."
canonical: https://learn.modernagecoders.com/coding-and-ai-classes-in-bergisch-gladbach-germany
source: src/pages/coding-and-ai-classes-in-bergisch-gladbach-germany.html
---
> In Bergisch Gladbach, Modern Age Coders offers coding and AI lessons in English, taught live online for children from 6, teenagers and adults. Children build with Scratch and then Python; teenagers move to data and machine learning; adults learn Python, data handling and AI tools they can check. The same mentor, working from India, stays with each learner and follows their pace and accent, in a class of fifteen to twenty or one to one.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / [Coding classes in North Rhine-Westphalia](/coding-classes-in-north-rhine-westphalia) / Bergisch Gladbach

Bergisch Gladbach · Coding and AI · From 6 to adult

# Coding and AI classes in Bergisch Gladbach

Most people who want to learn AI really want two things: to make a computer do useful work, and to understand the tools everyone now talks about. Both start in the same place, with writing small programs and checking what they do. This page is for learners of every age in Bergisch Gladbach: how to begin, a first data project on the town's own charging stations, what an NRW school already covers, and when live classes in English fit around school and work.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Ages: Children from 6, teens, adults; Children begin with: Scratch, then Python; Teens and adults begin with: Python and a real dataset; Local times: Afternoons, evenings, weekends; Teachers: Mentors based in India; First class: Free, no card needed. Rated 4.9 across 547 Google reviews.

## Three first courses in Bergisch Gladbach

Chosen by age. Each one leads on to the AI courses once the coding basics are in place.

- [Python and AI for Kids](/courses/python-ai-kids-masterclass): Children of 9 to 12 write Python themselves, make games and pictures, and build tiny programs that learn from labelled examples.
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data): Teenagers load real files, clean them, chart them and train a first model, which is where AI stops being magic.
- [Data and AI for Non-Programmers](/courses/data-and-ai-analytics-for-non-programmers-course): Adults who work with spreadsheets learn to analyse data and use AI help safely, before deciding whether to go on to Python.

## How should a beginner in Bergisch Gladbach start with coding and AI?

With a small program, not a chatbot. The four steps below are the same for a nine year old and a fifty year old; only the examples change.

1. **Make the computer follow exact steps.** A child moves a Scratch cat; an adult prints a line of Python. The point is that the machine does precisely what it is told, in order, and nothing else.
2. **Give it something to repeat and something to decide.** Loops and if statements. This is where most beginners first feel the power of code: one line of instruction, a thousand actions.
3. **Feed it real data.** A file with rows and columns, like the charging stations below. The learner counts, sorts and summarises, and starts asking what each number means.
4. **Let it learn from examples.** Only now do we build a simple model, and only after asking what a lazy guess would score. A model that cannot beat the lazy guess has learned nothing.

Our own teaching order. Children spend months on steps 1 and 2; adults often reach step 3 within weeks. Step 4 is where AI becomes something the learner understands rather than something they only use.

### Why not start with AI tools?

AI tools are useful, and our adult courses use them. But a beginner who asks a chatbot for code cannot tell a correct answer from a confident wrong one. The habit we teach is to know what the answer should look like before asking anybody, human or machine.

There is also the law of the providers themselves: ChatGPT's terms set 13 as the minimum age, with a parent's permission until 18, and Claude's set 18. Our children's courses therefore need no AI account at all.

### Who learns together

Classes are grouped by age and level: children with children, teenagers with teenagers, adults with adults. A family in Bergisch Gladbach can have three learners on three different courses, each with a mentor who knows them.

Everyone writes their own code in class. Watching someone else type is not learning to program, so the mentor's job is to ask the next question, not to do the typing.

Age limits as quoted from the providers' terms in our [AI tools age guide](/ai-tools-age-guide), where each one is dated and linked.

## What is a typical public charging station in Bergisch Gladbach?

The Bundesnetzagentur keeps a public register of charging stations for electric cars and lets anyone reuse it under CC BY 4.0. With the 140 stations listed for Bergisch Gladbach, learners discover that the average they reach for first describes no station that exists.

### The file

The register file is dated 1 September 2026; we downloaded it on 3 November 2026. It covers stations whose operators have finished the Bundesnetzagentur's reporting procedure, so the real number in town may be higher.

We kept the 140 rows whose place is Bergisch Gladbach, all in operation, with 267 charging points between them, and saved the useful columns as bergisch_gladbach_charging.csv. The column we study is the rated power of each station, in kilowatts.

### The question

If a friend asks what a typical charging station in Bergisch Gladbach looks like, what number should you give? Most people compute the mean. The program below does that, and then checks how many stations actually have that power.

The answer to the check is the lesson. A good summary should describe something real.

**Version 1: the mean, then a tally** (Python)
```python
import csv

with open("bergisch_gladbach_charging.csv", encoding="utf-8") as f:
    sites = list(csv.DictReader(f))

power = [float(s["kw"]) for s in sites]
print("Stations:", len(power))
print("Mean power:", round(sum(power) / len(power), 1), "kW")

tally = {}
for kw in power:
    tally[kw] = tally.get(kw, 0) + 1
print("Stations at the mean power:", tally.get(round(sum(power) / len(power), 1), 0))

ranked = sorted(tally.items(), key=lambda pair: pair[1], reverse=True)
for kw, n in ranked[:4]:
    print(f"{kw:g} kW: {n} stations")
```
It prints Stations: 140, Mean power: 48.8 kW, Stations at the mean power: 0, then 44 kW: 55 stations, 22 kW: 49 stations, 11 kW: 14 stations and 150 kW: 6 stations.

Not a single station has 48.8 kilowatts. Charging hardware is sold in standard sizes, so the values bunch at a few numbers: 44 kilowatts is the most common rating, with 55 stations, closely followed by 22 kilowatts with 49. The mean is pulled upwards by a handful of fast chargers rated at 150 kilowatts or more, and lands in a gap where nothing is installed. For data like this, the most common value, called the mode, is the honest answer to "what is typical?". The median, the middle value of the sorted list, is also 44 kilowatts here.

**Version 2: the mode, year by year** (Python)
```python
by_year = {}
for s in sites:
    year = s["since"][-4:]
    by_year.setdefault(year, {})
    kw = float(s["kw"])
    by_year[year][kw] = by_year[year].get(kw, 0) + 1

for year in sorted(by_year):
    counts = by_year[year]
    top = max(counts.values())
    modes = sorted(kw for kw, n in counts.items() if n == top)
    print(year, sum(counts.values()), "stations, most common:", ", ".join(f"{m:g} kW" for m in modes), f"({top})")
```
It prints one line per year, for example 2022 21 stations, most common: 44 kW (10), 2020 2 stations, most common: 22 kW, 350 kW (1) and 2026 41 stations, most common: 22 kW (25).

**Bergisch Gladbach charging stations by year in service, register of 1 September 2026 (our calculation)**

| Year | Stations | Most common rating | Stations at that rating |
|---|---|---|---|
| 2021 | 13 | 22 kW | 6 |
| 2022 | 21 | 44 kW | 10 |
| 2023 | 14 | 44 kW | 6 |
| 2024 | 16 | 11 kW | 6 |
| 2025 | 26 | 44 kW | 15 |
| 2026, to 1 September | 41 | 22 kW | 25 |

Source of the rows: the Bundesnetzagentur charging register (Ladesäulenregister) as published for 1 September 2026, filtered by us to the place name Bergisch Gladbach and fetched on 3 November 2026; reused under CC BY 4.0, credit Bundesnetzagentur.de. Each year before 2021 has between one and three stations. Tallies by us.

Two details reward a careful reader. In 2020 two stations went into service, one at 22 and one at 350 kilowatts, so there are two modes and Version 2 prints both rather than pretending one wins. And 2026 is not over: the 41 stations counted for it stop at 1 September, already more than any earlier full year in the file.

Here is the link to AI. Imagine a model whose job is to predict the rating of the next station from its address. The laziest possible model ignores the address and always answers 44 kilowatts, the mode, and it would be right for 55 of 140 stations, about 39 percent of the time. Any real model has to beat that score before it has learned anything. Machine learners call this a baseline, and it is the first number our teenage and adult learners calculate in every project.

1. **Children, 7 to 9.** Ask everyone in the family their shoe size and make a tally. Which size appears most? Is it the same as the average?
2. **Children, 10 to 12.** Run Version 1 and add one line that prints the median. Why are the median and the mode the same here?
3. **Teenagers and adults.** Work out the baseline score from the tally, then think of one piece of information that might help a model do better.
4. **Going further.** Find the mode of the number of charging points per station. Is the typical station one point or two?

## How much Informatik will a Bergisch Gladbach pupil get at school?

Two compulsory years early on, then whatever a pupil chooses. Bergisch Gladbach follows the North Rhine-Westphalia rules.

**Informatik at NRW schools, as summarised by the Gesellschaft für Informatik for 2026/27**

| Stage | Informatik | What we can add |
|---|---|---|
| Grundschule, grades 1 to 4 | No subject of its own | Scratch and logic puzzles from age 6 |
| Grades 5 and 6 | Compulsory at every general school | Typed Python alongside the school basics |
| Grades 9 and 10 at a G9 Gymnasium | A Wahlpflicht option | Data projects and contest practice |
| Qualifikationsphase | Optional, as a three-hour basic course or a five-hour advanced course | Abitur support in English, with paper tracing |
| Written Abitur | Set centrally, answered without a computer | Practice in reading and writing code by hand |

Source: Gesellschaft für Informatik, Informatik-Monitor 2026/27, North Rhine-Westphalia page, read on 2 November 2026. Written NRW Abitur exams in 2027 run from 13 April to 5 May and each starts at 9:00 (Ministerium für Schule und Bildung NRW). The right-hand column is ours.

Across all sixteen Länder, the monitor puts the share of Oberstufe pupils who keep Informatik into the Qualifikationsphase at roughly one in seven. We work alongside school, never replacing it, and marks and the Abitur are decided only by the school. Pupils who take the subject can follow it in English with our [Informatik Abitur course in Java and Python](/courses/informatik-abitur-course-java-python).

For a project outside school, Jugend forscht accepts entries in mathematics and informatics from grade 4 up to age 21: pupils up to 14 enter Jugend forscht junior, those from 15 to 21 the main contest, and online registration for the coming round closes on 30 November. Our [competitions calendar](/math-and-coding-competitions-germany) lists the others. We are not connected with any of them.

## When are classes in Bergisch Gladbach time?

Pupils mostly come after school, adults after work, and both often at weekends. The mentor's clock in India runs several hours ahead.

**Example Bergisch Gladbach times next to the mentor's clock**

| Bergisch Gladbach | In India this winter | In India from 28 March 2027 |
|---|---|---|
| 15:15 | 19:45 | 18:45 |
| 17:45 | 22:15 | 21:15 |
| Saturday 13:00 | 17:30 | 16:30 |
| Sunday 09:00 | 13:30 | 12:30 |

Germany switched back to Central European Time (UTC+1) on 25 October 2026 and moves to summer time (UTC+2) on 28 March 2027, as the Einheitenzeitgesetz provides; India keeps UTC+5:30 throughout. These four slots only illustrate the gap.

School breaks in NRW for 2026/27, per the Kultusministerkonferenz: two weeks in autumn ending on 31 October 2026, a Christmas break from 23 December 2026 that runs into 6 January 2027, Easter from 22 March 2027 up to 3 April, one free day on 18 May 2027, and six summer weeks from 19 July to 31 August 2027. Classes go on during the holidays for those who want them. Learners join from all parts of Bergisch Gladbach and from nearby Cologne, Leverkusen, Overath, Rösrath, Odenthal and Kürten.

## How progress is measured

Our own scale, the same for every age, so a learner always knows what the next step is.

**Progress stages (ours)**

| Stage | Often reached | Shown by |
|---|---|---|
| Follows exact steps | First weeks | Predicting what a short program will do |
| Repeats and decides | First months | A game or script with loops and conditions |
| Summarises data | Months 3 to 5 | Choosing mean, median or mode and saying why |
| Beats a baseline | Months 5 to 9 | A model that scores better than the lazy guess |
| Builds and explains | Later | A project someone else can run and question |

### For parents

The third stage is the charging station project. A child who asks whether a typical value really exists will read school charts differently.
Reports describe what your child built and could explain.

### For adults

Before you report an average, check whether anything in the data actually has that value.
When someone shows you an AI model's accuracy, ask what the lazy guess would score.

## Nine more courses for Bergisch Gladbach learners

Live, in English, with the same mentor throughout, as a class or as private lessons.

### Children

Ages 6 to 12

- [Scratch for kids](/courses/scratch-programming-complete-course): Complete beginners finish with their own games.
- [Hackathon for kids](/courses/hackathon-prep-for-kids-coding-innovation-ai-projects-course): A project built to a deadline, 8 to 12.
- [Maths through coding](/courses/maths-through-coding): Averages, patterns and puzzles in Python.

### Teenagers

Ages 13 to 18

- [Machine learning for teens](/courses/ai-ml-masterclass-teens): Models that have to beat a baseline.
- [AI tools for teens](/courses/teens-ai-tools-mastery-course): Using AI well from 13, with checks.
- [Informatik companion](/courses/informatik-companion-course-klasse-5-10): School Informatik in English, Klasse 5 to 10.

### Adults

Ages 18 and up

- [Python automation and AI](/courses/python-ai-automation-masterclass-college): Let scripts do the repetitive work.
- [Statistics and probability](/courses/statistics-probability-maths-course): Mean, median, mode and much more.
- [Generative AI](/courses/complete-generative-ai-masterclass-college): Language models, retrieval and agents.

## How live classes run for Bergisch Gladbach learners

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **School days** Afternoon classes for pupils.
- **Work days** Evening classes for adults.
- **Private plan** Your own slot, any day, agreed with the mentor.

- **Code from lesson one** No watching; the learner types.
- **Baseline habit** Every model meets the lazy guess first.
- **English at your pace** Explained again, more simply, when needed.
- **One mentor** The same person for the whole course.
- **Ages kept apart** Children, teens and adults learn separately.
- **Two formats** A class of fifteen to twenty, or private.

## Fees in Bergisch Gladbach

Each month's fee includes eight live classes. On this page it is shown in euro, worked out at the European Central Bank reference rate; the actual payment is made in US dollars and converted by your bank, so the euro amount it books may vary a little.

- Free first class: Free. A free first class. A starter task for the learner's age. No card required.
- Group batch: €90 (charged in US dollars) a month. Fifteen to twenty learners at a similar level. The same mentor every week. Two classes each week. Monthly, no long contract.
- One to one: €134 (charged in US dollars) a month. One learner, one mentor. Projects you pick. Times arranged together.

## Coding and AI classes in Bergisch Gladbach: common questions

### Are the classes in German?

No. All teaching is in English and live. Mentors follow the learner's pace and accent and explain again in simpler words when needed. The code itself is written in English keywords in any case.

### Should I learn AI or coding first?

Coding first, for a short while. A few weeks of small programs teach you to check what a computer gives back, which is exactly the skill you need to use AI tools well and to build models of your own.

### What age can my child start?

From 6 with Scratch blocks. Most children move to typed Python at about 9 and to data projects such as the charging station exercise from about 10.

### Does NRW teach coding at school?

Informatik is compulsory in grades 5 and 6 at every general NRW school, according to the Gesellschaft für Informatik. From grade 7 the subject is a choice, and in the final two school years only around one pupil in seven in Germany still takes it.

### Can my teenager use ChatGPT in class?

OpenAI's terms allow ChatGPT from 13, with a parent's consent until 18, and we keep to that. Claude is for adults only under Anthropic's terms, so it appears only in adult courses.

### When are classes in Bergisch Gladbach time?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Pupils usually come after school and adults in the early evening.

### Where is the mentor?

In India, teaching live online. A 16:00 class in Bergisch Gladbach is 20:30 for the mentor this winter; once German clocks go forward on 28 March 2027 the difference shrinks to three and a half hours.

### How do I pay, and in which currency?

Monthly, by card or bank. The page shows euro calculated from the European Central Bank reference rate, the payment itself is in US dollars, and your bank converts it, so the booked amount can differ a little.

### What is the mode, and why does it matter for AI?

The mode is the most common value. In the charging data it is 44 kilowatts, while the mean of 48.8 matches no station. A model that always predicts the mode is the simplest baseline, and every real model must beat it.

### Can a whole family learn?

Yes, in separate classes by age, often with first classes booked on the same day.

## Related pages

- [Coding classes in Germany](/coding-classes-in-germany): Our national overview and city list.
- [Coding classes in North Rhine-Westphalia](/coding-classes-in-north-rhine-westphalia): Informatik and holidays across the Land.
- [AI course for school students](/ai-course-for-school-students-germany): AI for pupils, explained for parents.
- [Coding classes by age](/coding-classes-by-age-germany): Which course fits which age.
- [Coding for kids in Cologne](/coding-classes-for-kids-cologne): Our page for the city next door.
- [How we teach](/how-we-teach): Inside one of our live classes.

## More pages for this Land

Part of the guide: [Coding classes in North Rhine-Westphalia](/coding-classes-in-north-rhine-westphalia)

### Cities and pages in North Rhine-Westphalia

- [Coding and AI classes in Bielefeld](/coding-and-ai-classes-in-bielefeld-germany)
- [Coding and AI classes in Duisburg](/coding-and-ai-classes-in-duisburg-germany)
- [Coding and AI classes in Gütersloh](/coding-and-ai-classes-in-guetersloh-germany)
- [Coding and AI classes in Münster](/coding-and-ai-classes-in-muenster-germany)
- [Coding and AI classes in Neuss](/coding-and-ai-classes-in-neuss-germany)
- [Coding and AI classes in Recklinghausen](/coding-and-ai-classes-in-recklinghausen-germany)
- [Coding classes for kids in Bonn](/coding-classes-for-kids-bonn)
- [Coding classes for kids in Cologne](/coding-classes-for-kids-cologne)
- [Coding classes for kids in Dortmund](/coding-classes-for-kids-dortmund)
- [Coding classes for kids in Düsseldorf](/coding-classes-for-kids-dusseldorf)
- [Coding classes for kids in Essen](/coding-classes-for-kids-essen)
- [Coding classes for kids in Aachen](/coding-classes-for-kids-in-aachen-germany)
- [Coding classes for kids in Krefeld](/coding-classes-for-kids-in-krefeld-germany)
- [Coding classes for kids in Leverkusen](/coding-classes-for-kids-in-leverkusen-germany)
- [Coding classes for kids in Moers](/coding-classes-for-kids-in-moers-germany)
- [Coding classes for kids in Solingen](/coding-classes-for-kids-in-solingen-germany)
- [Coding classes for kids in Wuppertal](/coding-classes-for-kids-in-wuppertal-germany)
- [Coding for international school students in Düsseldorf](/coding-for-international-school-students-dusseldorf)
- [Informatik-Abitur NRW (Unterricht auf Englisch)](/informatik-abitur-nrw)
- [Maths tutor in Cologne, in English](/math-tutor-cologne-in-english)
- [Online Python classes in Bochum](/online-python-classes-bochum-germany)
- [Online Python classes in Bottrop](/online-python-classes-bottrop-germany)
- [Online Python classes in Hagen](/online-python-classes-hagen-germany)
- [Online Python classes in Hamm](/online-python-classes-hamm-germany)
- [Online Python classes in Herne](/online-python-classes-herne-germany)
- [Online Python classes in Mönchengladbach](/online-python-classes-moenchengladbach-germany)
- [Online Python classes in Mülheim an der Ruhr](/online-python-classes-muelheim-an-der-ruhr-germany)
- [Online Python classes in Oberhausen](/online-python-classes-oberhausen-germany)
- [Online Python classes in Remscheid](/online-python-classes-remscheid-germany)
- [Online Python classes in Siegen](/online-python-classes-siegen-germany)
- [Programmieren lernen für Kinder in Düsseldorf (auf Englisch)](/programmieren-lernen-kinder-duesseldorf)
- [Programmieren lernen für Kinder in Köln (auf Englisch)](/programmieren-lernen-kinder-koeln)

More guides: [Coding classes in Lower Saxony](/coding-classes-in-lower-saxony), [Coding classes in Land Bremen](/coding-classes-in-land-bremen), [Coding classes in Hesse](/coding-classes-in-hesse), [Coding classes in Bavaria](/coding-classes-in-bavaria), [Coding classes in Saxony-Anhalt](/coding-classes-in-saxony-anhalt), [Coding classes in Schleswig-Holstein](/coding-classes-in-schleswig-holstein), [Coding classes in Baden-Württemberg](/coding-classes-in-baden-wuerttemberg), [Coding classes in Saarland](/coding-classes-in-saarland), [Coding classes in Rhineland-Palatinate](/coding-classes-in-rhineland-palatinate), [Coding and maths in Berlin](/coding-and-maths-classes-in-berlin-germany), [Coding and maths in Hamburg](/coding-and-maths-classes-in-hamburg-germany), [Coding classes in Saxony](/coding-classes-in-saxony), [Coding classes in Thuringia](/coding-classes-in-thuringia), [Coding classes in Brandenburg](/coding-classes-in-brandenburg), [Coding classes in Mecklenburg-Vorpommern](/coding-classes-in-mecklenburg-vorpommern)

## Contact

Book the free first class at [https://learn.modernagecoders.com/coding-and-ai-classes-in-bergisch-gladbach-germany](https://learn.modernagecoders.com/coding-and-ai-classes-in-bergisch-gladbach-germany#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
