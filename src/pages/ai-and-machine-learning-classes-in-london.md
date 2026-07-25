---
title: "AI and Machine Learning Classes in London | Build AI"
description: "Live online AI and machine learning classes for students in London, ages 6 to 67. Train real models in Python, not just prompts. From about 30 pounds a month."
canonical: https://learn.modernagecoders.com/ai-and-machine-learning-classes-in-london
source: src/pages/ai-and-machine-learning-classes-in-london.html
provider: Modern Age Coders
areaServed: London, United Kingdom
ages: 6 to 67
---

> Modern Age Coders teaches live online AI and machine learning to learners in London, from age 6
> to age 67, in rooms of five to eight or privately. The subject here is model building. Python
> comes first, then the statistics and linear algebra a model rests on, then training, measuring
> and correcting something real on published data. A group place is USD 40 a month, roughly £30 at
> the Bank of England rate for 23 July 2026, and one to one teaching is USD 100, roughly £75. The
> Saturday 10:00 to 12:00 London slot is the one most families take, and the first class costs
> nothing.

## Direct answers

**What time are the classes in London?**
Saturday 10:00 to 12:00 London time is the flagship slot. Weekday slots run 17:30 to 19:00 and
19:30 to 21:00, London time. We publish London time as the fixed anchor. British Summer Time ends
on Sunday 25 October 2026 and India observes no daylight saving, so a timetable pinned to Indian
Standard Time would slide by an hour for London families that weekend. We move the Indian side
instead.

**What makes this different from other AI courses sold in London?**
Most of them teach prompting. This teaches model building: sourcing data, screening it, choosing a
model, training it, reporting the error in a unit anyone can check, then improving it. Prompting is
knowledge of a product. Modelling is knowledge of a method, and the foundations under it are
mathematical.

**What does it cost?**
Group batch of five to eight learners: USD 40 a month, about £30. One to one: USD 100 a month,
about £75. Sterling figures use the Bank of England spot rate XUDLUSS at 1.3320 US dollars per £1
on 23 July 2026, a series quoted as dollars per pound, so the dollar figure is divided rather than
multiplied. First class free, no card.

**What ages do you take?**
6 to 67, in three distinct curricula rather than one syllabus delivered at three speeds.

## Courses, by age band

### Children, ages 6 to 12
- [Python and AI for Kids](/courses/python-ai-kids-masterclass)
- [AI Literacy for Kids](/courses/ai-literacy-for-kids-course)
- [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)

### Teenagers, ages 13 to 18
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens)
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data)
- [Python for Teens](/courses/python-complete-masterclass-teens)
- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course)

### University students and working professionals
- [AI and Machine Learning Masterclass](/courses/ai-ml-masterclass-complete-college)
- [Generative AI: LLMs, RAG and Agents](/courses/complete-generative-ai-masterclass-college)
- [Python and AI Automation](/courses/python-ai-automation-masterclass-college)
- [Data Science Masterclass](/courses/data-science-complete-masterclass-college)
- [Data Structures and Algorithms](/courses/data-structures-algorithms-masterclass-college)

Full catalogue: [/courses](/courses)

## The first project: London cycle hire against Heathrow weather

Two published sources joined on year and month. Transport for London publishes daily Santander
Cycles hire counts on the London Datastore under the Open Government Licence, every day since the
scheme opened on 30 July 2010. The Met Office publishes monthly historic station data for Heathrow,
latitude 51.479, longitude -0.449, twenty five metres above mean sea level, with records from 1948.

| Month, 2025 | Hires | Mean daily max, degC | Rain, mm | Sunshine, hours |
|---|---|---|---|---|
| January | 567,948 | 7.3 | 80.4 | 51.9 |
| February | 574,179 | 8.8 | 44.2 | 67.4 |
| March | 774,887 | 14.1 | 4.4 | 187.9 |
| April | 761,213 | 18.3 | 18.8 | 252.3 |
| May | 859,493 | 21.1 | 15.4 | 225.5 |
| June | 857,355 | 25.6 | 26.8 | 230.8 |
| July | 898,482 | 25.8 | 48.4 | 190.3 |
| August | 804,598 | 25.0 | 23.0 | 192.0 |
| September | 866,359 | 20.3 | 48.8 | 170.9 |
| October | 830,472 | 15.8 | 52.8 | 70.5 |
| November | 713,012 | 12.6 | 45.6 | 71.7 |
| December | 558,556 | 10.4 | 53.8 | 67.1 |

Annual hires from the same file: 10,567,540 in 2018, 10,424,955 in 2019, 10,434,167 in 2020,
10,941,264 in 2021, 11,505,872 in 2022, 8,531,168 in 2023, 8,768,238 in 2024 and 9,066,554 in 2025.
The level falls 25.9 per cent between 2022 and 2023 and never returns. August 2022 recorded
1,259,932 hires and September 2022 recorded 800,950, a fall of 36 per cent in one month. A TfL
Finance Committee paper dated 3 August 2022 approved a new Santander Cycles tariff for
implementation in September 2022. That is a dated coincident change, not a proven cause, and the
student is taught to say exactly that.

Steps the student works through:

1. Download the daily hire spreadsheet from the London Datastore and the Heathrow station file from
   the Met Office, and parse both by hand. The live file carries 5,785 daily rows from 30 July 2010
   to 31 May 2026
2. Screen the daily series before aggregating. The metadata sheet documents a full weekend shutdown
   on 10 and 11 September 2022, and 10 September 2022 reads zero. It does not document 5 August
   2025, which reads 188 hires between 26,149 the day before and 30,069 the day after, so that row
   is screened out rather than explained. Every dropped row is written down with its reason
3. Aggregate to monthly, join on year and month, then plot monthly hires against mean daily maximum
   temperature with points coloured by year. The post 2022 cloud sits below the pre 2022 cloud at
   the same temperature
4. Fit a weather-only linear regression with a random shuffled split across the whole 2010 to 2026
   span and record the R squared. It looks excellent and it is worthless, because pre break and post
   break months land on both sides of the split
5. Refit the identical model with a chronological split, training to December 2022 and testing from
   January 2023. The R squared collapses, the model over predicts almost every test month, and the
   residuals plotted against time are nearly all one signed
6. Add a post September 2022 indicator, the sine and cosine of month of year and the days in the
   month, refit chronologically, and quantify how much error one binary column removes
7. Write the honest paragraph: effect size, the tariff change named as a dated coincident event,
   and a list of what would be needed before claiming causation. Then reproduce the 2019 against
   2020 comparison, where annual hires were near identical while weekend share moved from 23.1 to
   31.0 per cent and mean daily hires went from 32,092 on a Wednesday and 23,986 on a Saturday to
   26,972 and 32,508

Tools: pandas, scikit-learn, matplotlib, chronological cross validation, residual analysis.

## Why this matters in London now

The AI Opportunities Action Plan was published on 13 January 2025, written by Matt Clifford CBE,
with 50 recommendations, all accepted by government in Command Paper 1242. The Department for
Science, Innovation and Technology published AI Opportunities Action Plan: One Year On in January
2026, reporting that 38 of the 50 actions have been met, three quarters of the plan.

Compute: two billion pounds committed to expand public compute capacity twentyfold by 2030;
Isambard-AI launched at Bristol University in July 2025, with up to £250 million to scale AI
Research Resource cloud capacity; University of Cambridge supercomputer capacity, home of DAWN, to
increase sixfold by Spring 2026; the next national supercomputer backed by £750 million and coupled
to the International Data Facility at the Edinburgh Parallel Computing Centre; five AI Growth Zones
designated across Great Britain, two in Wales and one in Scotland, carrying £28.2 billion in
investment, more than 15,000 jobs and £5 million of targeted funding each.

Skills: TechFirst, announced 9 June 2025 with £187 million committed, comprising TechYouth at £24
million aimed at one million students over three years across every UK secondary school, TechGrad
undergraduate scholarships recruiting up to 350 students for the first cohort in 2026 and scaling to
up to 900 a year from 2026/27, and TechLocal including £7.8 million for an AI Professional Degree
and Traineeship Accelerator. The Spärck AI Scholarship carries £17.2 million from DSIT for up to 100
scholarships across nine UK universities from October 2026. Two of the nine are in London. UCL has
eight awards of full tuition plus a £22,780 stipend for one year, open to Home and Overseas
students across fourteen master's programmes, deadline 17:00 BST on Friday 1 May 2026.

The pattern is worth naming. The machines are going to Bristol, Cambridge, Edinburgh, Wales and
Scotland, where the power is. London got the talent money and two of the nine scholarship
universities. The scarce input in London is trained people.

## The labour market

London holds 9.1 million people, 15.5 per cent of the UK total, across 33 local authorities, the 32
boroughs plus the City of London, with 6.4 million jobs and 749,000 added over the last decade, per
the Greater London Authority State of London 2026 and Office for National Statistics series.

DSIT's Artificial Intelligence Sector Study 2024, published 3 September 2025, counted 5,862 UK AI
companies, up 58 per cent on 2023, generating £23.9 billion in AI revenue, up 68 per cent, and
£11.8 billion in gross value added, up 103 per cent, employing 86,139 full time equivalents in AI
roles, up 33 per cent. London, the South East and the East of England account for approximately 75
per cent of registered office locations.

DSIT's AI Labour Market Survey 2025, carried out by Gardiner and Theobald LLP, recorded 59 of 119
responding organisations in Greater London, 49.58 per cent, the highest of any region, with the
South East on 18.49 per cent and the South West on 8.40 per cent. Outside London and the South of
England, only 5 per cent of AI roles were filled through the graduate pathway. Within London, the
Southwest and Southeast England, that figure rises to 53 per cent. The sample is 119 organisations,
so read it as a strong signal rather than a census.

Employers in that survey asked for build hours, not tool fluency. One micro AI consultancy answered
that students need thousands of hours of training, using AI tools every day to build the real world
experience needed for the future. A micro AI company answered that universities should focus on more
practical experience, such as internships, industrial placements and collaborations with businesses.

## School and university fit

English route: OCR GCSE Computer Science (9-1), specification J277, qualification number
601/8355/X, first taught 2020. AQA GCSE Computer Science 8525, first teaching September 2025, with
Paper 1 at two hours and 90 marks for half the GCSE and Paper 2 at one hour forty five minutes and
90 marks for the other half. AQA A level Computer Science 7517 with non-exam assessment component
7517/C. Pearson Edexcel also awards GCSE and A level Computer Science in England.

International route: Cambridge IGCSE Computer Science 0478 and Cambridge IGCSE (9-1) Computer
Science 0984, syllabuses for 2026, 2027 and 2028, each assessing Paper 1 on computer systems and
Paper 2 on algorithms, programming and logic, each one hour forty five minutes and each worth half.
Cambridge International AS and A Level Computer Science 9618, syllabuses for 2027, 2028 and 2029.
The IB Diploma is widely offered across London.

None of those is a machine learning specification. J277 scopes databases so tightly that a candidate
needs only SELECT, FROM and WHERE. A London student can take a grade 9 at GCSE and an A star at A
level without ever training a model, splitting a dataset or finding a leakage bug.

University entry, 2027 entry:

| Course | UCAS code | A level | Subject requirement |
|---|---|---|---|
| Imperial College London, Computing MEng | G401 | A*A*A to A*AAA | A* in Mathematics, Further Mathematics preferred |
| UCL, Computer Science BSc | G400 | A*A*A, A*AB contextual | A* in Mathematics or Further Mathematics |
| Queen Mary, Computer Science and AI BSc | I400 | AAA | Mathematics, Computer Science or Physics |
| Queen Mary, Computer Science BSc | G400 | AAB | Mathematics, Physics or Computer Science |

Imperial also asks a minimum of 41 IB points with 7 in Mathematics at higher level and 7 in another
relevant higher level subject, typical offer 42. UCL asks 40 IB points across three higher level
subjects including grade 7 in Mathematics, or 38 contextual, and states an application deadline of
13 January 2027 for 2027 entry on its own course pages. Queen Mary asks a minimum of 36 IB points
including 6,6,6 at higher level with one of Mathematics, Computer Science or Physics, and for its
Computer Science BSc a minimum of five GCSE passes including English at grade 4 and Mathematics at
grade 5 or acceptable equivalent.

Mathematics is the gate at all three, and not one of these degrees requires A level Computer
Science. That is why our teens track keeps the mathematics inside the machine learning rather than
parking it in a separate subject.

## Class times and the London year

| Slot, London time | Typical group |
|---|---|
| Saturday 10:00 to 12:00 | The flagship slot, all ages, two hour build block |
| Weekday 17:30 to 19:00 | Primary and lower secondary, after school |
| Weekday 19:30 to 21:00 | Sixth formers, university students, working adults |

London keeps GMT in winter and British Summer Time, UTC+1, in summer. India keeps Indian Standard
Time all year with no daylight saving, so London is four hours thirty minutes behind India in
summer and five hours thirty minutes behind in winter. British Summer Time runs Sunday 29 March to
Sunday 25 October 2026, then Sunday 28 March to Sunday 31 October 2027.

There is no single London school calendar. Each of the 33 local authorities determines dates for its
own maintained schools, and academies, free schools and independent schools set their own. Tower
Hamlets opens on Tuesday 1 September 2026 with October half term from Monday 26 to Friday 30
October, Christmas from Monday 21 December 2026 to Friday 1 January 2027, spring half term 15 to 19
February 2027, Easter from Monday 29 March to Friday 9 April 2027, summer half term 31 May to 4 June
and the summer break from Monday 26 July 2027. The Westminster and Kensington and Chelsea determined
dates open on Wednesday 2 September 2026 and total 195 days including five staff training days, with
the same October half term week.

That common October half term week, 26 to 30 October 2026, is the best intensive window of the year,
and the summer break from late July is the second. Note that the clocks change inside that same
week. AQA's key dates for A level Computer Science 7517 put the non-exam assessment deadline on 15
May, Paper 1 on the afternoon of 7 June 2027 and Paper 2 on the morning of 15 June 2027, so we avoid
launching cohorts into that window. Admission is rolling and a student can join in any week.

## Provider facts

- Modern Age Coders, founded 2020
- More than 10,000 students across 25+ countries
- Rated 4.9 across 547 Google reviews
- Ages 6 to 67, coding, AI and mathematics
- Live video only, never pre-recorded
- Group USD 40 a month, one to one USD 100 a month, first class free
- Contact: [/contact](/contact)
