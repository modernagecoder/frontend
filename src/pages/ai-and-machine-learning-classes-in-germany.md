---
title: "AI and Machine Learning Classes in Germany | Build AI"
description: "Live online AI and ML classes for Germany, ages 6 to 67. Train real models on Bundesnetzagentur power data, not prompts. EUR 35.16 a month, first class free."
canonical: https://learn.modernagecoders.com/ai-and-machine-learning-classes-in-germany
source: src/pages/ai-and-machine-learning-classes-in-germany.html
---
> Live online AI and ML classes for Germany, ages 6 to 67. Train real models on Bundesnetzagentur power data, not prompts. EUR 35.16 a month, first class free.

In short

Modern Age Coders is a live online school teaching learners in Germany from age 6 to age 67, in batches of five to eight or privately. The subject is model building, not tool use: Python first, then the statistics under it, then training and testing models on published German data such as the Bundesnetzagentur SMARD electricity series. Teaching is in English, on German clock time. A group place is USD 40 a month, EUR 35.16 at the reference rate published for 24 July 2026, and the first class costs nothing.

The catalogue

## Three separate programmes, twelve courses, and one entry point decided in the free class

A seven year old in Bremen and a process engineer in Stuttgart are not one syllabus at two speeds. The catalogue splits into bands rather than levels.

I

### Children, ages 6 to 12

Typed code early, and a truthful account of where an answer comes from

DE / KIDS / 01

#### Python and AI for Kids

Real Python from lesson one rather than coloured blocks, ending on the afternoon a child watches a program infer a rule nobody typed for it.

[Open the syllabus](/courses/python-ai-kids-masterclass)

DE / KIDS / 02

#### AI Literacy for Kids

Where a generated answer comes from, why a wrong one sounds as sure as a right one, and how to check a claim.

[Open the syllabus](/courses/ai-literacy-for-kids-course)

DE / KIDS / 03

#### Vibe Coding for Kids

The child describes, the tool produces, and then the real work starts: finding the one line that refuses to run.

[Open the syllabus](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)II

### Teenagers, ages 13 to 18

From first syntax to a trained model with a number attached to how wrong it is

DE / TEEN / 01

#### AI and Machine Learning for Teens

The main route for a German secondary student: Python, the mathematics the subject demands, classical algorithms, then networks, vision and language work.

[Open the syllabus](/courses/ai-ml-masterclass-teens)

DE / TEEN / 02

#### Data Science for Teens

Reading a semicolon-separated German CSV, repairing it, joining it on a timestamp and drawing it.

[Open the syllabus](/courses/data-science-course-for-teens-python-data)

DE / TEEN / 03

#### Python for Teens

Two years from an empty file to functions, APIs and tests, for the teenager in a Land where Informatik is not compulsory.

[Open the syllabus](/courses/python-complete-masterclass-teens)

DE / TEEN / 04

#### Vibe Coding for Teens

Web and Python projects shipped with an assistant, plus the review discipline that makes accepting its output defensible.

[Open the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)III

### University students and working professionals

Depth, generative systems, and the part after the notebook where it has to run

DE / PRO / 01

#### AI and Machine Learning Masterclass

Supervised and unsupervised methods, deep networks, and validation that survives a hostile reader.

[Open the syllabus](/courses/ai-ml-masterclass-complete-college)

DE / PRO / 02

#### Generative AI: LLMs, RAG and Agents

Training and fine tuning a language model, grounding it against documents you own, and boxing an agent in so failure is loud.

[Open the syllabus](/courses/complete-generative-ai-masterclass-college)

DE / PRO / 03

#### Python and AI Automation

The applied half first, for people mid-career in Munich, Frankfurt, Hamburg or the Ruhr.

[Open the syllabus](/courses/python-ai-automation-masterclass-college)

DE / PRO / 04

#### Data Science Masterclass

Statistics, SQL, features, modelling and the write up, ending on an assessable portfolio.

[Open the syllabus](/courses/data-science-complete-masterclass-college)

DE / PRO / 05

#### Data Structures and Algorithms

The interview gate at every serious engineering employer, and why a pipeline that behaves on 8,760 rows behaves on 8.76 million.

[Open the syllabus](/courses/data-structures-algorithms-masterclass-college)

DE / ALL / 06

#### Browse the full catalogue

We also teach mathematics to degree level, plus web, app and game development.

[Open all courses](/courses)

What you actually build

## Forecasting the German day-ahead power price across 8,760 hours of 2025

Every market we teach into gets a first project from that country's own official measurements. Germany gets its electricity market. The source is SMARD, the Bundesnetzagentur platform at smard.de, published under a CC BY 4.0 licence. The student pulls three hourly series for 2025 in the Germany and Luxembourg bidding zone: grid load and residual load, the day-ahead price, and realised and forecast generation for wind and photovoltaics.

| Month, 2025 | Grid load, TWh | Residual load, TWh | Load minus residual, TWh | Day-ahead average, EUR/MWh |
| --- | --- | --- | --- | --- |
| January | 44.17 | 26.80 | 17.37 | 114.14 |
| February | 40.07 | 27.56 | 12.51 | 128.52 |
| March | 40.56 | 25.28 | 15.29 | 94.73 |
| April | 36.34 | 20.47 | 15.87 | 77.94 |
| May | 36.26 | 16.33 | 19.94 | 67.34 |
| June | 35.28 | 14.22 | 21.06 | 63.99 |
| July | 37.04 | 20.25 | 16.79 | 87.80 |
| August | 35.37 | 18.54 | 16.83 | 76.99 |
| September | 36.47 | 17.90 | 18.57 | 83.51 |
| October | 40.48 | 20.24 | 20.24 | 84.40 |
| November | 41.47 | 26.59 | 14.88 | 101.88 |
| December | 42.30 | 24.90 | 17.41 | 93.47 |
| **Year** | **465.82** | **259.07** | **206.75** | **89.32** |

Load columns are monthly sums of the published hourly series. The fourth column is grid load minus residual load. 89.32 is the official annual average price, not the mean of the twelve numbers above it. Note that 465.82 TWh is grid load, a different series from the 437.6 TWh of generation quoted elsewhere on this page.

Two lessons live in that bottom row. The first proves an identity. The Bundesnetzagentur release of 5 January 2026 reports 2025 onshore wind at 106.5 TWh, offshore wind at 26.1 TWh and photovoltaics at 74.1 TWh, summing to 206.7 TWh. The derived column sums to 206.75 TWh: two independent primary sources, 0.02 per cent apart. SMARD states the definition openly, that residual load is consumption minus generation from photovoltaic and wind installations. It is not a measurement. It is arithmetic on the other columns.

The second is quieter. The twelve monthly averages average to 89.56, while the official annual average is 89.32 euros per megawatt hour, because months contain different numbers of hours. A mean of means is not a mean.

The target is the day-ahead price, hour by hour. The honest features are grid load, forecast onshore wind, forecast offshore wind, forecast photovoltaics, hour of day, day of week, month and a public-holiday flag built per Land. One rule decides every inclusion: the auction closes at midday on the day before delivery, so a feature qualifies only if it is knowable by then. SMARD publishes forecast generation separately from realised generation so that distinction can be respected.

pandasscikit-learn matplotlibgradient boosting target leakagetime based splits

1. #### Download the three series and survive the German CSV convention

  Pull hourly data for 1 January to 31 December 2025 and confirm 8,760 rows before anything else. The file uses a semicolon separator, a comma as decimal mark and a full stop as thousands separator, so a default read produces text that merely looks numeric. Keep the CC BY 4.0 attribution line from the first cell.
2. #### Handle the clock before touching a model

  Timestamps are German local time, so 26 October 2025 contains 25 hours and 30 March 2025 contains 23. Join on the timestamp, never on a row index, then count hours per day, because a 24-hour assumption misaligns the join silently.
3. #### Prove the identity, then delete the column that carries it

  Compute grid load minus onshore wind minus offshore wind minus photovoltaics minus residual load for every hour and confirm the remainder is rounding noise, then reproduce the annual check of 206.75 TWh against 206.7 TWh. Drop residual load, because a model handed it alongside its own components has a linear combination of its inputs.
4. #### Count the hours at or below zero and plot the distribution

  There were 573 in 2025, 6.54 per cent of the year, against 457 of 8,784 hours in 2024. Draw the price histogram, mark zero, and study what the left tail does to any metric that divides by the actual value.
5. #### Fit three models, starting with one that cannot learn

  Predict the training mean as a floor, then a linear regression, then a gradient boosted tree. Score all three with mean absolute error in euros per megawatt hour, with root mean squared error alongside. Do not use mean absolute percentage error.
6. #### Split by time, then split at random, and write both scores down

  Train on January to September and test on October to December, then repeat with a random 80/20 split. The random split drops the neighbouring hour into the test set and flatters every model.
7. #### Swap forecasts for realised values, watch the error fall, then refuse to ship it

  Substitute realised wind and photovoltaic columns for the forecast ones, refit, and see how much better everything looks. Then explain why that model can never be deployed, because those values do not exist when the auction closes.

### The trap a beginner falls into, and it is specific to Germany

Nearly every regression tutorial reports mean absolute percentage error. Here it is broken by construction, because it divides by the actual value and the actual value crosses zero 573 times a year. An hour that cleared at EUR 0.02 per megawatt hour turns a EUR 5 error into a 25,000 per cent absolute percentage error, an hour at exactly zero makes it undefined, and one near-zero hour out of 8,760 can dominate the score. The student then either calls the model catastrophic or drops the offending rows and calls it excellent, and both verdicts are artefacts of the metric. Mean absolute error in euros per megawatt hour is the honest measure. Renewables supplied 58.8 per cent of generation in 2025, which is why the price goes below zero, so the more successful the Energiewende becomes, the more wrong the default metric gets.

### Three more legs, and each has caught a careful student

Leakage through residual load is the second, described in step 3. The third is validating at the wrong resolution: across the twelve months of 2025 the correlation between residual load and the average day-ahead price is 0.915, computed from the monthly series above. That is a monthly figure and it is not evidence of hourly skill.

Scope is the fourth. The Statistisches Bundesamt puts 2025 gross photovoltaic production at 92.2 billion kilowatt hours, while the SMARD figure for the same country and year is 74.1 TWh. They are 18.1 TWh apart and neither is wrong, because the series are scoped differently, one reporting gross production and the other the grid feed-in it publishes. Read the scope note before joining anything.

The distinction

## One default metric breaks 573 times a year, and that is the entire argument

Both halves get taught, in that order, and we are direct about which holds its value. The same public CSV yields a triumphant score or a humiliating one depending on how the rows are split and what the error is divided by.

#### Using AI tools

- Type a request, read the reply, reword it, read the reply again
- Learn one vendor's interface, then relearn it when the vendor redesigns it
- The task ends when the text on screen reads convincingly
- Nothing carries forward when a product is retired or the pricing page changes
- A few evenings of attention covers most of what there is to know
- Worth teaching all the same, mainly so a confident wrong answer gets caught

#### Building AI

- Download 8,760 hourly rows and verify the row count before believing anything
- Find the column that is arithmetic on the other columns, and take it out
- Notice that the standard percentage metric is undefined 573 times in one year
- Train on nine months, test on three, and publish both split scores side by side
- Quote an error in euros per megawatt hour, a unit a power trader will argue with
- Statistics and linear algebra are never deprecated, so none of it is relearned

Germany has just written the difference into statute. A system meets the EU AI Regulation by having documentation, a risk category and an evaluation somebody outside the building can check.

Why now, in Germany

## KI-MIG, an exascale machine at Jülich, and ten per cent of output AI-based by 2030

Germany now has a national implementing law for the EU AI Act. The KI-Marktüberwachungs- und Innovationsförderungsgesetz, KI-MIG for short, was approved by the federal cabinet on 11 February 2026, passed by the Bundestag on 11 June 2026 with light amendments, and approved by the Bundesrat on 10 July 2026. It enters into force the day after promulgation.

Its core is an appointment rather than a new institution. The Bundesnetzagentur becomes the central market surveillance and notifying authority for compliance with the EU AI Regulation, which the government calls the central element of the draft. The design is a one-stop shop: existing sector authorities in fully harmonised product regulation keep their roles, so a company deals with the regulator it already knows.

Supervision was paired with support in the same statute. The Bundesnetzagentur must establish at least one KI-Reallabor, a regulatory sandbox for testing innovative AI systems in a legally secure environment, and it hosts a coordination and competence centre plus a low-threshold KI-Servicedesk for SMEs and startups. The European frame is Regulation (EU) 2024/1689, in force since 2 August 2024, with 2 August 2026 as its next milestone.

The ambition is funded. The cabinet adopted the Hightech Agenda Deutschland in July 2025, run by the Bundesministerium für Forschung, Technologie und Raumfahrt under minister Dorothee Bär, naming six key technologies: artificial intelligence, quantum technologies, microelectronics, biotechnology, fusion and climate-neutral energy generation, and climate-neutral mobility. The AI target is explicit, that ten per cent of German economic output should be AI-based by 2030, and Germany intends to secure at least one European AI Gigafactory from mid-2027.

The compute already exists. JUPITER, Europe's first exascale supercomputer, was inaugurated on 5 September 2025 at Forschungszentrum Jülich and is operated by the Jülich Supercomputing Centre. It delivers one exaflop, exceeds 40 exaflops on AI workloads, and is built around roughly 24,000 NVIDIA GH200 Grace Hopper superchips supplied by Eviden. The EUR 500 million cost was split 50 per cent EuroHPC Joint Undertaking, 25 per cent the federal research ministry and 25 per cent the NRW Ministry of Culture and Science. It is warm-water cooled and anchors the JUPITER AI Factory, which opens capacity to startups, SMEs, industry and the public sector.

Adoption is still early, and that is the opportunity. The Statistisches Bundesamt found 20 per cent of German enterprises using artificial intelligence in 2024, up eight percentage points from 12 per cent in 2023, and Bitkom's 2025 IT labour market study, a telephone survey of 855 companies with at least three employees, puts unfilled IT specialist posts at more than 100,000. The most concrete buyer of the skill is the grid itself: Germany generated 437.6 TWh in 2025, of which 58.8 per cent came from renewables, and 573 of the year's 8,760 hours cleared at negative prices against 457 of 8,784 in 2024.

10 July 2026

Bundesrat approved the KI-MIG, making the Bundesnetzagentur Germany's AI market surveillance authority

1 exaflop

JUPITER at Forschungszentrum Jülich, Europe's first exascale supercomputer, inaugurated 5 September 2025

58.8 per cent

Share of Germany's 437.6 TWh of 2025 electricity generation that came from renewables

10 per cent

Share of German economic output the Hightech Agenda wants to be AI-based by 2030

School and university

## Informatik is a Pflichtfach in ten Länder. A Pflichtfach is not a trained model.

### Sixteen systems, no national anything

Education in Germany is a Länder competence. There is no national curriculum, no national school calendar and no national exam date.

The Informatik-Monitor 2025/26, published in October 2025 by the Gesellschaft für Informatik with the Stifterverband, finds ten Länder with Informatik compulsory at all weiterführende Schulen in 2025/26: Baden-Württemberg, Bayern, Hamburg, Mecklenburg-Vorpommern, Niedersachsen, Nordrhein-Westfalen, Saarland, Sachsen, Schleswig-Holstein and Thüringen. Hamburg is the newest entrant. Five Länder do not: Berlin, Brandenburg, Bremen, Hessen and Rheinland-Pfalz.

### Sachsen-Anhalt is the sixteenth, and the most interesting

It splits by school type. From 2025/26 Informatik is compulsory in grades 5 to 8 at Sekundarschule, Gemeinschaftsschule and Gesamtschule, with one weekly hour in grades 6 to 8 plus an hour moved into grade 5, extending to grades 9 and 10 from 2026/27. At the Gymnasium it is not compulsory at all: it is an elective in grades 9 and 10 at two weekly hours, while grades 5 to 8 take the cross-curricular course Lernen in der digitalen Welt, which carries limited informatics content. A child on the academic track can end up with less computer science than a child at the Sekundarschule down the road.

### Why a compulsory subject is not the same product

A subject running at one or two weekly hours teaches digital literacy and the beginnings of programming. It does not get a student to training a model, splitting data honestly, and reading an error in units somebody outside the classroom would accept. Exams are set per Land too: Nordrhein-Westfalen's written Zentralabitur 2027 runs 13 April to 5 May 2027 with resits 10 to 24 May, all papers starting at 09:00. We ask for the school's own schedule.

### The India link, the sharpest fact in this market

Wissenschaft weltoffen 2025, published on 26 November 2025 by the DAAD with the DZHW, counted roughly 402,000 international students and doctoral candidates in Germany in winter semester 2024/25. Nearly 59,000 came from India, up 20 per cent year on year and the largest single national group, ahead of China. That is the family this school already serves.

### TUM, M.Sc. Informatics

Bachelor programmes at German universities are largely taught in German, and the English route opens at Master's level. At Technische Universität München the M.Sc. Informatics is usually taught in English, 120 ECTS across four semesters, admitting for the winter semester only. The application window runs 1 February to 31 May each year, so the 2026/27 round closed on 31 May 2026 and the next runs 1 February to 31 May 2027. Admission goes through a two-stage Eignungsverfahren scoring Bachelor grades and written documents, after which a candidate is admitted, rejected, or invited to an interview. Tuition for students from non-EU countries is EUR 6,000 per semester full-time, while German and EU students pay the EUR 97.00 student fee.

### Tübingen, M.Sc. Machine Learning

Eberhard Karls Universität Tübingen teaches its M.Sc. Machine Learning in English only, 120 ECTS, winter-semester start only. Applications open in February and close on 30 April, so the 2026 round closed on 30 April 2026 and the next deadline is 30 April 2027. English evidence is required at IELTS academic 7.0 overall, TOEFL iBT 100, or Cambridge CAE 180, and a German Abitur carrying six to seven years of English is also accepted. Non-EU citizens pay EUR 1,500 per semester plus roughly EUR 200 in semester fees. Around it sit Cyber Valley, the Tübingen AI Center, the ELLIS Institute Tübingen and the Max Planck Institutes. RWTH Aachen University runs its M.Sc. Data Science in English only.

The route is reachable, and it is decided on a Bachelor transcript and a written application assessed in spring, roughly sixteen months before the course starts. The mathematics and the portfolio have to exist well before that deadline, which is the argument for starting in school rather than in the gap year.

How the classes run

## Sixteen school calendars, three fixed slots, and a boundary on 25 October 2026

Germany observes Central European Time in winter and Central European Summer Time in summer. India, where the teaching operation sits, stays on UTC plus 5 hours 30 minutes all year and does not observe daylight saving, so the gap is not a constant. Summer time began on Sunday 29 March 2026 and ends on Sunday 25 October 2026, resuming on Sunday 28 March 2027. India is 3 hours 30 minutes ahead today and 4 hours 30 minutes ahead from 25 October.

Tue and Thu 17:00 to 18:30

German time, for secondary students. India: 20:30 to 22:00 until 25 October, then 21:30 to 23:00.

Wed 18:30 to 20:00

German time, for working adults. India: 22:00 to 23:30 until 25 October, then 23:00 to 00:30. The slot the clock change strains.

Sat 09:30 to 11:30

German time, the default German cohort and the strongest build slot. India: 13:00 to 15:00 until 25 October, then 14:00 to 16:00.

### What a session is

Each slot is ninety minutes of live video, because a build task does not fit inside an hour. Both screens stay shared, so a mistake gets argued about in the minute it is typed rather than found in a marked file on Thursday. Batches hold five to eight learners, or one to one, and between sessions there is something to build and bring back.

The clock change here is not merely a scheduling nuisance, it is part of the first project. The SMARD hourly series is published on German local time, so 25 October 2026 contains 25 hours and 29 March 2026 contains 23.

### The German year, and the weeks we keep clear

Each Land sets its own calendar, and Bayern and Baden-Württemberg sit outside the nationwide rotation, starting their summer break later than everyone else. The Bavarian dates, from the Bavarian Ministry of Education, are the ones we can quote precisely. Sommerferien 2026 run 3 August to 14 September 2026, so the 2026/27 school year begins on Tuesday 15 September 2026. Then Herbst- and Allerheiligenferien 2 to 6 November 2026, Weihnachtsferien 24 December 2026 to 8 January 2027, Frühjahrsferien 8 to 12 February 2027, Osterferien 22 March to 2 April 2027, Pfingstferien 18 to 28 May 2027, and Sommerferien 2027 from 2 August to 13 September 2027.

The Bavarian Osterferien end eleven days before the Nordrhein-Westfalen Abitur block opens on 13 April 2027, so a single exam intensive cannot serve both. We avoid opening cohorts into the Bavarian summer windows. Admission is not tied to a term, so a student can begin in any week, which matters more here because sixteen calendars never line up.

Student work

## Four addresses a student can hand to a stranger

Germany's own AI infrastructure is built to be used rather than described, which is the point of the JUPITER AI Factory. We ask the same at student scale. Each of the four below was deployed by a student and is still answering at a public address. The rest live in [Student Labs](/student-labs).

![NutriLife AI nutrition coach project screenshot](/images/projects/nutrilife.webp)

AI and ML

#### NutriLife, an AI nutrition coach

Scores a record of what has been eaten against a stated goal and explains the gap.

by Bhavya · [Open the live project](https://nutrilife-bhavya.lovable.app)

![Misti AI chatbot for maths and coding screenshot](/images/projects/misti.webp)

AI and ML

#### Misti, an AI chatbot for maths and coding

Answers maths and programming questions on a domain of its own.

by Harshit · [Open the live project](https://misti.modernagecoders.com)

![GuardianX AI internet safety assistant screenshot](/images/projects/guardianx.webp)

AI and ML

#### GuardianX, an AI safety assistant

Walks a young person through whether a situation online is safe.

by Vivaan · [Open the live project](https://guardianx-cybersaver.lovable.app)

![SkyCast weather app screenshot](/images/projects/skycast.webp)

Data and forecasting

#### SkyCast, a weather app

Pulls live weather feeds and forecasts from them, the closest relative to the work above.

by Krish · [Open the live project](https://krish-shroff.github.io/AuraWeatherTech/)

Fees

## EUR 35.16 a month, and the direction of the rate that produced it

A non-EU student on the TUM M.Sc. Informatics pays EUR 6,000 per semester in tuition. Whether a learner has the mathematics for that programme is settled years before the tuition is. Billing here is monthly, there is no joining charge, and nobody signs up for a year.

Free first class

EUR 0

USD 0, no card needed

- A taught lesson, not a sales call
- Sets the starting band honestly
- Sit through it, then decide

Book it

Group batch

EUR 35.16

USD 40 a month

- Five to eight learners, one named teacher
- Live video only, nothing resold as a recording
- A build task every week, reviewed by name
- Certificate on completion

Start here

One to one

EUR 87.90

USD 100 a month

- Private pace and a private timetable
- Built around an Abitur year or a Master's deadline
- Syllabus rebuilt around the goal you state

Enquire

One dated rate produced every euro figure above. The European Central Bank published its euro reference rate for 24 July 2026 at EUR 1 to USD 1.1377, and the direction is where conversions go wrong: one euro buys 1.1377 US dollars, so a dollar price becomes euros by division, not multiplication. USD 40 divided by 1.1377 is EUR 35.16, and USD 100 is EUR 87.90. The dollar price is the fixed one.

What families say

## Where the 4.9 comes from, and why we have never written one

Every line below was left on Google by a family that pays us. We neither draft nor commission testimonials, and the sample is 547.

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

Questions from Germany

## Eight questions German families put to us before booking

### What language are the classes taught in, and does English teaching help with a German university application?

Classes are taught in English. At Master's level that is genuinely useful, because the flagship programmes are English-taught: the M.Sc. Informatics at Technische Universität München is usually taught in English, the M.Sc. Machine Learning at Eberhard Karls Universität Tübingen is taught in English only, and so is the M.Sc. Data Science at RWTH Aachen University. It does not carry a Bachelor application, where teaching at German universities is largely in German, and it does not replace German inside a German school.

### When do classes run in German time, and what changes on 25 October 2026?

Three slots, all German local time: Tuesday and Thursday 17:00 to 18:30, Wednesday 18:30 to 20:00, and Saturday 09:30 to 11:30. Our teachers sit in India, on UTC plus 5 hours 30 minutes all year with no clock change. Germany is on Central European Summer Time until Sunday 25 October 2026, so India is 3 hours 30 minutes ahead today and 4 hours 30 minutes ahead from that Sunday. Summer time resumes on 28 March 2027, and recurring bookings are re-cut at both boundaries.

### What does it cost in euros?

A group batch of five to eight students is USD 40 a month, which is EUR 35.16, and one to one teaching is USD 100 a month, which is EUR 87.90. The conversion uses the European Central Bank euro reference rate published for 24 July 2026, where one euro buys 1.1377 US dollars, so a dollar price is divided rather than multiplied. The euro floats, so the euro figures move and the dollar price is the fixed one. Billing is monthly and the first class is free.

### Our school already has Informatik as a Pflichtfach. Why would we add this?

Because the two do different jobs. The Informatik-Monitor 2025/26, published in October 2025 by the Gesellschaft für Informatik with the Stifterverband, records ten Länder with Informatik compulsory at all weiterführende Schulen in 2025/26, and that is a genuine change. A subject at one or two weekly hours delivers digital literacy and the beginnings of programming. It does not get a student to training a model on 8,760 rows, spotting the column that hands the model its own answer, and reporting the error in euros per megawatt hour. We fill that gap rather than repeat the Pflichtfach.

### We live in Berlin, Brandenburg, Bremen, Hessen or Rheinland-Pfalz, where Informatik is not compulsory. Is my child behind?

Behind on exposure rather than on ability, and it is fixable from outside school. Those five Länder do not have Informatik as a compulsory subject at all weiterführende Schulen in 2025/26. Sachsen-Anhalt is the sixteenth case and splits by school type: from 2025/26 Informatik is compulsory in grades 5 to 8 at Sekundarschule, Gemeinschaftsschule and Gesamtschule, while at the Gymnasium it is only an elective in grades 9 and 10 at two weekly hours. A child on the academic track can end up with less computer science than a child at the Sekundarschule down the road.

### Does this prepare a student for the Abitur?

It builds the mathematics and the programming the subject rests on, and it is not an Abitur crammer. There is no national exam date, because each Land sets its own timetable. Nordrhein-Westfalen has published the framework for its written Zentralabitur 2027: the main block runs 13 April to 5 May 2027, resit dates run 10 to 24 May 2027, and every paper starts at 09:00. We ask each family for the school's own schedule rather than assume a national date that does not exist.

### How is this different from the prompt-engineering and AI-tools courses on sale here?

A prompting course tracks a product and a modelling course tracks mathematics, so the two age at very different speeds. Look at the first project on this page. A student downloads 8,760 hourly rows from SMARD, the Bundesnetzagentur electricity market data platform, finds the column that is pure arithmetic on the other columns, learns that the standard tutorial metric breaks on the 573 hours of 2025 that cleared at or below zero, and finishes able to quote an error a trader can argue with. None of that happens in a chat window.

### Now that Germany has its own AI implementing law, does any of this still matter?

It matters more. The KI-Marktüberwachungs- und Innovationsförderungsgesetz was approved by the federal cabinet on 11 February 2026, passed by the Bundestag on 11 June 2026 and approved by the Bundesrat on 10 July 2026, and it makes the Bundesnetzagentur the central market surveillance and notifying authority for compliance with the EU AI Regulation. The same statute requires at least one KI-Reallabor, a regulatory sandbox for testing innovative AI systems in a legally secure environment, plus a KI-Servicedesk aimed at smaller firms. Somebody has to evaluate a model honestly and write down why the evaluation holds. That is now a compliance skill as well as an engineering one.

Start here

## One free class, then you decide what happens next

Leave a number and a mentor calls back at an hour that works in German local time. The free class is taught, not sold: a teacher runs a real lesson, works out where the learner is, and recommends a band from what happened in the room.

Prefer to look around first? Read [how we teach](/how-we-teach), browse the [full course catalogue](/courses), or see what students have built in [Student Labs](/student-labs).

---

*Canonical: https://learn.modernagecoders.com/ai-and-machine-learning-classes-in-germany*
