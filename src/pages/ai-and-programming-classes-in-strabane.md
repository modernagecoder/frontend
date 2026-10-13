---
title: "AI and Programming Classes in Strabane | Ages 6 to 67"
description: "Live online AI, programming, Python and vibe coding lessons for Strabane, Ballycolman, Lisnafin and Sion Mills learners, aged 6 to 67. First lesson free."
canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-strabane
source: src/pages/ai-and-programming-classes-in-strabane.html
---
> Live online AI, programming, Python and vibe coding lessons for Strabane, Ballycolman, Lisnafin and Sion Mills learners, aged 6 to 67. First lesson free.

Skip to contentStrabane course picks

## Strabane courses in thinking, Python and AI

Match a course to age and interest; every one begins with a free live lesson, booked without card details.

[![Problem Solving and Computational Thinking for Kids course thumbnail](/images/problem-solving-kids.webp)Ages 7 to 12Problem Solving and Computational Thinking for KidsThe how-to-think course: sorting with only a few examples and guessing sensibly from neighbours.See the syllabus](/courses/problem-solving-and-computational-thinking-for-kids)[![Vibe Coding for Kids course thumbnail](/images/vibe-coding-kids.webp)Ages 8 to 12Vibe Coding for KidsScratch games dreamed up by the learner, built with AI help and put to the test.See the syllabus](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)Ages 13 to 17AI and Machine Learning for TeensMachine learning in Python, including label spreading on Strabane's mapped buildings.See the syllabus](/courses/ai-ml-masterclass-teens)[![Python Masterclass course thumbnail](/images/python-college.webp)Students and adultsPython MasterclassPython through data work, machine learning and AI agents.See the syllabus](/courses/python-programming-masterclass-zero-to-advanced-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Strabane in the 2021 census

## Strabane, Ballycolman, Lisnafin and Sion Mills

NISRA counts for the town and nearby settlements, and the wards that carry town names.

| Settlement | Usual residents |
| --- | --- |
| Strabane | 13,507 |
| Castlederg | 2,980 |
| Sion Mills | 1,974 |
| Newtownstewart | 1,414 |

NISRA publishes each settlement separately and we never total them; the whole Derry City and Strabane district held 150,756. Census wards include Ballycolman (3,530 residents), Strabane North (4,006) and Strabane West (3,105). West Tyrone schools follow the Northern Ireland Curriculum, and we plan lessons by the same P1 to Year 14 structure, with help for CCEA GCSE and A level when a learner is sitting them. Tell us your holiday dates and lessons will pause for them.

### North-west pages and CCEA support

See [Derry](/best-coding-class-in-derry-londonderry), [Fermanagh and Omagh](/coding-classes-in-fermanagh-and-omagh) and [CCEA A level Software Systems Development help](/ccea-a-level-software-systems-development-help). Our thinking-first approach is set out on [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

The Strabane project

## Learning from unlabelled data: label spreading on Strabane's mapped buildings

A few known labels, many unknown ones, and a test of whether the unknown ones can help.

The learner downloads OpenStreetMap building outlines over Strabane and keeps the 2,939 on the UK side of the border, which the map also records. Of these, 1,155 are tagged as homes, 203 as other buildings such as shops, schools, sheds and garages, and 1,581 have no type. For every outline the program records its position, its floor area and a count of attached neighbours, because a terraced or semi-detached house shares mapped points with the house next door. The experiment hides most of the known labels, keeping only a small share, and asks two models to fill in the rest. A k-nearest-neighbours classifier learns from the kept labels alone. Label spreading builds a web linking every building, labelled or not, to its ten most similar neighbours, and lets the kept labels spread along it.

| Share of labels kept | Labels kept (homes, other) | Label spreading | Labelled-only classifier |
| --- | --- | --- | --- |
| 1% | 14 (12, 2) | 54.8% | 50.0% |
| 2% | 27 (23, 4) | 58.6% | 51.6% |
| 5% | 68 (58, 10) | 69.9% | 63.6% |
| 10% | 136 (116, 20) | 76.5% | 71.0% |
| 25% | 340 (289, 51) | 83.1% | 76.9% |

At every level, spreading labels through all the buildings beats learning from the labelled ones alone, by between 4.8 and 7.0 points. With only two non-home examples, the labelled-only model does no better than chance, 50.0%, while label spreading already edges ahead. The gain comes from the unlabelled buildings: they fill in the shape of the data, so a label in one terrace can flow along the whole street. It is not magic. Accuracy still climbs steeply as real labels are added, and if neighbouring buildings were unlike each other the spreading would mislead rather than help. We do not publish the model's guesses for the 1,581 untyped buildings, because nothing could check them.

### P5 to P7

Colour a few houses on a street map as homes or shops, then guess the rest from their neighbours.

### Years 8 to 10

Count typed and untyped buildings on the Strabane map in Python and plot them.

### Year 11 and up

Run label spreading against a labelled-only classifier at several label shares and explain the gap.

### OpenStreetMap buildings, our models

Building outlines, tags and the border line are from OpenStreetMap and its contributors under the Open Database Licence. The filtering, the features, both models and every score are our own work.

Labels and AI

## What this teaches about vibe coding and AI agents

Data without labels can still teach, as long as nobody mistakes guesses for facts.

| Seen on the Strabane map | Lesson for AI work |
| --- | --- |
| 1,581 buildings had no label | Most real data arrives unlabelled |
| Spreading beat labelled-only at every share | Structure in unlabelled data can help |
| Two non-home labels left one model at chance | Rare classes need extra care |
| Accuracy rose with more real labels | Good labels remain the most valuable investment |
| Guesses for untyped buildings were not published | Do not present unchecked output as fact |

Large AI models are trained on vast amounts of unlabelled text and images before a smaller amount of labelled or human-rated data shapes their behaviour, so the balance between the two matters well beyond this project. In vibe coding the learner describes a model in words while an AI writes the code; our Strabane learners also decide which data counts as labelled and how the result will be checked on examples the model never saw. AI agents that label or sort data for you can spread errors as easily as good labels, so a person should spot-check. Agent projects follow once Python needs no support, typically from Year 12 on, with Copilot Studio reserved for one-to-one teaching. For the steps, read [our agents pathway for UK learners](/ai-agents-course-for-students-uk); for the reasoning, [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk).

NISRA and OpenStreetMap publish the open data used here and have no involvement with us; the models, and any errors, are Modern Age Coders' own.

Stages

## From colouring a street to semi-supervised learning

The school year gives a first idea of level; the trial lesson confirms it.

P1 to P7

### How to think

Sorting, examples and sensible guesses from neighbours.

[Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)[Scratch Coding for Kids](/courses/scratch-programming-complete-course)P5 to Year 9

### Vibe coding for kids

Games and small apps planned by the learner and built with AI help.

[Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[Python and AI for Kids](/courses/python-ai-kids-masterclass)Years 10 to 14

### Python and machine learning

Classifiers, graphs and honest evaluation alongside CCEA GCSE and A level.

[AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens)[Python for Teens](/courses/python-complete-masterclass-teens)Adults

### Machine learning and agents

Data, models and AI agents built step by step in Python.

[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)[Generative AI Course](/courses/complete-generative-ai-masterclass-college)AI and labels

## What is semi-supervised learning?

Semi-supervised learning trains a model on a small set of labelled examples together with a larger set of unlabelled ones, using the structure of the unlabelled data, for example through label spreading on a similarity graph, to make better predictions than the labelled examples alone would allow.

With just 10% of Strabane's typed buildings labelled, label spreading through all 2,939 mapped buildings reached 76.5% balanced accuracy on the hidden labels, against 71.0% for a classifier that saw only the labelled ones.

Learners who have run it ask of any AI model: which data was labelled, who labelled it, and how was the result checked?

A Strabane teenager who asks where a model's labels came from will not take its answers on trust, and writing the code is how that question becomes a habit. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

How it works

## Online across Strabane and west Tyrone

Any computer with a webcam and an internet connection that can stream video will do.

### Learner at the helm

The student writes, prompts and runs every step; the tutor watches the shared screen and asks how they know the answer is right.

### Start level from the trial

The free lesson shows what to teach first, with any CCEA course noted.

### No fee for lesson one

The trial is free and ends with a course suggestion.

### Stage-based groups

Fifteen to twenty learners from across the UK at one level per group.

### Two sessions weekly

Paused through school holidays.

### Steady hour

Tutors follow UK clock changes, so your lesson time holds.

Why online

Five learners at one level, free on the same evening, are rarely neighbours. Video lets them learn together anyway.

Fees

## Strabane fees

Strabane learners pay the international rates we use everywhere except India.

First class**USD 0**

A full free lesson, then a course recommendation.

Group tuition**USD 100**

About eight live group lessons per month.

Private tuition**USD 150**

About eight live one-to-one lessons per month.

Fees are set in US dollars, not pounds, and the first invoice follows the trial only once a course and a weekly time are agreed. For holiday breaks, absences and changing between group and private lessons, see the pricing page.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20could%20we%20book%20a%20free%20AI%20or%20programming%20lesson%20for%20a%20learner%20in%20Strabane%3F)Reviews

## West Tyrone families and learners across the UK, on Google

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

## Book a free Strabane lesson

Share the learner's age or year group and one interest. The trial might be a colour-the-street guessing game, a Scratch game made with an AI, a first Python program, or a small model trained on real map data.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Strabane one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20could%20we%20book%20a%20free%20AI%20or%20programming%20lesson%20for%20a%20learner%20in%20Strabane%3F)

Submitted details are used for placement and follow-up.

FAQ

## Strabane questions

Labels, unlabelled buildings, vibe coding and how lessons work.

### What is the population of Strabane?

NISRA's Census 2021 counts 13,507 usual residents in the Strabane settlement.

### Are Strabane lessons held online?

All of them are, as live video calls for ages 6 to 67, so Sion Mills and Castlederg are as easy to reach as the town centre.

### What is label propagation?

A semi-supervised method that links each example to similar ones and lets known labels flow along those links to unlabelled examples. Label spreading is a softer version that lets the original labels be revised a little.

### When does unlabelled data help a model?

When similar examples tend to share a label, so the unlabelled ones reveal the shape of each group. In our Strabane test it added between 4.8 and 7.0 points of balanced accuracy.

### What does the Strabane project involve?

Predicting whether mapped buildings are homes from a small share of known labels, comparing label spreading over all 2,939 buildings with a classifier that uses the labelled ones only.

### Where does vibe coding fit?

In every course: the learner describes the program, the AI drafts it, and the learner tests and repairs it.

### When do learners start building AI agents?

When they can write Python without prompting, usually Year 12 onwards; Copilot Studio is private tuition only.

### Do you help with CCEA exams?

Yes, in Software Systems Development, Digital Technology and Maths, taught for understanding with no grade promised.

### What are the fees?

Nothing for the trial, then USD 100 monthly in a class or USD 150 monthly for private lessons.

### Do lessons stop in the holidays?

They pause for the school holidays once you tell us the dates.

Nearby

## More Northern Ireland pages

Pages with their own projects: [Derry](/best-coding-class-in-derry-londonderry) (train timetables as time-distance charts), [Fermanagh and Omagh](/coding-classes-in-fermanagh-and-omagh), [Mid Ulster](/coding-classes-in-mid-ulster) and [Armagh](/best-coding-class-in-armagh). Further afield, start at [Northern Ireland](/coding-and-ai-classes-in-northern-ireland) or the [UK hub](/coding-classes-in-united-kingdom).

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20could%20we%20book%20a%20free%20AI%20or%20programming%20lesson%20for%20a%20learner%20in%20Strabane%3F)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-strabane*
