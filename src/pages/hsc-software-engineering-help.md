---
title: "HSC Software Engineering Help | NSW Year 11 and 12 Online"
description: "HSC Software Engineering help for NSW Year 11 and 12: the seven focus areas, the 80-mark online exam, testing technique, and the AI rules. We never write projects."
canonical: https://learn.modernagecoders.com/hsc-software-engineering-help
source: src/pages/hsc-software-engineering-help.html
---
> HSC Software Engineering is the NSW Stage 6 course that replaced Software Design and Development. Year 11 covers programming fundamentals, object-oriented design and mechatronics; Year 12 covers secure architecture, web programming, automation and a major project. The HSC exam is worth 80 marks, sat on a computer over 2 hours 30 minutes. We teach the coding and testing technique; students write their own projects.

[Home](/) / [Coding classes in Australia](/coding-classes-in-australia) / HSC Software Engineering

New South Wales · Software Engineering 11-12 · Live online

# HSC Software Engineering help

Software Engineering is the newest computing course in the NSW HSC, and it shows. Past papers are thin, older revision guides were written for Software Design and Development, and the exam is sat on a computer with audio and video questions. Students arrive in Year 11 able to code a little, then meet object-oriented design, a mechatronics unit, secure architecture, web programming, automation and a major project inside two years. This page sets out what the syllabus actually contains, how the HSC exam is built, what NESA now says about AI in school-based tasks, and one testing habit that pays off in every focus area. We teach the programming and the technique. The project stays the student's own.

At a glance: Course: Software Engineering 11-12 (2022); Year 11: 3 focus areas, 120 hours; Year 12: 4 focus areas, 120 hours; HSC exam: 80 marks, on a computer; Exam time: 2 hours 30, with 10 minutes reading; Replaced: Software Design and Development; We teach: Code, design and test technique; We never: Write or edit the project. Rated 4.9 across 547 Google reviews.

## Three courses that line up with the syllabus

Fluency first, then the web and security units that Year 12 leans on.

- [Python from the ground up](/courses/python-complete-masterclass-teens): Variables to classes, with tracing before running: the Programming Fundamentals and object-oriented ground in one place.
- [Web development, front to back](/courses/full-stack-web-development-teens-masterclass): Requests, responses, databases and front ends: the territory of Programming for the Web.
- [Defensive security for teens](/courses/cybersecurity-course-for-teens-ethical-defensive): Input validation, authentication and safe data handling, which Secure Software Architecture expects.

## Seven focus areas across two years

The structure below is the syllabus's own, with NESA's indicative hours. Read on the NSW Curriculum site on 7 October 2026.

**Software Engineering 11-12 (2022): focus areas and indicative hours**

| Year | Focus area | Indicative hours |
|---|---|---|
| Year 11 | Programming Fundamentals | 40 |
| Year 11 | The Object-Oriented Paradigm | 40 |
| Year 11 | Programming Mechatronics | 40 |
| Year 12 | Secure Software Architecture | 30 |
| Year 12 | Programming for the Web | 30 |
| Year 12 | Software Automation | 30 |
| Year 12 | Software Engineering Project | 30 |

Each year carries 120 hours, and the balance is telling. Year 11 builds a programmer: fundamentals, then objects, then code that drives hardware in the mechatronics unit. Year 12 builds an engineer: thinking about security before features, building for the web, automating repetitive work, and managing a substantial project from idea to evaluation.

The syllabus describes the Year 12 project as the place where students "further develop project management skills", which is a useful clue. Marks in this course follow evidence of a disciplined process, not just a program that runs on the day.

The course replaced Software Design and Development. The NSW exam papers page now files the older course under an archive with a plain warning: "These papers are not from the current syllabus." The archive runs to the 2024 paper, and the first Software Engineering exam pack published is for 2025.

That matters for revision. An older guide will drill topics that are no longer examined and skip whole units that are. Students should revise from the current syllabus and its course specifications, then use the archive only for general problem-solving practice.

Sources: [NSW Curriculum, Software Engineering 11-12 Syllabus (2022)](https://curriculum.nsw.edu.au/learning-areas/tas/software-engineering-11-12-2022/overview); [Software Engineering HSC exam papers](https://www.nsw.gov.au/education-and-training/nesa/curriculum/hsc-exam-papers/software-engineering) and the [Software Design and Development archive](https://www.nsw.gov.au/education-and-training/nesa/curriculum/hsc-exam-papers/software-design-and-development-archive). Pages opened on 7 October 2026. NESA does not endorse or work with Modern Age Coders.

## An 80-mark paper, sat on a computer

NESA publishes the examination specification with the syllabus. The figures below are quoted from it, checked on 7 October 2026.

**Software Engineering HSC examination specification**

| Part | Marks | What NESA specifies |
|---|---|---|
| Whole paper | 80 | Undertaken by students using a computer; 2 hours and 30 minutes including 10 minutes reading time; headphones required for questions with video and audio stimulus |
| Objective-response items | Approx. 20 | Each item worth 1 to 4 marks; 14 to 18 items in total; may share stimulus with other items |
| Short-answer items | Approx. 60 | 16 to 18 items in total; at least three worth 4 to 8 marks; may share stimulus with other items |

Three quarters of the paper is short answer, and the longer items are where students either show method or lose it. A response that names a technique, applies it to the given stimulus and states what the result means reads very differently from one that describes code in general terms.

Shared stimulus is the other feature to practise. Several questions may hang off one scenario, so a student who misreads the scenario early carries the error through every item attached to it.

School-based assessment runs alongside the exam. For Year 12, NESA sets two mandatory components, knowledge and understanding of course content at 50 per cent and practical application at 50 per cent, and limits schools to one take-home task worth no more than 15 per cent.

NESA also advises schools to give individual tasks a weighting between 10 and 40 per cent. In practice that means most marks come from work done under supervision, which is exactly why technique has to live in the student's head and hands, not in a file someone else prepared.

Source: [NSW Curriculum, Software Engineering 11-12 assessment, HSC examination specification and school-based assessment requirements](https://curriculum.nsw.edu.au/learning-areas/tas/software-engineering-11-12-2022/assessment). Checked on 7 October 2026.

## Equivalence partitioning, then a desk check

Every focus area eventually asks the same question: how do you know the code works? The answer that earns marks is a deliberate choice of test data, followed by a written trace.

### 1. Split the inputs into classes

Group every possible input into partitions that the program should treat the same way. One value from each partition stands for the rest, so ten thousand possible inputs become a handful of tests.

### 2. Add the edges

For each partition, test the values at its boundaries as well as one from the middle. Most faults hide where one rule hands over to the next.

### 3. Trace by hand

Before running anything, step through the algorithm on paper for each chosen input and record every variable. Where the trace and the expected output disagree, the fault is found without a debugger.

A worked illustration, written by us for practice: a school canteen app charges a lunch price by year level. Years 7 to 10 pay the junior price, Years 11 and 12 the senior price, staff a flat rate, and anything else is rejected. The function receives a year level as a whole number, with 0 standing for staff.

**Partitions for the canteen price rule, with chosen test values**

| Partition | Expected behaviour | Test values |
|---|---|---|
| Staff (0) | Staff rate | 0 |
| Junior (7 to 10) | Junior price | 7, 8, 10 |
| Senior (11 to 12) | Senior price | 11, 12 |
| Below range (negative) | Rejected | -1 |
| Gap (1 to 6) | Rejected: not a secondary year | 1, 6 |
| Above range (13 and up) | Rejected | 13 |

**Desk check of a faulty version that tests "year > 10" for senior and "year > 6" for junior, in that order**

| Input | year > 10? | year > 6? | Output | Expected | Result |
|---|---|---|---|---|---|
| 0 | No | No | Staff rate | Staff rate | Pass |
| 7 | No | Yes | Junior | Junior | Pass |
| 12 | Yes | Not reached | Senior | Senior | Pass |
| 13 | Yes | Not reached | Senior | Rejected | Fail: no upper limit |
| 6 | No | No | Staff rate | Rejected | Fail: gap treated as staff |

Two faults surface from six partitions and a five-row trace, and neither would appear if the tests were 7, 11 and 0, the values most students pick first. That is the point of partitioning: it forces the uncomfortable inputs onto the list.

The same method transfers directly. In Programming for the Web it becomes validation of form input; in Secure Software Architecture it becomes the habit of treating every input as hostile until a partition says otherwise.

In the exam, a short-answer item that asks for test data rewards exactly this structure: name the partitions, justify the boundary values, and state the expected output for each. A list of random numbers with no reasoning collects little.

In the Year 12 project, a partition table and a dated trace are the kind of evidence that shows a teacher the testing was done by the student, which matters more now that NESA has tightened the rules on take-home work.

## What NESA now says about AI in assessment

NESA issued official notice 34/26 on 16 September 2026, changing the ACE Rules for take-home tasks. The lines below are quoted from NESA's own notice and FAQs, checked on 7 October 2026.

**NESA on take-home tasks and generative AI**

| Question | What NESA says |
|---|---|
| Who do the changes apply to? | Year 12 students commencing HSC courses from Term 4, 2026, and Year 11 students commencing Preliminary courses from Term 1, 2027 |
| What is the limit? | One take-home task worth no more than 15% in Software Engineering's Year 12 assessment program |
| Why the cap? | The 15% cap enables schools to lessen the risks posed by AI while still providing students a variety of assessment opportunities |
| What must teachers certify? | Teachers must still certify that any marks awarded reflect what the student knows and can do, not using AI |
| How must tasks be designed? | Schools must design formal assessment tasks to ensure marks are reflective of a student's own knowledge, skills and understanding, and not the use of generative artificial intelligence |

The direction is clear: more marks earned under supervision, and close attention to whose work a submission really is. A student who understands every line of their own project, and can explain why each test value was chosen, is in a strong position under these rules. A student who leaned on a tool, or on another person, is not.

Our rule follows NESA's. We teach programming, design and testing with our own examples. We talk about a student's project only in general terms, and we do not write, edit, debug or review any code or documentation that will be submitted for assessment. If a student asks, the answer is no, and we explain why.

Sources: [NESA official notice 34/26, Changes to ACE Rules concerning take-home assessment tasks and the use of artificial intelligence](https://www.nsw.gov.au/education-and-training/nesa/news/all/changes-ace-rules-take-home-tasks-artifical-intelligence); [NESA, limits on take-home assessments: FAQs](https://www.nsw.gov.au/education-and-training/nesa/news/all/limits-take-home-assessments-faqs). Checked on 7 October 2026.

## Four rungs from Year 10 to the HSC

Where a student starts depends on how much they can code unaided, not on their year.

**From first programs to a finished Year 12 project**

| When | Rung | The sign it is secure |
|---|---|---|
| Year 10 into 11 | 1. Fluency | Writes and debugs a program of a hundred lines without help |
| Year 11 | 2. Objects | Designs classes that hide their data and can explain why |
| Year 11 into 12 | 3. Testing | Chooses test data by partition and traces it by hand |
| Year 12 | 4. Engineering | Plans, builds and evaluates a project with dated evidence |

### If Year 11 feels fast

The jump from scripts to objects is where most students stall. It usually means fundamentals were rushed, and a few weeks of deliberate tracing practice fixes more than any amount of new syntax.
Mechatronics depends on the hardware each school provides. We teach the control logic in code, and leave the electronics to the school lab.

### Beyond the HSC

A student hooked on algorithm puzzles can take the Australian Informatics Olympiad next; our [AIO and CAT preparation page](/australian-maths-trust-amc-aio-cat-preparation) explains it.
The habits here, test design and written evidence, are what university assignments and first engineering jobs ask for.

## Nine courses for Software Engineering students

Grouped by the part of the syllabus they support. Full syllabuses open from each card.

### Year 11 foundations

Fundamentals and objects

- [Python for teens](/courses/python-complete-masterclass-teens): The language most NSW classes use, from first loop to classes.
- [Java for teens](/courses/java-programming-masterclass-for-teens): For schools teaching objects in Java, or students who want a second language.
- [Algorithms and data structures](/courses/problem-solving-dsa-masterclass-teens): Searching, sorting and tracing, reasoned before coded.

### Year 12 focus areas

Web, security and automation

- [Full stack web development](/courses/full-stack-web-development-teens-masterclass): Front end, back end and a database, built in tested slices.
- [Cybersecurity for teens](/courses/cybersecurity-course-for-teens-ethical-defensive): Defensive habits for code that handles real users and data.
- [Data science with Python](/courses/data-science-course-for-teens-python-data): Scripts that clean and process data, close kin to Software Automation.

### Stretch

For students aiming beyond the course

- [Competitive programming](/courses/competitive-programming-for-teens-course): Correct code under time pressure, useful for olympiads and exams alike.
- [AI and machine learning for teens](/courses/ai-ml-masterclass-teens): Building and honestly evaluating models in Python.
- [App development for teens](/courses/complete-app-development-masterclass-for-teens): Interfaces and state, for students who want to ship something real.

## Weekly classes, timed for New South Wales

Our teachers sit in India, and New South Wales is ahead of them: by four and a half hours in winter, five and a half once NSW daylight saving begins in October. A 5 pm lesson in Sydney therefore lands at 11.30 am or 12.30 pm on the teacher's clock, a comfortable hour for focused senior work.

- **Weekday after school** The usual choice in Year 11 and Year 12.
- **Weekend morning** For longer sessions on a focus area or timed practice.
- **School holidays** Short intensives before trials or the HSC.

- **Technique, not answers** We teach with our own examples and never with code or documents that will be assessed.
- **Tracing taught explicitly** Desk checks, partitions and boundary values, practised until they are automatic.
- **Exam-style practice** Short-answer responses that name a method, apply it to a stimulus and state the result.
- **Senior groups of fifteen to twenty** Year 11 and 12 students at a matching level, each one answering out loud every week.
- **Solo sessions** For one focus area that needs repair before trial exams.
- **No promises** No band or mark is promised. The work and the result belong to the student.

## Fees

One monthly charge in US dollars, identical for every family outside India. Nothing is paid to join and nothing ties you in past the current month.

- Free first class: USD 0. A real lesson with a teacher. An honest view of the gaps. No card details.
- Group batch: USD 100 a month. Fifteen to twenty students at one level. The same teacher each week. Practice marked and discussed. A certificate at the end.
- One to one: USD 150 a month. A teacher for one student. Aimed at specific gaps. Useful before trials and the HSC.

## What NSW students and parents ask

### What is HSC Software Engineering?

It is the NSW Stage 6 computing course set out in the Software Engineering 11-12 Syllabus (2022). Year 11 covers Programming Fundamentals, The Object-Oriented Paradigm and Programming Mechatronics; Year 12 covers Secure Software Architecture, Programming for the Web, Software Automation and a Software Engineering Project.

### Did it replace Software Design and Development?

Yes. NESA now lists Software Design and Development papers in an archive marked as not from the current syllabus, running up to the 2024 paper, and the first Software Engineering exam pack published is for 2025.

### How long is the HSC exam?

2 hours and 30 minutes including 10 minutes reading time. It is worth 80 marks and is sat on a computer, with headphones needed for audio and video questions.

### How are the exam marks split?

About 20 marks of objective-response items, 14 to 18 of them worth 1 to 4 marks each, and about 60 marks of short-answer items, 16 to 18 in total with at least three worth 4 to 8 marks.

### How many hours does each focus area take?

NESA gives indicative hours: 40 each for the three Year 11 areas, and 30 each for the four Year 12 areas, 120 hours per year.

### What is equivalence partitioning?

A way of choosing test data. Inputs are grouped into classes the program should treat alike, one value is tested from each class, and the boundary values of each class are added, because faults cluster where one rule meets the next.

### Will you help write my major project?

No. We teach programming, design and testing with our own examples, and we do not write, edit, debug or review anything that will be submitted for assessment. NESA requires marks to reflect what the student knows and can do.

### Can AI be used for school tasks?

NESA has limited Year 12 programs to one take-home task worth no more than 15 per cent, and requires tasks to be designed so marks reflect the student's own knowledge rather than generative AI. Each school sets its own detailed rules within that.

### Do you teach Programming Mechatronics?

We teach the control logic in code. The mechatronics unit uses hardware supplied by each school, and the electronics side belongs in the school lab.

### Which time of day works for NSW students?

Late afternoon in NSW suits most seniors, and it falls around midday for our teachers. The exact weekly time is settled together after the free class.

## More for Australian computing students

- [Australian competitions calendar](/australian-coding-maths-and-ai-competitions-calendar): Coding, maths and AI contests, month by month, checked at each organiser.
- [Informatics olympiad preparation](/australian-maths-trust-amc-aio-cat-preparation): The AIO for programmers who want harder problems.
- [Coding classes in Australia](/coding-classes-in-australia): Every state, every age, and how online classes work across time zones.
- [AI and machine learning in Australia](/ai-and-machine-learning-classes-in-australia): For students whose projects include a model.
- [Online maths tutoring in Australia](/online-maths-tutoring-australia): The algebra and logic that programming leans on.
- [How we teach](/how-we-teach): The method behind every class, set out plainly.

## Contact

Book the free first class at [https://learn.modernagecoders.com/hsc-software-engineering-help](https://learn.modernagecoders.com/hsc-software-engineering-help#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
