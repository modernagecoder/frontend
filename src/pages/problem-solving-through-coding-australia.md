---
title: "Problem Solving Through Coding | Australian Students"
description: "How coding builds problem solving for Australian students: decomposition from the curriculum, an unsolved puzzle to explore in code, and what a program cannot prove."
canonical: https://learn.modernagecoders.com/problem-solving-through-coding-australia
source: src/pages/problem-solving-through-coding-australia.html
---
> How coding builds problem solving for Australian students: decomposition from the curriculum, an unsolved puzzle to explore in code, and what a program cannot prove.

In short

Problem solving through coding means using programs to explore, test and explain a problem that has no ready-made recipe. Students define the problem, break it into parts, try ideas in code and check the results. The Collatz puzzle shows how: starting from 27, the rule takes 111 steps and climbs to 9,232 before reaching 1. Code gives strong evidence about such patterns, but it cannot prove them.

Where to start

## Three courses built around real problems

By age and readiness. The free first lesson decides which suits.

[![Problem Solving and Computational Thinking for Kids course thumbnail](/images/problem-solving-kids.webp)  PSAU / 01 Puzzles and logic for children Ages 7 to 12. Step-by-step thinking before, during and after any code. Open the syllabus →](/courses/problem-solving-and-computational-thinking-for-kids)[![Maths Through Coding course thumbnail](/images/maths-through-coding.webp)  PSAU / 02 Maths explored in Python Ages 10 to 15. Patterns, conjectures and experiments, written as programs. Open the syllabus →](/courses/maths-through-coding)[![Problem Solving for Teens course thumbnail](/images/problem-solving-teens.webp)  PSAU / 03 Algorithms for teens Ages 13 to 18. Breaking hard problems into structures and steps. Open the syllabus →](/courses/problem-solving-dsa-masterclass-teens)

The curriculum

## Problem solving, in the Australian Curriculum's words

The Australian Curriculum v9 describes the problem-solving side of Digital Technologies as computational thinking, and it grows across the years from simple sequences to breaking real problems apart.

| Years | What students should have had the opportunity to do |
| --- | --- |
| 1 and 2 | "apply computational thinking by describing algorithms that include sequences of instructions and decisions" |
| 7 and 8 | "apply computational thinking by defining and decomposing real-world problems, creating user experiences, designing and modifying algorithms, and implementing them in a general-purpose programming language" |
| 7 and 8 | "practising problem decomposition, using approaches such as divide and conquer to more clearly understand a problem by describing its component parts" |

### Decomposition, in plain words

Problem decomposition means breaking a big problem into smaller ones that can each be solved on its own. Divide and conquer is one way to do it: split the problem, solve the halves, combine the answers.

It is how a game is built, how a school project is planned and how a hard maths question is tackled. Code makes the idea concrete, because each part becomes a function that either works or does not.

### Where children start

In the early years the curriculum asks for algorithms with sequences and decisions, which in Scratch means a stack of blocks with an *if* inside.

By the middle years, children are defining the problem themselves, which is the hardest and most valuable step of all.

Sources, read 7 October 2026: ACARA, Australian Curriculum v9, Digital Technologies content [Foundation to Year 6](https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-f-6-v9.docx) and [Years 7 to 10](https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx) (band descriptions).

The puzzle

## A rule a child can follow and no one can prove

Pick any whole number. If it is even, halve it. If it is odd, multiply by three and add one. Repeat. The Collatz conjecture says you will always reach 1, whatever number you start with. No one has yet proved it.

| Start | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Steps | 0 | 1 | 7 | 2 | 5 | 8 | 16 | 3 | 19 | 6 | 14 | 9 |

### The surprise at 27

Small numbers settle quickly. Then a child tries 27 and the sequence wanders for a long time, climbing as high as 9,232 before finally dropping to 1 after 111 steps.

Nothing about 27 looks special. That unpredictability is what makes the puzzle such a good problem-solving exercise: there is no shortcut, only exploration.

### Where the puzzle is recorded

The On-Line Encyclopedia of Integer Sequences lists the step counts as sequence A006577, which our program matches.

The mathematician Jeffrey Lagarias surveyed the problem in a 1985 article, "The 3x + 1 Problem and Its Generalizations", in The American Mathematical Monthly, and it remains open.

Sources: [OEIS A006577](https://oeis.org/A006577), read 7 October 2026; Lagarias, J. C. (1985), The American Mathematical Monthly 92(1), [doi.org/10.2307/2322189](https://doi.org/10.2307/2322189) (details confirmed via Crossref).

Exploring in code

## From one number to ten thousand

Following the rule by hand for 27 takes a patient afternoon. A program does it instantly, which lets a student ask bigger questions, and that is where problem solving really begins.

| Question | Answer |
| --- | --- |
| How many steps does 27 take? | 111 steps, with a highest value of 9,232 |
| Which start takes the most steps? | 6171, with 261 steps |
| Which start climbs highest? | 9663, which reaches 27,114,424 before falling to 1 |
| Did every start reach 1? | Yes, every one from 1 to 10,000 |

### Decompose

Split the job: one function applies the rule once, another counts steps, a third tracks the highest value, a loop tries every start.

### Test each part

Check the step counter against the known values for 1 to 12 before trusting it on ten thousand numbers.

### Ask a new question

Which starting numbers take exactly 100 steps? Do even starts finish faster? Each answer suggests the next question.

Younger children do the same exploration in Scratch with a counter variable and a *repeat until* block, testing small numbers. Older students write it in Python, then chart the results, and some go on to time their program and make it faster by remembering answers they have already worked out.

Evidence and proof

## What a program can show, and what it cannot

The most important problem-solving lesson in this puzzle is about the limits of checking.

### Ten thousand is not all

Our program checked every start from 1 to 10,000, and every one reached 1. That is strong evidence. It is not a proof, because there are infinitely many whole numbers, and one counterexample anywhere would break the conjecture.

Students who understand this difference think more clearly about every claim, including claims made by computers.

### An honest note on transfer

Coding builds problem solving most reliably for problems like the ones practised: defining, breaking down, testing and explaining. We do not claim it automatically makes children better at everything.

What it does give is repeated practice at a process, with instant feedback, which is a sound way to learn any skill.

A good question to ask any program

What did it actually check, and what is it only suggesting? A student who asks that habitually has learned something more valuable than any single algorithm.

### Make a prediction

Before running the program on 1 to 10,000, students guess which start will take longest. Almost nobody guesses a number in the six thousands, which makes the answer memorable.

### Look for patterns

Students chart steps against starting number and notice that the chart is jagged, with no smooth trend. Describing what they see, in words, is part of the exercise.

### State the limits

Every write-up ends with a sentence on what was not checked. It is the habit that separates a careful investigator from someone who simply ran some code.

The process

## Four steps we use on every problem

Whatever the age or the language, our lessons follow the same problem-solving loop.

| Step | The question the student answers |
| --- | --- |
| 1. Define | What exactly is being asked, and what would a correct answer look like? |
| 2. Decompose | What smaller problems is this made of, and in what order? |
| 3. Test | How will I know each part works, before I combine them? |
| 4. Explain | Can I describe my solution, and its limits, to someone else? |

The same loop powers projects in our [game development path for kids](/game-development-for-kids-australia) and the senior work on our [HSC Software Engineering page](/hsc-software-engineering-help). For checking answers from AI tools with the same care, see [learning to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-australia).

Parents sometimes ask how to tell whether the loop is working. Listen to how your child talks about a problem. Early on, they describe what they typed. Later, they describe what the problem needed, which parts they built first, how they knew each part worked, and what they would try next. That shift, from narrating keystrokes to explaining decisions, is the clearest sign that problem solving is growing, and our teachers often hear it after a term or so of regular lessons.

Stages

## How problem solving grows with age

The same skills at four levels of independence.

| Stage | What the student does |
| --- | --- |
| 1. Follow | Follows a sequence with decisions and repeats, and predicts what it will do |
| 2. Fix | Finds and fixes the mistake in a short program that almost works |
| 3. Design | Breaks a new problem into parts and builds each one |
| 4. Investigate | Explores an open question, gathers evidence and explains its limits |

### Primary years

Stages one and two, mostly in Scratch, with puzzles that have satisfying answers.

Children learn that mistakes are information, not failure.

### Secondary years and adults

Stages three and four, in Python and beyond, including open questions like the Collatz puzzle.

Students learn to say not just what they found, but how sure they are.

The catalogue

## Nine courses built on real problems

Grouped by age. The free first lesson places each learner.

I

### Primary

Ages 7 to 12

PSAU / PRI / 01

#### Logic puzzles in code

Sequences, decisions and repeats.

[Open the syllabus](/courses/problem-solving-and-computational-thinking-for-kids)

PSAU / PRI / 02

#### Scratch problem projects

Games that need planning.

[Open the syllabus](/courses/scratch-programming-complete-course)

PSAU / PRI / 03

#### Number sense

The maths behind good guesses.

[Open the syllabus](/courses/mental-maths-mastery-kids)II

### Secondary

Ages 10 to 18

PSAU / SEC / 01

#### Maths experiments in Python

Conjectures tested with code.

[Open the syllabus](/courses/maths-through-coding)

PSAU / SEC / 02

#### Structures and algorithms

Decomposition for harder problems.

[Open the syllabus](/courses/problem-solving-dsa-masterclass-teens)

PSAU / SEC / 03

#### Competitive programming

Timed problems, careful solutions.

[Open the syllabus](/courses/competitive-programming-for-teens-course)III

### Adults and keen students

15 and over

PSAU / ADV / 01

#### Algorithms in depth

For university and interviews.

[Open the syllabus](/courses/data-structures-algorithms-masterclass-college)

PSAU / ADV / 02

#### Competition mathematics

Problem solving without a calculator.

[Open the syllabus](/courses/olympiad-competition-mathematics-mastery)

PSAU / ADV / 03

#### Python for problem solvers

For adults learning to code.

[Open the syllabus](/courses/python-programming-masterclass-zero-to-advanced-college)

How lessons run

## Lessons that start with a question, not a recipe

Teachers bring a problem; students do the thinking. The teacher's job is to ask the next good question.

After school

Weekday afternoons in your state.

Evenings

For teens and adults.

Weekends

Saturday and Sunday options.

### Define first

Students restate the problem before writing any code.

### Small parts

Every solution is built and tested in pieces.

### Mistakes welcome

A wrong guess is the start of the next idea.

### Explain it

Students describe their solution and its limits.

### Groups

Fifteen to twenty learners, or one to one.

### Same teacher

One teacher who knows how each student thinks.

Student work

## Problems our students have solved

Projects where the path was not given in advance. There are more on the [student labs](/student-labs) page.

![NutriLife AI nutrition coach project screenshot](/images/projects/nutrilife.webp)

AI and ML

#### NutriLife

An AI nutrition coach that reads what you eat and works you toward a target.

by Bhavya · [Open it](https://nutrilife-bhavya.lovable.app)

![Misti AI chatbot for maths and coding screenshot](/images/projects/misti.webp)

AI and ML

#### Misti

A chatbot that answers mathematics and programming questions, built and deployed by a student.

by Harshit · [Open it](https://misti.modernagecoders.com)

![GuardianX AI internet safety assistant screenshot](/images/projects/guardianx.webp)

AI and ML

#### GuardianX

An assistant that helps a young person recognise unsafe situations online.

by Vivaan · [Open it](https://guardianx-cybersaver.lovable.app)

![SkyCast weather forecast application screenshot](/images/projects/skycast.webp)

Web app

#### SkyCast

A weather forecasting site with live conditions for any location.

by Krish

Fees

## Fees

Outside India the fee is monthly, in US dollars, and the same wherever you live. There is no enrolment charge and no requirement to stay for a term, so you can end after any month.

Free first class

USD 0

no card required

- A first lesson that is free
- An honest view of where to begin
- No card needed

Book it

Group batch

USD 100

a month, billed in US dollars

- Fifteen to twenty learners
- A consistent teacher
- Similar age and level
- Monthly, cancel any time

Start here

One to one

USD 150

a month, billed in US dollars

- One teacher, one learner
- A time that suits you
- Pace set by the learner

Enquire

What families say

## Rated 4.9 across 547 Google reviews

Google reviews written by our families, reproduced exactly.

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

Questions from parents

## Common questions about problem solving through coding

### Does coding really teach problem solving?

It does when children work on real problems, ones they must define, break down, test and explain, rather than following step-by-step instructions. We do not claim it automatically improves every other subject.

### What is the Collatz conjecture?

The Collatz conjecture says that if you take any whole number, halve it when it is even and multiply by three and add one when it is odd, and repeat, you will always eventually reach 1. It has never been proved.

### What is problem decomposition?

Problem decomposition is breaking a large problem into smaller parts that can each be solved and tested on their own, then combining them. The Australian Curriculum names it for Years 7 and 8.

### Why use an unsolved maths problem with children?

Because it is easy to understand, impossible to shortcut and rewards exploration. It also teaches the difference between evidence from a program and a proof.

### Can a computer prove the Collatz conjecture by checking numbers?

No. Checking any finite set of numbers, however large, gives evidence but not proof, because the conjecture is about every whole number.

### What age is this suitable for?

Children from about 8 can follow the rule and explore small numbers in Scratch. Writing the full exploration in Python suits students from about 10.

### Does my child need to be good at maths?

No. Halving, tripling and counting are enough to start. Problem solving through coding often builds maths confidence rather than requiring it.

### Does this follow the Australian Curriculum?

It reinforces the computational thinking described in the Digital Technologies curriculum, from sequences and decisions in the early years to decomposition in Years 7 and 8.

### Are lessons live?

Yes. Every lesson is live online with a teacher, in groups of fifteen to twenty or one to one, at times set for your state.

### How much does it cost?

The first lesson is free. After that, fees are monthly with no joining fee and no term lock-in; see the fees section on this page.

Elsewhere on this site

## Related pages

More on thinking skills, maths and coding for Australian students.

### [Coding classes in Australia](/coding-classes-in-australia)

Our main page for Australian families.

### [Understand the code](/understand-the-code-dont-copy-paste-australia)

Contracts, tests and honest work.

### [Learn to think, not just use AI](/learn-to-think-not-just-use-ai-tools-australia)

Checking AI answers.

### [Online maths tutoring in Australia](/online-maths-tutoring-australia)

Maths taught with the same depth.

### [Competitions calendar](/australian-coding-maths-and-ai-competitions-calendar)

Coding and maths competitions by month.

### [Game development for kids](/game-development-for-kids-australia)

Problem solving through games.

Start here

## Book a free first lesson

Tell us a number and a convenient time. The student tackles a small open problem with a teacher, and you watch how they think.

If you prefer to look around first, read [how a lesson runs](/how-we-teach) or browse [the courses](/courses).

[WhatsApp us](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20my%20child%20to%20build%20problem-solving%20skills%20through%20coding.%20Could%20we%20book%20a%20free%20lesson%3F) · [+91 91233 66161](tel:+919123366161) · [connect@modernagecoders.com](mailto:connect@modernagecoders.com)

For a quick reply from Australia, use WhatsApp. We are based in India and answer from a +91 number, with no Australian office.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/problem-solving-through-coding-australia*
