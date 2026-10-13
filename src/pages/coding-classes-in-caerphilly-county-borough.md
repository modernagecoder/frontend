---
title: "Coding Classes in Caerphilly | Live Online, Ages 6 to 67"
description: "Live online coding, Python and maths classes across Caerphilly county borough, from Caerphilly, Risca and Blackwood to Ystrad Mynach, Bargod and Rhymney."
canonical: https://learn.modernagecoders.com/coding-classes-in-caerphilly-county-borough
source: src/pages/coding-classes-in-caerphilly-county-borough.html
---
> Live online coding, Python and maths classes across Caerphilly county borough, from Caerphilly, Risca and Blackwood to Ystrad Mynach, Bargod and Rhymney.

Skip to contentCourses for Caerphilly

## Starting points for Caerphilly learners

Think of a seven-year-old in Risca who counts everything, a Blackwood Year 6 eager to type code, an Ystrad Mynach teenager beginning WJEC GCSE Computer Science, and a Caerphilly adult who checks spreadsheets for a living. Each of them would open with a free lesson.

[![Coding for Kids course thumbnail](/images/kids-coding.webp)Ages 6 to 12Coding for KidsBlock coding with measuring, converting and checking games.See the syllabus](/courses/kids-coding-blocks-masterclass)[![Maths Through Coding course thumbnail](/images/maths-through-coding.webp)Ages 10 to 15Maths Through CodingUnits, ratios and percentages practised by writing code.See the syllabus](/courses/maths-through-coding)[![Python for Teens course thumbnail](/images/python-teens.webp)Ages 12 to 18Python for TeensComplete Python for teenagers, including text processing and tests.See the syllabus](/courses/python-complete-masterclass-teens)[![Data Analysis Course course thumbnail](/images/data-analysis-college.webp)AdultsData Analysis CourseData analysis for adults who need to check figures they did not produce.See the syllabus](/courses/data-analysis-mastery-course-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)The county borough in figures

## 175,952 people in Caerphilly county borough

ONS counted 175,952 usual residents at the 2021 census, a figure we read through Nomis. Figures for individual towns are the matching ONS built-up areas.

| Town | Residents | Town | Residents |
| --- | --- | --- | --- |
| Caerphilly | 33,105 | Bargod | 8,035 |
| Risca | 15,195 | Newbridge | 7,585 |
| Blackwood | 12,620 | Bedwas | 6,460 |
| Ystrad Mynach | 11,855 | Oakdale | 6,130 |
| Pontllanfraith | 9,360 | Abertridwr and Senghenydd | 5,640 |

Beyond the table come Abercarn, Rhymney, Aberbargoed, Llanbradach and New Tredegar, among others; our own output-area sums agree with every published figure to within five people. Pupils here follow the Curriculum for Wales before WJEC exam courses take over at GCSE and A level. Caerphilly County Borough Council sets the school holidays; we have not read them and plan breaks from each family's own dates.

### Cardiff and WJEC exams

The capital has its own page at [Cardiff](/best-coding-class-in-cardiff). For exam help, see [WJEC GCSE Computer Science](/wjec-gcse-computer-science-help-wales) and [WJEC GCSE Digital Technology](/wjec-gcse-digital-technology-help-wales).

The Caerphilly project

## A program that checks the brackets

Find every pair of figures, convert, compare, flag.

The learner saves the text of Cadw's record and writes a regular expression, a compact search pattern, that picks out every place where a number with an imperial unit is followed by a metric figure in brackets: inches with metres, feet with metres, tons with tonnes. For each pair, the program converts the imperial figure itself, one inch being 0.0254 metres and one foot 0.3048, and compares the result with the bracketed number. Anything more than 3 per cent apart is flagged for a human to look at. The program finds six pairs.

| Pair in the record | Our conversion | Difference | Verdict |
| --- | --- | --- | --- |
| 42" (1.4m) | 1.067 m | +31.2 per cent | Flagged |
| 6' (1.82m) | 1.829 m | -0.5 per cent | Agrees |
| 24' (7.3m) | 7.315 m | -0.2 per cent | Agrees |
| 28" (711mm) | 0.711 m | 0.0 per cent | Agrees |
| 6000 tons (6120 tonnes) | 6,096 long tons or 5,443 short tons | Factor 1.020 | Definition question |
| 3000 tons (3060 tonnes) | 3,048 long tons or 2,722 short tons | Factor 1.020 | Definition question |

Four pairs agree to well within rounding. The cylinder figure does not: 42 inches works out at 1.067 metres, while the bracket says 1.4, almost a third more. The program cannot say which half is the slip, only that the two cannot both be right, which is exactly what a good checker should report. The tons are subtler. Britain's traditional long ton is about 1.016 tonnes and the American short ton about 0.907; the record's conversions multiply by 1.020, close to the long ton but not exact. Nothing is necessarily wrong here: rounded figures such as c 6,000 were converted roughly. But it shows why a program handling tons must ask which ton is meant.

The learner then makes the checker sturdier: it must cope with commas in numbers, with mm as well as m, and with a pair written the other way round. Each new rule gets a small test of its own, so that fixing one case never quietly breaks another.

### Ages 8 to 11

Measure things in inches and centimetres, write both down, and build a Scratch quiz that spots a wrong pair.

### Ages 11 to 15

Write a Python function that converts inches and feet to metres and checks a list of pairs by hand-entered values.

### Ages 15 and up

Use regular expressions to extract pairs from real text, set a tolerance, add tests, and handle the long ton and short ton.

### Checking, not blaming

The figures are quoted as they appear in Cadw's record, which itself quotes an earlier description. Our program only reports that one pair is inconsistent; we do not claim which number is the mistake, or say anything about the engine beyond the record.

Why the Elliot Colliery

## A winding engine from 1891

What Cadw's record describes.

| Record detail | What it says |
| --- | --- |
| Pits | East and West Elliot pits, developed during the 1880s |
| Engine | By Thornewill and Warham of Burton on Trent, installed 1891 |
| Water | Used to lift about 6,000 tons of water a day soon after coal production began |
| Upgrade | High pressure boilers and two extra cylinders added in 1904, about 2,000 horsepower |
| Drum | A lighter semi-spiral drum known as a diabolo, with a reverse taper |
| Later life | The pit closed in 1967; the building became a museum in the mid 1990s |

Automatic consistency checks run through modern software everywhere: spreadsheets that flag totals, engineering tools that insist on units, and data pipelines that refuse figures that cannot both be true. Mixed units have caused expensive failures in engineering, which is why many teams now make the computer check every conversion. A Caerphilly pupil who has built one has a genuinely professional habit.

We have no connection with Cadw or Caerphilly County Borough Council. The record's text belongs to Cadw; the checker, its conversions and any errors belong to us.

Learning path

## From rulers to regular expressions

Year bands are a starting guess; the trial lesson confirms it.

Years 1 to 4

### Measuring games

Block coding with lengths, weights and simple comparisons.

[Coding for Kids](/courses/kids-coding-blocks-masterclass)[Scratch Coding for Kids](/courses/scratch-programming-complete-course)Years 5 to 8

### Units in code

Typed Python converting units and checking answers.

[Maths Through Coding](/courses/maths-through-coding)[Python and AI for Kids](/courses/python-ai-kids-masterclass)Years 9 to 13

### Text and tests

String processing, patterns and testing alongside WJEC GCSE and A level courses.

[Python for Teens](/courses/python-complete-masterclass-teens)[Problem Solving for Teens](/courses/problem-solving-dsa-masterclass-teens)Adults

### Checking data

Python and data analysis for adults who validate figures at work.

[Data Analysis Course](/courses/data-analysis-mastery-course-college)[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)AI and conversions

## An AI can convert units in seconds. Will it notice a pair that does not match?

Reading past an inconsistency is easier than flagging it.

Give a chatbot a paragraph full of paired figures and ask for a summary, and it will usually repeat them faithfully, including a pair that cannot be right. Unless asked to check, it rarely stops to recompute, and it may not ask which ton was meant.

A Caerphilly learner who has written a checker knows to make the computer verify, not just repeat. That discipline is exactly what AI-generated summaries of technical material need.

Teenagers in Caerphilly should still learn to code in 2026 so they can make the machine check numbers instead of just repeating them. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

How lessons work

## From Rhymney to Risca, lessons at home

Towns throughout the county borough join by video in the same way.

### Learners write the code

Each program is typed by the pupil while the teacher watches the shared screen and nudges when needed.

### Matched to Welsh schooling

Whether it is Year 5 in Oakdale or Year 12 in Bargod, we look at the year and the Curriculum for Wales, and exam work follows the WJEC specifications. Lessons are in English.

### Free trial lesson

A full lesson without charge, then an honest recommendation.

### Classes at one level

Fifteen to twenty learners at the same level, from many places.

### Term-time timetable

Two lessons a week in term, with holidays off.

### Stays at UK time

Clock changes do not move your lesson; our teachers on India time adjust instead.

Why groups span several towns

Five learners at one level, all free at the same hour, rarely live in one town. Grouping by level gives a pupil in Bedwas or Abercarn a class that fits.

Fees

## Fees in Caerphilly county borough

Blackwood or Caerphilly, the fee is the same, as it is in every country we teach outside India.

First class**USD 0**

A complete trial lesson, free, followed by advice.

Group tuition**USD 100**

About eight lessons a month in a group of fifteen to twenty.

Private tuition**USD 150**

About eight lessons a month, one-to-one.

All fees are in US dollars, with no sterling price list. We start billing only after the trial has fixed a course and a weekly time; the pricing page explains holidays, absences and switching formats.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Caerphilly%20county%20borough%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)Reviews

## Google reviews from families and learners

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

## Book a free Caerphilly lesson

Send the learner's age or school year and an interest, and we will plan the trial around it: a Scratch game, a Python program, or the unit checker on this page.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Caerphilly county borough one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Caerphilly%20county%20borough%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)

Submitted details are used for placement and follow-up.

FAQ

## Caerphilly questions

The county borough, the colliery project and practical points.

### How many people live in Caerphilly county borough?

The 2021 census counted 175,952 usual residents.

### What are the largest towns in Caerphilly county borough?

ONS 2021 built-up areas: Caerphilly 33,105, Risca 15,195, Blackwood 12,620 and Ystrad Mynach 11,855.

### What is the Elliot Colliery project?

Learners write a Python checker that finds every imperial and metric pair in Cadw's record, converts each one, and flags a cylinder size where 42 inches is bracketed as 1.4 m, though 42 inches is 1.07 m.

### What is the difference between a ton and a tonne?

A tonne is 1,000 kilograms. The British long ton is about 1,016 kg and the American short ton about 907 kg, so tons must always be defined.

### When was the Elliot Colliery winding engine installed?

In 1891, according to Cadw, which lists the engine house and engine at Grade II*.

### Are lessons held in Caerphilly?

No building is involved: a learner in Rhymney and one in Risca each log in from home.

### Is WJEC GCSE Computer Science covered?

It is, as is GCSE maths in Wales. Grades depend on the learner, so we promise understanding, not results.

### What ages can learn?

We teach every age between six and 67. Younger children build with blocks, teenagers move on to Python and exam preparation, and adults usually want Python with real data.

### What does it cost?

Lesson one costs nothing. From then on it is USD 100 per month for a group place or USD 150 per month for individual tuition.

### Do lessons stop in the school holidays?

Yes. Send us your school's holiday weeks and we leave them free.

Nearby pages

## More South Wales pages

[Bridgend](/coding-classes-in-bridgend) models a water-balance lift, [Blaenau Gwent](/coding-classes-in-blaenau-gwent) photographs a town clock with a pinhole camera, and [Cardiff](/best-coding-class-in-cardiff) has a city page. Our [Wales](/coding-and-ai-classes-in-wales) page links each Welsh area as it is published, and the [UK hub](/coding-classes-in-united-kingdom) covers the rest.

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Caerphilly%20county%20borough%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/coding-classes-in-caerphilly-county-borough*
