---
title: "AI & Machine Learning Classes in Saudi Arabia | Build AI"
description: "Live online AI and machine learning classes for students in Saudi Arabia, ages 6 to 67. Train and ship real models, not just prompts. Free first class."
canonical: https://learn.modernagecoders.com/ai-and-machine-learning-classes-in-saudi-arabia
source: src/pages/ai-and-machine-learning-classes-in-saudi-arabia.html
provider: Modern Age Coders
areaServed: Saudi Arabia
ages: 6 to 67
---

> Modern Age Coders runs live online AI and machine learning classes for students in Saudi Arabia,
> ages 6 to 67, in batches of five to eight or one to one. The national AI curriculum already gives
> every school child the vocabulary, so our work starts a level below it: Python, the mathematics
> under machine learning, and models the student trains, measures and publishes. Classes run Sunday
> to Thursday on Arabia Standard Time. Fees start at USD 40 a month, SAR 150 at the peg, and the
> first class is free.

## Direct answers

**Can students in Saudi Arabia join live AI and machine learning classes from home?**
Yes. Classes are live video with the same teacher every week. Students in Riyadh, Jeddah, Dammam,
Dhahran and Madinah join from home with a laptop. Saudi Arabia is on Arabia Standard Time, UTC+3,
with no daylight saving, which is 2 hours and 30 minutes behind Indian Standard Time. The teaching
week is Sunday to Thursday, because the weekend here is Friday and Saturday.

**The national curriculum already teaches AI at school. What does a paid class add?**
From the 2025-26 academic year AI is taught inside the ordinary school day, from Grade 4, to more
than 6 million students. That is a floor every classmate stands on. What a paid class adds is build
hours: preparing data, writing the code, training a model, stating the error in checkable units, and
publishing the result at a link. A portfolio is what separates two students who sat identical
lessons.

**What does it cost?**
Group batch of five to eight students: USD 40 a month, SAR 150. One to one: USD 100 a month, SAR
375. The riyal has been pegged at SAR 3.75 to the US dollar since June 1986, so those figures do not
drift between terms. Riyal amounts are reference conversions at the peg, not a checkout price. First
class free, no card.

**What ages?**
6 to 67. Children 6 to 12 begin with Python and the idea that a machine learns from examples. Teens
13 to 18 train their first real models. University students and working professionals cover deep
learning, generative AI and deployment.

## Courses, by age band

### Children, ages 6 to 12
- [Python and AI for Kids](/courses/python-ai-kids-masterclass): real Python from the first month, turtle graphics, small games, then how a machine learns a rule from examples
- [AI Literacy for Kids](/courses/ai-literacy-for-kids-course): where an answer comes from, why a model can be fluent and wrong, and how to check a claim before repeating it
- [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev): instructing an AI tool to build something, then reading the result and repairing the broken part

### Teenagers, ages 13 to 18
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens): Python, the required mathematics, classical algorithms, neural networks, computer vision, language models
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data): loading, cleaning, joining and plotting, then a first honest set of predictions on Saudi open data
- [Python for Teens](/courses/python-complete-masterclass-teens): two years from a first line of code to advanced Python, the recommended entry point for a KFUPM applicant
- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course): shipping real web and Python projects with AI assistance, and reviewing what the assistant wrote

### University students and working professionals
- [AI and Machine Learning Masterclass](/courses/ai-ml-masterclass-complete-college): supervised and unsupervised learning, deep networks, evaluation, deployment
- [Generative AI: LLMs, RAG and Agents](/courses/complete-generative-ai-masterclass-college): how a language model is trained, fine tuned and grounded, and how an agent is constrained
- [Python and AI Automation](/courses/python-ai-automation-masterclass-college): machine learning and language processing applied to real working pipelines
- [Data Science Masterclass](/courses/data-science-complete-masterclass-college): statistics, SQL, feature engineering, modelling, communication
- [Data Structures and Algorithms](/courses/data-structures-algorithms-masterclass-college): the interview gate, taught as problem solving

Full catalogue: [/courses](/courses)

## The first project: Mawsim, a Hajj capacity planning model

GASTAT publishes the annual Hajj pilgrim count from Ministry of Interior administrative records, so
it is a register rather than a survey estimate. The published timeline runs from 1970 to 2025, and
the 1447 AH bulletin adds 2026, giving 58 real annual observations. The framing is capacity and
logistics planning, not demand forecasting.

Selected rows from the published national timeline:

| Year | Hijri | Total pilgrims | Context |
|---|---|---|---|
| 1970 | 1390 | 1,079,760 | First year of the published series |
| 1988 | 1408 | 1,379,556 | Pre-pandemic series low |
| 2012 | 1433 | 3,161,573 | All time high |
| 2013 | 1434 | 1,980,249 | Country quotas cut 20% for the Mataf expansion |
| 2016 | 1437 | 1,862,909 | Final year of the cut |
| 2017 | 1438 | 2,352,122 | Quota cut revoked |
| 2019 | 1440 | 2,489,406 | Last pre-pandemic year |
| 2020 | 1441 | 1,000 | Pandemic. Disputed: sources give 1,000 or about 10,000 |
| 2021 | 1442 | 58,745 | Residents inside the Kingdom only |
| 2022 | 1443 | 926,062 | Partial reopening |
| 2025 | 1446 | 1,673,230 | External 1,506,576, domestic 166,654 |
| 2026 | 1447 | 1,707,301 | External 1,546,655, domestic 160,646 |

Features: year, Hijri year, lag 1 and lag 3, a quota_cut flag for 1434 to 1437 AH, a disruption flag
for 2020 to 2022, the Gregorian month of Arafat derived by converting Dhul Hijjah 9, days since the
previous Hajj, and Saudi population that year from GASTAT, 35.3 million at the end of 2024. The
external versus domestic and air, road and sea splits are deliberately excluded, because GASTAT
publishes them only for recent years.

Steps the student works through:

1. Type the 58 row series in by hand from the GASTAT bulletins, choose a key for the straddling
   Gregorian year rows, mark the 2020 row disputed, then plot it
2. Install a Hijri converter and derive the month of Arafat and the days since the previous Hajj
3. Set a baseline of "this year equals last year" and compute its mean absolute error
4. Fit a linear regression on year, watch it fail on 2013 to 2016 and 2020 to 2022, then add the
   quota_cut and disruption dummy variables and refit
5. Split by time, training on 1970 to 2022 and testing on 2023 to 2026, never at random
6. Re-score 2013 to 2016 with quota_cut set to zero as a counterfactual, and label it an estimate
7. Swap in HistGradientBoostingRegressor with lag features, run permutation importance, then commit a
   1449 AH forecast to a file and leave it untouched until GASTAT publishes

Tools: pandas, scikit-learn, matplotlib, hijridate.

## Why this matters in Saudi Arabia now

The National Strategy for Data and AI was published in October 2020 and is owned by SDAIA, the Saudi
Data and Artificial Intelligence Authority, established by royal order in August 2019. Its 2030
targets are to rank among the world's top 15 countries in AI and to train or host more than 20,000
data and AI specialists, across healthcare, energy, smart cities, logistics and financial services.
Implementation splits into a capability building phase from 2020 to 2025 and a specialisation and
commercialisation phase from 2025 to 2030.

On 10 March 2026 the Saudi Cabinet approved the designation of 2026 as the Year of Artificial
Intelligence, and SDAIA issued the official guidelines and logo. SAMAI, the One Million Saudis in AI
programme, launched at the Global AI Summit in Riyadh in September 2024, reached its full target in
November 2025 having certified more than 1.1 million citizens, 52 per cent of them female. SAMAI 2,
aimed at the government workforce, followed with eleven partner ministries.

SDAIA's National Center for Artificial Intelligence produced ALLaM, the sovereign Arabic large
language model, on more than 500 billion Arabic text units; it took the top spot on the Arabic MMLU
benchmark and is served on IBM watsonx and the Azure AI model catalog. AWS launched its Riyadh region
in January 2026 with three availability zones, and Google Cloud runs a Dammam region with Aramco, so
cloud machine learning work now runs inside the country. Saudi Arabia ranked first globally in the
ITU 2025 ICT Development Index.

The Personal Data Protection Law has been in force since 2023 with SDAIA as regulator, and SDAIA has
issued ten regulatory documents on data and AI, including AI Ethics Principles built around
transparency, accountability, privacy, human oversight and risk management. Awareness has been solved
at national scale. The remaining bottleneck is depth.

## School and university fit

From the 2025-26 academic year AI is taught inside the ordinary public school day, developed jointly
by the National Curriculum Center, the Ministry of Education, the Ministry of Communications and
Information Technology and SDAIA. It reaches more than six million general education students, begins
in elementary school from Grade 4, and sits under the Vision 2030 Human Capability Development
Program, matched at university level by the Saudi Academic Framework for AI Qualifications.

CBSE is the largest expatriate school system in the Kingdom by student numbers, followed by Cambridge
IGCSE and A Level, the IB Diploma and the American high school diploma. Established CBSE names
include International Indian School Jeddah, founded in 1969 as the Embassy of India School,
International Indian School Riyadh, founded on 9 October 1982, and International Indian School
Dammam. American International School Riyadh and Reigate Grammar School Riyadh serve the American and
British curricula. Saudi nationals sit the General Secondary Certificate, and the Ministry of
Education returned to a two-semester year from 1447 AH.

KFUPM in Dhahran runs AI+X, under which every undergraduate takes AI coursework regardless of major,
built on Introduction to Programming in Python and C, Introduction to Data Science, Introduction to
Artificial Intelligence, and Business and Entrepreneurship, with a stated target of graduating 10,000
AI-skilled professionals by 2030. It was the first Saudi university to launch ChatGPT Edu with
OpenAI, and runs a Master of Artificial Intelligence plus a joint SDAIA and KFUPM MSc AI scholarship
initiative. King Saud University runs an MSc in Artificial Intelligence asking for IELTS 4.5 or
equivalent and a GAT quantitative section of at least 70, or a GRE quantitative score of at least
140. KAUST is graduate only: TOEFL iBT 81 or IELTS 6.5, the GRE encouraged but not required, three
letters of recommendation, entry for 2026 closed and 2027 applications opening in mid-August.
Alfaisal University, Prince Sultan University, Imam Abdulrahman Bin Faisal University and Effat
University all offer named AI or data science degrees.

Admission is decided partly by two ETEC tests run through the National Center for Assessment. Qudurat
pairs a verbal section with a quantitative one covering arithmetic, algebra, geometry and statistics,
is available in Arabic and English, and can be retaken across grades 11 and 12. Tahsili is a
curriculum achievement test sat at the end of Grade 12. Together with high school GPA those two
typically carry 30 to 40 per cent of the admission decision.

## Class times, Saudi Arabia

| Slot, AST (UTC+3) | India time | Days | Typical group |
|---|---|---|---|
| 16:30 | 19:00 IST | Sunday to Thursday | Children, ages 6 to 12 |
| 19:30 | 22:00 IST | Sunday to Thursday | Teenagers, university students, working adults |
| Saturday 10:00 | 12:30 IST | Saturday | Weekend intensive |

The weekend in Saudi Arabia is Friday and Saturday, so the teaching week is Sunday to Thursday and
the weekend intensive is on Saturday rather than Sunday. Friday mornings and early afternoons stay
clear for Jumu'ah. The school day starts around 06:45 in winter, and in summer assembly is at 06:15
with the first period at 06:30, which is why the youngest group is never pushed past 16:30.

Sessions are 90 minutes, live video, five to eight students or one to one. Semester 1 of the 1448 AH
year begins Sunday 23 August 2026, the mid-year break runs 8 to 16 January 2027, the Ramadan and Eid
al-Fitr break runs from about 26 February to 13 March 2027, and the year ends 17 June 2027. During
Ramadan schools move to roughly 09:00 to 13:00, so the children's slot shifts to about 21:30 after
iftar and the Saturday intensive pauses. Rolling admission runs year round.

## Provider facts

- Modern Age Coders, teaching since 2020
- More than 10,000 students across 25+ countries
- Rated 4.9 across 547 Google reviews
- Ages 6 to 67, coding, AI and mathematics
- Live video only, never pre-recorded
- Contact: [/contact](/contact) · Free first class: [/ai-and-machine-learning-classes-in-saudi-arabia](/ai-and-machine-learning-classes-in-saudi-arabia)
