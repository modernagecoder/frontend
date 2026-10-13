---
title: "Online Coding and Python Classes in Burwood East, Melbourne"
description: "Live online coding and Python classes for Burwood East children, teenagers and adults, from Scratch to Python statistics and data, in small groups or one to one."
canonical: https://learn.modernagecoders.com/online-coding-and-python-classes-in-burwood-east-melbourne
source: src/pages/online-coding-and-python-classes-in-burwood-east-melbourne.html
---
> Live online coding and Python classes for Burwood East children, teenagers and adults, from Scratch to Python statistics and data, in small groups or one to one.

Skip to contentCourse picks for Burwood East

## Courses where Python meets real numbers

All four courses put Python to work on data and statistics, the toolkit behind the bus headway project. The free first class confirms the level.

[![Python for Teens course thumbnail](/images/python-teens.webp)Ages 13 to 17Python for TeensPython from first lines to the standard library, statistics module included.See the syllabus](/courses/python-complete-masterclass-teens)[![Data Science for Teens course thumbnail](/images/data-science-teens.webp)Ages 13 to 17Data Science for TeensCleaning, summarising and plotting real datasets in Python.See the syllabus](/courses/data-science-course-for-teens-python-data)[![Statistics & Probability course thumbnail](/images/statistics-probability-maths.webp)Ages 15 and upStatistics & ProbabilityAverages, spread and quantiles understood properly, not just computed.See the syllabus](/courses/statistics-probability-maths-course)[![Data Analysis Course course thumbnail](/images/data-analysis-college.webp)University and adultData Analysis CourseSpreadsheets, SQL and Python for summaries a manager can trust.See the syllabus](/courses/data-analysis-mastery-course-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Burwood East in the Census

## A small suburb between two highways

Figures for the Burwood East suburb (ABS code SAL20427) from the 2021 Census QuickStats, next to the Victorian value. The City of Whitehorse page covers the council as a whole.

| Headline | Burwood East |
| --- | --- |
| Residents | 10,675 |
| Median age | 41 |
| Families | 2,982 |
| Private dwellings | 4,469 |
| Average people per household | 2.6 |

| Measure | Burwood East | Victoria |
| --- | --- | --- |
| Separate houses | 73.8% (2,966) | 73.4% |
| Semi-detached, row or terrace houses and townhouses | 18.1% (726) | 13.9% |
| Workers who drove to work | 45.8% (2,298) | 49.9% |
| Workers who took a bus | 1.2% (58) | 0.6% |
| Workers who took the train | 1.1% (53) | 1.6% |

### No station

No metropolitan railway station lies inside the suburb boundary, so local public transport here means buses.

### Townhouses

Nearly one home in five is a townhouse or semi-detached, above the state share of 13.9%.

### Lockdown week

Census night in August 2021 came during a lockdown; 30.6% of employed residents, 1,536 people, worked from home that week.

To protect privacy, the bureau makes small random changes to every cell, so the rows of a table can differ slightly from its total. Figures here are quoted as published and never added together.

Signature project

## Three medians for one bus stop

From the state bus timetable feed we listed every 732 departure from the Tiller Street stop towards Box Hill Bus Station on Wednesday 28 October 2026: 45 buses, the first at 5:52am and the last at 9:03pm. That leaves 44 gaps between buses, from 13 to 31 minutes. Then we asked Python's statistics module to summarise them.

| Python call | Result | What it means |
| --- | --- | --- |
| mean | 20.70 | The arithmetic average gap |
| median | 20.5 | Halfway between the two middle gaps; no gap is 20.5 |
| median_low | 20 | The lower middle value, a gap that really occurs |
| median_high | 21 | The upper middle value, also a real gap |
| mode | 21 | The most common gap, seen 7 times |

| Cut point | method exclusive (default) | method inclusive |
| --- | --- | --- |
| Lower quartile | 17.25 | 17.75 |
| Median | 20.5 | 20.5 |
| Upper quartile | 23.0 | 23.0 |
| 90th percentile | 27.5 | 26.4 |

### Even counts cause it

With 44 gaps there is no single middle value, so the plain median averages the 22nd and 23rd gaps in sorted order, 20 and 21 minutes. median_low and median_high pick one of them instead.

### Which tool agrees

NumPy's default percentile gave 26.4 for the 90th percentile, matching the inclusive method rather than Python's own default.

### The busiest stop

At Eley Road on Blackburn Road three routes, 703, 735 and 736, made 117 departures between them. The median gap there was 7 minutes, and twice two buses left in the same minute.

### Which answer is right?

All of them, for different questions. For a printed figure, the plain median or mean is fine. When the answer must be a value that actually happened, such as a real departure gap to quote to a rider, median_low or median_high is the honest choice. When two people compute quantiles and disagree, the method is the first thing to check.

Times come from the feed downloaded on 10 October 2026 and can change with later timetables. The selection of stop and day, the gaps and every statistic above are our own calculation.

In Python

## Small functions, careful defaults

The statistics module ships with every Python install. Its quantiles function cuts data into n equal-probability groups, and its method argument decides how to treat the ends of the data.

| Function | Returns | Use it when |
| --- | --- | --- |
| median(data) | Middle value, or the mean of the two middles | You want the usual textbook median |
| median_low(data) | The smaller of the two middles | The answer must be a real data point |
| median_high(data) | The larger of the two middles | The same, erring upwards |
| quantiles(data, n=4) | Three cut points, exclusive by default | The data is a sample from something bigger |
| quantiles(data, n=4, method='inclusive') | Cut points treating the data as the whole population | The data is every case there is |

A single Wednesday of departures is arguably the whole population for that day, which makes the inclusive method a reasonable choice here. Treat the same gaps as a sample of all weekdays and the exclusive method fits better. Spreadsheets, NumPy and Python each have their own default, so a summary should always say which one it used.

### Primary learners

Line up cards with bus gaps on them and find the middle by hand, with an odd and then an even count.

### Secondary students

Compute every column of the project table in Python and explain each difference in a sentence.

### Adults

Audit a work report: which quantile method made those numbers, and would another change the story?

Around Burwood East

## Six bus routes and five schools

From the bus feed and the 2025 school locations file.

### Bus stops

On that Wednesday 51 stops inside the suburb had departures, served by routes 703, 732, 733, 735, 736 and 902.

### Government schools

All five schools in the file for Burwood East are government schools, among them Burwood East Primary School, Burwood Heights Primary School and Forest Hill College.

### Older residents

The median age of 41 sits a little above the Victorian median, and households average 2.6 people.

Term 3, 2027

Victorian government schools run Term 3 from Monday 12 July to Friday 17 September 2027, a natural point to start or change a course.

Learning ladder

## From counting cards to Python statistics

Ages are only a guide; the free first class places each learner.

Ages 6 to 10

### Scratch

Games that count, sort and keep score, built from blocks.

[Scratch Coding for Kids](/courses/scratch-programming-complete-course)[Mental Maths for Kids](/courses/mental-maths-mastery-kids)Ages 10 to 14

### Python basics

Lists, sorting and the first averages worked out in code.

[Python and AI for Kids](/courses/python-ai-kids-masterclass)[Maths Through Coding](/courses/maths-through-coding)Ages 13 to 17

### Python and data

The statistics module, NumPy and summaries of real datasets.

[Python for Teens](/courses/python-complete-masterclass-teens)[Data Science for Teens](/courses/data-science-course-for-teens-python-data)University and adult

### Analysis for work

Python, SQL and statistics for reports that hold up.

[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)[Data Analysis Course](/courses/data-analysis-mastery-course-college)Python and AI

## Why learn statistics in Python when an AI will summarise the data?

Because the AI will choose a method for you, silently, and the method can change the answer.

Ask a chatbot for the quartiles of the 732 gaps and it will run some code and report three numbers. Whether the lower quartile comes back as 17.25 or 17.75 depends on a default it may not mention, and a second run with a different library can disagree with the first.

A learner who has seen a median of 20.5 that never occurs knows to ask which median, which method and which library. Those three questions turn an AI summary from a guess into something a report can rely on.

In Burwood East, as anywhere, the learner who can check the numbers is worth more than the one who can only request them. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

Delivery

## How online classes run for Burwood East

Lessons are live video calls, so there is no bus to catch to class.

### On the learner's own computer

Code is written on the learner's machine with the screen shared, so the teacher sees each line as it appears.

### School terms

Courses are planned around Victorian terms, with a pause each holiday.

### Try a full lesson

The free class is a complete lesson, after which the teacher suggests a course and a regular slot.

### Groups at one level

Between five and ten learners at the same stage share each class.

### Fixed weekly times

Two lessons a week at set times, around eight a month, with planned breaks.

### Teachers in India

With teachers in India, a 3:45pm Burwood East class in daylight saving is 10:15am India time, and 11:15am during the Melbourne winter.

Melbourne clocks

Daylight saving in Melbourne began on Sunday 4 October 2026 and ends on Sunday 4 April 2027. India keeps one time all year, so lesson times are always confirmed in Melbourne time.

Fees

## Burwood East class fees

One free lesson and two monthly prices.

First class**USD 0**

The opening lesson costs nothing and finishes with a recommendation.

Group tuition**USD 100**

A month in an level-matched group of fifteen to twenty, usually eight lessons.

Private tuition**USD 150**

Around eight private lessons a month with one teacher.

Outside India, fees are in US dollars, the same for Burwood East as for every other overseas family. Nothing is charged until after the trial, once course and time are settled; holidays, missed lessons and format changes are explained on the pricing page.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20online%20coding%20or%20Python%20class%20for%20a%20learner%20in%20Burwood%20East.)Reviews

## What Google reviewers write about our classes

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

## Book a free Burwood East class

Give us an age and an interest. A six-year-old might start with a scoring game in Scratch; a Year 12 student might start by working out the 732 timetable statistics in Python.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Burwood East one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20online%20coding%20or%20Python%20class%20for%20a%20learner%20in%20Burwood%20East.)

Submitted details are used for placement and follow-up.

FAQ

## Burwood East coding and Python questions

Questions Burwood East families and adult learners send us.

### How many people live in Burwood East?

The 2021 Census QuickStats for the Burwood East suburb record 10,675 residents, 2,982 families and 4,469 private dwellings, with a median age of 41.

### What is the difference between median, median_low and median_high in Python?

With an even number of values, median averages the two middle values, while median_low returns the smaller of them and median_high the larger. With an odd count all three give the same answer.

### What does the method argument in statistics.quantiles do?

It chooses how the cut points are interpolated. The default, exclusive, treats the data as a sample from a larger population; inclusive treats the data as the entire population, and usually gives cut points nearer the middle.

### What did the Burwood East bus project find?

For 44 gaps between 732 buses at Tiller Street, the median was 20.5 minutes, a gap that never occurs, while median_low gave 20 and median_high 21. The lower quartile was 17.25 or 17.75 depending on the method.

### Is Python a good first real language?

For most learners, yes. It reads close to English, runs instantly and has a large standard library, so beginners spend their time on ideas rather than punctuation.

### What do younger Burwood East children start with?

From age six, children start with Scratch, making games that keep score and sort things.

### Do you teach in Burwood East?

Only online. There are no Modern Age Coders premises in Australia, and our listed phone number is Indian.

### What do Python classes cost for Burwood East learners?

The first lesson is free. Group classes then cost USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, and one-to-one classes cost USD 150 a month. The course, format and time are agreed before payment.

### How many learners are in each group?

Fifteen to twenty, grouped on level, pace and goals, with one-to-one lessons when no group time fits.

### Can adults learn Python with you?

Yes. Adults study in their own groups or one to one, often to automate spreadsheets or to analyse data at work with more confidence.

Explore Melbourne and Victoria

## More for Burwood East learners

The [City of Whitehorse page](/online-coding-and-python-classes-in-whitehorse-melbourne) covers the council area that includes Burwood East, and the [Box Hill page](/vibe-coding-and-ai-agents-classes-in-box-hill-melbourne) the centre the 732 runs to. Parents of younger children can begin with [kids coding classes in Melbourne](/coding-classes-for-kids-melbourne), and the [Victoria guide](/coding-and-ai-classes-in-victoria) covers the state.

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20online%20coding%20or%20Python%20class%20for%20a%20learner%20in%20Burwood%20East.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/online-coding-and-python-classes-in-burwood-east-melbourne*
