---
title: "AI and Machine Learning Classes in the UK | Build AI"
description: "Live online AI and machine learning classes for students across the UK, ages 6 to 67. Train real models in Python, not just prompts. From £30 a month."
canonical: https://learn.modernagecoders.com/ai-and-machine-learning-classes-in-uk
source: src/pages/ai-and-machine-learning-classes-in-uk.html
provider: Modern Age Coders
areaServed: United Kingdom
ages: 6 to 67
---

> Modern Age Coders teaches live online AI and machine learning to learners anywhere in the United
> Kingdom, from age 6 to age 67, in groups of five to eight or one to one. The route starts at
> Python and the statistics that sit under machine learning, and finishes with a trained model
> whose error the pupil can state and defend. Group teaching is USD 40 a month, about £30, and one
> to one is USD 100 a month, about £75. The first lesson costs nothing and needs no card.

## Direct answers

**What time are the lessons in British time?**
Three live slots: Tuesday and Thursday 16:30 to 17:30, Wednesday 18:00 to 19:00, and a Saturday
workshop 09:30 to 11:00. All times are British. Britain is on British Summer Time, UTC plus one,
until 02:00 on Sunday 25 October 2026, then Greenwich Mean Time. India is 4 hours 30 minutes ahead
in summer and 5 hours 30 minutes ahead in winter, because India runs no daylight saving. Your slot
never moves in your diary.

**How is this different from the AI courses sold everywhere else?**
Most of them teach prompting. This teaches model building: sourcing the data, validating it against
the publisher's own totals, choosing an algorithm, fitting it, reporting the error in the unit the
data arrived in, then finding out whether an improvement is real. Prompting is a product skill and
products get rewritten. Model building is built on probability, matrices and Python.

**Does it duplicate GCSE or A level Computer Science?**
No. AQA 8525, OCR J277, Pearson Edexcel 1CP2 at GCSE, and AQA 7517 and OCR H446 at A level, cover
systems architecture, memory and storage, networks, network security, systems software, algorithms,
programming fundamentals and Boolean logic. None of them contains machine learning. Scotland's
Higher Computing Science, course code C816 76, does not either.

**What does it cost?**
Group batch of five to eight pupils: USD 40 a month, about £30. One to one: USD 100 a month, about
£75. Converted at a market rate of 1.3308 US dollars to the pound on 24 July 2026, mid market and
before card spread. First lesson free, no card.

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

## The first project: did the railway improve, or did it stop running the trains that would have been late?

Source: Office of Rail and Road, passenger rail performance statistics for Great Britain, four
quarterly releases covering the 2025 to 2026 financial year, compiled from Network Rail data.

| Quarter | Trains planned | Recorded station stops | Time to 3 | On Time | PPM | Full cancellations | Cancellations score | Severely disrupted days |
|---|---|---|---|---|---|---|---|---|
| Apr to Jun 2025 | 1.9m | 21.6m | 86.3% | 69.0% | 87.1% | 41,000 | 3.2% | 6 |
| Jul to Sep 2025 | 1.9m | 21.8m | 84.8% | 66.8% | 85.4% | 50,900 | 3.7% | 15 |
| Oct to Dec 2025 | 1.9m | 21.1m | 81.5% | 62.2% | 82.6% | 51,500 | 4.0% | 16 |
| Jan to Mar 2026 | 1.9m | 21.3m | 86.4% | 68.8% | 87.1% | 40,800 | 3.2% | 6 |

Validation before modelling: the four Time to 3 values average 84.75 against the published annual
84.8 per cent, the four cancellation scores average 3.525 against a published 3.5 per cent, and four
quarters of 1.9 million planned trains give the published annual 7.6 million across 24 operators.
If a pupil's typed table fails those three checks, the table is wrong.

Real severely disrupted days used in the daily table, with the regulator's own stated cause: 3 Oct
2025 at 8.4 per cent and 4 Oct 2025 at 6.8 per cent, both Storm Amy; 14 Nov 2025 at 6.6 per cent,
Storm Claudia; 29 Nov 2025 at 7.5 per cent, an overhead line trip at Alexandra Palace; 1 Dec at 5.4
per cent, 4 Dec at 5.1 per cent and 8 Dec at 6.5 per cent, all a track circuit failure at London
Blackfriars; 27 Dec 2025 at 6.9 per cent, a fatality at Balham with a points failure at Cardiff
Central. In the summer quarter a heat cluster: 1 Jul at 5.4 per cent, 12 Jul at 6.4 per cent, 13 Jul
at 5.7 per cent, 20 Jul at 5.2 per cent, 12 Aug at 6.0 per cent and 13 Aug at 6.0 per cent, all
infrastructure issues due to high temperatures; plus 4 Aug at 5.8 per cent, Storm Floris. Forty
three such days occurred across 2025 to 2026.

Steps the pupil works through:

1. Type the headline table by hand, four rows and eleven columns, then run the three validation
   checks above before touching a model
2. Build the daily table from the disruption appendix in each release: date, daily cancellations
   percentage and the regulator's written cause
3. Tag the written causes into categories. Notice that one track circuit at London Blackfriars
   produced three severe days inside eight days, and that high temperatures produced six severe days
   across July and August. A repeated single asset failure and a weather regime are separate signals
4. Fit the naive model, predicting daily cancellations from month and cause category, and record the
   R squared
5. Break it deliberately by adding Time to 3 as a feature. Accuracy jumps. Cancelled trains were
   removed from the denominator Time to 3 is computed over, so the feature is partly a function of
   the target. That is leakage rather than signal. Remove it
6. Quantify the survivorship effect. Jul to Sep 2025 and Oct to Dec 2025 both round to 1.9 million
   planned trains, but recorded station stops fall from 21.8 million to 21.1 million while
   cancellations rise from 3.7 to 4.0 per cent. Write one sentence saying where roughly 700,000
   station stops went and what that does to a punctuality percentage
7. Rebuild honestly, using only what was knowable before the timetable was finalised at 22:00 the
   previous evening: weather forecast, day of week, planned volume, scheduled engineering
   possessions. Report the regulator's adjusted cancellation measure, 3.3 per cent against an
   official 3.2 per cent for the first quarter, alongside the official one, and state that around 4
   per cent of station stops go unrecorded with no estimate made for them

Tools: pandas, scikit-learn, matplotlib.

Why this dataset rather than a tidier one: the pupil finishes able to explain, from real government
statistics, how a performance metric can improve because the service got worse.

## Why this matters in Britain now

The AI Opportunities Action Plan was published on 13 January 2025 as command paper CP1241, written
by Matt Clifford CBE and commissioned by Peter Kyle, Secretary of State for Science, Innovation and
Technology. It carries 50 numbered recommendations and government accepted all 50 the same day.
Headline commitments include expanding AI Research Resource capacity by at least twenty times by
2030 and a long term AI infrastructure plan backed by a ten year investment commitment.

Isambard-AI launched at the University of Bristol in July 2025: a 225 million pound government
investment, 5,448 NVIDIA GH200 Grace Hopper Superchips, over 200 petaflops of AI performance. In
2025 it was the most powerful university based supercomputer in the world and the eleventh fastest
globally. With Dawn at the University of Cambridge it takes UK AI Research Resource capacity to 23
AI exaFLOPs.

Five AI Growth Zones are designated as of 2026, led by the Department for Science, Innovation and
Technology: Culham in Oxfordshire, the first, a 100 megawatt data centre with longer term ambitions
to 500 megawatts; the North East Combined Authority with two sites, Cobalt Park and Blyth; North
Wales; South Wales; and North Lanarkshire, designated at the end of January 2026.

TechFirst is the education hook: a 187 million pound national AI and digital skills programme
announced by the Prime Minister at London Tech Week on 8 June 2025, delivered by DSIT and modelled
on the NCSC's CyberFirst. TechYouth is 24 million pounds supporting 1 million secondary pupils by
2028; TechGrad is 96.8 million pounds funding scholarships for 1,000 undergraduates a year;
TechExpert is 48.4 million pounds providing 10,000 pound grants to 500 PhD students; TechLocal is 18
million pounds of community seed funding with regional panels selecting local providers. Industry
partnerships with NVIDIA, Google and Microsoft target 7.5 million UK workers with AI skills by 2030.

The AI Safety Institute, established in November 2023 at the Bletchley Park summit, was renamed the
AI Security Institute on 14 February 2025, announced by Peter Kyle at the Munich Security
Conference, refocusing on malicious cyber attacks, cyber fraud and cybercrime. It keeps the AISI
acronym.

DSIT's Artificial Intelligence Sector Study 2024, published 3 September 2025 on secondary data plus
responses from 298 AI companies and 52 in depth interviews, counted more than 5,800 AI companies in
the UK, an 85 per cent rise over two years; 86,139 people in AI related employment in 2024, up 33
per cent; revenue of 23.9 billion pounds, up 68 per cent; and gross value added of 11.8 billion
pounds, up 103 per cent. The Knowledge Quarter around King's Cross holds Google DeepMind, Isomorphic
Labs, Meta, Wayve and Synthesia. CNBC reported on 16 April 2026 that OpenAI announced its first
permanent London office and Anthropic announced a major UK expansion, quadrupling its London
footprint from roughly 200 staff towards around 800.

## The tutoring market this sits in

The Sutton Trust published its Private Tutoring report in February 2026, based on an Ipsos Young
People Omnibus of 3,214 interviews with pupils aged 11 to 17 in state secondaries in England and
Wales.

- 29 per cent of secondary pupils have ever had private tutoring, up from 18 per cent twenty years
  ago and 27 per cent in 2019
- 11 per cent received private tutoring in the survey year. The 29 and the 11 are different measures
  and are routinely conflated
- London 45 per cent, rest of England 27 per cent, Wales 24 per cent
- Urban 33 per cent, rural 19 per cent, a 14 point gap that online delivery addresses directly
- Year 11 is the peak year at 25 per cent, Year 10 at 10 per cent
- By ethnicity: Black pupils 64 per cent, Asian 50 per cent, White 20 per cent. In deprived areas:
  Black 65 per cent, Asian 43 per cent, White 10 per cent
- By household income: 23 per cent among the worst off, 30 per cent among the best off
- School based one to one and small group tutoring reached 20 per cent of pupils, down from 22 per
  cent in 2023, and 2025 teacher polling found 58 per cent of schools had reduced their offer.
  School tutoring is not London heavy: London sits at 17 per cent, below the national average

## School and university fit

The United Kingdom is four education systems, not one.

**England, Wales and Northern Ireland.** JCQ boards are AQA, Pearson Edexcel, OCR, WJEC and Eduqas,
and CCEA. GCSE Computer Science: AQA 8525, OCR J277, Pearson Edexcel 1CP2, first taught 2020 and
first examined 2022, still the live specification for 2026 entry. A level: AQA 7517, AS 7516, and
OCR H446, with the AQA A level carrying a Non-Exam Assessment called the Computing Practical
Project. Results days set by JCQ: A level, AS and T Level on Thursday 13 August 2026; GCSE on
Thursday 20 August 2026, with centres receiving results under restricted release the day before.
GCSE Computer Science entries fell 4.4 per cent in summer 2025, boys down 5.2 per cent and girls
down 1.5 per cent, and the female share of entries rose to 22.6 per cent from 21.9 per cent in 2024.

**Scotland.** Qualifications Scotland replaced the Scottish Qualifications Authority as the national
awarding body on 1 December 2025, becoming a legal entity under the Education (Scotland) Act 2025,
with no immediate change to exams for the current year. National 5, Higher and Advanced Higher
Computing Science. Higher course code C816 76, course assessment code X816 76; Advanced Higher
course code C816 77. The 2026 diet ran 22 April to 2 June 2026 and results were issued on Tuesday 4
August 2026, nine days before A level results in England.

**Independent and international schools** additionally sit Cambridge International AS and A Level
Computer Science 9618.

None of those specifications teaches machine learning. A school teaching AI and ML is adding to the
curriculum rather than duplicating it, and naming the codes is how a parent can check that claim.

**Imperial College London, MEng Computing in Artificial Intelligence and Machine Learning.** UCAS
code G700, four years. Minimum entry standard A\*A\*A to A\*AAA including A\* in Mathematics, plus
either A\*A in two further subjects or AAA in three, with Further Mathematics preferred. Typical
offer A\*A\*A\* on three A levels, A\*A\*AA on four. The Test for Mathematics for University
Admission is required. Not accepted: ICT, Business Studies, General Studies, Critical Thinking.
Recommended: Computer Science, Further Mathematics, Physics. Imperial also runs an MEng in
Mathematics and Computer Science for Artificial Intelligence.

**University of Edinburgh, BSc Honours Artificial Intelligence,** four years, alongside a combined
BSc in Artificial Intelligence and Computer Science. A levels A\*A\*A\* to AAB in one set of exams
with Mathematics at A, plus English at GCSE grade C or 4. SQA Highers AAAAA, achievement by the end
of S5 preferred, with BBB achieved in one year across S4 to S6 and Mathematics at A. Higher
Applications of Mathematics is not accepted in place of Higher Mathematics, and Advanced Higher
Mathematics is recommended. National 5 English at grade C is also required. IB 43 points with 777 at
Higher Level down to 34 points with 665 at Higher Level, with Mathematics Analysis and Approaches
only at Higher Level 6, plus English at Standard Level 5. Widening access route: A levels ABB, SQA
AABB by the end of S6, IB 32 points with 655 at Higher Level. Mathematics qualifications must have
been achieved no more than two academic years before entry.

The gate at both universities is mathematics rather than coding, which is why our teens route
teaches the statistics and linear algebra inside the machine learning.

## Class times and the British year

| Slot | UK now, BST | India now, IST | UK from 25 Oct 2026, GMT | India from 25 Oct, IST |
|---|---|---|---|---|
| Tuesday and Thursday | 16:30 to 17:30 | 21:00 to 22:00 | 16:30 to 17:30 | 22:00 to 23:00 |
| Wednesday evening | 18:00 to 19:00 | 22:30 to 23:30 | 18:00 to 19:00 | 23:30 to 00:30 |
| Saturday workshop | 09:30 to 11:00 | 14:00 to 15:30 | 09:30 to 11:00 | 15:00 to 16:30 |

England has no national term dates. The Department for Education sets a minimum of 190 teaching days
and local authorities, academy trusts, free schools and independent schools each set their own
calendar, so half term can differ by a week between neighbouring boroughs. One published 2026 to
2027 example, the Royal Borough of Greenwich: autumn term 4 September to 18 December 2026, October
half term in the week of 26 to 30 October 2026, Christmas holiday Monday 21 December 2026 to Friday
1 January 2027. Scotland runs a different year, back in mid August and finished in late June.

Fixed national dates: A level, AS and T Level results Thursday 13 August 2026; GCSE results Thursday
20 August 2026; Scotland's exam diet 22 April to 2 June 2026 with results Tuesday 4 August 2026.

Demand rhythm: September enrolment spike after the August results days; October half term and Easter
as intensive windows; January to May as peak revision, with Scottish demand arriving earlier because
the diet opens on 22 April. Enrolment is continuous and a pupil can start in any week.

## Provider facts

- Modern Age Coders, teaching since 2020
- More than 10,000 students across 25+ countries
- Rated 4.9 across 547 Google reviews
- Ages 6 to 67, coding, AI and mathematics
- Live video only, never pre-recorded
- Group batch USD 40 a month, about £30; one to one USD 100 a month, about £75; first lesson free
- Contact: [/contact](/contact)
