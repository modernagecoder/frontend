---
title: "Coding Classes in Norfolk | Live Online, Ages 6 to 67"
description: "Live online coding, Python and maths classes across Norfolk, from Norwich, King's Lynn and Great Yarmouth to Thetford, Dereham, Wymondham and North Walsham."
canonical: https://learn.modernagecoders.com/coding-classes-in-norfolk
source: src/pages/coding-classes-in-norfolk.html
---
> Live online coding, Python and maths classes across Norfolk, from Norwich, King's Lynn and Great Yarmouth to Thetford, Dereham, Wymondham and North Walsham.

Skip to contentCourses for Norfolk

## Where Norfolk learners begin

A seven-year-old in Dereham building a first Scratch game, a Year 8 in Wymondham who enjoys hunting for patterns, a Year 11 in Cromer who wants to solve harder problems, and an adult in King's Lynn learning Python for work. All begin with a free lesson.

[![Coding for Kids course thumbnail](/images/kids-coding.webp)Ages 6 to 12Coding for KidsBlock coding from a first Scratch game onwards, with guessing games that get smarter each round.See the syllabus](/courses/kids-coding-blocks-masterclass)[![Maths Through Coding course thumbnail](/images/maths-through-coding.webp)Ages 10 to 15Maths Through CodingMaths learned by coding it, with graphs, patterns and puzzles turned into Python projects.See the syllabus](/courses/maths-through-coding)[![Problem Solving for Teens course thumbnail](/images/problem-solving-teens.webp)Ages 13 to 18Problem Solving for TeensAlgorithms and problem solving for teenagers, where every method is judged by how much work it needs.See the syllabus](/courses/problem-solving-dsa-masterclass-teens)[![Python Masterclass course thumbnail](/images/python-college.webp)AdultsPython MasterclassPython from the very start for adults, through to projects that save real time at work.See the syllabus](/courses/python-programming-masterclass-zero-to-advanced-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Norfolk in figures

## 916,120 people across seven districts

District counts are 2021 Census figures from Nomis, and the county number is our own addition. Town figures are the ONS built-up areas, and we cross-checked every one by totalling the census output areas inside it.

| Town | Residents | Town | Residents |
| --- | --- | --- | --- |
| Norwich | 200,770 | Wymondham | 16,330 |
| King's Lynn | 47,615 | Taverham and Drayton | 14,985 |
| Great Yarmouth | 28,985 | North Walsham | 12,825 |
| Thetford | 25,510 | Bradwell | 11,630 |
| Gorleston-on-Sea | 24,470 | Watton | 11,545 |
| Dereham | 20,785 | Downham Market | 11,350 |

The ONS Norwich area spreads well past the city council's edge into Broadland and South Norfolk, which is why it holds 200,770 people while Norwich district has 143,922. After Norwich, no town reaches fifty thousand, and many Norfolk families live in places like Attleborough, Diss, Caister-on-Sea, Swaffham, Fakenham, Cromer, Aylsham and Sheringham. Wisbech is left off because nearly all of it lies in Cambridgeshire. King's Lynn and West Norfolk is the largest district at 154,325 and Great Yarmouth the smallest at 99,748. Norfolk County Council and academy trusts set school dates, which we have not read; lesson breaks follow each family's calendar.

### Norwich has its own page

Our [Norwich](/best-coding-class-in-norwich) page has a separate project, on the city's medieval churches. This page is for everyone else, from Downham Market to Caister.

The Norfolk project

## Finding the top of a curve in thirty tries

A textbook formula for wind power, three ways to search it, and a curve that tricks the fastest one.

Suppose a turbine slows the wind passing through it by a fraction a. The standard formula for the share of the wind's power an ideal rotor can capture is 4a(1 − a)². Slow the air too little and most of it passes straight through; slow it too much and it backs up. Somewhere between 0 and a half is a sweet spot, and the learner's job is to find it by trying values of a, counting every try. Calculus gives the answer as a third, with a share of 16/27, about 59.3 per cent, known as the Betz limit. The program should reach the same answer without it.

| Precision wanted | A list of evenly spaced guesses | Ternary search | Golden-section search |
| --- | --- | --- | --- |
| To 0.001 | 501 | 32 | 15 |
| To one millionth | 500,001 | 66 | 30 |
| To one billionth | 500,000,000 | 100 | 44 |

The simple approach tries a value every so often across the range and keeps the largest. It works, but each extra digit of precision multiplies the work by ten. Ternary search is smarter: it tries two points, throws away the third of the range that cannot contain the top, and repeats. Golden-section search does the same but places its two points at the golden ratio, about 0.618, so that one of them can be reused next round. It needs only one new try per step, and it found a = 0.333333 and a share of 0.592593 after 30 tries, against 500,001 for the list of guesses.

Now the trap. Both clever searches assume the curve has a single peak. The learner draws an invented curve with two hills, a lower one of height 1.0 near 0.2 and a higher one of 1.3 near 0.75, and runs golden-section search over the whole range. It returns 0.2, the lower hill, and reports it with complete confidence. Nothing in the answer warns that a better peak exists. The fast method is only as good as the assumption behind it, and checking that assumption is part of the job.

### Ages 8 to 11

Play higher-or-lower for a hidden number, count the guesses, and discover why halving the range each time wins.

### Ages 11 to 15

Plot 4a(1 − a)² in Python, find its peak by listing values, then by ternary search, and compare the counts.

### Ages 15 and up

Write golden-section search with the reused point, prove the 0.618 shrink per step, and build the two-hill counterexample.

### What is published and what is ours

The wind farm facts come from the operators' own pages. The power formula is the standard textbook one for an idealised rotor; real turbines capture less. The search counts and the two-hill curve are our own teaching runs, and nothing here describes how any Norfolk turbine is controlled.

Why the Norfolk coast

## Three wind farms, one hard limit

The Norfolk link, from the operators' own descriptions.

| Wind farm | Where | What the operator says |
| --- | --- | --- |
| Scroby Sands (RWE) | 2.5 km off Great Yarmouth | Commissioned March 2004, one of the UK's first commercial offshore wind farms; 60 megawatts. |
| Sheringham Shoal | 17 to 23 km off North Norfolk | 317 megawatts from 88 turbines, generating around 1.1 terawatt hours a year. |
| Dudgeon | 32 km off Cromer | Completed late 2017; 402 megawatts from 67 turbines of 6 megawatts each. |

Two more pieces of arithmetic come from those figures, and both are ours. Sheringham Shoal's 317 megawatts shared over 88 turbines is about 3.6 megawatts each, while Dudgeon's are 6, which shows how quickly turbines grew. And if Sheringham Shoal ran flat out all year it would make 317 × 8,760 megawatt hours; its published output of around 1.1 terawatt hours is about 39.6 per cent of that. That share, called a capacity factor, is a reminder that wind does not blow at full strength all the time, and that the Betz limit is a ceiling nobody reaches.

We are not connected with RWE, Equinor, the owners of Sheringham Shoal or Dudgeon, or Norfolk County Council. The operators' figures are theirs; the searches and our arithmetic are ours, and so are any mistakes.

Nearby pages

[Norwich](/best-coding-class-in-norwich) has a page of its own; [Cambridgeshire](/coding-classes-in-cambridgeshire) is to the west, with [Peterborough](/best-coding-class-in-peterborough), and [Lincolnshire](/coding-classes-in-lincolnshire) across the Wash.

The path

## From higher-or-lower to smart searching

The free lesson shows where to begin. A birthday suggests a stage; skill decides it.

Ages 6 to 10

### Guessing games

Block coding with games that guess a number, a colour or a place, and get better at guessing.

[Coding for Kids](/courses/kids-coding-blocks-masterclass)[Scratch Coding for Kids](/courses/scratch-programming-complete-course)Ages 10 to 13

### Graphs and patterns

Python that plots curves, finds the biggest value and explains how it found it.

[Maths Through Coding](/courses/maths-through-coding)[Python and AI for Kids](/courses/python-ai-kids-masterclass)Ages 13 to 18

### Algorithms that scale

Searching, sorting and optimising, with each method measured by the work it needs.

[Problem Solving for Teens](/courses/problem-solving-dsa-masterclass-teens)[Python for Teens](/courses/python-complete-masterclass-teens)Ages 18 to 67

### Python at work

Python for adults, from basics to scripts and analysis that answer real questions quickly.

[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)[Data Analysis Course](/courses/data-analysis-mastery-course-college)AI and optimisation

## Machine learning climbs curves all day. What if there are two hills?

Training an AI is a search for good settings, and the same trap is waiting.

Every machine learning model is trained by searching for settings that make its errors as small as possible, one step at a time, much like the searches on this page. Those methods are fast because they assume the ground slopes the right way. On a landscape with more than one valley or hill they can settle on a poor answer and report it with the same confidence as a good one, exactly as golden-section search did on our two-hill curve.

A Norfolk student who has built the counterexample knows the questions to ask of any optimised result: where did the search start, what did it assume about the shape, and has anyone tried starting somewhere else? Those questions separate people who can use AI tools from people who can judge them.

So a young person in Norfolk should learn to code in 2026 to understand when a fast answer can be trusted. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

How it works

## From the Fens to the Broads without a drive

Norfolk is large and rural, and weekly trips to a class in Norwich can swallow an evening. Online lessons save the journey.

### Learning from home

A farmhouse near Swaffham, a terrace in Gorleston, a bungalow in Watton. The teacher shares a screen and the learner writes the code.

### Familiar school terms

Teachers talk about Year 9, Key Stage 4, GCSE options and A level choices in the way Norfolk pupils hear them at school, in English throughout.

### A first lesson free

A genuine lesson, followed by honest advice on level and course. We never ask for card details up front.

### A group at your pace

Fifteen to twenty learners at the same stage, drawn from Norfolk, the rest of the UK and abroad.

### Holidays on your terms

Most learners have two lessons a week, and we pause for your school's own holidays.

### Times given in UK time

Each slot is set in UK time and stays put when the clocks change; the teacher, on India time several hours ahead, takes care of the difference.

Why level beats location

In a county of small towns, five learners at the same level and free on the same evening rarely live near each other. Level-based groups let a learner in Diss or Fakenham join a class that fits.

Fees

## Fees in Norfolk

Thetford or Sheringham, the price is the same, and so it is in every country we teach other than India.

First class**USD 0**

A complete lesson with real work, then a recommendation of level and course.

Group tuition**USD 100**

About eight lessons each month, in a group of fifteen to twenty at one level.

Private tuition**USD 150**

About eight lessons each month, one-to-one.

We charge in US dollars and publish no prices in pounds. Billing begins only after the free lesson has agreed a course and a weekly time; the pricing page covers pauses, missed lessons and changes between group and private teaching.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Norfolk%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)Reviews

## What families say about us on Google

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

## Book a free Norfolk lesson

Tell us how old the learner is, or their school year, plus what they are into. A first lesson might be a guessing game in Scratch, a Python graph, or the wind curve on this page.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Norfolk one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Norfolk%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)

Submitted details are used for placement and follow-up.

FAQ

## Norfolk questions

The county, the wind project and the practical details.

### How many people live in Norfolk?

Norfolk's seven districts counted 916,120 usual residents in 2021; we added up the seven ONS district totals published on Nomis to get that figure.

### What are the largest towns in Norfolk?

By ONS built-up area: Norwich 200,770, King's Lynn 47,615, Great Yarmouth 28,985, Thetford 25,510 and Gorleston-on-Sea 24,470.

### What is the Norfolk project?

Learners find the peak of the wind power formula 4a(1 − a)² in Python, compare a list of guesses, ternary search and golden-section search, and build a two-hill curve on which the fastest search picks the wrong peak.

### What is the Betz limit?

The largest share of the wind's power an ideal turbine rotor can capture, 16/27 or about 59.3 per cent, reached when the rotor slows the wind by a third. Real turbines capture less.

### What is golden-section search?

A way to find the top of a curve with one peak by repeatedly narrowing the range, placing test points at the golden ratio so one point can be reused each step. On this page it needed 30 tries for six-figure precision.

### Is there a Norfolk classroom?

No. All lessons are live online, so learners anywhere in the county join from home.

### What ages do you take?

From 6 to 67. Children begin with block coding, most move to typed Python around ten, teenagers go on to algorithms and advanced Python, and adults learn Python or data. The free lesson decides the starting level.

### Do you teach algorithms to teenagers?

Yes. The teen problem solving and algorithms course covers searching, sorting and more, always measuring how much work each method needs.

### How much do lessons cost?

The first lesson is free. After that it is USD 100 a month in a group and USD 150 a month one-to-one, with no joining fee and no lock-in.

### Do you follow Norfolk school holidays?

We can. Norfolk County Council and academy trusts publish their own term dates; share yours and we plan breaks around them.

Around Norfolk

## Nearby pages

For the city itself see [Norwich](/best-coding-class-in-norwich). Westward are [Cambridgeshire](/coding-classes-in-cambridgeshire) and [Peterborough](/best-coding-class-in-peterborough), and [Lincolnshire](/coding-classes-in-lincolnshire) lies over the Wash. The [UK hub](/coding-classes-in-united-kingdom) has every other area.

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Norfolk%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/coding-classes-in-norfolk*
