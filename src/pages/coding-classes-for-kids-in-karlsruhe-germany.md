---
title: "Coding Classes for Kids in Karlsruhe: Live Online, in English"
description: "Coding classes for kids in Karlsruhe aged 6 to 12, live online in English: the new BW subject Informatik und Medienbildung, free contests, a Karlsruhe dog project."
canonical: https://learn.modernagecoders.com/coding-classes-for-kids-in-karlsruhe-germany
source: src/pages/coding-classes-for-kids-in-karlsruhe-germany.html
---
> Modern Age Coders runs coding classes for Karlsruhe children aged 6 to 12 that are live online and taught in English. Younger children build stories and games in Scratch; from about nine they type real Python and work on small projects with real city data. A regular mentor adapts to your child's pace and accent, classes fit Karlsruhe afternoons and weekend mornings, and children learn in an age group of 15 to 20 or one to one.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / [Coding classes in Baden-Württemberg](/coding-classes-in-baden-wuerttemberg) / Kids in Karlsruhe

Karlsruhe · Coding for children · Ages 6 to 12

# Coding classes for kids in Karlsruhe

Baden-Württemberg has just made Informatik compulsory for every pupil from grade 5, so many Karlsruhe parents are asking a fair question: should my child start before that, and how? This page answers the questions we hear most, in the order parents tend to ask them, from what the new school subject covers to whether a German-speaking child can learn in English. Along the way there is a project on Karlsruhe's registered dogs that teaches a nine year old to compare things fairly.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Ages: 6 to 12, grouped by age; First steps: Scratch stories and games; From about 9: Typed Python; Lessons: Two a week, live; Group: 15 to 20 children, or 1-on-1; First class: Free, no card needed. Rated 4.9 across 547 Google reviews.

## First coding courses for Karlsruhe children

A gentle start for the youngest, a long all-round course, and a Python course for children who are ready to type.

- [Scratch Coding for Kids](/courses/scratch-programming-complete-course): Three to four months, for any child between 6 and 12. A first finished game, and a clear sign of whether coding is for them.
- [Coding for Kids](/courses/kids-coding-blocks-masterclass): A ten to twelve month journey for 6 to 12 year olds: Scratch, then apps and first AI ideas, always with children of a similar age.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass): For 9 to 12 year olds, eight to ten months. Real typed code, drawings, games and small data projects like the dog one below.

## Will my child learn coding at school in Karlsruhe anyway?

From grade 5, yes, and more than children did a few years ago. Baden-Württemberg introduced a new compulsory subject in the 2025/26 school year.

### The new subject

The Gesellschaft für Informatik reports in its Informatik-Monitor 2026/27 that Baden-Württemberg introduced Informatik und Medienbildung as a compulsory subject across all secondary school types from 2025/26, starting in grades 5 and 6 and growing year by year after that.

The same monitor counts Baden-Württemberg among four Länder that already meet the short-term recommendation of four compulsory Informatik hours. For Karlsruhe pupils that is a real change.

### Before grade 5

In Baden-Württemberg, as in most Länder, Grundschule covers four years, grades 1 to 4, so the typical Karlsruhe pupil leaves it at around ten. Only then does the new subject begin.

Children who want to make games or understand how apps work before then have about four years to fill, which is where most of our Karlsruhe learners start.

**Coding in a Karlsruhe child's first school years, and how our classes fit around it**

| School years | At school in Baden-Württemberg | With us |
|---|---|---|
| Grades 1 and 2 | Grundschule | Scratch stories, sequences and simple games |
| Grades 3 and 4 | Grundschule | Scratch games with scores, variables and lists |
| Grades 5 and 6 | Informatik und Medienbildung, compulsory since 2025/26 | Typed Python, which makes the new subject feel familiar |
| Grade 7 onwards | The subject continues as it grows year by year | Python projects, data and first AI ideas |

Sources: GI Informatik-Monitor 2026/27, Baden-Württemberg entry and national comparison; KMK, Primarbereich. Read on 2 November 2026. The right-hand column is our own plan. We teach alongside school; the school subject and its marks are what count.

## Which part of Karlsruhe has the most dogs?

Here is a real example. Every dog older than three months in Karlsruhe has to be registered for dog tax, and the city publishes the numbers for each district under a CC BY 4.0 licence. Children love the topic, and it hides one of the most important ideas in all of data.

### The data

The dataset is called Registrierte Hunde and comes from the city treasury, the Stadtkämmerei. We downloaded registrierte-hunde-hunde-insgesamt.csv on 3 November 2026. It covers 27 Stadtteile for each year from 2014 to 2020, the most recent year in the file.

For every district and year it gives the number of dogs and also the number of dogs per 1,000 residents, worked out by the city.

### The question

Where in Karlsruhe are there the most dogs? Most children guess straight away, and many guess right. The trouble is that "most dogs" can mean two different things.

A ten year old can find the first answer with the program below in about ten minutes.

**Program 1: which district has the most dogs?** (Python)
```python
import csv

with open("registrierte-hunde-hunde-insgesamt.csv", encoding="utf-8") as f:
    rows = [r for r in csv.DictReader(f) if r["Jahr"] == "2020"]

most = max(rows, key=lambda r: int(r["Hunde"]))
print("Districts in 2020:", len(rows))
print("Most dogs:", most["Stadtteil"], most["Hunde"])
```
It prints Districts in 2020: 27 and Most dogs: Durlach 1034.

Durlach, with 1,034 registered dogs. True, but is Durlach really the doggiest part of the city, or simply one of the biggest? A district with more people will usually have more of everything: more dogs, more bicycles, more birthday cakes. To compare fairly, you need to know how many dogs there are for every 1,000 people, and the city has already worked that out for us.

**Program 2: dogs for every 1,000 people** (Python)
```python
RATE = "Hunde je 1.000 Bewohner/-innen (Wohnberechtigte)"
by_rate = sorted(rows, key=lambda r: float(r[RATE]), reverse=True)
for r in by_rate[:3]:
    print(r["Stadtteil"], r["Hunde"], "dogs,", r[RATE], "per 1,000 people")
print("Durlach is number", [r["Stadtteil"] for r in by_rate].index("Durlach") + 1, "by rate")
```
Run after Program 1. It prints Palmbach 113 dogs, 56.6 per 1,000 people, Hohenwettersbach 166 dogs, 54.1 per 1,000 people, Stupferich 152 dogs, 51.1 per 1,000 people and Durlach is number 15 by rate.

**Karlsruhe dogs in 2020: the largest counts and the highest rates are different districts (our ranking of the city's figures)**

| District | Registered dogs | Dogs per 1,000 residents |
|---|---|---|
| Durlach | 1,034 | 33.4 |
| Palmbach | 113 | 56.6 |
| Hohenwettersbach | 166 | 54.1 |
| Stupferich | 152 | 51.1 |
| Innenstadt-Ost | 94 | 14.3 |

Data: Stadt Karlsruhe, Stadtkämmerei, Registrierte Hunde, transparenz.karlsruhe.de via Open Data Baden-Württemberg, licence CC BY 4.0, file downloaded 3 November 2026. The rates are the city's own; the rankings are ours. The rate column is per 1,000 Wohnberechtigte, people registered as living in the district.

Palmbach has only 113 dogs, about a ninth of Durlach's, yet for every 1,000 people it has 56.6 dogs, the highest rate in the city. Durlach drops to fifteenth place. And the lowest rate of all is in Innenstadt-Ost, in the centre, with 14.3. Children usually have a theory about why the small districts on the edge of the city come out on top; the data does not say, so we treat their idea as a question to check, not an answer.

One more thing older children notice when they look at all seven years: in 25 of the 27 districts there were more registered dogs in 2020 than in 2014. Durlach went from 926 to 1,034. A child who spots that has started asking a third question, "how did it change?", all on their own.

1. **Ages 6 to 8, at the kitchen table.** Put 6 sweets on a plate for 2 children and 9 sweets on a plate for 6 children. Which plate has more sweets? Which children get more each?
2. **Ages 8 to 10, Scratch.** Make two lists, dogs and people, for three made-up villages. Work out dogs per 100 people for each and show the winner on the stage.
3. **Ages 10 to 12, Python.** Run both programs, then change them to rank by the dogs-per-household column. Does Palmbach still win?
4. **Going further.** Find the district whose dog count grew most between 2014 and 2020, first as a number and then as a percentage. Are they the same district?

## Can a child who speaks German at home learn coding in English?

Yes, and it usually goes more smoothly than parents expect. All our lessons are in English only; here is why that works for young children.

### Most of it is on screen

A sprite moving left, a score going up, a loop repeating: children understand these by watching, before they understand every word. The mentor shows first and explains second, so English is a help rather than a hurdle.

### The mentor adapts

Mentors speak slowly, use short sentences and say things again in simpler words. They get used to how each child speaks, including German words dropped into an English sentence, and gently offer the English word back.

### Code words are English

Python is written with English words such as print, if and while. A Karlsruhe child who learns in English learns those words in their own language, so to speak, and picks up a lot of school English along the way.

The mentors work from India over a live video call. Your child has the same mentor every week, which matters more for young children than for anyone: after a few lessons the mentor knows whether your child needs a quiet moment before answering, likes to be challenged, or learns most easily by changing a program that already works.

## Are there free contests a primary pupil in Karlsruhe can try?

Three national contests accept primary pupils in the 2026/27 school year. They test thinking, not knowledge, and they are a good way to see a child enjoy a challenge.

1. **Informatik-Biber, 9 to 20 November 2026.** An online puzzle contest that costs nothing, open from grade 3 to grade 13, run by Bundesweite Informatikwettbewerbe and entered through the school. No coding needed.
2. **Mathematik-Olympiade, Regionalrunde 11 November 2026.** The 66th Mathematik-Olympiade has been offered to primary schools since 2005 and draws about 200,000 pupils a year across Germany. The school round ran until October 2026; pupils who did well there go on to the Regionalrunde.
3. **Pangea, Vorrunde 23 February to 3 March 2027.** Registration for the 2027 maths contest is open from 1 October 2026 to 17 February 2027. Pupils in grades 3 and 4 answer 15 questions, without a calculator.

Sources: BWINF, Informatik-Biber 2026; Mathematik-Olympiaden e.V., 66th Mathematik-Olympiade dates; Pangea-Mathematikwettbewerb, Termine 2027. Read on 2 November 2026.

We are not connected with any of these contests and never use their tasks in class. What we do is write our own puzzles of the same kind, sorting, patterns, fair comparisons like the dog project, so a child arrives at a contest used to thinking a problem through rather than guessing. Ask your child's teacher whether the school takes part.

## When could my child have classes in Karlsruhe time?

After school or on weekend mornings. Because the mentors are in India, where it is later in the day, Karlsruhe afternoons are a natural fit.

**Possible Karlsruhe lesson times and the time for a mentor in India**

| Karlsruhe time | Mentor, winter clock | Mentor, summer clock |
|---|---|---|
| 14:15, early afternoon | 18:45 | 17:45 |
| 17:15, later afternoon | 21:45 | 20:45 |
| Saturday 10:45 | 15:15 | 14:15 |
| Sunday 09:15 | 13:45 | 12:45 |

Germany uses MEZ (UTC+1) and MESZ (UTC+2) under the Einheitenzeitgesetz; the winter clock has applied since 25 October 2026 and the summer clock starts again on 28 March 2027. India keeps UTC+5:30 throughout, which puts it four and a half hours ahead of Karlsruhe now and three and a half hours ahead from late March. Examples, not fixed groups.

**Baden-Württemberg school holidays 2026/27**

| Holidays | Dates |
|---|---|
| Herbstferien | 26 to 31 October 2026 |
| Weihnachten | 23 December 2026 to 9 January 2027 |
| Ostern | 25 March and 30 March to 3 April 2027 |
| Pfingsten | 18 to 29 May 2027 |
| Sommerferien | 29 July to 11 September 2027 |

Source: KMK, Ferien im Schuljahr 2026/2027, Baden-Württemberg row, Stand 9 October 2025, first and last holiday day.

Classes keep running in the holidays unless you tell us otherwise. The long Pfingsten break and the summer are popular for a short extra project. Karlsruhe had 309,050 residents on 31 December 2024 according to Destatis, and families from Ettlingen, Rastatt, Bruchsal and Pforzheim (134,912) learn with us in exactly the same way, since every lesson is online; they share the Baden-Württemberg holiday dates too.

## What a Karlsruhe child can do as they progress

Our milestones for ages 6 to 12, shared with parents in a short note each month.

**Children's coding milestones (ours)**

| Milestone | Typical age | Your child can |
|---|---|---|
| First story | 6 to 7 | Make two characters talk and move in turn |
| First game | 7 to 8 | Build a game with a score and a way to lose |
| Lists | 8 to 10 | Store a list of things and find the largest |
| Typed Python | 9 to 11 | Write short programs and fix their own errors |
| Fair comparisons | 10 to 12 | Turn counts into rates before ranking them |

### For parents

When your child says "most", ask "most of what, compared with what?" The dog project is built on that question.
A child who explains a mistake has learned more than one who only shows a finished game.

### For children

The biggest number is often just the biggest place.
Before you crown a winner, check whether the race was fair.

## Nine more courses for Karlsruhe children

For when the first course is done or a child has a special interest. Each taught live and in English by the mentor your child already knows, shared or private.

### Thinking and maths

Ages 6 to 15

- [Problem solving for kids](/courses/problem-solving-and-computational-thinking-for-kids): Patterns, rules and plans, the backbone of every contest.
- [Maths contest training](/courses/mathematik-olympiade-and-kaenguru-training-course): For children curious about the Olympiade or Pangea.
- [Maths through coding](/courses/maths-through-coding): Fractions, rates and patterns explored in Python, from 10.

### Games

Ages 7 to 14

- [Game development for kids](/courses/game-development-masterclass-for-kids): Scratch, Roblox and Minecraft in one long course.
- [Minecraft coding](/courses/minecraft-coding-for-kids-course): Code that changes a world children already know.
- [Roblox coding](/courses/roblox-game-coding-for-kids-lua-course): Real Roblox games scripted in Luau.

### Beyond games

Ages 8 to 12

- [AI literacy](/courses/ai-literacy-for-kids-course): How machines learn, with no chatbot accounts.
- [C++ for kids](/courses/cpp-programming-for-kids-course): A second typed language, through puzzles and games.
- [Hackathon for kids](/courses/hackathon-prep-for-kids-coding-innovation-ai-projects-course): Twelve weeks of building towards a small event, 8 to 12.

## How live classes run for a Karlsruhe child

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **After lunch** Early afternoon, often ideal for six and seven year olds.
- **Before dinner** Later afternoon, after homework and clubs.
- **Saturday or Sunday** A relaxed morning lesson at the weekend.

- **Live with a mentor** No videos to watch alone, ever.
- **Same face each week** A mentor who knows how your child learns.
- **Clear, slow English** Shown on screen, said simply, said again.
- **Age groups** Younger and older children are never mixed.
- **Monthly note** A few lines for parents on progress and next steps.
- **Group or one to one** 15 to 20 children together, or a private mentor.

## Fees for Karlsruhe families

Your monthly fee covers eight live lessons. It is displayed in euro at the European Central Bank reference rate, while the actual payment is taken in US dollars; your bank handles the conversion, so the amount you see on your statement can be marginally different.

- Free first class: Free. A free first class. A puzzle and a first Scratch program. No card needed.
- Group batch: €90 (charged in US dollars) a month. 15 to 20 children of a similar age. A regular mentor. Two lessons a week. Monthly, stop any month.
- One to one: €134 (charged in US dollars) a month. A mentor just for your child. Projects that follow their interests. Times that suit your week.

## Coding classes for kids in Karlsruhe: more questions

### Are the classes in German?

No. All lessons are live and in English only. Mentors speak slowly, use simple words, adapt to each child's pace and accent, and show everything on screen, so children who mostly speak German at home can follow from the first lesson.

### What is Informatik und Medienbildung?

It is the compulsory subject Baden-Württemberg introduced in the 2025/26 school year for all secondary school types. It started in grades 5 and 6 and grows year by year, according to the GI Informatik-Monitor 2026/27.

### Is it worth starting before grade 5?

For a curious child, yes. The new compulsory subject begins only in grade 5, so grades 1 to 4 are open years for Scratch and puzzles. Children who arrive in grade 5 able to plan a program step by step usually enjoy the new subject.

### What age is the youngest you teach?

Six. At that age children use Scratch, where blocks are dragged into place, so they do not need to type or read long instructions. Lessons are split into short tasks.

### When can my child have lessons in Karlsruhe time?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Younger children often prefer early afternoon or weekend mornings.

### Do lessons stop in the Baden-Württemberg holidays?

Only if you would like a pause. The mentors do not follow the BW school calendar, so lessons can continue through the Herbstferien, Christmas, Pfingsten and summer.

### Can my child enter maths or computing contests?

Yes, through the school in most cases. The Informatik-Biber runs from 9 to 20 November 2026, the Mathematik-Olympiade Regionalrunde is on 11 November 2026, and the Pangea Vorrunde runs from 23 February to 3 March 2027.

### Where are the mentors?

In India, teaching live over video. India is four and a half hours ahead of Karlsruhe in winter, so a 14:15 lesson in Karlsruhe is 18:45 for the mentor.

### How much does it cost, and what currency is charged?

The fee is monthly, for eight lessons, shown here in euro at the European Central Bank reference rate. The charge itself is in US dollars and your bank converts it, so the euro amount on your statement can differ slightly. The first class is free.

### Does my child use AI chatbots in class?

No. Children under 13 never use chatbot accounts with us. They learn how AI works by building small programs that sort and guess, which is both safer and more educational.

## Related pages

- [Coding classes in Germany](/coding-classes-in-germany): Every Germany page in one place.
- [Coding classes in Baden-Württemberg](/coding-classes-in-baden-wuerttemberg): The Land page for Baden-Württemberg.
- [Online coding for kids](/online-coding-classes-for-kids-germany): How live online lessons suit children.
- [Python classes for kids](/python-classes-for-kids-germany): When children move to typed code.
- [Informatik by Land](/informatik-in-german-schools-by-state): How each Land handles the subject.
- [Maths and coding contests](/math-and-coding-competitions-germany): The national contests, with dates.

## More pages for this Land

Part of the guide: [Coding classes in Baden-Württemberg](/coding-classes-in-baden-wuerttemberg)

### Cities and pages in Baden-Württemberg

- [Coding and AI classes in Pforzheim](/coding-and-ai-classes-in-pforzheim-germany)
- [Coding classes for kids in Heidelberg](/coding-classes-for-kids-in-heidelberg-germany)
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

Book the free first class at [https://learn.modernagecoders.com/coding-classes-for-kids-in-karlsruhe-germany](https://learn.modernagecoders.com/coding-classes-for-kids-in-karlsruhe-germany#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
