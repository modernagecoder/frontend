---
title: "Coding Classes for Kids in Erfurt: Live Online, in English"
description: "Coding classes for kids in Erfurt aged 6 to 12: live online in English, when Thuringia's new MBI subject starts, holidays, and a snowy-winters data project."
canonical: https://learn.modernagecoders.com/coding-classes-for-kids-in-erfurt-germany
source: src/pages/coding-classes-for-kids-in-erfurt-germany.html
---
> Modern Age Coders teaches Erfurt children aged 6 to 12 to code in live online classes held in English. The youngest make games and stories in Scratch; from about 9 they type Python and explore real data. The same mentor stays with your child, matches their pace and accent, and teaches either a batch of fifteen to twenty children or your child alone, after school or on weekend mornings.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / [Thuringia](/coding-classes-in-thuringia) / Kids in Erfurt

Erfurt · Coding for children · Ages 6 to 12

# Coding classes for kids in Erfurt

Thuringia is building one of the most generous school Informatik plans in Germany, but it starts in grade 5. For an Erfurt child in Grundschule, coding is something to find outside school, and that is where we come in: live classes in English, a mentor who learns how your child thinks, and real projects. On this page, one of them asks a question every Erfurt child has an opinion on: which winter had the most snow?

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Ages: 6 to 12, in age groups; Begins with: Scratch blocks, then Python; Class size: Fifteen to twenty, or one to one; Erfurt times: After school and weekend mornings; Mentors: Based in India, teaching in English; First class: Free, nothing to pay. Rated 4.9 across 547 Google reviews.

## Which coding course suits an Erfurt child aged 6 to 12?

A long course for steady progress from six, a puzzle course for thinking before typing, and a Python course for children ready to type.

- [Coding for Kids](/courses/kids-coding-blocks-masterclass): For 6 to 12 year olds, grouped by age, over 10 to 12 months. Scratch stories and games, then apps and first ideas about AI.
- [Problem Solving for Kids](/courses/problem-solving-and-computational-thinking-for-kids): For 7 to 12 year olds, 6 to 8 months. Logic puzzles and step-by-step plans, the thinking that comes before any code.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass): For 9 to 12 year olds, 8 to 10 months. Real typed Python, drawings and games, then files of real data like the Erfurt snow record below.

## When does an Erfurt child first learn Informatik at school?

In grade 5, in a new subject called Medienbildung und Informatik (MBI). It is still arriving, one grade a year.

### Four years of Grundschule first

Everywhere except Berlin and Brandenburg, the KMK describes Grundschule as grades 1 to 4. So an Erfurt child attends Grundschule between roughly six and ten, and Thuringia's timetable for those years has no Informatik subject.

The KMK published a key-points paper in 2024 on bringing media education and informatics into primary school, but for now a child of 6 to 9 who wants to make a game has to find that outside the classroom.

### MBI from grade 5

The Gesellschaft für Informatik reports that Thuringia introduced MBI in 2024/25 at all general schools: two weekly hours in grades 5 and 6, two in grades 7 and 8, and one hour each in grades 9 and 10. In 2026/27 it is taught in grades 5, 6 and 7, and it grows by one grade a year until it reaches grade 10 in 2029/30.

With that plan, the GI counts Thuringia among only three Länder that meet the medium-term recommendation of six compulsory hours.

**Where an Erfurt child meets Informatik at school, by grade in 2026/27**

| Grade in 2026/27 | Typical age | School Informatik this year |
|---|---|---|
| 1 to 4 | 6 to 10 | None as a subject |
| 5 and 6 | 10 to 12 | MBI, two weekly hours across the two years |
| 7 | 12 to 13 | MBI, part of the two weekly hours across grades 7 and 8 |
| 8 to 10 | 13 to 16 | MBI still arriving: grade 10 is reached in 2029/30 |
| 9 and 10, Gymnasium | 14 to 16 | Informatik elective, up to six weekly hours in total |

Built from the KMK page on the primary stage and the Thuringia entry of the GI Informatik-Monitor 2026/27, both read on 2 November 2026. Ages are typical, not rules.

Put simply, a six year old in Erfurt today will wait four school years for a first Informatik lesson, and then have about one hour of it a week. A child who has spent some of those four years building Scratch games arrives in grade 5 already comfortable with sequences, loops and debugging, which is exactly what MBI begins with. There is more about the whole Land, including the Abitur, on our [Thuringia page](/coding-classes-in-thuringia).

## Will my child understand a coding class in English?

Almost always, because a coding class shows far more than it says. And the mentor adapts to your child, not the other way round.

### Only English, clearly

Lessons happen live, in English, with no German-speaking teachers on our side. For a child at an Erfurt school, an hour of coding in English twice a week is also an hour of English practice with a purpose.

### Slow and patient

Mentors use short sentences, repeat the key word, and wait for an answer. A seven year old who says "the cat goes there, nach links" is understood, and gently hears "left".

### The screen does the work

Blocks are dragged, sprites move, numbers change. Most of a lesson is seeing and trying. The English a young child needs is small, and it grows class by class.

The mentors work from India over a live video link. Because your child keeps the same one, it takes only a few weeks before the mentor knows whether a hard puzzle excites or worries them, and whether they like to start from a blank screen or from a program that already runs.

## Which was the snowiest winter in Erfurt?

Children love this question, and it hides a small trap. The answer depends on how you put the days into boxes.

### The data

The Deutscher Wetterdienst (DWD) publishes daily weather records for its station in Erfurt, called Erfurt-Bindersleben until 2011 and Erfurt-Weimar since, under the CC BY 4.0 licence, which allows any reuse with credit. Each day has a snow depth in centimetres, measured in the morning. We downloaded the files on 3 November 2026.

We made a small file for children, erfurt_schnee.csv, with two columns, the date and the snow depth, for every day from July 1991 to May 2022: 31 complete winters. We stopped there because the station's snow column is empty from June 2022 to the autumn of 2023, and a winter with no record cannot be compared.

### Our rule

We call a day a snow day if there was at least 1 cm of snow on the ground at the morning reading. That rule is ours, and children are encouraged to argue about it: should a light dusting count?

The first program counts snow days for each year, the way a calendar does, and picks the year with the most.

**Version 1: count snow days per year** (Python)
```python
import csv

snow_days = {}
with open("erfurt_schnee.csv", encoding="utf-8") as f:
    for day in csv.DictReader(f):
        year = day["datum"][:4]
        if int(day["schnee_cm"]) >= 1:
            snow_days[year] = snow_days.get(year, 0) + 1

top = max(snow_days, key=snow_days.get)
print("Years counted:", len(snow_days))
print("Snowiest year:", top, snow_days[top], "days")
print("2010:", snow_days["2010"], " 2011:", snow_days["2011"])
```
It prints: Years counted: 32, Snowiest year: 2010 94 days and 2010: 94 2011: 20.

So 2010 wins with 94 snow days. But stop and ask a child: is 2010 a winter? It is not. January and February 2010 belong to one winter, and December 2010 to the next one. The calendar year cuts every winter in half at New Year and glues the halves of two different winters together. Even the number of "years" is odd: 32, because the file starts in July 1991 and ends in May 2022, so the first and last years are only halves.

A winter needs its own box. In Version 2, a small function gives every date the name of its winter: any day from July onwards belongs to the winter that starts that year, and any day before July belongs to the winter that started the year before. So 15 December 2010 and 15 January 2011 both land in the box called 2010/11.

**Version 2: add below Version 1, count by winter** (Python)
```python
def winter(date):
    year, month = int(date[:4]), int(date[5:7])
    if month >= 7:
        return str(year) + "/" + str(year + 1)[2:]
    return str(year - 1) + "/" + str(year)[2:]

by_winter = {}
with open("erfurt_schnee.csv", encoding="utf-8") as f:
    for day in csv.DictReader(f):
        if int(day["schnee_cm"]) >= 1:
            w = winter(day["datum"])
            by_winter[w] = by_winter.get(w, 0) + 1

top = max(by_winter, key=by_winter.get)
print("Winters with snow:", len(by_winter))
print("Snowiest winter:", top, by_winter[top], "days")
print("2009/10:", by_winter["2009/10"], " 2010/11:", by_winter["2010/11"])
```
The three new lines it prints: Winters with snow: 31, Snowiest winter: 2012/13 84 days and 2009/10: 69 2010/11: 55.

The real snowiest winter in our file is 2012/13, with 84 snow days. The famous 94 of 2010 was never one winter: it was the end of 2009/10, which had 69 snow days in all, and the start of 2010/11, which had 55. Same data, same rule, a different answer, because the boxes were different.

**Snow days in some Erfurt winters, July to June (our count, at least 1 cm in the morning)**

| Winter | Snow days |
|---|---|
| 1995/96 | 67 |
| 2005/06 | 76 |
| 2006/07 | 6 |
| 2012/13 | 84 |
| 2019/20 | 3 |
| 2021/22 | 12 |

Data: Deutscher Wetterdienst, Climate Data Center, daily climate data, station 01270 Erfurt-Weimar, column SHK_TAG (snow depth), licence CC BY 4.0, downloaded 3 November 2026. Our extract runs from 1 July 1991 to 31 May 2022. The snow-day rule, the counts and the code are ours. We are not connected with the DWD.

1. **Ages 6 to 8, no screen.** Draw a long strip of paper as a calendar from July to June. Colour the snowy days. Now cut it at New Year. Which winter got cut?
2. **Ages 8 to 10, Scratch.** Make two lists, one per winter, and a sprite that adds a snowflake to the right list for each date you give it. Test it with 31 December and 1 January.
3. **Ages 10 to 12, typed code.** Start with Version 1, then write the winter() function yourself before reading ours. Check it on 30 June and 1 July.
4. **Going further.** Thuringia's Winterferien in 2027 are 1 to 6 February. In our file, 19 of the 31 Februaries had snow on at least one of those six days. Write the program that finds this, then talk about why a count of past winters is not a forecast for 2027.

## What does a child learn in our classes at 6, at 9 and at 12?

Age is a starting point, not a rule. The mentor places each child after the free first class.

**What children typically do in our classes (ours)**

| Age | Tool | A typical project | The thinking behind it |
|---|---|---|---|
| 6 to 7 | Scratch Jr ideas in Scratch | A sprite that tells a short story | Steps happen in order |
| 7 to 9 | Scratch | A catch-the-snowflake game with a score | Loops, events and keeping count |
| 9 to 10 | Python | A turtle drawing of a snowflake | Repeating a shape and turning |
| 10 to 11 | Python | A quiz that remembers answers in a list | Lists, conditions and testing |
| 11 to 12 | Python | The Erfurt snow project | Reading a file and choosing the right boxes |

Our own course outline for ages 6 to 12. Children who start at 11 or 12 move faster through the early rows.

Parents often ask whether a six year old is too young. Usually not, if the class is short, playful and in small steps; the free first class shows quickly whether your child enjoys it. What a six year old cannot yet do is type long code, which is why we wait for Python until reading and typing feel easy, normally around 9.

## What times do Erfurt children have classes?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

**Example Erfurt times and the mentor's time**

| Erfurt time | In India until 28 March 2027 | In India from 28 March 2027 |
|---|---|---|
| 14:45 | 19:15 | 18:15 |
| 15:15 | 19:45 | 18:45 |
| Saturday 09:00 | 13:30 | 12:30 |
| Sunday 10:45 | 15:15 | 14:15 |

Under the Einheitenzeitgesetz, Germany uses MEZ (UTC+1) in winter and MESZ (UTC+2) in summer; the clocks went back on 25 October 2026 and go forward on 28 March 2027. India uses UTC+5:30 the whole year, which puts it four and a half hours ahead of Erfurt from late October to late March and three and a half hours ahead for the rest of the year. The times are examples only.

**Thuringia's school holidays in 2026/27 (KMK)**

| Holidays | Dates |
|---|---|
| Herbstferien | 12 to 24 October 2026 |
| Weihnachtsferien | 23 December 2026 to 2 January 2027 |
| Winterferien | 1 to 6 February 2027 |
| Osterferien | 22 March to 3 April 2027 |
| After Ascension Day | 7 May 2027 |
| Sommerferien | 10 July to 20 August 2027 |

From the Kultusministerkonferenz overview of school holidays 2026/2027, dated 9 October 2025, Thüringen line.

Holidays do not stop classes, though families can pause for a trip. Erfurt is Thuringia's capital, with 218,793 people at the end of 2024 according to Destatis, in a Land of 2,100,277. Children from Weimar, Arnstadt or Jena (109,725 people) join the same groups, and because all three are in Thuringia they share Erfurt's holidays.

This month there is also a free school contest to watch for: the Informatik-Biber runs from 9 to 20 November 2026, and primary pupils in grades 3 and 4 solve nine puzzles in 30 minutes. Entry goes through schools, so a quick word with the class teacher tells you whether your child can join in.

## How will I see my child making progress?

Five of our milestones. Each is something your child can show you, not a grade.

**Milestones for ages 6 to 12 (ours)**

| Milestone | Your child can |
|---|---|
| Storyteller | Make a sprite walk, talk and change costume in order |
| Game maker | Build a Scratch game with a score and a way to win |
| Typist | Write and fix a short Python program alone |
| Collector | Store values in a list and find the largest |
| Data detective | Read a real file and explain why a first answer was wrong |

### For parents

The data detective milestone is the one the snow project builds. Children who reach it start asking "how did they count that?" about every number they read.
Short notes after every few classes tell you what was built and what comes next.

### For children

Before you trust a winner, check the boxes you sorted things into.
If two answers disagree, that is not a mistake yet. It is a question.

## Nine more courses for Erfurt children

The same format for each: live lessons in English and one mentor who stays, as a batch or one-to-one.

### First steps

Ages 6 to 15

- [Scratch for kids](/courses/scratch-programming-complete-course): Three to four months from zero to finished games, 6 to 12.
- [AI literacy for kids](/courses/ai-literacy-for-kids-course): How AI learns and errs, without chatbot accounts, 8 to 14.
- [Maths through coding](/courses/maths-through-coding): Python as a maths playground, 10 to 15.

### Games

Ages 7 to 17

- [Minecraft coding](/courses/minecraft-coding-for-kids-course): From Minecraft blocks towards typed code, 7 to 12.
- [Roblox coding](/courses/roblox-game-coding-for-kids-lua-course): Building and scripting Roblox worlds, 8 to 14.
- [Godot games](/courses/godot-game-development-course-for-kids-and-teens): A real game engine and text code, 10 to 17.

### Making and contests

Ages 8 to 19

- [App making](/courses/block-coding-app-development-masterclass): Phone apps assembled from blocks, 8 to 12.
- [Websites for kids](/courses/kids-ai-web-development-course): HTML, CSS and a first site to share, 9 to 12.
- [Informatics contests](/courses/german-informatics-competitions-course-biber-bwinf-bwki): From Biber puzzles upwards, 9 to 19.

## What is a live class like for a young child?

Two live hours a week with the same mentor, broken into short, active pieces. The child builds; the mentor guides.

- **After school** Erfurt afternoons from about a quarter to three.
- **Weekend mornings** Saturday and Sunday, when younger children are fresh.
- **One to one** Arranged with the mentor around your family's week.

- **One mentor** A familiar face every week.
- **Simple English** Short sentences and plenty of pointing.
- **Hands on** Your child drives the mouse and keyboard.
- **Age groups** Six year olds learn with six year olds.
- **Parent notes** What was built and what is next.
- **Batch or solo** Join a batch, or learn with the mentor alone.

## What do coding classes cost for Erfurt families?

Payment is monthly for eight live classes. On this page the fee appears in euro at the European Central Bank reference rate, but the money is collected in US dollars, which your bank converts, so the debit can be a few cents or euros different.

- Free first class: Free. A free first class. A puzzle and a first Scratch project. No card asked for.
- Group batch: €90 (charged in US dollars) a month. Fifteen to twenty children of a similar age. A regular mentor. Two classes each week. Monthly, cancel when you wish.
- One to one: €134 (charged in US dollars) a month. Your child with their own mentor. Projects chosen for your child. Times your family picks.

## Coding classes for kids in Erfurt: questions from parents

### Are the classes taught in German?

No. We teach only in English. Mentors in India keep their sentences short, repeat key words and get used to how your child speaks, and most of each lesson is shown on screen, so a child still learning English keeps up.

### At what age can my child start?

At 6. Children from 6 to 8 start with Scratch blocks, where nothing has to be typed. From about 9, when typing is comfortable, they move to Python. The free first class shows where your child should begin.

### When does Informatik start at Erfurt schools?

In grade 5. Thuringia introduced the subject Medienbildung und Informatik in 2024/25 with two weekly hours in grades 5 and 6. It is being added one grade a year and reaches grade 10 in 2029/30, according to the Gesellschaft für Informatik.

### Is there any coding in Grundschule in Thuringia?

Not as a subject. Grundschule covers grades 1 to 4 and has no Informatik subject on the timetable. Children who want to code before grade 5 learn outside school.

### When are classes in Erfurt time?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Erfurt children usually choose mid-afternoons or Saturday and Sunday mornings.

### What is the snow project?

An original lesson of ours on Deutscher Wetterdienst records from the Erfurt-Weimar station. Children count snow days per year, then per winter, and discover that 2010, the top year, was really parts of two different winters.

### Will my child use ChatGPT?

No. OpenAI requires users to be at least 13 and to have a parent's permission under 18. Children in our classes learn how AI works by building small programs themselves, not by chatting with adult tools.

### Where are the teachers?

In India, teaching live over video. That is why afternoon classes in Erfurt suit them: 15:15 in Erfurt is 19:45 in India during the German winter. Your child keeps the same mentor every week.

### How many children are in a group?

A batch has fifteen to twenty children of about the same age. Families who prefer private lessons choose one-to-one: two classes a week with the mentor, at times agreed with you.

### How are fees paid?

Monthly. The fee is shown in euro at the European Central Bank reference rate and charged in US dollars, which your bank converts; expect a small difference on the bank statement. The first class costs nothing and needs no card.

## Related pages

- [Coding classes in Thuringia](/coding-classes-in-thuringia): The Land's school rules and our classes.
- [Coding classes for kids in Germany](/coding-classes-for-kids-germany): Our guide for children across Germany.
- [Scratch classes for kids](/scratch-classes-for-kids-germany): Block coding, the usual first step.
- [Informatik-Biber practice](/informatik-biber-practice-in-english): Our own puzzles in the Biber style.
- [AI course for kids](/ai-course-for-kids-germany): How children learn about AI safely.
- [How we teach](/how-we-teach): Our live classes, explained.

## Contact

Book the free first class at [https://learn.modernagecoders.com/coding-classes-for-kids-in-erfurt-germany](https://learn.modernagecoders.com/coding-classes-for-kids-in-erfurt-germany#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
