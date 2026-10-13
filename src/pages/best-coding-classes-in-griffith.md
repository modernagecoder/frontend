---
title: "Best Coding Classes in Griffith NSW | Live Online Lessons"
description: "Coding classes for Griffith teenagers and adults, live online: Python, sorting and the logic of real address data from the Riverina. The first lesson is free."
canonical: https://learn.modernagecoders.com/best-coding-classes-in-griffith
source: src/pages/best-coding-classes-in-griffith.html
---
> The most useful coding classes for Griffith teenagers and adults teach Python through problems where the obvious answer is wrong, then show how to fix it. The 2021 Census counted 20,569 people in the Griffith urban area, with a median age of 37. Lessons are live online with a teacher, in a small group or one to one, and the first is free.

[Home](/) / [Australia](/coding-classes-in-australia) / [New South Wales](/coding-and-ai-classes-in-new-south-wales) / Griffith

Griffith, New South Wales, Australia / Live online

# Coding classes in Griffith

**What do the best coding classes in Griffith teach?** The most useful coding classes for Griffith teenagers and adults teach Python through problems where the obvious answer is wrong, then show how to fix it. The 2021 Census counted 20,569 people in the Griffith urban area, with a median age of 37. Lessons are live online with a teacher, in a small group or one to one, and the first is free.

Ask a computer to sort the house numbers 2, 10 and 12A and, if the numbers are stored as text, it answers 10, 12A, 2. It compares text one character at a time, and the character 1 comes before 2. People expect 2, 10, 12A. We took the house numbers on every Griffith street from the state's address points and sorted them three ways. The computer's default order and the human one disagree on 261 of the city's 349 streets. A second, smaller disagreement appears once units are involved: should unit 1 at number 12 sit before house 2, or after house 12? Writing a sort that matches how people actually walk down a street is a short Python exercise that teaches more about data than most textbook examples.

Facts last verified 10 October 2026. Teaching is online; no Griffith branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 15 to 20 students per group.

## Courses where data has to make sense to people

Every course reaches projects like the house number sort. Begin with the free trial, which needs no card.

- [Python for Teens](/courses/python-complete-masterclass-teens) (Ages 13 to 17): Python basics through to sorting, string handling and custom sort keys on real data.
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data) (Ages 13 to 17): Cleaning messy real-world data in Python before any analysis begins.
- [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college) (University and adult): Python from the start to advanced topics, including regular expressions and sort keys.
- [MySQL Course](/courses/mysql-database-complete-masterclass-college) (Adults): Databases and SQL, including why text columns sort numbers in surprising orders.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## A working Riverina city with young families

The Griffith Significant Urban Area at the 2021 Census, with New South Wales and Australia alongside.

**Griffith urban area: core 2021 counts**

| Measure | Griffith |
|---|---|
| Residents | 20,569 |
| Median age | 37 |
| Families | 5,279 |
| Private dwellings | 8,272 |
| Average people per household | 2.6 |
| Area of the urban area | about 56.3 square kilometres |

**Griffith compared with New South Wales and Australia**

| Measure | Griffith | NSW | Australia |
|---|---|---|---|
| Employed residents working full-time | 6,731 (63.2%) | 55.2% | 55.9% |
| Labourers among employed residents | 2,155 (20.9%) | 8.2% | 9.0% |
| Travelled to work driving a car | 7,552 (73.3%) | 43.1% | 52.7% |
| Children aged 0 to 4 | 1,380 (6.7%) | 5.8% | 5.8% |
| Separate houses among occupied homes | 5,771 (80.4%) | 65.6% | 72.3% |

### Full-time work

Almost two in three employed residents work full-time, eight points above the state.

### Labouring jobs

Labourers are 20.9% of employed residents, about two and a half times the New South Wales share.

### One locality

Of the bureau localities, only Griffith itself lies almost entirely inside the urban area; neighbouring Yoogali is mostly outside.

Census cells are perturbed slightly for privacy, so components need not add to totals. We print every figure as the bureau did.

## Why does the computer put house 10 before house 2?

One list of house numbers, three sort orders. Learners write the second and third.

**Six house numbers sorted three ways**

| Method | Result | How it compares |
|---|---|---|
| Text order (default) | 1/12, 10, 12, 12A, 2, 3 | Character by character |
| Natural order | 1/12, 2, 3, 10, 12, 12A | Digit runs as numbers |
| Address order | 2, 3, 10, 12, 1/12, 12A | Street number first, unit second |

**Griffith house numbers from state address points (our count)**

| Measure | Count |
|---|---|
| Address points inside the urban area | 10,587 |
| Addressed to Griffith with a house number | 9,880 |
| Streets | 349 |
| Plain numbers such as 14 | 7,391 |
| Unit numbers such as 2/14 | 1,619 |
| Numbers with a letter such as 14A | 534 |
| Ranges such as 14-16 | 327 |
| Streets where text and natural order differ | 261 |
| Street positions that change between the two orders | 8,894 of 9,786 |
| Streets where natural and address order differ | 104 |

### Text order

Python's plain sorted compares strings character by character, so every number starting with 1 comes before every number starting with 2.

### Natural order

Split each value into runs of digits and letters, and compare digit runs as whole numbers. Now 2 comes before 10, and 12 before 12A.

### Address order

Read the number after the slash as the street number and the one before it as the unit, so unit 1 at 12 sits with house 12.

### Three right answers to different questions

Natural order fixes the 10-before-2 problem, yet it still puts 1/12 first because it reads the unit number as the start. Address order disagrees with natural order on 104 streets. Banna Avenue, with 318 distinct house numbers, shows every kind of difference. Choosing the sort key means deciding what the data means, which is a human decision, not a coding trick.

House numbers come from NSW Spatial Services address points, copyright Spatial Services, kept where the point falls inside the bureau's Griffith urban area and the address names Griffith. 217 points with no house number were left out, and a handful of unusual mixed forms are not shown in the table. We publish counts and street names only, never full addresses; the sorting and every count are our own.

## One key function, three behaviours

In Python the whole difference is the key passed to sorted, which makes this a perfect first lesson in thinking about data.

The natural key uses a regular expression to split "12A" into the number 12 and the letter A, and returns a list Python can compare. The address key first splits on the slash, puts the street number before the unit, and then applies the natural key to each part. Learners test both on the Griffith lists, measure how many positions move, and then look for values that break their key, such as ranges with letters at both ends. The same issue appears in file names, invoice codes and version numbers, so the lesson travels well beyond addresses.

### Teenagers

Sort a list of house numbers, spot the wrong order, and write a key function that fixes it.

### University students

Prove the key gives a consistent order, handle every unusual form and compare speeds on large lists.

### Adults

Fix the order of product codes, invoices or file names in a spreadsheet export with a few lines of Python.

NSW Spatial Services, the Australian Bureau of Statistics and Griffith City Council have no association with Modern Age Coders. The address points and boundaries are theirs; the sort keys and counts on this page are ours.

## Fitting lessons around a Riverina week

Griffith keeps eastern Australian time, with summer daylight saving.

### Summer and winter

Clocks in Griffith move forward on Sunday 4 October 2026 and back on Sunday 4 April 2027.

### India time

Teachers in India are five and a half hours behind Griffith in summer and four and a half in winter, so a 4:30pm class is 11am or noon for them.

### School holidays

New South Wales Term 4 of 2027 runs from Monday 11 October to Monday 20 December, and lessons can pause around holidays.

## From first lists to clean data

The ages are a guide, and the free lesson finds the right starting step.

- **Ages 13 to 14: Lists and order** Python lists, sorting and the surprise of sorting numbers stored as text. [Python for Teens](/courses/python-complete-masterclass-teens), [Maths Through Coding](/courses/maths-through-coding)
- **Ages 15 to 18: Messy data** Regular expressions, key functions and cleaning real data files before using them. [Data Science for Teens](/courses/data-science-course-for-teens-python-data), [Problem Solving for Teens](/courses/problem-solving-dsa-masterclass-teens)
- **University: Ordering in depth** Total orders, stable sorts and how sorting algorithms rely on a consistent key. [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college), [Data Structures & Algorithms Course](/courses/data-structures-algorithms-masterclass-college)
- **Adults: Data at work** Databases, spreadsheet exports and reports that list things in the order people expect. [MySQL Course](/courses/mysql-database-complete-masterclass-college), [Data Analysis Course](/courses/data-analysis-mastery-course-college)

## An AI assistant can write a sort in one line. Why should Griffith learners care how?

Because the one line it writes may sort text, not numbers, and the result looks almost right.

Generated code may simply call sorted on whatever it is given. For house numbers stored as text, the output then puts 10 before 2 on most streets, and nothing in the program reports an error. Asked for a natural sort, an assistant may still put units in the wrong place, because whether 1/12 belongs before 2 or after 12 depends on what the data means, not on the code.

Our Griffith learners see all three orders on their own city's streets, write the keys themselves and learn to test a sort with awkward values. That turns generated code from something they accept into something they can check.

Code takes seconds to produce in 2026; noticing that it sorts the wrong way still needs someone who knows what the data means. The longer argument is in [why coding remains worth learning in 2026](/blog/is-coding-worth-learning-2026).

## How Griffith lessons work

All lessons are live video classes, so learners in Griffith and nearby towns join from home.

- **At home** A computer with a microphone and a reliable internet connection is all that is needed.
- **NSW school years** Teachers plan with New South Wales year levels and terms in mind, teaching in English.
- **Trial first** The free trial is a real class that finishes with a recommended course and weekly time.
- **Matched groups** Fifteen to twenty learners at the same level share a group, from across Australia.
- **Two lessons weekly** Groups meet twice a week on set days, roughly eight lessons a month.
- **Our teachers** Teachers work from India, and every lesson time is written in Griffith time.

**Shift workers welcome** Adults with changing rosters can book one-to-one lessons and move them with notice.

## Griffith class fees

Pricing is brief and the same throughout Australia.

- First class: USD 0. The first lesson is free and ends with a recommended level, course and time.
- Group tuition: USD 100 a month. A month of group lessons, roughly eight, with fifteen to twenty learners of similar level.
- Private tuition: USD 150 a month. Roughly eight private lessons each month with one teacher.

Fees outside India are in US dollars, and Griffith learners pay the same as learners anywhere in Australia. Payment begins only after the trial has fixed the course and time, and the pricing page explains holidays, absences and moving between group and private.

## Griffith coding class questions

### What is natural sort order?

Natural sort order compares runs of digits as whole numbers instead of character by character, so 2 comes before 10 and 12 comes before 12A.

### How often does the computer's order differ in Griffith?

Plain text order and natural order disagree on 261 of 349 Griffith streets, by our count from state address points.

### How many people live in Griffith?

The 2021 Census counted 20,569 people in the Griffith urban area, with a median age of 37.

### Which Griffith street has the most house numbers?

Banna Avenue, with 318 distinct house numbers among the address points we used.

### Do you help senior students in Griffith?

Yes, with programming and problem solving for senior computing subjects, planned around NSW terms. Assessed work always stays the student's own.

### What times suit Griffith learners?

After-school weekday slots and Saturday mornings are popular, all agreed in Griffith time.

### Can younger children start coding?

Yes. Children from age six begin with Scratch and block coding; the sorting project suits teenagers and adults.

### Is there a Modern Age Coders centre in Griffith?

No. We run no premises in Australia and claim none. All classes are live online; learners need a computer and a dependable connection, and our listed phone number is in India.

### What do Griffith coding classes cost?

The first lesson is free. Then a group place is USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, or USD 150 a month one-to-one. Everything is agreed before any payment.

### How many learners are in each group?

Fifteen to twenty, grouped by level and aims rather than age or town. If no group time suits, one-to-one lessons are offered.

## More from the Riverina

All New South Wales pages are listed in our [NSW state guide](/coding-and-ai-classes-in-new-south-wales). Elsewhere in the Riverina, see [coding classes in Wagga Wagga](/best-coding-classes-in-wagga-wagga), and over the border [AI and programming in Mildura](/ai-and-programming-classes-in-mildura). For the case against copying code you do not understand, read [understand the code, don't copy and paste it](/understand-the-code-dont-copy-paste-australia).

## Contact

Book the free class on [https://learn.modernagecoders.com/best-coding-classes-in-griffith](https://learn.modernagecoders.com/best-coding-classes-in-griffith#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
