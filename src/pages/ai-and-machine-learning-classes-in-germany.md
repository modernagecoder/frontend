---
title: "AI and Machine Learning Classes in Germany, Live in English"
description: "Live online AI and machine learning classes in English for teens and adults in Germany: Python, models you build yourself, the BWKI and a real Bochum data project."
canonical: https://learn.modernagecoders.com/ai-and-machine-learning-classes-in-germany
source: src/pages/ai-and-machine-learning-classes-in-germany.html
---
> AI and machine learning classes for learners in Germany at Modern Age Coders are live online lessons in English for teenagers from 13 and for adults: Python first, then real datasets, then models the learner builds, tests against a simple baseline and can explain. One regular mentor matches each learner's pace and accent. Classes run in German afternoons, evenings and weekends, in a group of fifteen to twenty or one to one.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / AI and machine learning

Germany · Artificial intelligence · Ages 13 and up

# AI and machine learning classes in Germany

Typing a question into an AI tool takes seconds; building the simplest model yourself, and proving whether it works, is a different skill. This page is about that second skill. It covers what German schools are now asked to teach about AI, a national AI competition that accepts projects in English, which AI tools a teenager may legally use, and a project on a Bochum weather station in which a learned model first has to beat the guess "it will stay the same".

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Ages: 13 to 18, and adults; Starts with: Python and real data; Then: Models built, tested and explained; German times: Afternoons, evenings and weekends; Teachers: Mentors based in India; First class: Free, no card needed. Rated 4.9 across 547 Google reviews.

## Three AI courses for learners in Germany

One for teenagers who want to understand how models learn, one for adults who want AI to do real work for them, and one for adults ready to build with AI coding agents.

- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens): Ages 13 to 18. Python, data and the maths behind models, step by step, up to projects a teenager could enter for the BWKI.
- [Python Automation and Applied AI](/courses/python-ai-automation-masterclass-college): Adults. Scripts that read files, clean data and call AI services, so that a weekly report or a sorting job runs by itself.
- [AI Coding Agents for Adults](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals): Adults 18 and over only. Working with Codex and Claude Code: planning, reviewing and testing what an agent writes, rather than trusting it.

## What do German schools teach about AI?

The Länder agreed a common frame through the KMK, but how much AI a pupil actually meets still depends on the Land, the school and above all on whether they take Informatik.

### What the KMK has decided

The KMK published a recommendation in 2024 for education administrations on how to handle artificial intelligence in school learning. In 2026 it adopted an updated version of its competence framework Bildung in der digitalen Welt, which adds AI-related competences to the areas first set out in its 2016 strategy.

Those are frameworks for using and judging AI in every subject. They do not put a model-building course on every timetable.

### Where building AI actually happens

Writing and training a model belongs to Informatik, and Informatik is uneven. The Gesellschaft für Informatik estimates in its 2026/27 Informatik-Monitor that only about 15 percent of pupils in the Oberstufe take the subject in the Qualifikationsphase.

So most teenagers in Germany will use AI tools at school without ever seeing what is inside one. That gap is exactly what a machine-learning class can fill.

**Using AI and building AI: what each one asks of a learner**

| Skill | Using an AI tool | Building a model |
|---|---|---|
| Starting point | An account and a question | Python and a dataset |
| Main question | Is this answer useful? | Is this model better than a simple guess? |
| How you check it | Compare with a trusted source | Measure the error on data the model has not seen |
| What can go wrong | A confident wrong answer | A model that only remembers its training data |
| Where it is taught | Across subjects, under the KMK framework | Mostly in Informatik, if it is chosen |

Sources: KMK, Bildung in der digitalen Welt (the 2024 recommendation on AI in schools and the 2026 update of the competence framework); Gesellschaft für Informatik, Informatik-Monitor 2026/27. Read on 2 November 2026. The table is our own summary.

## Can a model predict the temperature in Bochum an hour from now?

Bochum publishes the readings of a weather station on a smart bench in its city centre, free for anyone to reuse. Our students use it to learn the habit that separates machine learning from guessing: always measure against a simple baseline, on data the model has never seen.

### The data

The dataset is called Bochum, Smarte Bänke, Wetterstation Old Wattsche, published by the city on its open data portal under the Datenlizenz Deutschland Zero 2.0. The file we downloaded on 2 November 2026 holds 190,435 readings, about five minutes apart, from April 2024 to the start of November 2026, with some gaps where the station was silent.

We keep one reading per hour, the one on the hour, which leaves 13,344 hours with a temperature, and save them as bochum_hourly.csv.

### The rule we never break

The model may learn only from hours before 1 January 2026. Every hour from 2026 is locked away as the test set and used once, at the end. A model that is tested on the hours it learned from will look far better than it is.

The first prediction is not a model at all: the temperature in an hour will be the same as now. Any model worth keeping has to beat that.

**Version 1: a baseline, then one learned number** (Python)
```python
import csv
from datetime import datetime, timedelta

temp = {}
with open("bochum_hourly.csv", encoding="utf-8") as f:
    for row in csv.DictReader(f):
        temp[row["hour"]] = float(row["temp"])

def hour_key(moment):
    return moment.strftime("%Y-%m-%d %H")

examples = []
for hour in temp:
    now = datetime.strptime(hour, "%Y-%m-%d %H")
    before = hour_key(now - timedelta(hours=1))
    after = hour_key(now + timedelta(hours=1))
    if before in temp and after in temp:
        examples.append((hour, temp[before], temp[hour], temp[after]))

train = [e for e in examples if e[0] < "2026"]
test = [e for e in examples if e[0] >= "2026"]

def error(predictions):
    return sum(abs(p - real) for p, real in predictions) / len(predictions)

same_as_now = [(now, after) for _, before, now, after in test]
print("Training hours:", len(train), " Test hours:", len(test))
print("Same as now, average error:", round(error(same_as_now), 2), "C")

# learn one number k: how much of the last hour's change carries on
top = sum((now - before) * (after - now) for _, before, now, after in train)
bottom = sum((now - before) ** 2 for _, before, now, after in train)
k = top / bottom
trend = [(now + k * (now - before), after) for _, before, now, after in test]
print("Learned k:", round(k, 2))
print("Trend model, average error:", round(error(trend), 2), "C")
```
It prints Training hours: 8574 Test hours: 4607, then Same as now, average error: 0.94 C, Learned k: 0.5 and Trend model, average error: 0.75 C.

The baseline is already good: on average it is wrong by less than one degree, because temperature rarely jumps in an hour. The trend model learns a single number from the 8,574 training hours, how much of the last hour's change tends to carry on into the next hour, and the answer is 0.5: about half. With that one number the average error on the 2026 test hours falls from 0.94 to 0.75 degrees. That is machine learning in its smallest honest form: a number fitted to data, judged on data it has never seen, against a guess anyone could make.

**Version 2: a different number for every hour of the day** (Python)
```python
k_by_hour = {}
for h in range(24):
    rows = [e for e in train if int(e[0][11:13]) == h]
    top = sum((n - b) * (a - n) for _, b, n, a in rows)
    bottom = sum((n - b) ** 2 for _, b, n, a in rows)
    k_by_hour[h] = top / bottom

by_hour = [(n + k_by_hour[int(hr[11:13])] * (n - b), a) for hr, b, n, a in test]
print("Hour-by-hour model, average error:", round(error(by_hour), 2), "C")
```
It prints Hour-by-hour model, average error: 0.66 C.

**Three predictions for the 4,607 test hours of 2026, and what each one learned (our calculation)**

| Prediction | Numbers learned | Average error |
|---|---|---|
| Same as now | 0 | 0.94 C |
| Trend model | 1 | 0.75 C |
| Hour-by-hour model | 24 | 0.66 C |

Data: Stadt Bochum, Smarte Bänke, Wetterstation Old Wattsche (Innenstadt), bochum.opendata.ruhr, Datenlizenz Deutschland Zero 2.0, downloaded 2 November 2026. Training on hours from April 2024 to December 2025, testing on March to October 2026. The errors, the learned numbers and the test split are our own work.

The 24 learned numbers tell a story about a day. At 08:00 the number is 1.37: in the morning a warming trend speeds up. At 12:00 it is 0.06 and at 16:00 it is below zero: around midday the temperature levels off, and in the late afternoon a rise is more likely to turn than to continue. Nobody typed those facts in; the model found them in the data. It still misses badly at times. On 29 May 2026 the station read 30.7 degrees at 19:00 and 20.3 at 20:00, a fall of more than ten degrees in one hour that no trend could have seen coming.

1. **Start.** Run Version 1 and write down the three numbers it prints before reading on.
2. **Break the rule on purpose.** Fit k on all the hours, test included, and compare the error. Explain why the result cannot be trusted.
3. **Improve it.** Fit Version 2, then try one number per month instead of per hour. Which helps more, and why might that be?
4. **Going further.** Find the ten test hours with the largest error and look at what the station recorded around them. Write one paragraph on what a better model would need to know.

## Can a pupil in Germany enter the BWKI with a project in English?

Yes. The Bundeswettbewerb Künstliche Intelligenz says in its own conditions that projects may be submitted in German or in English.

### What the BWKI asks for

The BWKI is run by the Tübingen AI Center and is open to pupils in Sekundarstufe I and II, alone or in teams of up to four. Its conditions say a project must use machine-learning methods, and a submission needs written documentation, runnable code and a video pitch of two to four minutes. Up to ten teams are invited to the final in November.

The competition is recommended by the KMK and is a member of the working group of national youth competitions.

### The 2026 round, as an example

For 2026 the organisers opened registration on 1 March 2026 and set the project deadline for 20 September 2026, with the final in Tübingen on 13 November 2026. The next round follows the same yearly rhythm; check the BWKI site for its dates before planning.

A spring start leaves a pupil about six months from idea to submission, which is about the time our teen course needs to go from first models to a real project.

We are not connected with the BWKI or the Tübingen AI Center and we do not submit projects for anyone. What we do is teach the parts a strong entry needs: a clear question, a dataset with a licence that allows reuse, a baseline, an honest test, code that runs on someone else's computer and a short explanation of what the model can and cannot do. The Bochum project above has every one of those parts. Our [German informatics competitions course](/courses/german-informatics-competitions-course-biber-bwinf-bwki) also prepares pupils for the BWKI.

## Which AI tools can a teenager in Germany use?

The providers set their own minimum ages, in their own terms. A class for teenagers has to respect them, so ours do.

**Minimum ages in the providers' own terms, as quoted in our AI tools age guide**

| Tool | Minimum age | What the terms add |
|---|---|---|
| ChatGPT (OpenAI) | 13 | Under 18 needs a parent's or guardian's permission |
| Claude (Anthropic) | 18 | Adults only |
| Python and its libraries | None | Open source; the learner's own code |

Source: the providers' terms, quoted in full with links in our [AI tools age guide](/ai-tools-age-guide). Terms change; that page records the date each one was read.

That is one reason our teenage classes build models in plain Python rather than relying on a chatbot. A thirteen year old can write every line of the Bochum project with no account anywhere. Our course on AI coding agents uses Claude Code, so it is for adults only, and we never place a learner under 18 in it.

## When do AI classes run in German time?

Teenagers mostly come in the late afternoon or at weekends, adults in the early evening. The mentor is in India, where the clock is ahead.

**Typical German class times and the time in India**

| Germany | India, winter (to 28 March 2027) | India, summer (from 28 March 2027) |
|---|---|---|
| 15:30 | 20:00 | 19:00 |
| 17:30 | 22:00 | 21:00 |
| Saturday 10:30 | 15:00 | 14:00 |
| Sunday 13:00 | 17:30 | 16:30 |

Germany is on UTC+1 in winter and UTC+2 in summer under the Einheitenzeitgesetz; summer time ended on 25 October 2026 and returns on 28 March 2027. India is on UTC+5:30 throughout the year.

You choose the time of the free first class in your own clock. Group classes run at set times, and one-to-one learners agree a time with their mentor that can move when school, work or exams get busy.

## From first script to a model you can defend

Our own milestones for AI learners, used to place each learner and to report progress.

**Machine-learning milestones (ours)**

| Stage | Typical start | The learner can |
|---|---|---|
| 1. Python and data | Month 1 | Read a CSV file, clean it and count what is missing |
| 2. Baselines | Month 2 | State a simple guess and measure its error |
| 3. Fitted models | Months 3 to 4 | Fit a model, split the data honestly and beat the baseline |
| 4. Real libraries | Months 5 to 7 | Use scikit-learn or PyTorch and explain what each step does |
| 5. A project | Months 8 and up | Plan, document and present a model, limits included |

### For teenagers

If your model cannot beat "same as now", it has not learned anything yet.
Never let the test set anywhere near training. Lock it away first.

### For adults

Ask of every AI result at work what it was compared with, and on which data.
A small model you understand is often worth more than a large one you cannot check.

## Nine more ways into AI from Germany

Every course is live, in English, with one regular mentor, in a group or one to one.

### Teenagers

Ages 13 to 18

- [Python for teens](/courses/python-complete-masterclass-teens): The language every model on this page is written in.
- [Vibe coding for teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course): Building with AI help while learning to check it.
- [Competitions and BWKI](/courses/german-informatics-competitions-course-biber-bwinf-bwki): From contest puzzles to an AI project entry.

### The maths underneath

Ages 15 and up

- [Statistics and probability](/courses/statistics-probability-maths-course): Errors, averages and uncertainty, properly.
- [Maths for data analytics](/courses/data-analytics-mathematics-masterclass): The algebra and statistics behind data work.
- [Abitur maths in English](/courses/abitur-mathematics-course-in-english): Analysis and Stochastik for the German Abitur.

### Adults and work

Ages 18 and up

- [Gemini Enterprise agents](/courses/build-ai-agents-with-google-gemini-enterprise-course): Agents for teams on Google's platform, one to one.
- [Vibe coding for adults](/courses/vibe-coding-for-college-fullstack-ai-dsa-career-course): Full-stack projects with AI help, tested by you.
- [Data structures and algorithms](/courses/data-structures-algorithms-masterclass-college): The foundations behind efficient code.

## How live AI classes work for learners in Germany

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Late afternoon** From about 15:30 German time, for teenagers after school.
- **Early evening** For adults after work, up to about 18:30 German time.
- **One to one** A time agreed with the mentor, weekends included.

- **Code from day one** Learners type and run every model themselves.
- **Honest testing** Every model is judged against a baseline.
- **English at your pace** Clear explanations, rephrased when needed.
- **Same mentor** One person who follows the learner's progress.
- **Age rules kept** Under-18 learners never use adult-only tools.
- **Group or private** Fifteen to twenty learners, or one alone.

## Fees for AI classes in Germany

The monthly fee buys eight live classes. It appears here in euro, worked out at the European Central Bank reference rate, while the charge itself is made in US dollars; your bank converts it, so the figure on your statement may be slightly different.

- Free first class: Free. A free first class. A short Python task at your level. No card needed.
- Group batch: €90 (charged in US dollars) a month. Fifteen to twenty learners of a similar level. One regular mentor. Two classes a week. Monthly, stop whenever you like.
- One to one: €134 (charged in US dollars) a month. One learner, one mentor. Your own projects and pace. Times you agree together.

## AI and machine learning classes in Germany: common questions

### Are the AI classes taught in German?

No. Every class is live and in English only, with a mentor who matches the learner's pace and accent. The programming itself, Python and its libraries, is written in English keywords whatever the language of the lesson.

### What age can someone start learning AI with you?

From 13 for machine learning. Younger children can start with coding and an AI literacy course. Adults of any age can join the adult courses.

### Do I need to know Python first?

No. The teen course and the adult automation course both start with Python. A learner who already codes is placed further along after the free first class.

### Do German schools teach machine learning?

Mostly within Informatik, which only about 15 percent of Oberstufe pupils take in the Qualifikationsphase, according to the Gesellschaft für Informatik for 2026/27. The KMK added AI competences to its digital education framework in 2026, which covers using and judging AI in all subjects.

### Can my child enter the BWKI with an English project?

Yes. The Bundeswettbewerb Künstliche Intelligenz states that projects may be submitted in German or English. It is open to Sekundarstufe I and II pupils, alone or in teams of up to four, and projects must use machine-learning methods. We are not connected with the BWKI.

### Will my teenager use ChatGPT or Claude in class?

Our teen classes build models in plain Python and do not need any chatbot account. OpenAI's terms set 13 as the minimum age with a parent's permission under 18, and Anthropic's terms put Claude at 18 and over, so we never use Claude with under-18 learners.

### When are classes in German time?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Teenagers usually come in the late afternoon or at weekends and adults in the early evening.

### Which currency do I pay in?

Fees are shown here in euro at the European Central Bank reference rate, and the payment is taken in US dollars. Your bank converts it, so the amount on your statement can differ a little. The first class is free.

### Are the classes live?

Yes, every class is live with a mentor, in a group of fifteen to twenty or one to one. There are no pre-recorded video courses.

### What will I have built at the end?

At least one model you trained, tested against a baseline on data it had not seen, and can explain, like the Bochum temperature project on this page, and usually several more on datasets you chose yourself.

## Related pages

- [Coding classes in Germany](/coding-classes-in-germany): All our pages for learners in Germany.
- [AI tools age guide](/ai-tools-age-guide): Every major tool's minimum age, quoted.
- [Informatik-Nachhilfe online](/informatik-nachhilfe-online): Informatik support, explained in German.
- [Abitur maths in English](/abitur-maths-in-english): The maths beneath every model.
- [AI projects for kids](/ai-projects-for-kids): Ideas for younger learners.
- [How we teach](/how-we-teach): Our live classes, step by step.

## Contact

Book the free first class at [https://learn.modernagecoders.com/ai-and-machine-learning-classes-in-germany](https://learn.modernagecoders.com/ai-and-machine-learning-classes-in-germany#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
