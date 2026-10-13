---
title: "Maths Tutor in Sunnybank | Prep to Year 12 and Adults"
description: "Online maths tutor for Sunnybank, Brisbane: Prep to Year 12 and adults, Australian Curriculum maths and Queensland senior Mathematical Methods, in Brisbane time."
canonical: https://learn.modernagecoders.com/maths-tutor-sunnybank
source: src/pages/maths-tutor-sunnybank.html
---
> Modern Age Coders is an online maths tutor for Sunnybank learners aged 6 to 67, teaching Australian Curriculum maths from Prep to Year 10, Queensland senior mathematics including Mathematical Methods, and adult maths. Lessons are live video in Brisbane time, one to one or in groups of five to ten at the same level. Our Sunnybank example compares probabilities with and without replacement using Census counts: 0.37146 against 0.37124. Your first lesson is free.

[Home](/) / [Courses](/courses) / [Coding classes in Australia](/coding-classes-in-australia) / Maths tutor in Sunnybank

Sunnybank · Prep to Year 12 and adults · Live maths lessons online

# Maths tutor in Sunnybank

At the 2021 Census, 1,119 Sunnybank residents were in tertiary education, and 682 of them were at university. Choose two of those students at random: what is the chance both are at university? A careful student says the second choice is out of 1,118 people, not 1,119, and works it through without replacement. A hurried student squares 682 over 1,119. The two answers are 0.37124 and 0.37146, a difference of 0.06%. So the shortcut is fine here, but try the same shortcut in a class of ten and it is out by a third. Knowing when a shortcut is safe is the heart of probability, and of how we teach maths to Sunnybank learners from Prep to Year 12.

At a glance: Age range: 6 to 67; Prep to Year 6: Number, fractions, chance; Years 7 to 10: Algebra, probability, statistics; Years 11 and 12: Including Mathematical Methods; Adults: Practical and refresher maths; Lessons: Live video, one to one or five to ten; Clock: Brisbane time, no daylight saving; Sunnybank project: With and without replacement. Rated 4.9 across 547 Google reviews.

## Primary, secondary and senior maths

The three courses Sunnybank families ask about most; the full list is lower down.

- [Prep to Year 6](/courses/elementary-mathematics-complete-masterclass): Place value, fractions, measurement and early chance, built carefully.
- [Probability and statistics](/courses/statistics-probability-maths-course): Counting outcomes, with and without replacement, and reading data honestly.
- [Senior maths](/courses/complete-high-school-mathematics-mastery): Functions, calculus and probability for students taking Mathematical Methods.

## Choosing two people: with or without replacement?

When you pick two different people, the second pick comes from a slightly smaller group. Whether that matters depends on how big the group is.

The 2021 Census counted **1,119** Sunnybank residents in tertiary education, of whom **682** were at university and 432 in vocational education. Without replacement, the chance that two different tertiary students chosen at random are both at university is (682 &times; 681) / (1,119 &times; 1,118). With replacement, which treats the two picks as independent, it is (682 / 1,119) squared.

**Two ways to calculate the same chance (our calculation from ABS counts)**

| Method | Calculation | Probability | About 1 in |
|---|---|---|---|
| Both at university, without replacement (exact) | (682 x 681) / (1,119 x 1,118) | 0.37124 | about 0.37 |
| Both at university, with replacement (shortcut) | (682 / 1,119) squared | 0.37146 | about 0.37 |
| Both in vocational education, exact | (432 x 431) / (1,119 x 1,118) | 0.14883 | about 0.15 |
| Both in vocational education, shortcut | (432 / 1,119) squared | 0.14904 | about 0.15 |

### Here the shortcut wins

In a group of over a thousand, removing one person barely changes the odds. The with-replacement shortcut is quicker and only 0.06% off for the university pair, which is plenty accurate.

### In a small group it fails

Take a class of 10 with 3 students in Year 12. Without replacement the chance both picks are Year 12 is 6/90, about 0.067; the shortcut gives 0.09. That is 35% too high.

### The rule of thumb

When the sample is a tiny fraction of the group, the shortcut is safe. When it is a noticeable fraction, use the exact method.

### What students practise

Tree diagrams, multiplying along branches, the difference between independent and dependent events, and comparing an exact answer with an approximation.

Senior students meet the same ideas in the binomial and related distributions.

### Why use real counts

Made-up numbers hide the question that matters: is the group big enough for the shortcut? Real Census counts make students decide.

The counts are as the ABS published them; the probabilities are our own calculation.

Data: ABS, [2021 Census QuickStats, Sunnybank](https://abs.gov.au/census/find-census-data/quickstats/2021/SAL32694), read 14 October 2026.

## Simulating the draw in Python

A formula gives the probability; a simulation shows what happens in practice. Older students do both and compare.

**Drawing two of the 1,119 tertiary students at random, repeated (our simulation, seed 2026)**

| Number of repeats | Times both were at university | Observed proportion | Exact probability |
|---|---|---|---|
| 1,000 | 371 | 0.371 | 0.37124 |
| 100,000 | 37,294 | 0.37294 | 0.37124 |

### What the simulation shows

With 1,000 repeats the observed proportion, 0.371, happens to land very close to the exact value. With 100,000 repeats it is 0.37294, which is still within the normal wobble of a random experiment.

Students learn that simulations get closer to the truth on average as repeats grow, but never land on it exactly.

### Why it is worth doing

Writing ten lines of Python to draw two names from a list makes "without replacement" concrete: the code literally removes the first name before drawing the second.

Students taking [maths through coding](/courses/maths-through-coding) build this as one of their first probability projects.

## Senior maths for Sunnybank students

Queensland students study senior subjects across Units 1 to 4. University entry requirements show which maths subject many courses expect.

### Mathematical Methods and university entry

The University of Queensland lists, for its Bachelor of Science, the prerequisites "Queensland Year 12 (or equivalent): General English subject (Units 3 & 4, C) Mathematical Methods (Units 3 & 4, C)" together with a science subject.

So Mathematical Methods matters for many science, engineering and economics pathways, and it is the senior subject we are asked about most.

### What we teach, and what we do not promise

We teach senior maths content, exam technique and checking habits, for Mathematical Methods and the other senior maths subjects. We never promise a result or an ATAR.

Internal assessments remain the student's own work.

The Queensland Curriculum and Assessment Authority publishes the full list of senior subjects; its pages did not load for us when we checked, so we do not list the other maths subjects here from memory.

Source: The University of Queensland, [Bachelor of Science program page](https://my.uq.edu.au/programs-courses/program.html?acad_prog=2461), read 14 October 2026.

## What Sunnybank learners build before senior school

Probability starts long before Year 11, with words like likely and unlikely, and grows into fractions, tree diagrams and data.

**Chance and data through the years**

| Years | Chance and data focus | A typical task |
|---|---|---|
| Prep to 2 | Likely, unlikely, certain, impossible | Sorting everyday events by how likely they are |
| 3 to 6 | Fractions as chances, simple experiments | Rolling a dice 60 times and comparing with 1/6 |
| 7 and 8 | Sample spaces and relative frequency | Listing outcomes for two coins |
| 9 and 10 | Two-step events, with and without replacement | The Sunnybank question above |

### Sunnybank learners in 2021

The Census counted 611 Sunnybank residents at primary school and 518 at secondary school, and 477 residents aged 15 to 19, the years when senior maths choices are made.

Online lessons mean every one of them could join from home.

### Academies and tests

Year 9 families interested in the Queensland Academies can read our [Queensland Academies entry maths](/queensland-academies-entry-maths-practice) page. NAPLAN numeracy has [its own page](/naplan-numeracy-practice-online).

This page stays with everyday maths.

## The 2027 Queensland school year, on Brisbane time

Queensland keeps the same clock all year, which makes lesson times simple.

**Queensland state school terms, 2027**

| Term | Dates | Length |
|---|---|---|
| Term 1 | Wednesday 27 January to Thursday 25 March | 9 weeks |
| Term 2 | Monday 12 April to Friday 25 June | 11 weeks |
| Term 3 | Monday 12 July to Friday 17 September | 10 weeks |
| Term 4 | Tuesday 5 October to Friday 10 December | 10 weeks |

### No daylight saving

Brisbane does not change its clocks, and neither does India, where our teachers work. So the gap is the same all year: Brisbane is 4 hours 30 minutes ahead. A 5pm Sunnybank lesson is always 12:30pm for the teacher.

Families in New South Wales see the gap move twice a year; Sunnybank families do not.

### One to one or in a group

Private lessons suit a specific gap or an exam. Groups of five to ten at one level suit steady progress, and the shared board shows the teacher every step.

Holiday revision is available on request.

Sources: Queensland Department of Education, [future school dates](https://education.qld.gov.au/about-us/calendar/future-dates); IANA time zone database, Australia/Brisbane. Read 14 October 2026.

## Probability and statistics for grown-ups

Many adults who join us want to read numbers with confidence: risks, averages and percentages in the news and at work.

### Reading risk

Understanding what a one in a thousand chance means, and why two small risks are not simply added together.

### Workplace data

Averages, spread and simple charts for reports, with the habit of asking how a number was produced.

### Supporting a student

Following tree diagrams and probability tables well enough to help a teenager with homework.

Adult learners have their own classes, separate from school students, or private lessons at a time that suits shift work. The with-and-without replacement question above is a favourite first lesson for adults too, because it shows that a sensible shortcut has limits.

## From likely and unlikely to Mathematical Methods

Learners step up once a skill works on a problem they have not met before.

**Steps in chance and reasoning**

| Usually | Step | Shown when the learner can |
|---|---|---|
| Prep to Year 2 | 1. Language of chance | Place events on a likely-to-unlikely line and explain why |
| Years 3 to 6 | 2. Chance as a fraction | Write the chance of rolling a 5 and test it |
| Years 7 to 10 | 3. Two-step events | Decide whether replacement matters and calculate both ways |
| Years 11 and 12 | 4. Distributions | Use a probability model and judge whether it fits |

### Coming in at Year 11

Students who join late often need algebra and fractions shored up first; we say how long that should take.
It is the quickest path to coping with senior work.

### Adults

Adults often come for statistics at work or to help with homework.
They learn in adult groups or one to one.

## Maths courses for Sunnybank learners

Grouped by stage; card titles are our course names, lessons follow the Australian Curriculum and Queensland senior subjects.

### Prep to Year 6

Primary

- [Early number](/courses/early-math-foundations): Ages 4 to 7, with objects.
- [Mental maths](/courses/mental-maths-mastery-kids): Reasoned quick arithmetic.
- [Abacus](/courses/abacus-mental-maths-course-for-kids): Beads to mental images.

### Years 7 to 10

Secondary

- [Years 7 to 10 maths](/courses/comprehensive-middle-school-mathematics-mastery): Algebra, geometry and chance.
- [Algebra foundations](/courses/algebra-foundations-masterclass): For a learner who slipped.
- [Maths through coding](/courses/maths-through-coding): Simulate probability in Python.

### Senior and adults

Years 11, 12 and beyond

- [Senior maths](/courses/complete-high-school-mathematics-mastery): For Mathematical Methods.
- [Statistics and probability](/courses/statistics-probability-maths-course): In depth, for older learners.
- [University maths](/courses/college-mathematics-complete-masterclass): Calculus and linear algebra.

## A Sunnybank week of maths

Fixed weekly times on Brisbane time, which never shifts for daylight saving.

- **Weekday afternoons** Prep to Year 10.
- **Weekday evenings** Senior students and adults.
- **Weekends** Longer lessons on request.

- **One teacher** The same teacher each week.
- **Family updates** A short, honest note after lessons.
- **Grouped by level** Classmates working at the same point.
- **Real data** Census counts and simulations in lessons.
- **Extra before exams** Private lessons can be added.
- **Explain first** Learners say why before they drill how.

## Fees for Sunnybank maths lessons

Families outside India pay a set monthly fee in US dollars, with no joining fee and no contract.

- Free first class: USD 0. A full lesson at the right level. An honest summary. No card required.
- Group batch: USD 100 a month. Five to ten learners at one level. The same teacher all term. Practice checked. Stop after any month.
- One to one: USD 150 a month. Private teaching. One goal at a time. Helpful before senior exams.

## Questions about a maths tutor in Sunnybank

### Do you tutor maths for Sunnybank students?

Yes, live online in Brisbane time, from Prep to Year 12 and for adults, one to one or in level-matched groups.

### Do you teach Mathematical Methods?

Yes, along with the other senior maths subjects and Years 7 to 10 maths.

### Why do universities mention Mathematical Methods?

Many list it as a prerequisite. The University of Queensland, for example, lists Mathematical Methods (Units 3 and 4, C) among the prerequisites for its Bachelor of Science.

### What is the difference between with and without replacement?

Without replacement, the second pick comes from a group one smaller. For two Sunnybank tertiary students both at university, the answers are 0.37124 exact and 0.37146 with the shortcut.

### When is the with-replacement shortcut safe?

When you choose only a tiny fraction of the group. In a class of 10 the shortcut can be a third out; for over a thousand Sunnybank tertiary students it is about 0.06% out.

### Can tutoring guarantee a result or ATAR?

No. We teach carefully and report honestly, but no tutor can promise a result or an ATAR.

### Do lesson times change during the year?

No. Brisbane has no daylight saving, so lessons stay at the same time all year.

### Can adults learn too?

Yes, in adult groups or one to one.

### Can a simulation replace the formula?

No, but it is a good check. In our 100,000-repeat simulation the proportion of university pairs was 0.37294, close to the exact 0.37124.

### What is a tree diagram used for?

It lays out each stage of a chance experiment as branches, so probabilities can be multiplied along a path and added across paths. It makes with and without replacement easy to compare.

### How much are lessons?

The first lesson is free. Monthly fees for groups and private lessons are in the fees panel on this page.

## More for Sunnybank learners

- [Queensland Academies entry maths](/queensland-academies-entry-maths-practice): For Year 9 applicants.
- [NAPLAN numeracy](/naplan-numeracy-practice-online): Years 3, 5, 7 and 9.
- [Years 7 to 10 maths](/australian-curriculum-maths-year-7-to-10-help): The national curriculum.
- [Maths competitions](/australian-mathematics-competition-practice-by-year): Practice by year.
- [Maths tutoring costs](/maths-tutor-cost-australia-explained): What lessons cost.
- [Coding in Sunnybank](/best-coding-and-ai-classes-in-sunnybank-brisbane): Programming for the suburb.

## Contact

Book the free first class at [https://learn.modernagecoders.com/maths-tutor-sunnybank](https://learn.modernagecoders.com/maths-tutor-sunnybank#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
