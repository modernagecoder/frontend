---
title: "AI & Machine Learning Classes in Kuwait City | Build AI"
description: "Live online AI and machine learning classes for students in Kuwait City, ages 6 to 67. Train real models in Python, not just prompts. Free first class."
canonical: https://learn.modernagecoders.com/ai-and-machine-learning-classes-in-kuwait-city
source: src/pages/ai-and-machine-learning-classes-in-kuwait-city.html
provider: Modern Age Coders
areaServed: Kuwait City, Kuwait
ages: 6 to 67
---

> Modern Age Coders runs live online AI and machine learning classes for students in Kuwait City,
> ages 6 to 67, in small batches of five to eight or one to one. Students learn Python and the
> mathematics under machine learning, then train and evaluate their own models rather than only
> prompting AI tools. Classes are timetabled to Kuwait's Sunday to Thursday week. Fees are
> KD 12.312 a month for a group batch, which is USD 40, and the first class is free.

## Direct answers

**Do the class times fit Kuwait's week?**
Yes. The timetable is built on a Sunday to Thursday week with Friday and Saturday as the weekend.
Weekday batches run 5:00 pm or 7:00 pm Kuwait time, after school. There is also a Friday or
Saturday 10:00 am slot, which is the strongest option and the anchor of the Kuwait timetable.

**What time is a class in Kuwait City, given the teachers are in India?**
Kuwait City is on Arabia Standard Time, UTC+3, with no daylight saving at any point in the year, so
it is a fixed 2 hours 30 minutes behind Indian Standard Time. A 6:00 pm Kuwait class is 8:30 pm IST.
A 10:00 am Kuwait class is 12:30 pm IST. The gap never shifts, so a timetable set once holds all
year.

**What does it cost in dinars?**
Group batch of five to eight students: KD 12.312 a month, twelve dinars and 312 fils, which is
USD 40. One to one: KD 30.780, thirty dinars and 780 fils, which is USD 100. Converted at the
Central Bank of Kuwait official rate of USD 1 to KD 0.3078 published on 23 July 2026. The dinar is
pegged to an undisclosed weighted basket of currencies under Decree No. 147/2007 of 20 May 2007,
not to the US dollar, so a dollar price drifts slightly against the dinar over time. The dinar
figure is confirmed at enrolment. First class free, no card.

**What makes this different from other AI courses sold in Kuwait?**
Most teach prompting. This teaches model building: preparing data, choosing a model, training it,
measuring the error in real units, and improving it. Prompting is a product skill that changes with
the product. Modelling rests on statistics, linear algebra and code, which do not expire.

**What ages?**
6 to 67. Children 6 to 12 begin with Python and the idea that a machine learns a rule from examples.
Teens 13 to 18 train their first real models. University students and working professionals cover
deep learning, generative AI and deployment.

## Courses, by age band

### Children, ages 6 to 12
- [Python and AI for Kids](/courses/python-ai-kids-masterclass): real Python from week one, turtle graphics and small games, then how a machine works out a rule from examples
- [AI Literacy for Kids](/courses/ai-literacy-for-kids-course): where an AI answer comes from, why a fluent answer can still be wrong, and how to check it
- [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev): directing an AI tool, then reading the output and repairing what is broken

### Teenagers, ages 13 to 18
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens): Python, the statistics and linear algebra the subject needs, classification, regression, neural networks, computer vision, language models
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data): awkward files, encodings, joins, plots, then a first set of predictions
- [Python for Teens](/courses/python-complete-masterclass-teens): two years from first line to advanced Python, functions to APIs and testing
- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course): shipping real projects with an AI assistant and reviewing what it wrote before it goes live

### University students and working professionals
- [AI and Machine Learning Masterclass](/courses/ai-ml-masterclass-complete-college): supervised and unsupervised learning, deep networks, evaluation, deployment
- [Generative AI: LLMs, RAG and Agents](/courses/complete-generative-ai-masterclass-college): how language models are trained, fine tuned and grounded, and how agents are constrained
- [Python and AI Automation](/courses/python-ai-automation-masterclass-college): machine learning and language processing applied to real working pipelines
- [Data Science Masterclass](/courses/data-science-complete-masterclass-college): statistics, SQL, feature engineering, modelling, communication
- [Data Structures and Algorithms](/courses/data-structures-algorithms-masterclass-college): the interview gate, taught as problem solving

Full catalogue: [/courses](/courses)

## The first project: Toz Watch, dust storm early warning for Kuwait International Airport

Kuwait sits at the head of the Gulf on the Mesopotamian dust corridor, and dust closes the airport.
On 23 May 2022 flights at Kuwait International Airport were suspended and the Interior Ministry
warned that visibility had fallen to around 100 metres. The project asks whether the last three
hours of weather can predict a dust collapse before it lands.

Training rows come from the Iowa Environmental Mesonet ASOS archive for station OKKK, which has
recorded since 1 August 1945 and is ongoing. A 2014 to 2023 pull is roughly 87,600 hourly rows, and
the label is already inside the data: the present weather column carries DS for duststorm, BLDU for
blowing dust, DU for widespread dust and HZ for haze.

Real observed rows, 23 May 2022, times in UTC:

| Time | Temp, F | Wind dir | Wind, kt | Visibility, mi | Code |
|---|---|---|---|---|---|
| 11:00 | 114.8 | 240 | 12 | 3.73 | none |
| 12:00 | 104.0 | 300 | 18 | 0.06 | DS |
| 13:00 | 100.4 | 030 | 18 | 0.16 | DS |
| 14:00 | 98.6 | 310 | 21 | 0.25 | DS |
| 15:00 | 98.6 | 310 | 22 | 0.43 | DS |
| 16:00 | 95.0 | 310 | 23 | 0.50 | DS |
| 17:00 | 93.2 | 310 | 19 | 0.68 | BLDU |
| 20:00 | 87.8 | 320 | 15 | 0.81 | DU |
| 23:00 | 84.2 | 330 | 15 | 0.93 | DU |

In one hour the temperature falls 10.8 degrees F, from 46.0 to 40.0 degrees C, the wind veers from
240 to 300 degrees and rises from 12 to 18 knots, and visibility falls from 3.73 miles to 0.06.
That 0.06 statute miles is 97 metres, which matches the Interior Ministry warning independently.
A second event on 16 May 2022 shows a different tell: at 13:00 the temperature is 111.2 degrees F
with a dewpoint of 39.2, 12 knots from 350 degrees and 4.97 miles of visibility, and at 14:00 the
temperature is 102.2, the dewpoint has jumped to 50.0, the wind is 19 knots and visibility is 0.19
miles. The dewpoint depression collapses as the outflow arrives.

The independent reality check is the Kuwait Meteorological Center count of dusty days at Kuwait
International Airport, by observer category:

| Year | Dust storm | Blowing dust | Dust haze | Haze |
|---|---|---|---|---|
| 2014 | 8 | 45 | 48 | 236 |
| 2015 | 8 | 68 | 76 | 276 |
| 2016 | 2 | 54 | 43 | 256 |
| 2017 | 2 | 62 | 47 | 292 |
| 2018 | 18 | 86 | 97 | 291 |
| 2019 | 4 | 63 | 93 | 295 |
| 2020 | 2 | 60 | 101 | 315 |
| 2021 | 7 | 66 | 72 | 306 |
| 2022 | 4 | 84 | 97 | 317 |
| 2023 | 1 | 53 | 58 | 305 |

Target variable: dust_next_3h, binary. 1 if any observation in the following three hours carries
DS, BLDU or DU and reports visibility below 1.0 statute mile, 0 otherwise. It is a rare event
problem, with four dust storm days in 2022 against 365.

Steps the student works through:

1. Pull 2014 to 2023 hourly data for OKKK with temperature, dewpoint, wind direction, wind speed, visibility and present weather, then add a Kuwait local time column at UTC+3 so the 12:00 UTC collapse reads as three in the afternoon
2. Clean the encodings first: missing arrives as M and traces as T, and the 05:00 row on 23 May 2022 reads direction 0 and speed 0 while a dust code is active, which is the calm wind convention and not a bearing of north
3. Build the label from the present weather codes, then shift it three hours forward
4. Reconcile against the Met Center table category by category, not in aggregate: 2018 should come out near 18, 86 and 97, and 2023 near 1, 53 and 58, with agreement in magnitude rather than exact matches
5. Engineer features: visibility and its 1 hour and 3 hour change, wind speed and its change, direction as sine and cosine with a shamal flag for 290 to 360 degrees, temperature and its change, dewpoint depression and its change, hour as sine and cosine, month, day of year, rolling 24 hour maximum wind
6. Split by time, never randomly: train on 2014 to 2021, validate on 2022, test on 2023, fit logistic regression then gradient boosting, and score with precision, recall and PR-AUC rather than accuracy, because always predicting no dust scores 98 per cent
7. Write the 23 May 2022 case study, state how many hours of lead time the model gives, then pick a decision threshold and defend it against the cost of a needless hold versus a go around in 100 metre visibility

Tools: pandas, scikit-learn, matplotlib.

## Why this matters in Kuwait now

The Kuwait National AI Strategy 2025 to 2028 was published as a draft in January 2025, with five
pillars: establishing Kuwait as an AI hub, AI driven sectoral transformation, AI governance with
privacy and security, empowering the workforce, and building a strong AI ecosystem. Year one sets
up an AI Centre of Excellence, targeted pilots and a KPI framework, years two and three scale the
pilots and upskill the workforce, and 2028 targets broad integration plus indigenous capability. It
is anchored to Kuwait Vision 2035, whose roadmap was revamped in August 2025 to accelerate AI. CITRA
announced on 8 February 2025 that Kuwait had adopted a practical, action oriented approach to AI
governance and digital information integrity, and its Cloud First Policy has required government
agencies to prefer cloud products since 2021, with sensitive data stored inside Kuwait.

The money is real. The Kuwait Investment Authority has allocated USD 9 billion to digital services
and AI over five years and joined the USD 30 billion AI Infrastructure Partnership led by BlackRock,
Microsoft and MGX in June 2026. Kuwait Oil Company allocated USD 800 million in 2025 for a five year
digital transformation. A government collaboration with Microsoft Azure launched in March 2026,
Google Cloud opened a Kuwait office around 2025, and Ooredoo Kuwait announced an Nvidia GPU upgrade
to its data centre in November 2025.

The constraint is physical. As of February 2026 Kuwait had 5 data centres against 57 in the UAE, 51
in Saudi Arabia, 15 in Oman, 11 in Qatar and 8 in Bahrain. There is no live hyperscale cloud region,
training datasets are limited, there is no unified AI liability law, licensing is slow, and seasonal
electricity grid instability is named explicitly as a limit on data centre development. The summer
2025 peak load was 17,610 MW, 30 MW below the 2024 record, reached despite temperatures of 51
degrees C. Earlier peaks were 16,940 MW on 2 August 2023 and 16,180 MW in 2022. Shagaya Phase 1 at
1,100 MW launched in June 2025, Phase 2 at 500 MW is approved, Phases 3 and 4 total 3,000 MW, Al
Zour North adds 2,700 MW and Nuwaiseeb targets 7,200 MW, against a ministry target of a further
14,050 MW and 228 million imperial gallons a day of fresh water by 2031.

Kuwait therefore needs load forecasting and demand side machine learning precisely because the grid
is the bottleneck on everything else. That is a building job, not a prompting job. KFAS launched
TechEdge on 19 February 2025 in strategic partnership with the National University of Singapore, NBK
and Zain, covering AI, data science, cybersecurity, financial technology, data analytics, digital
payments, digital innovation, ethics in technology, and scripting and programming, with Emad
Al-Ablani of NBK and Nawal Bourisli of Zain Kuwait named as sponsors. NBK also runs the NBK Tech
Academy. Zain partners with CODED Academy, Kuwait's home grown coding school.

## School and university fit

The Ministry of Education 2025-2026 strategic plan, presented on 11 September 2025, counts 520,271
students, 422,744 in public schools and 97,527 in private schools, across 1,141 schools, 950 public
and 191 private, with 131,969 teaching and administrative staff. Ten new schools opened, seven in Al
Mutlaa, one in Ishbiliya and two specialised, with 800 teachers and 183 administrators assigned and
687 principals and assistant principals appointed. Acting Undersecretary Eng. Mohammad Al-Khaldi and
Assistant Undersecretary for Educational Affairs Eng. Hamad Al-Hamad are named on it.

AI is already in the classroom. On 11 February 2025 the Ministry added artificial intelligence to
part two of the Grade 10 computer development textbook, announced by Mona Salem Awad, General
Technical Supervisor of Computers, and the 2025-2026 plan extended AI across the computer science
curriculum for grades 10 and 11, alongside 88 revised textbooks and the Ma'a Hamad Chat AI tool for
students, teachers and parents.

Exam boards sat in Kuwait: the Ministry of Education national certificate, Shahadat Al-Thanawiya
Al-Amma; CBSE; Cambridge and Pearson Edexcel IGCSE and A Level; the United States high school
diploma with AP; and the International Baccalaureate.

Indians are Kuwait's largest expatriate community at roughly 1.06 million people, about 20 per cent
of the population according to PACI figures for the end of June 2026, and at least 20 CBSE
affiliated schools operate in the country. The Indian Community School Kuwait, established in 1959
and now four branches, entered 535 Class XII candidates for the 2025-26 CBSE boards, reported as the
largest batch in Kuwait, of whom 99.25 per cent scored above 70 per cent and 186 above 90 per cent.
The New Indian School, Carmel School founded in 1969, United Indian School, Jabriya Indian School,
Gulf Indian School, Integrated Indian School opened in April 2004 and Bhavans Kuwait also run CBSE.
The British School of Kuwait expanded its Upper School to more than 715 pupils in 2025, alongside
Kuwait English School and Kuwait National English School. IB World Schools teaching in English
include the American International School Kuwait, authorised for the Primary Years, Middle Years and
Diploma Programmes, American Creativity Academy for the Diploma Programme, Kuwait Bilingual School
for the Primary and Middle Years Programmes, and Reborn Kids Education Academy. The American School
of Kuwait runs the United States diploma track.

Kuwait University launched its first specialised Data Science and Artificial Intelligence programme
in the College of Life Sciences from the 2025-2026 academic year, announced by Dr Nawaf Al-Hajri,
Acting Dean of the College of Life Sciences, focused on big data and AI and aligned to New Kuwait
2035. Admission is on an equivalent grade point average combining the secondary school percentage
with an academic aptitude test result, applied across most colleges, the College of Science and
College of Law excepted, where the high school GPA alone decides eligibility. The published minimum
high school GPA is 70 per cent for the Science track and 78 per cent for the Arts track, and the
College of Engineering and Petroleum requires the aptitude test. The Computer Engineering department
was established in 1985, is ABET accredited and reports 16 labs and 44 faculty. Gulf University for
Science and Technology runs Computer Science and Computer Engineering degrees covering artificial
intelligence, algorithms, data structures and database management. The American University of Kuwait
offers a Bachelor of Engineering in Computer Engineering with a dedicated artificial intelligence
track. The Australian University of Kuwait, Kuwait College of Science and Technology, Arab Open
University Kuwait, PAAET and American International University Kuwait complete the application set.

## Class times, Kuwait

| Slot, Kuwait time (AST, UTC+3) | India time (IST) | Typical group |
|---|---|---|
| Sunday to Thursday, 17:00 to 18:30 | 19:30 to 21:00 | After school, primary and lower secondary |
| Sunday to Thursday, 19:00 to 20:30 | 21:30 to 23:00 | Teenagers with tuition or sport earlier |
| Friday or Saturday, 10:00 to 11:30 | 12:30 to 14:00 | The anchor slot, all ages, survives Ramadan |

Sessions are 90 minutes, live video, five to eight students or one to one. The school week is Sunday
to Thursday and the weekend is Friday and Saturday. Private school staff hours were regulated in
November 2025 to five days a week and seven hours a day, including a 30 minute duty free lunch and
30 minutes of lesson planning, with kindergarten and special education at 5 hours a day and other
stages at 6 hours including a 45 minute grace period.

Kuwait has no unified national school calendar. For 2026-27, Kuwait English School returns on Sunday
30 August 2026, CBSE Indian schools in the second half of August 2026 with some staggering by grade,
IGCSE schools are expected in early September and American curriculum schools in the first half of
September. Exam months: CBSE February to March, Cambridge and Edexcel IGCSE and A Level May and June
with a second series in October and November, AP in May, IB Diploma in May.

Holidays we work around: Kuwait National Day on Thursday 25 February 2027, commemorating Sheikh
Abdullah Al-Salem Al-Sabah's accession in 1950, and Liberation Day on Friday 26 February 2027,
marking liberation from Iraqi occupation in 1991. Ramadan 1448 is expected to begin on Monday 8
February 2027, subject to the crescent sighting on the evening of Sunday 7 February, running to
about 8 March, with the Ministry having proposed suspending classes for the last ten days. Eid
al-Fitr is expected around Tuesday 9 March 2027 and Eid al-Adha around Sunday 16 May 2027. Islamic
dates are confirmed in Kuwait by local moon sighting and can shift by a day.

June to August is when Kuwait empties, with temperatures reaching 51 degrees C in summer 2025 and
the highest temperature ever verified in Asia recorded at Mitribah on 21 July 2016, confirmed by the
World Meteorological Organization as 53.9 degrees C plus or minus 0.1. Travelling students keep
attending from wherever they are and are moved into a batch that suits that time zone.

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
- Contact: [/contact](/contact) · Free first class: [/ai-and-machine-learning-classes-in-kuwait-city](/ai-and-machine-learning-classes-in-kuwait-city)
