---
title: "AI and Machine Learning Classes in the Netherlands | Build AI"
description: "Live online AI and machine learning classes for students in the Netherlands, ages 6 to 67. Train real models on Dutch open data, not prompts. From EUR 35 a month."
canonical: https://learn.modernagecoders.com/ai-and-machine-learning-classes-in-netherlands
source: src/pages/ai-and-machine-learning-classes-in-netherlands.html
provider: Modern Age Coders
areaServed: Netherlands
ages: 6 to 67
---

> Modern Age Coders teaches live online AI and machine learning to learners in the Netherlands
> between the ages of 6 and 67, in groups of five to eight or one to one. The subject here is model
> building rather than prompt writing: students work in Python, meet the mathematics that holds
> machine learning up, and finish able to train something and say how far off it is. Group fees are
> about EUR 35 a month and the first class is free.

## Direct answers

**What time are the classes in Dutch time?**
Evening slots at 17:00, 18:45 and 20:30, plus a Saturday morning batch. The Netherlands moves
between CET and CEST; Indian Standard Time never shifts. The gap is 3 hours 30 minutes in summer
and 4 hours 30 minutes in winter. Your slot does not move when the clocks do.

**How is this different from other AI courses sold here?**
Most teach prompting. This teaches model building: finding data, cleaning it, choosing a model,
training it, measuring the error in real units, improving it. Prompting is knowledge of one product
in one year. Model building rests on statistics, linear algebra and code.

**What does it cost?**
Group batch: USD 40 a month, about EUR 35. One to one: USD 100 a month, about EUR 88. Euro figures
use the ECB reference rate of 1.1377 US dollars to the euro published 24 July 2026, so read them as
close rather than fixed. No enrolment fee, no annual contract, first class free.

**Which language?**
English. The libraries, documentation, error messages and research are all in English, so a student
who learns machine learning in English is not translating anything later.

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

## The first project: is Dutch cycling in decline?

Source: Statistics Netherlands table 84710ENG, travel per person per day by mode. Bicycle is mode
A018984. Students pull it from the CBS open data API themselves in the first session.

| Year | Trips | Kilometres | Minutes |
|---|---|---|---|
| 2018 | 0.79 | 3.16 | 16.46 |
| 2019 | 0.76 | 3.01 | 16.26 |
| 2020 | 0.63 | 2.61 | 14.74 |
| 2021 | 0.64 | 2.68 | 15.18 |
| 2022 | 0.75 | 3.04 | 16.72 |
| 2023 | 0.73 | 2.92 | 15.81 |
| 2024 | 0.75 | 3.04 | 16.29 |

**The trap.** Fit a straight line through the kilometres column and it slopes downward, which says
the Netherlands is cycling less. That is wrong. The 2020 and 2021 rows are pandemic years. Cycling
was interrupted and recovered: 3.04 kilometres in 2024 against 3.01 in 2019. The line is measuring
an event the model has no column for.

Steps the student works through:

1. Query the CBS open data endpoint for table 84710ENG, filter to mode A018984, and work out which
   code means bicycle without being told
2. Plot kilometres against year before modelling anything
3. Fit a linear regression on year alone, then state in plain language what its negative coefficient
   claims about the country
4. Add an indicator for 2020 and 2021, refit, and watch the slope change. That is a confounder,
   learned by building one
5. Report mean absolute error in kilometres per person per day, not an abstract score
6. Bring in the four regional series. The south sits lowest at 2.73 kilometres in 2024 against 3.28
   in the east. Ask whether the model explains that or merely reproduces it
7. Publish a notebook whose first paragraph admits that seven annual observations cannot separate a
   trend from a recovery

Tools: pandas, the CBS OData API, scikit-learn, matplotlib.

## Why this matters in the Netherlands now

Artificial intelligence is one of the six priorities of the Netherlands Digitalisation Strategy,
with a national approach developed by an acceleration team chaired by Larissa Zegveld. Two
objectives sit at its centre: using AI to improve public services and address societal challenges,
and building high quality AI infrastructure aligned with public values. Named initiatives under the
strategy include Vlam.ai, GPT-NL and the AI Factory.

Every item there is a construction project. A national language model needs people who understand
tokenisation, training and evaluation. Public sector AI infrastructure needs engineers who can take
a messy public dataset and return a defensible result. And "aligned with public values" cannot be
implemented by prompting carefully: it requires people who can measure what a system does, find
where it fails, and say so publicly.

## School and university fit

Dutch secondary education streams into VMBO, HAVO and VWO, and informatica is an elective rather
than a compulsory subject, so a capable student can reach university without ever having trained a
model. Our teens track sits beside that: the statistics and early linear algebra a VWO student
meets in mathematics anyway, applied to data instead of exercises.

Families on international, IB and British curricula follow the same ladder, and we teach the
examinations those routes set, including IGCSE Computer Science 0478, AP Computer Science A and
Principles, and IB Diploma Computer Science.

Dutch universities strong in computing and AI, Delft, Amsterdam, Eindhoven and Utrecht among them,
receive applications with very similar marks. Marks compress; a published project does not, because
it can be opened and interrogated. The cycling project is the shape we aim for: not impressive
because the model is sophisticated, it is a linear regression, but because the student found a
confounder, said so, and quantified how little seven observations support.

## Class times and the Dutch year

| Slot, Dutch time (CET and CEST) | Typical group |
|---|---|
| 17:00 to 18:30 | Primary age children |
| 18:45 to 20:15 | Teenagers |
| 20:30 to 22:00 | University students and working adults |

Sessions are 90 minutes, live video, five to eight students or one to one. Dutch school holidays
are staggered by region, with north, middle and south taking the main breaks at different times, so
start dates are set per family rather than as one national intake. Admission runs continuously.

## Provider facts

- Modern Age Coders, teaching since 2020
- More than 10,000 students across 25+ countries
- Rated 4.9 across 547 Google reviews
- Ages 6 to 67, coding, AI and mathematics
- Live video only, never pre-recorded
- Contact: [/contact](/contact)
