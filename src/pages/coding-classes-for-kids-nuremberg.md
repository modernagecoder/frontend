---
title: "Coding Classes for Kids in Nuremberg: Live Online, in English"
description: "Coding classes for kids in Nuremberg aged 6 to 12: live online in English, computing in Bavarian schools by type, the Informatik-Biber and a city data project."
canonical: https://learn.modernagecoders.com/coding-classes-for-kids-nuremberg
source: src/pages/coding-classes-for-kids-nuremberg.html
---
> Coding classes for kids in Nuremberg with Modern Age Coders are live video lessons, in English, for children from 6 to 12. Children start by building games from blocks and move to typed Python at about nine, later trying data projects such as fixing the map positions in Nuremberg's own facilities list. One mentor stays with your child and adapts the pace and language. Families decide between a shared group of fifteen to twenty and one-to-one teaching, on school afternoons or at weekends.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / Kids in Nuremberg

Nuremberg · Coding for children · Ages 6 to 12

# Coding classes for kids in Nuremberg

In Bavaria, how much computing a child gets at school depends on which school they move to after grade 4. A Mittelschule pupil has an Informatik lesson every week from grade 5; a Gymnasium pupil gets one weekly hour of it inside another subject in grades 6 and 7, and then waits. This page explains those routes for Nuremberg families, how our English-language live lessons work for children of 6 to 12, a free puzzle contest that starts next week, and a project in which children repair the map positions in the city's own list of public buildings.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Ages: 6 to 12, in age groups; Starts with: Blocks on screen, then Python; Group size: Fifteen to twenty, or one to one; Nuremberg times: Early afternoon, late afternoon or weekends; Mentors: Based in India, teaching live; First class: Free, no card needed. Rated 4.9 across 547 Google reviews.

## Three courses for Nuremberg children

A long block-coding course for the youngest, a puzzle course for careful thinkers, and typed Python for children ready for real code.

- [Blocks, games and apps](/courses/kids-coding-blocks-masterclass): For children from 6 to 12 in age groups. Most of a school year spent turning block games into small apps, with a first look at AI at the end.
- [Puzzles before programs](/courses/problem-solving-and-computational-thinking-for-kids): For 7 to 12 year olds. Logic, patterns and step-by-step plans, a natural warm-up for the Informatik-Biber.
- [Real Python, small AI](/courses/python-ai-kids-masterclass): Aimed at confident readers between nine and twelve. Typed code from the first week, games, drawings and data work like the map repair below.

## How much computing does a Nuremberg child get at school?

None in primary school, and then very different amounts depending on the secondary school. Our figures are taken from the GI's Informatik-Monitor for 2026/27, whose Bayern chapter is compiled from the Land's school regulations.

### Grades 1 to 4

In Bavaria, Grundschule means grades 1 to 4. There is no computing subject in it, so a Nuremberg child can reach the age of ten without a single lesson on how a program works.

After grade 4, families choose between the Mittelschule, the Realschule and the Gymnasium. That choice also decides how much computing comes next.

### Grades 5 to 11, by school type

The Mittelschule teaches compulsory Informatik for one lesson a week in every year from grade 5 to grade 10, and may add a two-hour elective in grades 7 to 10. The Realschule has a compulsory subject called Informationstechnologie throughout grades 5 to 10, between seven and eleven weekly hours in total depending on the subject group.

At the Gymnasium, computing sits inside Natur und Technik as one weekly hour with an Informatik focus in grades 6 and 7. The scientific-technological branch adds two hours of Informatik in grades 9 and 10, and in grade 11 every branch has two compulsory hours.

**Computing in Bavarian schools, 2026/27**

| School | Grades | What the timetable gives |
|---|---|---|
| Grundschule | 1 to 4 | No computing subject |
| Mittelschule | 5 to 10 | Informatik, one lesson every week, compulsory |
| Realschule | 5 to 10 | Informationstechnologie, compulsory, 7 to 11 hours in total by subject group |
| Gymnasium | 6 and 7 | One weekly hour of Informatik inside Natur und Technik |
| Gymnasium, scientific-technological branch | 9 and 10 | Informatik, two hours a week |
| Gymnasium, all branches | 11 | Two compulsory hours of Informatik or a related subject |

Source: Gesellschaft für Informatik (GI), Bayern chapter of the 2026/27 monitor, read on 2 November 2026. The Bavarian Gymnasium is a nine-year route again, with grade 11 as the Einführungsphase and grades 12 and 13 as the Qualifikationsphase; the written Informatik Abitur is set centrally and is largely programming on paper.

Destatis counted 529,508 people in Nuremberg at the end of 2024, and its neighbours Fürth, with 132,036, and Erlangen, with 115,928, follow the same Bavarian rules. Families in Schwabach, Stein or Zirndorf do too. Whichever school your child ends up at, a few years of building and debugging at home mean that the first school lesson on algorithms feels familiar rather than strange.

## Are the lessons in English or in German?

English only, live. Most young children cope very well, for reasons that have more to do with the mentor than with the child.

### No German option

We teach in English and nothing else. Knowing that before a trial lesson saves everyone time, so we say it here, near the top.

### The mentor adjusts

Short sentences, a pointer on the shared screen, a step repeated with easier words. A child who replies in German is understood and offered the English phrase back.

### Words a child already hears

Much of the vocabulary is the vocabulary of games: start, jump, score, level, again. Children often know more of it than their parents expect.

Our mentors teach from India over live video. Because India is hours ahead of Nuremberg, an afternoon here is evening there, which makes after-school lessons easy to arrange. Your child keeps one mentor for the whole course, so that person soon learns what keeps your child interested and when to slow down.

For families who already live in English: the AGIS directory lists the Franconian International School in Erlangen, with 711 pupils and the IB Middle Years and Diploma programmes. We mention it only as background; we have no connection with any school.

## Where are Nuremberg's public buildings? Repairing a broken map

The city publishes a list of its own facilities, from libraries and pools to schools and offices, with a position for each one. The positions have lost their decimal points on the way. Older children put them back, using one thing they know for certain: where Nuremberg is.

### The data

The file Städtische Einrichtungen has 401 entries with a name, an address, a homepage, opening hours and two coordinates. A coordinate should look like 11.0857 for the east position and 49.4529 for the north position.

In the published file they look like 11.085.719.500.104: a dot after every three digits, as if a spreadsheet had treated the value as a big whole number. Python cannot read that as a number at all.

### The question

Can we rebuild every position, and which entries cannot be saved? We copy the name and the two coordinates into nuernberg_places.csv and leave the strange dots in.

We also agree a box that any Nuremberg position must fall inside: between 10.9 and 11.4 degrees east and between 49.3 and 49.6 degrees north. The box is our own, chosen generously so that no real Nuremberg address falls outside it.

**Version 1: remove the dots and guess where the point goes** (Python)
```python
import csv

def naive(text):
    return int(text.replace(".", "")) / 10**12

places = []
with open("nuernberg_places.csv", encoding="utf-8") as f:
    for row in csv.DictReader(f):
        places.append(row)

outside = 0
for row in places:
    if not 10.9 <= naive(row["x"]) <= 11.4:
        outside += 1
print("Places:", len(places))
print("Longitude outside the box:", outside)
```
It prints: Places: 401 and Longitude outside the box: 44.

The first idea is to remove the dots and always put the decimal point in the same place, after the first two digits, which is what dividing by 10 to the power 12 does. It works for most rows, but 44 longitudes land outside the box. Looking at them shows why: some values were stored with fewer digits, so "1.106.680.388.669" becomes 1.1066 instead of 11.0668. The rule "always two digits before the point" was a guess, and the data broke it.

**Version 2: put the point where the value makes sense** (Python)
```python
def repair(text, low, high):
    digits = text.replace(".", "")
    for point in range(1, len(digits)):
        value = float(digits[:point] + "." + digits[point:])
        if low <= value <= high:
            return value
    return None

fixed = []
broken = []
for row in places:
    lon = repair(row["x"], 10.9, 11.4)
    lat = repair(row["y"], 49.3, 49.6)
    if lon is None or lat is None:
        broken.append(row["name"])
    else:
        fixed.append((lat, row["name"]))
print("Repaired:", len(fixed))
print("Cannot be placed:", len(broken))
print("Furthest north:", max(fixed)[1])
```
It prints: Repaired: 396, Cannot be placed: 5 and Furthest north: Städtische Friedhöfe Region Westfriedhof - Friedhof Großgründlach.

The second version tries every position for the decimal point and keeps the first one that lands inside the box. That repairs 396 of the 401 entries. The five that are left cannot be placed at all: every one of them carries the same east value, 45.112.561.028.337, and a north value of plain 0, which looks like a placeholder. Two are childcare centres whose names begin "Geplante Kita", still being planned. The program does not invent positions for them; it lists them, so a person can check.

**What happened to the 401 positions (our calculation)**

| Step | Entries |
|---|---|
| Entries in the file | 401 |
| Longitude wrong with a fixed rule (Version 1) | 44 |
| Repaired by checking the range (Version 2) | 396 |
| Cannot be placed and need a person to check | 5 |

Data: Stadt Nürnberg, Nürnberg: Städtische Einrichtungen (2025 file), published through open.bydata, licence CC BY 4.0, downloaded 2 November 2026. The repairs, the box and the counts are our own; the furthest north repaired entry is a cemetery in Großgründlach and the furthest south is the Bürgeramt Süd.

1. **Ages 6 to 8, with a number card.** Write 1 2 5 0 on a card and ask: is this the price of an ice cream or of a bicycle? Where does the comma go? Knowing the world tells you.
2. **Ages 8 to 10, in Scratch.** Store five numbers without their point and let a sprite move the point until each number falls between 10 and 12.
3. **Python, for 10 to 12 year olds.** Start Version 1, inspect three of the 44 wrong values on paper, and only then attempt Version 2 on your own.
4. **Going further.** With the repaired positions, find the facility closest to the Hauptmarkt. Before you calculate, decide whether one degree east and one degree north are the same distance on the ground.

## Is the Informatik-Biber open to Nuremberg children?

Yes, from grade 3, through the school. In 2026 the Biber weeks start on 9 November, the Monday after the Bavarian autumn holidays.

### What children do

The Informatik-Biber is a free online puzzle quiz run by the Bundesweite Informatikwettbewerbe for grades 3 to 13, and no prior knowledge is needed. In 2025 more than 580,000 pupils from more than 3,224 schools took part, and 2026 is its 20th year.

Primary pupils have nine puzzles and 30 minutes; grades 5 and 6 have twelve puzzles and 35 minutes. Nothing has to be programmed.

### When and how

The 2026 Biber weeks run from 9 to 20 November 2026. Schools register their pupils and run the quiz in a lesson, so the class teacher is the person to ask.

Bavarian schools are on autumn holiday from 2 to 6 November 2026. The practice round, the Schnupper-Biber, has been open since 14 September 2026 and closes a few days before the contest, so most classes will already have tried it.

Biber puzzles are about order, hidden rules, routes and codes. We do not reuse the real tasks; our mentors write their own puzzles in a similar style, and a child who enjoys those will usually enjoy the Biber. We are not connected with BWINF or with any Nuremberg school.

## When could my child have lessons in Nuremberg?

Bavarian primary pupils are often home by early afternoon, so groups run from then until early evening, plus weekends. The examples show the same moment on the mentor's clock.

**Example Nuremberg start times and India time**

| Start in Nuremberg | Mentor's clock, winter | Mentor's clock after 28 March 2027 |
|---|---|---|
| 14:15 | 18:45 | 17:45 |
| 16:20 | 20:50 | 19:50 |
| Saturday 11:30 | 16:00 | 15:00 |

Examples only; there are no fixed batch times. The Einheitenzeitgesetz puts Germany on Central European Time, UTC+1, for the cold months and on summer time, UTC+2, from spring to autumn; this autumn's change was on 25 October 2026 and the spring change falls on 28 March 2027. India never changes from UTC+5:30, so the gap to Nuremberg is 4 hours 30 minutes now and 3 hours 30 minutes in summer.

Classes continue through the Bavarian school holidays, which the KMK table for 2026/27 lists as 2 to 6 November 2026, 24 December 2026 to 8 January 2027, 8 to 12 February 2027, 22 March to 2 April 2027, 18 to 28 May 2027 and 2 August to 13 September 2027. Families who travel simply miss a lesson or two.

## From first blocks to fixing real data

Five stages we use ourselves to group children and to tell parents what has changed.

**Our coding stages for ages 6 to 12**

| Stage | About | Your child |
|---|---|---|
| 1. Steps | 6 to 7 | Lines up blocks so a character moves and speaks |
| 2. Repeats | 7 to 8 | Swaps a row of copied blocks for one loop |
| 3. Choices | 8 to 9 | Programs a game where pressing keys changes the score |
| 4. Typing | 9 to 11 | Types Python that stores values and repeats steps |
| 5. Checking | 10 to 12 | Tests data against what must be true and fixes or flags it |

### For parents

Stage 5 is the map project. A child who asks "could this number really be right?" has learned the habit behind every good program.
Our notes to you are about finished work and new understanding, never about time online.

### For children

If you know roughly what an answer should be, use that to check the computer.
When something cannot be fixed, say so and list it. Do not make up a value.

## Nine more courses for Nuremberg children

Live, in English and with one regular mentor, in a class or privately.

### Starting young

Ages 5 to 10

- [Readiness at six](/courses/reasoning-and-readiness-course-for-young-thinkers): Order, patterns and logic before any typing.
- [Scratch, three months](/courses/scratch-programming-complete-course): A first finished game in one school term.
- [Confident mental maths](/courses/mental-maths-mastery-kids): Number sense for five to ten year olds.

### Games

Ages 7 to 14

- [Minecraft commands](/courses/minecraft-coding-for-kids-course): From blocks to typed instructions.
- [Roblox scripting](/courses/roblox-game-coding-for-kids-lua-course): Real Luau scripts for 8 to 14.
- [Godot engine](/courses/godot-game-development-course-for-kids-and-teens): A real game engine, step by step.

### Making and understanding

Ages 8 to 15

- [Phone apps](/courses/block-coding-app-development-masterclass): Working apps built from blocks.
- [How AI learns](/courses/ai-literacy-for-kids-course): Examples, patterns and limits, for 8 to 14.
- [Maths in code](/courses/maths-through-coding): School maths tested with short programs.

## What a week of lessons looks like in Nuremberg

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Early afternoon** Right after a short Bavarian primary school day.
- **Weekends** Saturday or Sunday, rested and unhurried.
- **1-on-1** A slot you agree directly with the mentor.

- **Familiar face** The same mentor from the first lesson onwards.
- **Simple English** Spoken slowly, shown on screen, repeated gladly.
- **Hands on keys** Your child builds; the mentor coaches.
- **Right group** Children are grouped by age and experience.
- **Parent notes** Brief news on what was made and what is next.
- **Class or private** Fifteen to twenty children, or one to one.

## Fees for families in Nuremberg

Fees are monthly and cover eight live lessons. We show them in euro, based on the European Central Bank's reference rate; the actual payment is taken in US dollars and your bank converts it, so the amount on your statement may differ by a little.

- Free first class: Free. A free trial lesson. A puzzle and a first small program. No card asked for.
- Group batch: €90 (charged in US dollars) a month. Fifteen to twenty children of similar age. The same mentor each week. Two lessons a week. Monthly, stop at any time.
- One to one: €134 (charged in US dollars) a month. Your child with one mentor. Your child's own projects. Times that suit your week.

## Coding classes for kids in Nuremberg: your questions

### Are the classes in German?

No. We only teach in English, and always live. Mentors talk in plain sentences, demonstrate on the shared screen and get used to the way your child speaks and how fast they work, so beginners in English are not lost. Programming keywords are English in every country anyway.

### Is there coding at Nuremberg primary schools?

There is no subject for it. Bavarian Grundschule covers grades 1 to 4 with no computing subject. Computing starts in grade 5 at the Mittelschule and Realschule, and in grades 6 and 7 at the Gymnasium, inside Natur und Technik.

### How does computing differ between Bavarian school types?

A lot. The Mittelschule gives one Informatik lesson every week from grade 5 to grade 10. The Realschule teaches Informationstechnologie from grade 5 to grade 10, seven to eleven weekly hours in total depending on the subject group. The Gymnasium has one weekly hour inside Natur und Technik in grades 6 and 7, more in the scientific-technological branch, and two hours for everyone in grade 11.

### What age can my child start at?

From 6. Young children use picture blocks, so no typing or fluent reading is needed. Many move to typed Python at about 9.

### When are classes in Nuremberg time?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Because Bavarian primary pupils are often home early, some Nuremberg families choose a start soon after 14:00.

### When is the Informatik-Biber in 2026?

From 9 to 20 November 2026, starting the Monday after the Bavarian autumn holidays. It is free, open from grade 3, needs no prior knowledge and is run in school, so ask the class teacher whether the school is taking part.

### Where are the mentors based?

In India. They teach live over video: a 14:15 lesson in Nuremberg is 18:45 for the mentor during the winter, and it is the same mentor each time.

### How many children share a class?

Fifteen to twenty, of a similar age. Families who prefer private teaching book two weekly one-to-one sessions instead.

### How are fees paid?

Each month. Prices here are converted to euro with the ECB reference rate, while your card is charged in US dollars that your bank converts, so expect a small difference on your statement. The trial lesson is free and needs no card.

### What will my child make?

At first, block games and little cartoons. Later, Python programs, drawings with code and, from about 10, work with real data, such as repairing the positions in Nuremberg's list of public facilities.

## Related pages

- [Coding classes in Germany](/coding-classes-in-germany): Our pages for families across Germany.
- [Informatik-Biber practice](/informatik-biber-practice-in-english): Our own Biber-style puzzles, in English.
- [Informatik by Land](/informatik-in-german-schools-by-state): Bavaria next to the other fifteen Länder.
- [Minecraft coding in Germany](/minecraft-coding-classes-germany): For children who love building worlds.
- [AI tools age guide](/ai-tools-age-guide): Which AI tools suit which ages.
- [How we teach](/how-we-teach): One of our live lessons, described.

## Contact

Book the free first class at [https://learn.modernagecoders.com/coding-classes-for-kids-nuremberg](https://learn.modernagecoders.com/coding-classes-for-kids-nuremberg#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
