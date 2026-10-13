---
title: "Coding Classes in Waltham Forest, Walthamstow | Modern Age Coders"
description: "Live online coding, Python, AI and maths classes for Waltham Forest: Walthamstow, Leyton, Leytonstone, Chingford, Highams Park and Wood Street. Ages 6 to 67."
canonical: https://learn.modernagecoders.com/coding-classes-in-waltham-forest-london
source: src/pages/coding-classes-in-waltham-forest-london.html
---
> Live online coding, Python, AI and maths classes for Waltham Forest: Walthamstow, Leyton, Leytonstone, Chingford, Highams Park and Wood Street. Ages 6 to 67.

Skip to contentCourse picks for Waltham Forest

## First courses from Waltham Forest

Picture a Year 2 child in Chingford who collects leaves from Epping Forest walks, a Year 9 pupil in Walthamstow curious about how AI makes decisions, a Year 12 student in Leytonstone choosing biology or computer science, and a tree officer or gardener in Highams Park who knows every species by sight. Each can start with a free lesson.

[![Scratch Coding for Kids course thumbnail](/images/scratch-kids.webp)Ages 6 to 10Scratch Coding for KidsA Scratch guessing game that asks yes-or-no questions to identify a tree, a first decision tree.See the syllabus](/courses/scratch-programming-complete-course)[![Python and AI for Kids course thumbnail](/images/python-kids.webp)Ages 9 to 12Python and AI for KidsFirst Python with real tree records: count each kind and find the tallest and the widest.See the syllabus](/courses/python-ai-kids-masterclass)[![Python for Teens course thumbnail](/images/python-teens.webp)Ages 13 to 18Python for TeensPython for Key Stages 3 to 5, including the information-gain decision tree on this page.See the syllabus](/courses/python-complete-masterclass-teens)[![Data and AI Analytics for Non-Programmers (Excel, Sheets, Power BI) course thumbnail](/images/data-ai-analytics-non-programmers.webp)AdultsData and AI Analytics for Non-Programmers (Excel, Sheets, Power BI)For adults who use or buy AI tools and want to see how a model chooses its questions.See the syllabus](/courses/data-and-ai-analytics-for-non-programmers-course)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Waltham Forest in numbers

## 278,426 residents and 46,396 listed trees

Every figure below is the named organisation's own, or our count from its published data.

| Fact | Figure | Source |
| --- | --- | --- |
| Usual residents, 2021 Census | 278,426 | ONS table TS001 |
| Trees in Waltham Forest on the London tree list | 46,396 | Greater London Authority, November 2025 file |
| Heritage List entries in the borough | 117: 13 Grade II*, 104 Grade II | Historic England data, counted 25 September 2026 |
| Lines at Walthamstow Central | Victoria and Weaver | TfL open data, checked 25 September 2026 |

### William Morris Gallery

The Water House in Lloyd Park, now the William Morris Gallery, is Grade II*; its list entry dates it to 1762.

### A hunting lodge

Queen Elizabeth's Hunting Lodge at Chingford is also Grade II*, as are Walnut Tree House and Chestnuts House.

### Library and cinema

Leytonstone Library and the former ABC Cinema are among the borough's Grade II* entries; Waltham Forest has none at Grade I.

The data

## Six kinds of tree, five measurements each

We kept trees from the six commonest groups that have a height, canopy, girth and age band recorded, and noted whether each stands on a street. That leaves 20,401 trees.

| Kind of tree | Trees |
| --- | --- |
| Cherry | 6,118 |
| Maple | 5,620 |
| Birch | 2,801 |
| Plane | 2,279 |
| Oak | 2,180 |
| Whitebeam | 1,403 |

Cherries are the largest group, so a lazy model that always answers "cherry" is right 29.6% of the time on unseen trees. That is the score to beat. Seventy per cent of the trees are used to build the model and the other thirty per cent are kept back to test it, chosen at random with a fixed seed so anyone can repeat the split. We could not add a library list for the borough: the council's libraries page sent our automated reader an empty challenge, and we never get round such checks.

Signature project

## Growing a decision tree by information gain

At every step the program tries every question it could ask, such as "is the tree taller than 10 metres?", and picks the one that leaves the least uncertainty about the answer.

### 1. Measure uncertainty

Entropy measures how mixed a group is. With six kinds of tree in these proportions it is 2.38 bits: a lot of uncertainty.

### 2. Choose the question

For each possible split, work out how much entropy drops on average. The biggest drop, the information gain, wins. First winner: height at or below 10 metres, a gain of 0.25 bits.

### 3. Repeat and test

Split each group again, deeper and deeper, then score the tree on the trees it has never seen.

| Depth of tree | Right on trees it learned from | Right on unseen trees |
| --- | --- | --- |
| Always guess cherry | - | 29.6% |
| 1 question | 37.2% | 37.2% |
| 3 levels | 45.2% | 45.5% |
| 4 levels | 47.6% | 47.6% |
| 6 levels | 50.7% | 49.7% |
| 12 levels | 59.1% | 51.1% |

The shallow tree reads like common sense: short trees are usually cherries; tall trees on streets are usually planes; tall trees elsewhere are usually oaks. Deeper trees keep improving on the trees they learned from, but barely improve on new ones: at twelve levels the gap between 59% and 51% is the model memorising quirks rather than learning. Some kinds are nearly invisible to it. At four levels it finds 87.5% of the cherries but 24.6% of the maples and not a single whitebeam, because size and position simply do not separate them. A decision tree can only be as good as the questions its data allows it to ask.

### Why build one rather than ask an AI

An AI system can train a decision tree in one line of code and report an accuracy. A learner who has grown one by hand, question by question, knows what that number hides: a baseline of 29.6% to beat, a gap between training and test that signals overfitting, and whole classes the model never gets right. Those are exactly the questions to ask of any AI system that makes decisions about people or places.

Reading a model honestly

## Three things accuracy alone does not tell you

The project ends with learners reporting more than one number.

### Compare with a baseline

A model that is right 47.6% of the time sounds poor until you know that guessing the commonest answer gets 29.6%.

### Watch the gap

When training accuracy races ahead of test accuracy, the model is memorising. Learners stop growing the tree where the gap opens.

### Look class by class

An overall score can hide a group the model always gets wrong, as with whitebeam here. Report recall for every class.

GCSE computer science pupils can follow the yes-or-no questions and the idea of a test set; A-level students can compute entropy and information gain by hand and code the splitting rule. The tree records are the Greater London Authority's; the cleaning, the tree-building, and every accuracy and recall figure are our own, run on 25 September 2026. The GLA, Waltham Forest Council, the William Morris Gallery, Historic England, TfL and the ONS have no connection with Modern Age Coders.

Getting around

## Walthamstow Central and a laptop at home

Walthamstow has Underground and Overground trains. Our lessons start wherever the learner sits down.

### Walthamstow Central

TfL's open data lists the Victoria and Weaver lines at Walthamstow Central.

### Chingford to Leyton

A learner near the forest in Chingford and one in Leyton can share one class from their homes.

### Every learner counted

Groups of fifteen to twenty at one stage mean no learner is the whitebeam of the class, overlooked by the model.

Waltham Forest in London

Waltham Forest is one of London's 32 boroughs. The [London page](/best-coding-class-in-london) covers all of them and the City, adding each page as it is published, including [Redbridge](/coding-classes-in-redbridge-london) to the east and [Hackney](/coding-classes-in-hackney-london), whose page studies trees in a different way.

Learning ladder

## From twenty questions to machine learning

We find the learner's starting point in the free lesson; their school year only helps us guess.

Ages 6 to 10

### Yes-or-no games

Children build guessing games in Scratch that narrow down an answer one question at a time.

[Scratch Coding for Kids](/courses/scratch-programming-complete-course)[Coding for Kids](/courses/kids-coding-blocks-masterclass)Ages 10 to 13

### Sorting by rules

Python that sorts real records into groups with if-statements and counts how often the rules are right.

[Python and AI for Kids](/courses/python-ai-kids-masterclass)[Maths Through Coding](/courses/maths-through-coding)Ages 13 to 18

### Learning from data

Entropy, information gain, test sets and overfitting, a real first model and a strong base for A-level projects.

[Python for Teens](/courses/python-complete-masterclass-teens)[Full Stack Web Development for Teens](/courses/full-stack-web-development-teens-masterclass)Ages 18 to 67

### Questioning AI

Adults learn to read model results critically: baselines, gaps and the groups a model misses.

[Data and AI Analytics for Non-Programmers (Excel, Sheets, Power BI)](/courses/data-and-ai-analytics-for-non-programmers-course)[Python Automation Course](/courses/python-ai-automation-masterclass-college)Coding and AI

## AI tools train models in seconds. Why should a Waltham Forest teenager grow one by hand?

Because the numbers an AI reports mean little until you know how they were made.

Machine learning libraries will fit a decision tree to any spreadsheet instantly and print an accuracy. On Waltham Forest's trees, that number could be 51% or 59% depending on whether you test on new data, and it hides the fact that whitebeams are never recognised at all. A learner who has chosen each split by information gain, watched the training score race ahead of the test score, and looked class by class, can ask the questions that matter of any AI system, including the ones that affect people's lives.

Those habits, compare with a baseline, keep data aside for testing, and check every group, are the core of responsible AI. Tools will keep producing models; people who can judge them will keep being needed.

Waltham Forest looks after tens of thousands of trees. A learner here who can teach a computer to recognise some of them, and explain where it fails, has taken a real first step into artificial intelligence. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

Delivery

## Leytonstone to Chingford, classes live

Across Waltham Forest, a lesson is a video call away.

### Your own table

A laptop or desktop, a headset and a steady broadband connection are the only things a learner needs.

### English school stages

We describe progress in English Key Stages, from early primary to sixth form, naming GCSE and A level where they fit. Lessons are in English.

### A free first session

The first lesson is real teaching and closes with a recommended level and course, with no card details requested.

### Balanced classes

Fifteen to twenty learners at one stage, drawn from across the UK and beyond, so there is usually a convenient evening.

### Two evenings each week

Classes meet twice weekly in the evening in most cases, with agreed pauses for holidays and exams.

### On London time

Teachers are based in India, and every time we send is already in UK time.

A green borough, a matched class

About 278,000 people live in Waltham Forest, and a good class still needs five learners at the same stage free at the same time, so ours draw from far beyond the borough.

Fees

## Fees for Waltham Forest families

A free first lesson, then one monthly fee that is the same in Chingford and Leyton.

First class**USD 0**

A full first lesson with a teacher, free, ending with a recommended level, course and weekly time.

Group tuition**USD 100**

Around eight live lessons each month in a class of fifteen to twenty at one stage.

Private tuition**USD 150**

Around eight live lessons each month, one learner, one teacher.

Waltham Forest families pay in US dollars, like every family outside India, and the site shows no pound prices. Nothing is charged until after the free lesson and until a course and regular slot have been chosen. The pricing page covers pausing, missed lessons and swapping between class and private teaching.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20want%20a%20free%20coding%20class%20for%20a%20learner%20in%20Waltham%20Forest.)Reviews

## Reviews families have left on Google

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

A year group or age, and one thing the learner enjoys, is enough for us to prepare. We could start with a Scratch guessing game, a Python tree counter, or the decision tree project on this page.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Waltham Forest one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20want%20a%20free%20coding%20class%20for%20a%20learner%20in%20Waltham%20Forest.)

Submitted details are used for placement and follow-up.

FAQ

## Waltham Forest families' questions

About the borough, the decision tree project and our lessons.

### How many people live in Waltham Forest?

The 2021 Census counted 278,426 usual residents in the London Borough of Waltham Forest, in ONS table TS001.

### Is the William Morris Gallery a listed building?

Yes. Historic England lists the Water House in Lloyd Park, now the William Morris Gallery, at Grade II*, and dates it to 1762.

### What is a decision tree?

A model that makes a prediction by asking a series of yes-or-no questions, such as whether a tree is taller than ten metres, each answer leading to the next question until it reaches a guess.

### What is information gain?

The drop in uncertainty, measured as entropy in bits, that a question produces. The decision tree picks the question with the biggest gain at each step; here the first is whether the tree is at most ten metres tall.

### How accurate was the model?

On trees it had never seen, a four-level tree was right 47.6% of the time, against 29.6% for always guessing cherry. It found most cherries but no whitebeams, because size and position do not separate them.

### When would Waltham Forest lessons be?

After the free lesson we suggest a class at the right level with room and its regular evening, in UK time; the teacher is in India.

### What does a learner need?

A computer with sound and a steady connection. The decision tree project needs Python and the free London tree list.

### Is there a Modern Age Coders centre in Waltham Forest?

No. There is no Waltham Forest centre and no premises anywhere in the UK, because every lesson is live online. A learner needs a computer with sound and a stable connection, and our phone number is Indian.

### What do coding classes in Waltham Forest cost?

The first lesson is free. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, and one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.

### How are the groups made up?

By level, pace and goals rather than by age or neighbourhood, with fifteen to twenty learners at one stage. Where no group fits the learner's week, one-to-one lessons are offered.

Explore London

## Elsewhere in the capital

Our [London page](/best-coding-class-in-london) lists every borough and the City, with links added as pages go live, such as [Enfield](/coding-classes-in-enfield-london) to the west and [Tower Hamlets](/coding-classes-in-tower-hamlets-london) to the south. A first decision tree leads straight into our [AI and machine learning classes for London learners](/ai-and-machine-learning-classes-in-london), and families comparing the four UK school systems can use the [UK coding page](/coding-classes-in-united-kingdom).

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20want%20a%20free%20coding%20class%20for%20a%20learner%20in%20Waltham%20Forest.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/coding-classes-in-waltham-forest-london*
