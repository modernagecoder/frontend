---
title: "AI and Machine Learning Classes in Switzerland | Build AI"
description: "Live online AI and machine learning classes for students in Switzerland, ages 6 to 67. Train real models in Python, not just prompts. About CHF 33 a month."
canonical: https://learn.modernagecoders.com/ai-and-machine-learning-classes-in-switzerland
source: src/pages/ai-and-machine-learning-classes-in-switzerland.html
provider: Modern Age Coders
areaServed: Switzerland
ages: 6 to 67
---

> Modern Age Coders teaches live online AI and machine learning to learners in Switzerland from age
> 6 to age 67, in groups of five to eight or privately. The subject is model building: Python first,
> then the statistics and linear algebra underneath, then training, evaluating and correcting models
> on real published data. Teaching is in English and the timetable is set against the cantonal
> school calendar the family actually follows. A group place is USD 40 a month, roughly CHF 33 at
> the reference rate published on 24 July 2026, and the first class costs nothing.

## Direct answers

**What language are the classes in?**
English. That does not replace the language requirement at a Swiss federal institute: ETH Zurich
teaches its Bachelor programmes in German and requires a German C1 certificate by the application
deadline of 31 March, and EPFL teaches in French and requires level B2 with C1 highly recommended.

**When do the classes run in Swiss time?**
Tuesday and Thursday 17:00 to 18:30, Wednesday 18:30 to 20:00, and Saturday 09:30 to 11:30, all
Swiss local time. India is 3 hours 30 minutes ahead of Switzerland in summer and 4 hours 30 minutes
ahead from 25 October 2026 until 28 March 2027, so recurring bookings are re-cut at that boundary.

**What makes this different from other AI courses sold in Switzerland?**
Most teach prompting. This teaches model building: opening a real dataset, finding the columns that
leak the answer, splitting the data so the score is honest, measuring the error in real units, then
improving it. Prompting tracks a product. Modelling tracks mathematics.

**What does it cost?**
Group batch of five to eight students: USD 40 a month, about CHF 33. One to one: USD 100 a month,
about CHF 82. Converted at 1 US dollar to 0.81761 francs, the European Central Bank reference cross
published for 24 July 2026. Switzerland has no currency peg, so the franc figures move. First class
free, no card.

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

## The first project: predicting Swiss glacier annual mass balance

The dataset is Swiss Glacier Mass Balance, release 2025, from GLAMOS, Glacier Monitoring
Switzerland, DOI 10.18750/massbalance.2025.r2025, licensed CC BY 4.0. The hydrological year file
holds 1,239 glacier years across 43 named glaciers, from 1885 to 2025. Bw is the winter mass
balance, Bs the summer balance and Ba the annual balance, all in millimetres of water equivalent.
ELA is the equilibrium line altitude and AAR the accumulation area ratio.

Observations for the hydrological year ending 30 September 2025:

| Glacier | Bw | Bs | Ba | ELA, m | AAR, % | Area, km2 |
|---|---|---|---|---|---|---|
| Glacier de Tsanfleuron | 1664 | -4336 | -2672 | 3084 | 0 | 2.145 |
| Glacier de la Plaine Morte | 1398 | -3967 | -2569 | 3051 | 0 | 6.529 |
| Silvrettagletscher | 711 | -2983 | -2272 | 3142 | 0 | 2.244 |
| Griesgletscher | 1462 | -3639 | -2177 | 3429 | 0 | 3.643 |
| Claridenfirn | 1170 | -2973 | -1803 | 3105 | 1 | 4.144 |
| Grosser Aletschgletscher | 1083 | -2697 | -1614 | 3175 | 48 | 75.813 |
| Rhonegletscher | 1305 | -2715 | -1410 | 3085 | 40 | 13.299 |
| Glacier de Corbassière | 1014 | -2259 | -1245 | 3415 | 23 | 14.070 |
| Allalingletscher | 996 | -1852 | -856 | 3505 | 22 | 8.674 |
| Findelgletscher | 1216 | -1988 | -772 | 3345 | 49 | 12.269 |
| Alphubelgletscher N | 843 | -1246 | -403 | 3832 | 19 | 0.068 |

Twenty seven glaciers carry a 2024/25 observation and the mean Ba across them is -1,568.

The question is the one a glaciologist actually asks: standing on the ice in April with the winter
snowpack measured, how bad will the coming melt season be? The target is Ba. The honest features are
Bw, area, minimum and maximum elevation, the elevation range, the region letter from the glacier
identifier and the year.

Steps the student works through:

1. Download the GLAMOS archive and read massbalance_fixdate_2025_r2025.csv, skipping the nine header
   and licence lines and reading as UTF-8, then confirm 1,239 rows and 43 glaciers
2. Compute Bw plus Bs minus Ba for every row and count the non-zero cases. There are none: the
   identity holds exactly in all 1,239 rows, so a pipeline that keeps Bs reports an R squared of
   1.000 and has learned addition. ELA and AAR leak the same way, because both are diagnosed from
   the balance being predicted
3. Build the honest feature matrix and drop Bs, ELA and AAR, writing one sentence per dropped column
4. Train on hydrological years up to 2010, which gives 822 rows, and test on 2011 to 2025, which
   gives 417. The training mean of Ba is -290 and the test mean is -1,230, which is a different
   climate rather than noise. Group by glacier as well: Grosser Aletschgletscher and
   Silvrettagletscher contribute 111 rows each and Claridenfirn 109
5. Fit three models: the training mean as a floor, a linear regression on Bw, and a gradient boosted
   tree on the full honest feature set. Report test R squared and mean absolute error in millimetres
   of water equivalent for each
6. Explain the negative R squared. The linear model scores 0.135 in sample and 0.082 under a random
   80/20 split, but -1.10 under the time split, which is worse than predicting a constant
7. Retrain on 2000 to 2015, test on 2016 to 2025, and write the conclusion. The standard deviation
   of Bw is 444 against 889 for Bs and 909 for Ba, and the correlation between Bw and Ba is 0.289,
   so winter snow accounts for roughly 8 per cent of the variance. Cite GLAMOS with the DOI, as CC
   BY 4.0 requires

Tools: pandas, scikit-learn, matplotlib, gradient boosting.

## Why this matters in Switzerland now

On 2 September 2025 ETH Zurich, EPFL and the Swiss National Supercomputing Centre released Apertus,
a fully open and transparent multilingual large language model in 8 billion and 70 billion parameter
sizes, covering more than 1,000 languages, with Swisscom as strategic partner. Apertus 1.5 followed
on 24 July 2026, adding multimodal understanding of images and audio, improved reasoning, better
instruction following and stronger tool use, plus Apertus Mini, a suite of 16 compact models, under
the Apache 2.0 licence.

Behind it sits the Swiss AI Initiative, started in December 2023 under the Swiss National AI
Institute, a partnership of the ETH AI Center and the EPFL AI Center. It was seeded with a CHF 20
million grant from the ETH Domain plus more than 10 million GPU hours on Alps, the CSCS machine in
Lugano carrying over 10,000 GH200 GPUs, and involves more than 800 researchers, 70 AI professors and
more than 10 academic institutions.

Switzerland deliberately has no horizontal AI act. At its meeting of 12 February 2025 the Federal
Council decided that Switzerland will ratify the Council of Europe Framework Convention on
Artificial Intelligence and amend Swiss law accordingly, but that the legislative changes should be
as sector-specific as possible, with sector work continuing in healthcare and transport. The Federal
Department of Justice and Police, with the Federal Office of Justice drafting, must produce a bill
for public consultation by the end of 2026; DETEC must deliver an implementation plan for legally
non-binding measures on the same deadline. The Competence Network for Artificial Intelligence
transferred to the Federal Chancellery on 1 February 2026.

ICT-Berufsbildung Schweiz, in a forecast prepared by BSS Volkswirtschaftliche Beratung AG and
presented on 18 September 2025 at SwissSkills in Bern, counted 266,000 people in ICT roles in
Switzerland in 2024 and projects a shortfall of 54,400 ICT specialists by 2033, against gross
additional demand of 128,600, roughly 44,400 from the education system and 29,800 through
immigration. Two thirds of ICT professionals work outside the core ICT industry, and 81 per cent
come from vocational education.

## School and university fit

Education is run by the 26 cantons, so there is no single national curriculum, no single national
school calendar and no single national exam date. Swiss qualifications do not use per-subject
alphanumeric codes.

Qualifications actually sat: the gymnasiale Maturität, maturité gymnasiale or maturità liceale,
awarded by cantonal schools and recognised under the MAR and MAV regime; the Schweizerische
Maturitätsprüfung, organised by the State Secretariat for Education, Research and Innovation through
the Swiss Matura Commission, with two sessions a year in each of the three language regions; the
Berufsmaturität or maturité professionnelle taken with an apprenticeship; and the Fachmaturität from
the Fachmittelschulen.

The EDK adopted a framework curriculum for Informatik on 27 October 2017, the partially revised MAR
and MAV came into force on 1 August 2018, and Informatik became a compulsory subject inside the
mathematics, informatics and natural sciences area at the latest from school year 2022/23. The
Ergänzungsfach Informatik continues as the deeper option.

In the international segment the IB Diploma Programme is widely offered, including at the
International School of Lausanne, the International School of Berne, Institut Montana Zugerberg, an
IB World School since 1987, TASIS Switzerland and Zurich International School. St. George's
International School and Institut International de Lancy are named Cambridge centres, and where
Cambridge computer science is taught at IGCSE the syllabus is 0478.

ETH Zurich teaches every Bachelor programme in German and requires a German C1 certificate by the
31 March application deadline. Non-Swiss certificates fall into three categories, no examination,
the reduced examination in four subjects, or the comprehensive examination in eight subjects, and
ETH determines which only after a complete application in eApply. The entrance examination is held
in the third and fourth weeks of the year in the ETH Zurich main building, next on 18 to 28 January
2027, in German, at CHF 550.00 reduced and CHF 800.00 comprehensive, admitting to a programme
starting September 2027.

EPFL teaches its Bachelor programmes in French, requires level B2 and recommends C1. Swiss maturité
gymnasiale holders are accepted with no other condition. IB Diploma holders are admitted directly
from 38 out of 42 excluding bonus points with mathematics and physics at higher level at 6 out of 7
or better; Swiss residents need 36 out of 42 with mathematics and physics at 5 out of 7. EU, EFTA
and UK certificate holders need mathematics and physics grades at 80 per cent of maximum and a
general average of 80 per cent, reduced to 70 per cent for Swiss residents. First-year enrolment is
capped at 3,000 places from 2025. Applicants from outside the EU and EFTA, including India, either
meet the same profile or sit the entrance examination, and passing the Cours de mathématiques
spéciales is equivalent to passing it.

Postgraduate routes include the University of Zurich Master of Science in Informatik with a
specialisation in Artificial Intelligence, 120 ECTS split as a 90 ECTS major and a 30 ECTS minor,
and the two year Master in Artificial Intelligence at Università della Svizzera italiana in Lugano,
also 120 ECTS, covering robotics, computer vision, machine learning and cybersecurity.

## Class times and the Swiss year

| Slot, Swiss local time | India, summer CEST | India, winter CET | Typical group |
|---|---|---|---|
| Tue and Thu 17:00 to 18:30 | 20:30 to 22:00 | 21:30 to 23:00 | Secondary students |
| Wed 18:30 to 20:00 | 22:00 to 23:30 | 23:00 to 00:30 | Working adults |
| Sat 09:30 to 11:30 | 13:00 to 15:00 | 14:00 to 16:00 | Default Swiss cohort |

Switzerland keeps CET, UTC plus 1, in winter and CEST, UTC plus 2, in summer. India stays on UTC
plus 5 hours 30 minutes all year, so the gap changes from 3 hours 30 minutes to 4 hours 30 minutes
on 25 October 2026 and back on 28 March 2027.

Canton Zürich opens the 2026/27 school year on Monday 17 August 2026. For the Mittelschulen and
Berufsfachschulen: Herbstferien 5 to 17 October 2026, Weihnachtsferien 21 December 2026 to 2 January
2027, Sportferien within 8 to 27 February 2027, Frühlingsferien 26 April to 8 May 2027, Sommerferien
19 July to 21 August 2027. Canton Genève also opens on Monday 17 August 2026, with autumn 19 to 23
October 2026, Christmas and New Year 24 December 2026 to 8 January 2027, February 15 to 19 February
2027, Easter 26 March to 9 April 2027 and summer 5 July to 25 August 2027.

The two autumn breaks do not overlap, so a holiday intensive runs twice or targets one canton. We
avoid opening cohorts into 19 July to 25 August 2027. Maturität examinations are set per canton and
often per school rather than nationally, so we ask for the school's own timetable. Admission is not
tied to a term and a student can begin in any week of the year.

## Provider facts

- Modern Age Coders, teaching since 2020
- More than 10,000 students across 25+ countries
- Rated 4.9 across 547 Google reviews
- Ages 6 to 67, coding, AI and mathematics
- Live video only, never pre-recorded
- Contact: [/contact](/contact)
