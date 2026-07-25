---
title: "AI and Machine Learning Classes in Bahrain | Build AI"
description: "Live online AI and machine learning classes for students in Bahrain, ages 6 to 67. Train real models in Python, not just prompts. From BD 15.040 a month."
canonical: https://learn.modernagecoders.com/ai-and-machine-learning-classes-in-bahrain
source: src/pages/ai-and-machine-learning-classes-in-bahrain.html
provider: Modern Age Coders
areaServed: Bahrain
ages: 6 to 67
---

> Modern Age Coders runs live online AI and machine learning classes for students in Bahrain, ages
> 6 to 67, in batches of five to eight or one to one. Students learn Python and the mathematics
> underneath machine learning, then train and evaluate their own models rather than only prompting
> AI tools. Classes run Sunday to Thursday on Bahrain time. Fees start at BD 15.040 a month, about
> USD 40, and the first class is free.

## Direct answers

**Do you schedule around the Bahraini week?**
Yes. The working week here is Sunday to Thursday and the weekend is Friday and Saturday, so
weekday batches run Sunday to Thursday and the weekend batch sits on Saturday morning. Live slots
are 17:00 to 18:30, 19:00 to 20:30, and Saturday 10:00 to 11:30, all Bahrain time.

**What makes this different from other AI courses sold in Bahrain?**
Most teach prompting. This teaches model building: assembling data, choosing a model, training it,
measuring the error in real units, then improving it. Prompting is a product skill that changes
with the product. Model building rests on statistics, linear algebra and code.

**What does it cost?**
Group batch of five to eight students: BD 15.040 a month, about USD 40. One to one: about USD 100
a month. First class free, no card.

**What ages?**
6 to 67, in three separate curricula rather than one course at three speeds.

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

## The first project: forecasting traffic at Bahrain International Airport

Monthly passenger and aircraft movement figures for Bahrain International Airport, with the
target normalised to passengers per movement.

| Month | Passengers | Aircraft movements | Pax per movement | Ramadan days |
|---|---|---|---|---|
| 2023-01 | 736,545 | 7,640 | 96.4 | 0 |
| 2023-04 | 609,287 | 6,858 | 88.8 | 20 |
| 2023-07 | 832,727 | 8,239 | 101.1 | 0 |
| 2023-12 | 822,786 | 8,769 | 93.8 | 0 |

Passengers and aircraft movements are published. Passengers per movement is the only computed
column, and any cell the student has not checked is left blank, because an unverified number is a
guess rather than a feature.

Steps the student works through:

1. Build the monthly table and compute the target, passengers per movement
2. Use a Hijri calendar library to count how many days of each Gregorian month fall inside
   Ramadan. Ramadan began on 23 March 2023, 11 March 2024 and 1 March 2025, and its start is set
   by moon sighting, so dates are looked up rather than hard-coded
3. Fit linear regression and ridge under leave one out cross validation. Features: aircraft
   movements, Ramadan days in the month, the sine and cosine of month of year, and months since
   January 2023. Thirty six rows are far too few for a train and test split, and saying so is part
   of the lesson
4. Hold out one Ramadan month. Train model A on month-number dummies and model B on the Ramadan
   days feature, then predict with each. A misses badly and B does not, because the weakest month
   of each year moves with Ramadan: April 2023 at 609,287, March 2024 at 695,140, March 2025 at
   594,824
5. Report the error in passengers, not in an abstract score
6. Ask which months the model still misses and why. The Formula 1 Bahrain Grand Prix on 2 March
   2024 and 13 April 2025, the travel surge straight after Ramadan, and the December peak are the
   candidates
7. Write it up with the caveat that belongs in it: passengers per movement conflates how full an
   aircraft is with how large it is

Tools: pandas, scikit-learn, matplotlib, a Hijri calendar library.

## Why this matters in Bahrain now

Bahrain's AI framework sits under Economic Vision 2030 and is driven by the Information and
eGovernment Authority. In 2025 the authority issued the General Policy for the Use of Artificial
Intelligence, Version 1.0, which applies to all government entities.

The programme that matters most to a family is Tamkeen's. In April 2025 Bahrain's Labour Fund
launched a bundle to train 50,000 Bahrainis in AI by 2030 across three tracks: Executive
Leadership in AI, General AI Skills, and AI Specialist Training for people who build AI tools.

The infrastructure is real. The AWS Middle East (Bahrain) Region went live on 29 July 2019 with
three Availability Zones, the first AWS Region in the Middle East, ahead of its larger neighbours.
Citi opened a Global Technology Hub in Seef with Tamkeen and the Bahrain Economic Development
Board, carrying a ten year target of 1,000 Bahraini coding jobs; as of January 2023 it had 110
Bahraini employees, 91 of them at the Seef premises.

## School and university fit

Bahrain's population was 1,588,670 in 2024: 739,736 Bahrainis and 848,934 non-Bahrainis, so
non-nationals are the majority at 53.4 per cent. The Indian community is roughly 350,000, the
largest expatriate group and about 30 per cent of the country, which makes the Indian curriculum
school system unusually significant here.

Boards genuinely sat in Bahrain: CBSE, including the AISSE and AISSCE board exams, Cambridge and
Pearson Edexcel IGCSE and A Level, the IB Diploma, Bahrain Ministry of Education certificates
including the General Intermediate and Religious Intermediate, and the American high school
diploma. St Christopher's School, established 1961, is among the long-standing British curriculum
schools.

Bahrain Polytechnic runs an MSc in Artificial Intelligence at National Qualifications Framework
Level 9, worth 180 NQF credits, with a first intake in October 2024, positioned for computer
science and ICT graduates, engineering and applied science graduates, and technically literate
graduates from other domains. The University of Bahrain's College of Information Technology is the
national university's computing school and the default for state school and CBSE students who
stay, with postgraduate provision including an MSc in Machine Learning and Computational
Intelligence.

Entry rests on a grade average, and a grade average is built in Class 9 and 10 rather than in the
term before an application. That is why our teens track puts the mathematics inside the machine
learning.

## Class times and the Bahraini year

| Slot, Bahrain time (AST, UTC+3) | Typical group |
|---|---|
| 17:00 to 18:30 | Primary age children |
| 19:00 to 20:30 | Teenagers |
| Saturday 10:00 to 11:30 | Weekend batch |

Weekday batches run Sunday to Thursday. Two exam seasons dominate the year: the Ministry of
Education calendar puts first term finals from late December into mid January, the mid year break
across the second half of January, and the second term opening in early February. The Indian
curriculum segment has a different dead zone, with CBSE board exams in February and March.

## Provider facts

- Modern Age Coders, teaching since 2020
- More than 10,000 students across 25+ countries
- Rated 4.9 across 547 Google reviews
- Ages 6 to 67, coding, AI and mathematics
- Live video only, never pre-recorded
- Contact: [/contact](/contact)
