---
title: "Coding Classes for Kids in Wuppertal, Live in English"
description: "Coding classes for kids in Wuppertal aged 6 to 12, live online in English: what each age can do, Informatik in NRW from grade 5, and a Wuppertal playground project."
canonical: https://learn.modernagecoders.com/coding-classes-for-kids-in-wuppertal-germany
source: src/pages/coding-classes-for-kids-in-wuppertal-germany.html
---
> Modern Age Coders teaches Wuppertal children between 6 and 12 to code in live online classes held in English. Six to eight year olds build Scratch stories and games; from about nine, children move to typed Python and small projects on real data. A regular mentor matches your child's pace and accent, and lessons run after school or on weekend mornings, in a group of 15 to 20 children of a similar age or one to one.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / [Coding classes in North Rhine-Westphalia](/coding-classes-in-north-rhine-westphalia) / Kids in Wuppertal

Wuppertal · Coding for children · Ages 6 to 12

# Coding classes for kids in Wuppertal

A six year old in Wuppertal can already tell a story with moving characters; a twelve year old can write a program that reads a real city dataset. Between the two lie six years and a lot of small steps. This page goes through what each age is ready for, what our live lessons in English feel like for a child, when Informatik arrives at an NRW school, two free contests worth knowing about, and a project on Wuppertal's list of playgrounds that starts with a pencil and ends in Python.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Ages: 6 to 12, in age groups; Ages 6 to 8: Scratch and screen-free puzzles; Ages 9 to 12: Scratch, then Python; Lessons: Two a week, about an hour; Group: 15 to 20 children, or 1-on-1; First class: Free, no card needed. Rated 4.9 across 547 Google reviews.

## Three first courses for Wuppertal children

A long course for a child who is just starting school, a short one for a quick taste, and a Python course for a child of nine or ten who is ready to type.

- [Coding for Kids](/courses/kids-coding-blocks-masterclass): Ten to twelve months for children between 6 and 12. Scratch games and animations first, then apps and a gentle first look at AI, in groups sorted by age.
- [Scratch Coding for Kids](/courses/scratch-programming-complete-course): Three to four months, open to any child from 6 to 12. From an empty stage to a finished game, a clear way to find out whether coding clicks.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass): Eight to ten months for nine to twelve year olds. Typed Python, drawings made with code, games, and small data projects like the playground one below.

## What can a child in Wuppertal learn at 6, 9 and 12?

Children do not all move at the same speed, but the stages come in the same order. Here is what we usually see, and what we teach at each one.

**What children usually manage at each age in our classes (our observations)**

| Age | School year in NRW | What they build with us | The thinking behind it |
|---|---|---|---|
| 6 to 7 | Grades 1 and 2 | A character that walks, talks and changes costume | Steps happen in order |
| 7 to 8 | Grades 2 and 3 | A chase game with a score | Repeating, and reacting to a key |
| 8 to 9 | Grades 3 and 4 | A quiz that remembers answers | Variables and simple decisions |
| 9 to 10 | Grades 4 and 5 | First typed Python: drawings and number games | Exact spelling matters to a computer |
| 10 to 12 | Grades 5 to 7 | Programs that read a small data file | Sorting things into groups before counting |

Our own teaching plan. NRW school years shown for a child who started school at six; in Germany a child who turns six by the Land's cut-off date starts compulsory school on 1 August, according to the KMK.

### At six, short and playful

Lessons are broken into small tasks of a few minutes. Reading is kept to a minimum: Scratch blocks are coloured by type, and the mentor reads instructions aloud. Children who cannot yet read fluently still make things move on the first day.

### At nine, the typing switch

Most children are ready to type Python around nine or ten. The first weeks are about patience with brackets and capital letters. A mentor who has seen every typing mistake before makes this stage calm instead of frustrating.

### At twelve, real questions

By twelve a child can work with a real file of data, ask a question of it and check the answer. The playground project further down is exactly that kind of work, written so a twelve year old can do every line.

All lessons are in English only. For a child at a German Grundschule, English in a coding class is easier than it sounds, because so much of the lesson is on the screen: you can see a sprite move without understanding every word. Mentors speak slowly and kindly, repeat in simpler words, and quickly get used to how your child speaks. A child who mixes in a German word is gently given the English one.

## How many playgrounds does Wuppertal have?

Stadt Wuppertal publishes a map file of its children's play areas under the open licence CC BY 4.0. It sounds like a question with one number for an answer. It has two, and working out why is the lesson.

### The file

The dataset is called Kinderspielplätze Wuppertal and comes from the city's youth office, published through its open data portal. We downloaded the file Kinderspielplaetze_EPSG4326_JSON.json on 3 November 2026.

Each entry has two pieces of information besides its outline on the map: a name and an area. The city explains that the name is mostly a street name, sometimes with an extra word, followed by the type of play area in brackets.

### The question

How many playgrounds are there? A younger child can count dots on a printed map. An older child can ask Python, and the first program below gives an answer straight away.

But look at the first entry it prints, and at what is inside the brackets.

**Step 1: count everything in the file** (Python)
```python
import json

with open("Kinderspielplaetze_EPSG4326_JSON.json", encoding="utf-8") as f:
    places = json.load(f)["features"]

print("Places in the file:", len(places))
print("The first one:", places[0]["properties"])
```
It prints Places in the file: 359 and The first one: {'name': 'Falkenberg (KSP)', 'flaeche': 1199}.

359 places. But the file does not only list playgrounds. The word in brackets says what kind of place each one is, so the next program cuts that word out of every name and keeps a tally, the same way a child would sort cards into piles.

**Step 2: sort by the word in brackets** (Python)
```python
kinds = {}
for p in places:
    name = p["properties"]["name"]
    kind = name[name.rfind("(") + 1:-1]     # the word inside the last brackets
    kinds[kind] = kinds.get(kind, 0) + 1
print(kinds)
```
Run after Step 1. It prints {'KSP': 273, 'Skateanlage': 2, 'Spielpunkt': 4, 'Bolzplatz': 80}.

**What the 359 entries in Wuppertal's file are (our count)**

| Label in brackets | Entries | What it means |
|---|---|---|
| KSP | 273 | Children's playgrounds; we read KSP as Kinderspielplatz |
| Bolzplatz | 80 | Small kick-about football pitches |
| Spielpunkt | 4 | Small play points |
| Skateanlage | 2 | Skate parks |

So the honest answer is: 273 playgrounds, plus 80 football pitches, 4 play points and 2 skate parks. Both numbers are right; they answer different questions. A child who learns to ask "what exactly am I counting?" has learned something that applies to every survey, chart and headline they will ever read.

**Step 3: the largest playground, and sizes in three piles** (Python)
```python
playgrounds = [p["properties"] for p in places if p["properties"]["name"].endswith("(KSP)")]
biggest = max(playgrounds, key=lambda p: p["flaeche"])
print("Playgrounds:", len(playgrounds))
print("Largest:", biggest["name"], biggest["flaeche"], "m2")
for low, high in [(0, 1000), (1000, 5000), (5000, 30000)]:
    count = sum(1 for p in playgrounds if low <= p["flaeche"] < high)
    print(f"{low} to {high} m2: {count}")
```
Run after Step 1. It prints Playgrounds: 273, Largest: Reppkotten,Spielwiese (KSP) 24210 m2, 0 to 1000 m2: 74, 1000 to 5000 m2: 168 and 5000 to 30000 m2: 31.

Data: Stadt Wuppertal, Kinderspielplätze Wuppertal, daten.wuppertal.de via Open.NRW, licence CC BY 4.0, file Kinderspielplaetze_EPSG4326_JSON.json downloaded 3 November 2026. The file is updated from the city's own system, so a later download may give slightly different numbers. All counts are our own.

The file never says what unit the area is in. We checked rather than guessed: from the outline of each place on the map we worked out its area ourselves, and our figures came within about one percent of the file's numbers every time, which only works if they are square metres. For the largest playground our estimate is about 24,131 square metres against the file's 24,210. Older children enjoy that check almost more than the project itself.

1. **Ages 6 to 8, no screen.** Write twelve names on cards, some ending in (KSP) and some in (Bolzplatz). Count all the cards, then sort them into piles and count again.
2. **Ages 8 to 10, Scratch.** Make a list of ten names and a counter for each kind. Loop through the list and add one to the right counter each time.
3. **Ages 10 to 12, Python.** Run Steps 1 to 3, then change Step 3 to find the largest Bolzplatz instead of the largest playground.
4. **A family challenge.** Find your nearest playground in the file and guess its area before looking it up. Who in the family guessed closest?

## When does my child meet Informatik at school in Wuppertal?

In grade 5. Wuppertal follows the rules of Nordrhein-Westfalen, where Informatik becomes a compulsory subject at the start of secondary school.

### Grundschule, grades 1 to 4

Outside Berlin and Brandenburg, Grundschule runs from grade 1 to grade 4, so most Wuppertal children are in primary school from about six to about ten. The KMK published key points in 2024 on bringing media education and informatics education into primary school, but NRW's compulsory Informatik subject begins later.

For a curious six or seven year old, that leaves four school years in which coding happens mostly outside the timetable.

### Grades 5 and 6

The Gesellschaft für Informatik records in its Informatik-Monitor 2026/27 that NRW teaches Informatik as a compulsory subject in grades 5 and 6 at every general school type, whether Gymnasium, Realschule, Gesamtschule or another.

Grades 5 and 6 are also the years in which a child can still switch between school tracks, so they matter in more than one way. A child who arrives in grade 5 already able to plan a program step by step usually finds the new subject a pleasure.

Our classes are there alongside school, never instead of it, and the school's Informatik lessons and marks are what count. What we add is time: two lessons a week in which a child can follow their own ideas, at their own speed, with a mentor who answers every question.

## Which free coding and maths contests can a Wuppertal child enter?

Two national contests are open to primary pupils and need no previous experience. Both are entered through the school, so ask the class teacher.

**Two contests for children in Germany, 2026 to 2027**

|  | Informatik-Biber | Känguru der Mathematik |
|---|---|---|
| Subject | Logic and computing puzzles | Maths problems |
| Who | Grades 3 to 13, no prior knowledge | From grade 3 |
| Length for primary pupils | 9 tasks in 30 minutes | 24 problems in 75 minutes |
| Next date | 9 to 20 November 2026 | 8 April 2027 |
| Registration | By the school | By the school, 1 December 2026 to 31 January 2027 |

Sources: Bundesweite Informatikwettbewerbe, Informatik-Biber 2026 pages; Känguru der Mathematik e.V., 2027 dates. Read on 2 November 2026. The Biber is free; the Känguru organisers say the 2027 contest is an exception, held in April instead of on its usual Thursday in March, because that date would fall just before the Easter holidays in almost every Land.

We are not connected with either contest and do not use their tasks. In class we write puzzles of our own in a similar spirit, sorting, hidden rules, shortest routes, which is the same thinking the playground project uses. Children who enjoy those usually enjoy the contests too.

## When are coding classes for Wuppertal children?

After school on weekdays, or on weekend mornings when younger children are at their freshest. The mentor is in India, where the clock is ahead.

**Example times for a Wuppertal child, with the mentor's time in India**

| Wuppertal | Mentor now (winter) | Mentor after the clocks change |
|---|---|---|
| 14:45, straight after school | 19:15 | 18:15 |
| 16:15 on a weekday | 20:45 | 19:45 |
| Saturday 09:00 | 13:30 | 12:30 |
| Sunday 10:45 | 15:15 | 14:15 |

German time is MEZ (UTC+1) in winter and MESZ (UTC+2) in summer under the Einheitenzeitgesetz. The winter clock started on 25 October 2026 and the summer clock returns on 28 March 2027; India stays on UTC+5:30 all year, so it leads Wuppertal by four and a half hours now and by three and a half after that date. Example slots only.

NRW school holidays in 2026/27, from the KMK calendar: Herbstferien 17 to 31 October 2026, Christmas 23 December 2026 to 6 January 2027, Osterferien 22 March to 3 April 2027, Pfingsten on 18 May 2027 and the Sommerferien from 19 July to 31 August 2027. Classes carry on through all of them unless you would like a break; just tell the mentor before you go away.

Wuppertal had 358,193 residents on 31 December 2024, according to Destatis. Families in neighbouring Solingen (165,626), Remscheid (113,828) and Hagen (190,384) learn in exactly the same way, since every class is online; those towns are in NRW too, so the same holiday dates apply.

## Five steps from first block to first dataset

Our milestones for children. Parents hear in the monthly note which step their child is on and what comes next.

**Coding steps for ages 6 to 12 (ours)**

| Step | Typical age | Your child can |
|---|---|---|
| 1. Order | 6 to 7 | Put actions in the right order so a story makes sense |
| 2. Repeat | 7 to 8 | Use a loop instead of the same block ten times |
| 3. Remember | 8 to 9 | Keep a score or a name in a variable |
| 4. Type | 9 to 10 | Write and fix short Python programs |
| 5. Sort and count | 10 to 12 | Split data into groups and count each group |

### For parents

Ask your child what they are counting, not just how many. It is the question Step 2 of the project is built on.
Praise the fixed mistake more than the finished game. Fixing is the real skill.

### For children

Before you count, check what is in the pile.
Read the first line of a file before you trust the total.

## Nine more courses for Wuppertal children

Grouped by what children enjoy. Each one is live, in English, with a regular mentor, in a group or alone.

### Puzzles and numbers

Ages 5 to 13

- [Problem solving for kids](/courses/problem-solving-and-computational-thinking-for-kids): Logic puzzles and step-by-step plans, good practice for the Biber.
- [Känguru and Olympiade training](/courses/mathematik-olympiade-and-kaenguru-training-course): Contest-style maths with problems we write ourselves.
- [Mental maths](/courses/mental-maths-mastery-kids): Number sense for 5 to 10 year olds, without tricks.

### Worlds they already love

Ages 7 to 14

- [Minecraft coding](/courses/minecraft-coding-for-kids-course): Code that builds and changes a Minecraft world.
- [Roblox coding](/courses/roblox-game-coding-for-kids-lua-course): Their own Roblox games, scripted in Luau.
- [Godot games](/courses/godot-game-development-course-for-kids-and-teens): A real game engine, used gently, for older children.

### Making useful things

Ages 8 to 12

- [Apps for kids](/courses/block-coding-app-development-masterclass): Phone apps built with blocks that really run.
- [Websites for kids](/courses/kids-ai-web-development-course): A small website of their own, made from scratch.
- [AI literacy](/courses/ai-literacy-for-kids-course): How machines learn, explained without chatbot accounts.

## How our live classes work for a Wuppertal child

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Early afternoon** Soon after school ends, for the youngest children.
- **Later afternoon** After homework or sport, for older children.
- **Weekend morning** Saturday or Sunday, when everyone is rested.

- **A familiar mentor** Your child sees the same face every lesson.
- **Short tasks** A few minutes each, so young minds stay with it.
- **Kind, clear English** Slow speech and simple words, repeated gladly.
- **Children of one age** Six year olds learn with six and seven year olds.
- **A note for parents** Each month: what your child made and found tricky.
- **Shared or private** A class of 15 to 20, or your child alone.

## Fees for Wuppertal families

Each month of classes, eight lessons, has a single fee. We show it in euro, calculated with the European Central Bank reference rate; your card is then charged in US dollars, and your bank converts that back to euro, so the final figure can move slightly.

- Free first class: Free. A free first class for your child. A short puzzle and a first moving sprite. No card needed.
- Group batch: €90 (charged in US dollars) a month. 15 to 20 children of a similar age. A regular mentor. Two lessons a week. Paid monthly, stop any month.
- One to one: €134 (charged in US dollars) a month. Your child and their own mentor. Lessons shaped around their interests. Times that fit your family.

## Coding classes for kids in Wuppertal: parents' questions

### Are the classes in German?

No, never: our lessons are held in English and nothing else. What makes that work for a Wuppertal primary pupil is the mentor, who keeps sentences short, waits for an answer, gets used to the way your child talks and says things a second way when the first did not land. Most of the lesson is visible on screen anyway.

### Is six too young to learn coding?

Not with the right tools. At six, children drag coloured Scratch blocks into place with the mouse, so reading and spelling hardly come into it. We keep each task to a few minutes, and after the free first class you will know whether your child is ready.

### When does my child switch from Scratch to Python?

Usually at nine or ten, when typing and reading are comfortable. Some children are ready a little earlier and some a little later; the mentor decides together with you.

### Do schools in Wuppertal teach coding?

Informatik is a compulsory subject in grades 5 and 6 at all general school types in NRW, according to the GI Informatik-Monitor 2026/27. Before grade 5 the compulsory subject has not started, so children in Grundschule mostly learn coding outside school.

### What does my child need at home?

A laptop or desktop computer with a keyboard, a headset with a microphone and a quiet corner. A parent nearby for the first lesson helps younger children settle in.

### When are the classes in Wuppertal time?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Younger children often take early afternoon or weekend morning slots.

### Can my child enter the Informatik-Biber?

Yes, if the school signs up. BWINF, the organiser, opens the Biber to every pupil from grade 3 upwards, charges nothing and expects no earlier experience. This year's window is 9 to 20 November 2026, and a primary class gets 30 minutes for its nine puzzles.

### Who are the mentors?

Mentors based in India who teach live over video. In winter India is four and a half hours ahead of Wuppertal, so a 16:15 class in Wuppertal is 20:45 for the mentor.

### How are fees shown and charged?

One fee per month buys eight lessons. You see it in euro here, based on the European Central Bank reference rate; the card payment runs in US dollars and your bank does the conversion, which is why the euro figure on a statement may be a few cents off. Trying the first class is free.

### Will my child use AI chatbots?

No. Children under 13 do not use chatbot accounts with us. They learn how AI works by building small sorting and guessing programs themselves, which teaches more than typing questions into a tool.

## Related pages

- [Coding classes in Germany](/coding-classes-in-germany): All our Germany pages in one place.
- [Coding classes in North Rhine-Westphalia](/coding-classes-in-north-rhine-westphalia): NRW rules, holidays and data.
- [Coding for kids in Germany](/coding-classes-for-kids-germany): The national guide for ages 6 to 12.
- [Scratch classes for kids](/scratch-classes-for-kids-germany): Where most young coders begin.
- [Informatik-Biber practice](/informatik-biber-practice-in-english): Puzzles in the spirit of the Biber.
- [Känguru practice](/kangaroo-math-germany-practice): Getting ready for the April 2027 contest.

## More pages for this Land

Part of the guide: [Coding classes in North Rhine-Westphalia](/coding-classes-in-north-rhine-westphalia)

### Cities and pages in North Rhine-Westphalia

- [Coding and AI classes in Bergisch Gladbach](/coding-and-ai-classes-in-bergisch-gladbach-germany)
- [Coding and AI classes in Bielefeld](/coding-and-ai-classes-in-bielefeld-germany)
- [Coding and AI classes in Duisburg](/coding-and-ai-classes-in-duisburg-germany)
- [Coding and AI classes in Gütersloh](/coding-and-ai-classes-in-guetersloh-germany)
- [Coding and AI classes in Münster](/coding-and-ai-classes-in-muenster-germany)
- [Coding and AI classes in Neuss](/coding-and-ai-classes-in-neuss-germany)
- [Coding and AI classes in Recklinghausen](/coding-and-ai-classes-in-recklinghausen-germany)
- [Coding classes for kids in Bonn](/coding-classes-for-kids-bonn)
- [Coding classes for kids in Cologne](/coding-classes-for-kids-cologne)
- [Coding classes for kids in Dortmund](/coding-classes-for-kids-dortmund)
- [Coding classes for kids in Düsseldorf](/coding-classes-for-kids-dusseldorf)
- [Coding classes for kids in Essen](/coding-classes-for-kids-essen)
- [Coding classes for kids in Aachen](/coding-classes-for-kids-in-aachen-germany)
- [Coding classes for kids in Krefeld](/coding-classes-for-kids-in-krefeld-germany)
- [Coding classes for kids in Leverkusen](/coding-classes-for-kids-in-leverkusen-germany)
- [Coding classes for kids in Moers](/coding-classes-for-kids-in-moers-germany)
- [Coding classes for kids in Solingen](/coding-classes-for-kids-in-solingen-germany)
- [Coding for international school students in Düsseldorf](/coding-for-international-school-students-dusseldorf)
- [Informatik-Abitur NRW (Unterricht auf Englisch)](/informatik-abitur-nrw)
- [Maths tutor in Cologne, in English](/math-tutor-cologne-in-english)
- [Online Python classes in Bochum](/online-python-classes-bochum-germany)
- [Online Python classes in Bottrop](/online-python-classes-bottrop-germany)
- [Online Python classes in Hagen](/online-python-classes-hagen-germany)
- [Online Python classes in Hamm](/online-python-classes-hamm-germany)
- [Online Python classes in Herne](/online-python-classes-herne-germany)
- [Online Python classes in Mönchengladbach](/online-python-classes-moenchengladbach-germany)
- [Online Python classes in Mülheim an der Ruhr](/online-python-classes-muelheim-an-der-ruhr-germany)
- [Online Python classes in Oberhausen](/online-python-classes-oberhausen-germany)
- [Online Python classes in Remscheid](/online-python-classes-remscheid-germany)
- [Online Python classes in Siegen](/online-python-classes-siegen-germany)
- [Programmieren lernen für Kinder in Düsseldorf (auf Englisch)](/programmieren-lernen-kinder-duesseldorf)
- [Programmieren lernen für Kinder in Köln (auf Englisch)](/programmieren-lernen-kinder-koeln)

More guides: [Coding classes in Lower Saxony](/coding-classes-in-lower-saxony), [Coding classes in Land Bremen](/coding-classes-in-land-bremen), [Coding classes in Hesse](/coding-classes-in-hesse), [Coding classes in Bavaria](/coding-classes-in-bavaria), [Coding classes in Saxony-Anhalt](/coding-classes-in-saxony-anhalt), [Coding classes in Schleswig-Holstein](/coding-classes-in-schleswig-holstein), [Coding classes in Baden-Württemberg](/coding-classes-in-baden-wuerttemberg), [Coding classes in Saarland](/coding-classes-in-saarland), [Coding classes in Rhineland-Palatinate](/coding-classes-in-rhineland-palatinate), [Coding and maths in Berlin](/coding-and-maths-classes-in-berlin-germany), [Coding and maths in Hamburg](/coding-and-maths-classes-in-hamburg-germany), [Coding classes in Saxony](/coding-classes-in-saxony), [Coding classes in Thuringia](/coding-classes-in-thuringia), [Coding classes in Brandenburg](/coding-classes-in-brandenburg), [Coding classes in Mecklenburg-Vorpommern](/coding-classes-in-mecklenburg-vorpommern)

## Contact

Book the free first class at [https://learn.modernagecoders.com/coding-classes-for-kids-in-wuppertal-germany](https://learn.modernagecoders.com/coding-classes-for-kids-in-wuppertal-germany#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
