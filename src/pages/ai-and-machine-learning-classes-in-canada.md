---
title: "AI and Machine Learning Classes in Canada | Build AI"
description: "Live online AI and machine learning classes for students in Canada, ages 6 to 67. Train real models in Python, not just prompts. From CAD 56.37 a month."
canonical: https://learn.modernagecoders.com/ai-and-machine-learning-classes-in-canada
source: src/pages/ai-and-machine-learning-classes-in-canada.html
provider: Modern Age Coders
areaServed: Canada
ages: 6 to 67
---

> Modern Age Coders teaches AI and machine learning live online across Canada, ages 6 to 67, in a
> cohort of five to eight or privately. What is taught is model building: Python, the probability
> and matrix work beneath it, then training and testing models on published Canadian data. Lessons
> are in English, and because the staff work from India the timetable sits in Canadian mornings and
> weekends. A group seat is USD 40 a month, CAD 56.37 at the Bank of Canada rate for 24 July 2026,
> and the first class is free.

## Direct answers

**What times do classes run in Canada?**
Canadian mornings and weekends only. Three slots work: Saturday 09:00 to 10:30 Eastern, which is
18:30 to 20:00 the same day in India; Sunday 10:30 to 12:00 Eastern, which is 20:00 to 21:30 in
India; and Saturday 08:00 to 09:30 Pacific, which is 20:30 to 22:00 in India. Canadian weekday
evenings are not offered, because 7:00 PM in Toronto is 4:30 the next morning in India and 7:00 PM
in Vancouver is 7:30 the next morning.

**Does the time difference stay the same all year?**
No. India is on UTC plus 5 hours 30 minutes with no daylight saving, so the gap moves when Canada
changes its clocks in November and again in March, and the timetable is rebuilt on both dates.
Saskatchewan stays on Central Standard Time all year and Yukon is permanently on UTC minus 7, so
Regina, Saskatoon and Whitehorse keep the same offset in every month.

**What makes this different from the AI courses usually sold to Canadian families?**
Nearly all of those teach prompting. Here the work is assembling a dataset, picking a split that
refuses to flatter you, training, and then stating the error in units a non-specialist can argue
with. Prompting is bolted to a product that will be redesigned. Probability, matrices and code
outlast it.

**What does it cost?**
A seat in a cohort of five to eight: USD 40 a month, CAD 56.37. Private one to one: USD 100 a month,
CAD 140.93. Converted at 1 US dollar to 1.4093 Canadian dollars, the Bank of Canada daily rate for 24
July 2026, series FXUSDCAD. First class free, no card.

**Does it count toward the OSSD?**
No. It is not an Ontario Ministry of Education credit course and will not appear on a transcript. It
produces something a transcript cannot hold: a trained model with a written up validation scheme,
which is the kind of evidence Waterloo's Admission Information Form and the supplemental application
required at U of T St. George are asking for.

**What ages?**
6 to 67, taught as three distinct curricula and not as one course delivered at three speeds. Note
the Quebec exception: a 17 year old there is usually already at CEGEP and belongs with the college
and adult group rather than with teenagers.

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

### University students, CEGEP students and working professionals
- [AI and Machine Learning Masterclass](/courses/ai-ml-masterclass-complete-college)
- [Generative AI: LLMs, RAG and Agents](/courses/complete-generative-ai-masterclass-college)
- [Python and AI Automation](/courses/python-ai-automation-masterclass-college)
- [Data Science Masterclass](/courses/data-science-complete-masterclass-college)
- [Data Structures and Algorithms](/courses/data-structures-algorithms-masterclass-college)

Full catalogue: [/courses](/courses)

## The first project: predicting how much of a province burns

The 2025 Canadian fire season reported fewer fires than 2024 and burned far more land. That single
comparison removes the beginner's first assumption, that more fires must mean more damage, and
replaces it with the real question: what decides how much of Canada burns in a season?

| Season | Fires reported | Area burned | Figure as of |
|---|---|---|---|
| 2023 | 6,551 | 184,961 km2, or 18.496 M ha | 6 October 2023 |
| 2024 | 5,686 | 5.378 M ha | 20 November 2024 |
| 2025 | 5,349 | 8.78 M ha | 16 September 2025 |

Provincial rows used to build the panel:

| Province or territory | Season | Fires | Area burned | Note |
|---|---|---|---|---|
| British Columbia | 2023 | 2,293 | 2,840,104 ha | stated as the final tally |
| Alberta | 2023 | 1,088 | 2,222,900 ha | end of fire season |
| Alberta | 2024 | not stated | 775,000 ha | against 2.2 million in 2023 |
| Manitoba | 2024 | not stated | 266,000 ha | season total |
| Northwest Territories | 2024 | not stated | 1.7 M ha | by the end of October |

The fourth column of the first table is load-bearing. These are situation report snapshots taken at
three different points in three different seasons, not a certified year on year series, and three of
the provincial rows carry no published fire count at all, which is recorded as an absence rather
than as a zero.

Target: hectares burned in one province in one fire season, modelled as log1p of hectares. One row
is one province or territory in one season, so thirteen jurisdictions across N seasons.

Steps the student works through:

1. Assemble the panel by hand from the situation reports, one row per province-season, recording
   the as-of date of every area figure in its own column, then normalise the snapshots by keeping
   only end of season figures or fixing one calendar cutoff, so that scraping the latest available
   total does not manufacture a trend out of a publishing schedule
2. Engineer the fire weather features, seasonal mean Fire Weather Index and Drought Code, May to
   June precipitation anomaly, lightning strike count, overwintering fires carried in from the prior
   season, and days at national preparedness level 4 or 5, then write down which of them are
   actually known at the moment a forecast would be wanted
3. Plot the target, notice how violently right skewed it is, apply log1p and plot again, then write
   one sentence saying why
4. Build the baseline first, predicting each province's own historical median hectares. Any later
   model that does not beat it is not a model
5. Fit gradient boosting under GroupKFold with groups set to the fire season year, and report mean
   absolute error on the log scale and back transformed into hectares
6. Rerun step 5 with a plain random split, record the inflated score, and write up the difference,
   because the gap is the lesson

The trap is group leakage by fire season. Canadian fire seasons are correlated across the continent:
2023 was catastrophic in British Columbia at 2,840,104 hectares and in Alberta at 2,222,900 hectares
at the same time, driven by the same drought and heat. Under a random row-level split, British
Columbia 2023 lands in training and Alberta 2023 lands in test, so the model never has to learn
anything about fire weather. It only has to recognise a row from 2023, which it can read straight
off the training set. Grouped by season, the score collapses and that lower number is the honest
one. When rows share a common shock, split on the shock rather than on the rows.

Two supporting traps are taught alongside it. Snapshot mismatch, where comparing a mid-September
figure against a late-November one invents a decline. And loss domination, where on raw hectares one
catastrophic season owns nearly all the squared error, so the model optimises for a single year.

Tools: pandas, scikit-learn, matplotlib, GroupKFold, gradient boosting.

## Why this matters in Canada now

Canadian AI policy runs on two named tracks. The Pan-Canadian Artificial Intelligence Strategy of
2017 is supported by federal funding of Can $125 million and delivered by CIFAR, with the Canada
CIFAR AI Chairs Program as its cornerstone, benefiting from funding of Can$86.5 million over five
years; a second phase launched in June 2022. Separately, in November 2024 the federal government
announced the creation of the Canadian Artificial Intelligence Safety Institute as part of a 2.4
billion CAD federal AI investment package, and on 13 May 2025 Evan Solomon assumed office as
Minister of Artificial Intelligence and Digital Innovation under Prime Minister Mark Carney, in a
post recorded as newly created.

Three federally backed institutes recruit from the same domestic student pool. Mila, the Quebec AI
Institute in Montreal, founded in 1993 by Universite de Montreal professor Yoshua Bengio, with
approximately 1000 students and researchers and 100 faculty members as of 2022. The Vector
Institute in Toronto, founded in March 2017 with a combined total of $200 million CAD from private
and public sectors, established by Brendan Frey, Geoffrey Hinton and Raquel Urtasun, with Hinton as
Chief Scientific Advisor and $60 million CAD received from the Government of Canada in 2021. And
Amii in Edmonton, which began in 2002 as the Alberta Ingenuity Centre for Machine Learning, a joint
effort between the Government of Alberta and the University of Alberta.

The employers are here too. Cohere is headquartered in Toronto and was founded in 2019 by Aidan
Gomez, Ivan Zhang and Nick Frosst, all three of whom attended the University of Toronto. CNBC
reported its revenue as $240 million in February 2026 and its valuation reached roughly $7 billion
in September 2025, with 450+ employees as of 2025. Shopify is in Ottawa with 7,600 employees and
US$11.6 billion of revenue in 2025, and in January 2026 announced the Universal Commerce Protocol,
an open standard designed to allow artificial intelligence agents to connect and transact with
merchants. Vector's founding sponsors included Uber, Google and Shopify, with 30 companies
committing a combined $80 million over 10 years.

## School and university fit

Education is within provincial jurisdiction and the curriculum is overseen by the province, so there
are thirteen systems rather than one national curriculum.

**Ontario.** The computer studies course codes are ICS2O, Introduction to Computer Studies, Grade
10, Open; ICS3U, Introduction to Computer Science, Grade 11, University Preparation; ICS3C,
Introduction to Computer Programming, Grade 11, College Preparation; ICS4U, Computer Science, Grade
12, University Preparation; and ICS4C, Computer Programming, Grade 12, College Preparation. ICS4U
lists ICS3U as its prerequisite, so a student who missed Grade 11 computer science has no in-school
route into the Grade 12 university preparation course. The Ontario Secondary School Diploma requires
30 credits of which 18 are compulsory, including 3 credits in Mathematics with at least one credit
in Grade 11 or 12, plus 40 hours of community service and the Ontario Secondary School Literacy
Test. The OSSLT is administered by the Education Quality and Accountability Office, sat in Grade 10,
and is written every year in either October to December or March to May, with the Ontario Secondary
School Literacy Course, OLC 4O, available in Grade 12 for students who do not pass.

**Quebec.** Grade 12 is the final grade in every provincial secondary curriculum except Quebec,
whose secondary schools end after Secondary V, which is Grade 11, and Quebec is currently the only
province that treats Grade 12 as part of the tertiary level of education. After Secondary V students
go to CEGEP, where academic programmes are typically two years in duration and professional
programmes typically three, and a Diploma of College Studies is required for university admission in
Quebec.

**British Columbia.** Computing sits inside Applied Design, Skills and Technologies, a K to 12
curriculum area, and Computer Studies 10 is an ADST Grade 10 course. Its Big Ideas are stated as
user needs and interests drive the design process; social, ethical, and sustainability issues are
influenced by design; and complex tasks require different technologies and tools at different
stages.

**The national contest.** The Canadian Computing Competition is organised by the Centre for
Education in Mathematics and Computing at the University of Waterloo, with Junior for grades 9 and
10 and Senior for grades 11 and 12. The top 20 Senior competitors advance to the Canadian Computing
Olympiad at Waterloo and the top four are selected for the Canadian IOI team.

**University of Waterloo, Computer Science.** Six Grade 12 U and M courses including Advanced
Functions, Calculus and Vectors, any Grade 12 U English and one other 4U course, with Grade 11 U
Introduction to Computer Science recommended. Admission is by individual selection from the low to
mid-90s and the Admission Information Form is required. Waterloo strongly encourages the Canadian
Computing Competition, the Canadian Senior Mathematics Contest or the Euclid Mathematics Contest,
and applicants must write either the CSMC or Euclid to qualify for Faculty of Mathematics entrance
scholarships. Co-op students alternate between school and work every four months across four
possible work-study sequences and graduate with up to two years of paid experience.

**University of Toronto, Computer Science.** Offered at all three campuses, requiring an Ontario
Secondary School Diploma with six subjects at the 4U or M level including English, specifically
ENG4U or EAE4U, MCV4U and MHF4U, with MDM4U recommended. The degree is the HBSc as Major, Minor or
Specialist, with work-integrated learning at all three campuses. Campus codes are TAD for St. George
in the Faculty of Arts and Science, TMX for Mississauga and TXC for Scarborough, and St. George
lists a supplemental application as required.

Both flagship programmes want Grade 12 calculus and advanced functions, and both attach a
non-transcript component. MDM4U, the course U of T recommends, is the statistics and probability
course, which is the school-side counterpart of a machine learning class.

## Class times and the Canadian year

| Slot | India time, same day |
|---|---|
| Saturday 09:00 to 10:30 Eastern | 18:30 to 20:00 IST |
| Sunday 10:30 to 12:00 Eastern | 20:00 to 21:30 IST |
| Saturday 08:00 to 09:30 Pacific | 20:30 to 22:00 IST |

In July 2026 the gap to India is 9 hours 30 minutes from Toronto, Ottawa and Montreal, 10 hours 30
minutes from Winnipeg, 11 hours 30 minutes from Calgary and Edmonton, 12 hours 30 minutes from
Vancouver, 8 hours 30 minutes from Halifax and 8 hours from St. John's. In winter, Toronto is 10
hours 30 minutes behind India and Vancouver 13 hours 30 minutes.

There is no national school calendar, because education is provincial and term dates are often set
board by board. The school year ends in June. We confirm term dates and break weeks with each family
rather than assuming a national one, avoid stacking assessment-heavy work onto Grade 10 Ontario
students inside the OSSLT windows, and open cohorts after Labour Day and again after New Year. A
Waterloo co-op student's availability flips on a four month cycle rather than a September to April
one, so college-age timetables are set per term. Enrolment is rolling and a student can begin in any
week.

## Provider facts

- Modern Age Coders, teaching since 2020
- More than 10,000 students across 25+ countries
- Rated 4.9 across 547 Google reviews
- Ages 6 to 67, coding, AI and mathematics
- Live video only, never pre-recorded
- Teaching, materials and feedback are in English, not French
- Contact: [/contact](/contact)
