---
title: "Australian Informatics Olympiad Preparation | AIO Coding"
description: "Australian Informatics Olympiad preparation: the AIO format, languages, judging and awards from the Australian Maths Trust, and a testing habit that saves marks."
canonical: https://learn.modernagecoders.com/australian-informatics-olympiad-preparation
source: src/pages/australian-informatics-olympiad-preparation.html
---
> Australian Informatics Olympiad preparation: the AIO format, languages, judging and awards from the Australian Maths Trust, and a testing habit that saves marks.

In short

The Australian Informatics Olympiad is a three-hour online programming contest run by the Australian Maths Trust. In 2026 it was held on Thursday 27 August. Students solve six problems in C, C++, Java or Python 3, and an automated judge runs their code against hidden inputs, marking speed and correctness. Intermediate (up to Year 10) and Senior (up to Year 12) sit the same paper.

For AIO preparation

## Three courses that build olympiad programming

A solid language, the algorithms contests use, and practice under contest conditions.

[![Competitive Programming for Teens course thumbnail](/images/competitive-programming-teens.webp)  AIOP / 01 Competitive programming for teens Contest problems judged by tests, with the habits that turn a working idea into full marks. Open the syllabus →](/courses/competitive-programming-for-teens-course)[![Problem Solving for Teens course thumbnail](/images/problem-solving-teens.webp)  AIOP / 02 Algorithms and data structures Sorting, searching, graphs and dynamic programming, the toolkit behind the harder AIO problems. Open the syllabus →](/courses/problem-solving-dsa-masterclass-teens)[![C++ for Teens course thumbnail](/images/cpp-teens.webp)  AIOP / 03 C++ for teens For students who want the speed many olympiad competitors choose, taught from the ground up. Open the syllabus →](/courses/cpp-programming-masterclass-for-teens)

The contest

## What the AIO is, according to the Australian Maths Trust

Everything in this table is from the Trust's AIO page, read on 7 October 2026.

| Detail | What the AMT states |
| --- | --- |
| Date | Thursday 27 August 2026 |
| Time allowed | 3 hours |
| Entries close | Friday 21 August 2026 |
| Who it is for | Students with "some programming experience" who can "write code" |
| Languages | C, C++, Java or Python 3 |
| Divisions | Intermediate (students up to Year 10) and Senior (up to Year 12), with "only one AIO paper"; divisions are for awards only |
| Questions | 6 questions, with answers in source code |
| Delivery | Online only |

The Trust describes the content plainly: "Students invent algorithms and write code to solve problems." The skills it lists are modest on paper, "opening, reading and writing files; declaring variables and arrays; and using loops, conditional (if) statements and simple arithmetic operations", but the problems are designed so that the thinking, not the syntax, is the hard part.

The AIO also opens doors. The Trust says students who perform well "may be invited to participate in the AMT's olympiad programs", which lead towards the team that represents Australia internationally. Our [AIO to IOI pathway page](/aio-to-ioi-pathway-australia) explains those steps.

Entry is through schools, and the fee is set by the Trust in Australian dollars, so we do not quote it here. Talk to the school's maths or computing coordinator well before the entry deadline.

Dates for 2027 had not been published when we checked. The AIO has sat in late August in 2026, so students who want to prepare properly should start in Term 1 or 2, not the week before.

Source: Australian Maths Trust, [Australian Informatics Olympiad](https://amt.edu.au/aio), read on 7 October 2026. We are independent of the AMT.

How code is marked

## An automated judge, hidden tests, and no marks for style

The AIO is marked by a machine, not a person. Understanding exactly what it checks is the first step in preparing.

The AMT states that "students submit source code which is compiled and run against input scenarios to test correctness and efficiency. Submissions are marked on speed and correctness." It adds: "Coding style is not taken into consideration."

It also notes that "students can see their marks during the competition as they are calculated by an automated judging system". That feedback is useful, but it tells a student their score, not why a test failed. Finding the reason is up to them.

Two kinds of failure cost marks. A wrong answer on some hidden input, often an edge case such as the smallest or largest allowed value, and a correct answer that arrives too slowly on a large input. A program can be right and still lose marks on efficiency.

That is why preparation is not only about knowing algorithms. It is about the discipline of checking a solution properly before submitting it, which is what the lesson below teaches.

| Award | Who receives it |
| --- | --- |
| Gold | Top 10 per cent |
| Silver | The next 15 per cent |
| Bronze | The next 25 per cent |
| Credit | The next 20 per cent |
| Participation | All remaining students |

Scoring and awards quoted from the AMT's [AIO page](https://amt.edu.au/aio), read on 7 October 2026. We make no award or invitation promises.

The testing habit

## Stress testing: checking a fast solution against a slow one

Experienced competitors rarely trust a clever solution on sight. They write a second, slow solution that is obviously correct and compare the two on many random inputs. Here is that habit on a small problem of our own.

### The problem and two solutions

Given a list of whole numbers and a window length k, find the largest total of any k numbers in a row. The brute-force solution adds up every window separately. It is slow on long lists but almost impossible to get wrong.

The fast solution keeps a running total, adding the number entering the window and subtracting the one leaving. Our first version had a classic slip: its loop stopped one step early, so it never checked the last window.

### What the stress test found

We generated 1,000 random lists, each between 1 and 8 numbers long with values from minus 5 to 5 and a random window length, and compared the two solutions on every one. The buggy fast version disagreed with brute force on 230 of the 1,000 tests.

The first disagreement came on test 7: the list 2, minus 3, 5, 4, minus 1 with k equal to 3. The right answer is 8, from 5, 4 and minus 1; the buggy code said 6. After fixing the loop, the two solutions agreed on all 1,000 tests.

| Fast solution | Disagreements with brute force | First failing case found |
| --- | --- | --- |
| Loop stops one step early | 230 of the 1,000 | Test 7: list 2, minus 3, 5, 4, minus 1, k = 3 (expected 8, got 6) |
| Loop fixed | 0 of the 1,000 | None |

Notice that the sample a problem statement gives would probably have passed. Small random tests catch the edge that a person forgets, here the final window, and they catch it in seconds. In the AIO the judge's hidden tests do the same thing to you; stress testing lets you do it to yourself first. The brute-force solution has a second use too: on a hard problem, submitting it can collect the marks for small inputs while you work on the fast version.

The problem, both solutions and the 1,000-test run are ours, executed in Python on 7 October 2026. The AIO's own problems are not reproduced here.

Where to practise

## Using the Trust's training site well

The AMT points students to its own Informatics Training Site for practice material.

### The training site

The AIO page sends students to the AMT's Informatics Training Site, which invites students to practise "on past problems" and promises "instant" feedback on submitted code.

### Past problems first

Work through earlier AIO problems on the site, under a time limit, before learning new techniques. They show what level of thinking each problem number needs.

### Read others' code

The training site invites students to learn from tutorials and from other users' code. Reading a better solution after your own attempt is how speed improves.

Choose one language and stay with it. Python 3 is allowed and is where most of our students start; some move to C++ later for its speed. Switching languages close to the contest usually costs more than it gains.

Practise reading input and writing output exactly as a problem specifies. The AMT lists file input and output among the skills the AIO uses, and a formatting slip can turn a correct algorithm into zero marks.

Our classes teach the algorithms, the testing habit and the contest strategy: reading all six problems first, collecting easy marks early, and knowing when a brute-force answer is worth submitting. We use our own problems and the Trust's public training material, not leaked or restricted papers.

Students should also try the Computational and Algorithmic Thinking competition and Bebras earlier in the year. Both build the same thinking with lower stakes.

Sources: AMT [AIO page](https://amt.edu.au/aio) and the AMT [Informatics Training Site](https://orac.amt.edu.au/hub/), read on 7 October 2026.

Building towards the AIO

## Four stages of olympiad programming

Most students need a year or more between a first program and a strong AIO.

| Stage | Focus | The sign it is secure |
| --- | --- | --- |
| 1. Fluent coding | Loops, arrays, functions, input and output | Writes a correct short program without looking things up |
| 2. Core algorithms | Sorting, searching, prefix ideas, greedy methods | Explains why an approach is correct, not only that it works |
| 3. Efficiency | Estimating running time before writing code | Predicts whether a solution will be fast enough |
| 4. Contest discipline | Stress testing, partial marks, time management | Finishes a past paper with every submission tested |

### If the problems feel impossible

Every competitor starts there. Begin with the first problems on past papers, which are designed to be reachable, and build up.

Writing the brute-force answer first is a good way in, and it earns marks on small tests.

### Beyond the AIO

Our [AIO to IOI pathway page](/aio-to-ioi-pathway-australia) explains the invitational stages that follow.

The [Bebras page](/bebras-challenge-australia-practice) covers an earlier, code-free step.

The catalogue

## Nine courses for future olympiad programmers

Grouped by stage. Each card opens the full outline.

I

### Foundations

A language, properly

AIOP / F / 01

#### Python for teens

The language most of our AIO students start in.

[Open the syllabus](/courses/python-complete-masterclass-teens)

AIOP / F / 02

#### C++ for teens

Speed and the standard library.

[Open the syllabus](/courses/cpp-programming-masterclass-for-teens)

AIOP / F / 03

#### Java for teens

Another language the AIO accepts.

[Open the syllabus](/courses/java-programming-masterclass-for-teens)II

### Algorithms

The olympiad toolkit

AIOP / A / 01

#### Algorithms and data structures

From sorting to graphs.

[Open the syllabus](/courses/problem-solving-dsa-masterclass-teens)

AIOP / A / 02

#### Competitive programming

Contest practice with judged tests.

[Open the syllabus](/courses/competitive-programming-for-teens-course)

AIOP / A / 03

#### Maths through coding

The counting and number ideas many problems use.

[Open the syllabus](/courses/maths-through-coding)III

### Further on

For senior students

AIOP / X / 01

#### Advanced algorithms

University-level depth for the strongest students.

[Open the syllabus](/courses/data-structures-algorithms-masterclass-college)

AIOP / X / 02

#### Competition maths

Proof and counting for olympiad thinking.

[Open the syllabus](/courses/olympiad-competition-mathematics-mastery)

AIOP / X / 03

#### Competitive programming, advanced

Harder contest material for those ready for it.

[Open the syllabus](/courses/competitive-programming-masterclass-college)

How lessons run

## Live olympiad programming classes for Australian students

Our teachers are in India, behind every Australian time zone. A 5 pm lesson in Hobart during daylight saving begins at 11.30 am India time, so weekday sessions are straightforward to keep.

Terms 1 to 3

Steady weekly classes leading up to August.

Weekend contest practice

Timed past papers with review.

Holiday intensives

One technique a day for a week.

### Brute force first

Every problem starts with a slow, correct solution.

### Stress tests always

Fast solutions are compared on random inputs before submission.

### Groups of fifteen to twenty

Placed by programming level.

### One-to-one coaching

For students aiming at the invitational stages.

### Progress notes

What was learned and the next technique to practise.

### No medal promises

We teach the skills; the contest result is the student's.

Student work

## What our students have built

Projects learners made for their own reasons, outside any contest. The rest are in the [student labs](/student-labs).

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

Families in Australia pay monthly in US dollars, our standard rate outside India, with no deposit and no lock-in. AIO entry itself is arranged and paid through schools.

Free first class

USD 0

no card required

- A real lesson with a teacher
- An honest read of programming level
- No card details

Book it

Group batch

USD 100

a month, billed in US dollars

- Fifteen to twenty students at one level
- The same teacher every week
- Solutions reviewed line by line
- A certificate at the end

Start here

One to one

USD 150

a month, billed in US dollars

- A coach for one student
- Built around a target contest
- A weekly time that suits you

Enquire

What families say

## Rated 4.9 across 547 Google reviews

Parents and students in their own words, as written on Google.

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

Questions about the AIO

## What Australian students and parents ask

### What is the Australian Informatics Olympiad?

A three-hour online programming contest for Australian school students, run by the Australian Maths Trust. Students write code to solve six problems.

### When is the AIO?

In 2026 it was held on Thursday 27 August, with entries closing on Friday 21 August. Check the AMT's page for the next date.

### Which programming languages can be used in the AIO?

C, C++, Java or Python 3, according to the AMT.

### How is the AIO marked?

An automated judging system compiles each submission and runs it against input scenarios, marking speed and correctness. The AMT states that coding style is not considered.

### Are there separate papers for younger students?

No. There is one paper. Intermediate (up to Year 10) and Senior (up to Year 12) divisions are used only for awards.

### What is stress testing?

Comparing a fast solution with a slow but obviously correct one on many random inputs, so any disagreement exposes a bug before the judge does.

### How much programming does a student need first?

The AMT says students need some programming experience and must be able to write code. In practice, comfort with loops, arrays and input and output is the starting point.

### Where can students practise?

The AMT points to its Informatics Training Site, which has past problems and instant feedback on submitted code. Our classes add teaching and review.

### Can a good AIO result lead further?

The AMT says students who perform well may be invited into its olympiad programs. Invitations are the Trust's decision; we make no promises.

### Are you connected with the AMT?

No. We are an independent online school. We quote the Trust because it runs the contest.

Related pages

## More for Australian coders

Pathways, other contests and the curriculum underneath.

### [AIO to IOI pathway](/aio-to-ioi-pathway-australia)

The invitational steps after the AIO.

### [Bebras Challenge practice](/bebras-challenge-australia-practice)

Code-free computational thinking.

### [AMC, AIO and CAT preparation](/australian-maths-trust-amc-aio-cat-preparation)

The Trust's competitions compared.

### [Competitions calendar](/australian-coding-maths-and-ai-competitions-calendar)

Every contest through the year.

### [Years 7 to 10 coding](/digital-technologies-years-7-to-10-coding)

The school curriculum the AIO builds on.

### [Coding classes in Australia](/coding-classes-in-australia)

Our main Australian page.

Start here

## Book a free olympiad programming class

Tell us the year level, the language your student uses and how much contest experience they have. The free class works on a real problem and ends with honest advice on preparation.

Prefer to read first? Every course is on the [course atlas](/course-atlas), and [how we teach](/how-we-teach) explains a lesson.

[WhatsApp us](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20class%20to%20prepare%20for%20the%20Australian%20Informatics%20Olympiad.) · [+91 91233 66161](tel:+919123366161) · [connect@modernagecoders.com](mailto:connect@modernagecoders.com)

WhatsApp is usually quickest. Our number carries India's +91 code because the school runs from India; there is no Australian office.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/australian-informatics-olympiad-preparation*
