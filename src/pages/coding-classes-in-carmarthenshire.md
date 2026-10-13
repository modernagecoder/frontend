---
title: "Coding Classes in Carmarthenshire | Live Online, Ages 6 to 67"
description: "Live online coding, Python and maths classes across Carmarthenshire, from Llanelli and Carmarthen to Ammanford, Cross Hands, Burry Port and Llandovery."
canonical: https://learn.modernagecoders.com/coding-classes-in-carmarthenshire
source: src/pages/coding-classes-in-carmarthenshire.html
---
> Live online coding, Python and maths classes across Carmarthenshire, from Llanelli and Carmarthen to Ammanford, Cross Hands, Burry Port and Llandovery.

Skip to contentCourses for Carmarthenshire

## Popular starting courses in Carmarthenshire

A Year 1 pupil in Llanelli who loves drawing shapes, a Year 7 in Ammanford ready for typed code, a Year 12 in Carmarthen taking A level maths, and an adult in Burry Port who wants Python for work. For each, a free lesson comes first.

[![Coding for Kids course thumbnail](/images/kids-coding.webp)Ages 6 to 12Coding for KidsBlock coding with circles, curves and shapes drawn by a moving pen.See the syllabus](/courses/kids-coding-blocks-masterclass)[![Maths Through Coding course thumbnail](/images/maths-through-coding.webp)Ages 10 to 15Maths Through CodingMeasuring curves, pi and approximation, discovered by coding.See the syllabus](/courses/maths-through-coding)[![High School Mathematics course thumbnail](/images/high-school-maths.webp)Ages 14 to 18High School MathematicsSecondary maths in depth, including sequences, series and convergence.See the syllabus](/courses/complete-high-school-mathematics-mastery)[![Python Masterclass course thumbnail](/images/python-college.webp)AdultsPython MasterclassPython for adults from zero, through to numerical calculations.See the syllabus](/courses/python-programming-masterclass-zero-to-advanced-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Carmarthenshire in figures

## 187,897 people in Carmarthenshire

Census day in March 2021 found 187,897 usual residents, according to ONS figures read through Nomis; town sizes below are the matching built-up areas.

| Place | Population | Place | Population |
| --- | --- | --- | --- |
| Llanelli | 42,155 | Burry Port | 4,965 |
| Carmarthen | 16,455 | Llangennech | 4,280 |
| Ammanford | 8,285 | Tumble | 4,040 |
| Cross Hands and Pen-y-groes | 6,340 | Glanaman | 3,865 |

Summing census output areas ourselves reproduces each of these figures to within about twenty people. Carmarthenshire schools teach the Curriculum for Wales and enter older pupils for WJEC GCSE and A level courses. The county council fixes the school holidays; not having read its calendar, we plan each learner's breaks from the dates their family sends.

### Swansea and WJEC help

The city of [Swansea](/best-coding-class-in-swansea) has its own page. For exams, see [GCSE Maths and Numeracy in Wales](/gcse-maths-and-numeracy-wales-help) and [WJEC GCSE Computer Science](/wjec-gcse-computer-science-help-wales).

The Carmarthenshire project

## Measuring half an ellipse

Rough formulas, Ramanujan, straight-line pieces and an exact method from Gauss.

The span comes from the record: about 25 metres, so the half-span is 12.5. The rise is not given, so the learner tries invented values, mainly 7 metres. The arch is modelled as half an ellipse. The learner then measures its length five ways: two quick guesses, two formulas found by the Indian mathematician Srinivasa Ramanujan, a curve made of many short straight pieces, and an exact method based on Gauss's arithmetic-geometric mean, which repeatedly averages two numbers in two different ways until they agree.

| Method | Length | Error |
| --- | --- | --- |
| Exact, arithmetic-geometric mean (5 steps) | 31.242807 m | Reference |
| Pi times average of the two half-axes | 30.630528 m | 2.0 per cent short |
| Straight line pieces, 16 of them | 31.192643 m | 5 cm short |
| Straight line pieces, 1,024 of them | 31.242794 m | Under 0.02 mm short |
| Ramanujan's first formula | 31.242775 m | About 0.03 mm short |
| Ramanujan's second formula | 31.242807 m | A few billionths of a metre |

The quick guesses are a couple of per cent out either way, which on a real arch would be about 60 centimetres. Chopping the curve into straight pieces works, but slowly: every time the number of pieces goes up four times, the error drops about sixteen times, so 1,024 pieces are needed for sub-millimetre accuracy. Ramanujan's formulas, published over a century ago, are astonishing; the second is right to a few billionths of a metre here. The arithmetic-geometric mean reaches the exact value in only five rounds of averaging, because its error roughly squares away at every step.

Our own first version of the exact method had a bug and returned half the right length. It was caught by an easy test: when the rise equals the half-span, the arch is a semicircle, and every correct method must give pi times 12.5, 39.27 metres. Testing code against a case you already know the answer to is one of the most useful habits in programming.

### Ages 8 to 11

Lay string along drawn circles and ovals, measure it, and compare with a guess, then draw ovals in Scratch.

### Ages 11 to 15

Approximate an arch with straight pieces in Python and watch the total creep up as the pieces multiply.

### Ages 15 and up

Code Ramanujan's formulas and the arithmetic-geometric mean, measure each error, and test on the semicircle case.

### A real bridge, a modelled arch

The span, the elliptical shape and the history come from Cadw's record. The rise is invented and the real arch is not a perfect ellipse, so the lengths describe the mathematics, not the stonework at Dolauhirion.

Why Dolauhirion Bridge

## An elegant arch over the Tywi

What the Grade I record says.

| Record detail | What it says |
| --- | --- |
| Built | By Thomas Edwards according to the record, marked Thomas Edward 1773; also attributed to William Edwards and dated 1785 by other writers |
| Form | A single broad elliptical arch of some 25 m span, 3.6 m wide, rising to a thin crown |
| Innovation | Weight-reducing pierced spandrels, introduced by the Rev William Edwards at Pontypridd in 1756 |
| Holes | Large circular holes through the spandrels, edged with cut stone |
| Setting | Rising high above the Tywi from natural rock abutments |
| Status | Listed Grade I and a scheduled monument |

Approximations and exact algorithms sit behind satellite orbits, GPS on an ellipsoidal Earth, lens design and the graphics that draw ovals on every screen. Knowing how accurate a formula is, and testing it against a case with a known answer, separates reliable software from lucky software. A Carmarthenshire student who has measured an arch five ways understands that difference.

We have no connection with Cadw or Carmarthenshire County Council. The record's content is theirs; the arch model, the calculations and any mistakes are ours.

Stages

## From string on circles to Ramanujan

The year bands are guides; the free lesson places each learner.

Years 1 to 4

### Shapes and curves

Block coding that draws circles, ovals and patterns.

[Coding for Kids](/courses/kids-coding-blocks-masterclass)[Scratch Coding for Kids](/courses/scratch-programming-complete-course)Years 5 to 8

### Measuring with code

Typed Python adding up small steps to measure curves.

[Maths Through Coding](/courses/maths-through-coding)[Python and AI for Kids](/courses/python-ai-kids-masterclass)Years 9 to 13

### Series and convergence

Approximation, sequences and accuracy alongside WJEC GCSE and A level maths.

[High School Mathematics](/courses/complete-high-school-mathematics-mastery)[Python for Teens](/courses/python-complete-masterclass-teens)Adults

### Numerical Python

Python for adults, from calculations to testing numerical code.

[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)[Data Analysis Course](/courses/data-analysis-mastery-course-college)AI and formulas

## An AI can quote an ellipse formula in seconds. Will it say how accurate it is?

A formula without an error estimate is only half an answer.

Ask a chatbot for the length of an elliptical arch and it will often give one formula and one number. It rarely says whether that formula is an approximation, how far out it might be, or how to check it against a known case such as a semicircle.

A Carmarthenshire learner who has compared five methods and tested each on a semicircle knows the questions to ask. That habit turns an AI answer into a checked one.

Proving how accurate an answer is, rather than taking it on trust, is a skill Carmarthenshire teenagers gain by learning to code in 2026. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

How it works

## From Llanelli to Llandovery, online

Towns and villages across the county all join the same way.

### Pupil at the keyboard

The learner types every line; the teacher watches on the shared screen and steps in when a bug appears.

### Welsh years, WJEC exams

A Year 6 in Burry Port or a Year 13 in Carmarthen is placed by school year and Curriculum for Wales stage, and exam study follows WJEC. Lessons are in English.

### First lesson, no charge

A complete lesson for free, followed by an honest view of what fits.

### Level-matched classes

Fifteen to twenty learners at one level in each class, from different places.

### Term-time rhythm

Two lessons weekly during term, none in the holidays.

### Spring and autumn clock changes

Twice a year the clocks move, but your class stays at its UK time; the teachers, working on India time, shift their day.

Why groups span the county

Five learners at one level, free at the same time, rarely live in one Carmarthenshire town. Grouping by level gives a pupil in Tumble or Glanaman a class that fits.

Fees

## Fees in Carmarthenshire

A learner in Llandeilo pays exactly what one in Llanelli pays, and the same as learners in every country outside India.

First class**USD 0**

A full lesson, free, then a recommendation.

Group tuition**USD 100**

About eight lessons a month in a group of fifteen to twenty.

Private tuition**USD 150**

About eight lessons a month with a teacher of your own.

We quote only US dollars, never sterling. An invoice follows only after the trial, when a course and weekly slot are settled, and our pricing page explains what happens over holidays, after absences and when changing format.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Carmarthenshire%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)Reviews

## How families rate us on Google

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

## Book a free Carmarthenshire lesson

A line or two is enough: who the lesson is for, their year or age, and a favourite pastime. From that, the trial might become a Scratch sketch, a first Python loop, or the Dolauhirion arch described here.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Carmarthenshire one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Carmarthenshire%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)

Submitted details are used for placement and follow-up.

FAQ

## Carmarthenshire questions

The county, the Dolauhirion project and practical points.

### How many people live in Carmarthenshire?

The 2021 census counted 187,897 usual residents in Carmarthenshire.

### What are the largest towns in Carmarthenshire?

ONS 2021 built-up areas: Llanelli 42,155, Carmarthen 16,455, Ammanford 8,285, and Cross Hands and Pen-y-groes 6,340.

### What is the Dolauhirion Bridge project?

Learners measure a half-ellipse arch with a 25 metre span in Python, comparing rough formulas, straight-line pieces, Ramanujan's formulas and an exact method based on the arithmetic-geometric mean.

### Why is there no simple formula for an ellipse's perimeter?

Its exact length needs what mathematicians call an elliptic integral, so people use very good approximations, such as Ramanujan's, or fast exact algorithms.

### How old is Dolauhirion Bridge?

Cadw notes it is marked Thomas Edward 1773, with some writers dating it to 1785, and lists it at Grade I.

### Are lessons held in Carmarthenshire?

There is no classroom to travel to: a Glanaman pupil and a Llangennech pupil both join from home by video.

### Do you teach A level maths in Wales?

Yes, with WJEC GCSE Computer Science and GCSE maths too. We build understanding and never promise grades.

### What ages can learn?

Six-year-olds start with blocks; teenagers move to Python and exam maths; adults up to 67 learn Python at their own pace.

### How much are lessons?

Free for the first lesson; after that, a monthly USD 100 in a group or USD 150 individually.

### Do lessons pause in school holidays?

Yes. Tell us your school's holiday weeks and we leave them free.

Nearby pages

## More West and South Wales pages

[Swansea](/best-coding-class-in-swansea) and [St Davids](/best-coding-class-in-st-davids) have pages of their own, and [Bridgend](/coding-classes-in-bridgend) models a water-balance lift. Our [Wales](/coding-and-ai-classes-in-wales) page links every area as it is published, and the [UK hub](/coding-classes-in-united-kingdom) covers the rest.

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Carmarthenshire%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/coding-classes-in-carmarthenshire*
