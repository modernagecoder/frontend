---
title: "AI and Programming Classes in Leith, Edinburgh | Live Online"
description: "Live online AI and programming classes for Leith, Newhaven, Pilrig, Bonnington and Restalrig learners in Edinburgh, ages 6 to 67. Your first lesson is free."
canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-leith-edinburgh
source: src/pages/ai-and-programming-classes-in-leith-edinburgh.html
---
> Live online AI and programming classes for Leith, Newhaven, Pilrig, Bonnington and Restalrig learners in Edinburgh, ages 6 to 67. Your first lesson is free.

Skip to contentLeith course picks

## Leith courses: how to think, vibe coding, AI and Python

Four starting points by age, each with a live first lesson that costs nothing and asks for no card.

[![Problem Solving and Computational Thinking for Kids course thumbnail](/images/problem-solving-kids.webp)Ages 7 to 12Problem Solving and Computational Thinking for KidsThe how-to-think course: what makes a corner a corner, and other rules a computer can follow.See the syllabus](/courses/problem-solving-and-computational-thinking-for-kids)[![Vibe Coding for Kids course thumbnail](/images/vibe-coding-kids.webp)Ages 8 to 12Vibe Coding for KidsScratch games planned by the child, drafted with an AI, then played and fixed.See the syllabus](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)Ages 13 to 17AI and Machine Learning for TeensMachine learning and computer vision in Python, including the Leith corner finder.See the syllabus](/courses/ai-ml-masterclass-teens)[![Python Masterclass course thumbnail](/images/python-college.webp)Students and adultsPython MasterclassPython for images, data, automation and AI agents.See the syllabus](/courses/python-programming-masterclass-zero-to-advanced-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Leith in open postcode data

## Leith, Newhaven, Pilrig, Bonnington and Restalrig

The places recorded in EH6 and EH7, and the school system lessons fit around.

| Postcode district | Recorded places |
| --- | --- |
| EH6 | Leith, North Leith, South Leith, Newhaven, Bonnington, Pilrig, Trinity |
| EH7 | Lochend, Restalrig |

We quote a population only where an official body publishes one for exactly the place named, and for Leith we found none. Children in Leith are taught under the Curriculum for Excellence, so we ask for a P or S stage, not a year group, and we help with SQA Maths and Computing Science from National 5 through Higher to Advanced Higher. Share the Edinburgh holiday dates and we keep those weeks clear.

### Edinburgh, Scotland and exam help

For the city as a whole see [Edinburgh](/best-coding-class-in-edinburgh), and for the nation [Scotland](/coding-and-ai-classes-in-scotland). SQA support is described on [Advanced Higher Maths tuition](/advanced-higher-maths-tuition-online), and our teaching approach on [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

The Leith project

## Finding 1,485 building corners with Harris corner detection

A map drawn as a picture, a detector run over it, and a mark out of 1,485.

The learner takes a 498 m square from OpenStreetMap, lying wholly inside the area the map outlines as Leith. It holds 275 complete building outlines with 3,102 points between them. A point counts as a true corner when the outline turns there by 30 degrees or more, which gives 1,485 corners once points within a metre of each other are merged. The program then draws the buildings as white shapes on a black picture and forgets the outlines. The detector sees only pixels. For each pixel it measures how fast brightness changes across and down, combines the two into a Harris score, and keeps the local peaks above a chosen share of the strongest score. A detection is right if a true corner lies within 2 m.

| Threshold (share of strongest score) | Detections | Precision | Recall |
| --- | --- | --- | --- |
| 1% | 2,061 | 54.1% | 85.0% |
| 5% | 1,053 | 97.2% | 82.0% |
| 40% | 860 | 99.8% | 69.3% |

| Pixel size | Detections | Precision | Recall |
| --- | --- | --- | --- |
| 0.5 m | 1,053 | 97.2% | 82.0% |
| 1 m | 765 | 87.8% | 55.5% |
| 2 m | 457 | 46.8% | 16.4% |

Precision is the share of detections that are real corners; recall is the share of real corners that were found. At a 5% threshold the detector made 1,053 detections, 97.2% of them correct, and 82.0% of the true corners had a detection within 2 m. Drop the threshold to 1% and detections nearly double to 2,061, but recall only creeps up to 85.0% while precision collapses to 54.1%: almost all the extra detections are false. Raise it to 40% and nearly every detection is right, at the price of missing three corners in ten. Coarser pictures are worse on both counts. At 2 m per pixel the detector finds 16.4% of corners and fewer than half of its 457 detections are right; one pixel is then as wide as the whole 2 m matching tolerance. Recall can run ahead of the detection count because one detection may sit within 2 m of two close corners.

### P5 to P7

Slide a small paper window over a drawn shape and sort each spot into flat, edge or corner.

### S1 to S3

Draw the building picture in Python and count true corners from the outline angles.

### S4 and up

Code the Harris score with NumPy, sweep the threshold and plot precision against recall.

### Map data from OpenStreetMap, analysis by us

Building outlines come from OpenStreetMap and its contributors under the Open Database Licence. They are drawn by volunteers, so a real building may have corners the map leaves out. A clean drawing is also far easier than a photograph. These scores describe our exercise, not how the method performs on real images.

Vision, vibe coding and agents

## From a corner finder to AI that sees

Modern vision models learn their own features, yet the same trade-offs remain.

| In the corner project | In AI more widely |
| --- | --- |
| A 1% threshold doubled detections and halved precision | A confidence cut-off trades false alarms against misses |
| A 40% threshold was almost always right but missed three in ten | High precision alone can hide poor coverage |
| Recall fell to 16.4% at 2 m pixels | Low-resolution input limits what any model can see |
| True corners came from the map outlines | Scores mean nothing without trusted ground truth |
| A drawing is easier than a photo | Test data must resemble real use |

A vision library will return corners in one line, and an AI assistant will write that line for you without mentioning a threshold. In vibe coding, a person states what the program should do and an AI produces the code; Leith learners are taught to ask for the threshold and the pixel size as named settings, then measure what changing them does. That is the difference between using a tool and understanding it. AI agents that read screens, documents or camera feeds depend on the same kind of detector underneath. Building agents starts when a learner writes Python with confidence, often about S5 onwards, and our Copilot Studio agents course runs one-to-one only. See [the AI agents course for UK students](/ai-agents-course-for-students-uk) and [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk).

OpenStreetMap, National Records of Scotland and postcodes.io are independent publishers of open data with no link to Modern Age Coders. We wrote the detector and the scoring, and errors in either are ours.

Routes

## From shapes on paper to computer vision

A P or S stage suggests a band; the trial lesson confirms it.

P1 to P7

### How to think

Shapes, rules and sorting things a computer could sort.

[Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)[Scratch Coding for Kids](/courses/scratch-programming-complete-course)P5 to S2

### Vibe coding for kids

Games and apps built alongside an AI, with the learner in charge.

[Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[Python and AI for Kids](/courses/python-ai-kids-masterclass)S3 to S6

### Python, AI and vision

Arrays, gradients and classifiers, in step with SQA Computing Science and Maths.

[AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens)[Python for Teens](/courses/python-complete-masterclass-teens)Adults

### AI, vision and agents

Image processing, models and AI agents in Python.

[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)[Generative AI Course](/courses/complete-generative-ai-masterclass-college)Computer vision

## How does a computer find corners in an image?

It looks for pixels where brightness changes strongly in two directions at once: Harris corner detection scores every pixel from the brightness gradients around it, and the peaks above a threshold are reported as corners, since an edge changes in one direction only and a flat area in none.

On a drawn map of 275 Leith buildings with 1,485 true corners, a 5% threshold at 0.5 m per pixel gave 97.2% precision and 82.0% recall; a 1% threshold cut precision to 54.1%, and 2 m pixels cut recall to 16.4%.

Learners who have moved that threshold themselves ask of any AI vision system: what was it tuned to avoid, false alarms or misses?

A Leith teenager who has scored a detector against known answers understands evaluation, the part of AI that matters most once models are easy to call. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

Format

## Live lessons for Leith, Newhaven and Restalrig

You will need a computer with a working camera and an internet line that carries a video call.

### The pupil does the coding

With the screen shared, the pupil writes and runs the program. The tutor questions and explains, and never takes over the keys.

### Trial first

A free session tells us the level and whether an SQA course is in play.

### Opening lesson free

It costs nothing and closes with a suggested course.

### Classes of fifteen to twenty

Grouped by level, with classmates from across Britain.

### Two sessions weekly

During the school term.

### Your hour is fixed

Tutors shift with the UK clock changes so you never have to.

Why online

Matching fifteen to twenty people by level and free hour is hard inside one district and easy across a country. Video makes that possible.

Fees

## Fees for Leith

Leith pays what every learner outside India pays: our international rates.

First class**USD 0**

A whole lesson without charge, followed by course advice.

Group tuition**USD 100**

Eight or so live group lessons monthly.

Private tuition**USD 150**

Eight or so live one-to-one lessons monthly.

Prices are set in US dollars and we publish none in sterling. Nothing is charged until the trial is over and a course and time are agreed. The pricing page explains holiday breaks, missed lessons and changing between a class and a private tutor.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20please%20could%20we%20arrange%20a%20free%20AI%20or%20programming%20lesson%20for%20a%20learner%20in%20Leith%3F)Reviews

## What Edinburgh and UK learners wrote on Google

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

## Reserve a free lesson in Leith

An age or school stage and one interest are enough. The trial may be a shape-sorting puzzle, a Scratch game made with an AI, a first Python program, or a look at how a computer finds corners.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Leith one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20please%20could%20we%20arrange%20a%20free%20AI%20or%20programming%20lesson%20for%20a%20learner%20in%20Leith%3F)

Submitted details are used for placement and follow-up.

FAQ

## Leith questions

Corner detection, the Leith project, vibe coding, agents and the practical side.

### What is the population of Leith?

We found no official figure published for Leith under that name, so we give none. The City of Edinburgh council area had about 512,700 residents in the 2022 census.

### Are there online AI and programming classes for Leith?

Yes. We teach live by video, for ages 6 to 67, in Leith, Newhaven, Pilrig, Bonnington, Restalrig and the rest of Edinburgh.

### What is Harris corner detection?

A method that scores each pixel by how strongly brightness changes in two directions around it. High-scoring peaks are corners; edges and flat areas score low.

### What is the difference between precision and recall?

Precision is how many of the things a detector reported were real. Recall is how many of the real things it reported. In the Leith project a 5% threshold gave 97.2% precision and 82.0% recall.

### What is the Leith project?

A Python program draws 275 Leith buildings from open map data, runs a corner detector on the picture, and checks the result against 1,485 known corners.

### How do you teach vibe coding?

The learner says what they want, an AI writes a draft, and the learner reads, tests and fixes it. Children start from about age eight.

### When do learners build AI agents?

After they write Python with confidence, often about S5 onwards. The Copilot Studio agents course is one-to-one only.

### Do you cover SQA Computing Science and Maths?

Yes, from National 5 to Advanced Higher. We work on understanding and make no promise about grades.

### What do lessons cost?

The opening lesson is free. A class is USD 100 monthly and a private tutor USD 150 monthly.

### Do you teach in the school holidays?

Not in the weeks you ask us to skip; send the dates and we plan round them.

Further afield

## More pages across Scotland

Each page has a project of its own: [Edinburgh](/best-coding-class-in-edinburgh), [Musselburgh](/online-coding-and-python-classes-in-musselburgh), [Livingston](/best-coding-and-ai-classes-in-livingston) and [Dundee](/best-coding-class-in-dundee). The [UK hub](/coding-classes-in-united-kingdom) lists every other place.

Book the free class[Book a priority demo](/book-demo)[WhatsApp us](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20please%20could%20we%20arrange%20a%20free%20AI%20or%20programming%20lesson%20for%20a%20learner%20in%20Leith%3F)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-leith-edinburgh*
