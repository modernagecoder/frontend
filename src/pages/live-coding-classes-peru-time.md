---
title: "Live Coding Classes in Peru Time: How Flexible Hours Work"
description: "How live online coding classes in English fit Peru time: UTC-5 all year, India 10 hours 30 ahead, flexible hours booked on your own clock, with example conversions."
canonical: https://learn.modernagecoders.com/live-coding-classes-peru-time
source: src/pages/live-coding-classes-peru-time.html
---
> Modern Age Coders teaches live, online classes in English from India, and families in Peru book them at any hour that suits them. Peru keeps UTC minus 5 all year (IANA zone America/Lima, official time kept by INACAL) and India keeps UTC plus 5:30, so India is always 10 hours 30 minutes ahead. Neither country changes its clocks, so a class booked at 17:00 in Peru stays at 17:00 every month. You pick the hour in Peru time, in a group or one to one, and the mentor works to it.

[Home](/) / [Courses](/courses) / [Coding and AI classes in Peru](/coding-and-ai-classes-in-peru) / Class times in Peru

Peru · Time and scheduling · Live, in English

# Live coding classes in Peru time

Our mentors teach from India and our students learn from Lima, Arequipa, Cusco, Piura and everywhere between. The clocks are ten and a half hours apart, and that sounds harder than it is. This page explains how the two clocks relate, who keeps Peru's official time, how you book a class in your own clock, and why an hour you choose in March is still the same hour in August.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Peru time: UTC minus 5, all year; India time: UTC plus 5:30, all year; The gap: India 10 h 30 min ahead; Clock changes: None in either country; Booking: In your own Peru clock; Class hours: Any day, any time. Rated 4.9 across 547 Google reviews.

## Three courses families in Peru often book first

One for children, one for teenagers and one for adults. Each runs at the hours you choose in Peru time.

- [Coding for Kids](/courses/kids-coding-blocks-masterclass): Ages 6 to 12, grouped by age. Block coding from stories to games and small apps; most families pick late afternoon or summer mornings in Peru.
- [Python for Teens](/courses/python-complete-masterclass-teens): Ages 13 to 18. From the first line of Python to real projects; teenagers often book after the school shift or at weekends.
- [Python from Zero to Advanced](/courses/python-programming-masterclass-zero-to-advanced-college): For university students and working adults. Early-morning and evening Peru hours are both possible, around lectures or a job.

## Who needs to know how Peru time and India time fit together?

Anyone in Peru thinking about live classes with mentors in India: parents booking for a child, teenagers organising their own week, and adults fitting lessons around work.

### Parents

You want a class at an hour your child is fresh, not squeezed between school and dinner. You need to know that the hour will not drift and that nobody will ask you to convert anything.

### Teenagers

Your timetable changes with every school year and every exam season. You want to know how easy it is to move a class and what happens around holidays.

### Adults

You work Peru office hours, perhaps with colleagues in other countries. You want a class before work, after work or at lunch, and to know what that means for the teacher.

If you read Spanish more easily, our page [clases de programación en inglés en Perú](/clases-de-programacion-en-ingles-peru) explains the classes themselves in Spanish. All lessons, whatever page you read, are live and taught in English.

## What time zone is Peru in, and does it change in summer?

Peru uses UTC minus 5 all year and has not changed its clocks for summer since 1994. Three official records, each from a different keeper, say the same thing.

**Three official records of the clock in Peru, and what each one shows**

| Record | Kept by | What it shows |
|---|---|---|
| tz database, zone America/Lima | IANA (the time zone database used by computers and phones) | Standard offset minus 5:00; the last summer-time rule for Peru ran from 1 January to 1 April 1994 |
| Official-time clock feed | INACAL, Peru's national quality institute, which keeps official time | Read at 16:24:04 UTC on 8 November 2026, it gave 11:23:57, five hours behind UTC |
| Compendio Estadístico Perú 2026, cuadro 1.3 | INEI, from Instituto Geofísico del Perú data | When it is 12:00 noon in Lima, it is 10:30 p.m. in Delhi, Mumbai (Bombay in the table) and Kolkata (Calcuta) |

Sources: IANA tz database, file southamerica (Zone America/Lima, Rule Peru); INACAL, hourServer2.php clock feed on www.inacal.gob.pe; INEI, Compendio Estadístico Perú 2026, tomo 1, cuadro 1.3. All read on 8 and 9 November 2026.

### Why the computer record matters

Your phone, your laptop and our booking system all take their time rules from the same tz database. Its entry for Lima is short: a local mean time until 1908, then UTC minus 5, with occasional summer-time rules that stopped after 1994.

That is why a booking made in Peru time never jumps by an hour in October or March the way bookings do in countries with daylight saving. There is simply no switch to make.

### Why the official record matters

INACAL is the body that keeps official time in Peru, and its own clock feed matched UTC minus 5 when we read it. INEI's statistical compendium, using data from the Instituto Geofísico del Perú, prints the same gap to India: noon in Lima, 10:30 at night in Delhi.

One small curiosity from that INEI table: Lima sits at longitude 77°02' west and Delhi at 77°15' east. The cities are almost mirror images either side of the Greenwich meridian, which is part of why their clocks sit so far apart.

## How far ahead of Peru is India, and when does the date change?

India is 10 hours 30 minutes ahead of Peru on every day of the year. From 13:30 in Peru onwards, it is already the next calendar day in India.

### Where the half hour comes from

Most of the world's time zones are whole hours from UTC. India chose a single zone half-way between two, at UTC plus 5:30. Peru is a whole-hour zone at UTC minus 5. Add the two distances together and you get ten and a half hours.

The half hour catches people out. Adding ten hours in your head is easy; remembering the extra thirty minutes is where mistakes happen, as the Python example further down shows.

### Where the date line falls

At 13:30 in Peru it is exactly midnight in India. Any class you book after 13:30 Peru time happens on the next date for the mentor. That changes nothing for you: you see your own date and your own hour.

It does explain why mentors can teach your afternoon and evening: for them it is night or early morning, and they choose to work those hours so that learners in the Americas get the times they want.

**Example Peru hours and the same moment in India (conversions only; not a timetable and not a list of fixed classes)**

| Peru time | India time | Day in India |
|---|---|---|
| 06:00 | 16:30 | Same day |
| 09:00 | 19:30 | Same day |
| 13:30 | 00:00 | Next day (exactly midnight) |
| 18:00 | 04:30 | Next day |
| 21:00 | 07:30 | Next day |

Conversions computed by us with Python's zoneinfo for 20 January 2027 and checked against 20 July 2027; both dates give the same result because neither zone changes.

## How does flexible scheduling work for a family in Peru?

Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. In practice it goes like this.

1. **Tell us the hours that suit you, in Peru time.** On the form or on WhatsApp, write them as you would for anyone in Peru: "weekdays after 16:00", "Saturday mornings", "before 08:00". You never need to convert.
2. **Book the free class on your own clock.** Our booking page shows times in the time zone of the device you are using, so in Peru you see Peru hours. The mentor sees the same moment in India time.
3. **Choose a group or one to one.** A group of fifteen to twenty learners of similar age and level runs at hours agreed for that group; one-to-one lessons are set entirely around you.
4. **Meet your mentor.** The mentor who takes the free class, or one matched to the hours you gave, teaches the course. The same person teaches you week after week.
5. **Keep the hour all year.** Because neither country changes its clocks, the hour you start with stays the same through the school year and the summer.
6. **Change it when life changes.** A new school shift, an exam season or a new job: tell us, and we look for a new hour or a different group.

There is no published Peru class grid, and we never promise a particular weekend group in advance, because hours are set around the learners who join. The examples on this page are conversions, so you can see what an hour means on both sides.

## Which hours suit a school day in Peru?

It depends on the school shift and the time of year. Two MINEDU documents explain most of what families tell us.

### The school year

MINEDU's norm for 2026, RM 501-2025-MINEDU, set thirty-six teaching weeks: the first block ran from 16 March and the last ended on 18 December 2026, with management weeks from 2 to 13 March before pupils returned.

So January and February sat outside the 2026 school calendar. Families often move classes to mornings in those months, then back to afternoons in March. With no clock change in Peru or India, only your own routine moves.

### The school day

The CNEB counts school time in teaching periods of 45 minutes. Secundaria schools on the full school day, the Jornada Escolar Completa, have 45 periods a week, so their pupils are home later than those on the regular day.

That is why families tell us their child's shift before we suggest an hour. Morning-shift pupils often take classes after lunch; full-day pupils prefer evenings or Saturday; younger children learn most before about 18:30.

Getting online is rarely the problem in the cities. INEI found that 92.4% of people aged 6 and over in Lima Metropolitana used the internet in the second quarter of 2026, against 86.1% in the rest of urban Peru and 63.7% in rural areas. For the summer, our [summer holiday coding classes](/peru-summer-holiday-coding-classes-online) page suggests what to do with the free months.

## Can adults in Peru take live classes before or after work?

Yes. Early mornings in Peru are evenings in India, and Peru evenings are early mornings in India, so both ends of a working day are open.

### Before work

A class from 06:00 to 08:00 in Lima is 16:30 to 18:30 in India: a comfortable working afternoon for a mentor. Professionals who like to learn before the day starts often take this slot one to one.

Lunchtime works too. A class at 12:00 in Peru is 22:30 in India, which some of our mentors are happy to teach.

### After work

Evenings in Peru from 19:00 to 22:00 are 05:30 to 08:30 the next morning in India. Mentors who teach the Americas plan their day around exactly these hours.

Adults in Lima also tend to be comfortable in English: in the EF English Proficiency Index 2025, Lima scored 555, in EF's "high" band. For more on courses around a job, see [AI and coding for professionals in Peru](/ai-and-coding-for-professionals-peru).

## How can you check a class time between Peru and India in Python?

With the zoneinfo module, which uses the same tz database as your phone. We use this small lesson with teenagers and adults: it is real code, and it shows why clock arithmetic belongs to the computer.

### Aware times, not naive ones

A Python datetime with no zone attached is "naive": it is a number on a clock face with no place. Attach ZoneInfo("America/Lima") and it becomes "aware": a real moment that can be shown in any other zone.

astimezone() then converts the moment to India time, including the date. We try three Lima times on 20 January and 20 July 2027, to test the claim that nothing changes between the seasons.

### What to look for

The %z code prints each offset. If Peru used summer time, January and July would show different offsets. If the date line works, 16:45 in Lima should land on the next day in India.

The run below shows both. Then a second script starts from the mentor's side, the way a teacher in India might offer a slot, and compares the right answer with a quick sum done by hand.

**Version 1: three Lima times in January and July, converted to India time** (Python)
```python
from datetime import datetime
from zoneinfo import ZoneInfo

lima = ZoneInfo("America/Lima")
india = ZoneInfo("Asia/Kolkata")

for day in [(2027, 1, 20), (2027, 7, 20)]:
    for hour, minute in [(7, 30), (13, 0), (16, 45)]:
        here = datetime(*day, hour, minute, tzinfo=lima)
        there = here.astimezone(india)
        print(here.strftime("%d %b %H:%M Lima"), "->", there.strftime("%d %b %H:%M India"),
              "| offsets", here.strftime("%z"), there.strftime("%z"))
```

**What Version 1 prints** (Output)
```output
20 Jan 07:30 Lima -> 20 Jan 18:00 India | offsets -0500 +0530
20 Jan 13:00 Lima -> 20 Jan 23:30 India | offsets -0500 +0530
20 Jan 16:45 Lima -> 21 Jan 03:15 India | offsets -0500 +0530
20 Jul 07:30 Lima -> 20 Jul 18:00 India | offsets -0500 +0530
20 Jul 13:00 Lima -> 20 Jul 23:30 India | offsets -0500 +0530
20 Jul 16:45 Lima -> 21 Jul 03:15 India | offsets -0500 +0530
```
Exact output when we ran it with Python 3 (python3 -I). The offsets are -0500 and +0530 in both months, and 16:45 in Lima is 03:15 the next day in India.

**Version 2: a slot offered in India time, and the same sum done carelessly** (Python)
```python
from datetime import datetime, timedelta
from zoneinfo import ZoneInfo

lima = ZoneInfo("America/Lima")
india = ZoneInfo("Asia/Kolkata")

# A mentor offers 06:00 India time on Thursday 21 January 2027.
slot = datetime(2027, 1, 21, 6, 0, tzinfo=india)
print("Mentor's clock:", slot.strftime("%A %d %B, %H:%M"))
print("Family's clock:", slot.astimezone(lima).strftime("%A %d %B, %H:%M"))

# The same sum done by hand, with a naive time and no zone.
naive = datetime(2027, 1, 21, 6, 0) - timedelta(hours=10)
print("Hand sum, forgot the half hour:", naive.strftime("%A %d %B, %H:%M"))
```

**What Version 2 prints** (Output)
```output
Mentor's clock: Thursday 21 January, 06:00
Family's clock: Wednesday 20 January, 19:30
Hand sum, forgot the half hour: Wednesday 20 January, 20:00
```
Exact output of our run. The correct conversion gives 19:30 on Wednesday in Peru; subtracting ten hours by hand and forgetting the half hour gives 20:00, thirty minutes late.

**The hand sum was off by exactly the half hour that makes the Peru and India gap unusual.** Nothing crashed and nothing looked wrong; the answer was simply thirty minutes late. That is the kind of error we train learners to expect from any confident shortcut, whether it is their own mental arithmetic or a line of code an AI tool suggests. Our booking system converts times this way, with zones attached, which is why you never have to.

1. **Our practice, predict.** Before running anything, work out the India time for 13:30 in Lima. Then check it in Python. What is special about the answer?
2. **Our practice, reverse.** Change Version 2 so the mentor offers 21:00 India time on a Saturday. What day and hour is that in Peru?
3. **Our practice, a loop.** Print every whole hour from 06:00 to 22:00 in Lima with its India time, and mark the rows where India is on the next day.
4. **Our practice, explain.** In two English sentences, say why a naive datetime is risky for anything involving two countries.

## What if we travel or move within Peru?

Within Peru, nothing changes: the whole country is one time zone. Outside Peru, tell your mentor before you go.

### Inside Peru

Tumbes, Lima, Cusco, Iquitos and Puno all keep the same clock, so a family who moves from Trujillo to Arequipa keeps its class hour exactly. Only the internet connection needs checking.

The same is true for holidays inside the country. A class at 17:00 is at 17:00 whether your child is at home in Lima or at their grandparents' house in Huancayo.

### Outside Peru

If you travel to a country with a different clock, our booking page shows the class in the zone of your device, but the class itself does not move. Let your mentor know, and agree whether to keep the hour, move it or pause.

Families in Lima from abroad, including many at international schools, will find more about classes for them on our [English-medium coding classes in Lima](/english-medium-coding-classes-lima) page.

## How might a family in Peru plan class hours across a year?

One example, written by us for a child in a morning school shift. It shows how hours shift with the school calendar; it is not a timetable, and your own plan is set with you.

**An example year of class hours for a child in Peru (our illustration, not a schedule)**

| Period | Example Peru hour | Same moment in India | Why it changes |
|---|---|---|---|
| January and February | 09:00 | 19:30 | No school; mornings are fresh |
| March to mid-May | 16:00 | 02:30, next day | School is back; after lunch and a rest |
| A one-week break | 10:00 | 20:30 | An extra morning class if wanted |
| Mid-year break | 09:30 | 20:00 | Two weeks free of school |
| August to December | 16:00 | 02:30, next day | Back to the term-time hour |

### For parents

Choose the term-time hour first, because it lasts longest. Holiday hours are a bonus, not a requirement.
Tell us about exam weeks early. Moving a class for a week is easy when it is planned.

### For learners

Pick the hour when your head is clearest, not the hour that is left over.
If a class hour stops working, say so. Hours can change; a tired learner learns little.

## Nine more courses taught at Peru-friendly hours

Every course is live and in English, and every one can run at the hours you choose, in a group or one to one.

### Children

Ages 6 to 12

- [Scratch Coding for Kids](/courses/scratch-programming-complete-course): Blocks to games in about three months.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass): Typed code for nine to twelve year olds.
- [Elementary maths](/courses/elementary-mathematics-complete-masterclass): Grades 1 to 5, placed by level.

### Teenagers

Ages 13 to 18

- [AI and machine learning](/courses/ai-ml-masterclass-teens): From Python to real models.
- [Java for teens](/courses/java-programming-masterclass-for-teens): Object-oriented programming, step by step.
- [IGCSE mathematics](/courses/igcse-mathematics-mastery): For Cambridge-curriculum students in Peru.

### Adults

University and work

- [Generative AI](/courses/complete-generative-ai-masterclass-college): How modern AI works, and how to use it well.
- [AI coding agents](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals): Working with coding agents, for adults.
- [Data science](/courses/data-science-complete-masterclass-college): Python, statistics and real datasets.

## How hours are set for learners in Peru

Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.

- **Mornings** Peru mornings are India evenings: easy for both sides.
- **Afternoons and evenings** India is past midnight; our mentors teach these hours by choice.
- **1-on-1** Any hour you name, set around one learner.

- **Your clock only** Every time we send you is in Peru time.
- **No seasonal shift** Neither country changes clocks, so hours hold all year.
- **The same mentor** One teacher, week after week.
- **Groups by level** Fifteen to twenty learners of a similar age and stage.
- **Easy changes** New shift or new job: tell us and we adjust.
- **Two formats** A group, or one to one.

## Fees for learners in Peru

Fees are in US dollars, paid monthly by card. Your card issuer converts each payment to soles at its own rate on the day, so the amount on your statement may vary slightly from month to month. The hour you choose never changes the fee.

- Free first class: Free. A free first class. Booked at an hour you choose in Peru time. No card needed.
- Group batch: USD 100 a month. Fifteen to twenty learners of similar level. One mentor throughout. Two live classes a week. Monthly, stop any time.
- One to one: USD 150 a month. One learner, one mentor. Any hour you name. Pace set around you.

## Class times in Peru: questions we are asked

### Are the classes in Spanish?

No. Every class is live, online and taught in English only, by mentors who speak clearly, follow the learner's pace and accent, and show each step on screen. This page talks about clocks, but the language of every class is English.

### What time zone is Peru in?

UTC minus 5, all year. In the tz database used by phones and computers the zone is America/Lima, and INACAL keeps Peru's official time. Peru has not used summer time since 1994.

### How many hours ahead of Peru is India?

Ten hours and thirty minutes, every day of the year. India uses UTC plus 5:30 and does not change its clocks either, so the gap never moves.

### When are the classes?

Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. You tell us your hours in Peru time and we match a group or set one-to-one lessons around them.

### Do I have to convert times myself?

No. Our booking page shows the time zone of your device, so in Peru you see Peru time. Every time we write to you is in Peru time too.

### Can my child have class in the afternoon if it is night in India?

Yes. Our mentors who teach learners in the Americas choose to work those hours. A class at 16:00 in Peru is 02:30 the next day in India, and that is a normal teaching hour for them.

### Will my class hour change during the year?

Not because of clocks: neither Peru nor India changes time. It changes only if you ask, for example when a school shift or a job changes.

### What happens if we travel abroad?

The class stays at the same moment, so in another time zone it will show a different local hour. Tell your mentor before you travel and agree whether to keep it, move it or pause.

### Is there a fixed weekly timetable for Peru?

No. Groups run at hours agreed with the learners in them, and one-to-one lessons are set around you. We do not promise a particular weekend group in advance.

### Are you connected with INACAL, MINEDU or any Peruvian institution?

No. We cite INACAL, INEI and MINEDU as sources only. Modern Age Coders is a private online school with mentors in India and no link to any Peruvian institution or school.

## More about live classes

- [How we teach](/how-we-teach): One live lesson, start to finish.
- [Thinking first](/we-teach-you-how-to-think): Why our mentors ask before they tell.
- [Coding roadmap](/coding-roadmap): What to learn, in what order, at any age.
- [AI tools by age](/ai-tools-age-guide): The minimum age each AI maker sets.
- [Student labs](/student-labs): Projects by our students.
- [All courses](/courses): Every syllabus in one place.

## Contact

Book the free first class at [https://learn.modernagecoders.com/live-coding-classes-peru-time](https://learn.modernagecoders.com/live-coding-classes-peru-time#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
