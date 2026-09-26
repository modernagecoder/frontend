---
title: "Coding Classes in Shropshire | Live Online, Ages 6 to 67"
description: "Live online coding, Python and maths classes across Shropshire, from Telford and Shrewsbury to Oswestry, Newport, Bridgnorth, Market Drayton and Ludlow."
canonical: https://learn.modernagecoders.com/coding-classes-in-shropshire
source: src/pages/coding-classes-in-shropshire.html
---
> Shropshire as a county is two unitary councils, Shropshire and Telford and Wrekin, and together they had 509,147 residents at the 2021 Census, our sum of the two published counts. Telford is the largest town, then Shrewsbury, with Oswestry, Newport, Bridgnorth and Market Drayton well behind. We teach live over video from India, and a learner's class is decided by what they can already do, never simply by age. Learners from 6 to 67 join groups of five to ten or have one-to-one lessons, in coding, Python, AI and maths. The Shropshire project starts with Charles Darwin, who was born in Shrewsbury. The first lesson is free; continuing is USD 100 a month in a group or USD 150 a month one-to-one.

[Home](/) / [United Kingdom](/coding-classes-in-united-kingdom) / Shropshire

Shropshire / Live online

# Coding classes in Shropshire

**What are the best coding classes in Shropshire?** Shropshire as a county is two unitary councils, Shropshire and Telford and Wrekin, and together they had 509,147 residents at the 2021 Census, our sum of the two published counts. Telford is the largest town, then Shrewsbury, with Oswestry, Newport, Bridgnorth and Market Drayton well behind. We teach live over video from India, and a learner's class is decided by what they can already do, never simply by age. Learners from 6 to 67 join groups of five to ten or have one-to-one lessons, in coding, Python, AI and maths. The Shropshire project starts with Charles Darwin, who was born in Shrewsbury. The first lesson is free; continuing is USD 100 a month in a group or USD 150 a month one-to-one.

Charles Darwin opened his autobiography with the words "I was born at Shrewsbury on February 12th, 1809", and a bronze statue of him, made in 1897, sits in front of the town's library. His idea of natural selection, slight useful variations preserved over generations, became one of the most borrowed ideas in computing: the genetic algorithm, which breeds better answers to a problem instead of calculating them. This page's project builds one in Python, tests it against pure guessing and against an exact method, and then does what any good scientist would do: switches off each ingredient in turn to find out which ones actually matter.

Facts last verified 26 September 2026. Teaching is online; no Shropshire branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Where Shropshire learners start

An eight-year-old in Wem who likes making creatures in Scratch, a Year 9 in Bridgnorth fascinated by how AI learns, a Year 12 in Shrewsbury heading for computer science, and an adult in Telford studying AI properly. Each begins with a free lesson.

- [Python and AI for Kids](/courses/python-ai-kids-masterclass) (Ages 8 to 12): Typed Python for children, with games, puzzles and first steps with data and AI.
- [Maths Through Coding](/courses/maths-through-coding) (Ages 10 to 15): Maths learned by coding it, including chance, averages and experiments run many times.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 13 to 18): Python to real machine learning for teenagers, from first models to neural networks and computer vision.
- [Artificial Intelligence Course](/courses/artificial-intelligence-complete-masterclass-college) (Adults): Search, logic and agents for adults, including hill-climbing, simulated annealing and genetic algorithms.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## 509,147 people under two councils

Council counts are 2021 Census figures on Nomis, and the total is our own addition. Towns are ONS built-up areas, each checked against our sum of census output areas.

**Shropshire built-up areas with at least 6,000 residents, 2021 Census**

| Town | Residents |
|---|---|
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

## Evolving an answer, then testing the theory

A packing puzzle, a genetic algorithm, and an experiment that removes one ingredient at a time.

The puzzle is one of our own invention: 40 items, each with a weight and a value, and a bag that holds 286 units of weight. Which items should go in to make the bag as valuable as possible? A pack is written as 40 yes-or-no genes. The genetic algorithm starts with 60 random packs, then builds each new generation by picking parents in small contests where the better pack wins, cutting two parents and joining the pieces (crossover), and flipping the odd gene at random (mutation). Any pack that is too heavy scores nothing. Because the puzzle is small, dynamic programming can also find the true optimum, a value of 411, so we can measure precisely how close each method gets.

**Our experiment: 30 runs of 20,000 tries each, 26 September 2026**

| Method | Average result, share of optimum | Worst run | Runs that hit the optimum |
|---|---|---|---|
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

## A Shrewsbury boy and an idea computing borrowed

The Shropshire link, from Darwin's own words and the official list entry.

**Charles Darwin and Shrewsbury**

| Source | What it says |
|---|---|
| Darwin's autobiography | He was born at Shrewsbury on 12 February 1809. |
| On the Origin of Species, 1859 | Each slight variation, if useful, is preserved: the principle he called Natural Selection. |
| Historic England, entry 1246556 | A seated bronze statue of Darwin by H Montford, made in 1897, stands in front of the library at Castle Gates. |
| Historic England, entry 1246556 | The base carries Darwin's dates and the names of the sculptor and the founders. |

Computer scientists borrowed Darwin's idea because some problems have too many possible answers to check one by one, like timetables, delivery routes, circuit layouts and the design of aerials. A population of rough answers that improves by variation and selection can find very good ones without anyone knowing the formula. A Shropshire student who has built one and then tested which parts matter has learned both a powerful technique and the habit of checking a good story with an experiment.

Modern Age Coders is independent of Shropshire Council, Telford and Wrekin Council, Historic England and Project Gutenberg. Darwin's words are his; the code, the puzzle and any mistakes are ours.

**Nearby pages** [Herefordshire](/coding-classes-in-herefordshire) and [Hereford](/best-coding-class-in-hereford) are south; [Cheshire](/coding-classes-in-cheshire) and [Chester](/best-coding-class-in-chester) north; [Wolverhampton](/best-coding-class-in-wolverhampton) and the [West Midlands](/coding-classes-in-the-west-midlands) east.

## From Scratch creatures to evolving algorithms

The free lesson places each learner. A birthday is a first guess; skill settles it.

- **Ages 6 to 10: Creatures and games** Block coding with creatures that move, collect and compete, and a first look at randomness. [Scratch Coding for Kids](/courses/scratch-programming-complete-course), [Coding for Kids](/courses/kids-coding-blocks-masterclass)
- **Ages 8 to 13: Experiments in code** Typed Python that runs a game many times and counts what happens. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [Maths Through Coding](/courses/maths-through-coding)
- **Ages 13 to 18: How AI learns** Machine learning and search for teenagers, with honest tests of what each method achieves. [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens), [Problem Solving for Teens](/courses/problem-solving-dsa-masterclass-teens)
- **Ages 18 to 67: AI done properly** Search, logic, agents and machine learning for adults who want to understand AI, not just use it. [Artificial Intelligence Course](/courses/artificial-intelligence-complete-masterclass-college), [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)

## Every AI method comes with a story. How do you know which part works?

Switching parts off, one at a time, is how you find out.

Genetic algorithms, neural networks and many other AI methods are explained with appealing stories from biology or the brain. Stories are a good way in, but they are not evidence. In our experiment, the part that sounds most like breeding, crossover, did nothing useful for this puzzle, while the plain-sounding parts, selection and mutation, did almost all the work.

Researchers call this an ablation study: remove one component, rerun, compare. A Shropshire student who has done one knows to ask of any AI claim which ingredient is really responsible, and what happens without it. That question cuts through a great deal of hype.

So a young person in Shropshire should learn to code in 2026 to test the stories told about AI, not just repeat them. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Ludlow to Whitchurch, one screen away

Shropshire is large and rural, and for many families a weekly class in Telford or Shrewsbury means a real journey. Online lessons remove it.

- **From your own home** A farmhouse near Clun, a terrace in Oswestry, a new estate in Telford. Learner and teacher share one screen, and the learner types.
- **The school system you know** Key stages, year groups, GCSEs and A levels mean what they mean in Shropshire schools, and lessons are in English.
- **A free lesson to begin** A genuine lesson, then an honest recommendation. We ask for no card details.
- **Classmates at your stage** Five to ten learners at one level, from Shropshire and many other places.
- **Holidays when you need them** Most learners do two lessons a week and pause for their school's own holidays.
- **Booked in UK time** Your slot is set in UK time and stays put through the clock changes; the teacher, on India time some hours ahead, moves instead.

**Why groups follow level** In a county of small towns and villages, five learners at the same stage free on one evening rarely live close together. Level-based groups let a learner in Church Stretton or Much Wenlock join a class that suits them.

## Fees in Shropshire

Market Drayton or Albrighton, the fee is the same, as it is in every country we teach other than India.

- First class: USD 0. One whole lesson of genuine work, then advice on level and course.
- Group tuition: USD 100 a month. Around eight lessons a month with five to ten learners at one level.
- Private tuition: USD 150 a month. Around eight lessons a month with the teacher to themselves.

Our prices are in US dollars rather than pounds. Billing begins only once the free lesson has produced an agreed course and a regular weekly time. Pauses, missed lessons and a switch between group and private work are all set out on the pricing page.

## Shropshire questions

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

## Neighbouring pages

Try [Herefordshire](/coding-classes-in-herefordshire), [Cheshire](/coding-classes-in-cheshire), [Wolverhampton](/best-coding-class-in-wolverhampton) or [Stoke-on-Trent](/best-coding-class-in-stoke-on-trent). The [UK hub](/coding-classes-in-united-kingdom) has every other area.

## Contact

Book the free class on [https://learn.modernagecoders.com/coding-classes-in-shropshire](https://learn.modernagecoders.com/coding-classes-in-shropshire#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email contact@modernagecoders.com. Rated 4.9 across 547 Google reviews.
