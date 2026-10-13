---
title: "British Informatics Olympiad Preparation | BIO Round One"
description: "Preparation for the British Informatics Olympiad: what round one asks, how to test a solution until it breaks, and weekly practice with a teacher. First class free."
canonical: https://learn.modernagecoders.com/british-informatics-olympiad-preparation
source: src/pages/british-informatics-olympiad-preparation.html
---
> Preparation for the British Informatics Olympiad: what round one asks, how to test a solution until it breaks, and weekly practice with a teacher. First class free.

In short

The British Informatics Olympiad sets round one as a 3-hour paper with three questions, answered in any programming language and taken in school on a day of the school's choosing, during December and January. The organiser opens it to students under 19 studying full-time at an establishment of Secondary or Further, not Higher, Education in mainland Britain. Strong entrants go to a final in Cambridge at Easter, and the top four finalists form the UK team for the International Olympiad in Informatics, which Uzbekistan hosted in 2026. Preparation is mostly two things: knowing a handful of algorithm patterns, and testing a solution hard enough to find your own mistakes. We teach both live online, with problems written fresh rather than copied from the organiser's papers. A first class is free; groups cost USD 100 a month and one-to-one USD 150.

Where to start

## Three courses behind a BIO entry

Most entrants need two things at once: more algorithms, and better testing. These build them.

[![Competitive Programming for Teens course thumbnail](/images/competitive-programming-teens.webp)  BIO / 01 Competitive programming Contest-shaped problems with time limits, and the discipline of trying to break your own answer before the clock does. Open the syllabus →](/courses/competitive-programming-for-teens-course)[![Problem Solving for Teens course thumbnail](/images/problem-solving-teens.webp)  BIO / 02 Algorithms and data structures Search, recursion, dynamic programming and the structures round one keeps reaching for. Open the syllabus →](/courses/problem-solving-dsa-masterclass-teens)[![Python for Teens course thumbnail](/images/python-teens.webp)  BIO / 03 Python from start to finish For entrants whose programming is not yet fluent: the language first, so the contest is about the thinking. Open the syllabus →](/courses/python-complete-masterclass-teens)

What the organiser says

## Round one, in the organiser's own words

Everything in this table is quoted or summarised from olympiad.org.uk, read on 20 September 2026. Check it again before entering, because arrangements change year to year.

| Question | What the organiser states |
| --- | --- |
| What is it? | A 3-hour paper with three questions |
| In what language? | Answers may be written in any programming language |
| Where is it sat? | In school, on a day of the school's choosing |
| When? | During December and January; the 2026 window ran from 8 December 2025 to 23 January 2026 |
| Who may enter? | Students under 19 years of age studying full-time at an establishment of Secondary or Further, not Higher, Education in mainland Britain |
| What is submitted? | The student's computer programs, together with written answers to the problems |
| What comes next? | A final held in Cambridge at Easter |
| And after that? | The top four finalists make up the team for the International Olympiad in Informatics, hosted by Uzbekistan in 2026 |

Two details change how a student should prepare. The paper is sat in school, so a teacher has to enter the school and set a date: if nobody at school knows about it, that conversation is the first task, not the algorithms.

And because answers include written work as well as programs, a solution that is half explained is worth more than a program that silently fails. Practising the writing matters.

The language freedom cuts both ways. A student may use whatever they know best, but nothing in the room will tell them their program is wrong. Under exam conditions the only judge available is the student's own testing, which is why the next section is the heart of this page.

Students in Northern Ireland should check their eligibility with the organiser, since the rules quoted above say mainland Britain. The [UK competitions calendar](/uk-coding-maths-and-ai-competitions-calendar) lists alternatives, including one in Belfast.

Source: [British Informatics Olympiad 2026](https://olympiad.org.uk/2026/index.html) and its [rules page](https://www.olympiad.org.uk/2026/rules.html), read 20 September 2026. Modern Age Coders is not connected with the British Informatics Olympiad.

The habit that wins marks

## The test you did not write

Contest solutions fail on cases their author never imagined. The fix is not to imagine harder; it is to let a computer find them for you.

### 1. Write the slow version

First solve the problem the obvious, stupid way: try every possibility. It will be far too slow for the real input, and that does not matter. It is your definition of the right answer.

### 2. Generate small cases

Write a generator that makes tiny random inputs, small enough for the slow version to finish instantly, and seed it so any run can be repeated exactly.

### 3. Compare until they differ

Run both on thousands of cases and stop at the first disagreement. Because the case is tiny, you can read it, work it out by hand and see the bug.

Here is the method on a problem of exactly the kind round one likes. Count the routes from the top-left to the bottom-right of a small grid, moving only right or down, with some squares blocked. We wrote a fast solution in the usual way, with one plausible mistake in how it fills the first row, and a brute force that simply tries every route. Then we generated 10,000 random grids of up to five by five squares from a fixed seed, and compared.

| Measure | Result |
| --- | --- |
| Cases tested | 10,000 |
| Cases where the buggy fast solution disagreed | 1,872, or 18.7 per cent |
| First disagreement | Case 12, a five-row grid, brute force 0 routes against the fast solution's 1 |
| Cases where the corrected solution disagreed | None |
| Time to find the first bug | Under a second |

The bug was invisible on the examples in the question, which is exactly how contest mistakes behave. It only showed itself when a wall sat in the first row, and that arrangement did not appear in the sample input. Reading the code again would not have helped; a hundred hand-written tests might have missed it too.

The seed matters more than it looks. Recording it means a failing run can be reproduced exactly, by you tomorrow or by a teacher looking at your work. Without it, a bug that appears once and vanishes is the most frustrating thing in competitive programming.

This is a habit, not a trick, and it transfers well beyond contests: every serious software team compares a fast implementation against a simple one this way. In class, learners build the generator and the brute force before they optimise anything, and a teacher reads both.

A term of practice

## Ten weeks, one hour a week, and no cramming

A realistic shape for an autumn term before a December or January paper. It assumes a student can already write programs in one language.

| Weeks | Focus | What the student should be able to do by the end |
| --- | --- | --- |
| 1 to 2 | Reading problems and brute force | Restate a problem in their own words and solve it slowly but correctly |
| 3 to 4 | Testing | Write a generator and a brute force, and find their own bug with a seeded run |
| 5 to 6 | Search and recursion | Enumerate arrangements, prune sensibly and know when recursion is the wrong tool |
| 7 to 8 | Dynamic programming and counting | Turn a counting problem into a table, and explain in writing why it is correct |
| 9 | Writing answers | Explain a method on paper clearly enough for a marker who never sees it run |
| 10 | Full three-hour practice | Sit three fresh questions in one sitting and manage the clock |

Every practice problem we set is written fresh in the style of the competition. Past papers belong to the organiser and are on its own site, which is the right place to get them. If a school has never entered, a teacher can find the entry arrangements there too.

Where we fit

## What a teacher adds, and what we do not claim

Preparation is mostly practice. A teacher shortens the time between a mistake and understanding it.

### What classes add

Problems at the right level each week, a person who reads both the program and the written explanation, and the testing habit above, taught until it is automatic.

### What we do not do

We do not enter students, invigilate, mark, or have any role in the competition. We do not reproduce its papers and we promise no score, no place in the final and no team selection.

### Worth it anyway

Everything on this page, from brute-force reasoning to seeded testing, is ordinary professional practice. A student who never sits the paper still keeps the skills.

Getting there

## Four steps to a serious attempt

Most students arrive somewhere in the middle. The free class finds where.

| Stage | Step | The evidence it is secure |
| --- | --- | --- |
| Before starting | 1. Fluent in one language | Can write and debug a 50-line program without help |
| Weeks 1 to 4 | 2. Slow but right | Solves a contest problem by brute force and proves it on small cases |
| Weeks 3 to 6 | 3. Tests properly | Finds a bug with a seeded generator rather than by rereading |
| Weeks 5 to 10 | 4. Fast and explained | Turns the slow answer into an efficient one and writes why it works |

### If a school does not enter

Ask the organiser about arrangements before assuming there is no route. Meanwhile the skills carry over to other contests on the [UK competitions calendar](/uk-coding-maths-and-ai-competitions-calendar).

Team contests such as the Perse Coding Team Challenge suit students who prefer company to silence.

### After round one

Finalists work on harder problems and tighter limits. The path beyond is the [International Olympiad in Informatics](/ioi-olympiad-informatics-training), which the top four finalists reach.

Many entrants also practise on [USACO](/usaco-preparation-online-coaching), which runs online through the year.

The catalogue

## Nine courses for contest preparation

Ordered roughly by where an entrant usually needs work. Each card opens its syllabus.

I

### Getting fluent

The language stops being the obstacle

BIO / LANG / 01

#### Python from start to finish

Every core idea of the language, with prediction before running.

[Open the syllabus](/courses/python-complete-masterclass-teens)

BIO / LANG / 02

#### First steps in Python

For younger entrants who are new to typed code.

[Open the syllabus](/courses/python-ai-kids-masterclass)

BIO / LANG / 03

#### Java for teens

For students whose school teaches Java and who want to enter in it.

[Open the syllabus](/courses/java-programming-masterclass-for-teens)II

### Algorithms

The patterns round one rewards

BIO / ALG / 01

#### Algorithms and data structures

Search, sorting, recursion and dynamic programming, reasoned on paper first.

[Open the syllabus](/courses/problem-solving-dsa-masterclass-teens)

BIO / ALG / 02

#### Competitive programming

Contest problems against the clock, with testing built into the routine.

[Open the syllabus](/courses/competitive-programming-for-teens-course)

BIO / ALG / 03

#### Advanced competitive programming

For finalists and sixth formers pushing into harder rounds.

[Open the syllabus](/courses/competitive-programming-masterclass-college)III

### Around the contest

Projects, maths and hackathons

BIO / EXTRA / 01

#### Olympiad mathematics

Counting, proof and case analysis, which informatics problems lean on.

[Open the syllabus](/courses/olympiad-competition-mathematics-mastery)

BIO / EXTRA / 02

#### Hackathon preparation

Building something complete under time pressure.

[Open the syllabus](/courses/hackathon-prep-for-teens-coding-ai-build-innovate-win-course)

BIO / EXTRA / 03

#### AI and machine learning for teens

For students whose interest runs towards the AI olympiad instead.

[Open the syllabus](/courses/ai-ml-masterclass-teens)

How preparation runs

## One hour a week, plus problems between

Teachers work from India, five and a half hours ahead of the UK in winter and four and a half in summer, so most contest students take a weekday evening or a weekend morning, agreed in UK time.

Weekday evening

The common choice for Years 10 to 13 during term.

Weekend morning

Long enough for a full practice paper and a review.

Holiday intensives

For the weeks before a December or January sitting.

### Problems written fresh

Every practice question is our own, in the competition's style; the organiser's papers stay on the organiser's site.

### Programs read line by line

The teacher reads the code and the written explanation, not just the final output.

### Testing every week

A generator and a brute force are part of the routine, not an afterthought.

### Groups

Fifteen to twenty students at a similar level, comparing approaches to the same problem.

### One to one before a sitting

For a student with a date in the diary and specific gaps to close.

### Honest limits

No promises about scores or selection, and no help during the paper itself.

Student work

## What our students have built

Four published student projects. The [student labs](/student-labs) page has more.

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

Monthly, in US dollars, the same rate as every country outside India. No joining fee.

Free first class

USD 0

no card required

- A real contest problem with a teacher
- An honest view of the starting level
- No card details

Book it

Group batch

USD 100

a month, billed in US dollars

- Fifteen to twenty students at one level
- Weekly problems and code review
- The same teacher throughout
- A certificate at the end

Start here

One to one

USD 150

a month, billed in US dollars

- A teacher for one student
- Planned around the sitting date
- Suited to finalists and to late starters

Enquire

What families say

## Rated 4.9 across 547 Google reviews

Google reviews from families, copied exactly.

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

Questions about the BIO

## What students and parents ask about the British Informatics Olympiad

### What happens in round one?

The organiser describes it as a 3-hour paper with three questions, answered in any programming language and taken in school on a day the school chooses, during December and January.

### Who can enter?

The organiser states it is open to students under 19 years of age studying full-time at an establishment of Secondary or Further, not Higher, Education in mainland Britain.

### Which programming language should my child use?

Whichever they write most fluently, since any language is allowed. Fluency matters more than the choice: three hours is not long enough to fight the language as well as the problems.

### What happens after round one?

Strong entrants are invited to a final held in Cambridge at Easter, and the top four finalists make up the UK team for the International Olympiad in Informatics, which Uzbekistan hosted in 2026.

### How should a student practise?

Solve problems slowly and correctly first, then test hard: write a brute force and a seeded random generator and compare. In our own run of 10,000 random cases, that method exposed a bug in 1,872 of them that reading the code had not revealed.

### Do you use past BIO papers?

No. Practice problems are written fresh in the same style. The organiser publishes its own past papers, and that is where students should get them.

### Can you enter my child for the competition?

No. Entry is arranged by the school with the organiser. We teach the preparation, and we have no role in the competition itself.

### My school has never entered. What now?

Ask a computing teacher to look at the organiser's site, since the paper is sat in school on a date the school picks. In the meantime, other contests on our calendar page are open to individuals.

### What do classes cost?

The first class is free. After that a group place is USD 100 a month and one-to-one teaching USD 150, with no joining fee and no annual contract.

### When are lessons, in UK time?

A weekly slot agreed in the free class, usually a weekday evening or a weekend morning. India runs five and a half hours ahead of the UK in winter and four and a half in summer.

Related pages

## Other contests and pages

Where the BIO sits among the rest.

### [UK competitions calendar 2026-27](/uk-coding-maths-and-ai-competitions-calendar)

Every UK coding, maths and AI contest we could confirm.

### [International Olympiad in Informatics](/ioi-olympiad-informatics-training)

Where the top four finalists go next.

### [USACO preparation](/usaco-preparation-online-coaching)

An online contest that runs through the year.

### [The coding olympiad track](/coding-olympiad-medal-track)

How the contests build on one another.

### [Choosing an online class in the UK](/best-online-coding-classes-uk)

Seven checks for any provider.

### [Coding classes in the UK](/coding-classes-in-united-kingdom)

The four school systems, and every UK page.

Start here

## Try a contest problem, free

Send a number and we will arrange a free class at a UK time that suits. The class is a real contest problem, solved slowly, then tested until it breaks.

Prefer to read first? Each [course page](/courses) lists its syllabus, [how we teach](/how-we-teach) explains the method, and the [roadmap](/coding-roadmap) shows the order of topics.

[WhatsApp us](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20class%20about%20preparing%20for%20the%20British%20Informatics%20Olympiad.) · [+91 91233 66161](tel:+919123366161) · [connect@modernagecoders.com](mailto:connect@modernagecoders.com)

WhatsApp from a UK mobile costs nothing and is usually quickest. Our number is Indian and described as such; there is no UK office.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/british-informatics-olympiad-preparation*
