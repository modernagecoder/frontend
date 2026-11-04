---
title: "Coding Classes for Kids in Potsdam: Live Online, in English"
description: "Coding classes for kids in Potsdam aged 6 to 12, live online in English: six years of Grundschule, optional Informatik, a first contest, and a city tree project."
canonical: https://learn.modernagecoders.com/coding-classes-for-kids-in-potsdam-germany
source: src/pages/coding-classes-for-kids-in-potsdam-germany.html
---
> Modern Age Coders runs coding classes for Potsdam children aged 6 to 12 as live online lessons held in English. Children start with Scratch games, switch to typed Python or C++ at around 9 and can try contest puzzles. Each child keeps one mentor who suits their pace and accent, learning either with fifteen to twenty others or alone, after school or at weekends.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / [Brandenburg](/coding-classes-in-brandenburg) / Kids in Potsdam

Potsdam · Coding for children · Ages 6 to 12

# Coding classes for kids in Potsdam

In September 2027 school programmers from around the world will meet in Potsdam for the International Olympiad in Informatics. Most Potsdam children will not have had a single compulsory computing lesson by then, because Brandenburg keeps them in Grundschule for six years and treats Informatik as an option afterwards. Our live classes in English fill those years for children aged 6 to 12: games first, then real code, then real data, like the city's own register of more than a quarter of a million trees.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Ages: 6 to 12, grouped by age; First: Scratch, then Python or C++; Group: Fifteen to twenty, or one to one; Potsdam times: After school or weekend mornings; Mentors: In India, teaching in English; Free: The first class. Rated 4.9 across 547 Google reviews.

## Which course should a Potsdam child start with?

A long all-round course from six, a contest course for puzzle lovers, and typed Python for children ready for a keyboard.

- [Coding for Kids](/courses/kids-coding-blocks-masterclass): Ages 6 to 12 in age bands, ten to twelve months. A child moves from animated Scratch scenes to small apps, and meets the idea of a learning machine near the end.
- [German Informatics Competitions](/courses/german-informatics-competitions-course-biber-bwinf-bwki): From age 9, six months, joinable in any month. The puzzle level needs no code at all and leads towards the Biber and later rounds.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass): Ages 9 to 12, eight to ten months. Children type every line themselves; turtle pictures and games come first, city data like the trees below later.

## Do Potsdam children learn computing at school?

Not as a compulsory subject. Brandenburg has six years of Grundschule and offers Informatik only as an option after that.

### A six-year Grundschule

In most Länder, secondary school starts after grade 4. The KMK describes the exception in its overview of lower secondary education: the shared Grundschule lasts four years, "in Berlin und Brandenburg sechsjährigen", six years in Berlin and Brandenburg.

So a Potsdam child is a Grundschule pupil from about 6 to about 12, the entire age range of this page, and no Brandenburg rule asks for a computing lesson in those six years.

### Informatik as an option

After Grundschule, Informatik in Brandenburg stays optional, according to the 2026/27 edition of the GI's Informatik-Monitor. Gesamt- and Oberschulen may use a five-hour focus block in grades 9 and 10 for it, or offer it as a Wahlpflicht subject from grade 7; Gymnasien may use up to seven hours in grades 9 and 10.

The GI names Brandenburg among six Länder without Informatik for every pupil and among three where no binding plan to change that is known.

**Computing in a Potsdam school career, school year 2026/27**

| Grades | School | Informatik |
|---|---|---|
| 1 to 6 | Grundschule | No compulsory computing |
| 7 and 8 | Gesamtschule or Oberschule | Possible as a Wahlpflicht subject |
| 9 and 10 | Gesamtschule or Oberschule | Wahlpflicht, or a focus block of up to five hours |
| 9 and 10 | Gymnasium | A focus block of up to seven hours, if offered |
| 10 (Gymnasium) | Einführungsphase | A two-hour Wahlpflichtkurs, if offered |
| 11 and 12 (Gymnasium) | Qualifikationsphase | Grundkurs three hours, Leistungskurs five hours |

Sources: the KMK overview of lower secondary schooling, and the Informatik-Monitor 2026/27 by the Gesellschaft für Informatik (Brandenburg and Germany-wide pages), consulted 2 November 2026.

The result is a long wait. A curious six year old in Potsdam could reach grade 9 before a school offers Informatik at all, and even then only if the school runs it and the child chooses it. Children who start at home or with us at 7 or 8 have years of practice by then. The [Brandenburg page](/coding-classes-in-brandenburg) covers the Land in detail; we teach beside school and award no grades.

## How many of Potsdam's trees are conifers?

The city maps every tree on its city map and publishes the list. It is so long that it comes in three parts, and that is exactly where the lesson is.

### The data

The Landeshauptstadt Potsdam publishes its trees from the Stadtkarte as open data on opendata.potsdam.de under the Datenlizenz Deutschland Zero 2.0, free for any use. The register comes as "Teil 1 von 3", "Teil 2 von 3" and "Teil 3 von 3". We downloaded all three on 3 November 2026, keeping four columns: an id, the kind of tree (ggartbez), a point number and a survey date.

The kinds are Laubbaum (broadleaf tree), Nadelbaum (conifer), Obstbaum (fruit tree), Baumstumpf (stump) and Einzelgebüsch, Strauch (a single bush).

### The question

What share of Potsdam's mapped trees are conifers? A child with only the first file could answer quickly. Version 1 does exactly that.

Before reading the answer, look at the first number it prints, and ask whether anything about it looks odd.

**Version 1: count one file** (Python)
```python
import csv
from collections import Counter

with open("baeume_teil1.csv", encoding="utf-8-sig") as f:
    kinds = Counter(line["ggartbez"] for line in csv.DictReader(f, delimiter=";"))

total = sum(kinds.values())
print("Rows in part 1:", total)
print("Conifers in part 1:", kinds["Nadelbaum"], "=", round(100 * kinds["Nadelbaum"] / total, 1), "%")
```
It prints: Rows in part 1: 100000 and Conifers in part 1: 11272 = 11.3 %.

Exactly 100,000 rows. Real cities do not happen to have a round number of trees. A list that stops at exactly 100,000 has almost certainly been cut, the way a long book is split into volumes, and here the title says so: Teil 1 von 3. Any answer from part 1 alone is an answer about part 1, not about Potsdam.

Version 2 reads all three parts into one count. It also keeps a set of every id it has seen, because when data is split, a row can sometimes land in two parts; if that happened, the number of different ids would be smaller than the number of rows.

**Version 2: append to Version 1 and read all three files** (Python)
```python
kinds = Counter()
seen = set()
for part in ["baeume_teil1.csv", "baeume_teil2.csv", "baeume_teil3.csv"]:
    with open(part, encoding="utf-8-sig") as f:
        for line in csv.DictReader(f, delimiter=";"):
            seen.add(line["objectid"])
            kinds[line["ggartbez"]] += 1

total = sum(kinds.values())
print("Rows in all parts:", total, " different ids:", len(seen))
print("Conifers in all parts:", kinds["Nadelbaum"], "=", round(100 * kinds["Nadelbaum"] / total, 1), "%")
```
It prints: Rows in all parts: 283772 different ids: 283772 and Conifers in all parts: 39196 = 13.8 %.

All 283,772 rows have different ids, so nothing was counted twice, and the conifer share rises from 11.3 to 13.8 percent. The reason is that the parts are not alike: in our count, part 2 is 12.6 percent conifers and part 3 is 18.3 percent. Had a child been handed only part 3, they would have reported nearly one tree in five. Same city, same question, three different answers, until every part is in.

**Conifers in each part of Potsdam's tree register (our count)**

| File | Rows | Conifers | Share |
|---|---|---|---|
| Teil 1 | 100,000 | 11,272 | 11.3 % |
| Teil 2 | 100,000 | 12,572 | 12.6 % |
| Teil 3 | 83,772 | 15,352 | 18.3 % |
| All three | 283,772 | 39,196 | 13.8 % |

Data: Landeshauptstadt Potsdam, Bäume Teil 1, 2 and 3 von 3, Stadtkarte Potsdam, opendata.potsdam.de, Datenlizenz Deutschland Zero 2.0, downloaded 3 November 2026. Counts and code are ours. The rows also include 2,144 stumps and 247 single bushes; whether to call those trees is a question for the children. We are not connected with the city.

1. **Ages 6 to 8, no screen.** Tip a bag of mixed sweets into three bowls without looking. Count the red ones in the first bowl only. Then count all three. Did the first bowl tell the truth?
2. **Ages 8 to 10, Scratch.** Make three lists and a sprite that counts the word "tree" in one list, then in all three. Make one list end at exactly 100 items.
3. **Ages 10 to 12, Python.** Run Version 1 on part 3 instead of part 1, then run Version 2. Explain to someone at home why the answers differ.
4. **Going further.** Remove the stumps and bushes from the total and work out the conifer share again. Does a stump count as a tree?

## Is there a coding contest a Potsdam child can try?

Yes, and a big one is coming to the city. Start small, though.

### The Informatik-Biber, this month

The Bundesweite Informatikwettbewerbe run the Informatik-Biber. It costs nothing, is open to pupils from grade 3 up to grade 13, and asks for no programming at all. In 2026 it runs from 9 to 20 November. Primary pupils get nine tasks in 30 minutes.

Schools register their pupils, so the class teacher is the person to ask. We never use or copy the real Biber tasks; in class we write our own puzzles in the same spirit.

### The IOI, in 2027

BWINF announces that the 39th International Olympiad in Informatics takes place from 12 to 19 September 2027 at the Hasso-Plattner-Institut in Potsdam. It is for secondary school students far beyond the level of this page.

For families who want to know how it works and how Germany's team is chosen, our [IOI 2027 Potsdam guide](/ioi-2027-potsdam-guide) explains it. We are not connected with BWINF, the HPI or the IOI.

For a child of 6 to 12, the honest path is puzzles first, then Scratch, then a typed language. BWINF notes that its IOI training is programmed in C++, which is one reason some of our older children choose C++ for Kids after Scratch. None of that needs to be decided at seven. Enjoying puzzles at seven is the whole plan.

## How does a Potsdam child manage a class in English?

Better than most parents expect. Three reasons.

### No surprises

Every lesson is live and in English, taught by mentors in India. We have no German-language classes and tell families so before the free trial, not after it.

### Seeing first

A coding class is mostly showing: a block is dragged, a sprite jumps, a number changes. The English word arrives at the same moment as the thing it means, which is how young children learn words anyway.

### Patient mentors

Our mentors keep a gentle pace and learn quickly how your child pronounces things. Mixing in a German word is fine; the child just hears the English one in reply.

Your child keeps one mentor from week to week, and that steadiness matters for young children: the mentor learns which kinds of puzzle delight your child and which need a gentler start.

## When are classes for Potsdam children?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

**Example Potsdam times beside the mentor's time in India**

| Potsdam | India now (MEZ months) | India from 28 March 2027 (MESZ) |
|---|---|---|
| 15:20 | 19:50 | 18:50 |
| 16:40 | 21:10 | 20:10 |
| Saturday 09:45 | 14:15 | 13:15 |
| Sunday 10:00 | 14:30 | 13:30 |

MEZ (UTC+1) and MESZ (UTC+2) are German legal time under the Einheitenzeitgesetz; MEZ began again on 25 October 2026. India keeps UTC+5:30 all year, so the mentor's clock is 4 hours 30 minutes ahead of Potsdam until 28 March 2027 and 3 hours 30 minutes ahead after it. The rows are examples only.

**Brandenburg school holidays, 2026/27, with weekdays (KMK dates; weekdays ours)**

| Break | First day | Last day |
|---|---|---|
| Herbstferien | Monday 19.10.2026 | Friday 30.10.2026 |
| Weihnachtsferien | Wednesday 23.12.2026 | Saturday 02.01.2027 |
| Winterferien | Monday 01.02.2027 | Saturday 06.02.2027 |
| Osterferien | Monday 22.03.2027 | Saturday 03.04.2027 |
| Pfingsten | Tuesday 18.05.2027 | Tuesday 18.05.2027 |
| Sommerferien | Thursday 01.07.2027 | Saturday 14.08.2027 |

Dates from the Brandenburg line of the KMK holiday overview 2026/2027, dated 9 October 2025.

Holidays do not stop classes. Potsdam is Brandenburg's capital, with 184,754 inhabitants according to Destatis for 31 December 2024, in a Land of 2,556,747. Children from Werder, Michendorf or Kleinmachnow share the Brandenburg calendar. Berlin, with 3,685,265 people right next door, also has a six-year Grundschule, but its holiday dates differ in places, so a Berlin child's plan follows Berlin's list.

## What will my child be able to do, step by step?

Our milestones for ages 6 to 12, each shown in your child's own project.

**From first blocks to real data (our milestones)**

| Step | Typical age | Shown when your child |
|---|---|---|
| Order | 6 to 7 | Makes a sprite do five things in the right order |
| Repeat | 7 to 8 | Uses a loop instead of copying blocks |
| Remember | 8 to 9 | Keeps a score in a variable |
| Type | 9 to 10 | Writes and fixes a short Python program |
| Combine | 10 to 12 | Counts across several files and checks for repeats |

### For parents

The combine step is the Potsdam tree project. A child who asks "is this all of it?" before trusting a number has learned something many adults still miss.
Every few weeks a brief message tells you what your child made.

### For children

If a file ends on a round number, look for the next part.
Count the ids as well as the rows. If they differ, something was counted twice.

## Nine more courses for Potsdam children

All nine follow the same pattern: taught live, in English, by a mentor who stays.

### Thinking

Ages 5 to 12

- [Reasoning for young thinkers](/courses/reasoning-and-readiness-course-for-young-thinkers): Patterns and logic in two age bands, 6 to 9.
- [Problem solving](/courses/problem-solving-and-computational-thinking-for-kids): Plans, puzzles and step-by-step thinking, 7 to 12.
- [Mental maths](/courses/mental-maths-mastery-kids): Number sense for everyday sums, 5 to 10.

### Games

Ages 7 to 17

- [Minecraft coding](/courses/minecraft-coding-for-kids-course): Programming inside Minecraft, 7 to 12.
- [Game development](/courses/game-development-masterclass-for-kids): Scratch, Roblox and Minecraft together, 8 to 12.
- [Godot games](/courses/godot-game-development-course-for-kids-and-teens): GDScript in the open-source Godot engine, 10 to 17.

### Typed code

Ages 8 to 12

- [C++ for kids](/courses/cpp-programming-for-kids-course): The contest language, gently, 9 to 12.
- [Websites for kids](/courses/kids-ai-web-development-course): Pages written in HTML and CSS by the child, 9 to 12.
- [App making](/courses/block-coding-app-development-masterclass): Block-built apps that run on a phone, 8 to 12.

## How do live classes work for a Potsdam child?

Twice a week for an hour, always with the mentor your child knows. Younger children work in short bursts: a puzzle, a new block, building, showing.

- **After school** Potsdam afternoons from about twenty past three.
- **Weekend mornings** Saturday and Sunday, calm times for the youngest.
- **One to one** Arranged with the mentor around your week.

- **One mentor** A familiar person every class.
- **Short steps** Small pieces, lots of trying.
- **Child drives** Your child holds the mouse.
- **Age groups** Children with their own age.
- **Parent notes** A few lines on progress every few weeks.
- **Batch or alone** Up to twenty children together, or just one.

## What do coding classes for a Potsdam child cost?

A monthly fee pays for eight live classes. We display it in euro at the European Central Bank reference rate, while the card is charged in US dollars; the conversion is your bank's, so the euro amount on your statement may be slightly off ours.

- Free first class: Free. A free first class. A puzzle and a first Scratch program. No card needed.
- Group batch: €90 (charged in US dollars) a month. Fifteen to twenty children of similar age. One regular mentor. Two classes a week. Monthly, stop any month.
- One to one: €134 (charged in US dollars) a month. Your child with their own mentor. Projects picked for your child. Times your family chooses.

## Coding classes for kids in Potsdam: frequent questions

### Are the classes taught in German?

No, we only teach in English. The mentor, who works from India, slows down, repeats and quickly gets used to your child's accent, and nearly everything happens visibly on the screen, so limited English is rarely a problem.

### From which age do you take children?

From 6, starting with Scratch, whose coloured blocks need no typing. Most children move to Python, or for some C++, at about 9, when reading and typing are comfortable.

### Do Potsdam schools teach coding?

Not as a compulsory subject. Brandenburg has a six-year Grundschule, and after it the Gesellschaft für Informatik reports Informatik only as an option: a Wahlpflicht subject or a focus block in grades 9 and 10, depending on the school.

### Can my child take part in the IOI 2027 in Potsdam?

The IOI is for secondary school students selected through the Bundeswettbewerb Informatik, far beyond the level of a child of 6 to 12. Our IOI 2027 Potsdam guide explains the selection. For young children, the Informatik-Biber is the right first contest.

### When are classes in Potsdam time?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Potsdam families mostly pick mid-afternoons or weekend mornings.

### What is the tree project on this page?

Our own lesson on the Landeshauptstadt Potsdam tree register, which is published in three parts. Children count conifers in one part, then in all three, and learn why a file that ends at exactly 100,000 rows is only part of the story.

### Will my child use ChatGPT?

No. OpenAI's own terms set 13 as the minimum and ask for parental permission below 18. Our young learners make tiny AI programs of their own instead, which shows them what is going on inside.

### Where are the mentors?

They teach from India over a live video call. This winter, a class at 16:40 in Potsdam starts at 21:10 on the mentor's clock. Your child does not change mentors partway through.

### How many children are in a group?

Between fifteen and twenty, all close in age. One-to-one is the private alternative: two weekly classes for your child alone.

### How are fees paid?

By the month. You see the fee in euro, calculated with the reference rate of the European Central Bank; the charge itself is in US dollars and your bank converts it, so expect a small difference. Booking the trial asks for no card.

## Related pages

- [Coding classes in Brandenburg](/coding-classes-in-brandenburg): The Land, its schools and our classes.
- [IOI 2027 in Potsdam](/ioi-2027-potsdam-guide): The olympiad in your city, explained for families.
- [Informatik-Biber practice](/informatik-biber-practice-in-english): Our own Biber-style puzzles.
- [Coding classes for kids in Berlin](/coding-classes-for-kids-berlin): For families on the Berlin side.
- [Scratch classes for kids](/scratch-classes-for-kids-germany): The usual first step.
- [How we teach](/how-we-teach): What a lesson with us looks like.

## More pages for this Land

Part of the guide: [Coding classes in Brandenburg](/coding-classes-in-brandenburg)

More guides: [Coding classes in North Rhine-Westphalia](/coding-classes-in-north-rhine-westphalia), [Coding classes in Lower Saxony](/coding-classes-in-lower-saxony), [Coding classes in Land Bremen](/coding-classes-in-land-bremen), [Coding classes in Hesse](/coding-classes-in-hesse), [Coding classes in Bavaria](/coding-classes-in-bavaria), [Coding classes in Saxony-Anhalt](/coding-classes-in-saxony-anhalt), [Coding classes in Schleswig-Holstein](/coding-classes-in-schleswig-holstein), [Coding classes in Baden-Württemberg](/coding-classes-in-baden-wuerttemberg), [Coding classes in Saarland](/coding-classes-in-saarland), [Coding classes in Rhineland-Palatinate](/coding-classes-in-rhineland-palatinate), [Coding and maths in Berlin](/coding-and-maths-classes-in-berlin-germany), [Coding and maths in Hamburg](/coding-and-maths-classes-in-hamburg-germany), [Coding classes in Saxony](/coding-classes-in-saxony), [Coding classes in Thuringia](/coding-classes-in-thuringia), [Coding classes in Mecklenburg-Vorpommern](/coding-classes-in-mecklenburg-vorpommern)

## Contact

Book the free first class at [https://learn.modernagecoders.com/coding-classes-for-kids-in-potsdam-germany](https://learn.modernagecoders.com/coding-classes-for-kids-in-potsdam-germany#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
