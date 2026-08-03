---
title: "AI and Machine Learning Classes in Hong Kong | Build AI"
description: "Live online classes teaching students in Hong Kong, aged 6 to 67, to train and evaluate real machine learning models in Python. From USD 100 a month."
canonical: https://learn.modernagecoders.com/ai-and-machine-learning-classes-in-hong-kong
source: src/pages/ai-and-machine-learning-classes-in-hong-kong.html
---
> Live online classes teaching students in Hong Kong, aged 6 to 67, to train and evaluate real machine learning models in Python. From USD 100 a month.

In short

Modern Age Coders teaches AI and machine learning live online to learners in Hong Kong, from age 6 to age 67, in groups of five to eight or privately. The subject is model construction: Python first, then the statistics and matrix work the algorithms depend on, then training a model on published data and stating in plain units how wrong it is. Teaching is in English, on Hong Kong weekday evenings and Saturday mornings. A group place is USD 100 a month, billed in US dollars, and the opening class costs nothing.

The catalogue

## Twelve courses across three bands, and no shared syllabus between them

A Primary Four pupil in Tai Po and a data analyst in Central are not the same learner moving at two speeds. Each band has its own syllabus and its own projects.

I

### Children, ages 6 to 12

Typed code early, and a straight answer about what a model is doing

HK / KIDS / 01

#### Python and AI for Kids

Typed Python from the first lesson, with turtle drawings and short games as the vehicle, ending with a child who can show a machine working out a rule from examples.

[Open the syllabus](/courses/python-ai-kids-masterclass)

HK / KIDS / 02

#### AI Literacy for Kids

Where a generated answer comes from, why a wrong one arrives with the same confidence as a right one, and the habit of checking a claim before passing it on.

[Open the syllabus](/courses/ai-literacy-for-kids-course)

HK / KIDS / 03

#### Vibe Coding for Kids

The child asks an AI tool to make something, then finds the part that will not run and repairs it. The asking is quick. The reading is the course.

[Open the syllabus](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)II

### Teenagers, ages 13 to 18

From first syntax to a result carrying a number for how wrong it is

HK / TEEN / 01

#### AI and Machine Learning for Teens

The spine of this page. Python, the mathematics the algorithms actually use, classical methods, neural networks, vision and language models, every stage closing on a model that has been trained and scored.

[Open the syllabus](/courses/ai-ml-masterclass-teens)

HK / TEEN / 02

#### Data Science for Teens

Reading files, repairing them, joining them and drawing them. Where a teenager learns to spot the column that has quietly changed units halfway down.

[Open the syllabus](/courses/data-science-course-for-teens-python-data)

HK / TEEN / 03

#### Python for Teens

Two years from an empty editor to functions, files, APIs and tests. The right start for a Form 2 or Form 3 student with no programming behind them.

[Open the syllabus](/courses/python-complete-masterclass-teens)

HK / TEEN / 04

#### Vibe Coding for Teens

Web and Python projects shipped with an assistant alongside, plus the review discipline that turns accepting its output into a decision rather than a habit.

[Open the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)III

### University students and working professionals

Depth, generative systems, and the part where it reaches production

HK / PRO / 01

#### AI and Machine Learning Masterclass

Supervised and unsupervised methods, deep networks, training discipline, validation built to survive a sceptical reader, and the deployment step short courses leave out.

[Open the syllabus](/courses/ai-ml-masterclass-complete-college)

HK / PRO / 02

#### Generative AI: LLMs, RAG and Agents

How a language model is pre-trained, fine tuned and grounded on a private document set, and how to box in an agent so its failures are loud instead of quiet.

[Open the syllabus](/courses/complete-generative-ai-masterclass-college)

HK / PRO / 03

#### Python and AI Automation

For people already working in Central, Quarry Bay or Kowloon East who want the applied half first: models pointed at the reports already on the desk.

[Open the syllabus](/courses/python-ai-automation-masterclass-college)

HK / PRO / 04

#### Data Science Masterclass

Statistics, SQL, feature construction, modelling and the write up, finishing with a portfolio assembled for somebody hiring rather than somebody marking.

[Open the syllabus](/courses/data-science-complete-masterclass-college)

HK / PRO / 05

#### Data Structures and Algorithms

The interview gate at every serious engineering employer, and the reason a pipeline that behaves on 2,503 rows behaves when the file is a thousand times longer.

[Open the syllabus](/courses/data-structures-algorithms-masterclass-college)

HK / ALL / 06

#### Browse the full catalogue

Alongside AI we teach mathematics to university level, plus web, app and game development, all timetabled on Hong Kong evenings.

[Open all courses](/courses)

What you actually build

## Will the city stop tomorrow? Predicting Signal No. 8 from the Observatory record

Wherever we teach, the first project uses that place's own measurements. Hong Kong gets its typhoons. The Observatory publishes the complete machine-readable history of every warning signal it has hoisted, as a tab-separated file behind its Warnings and Signals Database page, running from 1946 to the present. Pulled on 25 July 2026 it held 2,503 records and was current to 24 July 2026, with Signal No. 1 for Tropical Cyclone Noul still in force.

| Year | Cyclones needing a signal | Reached No. 8 or above | Hours under No. 8+ | Highest signal |
| --- | --- | --- | --- | --- |
| 2015 | 3 | 1 | 5.5 | 8 |
| 2016 | 9 | 2 | 27.2 | 8 |
| 2017 | 7 | 5 | 46.3 | 10 |
| 2018 | 6 | 1 | 28.2 | 10 |
| 2019 | 5 | 1 | 10.0 | 8 |
| 2020 | 5 | 2 | 26.5 | 9 |
| 2021 | 7 | 2 | 45.3 | 8 |
| 2022 | 6 | 3 | 50.8 | 8 |
| 2023 | 5 | 3 | 76.3 | 10 |
| 2024 | 7 | 2 | 29.5 | 8 |
| 2025 | 14 | 3 | 65.2 | 10 |
| 2026, to 24 Jul | 2 | 0 | 0.0 | 1 |

Every column here is computed from the Observatory's raw signal file, so it is derived from Observatory records rather than an Observatory statistic. The final row covers 1 January to 24 July 2026 only.

2025 catches the eye: fourteen cyclones needed a signal and two separate storms reached No. 10. Nineteen have reached No. 10 since 1946, among them York in 1999, Hato in 2017, Mangkhut in 2018, Saola in 2023, and both Wipha and Ragasa in 2025. Saola alone held the city under Signal No. 10 for 7 hours 25 minutes.

The target is one binary label per storm: did it reach Signal No. 8 or above? Collapsing the file to one row per cyclone gives 482 distinct storms that required at least Signal No. 1, of which 132 reached No. 8 or above, a base rate of 27.4 per cent.

The honest feature set is thin, and admitting that is part of the work. Before the outcome is known the file offers the intensity classification, encoded as an ordinal from tropical depression up to super typhoon, and the month the first signal went up.

pandasscikit-learn decision treetime-based split target leakageprecision and recall

1. #### Download the raw files and parse them yourself

  Fetch tc.dat and tcname.dat with curl and read them as tab-separated, sixteen columns: cyclone identifier, intensity class, name, signal number, direction, start and end timestamps, a summer-time flag and the duration. No wrapper library, no cleaned copy from anywhere else.
2. #### Throw away the rows that are not typhoons

  1,248 of the 2,503 records carry class MSN, signal code 0 and no cyclone identifier. Those are Strong Monsoon Signal warnings, and they are more than half the file. A student who models the file as delivered is mixing monsoons with typhoons and will never find out.
3. #### Collapse to one row per storm and label it

  Group the rest by cyclone identifier, keeping name, intensity class, month of first signal and highest signal reached. You should land on 482 rows. Label each for whether it reached Signal No. 8 or above and confirm 132 positives. A different count means the grouping is wrong.
4. #### Split on time, never at random

  Train on everything before 2011 and test on 2011 onwards, giving 385 training rows and 96 test rows. A random split scatters storms from the 1950s and the 2020s across both sides and lets the model learn the era instead of the storm. Then fit a decision tree of depth three on intensity class and month, reporting precision and recall rather than accuracy.
5. #### Add the feature that looks helpful, and watch it lie

  Aggregating a signal log makes it natural to keep a count of how many records each cyclone produced. Add it and the same tree scores 100.0 per cent accuracy on the held-out test set, precision 1.00 and recall 1.00. At this point a beginner announces that typhoon forecasting is solved.
6. #### Prove the feature is the answer written backwards, then delete it

  A storm can only generate four or more records by climbing 1, then 3, then 8, perhaps 9 and 10, then stepping back down on the way out. Of the 350 cyclones that stopped at No. 1 or No. 3, only 3 ever produced four or more records, while 115 of the 132 that reached No. 8 or above did. A hand-written rule reading four or more records scores 95.9 per cent against a 72.6 per cent majority-class baseline, with no model at all.
7. #### Report the honest result, including the part that stings

  On intensity class and month alone the model scores 64.6 per cent accuracy on the test years with precision 0.00 and recall 0.00. It predicts no Signal No. 8 for every storm and lands below the 66.7 per cent baseline of always saying no. That is the correct finding: whether the city shuts depends on where a storm passes and how close it comes, not on its name or its month. The next step is the Observatory's annual tropical cyclone reports and their closest approach distances. One last trap: 545 of the 2,503 records carry an S flag meaning the timestamp is Hong Kong Summer Time, an hour ahead of the standard clock.

The distinction

## One label, two occupations, and only one of them keeps its value

We teach both, in that order, and we say out loud which one lasts. From a single Observatory file a careless pipeline reports 100.0 per cent and a careful one reports 64.6 per cent. Knowing which of those is truthful is not something an interface teaches you.

#### Using AI tools

- Describe what you want, read what comes back, rephrase, run it again
- Keep up with whichever assistant is popular in your form this term
- The finish line is an answer that sounds right when read aloud
- Almost none of it survives a pricing change or a shutdown notice
- A few weekends covers most of what there is to learn
- We do teach it, including how to catch an answer that is wrong and confident

#### Building AI

- Open a real file and find out what the 2,503 rows in it are actually recording
- Discard the 1,248 monsoon rows before any of them reach a model
- Recognise a record count of four or more as the outcome in disguise, and remove it
- Split on the year so the model cannot memorise a decade it will never see again
- Quote precision and recall, because 64.6 per cent accuracy hides a model predicting nothing
- Keep the statistics, the matrix algebra and the code, none of which expire with a product

Hong Kong is a reasonable place to press that argument, because the government has committed public money to the building side of it and attached dates to the commitment.

Why now, in Hong Kong

## HK$1 billion, 200 government procedures, and what a student should read into both

The Chief Executive's 2025 Policy Address, titled Deepening Reforms for Our People, Leveraging Our Strengths for a Brighter Future, is unusual among government AI strategies in that its AI chapter carries money, dates and named owners. HK$1 billion is earmarked for the Hong Kong Artificial Intelligence Research and Development Institute, to be established within 2026 under the Innovation, Technology and Industry Bureau, at paragraph 69 of the address and item 10 of the policy annex. A separate HK$3 billion Frontier Technology Research Support Scheme at paragraph 68 aims to help the UGC-funded universities attract international researchers in AI and other frontier fields.

There is capacity to build on. Paragraph 67 records that the AIR@InnoHK research cluster has pooled over 1,000 experts and that nearly 1,000 AI companies have gathered in Hong Kong's innovation and technology parks. Paragraph 72 confirms Cyberport's AI Supercomputing Centre is established and the AI Subsidy Scheme has launched, and commits about 10 hectares at Sandy Ridge in the North District to tender for a data facility cluster.

Governance is named as well. Paragraphs 41 and 42 create an AI Efficacy Enhancement Team led by the Deputy Chief Secretary for Administration. Item 11 of the annex turns that into targets anybody can check: AI tools covering 100 public administration procedures within 2026, rising to no fewer than 200 by the end of 2027, with AI Flagship Projects launched across 2026-27 and 2027-28.

The demand side is equally legible. Financial services is named directly: the Hong Kong Monetary Authority, with Cyberport, has launched the second cohort of its AI Sandbox, and the HKMA is developing an approach to evaluating AI models in order to test the system security of financial institutions. Read that as a job description. It asks for people who can probe and stress a model, not people who can call an API.

Healthcare is a second channel, with digital pathology and AI to be piloted in the Kowloon Central, New Territories East and New Territories West clusters in the first quarter of 2027. The Development Bureau will subsidise AI application in private sector construction works, and the Department of Justice is standing up an inter-departmental working group on the legislation needed for wider AI use, a reminder that the hiring is not all engineering. The Digital Policy Office publishes an Ethical AI Framework, and the framing used throughout is industries for AI and AI for industries.

The estate behind that hiring is named too. The Hong Kong Science and Technology Parks Corporation operates Hong Kong Science Park, Tai Po InnoPark, Tseung Kwan O InnoPark and Yuen Long InnoPark, and the government points to the Shenzhen, Hong Kong and Guangzhou cluster ranking first among the top 100 innovation clusters in the 2025 Global Innovation Index. A child who is twelve in 2026 turns twenty two in 2036, roughly when those procedures and research centres become somebody's day job.

HK$1 billion

Earmarked for the Hong Kong Artificial Intelligence Research and Development Institute, due within 2026

12,143

Private HKDSE candidates in 2026, up about 19.5 per cent in a single year

1,463

Applications for HKUST JS5282 in the 2025 cycle, against an intake of 114

482

Tropical cyclones in the Observatory signal record since 1946, the file behind the first project

School and university

## The HKDSE, the ICT paper, and the Extended Part that quietly decides things

### What the qualification is made of

The Hong Kong Diploma of Secondary Education is awarded by the Hong Kong Examinations and Assessment Authority, and its Category A senior secondary subjects are four core subjects plus electives. The core is Chinese Language, English Language, Mathematics, and Citizenship and Social Development. Results come back in five levels, 1 to 5, with the strongest Level 5 candidates awarded 5** and the next group 5*, and anything below Level 1 recorded as Unclassified. Citizenship and Social Development is the exception, reported only as Attained or Unattained.

Information and Communication Technology sits on the elective list, which is the direct curricular hook for a course like ours, alongside Biology, Chemistry, Physics, Design and Applied Technology and a dozen more.

Mathematics is the quiet one. It is built as a Compulsory Part with an optional Extended Part, Module 1 or Module 2, and several university programmes accept the Extended Part at Level 3 in place of a second elective. A family treating M1 or M2 as an optional extra is making an admissions decision without knowing it.

One reform still shapes the cohort. In 2021 the Curriculum Development Council and the HKEAA Public Examinations Board endorsed optimising the four core subjects, replacing Liberal Studies with Citizenship and Social Development and phasing out Combined Science and Integrated Science, effective from Secondary 4 in 2021/22.

### The size and shape of the cohort

The 2026 figures, released on 15 July 2026, describe a market and not only an examination. 58,487 candidates registered, about 5.4 per cent more than in 2025, and roughly 97 per cent sat: 46,344 school candidates, up about 2.2 per cent, and 12,143 private candidates, up about 19.5 per cent in a single year. Private candidature grew far faster than school candidature, which says plainly that families here already buy instruction outside the school system.

43,534 day school candidates from 416 day schools entered. 15,973 met the common degree entry standard of 332A plus Level 3 in two electives, which the HKEAA puts at about 36.8 per cent of day school candidates who took those subjects, against a five year average of about 36.5 per cent across 2021 to 2025, and 30,977 were eligible for sub-degree programmes. Roughly two thirds of day school candidates therefore do not clear the local degree bar, and for that group a portfolio of finished, inspectable work beats another round of drilling. For the third consecutive year about 480 Hong Kong candidates sat at three pilot centres in Greater Bay Area Mainland cities.

### JUPAS and the eight

Admission to the eight University Grants Committee funded institutions runs through the Joint University Programmes Admissions System: City University of Hong Kong, Hong Kong Baptist University, Lingnan University, The Chinese University of Hong Kong, The Education University of Hong Kong, The Hong Kong Polytechnic University, The Hong Kong University of Science and Technology and The University of Hong Kong. Hong Kong Metropolitan University takes part on a self-financing basis, and HKU runs a Faculty of Computing and Data Science. A substantial international school sector runs alongside the HKDSE track on IB and UK-style qualifications, and we teach into it on the same timetable.

### One AI degree with its numbers in public

HKUST programme JS5282, Engineering with Extended Major in Artificial Intelligence, is the one published in enough detail to plan against. Entry asks for Chinese Language, English Language and Mathematics Compulsory Part at Level 3, Citizenship and Social Development at Attained, one of Biology, Chemistry, Physics or Information and Communication Technology at Level 3, and one further subject at Level 3. The alternative route swaps that second elective for Mathematics Extended Module 1 or Module 2 at Level 3. First year tuition is HK$47,000, the programme runs four years, first year intake is 114 and interviews are held on a selective basis.

The 2025 cycle shows what that means: 1,463 applications, 257 of them Band A, and 51 offers, every one to a Band A applicant. Students take roughly one additional course per semester and finish on a capstone, graduating with a Bachelor of Engineering in an engineering discipline with an Extended Major in Artificial Intelligence. HKUST advises that entry into the BEng in Artificial Intelligence, the BEng or BSc in Computer Science and the BEng in Computer Engineering by this route is expected to be competitive, and that anyone set on those majors should seek department-based admission directly.

Neighbouring codes on the same page run from JS5212 for Computer Engineering and JS5240 for the Department of Computer Science and Engineering through to JS5270 for Mechanical and Aerospace Engineering. The JUPAS page cites HKUST at number 33 in the world for Engineering in the 2025 Times Higher Education World University Rankings, the highest ranking awarded to a Hong Kong engineering school.

### What we do not claim

We are not an admissions service, and a coding course does not open a JUPAS gate. Levels open it. What a portfolio does is fill the Other Experiences and Achievements in Competitions and Activities section and the Student Learning Profile with something an admissions tutor can open and inspect: a live application at a public address, a dataset anyone can download, and a written account of which model was rejected and why.

How the classes run

## Two and a half hours behind India, every single day of the year

Hong Kong Time is UTC plus 8 and observes no daylight saving. Indian Standard Time, where our teaching operation sits, is UTC plus 5 hours 30 minutes and also never moves. Hong Kong is therefore exactly 2 hours 30 minutes ahead in January and in July alike, so a tutor converts by subtracting 2:30 and never has to reset a recurring booking.

19:30 to 20:45

Hong Kong time on weekdays, which is 17:00 to 18:15 in India. After dinner here, working afternoon there, and our default.

20:30 to 21:45

Hong Kong time on weekdays, which is 18:00 to 19:15 in India. Held open for senior form students with commitments earlier in the evening.

Saturday 10:00 to 11:30

Hong Kong time, which is 07:30 to 09:00 in India. The longest session of the week, and the one for project work.

### What a session is

Weekday sessions run 75 minutes and the Saturday session runs 90, all of it live, with the same teacher week after week. Screens are shared in both directions, so a mistake is interrupted while it is being typed rather than returned marked three days later. Groups are five to eight students, or one to one where a family prefers it. Between one week and the next there is something to build and bring back, not a worksheet to complete.

Two local specifics sit on top. Senior form students here carry heavy evening commitments, so we keep the later weekday slot genuinely open rather than pretending everyone is free at half past seven. And when the Observatory hoists Signal No. 8 the class still runs, because the teacher is in India and the classroom is a video call. If a student's building loses power or broadband during a storm, that session is moved rather than lost.

### The year, and the weeks to plan around

The 2026 cycle closed on 15 July 2026, when results were released. The next fixed point is the 2027 examination, whose written papers run from Tuesday 6 April 2027 to Tuesday 4 May 2027, with no papers on Sundays and none on Saturday 1 May 2027, Labour Day; 4 May is a reserve day. For a technically minded student the dates that matter are Mathematics Compulsory Part Papers 1 and 2 on Monday 12 April, Information and Communication Technology Papers 1 and 2 on Saturday 17 April, Physics on 21 April and Mathematics Extended Part Modules 1 and 2 on Friday 23 April. Practical and speaking examinations sit in a separate, earlier window.

Two things follow. A student sitting the 2027 papers should have moved from new material to revision by roughly late February 2027, because the ICT paper on 17 April and the Extended Part on 23 April bracket the window in which nothing new should be arriving. And the autumn term carries weather risk that is not a footnote: Observatory records show tropical cyclone signals from May through October, and every Signal No. 10 on record has fallen in July, August or September, precisely when the school year opens. The HKEAA circular of 6 March 2026 postpones all public examinations under Signal No. 8 or above and under Black rainstorm, delays written papers 15 minutes under Red, and runs to timetable under Signal No. 3 or Amber. Admission here is rolling, so a student can begin in any week.

Student work

## Four things students built here and left switched on

Each of the four below has a public address you can open right now, and each was designed and deployed by a student rather than by a teacher demonstrating. That is the standard a Hong Kong portfolio should meet, because an admissions tutor can check a link and cannot check a claim. More sit in [Student Labs](/student-labs).

![NutriLife AI nutrition coach project screenshot](/images/projects/nutrilife.webp)

AI and ML

#### NutriLife, an AI nutrition coach

A nutrition assistant that reads what has been eaten and steers the user towards a target, carried from sketch to public link by one student.

by Bhavya · [Open the live project](https://nutrilife-bhavya.lovable.app)

![Misti AI chatbot for maths and coding screenshot](/images/projects/misti.webp)

AI and ML

#### Misti, an AI chatbot for maths and coding

A tutoring chatbot answering mathematics and programming questions, written by a student and running on its own domain.

by Harshit · [Open the live project](https://misti.modernagecoders.com)

![GuardianX AI internet safety assistant screenshot](/images/projects/guardianx.webp)

AI and ML

#### GuardianX, an AI safety assistant

An assistant that helps a young person work out when an online situation has turned unsafe, taken end to end by a student.

by Vivaan · [Open the live project](https://guardianx-cybersaver.lovable.app)

![SkyCast weather app screenshot](/images/projects/skycast.webp)

Data and forecasting

#### SkyCast, a weather app

A weather application built on live feeds, the closest relative of the typhoon signal work above.

by Krish · [Open the live project](https://krish-shroff.github.io/AuraWeatherTech/)

Fees

## What a Hong Kong family pays, and why the number never moves

Pricing is flat and billed in US dollars: USD 100 a month for a group place and USD 150 a month for one to one, the same everywhere outside India. The price published here is the price on the day you pay. Billing is month by month, there is no joining charge, and nothing is signed for a year.

Free first class

USD 0

No card needed

- Taught, not sold, by the teacher who would take the batch
- Also tells us the level to place the learner at
- Watch it, then decide in your own time

Book it

Group batch

USD 100

a month, billed in US dollars

- Five to eight students, one teacher, every week
- Live video, never a recording
- A build task between sessions, reviewed by the teacher
- Certificate on completion

Start here

One to one

USD 150

a month, billed in US dollars

- Private teaching at the pace the learner sets
- Suits Form 5 and Form 6 years and adults with few free evenings
- Syllabus rebuilt around the goal you name

Enquire

One point worth stating plainly. The truthful answer is a single number, not a band: USD 100 a month for a group place and USD 150 for one to one, billed in US dollars, the same everywhere outside India. There are no decimals to defend because there is no conversion step at all.

What families say

## 4.9 from 547 Google reviews, and not one of them drafted here

Written by families who pay us. We neither write testimonials nor commission them.

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

"My son has been attending this coding class for the past couple of months, and I have been genuinely impressed with both his progress and enthusiasm. The instructors are incredibly patient and knowledgeable. I have noticed a big boost in his confidence."

Poonam Rathore

Parent

★★★★★

"Coding classes here make learning very interesting and conceptual. The teachers teach us in a very easy-to-understand and efficient manner."

Arush Poddar

Student

Questions from Hong Kong

## Eight questions Hong Kong parents put to us first

### Will a Typhoon Signal No. 8 cancel my live online class?

Schools in Hong Kong close under Signal No. 8, and the HKEAA postpones every public examination when Signal No. 8 or above is issued or a Black rainstorm warning is in force, normally announcing that about two hours before the paper was due to start. A lesson taught over video from India is not covered by those closures, so a stormbound afternoon does not automatically cost a student a session. What can cost one is a power or broadband failure in the student's own building, and the rule there is simple: if the connection drops on your side during a storm, the class is rescheduled at no charge.

### What time are the classes in Hong Kong time, and does the gap to India ever change?

It never changes. Hong Kong Time is UTC plus 8 with no daylight saving, Indian Standard Time is UTC plus 5 hours 30 minutes and also never shifts, so Hong Kong stays exactly 2 hours 30 minutes ahead all year. Three slots run: 19:30 to 20:45 Hong Kong time, which is 17:00 to 18:15 in India; 20:30 to 21:45 Hong Kong time, which is 18:00 to 19:15 in India; and Saturday 10:00 to 11:30 Hong Kong time, which is 07:30 to 09:00 in India.

### Is the teaching in English?

Yes. Lessons, slides, notebooks and written code review comments are all in English, and so is every library, dataset column name and error message a student will meet. Medium of instruction varies from school to school in Hong Kong, so a student who studies most subjects in Chinese sometimes needs a few weeks to settle into the vocabulary. Teachers define terms as they introduce them rather than assuming them.

### Does this help with the HKDSE Information and Communication Technology elective?

It helps sideways, and we would rather say so than oversell it. ICT Papers 1 and 2 sit on Saturday 17 April 2027, and this is not a course written backwards from that paper. What it builds is the programming fluency the ICT syllabus assumes rather than teaches, so a student reaches revision able to write and debug code instead of memorising descriptions of it.

### Do we need Mathematics Extended Part Module 1 or Module 2?

For a technical degree it deserves serious thought. HKUST programme JS5282, Engineering with Extended Major in Artificial Intelligence, accepts Mathematics Extended Module 1 or Module 2 at Level 3 in place of a second elective, which makes the Extended Part a quiet gate into engineering admission. Its paper falls on Friday 23 April 2027. Our teenage track carries the mathematics inside the machine learning rather than beside it, so the two reinforce each other.

### What do the fees come to?

A group place is USD 100 a month and one to one teaching is USD 150 a month. Pricing is flat and billed in US dollars everywhere outside India, so there is no Hong Kong dollar price list to track. The first class is free.

### Can any of this be used in a JUPAS application?

A JUPAS application includes an Other Experiences and Achievements in Competitions and Activities section and a Student Learning Profile, and finished machine learning projects built on Hong Kong data are the evidence those fields were designed to collect. A live link, a dataset an admissions tutor can open, and a written account of why one model was rejected carry more weight than a certificate recording attendance.

### How competitive is an AI degree in Hong Kong?

Take the one programme whose figures are published in full. In the 2025 cycle HKUST JS5282, Engineering with Extended Major in Artificial Intelligence, drew 1,463 applications, 257 of them Band A, and made 51 offers, every one to a Band A applicant, against a first year intake of 114. First year tuition is HK$47,000. HKUST itself advises applicants set on Artificial Intelligence, Computer Science or Computer Engineering to seek department-based admission directly, because entry to those majors by the extended major route is expected to be competitive.

Start here

## Take one free class before you decide anything

Leave a number and a mentor rings back at an hour that suits Hong Kong rather than one that suits us. That opening session is taught, not sold, and it also tells us the level to place a learner at, so nobody spends a term being bored or being lost.

Prefer to look around first? Read [how we teach](/how-we-teach), browse the [full course catalogue](/courses), or see what students have built in [Student Labs](/student-labs).

---

*Canonical: https://learn.modernagecoders.com/ai-and-machine-learning-classes-in-hong-kong*
