---
title: "AI and Machine Learning Classes in Ireland | Build AI"
description: "Live online AI and machine learning classes for learners in Ireland, ages 6 to 67. Build and train real models in Python, not prompts. About EUR 35 a month."
canonical: https://learn.modernagecoders.com/ai-and-machine-learning-classes-in-ireland
source: src/pages/ai-and-machine-learning-classes-in-ireland.html
provider: Modern Age Coders
areaServed: Ireland
ages: 6 to 67
---

> Modern Age Coders is a live online school. Learners in Ireland aged 6 to 67 join a group of five
> to eight or take private lessons, and the subject is model building rather than tool use: Python,
> then the statistics that decides whether a result is real, then training and testing on published
> data such as the CSO data centre electricity series. Teaching is in English on Irish clock time
> and aims at the 30 per cent Leaving Cert Computer Science coursework. A group place is USD 40 a
> month, about EUR 35, first class free.

## Direct answers

**What time are classes in Irish time?**
Three slots, all Irish local time: Tuesday and Thursday 16:30 to 17:30, Saturday 10:00 to 11:30,
and Sunday 11:00 to 12:00. Ireland is on Irish Standard Time, UTC plus 1, from 29 March to 25
October 2026, then GMT until late March 2027. India stays on UTC plus 5 hours 30 minutes all year,
so India is 4 hours 30 minutes ahead in the summer half and 5 hours 30 minutes ahead in the winter
half. The Irish class time does not move.

**What makes this different from other AI courses sold in Ireland?**
Most sell prompting. This teaches model building: reconciling a published dataset, choosing a split
that matches the question, training a model, stating the error in real units, then beating a
trivial baseline or admitting you did not. Prompting expires with the product. The mathematics does
not.

**Does it help with the Leaving Certificate?**
Yes, at the coursework end. Leaving Certificate Computer Science is assessed 70 per cent by
examination and 30 per cent by coursework, one computational artefact with a report. Applied
Learning Task 2, titled ANALYTICS, asks for an interdisciplinary topic, a hypothesis and an
artefact built with analytics. That is a data science project with a state mark on it.

**What does it cost?**
Group batch of five to eight learners: USD 40 a month, about EUR 35. One to one: USD 100 a month,
about EUR 88. Converted at the European Central Bank rate of EUR 1 to USD 1.1377 on 24 July 2026,
which is a division rather than a multiplication. First class free, no card.

**What ages?**
6 to 67, taught as three separate curricula rather than one course at three speeds.

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

## The first project: forecasting Irish data centre electricity consumption

Source: Central Statistics Office, Data Centres Metered Electricity Consumption 2024, released 10
June 2025. Quarterly consumption from 2015 Q1 to 2024 Q4, 40 observations, plus annual totals and
total national metered electricity.

| Year | Data centres, GWh | All metered, GWh | Data centre share |
|---|---|---|---|
| 2015 | 1,238 | 24,600 | 5% |
| 2018 | 2,180 | 26,730 | 8% |
| 2021 | 4,010 | 28,506 | 14% |
| 2024 | 6,969 | 31,903 | 22% |

Data centre consumption multiplied by 5.63 in nine years, a compound annual growth rate of 21.2 per
cent, while all metered electricity grew 29.7 per cent over the same period. Almost the whole rise
in the share is the numerator moving.

Target: next quarter's data centre consumption in gigawatt hours. Features: a time index from 1 to
40, quarter of year dummies, the previous quarter, the same quarter a year earlier, and optionally
a four quarter rolling mean and a year on year growth ratio. Q4 is the highest quarter in every
year of the series, so the seasonality is real.

Steps the student works through:

1. Reshape the CSO quarterly table into 40 rows of year, quarter and gigawatt hours, then reconcile
   each year's quarters against the published annual total. Seven years agree exactly. 2020, 2022
   and 2023 are each out by 1 GWh, which is rounding in the published table rather than corruption
2. Plot the series and state the implication before modelling: the line climbs in every year with a
   visible Q4 bump, so every value the model will be asked to predict lies above everything in the
   training data
3. Build the seasonal naive baseline first, predicting each quarter as the same quarter one year
   earlier, and record its error. Nothing that fails to beat it is worth shipping
4. Engineer the features, then split by time rather than at random: train on 2015 Q1 to 2022 Q4 and
   hold out the eight quarters of 2023 and 2024
5. Fit a RandomForestRegressor and a linear regression on the logarithm of consumption with a time
   trend and quarter dummies, and score both against the baseline on the same window
6. Read the eight misses one at a time and watch the shortfall widen in one direction, then forecast
   2025 and 2026 with each model, plot against history, and write the caveat

Results on the held out window: RandomForest mean absolute error 277 GWh, seasonal naive 212 GWh,
log linear with trend and quarter dummies 86 GWh. The trivial baseline beat the machine learning
model.

The trap, verified empirically on scikit-learn 1.7.2 against the published figures: a random
shuffled split gives the same RandomForest an R squared of 0.991 and a mean absolute error of 34
GWh. A time based split on identical data gives an R squared of minus 6.98 and a mean absolute
error of 277 GWh. A tree predicts by averaging training targets, so its output can never exceed the
largest one it saw. The largest training target is 1,456 GWh, from 2022 Q4, and the highest value
the forest predicts anywhere in the test window is 1,408 GWh, while every held out quarter is above
1,456. Under-prediction is arithmetic, not bad luck.

| Quarter | Actual, GWh | Forest prediction | Shortfall | Miss |
|---|---|---|---|---|
| 2023 Q1 | 1,496 | 1,375 | -121 | 8% |
| 2023 Q4 | 1,662 | 1,408 | -254 | 15% |
| 2024 Q3 | 1,792 | 1,382 | -410 | 23% |
| 2024 Q4 | 1,829 | 1,408 | -421 | 23% |

The lesson generalises even though the numbers do not: tree ensembles cannot extrapolate beyond
their training range, so on a strongly trending series you model a stationary transformation, a
difference or a growth ratio, or you use a model class that carries a trend term.

Tools: pandas, scikit-learn, matplotlib.

## Why this matters in Ireland now

On 17 June 2026 the Government published and approved the Regulation of Artificial Intelligence
Bill 2026, brought forward by Minister Peter Burke, giving effect in Irish law to Regulation (EU)
2024/1689, the EU AI Act. The Bill runs to 10 Parts, 139 Sections and 4 Schedules. The AI Office of
Ireland is to be established by August 2026 as an independent statutory body and the central
coordinating authority.

Ireland chose distributed enforcement, designating sectoral regulators as Market Surveillance
Authorities, including the Central Bank of Ireland, the Data Protection Commission, the Competition
and Consumer Protection Commission, Coimisiun na Mean, ComReg, the Commission for Regulation of
Utilities, the HPRA, the Health and Safety Authority, the HSE, the Workplace Relations Commission
and the National Transport Authority.

EU AI Act compliance dates as published by the department: 2 February 2025 prohibited practices; 2
August 2025 competent authorities designated and penalties legislation enacted; 2 August 2026 Annex
III high risk requirements plus an operational AI regulatory sandbox; 2 August 2027 Annex I high
risk product requirements.

On 10 June 2026 the Government announced a 460 million euro investment in seven new Research
Ireland centres, announced by James Lawless TD, Minister for Further and Higher Education,
Research, Innovation and Science. One of the seven is Rinn Artificial Intelligence, which succeeds
Insight and ADAPT after their twelve year funded programmes and brings together 15 Research
Performing Organisations including all 13 Irish universities, with more than 288 co-applicants and
principal investigators.

On 14 October 2026 the Government hosts the International AI Summit 2026 at the Royal Dublin
Society, a flagship event of Ireland's Presidency of the Council of the European Union, with about
1,500 delegates under the theme Harnessing AI to Revolutionise Europe's Competitiveness. It marks
the official launch of European AI Innovation Month.

## The employment picture

The Central Statistics Office put the usually resident population at 5,458,600 in its Population
and Migration Estimates for April 2025, published 26 August 2025, with net migration of 59,700 from
125,300 arrivals against 65,600 departures, including 31,500 returning Irish citizens.

On 4 January 2026 the Department of Enterprise, Tourism and Employment reported 2,825,500 people in
employment, a record, having added 61,500 in the first three quarters of 2025. Unemployment was 4.9
per cent in November 2025 against 6.4 per cent across the euro area, and the employment rate was
79.9 per cent in the third quarter of 2025 against an EU average of 76.2 per cent.

A KPMG report published by Minister Peter Burke on 2 June 2026 put the direct data centre sector in
2024 at 2.2 billion euro of gross value added, 19,500 jobs and 280 million euro in employment
related taxes, with dependent sectors accounting for more than 100 billion euro of gross value
added annually, 875,000 jobs and 14.6 billion euro in employment related taxes. The Large Energy
User Action Plan of 13 January 2026 puts roughly 21,000 direct data centre employees inside an ICT
sector of more than 180,000 workers. The two counts come from different documents with different
scopes; cite both rather than the larger one.

## School and university fit

Irish state examinations are run by the State Examinations Commission. The qualifications are the
Junior Cycle, roughly ages 12 to 15, and the Leaving Certificate, roughly 16 to 18, with the
Leaving Certificate Vocational Programme and Leaving Certificate Applied as variants.

Leaving Certificate Computer Science names machine learning directly. Learning outcome 1.14
requires a student to explain when and what machine learning and AI algorithms might be used in
certain contexts. The subject is offered at Ordinary and Higher level, is designed for 180 hours of
class contact, and has three strands and four applied learning tasks. Assessment is 70 per cent end
of course examination plus 30 per cent coursework, one computational artefact with a report.
Computer Science was introduced in 40 secondary schools from September 2018 and became available to
all schools from September 2020.

Grading runs H1 to H8 at Higher level, O1 to O8 at Ordinary, and F1 to F8 at Foundation in Irish
and Mathematics only. An H1 is worth 100 CAO points and an O1 is worth 56. Higher Level Mathematics
adds a 25 point bonus at H6 or above, so it can be worth up to 125 points.

CAO applications open in early November and close on 1 February. The latest completed round is
2025; 2026 points are not decided until August.

| Course | Institution | Maths requirement | 2025 CAO points |
|---|---|---|---|
| TR033 B.A. (Mod.) Computer Science | Trinity College Dublin | H4 | 533 |
| DC121 BSc Computer Science | Dublin City University | O4 or H6 | 487 |
| CK401 BSc (Hons) Computer Science | University College Cork | O2 or H6 | 456 (range 456 to 613) |

TR033 runs four years with an optional fifth year M.C.S. track and offers Artificial Intelligence
as a fourth year advanced option. DC121 includes a third year Advanced Algorithms and Artificial
Intelligence Search module, a fourth year Machine Learning module and the paid six month INTRA
placement; DCU states 91 per cent of graduates are in employment or further education six months
after graduating. CK401 has a mandatory third year placement with named hosts including Dell EMC,
Amazon, Intel and Microsoft.

Postgraduate: University of Galway runs MSC-MAI, an MSc in Computer Science with Artificial
Intelligence, one year full time and 90 ECTS, normally requiring a Level 8 qualification at First
Class Honours with IELTS 6.5, at 9,040 euro total for an EU student in 2026/27 and 28,640 euro for
a non-EU student. SUSI grants can cover up to 6,270 euro for eligible EU students but not the 140
euro levy. University College Cork runs an MSc in Data Science and Artificial Intelligence. Trinity
College Dublin runs an MSc in Business Analytics and AI for Management with 100 places.

CeADAR, Ireland's national centre for Applied AI, is hosted at University College Dublin, funded by
Enterprise Ireland and IDA Ireland, and is Ireland's European Digital Innovation Hub for AI.

## Class times and the Irish year

| Slot, Irish local time | India equivalent, summer | India equivalent, from 25 October 2026 |
|---|---|---|
| Tue and Thu 16:30 to 17:30 | 21:00 to 22:00 | 22:00 to 23:00 |
| Sat 10:00 to 11:30 | 14:30 to 16:00 | 15:30 to 17:00 |
| Sun 11:00 to 12:00 | 15:30 to 16:30 | 16:30 to 17:30 |

The school year runs from late August or early September to late May or June with two mid-term
breaks, one around Halloween and one in February. We ask each family for their own school's
calendar rather than assuming one, and we do not open new cohorts into a mid-term week.

Verified university dates, from Trinity College Dublin's Academic Year Calendar 2026/27: Semester 1
begins in the week beginning 31 August 2026 and teaching from the week beginning 14 September;
study and review week begins 26 October 2026, with Monday 26 October a public holiday; Semester 1
assessment runs 11 to 22 December 2026; Michaelmas Term ends Sunday 20 December 2026; College is
closed 24 December 2026 to 3 January 2027 inclusive; Foundation Scholarship examinations sit in the
week beginning 4 January 2027; Semester 2 begins the week beginning 18 January 2027 with a study
week from 1 March; Semester 2 assessment runs 19 to 30 April 2027; Hilary Term ends Sunday 25 April
2027; Trinity Term runs from the week beginning 26 April 2027 to Sunday 6 June 2027; reassessment
falls in the week beginning 23 August 2027.

Leaving Certificate and Junior Cycle written examinations usually begin on the first Wednesday in
June and run for roughly two and a half weeks. The Computer Science coursework is submitted well
before those papers, so coursework clinics run from October to February. Admission is not tied to a
term and a learner can start in any week.

## Student work, live and public

- NutriLife, an AI nutrition coach, by Bhavya: https://nutrilife-bhavya.lovable.app
- Misti, an AI chatbot for maths and coding, by Harshit: https://misti.modernagecoders.com
- GuardianX, an AI safety assistant, by Vivaan: https://guardianx-cybersaver.lovable.app
- SkyCast, a weather app, by Krish: https://krish-shroff.github.io/AuraWeatherTech/

More in [Student Labs](/student-labs).

## Provider facts

- Modern Age Coders, teaching since 2020
- More than 10,000 students across 25+ countries
- Rated 4.9 across 547 Google reviews
- Ages 6 to 67, coding, AI and mathematics
- Live video only, never pre-recorded
- Group batch USD 40 a month, about EUR 35; one to one USD 100 a month, about EUR 88
- Contact: [/contact](/contact)
