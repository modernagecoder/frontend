---
title: "Coding Classes in Causeway Coast and Glens | Ages 6 to 67"
description: "Live online coding, Python and maths classes across Causeway Coast and Glens: Coleraine, Limavady, Ballymoney, Portstewart, Portrush and Ballycastle."
canonical: https://learn.modernagecoders.com/coding-classes-in-causeway-coast-and-glens
source: src/pages/coding-classes-in-causeway-coast-and-glens.html
---
> Live online coding, Python and maths classes across Causeway Coast and Glens: Coleraine, Limavady, Ballymoney, Portstewart, Portrush and Ballycastle.

Skip to contentCourses for Causeway Coast and Glens

## Starting courses along the coast and glens

A P3 pupil in Portrush who flies kites, a Year 9 in Limavady starting Python, a Year 12 in Coleraine working through CCEA GCSE maths, and a Ballycastle adult learning to program. Each one begins with a free lesson.

[![Scratch Coding for Kids course thumbnail](/images/scratch-kids.webp)Ages 6 to 12Scratch Coding for KidsScratch projects with wind, kites and moving sprites.See the syllabus](/courses/scratch-programming-complete-course)[![Maths Through Coding course thumbnail](/images/maths-through-coding.webp)Ages 10 to 15Maths Through CodingAngles, triangles and directions brought to life in code.See the syllabus](/courses/maths-through-coding)[![High School Mathematics course thumbnail](/images/high-school-maths.webp)Ages 14 to 18High School MathematicsComplete secondary maths, including trigonometry and vectors.See the syllabus](/courses/complete-high-school-mathematics-mastery)[![Python Masterclass course thumbnail](/images/python-college.webp)AdultsPython MasterclassPython for adults, from first lines to useful tools.See the syllabus](/courses/python-programming-masterclass-zero-to-advanced-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)The district in census numbers

## 141,746 residents on the coast and in the glens

NISRA's Census 2021 table MS-A01 reports the district's usual residents, plus each of its seven district electoral areas. We show those exactly as published and do not add them together.

| Area | Usual residents | Area | Usual residents |
| --- | --- | --- | --- |
| Ballymoney | 24,519 | Coleraine | 23,625 |
| Bann | 17,535 | Limavady | 16,230 |
| Benbradagh | 17,818 | The Glens | 17,477 |
| Causeway | 24,542 |   |   |

For settlements, NISRA gives approximate figures: Coleraine 24,483, Limavady 11,729, Ballymoney 11,048, Portstewart 7,854, Portrush 6,150, Ballycastle 5,628, Dungiven 3,346, Ballykelly 2,029 and Kilrea 1,673. Local schools teach the Northern Ireland Curriculum, which runs from P1 up to Year 14 and ends in CCEA GCSE and A level exams. We have not read school holiday calendars, so families let us know theirs.

### Derry~Londonderry and CCEA help

Our [Derry~Londonderry](/best-coding-class-in-derry-londonderry) page covers the city. For exams, see [CCEA GCSE maths](/ccea-gcse-maths-help) and [CCEA A level Software Systems Development](/ccea-a-level-software-systems-development-help).

The Causeway Coast and Glens project

## One runway, two or three?

Split the wind into a part along the runway and a part across it.

A wind blowing at an angle to a runway can be split into two parts. The part along the runway, wind speed times the cosine of the angle, is a headwind that helps; the part across it, wind speed times the sine, is a crosswind that pushes sideways. The learner writes a function that, for any wind, tries every runway end and picks the one with the least crosswind, breaking ties by the biggest headwind. Then it sweeps the wind round all 360 degrees for three layouts. Wind speeds and the 10 knot crosswind limit are our own round numbers; real limits depend on the aircraft.

| Layout | Worst crosswind | Directions within 10 kn, 20 kn wind | Directions within 10 kn, 30 kn wind |
| --- | --- | --- | --- |
| One runway | The full wind | One third | 21.6% |
| Two runways at 90 degrees | 0.71 times the wind | Two thirds | 43.3% |
| Three runways at 60 degrees | Half the wind | Every direction | 64.9% |

The geometry is tidy. Three runways give six runway ends, 60 degrees apart, so the wind is never more than 30 degrees off one of them, and the sine of 30 degrees is exactly one half. With a single runway the wind can blow straight across it, putting the whole wind sideways. Take a 20 knot wind from 040 degrees: on a single runway facing 000 the crosswind is 12.9 knots, over our limit, but in the three-runway layout the runway facing 060 cuts it to 6.8 knots with a stronger headwind of 18.8. Stronger winds eat into every layout, which is why the last column drops.

The code has a trap that catches many beginners. Python's sine function expects radians, not degrees. Pass it 30 and it returns about minus 0.99 instead of 0.5, and every crosswind is nonsense, some even negative. Learners write a test that the crosswind for a wind straight down the runway is zero and for a wind straight across is the full wind speed, and the slip shows up at once.

### Ages 8 to 11

Blow across a paper runway with a fan at different angles, then build a windsock game in Scratch.

### Ages 11 to 15

Code sine and cosine parts of the wind in Python and choose a runway for a handful of winds.

### Ages 15 and up

Sweep all directions, derive the one-half result, and write the tests that catch the radians slip.

### Record layout, our wind

The runway angles and history come from the Historic Environment Division's record. Wind speeds, directions and the limit are ours, so the table shows why the layout works, not how Ballykelly was flown on any real day.

Why Ballykelly

## An airfield that kept growing

What the defence heritage record says.

| Record detail | What it says |
| --- | --- |
| Opened | Start of June 1941, with an RAF Coastal Command Development Unit |
| Wartime role | Anti-submarine patrols and air-sea rescue flights |
| Runways | Three, the main one in line with the prevailing wind, the others at sixty degrees |
| Extended | In 1943 for B-24 Liberators; one runway from 1,400 m to 1,940 m, later 2,280 m |
| After the war | Shackleton maritime patrol aircraft; Army control from 2 June 1972 as Shackleton Barracks |
| Closed | 2008 |

Splitting a quantity into parts along and across a direction is one of the most used ideas in engineering and computing. Game physics resolves every collision this way, drones correct for wind this way, and robots and phone sensors combine forces and tilts the same way. A Causeway Coast and Glens learner who has split the wind into headwind and crosswind has learned the move behind all of them.

Modern Age Coders is independent of NISRA and the Department for Communities. The records are theirs; the crosswind model, and any mistake in it, is ours.

Stages through school

## From windsocks to vectors

Treat the stages as a guide; the free lesson finds the right level.

P3 to P7

### Direction games

Block coding with turning, angles and simple movement.

[Scratch Coding for Kids](/courses/scratch-programming-complete-course)[Coding for Kids](/courses/kids-coding-blocks-masterclass)Years 8 to 10

### Angles in code

Python with angles, triangles and loops over directions.

[Maths Through Coding](/courses/maths-through-coding)[Python and AI for Kids](/courses/python-ai-kids-masterclass)Years 11 to 14

### Trigonometry and vectors

Sine, cosine and vectors, with CCEA GCSE and A level in view.

[High School Mathematics](/courses/complete-high-school-mathematics-mastery)[Python for Teens](/courses/python-complete-masterclass-teens)Adults

### Python for adults

Python from the first program to practical scripts.

[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)[Data Analysis Course](/courses/data-analysis-mastery-course-college)AI and units

## An AI can write a crosswind calculator. Will it test the radians?

The formula is easy; the unit trap is where code goes wrong.

Ask a chatbot for a crosswind function and the formula will usually be right. Whether it converts degrees to radians, and whether anyone tests the answer against a case you already know, is another matter.

A learner who has checked a function against a wind straight down and straight across the runway knows to test any code, human or machine written, with cases where the answer is obvious.

Checking code against answers you already know is a strong reason for a Causeway Coast and Glens teenager to keep coding in 2026. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

Practical details

## From Ballycastle to Limavady, lessons at home

Coast, glen or town, a laptop and a connection will do.

### Writing their own code

Learners type every program; the tutor follows on the shared screen and prompts with questions instead of answers.

### Northern Ireland stages

A Kilrea P5 or a Portstewart Year 12 joins at the level that suits their key stage, and we refer to exams by their CCEA titles. All teaching is in English.

### Free first lesson

A complete lesson at no charge, finishing with clear advice.

### Classes by level

Fifteen to twenty learners at one stage, from across the UK.

### Term time

Two lessons each week in term, holidays kept free.

### Same hour all year

Clock changes do not move your lesson; teachers in India adjust around the local time.

Why a spread-out district suits online

Rural glens and small towns rarely have five learners at one level free together. Online groups let a Dungiven or Ballykelly learner join peers at the same stage.

Fees

## Causeway Coast and Glens fees

Coleraine and Ballycastle pay the same, and so does every country we teach outside India.

First class**USD 0**

One full free lesson, then an honest recommendation.

Group tuition**USD 100**

Around eight lessons a month with fifteen to twenty classmates.

Private tuition**USD 150**

Around eight lessons a month with your own tutor.

We charge in US dollars only; there is no sterling price. The first bill follows the trial, once a course and a weekly time are agreed, and the pricing page covers holidays, missed lessons and switching between group and private.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Causeway%20Coast%20and%20Glens%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)Reviews

## Family reviews on Google

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

## Book a free lesson in Causeway Coast and Glens

Tell us the learner's age or school year and one interest. The trial might be a Scratch windsock, a first Python program, or the Ballykelly runway sums.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Causeway Coast and Glens one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Causeway%20Coast%20and%20Glens%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)

Submitted details are used for placement and follow-up.

FAQ

## Causeway Coast and Glens questions

The district, the runway project and the details.

### What is the population of Causeway Coast and Glens?

NISRA's Census 2021 counted 141,746 usual residents in the district.

### What is the largest town in Causeway Coast and Glens?

Coleraine, which NISRA estimates at 24,483, ahead of Limavady at 11,729 and Ballymoney at 11,048.

### What is the Ballykelly project?

Learners split the wind into headwind and crosswind in Python and compare one, two and three runway layouts to see why three at sixty degrees halves the worst crosswind.

### What is a crosswind?

The part of the wind blowing across a runway, equal to the wind speed times the sine of the angle between them.

### When did Ballykelly airfield open?

At the start of June 1941, according to the Historic Environment Division record.

### Do lessons happen online?

Yes, all of them, live by video from home.

### Can you help with CCEA GCSE maths?

Yes, and with computing too. We teach for understanding and do not promise grades.

### Which ages are welcome?

From 6 to 67, on a course that fits the learner.

### What are the fees?

No charge for the trial; afterwards it is USD 100 monthly for group classes or USD 150 monthly for a private tutor.

### Do lessons run in the holidays?

No. Let us know your school holidays and we skip those weeks.

Also in Northern Ireland

## Nearby Northern Ireland pages

[Derry~Londonderry](/best-coding-class-in-derry-londonderry) finds where trains pass on a single line, and [Antrim and Newtownabbey](/coding-classes-in-antrim-and-newtownabbey) counts the towing in a wartime aircraft park. For the whole province, start at our [Northern Ireland](/coding-and-ai-classes-in-northern-ireland) guide; for Scotland, Wales and England, the [UK hub](/coding-classes-in-united-kingdom).

Book the free class[Book a priority demo](/book-demo)[Talk to us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Causeway%20Coast%20and%20Glens%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/coding-classes-in-causeway-coast-and-glens*
