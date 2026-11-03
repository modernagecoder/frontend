---
title: "Coding Classes for Kids in Salzgitter: Live Online, in English"
description: "Coding classes for kids in Salzgitter aged 6 to 12: live online in English, why Lower Saxony starts Informatik in grade 9, contests and a snowy-winters project."
canonical: https://learn.modernagecoders.com/coding-classes-for-kids-in-salzgitter-germany
source: src/pages/coding-classes-for-kids-in-salzgitter-germany.html
---
> For Salzgitter children aged 6 to 12, Modern Age Coders runs coding classes that are live, online and in English. Six to eight year olds snap Scratch blocks into games and stories; at nine or so they switch to typing Python and counting real data. Their mentor, who works from India, goes at the child's speed and gets used to how they talk. Families choose a class of fifteen to twenty or private lessons, on weekday afternoons or Saturday and Sunday mornings. Lower Saxony's compulsory Informatik only begins in grade 9.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / Kids in Salzgitter

Salzgitter · Coding for children · Ages 6 to 12

# Coding classes for kids in Salzgitter

In Lower Saxony, Informatik becomes compulsory in grade 9. For a Salzgitter child that is fourteen or fifteen, long after the age when building a game feels like play and every puzzle is a reason to cheer. Below, Salzgitter parents of six to twelve year olds will find what school does and does not cover at that age, what our English-language lessons feel like for a small child, two contests that cost nothing, and a snow project from Ringelheim where one winter with no snow at all quietly disappears from a careless count.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Ages: 6 to 12, grouped by age; Begins with: Scratch blocks; Then: Typed Python from about 9; Salzgitter times: Afternoons and weekend mornings; Teachers: Mentors based in India; First class: Free, no card needed. Rated 4.9 across 547 Google reviews.

## Three courses for Salzgitter children

One that grows with a child over a year, one short taster, and one for older children ready to type.

- [Coding for Kids](/courses/kids-coding-blocks-masterclass): Six to twelve, grouped by age, about ten to twelve months. Starts with Scratch stories and games and ends with small apps and a peek at AI.
- [Scratch Coding for Kids](/courses/scratch-programming-complete-course): Six to twelve, three to four months. A compact start for a child who has never coded, finishing with several games of their own.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass): Nine to twelve. Typing real Python, drawing with code and counting real data, such as the snow days below.

## When will a Salzgitter child first have Informatik at school?

In grade 9, at around fourteen. Until then computing is not a compulsory subject in Lower Saxony.

### Grades 9 and 10, for everyone

The Gesellschaft für Informatik reports in its Informatik-Monitor 2026/27 that since the 2024/25 school year Informatik has been compulsory in grades 9 and 10 at every type of general school in Lower Saxony, from the Oberschule to the Gymnasium.

That is a real step forward. It also means a Salzgitter child spends Grundschule, grades 1 to 4, and the first four years of secondary school without a fixed Informatik lesson.

### And afterwards, few continue

In the Oberstufe, which in Lower Saxony runs from grade 11 to grade 13, the subject is optional again. The monitor names Lower Saxony among the three Länder where only about one pupil in twelve takes Informatik at that stage.

So the two compulsory years in grades 9 and 10 are, for most young people, all the Informatik they will have at school.

**Computing in a Salzgitter school career, by grade**

| Grades | Age, roughly | Compulsory Informatik? |
|---|---|---|
| Grades 1 to 4, Grundschule | 6 to 10 | No |
| Grades 5 to 8, secondary school | 10 to 14 | No |
| Grades 9 and 10 | 14 to 16 | Yes, at every general school since 2024/25 |
| Grades 11 to 13, Oberstufe | 16 to 19 | Optional; about one pupil in twelve takes it |

Sources: KMK, Primarbereich and school types (the Oberschule is Lower Saxony's school with several tracks); Gesellschaft für Informatik, Informatik-Monitor 2026/27, Lower Saxony page and national summary. Read on 2 November 2026. Ages are our own rough guide.

We teach alongside school, not instead of it. What an early start gives a Salzgitter child is not a head start on grades but years of practice in thinking step by step: spotting a pattern, testing an idea, and finding out calmly why a program did something odd. When Informatik arrives in grade 9, those habits are already there. The [Lower Saxony page](/coding-classes-in-lower-saxony) has more on the Land.

## Which winter in Salzgitter had the fewest snow days?

From 1965 to 1999 the weather station at Salzgitter-Ringelheim measured the snow every morning, and the Deutscher Wetterdienst now publishes those readings for anyone to reuse under CC BY 4.0. Children of 10 to 12 use them to learn a quiet trap: a box you never create can never show you a zero.

### The data

The file has one row for each day from 1 January 1965 to 31 December 1999, 12,753 rows in all; November 1999 is missing, shortly before the station closed. One column holds the snow depth in centimetres, measured once each morning. We saved it as ringelheim_days.txt.

A snow day, for us, is a day with at least 1 centimetre of snow on the ground. That is our own rule, and children write it down before they count.

### Winters cross New Year

Snow falls in December and in January, so a winter belongs to two years. We name each winter by the year it starts, counting from July to the next June: winter 1978 means July 1978 to June 1979.

The question sounds simple: in which winter did Salzgitter have the fewest snow days? The first program gives an answer, and the answer is wrong for a reason children love to discover.

**Version 1: count snow days in each winter** (Python)
```python
snow_days = {}
with open("ringelheim_days.txt", encoding="latin-1") as f:
    next(f)
    for line in f:
        cols = [c.strip() for c in line.split(";")]
        day, snow_cm = cols[1], int(float(cols[9]))
        year, month = int(day[:4]), int(day[4:6])
        winter = year if month >= 7 else year - 1   # a winter starts in July
        if snow_cm >= 1:
            snow_days[winter] = snow_days.get(winter, 0) + 1

print("Winters in the list:", len(snow_days))
print("Fewest snow days:", min(snow_days.values()))
```
It prints Winters in the list: 35 and Fewest snow days: 2.

Two things are wrong, and neither is a typing mistake. First, the list includes two half winters at the edges of the file: January to June 1965, and July to December 1999. The "2" is that last half winter, cut off by the end of the data. Second, and sneakier: the program only creates a box for a winter when it meets a snow day. A winter with no snow at all never gets a box, so it can never be the answer. The real record is missing, not because the data lost it, but because the program never looked.

**Version 2: make every winter first, at zero** (Python)
```python
all_winters = {w: 0 for w in range(1965, 1999)}   # every full winter, 1965/66 to 1998/99
for w in all_winters:
    all_winters[w] = snow_days.get(w, 0)

print("Winters checked:", len(all_winters))
fewest = min(all_winters.values())
print("Fewest snow days:", fewest, "in", [f"{w}/{w + 1}" for w, n in all_winters.items() if n == fewest])
most = max(all_winters.values())
print("Most snow days:", most, "in", [f"{w}/{w + 1}" for w, n in all_winters.items() if n == most])
```
It prints Winters checked: 34, Fewest snow days: 0 in ['1989/1990'] and Most snow days: 102 in ['1969/1970'].

**Snow days at Salzgitter-Ringelheim, full winters 1965/66 to 1998/99 (our count, at least 1 cm of snow)**

| Winter | Snow days |
|---|---|
| 1969/1970, the snowiest | 102 |
| 1978/1979 | 76 |
| 1986/1987 | 78 |
| 1988/1989 | 5 |
| 1989/1990, the only winter with none | 0 |
| 1991/1992 | 6 |

Data: Deutscher Wetterdienst, Climate Data Center, daily values for station 04364 Salzgitter-Ringelheim, snow depth column, CC BY 4.0, downloaded 3 November 2026. The winter rule, the snow-day rule and every count are ours.

Winter 1989/90 had not a single morning with snow lying at Ringelheim, the only one of 34 full winters in the file. Version 1 could not see it, because nothing ever made a box for it. Version 2 makes all 34 boxes first, sets each to zero, and only then fills them in, so an empty winter shows up as exactly what it was. At the other end, 1969/70 had snow on 102 mornings, more than three months. The deepest snow anywhere in the file was 41 centimetres, on 13 January 1987.

1. **Ages 6 to 8, no screen.** Draw a box for every day of the week before you start, then put a sticker in the box each day it rains. Which day has no sticker? Could you tell if you had not drawn its box?
2. **Ages 8 to 10, Scratch.** Make a list with one zero for each month, then add one to a month each time a pretend snowflake lands in it. Find the month that stays at zero.
3. **Ages 10 to 12, Python.** Run Version 1, explain both mistakes in your own words, then run Version 2 and check the answer.
4. **Going further.** Change the snow-day rule to at least 5 centimetres. Does 1969/70 stay the snowiest winter?

## Can a Salzgitter child with little English follow the classes?

Usually, yes. The lessons are in English only, but most of a coding class happens on the screen, and the mentor adjusts to the child.

### English, and only English

We do not teach in German, and we say so before anything is booked. For a child at a German school, the class is also an hour of listening to clear, simple English, which many Salzgitter parents see as a bonus rather than a hurdle.

### Short words, shown not told

Mentors speak in short sentences, point at the screen and repeat in easier words. A six year old who answers with one English word, or a German one, is understood and gently given the English word back.

### The same mentor each week

Every child keeps one mentor, based in India, who soon knows whether they like to be challenged, need a quiet moment, or learn by changing a game someone else made.

Classes are an hour long, twice a week, and broken into small tasks for the youngest children. Parents get a short note after classes. Our page on [online coding for kids in Germany](/online-coding-classes-for-kids-germany) explains the format.

## Which free contests can a Salzgitter child enter this school year?

Two are open to primary children, both run through schools, and neither needs any coding.

**Two free contests for young children, 2026/27**

| Contest | When | What children do | How to enter |
|---|---|---|---|
| Informatik-Biber | 9 to 20 November 2026 | Logic puzzles on screen, grades 3 to 13 | Through the school |
| Känguru der Mathematik | 8 April 2027 | 24 maths puzzles in 75 minutes for grades 3/4 and 5/6 | School registers from 1 December 2026 to 31 January 2027 |

Sources: Bundesweite Informatikwettbewerbe, Informatik-Biber 2026 pages; Känguru der Mathematik e.V., 2027 dates. Read on 2 November 2026. The organisers moved Känguru 2027 from its usual third Thursday in March to April, since March would collide with the run-up to Easter breaks across Germany.

A practice version of the Biber, the Schnupper-Biber, has been open since 14 September 2026, and results of the main round follow in December 2026. If your child wants to warm up, we have written our own English puzzles for [Biber practice](/informatik-biber-practice-in-english) and for [Känguru practice](/kangaroo-math-germany-practice). The organisers' real tasks are theirs, and we have no link to either contest.

## When are classes in Salzgitter time?

Young children concentrate well straight after school or on a weekend morning. For the mentor in India those hours fall in the late afternoon or evening, which works on both sides.

**Example Salzgitter times beside the mentor's clock**

| Salzgitter | India this winter | India after 28 March 2027 |
|---|---|---|
| 14:15 | 18:45 | 17:45 |
| 16:20 | 20:50 | 19:50 |
| Saturday 10:15 | 14:45 | 13:45 |
| Sunday 09:45 | 14:15 | 13:15 |

German law (Einheitenzeitgesetz) sets UTC+1 for winter and UTC+2 for summer; the change back happened on 25 October 2026 and the next change forward is on 28 March 2027. India is on UTC+5:30 all year. Example times only, not set batches.

Lower Saxony school holidays for 2026/27, from the Kultusministerkonferenz table: autumn 12 to 24 October 2026; Christmas 23 December 2026 to 9 January 2027; a short winter break on 1 and 2 February 2027; Easter 22 March to 3 April 2027; single days on 7 and 18 May 2027; summer 8 July to 18 August 2027. Lessons do not stop for the holidays unless you ask. Children log in from every district of Salzgitter and from nearby Wolfenbüttel, Braunschweig, Goslar and Peine.

## What a Salzgitter child can do at each stage

Five steps we watch for. They decide which group a child joins and what we report home.

**Steps a child climbs with us (our scale)**

| Step | Often around | Shown when the child |
|---|---|---|
| 1. Order | 6 to 7 | Put a few steps in order and say what a sprite will do |
| 2. Repeat | 7 to 9 | Use a loop instead of copying the same block |
| 3. Count | 8 to 10 | Tallies things in a list and keeps a running score |
| 4. Type | 9 to 11 | Write a short Python program with a loop and an if |
| 5. Check | 10 to 12 | Make every box first, then fill it, and spot an empty one |

### For parents

Stage 5 is the snow project. A child who asks "did I make a box for every case?" will check their own answers in maths too.
You hear what your child built and explained, never just minutes of screen time.

### For children

Zero is a real answer. Make sure your program has a place to put it.
If a list is shorter than you expected, find out who is missing.

## Nine more courses for Salzgitter children

Live in English, with a regular mentor, as a class or one to one.

### Logic and numbers

Ages 5 to 12

- [Problem solving](/courses/problem-solving-and-computational-thinking-for-kids): Step-by-step puzzles, ideal before the Biber.
- [Elementary maths](/courses/elementary-mathematics-complete-masterclass): Primary maths taught for understanding.
- [Abacus and mental maths](/courses/abacus-mental-maths-course-for-kids): From beads to quick mental arithmetic.

### Games

Ages 7 to 14

- [Game development](/courses/game-development-masterclass-for-kids): Scratch, Roblox and Minecraft games.
- [Minecraft coding](/courses/minecraft-coding-for-kids-course): Code in a world children already know.
- [Godot games](/courses/godot-game-development-course-for-kids-and-teens): A real game engine for older children.

### Making and understanding

Ages 8 to 12

- [Apps with blocks](/courses/block-coding-app-development-masterclass): Working phone apps without typing.
- [Websites for kids](/courses/kids-ai-web-development-course): A child's own web page.
- [AI literacy](/courses/ai-literacy-for-kids-course): What AI is, with no adult accounts.

## How live classes fit a Salzgitter week

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Afternoons** After school and homework on weekdays.
- **Saturday or Sunday** A morning hour, calm for younger children.
- **Private** A slot arranged with the mentor.

- **Little wins** Young children finish something every few minutes.
- **Hands on** The child clicks and types; the mentor asks.
- **Children of an age** Groups are kept to similar ages.
- **Notes for parents** What was made and what comes next.
- **Simple English** Short words, everything shown.
- **Class or one to one** Fifteen to twenty children, or private.

## Fees for Salzgitter families

Eight live classes a month, one payment. The euro figure comes from converting at the ECB reference rate; the money itself moves in US dollars, and your bank does the exchange, so expect the booked euro amount to differ slightly.

- Free first class: Free. A free first class. A puzzle and a first Scratch game. No card needed.
- Group batch: €90 (charged in US dollars) a month. Fifteen to twenty children of similar age. One regular mentor. Two classes a week. Monthly, stop whenever you want.
- One to one: €134 (charged in US dollars) a month. Your child and one mentor. A plan for your child alone. Times that fit your family.

## Coding classes for kids in Salzgitter: common questions

### Are the classes in German?

No. We teach only in English, live. Mentors keep it simple, show everything on screen and adapt to each child's speed and accent, so children who are just starting English can follow.

### What is the youngest age?

Six. Children of 6 to 8 start with Scratch blocks, which need no typing, and most move to typed Python at about 9.

### Do Salzgitter schools teach coding?

Compulsory Informatik in Lower Saxony begins in grade 9 and continues in grade 10, at every general school since 2024/25, according to the Gesellschaft für Informatik. Before that there is no compulsory computing lesson.

### Is six too young?

Not usually. Six year olds make simple stories and games with blocks, in short tasks with lots of praise. The free first class shows quickly whether your child enjoys it.

### When are classes in Salzgitter time?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Most children come on weekday afternoons or a weekend morning.

### Which contests can my child enter?

The Informatik-Biber, a free puzzle contest from grade 3, runs from 9 to 20 November 2026 through schools. The Känguru der Mathematik follows on 8 April 2027, with school registration from 1 December 2026.

### Where are the teachers?

Our mentors live and work in India and teach over live video. Their clock runs ahead of Salzgitter, so a 16:20 class here is 20:50 there this winter.

### How many children share a class?

Between fifteen and twenty, all close in age. If you prefer, the one-to-one plan gives your child two private lessons a week.

### How do I pay?

Once a month, by card or bank transfer. We list euro, converted at the ECB reference rate, and charge in US dollars, so your bank's exchange may shift the final euro figure by a little. The first lesson is free.

### What is the snow project?

Children of about 10 to 12 count snow days at the old Salzgitter-Ringelheim weather station from 1965 to 1999. A careless program misses the winter of 1989/90, the only one with no snow at all, and children learn to make every box first.

## Related pages

- [Coding classes in Germany](/coding-classes-in-germany): The starting point for every city.
- [Coding classes in Lower Saxony](/coding-classes-in-lower-saxony): Informatik rules across the Land.
- [Coding classes for kids in Germany](/coding-classes-for-kids-germany): Our national page for 6 to 12.
- [Python for kids in Germany](/python-classes-for-kids-germany): When a child is ready to type.
- [AI course for kids](/ai-course-for-kids-germany): How machines learn, for children.
- [How we teach](/how-we-teach): Our live classes explained.

## Contact

Book the free first class at [https://learn.modernagecoders.com/coding-classes-for-kids-in-salzgitter-germany](https://learn.modernagecoders.com/coding-classes-for-kids-in-salzgitter-germany#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
