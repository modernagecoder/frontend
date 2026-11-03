---
title: "Coding and AI Classes in Trier: Live Online, in English"
description: "Coding and AI classes in Trier for children, teens and adults: live online in English, Rhineland-Palatinate school facts, AI ages and a bus stop data project."
canonical: https://learn.modernagecoders.com/coding-and-ai-classes-in-trier-germany
source: src/pages/coding-and-ai-classes-in-trier-germany.html
---
> Modern Age Coders teaches coding and AI to learners in Trier from age 6 upwards, in live online lessons held in English. Children work in Scratch and then Python; teenagers collect and analyse data and train models; adults automate tasks and learn to use AI they can check. A regular mentor based in India sets the pace and gets used to each learner's accent. Choose a class of fifteen to twenty or one to one, in the afternoon, evening or at weekends.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / Trier

Trier · Coding and AI · All ages

# Coding and AI classes in Trier

Every AI system is only as good as the data it was given, and somebody had to collect that data, usually with a few lines of code. Learning to do that carefully is a skill for a ten year old, a sixteen year old and a fifty year old alike. This page is for learners of every age in Trier: why we teach coding before AI, a project on the city's own bus stop service in which the data quietly goes missing, what Rhineland-Palatinate schools teach now and from 2028/29, and when live classes in English fit your week.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Ages: From 6, teens and adults; Children start with: Scratch, then Python; Older learners start with: Python and live data; Trier times: After school, after work, weekends; Teachers: Mentors based in India; First class: Free, no card needed. Rated 4.9 across 547 Google reviews.

## Three first courses for Trier learners

The mentor confirms the choice after the free first class, depending on age and what the learner already knows.

- [Python and AI for Kids](/courses/python-ai-kids-masterclass): Children of 9 to 12 type real Python, make games and drawings, and find out how a program can learn from a list of examples.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens): Teenagers gather data, check it, and train models that must outperform a naive guess before anyone calls them clever.
- [Python Automation and Applied AI](/courses/python-ai-automation-masterclass-college): Adults learn to fetch, tidy and summarise data with Python and to pass it to AI services, reviewing every result.

## Why learn to code before learning AI, at any age?

Because AI is built from data and code, and judged by people who understand both. Each age reaches that understanding by a different road.

### Children, 6 to 12

A child who has told a Scratch cat exactly what to do knows that computers follow instructions, not wishes. From about 10 they build tiny programs that sort examples into groups, which is what much of AI really does, without needing any account on an adult AI service.

### Teenagers, 13 to 18

Teenagers write the code that collects data, then train a model and test it fairly. They learn that a model is only as honest as the dataset behind it, which is exactly where the Trier project below begins.

### Adults

Adults get the most from AI when they can check it. With some Python they can fetch the data themselves, compare it with what a tool tells them, and automate the dull parts of their work without handing over their judgement.

AI tools have age limits in their providers' own terms, and we follow them. OpenAI allows ChatGPT from 13, with a parent's permission until 18; Anthropic allows Claude only from 18, so it appears only in adult courses. Each limit is quoted with its date in our [AI tools age guide](/ai-tools-age-guide). A teenager looking for a national target might try the Bundeswettbewerb Künstliche Intelligenz: its conditions allow an entry written in English. It is run independently of us.

## How many bus stops does Trier's own data service list?

The City of Trier publishes the locations of its city bus stops through an online map service, free to reuse under the Datenlizenz Deutschland Namensnennung 2.0. Asking it a simple question teaches the first rule of collecting data for any AI: get all of it, get each item once, and check the answer yourself.

### How the service answers

The data sits behind a standard web interface for map features, run on the Rhineland-Palatinate geoportal. It describes the stops of the Stadtwerke Trier buses in Trier and the surrounding area. Ask it for stops and it does not send them all at once; it sends a page of them, plus a link to the next page.

You choose how many stops per page, but only from a fixed list. When we asked for 5,000 at once, the service refused and listed the sizes it accepts, from 1 up to 4,000. We used pages of 200 and saved each answer as a file, stops_offset_0.json, stops_offset_200.json and so on.

### The obvious plan

Every page also carries a number called numberMatched, the service's own count of how many stops match. The obvious plan is to keep reading pages until one comes back with fewer than 200 stops, because a short page must surely be the last.

Version 1 does exactly that. It is the code most people would write, and on this service it is wrong.

**Version 1: stop at the first short page** (Python)
```python
import json

LIMIT = 200

def page(offset):                         # one saved answer from the Trier service
    with open(f"stops_offset_{offset}.json", encoding="utf-8") as f:
        return json.load(f)

first = page(0)
print("The service says it matched:", first["numberMatched"])

stops, offset = [], 0
while True:
    features = page(offset)["features"]
    stops += features
    if len(features) < LIMIT:             # "a short page must be the last one"
        break
    offset += LIMIT
print("Stopping at the first short page:", len(stops), "stops")
```
It prints The service says it matched: 648 and Stopping at the first short page: 598 stops.

The third page brought 198 stops instead of 200, so Version 1 decided it had reached the end. It had not. The service simply sent a slightly short page in the middle, and 62 more stops were waiting on the fourth page. A program that trusts "short means last" would hand an AI model, a map or a report about nine percent too few stops, and nobody would see an error message.

**Version 2: stop only at an empty page, then check the ids** (Python)
```python
stops, offset = [], 0
while True:
    features = page(offset)["features"]
    if not features:                      # only an empty page means the end
        break
    print("  offset", offset, "gave", len(features))
    stops += features
    offset += LIMIT

ids = [s["properties"]["gid"] for s in stops]
print("Stopping at the first empty page:", len(stops), "stops,", len(set(ids)), "different ids")
twice = sorted({i for i in ids if ids.count(i) > 1})
print("Ids that came twice:", twice)
```
It prints offset 0 gave 200, offset 200 gave 200, offset 400 gave 198, offset 600 gave 62, then Stopping at the first empty page: 660 stops, 659 different ids and Ids that came twice: [35006].

**Three answers to "how many bus stops?", Stadt Trier service, 3 November 2026 (our counts)**

| Method | Stops |
|---|---|
| The service's own numberMatched | 648 |
| Reading until the first short page | 598 |
| Reading until the first empty page | 660 |
| After removing the stop that arrived twice | 659 |
| One request for up to 1,000 stops | 659 |

Data: Stadt Trier, Stadtbus - Haltestellen (SWT), via the geoportal.rlp.de feature service, Datenlizenz Deutschland Namensnennung 2.0 (dl-de/by2-0, www.trier.de); pages saved on 3 November 2026. Every count in the table, and the reading of it, is ours.

Version 2 keeps going until a page is empty, which is the only safe sign of the end. It then finds a second, smaller problem: one stop, id 35006, appears on two neighbouring pages, so 660 records hold 659 different stops. Paging can repeat or skip items at page edges, which is why a careful collector always de-duplicates by id. The final surprise is the service's own total. It says 648 on every page, yet it delivers 659 different stops, and a single large request agrees with 659. A number a system reports about itself is a claim, not a fact, until you count.

There are also more stop records than stop names. The file lists 347 different names for its 659 records, because a busy stop is listed more than once: Trier, Porta Nigra alone appears eight times, most likely once per platform or direction. Deciding whether "a stop" means a name or a platform comes before any analysis, and the right answer depends on the question.

1. **Children, 9 to 12.** Read a long book list aloud ten titles at a time. Make one "page" only nine titles long by mistake. Does the listener stop early?
2. **Teenagers.** After running the two versions, add a third that halts when the service gives no next link at all. Does the service ever stop giving one?
3. **Adults.** Think of an export at work that comes in pages or batches. How would you prove you received everything exactly once?
4. **Going further.** Group the 659 records by stop name and list the five names with the most platforms.

## What do Trier schools teach about Informatik, now and from 2028/29?

Trier follows the Rhineland-Palatinate rules, which are about to change. Here is the picture today and the one the Land has announced.

**Informatik in Rhineland-Palatinate, as reported in the Informatik-Monitor 2026/27**

| Topic | Today | From the 2028/29 school year |
|---|---|---|
| Compulsory for all pupils? | No; Rhineland-Palatinate is one of six Länder without it | Yes, at all schools |
| Where it is compulsory now | Grade 5 at 21 Informatik-Profil-Schulen, since 2021/22 | Every school |
| How much | Varies by school | Four weekly hours, added up over the years taught |
| Oberstufe | Optional, where a school offers it | Optional, where a school offers it |

From the Informatik-Monitor 2026/27 of the Gesellschaft für Informatik (overview and the Land's own page), consulted 2 November 2026. Secondary schools in the Land include the Gymnasium, mostly nine years with an eight-year route at some, and the Realschule plus.

### What that means for a Trier family

A child who is 7 today will meet Informatik as a subject at secondary school. A teenager in grade 9 today will most likely finish school without it, unless they choose it. Across Germany, according to the monitor, roughly 15 out of every 100 pupils in the last two school years have Informatik on their timetable.

Either way, the subject is new to the timetable, and many pupils will meet it with no practice behind them.

### Where we fit

Nothing we teach replaces a lesson at a Trier school, and only the school awards marks or the Abitur. If a pupil does take Informatik there, our [Informatik companion for Klasse 5 to 10](/courses/informatik-companion-course-klasse-5-10) and [Informatik Abitur course](/courses/informatik-abitur-course-java-python) follow school topics in English.

For holidays, school types and the reform timetable across the whole Land, see our [Rhineland-Palatinate overview](/coding-classes-in-rhineland-palatinate).

## When do classes run in Trier time?

Pupils mostly come after school, adults after work, and many learners on Saturday or Sunday. In India, where the mentor teaches, it is already evening.

**Trier time and the mentor's time, four examples**

| Trier | India, this winter | India, from 28 March 2027 |
|---|---|---|
| 16:50 | 21:20 | 20:20 |
| 17:40 | 22:10 | 21:10 |
| Saturday 11:00 | 15:30 | 14:30 |
| Sunday 14:00 | 18:30 | 17:30 |

The Einheitenzeitgesetz puts Trier on UTC+1 in winter (since 25 October 2026) and on UTC+2 in summer (from 28 March 2027). India uses UTC+5:30 the whole year. Illustrations only; group times are agreed when a class forms.

The Kultusministerkonferenz table for 2026/27 gives Rhineland-Palatinate an autumn break that ended on 16 October 2026 after starting on the 5th, a Christmas break from 23 December 2026 to 8 January 2027, two Easter weeks from 22 March 2027 ending on 2 April, and six summer weeks from 28 June 2027 until 6 August. Classes continue through the holidays for anyone who wants them. Learners join from all parts of Trier and from nearby Konz, Schweich, Saarburg, Hermeskeil and Bitburg.

## Five milestones from first program to AI project

Our own milestones, the same for every age, used to place learners and report progress.

**Coding and AI milestones (ours)**

| Milestone | Usually | The learner can |
|---|---|---|
| First program | First week | Make the computer follow steps exactly |
| Loops and choices | First months | Repeat work and decide between cases |
| Collecting data | Months 3 to 5 | Fetch every page of a dataset, once each, and check the count |
| A tested model | Months 5 to 9 | Train a model and compare it with a naive guess |
| A project | Later | Build, document and explain something new |

### For parents

The third milestone is the Trier bus stop project. A child who checks a total for themselves will do the same in maths homework.
Reports describe what your child made and could explain.

### For adult learners

A system's own count is a claim until you have counted.
If data arrives in pages, stop when a page is empty, never when it is merely short.

## Nine more courses for Trier learners

Each is live and in English, with one mentor throughout, in a class or one to one.

### Children

Ages 6 to 12

- [Coding for kids](/courses/kids-coding-blocks-masterclass): Scratch first, then apps and a taste of AI.
- [AI literacy for kids](/courses/ai-literacy-for-kids-course): What AI is and is not, for 8 to 14.
- [Vibe coding for kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev): Children steer an AI helper and check its work.

### Teenagers

Ages 13 to 18

- [Backend for teens](/courses/backend-coding-masterclass-for-teens): APIs and databases from the server side.
- [Visual machine learning](/courses/orange-data-mining-visual-machine-learning-course-for-teens): Models in Orange before writing code.
- [Biber, BwInf and BWKI](/courses/german-informatics-competitions-course-biber-bwinf-bwki): From contest puzzles to an AI entry.

### Adults

Ages 18 and up

- [Data science](/courses/data-science-complete-masterclass-college): From raw data to models and reports.
- [Artificial intelligence](/courses/artificial-intelligence-complete-masterclass-college): Search, logic and agents, from first principles.
- [SQL and databases](/courses/mysql-database-complete-masterclass-college): Where most organisations keep their data.

## How live classes run for Trier learners

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Late afternoon** For pupils, once school is done.
- **Evening** For adults on working days.
- **Private** A time fixed with the mentor, weekends too.

- **Typed by the learner** The mentor never takes the keyboard.
- **Checked counts** Every dataset is counted before it is used.
- **Gentle English** Slower, simpler, repeated when needed.
- **One mentor** The same person from start to finish.
- **Ages kept separate** Children, teens and adults in their own groups.
- **Group or solo** Fifteen to twenty learners, or private.

## Fees for learners in Trier

You pay once a month for eight live classes. The euro amount on this page is converted at the European Central Bank reference rate, while the payment runs in US dollars; your bank handles the exchange, so the euro it books may be a few cents off.

- Free first class: Free. A free first class. A short task at the learner's level. No card needed.
- Group batch: €90 (charged in US dollars) a month. Fifteen to twenty learners of similar age. One regular mentor. Two classes each week. Monthly, cancel when you like.
- One to one: €134 (charged in US dollars) a month. One learner, one mentor. Your own goals and pace. Times agreed together.

## Coding and AI classes in Trier: common questions

### Are the classes in German?

No. All lessons are live and in English only, with a mentor who adjusts speed and accent to the learner. Python and Scratch use English words anyway, so the two fit together.

### Why not start straight with AI?

Because AI depends on data and code. A few weeks of programming teach a learner to check what a computer returns, which is the skill that makes AI useful and safe to rely on.

### What is the minimum age?

Six. The youngest begin with Scratch, where blocks replace typing, and switch to Python when reading and keyboard skills allow, often at nine.

### Do Trier schools teach Informatik?

Only some pupils have it for now: the Land has no Informatik binding on everyone, except grade 5 at 21 profile schools. The Gesellschaft für Informatik reports that from the 2028/29 school year every school will teach it, four weekly hours spread over the grades.

### Which AI tools will my teenager use?

OpenAI allows ChatGPT from 13 with a parent's permission under 18, and we follow that. Anthropic sets 18 for Claude, so it is used only in adult classes. Children's courses need no AI account at all.

### When are classes in Trier time?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Pupils tend to come after school and adults after work.

### Who are the mentors?

Programmers and teachers based in India who teach live over video, in English. Each learner keeps the same mentor.

### Which currency is used?

Fees appear in euro, converted at the European Central Bank reference rate, and are charged in US dollars. Your bank converts the payment, so the booked amount may vary a little. The first class is free.

### What is the bus stop project?

An exercise on the City of Trier's bus stop service. Reading pages until the first short one gives 598 stops; reading until an empty page gives 660, of which 659 are different; the service itself claims 648.

### Can adults with no experience join?

Yes. Adult courses start from the first line of Python and move to data and AI at a pace that fits work.

## Related pages

- [Coding classes in Germany](/coding-classes-in-germany): Our national page, with links onward.
- [Coding classes in Rhineland-Palatinate](/coding-classes-in-rhineland-palatinate): The Land's school rules in full.
- [AI and machine learning in Germany](/ai-and-machine-learning-classes-in-germany): Teen and adult machine learning.
- [Vibe coding and AI agents](/vibe-coding-and-ai-agents-classes-germany): Working with AI coding tools, carefully.
- [Online coding classes in Europe](/online-coding-classes-europe): For families near the borders.
- [How we teach](/how-we-teach): What happens in a live class.

## Contact

Book the free first class at [https://learn.modernagecoders.com/coding-and-ai-classes-in-trier-germany](https://learn.modernagecoders.com/coding-and-ai-classes-in-trier-germany#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
