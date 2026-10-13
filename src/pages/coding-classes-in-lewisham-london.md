---
title: "Coding Classes in Lewisham, Catford, Deptford | Modern Age Coders"
description: "Live online coding, Python, AI and maths classes for Lewisham: Catford, Deptford, Forest Hill, Sydenham, Brockley, Lee and New Cross. Ages 6 to 67."
canonical: https://learn.modernagecoders.com/coding-classes-in-lewisham-london
source: src/pages/coding-classes-in-lewisham-london.html
---
> Live online coding, Python, AI and maths classes for Lewisham: Catford, Deptford, Forest Hill, Sydenham, Brockley, Lee and New Cross. Ages 6 to 67.

Skip to contentCourse picks for Lewisham

## Courses Lewisham learners start with

Picture a Year 3 child in Ladywell who splashes in puddles and watches the drains, a Year 9 pupil in Catford who wants to know how AI sees pictures, a Year 12 student in Forest Hill choosing between geography and computer science, and an engineer in Lee who works on drainage. Each can begin with a free lesson.

[![Scratch Coding for Kids course thumbnail](/images/scratch-kids.webp)Ages 6 to 10Scratch Coding for KidsA Scratch river that fills when it rains and drains away slowly afterwards, with a gauge to watch.See the syllabus](/courses/scratch-programming-complete-course)[![Python and AI for Kids course thumbnail](/images/python-kids.webp)Ages 9 to 12Python and AI for KidsFirst Python with real readings: the wettest hour, the highest flow, and how long the river takes to react.See the syllabus](/courses/python-ai-kids-masterclass)[![Python for Teens course thumbnail](/images/python-teens.webp)Ages 13 to 18Python for TeensPython for Key Stages 3 to 5, including the learned rain-to-river kernel on this page.See the syllabus](/courses/python-complete-masterclass-teens)[![Data and AI Analytics for Non-Programmers (Excel, Sheets, Power BI) course thumbnail](/images/data-ai-analytics-non-programmers.webp)AdultsData and AI Analytics for Non-Programmers (Excel, Sheets, Power BI)For adults who want to understand how AI models learn patterns, using data they can picture.See the syllabus](/courses/data-and-ai-analytics-for-non-programmers-course)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Lewisham in numbers

## 300,553 residents and 367 listed entries

Every figure below is published by the body named beside it, or counted by us from its open data.

| Subject | Number | Taken from |
| --- | --- | --- |
| How many people lived here in March 2021 | 300,553 | the Census, ONS table TS001 |
| Listed buildings and structures we counted | 367, two of them Grade I | Historic England list data, 25 September 2026 |
| River Ravensbourne gauge at Catford, opened | 1977 | Environment Agency Hydrology |
| Services at Lewisham station | DLR, Southeastern and Thameslink | TfL open data, checked 25 September 2026 |

### Two at Grade I

Lewisham's Grade I entries are the Church of St Paul in Deptford and Boone's Chapel in Lee.

### Deptford's past

The former Master Shipwright's House and a former office building of the Royal Dockyard at Deptford are Grade II*, as are several houses in Albury Street.

### Museum and mansion

The Horniman Museum, Beckenham Place Mansion, Stone House and the Lee Public Library building are among the Grade II* entries.

The council's branches page lists Catford, Downham and Lewisham libraries and the Library at Deptford Lounge, with community libraries in Blackheath Village, Crofton Park, Forest Hill, Grove Park, Manor House, New Cross, Sydenham and Torridon Road.

The data

## Rain at Deptford, river at Catford

Environment Agency readings come every fifteen minutes, timed in Greenwich Mean Time. We add them up into hours: rain as a total, flow as an average.

| Item | Figure |
| --- | --- |
| Rain at Deptford in complete hours of 2023 | 641.6 mm |
| Highest hourly flow at Catford | 11.12 cubic metres a second, 03:00 GMT on 20 October 2023 |
| Flow readings flagged "Suspect", January to June | 15,842 |
| Flow readings flagged "Good", July to December | all of them |

Two honest problems shape the project. First, the Environment Agency marks every flow reading from January to May 2023 as "Suspect", so we use only the Good readings from July to December: three months to learn from, three to test on. Second, the Deptford rain gauge sits just outside Lewisham's boundary, to the north of Catford, and a single gauge cannot see every shower over the whole catchment. Learners write both caveats down before fitting anything.

Signature project

## Teaching a computer how the river answers rain

The model says: this hour's flow is a small base amount plus a weighted sum of the rain in each of the last 48 hours. The computer learns the 48 weights.

### 1. A sliding window

For every hour, line up the rain from the previous 48 hours. Multiply each by its weight and add. Slide one hour on and repeat. That sliding sum is a convolution.

### 2. Fit with a rule

Choose the weights that match July to September most closely, with none allowed below zero, a method called non-negative least squares.

### 3. Test honestly

Predict October to December, which the model never saw, and score it with the Nash-Sutcliffe efficiency: 1 is perfect, 0 is no better than guessing the average.

| Measure | Value |
| --- | --- |
| Hours after rain when the river responds most | 2 |
| Hours until half the response has passed | 2 |
| Hours until 90% has passed | 13 |
| Score on the months it learned from | 0.68 |
| Score on October to December, unseen | 0.55 |
| Score for always guessing the average | -0.10 |

The learned kernel is a quick peak two hours after rain and a long, shallow tail: the Ravensbourne is a fast, urban river. On unseen months the model explains more than half the variation in flow, far better than guessing. Letting weights go negative, which makes no physical sense, produced 14 negative weights out of 48 and a slightly worse test score, so the rule helped. The biggest test, 20 October 2023, shows the limit: the model predicted about 5 cubic metres a second at the peak hour, against 11 measured. One gauge outside the catchment simply did not see all the rain that fell upstream.

### Why build this rather than ask an AI

An AI assistant can explain convolution in a sentence. A learner who has learned 48 weights from real rain and river data, forbidden negative ones for a physical reason, and watched the model miss a flood because the data was incomplete, understands what every convolutional AI system is doing and where it fails. That understanding, knowing the data behind a model, is exactly what people need to judge AI outputs sensibly.

From rivers to pictures

## The same idea inside image AI

A convolutional neural network slides small learned kernels across an image instead of across time. The river project is the one-dimensional version.

### One dimension

Here the kernel slides along hours: 48 weights turning a rain record into a flow record.

### Two dimensions

In image AI, small grids of weights slide across rows and columns, learning to respond to edges, corners and textures.

### Same caution

In both, a kernel can only learn what the data shows it. Missing or unreliable data gives a confident but wrong model.

GCSE geography and computer science pupils can follow the rain, the river and the sliding sum; A-level students can set up the least squares problem, add the non-negativity rule and compare scores. The readings are the Environment Agency's, from its hydrology service, with their quality flags; the model, weights and scores are ours, computed on 25 September 2026. We act independently: the Environment Agency, Lewisham Council, Historic England, TfL and the ONS neither run nor endorse Modern Age Coders.

Getting around

## Trains at Lewisham, lessons in the living room

The borough's stations are busy; our classroom is wherever the learner's laptop is.

### Lewisham

The DLR, Southeastern and Thameslink all serve Lewisham, according to the station record in TfL open data.

### Deptford to Downham

A learner near the Thames in Deptford and one in Downham in the south can share a class from home.

### A steady flow of lessons

Unlike the Ravensbourne, our timetable does not flood or run dry: the same two evenings every week.

Lewisham in London

Lewisham is one of London's 32 boroughs. The [London page](/best-coding-class-in-london) lists all of them and the City, linking each as it is published, including [Greenwich](/coding-classes-in-greenwich-london) to the east and [Bromley](/coding-classes-in-bromley-london) to the south, where the Ravensbourne rises.

Learning ladder

## From puddles to learned kernels

The free lesson shows where a learner really is, and that is where we start.

Ages 6 to 10

### Cause and effect

Children build Scratch scenes where one event causes another after a delay, like rain filling a river.

[Scratch Coding for Kids](/courses/scratch-programming-complete-course)[Coding for Kids](/courses/kids-coding-blocks-masterclass)Ages 10 to 13

### Time series

Python that reads timed readings, adds them into hours and draws rain and flow on one chart.

[Python and AI for Kids](/courses/python-ai-kids-masterclass)[Maths Through Coding](/courses/maths-through-coding)Ages 13 to 18

### Learned kernels

Convolution, least squares with constraints and honest testing, a direct route to understanding modern AI.

[Python for Teens](/courses/python-complete-masterclass-teens)[Full Stack Web Development for Teens](/courses/full-stack-web-development-teens-masterclass)Ages 18 to 67

### How AI learns

Adults see how models learn weights from data, and why data quality decides what they can learn.

[Data and AI Analytics for Non-Programmers (Excel, Sheets, Power BI)](/courses/data-and-ai-analytics-for-non-programmers-course)[Python Automation Course](/courses/python-ai-automation-masterclass-college)Coding and AI

## AI models learn kernels. Why should a Lewisham teenager learn one by hand?

Because seeing a model learn from a river makes every AI model less mysterious.

Image recognition, speech recognition and many forecasting tools rest on the same operation as this project: a small set of learned weights slid along data. A learner who has fitted 48 of them to the Ravensbourne, insisted they stay positive, and seen the model fail on a flood the data could not see, has understood the essentials of convolutional AI and its biggest weakness. They will not mistake a confident output for a correct one.

The habits reach further still: check the quality flags, test on data the model has not seen, and make physical sense of what was learned. Machines will keep learning weights; people who understand what those weights mean will keep being needed.

The Ravensbourne answers every shower in Lewisham within a couple of hours. A learner here who can teach a computer that pattern has taken a real first step into AI. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

Delivery

## Brockley to Sydenham, live online

In any part of Lewisham, class starts as soon as the call connects.

### Learn at home

Learners join from home with a laptop or desktop, headphones and a reliable broadband connection.

### English school stages

We map progress onto English Key Stages, from Key Stage 1 to sixth form, and mention GCSE and A level where they apply. Teaching is in English.

### First lesson free

Lesson one teaches something real and ends with the teacher's view on level and course; no card is requested.

### Fifteen to twenty per class

A class draws together learners at one stage from all over the country and beyond, and that breadth keeps a good evening slot within reach.

### Two evenings weekly

A pair of evening sessions each week is the norm, with gaps for half terms, holidays and exam fortnights arranged in advance.

### UK time

Reminders arrive with the Lewisham time already worked out, even though your teacher is several time zones east.

A big borough, a well-matched class

About 300,000 people live in Lewisham, and a good class still needs five learners at one stage free together, so ours draw on learners far beyond it.

Fees

## Fees for Lewisham families

From Deptford to Downham the arrangement is identical: lesson one free, then a flat monthly fee.

First class**USD 0**

A full first lesson with a teacher, free, ending with a recommended level, course and time.

Group tuition**USD 100**

About eight live lessons a month in a class of fifteen to twenty at one stage.

Private tuition**USD 150**

About eight live lessons a month, one to one.

Every family outside India is billed in US dollars; that is why you will not find a pound sign anywhere on this site. Payment only begins after the free lesson, when a course and a regular evening have been fixed. For pauses, missed sessions or a switch to one-to-one, see the pricing page.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20want%20a%20free%20coding%20class%20for%20a%20learner%20in%20Lewisham.)Reviews

## Six families, reviewing us publicly on Google

Rated 4.9 across 547 Google reviews. These are real reviews, reproduced as written.

★★★★★

"The one step solution for my son. Modern Age Coders make learning coding so simple that kids love it. The teachers explain complex concepts clearly with practical exercises and interactive content."

Ria Mukherjee

Parent

★★★★★

"Modern Age Coders has been a game-changer for me. I struggled to grasp IT concepts and coding before joining, but their classes transformed everything. I can now confidently write complex programs with ease."

Samriddha Mondal

Student

★★★★★

"One of the most wonderful education centres out there. Education is not limited to school syllabus but focuses on skill development."

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

"I highly recommend this computer coding class! The teachers are incredibly knowledgeable and passionate about coding."

Ritu Kedia

Parent

Free placement class

## Book a free lesson

An age, or a year group, plus one thing the learner loves is plenty for us to go on. We might start with a Scratch rain-and-river scene, a Python chart of real readings, or the kernel project on this page.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Lewisham one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20want%20a%20free%20coding%20class%20for%20a%20learner%20in%20Lewisham.)

Submitted details are used for placement and follow-up.

FAQ

## Lewisham questions

About the borough, the river project and our classes.

### How many people live in Lewisham?

The 2021 Census counted 300,553 usual residents in the London Borough of Lewisham, in ONS table TS001.

### Where do the river and rain readings come from?

From the Environment Agency's hydrology service: the flow station on the River Ravensbourne at Catford, which opened in 1977, and the rain gauge at Deptford, just outside the borough boundary. Both publish a reading every fifteen minutes.

### What is a unit hydrograph?

A curve showing how a river's flow responds, hour by hour, to a single burst of rain. Here the computer learns it as 48 weights; the Ravensbourne's response peaks about two hours after rain and is 90% complete within 13 hours.

### What does this have to do with AI?

The model slides a set of learned weights along the rain record and adds them up: a convolution. Convolutional neural networks, used in image recognition, do the same thing across the rows and columns of a picture.

### Why did the model miss the October 2023 flood peak?

It predicted about 5 cubic metres a second where 11 were measured. The only rain gauge used is outside the catchment, so it could not see all the rain that fell upstream. The model can only learn from what its data shows.

### When would a Lewisham learner have lessons?

Once lesson one has shown the level, we name a class with a free seat and its regular evening, quoted in London time; the teacher works from India.

### What does a learner need?

Just an ordinary home computer that plays sound, on broadband that stays connected. The river project needs Python and free downloads from the Environment Agency.

### Is there a Modern Age Coders centre in Lewisham?

No. There is no Lewisham centre and no premises anywhere in the UK, because every lesson is live online. A learner needs a computer with sound and a stable connection, and our phone number is Indian.

### What do coding classes in Lewisham cost?

The first lesson is free. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, and one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.

### How are the groups made up?

By level, pace and goals rather than by age or neighbourhood, with fifteen to twenty learners at one stage. Where no group fits the learner's week, one-to-one lessons are offered.

Explore London

## Across London

The [London page](/best-coding-class-in-london) gathers every borough and the City, with each page linked as it goes live, such as [Ealing](/coding-classes-in-ealing-london), whose page studies another River Brent gauge, and [Lambeth](/coding-classes-in-lambeth-london). Anyone hooked by learned kernels will find the next chapter in our [machine learning lessons for London](/ai-and-machine-learning-classes-in-london), while the [UK coding page](/coding-classes-in-united-kingdom) helps families match an English school year to its Scottish, Welsh or Northern Irish equivalent.

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20want%20a%20free%20coding%20class%20for%20a%20learner%20in%20Lewisham.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/coding-classes-in-lewisham-london*
