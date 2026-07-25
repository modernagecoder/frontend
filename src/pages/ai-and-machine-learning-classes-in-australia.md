---
title: "AI and Machine Learning Classes in Australia | Build AI"
description: "Live online AI and machine learning classes for students in Australia, ages 6 to 67. Train real models in Python, not just prompts. About AUD 57 a month."
canonical: https://learn.modernagecoders.com/ai-and-machine-learning-classes-in-australia
source: src/pages/ai-and-machine-learning-classes-in-australia.html
provider: Modern Age Coders
areaServed: Australia
ages: 6 to 67
---

> Live online, from Cairns to Hobart to Perth, ages 6 to 67, in groups of five to eight or one to
> one. The subject is model building rather than tool use: Python first, then the statistics and
> linear algebra that sit under a trained model, then fitting and scoring models on published
> Australian data such as the Clean Energy Regulator rooftop solar and battery register. Teaching
> is in English, on your own time zone. A group place is USD 40 a month, roughly AUD 57, and the
> first class costs nothing.

## Direct answers

**Which Australian time zones do you actually teach into?**
All three. Perth is on AWST, UTC plus 8, which is India plus 2 hours 30 minutes. Darwin and
Adelaide are on ACST, UTC plus 9 hours 30 minutes, India plus 4 hours. Sydney, Melbourne,
Brisbane, Hobart and Canberra are on AEST, UTC plus 10, India plus 4 hours 30 minutes. Live slots
are 16:30 to 18:00 AEST, 19:00 to 20:30 AEST, and 17:00 to 18:30 AWST for Western Australia.

**Does daylight saving move my class?**
It moves the India side of it, not the local side. New South Wales, Victoria, Tasmania and the ACT
switch on the first Sunday in October and back on the first Sunday in April, and South Australia
does the same on its own half hour offset. Queensland, Western Australia and the Northern
Territory never change their clocks, so Brisbane, Perth and Darwin bookings are fixed all year.

**What makes this different from other AI courses sold in Australia?**
Most of them teach prompting. This teaches model building: assembling data, choosing a target,
choosing a model, training it, measuring the error in units somebody else can check, then
improving it. Prompting follows whichever product is current. Model building does not expire when
a subscription does.

**What does it cost?**
Group batch of five to eight students: USD 40 a month, about AUD 57. One to one: USD 100 a month,
about AUD 143. Converted at one US dollar to 1.431 Australian dollars, the European Central Bank
reference rate for 24 July 2026, and the currency floats. First class free, no card.

**What ages?**
6 to 67, taught as three separate programmes rather than one course run at three speeds.

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

## The first project: predicting home battery attach rate by postcode

The Clean Energy Regulator publishes the small-scale renewables register by postcode, free and
with no login. As at 30 June 2026 it holds 4,469,120 rooftop solar systems totalling 29,996,898
kW, an average of 6.71 kW per system, plus 1,974,444 solar water heaters and heat pumps, 424 wind
units and 22 hydro units, for 6,882,329 small-scale systems in all. Home batteries are the new
column: 438,319 of them, recorded only from 1 July 2025 onward.

| State | Solar PV systems | Batteries | Attach rate | PV per 1,000 people |
|---|---|---|---|---|
| NSW | 1,175,509 | 152,655 | 12.99% | 136.0 |
| ACT | 67,692 | 8,017 | 11.84% | 138.9 |
| SA | 460,779 | 49,259 | 10.69% | 241.2 |
| VIC | 892,216 | 86,412 | 9.69% | 125.3 |
| WA | 577,052 | 47,755 | 8.28% | 187.6 |
| QLD | 1,203,203 | 88,514 | 7.36% | 210.6 |
| TAS | 66,909 | 4,573 | 6.83% | 115.5 |
| NT | 25,760 | 1,134 | 4.40% | 96.3 |
| National | 4,469,120 | 438,319 | 9.81% | 160.8 |

The two count columns are as published by the Clean Energy Regulator, and both add up exactly to
the national totals in the last row, which is the first thing a student should verify after
loading the file. Attach rate and systems per thousand people are computed, the second using
Australian Bureau of Statistics population estimates at 31 December 2025.

Steps the student works through:

1. Download the installations spreadsheet and the battery CSV, then prove the load is correct by
   summing to 4,469,120 solar systems and 438,319 batteries. If either total is out, stop and look
   for a header or footer row read as data
2. Reshape to one row per postcode carrying solar systems, solar capacity, batteries, solar water
   heaters and state, aggregating the year columns rather than reading the totals column, because
   the yearly detail is what makes a fleet age feature possible
3. Make the target a rate, batteries divided by existing solar systems, and confirm the
   population-weighted national rate reproduces 9.81 per cent
4. Build features from the same files only: mean system size against the 6.71 kW national
   benchmark, the pre-2013 share of the local fleet, the solar water heater count, and state as a
   categorical. Plot attach rate against solar count before fitting anything, so the weak
   relationship is seen rather than described
5. Hold out whole postcodes, stratified by state, then fit a linear regression baseline and a
   gradient boosted regressor
6. Score with mean absolute error on the attach rate and compare against predicting each state
   mean. A model that cannot beat eight hard-coded numbers has learned geography and nothing else
7. Rank the predictions and check the Queensland reversal reproduces. If it disappears, the target
   has leaked into the features

The trap this project exists to teach: set the target to battery count, feed in solar count, and
r-squared comes back near 0.9. It is worthless. Batteries in Australia are almost always
retrofitted onto panels already on the roof, so the feature is close to definitional, and the two
columns cover different eras, one twelve months deep and the other twenty five years deep. Rank by
raw count and Queensland is second in the country. Rank by attach rate and it falls to sixth, on
7.36 per cent against 12.99 per cent in New South Wales, despite holding the largest solar fleet in
the country. Same file, opposite conclusion.

Tools: pandas, scikit-learn, matplotlib, gradient boosting.

## Why this matters in Australia now

Atlassian was founded in Sydney in 2002 by Mike Cannon-Brookes and Scott Farquhar, classmates at
the University of New South Wales, on ten thousand dollars of credit card debt. It is globally
headquartered in Sydney with United States headquarters in San Francisco and redomiciled to the US
in 2022. It listed on NASDAQ as TEAM on 10 December 2015 at an initial market capitalisation of
4.37 billion dollars, reported revenue of USD 5.22 billion in 2025, employed 13,813 people in 2025
and serves more than 300,000 customers.

Canva is headquartered in Sydney and was founded on 1 January 2013 by Melanie Perkins, Cliff
Obrecht and Cameron Adams. An August 2025 employee stock sale valued it at USD 42 billion, revenue
reached USD 4 billion in 2025, it counts 220 million members and employed 5,500 people in 2024.
WiseTech Global is an Australian transport-logistics software company founded in 1994 and listed
on the ASX in 2016.

CSIRO, the national science agency, describes itself as one of the largest applied AI capabilities
in the world, with more than one thousand researchers working across a range of AI and data
science projects. Named application areas include bushfire management, agricultural productivity,
cybersecurity, environmental protection including the Great Barrier Reef, computer vision for
manufacturing and factory-floor safety, and responsible AI frameworks.

On policy, a Voluntary AI Safety Standard was issued in 2024 and a proposals paper in September
2024 set out potential mandatory guardrails for high-risk AI. In October 2023 the Australian
Computer Society, the Business Council of Australia, the Australian Chamber of Commerce and
Industry, the Australian Industry Group, the Council of Small Business Organisations Australia and
the Tech Council of Australia signed a joint open letter calling for a national approach to AI
strategy and a whole-of-government AI taskforce.

## School and university fit

Australia had 27,801,023 people at 31 December 2025, per the Australian Bureau of Statistics
release of 18 June 2026. Roughly three quarters live in New South Wales, Victoria and Queensland,
which is why one eastern evening slot reaches most of the country, and why Western Australia at
more than three million people is treated as a separate scheduling market rather than a rounding
error.

There is no national exam board. Each state or territory awards its own senior certificate: the
HSC in New South Wales, the VCE in Victoria, the QCE in Queensland, SACE in South Australia, NTCET
in the Northern Territory, WACE in Western Australia, the TCE in Tasmania and the ACT Senior
Secondary Certificate. Applications route through five admissions centres: UAC for New South Wales
and the ACT, VTAC for Victoria, QTAC for Queensland, SATAC for South Australia and the Northern
Territory, and TISC for Western Australia, with the University of Tasmania self-governing. The
ATAR is a percentile rank from 0.00 to 99.95 in steps of 0.05, comparing a student against the
cohort in their own state.

NSW HSC computing courses are Enterprise Computing and Software Engineering, both Board Developed,
plus Applied Digital Technologies, Computing Applications as a Content Endorsed Course, and
Information and Digital Technology as a Board Developed VET course. NESA sets syllabuses,
assessment, teaching and school standards for all NSW schools. The Software Engineering syllabus
for Years 11 and 12, dated 2022, lists Year 11 focus areas of programming fundamentals, the
object-oriented paradigm and programming mechatronics, and Year 12 focus areas of secure software
architecture, programming for the web, software automation and a software engineering project.

The NSW senior mathematics ladder runs Mathematics Standard 1, Mathematics Standard 2, Mathematics
Advanced, Mathematics Extension 1 which requires Advanced, and Mathematics Extension 2 which
requires both and is Year 12 only.

Two degrees read in detail, not a ranked shortlist. UNSW Sydney runs a Bachelor of Science in
Computer Science, degree code 3789, UAC code 425800, CRICOS 048749C, four years full time at
Kensington and worth 192 units of credit. For 2026 entry it publishes a Lowest Selection Rank of
93.00 and a Lowest ATAR of 85.00, a pair families routinely confuse, since the selection rank
includes adjustment factors and the raw ATAR floor sits lower. Assumed knowledge is Mathematics
Extension 1, and international equivalents for 2026 are A Levels at 15.0 and an IB Diploma at 37.0.
The Australian National University runs a Bachelor of Advanced Computing with Honours, program code
AACOM, four years full time and a minimum of 192 units, with entry at ATAR 85 or IB 33 and a
prerequisite of Mathematics Advanced in New South Wales or Mathematics Methods in Victoria,
Queensland, Western Australia, South Australia and the Northern Territory. It offers Artificial
Intelligence and Machine Learning as separate 24-unit specialisations, a 48-unit Cyber Security
major in elective space, and COMP3600 Algorithms as a named course.

The pattern in both is the same. Neither degree gates on coding. The mathematics prerequisite is
the gate, which is why our teenage track carries its statistics and linear algebra inside the
machine learning.

## Class times and the Australian year

| Slot | India time | Notes |
|---|---|---|
| 16:30 to 18:00 AEST | 12:00 | Sydney, Melbourne, Brisbane after school. 11:00 India time on eastern daylight saving |
| 19:00 to 20:30 AEST | 14:30 | Eastern evening, older students and adults. 13:30 India time on daylight saving |
| 17:00 to 18:30 AWST | 14:30 | Perth after school. Western Australia never uses daylight saving, so this never moves |

The academic year runs February to December, so the exam crunch falls in Term 4 and the long
summer break runs mid December to late January. Queensland state schools published four ten-week
terms for 2026: Term 1 from Tuesday 27 January to Thursday 2 April, Term 2 from Monday 20 April to
Friday 26 June, Term 3 from Monday 13 July to Friday 18 September, and Term 4 from Tuesday 6
October to Friday 11 December. Those are Queensland dates; every state publishes its own and they
do not line up.

January is the natural start of year intake and the July opening of Term 3 the natural mid year
one. October and November are the worst months to begin anything aimed at Years 11 and 12, because
NSW HSC written examinations are typically held in October or November and the VCE sits in the
same window. Otherwise admission is rolling and a student can join in any week.

## Provider facts

- Modern Age Coders, teaching since 2020
- More than 10,000 students across 25+ countries
- Rated 4.9 across 547 Google reviews
- Ages 6 to 67, coding, AI and mathematics
- Live video only, never pre-recorded
- Contact: [/contact](/contact)
