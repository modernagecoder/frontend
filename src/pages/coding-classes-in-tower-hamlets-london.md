---
title: "Coding Classes in Tower Hamlets, Canary Wharf | Modern Age Coders"
description: "Live online coding, Python, AI and maths classes for Tower Hamlets: Canary Wharf, Whitechapel, Bow, Bethnal Green, Poplar, Limehouse and Stepney. Ages 6 to 67."
canonical: https://learn.modernagecoders.com/coding-classes-in-tower-hamlets-london
source: src/pages/coding-classes-in-tower-hamlets-london.html
---
> Live online coding, Python, AI and maths classes for Tower Hamlets: Canary Wharf, Whitechapel, Bow, Bethnal Green, Poplar, Limehouse and Stepney. Ages 6 to 67.

Skip to contentCourse picks for Tower Hamlets

## First courses in Tower Hamlets

Imagine a Year 1 child in Bow who stacks everything into towers, a Year 8 pupil in Whitechapel who enjoys logic puzzles, a Year 12 student in Poplar planning to study computer science, and an office worker at Canary Wharf who has heard of recursion but never quite trusted it. All four can start with a free lesson.

[![Scratch Coding for Kids course thumbnail](/images/scratch-kids.webp)Ages 6 to 10Scratch Coding for KidsA Scratch Tower of Hanoi with three discs, played by hand and then by a script that follows a rule.See the syllabus](/courses/scratch-programming-complete-course)[![Python and AI for Kids course thumbnail](/images/python-kids.webp)Ages 9 to 12Python and AI for KidsFirst Python: count the moves for 1, 2, 3 and 4 discs and spot the doubling pattern.See the syllabus](/courses/python-ai-kids-masterclass)[![Python for Teens course thumbnail](/images/python-teens.webp)Ages 13 to 18Python for TeensPython for Key Stages 3 to 5, including the recursive solver, timing and Gray code link on this page.See the syllabus](/courses/python-complete-masterclass-teens)[![Data and AI Analytics for Non-Programmers (Excel, Sheets, Power BI) course thumbnail](/images/data-ai-analytics-non-programmers.webp)AdultsData and AI Analytics for Non-Programmers (Excel, Sheets, Power BI)For adults who want to understand exponential growth and recursion through one memorable puzzle.See the syllabus](/courses/data-and-ai-analytics-for-non-programmers-course)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Tower Hamlets in figures

## 310,306 residents and 20 Grade I entries

Numbers are published by the named organisation, or counted by us from its open data where we say so.

| Subject | Figure | From |
| --- | --- | --- |
| Usual residents, 2021 Census | 310,306 | Office for National Statistics, TS001 |
| Heritage List entries counted inside the borough | 906: 20 Grade I, 40 Grade II*, 846 Grade II | Historic England data, 25 September 2026 |
| Lines at Whitechapel | District, Hammersmith & City, Elizabeth line and Windrush line | TfL open data, checked 25 September 2026 |
| Lines at Tower Hill | Circle and District | TfL open data, checked 25 September 2026 |

### The Tower

The White Tower, the inner and outer curtain walls with their mural towers, the Middle Tower and the Chapel of St Peter ad Vincula are all Grade I.

### East End churches

Christ Church, the churches of St George in the East, St Anne and St Dunstan and All Saints, and St John on Bethnal Green are among the other Grade I entries.

### Docks and almshouses

Warehouses, quay walls and Blackwall Basin from the old docks are Grade I, as are the Trinity Green almshouses and chapel.

Tower Hamlets calls its libraries Idea Stores; the service's website names Idea Stores at Bow, Canary Wharf, Chrisp Street, Watney Market and Whitechapel.

The puzzle

## Three pegs, a stack of discs, one rule

The moves needed double, plus one, with every disc you add. Learners find the pattern by counting small cases before any theory.

| Discs | Moves | As a formula |
| --- | --- | --- |
| 1 | 1 | 2 - 1 |
| 3 | 7 | 8 - 1 |
| 10 | 1,023 | 1,024 - 1 |
| 20 | 1,048,575 | about a million |
| 64 | 18,446,744,073,709,551,615 | 2 to the power 64, minus 1 |

Each extra disc doubles the work and adds one, because you must move everything above it twice. Twenty discs need just over a million moves. Sixty-four need more than eighteen quintillion. The pattern is exact, so learners can check the formula against every run of their program, and it is the clearest possible picture of exponential growth: small at first, then impossible.

Signature project

## Recursion, a stopwatch, and a hidden binary pattern

Learners write the recursive solver, time it, then find a second, surprising way to generate exactly the same moves.

### 1. A function that calls itself

To move n discs from A to C: move n minus 1 discs to B, move the biggest to C, move the n minus 1 from B to C. Zero discs means do nothing. That is the whole program.

### 2. Time it

On our computer Python produced 4,194,303 moves for 22 discs in about one second: roughly four million moves a second.

### 3. Find the pattern

List which disc moves at each step: 1, 2, 1, 3, 1, 2, 1, 4. It is the same sequence as the bit that flips in a binary reflected Gray code.

| Speed | Time for 2 to the 64, minus 1, moves |
| --- | --- |
| One move a second, by hand | about 585 billion years |
| Our computer, about 4 million moves a second | about 145,000 years |

Both times are extrapolations, calculated rather than run, and learners are asked to show the arithmetic. The Gray code discovery is the surprise. In a Gray code, counting from one number to the next changes exactly one binary digit. For all 1,023 moves of a ten-disc tower, the disc moved at each step is exactly the digit that changes in the Gray code, and also one more than the number of zeros at the end of the step number written in binary. Disc 1 moves every other time, 512 times in all; the largest disc moves once.

### Why this beats asking an AI to solve it

An AI assistant can print a Tower of Hanoi solver instantly. What it cannot give a learner is the moment recursion clicks: trusting a function to solve the smaller problem before it has finished solving the bigger one. Learners who reach that moment, then time their code and find the Gray code hiding in the output, understand recursion, exponential growth and binary at once, and can reason about why some problems are hopeless even for the fastest machines.

Why Gray codes matter

## Counting where only one digit changes

Gray codes are not just a puzzle curiosity. They solve a real engineering problem.

### Ordinary binary

Going from 3 (011) to 4 (100) flips three digits at once. If a sensor reads them a split second apart, it can briefly report nonsense.

### Gray code

In a Gray code, neighbouring numbers differ in one digit only: 000, 001, 011, 010, 110, 111, 101, 100.

### One formula

The Gray code of k is k combined bit by bit with k shifted right once. Learners code it in a single line and check it against the Hanoi moves.

GCSE computer science students meet binary and can follow the doubling pattern; A-level students study recursion formally and can prove the move count by induction. The list entries are Historic England's; every count, timing and Gray code check on this page was produced by our own program on 25 September 2026, and other computers will give different speeds. Historic England, Tower Hamlets Council, the Idea Store service, TfL and the ONS have no connection with Modern Age Coders.

Getting around

## Whitechapel's four lines, and a quiet desk

Tower Hamlets is threaded with Underground, Elizabeth line, DLR and Overground routes. A lesson with us needs none of them.

### Whitechapel

TfL's open data lists the District, Hammersmith & City, Elizabeth and Windrush lines at Whitechapel.

### Isle of Dogs to Bow

A learner at the southern tip of the Isle of Dogs and one in Bow can be in the same class from home.

### One step at a time

Like the discs, learners move up one stage at a time, in groups of fifteen to twenty at the same level.

Tower Hamlets in London

Tower Hamlets is one of London's 32 boroughs. The [London page](/best-coding-class-in-london) covers them all and the City, linking each page when it is published, including [Hackney](/coding-classes-in-hackney-london) to the north and [Newham](/coding-classes-in-newham-london) across the River Lea.

Learning ladder

## From stacking discs to recursive proof

The free lesson shows us a learner's real starting point, whatever their year group.

Ages 6 to 10

### Play and rules

Children play the three-disc puzzle in Scratch and write down the moves as a rule.

[Scratch Coding for Kids](/courses/scratch-programming-complete-course)[Coding for Kids](/courses/kids-coding-blocks-masterclass)Ages 10 to 13

### Patterns and doubling

Python that counts moves for growing towers and finds the doubling-plus-one pattern.

[Python and AI for Kids](/courses/python-ai-kids-masterclass)[Maths Through Coding](/courses/maths-through-coding)Ages 13 to 18

### Recursion and binary

Recursive functions, timing, induction and Gray codes, core A-level computer science and olympiad material.

[Python for Teens](/courses/python-complete-masterclass-teens)[Full Stack Web Development for Teens](/courses/full-stack-web-development-teens-masterclass)Ages 18 to 67

### Thinking in growth

Adults gain a feel for exponential growth and for why some tasks are out of reach even for computers.

[Data and AI Analytics for Non-Programmers (Excel, Sheets, Power BI)](/courses/data-and-ai-analytics-for-non-programmers-course)[Python Automation Course](/courses/python-ai-automation-masterclass-college)Coding and AI

## AI can write recursive code. Why should a Tower Hamlets teenager learn to think recursively?

Because recursion is a way of thinking, and thinking is what you bring to the tools.

AI assistants write recursive functions readily. Understanding them is another matter: why the function can trust itself, where it stops, and how fast its work grows. A learner who has written the Tower of Hanoi solver, watched a 22-disc run take a second and calculated that 64 discs would take 145,000 years on the same machine, understands exponential growth in a way that protects them from impossible plans, whether a human or an AI proposes them.

Recursion appears in file systems, search, parsing and many AI methods. Learning it through a physical puzzle makes it stick. Code generators will keep getting quicker, and the people who can judge the size of a problem before starting will stay in demand.

Tower Hamlets has stood guard over the Thames for nearly a thousand years. A learner here who can reason about a tower of discs that would outlast the stars has a lasting skill of their own. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

Delivery

## Canary Wharf to Bethnal Green, lessons live

Across Tower Hamlets, the class starts as soon as the video connects.

### From any room

A laptop or desktop with headphones and a steady internet connection is all the equipment needed.

### Stages used in England

Progress is described in English Key Stages, from the first years of school to sixth form, with GCSE and A level named where they apply. We teach in English.

### A real first lesson

The free lesson is actual teaching and ends with a recommended level and course. No payment details are requested.

### Classes of fifteen to twenty

Each class brings together learners at one stage from across the UK and further away, which keeps a convenient evening time available.

### Two evenings a week

The usual rhythm is two evening lessons a week, with breaks for holidays and exams agreed in advance.

### UK clock times

Our teachers work from India; the times you receive are already in UK time.

A dense borough, a matched class

More than 310,000 people live in Tower Hamlets, but a good class still needs five learners at the same stage free together, so our groups draw from far beyond it.

Fees

## Fees for Tower Hamlets families

A free first lesson, then one monthly fee, the same in Stepney as on the Isle of Dogs.

First class**USD 0**

A full first lesson with a teacher, free, ending with a recommended level, course and weekly time.

Group tuition**USD 100**

Close to eight live lessons each month, in a class of fifteen to twenty at one stage.

Private tuition**USD 150**

Close to eight live lessons each month, one to one.

Tower Hamlets families pay in US dollars, as do all families outside India, and there are no sterling prices on the site. Payment starts only after the free lesson, once you have chosen a course and a regular time. The pricing page describes pausing, missed lessons and moving between group and private teaching.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20want%20a%20free%20coding%20class%20for%20a%20learner%20in%20Tower%20Hamlets.)Reviews

## Google reviews from families we teach

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

## Ask for a free lesson

Send us a year group or an age and a favourite hobby, and we will plan around them. Lesson one might be a Scratch three-disc tower, a Python move counter, or the recursion project on this page.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Tower Hamlets one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20want%20a%20free%20coding%20class%20for%20a%20learner%20in%20Tower%20Hamlets.)

Submitted details are used for placement and follow-up.

FAQ

## Tower Hamlets questions

About the borough, the Tower of Hanoi project and our lessons.

### How many people live in Tower Hamlets?

The 2021 Census counted 310,306 usual residents in the London Borough of Tower Hamlets, in ONS table TS001.

### Is the Tower of London in Tower Hamlets?

Yes. Historic England's list entries for the White Tower, the inner and outer curtain walls, the Middle Tower and the Chapel of St Peter ad Vincula, all Grade I, fall inside the borough's boundary.

### How many moves does the Tower of Hanoi need?

For n discs, 2 to the power n, minus 1. Three discs need 7 moves, ten need 1,023 and sixty-four need 18,446,744,073,709,551,615.

### What is recursion?

Solving a problem by using a smaller version of the same problem. To move n discs, the program moves n minus 1 discs, moves the largest, then moves the n minus 1 again, stopping when there are no discs left.

### What is a Gray code?

A way of counting in binary where each number differs from the next in only one digit. The digit that changes at each step matches exactly which disc moves in the Tower of Hanoi solution.

### When would lessons be?

The free session tells the teacher where the learner stands; we then propose a class at that stage with a seat, meeting on a fixed evening that we always express in UK time.

### What does a learner need?

A computer with sound and a reliable connection. The recursion project needs only Python.

### Is there a Modern Age Coders centre in Tower Hamlets?

No. There is no Tower Hamlets centre and no premises anywhere in the UK, because every lesson is live online. A learner needs a computer with sound and a stable connection, and our phone number is Indian.

### What do coding classes in Tower Hamlets cost?

The first lesson is free. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, and one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.

### How are the groups made up?

By level, pace and goals rather than by age or neighbourhood, with fifteen to twenty learners at one stage. Where no group fits the learner's week, one-to-one lessons are offered.

Explore London

## On from Tower Hamlets

The [London page](/best-coding-class-in-london) lists every borough and the City, adding each page as it goes live, from [Southwark](/coding-classes-in-southwark-london) across Tower Bridge to [Barking and Dagenham](/coding-classes-in-barking-and-dagenham-london) further east. Search trees full of recursion reappear in our [London AI lessons](/ai-and-machine-learning-classes-in-london); for how English school years line up with Scottish, Welsh and Northern Irish ones, see the [UK coding page](/coding-classes-in-united-kingdom).

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20want%20a%20free%20coding%20class%20for%20a%20learner%20in%20Tower%20Hamlets.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/coding-classes-in-tower-hamlets-london*
