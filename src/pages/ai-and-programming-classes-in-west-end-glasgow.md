---
title: "AI and Programming Classes in the West End, Glasgow | 6 to 67"
description: "Live online AI, programming, Python and vibe coding lessons for Hillhead, Hyndland, Partick and Dowanhill learners in Glasgow, aged 6 to 67. First lesson free."
canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-west-end-glasgow
source: src/pages/ai-and-programming-classes-in-west-end-glasgow.html
---
> Live online AI, programming, Python and vibe coding lessons for Hillhead, Hyndland, Partick and Dowanhill learners in Glasgow, aged 6 to 67. First lesson free.

Skip to contentWest End course picks

## West End courses in reasoning, Python and AI

Four courses arranged by age. Each begins with a live lesson that is free, and booking takes no card.

[![Problem Solving and Computational Thinking for Kids course thumbnail](/images/problem-solving-kids.webp)Ages 7 to 12Problem Solving and Computational Thinking for KidsThe how-to-think course: sorting things into two groups and arguing about where the line goes.See the syllabus](/courses/problem-solving-and-computational-thinking-for-kids)[![Vibe Coding for Kids course thumbnail](/images/vibe-coding-kids.webp)Ages 8 to 12Vibe Coding for KidsScratch games imagined by the learner, built with an AI and tested properly.See the syllabus](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)Ages 13 to 17AI and Machine Learning for TeensMachine learning in Python, including automatic thresholds on West End building data.See the syllabus](/courses/ai-ml-masterclass-teens)[![Python Masterclass course thumbnail](/images/python-college.webp)Students and adultsPython MasterclassPython for data, images, machine learning and AI agents.See the syllabus](/courses/python-programming-masterclass-zero-to-advanced-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)The West End

## Hillhead, Hyndland, Partick and Dowanhill

Recorded suburbs in the West End postcode districts, and why no population is quoted.

| Postcode district | Recorded suburban areas |
| --- | --- |
| G12 | Hillhead, Hyndland, Dowanhill, Kelvinside, Kelvindale |
| G11 | Partick, Broomhill |
| G3 | Kelvingrove, Yorkhill |

National Records of Scotland publishes figures for Glasgow City, not for the West End, and we will not invent one. Schools here follow the Curriculum for Excellence, so our tutors plan by P and S stage and support SQA Computing Science and Maths at National 5, Higher and Advanced Higher. Tell us the school holiday dates and lessons will stop for them.

### Glasgow, Scotland and SQA help

The city-wide page is [Glasgow](/best-coding-class-in-glasgow), with more on [Scotland](/coding-and-ai-classes-in-scotland) and [Higher Maths tuition](/higher-maths-tuition-online). Why thinking comes before prompting is on [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

The West End project

## Otsu's method on 5,045 West End buildings: a threshold the data chooses

Measure every footprint, draw the histogram, and let the algorithm find the gap.

The learner downloads OpenStreetMap data for a rectangle over the West End and computes the ground area of each of its 5,045 building outlines with the shoelace formula. The median footprint is 158.2 square metres and the largest is 19,889. Otsu's method takes the histogram of those areas, tries each of 256 possible cut-offs, and scores every one by the between-class variance: how far apart the two group averages are, weighted by group size. No labels are used. Only afterwards does the learner check the answer against buildings that mappers have tagged: 1,169 houses and 884 apartment blocks.

| Cut-off | How it was chosen | Tagged buildings on the right side |
| --- | --- | --- |
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

Thresholds and AI

## What this teaches about vibe coding and AI agents

A formula can place the line, but someone still chose the formula.

| In the footprint project | When AI makes a yes or no call |
| --- | --- |
| Guessed cut-offs scored 46% to 75% | Arbitrary thresholds cost accuracy |
| Otsu reached 81.0% without labels | Data can often set its own threshold |
| Labels only added one point | Check how much supervision really buys |
| Raw areas broke the method | The scale of the input changes the answer |
| 2,242 buildings had no type | Unlabelled cases cannot confirm anything |

Classifiers, spam filters and image tools all hide a threshold somewhere, and an AI assistant asked to "separate the two groups" will pick one without comment. In vibe coding the learner describes the task and the AI writes the code; our West End students then ask how the cut-off was chosen, on what scale, and test it against cases with known answers. Agents that sort or flag things automatically need that question built in. Learners take on agent building when their Python runs without help, usually from S5 or as adults, and Copilot Studio agents are taught only in private lessons. Start with [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk), then see [how UK students reach agent building](/ai-agents-course-for-students-uk).

OpenStreetMap, National Records of Scotland and postcodes.io supplied open data only and have no link with us; the analysis and its mistakes are Modern Age Coders' own.

Stages

## From sorting by size to automatic thresholds

School stage is a rough guide; ten minutes of the trial shows the true level.

P1 to P7

### How to think

Grouping, borderline cases and explaining a rule.

[Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)[Scratch Coding for Kids](/courses/scratch-programming-complete-course)P5 to S2

### Vibe coding for kids

Games and small apps made with AI help and tested by the learner.

[Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[Python and AI for Kids](/courses/python-ai-kids-masterclass)S3 to S6

### Python and machine learning

Histograms, variance and classifiers beside SQA Maths and Computing Science.

[AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens)[Statistics & Probability](/courses/statistics-probability-maths-course)Adults

### Machine learning and agents

Python, models, thresholds and AI agents.

[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)[Generative AI Course](/courses/complete-generative-ai-masterclass-college)AI and thresholds

## What is Otsu's method, and how does it choose a threshold automatically?

Otsu's method tests every possible cut-off on a histogram and keeps the one that maximises the between-class variance, so the two groups it creates are as separate as possible; it needs no labels, but it assumes the data has two humps.

On 5,045 West End building footprints it chose 144.4 square metres, which put 81.0% of tagged houses and apartment blocks on the right side, against 82.0% for a cut-off tuned with the labels and 56.9% when the method was run on raw, unlogged areas.

Learners who have coded it ask of any AI decision: where is the threshold, who set it, and on what scale?

Being able to find and question the cut-off keeps West End teenagers in control of the models they build, and that skill is learned by programming. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

How it works

## Hillhead to Partick, taught online

A computer with a camera and a connection that handles video is the full equipment list.

### Learner at the keyboard

The student writes and runs every line; the tutor watches on screen share and asks them to justify each choice.

### Trial sets the start

We find the first topic in the free lesson and note any SQA course.

### Nothing to pay at first

Lesson one is free and finishes with our course suggestion.

### Matched by stage

Classes hold fifteen to twenty learners at one level, drawn from across Britain.

### Two lessons a week

Term time only.

### Same hour all year

When the clocks change, our tutors shift, not you.

Why online

Five learners at one stage, all free on the same evening, are rarely found on one street. Online, they do not have to be.

Fees

## West End fees

West End learners pay our international rates, used everywhere outside India.

First class**USD 0**

A free full lesson, then a recommendation.

Group tuition**USD 100**

About eight live lessons a month in a small class.

Private tuition**USD 150**

About eight live private lessons a month.

Our invoices are raised in US dollars (we keep no pound price list), and the first one waits until a course and weekly hour have been agreed at the trial. Holidays, absences and changing format are explained on the pricing page.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20could%20we%20book%20a%20free%20AI%20or%20programming%20lesson%20for%20a%20learner%20in%20Glasgow's%20West%20End%3F)Reviews

## Glasgow families and learners elsewhere in the UK, reviewing us on Google

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

## Book a free West End lesson

Give us an age or school stage and one thing the learner enjoys. We might begin with a size-sorting argument, a Scratch game built with an AI, first Python, or measuring real buildings.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented West End, Glasgow one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20could%20we%20book%20a%20free%20AI%20or%20programming%20lesson%20for%20a%20learner%20in%20Glasgow's%20West%20End%3F)

Submitted details are used for placement and follow-up.

FAQ

## West End questions

Automatic thresholds, the footprint project, vibe coding and how lessons work.

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

Nearby

## More Glasgow and west of Scotland pages

Pages with different projects: [Glasgow](/best-coding-class-in-glasgow) (how long is the city boundary?), [Paisley](/online-coding-and-python-classes-in-paisley), [East Kilbride](/ai-and-programming-classes-in-east-kilbride) and [Coatbridge](/online-coding-and-python-classes-in-coatbridge). The [UK hub](/coding-classes-in-united-kingdom) lists every area.

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20could%20we%20book%20a%20free%20AI%20or%20programming%20lesson%20for%20a%20learner%20in%20Glasgow's%20West%20End%3F)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-west-end-glasgow*
