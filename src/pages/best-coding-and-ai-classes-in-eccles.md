---
title: "Coding and AI Classes in Eccles, Salford | Ages 6 to 67"
description: "Live online coding and AI classes for Eccles, Patricroft, Monton, Winton and Peel Green: Python, vibe coding and AI agents for ages 6 to 67. First lesson free."
canonical: https://learn.modernagecoders.com/best-coding-and-ai-classes-in-eccles
source: src/pages/best-coding-and-ai-classes-in-eccles.html
---
> In March 2021 the census found 41,125 usual residents in the Eccles built-up area and 269,923 in the City of Salford around it. Suburbs listed in the gazetteer include Patricroft, Monton, Winton, Peel Green, Ellesmere Park, Alder Forest, Westwood Park and Barton upon Irwell. Anyone in Eccles aged six to 67 can learn coding, AI, Python, vibe coding or maths with Modern Age Coders; our tutors, who are based in India, teach live over video, either one person at a time or five to ten people who are at the same point. The Eccles project treats the street map as a network and asks a question from network science: how often do three junctions all connect to each other? Learners count the triangles three ways, from hopelessly slow to instant, and then find out what creates them. A first lesson is free; a group costs USD 100 a month and one-to-one tuition USD 150 a month.

[Home](/) / [United Kingdom](/coding-classes-in-united-kingdom) / [North West England](/coding-and-ai-classes-in-north-west-england) / Eccles

Eccles, Salford, Greater Manchester / Live online

# Coding and AI classes in Eccles

**Which coding and AI classes are best for Eccles?** In March 2021 the census found 41,125 usual residents in the Eccles built-up area and 269,923 in the City of Salford around it. Suburbs listed in the gazetteer include Patricroft, Monton, Winton, Peel Green, Ellesmere Park, Alder Forest, Westwood Park and Barton upon Irwell. Anyone in Eccles aged six to 67 can learn coding, AI, Python, vibe coding or maths with Modern Age Coders; our tutors, who are based in India, teach live over video, either one person at a time or five to ten people who are at the same point. The Eccles project treats the street map as a network and asks a question from network science: how often do three junctions all connect to each other? Learners count the triangles three ways, from hopelessly slow to instant, and then find out what creates them. A first lesson is free; a group costs USD 100 a month and one-to-one tuition USD 150 a month.

In a group of friends, two of your friends are often friends with each other; that closes a triangle. Network scientists measure how common triangles are with a number called the clustering coefficient, and it has become a standard measure for networks of every kind, from friendships to power grids. A street network is a different creature. Eccles learners turn their town's roads into a graph of 1,543 junctions and road ends and discover that triangles are rare, but not nearly as rare as chance would make them, and that the ones that exist have a surprising source.

Facts last verified 30 September 2026. Teaching is online; no Eccles branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Coding and AI courses for Eccles

Choose by age. Every course opens with a free live lesson, booked without a card.

- [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids) (Ages 7 to 12): How to think: counting shapes in a drawing without missing or double-counting any.
- [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev) (Ages 8 to 12): Vibe coding for children: a Scratch game built with AI help and checked by its designer.
- [Python for Teens](/courses/python-complete-masterclass-teens) (Ages 13 to 17): Python for teenagers, with graphs, sets and the Eccles triangle project.
- [Data Structures & Algorithms Course](/courses/data-structures-algorithms-masterclass-college) (Students and adults): Graphs and algorithm design in depth, the ground under machine learning on networks.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Eccles, Patricroft, Monton and Winton

Census counts and suburb names, each traced to its source.

**People counted at the 2021 census (ONS)**

| Boundary | Usual residents |
|---|---|
| Eccles built-up area | 41,125 |
| City of Salford | 269,923 |

The city total is on a far wider boundary, taking in Salford itself, Swinton, Walkden, Irlam and more. The postcode gazetteer lists Patricroft, Monton, Winton, Peel Green, Ellesmere Park, Alder Forest, Westwood Park and Barton upon Irwell as suburban areas under M30, and in each case the closest postcode lies in the Eccles built-up area. Salford schools work to the English national curriculum. A year group between Year 2 and Year 13 is all we need to plan the trial, and learners taking GCSE or A level computer science get support that runs beside their school course.

### Greater Manchester pages

The [Salford page](/best-coding-class-in-salford) covers the wider city and the [Greater Manchester page](/coding-classes-in-greater-manchester) the county. For what AI tools cannot do for a learner, read [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

## Counting triangles in the Eccles street network

A graph of 1,543 points, three counting methods from two minutes to two milliseconds, and a comparison with chance.

One query to OpenStreetMap returned 1,401 mapped roads, from the motorway to residential streets, around Eccles. The learner turns them into a graph: every junction or road end is a point, and every stretch of road between two of them is a link. Kept inside a rectangle around the town, that gives 1,543 points and 1,781 links. Most points, 773 of them, have three links, the mark of a T-junction; 439 have only one, which are dead ends or roads leaving the rectangle; 68 have four and just 2 have five.

A triangle is three points that are all linked to one another. The first method checks every possible trio, and there are 611,085,091 of them. Timed on five million trios, that approach would take about two minutes in Python for the full count. The second method walks each link and asks which points are neighbours of both ends, using Python sets: 4,119 lookups and 0.002 seconds. The third writes the network as a table of zeros and ones, multiplies it by itself three times with NumPy and reads off the triangles from the diagonal. All three give the same answer: 43 triangles.

**Eccles street network, our Python run**

| Measure | Value |
|---|---|
| Triangles | 43 |
| Junctions in at least one triangle | 123 of 1,543 |
| Connected trios (two links sharing a point) | 3,008 |
| Clustering coefficient (share of trios that close) | 0.0429 |
| Triangles in the same network rewired at random, 20 runs | 0.70 on average, never more than 4 |

Is 43 a lot? To find out, the learner shuffles the network: repeatedly take two links and swap their ends, so that every junction keeps exactly its number of roads but the connections become random. Across 20 shuffles the random networks had 0.70 triangles on average, never more than 4, which matches the textbook formula for this degree pattern. So Eccles has around sixty times as many triangles as chance would give it. Looking at which roads close each triangle explains why: 14 involve a roundabout, 11 a slip road or other link road, and 18 ordinary streets. Many of the triangles are made by the way junctions are built and mapped, not by the street plan itself.

### Ages 8 to 11

Draw six dots and some lines, then count the triangles two ways and see which way misses fewer.

### Ages 11 to 15

Store a small network as Python sets and find triangles by checking shared neighbours.

### Ages 15 and up

Build the Eccles graph, count triangles three ways, time each, and compare with shuffled networks.

### Sources and limits

Roads are from OpenStreetMap under the Open Database Licence, as mapped on 30 September 2026. The rectangle is our approximation of the town, not its boundary, and roads that leave it become dead ends. The clustering coefficient follows Watts and Strogatz (1998). Timings are from one laptop.

## What triangles in a network teach about AI

Machine learning on networks starts from exactly these counts.

**What the Eccles count carries into AI work**

| In the Eccles network | In AI and data science |
|---|---|
| Three methods, one answer, very different speed | The algorithm matters more than the computer |
| 43 triangles against 0.70 by chance | Compare a number with a random baseline before calling it big |
| Roundabouts and slip roads made 25 of 43 | Check how data was recorded before explaining a pattern |
| Only 123 of 1,543 junctions touch a triangle | An average can hide that most of the network is different |
| The brute-force count would take minutes | Estimate a cost on a sample before running it in full |

Triangle counts are a common ingredient when machine learning is applied to networks of people or purchases, and whether graph neural networks, a kind of AI model built for networks, can count triangles at all is a question researchers study. A learner who has counted triangles by hand knows what those systems are measuring, and knows that a mapping habit can create a pattern. Eccles learners also practise vibe coding, where an AI drafts a program from a description and the learner tests it: ask an assistant to count triangles and it may give the slow method, and the learner can time it against the fast one. Once a learner's Python no longer needs propping up, usually somewhere in the late teens or beyond, agent building begins; Copilot Studio is reserved for private lessons. See [AI agents for UK students](/ai-agents-course-for-students-uk) and [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk).

The map data belongs to OpenStreetMap's volunteer mappers and the place data to the ONS and postcodes.io, and none of them works with Modern Age Coders; the network, the counts and the conclusions are our own.

## From dots and lines to network science in Python

We start from the school year and confirm the level in the free lesson.

- **Years 2 to 6: How to think** Counting carefully, spotting shapes and checking answers another way. [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **Years 4 to 8: Vibe coding for kids** Scratch and first Python, with AI suggestions the child tests. [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev), [Python and AI for Kids](/courses/python-ai-kids-masterclass)
- **Years 9 to 13: Python and graphs** Sets, dictionaries, matrices and graph algorithms on real maps. [Python for Teens](/courses/python-complete-masterclass-teens), [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens)
- **Adults: Algorithms and agents** Data structures in depth, then AI agents built on them. [Data Structures & Algorithms Course](/courses/data-structures-algorithms-masterclass-college), [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)

## What is the clustering coefficient, and why does it matter for AI?

The clustering coefficient is the share of connected trios in a network that close into triangles, and it matters for AI because models that recommend, flag unusual activity or learn from networks can use such counts to tell a tightly knit group from a loose chain.

The Eccles street network scored 0.0429, with 43 triangles among 1,543 junctions, against 0.70 triangles on average when the same roads were rewired at random.

Having counted them, learners ask of any network statistic an AI reports: compared with what baseline, and created by what kind of recording?

An Eccles teenager who can tell a real pattern from a mapping habit will question what an AI finds in data, and coding is where that judgement is built. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## How Eccles learners are taught

Learners sit at home at a laptop or desktop with a webcam. The connection needs to be steady more than fast.

- **Learner at the keyboard** The tutor asks and prompts; the learner types, runs and repairs the code.
- **Course chosen after the trial** We only suggest a course once the free lesson has shown the learner's level.
- **Trial at no charge** A complete lesson for free; we do not take card details to book it.
- **Groups by level** Five to ten learners at the same stage, gathered from across the UK.
- **Two per week in term** Tell us your Salford school holidays and we will pause for them.
- **One UK time** When the clocks go forward or back, the tutor adapts and your slot stays.

**Why live and online** A tutor on a live call spots a misunderstanding as it forms. With learners from all over the UK, we can group people by level far more exactly than one town allows.

## Fees in Eccles

Eccles learners pay our standard international fees.

- First class: USD 0. A full first lesson free, with a course recommendation at the end.
- Group tuition: USD 100 a month. Group lessons, about eight a month.
- Private tuition: USD 150 a month. Private lessons, about eight a month.

Fees are in US dollars; no sterling prices are quoted. There is no charge for the trial, and billing begins after you choose a course and a weekly time. Our pricing page sets out how holidays, missed lessons and format changes are handled.

## Eccles: frequently asked

### How many people live in Eccles?

The ONS counted 41,125 usual residents in the Eccles built-up area at the 2021 census. The City of Salford counted 269,923.

### Can Eccles learners join?

They can, from age 6 to 67, whether they live in Patricroft, Monton, Winton, Peel Green, Ellesmere Park or anywhere else in town; every lesson is online and live.

### What is a triangle in a network?

Three points that are each linked to the other two. In a street network that means three junctions joined directly to one another in a loop.

### What did the Eccles project find?

The street network had 43 triangles among 1,543 junctions and road ends, a clustering coefficient of 0.0429. Randomly rewired versions with the same number of roads at each junction had 0.70 on average.

### Why does the street network have any triangles?

Mostly from the way junctions are built and mapped: 14 of the 43 involve a roundabout and 11 a slip road or other link road. The other 18 are ordinary streets.

### What is vibe coding?

Describing a program to an AI, getting a draft, then running, testing and correcting it yourself. We teach it with the coding knowledge needed to judge the draft.

### When do learners start building AI agents?

Not until they can write Python without help, which for most means the older teenage years or adulthood. Copilot Studio work is private lessons only.

### Does this help with GCSE and A level computer science?

Yes. Graphs, algorithms and programming feature in both. We do not promise grades.

### What are the fees?

No charge for the first lesson; from then on it is USD 100 per month with a class or USD 150 per month on your own.

### Do lessons pause in the holidays?

Yes, if you want. Tell us the weeks and we skip them.

## More Greater Manchester pages

Neighbouring pages include [Salford](/best-coding-class-in-salford), [Manchester](/best-coding-class-in-manchester) and [Bury](/online-coding-and-python-classes-in-bury), and none of them repeats this project. The [Greater Manchester page](/coding-classes-in-greater-manchester) and the [UK hub](/coding-classes-in-united-kingdom) have the rest.

## Contact

Book the free class on [https://learn.modernagecoders.com/best-coding-and-ai-classes-in-eccles](https://learn.modernagecoders.com/best-coding-and-ai-classes-in-eccles#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
