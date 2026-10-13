---
title: "Coding and AI Classes in North East England | Ages 6 to 67"
description: "Live online coding, AI, Python and maths classes across North East England, with pages for Newcastle, Sunderland, Durham, Northumberland and Tyne and Wear."
canonical: https://learn.modernagecoders.com/coding-and-ai-classes-in-north-east-england
source: src/pages/coding-and-ai-classes-in-north-east-england.html
---
> Live online coding, AI, Python and maths classes across North East England, with pages for Newcastle, Sunderland, Durham, Northumberland and Tyne and Wear.

Skip to contentCourses across the North East

## North East starting courses

A Year 2 pupil in Hartlepool who sorts toys into groups, a Year 8 in Gateshead trying Python, a Year 12 in Middlesbrough on A level maths, and a Washington adult learning data skills. Each starts with a free lesson.

[![Coding for Kids course thumbnail](/images/kids-coding.webp)Ages 6 to 12Coding for KidsBlock coding that sorts, groups and labels things.See the syllabus](/courses/kids-coding-blocks-masterclass)[![Python and AI for Kids course thumbnail](/images/python-kids.webp)Ages 9 to 14Python and AI for KidsPython and early AI ideas, classifying real data.See the syllabus](/courses/python-ai-kids-masterclass)[![Python for Teens course thumbnail](/images/python-teens.webp)Ages 13 to 18Python for TeensThorough Python for teenagers, from sorting to data projects.See the syllabus](/courses/python-complete-masterclass-teens)[![Data Analysis Course course thumbnail](/images/data-analysis-college.webp)AdultsData Analysis CoursePython for adults turning raw records into clear findings.See the syllabus](/courses/data-analysis-mastery-course-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Counting the North East

## 2,647,013 people in North East England

Nomis provides the ONS 2021 census count for the region. The table shows ONS built-up areas that lie wholly inside it.

| Place | Usual residents | Place | Usual residents |
| --- | --- | --- | --- |
| Newcastle upon Tyne | 286,445 | Stockton-on-Tees | 84,815 |
| Sunderland | 168,315 | South Shields | 73,345 |
| Middlesbrough | 148,215 | Tynemouth | 60,605 |
| Gateshead | 115,280 | Washington | 51,320 |
| Hartlepool | 87,995 | Durham | 50,510 |
| Wallsend | 45,355 | Redcar | 37,660 |

The ONS lookup lists 12 local authorities in the North East, the smallest count of the English regions. Darlington is not in the table because its built-up area crosses the regional boundary. Classrooms across the region use the English national curriculum, with GCSE and A level papers set by more than one exam board. School holidays differ from council to council, so we simply work to the calendar each family gives us.

Our North East pages, each with a separate local project, link from here once published: [County Durham](/coding-classes-in-county-durham), [Durham](/best-coding-class-in-durham), [Newcastle upon Tyne](/best-coding-class-in-newcastle-upon-tyne), [Northumberland](/coding-classes-in-northumberland), [Sunderland](/best-coding-class-in-sunderland), [Tyne and Wear](/coding-classes-in-tyne-and-wear).

### England and NEA help

Read our [England](/coding-and-ai-classes-in-england) page for the school system, and [A level Computer Science NEA help](/a-level-computer-science-nea-help) for the project year.

The North East project

## Cold, normal or warm, compared with when?

Sort thirty years, cut them into thirds, and label new years by the cuts.

The learner computes each complete year's mean temperature at Durham from its twelve monthly values, skipping 1883 because a month is missing. For a reference period of thirty years, the program sorts the annual means and places two cut points: one between the 10th and 11th coolest years and one between the 20th and 21st. Anything at or below the first cut is cold, anything above the second is warm, and the rest is normal. Then it labels the thirty years from 1991 to 2020 against three different reference periods.

| Reference period | Cut points | Warm years | Normal and cold years |
| --- | --- | --- | --- |
| 1881 to 1910 (29 complete years) | 7.90 and 8.44 C | 28 of 30 | 2 normal, 0 cold |
| 1961 to 1990 | 8.37 and 8.79 C | 25 of 30 | 4 normal, 1 cold |
| 1991 to 2020 itself | 9.27 and 9.77 C | 10 of 30 | 10 normal, 10 cold |

Every row is correct, and together they tell a clear story: Durham's recent years sit well above the older normals. Against 1961 to 1990, all five years from 2021 to 2025 are warm as well, and 2022, at 10.57 degrees, is the warmest complete year in the whole record, while the coldest is 1892 at 7.23. But the last row shows the trap. Terciles built from the same years they classify must split ten, ten and ten, whatever happened. A report that says "a third of recent years were warm" without naming its baseline could be hiding a big shift.

Two programming details matter. The cut points need a rule for where exactly to cut between two ranked years; we take the midpoint, and other rules move the boundary slightly, so the rule must be written down. And a year sitting exactly on a cut needs a tie rule too. The learner writes tests: labels against their own baseline must come out ten, ten and ten, and shifting every year up by a degree must never make any year colder.

### Ages 8 to 11

Sort thirty cards into three piles in Scratch, then see which pile new cards land in.

### Ages 11 to 15

Compute annual means in Python, sort them, find the cuts and label the years.

### Ages 15 and up

Compare baselines, write the tie and cut rules, and test the ten-ten-ten property.

### Met Office data, our labels

The monthly temperatures come from the Met Office Durham file. The annual means, cut points and labels are our calculations, not the Met Office's own classifications.

Why Durham

## Nearly 150 years of monthly temperatures

How the Durham station file describes itself.

| Header line | Content |
| --- | --- |
| Grid position | 426700E 541500N |
| Coordinates | Lat 54.768, Lon -1.585 |
| Altitude | 102 m above mean sea level |
| Earliest month | January 1880 |
| Complete years in 1881 to 1910 | 29 (1883 has a missing month) |

Labels like high, normal and low appear everywhere, from school reports to medical tests to product ratings, and every one depends on a reference group. A learner in North East England who has seen the same year called warm or normal depending on the baseline will always ask what a label is being compared with.

Modern Age Coders is not linked to the Met Office or the ONS. The records are theirs; the terciles and labels here, including any mistake, are ours.

Learning route

## From sorting cards to classification

Treat year bands as a starting guess; the free lesson confirms the level.

Years 1 to 4

### Sorting and grouping

Block coding that sorts and groups objects.

[Coding for Kids](/courses/kids-coding-blocks-masterclass)[Scratch Coding for Kids](/courses/scratch-programming-complete-course)Years 5 to 8

### Sorting in Python

Python lists, sorting and simple labels.

[Python and AI for Kids](/courses/python-ai-kids-masterclass)[Maths Through Coding](/courses/maths-through-coding)Years 9 to 13

### Classification and AI

Quantiles, classification and machine learning basics with GCSE and A level.

[Python for Teens](/courses/python-complete-masterclass-teens)[High School Mathematics](/courses/complete-high-school-mathematics-mastery)Adults

### Honest reporting

Adult Python for analysis and clear, fair summaries.

[Data Analysis Course](/courses/data-analysis-mastery-course-college)[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)AI and labels

## An AI can call a year warm. Compared with which years?

A label without a baseline is only half an answer.

Ask a chatbot whether a recent year was unusually warm and it may answer yes or no without saying which period it compared against. Different baselines can give opposite answers from the same data.

A North East learner who has built terciles against three baselines knows to ask what any label is measured against.

Always checking the yardstick behind a label is a habit a North East teenager builds by coding through 2026. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

Practical details

## From Redcar to Newcastle, all online

Every town in the region can join by video.

### Typing is theirs

The learner writes the code; the tutor looks on via the shared screen and prompts only when useful.

### Placed by school year

A Year 5 in Wallsend or a Year 11 in Stockton-on-Tees joins at the level their year suggests, with exams named by their board.

### First lesson free

A complete trial lesson at no charge, then direct advice.

### Classes at one level

Fifteen to twenty learners per class, all at the same stage, from across the UK.

### Term-time lessons

Two a week in term, none in the holidays.

### UK time kept

The clocks change; your lesson time does not. Our teachers adjust instead.

Why groups meet online

Five learners at one level and one free hour are rarely in the same town. Online, a learner in Redcar or South Shields joins the right class.

Fees

## Fees in the North East

There is one fee for the whole region, and it is the same in every country we teach outside India.

First class**USD 0**

A full lesson free, then an honest recommendation.

Group tuition**USD 100**

About eight lessons each month in a group of fifteen to twenty.

Private tuition**USD 150**

About eight lessons each month with a personal tutor.

Prices are in US dollars only, never sterling. Billing starts once the trial has agreed a course and a weekly slot, and the pricing page explains holidays, missed lessons and switching formats.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20North%20East%20England%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)Reviews

## What North East families say on Google

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

## Book a free North East lesson

Tell us a school year or age and one interest. The trial might be a Scratch sorting game, a first Python program, or the Durham tercile puzzle.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented North East England one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20North%20East%20England%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)

Submitted details are used for placement and follow-up.

FAQ

## North East England questions

Headcounts, the Durham baseline study, and the way classes run.

### What is the population of North East England?

The 2021 census counted 2,647,013 usual residents in the North East region.

### What are the largest places in North East England?

Among ONS built-up areas wholly in the region: Newcastle upon Tyne 286,445, Sunderland 168,315 and Middlesbrough 148,215.

### What is the Durham project?

Learners split reference periods of Durham's annual temperatures into thirds in Python and label 1991 to 2020 as cold, normal or warm against each.

### What are terciles?

The two cut points that divide a sorted set into three equal-sized groups.

### Which was Durham's warmest year?

On our sums of the Met Office file, 2022, at an annual mean of 10.57 degrees.

### Are lessons online?

All classes happen live over video, joined from home.

### What support is there for exam years?

GCSE and A level maths and computing, taught for real understanding; we make no promises about grades.

### Who can join?

Learners aged 6 to 67.

### What does it cost?

Your opening lesson is free of charge; after it a group costs USD 100 monthly and one-to-one tuition USD 150 monthly.

### Are there lessons in school holidays?

No. Tell us your holiday weeks and we skip them.

Other regions

## The other English regions

All eight English regions now have index pages, including [North West England](/coding-and-ai-classes-in-north-west-england) and [Yorkshire and the Humber](/coding-and-ai-classes-in-yorkshire-and-the-humber). The [England](/coding-and-ai-classes-in-england) page explains schools, and the [UK hub](/coding-classes-in-united-kingdom) lists every page.

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20North%20East%20England%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/coding-and-ai-classes-in-north-east-england*
