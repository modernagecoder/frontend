---
title: "Coding Classes in Somerset | Live Online, Ages 6 to 67"
description: "Live online coding, Python and maths classes across Somerset, from Bath, Weston-super-Mare and Taunton to Yeovil, Bridgwater, Frome, Portishead and Wells."
canonical: https://learn.modernagecoders.com/coding-classes-in-somerset
source: src/pages/coding-classes-in-somerset.html
---
> Live online coding, Python and maths classes across Somerset, from Bath, Weston-super-Mare and Taunton to Yeovil, Bridgwater, Frome, Portishead and Wells.

Skip to contentCourses for Somerset

## Where Somerset learners start

A seven-year-old in Frome who loves dot-to-dot puzzles, a Year 8 in Yeovil who asks "but is that just luck?", a Year 12 in Taunton studying statistics, and an adult in Portishead who works with reports and figures. Each starts with a free lesson.

[![Problem Solving and Computational Thinking for Kids course thumbnail](/images/problem-solving-kids.webp)Ages 7 to 12Problem Solving and Computational Thinking for KidsLogic puzzles and computational thinking, with patterns, probability problems and Venn diagrams.See the syllabus](/courses/problem-solving-and-computational-thinking-for-kids)[![Maths Through Coding course thumbnail](/images/maths-through-coding.webp)Ages 10 to 15Maths Through CodingMaths learned by coding it, including coordinates, lines and experiments run thousands of times.See the syllabus](/courses/maths-through-coding)[![Statistics & Probability course thumbnail](/images/statistics-probability-maths.webp)Ages 14 to 18Statistics & ProbabilityStatistics and probability built up step by step, including how to tell a real pattern from chance.See the syllabus](/courses/statistics-probability-maths-course)[![Data and AI Analytics for Non-Programmers (Excel, Sheets, Power BI) course thumbnail](/images/data-ai-analytics-non-programmers.webp)AdultsData and AI Analytics for Non-Programmers (Excel, Sheets, Power BI)Data and AI tools for adults who do not code yet, with an eye for when a pattern is only luck.See the syllabus](/courses/data-and-ai-analytics-for-non-programmers-course)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Somerset in figures

## 981,683 people from the Severn to Exmoor

Council counts are 2021 Census figures on Nomis; the county total is our sum. Towns are ONS built-up areas, each compared with our own addition of census output areas.

| Town | Residents | Town | Residents |
| --- | --- | --- | --- |
| Bath | 94,080 | Portishead | 26,355 |
| Weston-super-Mare | 84,605 | Clevedon | 21,085 |
| Taunton | 61,665 | Keynsham | 19,255 |
| Yeovil | 50,170 | Burnham-on-Sea | 16,320 |
| Bridgwater | 47,860 | Nailsea | 15,925 |
| Frome | 27,905 | Chard | 14,290 |

North Somerset is the largest of the six census areas at 216,726, and Mendip the smallest at 116,089. The four districts the census used, Mendip, Sedgemoor, South Somerset and Somerset West and Taunton, have since become Somerset Council, which appears in the ONS list of councils from April 2023. After the table come Wellington, Midsomer Norton, Street, Wells, Minehead, Radstock and Shepton Mallet, with Glastonbury at 8,300. The three councils and academy trusts set school holidays; we did not read their calendars and plan breaks with each family.

### Two city pages already

Our [Bath](/best-coding-class-in-bath) page compares two Jane Austen novels, and [Wells](/best-coding-class-in-wells) predicts full moons. This page covers the rest of the county, from Portishead to Chard.

The Somerset project

## Ley lines, or the arithmetic of dots?

Real monuments, random monuments, and a fairer kind of random that changes the answer.

The learner downloads the Historic England list of scheduled monuments and keeps the 233 whose centre points fall inside the Mendip district. With 233 points there are 2,081,156 different sets of three. A set counts as a straight line when one monument sits between the other two and within 25 metres of the line joining them. The program checks every set and finds 14,569 alignments. That sounds astonishing, until you ask the only question that matters: how many would random dots give?

To answer it, the program scatters 233 random dots over Mendip using rejection sampling. It picks a random spot in the rectangle around the district, keeps it if it falls inside the boundary and throws it away if not. About 60.6 per cent of spots are kept, so each dot takes about 1.65 tries. Twenty scatterings of random dots give between 5,746 and 6,910 alignments, averaging about 6,326.

| Set of 233 points | Straight triples | What it tells you |
| --- | --- | --- |
| Real Mendip monuments | 14,569 | The number to explain |
| Random dots, spread evenly | About 6,326 | Monuments beat plain chance by more than two to one |
| Each monument moved up to 3 km | About 11,217 | Keeping the clumps explains much of the gap |
| Each monument moved up to 500 m | About 13,159 | Most of the excess is simply clumping |

Evenly spread random dots are an unfair comparison, because real monuments are not spread evenly: their typical distance to the nearest neighbour is 354 metres, against 844 for random dots, and 94 of the 233 are bowl barrows, which often sit in groups. Points packed into clumps make far more straight triples. So the program builds a fairer kind of random: each real monument is moved to a random spot within 500 metres of where it is. That keeps the clumps and scrambles any deliberate lines, and it produces about 13,159 alignments. Most of the excess over even chance was clumping all along.

A small gap remains: 14,569 against a highest value of 13,479 across ten scrambled runs. That could mean some monuments really were placed in rows, such as barrows along a ridge or sites beside an old route, or it could come from how the centre points of large monuments are calculated. The honest conclusion is not "ley lines are real" or "ley lines are nonsense", but that the evidence for deliberate lines is far weaker than the raw count suggests, and that finding the real cause means looking closely at the few triples that remain.

### Ages 9 to 12

Throw twenty counters on a map, draw every straight line through three of them, and count how many you find without trying.

### Ages 12 to 15

Write the three-point line test in Python, scatter random dots with rejection sampling, and count the lines they make.

### Ages 15 and up

Run the full comparison with the real monuments, build the clustered random model, and explain what the remaining gap could and could not mean.

### What is recorded and what is ours

The monuments and their names come from Historic England's National Heritage List, and the Mendip boundary from the ONS. The alignment rule, the random models and every count in the table are ours, and a different width or rule would give different numbers. Nothing here says anything about what the monuments meant to the people who built them.

Why Mendip

## A Tor, a lake village and a gorge full of caves

The Somerset link, in the list entries themselves.

| List entry | Name on the National Heritage List |
| --- | --- |
| 1019390 | St Michael's Church, monastic remains, and other settlement remains on Glastonbury Tor |
| 1006156 | Glastonbury lake village |
| 1011925 | Gough's Cave, Cheddar Gorge |
| Many entries | 94 names beginning Bowl barrow, often with a nearby farm to fix the location |

Mendip is a good place for this test because it holds so many recorded monuments in a small area, from caves in Cheddar Gorge to the Tor above Glastonbury. The same trap waits wherever people search large datasets for patterns: in star maps, stock prices, sports streaks and health records, some patterns will appear by chance alone. A Somerset student who has built a random model for comparison has learned the most important question in data science: compared with what?

Modern Age Coders is independent of Historic England, Somerset Council and the other councils named here. The list entries are Historic England's; our counts and any errors are ours.

Nearby pages

[Bath](/best-coding-class-in-bath) and [Wells](/best-coding-class-in-wells) have their own pages; [Bristol](/best-coding-class-in-bristol) is just north, with [Dorset](/coding-classes-in-dorset) and [Devon](/coding-classes-in-devon) to the south and west.

The path

## From dot-to-dot to telling signal from chance

The free lesson places each learner. Age offers a guess; ability makes the decision.

Ages 6 to 10

### Dots and shapes

Block coding with coordinates, shapes and random dots that appear on the screen.

[Coding for Kids](/courses/kids-coding-blocks-masterclass)[Scratch Coding for Kids](/courses/scratch-programming-complete-course)Ages 8 to 13

### Chance experiments

Python and puzzles that run a random experiment many times and count the results.

[Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)[Maths Through Coding](/courses/maths-through-coding)Ages 13 to 18

### Real data, fair tests

Statistics and data science in Python, with random models to compare real patterns against.

[Statistics & Probability](/courses/statistics-probability-maths-course)[Data Science for Teens](/courses/data-science-course-for-teens-python-data)Ages 18 to 67

### Judging claims

Data, statistics and AI tools for adults who need to know when a pattern is real.

[Data and AI Analytics for Non-Programmers (Excel, Sheets, Power BI)](/courses/data-and-ai-analytics-for-non-programmers-course)[Data Analysis Course](/courses/data-analysis-mastery-course-college)AI and patterns

## An AI finds patterns everywhere. Which ones would random data show too?

Pattern-finding is easy; the comparison is the hard part.

Finding patterns is the core skill of machine learning, and with enough data it will always find something. Ask an assistant to look for alignments among Somerset's monuments and it may well report thousands. Unless it is asked to build a fair random comparison, it will not say that evenly scattered dots make over six thousand, and clumped dots over thirteen thousand.

A Somerset student who has built the comparison knows to ask of any AI finding what a random version of the same data would show. That one question separates discoveries from coincidences, whether the data are monuments, medical scans or market prices.

So a young person in Somerset should learn to code in 2026 to ask "compared with what?" before believing a pattern. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

How it works

## From the Levels to the Quantocks, without the drive

Somerset is long and rural, and a weekly class in one of its towns is out of easy reach for many families. Online lessons fix that.

### Learning at home

A farmhouse on the Levels, a terrace in Bridgwater, a flat in Weston. The screen is shared and the learner writes the code.

### Words from school

Year groups, key stages, GCSEs and A levels mean the same here as in Somerset schools, and all teaching is in English.

### A first lesson on us

A real lesson, then a straight recommendation of level and course. We never ask for card details at this stage.

### The right group

Fifteen to twenty learners at the same stage, drawn from Somerset, the UK and further afield.

### Pauses for holidays

Two lessons a week suits most learners, with breaks for your school's holidays.

### Times kept in UK time

We book you in UK time, unchanged by the clock changes; your teacher works on India time, several hours ahead, and handles the difference.

Why level matters most

Across a county of market towns and villages, five learners at one stage free on the same evening are rarely neighbours. Level-based groups let a learner in Minehead or Shepton Mallet join a class that fits.

Fees

## Fees in Somerset

Chard or Clevedon, you pay the same, and so do families in every country we teach except India.

First class**USD 0**

A whole lesson of real work, ending with advice on level and course.

Group tuition**USD 100**

Roughly eight lessons a month in a group of fifteen to twenty at one level.

Private tuition**USD 150**

Roughly eight lessons a month, one teacher and one learner.

Everything is priced in US dollars, with no sterling prices. Nothing is billed until the free lesson has set a course and a weekly time; the pricing page covers pauses, missed lessons and moving between group and private.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Somerset%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)Reviews

## What families write about us on Google

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

## Book a free lesson in Somerset

Share an age or school year and a favourite pastime. A first lesson might be a dot game in Scratch, a Python coin-toss experiment, or the monument lines on this page.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Somerset one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Somerset%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)

Submitted details are used for placement and follow-up.

FAQ

## Somerset questions

The county, the monument project and practical details.

### How many people live in Somerset?

The ceremonial county had 981,683 usual residents at the 2021 Census, by our sum of six ONS figures on Nomis: North Somerset, Bath and North East Somerset, and the four districts now forming Somerset Council.

### What are the largest towns in Somerset?

By ONS built-up area: Bath 94,080, Weston-super-Mare 84,605, Taunton 61,665, Yeovil 50,170 and Bridgwater 47,860.

### What is the ley line project?

Learners count near-straight triples among 233 scheduled monuments in Mendip, compare them with random dots placed by rejection sampling, then with a fairer clumped random model, and find that clumping explains most of the apparent lines.

### What is rejection sampling?

A way to pick random points inside an awkward shape: choose points in a simple rectangle around it and throw away any that fall outside. In Mendip about 60.6 per cent of points are kept.

### Does this prove ley lines are not real?

No. It shows that most apparent alignments are what chance and clumping would produce, and that a small excess remains to be investigated. It says nothing about beliefs or meanings.

### Is there a Somerset centre?

No. Lessons are live online only, so learners join from home anywhere in the county.

### What ages do you teach?

From 6 to 67. Young children begin with blocks and puzzles, Python usually starts around eight to ten, teenagers take statistics and data science further, and adults learn data skills. The free lesson decides the level.

### Do you teach statistics?

Yes. Our statistics and probability course builds up from basics, with coding used to run experiments and test whether patterns are real. We do not promise exam grades.

### How much are lessons?

The first lesson is free. Then it is USD 100 a month for a group or USD 150 a month one-to-one, with no joining fee and no fixed term.

### Do you follow Somerset school holidays?

We can. Somerset Council, Bath and North East Somerset, North Somerset and academy trusts publish dates, and we pause around your school's.

Close by

## Pages near Somerset

Within the county see [Bath](/best-coding-class-in-bath) and [Wells](/best-coding-class-in-wells); beyond it are [Bristol](/best-coding-class-in-bristol), [Dorset](/coding-classes-in-dorset) and [Devon](/coding-classes-in-devon). The [UK hub](/coding-classes-in-united-kingdom) lists everything else.

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Somerset%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/coding-classes-in-somerset*
