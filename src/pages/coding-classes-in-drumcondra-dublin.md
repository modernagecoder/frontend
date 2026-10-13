---
title: "Coding Classes in Drumcondra, Dublin | Modern Age Coders"
description: "Coding, Python, AI and maths lessons for Drumcondra learners aged 6 to 67, taught live online in small groups at one level or one to one. The first lesson is free."
canonical: https://learn.modernagecoders.com/coding-classes-in-drumcondra-dublin
source: src/pages/coding-classes-in-drumcondra-dublin.html
---
> Coding, Python, AI and maths lessons for Drumcondra learners aged 6 to 67, taught live online in small groups at one level or one to one. The first lesson is free.

Skip to contentCourses for Drumcondra

## Four first courses for Drumcondra

Choose by age for now; in the free first lesson the teacher checks the level and recommends a different course if one suits better.

[![Coding for Kids course thumbnail](/images/kids-coding.webp)Ages 6 to 10Coding for KidsBlocks and sound: a volume meter game where one loud clap outweighs a room full of whispers.See the syllabus](/courses/kids-coding-blocks-masterclass)[![Maths Through Coding course thumbnail](/images/maths-through-coding.webp)Ages 10 to 13Maths Through CodingPowers of ten, logarithms and averages, made visible in code before they appear in class.See the syllabus](/courses/maths-through-coding)[![Data Science for Teens course thumbnail](/images/data-science-teens.webp)Ages 13 to 18Data Science for TeensPython with a year of real sensor files: messy formats, two kinds of average, and a chart of the day.See the syllabus](/courses/data-science-course-for-teens-python-data)[![Data and AI Analytics for Non-Programmers (Excel, Sheets, Power BI) course thumbnail](/images/data-ai-analytics-non-programmers.webp)College and adultData and AI Analytics for Non-Programmers (Excel, Sheets, Power BI)For adults who report on measurements like noise, signal strength or earthquakes, where the scale is logarithmic.See the syllabus](/courses/data-and-ai-analytics-for-non-programmers-course)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Signature project

## You cannot average decibels: a year at the Drumcondra sound monitor

The readings are Dublin City Council's 2015 files for its monitor at Drumcondra Library, one A-weighted level for every five minutes. The two averages below use exactly the same readings.

| Period | Plain average | Energy average | Gap |
| --- | --- | --- | --- |
| Whole year | 53.43 | 55.83 | 2.40 |
| Day, 07:00 to 19:00 | 56.66 | 57.70 | 1.04 |
| Evening, 19:00 to 23:00 | 53.74 | 54.79 | 1.05 |
| Night, 23:00 to 07:00 | 48.38 | 50.50 | 2.12 |
| 10 September | 53.9 | 62.5 | 8.6 |

### Why there is a gap

On the decibel scale each step of 10 is ten times the sound energy, and the council's noise plan notes that doubling the energy adds 3 decibels. The loudest reading of the year, 78.64, carries 191 times the energy of 55.83. A plain average treats it as only about 23 decibels more than typical, and lets the many quiet readings outvote it.

### One loud morning

On 10 September eight readings stamped between 06:00 and 06:35 ran from 71.1 to 78.6 decibels. They are eight of the day's 287 readings but hold 81.3 percent of its sound energy. By energy that makes it the loudest day of 2015; by plain average it ranks 154th of 361 full days, near the middle.

### Quiet nights pull hardest

The gap is widest at night, 2.12 decibels, because a quiet background lets an occasional loud moment count for more. The council's plan calls a night level under 50 decibels desirable. The plain average of Drumcondra's 2015 nights, 48.38, is under that line; the energy average, 50.50, is over it.

### Undo the logarithm before you average

A logarithmic scale squeezes a huge range into small numbers, which is useful for reading and wrong for arithmetic. To average decibels, turn each reading back into energy by raising ten to the power of the level over ten, take the ordinary average of those, and convert the result back with ten times the logarithm. The day-evening-night level in the council's own noise plan is built the same way, and fed Drumcondra's 2015 energy averages it gives 59.18 decibels. Fed the plain averages instead it gives 57.68, a mistake of a decibel and a half on a scale where 3 decibels is double.

The learner's program reads 370 daily text files, each with a few comment lines and a line per five-minute reading, and meets three real problems before any maths. The 4 June file separates its columns with tabs instead of commas, so a parser that only splits on commas silently drops all 287 of that day's readings. On 25 October, when the clocks go back, the hour from 01:00 appears twice with different readings, and both are real. And 21 files carry a header placing the unit at a point in north London, 465 kilometres away, although their readings look like every other day's. With those handled, the program has 104,596 readings, 99.5 percent of the year. It then computes both averages for the year, for each hour, for day, evening and night, and for every day, and ranks the days both ways to find where they disagree.

### Where the monitor is

The files give the unit's position as 53.369953 north, 6.259042 west, about 6 metres from the coordinates the council publishes for Drumcondra Library on Millmount Avenue. The council's older 2010 file for the site is named after the library.

### The loudest tenth

The loudest 10 percent of the year's readings hold 34.4 percent of its sound energy, and the loudest 1 percent hold 8.5 percent. On a logarithmic scale a small share of moments can carry a large share of the total.

### Not a cause

The readings record how loud it was at the library, not what made the sound. The page does not guess what happened on the morning of 10 September, or on any other day.

Drumcondra, named

## Drumcondra from its library, its station and the stadium down the road

Each line is taken from the organisation that runs the place.

| Place | What its own source says |
| --- | --- |
| Drumcondra Library | Millmount Avenue, D09 PT78 |
| Drumcondra station | Lower Drumcondra Road, D09 H0V5 |
| Croke Park | Jones Road, D03 P6K7, capacity 82,300 |
| Council sound monitor | Beside the library, one reading every five minutes |

### The library

The council lists Drumcondra Library as open 10:00 to 17:00 on Monday, Wednesday, Friday and Saturday and 12:45 to 20:00 on Tuesday and Thursday, with ramped access and an induction loop for hearing aids.

### The station

Irish Rail gives lifts to both platforms and staffing from 07:00 to 23:00 every day, says there are no bike facilities, and lists trains on the Sligo, Maynooth and M3 Parkway, and Portlaoise routes.

### The stadium

Croke Park, the GAA's ground on Jones Road in Dublin 3, gives its capacity as 82,300, the crowd its two All-Ireland finals draw every September.

What this page does not claim

No population is stated for Drumcondra, because the page uses only what named bodies publish about the place. The sound readings come from one monitor at one spot in 2015 and describe that spot, not the whole district, and nothing here links any reading to the stadium or any other source.

Learning here

## How a Drumcondra learner spends the week

Two lessons in a usual week, each taught live by the teacher from beginning to end.

### Children

Children start with block code and sound games, and find out why one loud noise can outweigh many quiet ones.

### Teenagers

Teenagers go on to Python, websites, AI projects and real sensor files like the noise monitor's, with the maths shown by the code.

### Adults

Adults may begin with no background at all; the first lesson picks the course.

Readings are Dublin City Council's open data for 2015, and the decibel definitions and day-evening-night formula are from the council's noise action plan; every average, share and ranking here was computed by us on 20 September 2026. Library, station and stadium details are quoted from their own pages.

Learning ladder

## From a loudness meter to a logarithm

A band is a first guess; the opening lesson places the learner properly.

Ages 6 to 10

### Loud and quiet

Block-coded meters that react to sound and keep a running score.

[Coding for Kids](/courses/kids-coding-blocks-masterclass)[Scratch Coding for Kids](/courses/scratch-programming-complete-course)Ages 11 to 13

### Powers of ten

Python that turns decibels into energy and back again.

[Python and AI for Kids](/courses/python-ai-kids-masterclass)[Maths Through Coding](/courses/maths-through-coding)Ages 14 to 18

### Real sensor files

Parsing a year of readings, fixing format problems and averaging on the right scale.

[Data Science for Teens](/courses/data-science-course-for-teens-python-data)[Python for Teens](/courses/python-complete-masterclass-teens)Ages 18 to 67

### Measurements at work

Summaries of noise, signal and other logarithmic measures that stand up to checking.

[Data and AI Analytics for Non-Programmers (Excel, Sheets, Power BI)](/courses/data-and-ai-analytics-for-non-programmers-course)[Data Analysis Course](/courses/data-analysis-mastery-course-college)Coding and AI

## Ask an assistant for the average noise level at Drumcondra

The tidy answer is the plain average, and it is too low.

Give an AI assistant the monitor's files and ask for the average noise level in 2015, and a likely first answer reads the column, takes the mean and reports about 53.4 decibels. The code is short and runs cleanly. It is also 2.40 decibels too low, because it averaged a logarithmic unit as if it were a straight one.

The learner who has done this project knows to ask what scale the numbers are on, and to request the energy average instead. They also know to check the files first: an assistant that splits every line on commas will skip the June day written with tabs without saying so.

Knowing the scale your numbers live on is half of data work. The code only does what you ask of it. The longer argument is in [why coding still belongs in a young learner's week](/blog/is-coding-worth-learning-2026).

Delivery

## How lessons run for Drumcondra

The short version.

### Always live

A real teacher is present for every minute, reading and helping with each learner's code as they write it.

### Same stage together

Groups of fifteen to twenty at one stage, drawn from Drumcondra, the rest of Ireland and other countries.

### A fixed pair of days

Lessons fall on the same two weekdays or weekend days, around eight a month.

### School calendar

Holiday weeks, mid-terms and exam time are part of the plan from the start.

### At home

A computer rather than a phone, a microphone, speakers or headphones, and broadband good enough for video.

### Solo lessons

One-to-one teaching for a learner who is ahead, wants extra time, or has hours no group matches.

Online, fully

We have no rooms in Drumcondra, in Dublin or anywhere in Ireland. Every lesson is live on video and works the same from any home.

Fees

## Fees for Drumcondra

Simply put.

First class**USD 0**

An opening lesson at no cost, with a check of the learner's level.

Group tuition**USD 100**

A month in a group of fifteen to twenty at one level, close to eight live lessons.

Private tuition**USD 150**

A month of private lessons, same frequency.

The fee is set in US dollars and is the same for every family outside India, paid a month at a time. Taking the free lesson commits you to nothing and payment only begins with the course; details on holidays, missed lessons and moving between group and private teaching are on the pricing page.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20to%20book%20a%20free%20coding%20lesson%20for%20a%20learner%20in%20Drumcondra.)Reviews

## Six Google reviews from families, word for word

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

## Book a free first lesson in Drumcondra

Share the learner's age and interests and we will plan the first lesson with them in mind. They could leave with a small game, a program that works, or a first look at why loud moments dominate an average.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Drumcondra one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20to%20book%20a%20free%20coding%20lesson%20for%20a%20learner%20in%20Drumcondra.)

Submitted details are used for placement and follow-up.

FAQ

## Drumcondra coding class questions

Questions we hear from Drumcondra families.

### Do you have a centre in Drumcondra?

No. All lessons are live on video, and Modern Age Coders has no premises in Ireland. A learner needs a computer, a microphone and sound, and a steady connection. The contact number shown is an Indian number.

### What is the noise monitor project?

The learner reads Dublin City Council's 2015 files from the sound monitor at Drumcondra Library, 104,596 five-minute readings, and averages them two ways: 53.43 decibels as plain numbers and 55.83 by energy, the correct method for a logarithmic scale. Nights come out on opposite sides of the council's 50-decibel line depending on which is used.

### Does the project say what causes the noise?

No. The monitor records how loud it was, not why. The page reports levels and leaves sources alone.

### Why does the page not give a population for Drumcondra?

District pages print only what named organisations publish about the place itself, here the council, Irish Rail and Croke Park, and none of those publishes a head count for Drumcondra.

### What are the lesson times?

Weekday slots start after school and run into the evening; weekend slots are in the daytime. We schedule in Irish time. Our teachers are in India, four and a half hours ahead of Drumcondra while Ireland is on summer time and five and a half hours ahead in winter, and the slots we offer are chosen to be reasonable for both.

### Can adults take lessons?

Yes, from any starting point and up to age sixty-seven. After the free lesson an adult decides between a group at their level and one-to-one lessons.

### Will my child be in a class with other Drumcondra children?

Not necessarily. We group by level, so the others may live anywhere in Ireland or outside it.

### What do coding classes in Drumcondra cost?

The first lesson is free. After it, a group place costs USD 100 a month for about eight live lessons, two a week, with fifteen to twenty learners, and one-to-one lessons on the same schedule cost USD 150 a month. Terms are settled before any money changes hands.

### What size are the groups?

Between five and ten learners, grouped by level, pace and goals rather than age or area. When no group suits a workable time, the lessons are one to one.

Explore Ireland

## Around Drumcondra

The [Dublin](/best-coding-class-in-dublin) page takes in the whole city. South of the river, [Rathmines](/coding-classes-in-rathmines-dublin) has a project on library loans, and the [Ireland hub](/coding-classes-in-ireland) links every county, town and district page.

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20to%20book%20a%20free%20coding%20lesson%20for%20a%20learner%20in%20Drumcondra.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/coding-classes-in-drumcondra-dublin*
