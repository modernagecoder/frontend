---
title: "Coding and AI Classes in Kassel: Live Online in English"
description: "Coding and AI classes in Kassel for every age, live online in English: why Hessen schools leave Informatik optional, AI tool ages, and an unusual-days data project."
canonical: https://learn.modernagecoders.com/coding-and-ai-classes-in-kassel-germany
source: src/pages/coding-and-ai-classes-in-kassel-germany.html
---
> Coding and AI classes in Kassel at Modern Age Coders are live online lessons in English for children from 6, teenagers and adults. Children start with Scratch and Python, teenagers move on to data science and machine learning, and adults learn Python with practical AI. One mentor stays with each learner and adapts to their pace and accent, in a batch of fifteen to twenty or one to one.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / [Hesse](/coding-classes-in-hesse) / Kassel

Kassel · Coding and AI · From age 6 to adult

# Coding and AI classes in Kassel

In Hessen, Informatik is not compulsory at any school type, and the Gesellschaft für Informatik knows of no binding plan to change that. So in Kassel, whether you are eight, sixteen or forty-five, learning to code and to understand AI mostly happens outside a classroom. We teach it live, online and in English, with a mentor who adjusts to you. This page explains Hessen's rules, who our classes are for, and one AI idea, spotting the unusual, worked through on 35 years of Kassel weather.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; For: Children, teenagers and adults; You learn: Python, data and practical AI; Format: Live video, two hours a week; Batch: Fifteen to twenty, or one to one; Mentors: Based in India, English only; Trial: First class free. Rated 4.9 across 547 Google reviews.

## Which course should a Kassel learner start with?

Pick by age. Each course works with real data from the first months, because data is what AI learns from.

- [Python and AI for Kids](/courses/python-ai-kids-masterclass): Ages 9 to 12, eight to ten months. Children type Python, draw and build games, then write small programs that sort and spot patterns in data.
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data): Ages 14 to 18, six months, some Python first. Real data sets, charts and first machine-learning models, each one tested.
- [Data Science for Adults](/courses/data-science-complete-masterclass-college): Adults 18 and over, ten to twelve months, no experience needed. Python, statistics, machine learning and deep learning in one path.

## Is Informatik a compulsory school subject in Kassel?

No. Hessen is one of six Länder without compulsory Informatik for all pupils.

### Grades 5 to 10

The Gesellschaft für Informatik (GI) sums Hessen up in one sentence in its Informatik-Monitor 2026/27: no school type has compulsory Informatik. At the Gymnasium, Informatik can be offered from grade 7 as part of the optional Wahlunterricht, one hour a week. At Haupt- and Realschule tracks, a school can set it up as a Wahlpflicht subject, but there is no curriculum of its own for those tracks.

The GI also lists Hessen among three Länder where no binding plan for compulsory Informatik is known.

### The Oberstufe

In the Einführungsphase a school may offer Informatik for two or three hours a week, and pupils need no earlier Informatik to take it. In the Qualifikationsphase there can be a Grundkurs of two or three hours, or a Leistungsfach of five.

The written Abitur tasks are set centrally for the whole Land. Work at a computer is ruled out in the written exam ("Praktische Prüfungsanteile am Rechner sind nicht zulässig", in the GI's words); the permitted aids are a list of operators and a dictionary.

**Where a Kassel pupil can meet Informatik, school year 2026/27**

| Stage | Compulsory? | What may be offered |
|---|---|---|
| Grundschule | No | No Informatik subject |
| Gymnasium, from grade 7 | No | Optional Wahlunterricht, one hour a week |
| Haupt- and Realschule tracks | No | Wahlpflicht Informatik if the school sets it up |
| Einführungsphase | No | Two or three hours, no prior Informatik needed |
| Qualifikationsphase | No | Grundkurs of two or three hours, or Leistungsfach of five |

Our summary of the Hessen page and the Länder comparison in the GI Informatik-Monitor 2026/27, read on 2 November 2026.

The written exam rule matters for anyone preparing for it: a Kassel pupil in an Informatik Leistungsfach writes the central paper by hand, so programming has to be understood well enough to be written and traced on paper. Our [Informatik Abitur in Hessen](/informatik-abitur-hessen) page explains the exam, and the [Hesse page](/coding-classes-in-hesse) covers the Land as a whole. We teach alongside school; the school course gives the grade.

## How does an AI decide that something is unusual?

Banks flag odd payments and factories flag odd sensor readings with the same basic idea: measure how far a value is from normal. The hard part is deciding what normal means. We try it on Kassel's weather.

### The data

The Deutscher Wetterdienst ran a weather station in Kassel from 1880 to 2013 and publishes its daily records under the CC BY 4.0 licence, which allows reuse with credit. The station moved several times and was called Kassel (West) and then Kassel (Süd) before it settled, on 20 July 1977, at 231 metres. We downloaded the file on 3 November 2026.

To compare like with like we kept only the years at that last site, 1978 to 2012, and one value per day: the mean air temperature. Five days had no value and were left out, leaving 12,779 days in a file we call kassel_tmk.csv.

### The idea

For each day, the program measures how far its temperature is from the average, in units of the usual spread (the standard deviation). A score of 3 means three times further from average than a typical day. High scores are the "unusual" days.

Version 1 measures every day against the average of all 12,779 days. Version 2 measures each day against the average of its own calendar month.

**Version 1: unusual compared with every day** (Python)
```python
import csv
import statistics

days = []
with open("kassel_tmk.csv", encoding="utf-8") as f:
    for line in csv.DictReader(f):
        days.append((line["datum"], float(line["tmittel"])))

temps = [t for _, t in days]
mean, spread = statistics.mean(temps), statistics.pstdev(temps)
scored = sorted(days, key=lambda d: abs(d[1] - mean) / spread, reverse=True)
print("Days:", len(days), " mean:", round(mean, 1), " spread:", round(spread, 1))
for date, t in scored[:3]:
    print("Unusual:", date, t, "score", round(abs(t - mean) / spread, 1))
```
It prints: Days: 12779 mean: 9.1 spread: 7.3, then Unusual: 1978-12-31 -15.8 score 3.4, Unusual: 1979-01-06 -15.5 score 3.3 and Unusual: 1987-01-13 -15.5 score 3.3.

Version 1 finds three bitterly cold winter days, and if you print more, it keeps finding them: in our run, all of the top twenty are in December, January or February. That is not wrong, but it is not useful. The program has discovered that winter is cold. A hot summer day can never look unusual to it, because Kassel's hottest days are closer to the all-year average of 9.1 degrees than its coldest nights are.

**Version 2: add below Version 1, unusual for its own month** (Python)
```python
by_month = {}
for date, t in days:
    by_month.setdefault(date[5:7], []).append(t)
normal = {m: (statistics.mean(v), statistics.pstdev(v)) for m, v in by_month.items()}

def score(day):
    m, s = normal[day[0][5:7]]
    return abs(day[1] - m) / s

for date, t in sorted(days, key=score, reverse=True)[:3]:
    print("Unusual for its month:", date, t, "score", round(score((date, t)), 1))
```
It prints: Unusual for its month: 1978-12-31 -15.8 score 4.1, Unusual for its month: 1987-03-03 -9.8 score 4.0 and Unusual for its month: 1987-03-04 -9.6 score 3.9.

Now early March 1987 appears: minus 9.8 degrees on 3 March. Against the whole year, that day looks ordinary, a winter-like day like many others. Against a normal March in Kassel, which averages 4.9 degrees, it is extraordinary. Further down the same list come 9 August 2003 at 28.4 degrees and 9 August 1992 at 28.3, hot days that Version 1 could never notice. Nothing in the data changed. The definition of normal did.

**Normal daily mean temperature in Kassel by month, 1978 to 2012 (our calculation)**

| Month | Average, degrees | Typical spread, degrees |
|---|---|---|
| January | 0.4 | 4.8 |
| March | 4.9 | 3.7 |
| July | 17.8 | 3.6 |
| August | 17.6 | 3.3 |

Data: Deutscher Wetterdienst, Climate Data Center, daily climate data, station 02532 Kassel, column TMK (daily mean air temperature), 1978 to 2012, CC BY 4.0, downloaded 3 November 2026. Scores, normals and code are ours; the spread is the population standard deviation. We are not connected with the DWD.

1. **Children, no screen.** Write down the heights of everyone in your family, then of everyone in your class. Is a 150 cm person unusual? In which group?
2. **Children, Python.** Print the five warmest days in the file. Then print the five warmest Januaries. Which list feels more surprising?
3. **Teenagers.** Compare months with the same average temperature but different spreads. Why does a big spread make a day harder to call unusual?
4. **Adults.** Score each day against the average of the 15 days either side of it in the calendar, across all years, instead of its month. Does 31 December 1978 still come first?

## Who are coding and AI classes in Kassel for?

Three groups, never mixed, each with its own courses and its own rules about AI tools.

**Our classes by age, and how AI tools are used (ours)**

| Learners | They learn | AI tools in class |
|---|---|---|
| Children, 6 to 12 | Scratch, then Python from about 9, sorting and pattern programs | No chatbot accounts; children build their own small AI |
| Teenagers, 13 to 18 | Python, data science, machine learning, testing | Only tools whose terms allow the age, with parental agreement |
| Adults | Python, data, machine learning, generative AI | Any tool, always checked against a source |

Tool ages from the companies' own terms: OpenAI requires users to be 13 and needs a parent's or guardian's permission under 18; Anthropic sets 18 for Claude. Quoted in full in our [AI tools age guide](/ai-tools-age-guide).

Kassel is a university city, and many adults who contact us are students or graduates who never had Informatik at school and now meet AI in their work or studies. They do not need another app; they need to understand what the app is doing. The anomaly project above is typical of our adult classes: short code, a clear idea, and a question about whether the answer is fair.

Teenagers in Kassel often come for a different reason: their school offers Informatik only as an option, or not at all, and they want to try programming before choosing Oberstufe subjects. Two or three months of Python tell a fifteen year old much more about whether a Leistungsfach Informatik suits them than any brochure.

## Are the coding and AI classes in German or English?

English only. Here is what that means in practice.

### Said up front

Our mentors teach from India, live, in English. There are no German-language classes, and we tell every family and adult learner before the first class.

### Adapted to you

Mentors speak at your speed and get used to your accent quickly. You can ask for a word, answer in simple sentences, or type your question in the chat.

### Useful beyond class

Python, its documentation and nearly all AI material are in English. Learning in English means no translating later when you read a library manual.

## When are live classes in Kassel time?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

**Example Kassel times and the time for the mentor**

| Kassel | India in MEZ months | India in MESZ months | Often chosen by |
|---|---|---|---|
| 15:10 | 19:40 | 18:40 | Children after school |
| 17:10 | 21:40 | 20:40 | Teenagers and students |
| Saturday 10:45 | 15:15 | 14:15 | Families |
| Sunday 14:00 | 18:30 | 17:30 | Adults |

German legal time is MEZ (UTC+1) or MESZ (UTC+2) under the Einheitenzeitgesetz; MEZ has applied since 25 October 2026 and MESZ starts on 28 March 2027. India, on UTC+5:30 all year, is therefore 4 hours 30 minutes ahead of Kassel now and 3 hours 30 minutes ahead from late March. No time is fixed for a batch in advance.

**Hessen school holidays in 2026/27 (KMK)**

| Holiday | Starts | Ends |
|---|---|---|
| Herbstferien | 5 October 2026 | 17 October 2026 |
| Weihnachtsferien | 23 December 2026 | 12 January 2027 |
| Osterferien | 22 March 2027 | 2 April 2027 |
| Sommerferien | 28 June 2027 | 6 August 2027 |

From the Hessen line of the KMK school holiday overview 2026/2027, version dated 9 October 2025; it lists no winter or Whitsun break for Hessen.

Classes run in the holidays unless you pause. Kassel had 197,230 residents on 31 December 2024 (Destatis), in a Land of 6,280,793 whose capital is Wiesbaden. Learners in Baunatal, Vellmar or Fuldatal follow the same Hessen calendar. Göttingen, with 127,259 people, is across the border in Lower Saxony, which has its own holidays and school rules.

## Which questions should every AI learner learn to ask?

Our five questions. Children ask them in simple words, adults in technical ones.

**Five questions for any AI result (ours)**

| Question | In the Kassel project |
|---|---|
| What does the data really contain? | Daily means at one site, 1978 to 2012 |
| What was left out? | Five days with no value, and the years before the last move |
| Compared with what? | All days, or days in the same month |
| Does the answer just restate the obvious? | Version 1 found that winter is cold |
| What would change the answer? | A different window, such as 15 days either side |

### For families

"Compared with what?" is the question we hear children start asking at home after a few weeks. It works on school marks, prices and football results too.
Progress notes tell you which questions your child can ask on their own.

### For adults

The fourth question is the one most AI reports at work fail. If a model only tells you what everyone knew, it has not learned anything.
We happily build lessons around data from your own job.

## Nine more courses for Kassel learners

Three for each age group, all taught live in English by a regular mentor.

### Children

Ages 6 to 15

- [Coding for Kids](/courses/kids-coding-blocks-masterclass): Scratch games to apps over a year, 6 to 12.
- [AI literacy](/courses/ai-literacy-for-kids-course): How machines learn, and fail, 8 to 14.
- [Maths through coding](/courses/maths-through-coding): Maths ideas made visible in Python, 10 to 15.

### Teenagers

Ages 13 to 19

- [AI and ML for teens](/courses/ai-ml-masterclass-teens): From Python to working models, 13 to 18.
- [AI tools for teens](/courses/teens-ai-tools-mastery-course): Using allowed AI tools with judgement, 13 to 18.
- [Informatik Abitur](/courses/informatik-abitur-course-java-python): Oberstufe Informatik in Java and Python, 16 to 19.

### Adults

18 and over

- [Generative AI](/courses/complete-generative-ai-masterclass-college): Language models, retrieval and agents.
- [Artificial intelligence](/courses/artificial-intelligence-complete-masterclass-college): Search, logic and agents from first principles.
- [Data and AI without programming](/courses/data-and-ai-analytics-for-non-programmers-course): Spreadsheets, dashboards and AI help.

## What happens in our live coding and AI classes?

Two hours a week, live on video with a shared screen. The learner writes and runs everything; the mentor asks the questions.

- **Afternoon** After school in Kassel, for children and teenagers.
- **Evening and weekend** For students, working adults and families.
- **One to one** A slot agreed with your mentor.

- **Live, always** A mentor present for the whole hour.
- **Real data** German open data in many projects.
- **Age bands** No mixed classes of children and adults.
- **One mentor** The same person throughout.
- **Plain English** Calm pace, everything on screen.
- **Clear notes** What was built, what comes next.

## How much do coding and AI classes cost in Kassel?

Eight live classes a month for one monthly fee. The page shows that fee in euro using the European Central Bank reference rate; the payment is taken in US dollars and your bank converts it, so the euro figure on your statement may not be identical.

- Free first class: Free. A first class at no cost. A short task at the learner's level. No card.
- Group batch: €90 (charged in US dollars) a month. Fifteen to twenty learners of a similar age. A regular mentor. Two classes a week. Monthly, cancel any month.
- One to one: €134 (charged in US dollars) a month. One learner, one mentor. Pace and projects set by the learner. Times you agree.

## Coding and AI classes in Kassel: questions answered

### Are the classes in German?

No. We teach in English only. Every class is live with a mentor in India who adjusts the pace, gets used to the learner's accent and keeps everything visible on screen, so learners with modest English can follow.

### Is Informatik compulsory in Hessen?

No. The Gesellschaft für Informatik reports that no school type in Hessen has compulsory Informatik, and it knows of no binding plan to introduce it. Gymnasien may offer it as an option from grade 7, and the Oberstufe can offer a Grundkurs or Leistungsfach.

### How is the Informatik Abitur written in Hessen?

The written tasks are set centrally for the whole Land, and practical work at a computer is not permitted in the written exam. The allowed aids are a list of operators and a dictionary. We teach beside school and do not award grades.

### Who can join coding and AI classes in Kassel?

Children from 6, teenagers and adults. Each age group has its own courses: Scratch and Python for children, data science and machine learning for teenagers, and Python, data science and generative AI for adults.

### When are classes in Kassel time?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Children tend to choose afternoons, adults evenings or weekends.

### Do children use ChatGPT in your AI classes?

No. OpenAI requires users to be 13 and to have a parent's permission under 18, and Claude is 18 and over under Anthropic's terms. Children learn AI by writing small programs that sort and spot patterns themselves.

### What is the anomaly project on this page?

Our own lesson on Deutscher Wetterdienst records from the Kassel station, 1978 to 2012. Learners score each day by how far it is from normal, first against all days and then against its own month, and see how the unusual days change.

### I studied something else. Can I still learn AI as an adult?

Yes. The adult courses start from zero with Python and refresh the maths inside the course. Many adult learners come from other fields and use what they learn in their own work.

### How big is a batch?

Fifteen to twenty learners, grouped by age and level. For a mentor of your own, choose one-to-one: two private classes each week.

### How is the fee paid?

Monthly. It is displayed in euro at the European Central Bank reference rate but charged in US dollars, which your bank converts, so your statement may differ slightly. The first class is free and asks for no card.

## Related pages

- [Coding classes in Hesse](/coding-classes-in-hesse): The Land, its schools and our classes.
- [Informatik Abitur in Hessen](/informatik-abitur-hessen): The central written exam explained.
- [AI and machine learning in Germany](/ai-and-machine-learning-classes-in-germany): Our main AI guide.
- [Think, do not copy AI](/learn-to-think-not-copy-ai-germany): Why judgement comes first.
- [Coding for adults](/coding-classes-for-adults-germany): Starting later, starting well.
- [How we teach](/how-we-teach): Our live classes in detail.

## More pages for this Land

Part of the guide: [Coding classes in Hesse](/coding-classes-in-hesse)

### Cities and pages in Hesse

- [Coding and AI classes in Darmstadt](/coding-and-ai-classes-in-darmstadt-germany)
- [Coding classes for kids in Frankfurt](/coding-classes-for-kids-frankfurt)
- [Coding classes for kids in Offenbach am Main](/coding-classes-for-kids-in-offenbach-am-main-germany)
- [Coding for international school students in Frankfurt](/coding-for-international-school-students-frankfurt)
- [Informatik-Abitur Hessen (Unterricht auf Englisch)](/informatik-abitur-hessen)
- [Maths tutor in Frankfurt, in English](/math-tutor-frankfurt-in-english)
- [Programmieren lernen für Kinder in Frankfurt (auf Englisch)](/programmieren-lernen-kinder-frankfurt)

More guides: [Coding classes in North Rhine-Westphalia](/coding-classes-in-north-rhine-westphalia), [Coding classes in Lower Saxony](/coding-classes-in-lower-saxony), [Coding classes in Land Bremen](/coding-classes-in-land-bremen), [Coding classes in Bavaria](/coding-classes-in-bavaria), [Coding classes in Saxony-Anhalt](/coding-classes-in-saxony-anhalt), [Coding classes in Schleswig-Holstein](/coding-classes-in-schleswig-holstein), [Coding classes in Baden-Württemberg](/coding-classes-in-baden-wuerttemberg), [Coding classes in Saarland](/coding-classes-in-saarland), [Coding classes in Rhineland-Palatinate](/coding-classes-in-rhineland-palatinate), [Coding and maths in Berlin](/coding-and-maths-classes-in-berlin-germany), [Coding and maths in Hamburg](/coding-and-maths-classes-in-hamburg-germany), [Coding classes in Saxony](/coding-classes-in-saxony), [Coding classes in Thuringia](/coding-classes-in-thuringia), [Coding classes in Brandenburg](/coding-classes-in-brandenburg), [Coding classes in Mecklenburg-Vorpommern](/coding-classes-in-mecklenburg-vorpommern)

## Contact

Book the free first class at [https://learn.modernagecoders.com/coding-and-ai-classes-in-kassel-germany](https://learn.modernagecoders.com/coding-and-ai-classes-in-kassel-germany#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
