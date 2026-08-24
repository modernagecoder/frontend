---
title: "AI and Machine Learning Classes in Canada | Build AI"
description: "Live online AI and machine learning classes for students in Canada, ages 6 to 67. Train real models in Python, not just prompts. From USD 100 a month."
canonical: https://learn.modernagecoders.com/ai-and-machine-learning-classes-in-canada
source: src/pages/ai-and-machine-learning-classes-in-canada.html
---
> Live online AI and machine learning classes for students in Canada, ages 6 to 67. Train real models in Python, not just prompts. From USD 100 a month.

In short

Modern Age Coders teaches AI and machine learning live online across Canada, ages 6 to 67, in a cohort of five to eight or privately. What is taught is model building: Python, the probability and matrix work beneath it, then training and testing models on published Canadian data. Lessons are in English, and because the staff work from India the timetable sits in Canadian mornings and weekends. A group seat is USD 100 a month, billed in US dollars, and the first class is free.

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

Where most Canadian teenagers land. Python and its mathematics, then regression, classification, neural networks, vision and language models. No stage closes until a model is trained and its error stated.

[Open the syllabus](/courses/ai-ml-masterclass-teens)

CA / TEEN / 02

#### Data Science for Teens

Reading a file nobody tidied for you: loading, joining, plotting, catching the row in the wrong units. Most of the wildfire project lives here.

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

Every serious engineering employer puts this in front of a candidate, and it is why a pipeline surviving 39 rows survives 39 million.

[Open the syllabus](/courses/data-structures-algorithms-masterclass-college)

CA / ALL / 06

#### Browse the full catalogue

Mathematics to degree level, plus web, app and game building.

[Open all courses](/courses)

What you actually build

## Fewer fires, more of the country gone: modelling a Canadian fire season

Each country we teach into gets its opening project cut from its own public measurements. Canada gets wildfire. The 2025 season reported fewer fires than 2024 and burned far more land, which breaks a beginner's instinct that more fires must mean more damage. The figures trace back to Canadian Interagency Forest Fire Centre situation reports, each carrying its reporting date.

| Season | Fires reported | Area burned | Figure as of |
| --- | --- | --- | --- |
| 2023 | 6,551 | 184,961 km2, or 18.496 M ha | 6 October 2023 |
| 2024 | 5,686 | 5.378 M ha | 20 November 2024 |
| 2025 | 5,349 | 8.78 M ha | 16 September 2025 |

The fourth column is not decoration. These are snapshots from three different points in three seasons, and treating them as a certified series is the second trap here.

Run the arithmetic before touching a model. 184,961 km2 at 100 hectares per square kilometre gives 18,496,100 hectares, matching the 18.496 million figure. Unit checking is the first hour here.

Here is the comparison the project hangs on. From 2024 to 2025 the number of fires fell about 6 per cent while the area burned rose roughly 63 per cent. What decides how much of Canada burns is not the number of ignitions. It is a handful of extreme fire weather days, and how large a few megafires get.

The target is hectares burned in one province in one season, modelled as log1p of hectares, so one row is one jurisdiction in one fire season. The learner assembles the features rather than downloading them ready made: seasonal mean Fire Weather Index and Drought Code, May to June precipitation anomaly, lightning strike count, fires overwintered from the previous season, and days at preparedness level 4 or 5.

pandasscikit-learn GroupKFoldlog1p target gradient boostingmean absolute error

| Province or territory | Season | Fires | Area burned | Note |
| --- | --- | --- | --- | --- |
| British Columbia | 2023 | 2,293 | 2,840,104 ha | stated as the final tally |
| Alberta | 2023 | 1,088 | 2,222,900 ha | end of fire season |
| Alberta | 2024 | not stated | 775,000 ha | against 2.2 million in 2023 |
| Manitoba | 2024 | not stated | 266,000 ha | season total |
| Northwest Territories | 2024 | not stated | 1.7 M ha | by the end of October |

Three rows have no published fire count. The cell says so rather than carrying a zero, because a zero is a claim and a blank is an absence.

1. #### Assemble the panel by hand, and normalise the snapshots

  One row per province or territory per fire season, built from the situation reports rather than a tidy download, with the as-of date of every area figure in its own column. Then keep only end of season figures, or fix one calendar cutoff for every row. The three national rows above are dated 6 October, 20 November and 16 September, so scraping the latest total per year sets a mid-September number against a late-November one and invents a decline that is really a publishing schedule.
2. #### Engineer the fire weather features, and mark which are knowable in advance

  For each feature, write down whether it is known at the moment a forecast is wanted. Fire count is not: it is final only once the season ends, and it barely tracks the target anyway.
3. #### Plot the target, then plot it again

  Hectares burned is violently right skewed. Apply log1p and plot again, then write one sentence saying why. On raw hectares one season owns nearly all the squared error, and the model optimises for that year alone.
4. #### Build the baseline that every later model has to beat

  Predict each province's own historical median hectares. That is the floor, and any model failing to beat it is not a model. The baseline goes in the results table so it cannot be dropped.
5. #### Fit under GroupKFold, grouped by fire season

  Gradient boosting, with groups set to the season year. Report mean absolute error on the log scale and back transformed into hectares, because a reader can argue with hectares and not with a log-axis decimal.
6. #### Rerun it wrong on purpose, and write up the gap

  Do step five again with a plain random split and record the inflated score. Canadian fire seasons are correlated across the continent: 2023 was catastrophic in British Columbia at 2,840,104 hectares and Alberta at 2,222,900 hectares at once, on the same drought and heat. Under a random split, British Columbia 2023 sits in training while Alberta 2023 sits in test, so the model learns nothing about fire weather. It learns to recognise a row from 2023, which it reads off the training set. The grouped score is lower and it is the honest one. When rows share a shock, split on the shock.

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
- Notice one bad season hit two provinces at once, and split on that
- Choose a model knowing what it assumes on your behalf
- Report the error in hectares, so a reader with no statistics can argue
- Put it in front of a season it has never seen and accept the lower score
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

8.78 M ha

Burned in the 2025 Canadian fire season as of 16 September 2025, the season behind the opening project

School and university

## No national curriculum, no federal ministry, and two funnels that read more than an average

### Ontario, where computing has course codes

Education in Canada is within provincial jurisdiction and the curriculum is overseen by the province, so a live online school sells into thirteen systems rather than one. Ontario has the tidiest labels: ICS2O, Introduction to Computer Studies, Grade 10, Open; then ICS3U and ICS3C, the Grade 11 university and college preparation courses; then ICS4U and ICS4C, their Grade 12 pair.

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

## Canadian mornings and weekends, because the after-school hour lands in the Indian night

Canada spans six time zones, while India sits at UTC plus 5 hours 30 minutes in every month and keeps no daylight saving, so the gap moves twice a year. In July 2026, Toronto, Ottawa and Montreal are 9 hours 30 minutes behind India; Winnipeg 10 hours 30 minutes, Calgary and Edmonton 11 hours 30 minutes, Vancouver 12 hours 30 minutes, Halifax 8 hours 30 minutes and St. John's 8 hours. In winter, Toronto is 10 hours 30 minutes behind and Vancouver 13 hours 30 minutes. Saskatchewan and Yukon never move.

Saturday 09:00 to 10:30 ET

Toronto time, 18:30 to 20:00 the same day in India. Our default cohort slot, and the easiest to staff properly.

Sunday 10:30 to 12:00 ET

Toronto time, 20:00 to 21:30 the same day in India. The unhurried slot, and the one parents most often sit in on.

Saturday 08:00 to 09:30 PT

Vancouver time, 20:30 to 22:00 the same day in India. Built for British Columbia, Alberta and the Yukon, not converted from an Eastern slot.

### What a session is

An hour and a half of live teaching with the same person each week, who arrives knowing where the student stopped. Both screens stay visible, so a mistake is corrected while it is still being typed. Groups run five to eight, or one to one for a learner who wants the syllabus bent to a goal.

Homework is a thing to build, never a worksheet, and a question at nine in the evening reaches the teacher who set it rather than a queue. We will not sell a Canadian weekday evening, and the reason is arithmetic: 7:00 PM in Toronto is 4:30 the next morning in India, and 7:00 PM in Vancouver is 7:30. Nobody teaches well at either hour. Enrolment stays open all year.

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

Live forecast data presented as an application, the closest cousin of the fire season work above.

by Krish

Fees

## What this costs a Canadian family, in plain US dollars

Payment is monthly. Nothing is charged to join, nothing commits a family for a year, and the first class carries no fee. Fees are a flat USD 100 a month for a group seat and USD 150 for one to one, billed in US dollars everywhere outside India.

Free first class

USD 0

No card needed

- Taught by a teacher, not run by a salesperson
- Used to place the learner at the right level
- You sit through it, then decide

Book it

Group batch

USD 100

a month, billed in US dollars

- Five to eight students, one teacher, every week
- Live video, never a recording
- Weekly build tasks and teacher review
- Certificate on completion

Start here

One to one

USD 150

a month, billed in US dollars

- Private teaching at the learner's own pace
- Suited to Grade 11 and 12 years, and to adults with few free hours
- Syllabus rebuilt around the goal you name

Enquire

One honest note. The price itself does not move, but the card is billed in US dollars, so the Canadian dollar figure on a statement follows your bank's rate on the day rather than any number we could print here.

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

No, and we will not imply otherwise. This is not an Ontario Ministry of Education credit course, it carries no ministry course code, and it will not appear on a transcript. What it produces is evidence: a model trained on public Canadian data, validated honestly and written up. That is what a student puts into Waterloo's Admission Information Form, or the supplemental application U of T St. George lists as required. Neither form can be filled in with an average.

### How does this sit next to ICS3U and ICS4U?

It runs in parallel and depends on neither. The stated prerequisite for ICS4U is Introduction to Computer Science, Grade 11, University Preparation, which is ICS3U, so an Ontario student who did not take Grade 11 computer science has no in-school route into the Grade 12 course. Our teens track has no such gate, and it reaches ground the Ontario sequence does not: training a model, choosing a validation scheme, reporting an error somebody else can check.

### My child is in Secondaire V or at CEGEP in Quebec. Which class is the right one?

The college and adult cohort, not a teen one. Quebec secondary school ends after Secondary V, which is Grade 11, and Quebec is the only province treating Grade 12 as part of the tertiary level of education. A 17 year old in Montreal is therefore usually already at CEGEP, on an academic programme of about two years or a professional one of three, working toward the Diploma of College Studies that Quebec universities require. We place that student with university students and working professionals.

### What time are classes in Vancouver, Toronto and Regina, and does the time change?

We sell Canadian mornings and weekends and not weekday evenings, because our teachers are in India and 7:00 PM in Toronto is 4:30 the following morning there. Three slots work cleanly: Saturday 09:00 to 10:30 Eastern, Sunday 10:30 to 12:00 Eastern, and Saturday 08:00 to 09:30 Pacific. India holds at UTC plus 5 hours 30 minutes and never moves its clocks, so the gap changes when Canada changes, in November and again in March, and we rebuild the timetable both times. Saskatchewan and Yukon never shift, so Regina, Saskatoon and Whitehorse keep one offset all year.

### Will this help with the Canadian Computing Competition or the Euclid?

Partly, and we would rather draw the line than blur it. The Canadian Computing Competition is organised by the Centre for Education in Mathematics and Computing at the University of Waterloo, with Junior and Senior divisions; the top 20 Senior competitors advance to the Canadian Computing Olympiad and the top four are selected for the Canadian IOI team. Those are algorithm and mathematics contests rather than machine learning contests, so the course that overlaps is Data Structures and Algorithms. Waterloo also asks applicants to write either the Canadian Senior Mathematics Contest or the Euclid to qualify for Faculty of Mathematics entrance scholarships.

### What does it cost in Canadian dollars?

A group seat is USD 100 a month and private one to one teaching is USD 150 a month, billed in US dollars everywhere outside India. We do not publish a Canadian dollar price list; your bank converts the charge at its own rate on the day. Billing is monthly and the first class is free.

### Is there a route from this to Cohere, Mila, Vector or Amii?

There is, and it starts at a Canadian university rather than an American one. Cohere is headquartered in Toronto and was founded in 2019 by Aidan Gomez, Ivan Zhang and Nick Frosst, all three of whom attended the University of Toronto. Mila in Montreal was founded in 1993 by Yoshua Bengio, Vector in Toronto in March 2017 with Geoffrey Hinton as Chief Scientific Advisor, and Amii in Edmonton in 2002. Waterloo co-op students alternate school and work every four months, so employers here take students and not only graduates. What we add is the portfolio that makes a student worth taking.

### Are the classes taught in French?

No. Teaching, materials, code and written feedback are in English, and we would rather say that plainly than accept a booking from a francophone family expecting otherwise. Machine learning is documented in English, so the vocabulary a student leaves with is the one the field uses. It is still English, and a family in Quebec or a francophone community elsewhere should weigh that before booking rather than after.

Start here

## One free class, and then you decide

Give us a number and a mentor returns the call inside Canadian hours rather than ours. The free session is a lesson and not a pitch: a teacher runs it as they would any other, and uses it to decide which band and course the learner should enter. Nothing is charged to enrol and no card is touched beforehand.

Prefer to look around first? Read [how we teach](/how-we-teach), browse the [full course catalogue](/courses), or see what students have built in [Student Labs](/student-labs).

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
