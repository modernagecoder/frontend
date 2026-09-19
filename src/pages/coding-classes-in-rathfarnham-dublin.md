---
title: "Coding Classes in Rathfarnham, Dublin | Modern Age Coders"
description: "Live online coding, Python, AI and maths classes for Rathfarnham learners aged 6 to 67, in small groups at one level or one to one. The first lesson is free."
canonical: https://learn.modernagecoders.com/coding-classes-in-rathfarnham-dublin
source: src/pages/coding-classes-in-rathfarnham-dublin.html
---
> Rathfarnham learners meet their teacher live on video for every lesson, sitting in a small class of learners at one level or learning solo, most weeks twice, and anyone from the age of six to sixty-seven can take part. Lessons happen at home. A first lesson is free; afterwards the monthly cost is USD 100 in a group and USD 150 for teaching one to one.

[Home](/) / [Ireland](/coding-classes-in-ireland) / [South Dublin](/coding-classes-in-south-dublin) / Rathfarnham

Rathfarnham, Dublin 14 and 16 / Live online

# Coding classes in Rathfarnham

**What are the best coding classes in Rathfarnham?** Rathfarnham learners meet their teacher live on video for every lesson, sitting in a small class of learners at one level or learning solo, most weeks twice, and anyone from the age of six to sixty-seven can take part. Lessons happen at home. A first lesson is free; afterwards the monthly cost is USD 100 in a group and USD 150 for teaching one to one.

Start at Rathfarnham Castle and set out to see ten of the heritage sites the Office of Public Works runs in Dublin, from the Pearse Museum down the road to Casino Marino on the north side. The obvious plan is to go to whichever site is closest, then the closest after that, and so on. Measured in straight lines, that route is 23.26 kilometres. A program that tries every possible order, all 362,880 of them, finds one of 21.74. The quick rule is 7 percent longer than the shortest, and with a few more sites the careful search becomes impossible. This page teaches a learner the difference between an algorithm that guesses well and one that is sure.

Facts last verified 20 September 2026. Teaching is online; no Rathfarnham branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Where Rathfarnham learners get started

Select the age band first; the teacher then uses the free opening lesson to confirm the course or switch it.

- [Coding for Kids](/courses/kids-coding-blocks-masterclass) (Ages 6 to 10): Blocks and paths: guiding a character round a map, first by the nearest step, then by planning ahead.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass) (Ages 10 to 13): Python with lists of places, distances and a first program that tries every order of a short trip.
- [Python for Teens](/courses/python-complete-masterclass-teens) (Ages 13 to 18): Algorithms in Python: greedy choices, exhaustive search, permutations and why some problems explode.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): For adults who plan deliveries, rotas or visits and need to know when a quick rule is good enough.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Nearest first, or every order? Plan the heritage tour both ways

Ten Dublin sites run by the Office of Public Works, each at the map point its Heritage Ireland page gives. Distances are straight lines, which is also how Heritage Ireland's own rounded "approx." figures are measured: 1.7 kilometres to the Pearse Museum, where the calculation gives 1.69.

**A tour of ten OPW sites starting at Rathfarnham Castle**

| Method | Orders tried | Tour length |
|---|---|---|
| Nearest site next | 1 | 23.26 km |
| Every order checked | 362,880 | 21.74 km |
| Worst possible order | 362,880 | 51.54 km |

### The quick rule

Going nearest first visits the Pearse Museum, then heads into town for St Stephen's Green, Dublin Castle and the Garden of Remembrance, swings west to Arbour Hill, Kilmainham, the War Memorial Gardens and the Phoenix Park, and only then crosses back east to Casino Marino.

### The shortest order

The shortest tour goes from the Pearse Museum straight to Kilmainham Gaol, loops the west side first through the War Memorial Gardens and the Phoenix Park, then works east through Arbour Hill, Dublin Castle, St Stephen's Green and the Garden of Remembrance to finish at Casino Marino.

### Why the rule slips

Nearest-first grabs the cheapest step each time and never looks ahead, so it strands itself far from the last site. Here that costs 1.52 kilometres, 7.0 percent more than necessary.

### A fast guess or a guaranteed answer

Many real problems, from delivery rounds to school bus routes, ask for the most efficient order in which to visit places. Checking every order guarantees the shortest, but the number of orders is a factorial: 362,880 for nine sites after the start, 479,001,600 for twelve, and more than a trillion for fifteen. So practical software mixes quick rules like nearest-first with smarter improvements, and accepts an answer that is very good rather than proven optimal. The skill is knowing which kind of answer you have and saying so.

The learner's program stores the ten sites with their latitude and longitude, builds a table of straight-line distances with the haversine formula, and then answers the question two ways. The greedy version is a loop: from the current site, pick the nearest one not yet visited. The exhaustive version generates every ordering of the other nine sites, adds up each tour and keeps the shortest, which on an ordinary laptop takes well under a second. A final loop prints how the number of orderings grows as sites are added, which is the moment the learner sees why the exhaustive method cannot scale.

### Straight lines, not streets

Real journeys follow roads and paths, so every figure here is a lower bound on the distance actually travelled. Swapping in road distances changes the numbers, not the method.

### Checking the source

The haversine distances agree with the rounded figures Heritage Ireland prints on its own pages, 1.69 against 1.7 kilometres and 4.87 against 4.9 to St Stephen's Green, which is a useful check that the map points were read correctly.

### What is left out

The tour ignores opening hours, travel time and whether ten sites fit in a day at all. Those are extra constraints a fuller version would add, each making the search harder.

## Rathfarnham, as described by those who run its places

Facts that each body publishes itself, with the eircode it gives.

**Named places in Rathfarnham**

| Place | What its own source says |
|---|---|
| Rathfarnham Castle | Rathfarnham, D14 K3T6; four flanker towers |
| Pearse Museum, St Enda's Park | Grange Road, D16 Y7Y5; nearly 20 hectares |
| Ballyroan Library | Orchardstown Avenue, D14 VY33; opened 18 February 2013 |
| St Columba's College | Whitechurch, D16 CH92 |

### An Elizabethan castle

Heritage Ireland says Rathfarnham Castle dates from the Elizabethan period and was built for Adam Loftus, a Yorkshire clergyman who rose to become Archbishop of Dublin and Lord Chancellor of Ireland, and that it has four flanker towers.

### A school turned museum

The Pearse Museum in St Enda's Park is where Patrick Pearse lived and ran his Irish-speaking school from 1910 to 1916, in nearly 20 hectares of parkland; Heritage Ireland lists admission as free.

### A library with printers

South Dublin County Council says Ballyroan Library opened on 18 February 2013 with a lecture room, an exhibition space, a digital training suite and a research room, and lists 3D printers among its facilities.

**What this page does not claim** No population is printed for Rathfarnham, because the page uses only facts that named bodies publish about the place; the electoral area figure is on the South Dublin page. The tour is a teaching exercise on straight-line distances, not a travel recommendation.

## A Rathfarnham learner's week

A typical week holds two lessons, and a teacher teaches each one live from its opening minute.

### Children

Children start with block code and maze games, first taking the nearest step and then learning to plan a whole route.

### Teenagers

Teenagers go on to Python, websites, AI projects and algorithm puzzles like the heritage tour.

### Adults

Adults can begin without any experience; the first lesson finds their course.

Site locations and descriptions come from Heritage Ireland's own pages; the distances, tours and counts are our own calculations, run on 20 September 2026. The library and the college are quoted from their own sites.

## From a maze to the travelling salesman

Bands here are indicative; the teacher places each learner properly in lesson one.

- **Ages 6 to 10: Mazes** Block-coded characters that find a way through, one step at a time. [Coding for Kids](/courses/kids-coding-blocks-masterclass), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **Ages 11 to 13: Every order** Python that lists all the orders of a short trip and picks the shortest. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [Maths Through Coding](/courses/maths-through-coding)
- **Ages 14 to 18: Greedy or exhaustive** Heuristics, permutations and factorial growth on real map points. [Python for Teens](/courses/python-complete-masterclass-teens), [Data Science for Teens](/courses/data-science-course-for-teens-python-data)
- **Ages 18 to 67: Routes at work** Rotas, rounds and schedules, and when a good-enough answer is enough. [Python Automation Course](/courses/python-ai-automation-masterclass-college), [Data Analysis Course](/courses/data-analysis-mastery-course-college)

## Ask an assistant for the shortest heritage tour

It will usually suggest a sensible-looking order.

Ask an AI assistant for the shortest route round these ten sites from Rathfarnham Castle and it will often propose an order that looks reasonable on a map, sometimes close to nearest-first. It rarely says whether the order is the shortest possible or just plausible, and it seldom checks.

With the exhaustive search written, the learner asks the assistant how it chose the order, how long the tour is, whether a shorter one exists, and how it would know. Comparing its answer with the 21.74-kilometre optimum settles the question in seconds.

Suggesting a route is easy. Proving it is the shortest is the skill. The longer argument is in [why learning to code rewards patience](/blog/is-coding-worth-learning-2026).

## How lessons run for Rathfarnham

Arrangements in brief.

- **Real teacher, real time** The teacher leads throughout and responds to each learner's code as it is typed.
- **Matched level** Five to ten learners at one level, from Rathfarnham, elsewhere in Ireland or overseas.
- **Fixed pair of days** Around eight lessons a month on two set days each week.
- **Breaks built in** Holidays, mid-terms and exam weeks are allowed for in the course plan.
- **What to use** A laptop or desktop, a working microphone and sound, and a connection that holds video.
- **Private route** One-to-one lessons for learners who are ahead, need more time, or keep hours no group matches.

**Everything online** We have no premises in Rathfarnham, in South Dublin or anywhere in Ireland. Lessons are on video and identical wherever the learner joins from.

## Rathfarnham fees

The full list.

- First class: USD 0. The first lesson and a level check, free.
- Group tuition: USD 100 a month. A month in a group of five to ten at one level, about eight live lessons.
- Private tuition: USD 150 a month. A month of one-to-one lessons at the same rhythm.

Each family outside India pays the same monthly amount in US dollars. There is no obligation after the free lesson, payment begins only with the course, and the pricing page covers holidays, missed lessons and changing between group and private teaching.

## Rathfarnham coding class questions

### Is there a Modern Age Coders centre in Rathfarnham?

No. Every lesson is live on video and we have no premises in Ireland. A learner needs a computer, sound and a microphone, and a reliable connection. The phone number on this page is our Indian number.

### What is the heritage tour project?

Planning a route round ten Dublin sites run by the Office of Public Works, starting at Rathfarnham Castle. Taking the nearest site each time gives 23.26 kilometres in straight lines; checking all 362,880 orders finds 21.74. Learners write both methods and see why the second cannot scale.

### Is this a recommended day out?

No. It uses straight-line distances and ignores opening hours and travel time. It is a lesson in algorithms, not a travel guide.

### Why is there no population for Rathfarnham on this page?

District pages print only facts that named bodies publish about the place itself, here Heritage Ireland, the council's library service and St Columba's College; the electoral area figure is on the South Dublin page.

### When do lessons take place?

Late afternoons and evenings on school days, and daytime at weekends. Irish time is used for every booking. Our teachers are based in India, which sits five and a half hours ahead of Rathfarnham between late autumn and spring and four and a half ahead through the summer, and we choose hours that suit both.

### Can adults join the classes?

Yes, anyone up to sixty-seven, including complete beginners. After the first lesson an adult picks a same-level group or private lessons.

### Will my child be with other Rathfarnham children?

Not necessarily. Groups are set by level, so classmates may be anywhere in Ireland or abroad.

### What do coding classes in Rathfarnham cost?

The first lesson is free. A group place is then USD 100 a month for about eight live lessons, two a week, with five to ten learners, and one-to-one lessons on the same timetable are USD 150 a month. Terms are agreed before any payment.

### How big is each group?

Five to ten learners, grouped by level, pace and goals rather than age or address. If no group fits a workable hour, lessons are one to one.

## Around Rathfarnham and the south side

The [South Dublin](/coding-classes-in-south-dublin) page covers the council area, [Dundrum](/coding-classes-in-dundrum-dublin) and [Tallaght](/coding-classes-in-tallaght-dublin) have district pages close by, and the [problem solving through coding](/problem-solving-skills-through-coding-ireland) page goes further with algorithms. The [Ireland hub](/coding-classes-in-ireland) connects the rest.

## Contact

Book the free class on [https://learn.modernagecoders.com/coding-classes-in-rathfarnham-dublin](https://learn.modernagecoders.com/coding-classes-in-rathfarnham-dublin#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email contact@modernagecoders.com. Rated 4.9 across 547 Google reviews.
