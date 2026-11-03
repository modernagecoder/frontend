---
title: "Coding and AI Classes in Gütersloh: Live Online, in English"
description: "Coding and AI classes in Gütersloh for children, teens and adults: live online in English, a first project per age, NRW school facts and a charging data project."
canonical: https://learn.modernagecoders.com/coding-and-ai-classes-in-guetersloh-germany
source: src/pages/coding-and-ai-classes-in-guetersloh-germany.html
---
> Modern Age Coders gives Gütersloh learners live coding and AI lessons online, always in English. Six to twelve year olds start in Scratch and move to Python; teenagers learn data handling and machine learning; adults learn Python, analysis and how to use AI tools they can verify. Each learner has one mentor based in India who works at their pace and gets used to their accent. Classes of fifteen to twenty or one to one, at afternoon, evening or weekend times.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / Gütersloh

Gütersloh · Coding and AI · Children, teens, adults

# Coding and AI classes in Gütersloh

Ask who runs the public charging points in Gütersloh and most people guess "lots of companies". The register says something sharper: one operator holds more than a third of them, and fewer than half of all operators hold four fifths. Finding that out takes a short Python program and one idea, sorting and then adding up shares, that also explains a great deal about the data AI systems learn from. This page is for Gütersloh learners of every age: a first project for each, that charging project, what NRW schools teach, and the hours at which our English-language lessons can run.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Ages: 6 to 12, 13 to 18, adults; Children: Scratch, then typed Python; Teens and adults: Python, data, then AI; Gütersloh times: Afternoons, evenings, weekends; Teachers: Mentors based in India; First class: Free, no card needed. Rated 4.9 across 547 Google reviews.

## Where Gütersloh learners begin

A starting course for each age band; experience can change the choice, which is what the first lesson is for.

- [Python and AI for Kids](/courses/python-ai-kids-masterclass): For children from about 9. Real typing from the first lesson, pictures and games, then little programs that sort examples into groups.
- [Python for Teens](/courses/python-complete-masterclass-teens): For 13 to 18. Python properly, up to files and data projects, the base every AI course after it builds on.
- [Data Analysis for Adults](/courses/data-analysis-mastery-course-college): For adults. Spreadsheets, SQL and Python for the kind of tables found at work, before any AI tool is trusted with them.

## What can a Gütersloh learner build with coding and AI at 8, 15 or 45?

Something real at every age. The examples below are typical first projects in our classes, each chosen to teach one lasting idea.

**Typical first projects by age, and the idea each one teaches (our own examples)**

| Age | A first project | The idea it teaches | Course |
|---|---|---|---|
| 6 to 8 | A Scratch story where characters take turns to speak | Steps happen in order | Coding for Kids |
| 9 to 12 | A Python quiz that keeps score | Variables remember things | Python and AI for Kids |
| 13 to 15 | A program that sorts a class list and finds the top three | Sorting comes before ranking | Python for Teens |
| 16 to 18 | A model that guesses a label from examples and reports how often it is right | Test on data the model has not seen | AI and Machine Learning for Teens |
| Adults | A script that totals a monthly export and flags odd rows | Let the computer do the dull checks | Data Analysis |

Our own course examples. The project below, on charging points, is usually done at around 13 by teenagers and in the first month by adults.

### AI, by the rules of each age

The companies behind AI tools set minimum ages in their terms. OpenAI allows ChatGPT from 13, with a parent's permission until 18; Anthropic allows Claude from 18. Our children's courses need no AI account, our teenage courses keep to OpenAI's rule, and Claude appears only in adult courses.

Every limit is quoted and dated in our [AI tools age guide](/ai-tools-age-guide).

### When AI is not allowed

Some contests forbid it outright. The Bundeswettbewerb Mathematik, open to pupils on a track to the Abitur, lists using artificial intelligence to solve its problems or to check one's own solutions among the things participants may not do. Its first round sets four problems and allows groups of up to three; at least three correct solutions are needed for a prize.

That is a useful reminder: the goal is a learner who can think without the tool, and use it well when it is allowed.

## How many operators run most of Gütersloh's public charging points?

Germany's network regulator, the Bundesnetzagentur, lists public charging stations in a register that anyone may reuse under CC BY 4.0. With its 134 Gütersloh entries, learners use one of the most useful patterns in data work: sort from largest to smallest, then keep a running share.

### The data

Our copy carries the date 1 September 2026 and was fetched on 3 November 2026. Only operators who have finished reporting to the regulator appear in it, so a few Gütersloh stations may be absent.

We kept the 134 rows whose place is Gütersloh, all in operation, and saved them as guetersloh_charging.csv. Each row names the operator and the number of charging points. Between them: 262 points and 39 operators.

### The question

With 39 operators, a natural guess is that each runs a small share. The program adds up the points per operator, sorts the operators from largest to smallest, and keeps a running total as it goes down the list.

It stops as soon as the running total passes 80 percent and reports how many operators that took.

**Version 1: sort, then add up the shares** (Python)
```python
import csv

points = {}
with open("guetersloh_charging.csv", encoding="utf-8") as fh:
    for row in csv.DictReader(fh):
        points[row["operator"]] = points.get(row["operator"], 0) + int(row["points"])

total = sum(points.values())
print("Operators:", len(points), " charging points:", total)

running = 0
for rank, (name, n) in enumerate(sorted(points.items(), key=lambda p: p[1], reverse=True), start=1):
    running += n
    if rank <= 3 or running / total >= 0.8:
        print(rank, n, f"{100 * running / total:.1f}%")
    if running / total >= 0.8:
        break
```
It prints Operators: 39 charging points: 262, then 1 94 35.9%, 2 16 42.0%, 3 14 47.3% and 16 4 80.2%.

The largest operator, the town's own utility company, Stadtwerke Gütersloh, runs 94 of the 262 points, 35.9 percent on its own. The next two add only 16 and 14. By the sixteenth operator the running share reaches 80.2 percent, so 16 of 39 operators, about two in five, hold four fifths of all public charging points in the register. The other 23 share the remaining fifth. Analysts call this kind of check a Pareto analysis, after the observation that a few often account for most.

**Version 2: the long tail** (Python)
```python
singles = sum(1 for n in points.values() if n == 1)
print("Operators with a single charging point:", singles)
half = 0
for rank, n in enumerate(sorted(points.values(), reverse=True), start=1):
    half += n
    if half * 2 >= total:
        print("Operators needed for half of all points:", rank)
        break
```
It prints Operators with a single charging point: 5 and Operators needed for half of all points: 4.

**How quickly the share builds up when Gütersloh operators are taken largest first**

| Operators, largest first | Points they run | Running share |
|---|---|---|
| Largest 1 | 94 | 35.9% |
| Largest 3 | 124 | 47.3% |
| Largest 4 | 136 | 51.9% |
| Largest 16 | 210 | 80.2% |
| All 39 | 262 | 100% |

Rows taken from the Bundesnetzagentur charging register (version dated 1 September 2026, fetched 3 November 2026) where the place is Gütersloh; reused under CC BY 4.0 with credit to Bundesnetzagentur.de. Ranking, totals and percentages are worked out by us.

Why does this belong on a page about AI? Because data for AI is usually lopsided in exactly this way. In a pile of text, a handful of words make up a large part of everything written; in a pile of photos, a few kinds of picture dominate. A model trained on such data sees the head of the list thousands of times and the tail hardly at all, so it tends to do well on common cases and poorly on rare ones. A learner who has sorted and added up shares by hand knows to ask, before training anything, how the examples are spread.

1. **Children, 8 to 12.** Count the colours of 30 sweets, sort the colours from most to fewest, and add them up in order. After how many colours have you reached 24 sweets?
2. **Teenagers.** Run both versions, then change the stopping point to 50 percent and check that you get 4.
3. **Adults.** Do the same for any list at work: customers, products or support tickets. How many items make up four fifths?
4. **Going further.** Repeat the analysis counting stations instead of charging points. Does the largest operator's share go up or down, and why?

## What Informatik do Gütersloh schools teach?

Gütersloh follows North Rhine-Westphalia's rules. Three facts sum them up.

1. **Everyone starts at ten or eleven.** In NRW, two years of Informatik, grades 5 and 6, are part of every general school's timetable, as the Informatik-Monitor records.
2. **After that, it is chosen.** Pupils at a nine-year Gymnasium can pick it again later in lower secondary, and in the final two years a school may run a three-hour or a five-hour course.
3. **The Abitur exam is on paper.** Written Informatik tasks are set centrally and answered without a computer. In 2027 the written Abitur exams run from 13 April to 5 May.

Checked on 2 November 2026 against the NRW entry of the Gesellschaft für Informatik's monitor and the NRW school ministry's pages on the 2027 Abitur and on the ZP10, the central end-of-grade-10 tests in German, maths and English.

Our classes work alongside school and never replace it; marks and the Abitur come from school alone. Gütersloh pupils with Informatik on their timetable may like our [Informatik companion for Klasse 5 to 10](/courses/informatik-companion-course-klasse-5-10) or the [Informatik Abitur course](/courses/informatik-abitur-course-java-python), which practise reading code on paper. The [North Rhine-Westphalia page](/coding-classes-in-north-rhine-westphalia) has the wider picture.

## When are classes in Gütersloh time?

Afternoons for pupils, early evenings for adults, and weekend slots for everyone. The mentor's day in India runs several hours ahead.

**Four example Gütersloh slots on the mentor's clock**

| Gütersloh | India this winter | India from 28 March 2027 |
|---|---|---|
| 15:50 | 20:20 | 19:20 |
| 17:35 | 22:05 | 21:05 |
| Saturday 16:00 | 20:30 | 19:30 |
| Sunday 08:30 | 13:00 | 12:00 |

Winter time (UTC+1) has applied in Gütersloh since 25 October 2026 and summer time (UTC+2) returns on 28 March 2027, as the Einheitenzeitgesetz provides, while India never leaves UTC+5:30. Illustrative rows only.

NRW school holidays in 2026/27, according to the Kultusministerkonferenz: 17 to 31 October 2026, 23 December 2026 to 6 January 2027, 22 March to 3 April 2027, the single day of 18 May 2027, and 19 July to 31 August 2027. Lessons run through the holidays unless you pause them. Learners join from all over Gütersloh and from nearby Rheda-Wiedenbrück, Harsewinkel, Verl, Herzebrock-Clarholz and Bielefeld.

## How progress is tracked

Our own stages, the same for every age, so that each learner knows what comes next.

**Stages in coding and AI (ours)**

| Stage | Typical time | Evidence |
|---|---|---|
| Instructions | First weeks | A program that does exactly what was planned |
| Loops and choices | First months | A game or script that repeats and decides |
| Sorting and shares | Months 3 to 5 | A ranked list with a running total, explained |
| A tested model | Months 5 to 9 | A model checked on examples it never saw |
| Own project | Later | A project another person can run and question |

### For parents

Stage three is where the charging project sits; children who learn to sort before they rank carry the habit into every subject.
Updates describe the projects themselves, not time online.

### For adult learners

When a list is long, sort it and add up shares before drawing any conclusion.
Before training a model, look at how the examples are spread.

## Nine more courses for Gütersloh learners

Live, in English, with one mentor, in a class or one to one.

### Children

Ages 6 to 12

- [Coding for kids](/courses/kids-coding-blocks-masterclass): Scratch stories and games, then more.
- [Hackathon for kids](/courses/hackathon-prep-for-kids-coding-innovation-ai-projects-course): A team project with a deadline, 8 to 12.
- [AI literacy](/courses/ai-literacy-for-kids-course): How AI learns, for 8 to 14.

### Teenagers

Ages 13 to 18

- [Machine learning for teens](/courses/ai-ml-masterclass-teens): Training and testing real models.
- [Hackathon for teens](/courses/hackathon-prep-for-teens-coding-ai-build-innovate-win-course): Building fast, in a team, 13 to 17.
- [Olympiad maths](/courses/olympiad-competition-mathematics-mastery): Proof and problem solving for contests.

### Adults

Ages 18 and up

- [Data and AI for non-programmers](/courses/data-and-ai-analytics-for-non-programmers-course): Analysis without writing code first.
- [Python automation](/courses/python-ai-automation-masterclass-college): Scripts for the repetitive parts of work.
- [Copilot Studio agents](/courses/ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals): Agents for professionals, one to one.

## How live classes run for Gütersloh learners

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Pupils** Afternoon lessons once school is over.
- **Working adults** Early evening lessons on weekdays.
- **One to one** A slot of your choice, including weekends.

- **Learner types** The mentor guides; hands stay on the learner's keyboard.
- **Real data early** Public datasets from the first months.
- **Patient English** Explained again, more simply, if needed.
- **One mentor** The same person from start to finish.
- **Age-correct AI** Tools only where their terms allow.
- **Class or private** Fifteen to twenty learners, or one.

## Fees for learners in Gütersloh

Each month's fee pays for eight live classes. The euro shown is our US dollar price converted at the ECB reference rate; since the card is charged in dollars, your bank's conversion decides the final euro figure.

- Free first class: Free. A free first class. A starter task for the learner's age. No card required.
- Group batch: €90 (charged in US dollars) a month. Fifteen to twenty learners of similar age. One mentor for the whole course. Two classes a week. Monthly, no fixed term.
- One to one: €134 (charged in US dollars) a month. One learner, one mentor. Goals you set. Times you agree.

## Coding and AI classes in Gütersloh: common questions

### Are the classes in German?

No. Lessons are live and in English only. The mentor adapts speed and accent to the learner and rephrases when something is unclear. Programming keywords are English words anyway.

### Which age group should we book?

Children of 6 to 12 start with Scratch and then Python, teenagers with Python and data, adults with Python or data analysis. The free first class confirms the right group.

### Does NRW teach Informatik at school?

It does, for two years: grades 5 and 6 are compulsory everywhere, says the Informatik-Monitor 2026/27. From grade 7 pupils choose, and in the Oberstufe it can become an Abitur subject.

### Will my child use AI tools?

Below 13, no AI accounts at all; OpenAI's own minimum is 13, with parental consent until 18, and Anthropic's is 18. Under-13s instead make little programs that learn, which shows them what is inside the tools.

### Can AI help with maths contests?

Not in every contest. The Bundeswettbewerb Mathematik lists using artificial intelligence to solve its problems or to check solutions among the things participants must not do.

### When are classes in Gütersloh time?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Pupils usually take afternoons and adults early evenings.

### Where are the mentors?

India. They teach over live video; a 17:35 class in Gütersloh is 22:05 for them this winter and 21:05 once German summer time starts.

### How do payments work?

A monthly payment in US dollars. Our euro display is a conversion at the ECB reference rate, so your bank's own exchange can land a little above or below it. The first class has no charge.

### What is the charging point project?

Learners take the 262 Gütersloh charging points in the national register, run by 39 operators. Sorting operators by size and adding up shares shows that the largest holds 35.9 percent and 16 operators hold 80.2 percent.

### Can adults start from nothing?

Yes. Adult courses begin with the first line of code, or with data analysis without code for those who prefer.

## Related pages

- [Coding classes in Germany](/coding-classes-in-germany): Every Germany page, sorted by place.
- [Coding classes in North Rhine-Westphalia](/coding-classes-in-north-rhine-westphalia): The Land's rules and holidays.
- [AI course for school students](/ai-course-for-school-students-germany): For pupils who want to build models.
- [Mathematik-Olympiade preparation](/math-olympiad-germany-preparation): Contest maths, without AI shortcuts.
- [Coding for adults in Germany](/coding-classes-for-adults-germany): Starting late, learning properly.
- [How we teach](/how-we-teach): One live class in detail.

## Contact

Book the free first class at [https://learn.modernagecoders.com/coding-and-ai-classes-in-guetersloh-germany](https://learn.modernagecoders.com/coding-and-ai-classes-in-guetersloh-germany#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
