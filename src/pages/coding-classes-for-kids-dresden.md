---
title: "Coding Classes for Kids in Dresden: Live Online, in English"
description: "Coding classes for kids in Dresden aged 6 to 12, live online in English: Saxony's Informatik from grade 7, the Pangea maths contest and a playground map project."
canonical: https://learn.modernagecoders.com/coding-classes-for-kids-dresden
source: src/pages/coding-classes-for-kids-dresden.html
---
> For Dresden children of 6 to 12, Modern Age Coders runs live online coding classes in English: puzzles and Scratch at the start, then Python typed by the child, with maths and small AI projects in our Python and AI for Kids course. A mentor fits the lesson to your child's pace and accent, in a group of fifteen to twenty or one to one. It prepares the ground for the Informatik that Saxony teaches every week from grade 7.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / [Coding classes in Saxony](/coding-classes-in-saxony) / Kids in Dresden

Dresden · Coding for children · Ages 6 to 12

# Coding classes for kids in Dresden

Saxony takes school Informatik more seriously than most of Germany. Every pupil has an Informatik lesson each week from grade 7 to grade 10, and in the Oberstufe about half of all learners keep the subject. The quiet years are the early ones: grades 1 to 6 have no Informatik subject of their own. This page explains the Saxon path, how our live classes in English use those early years well, a maths contest with dates for 2027, and a project that measures how far apart Dresden's playgrounds are.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Ages: 6 to 12, by age group; Opening topics: Puzzles and Scratch; Then: Python with maths and data; Size: Fifteen to twenty, or private; Teachers: Mentors in India, live; First class: Free of charge. Rated 4.9 across 547 Google reviews.

## Three courses for Dresden children aged 6 to 12

A problem-solving course that suits the youngest, the Python course for children from about nine, and a course that ties coding to school maths.

- [Problem Solving and Computational Thinking](/courses/problem-solving-and-computational-thinking-for-kids): For primary-age beginners. Patterns, step-by-step plans and logic games, with and without a computer, before any typing is needed.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass): Real Python for children of about nine and up, from turtle drawings and games to working with data files like the Dresden playground map.
- [Maths Through Coding](/courses/maths-through-coding): Ages 10 to 15. Number patterns, geometry and graphs explored in Python; Pythagoras in the project below is a typical topic.

## How much Informatik do Dresden schools teach?

More than in most Länder. The Gesellschaft für Informatik lists Saxony among the four Länder that already meet the recommendation of four compulsory Informatik hours, and the subject is set out in a 2022 curriculum.

### Grades 1 to 6

Dresden children attend Grundschule for grades 1 to 4 and then move to an Oberschule or a Gymnasium. In grades 5 and 6 there is no Informatik subject yet. Instead, the interdisciplinary subject Technik/Computer includes, in the words of the GI Informatik-Monitor 2026/27, a share of skills from media education and from informatics education.

For children aged 6 to about 11, then, computing at school is a side topic at most.

### Grades 7 to 12

From grade 7 the picture changes. The monitor records that "sowohl an der Oberschule als auch am Gymnasium" Informatik is taught for one hour a week in grades 7 to 10. In the Oberstufe, Informatik can be taken as a two-hour Grundkurs, and selected Gymnasien also offer it as a Leistungskurs.

The GI names Saxony and Mecklenburg-Vorpommern as the leaders in the Oberstufe, where about half of all learners take Informatik.

**Informatik in Saxon schools, 2026/27**

| Grades | School | Informatik |
|---|---|---|
| 1 to 4 | Grundschule | No subject of its own |
| 5 and 6 | Oberschule, Gymnasium | Part of Technik/Computer |
| 7 to 10 | Oberschule, Gymnasium | Compulsory, one hour a week |
| 11 and 12 | Gymnasium (G8) | Grundkurs two hours; Leistungskurs at selected schools |
| Abitur | Leistungskurs | Written exam set centrally, with a practical part on a computer |

Source: GI Informatik-Monitor 2026/27, national comparison and Sachsen page, read 2 November 2026. For the written Leistungskurs Abitur the permitted aids include documentation for SQL, Python 3 and Java and a computer approved for the exam. The Gymnasium Oberstufe in Saxony follows the eight-year route, with grade 10 as the Einführungsphase.

Saxony is one of the few Länder where a pupil can write Python on a computer in the Abitur itself. For a Dresden family that is a reason to start early, not late: the school will build on whatever a child brings into grade 7, and a child who already thinks in steps, loops and conditions gets far more out of one weekly lesson than a child meeting all of it for the first time.

## Is it a problem if my child's English is still basic?

Usually not. Our classes are live and in English only, and they are built for children who are still learning the language.

### Only English

There are no German-language groups, and we say it plainly before the first class. Dresden has international schools, such as Dresden International School, which lists the IB programmes in the AGIS directory; for children at German schools the English is welcome extra practice.

### Pace and accent fitted

Mentors talk at the child's speed, use the same few words for the same ideas and check understanding often. The mentor gets used to each child's accent, and the child gets used to the mentor's.

### Visual first

Code is something you see working. When a sprite turns or a distance prints, the meaning is on the screen, so the English needed to follow a lesson stays modest, and it grows naturally.

Mentors teach from India in live video lessons; their evening is a Dresden afternoon. Groups keep one mentor over many months, so the mentor learns quickly whether your child likes a stretch problem, a slower build-up or the chance to explain an idea out loud.

## Which Dresden playground is the loneliest? Measuring distance with Pythagoras

Dresden publishes every public playground with its exact position on the map. Because the positions are given in metres, a child can measure the distance between any two playgrounds with a rule they will meet in school maths, and a computer can do it for all of them at once.

### The data

The Landeshauptstadt Dresden publishes its playgrounds through the open data portal of the Freistaat Sachsen under the Datenlizenz Deutschland Namensnennung 2.0. We downloaded the full list on 2 November 2026: 275 places, including ball courts, skate parks and a few bike tracks.

Each place has a name, a district and two numbers, x and y. They are not latitude and longitude but metres east and metres north on a flat map grid called UTM. That one detail makes the maths easy.

### The question

For every playground, how far is it to the nearest other playground? And which one has the longest walk to its nearest neighbour, the loneliest playground in Dresden?

On a flat grid, the distance between two points is the long side of a right-angled triangle: Pythagoras. Python has it built in as math.dist().

**Version 1: the loneliest playground** (Python)
```python
import math
import xml.etree.ElementTree as ET

NS = {"wfs": "http://www.opengis.net/wfs/2.0", "c": "http://www.cardogis.com/kommisdd"}
places = []
for member in ET.parse("spielplaetze_L229.gml").getroot().findall("wfs:member", NS):
    item = member[0]
    places.append((item.find("c:einrichtung", NS).text,
                   float(item.find("c:x", NS).text),     # metres east
                   float(item.find("c:y", NS).text)))    # metres north

def nearest(here):
    gaps = [math.dist(here[1:], there[1:]) for there in places if there != here]
    return min(gaps)

loneliest = max(places, key=nearest)
print("Places:", len(places))
print("Loneliest:", loneliest[0], round(nearest(loneliest)), "m")
```
Our program. It prints Places: 275 and Loneliest: Pirnaer Straße/Kirchberg (Eschdorf) - Spielplatz 1850 m.

The loneliest playground is in Eschdorf, part of the Ortschaft Schönfeld-Weißig, 1,850 metres from its nearest neighbour. That makes sense once you look at a map: the villages out there are far apart. The next two on the list, the forest playground in the Albertpark at 1,574 metres and the one in Oberwartha at 1,547, also sit where the built-up city thins out.

The second question goes the other way. Which two playgrounds are closest together? To be sure, the program must compare every pair, and here the child meets the nested loop: for each playground, check every playground that comes after it in the list. Before running it, we ask: how many pairs is that?

**Version 2: compare every pair** (Python)
```python
pairs = 0
closest = None
for i in range(len(places)):
    for j in range(i + 1, len(places)):
        pairs += 1
        d = math.dist(places[i][1:], places[j][1:])
        if closest is None or d < closest[0]:
            closest = (d, places[i][0], places[j][0])

print("Pairs checked:", pairs)
print("Closest pair:", round(closest[0]), "m")
print(closest[1], "+", closest[2])
```
Our program, run after Version 1. It adds Pairs checked: 37675, Closest pair: 21 m and Pennricher Straße 14 + Pennricher Straße 8 - 12.

37,675 pairs is 275 times 274, divided by two: each pair counted once. Children can check that by hand, and many are surprised that a list of 275 hides so many comparisons. The closest pair turns out to be two entries 21 metres apart on the Pennricher Straße, one listed as a ball court and one as a playground. Two entries in a list are not always two places in the sense a child means, and asking what each row really is belongs to the job.

**How far each Dresden playground is from its nearest neighbour (our calculation)**

| Distance to the nearest neighbour | Playgrounds |
|---|---|
| Under 100 m | 32 |
| 100 to 249 m | 72 |
| 250 to 499 m | 98 |
| 500 to 999 m | 59 |
| 1,000 m or more | 14 |

Data: Landeshauptstadt Dresden, Spielplätze, via the Freistaat Sachsen open data portal and GovData, licence Datenlizenz Deutschland Namensnennung 2.0, downloaded 2 November 2026. Distances are ours, straight-line on the UTM grid (EPSG 25833), not walking routes. The middle value of the 275 nearest-neighbour distances is 328 metres.

1. **Ages 6 to 8, on squared paper.** Mark two crosses, count three squares across and four up, and measure the straight line with a ruler. Five squares, every time.
2. **Ages 8 to 10, in Scratch.** Place three sprites on the stage and use the "distance to" block to find which two are nearest. Then move one and check again.
3. **Ages 10 to 12, in Python.** Run Version 1, then change it to find the playground with the most neighbours within 500 metres.
4. **Going further.** Version 2 compares 37,675 pairs. How many would 2,750 playgrounds need? Work it out before you run anything, then explain why programmers worry about nested loops.

## What is the Pangea maths contest, and when is it in 2027?

Pangea is a national maths competition for primary and secondary pupils, written on paper or online, without calculators. Registration for 2027 is already open.

### The format

In the first round, the Vorrunde, children in grades 3 and 4 solve 15 tasks, and older pupils 20, within 45 to 60 minutes. No calculators or formula books are allowed, so the contest rewards thinking rather than speed with a device.

The first 500 pupils in each grade go on to the Zwischenrunde, and the strongest reach regional finals in six locations across Germany.

### Dates for 2027

The organisers list registration from 1 October 2026 until 17 February 2027, the Vorrunde from 23 February to 3 March 2027, the Zwischenrunde on 21 and 22 April 2027, and the final with prize-giving on Saturday 12 June 2027.

A teacher registers the class on the organisers' portal, and the Vorrunde and the Zwischenrunde are both held at the school, so the maths teacher is the person to ask.

We are not connected with Pangea and do not use its tasks. Our own practice problems are in the same spirit as the distance project: a short question, a sketch, and a careful count. The squared-paper task above, with its three, four and five, is exactly the kind of fact a Pangea problem likes to hide.

## When do classes run in Dresden?

Mainly on weekday afternoons and weekend mornings. The booking page shows each slot in Dresden time and in India time.

**Example times in Dresden and the matching time for the mentor in India**

| Dresden | India, MEZ months (until 28 March 2027) | India, MESZ months (from 28 March 2027) |
|---|---|---|
| 15:35 | 20:05 | 19:05 |
| 17:20 | 21:50 | 20:50 |
| Sunday 09:45 | 14:15 | 13:15 |

German time rules come from the Einheitenzeitgesetz: Central European Time (MEZ, UTC+1) in winter, summer time (MESZ, UTC+2) in summer. The autumn change this year fell on 25 October 2026; the spring change comes on 28 March 2027. India never changes its clocks and stays on UTC+5:30, so it runs 4 h 30 min ahead of Dresden now and 3 h 30 min ahead in summer. These are examples only.

Saxony's holidays in the KMK table for 2026 to 2027 are a little different from most Länder: Christmas from 23 December 2026 to 2 January 2027, winter holidays from 8 to 19 February, Easter from 26 March to 2 April and summer from 10 July to 20 August 2027. Lessons continue in the holidays unless you tell the mentor you are away.

## The stages a Dresden child moves through

A simple scheme of our own that guides group placement and the notes parents receive.

**Our stages for ages 6 to 12**

| Stage | Approximate age | Sign that it is done |
|---|---|---|
| 1. Sequence | 6 to 7 | Builds a short chain of moves and predicts the result |
| 2. Repeat | 7 to 9 | Uses a loop for a pattern |
| 3. Measure | 8 to 10 | Uses coordinates to place and move sprites |
| 4. Code | 9 to 11 | Writes a Python function and calls it |
| 5. Compare | 10 to 12 | Writes a nested loop and counts how much work it does |

### For parents

Stage 5 is the distance project. It gives children a first, friendly meeting with Pythagoras long before the theorem appears in a school maths lesson.
Our notes home say what your child built and what they could explain.

### For children

Before you run a loop inside a loop, guess how many times it will go round.
A map in metres is just a big sheet of squared paper.

## Nine more courses for Dresden children

Live and in English, with the choice of a group or private lessons.

### Young beginners

Ages 6 to 12

- [Coding for Kids](/courses/kids-coding-blocks-masterclass): A year-long first course from Scratch to apps.
- [Scratch games course](/courses/scratch-programming-complete-course): Blocks, stories and finished games.
- [Reasoning for 6 to 9](/courses/reasoning-and-readiness-course-for-young-thinkers): Logic and talk-it-through problems for early readers.

### Numbers

Ages 5 to 18

- [Olympiad and Känguru training](/courses/mathematik-olympiade-and-kaenguru-training-course): Contest maths in English, from Klassenstufe 3.
- [Mental maths](/courses/mental-maths-mastery-kids): Number sense for ages 5 to 10.
- [Abacus maths](/courses/abacus-mental-maths-course-for-kids): Beads first, then calculation in the head, 5 to 10.

### Projects

Ages 7 to 14

- [Minecraft coding](/courses/minecraft-coding-for-kids-course): Coordinates and code in a block world, 7 to 12.
- [Websites for kids](/courses/kids-ai-web-development-course): A real site of their own, 9 to 12.
- [AI for curious kids](/courses/ai-literacy-for-kids-course): How machines learn, for 8 to 14.

## How the classes run for a Dresden family

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Weekday** Afternoons in Dresden, once school is out.
- **Weekend** Mornings on Saturday or Sunday.
- **1-on-1** Whatever slot your family agrees with us.

- **Two a week** Two live classes, about an hour each.
- **Same mentor** Continuity from one month to the next.
- **Child-driven** The child writes the code, the mentor guides.
- **By age** Groups formed by age band.
- **Feedback** Regular notes for parents.
- **Group or private** Fifteen to twenty, or a class of one.

## Fees for Dresden families

A monthly fee pays for eight live classes. The euro amount here follows the European Central Bank reference rate; we take the payment in US dollars, so your bank converts it and the final euro figure can differ a little.

- Free first class: Free. First class at no cost. A short puzzle and a tiny program. No card asked.
- Group batch: €90 (charged in US dollars) a month. Fifteen to twenty children of similar age. One mentor throughout. Two classes weekly. Monthly, no long contract.
- One to one: €134 (charged in US dollars) a month. Private classes for your child. Their own pace and projects. Times chosen with you.

## Coding classes for kids in Dresden: answers

### Are the classes in German?

No. We teach live and exclusively in English. Mentors speak slowly and clearly, adapt to the pace and accent of each child and rephrase whenever something is unclear. Scratch blocks and Python keywords are the same in every country.

### When does Informatik start in Dresden schools?

As a compulsory subject in grade 7. The GI Informatik-Monitor 2026/27 records one weekly Informatik lesson in grades 7 to 10 at Oberschule and Gymnasium in Saxony. Grades 5 and 6 have Technik/Computer, which covers some media and informatics skills.

### Is Saxony good for Informatik?

By the GI measures, yes. Saxony is one of four Länder already meeting the recommendation of four compulsory hours, and the GI names it as a leader in the Oberstufe, where about half of learners take Informatik.

### What age is right to start?

Six is fine. Young children begin with puzzles and Scratch blocks, without typing. Typed Python follows at around nine, and the distance project suits ten to twelve year olds.

### When are classes in Dresden time?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Dresden families mostly choose late afternoons or Sunday mornings.

### Where are the mentors?

In India, teaching live over video. A 17:20 class in Dresden is 21:50 for the mentor this winter and 20:50 in summer. Your child keeps the same mentor.

### Can my child enter Pangea?

Yes, through the school: a teacher registers the class. Registration for Pangea 2027 runs from 1 October 2026 to 17 February 2027, and the first round is from 23 February to 3 March 2027. We have no connection with the organisers.

### What is the distance project?

An original Python project on the Dresden playground data. Children use Pythagoras to find the playground furthest from its nearest neighbour, 1,850 metres in Eschdorf, and then compare all 37,675 pairs to find the closest two.

### How big are the groups?

Fifteen to twenty children of similar age. Private one-to-one classes are possible too.

### How is the fee charged?

Monthly. The page shows the fee in euro at the European Central Bank reference rate, and the payment is taken in US dollars, converted by your bank. The first class is free.

## Related pages

- [Coding classes in Germany](/coding-classes-in-germany): All our Germany pages in one place.
- [Informatik by Land](/informatik-in-german-schools-by-state): Saxony beside the other Länder.
- [Känguru practice](/kangaroo-math-germany-practice): Another maths contest with dates for 2027.
- [Competitions in Germany](/math-and-coding-competitions-germany): Maths and coding contests at a glance.
- [Coding classes in Saxony](/coding-classes-in-saxony): The Saxony Land page.
- [How we teach](/how-we-teach): Our live lessons explained.

## More pages for this Land

Part of the guide: [Coding classes in Saxony](/coding-classes-in-saxony)

### Cities and pages in Saxony

- [Coding classes for kids in Chemnitz](/coding-classes-for-kids-in-chemnitz-germany)
- [Coding classes for kids in Leipzig](/coding-classes-for-kids-leipzig)
- [Programmieren lernen für Kinder in Leipzig](/programmieren-lernen-kinder-leipzig)

More guides: [Coding classes in North Rhine-Westphalia](/coding-classes-in-north-rhine-westphalia), [Coding classes in Lower Saxony](/coding-classes-in-lower-saxony), [Coding classes in Land Bremen](/coding-classes-in-land-bremen), [Coding classes in Hesse](/coding-classes-in-hesse), [Coding classes in Bavaria](/coding-classes-in-bavaria), [Coding classes in Saxony-Anhalt](/coding-classes-in-saxony-anhalt), [Coding classes in Schleswig-Holstein](/coding-classes-in-schleswig-holstein), [Coding classes in Baden-Württemberg](/coding-classes-in-baden-wuerttemberg), [Coding classes in Saarland](/coding-classes-in-saarland), [Coding classes in Rhineland-Palatinate](/coding-classes-in-rhineland-palatinate), [Coding and maths in Berlin](/coding-and-maths-classes-in-berlin-germany), [Coding and maths in Hamburg](/coding-and-maths-classes-in-hamburg-germany), [Coding classes in Thuringia](/coding-classes-in-thuringia), [Coding classes in Brandenburg](/coding-classes-in-brandenburg), [Coding classes in Mecklenburg-Vorpommern](/coding-classes-in-mecklenburg-vorpommern)

## Contact

Book the free first class at [https://learn.modernagecoders.com/coding-classes-for-kids-dresden](https://learn.modernagecoders.com/coding-classes-for-kids-dresden#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
