---
title: "Online Coding and Python Classes in Scarborough | Ages 6 to 67"
description: "Online coding, Python, AI and vibe coding classes taught live for Scarborough, Falsgrave, Northstead, Newby and Eastfield, ages 6 to 67. First lesson free."
canonical: https://learn.modernagecoders.com/online-coding-and-python-classes-in-scarborough
source: src/pages/online-coding-and-python-classes-in-scarborough.html
---
> The ONS recorded 59,505 residents in the Scarborough built-up area at the 2021 census, in North Yorkshire. Falsgrave, Northstead, Barrowcliff, Newby, Weaponness and Eastfield are all recorded as suburban areas in the YO11 and YO12 postcode districts. Coding, Python, AI, vibe coding and maths are taught here by live video, to learners from six to 67, by tutors who are based in India. Lessons are one-to-one or in a class of five to ten at a single level, and they start from how to reason about a problem before any tool is opened. There is no charge for the first lesson, and it finishes with our advice on a course. Monthly fees afterwards are USD 100 in a group and USD 150 for private tuition. The Scarborough project asks a question every map app has to answer: how do you sort places, which have two coordinates, into a single list that keeps neighbours together?

[Home](/) / [United Kingdom](/coding-classes-in-united-kingdom) / [Yorkshire and the Humber](/coding-and-ai-classes-in-yorkshire-and-the-humber) / Scarborough

Scarborough, North Yorkshire, England / Live online

# Online coding and Python classes in Scarborough

**What are the best online coding and Python classes for Scarborough?** The ONS recorded 59,505 residents in the Scarborough built-up area at the 2021 census, in North Yorkshire. Falsgrave, Northstead, Barrowcliff, Newby, Weaponness and Eastfield are all recorded as suburban areas in the YO11 and YO12 postcode districts. Coding, Python, AI, vibe coding and maths are taught here by live video, to learners from six to 67, by tutors who are based in India. Lessons are one-to-one or in a class of five to ten at a single level, and they start from how to reason about a problem before any tool is opened. There is no charge for the first lesson, and it finishes with our advice on a course. Monthly fees afterwards are USD 100 in a group and USD 150 for private tuition. The Scarborough project asks a question every map app has to answer: how do you sort places, which have two coordinates, into a single list that keeps neighbours together?

A list has one dimension and a map has two. Sort 1,685 postcodes by how far east they are and two that share a street can end up hundreds of rows apart, because every postcode between them on the east to west scale, however far north or south, gets slotted in between. Databases meet this problem constantly, because so much work with location data starts by finding what is close by. One old and elegant answer is to weave the two coordinates together, bit by bit, into a single number. It is called a Z-order curve, it takes about six lines of Python, and the same trick sits underneath the geohash codes that many apps use.

Facts last verified 30 September 2026. Teaching is online; no Scarborough branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Python, thinking and AI courses for Scarborough

Choose by age. A free live lesson opens each course, with no payment details requested.

- [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids) (Ages 7 to 12): How to think: grids, coordinates, ordering and the idea of a code that stands for a place.
- [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev) (Ages 8 to 12): Scratch games made by describing them to an AI, then tested square by square.
- [Python for Teens](/courses/python-complete-masterclass-teens) (Ages 13 to 17): Python through to binary, bit operations and sorting real postcode data.
- [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college) (Students and adults): Python from nothing to data work, spatial indexes and AI agents.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Scarborough, Falsgrave, Northstead, Newby and Eastfield

Two ONS built-up areas, and the suburbs recorded in the town's two postcode districts.

**Two ONS built-up areas in North Yorkshire, residents at the 2021 census**

| Built-up area | Residents (2021) |
|---|---|
| Scarborough | 59,505 |
| Filey | 6,665 |

Both are ONS figures and they are not added together here. Postcodes.io records Falsgrave, Northstead, Barrowcliff, Newby, Throxenby and Edgehill as suburban areas whose closest postcode is in YO12, and Weaponness, South Cliff, Wheatcroft, Eastfield, Osgodby and Cayton as suburban areas whose closest postcode is in YO11. That is a check by postcode district only; we have not tested which of them the ONS places inside the built-up area. Schools in North Yorkshire teach England's national curriculum up to GCSE and A level, and we fit lessons around the term dates you give us.

### North Yorkshire, the wider region and our approach

See also [coding classes in North Yorkshire](/coding-classes-in-north-yorkshire) and [Yorkshire and the Humber](/coding-and-ai-classes-in-yorkshire-and-the-humber). We explain why reasoning is taught ahead of AI tools on [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

## The Z-order curve: one number for a place on the map

Four ways to put postcodes in a list, scored on whether neighbours stay together.

Ordnance Survey's free Code-Point Open file gives a grid reference for every postcode. The learner keeps the two districts YO11 and YO12, which cover Scarborough together with places such as Eastfield, Cayton and Seamer: 1,685 postcodes at 1,606 distinct points, in a rectangle 11,163 metres wide and 16,220 metres tall. For each point the program first finds its true nearest neighbour, which is 77.1 metres away on average. Then it builds the Z key. Each coordinate is turned into an 11-bit cell number, using cells eight metres across, and the two are interleaved: one bit of easting, one bit of northing, and so on, giving a single 22-bit number.

Sorting by that number traces a path shaped like a chain of letter Zs across the map, filling one small square before moving to the next. The test is simple. Put the points in some order, then ask how often a point's true nearest neighbour is the very next entry in the list, and how often it is within eight places.

**How well four orderings of 1,606 Scarborough postcode points keep nearest neighbours together (our Python run on OS Code-Point Open)**

| Ordering | Neighbour is adjacent | Neighbour within 8 places | Mean hop to next entry |
|---|---|---|---|
| Shuffled at random | 0.0% | 0.5% | 3,416 m |
| By easting only | 5.3% | 40.8% | 2,216 m |
| Postcode, A to Z | 26.7% | 61.3% | 503 m |
| Z-order key | 57.3% | 85.4% | 218 m |

Alphabetical postcode order already carries some geography, which is why it beats a one-axis sort. The Z key does much better than either: for 85.4% of points, checking eight entries on each side of it in the list finds the true nearest neighbour, which is 16 comparisons where a full scan needs 1,605. The remaining cases are the catch. A Z curve has seams where it jumps from one large square to the next, and two points on opposite sides of a seam share almost none of their leading bits. Fourteen points have their nearest neighbour across the first split of the map, and the worst pair sits 1,503 places apart in a list of 1,606. A short prefix in common means close together; the reverse is not guaranteed.

### Ages 8 to 11

Number the squares of a 4 by 4 grid by drawing Zs inside Zs, then find two touching squares with far-apart numbers.

### Ages 11 to 15

Write a Python function that interleaves the bits of two small numbers, and check it by hand.

### Ages 15 and up

Key all 1,606 points, sort them, and measure how often the nearest neighbour is within eight places.

### Postcode data and our measurements

Postcode grid references are from Ordnance Survey Code-Point Open, used under the Open Government Licence. Contains OS data, Crown copyright and database right 2026. Contains Royal Mail data, Royal Mail copyright and database right 2026. The keys, orderings and percentages are our own calculations.

## What a Z-order key teaches about vibe coding and AI agents

A clever shortcut is safe only when you know where it breaks.

**From Scarborough's postcode list to working with AI**

| In the Z-order project | When AI writes or uses location code |
|---|---|
| 85.4% found within eight places | A fast method that is usually right still needs a fallback |
| Worst pair 1,503 places apart | Test the edges, not only the typical case |
| A to Z order scored 26.7% | Check what structure the data already has |
| Easting alone scored 5.3% | Dropping a dimension loses information |
| 16 comparisons against 1,605 | Know what speed is being bought, and with what |

Ask an AI to write a function that finds the closest shop or stop and it may well reach for a geohash prefix match, because that pattern is everywhere in its training data. It will seldom mention the seams. In vibe coding the learner specifies and the AI drafts, so our Scarborough students are taught to follow a draft with the question "which inputs would make this wrong?" and to write the test that finds out. For AI agents, which call such functions and act on whatever comes back, a silent miss at a boundary becomes a wrong action. We begin agent projects when a learner's Python no longer needs a tutor's help, typically at sixteen or over, and we teach Copilot Studio agents only in private lessons. The pages on [AI agents for students in the UK](/ai-agents-course-for-students-uk) and [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk) say more.

This page is independent of Ordnance Survey, Royal Mail, the ONS and postcodes.io. Their open data is used under licence, and none of them has reviewed our work.

## From grid squares to spatial keys in Python

School years are only a rough guide. The trial lesson sets the real starting point.

- **Years 2 to 7: How to think** Grids, coordinates, patterns and putting things in order. [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **Years 4 to 8: Vibe coding for kids** Scratch and early Python with an AI helper and the child as tester. [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev), [Python and AI for Kids](/courses/python-ai-kids-masterclass)
- **Years 9 to 13: Python properly** Binary, functions, sorting and data, alongside GCSE and A level. [Python for Teens](/courses/python-complete-masterclass-teens), [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course)
- **Adults: Python and algorithms** From first programs to indexes, search and agents. [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college), [Data Structures & Algorithms Course](/courses/data-structures-algorithms-masterclass-college)

## What is a Z-order curve, and how does a geohash turn a location into one code?

A Z-order curve is a way of numbering the cells of a grid by interleaving the bits of the two coordinates, so that one sortable number stands for a position; a geohash does the same with latitude and longitude and writes the result as a short string of letters and digits.

On 1,606 postcode points in Scarborough's YO11 and YO12 districts, sorting by a Z-order key put the true nearest neighbour next in the list for 57.3% of points, against 26.7% for alphabetical postcode order and 5.3% for a sort by easting alone.

Having seen the seams, a learner checks any AI-written "find what is closest" code at the boundaries before relying on it.

A Scarborough teenager who can interleave bits by hand knows what a location code can and cannot promise, which is the kind of knowledge that coding gives and prompting alone does not. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Falsgrave to Eastfield, taught online

A laptop or desktop and a steady connection for video are all that is required.

- **The learner types** Screen sharing lets the tutor see every keystroke. The learner writes the code and explains it back.
- **A level check first** In the free lesson we find out what is known already and note any exam board.
- **First one free** It is a complete lesson, there is no fee, and it ends with a course recommendation.
- **Small, level classes** Groups are five to ten learners from across the UK at the same stage.
- **Two lessons each week** With a pause for every school holiday.
- **Steady timetable** The hour you choose is kept through both clock changes.

**Why online** A class of five at one level, all free at the same time, is rare in any single town. Teaching by video means the class can be drawn from the whole country.

## Scarborough fees

Our international prices apply in Scarborough, as they do everywhere except India.

- First class: USD 0. A full lesson at no cost, ending with a suggested course.
- Group tuition: USD 100 a month. Eight or so live lessons per month in a small class.
- Private tuition: USD 150 a month. Eight or so live lessons per month with a tutor to yourself.

Prices are set and invoiced in US dollars, with no sterling equivalent published. Billing starts only when the trial has fixed a course and a weekly slot. The pricing page explains holidays, missed lessons and changing between group and private.

## Scarborough questions

### What is the population of Scarborough?

The ONS counted 59,505 residents in the Scarborough built-up area at the 2021 census.

### Are online coding and Python classes open to Scarborough learners?

Yes. Lessons are live on video for ages 6 to 67, so Falsgrave, Northstead, Newby, Eastfield and the villages around are all covered.

### What is a geohash?

A short code for a location, made by interleaving the bits of its latitude and longitude and writing them in letters and digits. Places that share a long opening run of characters are close together.

### What is a Morton code?

Another name for a Z-order key: the single number you get by interleaving the bits of two or more coordinates.

### What does the Scarborough project measure?

Whether sorting 1,606 postcode points by a Z-order key keeps each point next to its true nearest neighbour. It does for 57.3% of points, and for 85.4% within eight places.

### Is vibe coding part of the lessons?

Yes. Learners describe what they want, let an AI draft the code, and then test it, especially at the awkward edges.

### How soon can someone work on AI agents?

As soon as their Python stands up without help, which is normally from sixteen. Copilot Studio agents are taught privately, not in groups.

### Do lessons help with GCSE or A level computer science?

They cover the same ground, binary and algorithms included, with time to understand it. We do not promise grades.

### What are the fees for Scarborough?

The trial is free. Group classes cost USD 100 a month and private lessons USD 150 a month.

### Are there breaks for school holidays?

Yes. Give us the dates and we pause for them.

## More Yorkshire pages

Pages with projects of their own include [York](/best-coding-class-in-york), [Harrogate](/ai-and-programming-classes-in-harrogate), [Hull](/best-coding-class-in-hull) and [North Yorkshire](/coding-classes-in-north-yorkshire). Every UK page can be reached from the [UK hub](/coding-classes-in-united-kingdom).

## Contact

Book the free class on [https://learn.modernagecoders.com/online-coding-and-python-classes-in-scarborough](https://learn.modernagecoders.com/online-coding-and-python-classes-in-scarborough#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
