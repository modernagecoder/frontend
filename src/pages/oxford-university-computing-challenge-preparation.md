---
title: "Oxford University Computing Challenge | The Round After Bebras"
description: "The OUCC, now run as the Raspberry Pi Foundation Coding Challenge: who is invited, the block and text tracks, 45 minutes, and how to prepare for a marked round."
canonical: https://learn.modernagecoders.com/oxford-university-computing-challenge-preparation
source: src/pages/oxford-university-computing-challenge-preparation.html
---
> The coding round that follows the UK Bebras Challenge is described by UK Bebras as the Raspberry Pi Foundation Coding Challenge; most students, teachers and websites still call it the Oxford University Computing Challenge. Only schools and students who took part in the previous UK Bebras Challenge can enter, and home-educated students are contacted directly by the UK Bebras team. It is "designed to be accessible to all students aged 10+", runs as a 45-minute supervised challenge, and comes in two types, block-based and text-based programming, each with two difficulty levels. Historically the Raspberry Pi Foundation invited the students with the top ten per cent of results in the UK Bebras challenge, with four age groups from 10 to 18, Blockly for the younger two and a choice of eleven languages for the older two. We teach the programming, not the entry: the first class is free, a group place is USD 100 a month and one-to-one teaching USD 150.

[Home](/) / [Courses](/courses) / [UK competitions calendar](/uk-coding-maths-and-ai-competitions-calendar) / Oxford University Computing Challenge

United Kingdom · Ages 10 and over · Invitation only, through Bebras

# Oxford University Computing Challenge preparation

A note before anything else, because it will save you an afternoon. The round most people mean by the Oxford University Computing Challenge is now presented by UK Bebras as the Raspberry Pi Foundation Coding Challenge, and the OUCC's own pages returned errors when we checked them in September 2026. The round still exists, it still follows Bebras, and it is still the step where a young person's thinking has to survive contact with an actual program. The rest of this page is about that step: who gets in, what the two tracks are, and the particular way an auto-marked round punishes code that is nearly right.

At a glance: Now run as: Raspberry Pi Foundation Coding Challenge; Follows: The UK Bebras Challenge; For: Students aged 10 and over; Two tracks: Block-based and text-based; Levels: Two difficulty levels in each; Length: 45 minutes, supervised; Entry: Only through a school that sat Bebras; Marked by: A machine, on output. Rated 4.9 across 547 Google reviews.

## Three courses for the round after Bebras

Choose by which track the student will sit, blocks or text.

- [Coding for kids, blocks to AI](/courses/kids-coding-blocks-masterclass): For the block-based track: loops, conditions and variables, in a visual language.
- [Python and AI for kids](/courses/python-ai-kids-masterclass): For a ten to thirteen year old crossing from blocks to typed code.
- [Python from start to finish](/courses/python-complete-masterclass-teens): For the text-based track at the older age groups, including exact output and edge cases.

## One round, two names, and a single way in

Facts from UK Bebras and the Raspberry Pi Foundation, read on 20 September 2026. Where a source is historical we say so.

**The coding round after Bebras, as the organisers describe it**

| Part | What the organiser says | Source |
|---|---|---|
| Who can enter | Only schools and students who took part in the previous UK Bebras Challenge; home-educated students are contacted directly by the UK Bebras team | UK Bebras, 2026 |
| Ages | "Designed to be accessible to all students aged 10+" | UK Bebras, 2026 |
| Two types | Block-based programming and text-based programming, each with two difficulty levels | UK Bebras, 2026 |
| Length | A 45-minute coding challenge, supervised by school coordinators | UK Bebras, 2026 |
| On the day | Teachers are contacted through the UK Bebras internal emailing system with instructions | UK Bebras, 2026 |
| Historic invitation | "We invited the students with the top 10% best results in the UK Bebras challenge to take part in the OUCC" | Raspberry Pi Foundation, on the OUCC |
| Historic age groups | Students aged 10 to 18 in four age groups; Blockly for the two younger cohorts, one of eleven languages Bebras supports for the older two | Raspberry Pi Foundation, on the OUCC |
| Historic scale | "Over 20,000 Bebras participants took up the invitation to the first round", with the top 20 in each of the four age groups reaching the final | Raspberry Pi Foundation, on the OUCC |

The single most important line for a parent is the first one. There is no direct entry. A student who did not sit the UK Bebras Challenge in November cannot take this round, however good they are, and no tutor, service or payment changes that. The way in is a teacher signing a school up for Bebras.

Everything else follows from that. If a child is interested in this round, the thing to do in September is ask whether the school is entering Bebras, not to buy preparation.

On the name: we could not read oucc.uk or the Bebras OUCC pages on 20 September 2026, and we do not assert that the Oxford University Computing Challenge has been renamed, retired or replaced. What we can say is what UK Bebras currently publishes, which describes the follow-on round as the Raspberry Pi Foundation Coding Challenge. Both names appear on this page so that families searching either one arrive somewhere useful.

The historical rows are labelled as historical for the same reason. A top-ten-per-cent invitation was how the OUCC worked when the Foundation wrote about it; we do not claim it is this year's rule.

Sources: [UK Bebras, Raspberry Pi Foundation Coding Challenge](https://bebras.uk/index.php?action=content&id=132) and the Raspberry Pi Foundation's [account of the Oxford University Computing Challenge](https://www.raspberrypi.org/blog/uk-bebras-oxford-university-computing-challenge-2022/), read 20 September 2026. Modern Age Coders is not connected with the Raspberry Pi Foundation, UK Bebras or the University of Oxford.

## Equal is not the same as identical

A round marked by a machine compares your output with an expected output. That makes one ordinary bug much more expensive than it is at school.

Suppose a task says: print the pupils in order of score, highest first. Here are seven pupils. **Ben 9, Dev 9, Gus 9, Amara 7, Cara 7, Esme 7, Finn 5.** Three of them share a nine and three share a seven. Sort them by score and you have a correct answer. Sort them by score a different way and you have a different correct answer. Only one of the two matches what the marker is holding.

**Our run of 20 September 2026: two sorts of the same seven pupils, both by score**

| Method | Output | Sorted by score? |
|---|---|---|
| Keeps equal items in their original order | Ben Dev Gus Amara Cara Esme Finn | Yes |
| A quicksort we wrote that does not | Gus Dev Ben Esme Cara Amara Finn | Yes |
| What an automatic marker does | Compares the text, character by character | It does not care which is fairer |

### The word for it

A sort that leaves equal items in the order they arrived is called stable. One that does not is not, and most beginners have never been told which kind their language gives them.

### Why it bites here

At school a teacher reads the answer and sees it is sorted. A machine sees two strings that differ, and marks the second one wrong.

### The fix is one line

Decide what happens to ties and say so: sort by score, then by name. Now there is only one correct output and nothing is left to chance.

This is the real difference between school programming and a marked round, and it goes well beyond sorting. Trailing spaces, capital letters, a full stop the task did not ask for, printing "6.0" where the task wanted "6": all of them are correct thinking and a failed test. None of them means a student does not understand the problem.

It is also the one thing that is genuinely worth practising before a 45-minute round, because it is invisible until it costs you.

The habit to build is to read the expected output as carefully as the question. What exactly does the task want printed, in what order, with what spacing, and what should happen when two things are equal? A student who asks those four questions before typing loses almost nothing to formatting.

And when the task does not say what to do with ties, decide anyway, write it down, and be consistent. An arbitrary rule applied everywhere beats no rule applied differently each run.

The two sorts, the seven pupils and both outputs are ours, run on 20 September 2026 to make the point. No challenge task is reproduced anywhere on this page.

## Blocks or text, and the same four questions either way

The two tracks look different and ask for the same discipline.

**What to practise, by track**

| Track | What it uses | What to practise |
|---|---|---|
| Block-based | A visual language in the browser, historically Blockly for the younger age groups | Loops with a counter, conditions inside loops, and reading a block program back before running it |
| Text-based | Typed code; historically one of eleven languages Bebras supports, which covers those taught in UK schools | Input and output exactly as asked, string and number handling, and the boundary cases |
| Both | 45 minutes, supervised, auto-marked | Working out what the expected output looks like before writing any code |

For a student crossing from blocks to text, the honest advice is not to cross in the week of the round. Blocks are not a lesser track: a block program with a correct loop beats a typed program with a subtle bug, and the marker cannot tell how the answer was produced.

The most useful single exercise, in either track, is to take a task description and write out the expected output by hand before writing any code. Most lost marks are decided in that first minute.

What not to do is drill speed. Forty-five minutes is not generous, but the students who run out of time are almost always the ones who started coding before they understood the output, not the ones who type slowly.

If a student enjoys this round, the next step up is the [British Informatics Olympiad](/british-informatics-olympiad-preparation), sat in school in December and January, where the programs get longer and the tests get nastier.

## Four rungs from a first loop to a program that survives a marker

Where a student starts depends on what they can already write without help.

**From blocks to text to tested code**

| Stage | Rung | The sign it is secure |
|---|---|---|
| Ages 8 to 10 | 1. Reliable blocks | Builds a loop with a counter and predicts what it prints |
| Ages 10 to 12 | 2. First typed code | Writes and fixes a twenty-line program without a template |
| Ages 12 to 15 | 3. Exact output | Produces output that matches a specification character for character |
| Ages 15 to 18 | 4. Own tests | Invents the inputs that would break the program, before anyone else does |

### If the round is next week

Practise reading task descriptions and writing the expected output by hand. Nothing else moves the needle in a week.
Stay in the track the student is fluent in. Switching from blocks to text under time pressure loses more than it gains.

### If they are hooked

Informatics olympiads are the next rung, and they reward exactly the habit this round teaches.
The [competitions calendar](/uk-coding-maths-and-ai-competitions-calendar) shows every contest open to a UK student, month by month.

## Programming courses by track and age

Grouped by where a student is now, with every syllabus a click away.

### Block-based

Ages 8 to 12

- [Scratch for kids](/courses/scratch-programming-complete-course): Loops, conditions and variables in a visual language.
- [Coding for kids, blocks to AI](/courses/kids-coding-blocks-masterclass): From first blocks through games and apps.
- [App making with blocks](/courses/block-coding-app-development-masterclass): Real apps, still without typing a semicolon.

### Crossing to text

Ages 10 to 13

- [Python and AI for kids](/courses/python-ai-kids-masterclass): The first typed language, taught patiently.
- [Maths through coding](/courses/maths-through-coding): Programs that check whether a method is right.
- [Minecraft coding for kids](/courses/minecraft-coding-for-kids-course): From blocks to real code in a familiar world.

### Text-based track

Ages 13 to 18

- [Python from start to finish](/courses/python-complete-masterclass-teens): Every core idea, with prediction before running.
- [Algorithms and data structures](/courses/problem-solving-dsa-masterclass-teens): Sorting, searching and why ties have an order.
- [Competitive programming](/courses/competitive-programming-for-teens-course): Correctness under a clock, against hidden tests.

### Alongside school

Qualifications and beyond

- [GCSE Computer Science](/courses/gcse-computer-science-course): Taught to the board the school uses.
- [Java for teens](/courses/java-programming-masterclass-for-teens): For schools and students working in Java.
- [AI and machine learning for teens](/courses/ai-ml-masterclass-teens): Where the same discipline goes next.

## Weekly programming, taught with the marker in mind

Lessons are live on video from India, where the clock runs five and a half hours ahead of Britain in winter and four and a half in summer. Times are agreed in UK time and kept.

- **Early weekday evening** For students of primary and lower secondary age.
- **Later weekday evening** The usual slot for GCSE-age students and above.
- **Weekend morning** For a long session on one problem, start to finish.

- **Output read first** Every task begins by writing down what the program should print, before any code is typed.
- **Both tracks taught** Block-based and typed code, and we do not push a student out of the one they are fluent in.
- **Groups of five to ten** Small enough that every program gets looked at, large enough for two approaches to collide.
- **Our own problems** Written by us. No Bebras or challenge task is reproduced in a lesson.
- **One to one on request** For a student far ahead of their year, or one with a particular gap.
- **Nothing promised** We cannot get a student invited to this round, and we do not claim otherwise.

## Fees

A monthly rate in US dollars, the same for every country outside India. Nothing to join and no term to sign.

- Free first class: USD 0. A full lesson on a real task. An honest read on the right track. No card details taken.
- Group batch: USD 100 a month. Five to ten students at one level. The same teacher weekly. Code read line by line. A certificate at the end.
- One to one: USD 150 a month. One student with one teacher. Aimed at a specific weakness. For students far ahead of their year.

## What students and parents ask

### Is the Oxford University Computing Challenge still running?

We do not say, because we could not read the OUCC's own pages on 20 September 2026. What UK Bebras currently publishes is a follow-on round called the Raspberry Pi Foundation Coding Challenge, open to schools and students who took the previous UK Bebras Challenge.

### How does my child get invited?

By sitting the UK Bebras Challenge at school in November. UK Bebras says only schools and students who took part in the previous challenge can enter the coding round, and home-educated students are contacted directly by the UK Bebras team.

### What age is it for?

UK Bebras describes it as designed to be accessible to all students aged 10 and over. Historically the Raspberry Pi Foundation ran the OUCC for students aged 10 to 18 in four age groups.

### What programming language is used?

There are two tracks, block-based and text-based, each with two difficulty levels. Historically the two younger OUCC cohorts used Blockly and the older two could use one of the eleven programming languages Bebras supports, which covers those taught in UK schools.

### How long is the challenge?

UK Bebras describes a 45-minute coding challenge, supervised by a school coordinator, with instructions sent to teachers during the challenge through the Bebras emailing system.

### Why did my child's correct program fail?

Usually formatting rather than logic. An automatic marker compares output as text, so a trailing space, a capital letter, an extra full stop or a different order for tied entries all count as wrong even when the thinking is right.

### What is a stable sort and why does it matter?

A sort is stable if items with equal keys stay in the order they arrived. Two sorts of the same scores can both be correct and produce different lines, and a marker comparing text will accept only one. Sorting by score and then by name removes the ambiguity.

### How should a student prepare?

By writing the expected output by hand before coding, practising exact input and output, and staying in whichever track they are fluent in. Speed drilling helps far less than reading the task properly.

### Do you reproduce challenge tasks?

No. Our problems are written by us in the same territory, and the organisers publish their own past material.

### What do classes cost?

The first lesson is free. After that a group place is USD 100 a month and one-to-one teaching USD 150, with no joining fee and no minimum term.

## More for young programmers

- [UK Bebras Challenge](/bebras-computational-thinking-challenge-practice-uk): The November challenge that is the only way in.
- [British Informatics Olympiad](/british-informatics-olympiad-preparation): The next rung, sat in school in December and January.
- [UK competitions calendar 2026-27](/uk-coding-maths-and-ai-competitions-calendar): Every contest we could confirm, month by month.
- [GCSE Computer Science tutoring](/uk-gcse-computer-science-tutoring): The qualification most of these students are heading for.
- [Coding classes in the UK](/coding-classes-in-united-kingdom): Four school systems, and every UK page.
- [Choosing an online class](/best-online-coding-classes-uk): What to ask any provider before you pay.

## Contact

Book the free first class at [https://learn.modernagecoders.com/oxford-university-computing-challenge-preparation](https://learn.modernagecoders.com/oxford-university-computing-challenge-preparation#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email contact@modernagecoders.com.
