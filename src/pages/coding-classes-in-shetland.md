---
title: "Coding Classes in the Shetland Islands | Online, Ages 6 to 67"
description: "Live online coding, Python and maths classes across the Shetland Islands, from Lerwick, Scalloway and Brae to Whalsay, Bressay, Unst, Yell and Fair Isle."
canonical: https://learn.modernagecoders.com/coding-classes-in-shetland
source: src/pages/coding-classes-in-shetland.html
---
> Live online coding, Python and maths classes across the Shetland Islands, from Lerwick, Scalloway and Brae to Whalsay, Bressay, Unst, Yell and Fair Isle.

Skip to contentCourses for Shetland

## Where Shetland learners begin

A P3 in Lerwick who loves maps, a P6 in Scalloway ready for real code, an S4 on Whalsay working towards National 5, and an adult in Brae who needs spreadsheets to behave. Every one of them starts with a free trial.

[![Coding for Kids course thumbnail](/images/kids-coding.webp)Ages 6 to 12Coding for KidsBlock coding with compass directions, clocks and treasure-map games.See the syllabus](/courses/kids-coding-blocks-masterclass)[![Maths Through Coding course thumbnail](/images/maths-through-coding.webp)Ages 10 to 15Maths Through CodingAngles, time and conversions between units, worked out in code.See the syllabus](/courses/maths-through-coding)[![High School Mathematics course thumbnail](/images/high-school-maths.webp)Ages 14 to 18High School MathematicsSecondary maths in depth, from trigonometry to the geometry of the Earth.See the syllabus](/courses/complete-high-school-mathematics-mastery)[![Python Masterclass course thumbnail](/images/python-college.webp)AdultsPython MasterclassPython for adults from zero, including clean handling of numbers and units.See the syllabus](/courses/python-programming-masterclass-zero-to-advanced-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Shetland in figures

## About 22,900 people at 60 degrees north

The islands-wide totals are rounded first results from the 2022 census by National Records of Scotland. Settlement sizes are separate NRS estimates for mid-2020.

| Locality | Residents |
| --- | --- |
| Lerwick | 6,760 |
| Scalloway | 1,170 |
| Brae | 750 |

Shetland has 15.6 residents per square kilometre, under a quarter of the Scottish 69.8. Our sums of the census age bands give 16.6 per cent of islanders under 15, above Scotland's 15.3, and 21.8 per cent aged 65 or over, against 20.1. Shetland Islands Council sets school terms; we have not looked them up, so each family tells us its own holidays.

### Other island pages and exams

See [Orkney](/coding-classes-in-orkney) and [the Western Isles](/coding-classes-in-na-h-eileanan-siar). For qualifications: [Higher Maths](/higher-maths-tuition-online) and [National 5 Computing Science](/national-5-computing-science-help).

The Shetland project

## Sixty minutes, sixty seconds, one sneaky carry

Base 60 for angles, and the bug hidden in the last digit.

A degree splits into 60 minutes and a minute into 60 seconds, exactly like hours on a clock. To convert 60.139 degrees, keep the whole 60, multiply the leftover 0.139 by 60 to get 8.34 minutes, keep the 8, and multiply the leftover 0.34 by 60 to get 20.4 seconds. So Lerwick's station sits at 60 degrees, 8 minutes, 20.4 seconds north, and its longitude of 1.183 degrees becomes 1 degree, 10 minutes, 58.8 seconds west. The learner codes those steps in Python in a few lines and they seem to work.

| Input | Step-by-step then round | Round once, then split |
| --- | --- | --- |
| 60.139 | 60 deg 8 min 20.4 s | 60 deg 8 min 20.4 s |
| 1.183 | 1 deg 10 min 58.8 s | 1 deg 10 min 58.8 s |
| 59.99999 | 59 deg 59 min 60.0 s | 60 deg 0 min 0.0 s |
| A million values from 60 to 61 degrees | 828 print 60.0 seconds | None |

The bug appears when the seconds round up to 60. Rounding 59.964 seconds to one decimal gives 60.0, but by then the program has already fixed the minutes, so nothing carries over. Among a million evenly spaced values between 60 and 61 degrees, the step-by-step method prints an impossible 60.0 seconds 828 times, and 8,328 times if it rounds to whole seconds. The cure is to convert everything to seconds first, round once, and only then split into degrees, minutes and seconds with whole-number division. The learner also meets a quieter surprise: the computer stores 60.139 as 60.139000000000002899, so 0.139 times 60 comes out as 8.340000000000174, a reminder that decimals in binary are rarely exact.

Next, distance. Lines of latitude are evenly spaced, so a minute of latitude is always about 1.85 kilometres, roughly a nautical mile. Lines of longitude squeeze together towards the pole. On a spherical Earth, a degree of longitude is 111.2 kilometres at the equator but only 55.4 km at Lerwick, because the cosine of 60 degrees is one half. Finally the learner converts the file's own grid reference, 445300 east and 1139700 north, into latitude and longitude with the Ordnance Survey's published formulas, and lands about 94 metres from the stated 60.139, which is inside the rounding: a third decimal place of latitude spans about 111 metres.

### Ages 8 to 11

Convert minutes to hours and seconds to minutes in a Scratch quiz, then try the same with degrees on a map.

### Ages 11 to 15

Write the step-by-step converter in Python, feed it 59.99999, and fix the 60-second bug.

### Ages 15 and up

Test the converter on a million values, compute longitude spacing with cosines, and convert an OS grid reference yourself.

### Real station, our calculations

The coordinates come from the Met Office Lerwick data file. The conversions, the bug counts and the distances come from our own program, using a spherical Earth of radius 6,371 km for the distance figures.

Why Lerwick

## A weather record from 1930

What the Met Office file states about its station.

| File detail | What it says |
| --- | --- |
| Grid position | 445300 east, 1139700 north |
| Latitude and longitude | 60.139 and -1.183 |
| Height | 82 metres above mean sea level |
| First month in the file | December 1930 |
| Measurements | Maximum and minimum temperature, air frost days, rain and sunshine by month |

Conversions between coordinate formats run inside every phone map, ship chart plotter, drone and delivery app. When they fail, a location can be shown with 60 seconds, a point can be placed in the sea, or a route can drift by a kilometre. A Shetland pupil who has chased down the carry bug and measured a degree of longitude at home understands exactly why careful code matters for navigation.

We have no link with the Met Office, the Ordnance Survey or Shetland Islands Council. Their published figures are theirs; the converter, the tests and any mistakes are ours.

Learning path

## From clock sums to coordinates

Stages are a starting point only; the free trial settles the level.

P1 to P4

### Clocks and compasses

Block coding with directions, time and simple map games.

[Coding for Kids](/courses/kids-coding-blocks-masterclass)[Scratch Coding for Kids](/courses/scratch-programming-complete-course)P5 to S2

### Units in Python

Typed Python converting times, angles and distances.

[Maths Through Coding](/courses/maths-through-coding)[Python and AI for Kids](/courses/python-ai-kids-masterclass)S3 to S6

### Trigonometry and testing

Cosines, coordinates and thorough testing beside National 5, Higher and Advanced Higher courses.

[High School Mathematics](/courses/complete-high-school-mathematics-mastery)[Python for Teens](/courses/python-complete-masterclass-teens)Adults

### Reliable numbers

Python for adults, with careful rounding, units and data.

[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)[Data Analysis Course](/courses/data-analysis-mastery-course-college)AI and conversions

## An AI can convert coordinates in seconds. Will it ever print 60 seconds?

The bug only shows in rare inputs, which is exactly where casual testing never looks.

Ask a chatbot for a function that turns decimal degrees into degrees, minutes and seconds and the step-by-step version is a common answer. It works for every example you are likely to try, and prints 60.0 seconds for a fraction of real inputs that no one checks.

A Shetland learner who has tested a million values knows how to catch rare-case bugs in generated code. That kind of testing is what turns AI output into something safe to rely on.

Catching the bug that appears once in a thousand inputs is why a Shetland teenager should keep learning to code in 2026. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

Island lessons

## From Sumburgh to Unst, lessons by video

Whether on the Mainland or a smaller isle, learners join from home.

### Any isle with internet

Whalsay, Yell, Bressay or Lerwick itself: a laptop and a connection that carries video are enough.

### Scottish stages in class

Teachers use P and S stages and the National 5, Higher and Advanced Higher names Shetland pupils know. Lessons are in English.

### A free trial first

One full lesson costs nothing, and afterwards we say plainly what would suit.

### Classmates at your level

Groups of fifteen to twenty learners who share a stage, joining from all over.

### Lessons in term

Twice a week in term, with the school holidays off.

### UK time, held steady

When the clocks change, your lesson stays at its UK hour; our teachers on India time move instead.

Why island groups are wide

On a single isle there may be nobody else at your stage. Grouping by stage across a wide pool gives a learner on Foula or Fair Isle a proper class.

Fees

## Fees in Shetland

Lerwick or Unst, the fee is the same, the rate we charge in every country outside India.

First class**USD 0**

A full free lesson, then an honest recommendation.

Group tuition**USD 100**

About eight lessons a month in a group of fifteen to twenty.

Private tuition**USD 150**

About eight lessons a month, one learner and one teacher.

Fees are in US dollars only, with no sterling list. Once the free trial has settled a course and a weekly time, billing begins; our pricing page explains holidays, absences and moving between group and private lessons.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Shetland%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)Reviews

## What people say on Google

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

## Book a free Shetland lesson

Say which isle you are on, the learner's age or stage, and what interests them. We might start with a Scratch game, a first Python program, or the coordinate converter on this page.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Shetland Islands one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Shetland%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)

Submitted details are used for placement and follow-up.

FAQ

## Shetland questions

The islands, the Lerwick project and practical matters.

### How many people live in Shetland?

The 2022 census counted about 22,900 residents in Shetland, living in around 10,600 households, as rounded by NRS.

### What are the main settlements in Shetland?

NRS mid-2020 estimates list Lerwick at 6,760, Scalloway at 1,170 and Brae at 750.

### What is the Lerwick project?

Learners convert the Lerwick station's 60.139 degrees into degrees, minutes and seconds in Python, find the rounding bug that prints 60 seconds, and work out that a degree of longitude there is about 55.4 km.

### Why is a degree of longitude shorter in Shetland?

Lines of longitude meet at the poles, so they get closer together as you go north. At about 60 degrees north the gap is roughly half what it is at the equator.

### Where is the Lerwick weather station?

The Met Office data file gives latitude 60.139 and longitude -1.183, at 82 metres above mean sea level.

### Can learners on smaller isles join?

Yes. All lessons are online, so anyone with a steady internet connection can take part.

### Do you teach Higher Maths?

Yes, and National 5 Maths and Computing Science. We aim for understanding and do not promise grades.

### What ages do you teach?

Six to 67. Children start with blocks, secondary pupils move into Python and exam maths, and adults begin Python wherever suits them.

### How much do lessons cost?

The trial lesson is free; afterwards a group place is USD 100 a month and one-to-one USD 150 a month.

### Do lessons stop for school holidays?

Yes. Pass on your school's holiday weeks and we leave them free.

More island pages

## Beyond Shetland

[Orkney](/coding-classes-in-orkney) shares out dyke repairs with a matching algorithm and [the Western Isles](/coding-classes-in-na-h-eileanan-siar) compare sunshine with daylight. [The Highlands](/coding-classes-in-highland) page draws arches with curves. Every council is on our [Scotland](/coding-and-ai-classes-in-scotland) page, and the [UK hub](/coding-classes-in-united-kingdom) covers the rest.

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Shetland%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/coding-classes-in-shetland*
