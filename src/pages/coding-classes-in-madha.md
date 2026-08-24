---
title: "Coding Classes in Madha | Modern Age Coders"
description: "Live online coding, Python and AI classes for Madha learners aged 6 to 67, built on a real geometry project, with clear USD fees and a free first class in Oman."
canonical: https://learn.modernagecoders.com/coding-classes-in-madha
source: src/pages/coding-classes-in-madha.html
---
> Live online coding, Python and AI classes for Madha learners aged 6 to 67, built on a real geometry project, with clear USD fees and a free first class in Oman.

Skip to contentCourse picks

## Learn that a boundary can be more than one loop

Four routes from cutting a hole in a paper shape to writing containment tests that know about interior rings.

[![Elementary Mathematics course thumbnail](/images/elementary-maths.webp)Ages 6 to 11Elementary MathematicsA shape can have a hole in the middle of it.See the syllabus](/courses/elementary-mathematics-complete-masterclass)[![Maths Through Coding course thumbnail](/images/maths-through-coding.webp)Ages 10 to 14Maths Through CodingArea with the middle taken back out.See the syllabus](/courses/maths-through-coding)[![DSA and Problem Solving for Teens course thumbnail](/images/problem-solving-teens.webp)Ages 14 to 18DSA and Problem Solving for TeensPoint in polygon, and the ring you forgot.See the syllabus](/courses/problem-solving-dsa-masterclass-teens)[![Data Analysis course thumbnail](/images/data-analysis-college.webp)College and adultData AnalysisBoundaries that are two loops, not one.See the syllabus](/courses/data-analysis-mastery-course-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python AI Automation course thumbnail](/images/python-automation-ai-college.webp)Python and AICollege and adultPython AI AutomationAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex and Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex and Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Madha today

## A country inside a country inside a country

Nearly every dataset assumes a territory is one connected shape with one edge. Madha is a standing refutation of that on both counts.

### Omani land with no Omani border

Madha is an exclave of Oman entirely surrounded by the United Arab Emirates. Nothing about it touches the rest of the country, so any calculation that assumes national territory is contiguous has already failed before it starts.

### A piece of Sharjah in the middle

Nahwa forms part of the Emirate of Sharjah and sits inside Madha as a counter-enclave, a second-order enclave. The Omani boundary here is a ring with another ring inside it, and the inner one is not Oman.

### Administratively part of Musandam

Madha is governed as part of the Musandam Governorate, which is itself separated from the rest of Oman. A wilayat detached from a governorate that is detached from the country is three levels of the same assumption breaking at once.

Inside the outline and inside the territory are different questions

A point-in-polygon test answers whether something falls within a line. Membership of a territory asks whether it belongs. Those two agree for almost every place on earth, which is exactly why nobody writes the code that tells them apart, and here they disagree for 4.40 square kilometres.

Verified local facts

## Madha facts with a trail behind them

Each claim traced, including one the sources leave unresolved.

### An exclave of Oman

Madha is recorded as an exclave of Oman entirely surrounded by the United Arab Emirates, lying within Sharjah while governed as part of Musandam. Both halves of that sentence are true simultaneously, which is the whole difficulty.

### Ninety three point three four square kilometres

The published total area is 93.34 km2, given as 36.04 sq mi. The page uses it as published and does not attempt to reconcile it against anything.

### Nahwa, four point four square kilometres

Nahwa is part of Sharjah and is a counter-enclave, a second-order enclave, inside Madha, with an area of 4.40 km2. That is the hole in the doughnut, and it has a size.

### Three hundred and two people

Nahwa is recorded with a population of 302 at 2015. Those are the people a single-ring containment test puts in the wrong country.

### Four thousand three hundred and six

Madha itself is recorded at 4,306 for 2022. A separate database gives 4,492 for 2020; different years, so both can stand, and neither is adopted here as the figure.

### A border drawn by a question

The boundaries were settled around seventy years ago when the elders of Madha were asked about tribal allegiance, and while neighbouring villages went to what are now Sharjah, Fujairah and Ras Al Khaimah, the Madhanis were swayed toward the sultan of Oman. Borders made by asking people produce shapes no algorithm would design.

Modern Age Coders has no association with Madha, with Nahwa or with any authority named above, and claims none. This page exists because the wilayat is a working physical model of a data structure that most software gets wrong.

Signature project

## Three hundred and two people in the wrong country

One boundary, drawn correctly, tested correctly, producing an answer that is wrong about an area the size of a small town.

### 1. Take the published shape

Madha at 93.34 square kilometres, with Nahwa at 4.40 square kilometres somewhere inside it. Both figures are published. The relationship between them is published too: one contains the other and they belong to different countries.

### 2. Test whether a point is in Oman

The obvious implementation checks whether the point falls inside Madha's outline. For every location on earth except this one and a handful of others, that is the same question as whether the point is in Oman.

### 3. Count what it got wrong

Every point in Nahwa passes. That is 4.40 square kilometres and 302 people assigned to Oman, which is 4.9 per cent of the Omani land inside that outline. A headcount inside the outer ring comes to 4,608 against a census figure of 4,306, overstating by 7.0 per cent.

| Measure | Outer ring only | Both rings | What the difference is |
| --- | --- | --- | --- |
| Land counted as Oman | 93.34 km2 | 88.94 km2 | Nahwa, 4.40 km2 |
| Error as a share of Omani land | n/a | n/a | 4.9 per cent |
| People counted as in Oman | 4,608 | 4,306 | 302 residents of Nahwa |
| Error as a share of the census | n/a | n/a | 7.0 per cent |
| Points that fail the test | none | all of Nahwa | No warning either way |
| Does the source resolve it? | no | no | See the note below |

### The published area does not say which of the two it is

Nothing found for this page states whether the 93.34 square kilometres includes Nahwa or excludes it. If it includes it, Omani land is 88.94 and the outer ring is 93.34. If it excludes it, Omani land is 93.34 and the outer ring is 97.74. The two readings differ by exactly the disputed area, and a figure that cannot tell you which of those it means is a figure you cannot add to anything. Every number above was computed before this was written, from the two published areas.

Reliable pipeline

## Model the hole, then test membership rather than containment

Five habits that keep a doughnut from being read as a disc.

| Stage | Rule | What it prevents | What it gives you |
| --- | --- | --- | --- |
| Represent | Store interior rings, not just the outline | A hole that does not exist in the data | A shape that matches the ground |
| Ask | Test membership of a territory, not position in a line | Two different questions treated as one | The question you meant |
| Subtract | Say whether an area is gross or net of its holes | A figure nobody can add up | A number with a definition |
| Probe | Test with a point inside the hole | A suite that never enters Nahwa | The case that separates the two answers |
| Distrust | Treat contiguity as an assumption, not a fact | Code that breaks on exclaves | Something that survives real geography |

### For younger learners

A paper ring with a smaller ring cut out of the middle, and counters dropped onto it. The child sorts which counters are on the paper and which fell through the hole. It settles the idea in about a minute with no screen.

### For teenagers

The two published areas in Python, computing land and headcount both ways and printing the gap. The learner then writes the test case that places a point inside Nahwa and watches the single-ring version return the wrong country.

### For adults

Geometries carry their interior rings, areas state whether they are gross or net, membership is resolved against an authority rather than a shape, and contiguity is never assumed for a national boundary.

The exclave status, the area of 93.34 km2 given as 36.04 sq mi, Nahwa at 4.40 km2 and 302 people, Madha at 4,306 in 2022, the governance under Musandam and the tribal allegiance origin of the boundary are all published. Whether 93.34 includes or excludes Nahwa is not, and the page treats that as unresolved rather than choosing. Every derived figure here is arithmetic on those two published areas.

Learning ladder

## From a paper ring with a hole to geometry that models the hole

One free class is usually enough to find the step that will move a learner furthest, whatever their year group says.

Ages 6 to 10

### Shapes with holes in them

Children sort what is on the ring from what fell through it.

[Early Math Foundations](/courses/early-math-foundations)[Kids Coding Blocks](/courses/kids-coding-blocks-masterclass)Ages 11 to 13

### Area, minus the middle

Learners compute a shape twice and find the difference has a name.

[Problem Solving and Computational Thinking](/courses/problem-solving-and-computational-thinking-for-kids)[Python and AI for Kids](/courses/python-ai-kids-masterclass)Ages 14 to 18

### Containment against membership

Teenagers write the test that puts a point inside the hole.

[Python for Teens](/courses/python-complete-masterclass-teens)[Data Science for Teens](/courses/data-science-course-for-teens-python-data)Ages 18 to 67

### Geometry that survives real borders

Adults model interior rings and stop assuming territory is connected.

[Python Programming](/courses/python-programming-masterclass-zero-to-advanced-college)[MySQL Database](/courses/mysql-database-complete-masterclass-college)Delivery

## Live classes in a wilayat you reach by leaving the country

Getting from Madha to anywhere else in Oman means crossing the UAE, which makes the case for teaching that arrives over a connection about as plainly as it can be made.

### Every road out crosses a border

There is no route from here to the rest of Oman that stays in Oman. A lesson delivered down a connection is the only version that does not involve somebody else's territory.

### The first lesson is free, entirely

A full class with a genuine task, finishing on a specific recommendation. We take no card details to arrange it and ask for no decision until somebody has watched us teach.

### Groups of five to eight, set by ability

Who joins a group depends on what a learner can already do and what they want next. Which side of which boundary they live on plays no part, which in Madha is not a small claim.

### When a group is the wrong shape

One teacher and one learner, which is what a fixed examination date or a single stubborn weakness usually calls for.

### Roughly eight sessions a month

Twice weekly, at a time chosen once at enrolment. Border crossings and work patterns move around; the slot does not have to.

### Ninety minutes of difference, settled once

Oman runs that far behind India, and it is dealt with at the start along with school terms, working hours, examination weeks and Ramadan.

The wrong answer is invisible unless somebody stands in the hole

A learner testing points around Madha gets correct results everywhere they think to look. What breaks it open is a teacher who names a village inside the wilayat and asks which country it is in, and then lets the learner find out that their code has an opinion about it.

Fees

## One free class, then group or private tuition

Pricing is in USD and is confirmed with the selected format.

First class**USD 0**

Ability task, goal review and starting recommendation.

Group tuition**USD 100**

Per month, normally eight lessons, five to eight learners.

Private tuition**USD 150**

Per month, normally eight lessons, one student and one teacher.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20want%20a%20free%20coding%20class%20for%20a%20learner%20in%20Madha.)Reviews

## What families and learners say

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

## Tell us the learner's level and the boundary that will not behave

The first task might be a paper ring with a hole in it, a Python containment test that finally fails, or a real map layer at work where somewhere is filed under the wrong owner.

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [contact@modernagecoders.com](mailto:contact@modernagecoders.com). This is Modern Age Coders' actual contact and not an invented Madha number.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20want%20a%20free%20coding%20class%20for%20a%20learner%20in%20Madha.)

Submitted details are used for placement and follow-up.

FAQ

## Madha coding class questions

The wilayat, the teaching and the terms of service, taken one at a time.

### Is Madha really an exclave with an enclave inside it?

Yes. Madha is an exclave of Oman entirely surrounded by the United Arab Emirates and governed as part of Musandam, and Nahwa, which belongs to Sharjah, sits inside Madha as a counter-enclave. Both are published, along with the areas of 93.34 km2 and 4.40 km2 and the populations of 4,306 and 302.

### Why does the page not give a single land area for Oman here?

Because the sources do not resolve it. Nothing found states whether the 93.34 square kilometres includes Nahwa or excludes it. If it includes it, Omani land is 88.94; if it excludes it, 93.34. Choosing one quietly would be exactly the failure the page is about, so both readings are stated and neither is adopted.

### Is there a Modern Age Coders centre in Madha?

No. No premises are claimed in Madha, in Musandam or anywhere else. Classes are live online and need a laptop or desktop, working audio, a current browser and a stable connection. The page describes where the service reaches, not a building.

### What does a correct implementation look like?

Store the geometry with its interior ring, so the shape in the data has the same hole the ground does. Then resolve membership against an authority rather than inferring it from a shape at all, and keep a test case whose point sits inside Nahwa so the difference between the two approaches stays visible.

### Do you teach adults in Madha as well as school students?

Yes, to an upper limit of 67. The adult track covers Python, databases and analytics. Anyone maintaining territory, delivery zone, franchise or coverage boundaries has met some version of this, usually the week a customer turned out to be in a hole nobody had modelled. Real data of your own works best where it is yours to share.

### What comes out of this project?

A geometry that carries its interior rings, an area figure that states whether it is gross or net, a membership test that asks the right question, and a test case sitting inside the hole. Those four keep working in any mapping stack.

### How much do Madha coding classes cost?

The first class is free. Standard group tuition is USD 100 per month for two live lessons each week, normally eight lessons monthly. Standard private tuition is USD 150 per month for one learner with one teacher on the same usual frequency. Course, format, recurring time and availability are confirmed before payment.

### What is the class size for Madha learners?

A group normally contains five to eight compatible learners. Compatibility includes current level, learning pace and objective, not age alone. Private tuition is one learner with one teacher. If no suitable group is ready, a learner can discuss private tuition or wait for an appropriate cohort.

### How are Madha class times arranged?

Oman is one and a half hours behind India. The teacher and learner agree a recurring time before payment, generally for two live lessons each week. Friday and Saturday options may be discussed subject to availability. School, work and travel schedules, examinations and Ramadan routines should be mentioned before confirmation.

### What happens in the free Madha class?

We work out what the learner is trying to become able to do and set one task pitched there. A child sorts counters on a paper ring with a hole cut out of it. A teenager computes the land and the headcount both ways and explains the gap. An adult is asked whether any boundary they maintain has a hole in it that the data does not know about. It ends with a named course, a chosen format, an agreed time and a stated fee in USD, and no charge for the hour itself.

Explore Oman

## The rest of Musandam

The [Oman coding hub](/coding-classes-in-oman) carries national delivery, fees and the full course list. In the same governorate, [Khasab](/coding-classes-in-khasab) covers map projection distorting area and [Daba Al Bayah](/coding-classes-in-daba-al-bayah) one town name shared by three governments.

Book the free class[Close with WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20want%20a%20free%20coding%20class%20for%20a%20learner%20in%20Madha.)Free Madha class[Call +91 91233 66161](tel:+919123366161)

## Keep exploring Modern Age Coders

### Coding classes in nearby places

- [Coding Classes in Madhya Pradesh](/coding-classes-in-madhya-pradesh)
- [Coding Classes in Kerala](/coding-classes-in-kerala)
- [Coding Classes in Maharashtra](/coding-classes-in-maharashtra)
- [Coding Classes in Karnataka](/coding-classes-in-karnataka)
- [Coding Classes in Mahout](/coding-classes-in-mahout)
- [Coding Classes in Jharkhand](/coding-classes-in-jharkhand)
- [Online Coding Classes in Bawshar](/coding-classes-in-bawshar)
- [Coding Classes in Bahla](/coding-classes-in-bahla)
- [Coding Classes in Assam](/coding-classes-in-assam)

### Learn more

- [MySQL for Teens: SQL from First Query to Real Apps](/courses/mysql-mastery-for-teens)
- [AI Classes for Beginners](/ai-classes-for-beginners)
- [Python for 10 Year Olds: Real Python Programs, Turtle Art & Mini Games](/python-for-10-year-olds)
- [AI Science Fair Project Ideas That Follow the Actual Rules](/science-fair-project-ideas-ai)

### Free resources

- [Python Tutorial for Beginners: Complete Guide](/resources/python)
- [Strings in Python](/resources/python/strings-in-python)
- [Variables and Data Types](/resources/javascript/variables-and-data-types)
- [Closures, Scope, and Hoisting](/resources/javascript/closures-scope-and-hoisting)

### From the blog

- [Learn Python for Beginners: Complete Step-by-Step Guide (2026)](/blog/python-for-beginners)
- [Python vs JavaScript: Which Should You Learn First?](/blog/python-vs-javascript-which-to-learn-first)
- [Learn Python Step by Step: The Free Tutorial Library](/blog/learn-python-step-by-step)

### Start here

- [Try a free trial class with a Modern Age Coders mentor](/free-trial)
- [About Modern Age Coders, teaching since 2020](/about)

---

*Canonical: https://learn.modernagecoders.com/coding-classes-in-madha*
