---
title: "Coding Classes in Bridgend | Live Online, Ages 6 to 67"
description: "Live online coding, Python and maths classes across Bridgend county borough, from Bridgend town, Maesteg and Porthcawl to Pyle, Sarn, Pencoed and Tondu."
canonical: https://learn.modernagecoders.com/coding-classes-in-bridgend
source: src/pages/coding-classes-in-bridgend.html
---
> Live online coding, Python and maths classes across Bridgend county borough, from Bridgend town, Maesteg and Porthcawl to Pyle, Sarn, Pencoed and Tondu.

Skip to contentCourses for Bridgend

## Four ways in, across Bridgend county borough

A Year 1 pupil in Porthcawl who builds pulleys out of string, a Year 6 in Maesteg ready for typed code, a Year 12 in Bridgend thinking about A level physics and computing, and an adult in Pencoed learning Python. Each starts with a free lesson.

[![Scratch Coding for Kids course thumbnail](/images/scratch-kids.webp)Ages 6 to 11Scratch Coding for KidsScratch projects with lifts, pulleys, weights and see-saws.See the syllabus](/courses/scratch-programming-complete-course)[![Maths Through Coding course thumbnail](/images/maths-through-coding.webp)Ages 10 to 15Maths Through CodingBalancing equations and rearranging formulas, practised by coding them.See the syllabus](/courses/maths-through-coding)[![Python for Teens course thumbnail](/images/python-teens.webp)Ages 12 to 18Python for TeensComplete Python for teenagers, including physics simulations and checks.See the syllabus](/courses/python-complete-masterclass-teens)[![Python Masterclass course thumbnail](/images/python-college.webp)AdultsPython MasterclassPython for adults from the beginning, up to engineering calculations.See the syllabus](/courses/python-programming-masterclass-zero-to-advanced-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Bridgend county borough in figures

## 145,488 people across the county borough

That total is the usual-resident count from the 2021 census, taken from ONS through Nomis. The places below are ONS built-up areas from the same census.

| Built-up area | People counted | Built-up area | People counted |
| --- | --- | --- | --- |
| Bridgend | 51,760 | Sarn | 11,870 |
| Maesteg | 18,335 | Pencoed | 9,115 |
| Porthcawl | 15,795 | Ogmore Vale | 3,100 |
| Pyle | 14,075 |   |   |

Adding up census output areas ourselves, the Bridgend built-up area comes to 51,332 inside the county borough against the 51,760 ONS publishes, so a small part of it lies over the boundary; every other figure agrees within a few people. Learning follows the Curriculum for Wales, and exam courses are WJEC GCSEs and A levels. School holidays are set by Bridgend County Borough Council, and we ask each family for theirs rather than guess.

### Cardiff and WJEC courses

The capital, [Cardiff](/best-coding-class-in-cardiff), has a page of its own. For exam support, see [WJEC GCSE Computer Science](/wjec-gcse-computer-science-help-wales) and [GCSE Maths and Numeracy in Wales](/gcse-maths-and-numeracy-wales-help).

The Bridgend project

## Water in, load up

Two cars, one rope, and the least water that will do the job.

Every number in the model is invented. Two cars of 1,000 kilograms hang either end of a rope over a pulley, 15 metres apart in height. The bottom car carries 800 kilograms of material. Water poured into the top car's tank makes it heavier; once the difference in weight beats the friction, the cars start to move, one falling and one rising. Physicists call this an Atwood machine. The learner writes the force balance in Python: the pull is the weight difference minus friction, and the acceleration is that pull shared across everything moving. From the acceleration come the journey time and the speed at the end.

| Water in the top tank | Time to lift | Speed at the end | Share of the water's energy that lifts the load |
| --- | --- | --- | --- |
| Less than 911 kg | Does not move | Not applicable | Not applicable |
| 941 kg | 20.0 s | 1.5 m/s | 85 per cent |
| 1,000 kg | 11.6 s | 2.6 m/s | 80 per cent |
| 1,500 kg | 4.8 s | 6.3 m/s | 53 per cent |
| 2,000 kg | 3.7 s | 8.1 m/s | 40 per cent |

Below about 911 kilograms of water, nothing happens: friction wins. A little more gives a slow, gentle lift, 941 kilograms for a 20 second trip. Pour in more and the lift gets faster, but the extra water is mostly wasted. With 1,000 kilograms, 80 per cent of the energy the water gives up goes into raising the load; with 1,500, only 53 per cent does, and the cars arrive carrying 84 kilojoules of motion that the brakes must absorb. The learner finds the 20 second answer two ways: by rearranging the formula, and by trying values in code until the time matches, then checks that both agree.

Then a classic bug. Friction always opposes motion, but it is easy to write it with the wrong sign so that it helps. Do that, and the program claims 695 kilograms of water is enough, when in fact the cars would not move at all. A simple test catches it: at exactly the claimed minimum, the net force should be zero, and with the wrong sign it is not.

### Ages 8 to 11

Hang two cups on a string over a pencil, add water to one until it moves, and record how much it took.

### Ages 11 to 15

Code the force balance in Python and find the least water that makes the cars move.

### Ages 15 and up

Solve for the water giving a set journey time, track the energy, and write a test that exposes the friction sign bug.

### A real tower, invented numbers

Cadw's record says the Tondu lift was possibly worked by water balance and possibly by steam. The masses, height and friction in our model are invented, and the results describe the idea, not the real machinery.

Why Tondu

## A rare ironworks hoisting tower

The Cadw record, summarised.

| Record detail | What it says |
| --- | --- |
| Ironworks | Developed from 1837 by Sir Robert Price; bought by John Brogden in 1854 |
| Purpose | Hoisting materials to the charging platforms |
| How it worked | Possibly by water balance, with water-filled tanks beneath the tram cars as counter-balance |
| Alternative | Possibly steam, more common in later years |
| Rarity | The only other British ironworking site still retaining a hoisting tower is Blaenafon |
| Structure | A tall three-sided tower of yellow brick with a stone basement and buttresses |

The same balance of forces and energy decides how lifts, cranes, cable cars and funicular railways are designed, and why many of them use counterweights. Software that controls them must get every sign right, because a single flipped sign can turn a safe calculation into a dangerous one. A Bridgend pupil who has caught a friction sign bug with a test has learned how engineers stay safe.

We are not connected with Cadw or Bridgend County Borough Council. The record's descriptions belong to Cadw; the lift model and any mistakes belong to us.

Stages

## From string and cups to physics code

Year bands here are approximate; the trial lesson sets the level.

Years 1 to 4

### Machines and motion

Block coding with moving objects, pulleys and simple rules.

[Scratch Coding for Kids](/courses/scratch-programming-complete-course)[Coding for Kids](/courses/kids-coding-blocks-masterclass)Years 5 to 8

### Formulas in Python

Typed Python using simple formulas, units and tables.

[Maths Through Coding](/courses/maths-through-coding)[Python and AI for Kids](/courses/python-ai-kids-masterclass)Years 9 to 13

### Forces and energy

Physics models and testing alongside WJEC GCSE and A level courses.

[Python for Teens](/courses/python-complete-masterclass-teens)[High School Mathematics](/courses/complete-high-school-mathematics-mastery)Adults

### Engineering sums

Python for adults doing calculations, checks and small simulations.

[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)[Data Analysis Course](/courses/data-analysis-mastery-course-college)AI and signs

## An AI can write a physics formula in seconds. Will every sign point the right way?

One flipped sign turns a stationary lift into a working one on paper.

Ask a chatbot to model a counterweighted lift and it will write a reasonable-looking force equation. Whether friction is subtracted or accidentally added makes the difference between an answer of 911 kilograms and one of 695, and both print with the same confidence.

A Bridgend learner who has written a check that the net force is zero at the threshold knows how to catch that mistake. Testing an answer against a known condition is the habit that makes AI-written physics trustworthy.

Catching a single wrong sign before it matters is why a Bridgend teenager should keep learning to code in 2026. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

Lesson practicalities

## From Maesteg to Porthcawl, lessons at home

Towns and villages across the county borough all join by video.

### Code is typed, not watched

Pupils write the programs themselves; the teacher follows along on the shared screen and prompts when stuck.

### Placed by Welsh year group

A Pyle Year 5 or a Pencoed Year 11 is matched to their year and the Curriculum for Wales, with WJEC exam names where relevant. We teach in English.

### Trial lesson, on us

One whole lesson without charge, followed by frank advice.

### Fifteen to twenty per class

Classmates share a level and come from several countries.

### Twice a week in term

Regular lessons during term, a break for school holidays.

### Clock changes handled

The UK hour of your lesson stays fixed through the clock changes; teachers on India time shift instead.

Why classes cross town lines

Five learners at one level, free at the same hour, seldom live in one Welsh town. Grouping by level gives a pupil in Sarn or Ogmore Vale a proper class.

Fees

## Fees in Bridgend

Maesteg or Porthcawl, the fee is identical, the same rate we use everywhere outside India.

First class**USD 0**

A complete trial lesson, free, then our suggestion.

Group tuition**USD 100**

About eight lessons a month with fifteen to twenty classmates.

Private tuition**USD 150**

About eight lessons a month with your own teacher.

We charge in US dollars and have no sterling price list. No payment is taken until a course and weekly slot are agreed after the trial; holidays, absences and moving between formats are covered on our pricing page.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Bridgend%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)Reviews

## Reviews families have written on Google

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

## Book a free Bridgend lesson

Let us know who is learning, their school year or age, and what they enjoy. The trial might be a Scratch pulley game, a Python program, or the water-balance lift on this page.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Bridgend one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Bridgend%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)

Submitted details are used for placement and follow-up.

FAQ

## Bridgend questions

The county borough, the Tondu project and practical details.

### How many people live in Bridgend county borough?

The 2021 census counted 145,488 usual residents.

### What are the largest towns in Bridgend county borough?

ONS 2021 built-up areas: Bridgend 51,760, Maesteg 18,335, Porthcawl 15,795, Pyle 14,075 and Sarn 11,870.

### What is the Tondu lift project?

Learners model a water-balance lift as an Atwood machine in Python, find the least water that moves an invented 800 kg load, see extra water wasted, and catch a friction sign bug.

### What is an Atwood machine?

Two masses joined by a rope over a pulley. The heavier side falls and the lighter rises, with an acceleration set by the difference in weight.

### How did the Tondu lift tower work?

Cadw's record says it was possibly worked by water balance, using water-filled tanks under the tram cars as counter-balance, and possibly by steam.

### Are lessons held in Bridgend?

No, all lessons are online, so pupils join from home anywhere in the county borough.

### Can you help with WJEC GCSE Computer Science?

Yes, and with GCSE maths in Wales. We work on understanding and do not promise grades.

### What ages can learn?

From six to 67: blocks for young children, Python and exam work for teenagers, and Python for adults.

### What does it cost?

The first lesson is free. Then it is USD 100 a month in a group or USD 150 a month one-to-one.

### Do lessons pause for school holidays?

Yes. Share your school's holiday dates and we leave those weeks free.

Nearby pages

## More South Wales pages

[Blaenau Gwent](/coding-classes-in-blaenau-gwent) photographs the Tredegar clock with a pinhole camera, and [Cardiff](/best-coding-class-in-cardiff) and [Swansea](/best-coding-class-in-swansea) have city pages. Our [Wales](/coding-and-ai-classes-in-wales) page links every Welsh area as it goes live, and the [UK hub](/coding-classes-in-united-kingdom) covers the rest.

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Bridgend%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/coding-classes-in-bridgend*
