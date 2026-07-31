---
title: "AI and Machine Learning Classes in Zurich | Build AI"
description: "Live online AI and machine learning classes for students in Zurich, ages 6 to 67. Train real models in Python, not just prompts. From about CHF 32 a month."
canonical: https://learn.modernagecoders.com/ai-and-machine-learning-classes-in-zurich
source: src/pages/ai-and-machine-learning-classes-in-zurich.html
---
> Live online AI and machine learning classes for students in Zurich, ages 6 to 67. Train real models in Python, not just prompts. From about CHF 32 a month.

In short

Modern Age Coders teaches live online AI and machine learning to learners in Zurich from age 6 to age 67, in groups of five to eight or privately. The syllabus begins with Python and the mathematics a model actually runs on, then moves through training, evaluation and deployment, so a student finishes able to build a system rather than only query one. Group fees are USD 40 a month, roughly CHF 32 at 0.8069 francs to the dollar, and the first class costs nothing.

The catalogue

## Twelve courses, and how we decide which one a learner walks into

A ten year old, a Kanti student and a data analyst in Kreis 1 need three different syllabuses, not one syllabus run at three speeds. Each card opens its own week by week outline.

I

### Children, ages 6 to 12

Typed code early, and a truthful account of what a model is

ZRH / KIDS / 01

#### Python and AI for Kids

Real typed code from week one, not coloured blocks. Python, turtle graphics and small games, then the claim under everything else: a program can be corrected by data rather than by a programmer.

[Open the syllabus](/courses/python-ai-kids-masterclass)

ZRH / KIDS / 02

#### AI Literacy for Kids

Where a chatbot's sentences come from, why it never sounds unsure, and how a nine year old tests a claim before repeating it. The habit that pays for itself first.

[Open the syllabus](/courses/ai-literacy-for-kids-course)

ZRH / KIDS / 03

#### Vibe Coding for Kids

A child describes a game, a tool produces something roughly like it, and the real work begins: finding the four things that do not work and repairing them.

[Open the syllabus](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)II

### Teenagers, ages 13 to 18

From syntax to a prediction with a number attached to it

ZRH / TEEN / 01

#### AI and Machine Learning for Teens

Where most Zurich teenagers land. Twelve months from Python and probability to a convolutional network and a language model. No unit finishes without a measured error.

[Open the syllabus](/courses/ai-ml-masterclass-teens)

ZRH / TEEN / 02

#### Data Science for Teens

The unglamorous majority of the work. Reading a file against its own documentation, reconciling sources that disagree, and spotting the row entered in thousands.

[Open the syllabus](/courses/data-science-course-for-teens-python-data)

ZRH / TEEN / 03

#### Python for Teens

Two years at the language itself, ending in files, APIs, classes and tests. Take it first if there is no programming behind your teenager yet.

[Open the syllabus](/courses/python-complete-masterclass-teens)

ZRH / TEEN / 04

#### Vibe Coding for Teens

Shipping web and Python projects with an assistant at your elbow, then walking through the diff line by line and justifying it.

[Open the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)III

### University students and working professionals

Depth, generative systems, and getting them onto a server

ZRH / PRO / 01

#### AI and Machine Learning Masterclass

Regression through to deep networks, training runs you can reproduce next month, evaluation built to be attacked rather than admired, and shipping where others can break it.

[Open the syllabus](/courses/ai-ml-masterclass-complete-college)

ZRH / PRO / 02

#### Generative AI: LLMs, RAG and Agents

How a large language model is pretrained, fine tuned and grounded against unseen documents, and how an agent is fenced so it fails audibly. Apertus was trained on Alps at CSCS.

[Open the syllabus](/courses/complete-generative-ai-masterclass-college)

ZRH / PRO / 03

#### Python and AI Automation

For working professionals who want the applied half first. Machine learning and language processing aimed at the reports already eating a working week.

[Open the syllabus](/courses/python-ai-automation-masterclass-college)

ZRH / PRO / 04

#### Data Science Masterclass

The job shaped version. Probability and inference, SQL against a database nobody tidied, modelling, and explaining an outcome to someone who will never read your code.

[Open the syllabus](/courses/data-science-complete-masterclass-college)

ZRH / PRO / 05

#### Data Structures and Algorithms

The technical interview gate at every serious engineering employer here, and why a pipeline handling 161,234 dwellings survives ten times the size.

[Open the syllabus](/courses/data-structures-algorithms-masterclass-college)

ZRH / ALL / 06

#### Browse the full catalogue

We also teach mathematics to university level, plus web, app and game development and exam preparation, on the same Zurich slots.

[Open all courses](/courses)

What you actually build

## Predicting a Zurich rent, then finding the CHF 853 the model cannot see

Every city we teach in gets a first project on its own published data, because a model a student can argue about at the dinner table is a model they remember. Zurich gets rent. The source is the Mietpreiserhebung run by Statistik Stadt Zürich, reference date 1 April 2024, covering 161,234 dwellings of two, three and four rooms, built from 53,054 digitally supplied prices plus a random sample of 6,797 units. It is published under CC0 as the MPE Abfragetool, with medians, quartiles, 95 per cent confidence intervals and sample sizes at city, Stadtkreis and Stadtquartier level for 2022 and 2024, split by landlord type. The city publishes its own error bars too: one to two per cent city wide, five to ten at district level.

| Segment | Median net rent, CHF | Median CHF per m2 |
| --- | --- | --- |
| 2-room, all landlords | 1,424 | 25.4 |
| 3-room, all landlords | 1,578 | 21.3 |
| 4-room, all landlords | 1,870 | 19.2 |
| 3-room, gemeinnützig | 1,022 |   |
| 3-room, private landlord | 1,875 |   |
| Kreis 1, Altstadt, private |   | 36 |
| Kreis 8, Riesbach, private |   | 32 |
| Hottingen, Quartier, private |   | 30 |
| Schwamendingen, Affoltern, Leimbach, private |   | about 22 |
| Whole city, all dwellings, 2022 |   | 20.5 |
| Whole city, all dwellings, 2024 |   | 21.8 |

Empty cells are not missing data. The survey publishes rent levels and per square metre rates in different cuts, and carrying a number from one into another is the error this project teaches. The labels also mix levels: Kreis 1 and Kreis 8 are districts, while Schwamendingen, Affoltern, Leimbach and Hottingen are Quartier names.

Here is the trap, and the reason we chose this dataset. Swiss co-operative and city owned flats are let at Kostenmiete, cost rent, not market rent. In this one survey the median three room flat is CHF 1,022 with a gemeinnützig landlord and CHF 1,875 with a private one: a gap of CHF 853 a month unrelated to location or size.

The co-operative share varies enormously between Quartiere, so a model trained without a landlord flag silently learns "this Quartier has a lot of co-operatives" and files it under "this Quartier is cheap". It then under-predicts a real private listing by hundreds of francs while reporting a respectable average error. The tell is in the residuals: they go bimodal instead of normal.

Three smaller traps sit alongside it. The Kreis number is not a scale: Kreis 1 runs at 36 francs per square metre while Leimbach, inside Kreis 2 alongside Enge and Wollishofen, sits near 22. There is no single price per square metre: the rate falls from 25.4 to 21.3 to 19.2 as flats grow, so area times one rate over-prices every large flat. And unweighted fitting is wrong, because every row is a cell median with a very different sample size.

pandasscikit-learn one-hot encodingsample weights grouped hold-outresidual diagnostics confounding

1. #### Download the file and prove you can read it

  Pull the CC0 CSV from data.stadt-zuerich.ch, load it in pandas, print the schema, and confirm the gemeinnützig flag, sample size and confidence interval columns are present rather than assumed. Then reproduce the published medians 1,424, 1,578 and 1,870. If they do not come out, nothing downstream is worth reading.
2. #### Build the naive model deliberately

  Two features, room count and the Kreis number as an integer. Target, median net rent. Plain linear regression, no tuning. Record the mean absolute error and write it on the board, because the next step exists to knock it down in public.
3. #### Break it in front of the class

  Ask the model for a private three room flat in Riesbach and compare its answer with the published private three room median of CHF 1,875. Then plot the residuals: they split into two clumps, and the class has to explain why before anyone touches the feature list.
4. #### Re-encode and refit honestly

  One-hot the Quartier and the Kreis instead of treating either as a number, add the gemeinnützig flag and floor area, weight every row by its published sample size, and refit. Compare against the naive model and against always predicting the city median of CHF 1,578.
5. #### Split on Quartiere, not on rows

  The 2022 and 2024 rows for the same Quartier are near duplicates, so a random split leaks the answer and returns a beautiful number that means nothing. Hold out whole Stadtquartiere and report the error on districts the model has never seen. That usually costs most of the apparent accuracy, which is the lesson.
6. #### Measure the confound instead of asserting it

  Fit the same model with the gemeinnützig flag and without, then print how far every Quartier coefficient moves. Some Quartiere stop looking cheap the moment landlord type is controlled for. That table is the deliverable of the project.
7. #### Ship it with its own uncertainty printed on the page

  A small page taking rooms, Quartier, landlord type and floor area, returning a range rather than a number, with the survey's own 95 per cent confidence interval beside it so nobody mistakes a median for a price. Publish the link.

The distinction

## Prompting and modelling are not the same subject wearing different clothes

We teach both, in that order, and we tell parents which of the two survives a product cycle. One is an interface skill, and interfaces get rebuilt every year. The other is mathematical, and mathematics is not on a release schedule.

#### Using AI tools

- Describe what you want, skim what comes back, describe it again
- Keep up with whichever assistant the class group is discussing this term
- The bar for success is an answer that reads well
- Most of it stops transferring the moment the interface is redesigned
- A month or two of anyone's calendar, honestly stated
- We cover it quickly, with the emphasis on catching an answer that is fluent and wrong

#### Building AI

- Open a published dataset, check it against its own documentation, say what you trusted
- Pick a model knowing which assumption it quietly makes on your behalf
- Fit it, then report the error in francs, something a parent can audit
- Tell a data problem apart from a feature problem apart from a model problem
- Put it somewhere public and watch what real inputs do to it
- Built on probability, matrices and code, and none of those three get deprecated

The distinction is easy to see from Zurich, because the builders are within tram distance. Apertus was not licensed from anyone, it was trained here and released open, and the corporate laboratories around the city are research sites rather than sales offices. A generation trained only to type into a box cannot staff any of it.

Why now, in Zurich

## A country that wrote its own AI rules, and a city that trains its own models

Switzerland declined to copy the European Union's AI Act. On 12 February 2025 the Federal Council fixed a sector specific course instead: amend existing laws where they need it, and reach for cross sectoral rules only where fundamental rights such as data protection require it. On 27 March 2025 Federal Councillor Albert Rösti signed the Council of Europe Framework Convention on Artificial Intelligence and Human Rights, Democracy and the Rule of Law, CETS No. 225, in Strasbourg, making Switzerland the fifteenth signatory. The Federal Department of Justice and Police is drafting the implementing bill with DETEC and the FDFA, with a consultation draft due by the end of 2026.

On 21 March 2025 the Federal Chancellery set out three strategic priorities: build AI competences, ensure trustworthy use, and increase efficiency. Read the first one slowly. The word is competences, not licences, and a state that intends to build competence needs people who can build.

The proof arrived on 2 September 2025, when the Swiss AI Initiative, a joint effort of EPFL, ETH Zürich and the Swiss National Supercomputing Centre, released Apertus under the Apache 2.0 licence in 8 billion and 70 billion parameter sizes. It was trained on 15 trillion tokens spanning more than a thousand languages, on the Alps supercomputer at CSCS in Lugano, which runs on over 10,000 NVIDIA Grace Hopper superchips and 100 per cent renewable power. Switzerland trained an open model rather than renting one.

Google's Zurich site is the company's largest research, development and engineering hub outside the United States. IBM Research Europe in Rüschlikon, IBM's first European laboratory, opened in Adliswil in 1956 and moved to its own campus in 1962. Its staff spans about 45 nationalities and it has produced four Nobel laureates across two prizes, the 1986 physics prize for the scanning tunnelling microscope and the 1987 for high temperature superconductivity. It now works on quantum computing and AI for science.

Anthropic announced a Zurich office on 4 November 2025, its third in Europe after London and Dublin, led by Neil Houlsby from Google DeepMind and focused on language model training and multimodal capabilities for Claude. OpenAI opened one too, its fifth European location after Dublin, London, Paris and Brussels, by hiring three senior researchers out of Google DeepMind Zurich. Microsoft runs an AI lab here under Marc Pollefeys, and Meta, Apple, NVIDIA and Huawei also operate research in the region. The ETH AI Center is the academic hub, and local companies include LatticeFlow, Daedalean, Synthara, Starmind, Squirro and Cradle.

None of those laboratories came for the tax rate. They came for the ETH and UZH pipeline and the research heritage at Rüschlikon, which means a Zurich teenager who can defend a model rather than merely prompt one is competing for jobs within twenty minutes of home.

452,421

Residents in the City of Zurich at the end of 2025, an all time record

27 March 2025

Switzerland signed the Council of Europe Framework Convention on AI, the fifteenth signatory

15 trillion

Tokens across more than 1,000 languages used to train Apertus at CSCS

CHF 853

Gap between the private and gemeinnützig 3-room medians, the confound the first project hunts

School and university

## Where this sits beside the Volksschule, the Kanti and the Hochschule

### The cantonal system

Kanton Zürich Volksschule runs two years of Kindergarten, six of Primarstufe and three of Sekundarstufe I, the last split into Abteilungen A, B and C. Digital content arrives through the Lehrplan 21 module Medien und Informatik, which is broad by design and is not a machine learning course. That is fine. It is not trying to be one.

Higher up the picture changed materially. The EDK adopted the Rahmenlehrplan Informatik on 27 October 2017 and decided on 27 October 2018 that Informatik must be compulsory at Swiss Gymnasien by 2022 and 2023. It arrived on 1 August 2022, and the full revision of the Maturitätsanerkennungsreglement, passed on 28 June 2023, made it a Grundlagenfach. A Kanti teenager therefore has the vocabulary already. What they lack is a term spent training one model properly.

### The two entrance examinations

Entry to upper secondary runs through the ZAP, the Zentrale Aufnahmeprüfung, covering six school types: Langgymnasium, Kurzgymnasium, Handelsmittelschule, Informatikmittelschule, Fachmittelschule and Berufsmaturitätsschule. The Langgymnasium ZAP for 2027 sits on 8 March 2027 and contains no computing content at all.

The Informatikmittelschule is the vocational technical route: four years, three of full time school plus a fourth on an IT internship, leading to the EFZ Informatiker or Informatikerin plus the vocational baccalaureate in Business and Services, Type Business. In Kanton Zürich it runs at Kantonsschule Büelrain in Winterthur and Kantonsschule Hottingen in Zurich. Its entrance examination sets mathematics from 08:00 to 09:30 against German from 10:00 to 12:45, a noticeably heavier mathematics weighting than the ZAP.

### The international schools

Zurich International School is an IB World School offering the IB Diploma Programme alongside Advanced Placement, accredited by NEASC and approved by the Kanton Zürich education department. Inter-Community School Zurich runs the IB Primary Years, Middle Years and Diploma Programmes in English, with CIS and NEASC accreditation. One timing detail matters when weighing the IB against the Matura: the current IB Diploma Computer Science guide has its last assessment in 2026 and the new guide its first in 2027.

### ETH, UZH and ZHAW

The Department of Computer Science at ETH Zürich, D-INFK, runs the Bachelor Informatik with an autumn start only and German taught first year teaching. Non Swiss matriculation certificates apply through eApply from 1 December to 31 March, along one of three routes set by the swissuniversities country list. The first year ends in the Basisprüfung, one block examination across every year one course.

At the University of Zurich, the Department of Informatics requires applicants from countries outside the Lisbon Recognition Convention, as a rule, to pass ECUS, held once a year in August, so entry is fall semester only. German at CEFR level C1 is required.

ZHAW School of Engineering in Winterthur is the applied sciences route: a BSc Computer Science of 180 ECTS across six semesters with an Artificial Intelligence specialisation covering computer vision, reinforcement learning and MLOps, a BSc Data Science with an AI specialisation, and MSc Engineering profiles out of the Centre for Artificial Intelligence. Bachelor applications close 30 April.

Read those three together and a pattern falls out. Every route is gated on mathematics and on evidence, not on tool familiarity. That is why our teens track puts the statistics and linear algebra inside the machine learning rather than in a separate subject to be endured.

How the classes run

## Class times that survive the last Sunday in October

Zurich keeps CEST from 29 March 2026 to 25 October 2026, then CET through the winter, while India runs IST all year with no daylight saving. The consequence is one most providers never mention: the gap changes twice a year, so the Indian side of every class moves by an hour while the Zurich family keeps the slot it chose. We handle that on the roster.

Tue and Thu 17:30 to 18:45

Zurich time, straight after the Sek or Kanti day. That is 21:00 to 22:15 in India in summer, 22:00 to 23:15 in winter.

Wed 18:15 to 19:30

Zurich time, the later weekday option for households where nobody is home before six. In summer, 21:45 to 23:00 in India.

Sat 10:00 to 11:30

Zurich time, the easiest slot at both ends of the link and the one we roster first. 13:30 to 15:00 in India in summer.

### What a session is

Seventy five to ninety minutes on live video with one teacher who remembers what broke last Tuesday and opens with it. Both screens are visible, so a wrong indent or a leaked test set gets caught in the second it happens rather than in a comment three days later. Groups hold five to eight learners.

Between sessions there is something to construct, not a sheet to fill in, and it is expected back partly broken, because a task that returns perfect taught nobody anything. Questions go to the same teacher, not into a support inbox.

### The Zurich year, and the dates worth planning around

The Sportferien in February 2026 are staggered by school, running 2 to 14 February, 9 to 20 February or 16 to 28 February. For 2026 and 2027, Herbstferien are 5 to 16 October 2026, Weihnachtsferien 21 December 2026 to 1 January 2027, Sportferien 15 to 26 February 2027, Frühlingsferien 26 April to 7 May 2027 and Sommerferien 19 July to 20 August 2027. Sechseläuten falls on the third Monday in April, and in 2026 the Böögg took 12 minutes and 48 seconds.

On the university side, the ETH Zürich autumn semester runs weeks 38 to 51 and the spring semester weeks 8 to 22, the latter including a class free week after Easter. ZHAW bachelor applications close 30 April, and the UZH ECUS examination sits once a year in August.

Enrolment is continuous. A student can join a batch in any week of the year, and a family that stops for a term keeps its seat for the term after.

Student work

## Four things students finished, published, and left switched on

Each of the four below is a running application at a public address, written by a school student. Open them and judge the work directly rather than taking our description of it. More sit in [Student Labs](/student-labs).

![NutriLife AI nutrition coach project screenshot](/images/projects/nutrilife.webp)

AI and ML

#### NutriLife, an AI nutrition coach

An assistant that reads a day of meals and coaches the user towards a target, carried from first sketch to public link by one student.

by Bhavya · [Open the live project](https://nutrilife-bhavya.lovable.app)

![Misti AI chatbot for maths and coding screenshot](/images/projects/misti.webp)

AI and ML

#### Misti, an AI chatbot for maths and coding

A tutoring chatbot fielding maths and programming questions, written and deployed by a student.

by Harshit · [Open the live project](https://misti.modernagecoders.com)

![GuardianX AI internet safety assistant screenshot](/images/projects/guardianx.webp)

AI and ML

#### GuardianX, an AI safety assistant

A tool that helps a young person recognise an unsafe situation online before acting on it, designed and shipped by a student.

by Vivaan · [Open the live project](https://guardianx-cybersaver.lovable.app)

![SkyCast weather forecast app screenshot](/images/projects/skycast.webp)

Data and forecasting

#### SkyCast, a weather app

A weather application built against live data feeds, the nearest sibling in the portfolio to the rent modelling project above.

by Krish · [Open the live project](https://krish-shroff.github.io/AuraWeatherTech/)

Fees

## The monthly cost in francs, and what that franc figure rests on

We bill in US dollars and print the franc figure next to it, because the franc floats and any number published here will drift. The conversion uses 0.8069 francs to the dollar, from the Federal Reserve H.10 release of 20 July 2026. Billing is monthly, there is no registration charge, and nothing is tied to an academic year.

Free first class

CHF 0

USD 0, no card needed

- A genuine lesson with a teacher, not fifteen minutes of sales
- Also a placement check, so the level gets set from evidence
- Watch the whole thing, then decide

Book it

Group batch

about CHF 32

USD 40 a month, CHF 32.28 at 0.8069

- Five to eight learners, one teacher who stays with the batch
- Live video every week, nothing pre-recorded
- A build task between sessions, reviewed by the person who set it
- Certificate issued at the end of the track

Start here

One to one

about CHF 81

USD 100 a month, CHF 80.69 at 0.8069

- Private teaching, your calendar and your pace
- The usual choice for an examination year, or an adult with two free evenings
- Syllabus rebuilt around whatever you name as the goal

Enquire

One local yardstick, since a franc figure means nothing in the abstract. CHF 32 is roughly two per cent of the CHF 1,578 median net monthly rent on a three room flat in 2024, the same published median the first student project is built on.

What families say

## The 4.9 average sitting behind 547 Google reviews

Every quote below was left in public by a family that pays us. We have never drafted a testimonial and we have never traded anything for one.

★★★★★

"The one step solution for my son. Modern Age Coders make learning coding so simple that kids love it."

Ria Mukherjee

Parent

★★★★★

"Modern Age Coders has been a game-changer for me! I struggled to grasp IT concepts and coding before joining, but their classes transformed everything."

Samriddha Mondal

Student

★★★★★

"One of the most wonderful education centres out there. Education is not limited to school syllabus but focuses on skill development. Learning here has been a wonderful journey and still continuing."

Vansh Agarwal

Student

★★★★★

"My child Dhairya is really enjoying the Modern Age Coder IT classes. This is his first online class, and he eagerly looks forward to it. I can see his improvement."

Sonam Oswal

Parent of Dhairya

★★★★★

"I highly recommend this computer coding class! The teachers are incredibly knowledgeable and passionate about coding. They make every session engaging and insightful."

Ritu Kedia

Parent

★★★★★

"Coding classes here make learning very interesting and conceptual. The teachers teach us in a very easy-to-understand and efficient manner."

Arush Poddar

Student

Questions from Zurich

## What Zurich parents put to us before the first lesson

### My child already takes Grundlagenfach Informatik at the Kanti. What does an AI class add on top of it?

Informatik became compulsory at Swiss Gymnasien on 1 August 2022 under the partially revised MAR and MAV, and the full revision of the Maturity Recognition Ordinance, passed by the Federal Council on 28 June 2023, made it a Grundlagenfach, a basic subject. A basic subject has to serve a future lawyer as well as a future engineer, so it has no room for a term spent on one dataset, one model and one honest error figure. Our teens track is that term.

### A class at 17:30 Zurich time is what hour for the teacher in India, and why does that hour move on 25 October?

Zurich runs CEST, UTC plus 2, from 29 March 2026 until 25 October 2026, then CET, UTC plus 1, through the winter. India keeps IST, UTC plus 5:30, all year with no daylight saving, so it sits 3 hours 30 minutes ahead in summer and 4 hours 30 minutes ahead in winter. A 17:30 Zurich start is 21:00 in India in summer and 22:00 in winter. Your slot does not move. The Indian end of it does, twice a year, and we absorb that on the roster.

### Group teaching is about CHF 32 a month and one to one about CHF 81. What is included, and how does that compare with a Zurich Nachhilfe hour?

The dollar prices are USD 40 and USD 100 a month. At 0.8069 francs to the dollar, the rate in the Federal Reserve H.10 release of 20 July 2026, that is CHF 32.28 and CHF 80.69. Included: live weekly teaching in a group of five to eight or privately, the same teacher each week, a build task with teacher review, and a certificate. Hardware and paid AI subscriptions are neither included nor required. We publish no comparison against local tutoring rates, having no sourced Zurich figure for them. For scale, CHF 32 is about two per cent of the CHF 1,578 median monthly rent on a 3-room flat in 2024.

### Does this help with the ZAP for the Langgymnasium on 8 March 2027?

No, and we would rather say so than sell you something. The Langgymnasium ZAP on Monday 8 March 2027, registration 1 January to 10 February 2027, examines German language and text, mathematics, and a German essay, running 08:00 to 11:45. There is no computing content in it at all. The only honest overlap is the mathematics, and a child ten weeks from the ZAP needs targeted ZAP practice rather than a machine learning course.

### My teenager is on the Informatikmittelschule track at Kantonsschule Hottingen. Does the fourth year IT internship clash?

The IMS runs four years: three full time school years and a fourth spent in an IT internship, ending in the EFZ Informatiker or Informatikerin plus the vocational baccalaureate in Business and Services, Type Business. During the internship year a fixed weekday evening usually stops working, so students on that track move to one to one and book fortnightly. During the three school years the Tuesday and Thursday 17:30 slot behaves normally, and we lighten the load around the entrance exam on 26 October 2026 and 25 October 2027.

### Which ETH admission route will my child take for Bachelor Informatik, and how does the application window work?

There are three routes, and which applies is specific to the country and the exact certificate, per the swissuniversities country list: direct admission, a reduced entrance examination of 4 subjects, or a comprehensive one of 8 subjects. Check your child's certificate against that list years early, because the two examination routes mean preparation measured in years. Applicants with a non-Swiss matriculation certificate apply through eApply from 1 December to 31 March, and the Bachelor Informatik starts in autumn only. From autumn 2025 tuition is CHF 730 a semester for group 1 and CHF 2,190, threefold, for everyone else.

### Are your classes taught in German or English, and does that matter for ETH, UZH and ZHAW later?

We teach in English, and we would rather state that limitation than bury it. ETH Zurich teaches the first year of Bachelor Informatik in German, and the University of Zurich requires German at CEFR level C1 plus, as a rule, ECUS for applicants from outside the Lisbon Recognition Convention, held once a year in August. An English language AI class removes the second barrier, not the first: a student who already understands gradient descent, overfitting and cross validation has only the German left to acquire.

### Sommerferien runs 13 July to 15 August 2026. Should we pause the subscription or run a project intensive?

Both work, and the choice is yours. The Zurich Volksschule summer break is 13 July to 15 August 2026 and 19 July to 20 August 2027, roughly five weeks: long enough for a real piece of work, short enough that momentum survives it. Families who travel the whole stretch pause and keep their seat. Families who stay switch to a project intensive, two sessions a week, aiming to publish something at a public address before school restarts.

Start here

## Take the free first class

Leave a number and a mentor rings back, usually the same day, at an hour that makes sense in Zurich rather than in India. The first lesson is a genuine lesson, and it doubles as a placement check so your child begins at their own level, not at a class average.

Prefer to look around first? Read [how we teach](/how-we-teach), browse the [full course catalogue](/courses), or see what students have built in [Student Labs](/student-labs).

---

*Canonical: https://learn.modernagecoders.com/ai-and-machine-learning-classes-in-zurich*
