---
title: "Coding Classes for Kids in Ulm: Live Online, in English"
description: "Coding classes for kids in Ulm aged 6 to 12, live online in English: when BW schools start Informatik, free contests in 2026/27 and an Ulm frost data project."
canonical: https://learn.modernagecoders.com/coding-classes-for-kids-in-ulm-germany
source: src/pages/coding-classes-for-kids-in-ulm-germany.html
---
> Modern Age Coders teaches coding to Ulm children aged 6 to 12 in live online classes held in English. The youngest solve puzzles and build Scratch games, and from about nine children type real Python, always with the same mentor, who matches their pace and accent. Lessons fit Ulm afternoons and weekend mornings, in a class of fifteen to twenty or one to one.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / Kids in Ulm

Ulm · Coding for children · Ages 6 to 12

# Coding classes for kids in Ulm

Was last winter in Ulm cold? A child who says "very" is giving an opinion. A child who says "105 nights below zero, but only 25 days that stayed frozen all day" is thinking like a programmer. This page explains how our live classes in English take an Ulm child from first Scratch blocks to small Python programs like that one, when schools in Baden-Württemberg begin Informatik, and which free contests your child can try this school year.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Ages: 6 to 12, in age groups; First tool: Scratch blocks; From about 9: Typed Python; Class size: 15 to 20, or one to one; Mentors: Based in India, teaching in English; Trial: Free, no card. Rated 4.9 across 547 Google reviews.

## Which first coding course suits an Ulm child?

Three ways in, depending on age and on how your child likes to learn.

- [Scratch Coding for Kids](/courses/scratch-programming-complete-course): For beginners from 6. Games and animations made from blocks, a quick way to find out whether coding clicks.
- [Problem Solving for Kids](/courses/problem-solving-and-computational-thinking-for-kids): For puzzle lovers. Rules, patterns and step-by-step thinking, the same habits the frost project below needs.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass): From about 9. Real typed Python, small games and data files, then a gentle first look at AI.

## What does an Ulm child learn in coding class at 6, 9 and 12?

The same thinking at every age, in a form that fits the child. Groups are always by age, so a first grader never sits with a sixth grader.

### Around 6 to 8

Short, playful lessons. Children order picture steps, find the mistake in a set of instructions, and make a Scratch cat walk, jump and talk. Reading is kept light; most of the work is dragging and trying.

### Around 8 to 10

Bigger Scratch projects with loops, scores and simple rules. Children start to plan before they build, and to say what should happen before they press the green flag.

### Around 10 to 12

Typed Python. Counting, comparing, lists and small files with real numbers, like the Ulm weather record below. By 12 many children can write and explain a short program of their own.

In every group the mentor works in English, slowly and clearly, and gets used to how your child speaks. Children who answer in a mix of German and English are understood; the mentor simply gives them the English word and moves on. Scratch blocks and Python keywords look the same whatever language a child speaks at home.

## Does an Ulm primary school teach coding?

The new compulsory subject begins in secondary school, from grade 5. The four Grundschule years come before it.

**When computing appears in an Ulm child's school years**

| Grades | Stage | Computing |
|---|---|---|
| 1 to 4 | Grundschule | Before the new Informatik subject begins |
| 5 and 6 | Secondary school, any type | Informatik und Medienbildung, compulsory since 2025/26 |
| 7 onwards | Secondary school | The new subject grows year by year |

Sources: KMK, Primarbereich (four Grundschule years everywhere except Berlin and Brandenburg); Gesellschaft für Informatik, Informatik-Monitor 2026/27, Baden-Württemberg page, which records the compulsory subject Informatik und Medienbildung from 2025/26, "zunächst in den Jahrgangsstufen 5 und 6". Read on 2 November 2026.

### Good news for younger siblings

Baden-Württemberg is one of only four Länder that the Gesellschaft für Informatik counts as meeting the short-term goal of four compulsory Informatik hours. A child in Ulm today will meet computing at school from grade 5.

That makes early coding more useful, not less. A fifth grader who already splits a task into small, testable pieces tends to enjoy the new subject rather than fight it.

### What the primary years can hold

Grades 1 to 4 are four years in which curiosity about games and apps has nowhere official to go. A weekly class in that window builds the habits school will later ask for.

We teach alongside school and never instead of it. Nothing in our classes is graded or counts towards school reports.

## How many freezing days did Ulm have last winter?

It depends on what "freezing" means, and that is the whole lesson. The Deutscher Wetterdienst runs a weather station in Mähringen, part of Ulm, and publishes every daily reading free to reuse under CC BY 4.0. Our older children ask it a simple question and get two very different answers.

### The station and the file

The station is called Ulm-Mähringen, number 15444, at a height of about 593 metres. Its daily file covers 4,140 days from 1 September 2014 to the end of 2025, and every day has both a lowest and a highest temperature. We downloaded it on 3 November 2026.

For class we keep four columns in a small file, ulm_maehringen.csv: the date, the day's lowest temperature, its highest temperature and the snow depth. We use the winter year from 1 July 2024 to 30 June 2025.

### Two rules for one word

Rule A: a day counts if the temperature went below zero at any time, usually at night. Meteorologists call that a Frosttag; the DWD defines it as a day on which the minimum air temperature is below freezing.

Rule B: a day counts only if it stayed below zero all day, so even the warmest moment was frozen. That is an Eistag, a day "an denen durchgehend Frost vorherrscht", in the DWD's words.

**Count with both rules** (Python)
```python
import csv

days = []
with open("ulm_maehringen.csv", encoding="utf-8") as f:
    for row in csv.DictReader(f):
        if "2024-07-01" <= row["date"] <= "2025-06-30":
            days.append(row)

cold_night = 0
cold_all_day = 0
for day in days:
    if float(day["low"]) < 0:
        cold_night = cold_night + 1
    if float(day["high"]) < 0:
        cold_all_day = cold_all_day + 1

print("Days in the winter year:", len(days))
print("Rule A, below zero at night:", cold_night)
print("Rule B, below zero all day:", cold_all_day)
```
It prints: Days in the winter year: 365, Rule A, below zero at night: 105 and Rule B, below zero all day: 25.

Same city, same winter, same file: 105 or 25. Neither number is wrong. They answer two different questions, and the program only knew which one because the child wrote the rule down exactly. That is what coding teaches even before any screen: say precisely what you mean.

There is one more trap, at the edge. Rule A says "below zero", written in Python as < 0. What about a night that stopped at exactly 0.0? It is not below zero, so Rule A leaves it out. The next lines count how many such nights there were.

**Check the edge case** (Python)
```python
exactly_zero = 0
for day in days:
    if float(day["low"]) == 0:
        exactly_zero = exactly_zero + 1
print("Nights that stopped at exactly 0.0:", exactly_zero)
```
Run after the first program, it prints Nights that stopped at exactly 0.0: 4. With <= 0 instead, Rule A would count 109.

**Frost nights and ice days at Ulm-Mähringen, winter years July to June (our count)**

| Winter | Below zero at night (Rule A) | Below zero all day (Rule B) |
|---|---|---|
| 2015/16 | 96 | 10 |
| 2016/17 | 121 | 34 |
| 2017/18 | 97 | 27 |
| 2018/19 | 104 | 19 |
| 2019/20 | 98 | 8 |
| 2020/21 | 125 | 29 |
| 2021/22 | 119 | 10 |
| 2022/23 | 87 | 23 |
| 2023/24 | 69 | 13 |
| 2024/25 | 105 | 25 |

Data: Deutscher Wetterdienst, Climate Data Center, daily climate data, station 15444 Ulm-Mähringen, licence CC BY 4.0, downloaded 3 November 2026. Counts are our own, using "below 0" for both rules. In 2024/25 the first frost night was 13 November 2024, the last 19 April 2025, and the coldest night 4 January 2025 at minus 9.2 degrees.

The table holds a second surprise for sharp-eyed children. The winter with the most frost nights, 2020/21, was not the one with the most frozen days, which was 2016/17. And 2021/22 had many cold nights but only ten days that stayed frozen. Which winter was "the coldest"? Once again, the child has to decide what the word means before the computer can answer.

1. **Ages 6 to 8, no screen.** Put a cup of water outside on a cold evening. In the morning, is it ice? At lunchtime, is it still ice? Draw a picture for Rule A and one for Rule B.
2. **Ages 8 to 10, Scratch.** Make a sprite say "frost night" when a temperature variable is below 0, and "ice day" when a second variable is also below 0. Test it with 0 exactly.
3. **Ages 10 to 12, Python.** Run both programs, then change one winter year in the code and fill in a row of the table yourself before checking ours.

## Which free contests can a primary pupil in Ulm enter in 2026/27?

Two big national contests welcome children from grade 3, one for informatics thinking and one for maths. Both run through schools, so ask your child's teacher.

**Two contests for younger pupils, 2026/27, from the organisers' own pages**

|  | Informatik-Biber | Känguru der Mathematik |
|---|---|---|
| Organiser | Bundesweite Informatikwettbewerbe | Mathematikwettbewerb Känguru e.V. |
| Who | Grades 3 to 13, no prior knowledge | Grades 3 to 13 |
| Primary format | Nine tasks in 30 minutes | 24 tasks in 75 minutes (grades 3/4) |
| Next date | 9 to 20 November 2026 | 8 April 2027 |
| Sign-up | Through the school | Online from 1 December 2026 to 31 January 2027 |

Sources: bwinf.de, Informatik-Biber pages ("Die Biberwochen 2026 finden vom 9. bis 20. November statt."); mathe-kaenguru.de, which says the 2027 contest takes place "ausnahmsweise erst im April", on 8 April 2027. Read on 2 November 2026. The Biber is free. We are not connected with either organiser.

Neither contest needs programming. The Biber asks children to spot patterns, follow rules and find shortest routes; Känguru asks for clever maths with little calculation. The organisers' tasks stay theirs: our lessons use puzzles we invent ourselves, and a child who likes ours tends to like the real contest days as well.

## When could my child have coding classes in Ulm time?

After school in Ulm is evening in India, where the mentors are, and weekend mornings work too.

**Possible Ulm start times, with the clock in India**

| In Ulm | In India this winter | In India from 28 March 2027 |
|---|---|---|
| 15:15 | 19:45 | 18:45 |
| 16:45 | 21:15 | 20:15 |
| Saturday 09:00 | 13:30 | 12:30 |
| Sunday 10:30 | 15:00 | 14:00 |

Under the Einheitenzeitgesetz German time is UTC+1 in winter and UTC+2 in summer. Summer time 2026 ended on 25 October 2026; summer time 2027 begins on 28 March 2027. India does not change its clocks (UTC+5:30), so the gap is 4 hours 30 minutes now and 3 hours 30 minutes in summer. These are examples; you choose your own time.

**Ulm school holidays 2026/27, Baden-Württemberg row of the KMK table**

| Holiday | From | To |
|---|---|---|
| Herbstferien | 26 October 2026 | 31 October 2026 |
| Weihnachtsferien | 23 December 2026 | 9 January 2027 |
| Osterferien | 30 March 2027 (25 March also free) | 3 April 2027 |
| Pfingstferien | 18 May 2027 | 29 May 2027 |
| Sommerferien | 29 July 2027 | 11 September 2027 |

Source: KMK, Ferien im Schuljahr 2026/2027, status 9 October 2025. In the autumn the table lists 26 to 30 October plus 31 October. Classes carry on through holidays unless you ask for a pause.

## What can an Ulm child do at each stage?

How we place a child in a group, and what we report back, in five steps of our own.

**Coding milestones, ages 6 to 12 (ours)**

| Stage | Usual age | Your child can |
|---|---|---|
| Steps in order | 6 to 7 | Give a sprite exact instructions that work first time |
| Repeat and react | 7 to 9 | Use loops and respond to a key or a click |
| Rules with if | 8 to 10 | Write a rule like "below zero" and test it at the edge |
| Typed code | 9 to 11 | Type Python that repeats and decides |
| Real records | 10 to 12 | Count in a real file and explain why two answers differ |

### For parents

Ask your child what "freezing" means after the frost project. If they answer with a question, "at night or all day?", the lesson worked.
Progress notes describe what your child built and explained, never minutes on a screen.

### For children

Before you count anything, write down your rule in one sentence.
Then test your rule with a number right on the edge, like exactly zero.

## Nine more courses for Ulm children

Live lessons in English for children, each with a mentor who gets to know them.

### Blocks and games

Younger children

- [Coding for Kids](/courses/kids-coding-blocks-masterclass): A long course from first blocks to apps.
- [Minecraft coding](/courses/minecraft-coding-for-kids-course): Coding inside a world children already love.
- [Vibe coding for kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev): Scratch games with a careful first look at AI.

### Thinking and maths

Puzzles and numbers

- [Primary maths](/courses/elementary-mathematics-complete-masterclass): Number sense and problem solving for primary years.
- [Mental maths](/courses/mental-maths-mastery-kids): Quick, confident number work.
- [Informatics competitions](/courses/german-informatics-competitions-course-biber-bwinf-bwki): Our own puzzles in the spirit of the Biber.

### Making things

Older children

- [Apps for kids](/courses/block-coding-app-development-masterclass): Phone apps built with blocks.
- [Roblox game coding](/courses/roblox-game-coding-for-kids-lua-course): Games scripted in Luau.
- [C++ for kids](/courses/cpp-programming-for-kids-course): Puzzles in a second typed language.

## How do live coding classes work for an Ulm child?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Afternoons** After school, Monday to Friday.
- **Weekend mornings** Calm and fresh, good for the youngest.
- **Private** One to one at a time you agree.

- **A familiar mentor** The same person every lesson.
- **Short and lively** Lessons sized for a child's attention.
- **Hands on** Your child builds from the first minute.
- **Age groups** Children only learn with others their age.
- **Notes home** What was made and what comes next.
- **Two formats** A class of 15 to 20, or one to one.

## Fees for Ulm families

A monthly fee covers eight live lessons. We show it in euro, converted with the reference rate published by the European Central Bank; the card payment is made in US dollars, and your bank converts it, which can move the euro figure on your statement slightly.

- Free first class: Free. A free trial class. A puzzle and a first Scratch project. No card asked for.
- Group batch: €90 (charged in US dollars) a month. 15 to 20 children of similar age. The same mentor every week. Two lessons a week. Monthly, stop whenever you like.
- One to one: €134 (charged in US dollars) a month. Your child with one mentor. Their own pace and ideas. Times to suit your family.

## Coding classes for kids in Ulm: questions from parents

### Are the classes in German?

No, they are taught in English and only in English. The mentor keeps sentences short, repeats when needed and gets used to each child's accent and speed, so a child whose English is still growing can keep up.

### How young can my child start?

From 6. The youngest begin with picture puzzles and Scratch blocks, so long words and typing are not needed at first. Typed Python usually starts around 9.

### Do primary schools in Ulm teach coding?

The Informatik rule recorded by the Gesellschaft für Informatik starts in secondary school. In Baden-Württemberg the compulsory subject Informatik und Medienbildung began in 2025/26 in grades 5 and 6, so the Grundschule years, grades 1 to 4, come before the new subject starts.

### When are classes in Ulm time?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Ulm afternoons are evenings in India, where our mentors teach.

### What is the Ulm frost project?

An original Python project of ours on the Deutscher Wetterdienst station Ulm-Mähringen. In the winter of 2024 to 2025 there were 105 nights below zero but only 25 days that stayed below zero all day, and children learn why the rule decides the answer.

### Can my child enter the Informatik-Biber?

If the school registers, yes. Entry costs nothing, open from grade 3 with no prior knowledge, and in 2026 runs from 9 to 20 November. Ask the class teacher whether the school takes part.

### When is the next Känguru maths contest?

On 8 April 2027, later than usual, according to the organisers. Online registration runs from 1 December 2026 to 31 January 2027; ask the school whether it takes part.

### Does my child need a computer?

A laptop or desktop with a keyboard suits Python. For Scratch, a computer with a mouse works well. An adult nearby for the first lessons helps with sharing the screen.

### How many children are in a class?

Group classes have 15 to 20 children of a similar age. One-to-one lessons are available for children who would like the mentor to themselves.

### What do the fees cover and how are they paid?

Eight live lessons a month. The euro figure follows the European Central Bank reference rate; the payment itself is in US dollars and your bank converts it. The trial class is free.

## Related pages

- [Coding classes in Germany](/coding-classes-in-germany): Every page for families in Germany.
- [Coding classes in Baden-Württemberg](/coding-classes-in-baden-wuerttemberg): The whole Land at a glance.
- [Scratch classes for kids](/scratch-coding-classes-for-kids): The usual first step.
- [Python for 10 year olds](/python-for-10-year-olds): Typed code at ten, explained.
- [AI tools age guide](/ai-tools-age-guide): Age rules for AI tools.
- [How we teach](/how-we-teach): Inside a live lesson.

## Contact

Book the free first class at [https://learn.modernagecoders.com/coding-classes-for-kids-in-ulm-germany](https://learn.modernagecoders.com/coding-classes-for-kids-in-ulm-germany#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
