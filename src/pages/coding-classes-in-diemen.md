---
title: "Coding Classes in Diemen | Modern Age Coders"
description: "Live online coding, Python, AI and app classes for Diemen, ages 6 to 67, from Diemen-Noord and Oud-Diemen to Diemen-Zuid and the Sniep. First lesson free."
canonical: https://learn.modernagecoders.com/coding-classes-in-diemen
source: src/pages/coding-classes-in-diemen.html
---
> Live online coding, Python, AI and app classes for Diemen, ages 6 to 67, from Diemen-Noord and Oud-Diemen to Diemen-Zuid and the Sniep. First lesson free.

Skip to contentCourse picks for Diemen

## Four courses for the town between Amsterdam and the Gooi

A child in Diemen-Noord who wants to make a maze game, a teenager in Diemen-Zuid building a route finder for the metro, a student in Oud-Diemen who has met graphs in a data course, and an adult in the Sniep who plans deliveries or schedules at work. The first lesson is free for each of them.

[![Game Development for Kids course thumbnail](/images/game-dev-kids.webp)Ages 8 to 12Game Development for KidsMaze games where a child first finds the way by hand, then teaches the computer to find the shortest one.See the syllabus](/courses/game-development-masterclass-for-kids)[![Maths Through Coding course thumbnail](/images/maths-through-coding.webp)Ages 11 to 14Maths Through CodingNetworks, distances and paths made concrete in code, so graph ideas become something a learner has built and tested.See the syllabus](/courses/maths-through-coding)[![Python Automation Course course thumbnail](/images/python-college.webp)College and adultPython Automation CourseGraphs and shortest paths in Python, from a small network by hand to route planning and scheduling with real data.See the syllabus](/courses/python-ai-automation-masterclass-college)[![Data and AI Analytics for Non-Programmers (Excel, Sheets, Power BI) course thumbnail](/images/data-ai-analytics-non-programmers.webp)AdultsData and AI Analytics for Non-Programmers (Excel, Sheets, Power BI)Delivery, travel and scheduling problems seen as networks, with a clear idea of what is being optimised.See the syllabus](/courses/data-and-ai-analytics-for-non-programmers-course)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Diemen today

## A settlement of 1033, a commuter town, and a town that stayed its own

The encyclopaedia divides Diemen into six parts, Diemen-Noord, Oud-Diemen, Diemen-Centrum, once called Diemerbrug, Diemen-Zuid, Diemen Sniep and the outlying area; the statistics office counts nine wijken, including Plantage de Sniep, Holland Park and Bergwijkpark, and 38 buurten. On 1,195 hectares of land and 209 of water it has a published density of 2,781 residents per square kilometre.

| When | What happened |
| --- | --- |
| 1033 | the oldest mention of Diemen, one of the first settlements in the area |
| From the mid-twentieth century | Diemen grew strongly as a commuter town for Amsterdam; the old villages grew together, and Diemen-Noord and Diemen-Zuid were built |
| 1974 | station Diemen opened on the Gooilijn |
| 1992 to 1996 | the Diemerbos, a young wood, was planted in phases |
| 1993 | a railway station on the Ringspoorbaan opened beside the metro station Diemen-Zuid |

### Its own municipality

Diemen has held on as an independent municipality, squeezed between Amsterdam-Watergraafsmeer, Duivendrecht and Amsterdam-Zuidoost, the encyclopaedia says.

### Green in the middle

Park Spoorzicht is a nature park in the centre of Diemen, and the Diemerbos, planted between 1992 and 1996, is one of the youngest woods in the region.

### A young population

Of the 33,327 residents counted for 2026, 11,110 are aged twenty-five to forty-five, a third of the total, and institutions in the municipality count 1,890 university students.

The fastest way across

## Five stops, seven connections, and a surprising answer

The network below is invented to show the method, not a real map of Diemen. Travel times between stops, in minutes: A to B 4, A to C 10, B to C 3, B to D 12, C to D 5, C to E 11, D to E 2.

| Step | Stop fixed | Fastest time from A | Reached via |
| --- | --- | --- | --- |
| 1 | A | 0 minutes | the start |
| 2 | B | 4 minutes | A |
| 3 | C | 7 minutes | A, B (not the direct 10) |
| 4 | D | 12 minutes | A, B, C (not B to D, which gives 16) |
| 5 | E | 14 minutes | A, B, C, D |

The fastest route from A to E takes 14 minutes and passes through every stop. The two-stop route, A to C to E, takes 21 minutes, and A to B to D to E takes 18. A traveller who counted stops would choose badly; a program that counts minutes chooses well. Dijkstra's method gets there by a simple rule repeated: of all the stops not yet fixed, fix the one that can be reached soonest, then see whether going through it improves the time to its neighbours. When the destination is fixed, its time is guaranteed to be the best possible, provided no connection has a negative cost. Change what counts as cost, say to money, or to the number of changes between metro and train, and the same method finds a different best route. Choosing the cost is the human decision; finding the route is the computer's job.

Verified local facts

## Diemen in the national statistics

The figures published for the municipality with their years, the encyclopaedia history, and the page's own arithmetic at the end.

### Residents

23,078 in 1995, 25,218 in 2013, 33,228 in 2025 and 33,327 on 1 January 2026. The 2025 count is 16,212 men and 17,016 women.

### Ages in 2026

4,794 under fifteen, 4,872 aged fifteen to twenty-five, 11,110 aged twenty-five to forty-five, 7,092 aged forty-five to sixty-five, and 5,459 aged sixty-five and over.

### Households

16,881 households in 2025, averaging 1.95 people: 7,857 of a single person and 9,024 of more, 4,798 of them with children.

### Homes and income

16,115 dwellings in 2025, 6,446 owner-occupied and 9,669 rented, with an estimated average value of 460,000 euro. Average income was 38,300 euro per resident and 46,800 per income recipient in 2024, and 5.1 percent of residents were in poverty.

### Schools and origin

7 primary establishments teach 2,423 pupils and there is one secondary establishment; institutions in the municipality count 527 MBO, 830 higher professional and 1,890 university students. By origin, 45 percent of residents are Dutch, 17 percent European and 38 percent from outside Europe; 65 percent were born in the Netherlands.

### The arithmetic

33,327 minus 25,218 is 8,109, a rise of 32 percent since 2013. The age groups, the men and women and the household types were added up to confirm their totals, and the tenure groups make 16,115. The network example uses invented times only.

Modern Age Coders has no connection with the municipality of Diemen, the railway or metro operators, or any school in the area, and nothing on this page implies one. The statistics are those published for Diemen for the years stated. The oldest mention, the growth, the six parts, the stations, the Diemerbos, Park Spoorzicht and Diemen's independence come from the encyclopaedia entry for Diemen, which gives 33,284 residents on 1 January 2026 and 14.04 square kilometres, from a different source, not combined with the statistics.

Signature project

## Draw the network, then let the computer find the way

Graphs are one of the most useful ideas in computing, and a learner can go from a drawing on paper to a working route finder in a few lessons.

### 1. Draw it as a graph

Put the places as dots and the connections as lines, and write a cost on every line. The drawing is already the data structure a program needs: a list of nodes and a list of weighted edges.

### 2. Run the method by hand

Work through Dijkstra's rule on paper, fixing the nearest unfixed stop each time. Doing it once by hand makes the code obvious, and shows why it always finds the best route.

### 3. Change the cost

Swap minutes for money, or add a penalty for each change of line, and run it again. The best route changes, which shows that the question you ask decides the answer you get.

| System | The nodes | The edges and their cost | The question asked |
| --- | --- | --- | --- |
| A route planner | stations and stops | connections, in minutes | the fastest way from here to there |
| The internet | routers | links, in delay or capacity | the best path for each packet of data |
| A delivery company | addresses and depots | roads, in time or fuel | the cheapest set of rounds |
| A game | squares of the map | moves, in steps or danger | how a character reaches its goal |
| Diemen's own lines | Diemen, Diemen-Zuid and beyond | the Gooilijn, the Ringspoorbaan and the metro | which connection to take today |

### Why AI still needs the classic algorithms

Ask an AI assistant for the best route through a network and it will usually give a sensible-sounding answer, based on patterns in text it has read. That is not the same as solving the problem. A language model does not run Dijkstra's method in its head; it predicts what a good answer looks like, and on a network it has never seen it can confidently choose a route that is slower, longer or simply impossible. The reliable approach combines the two: let the AI help describe the problem, choose sensible costs and write the code, and let the proven algorithm find the route. Many AI systems now do exactly this, calling a real route-finding tool rather than guessing. The same goes for scheduling, logistics and any task that is secretly a graph. A learner who has worked the method by hand on five stops, and seen the longest-looking route win, understands why a guaranteed algorithm is worth more than a confident guess. Diemen, a town defined by where its lines meet, is a good place to learn it.

Reliable pipeline

## Five habits for problems that are secretly networks

For routes, deliveries, schedules, games and data connections. Practised in a town whose metro and railways meet at Diemen-Zuid.

| Habit | In practice | What it avoids | What it gives |
| --- | --- | --- | --- |
| See the graph | Recognise when a problem is places joined by connections | Solving a network problem by trial and error | Access to proven methods |
| Choose the cost | Decide what is being minimised: time, money, changes, risk | A best route for the wrong question | Answers that fit the need |
| Use a proven algorithm | Find routes with a method that guarantees the best answer | Confident but wrong guesses | Routes you can rely on |
| Check the edge cases | Test unreachable places and connections that are closed | Programs that loop or crash | Robust behaviour |
| Let AI call the tool | Have AI describe and code the problem, and a real algorithm solve it | Plausible routes that are not the best | The strengths of both |

### For younger learners

A maze drawn on squared paper and then built as a game. The child finds the way by hand, then watches the computer find the shortest path and compares the two.

### For teenagers

Dijkstra's method in Python on a small network the teenager draws, then on a real public transport map exported from open data, with two different choices of cost.

### For adults

A work problem, delivery rounds or meeting rooms or task order, drawn as a graph. Adults often find it becomes solvable the moment it is drawn.

This section uses the encyclopaedia's account of Diemen's stations as its setting and an invented network for the worked example. It gives no real travel times for any Diemen connection.

Learning ladder

## From a maze on squared paper to route finding with real data

Each learner's starting level comes from the free lesson, by watching them on a real task. Age alone does not decide it, and neither does the part of Diemen they live in.

Ages 6 to 10

### Mazes

Children find paths through mazes and then program the shortest one.

[Scratch Coding for Kids](/courses/scratch-programming-complete-course)[Game Development for Kids](/courses/game-development-masterclass-for-kids)Ages 11 to 13

### Dots and lines

Learners draw networks and work out routes by hand before coding them.

[Python and AI for Kids](/courses/python-ai-kids-masterclass)[Maths Through Coding](/courses/maths-through-coding)Ages 14 to 18

### Dijkstra in Python

Teenagers write the algorithm and try different costs on real maps.

[App Development for Teens](/courses/complete-app-development-masterclass-for-teens)[Data Science for Teens](/courses/data-science-course-for-teens-python-data)Ages 18 to 67

### Networks at work

Adults turn routes, rounds and schedules into graphs and solve them.

[Python Automation Course](/courses/python-ai-automation-masterclass-college)[Data and AI Analytics for Non-Programmers (Excel, Sheets, Power BI)](/courses/data-and-ai-analytics-for-non-programmers-course)Coding and AI

## An AI can suggest a route in a second. Why should a teenager in Diemen learn how the best route is really found?

Because a confident guess about a network is not the same as a guaranteed answer.

Language models are very good at describing routes, schedules and plans in fluent sentences, and less good at actually optimising them. Given a network of stops and times, a model may pick the route that looks natural, often the one with fewest changes, without checking whether another is faster. It sounds certain either way. That matters for anything from travel to deliveries to the order in which tasks should be done, all of which are graph problems underneath.

A learner who has worked Dijkstra's method by hand on five stops, watched the route through every stop beat the direct-looking one, and then coded it, knows the difference between an answer that sounds right and one that is proven right. Recognising that a problem is a network, choosing what to minimise and insisting that a real algorithm does the solving are human decisions. The model can describe the journey. Making sure it is the best journey is the person's job.

So the case for a child in Diemen learning to code in 2026 is not the metro or the railway. It is that someone who can turn a messy problem into a graph and solve it properly will be needed wherever AI is asked to plan routes, rounds and schedules. The longer argument is in [why a child should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

Delivery

## A live class for every part of Diemen

From Diemen-Noord across the railway to Diemen-Zuid and the Sniep, the town is compact, and a lesson on a laptop is the one journey that takes no time at all.

### No connection to catch

A learner in Oud-Diemen and a learner in Holland Park start the same lesson at the same moment, each from home, with no metro or train in between.

### School words in Dutch

Groep, brugklas, vmbo, havo, vwo and profielkeuze stay in Dutch, as Diemen families use them, while the teaching is in English.

### The first hour is free

It is a real lesson on a real task. The teacher then recommends a level, a course and a regular time, and asks for no payment details.

### Groups from further afield

Fifteen to twenty learners at the same stage. Diemen has 4,794 residents under fifteen, too few to fill every level and hour locally, so groups include learners from other places and countries.

### Regio Noord holidays

Twice a week, about eight lessons a month, at a fixed hour, pausing for the regio Noord holidays that Noord-Holland schools keep.

### Teachers a few hours ahead

The teachers are in India, three and a half hours ahead of Diemen in summer and four and a half in winter, so late afternoons, evenings and weekend mornings all work.

Eight schools, many connections, and one group online

Diemen has 7 primary establishments teaching 2,423 pupils and one secondary establishment. A coding group needs five learners who match on subject, stage and hour, and they are found far more easily across all ages from 6 to 67 and many countries than inside one small municipality.

Fees

## What classes cost in Diemen

The whole price list, set out here.

First class**USD 0**

A real lesson on a real task, ending with a level and a course.

Group tuition**USD 100**

Per month, normally eight lessons, fifteen to twenty learners at one level.

Private tuition**USD 150**

Per month, normally eight lessons, one learner and one teacher.

The fee is one dollar price for every country, with no euro list, so a household in Diemen-Noord pays what a household in Diemen-Zuid pays. Nothing is charged until the free lesson has settled a course and a time, and payment is then arranged on WhatsApp. The pricing page covers pauses, format changes and missed lessons.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20want%20a%20free%20coding%20class%20for%20a%20learner%20in%20Diemen.)Reviews

## Six Google reviews, as their authors wrote them

Rated 4.9 across 547 Google reviews. These are real reviews, reproduced as written.

★★★★★

"The one step solution for my son. Modern Age Coders make learning coding so simple that kids love it. The teachers explain complex concepts clearly with practical exercises and interactive content."

Ria Mukherjee

Parent

★★★★★

"Modern Age Coders has been a game-changer for me. I struggled to grasp IT concepts and coding before joining, but their classes transformed everything. I can now confidently write complex programs with ease."

Samriddha Mondal

Student

★★★★★

"One of the most wonderful education centres out there. Education is not limited to school syllabus but focuses on skill development."

Vansh Agarwal

Student

★★★★★

"My child Dhairya is really enjoying the Modern Age Coders classes. This is his first online class and he eagerly looks forward to it. I can already see his improvement, and the teachers are very cooperative."

Sonam Oswal

Parent of Dhairya

★★★★★

"Modern Age Coders have wonderful teachers who teach in a clear, easy and practical way. The teacher boosts students' confidence and inspires them to learn without hesitation."

Sonu Goyal

Parent

★★★★★

"I highly recommend this computer coding class! The teachers are incredibly knowledgeable and passionate about coding."

Ritu Kedia

Parent

Free placement class

## What can the learner do already?

The first task might be a maze with a shortest path to find, a small network worked through by hand, or Dijkstra's method written in Python.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Diemen one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20want%20a%20free%20coding%20class%20for%20a%20learner%20in%20Diemen.)

Submitted details are used for placement and follow-up.

FAQ

## Diemen coding class questions

The town, its lines, its figures, and the lessons.

### Which parts does Diemen have?

The encyclopaedia names six parts, Diemen-Noord, Oud-Diemen, Diemen-Centrum (once called Diemerbrug), Diemen-Zuid, Diemen Sniep and the outlying area. The statistics office counts nine wijken and 38 buurten.

### How many people live in Diemen?

The national count was 33,327 on 1 January 2026, in 16,881 households in 2025. It was 25,218 in 2013.

### How old is Diemen?

The oldest mention dates from 1033, which makes Diemen one of the first settlements in the area, according to the encyclopaedia. It grew strongly from the middle of the twentieth century as a commuter town for Amsterdam.

### Which stations does Diemen have?

Station Diemen opened on the Gooilijn in 1974, and in 1993 a railway station on the Ringspoorbaan opened beside the metro station Diemen-Zuid, the encyclopaedia records.

### What is the Diemerbos?

A young wood planted in phases between 1992 and 1996. Park Spoorzicht, in the centre of Diemen, is a nature park.

### How many schools are there in Diemen?

The statistics count 7 primary establishments teaching 2,423 pupils and one secondary establishment, with 527 MBO, 830 higher professional and 1,890 university students at institutions in the municipality. This page rates no school.

### What language are lessons in, and when are they?

In English, with Dutch school terms such as brugklas, havo and vwo kept as they are. The teachers work from India, three and a half hours ahead of Diemen in summer and four and a half in winter, so late-afternoon, evening and weekend times are easy to arrange. The time is agreed in the free lesson, and regio Noord holidays are kept.

### Is there a Modern Age Coders classroom in Diemen?

No, and none is claimed here or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.

### What do Diemen coding classes cost?

The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of fifteen to twenty learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.

### How many learners are in a group?

Fifteen to twenty, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.

Explore Amsterdam and beyond

## Into Amsterdam, out to Weesp, and back to the hub

Diemen is surrounded by the city covered by [coding classes in Amsterdam](/coding-classes-in-amsterdam), whose district pages include [Amsterdam-Oost](/coding-classes-in-amsterdam-oost), with Watergraafsmeer, and [Amsterdam-Zuidoost](/coding-classes-in-amsterdam-zuidoost). Along the Gooilijn lies [Weesp](/coding-classes-in-weesp), and every municipality in the province is listed on [Noord-Holland](/coding-classes-in-noord-holland). For machine learning from the start there is the [AI and Python Academy](/ai-and-python-academy-netherlands), and the whole series is on the [Netherlands coding hub](/coding-classes-in-netherlands).

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20want%20a%20free%20coding%20class%20for%20a%20learner%20in%20Diemen.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/coding-classes-in-diemen*
