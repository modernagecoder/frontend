---
title: "Coding Classes in Newham, Stratford, East Ham | Modern Age Coders"
description: "Live online coding, Python, AI and maths lessons for Newham: Stratford, East Ham, Canning Town, Forest Gate, Beckton and the Royal Docks. Ages 6 to 67."
canonical: https://learn.modernagecoders.com/coding-classes-in-newham-london
source: src/pages/coding-classes-in-newham-london.html
---
> Live online coding, Python, AI and maths lessons for Newham: Stratford, East Ham, Canning Town, Forest Gate, Beckton and the Royal Docks. Ages 6 to 67.

Skip to contentCourse picks for Newham

## Four starting courses for Newham

Picture a Year 3 child in Forest Gate who counts planes over the Royal Docks, a Year 8 pupil in Stratford who likes spreadsheets more than they admit, a Year 13 student in East Ham weighing up economics or data science, and a shift worker in Beckton who wants to forecast their own household bills. Any of them can start with a free lesson.

[![Scratch Coding for Kids course thumbnail](/images/scratch-kids.webp)Ages 6 to 10Scratch Coding for KidsAn airport in Scratch where planes arrive on a timetable, and a counter that keeps score month by month.See the syllabus](/courses/scratch-programming-complete-course)[![Python and AI for Kids course thumbnail](/images/python-kids.webp)Ages 9 to 12Python and AI for KidsFirst Python lists: twelve months of passengers, the busiest and quietest month, and a simple bar chart.See the syllabus](/courses/python-ai-kids-masterclass)[![Python for Teens course thumbnail](/images/python-teens.webp)Ages 13 to 18Python for TeensPython for Key Stages 3 to 5, including the Holt-Winters forecast on this page with real CAA data.See the syllabus](/courses/python-complete-masterclass-teens)[![Data and AI Analytics for Non-Programmers (Excel, Sheets, Power BI) course thumbnail](/images/data-ai-analytics-non-programmers.webp)AdultsData and AI Analytics for Non-Programmers (Excel, Sheets, Power BI)For adults who are handed forecasts at work and want to know how one is built and how far to trust it.See the syllabus](/courses/data-and-ai-analytics-for-non-programmers-course)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Newham by the numbers

## 351,036 residents, 125 listed buildings and one airport

The body named beside each figure publishes it, or publishes the data we counted it from.

| What | Number | Source |
| --- | --- | --- |
| Usual residents at the 2021 Census | 351,036 | ONS table TS001 on Nomis |
| Entries on the National Heritage List inside the borough | 125: 4 Grade I, 6 Grade II*, 115 Grade II | Historic England data, counted 25 September 2026 |
| Months of London City Airport passenger data used | 120, January 2016 to December 2025 | Civil Aviation Authority, Table 09 |
| Busiest month in that run | July 2019: 493,486 terminal passengers | Civil Aviation Authority, Table 09 |
| Services listed at Stratford | Central, Jubilee, DLR, Elizabeth line, Mildmay, c2c and Greater Anglia | TfL open data, checked 25 September 2026 |

### Four at Grade I

Historic England lists four Grade I entries inside Newham: the Church of St Mary Magdalene, the Church of St Mary the Virgin, the Church of All Saints, and the Tide Mill known as the House Mill.

### Pumps, theatres and a hotel

Among the six at Grade II* are Abbey Mills Pumping Station, the Theatre Royal, the Gallions Hotel and the former St Mark's Church, now the Brick Lane Music Hall.

### Civic and university

Newham Council Offices and University House at the University of East London's West Ham precinct complete the borough's Grade II* entries.

The data

## Ten years of monthly passengers at London City

Each month the Civil Aviation Authority publishes a table of terminal passengers for every reporting UK airport. We read one row from each of 120 of those tables.

| Month | Terminal passengers | What the month shows |
| --- | --- | --- |
| January 2016 | 297,157 | The start of the series |
| July 2019 | 493,486 | The highest month in the ten years |
| April 2020 | 0 | No passengers recorded |
| June 2020 | 103 | The first figure above zero |
| January 2021 | 6,474 | Still a tiny fraction of normal |
| July 2025 | 351,402 | About 71% of July 2019 |
| December 2025 | 289,450 | The end of the series |

The airport's own published address is on Hartmann Road, E16 2PX, and the postcode directory places that postcode in Newham's Royal Albert ward. We print single months, never yearly totals, because adding twelve monthly rows ourselves would make a figure the Civil Aviation Authority did not publish in that form.

We would have listed Newham's libraries here as well. The council's libraries page refused our automated reader with an access error, and we do not work around such blocks, so this page names none; Newham Council's site is where to look.

Signature project

## A forecast in three moving parts: level, trend and season

Learners write Holt-Winters exponential smoothing from scratch, then test it the only fair way, on a year it has never seen.

### 1. Level

A running estimate of how busy the airport is right now, once the time of year is taken out. Each new month nudges it by a fraction called alpha.

### 2. Trend

How much the level is rising or falling each month. A second fraction, beta, decides how quickly the trend changes its mind.

### 3. Season

Twelve multipliers, one for each month. In 2023 to 2025 January ran at about 0.74 of the typical month and June at about 1.12. A third fraction, gamma, updates them.

| Trained on | Tested on | Holt-Winters | Same month last year | Average of the two |
| --- | --- | --- | --- | --- |
| 2016 to 2018 | 2019 | 5.3% | 5.9% | not tested |
| 2016 to 2019 | 2020 | April forecast 420,639 | April actual 0 | no method could know |
| 2022 to 2024 | 2025 | 4.7% | 4.4% | 2.7% |

Before the pandemic the three-part forecast edges out the simple rule of copying last year's figure for the same month. For 2020 no forecast built from past months could have seen an empty terminal coming, and learners should be told that plainly. The recovery years hold the surprise. The model, having watched passengers climb from 2022 to 2024, carries that climb forward and comes in above the real figure in 11 of the 12 months of 2025. Copying 2024 comes in below the real figure in 11 of the 12. Because their errors point in opposite directions, the plain average of the two is off by only 2.7 per cent a month, better than either alone.

### Why this beats asking a chatbot for a forecast

A language model will happily write the Holt-Winters code, or simply announce a number for next July. Neither tells a learner what matters here: that the three smoothing fractions change the answer enormously (setting alpha to 0.5 instead of our fitted 0.05 pushes the 2025 error from 4.7 to 18.8 per cent), that one bad year can break any model trained on the past, and that two imperfect forecasts can do better together than apart. Those judgements are what a person brings to the machine.

How we tested

## Choosing alpha, beta and gamma without cheating

The smoothing constants are picked using the training years only, and the test year stays locked away until the end.

| Trained on | Alpha (level) | Beta (trend) | Gamma (season) |
| --- | --- | --- | --- |
| 2016 to 2018 | 0.5 | 0.01 | 0.9 |
| 2022 to 2024 | 0.05 | 0.01 | 0.9 |

We tried every combination on a grid of values between 0.01 and 0.9, kept the one with the smallest squared error on the training months, and only then made twelve forecasts for the following year. That order matters: choosing the constants after peeking at the test year would flatter the model, a mistake known as leakage. The average monthly error is the mean absolute percentage error, which says how far off each month was as a share of what really happened. Pupils in Key Stage 4 can follow every step; sixth formers can go on to compare other ways of starting the three parts.

The Civil Aviation Authority, London City Airport, Newham Council, Historic England, TfL and the ONS supplied the figures on this page, and none of them is connected with Modern Age Coders. The passenger counts are the CAA's; the forecasts, error figures and averages are our own work, run on 25 September 2026.

Getting around

## Seven lines at Stratford, and none needed for class

TfL lists seven services at Stratford alone. An online lesson still starts at the kitchen table.

### Stratford

TfL's open data lists the Central and Jubilee lines, the DLR, the Elizabeth line, the Mildmay line, c2c and Greater Anglia at Stratford.

### Docks to Forest Gate

A learner in North Woolwich and another in Manor Park can join the same group from home, whatever the trains are doing.

### No departure board

Classes are not a timetable you must fit. Learners join a group of fifteen to twenty at the same level, at an hour that suits UK evenings.

Newham among the London boroughs

Newham is one of 32 London boroughs. The [London page](/best-coding-class-in-london) lists all of them and the City, linking each page as it goes live, including [Redbridge](/coding-classes-in-redbridge-london) just to the north east.

Learning ladder

## From counting planes to testing a forecast

The free lesson shows us what a learner can already do, and that, rather than their school year, sets the starting rung.

Ages 6 to 10

### Count and compare

Children tally arrivals in Scratch, then spot which months are busy and which are quiet.

[Scratch Coding for Kids](/courses/scratch-programming-complete-course)[Coding for Kids](/courses/kids-coding-blocks-masterclass)Ages 10 to 13

### Averages that move

Python lists and a running average that updates each month, the first step towards smoothing.

[Python and AI for Kids](/courses/python-ai-kids-masterclass)[Maths Through Coding](/courses/maths-through-coding)Ages 13 to 18

### Forecast, then test

Level, trend and season, a fair train and test split, and error measures, strong ground for a computing or maths project.

[Python for Teens](/courses/python-complete-masterclass-teens)[Full Stack Web Development for Teens](/courses/full-stack-web-development-teens-masterclass)Ages 18 to 67

### Read forecasts critically

Adults learn how forecasts are built, why they fail at turning points, and when to combine more than one.

[Data and AI Analytics for Non-Programmers (Excel, Sheets, Power BI)](/courses/data-and-ai-analytics-for-non-programmers-course)[Python Automation Course](/courses/python-ai-automation-masterclass-college)Coding and AI

## Software can forecast in a second. Why should a Newham teenager learn how?

Because a forecast is only useful to someone who knows how, and how badly, it can go wrong.

Every spreadsheet package and AI assistant now offers a forecast button. Press it and a confident line appears, extended neatly into the future. What the button hides is everything on this page: the three constants that decide how quickly the forecast reacts, the training years it learned from, and whether anyone checked it against a year it had not seen. With London City's figures, the same method is off by about 5 per cent in 2019, cannot see 2020 at all, and in 2025 is beaten by copying last year, until the two are blended.

A learner who has built the forecast by hand learns to ask the questions that matter in any job that uses one: what was it trained on, how was it tested, and what would a simpler method have said. Machines will keep producing predictions. Deciding which to believe, and how much, stays with people.

Newham already hosts an airport, a university and one of London's busiest stations. A child here who learns to code and to test a forecast has a skill every one of those places relies on. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

Delivery

## Stratford to Beckton, taught live online

Wherever a learner lives in the borough, class starts when they open the laptop.

### Join from home

A laptop or desktop computer, a headset and a reliable connection are all a learner needs to take part.

### English stages

We describe progress in the stages English schools use, Key Stage 1 through sixth form, and name GCSE and A level where they apply. Lessons are in English.

### A free first lesson

It is a proper lesson with a teacher, not a sales call, and finishes with a suggested level and course. No card details are asked for.

### Grouped by level

Each class has fifteen to twenty learners at the same stage, drawn from across the UK and further afield, so there is usually an hour that suits.

### Twice weekly

Most classes meet on two evenings a week, pausing for half terms, holidays and exam weeks as agreed with the teacher.

### Newham time

Although teachers are based in India, every lesson time we send is written as it reads in London.

A large borough, one well-matched class

More than 350,000 people live in Newham, but a good class depends on five learners sharing a level and an hour, which is why ours draw from far beyond it.

Fees

## Fees for Newham families

One free lesson, then a single monthly fee that is the same in every part of the borough.

First class**USD 0**

A complete first lesson with a teacher, free, ending with a recommended level, course and time.

Group tuition**USD 100**

About eight live lessons a month in a class of fifteen to twenty at one stage.

Private tuition**USD 150**

About eight live lessons a month with a teacher to themselves.

Families in Stratford, East Ham and the rest of Newham pay in US dollars, like every family outside India, and no prices in pounds appear on this site. Nothing is paid until the free lesson is over and you have chosen a course and a regular time. The pricing page explains pauses, missed lessons and moving between class and private teaching.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20want%20a%20free%20coding%20class%20for%20a%20learner%20in%20Newham.)Reviews

## What six families wrote on Google

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

## Request a free lesson

Give us an age or school year and one thing the learner enjoys. The first session might be a Scratch airport, a first Python list, or the passenger forecast on this page.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Newham one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20want%20a%20free%20coding%20class%20for%20a%20learner%20in%20Newham.)

Submitted details are used for placement and follow-up.

FAQ

## Questions from Newham families

On the borough, the airport forecast and how our classes run.

### What is the population of Newham?

At the 2021 Census the London Borough of Newham had 351,036 usual residents, according to Office for National Statistics table TS001.

### Where do the London City Airport passenger figures come from?

From the Civil Aviation Authority's monthly UK airport data. Table 09 in each month's release gives terminal passengers by airport, and we read London City's row for every month from January 2016 to December 2025.

### What is Holt-Winters exponential smoothing?

A forecasting method that keeps three running estimates, the level, the trend and a seasonal multiplier for each month, and updates each by a fixed fraction every time a new figure arrives. Forecasts multiply the projected level by the season for that month.

### Did the forecast predict the pandemic?

No, and no method trained only on past passenger numbers could have. The model trained on 2016 to 2019 expected about 420,639 passengers in April 2020; the Civil Aviation Authority recorded none.

### Why does averaging two forecasts help?

In 2025 the Holt-Winters forecast was too high in 11 months out of 12 and copying 2024 was too low in 11 out of 12. Errors in opposite directions partly cancel, so their average was off by 2.7 per cent a month against 4.7 and 4.4 for each alone.

### When do Newham learners have lessons?

After the free lesson we suggest a regular weekly time from the classes at the right level that have space. Our teachers are in India, but every time we send you is London time.

### What equipment is needed?

A laptop or desktop, headphones or speakers, and a dependable internet connection. The forecasting project needs only Python and the published CAA files.

### Is there a Modern Age Coders centre in Newham?

No. There is no Newham centre and no premises anywhere in the UK, because every lesson is live online. A learner needs a computer with sound and a stable connection, and our phone number is Indian.

### What do coding classes in Newham cost?

The first lesson is free. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, and one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.

### How are the groups made up?

By level, pace and goals rather than by age or neighbourhood, with fifteen to twenty learners at one stage. Where no group fits the learner's week, one-to-one lessons are offered.

Explore London

## More of London and the UK

Every borough and the City appear on the [London page](/best-coding-class-in-london), with links added as pages open, among them [Barnet](/coding-classes-in-barnet-london) in the far north and [Hillingdon](/coding-classes-in-hillingdon-london), home to Heathrow, in the far west. Learners keen on prediction and machine learning can go on to our [AI and machine learning classes in London](/ai-and-machine-learning-classes-in-london), and the [UK coding page](/coding-classes-in-united-kingdom) sets out how school stages differ between the four nations.

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20want%20a%20free%20coding%20class%20for%20a%20learner%20in%20Newham.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/coding-classes-in-newham-london*
