---
title: "Coding and AI Classes in the East Midlands | Ages 6 to 67"
description: "Live online coding, AI, Python and maths classes across the East Midlands, with pages for Leicester, Nottingham, Derby, Lincoln and every county around them."
canonical: https://learn.modernagecoders.com/coding-and-ai-classes-in-east-midlands
source: src/pages/coding-and-ai-classes-in-east-midlands.html
---
> Live online coding, AI, Python and maths classes across the East Midlands, with pages for Leicester, Nottingham, Derby, Lincoln and every county around them.

Skip to contentCourses across the East Midlands

## East Midlands starting courses

A Year 3 pupil in Mansfield who measures puddles, a Year 9 in Loughborough trying Python, a Year 12 in Northampton on A level maths, and an adult in Chesterfield learning data analysis. Each starts with a free lesson.

[![Coding for Kids course thumbnail](/images/kids-coding.webp)Ages 6 to 12Coding for KidsBlock coding with rain gauges, counting and charts.See the syllabus](/courses/kids-coding-blocks-masterclass)[![Python and AI for Kids course thumbnail](/images/python-kids.webp)Ages 9 to 14Python and AI for KidsPython and early AI ideas built on real measurements.See the syllabus](/courses/python-ai-kids-masterclass)[![Python for Teens course thumbnail](/images/python-teens.webp)Ages 13 to 18Python for TeensComplete Python for teenagers, from lists to data analysis.See the syllabus](/courses/python-complete-masterclass-teens)[![Data Analysis Course course thumbnail](/images/data-analysis-college.webp)AdultsData Analysis CoursePython for adults working with messy real-world data.See the syllabus](/courses/data-analysis-mastery-course-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Numbers for the region

## 4,880,054 people in the East Midlands

The regional total is the 2021 census usual-resident figure from ONS via Nomis. Listed towns are ONS built-up areas contained wholly in the region.

| Town or city | People | Town or city | People |
| --- | --- | --- | --- |
| Leicester | 406,580 | Corby | 68,160 |
| Nottingham | 299,790 | Loughborough | 64,860 |
| Derby | 275,575 | Mansfield | 63,445 |
| Northampton | 243,520 | Kettering | 63,150 |
| Lincoln | 104,555 | Wellingborough | 54,425 |
| Chesterfield | 76,420 |   |   |

There are 35 local authorities in the region on the ONS lookup. Several large built-up areas, including Sheffield's, cross into the region from outside and are left out. Schools teach the national curriculum for England, with GCSEs and A levels from several boards, and term dates are set locally, so families let us know theirs.

Our East Midlands pages each have a project of their own, and link here once they are live: [Derby](/best-coding-class-in-derby), [Derbyshire](/coding-classes-in-derbyshire), Leicester, [Leicestershire](/coding-classes-in-leicestershire), [Lincoln](/best-coding-class-in-lincoln), [Lincolnshire](/coding-classes-in-lincolnshire), [Northamptonshire](/coding-classes-in-northamptonshire), [Nottingham](/best-coding-class-in-nottingham), [Nottinghamshire](/coding-classes-in-nottinghamshire), [Rutland](/coding-classes-in-rutland).

### England and NEA support

Our [England](/coding-and-ai-classes-in-england) page covers schooling, and [A level Computer Science NEA help](/a-level-computer-science-nea-help) covers the project component.

The East Midlands project

## Average then maximum, or maximum then average?

Two orders, two very different answers.

The learner loads thirty complete years of Sutton Bonington rain into a table, one row per year and one column per month. Route one averages each column first, then takes the largest average: June, 63.7 millimetres. Route two takes the largest value in each row first, the wettest month of that year, then averages those thirty maxima: 104.4 millimetres. Both are honest calculations on the same numbers. They answer different questions, and mixing them up leads to badly wrong planning.

| Question | Method | Answer | What it tells you |
| --- | --- | --- | --- |
| Which month is wettest on average? | Average each month, take the largest | June, 63.7 mm | The long-run seasonal pattern |
| How wet is a typical year's wettest month? | Largest month of each year, then average | 104.4 mm | What a single year usually throws at you |
| How often is June the wettest? | Count the wettest month in each year | 8 of 30 years | The wettest month moves around |
| Which months ever top a year? | The same count, all months | Eleven of twelve; never May | Almost any month can be the wettest |

Why is the second answer so much bigger? In any one year, some month is unusually wet, but which month that is changes from year to year. Averaging first smooths those wet spells away, spreading them across the column; taking the maximum first catches each year's wettest spell wherever it falls. So the maximum of the averages is always at most the average of the maxima, and here the gap is about 40 millimetres. The tally makes the point another way: June wins eight times, July and August four each, and even January, December and February have their turns.

This matters far beyond rain. A drain sized for the average wettest month would overflow in most years. A shop stocking for its average busiest day would run out on a typical busy day. The learner writes both routes as functions, tests them on a tiny invented table where the answers can be checked by hand, and adds a check that the first route never exceeds the second. The slip to avoid is quietly using one route and describing it in the words of the other.

### Ages 8 to 11

Make a small table of pretend rain, circle each row's biggest number, and compare the two averages in Scratch.

### Ages 11 to 15

Load the real data in Python, compute both routes and the tally of wettest months.

### Ages 15 and up

Prove the inequality, try it with the driest month, and connect it to sizing drains and stock levels.

### Met Office data, our calculations

The monthly rain totals come from the Met Office Sutton Bonington file. The averages, maxima and tallies are our sums on those values, not official statistics.

Why Sutton Bonington

## A record reaching back to 1959

How the station file describes its site.

| Detail | What the file says |
| --- | --- |
| Grid reference | 450700E 325900N |
| Latitude and longitude | Lat 52.833, Lon -1.250 |
| Height | 48 metres above mean sea level |
| Record starts | January 1959 |
| Years used | All 30 years from 1991 to 2020 complete for rain |

Choosing the right order of operations is one of the quiet skills of data work. Engineers plan for the typical worst case, not the worst average; analysts report which calculation they ran. A learner in the East Midlands who has seen 63.7 become 104.4 just by swapping two steps will read every summary statistic more carefully.

We have no affiliation with the Met Office or the ONS. They publish the data; the calculations here, errors included, are ours.

Stage by stage

## From puddle charts to proofs

The bands below are a sketch; the free lesson decides.

Years 1 to 4

### Tables and charts

Block coding with small tables and bar charts.

[Coding for Kids](/courses/kids-coding-blocks-masterclass)[Scratch Coding for Kids](/courses/scratch-programming-complete-course)Years 5 to 8

### Rows and columns

Python lists and tables, with averages and maxima.

[Python and AI for Kids](/courses/python-ai-kids-masterclass)[Maths Through Coding](/courses/maths-through-coding)Years 9 to 13

### Statistics and proof

Inequalities, distributions and machine learning basics with GCSE and A level.

[Python for Teens](/courses/python-complete-masterclass-teens)[High School Mathematics](/courses/complete-high-school-mathematics-mastery)Adults

### Data you can trust

Adult Python for analysis and clear reporting.

[Data Analysis Course](/courses/data-analysis-mastery-course-college)[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)AI and summaries

## An AI can summarise a dataset. Did it average first or take the maximum first?

The same question in words can hide two different calculations.

Ask a chatbot for the wettest month or the busiest day and it will usually give one number without saying which route produced it. Both routes sound like a fair answer to the question.

An East Midlands learner who has computed both, and seen them differ by 40 millimetres, knows to ask exactly how a summary was made.

Knowing that the order of steps can change the answer is a strong reason for an East Midlands teenager to keep coding in 2026. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

How it works

## From Lincoln to Corby, lessons at home

City or village, a home internet connection is enough.

### The learner types

Every program is typed by the student, with the tutor watching the shared screen and asking rather than telling.

### English year groups

A Year 4 in Kettering or a Year 13 in Wellingborough is placed by year and key stage, with exam names from their board.

### Trial lesson free

The first full lesson is free and ends with plain advice.

### Classes of one level

Fifteen to twenty learners at a single stage, gathered from around the UK.

### Term-time rhythm

Two sessions a week in term and a break for holidays.

### Local time stays

Clock changes do not shift your lesson; our teachers adjust their day.

Why online groups work across the region

Five learners at the same level and free at the same hour are seldom in one town. Online, someone in Loughborough or Mansfield joins exactly the right group.

Fees

## East Midlands fees

Derby and Lincoln pay the same fee, as do all the countries we teach outside India.

First class**USD 0**

A complete free lesson, then our advice.

Group tuition**USD 100**

Roughly eight lessons monthly with five to ten others.

Private tuition**USD 150**

Roughly eight lessons monthly with a personal tutor.

All prices are in US dollars and never in sterling. You are billed only after the trial has chosen a course and weekly slot, and the pricing page explains holidays, missed lessons and format changes.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20the%20East%20Midlands%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)Reviews

## East Midlands families on Google

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

## Book a free East Midlands lesson

Share the learner's school year or age and a favourite topic. The trial could be a Scratch rain chart, a first Python program, or the Sutton Bonington puzzle.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented East Midlands one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20the%20East%20Midlands%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)

Submitted details are used for placement and follow-up.

FAQ

## East Midlands questions

The region, the rainfall project and the details.

### What is the population of the East Midlands?

The 2021 census counted 4,880,054 usual residents in the East Midlands region.

### What are the largest cities in the East Midlands?

Among ONS built-up areas wholly in the region: Leicester 406,580, Nottingham 299,790 and Derby 275,575.

### What is the Sutton Bonington project?

Learners compare the maximum of monthly average rainfall with the average of each year's wettest month in Python, and find a gap of about 40 mm.

### What is the difference between the mean of the maxima and the maximum of the means?

The first finds each group's largest value and averages them; the second averages each column and takes the largest. The first is never smaller.

### How often was June the wettest month at Sutton Bonington?

In 8 of the 30 years from 1991 to 2020, on our count of the Met Office data.

### Are the lessons online?

Yes, all live on video from home.

### Do you help with GCSE and A level?

Yes, in maths and computing. We build understanding and never promise grades.

### Who can join?

Learners from 6 to 67.

### How much are lessons?

Free first lesson; then USD 100 a month in a class or USD 150 a month privately.

### Do lessons continue over the holidays?

No, they pause. Share your holiday weeks with us.

Other regions

## Neighbouring English regions

See the [West Midlands region](/coding-and-ai-classes-in-west-midlands-region), the [East of England](/coding-and-ai-classes-in-east-of-england) and [South East England](/coding-and-ai-classes-in-south-east-england) for more region indexes. The [England](/coding-and-ai-classes-in-england) page explains schooling, and the [UK hub](/coding-classes-in-united-kingdom) lists everything.

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20the%20East%20Midlands%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/coding-and-ai-classes-in-east-midlands*
