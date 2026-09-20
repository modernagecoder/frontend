---
title: "Cayley, Hamilton and Maclaurin Preparation | UKMT Olympiads"
description: "Preparing for the UKMT intermediate olympiads: which paper each year group sits, six questions in two hours, and why finding one answer is rarely the answer."
canonical: https://learn.modernagecoders.com/intermediate-mathematical-olympiad-cayley-hamilton-maclaurin-preparation
source: src/pages/intermediate-mathematical-olympiad-cayley-hamilton-maclaurin-preparation.html
---
> The UK Mathematics Trust runs three intermediate olympiads on one day, 18 March 2027: Cayley for "England, Wales and Overseas: Year 9 and below", Hamilton for "Year 10" and Maclaurin for "Year 11", with Scotland sitting S2 or below, S3 and S4 and Northern Ireland one year higher in each case. Each is a two-hour paper of "six Olympiad style problems". Entry is "by invitation based on a qualifying IMC score, or by discretionary entry", from the Intermediate Mathematical Challenge on 27 January 2027, and UKMT says "around 1,800 students qualify from the IMC each year". Candidates "should give full written solutions, including mathematical reasons as to why your method is correct", because "just stating an answer, even a correct one, will earn you very few marks". We teach the mathematics and the writing, live online. The first class is free; a group place is USD 100 a month and one-to-one teaching USD 150.

[Home](/) / [Courses](/courses) / [UK competitions calendar](/uk-coding-maths-and-ai-competitions-calendar) / Cayley, Hamilton and Maclaurin

United Kingdom · Years 9, 10 and 11 · 18 March 2027

# Cayley, Hamilton and Maclaurin preparation

Three olympiad papers, sat on the same afternoon, split not by how good a pupil is but by which school year they are in. Cayley is for Year 9 and below, Hamilton for Year 10, Maclaurin for Year 11, and each is six questions in two hours with every answer written out in full. That structure has a consequence worth understanding before March: a pupil who sits Cayley this year will sit Hamilton next year and Maclaurin the year after, against the same people. Nobody gets one attempt at this. What carries between the three is not topics. It is the habit of finishing a question, which at this level almost always means finding every answer rather than an answer.

At a glance: Organiser: UK Mathematics Trust; Three papers: Cayley, Hamilton, Maclaurin; 2027 date: 18 March, all three; Paper: Six questions in two hours; Split by: School year, not by score; Qualifying from: The Intermediate Challenge; Qualifiers a year: Around 1,800; Answers: Full written solutions. Rated 4.9 across 547 Google reviews.

## Three courses for an intermediate olympiad candidate

Choose by what a pupil can finish, not by what they can start.

- [Olympiad and competition maths](/courses/olympiad-competition-mathematics-mastery): Number theory, combinatorics and geometry in the olympiad idiom, with solutions written to completion.
- [High school mathematics](/courses/complete-high-school-mathematics-mastery): For a Year 10 or 11 pupil whose algebra needs to stop being the obstacle.
- [Middle school maths mastery](/courses/comprehensive-middle-school-mathematics-mastery): For a Year 9 Cayley candidate still consolidating the ground the paper stands on.

## One afternoon, three papers, split by year group

Facts read at UKMT's own pages on 20 September 2026.

**Who sits which paper, in UKMT's own words**

| Paper | England, Wales and Overseas | Scotland | Northern Ireland |
|---|---|---|---|
| Cayley | Year 9 and below | S2 or below | Year 10 or below |
| Hamilton | Year 10 | S3 | Year 11 |
| Maclaurin | Year 11 | S4 | Year 12 |

**The intermediate route, with the 2026-27 dates UKMT publishes**

| Round | Date | What it is |
|---|---|---|
| Intermediate Mathematical Challenge | 27 January 2027 | The multiple-choice paper everyone sits first |
| Cayley, Hamilton and Maclaurin | 18 March 2027 | Six written questions, two hours, by year group |
| Grey Kangaroo | 18 March 2027 | A multiple-choice follow-on, same afternoon |
| Pink Kangaroo | 18 March 2027 | The older multiple-choice follow-on, same afternoon |

Four papers on one afternoon is the thing to get straight with a school. A pupil qualifies for exactly one of them from their Intermediate Challenge score and their year group, and the Kangaroo papers and the olympiad papers are different animals: multiple choice against full written solutions. Preparing for the wrong one is a wasted six weeks.

UKMT says around 1,800 students qualify from the Intermediate Challenge each year, across all three olympiad papers and all four nations. It is a small room.

The split by year group rather than by score is unusual and deliberate. A brilliant Year 9 pupil is not pushed onto the Maclaurin paper; they sit Cayley against other Year 9s. It keeps the papers age-appropriate and it means the ladder repeats: Cayley, then Hamilton, then Maclaurin.

Entry is a school matter. UKMT invites on a qualifying Intermediate Challenge score or accepts a discretionary entry, for which it charges a fee published on its own site in pounds. We do not print fees and we cannot enter anyone.

Sources: [UKMT competitions calendar](https://ukmt.org.uk/competitions) and the [Cayley, Hamilton and Maclaurin page](https://ukmt.org.uk/intermediate-challenges/cayley-hamilton-maclaurin-olympiad-challenge), read 20 September 2026. We have no connection with the UK Mathematics Trust, and nothing on this page should be read as one.

## A complete answer means all of them

UKMT is explicit: "just stating an answer, even a correct one, will earn you very few marks". Here is what that looks like on a real question.

A question in this style: **find all pairs of positive whole numbers a and b for which 1/a + 1/b = 1/6.** Most pupils find one within a minute. a = 12 and b = 12 works, because a sixth is two twelfths. That is a correct answer, and on an olympiad paper it is worth almost nothing, because the question said all.

**Our run of 20 September 2026: every solution, and where they come from**

| a | b | Why it appears |
|---|---|---|
| 7 | 42 | a &minus; 6 = 1, so b &minus; 6 = 36 |
| 8 | 24 | a &minus; 6 = 2, so b &minus; 6 = 18 |
| 9 | 18 | a &minus; 6 = 3, so b &minus; 6 = 12 |
| 10 | 15 | a &minus; 6 = 4, so b &minus; 6 = 9 |
| 12 | 12 | a &minus; 6 = 6, so b &minus; 6 = 6 |
| 15, 18, 24, 42 | 10, 9, 8, 7 | The same four pairs the other way round |

### The move that finds them

Multiply out and rearrange: ab &minus; 6a &minus; 6b = 0, so (a &minus; 6)(b &minus; 6) = 36. Now the question is about the divisors of 36, and there is nothing left to hunt for.

### Why nine and not more

36 has exactly nine positive divisors: 1, 2, 3, 4, 6, 9, 12, 18 and 36. Each one gives one ordered pair. That sentence is the proof that the list is complete, and it is where the marks are.

### What we checked

We searched every pair of positive integers up to 200 by computer and found exactly those nine. The search is reassurance; the divisor argument is the answer.

The difference between one solution and nine is a minute of work. The difference between nine solutions and a proof that there are only nine is the whole question, and it is the thing a pupil coming from the Intermediate Challenge has never been asked to supply.

The verbal habit that fixes it is small. After finding an answer, ask out loud: could there be another? Then: how do I know there is not? Pupils who ask those two questions automatically pick up marks all over an olympiad paper.

The same trick, turning an equation into a product and then reading off divisors, comes up again and again at this level. It is worth learning as a move rather than as a fact about the number 6.

And notice what the good answer is not: it is not longer. Three lines of algebra, a list of nine divisors and one sentence about why the list is complete is a full-mark solution. Olympiad marking rewards finishing, not volume.

The problem, the algebra and the search are ours, written and run on 20 September 2026. UKMT publishes its own past papers and full solutions free, and none of them is reproduced here.

## Six weeks, one habit

The Intermediate Challenge is in January and the olympiads are in March. That gap is enough if it is spent on writing rather than on reading.

**What earns marks on these papers, and what does not**

| Habit | What it is worth | The failure it prevents |
|---|---|---|
| Writing "all solutions are" and then proving it | Often the majority of a question's marks | A correct first answer scoring almost nothing |
| Stating the method before using it | Lets a marker follow a long argument | A page of algebra nobody can grade |
| Checking the boundary cases | Catches the solution that was quietly excluded | Nine solutions written as eight |
| Finishing three questions rather than starting six | Complete solutions score; fragments rarely do | Two hours spent producing no full marks |
| Reading UKMT's published solutions for style | Shows the expected standard exactly | Guessing how much detail is enough |

The commonest pattern we see in a first lesson is a pupil who can do the mathematics and has never once been told what a finished solution looks like. They are not behind. They have been rewarded for answers their whole school career, and the olympiad has changed the currency.

Two hours for six questions means twenty minutes each, and nobody should aim for that. Three questions finished properly is a good paper and a realistic target for a first-time candidate.

For a Year 9 pupil sitting Cayley, the best investment is the one that pays three times. Everything learned about writing complete solutions this March is worth more on the Hamilton paper next year and more again on Maclaurin after that.

A pupil who finds they enjoy this should look at the [competitions calendar](/uk-coding-maths-and-ai-competitions-calendar): the senior rounds and the British Mathematical Olympiad are the same sport played longer.

## Four rungs, and a ladder that repeats

The same pupil climbs this three times, in Years 9, 10 and 11. What is learned once counts three times.

**From an answer to a complete, proved solution**

| Stage | Rung | The sign it is secure |
|---|---|---|
| Year 8 to 9 | 1. Algebra that does not slow you down | Rearranges and factorises without stopping to think |
| Year 9 | 2. One complete solution | Writes an argument a classmate could follow unaided |
| Year 10 | 3. All solutions | Asks "could there be another?" without being prompted |
| Year 11 | 4. Proof of completeness | Explains why the list cannot be longer, in a sentence |

### If March is close

Write up three problems the pupil has already solved, in full, and have someone read them as a stranger would. That is the highest-return evening available.
Do not start new topics. Intermediate olympiad questions are built from school mathematics used unfamiliarly.

### After Maclaurin

The senior rounds follow, and the British Mathematical Olympiad after those, where the same habit is worth far more.
A pupil who enjoys closing a list of cases usually enjoys writing the program that generated it, which is what [maths through coding](/courses/maths-through-coding) is for.

## What we teach a Year 9, 10 or 11 mathematician

Four groups, chosen by what is currently in the way rather than by year group.

### Olympiad mathematics

The paper itself

- [Olympiad and competition maths](/courses/olympiad-competition-mathematics-mastery): Divisors, invariants and arguments taken to the end.
- [Middle school maths mastery](/courses/comprehensive-middle-school-mathematics-mastery): The ground a Cayley candidate stands on.
- [Statistics and probability](/courses/statistics-probability-maths-course): Counting arguments, done carefully.

### School mathematics

Years 9 to 11

- [High school mathematics](/courses/complete-high-school-mathematics-mastery): The algebra a Maclaurin candidate should not be thinking about.
- [GCSE maths](/courses/gcse-mathematics-mastery): Foundation and higher, to the school's board.
- [IGCSE maths](/courses/igcse-mathematics-mastery): For international and independent schools.

### Checking and building

Where maths meets code

- [Maths through coding](/courses/maths-through-coding): A program that lists candidates, and a proof that closes the list.
- [Python from start to finish](/courses/python-complete-masterclass-teens): Enough code to search a space of cases by hand.
- [Algorithms and data structures](/courses/problem-solving-dsa-masterclass-teens): Counting, searching and proving a method terminates.

### Looking further

Sixth form and beyond

- [A-level maths](/courses/a-level-maths-course-pure-mechanics-statistics): Pure, mechanics and statistics, taught properly.
- [Competitive programming](/courses/competitive-programming-for-teens-course): Correctness under a clock.
- [AI and machine learning for teens](/courses/ai-ml-masterclass-teens): Where the mathematics goes next.

## A weekly hour, and a reader for the write-up

Teaching is live on video from India, which sits five and a half hours ahead of Britain in winter and four and a half in summer. Slots are agreed and kept in UK time.

- **Weekday evening** The usual choice for Years 9 to 11.
- **Weekend morning** For two hours on a single question, properly.
- **Half term** Short intensives in the run-up to March.

- **Written solutions marked** Someone reads the argument as a stranger would and says where it stops convincing.
- **Problems written by us** In the olympiad idiom. UKMT's past papers stay on UKMT's site.
- **Five to ten pupils** Enough for two different methods to meet, small enough for every write-up to be read.
- **Year groups respected** Cayley, Hamilton and Maclaurin candidates are taught at the level their paper is set.
- **One to one when useful** For a pupil far ahead of their year or preparing for a specific paper.
- **No score promised** We cannot qualify anyone and do not claim to. Nobody honest promises a medal.

## Fees

One monthly rate in US dollars for every country outside India. No joining fee and no term to sign.

- Free first class: USD 0. A real lesson on one problem. An honest read on the level. No card details.
- Group batch: USD 100 a month. Five to ten pupils at one level. The same teacher weekly. Solutions read line by line. A certificate at the end.
- One to one: USD 150 a month. One pupil with one teacher. Aimed at a particular paper. For pupils well ahead of their year.

## What pupils and parents ask

### Which paper does my child sit?

By year group, not by score. UKMT sets Cayley for Year 9 and below, Hamilton for Year 10 and Maclaurin for Year 11 in England, Wales and overseas; S2 or below, S3 and S4 in Scotland; and Year 10 or below, Year 11 and Year 12 in Northern Ireland.

### When are the intermediate olympiads in 2027?

All three papers fall on 18 March 2027, the same afternoon as the Grey and Pink Kangaroo. The Intermediate Mathematical Challenge that qualifies pupils is on 27 January 2027.

### How does a pupil qualify?

UKMT says entry is by invitation based on a qualifying Intermediate Mathematical Challenge score, or by discretionary entry, and that around 1,800 students qualify from the IMC each year.

### What is the paper like?

Two hours and six olympiad-style problems, with every answer written out in full. UKMT tells candidates to "give full written solutions, including mathematical reasons as to why your method is correct".

### Why did a correct answer score so little?

Because UKMT says so plainly: "just stating an answer, even a correct one, will earn you very few marks; also, incomplete or poorly presented solutions will not receive full marks". At this level the argument is the answer.

### What does "find all" actually require?

A list and a reason the list is complete. For example, 1/a + 1/b = 1/6 has exactly nine ordered solutions in positive integers, because the equation rearranges to (a minus 6)(b minus 6) = 36 and 36 has nine divisors. The sentence about the divisors is where the marks are.

### How many questions should a pupil finish?

Three, well. Two hours for six questions is twenty minutes each, and complete solutions score where fragments do not.

### Is the Kangaroo the same thing?

No. The Grey and Pink Kangaroo papers fall on the same afternoon but are multiple choice. Preparing for one is not preparing for the other.

### Do you use UKMT past papers in lessons?

No. UKMT publishes its own past papers and full solutions free, which is the right place for them. Our problems are written by us in the same idiom.

### What do classes cost?

The first lesson is free. A group place is then USD 100 a month and one-to-one teaching USD 150, with nothing to join and no minimum term.

## More for olympiad mathematicians

- [Junior Mathematical Olympiad](/junior-mathematical-olympiad-preparation): The rung below, for Year 8 and under.
- [UK competitions calendar 2026-27](/uk-coding-maths-and-ai-competitions-calendar): The whole season in one table, organiser by organiser.
- [Scottish Mathematical Challenge](/scottish-mathematical-challenge-practice): Three rounds a year, and a mug for the winners.
- [British Informatics Olympiad](/british-informatics-olympiad-preparation): For pupils who would rather prove things in code.
- [Coding classes in the UK](/coding-classes-in-united-kingdom): The four school systems, and where every UK page sits.
- [Choosing an online class](/best-online-coding-classes-uk): Seven things to ask before a card comes out.

## Contact

Book the free first class at [https://learn.modernagecoders.com/intermediate-mathematical-olympiad-cayley-hamilton-maclaurin-preparation](https://learn.modernagecoders.com/intermediate-mathematical-olympiad-cayley-hamilton-maclaurin-preparation#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email contact@modernagecoders.com.
