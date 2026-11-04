---
title: "Coding Classes for Kids in Offenbach am Main: Live in English"
description: "Coding classes for kids in Offenbach am Main aged 6 to 12, live in English: why Hessen has no Informatik subject, how to start, and an Offenbach first-frost project."
canonical: https://learn.modernagecoders.com/coding-classes-for-kids-in-offenbach-am-main-germany
source: src/pages/coding-classes-for-kids-in-offenbach-am-main-germany.html
---
> Modern Age Coders teaches coding classes for kids in Offenbach am Main as live video lessons in English, open to every child from 6 to 12. The youngest start with puzzles and Scratch; from about 9, children type real Python and later explore Offenbach weather data. A regular mentor matches each child's pace and accent, either privately or among fifteen to twenty children of the same age.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / [Hesse](/coding-classes-in-hesse) / Kids in Offenbach

Offenbach am Main · Children 6 to 12 · Live online

# Coding classes for kids in Offenbach am Main

Hessen is one of the six Länder where no pupil has to take Informatik, and the Gesellschaft für Informatik knows of no binding plan to change that. For an Offenbach child who wants to know how games and apps are made, the answer will not come from the timetable. This page explains what Hessen schools do offer, how a child of 6 to 12 can start in our live English classes, two free contests this school year, and a project on the weather station in Offenbach that seems to record a frost in August.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Ages: 6 to 12, by age group; Begins with: Puzzles and Scratch; Later: Typed Python and real data; Group: Fifteen to twenty, or private; Teachers: Mentors in India, in English; Try it: A free first class. Rated 4.9 across 547 Google reviews.

## Which coding course should an Offenbach child start with?

Three courses that between them suit nearly every child from 6 to 12.

- [Coding for Kids](/courses/kids-coding-blocks-masterclass): Our widest course for six to twelve year olds, taught in age bands: Scratch stories, games and apps, building towards simple AI ideas.
- [Game Development for Kids](/courses/game-development-masterclass-for-kids): For the child who already lives for games: Scratch, Roblox and Minecraft in one course, from about eight.
- [AI Literacy for Kids](/courses/ai-literacy-for-kids-course): For curious eight to fourteen year olds: how computers learn from examples, explored safely without chatbot accounts.

## Do Offenbach schools teach coding?

Not as a required subject at any age. Hessen leaves Informatik to electives, and none of them starts before grade 7.

### No compulsory Informatik

The Gesellschaft für Informatik, in its Informatik-Monitor 2026/27, states for Hessen that across all school types there is no compulsory Informatik teaching. Nationally it lists Hessen among six Länder without Informatik that is binding for all pupils, and among three where no binding plans to introduce it are known.

So an Offenbach child can go from grade 1 to the end of secondary school without ever being required to write a line of code.

### What is offered

A Gymnasium may run Informatik inside its Wahlunterricht, one hour a week, starting in grade 7. In the Haupt- and Realschule tracks, schools can set up Informatik as a Wahlpflicht subject, though the monitor notes there is no curriculum of its own for those tracks.

Whether your child gets any of this depends on the school, and nothing at all is planned for Grundschule, grades 1 to 4.

**Computing for an Offenbach child, by grade (Hessen rules)**

| Grades | At school | What our classes can add |
|---|---|---|
| 1 to 4 | Grundschule, no Informatik | Puzzles, patterns, Scratch stories and games |
| 5 and 6 | No compulsory Informatik | Typed Python, games and first data projects |
| From 7 | Gymnasium: one elective lesson a week, if offered | Python projects and contest practice |
| Other tracks | Wahlpflicht Informatik possible, school by school | A steady course that does not depend on the school |

Read on 2 November 2026: the Hessen entry and the national summary of the GI Informatik-Monitor 2026/27, and the KMK page on the Primarbereich. We wrote the last column ourselves. Destatis counts Offenbach am Main 132,746 and Hessen 6,280,793 at 31 December 2024. Families in Mühlheim am Main, Heusenstamm, Obertshausen and Neu-Isenburg live under the same Hessen rules.

We do not replace school and we do not set marks. What we can give an Offenbach child is what the timetable leaves out: a regular hour, twice a week, with a mentor who teaches them to break a problem into steps, try an idea and find their own mistake.

## When does Offenbach get its first frost of the autumn?

The Deutscher Wetterdienst runs a weather station in Offenbach, the Offenbach-Wetterpark, and publishes its daily readings as open data. The coldest temperature of every night since 2005 is in the file, and finding the first frost of each autumn makes a perfect first data project, with a trap in it.

### The data

Station 07341, Offenbach-Wetterpark, is part of the DWD Climate Data Center's daily climate records, which the DWD releases as open data under CC BY 4.0. We downloaded the historical and recent files on 4 November 2026: 7,779 days from 15 July 2005 to 2 November 2026.

For each day we keep the date and the lowest air temperature of the day, in offenbach_nights.csv. A frost, for this project, is a day whose lowest temperature is below 0 degrees.

### The question

In each year, from August onwards, on which date did the temperature first drop below zero? Version 1 goes through the days in order and writes down the first frosty date it finds for each year, then stops looking for that year.

It is short enough for a ten year old to read line by line.

**Version 1: the first frost in each year** (Python)
```python
import csv

first = {}
with open("offenbach_nights.csv", encoding="utf-8") as f:
    for row in csv.DictReader(f):
        year, month = row["date"][:4], int(row["date"][5:7])
        if month >= 8 and float(row["min_temp"]) < 0 and year not in first:
            first[year] = row["date"]

for year in sorted(first):
    print(year, first[year])
```
It prints one line per year, starting 2005 2005-08-20 and ending 2026 2026-11-02.

A frost in Offenbach on 20 August 2005? Children spot this at once. Opening the file shows the reason: on that day the minimum temperature is written as -999. The weather service uses -999 to mean "no reading", and -999 is certainly below zero, so the program believed it. In the whole file there are 20 such days, all in 2005, the year the station began.

Version 2 skips the -999 days before anything else. Then it answers a second question: which autumn had the earliest first frost, and which the latest? Here a new trap waits. Sorting the full dates would just put 2005 first and 2026 last. To compare the autumns we sort by month and day only, the part of the date after the year.

**Version 2: skip -999, then compare by month and day** (Python)
```python
import csv

first = {}
with open("offenbach_nights.csv", encoding="utf-8") as f:
    for row in csv.DictReader(f):
        year, month = row["date"][:4], int(row["date"][5:7])
        temp = float(row["min_temp"])
        if temp == -999:
            continue
        if month >= 8 and temp < 0 and year not in first:
            first[year] = row["date"]

print("Autumns with a frost:", len(first))
by_day = sorted(first.values(), key=lambda d: d[5:])
print("Earliest first frost:", by_day[0])
print("Latest first frost:", by_day[-1])
print("This autumn:", first.get("2026"))
```
It prints Autumns with a frost: 22, Earliest first frost: 2015-10-12, Latest first frost: 2014-11-21 and This autumn: 2026-11-02.

The earliest first frost came on 12 October 2015, the latest on 21 November 2014, more than five weeks apart. And this autumn the first frost was on Monday 2 November 2026, two days before we downloaded the file. Is that early or late? Across the 20 autumns from 2006 to 2025, the two middle dates are both 31 October, so 2026 is close to an ordinary year.

**First frost of the autumn in Offenbach, selected years (our calculation)**

| Year | First frost | Notes |
|---|---|---|
| 2005 | 18 November 2005 | After removing -999; 16 and 17 November 2005 are missing |
| 2014 | 21 November 2014 | Latest in the record |
| 2015 | 12 October 2015 | Earliest in the record |
| 2020 | 5 November 2020 |  |
| 2023 | 16 October 2023 |  |
| 2025 | 17 November 2025 |  |
| 2026 | 2 November 2026 | This autumn |

Data: Deutscher Wetterdienst, Climate Data Center, daily climate data, station 07341 Offenbach-Wetterpark, licence CC BY 4.0, downloaded 4 November 2026. A frost here means a daily minimum air temperature below 0 degrees. First frost dates are our own calculation; the first came in October in 12 autumns and in November in 10, from 2005 to 2026. Twenty-two years is too short to say anything about climate trends, so we do not.

1. **Ages 6 to 8, no screen.** Each morning this week, look outside: frost on cars or grass, yes or no? Keep a tally on the fridge. Ask a grown-up what you should write on a morning you forget to look.
2. **Ages 8 to 10, Scratch.** Make a list of ten night temperatures and put -999 in one of them. Make the cat say the coldest night. Then teach the cat to ignore -999.
3. **Ages 10 to 12, Python.** Run Version 1, find the 2005 mistake yourself in the CSV, and add the skip line before you look at Version 2.
4. **Going further.** Change Version 2 to find the last frost of each spring instead. Which month should the program look in?

## How does a child of 6 start learning to code?

Gently, and by playing. This is how the first weeks usually go for our youngest Offenbach learners.

1. **The free first class.** One friendly puzzle and one tiny program. From that hour the mentor gets a feel for your child's thinking and English, and proposes an age group.
2. **Weeks 1 and 2: order.** Picture puzzles where steps must go in the right order, then a Scratch character that walks, waves and speaks. Nothing needs typing.
3. **Weeks 3 and 4: repeat.** Making something happen again and again with a loop, instead of dragging the same block ten times. Children feel clever here, and they are right.
4. **From week 5 until week 8: react.** A first game: press a key, the character jumps; touch the edge, it says "ouch". The child decides the story.
5. **After that.** Scores, levels and sounds, and for confident readers of about 9, the move to typed Python.

### In English, at their pace

Every class is live and in English only. Mentors use short sentences, show before they explain and slow down when needed. Younger Offenbach children pick up the handful of words they need surprisingly fast.

### One mentor

The mentors are based in India and teach over live video. Your child keeps the same mentor every week, which matters a great deal at six: a familiar face makes it safe to try and to get things wrong.

### Short and lively

Lessons are an hour, with something new to do every few minutes. The child holds the mouse; the mentor never takes over the screen to do it for them.

## Which free contests suit an Offenbach primary pupil?

Two, both entered through the school. We are not connected with either.

**Two free school contests for 2026/27**

| Contest | Who | When |
|---|---|---|
| Informatik-Biber | Grades 3 to 13; primary pupils solve 9 tasks in 30 minutes | 9 to 20 November 2026 |
| Känguru der Mathematik | Maths contest entered by the school | 8 April 2027; registration 1 December 2026 to 31 January 2027 |

Sources: Bundesweite Informatikwettbewerbe, Informatik-Biber 2026; Känguru der Mathematik, 2027 dates (held in April this time, since the normal March Thursday would land right before Easter holidays nearly everywhere); read on 2 November 2026.

The Biber needs no coding at all, only careful thinking, so it is a good first contest even for a child who has never programmed. We never copy either contest's questions; our mentors invent their own puzzles in a similar style, and if your child's school takes part, the class teacher will know.

## When are the classes in Offenbach time?

After school and at weekends, chosen when you book. These examples show the time on the mentor's side.

**Example Offenbach times and the time in India**

| Offenbach | India, winter months | India, from 28 March 2027 |
|---|---|---|
| Wednesday 15:20 | 19:50 | 18:50 |
| Thursday 16:50 | 21:20 | 20:20 |
| Saturday 10:50 | 15:20 | 14:20 |

Offenbach keeps German legal time under the Einheitenzeitgesetz: MEZ, UTC+1, in winter and MESZ, UTC+2, in summer. This year's change back was on 25 October 2026 and the change forward is on 28 March 2027. Indian clocks sit at UTC+5:30 all year round, which makes the gap 4 h 30 in winter and 3 h 30 in summer. The times are examples, not fixed batches.

**When Hessen schools are closed in 2026/27**

| Ferien | From and to |
|---|---|
| Herbstferien (already over) | 5 to 17 October 2026 |
| Weihnachtsferien | 23 December 2026 to 12 January 2027 |
| Osterferien | 22 March to 2 April 2027 |
| Sommerferien | 28 June to 6 August 2027 |

Dates are the first and last days off in the Hessen row of the KMK holiday list for 2026/2027 (dated 9 October 2025). Our classes run through the holidays; families can pause whenever they travel.

## How will we show you what your child has learned?

We describe progress with five stages we wrote ourselves. They decide which batch fits and what we tell you, and have nothing to do with school grades.

**Five stages, 6 to 12 (ours)**

| Stage | Typical age | Your child can |
|---|---|---|
| 1. In order | 6 to 7 | Arrange a few picture cards into a working sequence, then try it on a Scratch sprite |
| 2. Again | 7 to 8 | Use a loop so the computer repeats something |
| 3. If | 8 to 9 | Make a game react differently to different keys |
| 4. Typed | 9 to 11 | Write a few lines of Python and read the result |
| 5. Careful | 10 to 12 | Spot a fake value in real data and handle it before answering |

### For parents

Stage 5 is the frost project. A child who asks "is that number real?" has learned something many adults have not.
Our notes to you say what your child made and could talk through, never how long they sat at a screen.

### For children

If the computer finds a frost in August, do not believe it straight away. Look at the data.
To compare days from different years, compare the month and day, not the year.

## Nine more courses for Offenbach children

All of them live, all in English, all with one mentor who stays, solo or with children of the same age.

### Blocks and games

Ages 6 to 14

- [Scratch for kids](/courses/scratch-programming-complete-course): Three to four months of Scratch, finishing with games they designed.
- [Minecraft coding](/courses/minecraft-coding-for-kids-course): Blocks, then code, inside Minecraft.
- [Roblox coding](/courses/roblox-game-coding-for-kids-lua-course): Roblox games scripted by the child.

### Typed code

Ages 9 to 15

- [Python and AI for kids](/courses/python-ai-kids-masterclass): Typed code from about nine: turtle art, small games, simple data.
- [Maths through coding](/courses/maths-through-coding): Patterns and puzzles explored with Python, 10 to 15.
- [Problem solving](/courses/problem-solving-and-computational-thinking-for-kids): Step-by-step reasoning practice with puzzles we write ourselves.

### Number confidence

Ages 4 to 11

- [Early maths](/courses/early-math-foundations): Playful, hands-on maths for 4 to 7 year olds.
- [Primary maths](/courses/elementary-mathematics-complete-masterclass): Patient live help with school maths up to grade 5.
- [Abacus and mental maths](/courses/abacus-mental-maths-course-for-kids): From first beads to calculating in the head.

## What does a normal week of classes look like from Offenbach?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **After school** Offenbach afternoons, when homework is done.
- **Saturday** A late-morning slot that young children like.
- **Private** Whatever time suits your family and the mentor.

- **Same mentor** A familiar face, week after week.
- **By age** Six year olds learn with children of their own age.
- **Child in charge** The child holds the mouse, always.
- **Simple English** Shown first, said slowly, repeated kindly.
- **For parents** A short note on what was made.
- **Batch or private** Up to twenty children, or your child alone.

## Fees for Offenbach families

The fee is monthly, for eight live classes. On this page it is given in euro, converted at the European Central Bank reference rate; the charge is made in US dollars and your bank converts it, so the statement can show a slightly different euro amount.

- Free first class: Free. A free first class. A puzzle and a first tiny program. No card asked for.
- Group batch: €90 (charged in US dollars) a month. An age-matched batch of fifteen to twenty. A regular mentor. Two classes a week. Monthly, cancel when you wish.
- One to one: €134 (charged in US dollars) a month. Your child with a private mentor. Your child's own pace and ideas. Times that suit your family.

## Coding classes for kids in Offenbach am Main: parents' questions

### Are the classes in German?

No, they are always in English, and always live. Our mentors talk to young children in short, simple sentences, wait for an answer, and adapt to how each child speaks. Most of the lesson is visible on the screen, which helps a child whose English is still new.

### Do Hessen schools teach Informatik?

Not as a compulsory subject. The Gesellschaft für Informatik reports no compulsory Informatik across school types in Hessen. A Gymnasium may offer it as a one-hour elective from grade 7, and other tracks may set it up as a Wahlpflicht subject.

### Is my child too young at 6?

Rarely. At six, children sort picture steps and snap Scratch blocks together; reading and typing are not needed yet. One free trial lesson tells you and the mentor which group suits.

### When are the classes in Offenbach time?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Many Offenbach families choose an afternoon after school or a Saturday.

### Where are the teachers?

They teach from India on a live video call. A Wednesday 15:20 lesson in Offenbach is 19:50 on the mentor's clock during the German winter.

### How large is a batch?

Batches gather fifteen to twenty children close in age. Families who prefer can book private lessons instead: two a week, your child and the mentor only.

### Can my child enter the Informatik-Biber?

Yes, through a school that has signed up. It costs nothing, asks no coding knowledge and starts at grade 3; at primary level children get nine puzzles and half an hour. The 2026 contest weeks are 9 to 20 November.

### What do we need at home?

A laptop or computer with a mouse, a steady internet connection and a quiet spot. A parent nearby helps in the first lessons with younger children.

### What does it cost?

There is one fee per month. We show it in euro using the ECB reference rate, the card is charged in US dollars, and your bank does the exchange, so the euro figure on your statement may be a touch different. Your child's first lesson is free.

### Will my child use AI chatbots?

No. Chatbot accounts are for older users under their own terms. Our young learners explore how AI works through games and examples we build with them, and every program they make is their own.

## Related pages

- [Coding classes in Hesse](/coding-classes-in-hesse): Hessen rules, dates and courses.
- [Coding classes for kids in Frankfurt](/coding-classes-for-kids-frankfurt): For families just across the Main.
- [Coding for kids in Germany](/coding-classes-for-kids-germany): Our children's courses nationwide.
- [Scratch classes for kids](/scratch-classes-for-kids-germany): Where most six to eight year olds begin.
- [AI tools age guide](/ai-tools-age-guide): Which AI tools allow which ages.
- [How we teach](/how-we-teach): Our live classes in detail.

## More pages for this Land

Part of the guide: [Coding classes in Hesse](/coding-classes-in-hesse)

### Cities and pages in Hesse

- [Coding and AI classes in Darmstadt](/coding-and-ai-classes-in-darmstadt-germany)
- [Coding and AI classes in Kassel](/coding-and-ai-classes-in-kassel-germany)
- [Coding classes for kids in Frankfurt](/coding-classes-for-kids-frankfurt)
- [Coding for international school students in Frankfurt](/coding-for-international-school-students-frankfurt)
- [Informatik-Abitur Hessen (Unterricht auf Englisch)](/informatik-abitur-hessen)
- [Maths tutor in Frankfurt, in English](/math-tutor-frankfurt-in-english)
- [Programmieren lernen für Kinder in Frankfurt (auf Englisch)](/programmieren-lernen-kinder-frankfurt)

More guides: [Coding classes in North Rhine-Westphalia](/coding-classes-in-north-rhine-westphalia), [Coding classes in Lower Saxony](/coding-classes-in-lower-saxony), [Coding classes in Land Bremen](/coding-classes-in-land-bremen), [Coding classes in Bavaria](/coding-classes-in-bavaria), [Coding classes in Saxony-Anhalt](/coding-classes-in-saxony-anhalt), [Coding classes in Schleswig-Holstein](/coding-classes-in-schleswig-holstein), [Coding classes in Baden-Württemberg](/coding-classes-in-baden-wuerttemberg), [Coding classes in Saarland](/coding-classes-in-saarland), [Coding classes in Rhineland-Palatinate](/coding-classes-in-rhineland-palatinate), [Coding and maths in Berlin](/coding-and-maths-classes-in-berlin-germany), [Coding and maths in Hamburg](/coding-and-maths-classes-in-hamburg-germany), [Coding classes in Saxony](/coding-classes-in-saxony), [Coding classes in Thuringia](/coding-classes-in-thuringia), [Coding classes in Brandenburg](/coding-classes-in-brandenburg), [Coding classes in Mecklenburg-Vorpommern](/coding-classes-in-mecklenburg-vorpommern)

## Contact

Book the free first class at [https://learn.modernagecoders.com/coding-classes-for-kids-in-offenbach-am-main-germany](https://learn.modernagecoders.com/coding-classes-for-kids-in-offenbach-am-main-germany#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
