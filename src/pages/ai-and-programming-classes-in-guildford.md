---
title: "AI and Programming Classes in Guildford | Coding for 6 to 67"
description: "Online AI, programming, Python and coding classes for learners in Guildford, East Horsley, Send and Shalford, aged 6 to 67, taught live. The first lesson is free."
canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-guildford
source: src/pages/ai-and-programming-classes-in-guildford.html
---
> The Borough of Guildford had 143,650 residents at the 2021 census, with Guildford itself a built-up area of 77,880. It is a place full of students: people aged 20 to 24 made up 9.2 per cent of residents against 6.0 per cent in England, and 15 to 19 year olds 7.5 against 5.7. It is also the town where Lewis Carroll spent his Christmases. For learners of every age from 6 to 67 we teach AI, programming, Python and maths live online from India, one-to-one or in classes of five to ten at matching levels. The first lesson is free and fixes the course. The Guildford project hands one of Carroll's logic puzzles to a computer. Carrying on costs USD 100 a month for a group or USD 150 a month privately.

[Home](/) / [United Kingdom](/coding-classes-in-united-kingdom) / [South East England](/coding-and-ai-classes-in-south-east-england) / Guildford

Guildford, Surrey, England / Live online

# AI and programming classes in Guildford

**What are the best AI and programming classes in Guildford?** The Borough of Guildford had 143,650 residents at the 2021 census, with Guildford itself a built-up area of 77,880. It is a place full of students: people aged 20 to 24 made up 9.2 per cent of residents against 6.0 per cent in England, and 15 to 19 year olds 7.5 against 5.7. It is also the town where Lewis Carroll spent his Christmases. For learners of every age from 6 to 67 we teach AI, programming, Python and maths live online from India, one-to-one or in classes of five to ten at matching levels. The first lesson is free and fixes the course. The Guildford project hands one of Carroll's logic puzzles to a computer. Carrying on costs USD 100 a month for a group or USD 150 a month privately.

Surrey History Centre records that Lewis Carroll settled his sisters in a house called The Chestnuts on Castle Hill, Guildford, in September 1868 and always spent Christmas there; it suggests Guildford is, after Oxford, the place most associated with his adult life. Carroll was a mathematician, and his book Symbolic Logic is full of puzzles in which a list of odd statements hides one surprising conclusion. In one, ten premises about cats, kangaroos and animals that gaze at the moon lead, after a long chain, to "I always avoid a kangaroo". People solve these slowly, rearranging sentences. A computer can do it in milliseconds, if it is taught one rule of logic that even clever humans forget. This page's project builds that solver in Python.

Facts last verified 27 September 2026. Teaching is online; no Guildford branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Popular starting courses in Guildford

Pick whatever matches the learner's curiosity. The first live lesson of every course is free, with no card details asked.

- [Coding for Kids](/courses/kids-coding-blocks-masterclass) (Ages 6 to 9): Block coding with puzzles, riddles and if-then rules.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass) (Ages 9 to 12): Python and AI basics, from simple rules to programs that reason.
- [Python for Teens](/courses/python-complete-masterclass-teens) (Ages 13 to 17): In-depth Python for teenagers, including graphs, search and the logic solver.
- [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college) (Adults and students): Programming from scratch for adults and university students, up to algorithms.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## A town of students and families

Borough figures from table TS007A of the 2021 census, reached through Nomis, quoted band by band.

**Borough of Guildford and England, selected ages, 2021 census TS007A**

| Ages | Guildford borough | Borough share | England share |
|---|---|---|---|
| 5 to 9 | 7,810 | 5.4% | 5.9% |
| 15 to 19 | 10,766 | 7.5% | 5.7% |
| 20 to 24 | 13,147 | 9.2% | 6.0% |
| 25 to 29 | 8,578 | 6.0% | 6.6% |
| 45 to 49 | 9,635 | 6.7% | 6.4% |
| 85 and over | 3,817 | 2.7% | 2.4% |

Late teens and early twenties stand far above the national share, while young children are a little below it. Around the town the ONS counts several smaller built-up areas inside the borough, among them East Horsley at 5,840, Send at 4,095, Pirbright at 3,920 and Shalford at 2,510. Schools follow the national curriculum for England; tell us your holiday weeks and lessons pause for them.

### Nearby pages

Our [Surrey](/coding-classes-in-surrey) page covers the county, and the [South East](/coding-and-ai-classes-in-south-east-england) page indexes the region.

## Teaching a computer Carroll's logic

Each premise is an arrow; the answer is a path.

The learner writes each of Carroll's ten premises as an if-then arrow: cat leads to kills mice, kills mice leads to carnivore, and so on, with "kangaroo leads to not suitable as a pet". The arrows form a graph, and a conclusion is simply a path through it. Python's breadth-first search looks for a path from "kangaroo" to "avoided by me". At first it finds nothing, because most of Carroll's arrows point the wrong way for this question.

**Our solver on Symbolic Logic problem 60, 27 September 2026**

| What the program is allowed to use | Arrows in the graph | Kangaroo to avoided? | Verdict |
|---|---|---|---|
| The ten premises only | 10 | No path | Stuck, though the answer exists |
| Premises plus their contrapositives | 20 | Found in 10 steps | Matches Carroll's printed answer |
| Premises plus their converses | More | Also "proves" every pet is a cat | Invalid: a false conclusion |

The missing rule is the contrapositive: if cats kill mice, then anything that does not kill mice is not a cat. Adding each premise's contrapositive gives 20 arrows, and now the search walks from kangaroo, through not a pet, not a moon-gazer, not a night prowler, not a carnivore, not a mouse-killer, not a cat, not in this house, and not one that takes to me, to detested and finally avoided: ten steps, exactly Carroll's printed answer. The same graph also proves, correctly, that every cat in the puzzle is suitable for a pet.

The tempting slip is to add the converse instead, turning "cats kill mice" into "mouse-killers are cats". That makes the graph richer and the program more confident, but wrong: it then "proves" that every pet is a cat, which the premises never say. The learner writes a test with Carroll's shorter problem, where babies, crocodiles and despised persons lead to "Babies cannot manage crocodiles", and a second test that a converse-only chain must never be accepted.

### Ages 8 to 11

Play if-then card chains, then build a Scratch game where each clue unlocks the next.

### Ages 11 to 15

Store the premises as a Python dictionary of arrows and search for a path.

### Ages 15 and up

Add contrapositives, compare with converses, and test the solver on more of Carroll's puzzles.

### Carroll's puzzles, our solver

The Guildford history comes from Surrey History Centre, and the puzzles and answers from Carroll's Symbolic Logic on Project Gutenberg. The solver, the graph and its results are ours.

## Christmas at The Chestnuts

What Surrey History Centre says about Carroll and Guildford.

**Lewis Carroll and Guildford, from Surrey History Centre's Exploring Surrey's Past**

| Detail | What it says |
|---|---|
| The house | Carroll installed his sisters at The Chestnuts on Castle Hill in September 1868 |
| Christmas | He always spent Christmas there with them |
| Church | He occasionally preached in St Mary's church |
| A poem | The last line of The Hunting of the Snark came to him on a walk |
| The claim | After Oxford, the place most associated with his adult life |
| The plaque | Placed on a Castle Hill gatepost and unveiled on 24 May 1933 |

Logic of this kind sits underneath real software: database query engines chain facts, business rule engines follow chains of if-then rules, and AI planners search graphs of possible steps. Knowing which inferences are valid, and which only look valid, is a daily concern for anyone building them. A Guildford learner who has taught a computer to avoid the converse trap has met the foundations of automated reasoning.

Modern Age Coders is independent of Surrey History Centre, Project Gutenberg and the ONS. Their material is theirs; the solver, and any error in it, is ours.

## From riddle cards to automated reasoning

The year bands are a guide; the free lesson settles the level.

- **Years 1 to 4: If-then games** Block coding with rules, conditions and puzzles. [Coding for Kids](/courses/kids-coding-blocks-masterclass), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **Years 5 to 8: Rules in Python** Typed Python with conditions, dictionaries and simple searches. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [Maths Through Coding](/courses/maths-through-coding)
- **Years 9 to 13: Logic and AI** Graphs, logic and AI basics, alongside GCSE and A level. [Python for Teens](/courses/python-complete-masterclass-teens), [High School Mathematics](/courses/complete-high-school-mathematics-mastery)
- **Adults: Programming depth** Adult Python up to algorithms and data structures. [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college), [Data Analysis Course](/courses/data-analysis-mastery-course-college)

## An AI can sound logical. Does it know a converse from a contrapositive?

Fluent reasoning and valid reasoning are not the same thing.

Ask a chatbot to solve a logic puzzle and it may produce a smooth chain of steps that quietly uses a converse somewhere. The answer reads convincingly and can still be wrong.

A Guildford learner who has built a solver that refuses converses knows to check each step of any argument, human or machine.

Checking every step of a confident argument is a strong reason for a Guildford teenager to keep learning programming in 2026. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## From Send to Shalford, live online

Anywhere in the borough joins by video.

- **The learner codes** Students write their own programs, with the teacher following on screen and asking guiding questions.
- **Matched to the year** A Year 6 or a Year 13 begins at the stage their school year and trial lesson point to, with exam board names used.
- **A free trial** The first full lesson costs nothing and ends with honest advice.
- **Classes by stage** Five to ten learners at the same level, from across the UK.
- **Term pattern** Two lessons each week during term, with holidays kept free.
- **Fixed local time** Clock changes never move your lesson; our teachers shift instead.

**Why the groups meet online** Five Guildford learners at one level and one free hour are rarely neighbours. Online groups give each learner the right classmates.

## Fees in Guildford

Guildford learners pay the same fee we charge across every country outside India.

- First class: USD 0. A whole lesson free, with a clear recommendation.
- Group tuition: USD 100 a month. About eight live lessons a month in a small class.
- Private tuition: USD 150 a month. About eight live lessons a month with one tutor.

Everything is priced in US dollars, never sterling. Billing starts once the trial has agreed a course and a weekly time; the pricing page covers breaks, absences and switching formats.

## Guildford questions

### How many people live in Guildford?

The Guildford built-up area had 77,880 residents in the 2021 census, and the whole borough 143,650.

### Can Guildford learners study AI and programming online?

Yes. We teach AI, programming, Python and coding live online to Guildford learners aged 6 to 67.

### What is the Lewis Carroll logic project?

Learners turn Carroll's ten premises into a graph in Python and search it to reach his answer, "I always avoid a kangaroo".

### What is a contrapositive?

The version of "if A then B" that says "if not B then not A"; it is always equally true, unlike the converse "if B then A".

### What is Lewis Carroll's link with Guildford?

Surrey History Centre records that he settled his sisters at The Chestnuts on Castle Hill in 1868 and spent every Christmas there.

### Are lessons held in Guildford?

They run online, so learners join from home anywhere in the borough.

### Do you help with GCSE and A level?

Yes, maths and computing, with understanding as the aim; we never promise grades.

### What ages can join?

From 6 to 67, including university students.

### How much are lessons?

The first is free; then USD 100 a month in a group or USD 150 a month one-to-one.

### Do lessons continue in school holidays?

No. Send your holiday dates and we pause.

## More pages near Guildford

Our [Surrey](/coding-classes-in-surrey) page covers the county, [High Wycombe](/best-coding-and-ai-classes-in-high-wycombe) counts chair records with missing places, and the [South East](/coding-and-ai-classes-in-south-east-england) page indexes the region. The [UK hub](/coding-classes-in-united-kingdom) lists every page.

## Contact

Book the free class on [https://learn.modernagecoders.com/ai-and-programming-classes-in-guildford](https://learn.modernagecoders.com/ai-and-programming-classes-in-guildford#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email contact@modernagecoders.com. Rated 4.9 across 547 Google reviews.
