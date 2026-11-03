---
title: "Coding Classes for Kids in Rostock: Live and in English"
description: "Coding classes for kids in Rostock aged 6 to 12, live online in English: Informatik in Mecklenburg-Vorpommern from grade 5 and a Warnemünde weather records project."
canonical: https://learn.modernagecoders.com/coding-classes-for-kids-in-rostock-germany
source: src/pages/coding-classes-for-kids-in-rostock-germany.html
---
> Coding classes for kids in Rostock with Modern Age Coders are live online lessons, in English, for children from 6 to 12. The youngest solve puzzles and build Scratch games; from around 9 children write Python and answer real questions with real data. Each child has one regular mentor who matches their pace and accent, either in a batch of fifteen to twenty or one to one.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / [Mecklenburg-Vorpommern](/coding-classes-in-mecklenburg-vorpommern) / Kids in Rostock

Rostock · Coding for children · Ages 6 to 12

# Coding classes for kids in Rostock

Ask a Rostock child what the hottest day at the beach in Warnemünde has ever been and you will get a guess, a story and probably a dare. Ask a computer and you get an exact answer from 79 years of weather records, plus a surprise about how records work. That is the kind of question our live coding classes in English start from. Mecklenburg-Vorpommern gives every pupil Informatik from grade 5; we help children aged 6 to 12 get there curious, confident and already building things.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Ages: 6 to 12, in age groups; Tools: Puzzles, Scratch, then Python; Group: Fifteen to twenty, or one to one; When: After school, weekend mornings; Mentors: Teaching from India, in English; Try: A free first class. Rated 4.9 across 547 Google reviews.

## Which first course suits a Rostock child?

A thinking course for the youngest, a short Scratch course for a quick win, and Python for children ready to type.

- [Reasoning for Young Thinkers](/courses/reasoning-and-readiness-course-for-young-thinkers): Ages 6 to 9, six months, in two age bands. Patterns, sorting and step-by-step puzzles, the habits a child needs before any code.
- [Scratch Coding for Kids](/courses/scratch-programming-complete-course): Ages 6 to 12, three to four months. From a first moving sprite to finished games, a short and clear test of whether coding clicks.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass): For nine to twelve year olds over eight to ten months. Typed Python with drawings and games, then real data such as the Warnemünde records below.

## What is the hottest day ever measured in Warnemünde?

A record is the easiest program in the world to describe: remember the biggest number so far. It still has a trick in it.

### The data

The Deutscher Wetterdienst runs a weather station called Rostock-Warnemünde, less than five metres above sea level, and publishes its daily readings as open data that anyone may reuse if they name the source (licence CC BY 4.0). We downloaded the file on 3 November 2026.

For children we kept one number per day: the highest temperature reached that day, from 1 January 1947 to 31 December 2025. That makes a file called warnemuende_max.csv with 28,855 rows and, as our check found, no missing days in that column.

### Two questions

First: what was the hottest day of all, and how hot was the hottest day of the very first year?

Second, and harder: how many times was the record broken? Every year, the program asks whether that year's hottest day beat the record so far. If it did, it is a new record.

**Version 1: the hottest day of every year** (Python)
```python
import csv

hottest = {}
with open("warnemuende_max.csv", encoding="utf-8") as f:
    for line in csv.DictReader(f):
        year = line["datum"][:4]
        t = float(line["tmax"])
        if year not in hottest or t > hottest[year][0]:
            hottest[year] = (t, line["datum"])

top = max(hottest, key=lambda y: hottest[y][0])
print("Years:", len(hottest))
print("Hottest day of all:", hottest[top][1], hottest[top][0], "C")
print("Hottest day of 1947:", hottest["1947"][1], hottest["1947"][0], "C")
```
It prints: Years: 79, Hottest day of all: 2022-07-20 38.4 C and Hottest day of 1947: 1947-06-29 35.0 C.

The hottest day in the file is 20 July 2022, at 38.4 degrees. And 1947, the very first year, already had 35.0 on 29 June. Now the record count. The program walks through the years in order, keeps the record in one variable called record, and writes down each year that beats it.

**Version 2: put this under Version 1 to count records** (Python)
```python
record = None
broken = []
for year in sorted(hottest):
    t = hottest[year][0]
    if record is None or t > record:
        record = t
        broken.append((year, t))
print("Times the record was broken:", len(broken))
print(broken)
```
It prints: Times the record was broken: 3 and [('1947', 35.0), ('1992', 36.9), ('2022', 38.4)].

Only three records in 79 years, and one of them is 1947, which "breaks" the record simply by being first: there was nothing before it to beat. The next record took until 9 August 1992, at 36.9, and the one after that until 2022.

Here is the surprise children enjoy most. Change the starting year and the number of records changes, even though not one temperature changes. Start counting in 1948, and 1947's hot summer is out of the picture, so 1948, 1954, 1959, 1963, 1992 and 2022 all become records: six instead of three. Start in 1960 and you get four. A record always means "the biggest since we started counting", and the start is a choice somebody made.

**How many record hottest years Warnemünde has, depending on when you start counting (our calculation)**

| Start counting in | Records found | Record years |
|---|---|---|
| 1947 | 3 | 1947, 1992, 2022 |
| 1948 | 6 | 1948, 1954, 1959, 1963, 1992, 2022 |
| 1960 | 4 | 1960, 1963, 1992, 2022 |

Source of the temperatures: DWD Climate Data Center, station 04271 Rostock-Warnemünde, daily maximum air temperature (TXK) for 1947 to 2025, CC BY 4.0, file fetched on 3 November 2026. The code, the counts and the table were made by us. In 62 of the 79 years the hottest day reached at least 30 degrees. The DWD has no part in our classes.

1. **Youngest, with paper.** Roll a dice ten times and write the numbers in a row. Circle every number that is bigger than all the ones before it. How many circles? Roll again: is it the same?
2. **Ages 8 to 10, Scratch.** Make a variable called record that starts at 0. Ask for numbers one at a time, and make the cat cheer when a new record is set.
3. **Ages 10 to 12, Python.** Change Version 2 so it skips years before 1948, and check that you get six records.
4. **Going further.** Find the coldest day of each year instead and count record lows. Which start year gives the most records now, and why?

## When do Rostock children start Informatik at school?

In grade 5. Mecklenburg-Vorpommern teaches Informatik und Medienbildung at every school type from then on.

The KMK describes Grundschule outside Berlin and Brandenburg as grades 1 to 4, so a Rostock child is in Grundschule from about 6 to about 10. In grade 5 things change. The Gesellschaft für Informatik reports in its Informatik-Monitor 2026/27 that Mecklenburg-Vorpommern teaches the subject Informatik und Medienbildung at all school types in grades 5 to 10, at least one weekly hour in each of those years.

**Informatik for a Rostock pupil, by grade (2026/27)**

| Grade | Typical age | At school |
|---|---|---|
| 1 to 4 | 6 to 10 | Grundschule, no Informatik subject |
| 5 to 10 | 10 to 16 | Informatik und Medienbildung, at least one weekly hour each year |
| 11 and 12 | 16 to 18 | Grundkurs three hours or Leistungskurs five hours, if chosen |

Compiled from KMK information on Grundschule and from the GI Informatik-Monitor 2026/27 (Mecklenburg-Vorpommern and Germany-wide), checked on 2 November 2026. The ages are typical ones.

Measured by the GI, the Land is in a group of three that already reach six compulsory Informatik hours, the medium-term target, and it reports that about half of the Land's Oberstufe pupils take the subject. Few Länder take computing this seriously. For a parent, the practical point is simple: the school will teach the subject from grade 5, and children who arrive having already built games and asked questions of real data usually enjoy it more and find it easier. We teach beside school, never instead of it.

Our [Mecklenburg-Vorpommern page](/coding-classes-in-mecklenburg-vorpommern) covers the Land in more depth, including the Abitur.

## Can a Rostock child follow a coding class in English?

Yes, and most families are surprised how quickly. Here is why.

### We say it first

Our lessons are live and in English only; we have no German-speaking teachers. We would rather a family knows this before the free class than finds out during it.

### Children copy, then speak

A young child hears "move ten steps" while watching a sprite move ten steps. After a few lessons the words stick, because each one is tied to something that happened on the screen.

### The mentor adapts

Mentors speak slowly, use short sentences, and learn each child's accent. A child who answers in a mix of English and German is understood, and hears the English word back without any fuss.

The mentors are based in India and teach over live video, which is why afternoon times work well for Rostock. Your child is not passed from teacher to teacher; one mentor stays, and soon knows whether your child prefers to be challenged straight away or to warm up with something familiar.

## What does a Rostock child build at each age?

A rough guide from our classes. Where your child actually starts is decided together after the trial hour.

**Typical projects by age in our classes (ours)**

| Age | Typical project | What it teaches |
|---|---|---|
| 6 | A puzzle path for a robot drawn on paper | Instructions in order |
| 7 | A Scratch fish that swims when you press a key | Events |
| 8 | A Scratch game with a score | Variables |
| 9 | A Python turtle drawing a lighthouse | Loops and turning |
| 10 | A quiz that keeps the high score | A running record, like the project |
| 11 to 12 | The Warnemünde records project | Reading a file and questioning the result |

Our own outline. Children who start later move quickly through the early rows.

## At what times can Rostock children take classes?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

**Example Rostock times with the mentor's local time**

| Rostock | India, until 28 March 2027 | India, after 28 March 2027 |
|---|---|---|
| 14:50 | 19:20 | 18:20 |
| 16:20 | 20:50 | 19:50 |
| Saturday 09:15 | 13:45 | 12:45 |
| Sunday 10:30 | 15:00 | 14:00 |

Germany uses MEZ (UTC+1) in the winter half of the year and MESZ (UTC+2) in the summer half, under the Einheitenzeitgesetz; the 2026 change back was on 25 October and the 2027 change forward is on 28 March. India does not change its clocks (UTC+5:30): add 4 h 30 to a Rostock time now, and 3 h 30 from late March. Times are examples.

**Mecklenburg-Vorpommern school holidays, 2026/27**

| Holidays | Dates |
|---|---|
| Herbstferien | 15 October to 24 October 2026 |
| Weihnachtsferien | 21 December 2026 to 2 January 2027 |
| Winterferien | 8 February to 19 February 2027 |
| Osterferien | 24 March to 2 April 2027 |
| Ascension and Whitsun | 7 May, and 14 May to 18 May 2027 |
| Sommerferien | 5 July to 14 August 2027 |

Dates as listed for Mecklenburg-Vorpommern in the KMK school holiday overview 2026/2027, dated 9 October 2025.

Classes continue through school holidays unless you pause. Rostock is the largest city in Mecklenburg-Vorpommern, home to 205,307 people on the Destatis count for 31 December 2024, while the Land capital Schwerin has 98,308, in a Land of 1,573,597. Children from Warnemünde, Bad Doberan or Güstrow join the same online groups and share Rostock's holiday dates.

One more date for this month: the Informatik-Biber, a free puzzle contest for grades 3 to 13 that needs no coding, takes place from 9 to 20 November 2026. Pupils enter through their school, so it is worth asking the class teacher.

## What milestones will my child reach?

Our milestones, each one something your child can show you on screen.

**Our five milestones between 6 and 12**

| Milestone | On screen, your child |
|---|---|
| Sequencer | Give a sprite five instructions in the right order |
| Looper | Repeat a set of steps without copying them |
| Scorekeeper | Keep a score and a high score in a game |
| Typist | Write a short Python program and fix its first error |
| Record hunter | Find a record in a real file and explain what "since" means |

### For parents

The record hunter milestone matters beyond coding: a child who asks "since when?" about a record has learned to read headlines more carefully.
You get a short note every few classes about what was built.

### For children

The first try always wins. That does not make it a great record.
When you change where you start, check whether the answer changes too.

## Nine more courses for Rostock children

Each is taught live in English with a regular mentor, in a batch or alone.

### Foundations

Ages 5 to 12

- [Coding for Kids](/courses/kids-coding-blocks-masterclass): A long course from Scratch to apps, 6 to 12.
- [Problem solving](/courses/problem-solving-and-computational-thinking-for-kids): Logic and planning puzzles, 7 to 12.
- [Mental maths](/courses/mental-maths-mastery-kids): Number sense rather than tricks, 5 to 10.

### Game worlds

Ages 7 to 14

- [Minecraft coding](/courses/minecraft-coding-for-kids-course): Code that changes a Minecraft world, 7 to 12.
- [Roblox coding](/courses/roblox-game-coding-for-kids-lua-course): Lua scripting inside Roblox Studio, 8 to 14.
- [Game development](/courses/game-development-masterclass-for-kids): Several game tools in one course, 8 to 12.

### Bigger challenges

Ages 8 to 19

- [Hackathon for kids](/courses/hackathon-prep-for-kids-coding-innovation-ai-projects-course): Twelve weeks of preparation and an event, 8 to 12.
- [AI literacy](/courses/ai-literacy-for-kids-course): What a machine learns and where it fails, 8 to 14.
- [Informatics contests](/courses/german-informatics-competitions-course-biber-bwinf-bwki): Preparation for the German school contests, 9 to 19.

## How does an hour of live coding feel for a young child?

Two live hours a week, each split into short pieces: a warm-up puzzle, a new idea, building, and showing. The child does the building.

- **Afternoons** From about ten to three in Rostock, after school.
- **Weekend mornings** Saturday and Sunday, popular with younger children.
- **One to one** Fitted around your family's week with the mentor.

- **Same face** One mentor, week after week.
- **Short steps** New ideas in small pieces.
- **Child at the controls** Mouse and keyboard stay with your child.
- **Age bands** Children learn with others their age.
- **Notes home** What was made and what is next.
- **Two formats** A batch of children or a private class.

## What do coding classes cost for a Rostock child?

There is a monthly fee for eight live classes. We list it in euro, using the European Central Bank reference rate, and take the payment in US dollars; your bank handles the conversion, so the euro amount it books can be marginally different.

- Free first class: Free. A free first class. A puzzle and a small first project. No card needed to book.
- Group batch: €90 (charged in US dollars) a month. A batch of fifteen to twenty children. One regular mentor. Two classes each week. Monthly, pause or stop any month.
- One to one: €134 (charged in US dollars) a month. Your child and a mentor of their own. Projects chosen around your child. Times your family decides.

## Coding classes for kids in Rostock: parents' questions

### Are the classes taught in German?

No. We only teach in English. The mentor in India keeps sentences short, says important words twice and quickly tunes in to how your child talks; because every step also happens on the screen, children with little English still manage.

### How young can my child start?

At 6. The youngest start with puzzles and Scratch, where blocks are dragged rather than typed. Children usually move to Python at about 9, once reading and typing are comfortable.

### When does Informatik start at school in Rostock?

In grade 5. The Gesellschaft für Informatik reports that Mecklenburg-Vorpommern teaches Informatik und Medienbildung at every school type in grades 5 to 10, at least one weekly hour each year. Grundschule, grades 1 to 4, has no Informatik subject.

### Why learn coding before grade 5?

Because the school subject only starts in grade 5, and four years is a long wait for a curious child. Children who have already built a few games arrive in grade 5 with something to show and questions to ask, rather than starting from nothing.

### When are classes in Rostock time?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Rostock families usually pick mid-afternoon or a weekend morning.

### What is the Warnemünde records project?

An original lesson we wrote using Deutscher Wetterdienst records from the Rostock-Warnemünde station. Children find the hottest day of each year since 1947, count how often the record was broken, and see that the count changes with the starting year.

### Does my child need a computer?

Yes, a laptop or desktop with a keyboard and a headset works well. Very young children can start on a tablet for Scratch, but Python needs a keyboard.

### Where are the teachers?

They are in India and join by live video. A 16:20 class in Rostock is at 20:50 on the mentor's clock this winter. One mentor stays with your child for the whole course.

### How many children are in each group?

Between fifteen and twenty, all roughly the same age. If you would rather your child learned alone, one-to-one means two weekly classes with only the mentor.

### How do we pay?

Once a month. You see the price in euro, worked out with the reference rate of the European Central Bank; the actual charge is in US dollars and your bank turns it into euro, sometimes with a small difference. Booking the trial class needs no card.

## Related pages

- [Mecklenburg-Vorpommern](/coding-classes-in-mecklenburg-vorpommern): School Informatik and the Abitur across the Land.
- [Kids' coding in Germany](/coding-classes-for-kids-germany): The national guide for parents.
- [Python classes for kids](/python-classes-for-kids-germany): Typed code for 9 to 12 year olds.
- [Informatik-Biber practice](/informatik-biber-practice-in-english): Puzzles of our own in the Biber style.
- [Game coding for kids](/game-coding-classes-for-kids-germany): For children who want to make games.
- [How we teach](/how-we-teach): How our live classes run.

## Contact

Book the free first class at [https://learn.modernagecoders.com/coding-classes-for-kids-in-rostock-germany](https://learn.modernagecoders.com/coding-classes-for-kids-in-rostock-germany#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
