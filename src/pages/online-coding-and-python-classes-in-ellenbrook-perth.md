---
title: "Online Coding and Python Classes in Ellenbrook, Perth"
description: "Live online coding and Python classes for Ellenbrook children, teenagers and adults, built around real Western Australian data, in small groups or one to one."
canonical: https://learn.modernagecoders.com/online-coding-and-python-classes-in-ellenbrook-perth
source: src/pages/online-coding-and-python-classes-in-ellenbrook-perth.html
---
> Live online coding and Python classes for Ellenbrook children, teenagers and adults, built around real Western Australian data, in small groups or one to one.

Skip to contentCourse picks for Ellenbrook

## Courses that make Python predictable

The station-stops project is about lists, loops and testing what code really did. These courses teach those foundations; the trial class finds the level.

[![Python for Teens course thumbnail](/images/python-teens.webp)Ages 13 to 17Python for TeensLists, loops and the traps between them, practised on real data.See the syllabus](/courses/python-complete-masterclass-teens)[![Python and AI for Kids course thumbnail](/images/python-kids.webp)Ages 8 to 12Python and AI for KidsFirst Python, with small programs children can check by eye.See the syllabus](/courses/python-ai-kids-masterclass)[![Python Masterclass course thumbnail](/images/python-college.webp)University and adultPython MasterclassPython from zero to tested, readable programs.See the syllabus](/courses/python-programming-masterclass-zero-to-advanced-college)[![Data Science for Teens course thumbnail](/images/data-science-teens.webp)Ages 13 to 17Data Science for TeensFiltering and summarising public datasets correctly.See the syllabus](/courses/data-science-course-for-teens-python-data)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Ellenbrook in the Census

## A young suburb full of school-age children

Headline 2021 Census QuickStats for the suburb of Ellenbrook (ABS code SAL50482), compared with Western Australia.

| Measure | Ellenbrook |
| --- | --- |
| Residents | 24,668 |
| Median age | 32 |
| Families | 6,477 |
| Private dwellings | 8,901 |
| People per household | 2.9 |

| Indicator | Ellenbrook | Western Australia |
| --- | --- | --- |
| Separate houses | 89.3% (7,198) | 79.7% |
| Workers who drove to work | 67.9% (7,968) | 62.1% |
| Employed residents working from home | 5.0% (589) | 7.5% |
| Adults with a bachelor degree or higher | 13.3% (2,428) | 23.8% |

### Primary-age children

Residents aged 5 to 9 numbered 2,355, the largest five-year band among children here.

### Teenagers

Another 2,131 were aged 10 to 14 and 1,737 were 15 to 19.

### Area

The suburb boundary covers about 12.9 square kilometres in Perth's north-east.

Small Census cells are adjusted slightly by the bureau to protect privacy. We report the published values and leave them unadded.

Signature project

## Delete fourteen, lose seven

The list: 129 stop names inside Ellenbrook, in the order the state file stores them. The aim: remove every name containing "Stn", which marks the 12 bus stands and 2 rail platforms at Ellenbrook station. The first attempt loops over the list and calls names.remove(n) whenever a station name appears.

| Method | Names left | Correct? |
| --- | --- | --- |
| for n in names: names.remove(n) | 122 | No, 7 station names survive |
| for n in names[:]: names.remove(n) | 115 | Yes |
| [n for n in names if "Stn" not in n] | 115 | Yes |
| Loop backwards, deleting by index | 115 | Yes |

| Survived | Why |
| --- | --- |
| Stands 2, 4, 6, 8, 10 and 12 | Each followed a removed stand and was skipped |
| Platform 2 | Followed Platform 1, which was removed |

### What happens

The loop keeps a position counter. Removing Stand 1 at position 99 slides Stand 2 into that slot, and the loop moves on to position 100, which now holds Stand 3.

### Why it is quiet

Python raises no error for changing a list during a for loop. The program finishes and prints 122, a believable number.

### Why Ellenbrook shows it

The 14 station records sit side by side in the file, so every second one is skipped. Scattered records would hide the bug far better.

### A test that catches it

After filtering, assert that no remaining name contains "Stn". The first version fails that check at once, with 7 survivors, while all three corrected versions pass. One line of checking turns a silent bug into a visible one.

Stop names come from the Public Transport Authority of Western Australia open data file. Membership of Ellenbrook is our point-in-boundary check; the list order and every count above come from our own Python run.

Lists in Python

## Changing a list safely

The rule is simple once learned: never shrink the list you are walking through. Build a new one, or walk a copy.

| Pattern | Good for | Cost |
| --- | --- | --- |
| List comprehension | Most filtering jobs | A new list in memory |
| Loop over a copy, names[:] | When you must call remove() | A copy, plus slow removes |
| Backwards index loop | Deleting in place | Harder to read |
| filter() with a function | Reusing a test function | Returns an iterator |

### Primary learners

Line up cards, take away every red one while stepping along, and see which red cards get skipped.

### Secondary learners

Reproduce the Ellenbrook bug, print the position counter each step, and fix it three ways.

### Adults

Review scripts that delete rows inside loops, in Python or in spreadsheet macros, for the same skipping fault.

Dictionaries and sets are stricter: changing their size during a loop raises a RuntimeError. Lists are the quiet case, which is exactly why they deserve a test.

Around Ellenbrook

## A station precinct and Banrock Drive

Local markers from the state stops file and the WA school calendar.

### Stop records

Our boundary check places 129 stop records in Ellenbrook: 126 standard, 2 rail platforms and 1 school stop.

### Labels

Of those, 127 carry the suburb label Ellenbrook and 2 say Aveley. Banrock Drive has the most records, 12.

### Term 3, 2027

WA public schools run Term 3 of 2027 from Monday 19 July to Friday 24 September.

Just Ellenbrook

Counts here are for the suburb of Ellenbrook. Aveley, The Vines, Henley Brook, Bullsbrook, Lexia, Melaleuca and Whiteman border it and keep their own figures.

Learning ladder

## From card games to clean Python

Use these ages loosely; the trial class settles where to begin.

Ages 6 to 10

### Blocks

Scratch projects that build sequencing and checking habits.

[Scratch Coding for Kids](/courses/scratch-programming-complete-course)[Coding for Kids](/courses/kids-coding-blocks-masterclass)Ages 10 to 14

### Typed Python

Lists, loops and small puzzles in real code.

[Python and AI for Kids](/courses/python-ai-kids-masterclass)[Maths Through Coding](/courses/maths-through-coding)Ages 14 to 18

### Python with data

Filtering and testing real datasets.

[Python for Teens](/courses/python-complete-masterclass-teens)[Data Science for Teens](/courses/data-science-course-for-teens-python-data)University and adult

### Python for work

Automation and data scripts with tests.

[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)[Python Automation Course](/courses/python-ai-automation-masterclass-college)Coding and AI

## AI writes loops too. Who notices when one skips?

Someone who knows how lists move underneath. AI assistants usually avoid this bug, but not always, and the faulty version looks perfectly reasonable.

Ask for code that removes station stops from a list and you will often get a clean list comprehension. Ask in a slightly different way, or edit the result by hand, and the remove-inside-a-loop pattern can creep in. It runs, prints 122 and looks finished.

Learners who have watched the position counter slide past Stand 2 recognise the pattern on sight and add the one-line assertion that proves the result. That habit is what makes AI-assisted code dependable.

In Ellenbrook, the learner who tests the output catches the bug the program never reports. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

Delivery

## Ellenbrook classes from home

All teaching is live over video; there is no venue to reach.

### Learner drives

The student types and runs the code; the teacher follows along and prompts.

### School-term rhythm

Lessons pause for Western Australian school holidays.

### No charge to try

The opening lesson is a proper class, finished with a recommendation.

### Level-matched groups

Fifteen to twenty learners together, or private teaching.

### Twice weekly

Set weekly slots, roughly eight lessons a month.

### India time

Our teachers work from India: a 4:30pm Ellenbrook lesson is 2pm India time.

No seasonal clock change

Western Australia stopped daylight saving after a trial that ended in March 2009 (IANA time zone database), and India keeps a single time, so classes never move.

Fees

## Ellenbrook class fees

The same three prices for all families.

First class**USD 0**

There is no charge for lesson one, which comes with written advice.

Group tuition**USD 100**

About eight group lessons a month, fifteen to twenty learners each.

Private tuition**USD 150**

About eight private lessons a month with a single teacher.

Families in Ellenbrook pay in US dollars after the trial, when a course and time are agreed. Holiday and missed-lesson rules are on the pricing page.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20coding%20or%20Python%20class%20for%20a%20learner%20in%20Ellenbrook.)Reviews

## Parents and students on Google

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

## Book a free Ellenbrook lesson

Give us the learner's age and interests. An older student might begin by reproducing the skipping loop; a young child might begin with a Scratch card game.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Ellenbrook one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20coding%20or%20Python%20class%20for%20a%20learner%20in%20Ellenbrook.)

Submitted details are used for placement and follow-up.

FAQ

## Ellenbrook Python questions

Questions Ellenbrook parents and adult learners raise most.

### How many people live in Ellenbrook?

The 2021 Census QuickStats count 24,668 people in the suburb of Ellenbrook, with a median age of 32 and 6,477 families.

### Why does removing items in a for loop skip elements?

The loop walks the list by position. Removing an item shifts everything after it one place left, so the item that slides into the current position is never visited.

### How do you remove items from a list safely in Python?

Build a new list with a comprehension, loop over a copy such as names[:], or delete by index while looping backwards.

### What did the Ellenbrook loop test show?

Of 14 station records among 129 Ellenbrook stop names, the remove-in-a-loop version deleted only 7, leaving 122 names; all three safe versions left the correct 115.

### When is a child ready for Python?

Usually between eight and ten, once Scratch feels easy and typing is comfortable. The trial lesson checks.

### Are Claude courses open to school students?

No. Claude-based courses take learners of 18 and over; school-age students use other AI tools.

### Is there a classroom in Ellenbrook?

No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.

### What do lessons cost for Ellenbrook learners?

The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.

### Who is in each group?

Fifteen to twenty learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.

### Can Ellenbrook group learners study Copilot Studio?

No. Copilot Studio is offered one to one; in groups, agents are coded in Python.

Explore Perth and Western Australia

## More for Ellenbrook learners

The [Perth page](/online-coding-and-python-classes-in-perth-western-australia) covers the whole city and [coding for Perth kids](/coding-classes-for-kids-perth) suits younger learners. Further afield, [Geraldton](/best-coding-classes-in-geraldton) has a page of its own, and [the state guide](/coding-and-ai-classes-in-western-australia) covers all of Western Australia.

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20coding%20or%20Python%20class%20for%20a%20learner%20in%20Ellenbrook.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/online-coding-and-python-classes-in-ellenbrook-perth*
