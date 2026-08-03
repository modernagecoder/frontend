---
title: "AI and Machine Learning Classes in London | Build AI"
description: "Live online AI and machine learning classes for students in London, ages 6 to 67. Train real models in Python, not just prompts. From USD 100 a month."
canonical: https://learn.modernagecoders.com/ai-and-machine-learning-classes-in-london
source: src/pages/ai-and-machine-learning-classes-in-london.html
---
> Live online AI and machine learning classes for students in London, ages 6 to 67. Train real models in Python, not just prompts. From USD 100 a month.

In short

Modern Age Coders teaches live online AI and machine learning to learners in London, age 6 to 67, in rooms of five to eight or privately. The subject is model building: Python first, then the statistics and linear algebra a model rests on, then training and measuring something real on published London data. A group place is USD 100 a month, and one to one is USD 150, both billed in US dollars. Saturday 10:00 to 12:00 London is the slot most families take, and the first class costs nothing.

The catalogue

## The twelve courses, and who each one is actually for

A ten year old, a Year 12 student and a working analyst share nothing except the word on the timetable. They get three curricula with three finishing lines. Each card opens a full week by week outline.

I

### Children, ages 6 to 12

Typed code from the first lesson, and a truthful account of what a model does

LDN / KIDS / 01

#### Python and AI for Kids

Real Python typed out rather than dragged into place, then the idea everything rests on: show a machine examples and it works out the rule.

[Open the syllabus](/courses/python-ai-kids-masterclass)

LDN / KIDS / 02

#### AI Literacy for Kids

Where a chatbot answer comes from, why a wrong one arrives as confidently as a right one, and how a child checks a claim before repeating it in class.

[Open the syllabus](/courses/ai-literacy-for-kids-course)

LDN / KIDS / 03

#### Vibe Coding for Kids

Children brief an AI tool to build a game, then open what came back and mend the broken parts. Reading the result is where the term actually goes.

[Open the syllabus](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)II

### Teenagers, ages 13 to 18

From working syntax to a prediction with a number attached to its error

LDN / TEEN / 01

#### AI and Machine Learning for Teens

The main route through this page. Python, the mathematics the subject needs, classical algorithms, neural networks, vision and language models, each stage closing with a model the student can defend.

[Open the syllabus](/courses/ai-ml-masterclass-teens)

LDN / TEEN / 02

#### Data Science for Teens

The work before any model exists, which is most of the work: reading an undocumented file, joining two sources that disagree, spotting the row whose units are wrong.

[Open the syllabus](/courses/data-science-course-for-teens-python-data)

LDN / TEEN / 03

#### Python for Teens

Two years from a first line of code to files, APIs, testing and advanced Python. The entry point for a teenager with no programming behind them.

[Open the syllabus](/courses/python-complete-masterclass-teens)

LDN / TEEN / 04

#### Vibe Coding for Teens

Shipping web and Python projects with an assistant alongside, while learning to review what it produced. A working link, plus the reasoning behind it.

[Open the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)III

### University students and working professionals

Depth, generative systems, and the step where it goes into production

LDN / PRO / 01

#### AI and Machine Learning Masterclass

Supervised and unsupervised learning, deep networks, the discipline of a training run, validation that survives a second reader, and the deployment stage most short courses leave out.

[Open the syllabus](/courses/ai-ml-masterclass-complete-college)

LDN / PRO / 02

#### Generative AI: LLMs, RAG and Agents

How a large language model is trained, adapted and grounded against a private document set, and how an agent is fenced in so it fails loudly instead of confidently.

[Open the syllabus](/courses/complete-generative-ai-masterclass-college)

LDN / PRO / 03

#### Python and AI Automation

For people already in a London job who want the applied half first: modelling pointed at the reports and pipelines already on their desk.

[Open the syllabus](/courses/python-ai-automation-masterclass-college)

LDN / PRO / 04

#### Data Science Masterclass

Statistics, SQL well past SELECT and WHERE, feature construction, modelling and the writing up, finishing with a portfolio built for someone deciding whether to interview you.

[Open the syllabus](/courses/data-science-complete-masterclass-college)

LDN / PRO / 05

#### Data Structures and Algorithms

The gate at the front of every serious engineering interview, and the reason a pipeline that behaves on five thousand rows still behaves on five million.

[Open the syllabus](/courses/data-structures-algorithms-masterclass-college)

LDN / ALL / 06

#### Browse the full catalogue

Outside AI we teach mathematics to university level, plus web, app and game development and exam preparation, all live and all on London timings.

[Open all courses](/courses)

What you actually build

## The Boris Bike break: predicting London cycle hire, and finding the month the model stops working

Every city we teach into gets a first project on its own published data. London gets a two source join. Transport for London publishes daily Santander Cycles hire counts on the London Datastore under the Open Government Licence, every day since the scheme opened on 30 July 2010. The Met Office publishes monthly historic station data for Heathrow, latitude 51.479, longitude -0.449, twenty five metres above mean sea level. Joining them takes an hour. Finding the month where the model quietly falls apart takes the term.

| Month, 2025 | Hires | Mean daily max, degC | Rain, mm | Sunshine, hours |
| --- | --- | --- | --- | --- |
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

Hires from the TfL daily cycle hire file on the London Datastore. Weather from Met Office historic station data for Heathrow. Nothing here is estimated, and a student who cannot source a cell leaves it blank.

Read 2025 alone and the story looks easy. Hires rise with temperature and sunshine and fall in the dark months, so a weather-only model fits convincingly. That is the trap. Widen the window and the annual totals refuse to behave: 10,567,540 in 2018, 10,424,955 in 2019, 10,434,167 in 2020, 10,941,264 in 2021 and 11,505,872 in 2022, then 8,531,168 in 2023, 8,768,238 in 2024 and 9,066,554 in 2025.

That is a 25.9 per cent drop between 2022 and 2023 which never reverses, and weather does not do that. The daily file dates it: August 2022 recorded 1,259,932 hires and September 2022 recorded 800,950, a fall of 36 per cent in one month. A TfL Finance Committee paper of 3 August 2022 approved a new Santander Cycles tariff for implementation in September 2022, replacing the £2 access fee for unlimited thirty minute rides in a day with a flat £1.65 per thirty minute ride, adding a £20 monthly subscription and raising the annual subscription to £120 while extending it to sixty minute rides.

Nobody here claims the tariff caused the fall. The student notices the break, dates it, models around it, and writes down what would be needed before claiming causation.

pandasscikit-learn matplotlibchronological split regime indicatorresidual analysis

1. #### Fetch both files and parse them yourself

  The hire spreadsheet is a zip of XML underneath, worth discovering with your own hands, and the Met Office file is fixed width text no parser will guess for you. The live file carries 5,785 daily rows from 30 July 2010 to 31 May 2026.
2. #### Screen the daily series before aggregating anything

  Check every zero and near zero day against the file's metadata sheet. It documents a weekend shutdown on 10 and 11 September 2022, and that day duly reads zero. It does not document 5 August 2025, which reads 188 hires between 26,149 and 30,069. Screen that one out rather than explain it away, and write down every row you drop.
3. #### Join on year and month, then look before you model

  Aggregate to monthly, join the weather, and plot hires against mean daily maximum temperature with points coloured by year. The post 2022 cloud sits visibly below the pre 2022 cloud at the same temperature. That one chart is the whole lesson.
4. #### Fit the naive model and enjoy it briefly

  Weather only, random shuffled split across the full 2010 to 2026 span, linear regression, record the R squared. It looks excellent and it is worthless: pre break and post break months land on both sides of the split, so the model interpolates straight through the step it should have caught.
5. #### Refit chronologically and watch it fail

  Same features, but train to December 2022 and test from January 2023. The R squared collapses, the model over predicts nearly every test month, and residuals against time are almost all one signed. Sunshine cannot explain a change in the price of a ride.
6. #### Add the regime indicator and quantify the repair

  Add a post September 2022 flag, the sine and cosine of month of year and days in the month, refit chronologically, and state how much error one binary column removed. The year on year pattern confirms it: January to August 2023 ran 18 to 40 per cent below the same months of 2022, while September to December 2023 was roughly flat, because those 2022 months already sat after the change.
7. #### Write the honest paragraph, and the one about 2020

  State the effect size, name the tariff change as a dated coincident event rather than a proven cause, and list what going further would need. Then the second trap: annual hires in 2020 were 10,434,167 against 10,424,955 in 2019, so an annual model sees no pandemic, yet weekend share moved from 23.1 to 31.0 per cent and mean daily hires went from 32,092 on a Wednesday and 23,986 on a Saturday to 26,972 and 32,508. Aggregation hid it.

The distinction

## Prompting and modelling are not the same subject

We teach both, in that order, and we are straight about which one is still worth something in ten years. One is knowledge of a product. The other is knowledge of a method.

#### Using AI tools

- Describe what you want, read what comes back, reword it, go again
- Learn the controls of whichever product is winning this quarter
- The test of success is whether the answer reads as though it is right
- Very little survives a version change, a price rise or a shutdown
- Six weeks is an honest estimate of how long it takes to learn properly
- We cover it early, mostly so a student can catch a wrong answer delivered confidently

#### Building AI

- Find the data, check it, and defend every row you kept or threw away
- Pick a model knowing which assumption it quietly makes on your behalf
- Train it, then report the error in a unit somebody outside the room can verify
- Tell a data problem apart from a feature problem apart from a model problem
- Put it in front of inputs nobody anticipated and watch where it comes apart
- The foundations are mathematical, so they outlive every tool built on top of them

London sharpens the point. Employers here told the government's own survey what they want, and it was not fluency with a chat window. One micro AI consultancy answered that students need thousands of hours of training, using AI tools every day to build the real world experience needed for the future. A micro AI company answered that universities should focus on more practical experience, such as internships, industrial placements and collaborations with businesses. A weekly live class can supply accumulated build hours. A two paper specification cannot.

Why now, in London

## The AI Opportunities Action Plan one year on, read from a London kitchen table

The plan was published on 13 January 2025, written by Matt Clifford CBE, carrying 50 recommendations, all accepted by government in Command Paper 1242. In January 2026 the Department for Science, Innovation and Technology published AI Opportunities Action Plan: One Year On, with forewords from the Prime Minister, the Rt Hon Keir Starmer KCB KC MP, and the Secretary of State, the Rt Hon Liz Kendall MP. Its headline is that 38 of the 50 actions have been met, three quarters of the plan.

Most of the money is compute. Two billion pounds is committed to expand public compute capacity twentyfold by 2030. Isambard-AI launched at Bristol University in July 2025, with up to £250 million earmarked to scale AI Research Resource cloud capacity. University of Cambridge supercomputer capacity, home of DAWN, is to rise sixfold by Spring 2026. The next national supercomputer is backed by £750 million and coupled to the International Data Facility at the Edinburgh Parallel Computing Centre. Five AI Growth Zones have been designated across Great Britain, two in Wales and one in Scotland, carrying £28.2 billion in investment, more than 15,000 jobs and £5 million each.

Read that as a London parent and the geography is the point. Bristol, Cambridge, Edinburgh, Wales, Scotland. The machines go where the power is. London received the talent money.

TechFirst is the flagship skills programme, announced on 9 June 2025 with £187 million committed. TechYouth carries £24 million and aims at one million students over three years across every UK secondary school. TechGrad funds undergraduate scholarships with work placements, recruiting up to 350 students for the first cohort in 2026 and scaling to up to 900 a year from 2026/27. TechLocal includes £7.8 million for an AI Professional Degree and Traineeship Accelerator.

Then the Spärck AI Scholarship: £17.2 million from DSIT, up to 100 scholarships across nine UK universities from October 2026. Two of the nine are in London. UCL has eight awards, each full tuition plus a £22,780 stipend for one year, open to Home and Overseas students across fourteen master's programmes, deadline 17:00 BST on Friday 1 May 2026. Imperial College London is the other.

Alongside sit the National Data Library with over £100 million, the Health Data Research Service with up to £600 million from government and Wellcome, and the AI Security Institute with £240 million and over 100 researchers. Every item there is a construction project staffed by people who can build. A child who is twelve in London today is twenty two in 2036, applying into exactly that market.

38 of 50

Action Plan commitments met by January 2026, three quarters of the plan

£187m

Committed to TechFirst, the flagship tech skills programme, announced 9 June 2025

2 of 9

Spärck AI Scholarship universities that are in London, from October 2026

9,066,554

Santander Cycles hires in 2025, the series behind the first student project

The market you are preparing for

## Where the AI hiring actually happens, in the government's own figures

London holds 9.1 million people, 15.5 per cent of the UK total, across 33 local authorities, the 32 boroughs plus the City of London, with 6.4 million jobs and 749,000 added over the last decade. Those figures come from the Greater London Authority's State of London 2026 and Office for National Statistics series.

DSIT's Artificial Intelligence Sector Study 2024, published on 3 September 2025 and produced by Perspective Economics with Beauhurst, Ipsos, glass.ai and the AI Collaboration Centre, counted 5,862 UK AI companies, up 58 per cent on 2023. They generated £23.9 billion in AI revenue, up 68 per cent, and £11.8 billion in gross value added, up 103 per cent, employing 86,139 full time equivalents in AI roles. London, the South East and the East of England account for approximately 75 per cent of registered office locations.

The number that should change a family's plan sits in the AI Labour Market Survey 2025, carried out for DSIT by Gardiner and Theobald LLP. Of 119 responding organisations, 59 were in Greater London: 49.58 per cent, the highest of any region, with the South East on 18.49 per cent. London plus the South of England came to 77 per cent of all responses.

The same survey holds the sentence that makes this page worth reading. Outside London and the South of England, only 5 per cent of AI roles were filled through the graduate pathway. Within London, the Southwest and Southeast England, that figure rises to 53 per cent. The junior door into AI work is open in the South and close to shut elsewhere in the country, and a London family is on the right side of it. The survey ran to 119 organisations, a small sample, so read the percentages as direction and magnitude rather than a national census.

One named company for scale. ElevenLabs announced a 500 million dollar Series D at an 11 billion dollar valuation on 4 February 2026, led by Sequoia Capital, having closed 2025 with over 330 million dollars in annual recurring revenue. London is the first named office in the company's own list of locations.

School and university

## What the specification covers, and the part it never reaches

### The English route

OCR GCSE Computer Science (9-1), specification J277, qualification number 601/8355/X, has been taught since 2020. AQA GCSE Computer Science 8525 is for first teaching from September 2025: Paper 1, computational thinking and programming skills, runs two hours for 90 marks and half the GCSE, and Paper 2, computing concepts, runs one hour forty five minutes for 90 marks and the other half. AQA A level Computer Science is specification 7517 with non-exam assessment component 7517/C. Pearson Edexcel also awards both in England.

These are good qualifications. None of them is a machine learning qualification. J277 scopes databases so tightly that a candidate needs only SELECT, FROM and WHERE, with INSERT, UPDATE and DELETE outside the requirement. A London student can take a grade 9 at GCSE and an A star at A level and never once have trained a model, split a dataset or found a leakage bug.

### The international route

London's independent and international sector runs Cambridge and IB in the same postcodes. Cambridge IGCSE Computer Science 0478 and Cambridge IGCSE (9-1) Computer Science 0984 carry syllabuses for 2026, 2027 and 2028, each assessing Paper 1 on computer systems and Paper 2 on algorithms, programming and logic, each one hour forty five minutes and each worth half. Cambridge International AS and A Level Computer Science 9618 carries syllabuses for 2027, 2028 and 2029. UCL, Imperial and Queen Mary all publish IB offers alongside A level offers. The gap is identical on every route.

### What the London universities actually ask for

Imperial College London, Computing MEng, UCAS code G401, four years, 2027 entry: a minimum of A*A*A to A*AAA, specified as A star in Mathematics plus A star and A in two further subjects, or AAA in three further subjects, with Further Mathematics preferred. Typical offer A*A*A for three A level students and A*A*AA for four. On the IB, a minimum of 41 points with 7 in Mathematics at higher level and 7 in another relevant higher level subject.

UCL, Computer Science BSc, UCAS code G400, starting September 2027: A*A*A standard, A*AB contextual, and on both routes an A star in either Mathematics or Further Mathematics. On the IB, 40 points across three higher level subjects including grade 7 in Mathematics, or 38 contextual. UCL states an application deadline of 13 January 2027 for 2027 entry on its own course pages, and deadlines vary by university, so check each.

Queen Mary University of London, institution code Q50, Computer Science and Artificial Intelligence BSc (Hons), UCAS code I400, three years, 2027 entry: AAA including one of Mathematics, Computer Science or Physics, or a minimum of 36 IB points including 6,6,6 at higher level with one of the same subjects. Variants I40Y with industrial experience and I40A with a year abroad carry the same requirements. Its Computer Science BSc, UCAS code G400, asks AAB including Mathematics, Physics or Computer Science.

The pattern is unmistakable. Mathematics is the gate. Imperial wants an A star in it, UCL wants an A star in it or in Further Mathematics, and Queen Mary will take Computer Science or Physics instead but Mathematics is the safe route through all three. Not one of these degrees requires A level Computer Science. Any plan that drills syntax while letting mathematical fluency slide is aimed at the wrong target, which is why our teens track keeps the mathematics inside the machine learning.

How the classes run

## London time is the anchor, and the clocks move on 25 October

London keeps Greenwich Mean Time in winter and British Summer Time, UTC+1, in summer. India, where much of our teaching sits, keeps Indian Standard Time all year and has never observed daylight saving. Today London is four hours and thirty minutes behind India; from late October it is five hours and thirty minutes behind. British Summer Time runs Sunday 29 March to Sunday 25 October 2026, then Sunday 28 March to Sunday 31 October 2027.

Saturday 10:00 to 12:00

London time, and the slot we recommend first. Mid morning here, mid afternoon in India, no school in the way, and two hours is long enough to build something and then debug it.

Weekday 17:30 to 19:00

London time. After school and before dinner, where most primary and lower secondary families land. That is 22:00 to 23:30 in India during British Summer Time.

Weekday 19:30 to 21:00

London time. Sixth formers, university students and adults coming off a working day. Staffed from a UK or Gulf timezone, because it lands after midnight in India.

### What a session is

Ninety minutes on live video, or a two hour block on the Saturday slot. The teacher is the same person week after week, which matters more than it sounds, because they remember the bug your child could not find last time and open with it. Screens are shared both ways, so an error is caught while it is being typed rather than flagged in a comment three days later. Rooms hold five to eight learners, or you can have the teacher to yourself.

Between one class and the next there is something to construct, not a worksheet to complete. Bring it back broken and the next session starts there. Questions during the week go to the teacher who taught you, never into a ticket queue.

### The London year, borough by borough

There is no single London school calendar. Each of the 33 local authorities determines dates for its own maintained schools, and academies, free schools and independent schools set their own, so we confirm against your school rather than assuming. Tower Hamlets opens on Tuesday 1 September 2026, breaks for October half term from Monday 26 to Friday 30 October, Christmas from 21 December 2026 to 1 January 2027, spring half term 15 to 19 February 2027, Easter from 29 March to 9 April 2027, and summer from Monday 26 July 2027. The Westminster and Kensington and Chelsea determined dates open a day later and total 195 days including five staff training days, with the same October half term week.

That common week, 26 to 30 October 2026, is the best intensive window in the year, and the summer break from late July is second. We avoid launching cohorts into the exam window, and the clocks change inside that same half term, so we reconfirm class times with London families the week before. Admission is rolling, so a student can start in any week of the year, exam terms included, at a lighter cadence if the term demands it.

Student work

## Work our students published, at addresses you can open right now

Each of the four below is a working application at a real web address, written by a student here and left running. Click one and it loads. A link an admissions tutor can open beats a certificate they cannot verify. There is more in [Student Labs](/student-labs).

![NutriLife AI nutrition coach project screenshot](/images/projects/nutrilife.webp)

AI and ML

#### NutriLife, an AI nutrition coach

A nutrition assistant that reads a day of meals and coaches the user towards a target, carried from first idea to public link by one student.

by Bhavya · [Open the live project](https://nutrilife-bhavya.lovable.app)

![Misti AI chatbot for maths and coding screenshot](/images/projects/misti.webp)

AI and ML

#### Misti, an AI chatbot for maths and coding

A tutoring chatbot that takes maths and programming questions and works through them, written and deployed by a student.

by Harshit · [Open the live project](https://misti.modernagecoders.com)

![GuardianX AI internet safety assistant screenshot](/images/projects/guardianx.webp)

AI and ML

#### GuardianX, an AI safety assistant

An assistant that helps a young person recognise an unsafe situation online before it develops, designed and shipped by a student.

by Vivaan · [Open the live project](https://guardianx-cybersaver.lovable.app)

![SkyCast weather forecast app screenshot](/images/projects/skycast.webp)

Data and forecasting

#### SkyCast, a weather app

A weather application built on live meteorological data, the nearest relative of the Heathrow half of the cycle hire project above.

by Krish · [Open the live project](https://krish-shroff.github.io/AuraWeatherTech/)

Fees

## What a London family pays

We bill in US dollars: a flat USD 100 a month for a group batch and USD 150 for one to one, the same fee everywhere outside India. Your bank converts the charge to sterling at its own card rate on the day, which is why we do not print a pound figure that would only go stale. Fees are monthly, with no admission charge and no annual commitment.

Free first class

USD 0

No card is taken

- A genuine lesson taught by the teacher you would get
- It doubles as a placement check, so nobody starts in the wrong band
- Sit in, watch it, then decide in your own time

Book it

Group batch

USD 100

a month, billed in US dollars

- Five to eight learners with one teacher who stays with the room
- Taught live every week, with nothing pre-recorded
- A build task between classes and a teacher who reads it
- Certificate at the end, and a published project that matters more

Start here

One to one

USD 150

a month, billed in US dollars

- Private teaching at your pace and around your week
- Suited to exam years, and to adults with one free evening
- The syllabus is rebuilt around the goal you name at the start

Enquire

A note on the currency. The fee is set in dollars and held there; a page printing an exact pound figure is stale within weeks, because the exchange rate moves, so we leave the conversion to your bank. Both figures sit well below typical London in-person tutoring, which is why that argument is at the bottom of this page rather than the top.

What families say

## Six of the 547 Google reviews behind our 4.9 rating

Every line below was typed by a family who paid us. We have never written a testimonial and never paid for one, which is also why some are shorter than a marketing team would like.

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

Questions from London

## The eight things London parents ask on the first call

### Which A level does my child actually need for Computer Science at Imperial or UCL?

Mathematics, not Computer Science. Imperial College London asks for A* in Mathematics inside an A*A*A to A*AAA offer for Computing MEng, UCAS code G401. UCL asks for A*A*A with an A* in Mathematics or Further Mathematics for Computer Science BSc, UCAS code G400. Queen Mary takes Mathematics, Computer Science or Physics at AAA for Computer Science and Artificial Intelligence BSc, UCAS code I400. None of the three requires A level Computer Science.

### Can a London student take a grade 9 in GCSE Computer Science and still never have trained a model?

Yes, and most of them do. OCR J277 and AQA 8525 cover computational thinking, algorithms, data representation, computer systems, networks and cybersecurity, and the database work in J277 asks only for SELECT, FROM and WHERE. Neither is a machine learning specification, so a student can finish with a top grade having never split a dataset, fitted a model or found a leakage bug.

### What time are the London classes, and what changes on 25 October?

The flagship slot is Saturday 10:00 to 12:00, with weekday slots at 17:30 to 19:00 and 19:30 to 21:00, all London time. British Summer Time ends on Sunday 25 October 2026 and India keeps Indian Standard Time all year with no daylight saving, so a timetable pinned to Indian time slides by an hour for London families that weekend. We anchor to London time and move the Indian side twice a year.

### London has the AI companies, so why is the national compute being built somewhere else?

Because large compute follows power and land rather than offices. The January 2026 progress update on the AI Opportunities Action Plan names Isambard-AI, launched at Bristol University in July 2025, a sixfold increase in University of Cambridge supercomputer capacity by Spring 2026, and a next national supercomputer backed by £750 million coupled to the International Data Facility at the Edinburgh Parallel Computing Centre. London got the companies and the talent funding. The scarce input here is trained people.

### Is it genuinely easier to get an AI job in London than elsewhere in the UK?

The government's own survey says so. DSIT's AI Labour Market Survey 2025 recorded Greater London as 59 of 119 responding organisations, 49.58 per cent, the highest of any region. It also states that outside London and the South of England only 5 per cent of AI roles were filled through the graduate pathway, while within London, the Southwest and Southeast England that figure rises to 53 per cent. The sample is 119 organisations, so read it as a signal rather than a census.

### How much does it cost in pounds?

We bill in US dollars, not pounds: a group batch is a flat USD 100 a month and one to one teaching is USD 150 a month, the same fee everywhere outside India. Your bank converts the charge to sterling at its own card rate on the day, which is why we do not print a pound figure that would be stale within weeks. The first class is free.

### My child sits Cambridge IGCSE rather than GCSE. Does that change anything?

No. Cambridge IGCSE Computer Science 0478 and Cambridge IGCSE (9-1) Computer Science 0984, on syllabuses for 2026, 2027 and 2028, assess Paper 1 on computer systems and Paper 2 on algorithms, programming and logic, each 1 hour 45 minutes and each worth half the total. Cambridge International AS and A Level Computer Science 9618 continues in the same direction. None of it asks a student to train and evaluate a model, and the IB Diploma leaves the same gap.

### When in the year should we start, given exams and term dates?

The October half term is the best intensive window, running from 26 to 30 October 2026 in both the Tower Hamlets and the Westminster and Kensington and Chelsea determined calendars for 2026/27. The summer break from late July is second. Keep clear of the exam window: AQA's key dates for A level Computer Science 7517 put the non-exam assessment deadline on 15 May, Paper 1 on 7 June 2027 and Paper 2 on 15 June 2027. Each of London's 33 local authorities sets its own dates, so confirm against your school.

Start here

## Take the free first class before you decide anything

Leave a number and a mentor rings back, usually inside a few hours and at an hour that suits London. The first class is a real lesson with a real teacher, and it doubles as a placement check, so your child begins at their own level instead of the middle of a range.

Would rather read first? Start with [how we teach](/how-we-teach), open the [full course catalogue](/courses), or look through [Student Labs](/student-labs).

---

*Canonical: https://learn.modernagecoders.com/ai-and-machine-learning-classes-in-london*
