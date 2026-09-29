---
title: "AI and Programming Classes in Kirkcaldy | Ages 6 to 67"
description: "Live online AI, programming, Python and vibe coding lessons for Kirkcaldy, Dysart, Templehall and Sinclairtown learners in Fife, aged 6 to 67. First lesson free."
canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-kirkcaldy
source: src/pages/ai-and-programming-classes-in-kirkcaldy.html
---
> The Kirkcaldy and Dysart locality counted 50,370 people in the mid-2020 estimates from National Records of Scotland, second in Fife only to Dunfermline. Templehall, Sinclairtown, Pathhead, Gallatown, Linktown and Dunnikier are listed suburbs in the KY1 and KY2 districts. Anyone aged six to 67 can learn AI, programming, Python, vibe coding and maths live over video with a tutor working from India, individually or in a small class of five to ten at one level. Reasoning comes before tools in every course, so learners can see when a model has fooled itself. We teach the first lesson free and end it with a course recommendation. The Kirkcaldy project trains a gradient boosting model on 2,788 labelled building outlines and watches its real skill rise, peak and slip while its headline accuracy keeps climbing. Regular tuition costs USD 100 a month in a group or USD 150 a month privately.

[Home](/) / [United Kingdom](/coding-classes-in-united-kingdom) / [Scotland](/coding-and-ai-classes-in-scotland) / Kirkcaldy

Kirkcaldy, Fife, Scotland / Live online

# AI and programming classes in Kirkcaldy

**Which are the best AI and programming classes in Kirkcaldy?** The Kirkcaldy and Dysart locality counted 50,370 people in the mid-2020 estimates from National Records of Scotland, second in Fife only to Dunfermline. Templehall, Sinclairtown, Pathhead, Gallatown, Linktown and Dunnikier are listed suburbs in the KY1 and KY2 districts. Anyone aged six to 67 can learn AI, programming, Python, vibe coding and maths live over video with a tutor working from India, individually or in a small class of five to ten at one level. Reasoning comes before tools in every course, so learners can see when a model has fooled itself. We teach the first lesson free and end it with a course recommendation. The Kirkcaldy project trains a gradient boosting model on 2,788 labelled building outlines and watches its real skill rise, peak and slip while its headline accuracy keeps climbing. Regular tuition costs USD 100 a month in a group or USD 150 a month privately.

Gradient boosting is one of the most successful methods in practical machine learning, often the first choice for data in tables. The idea is simple: build a very small decision tree, see which examples it gets wrong, build another small tree aimed at those mistakes, and keep adding trees, each one nudging the prediction a little. Two settings govern it: how many trees to add, and the learning rate, how big each nudge is. This project uses OpenStreetMap outlines of Kirkcaldy's buildings, where mappers have tagged 2,618 as homes and 170 as something else, and asks the model to tell them apart from shape alone.

Facts last verified 29 September 2026. Teaching is online; no Kirkcaldy branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Kirkcaldy courses in thinking, Python and AI

Pick a course by age and interest. Lesson one is live and free on all of them, and we take no card to book.

- [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids) (Ages 7 to 12): The how-to-think course: learning from mistakes step by step, and noticing when a score is misleading.
- [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev) (Ages 8 to 12): Scratch games planned by the learner, built with an AI and put through their paces.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 13 to 17): Machine learning in Python, including boosting on real Kirkcaldy building shapes.
- [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college) (Students and adults): Python through data, machine learning and AI agents.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Kirkcaldy, Dysart, Templehall and Sinclairtown

The NRS estimate for Kirkcaldy and Dysart, and suburbs on record in KY1 and KY2.

**Kirkcaldy in National Records of Scotland estimates**

| Area | People |
|---|---|
| Kirkcaldy and Dysart locality, mid-2020 | 50,370 |

Chapel, Dunnikier, Dysart, Gallatown, Hayfield, Linktown, Pathhead, Sinclairtown, Smeaton and Templehall are suburban areas of Fife in the KY1 and KY2 postcode districts, according to postcodes.io. Fife schools teach the Curriculum for Excellence, and lessons follow Scottish primary and secondary years, with SQA Computing Science and Maths support at National 5, Higher and Advanced Higher. Pass on the school holiday dates and we will keep those weeks free.

### Fife, Dunfermline and SQA courses

Visit [coding classes in Fife](/coding-classes-in-fife), [Dunfermline](/best-coding-class-in-dunfermline) and [National 5 Computing Science help](/national-5-computing-science-help). Why we teach thinking first is on [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

## Gradient boosting on Kirkcaldy's building outlines: more trees, better model?

Seven shape features, two learning rates, up to 400 trees, and a score that can lie.

The learner downloads OpenStreetMap data over Kirkcaldy in sixteen tiles: 8,723 mapped buildings. Most, 5,917, carry no type and are left aside. Of the rest, 2,618 are tagged as homes of some kind and 170 as other buildings such as shops, garages, schools and churches. For each outline Python works out seven features: area, perimeter, number of corners, circularity, how fully it fills its tightest surrounding rectangle, how long and thin it is, and how many other buildings it touches, since terraces and semis share walls. The model is scored on held-back buildings over ten different random splits.

Because homes outnumber everything else by about fifteen to one, a model that always says "home" is right 93.9% of the time while being useless. So the fair score here is balanced accuracy: the average of the share of homes found and the share of other buildings found.

**Gradient boosting with learning rate 0.1 on Kirkcaldy buildings, averages over 10 splits, our Python run on OpenStreetMap data**

| Trees | Balanced accuracy | Plain accuracy | Other buildings found |
|---|---|---|---|
| 1 | 76.4% | 80.6% | 71.6% |
| 10 | 79.6% | 81.9% | 77.1% |
| 50 | 84.5% | 87.5% | 81.2% |
| 100 | 85.6% | 91.4% | 79.0% |
| 400 | 84.6% | 95.1% | 72.5% |

Balanced accuracy climbs to 85.6% at around 100 trees, beating a single decision tree at 82.7%, then slowly slips. Plain accuracy keeps rising all the way to 95.1%, because the extra trees chase the common case: the share of other buildings found falls from 81.2% to 72.5%. By then the model scores 99.3% on its own training buildings, a sign it is memorising rather than learning. With a learning rate of 1.0 the same thing happens faster and worse: balanced accuracy peaks at 82.6% after only 10 trees and ends at 80.2%, while plain accuracy reaches 96.3%. Small nudges and a sensible stopping point beat big steps and more trees.

### P5 to P7

Sort building pictures with one rule, then add a second rule just for the ones the first got wrong.

### S1 to S3

Measure the area and perimeter of a few Kirkcaldy building outlines in Python.

### S4 and up

Train gradient boosting, plot the score against trees and learning rate, and find the stopping point.

### OpenStreetMap outlines, our model

Building outlines and tags are from OpenStreetMap and its contributors under the Open Database Licence. The features, the model and every score are our own work; tags reflect what volunteers have recorded, not a survey.

## What this teaches about vibe coding and AI agents

A number that keeps going up is not the same as a model that keeps getting better.

**From the Kirkcaldy boosting project to working with AI**

| In the buildings project | When AI trains a model for you |
|---|---|
| Always "home" scored 93.9% | Check the score against a do-nothing guess |
| Balanced accuracy peaked near 100 trees | More training is not always better |
| Plain accuracy still rose to 95.1% | The wrong metric can hide decline |
| Training score reached 99.3% | A near-perfect training score is a warning |
| 5,917 buildings had no type | Unlabelled data cannot check a model |

Ask an AI assistant to "train the most accurate model" on data like this and it may add trees until accuracy stops rising, report 96%, and never mention that the model misses a third of the buildings that matter. In vibe coding the learner describes the task while the AI writes the code; our Kirkcaldy students then pick the metric themselves and choose where to stop. It is tempting to let the model label the 5,917 untyped buildings, but nothing could confirm those labels, so we do not. Agents that train and deploy models for you need the same checks written into their instructions. Agent building comes once a learner is fluent in Python, usually S5 or S6 or as an adult, and Copilot Studio agents are private lessons only. More on [the AI agents course for UK students](/ai-agents-course-for-students-uk) and [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk).

This page is ours alone: OpenStreetMap, National Records of Scotland and postcodes.io provided open data and nothing else, and any error in the model is our own.

## From sorting pictures to boosting models

Primary or secondary year gives us a starting point; the trial fine-tunes it.

- **P1 to P7: How to think** Rules, mistakes and learning a little at a time. [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **P5 to S2: Vibe coding for kids** Games and apps built with an AI and tested by the learner. [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev), [Python and AI for Kids](/courses/python-ai-kids-masterclass)
- **S3 to S6: Python and machine learning** Trees, boosting and fair scoring alongside SQA Computing Science. [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens), [Python for Teens](/courses/python-complete-masterclass-teens)
- **Adults: Machine learning and agents** Models, metrics and AI agents, built in Python. [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college), [Generative AI Course](/courses/complete-generative-ai-masterclass-college)

## What is gradient boosting, and why can more trees make it worse?

Gradient boosting builds many small decision trees one after another, each correcting the mistakes of those before it; add too many, or take steps too large, and it starts fitting quirks of the training data instead of real patterns.

On 2,788 labelled Kirkcaldy building outlines, balanced accuracy peaked at 85.6% after about 100 trees at a learning rate of 0.1, while plain accuracy kept climbing to 95.1% as the model found fewer of the non-home buildings.

Learners who have watched that happen ask of every AI-trained model: which score was it tuned on, and where did it stop?

Choosing the metric and the stopping point keeps Kirkcaldy teenagers in charge of the models they build, and learning to code is how they get that choice in 2026. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Across Kirkcaldy, online

Bring a computer, a webcam and an internet connection able to handle video.

- **Student-driven lessons** The learner types and runs every step while our tutor follows on screen share, asking what each result means.
- **Tailored after the trial** The free first session tells us where to begin; any SQA exam is noted.
- **Free to start** We charge nothing for lesson one and recommend a course at the end.
- **Matched classes** Five to ten UK learners per class, all at a similar stage.
- **Twice a week** Paused during school holidays.
- **Constant hour** UK clock changes do not move your lesson; our tutors adjust.

**Why online** Five learners at one level who are free on the same evening rarely live in the same street. Online, they can learn together anyway.

## Kirkcaldy fees

Kirkcaldy learners pay our international prices, which apply to all countries except India.

- First class: USD 0. One full lesson free, followed by advice.
- Group tuition: USD 100 a month. Approximately eight live group lessons monthly.
- Private tuition: USD 150 a month. Approximately eight live private lessons monthly.

We invoice in US dollars rather than sterling, and only once the trial has confirmed a course and a weekly slot. The pricing page explains holidays, missed lessons and swapping between private and group.

## Kirkcaldy questions

### What is the population of Kirkcaldy?

National Records of Scotland estimated 50,370 people in the Kirkcaldy and Dysart locality in mid-2020.

### Can I take AI and programming classes online in Kirkcaldy?

Yes, through live video lessons for ages 6 to 67 across Kirkcaldy and Fife.

### What is balanced accuracy?

The average of how well a model finds each class. It stops a model that always predicts the common class from looking good; in our Kirkcaldy data that lazy model scores 93.9% accuracy but 50% balanced.

### What does the learning rate do in gradient boosting?

It sets how much each new tree changes the prediction. Small steps learn slowly but steadily; large steps learn fast and tend to overfit, as our 1.0 setting did after 10 trees.

### What is the Kirkcaldy project?

Training gradient boosting on 2,788 labelled building outlines from OpenStreetMap to tell homes from other buildings, and choosing where to stop adding trees.

### Do you teach vibe coding?

Yes, at every age; the learner plans, describes and tests, and the AI helps write the code.

### When do students build AI agents?

After Python becomes fluent, usually S5 or S6 or in adulthood; Copilot Studio agents are one-to-one only.

### Do you support SQA qualifications?

Yes, Computing Science and Maths at National 5, Higher and Advanced Higher, taught for understanding with no promised grades.

### How much are lessons?

Lesson one is free; then USD 100 per month in a group or USD 150 per month one-to-one.

### Are lessons paused in the holidays?

Yes, for school holidays; send us the dates.

## More Fife and east of Scotland pages

Pages with their own projects: [Fife](/coding-classes-in-fife), [Dunfermline](/best-coding-class-in-dunfermline), [Edinburgh](/best-coding-class-in-edinburgh) and [Livingston](/best-coding-and-ai-classes-in-livingston) (a hash tree of the map). The [Scotland page](/coding-and-ai-classes-in-scotland) and the [UK hub](/coding-classes-in-united-kingdom) list the rest.

## Contact

Book the free class on [https://learn.modernagecoders.com/ai-and-programming-classes-in-kirkcaldy](https://learn.modernagecoders.com/ai-and-programming-classes-in-kirkcaldy#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
