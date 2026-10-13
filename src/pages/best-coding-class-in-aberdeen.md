---
title: "Best Coding Classes in Aberdeen | Modern Age Coders"
description: "Live online coding, Python, AI and maths classes for Aberdeen learners aged 6 to 67, from Old Aberdeen and Cults to Bridge of Don. The first lesson is free."
canonical: https://learn.modernagecoders.com/best-coding-class-in-aberdeen
source: src/pages/best-coding-class-in-aberdeen.html
---
> Live online coding, Python, AI and maths classes for Aberdeen learners aged 6 to 67, from Old Aberdeen and Cults to Bridge of Don. The first lesson is free.

Skip to contentCourse picks for Aberdeen

## Four courses for the Granite City

Choose by what the learner enjoys. Every course opens with a free live lesson, booked without card details.

[![Problem Solving and Computational Thinking for Kids course thumbnail](/images/problem-solving-kids.webp)Ages 7 to 12Problem Solving and Computational Thinking for KidsLogic and first programs, where a game of guessing which words are on a secret list makes the idea of a filter obvious.See the syllabus](/courses/problem-solving-and-computational-thinking-for-kids)[![Python for Teens course thumbnail](/images/python-teens.webp)Ages 13 to 18Python for TeensPython from a first line to full projects, including the sets and dictionaries a filter is measured against.See the syllabus](/courses/python-complete-masterclass-teens)[![Problem Solving for Teens course thumbnail](/images/problem-solving-teens.webp)Ages 13 to 18Problem Solving for TeensHash maps, sets and bit manipulation built from scratch, the parts a Bloom filter is assembled from.See the syllabus](/courses/problem-solving-dsa-masterclass-teens)[![Data Structures & Algorithms Course course thumbnail](/images/dsa-college.webp)University and adultData Structures & Algorithms CourseInterview-standard data structures for adults, including the memory and accuracy trade-offs behind probabilistic structures.See the syllabus](/courses/data-structures-algorithms-masterclass-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Aberdeen today

## A working-age city on the north-east coast

Figures from National Records of Scotland's first results for the 2022 census. Counts are rounded to the nearest hundred and printed as released.

| Measure | Aberdeen | Scotland |
| --- | --- | --- |
| Usual residents, rounded | 224,000 | 5,436,600 |
| Usual residents in 2011 | 222,793 | Not compared |
| Households, rounded | 109,500 | Not compared |
| Households in 2011 | 103,371 | Not compared |
| Aged 20 to 24, rounded | 18,900 | 337,000 |
| Share aged 15 to 64 | 68.2% | 64.6% |
| Share aged 65 and over | 17.1% | 20.1% |
| Residents per square kilometre | 1,207.1 | 69.8 |

### Working age

People aged 15 to 64 made up 68.2% of Aberdeen's residents in 2022, above Scotland's 64.6%, while 17.1% were 65 or over against 20.1%.

### More homes than before

Households rose to about 109,500 from 103,371 in 2011, a faster change than the population, which moved from 222,793 to about 224,000.

### Compact city

At 1,207.1 residents per square kilometre, Aberdeen is far denser than the Scottish average of 69.8, though well below Glasgow.

National Records of Scotland also reports that 21.3% of Aberdeen households had dependent children in 2022. Our learners here range across every stage: a P4 pupil in Cults making a first animation, an S4 student in Bridge of Don working towards National 5 Computing Science, or someone in their twenties in Torry learning Python for work, each in a group of fifteen to twenty at their own level.

Granite and learning

## A university from 1495 and a building of granite

From the University of Aberdeen's own history.

### 1495

The University says it was founded that year, and that King's College became the UK's fifth university, welcoming its first students in 1505.

### 1593

Marischal College was founded. Its medieval buildings were mostly replaced in the 1830s, and the University says its 1906 facade makes it the second-largest granite building in the world.

### Five laureates

The University counts five Nobel laureates among those associated with it, including Frederick Soddy, Chemistry in 1921, and J J R Macleod, Medicine in 1923, for the research leading to insulin.

We have no connection with the University of Aberdeen. We tell its story because this is a city that has been recording, naming and measuring things for five centuries, and the project on this page is about doing that economically: how few bits can hold the name of every road, school, hill and suburb in Aberdeen and still answer questions about them.

Where the names come from

Ordnance Survey publishes Open Names as free data under the Open Government Licence. Filtered to Aberdeen City and with postcodes left out, it lists 3,324 named features, 3,170 of them distinct: 2,916 named roads, 74 sections of road, 52 primary schools, 42 suburban areas, 34 hills and more besides.

Signature project

## Every place name in Aberdeen, in six kilobytes

A Bloom filter stores a set as a wall of bits. It can say a name is definitely absent, or probably present, and it is never wrong in the first direction.

| Bits per name | Memory | False positives | Measured rate | Textbook rate |
| --- | --- | --- | --- | --- |
| 4 | 1.5 KB | 1,562 | 18.19% | 14.69% |
| 8 | 3.1 KB | 437 | 5.09% | 2.16% |
| 10 | 3.9 KB | 196 | 2.28% | 0.82% |
| 16 | 6.2 KB | 28 | 0.33% | 0.05% |
| A plain set of the same names | about 300 KB | 0 | 0% | Not applicable |

### 1. Hash to bits

Each name is turned into several positions in a long row of bits, and those bits are switched on. Nothing else is stored: the names themselves are never kept.

### 2. Ask a question

To test a name, look at the same positions. If any bit is off, the name was certainly never added. If all are on, it is probably present, and might be a collision.

### 3. Measure both errors

Every one of the 3,170 real names was found, at every size: not a single false negative. The false positives were counted against names from three other cities.

### Errors that only point one way

A Bloom filter cannot lose a name. If it says no, the answer is certain, which is why real systems use one as a cheap first gate: a browser checking a web address against a huge list, a database avoiding a slow disk read, a spellchecker holding a dictionary in a fraction of the memory. Whatever it lets through is checked properly afterwards, so a false positive costs time, never correctness.

The measured rates sit above the textbook formula, and the reason is worth more than the formula. The standard equation assumes perfectly independent, evenly spread hash values. Real place names share endings, hundreds of them finishing in Street, Road, Place or Crescent, and our two 32-bit hashes are not the ideal the theory imagines. A learner who only quotes the formula reports 0.05% when the honest answer, measured on real names, is 0.33%.

Trading memory for certainty

## Five habits for probabilistic data structures

Learned on place names, used afterwards on caches, spam filters, duplicate detection, blocklists and any system too big to hold exactly.

| Habit | What it looks like | What it prevents |
| --- | --- | --- |
| Know which error is possible | State plainly that false positives happen and false negatives cannot | Treating a probable yes as a certain one |
| Size it for the data | Choose bits per element and hash count together, not separately | A filter that is either huge or useless |
| Measure on real keys | Test with names from outside the set, not random strings | A rate that only holds for tidy made-up data |
| Check it back | Send every probable yes to the exact lookup behind it | A wrong answer reaching the user |
| Say what you cannot do | Remember you cannot list the contents or remove an item | Designing a feature the structure cannot support |

The last habit surprises people. Because only bits are stored, a Bloom filter cannot tell you what is inside it, and removing a name would switch off bits that other names rely on. That is the price of the compression, and it is why learners build one and a plain set side by side, then decide which the job actually needs.

### Younger learners

A row of boxes ticked by a simple rule, and the discovery that two different words can tick exactly the same boxes.

### Teenagers

The Open Names file filtered to Aberdeen in Python, a Bloom filter written with bit operations, and both error rates measured against theory.

### Adults

Caches, deduplication and membership tests at work, sized deliberately and always checked against the exact source.

We are not connected with Ordnance Survey, National Records of Scotland or the University of Aberdeen. Open Names is published under the Open Government Licence and the census figures are public; the filters, counts and rates are our own work.

Learning ladder

## From ticking boxes to a Bloom filter

The age bands are a rough guide; the free lesson finds the real starting point.

Ages 6 to 10

### Ticks and guesses

Marking boxes by a rule, spotting when two words mark the same ones, and seeing why that causes a wrong yes.

[Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)[Mental Maths for Kids](/courses/mental-maths-mastery-kids)Ages 11 to 13

### Sets and membership

Storing words in a list and then a set, timing the difference and counting the memory used.

[Python and AI for Kids](/courses/python-ai-kids-masterclass)[Maths Through Coding](/courses/maths-through-coding)Ages 14 to 18

### Bloom filters in Python

Bit operations, several hashes per key, and both kinds of error measured on real place names.

[Problem Solving for Teens](/courses/problem-solving-dsa-masterclass-teens)[Python for Teens](/courses/python-complete-masterclass-teens)Ages 18 to 67

### Memory budgets at work

Probabilistic structures in databases, caches and pipelines, chosen with their guarantees understood.

[Data Structures & Algorithms Course](/courses/data-structures-algorithms-masterclass-college)[MySQL Course](/courses/mysql-database-complete-masterclass-college)Coding and AI

## A computer can hold every place name in Britain. Why should an Aberdeen teenager build a Bloom filter?

Because scale turns memory into a design decision, and the trade needs understanding.

On a laptop, 300 kilobytes is nothing, and an AI assistant will rightly suggest a set. Multiply by every name in the country, or by every address a service has seen, and the same question gets expensive. A learner who has built a Bloom filter knows what can be given up safely, what cannot, and how to measure the difference rather than guess it.

These structures also sit inside the systems that train and serve AI. Huge text collections are deduplicated with hashing filters, databases skip disk reads with them, and network services screen requests with them before doing real work. They are a clear, small example of the rule that runs through the whole field: you can buy speed and space with a little uncertainty, provided you know exactly which way the uncertainty points.

So an Aberdeen teenager should still learn to program in 2026, in a city that has been naming and measuring itself since 1495: the interesting questions are no longer whether a computer can store something, but what it costs and what it gives up. The longer argument is in [why coding is worth learning in 2026](/blog/is-coding-worth-learning-2026).

Delivery

## Old Aberdeen, Cults or Bridge of Don, from home

Aberdeen weather makes a short journey feel long; a live online lesson removes it.

### North or south of the Dee

A learner in Dyce and another in Kincorth can share one lesson without either crossing the city.

### Primary, secondary and national levels

Primary 1 to 7, S1 to S6, then National 5, Higher and Advanced Higher: lessons use the names Aberdeen schools use, and teaching is in English.

### A first lesson that teaches

The free session covers a real task and ends by recommending a level, a course and a weekly time. No card details are needed.

### Matched by level

Groups of fifteen to twenty learners at the same stage, drawn from Aberdeen, elsewhere in Britain and overseas, so every level finds a workable hour.

### Two lessons each week

A fixed pair of weekly slots, roughly eight lessons a month, with holiday and exam breaks agreed with the teacher in advance.

### India keeps one clock

India Standard Time never shifts, so Aberdeen runs four and a half hours behind it in British Summer Time and five and a half behind in winter, which keeps after-school and evening lessons inside the teaching day.

Across the north east

Families in Westhill, Inverurie or Stonehaven join exactly the same groups, because every lesson is online and groups are formed by level rather than address.

Fees

## Aberdeen lesson fees

A free first lesson, then one monthly price.

First class**USD 0**

A complete lesson at no cost, ending with a level, a recommended course and a proposed weekly time.

Group tuition**USD 100**

About eight live lessons a month in a group of fifteen to twenty learners at one level.

Private tuition**USD 150**

About eight live lessons a month with a teacher working only with your learner.

Every family outside India pays the same US dollar fee, so Rosemount and Mannofield pay alike, and we publish no prices in pounds. Nothing is billed until the free lesson has settled a course and a slot; the pricing page covers pauses, missed lessons and moving between group and private teaching.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20coding%20lesson%20for%20a%20learner%20in%20Aberdeen.)Reviews

## Six Google reviews from families, printed as written

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

## Book a free lesson for an Aberdeen learner

We pick the first task by level: a box-ticking guessing game for a young child, a first Python program that uses a set, or the Open Names file and a Bloom filter for a teenager ready for real data.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Aberdeen one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20coding%20lesson%20for%20a%20learner%20in%20Aberdeen.)

Submitted details are used for placement and follow-up.

FAQ

## Aberdeen coding class questions

What Aberdeen families ask us most.

### How many people live in Aberdeen?

Scotland's Census 2022 counted about 224,000 usual residents in Aberdeen City, rounded to the nearest hundred, compared with 222,793 in 2011, in about 109,500 households.

### How does Aberdeen compare with Scotland?

In 2022, 68.2% of Aberdeen residents were aged 15 to 64 against 64.6% nationally, 17.1% were 65 or over against 20.1%, and there were 1,207.1 residents per square kilometre against 69.8.

### What is a Bloom filter?

A compact way of testing whether something is in a set. It can answer definitely not, or probably yes, using only a row of bits, and it never mistakenly says no about something that was added.

### How small can it be?

Aberdeen's 3,170 named places fit in 6.2 kilobytes with a false positive rate of 0.33% in our test, or 1.5 kilobytes at 18%. A plain set of the same names uses about 300 kilobytes.

### Where do the place names come from?

Ordnance Survey Open Names, published as free data under the Open Government Licence. Filtered to Aberdeen City and excluding postcodes, it lists 2,916 named roads among 3,170 distinct names.

### How old is the University of Aberdeen?

The University says it was founded in 1495, with King's College welcoming its first students in 1505, and it counts five Nobel laureates among those associated with it. We are not connected with the University.

### When are Aberdeen lessons held?

Weekday afternoons and evenings or weekends, at a UK time agreed during the free lesson. India runs 4.5 hours ahead of Aberdeen in summer and 5.5 hours ahead in winter.

### Is there a Modern Age Coders centre in Aberdeen?

No. There is no Aberdeen centre and no premises anywhere in the UK; every lesson is taught live online. Learners need a computer with sound and a steady connection, and our phone number is Indian.

### How much do Aberdeen lessons cost?

The first lesson is free. After it, a group place is USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, and one-to-one lessons on the same pattern are USD 150 a month. Course, format and time are agreed before any charge.

### How are Aberdeen groups formed?

By level, pace and aims rather than age or postcode, with fifteen to twenty learners at one stage. If no group meets at a suitable time, we offer one-to-one lessons.

Explore Scotland and the UK

## Scottish pages and other cities

South along the coast, the [Edinburgh page](/best-coding-class-in-edinburgh) works out why its summer nights stay pale, and [Glasgow](/best-coding-class-in-glasgow) measures its boundary with eight rulers. The [Scotland guide](/coding-and-ai-classes-in-scotland) covers the Curriculum for Excellence, with exam help on the [National 5](/national-5-computing-science-help) and [Higher Computing Science](/higher-computing-science-help) pages.

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20coding%20lesson%20for%20a%20learner%20in%20Aberdeen.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/best-coding-class-in-aberdeen*
