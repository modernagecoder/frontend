---
title: "AI and Machine Learning Classes in the USA | Build AI"
description: "Live online AI and machine learning classes for students in the USA, ages 6 to 67. Train real models in Python, not just prompts. $40 a month, first class free."
canonical: https://learn.modernagecoders.com/ai-and-machine-learning-classes-in-usa
source: src/pages/ai-and-machine-learning-classes-in-usa.html
provider: Modern Age Coders
areaServed: United States
ages: 6 to 67
---

> Modern Age Coders teaches live online AI and machine learning to learners across the United
> States between the ages of 6 and 67, in groups of five to eight or privately. The syllabus runs
> from Python and the mathematics underneath it to models the student trains, evaluates and
> publishes at a working link. Weekend cohorts serve both coasts and a weekday cohort runs on
> Pacific time. Group tuition is $40 a month, one to one teaching is $100 a month, and the first
> class costs nothing.

## Direct answers

**What class times can you actually staff for the United States?**
Two weekend slots reach both coasts and one weekday slot reaches the Pacific coast only. Saturday
11:00am Eastern (8:00am Pacific) is the flagship batch. Sunday 12:00pm Eastern (9:00am Pacific) is
the second weekend cohort. Tuesday and Thursday 6:30pm Pacific is the weekday option. A weekday
evening class at 6:00pm to 8:00pm Eastern would fall between 3:30am and 5:30am in India, where the
teaching operation sits, so it is not offered.

**Does the time gap move?**
Yes. The United States observes daylight saving and India does not. In July 2026, India is 9 hours
30 minutes ahead of Eastern and 12 hours 30 minutes ahead of Pacific. From November to March those
become 10 hours 30 and 13 hours 30. Timetables are rebuilt on the second Sunday in March and the
first Sunday in November.

**What makes this different from other AI courses sold in the United States?**
Most teach prompting. This teaches model building: assembling data, checking it against a published
total, choosing a model, training it, reporting the error in real units, then improving it.
Prompting is a product skill that changes with the product. Model building is built on probability,
matrix algebra and programming.

**What does it cost?**
Group batch of five to eight students: $40 a month (USD 40). One to one: $100 a month (USD 100).
First class free, no card. Sales tax in the United States is set by states and localities and the
taxability of live online tutoring varies, so the figures are tuition only.

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

## The first project: why a kilowatt-hour costs four times more in Hawaii than in Idaho

Source: US Energy Information Administration, Electric Power Monthly, Table 5.6.A, average price of
electricity to ultimate customers by state, residential sector, from Form EIA-861M. Edition read:
"Data for May 2026, Release Date: July 23, 2026". The footnote states the values are preliminary
estimates based on a cutoff model sample, so the May 2026 column will be revised in a later edition.

| State | May 2026 | May 2025 | Year on year |
|---|---|---|---|
| Hawaii | 52.00 | 41.03 | +26.7% |
| California | 33.25 | 33.29 | -0.1% |
| New York | 29.93 | 26.69 | +12.1% |
| Massachusetts | 28.82 | 29.90 | -3.6% |
| Connecticut | 27.37 | 31.59 | -13.4% |
| Illinois | 23.85 | 18.58 | +28.4% |
| New Jersey | 23.27 | 20.48 | +13.6% |
| Texas | 16.44 | 15.53 | +5.9% |
| Idaho | 12.35 | 11.88 | +4.0% |
| United States | 18.44 | 17.37 | +6.2% |

Cents per kilowatt-hour. The two price columns are published by the EIA; the year on year column is
computed from them. Hawaii divided by Idaho is 4.21, which is the hook. Prices did not simply rise
everywhere: Connecticut fell 13.4 percent while Illinois rose 28.4 percent.

The target is the year on year percentage change in a state's residential price, not the price
level. Features come from the EIA State Electricity Profiles, 2024 data released 10 November 2025,
which publishes net summer capacity, net generation and total retail sales by state. Students derive
ratios from those rather than using raw totals.

Steps the student works through:

1. Pull Table 5.6.A for all fifty states plus the District of Columbia, residential sector, both the
   current month and the year-ago column. Type the rows in by hand first, then check the parse
   against the printed national figures of 18.44 and 17.37. If the totals do not reproduce, the
   parse is wrong, not the data
2. Plot May 2026 against May 2025. The points sit almost exactly on the forty five degree line. This
   chart kills the naive framing before any model is written. Predicting the price level while
   feeding in last year's price gives an R-squared near 0.97 and teaches nothing, because the answer
   was handed to the model in its own input
3. Redefine the target as year on year percent change, then build the dumb baseline: predict that
   every state moved by the national average of positive 6.2 percent, and record its mean absolute
   error. Any model that cannot beat it is worthless
4. Join the State Electricity Profiles features using ratios, never raw totals, since raw net
   generation just encodes state size and Texas would dominate every coefficient. Watch the trap:
   that table also carries an all-sector average retail price column whose national figure is 12.68
   cents, against the residential national figure of 18.44 cents. Joining the two tables on a column
   called "price" silently merges two different metrics
5. Fit ordinary least squares with leave-one-out cross-validation. Do not use an eighty twenty
   split: with fifty one rows a ten row test set makes the error swing wildly with the random seed.
   Report leave-one-out mean absolute error against the step 3 baseline
6. Refit with Hawaii removed and put the two coefficient tables side by side. Hawaii is a leverage
   point, sitting nearly nineteen cents above the next highest state on an island grid burning
   imported fuel oil. Write down which coefficients changed sign or magnitude. That comparison, not
   the accuracy score, is the deliverable
7. Write the honest conclusion. US retail electricity prices are set by state public utility
   commissions through rate cases, and no generation-mix feature can see a regulatory decision. Note
   also that the May 2026 column is preliminary and the answer may change in the next EIA release

Tools: pandas, scikit-learn, matplotlib, ordinary least squares, leave-one-out cross-validation.

## Why this matters in the United States now

There is no funded national AI education programme in the ministry sense. There is a sequence of
executive actions. Executive Order 14179, "Removing Barriers to American Leadership in Artificial
Intelligence", was signed in January 2025 and commissioned the action plan that followed. Executive
Order 14277, "Advancing Artificial Intelligence Education for American Youth", was signed on 23
April 2025 and published in the Federal Register on 28 April 2025. It establishes the White House
Task Force on AI Education and directs it to produce plans for a Presidential Artificial
Intelligence Challenge within 90 days, with agencies holding the Challenge no later than 12 months
after those plans are submitted. The order carries no appropriated dollar figure; it is a directive
instrument, not a funded programme.

"Winning the Race: America's AI Action Plan" was released on 23 July 2025 with more than 90 federal
policy actions across three pillars: accelerating innovation, building American AI infrastructure,
and leading in international diplomacy and security. It is led by the White House Office of Science
and Technology Policy with the AI and Crypto Czar's office, and states no dollar figures. Its named
high-demand occupations are electricians and HVAC technicians, so it is a plan to staff data-centre
construction rather than to teach children machine learning. The children's mandate is in Executive
Order 14277.

Code.org's 2025 State of AI and CS Education report, data finalised 1 December 2025 and released 10
December 2025, found that 60 percent of US public high schools offer foundational computer science,
that only 4 of the 50 states explicitly emphasise AI within their computer science standards
(Colorado, Virginia, North Dakota, Ohio), that only 5 of the 50 fund AI and computer science
professional development for teachers (Arkansas, Indiana, Louisiana, New Jersey, Ohio), and that no
state requires both AI and computer science for graduation.

For scale: the National Center for Education Statistics puts total public school enrolment from
prekindergarten through grade 12 at 49.6 million in fall 2022, projected to fall to 46.9 million by
fall 2031. That indicator was last updated in May 2024, so it is a measure of scale, not a
current-year count.

Employment evidence, from the Bureau of Labor Statistics Occupational Outlook Handbook: data
scientists had a median annual wage of $112,590 as of May 2024, with employment projected to grow 34
percent from 2024 to 2034 and about 23,400 openings projected each year. Computer and information
research scientists had a median annual wage of $140,910 as of May 2024, with 20 percent projected
growth and about 3,200 annual openings.

The Stargate Project was announced at the White House in January 2025 by OpenAI, SoftBank and Oracle
with Abu Dhabi's MGX, at $100 billion initial funding ramping toward $500 billion over four years,
with the flagship campus in Abilene, Texas on Oracle Cloud Infrastructure. Five further sites were
announced on 23 and 24 September 2025: Shackelford County TX, Dona Ana County NM, Lordstown OH,
Milam County TX, and a Wisconsin site developed by Oracle with Vantage. Stated plainly for parents:
Stargate is data-centre construction, and its direct hiring is electricians, welders and site
operators. It shows where American AI compute is being built. It is not a hiring pipeline for a
teenager learning gradient descent.

## School and university fit

The United States has no national curriculum and no national exam board. Education is controlled by
the fifty states and by roughly 13,000 local school districts. The CSTA K-12 Computer Science
Standards, published by the Computer Science Teachers Association, are the de facto shared reference
that states adapt.

Twelve states require a computer science course to graduate high school, per Code.org's 2025 report:
Alabama, Arkansas, Indiana, Louisiana, Nebraska, Nevada, North Carolina, North Dakota, Rhode Island,
South Carolina, Tennessee and West Virginia, West Virginia being the most recent addition.

The country codes programmes rather than exams, through the NCES Classification of Instructional
Programs. CIP 11.0101 is Computer and Information Sciences, General; CIP 11.0102 is Artificial
Intelligence; CIP 2020 is the current fifth revision. Secondary courses carry additional codes under
the NCES School Codes for the Exchange of Data.

Advanced Placement, run by the College Board, is the closest thing to a national qualification here.
AP Computer Science A is a Java programming course. AP Computer Science Principles is broader and
includes a through-course Create performance task submitted online. Neither is a machine learning
course. The 2026 administration ran 4 to 8 May and 11 to 15 May 2026, with AP Computer Science
Principles on Thursday 14 May 2026 at 12pm local and AP Computer Science A on Friday 15 May 2026 at
12pm local, and the CSP Create performance task deadline of 30 April 2026 at 11:59pm Eastern. The
College Board has published 30 April 2027 for the next Create deadline; the full per-subject 2027
exam grid was not published as of July 2026. The International Baccalaureate Diploma Programme,
including Computer Science at Standard Level and Higher Level, is offered at many US high schools
alongside or instead of AP.

Carnegie Mellon University's Bachelor of Science in Artificial Intelligence, in its School of
Computer Science, lists required high school coursework on its own admission page: 4 years English;
4 years mathematics, which should include at least algebra, geometry, trigonometry, analytic
geometry and elementary functions and preferably calculus; 1 year physics; 2 years chemistry,
biology or computer science; 2 years foreign language; 3 electives. That is a coursework profile,
not a cut-off. The page publishes no minimum GPA, no test-score threshold and no acceptance rate for
the major.

The University of Texas at Austin runs an online Master of Science in Artificial Intelligence of 30
credit hours, structured as 3 hours of required courses plus 27 hours of electives across 10
courses, described by the university as an affordable, advanced degree priced at $10,000 plus fees,
with international student fees and late registration fees possible. Fall applications open 15
December, priority deadline 15 March, final deadline 15 April. Spring applications open 1 June,
priority deadline 1 August, final deadline 1 September.

Georgia Tech's Online Master of Science in Computer Science carries a machine learning
specialisation, is 30 credit hours and typically takes three years. Its prospective-student FAQ
states the GRE is not required and that the preferred qualification is an undergraduate degree in
computer science or a related field, typically mathematics, computer engineering or electrical
engineering, with a cumulative GPA of 3.0 or higher; applicants who do not meet that are evaluated
case by case. Materials include a bachelor's degree from a regionally accredited institution,
transcripts, three recommendation letters submitted online by the recommenders, English proficiency
documentation for international applicants, and misconduct-history disclosure. Tuition is charged
per credit hour at University System of Georgia rates and the FAQ prints no total programme cost.

At both ends of that ladder the binding constraint is mathematical depth, meaning calculus and
linear algebra, not the number of tools a student has used.

## Class times and the American year

| Slot | Pacific | India (July 2026) |
|---|---|---|
| Saturday 11:00am Eastern | 8:00am | 8:30pm Saturday |
| Sunday 12:00pm Eastern | 9:00am | 9:30pm Sunday |
| Tuesday and Thursday | 6:30pm | 7:00am Wednesday and Friday, next day |

There is no national school calendar; start and end dates are set by roughly 13,000 local districts.
New York City Public Schools, the largest district in the country, begins the 2026 to 2027 school
year on Thursday 10 September 2026. Most districts run from mid-August or early September to late
May or June. Thanksgiving is the fourth Thursday of November, which is 26 November 2026, and most
districts close for the Thursday and Friday.

Late April into mid May is AP season, when attendance drops and demand for exam-focused help spikes.
September and January are the two natural intake points. Spring break is a single week in March or
April and is not synchronised nationally, so a US cohort loses different students in different weeks
that month. June to August is the deepest enrolment window and the one stretch when a weekday
morning slot becomes workable. Enrolment does not run in cohorts with a closing date; a student is
placed in the next batch that fits their level in whichever week they arrive.

## Provider facts

- Modern Age Coders, teaching since 2020
- More than 10,000 students across 25+ countries
- Rated 4.9 across 547 Google reviews
- Ages 6 to 67, coding, AI and mathematics
- Live video only, never pre-recorded
- Group $40 a month, one to one $100 a month, first class free
- Contact: [/contact](/contact)
