---
title: "Online Coding Classes in Europe, Live and in English"
description: "Live online coding classes in English for children, teens and adults anywhere in Europe: Scratch, Python, AI and web, with times across three European time zones."
canonical: https://learn.modernagecoders.com/online-coding-classes-europe
source: src/pages/online-coding-classes-europe.html
---
> Modern Age Coders runs live online coding classes in English for learners anywhere in Europe: children from 6, teenagers and adults. Courses cover Scratch, Python, AI, web development and school computer science such as the IB and IGCSE. A regular mentor based in India matches the learner's pace and accent, in a group of fifteen to twenty or one to one, at times set in the learner's own European time zone.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / Coding classes in Europe

Europe · Live online · Ages 6 and up

# Online coding classes in Europe, taught in English

A family in Lisbon, a teenager in Warsaw and an engineer in Helsinki can share one thing in an online class: the language. What they do not share is the clock. Europe runs on three standard times, all of them change on the same night twice a year, and our mentors teach from India, where the clock never changes. This page sets out those facts from the EU's own texts and shows how to get class times right.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Who: Children from 6, teens, adults; Where: Anywhere in Europe; Language: English only; Mentors: Based in India; Format: Group or one to one, live; First class: Free. Rated 4.9 across 547 Google reviews.

## Which course should a learner in Europe start with?

One course for younger children, one for teenagers and one for adults. The free first class places each learner at the right level.

- [Coding for Kids](/courses/kids-coding-blocks-masterclass): Ages 6 to 12. Block coding from first games to small apps and AI, with very little reading or typing needed at the start.
- [Python for Teens](/courses/python-complete-masterclass-teens): Ages 13 to 18. The language behind data, AI and most school computer science, from first script to real projects.
- [Python Masterclass for Adults](/courses/python-programming-masterclass-zero-to-advanced-college): Adults of any age. From zero to confident Python, for work, study or a change of career.

## In which language are the classes taught?

In English, and only in English, wherever in Europe the learner lives. We would rather say so at the top of the page than after a first lesson.

### One language, many accents

A class can include a learner who grew up with Portuguese, one with Polish and one with Finnish. Mentors speak clear, unhurried English, check that instructions have landed, and get used to each learner's own accent within a few lessons.

### Code is English already

Python, JavaScript and most other languages use English keywords: if, while, return, print. Error messages are in English. A learner who studies coding in English is learning the words they will meet on every screen anyway.

### What we do not offer

No lessons in German, French, Spanish or any other European language, and no translated materials. If a learner needs teaching in their first language, a local provider is the better choice, and we say that openly.

For most families this turns out to be an advantage rather than a hurdle. A child at an international school already learns in English. A child at a local school practises English for an hour or two a week in a setting where it is useful at once. Adults usually choose English classes deliberately, because the jobs, documentation and online help they want are in English. Our mentors are based in India and teach live over video; how that fits European clocks is the subject of the next section.

## How many time zones does Europe have, and when do the clocks change?

Within the EU, three standard times. All of them change on the same two Sundays and at the same instant, set by an EU directive.

**European standard times and the gap to India (UTC+5:30)**

| Standard time | Winter | Summer | India ahead, winter | India ahead, summer |
|---|---|---|---|---|
| Western European Time: Ireland, Portugal, the United Kingdom | UTC+0 | UTC+1 | 5 h 30 | 4 h 30 |
| Central European Time: 17 EU members, Germany among them | UTC+1 | UTC+2 | 4 h 30 | 3 h 30 |
| Eastern European Time: Bulgaria, Cyprus, Estonia, Finland, Greece, Latvia, Lithuania, Romania | UTC+2 | UTC+3 | 3 h 30 | 2 h 30 |

Sources: European Commission, proposal COM(2018) 639 final of 12 September 2018, footnote on the three time zones; Directive 2000/84/EC on summer-time arrangements, Articles 2 and 3; both read on 3 November 2026 through the EU Publications Office. The gaps to India are our arithmetic, with India at UTC+5:30 all year.

### What the EU texts say

The European Commission wrote in 2018 that the Member States on the European continent stretch over three time zones: Western European Time, Central European Time one hour ahead, and Eastern European Time two hours ahead. It listed eight members on the eastern time, seventeen on the central one, and Ireland, Portugal and the United Kingdom, then still a member, on the western one, with special arrangements for the Azores and the Canary Islands.

Each Member State chooses its own standard time; the EU fixes only when summer time starts and ends.

### One switch, everywhere at once

Directive 2000/84/EC says the summer-time period begins in every Member State at 1.00 a.m. Greenwich Mean Time on the last Sunday in March, and ends at 1.00 a.m. GMT on the last Sunday in October. Because the moment is fixed in GMT, Lisbon, Berlin and Helsinki all change in the same instant, at different local hours.

In 2018 the Commission proposed ending the twice-yearly change. In Germany, at least, the clocks still went back on 25 October 2026, and they go forward on 28 March 2027.

So the gaps between European cities never change: Helsinki is always one hour ahead of Berlin and two ahead of Lisbon. The gap to India is what moves, by exactly one hour, twice a year. A class that starts at 17:00 in Berlin all winter is at 21:30 in India; after 28 March 2027 the same Berlin class is at 20:30 in India. Families notice nothing. The mentor notices everything, which is why time is always agreed in the learner's clock, not ours.

## Why should you never add hours by hand across time zones?

Programmers learn this the hard way, and it is a good first lesson in careful thinking. We use the March 2027 clock change to show it.

**Version 1: the same 17:00 class before and after the clock change** (Python)
```python
from datetime import datetime, timedelta
from zoneinfo import ZoneInfo

INDIA = ZoneInfo("Asia/Kolkata")
cities = ["Europe/Lisbon", "Europe/London", "Europe/Berlin", "Europe/Helsinki"]

# a class at 17:00 local time, the Friday before and the Monday after the clocks change (our example)
for day in ["2027-03-26", "2027-03-29"]:
    for city in cities:
        local = datetime.fromisoformat(day + " 17:00").replace(tzinfo=ZoneInfo(city))
        hand = local.replace(tzinfo=None) + timedelta(hours={"Europe/Lisbon": 5.5, "Europe/London": 5.5, "Europe/Berlin": 4.5, "Europe/Helsinki": 3.5}[city])
        real = local.astimezone(INDIA)
        print(day, city.split("/")[1], "17:00 -> India", real.strftime("%H:%M"), "| winter rule by hand:", hand.strftime("%H:%M"))
```
It prints eight lines, among them 2027-03-26 Berlin 17:00 -> India 21:30 | winter rule by hand: 21:30 and 2027-03-29 Berlin 17:00 -> India 20:30 | winter rule by hand: 21:30. Lisbon, London and Helsinki slip by the same hour.

On Friday 26 March 2027 the rule "add four and a half hours" works for Berlin. On Monday 29 March it is an hour wrong, and so is every other hand rule in the program, because the clocks in all four cities moved on the Sunday between. The program that converts properly asks the time-zone database instead, and the database knows the EU rule. That is the whole lesson in one sentence: store a moment once, in UTC or with its time zone attached, and convert it when you need to show it.

**Version 2: a time that never happens and a time that happens twice** (Python)
```python
from datetime import datetime
from zoneinfo import ZoneInfo

berlin = ZoneInfo("Europe/Berlin")
# 02:30 on 28 March 2027 never happens in Berlin: the clocks jump from 02:00 to 03:00
ghost = datetime(2027, 3, 28, 2, 30, tzinfo=berlin)
there_and_back = ghost.astimezone(ZoneInfo("UTC")).astimezone(berlin)
print("Asked for:", ghost.strftime("%d %b %H:%M"), "| what the clock shows:", there_and_back.strftime("%d %b %H:%M %Z"))

# 02:30 on 31 October 2027 happens twice: fold=0 is the first time, fold=1 the second
for fold in (0, 1):
    t = datetime(2027, 10, 31, 2, 30, tzinfo=berlin, fold=fold)
    print("fold", fold, t.strftime("%H:%M %Z"), "= UTC", t.astimezone(ZoneInfo("UTC")).strftime("%H:%M"))
```
It prints Asked for: 28 Mar 02:30 | what the clock shows: 28 Mar 03:30 CEST, then fold 0 02:30 CEST = UTC 00:30 and fold 1 02:30 CET = UTC 01:30.

**The two awkward nights in Berlin in 2027 (our calculation)**

| Night | What the clock does | The local time 02:30 |
|---|---|---|
| Sunday 28 March 2027 | Jumps from 02:00 to 03:00 | Does not exist; Python moves it to 03:30 summer time |
| Sunday 31 October 2027 | Falls back from 03:00 to 02:00 | Happens twice, an hour apart in UTC |

Our own programs, run with Python 3 and its zoneinfo module on 3 November 2026. The 2027 switch dates follow the EU rule: the last Sunday in March and the last Sunday in October.

Calendar apps, train timetables and payment systems all have to deal with these two nights, and bugs in them are common. Python marks the second 02:30 in October with a flag called fold, so that the program can tell the two apart. We use exactly this example with teenagers and adults because it is real, short and impossible to get right by guessing.

1. **Predict.** Before running Version 1, write down what India time a 17:00 Helsinki class is at on 29 March 2027.
2. **Autumn.** Change the dates to 29 October and 1 November 2027 and explain the result.
3. **Your city.** Add your own European city and check it against your phone.
4. **Going further.** Write a function that warns if a meeting is booked at a local time that does not exist.

## Who takes online coding classes in English from Europe?

Three groups, mostly, and each needs something a little different from a class.

**Typical learners in Europe and where they start (our experience, not a survey)**

| Learner | What they usually want | Where they start |
|---|---|---|
| Children at local schools, 6 to 12 | A creative hobby with real depth, and English practice on the side | Block coding, Scratch, Minecraft or Roblox |
| Pupils at international schools, 11 to 18 | Support with IB or IGCSE computer science, or a stronger portfolio | Python, then the exam course |
| Adults of any age | Skills for work, a change of career or a long-postponed interest | Python, data or web development |

### School computer science in English

Many international schools in Europe teach in English and follow the IB Diploma or Cambridge IGCSE. For their pupils, an English-language class uses the same words as the classroom and the exam.

We teach alongside school; the school course and the exam board decide the grades.

### Adults

Adults often find that a live mentor is what was missing from free online tutorials: someone who notices where they are stuck and does not let them skip it.

One to one is common here, because work and family make a fixed group time hard to keep.

## When can a learner in Europe take a class?

Afternoons, evenings and weekends in every European time zone, because India is two and a half to five and a half hours ahead.

**One class seen in three European clocks and in India, winter 2026 to 2027**

| Western Europe | Central Europe | Eastern Europe | India |
|---|---|---|---|
| 13:15 | 14:15 | 15:15 | 18:45 |
| 15:45 | 16:45 | 17:45 | 21:15 |
| Saturday 08:45 | Saturday 09:45 | Saturday 10:45 | Saturday 14:15 |

Standard (winter) time, from 25 October 2026 until the EU switch on Sunday 28 March 2027; after it, every European column stays the same and India is one hour earlier. Examples only, not fixed batch times.

The free first class is booked in the time zone of your own device, so a learner in Dublin and one in Athens each see their own local times. Groups are formed from learners whose times overlap, which is easy within Europe because the whole continent sits within two hours of itself.

## How learners move forward, at any age

Our own stages, used to place learners and report progress, whatever course they take.

**Learning stages across our courses (ours)**

| Stage | Usually reached | The learner can |
|---|---|---|
| 1. First programs | First weeks | Write and run short programs with the mentor's help |
| 2. Independence | Months 1 to 2 | Solve small tasks alone and read their own error messages |
| 3. Building | Months 3 to 5 | Plan and build a small project with several parts |
| 4. Depth | Months 6 to 9 | Use data structures and libraries, and test what they build |
| 5. Own work | Month 10 onwards | Take on a project of their own choosing and explain every part |

### For learners

When a time looks odd, convert it through UTC before you argue about it.
Read the error message to the end. In any language, it is the most useful line on the screen.

### For parents

Check the class time in your own clock the week after the clocks change. It should not have moved.
Ask your child what they built this week, then ask what went wrong while building it.

## Nine more courses for learners in Europe

Live, in English, with the same mentor each week, as a group or one to one.

### Children

Ages 6 to 12

- [Scratch coding](/courses/scratch-programming-complete-course): Games and stories built from blocks.
- [Roblox game coding](/courses/roblox-game-coding-for-kids-lua-course): Real Luau scripts in Roblox Studio.
- [Python and AI for kids](/courses/python-ai-kids-masterclass): First typed code, with games and AI.

### International school pupils

Ages 13 to 18

- [IB Computer Science](/courses/ib-diploma-computer-science-course): Support with the IB Diploma course.
- [IGCSE Computer Science](/courses/igcse-computer-science-0478-course): Cambridge 0478, theory and programming.
- [AI and machine learning for teens](/courses/ai-ml-masterclass-teens): Models built and tested from scratch.

### Adults

Ages 18 and up

- [Data analysis](/courses/data-analysis-mastery-course-college): Excel, SQL, Python and BI.
- [Full stack web development](/courses/full-stack-web-development-masterclass-college): React, Node.js and deployment.
- [Python automation](/courses/python-ai-automation-masterclass-college): Scripts that save hours of work.

## How live online classes work for learners in Europe

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Afternoons** After school in every European time zone.
- **Evenings** Early evenings for adults after work.
- **One to one** A time agreed with the mentor, in your clock.

- **English only** Clear and patient, for every accent.
- **Your own clock** Times agreed in your European time zone.
- **Live mentor** Someone who sees your screen as you work.
- **Same person** One mentor who follows your progress.
- **All ages** From six year olds to working adults.
- **Your choice** Fifteen to twenty learners, or one alone.

## Fees for online coding classes in Europe

One monthly fee buys eight live classes. This page lists it in euro, using the European Central Bank reference rate, and the charge is made in US dollars, so your bank converts it and the amount you see on your statement may be a little higher or lower.

- Free first class: Free. A free first class. A short task to find the right level. No card asked for.
- Group batch: €90 (charged in US dollars) a month. Fifteen to twenty learners at a similar level. A regular mentor. Two live classes a week. Monthly, with no long contract.
- One to one: €134 (charged in US dollars) a month. One learner with one mentor. Goals and pace set by the learner. Times that fit your week.

## Online coding classes in Europe: common questions

### Are the classes in German or another European language?

No. All classes are live and in English only, with mentors based in India who adapt to the learner's pace and accent. We do not offer lessons in German, French, Spanish or any other language.

### Which countries in Europe can learners join from?

Anywhere with a stable internet connection. Classes are online and times are agreed in the learner's own time zone, whether that is Western, Central or Eastern European Time.

### How many time zones does Europe have?

The European Commission described three standard times for the EU's continental territories in 2018: Western European Time (GMT), Central European Time (GMT+1) and Eastern European Time (GMT+2), with special arrangements for the Azores and the Canary Islands.

### Do class times change when the clocks change?

Not in your clock. Under Directive 2000/84/EC all EU countries change at 1.00 a.m. GMT on the last Sunday in March and October. India does not change, so the gap to the mentor moves by an hour, and the mentor adjusts.

### What ages do you teach?

Children from 6, teenagers and adults of any age, each in courses designed for their stage.

### Can you help with IB or IGCSE computer science?

Yes. We teach alongside the school course for the IB Diploma and Cambridge IGCSE Computer Science, in English. The school and the exam board decide the grades.

### When are the classes?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Across Europe that usually means afternoons, evenings or weekend mornings.

### Which currency do I pay in?

Fees are shown in euro at the European Central Bank reference rate and charged in US dollars, which your bank converts, so your statement can differ slightly. The first class is free.

### Are classes live or recorded?

Live, every time, with a mentor in a group of fifteen to twenty or one to one. There are no pre-recorded courses.

### Is my English good enough?

Usually, yes. Much of every lesson is shared code on screen, and mentors speak slowly and rephrase whenever needed. The free first class is the easiest way to find out.

## Related pages

- [Coding classes in Germany](/coding-classes-in-germany): All our pages for Germany.
- [Coding classes in the Netherlands](/coding-classes-in-netherlands): For families and learners in the Netherlands.
- [Coding classes in Ireland](/coding-classes-in-ireland): For learners in Ireland.
- [Online coding for kids in the UK](/online-coding-classes-for-kids-uk): For families in the United Kingdom.
- [Abitur maths in English](/abitur-maths-in-english): German upper-school maths, taught in English.
- [How we teach](/how-we-teach): What a live class looks like.

## Contact

Book the free first class at [https://learn.modernagecoders.com/online-coding-classes-europe](https://learn.modernagecoders.com/online-coding-classes-europe#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
