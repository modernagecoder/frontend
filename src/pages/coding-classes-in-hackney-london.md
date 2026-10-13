---
title: "Coding Classes in Hackney and Shoreditch | Modern Age Coders"
description: "Live online coding, Python, AI and maths classes for Hackney: Shoreditch, Dalston, Stoke Newington, Clapton, Homerton and Stamford Hill. Ages 6 to 67."
canonical: https://learn.modernagecoders.com/coding-classes-in-hackney-london
source: src/pages/coding-classes-in-hackney-london.html
---
> Live online coding, Python, AI and maths classes for Hackney: Shoreditch, Dalston, Stoke Newington, Clapton, Homerton and Stamford Hill. Ages 6 to 67.

Skip to contentCourse picks for Hackney

## Courses to begin with in Hackney

Think of a Year 2 child in Stoke Newington who collects conkers and leaves, a Year 8 pupil in Dalston who likes Pokémon-style collecting games, a Year 13 student in Clapton headed for biology or ecology, and a volunteer in Homerton who counts birds and trees on weekends. Each of them can start with a free lesson.

[![Scratch Coding for Kids course thumbnail](/images/scratch-kids.webp)Ages 6 to 10Scratch Coding for KidsA Scratch collecting game where new kinds of tree turn up less and less often, and a counter of how many you have found.See the syllabus](/courses/scratch-programming-complete-course)[![Python and AI for Kids course thumbnail](/images/python-kids.webp)Ages 9 to 12Python and AI for KidsFirst Python with a real list: count each kind of tree and find the most common.See the syllabus](/courses/python-ai-kids-masterclass)[![Python for Teens course thumbnail](/images/python-teens.webp)Ages 13 to 18Python for TeensPython for Key Stages 3 to 5, including accumulation curves and the Chao1 estimate on this page.See the syllabus](/courses/python-complete-masterclass-teens)[![Data and AI Analytics for Non-Programmers (Excel, Sheets, Power BI) course thumbnail](/images/data-ai-analytics-non-programmers.webp)AdultsData and AI Analytics for Non-Programmers (Excel, Sheets, Power BI)For adults who survey, audit or catalogue things and want to estimate what their sample has missed.See the syllabus](/courses/data-and-ai-analytics-for-non-programmers-course)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Hackney in numbers

## 259,146 residents and 33,085 listed trees

Every figure below is published by the organisation named, or counted by us from its open data.

| Subject | Number | Publisher or source |
| --- | --- | --- |
| People living in Hackney on Census day, March 2021 | 259,146 | Office for National Statistics |
| Trees in Hackney on the London tree list | 33,085 | Greater London Authority, November 2025 file |
| Heritage List entries inside the borough | 552: 8 Grade I, 30 Grade II*, 514 Grade II | Historic England data, counted 25 September 2026 |
| Council libraries | 9 | Hackney Council, read 25 September 2026 |

### Churches at Grade I

Six of Hackney's eight Grade I entries are churches or church buildings, including St Leonard in Shoreditch, St Matthias, St Michael, St Chad and St Columba with its vicarage.

### A tower on its own

The old tower of the former Church of St Augustine is listed at Grade I in its own right.

### A museum

The building the list names as the Geffrye Museum completes Hackney's Grade I entries.

Hackney Council runs libraries at Clapton, Dalston CLR James, Hackney Central, Homerton, Shoreditch, Stamford Hill, Stoke Newington and Woodberry Down, and lists a community library service too.

The data

## Cleaning the list before counting it

Before counting species, learners have to decide what counts as one. The list is honest about what it does not know.

| How the tree is recorded | Trees | Example |
| --- | --- | --- |
| Named to species | 21,719 | Platanus hispanica, London Plane |
| Named only to genus | 11,181 | Prunus, cherry of some kind |
| Recorded as unknown | 185 | Unknown Tree Species |

A third of Hackney's trees are named only to genus: "a cherry", "a lime", "a maple". Counting "Prunus" as a species would be wrong, because it might hide several. So learners keep only the 21,719 trees named to species, and find 229 species among them. The most common by far is the London Plane, 2,981 trees or 13.7% of the species-named total, followed by silver birch, sycamore, ash and field maple. Most records are the council's own, with a few hundred each from Transport for London and the body that looks after the Olympic Park area.

The London list covers boroughs very unevenly, with over 100,000 trees for one borough and around a thousand for another, so this project never compares Hackney with anywhere else. It is a study of one list and what it can tell us.

Signature project

## Estimating the species nobody has recorded

Learners draw a species accumulation curve, then test a formula that estimates what the survey missed.

### 1. Sample and count

Pick 100 trees at random and count the species; then 500, 1,000, 10,000. Repeat each size 50 times and average. The curve rises fast, then flattens.

### 2. Singletons matter

Species seen exactly once, and exactly twice, are the clue. Many singletons means many rare species, and probably more that were never seen at all.

### 3. Chao1

The estimate is the number observed, plus the number of singletons squared, divided by twice the number of doubletons. It is designed as a lower bound.

| Trees sampled | Species found, on average | Chao1 estimate from that sample |
| --- | --- | --- |
| 1,000 | 130 | 172 (145 to 204 in 90% of samples) |
| 2,000 | 157 | 195 (172 to 226) |
| 5,000 | 189 | 217 (198 to 238) |
| All 21,719 | 229 | 255 |

On the full list there are 24 species represented by a single tree and 11 by exactly two, which lifts the estimate to about 255: perhaps two dozen more species out there than the list names, planted in private gardens, or hidden among the trees recorded only to genus. The small-sample test is the sobering part. From 1,000 trees, Chao1 estimates 172 species, yet the full list already contains 229. The formula is honest about being a lower bound, and learners see exactly how low it can be when a sample is small.

### Why this is a lesson AI cannot shortcut

Ask an AI how many tree species grow in Hackney and it will produce a number, perhaps confidently. A learner who has built the accumulation curve and tested Chao1 knows that every such number depends on how much was looked at, what counted as a species, and which estimator was used, and that some estimators always err on the low side. The same reasoning is used for rare words in a language, unseen bugs in software and undiscovered species in the ocean.

Doing it properly

## Three decisions learners write down first

Choices made before counting shape every answer that follows.

### What is a species?

Records named only to genus are set aside, and the number set aside is reported, not hidden.

### Random, repeated

Each sample size is drawn 50 times with a fixed random seed, so anyone can rerun the curve and get the same result.

### Say what it estimates

Chao1 estimates species among trees like these, on lists like this. It says nothing about gardens, parks or trees never surveyed.

GCSE biology and maths students can follow sampling, counting and the curve; A-level students can derive why singletons and doubletons carry the information and compare Chao1 with other estimators. The tree records are the Greater London Authority's, compiled from the bodies that maintain the trees; the cleaning, sampling, curves and estimates are ours, computed on 25 September 2026. Modern Age Coders works independently of the GLA, Hackney Council, Transport for London, Historic England and the ONS.

Getting around

## Hackney Central, the Overground and a quiet room

Much of Hackney is served by the Overground rather than the Tube. For our lessons, a good connection of a different kind is what counts.

### Hackney Central

TfL's open data lists the Mildmay line at Hackney Central.

### Stamford Hill to Shoreditch

A learner at the northern tip of the borough and one near Shoreditch can share a class without a single journey.

### No one left unrecorded

In groups of fifteen to twenty at one stage, the teacher knows every learner by name and by progress.

Hackney among London's boroughs

Hackney is one of London's 32 boroughs. The [London page](/best-coding-class-in-london) covers every borough and the City, linking each page as it goes live, including [Newham](/coding-classes-in-newham-london) to the east and [Camden](/coding-classes-in-camden-london) to the west.

Learning ladder

## From leaf collecting to estimating the unseen

Where a learner starts depends on what they show us in the free lesson; a school year only hints at it.

Ages 6 to 10

### Collect and count

Children make collecting games in Scratch and notice that new items get rarer the more they find.

[Scratch Coding for Kids](/courses/scratch-programming-complete-course)[Coding for Kids](/courses/kids-coding-blocks-masterclass)Ages 10 to 13

### Tallies in Python

Python dictionaries that count each kind of tree and find the most and least common.

[Python and AI for Kids](/courses/python-ai-kids-masterclass)[Maths Through Coding](/courses/maths-through-coding)Ages 13 to 18

### Sampling and estimation

Random sampling, accumulation curves and Chao1 on a real public list, an excellent biology, geography or computing project.

[Python for Teens](/courses/python-complete-masterclass-teens)[Full Stack Web Development for Teens](/courses/full-stack-web-development-teens-masterclass)Ages 18 to 67

### Surveys that know their limits

Adults learn to estimate what a survey or audit missed, and to say how uncertain that estimate is.

[Data and AI Analytics for Non-Programmers (Excel, Sheets, Power BI)](/courses/data-and-ai-analytics-for-non-programmers-course)[Python Automation Course](/courses/python-ai-automation-masterclass-college)Coding and AI

## AI can count anything. Why should a Hackney teenager learn to estimate what was never counted?

Because every real dataset is incomplete, and the missing part is often what matters.

AI tools can tally a list in a moment. What they will not volunteer is that a third of this list is recorded only to genus, that the count depends on how many trees you look at, and that the standard estimate of unseen species undershoots badly on small samples. A learner who has run the curve and the estimator themselves knows to ask those questions of any count, including counts produced by AI.

Estimating the unseen runs through ecology, security testing, quality control and language technology. Machines will keep producing counts. People who understand what a count leaves out will keep being needed.

Hackney's streets hold more than 30,000 trees and at least 229 kinds of them. A Hackney learner who can estimate how many more are out there is doing real science on their own doorstep. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

Delivery

## Dalston to Hackney Wick, lessons live

From any corner of Hackney, a lesson starts the moment the video call does.

### Learn where you are

All that is needed is a laptop or desktop, headphones and an internet connection steady enough for video.

### English Key Stages

Parents hear about progress in the vocabulary of a Hackney school report: which Key Stage, and, for older learners, how it links to GCSE or A level. Every lesson is taught in English.

### The first lesson is free

Genuine teaching with a teacher, finishing with a suggested level and course, and no request for card details.

### Classes by level

Classmates share a stage rather than a postcode: five to ten of them, from anywhere in the UK or beyond, which keeps a reasonable evening hour available.

### Twice a week

A standard week has two evening lessons; the class takes breaks for school holidays and exam season once everyone has agreed.

### UK times only

Invitations and reminders show London time, even though your teacher is working from India.

A dense borough, a matched class

Around 259,000 people live in Hackney, and a good class still needs five learners at the same stage free at the same time, so our classes draw from far beyond it.

Fees

## Fees for Hackney families

Nothing for lesson one; afterwards a single monthly fee that does not vary between Shoreditch and Stamford Hill.

First class**USD 0**

A full first lesson with a teacher, free, ending with a recommended level, course and time.

Group tuition**USD 100**

About eight live lessons a month in a class of fifteen to twenty at one stage.

Private tuition**USD 150**

About eight live lessons a month, one to one with a teacher.

Fees for Hackney, like everywhere outside India, are set in US dollars, which is why no pound figures appear anywhere on the site. Money only changes hands once the free lesson is over and a course and a regular slot have been agreed. The pricing page explains pauses, missed lessons and switching between group and private lessons.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20want%20a%20free%20coding%20class%20for%20a%20learner%20in%20Hackney.)Reviews

## Reviews families gave us on Google

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

An age or school year and one interest help us plan. Lesson one might be a Scratch collecting game, a Python tree tally, or the species project on this page.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Hackney one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20want%20a%20free%20coding%20class%20for%20a%20learner%20in%20Hackney.)

Submitted details are used for placement and follow-up.

FAQ

## Hackney families' questions

About the borough, the tree project and how our lessons work.

### How many people live in Hackney?

The 2021 Census counted 259,146 usual residents in the London Borough of Hackney, in ONS table TS001.

### Where does the tree data come from?

From the Greater London Authority's list of trees maintained by local authorities and other public bodies, published on the London Datastore. The November 2025 file has 33,085 entries for Hackney.

### What is the most common tree in the list?

The London Plane, Platanus hispanica: 2,981 trees, or 13.7% of the trees named to species. Silver birch, sycamore, ash and field maple come next.

### What is the Chao1 estimate?

A formula for estimating how many species exist, including unseen ones, from the number observed and the numbers seen exactly once and exactly twice. For Hackney's list it gives about 255, against 229 species named.

### Why did Chao1 guess too low on small samples?

It is designed as a lower bound, and a small sample contains few of the rarer species. From 1,000 trees it estimated about 172 species, but the full list already names 229.

### When do Hackney learners have lessons?

Once the free lesson has placed the learner, we name a class at that level with a seat available and its fixed weekly evening, written in UK time; the teacher is in India.

### What equipment is needed?

A computer with sound and a reliable connection. The tree project needs Python and one free download from the London Datastore.

### Is there a Modern Age Coders centre in Hackney?

No. There is no Hackney centre and no premises anywhere in the UK, because every lesson is live online. A learner needs a computer with sound and a stable connection, and our phone number is Indian.

### What do coding classes in Hackney cost?

The first lesson is free. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, and one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.

### How are the groups made up?

By level, pace and goals rather than by age or neighbourhood, with fifteen to twenty learners at one stage. Where no group fits the learner's week, one-to-one lessons are offered.

Explore London

## More boroughs, more data

The [London page](/best-coding-class-in-london) brings every borough and the City together, with a link to each page once published, such as [Enfield](/coding-classes-in-enfield-london) and [Greenwich](/coding-classes-in-greenwich-london). Sampling and estimation are a short step from machine learning, taught in our [classes for London learners](/ai-and-machine-learning-classes-in-london); a family relocating within Britain can check equivalent school years on the [UK coding page](/coding-classes-in-united-kingdom).

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20want%20a%20free%20coding%20class%20for%20a%20learner%20in%20Hackney.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/coding-classes-in-hackney-london*
