---
title: "Online Coding and Python Classes in Malone, Belfast | 6 to 67"
description: "Live online coding, Python, AI and vibe coding lessons for Malone, Upper Malone and Balmoral learners in Belfast, aged 6 to 67, with CCEA help. First lesson free."
canonical: https://learn.modernagecoders.com/online-coding-and-python-classes-in-malone-belfast
source: src/pages/online-coding-and-python-classes-in-malone-belfast.html
---
> In NISRA's 2021 census tables the Belfast ward called Malone has 4,811 usual residents and the ward called Upper Malone 4,974, inside the Balmoral district electoral area of 24,491. OpenStreetMap labels Upper Malone, Lower Malone, Balmoral and Taughmonagh as suburbs in the area. Learners there, from P1 age to 67, take coding, Python, AI, vibe coding and maths by live video with tutors working from India, in private lessons or in a class of five to ten at one level. Reasoning is taught ahead of tools, so a learner can test what an AI writes instead of trusting it. We teach the first lesson free and close it with a course suggestion. The Malone project fills the outline of Barnett Demesne, a 50.36 hectare park, with points that look random yet are never closer than a chosen distance, and compares them with truly random points. Lessons continue at USD 100 a month in a class or USD 150 a month one-to-one.

[Home](/) / [United Kingdom](/coding-classes-in-united-kingdom) / [Belfast](/best-coding-class-in-belfast) / Malone

Malone, Belfast, Northern Ireland / Live online

# Online coding and Python classes in Malone, Belfast

**Which are the best online coding and Python classes in Malone, Belfast?** In NISRA's 2021 census tables the Belfast ward called Malone has 4,811 usual residents and the ward called Upper Malone 4,974, inside the Balmoral district electoral area of 24,491. OpenStreetMap labels Upper Malone, Lower Malone, Balmoral and Taughmonagh as suburbs in the area. Learners there, from P1 age to 67, take coding, Python, AI, vibe coding and maths by live video with tutors working from India, in private lessons or in a class of five to ten at one level. Reasoning is taught ahead of tools, so a learner can test what an AI writes instead of trusting it. We teach the first lesson free and close it with a course suggestion. The Malone project fills the outline of Barnett Demesne, a 50.36 hectare park, with points that look random yet are never closer than a chosen distance, and compares them with truly random points. Lessons continue at USD 100 a month in a class or USD 150 a month one-to-one.

Ask a computer for random points and it will oblige, but the result looks wrong to most people: clumps here, bare patches there. That is what real randomness looks like. When you want points that feel natural and evenly spread, for planting trees in a game world, choosing places to take soil samples, or placing dots in a drawing, you need something else: random positions with a guaranteed minimum distance between them. The standard method is Poisson disk sampling, and Robert Bridson's 2007 algorithm does it quickly using a simple grid. This project runs it inside the mapped outline of a real Belfast park.

Facts last verified 30 September 2026. Teaching is online; no Malone branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Malone courses in thinking, Python and AI

Age decides the starting course. Its first live lesson is free, and booking it never involves a card.

- [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids) (Ages 7 to 12): The how-to-think course: what random really looks like, and rules that keep things apart.
- [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev) (Ages 8 to 12): Scratch games dreamed up by the learner, built with an AI and tested properly.
- [Python for Teens](/courses/python-complete-masterclass-teens) (Ages 13 to 17): Python from the first program to grids, geometry and simulation, with the park sampling project.
- [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college) (Students and adults): Python for data, sampling, simulation and AI agents.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Malone, Upper Malone and Balmoral

NISRA census figures for the wards and electoral area that carry the names.

**Census 2021 usual residents, NISRA table MS-A01**

| Area | Residents (2021) |
|---|---|
| Malone ward | 4,811 |
| Upper Malone ward | 4,974 |
| Balmoral district electoral area | 24,491 |

Each figure is printed as NISRA publishes it. The wards sit inside the electoral area, so nothing here should be added together, and "Malone" as people use the word is wider than the ward. OpenStreetMap labels Upper Malone, Lower Malone, Balmoral, Taughmonagh and Stranmillis as suburbs within our study rectangle. Schools follow the Northern Ireland Curriculum from P1 to Year 14; send us the holiday dates and lessons will keep clear of them.

### Belfast, Northern Ireland and CCEA help

See [Belfast](/best-coding-class-in-belfast), the [Northern Ireland page](/coding-and-ai-classes-in-northern-ireland) and [CCEA GCSE Digital Technology programming help](/ccea-gcse-digital-technology-programming-help). Why thinking comes before tools is on [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

## Random but never crowded: Poisson disk sampling inside Barnett Demesne

A real park outline, a minimum distance, and two very different kinds of random.

The learner downloads OpenStreetMap data for a rectangle over Malone and picks out the park outline named Barnett Demesne, which our area calculation puts at 50.36 hectares. Bridson's algorithm starts with one random point inside the park. It then repeatedly picks an existing point, tries up to 30 new candidates in a ring between one and two spacings away, and keeps the first that is inside the park and far enough from every point already placed. A background grid, with cells small enough to hold at most one point, means each check only looks at a few neighbouring cells. When a point has failed 30 times it is retired, and the process stops when none are left.

**Poisson disk points against plain random points inside Barnett Demesne, our Python run on an OpenStreetMap outline**

| Minimum spacing | Points placed | Closest pair | Same number, plain random: closest pair | Plain random points with a neighbour inside the spacing |
|---|---|---|---|---|
| 15 m | 1,445 | 15.0 m | 0.2 m | 86.0% |
| 25 m | 529 | 25.0 m | 0.2 m | 86.4% |
| 40 m | 218 | 40.1 m | 0.6 m | 87.6% |

With a 15 m spacing the park takes 1,445 points, none closer than 15 m, and the typical gap to the nearest neighbour is 15.9 m: tightly packed but with no pattern to the eye. Scatter the same 1,445 points with a plain random generator and the closest pair is 20 cm apart, the typical gap shrinks to 8.9 m, and 86% of points have a neighbour inside the 15 m they were supposed to keep. The cost of doing it properly is modest: 52,979 candidate positions tried, about 37 for each point kept. Designers call the even result blue noise.

### P5 to P7

Drop counters on a map at random, then again with a rule that no two may touch, and compare the pictures.

### Years 8 to 10

Generate random points in Python, measure every nearest-neighbour gap and plot the clumps.

### Years 11 to 14

Code Bridson's algorithm with a background grid, clip it to the park outline and count the tries.

### OpenStreetMap outline, our points

The park outline is from OpenStreetMap and its contributors under the Open Database Licence. The area figure, the sampling and every count are our own calculations. The points are imaginary; nothing here describes real trees, paths or plans for the park.

## What this teaches about vibe coding and AI agents

A sample is only as useful as the way it was drawn.

**From the park sampling project to working with AI**

| In the Malone project | When AI samples or tests for you |
|---|---|
| Plain random points clumped | Random test cases can miss whole regions |
| 86% broke the spacing rule | Check the property you wanted, do not assume it |
| A grid made each check cheap | The right data structure changes the cost |
| 30 tries per point was a setting | Defaults are choices; know them |
| Points stayed inside the outline | Constraints must be tested, not hoped for |

Ask an AI assistant to "place some random points in this shape" and it will usually call a plain random generator and move on; whether the result suits the purpose is never questioned. Vibe coding lets a learner say in words what the program should do while the AI writes it. Our Malone learners then measure what came back, here the smallest gap between points, and only then decide whether it did the job. Agents that choose test cases, survey sites or samples of data need that same check. Agent building is held until Python comes without prompting, which in practice means sixth-formers and adults, and Copilot Studio is only ever taught privately. More is on [AI agents for students in the UK](/ai-agents-course-for-students-uk) and [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk).

Neither OpenStreetMap nor NISRA has any link with Modern Age Coders. Their open data is all we used, and the sampling code and any mistakes in it are ours.

## From counters on a map to sampling algorithms

P1 to Year 14 tells us roughly where to start, and the trial lesson tells us exactly.

- **P1 to P7: How to think** Chance, fairness and rules that keep things apart. [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **P5 to Year 9: Vibe coding for kids** Small games and apps built with an AI and tested by the learner. [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev), [Python and AI for Kids](/courses/python-ai-kids-masterclass)
- **Years 10 to 14: Python and simulation** Random numbers, grids and geometry beside CCEA GCSE and A level. [Python for Teens](/courses/python-complete-masterclass-teens), [Statistics & Probability](/courses/statistics-probability-maths-course)
- **Adults: Python, data and agents** Sampling, simulation and AI agents in Python. [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college), [Generative AI Course](/courses/complete-generative-ai-masterclass-college)

## What is Poisson disk sampling, and how do you code it in Python?

Poisson disk sampling scatters random points so that no two are closer than a set distance; Bridson's algorithm codes it by growing outward from existing points and using a background grid to check neighbours quickly.

Inside the 50.36 hectare outline of Barnett Demesne, a 15 m spacing gave 1,445 points with no pair closer than 15.0 m, while the same number of plain random points had a closest pair 0.2 m apart and 86.0% of them broke the spacing.

Learners who have coded it ask of any AI-written sampler: what kind of random is this, and did anyone measure the result?

Measuring what a program really produced is the habit that lets Malone teenagers rely on AI-written code, and Python is where the habit is built. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Upper Malone to Balmoral, by video

A computer with a webcam and an internet line that can carry video: nothing more is needed.

- **Typed by the learner** Students write and run the code themselves. Tutors watch the shared screen and ask what each result proves.
- **The trial sets the plan** We see what the learner can already do, and note any CCEA exam coming up.
- **Lesson one is free** There is no charge, and it ends with the course we would pick.
- **Who is in a class** Between five and ten people working at the same level, wherever in the UK they log in from.
- **Two lessons a week** None in the school holidays.
- **A fixed time** When the clocks change, our tutors adjust and your slot stays where it is.

**Why online** Five learners at the same level who are all free on one evening rarely live within a few streets of each other. Video lets the class form anyway.

## Malone fees

Malone learners pay the international prices we charge in every country other than India.

- First class: USD 0. One full lesson free, then our recommendation.
- Group tuition: USD 100 a month. About eight live lessons a month in a small class.
- Private tuition: USD 150 a month. About eight live one-to-one lessons a month.

Fees are in US dollars, not sterling. We bill only once the trial has settled a course and a weekly time, and the pricing page sets out what happens with holidays, absences and changes of format.

## Malone questions

### How many people live in Malone, Belfast?

NISRA's 2021 census gives 4,811 usual residents for Malone ward and 4,974 for Upper Malone ward; the wider Balmoral electoral area has 24,491.

### Can Malone learners take Python classes online?

Yes. Lessons are live video calls for ages 6 to 67 in Malone, Balmoral and across Belfast.

### What is blue noise?

A pattern of points that is random but evenly spaced, with no clumps and no regular grid. Poisson disk sampling is a common way to make it.

### Why do truly random points clump?

Because nothing stops two of them landing close together. In our park test, 86% of plain random points had a neighbour nearer than the 15 m spacing.

### What is the Malone project?

Coding Bridson's Poisson disk algorithm in Python, filling the OpenStreetMap outline of Barnett Demesne at three spacings and comparing with plain random points.

### Will my child do vibe coding?

Yes, whatever their age. They say what the program should do, an AI writes a first version, and they test it.

### How soon do AI agents appear?

Not until Python is second nature, so usually sixth form or beyond; Copilot Studio needs private lessons.

### Do you help with CCEA exams?

Yes: GCSE Digital Technology, GCSE Maths and the A levels, taught for understanding. No grade is promised.

### What do lessons cost?

The trial lesson is free. After it, USD 100 a month in a class or USD 150 a month for private lessons.

### Do lessons run in the holidays?

No; they pause, so please send us the dates.

## More Belfast and Northern Ireland pages

Each page has its own experiment: [Belfast](/best-coding-class-in-belfast) (ranking bus stops), [Ormeau](/ai-and-programming-classes-in-ormeau-belfast), [Lisburn](/best-coding-class-in-lisburn) and [Newtownards](/ai-and-programming-classes-in-newtownards). The [Northern Ireland page](/coding-and-ai-classes-in-northern-ireland) and the [UK hub](/coding-classes-in-united-kingdom) link to the rest.

## Contact

Book the free class on [https://learn.modernagecoders.com/online-coding-and-python-classes-in-malone-belfast](https://learn.modernagecoders.com/online-coding-and-python-classes-in-malone-belfast#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
