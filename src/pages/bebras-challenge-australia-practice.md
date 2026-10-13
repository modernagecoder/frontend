---
title: "Bebras Challenge Australia Practice | Computational Thinking"
description: "Bebras Challenge practice for Australian students in Years 3 to 12: format, divisions and scoring from the Australian Maths Trust, and an original practice task."
canonical: https://learn.modernagecoders.com/bebras-challenge-australia-practice
source: src/pages/bebras-challenge-australia-practice.html
---
> Bebras Challenge practice for Australian students in Years 3 to 12: format, divisions and scoring from the Australian Maths Trust, and an original practice task.

In short

The Bebras Computational Thinking Challenge is an international problem-solving contest that needs no coding. In Australia the Australian Maths Trust runs it for Years 3 to 12 in Term 1. In 2026 it ran from 9 February to 8 March. There are 15 questions, worth 6, 9 or 12 marks by difficulty, to a maximum of 135, with 60 minutes for Middle Primary and 45 for other divisions.

For Bebras-style thinking

## Three courses that build what Bebras tests

Logic and patterns for primary students, algorithms for secondary students, and competition problem solving for the keenest.

[![Problem Solving and Computational Thinking for Kids course thumbnail](/images/problem-solving-kids.webp)  BEBR / 01 Computational thinking for primary Rules, patterns, sorting and searching worked through as puzzles, exactly the territory of the primary divisions. Open the syllabus →](/courses/problem-solving-and-computational-thinking-for-kids)[![Problem Solving for Teens course thumbnail](/images/problem-solving-teens.webp)  BEBR / 02 Algorithms for secondary Graphs, sorting, search and efficiency, the ideas behind the harder Junior to Senior tasks. Open the syllabus →](/courses/problem-solving-dsa-masterclass-teens)[![Competitive Programming for Teens course thumbnail](/images/competitive-programming-teens.webp)  BEBR / 03 From Bebras to programming contests For students who want to turn puzzle skill into code, on the road to the Australian Informatics Olympiad. Open the syllabus →](/courses/competitive-programming-for-teens-course)

The challenge itself

## Who runs Bebras in Australia, and how it works

Everything in this section is from the Australian Maths Trust's Bebras page, read on 7 October 2026.

| Detail | What the AMT states |
| --- | --- |
| Challenge period | Monday 9 February to Sunday 8 March 2026, with entries closing Friday 6 March |
| Timing | 60 minutes for Middle Primary (Years 3 and 4); 45 minutes for all other divisions |
| Divisions | Middle Primary (Years 3 and 4), Upper Primary (5 and 6), Junior (7 and 8), Intermediate (9 and 10), Senior (11 and 12) |
| Questions | 15, a combination of multiple choice, integer and interactive responses |
| Delivery | Online; students choose any day in the period and must finish within the time allowed |
| Participation | Individually or in teams of up to four |
| Coding | "Coding skills are not required to complete the Bebras Challenge." |
| Topics | Vary each year |

The AMT describes Bebras as an international challenge "that involves over 2.9 million students from 60 countries". The name is Lithuanian for beaver, chosen by the founder, Professor Valentina Dagiene of the University of Vilnius, and tasks are assessed each year by the International Bebras Committee.

In Australia, Bebras began in 2014 and was delivered by CSIRO until 2023. From 2024 the Australian Maths Trust took it over. The main round runs in Term 1, and the AMT notes a follow-up event in Term 4 for international Bebras week.

Schools enter students through the Trust; families do not normally enter directly. Entry fees are set by the AMT in Australian dollars, so we do not print them here; ask your school or check the Trust's page.

Dates for 2027 had not been published when we checked. The 2026 pattern, a window across February and early March, is a reasonable guide to planning, but the Trust's page is the place to confirm the next challenge period.

Source: Australian Maths Trust, [Bebras Computational Thinking Challenge](https://amt.edu.au/bebras), read on 7 October 2026. We are independent of the AMT and of the International Bebras Committee.

Marks and awards

## How Bebras is scored, and what the awards mean

Difficulty decides how much each question is worth. A wrong answer and a blank score the same: zero.

| Item | AMT rule |
| --- | --- |
| Easy question | 6 marks |
| Medium question | 9 marks |
| Hard question | 12 marks |
| Wrong or unanswered | Zero |
| Highest possible | 135 marks |
| Excellence | 135 marks, with a certificate of excellence |
| High Distinction | 114 to 134 marks |
| Distinction | 102 to 113 marks |
| Credit | 87 to 101 marks |
| Merit | 60 to 86 marks |
| Participation | 0 to 59 marks |

The AMT does not say how many questions sit at each level. Five easy, five medium and five hard would give exactly 135, but other mixes add up too, so students should not count on any pattern. What matters for timing is simpler: a student who spends ten minutes on one 12-mark question has used more than a fifth of a 45-minute paper on it.

Because there is no penalty for a wrong answer, every question should get some answer before time runs out. That is not gaming the contest; it is reading its rules.

The award bands are fixed marks rather than percentiles, so a student can see exactly how far they are from the next band. Moving from Merit to Credit, for example, needs 87 marks, which is any combination of questions adding to that number.

We treat awards as a by-product. Students who enjoy the puzzles and understand the ideas behind them do well; students drilled on question types tend to stall when the topics change, and the AMT notes that they vary each year.

An original practice task

## Beavers at the gates: a sorting network puzzle

This task is ours, written in the Bebras style. It hides a real idea from computing, a sorting network, inside a story. Try it before reading the answers.

### The task

Four beavers stand in a row of four places, numbered 1 to 4 from left to right. At each gate, the beavers in two named places compare heights, and if the taller one is on the left they swap. The gates are checked in order.

Gate list A has five gates: places 1 and 2, then 3 and 4, then 1 and 3, then 2 and 4, then 2 and 3. Gate list B has only the first four of those gates. Question: does each list always finish with the beavers in order from shortest to tallest, whatever order they start in?

### The answer

List A always works. We checked all 24 possible starting orders of four beavers, and every one finishes sorted. Its five gates also run in three rounds, because the first two gates touch different places and so can happen at the same time, as can the next two.

List B fails. Leaving out the last gate breaks 16 of the 24 starting orders. Start with heights 1, 3, 2, 4 and no gate ever swaps anyone, yet the middle two are in the wrong order. For four items in this design, five comparators are needed and four are not enough.

| Gate list | Gates | Rounds | Starting orders sorted | Orders of 0s and 1s sorted |
| --- | --- | --- | --- | --- |
| A | 5 | 3 | 24 of 24 | 16 of 16 |
| B | 4 | 2 | 8 of 24 | 12 of 16 |

The last column is a shortcut worth knowing. If you only test lists made of 0s and 1s, there are 16 to try instead of 24, and the faulty list B is still caught: four of those sixteen come out unsorted. Students who notice that a smaller test can still find the bug are thinking the way Bebras rewards.

Task and results are ours, checked in Python over all 24 orderings and all 16 lists of 0s and 1s on 7 October 2026. The story follows the Bebras style but is not an AMT or Bebras question.

Getting ready

## How to prepare without drilling

The Trust publishes a large free archive. Used well, it is enough practice for most students.

### Bebras 365

The AMT describes it as a free resource with all past challenges, "more than 12 different challenges for each of the five divisions", open without a login.

### Mini Challenges

Short sets built around key algorithmic thinking skills, also free and available at any time, which suit a weekly practice habit.

### Teacher resources

The Trust states that teachers do not need to register for the challenge to use its resources.

The most useful preparation is talking through answers. After each past task, ask what idea was hidden in it: a search, a sort, a rule applied repeatedly, a way of encoding. The ideas repeat across years even when the stories change.

Timing practice helps older students. Try a full past challenge under the real limit, then look at which questions took longest and whether they were worth it.

Our classes teach the computational thinking itself: patterns, decomposition, algorithms and abstraction, with puzzles like the one above and with code for older students. We do not use or reproduce the AMT's papers in class beyond linking to its free archive.

Students who enjoy Bebras often go on to the Computational and Algorithmic Thinking competition and, with programming, the Australian Informatics Olympiad. Both are on our competitions calendar.

Bebras 365, Mini Challenges and teacher resources as described on the AMT's [Bebras page](https://amt.edu.au/bebras), read on 7 October 2026.

From puzzles to programs

## Four stages of computational thinking

Bebras sits at the start of a long path. Each stage keeps the one before it.

| Around | Stage | The sign it is secure |
| --- | --- | --- |
| Years 3 to 4 | 1. Following rules exactly | Applies a puzzle's rule without skipping steps |
| Years 5 to 6 | 2. Spotting the hidden idea | Says which computing idea a Bebras task is about |
| Years 7 to 9 | 3. Designing an approach | Explains why one strategy beats another |
| Years 9 to 12 | 4. Writing it as code | Turns a puzzle's method into a working program |

### If your child finds the puzzles hard

Bebras questions are meant to be unfamiliar. Reading the story twice and drawing it usually helps more than any trick.

Working in a team of up to four, which the AMT allows, is a good way to start.

### What comes next

The [Australian Informatics Olympiad page](/australian-informatics-olympiad-preparation) explains the step to programming contests.

The [AMT competitions page](/australian-maths-trust-amc-aio-cat-preparation) compares the AMC, AIO and CAT.

The catalogue

## Nine courses for puzzle-minded students

Grouped by stage. Every card opens a full syllabus.

I

### Primary

Logic and patterns

BEBR / P / 01

#### Computational thinking

Puzzles that teach algorithms.

[Open the syllabus](/courses/problem-solving-and-computational-thinking-for-kids)

BEBR / P / 02

#### Scratch programming

Turning puzzle rules into visual code.

[Open the syllabus](/courses/scratch-programming-complete-course)

BEBR / P / 03

#### Mental maths

Number sense for integer-answer questions.

[Open the syllabus](/courses/mental-maths-mastery-kids)II

### Secondary

Algorithms and code

BEBR / S / 01

#### Python for teens

A language for testing ideas quickly.

[Open the syllabus](/courses/python-complete-masterclass-teens)

BEBR / S / 02

#### Algorithms and data structures

Sorting, searching and graphs, properly.

[Open the syllabus](/courses/problem-solving-dsa-masterclass-teens)

BEBR / S / 03

#### Maths through coding

Patterns and counting with Python.

[Open the syllabus](/courses/maths-through-coding)III

### Competition track

For the keenest

BEBR / X / 01

#### Competitive programming

Contest problems, judged by code.

[Open the syllabus](/courses/competitive-programming-for-teens-course)

BEBR / X / 02

#### Competition maths

Counting and logic for maths contests.

[Open the syllabus](/courses/olympiad-competition-mathematics-mastery)

BEBR / X / 03

#### C++ for teens

A fast language used in olympiads.

[Open the syllabus](/courses/cpp-programming-masterclass-for-teens)

How lessons run

## Live problem-solving classes, timed for Australia

Our teachers work from India. During daylight saving, a 4.30 pm lesson in Melbourne starts at 11 am India time, so after-school puzzle classes are easy for us to run.

Term 4 and the holidays

A good time to start before the February challenge.

Weekly after school

Steady practice through Term 1.

Weekend sessions

Team practice for groups of friends.

### Draw the story

Every task is sketched before it is solved.

### Name the idea

Students say which computing concept the puzzle hides.

### Groups of fifteen to twenty

Matched by stage rather than only by year.

### One-to-one option

For students aiming at the harder divisions.

### Notes for parents

One idea learned and one puzzle to try at home.

### No award promises

We teach thinking; the result is the student's.

Student work

## Projects our students have shared

Made because learners wanted to, with no contest attached. More are in the [student labs](/student-labs).

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

Australian families pay monthly in US dollars, the same rate we use in every country outside India, with no deposit and the freedom to stop at any month end. Bebras entry is arranged and paid through schools, separately.

Free first class

USD 0

no card required

- A real lesson with a teacher
- A view of your child's problem-solving level
- No card needed

Book it

Group batch

USD 100

a month, billed in US dollars

- Fifteen to twenty students at one stage
- The same teacher every week
- Puzzles discussed in depth
- A certificate at the end

Start here

One to one

USD 150

a month, billed in US dollars

- A teacher for one student
- Aimed at a chosen division
- A weekly time that suits you

Enquire

What families say

## Rated 4.9 across 547 Google reviews

Parents' words, quoted exactly from Google.

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

Questions about Bebras

## What families and students ask

### What is the Bebras Challenge?

An international computational thinking challenge. Students solve short story-based tasks that hide ideas from computer science, without needing to code. In Australia the Australian Maths Trust runs it.

### Who can enter Bebras in Australia?

Students in Years 3 to 12, in five divisions from Middle Primary to Senior. Entry is normally arranged through schools.

### When is Bebras held?

In Term 1. In 2026 the challenge period was 9 February to 8 March. Check the AMT's page for the next period.

### How long is the Bebras Challenge?

60 minutes for Middle Primary (Years 3 and 4) and 45 minutes for all other divisions, with 15 questions.

### Does Bebras need coding?

No. The AMT states that coding skills are not required. Tasks test logical and algorithmic thinking.

### How is Bebras scored?

Easy questions are worth 6 marks, medium 9 and hard 12, up to 135. Wrong and unanswered questions score zero.

### Can students work in teams?

Yes. The AMT says students can take part individually or in teams of up to four.

### What is a sorting network?

A fixed sequence of compare-and-swap steps that puts items in order whatever order they start in. Some steps can happen at the same time, which is why sorting networks are used in hardware.

### Where can students practise?

The AMT's free Bebras 365 archive holds past challenges for each division, and its Mini Challenges are short skill sets. Our classes teach the underlying thinking.

### Are you part of the AMT or Bebras?

No. We are an independent online school preparing students through computational thinking lessons.

Related pages

## More competitions for Australian students

The full calendar, the next contests up, and the curriculum underneath.

### [Competitions calendar](/australian-coding-maths-and-ai-competitions-calendar)

Every Australian contest, month by month.

### [AMC, AIO and CAT preparation](/australian-maths-trust-amc-aio-cat-preparation)

The Trust's other competitions compared.

### [Australian Informatics Olympiad](/australian-informatics-olympiad-preparation)

Where Bebras thinking meets code.

### [Digital Technologies help](/australian-curriculum-digital-technologies-help)

The curriculum behind the puzzles.

### [Coding games for kids](/coding-games-for-kids-australia)

Games that build the same thinking.

### [Coding classes in Australia](/coding-classes-in-australia)

Our main Australian page.

Start here

## Book a free computational thinking class

Tell us the year level and whether Bebras is coming up. The free class works through puzzles like the one on this page and ends with honest advice on preparation.

Prefer to explore? The [course atlas](/course-atlas) lists every course, and [how we teach](/how-we-teach) describes a lesson.

[WhatsApp us](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20computational%20thinking%20class%20to%20prepare%20for%20Bebras.) · [+91 91233 66161](tel:+919123366161) · [connect@modernagecoders.com](mailto:connect@modernagecoders.com)

WhatsApp usually brings the quickest reply. Our number starts +91 because the school runs from India; we keep no Australian office.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/bebras-challenge-australia-practice*
