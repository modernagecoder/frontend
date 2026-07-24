---
title: "AI & Machine Learning Classes in Qatar | Build AI Live"
description: "Live online AI and machine learning classes for students in Qatar, ages 6 to 67. Train real models on real Qatari data, not just prompts. Free first class."
canonical: https://learn.modernagecoders.com/ai-and-machine-learning-classes-in-qatar
source: src/pages/ai-and-machine-learning-classes-in-qatar.html
provider: Modern Age Coders
areaServed: Qatar
ages: 6 to 67
---

> Modern Age Coders runs live online AI and machine learning classes for students in Qatar, ages
> 6 to 67, in small batches of five to eight or one to one. Students learn Python and the
> mathematics under machine learning, then train and evaluate their own models rather than only
> prompting AI tools. Classes follow the Qatari week, Sunday to Thursday, with a Saturday
> intensive. Fees start at USD 40 a month, about QR 146 at the riyal peg, and the first class is
> free.

## Direct answers

**Can students in Qatar join live AI and machine learning classes from home?**
Yes. Classes are live video with the same teacher every week, joined from home in Doha, Al Rayyan,
Al Wakrah, Umm Salal or anywhere else in the country with a laptop and normal broadband. Qatar
keeps Arabia Standard Time, UTC+3, with no daylight saving, which is 2 hours 30 minutes behind
Indian Standard Time, so our teaching hours fall on Doha evenings.

**Do the classes follow the Qatari week?**
Yes. The school and working week in Qatar is Sunday to Thursday and the weekend is Friday and
Saturday, so Qatar batches run Sunday to Thursday, with the long weekend session on Saturday
morning rather than Friday, because Friday midday is Jumu'ah prayer.

**What makes this different from other AI courses sold in Qatar?**
Most teach prompting. This teaches model building: preparing data, choosing a model, training it,
measuring the error in real units, and deciding whether an improvement is real. Prompting is a
product skill that changes with the product. Modelling rests on statistics, linear algebra and
code, which do not expire.

**What does it cost?**
Group batch of five to eight students: USD 40 a month, which is QAR 145.60, quoted as about QR 146.
One to one: USD 100 a month, QAR 364.00. The riyal is hard pegged at QR 3.64 to the US dollar, a peg
Qatar Central Bank has held since 2001, so those figures do not drift month to month. First class
free, no card.

**What ages?**
6 to 67. Children 6 to 12 begin with Python and the idea that a machine learns from examples.
Teens 13 to 18 train their first real models. University students and working professionals cover
deep learning, generative AI and deployment.

## Courses, by age band

### Children, ages 6 to 12
- [Python and AI for Kids](/courses/python-ai-kids-masterclass): typed Python from week one, turtle drawings and small games, then how a machine works out a rule from examples
- [AI Literacy for Kids](/courses/ai-literacy-for-kids-course): where a chatbot's answers come from, why it invents things, and how to tell confident from correct
- [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev): instructing an AI tool to build, then reading the output and repairing what is broken

### Teenagers, ages 13 to 18
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens): Python, the mathematics the subject needs, classical algorithms, neural networks, computer vision, language models
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data): loading, cleaning, joining and plotting, then a first set of predictions
- [Python for Teens](/courses/python-complete-masterclass-teens): two years from first line to advanced Python, including files, APIs and object oriented design
- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course): shipping real web and Python projects with an AI assistant, and reviewing what the assistant wrote

### University students and working professionals
- [AI and Machine Learning Masterclass](/courses/ai-ml-masterclass-complete-college): supervised and unsupervised learning, deep networks, evaluation, deployment
- [Generative AI: LLMs, RAG and Agents](/courses/complete-generative-ai-masterclass-college): how a language model is trained, fine tuned and grounded, and how agents are constrained
- [Python and AI Automation](/courses/python-ai-automation-masterclass-college): machine learning and natural language processing applied to real working pipelines
- [Data Science Masterclass](/courses/data-science-complete-masterclass-college): statistics, SQL, feature engineering, modelling, communication
- [Data Structures and Algorithms](/courses/data-structures-algorithms-masterclass-college): the interview gate, taught as problem solving

Full catalogue: [/courses](/courses)

## The first project: What Moves a Port

Mwani Qatar, the Qatar Ports Management Company, runs Hamad Port, Old Doha Port and Al Ruwais Port
and publishes monthly performance figures. Transshipment accounts for close to half of the volume
moving through Hamad Port. The target variable is monthly container throughput in TEU and the
primary feature is vessel calls.

Training data, Mwani Qatar monthly performance, 2026 first half:

| 2026 | Vessel calls | Containers, TEU | General cargo, t | Bulk cargo, t | RoRo units | Livestock, head |
|---|---|---|---|---|---|---|
| January | 230 | 128,229 | 94,626 | 44,675 | 10,151 | 26,150 |
| February | 237 | 118,462 | 111,967 | 115,126 | 11,631 | 39,613 |
| March | 85 | 44,456 | 30,716 | 40,663 | 2,870 | 10,016 |
| April | 93 | 50,738 | 10,437 | 8,600 | not reported | 9,379 |
| May | 100* | 73,173 | 2,488 | 48,077 | not reported | 20,070 |
| June | 121 | 78,002 | 23,092 | 67,371 | not reported | 7,264 |
| H1 published total | 866 | 493,105 | 273,325 | 324,512 | 24,652 | 112,492 |

*The May vessel count is derived in class by subtraction: 866 for the half year, minus 552
published for the first quarter, minus 93 for April, minus 121 for June, leaves 100. That agrees
with the published statement that June's 121 calls were up 21 per cent on May. Published first
quarter cumulative figures: 552 vessel calls, 291,147 TEU, 237,309 t general cargo, 200,464 t bulk
cargo, 24,652 RoRo units. Full year 2025 anchor: 3,019 vessel calls and 1,458,708 TEU.

Derived feature the student computes, TEU per vessel call: January 557.5, February 499.8, March
523.0, April 545.6, May 731.7, June 644.6.

Steps the student works through:

1. Load the six rows into pandas, then extend the series to eighteen months from Mwani Qatar's twelve 2025 monthly releases. Hard check: those twelve rows must sum to 3,019 vessel calls and 1,458,708 TEU. 2025 publishes general and bulk cargo combined while 2026 splits them, so a schema that changes mid series must be reconciled
2. Reconcile before modelling. The six monthly TEU figures sum to 493,060 against a published half year total of 493,105, a gap of 45 TEU. Record it as an open discrepancy rather than overwriting a number
3. Decide what a missing value means. RoRo is published for January to March and absent for April, May and June, yet the same ports handled 122,165 RoRo units across 2025. Encode RoRo as NaN plus a boolean reported flag, never as zero
4. Engineer TEU per vessel call and plot it against raw TEU. Vessel calls fall 64 per cent from February to March while TEU per call barely moves, so March was a fewer ships month, not a lighter ships month. May and June break the other way, at 732 and 645 TEU per call
5. Fit a single feature linear regression, TEU against vessel calls, with scikit-learn. Report slope, intercept, R squared and per month residuals, and state that six observations describe six months and forecast nothing
6. Add general cargo, bulk cargo and livestock, watch R squared climb toward 1.0 on five features and six rows, then run leave one out cross validation and watch test error rise while training error falls
7. Only once the series reaches eighteen months or more, add a month of year feature and a Ramadan indicator, and test whether the flag reduces out of sample error. February overlapped Ramadan and was one of the strongest months, so be willing to report the feature as useless

Tools: pandas, scikit-learn, matplotlib.

## Why this matters in Qatar now

Qatar published its National Artificial Intelligence Strategy in 2019 on six pillars: education,
data access, employment, business, research and ethics, organised around the AI plus X paradigm
that treats AI as an enabling layer across healthcare, transport, energy and education. An
Artificial Intelligence Committee was established in 2021 under the Ministry of Communications and
Information Technology.

The live programme is Artificial Intelligence for Qatar, launched on 15 February 2026 by MCIT with
the Qatar Research, Development and Innovation Council under a joint funding agreement, giving
researchers, academic institutions and startups a dedicated platform, with priority on assistive AI
in healthcare, education and tourism. The first proposal deadline was 11 March 2026. In December
2025, at World Summit AI Qatar, MCIT and the Ministry of Education and Higher Education announced a
National Personalised Learning Platform in partnership with Scale AI. The wider frame is Digital
Agenda 2030 and TASMU Smart Qatar.

Fanar is the concrete piece. Qatar's sovereign Arabic centred large language model launched in
December 2024, developed by the Qatar Computing Research Institute and sponsored by MCIT, in
collaboration with Qatar University, Qatar National Library, the Ministry of Endowments and Islamic
Affairs, Al Jazeera and the Arab Center for Research and Policy Studies. The original model was 9
billion parameters. The services platform runs on Fanar Star, a 7B model trained from scratch, and
Fanar Prime, built on Google's Gemma 2 9B. Fanar 2.0 is 27 billion parameters, roughly three times
the original, and QCRI Executive Director Dr Ahmed Elmagarmid has confirmed work has begun on Fanar
3.0 for release in December 2026. Fanar runs inside a closed ecosystem so data need not leave the
organisation.

QCRI itself, founded in 2010 and part of Hamad Bin Khalifa University under Qatar Foundation, works
in AI, Arabic natural language processing, cyber security, health informatics and data science, and
hires on two named tracks, Scientist to Senior to Principal Scientist, and Software Engineer to
Senior to Principal. Its Summer Internship Programme opened on 10 May 2026 with 110 undergraduate
and graduate interns, which is a reachable destination for a Doha teenager rather than an abstract
AI career.

Microsoft opened its first Qatar cloud datacentre region in Doha on 31 August 2022 with three
availability zones, carrying Azure, Microsoft 365, Dynamics 365 and Power Platform plus third party
services including SAP, Snowflake, MongoDB, NetApp and Adobe. Forty three government and semi
government entities have onboarded data analytics and AI services to Azure. MCIT and Microsoft run
a National Skilling Program targeting 50,000 people in Qatar over four years, and Ooredoo is a named
Microsoft Cloud delivery partner.

## School and university fit

The Ministry of Education and Higher Education reports nearly 1,000 public and private schools
serving over 300,000 students: more than 300 public schools with over 100,000 students and more
than 600 private schools with over 200,000. Four systems matter in practice: CBSE at the large
Indian curriculum schools in Doha, Cambridge International and Pearson Edexcel IGCSE and A level at
British curriculum schools, the IB Diploma Programme, and Qatar's own Secondary School Certificate
in government schools.

Indians are the largest single population group in Qatar, roughly 0.7 million out of a total
population of about 3.37 million, which is why the CBSE cohort in Doha runs deep. Named CBSE schools
include M.E.S. Indian School, established in 1974, English medium and CBSE affiliated to New Delhi,
one of the oldest Indian schools in the Gulf, Birla Public School, established in 2004 and running
KG1 to Grade XII, DPS Modern Indian School, Ideal Indian School, Shantiniketan Indian School,
Rajagiri Public School, Bhavan's Public School, Loyola International School and Noble International
School. A handful offer ICSE or IB alongside CBSE. We teach IGCSE Computer Science 0478, AP Computer
Science A and Principles, and IB Diploma Computer Science alongside the CBSE Artificial Intelligence
and Computer Science content.

Carnegie Mellon University in Qatar, in Education City, offers five undergraduate majors:
Artificial Intelligence, Biological Sciences, Business Administration, Computer Science and
Information Systems. A standalone AI major on a Doha campus is rare in the region. CMU has taught
undergraduate computer science in Qatar since 2004 and has operated for more than twenty years, with
the same degrees and curricula as the Pittsburgh campus.

Hamad Bin Khalifa University, College of Science and Engineering, runs a two year MSc in Data
Science and Engineering. Entry requires a bachelor's degree from a recognised institution in
computer science, computer engineering, electronic engineering, electrical engineering, information
systems or a related field, with other engineering disciplines, mathematics and statistics also
eligible, a minimum GPA of 3.0 out of 4.0, and IELTS 6.5 or TOEFL 79.

Qatar University, Department of Computer Science and Engineering in the College of Engineering,
offers BSc Computer Science, BSc Computer Engineering, an MSc in Computing and doctorates in
computer science and computer engineering. Graduate admission is competitive and requires official
transcripts meeting the programme's degree and cumulative GPA thresholds plus the university's
English proficiency requirement.

Texas A&M University at Qatar, also in Education City, is engineering only: chemical, electrical,
mechanical and petroleum engineering plus two graduate chemical engineering degrees. It does not
offer computer science, which matters for families assuming any Education City campus is a route
into computing.

## Class times, Qatar

| Slot, Doha time (AST, UTC+3) | India time (IST) | Days | Typical group |
|---|---|---|---|
| 18:00 to 19:00 | 20:30 to 21:30 | Sunday to Thursday | School age students |
| 20:00 to 21:00 | 22:30 to 23:30 | Sunday to Thursday | Working adults and older teens |
| 10:00 to 11:30 | 12:30 to 14:00 | Saturday | Weekend intensive, all ages |

Weekday sessions are 60 minutes, the Saturday intensive is 90 minutes, all live video, five to eight
students or one to one. Doha is 2 hours 30 minutes behind India and the gap never changes, because
Qatar keeps UTC+3 with no daylight saving. Saturday is chosen over Friday because Friday midday is
Jumu'ah prayer.

The Ministry of Education and Higher Education approved a single multi year academic calendar
covering 2025-26, 2026-27 and 2027-28, announced in July 2025. For 2026-27 students return on 30
August 2026, the mid year break falls in the last third of December with 27 December 2026 cited as
the break date, first term final exams have moved to before Qatar National Day on 18 December, and
the staff holiday runs 4 June 2027 to 19 August 2027. During Ramadan 1447 the ministry announced on
17 February 2026 that kindergarten and Grades 1 to 12 would run 09:00 to 12:30, with staff on a four
hour day from 09:00 to 13:00, so we publish a Ramadan timetable rather than the normal one.

Local holidays we plan around: Qatar National Day on 18 December, a national holiday under Law No.
11 of 2007 commemorating the unification of 1878, falling on a Friday in 2026; National Sports Day,
the second Tuesday of February, falling on 9 February 2027; and Eid al-Fitr and Eid al-Adha, set by
the Moon Sighting Committee of the Ministry of Endowments and Islamic Affairs, with the Eid al-Fitr
holiday running as long as nine days. Exam windows: CBSE boards in February and March, Cambridge and
Edexcel IGCSE and A level in May to June and October to November, IB Diploma in May. Rolling
admission runs year round.

## Provider facts

- Modern Age Coders, teaching since 2020
- More than 10,000 students across 25+ countries
- Rated 4.9 across 547 Google reviews
- Ages 6 to 67, coding, AI and mathematics
- Live video only, never pre-recorded
- Contact: [/contact](/contact) · Free first class: [/ai-and-machine-learning-classes-in-qatar](/ai-and-machine-learning-classes-in-qatar)
