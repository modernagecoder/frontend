---
title: "AI and Programming Classes in Chatham | Coding for 6 to 67"
description: "Online AI, programming, Python and vibe coding classes for Chatham, Walderslade, Luton and Rochester learners aged 6 to 67, taught live. First lesson free."
canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-chatham
source: src/pages/ai-and-programming-classes-in-chatham.html
---
> Online AI, programming, Python and vibe coding classes for Chatham, Walderslade, Luton and Rochester learners aged 6 to 67, taught live. First lesson free.

Skip to contentChatham course picks

## Chatham courses in thinking, vibe coding and AI

Age and curiosity decide the starting point; every course begins with a free live lesson, booked without card details.

[![Problem Solving and Computational Thinking for Kids course thumbnail](/images/problem-solving-kids.webp)Ages 7 to 12Problem Solving and Computational Thinking for KidsThe how-to-think programme: fair decisions, trade-offs and deciding where to draw a line.See the syllabus](/courses/problem-solving-and-computational-thinking-for-kids)[![Vibe Coding for Kids course thumbnail](/images/vibe-coding-kids.webp)Ages 8 to 12Vibe Coding for KidsScratch games, then apps built by describing them to an AI and testing them.See the syllabus](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)Ages 13 to 17AI and Machine Learning for TeensMachine learning in Python, from classifiers to ROC curves, including this project.See the syllabus](/courses/ai-ml-masterclass-teens)[![Generative AI Course course thumbnail](/images/generative-ai-college.webp)Students and adultsGenerative AI CourseHow AI systems score, decide and are evaluated, through to building agents.See the syllabus](/courses/complete-generative-ai-masterclass-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Chatham and Medway

## Chatham, Gillingham and Rochester

ONS 2021 census counts for three Medway built-up areas, and suburbs recorded around Chatham.

| Built-up area | People (2021) |
| --- | --- |
| Chatham | 76,955 |
| Gillingham | 108,480 |
| Rochester | 67,285 |

Each is a separate ONS figure, shown without a total; the Medway count of 279,773 comes from its own census table. Luton and Walderslade are recorded as suburban areas in Medway. Schools in Medway follow the national curriculum for England; tell us your holiday dates and lessons will leave them clear.

### Kent, the South East and our approach

More options are on [coding classes in Kent](/coding-classes-in-kent) and [South East England](/coding-and-ai-classes-in-south-east-england). Why every course trains judgement before prompting is on [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

The Chatham project

## Where should an AI draw the line? ROC curves on Medway's census

Score every output area, sweep the cut-off from 1 down to 0, and see what each choice catches and costs.

The learner downloads two Census 2021 tables from the Nomis API for all 853 output areas in Medway, covering 111,425 households: the type of each home, and how many cars or vans each household has. An area counts as mostly terraced when at least half its households live in a terraced house, which is true for 296 areas, 34.7% of them. A logistic regression then gives every area a score between 0 and 1 from just two clues: the share of households with no car, and the share with two or more. Every score is produced by a model that did not see that area during training.

An ROC curve shows, for every possible cut-off, how many of the true cases are caught against how many false alarms are raised. A useless model runs along the diagonal; a perfect one hugs the top-left corner. The area under the curve, AUC, sums this up in one number: 0.5 is guessing, 1.0 is perfect. Random scores give 0.515, the no-car share on its own 0.642, and the two-feature model 0.673. The clues carry real information, but not much.

| Cut-off | Mostly terraced areas caught | False alarms (of 557 other areas) |
| --- | --- | --- |
| 0.500 | 11 of 296 (3.7%) | 41 |
| 0.382 | 51.4% | 161 |
| 0.338 | 70.6% | 218 |
| 0.308 | 80.1% | 287 |
| 0.279 | 90.2% | 356 |

The default cut-off of 0.5 is nearly useless here. Because scores rarely rise that high, it catches only 11 of the 296 terraced areas, and its accuracy of 61.8% is worse than simply answering no every time, which scores 65.3%. Lowering the cut-off catches far more, but every extra catch costs false alarms: catching 80.1% means wrongly flagging 287 other areas. Which point is right depends entirely on what a mistake costs. A spam filter and a medical screening test would sit at opposite ends of the same curve.

### Ages 8 to 11

Sort cards by a score, move a line up and down, and count what each position gets right and wrong.

### Ages 11 to 15

Work out catches and false alarms for a few cut-offs in Python and plot them.

### Ages 15 and up

Train the classifier, draw the full ROC curve, compute AUC and justify a cut-off by cost.

### ONS counts, our classifier

The household counts are Census 2021 figures from the Office for National Statistics, read through Nomis. The labels, the model, the curve and every percentage are our own work; the model says nothing about why housing and car ownership are related.

Decisions and AI

## What this teaches about vibe coding and AI agents

A score is not a decision until someone chooses the cut-off.

| In the Chatham project | In AI tools and agents |
| --- | --- |
| 0.5 caught 11 of 296 | Default settings can quietly fail |
| Always "no" beat the model on accuracy | Accuracy alone hides what matters |
| AUC 0.673 from two weak clues | A modest model needs modest claims |
| Each extra catch cost false alarms | Every threshold is a trade-off |
| The right cut-off depends on costs | Decide what an error costs before tuning |

AI-written classifier code almost always ends with a line that turns scores into answers at 0.5, and it rarely mentions that the choice matters. In our vibe coding lessons, where the learner describes what they need and an AI drafts the program, Chatham learners plot the ROC curve and pick the cut-off themselves. AI agents that flag, filter or approve things for you are making the same kind of decision, so knowing who set the threshold, and why, is part of trusting them. Building agents opens up once Python is steady, generally for older teens and adults; Copilot Studio agents are reserved for one-to-one sessions. The [agents pathway for UK students](/ai-agents-course-for-students-uk) shows where this leads, and [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk) explains our approach.

Modern Age Coders has no connection with the Office for National Statistics, Nomis or postcodes.io. Their open figures made this project possible; the model and any errors in it belong to us.

Stages

## From sorting cards to ROC curves

The school year gives us a first estimate; the trial lesson sets the true level.

Years 2 to 7

### How to think

Trade-offs, fairness and choosing a line.

[Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)[Scratch Coding for Kids](/courses/scratch-programming-complete-course)Years 4 to 8

### Vibe coding for kids

Games and small apps built with AI help and tested by the learner.

[Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[Python and AI for Kids](/courses/python-ai-kids-masterclass)Years 9 to 13

### Python and machine learning

Classifiers, scores and evaluation alongside GCSE and A level.

[Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens)Adults

### Evaluating AI systems

Metrics, thresholds, language models and agents in Python.

[Generative AI Course](/courses/complete-generative-ai-masterclass-college)[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)AI and thresholds

## What is an ROC curve, and what does AUC mean?

An ROC curve shows every trade-off between catches and false alarms; AUC condenses it into one number from 0.5 (guessing) to 1.0 (perfect).

For Medway's mostly-terraced areas the two-feature model scored an AUC of 0.673, and at the default 0.5 cut-off it caught only 11 of 296, less accurate overall than always saying no.

Learners who have drawn the curve themselves stop trusting default settings and ask what each kind of mistake would cost.

Reading an ROC curve shows Chatham teenagers how AI decisions are actually made, which is a sound reason to take up coding in 2026. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

How it works

## Walderslade to Luton, online

Everything happens over video, so a computer and decent broadband are all that is required.

### Learners write the code

Students do the typing, prompting and running, while the tutor watches their screen and keeps asking questions.

### The trial sets the level

What the learner shows in the free session, rather than the school year, decides where to start; exam boards are noted.

### First lesson free

No fee for the opening session, which finishes with a course we recommend.

### Stage-matched groups

A class gathers fifteen to twenty learners from across Britain who are at one level.

### Two sessions a week

Paused during school holidays.

### Steady lesson times

Tutors adjust to UK clock changes, so the hour stays the same.

Why lessons are online

Five learners at one stage, all free on one evening, rarely live near each other. Online, they share a class without the journey.

Fees

## Chatham fees

Chatham learners pay our international rate, the same in every country apart from India.

First class**USD 0**

A complete opening lesson free, rounded off with a course suggestion.

Group tuition**USD 100**

About eight live small-group lessons a month.

Private tuition**USD 150**

About eight live one-to-one lessons a month.

Fees are quoted in US dollars, not pounds, and we bill only after the trial has agreed a course and a weekly time. The pricing page explains breaks, absences and switching format.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20please%20may%20we%20book%20a%20free%20AI%20or%20programming%20lesson%20for%20a%20learner%20in%20Chatham%3F)Reviews

## Google reviews: Medway and Kent households, and others nationwide

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

## Book a free Chatham lesson

Tell us how old the learner is, or their school year, and what they like. A trial might be a sorting-and-scoring puzzle, a Scratch game built with AI help, a first Python program, or drawing a simple ROC curve.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Chatham one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20please%20may%20we%20book%20a%20free%20AI%20or%20programming%20lesson%20for%20a%20learner%20in%20Chatham%3F)

Submitted details are used for placement and follow-up.

FAQ

## Chatham questions

ROC curves, the classifier project, vibe coding, agents and fees.

### What is the population of Chatham?

The ONS gives 76,955 for the Chatham built-up area at the 2021 census.

### Are AI and programming lessons available for Chatham learners?

Yes, through live video for anyone aged 6 to 67 in Chatham and across Medway.

### What does AUC mean in machine learning?

The area under the ROC curve: a single number showing how well a model ranks true cases above others, where 0.5 is guessing and 1.0 is perfect.

### What is the Chatham project?

Learners train a classifier on Medway's 853 census output areas, draw its ROC curve and choose a cut-off by weighing catches against false alarms.

### Is vibe coding part of the lessons?

Yes, at every age, with the learner planning and testing what the AI writes.

### When can learners start building AI agents?

After their Python becomes confident, most often in the late teens or adulthood; Copilot Studio agent work is private.

### Are lessons in person?

No, all lessons are live online.

### Do you support GCSE and A level?

Yes, in computer science and maths, aiming at understanding rather than promised grades.

### How much do lessons cost?

Nothing for the opening lesson. Ongoing tuition is USD 100 a month as part of a class or USD 150 a month with your own tutor.

### Do lessons pause for school holidays?

Yes. Let us know the dates.

Nearby

## More Medway and Kent pages

In Medway, [Rochester](/best-coding-and-ai-classes-in-rochester) and [Gillingham](/ai-and-programming-classes-in-gillingham) have pages and projects of their own, and elsewhere in Kent so do [Dartford](/best-coding-and-ai-classes-in-dartford) and [Margate](/online-coding-and-python-classes-in-margate). The [UK hub](/coding-classes-in-united-kingdom) lists every area.

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20please%20may%20we%20book%20a%20free%20AI%20or%20programming%20lesson%20for%20a%20learner%20in%20Chatham%3F)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-chatham*
