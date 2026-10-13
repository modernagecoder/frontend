---
title: "Coding Classes in Torfaen | Live Online Classes, Ages 6 to 67"
description: "Live online coding, Python and maths classes across Torfaen, for learners in Cwmbrân, Pontypool, Abersychan, Blaenavon, Ponthir and every village between."
canonical: https://learn.modernagecoders.com/coding-classes-in-torfaen
source: src/pages/coding-classes-in-torfaen.html
---
> Live online coding, Python and maths classes across Torfaen, for learners in Cwmbrân, Pontypool, Abersychan, Blaenavon, Ponthir and every village between.

Skip to contentCourses for Torfaen

## Courses Torfaen learners start with

A Year 1 pupil in Ponthir who collects shells, a Year 6 in Abersychan ready to type Python, a Year 11 in Cwmbrân preparing for WJEC GCSE maths, and an adult in Blaenavon learning to code after work. A free lesson places each of them.

[![Coding for Kids course thumbnail](/images/kids-coding.webp)Ages 6 to 12Coding for KidsBlock coding with spirals, patterns and turtle drawings.See the syllabus](/courses/kids-coding-blocks-masterclass)[![Python and AI for Kids course thumbnail](/images/python-kids.webp)Ages 9 to 14Python and AI for KidsTyped Python for younger learners, drawing and measuring spirals.See the syllabus](/courses/python-ai-kids-masterclass)[![High School Mathematics course thumbnail](/images/high-school-maths.webp)Ages 14 to 18High School MathematicsFull secondary maths, from sequences to exponentials and logs.See the syllabus](/courses/complete-high-school-mathematics-mastery)[![Python Masterclass course thumbnail](/images/python-college.webp)AdultsPython MasterclassAdult Python from the very first line to practical programs.See the syllabus](/courses/python-programming-masterclass-zero-to-advanced-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Torfaen by the census

## 92,276 people, two main towns

ONS counted 92,276 usual residents in Torfaen at the 2021 census, which we read through Nomis. The places below are ONS built-up areas from that census.

| Built-up area | Residents |
| --- | --- |
| Cwmbrân | 47,090 |
| Pontypool | 29,070 |
| Abersychan | 7,495 |
| Blaenavon | 5,640 |
| Ponthir | 1,260 |

Only five built-up areas pass 1,000 people, and our output-area sums agree with each published figure to within 15. Torfaen schools follow the Curriculum for Wales, and pupils in exam years take WJEC GCSEs and A levels. We have not read the council's term dates, so families tell us their holiday weeks.

### Newport and WJEC exams

The city of [Newport](/best-coding-class-in-newport-wales) has its own page. Exam guides: [WJEC GCSE Computer Science](/wjec-gcse-computer-science-help-wales) and [WJEC GCSE Digital Technology](/wjec-gcse-digital-technology-help-wales).

The Torfaen project

## Seashell or coiled rope?

Divide neighbouring measurements, or subtract them, and see which answer stays steady.

Draw a line out from the centre of a spiral and measure how far each turn is from the middle. For an Archimedean spiral, like a rope coiled on a deck, each turn is a fixed distance further out, so the differences between measurements stay the same. For a logarithmic spiral, the shape many shells approximate, each turn is a fixed multiple of the last, so the ratios stay the same. The learner codes both tests in Python and asks which list varies less. The measurements below are invented for the lesson, not taken from the grotto.

| Spiral | Measurements (mm) | Ratios between turns | Gaps between turns |
| --- | --- | --- | --- |
| Shell-like | 4.0, 6.1, 9.2, 13.9, 21.0, 31.4 | Steady, 1.50 to 1.53 | Growing, 2.1 to 10.4 mm |
| Coiled rope | 4.0, 8.1, 11.9, 16.0, 20.1, 23.9 | Falling, 2.03 to 1.19 | Steady, 3.8 to 4.1 mm |
| Program verdict |   | Shell: logarithmic | Rope: Archimedean |

To make the verdict fair, the program divides each list's spread by its average, so a list of ratios near 1.5 and a list of gaps near 4 millimetres can be compared. For the shell, the ratios vary by under 1 per cent while the gaps vary by more than 50. For the rope it is the other way round. The shell grows by about 1.51 times every turn, so it needs fewer than eight turns to grow from 4 millimetres to 100; the rope, adding 4 millimetres each time, needs 24.

Then the learner draws the shell spiral with a turtle, using the rule that radius equals a starting size times e raised to a growth rate times the angle. One more fact falls out: a logarithmic spiral cuts every line from its centre at the same angle, here about 86 degrees, which is why it looks the same at every size. And there is a trap. The formula needs the angle in radians. Feed it 360 for one turn instead of two pi, and the program says the spiral grows eighteen billion times in a single turn.

### Ages 8 to 11

Draw two spirals with Scratch's pen, one that adds a step each turn and one that multiplies.

### Ages 11 to 15

Compute ratios and gaps in Python and write the rule that decides which spiral you have.

### Ages 15 and up

Derive the constant angle, count turns with logarithms, and test the degrees-radians slip.

### A real grotto, invented shells

The grotto's story comes from Cadw's record. Our measurements are made up, and real shells only approximate a perfect logarithmic spiral, so the table teaches the test rather than describing any shell on the walls.

Why the Shell Grotto

## A room made of shells

What Cadw's record of the grotto says.

| From the record | Detail |
| --- | --- |
| Probable origin | Built in the 1830s for Capel Hanbury Leigh, owner of Pontypool Park, to employ 85 estate workers |
| Decoration | Said to be designed, and partly made, by Molly Mackworth, his first wife |
| Use | Picnics for the Hanbury Leigh family |
| Inside | Walls and vaulted ceiling covered in shells, quartz, spar and mica, on six slender columns |
| Details | A pink conch finial on each roof section; a floor of teeth and bone |
| Significance | Probably the most important surviving grotto of its kind in Wales |

Deciding which pattern fits a set of measurements is everyday work in science and software. Engineers ask whether costs grow by a fixed amount or a fixed percentage, biologists whether growth is steady or compounding, and programmers whether an algorithm slows by adding time or multiplying it. A Torfaen learner who has told a shell from a rope with two lines of arithmetic has the core of that skill.

Modern Age Coders has no link to Cadw. The grotto record is Cadw's; the spiral measurements and code, including any mistakes, are ours.

The route through school

## From pen drawings to logarithms

These bands are a guide only; the trial lesson finds the true level.

Years 1 to 4

### Patterns

Blocks that repeat, turn and grow shapes on screen.

[Coding for Kids](/courses/kids-coding-blocks-masterclass)[Scratch Coding for Kids](/courses/scratch-programming-complete-course)Years 5 to 8

### Sequences

Python with adding and multiplying sequences.

[Python and AI for Kids](/courses/python-ai-kids-masterclass)[Maths Through Coding](/courses/maths-through-coding)Years 9 to 13

### Exponentials

Powers, exponentials and logs alongside WJEC GCSE and A level.

[High School Mathematics](/courses/complete-high-school-mathematics-mastery)[Python for Teens](/courses/python-complete-masterclass-teens)Adults

### Starting Python

Python for adults, from zero to confident.

[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)[Data Analysis Course](/courses/data-analysis-mastery-course-college)AI and patterns

## An AI can call a spiral golden. Can it show you the ratios?

A confident label is not the same as a test.

Chatbots often describe shells as golden spirals or Fibonacci patterns, because that story appears so often online. Few answers check the actual growth ratio, and many real shells do not match it.

A Torfaen learner who has computed ratios and gaps from measurements knows to ask for the test behind any label, from a website, a textbook or an AI.

Asking for the numbers behind a neat story is a habit a Torfaen teenager can build by coding through 2026. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

How it works

## From Blaenavon to Ponthir, lessons at home

Anywhere in the county borough with internet can join.

### Own code, own keyboard

The learner writes the program; the teacher sees the shared screen and helps by asking the next question.

### Welsh years used

An Abersychan Year 4 or a Pontypool Year 13 is placed by Welsh school year and progression step, and exams keep their WJEC names. Classes are taught in English.

### No-cost start

Your first lesson is free and ends with plain advice.

### Grouped by level

Fifteen to twenty students at one stage, from all over the UK.

### Term-time

Two sessions a week during term, none in the holidays.

### Steady through clock changes

Your lesson keeps its British time in March and October; our teachers do the adjusting.

Why online groups

A small town rarely has five learners at one level free at one time. Online, a Ponthir or Blaenavon pupil joins peers at exactly their stage.

Fees

## Torfaen fees

Cwmbrân and Blaenavon pay the same, as do learners in every country we teach outside India.

First class**USD 0**

A full lesson at no cost, then honest advice.

Group tuition**USD 100**

About eight lessons each month with five to ten others.

Private tuition**USD 150**

About eight lessons each month with your own tutor.

Fees are charged in US dollars only; there is no sterling price. Nothing is billed until the trial agrees a course and a weekly time, and holidays, missed lessons and switching formats are covered on the pricing page.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Torfaen%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)Reviews

## Family ratings on Google

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

## Book a free Torfaen lesson

Tell us the learner's age or school year and a favourite topic. The trial could be a Scratch spiral, a first Python program, or the Shell Grotto test.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Torfaen one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Torfaen%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)

Submitted details are used for placement and follow-up.

FAQ

## Torfaen questions

The county borough, the grotto project and the details.

### What is the population of Torfaen?

The 2021 census counted 92,276 usual residents in Torfaen.

### What is the largest town in Torfaen?

Cwmbrân, with 47,090 residents in its ONS 2021 built-up area, then Pontypool with 29,070.

### What is the Shell Grotto project?

Learners test invented spiral measurements in Python: steady ratios mean a logarithmic spiral like a shell, steady gaps mean an Archimedean spiral like a coiled rope.

### What is a logarithmic spiral?

A spiral in which each turn is a fixed multiple of the previous one, so it keeps the same shape as it grows.

### Who decorated the Shell Grotto?

Cadw's record says the decoration is supposed to have been designed, and partly made, by Molly Mackworth.

### Are lessons in person in Torfaen?

No, every lesson is live online, joined from home.

### Do you help with WJEC GCSE subjects?

Yes, maths and computing. We teach for understanding and never guarantee grades.

### Which ages can join?

From 6 to 67, from first coding blocks to Python for adults.

### How much are classes?

Free for the first lesson, then USD 100 a month for a group or USD 150 a month one-to-one.

### Do classes run in the holidays?

They pause. Tell us your school holiday weeks and we plan round them.

Near Torfaen

## Other South East Wales pages

[Newport](/best-coding-class-in-newport-wales) has a city page, [Monmouthshire](/coding-classes-in-monmouthshire) finds the finest detail a telescope can show, and [Blaenau Gwent](/coding-classes-in-blaenau-gwent) explains why cameras flatten a round street. All Welsh county pages are listed on our [Wales](/coding-and-ai-classes-in-wales) page, and the [UK hub](/coding-classes-in-united-kingdom) covers everywhere else.

Book the free class[Book a priority demo](/book-demo)[Contact us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Torfaen%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/coding-classes-in-torfaen*
