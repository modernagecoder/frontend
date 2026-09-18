---
title: "Best Coding Class in Letterkenny | Modern Age Coders"
description: "Live online coding, Python and AI lessons for Letterkenny learners aged 6 to 67, taught live by a teacher in small ability groups or one to one. First lesson free."
canonical: https://learn.modernagecoders.com/best-coding-class-in-letterkenny
source: src/pages/best-coding-class-in-letterkenny.html
---
> Letterkenny has 22,252 usual residents in the census town tables, the 21st largest of 867 towns, and 8,431 households, 6,875 of them on broadband. Every lesson with us is live on video, twice in most weeks, with a teacher who works through the course with a group of five to ten at the same level or with one learner alone. Anyone from six to sixty-seven can join. The opening lesson is free, and after it a place costs USD 100 a month in a group or USD 150 one to one.

[Home](/) / [Ireland](/coding-classes-in-ireland) / [County Donegal](/coding-classes-in-county-donegal) / Letterkenny

Letterkenny, County Donegal / Live online

# Coding classes in Letterkenny

**What is the best coding class in Letterkenny?** Letterkenny has 22,252 usual residents in the census town tables, the 21st largest of 867 towns, and 8,431 households, 6,875 of them on broadband. Every lesson with us is live on video, twice in most weeks, with a teacher who works through the course with a group of five to ten at the same level or with one learner alone. Anyone from six to sixty-seven can join. The opening lesson is free, and after it a place costs USD 100 a month in a group or USD 150 one to one.

A census table looks like a grid, and it does not arrive as one. The CSO sends the internet access table as a single line of 4,340 numbers: five answer categories multiplied by 868 area labels, one after another, with a short description of which dimension varies fastest. Letterkenny's broadband count, 6,875, is number 688 in that line. A program that reads the description correctly finds it. A program that assumes the dimensions run the other way round reads number 3,440 instead and gets 2, which is the Other row for Ballybrittas in County Laois. A program that is off by one gets 99, the broadband count for Drumkeen down the road. None of those mistakes raises an error. Every one of them was run against the real file while writing this page.

Facts last verified 19 September 2026. Teaching is online; no Letterkenny branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Courses Letterkenny learners begin with

Choose on age and interest, and let the opening lesson with that course's teacher confirm where the learner should start.

- [Coding for Kids](/courses/kids-coding-blocks-masterclass) (Ages 6 to 10): Block coding with lists, where item three and item four are different things and it matters which you pick.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass) (Ages 10 to 13): Python lists and indexes from the start, including why counting begins at zero.
- [Python for Teens](/courses/python-complete-masterclass-teens) (Ages 14 to 18): Real data files, nested structures and the index arithmetic that turns a flat list back into a table.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): For adults pulling data from APIs, where a quietly wrong index is worse than a crash.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## A table is one long list

How the CSO internet access table is actually stored, and what three ways of reading it return for Letterkenny. Every line was run against the downloaded file on 19 September 2026.

**Finding one number in a flat array**

| Step or mistake | What happens |
|---|---|
| The file's own description of its shape | Statistic 1, census year 1, internet answer 5, area label 868: 4,340 values in one array |
| Which dimension varies fastest | The area label, so neighbouring positions hold neighbouring towns for the same answer |
| Correct position for Letterkenny broadband | Answer 0 times 868, plus town 688, gives position 688: the value is 6,875 |
| Dimensions assumed the other way round | Town 688 times 5, plus answer 0, gives position 3,440: the value is 2, the Other row for Ballybrittas, Co Laois |
| One position too far | Position 689 holds 99, the broadband count for Drumkeen, Co Donegal |
| One answer too far | Position 1,556 holds 658, Letterkenny's No row rather than its broadband row |

### The shape is data too

The order of the dimensions and their sizes travel with the numbers. Code that reads them from the file works on the next table; code that assumes them works until the publisher adds one category, and then silently reads the wrong column.

### The dangerous error is the plausible one

Reading 2 for a town of 22,000 people is obviously wrong and gets caught. Reading 99 or 658 might not be. A test that checks one known value against the published table is the cheapest insurance in data work.

### Towns carry identifiers, not just names

Each area label in the file has a 36-character identifier; Letterkenny's begins f5f669fb. Names change, repeat and carry accents. The identifier is what a program should join on.

### Numbers that are really names

The same trap runs the other way. The HSE prints Letterkenny University Hospital's number as 074 912 5888; store that as a number and it becomes 749125888, zero gone, which we checked in code. Phone numbers, eircodes, school roll numbers, account numbers and product codes are identifiers that happen to contain digits. They are never added up, so they should never be stored as numbers. A learner who asks "would I ever do arithmetic on this?" before choosing a type has avoided a whole family of bugs.

The project is a reader for the CSO file format written from scratch, no library. The learner loads the JSON, prints each dimension and its size, writes a function that turns a set of positions into one flat index, and checks it by fetching Letterkenny's five internet answers and confirming they sum to the published total of 8,431. Then they break it on purpose, swapping two dimensions, and write down how quickly they would have noticed if they had not been looking. The last line of the exercise is a single assertion against a known value, kept in the code forever after.

## The numbers at position 688, and around it

Published for the built-up area Letterkenny, Co Donegal, in the Census 2022 small area tables.

**Letterkenny, Census 2022**

| Measured | Count |
|---|---|
| Usual residents | 22,252 |
| Households | 8,431 |
| Households reporting broadband | 6,875 |
| Working residents in the travel table | 9,631 |
| Residents travelling to school, college or childcare | 6,068 |
| Working residents who work from home at least sometimes | 2,574 |

### The work journey

Of the 9,631 working residents, 5,342 drive, 1,281 give home as their main answer, 967 walk, 672 travel as a car passenger, 416 by van, 87 by bus and 66 by bicycle, with 759 not stating.

### The school journey

Of 6,068 journeys to school, college or childcare, 3,069 are as a car passenger, 1,217 by bus, 905 on foot and 245 driving, with 555 not stating.

### Internet in full

The five answers that sit at positions 688, 1,556 and onwards in the file: 6,875 broadband, 658 no internet, 773 not stated and 125 another connection, totalling 8,431 households.

**The hospital** The HSE lists Letterkenny University Hospital at Kilmacrennan Road, Letterkenny, Donegal, F92 AE81. We name it here as the town's largest public institution with a published address, and because its printed phone number carries the leading zero that the project warns about. We have no connection with the hospital.

## Four checks before trusting any value

What the Letterkenny exercise turns into, as a routine for any data file a learner loads.

**Checks that catch indexing mistakes**

| Check | Applied to this file |
|---|---|
| Does the array length equal the product of the dimension sizes? | Yes: 1 times 1 times 5 times 868 is 4,340, the length of the value array |
| Do the parts add up to the published total? | Yes: 6,875 plus 658 plus 773 plus 125 is 8,431, the Total answer for Letterkenny |
| Does a value you already know come back unchanged? | Yes: position 688 returns 6,875, which matches the town profile |
| Is the category order what you assumed? | No: the file lists Broadband, No, Not stated, Other, Total, which is not the order a reader might guess |

### The order of categories is a surprise

Nothing says the answers arrive in a logical order. Here Total comes last and Not stated sits between No and Other. Code that assumes an order instead of reading the labels will mislabel every row it prints.

### The order of towns is a surprise too

The file starts with Carlingford, Co Louth, not with any alphabetical or population order. Position 688 means nothing about Letterkenny except where it happens to sit in this one file.

### Checks cost seconds

Each of the four checks above is one line of code. Together they would have caught every mistake in the project table before a single wrong number reached a report.

**The theatre** An Grianan Theatre describes itself on its own site as an arts, music and comedy venue in Letterkenny, Donegal. We have no connection with it, and none of its prices appears here.

## How the lessons run from here

Two lessons in most weeks, a teacher who is present for all of each one, and work pitched at the learner's level.

### Primary school years

Block coding and games, where lists and positions turn up early and naturally.

### Secondary school years

Python, working websites and AI projects, with real files and real data once the basics are secure.

### Adult learners

Plenty start with no background at all, and 2,574 working residents here already do part of their job from home.

The HSE and An Grianan Theatre are named from their own published pages, and neither has any connection with us, nor does Donegal County Council. Census counts are Central Statistics Office figures for this built-up area, printed as published. The array positions, the wrong-index results and the leading-zero example were all produced by running code on 19 September 2026 against the files and pages quoted, and the page reports what the code returned rather than what it ought to have returned.

## From a list of items to a table in a file

Treat the ages as a starting guess; the opening lesson decides.

- **Ages 6 to 10: First, second, third** Lists and positions in block code, and why picking the right item matters. [Coding for Kids](/courses/kids-coding-blocks-masterclass), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **Ages 11 to 13: Counting from zero** Python lists and indexes, off-by-one errors, and how to test for them. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [Maths Through Coding](/courses/maths-through-coding)
- **Ages 14 to 18: Reading real formats** JSON, nested data and index arithmetic, with checks against known values. [Python for Teens](/courses/python-complete-masterclass-teens), [Data Science for Teens](/courses/data-science-course-for-teens-python-data)
- **Ages 18 to 67: Data pipelines at work** Pulling data from APIs and files and proving the right number came out. [Python Automation Course](/courses/python-ai-automation-masterclass-college), [Data and AI Analytics for Non-Programmers (Excel, Sheets, Power BI)](/courses/data-and-ai-analytics-for-non-programmers-course)

## Ask a model to parse this file

The code will run. Whether it reads the right cell is another question.

Generated parsers for formats like this one often hard-code an assumed dimension order, because the example in the prompt happened to have one. On the next file, or after the publisher adds a category, the same code returns neighbouring values without complaint. It looks finished, it passes a glance, and it reports Drumkeen as Letterkenny.

A learner who has built the reader by hand checks three things in any generated version: that it reads the shape from the file, that it verifies one known value, and that the parts add up to the total. None of those takes more than a minute, and together they turn plausible code into trustworthy code.

Generating a parser takes seconds. Knowing how it could be quietly wrong is the part a person has to supply. The longer argument is in [why coding is worth a young person's time](/blog/is-coding-worth-learning-2026).

## The practical arrangements

What a Letterkenny household needs to know.

- **Live every time** A teacher on the call for the whole lesson, working from what is on the learner's screen.
- **Groups at one level** Five to ten learners at the same stage, joining from Letterkenny, the rest of Ireland and abroad.
- **Most weeks, twice** Roughly eight lessons a month at the hour chosen when the course begins.
- **The school calendar** Holidays, mid-terms and exam weeks are allowed for when the timetable is set.
- **Equipment** A desktop or laptop, a microphone with speakers or a headset, and broadband able to carry an hour of video.
- **One to one** Where a learner's level has no matching group at a sensible hour, the course goes private.

**Stored as written** A learner's contact number goes into our records as text, leading zero and all, for the same reason the project gives. It is a small thing and exactly the kind that breaks otherwise.

## Letterkenny class fees

The whole price list.

- First class: USD 0. An opening lesson, taught in full and assessed, at no charge.
- Group tuition: USD 100 a month. A month in a group of five to ten at one level, about eight live lessons.
- Private tuition: USD 150 a month. A month of private lessons at the same weekly frequency.

The monthly price is set in US dollars and is the same for every household outside India, so there is no euro figure to compare it with. Payment follows the decision, never the other way round: course and hour first, invoice second, and the pricing page explains the awkward weeks, from school holidays to a missed lesson or a change of format.

## Letterkenny coding class questions

### How many people live in Letterkenny?

The Census 2022 small area tables give 22,252 usual residents for the built-up area of Letterkenny, in 8,431 households. Our Donegal page relies on the census town list, a separate product with its own count.

### What is the Letterkenny data project?

Learners write a reader for the CSO data format from scratch, find Letterkenny's broadband count at position 688 of a 4,340-number array, and then deliberately swap two dimensions to see the same code return 2, a figure belonging to a different town and a different answer.

### Why would a program return the wrong town without an error?

Because every position in the array holds a real number. An index that is off by one or built in the wrong order still lands on a valid value, just the wrong one, which is why checking a known value matters.

### How do Letterkenny residents travel to work?

Of the 9,631 working residents in the travel table, 5,342 drive, 1,281 give working mainly at or from home, 967 walk, 672 travel as a car passenger, 416 by van, 87 by bus and 66 by bicycle, with 759 not stating.

### When are lessons scheduled?

After school, in the evening and at weekends. Ireland runs four and a half hours behind India while Irish clocks are forward and five and a half once they fall back, and that gap decides which evening slots we can offer.

### Can adults in Letterkenny sign up?

Yes, up to sixty-seven. Plenty of adults begin with no coding at all, and the opening lesson settles whether they learn in a matched group or with a teacher alone.

### What does counting from zero mean?

Most programming languages number the first item in a list as zero, so the 689th town in the file sits at position 688. It is the most common source of off-by-one mistakes, and the project makes a learner meet it deliberately.

### Is there a Modern Age Coders classroom in Letterkenny?

No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.

### What do coding classes in Letterkenny cost?

The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.

### How many learners are in a group?

Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.

## Around Letterkenny

The county is covered on the [County Donegal](/coding-classes-in-county-donegal) page, part of the three-county [Ulster](/coding-and-ai-classes-in-ulster) page for Cavan, Donegal and Monaghan, with [County Sligo](/coding-classes-in-county-sligo) to the south. To see how we compare with other online providers, [start here](/best-online-coding-classes-ireland), and the [Ireland hub](/coding-classes-in-ireland) gathers every town and county page.

## Contact

Book the free class on [https://learn.modernagecoders.com/best-coding-class-in-letterkenny](https://learn.modernagecoders.com/best-coding-class-in-letterkenny#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email contact@modernagecoders.com. Rated 4.9 across 547 Google reviews.
