---
title: "CCEA GCSE Digital Technology Programming Help | Units 4 and 5"
description: "CCEA GCSE Digital Technology programming help in Northern Ireland: Unit 4 is written by hand, and the 2025 report shows where marks went. Unit 5 too."
canonical: https://learn.modernagecoders.com/ccea-gcse-digital-technology-programming-help
source: src/pages/ccea-gcse-digital-technology-programming-help.html
---
> CCEA GCSE Digital Technology programming help in Northern Ireland: Unit 4 is written by hand, and the 2025 report shows where marks went. Unit 5 too.

In short

CCEA's GCSE Digital Technology (Programming) is three units: the compulsory core, Unit 1, a one-hour written exam worth 30 per cent; Unit 4, Digital Development Concepts, a written exam of 1 hour 30 minutes worth 40 per cent; and Unit 5, Digital Development Practice, a controlled assessment worth 30 per cent and 60 marks, completed in up to 36 hours in Python, Java or C# on a scenario CCEA publishes each June. In 2025 the Unit 4 paper carried 120 marks. CCEA's report on it says candidates predicted output well but lost marks on arrays inside loops, while loops, running totals and, above all, on not following the bullet-pointed requirements and given variable names, which it says align closely to the mark scheme. Modern Age Coders teaches handwritten algorithm practice against exactly those habits, the Unit 1 core, and the design, testing and evaluation skills Unit 5 grades, on our own briefs. We never work on a live controlled assessment task. The first lesson is free, then USD 100 a month in a group or USD 150 one to one.

Start here

## Three courses for the programming route

Two of the three languages CCEA allows in Unit 5, and the algorithms Unit 4 asks for by hand. Every card opens its syllabus.

[![Python for Teens course thumbnail](/images/python-teens.webp)  NI / 01 Python for Teens Variables to file handling in the language most Northern Irish schools use for Unit 5. Open the syllabus →](/courses/python-complete-masterclass-teens)[![Java for Teens course thumbnail](/images/java-teens.webp)  NI / 02 Java for Teens For schools on Java, and for the object-oriented ideas the Unit 4 extended answer asks candidates to describe. Open the syllabus →](/courses/java-programming-masterclass-for-teens)[![Problem Solving for Teens course thumbnail](/images/problem-solving-teens.webp)  NI / 03 Problem Solving and Algorithms Bubble and insertion sort, linear and binary search, arrays and trace tables, practised on paper as well as on screen. Open the syllabus →](/courses/problem-solving-dsa-masterclass-teens)

The Unit 4 paper

## Code on paper: what the 2025 examiners saw

From CCEA's Chief Examiner's report on Unit 4, Digital Development Concepts, summer 2025.

| Feature | In 2025 |
| --- | --- |
| Marks and time | 120 marks in 90 minutes, ten compulsory questions |
| Question types | Multiple choice, fill in the blanks, closed response, tick box, matching terms and open response |
| Marks per part | From 1 to 9 |
| Extended writing | One question of 6 marks, marked in levels for the quality of written communication |
| Share of the GCSE | 40 per cent |

### Where candidates did well

Predicting the output of algorithms, identifying the cause of logic errors and writing accurate solutions, which the report says has improved year on year.

Binary arithmetic, validation, test plans, and the difference between black box and white box testing, where many took full marks.

### Where marks leaked

Arrays inside loops: using the index variable correctly, as in sales[j], and keeping a running total. Unbounded iteration, where many candidates reach for a for loop when a while loop is needed.

Short explanations that describe instead of answering: what a constant is rather than why it helps, one point about a dry run instead of two, one difference between Unicode and ASCII restated backwards.

| Topic | The slip | Practise |
| --- | --- | --- |
| Arrays | Not using the array name given, setting all elements with one assignment instead of a loop | Initialising and totalling arrays in loops, by hand, weekly |
| While loops | Wrong condition, no counter moving through the array, output statements left inside the loop | Writing while versions of every for loop, and marking where each loop ends |
| Constants | Defining a constant instead of giving an advantage | Answering "why" questions with a benefit, such as readability or easier maintenance |
| Characters | Confusing the number of bits with the number of characters in ASCII and Unicode | Two genuinely different contrasts, stated both ways |
| Sorting | Mixing up insertion and bubble sort | Tracing both sorts on the same short list until the difference is obvious |
| Robustness | Naming a type of testing instead of the data used | Two of valid, null, invalid and exceptional data, at high volume |

Source: CCEA GCSE Chief Examiner's and Principal Moderator's Report, Digital Technology, Summer Series 2025, and the CCEA GCSE Digital Technology specification, both from the [CCEA GCSE Digital Technology pages](https://ccea.org.uk/key-stage-4/gcse/subjects/gcse-digital-technology-2017). The 120-mark total is the 2025 paper's; papers can vary.

The bullet-point rule

## The bullet points are the mark scheme

The single most repeated piece of advice in the 2025 report, and the easiest to practise.

Long Unit 4 questions set out a scenario and then list what the algorithm must do, usually as bullet points: read this, calculate that, output these two values, use one condition per if-statement. The report says of one such question: "These requirements align closely to the mark scheme." Candidates lost marks for not outputting a value a bullet asked for, for using two conditions where one was specified, and for entering numbers where the question gave variable names such as HireCost and NumberOfNights.

### Use the names given

The report is plain: "where variable names are provided candidates must make use of them". A correct algorithm with invented names loses marks it did not need to lose.

### Show where loops end

Outputs placed inside a while loop earned nothing when they belonged after it. Indent clearly or end the loop explicitly, so the logic is visible on paper.

### Count your ticks

Where a question asks for a set number of ticks, "only the first n, where n=the required number, will be accepted". Extra answers in a single-answer space score nothing.

The extended answer has its own trap. The report warns that "Candidates making use of generic terms will be unable to score in the top band", and elsewhere singles out words like faster and quicker. In 2025 the question asked candidates to describe procedural and object-oriented programming. Most described objects, classes and inheritance well and procedural programming thinly, sometimes as no more than step-by-step instructions.

| Step | What to do |
| --- | --- |
| 1. Number the bullets | Write a small number beside each requirement before writing any code |
| 2. Copy the names | Underline every variable and array name the question supplies, and use them exactly |
| 3. Write the algorithm | One requirement at a time, in the order given, with loops clearly opened and closed |
| 4. Tick them off | Check each numbered bullet against a line of the answer before moving on |
| 5. Dry run it | Trace one set of values through by hand, which also catches outputs in the wrong place |

Writing code by hand is its own skill. Students who only ever type into an editor that indents and completes for them find a blank page slow and untidy, and CCEA marks what it can read. We set handwritten algorithm work in every group from the start, alongside the on-screen programming Unit 5 needs.

Unit 5

## Unit 5: what the moderators noted, and where we stop

Digital Development Practice: a new scenario each June, 60 marks, up to 36 hours, marked in school and moderated by CCEA.

| Task | What moderators saw |
| --- | --- |
| 1. Design | Strong flowcharts and pseudo-code; user requirements sometimes copied from the task without being developed; user feedback to refine the design sometimes missing |
| 2. Build | High standard of programs; every solution must be annotated; the strongest considered robustness |
| 3. Test | Well-structured test tables, but extreme test data often missing; screenshots needed only to show corrective action, which some skipped |
| 4. Evaluate | Too often descriptive; the advice is to judge each user requirement as fully met, partially met or not met, and to treat performance, robustness and refinements in depth |

Two rules from the report shape how anyone outside the school should behave. "The use of templates is prohibited", and moderators encourage candidates to develop their own program style. CCEA also expects schools to practise on legacy tasks and practice tasks rather than rehearsing on the live scenario, and says "Extreme testing of data was lacking in a number of centres", a gap that practice fixes cheaply.

### What we do for Unit 5

Teach design with flowcharts and pseudo-code, validation and error trapping, annotated code, test tables with valid, invalid and extreme data, and evaluation against user requirements, on practice scenarios we write.

Use Python or Java, whichever the school teaches. We have no general C# course; C# appears only in our Unity game course, so a family at a C# school should tell us in the first lesson.

### What we never do

Look at, discuss or help with the live controlled assessment task, or any work produced for it. The teacher signs that the work is the candidate's own and may not correct it in detail for a fair copy.

Supply templates or model solutions of any kind, which CCEA prohibits in any case.

Unit 1

## Unit 1, the compulsory core, in one hour

Shared by both routes, worth 30 per cent, and broader than most students expect.

Unit 1, Digital Technology, covers data storage and representation, networks, databases, spreadsheets, security, legislation and the wider effects of digital technology. The 2025 report found it answered well overall, with a few recurring gaps worth planning around.

| Topic | What went wrong |
| --- | --- |
| Start-up | Many could not identify the boot-up sequence when a computer is switched on |
| Databases | Validation questions separated candidates; many lacked the knowledge |
| Spreadsheets | Some could not describe VLOOKUP, and some wrote formulae with the wrong symbols |
| Connected devices | Many could not expand the letters IoT |
| Legislation | Titles not known precisely enough to earn the mark |
| Health | Answers not tied to the situation described in the question |

Because at least 40 per cent of the assessment must be taken at the end of the course, schools plan when each unit is sat. For the step after the GCSE, [the CCEA Software Systems Development page](/ccea-a-level-software-systems-development-help) covers the A level, and [the Northern Ireland page](/coding-and-ai-classes-in-northern-ireland) sets out the two routes and the whole system from primary school up.

Progression

## Four rungs through Years 11 and 12

Placement follows what a student can already write without help, on screen and on paper.

| Rung | When | What should be true |
| --- | --- | --- |
| 1. Constructs | Year 10 or early Year 11 | Variables, constants, selection, for and while loops, written unaided in Python or Java |
| 2. Arrays and algorithms | Year 11 | One-dimensional arrays in loops with running totals, bubble and insertion sort, linear and binary search, by hand and on screen |
| 3. Data and testing | Year 11 | Binary, hexadecimal and overflow, ASCII and Unicode, validation checks, test plans with valid, invalid and extreme data |
| 4. Exam habits | Year 12 | Long questions answered against numbered bullets, given names used exactly, extended answers in precise terms |

### Rung two is where 2025 slipped

Arrays inside while loops were the weakest area in the report. Weekly handwritten practice closes the gap faster than anything else.

The full order of topics runs down the [coding roadmap](/coding-roadmap).

### Rung four is quick to learn

The bullet-point routine takes a few weeks of practice and then pays on every long question.

Lessons lighten during controlled assessment weeks and before the exams.

The catalogue

## Nine courses for the programming route

Arranged by unit. The free lesson decides the first one.

I

### Programming for Units 4 and 5

The permitted languages

UK / NI1 / 01

#### Python for teens

Constructs, arrays, functions and files, the Unit 5 toolkit in Python.

[Open the syllabus](/courses/python-complete-masterclass-teens)

UK / NI1 / 02

#### Java for teens

The same ground in Java, with the object-oriented ideas Unit 4 asks about.

[Open the syllabus](/courses/java-programming-masterclass-for-teens)

UK / NI1 / 03

#### Game development in C#

Our only C# course, through Unity; useful for a C# school, though games are not the Unit 5 brief.

[Open the syllabus](/courses/complete-game-development-masterclass-for-teens)II

### Algorithms and data

Unit 4 theory

UK / NI2 / 01

#### Problem solving and algorithms

Sorts, searches, arrays and trace tables, by hand first.

[Open the syllabus](/courses/problem-solving-dsa-masterclass-teens)

UK / NI2 / 02

#### GCSE Computer Science

Binary, hexadecimal, character sets and testing theory shared with Unit 4.

[Open the syllabus](/courses/gcse-computer-science-course)

UK / NI2 / 03

#### MySQL for teens

Database design, data types and validation, which Unit 1 examines.

[Open the syllabus](/courses/mysql-mastery-for-teens)III

### Core and beyond

Unit 1 and the A level

UK / NI3 / 01

#### Cybersecurity for teens

Cybercrime, threats and protection for the Unit 1 security questions.

[Open the syllabus](/courses/cybersecurity-course-for-teens-ethical-defensive)

UK / NI3 / 02

#### Data analysis

Spreadsheet formulae and lookups; pitched older, but it covers VLOOKUP properly.

[Open the syllabus](/courses/data-analysis-mastery-course-college)

UK / NI3 / 03

#### Data structures, advanced

For students heading to A level Software Systems Development.

[Open the syllabus](/courses/data-structures-algorithms-masterclass-college)

How lessons work

## Paper first, then the screen

Our teachers work from India on a clock that never changes, so Northern Ireland is four and a half hours behind in summer and five and a half in winter. Slots are fixed in UK time.

After school

Most Year 11 and 12 students choose this.

Evening

Around sport, music or part-time work.

Saturday

Long enough for a timed Unit 4 section and its marking.

### Handwritten algorithms

Every week at least one algorithm written on paper against numbered bullet points, then marked the way the report describes.

### While loops on purpose

Arrays processed with while loops as well as for loops, with counters and running totals checked by dry run.

### Precise words

Extended answers rewritten until generic words like faster are replaced with the correct terms.

### Extreme test data

Every practice test table includes extreme data, the gap the moderators flagged.

### Our own scenarios

Unit 5 skills practised on briefs we write, never on the live task.

### Fifteen to twenty per group

Students at one rung, swapping and marking each other's handwritten answers.

Student work

## Work from our students' lessons

Four projects from classes, none of them assessed work. More in [student labs](/student-labs).

![NutriLife AI nutrition coach project screenshot](/images/projects/nutrilife.webp)

AI and ML

#### NutriLife

An AI nutrition coach that reads what you eat and works you toward a target.

by Bhavya · [Open it](https://nutrilife-bhavya.lovable.app)

![Misti AI chatbot for maths and coding screenshot](/images/projects/misti.webp)

AI and ML

#### Misti

A chatbot that answers mathematics and programming questions, built and deployed by a student.

by Harshit · [Open it](https://misti.modernagecoders.com)

![GuardianX AI internet safety assistant screenshot](/images/projects/guardianx.webp)

AI and ML

#### GuardianX

An assistant that helps a young person recognise unsafe situations online.

by Vivaan · [Open it](https://guardianx-cybersaver.lovable.app)

![SkyCast weather forecast application screenshot](/images/projects/skycast.webp)

Web app

#### SkyCast

A weather forecasting site with live conditions for any location.

by Krish

Fees

## Fees for CCEA lessons

One monthly charge in US dollars, applied to every family outside India. The first lesson costs nothing, and nothing is billed until a course and a weekly slot are fixed.

Free first class

USD 0

no card required

- A lesson on real CCEA-style questions
- A clear view of the right rung
- Just a phone number to book

Book it

Group batch

USD 100

a month, billed in US dollars

- Fifteen to twenty students on one rung
- The same teacher across Years 11 and 12
- Handwritten algorithms marked weekly
- Quieter weeks around controlled assessment

Start here

One to one

USD 150

a month, billed in US dollars

- A teacher for one student
- A plan built back from the exam dates
- Suits a C# school or a late start

Enquire

What families say

## Rated 4.9 across 547 Google reviews

Google reviews from parents, reproduced as written.

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

Questions about CCEA GCSE Digital Technology

## What families in Northern Ireland ask

### How is the programming route assessed?

Unit 1 is a one-hour written exam worth 30 per cent. Unit 4 is a written exam of 1 hour 30 minutes worth 40 per cent. Unit 5 is a controlled assessment worth 30 per cent and 60 marks, done in up to 36 hours.

### Is Unit 4 on screen?

No. It is an external written examination, so algorithms are written by hand. In 2025 it carried 120 marks across ten compulsory questions.

### Where do candidates lose most marks in Unit 4?

According to CCEA's 2025 report: arrays processed inside loops, while loops, running totals, and not following the bullet-pointed requirements or the variable names a question supplies.

### Which languages can be used in Unit 5?

Python, Java or C#, chosen by the school. The solution must be written in one of the three.

### How often does the Unit 5 task change?

Every year. CCEA publishes a new scenario-based task in June, worth 60 marks and taking up to 36 hours.

### What do moderators look for in testing?

Structured test tables with valid, invalid and extreme data, both black box and white box tests, and screenshots only where they show a correction. Extreme data was often missing in 2025.

### Can a tutor help with the controlled assessment?

Not with the task itself. The teacher certifies the work as the candidate's own and may not correct it in detail. We teach the skills beforehand on our own scenarios and never see the live task.

### What is in Unit 1?

Data representation and storage, networks, databases, spreadsheets, security, legislation and the effects of digital technology. It is shared with the multimedia route.

### What comes after the GCSE?

CCEA offers A level Software Systems Development and A level Digital Technology. Our Software Systems Development page covers the first.

### What does it cost?

The first lesson is free. Then a single monthly fee in US dollars, lower for a group place than for one-to-one teaching, as listed in the fees section, with nothing paid ahead.

Elsewhere on this site

## Further reading for Northern Ireland

The system around the GCSE, the A level after it, and choosing at 14.

### [Coding and AI classes in Northern Ireland](/coding-and-ai-classes-in-northern-ireland)

The two routes, the permitted languages, and the whole system.

### [CCEA A level Software Systems Development](/ccea-a-level-software-systems-development-help)

The programming A level that follows this route.

### [Choosing computing at 14](/choosing-gcse-computer-science-year-9-options)

What the evidence says about picking a computing GCSE.

### [Sentinus Young Innovators](/sentinus-young-innovators-coding-help)

Northern Ireland's science and technology showcase for young people.

### [Understand the code, do not copy-paste it](/understand-the-code-dont-copy-paste-uk)

AI tools and assessed work.

### [Coding classes in the UK](/coding-classes-in-united-kingdom)

The hub for every UK page we publish.

Start here

## Book a free first lesson

Leave a number and we will phone at a UK time of your choosing. The lesson uses CCEA-style questions, one of them on paper, and ends with a rung to begin on.

Rather read first? Each [course page](/courses) carries its syllabus, [how we teach](/how-we-teach) is candid about who the method suits, and the [coding roadmap](/coding-roadmap) sets out the order.

[WhatsApp us](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20first%20lesson%20for%20CCEA%20GCSE%20Digital%20Technology%20programming.) · [+91 91233 66161](tel:+919123366161) · [connect@modernagecoders.com](mailto:connect@modernagecoders.com)

WhatsApp is quickest and free from a UK phone. It rings our office in India, so the number starts +91.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/ccea-gcse-digital-technology-programming-help*
