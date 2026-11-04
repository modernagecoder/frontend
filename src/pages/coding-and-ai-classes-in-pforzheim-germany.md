---
title: "Coding and AI Classes in Pforzheim: Live Online, in English"
description: "Coding and AI classes in Pforzheim for kids, teens and adults, live online in English: AI in four steps, BW Informatik, the BWKI, and a Pforzheim theatre forecast."
canonical: https://learn.modernagecoders.com/coding-and-ai-classes-in-pforzheim-germany
source: src/pages/coding-and-ai-classes-in-pforzheim-germany.html
---
> At Modern Age Coders, coding and AI classes in Pforzheim mean live video lessons in English for anyone from about 9 to adult. Everyone codes first, then works with real data and builds models they test honestly, finding where they fail. A regular mentor adapts to each learner's pace and accent, solo or with fifteen to twenty others, at Pforzheim afternoon, evening and weekend times.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / [Baden-Württemberg](/coding-classes-in-baden-wuerttemberg) / Coding and AI in Pforzheim

Pforzheim · Coding and AI · Children to adults

# Coding and AI classes in Pforzheim

Learning AI properly is less about chatbots and more about four plain steps: collect data, build a model, test it on something it has not seen, and find out where it breaks. This page walks through those steps with a real Pforzheim example, twenty-one seasons of audiences at Theater Pforzheim, where one perfectly reasonable model ends up forecasting fewer than zero visitors. It also covers what Baden-Württemberg schools now teach in Informatik, the national AI competition whose final is in Tübingen this month, and how our live English classes work from age 9 to adult.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Learners: From about 9 to adult; Order: Code, then data, then models; Lessons: Live video, twice a week; Size: One to one, or fifteen to twenty; Mentors: Based in India, teaching in English; First step: A free class. Rated 4.9 across 547 Google reviews.

## Which coding and AI course fits a Pforzheim learner?

A child, a teenager and an adult need different first steps into the same subject.

- [Python and AI for Kids](/courses/python-ai-kids-masterclass): For nine to twelve year olds: real Python, then small smart projects that sort, guess and learn from examples.
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data): For teenagers: Python, charts and first models on open data, tested properly, like the theatre forecast below.
- [Artificial Intelligence Course](/courses/artificial-intelligence-complete-masterclass-college): For students and adults: search, logic, agents and machine learning, the ideas underneath today's AI tools.

## What does learning AI actually involve?

Every AI project we teach, from a child's first guessing game to an adult's forecast, follows the same four steps.

1. **Data.** Find real data, read it carefully and write down what each column means and what it does not say. For the theatre project that is three columns: the season, the number of performances and the number of visitors.
2. **Model.** Choose the simplest thing that might work and build it yourself in code. Here that is a straight line, fitted by a formula a teenager can follow line by line.
3. **Test.** Hide some data from the model before it learns, then ask it to predict that hidden part. A model that has only been checked on what it learned from has not been checked at all.
4. **Limits.** Look for where the model breaks and say why. In our classes this is the step that gets the most time.

### For children

Nine to twelve year olds do the four steps with tiny datasets they can see whole: guessing a classmate's favourite fruit from three questions, then counting how often the guess was wrong.

### For teenagers

Teenagers write the fitting formula themselves in Python, split data into training and test sets, and learn to distrust a result that looks too good.

### For adults

Adults go further into machine learning and generative AI, but keep the same habit: every model is tested, and every limit is written down before anyone relies on it.

**AI tools and the ages their own terms allow**

| Tool | Minimum age in its terms |
|---|---|
| ChatGPT | 13, with a parent or guardian's permission under 18 |
| Claude | 18 |

From the tools' terms of use as quoted in our AI tools age guide. We keep to those ages: no chatbot accounts for children, no 18+ tools for anyone under 18. Most of what younger learners do in our AI classes is code they write themselves.

## Can a model forecast the audience at Theater Pforzheim?

The City of Pforzheim publishes yearly theatre figures, from Theater Pforzheim, as open data. Twenty-one seasons are enough to build two forecasting models, test both, and watch each fail in a different way.

### The data

The dataset Aufführungen und Besucher (Theater, Oper, Ballett) is published by the Stadt Pforzheim on GovData under the licence CC BY 4.0, with Theater Pforzheim named as the source. We downloaded it on 3 November 2026. It covers the seasons 2000/2001 to 2020/2021.

For each season we keep the total number of performances and the total number of visitors, in pforzheim_theatre.csv. A season label such as 2016/2017 becomes the number 2016, the year it started.

### The plan

We train on the seasons that start from 2000 to 2016 and hide the last four, 2017 to 2020, for the test. Model 1 draws a straight line through visitors against the year. Model 2 draws a straight line through visitors against the number of performances.

Both use the same small fit function, the classic least-squares line, written out in full so nothing is hidden inside a library.

**Model 1: visitors against the year** (Python)
```python
import csv

seasons = []
with open("pforzheim_theatre.csv", encoding="utf-8") as f:
    for row in csv.DictReader(f):
        start = int(row["season"][:4])
        seasons.append((start, int(row["performances"]), int(row["visitors"])))

train = [s for s in seasons if s[0] <= 2016]
test = [s for s in seasons if s[0] > 2016]

def fit(points):
    n = len(points)
    mx = sum(x for x, _ in points) / n
    my = sum(y for _, y in points) / n
    slope = sum((x - mx) * (y - my) for x, y in points) / sum((x - mx) ** 2 for x, _ in points)
    return slope, my - slope * mx

slope, base = fit([(year, v) for year, _, v in train])
print("Trend: visitors change by", round(slope), "a season")
for year, _, visitors in test:
    guess = slope * year + base
    print(year, "predicted", round(guess), "real", visitors)
```
It prints Trend: visitors change by -1376 a season, then 2017 predicted 96614 real 99241, 2018 predicted 95238 real 94144, 2019 predicted 93862 real 64831 and 2020 predicted 92486 real 1869.

The trend says audiences fell by about 1,376 a season, and for 2017 and 2018 it is within a few thousand. Then it misses badly: it expects 93,862 visitors for the 2019/2020 season and the real figure is 64,831, and for 2020/2021 it expects 92,486 against 1,869. Something changed that the calendar knows nothing about. The file shows what: the theatre gave 184 performances in 2019/2020 and only 16 in 2020/2021, against 245 or more in every training season. It does not say why, so neither do we.

So Model 2 uses the number of performances instead of the year. That is the more sensible input: fewer shows should mean fewer visitors. If the number of performances is known before the season, this model ought to cope better with the unusual years.

**Model 2: visitors against performances** (Python)
```python
slope2, base2 = fit([(p, v) for _, p, v in train])
print("Each performance brings about", round(slope2), "visitors")
print("With no performances the line says:", round(base2))
for year, performances, visitors in test:
    guess = slope2 * performances + base2
    print(year, "predicted", round(guess), "real", visitors)
print("Fewest performances in training:", min(p for _, p, _ in train))
```
It prints Each performance brings about 540 visitors, With no performances the line says: -40396, then 2017 predicted 97310 real 99241, 2018 predicted 94069 real 94144, 2019 predicted 58968 real 64831, 2020 predicted -31756 real 1869 and Fewest performances in training: 245.

Model 2 is much better for 2019/2020, within about 6,000. And then it forecasts minus 31,756 visitors for 2020/2021, which is impossible. The reason is in the last line it prints: the model never saw a season with fewer than 245 performances, so between 245 and 300 a straight line fits well, but stretched down to 16 it runs through zero and keeps going. The line even claims that a season with no performances at all would have minus 40,396 visitors.

**Forecasts for the hidden seasons (our calculation)**

| Season | Performances | Real visitors | Model 1 (year) | Model 2 (performances) |
|---|---|---|---|---|
| 2017/2018 | 255 | 99,241 | 96,614 | 97,310 |
| 2018/2019 | 249 | 94,144 | 95,238 | 94,069 |
| 2019/2020 | 184 | 64,831 | 93,862 | 58,968 |
| 2020/2021 | 16 | 1,869 | 92,486 | -31,756 |

Data: Stadt Pforzheim, Aufführungen und Besucher (Theater, Oper, Ballett), source Theater Pforzheim, licence CC BY 4.0, downloaded 3 November 2026. Training on seasons starting 2000 to 2016; models, forecasts and the table are our own. For comparison, visitors per performance (also ours) were 421 in 2000/2001, 376 in 2016/2017, 352 in 2019/2020 and 117 in 2020/2021.

Neither model is "wrong" inside its comfort zone. Model 1 assumes the future is like the past; Model 2 assumes a season looks like the seasons it has seen. The lesson for anyone learning AI is the same at 12 and at 50: before trusting a prediction, check whether the question lies inside the range the model learned from, and say so next to the answer.

1. **Children, 9 to 12.** On squared paper, plot five made-up points that rise steadily and draw a line through them with a ruler. Extend the line far to the left. Where does it cross zero, and does that make sense?
2. **Teenagers.** Run both models, then train Model 2 on all seasons except 2020/2021. Predict its new answer for 2020/2021 before you run it.
3. **Teenagers, further.** Write a guard that refuses to predict when the number of performances is below the smallest one in the training data, and prints a warning instead.
4. **Adults.** Replace the line with "visitors per performance times performances" (a line through zero). Compare its 2020/2021 forecast with the real 1,869 and explain the gap using the per-performance figures in the source note.

## What do Pforzheim schools teach in Informatik now, and is there an AI contest?

Baden-Württemberg has just made Informatik compulsory from grade 5, and the national AI competition holds its final in Tübingen, also in Baden-Württemberg, on 13 November 2026.

### Informatik und Medienbildung

According to the Gesellschaft für Informatik, from 2025/26 Baden-Württemberg introduced a compulsory subject, Informatik und Medienbildung, across all secondary school types, beginning in grades 5 and 6 and extending upwards. Its 2026/27 monitor lists the Land among the four that now reach the recommended four compulsory hours.

The older profile subject IMP, combining Informatik, Mathematik and Physik, is being phased out; at Gemeinschaftsschulen it can still be offered in grades 8 to 10.

### Bundeswettbewerb Künstliche Intelligenz

Behind the BWKI stands the Tübingen AI Center. Entrants come from Sekundarstufe I or II and work alone or as a team of at most four; every project has to apply machine learning, and the write-up may be German or English. This year's final takes place in Tübingen on Friday 13 November 2026.

We have no connection with the organisers. A Pforzheim teenager who enjoys the theatre project has the right instincts for an entry: real data, a fair test and an honest account of the limits.

**Informatik for a Pforzheim pupil (BW rules)**

| Stage | What the rules say |
|---|---|
| Grundschule, grades 1 to 4 | No Informatik subject |
| Grades 5 and 6 | Compulsory Informatik und Medienbildung, from 2025/26 |
| Later grades | The subject extends upwards year by year |
| Gymnasium Oberstufe | Mostly grade 10 Einführungsphase, grades 11 and 12 Qualifikationsphase |

Sources: Gesellschaft für Informatik, Informatik-Monitor 2026/27, national and Baden-Württemberg pages; Bundeswettbewerb Künstliche Intelligenz, rules and 2026 timeline; read on 2 November 2026. Population: Destatis, 31 December 2024: Pforzheim 134,912, Baden-Württemberg 11,245,898. Learners in Mühlacker, Bretten, Calw and Niefern-Öschelbronn share the same Land rules.

We teach alongside school. The school's Informatik teacher sets the marks; our part is the extra practice, the projects and a mentor who has time for every question. For adults in Pforzheim, school rules do not apply, and the course follows your own goals.

## When are the classes in Pforzheim time?

Pupils usually take a weekday afternoon or Saturday; adults often prefer an evening. A few examples, with the mentor's clock alongside.

**Example Pforzheim slots with Indian time**

| Pforzheim | India in the winter months | India from 28 March 2027 |
|---|---|---|
| Monday 14:15 | 18:45 | 17:45 |
| Thursday 17:45 | 22:15 | 21:15 |
| Saturday 12:15 | 16:45 | 15:45 |

Pforzheim follows German legal time under the Einheitenzeitgesetz: UTC+1 in winter, UTC+2 in summer. Clocks went back on 25 October 2026 and will go forward on 28 March 2027. India keeps UTC+5:30 all year, which puts it four and a half hours ahead in winter and three and a half in summer. Examples only; there are no fixed batch times.

**BW school holidays 2026/27, for pupils (KMK table)**

| Ferien | Dates |
|---|---|
| Herbst | 26 to 31 October 2026 |
| Weihnachten | 23 December 2026 to 9 January 2027 |
| Ostern | 25 March, and 30 March to 3 April 2027 |
| Pfingsten | 18 to 29 May 2027 |
| Sommer | 29 July to 11 September 2027 |

Taken from the KMK overview of holidays for 2026/2027 (dated 9 October 2025), row Baden-Württemberg. Our classes continue through the holidays for anyone who wants them.

## How does a learner move from code to trustworthy AI?

Our five stages, used for every age, to choose a starting point and to report progress honestly.

**From code to a model you can trust (our stages)**

| Stage | The learner can |
|---|---|
| 1. Code | Write and fix short programs with loops and conditions |
| 2. Data | Load a file, clean a label, count and plot |
| 3. Fit | Build a simple model, such as a straight line, from scratch |
| 4. Test | Hide data, predict it and measure the error |
| 5. Limits | Say where a model must not be used, and guard against it in code |

### For parents and adult learners

Stage 5 is the theatre project's last exercise: a program that refuses to answer when the question is outside what it knows.
Progress reports describe what was built and explained, never hours on a screen.

### For learners

A good fit on old data is not a forecast. Test on data the model has not seen.
If a model predicts something impossible, it has left the range it learned from.

## Nine more courses for Pforzheim learners

Live, in English, with a regular mentor, one to one or in a batch.

### Children

Ages 6 to 14

- [AI literacy for kids](/courses/ai-literacy-for-kids-course): How machines learn, with games instead of accounts, 8 to 14.
- [Coding for kids](/courses/kids-coding-blocks-masterclass): Scratch to apps, grouped by age, 6 to 12.
- [Problem solving](/courses/problem-solving-and-computational-thinking-for-kids): Logic and planning, the base of all coding.

### Teenagers

Ages 13 to 17

- [AI and ML for teens](/courses/ai-ml-masterclass-teens): Real models in Python, each one checked on unseen data.
- [AI tools for teens](/courses/teens-ai-tools-mastery-course): Prompting and real projects within each tool's age terms, 13+.
- [Informatik Companion](/courses/informatik-companion-course-klasse-5-10): Support for the new BW subject, in English.

### Adults

Students and professionals

- [AI and ML masterclass](/courses/ai-ml-masterclass-complete-college): A long adult course that ends with neural networks and language models.
- [Statistics and probability](/courses/statistics-probability-maths-course): The maths that tells you when to trust a model.
- [Python automation](/courses/python-ai-automation-masterclass-college): Scripts and applied AI for everyday work.

## What does a week of live classes look like from Pforzheim?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Afternoons** After school in Pforzheim, for pupils.
- **Evenings** For adults after work.
- **Private** A time fixed with your own mentor.

- **Four steps** Data, model, test, limits, in every project.
- **Written by you** Learners build models in their own code.
- **Age-aware** Tools used only within their age terms.
- **Clear English** Steady pace, plain words, adapted to you.
- **Regular mentor** The same person each week.
- **Batch or private** Fifteen to twenty learners, or one.

## Fees for coding and AI in Pforzheim

The monthly fee covers eight live classes. You see it in euro, calculated with the European Central Bank reference rate; the money is collected in US dollars and your bank converts it, so the final figure on your statement may not match to the cent.

- Free first class: Free. A free first class. A small coding task and your goals discussed. No card required.
- Group batch: €90 (charged in US dollars) a month. Fifteen to twenty learners at a similar level. One regular mentor. Two live classes weekly. Monthly, cancel any time.
- One to one: €134 (charged in US dollars) a month. One mentor, one learner. Projects built around your aims. Times that suit you.

## Coding and AI classes in Pforzheim: what people ask us

### Are the classes in German?

No. Every class is live and taught only in English. Mentors adapt their speed and words to the learner, get used to each learner's accent, and explain again more simply when needed.

### What does a beginner actually do in an AI class?

Code first. Then four steps on real data: read the data, build a simple model, test it on data it has not seen, and find its limits. The theatre forecast on this page is a typical project.

### Is my 10 year old old enough for AI?

For the ideas, yes. Children of about 9 to 12 learn how machines learn from examples using small datasets and their own Python code. They do not use chatbot accounts, which have their own minimum ages.

### Do Pforzheim schools teach Informatik?

Yes, from grade 5. Since 2025/26 Baden-Württemberg has a compulsory subject, Informatik und Medienbildung, starting in grades 5 and 6. We teach alongside school; the school sets the marks.

### When are the classes in Pforzheim time?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Pupils often take an afternoon, adults an evening.

### Where do the mentors teach from?

They are in India and teach you on a live call. Pforzheim afternoons fall in the Indian evening: the gap is 4 h 30 in winter and 3 h 30 in summer.

### What is the BWKI?

Germany's national school AI contest, the Bundeswettbewerb Künstliche Intelligenz. Secondary pupils enter machine-learning projects, written up in German or English, and the 2026 final is held in Tübingen on 13 November.

### How big are the classes?

A batch brings together fifteen to twenty learners of roughly equal level. You can also learn privately, two sessions a week with your own mentor, at times you set together.

### How are fees paid?

By the month. The euro prices on this page use the reference rate of the European Central Bank; the actual charge is in US dollars and your bank does the exchange, so a slight difference can appear. There is no charge for the first class.

### Do you teach people to use AI to do their work for them?

No. We teach learners to think through a problem and to check any answer, including an AI one. Adults learn to use AI tools well, which means testing what they produce.

## Related pages

- [Coding classes in Baden-Württemberg](/coding-classes-in-baden-wuerttemberg): The Land's rules and dates.
- [AI and machine learning in Germany](/ai-and-machine-learning-classes-in-germany): All our AI courses for Germany.
- [AI course for kids](/ai-course-for-kids-germany): AI ideas for younger learners.
- [AI tools age guide](/ai-tools-age-guide): Minimum ages for over a hundred tools.
- [Vibe coding and AI agents](/vibe-coding-and-ai-agents-classes-germany): Building with AI help, carefully.
- [How we teach](/how-we-teach): What a live class is like.

## More pages for this Land

Part of the guide: [Coding classes in Baden-Württemberg](/coding-classes-in-baden-wuerttemberg)

### Cities and pages in Baden-Württemberg

- [Coding classes for kids in Heidelberg](/coding-classes-for-kids-in-heidelberg-germany)
- [Coding classes for kids in Karlsruhe](/coding-classes-for-kids-in-karlsruhe-germany)
- [Coding classes for kids in Reutlingen](/coding-classes-for-kids-in-reutlingen-germany)
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

Book the free first class at [https://learn.modernagecoders.com/coding-and-ai-classes-in-pforzheim-germany](https://learn.modernagecoders.com/coding-and-ai-classes-in-pforzheim-germany#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
