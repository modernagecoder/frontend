---
title: "ICAS Digital Technologies Practice: Papers by Year Level"
description: "ICAS Digital Technologies for Years 2 to 7: papers, question counts, timing, the six tested areas and a worked spreadsheet lesson, all checked at ICAS."
canonical: https://learn.modernagecoders.com/icas-digital-technologies-practice
source: src/pages/icas-digital-technologies-practice.html
---
> ICAS Digital Technologies is a school-based assessment for Australian students in Years 2 to 7. Year 2 sits the Introductory paper and Years 3 to 7 sit Papers A to E. Papers run from 30 questions in 30 minutes up to 40 questions in 40 minutes, across six areas from digital systems to programming. In 2026 the sitting window was 3 to 7 August, as published by ICAS Assessments.

[Home](/) / [Coding classes in Australia](/coding-classes-in-australia) / ICAS Digital Technologies

Australia · Years 2 to 7 · Checked at ICAS Assessments

# ICAS Digital Technologies practice

ICAS Digital Technologies is one of the few school assessments in Australia that tests everyday digital skill and early programming in the same sitting. A Year 3 student might be asked to find a menu item or follow a short sequence of instructions; a Year 7 student might be asked to desk check a program with test data or sort a table on two columns. This page sets out which paper each year level sits, how long it runs, the six areas it covers and what the hardest questions look like, with every detail checked on the ICAS site. Then it walks through one spreadsheet skill that catches out strong students. We are independent of ICAS.

At a glance: Assessment: ICAS Digital Technologies; Run by: ICAS Assessments; Australian year levels: Years 2 to 7; Papers: Introductory, then A to E; Length: 30 to 40 questions, 30 to 40 minutes; 2026 sitting window: 3 to 7 August; We provide: Preparation classes in the underlying skills; We are not: Part of ICAS or Janison. Rated 4.9 across 547 Google reviews.

## Three courses that build ICAS Digital Technologies skills

Real use of real software, plus the logic behind a program, matter more than memorised terms.

- [Office skills for kids](/courses/microsoft-office-kids-mastery): Word, PowerPoint and Excel used for real tasks, including the spreadsheet formulas ICAS likes to probe.
- [Scratch for kids](/courses/scratch-programming-complete-course): Sequence, loops and conditions made visible, which is where the programming questions begin.
- [Computational thinking](/courses/problem-solving-and-computational-thinking-for-kids): Reading instructions carefully, spotting patterns and tracing steps, before any software at all.

## Which paper each year level sits, and how long it runs

ICAS publishes one paper per year level for Digital Technologies in Australia. The figures below were read on the ICAS year levels page on 7 October 2026.

**ICAS Digital Technologies papers for Australian year levels**

| Australian year level | Paper | Questions | Time allowed |
|---|---|---|---|
| Year 2 | Introductory | 30 | 30 minutes |
| Year 3 | Paper A | 30 | 30 minutes |
| Year 4 | Paper B | 30 | 30 minutes |
| Year 5 | Paper C | 35 | 35 minutes |
| Year 6 | Paper D | 35 | 35 minutes |
| Year 7 | Paper E | 40 | 40 minutes |

Every paper allows roughly one minute per question. That pace matters more than it first appears: a student who spends four minutes on one hard spreadsheet item has quietly given away three other questions. Practising at that rhythm, with a timer on the table, is part of good preparation.

Digital Technologies stops at Year 7 in Australia. Other ICAS subjects such as Mathematics and English run to Year 12, but the Digital Technologies papers are aimed at primary and the first year of secondary school.

The 2026 sitting window for Digital Technologies was 3 to 7 August. ICAS extended school entries for English, Digital Technologies and Writing to Sunday 2 August at 11:59pm AEST, and its site showed entries closed for 2026 when we checked.

Most students sit ICAS through their school. ICAS also lists testing centres for families whose school does not take part; its parents section explains how that works.

Sources: [ICAS year levels and exam papers](https://www.icasassessments.com/icas-year-levels-and-exam-papers/); [ICAS 2026 dates](https://www.icasassessments.com/event-calendar/). Both read on 7 October 2026. Entry fees are set by ICAS and are not shown here.

## The six areas, from Introductory to Paper E

ICAS describes Digital Technologies as more than a computing quiz. Its subject page names six areas, and the assessment framework lists what questions in each may require.

**The six ICAS Digital Technologies areas and how the demand grows**

| Area | Early papers may ask a student to | Paper E may ask a student to |
|---|---|---|
| Digital Systems | Tell software from hardware and name parts of a menu bar | Interpret operating system performance indicators |
| Word Processing | Create a document, cut, copy, paste and save | Work with longer documents and layout conventions |
| Graphics and Multimedia | Resize, rotate and flip a picture; make a simple slideshow | Use concept mapping and brainstorming software |
| Internet and Email | Find a web address and apply simple search terms | Use an HTML editor |
| Spreadsheets and Databases | Read a simple chart; search a simple database | Conduct complex data sorts |
| Programming | Recognise sequence in a set of instructions | Conduct desk checking using test data |

Papers C and D, for Years 5 and 6, carry what ICAS calls harder questions on the same six topics. Its examples include defining file management conventions, explaining what a peripheral is for, making responsible decisions about online data and recognising sequence and loops in pseudocode.

Paper E, for Year 7, adds information systems, integrated multimedia, online collaborative projects, data visualisation and basic programming principles, according to the ICAS description.

The pattern across papers is useful for parents to see. The early papers reward careful reading and familiarity with ordinary software. The later papers reward reasoning: predicting what a program will do, or what a formula will return, before running it.

That second skill is the one most often missing. Students who use software every day can still be unsure what happens when a formula is copied or a loop repeats. The lesson below targets exactly that gap.

Sources: [ICAS Digital Technologies subject page](https://www.icasassessments.com/products-icas/subjects/digital-technologies/); [Reach and ICAS Digital Technologies assessment framework](https://www.icasassessments.com/wp-content/uploads/2023/09/2024_Reach-and-ICAS-Framework-Digital-Technologies.pdf). Read on 7 October 2026. Wording in the table is paraphrased from those pages and kept close to their own terms.

## The spreadsheet formula that breaks when it is filled down

Spreadsheets and Databases is one of the six areas, and one idea in it trips up confident students: what happens to a cell reference when a formula is copied. The example below is ours, written for this page.

### The set-up

A class records house points. Cell B1 holds the points for one event win: 5. Column C, rows 3 to 7, holds how many events each house won. Column D should show each house's points.

### The first try

In D3 a student types =C3*B1 and gets 20 for a house with 4 wins. Correct. Then they fill the formula down to D7, expecting every row to work the same way.

### The surprise

Filling down shifts every reference one row at a time. D4 becomes =C4*B2, D5 becomes =C5*B3, and so on. B2 is empty, so D4 shows 0. The rest go wrong too.

**What each copied formula becomes, with and without the dollar signs (B1 holds 5)**

| Row | Wins in column C | Filled down from =C3*B1 | Result | Filled down from =C3*$B$1 | Result |
|---|---|---|---|---|---|
| 3 | 4 | =C3*B1 | 20 | =C3*$B$1 | 20 |
| 4 | 6 | =C4*B2 | 0 (B2 is empty) | =C4*$B$1 | 30 |
| 5 | 3 | =C5*B3 | 12 (B3 holds the 4 above) | =C5*$B$1 | 15 |
| 6 | 5 | =C6*B4 | 30 (B4 holds 6) | =C6*$B$1 | 25 |
| 7 | 2 | =C7*B5 | 6 (B5 holds 3) | =C7*$B$1 | 10 |

In our set-up, column B under the heading repeats the win counts as a helper column, which is why the broken formulas return believable numbers rather than errors. That is the dangerous case: 12, 30 and 6 look like real answers. The dollar signs in $B$1 tell the spreadsheet to keep pointing at exactly B1 however far the formula travels, which is called an absolute reference. A reference without them, like C3, is relative: it moves with the formula, which is exactly what you want for the wins column and exactly what you do not want for the points value.

### How to check without a computer

Before filling down, say aloud what the formula should look like two rows lower. If the answer is "C5 times B1", then B1 must not move, so it needs to be absolute. This habit is the spreadsheet version of desk checking, and it is the same reasoning a question on a paper will ask for.

A quick sense check also helps. If every house earns 5 points per win, every result must be a multiple of 5. The broken column contains 12 and 6, which cannot be right.

### Why it matters beyond the test

The same idea, that some values are fixed and others move with each row, appears later in programming as the difference between a constant and a loop variable. Students who understand it in a spreadsheet usually meet it in code with less confusion.

It is also a real-world skill. Budgets, marking sheets and science results are all built by filling formulas down, and a single missing dollar sign can quietly corrupt a whole column.

## How we prepare students, and what we leave out

The aim is digital confidence that lasts after August, not a memory of last year's questions.

Lessons use real software for real tasks: a short report with a picture and a caption, a slideshow with a consistent layout, a spreadsheet of class data that has to be sorted and charted. Students then explain what they did and why, because explaining is how the reasoning questions are won.

For the Programming area, students build small projects in Scratch first and later read short pseudocode, predicting each step before it runs. Desk checking with test data is introduced from around Year 6, when Paper E is on the horizon.

ICAS sells past papers on its own site. We do not reproduce them or any ICAS questions; every practice item we use is written by us in a similar spirit.

We do not promise a High Distinction, a medal or any particular result. ICAS sets its own achievement levels, and a single sitting is a narrow sample of what a child can do.

**A six-week build-up before an August sitting**

| Week | Focus | Evidence it is working |
|---|---|---|
| 1 | Everyday software: files, folders, menus, saving | Finds and renames a file without help |
| 2 | Documents and slides with consistent formatting | Explains why one layout is clearer than another |
| 3 | Spreadsheets: sorting, simple formulas, references | Predicts a filled-down formula before running it |
| 4 | Searching and safe online habits | Chooses search terms that narrow results sensibly |
| 5 | Sequence, loops and pseudocode | Traces a short program step by step on paper |
| 6 | Mixed timed practice at about a minute a question | Finishes a set without rushing the last few items |

## Four rungs from Year 2 to Year 7

Year levels are a guide; the rung a child stands on matters more.

**From first clicks to reasoning about programs**

| Around | Rung | The sign it is secure |
|---|---|---|
| Years 2 and 3 | 1. Confident with everyday software | Opens, edits and saves work without being shown |
| Years 3 and 4 | 2. Organising information | Sorts a list or table and explains the order chosen |
| Years 5 and 6 | 3. Following and fixing instructions | Spots the step that makes a sequence or loop go wrong |
| Year 7 | 4. Predicting before running | States what a formula or program will output, then checks |

### If a result disappoints

Look at which areas lost marks. A weak score in Spreadsheets and Databases with strong Programming tells a very different story from the reverse.
Most gaps close with regular use of real software, not with more test papers.

### Related reading

Our [Australian competitions calendar](/australian-coding-maths-and-ai-competitions-calendar) shows where ICAS sits among Bebras, the CAT and the AMC.
For younger coders, see [online coding classes for kids in Australia](/online-coding-classes-for-kids-australia).

## Nine courses for the six ICAS areas

Grouped by the kind of skill they build. Every card opens a full syllabus.

### Everyday digital skill

Documents, slides and spreadsheets

- [Office skills for kids](/courses/microsoft-office-kids-mastery): Word, PowerPoint and Excel with purpose.
- [Web development for kids](/courses/kids-ai-web-development-course): How web pages are built, from the inside.
- [HTML and CSS](/courses/html-css-course-for-beginners-build-real-websites): The editor skills Paper E hints at.

### First programming

Sequence, loops and conditions

- [Scratch for kids](/courses/scratch-programming-complete-course): Programs you can see run.
- [Coding for kids](/courses/kids-coding-blocks-masterclass): Blocks to games, apps and simple AI.
- [Python and AI for kids](/courses/python-ai-kids-masterclass): A first text-based language from about age 9.

### Reasoning

Thinking before clicking

- [Computational thinking](/courses/problem-solving-and-computational-thinking-for-kids): Patterns, logic and careful reading.
- [Maths through coding](/courses/maths-through-coding): Formulas and variables that make sense.
- [Mental maths for kids](/courses/mental-maths-mastery-kids): Quick sense checks on any answer.

## Live classes after school, from India

Our teachers work from India, which sits behind Australia on the clock: Sydney is four and a half hours ahead of India time in winter and five and a half in summer, while Perth is two and a half hours ahead all year. An Australian after-school class therefore lands in the Indian working afternoon, which makes weekday lessons straightforward to arrange.

- **After school on a weekday** Short, regular practice with real software.
- **Saturday morning** A longer project session, such as a full spreadsheet task.
- **June and July** Mixed timed practice ahead of an August sitting.

- **Real tasks** Every skill is practised on something a child actually wants to make.
- **Our own practice** Questions written by us, never copied from ICAS papers.
- **Predict, then run** Students say what will happen before they click.
- **Groups of fifteen to twenty** Children at a similar level comparing answers and methods.
- **One-to-one option** For a child who needs a particular area rebuilt.
- **No result promised** We teach the skills; ICAS sets and marks the assessment.

## Fees

Lessons are billed monthly in US dollars at our international rate. There is no joining fee and no long contract. The ICAS entry fee, if a family pays one, goes to ICAS and has nothing to do with us.

- Free first class: USD 0. A real first lesson with a teacher. A short look at which areas need work. No card details asked.
- Group batch: USD 100 a month. Fifteen to twenty children at one level. One teacher across the term. Spreadsheet and coding tasks reviewed together. A certificate at the end.
- One to one: USD 150 a month. A teacher working with one child. A plan built around the weaker areas. Weekly times chosen with you.

## What parents ask us

### What is ICAS Digital Technologies?

An assessment run by ICAS Assessments that tests digital literacy and early programming. In Australia it is offered for Years 2 to 7, with one paper per year level.

### Which paper does my child sit?

Year 2 sits the Introductory paper, Year 3 Paper A, Year 4 Paper B, Year 5 Paper C, Year 6 Paper D and Year 7 Paper E, according to ICAS.

### How long is each paper?

The Introductory paper and Papers A and B have 30 questions in 30 minutes, Papers C and D have 35 questions in 35 minutes, and Paper E has 40 in 40 minutes.

### When is ICAS Digital Technologies held?

In 2026 the sitting window was 3 to 7 August. ICAS publishes each year's dates on its own calendar page, which is the place to check for 2027.

### Does it involve coding?

Yes, as one of six areas. Younger papers ask students to recognise sequence in instructions; older papers include loops in pseudocode and, in Paper E, desk checking with test data.

### What is an absolute cell reference?

A spreadsheet reference written with dollar signs, such as $B$1, that keeps pointing at the same cell when a formula is copied. A reference without them moves with the formula.

### Can my child sit ICAS if their school does not run it?

ICAS lists testing centres for families in that situation. Its parents section explains how entry works outside school.

### Do you use ICAS past papers?

No. ICAS sells its own past papers. We write our own practice questions and never reproduce ICAS material.

### Will lessons guarantee a High Distinction?

No. ICAS decides its achievement levels. We teach the skills the papers test and help children work calmly at about a minute a question.

### What happens in the free first lesson?

Your child tries a short spreadsheet and a short coding task with a teacher, and you get an honest view of which areas are strong and which need practice.

## More for Australian families

- [Competitions calendar](/australian-coding-maths-and-ai-competitions-calendar): Every coding and maths contest by month.
- [Coding classes for kids](/online-coding-classes-for-kids-australia): What a live online class looks like.
- [Kids coding languages](/kids-coding-languages-australia): Scratch, Python and the rest, compared.
- [NAPLAN numeracy](/naplan-numeracy-practice-online): How the tailored test works.
- [Coding classes in Australia](/coding-classes-in-australia): Every state and every age.
- [AMT competitions](/australian-maths-trust-amc-aio-cat-preparation): Bebras, the CAT, the AMC and the AIO.

## Contact

Book the free first class at [https://learn.modernagecoders.com/icas-digital-technologies-practice](https://learn.modernagecoders.com/icas-digital-technologies-practice#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
