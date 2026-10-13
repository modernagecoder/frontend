---
title: "SACE Mathematical Methods Tutoring | Stage 2 Online"
description: "SACE Mathematical Methods tutoring online for South Australian students: six topics, skills and applications tasks, the investigation and the 130-minute exam."
canonical: https://learn.modernagecoders.com/sace-mathematical-methods-tutoring
source: src/pages/sace-mathematical-methods-tutoring.html
---
> SACE Mathematical Methods tutoring online for South Australian students: six topics, skills and applications tasks, the investigation and the 130-minute exam.

In short

SACE Stage 2 Mathematical Methods (code 2MHS20, 20 credits) covers six topics: further differentiation, discrete random variables, integral calculus, logarithmic functions, continuous random variables and sampling with confidence intervals. Skills and applications tasks count 50 per cent, a mathematical investigation 20 per cent, and a 130-minute external examination 30 per cent.

Where to begin

## Three courses beneath Stage 2 Methods

Calculus fluency, then probability, then the algebra that both depend on.

[![AP Calculus AB & BC Exam Prep, Live Online, Score 5 Goal course thumbnail](/images/ap-calculus-prep.webp)  SAMM / 01 Calculus course Rates of change, the chain rule, integrals and the area under a curve: the content behind three of the six topics. Open the syllabus →](/courses/ap-calculus-exam-prep)[![Statistics & Probability course thumbnail](/images/statistics-probability-maths.webp)  SAMM / 02 Statistics and probability Random variables, the normal distribution and confidence intervals, the statistical half of the subject. Open the syllabus →](/courses/statistics-probability-maths-course)[![Algebra Foundations course thumbnail](/images/algebra-foundations.webp)  SAMM / 03 Algebra foundations Logarithm laws, indices and equation solving, the place most marks quietly leak. Open the syllabus →](/courses/algebra-foundations-masterclass)

Inside the subject outline

## Six topics in two strands, joined by modelling

Everything in this section comes from the SACE Board subject outline for Stage 2 Mathematical Methods, consulted on 7 October 2026. It treats calculus and statistics as the two areas and modelling as the link.

| Topic | Strand | What it builds |
| --- | --- | --- |
| 1. Further differentiation and applications | Calculus | Differentiation rules, exponential and trigonometric functions, the second derivative |
| 2. Discrete random variables | Statistics | Probability distributions, the Bernoulli and binomial distributions, expected value and variance |
| 3. Integral calculus | Calculus | Antidifferentiation, definite integrals and areas |
| 4. Logarithmic functions | Calculus | Logarithms, their derivatives and their use in modelling |
| 5. Continuous random variables and the normal distribution | Statistics | Probability density functions and the normal model |
| 6. Sampling and confidence intervals | Statistics | How samples behave and how far an estimate can be trusted |

The outline says the suggested order of topics is a guide only, but students study all six. If Methods is studied in conjunction with Specialist Mathematics, it recommends thinking about sequencing, because Specialist assumes some Methods content as it goes.

Each topic is written as key questions and key concepts beside considerations for teaching. Those considerations are a guide, but the outline notes they can provide contexts for examination questions, so they are worth reading as a student.

The outline describes Methods as a foundation for further study in mathematics, economics, computer sciences and the sciences. That is one reason it suits students who code: the statistics strand is the mathematics underneath data science, and the calculus strand underneath optimisation.

Specialist Mathematics, the outline adds, is designed to be studied together with Methods. Methods can be taken on its own, but the reverse is not intended.

Sources: [SACE Board, Mathematical Methods overview](https://www.sace.sa.edu.au/web/mathematical-methods/overview) (code, credits and weightings); Stage 2 Mathematical Methods Subject Outline (docx) linked from that page. Read on 7 October 2026.

How the result is built

## Skills tasks, one investigation and a 130-minute exam

Every weight, limit and permitted material below is copied from the outline. The 2026 date comes from the SACE Board examinations timetable for 2026.

| Assessment type | Weight | Conditions in the outline |
| --- | --- | --- |
| AT1 Skills and Applications Tasks (school) | 50 per cent | Five or six tasks under the direct supervision of the teacher; electronic technology and up to one A4 sheet of handwritten notes on one side may be used at the teacher's discretion |
| AT2 Mathematical Investigation (school) | 20 per cent | One investigation with minimal teacher direction; report a maximum of 12 A4 pages if written, or the equivalent in multimodal form |
| AT3 Examination (external) | 30 per cent | 130 minutes; formula sheet provided; two unfolded A4 sheets (four sides) of handwritten notes; approved electronic technology |

The outline changed for 2025 onwards. Students now complete seven or eight assessments (five or six skills tasks, one investigation, one examination) instead of eight. The earlier rule that one skills task had to be done without a calculator or notes was removed, and the investigation limit fell from 15 A4 pages to 12.

The 2026 examinations timetable lists Mathematical Methods (2MHS20) on Monday 2 November, as a 130-minute paper. General Mathematics sits on the same day.

Assessment design criteria come in two groups. Concepts and techniques run from CT1 to CT4, including the use of electronic technology. Reasoning and communication run from RC1 to RC5, ending with the development, testing and proof of valid conjectures, which must be offered in at least one school assessment task.

Performance standards describe five levels of achievement, A to E. The outline also warns students to be discerning with technology in the examination, which in practice means knowing when a calculator answer needs interpreting.

Assessment: Stage 2 Mathematical Methods Subject Outline, evidence of learning and assessment types. Date: SACE Board, Examinations timetable for 2026 (PDF) from [the exam timetable page](https://www.sace.sa.edu.au/studying/assessment/exams/timetable). Read on 7 October 2026.

A worked lesson

## A die labelled 1, 1, 2, 3, 4, 5

The outline suggests dice with alternative labelling, such as 1, 1, 2, 3, 4, 5 on the six sides, for building relative frequency tables. It is a quietly excellent teaching object. The calculations are ours; the simulation used a fixed random seed so it can be repeated.

### Expected value

Add the faces and divide by six: 16 over 6, which is 8/3, about 2.667. A standard die gives 3.5. Relabelling one face pulls the centre of the distribution down.

### Variance

The mean of the squares is 56 over 6, which is 28/3. Subtract the square of the mean, 64/9, and the variance is 20/9, about 2.222. The standard deviation is about 1.491.

### Two dice

Rolling two relabelled dice gives a total of 8 or more in only 6 of the 36 equally likely pairs, compared with 15 of 36 for standard dice.

| Rolls | Simulated mean | Distance from 8/3 |
| --- | --- | --- |
| 10 | 3.000 | 0.333 |
| 100 | 3.050 | 0.383 |
| 1,000 | 2.710 | 0.043 |
| 10,000 | 2.639 | 0.028 |
| 100,000 | 2.659 | 0.008 |

The table is the point of the lesson. After 100 rolls the simulated mean was further from the true value than after 10, which surprises students who expect steady improvement. The approach to 8/3 is real but noisy, and it only becomes convincing over thousands of rolls. That is the behaviour Topic 6 later formalises with confidence intervals.

The variance calculation is where marks go. Students often average the squared faces and stop, or square the mean and subtract in the wrong order. Writing E(X squared) and the square of E(X) on separate lines, then subtracting, makes the mistake visible.

The two-dice count rewards listing. Of the 36 ordered pairs, the totals of 8 or more are (3, 5), (5, 3), (4, 4), (4, 5), (5, 4) and (5, 5). Counting them by hand once makes the binomial and distribution questions that follow feel concrete instead of symbolic.

A few lines of Python reproduce every number here, which is how we check worked examples before teaching them. Students who write that check themselves understand a probability distribution as a list of outcomes and weights, not as a formula to memorise.

Alternative labelling suggestion: Stage 2 Mathematical Methods Subject Outline, Topic 2, Subtopic 2.1. Expected value, variance, pair counts and the seeded simulation are our own calculations, checked on 7 October 2026.

The 20 per cent investigation

## How we help with the investigation: around it, never inside it

The investigation is meant to be the student's own work with minimal teacher direction. The outline's description of a typical report is summarised below, together with the rule that shapes our tutoring.

| Part | What the outline describes |
| --- | --- |
| Problem | An outline of the problem and its context |
| Method | The method required to find a solution, in terms of the mathematical model or strategy used |
| Application | Relevant data or information, calculations and results using appropriate representations |
| Analysis | Interpretation of results, including their reasonableness and limitations |
| Conclusion | Results and conclusions in the context of the problem |
| Length | A maximum of 12 A4 pages if written, minimum font size 10, excluding bibliography and appendices |

We teach modelling, technology use and written reasoning with problems we invent, like the relabelled die, and we teach students to test a conjecture before claiming it. We never choose a student's investigation topic, never check or edit a draft, and never solve a skills and applications task. The work, and the result, belong to the student.

Source: Stage 2 Mathematical Methods Subject Outline, Assessment Type 2: Mathematical Investigation, read on 7 October 2026.

Getting ready for Stage 2

## A staircase from Year 10 into Stage 2 Methods

Where a student joins the staircase is decided by how fluent their algebra is, not by the calendar.

| Stage | Step | How you know it is done |
| --- | --- | --- |
| Year 10 | 1. Algebra | Rearranges, factorises and solves cleanly, with logarithm laws understood rather than memorised |
| Stage 1 | 2. Functions | Sketches exponential and trigonometric functions from their rules |
| Early Stage 2 | 3. Calculus | Differentiates and integrates with the chain rule and explains each step |
| Later Stage 2 | 4. Inference | States what a confidence interval does and does not say about a population |

### If calculus is the worry

Practise derivatives by hand in short, timed sets before using technology, so the technology confirms an answer instead of producing one.

Most calculus marks lost in Stage 2 are algebra slips, so repairing algebra repairs the whole topic.

### If statistics is the worry

Simulate before you calculate. A short program that rolls, samples or draws makes every distribution concrete.

Students taking both maths subjects will find the next layer on [SACE Specialist Mathematics](/sace-specialist-mathematics-tutoring).

The catalogue

## Nine courses for Methods students

Grouped by strand. Every card opens a full syllabus.

I

### Calculus

Topics 1, 3 and 4

SAMM / CA / 01

#### Calculus course

Rates, gradients and areas, argued step by step.

[Open the syllabus](/courses/ap-calculus-exam-prep)

SAMM / CA / 02

#### Precalculus

Exponential, logarithmic and trigonometric functions.

[Open the syllabus](/courses/ap-precalculus-exam-prep-course)

SAMM / CA / 03

#### University mathematics

First-year maths for students who want a preview.

[Open the syllabus](/courses/college-mathematics-complete-masterclass)II

### Statistics

Topics 2, 5 and 6

SAMM / ST / 01

#### Statistics and probability

Random variables, the normal model and inference.

[Open the syllabus](/courses/statistics-probability-maths-course)

SAMM / ST / 02

#### AP Statistics

A parallel course with extra sampling practice.

[Open the syllabus](/courses/ap-statistics-maths-exam-prep-course)

SAMM / ST / 03

#### Data analytics mathematics

Statistics applied to real data sets.

[Open the syllabus](/courses/data-analytics-mathematics-masterclass)III

### Foundations and tools

Algebra and technology

SAMM / FT / 01

#### Algebra foundations

The algebra underneath every topic.

[Open the syllabus](/courses/algebra-foundations-masterclass)

SAMM / FT / 02

#### High school mathematics

Senior-years maths across the board.

[Open the syllabus](/courses/complete-high-school-mathematics-mastery)

SAMM / FT / 03

#### Maths through coding

Small programs that test a result before the proof.

[Open the syllabus](/courses/maths-through-coding)

How lessons run

## Methods lessons on Adelaide time

Lessons are live, taught by our tutors in India. Adelaide is four hours ahead of India time in winter and five hours ahead in daylight saving, which runs from 4 October 2026 to 4 April 2027 on the IANA time zone database. A 4.30 pm lesson in Adelaide in summer is 11.30 am India time.

Weekday after school

Steady weekly work across the six topics.

Weekend morning

Longer sessions for timed exam-style sets.

School holidays

Revision blocks before November.

### Reasoning on paper

Every step written, because the criteria reward communication.

### Simulate, then prove

Short programs check results before the algebra explains them.

### Technology with judgement

Calculator answers interpreted, never just copied.

### Groups

Fifteen to twenty students at one level, explaining methods aloud.

### One-to-one sessions

For one topic that needs repair before a task.

### No grade forecasts

We never predict a SACE grade or an ATAR.

Student work

## What our students build in their own time

Coding projects students made outside school, never assessed work. See them in our [student labs](/student-labs).

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

Methods tutoring is billed monthly in US dollars, the same rate for every family outside India, with no joining fee and no commitment past the current month.

Free first class

USD 0

no card required

- A full maths lesson with a tutor
- An honest read on what to fix first
- No card details

Book it

Group batch

USD 100

a month, billed in US dollars

- Fifteen to twenty students at one level
- The same tutor each week
- Practice marked and talked through
- A certificate at the end

Start here

One to one

USD 150

a month, billed in US dollars

- A tutor for one student
- Built around one hard topic
- Common in the weeks before the exam

Enquire

What families say

## Rated 4.9 across 547 Google reviews

Reviews quoted exactly as families and students wrote them on Google.

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

Questions about Methods

## Stage 2 Methods questions we are asked

### What is SACE Mathematical Methods?

It is a 20-credit Stage 2 subject, code 2MHS20, covering calculus and statistics across six topics, linked by mathematical modelling. School assessment counts 70 per cent and a 130-minute external examination 30 per cent.

### What changed in the outline from 2025?

Students complete seven or eight assessments instead of eight, the rule that one skills task had to be done without a calculator or notes was removed, and the investigation limit dropped from 15 A4 pages to 12.

### What can I take into the Methods exam?

A formula sheet is provided, and students may take two unfolded A4 sheets (four sides) of handwritten notes and approved electronic technology.

### When is the 2026 Mathematical Methods exam?

The SACE Board examinations timetable for 2026 lists Mathematical Methods on Monday 2 November, as a 130-minute paper.

### What is expected value?

The long-run average of a random variable, found by multiplying each outcome by its probability and adding. For a die labelled 1, 1, 2, 3, 4, 5 it is 8/3, about 2.667.

### How long can the investigation be?

A maximum of 12 A4 pages if written, or the equivalent in multimodal form, excluding any bibliography and appendices, with a minimum font size of 10.

### Do I need Methods to take Specialist Mathematics?

The outline says Specialist Mathematics is designed to be studied together with Mathematical Methods. Methods can be studied as a single subject.

### Will you help with my investigation?

We teach modelling and reasoning with problems we invent. We never choose a topic, check a draft or solve an assessed task.

### Is online tutoring effective for Methods?

For most students it is, provided the student does the writing on a shared screen and explains each step, rather than watching a tutor work.

### What time are lessons for Adelaide students?

Late afternoon in Adelaide suits most students and falls in our tutors' working day. The time is fixed after the free lesson.

Related pages

## More for South Australian students

The other SACE subjects that pair with Methods, and the wider picture.

### [SACE Specialist Mathematics tutoring](/sace-specialist-mathematics-tutoring)

Vectors, complex numbers, induction and differential equations.

### [SACE Digital Technologies help](/sace-digital-technologies-help)

The Stage 2 computing subject.

### [ATAR explained for coding students](/atar-explained-for-coding-students)

How the admissions centres describe the ATAR.

### [Online maths tutoring in Australia](/online-maths-tutoring-australia)

Maths help for every Australian year level.

### [Australian competitions calendar](/australian-coding-maths-and-ai-competitions-calendar)

Maths competitions through the year.

### [Coding classes in Australia](/coding-classes-in-australia)

Our national hub for coding and AI.

Start here

## Start with a free Methods lesson

Tell us the topic that is hard right now and whether the examination or a skills task is closer. The free lesson works on that topic with problems we write.

Before booking, see full syllabuses in the [course atlas](/course-atlas), how lessons work on [how we teach](/how-we-teach), or maths for other year levels on our [Australian maths page](/online-maths-tutoring-australia).

[WhatsApp us](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20maths%20class%20about%20SACE%20Stage%202%20Mathematical%20Methods.) · [+91 91233 66161](tel:+919123366161) · [connect@modernagecoders.com](mailto:connect@modernagecoders.com)

We answer WhatsApp before email. The +91 prefix belongs to India, where our school is based; we run no office in South Australia or any other state.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/sace-mathematical-methods-tutoring*
