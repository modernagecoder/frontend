---
title: "AI and Machine Learning Classes in Canada | Build AI"
description: "Live online AI and machine learning classes for students in Canada, ages 6 to 67. Train real models in Python, not just prompts. Group batch or 1-on-1, first class free."
canonical: https://learn.modernagecoders.com/ai-and-machine-learning-classes-in-canada
source: src/pages/ai-and-machine-learning-classes-in-canada.html
---
> Live online AI and machine learning classes for students in Canada, ages 6 to 67. Train real models in Python, not just prompts. Group batch or 1-on-1, first class free.

In short

Modern Age Coders teaches AI and machine learning live online across Canada, ages 6 to 67, in a cohort of fifteen to twenty or privately. What is taught is model building: Python, the probability and matrix work beneath it, then training and testing models on published Canadian data. Lessons are in English, in groups on weekdays or weekends, or one to one at a time the learner sets. The monthly fee is shown on this page in the currency you are billed in, and the first class is free.

The catalogue

## Three bands, twelve programmes, and no shared syllabus between them

An eight year old in Halifax and a second year CEGEP student in Laval are not one course at two speeds. Reading load, mathematics and projects differ, so the programmes are written separately.

I

### Children, ages 6 to 12

Code they type themselves, and a straight answer about what a model is doing

CA / KIDS / 01

#### Python and AI for Kids

Real Python in the first lesson, typed by the child. Drawings, then a small game, then a program that works out a rule from examples.

[Open the syllabus](/courses/python-ai-kids-masterclass)

CA / KIDS / 02

#### AI Literacy for Kids

How to treat an AI answer as a claim rather than a fact: where it came from, what it cannot know, and how to check it.

[Open the syllabus](/courses/ai-literacy-for-kids-course)

CA / KIDS / 03

#### Vibe Coding for Kids

The child asks a tool for something and code comes back. The lesson starts there: run it, find the wrong part, explain the repair.

[Open the syllabus](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)II

### Teenagers, ages 13 to 18

From a blank file to a trained model with its error written down

CA / TEEN / 01

#### AI and Machine Learning for Teens

The core teen programme. Python and its mathematics, then regression, classification, neural networks, vision and language models. No stage closes until a model is trained and its error stated.

[Open the syllabus](/courses/ai-ml-masterclass-teens)

CA / TEEN / 02

#### Data Science for Teens

Reading a file nobody tidied for you: loading, joining, plotting, catching the row in the wrong units. Most of the Montreal rink project lives here.

[Open the syllabus](/courses/data-science-course-for-teens-python-data)

CA / TEEN / 03

#### Python for Teens

Two years from a blank editor to functions, files, APIs and tested programs, for a teenager starting cold.

[Open the syllabus](/courses/python-complete-masterclass-teens)

CA / TEEN / 04

#### Vibe Coding for Teens

Real web and Python projects built with an assistant at the learner's elbow, read back line by line before anything is accepted. Publish the link, then answer for it.

[Open the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)III

### University students and working professionals

Depth, generative systems, and everything that happens after the notebook

CA / PRO / 01

#### AI and Machine Learning Masterclass

Supervised and unsupervised methods, deep networks, regularisation, and validation chosen for the data. It ends where short courses stop, at deployment.

[Open the syllabus](/courses/ai-ml-masterclass-complete-college)

CA / PRO / 02

#### Generative AI: LLMs, RAG and Agents

What happens when a language model is trained and adapted, how retrieval anchors it to your own documents, and how to fence an agent so it fails loudly.

[Open the syllabus](/courses/complete-generative-ai-masterclass-college)

CA / PRO / 03

#### Python and AI Automation

For professionals in Toronto, Ottawa, Calgary or Vancouver who want the applied half first: Python turned on the reports already on the desk.

[Open the syllabus](/courses/python-ai-automation-masterclass-college)

CA / PRO / 04

#### Data Science Masterclass

SQL and statistics, feature construction and modelling, then the step nobody teaches: writing it up so a non-specialist can audit it.

[Open the syllabus](/courses/data-science-complete-masterclass-college)

CA / PRO / 05

#### Data Structures and Algorithms

Every serious engineering employer puts this in front of a candidate, and it is why a pipeline that copes with 190,102 rink-days still copes at a hundred times that.

[Open the syllabus](/courses/data-structures-algorithms-masterclass-college)

CA / ALL / 06

#### Browse the full catalogue

Mathematics to degree level, plus web, app and game building.

[Open all courses](/courses)

What you actually build

## Will the rink be open tomorrow? Twenty-three Montreal winters and one leakage trap

Each country we teach into gets its opening project cut from its own public measurements. Canada gets the outdoor rink. The Ville de Montréal publishes the condition reports filed on its outdoor rinks since 21 December 2001, open or closed, cleared, flooded or resurfaced, under a Creative Commons Attribution 4.0 licence that allows commercial reuse. A beginner's instinct is to hand the model every column in the file. The column that scores best turns out to be one written down after the answer was already known.

| Winter | Reports with a status | Rink names reporting | Marked open |
| --- | --- | --- | --- |
| 2001-02 | 4,759 | 135 | 30.7% |
| 2010-11 | 8,016 | 135 | 65.9% |
| 2013-14 | 11,824 | 239 | 70.1% |
| 2019-20 | 8,448 | 239 | 64.5% |
| 2024-25 | 9,353 | 239 | 92.9% |
| 2025-26 | 108 | 45 | 83.3% |

The first and last rows are traps. The file opens on 21 December, part way through a winter, and 2025-26 holds 108 reports so far. Neither is a winter, so both leave the panel before any model sees them.

Count before you model. Our download has 355,183 rows, the same total the city's data portal gives for the file, across 19 boroughs and 306 distinct rink name strings. In 85,277 rows the OUVERT column is blank. A blank is not a closed rink. Filling those cells with zero would invent 85,277 closures that nobody reported.

Here is the comparison the project hangs on. Of the 77,036 skating rink reports where RESURFACÉ is 1, 76,869 also say the rink is open: 99.78 per cent. DÉBLAYÉ, the snow cleared flag, behaves the same way, open in 118,877 of 119,164 reports. Give a model those columns and it looks close to perfect, because each one is filed in the same report as the answer. Nobody knows tonight whether a rink will be resurfaced tomorrow.

The target is OUVERT for one rink on one day, a plain yes or no. One row is a rink-day, using the last report filed that day, from 1 November to 31 March, across the 23 complete winters from 2002-03 to 2024-25: 190,102 rows in our panel. The learner builds the features: rink type read from the code at the end of each name, borough, days counted from 1 December, day of the week, the calendar date, and whether the same rink was open yesterday. Daily temperature is the obvious missing piece. It is not in this file, so the learner finds a source, reads its licence and joins it by date.

pandasscikit-learn GroupKFoldbalanced accuracy gradient boostingleakage audit

| Code | What the names in the file say | Rink names | Reports with a status | Marked open | Open when RESURFACÉ is 1 |
| --- | --- | --- | --- | --- | --- |
| PSE | Patinoire avec bandes, rinks with boards | 117 | 93,455 | 75.3% | 99.78% |
| PPL | Patinoire de patin libre, free skating | 83 | 69,874 | 66.5% | 99.74% |
| PP | Decorative rinks, ice paths and skating rings | 39 | 34,186 | 58.1% | 99.90% |

Source: [Patinoires, historique des conditions](https://donnees.montreal.ca/dataset/patinoires-historique), Ville de Montréal, licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Every figure in this section is our own count from the file as downloaded on 22 October 2026. Rink names are distinct strings in the file, not a verified count of rinks. Some rinks are spelled two ways and a few carry a doubled code, so a cleaning pass comes first, and the counts will move when it is done.

1. #### Assemble the panel, and decide what a blank means

  Sort by timestamp and keep the last report per rink per day. Drop 2001-02 and 2025-26, keep 1 November to 31 March, and leave blank OUVERT rows out of the target rather than coding them as closed. Then face the coverage jump: 135 rink names report through 2010-11 and 239 from 2013-14. That is the file covering more rinks, not Montreal skating more. A model given the year as a number will read it as a change in skating, so mark it, and score the model with and without the winters before 2013-14.
2. #### Engineer the features, and mark which are knowable in advance

  For every column, write down whether it is known the evening before. Rink type, borough, date, day of the week and yesterday's status: yes. DÉBLAYÉ, ARROSÉ and RESURFACÉ for the same day: no. They sit in the same report as OUVERT, and the table above shows how closely they track it.
3. #### Look at the class balance, then choose the metric

  Across the panel 70.6 per cent of rink-days are open, and the share moves by winter, from 60.7 per cent in 2011-12 to 93 per cent in 2024-25. A model that always answers open scores 93 per cent accuracy on 2024-25 and a balanced accuracy of exactly 0.5, because it never gets a closed day right. So the project reports balanced accuracy: the average of the hit rate on open days and the hit rate on closed days.
4. #### Build the two baselines every later model has to beat

  Baseline one predicts open when more than half the rinks in the training winters were open on that day of winter. In our run it scores 0.578. Baseline two says tomorrow will look like today, falling back to baseline one when yesterday has no report, and it scores 0.892. Both go in the results table so neither can be dropped, and the second is far harder to beat than it looks.
5. #### Fit under GroupKFold, grouped by winter

  Gradient boosting with groups set to the winter, five folds, so every test fold is whole winters the model has never seen. Calendar and rink features alone reach 0.675. Adding yesterday's status reaches 0.912, which beats tomorrow-looks-like-today by 0.020. That margin, not the headline number, is the result the write-up has to defend.
6. #### Rerun it wrong on purpose, and write up the gap

  Repeat step five with a plain shuffled split. Calendar features climb from 0.675 to 0.711, and the model with yesterday from 0.912 to 0.928. Every rink in the city sits under the same cold snap and the same thaw. Shuffle the rows and one rink's 14 January lands in test while dozens of other rinks' 14 January sit in training, so the model reads the day's answer off its neighbours. Then put the three maintenance flags back under the honest split and watch the score reach 0.989. Both inflations have one cause: the model was shown something it could not know when the forecast was wanted. When rows share a day, split on the winter. When a column is written with the answer, leave it out.
7. #### Write it up so someone outside the class can check it

  One page: the question, the source and its licence, which rows were kept and which dropped and why, both baselines, the grouped score with its fold spread, the shuffled score labelled as inflated, and the three columns left out with the reason. It closes with what would change the answer, such as a temperature join or another winter as open as 2024-25.

***Python · the honest split and the shuffled one**python*

```
# rink_split.py (ours): the same model, scored two ways
import pandas as pd
from sklearn.ensemble import HistGradientBoostingClassifier
from sklearn.model_selection import GroupKFold, KFold, cross_val_score

panel = pd.read_csv("rink_days.csv")      # one row per rink per day
for col in ["rink_type", "borough"]:
    panel[col] = panel[col].astype("category")
known_tonight = ["rink_type", "borough", "day_of_winter",
                 "weekday", "date_ord", "open_yesterday"]
X, y = panel[known_tonight], panel["open"]

model = HistGradientBoostingClassifier(random_state=0)
by_winter = cross_val_score(model, X, y, groups=panel["winter"],
                            cv=GroupKFold(n_splits=5),
                            scoring="balanced_accuracy")
shuffled = cross_val_score(model, X, y,
                           cv=KFold(n_splits=5, shuffle=True, random_state=0),
                           scoring="balanced_accuracy")
print(round(by_winter.mean(), 3), round(shuffled.mean(), 3))
```

On the city's file, downloaded 22 October 2026, our full version of this prints 0.912 for the grouped split and 0.928 for the shuffled one. The grouped number is lower, and it is the one to publish.

The distinction

## Prompting a model and training one are separate trades

Both are taught here, in that sequence, and we name which holds its value. One is a set of habits attached to a product that will be redesigned. The other is arithmetic.

#### Using AI tools

- Ask in words, read what comes back, ask again in different words
- Learn the buttons of whichever assistant a school or employer bought this year
- You are finished when the answer sounds right
- Very little survives a redesigned interface or a change in price
- A determined learner exhausts most of it in a term
- Taught here anyway, so a student can catch a confident wrong answer

#### Building AI

- Open a public file, count the rows, and work out what the columns mean
- Notice that one cold snap reaches every rink in the city on the same day, and split on the winter
- Choose a model knowing what it assumes on your behalf
- Report the score next to a tomorrow-looks-like-today baseline, so a reader with no statistics can argue
- Put it in front of a winter it has never seen and accept the lower score
- Underneath sit probability, matrices and code, none of which expire

Canada makes that argument easy, because the building side is domestic: a language model company valued at roughly $7 billion in September 2025 runs from Toronto, and three federally funded institutes sit in Montreal, Toronto and Edmonton.

Why now, in Canada

## A minister with AI in the job title, and three institutes that have been hiring since 2017

Canadian AI policy runs on two named tracks, roughly eight years apart. The first is the Pan-Canadian Artificial Intelligence Strategy of 2017, supported by federal funding of Can $125 million and delivered by CIFAR. Its cornerstone, the Canada CIFAR AI Chairs Program, benefits from funding of Can$86.5 million over five years, and a second phase launched in June 2022.

The second track is administrative. In November 2024 the federal government announced the creation of the Canadian Artificial Intelligence Safety Institute as part of a 2.4 billion CAD federal AI investment package. On 13 May 2025 Evan Solomon assumed office as Minister of Artificial Intelligence and Digital Innovation under Prime Minister Mark Carney, a post recorded as newly created. Very few countries put AI in a cabinet title.

The three institutes funded under that strategy are the part a student can walk into. Mila, the Quebec AI Institute in Montreal, was founded in 1993 by Universite de Montreal professor Yoshua Bengio and had approximately 1000 students and researchers and 100 faculty members as of 2022. The Vector Institute in Toronto, at the Schwartz Reisman Innovation Campus, was founded in March 2017 with a combined total of $200 million CAD from private and public sectors, with Geoffrey Hinton as Chief Scientific Advisor. Amii began in Edmonton in 2002 as the Alberta Ingenuity Centre for Machine Learning.

None of that would matter to a fifteen year old if the employers were elsewhere. They are not. Cohere is headquartered in Toronto, with offices in Montreal, New York City, San Francisco, London, Paris and Seoul. It was founded in 2019 by Aidan Gomez, Ivan Zhang and Nick Frosst; all three attended the University of Toronto, and Gomez co-authored the transformer paper at Google Brain, where Frosst was also a researcher. Funding ran from a $40M Series A in 2021 to a further $100M in September 2025, at roughly $7 billion, and CNBC reported revenue of $240 million in February 2026.

Read that as a parent rather than as an investor. The people who built a multi-billion dollar language model company came out of a Canadian undergraduate programme, and they built it here.

The second employer to know is Shopify in Ottawa, founded in 2006, with 7,600 employees and US$11.6 billion of revenue in 2025. In January 2026 it announced the Universal Commerce Protocol, an open standard designed to allow artificial intelligence agents to connect and transact with merchants. Agent facing commerce infrastructure, built in Canada, is a live hiring area.

Vector's founding sponsors make the same point from the industry side: they included Uber, Google and Shopify, with 30 companies committing a combined $80 million over 10 years. Around it sits co-op, which rotates undergraduates into paid work every four months.

Can $125 million

Federal funding supporting the Pan-Canadian Artificial Intelligence Strategy of 2017

13 May 2025

Evan Solomon assumed office as Minister of Artificial Intelligence and Digital Innovation

$240 million

Cohere revenue reported by CNBC in February 2026, from a company run out of Toronto

190,102

Rink-days in the opening project's panel, 23 Montreal winters, our count of the Ville de Montréal's CC BY 4.0 file downloaded 22 October 2026

School and university

## No national curriculum, no federal ministry, and two funnels that read more than an average

### Ontario, where computing has course codes

Education in Canada is within provincial jurisdiction and the curriculum is overseen by the province, so a live online school sells into thirteen systems rather than one. Ontario has the tidiest labels: ICD2O, Digital Technology and Innovations in the Changing World, Grade 10, Open; then ICS3U and ICS3C, the Grade 11 university and college preparation courses; then ICS4U and ICS4C, their Grade 12 pair.

The prerequisite chain matters more than the list. ICS4U requires ICS3U, so a student who skipped Grade 11 computer science cannot arrive in Grade 12 and take the university preparation course. That one line is why an out of school track needs to exist. The diploma around it is 30 credits, 18 compulsory, including 3 in Mathematics with at least one in Grade 11 or 12, plus 40 hours of community service and the Ontario Secondary School Literacy Test. The OSSLT is run by the Education Quality and Accountability Office, sat in Grade 10, and written every year in either October to December or March to May, with the literacy course OLC 4O available in Grade 12 to students who do not pass.

### Quebec, which is on a different ladder entirely

This is the part providers outside Canada get wrong. Grade 12 is the final grade in every provincial secondary curriculum except Quebec, whose secondary schools end after Secondary V, which is Grade 11, and Quebec is currently the only province treating Grade 12 as part of the tertiary level of education. After Secondary V students go to CEGEP, where academic programmes are typically two years and professional programmes three, and a Diploma of College Studies is required for university admission. So a 17 year old in Montreal is a college student, not a teen batch student.

### British Columbia, where computing sits inside design

In British Columbia computing lives within Applied Design, Skills and Technologies, a K to 12 curriculum area, and Computer Studies 10 is an ADST Grade 10 course. Its Big Ideas are stated as user needs and interests drive the design process; social, ethical, and sustainability issues are influenced by design; and complex tasks require different technologies and tools at different stages. That framing leaves the modelling to somebody else.

### The contest that crosses every provincial line

The Canadian Computing Competition is organised by the Centre for Education in Mathematics and Computing at the University of Waterloo, with a Junior division for grades 9 and 10 and a Senior division for grades 11 and 12. It is national, in a country where schooling is not.

### Waterloo, where the form matters as much as the average

Computer Science at Waterloo sits inside the Faculty of Mathematics. It asks for six Grade 12 U and M courses including Advanced Functions, Calculus and Vectors, any Grade 12 U English and one other 4U course, with Grade 11 U Introduction to Computer Science recommended. Admission is by individual selection from the low to mid-90s, and the Admission Information Form is required. Waterloo strongly encourages the Canadian Computing Competition, the Canadian Senior Mathematics Contest or the Euclid, and an applicant must write the CSMC or Euclid to qualify for Faculty of Mathematics entrance scholarships. On co-op, students alternate school and work every four months and graduate with up to two years of paid experience.

### Toronto, where St. George asks for a supplemental application

Computer Science at the University of Toronto runs at all three campuses and requires an Ontario Secondary School Diploma with six 4U or M subjects including English: ENG4U or EAE4U, MCV4U for Calculus and Vectors and MHF4U for Advanced Functions, with MDM4U, Mathematics of Data Management, recommended. The degree is the HBSc as Major, Minor or Specialist, under campus codes TAD for St. George, TMX for Mississauga and TXC for Scarborough. St. George lists a supplemental application as required.

### What a parent should take from those two paragraphs

Both flagships want Grade 12 calculus and advanced functions, so the mathematics cannot be repaired in a final term, and both attach a non-transcript component: the Admission Information Form at Waterloo, the supplemental application at St. George. An average is a number the school produces about a student; a trained model with a written up validation scheme is something the student produced, and only one of the two can fill a form. Note too that MDM4U, the course Toronto recommends, is the statistics and probability one.

How the classes run

## Pick the days and the hour: a weekday or weekend group, or 1-on-1 on your own schedule

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Every class time we confirm is written in the family's own zone, and Canada's clocks look different from this autumn, so the table below is the 2026 version rather than the one many families remember.

Weekdays

Weekday times are on offer for a group of fifteen to twenty, with the same teacher each time. Tell us the days that fit the learner's week and we work from those.

Weekends

Weekend times on request, for families whose weekdays are already full of school, sport and shifts. The syllabus and the weekly build task do not change with the day.

1-on-1, your hours

Private teaching at a time the learner sets, moved when the term changes. The usual choice in Grade 11 and 12, and for adults fitting study round work.

| Where | Cities | Winter | Summer | What changed |
| --- | --- | --- | --- | --- |
| Newfoundland | St. John's | UTC-3:30 | UTC-2:30 | Nothing: clocks still change twice a year |
| Nova Scotia, New Brunswick, Prince Edward Island, Labrador (most) | Halifax, Moncton, Charlottetown | UTC-4 | UTC-3 | Nothing: clocks still change twice a year |
| Ontario (most) and Quebec (most) | Toronto, Ottawa, Montreal | UTC-5 | UTC-4 | Nothing: clocks still change twice a year |
| Manitoba | Winnipeg, Brandon | UTC-5 | UTC-5 | Clocks do not go back on 1 November 2026, so the province stays on UTC-5 |
| Saskatchewan | Regina, Saskatoon | UTC-6 | UTC-6 | No seasonal change |
| Alberta | Calgary, Edmonton | UTC-6 | UTC-6 | The Official Time Act sets official time at 6 hours behind UTC |
| British Columbia (most) | Vancouver, Victoria, Kelowna | UTC-7 | UTC-7 | Permanent since the spring change on 8 March 2026 |
| Yukon | Whitehorse | UTC-7 | UTC-7 | Permanent since 2020 |

Sources: the British Columbia government release of 2026 on permanent time, Manitoba's news release on clocks not reverting on 1 November, and Alberta's Official Time Act. For the Northwest Territories, Nunavut and the parts of Ontario, Quebec and British Columbia that keep another clock, we confirm the offset with the family.

### What a session is

An hour and a half of live teaching with the same person each week, who arrives knowing where the student stopped. Both screens stay visible, so a mistake is corrected while it is still being typed. Groups run fifteen to twenty, or one to one for a learner who wants the syllabus bent to a goal.

Homework is a thing to build, never a worksheet, and a question sent between classes reaches the teacher who set it rather than a queue. Enrolment stays open all year.

### What the new clocks mean for a family

Three things are true from 1 November 2026. Winnipeg and Toronto read the same time all winter, then Toronto moves an hour ahead again on 14 March 2027. Calgary, Edmonton, Regina and Saskatoon share one clock all year. Vancouver sits one hour behind them, every month. So Vancouver is two hours behind Toronto in winter and three in summer, and a group that mixes provinces can drift by an hour against itself twice a year. We reconfirm each family's local class time in the weeks of both changes.

### The Canadian year, which is thirteen calendars

There is no national school calendar to plan against, because education is provincial and term dates are often set board by board, so we do not publish a fake one. What holds everywhere is that the school year ends in June. Term dates, break weeks and examination sessions we confirm with each family, because a break week in one province is a teaching week in the next.

Two facts we do work to. Ontario's OSSLT is written every year in either October to December or March to May, so we avoid stacking assessment-heavy work onto Grade 10 Ontario students then. And a Waterloo co-op student alternates between school and work every four months, so a college-age learner may be in Waterloo, Toronto or San Francisco depending on the term. Cohorts open after Labour Day and after New Year.

Student work

## Student builds you can open in a new tab right now

Four applications follow. All run at public addresses, all were written by students here, and none has been taken down. Use one, then judge the teaching by what a learner finished. More sit in [Student Labs](/student-labs).

![NutriLife AI nutrition coach project screenshot](/images/projects/nutrilife.webp)

AI and ML

#### NutriLife, an AI nutrition coach

A coach that reads a day of meals and steers the user toward a target, carried from sketch to public link by its author.

by Bhavya · [Open the live project](https://nutrilife-bhavya.lovable.app)

![Misti AI chatbot for maths and coding screenshot](/images/projects/misti.webp)

AI and ML

#### Misti, an AI chatbot for maths and coding

A student-written tutoring bot answering maths and programming questions, on a domain of its own.

by Harshit · [Open the live project](https://misti.modernagecoders.com)

![GuardianX AI internet safety assistant screenshot](/images/projects/guardianx.webp)

AI and ML

#### GuardianX, an AI safety assistant

Software that helps a young person notice when a situation online has stopped being safe, shipped by a student.

by Vivaan · [Open the live project](https://guardianx-cybersaver.lovable.app)

![SkyCast weather app screenshot](/images/projects/skycast.webp)

Data and forecasting

#### SkyCast, a weather app

Live forecast data presented as an application, and the natural partner to the rink project above: daily weather is the join that model is missing.

by Krish

Fees

## What this costs a Canadian family, month by month

Payment is monthly. Nothing is charged to join, nothing commits a family for a year, and the first class carries no fee. Each fee below is shown in the currency you are billed in.

Free first class

Free

No card needed

- Taught by a teacher, not run by a salesperson
- Used to place the learner at the right level
- You sit through it, then decide

Book it

Group batch

$100 USD

a month

- Fifteen to twenty students, one teacher, every week
- Live video, never a recording
- Weekly build tasks and teacher review
- Certificate on completion

Start here

One to one

$150 USD

a month

- Private teaching at the learner's own pace
- Suited to Grade 11 and 12 years, and to adults with few free hours
- Syllabus rebuilt around the goal you name

Enquire

One note on billing. The fee is charged in the currency printed beside it, so if your card uses another currency, the figure on your statement follows your bank's rate on the day.

What families say

## Six of the 547 reviews, and the number they average to

Left on Google by families who pay us. We neither draft these nor commission them, and the average across all 547 is 4.9.

★★★★★

"The one step solution for my son. Modern Age Coders make learning coding so simple that kids love it. The teachers explain complex concepts clearly with practical exercises and interactive content."

Ria Mukherjee

Parent

★★★★★

"Modern Age Coders has been a game-changer for me. I struggled to grasp IT concepts and coding before joining, but their classes transformed everything. I can now confidently write complex programs with ease."

Samriddha Mondal

Student

★★★★★

"One of the most wonderful education centres out there. Education is not limited to school syllabus but focuses on skill development. Learning here has been a wonderful journey and still continuing."

Vansh Agarwal

Student

★★★★★

"My child Dhairya is really enjoying the Modern Age Coders classes. This is his first online class and he eagerly looks forward to it. I can already see his improvement, and the teachers are very cooperative."

Sonam Oswal

Parent of Dhairya

★★★★★

"Modern Age Coders have wonderful teachers who teach in a clear, easy and practical way. The teacher boosts students' confidence and inspires them to learn without hesitation."

Sonu Goyal

Parent

★★★★★

"Coding classes here make learning very interesting and conceptual. The teachers teach us in a very easy-to-understand and efficient manner."

Arush Poddar

Student

Questions from Canada

## What families from Toronto to Vancouver ask first

### Does this count toward my child's OSSD?

No, and we will not imply otherwise. We teach alongside the student's school course and do not grant Ontario credits. This is not an Ontario Ministry of Education credit course, it carries no ministry course code, and it will not appear on a transcript. What it produces is evidence: a model trained on public Canadian data, validated honestly and written up. That is what a student puts into Waterloo's Admission Information Form, or the supplemental application U of T St. George lists as required. Neither form can be filled in with an average.

### How does this sit next to ICS3U and ICS4U?

It runs in parallel and depends on neither. The stated prerequisite for ICS4U is Introduction to Computer Science, Grade 11, University Preparation, which is ICS3U, so an Ontario student who did not take Grade 11 computer science has no in-school route into the Grade 12 course. Our teens track has no such gate, and it reaches ground the Ontario sequence does not: training a model, choosing a validation scheme, reporting an error somebody else can check.

### My child is in Secondaire V or at CEGEP in Quebec. Which class is the right one?

The college and adult cohort, not a teen one. Quebec secondary school ends after Secondary V, which is Grade 11, and Quebec is the only province treating Grade 12 as part of the tertiary level of education. A 17 year old in Montreal is therefore usually already at CEGEP, on an academic programme of about two years or a professional one of three, working toward the Diploma of College Studies that Quebec universities require. We place that student with university students and working professionals.

### What time are classes in Vancouver, Toronto and Regina, and does the time change?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Every time we confirm is written in your own zone. The clocks need more care than usual this year. British Columbia has stayed on UTC-7 since 8 March 2026, Alberta and Saskatchewan sit on UTC-6 all year, and Manitoba stays on UTC-5 from 1 November 2026 instead of falling back. Ontario and Quebec still change, UTC-5 in winter and UTC-4 in summer. So Vancouver is two hours behind Toronto in winter and three in summer, while Regina is one hour behind Toronto in winter and two in summer. We reconfirm local class times in the weeks the eastern clocks change.

### Will this help with the Canadian Computing Competition or the Euclid?

Partly, and we would rather draw the line than blur it. The Canadian Computing Competition is organised by the Centre for Education in Mathematics and Computing at the University of Waterloo, with Junior and Senior divisions; the top 20 Senior competitors advance to the Canadian Computing Olympiad and the top four are selected for the Canadian IOI team. Those are algorithm and mathematics contests rather than machine learning contests, so the course that overlaps is Data Structures and Algorithms. Waterloo also asks applicants to write either the Canadian Senior Mathematics Contest or the Euclid to qualify for Faculty of Mathematics entrance scholarships.

### What does it cost, and in which currency?

The monthly fee for a group seat and for private one to one teaching is shown in the fees section of this page, in the currency you are billed in. If your card uses a different currency, your bank converts the charge at its own rate on the day. Billing is monthly and the first class is free.

### Who builds AI in Canada, and are you connected with them?

Several well-known AI organisations are based in Canada. Cohere is headquartered in Toronto and was founded in 2019 by Aidan Gomez, Ivan Zhang and Nick Frosst, all three of whom attended the University of Toronto. Mila in Montreal was founded in 1993 by Yoshua Bengio, Vector in Toronto in March 2017 with Geoffrey Hinton as Chief Scientific Advisor, and Amii in Edmonton in 2002. Waterloo co-op students alternate school and work every four months, so employers here take students and not only graduates. We are not connected with any of these organisations and offer no route into them. What we teach is the groundwork such work assumes: Python, the mathematics under a model, and a validated project the student can explain line by line.

### Are the classes taught in French?

No. Teaching, materials, code and written feedback are in English, and we would rather say that plainly than accept a booking from a francophone family expecting otherwise. Machine learning is documented in English, so the vocabulary a student leaves with is the one the field uses. It is still English, and a family in Quebec or a francophone community elsewhere should weigh that before booking rather than after.

Start here

## One free class, and then you decide

Give us a number and a mentor returns the call inside Canadian hours. The free session is a lesson and not a pitch: a teacher runs it as they would any other, and uses it to decide which band and course the learner should enter. Nothing is charged to enrol and no card is touched beforehand.

Prefer to look around first? Read [how we teach](/how-we-teach), browse the [full course catalogue](/courses), or see what students have built in [Student Labs](/student-labs). For a narrower start, there are separate Canada pages for [AI classes for kids](/ai-classes-for-kids-in-canada), [vibe coding and AI agents](/vibe-coding-and-ai-agents-classes-in-canada) and [Python classes](/python-classes-in-canada).

## Keep exploring Modern Age Coders

### Coding classes in nearby places

- [Coding Classes in Washington State](/coding-classes-in-washington)
- [Online Coding Classes in Alberta](/coding-classes-in-alberta)
- [Coding Classes in Virginia](/coding-classes-in-virginia)
- [Online Coding Classes in British Columbia](/coding-classes-in-british-columbia)
- [Online Coding & AI Classes in the USA](/coding-classes-in-united-states)
- [Coding Classes in California](/coding-classes-in-california)
- [Online Coding Classes in Maryland](/coding-classes-in-maryland)
- [Coding & AI Classes in Canada](/coding-classes-in-canada)
- [Coding Classes in New Jersey](/coding-classes-in-new-jersey)

### Learn more

- [Build Machine Learning Models in Python](/build-machine-learning-models-in-python)
- [How to Train Machine Learning Models](/how-to-train-machine-learning-models)
- [Python for Machine Learning](/python-for-machine-learning)
- [Master AI, ML, Python & Java: Go Deeper](/master-ai-ml-python-java)

### Free resources

- [AI & Machine Learning Tutorial: Basics to Deep Learning](/resources/ai-and-machine-learning)
- [AI Ethics, Responsible AI, and Career Roadmap](/resources/ai-and-machine-learning/ai-ethics-and-career-guide)
- [Deep Learning with TensorFlow and Keras](/resources/ai-and-machine-learning/deep-learning-with-tensorflow-keras)
- [Generative AI](/resources/ai-and-machine-learning/generative-ai-and-diffusion-models)

### From the blog

- [AI & Machine Learning Guides](/blog/topic/ai)
- [How to Teach Kids AI at Home: A Safe 2026 Parent Guide](/blog/how-to-teach-kids-ai-at-home)
- [How AI and Automation Are Transforming Small and Medium Businesses](/blog/ai-automation-transforming-small-medium-businesses)
- [What Type of Data is Generative AI Most Suitable For? A Complete Guide](/blog/what-type-of-data-is-generative-ai-most-suitable-for)

### Start here

- [Real projects built by Modern Age Coders students](/student-labs)
- [Browse every live course at Modern Age Coders](/courses)

[Chat with us](https://wa.me/919123366161?text=Hi%2C%20I'm%20interested%20in%20learning%20more%20about%20your%20courses!)

---

*Canonical: https://learn.modernagecoders.com/ai-and-machine-learning-classes-in-canada*
