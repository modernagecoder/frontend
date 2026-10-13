---
title: "Junior Mathematical Olympiad Preparation | JMO, Year 8 and Below"
description: "Preparing for the UKMT Junior Mathematical Olympiad: six questions in two hours, who qualifies from the JMC, and the jump from choosing an answer to proving one."
canonical: https://learn.modernagecoders.com/junior-mathematical-olympiad-preparation
source: src/pages/junior-mathematical-olympiad-preparation.html
---
> Preparing for the UKMT Junior Mathematical Olympiad: six questions in two hours, who qualifies from the JMC, and the jump from choosing an answer to proving one.

In short

The Junior Mathematical Olympiad is run by the UK Mathematics Trust and is described by UKMT as a "2 hour Challenge consisting of 6 Olympiad style questions". It falls on 15 June 2027. Eligibility is "England, Wales and Overseas: Year 8 and below", "Scotland: S2 or below" and "Northern Ireland: Year 9 or below". Entry is by invitation based on a qualifying score in the Junior Mathematical Challenge, sat on 5 May 2027, or by discretionary entry; UKMT says around 1,200 students qualify from the JMC each year and that automatic qualifiers pay nothing. The Junior Kangaroo falls on the same day, 15 June 2027. Schools enter pupils; families cannot, and neither can we. What we teach is the mathematics and the writing the paper asks for, live online. The first class is free; a group place is USD 100 a month and one-to-one teaching USD 150.

Where to start

## Three courses for a Year 7 or Year 8 olympiad candidate

Choose by what the pupil can already write down, not by what they can work out in their head.

[![Maths Olympiad & Competition Course course thumbnail](/images/olympiad-competition-maths.webp)  JMO / 01 Olympiad and competition maths The core: unfamiliar problems, and solutions written so that someone else is convinced. Open the syllabus →](/courses/olympiad-competition-mathematics-mastery)[![Middle School Mathematics Mastery course thumbnail](/images/middle-school-maths.webp)  JMO / 02 Middle school maths mastery The algebra, geometry and number the olympiad questions are built out of. Open the syllabus →](/courses/comprehensive-middle-school-mathematics-mastery)[![Maths Through Coding course thumbnail](/images/maths-through-coding.webp)  JMO / 03 Maths through coding For the pupil who likes checking a claim on a thousand cases before trying to prove it. Open the syllabus →](/courses/maths-through-coding)

The paper

## Six questions, two hours, and no options

Facts read at UKMT's own pages on 20 September 2026.

| Part | What UKMT says | What it means for a pupil |
| --- | --- | --- |
| Format | A "2 hour Challenge consisting of 6 Olympiad style questions" | Twenty minutes a question, and every one written out in full |
| Date | 15 June 2027 | Six weeks after the Junior Mathematical Challenge on 5 May 2027 |
| England, Wales and Overseas | "Year 8 and below" | Usually Year 8, sometimes a very strong Year 7 or younger |
| Scotland | "S2 or below" | The Scottish stages, not translated year groups |
| Northern Ireland | "Year 9 or below" | One year higher than England and Wales, matching the NI school year |
| How to get in | "by invitation based on a qualifying JMC score, or by discretionary entry" | The Challenge in May is the normal route |
| How many | "Around 1,200 students qualify from the JMC each year" | A small paper: the whole country fits in a large school hall |
| Cost | Automatic qualifiers are free; discretionary entries carry a fee set by UKMT | We do not print the fee; UKMT publishes it in pounds |

The Junior Kangaroo is sat on the same day, 15 June 2027. It is the other follow-on from the Junior Mathematical Challenge and it is multiple choice, which makes it a different kind of afternoon entirely. A pupil and a teacher should know which paper is coming, because preparing for one is not preparing for the other.

Around 1,200 qualifiers is worth holding onto as well. Whatever a pupil scores in June, being in that room at all puts them among a few hundred per year group nationally.

Two hours for six questions is generous by exam standards and tight by olympiad standards. Most pupils will not finish all six, and that is normal and expected: a full, correct, well-written solution to three questions is a good paper.

The temptation this creates is the one to resist. A pupil who writes hurried partial answers to all six usually scores less than one who writes three properly, because olympiad marking rewards complete arguments, not coverage.

Sources: [UKMT competitions calendar](https://ukmt.org.uk/competitions) and the [Junior Mathematical Olympiad page](https://ukmt.org.uk/junior-challenges/junior-mathematical-olympiad), read 20 September 2026. Modern Age Coders is not connected with the UK Mathematics Trust.

The method

## Forty examples are not a proof

The single idea that separates a Challenge pupil from an Olympiad pupil, in one worked case.

Take the expression **n × n + n + 41** and try whole numbers. At n = 0 it gives 41, a prime. At n = 1, 43, prime. At n = 2, 47, prime. Keep going. It is prime at n = 3, at n = 10, at n = 25, at n = 39. Forty values in a row, every single one prime. Any reasonable twelve-year-old would now say the rule always gives primes, and any reasonable twelve-year-old would be wrong.

| n | n × n + n + 41 | Prime? |
| --- | --- | --- |
| 0 | 41 | Yes |
| 1 | 43 | Yes |
| 10 | 151 | Yes |
| 25 | 691 | Yes |
| 39 | 1601 | Yes, the fortieth in a row |
| 40 | 1681 | No: 1681 is 41 times 41 |

### Why it fails at forty

Put n = 41 in and every term has a factor of 41; at n = 40 the same thing happens a step early. Once you see it, the failure is obvious. Before you see it, forty examples look like certainty.

### What the JMC teaches

That the right answer is among five printed options, so checking a couple of cases and choosing is a good strategy. It is a good strategy, for that paper.

### What the JMO wants

A sentence explaining why nothing else is possible. Examples can support an argument; they can never be one.

This is the conversation to have in the week after the Challenge results arrive, and it takes about ten minutes. Most pupils find it genuinely startling, which is the point: the habit of trying cases until convinced is exactly what has served them well until now.

The follow-up question is the useful one. If forty cases are not enough, what would be? The answers a twelve-year-old can reach are already real mathematics: try every possibility when there are few enough, split into cases that cover everything, or find the reason rather than the pattern.

Our demonstration was checked in code before it went on this page, which is itself the smaller half of the lesson. Testing a claim on a thousand cases is a good way to decide whether to believe it. It is not a way to prove it, and the pupils who go furthest learn to want both.

For a pupil who enjoys that side, the same instinct runs straight into programming: the [British Informatics Olympiad](/british-informatics-olympiad-preparation) is built on it.

The values were computed by us on 20 September 2026 and checked individually: every n from 0 to 39 gives a prime, and n = 40 gives 1681, which is 41 squared.

How to practise

## Write one solution properly, not six answers quickly

Olympiad preparation looks slow from the outside and is. Six weeks is enough if it is spent on the right thing.

| Worth doing | Why | Not worth doing |
| --- | --- | --- |
| Writing full solutions to problems already solved | The writing is the part being marked, and it is the part nobody has practised | Working more problems and never writing any up |
| Reading UKMT's published solutions | They model the standard of explanation expected | Only checking whether the final answer matched |
| Working one hard problem for an hour | Olympiad questions are meant to resist a first look | Twenty quick questions to feel productive |
| Learning to say "suppose not" | Half of junior olympiad questions yield to assuming the opposite | Memorising named techniques by rote |
| Stopping when it stops being fun | A tired twelve-year-old learns nothing and remembers the mood | Daily drilling in the fortnight before |

The most common mistake families make is to buy harder material. The mathematics in a JMO question is rarely beyond a good Year 8 pupil; it is the packaging that is unfamiliar. A pupil who can already do the arithmetic and the algebra needs practice at unpacking, not at topics.

The second most common is to treat June as an exam. It is not one: nothing depends on it, no school place turns on it, and a pupil who enjoys it will come back next year at a higher level.

UKMT publishes past papers and full solutions free on its own site. That archive is better than any purchased course, and it is the reason we do not reproduce a single UKMT question here or in our lessons: the real ones are already available from the people who wrote them.

What a teacher adds is reading. A pupil can tell whether their answer is right; they usually cannot tell whether their explanation is convincing, and that is the thing worth an hour a week of somebody else's attention.

The route

## Where the JMO sits, and what follows it

The junior olympiad is one rung of a ladder that reaches the international olympiad, and almost nobody climbs it in a straight line.

| Round | Date | Who sits it |
| --- | --- | --- |
| Junior Mathematical Challenge | 5 May 2027 | Year 8 and below, entered by the school |
| Junior Kangaroo | 15 June 2027 | A follow-on from the Challenge, multiple choice |
| Junior Mathematical Olympiad | 15 June 2027 | Around 1,200 qualifiers, six written questions |
| Intermediate Mathematical Challenge | 27 January 2027 | The next year group up |
| Cayley, Hamilton and Maclaurin | 18 March 2027 | The intermediate olympiads, by school year |

A Year 8 pupil who sits the JMO in June moves into the intermediate rounds the following year, where the same habit of writing proofs is worth even more. The Cayley, Hamilton and Maclaurin papers are the next stop, split by school year rather than by score.

Nothing about the ladder is compulsory and no rung is a verdict. Plenty of strong mathematicians sit one olympiad, find it uncomfortable, and come back to it at sixteen.

For a pupil in Scotland, the [Scottish Mathematical Challenge](/scottish-mathematical-challenge-practice) runs alongside all of this on its own timetable and marks explanations too, which makes the two a good pairing.

And the whole year, every competition we could confirm with its organiser, is laid out on the [competitions calendar](/uk-coding-maths-and-ai-competitions-calendar).

Getting ready

## Four rungs from a right answer to a closed argument

Progress here is measured in what a pupil writes, not in topics covered.

| Stage | Rung | The sign it is secure |
| --- | --- | --- |
| Year 6 to 7 | 1. Confident arithmetic | Algebra and fractions do not slow the thinking down |
| Year 7 | 2. Unfamiliar problems | Will sit with a problem for twenty minutes without asking for a hint |
| Year 7 to 8 | 3. Written solutions | Writes an explanation a classmate could follow without being told |
| Year 8 | 4. Closed arguments | Can say why no other answer is possible, not just that this one works |

### If June is close

Take three problems the pupil has already solved and write them up properly. That is the fastest available gain, and it takes an evening.

Do not add topics in the last fortnight. Nothing in a junior olympiad needs content a Year 8 pupil has not met.

### After the JMO

The intermediate rounds follow the next year, and the writing habit is worth more at every level above this one.

Pupils who enjoy proving things often take to programming for the same reason, which is what [maths through coding](/courses/maths-through-coding) is built around.

The full list

## Maths and computing courses for junior olympiad candidates

Arranged by what a pupil is ready for, with the syllabus behind every card.

I

### The mathematics

Years 6 to 9

JMO / M / 01

#### Olympiad and competition maths

Unfamiliar problems and the writing that finishes them.

[Open the syllabus](/courses/olympiad-competition-mathematics-mastery)

JMO / M / 02

#### Middle school maths mastery

Pre-algebra and geometry, argued not drilled.

[Open the syllabus](/courses/comprehensive-middle-school-mathematics-mastery)

JMO / M / 03

#### Primary maths, Years 1 to 5

For a younger pupil whose foundations still wobble.

[Open the syllabus](/courses/elementary-mathematics-complete-masterclass)II

### Speed and accuracy

For the Challenge rounds

JMO / S / 01

#### Mental maths for kids

Calculation that stops costing thinking time.

[Open the syllabus](/courses/mental-maths-mastery-kids)

JMO / S / 02

#### Vedic maths

Speed methods for the arithmetic underneath.

[Open the syllabus](/courses/vedic-maths-course-speed-calculation-mastery)

JMO / S / 03

#### 11 plus maths preparation

Timed upper primary work, for a younger candidate.

[Open the syllabus](/courses/11-plus-maths-preparation-course-uk)III

### Checking claims

Where maths meets code

JMO / C / 01

#### Maths through coding

Test a claim on a thousand cases, then prove it.

[Open the syllabus](/courses/maths-through-coding)

JMO / C / 02

#### Python and AI for kids

A first typed language for a curious Year 7.

[Open the syllabus](/courses/python-ai-kids-masterclass)

JMO / C / 03

#### Algorithms and data structures

Reasoning about method, in code.

[Open the syllabus](/courses/problem-solving-dsa-masterclass-teens)IV

### Looking ahead

Years 9 and up

JMO / N / 01

#### High school mathematics

Algebra through to calculus, for a pupil racing ahead.

[Open the syllabus](/courses/complete-high-school-mathematics-mastery)

JMO / N / 02

#### GCSE maths

Foundation and higher, to the board the school uses.

[Open the syllabus](/courses/gcse-mathematics-mastery)

JMO / N / 03

#### Python from start to finish

For the pupil who wants to build as well as prove.

[Open the syllabus](/courses/python-complete-masterclass-teens)

How lessons run

## An hour a week, with somebody reading the write-up

Lessons are live on video from India, where the clock runs five and a half hours ahead of Britain in winter and four and a half in summer. Times are agreed and kept in UK time.

Early weekday evening

The usual slot for Years 7 and 8.

Weekend morning

For a long session on one problem.

Holiday weeks

Short and frequent, while school is out.

### Solutions read closely

The teacher reads what the pupil wrote and says where a reader would stop being convinced.

### Our own problems

Written by us in the olympiad spirit. UKMT past papers stay where UKMT publishes them.

### Fifteen to twenty pupils

Small enough for every solution to be looked at, large enough for two methods to meet.

### Time to be stuck

Being stuck for twenty minutes is the work, not a sign that something is wrong.

### One to one on request

For a pupil working far above their year, or one who will not speak in a group.

### No result promised

No qualification, medal or score is promised by us, and nobody honest promises one.

Student work

## What our students build

Four published projects by students at our school, none of them competition entries. More on the [student labs](/student-labs) page.

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

A monthly rate in US dollars, the same outside India everywhere. No joining fee and no fixed term.

Free first class

USD 0

no card required

- A real lesson on a real problem
- An honest read on the level
- No card details

Book it

Group batch

USD 100

a month, billed in US dollars

- Fifteen to twenty pupils at one level
- The same teacher each week
- Written solutions marked
- A certificate at the end

Start here

One to one

USD 150

a month, billed in US dollars

- One pupil with one teacher
- Aimed at the specific gap
- For pupils far ahead of their year

Enquire

What families say

## Rated 4.9 across 547 Google reviews

From our Google profile, in families' own words.

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

Junior Mathematical Olympiad questions

## What parents and pupils ask

### When is the Junior Mathematical Olympiad in 2027?

UKMT's competitions calendar gives 15 June 2027, six weeks after the Junior Mathematical Challenge on 5 May 2027.

### Who is eligible?

UKMT publishes it by nation: Year 8 and below in England, Wales and overseas; S2 or below in Scotland; Year 9 or below in Northern Ireland.

### How does a pupil qualify?

By invitation based on a qualifying score in the Junior Mathematical Challenge, or by discretionary entry. UKMT says around 1,200 students qualify from the JMC each year, and that automatic qualifiers pay nothing.

### What is the paper like?

UKMT describes a two-hour challenge of six olympiad-style questions. There is nothing to choose from: each answer is written out in full, and the reasoning is what is marked.

### Is it harder than the Junior Mathematical Challenge?

It is different rather than simply harder. The content is within reach of a strong Year 8 pupil; what is new is being asked to prove that no other answer is possible.

### How many questions should a pupil expect to finish?

Not all six, usually. Three complete, well-written solutions is a good paper, and hurried partial answers to all six generally score less.

### What else falls on the same day?

The Junior Kangaroo, also on 15 June 2027, which is the multiple-choice follow-on from the Junior Mathematical Challenge. A pupil should know which paper they are sitting.

### How should we prepare?

By writing up solutions to problems the pupil has already solved, reading UKMT's published solutions for the standard of explanation, and spending a long time on single problems. Not by adding topics.

### Do you use UKMT past papers?

No. UKMT publishes its own past papers and full solutions free, which is the right place for them. Our practice problems are written by us in the same spirit.

### What do classes cost?

The first lesson is free. After it, a group place is USD 100 a month and one-to-one teaching USD 150, with nothing to join and no minimum term.

Related pages

## More for young mathematicians

The rungs above and below, and the whole competition year in one table.

### [UK competitions calendar 2026-27](/uk-coding-maths-and-ai-competitions-calendar)

Every contest we could confirm, month by month.

### [Primary Maths Challenge](/primary-maths-challenge-practice)

The rung below, for ages 9 to 11.

### [Scottish Mathematical Challenge](/scottish-mathematical-challenge-practice)

Marks for the explanation, on a Scottish timetable.

### [British Informatics Olympiad](/british-informatics-olympiad-preparation)

The same instinct, applied to programs.

### [Coding classes in the UK](/coding-classes-in-united-kingdom)

Four school systems, and every UK page.

### [Choosing an online class](/best-online-coding-classes-uk)

What to ask any provider before paying.

Start here

## Book a free olympiad lesson

Tell us the year group and whether your child has sat the Challenge. The free lesson works on one real problem, all the way to a written solution.

Rather read first? Syllabuses sit on the [course pages](/courses), the teaching method on [how we teach](/how-we-teach), and the order of topics on the [roadmap](/coding-roadmap).

[WhatsApp us](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20my%20child%20has%20qualified%20for%20the%20Junior%20Mathematical%20Olympiad%20and%20I%20would%20like%20a%20free%20maths%20class.) · [+91 91233 66161](tel:+919123366161) · [connect@modernagecoders.com](mailto:connect@modernagecoders.com)

WhatsApp costs a UK mobile nothing and usually reaches us first. Our number is Indian, as we say on every page, and there is no office in Britain.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/junior-mathematical-olympiad-preparation*
