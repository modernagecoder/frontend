---
title: "Online Coding Summer Camp in Germany 2027, Live in English"
description: "Live online coding over the 2027 summer holidays for children and teens in Germany, taught in English: KMK dates for every Land and a count of real camp weeks."
canonical: https://learn.modernagecoders.com/online-coding-summer-camp-germany
source: src/pages/online-coding-summer-camp-germany.html
---
> The online coding summer camp for Germany at Modern Age Coders is a holiday run of live online coding classes in English for children and teens aged 6 to 18, from Scratch and Python to games and AI. It is planned around your own Land's 2027 summer holidays, which the KMK sets between 28 June and 13 September 2027. A regular mentor matches the learner's pace and accent, in a group of fifteen to twenty or one to one.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / Coding summer camp

Germany · Summer 2027 · Ages 6 to 18

# Online coding summer camp in Germany, 2027

There is no single German summer holiday. In 2027 Hessen's schools close on 28 June and Bayern's do not reopen until mid-September, and a family in Hamburg has one fewer full week of holiday than a family in Berlin, even though both start on 1 July. An online coding summer only works if it is planned for your own Land. This page gives the official dates, counts the real camp weeks in each holiday, and explains how a live coding summer with us fits into them.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Ages: 6 to 18; When: Summer holidays 2027; Where: Online, from anywhere in Germany; Teaching: Live, in English; Format: Group of fifteen to twenty, or one to one; First class: Free. Rated 4.9 across 547 Google reviews.

## Which course makes a good coding summer?

Three courses that suit a holiday well: each one ends with something finished that a child can show at the start of the new school year.

- [Game Development for Kids](/courses/game-development-masterclass-for-kids): Ages 6 to 12. Scratch, Roblox and Minecraft games, a natural summer project with a playable result.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass): Ages 9 to 12. Real typed code over the holiday: games, turtle drawings and small AI projects.
- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course): Ages 13 to 17. A web or AI project built over the summer with AI help, checked line by line by the teen.

## When are the summer holidays 2027 in each German Land?

The KMK, the standing conference of the Länder education ministers, fixes the summer holidays years ahead. Every other school holiday is set by each Land itself.

**Summer holidays 2027 by Land, first and last day of the holiday**

| Land | First day | Last day |
|---|---|---|
| Hessen | Monday 28 June 2027 | Friday 6 August 2027 |
| Rheinland-Pfalz | Monday 28 June 2027 | Friday 6 August 2027 |
| Saarland | Monday 28 June 2027 | Friday 6 August 2027 |
| Berlin | Thursday 1 July 2027 | Saturday 14 August 2027 |
| Brandenburg | Thursday 1 July 2027 | Saturday 14 August 2027 |
| Hamburg | Thursday 1 July 2027 | Wednesday 11 August 2027 |
| Schleswig-Holstein | Saturday 3 July 2027 | Saturday 14 August 2027 |
| Mecklenburg-Vorpommern | Monday 5 July 2027 | Saturday 14 August 2027 |
| Bremen | Thursday 8 July 2027 | Wednesday 18 August 2027 |
| Niedersachsen | Thursday 8 July 2027 | Wednesday 18 August 2027 |
| Sachsen | Saturday 10 July 2027 | Friday 20 August 2027 |
| Sachsen-Anhalt | Saturday 10 July 2027 | Friday 20 August 2027 |
| Thüringen | Saturday 10 July 2027 | Friday 20 August 2027 |
| Nordrhein-Westfalen | Monday 19 July 2027 | Tuesday 31 August 2027 |
| Baden-Württemberg | Thursday 29 July 2027 | Saturday 11 September 2027 |
| Bayern | Monday 2 August 2027 | Monday 13 September 2027 |

Source: KMK, Sommerferienregelung 2025 bis 2030, the 2027 column, which gives each Land's first and last holiday day; cross-checked with the KMK holiday overview 2026/27 (dated 9 October 2025). The weekdays were added by us. Read on 3 November 2026.

### Why the dates move every year

The KMK's description of the German school system says the six weeks of summer holiday are fixed in a rolling system within the period from mid-June to mid-September, so that not every Land is on holiday at once. The order changes from year to year.

The school year itself legally begins on 1 August and ends on 31 July, but when lessons really stop and start depends on these holiday dates.

### What that means for a coding summer

A camp with one fixed start date for all of Germany would land in the middle of the holidays for some children and in the last week of school for others. An online summer with live mentors can start on a different Monday for each family.

Watch the edges, too. Several Länder start on a Thursday or a Saturday and finish midweek, so the number of full weeks is not what the number of days suggests, as the planner below shows.

## How many full camp weeks does each Land get in summer 2027?

A camp week runs Monday to Friday. We let Python count those weeks for every Land, first the quick way, then the right way, and the two disagree in both directions.

**Version 1: group the Länder, then divide the days by seven** (Python)
```python
from datetime import date, timedelta

# KMK summer holidays 2027, first and last holiday day (Sommerferienregelung 2025 to 2030)
summer = {
    "Baden-Württemberg": ("29.07.", "11.09."), "Bayern": ("02.08.", "13.09."),
    "Berlin": ("01.07.", "14.08."), "Brandenburg": ("01.07.", "14.08."),
    "Bremen": ("08.07.", "18.08."), "Hamburg": ("01.07.", "11.08."),
    "Hessen": ("28.06.", "06.08."), "Mecklenburg-Vorpommern": ("05.07.", "14.08."),
    "Niedersachsen": ("08.07.", "18.08."), "Nordrhein-Westfalen": ("19.07.", "31.08."),
    "Rheinland-Pfalz": ("28.06.", "06.08."), "Saarland": ("28.06.", "06.08."),
    "Sachsen": ("10.07.", "20.08."), "Sachsen-Anhalt": ("10.07.", "20.08."),
    "Schleswig-Holstein": ("03.07.", "14.08."), "Thüringen": ("10.07.", "20.08."),
}

def day(text):
    d, m = text.strip(".").split(".")
    return date(2027, int(m), int(d))

# step 1: Länder with the same dates can share one camp plan
groups = {}
for land, (first, last) in summer.items():
    groups.setdefault((day(first), day(last)), []).append(land)
print("Different summer holidays:", len(groups))

# a quick first try: holiday days divided by 7
for (first, last), lands in sorted(groups.items()):
    days = (last - first).days + 1
    print(", ".join(lands), "|", days, "days |", days // 7, "weeks")
```
It prints Different summer holidays: 10, then one line per group, for example Hessen, Rheinland-Pfalz, Saarland | 40 days | 5 weeks, Hamburg | 42 days | 6 weeks and Bremen, Niedersachsen | 42 days | 6 weeks.

The first step is already useful. Sixteen Länder share only ten different holiday periods, because neighbours often keep the same dates: Berlin with Brandenburg, Bremen with Niedersachsen, Hessen with Rheinland-Pfalz and the Saarland, and Sachsen with Sachsen-Anhalt and Thüringen. The second step looks sensible too, and it is wrong. A holiday of 42 days is six weeks long on paper, but if it starts on a Thursday and ends on a Wednesday, it does not contain six weeks that run Monday to Friday.

**Version 2: find the first Monday and count whole Monday to Friday weeks** (Python)
```python
# step 2: count the whole Monday to Friday weeks inside each holiday
for (first, last), lands in sorted(groups.items()):
    monday = first + timedelta(days=(7 - first.weekday()) % 7)
    weeks = []
    while monday + timedelta(days=4) <= last:
        weeks.append(monday)
        monday += timedelta(days=7)
    print(first.strftime("%d %b"), "to", last.strftime("%d %b"), "|", len(weeks), "camp weeks, first",
          weeks[0].strftime("%d %b"), "|", ", ".join(lands))
```
Run after Version 1. It prints, among others, 01 Jul to 11 Aug | 5 camp weeks, first 05 Jul | Hamburg, 28 Jun to 06 Aug | 6 camp weeks, first 28 Jun | Hessen, Rheinland-Pfalz, Saarland and 08 Jul to 18 Aug | 5 camp weeks, first 12 Jul | Bremen, Niedersachsen.

**Days divided by seven against whole Monday to Friday weeks, summer 2027 (our calculation)**

| Länder with the same holiday | Holiday days | Days divided by 7 | Whole camp weeks | First camp Monday |
|---|---|---|---|---|
| Hessen, Rheinland-Pfalz, Saarland | 40 | 5 | 6 | 28 June 2027 |
| Hamburg | 42 | 6 | 5 | 5 July 2027 |
| Berlin, Brandenburg | 45 | 6 | 6 | 5 July 2027 |
| Schleswig-Holstein | 43 | 6 | 6 | 5 July 2027 |
| Mecklenburg-Vorpommern | 41 | 5 | 6 | 5 July 2027 |
| Bremen, Niedersachsen | 42 | 6 | 5 | 12 July 2027 |
| Sachsen, Sachsen-Anhalt, Thüringen | 42 | 6 | 6 | 12 July 2027 |
| Nordrhein-Westfalen | 44 | 6 | 6 | 19 July 2027 |
| Baden-Württemberg | 45 | 6 | 6 | 2 August 2027 |
| Bayern | 43 | 6 | 6 | 2 August 2027 |

Holiday dates: KMK, Sommerferienregelung 2025 bis 2030. Grouping, day counts, weekdays and weeks: our own Python, run on 3 November 2026. Days are counted with both the first and the last holiday day included.

Four results change. Hessen, Rheinland-Pfalz and the Saarland have only 40 days, yet they get six full camp weeks, because their holiday starts on a Monday and ends on a Friday with nothing wasted. Mecklenburg-Vorpommern also gains a week, starting on a Monday. Hamburg, Bremen and Niedersachsen lose one: a Thursday start and a Wednesday finish leave partial weeks at both ends. A family in Hamburg planning six weeks of anything from 1 July 2027 would find the last one cut short by school on Thursday 12 August 2027.

1. **Your Land.** Find your Land in the output of Version 2 and write down its first and last camp Monday.
2. **Travel weeks.** Change the program to leave out the first week and the last week, when many families travel. How many weeks are left for each group?
3. **Weekend camp.** Count Saturday and Sunday pairs instead of Monday to Friday weeks. Which Land gains the most?
4. **Going further.** Add the 2028 dates from the same KMK table and find which Land has the latest holiday in both years.

## What does an online coding summer with live mentors involve?

It is our normal live teaching, timed for the holiday: the same mentors, the same courses, a clear goal for the weeks your Land is off school.

### A goal for the summer

In the free first class the mentor and the learner agree what should exist at the end of the holiday: a Scratch game, a Python quiz, a small website, an AI project. A visible goal keeps a holiday course from drifting, and gives a child something to show when school starts again.

### Planned around your Land

Learners join from the camp week that fits their own holiday, not a date set for the whole country. A child in Bayern can begin in August while a child in Hessen has already finished, and both get a full run of weeks.

### Live, not recorded

Every class is live with a mentor who sees the learner's screen, answers questions on the spot and sets the next task. There are no pre-recorded videos to watch alone, which is often why holiday courses fade after a week.

### Group or one to one

In a group of fifteen to twenty, learners at a similar level work through the course together with one mentor. It suits children who like company and a steady rhythm.

One to one suits a learner with a particular project, a travel-heavy summer or a need to go slower or faster. The mentor and the family agree how the lessons are spread across the weeks your Land is on holiday.

### Afterwards

Many families stop when school starts; the monthly plan allows that. Others carry on into the school year at a lower intensity, because a summer of coding is far easier to keep going than to restart.

Either way, the learner keeps their projects and code. Nothing is locked inside our platform.

An online summer is not the same as a residential camp, and we do not pretend it is. There is no lake and no campfire. What it offers instead is a real teacher for each learner, at home, in the weeks that suit your own Land and your travel, and a finished project at the end. Many families combine the two: a week away with friends, and coding in the weeks around it.

## What time are summer classes in Germany?

In the holidays, mornings become possible as well as afternoons. In summer India is three and a half hours ahead of Germany, so a German morning is an Indian afternoon.

**Example summer 2027 class times in Germany and India (German summer time)**

| Germany (MESZ) | India | Who it suits |
|---|---|---|
| 10:00 | 13:30 | Younger children, fresh in the morning |
| 11:45 | 15:15 | Learners who sleep in during holidays |
| 13:45 | 17:15 | Teens after a late start |
| Saturday 10:45 | 14:15 | Families who travel during the week |

Germany is on summer time, MESZ (UTC+2), from 28 March 2027 to 31 October 2027 under the Einheitenzeitgesetz and the Sommerzeitverordnung, so the whole summer holiday of every Land falls in it. India stays at UTC+5:30, three and a half hours ahead. These times are examples, not fixed batches.

Booking the free first class shows the available times in your own clock, so there is nothing to convert by hand. If your child is travelling abroad for part of the summer, a one-to-one time can follow them into another time zone.

## What a coding summer can achieve, week by week

Our own outline for a six-week holiday. Five-week Länder simply compress the middle.

**Summer outline (ours, for a learner who already knows the basics of their course)**

| Camp week | Focus | By the end of the week |
|---|---|---|
| 1 | Goal and plan | The project is chosen and sketched on paper |
| 2 | First version | Something runs, however small |
| 3 to 4 | The real work | The main features are built and tested |
| 5 | Polish | Bugs fixed, a title screen, instructions for a player |
| 6 | Show and tell | The learner presents the project and explains one tricky part |

### For learners

Pick a project you would like to show someone in September, not one you think you ought to do.
Get a small version working in week two. Big plans that never run teach very little.

### For parents

Count your Land's camp weeks before you book holidays, not after.
Ask to see the project at the end of each week. Five minutes of attention keeps a summer project alive.

## Nine more courses that work well over a holiday

All live, all in English, each with a regular mentor, in a group or alone.

### Ages 6 to 9

Blocks and building

- [Coding for kids](/courses/kids-coding-blocks-masterclass): Block coding, from stories to small apps.
- [Minecraft coding](/courses/minecraft-coding-for-kids-course): Building in Minecraft with code.
- [Mental maths](/courses/mental-maths-mastery-kids): Number sense to keep sharp over the holiday.

### Ages 9 to 12

Typed code and games

- [Roblox game coding](/courses/roblox-game-coding-for-kids-lua-course): A Roblox game scripted in Luau.
- [Vibe coding for kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev): Scratch and games with careful AI help.
- [Websites for kids](/courses/kids-ai-web-development-course): A real website, designed by the child.

### Ages 13 to 18

Bigger projects

- [Python for teens](/courses/python-complete-masterclass-teens): From scripts to a full summer project.
- [Game development for teens](/courses/complete-game-development-masterclass-for-teens): A finished game in Unity and C#.
- [Hackathon prep for teens](/courses/hackathon-prep-for-teens-coding-ai-build-innovate-win-course): Building fast, in a team, under a deadline.

## How the online coding summer runs for families in Germany

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Holiday mornings** From about 10:00 German summer time.
- **Afternoons** Early afternoon slots for teens and late risers.
- **One to one** Times that move with your travel plans.

- **One project goal** Agreed in the first class, shown at the end.
- **Your Land's weeks** Start on the Monday that suits your holiday.
- **Patient English** Clear, slow and repeated when needed.
- **Regular mentor** The same person throughout the summer.
- **Live every time** No recordings to watch alone.
- **Group or private** Fifteen to twenty learners, or one.

## Fees for an online coding summer in Germany

Summer classes on this page run on the normal monthly fee: pay for the holiday month or months and stop afterwards if you wish. The fee appears in euro, worked out at the European Central Bank reference rate, and is charged in US dollars, so your bank converts it and the final euro amount can differ slightly.

- Free first class: Free. A free first class. A summer project goal agreed. No card needed to book.
- Group batch: €90 (charged in US dollars) a month. Fifteen to twenty learners of a similar level. One mentor through the holiday. Two live classes a week. Monthly, so the summer can be the only month.
- One to one: €134 (charged in US dollars) a month. A learner and a mentor, nobody else. A project and pace of their own. Lessons spread to suit your travel.

## Online coding summer camp in Germany: questions

### Are the classes in German?

No. Every class is live and taught in English only, by a mentor based in India who adapts to the learner's pace and accent. Over a summer that also means several weeks of spoken English practice, without it ever being the subject of the lesson.

### When are the summer holidays 2027 in my Land?

The KMK has fixed them: they start with Hessen, Rheinland-Pfalz and the Saarland on 28 June 2027 and end with Bayern on 13 September 2027. The table on this page lists all sixteen Länder.

### Why do some Länder get five camp weeks and others six?

Because holidays start and end on different weekdays. By our count, Hamburg, Bremen and Niedersachsen hold five full Monday to Friday weeks in summer 2027, because their holidays start on a Thursday and end on a Wednesday; every other Land holds six.

### Is this a residential camp?

No. It is live online teaching at home, with a mentor on a video call. There is no travel and no overnight stay.

### What ages is it for?

Children and teens from 6 to 18. Younger children usually start with block coding or Minecraft, older ones with Python, games, websites or AI projects.

### When are the classes?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. In the holidays that often means late mornings or early afternoons in German summer time.

### Can we start in the middle of the holiday?

Yes. Because each family starts on its own Monday, a learner can join after a family trip and still have several weeks of classes before school.

### What does it cost?

Summer classes use the normal monthly fee, shown in euro at the European Central Bank reference rate and charged in US dollars, which your bank converts. The first class is free.

### Can my child continue after the summer?

Yes, but there is no obligation. The plan is monthly, so you can stop when school starts or carry on through the school year.

### What if we travel abroad during the holiday?

A one-to-one learner can move lesson times to suit another time zone. A group learner can join from anywhere with a stable internet connection at the group's usual time.

## Related pages

- [Coding classes in Germany](/coding-classes-in-germany): The hub, with the days every Land is on holiday at once.
- [Coding for kids in Berlin](/coding-classes-for-kids-berlin): For Berlin families, summer or not.
- [AI and machine learning in Germany](/ai-and-machine-learning-classes-in-germany): A bigger summer project for teens.
- [Coding summer camp for middle schoolers](/coding-summer-camp-for-middle-schoolers): Our general guide for ages 11 to 14.
- [Game design summer camp for teens](/game-design-summer-camp-for-teens): A summer of game making.
- [How we teach](/how-we-teach): What happens in a live class.

## Contact

Book the free first class at [https://learn.modernagecoders.com/online-coding-summer-camp-germany](https://learn.modernagecoders.com/online-coding-summer-camp-germany#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
