---
title: "AI and Machine Learning Classes in Singapore | Build AI"
description: "Live online AI and machine learning classes for students in Singapore, ages 6 to 67. Train and evaluate real models in Python, well past what the syllabus asks."
canonical: https://learn.modernagecoders.com/ai-and-machine-learning-classes-in-singapore
source: src/pages/ai-and-machine-learning-classes-in-singapore.html
provider: Modern Age Coders
areaServed: Singapore
ages: 6 to 67
---

> Modern Age Coders teaches live online AI and machine learning to learners in Singapore aged 6 to
> 67, in groups of five to eight or one to one. The work is Python, the mathematics that sits under
> a model, and the harder discipline of proving that a result is real rather than borrowed from the
> answer. Sessions run on weeknight and Saturday slots quoted in SGT alongside IST. Group fees are
> USD 40 a month, about SGD 51.60, and the first class is free.

## Direct answers

**Does this match the syllabus my child sits?**
Yes. O-Level Computing 7155 Module 5.4 already covers artificial intelligence and machine learning,
and section 5.4.4 asks a student to use the nearest neighbour method for a classification task with
two quantitative features. We teach that, then continue past it into evaluation. G3 Computing K349
is the Secondary Education Certificate successor to 7155, first examined in 2027.

**What tools do you use?**
Python and JupyterLab, plus a spreadsheet, which is the same environment set for the 7155 Paper 2
lab-based examination. Projects add pandas and scikit-learn.

**What time are classes in Singapore?**
7:30pm to 8:30pm SGT on Tuesday and Thursday, 8:45pm to 9:45pm SGT on Monday and Wednesday, and
Saturday 10:00am to 11:30am SGT. Singapore is SGT at UTC+8 and India is IST at UTC+5:30, so
Singapore is 2 hours 30 minutes ahead and neither country observes daylight saving, which means the
gap never changes across the year.

**What does it cost?**
Group batch of five to eight students: USD 40 a month, about SGD 51.60. One to one: USD 100 a
month, about SGD 129.00. Converted at 1 USD to 1.29 SGD, mid-market, 25 July 2026. First class
free, no card.

**What is different about it?**
Most AI classes teach prompting. This teaches model building: assembling data, choosing a model,
splitting it honestly, measuring the error in dollars, and naming what the model cannot see.

**What ages?**
6 to 67, taught as three separate curricula rather than one course run at three speeds.

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

## The first project: what really sets the price of a Singapore COE

The Land Transport Authority runs two open bidding exercises a month and publishes quota,
successful bids, bids received and the quota premium for Categories A through E. That gives 38
exercises between January 2025 and July 2026. The target is the Category B quota premium for the
next exercise.

| Exercise | Cat B quota | Bids received | Bids per quota | Cat B premium | Cat E premium |
|---|---|---|---|---|---|
| Jan 2026 | 824 | 1,128 | 1.37 | $119,100 | $122,000 |
| Feb 2026 | 813 | 966 | 1.19 | $110,890 | $116,000 |
| Mar 2026 | 815 | 1,261 | 1.55 | $114,002 | $114,890 |
| Apr 2026 | 811 | 1,406 | 1.73 | $121,000 | $121,001 |
| May 2026 | 883 | 1,332 | 1.51 | $126,236 | $127,700 |
| Jun 2026 | 889 | 1,300 | 1.46 | $126,989 | $129,000 |
| Jul 2026 | 867 | 1,500 | 1.73 | $130,889 | $129,801 |

Bids received is published only after the exercise closes, at the same instant the premium is set.
It appears here to explain the mechanism and is never used as a feature for the current exercise.
The previous exercise's bid count is legitimate; this one is not.

The trap the project is built around: Category E is the Open Category, usable for anything except a
motorcycle, so bidders arbitrage it against the dearest car category and it tracks Category B
almost exactly. Across the 38 exercises, corr(Cat B, Cat E) = 0.946, an R-squared of 0.895 from a
single column. The median gap is $1,088 and the mean gap is 1.61 per cent of the Cat B premium, but
it ranges from minus $4,889 to plus $7,889. In the first April 2026 exercise the two were $121,000
and $121,001. Category E is sealed and revealed in the same exercise as Category B, so it is not a
predictor at all.

Two honest baselines on the same 38 exercises:

- Bids to quota ratio alone: corr 0.247, R-squared 0.061
- Previous exercise's premium alone: corr 0.683, R-squared 0.466

Any model worth reporting has to beat 0.466, not zero.

Steps the student works through:

1. Type the LTA table into a CSV: 38 rows with date, bidding round, category, quota, successful
   bids, bids received and premium. Typing it is the point, because that is when the student
   notices successful bids is almost always identical to quota, a column carrying no information
2. Plot Cat B premium against exercise number, and mark September to October 2025 where it ran
   $127,501, $136,890, $141,000, then fell to $115,001 by November. Ask what a model could
   possibly have known in advance
3. Fit the everything model using all five category premiums. The R-squared looks excellent. Do not
   celebrate
4. Print the correlation matrix, find corr(B, E) = 0.946, and use the LTA definition of the Open
   Category to explain why that number is structural rather than predictive
5. Rebuild on ex-ante features only: announced quota, which LTA publishes a full quarter ahead so
   the May to July 2026 quota was released in April 2026; the previous premium; the change across
   the two exercises before that; the previous bids received and bids to quota ratio; the previous
   Cat A premium; and month of year. Split by time, first 30 exercises to train and last 8 to test.
   Never shuffle a time series
6. Beat the baselines honestly and report mean absolute error in Singapore dollars, not only an
   R-squared, because the parent reading the write-up thinks in dollars
7. Write the limitations section. Quota is set by policy, not by the market, and COE prices react
   to announcements, category rule changes, electric vehicle power thresholds and quota adjustments
   that appear in no column of the table

Tools: pandas, scikit-learn, matplotlib, JupyterLab.

## Why this matters in Singapore now

Singapore published its first National AI Strategy in 2019. NAIS 2.0 was launched on 4 December
2023 by then Deputy Prime Minister Lawrence Wong at the opening of the inaugural Singapore
Conference on AI, structured as three systems, ten enablers and fifteen actions over three to five
years, under the vision of AI for the Public Good, for Singapore and the World, with twin goals of
Excellence and Empowerment.

The National AI Council was established in February 2026, chaired by Prime Minister Lawrence Wong.
On 20 May 2026 at ATxSummit 2026, Minister for Digital Development and Information Josephine Teo
announced an Update to the National AI Strategy setting out ten refreshed priorities, describing it
as a double-click rather than a system reboot. Priority four commits the country to nurturing AI
bilingual talent while attracting top-tier talent and AI practitioners.

Funding: S$1 billion is committed to public AI research and talent development from 2025 to 2030
through the National Research Foundation, announced January 2026. The Enterprise Compute Initiative
separately allocates S$150 million for compute, cloud services, training and AI engineering support.

Named programmes include national AI Missions in Advanced Manufacturing, Financial Services,
Connectivity and Healthcare, the National AI Impact Programme with a 10,000-SME target, and the
Champions of AI programme. Infrastructure named in the update includes the ASPIRE 2B supercomputer
at NSCC Singapore and the Lorong AI and Kampong AI hubs at one-north. Responsible bodies are MDDI
on policy, Smart Nation Group and IMDA on delivery, the National Research Foundation on funding,
EDB on industry, the AI Verify Foundation on governance and GovTech in the public sector.

## School and university fit

Secondary examinations are set and awarded jointly by SEAB, MOE Singapore and Cambridge
International Education. From 2027 the GCE N(T)-, N(A)- and O-Level examinations are combined into
the Singapore-Cambridge Secondary Education Certificate, with subjects sat at G1 (graded A to E),
G2 (graded 1 to 6) and G3 (graded A1 to E8, 9) under Full Subject-Based Banding. The current
Secondary 1 cohort is the first to sit it.

O-Level Computing 7155 is the current qualification. Paper 1 is written, 2 hours, 80 marks, 60 per
cent of the total. Paper 2 is lab-based, 2 hours 30 minutes, 70 marks, 40 per cent, taken at a
computer with a spreadsheet, Python and JupyterLab available and a Quick Reference Guide for Python
provided. The five modules are Computing Fundamentals, Algorithms and Programming, Spreadsheets,
Networking, and Impact of Computing. Module 5.4 covers AI and machine learning, including the
nearest neighbour classification task at 5.4.4 and the ethics requirement at 5.4.5. Module 4.3.6
covers the Personal Data Protection Act. The successor from 2027 is G3 Computing, syllabus K349.

At A-Level, H2 Computing is syllabus 9569: Paper 1 written, 3 hours, 60 per cent; Paper 2
lab-based, 3 hours, testing problem solving through writing algorithms using HTML, CSS and the
Python programming language. The 2027 syllabus lists artificial intelligence among its core areas.

Earlier in the system, IMDA and MOE run Code for Fun, a 10-hour computational thinking enrichment
curriculum standardised for all upper primary students using visual programming with robotic kits
and microcontrollers, which MDDI states reaches more than 50,000 students a year. From 2025, AI for
Fun elective modules of 5 to 10 hours were made available to all primary and secondary schools.

Indicative Grade Profiles, worth reading years in advance:

| University and programme | A-Level, 10th to 90th percentile | Poly GPA | Places |
|---|---|---|---|
| NUS Common Computer Science Programmes | AAA/A to AAA/A | 3.81 to 3.98 | not published |
| NUS Business Analytics | AAA/A to AAA/A | 3.75 to 3.98 | not published |
| NUS Business Artificial Intelligence Systems | AAA/B to AAA/A | 3.71 to 3.90 | not published |
| NTU Data Science and Artificial Intelligence | AAB/B to AAA/A | 3.89 to 4.00 | 202 |
| NTU Computer Science | AAB/C to AAA/A | 3.78 to 3.98 | 487 |
| NTU Computer Engineering | AAC/C to AAA/A | 3.66 to 3.95 | 253 |

NUS figures are the AY2025/2026 Indicative Grade Profile; NTU figures are AY2025-26. The subject
prerequisite for the NUS Bachelor of Computing in Computer Science is an H2 pass in Computing,
Mathematics, Further Mathematics or Physics, or a good pass in H1 Mathematics. SMU, SUTD, SIT and
SUSS are also in the market.

## What it is worth afterwards

MOE Graduate Employment Survey 2025, a census with the Class of 2025 surveyed in November 2025 and
an NTU overall response rate of 75.1 per cent. Gross monthly salaries for fresh graduates in
full-time permanent employment, NTU College of Computing and Data Science:

| Programme | In full-time permanent employment | Gross mean | Gross median |
|---|---|---|---|
| Computer Science | 79.7% | $5,852 | $5,500 |
| Data Science and Artificial Intelligence | 75.9% | $5,408 | $5,250 |
| Computer Engineering | 75.4% | $5,348 | $5,150 |
| Double Degree, Business and Computer Engineering or Computing | 83.3% | $6,993 | $6,950 |

The NTU-wide Class of 2025 gross mean was $4,812 and the median $4,550, so computing carries a
clear premium.

AI Singapore, the national AI programme funded by the National Research Foundation and hosted by
NUS, runs the 100E industry project scheme and the AI Apprenticeship Programme: 6 or 9 months, a
monthly stipend of SGD 4,000, open to Singapore Citizens holding a NITEC, diploma or degree, driven
by MDDI, IMDA and the National Research Foundation, hosted by NUS and NTU. Entry expects
foundational Python, machine learning fundamentals and software engineering practice. Graduates
move into AI Engineer, MLOps Engineer, DataOps Engineer and Data Scientist roles. That entry bar is
a checkable target a secondary or junior college student can be built toward.

Micron Technology broke ground on 8 January 2025 on Singapore's first High Bandwidth Memory
advanced packaging facility, an investment of about US$7 billion (S$9.5 billion) through the end of
the decade, creating around 1,400 jobs initially and an estimated 3,000 with site expansion, with
operations beginning 2026. EDB's January to March 2026 round-up counts more than 60 AI Centres of
Excellence in Singapore, with MediaTek and SUTD opening a S$34 million joint 6G research laboratory,
Johnson Controls expanding its Innovation Centre by S$60 million over five years, GE Aerospace
committing S$385.7 million and establishing an AI Centre of Excellence, Rolls-Royce establishing an
AI Centre of Excellence, Thales making Singapore its global research centre for FlytEDGE, Oracle
with Digital Industry Singapore targeting 10,000 skill-trained professionals by 2027, and Revolut
planning to triple its Singapore workforce over three years. DBS Bank, Sea and Sea AI Lab, Grab,
GovTech and A*STAR are the standing local AI employers.

## Class times and the MOE year

| Slot, Singapore time (SGT, UTC+8) | India time (IST) | Typical group |
|---|---|---|
| 7:30 to 8:30pm, Tuesday and Thursday | 5:00 to 6:00pm | Primary and lower secondary |
| 8:45 to 9:45pm, Monday and Wednesday | 6:15 to 7:15pm | Junior college, after CCAs |
| Saturday 10:00 to 11:30am | 7:30 to 9:00am | Longer weekend build session |

Weeknight sessions run sixty minutes and the Saturday session runs ninety, because a build needs
the extra half hour.

MOE 2026 school year: Friday 2 January to Friday 20 November. Term 1 to 13 March, Term 2 from 23
March to 29 May, Term 3 from 29 June to 4 September, Term 4 from 14 September to 20 November. The
mid-year holiday runs 30 May to 28 June and the year-end holiday runs 21 November to 31 December.

Examinations: PSLE written papers 24 to 30 September 2026, results tentatively 24 to 25 November.
Registration for the N-, O- and A-Levels ran 7 to 20 April 2026. Schools used as GCE O-Level
written examination venues end Term 4 early on 23 October 2026. Results are tentatively 17 to 21
December 2026 for the N-Levels, 13 to 15 January 2027 for the O-Levels and 19 to 23 February 2027
for the A-Levels.

The natural intake points are the long mid-year break, the year-end break, and mid-January when
O-Level results land. We do not push families to start during the PSLE week or the October and
November examination run, and an enrolled student can pause across either and keep their seat.
Admission is rolling.

## Provider facts

- Modern Age Coders, teaching since 2020
- More than 10,000 students across 25+ countries
- Rated 4.9 across 547 Google reviews
- Ages 6 to 67, coding, AI and mathematics
- Live video only, never pre-recorded
- Contact: [/contact](/contact)
