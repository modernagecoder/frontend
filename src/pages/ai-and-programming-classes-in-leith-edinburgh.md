---
title: "AI and Programming Classes in Leith, Edinburgh | Live Online"
description: "Live online AI and programming classes for Leith, Newhaven, Pilrig, Bonnington and Restalrig learners in Edinburgh, ages 6 to 67. Your first lesson is free."
canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-leith-edinburgh
source: src/pages/ai-and-programming-classes-in-leith-edinburgh.html
---
> Leith sits within the City of Edinburgh council area, home to about 512,700 people at Scotland's 2022 census. We could find no official count for Leith under that name, so we print none. Open postcode data lists North Leith, South Leith, Newhaven, Bonnington, Pilrig and Trinity in EH6, and Lochend and Restalrig in EH7. Modern Age Coders teaches AI, Python, programming and maths to learners aged six to 67 in live online lessons led from India, either individually or in classes of five to ten at the same level. We teach how a method works before using a library that hides it. There is no charge for the opening lesson, and it ends with the course we think fits. For Leith the project is computer vision: a program looks for the corners of 275 buildings and is marked against the 1,485 corners actually on the map. Ongoing lessons cost USD 100 monthly for a class or USD 150 monthly for a tutor of your own.

[Home](/) / [United Kingdom](/coding-classes-in-united-kingdom) / [Edinburgh](/best-coding-class-in-edinburgh) / Leith

Leith, Edinburgh, Scotland / Live online

# AI and programming classes in Leith, Edinburgh

**What are the best AI and programming classes for Leith learners?** Leith sits within the City of Edinburgh council area, home to about 512,700 people at Scotland's 2022 census. We could find no official count for Leith under that name, so we print none. Open postcode data lists North Leith, South Leith, Newhaven, Bonnington, Pilrig and Trinity in EH6, and Lochend and Restalrig in EH7. Modern Age Coders teaches AI, Python, programming and maths to learners aged six to 67 in live online lessons led from India, either individually or in classes of five to ten at the same level. We teach how a method works before using a library that hides it. There is no charge for the opening lesson, and it ends with the course we think fits. For Leith the project is computer vision: a program looks for the corners of 275 buildings and is marked against the 1,485 corners actually on the map. Ongoing lessons cost USD 100 monthly for a class or USD 150 monthly for a tutor of your own.

Before a computer can match two photos, track a moving object or stitch a panorama, it needs points it can find again. Corners are ideal. Along a plain wall, brightness changes in one direction only, so a small patch looks the same if you slide it along the edge. At a corner, brightness changes in two directions, and any slide changes the patch. Harris corner detection turns that observation into a score for every pixel, then keeps the peaks above a threshold. Two choices decide how well it works: where the threshold sits, and how fine the image is. This project measures both on a drawn map of Leith, where the true corners are known.

Facts last verified 30 September 2026. Teaching is online; no Leith branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Leith courses: how to think, vibe coding, AI and Python

Four starting points by age, each with a live first lesson that costs nothing and asks for no card.

- [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids) (Ages 7 to 12): The how-to-think course: what makes a corner a corner, and other rules a computer can follow.
- [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev) (Ages 8 to 12): Scratch games planned by the child, drafted with an AI, then played and fixed.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 13 to 17): Machine learning and computer vision in Python, including the Leith corner finder.
- [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college) (Students and adults): Python for images, data, automation and AI agents.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Leith, Newhaven, Pilrig, Bonnington and Restalrig

The places recorded in EH6 and EH7, and the school system lessons fit around.

**Places recorded by postcodes.io in two Edinburgh postcode districts**

| Postcode district | Recorded places |
|---|---|
| EH6 | Leith, North Leith, South Leith, Newhaven, Bonnington, Pilrig, Trinity |
| EH7 | Lochend, Restalrig |

We quote a population only where an official body publishes one for exactly the place named, and for Leith we found none. Children in Leith are taught under the Curriculum for Excellence, so we ask for a P or S stage, not a year group, and we help with SQA Maths and Computing Science from National 5 through Higher to Advanced Higher. Share the Edinburgh holiday dates and we keep those weeks clear.

### Edinburgh, Scotland and exam help

For the city as a whole see [Edinburgh](/best-coding-class-in-edinburgh), and for the nation [Scotland](/coding-and-ai-classes-in-scotland). SQA support is described on [Advanced Higher Maths tuition](/advanced-higher-maths-tuition-online), and our teaching approach on [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

## Finding 1,485 building corners with Harris corner detection

A map drawn as a picture, a detector run over it, and a mark out of 1,485.

The learner takes a 498 m square from OpenStreetMap, lying wholly inside the area the map outlines as Leith. It holds 275 complete building outlines with 3,102 points between them. A point counts as a true corner when the outline turns there by 30 degrees or more, which gives 1,485 corners once points within a metre of each other are merged. The program then draws the buildings as white shapes on a black picture and forgets the outlines. The detector sees only pixels. For each pixel it measures how fast brightness changes across and down, combines the two into a Harris score, and keeps the local peaks above a chosen share of the strongest score. A detection is right if a true corner lies within 2 m.

**Changing the threshold at 0.5 m per pixel, our Python run on OpenStreetMap footprints**

| Threshold (share of strongest score) | Detections | Precision | Recall |
|---|---|---|---|
| 1% | 2,061 | 54.1% | 85.0% |
| 5% | 1,053 | 97.2% | 82.0% |
| 40% | 860 | 99.8% | 69.3% |

**Changing the pixel size at a 5% threshold**

| Pixel size | Detections | Precision | Recall |
|---|---|---|---|
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

## From a corner finder to AI that sees

Modern vision models learn their own features, yet the same trade-offs remain.

**What the Leith corner finder shows about AI systems**

| In the corner project | In AI more widely |
|---|---|
| A 1% threshold doubled detections and halved precision | A confidence cut-off trades false alarms against misses |
| A 40% threshold was almost always right but missed three in ten | High precision alone can hide poor coverage |
| Recall fell to 16.4% at 2 m pixels | Low-resolution input limits what any model can see |
| True corners came from the map outlines | Scores mean nothing without trusted ground truth |
| A drawing is easier than a photo | Test data must resemble real use |

A vision library will return corners in one line, and an AI assistant will write that line for you without mentioning a threshold. In vibe coding, a person states what the program should do and an AI produces the code; Leith learners are taught to ask for the threshold and the pixel size as named settings, then measure what changing them does. That is the difference between using a tool and understanding it. AI agents that read screens, documents or camera feeds depend on the same kind of detector underneath. Building agents starts when a learner writes Python with confidence, often about S5 onwards, and our Copilot Studio agents course runs one-to-one only. See [the AI agents course for UK students](/ai-agents-course-for-students-uk) and [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk).

OpenStreetMap, National Records of Scotland and postcodes.io are independent publishers of open data with no link to Modern Age Coders. We wrote the detector and the scoring, and errors in either are ours.

## From shapes on paper to computer vision

A P or S stage suggests a band; the trial lesson confirms it.

- **P1 to P7: How to think** Shapes, rules and sorting things a computer could sort. [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **P5 to S2: Vibe coding for kids** Games and apps built alongside an AI, with the learner in charge. [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev), [Python and AI for Kids](/courses/python-ai-kids-masterclass)
- **S3 to S6: Python, AI and vision** Arrays, gradients and classifiers, in step with SQA Computing Science and Maths. [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens), [Python for Teens](/courses/python-complete-masterclass-teens)
- **Adults: AI, vision and agents** Image processing, models and AI agents in Python. [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college), [Generative AI Course](/courses/complete-generative-ai-masterclass-college)

## How does a computer find corners in an image?

It looks for pixels where brightness changes strongly in two directions at once: Harris corner detection scores every pixel from the brightness gradients around it, and the peaks above a threshold are reported as corners, since an edge changes in one direction only and a flat area in none.

On a drawn map of 275 Leith buildings with 1,485 true corners, a 5% threshold at 0.5 m per pixel gave 97.2% precision and 82.0% recall; a 1% threshold cut precision to 54.1%, and 2 m pixels cut recall to 16.4%.

Learners who have moved that threshold themselves ask of any AI vision system: what was it tuned to avoid, false alarms or misses?

A Leith teenager who has scored a detector against known answers understands evaluation, the part of AI that matters most once models are easy to call. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Live lessons for Leith, Newhaven and Restalrig

You will need a computer with a working camera and an internet line that carries a video call.

- **The pupil does the coding** With the screen shared, the pupil writes and runs the program. The tutor questions and explains, and never takes over the keys.
- **Trial first** A free session tells us the level and whether an SQA course is in play.
- **Opening lesson free** It costs nothing and closes with a suggested course.
- **Classes of five to ten** Grouped by level, with classmates from across Britain.
- **Two sessions weekly** During the school term.
- **Your hour is fixed** Tutors shift with the UK clock changes so you never have to.

**Why online** Matching five to ten people by level and free hour is hard inside one district and easy across a country. Video makes that possible.

## Fees for Leith

Leith pays what every learner outside India pays: our international rates.

- First class: USD 0. A whole lesson without charge, followed by course advice.
- Group tuition: USD 100 a month. Eight or so live group lessons monthly.
- Private tuition: USD 150 a month. Eight or so live one-to-one lessons monthly.

Prices are set in US dollars and we publish none in sterling. Nothing is charged until the trial is over and a course and time are agreed. The pricing page explains holiday breaks, missed lessons and changing between a class and a private tutor.

## Leith questions

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

## More pages across Scotland

Each page has a project of its own: [Edinburgh](/best-coding-class-in-edinburgh), [Musselburgh](/online-coding-and-python-classes-in-musselburgh), [Livingston](/best-coding-and-ai-classes-in-livingston) and [Dundee](/best-coding-class-in-dundee). The [UK hub](/coding-classes-in-united-kingdom) lists every other place.

## Contact

Book the free class on [https://learn.modernagecoders.com/ai-and-programming-classes-in-leith-edinburgh](https://learn.modernagecoders.com/ai-and-programming-classes-in-leith-edinburgh#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
