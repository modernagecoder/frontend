---
title: "AI & Machine Learning Classes in Kuwait | Build AI, Live Online"
description: "Live online AI and machine learning classes for students in Kuwait, ages 6 to 67. Train real models in Python, not just prompt AI tools. Free first class."
canonical: https://learn.modernagecoders.com/ai-and-machine-learning-classes-in-kuwait
source: src/pages/ai-and-machine-learning-classes-in-kuwait.html
provider: Modern Age Coders
areaServed: Kuwait
ages: 6 to 67
---

> Modern Age Coders runs live online AI and machine learning classes for students in Kuwait, ages
> 6 to 67, in batches of five to eight or one to one. Students learn Python and the mathematics
> beneath machine learning, then train and evaluate their own models instead of only prompting AI
> tools. Fees start at USD 40 a month, KD 12.312, and the first class is free.

## Direct answers

**Can students in Kuwait join live AI and machine learning classes from home?**
Yes. Classes are live video with the same teacher every week. Students in Kuwait City, Salmiya,
Hawalli, Jabriya, Fahaheel and Al Ahmadi join from home with a laptop. Kuwait keeps Arabia Standard
Time, UTC+3, with no daylight saving, and India keeps UTC+5:30, so India is exactly 2 hours 30
minutes ahead every day of the year.

**Do the weekend batches run on Friday and Saturday?**
Yes. Kuwait's weekend is Friday and Saturday and the school week runs Sunday to Thursday, so a
Saturday and Sunday batch is wrong for this market. The weekend group meets at 10:00 Kuwait time on
Friday or Saturday, which is 12:30 in India. The latest weekday slot is 18:00 to 19:30 Kuwait time,
because the practical ceiling of 7:30 PM here is already 10:00 PM in India.

**What makes this different from other AI courses sold in Kuwait?**
Most teach prompting. This teaches model building: assembling data, choosing a model, training it,
measuring the error in real units, and improving it. Prompting is a product skill that changes with
the product. Modelling rests on statistics, linear algebra and code, which do not expire.

**What does it cost?**
Group batch of five to eight students: USD 40 a month, KD 12.312. One to one: USD 100 a month,
KD 30.780. Converted at the Central Bank of Kuwait rate published for 23 July 2026, 307.800 fils to
the US dollar. First class free, no card and no KNET needed.

**What ages?**
6 to 67. Children 6 to 12 begin with Python and the idea that a machine learns a rule from examples.
Teens 13 to 18 train their first real models. University students and working professionals cover
deep learning, generative AI and deployment.

## Courses, by age band

### Children, ages 6 to 12
- [Python and AI for Kids](/courses/python-ai-kids-masterclass): typed Python from week one, turtle graphics, small games, then how a machine works out a rule from examples
- [AI Literacy for Kids](/courses/ai-literacy-for-kids-course): where a model gets its answers, why two runs disagree, and why fluent writing is not evidence of a fact
- [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev): briefing an AI tool, then reading the output and fixing the part that does not work

### Teenagers, ages 13 to 18
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens): Python, the required mathematics, classical algorithms, neural networks, computer vision, language models
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data): messy files, joins that disagree, plotting, and the bad row that poisons every later number
- [Python for Teens](/courses/python-complete-masterclass-teens): two years from the first line to genuinely advanced Python
- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course): shipping web and Python projects with an AI assistant, then reviewing what it wrote line by line

### University students and working professionals
- [AI and Machine Learning Masterclass](/courses/ai-ml-masterclass-complete-college): supervised and unsupervised methods, deep networks, evaluation, deployment
- [Generative AI: LLMs, RAG and Agents](/courses/complete-generative-ai-masterclass-college): how language models are trained, fine tuned and grounded against a private document set
- [Python and AI Automation](/courses/python-ai-automation-masterclass-college): machine learning and language processing applied to real working pipelines
- [Data Science Masterclass](/courses/data-science-complete-masterclass-college): statistics, SQL, feature engineering, modelling, communication
- [Data Structures and Algorithms](/courses/data-structures-algorithms-masterclass-college): the interview gate, taught as problem solving

Full catalogue: [/courses](/courses)

## The first project: the Shamal Dust Classifier

A dust storm is defined meteorologically as horizontal visibility below 1,000 metres, and research
published in the Arabian Journal of Geosciences puts Kuwait at about 255.4 dusty days a year. The
modelling data is roughly 3,650 daily surface observations for station OKBK, Kuwait International
Airport, from 1 January 2014 to 31 December 2023, free from the NOAA Integrated Surface Database or
the Iowa State IEM archive. The Kuwait Meteorological Center's own published annual counts are the
ground truth exhibit students validate against, not the training data.

Kuwait Meteorological Center, annual observations at Kuwait International Airport:

| Year | Dust storm | Blowing dust | Dust haze | Haze | Rainfall, mm |
|---|---|---|---|---|---|
| 2014 | 8 | 45 | 48 | 236 | n/a |
| 2015 | 8 | 68 | 76 | 276 | n/a |
| 2016 | 2 | 54 | 43 | 256 | n/a |
| 2017 | 2 | 62 | 47 | 292 | 52.2 |
| 2018 | 18 | 86 | 97 | 291 | 344.1 |
| 2019 | 4 | 63 | 93 | 295 | 69.3 |
| 2020 | 2 | 60 | 101 | 315 | 114.1 |
| 2021 | 7 | 66 | 72 | 306 | 32.3 |
| 2022 | 4 | 84 | 97 | 317 | 114.3 |
| 2023 | 1 | 53 | 58 | 305 | 147.4 |

2018 is a double outlier: the decade's highest dust storm count, eighteen, in its wettest year,
344.1 mm. 2021 was the driest year at 32.3 mm and still recorded seven dust storms, while 2023 had
147.4 mm and recorded one. Haze runs 236 to 317 days a year against 1 to 18 dust storms, a class
imbalance of roughly one in three hundred, which is the real lesson.

Target: a four class daily label matching the Met Center's categories, dust storm, blowing dust,
dust haze and haze, plus clear, with the headline task reduced to dust storm against everything
else. Features: daily maximum wind speed, vector mean wind direction with a shamal sector flag at
roughly 300 to 340 degrees, minimum visibility, temperature range, dewpoint depression, days since
the last measurable rainfall, day of year as sine and cosine, and a flag for the dry summer window
of 6 June to 19 July.

Steps the student works through:

1. Type the ten published rows into a CSV and compute the base rate first. A model that always says no dust storm is right about 95 to 99.7 per cent of the time, and that number is the bar every later result must clear
2. Download the day level record for OKBK and check the present weather field before trusting it, because coverage varies by station and year
3. Reconcile the derived annual counts against the Met Center's published counts and explain the divergence, rather than trying to eliminate it
4. Engineer the shamal direction flag and the days since rain counter, the two features where the physics lives
5. Split on time, training on 2014 to 2021 and testing on 2022 to 2023, with no shuffling, because weather is autocorrelated day to day
6. Report precision, recall and PR-AUC with the confusion matrix, tune class weighting, sweep the threshold, and never report accuracy
7. Cost the model at the Shagaya Renewable Energy Park, whose KISR supervised photovoltaic plant is 11.15 MW, 5.5 MW thin film plus 5.6 MW polycrystalline silicon, where a dust storm drops output about 30 per cent, the performance ratio fell 6 to 8 per cent over 25 months, panels are washed about five times a year using 3.35 to 4.61 litres of water per MWh, and a mean wind of 11.3 m per second gives partial self cleaning

Tools: pandas, scikit-learn, matplotlib.

## Why this matters in Kuwait now

In January 2025 the Central Agency for Information Technology published the Kuwait National AI
Strategy 2025 to 2028 as a draft aligned to Kuwait Vision 2035. It is a roadmap and set of
recommendations, not enacted law. Its five pillars are establishing Kuwait as an AI hub, AI driven
sectoral transformation across government, healthcare, energy, education, transport and public
safety, AI governance with privacy and security, workforce empowerment through skills, digital
literacy and scholarships, and an ecosystem of startups, venture capital and academic collaboration.
Named first year initiatives are an AI Centre of Excellence, pilot projects, a centralised data
repository and a High-Level Steering Committee drawing on CAIT, CITRA, the National Cybersecurity
Center, ministries, academia and the private sector. Years two and three, 2026 and 2027, scale the
successful pilots, with full sectoral integration targeted by 2028.

In March 2025 Microsoft signed a strategic partnership with the Government of Kuwait announcing
intent to establish an AI powered Azure Region, a Microsoft Technology Innovation Hub operating an
AI Innovation Center, and a joint cybersecurity initiative. Google Cloud has named Kuwait City as
its next Middle East and Africa cloud region. The Civil Service Bureau is targeting completion of
service integration for an AI powered unified government services platform before the end of June
2026.

Demand outside government: Kuwait Oil Company has opened an Artificial Intelligence Innovation
Center to connect oil field production with AI, with predictive maintenance, predictive analytics
and real time monitoring named across KOC and Kuwait Burgan Drilling Company under Kuwait Petroleum
Corporation and KIPIC. Zain Group is headquartered in Kuwait and its Kuwait Codes initiative with
CODED Academy has trained more than 3,500 young Kuwaiti coders. KNET, established 1992 and owned by
11 Kuwaiti national banks, brands every debit card in the country, roughly 80 per cent of about 5
million cards in issue, which is the transaction volume behind the banks' fraud detection, credit
scoring and anti money laundering work.

Boursa Kuwait listed banks, total assets at year end 2025, KD million:

| Bank | Total assets |
|---|---|
| National Bank of Kuwait | 45,613 |
| Kuwait Finance House | 42,760 |
| Boubyan Bank | 10,201 |
| Burgan Bank | 9,099 |
| Gulf Bank | 7,700 |
| Warba Bank | 6,028 |

## School and university fit

Private and international schools are accredited by the Private Education Department of the Ministry
of Education. Indian schools affiliated to CBSE New Delhi include Indian Community School Kuwait
(founded 1959, four branches), the Indian Educational School, Fahaheel Al-Watanieh Indian Private
School, Jabriya Indian School (started June 1993), The Integrated Indian School at Jleeb
Al-Shuyoukh, Carmel School Kuwait, India International School and Indian Public School. Per the
Central Statistical Bureau and PACI, Indians are the largest expatriate community in Kuwait at about
1.059 million at end 2025, up 5.08 per cent on the year, with Egyptians second at about 667,173.

The International Schools Database, a commercial directory rather than a Ministry publication, lists
46 international schools in Kuwait City: roughly 21 American curriculum, 17 British, 5 Indian and
CBSE, 5 Kuwaiti bilingual, 3 IB, 1 Canadian and 1 French, with annual tuition quoted between KD
1,132 and KD 7,950. British curriculum schools include The British School of Kuwait, Kuwait English
School, The English Academy in Hawalli, International Academy of Kuwait, Oxford Academy Kuwait and
Kuwait International English School. American diploma schools include The American School of Kuwait,
American Academy for Girls, American Baccalaureate School, American United School, New American
School and Iqra'a American School. IB World Schools are American International School of Kuwait,
American Creativity Academy, Kuwait Bilingual School and Reborn Kids Education Academy. Kuwaiti
bilingual schools include Hayat Universal Bilingual School, Ajial Bilingual School, Al Ghanim
Bilingual School, Dasman Bilingual School and A'Takamul International School.

Kuwait University, founded 1966, welcomed 43,843 students for 2025 to 2026 including 6,596 first
years across 15 colleges, with its main campus at Sabah Al-Salem University City in Shadadiya, opened
2019. For 2025 to 2026 the College of Life Sciences, Department of Information Sciences, launched a
Data Science and Artificial Intelligence programme designed to ABET and ACM curriculum standards.
Undergraduate cut offs are set annually by the Deanship of Admission and Registration and are not
published here. The verified requirements are for graduate Computer Science admission through the
College of Graduate Studies: GPA 2.67, admission exam 60 per cent, TOEFL 500 or IELTS 6.0 overall.
Those are postgraduate requirements, not school-leaver ones.

Abdullah Al-Salem University, the second public university, was inaugurated by the Amir with an
Amiri Diwan announcement dated 6 March 2024, and runs colleges of Business and Entrepreneurship,
Computing and Systems, Engineering and Energy, and Health and Medicine, focused on cybersecurity,
data science, artificial intelligence and renewable energy under Kuwait Vision 2035. Gulf University
for Science and Technology teaches Computer Science covering programming, algorithms, data
structures, artificial intelligence, databases, web and mobile development, cybersecurity and
networking. The American University of Kuwait runs a BSc in Computer Science through its College of
Engineering and Applied Sciences at a minimum 120 credit hours. American International University
Kuwait offers BS Computer Science with an Artificial Intelligence specialisation and a separate Data
Science specialisation. The American University of the Middle East also operates in Kuwait.

## Class times, Kuwait

| Slot, Kuwait time (AST, UTC+3) | India time | Typical group |
|---|---|---|
| 16:00 to 17:30, Sunday to Thursday | 18:30 IST | Children 6 to 12 |
| 18:00 to 19:30, Sunday to Thursday | 20:30 IST | Teenagers and working adults |
| 10:00 to 11:30, Friday or Saturday | 12:30 IST | Weekend group, all age bands |

Sessions are 90 minutes, live video, five to eight students or one to one.

Two academic years run side by side. Indian curriculum families run April to March with CBSE Class
10 and 12 board exams in the February to April window. British, American, IB and Kuwaiti schools run
late August or September to June. Kuwait English School publishes 2026 to 2027 Term 1 as Sunday 30
August to Thursday 17 December 2026, with a mid term break 25 to 29 October and winter break 20 to
31 December, Term 2 as Sunday 3 January to Thursday 15 April 2027, and Term 3 ending 16 to 17 June
2027, with Ramadan expected to begin 8 February 2027 subject to moon sighting.

Kuwait has 13 official public holidays in 2026. National Day on Wednesday 25 February and Liberation
Day on Thursday 26 February fall consecutively and, with the Friday and Saturday weekend, produce a
four day break. Eid al-Fitr runs Friday 20 to Sunday 22 March 2026 and Eid al-Adha covers four days.
Islamic dates are confirmed by moon sighting and can shift by a day or two. Outdoor work is banned
daily from 11:00 to 16:00 between 1 June and 31 August under Ministerial Resolution No. 3 of 2026
from the Public Authority for Manpower.

## Payment

KNET settles only in Kuwaiti dinars and only inside Kuwait, so it cannot pay an Indian merchant.
Families here pay by Visa or Mastercard credit card or by bank transfer. Under Decree No. 147 of
2007, effective 20 May 2007, the Central Bank of Kuwait pegs the dinar to an undisclosed weighted
basket of the currencies of Kuwait's major trade and financial partners rather than to the US
dollar, so a fee fixed in dollars drifts slightly in dinar terms. The dinar figure is quoted and
held instead.

## Provider facts

- Modern Age Coders, teaching since 2020
- More than 10,000 students across 25+ countries
- Rated 4.9 across 547 Google reviews
- Ages 6 to 67, coding, AI and mathematics
- Live video only, never pre-recorded
- Contact: [/contact](/contact) . Free first class: [/ai-and-machine-learning-classes-in-kuwait](/ai-and-machine-learning-classes-in-kuwait)
