---
title: "AI and Machine Learning Classes in Ireland | Build AI"
description: "Live online AI and machine learning classes for learners in Ireland, ages 6 to 67. Build and train real models in Python, not prompts. About EUR 35 a month."
canonical: https://learn.modernagecoders.com/ai-and-machine-learning-classes-in-ireland
source: src/pages/ai-and-machine-learning-classes-in-ireland.html
---
> Live online AI and machine learning classes for learners in Ireland, ages 6 to 67. Build and train real models in Python, not prompts. About EUR 35 a month.

In short

Modern Age Coders is a live online school. Learners in Ireland aged 6 to 67 join a group of five to eight or take private lessons, and the subject is model building rather than tool use: Python, then the statistics that decides whether a result is real, then training and testing on published data such as the CSO data centre electricity series. Teaching is in English on Irish clock time and aims at the 30 per cent Leaving Cert Computer Science coursework. A group place is USD 40 a month, about EUR 35, first class free.

The catalogue

## The twelve courses, and where an Irish learner usually enters them

An eight year old in Salthill and a data analyst in Sandyford are not two points on one syllabus at two speeds. They need three separate programmes, so this splits into bands, not levels.

I

### Children, ages 6 to 12

Real code from the start, and an honest answer to what a model is

IE / KIDS / 01

#### Python and AI for Kids

Real Python in week one. Turtle drawings, a small game, and the day a child sees a program infer a rule nobody typed.

[Open the syllabus](/courses/python-ai-kids-masterclass)

IE / KIDS / 02

#### AI Literacy for Kids

What sits behind an answer, why certainty is not accuracy, and the habit of checking something before repeating it.

[Open the syllabus](/courses/ai-literacy-for-kids-course)

IE / KIDS / 03

#### Vibe Coding for Kids

The child specifies, the tool writes, and then the hard part: locating the one broken line in code nobody typed by hand.

[Open the syllabus](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)II

### Teenagers, ages 13 to 18

Junior Cycle through Leaving Cert, finishing on a measured result

IE / TEEN / 01

#### AI and Machine Learning for Teens

The main Irish secondary route. Python, the maths the subject will not let you skip, classical algorithms, then networks, vision and language work, every stage ending in something trained.

[Open the syllabus](/courses/ai-ml-masterclass-teens)

IE / TEEN / 02

#### Data Science for Teens

Where the hours in Applied Learning Task 2 actually disappear: reading files, repairing them, joining them, drawing them, defending the hypothesis.

[Open the syllabus](/courses/data-science-course-for-teens-python-data)

IE / TEEN / 03

#### Python for Teens

Two years, empty file to functions, files, APIs and tests, for the student whose school does not offer Computer Science.

[Open the syllabus](/courses/python-complete-masterclass-teens)

IE / TEEN / 04

#### Vibe Coding for Teens

Ship web and Python projects with an assistant beside you, and learn the review discipline that makes saying yes to its output defensible.

[Open the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)III

### University students and working professionals

Depth, generative systems, and proof a full employment market will read

IE / PRO / 01

#### AI and Machine Learning Masterclass

Supervised and unsupervised methods, deep networks, the habits that stop a metric flattering you, and the part after the notebook where it has to run.

[Open the syllabus](/courses/ai-ml-masterclass-complete-college)

IE / PRO / 02

#### Generative AI: LLMs, RAG and Agents

Training and fine tuning a language model, grounding one against documents you own, and boxing an agent in so failure is visible.

[Open the syllabus](/courses/complete-generative-ai-masterclass-college)

IE / PRO / 03

#### Python and AI Automation

The applied half first, for people mid-career in Dublin, Cork or Limerick: models turned loose on the spreadsheets already open.

[Open the syllabus](/courses/python-ai-automation-masterclass-college)

IE / PRO / 04

#### Data Science Masterclass

Statistics, SQL, features, models and the writing up, finishing with work a hiring manager can assess in ten minutes.

[Open the syllabus](/courses/data-science-complete-masterclass-college)

IE / PRO / 05

#### Data Structures and Algorithms

What technical interviews here are still built on, and why code that survives 40 rows survives 40 million.

[Open the syllabus](/courses/data-structures-algorithms-masterclass-college)

IE / ALL / 06

#### Browse the full catalogue

We also teach mathematics to degree level, and web, app and game development, on the same timetable.

[Open all courses](/courses)

What you actually build

## Predicting the electricity Irish data centres will pull next quarter

Each country we teach into starts on its own official statistics, and Ireland's is the series the state is arguing over: the Central Statistics Office release Data Centres Metered Electricity Consumption 2024, from 10 June 2025, quarterly from 2015 Q1 to 2024 Q4. Forty observations, small enough to hold in your head, carrying a trap that destroys a careless model.

| Year | Data centres, GWh | All metered, GWh | Data centre share |
| --- | --- | --- | --- |
| 2015 | 1,238 | 24,600 | 5% |
| 2016 | 1,480 | 25,356 | 6% |
| 2017 | 1,760 | 25,725 | 7% |
| 2018 | 2,180 | 26,730 | 8% |
| 2019 | 2,488 | 26,505 | 9% |
| 2020 | 3,028 | 27,056 | 11% |
| 2021 | 4,010 | 28,506 | 14% |
| 2022 | 5,270 | 29,824 | 18% |
| 2023 | 6,335 | 30,581 | 21% |
| 2024 | 6,969 | 31,903 | 22% |

Data centre consumption multiplied by 5.63 in nine years, 21.2 per cent compound growth, against 29.7 per cent for all metered electricity. The rise in the share is the numerator.

The modelling happens on the quarterly table. The target is next quarter's consumption in gigawatt hours, and the features are a time index from 1 to 40, quarter dummies, the previous quarter and the same quarter a year earlier. Q4 is the highest quarter in every year, so the seasonality is real.

The trap is why we chose this dataset. Split the 40 rows at random, fit a RandomForestRegressor, and it scores an R squared of 0.991 at 34 GWh of mean absolute error. That looks finished and it is worth nothing. Re-split identical rows by time, training to 2022 Q4 and testing on 2023 and 2024, and the same model scores minus 6.98 at 277 GWh, beaten by predicting the average.

The mechanism is what a student must explain. A tree predicts by averaging training targets, so its output can never rise above the largest one it saw. That is 1,456 GWh, from 2022 Q4. The highest value the forest reaches in the test window is 1,408 GWh, and every held out quarter is above 1,456. Under-prediction is arithmetic, not bad luck.

pandasscikit-learn time series splitseasonal naive baseline log transformextrapolation limits

1. #### Reshape the CSO table and reconcile it against itself

  Turn the quarterly table into 40 rows of year, quarter and gigawatt hours, then sum each year's quarters against the published annual total. Seven years agree exactly. 2020, 2022 and 2023 are each out by 1 GWh. Deciding those gaps are rounding, not corruption, is the first honest act of the project.
2. #### Plot it, then say the implication out loud before modelling

  The line climbs in every year with a visible Q4 bump. Write the consequence down first: every value the model will be asked to predict lies above everything in the training data.
3. #### Build the stupid baseline before the clever model

  Seasonal naive: predict each quarter as the same quarter a year earlier. One line of code, no learning at all. Record its error, because nothing that fails to beat it deserves shipping.
4. #### Engineer the features and split by time, never at random

  Build the time index, quarter dummies, lag one and lag four, then train on 2015 Q1 to 2022 Q4 and hold out the eight quarters of 2023 and 2024. A shuffled split puts 2024 rows into training, then asks for a 2023 prediction sitting between memorised values. Interpolation is easy. Forecasting is not.
5. #### Fit two models and stand them next to the baseline

  A RandomForestRegressor, then a linear regression on log consumption with a time trend and quarter dummies, scored on the same window. The forest returns 277 GWh of mean absolute error, the seasonal naive baseline 212 GWh, the log linear model 86 GWh. The trivial method won.
6. #### Read the eight misses, forecast forward, write the caveat

  Print actual against predicted for every held out quarter and watch the shortfall widen from 121 GWh to 421 GWh. The error is not noise; it grows one way. Then project both models into 2025 and 2026 and watch the forest's line flatten as it hits its ceiling. Tree ensembles cannot extrapolate beyond their training range, so on a trending series you model a stationary transformation or pick a model class carrying a trend term.

| Quarter | Actual | Forest prediction | Shortfall | Miss |
| --- | --- | --- | --- | --- |
| 2023 Q1 | 1,496 | 1,375 | -121 | 8% |
| 2023 Q2 | 1,553 | 1,380 | -173 | 11% |
| 2023 Q3 | 1,625 | 1,382 | -243 | 15% |
| 2023 Q4 | 1,662 | 1,408 | -254 | 15% |
| 2024 Q1 | 1,657 | 1,375 | -282 | 17% |
| 2024 Q2 | 1,691 | 1,380 | -311 | 18% |
| 2024 Q3 | 1,792 | 1,382 | -410 | 23% |
| 2024 Q4 | 1,829 | 1,408 | -421 | 23% |

Verified on scikit-learn 1.7.2 against the published CSO figures. The same rows shuffled return 0.991, which is why the split, not the algorithm, is the lesson.

The distinction

## The gap between prompting and modelling, measured in gigawatt hours

Both get taught, in that sequence, and we are blunt about which one holds value. The same public spreadsheet yields 0.991 or minus 6.98 depending on a single decision. Recognising which figure is honest is not a chat window skill.

#### Using AI tools

- Ask, read the reply, reword, read again
- Learn the buttons of whichever assistant is current
- Finished when the output reads convincingly
- The skill expires with the product or the pricing page
- A determined learner exhausts the material in a few weeks
- Worth covering, mainly so a wrong answer delivered confidently gets caught

#### Building AI

- Reconcile 40 quarterly figures against their published annual totals
- Work out that a tree cannot output a number larger than the biggest it was trained on
- Beat a one line seasonal baseline, or report plainly that you did not
- Quote an error of 86 GWh, in units an engineer can dispute
- Ship it, then watch it degrade once inputs leave the training range
- Mathematics does not get deprecated, so none of this is relearned

Ireland is a good place to press the point, because it is legislating for the difference. The Regulation of Artificial Intelligence Bill 2026 asks for systems whose risk category, documentation and evaluation can be shown to a regulator. A builder's job description, in statute.

Why now, in Ireland

## AI law, a national research centre and a European summit inside one Irish year

The published national strategy, AI Here for Good, dates from 8 July 2021, and the Department of Enterprise, Tourism and Employment now points readers on to Digital Ireland, its umbrella strategy to 2030. Neither is what makes 2026 different.

What makes 2026 different is the statute book. On 17 June 2026 the Government published and approved the Regulation of Artificial Intelligence Bill 2026, brought forward by Minister Peter Burke, giving effect in Irish law to Regulation (EU) 2024/1689, the EU AI Act. It runs to 10 Parts, 139 Sections and 4 Schedules. Alongside it the AI Office of Ireland, Oifig IS na hÉireann, is to be established by August 2026 as an independent statutory body.

Enforcement is not centralised. Sectoral regulators are designated Market Surveillance Authorities: the Central Bank of Ireland, the Data Protection Commission, the Competition and Consumer Protection Commission, Coimisiún na Meán, ComReg, the Commission for Regulation of Utilities, the HPRA, the Health and Safety Authority, the HSE, the Workplace Relations Commission and the National Transport Authority. Eleven regulators judging AI in their own sectors is a great deal of demand for people who can read a model.

The compliance dates are published. Prohibited practices took effect on 2 February 2025, competent authorities were designated and penalties enacted by 2 August 2025, Annex III high risk requirements plus a regulatory sandbox apply from 2 August 2026, and Annex I product requirements on 2 August 2027.

Research capacity moved in the same month. On 10 June 2026 the Government committed 460 million euro to seven new Research Ireland centres, announced by James Lawless TD, Minister for Further and Higher Education. One is Rinn Artificial Intelligence, successor to Insight and ADAPT, spanning 15 Research Performing Organisations including all 13 Irish universities.

Then the shop window. On 14 October 2026 the Government hosts the International AI Summit 2026 at the Royal Dublin Society, a flagship event of Ireland's Presidency of the Council of the European Union, with roughly 1,500 delegates on Harnessing AI to Revolutionise Europe's Competitiveness. Announced speakers include Henna Virkkunen of the European Commission, Cristiano Amon of Qualcomm, Eileen O'Mara of Stripe and Taoiseach Micheál Martin.

The demand underneath is measurable. On 4 January 2026 the department reported a record 2,825,500 people in employment, with unemployment at 4.9 per cent against 6.4 per cent across the euro area. A KPMG report of 2 June 2026 put the direct data centre sector in 2024 at 2.2 billion euro of gross value added and 19,500 jobs, with dependent sectors on more than 100 billion euro and 875,000 jobs. The Large Energy User Action Plan of 13 January 2026 counts roughly 21,000 direct data centre employees inside an ICT sector of more than 180,000 workers.

Notice that 19,500 and 21,000 disagree. Different documents, different scopes. Quote both and name your source rather than pick the larger. That habit is most of what this page teaches, and none of this is staffed by good prompters.

17 June 2026

Regulation of Artificial Intelligence Bill 2026 approved by Government

2 August 2026

Annex III high risk requirements and an AI regulatory sandbox apply in Ireland

460 million euro

Committed on 10 June 2026 to seven Research Ireland centres, one being Rinn AI

6,969 GWh

Electricity Irish data centres used in 2024, 22 per cent of the metered total

School and university

## Leaving Certificate Computer Science names machine learning. It has 180 hours for everything.

### What the state specification actually says

State examinations here are run by the State Examinations Commission, not a UK board: the Junior Cycle, roughly ages 12 to 15, and the Leaving Certificate, roughly 16 to 18.

Learning outcome 1.14 of Leaving Certificate Computer Science requires a student to explain when and what machine learning and AI algorithms might be used in certain contexts, so the subject is named in the state curriculum rather than implied. It is offered at Ordinary and Higher level, designed for 180 hours of class contact, and organised into three strands: practices and principles, core concepts, and computer science in practice. It is new, taught in 40 schools from September 2018 and open to all from September 2020.

### Where a tutor legitimately adds marks

Assessment is 70 per cent end of course examination, written and computer based, plus 30 per cent coursework: one computational artefact with a report. Four applied learning tasks run across the two years, and the second is titled ANALYTICS, asking for an interdisciplinary topic, a hypothesis and an artefact built with analytics. That is a data science project with a state mark on it, and the CSO series above is the kind of dataset it was written for.

### The points arithmetic every Irish parent should know

Higher grades run H1 to H8, Ordinary O1 to O8. An H1 is worth 100 CAO points, an O1 is worth 56, and Higher Level Mathematics adds a 25 point bonus at H6 or above, so it can carry up to 125. It also teaches the statistics and linear algebra machine learning runs on.

### The CAO, and what the 2025 round shows

Entry runs through the Central Applications Office, which converts Leaving Certificate results into points. Applications open in early November and close on 1 February. The latest completed round is 2025 and 2026 points are not set until August, so the figures below are last year's.

Trinity College Dublin's TR033, the B.A. Moderatorship in Computer Science, runs four years with an optional fifth year M.C.S. track, requires H4 Mathematics and took 533 points, with Artificial Intelligence as a fourth year option. Dublin City University's DC121 requires only O4 or H6 Mathematics and took 487 points; its third year Advanced Algorithms and Artificial Intelligence Search module and fourth year Machine Learning module are named on the course page, it carries the paid six month INTRA placement, and DCU states 91 per cent of graduates are in employment or further education six months on. University College Cork's CK401 requires Mathematics at O2 or H6, took 456 points against a range of 456 to 613, and places every student with Dell EMC, Amazon, Intel and Microsoft among the hosts.

Put TR033 and DC121 side by side. Both lead to computer science. Trinity wants H4 and 533 points, DCU O4 or H6 and 487. The prerequisite is not the wall. The points are.

### Postgraduate AI, and what it costs

University of Galway runs MSC-MAI, an MSc in Computer Science with Artificial Intelligence, one year full time and 90 ECTS, normally requiring a Level 8 qualification at First Class Honours with IELTS 6.5. Fees for 2026/27 total 9,040 euro for an EU student and 28,640 euro for a non-EU student, and SUSI can cover up to 6,270 euro but not the 140 euro levy. University College Cork runs an MSc in Data Science and Artificial Intelligence, and Trinity an MSc in Business Analytics and AI for Management. CeADAR at University College Dublin is Ireland's European Digital Innovation Hub for AI.

How the classes run

## Irish clock time holds still. The gap to India changes on 25 October 2026.

Ireland runs two clocks in a year. Irish Standard Time, UTC plus 1, holds from 29 March to 25 October 2026, then Greenwich Mean Time until late March 2027. India Standard Time is UTC plus 5 hours 30 minutes and never shifts, so India is 4 hours 30 minutes ahead in summer and 5 hours 30 minutes ahead in winter. Your booked hour is unaffected and the teacher's evening gets an hour later, which is our problem. One trap: IST is Irish Standard Time in Dublin and India Standard Time in Delhi, so we never use the three letters alone.

Tue and Thu 16:30 to 17:30

Irish time, after school. India: 21:00 to 22:00 in summer, 22:00 to 23:00 from 25 October.

Sat 10:00 to 11:30

Irish time, our default cohort and the strongest build slot. India: 14:30 to 16:00 in summer, 15:30 to 17:00 from 25 October.

Sun 11:00 to 12:00

Irish time, for Leaving Cert coursework clinics. India: 15:30 to 16:30 in summer, 16:30 to 17:30 from 25 October.

### What a session is

A weekday session is sixty minutes and a weekend session ninety, because a build task needs the longer block and a school night does not have it. The teacher does not rotate, which matters less for enthusiasm than continuity: whoever watched a bug appear on Saturday watches it fixed the Saturday after. Groups hold five to eight, or one to one.

Each gap between sessions carries something to build and bring back, not a worksheet. We steer Irish families towards the weekend slots, comfortable at both ends of the call all year, whereas the weekday evening slot pushes the Indian side past 22:00 once the clocks change.

### The Irish year, and the weeks we avoid

The school year runs from late August or early September to late May or June and carries two mid-term breaks, one around Halloween and one in February, rather than a single half term. Those dates differ from the university ones, so we ask each family for their school's calendar and do not open cohorts into a mid-term week.

The calendar we can quote precisely is Trinity College Dublin's for 2026/27. Semester 1 begins in the week beginning 31 August 2026, teaching from 14 September, with a study week from 26 October, a public holiday. Assessment runs 11 to 22 December and College closes 24 December to 3 January 2027. Semester 2 opens in the week beginning 18 January 2027, assessment runs 19 to 30 April, and Trinity Term ends 6 June 2027.

Two fixed points shape the rest. CAO applications open in early November and close on 1 February, and Leaving Certificate and Junior Cycle written examinations usually begin on the first Wednesday in June. Because the Computer Science coursework is submitted well before those papers, clinics run from October to February. Nothing here waits for a term to begin, so a learner can start in any week.

Student work

## Four live URLs, open them and try to break them

At 4.9 per cent unemployment the difficulty is not finding an AI job advertisement, it is being the applicant who gets it, and evidence settles that, not a certificate. So students here finish with a link. Each of the four below was written and deployed by a student and left running at a public address. Open one and feed it something awkward. The rest sit in [Student Labs](/student-labs).

![NutriLife AI nutrition coach project screenshot](/images/projects/nutrilife.webp)

AI and ML

#### NutriLife, an AI nutrition coach

Logs meals, scores them against a goal and explains the gap, from first sketch to a URL anyone can hit.

by Bhavya · [Open the live project](https://nutrilife-bhavya.lovable.app)

![Misti AI chatbot for maths and coding screenshot](/images/projects/misti.webp)

AI and ML

#### Misti, an AI chatbot for maths and coding

Fields maths and programming questions, and runs on its own domain rather than a preview link.

by Harshit · [Open the live project](https://misti.modernagecoders.com)

![GuardianX AI internet safety assistant screenshot](/images/projects/guardianx.webp)

AI and ML

#### GuardianX, an AI safety assistant

Talks a young person through whether a situation online is safe, released by the student who designed it.

by Vivaan · [Open the live project](https://guardianx-cybersaver.lovable.app)

![SkyCast weather app screenshot](/images/projects/skycast.webp)

Data and forecasting

#### SkyCast, a weather app

Pulls live weather feeds and forecasts from them, the nearest sibling to the electricity work above.

by Krish · [Open the live project](https://krish-shroff.github.io/AuraWeatherTech/)

Fees

## A year of the Galway MSc is 9,040 euro. A month here is about 35.

University of Galway lists 9,040 euro as the 2026/27 total for an EU student on its one year MSc in Computer Science with Artificial Intelligence, and 28,640 euro for a non-EU student. Set a monthly class fee against that and the question stops being whether the price is low. It becomes whether a family would rather learn how the subject suits a child before committing five figures. Billing runs monthly, nothing is charged to join and nothing is signed for a year.

Free first class

EUR 0

USD 0, no card needed

- A taught hour, not a pitch
- Sets the starting level
- Sit through it, then decide

Book it

Group batch

about EUR 35

USD 40 a month

- Five to eight learners, one named teacher
- Live only, with nothing resold as a recording
- A build task each week, reviewed by name
- Certificate at the end

Start here

One to one

about EUR 88

USD 100 a month

- Private pace, private timetable
- Built around a Leaving Cert coursework deadline
- Syllabus rebuilt around the goal you state

Enquire

The euro figures come from one dated rate: the European Central Bank published EUR 1 at USD 1.1377 on 24 July 2026. Note the direction, because it is where conversions go wrong. The ECB quotes dollars per euro, so a dollar price becomes euro by division, not multiplication. USD 40 divided by 1.1377 is 35.16 euro and USD 100 is 87.90 euro. An Irish card settles in euro with no conversion step.

What families say

## The rating is 4.9, the sample is 547, and the source is public

Every review below was left on Google by a family that pays us. We neither draft nor commission testimonials.

★★★★★

"The one step solution for my son. Modern Age Coders make learning coding so simple that kids love it. The teachers explain complex concepts clearly with practical exercises and interactive content."

Ria Mukherjee

Parent

★★★★★

"Modern Age Coders has been a game-changer for me. I struggled to grasp IT concepts and coding before joining, but their classes transformed everything. I can now confidently write complex programs with ease."

Samriddha Mondal

Student

★★★★★

"One of the most wonderful education centres out there. Education is not limited to school syllabus but focuses on skill development. Learning here has been a wonderful journey and still continuing."

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

"I highly recommend this computer coding class! The teachers are incredibly knowledgeable and passionate about coding. They make every session engaging and insightful."

Ritu Kedia

Parent

Questions from Ireland

## Straight answers on the Leaving Cert, the CAO and the clock

### Does Leaving Certificate Computer Science actually cover machine learning, or do we need something outside school?

It covers it by name rather than by depth. Learning outcome 1.14 requires a student to explain when and what machine learning and AI algorithms might be used in certain contexts. That outcome sits inside a subject designed for 180 hours across three strands and four applied learning tasks, so machine learning gets a fraction of a fraction. Explaining when an algorithm might be used and training one are different work, and only the second leaves a student something to show.

### Can you help with the 30 per cent Leaving Certificate Computer Science coursework, and specifically with Applied Learning Task 2?

Yes, and it is where teaching from outside the school legitimately adds marks. Assessment is 70 per cent end of course examination, written and computer based, plus 30 per cent coursework, one computational artefact with a report. Applied Learning Task 2 is titled ANALYTICS and asks the student to identify an interdisciplinary topic, develop a hypothesis and build an artefact using analytics. That is a data science project with a state mark attached. We work on the hypothesis, the dataset, the method and the write up, and we do not write it for anyone.

### What CAO points does Computer Science need in Ireland, and does AI experience help?

In the 2025 round Trinity College Dublin's TR033 Computer Science took 533 points, Dublin City University's DC121 took 487, and University College Cork's CK401 took 456 with a range of 456 to 613. Points for the 2026 round are not decided until August, so read those as last year's rather than a target. AI experience earns no CAO points directly. It improves the Computer Science coursework, and that coursework is 30 per cent of the subject the points come from.

### Is Higher Level Maths essential for an AI career in Ireland?

The concrete answer sits in the points table rather than in an opinion. Higher Level grades run H1 to H8 and an H1 carries 100 CAO points, while an Ordinary O1 carries 56. Higher Level Mathematics adds a 25 point bonus at H6 or above, so it can be worth up to 125 points, more than any other subject. Requirements differ too: Trinity's TR033 asks for H4 Mathematics, DCU's DC121 only for O4 or H6. Machine learning is built on the statistics and linear algebra Higher Maths introduces, so the subject pays twice.

### What time are the live classes in Irish time, and what changes on 25 October 2026?

Three slots, all in Irish local time: Tuesday and Thursday 16:30 to 17:30, Saturday 10:00 to 11:30, and Sunday 11:00 to 12:00. Ireland keeps Irish Standard Time, UTC plus 1, from 29 March to 25 October 2026, then Greenwich Mean Time until late March 2027. India never moves its clocks, so it is 4 hours 30 minutes ahead now and 5 hours 30 minutes ahead from 25 October. Your class time does not move. The teacher's does. Note that IST means Irish Standard Time here and India Standard Time there, so we write both out in full.

### Will the EU AI Act make it harder to work in AI in Ireland?

It creates work rather than removing it. The Regulation of Artificial Intelligence Bill 2026 was approved by Government on 17 June 2026 and gives effect in Irish law to Regulation (EU) 2024/1689, running to 10 Parts, 139 Sections and 4 Schedules. The AI Office of Ireland is to be established by August 2026 as an independent statutory body, with enforcement distributed across sectoral regulators. Prohibited practices applied from 2 February 2025, Annex III high risk requirements and a regulatory sandbox from 2 August 2026, and Annex I product requirements from 2 August 2027. Somebody has to build systems that satisfy those rules and document why.

### Who actually hires AI people in Ireland outside the big technology names?

The verifiable list is broader than people expect. University College Cork places its Computer Science students on a mandatory third year placement with hosts including Dell EMC, Amazon, Intel and Microsoft. The ADAPT Centre at Trinity College Dublin, built on a 42 million euro Science Foundation Ireland investment, lists partners including Microsoft, IBM, Huawei, Deutsche Bank, Ryanair, eBay and Novartis, more than 30 in total. Stripe and Kerry Group both speak at the Government's International AI Summit in Dublin on 14 October 2026. Those are Irish engineering and analytics functions, not sales offices, which is why the hiring is local.

### Are online AI classes credible in Ireland, or should we use a local grind school?

They answer two different questions. A grind school exists to move a student up a grade band in a subject examined in June, and it is good at that. It is not built to leave a learner holding a trained model, a held out test window and a public link. Ireland is at 4.9 per cent unemployment against 6.4 per cent across the euro area, so the constraint here is not vacancies, it is being chosen among strong applicants, and that is settled by evidence of work rather than exam drilling. A group place is USD 40 a month, about EUR 35, so this is rarely a choice between the two.

Start here

## One free class, then decide

Give us a number and a mentor calls back on Irish hours. The first lesson is taught rather than sold: a teacher takes it, it is a real hour of the course, and it tells us where to place the learner so week two lands at the right level.

Rather read first? There is [how we teach](/how-we-teach), the [full course catalogue](/courses), and the student work in [Student Labs](/student-labs).

---

*Canonical: https://learn.modernagecoders.com/ai-and-machine-learning-classes-in-ireland*
