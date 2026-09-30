---
title: "AI and Programming Classes in the West End, Glasgow | 6 to 67"
description: "Live online AI, programming, Python and vibe coding lessons for Hillhead, Hyndland, Partick and Dowanhill learners in Glasgow, aged 6 to 67. First lesson free."
canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-west-end-glasgow
source: src/pages/ai-and-programming-classes-in-west-end-glasgow.html
---
> We found no official boundary or population for Glasgow's West End, so we quote none; it lies within Glasgow City, which counted about 620,700 residents in Scotland's 2022 census. Hillhead, Hyndland, Partick, Dowanhill, Kelvinside, Kelvindale and Yorkhill are recorded suburbs in the G3, G11 and G12 postcode districts. AI, programming, Python, vibe coding and maths are taught by our India-based tutors on live video to anyone aged six to 67, solo or among five to ten classmates of the same stage. Reasoning is taught ahead of tools, so a learner can question where a model drew its line. The opening lesson is free of charge and closes with a named course recommendation. The West End project measures 5,045 mapped building footprints and lets a classic algorithm, Otsu's method, pick the dividing size between houses and apartment blocks with no labels at all. Families who continue pay USD 100 monthly when the learner joins a class, USD 150 monthly when the tutor is theirs alone.

[Home](/) / [United Kingdom](/coding-classes-in-united-kingdom) / [Glasgow](/best-coding-class-in-glasgow) / West End, Glasgow

West End, Glasgow, Scotland / Live online

# AI and programming classes in the West End, Glasgow

**Which are the best AI and programming classes in Glasgow's West End?** We found no official boundary or population for Glasgow's West End, so we quote none; it lies within Glasgow City, which counted about 620,700 residents in Scotland's 2022 census. Hillhead, Hyndland, Partick, Dowanhill, Kelvinside, Kelvindale and Yorkhill are recorded suburbs in the G3, G11 and G12 postcode districts. AI, programming, Python, vibe coding and maths are taught by our India-based tutors on live video to anyone aged six to 67, solo or among five to ten classmates of the same stage. Reasoning is taught ahead of tools, so a learner can question where a model drew its line. The opening lesson is free of charge and closes with a named course recommendation. The West End project measures 5,045 mapped building footprints and lets a classic algorithm, Otsu's method, pick the dividing size between houses and apartment blocks with no labels at all. Families who continue pay USD 100 monthly when the learner joins a class, USD 150 monthly when the tutor is theirs alone.

Many AI systems end with a simple question: above or below some cut-off? Spam or not, edge or background, large or small. Someone has to choose that cut-off, and guessing it is a poor plan. In 1979 Nobuyuki Otsu published a way for the data to choose: try every possible threshold, and keep the one that pulls the two resulting groups furthest apart while keeping each group tight. It is still the standard first step in turning a grey image into black and white. This project applies it to something easier to picture: the ground area of every building mapped on OpenStreetMap across the West End, where houses sit among larger apartment blocks.

Facts last verified 30 September 2026. Teaching is online; no West End, Glasgow branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## West End courses in reasoning, Python and AI

Four courses arranged by age. Each begins with a live lesson that is free, and booking takes no card.

- [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids) (Ages 7 to 12): The how-to-think course: sorting things into two groups and arguing about where the line goes.
- [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev) (Ages 8 to 12): Scratch games imagined by the learner, built with an AI and tested properly.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 13 to 17): Machine learning in Python, including automatic thresholds on West End building data.
- [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college) (Students and adults): Python for data, images, machine learning and AI agents.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Hillhead, Hyndland, Partick and Dowanhill

Recorded suburbs in the West End postcode districts, and why no population is quoted.

**Suburban areas recorded by postcodes.io in three Glasgow postcode districts**

| Postcode district | Recorded suburban areas |
|---|---|
| G12 | Hillhead, Hyndland, Dowanhill, Kelvinside, Kelvindale |
| G11 | Partick, Broomhill |
| G3 | Kelvingrove, Yorkhill |

National Records of Scotland publishes figures for Glasgow City, not for the West End, and we will not invent one. Schools here follow the Curriculum for Excellence, so our tutors plan by P and S stage and support SQA Computing Science and Maths at National 5, Higher and Advanced Higher. Tell us the school holiday dates and lessons will stop for them.

### Glasgow, Scotland and SQA help

The city-wide page is [Glasgow](/best-coding-class-in-glasgow), with more on [Scotland](/coding-and-ai-classes-in-scotland) and [Higher Maths tuition](/higher-maths-tuition-online). Why thinking comes before prompting is on [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

## Otsu's method on 5,045 West End buildings: a threshold the data chooses

Measure every footprint, draw the histogram, and let the algorithm find the gap.

The learner downloads OpenStreetMap data for a rectangle over the West End and computes the ground area of each of its 5,045 building outlines with the shoelace formula. The median footprint is 158.2 square metres and the largest is 19,889. Otsu's method takes the histogram of those areas, tries each of 256 possible cut-offs, and scores every one by the between-class variance: how far apart the two group averages are, weighted by group size. No labels are used. Only afterwards does the learner check the answer against buildings that mappers have tagged: 1,169 houses and 884 apartment blocks.

**Cut-offs for telling houses from apartment blocks by footprint, checked on 2,053 tagged buildings, our Python run on OpenStreetMap data**

| Cut-off | How it was chosen | Tagged buildings on the right side |
|---|---|---|
| 50 sq m | A guess | 46.1% |
| 100 sq m | A guess | 63.0% |
| 144.4 sq m | Otsu on log area, no labels | 81.0% |
| 152 sq m | Tuned using the labels | 82.0% |
| 300 sq m | A guess | 66.3% |
| 4,973.9 sq m | Otsu on raw area | 56.9% |

Working on the logarithm of area, Otsu chooses 144.4 square metres, putting 76.6% of tagged houses below the line and 86.8% of apartment blocks above it, 81.0% overall. The highest-scoring single cut-off, found by peeking at the labels, is 152 square metres at 82.0%, so the unsupervised answer is within a point of the ceiling. Run the same method on raw areas and it fails: a handful of enormous buildings stretch the scale, the cut-off jumps to 4,973.9 square metres with only nine buildings above it, and the score of 56.9% is what you get by calling everything a house. Otsu assumes two humps in the histogram. Footprints only show two humps once the scale is logarithmic.

### P5 to P7

Line up objects by size and decide together where "small" stops and "large" starts, then defend the choice.

### S1 to S3

Compute a few West End footprint areas in Python with the shoelace formula and plot a histogram.

### S4 and up

Write Otsu's method from the between-class variance and compare raw and logarithmic scales.

### OpenStreetMap footprints, our thresholds

Building outlines and tags are from OpenStreetMap and its contributors under the Open Database Licence. Areas, thresholds and scores are our own; the tags are volunteers' descriptions, not a survey of how buildings are used.

## What this teaches about vibe coding and AI agents

A formula can place the line, but someone still chose the formula.

**From the West End threshold to working with AI**

| In the footprint project | When AI makes a yes or no call |
|---|---|
| Guessed cut-offs scored 46% to 75% | Arbitrary thresholds cost accuracy |
| Otsu reached 81.0% without labels | Data can often set its own threshold |
| Labels only added one point | Check how much supervision really buys |
| Raw areas broke the method | The scale of the input changes the answer |
| 2,242 buildings had no type | Unlabelled cases cannot confirm anything |

Classifiers, spam filters and image tools all hide a threshold somewhere, and an AI assistant asked to "separate the two groups" will pick one without comment. In vibe coding the learner describes the task and the AI writes the code; our West End students then ask how the cut-off was chosen, on what scale, and test it against cases with known answers. Agents that sort or flag things automatically need that question built in. Learners take on agent building when their Python runs without help, usually from S5 or as adults, and Copilot Studio agents are taught only in private lessons. Start with [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk), then see [how UK students reach agent building](/ai-agents-course-for-students-uk).

OpenStreetMap, National Records of Scotland and postcodes.io supplied open data only and have no link with us; the analysis and its mistakes are Modern Age Coders' own.

## From sorting by size to automatic thresholds

School stage is a rough guide; ten minutes of the trial shows the true level.

- **P1 to P7: How to think** Grouping, borderline cases and explaining a rule. [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **P5 to S2: Vibe coding for kids** Games and small apps made with AI help and tested by the learner. [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev), [Python and AI for Kids](/courses/python-ai-kids-masterclass)
- **S3 to S6: Python and machine learning** Histograms, variance and classifiers beside SQA Maths and Computing Science. [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens), [Statistics & Probability](/courses/statistics-probability-maths-course)
- **Adults: Machine learning and agents** Python, models, thresholds and AI agents. [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college), [Generative AI Course](/courses/complete-generative-ai-masterclass-college)

## What is Otsu's method, and how does it choose a threshold automatically?

Otsu's method tests every possible cut-off on a histogram and keeps the one that maximises the between-class variance, so the two groups it creates are as separate as possible; it needs no labels, but it assumes the data has two humps.

On 5,045 West End building footprints it chose 144.4 square metres, which put 81.0% of tagged houses and apartment blocks on the right side, against 82.0% for a cut-off tuned with the labels and 56.9% when the method was run on raw, unlogged areas.

Learners who have coded it ask of any AI decision: where is the threshold, who set it, and on what scale?

Being able to find and question the cut-off keeps West End teenagers in control of the models they build, and that skill is learned by programming. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Hillhead to Partick, taught online

A computer with a camera and a connection that handles video is the full equipment list.

- **Learner at the keyboard** The student writes and runs every line; the tutor watches on screen share and asks them to justify each choice.
- **Trial sets the start** We find the first topic in the free lesson and note any SQA course.
- **Nothing to pay at first** Lesson one is free and finishes with our course suggestion.
- **Matched by stage** Classes hold five to ten learners at one level, drawn from across Britain.
- **Two lessons a week** Term time only.
- **Same hour all year** When the clocks change, our tutors shift, not you.

**Why online** Five learners at one stage, all free on the same evening, are rarely found on one street. Online, they do not have to be.

## West End fees

West End learners pay our international rates, used everywhere outside India.

- First class: USD 0. A free full lesson, then a recommendation.
- Group tuition: USD 100 a month. About eight live lessons a month in a small class.
- Private tuition: USD 150 a month. About eight live private lessons a month.

Our invoices are raised in US dollars (we keep no pound price list), and the first one waits until a course and weekly hour have been agreed at the trial. Holidays, absences and changing format are explained on the pricing page.

## West End questions

### How many people live in Glasgow's West End?

We found no official figure for an area called the West End, so we quote none. Glasgow City as a whole had about 620,700 people in the 2022 census.

### Are AI and programming classes available online in the West End?

Yes, as live video lessons for ages 6 to 67 in Hillhead, Hyndland, Partick and the surrounding districts.

### What is between-class variance?

A measure of how far apart two groups' averages are, weighted by the size of each group. Otsu's method picks the cut-off that makes it largest.

### When does Otsu's method fail?

When the histogram does not have two clear humps. On raw West End footprint areas, a few huge buildings dragged the cut-off to 4,973.9 square metres; on a logarithmic scale it worked well.

### What is the West End project?

Measuring 5,045 mapped building footprints and letting Otsu's method choose the size that separates houses from apartment blocks, then checking it against tagged buildings.

### Is vibe coding taught?

Yes, at every age: the learner explains what to build and tests what the AI produces.

### When can learners build AI agents?

Once their Python runs without help, usually from S5 or as adults; Copilot Studio agents are one-to-one only.

### Do you support National 5, Higher and Advanced Higher?

Yes, in Computing Science and Maths, taught for understanding with no grade promised.

### What do lessons cost?

Zero for the trial lesson, then a monthly USD 100 (class) or USD 150 (private).

### Do you teach through the school holidays?

We stop for them. Share your dates and those weeks are left clear.

## More Glasgow and west of Scotland pages

Pages with different projects: [Glasgow](/best-coding-class-in-glasgow) (how long is the city boundary?), [Paisley](/online-coding-and-python-classes-in-paisley), [East Kilbride](/ai-and-programming-classes-in-east-kilbride) and [Coatbridge](/online-coding-and-python-classes-in-coatbridge). The [UK hub](/coding-classes-in-united-kingdom) lists every area.

## Contact

Book the free class on [https://learn.modernagecoders.com/ai-and-programming-classes-in-west-end-glasgow](https://learn.modernagecoders.com/ai-and-programming-classes-in-west-end-glasgow#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
