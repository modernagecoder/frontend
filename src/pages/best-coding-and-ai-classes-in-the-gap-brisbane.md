---
title: "Best Coding and AI Classes in The Gap, Brisbane"
description: "Live online coding and AI classes for learners in The Gap aged 6 to 67, from Scratch to Python, graphs and algorithms, in groups or one to one. First lesson free."
canonical: https://learn.modernagecoders.com/best-coding-and-ai-classes-in-the-gap-brisbane
source: src/pages/best-coding-and-ai-classes-in-the-gap-brisbane.html
---
> Online, in live small-group or one-to-one lessons that start with Scratch at six and move through Python to algorithms and AI for teenagers and adults. Projects use real Brisbane data. The Gap held 17,318 residents in the 2021 Census, with a median age of 42.

[Home](/) / [Australia](/coding-classes-in-australia) / [Queensland](/coding-and-ai-classes-in-queensland) / [Brisbane](/best-coding-classes-in-brisbane) / The Gap

The Gap, City of Brisbane, Queensland / Live online

# Coding and AI classes in The Gap

**Where do learners in The Gap find the best coding and AI classes?** Online, in live small-group or one-to-one lessons that start with Scratch at six and move through Python to algorithms and AI for teenagers and adults. Projects use real Brisbane data. The Gap held 17,318 residents in the 2021 Census, with a median age of 42.

Brisbane City Council publishes a table of which suburbs touch which. The Gap appears in it with eight neighbours, from Ashgrove to Upper Kedron. Treat the table as a graph and a two-line counting rule tells you, before any map is drawn, whether the file is internally consistent.

Facts last verified 12 October 2026. Teaching is online; no The Gap branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 15 to 20 students per group.

## Courses that turn counting into code

The suburb-border graph needs loops, dictionaries and a feel for proof. These four courses build that, and the free trial lesson places each learner.

- [Data Structures & Algorithms Course](/courses/data-structures-algorithms-masterclass-college) (University and adult): Graphs, adjacency lists and the invariants that let you trust a dataset.
- [Problem Solving for Teens](/courses/problem-solving-dsa-masterclass-teens) (Ages 13 to 17): Algorithm problems with proofs written out, not just accepted answers.
- [Python for Teens](/courses/python-complete-masterclass-teens) (Ages 13 to 17): Python from first loops to reading and checking real CSV files.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass) (Ages 8 to 12): Early Python and AI projects built in short, testable steps.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## A valley of family homes below the ranges

Figures from the 2021 Census QuickStats for the suburb of The Gap (ABS code SAL32790), set beside the Queensland figure where the bureau publishes one.

**The Gap at a glance, 2021**

| Measure | The Gap |
|---|---|
| Residents | 17,318 |
| Median age | 42 |
| Families | 4,978 |
| Private dwellings | 6,230 |
| People per household | 2.9 |

**The Gap set against Queensland**

| Indicator | The Gap | Queensland |
|---|---|---|
| Separate houses | 92.0% (5,438) | 74.8% |
| Flats or apartments | 0.9% (54) | 12.5% |
| Workers who caught a bus to work | 4.8% (419) | 1.7% |
| Adults with a bachelor degree or higher | 44.8% (6,115) | 21.9% |
| Employed people working as professionals | 38.5% (3,399) | 21.4% |

### School-age residents

Children aged 5 to 9 numbered 1,254, and those aged 10 to 14 numbered 1,566, the larger of the two bands.

### Working from home

On Census day, 29.5% of employed residents, 2,605 people, worked at home, against 14.1% across Queensland.

### A large suburb

The ABS boundary encloses about 12.5 square kilometres, and Brisbane City Council lists 46 parks within it.

The bureau perturbs small Census cells slightly to protect privacy, so each figure is quoted as published and none are added up into new totals.

## Every border counted twice

The council table has one row per pair: a suburb and a suburb it adjoins. If The Gap touches Bardon, the file should contain both "The Gap, Bardon" and "Bardon, The Gap". That symmetry gives a free test of the whole file.

**The adjacency table as a graph (our calculation)**

| Quantity | Value |
|---|---|
| Rows in the file | 1,066 |
| Distinct suburbs (vertices) | 194 |
| Distinct borders (edges) | 533 |
| Sum of all suburb degrees | 1,066, exactly twice 533 |
| Rows with no matching reverse row | 0 |
| Suburbs listed as adjoining themselves | 0 |

**How many neighbours Brisbane suburbs have (our calculation)**

| Neighbours | Suburbs |
|---|---|
| 1 or 2 | 9 |
| 3 or 4 | 38 |
| 5 | 54 |
| 6 | 44 |
| 7 | 29 |
| 8, including The Gap | 11 |
| 9 to 11 | 9 |

### The handshake lemma

Each border adds one to the degree of both suburbs it joins, so the degrees must sum to twice the number of borders. Here 1,066 equals 2 times 533.

### An even number of odd ones

A consequence: the count of suburbs with an odd number of neighbours must be even. We found 104 such suburbs, which passes.

### The Gap's eight

Ashgrove, Bardon, Brookfield, Enoggera, Enoggera Reservoir, Keperra, Mount Coot-tha and Upper Kedron. Nine suburbs have more neighbours; Fig Tree Pocket tops the list with 11.

### What a broken file would look like

Delete a single row, say "Keperra, The Gap", and the degree sum drops to 1,065. An odd total is impossible for a real border list, so the lemma flags the damage instantly, and comparing each row with its reverse then finds the exact line. Counting rows as borders, a common slip, would claim 1,066 borders when there are 533.

The adjacency file and the suburb names are Brisbane City Council open data. The vertex, edge and degree counts, the symmetry check and the distribution are our calculation. The table covers suburbs inside Brisbane City Council only, so a border with a suburb in a neighbouring council does not appear in it.

## From a CSV of pairs to a proof

The whole test fits in a few lines of Python, and each line is a separate idea a learner can explain.

**Steps, with what each one found for Brisbane**

| Step | Python idea | Result here |
|---|---|---|
| Read the pairs | csv.DictReader over the file | 1,066 rows |
| Make borders unordered | tuple(sorted((a, b))) in a set | 533 distinct borders |
| Count degrees | collections.Counter of the first column | The Gap scores 8 |
| Test the lemma | sum(degrees) == 2 * len(borders) | True: 1,066 and 1,066 |
| Find one-way rows | (b, a) not in the set of rows | None found |

### Primary learners

Draw five friends and the handshakes between them, then count hands shaken two ways and see the totals agree.

### Secondary learners

Write the degree counter, prove the lemma in a sentence, and break the file on purpose to watch the test fail.

### Adults

Apply the same symmetry test to any table of relationships at work, such as linked records or two-way referrals.

The lemma is a necessary condition, not a sufficient one: a file could pass while listing a wrong but symmetric pair. Learners see where a cheap invariant stops and a real check against a map has to take over.

## Bus routes, bushland and 46 council parks

Markers that set The Gap apart from its neighbours, drawn from the transit timetable, council parks data and the Queensland school calendar.

### Buses only

By our boundary check, 76 Translink stop records lie inside the suburb, and on Wednesday 21 October 2026 they carry 3,601 scheduled bus stop visits on 7 routes. No train serves the suburb.

### Along Waterworks Road

The busiest stop record that Wednesday is Waterworks Rd at Payne Road, stop 31, with 165 scheduled visits; the first departure is at 5:09am.

### Term 4, 2027

Queensland state schools run Term 4 of 2027 from Tuesday 5 October to Friday 10 December, so lessons pause for summer after that.

**Suburb, not district** The Brisbane City Council park list places 46 parks in The Gap. That count, like every figure here, covers the suburb alone; Ashgrove, Bardon, Keperra and the other neighbours have their own Census and transit figures, and none are folded into these.

## From counting handshakes to graph algorithms

Ages are a guide only; the trial lesson decides the starting rung.

- **Ages 6 to 10: Scratch and patterns** Games and puzzles that train careful, step-by-step reasoning. [Scratch Coding for Kids](/courses/scratch-programming-complete-course), [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)
- **Ages 10 to 14: Python and maths** Loops, lists and counting problems solved in code. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [Maths Through Coding](/courses/maths-through-coding)
- **Ages 14 to 18: Algorithms** Graphs, searching and proofs behind contest-style problems. [Problem Solving for Teens](/courses/problem-solving-dsa-masterclass-teens), [Competitive Programming for Teens](/courses/competitive-programming-for-teens-course)
- **University and adult: Data structures** Graph algorithms and data checks for study or work. [Data Structures & Algorithms Course](/courses/data-structures-algorithms-masterclass-college), [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)

## An assistant can parse the file. Who checks it?

A learner who knows the invariant. AI tools load a CSV in a second, but they rarely stop to ask whether its contents are consistent.

Ask a chatbot how many suburb borders Brisbane has and it may simply count rows and answer 1,066, twice the truth. It sounds sure because the code ran. Nothing in the output warns that each border was listed from both ends.

Learners who have proved the handshake lemma for themselves catch that slip at once and know a quick test to prove it. That is the habit worth building now: let the tool do the typing, and keep the reasoning yourself.

In The Gap, the learner who checks the count is the one an AI tool cannot fool. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## How lessons reach The Gap

Each class is live on video, so a learner joins from home anywhere between Payne Road and the reservoir.

- **Code on a shared screen** The learner types; the teacher reads along and asks why each line is there.
- **Queensland terms** Plans follow the state school calendar, with breaks in the holidays.
- **A first lesson free** A full trial class with real content, ending in a clear recommendation.
- **Groups of fifteen to twenty** Learners matched by level and pace, or taught one to one.
- **Two classes weekly** Set times each week, about eight lessons in a month.
- **Teachers in India** A 4:30pm lesson in The Gap starts at 12 noon India time, and that gap never moves.

**No clock changes** Queensland has not used daylight saving since March 1992 (IANA time zone database), and India does not use it either, so a lesson time agreed in Brisbane time stays fixed all year.

## Fees for The Gap

The same three prices for every family.

- First class: USD 0. The first lesson is free and comes with a written suggestion for what to do next.
- Group tuition: USD 100 a month. A month of group classes, usually eight, with fifteen to twenty learners at a matched level.
- Private tuition: USD 150 a month. About eight lessons a month with one teacher for one learner.

Families in The Gap pay in US dollars, and only after the trial, once a course and a weekly time are settled. Rules for holidays, missed lessons and switching formats sit on the pricing page.

## Questions from The Gap

### How many people live in The Gap?

The 2021 Census QuickStats record 17,318 residents in the suburb of The Gap, with 4,978 families and a median age of 42.

### What is the handshake lemma?

A rule from graph theory: in any network, the degrees of all the points add up to twice the number of links, because every link has two ends. It follows that an even number of points have an odd degree.

### What is the degree of a vertex?

The number of edges that meet at it. In the Brisbane suburb graph a suburb's degree is how many suburbs it adjoins; The Gap's degree is 8.

### What did the Brisbane border check find?

The council file has 1,066 rows describing 533 borders among 194 suburbs. The degrees sum to 1,066, every row has its reverse, and 104 suburbs have an odd number of neighbours.

### What age can my child start coding?

From six, with Scratch blocks and puzzles. Typed Python usually begins between eight and ten, when reading and typing feel comfortable.

### Can teenagers use Claude in your courses?

No. Claude-based courses are for learners aged 18 and over only; younger students work with other AI tools.

### Is there a classroom in The Gap?

No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.

### What do lessons cost for The Gap learners?

The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.

### Who is in each group?

Fifteen to twenty learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.

### Is Copilot Studio taught in groups?

No. Copilot Studio is taught one to one only; group learners build their agents in Python instead.

## More for learners in The Gap

The [Brisbane guide](/best-coding-classes-in-brisbane) covers the whole city, and [coding for Brisbane children](/coding-classes-for-kids-brisbane) focuses on younger learners. North of the ranges, [Moreton Bay](/online-coding-and-python-classes-in-moreton-bay) has its own page, and [the Queensland guide](/coding-and-ai-classes-in-queensland) links every region.

## Contact

Book the free class on [https://learn.modernagecoders.com/best-coding-and-ai-classes-in-the-gap-brisbane](https://learn.modernagecoders.com/best-coding-and-ai-classes-in-the-gap-brisbane#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
