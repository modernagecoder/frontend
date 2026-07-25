---
title: "AI and Machine Learning Classes in Zurich | Build AI"
description: "Live online AI and machine learning classes for students in Zurich, ages 6 to 67. Train real models in Python, not just prompts. From about CHF 32 a month."
canonical: https://learn.modernagecoders.com/ai-and-machine-learning-classes-in-zurich
source: src/pages/ai-and-machine-learning-classes-in-zurich.html
provider: Modern Age Coders
areaServed: Zurich, Switzerland
ages: 6 to 67
---

> Modern Age Coders teaches live online AI and machine learning to learners in Zurich from age 6 to
> age 67, in groups of five to eight or privately. The syllabus begins with Python and the
> mathematics a model actually runs on, then moves through training, evaluation and deployment, so
> a student finishes able to build a system rather than only query one. Group fees are USD 40 a
> month, roughly CHF 32 at 0.8069 francs to the dollar, and the first class costs nothing.

## Direct answers

**When do classes run in Zurich time?**
Tuesday and Thursday 17:30 to 18:45, Wednesday 18:15 to 19:30, and Saturday 10:00 to 11:30, all
Zurich local time. Zurich is on CEST, UTC plus 2, from 29 March 2026 to 25 October 2026 and CET,
UTC plus 1, through the winter. India is on IST, UTC plus 5:30, all year with no daylight saving,
so India is 3 hours 30 minutes ahead in summer and 4 hours 30 minutes ahead in winter. The Zurich
slot never moves. The Indian side of it shifts by an hour twice a year, and that is handled on the
teaching roster.

**What separates this from the other AI classes sold in Zurich?**
Most of them teach prompting. This teaches model building: opening a published dataset, checking
it against its own documentation, choosing a model, training it, reporting the error in francs,
then working out whether an improvement is real. Prompting is an interface skill and interfaces
get rebuilt. Modelling runs on probability, matrices and code.

**What does it cost?**
Group batch of five to eight learners: USD 40 a month, about CHF 32.28 at 0.8069 francs to the
dollar. One to one: USD 100 a month, about CHF 80.69. First class free, no card. For local scale,
CHF 32 is roughly two per cent of the CHF 1,578 median net monthly rent on a 3-room flat in the
city in 2024.

**What ages?**
6 to 67, taught as three separate curricula rather than one course run at three speeds.

**What language?**
English. ETH Zurich teaches the first year of Bachelor Informatik in German, and the University of
Zurich requires German at CEFR level C1, so the German is still on the family to acquire. What an
English language AI class removes is the second barrier, the subject itself.

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

## The first project: predicting a Zurich rent, and finding the CHF 853 the model cannot see

Source data is the Mietpreiserhebung run by Statistik Stadt Zürich, reference date 1 April 2024,
covering 161,234 dwellings of two, three and four rooms, built from 53,054 digitally supplied
prices plus a random sample of 6,797 units in a two layer stratified design. The open dataset is
published under CC0 on data.stadt-zuerich.ch as the MPE Abfragetool, with medians, quartiles, 95
per cent confidence intervals and sample sizes at city, Stadtkreis and Stadtquartier level for 2022
and 2024, split by whether the landlord is gemeinnützig or not.

| Segment, 2024 | Median net rent, CHF per month | Median CHF per m2 |
|---|---|---|
| 2-room, all landlords | 1,424 | 25.4 |
| 3-room, all landlords | 1,578 | 21.3 |
| 4-room, all landlords | 1,870 | 19.2 |
| 3-room, gemeinnützig | 1,022 | |
| 3-room, private landlord | 1,875 | |
| Kreis 1, Altstadt, private | | 36 |
| Kreis 8, Riesbach, private | | 32 |
| Hottingen, Quartier, private | | 30 |
| Schwamendingen, Affoltern, Leimbach, private | | about 22 |
| Whole city, all dwellings, 2022 | | 20.5 |
| Whole city, all dwellings, 2024 | | 21.8 |

Empty cells are not missing data. The survey publishes rent levels and per square metre rates in
different cuts, and carrying a number across from one cut into another is the error the project
teaches. The labels also mix levels: Kreis 1 and Kreis 8 are districts, while Schwamendingen,
Affoltern, Leimbach and Hottingen are Quartier names.

The trap: Swiss co-operative and city owned flats are let at Kostenmiete, cost rent, rather than
market rent. In this same survey the median three room flat is CHF 1,022 with a gemeinnützig
landlord and CHF 1,875 with a private one, a gap of CHF 853 that has nothing to do with location or
size. Because the co-operative share varies enormously between Quartiere, a model trained without a
landlord flag learns "this Quartier has a lot of co-operatives" and stores it as "this Quartier is
cheap", then under-predicts a real private listing by hundreds of francs. The tell is residuals
that go bimodal instead of normal.

Steps the student works through:

1. Download the CC0 CSV, load it in pandas, print the schema, and confirm the gemeinnützig flag,
   the sample size column and the confidence interval columns are present rather than assumed.
   Reproduce the three published medians, 1,424, 1,578 and 1,870, before modelling anything
2. Build the naive model on purpose: room count plus Kreis treated as an integer, plain linear
   regression, and record the mean absolute error
3. Break it in public. Ask for a private three room flat in Riesbach and compare against the
   published private three room median of CHF 1,875, then plot residuals and watch them split into
   two clumps
4. Re-encode. One-hot the Quartier and the Kreis, add the gemeinnützig flag and floor area, weight
   every row by its published sample size, and compare against the honest baseline of always
   predicting the city median of CHF 1,578
5. Split honestly. Hold out whole Stadtquartiere rather than random rows, because the 2022 and 2024
   rows for the same Quartier are near duplicates and a random split leaks
6. Quantify the confound. Fit with and without the gemeinnützig flag and print how far each
   Quartier coefficient moves, showing which Quartiere stop looking cheap once landlord type is
   controlled for
7. Ship a small page taking rooms, Quartier, landlord type and m2 that returns a range, printing
   the survey's own 95 per cent confidence interval beside it so nobody mistakes a median for a
   price

Three smaller traps sit alongside the main one: the Kreis number is not an ordering, since Kreis 1
runs at 36 francs per square metre while Leimbach inside Kreis 2 sits near 22; there is no single
price per square metre, since the rate falls from 25.4 to 21.3 to 19.2 as flats grow; and every row
is a cell median with a very different sample size behind it, so unweighted fitting is wrong.

Tools: pandas, scikit-learn, matplotlib, one-hot encoding, sample weights, grouped hold-out.

## Why this matters in Zurich now

Switzerland did not copy the EU AI Act. On 12 February 2025 the Federal Council fixed a sector
specific course: amend existing laws where needed, and use cross sectoral rules only where
fundamental rights such as data protection require them. On 27 March 2025 Federal Councillor Albert
Rösti signed the Council of Europe Framework Convention on Artificial Intelligence and Human
Rights, Democracy and the Rule of Law, CETS No. 225, in Strasbourg, making Switzerland the
fifteenth signatory. The Federal Department of Justice and Police is drafting the implementing bill
with DETEC and the FDFA, with a consultation draft due by the end of 2026. On 21 March 2025 the
Federal Chancellery set out three strategic priorities: build AI competences, ensure trustworthy
use, and increase efficiency.

On the capability side, the Swiss AI Initiative, a joint effort of EPFL, ETH Zürich and the Swiss
National Supercomputing Centre, released Apertus on 2 September 2025 under Apache 2.0 in 8 billion
and 70 billion parameter sizes, trained on 15 trillion tokens across more than 1,000 languages on
the Alps supercomputer at CSCS in Lugano, which runs on over 10,000 NVIDIA Grace Hopper superchips
and 100 per cent renewable power.

The corporate cluster is dense. Google's Zurich site is the company's largest research, development
and engineering hub outside the United States. IBM Research Europe in Rüschlikon was IBM's first
European laboratory, opened in Adliswil in 1956 and moved to its Rüschlikon campus in 1962, with
staff spanning about 45 nationalities and four Nobel laureates across two prizes, the 1986 physics
prize for the scanning tunnelling microscope and the 1987 prize for high temperature
superconductivity. Anthropic announced a Zurich office on 4 November 2025, its third in Europe
after London and Dublin, led by Neil Houlsby from Google DeepMind. OpenAI opened a Zurich office,
its fifth European location after Dublin, London, Paris and Brussels. Microsoft runs an AI lab here
under Marc Pollefeys, and Meta, Apple, NVIDIA and Huawei also operate research and development in
the region. Named local AI companies include LatticeFlow, Daedalean, Synthara, Starmind, Squirro
and Cradle.

The city itself is the reason the market exists. Statistik Stadt Zürich puts the resident
population at 452,421 at the end of 2025, an all time record, up 3,757 on the year from 4,535
births, 3,043 deaths, 40,123 arrivals and 37,858 departures, with foreign nationals at 33.9 per
cent of city residents. Across Kanton Zürich there were roughly 472,000 foreign nationals at the
end of 2025, a 29 per cent share. Between 2018 and 2024 about 125,000 people moved into the city
directly from abroad, close to 18,000 a year, and Statistik Stadt Zürich places Indian nationals
inside the top 15 arrival nationalities.

## School and university fit

Kanton Zürich Volksschule runs two years of Kindergarten, six years of Primarstufe and three years
of Sekundarstufe I split into Abteilungen A, B and C, with digital content arriving through the
Lehrplan 21 module Medien und Informatik.

The EDK adopted the Rahmenlehrplan Informatik on 27 October 2017 and decided on 27 October 2018
that Informatik must be compulsory at Swiss Gymnasien by 2022 and 2023. It came in on 1 August 2022
under the partially revised MAR and MAV, and the full revision of the
Maturitätsanerkennungsreglement passed by the Federal Council on 28 June 2023 made Informatik a
Grundlagenfach, a basic subject.

Entrance examinations:

- ZAP, the Zentrale Aufnahmeprüfung, covers six school types: Langgymnasium, Kurzgymnasium,
  Handelsmittelschule, Informatikmittelschule, Fachmittelschule and Berufsmaturitätsschule
- Langgymnasium ZAP 2027: Monday 8 March 2027, registration 1 January to 10 February 2027. German
  language and text 08:00 to 08:45, mathematics 09:15 to 10:15, German essay 10:45 to 11:45. No
  computing content at all
- Informatikmittelschule entrance examination: Monday 26 October 2026, registration 1 to 30
  September 2026 for entry in 2027 and 2028, and again Monday 25 October 2027. Mathematics 08:00 to
  09:30, German language and reading 10:00 to 10:45, German essay 11:15 to 12:45

The Informatikmittelschule is four years, three full time school years plus a fourth year IT
internship, leading to the EFZ Informatiker or Informatikerin plus the vocational baccalaureate in
Business and Services, Type Business. In Kanton Zürich it is offered at Kantonsschule Büelrain in
Winterthur and Kantonsschule Hottingen in Zurich.

On the international side, Zurich International School is an IB World School offering the IB
Diploma Programme plus Advanced Placement, accredited by NEASC and approved by the Kanton Zürich
education department. Inter-Community School Zurich runs IB PYP, MYP and DP in English and is CIS
and NEASC accredited. The current IB Diploma Computer Science guide has its last assessment in 2026
and the new guide has first assessment in 2027.

Universities:

- ETH Zürich, Department of Computer Science, D-INFK, runs the Bachelor Informatik with an autumn
  start only and German taught first year teaching. Non-Swiss matriculation certificates apply
  through eApply from 1 December to 31 March, 23:59 Central European Time. Three admission routes
  apply depending on country and certificate per the swissuniversities country list: direct
  admission, a reduced entrance examination of four subjects, or a comprehensive entrance
  examination of eight subjects. From the autumn semester of 2025 tuition is CHF 730 a semester for
  group 1, covering Swiss and Liechtenstein citizens plus foreign students resident in Switzerland
  or Liechtenstein when they obtained their entrance qualification, and CHF 2,190 a semester,
  threefold, for everyone else. The first year ends in the Basisprüfung, a single block examination
  covering all year one courses
- University of Zurich, Department of Informatics, requires applicants from countries outside the
  Lisbon Recognition Convention, as a rule, to pass ECUS, the complementary examination of the
  Swiss higher education institutions, held once a year in August, so entry is fall semester only.
  German at CEFR level C1 is required
- ZHAW School of Engineering in Winterthur offers a BSc Computer Science, 180 ECTS over six
  semesters, with an Artificial Intelligence specialisation covering computer vision, reinforcement
  learning and MLOps, a BSc Data Science with an AI specialisation, and MSc Engineering profiles in
  Data Science and Computer Science out of the Centre for Artificial Intelligence. Bachelor
  applications close 30 April

Every one of those routes is gated on mathematics and on evidence rather than on tool familiarity,
which is why the teens track puts the statistics and linear algebra inside the machine learning.

## Class times and the Zurich year

| Slot, Zurich time | India time, summer | India time, winter | Typical group |
|---|---|---|---|
| Tue and Thu 17:30 to 18:45 | 21:00 to 22:15 | 22:00 to 23:15 | Sek and Kanti students |
| Wed 18:15 to 19:30 | 21:45 to 23:00 | | Later weekday option |
| Sat 10:00 to 11:30 | 13:30 to 15:00 | 14:30 to 16:00 | Weekend batch, all ages |

Volksschule holidays, 2025 and 2026: Sportferien February 2026 staggered by location, 2 to 14
February, 9 to 20 February or 16 to 28 February; Frühlingsferien 20 April to 2 May 2026;
Sommerferien 13 July to 15 August 2026.

Volksschule holidays, 2026 and 2027: Herbstferien 5 to 16 October 2026; Weihnachtsferien 21
December 2026 to 1 January 2027; Sportferien 15 to 26 February 2027; Frühlingsferien 26 April to 7
May 2027; Sommerferien 19 July to 20 August 2027.

University dates: the ETH Zürich autumn semester runs weeks 38 to 51, fourteen weeks, and the
spring semester weeks 8 to 22, fifteen weeks including a class free week after Easter. ETH bachelor
applications with a non-Swiss certificate run 1 December to 31 March, ZHAW bachelor applications
close 30 April, and the UZH ECUS examination sits once a year in August. Sechseläuten falls on the
third Monday in April, and in 2026 the Böögg exploded after 12 minutes and 48 seconds.

Enrolment is continuous. A student can be placed into a batch in any week of the year, and a family
that stops for a term keeps its seat for the term after.

## Student projects, live on the public web

- NutriLife, an AI nutrition coach, by Bhavya: https://nutrilife-bhavya.lovable.app
- Misti, an AI chatbot for maths and coding, by Harshit: https://misti.modernagecoders.com
- GuardianX, an AI safety assistant, by Vivaan: https://guardianx-cybersaver.lovable.app
- SkyCast, a weather app, by Krish: https://krish-shroff.github.io/AuraWeatherTech/

## Provider facts

- Modern Age Coders, teaching since 2020
- More than 10,000 students across 25+ countries
- Rated 4.9 across 547 Google reviews
- Ages 6 to 67, coding, AI and mathematics
- Live video only, never pre-recorded
- Group USD 40 a month, about CHF 32; one to one USD 100 a month, about CHF 81; rate 0.8069 CHF per
  USD from the Federal Reserve H.10 release of 20 July 2026
- Contact: [/contact](/contact)
