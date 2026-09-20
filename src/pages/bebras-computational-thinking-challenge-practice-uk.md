---
title: "UK Bebras Challenge Practice | Computational Thinking, 6 to 19"
description: "Preparing for the UK Bebras Challenge: 45 minutes, free, ages 6 to 19, 9 to 20 November 2026, and what computational thinking tasks actually ask for."
canonical: https://learn.modernagecoders.com/bebras-computational-thinking-challenge-practice-uk
source: src/pages/bebras-computational-thinking-challenge-practice-uk.html
---
> The UK Bebras Challenge is run by the Raspberry Pi Foundation, is "entirely free to enter", and is "open to all young people aged 6 to 19". Each student gets 45 minutes of interactive, age-appropriate tasks online, and the 2026 challenge runs from 9 to 20 November 2026. A teacher signs up as the school coordinator and can enrol groups or the whole school; more than 526,000 UK students took part last year, and there is a tailored version for secondary students with severe sight impairments. No programming is involved: the tasks test abstraction, decomposition and algorithmic thinking, and afterwards the computer science concept behind each one can be read on Ada Computer Science. We teach the thinking underneath, live online for ages 6 to 67. The first class is free; a group place is USD 100 a month and one-to-one teaching USD 150.

[Home](/) / [Courses](/courses) / [UK competitions calendar](/uk-coding-maths-and-ai-competitions-calendar) / UK Bebras Challenge

United Kingdom · Ages 6 to 19 · 9 to 20 November 2026

# UK Bebras Challenge practice

Bebras is the largest computing competition in British schools and the least like one. It takes forty-five minutes, it costs nothing, it is open from age six to nineteen, and it contains no programming whatsoever. More than 526,000 UK students sat it last year, most of them in an ordinary lesson, many without knowing it was a competition at all. That combination confuses parents who expect a coding contest, and it hides what the challenge is really testing: whether a young person can look at a situation and find the rule inside it. That is a teachable skill, and it is worth more than any language.

At a glance: Organiser: The Raspberry Pi Foundation; For: Ages 6 to 19; 2026 window: 9 to 20 November; Length: 45 minutes, online; Cost: Free to enter; Programming needed: None at all; Took part last year: More than 526,000; Signed up by: A school coordinator. Rated 4.9 across 547 Google reviews.

## Three courses that build the thinking Bebras tests

None of these is a Bebras course. All three grow the habit the tasks reward.

- [Coding for kids, blocks to AI](/courses/kids-coding-blocks-masterclass): For ages 6 to 10: rules, sequences and what happens when one step changes.
- [Python and AI for kids](/courses/python-ai-kids-masterclass): For ages 10 to 13: the first typed language, where a rule has to be exact or nothing runs.
- [Algorithms and data structures](/courses/problem-solving-dsa-masterclass-teens): For teenagers: the formal versions of the ideas Bebras tasks dress up as puzzles.

## Half a million students, forty-five minutes, no code

Facts read at bebras.uk and the Raspberry Pi Foundation's own announcement on 20 September 2026.

**The UK Bebras Challenge as its organiser describes it**

| Part | What the organiser says | What that means in practice |
|---|---|---|
| Who runs it | "The Raspberry Pi Foundation runs the UK Bebras Challenge" | Part of an international challenge that began in Lithuania and now runs worldwide |
| Who can enter | "open to all young people aged 6 to 19" | From Year 2 to sixth form, in age-appropriate groups; the Juniors group is ages 10 to 12 |
| When | "The 2026 UK Bebras Challenge will run from 9th-20th November 2026" | A fortnight, inside which a school picks its own lesson |
| Format | "Each student gets 45 minutes to tackle interactive, age-appropriate tasks online" | Done on a computer, in class, marked automatically |
| Cost | "The UK Bebras Challenge is entirely free to enter" | No fee to a school or a family |
| How to take part | "a teacher must sign up as the main school coordinator and can then enrol groups of students or even the entire school" | Whole classes usually sit it together |
| Scale | "Last year, more than 526,000 students from across the UK took part" | Larger than any other computing competition in British schools |
| Access | A tailored version exists for secondary students with severe sight impairments | The tasks are designed to be sat by more pupils, not fewer |

The most useful thing a parent can know is that no preparation is required and none is expected. Schools enter whole classes. A child who has never written a line of code can do well, and a child who has spent two years in Python has no particular advantage, because nothing in the challenge asks them to write any.

That also explains the scale. Half a million students is not half a million volunteers; it is thousands of teachers deciding that forty-five minutes of this is a good computing lesson, which it is.

It shares its fortnight with the Primary Maths Challenge, which also runs from 9 to 20 November 2026. A Year 6 child could reasonably sit both in the same two weeks, and the two ask for almost opposite things: one is arithmetic under time pressure, the other is reading a situation carefully with no arithmetic at all.

After the challenge, the Raspberry Pi Foundation links each task to an explanation of the computer science idea behind it on Ada Computer Science. That archive, not a tutor, is the best preparation there is.

Sources: [UK Bebras](https://www.bebras.uk/) and the Raspberry Pi Foundation's [Join the UK Bebras Challenge 2026](https://www.raspberrypi.org/blog/join-the-uk-bebras-challenge-2026/), 8 September 2026, both read 20 September 2026. Modern Age Coders is not connected with the Raspberry Pi Foundation or the Bebras challenge.

## You can count the answer without doing the work

A task written by us in the Bebras spirit, and the idea underneath it. No Bebras question is reproduced anywhere on this page.

**Five parcels come down a belt in the order 4, 1, 5, 3, 2. A robot arm can only swap two parcels standing next to each other. What is the smallest number of swaps that puts them in order 1, 2, 3, 4, 5?** Most children start swapping. There is a faster way, and finding it is the whole point.

### Look for the rule

Every swap of neighbours can fix at most one pair that is in the wrong order. So the answer cannot be smaller than the number of wrong-order pairs, and it turns out it is never larger either.

### Count the wrong pairs

Go through every pair and ask whether the bigger number comes first. For 4 1 5 3 2 the wrong pairs are 4-1, 4-3, 4-2, 5-3, 5-2 and 3-2. That is six.

### Check it honestly

We searched every possible sequence of swaps by computer. The shortest is six, exactly as the count predicted. Counting was quicker than shuffling, and it also proved no shorter route exists.

That is a Bebras task in miniature, and it shows the three habits the organiser names. Abstraction: throw away the parcels, keep the order. Decomposition: turn one big question into a count of pairs. Algorithmic thinking: a rule that works on any list, not just this one.

It also has the quality good tasks share, that the fast route is not the clever route but the patient one. Nobody spots "six" by looking. They spot it by asking what a single swap can possibly achieve.

A child who meets this idea once will use it for years. It is the reason a sorted list can be searched quickly, the reason a program can say how much work a job will take before starting it, and the reason experienced programmers ask what a step can change before writing any steps.

None of that needs a keyboard. Which is why, in our youngest classes, the answer to "when should my child start coding" is often that the thinking starts well before the typing does.

The parcel task and both methods are ours, written for this page and checked in code on 20 September 2026: counting out-of-order pairs gives six, and a search over every sequence of neighbour swaps also gives six.

## Nothing, and then the right sort of something

Bebras is not a competition to cram for. It is one to grow into, which takes a different kind of preparation.

**What helps, and what does not**

| Helps | Why | Does not help |
|---|---|---|
| Working through past Bebras tasks with the explanation | The organiser publishes the idea behind each task; that is the syllabus | Timed drilling of tasks with no discussion |
| Saying the rule out loud before answering | The tasks reward finding a rule, not spotting a pattern | Guessing quickly to finish inside the time |
| Puzzles with no computer at all | Most Bebras ideas are about order, rules and information | Learning another programming language for it |
| Explaining an answer to someone else | A rule that cannot be explained has not been found | Being told the answer without the reason |
| Being allowed to find it slowly | Forty-five minutes is generous for the number of tasks | Any kind of pressure about the result |

If a child enjoys the challenge, the good next step is not more Bebras. It is a language: the ideas in these tasks become visible the moment a child writes a loop that does something slightly wrong. Block-based coding is the usual door at eight or nine, Python at ten or eleven.

If a child found it frustrating, the useful response is to do one task together, slowly, out of season, with no clock. Most frustration in Bebras comes from reading quickly rather than from the computing.

For teachers, the challenge doubles as a diagnostic. The pupils who do surprisingly well are often not the ones already writing code, and every computing teacher we have spoken to has a story about a child discovered this way.

We do not reproduce Bebras tasks in lessons. Our own puzzles live in the same territory, and the Raspberry Pi Foundation's archive with its explanations is the place for the real ones.

## The coding challenge that follows, and who gets invited

Bebras has a sequel with actual programming in it, and only Bebras entrants can take it.

**The Raspberry Pi Foundation Coding Challenge, from the organiser's pages**

| Part | What the organiser says |
|---|---|
| Who can enter | Only schools and students who took part in the previous UK Bebras Challenge; home-educated students are contacted directly by the UK Bebras team |
| Ages | "Designed to be accessible to all students aged 10+" |
| Two kinds | Block-based programming and text-based programming, each with two difficulty levels |
| Length | A 45-minute coding challenge, supervised by a school coordinator |
| Instructions | Teachers are contacted through the UK Bebras emailing system during the challenge |

This is the round that used to be called the Oxford University Computing Challenge, and a great many websites still call it that. The Bebras site now presents the follow-on as the Raspberry Pi Foundation Coding Challenge, so that is what we call it, while saying the old name plainly so that families searching for it find the right thing.

The practical consequence for a parent is simple: sitting Bebras in November is the only way in. There is no separate entry and no way to enter a child directly.

Block-based and text-based tracks mean a ten-year-old in Scratch and a fifteen-year-old in Python can both take a version that fits. The programming is modest; the thinking is not, because the tasks come from the same tradition as Bebras.

A student who enjoys that round is ready for something harder: the [British Informatics Olympiad](/british-informatics-olympiad-preparation) in December and January is the next real step for a secondary pupil.

Source: [UK Bebras, Raspberry Pi Foundation Coding Challenge](https://bebras.uk/index.php?action=content&id=132), read 20 September 2026. The Oxford University Computing Challenge's own pages returned errors on the same day and nothing is claimed about them.

## Four rungs from puzzles to programs

Bebras sits at the bottom of a ladder that ends at international olympiads. Almost nobody climbs all of it, and that is fine.

**From reading a rule to writing one**

| Stage | Rung | The sign it is secure |
|---|---|---|
| Ages 6 to 9 | 1. Rules and order | Can say what a sequence of steps will do before it runs |
| Ages 9 to 12 | 2. Finding the rule | Looks for what is always true instead of trying cases |
| Ages 12 to 15 | 3. Writing the rule | Turns a found rule into code that works on any input |
| Ages 15 to 18 | 4. Proving the rule | Can say why a method is correct and how much work it does |

### If November is next week

Do nothing special. The challenge is designed to be sat cold, and a child who is told it matters will do worse than one who is told it is interesting.
If you want to do something, do one past task together and talk about it. That is preparation; timed practice is not.

### If a child loved it

Start a language. The ideas in the tasks become concrete the moment a child writes a loop that is nearly right.
The [competitions calendar](/uk-coding-maths-and-ai-competitions-calendar) shows what else is open at every age, from primary puzzles to the AI olympiad.

## Computing and maths courses by age

Grouped by what a learner is ready for, with each syllabus one click away.

### First steps

Ages 6 to 10

- [Scratch for kids](/courses/scratch-programming-complete-course): A first language, built on rules and order.
- [Coding for kids, blocks to AI](/courses/kids-coding-blocks-masterclass): Games, apps and a first look at AI.
- [Mental maths for kids](/courses/mental-maths-mastery-kids): Number sense, which the tasks quietly lean on.

### Typing code

Ages 10 to 13

- [Python and AI for kids](/courses/python-ai-kids-masterclass): The first typed language, where a rule must be exact.
- [Maths through coding](/courses/maths-through-coding): Python as a way of checking whether a method works.
- [Minecraft coding for kids](/courses/minecraft-coding-for-kids-course): From blocks to real code, in a world they know.

### Real computing

Ages 13 to 18

- [Python from start to finish](/courses/python-complete-masterclass-teens): Every core idea, with prediction before running.
- [Algorithms and data structures](/courses/problem-solving-dsa-masterclass-teens): The formal versions of Bebras ideas.
- [GCSE Computer Science](/courses/gcse-computer-science-course): Taught to the board the school actually uses.

### Beyond school

For students who want more

- [Competitive programming](/courses/competitive-programming-for-teens-course): Speed and correctness under time limits.
- [AI and machine learning for teens](/courses/ai-ml-masterclass-teens): Where computational thinking goes next.
- [Olympiad and competition maths](/courses/olympiad-competition-mathematics-mastery): The mathematical half of the same instinct.

## Weekly, live, and aimed at the thinking rather than the syntax

Teachers work from India, five and a half hours ahead of the UK in winter and four and a half in summer. Younger children take an early evening slot; teenagers usually take a later one.

- **Early weekday evening** For primary-age children, while they are still fresh.
- **Later weekday evening** The usual choice from about Year 8.
- **Weekend morning** For longer sessions on a single problem.

- **Puzzles before syntax** Every new idea arrives as a problem to solve before it arrives as a thing to type.
- **Our own tasks** Written by us in the same spirit. No Bebras task is copied into a lesson.
- **Five to ten learners** Enough voices to hear a better rule than your own, few enough that nobody sits silent.
- **Explaining is part of it** A learner who cannot explain a rule has not found it, and we say so kindly.
- **One to one on request** For a child far ahead of their year, or one who will not speak in a group.
- **Nothing promised** No score, no invitation to the coding challenge and no prize is promised by us.

## Fees

One monthly rate in US dollars, the same everywhere outside India. Nothing to join, nothing to cancel.

- Free first class: USD 0. A full lesson on a real problem. A clear view of the right level. No card details.
- Group batch: USD 100 a month. Five to ten learners at one level. The same teacher each week. Work read and discussed. A certificate at the end.
- One to one: USD 150 a month. One learner with one teacher. Aimed at a particular gap. For learners well ahead or behind their year.

## What parents and teachers ask

### When is the UK Bebras Challenge 2026?

The Raspberry Pi Foundation publishes a fortnight: the 2026 challenge runs from 9 to 20 November 2026, and each school picks its own lesson inside it.

### What age is Bebras for?

The organiser says it is open to all young people aged 6 to 19, in age-appropriate groups. The Juniors group, for example, is ages 10 to 12.

### Does my child need to know how to code?

No. The challenge contains no programming. It tests abstraction, decomposition and algorithmic thinking through interactive tasks, and a child who has never written code can do very well.

### How long does it take and what does it cost?

Each student gets 45 minutes online, and the organiser says the challenge is entirely free to enter.

### How many students take part?

More than 526,000 students across the UK took part last year, which makes it the largest computing competition in British schools.

### How do we enter?

Through a school. A teacher signs up as the main school coordinator and can then enrol groups of students or the whole school. Families cannot enter a child directly, and neither can we.

### Is there anything after Bebras?

Yes. The Raspberry Pi Foundation Coding Challenge, open only to schools and students who took the previous Bebras Challenge, is a 45-minute challenge for ages 10 and over with block-based and text-based versions at two difficulty levels. Many sites still call it the Oxford University Computing Challenge.

### How should we prepare?

Lightly, if at all. Work through past tasks with the explanation the Raspberry Pi Foundation publishes, talk about the rule rather than the answer, and avoid timed drilling. The challenge is designed to be sat without preparation.

### Do you use real Bebras tasks?

No. We write our own puzzles in the same territory. The organiser's archive, with an explanation of the computing idea behind each task, is the right place for the real ones.

### What do classes cost?

The first lesson is free. A group place is then USD 100 a month and one-to-one teaching USD 150, with no joining fee and no minimum term.

## More for young computer scientists

- [UK competitions calendar 2026-27](/uk-coding-maths-and-ai-competitions-calendar): Every contest we could confirm, month by month.
- [Primary Maths Challenge](/primary-maths-challenge-practice): The same fortnight in November, asking the opposite thing.
- [British Informatics Olympiad](/british-informatics-olympiad-preparation): Where a secondary pupil goes after the coding challenge.
- [Scottish Mathematical Challenge](/scottish-mathematical-challenge-practice): Marks for the explanation, not the answer.
- [Coding classes in the UK](/coding-classes-in-united-kingdom): Four school systems, and every UK page.
- [Choosing an online class](/best-online-coding-classes-uk): Questions worth asking any provider.

## Contact

Book the free first class at [https://learn.modernagecoders.com/bebras-computational-thinking-challenge-practice-uk](https://learn.modernagecoders.com/bebras-computational-thinking-challenge-practice-uk#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email contact@modernagecoders.com.
