---
title: "Coding Classes in Mirbat | Modern Age Coders"
description: "Live online coding, Python and AI classes for Mirbat learners aged 6 to 67, built on a real timestamp project, with clear USD fees and a free first class in Oman."
canonical: https://learn.modernagecoders.com/coding-classes-in-mirbat
source: src/pages/coding-classes-in-mirbat.html
---
> Live online coding, Python and AI classes for Mirbat learners aged 6 to 67, built on a real timestamp project, with clear USD fees and a free first class in Oman.

Skip to contentCourse picks

## Learn what a timestamp is actually telling you

Four routes from reading a clock to writing systems that never store a time without saying which clock it came from.

[![Elementary Mathematics course thumbnail](/images/elementary-maths.webp)Ages 6 to 11Elementary MathematicsCounting hours across the middle of the night.See the syllabus](/courses/elementary-mathematics-complete-masterclass)[![Maths Through Coding course thumbnail](/images/maths-through-coding.webp)Ages 10 to 14Maths Through CodingAdding four hours, and losing a day.See the syllabus](/courses/maths-through-coding)[![MySQL for Teens course thumbnail](/images/mysql-teens.webp)Ages 14 to 18MySQL for TeensGrouping by a date that depends on the clock.See the syllabus](/courses/mysql-mastery-for-teens)[![Data Analysis course thumbnail](/images/data-analysis-college.webp)College and adultData AnalysisDaily totals that are wrong on two days at once.See the syllabus](/courses/data-analysis-mastery-course-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python AI Automation course thumbnail](/images/python-automation-ai-college.webp)Python and AICollege and adultPython AI AutomationAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex and Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex and Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Mirbat today

## A town whose working day starts in the dark

Where the fleet sails before dawn, a great deal of the day's activity happens in the hours where a date is least stable.

### Fishing sets the clock

Fishing remains an important part of everyday life, and the harbour fills with traditional wooden dhows and colourful boats. Boats that go out before first light put the busiest part of the day on the wrong side of midnight in a good many systems.

### A port before it was a village

Mirbat was once a thriving port and trading hub and is now a quiet coastal town with historic architecture, markets and coastal cliffs. Long-lived places accumulate records kept under several different conventions.

### A morning economy

Visitors watch fishermen preparing boats, unloading fresh catches and maintaining vessels along the waterfront. Almost all of it happens in a window a few hours wide, which is exactly the window a timezone shift moves across a date boundary.

A timestamp without a zone is not a time

Half past two in the morning is not a fact until somebody says whose half past two. Stored without its zone, it will be read by whatever the reading system assumes, and the assumption is usually the one that was convenient where the code was written rather than where the boat was.

Verified local facts

## Mirbat facts with a trail behind them

Each claim traced, with the era and the calendar named where they matter.

### A trading port on the eastern coast

Mirbat sits along the eastern coastline of Dhofar and was once a thriving port and trading hub. Its position is why the sea, rather than the land, still organises the working day.

### Dhows still in the harbour

The harbour holds traditional wooden dhows and fishing boats continuing long maritime traditions. A living fleet produces daily operational records, which is where timestamps become a practical problem rather than a theoretical one.

### A scholar who arrived from Yemen

Mohammed Bin Ali came originally from Tarim in Hadhramaut and moved to Mirbat, where he established religious institutions. A person, an origin and a destination is three facts that a single place field cannot carry.

### A death recorded in two calendars

He is recorded as having died in 556H, given alongside 1161 AD. Two calendars for one event is the same class of problem as two clocks for one morning, at a longer scale.

### Known by a title, not only a name

His standing earned him the title Sahib e Mirbat, the Master of Mirbat. A title stored in a name field is a small trap that outlives everybody who understood it.

### Beaches, markets and cliffs

The town keeps tranquil beaches, traditional markets and coastal cliffs alongside its historic architecture. Ordinary daily life is what generates the records this page is about.

Modern Age Coders has no association with the harbour, the tomb or anything else named above and claims none. Mirbat is used here because a fleet that sails before dawn puts real activity in the exact hours a timezone conversion moves.

Signature project

## Twelve boats, one date, and two daily totals both wrong

Nothing is mistyped and no clock is broken. The times are correct and the day they are filed under is not.

### 1. Log the morning as the harbour sees it

Twelve departures between twenty to three and quarter to seven, written down in local time exactly as anybody standing on the quay would record them. The departure times here are teaching values chosen to span a normal pre-dawn window, and the page says so.

### 2. Store them the way systems usually store them

Converted to the reference clock, because that is the sensible default and Oman runs four hours ahead of it. Local 04:00 becomes 00:00 the same day. Local 03:00 becomes 23:00 the day before.

### 3. Count the boats for the date

Four of the twelve have moved backwards across midnight. The date shows eight departures where the harbour saw twelve, and the previous date shows four that never happened on it. One conversion, two wrong answers.

| Departure, local | Same moment in UTC | Date it is filed under | Correct? |
| --- | --- | --- | --- |
| 02:40 | 22:40 | the day before | The moment is, the date is not |
| 03:20 | 23:20 | the day before | The moment is, the date is not |
| 03:55 | 23:55 | the day before | Five minutes from being fine |
| 04:10 | 00:10 | the same day | Yes |
| 06:45 | 02:45 | the same day | Yes |
| Boats counted for the date | 8 of 12 | a third have moved | 33 per cent lost |

### The error lands on two days and cancels nowhere

A day that loses four departures sits next to a day that gains four it never saw. The weekly total is untouched, so anybody reconciling at week level finds nothing at all, and the daily series is wrong on every single day the fleet sailed early. That combination, correct in aggregate and wrong in detail, is what keeps this alive for years. Every figure above was computed before this was written.

Reliable pipeline

## Store the instant and the zone, then decide whose day you mean

Five habits, all cheap, and any one of them makes this visible immediately.

| Stage | Rule | What it prevents | What it gives you |
| --- | --- | --- | --- |
| Zone | Never store a time without its offset | A moment read on the wrong clock | A timestamp that survives travel |
| Declare | Say whose day a daily report means | Local and reference days silently mixed | A report with a stated basis |
| Group | Group by local date when the subject is local | A fishing day split across two rows | Totals that match what people saw |
| Test | Use a time before 04:00 in every test | A suite that only ever runs at noon | The case that actually breaks |
| Reconcile | Check daily totals against a weekly one | An error that hides inside a correct sum | A discrepancy with a location |

### For younger learners

Two paper clock faces set four hours apart and a list of morning times. The child moves each time between the clocks and puts it under a day. The ones that fall off the start of the page are the lesson, with no computer involved.

### For teenagers

The twelve departures in Python, grouped by local date and then by the reference date, printing both counts. The learner writes the test that includes a departure before four in the morning and watches the two groupings disagree.

### For adults

Instants are stored with their offset, every daily report states which day it means, grouping matches the subject rather than the server, and test data always includes the hours either side of midnight.

The port history, the dhows, the scholar from Tarim in Hadhramaut, the 556H date given alongside 1161 AD and the title Sahib e Mirbat are published. The twelve departure times are teaching values chosen to span an ordinary pre-dawn window, and that is stated in the project steps, here and in the FAQ. The behaviour is a property of timezone conversion and holds for any early-morning activity.

Learning ladder

## From two paper clock faces to timestamps that carry their own zone

One free class is usually enough to see which step will actually move this learner forward.

Ages 6 to 10

### Two clocks, one morning

Children move a time between clocks and watch the day change.

[Early Math Foundations](/courses/early-math-foundations)[Kids Coding Blocks](/courses/kids-coding-blocks-masterclass)Ages 11 to 13

### Crossing midnight

Learners add hours to a time and find the date moves too.

[Problem Solving and Computational Thinking](/courses/problem-solving-and-computational-thinking-for-kids)[Python and AI for Kids](/courses/python-ai-kids-masterclass)Ages 14 to 18

### Zones, offsets and grouping

Teenagers group the same events by two definitions of a day.

[Python for Teens](/courses/python-complete-masterclass-teens)[Data Science for Teens](/courses/data-science-course-for-teens-python-data)Ages 18 to 67

### Reporting that names its own basis

Adults store offsets and state which day a daily figure counts.

[Python Programming](/courses/python-programming-masterclass-zero-to-advanced-college)[MySQL Database](/courses/mysql-database-complete-masterclass-college)Delivery

## Live classes in a town that works before sunrise

Where the fleet is out early and back by mid-morning, the hours a family can give to a lesson are not the hours a fixed timetable would pick.

### The timetable bends to the boats

A working morning that starts at three does not leave the same free hours as an office one. Agreeing a recurring slot around the real week is easier when nobody has to travel to reach it.

### A free first lesson, in full

A real class with a real task, finishing with a specific recommendation. No card is asked for to arrange it, and nothing is committed to until a teacher has been watched working.

### Five to eight per group, matched on level

What a learner can do and where they are going decides the group. The town they live in does not, which is what a fixed classroom can never promise.

### One to one for a single narrow goal

One teacher, one learner, for a dated examination or a specific gap a shared plan could only work around.

### Eight lessons in an ordinary month

Two live sessions weekly at a time agreed once when a learner enrols, rather than rebuilt every week around the tide and the catch.

### An hour and a half between the clocks

That is the gap between Oman and India, and on a page about timezones it is worth being exact. Terms, working hours, examination seasons and Ramadan are all discussed before a slot is fixed.

Nothing is broken, so nobody goes looking

The times are right, the conversion is right and the weekly total reconciles. What surfaces it is a teacher asking the learner to count the boats for one named morning and then to ask somebody who was on the quay.

Fees

## One free class, then group or private tuition

Pricing is in USD and is confirmed with the selected format.

First class**USD 0**

Ability task, goal review and starting recommendation.

Group tuition**USD 100**

Per month, normally eight lessons, five to eight learners.

Private tuition**USD 150**

Per month, normally eight lessons, one student and one teacher.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20want%20a%20free%20coding%20class%20for%20a%20learner%20in%20Mirbat.)Reviews

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

## Tell us the learner's level and the daily figure that will not match

The first task might be two paper clock faces, a Python grouping run against two definitions of a day, or a real daily report at work that disagrees with the people it describes.

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [contact@modernagecoders.com](mailto:contact@modernagecoders.com). This is Modern Age Coders' actual contact and not an invented Mirbat number.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20want%20a%20free%20coding%20class%20for%20a%20learner%20in%20Mirbat.)

Submitted details are used for placement and follow-up.

FAQ

## Mirbat coding class questions

The town, the teaching method and the terms of service, kept apart.

### Are the Mirbat facts real?

Yes. Mirbat was a thriving port and trading hub and remains a fishing town with traditional wooden dhows, and Mohammed Bin Ali came from Tarim in Hadhramaut, established religious institutions and is recorded as dying in 556H, given alongside 1161 AD. The twelve departure times in the project are teaching values and the page says so.

### Why does this survive reconciliation?

Because it moves activity between adjacent days rather than destroying it. A day loses four boats and the day before gains four, so any weekly or monthly total comes out exactly right. Only the daily series is wrong, and it is wrong on every day the fleet sailed early.

### Is there a Modern Age Coders centre in Mirbat?

No. No premises are claimed in Mirbat or anywhere in Dhofar. Classes are live online and need a laptop or desktop, working audio, a current browser and a stable connection. The page describes where the service reaches, not a building.

### Should times always be stored in the reference clock?

Store the instant unambiguously, which usually means the reference clock plus the offset it came from. Then group by whichever day the question is about. For a fishing fleet that is the local day, always, because that is the day the people being counted actually lived.

### Do you teach adults in Mirbat as well as school students?

Yes, up to 67. Adults work in Python, databases and reporting. Anyone whose daily numbers are queried by the people on the ground while the monthly numbers pass audit has probably met this already. Bring the real report where it is yours to bring.

### What is a learner left holding here?

Timestamps stored with their offset, reports that state which day they mean, grouping chosen to match the subject rather than the server, and test data that includes the hours either side of midnight. All four outlast any language.

### How much do Mirbat coding classes cost?

The first class is free. Standard group tuition is USD 100 per month for two live lessons each week, normally eight lessons monthly. Standard private tuition is USD 150 per month for one learner with one teacher on the same usual frequency. Course, format, recurring time and availability are confirmed before payment.

### What is the class size for Mirbat learners?

A group normally contains five to eight compatible learners. Compatibility includes current level, learning pace and objective, not age alone. Private tuition is one learner with one teacher. If no suitable group is ready, a learner can discuss private tuition or wait for an appropriate cohort.

### How are Mirbat class times arranged?

Oman is one and a half hours behind India. The teacher and learner agree a recurring time before payment, generally for two live lessons each week. Friday and Saturday options may be discussed subject to availability. School, work and travel schedules, examinations and Ramadan routines should be mentioned before confirmation.

### What happens in the free Mirbat class?

We work out what the learner wants to be able to do and set one task at that level. A child moves morning times between two paper clocks and sorts them into days. A teenager groups the same events by two definitions of a day. An adult is asked whether any daily figure of theirs is disputed by the people it describes. A course, a format, a time and the USD fee follow. That class is free.

Explore Oman

## Along the Dhofar coast

Delivery, fees and the full catalogue sit on the [Oman coding hub](/coding-classes-in-oman). Nearby, [Taqah](/coding-classes-in-taqah) takes on a trend line drawn across a break and [Thumrait](/coding-classes-in-thumrait) the stops that vanish from a journey table.

Book the free class[Close with WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20want%20a%20free%20coding%20class%20for%20a%20learner%20in%20Mirbat.)Free Mirbat class[Call +91 91233 66161](tel:+919123366161)

## Keep exploring Modern Age Coders

### Coding classes in nearby places

- [Coding Classes in Musandam](/coding-classes-in-musandam)
- [Coding Classes in Mawaleh](/coding-classes-in-mawaleh)
- [Online Coding Classes in Muscat](/coding-classes-in-muscat)
- [Coding Classes in Masirah](/coding-classes-in-masirah)
- [Online Coding Classes in Muttrah](/coding-classes-in-muttrah)
- [Coding Classes in Manah](/coding-classes-in-manah)
- [AI and Python Academy for Students in Salalah](/ai-and-python-academy-salalah)
- [Vibe Coding vs Building AI: A Guide for Parents in Oman](/vibe-coding-vs-building-ai-oman)
- [Coding Classes in Wadi Al Maawil](/coding-classes-in-wadi-al-maawil)
- [Coding and AI Alongside BJC and BGCSE in The Bahamas](/coding-and-ai-alongside-bjc-and-bgcse-bahamas)
- [Online Coding Classes in Leicester](/coding-classes-in-leicester)

### Learn more

- [AI Science Fair Project Ideas That Follow the Actual Rules](/science-fair-project-ideas-ai)
- [AI Classes for Beginners](/ai-classes-for-beginners)

### Free resources

- [SQL Tutorial: Databases, Basics to Advanced](/resources/sql)
- [Data Types and Constraints (NOT NULL, UNIQUE, PRIMARY KEY)](/resources/sql/data-types-and-constraints)
- [Introduction to Python](/resources/python/introduction-to-python)
- [LIKE Pattern Matching and NULL Handling](/resources/sql/pattern-matching-and-null)

### From the blog

- [Learn Python for Beginners: Complete Step-by-Step Guide (2026)](/blog/python-for-beginners)
- [Python vs JavaScript: Which Should You Learn First?](/blog/python-vs-javascript-which-to-learn-first)
- [30+ Python Basic Programs for Beginners to Practice in 2026](/blog/python-basic-programs-for-beginners)

### Start here

- [Real projects built by Modern Age Coders students](/student-labs)
- [Browse every live course at Modern Age Coders](/courses)

---

*Canonical: https://learn.modernagecoders.com/coding-classes-in-mirbat*
