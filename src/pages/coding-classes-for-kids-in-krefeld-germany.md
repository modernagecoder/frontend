---
title: "Coding Classes for Kids in Krefeld, Live Online in English"
description: "Coding classes for kids in Krefeld aged 6 to 12, live online in English: Scratch to Python, Informatik in NRW from grade 5, and a street-lamp counting project."
canonical: https://learn.modernagecoders.com/coding-classes-for-kids-in-krefeld-germany
source: src/pages/coding-classes-for-kids-in-krefeld-germany.html
---
> Modern Age Coders runs coding classes for Krefeld children aged 6 to 12 as live online lessons in English. Younger children count, sort and build games in Scratch; from about 9 they type Python, and older children answer real questions with city data, such as which Krefeld street has the most lamps. Your child keeps the same mentor, who sets the speed and the English for them, either among 15 to 20 children of the same age band or alone.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / Kids in Krefeld

Krefeld · Coding for children · Ages 6 to 12

# Coding classes for kids in Krefeld

Counting is the first thing a computer ever did for people, and it is the first data skill we teach children. A six year old makes tick marks, an eight year old keeps a list in Scratch, an eleven year old writes a few lines of Python that count all 28,195 street lamps in Krefeld in less than a second. This page explains that journey, how our live classes in English are arranged for children of 6 to 12, where Informatik enters the NRW timetable, and two contests your child could enter.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Ages: 6 to 12, grouped by age; Tools: Tallies, Scratch, then Python; Groups: 15 to 20 children, or one to one; When: After school or weekend mornings; Mentors: Based in India, teaching in English; First class: Free, no card. Rated 4.9 across 547 Google reviews.

## Which course suits a Krefeld child aged 6 to 12?

Three common first choices, chosen by age and by how much your child already enjoys screens and puzzles.

- [Coding for Kids](/courses/kids-coding-blocks-masterclass): The long course for six to twelve year olds, about 10 to 12 months in age groups: Scratch, then simple apps, with plenty of games along the way.
- [Describe it, then build it](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev): For eight to twelve year olds who like to invent: describe a game in words, then build it in Scratch, with child-safe ideas about AI.
- [First real Python](/courses/python-ai-kids-masterclass): For children of nine and up who can type. Python from lesson one, drawings, games, then small data projects like the street lamps.

## How does counting turn into coding for a child?

Children already know how to count. Coding teaches them to tell a computer how to count for them, and then to check what it says.

### Six to seven: tick marks

A child tallies the colours of cars passing a window, or the shapes on a page, and makes a bar chart with stickers. In class, the mentor turns this into a game: who can give the clearest counting instructions?

### Eight to nine: a list in Scratch

In Scratch, the child makes a variable that goes up by one each time a sprite is clicked, then a list of scores. Counting has become something the computer does, and the child decides when.

### Ten to twelve: a dictionary in Python

In Python, one line adds one to the right box for each item in a file of thousands. The child learns that a computer counts perfectly, and that a perfect count of the wrong thing is still wrong.

**The same idea at three ages (our lesson plan)**

| Age | Question | How the child answers it |
|---|---|---|
| 6 to 7 | Which colour of car passed most often? | Tick marks on paper, then a sticker chart |
| 8 to 9 | How many times did the cat get clicked? | A Scratch variable that grows by one |
| 10 to 12 | Which Krefeld street has the most lamps? | A Python dictionary over 28,195 rows |

Our own teaching plan. Mentors adjust it to each child, and a child moves on when ready, not on a fixed date.

## Which street in Krefeld has the most street lamps?

Stadt Krefeld publishes the position of every public street lamp as open data, free for anyone to use under Datenlizenz Deutschland Zero 2.0. Our oldest children count them, and learn not to trust the top of a list until they have looked at it.

### What is in the file

The file has 28,195 lamps. Each row gives an identifying number (Kennzeichen), the street, a house number where one can be assigned, and the lamp's longitude and latitude. The city owns the lamps; the dataset notes say NGN Netzgesellschaft Niederrhein plans, builds and runs the lighting for it.

Where something could not be filled in, the file writes "unset". That happens for the house number on 17,476 rows, because most lamps do not stand outside a numbered house.

### What the children ask

Which street has the most lamps? Children guess the street they live on, or the longest road they know. Then they write a program to count, street by street.

The file is saved as krefeld_lamps.csv. It uses an older text encoding called Latin-1, so the program opens it that way, otherwise the ß in Straße would come out as nonsense.

**Version 1: count lamps per street** (Python)
```python
import csv

lamps_on = {}
with open("krefeld_lamps.csv", encoding="latin-1") as f:
    rows = csv.reader(f, delimiter=";")
    next(rows)
    for row in rows:
        street = row[2]
        lamps_on[street] = lamps_on.get(street, 0) + 1

print("Lamps in the file:", sum(lamps_on.values()))
top = sorted(lamps_on, key=lamps_on.get, reverse=True)[:3]
for street in top:
    print(street, lamps_on[street])
```
It prints: Lamps in the file: 28195, then unset 697, Uerdinger Straße 306 and Ostwall 281.

The program is right and the answer is wrong. The "street" with the most lamps is called unset: 697 lamps whose street name was never filled in. It is not a place in Krefeld; it is a label for "we do not know". Children enjoy this moment, because the computer did exactly what it was told and still fooled them. The fix is one line: leave out the label before choosing the winner.

**Version 2: leave out the label, then choose** (Python)
```python
real = {s: n for s, n in lamps_on.items() if s != "unset"}
print("Streets with at least one lamp:", len(real))
print("Lamps with no street name:", lamps_on["unset"])
winner = max(real, key=real.get)
print("Most lamps:", winner, real[winner])
print("Streets with exactly one lamp:", sum(1 for n in real.values() if n == 1))
```
It prints: Streets with at least one lamp: 1324, Lamps with no street name: 697, Most lamps: Uerdinger Straße 306 and Streets with exactly one lamp: 17.

**Krefeld streets with the most lamps (our count)**

| Street | Lamps |
|---|---|
| Uerdinger Straße | 306 |
| Ostwall | 281 |
| Gladbacher Straße | 263 |
| Hülser Straße | 216 |
| St.-Töniser-Straße | 204 |

Data: Stadt Krefeld, Straßenlaternen Stadtgebiet Krefeld, via Open.NRW and GovData, licence Datenlizenz Deutschland Zero 2.0, downloaded 3 November 2026. The dataset notes add: "Die Stadt Krefeld ist Eigentümerin der Beleuchtungsanlagen." Counts are ours. The 697 lamps without a street name are left out of the table. We are not connected with the city or the network operator.

Uerdinger Straße wins with 306 lamps, ahead of the Ostwall with 281. Then the children ask better questions on their own. Is Uerdinger Straße just very long? Does a wide road have lamps on both sides? Seventeen streets have only one lamp: are they tiny, or are their other lamps hiding among the unset ones? A tally answers one question and opens three more, which is exactly what we want a ten year old to discover.

1. **Ages 6 to 7, on paper.** Walk down your own street with a grown-up and tally the lamps. Do it again on the other side. Add the two tallies.
2. **Ages 8 to 9, Scratch.** Make a list of ten street names, some repeated, and a script that counts how often each appears. Put in one name called "unknown" five times and see what wins.
3. **Ages 10 to 12, Python.** Run Version 1 and Version 2. Then find how many lamps your own street has.
4. **Extra challenge.** Lamps on Ostwall: are they spread along the street or bunched? Use the longitude and latitude columns to find out.

## When does Informatik start for children in Krefeld?

At secondary school, in grade 5. That leaves the four primary years free for an early, playful start.

1. **Grades 1 to 4, Grundschule.** In NRW, as in most of Germany, primary school lasts four years, and none of them has a timetabled Informatik lesson.
2. **Grades 5 and 6, any secondary school.** Here Informatik becomes a Pflichtfach. The 2026/27 edition of the Informatik-Monitor, compiled by the Gesellschaft für Informatik, lists it for all general school types in the Land.
3. **From grade 7.** What follows depends on the school and on the pupil's choices.

Checked on 2 November 2026 against the KMK's description of primary schooling and the NRW entry of the Informatik-Monitor. What we teach comes on top of school, not in its place, and we have no link with the Land or any Krefeld school.

A child who has spent a year or two with Scratch and a little Python before grade 5 tends to find school Informatik easy and enjoyable, and can spend the lessons on ideas rather than on where the buttons are. That is the gap our classes for 6 to 12 year olds fill: not school ahead of time, but confidence and habits.

## Which informatics contests can a Krefeld child enter?

Two, both run by Bundesweite Informatikwettbewerbe and both possible from grade 3, through the school.

**Two informatics contests open to primary-age children**

| Contest | What it is | Dates and facts |
|---|---|---|
| Informatik-Biber | A puzzle quiz, no coding needed; primary pupils get 9 tasks in 30 minutes | Biberwochen 9 to 20 November 2026 |
| Jugendwettbewerb Informatik | Programming tasks in rounds; possible from grade 3 | Round 3 of 2026 closes 23 November 2026; a record 71,971 took part in 2025 |

Source: bwinf.de, Informatik-Biber 2026 and Jugendwettbewerb Informatik pages ("Prinzipiell ist aber eine Teilnahme schon ab Jahrgangsstufe 3 möglich."), read 2 November 2026. Round 1 of the 2026 Jugendwettbewerb ran from 23 February to 8 March 2026; the next first round is announced by the organiser. We are not connected with BWINF.

For most children of 8 to 10, the Biber is the natural first contest: short, friendly and solvable with clear thinking. Children who have reached typed Python can try the Jugendwettbewerb the following spring. We never copy the organisers' tasks. Our mentors write their own practice puzzles in the same spirit and mark them as ours, and the class teacher will know whether the school takes part.

## My child is still learning English. Will a coding class work?

Usually very well. Our mentors teach only in English, so they are used to children at every level.

### What we do

Every class is live and in English; we do not offer German-language teaching, and we say so up front. Mentors are based in India and keep their language short and concrete with younger children: "move ten steps", "repeat four times", "what happens now?"

They show far more than they explain. In Scratch and Python, the screen does most of the talking.

### What your child does

Your child listens, tries, and answers in whatever English they have. A mentor gets used to how each child speaks and gently offers the English word when a German one slips in.

Over a few months, most children start to use coding words in English naturally, which is a pleasant extra on top of the coding itself.

## At what time are classes held in Krefeld?

The mentors are in India, a few hours ahead, so a Krefeld afternoon is their evening. Here are three example slots.

**Example class times in Krefeld and in India**

| Krefeld | India, until 28 March 2027 | India, from 28 March 2027 |
|---|---|---|
| 15:20 | 19:50 | 18:50 |
| 16:50 | 21:20 | 20:20 |
| Sunday 10:15 | 14:45 | 13:45 |

Krefeld follows German legal time from the Einheitenzeitgesetz, MEZ at UTC+1 for winter and MESZ at UTC+2 for summer; clocks were turned back on 25 October 2026 and turn forward on 28 March 2027. India keeps UTC+5:30 with no change, so the difference is 4 hours 30 minutes in winter and 3 hours 30 minutes in summer. Example slots only.

NRW's Easter holidays run from 22 March to 3 April 2027, in the KMK list. Classes run in holidays too; families who go away simply pause.

## How can I tell my child is learning?

We report against these milestones of ours, with something your child made at each one.

**Five steps we track for every Krefeld child**

| Step | Often reached at | What your child shows |
|---|---|---|
| Instruct | 6 to 7 | Give step-by-step instructions someone else can follow |
| Tally | 7 to 8 | Count and sort things, and draw the result |
| Store | 8 to 9 | Keep a score or a list in a Scratch program |
| Type | 9 to 11 | Write a small Python program and fix its errors |
| Question | 10 to 12 | Count a real file and spot when the top answer is not real |

### For parents

Question is the lamp project. It is a habit that helps with every chart and every "top ten" your child will ever see.
Each month you get a short note: what your child built, what was hard, what comes next.

### For children

The computer counts perfectly. You still have to check what it counted.
"Unknown" is not a winner. Leave it out, then choose.

## Nine more courses for Krefeld children

Other ways in, sorted by what your child enjoys most.

### First steps

Ages 6 to 12

- [Scratch Coding for Kids](/courses/scratch-programming-complete-course): A short, complete Scratch course with real games.
- [Problem solving for kids](/courses/problem-solving-and-computational-thinking-for-kids): Puzzles that build careful thinking.
- [How AI thinks](/courses/ai-literacy-for-kids-course): Patterns, guesses and mistakes, for curious kids.

### Games

Ages 7 to 14

- [Minecraft coding](/courses/minecraft-coding-for-kids-course): Coding where they already love to build.
- [Roblox game coding](/courses/roblox-game-coding-for-kids-lua-course): Make games other children can play.
- [Game development](/courses/game-development-masterclass-for-kids): Several game tools in one course.

### Numbers and making

Ages 8 to 15

- [Maths through coding](/courses/maths-through-coding): Counting, patterns and charts with code.
- [Websites for kids](/courses/kids-ai-web-development-course): A first website, designed by your child.
- [C++ for kids](/courses/cpp-programming-for-kids-course): Logic puzzles in a classic language.

## How live classes work for a Krefeld family

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **After school** Krefeld afternoons, from about 15:00.
- **Weekends** Mornings, calm for younger children.
- **Just one child** Private lessons on a timetable you agree.

- **Two classes a week** About an hour, full of doing.
- **The same mentor** A familiar face each time.
- **Groups by age** Never six with twelve year olds.
- **Hands on the mouse** Your child builds, not watches.
- **Notes for parents** Short, monthly and plain.
- **Holidays** Classes continue; pausing is easy.

## Fees for Krefeld families

A single monthly fee buys eight live classes. To make comparison easy we quote it in euro using the European Central Bank reference rate. The card is billed in US dollars, though, and your bank changes that into euro at its own rate, so expect a small difference on your statement.

- Free first class: Free. A free first class. A counting puzzle and a first program. No card needed.
- Group batch: €90 (charged in US dollars) a month. 15 to 20 children of a similar age. A regular mentor. Two classes a week. Monthly, cancel any month.
- One to one: €134 (charged in US dollars) a month. Your child and one mentor. Your child's own pace and projects. Times that suit your family.

## Coding classes for kids in Krefeld: questions

### Are the classes in German?

No, never. Teaching is live and in English, by mentors who work from India. With small children they keep words short and concrete, demonstrate on screen, and soon tune in to how your child talks.

### How young can my child start?

Six is our youngest age. Six year olds count, sort and drag blocks in brief, playful sessions; Scratch usually follows a year or two later, and real typing in Python comes around the age of nine.

### Do Krefeld primary schools teach coding?

Not as a subject. Grundschule in NRW covers grades 1 to 4 without Informatik on the timetable; the subject arrives at secondary school, where the Informatik-Monitor 2026/27 lists it as compulsory in grades 5 and 6.

### When are classes?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Most Krefeld children come after school or on a weekend morning.

### Can my child enter a coding contest?

Yes, usually through the school. The Informatik-Biber, open in the Biberwochen of 9 to 20 November 2026, needs no coding. The Jugendwettbewerb Informatik is possible from grade 3 for children who already program.

### What do we need at home?

A computer with a keyboard, a microphone and stable internet. For the first Scratch weeks a tablet can work. All the tools are free.

### How large is a group?

Each group has 15 to 20 children close in age. If your child would rather learn alone with the mentor, choose the one-to-one plan with two private classes a week.

### How and in which currency do we pay?

Monthly by card, in US dollars. The fee appears on this page in euro at the European Central Bank reference rate, and your bank converts the payment. The first class is free and needs no card.

### What is the street-lamp project?

A counting exercise we designed around Stadt Krefeld's open lamp list. Children count the city's 28,195 street lamps by street, find that the first winner is a label called unset, remove it, and discover that Uerdinger Straße has the most, with 306.

## Related pages

- [Coding classes in NRW](/coding-classes-in-north-rhine-westphalia): Schools, holidays and courses across the Land.
- [Coding for kids in Düsseldorf](/coding-classes-for-kids-dusseldorf): The page for the Land capital.
- [Online coding for kids](/online-coding-classes-for-kids-germany): Live online classes for children in Germany.
- [Jugendwettbewerb Informatik](/jugendwettbewerb-informatik-preparation): Getting ready for the contest.
- [Scratch for kids](/scratch-coding-classes-for-kids): The block language for beginners.
- [AI tools age guide](/ai-tools-age-guide): Age limits of AI tools.

## Contact

Book the free first class at [https://learn.modernagecoders.com/coding-classes-for-kids-in-krefeld-germany](https://learn.modernagecoders.com/coding-classes-for-kids-in-krefeld-germany#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
