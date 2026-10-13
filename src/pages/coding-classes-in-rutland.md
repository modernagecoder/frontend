---
title: "Coding Classes in Rutland | Live Online, Ages 6 to 67"
description: "Live online coding, Python and maths classes across Rutland, from Oakham and Uppingham to Cottesmore, Ketton, Ryhall, Empingham, Whissendine and Edith Weston."
canonical: https://learn.modernagecoders.com/coding-classes-in-rutland
source: src/pages/coding-classes-in-rutland.html
---
> Live online coding, Python and maths classes across Rutland, from Oakham and Uppingham to Cottesmore, Ketton, Ryhall, Empingham, Whissendine and Edith Weston.

Skip to contentCourses for Rutland

## Where Rutland learners begin

A seven-year-old in Ketton who loves sorting things into groups, a Year 7 in Oakham curious about how family trees work, a Year 12 in Uppingham preparing for computer science, and an adult in Empingham getting to grips with data. Each starts with a free lesson.

[![Problem Solving and Computational Thinking for Kids course thumbnail](/images/problem-solving-kids.webp)Ages 7 to 12Problem Solving and Computational Thinking for KidsLogic, sorting and grouping puzzles, including Venn diagrams and step-by-step problem solving.See the syllabus](/courses/problem-solving-and-computational-thinking-for-kids)[![Python and AI for Kids course thumbnail](/images/python-kids.webp)Ages 8 to 12Python and AI for KidsTyped Python for children, with games, puzzles and first steps with data and AI.See the syllabus](/courses/python-ai-kids-masterclass)[![Problem Solving for Teens course thumbnail](/images/problem-solving-teens.webp)Ages 13 to 18Problem Solving for TeensAlgorithms and data structures for teenagers, from lists to trees and the orders you can walk them in.See the syllabus](/courses/problem-solving-dsa-masterclass-teens)[![Data Structures & Algorithms Course course thumbnail](/images/dsa-college.webp)AdultsData Structures & Algorithms CourseData structures and algorithms for adults, from stacks and queues to trees, heaps and graphs.See the syllabus](/courses/data-structures-algorithms-masterclass-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Rutland in figures

## 41,049 people in 39 parish branches

The county count is the 2021 Census figure on Nomis. Parish figures are our own sums of the census output areas that the ONS assigns to each parish.

| Parish | Residents | Output areas |
| --- | --- | --- |
| Oakham | 11,165 | 36 |
| Uppingham | 4,722 | 15 |
| Cottesmore | 3,084 | 8 |
| Barleythorpe | 2,338 | 8 |
| Ketton | 1,951 | 6 |
| Ryhall | 1,634 | 6 |
| Stretton | 1,437 | 2 |
| Langham | 1,400 | 4 |

Oakham holds about 27 per cent of the county on its own, and Oakham and Uppingham together nearly 39 per cent. Most parishes are villages: 23 of the 39 contain just one output area, and the smallest by our sums are Lyndon with 117 residents, Tixover with 160 and Clipsham with 194. Other names on the list include Empingham, Whissendine, Edith Weston, Great Casterton, Market Overton and North and South Luffenham. Any parish too small to contain an output area of its own does not appear as a separate branch. Rutland County Council and academy trusts set school holidays; we did not read their calendars and fit breaks to each family.

### Close neighbours

Rutland sits between [Leicestershire](/coding-classes-in-leicestershire), [Lincolnshire](/coding-classes-in-lincolnshire) and [Northamptonshire](/coding-classes-in-northamptonshire), with [Peterborough](/best-coding-class-in-peterborough) a short way east.

The Rutland project

## A whole county as one tree

Real census data, four ways to walk a tree, and a total that is one person out.

The learner downloads two things: the 2021 Census count for each of Rutland's 128 output areas from Nomis, and the ONS lookup that says which parish each output area belongs to. Every output area appears exactly once, so the pieces fit into a tree with 168 nodes: one root for the county, 39 parish branches and 128 leaves. Output areas range from 103 residents to 1,221, averaging about 321. Now the program walks the tree in different orders, each useful for a different job.

| Walk | Order it visits | What it is good for |
| --- | --- | --- |
| Pre-order | Parent first, then its children | Printing the tree as an indented list, county at the top |
| Post-order | Children first, then the parent | Adding up: each parish total needs its areas first |
| Level order | Root, then all parishes, then all areas | Counting nodes at each depth: 1, 39 and 128 |
| Search | Stop when the target is found | Answering which parish a given output area is in |

The post-order walk adds the leaves up to parishes and the parishes up to the root, and the root comes to 41,048. The published county figure is 41,049. The program is right and so is the census; the gap comes from how the ONS protects privacy. Its own methodology says it added "noise" to every Census 2021 dataset, that a typical dataset has around 14 per cent of its counts changed by a small amount, and that "the randomness may mean small changes to totals". A county and its 128 areas are separate published counts, each with its own tiny adjustment, so their sums need not match exactly.

That is the lesson most worth keeping. When the sum of the parts and the published total disagree slightly, the right move is not to force them to agree, and not to add up the parts and call it the official figure. You report the published total as published, label your own sum as yours, and explain the difference. Every figure on this page follows that rule.

### Ages 8 to 11

Draw a family tree of Rutland on paper, county at the top, a few parishes below, and add up the numbers from the bottom.

### Ages 11 to 15

Store the tree as a Python dictionary of lists, print it with indentation, and total each parish with a loop.

### Ages 15 and up

Write recursive pre-order and post-order functions, a level-order walk with a queue, and a search, then explain the one-person gap.

### Where the numbers come from

Every count is the ONS's, from Census 2021 on Nomis, and the parish assignments come from the ONS lookup. The tree, its totals and the traversal code are ours. The explanation of the gap is quoted from the ONS page on protecting personal data in Census 2021 results.

Why Rutland

## Much in little, from a Norman hall to a data structure

The Rutland link, from the county's own sites.

| Source | What it says |
| --- | --- |
| Discover Rutland | Rutland is England's smallest county, with the motto Multum in Parvo, much in little. |
| Oakham Castle | Its Great Hall was built between 1180 and 1190. |
| Oakham Castle | It calls the hall the finest surviving example of Norman domestic architecture in Europe. |
| Oakham Castle | The hall holds a display of gilded horseshoes. |
| ONS | Census 2021 counts carry small random adjustments to protect privacy, which can change totals slightly. |

Trees are everywhere in computing: folders on a disk, the structure of a web page, a family tree, the menu of an app, and the way an AI model splits a decision into questions. A county small enough to print whole is a friendly first tree, and real census data gives it a real puzzle. A Rutland student who has walked it four ways and chased down one missing person has met one of the most important structures in computer science, and one of the most important habits in handling official data.

Modern Age Coders is independent of Rutland County Council, Oakham Castle, Discover Rutland and the Office for National Statistics. Their facts are theirs; the tree, our sums and any slips in them are ours.

Nearby pages

[Leicestershire](/coding-classes-in-leicestershire) wraps round the west, with [Lincolnshire](/coding-classes-in-lincolnshire) north-east, [Northamptonshire](/coding-classes-in-northamptonshire) south and [Peterborough](/best-coding-class-in-peterborough) east.

The path

## From sorting games to recursive trees

The free lesson settles where each learner starts. Age suggests, ability decides.

Ages 6 to 10

### Sort and group

Block coding and puzzles that sort things into groups, the first step towards thinking in trees.

[Coding for Kids](/courses/kids-coding-blocks-masterclass)[Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)Ages 8 to 13

### Lists of lists

Typed Python with lists and dictionaries, building small nested structures and adding them up.

[Python and AI for Kids](/courses/python-ai-kids-masterclass)[Maths Through Coding](/courses/maths-through-coding)Ages 13 to 18

### Trees and recursion

Data structures and algorithms for teenagers, including recursion, trees and traversal orders.

[Problem Solving for Teens](/courses/problem-solving-dsa-masterclass-teens)[Python for Teens](/courses/python-complete-masterclass-teens)Ages 18 to 67

### Structures for work

Trees, heaps, graphs and the rest for adults, whether for interviews, study or work with data.

[Data Structures & Algorithms Course](/courses/data-structures-algorithms-masterclass-college)[Data Analysis Course](/courses/data-analysis-mastery-course-college)AI and official data

## An AI will happily add up the parts. Will it tell you they should not match?

Knowing why numbers disagree matters as much as adding them.

Give an assistant the 128 output-area counts and ask for Rutland's population, and it will add them to 41,048 and present that as the answer. It will not usually know that the ONS publishes 41,049, or that the difference is deliberate noise added to protect privacy. It may even offer to fix the small discrepancy, which is exactly the wrong thing to do with official statistics.

A Rutland student who has read the ONS explanation knows to quote the published figure, label any recalculation as their own, and say why they differ. As more reports are drafted with AI help, that habit keeps numbers honest.

So a young person in Rutland should learn to code in 2026 to understand where numbers come from, not only how to add them. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

The everyday details

## From Oakham to the smallest parish

In a county of villages, a weekly class at the right level might mean a long drive out of the county. Online lessons remove the drive.

### Lessons in your own home

A cottage in Lyddington, a new house in Barleythorpe, a farmhouse near Clipsham. The screen is shared and the learner does the coding.

### The school words, unchanged

Key stages, year groups, GCSEs and A levels are used as Rutland schools use them, and the teaching is in English.

### The first lesson is free

A proper lesson with real work, then a straight answer on level and course, without card details.

### A group that matches you

Fifteen to twenty learners at one stage, from Rutland, the rest of the UK and abroad.

### Breaks when you need them

Two lessons a week for most learners, with pauses for your own school holidays.

### UK time, clock change or not

Your slot is fixed in UK time all year; the teacher, whose day runs on India time a few hours ahead, adapts when the UK clocks move.

Why groups are built on level

With about 41,000 people across the whole county, five learners at one stage on the same evening are almost impossible to find locally. Level-based groups mean a learner in Whissendine or Morcott still joins the right class.

Fees

## Fees in Rutland

Uppingham or Tinwell, the price is the same, and it is the same in every country we teach other than India.

First class**USD 0**

One real lesson with genuine work, then advice on level and course.

Group tuition**USD 100**

About eight lessons a month with a group of fifteen to twenty at one level.

Private tuition**USD 150**

About eight lessons a month, one-to-one with a teacher.

We price and bill in US dollars, not pounds. There is no charge until the free lesson has settled a course and a weekly time, and the pricing page explains pauses, missed lessons and switching between group and private.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20live%20in%20Rutland%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)Reviews

## Families on Google, in brief

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

## Book a free lesson in Rutland

Send the learner's age or year group and a couple of interests. A first lesson might be a sorting game, a first Python dictionary, or the Rutland tree on this page.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Rutland one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20live%20in%20Rutland%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)

Submitted details are used for placement and follow-up.

FAQ

## Rutland questions

The county, the tree project and how lessons work.

### How many people live in Rutland?

Rutland had 41,049 usual residents at the 2021 Census, from ONS figures on Nomis. Adding its 128 output areas gives 41,048, one fewer, because of the small random adjustments the ONS makes to protect privacy.

### What are the largest places in Rutland?

By our sums of census output areas, the largest parishes are Oakham with 11,165 residents, Uppingham 4,722, Cottesmore 3,084, Barleythorpe 2,338 and Ketton 1,951.

### What is the Rutland tree project?

Learners build Rutland as a tree of 168 nodes, the county, 39 parishes and 128 census output areas, walk it in pre-order, post-order and level order, search it, and explain why the leaves add to one fewer than the published total.

### What is tree traversal?

The order in which a program visits every node of a tree. Pre-order visits a parent before its children, post-order after them, and level order goes one depth at a time.

### Why do census numbers not always add up?

The ONS says it added small random noise to Census 2021 tables to protect privacy. Each published count is adjusted separately, so a total and the sum of its parts can differ slightly.

### Do you teach anywhere in Rutland?

Not in person. All lessons are live online, so learners anywhere in the county join from home.

### What ages do you teach?

Ages 6 to 67. Young children start with blocks and puzzles, Python usually follows around eight to ten, teenagers move on to data structures and advanced Python, and adults choose Python, data or algorithms. The free lesson decides the level.

### Do you teach data structures and algorithms?

Yes, to teenagers and adults, including trees, recursion and traversal, as on this page.

### How much do lessons cost?

The first lesson is free. After that, a group place is USD 100 per month and one-to-one lessons USD 150 per month, with no joining fee and no fixed term.

### Do lessons fit around Rutland school holidays?

Yes. Rutland County Council and academy trusts publish their own dates; tell us yours and we will plan breaks around them.

Neighbours

## Pages around Rutland

Try [Leicestershire](/coding-classes-in-leicestershire), [Lincolnshire](/coding-classes-in-lincolnshire), [Northamptonshire](/coding-classes-in-northamptonshire) or [Peterborough](/best-coding-class-in-peterborough). The [UK hub](/coding-classes-in-united-kingdom) has every other area.

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20live%20in%20Rutland%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/coding-classes-in-rutland*
