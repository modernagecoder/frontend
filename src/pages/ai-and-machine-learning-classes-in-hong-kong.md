---
title: "AI and Machine Learning Classes in Hong Kong | Build AI"
description: "Live online classes teaching students in Hong Kong, aged 6 to 67, to train and evaluate real machine learning models in Python. From about HKD 314 a month."
canonical: https://learn.modernagecoders.com/ai-and-machine-learning-classes-in-hong-kong
source: src/pages/ai-and-machine-learning-classes-in-hong-kong.html
provider: Modern Age Coders
areaServed: Hong Kong
ages: 6 to 67
---

> Modern Age Coders teaches AI and machine learning live online to learners in Hong Kong, from age
> 6 to age 67, in groups of five to eight or privately. The subject is model construction: Python
> first, then the statistics and matrix work the algorithms depend on, then training a model on
> published data and stating in plain units how wrong it is. Teaching is in English, on Hong Kong
> weekday evenings and Saturday mornings. A group place is USD 40 a month, about HKD 314 under the
> currency peg, and the opening class costs nothing.

## Direct answers

**What times do classes run in Hong Kong?**
Three slots, all Hong Kong time: 19:30 to 20:45 on weekdays, 20:30 to 21:45 on weekdays, and
Saturday 10:00 to 11:30. Hong Kong Time is UTC plus 8 with no daylight saving and Indian Standard
Time is UTC plus 5 hours 30 minutes, so Hong Kong sits exactly 2 hours 30 minutes ahead of the
teaching team all year. Those slots read as 17:00 to 18:15, 18:00 to 19:15 and 07:30 to 09:00 in
India.

**How is this different from the AI courses usually sold here?**
Most of them teach a chatbot interface. This teaches construction: parse a real file, work out what
is in it, choose a model, train it, then say how wrong it is in units somebody else can check.
Interfaces are rewritten every year or two. Probability, matrix algebra and code are not.

**What does it cost?**
A group place of five to eight students is USD 40 a month, about HKD 314. One to one teaching is
USD 100 a month, about HKD 784. Because the Hong Kong dollar is held in a band of 7.75 to 7.85 to
the US dollar, the honest range is HKD 310 to 314 and HKD 775 to 785. The first class is free and
no card is needed.

**What ages?**
6 to 67, taught as three separate curricula rather than one syllabus delivered at three speeds.

**Does a Typhoon Signal No. 8 cancel the class?**
No. Hong Kong schools close and the HKEAA postpones public examinations at Signal No. 8 or above and
at Black rainstorm, but a video lesson taught from India is not bound by those closures. If a
student's own building loses power or broadband, the session is rescheduled at no charge.

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

## The first project: predicting Typhoon Signal No. 8 from the Observatory record

The Hong Kong Observatory publishes the full machine-readable history of every warning signal it
has hoisted, running from 1946 to the present. Pulled on 25 July 2026 the file held 2,503 records
and was current to 24 July 2026. Collapsed to one row per storm it gives 482 tropical cyclones that
required at least Signal No. 1, of which 132 reached Signal No. 8 or above, a base rate of 27.4 per
cent.

Signal seasons by year, derived from the Observatory record rather than copied from a published
Observatory table:

| Year | Cyclones needing a signal | Reached No. 8 or above | Hours under No. 8+ | Highest signal |
|---|---|---|---|---|
| 2021 | 7 | 2 | 45.3 | 8 |
| 2022 | 6 | 3 | 50.8 | 8 |
| 2023 | 5 | 3 | 76.3 | 10 |
| 2024 | 7 | 2 | 29.5 | 8 |
| 2025 | 14 | 3 | 65.2 | 10 |
| 2026, to 24 July | 2 | 0 | 0.0 | 1 |

Steps the student works through:

1. Fetch the raw signal files and parse them as tab-separated, sixteen columns, without a wrapper
   library and without a cleaned copy from anywhere else
2. Discard the 1,248 records of the 2,503 that carry class MSN, signal code 0 and no cyclone
   identifier. Those are Strong Monsoon Signal warnings and not typhoons at all
3. Group the remainder by cyclone identifier, keeping name, intensity class, month of first signal
   and highest signal reached. The count should land on 482 rows, with 132 labelled as reaching
   Signal No. 8 or above
4. Split on time, training on everything before 2011 and testing on 2011 onwards, which gives 385
   training rows and 96 test rows. A random split scatters storms from the 1950s and the 2020s
   across both sides and lets the model learn the era instead of the storm
5. Fit a decision tree of depth three on intensity class and month, then report precision and recall
   rather than accuracy alone
6. Add a count of how many records each cyclone produced, watch the same tree score 100.0 per cent
   accuracy with precision 1.00 and recall 1.00, then prove why that is the outcome written
   backwards: of the 350 cyclones that stopped at No. 1 or No. 3 only 3 ever produced four or more
   records, while 115 of the 132 that reached No. 8 or above did. Delete the feature
7. Report the honest result. On intensity class and month alone the model scores 64.6 per cent
   accuracy on the test years with precision 0.00 and recall 0.00, below the 66.7 per cent baseline
   of always predicting no. Whether the city shuts depends on where a storm passes and how close it
   comes, which is not in this file. The next step is the Observatory's annual tropical cyclone
   reports and their closest approach distances

One parsing trap worth carrying: 545 of the 2,503 records carry an S flag meaning the timestamp is
Hong Kong Summer Time, an hour ahead of the standard clock, so duration arithmetic that ignores it
is quietly wrong on older storms.

Tools: pandas, scikit-learn, matplotlib, curl.

## Why this matters in Hong Kong now

The Chief Executive's 2025 Policy Address, Deepening Reforms for Our People, Leveraging Our
Strengths for a Brighter Future, attaches money and dates to its AI chapter. HK$1 billion is
earmarked for the Hong Kong Artificial Intelligence Research and Development Institute, to be
established within 2026 under the Innovation, Technology and Industry Bureau, at paragraph 69 of
the address and item 10 of the policy annex. A separate HK$3 billion Frontier Technology Research
Support Scheme at paragraph 68 targets international researcher recruitment at the UGC-funded
universities.

Capacity already on the ground, per paragraph 67: the AIR@InnoHK research cluster has pooled over
1,000 experts and nearly 1,000 AI companies have gathered in the innovation and technology parks.
Paragraph 72 confirms Cyberport's AI Supercomputing Centre is established and the AI Subsidy Scheme
has launched, and commits about 10 hectares at Sandy Ridge in the North District to tender for a
data facility cluster.

Item 11 of the annex sets checkable targets: AI tools covering 100 public administration procedures
within 2026, rising to no fewer than 200 by the end of 2027, with AI Flagship Projects across
2026-27 and 2027-28. Paragraph 76 records that the Hong Kong Monetary Authority, with Cyberport,
has launched a second cohort of the AI Sandbox, that the HKMA is developing an approach to
evaluating AI models to test the system security of financial institutions, and that the Department
of Justice will establish an inter-departmental working group on the legislation needed for wider
AI use.

## School and university fit

The Hong Kong Diploma of Secondary Education is awarded by the HKEAA. Category A senior secondary
subjects are four core subjects, Chinese Language, English Language, Mathematics, and Citizenship
and Social Development, plus electives. Results are reported in five levels, 1 to 5, with the
strongest Level 5 candidates awarded 5** and the next group 5*, and anything below Level 1 recorded
as Unclassified. Citizenship and Social Development is reported only as Attained or Unattained.

Information and Communication Technology is on the elective list, which is the direct curricular
hook for an AI course. Mathematics is built as a Compulsory Part with an optional Extended Part,
Module 1 or Module 2, and several university programmes accept the Extended Part at Level 3 in
place of a second elective.

The 2026 results, released on 15 July 2026: 58,487 candidates registered, about 5.4 per cent more
than in 2025, of whom roughly 97 per cent sat. 46,344 were school candidates, up about 2.2 per cent,
and 12,143 were private candidates, up about 19.5 per cent in a single year. 43,534 day school
candidates from 416 day schools entered, 15,973 met the common degree entry standard of 332A plus
Level 3 in two electives, which the HKEAA puts at about 36.8 per cent of day school candidates who
took those subjects against a five year average of about 36.5 per cent, and a further 30,977 were
eligible for sub-degree programmes.

Admission to the eight UGC-funded institutions runs through JUPAS: City University of Hong Kong,
Hong Kong Baptist University, Lingnan University, The Chinese University of Hong Kong, The Education
University of Hong Kong, The Hong Kong Polytechnic University, The Hong Kong University of Science
and Technology and The University of Hong Kong. Hong Kong Metropolitan University participates on a
self-financing basis. HKU runs a Faculty of Computing and Data Science.

HKUST programme JS5282, Engineering with Extended Major in Artificial Intelligence, asks for Chinese
Language Level 3, English Language Level 3, Mathematics Compulsory Part Level 3 and Citizenship and
Social Development Attained, plus Biology or Chemistry or Physics or Information and Communication
Technology at Level 3, plus one further subject at Level 3, with Mathematics Extended Module 1 or 2
at Level 3 accepted in place of that second elective. First year tuition is HK$47,000, the
programme runs four years and first year intake is 114. In the 2025 cycle it drew 1,463
applications, 257 of them Band A, and made 51 offers, all to Band A applicants.

A JUPAS application includes an Other Experiences and Achievements in Competitions and Activities
section and a Student Learning Profile. Finished projects at a public address are the kind of
evidence those fields exist to collect.

## Class times and the Hong Kong year

| Slot, Hong Kong time (HKT, UTC+8) | India (IST) | Typical group |
|---|---|---|
| 19:30 to 20:45, weekdays | 17:00 to 18:15 | Default batch, all ages |
| 20:30 to 21:45, weekdays | 18:00 to 19:15 | Senior form students |
| Saturday 10:00 to 11:30 | 07:30 to 09:00 | Project and laboratory work |

Weekday sessions run 75 minutes and the Saturday session runs 90. Hong Kong keeps no daylight
saving and neither does India, so the 2 hours 30 minutes gap never shifts and recurring bookings
never need resetting.

The 2027 HKDSE written examinations run from Tuesday 6 April 2027 to Tuesday 4 May 2027, with no
papers on Sundays and none on Saturday 1 May 2027, Labour Day, and 4 May held as a reserve day.
Dates that matter to a technical student: Mathematics Compulsory Part Papers 1 and 2 on 12 April,
Information and Communication Technology Papers 1 and 2 on Saturday 17 April, Physics on 21 April,
and Mathematics Extended Part Modules 1 and 2 on Friday 23 April. A student sitting those papers
should switch from new material to revision by roughly late February 2027.

Weather is a real scheduling factor. Observatory records show tropical cyclone signals from May
through October, and every Signal No. 10 on record has fallen in July, August or September, which
overlaps the start of the school year. The HKEAA issued its bad weather circular for the 2026
examination period on 6 March 2026: at Signal No. 8 or above, or a Black rainstorm warning, all
public examinations are postponed, normally announced about two hours before the start; at Red
rainstorm, written papers are delayed 15 minutes, extended to 30 if the condition is forecast to
persist past 07:00; at Signal No. 3 or Amber, examinations run as scheduled.

## Provider facts

- Modern Age Coders, teaching since 2020
- More than 10,000 students across 25+ countries
- Rated 4.9 across 547 Google reviews
- Ages 6 to 67, coding, AI and mathematics
- Live video only, never pre-recorded
- Contact: [/contact](/contact)
