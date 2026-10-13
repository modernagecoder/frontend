---
title: "Coding Classes in Shropshire | Live Online, Ages 6 to 67"
description: "Live online coding, Python and maths classes across Shropshire, from Telford and Shrewsbury to Oswestry, Newport, Bridgnorth, Market Drayton and Ludlow."
canonical: https://learn.modernagecoders.com/coding-classes-in-shropshire
source: src/pages/coding-classes-in-shropshire.html
---
> Live online coding, Python and maths classes across Shropshire, from Telford and Shrewsbury to Oswestry, Newport, Bridgnorth, Market Drayton and Ludlow.

Skip to contentCourses for Shropshire

## Where Shropshire learners start

An eight-year-old in Wem who likes making creatures in Scratch, a Year 9 in Bridgnorth fascinated by how AI learns, a Year 12 in Shrewsbury heading for computer science, and an adult in Telford studying AI properly. Each begins with a free lesson.

[![Python and AI for Kids course thumbnail](/images/python-kids.webp)Ages 8 to 12Python and AI for KidsTyped Python for children, with games, puzzles and first steps with data and AI.See the syllabus](/courses/python-ai-kids-masterclass)[![Maths Through Coding course thumbnail](/images/maths-through-coding.webp)Ages 10 to 15Maths Through CodingMaths learned by coding it, including chance, averages and experiments run many times.See the syllabus](/courses/maths-through-coding)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)Ages 13 to 18AI and Machine Learning for TeensPython to real machine learning for teenagers, from first models to neural networks and computer vision.See the syllabus](/courses/ai-ml-masterclass-teens)[![Artificial Intelligence Course course thumbnail](/images/ai-college.webp)AdultsArtificial Intelligence CourseSearch, logic and agents for adults, including hill-climbing, simulated annealing and genetic algorithms.See the syllabus](/courses/artificial-intelligence-complete-masterclass-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Shropshire in figures

## 509,147 people under two councils

Council counts are 2021 Census figures on Nomis, and the total is our own addition. Towns are ONS built-up areas, each checked against our sum of census output areas.

| Town | Residents |
| --- | --- |
| Telford | 156,910 |
| Shrewsbury | 76,015 |
| Oswestry | 17,510 |
| Newport | 14,190 |
| Bridgnorth | 12,175 |
| Market Drayton | 12,060 |
| Ludlow | 10,040 |
| Whitchurch | 9,855 |
| Shifnal | 8,980 |
| Albrighton | 6,985 |
| Wem | 6,280 |

Shropshire Council covers 323,606 people and Telford and Wrekin 185,541. The shape is unusual: Telford alone is twice the size of Shrewsbury, and after those two no town reaches twenty thousand. By our own arithmetic, about a third of the county lives outside the eleven towns in the table, in villages and hamlets, which is exactly where a weekly club at the right level is hardest to find. All eleven towns lie wholly inside the county, and each matches our own count. Holiday dates are set by the two councils and by academy trusts; since we have not read them, we simply ask each family for theirs.

### Borders on every side

Shropshire touches Wales and several English counties with pages of their own, including [Herefordshire](/coding-classes-in-herefordshire) to the south and [Cheshire](/coding-classes-in-cheshire) to the north, with [Wolverhampton](/best-coding-class-in-wolverhampton) just east.

The Shropshire project

## Evolving an answer, then testing the theory

A packing puzzle, a genetic algorithm, and an experiment that removes one ingredient at a time.

The puzzle is one of our own invention: 40 items, each with a weight and a value, and a bag that holds 286 units of weight. Which items should go in to make the bag as valuable as possible? A pack is written as 40 yes-or-no genes. The genetic algorithm starts with 60 random packs, then builds each new generation by picking parents in small contests where the better pack wins, cutting two parents and joining the pieces (crossover), and flipping the odd gene at random (mutation). Any pack that is too heavy scores nothing. Because the puzzle is small, dynamic programming can also find the true optimum, a value of 411, so we can measure precisely how close each method gets.

| Method | Average result, share of optimum | Worst run | Runs that hit the optimum |
| --- | --- | --- | --- |
| Pure guessing | 91.6% | 89.8% | 0 of 30 |
| Full genetic algorithm | 98.5% | 96.8% | 0 of 30 |
| No selection (parents picked at random) | 94.9% | 91.7% | 0 of 30 |
| No mutation | 92.0% | 88.6% | 0 of 30 |
| No crossover | 98.7% | 97.1% | 2 of 30 |

Evolution clearly beats guessing: 98.5 per cent of the optimum on average, against 91.6. Take away selection, so parents are chosen at random, and it falls to 94.9 per cent; the only help left is that we always carry the top-scoring pack forward. Take away mutation and it falls further, to 92.0, barely better than guessing, because the population soon runs out of new variation. These two results are Darwin's point in miniature: variation and selection together do the work.

The third result is the honest surprise. Removing crossover, the step that looks most like breeding, made no difference here; if anything the version without it did fractionally better. Crossover helps on some problems and not on others, and only an experiment tells you which. And note the last column: across 30 runs the full algorithm never found the optimal pack, while dynamic programming found it straight away. When an exact method exists and is fast enough, use it; evolution is for problems too big or too messy for exact methods.

### Ages 9 to 12

Play a paper version: pack a bag of cards with weights and values, keep the better of two packs, change one card, and repeat.

### Ages 12 to 15

Write the fitness function and a simple mutate-and-keep loop in Python, and compare it with random guessing over the same number of tries.

### Ages 15 and up

Build the full algorithm with tournaments, crossover and mutation, add the exact solver, and run the switch-one-off experiment many times.

### What is Darwin's and what is ours

The quotations come from Darwin's autobiography and the first edition of On the Origin of Species, both on Project Gutenberg, and the statue details from its Historic England list entry. The puzzle, the algorithm and every result in the table are ours. A genetic algorithm borrows an idea from biology; it is not a model of how living things evolve.

Why Shrewsbury

## A Shrewsbury boy and an idea computing borrowed

The Shropshire link, from Darwin's own words and the official list entry.

| Source | What it says |
| --- | --- |
| Darwin's autobiography | He was born at Shrewsbury on 12 February 1809. |
| On the Origin of Species, 1859 | Each slight variation, if useful, is preserved: the principle he called Natural Selection. |
| Historic England, entry 1246556 | A seated bronze statue of Darwin by H Montford, made in 1897, stands in front of the library at Castle Gates. |
| Historic England, entry 1246556 | The base carries Darwin's dates and the names of the sculptor and the founders. |

Computer scientists borrowed Darwin's idea because some problems have too many possible answers to check one by one, like timetables, delivery routes, circuit layouts and the design of aerials. A population of rough answers that improves by variation and selection can find very good ones without anyone knowing the formula. A Shropshire student who has built one and then tested which parts matter has learned both a powerful technique and the habit of checking a good story with an experiment.

Modern Age Coders is independent of Shropshire Council, Telford and Wrekin Council, Historic England and Project Gutenberg. Darwin's words are his; the code, the puzzle and any mistakes are ours.

Nearby pages

[Herefordshire](/coding-classes-in-herefordshire) and [Hereford](/best-coding-class-in-hereford) are south; [Cheshire](/coding-classes-in-cheshire) and [Chester](/best-coding-class-in-chester) north; [Wolverhampton](/best-coding-class-in-wolverhampton) and the [West Midlands](/coding-classes-in-the-west-midlands) east.

The path

## From Scratch creatures to evolving algorithms

The free lesson places each learner. A birthday is a first guess; skill settles it.

Ages 6 to 10

### Creatures and games

Block coding with creatures that move, collect and compete, and a first look at randomness.

[Scratch Coding for Kids](/courses/scratch-programming-complete-course)[Coding for Kids](/courses/kids-coding-blocks-masterclass)Ages 8 to 13

### Experiments in code

Typed Python that runs a game many times and counts what happens.

[Python and AI for Kids](/courses/python-ai-kids-masterclass)[Maths Through Coding](/courses/maths-through-coding)Ages 13 to 18

### How AI learns

Machine learning and search for teenagers, with honest tests of what each method achieves.

[AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens)[Problem Solving for Teens](/courses/problem-solving-dsa-masterclass-teens)Ages 18 to 67

### AI done properly

Search, logic, agents and machine learning for adults who want to understand AI, not just use it.

[Artificial Intelligence Course](/courses/artificial-intelligence-complete-masterclass-college)[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)AI and experiments

## Every AI method comes with a story. How do you know which part works?

Switching parts off, one at a time, is how you find out.

Genetic algorithms, neural networks and many other AI methods are explained with appealing stories from biology or the brain. Stories are a good way in, but they are not evidence. In our experiment, the part that sounds most like breeding, crossover, did nothing useful for this puzzle, while the plain-sounding parts, selection and mutation, did almost all the work.

Researchers call this an ablation study: remove one component, rerun, compare. A Shropshire student who has done one knows to ask of any AI claim which ingredient is really responsible, and what happens without it. That question cuts through a great deal of hype.

So a young person in Shropshire should learn to code in 2026 to test the stories told about AI, not just repeat them. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

How lessons run

## Ludlow to Whitchurch, one screen away

Shropshire is large and rural, and for many families a weekly class in Telford or Shrewsbury means a real journey. Online lessons remove it.

### From your own home

A farmhouse near Clun, a terrace in Oswestry, a new estate in Telford. Learner and teacher share one screen, and the learner types.

### The school system you know

Key stages, year groups, GCSEs and A levels mean what they mean in Shropshire schools, and lessons are in English.

### A free lesson to begin

A genuine lesson, then an honest recommendation. We ask for no card details.

### Classmates at your stage

Fifteen to twenty learners at one level, from Shropshire and many other places.

### Holidays when you need them

Most learners do two lessons a week and pause for their school's own holidays.

### Booked in UK time

Your slot is set in UK time and stays put through the clock changes; the teacher, on India time some hours ahead, moves instead.

Why groups follow level

In a county of small towns and villages, five learners at the same stage free on one evening rarely live close together. Level-based groups let a learner in Church Stretton or Much Wenlock join a class that suits them.

Fees

## Fees in Shropshire

Market Drayton or Albrighton, the fee is the same, as it is in every country we teach other than India.

First class**USD 0**

One whole lesson of genuine work, then advice on level and course.

Group tuition**USD 100**

Around eight lessons a month with fifteen to twenty learners at one level.

Private tuition**USD 150**

Around eight lessons a month with the teacher to themselves.

Our prices are in US dollars rather than pounds. Billing begins only once the free lesson has produced an agreed course and a regular weekly time. Pauses, missed lessons and a switch between group and private work are all set out on the pricing page.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Shropshire%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)Reviews

## Family reviews on Google

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

## Ask for a free Shropshire lesson

Tell us the learner's age or school year and what they enjoy. A first lesson might be a Scratch creature game, a Python experiment, or the evolving packs on this page.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Shropshire one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Shropshire%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)

Submitted details are used for placement and follow-up.

FAQ

## Shropshire questions

The county, the Darwin project and the practical details.

### How many people live in Shropshire?

Shropshire Council's area had 323,606 usual residents and Telford and Wrekin 185,541 at the 2021 Census, 509,147 together by our sum of the ONS figures on Nomis.

### What are the largest towns in Shropshire?

By ONS built-up area: Telford 156,910, Shrewsbury 76,015, Oswestry 17,510, Newport 14,190 and Bridgnorth 12,175.

### What is the Darwin project?

Learners build a genetic algorithm in Python for a packing puzzle, compare it with guessing and an exact method, and switch off selection, mutation and crossover in turn. Selection and mutation mattered; crossover did not help on this puzzle.

### Was Charles Darwin from Shropshire?

Yes. His autobiography begins "I was born at Shrewsbury on February 12th, 1809", and a Grade II listed statue of him from 1897 stands at Castle Gates in Shrewsbury.

### What is a genetic algorithm?

A search method that keeps a population of possible answers, picks better ones as parents, mixes and randomly changes them, and repeats, so the answers improve over generations.

### Is there a Shropshire classroom?

No. We only teach live on video, so a learner in Clun is as close to class as one in Telford.

### Which ages do you teach?

Ages 6 to 67. Young children begin with blocks, Python often starts around eight to ten, teenagers move on to AI and algorithms, and adults study AI or Python in depth. The free lesson sets the level.

### Can adults learn about AI methods like this?

Yes. The adult artificial intelligence course covers search, logic and agents, including hill-climbing, simulated annealing and genetic algorithms.

### How much do lessons cost?

The first lesson is free. Carry on and you pay USD 100 monthly for a group seat or USD 150 monthly for one-to-one, with nothing to pay on joining and no term to commit to.

### Do lessons pause for Shropshire school holidays?

Yes, if you wish. Shropshire Council, Telford and Wrekin Council and academy trusts publish their own dates, and we plan breaks around yours.

Around Shropshire

## Neighbouring pages

Try [Herefordshire](/coding-classes-in-herefordshire), [Cheshire](/coding-classes-in-cheshire), [Wolverhampton](/best-coding-class-in-wolverhampton) or [Stoke-on-Trent](/best-coding-class-in-stoke-on-trent). The [UK hub](/coding-classes-in-united-kingdom) has every other area.

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Shropshire%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/coding-classes-in-shropshire*
