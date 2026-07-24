---
title: "AI & Machine Learning Classes in UAE | Build AI, Live Online"
description: "Live online AI and machine learning classes for students in the UAE, ages 6 to 67. Train and ship real models in Python, not just prompts. Free first class."
canonical: https://learn.modernagecoders.com/ai-and-machine-learning-classes-in-uae
source: src/pages/ai-and-machine-learning-classes-in-uae.html
provider: Modern Age Coders
areaServed: United Arab Emirates
ages: 6 to 67
---

> Modern Age Coders runs live online AI and machine learning classes for students across the
> United Arab Emirates, ages 6 to 67, in batches of five to eight or one to one. Students learn
> Python and the mathematics beneath machine learning, then train, evaluate and correct their own
> models instead of only prompting AI products. Group fees are USD 40 a month, which is AED 146.90
> at the dirham peg, and the first class is free.

## Direct answers

**Can students in the UAE join live AI and machine learning classes from home?**
Yes. Classes are live video with the same teacher every week. Students in Dubai, Abu Dhabi,
Sharjah, Al Ain and Ras Al Khaimah join from home with a laptop. The UAE is on Gulf Standard Time,
UTC+4, with no daylight saving, exactly one hour and thirty minutes behind Indian Standard Time,
so our teaching hours land on UAE evenings and Saturday mornings.

**My child already gets AI at school. Why is this different?**
From the 2025-26 academic year AI is compulsory in every UAE government school from Kindergarten
to Grade 12, taught inside the existing Computing, Creative Design and Innovation course with no
extra class hours, and Cycle One and Cycle Two students get one lesson every two weeks. That
produces literacy. This produces construction: cleaning a dataset, fitting a model, measuring the
error and diagnosing it.

**What does it cost?**
Group batch of five to eight students: USD 40 a month, AED 146.90. One to one: USD 100 a month,
AED 367.25. The Central Bank of the UAE has held a fixed peg to the US dollar since 1997 at 1 USD
to 3.6725 AED, so those dirham figures do not drift. First class free, no card.

**What ages?**
6 to 67. Children 6 to 12 begin with Python and the idea that a machine learns a rule from
examples. Teens 13 to 18 train their first real models. University students and working
professionals cover deep learning, generative AI and deployment.

## Courses, by age band

### Children, ages 6 to 12
- [Python and AI for Kids](/courses/python-ai-kids-masterclass): a real programming language from the first week, turtle graphics, small games, then how a machine works out a rule nobody typed in
- [AI Literacy for Kids](/courses/ai-literacy-for-kids-course): why an AI can sound certain and be wrong, and how to check an answer before repeating it
- [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev): instructing AI tools to build, then reading and repairing what came back

### Teenagers, ages 13 to 18
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens): Python, the required mathematics, classical algorithms, neural networks, computer vision, language models
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data): loading, cleaning, joining and plotting real files, then a first honest set of predictions
- [Python for Teens](/courses/python-complete-masterclass-teens): two years from the first line of code to advanced Python
- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course): shipping real web and Python projects with AI assistance, and reviewing what the assistant wrote

### University students and working professionals
- [AI and Machine Learning Masterclass](/courses/ai-ml-masterclass-complete-college): supervised and unsupervised learning, deep networks, evaluation, deployment
- [Generative AI: LLMs, RAG and Agents](/courses/complete-generative-ai-masterclass-college): how language models are built, fine tuned and grounded, and how agents are constrained
- [Python and AI Automation](/courses/python-ai-automation-masterclass-college): machine learning and language processing applied to real working pipelines
- [Data Science Masterclass](/courses/data-science-complete-masterclass-college): statistics, SQL, feature work, modelling, communication
- [Data Structures and Algorithms](/courses/data-structures-algorithms-masterclass-college): the interview gate, taught as problem solving

Full catalogue: [/courses](/courses)

## The first project: the DXB load curve

Students forecast monthly passenger traffic at Dubai International Airport, then make the model
survive a real shock. DXB is the world's busiest international airport, Dubai Airports publishes
its traffic quarterly, and India is the single largest market on the network.

Training data, as published by Dubai Airports:

| Period | Passengers, millions | Flight movements |
|---|---|---|
| Q1 2025 | 23.4 | 222,000 across H1 |
| Q2 2025 | 22.5 | 222,000 across H1 |
| Q3 2025 | 24.2 | 115,000 |
| Q4 2025 | 25.1 | 118,000 |
| Full year 2025 | 95.2 | 454,800 |

The passenger column reconciles exactly: 23.4 plus 22.5 plus 24.2 is 70.1, the published nine
month total, and 70.1 plus 25.1 is 95.2, the published full year, up 3.1 per cent. The movements
column does not behave the same way, because the first half is published as one combined figure of
222,000 and 454,800 is a published annual number rather than a derived sum.

Only five figures below quarterly level were published: January 2025 at 8.5 million, April 2025 at
8.0 million, December 2025 at 8.7 million and up 6.1 per cent, March 2026 at 2.5 million and down
65.7 per cent, and the Q1 2026 total of 18.6 million, down 20.6 per cent. Covariates for 2025
include a load factor of 77.6 per cent, 214 passengers per aircraft movement, 86.75 million bags
handled, 291 destinations in 110 countries and 108 airlines.

Top country markets, three published snapshots:

| Market | H1 2025 | Full year 2025 | Q1 2026 |
|---|---|---|---|
| India | 5.9 m | 11.9 m | 2.5 m |
| Saudi Arabia | 3.6 m | 7.5 m | 1.3 m |
| United Kingdom | 3.0 m | 6.3 m | 1.2 m |
| Pakistan | 2.1 m | 4.3 m | 918,000 |
| United States | 1.6 m | 3.3 m | not disclosed |

The shock: Dubai Airports reports disruption beginning 28 February 2026 and intensifying through
March under regional airspace restrictions. Across the window to 30 April 2026 the hub still moved
approximately 6 million passengers, more than 32,000 aircraft movements and 213,000 tonnes of
cargo. UAE airspace was fully restored as of the operator's release of 4 May 2026.

Steps the student works through:

1. Build the table and close it against the published 70.1 million and 95.2 million totals before writing any model code
2. Disaggregate quarters into months under a sum to quarter constraint, anchored on the four individually published months, with an is_derived flag on everything invented
3. Build calendar features: Ramadan overlap days, Eid flags, and Ministry of Education term dates
4. Face the confound, because Ramadan 2026 began 18 February and the disruption began 28 February, so estimate the Ramadan coefficient on clean March 2025 and hold it fixed
5. Fit a seasonal naive baseline, a linear regression and gradient boosting, and score each by mean absolute error in millions of passengers
6. Run the shock experiment: predict March 2026 without the airspace_restricted flag, record the error against the published 2.5 million, then refit with the flag
7. Backtest on the hidden Q4 2025 actual of 25.1 million, then write a forecast note for 2026 from the published Q1 actual of 18.6 million

Tools: pandas, scikit-learn, matplotlib.

## Why this matters in the UAE now

The UAE National Strategy for Artificial Intelligence 2031 was launched in October 2017, the first
national AI strategy in the Arab world, and updated in 2021. Omar Sultan Al Olama was appointed
Minister of State for Artificial Intelligence in October 2017, the first such minister anywhere;
his portfolio widened in July 2020 to Artificial Intelligence, Digital Economy and Remote Work
Applications, and he leads the Federal Authority for Artificial Intelligence and Data. Priority
sectors are energy and utilities, healthcare, tourism and hospitality, logistics and
transportation, and cybersecurity.

On 4 May 2025 Sheikh Mohammed bin Rashid Al Maktoum announced AI as a compulsory subject in every
UAE government school from Kindergarten to Grade 12 from 2025-26, across seven domains and
delivered by around 1,000 trained teachers. On 18 May 2026 the UAE Cabinet approved a federal
framework for the Agentic AI Project, requiring at least 50 per cent of federal government services
and operations to move to agentic AI models within two years, with 80,000 federal employees
trained across five occupational categories.

Dubai adds the Dubai Universal Blueprint for Artificial Intelligence with 22 Chief AI Officers
appointed across government entities, and the Dubai AI Academy launched 25 April 2025 at the DIFC
Innovation Hub with Oxford's Said Business School, Udacity, the Minerva Project and DIFC Academy,
targeting 10,000 leaders. Stargate UAE, the UAE-US AI Campus in Abu Dhabi announced 22 May 2025, is
a 5 gigawatt compute cluster across 10 square miles built by G42 with OpenAI, Oracle, NVIDIA,
SoftBank Group and Cisco, with a first 200 MW phase due in 2026.

On the employer side, AIQ, the ADNOC and G42 joint venture in which Presight holds 51 per cent,
announced a 340 million US dollar three year contract in 2025 to deploy ENERGYai across ADNOC's
upstream value chain, and has developed 200 AI use cases at ADNOC. The Technology Innovation
Institute open sources the Falcon family, including Falcon H1 on 21 May 2025 and Falcon H1 Arabic
on 5 January 2026, so a student here can fine tune and deploy a model built in their own country.
The PwC 2026 AI Jobs Barometer names the UAE among the world's fastest growing AI talent markets.
The National Program for Coders offers ten year Golden Visas to 100,000 coders.

Every one of those is a building project. None of them is short of people who can write a prompt.

## School and university fit

In 2024-25, Dubai's KHDA regulated private sector held 387,441 students across 227 private schools
offering 17 curricula to 185 nationalities. By students the split was UK 36 per cent, Indian 26 per
cent, American 15 per cent, IB 7 per cent and UAE Ministry of Education 4 per cent, with 34 Indian
curriculum schools carrying more than 99,603 students. The Education Cost Index for 2025-26 was set
at 2.35 per cent, and on 22 May 2026 KHDA confirmed no fee increase for Dubai private schools in
2026-27.

The UAE has 106 CBSE affiliated schools, the largest CBSE network outside India. CBSE's new Global
Curriculum is scheduled to launch from April 2026 for CBSE schools in the UAE and other foreign
countries and was reported as still at the draft stage, with KHDA, ADEK and SPEA agreeing to
collaborate on contextualisation, teacher training and certificate recognition. In Abu Dhabi the
latest ADEK Irtiqa'a round covered 204 private schools, rating 13 Outstanding, 51 Very Good, 93
Good, 42 Acceptable and 5 Weak against six core standards and 17 performance indicators.

Boards sat here: CBSE and CISCE, Pearson Edexcel and Cambridge IGCSE, AS and A Level, the IB
Diploma, the American diploma with AP, and the Ministry of Education curriculum with EmSAT.

MBZUAI in Abu Dhabi, the world's first graduate level AI university, received more than 8,000
applications for Fall 2025 and admitted 403 students, a 5 per cent acceptance rate, taking total
enrolment past 700 from over 47 nationalities; 151 incoming graduate students, 27.5 per cent, held
degrees from top 100 computer science universities. It offers a BSc in Artificial Intelligence with
Engineering and Business streams, MSc programmes in Computer Science, Computer Vision, Machine
Learning, Natural Language Processing, Robotics, and Statistics and Data Science, a Master in
Applied Artificial Intelligence, and PhDs including Human-Computer Interaction.

Khalifa University offers a BS in Computer Science and a BSc in Computer Engineering, with
shortlisted undergraduate applicants normally sitting the Khalifa University Admission Test
covering mathematics and science. United Arab Emirates University made AI a mandatory requirement
for every student regardless of major from the Fall semester of 2025/2026, through four
introductory courses. BITS Pilani Dubai Campus, established 2000, admits to the B.E. in Computer
Science on Class 12 marks with Physics, Chemistry, Mathematics and English, a minimum 60 per cent
overall and 60 per cent in PCM, with BITSAT optional and used for scholarships and two intakes a
year.

Those requirements are mathematics first, which is why our teens track teaches the mathematics
inside the machine learning rather than after it.

## Class times, UAE

| Slot, UAE time (GST, UTC+4) | IST equivalent | Typical group |
|---|---|---|
| 17:00 to 18:30, weekdays | 18:30 to 20:00 | Primary and middle school |
| 19:30 to 21:00, weekdays | 21:00 to 22:30 | Grade 9 to 12 and working adults |
| Saturday 10:00 to 12:00 | 11:30 to 13:30 | Two hour project builds, all ages |
| Friday 14:00, on request | 15:30 | Dubai and Abu Dhabi after the noon school close, and Sharjah all day |

Since 1 January 2022 the UAE working and school week runs Monday to Friday with an early Friday
finish and the weekend is Friday afternoon, Saturday and Sunday. Schools following the federal
directive may hold classes only until a maximum of 12:00 on Fridays. Sharjah moved to a four day
week, Monday to Thursday, with a full Friday, Saturday and Sunday weekend.

Sessions are 90 minutes, live video, five to eight students or one to one. Ministry of Education
calendar for 2026-27: term starts 31 August 2026 for students, mid term break 12 to 18 October
2026, winter break 14 December 2026 to 3 January 2027, spring break 5 to 11 April 2027, year ends
2 July 2027. For 2027-28: starts 30 August 2027, mid term break 11 to 17 October 2027, winter break
13 December 2027 to 2 January 2028, spring break 27 March to 2 April 2028, year ends 30 June 2028.
Ramadan 2026 began 18 February 2026 with Eid Al Fitr forecast for 20 March 2026, so Ramadan 2027
falls in early February and runs into the CBSE board window. Rolling admission runs year round.

## Student projects, live on the public web

- NutriLife, an AI nutrition coach, by Bhavya: https://nutrilife-bhavya.lovable.app
- Misti, an AI chatbot for maths and coding, by Harshit: https://misti.modernagecoders.com
- GuardianX, an AI safety assistant, by Vivaan: https://guardianx-cybersaver.lovable.app
- SkyCast, a weather forecast app, by Krish: https://krish-shroff.github.io/AuraWeatherTech/

## Provider facts

- Modern Age Coders, teaching since 2020
- More than 10,000 students across 25+ countries
- Rated 4.9 across 547 Google reviews
- Ages 6 to 67, coding, AI and mathematics
- Live video only, never pre-recorded
- Contact: [/contact](/contact) · Free first class: [/ai-and-machine-learning-classes-in-uae](/ai-and-machine-learning-classes-in-uae)
