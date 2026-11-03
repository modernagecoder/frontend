---
title: "Coding Classes for Kids in Heidelberg: Live, in English"
description: "Coding classes for kids in Heidelberg aged 6 to 12, live online in English: the new BW Informatik subject, a first contest, and a Heidelberg weather sensor project."
canonical: https://learn.modernagecoders.com/coding-classes-for-kids-in-heidelberg-germany
source: src/pages/coding-classes-for-kids-in-heidelberg-germany.html
---
> Modern Age Coders runs coding classes for kids in Heidelberg as live video lessons in English, for any child from 6 to 12. Younger children start with puzzles and Scratch, older ones move to typed Python and small projects with real Heidelberg data. One regular mentor matches your child's pace and accent, one to one or in an age-matched batch of up to twenty, after school or at weekends.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / [Baden-Württemberg](/coding-classes-in-baden-wuerttemberg) / Kids in Heidelberg

Heidelberg · Children 6 to 12 · Live online

# Coding classes for kids in Heidelberg

A Heidelberg pupil now meets Informatik as a required subject in grade 5; Baden-Württemberg brought that rule in for 2025/26. That is good news, and it also means a Heidelberg child in Grundschule has four years before the first computing lesson. Here is what a child of 6 to 12 can learn in those years, how our live English classes work for that age, a free contest that fits a primary pupil, and a small project on Heidelberg's own street weather sensors that ends with a lesson about not believing every number.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Ages: 6 to 12, in age bands; First steps: Puzzles, Scratch, then Python from about 9; Class size: Fifteen to twenty, or just your child; Lesson length: One hour, twice a week; Teachers: Mentors in India, teaching in English; Trial: A free first class. Rated 4.9 across 547 Google reviews.

## Which coding course suits a Heidelberg child of 6 to 12?

The right first course depends more on how a child reads and types than on their exact age. These three cover most Heidelberg families.

- [Reasoning for Young Thinkers](/courses/reasoning-and-readiness-course-for-young-thinkers): Built for children of six to nine: spotting a rule, putting things in order and solving small puzzles, the habits a coder needs before the first line.
- [Coding for Kids](/courses/kids-coding-blocks-masterclass): The long route from Scratch blocks to games, apps and a first taste of AI, with batches grouped by age.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass): For confident readers of about nine and up. Real typed code, drawings, games and data, like the sensor project below.

## When does a Heidelberg child first have Informatik at school?

In grade 5, under a rule that is only one school year old. Before that, in Grundschule, there is no Informatik subject.

### A new compulsory subject

The Gesellschaft für Informatik reports that from the 2025/26 school year Baden-Württemberg introduced the compulsory subject Informatik und Medienbildung across secondary school types, beginning with grades 5 and 6 and adding a grade each year. Its 2026/27 Informatik-Monitor counts Baden-Württemberg among four Länder that now meet the recommendation of four compulsory hours.

For a Heidelberg family, that means a child who starts secondary school will meet computing as a real subject, in a Gymnasium, Realschule or Gemeinschaftsschule alike.

### Four years before it starts

As in most Länder, Heidelberg children spend grades 1 to 4 at Grundschule. Those are the years from about 6 to about 10, and they have no Informatik subject of their own.

The monitor adds a less cheerful figure: across Baden-Württemberg roughly one pupil in twelve in the Oberstufe picks Informatik. The report does not say why so few choose it; our view is simply that a child who already enjoys coding has one more reason to keep it.

**Computing for a Heidelberg child, by grade**

| Grades | Typical age | At school | What our classes add |
|---|---|---|---|
| 1 and 2 | 6 to 8 | Grundschule, no Informatik | Puzzles, patterns and Scratch stories |
| 3 and 4 | 8 to 10 | Grundschule, no Informatik | Scratch games, then typed Python for confident readers |
| 5 and 6 | 10 to 12 | Compulsory Informatik und Medienbildung | Python projects that go further than the lesson |
| From 7 | 12 and up | The new subject grows year by year | Teen courses in Python, web and AI |

Sources: Gesellschaft für Informatik, Informatik-Monitor 2026/27, national page and page for Baden-Württemberg; KMK, Primarbereich; both read on 2 November 2026. The right-hand column is ours. Population: Destatis, Gemeindeverzeichnis, 31 December 2024: Heidelberg 155,756, Baden-Württemberg 11,245,898.

So the question for a Heidelberg parent is not whether school will teach computing, because from grade 5 it will. It is whether your child arrives in grade 5 already used to breaking a problem into steps, testing an idea and fixing a mistake without giving up. That is what the first years of our classes are for. We teach alongside school, never instead of it, and the school's Informatik teacher stays the one who sets the marks.

## Can a Heidelberg child learn coding in English if English is not their first language?

Yes. Every class is live and in English only, and the mentor shapes the English to the child.

### Short, clear sentences

Mentors speak slowly to younger children, show before they tell and check with a question rather than a long explanation. A seven year old needs only a handful of words to start: move, turn, repeat, if.

### Your child's accent is fine

The mentor gets used to how your child speaks within a class or two. A child who answers with one word, or drops in a German word, is understood and simply hears the English one back.

### A bonus for school

Heidelberg children at German schools practise listening and speaking English in a setting that is not a test. Children at bilingual or international schools in the region carry on in the language they already learn in.

We say plainly that we do not offer lessons in German. Your child's mentor works from India over a live video link and stays the same from one week to the next. By the second month that mentor can tell whether your child wants harder puzzles, needs a quiet pause before answering, or learns fastest by tinkering with a finished game.

## Was it really 22.5 degrees in Heidelberg on a November evening?

Heidelberg has small weather sensors on streets and squares across the city, and it shares their readings as open data that anyone may reuse. One evening of readings is enough for a project that teaches children to ask whether a number can be true.

### The data

The City of Heidelberg publishes the readings of its Barani street weather sensors through its data platform, listed on GovData with the licence CC0 1.0. We downloaded every sensor's latest reading on 3 November 2026, at about 17:55 UTC, which was just before 19:00 in Heidelberg.

There are 25 sensors in the file. Two are wind sensors with no temperature, which leaves 23 temperatures, from places such as Bismarckplatz, Uniplatz, Bahnstadt, Pfaffengrund, Wieblingen and Boxberg.

### The question

What was the temperature in Heidelberg that evening? A child's first idea is a good one: add up all the sensors and divide by how many there are. That is the average.

Children work from a tidy file called heidelberg_sensors.csv. Each line holds a place name, a temperature and the moment it was measured. Version 1 follows the child's plan exactly.

**Version 1: average every sensor** (Python)
```python
import csv

temps = []
with open("heidelberg_sensors.csv", encoding="utf-8") as f:
    for row in csv.DictReader(f):
        if row["temp"] != "":
            temps.append(float(row["temp"]))

print("Sensors with a temperature:", len(temps))
print("Average:", round(sum(temps) / len(temps), 1))
print("Warmest:", max(temps), " Coldest:", min(temps))
```
It prints Sensors with a temperature: 23, Average: 22.5 and Warmest: 104.7 Coldest: 7.2.

A Heidelberg evening in November at 22.5 degrees? Children laugh at this before any adult does. The warmest reading, 104.7, is hotter than boiling water, and it appears three times. Looking at the file shows more: one sensor in Neuenheim last reported in May 2023, one in Pfaffengrund in July 2023, and one in Bergheim on 19 July 2026, a summer evening. Their numbers are old news, still sitting in the list.

So Version 2 asks two questions of every reading. Is it from today? And does it roughly agree with its neighbours? For the second question we sort today's readings and take the one in the middle, then set aside any reading more than 3 degrees away from it.

**Version 2: today only, and close to the middle** (Python)
```python
import csv

rows = []
with open("heidelberg_sensors.csv", encoding="utf-8") as f:
    for row in csv.DictReader(f):
        if row["temp"] != "":
            rows.append((row["place"], float(row["temp"]), row["time"]))

today = [r for r in rows if r[2].startswith("2026-11-03")]
values = sorted(t for _, t, _ in today)
middle = values[len(values) // 2]
print("Readings from today:", len(today), " Middle value:", middle)

good = []
for place, temp, time in today:
    if abs(temp - middle) > 3:
        print("Does not agree with its neighbours:", place, temp)
    else:
        good.append(temp)

print("Readings we trust:", len(good))
print("Average we trust:", round(sum(good) / len(good), 1))
```
It prints Readings from today: 20 Middle value: 8.4, then Does not agree with its neighbours: for Neuenheim Haydnstr. 104.7, Altstadt Uniplatz West 104.7 and Handschuhsheim Mühltalstr. 21.8, then Readings we trust: 17 and Average we trust: 8.3.

The trusted average is 8.3 degrees, which matches a damp November evening. The middle value works as a referee because a few wild numbers cannot move it: the sensor in the middle of the queue is still an ordinary one. Notice what Version 2 did not throw out. Boxberg read 7.2, more than a degree below the middle, but a degree or so is a believable difference between two parts of one city, so it stays. The rule is "far from the neighbours", not "different".

**Heidelberg sensor readings set aside, 3 November 2026 (our check)**

| Sensor | Reading | Why we set it aside |
|---|---|---|
| Neuenheim Haydnstr. | 104.7 | Far from the middle value of 8.4 |
| Altstadt Uniplatz West | 104.7 | Far from the middle value of 8.4 |
| Handschuhsheim Mühltalstr. | 21.8 | Far from the middle value of 8.4 |
| Neuenheim Bürgeramt | 104.7 | Last reading 8 May 2023 |
| Pfaffengrund Richard Drach Str | 18.7 | Last reading 27 July 2023 |
| Bergheim Alte Eppelheimerstr. | 21.8 | Last reading 19 July 2026 |

Data: Stadt Heidelberg, Wetterstationen der Stadt Heidelberg (Barani), licence CC0 1.0, latest readings downloaded 3 November 2026 at about 17:55 UTC. The checks and averages are our own. The data does not say why the readings are wrong, so we do not guess; 104.7 appearing three times looks like an error code rather than a temperature, but that is a question to ask the data owner, not a fact.

1. **Ages 6 to 8, no screen.** Ask five family members to guess the temperature outside, then add a sixth guess of 100. Line the guesses up from smallest to largest and point to the middle one. Did the 100 change it?
2. **Ages 8 to 10, Scratch.** Put the 23 readings in a list, work out the average, then delete the three biggest and do it again. Say in one sentence why the answers differ.
3. **Ages 10 to 12, Python.** Start with Version 1. Open the CSV and find the oldest date by eye. Now code your own date filter, and only then compare it with Version 2.
4. **Going further.** Change the 3 degrees in Version 2 to 1 degree. Which honest sensor is now thrown out by mistake?

## Is there a free coding contest for a Heidelberg primary pupil?

Yes, and it runs this month. Maths lovers have a second one in April 2027. We are not connected to either organiser.

### Informatik-Biber, November 2026

Bundesweite Informatikwettbewerbe organises the Informatik-Biber, which costs nothing and asks for no coding experience. It is open from grade 3 up to grade 13. A primary pupil gets nine tasks and half an hour; the 2026 Biberwochen are 9 to 20 November 2026.

Entry goes through a school, which signs its classes up and holds the contest during a lesson. A quick message to the class teacher tells you whether your child's school is in.

### Känguru der Mathematik, April 2027

The Känguru maths contest normally sits in March, but its organisers moved the 2027 contest to 8 April 2027 because the usual date fell just before the Easter holidays in almost every Land. Online registration opens on 1 December 2026 and closes on 31 January 2027.

Like the Biber, it is entered through the school, which registers the class.

Neither contest's tasks appear in our lessons. Our mentors invent fresh puzzles about hidden rules, orderings and short paths, and families who want the real style are sent to the organisers' own free practice sets.

## When are the classes in Heidelberg time?

Classes sit in Heidelberg afternoons and weekend mornings, which are evenings and afternoons for a mentor in India.

**Example Heidelberg times and the clock in India**

| Heidelberg | India, winter until 27 March 2027 | India, summer from the end of March 2027 |
|---|---|---|
| Tuesday 15:15 | 19:45 | 18:45 |
| Friday 14:15 | 18:45 | 17:45 |
| Saturday 11:30 | 16:00 | 15:00 |

Heidelberg runs on MEZ (UTC+1) through the winter and MESZ (UTC+2) through the summer, as the Einheitenzeitgesetz sets out. This autumn's change was on 25 October 2026; the spring one falls on 28 March 2027. Indian clocks never change from UTC+5:30, so the gap is four and a half hours now and three and a half from late March. Treat the rows as examples; batches have no fixed time.

**Baden-Württemberg school holidays 2026/27 (KMK table)**

| Holiday | Dates |
|---|---|
| Autumn | 26 to 31 October 2026 |
| Christmas | 23 December 2026 to 9 January 2027 |
| Easter | 25 March, then 30 March to 3 April 2027 |
| Whitsun | 18 to 29 May 2027 |
| Summer | 29 July to 11 September 2027 |

Source: KMK, Ferien im Schuljahr 2026/2027, Stand 9 October 2025, first and last holiday days for Baden-Württemberg. Classes continue in the holidays; many families pause for a trip and simply carry on afterwards.

## How will I know my child is making progress?

Five stages we use to match a child to a batch and to show parents what has moved on. They are ours, not a school scale.

**Five stages for Heidelberg children (our scale)**

| Stage | Usual age | Your child can |
|---|---|---|
| 1. Order | 6 to 7 | Put picture steps in the right order and spot the step that is missing |
| 2. Repeat | 7 to 8 | Make a Scratch character repeat a dance and stop at the right moment |
| 3. Decide | 8 to 9 | Use if and else so a game reacts differently to a win and a loss |
| 4. Type | 9 to 11 | Type a short Python program and calmly read the error message it gives |
| 5. Doubt | 10 to 12 | Check data for old or impossible values before trusting an answer |

### For parents

Stage 5 is the sensor project. It is the stage we care about most, because a child who asks "can that be true?" carries the question far beyond coding.
Reports to parents describe what was built and what your child could explain, not screen time.

### For children

If a computer tells you something odd, it is not always right. Look at the numbers it used.
The middle of a sorted list is hard to fool. One silly number cannot move it far.

## Nine more courses for Heidelberg children

Each is taught live in English by a regular mentor, for a single child or an age-matched batch.

### Thinking skills

Ages 5 to 14

- [Computational thinking](/courses/problem-solving-and-computational-thinking-for-kids): Logic puzzles in the spirit of the Biber, all written by us.
- [AI literacy for kids](/courses/ai-literacy-for-kids-course): How a machine learns from examples, with no adult accounts.
- [Mental maths](/courses/mental-maths-mastery-kids): Number sense for 5 to 10 year olds, without tricks.

### Games and blocks

Ages 6 to 14

- [Scratch for kids](/courses/scratch-programming-complete-course): A complete first course that ends with real games.
- [Minecraft coding](/courses/minecraft-coding-for-kids-course): Code inside a world children already love.
- [Roblox coding](/courses/roblox-game-coding-for-kids-lua-course): Scripted Roblox games in Luau, 8 to 14.

### Building things

Ages 8 to 12

- [Apps for kids](/courses/block-coding-app-development-masterclass): Phone apps built with blocks that really run.
- [First websites](/courses/kids-ai-web-development-course): A child's own web page, from 9.
- [Hackathon for kids](/courses/hackathon-prep-for-kids-coding-innovation-ai-projects-course): A twelve-week build towards one shared event.

## How do live coding classes work for a Heidelberg family?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **After Grundschule** Heidelberg afternoons, once homework is done.
- **Saturday** A calm late-morning slot for younger children.
- **Solo** A time you agree with your child's own mentor.

- **One familiar face** The same mentor every week, who learns your child's way of thinking.
- **Age bands** Six year olds learn with six year olds, not with twelves.
- **Hands on** Your child drives the mouse and keyboard from the start.
- **Gentle English** Short sentences, shown first, repeated kindly.
- **Notes for parents** What was made, what was tricky, what is next.
- **Batch or solo** A class of up to twenty, or a mentor all to themselves.

## Fees for Heidelberg families

Each month's fee pays for eight live classes. We print the amounts in euro, converted with the reference rate of the European Central Bank, while the card payment itself goes through in US dollars; your bank handles the exchange, so the figure on the statement may move a little.

- Free first class: Free. A free first class. A puzzle and a first small program. No card needed.
- Group batch: €90 (charged in US dollars) a month. An age-matched batch of fifteen to twenty. One regular mentor. Two classes each week. Monthly, stop whenever you like.
- One to one: €134 (charged in US dollars) a month. Your child with their own mentor. Pace and projects set around your child. Times that fit your week.

## Coding classes for kids in Heidelberg: common questions

### Are the classes in German?

No. Lessons are live and only ever in English. Mentors keep sentences short, demonstrate on screen before they explain, and tune their speed to how your child speaks and listens, which makes them easy to follow for a child whose English is still growing.

### From what age can my child start?

At 6. The youngest begin with picture puzzles and Scratch blocks that click into place, so no typing is needed. Around 9, children who read comfortably can switch to typed Python.

### Do Heidelberg schools teach coding?

From grade 5. Baden-Württemberg introduced the compulsory subject Informatik und Medienbildung from the 2025/26 school year, starting in grades 5 and 6. Grundschule, grades 1 to 4, has no Informatik subject.

### Will this clash with Informatik in grade 5?

No. We teach alongside school, and the school course and its teacher remain the ones that count for marks. Children who have coded before usually find the start of the school subject easier and more fun.

### When are classes in Heidelberg time?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Most Heidelberg children take an afternoon slot or a Saturday morning.

### Who are the teachers?

Mentors based in India who teach live over video. India is four and a half hours ahead of Heidelberg in winter, so a 15:15 class here is 19:45 for the mentor.

### How many children are in a class?

Batches hold fifteen to twenty children close in age. If you would rather your child had the mentor alone, the one-to-one plan means two private lessons weekly, scheduled with you.

### What is the Informatik-Biber?

A national online puzzle contest with no entry fee and no coding needed, for grades 3 up to 13. Primary children get nine tasks and 30 minutes. This year it is held between 9 and 20 November 2026, with entry through the school.

### What does it cost?

You pay month by month. Prices here appear in euro using the European Central Bank reference rate, the charge runs in US dollars, and your bank converts it, so expect a small difference on the statement. Trying the first class is free.

### Does my child use AI chatbots in class?

Not on adult accounts. Younger children learn how AI works through safe examples, and every child writes and explains their own code. We teach thinking, not copying answers from people or machines.

## Related pages

- [Coding classes in Baden-Württemberg](/coding-classes-in-baden-wuerttemberg): The Land's school rules and dates.
- [Coding classes for kids in Germany](/coding-classes-for-kids-germany): Our children's courses across Germany.
- [Scratch classes for kids](/scratch-classes-for-kids-germany): The usual first step for under nines.
- [AI course for kids](/ai-course-for-kids-germany): How children learn about AI safely.
- [AI tools age guide](/ai-tools-age-guide): Which tools allow which ages.
- [How we teach](/how-we-teach): Our live lessons in detail.

## Contact

Book the free first class at [https://learn.modernagecoders.com/coding-classes-for-kids-in-heidelberg-germany](https://learn.modernagecoders.com/coding-classes-for-kids-in-heidelberg-germany#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
