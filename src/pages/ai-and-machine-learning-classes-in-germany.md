---
title: "AI and Machine Learning Classes in Germany | Build AI"
description: "Live online AI and ML classes for Germany, ages 6 to 67. Train real models on Bundesnetzagentur power data, not prompts. EUR 35.16 a month, first class free."
canonical: https://learn.modernagecoders.com/ai-and-machine-learning-classes-in-germany
source: src/pages/ai-and-machine-learning-classes-in-germany.html
provider: Modern Age Coders
areaServed: Germany
ages: 6 to 67
---

> Modern Age Coders is a live online school teaching learners in Germany from age 6 to age 67, in
> batches of five to eight or privately. The subject is model building rather than tool use: Python
> first, then the statistics and linear algebra that decide whether a result is real, then training
> and testing models on published German data such as the Bundesnetzagentur SMARD electricity series.
> Teaching is in English, on German clock time, and the timetable is written against the Land a
> family actually lives in, because sixteen of them set their own calendars. A group place is USD 40
> a month, EUR 35.16 at the reference rate published for 24 July 2026, and the first class costs
> nothing.

## Direct answers

**What language are the classes in?**
English. That is genuinely useful at Master's level, where the flagship programmes are English
taught: the M.Sc. Informatics at Technische Universität München is usually taught in English, the
M.Sc. Machine Learning at Eberhard Karls Universität Tübingen is taught in English only, and so is
the M.Sc. Data Science at RWTH Aachen University. It does not carry a Bachelor application, where
teaching at German universities is largely in German, and it does not replace German inside a German
school.

**When do the classes run in German time?**
Tuesday and Thursday 17:00 to 18:30, Wednesday 18:30 to 20:00, and Saturday 09:30 to 11:30, all
German local time. India stays on UTC plus 5 hours 30 minutes all year with no clock change, so
India is 3 hours 30 minutes ahead of Germany during CEST and 4 hours 30 minutes ahead from 25
October 2026. Recurring bookings are re-cut on 25 October 2026 and again on 28 March 2027.

**What makes this different from the AI courses sold in Germany?**
Most teach prompting. This teaches model building: opening a real published dataset, finding the
column that leaks the answer, splitting the data by time so the score is honest, measuring the error
in euros per megawatt hour, then improving it. A prompting course tracks a product. A modelling
course tracks mathematics.

**What does it cost?**
Group batch of five to eight students: USD 40 a month, which is EUR 35.16. One to one: USD 100 a
month, which is EUR 87.90. Converted at the European Central Bank euro foreign exchange reference
rate published for 24 July 2026, where one euro buys 1.1377 US dollars, so the dollar price is
divided rather than multiplied. The euro floats, so the euro figures move and the dollar price is
the fixed one. First class free, no card.

**What ages?**
6 to 67, across three separate programmes rather than one syllabus delivered at three speeds.

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

## The first project: predicting the German day-ahead electricity price

The data comes from SMARD, the Bundesnetzagentur electricity market data platform at smard.de, which
publishes the German market under a CC BY 4.0 licence, free to download, store and use with
attribution. The student pulls three published series at hourly resolution for calendar year 2025 in
the Germany and Luxembourg bidding zone: realised consumption as grid load and residual load, the
day-ahead auction price in euros per megawatt hour, and both realised and forecast generation for
onshore wind, offshore wind and photovoltaics. The year has 8,760 hours, which the Bundesnetzagentur
market review confirms in its own wording. 2024 had 8,784 because it was a leap year.

SMARD monthly series for 2025, Germany and Luxembourg bidding zone. Grid load and residual load are
monthly sums of the published hourly series in TWh, the fourth column is grid load minus residual
load, and the price column is the monthly average day-ahead price.

| Month, 2025 | Grid load, TWh | Residual load, TWh | Load minus residual, TWh | Day-ahead average, EUR/MWh |
|---|---|---|---|---|
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

Two lessons live in the bottom row.

The cross-check that proves an identity: the Bundesnetzagentur release of 5 January 2026 reports 2025
onshore wind at 106.5 TWh, offshore wind at 26.1 TWh and photovoltaics at 74.1 TWh, which sums to
206.7 TWh. The derived load minus residual column sums to 206.75 TWh. Two independent primary
sources, 0.05 TWh and 0.02 per cent apart. SMARD states the definition openly: residual load is
consumption minus generation from photovoltaic and wind installations. Residual load is not a
measurement, it is arithmetic on the other columns.

The year price is not the column mean: the twelve monthly averages average to 89.56, while the
official annual average is 89.32 euros per megawatt hour, because months contain different numbers
of hours. A mean of means is not a mean.

**Target:** the day-ahead wholesale price for the Germany and Luxembourg bidding zone, EUR/MWh, hour
by hour.

**Honest features:** grid load, forecast wind onshore, forecast wind offshore, forecast photovoltaic,
hour of day, day of week, month, and a public-holiday flag built per Land. One rule decides every
inclusion: the day-ahead auction closes at midday on the day before delivery, so a feature qualifies
only if it is knowable by then. SMARD publishes forecast generation separately from realised
generation precisely so this distinction can be respected.

Steps the student works through:

1. Download the three series from the SMARD download centre at hourly resolution for 1 January to
   31 December 2025 in the Germany and Luxembourg zone, and confirm 8,760 rows. Parse the German CSV
   convention: semicolon separator, comma as decimal mark, full stop as thousands separator, hyphen
   for missing values. Keep the CC BY 4.0 attribution line
2. Handle the clock. The timestamps are German local time, so 26 October 2025 has 25 hours and 30
   March 2025 has 23. Join on the timestamp, never on a row index, and check the hour counts before
   going further
3. Compute grid load minus wind onshore minus wind offshore minus photovoltaics minus residual load
   for every hour and confirm the remainder collapses to rounding noise. Reproduce the annual check,
   206.75 TWh derived against 206.7 TWh from the Bundesnetzagentur components. Then drop residual
   load and write one sentence saying why, because a model handed it plus its own components has been
   handed a linear combination of the inputs
4. Count the hours where the price is at or below zero. There were 573 in 2025, 6.54 per cent of the
   year, against 457 of 8,784 hours in 2024. Plot the price histogram, mark zero, and look at what
   the left tail does to any ratio-based metric
5. Fit three models: predict the training mean as a floor, then a linear regression, then a gradient
   boosted tree. Score all three with mean absolute error in EUR/MWh, and with RMSE alongside it
   because the spikes matter. Do not score them with MAPE
6. Split by time, not at random. Train on January to September, test on October to December, then
   repeat with a random 80/20 split and write both test scores down. The random split puts the
   neighbouring hour in the test set and flatters every model, including the ones that learned
   nothing
7. Swap the realised wind and photovoltaic columns in for the forecast ones, refit, and watch the
   error fall. Then explain why that model can never be deployed, and cite SMARD and the
   Bundesnetzagentur as CC BY 4.0 requires

### The four traps

**The metric, and it is specific to Germany.** Every regression tutorial reports mean absolute
percentage error. In the German power market that metric is broken by construction, because it
divides by the actual value and the actual value crosses zero 573 times a year. An hour that cleared
at EUR 0.02/MWh turns a EUR 5 error into a 25,000 per cent absolute percentage error. An hour that
cleared at exactly zero makes it undefined. For the negative hours the sign flips and the percentage
stops meaning anything, and one near-zero hour out of 8,760 can dominate the whole score. The student
then either concludes the model is catastrophic or quietly drops the offending rows and concludes it
is excellent, and both conclusions are artefacts of the metric rather than facts about the model.
Mean absolute error in EUR/MWh is the honest measure. Renewables supplied 58.8 per cent of generation
in 2025, which is exactly why the price goes negative, so the more successful the energy transition
becomes the more wrong the default metric gets.

**Leakage through the residual load column**, described in step 3. It is a genuine identity verified
against two primary sources, and a pipeline that keeps residual load will report a suspiciously good
fit and will have learned subtraction.

**Validating at the wrong resolution.** Across the twelve months of 2025 the correlation between
residual load and the average day-ahead price is 0.915, computed from the published monthly series
above. That is a monthly figure. It is not evidence of hourly skill, because aggregating to months
averages away most of the variance the model is actually asked to explain. A model validated on
monthly aggregates and deployed hourly will disappoint.

**Scope, the one that catches careful students.** Destatis puts 2025 gross photovoltaic production at
92.2 billion kWh. The Bundesnetzagentur SMARD figure for the same country and the same year is 74.1
TWh. They are 18.1 TWh apart, and neither is wrong: the two series are scoped differently, Destatis
reporting gross production and SMARD reporting the grid feed-in it publishes. Wind shows the same
effect more mildly, 134.2 against 132.6 TWh. Read the scope note before joining anything, and never
mix two agencies' series inside one feature column.

Tools: pandas, scikit-learn, matplotlib, gradient boosting.

## Why this matters in Germany now

Germany has a national implementing law for the EU AI Act. The KI-Marktüberwachungs- und
Innovationsförderungsgesetz, KI-MIG, was approved by the federal cabinet on 11 February 2026, passed
by the Bundestag on 11 June 2026 with light amendments, and approved by the Bundesrat on 10 July
2026. The federal government states that it enters into force the day after promulgation.

The Bundesnetzagentur becomes the central market surveillance authority and notifying authority for
compliance with the EU AI Regulation, described by the government as the central element of the
draft. The design is a one-stop shop: existing sector market surveillance authorities in fully
harmonised product regulation keep their roles, so a company deals with the regulator it already
knows. The Bundesnetzagentur must establish at least one KI-Reallabor, a regulatory sandbox where
innovative AI systems can be tested in a legally secure environment, and it hosts a coordination and
competence centre that pools AI expertise, makes it available to other authorities and provides
information to businesses, plus a low-threshold KI-Servicedesk aimed at SMEs and startups. Germany
chose to regulate AI through an existing technical regulator rather than build a new agency, and it
paired supervision with a sandbox and a service desk in the same statute.

The European frame is Regulation (EU) 2024/1689, which entered into force on 2 August 2024, with 2
August 2026 as the next major obligations milestone.

The cabinet adopted the Hightech Agenda Deutschland in July 2025, run by the Bundesministerium für
Forschung, Technologie und Raumfahrt under minister Dorothee Bär. It names six key technologies:
artificial intelligence, quantum technologies, microelectronics, biotechnology, fusion and
climate-neutral energy generation, and climate-neutral mobility. The AI target is explicit, that ten
per cent of German economic output should be AI-based by 2030. Germany intends to secure at least one
of the European AI Gigafactories, with operations expected from mid-2027, and supporting measures
include the KI-Robotikbooster with embodied-AI demonstration centres in 2025 and 2026, a second phase
of the AI Service Centres, a Software-Engineering research programme from 2027, and participation in
IPCEI Künstliche Intelligenz. More than EUR 2 billion is to flow into fusion research by 2029.

JUPITER, Europe's first exascale supercomputer, was inaugurated on 5 September 2025 at
Forschungszentrum Jülich, operated by the Jülich Supercomputing Centre, with Chancellor Friedrich
Merz and North Rhine-Westphalia Minister-President Hendrik Wüst attending. It delivers one exaflop, a
quintillion operations per second, and exceeds 40 exaflops on AI workloads, built around roughly
24,000 NVIDIA GH200 Grace Hopper superchips supplied by Eviden. The EUR 500 million cost was split 50
per cent EuroHPC Joint Undertaking, 25 per cent the Bundesministerium für Forschung, Technologie und
Raumfahrt and 25 per cent the NRW Ministry of Culture and Science. It is warm-water cooled, feeds
waste heat into the campus, and is the most energy-efficient of the world's five fastest systems.
JUPITER is the heart of the JUPITER AI Factory, which opens capacity to startups, SMEs, industry,
research institutions and the public sector.

Adoption is still early, which is the opportunity. The Statistisches Bundesamt found that 20 per cent
of German enterprises used artificial intelligence in 2024, up eight percentage points from 12 per
cent in 2023. Bitkom's 2025 IT labour market study, a telephone survey of 855 companies with at least
three employees, puts unfilled IT specialist posts in Germany at more than 100,000.

The most concrete employer of this exact skill is the electricity system itself. In 2025 Germany
generated 437.6 TWh, of which 257.5 TWh, or 58.8 per cent, came from renewables. Onshore wind
supplied 106.5 TWh, offshore wind 26.1 TWh, photovoltaics 74.1 TWh and biomass 36.0 TWh, against
lignite 67.2 TWh, natural gas 60.6 TWh and hard coal 28.2 TWh, with nuclear at zero. The average
day-ahead wholesale price was EUR 89.32 per MWh, up 13.8 per cent on the EUR 78.51 of 2024, and 573
of the year's 8,760 hours cleared at negative prices, against 457 of 8,784 hours in 2024, per the
Bundesnetzagentur release of 5 January 2026. A system with that much weather-driven generation runs
on forecasting. Note that the 437.6 TWh of generation and the 465.82 TWh of grid load in the project
table are different quantities from different series, and keeping them apart is itself the lesson.

## School and university fit

Education is a Länder competence. There is no national curriculum, no national school calendar and no
national exam date, because sixteen states set their own, and German school qualifications do not use
per-subject alphanumeric codes.

The Informatik-Monitor 2025/26, published in October 2025 by the Gesellschaft für Informatik with the
Stifterverband, finds ten Länder with Informatik as a compulsory subject at all weiterführende
Schulen in school year 2025/26: Baden-Württemberg, Bayern, Hamburg, Mecklenburg-Vorpommern,
Niedersachsen, Nordrhein-Westfalen, Saarland, Sachsen, Schleswig-Holstein and Thüringen. Hamburg is
the newest entrant, and Thüringen has had it as a verpflichtendes Fach since 2024/25.

Five Länder do not: Berlin, Brandenburg, Bremen, Hessen and Rheinland-Pfalz.

Sachsen-Anhalt is the sixteenth and it splits by school type. From 2025/26 Informatik is compulsory
in grades 5 to 8 at Sekundarschule, Gemeinschaftsschule and Gesamtschule, with one weekly hour in
grades 6 to 8 plus an hour moved into grade 5, extending to grades 9 and 10 from 2026/27 at
Sekundarschule and Gemeinschaftsschule. At the Gymnasium it is not compulsory at all: it is an
elective in grades 9 and 10 at two weekly hours, and grades 5 to 8 instead take the cross-curricular
course Lernen in der digitalen Welt, which carries limited informatics content. A child at the
academic-track school can end up with less computer science than a child at the Sekundarschule down
the road.

Compulsory Informatik in ten states is a real change, but a compulsory subject at one or two weekly
hours teaches digital literacy and the beginnings of programming. It does not get a student to
training a model, splitting data honestly and reading an error in real units. This school fills that
gap rather than duplicating the Pflichtfach.

Exams are set per Land. Nordrhein-Westfalen's written Zentralabitur 2027 runs as a main block from 13
April to 5 May 2027, with resit dates from 10 to 24 May 2027, all papers starting at 09:00, and
per-subject dates fixed separately in the annex to that decision. We ask for the school's own
schedule rather than assume a national date.

Wissenschaft weltoffen 2025, published on 26 November 2025 by the DAAD with the DZHW, counted roughly
402,000 international students and doctoral candidates in Germany in winter semester 2024/25, of whom
nearly 59,000 came from India, up 20 per cent year on year and the largest single national group,
ahead of China.

Bachelor programmes at German universities are largely taught in German; the English-taught route
opens at Master's level. Both flagship AI programmes below teach in English and admit for the winter
semester only, so the application clock runs in the spring.

Technische Universität München, M.Sc. Informatics: language of instruction usually English, 120 ECTS
over four semesters, application window 1 February to 31 May each year for the winter semester, so
the 2026/27 round closed on 31 May 2026 and the next window is 1 February to 31 May 2027 for winter
semester 2027/28. Admission runs through a two-stage Eignungsverfahren scoring Bachelor grades and
written documents, after which a candidate is admitted, rejected, or invited to an admissions
interview. Tuition for students from non-EU countries is EUR 6,000 per semester full-time, prorated
for part-time; German and EU students pay the EUR 97.00 student fee.

Eberhard Karls Universität Tübingen, M.Sc. Machine Learning: taught in English only, 120 ECTS,
winter-semester start only. Applications open in February and close on 30 April, so the 2026 round
closed on 30 April 2026 and the next deadline falls on 30 April 2027 for winter semester 2027/28.
English evidence is required at IELTS academic 7.0 overall, TOEFL iBT 100, or Cambridge CAE 180, with
a German Abitur carrying six to seven years of English also accepted. Non-EU citizens pay EUR 1,500
per semester plus roughly EUR 200 in regular semester fees, subject to the university's published
exemption list. The surrounding research ecosystem is unusually dense: Cyber Valley, the Tübingen AI
Center, the ELLIS Institute Tübingen and the Max Planck Institutes.

RWTH Aachen University, M.Sc. Data Science, is taught in English only.

The practical consequence: an English-taught German Master's in machine learning is genuinely
reachable, but it is decided on a Bachelor transcript and a written application assessed in spring,
roughly sixteen months before the course starts. The mathematics and the portfolio have to exist well
before the deadline, which is the argument for starting the modelling work in school rather than in
the gap year.

## Class times and the German year

| Slot, German local time | India, CEST (to 25 Oct 2026) | India, CET (from 25 Oct 2026) | Typical group |
|---|---|---|---|
| Tue and Thu 17:00 to 18:30 | 20:30 to 22:00 | 21:30 to 23:00 | Secondary students |
| Wed 18:30 to 20:00 | 22:00 to 23:30 | 23:00 to 00:30 | Working adults |
| Sat 09:30 to 11:30 | 13:00 to 15:00 | 14:00 to 16:00 | Default German cohort |

Germany observes Central European Time, UTC plus 1, in winter and Central European Summer Time, UTC
plus 2, in summer. India stays on UTC plus 5 hours 30 minutes all year and does not observe daylight
saving. Summer time began on Sunday 29 March 2026, when clocks went from 02:00 to 03:00, and ends on
Sunday 25 October 2026, when clocks go from 03:00 back to 02:00. Summer time resumes on Sunday 28
March 2027. Recurring bookings are re-cut at the 25 October 2026 boundary and again on 28 March 2027.

The clock change is not merely a scheduling nuisance here, it is part of the first project. The SMARD
hourly electricity series is published on German local time, so 25 October 2026 contains 25 hours and
29 March 2026 contains 23. A student who assumes 24 hours per day gets a silently misaligned join.

There is no national school calendar. Each Land sets its own, and Bayern and Baden-Württemberg sit
outside the nationwide rotation, starting their summer break later than everyone else. The Bavarian
dates, from the Bavarian Ministry of Education, are: Sommerferien 2026 from 3 August to 14 September
2026, so the 2026/27 school year begins on Tuesday 15 September 2026; Herbst- and Allerheiligenferien
2 to 6 November 2026; Weihnachtsferien 24 December 2026 to 8 January 2027; Frühjahrsferien 8 to 12
February 2027; Osterferien 22 March to 2 April 2027; Pfingstferien 18 to 28 May 2027; Sommerferien
2027 from 2 August to 13 September 2027.

Two scheduling consequences. The Bavarian Osterferien of 22 March to 2 April 2027 end eleven days
before the NRW Abitur block opens on 13 April 2027, so a single exam intensive cannot serve both: it
runs twice or targets one Land. And we avoid opening new cohorts into 3 August to 14 September 2026
and 2 August to 13 September 2027, the Bavarian summer windows, which are the longest continuous
absences in the German year.

Admission is not tied to a term. A student can begin in any week of the year, which matters more in
Germany than in a single-calendar country precisely because sixteen calendars never line up.

## Student work

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
- Group batch USD 40 a month, EUR 35.16; one to one USD 100 a month, EUR 87.90; first class free
- Contact: [/contact](/contact)
