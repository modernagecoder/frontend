---
title: "British Mathematical Olympiad Preparation | BMO1 and BMO2"
description: "Preparing for BMO1 and BMO2: three and a half hours, six problems then four, who can enter, how scripts are marked and the route to the IMO team."
canonical: https://learn.modernagecoders.com/british-mathematical-olympiad-bmo-preparation
source: src/pages/british-mathematical-olympiad-bmo-preparation.html
---
> The British Mathematical Olympiad has two rounds. BMOS describes BMO1 as a "3 1/2-hour paper" of "6 problems (the first being intended to be more accessible than the rest)" and BMO2 as a "3 1/2-hour paper" of "4 problems", both "taken by students in their own schools". UKMT's calendar puts BMO1 on 18 November 2026, the same day as the Andrew Jobbings Senior Kangaroo, and BMO2 on 20 January 2027, after the Senior Mathematical Challenge on 7 October 2026. BMOS says both "are open entry competitions for students in full time secondary education", with automatic qualification for those who reach a published threshold. BMO1 scripts are marked by "a team of around 60 markers" over three days in December; BMO2 by around twenty people. The top scorers go to a training camp at Trinity College, Cambridge, from which an IMO squad and then a team of six is chosen. We teach proof technique, live online: the first class is free, a group place is USD 100 a month and one-to-one teaching USD 150.

[Home](/) / [Courses](/courses) / [UK competitions calendar](/uk-coding-maths-and-ai-competitions-calendar) / British Mathematical Olympiad

United Kingdom · Full-time secondary education · 18 November 2026 and 20 January 2027

# British Mathematical Olympiad preparation

Three and a half hours for six problems is the most generous time limit in British school mathematics, and the first time most students meet a paper where finishing everything is not the goal. BMO1 falls on 18 November 2026 and BMO2 on 20 January 2027, both sat in a student's own school, both marked by hand: around sixty people gather in December to read every BMO1 script over three days. That last fact is worth more than it looks. At this level a solution is not compared with an answer key by a machine. It is read by a mathematician who is looking for one thing, and this page is about how to give it to them.

At a glance: Organisers: UKMT and the BMO Subtrust; BMO1: 18 November 2026; BMO2: 20 January 2027; Each paper: Three and a half hours; Questions: Six in round 1, four in round 2; Open to: Full-time secondary education; Marked by: Around 60 people, by hand; Leads to: The IMO squad, via Cambridge. Rated 4.9 across 547 Google reviews.

## Three courses for a BMO candidate

At this level the limit is technique and stamina, not syllabus.

- [Olympiad and competition maths](/courses/olympiad-competition-mathematics-mastery): Invariants, extremal arguments, number theory and geometry, with solutions written to a standard a marker would accept.
- [High school mathematics](/courses/complete-high-school-mathematics-mastery): For a student whose algebra or geometry is still doing the slowing down.
- [A-level maths](/courses/a-level-maths-course-pure-mechanics-statistics): The school course running underneath, taught so that it stops competing for the same evenings.

## Six problems, then four, and a marker reading every line

Quoted from BMOS and UKMT, read on 20 September 2026.

**BMO1 and BMO2 as the organisers describe them**

|  | BMO1 | BMO2 |
|---|---|---|
| Date | 18 November 2026 | 20 January 2027 |
| Length | A "3 1/2-hour paper" | A "3 1/2-hour paper" |
| Questions | "6 problems (the first being intended to be more accessible than the rest)" | "4 problems" |
| Where | "taken by students in their own schools" | "taken by students in their own schools" |
| Marking | "A team of around 60 markers gathers in December to mark all the scripts over a 3-day period" | Marking is "carried out by around 20 people" |
| Who can sit it | An "open entry" competition for students in full-time secondary education | The same, with automatic qualification by threshold |

The parenthesis in the BMO1 description is the single most useful sentence on this page for a first-time candidate: the first problem is "intended to be more accessible than the rest". The organisers have deliberately left the door open. A student who sits down, reads all six, panics at questions three to six and never seriously attempts question one has misread the paper, not failed it.

Three and a half hours for six problems is fifty minutes each if spread evenly, and again, nobody should. Two complete solutions on a BMO1 paper is a real result for a first attempt.

Sixty markers over three days tells you what a script is for. Nothing is auto-marked, nothing is compared with a key, and partial credit is decided by a person reading an argument. Presentation is not politeness here; it is the mechanism by which marks are awarded at all.

Both papers are sat in the candidate's own school, on an ordinary school day, which is worth arranging early with a teacher. The Senior Kangaroo falls on the same day as BMO1, and they are different papers for different people.

Sources: [the British Mathematical Olympiad site](https://bmos.ukmt.org.uk/), its [eligibility policy](https://bmos.ukmt.org.uk/home/eligibility.shtml), and the [UKMT competitions calendar](https://ukmt.org.uk/competitions), all read 20 September 2026. We have no connection with UKMT or the BMO Subtrust.

## Find the thing that cannot change

Olympiad papers ask a question school papers never do: show that something is impossible. There is a standard way in, and it is worth an evening.

Try this. **Write the numbers 1 to 8 on a board. Rub out any two of them and write down the positive difference instead. Repeat until one number is left. What can that last number be?** Play it a few times and the answers look random: 0, then 6, then 2, then 4. The question feels unanswerable. It is not.

**Our run of 20 September 2026: 20,000 random games**

| Numbers on the board | Sum at the start | Final numbers we saw | Parity wrong in |
|---|---|---|---|
| 1 to 4 | 10, even | 0, 2, 4 | 0 runs |
| 1 to 5 | 15, odd | 1, 3, 5 | 0 runs |
| 1 to 8 | 36, even | 0, 2, 4, 6, 8 | 0 runs |
| 1 to 9 | 45, odd | 1, 3, 5, 7, 9 | 0 runs |
| 1 to 10 | 55, odd | 1, 3, 5, 7, 9 | 0 runs |

### What we found

Across twenty thousand games the final number varied wildly and its parity never did. Start with an even total and you finish even; start odd and you finish odd, every time.

### Why it must be so

Replacing a and b by their difference changes the total by a + b minus the difference, which is twice the smaller number. An even change never alters whether a total is odd or even.

### What it is for

Now impossibility questions have an answer. Cannot reach 0 from 1 to 9? The sum is 45, odd, and it stays odd, so the last number cannot be 0. Two lines, complete.

That is an invariant: a quantity that no permitted move can change. Finding one turns a question about infinitely many possible sequences of moves into a question about a single number, and it is the technique behind a large share of olympiad problems that ask whether something can be done.

The experiment matters as preparation in a way that reading about invariants does not. A student who has watched twenty thousand games refuse to change parity will look for the invariant first next time.

It also models the right relationship with computing. The simulation did not prove anything: twenty thousand games are twenty thousand examples, and the [junior olympiad page](/junior-mathematical-olympiad-preparation) has a case where forty examples in a row lie. The proof is the two-line argument about twice the smaller number. The program told us where to look.

Students who enjoy that division of labour tend to enjoy informatics olympiads too, where the program is the answer rather than the scout.

The game, the runs and the argument are ours, written and run on 20 September 2026: 20,000 random games over boards of 1 to n for n between 4 and 10, with no run whose final parity differed from the parity of the starting sum.

## Two solutions, not six attempts

BMO preparation is unlike revision. It is closer to training for distance than for a sprint.

**What a BMO candidate should actually do**

| Worth the hours | Why | The trap it avoids |
|---|---|---|
| Sitting one problem for an hour without help | Olympiad problems are built to resist a first reading | Learning to abandon anything that does not yield in five minutes |
| Attempting question one seriously | BMOS says it is meant to be more accessible | Spending the paper on problems written to be hard |
| Writing solutions out in full, then rereading them cold | Sixty people mark by hand; an argument has to survive a stranger | Working that convinces the author and nobody else |
| Learning techniques as a repertoire | Invariants, extremal cases, pigeonhole, colouring, bounding | Hoping a flash of insight arrives on the day |
| Reading BMOS's own published solutions | They show what a complete argument looks like at this level | Guessing the standard of rigour expected |

The mental adjustment is the hard part. Strong students arrive at BMO1 having always finished papers, and a three-and-a-half-hour paper on which they complete two questions feels like failure. It is not: it is a normal good performance, and the students who accept that early do better than those who keep score against a school-exam standard.

Stamina is trainable and most candidates never train it. Three and a half hours of concentrated mathematics is a physical skill; a student who has never worked for more than forty minutes at a stretch will lose the last hour.

Nothing in a BMO paper requires content beyond school mathematics, which surprises people. What it requires is technique, patience and the willingness to write an argument that could be wrong.

For a student in the year below, the [Cayley, Hamilton and Maclaurin papers](/intermediate-mathematical-olympiad-cayley-hamilton-maclaurin-preparation) are the same sport over two hours, and everything learned there carries straight up.

## Trinity College, a squad, and a team of six

BMO2 is not the end of the ladder. It is the point at which the ladder becomes a selection process.

**The route to the International Mathematical Olympiad, as BMOS describes it**

| Stage | What happens |
|---|---|
| Senior Mathematical Challenge, 7 October 2026 | The multiple-choice paper from which thresholds are set |
| BMO Round 1, 18 November 2026 | Six problems, three and a half hours, sat in school |
| BMO Round 2, 20 January 2027 | Four problems, three and a half hours, for those above the threshold |
| Training camp | Top BMO2 scorers are invited to a camp at Trinity College, Cambridge |
| The squad | An IMO squad is selected from the camp |
| The team | Further training and selection tests narrow the squad to six, plus reserves |

Eligibility to sit the papers and eligibility to represent the UK are two different things, and BMOS sets them out separately. The papers are open entry for students in full-time secondary education. To be selected for the IMO team, a candidate must hold British citizenship or "will have completed at least 3 full years of full-time secondary education in the UK at the time they leave school".

BMOS also states that refugees, stateless persons and asylum seekers may apply for UK qualified status through UKMT and BMOS, which is worth knowing and is rarely mentioned anywhere else.

For almost everyone who sits BMO1, none of this will apply, and that is the right way to think about the paper. Around sixty markers spend three days in December reading scripts from students who will never go to Cambridge for a training camp, and the reading is the point.

The whole season, every competition we could confirm with its organiser, is on the [competitions calendar](/uk-coding-maths-and-ai-competitions-calendar).

## Four rungs into olympiad mathematics

A candidate moves up when the previous habit has become automatic, not when a year has passed.

**From school mathematics to olympiad proof**

| Stage | Rung | The sign it is secure |
|---|---|---|
| Years 9 to 10 | 1. Fluent technique | Algebra and geometry never interrupt the thinking |
| Years 10 to 11 | 2. A repertoire | Recognises when to try an invariant, a bound or an extremal case |
| Years 11 to 12 | 3. Stamina | Works one problem for an hour without losing the thread |
| Years 12 to 13 | 4. Writing that survives | Produces arguments a stranger can mark without asking questions |

### If November is close

Sit a full past paper under timed conditions once, then spend the remaining weeks writing up the problems from it properly.
Practise question one specifically. BMOS says it is meant to be more accessible, and a complete solution to it is worth more than four half-attempts.

### If this is the sport

The same techniques run all the way to the International Mathematical Olympiad, and the squad is chosen from BMO2 by way of Cambridge.
Students who like proving impossibility often like the [informatics olympiad](/british-informatics-olympiad-preparation), where the impossible thing is usually a running time.

## What we teach a sixth-form mathematician

Four groups, chosen by what is currently in the way.

### Olympiad technique

The paper itself

- [Olympiad and competition maths](/courses/olympiad-competition-mathematics-mastery): Invariants, pigeonhole, bounding and colouring, practised.
- [Statistics and probability](/courses/statistics-probability-maths-course): Counting arguments made rigorous.
- [High school mathematics](/courses/complete-high-school-mathematics-mastery): Technique that should never be the obstacle.

### School alongside

Years 11 to 13

- [A-level maths](/courses/a-level-maths-course-pure-mechanics-statistics): Pure, mechanics and statistics, taught to the exam.
- [GCSE maths](/courses/gcse-mathematics-mastery): For a younger candidate finishing the qualification.
- [IGCSE maths](/courses/igcse-mathematics-mastery): The international route through the same content.

### Programs as scouts

Where computing helps

- [Maths through coding](/courses/maths-through-coding): Simulate first, then prove what the simulation suggested.
- [Python from start to finish](/courses/python-complete-masterclass-teens): Enough programming to explore a conjecture in an evening.
- [Competitive programming](/courses/competitive-programming-for-teens-course): The informatics version of the same discipline.

### Beyond school

University and after

- [Algorithms and data structures](/courses/problem-solving-dsa-masterclass-teens): Where proofs meet running times.
- [AI and machine learning for teens](/courses/ai-ml-masterclass-teens): Mathematics with a use case attached.
- [Data science with Python](/courses/data-science-course-for-teens-python-data): Statistics done on real data rather than exercises.

## Long problems, weekly, with someone reading the write-up

Teaching is live on video from India, five and a half hours ahead of the UK in winter and four and a half in summer, at a time agreed and kept in UK time.

- **Weekday evening** The usual slot for Years 11 to 13.
- **Weekend morning** Long enough to work one problem to the end.
- **Holiday intensives** For building stamina before November.

- **One problem, properly** A lesson often contains a single question, taken from first reading to a written argument.
- **Technique named** Invariants, extremal arguments, pigeonhole and bounding are taught as a repertoire, not as tricks.
- **Five to ten students** Small enough that every write-up is read, large enough for two approaches to collide.
- **Our own problems** Written by us in the olympiad idiom. BMOS publishes its own past papers and solutions.
- **One to one when it fits** For a candidate far beyond their year group or preparing for BMO2.
- **Nothing promised** No threshold, no squad place and no medal is promised by us, and nobody honest promises one.

## Fees

A monthly rate in US dollars, the same in every country outside India. No joining fee and no fixed term.

- Free first class: USD 0. One real problem with a teacher. An honest view of the level. No card details.
- Group batch: USD 100 a month. Five to ten students at one level. The same teacher each week. Written arguments marked by hand. A certificate at the end.
- One to one: USD 150 a month. One student with one teacher. Built around a specific weakness. For candidates working towards BMO2.

## What students and parents ask

### When are BMO1 and BMO2 in 2026-27?

UKMT's calendar puts BMO Round 1 on 18 November 2026, the same day as the Andrew Jobbings Senior Kangaroo, and BMO Round 2 on 20 January 2027.

### How long is a BMO paper?

BMOS describes both rounds as a three-and-a-half-hour paper: six problems in BMO1 and four in BMO2, taken by students in their own schools.

### Who can enter?

BMOS says "BMO1 and BMO2 are open entry competitions for students in full time secondary education", with automatic qualification for those who reach the published threshold and are eligible.

### Is the first question really easier?

BMOS says the first of the six BMO1 problems is "intended to be more accessible than the rest". A first-time candidate should read it carefully rather than skimming past it.

### How are the papers marked?

By hand. BMOS says around 60 markers gather in December to mark all the BMO1 scripts over three days, and that BMO2 marking is carried out by around 20 people. Nothing is machine-marked, so a written argument has to convince a reader.

### How many solutions is a good score?

Two complete solutions on BMO1 is a genuine result for a first attempt. The paper is not designed to be finished, and judging it by school-exam standards is the commonest way to feel bad about a good performance.

### What is an invariant?

A quantity that no allowed move can change. If you write 1 to 9 on a board and repeatedly replace two numbers by their difference, the parity of the total never changes, so the last number left must be odd. That kind of argument is how olympiad problems prove something is impossible.

### Who can represent the UK at the IMO?

BMOS sets a separate rule: a candidate must hold British citizenship, or will have completed at least three full years of full-time secondary education in the UK by the time they leave school. Refugees, stateless persons and asylum seekers may apply for UK qualified status through UKMT and BMOS.

### What happens after BMO2?

Top scorers are invited to a training camp at Trinity College, Cambridge. An IMO squad is chosen from the camp, and further training and selection tests narrow it to a team of six plus reserves.

### What do classes cost?

The first lesson is free. A group place is then USD 100 a month and one-to-one teaching USD 150, with nothing to join and no minimum term.

## More for olympiad mathematicians

- [Cayley, Hamilton and Maclaurin](/intermediate-mathematical-olympiad-cayley-hamilton-maclaurin-preparation): Two hours and six problems, split by school year.
- [Junior Mathematical Olympiad](/junior-mathematical-olympiad-preparation): Where the written solutions start, at Year 8.
- [UK competitions calendar 2026-27](/uk-coding-maths-and-ai-competitions-calendar): The whole season, organiser by organiser.
- [British Informatics Olympiad](/british-informatics-olympiad-preparation): The same discipline, with a compiler as the marker.
- [Coding classes in the UK](/coding-classes-in-united-kingdom): The four school systems, and every UK page.
- [Choosing an online class](/best-online-coding-classes-uk): Seven things to ask before a card comes out.

## Contact

Book the free first class at [https://learn.modernagecoders.com/british-mathematical-olympiad-bmo-preparation](https://learn.modernagecoders.com/british-mathematical-olympiad-bmo-preparation#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email contact@modernagecoders.com.
