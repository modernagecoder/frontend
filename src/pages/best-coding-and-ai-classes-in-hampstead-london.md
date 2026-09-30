---
title: "Coding and AI Classes in Hampstead, London | Python, 6 to 67"
description: "Online coding, AI, Python and vibe coding lessons for Hampstead, Frognal, Belsize and West Hampstead learners aged 6 to 67, taught live. First lesson free."
canonical: https://learn.modernagecoders.com/best-coding-and-ai-classes-in-hampstead-london
source: src/pages/best-coding-and-ai-classes-in-hampstead-london.html
---
> Hampstead Town ward had 8,016 usual residents at the 2021 census, with Frognal, Belsize, West Hampstead and South Hampstead counted as separate Camden wards around it. The Vale of Health and Gospel Oak are recorded places in the same NW3 postcode district. Tuition in coding, AI, Python, vibe coding and maths reaches NW3 by video call from our tutors in India, for any age between six and 67, as solo sessions or in a class of five to ten pitched at a single level. We teach statistical reasoning before tools, so a learner can say why something is unusual, not just that a program flagged it. The first lesson is free and finishes with the course we would suggest. The Hampstead project measures how unusual each of Camden's 751 Census areas is in two different ways, and shows that the ordinary ruler misses some of the strangest ones. Beyond the trial the monthly fee is USD 100 (class) or USD 150 (solo).

[Home](/) / [United Kingdom](/coding-classes-in-united-kingdom) / [London](/best-coding-class-in-london) / Hampstead

Hampstead, Camden, London / Live online

# Coding and AI classes in Hampstead, London

**Where can Hampstead learners find the best coding and AI classes?** Hampstead Town ward had 8,016 usual residents at the 2021 census, with Frognal, Belsize, West Hampstead and South Hampstead counted as separate Camden wards around it. The Vale of Health and Gospel Oak are recorded places in the same NW3 postcode district. Tuition in coding, AI, Python, vibe coding and maths reaches NW3 by video call from our tutors in India, for any age between six and 67, as solo sessions or in a class of five to ten pitched at a single level. We teach statistical reasoning before tools, so a learner can say why something is unusual, not just that a program flagged it. The first lesson is free and finishes with the course we would suggest. The Hampstead project measures how unusual each of Camden's 751 Census areas is in two different ways, and shows that the ordinary ruler misses some of the strangest ones. Beyond the trial the monthly fee is USD 100 (class) or USD 150 (solo).

Fraud checks, quality control and AI safety filters all ask the same question: is this case unusual? The obvious way to answer is to measure how far each number sits from its average. That works for one number at a time, but real cases have several numbers that move together. Tall people are usually heavier, so a person of average height and average weight is ordinary, while someone very tall and very light is odd even though neither number alone is extreme. A measure called the Mahalanobis distance takes such relationships into account. This project tries it on Census data for Camden, where two household measures are clearly linked, and compares it with the ordinary ruler.

Facts last verified 30 September 2026. Teaching is online; no Hampstead branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Hampstead courses in statistics, Python and AI

Choose by the learner's age. Every course begins with a live lesson that is free, and no card is needed to reserve it.

- [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids) (Ages 7 to 12): The how-to-think course: spotting the odd one out, and explaining what makes it odd.
- [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev) (Ages 8 to 12): Scratch games the learner designs, builds with an AI and then tries to break.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 13 to 17): Machine learning in Python, including outlier detection on real Camden Census data.
- [Statistics & Probability](/courses/statistics-probability-maths-course) (Ages 14 and up): Correlation, covariance and distance, the ideas behind the Hampstead project.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Hampstead Town, Frognal, Belsize and West Hampstead

Census 2021 residents in five Camden wards, on the ward boundaries in use since 2022.

**Usual residents by Camden ward, Census 2021 via Nomis**

| Ward | Residents (2021) |
|---|---|
| Hampstead Town | 8,016 |
| Frognal | 7,725 |
| Belsize | 12,299 |
| West Hampstead | 11,162 |
| South Hampstead | 12,166 |

Each count is the published figure for one ward and we do not add them together; "Hampstead" has no single official boundary. Postcodes.io records Hampstead itself in NW3, with the Vale of Health and Gospel Oak as suburban areas of Camden in the same district, and West Hampstead and South Hampstead in NW6. Camden schools follow England's national curriculum, so give us the term dates and lessons will miss the holidays.

### London, Camden and our approach

The wider picture is on [our London page](/best-coding-class-in-london) and [coding classes in Camden](/coding-classes-in-camden-london). Why we put reasoning ahead of tools is set out on [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

## Unusual values or unusual combinations? Mahalanobis distance on Camden Census areas

Two linked measurements, two ways of measuring distance, and two different lists of outliers.

The learner downloads two Census 2021 tables from the Nomis API for all 751 output areas in Camden. Across 92,763 households, 59,026 have no car or van. For each small area the program works out two percentages: households with no car, and households where one person lives alone. Across Camden the averages are 63.01% and 38.61%, and the two move together, with a correlation of 0.552: areas with more people living alone tend to have fewer cars.

The ordinary method standardises each percentage and measures straight-line (Euclidean) distance from the average. The Mahalanobis distance does the same job but first accounts for the link between the two measures, so that being high on both, which is common, counts as less surprising than being high on one and low on the other.

**The 20 most unusual Camden output areas by each method, our Python run on Census 2021 data**

| Result | Areas |
|---|---|
| On both top-20 lists | 14 |
| Only on the Euclidean list | 6 |
| Only on the Mahalanobis list | 6 |
| Beyond the usual 97.5% cut-off, Euclidean | 35 |
| Beyond the usual 97.5% cut-off, Mahalanobis | 31 |

The two rulers agree on 14 of the top 20 and disagree on the rest. One area has 65.0% of households without a car, almost exactly the Camden average, but only 10.7% living alone. Neither figure is dramatic, and the ordinary ruler ranks it 46th. The Mahalanobis distance ranks it 16th, because so few cars with so few single-person homes is a rare pairing here. The reverse also happens: an area with about 20% on both measures looks extreme to the ordinary ruler, yet low on both is exactly what the correlation predicts, so it drops out of the Mahalanobis top 20. Among the 60 areas in Hampstead Town and Frognal wards, where on average 44.38% of households have no car, 8 pass the cut-off on the ordinary ruler and 5 on the Mahalanobis one.

### Ages 8 to 11

Line up toy animals by height and weight and find the one that does not fit the pattern.

### Ages 11 to 15

Plot Camden's areas on a scatter chart in Python and circle the points that sit away from the cloud.

### Ages 15 and up

Compute the covariance matrix and both distances, then explain every area the two lists disagree on.

### Census data, our distances

Household counts are Office for National Statistics Census 2021 data from Nomis, and boundaries are from the ONS Open Geography Portal, under the Open Government Licence. The percentages, distances and rankings are our own calculations. "Unusual" here is a statistical description, not a judgement about any neighbourhood.

## What this teaches about vibe coding and AI agents

Choose the ruler and you have chosen which oddities get noticed.

**From the Camden distances to working with AI**

| In the outlier project | When AI flags something as unusual |
|---|---|
| Two measures were correlated at 0.552 | Features rarely vary independently |
| 6 of the top 20 changed with the ruler | The method chooses the outliers |
| A 65.0% and 10.7% area ranked 46th, then 16th | Odd combinations hide behind ordinary values |
| A low-low area stopped looking extreme | Expected patterns are not anomalies |
| A cut-off of 97.5% was our choice | Thresholds are decisions, not facts |

Ask an AI assistant to "find the outliers" in a table and it will usually check each column separately, which is the ordinary ruler again. With vibe coding the learner explains the goal and an AI writes the code; our Hampstead learners then ask which distance it used and whether the columns are related. AI agents that watch for fraud, faults or odd behaviour make the same choice out of sight, and what they miss depends on it. We hold agent building until Python is a working tool for the learner, which tends to mean sixth form or later, and we teach Copilot Studio agents solely in private lessons. The principle is argued on [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk); the agent syllabus itself is on [the UK students' agents page](/ai-agents-course-for-students-uk).

The Office for National Statistics, Nomis and postcodes.io have no connection with Modern Age Coders. We used only what they publish openly, and the analysis and its mistakes are ours.

## From odd one out to outlier detection

School year gives a starting point; the free lesson shows the real level.

- **Years 2 to 7: How to think** Patterns, exceptions and saying why something stands out. [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **Years 4 to 8: Vibe coding for kids** Games and small apps made with AI help and tested by the learner. [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev), [Python and AI for Kids](/courses/python-ai-kids-masterclass)
- **Years 9 to 13: Python, statistics and AI** Scatter plots, covariance and detection methods next to GCSE and A level. [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens), [Statistics & Probability](/courses/statistics-probability-maths-course)
- **Adults: Data science and agents** Python, statistics, machine learning and AI agents. [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college), [Generative AI Course](/courses/complete-generative-ai-masterclass-college)

## What is Mahalanobis distance, and when should you use it instead of Euclidean distance?

Mahalanobis distance measures how far a point is from the centre of a dataset after allowing for how the features vary together, so use it instead of Euclidean distance whenever the features are correlated.

On 751 Camden Census areas with two measures correlated at 0.552, the two distances agreed on only 14 of the 20 most unusual areas, and one area ranked 46th by Euclidean distance came 16th by Mahalanobis.

Learners who have compared the two ask of any AI anomaly report: unusual by which measure, and were the features treated together?

Knowing which ruler was used keeps Hampstead teenagers from taking an AI's "anomaly" at face value, and that habit comes from writing the code themselves. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Live lessons for NW3 and NW6, online

You need a computer with a camera and broadband that carries a video call.

- **The learner does the work** Every line of code and every prompt is typed by the student, with the tutor following on screen share and asking for the reasoning.
- **First topic from the trial** The free session shows what is secure and what is not; exam boards are noted where relevant.
- **Trial without charge** Lesson one is free and ends with a named course.
- **Classes of similar level** Five to ten learners from across the UK share a class at one stage.
- **Two lessons a week** Paused for school holidays.
- **Same hour all year** Tutors adjust for British Summer Time so your slot stays where it is.

**Why online** Five learners at one level with the same evening free seldom live within a walk of each other, even in London. Video removes the problem.

## Hampstead fees

Hampstead learners pay our international rate, the one used everywhere outside India.

- First class: USD 0. A full free lesson, then a course recommendation.
- Group tuition: USD 100 a month. About eight live lessons a month in a small class.
- Private tuition: USD 150 a month. About eight live one-to-one lessons a month.

There is no sterling tariff: fees are in US dollars, and nothing is invoiced before the trial has settled which course and which weekly hour. Holidays, absences and changing between class and private lessons are covered on the pricing page.

## Hampstead questions

### How many people live in Hampstead?

Hampstead has no single official boundary. At the 2021 census Hampstead Town ward had 8,016 usual residents, with Frognal, Belsize, West Hampstead and South Hampstead counted as separate wards.

### Are coding and AI classes available online in Hampstead?

Yes, as live video lessons for ages 6 to 67 across NW3, NW6 and the rest of Camden.

### What is an outlier?

A data point that sits far from the rest. How far counts as "far" depends on the distance you use and the cut-off you choose.

### What is covariance?

A number that says whether two measurements tend to rise and fall together. Mahalanobis distance uses it; Euclidean distance ignores it.

### What does the Hampstead project involve?

Measuring how unusual each of Camden's 751 Census areas is with Euclidean and Mahalanobis distance, and explaining the areas where the two disagree.

### Is vibe coding on the timetable?

It is, whatever the age: the learner explains the idea, an AI drafts code, and the learner tests and repairs it.

### When can learners build AI agents?

After Python has become a working tool for them, typically sixth formers and adults; Copilot Studio is taught privately.

### Is exam tuition offered?

GCSE and A level computer science and maths are both taught, for understanding; no grade is ever promised.

### What do lessons cost?

Nothing for the trial; then USD 100 monthly for a class place, USD 150 monthly for solo tuition.

### What happens at half term and in the holidays?

Lessons stop for those weeks once we have your dates.

## More London pages

Each of these has its own project: [Camden](/coding-classes-in-camden-london), [London](/best-coding-class-in-london), [Brent](/coding-classes-in-brent-london) and [Hackney](/coding-classes-in-hackney-london). Everywhere else is reached from the [UK hub](/coding-classes-in-united-kingdom).

## Contact

Book the free class on [https://learn.modernagecoders.com/best-coding-and-ai-classes-in-hampstead-london](https://learn.modernagecoders.com/best-coding-and-ai-classes-in-hampstead-london#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
