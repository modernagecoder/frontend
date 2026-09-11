---
title: "Coding Classes in Assen | Modern Age Coders"
description: "Live online coding, Python, AI and app classes for Assen, ages 6 to 67, from the Centrum and Pittelo to Kloosterveen and Marsdijk. The first lesson is free."
canonical: https://learn.modernagecoders.com/coding-classes-in-assen
source: src/pages/coding-classes-in-assen.html
---
> Assen, capital of Drenthe since 1814, had 70,769 residents on 1 January 2026 according to the national statistics. It grew from the convent of Maria in Campis, moved here from Coevorden in 1259, became a municipality in 1807 and a town in 1809, and since 1925 it has hosted a motorcycle race every year on the TT circuit. A race decides who arrives first. Programs have races too, and they are bugs: when two parts of a system update the same thing at the same moment, the result depends on which gets there first, and an update can vanish without any error. Every booking system, shared document and team of AI agents has to be built so that this cannot happen. Classes are live, online and in English for ages 6 to 67; the first is free, then USD 100 a month in a group or USD 150 one to one.

[Home](/) / [Netherlands](/coding-classes-in-netherlands) / Assen

Assen, Drenthe / Live online

# Coding classes in Assen, the TT town, and the races that happen inside code

**What are the best coding classes in Assen?** Assen, capital of Drenthe since 1814, had 70,769 residents on 1 January 2026 according to the national statistics. It grew from the convent of Maria in Campis, moved here from Coevorden in 1259, became a municipality in 1807 and a town in 1809, and since 1925 it has hosted a motorcycle race every year on the TT circuit. A race decides who arrives first. Programs have races too, and they are bugs: when two parts of a system update the same thing at the same moment, the result depends on which gets there first, and an update can vanish without any error. Every booking system, shared document and team of AI agents has to be built so that this cannot happen. Classes are live, online and in English for ages 6 to 67; the first is free, then USD 100 a month in a group or USD 150 one to one.

Two people open the same shared shopping list on two phones. Each sees that there are ten items, each adds one, and each saves. The list should now hold twelve items; it holds eleven, because the second save overwrote the first without either person noticing. Programmers call this a race condition, and it is one of the most stubborn kinds of bug there is, because it only appears when two things happen at almost exactly the same moment, which may be rare on a quiet Tuesday and constant on the busiest day of the year. Assen, where a motorcycle race has been run every year since 1925, is a fitting place to learn it. The cure is not to hope that things never collide, but to design so that a collision cannot lose anything: operations that happen as one indivisible step, locks and transactions, and rules in the database that make the impossible result impossible to store.

Facts last verified 11 September 2026. Teaching is online; no Assen branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Four courses for the capital of Drenthe

A child in Pittelo who wants to make a two-player game, a teenager in Kloosterveen building a booking app for a sports club, a student in the Centrum whose program sometimes gives a different answer for no visible reason, and an adult in Marsdijk whose team edits the same spreadsheet at once. For each of them, the first lesson is free.

- [Game Development for Kids](/courses/game-development-masterclass-for-kids) (Ages 8 to 12): Two-player games where both players can grab the same prize at once, and the child makes sure only one of them actually gets it.
- [App Development for Teens](/courses/complete-app-development-masterclass-for-teens) (Ages 13 to 18): A booking app that cannot sell the same seat twice, however many people press the button at the same moment.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Python with threads, tasks and databases, where lost updates are reproduced on purpose and then prevented properly.
- [Data and AI Analytics for Non-Programmers (Excel, Sheets, Power BI)](/courses/data-and-ai-analytics-for-non-programmers-course) (Adults): Shared files, forms and automations checked for the edits that disappear when two people save together.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## A convent of 1259, a capital of 1814, and a race every year since 1925

The municipality has seven woonplaatsen and is divided by the statistics office into ten wijken and 109 buurten: the Centrum, Lariks, Noorderpark, Pittelo, Assen-Oost, Assen-West, Peelo, Marsdijk, Kloosterveen and the Buitengebied. On 8,188 hectares of land and 157 of water it has a published density of 860 residents per square kilometre.

**Assen in the encyclopaedia, by date**

| Year | What happened |
|---|---|
| 1259 | the convent of Maria in Campis, or Marienkamp, was moved from Coevorden to a sand ridge where the centre of Assen now lies |
| 1807 | Assen became an independent municipality |
| 1809 | it became a town, on the orders of Louis Napoleon |
| 1814 | Assen became the capital of Drenthe |
| 1925 onwards | the motorcycle race on the TT circuit, held every year |

### The Drents Museum

The Drents Museum stands on the Brink, in the former Gouvernementsgebouw, the old seat of provincial government.

### A capital without size

Assen is the capital of a province whose largest municipality is Emmen. The capital is chosen for other reasons than population, and Assen has held the role since 1814.

### Newer wijken

Beyond the old centre lie wijken such as Pittelo, Marsdijk, Lariks and Kloosterveen, among the residential districts the encyclopaedia names.

## Two updates, one counter, and a result that is wrong

The table follows two parts of a program, A and B, each adding one to a counter that starts at ten. Both steps are correct on their own. The order in which they run is what goes wrong.

**A race condition, step by step**

| Step | Part A does | Part B does | Counter afterwards |
|---|---|---|---|
| 1 | reads the counter: 10 |  | 10 |
| 2 |  | reads the counter: 10 | 10 |
| 3 | adds one and writes 11 |  | 11 |
| 4 |  | adds one and writes 11 | 11, where 12 was expected |
| Fixed | reads, adds and writes as one indivisible step | waits until A has finished, then does the same | 12 |

Neither part made a mistake; each read, added and wrote exactly as written. The fault lies between them. B read the counter before A had written its result, so B's write replaced A's instead of adding to it, and one update was lost without any error message. Run the same program a thousand times and it may be right nine hundred and ninety-nine times, because the two parts usually happen to run apart; that is precisely what makes the bug so hard to catch. The fixes all do the same thing in different ways: they make read, add and write happen as one step that nothing else can interrupt, whether through an atomic operation, a lock, a database transaction, or a rule in the database itself.

## Assen in the national statistics

Published figures for the municipality, each with its year, then the encyclopaedia history, then the calculations made here.

### Residents since 1995

52,849 in 1995, 67,204 in 2013, 70,392 in 2025 and 70,769 on 1 January 2026, growth the figures site puts at 34 percent. The 2025 count divides into 35,005 men and 35,387 women.

### Ages, 2026

Children under fifteen number 10,233; people from fifteen to twenty-five 8,664; from twenty-five to forty-five 17,085; from forty-five to sixty-five 18,913; and residents aged sixty-five and above 15,874.

### Households

There were 32,767 households in 2025, averaging 2.07 people: 13,339 of one person and 19,428 of more, 10,215 of them with children.

### Homes and income

33,401 dwellings in 2025, 19,707 owner-occupied and 13,694 rented, with an estimated average value of 294,000 euro. Income averaged 32,400 euro per resident and 38,900 per income recipient in 2024, and 2.7 percent of residents were in poverty.

### Schools and students

33 primary establishments teach 6,171 pupils, around 187 each, and 10 secondary establishments teach 5,454, around 545 each. Institutions in the municipality count 3,067 MBO, 254 higher professional and 480 university students.

### Origin and arithmetic

In 2025, 56,126 residents were of Dutch origin, 3,800 of European and 10,466 of non-European origin; 62,277 were born in the Netherlands and 8,115 abroad. 70,769 minus 52,849 is 17,920. 6,171 over 33 is about 187 and 5,454 over 10 about 545. The groups were each totalled only to confirm they are complete.

Modern Age Coders has no tie to the municipality of Assen, the TT circuit, the Drents Museum or any school in Drenthe, and the page claims none. The statistics are those published for Assen for the years stated. The convent, the dates of 1807, 1809 and 1814, the race on the TT circuit, the Drents Museum and the wijken come from the encyclopaedia entry for Assen, which gives 70,765 residents for 1 January 2026, a different source that is not combined with the statistics.

## Make the collision impossible, not unlikely

A race condition cannot be fixed by making it rarer. The only reliable fixes change the design so that two updates can never silently overwrite each other.

### 1. Reproduce it on purpose

Write a small program where two tasks add to the same counter many thousands of times, and print the total. Run it several times. A total that comes out different on each run is the race, caught in the act.

### 2. Make the step indivisible

Protect the read-add-write with a lock, use an atomic operation, or let the database do the adding in one statement. Run the test again until the total is right every single time.

### 3. Let the data refuse

Add rules the storage itself enforces: a seat that can be booked only once, a balance that cannot go below zero. Then even a bug elsewhere cannot store the impossible result.

**Races in everyday systems, and what stops them**

| Where | Two things at once | What goes wrong | What stops it |
|---|---|---|---|
| A booking system | two people choose the last seat | the seat is sold twice | a rule that each seat has at most one booking |
| A shared document | two people save at the same moment | one person's changes disappear | merging changes rather than overwriting the file |
| A bank balance | two payments arrive together | both are allowed when only one should be | a transaction that checks and updates in one step |
| A counter of visits | many requests add one at once | the count is lower than the truth | an atomic increment |
| A team of AI agents | two agents edit the same file or record | one agent's work silently overwrites the other's | locking, or giving each agent its own piece of work |

### Why AI agents make race conditions everyone's problem

For a long time race conditions were a specialist concern, met mainly by people writing servers and databases. AI is changing that. Assistants now run several tools at once, teams of agents divide a task and work on it in parallel, and automations fire whenever something changes. Each of these is a set of things happening at the same time, touching shared files, spreadsheets, calendars and records. Two agents that both read a document, both improve it and both save will produce exactly the lost update in the table above, and nothing in either agent's output will show that the other's work was thrown away. The protections are the classic ones, applied to new actors: give each agent its own piece of work where possible, lock or version what must be shared, and let the storage refuse results that should be impossible. A town that has staged a race every year since 1925 knows that the start line is where things collide. So do good programs.

## Five rules for anything that happens at once

For bookings, payments, shared files, counters, background jobs and parallel AI agents. Worked through in the town of the TT.

**Designing so that collisions lose nothing**

| Rule | Applied | Failure it prevents | What you get |
|---|---|---|---|
| One step, not three | Use atomic operations or transactions for read, change and write | Lost updates | Totals that are always right |
| Rules in the storage | Enforce uniqueness and limits in the database | Double bookings and impossible balances | Data that cannot be wrong |
| Merge, do not overwrite | Save changes, not whole files, and detect conflicts | Vanishing edits | Everyone's work kept |
| Separate the work | Give each worker or agent its own records where possible | Needless collisions | Parallel work that stays safe |
| Test under load | Run many simultaneous requests in testing, not one at a time | Races that appear only on busy days | Confidence before the rush |

### For younger learners

A two-player game in which both players can press to grab the last coin. The child sees both players win it, then changes the game so the coin can be taken only once.

### For teenagers

A Python program with two threads adding to one counter a hundred thousand times each. The teenager watches the total come out wrong, fixes it with a lock, and explains the fix.

### For adults

A shared spreadsheet or form tested with two people saving at once. Adults are often surprised which of their everyday tools quietly keeps only the last save.

This section uses the encyclopaedia's account of the annual race at Assen only as an image, together with standard practice in concurrent programming. It describes no real ticketing or timing system at the TT circuit.

## From a coin both players grab to agents that cannot overwrite each other

The starting point is set in the free lesson, from the way the learner handles a real task. Age alone does not set it, and neither does the wijk.

- **Ages 6 to 10: The last coin** Children make sure only one player can grab a prize. [Scratch Coding for Kids](/courses/scratch-programming-complete-course), [Game Development for Kids](/courses/game-development-masterclass-for-kids)
- **Ages 11 to 13: Step by step** Learners trace two updates by hand and find the lost one. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [Maths Through Coding](/courses/maths-through-coding)
- **Ages 14 to 18: Threads and locks** Teenagers reproduce a race in Python and fix it. [App Development for Teens](/courses/complete-app-development-masterclass-for-teens), [Data Science for Teens](/courses/data-science-course-for-teens-python-data)
- **Ages 18 to 67: Safe in parallel** Adults design bookings, files and agents that collide safely. [Python Automation Course](/courses/python-ai-automation-masterclass-college), [Data and AI Analytics for Non-Programmers (Excel, Sheets, Power BI)](/courses/data-and-ai-analytics-for-non-programmers-course)

## AI agents now work side by side on the same files. Why should a teenager in Assen learn what happens when they collide?

Because two correct steps at the same moment can still produce a wrong result, and nothing may warn you.

Modern AI tools increasingly work in parallel: an assistant calls several tools at once, a group of agents splits a job between them, and automations react to every change as it happens. Each of those actors can be individually correct and still lose work, because the problem lies in the timing between them. Two agents that edit the same document, or two automations that update the same record, will sometimes overwrite each other, and neither will report an error. The result simply lacks something that was done.

A learner who has written two threads, watched their shared counter come out wrong and different on every run, and then fixed it with a lock, understands something that is hard to learn any other way. Deciding what must happen as one indivisible step, what the storage should refuse and how parallel workers divide their work are design decisions that come before any code is generated. An assistant can write the loop. Making sure two copies of it cannot trample each other is a person's job.

So the case for a child in Assen learning to code in 2026 is not the circuit or the capital. It is that someone who knows what happens when two things arrive at once will be needed wherever AI systems run side by side on shared work. The longer argument is in [why a child should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Classes for every wijk of the capital

From the Brink and the Centrum out to Kloosterveen and the villages of the Buitengebied, a learner in Assen joins the same class from home.

- **No trip to the centre** A learner in Peelo and a learner in Assen-West start at the same moment, each from home, with no ride across town on a dark evening.
- **School words stay Dutch** The groep, brugklas, vmbo, havo, vwo and profielkeuze of a Drenthe school keep their Dutch names; the lesson around them is in English.
- **A free, real lesson** The opening session is taught on an actual task. At the end the teacher suggests a level, a course and a weekly time, and asks for nothing.
- **Classmates at your level** Groups hold five to ten learners who have reached the same point. Assen has 10,233 residents under fifteen, and five who match on subject, level and hour are hard to find in one town, so a group may include learners from other countries.
- **Regio Noord holidays** Two lessons a week, about eight a month, at one fixed hour, pausing for the regio Noord school holidays that Drenthe keeps.
- **Time zones on your side** The teachers are in India, three and a half hours ahead of Assen in summer and four and a half in winter, so late afternoons, evenings and weekend mornings are all possible.

**Forty-three schools, seven woonplaatsen, and one online group** Assen has 33 primary establishments teaching 6,171 pupils and 10 secondary establishments teaching 5,454. Five learners who match on subject, stage and hour at once are far easier to find across every age from 6 to 67 and many countries than inside one municipality.

## What classes cost in Assen

The complete price list, stated here.

- First class: USD 0. One real lesson on a real task, ending with a level and a course.
- Group tuition: USD 100 a month. Per month, normally eight lessons, five to ten learners at one level.
- Private tuition: USD 150 a month. Per month, normally eight lessons, one learner, one teacher.

The fee is one dollar price for every country, with no euro list alongside, so a family in Marsdijk pays exactly what a family in Lariks pays. Nothing is charged until the free lesson has fixed a course and an hour, and then payment is arranged on WhatsApp. The pricing page explains pauses, format changes and missed lessons.

## Assen coding class questions

### Which wijken does Assen have?

The statistics office divides Assen into ten wijken, the Centrum, Lariks, Noorderpark, Pittelo, Assen-Oost, Assen-West, Peelo, Marsdijk, Kloosterveen and the Buitengebied, with 109 buurten across seven woonplaatsen.

### How many people live in Assen?

The national count was 70,769 on 1 January 2026, in 32,767 households in 2025. It was 52,849 in 1995, and the figures site puts the growth since then at 34 percent.

### How did Assen begin?

In 1259 the convent of Maria in Campis was moved from Coevorden to a sand ridge where the centre of Assen now lies. Assen became a municipality in 1807, a town in 1809 on the orders of Louis Napoleon, and the capital of Drenthe in 1814, the encyclopaedia records.

### What is the TT?

The motorcycle race held every year since 1925 on the TT circuit at Assen, according to the encyclopaedia.

### Where is the Drents Museum?

On the Brink in Assen, in the former Gouvernementsgebouw, the old provincial government building.

### How many schools are there in Assen?

The statistics count 33 primary establishments teaching 6,171 pupils and 10 secondary establishments teaching 5,454, with 3,067 MBO, 254 higher professional and 480 university students at institutions in the municipality. No school is rated here.

### In what language are lessons given, and when?

In English, with Dutch school words such as brugklas, havo and vwo left untranslated. The teachers work from India, three and a half hours ahead of Assen in summer and four and a half in winter, so late-afternoon, evening and weekend times are easy to find. The time is agreed in the free lesson, and the regio Noord holidays are observed.

### Is there a Modern Age Coders classroom in Assen?

No, and none is claimed here or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.

### What do Assen coding classes cost?

The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.

### How many learners are in a group?

Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.

## Across Drenthe, up to Groningen, and back to the hub

The largest municipality in the province has its own page at [coding classes in Emmen](/coding-classes-in-emmen), and all twelve municipalities are gathered on [Drenthe](/coding-classes-in-drenthe). To the north lies [Groningen](/coding-classes-in-groningen), and to the south-west [Zwolle](/coding-classes-in-zwolle), both with pages of their own. For machine learning from the first lesson there is the [AI and Python Academy](/ai-and-python-academy-netherlands), and the whole series is on the [Netherlands coding hub](/coding-classes-in-netherlands).

## Contact

Book the free class on [https://learn.modernagecoders.com/coding-classes-in-assen](https://learn.modernagecoders.com/coding-classes-in-assen#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email contact@modernagecoders.com. Rated 4.9 across 547 Google reviews.
