---
title: "AI and Programming Classes in Dumfries | Ages 6 to 67"
description: "Live online AI, programming, Python and vibe coding lessons for Dumfries, Lincluden, Troqueer and Locharbriggs learners aged 6 to 67, taught live. First lesson free."
canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-dumfries
source: src/pages/ai-and-programming-classes-in-dumfries.html
---
> Live online AI, programming, Python and vibe coding lessons for Dumfries, Lincluden, Troqueer and Locharbriggs learners aged 6 to 67, taught live. First lesson free.

Skip to contentDumfries course picks

## Dumfries courses in reasoning, Python and AI

Match the learner's age to a course below; whichever you choose, the opening live lesson is free and booking needs no card.

[![Problem Solving and Computational Thinking for Kids course thumbnail](/images/problem-solving-kids.webp)Ages 7 to 12Problem Solving and Computational Thinking for KidsThe how-to-think course: using past patterns to predict, and noticing when the pattern changes.See the syllabus](/courses/problem-solving-and-computational-thinking-for-kids)[![Vibe Coding for Kids course thumbnail](/images/vibe-coding-kids.webp)Ages 8 to 12Vibe Coding for KidsScratch games planned by the learner, built with AI help and checked properly.See the syllabus](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)Ages 13 to 17AI and Machine Learning for TeensMachine learning in Python, including the drift experiment on Eskdalemuir records.See the syllabus](/courses/ai-ml-masterclass-teens)[![Python Masterclass course thumbnail](/images/python-college.webp)Students and adultsPython MasterclassPython for data, model monitoring, machine learning and AI agents.See the syllabus](/courses/python-programming-masterclass-zero-to-advanced-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Dumfries and Galloway

## Dumfries, Lincluden, Troqueer and Maxwelltown

The NRS estimate for Dumfries, and places recorded in DG1 and DG2.

| Area | People |
| --- | --- |
| Dumfries locality, mid-2020 | 33,470 |

Postcodes.io records Georgetown, Kingholm Quay, Larchfield, Lincluden, Lochside, Marchmount, Maxwelltown, Noblehill, Summerville and Troqueer as suburban areas of Dumfries and Galloway in DG1 and DG2, and Cargenbridge, Heathhall and Locharbriggs as villages. Schools in the region teach the Curriculum for Excellence; our lessons use Scottish year groups and support SQA Computing Science and Maths through to Advanced Higher. Pass on your holiday dates and we will leave those weeks free.

### Dumfries and Galloway and SQA support

See [coding classes in Dumfries and Galloway](/coding-classes-in-dumfries-and-galloway), the [Scotland page](/coding-and-ai-classes-in-scotland) and [Higher Maths tuition](/higher-maths-tuition-online). Why reasoning comes before tools is on [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

The Dumfries project

## Concept drift: a frozen model against a retrained one on Eskdalemuir temperatures

Train on the past, test on every year since, and watch the error grow.

Eskdalemuir's historic Met Office file supplies the data: for each month, the average of the daily maximum temperatures. The model is deliberately simple: to predict a month, use the average of that calendar month over a training window. The frozen model is trained once, on 1961 to 1990, and never updated. The rolling model is retrained every year on the thirty years just before. Both predict every month from 1991 to 2025, and the learner measures the bias, how far reality sits above or below the prediction on average, and how often the actual month came out warmer.

| Years predicted | Frozen model bias | Months warmer than frozen | Rolling model bias | Months warmer than rolling |
| --- | --- | --- | --- | --- |
| 1991 to 2000 | +0.20 C | 56.7% | +0.16 C | 55.0% |
| 2001 to 2010 | +0.79 C | 74.2% | +0.58 C | 65.0% |
| 2011 to 2020 | +0.82 C | 72.5% | +0.36 C | 59.2% |
| 2021 to 2025 | +1.57 C | 90.0% | +0.86 C | 73.3% |

In its first decade the frozen model is nearly unbiased. By 2021 to 2025 it predicts 1.57 C too cold on average, and nine months in ten come out warmer than it expects; its typical miss has grown from 1.18 C to 1.69 C. The rolling model drifts far less, because it keeps absorbing recent years, but it still lags: in 2021 to 2025 it is 0.86 C too cold and three months in four beat it. Across the stations's record, the average monthly maximum was 10.77 C for 1961 to 1990 and 11.64 C for 1996 to 2025. A model is a snapshot of the period it learned from.

### P5 to P7

Predict tomorrow from what usually happens, then keep a tally of when the usual guess was wrong.

### S1 to S3

Read the Eskdalemuir file in Python and average each month over 1961 to 1990.

### S4 and up

Build frozen and rolling models, track bias by decade and design a retraining schedule.

### Met Office records, our models

Temperatures are from the Met Office historic station data for Eskdalemuir, published under the Open Government Licence; 2026 months are marked provisional and are not used. The models, windows and errors are our own work and are not a climate assessment.

Drift and AI

## What this teaches about vibe coding and AI agents

Yesterday's accurate model is not guaranteed to be today's.

| In the drift project | When you rely on an AI model |
| --- | --- |
| Frozen model bias grew to +1.57 C | Models age as the world changes |
| Nine months in ten beat it by 2021 to 2025 | Errors in one direction are a warning sign |
| Rolling retraining halved the bias | Refreshing training data helps |
| Even the rolling model lagged | Retraining on the past always trails the present |
| Error was tracked decade by decade | Keep monitoring after launch |

Chat assistants are trained up to a knowledge cutoff, so on recent events they can be confidently out of date in exactly this way. With vibe coding, the learner explains the goal and an AI drafts the code; in Dumfries lessons we then ask whether the libraries and facts behind that code are up to date, and test on the most recent data available. AI agents that act on information need the same habit: know when their knowledge was last refreshed. Agents come into the course once a learner's Python can stand alone, mostly for senior pupils and adults, and Copilot Studio is covered only in private lessons. See [the AI agents route for UK learners](/ai-agents-course-for-students-uk) and [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk).

The Met Office, National Records of Scotland and postcodes.io publish the open data used here and have no connection to us; the models, and any errors, belong to Modern Age Coders.

Stages

## From weather tallies to model monitoring

The school year points to a start; the free lesson confirms it.

P1 to P7

### How to think

Patterns, predictions and noticing when things change.

[Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)[Scratch Coding for Kids](/courses/scratch-programming-complete-course)P5 to S2

### Vibe coding for kids

Games and apps planned by the learner and built with AI help.

[Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[Python and AI for Kids](/courses/python-ai-kids-masterclass)S3 to S6

### Python and machine learning

Time series, models and monitoring alongside SQA Maths and Computing Science.

[AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens)[Statistics & Probability](/courses/statistics-probability-maths-course)Adults

### Machine learning in practice

Deployment, drift, retraining and AI agents in Python.

[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)[Generative AI Course](/courses/complete-generative-ai-masterclass-college)AI and drift

## Why do AI models go out of date, and what is concept drift?

Concept drift is when the patterns a model learned stop matching the world it is used in, so its predictions become steadily and systematically wrong unless it is monitored and retrained.

A model that learned Eskdalemuir's monthly temperatures from 1961 to 1990 was nearly unbiased in the 1990s but predicted 1.57 C too cold by 2021 to 2025, when 90.0% of months beat it; retraining every year cut that bias to 0.86 C.

Learners who have watched a model age ask of any AI tool: when was it last trained, and has the world moved since?

Knowing that models go stale keeps Dumfries teenagers alert to out-of-date AI answers, and learning to code is how that alertness becomes second nature in 2026. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

How it works

## Lessons across Dumfries and Galloway

Equipment: one computer with a webcam and broadband that can manage video.

### Learner at the keyboard

Students write, prompt and run every step while the tutor follows the shared screen and asks what the result means.

### Starting point from the trial

The free session shows what to teach first; any SQA course is recorded.

### No-cost first lesson

Lesson one is free and ends with our recommendation.

### Small, matched classes

Between five and ten learners, grouped by what they can do rather than where they live.

### Two per week

Lessons pause during school holidays.

### Steady slot

Our tutors work round UK clock changes, so your lesson hour stays fixed.

Why online

Across a region as wide as Dumfries and Galloway, five learners at one level on the same evening are rarely near each other. Video solves it.

Fees

## Dumfries fees

Learners in Dumfries are on our international rate card, the one for every country except India.

First class**USD 0**

A full free lesson, then a course suggestion.

Group tuition**USD 100**

Roughly eight live group lessons a month.

Private tuition**USD 150**

Roughly eight live one-to-one lessons a month.

No pound prices here: we bill in US dollars, starting after the trial has fixed a course and a slot. Breaks, missed sessions and format swaps are dealt with on the pricing page.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20could%20we%20book%20a%20free%20AI%20or%20programming%20lesson%20for%20a%20learner%20in%20Dumfries%3F)Reviews

## On Google: Dumfries and Galloway families and learners around Britain

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

## Book a free Dumfries lesson

We only need an age or year group and a hobby. The trial might be a prediction-tally game, a Scratch game built with an AI, early Python, or charting a century of real temperatures.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Dumfries one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20could%20we%20book%20a%20free%20AI%20or%20programming%20lesson%20for%20a%20learner%20in%20Dumfries%3F)

Submitted details are used for placement and follow-up.

FAQ

## Dumfries questions

Ageing models, the weather records, vibe coding and how lessons are organised.

### What is the population of Dumfries?

National Records of Scotland estimated 33,470 people in the Dumfries locality in mid-2020.

### Do you teach AI and programming to Dumfries learners?

You can. Because every lesson is on video, ages 6 to 67 anywhere from Stranraer to Annan can take part.

### What is a knowledge cutoff in AI?

The date after which a model has seen no training data. Anything that changed later is invisible to it unless it is given new information.

### How do you fix concept drift?

Monitor errors over time, and retrain on recent data when they drift. In our Eskdalemuir test, yearly retraining cut the 2021 to 2025 bias from 1.57 C to 0.86 C, though it still lagged.

### What does the Dumfries project involve?

Building simple temperature models from Met Office Eskdalemuir records, freezing one on 1961 to 1990, retraining another every year, and tracking both to 2025.

### Do you teach vibe coding?

Yes, for all ages; learners plan the program and test what the AI writes.

### When do learners start building AI agents?

When Python stops needing support, which for most is the senior phase or later; Copilot Studio is one-to-one.

### Do you help with SQA exams?

Yes, Computing Science and Maths from National 5 to Advanced Higher, taught for understanding without promised grades.

### What do lessons cost?

The trial is free. Ongoing, a class place is USD 100 monthly and a private tutor USD 150 monthly.

### Do lessons stop in the holidays?

They pause for the school holidays; send us the dates and we plan round them.

Nearby

## Southern Scotland and the border

Each with a different experiment: [Dumfries and Galloway](/coding-classes-in-dumfries-and-galloway) (counting stars under a dark sky), [Ayr](/best-coding-and-ai-classes-in-ayr), [Kilmarnock](/vibe-coding-and-ai-agents-classes-in-kilmarnock) and [Cumbria](/coding-classes-in-cumbria) over the border. Everything else starts at the [Scotland page](/coding-and-ai-classes-in-scotland) or the [UK hub](/coding-classes-in-united-kingdom).

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20could%20we%20book%20a%20free%20AI%20or%20programming%20lesson%20for%20a%20learner%20in%20Dumfries%3F)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-dumfries*
