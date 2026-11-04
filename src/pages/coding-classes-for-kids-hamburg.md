---
title: "Coding Classes for Kids in Hamburg: Live Online, in English"
description: "Coding classes for kids in Hamburg aged 6 to 12: live online in English, when Hamburg schools start Informatik, the Biber, and a Hamburg playground project."
canonical: https://learn.modernagecoders.com/coding-classes-for-kids-hamburg
source: src/pages/coding-classes-for-kids-hamburg.html
---
> Modern Age Coders teaches coding classes for kids in Hamburg live over video, in English, to children from 6 to 12. Younger ones build Scratch stories and games; from about 9 they type Python and try small AI projects. A regular mentor keeps to your child's pace and accent. Lessons fit Hamburg afternoons and weekend mornings, one to one or with fifteen to twenty classmates, years before school Informatik begins in grade 7.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / [Coding and maths in Hamburg](/coding-and-maths-classes-in-hamburg-germany) / Kids in Hamburg

Hamburg · Coding for children · Ages 6 to 12

# Coding classes for kids in Hamburg

Hamburg takes school computing more seriously than most of Germany: since 2025/26 every pupil at a Stadtteilschule or Gymnasium has four compulsory hours of Informatik. Those hours fall between grades 7 and 10, though, so a Hamburg child of 6 to 12 still meets very little coding at school. Below: the Hamburg school path grade by grade, what an English-only class feels like for a seven year old, a free puzzle contest open to Hamburg schools this November, and a project on Hamburg's playground list where a capital letter hides half the slides in the city.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Ages: 6 to 12, in age groups; First steps: Scratch games, then Python; Group size: Fifteen to twenty, or one to one; Hamburg times: After school and weekend mornings; Teachers: Mentors based in India; First class: Free, no card needed. Rated 4.9 across 547 Google reviews.

## Three courses for Hamburg children aged 6 to 12

One for children ready to type real code, one long course from blocks to apps, and one for children who mostly want to build games.

- [Python and AI, ages 9 to 12](/courses/python-ai-kids-masterclass): Roughly eight to ten months in which children type Python from the first lesson, draw with the turtle, build games and finish with small AI projects on real files such as the playground list.
- [Coding for Kids, ages 6 to 12](/courses/kids-coding-blocks-masterclass): Grouped by age, over ten to twelve months: Scratch first, then simple apps, then a gentle look inside how AI decides.
- [Game Development for Kids](/courses/game-development-masterclass-for-kids): Ages 8 to 12. Scratch, Roblox and Minecraft in one course, for a child whose first question is how games are made.

## When do Hamburg schools start teaching Informatik?

In grade 7 at the earliest, as a full subject. Before that there are only a few informatics topics inside a science subject. The facts come from the Gesellschaft für Informatik's Informatik-Monitor 2026/27.

**Computing in a Hamburg school career, by grade, 2026/27**

| Grades | School | Computing on the timetable |
|---|---|---|
| 1 to 4 | Grundschule | No Informatik subject |
| 5 and 6 | Stadtteilschule or Gymnasium | Naturwissenschaften/Technik, with a Themenfeld Informatik as one part |
| 7 to 10 | Stadtteilschule or Gymnasium | Informatik, four compulsory hours in total since 2025/26; the school decides how to spread them |
| 7 to 10 | Stadtteilschule or Gymnasium | More Informatik possible as an elective (Wahlpflicht) |
| 10 to 12 or 11 to 13 | Oberstufe | Informatik as a course or profile subject, if offered |

Source: Gesellschaft für Informatik, Informatik-Monitor 2026/27, Hamburg page, read on 2 November 2026. At a Hamburg Gymnasium the Oberstufe runs from grade 10 to 12; at a Stadtteilschule with an Oberstufe, from grade 11 to 13.

### Ahead of most Länder

The Informatik-Monitor names Hamburg with Baden-Württemberg, Sachsen and Schleswig-Holstein as the four Länder that meet the short-term recommendation of four compulsory hours. The education ministers' standing scientific commission recommends six hours across lower secondary school, so even Hamburg is still on the way.

For a Hamburg parent the good news is real: by the end of grade 10, every pupil at a Stadtteilschule or Gymnasium will have had some Informatik.

### But not before grade 7

Hamburg's Grundschule covers grades 1 to 4, and the monitor lists no Informatik subject there. In grades 5 and 6 the science subject Naturwissenschaften/Technik includes a Themenfeld Informatik as one part of its plan, not as a subject of its own.

And because each school decides how to spread its four hours over grades 7 to 10, some children will not meet them until grade 9. A child who is curious at 8 has years to wait.

That is the gap our classes fill. Start at 7 or 8, and by grade 7 your child can already split a task into steps, read a short program and spot the bug, which is roughly where Hamburg's school Informatik picks up.

## Can a Hamburg child learn coding in English?

Yes. Lessons are live, English is the only teaching language, and the mentor bends to the child rather than the reverse.

### English only, said up front

Lessons are in English and only in English; we have no German-language classes. Children from English-medium schools hear their school language; children from German schools get an hour of listening practice with every lesson.

### Slow, clear, repeated

Mentors speak in short sentences, show before they tell, and say it again in simpler words when a face looks puzzled. They get used to each child's accent within a few classes.

### The screen does the talking

In Scratch most of the meaning is in coloured blocks, and Python's keywords are short English words a child sees working. The English needed in the first months is smaller than most parents expect.

The mentors work from India over live video, and a Hamburg afternoon is their evening. Because it is the same person each week, they soon know whether your child enjoys a hard puzzle, wants a moment before answering, or learns most easily by changing a game someone else made. We teach children to think a problem through, not to copy an answer, and we never ask a child under 13 to use an adult AI chatbot.

## How many Hamburg playgrounds have a slide? A search that depends on one capital letter

Hamburg publishes a list of popular playgrounds on its Transparenzportal, free to reuse. Our older children use it to learn how computers search text, and why German words make that harder than it looks.

### The data

The dataset Spielplätze Hamburg comes from the city's environment authority, BUKEA, under the Datenlizenz Deutschland Namensnennung 2.0. We downloaded it on 3 November 2026 and saved it as spielplaetze_hamburg.json: 100 playgrounds, each with a name, a short description and the nearest bus or train stop.

The description says it is a selection of popular playgrounds, not every playground in the city, so our counts describe this list only. A typical description reads "Wasserspielbereich, Tischtennis, Kletterturm mit Rutsche".

### The question

How many playgrounds on the list have a slide? In German a slide is a Rutsche, so the obvious program looks for the word Rutsche in each description and counts the matches.

A ten year old writes that in five lines. The surprise comes when the child checks the answer by reading a few descriptions aloud.

**Version 1: search for the word** (Python)
```python
import json

with open("spielplaetze_hamburg.json", encoding="utf-8") as f:
    places = [feature["properties"] for feature in json.load(f)["features"]]

for word in ["Rutsche", "Schaukel"]:
    found = [p["name"] for p in places if word in p["beschreibung"]]
    print(word, len(found))
```
It prints Rutsche 18 and Schaukel 2.

Only 18 slides and 2 swings in 100 playgrounds? Reading the list shows why. German glues words together: a tower slide is a Turmrutsche, a hillside slide a Hangrutsche, a tube slide a Röhrenrutsche. Inside those words, rutsche starts with a small r, and Python treats R and r as different letters. Swings are worse: Tarzanschaukel, Netzschaukel and Nestschaukel all hide the word with a small s.

**Version 2: make both sides lower case first** (Python)
```python
import json

with open("spielplaetze_hamburg.json", encoding="utf-8") as f:
    places = [feature["properties"] for feature in json.load(f)["features"]]

for word in ["Rutsche", "Schaukel"]:
    found = [p["name"] for p in places if word.lower() in p["beschreibung"].lower()]
    print(word, len(found))

both = [p for p in places
        if "rutsche" in p["beschreibung"].lower() and "wasser" in p["beschreibung"].lower()]
print("Slide and water:", len(both), "of", len(places))
```
It prints Rutsche 39, Schaukel 16 and Slide and water: 7 of 100.

One small change, turning both the word and the description into lower case before comparing, more than doubles the slides to 39 and multiplies the swings by eight, to 16. Wasser, water, gives 27 either way, because in this list water always comes at the start of its compound, as in Wasserspielbereich, where the capital stays. The last line combines two searches with and: 7 playgrounds on the list offer both a slide and water play.

**Matches in the 100 playground descriptions, exact search against lower-case search (our calculation)**

| Word | Exact search | Lower-case search |
|---|---|---|
| Rutsche (slide) | 18 | 39 |
| Schaukel (swing) | 2 | 16 |
| Seilbahn (zip line) | 5 | 8 |
| Kletter (climbing) | 49 | 51 |
| Wasser (water) | 27 | 27 |

Data: Behörde für Umwelt, Klima, Energie und Agrarwirtschaft, via Transparenzportal Hamburg, Spielplätze Hamburg, Datenlizenz Deutschland Namensnennung 2.0; downloaded 3 November 2026. The photos linked in the dataset are not under the free licence, so we do not use them. Every count is our own.

1. **Ages 6 to 8, no screen.** Write ten words on cards, some with a capital letter, some without. Ask: find every card with the word ball in it. Did football count?
2. **Ages 8 to 10, Scratch.** Make a list of five playground descriptions and use the contains block to find Rutsche. Then try rutsche and see which answer changes.
3. **Ages 10 to 12, Python.** Run Version 1, predict how many slides you are missing, then write Version 2 yourself.
4. **Going further.** Count how many different kinds of slide the list mentions. Hint: split each description at the commas and look at the end of each word.

## Can my child in Hamburg take part in the Informatik-Biber?

Yes, through the school, and the 2026 contest starts in a few days. It is a puzzle quiz, not a coding test.

### What children do

The organiser, Bundesweite Informatikwettbewerbe, describes the Biber as the biggest informatics contest for school pupils in Germany: a free online quiz for grades 3 to 13 that assumes no knowledge at all. Over 580,000 pupils entered in 2025, and 2026 is its 20th year.

The length grows with age: nine tasks in 30 minutes at primary level, twelve in 35 for grades 5 and 6, fifteen in 40 from grade 7. Hamburg children in grades 3 and 4 sit the primary version.

### Dates for 2026 and 2027

The Biberwochen 2026 run from 9 to 20 November 2026, a few weeks after Hamburg's autumn holiday ended on 30 October 2026. Schools register their pupils, so ask the class teacher whether your child's school takes part. Anyone can warm up on the Schnupper-Biber, the practice round, which opened on 14 September 2026.

The organiser publishes results in December 2026 and posts certificates and prizes in January 2027.

The puzzles test ordering, hidden rules, shortest routes and simple codes, which is the same thinking the playground project trains. We never use or copy the real Biber tasks. Our lessons use puzzles we write ourselves in that style, and we have no link with the organiser. Our [Biber practice page](/informatik-biber-practice-in-english) has more of our own puzzles in English.

## What time are classes for a Hamburg child?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Hamburg and Berlin share one clock, so the times below hold anywhere in Germany.

**Sample lesson times on the Hamburg clock and the mentor's clock**

| In Hamburg | Mentor in India, winter | Mentor in India, from 28 March 2027 |
|---|---|---|
| 16:05 | 20:35 | 19:35 |
| 17:35 | 22:05 | 21:05 |
| Saturday 10:50 | 15:20 | 14:20 |
| Sunday 09:30 | 14:00 | 13:00 |

Germany uses Central European Time, UTC+1, and Central European Summer Time, UTC+2, under the Einheitenzeitgesetz; the clocks went back on 25 October 2026 and go forward on 28 March 2027. India stays on UTC+5:30, so the mentor's clock runs 4 h 30 min ahead of Hamburg in winter and 3 h 30 min ahead once summer time starts. These are example times, not fixed batches.

Hamburg's spring holiday comes early: the KMK table lists it from 1 to 12 March 2027, while Berlin and many other Länder have theirs from 22 March 2027. The Christmas break is 21 December 2026 to 1 January 2027, and summer runs from 1 July to 11 August 2027. Classes carry on through holidays unless you pause them, and many families use the March fortnight for a short project.

## Five steps from first block to real data

Our own scale. We use it to place each child and to report progress to parents.

**Our five coding steps for ages 6 to 12**

| Step | Usual age | By then the child can |
|---|---|---|
| 1. Order | 6 to 7 | Put steps in the right order and make a sprite move |
| 2. Repeat and react | 7 to 9 | Use loops and events, and respond to keys and clicks |
| 3. Store and compare | 8 to 10 | Keep a score, compare two values and test a condition |
| 4. Type real code | 9 to 11 | Type short Python programs that loop, decide and keep lists |
| 5. Search real data | 10 to 12 | Read a file, search its text fairly and check the answer by hand |

### For parents

Stage 5 is the playground project. A child who learns to check a search by hand will question a surprising number, which is a habit worth more than any one language.
You hear what your child can now build and explain, not how long they sat at a screen.

### For children

If a computer says only 18, read some of the list yourself. Does it look like only 18?
A computer sees R and r as two different letters. You have to tell it they are the same.

## Nine more courses for Hamburg children

Live, in English, with a mentor who stays the same; choose a group or private lessons.

### Thinking skills

Ages 5 to 14

- [Problem solving for kids](/courses/problem-solving-and-computational-thinking-for-kids): Logic puzzles and step-by-step plans, ideal before the Biber.
- [AI literacy for kids](/courses/ai-literacy-for-kids-course): What AI is and how it learns, with no grown-up chatbot accounts.
- [Mental maths for kids](/courses/mental-maths-mastery-kids): Number sense that makes coding logic easier.

### Blocks and games

Ages 6 to 14

- [Scratch for kids](/courses/scratch-programming-complete-course): A three-month start with real games at the end.
- [Minecraft coding](/courses/minecraft-coding-for-kids-course): Blocks to code in a world children already know.
- [Roblox game coding](/courses/roblox-game-coding-for-kids-lua-course): Scripting real games in Luau.

### Building and showing

Ages 8 to 12

- [App making for kids](/courses/block-coding-app-development-masterclass): Working phone apps, snapped together from blocks.
- [Websites for kids](/courses/kids-ai-web-development-course): Their own web page, coded line by line.
- [Hackathon for kids](/courses/hackathon-prep-for-kids-coding-innovation-ai-projects-course): A twelve-week build toward a project to present.

## What a week of classes looks like for a Hamburg family

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Two live classes a week of an hour each, always with the same mentor, never a recording.

- **Afternoons** Hamburg weekdays, from about 16:00.
- **Weekends** Saturday and Sunday mornings, calm for younger children.
- **1-on-1** A time agreed with the mentor around school and clubs.

- **One mentor** Someone who knows how your child thinks.
- **Plain English** Short sentences, shown on screen.
- **Hands on** Your child drives the mouse and keyboard.
- **Age groups** Six year olds learn with six year olds.
- **Parent notes** What was built and what comes next.
- **Group or private** Fifteen to twenty children, or one.

## Fees for Hamburg families

One monthly fee pays for eight live classes. We display it in euro using the European Central Bank reference rate, but the payment runs in US dollars and your bank converts it, which is why the statement may show a slightly different euro amount.

- Free first class: Free. A free first class. A short puzzle and a first program. No card needed.
- Group batch: €90 (charged in US dollars) a month. Fifteen to twenty children of a similar age. One regular mentor. Two classes a week. Monthly, stop whenever you like.
- One to one: €134 (charged in US dollars) a month. Your child and one mentor. Your child's own pace and ideas. Times around your family week.

## Coding classes for kids in Hamburg: common questions

### Are the classes in German?

No. Lessons are live and taught only in English. Mentors keep their English simple and unhurried and tune it to your child's pace and accent, so a child still learning the language keeps up. Scratch blocks and Python keywords look the same whatever language the lesson is in.

### Is Informatik compulsory in Hamburg schools?

Yes, from grade 7. The Informatik-Monitor 2026/27 says that since 2025/26 four weekly hours of Informatik are compulsory at Stadtteilschulen and Gymnasien, spread across grades 7 to 10 as each school decides. Grundschule, grades 1 to 4, has no Informatik subject.

### What age can my child start?

From 6. Young children begin with Scratch, where blocks snap together and almost nothing has to be typed. From about 9 they can move on to typed Python in our Python and AI for Kids course.

### Will this help my child with school Informatik later?

It gives them a head start. Children who have coded for a few years reach grade 7 already used to breaking a problem into steps and finding mistakes. We teach alongside school and never replace it; the school's Informatik course is the one that counts.

### When are classes in Hamburg time?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. A class at 16:05 in Hamburg is 20:35 for the mentor in India during winter.

### What is the Informatik-Biber, and when is it?

It is a free online puzzle quiz from Bundesweite Informatikwettbewerbe for grades 3 to 13. The 2026 round is open from 9 to 20 November; entry goes through the school, so the class teacher is the person to ask. The practice round opened on 14 September 2026.

### Where are the teachers?

In India, teaching live over video. Hamburg afternoons fall in their evening, which is why the times work, and your child stays with one mentor from week to week.

### How big are the groups?

A group has fifteen to twenty children close in age. For a mentor to themselves, choose one to one: two private lessons each week at times agreed with you.

### How much is it, and in what currency do we pay?

We charge monthly. The euro figure on this page uses the European Central Bank reference rate; the card payment itself is in US dollars, converted by your bank, so your statement may show a slightly different sum. Your first class costs nothing and needs no card.

### Do you have classes during the Hamburg school holidays?

Yes, unless you pause. Hamburg's spring holiday from 1 to 12 March 2027 is a popular time for a short project, and many families take a break for part of the summer holiday from 1 July 2027.

## Related pages

- [Coding classes in Germany](/coding-classes-in-germany): Every page we have for families in Germany.
- [Coding for kids, Germany](/coding-classes-for-kids-germany): The national picture for ages 6 to 12.
- [Informatik-Biber practice](/informatik-biber-practice-in-english): Our own Biber-style puzzles in English.
- [Scratch classes](/scratch-coding-classes-for-kids): Where most young children begin.
- [AI tools age guide](/ai-tools-age-guide): Minimum ages from each tool's own terms.
- [How we teach](/how-we-teach): Our live classes, step by step.

## More pages for this Land

Part of the guide: [Coding and maths in Hamburg](/coding-and-maths-classes-in-hamburg-germany)

### More Hamburg pages

- [Coding for international school students in Hamburg](/coding-for-international-school-students-hamburg)
- [Maths tutor in Hamburg, in English](/math-tutor-hamburg-in-english)
- [Programmieren lernen für Kinder in Hamburg (auf Englisch)](/programmieren-lernen-kinder-hamburg)

More guides: [Coding classes in North Rhine-Westphalia](/coding-classes-in-north-rhine-westphalia), [Coding classes in Lower Saxony](/coding-classes-in-lower-saxony), [Coding classes in Land Bremen](/coding-classes-in-land-bremen), [Coding classes in Hesse](/coding-classes-in-hesse), [Coding classes in Bavaria](/coding-classes-in-bavaria), [Coding classes in Saxony-Anhalt](/coding-classes-in-saxony-anhalt), [Coding classes in Schleswig-Holstein](/coding-classes-in-schleswig-holstein), [Coding classes in Baden-Württemberg](/coding-classes-in-baden-wuerttemberg), [Coding classes in Saarland](/coding-classes-in-saarland), [Coding classes in Rhineland-Palatinate](/coding-classes-in-rhineland-palatinate), [Coding and maths in Berlin](/coding-and-maths-classes-in-berlin-germany), [Coding classes in Saxony](/coding-classes-in-saxony), [Coding classes in Thuringia](/coding-classes-in-thuringia), [Coding classes in Brandenburg](/coding-classes-in-brandenburg), [Coding classes in Mecklenburg-Vorpommern](/coding-classes-in-mecklenburg-vorpommern)

## Contact

Book the free first class at [https://learn.modernagecoders.com/coding-classes-for-kids-hamburg](https://learn.modernagecoders.com/coding-classes-for-kids-hamburg#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
