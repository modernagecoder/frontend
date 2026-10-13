---
title: "AI and Programming Classes in Chorlton, Manchester | Ages 6 to 67"
description: "Live online AI, programming, Python and vibe coding tuition for Chorlton, Chorlton Park and Whalley Range in Manchester M21, ages 6 to 67. First lesson free."
canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-chorlton-manchester
source: src/pages/ai-and-programming-classes-in-chorlton-manchester.html
---
> Live online AI, programming, Python and vibe coding tuition for Chorlton, Chorlton Park and Whalley Range in Manchester M21, ages 6 to 67. First lesson free.

Skip to contentChorlton course picks

## Chorlton courses in thinking, programming and AI

Four starting points by age. Whichever you choose, the opening lesson is live, free and booked without payment details.

[![Problem Solving and Computational Thinking for Kids course thumbnail](/images/problem-solving-kids.webp)Ages 7 to 12Problem Solving and Computational Thinking for KidsThe how-to-think course: fair tests, lucky guesses and how to tell them apart.See the syllabus](/courses/problem-solving-and-computational-thinking-for-kids)[![Vibe Coding for Kids course thumbnail](/images/vibe-coding-kids.webp)Ages 8 to 12Vibe Coding for KidsChildren describe a game to an AI, then hunt for the cases where it gets things wrong.See the syllabus](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)Ages 13 to 17AI and Machine Learning for TeensMachine learning with honest scoring, including the Chorlton kappa test.See the syllabus](/courses/ai-ml-masterclass-teens)[![Generative AI Course course thumbnail](/images/generative-ai-college.webp)Students and adultsGenerative AI CourseHow modern AI is built and evaluated, then agents in Python.See the syllabus](/courses/complete-generative-ai-masterclass-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Chorlton and M21

## Two Chorlton wards in the census

Two separate published ward counts. We do not add them together.

| Ward | Usual residents |
| --- | --- |
| Chorlton | 12,843 |
| Chorlton Park | 17,592 |

The M21 postcode district takes in the Manchester wards of Chorlton, Chorlton Park and Whalley Range, according to postcodes.io, which gives the place its older name of Chorlton-cum-Hardy. Pupils follow the national curriculum for England, and our timetable stops for the school breaks you tell us about.

### Where this page sits

It belongs under [coding classes in Manchester](/best-coding-class-in-manchester). The thinking-first approach has its own page: [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

The Chorlton project

## Cohen's kappa on 3,292 mapped buildings around Chorlton

Five labellers, one question: is this building a home or something else?

OpenStreetMap volunteers have traced 3,829 buildings in a box around Chorlton. For 3,292 of them they also recorded a type: 3,226 are homes of some kind and 66 are anything else, such as shops, schools and churches. Those tags are the reference. The learner then builds five labellers in Python and compares each with the mappers, counting how often they agree and, separately, how often they would agree by luck alone given how often each side says "home".

| Labeller | Agreement | Expected by chance | Kappa | Non-homes found |
| --- | --- | --- | --- | --- |
| Says "home" every time | 98.0% | 98.0% | 0.00 | 0 of 66 |
| Weighted coin, 98 to 2 | 96.3% | 96.3% | 0.01 | 2 of 66 |
| Rule: over 300 square metres is not a home | 97.1% | 95.5% | 0.34 | 27 of 66 |
| Shape model trained elsewhere in Manchester | 98.2% | 96.4% | 0.52 | 32 of 66 |
| Same model, told to weigh both classes equally | 94.7% | 91.9% | 0.34 | 49 of 66 |

Kappa is the agreement you got beyond chance, divided by the most you could have got beyond chance. The lazy labeller agrees 98.0% of the time, chance predicts 98.0%, so its kappa is zero. The shape model agrees only a fifth of a point more often, 98.2%, yet its kappa is 0.52, because it found 32 of the 66 buildings that matter. Agreement hid the whole difference; kappa shows it.

The last row carries a second lesson. Rebalancing the model finds more non-homes, 49 of 66, but it flags 208 buildings to do so, and kappa drops back to 0.34. One number never settles the matter. Which labeller you want depends on whether a missed shop or a wrongly flagged house costs more.

### Ages 8 to 11

A bag with 49 red counters and one blue. Guess "red" every time, score 98%, and discuss whether that was clever.

### Ages 11 to 15

Fill in the two-by-two table for a labeller by hand and work out its kappa with a calculator.

### Ages 15 and up

Measure building outlines in Python, train the shape model on another district and score it on Chorlton.

### Whose data, whose labels

Building outlines and tags are from OpenStreetMap contributors, used under the Open Database Licence. The tags are volunteers' work and can be wrong or missing, so "agreement with the mappers" is what we measure, not truth. We publish no guess about any individual building.

Scores and AI

## Why this matters for vibe coding and AI agents

Most AI is sold on a percentage. Kappa is one way to ask what the percentage is made of.

| In the kappa project | In an AI product |
| --- | --- |
| 98.0% from never looking | High accuracy on a lopsided task |
| Chance agreement worked out first | Ask what a do-nothing baseline scores |
| 32 of 66 rare cases found | The rare cases are usually the point |
| Mappers' tags as reference | The "right answers" were made by people too |
| Rebalancing traded misses for false alarms | Every setting is a trade |

Spam filters, fraud checks and medical screening all face lopsided tasks where the rare case is the one that matters. Chorlton learners who vibe code, steering an AI in ordinary English while it writes the program, make it report a baseline next to every score it claims. When they later assemble AI agents that sort or label things without supervision, they already know to check the agent against a lazy rival. Agents are taught once Python is secure, as a rule from around sixteen, and Copilot Studio agents only in one-to-one lessons. Further reading: [AI agents for UK students](/ai-agents-course-for-students-uk); [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk).

Modern Age Coders has no affiliation with OpenStreetMap, the Office for National Statistics or postcodes.io. We used their open data and the sums are our responsibility.

Progression

## From lucky guesses to scored models

A rough guide by school year, adjusted after the trial.

Years 2 to 7

### How to think

Fair tests, patterns and spotting a fluke.

[Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)[Scratch Coding for Kids](/courses/scratch-programming-complete-course)Years 4 to 8

### Vibe coding for kids

Building with an AI helper and checking its work.

[Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[Python and AI for Kids](/courses/python-ai-kids-masterclass)Years 9 to 13

### Programming and AI

Python, models and evaluation beside GCSE and A level.

[AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens)[Python for Teens](/courses/python-complete-masterclass-teens)Adults

### AI in practice

Generative AI, evaluation and agents.

[Generative AI Course](/courses/complete-generative-ai-masterclass-college)[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)Measuring AI

## Is an AI that is 98% accurate actually good?

Not necessarily: if 98% of cases share one answer, a system that always gives that answer is 98% accurate while knowing nothing, so accuracy has to be compared with what chance alone would score.

Among 3,292 typed buildings around Chorlton, always answering "home" agreed with the mappers 98.0% of the time and had a kappa of 0.00; a model at 98.2% had a kappa of 0.52.

Learners who have done that sum ask of any AI claim: accurate compared with what?

A Chorlton student who can compute kappa by hand will not be dazzled by a percentage, from a vendor or from a chatbot. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

Lesson format

## How Chorlton lessons are taught

All you need is a laptop or desktop with a webcam and a connection steady enough for video.

### Hands on the keyboard

The pupil types every line. The tutor watches the shared screen and keeps asking what the line is for.

### A trial to place the learner

In the free session we gauge the level and ask which exam board applies, if any.

### No card to start

The first session costs nothing and ends with a recommended course.

### Groups by level

Between five and ten learners at a similar stage, joining from around the UK.

### Two sessions weekly

Paused over the holidays.

### Fixed UK time

When the clocks change in Britain, our tutors shift so your slot does not.

Why not a local room

A single district seldom has five people of one level who are free at the same hour. Online, that group can be gathered from anywhere.

Fees

## Fees for Chorlton

Chorlton is charged the international rate that applies everywhere outside India.

First class**USD 0**

One complete lesson free, followed by our recommendation.

Group tuition**USD 100**

Roughly eight live group sessions a month.

Private tuition**USD 150**

Roughly eight live one-to-one sessions a month.

All prices are in US dollars. Nothing is billed until the trial has settled the course and the weekly slot; the pricing page sets out how holidays, absences and switching format are handled.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20AI%20or%20programming%20lesson%20for%20a%20learner%20in%20Chorlton%2C%20Manchester.)Reviews

## Google reviews from Manchester and the wider UK

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

## Book a free Chorlton lesson

Send an age or year group and one thing the learner likes doing. Depending on the answer, the trial could be a red-and-blue counter experiment, an AI-assisted Scratch game, a first Python script, or a tiny model scored properly.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Chorlton one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20AI%20or%20programming%20lesson%20for%20a%20learner%20in%20Chorlton%2C%20Manchester.)

Submitted details are used for placement and follow-up.

FAQ

## Chorlton questions

Kappa, the building project, vibe coding and the practical details.

### How many people live in Chorlton?

At the 2021 census, Chorlton ward had 12,843 usual residents and Chorlton Park ward had 17,592.

### Are there online AI and programming classes in Chorlton?

Yes. We teach ages 6 to 67 in Chorlton and across Manchester by live video call.

### What is Cohen's kappa?

A score for how far two labellers agree beyond what chance would produce. Zero means no better than chance and one means complete agreement.

### Why is accuracy misleading on imbalanced data?

Because always picking the common answer scores highly. Around Chorlton, saying "home" for every building agreed with mappers 98.0% of the time and found none of the 66 other buildings.

### What is the Chorlton project?

Scoring five labellers against OpenStreetMap tags on 3,292 buildings, using both plain agreement and Cohen's kappa, to see which number tells the truth.

### Is vibe coding part of the course?

Yes, for all ages. The learner directs an AI in plain English and is responsible for testing what comes back.

### At what age do you teach AI agents?

After Python is secure, as a rule from around sixteen. Copilot Studio agents are taught one-to-one only.

### Do you cover GCSE and A level computer science?

Yes, and maths as well. We teach for understanding and do not guarantee grades.

### How much are the classes?

Nothing for the first lesson, then USD 100 a month for a group or USD 150 a month for one-to-one.

### What happens in the school holidays?

Lessons stop and resume afterwards. Tell us your dates.

Close by

## Other Manchester districts

Different district, different experiment: [Withington](/best-coding-and-ai-classes-in-withington-manchester) (hexagon maps), [Didsbury](/online-coding-and-python-classes-in-didsbury-manchester) (measuring with random points) and [Wythenshawe](/vibe-coding-and-ai-agents-classes-in-wythenshawe-manchester) (rule-writing agents). The [UK hub](/coding-classes-in-united-kingdom) lists everywhere else.

Book the free class[Book a priority demo](/book-demo)[Ask on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20AI%20or%20programming%20lesson%20for%20a%20learner%20in%20Chorlton%2C%20Manchester.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-chorlton-manchester*
