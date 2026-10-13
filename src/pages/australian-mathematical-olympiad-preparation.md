---
title: "Australian Mathematical Olympiad Preparation: AMO Explained"
description: "The Australian Mathematical Olympiad since 2026: AMO Summer, Winter and Finals, the invitation route through the AMC and AIMO, and how olympiad proofs work."
canonical: https://learn.modernagecoders.com/australian-mathematical-olympiad-preparation
source: src/pages/australian-mathematical-olympiad-preparation.html
---
> From 1 January 2026 the Australian Mathematical Olympiad became three exams: AMO Summer and AMO Winter, each 6 questions in 3 hours sat at school by about 250 invited students, and AMO Finals, two days of 4 questions in 4 hours for about 60 students. Invitations go to students in Year 11 or below, made by AMOC State Directors. Every problem requires a proof.

[Home](/) / [Coding classes in Australia](/coding-classes-in-australia) / Australian Mathematical Olympiad

Australia · Year 11 or below · Checked at the Australian Maths Trust

# Australian Mathematical Olympiad preparation

The Australian Mathematical Olympiad is an invitation-only exam for some of the country's strongest young mathematicians, and from 1 January 2026 it changed shape: one exam became three. Its problems are not harder versions of school maths. They ask for complete, convincing proofs of statements nobody has shown the student how to prove. This page explains the new structure and the route to an invitation exactly as the Australian Maths Trust publishes them, then works one classic olympiad problem from first experiments to a written proof. We are independent of the Australian Maths Trust and its committees, and no class can secure an invitation.

At a glance: Exam: Australian Mathematical Olympiad (AMO); Since 1 January 2026: AMO Summer, AMO Winter, AMO Finals; AMO Summer and Winter: 6 questions in 3 hours, sat at school; AMO Finals: 2 papers, 4 questions in 4 hours each day; Who sits it: Invited students in Year 11 or below; Invitations by: AMOC State Directors; We provide: Olympiad problem solving and proof writing; We are not: The AMT, the AMOC or a selector. Rated 4.9 across 547 Google reviews.

## Three courses on the road to olympiad maths

Olympiad readiness rests on strong problem solving and the habit of proving things.

- [Competition maths](/courses/olympiad-competition-mathematics-mastery): From AMC-style problems to olympiad proofs, with number theory, combinatorics, geometry and inequalities.
- [Middle years maths](/courses/comprehensive-middle-school-mathematics-mastery): Secure algebra and geometry for younger students, the base AIMO problems build on.
- [Problem solving for teens](/courses/problem-solving-dsa-masterclass-teens): Structured reasoning and careful case analysis, useful in both olympiad maths and informatics.

## Three exams instead of one, from 2026

Before 2026 the AMO was a two-day contest of four questions each day, sat under school supervision by about 200 invited students. The Australian Maths Trust now runs it as three separate competitions.

**The Australian Mathematical Olympiad in 2026, as published by the Australian Maths Trust**

|  | AMO Summer | AMO Winter | AMO Finals |
|---|---|---|---|
| Date in 2026 | Wednesday 25 February | Wednesday 29 July | Tuesday 1 and Wednesday 2 September |
| Where | At school | At school | AMT-organised exam hubs |
| Students | About 250, invited | About 250, invited | About 60, invited |
| Format | 6 questions in 3 hours | 6 questions in 3 hours | 2 papers over two days, 4 questions in 4 hours each day |
| Purpose | Selects for the Autumn School of Excellence and State Director mentoring | Selects for AMO Finals | Selects for the Spring School of Excellence |

Invitations to AMO Summer and AMO Winter are made by Australian Mathematical Olympiad Committee (AMOC) State Directors, and go to around 200 to 250 students in Year 11 or below across Australia. Students who attended the AMOC School of Excellence or the Autumn School of Excellence are invited, along with some participants in the Australian Training Tournament.

The AMT describes AMO Summer as six challenging problems requiring sound mathematical proofs, and adds that even solving one of them is a significant achievement.

For AMO Summer 2026, the AMT published award cut-offs of 35, 27 and 16 points for gold, silver and bronze, given approximately to the top 20, top 50 and top 100. Honourable mentions go to students with full marks on at least one problem who miss out on those awards.

Those numbers are published to describe results, not targets. The AMO is about the quality of reasoning on problems most strong students cannot finish.

Source: [Australian Maths Trust, Australian Mathematical Olympiad](https://amt.edu.au/amo), read 7 October 2026. 2027 dates had not been published there.

## The open competitions that lead towards the AMO

Nobody enters the AMO directly. The AMT says students considered for invitational maths training need outstanding results in the Australian Mathematics Competition or one of the modules under Maths for Young Australians.

**Open AMT competitions on the way to olympiad level, 2026 details from the AMT**

| Competition | Who | Format | 2026 date |
|---|---|---|---|
| Australian Mathematics Competition (AMC) | Years 3 to 12 | 60 minutes primary, 75 minutes secondary | 4 to 6 August |
| Australian Junior Mathematics Olympiad (AJMO) | Up to Year 8 | 10 problems, 90 minutes, online, integer answers 0 to 999 | Thursday 10 September |
| Australian Intermediate Mathematics Olympiad (AIMO) | Years 7 to 10, pitched at Year 10 | 4 hours; 10 questions, 8 integer answers and 2 written solutions; 35 marks | Thursday 10 September |

The AJMO is new: the AMT describes it as an accessible introduction to olympiad-style problems for students up to Year 8 who are not yet ready for the AIMO. Because both run on the same day, schools choose one per student, and students in Year 8 or below who are ready for the AIMO should still sit it.

The AIMO, according to the AMT, can be used to identify students for its olympiad pathway. Its written questions may include proofs, so it is the first open paper where proof writing is tested directly.

Beyond the AMO, the AMT lists training schools, the AMOC Senior Contest and the Asian Pacific Mathematics Olympiad. Each year four Australian girls are selected for the European Girls' Mathematical Olympiad and six students for the International Mathematical Olympiad.

The AMT and Australian Science Innovations do not let a student take part in more than one olympiad program in the same year, so students invited to several must choose one subject.

Sources: [AMT Olympiad and Pathways](https://amt.edu.au/olympiad-programs); [AIMO](https://amt.edu.au/aimo); [AJMO](https://amt.edu.au/ajmo); [AMC](https://amt.edu.au/amc). Read 7 October 2026. Entry prices printed there are not shown.

## The postage-stamp problem, from experiment to proof

A classic olympiad style question, with values chosen by us: a game awards either 5 points or 8 points per move. Which totals can never be reached, and what is the largest one?

### 1. Experiment

List reachable totals: 5, 8, 10, 13, 15, 16, 18, 20, 21, 23, 24, 25, 26, 28 and onwards. The gaps are 1, 2, 3, 4, 6, 7, 9, 11, 12, 14, 17, 19, 22 and 27. After 27, nothing seems to be missing.

### 2. Conjecture

The largest unreachable total is 27, and there are 14 unreachable totals. For coprime scores a and b, a known result says the largest is ab minus a minus b, which is 40 minus 13, so 27.

### 3. Prove it

A list is evidence, not proof: we must show every total from 28 upwards is reachable, and that 27 is not. The neat way is to sort totals by their remainder when divided by 5.

**Multiples of 8 sorted by their remainder on division by 5**

| Number of 8-point moves | Points from those moves | Remainder when divided by 5 | Smallest reachable total with that remainder |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 2 | 16 | 1 | 16 |
| 4 | 32 | 2 | 32 |
| 1 | 8 | 3 | 8 |
| 3 | 24 | 4 | 24 |

The proof follows from the table. Adding 5-point moves never changes a total's remainder on division by 5, so for each remainder the smallest reachable total is the multiple of 8 shown, and every larger number with the same remainder is reachable by adding fives. The largest of those smallest values is 32, with remainder 2. So 32 minus 5, which is 27, has remainder 2 but is below the first reachable total with that remainder: 27 cannot be reached. Every number from 28 onwards lies at or above the first reachable total for its remainder (28 is 8 plus four fives, 29 is 24 plus 5, 30 is six fives, 31 is 16 plus three fives, 32 is four eights), so every one can be reached. That completes the proof that 27 is the largest unreachable total.

### What an olympiad marker looks for

A complete answer states the claim, explains why the remainder idea works, shows that 27 fails and that every larger number succeeds, and ends with a clear conclusion. Missing the "every larger number" half is the most common reason for losing marks.

Writing the proof in short numbered steps, each justified, helps a marker follow it and helps the writer spot gaps.

### Going further

The same argument, with a in place of 5 and b in place of 8, proves the general formula ab minus a minus b for any two coprime scores. Counting the unreachable totals, which gives (a minus 1) times (b minus 1) divided by 2, is a good next challenge: here it is 4 times 7 divided by 2, which is 14, matching the list.

Why must the scores be coprime? Try 6 and 9: every reachable total is a multiple of 3, so infinitely many totals are unreachable and there is no largest.

## Olympiad preparation that respects how selection works

Invitations are decided by the AMOC from competition results and its own programs. Our role is to build the problem solving and proof writing those results reflect.

Classes work through problems by area: number theory, combinatorics, geometry, algebra and inequalities. Each problem is explored, conjectured and then proved, with students writing full solutions that a teacher marks as an olympiad marker would.

Younger students build towards the AJMO and AIMO first, where integer-answer questions sit alongside the first written proofs. Older students practise full proof papers under time.

We never reproduce AMT papers or solutions; past papers belong to the AMT, which sells them on its own site. All our problems are original or classical results proved from scratch in class.

We do not promise an invitation, a medal or selection to any team. Only the AMOC makes those decisions, and they rest on the student's own results.

**A term of olympiad training for a strong Year 8 to 10 student**

| Weeks | Focus | Sign of progress |
|---|---|---|
| 1 and 2 | Experiment, conjecture, prove | Separates evidence from proof in their own words |
| 3 and 4 | Number theory: remainders and divisibility | Writes a complete remainder argument |
| 5 and 6 | Combinatorics: counting and cases | Covers every case without overlap |
| 7 and 8 | Geometry: angles and similar triangles | Justifies every step of a diagram argument |
| 9 and 10 | Timed mixed papers with written solutions | Produces at least one fully correct proof per paper |

## Four rungs from AMC problems to olympiad proofs

Year level is less important than the kind of reasoning a student can sustain.

**From strong problem solving to complete proofs**

| Around | Rung | The sign it is secure |
|---|---|---|
| Years 5 to 7 | 1. Enjoys hard problems | Persists with an unfamiliar problem for thirty minutes |
| Years 7 to 8 | 2. Explains answers | Says why an answer must be right, not only what it is |
| Years 8 to 10 | 3. Writes proofs | Produces a complete written argument for a simple claim |
| Years 10 to 11 | 4. Olympiad proofs | Proves unfamiliar results under time pressure |

### If progress stalls

Go back to small cases. Most olympiad breakthroughs begin by working out a pattern by hand.
Read model proofs slowly and rewrite them in your own words; it builds the language of proof.

### Related reading

Our [Australian Maths Trust page](/australian-maths-trust-amc-aio-cat-preparation) covers the AMC, CAT and AIO.
For broader competition preparation, see [maths olympiad tutoring](/math-olympiad-amc-tutoring).

## Nine courses for mathematically ambitious students

From secure foundations to olympiad proofs. Each card opens its syllabus.

### Foundations

Before olympiad problems

- [Middle years maths](/courses/comprehensive-middle-school-mathematics-mastery): Algebra and geometry done properly.
- [Mental maths for kids](/courses/mental-maths-mastery-kids): Number sense for younger students.
- [Algebra foundations](/courses/algebra-foundations-masterclass): Fluent, accurate symbol work.

### Competition

AMC, AJMO and AIMO

- [Competition maths](/courses/olympiad-competition-mathematics-mastery): From contest problems to proofs.
- [Statistics and probability](/courses/statistics-probability-maths-course): Counting and chance in depth.
- [Computational thinking](/courses/problem-solving-and-computational-thinking-for-kids): Patterns and logic for younger students.

### Beyond

Proof and computation

- [Problem solving for teens](/courses/problem-solving-dsa-masterclass-teens): Rigorous case analysis.
- [Competitive programming](/courses/competitive-programming-for-teens-course): For students also drawn to informatics.
- [Maths through coding](/courses/maths-through-coding): Testing conjectures with code.

## Live olympiad classes from India

Our olympiad teachers are based in India. The time difference works in favour of families: when it is 6pm in Sydney it is 1:30pm India time in winter and 12:30pm in summer, and 6pm in Perth is 3:30pm India time all year. Evening problem sessions in Australia therefore sit inside the Indian working day.

- **Weekday evening** One area of olympiad maths per week.
- **Weekend** A timed proof paper and marking.
- **Before AIMO or AMO** Mixed papers and proof clean-up.

- **Proof first** Every answer is written as a complete argument.
- **Original problems** Never copied from AMT papers.
- **Marked like a marker** Feedback on gaps, not only on the final answer.
- **Matched squads** A squad of five to ten olympiad students working on the same problems.
- **One-to-one option** For a student already on the olympiad pathway.
- **No selection promised** Invitations and teams are the AMOC's decision.

## Fees

Olympiad classes cost a flat monthly amount in US dollars, the rate we use outside India; nothing is payable to join and you can stop at the end of any month. AMT competition entries are a matter between schools and the AMT, not us.

- Free first class: USD 0. A first olympiad class, free. An honest read on proof-writing level. No card details.
- Group batch: USD 100 a month. Fifteen to twenty students at one level. One teacher across the term. Solutions marked and discussed. A certificate at the end.
- One to one: USD 150 a month. A teacher for one student. Work shaped around that student's weakest area. Weekly times arranged with you.

## What students and parents ask

### What is the Australian Mathematical Olympiad?

An invitation-only proof-based mathematics exam run by the Australian Maths Trust for students in Year 11 or below. Since 2026 it has three parts: AMO Summer, AMO Winter and AMO Finals.

### How do students get invited?

Invitations are made by AMOC State Directors. The AMT says students considered for invitational maths training need outstanding results in the AMC or a Maths for Young Australians module.

### When were the 2026 AMO exams?

AMO Summer on Wednesday 25 February, AMO Winter on Wednesday 29 July, and AMO Finals on Tuesday 1 and Wednesday 2 September 2026.

### What is the format of AMO Summer and Winter?

Six questions in three hours, sat at school, by about 250 invited students each. AMO Finals is two papers of four questions in four hours, for about 60 students.

### What is the postage-stamp problem?

Finding which totals can be made from two fixed amounts, such as 5 and 8. For coprime amounts a and b, the largest total that cannot be made is ab minus a minus b.

### What should a younger student enter first?

The AMC, then the AJMO (up to Year 8) or the AIMO (Years 7 to 10). The AIMO's written questions are the first open papers that test proof directly.

### Can a student do maths and informatics olympiads together?

Not in the same year. The AMT and Australian Science Innovations allow a student to take part in only one olympiad program per year.

### Do you use AMO past papers?

No. The AMT sells its own past papers. We teach with original problems and classical results proved in class.

### Can lessons guarantee an invitation?

No. Only the AMOC decides invitations and selections. We teach the problem solving and proof writing that strong results reflect.

### What happens in the free class?

A student works one olympiad style problem with a teacher, from experiment to written proof, and gets honest feedback on the proof.

## More for mathematically able students

- [AMT competitions](/australian-maths-trust-amc-aio-cat-preparation): The AMC, CAT and AIO in depth.
- [Maths olympiad tutoring](/math-olympiad-amc-tutoring): Contest preparation at every level.
- [Competitions calendar](/australian-coding-maths-and-ai-competitions-calendar): Every contest by month.
- [Year 10 Methods preparation](/year-10-maths-methods-preparation): Strong algebra before senior maths.
- [Maths tutoring online](/online-maths-tutoring-australia): Weekly maths alongside olympiad work.
- [Coding classes in Australia](/coding-classes-in-australia): The national guide, state by state.

## Contact

Book the free first class at [https://learn.modernagecoders.com/australian-mathematical-olympiad-preparation](https://learn.modernagecoders.com/australian-mathematical-olympiad-preparation#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
