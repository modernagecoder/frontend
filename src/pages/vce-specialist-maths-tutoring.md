---
title: "VCE Specialist Maths Tutoring | Units 3 and 4 Online"
description: "VCE Specialist Maths tutoring online for Victorian students: proof, complex numbers, vectors, calculus and inference, both exams and the SACs, taught by hand first."
canonical: https://learn.modernagecoders.com/vce-specialist-maths-tutoring
source: src/pages/vce-specialist-maths-tutoring.html
---
> VCE Specialist Maths tutoring online for Victorian students: proof, complex numbers, vectors, calculus and inference, both exams and the SACs, taught by hand first.

In short

VCE Specialist Mathematics Units 3 and 4 cover six areas of study, including logic and proof, complex numbers, vectors, advanced calculus and differential equations, and statistical inference. The study assumes concurrent or previous completion of Mathematical Methods Units 3 and 4. Coursework counts 40 per cent, Examination 1 (1 hour, no technology) 20 per cent and Examination 2 (2 hours) 40 per cent.

Where to begin

## Three courses that reach Specialist depth

Proof and complex numbers first, then calculus at the level the exams expect.

[![A Level Further Maths course thumbnail](/images/a-level-further-maths.webp)  VCSM / 01 Further Maths, A level Complex numbers, proof by induction, vectors and differential equations, a close cousin of the Specialist content. Open the syllabus →](/courses/a-level-further-maths-course)[![AP Calculus AB & BC Exam Prep, Live Online, Score 5 Goal course thumbnail](/images/ap-calculus-prep.webp)  VCSM / 02 Calculus foundations Integration techniques and rates of change, the base for Specialist's advanced calculus. Open the syllabus →](/courses/ap-calculus-exam-prep)[![Maths Olympiad & Competition Course course thumbnail](/images/olympiad-competition-maths.webp)  VCSM / 03 Competition mathematics Writing proofs that convince, the habit the logic and proof area of study is built around. Open the syllabus →](/courses/olympiad-competition-mathematics-mastery)

Inside the study design

## Six areas of study and what they assume

Taken from the VCE Mathematics Study Design (accredited from 1 January 2023 for Units 1 to 4), which we read on 7 October 2026.

| Area of study | Examples from the key knowledge |
| --- | --- |
| Discrete mathematics | Logic and proof: direct proof, proof by cases, proof by contradiction, proof by contrapositive and proof by mathematical induction |
| Algebra, number and structure | Complex numbers in polar form, factorisation over the complex field, De Moivre’s theorem, and the nth roots of unity |
| Functions, relations and graphs | Rational functions and simple quotient functions, partial fractions, and the asymptotes and stationary points of their graphs |
| Calculus | Advanced integration, differential equations including numerical solution by Euler’s method, and kinematics in a straight line |
| Space and measurement | Vectors in two and three dimensions, the scalar and vector products, and vector proofs of geometric results |
| Data analysis, probability and statistics | Linear combinations of random variables, the distribution of the sample mean, and confidence intervals for a population mean |

The assumed knowledge is explicit. The study design says Specialist Units 3 and 4 assume the key knowledge of Mathematical Methods Units 1 and 2 and Specialist Units 1 and 2, plus "concurrent study or previous completion of Mathematical Methods Units 3 and 4". In practice nearly every Specialist student is taking Methods in the same year.

The vector proofs it lists are classic and worth practising early: that the diagonals of a rhombus are perpendicular, that the medians of a triangle are concurrent, and that the angle subtended by a diameter in a circle is a right angle.

Proof is not decoration in this study. The discrete mathematics area of study covers conjectures, connectives, quantifiers, examples and counter-examples, so students are expected to write an argument that a stranger could check line by line, not just reach an answer.

Technology still matters. Outcome 3 asks students to apply computational thinking and use technology to develop ideas, and Euler’s method is literally an algorithm. A student who has coded a few steps of it understands its error far better than one who has only read about it.

Sources: [VCAA, VCE Specialist Mathematics study design page](https://www.vcaa.vic.edu.au/curriculum/vce-curriculum/vce-study-designs/specialist-mathematics/vce-specialist-mathematics); VCE Mathematics Study Design, Specialist Mathematics Units 3 and 4, read on 7 October 2026.

How the study score is built

## Two exams in three days

Specialist's weights and exam conditions are the study design's own words; the VCAA's 2026 timetable, consulted on 7 October 2026, gives the dates.

| Contribution | Percentage | Form it takes |
| --- | --- | --- |
| Coursework in Unit 3 | 20 | A single application task lasting four to six hours across one or two weeks |
| Coursework in Unit 4 | 20 | Modelling or problem-solving work done largely in class time |
| First examination | 20 | Sixty minutes, technology-free and note-free, formulas supplied on a sheet |
| Second examination | 40 | Two hours with approved technology and one bound reference book |

In 2026 Specialist Mathematics Examination 1 is on Monday 9 November in the 9:00 am to 10:15 am session, and Examination 2 on Wednesday 11 November from 11:45 am to 2:00 pm. With Methods papers on 5 and 6 November, a student taking both sits four maths examinations inside a week.

Examination 1 rewards exact work: complex numbers in polar form, an induction step written cleanly, an integral that needs the right substitution. It is short, so method has to be instant.

Examination 2 adds technology and longer contexts, often linking areas of study in one question: a vector description of motion that turns into a calculus problem, or an inference question that depends on a linear combination of random variables.

The revision plan that works for most students alternates: one technology-free set and one extended technology question each week, rather than leaving Examination 2 practice until late October.

Specialist weights and exam rules from the VCE Mathematics Study Design; dates from the [VCAA 2026 timetable](https://www.vcaa.vic.edu.au/administration/key-dates/vce-examination-timetable) (accessed 7 October 2026).

A worked lesson

## The nth roots of unity are the corners of a polygon

The study design names the nth roots of unity and their location in the complex plane. Seeing them as the vertices of a regular polygon turns a page of algebra into a picture, and the picture predicts the algebra. The numbers below are ours, checked in Python.

### The idea

The solutions of z to the power n equals 1 all have modulus 1, and their arguments are 0, 2π/n, 4π/n and so on. Plotted, they sit evenly around the unit circle: the corners of a regular n-sided polygon.

### n = 6

The sixth roots are 1, 0.5 ± 0.866i, −1 and −0.5 ± 0.866i, where 0.866 is √3 over 2. Join them and you have a regular hexagon with side length exactly 1.

### Two predictions

Symmetry says the roots must add to zero, because the polygon balances about its centre. Pairing says their product is −1 when n is even and 1 when n is odd.

| n | Size of the sum of all roots (floating point) | Product of all roots | Perimeter of the polygon |
| --- | --- | --- | --- |
| 3 | about 3 in 10 to the 16 | 1 | 5.19615 |
| 4 | about 3 in 10 to the 16 | −1 | 5.65685 |
| 6 | about 4 in 10 to the 16 | −1 | 6.00000 |
| 12 | about 6 in 10 to the 16 | −1 | 6.21166 |
| 24 | about 2 in 10 to the 15 | −1 | 6.26526 |
| 96 | about 3 in 10 to the 15 | −1 | 6.28206 |

The sums are zero, as symmetry predicted; the tiny non-zero values are rounding error in floating-point arithmetic, which is itself a useful thing for a Specialist student to recognise. The products alternate exactly as predicted, and both facts can be proved in a few lines once the polygon picture suggests them.

The perimeter column is a bonus. Each side has length 2 sin(π/n), so the perimeter is 2n sin(π/n), which climbs towards 2π = 6.28319 as n grows: the polygon becomes the circle. At n = 96 the perimeter is within about 0.0011 of 2π, the same polygon Archimedes used.

The same picture solves exam-style problems quickly. To find the cube roots of 8i, write 8i in polar form as 8 with argument π/2, take the cube root of the modulus (2) and divide the argument by 3: the first root has argument π/6, and the other two are spaced 2π/3 apart, at 1.7321 + i, −1.7321 + i and −2i. A triangle on a circle of radius 2.

De Moivre’s theorem, also in the key knowledge, is what makes "divide the argument" legitimate. Proving it for integral powers by induction joins the complex numbers and the logic and proof areas of study in a single exercise, which is exactly how Examination 2 likes to combine topics.

Roots of unity and De Moivre key knowledge from the VCE Mathematics Study Design, Specialist Mathematics Units 3 and 4. Sums, products, perimeters and the cube roots of 8i are our own, computed in Python on 7 October 2026.

School-assessed Coursework

## We teach the mathematics, the SACs stay yours

Coursework is 40 per cent of Specialist Mathematics, and the VCAA only accepts it as the student's own work. The points below are quoted from the study design.

| Expectation | Detail |
| --- | --- |
| Ownership | The teacher has to be able to vouch that anything not acknowledged was the student’s own work |
| Setting | Mostly done in class, inside a fixed window of time |
| Unit 3 | One application task, four to six hours long over one or two weeks |
| Unit 4 | Further modelling or problem-solving tasks set by the school |

We teach proof, complex numbers, vectors, calculus and inference with problems we write, like the roots of unity above, and we show students how to explore and check ideas with technology. We do not complete, mark or polish SAC work, and we never drill a student on a task they already know is coming. A student who can write a clean proof for an unfamiliar statement with us can write one for the school.

Coursework rules paraphrased from the Specialist sections of the study design on 7 October 2026.

Building towards Units 3 and 4

## Four rungs alongside Methods

Specialist sits on top of Methods, so the ladder runs beside it rather than after it.

| When | Rung | The sign it is secure |
| --- | --- | --- |
| Units 1 and 2 | 1. Proof habits | Writes direct and contrapositive proofs of simple statements without prompting |
| Early Unit 3 | 2. Complex numbers | Moves between Cartesian and polar form and finds roots by spacing arguments |
| Unit 3 | 3. Vectors | Uses scalar products to prove a geometric fact and to resolve one vector along another |
| Unit 4 | 4. Inference | Builds a confidence interval for a mean and says precisely what it does and does not claim |

### If proof feels foreign

Most students have only ever been asked to calculate. Writing one short proof a day, read aloud to someone else, is the fastest way to make it normal.

Induction in particular improves with a fixed layout: base case, assumption, the step, the conclusion, each on its own line.

### Taking both studies

Our [VCE Maths Methods](/vce-maths-methods-tutoring) page covers the study Specialist assumes.

Specialist's vectors, complex numbers and differential equations are the core of first-year engineering and physics mathematics.

The catalogue

## Nine courses for Specialist students

Grouped by the kind of thinking they build. Each card opens a full syllabus.

I

### Proof and structure

Discrete mathematics and algebra

VCSM / PF / 01

#### Competition mathematics

Arguments that convince, built one careful step at a time.

[Open the syllabus](/courses/olympiad-competition-mathematics-mastery)

VCSM / PF / 02

#### Further Maths, A level

Complex numbers, induction and matrices from a parallel syllabus.

[Open the syllabus](/courses/a-level-further-maths-course)

VCSM / PF / 03

#### Competitive programming

Logic and invariants, practised through problems a computer checks.

[Open the syllabus](/courses/competitive-programming-for-teens-course)II

### Calculus and vectors

Space, motion and change

VCSM / CV / 01

#### Calculus foundations

The integration and differentiation Specialist extends.

[Open the syllabus](/courses/ap-calculus-exam-prep)

VCSM / CV / 02

#### University mathematics

Vectors, differential equations and beyond.

[Open the syllabus](/courses/college-mathematics-complete-masterclass)

VCSM / CV / 03

#### IB Mathematics

Extra practice on complex numbers and calculus.

[Open the syllabus](/courses/ib-mathematics-aa-ai-masterclass)III

### Inference and computation

Statistics and technology

VCSM / ST / 01

#### Statistics and probability

Random variables, sample means and confidence intervals.

[Open the syllabus](/courses/statistics-probability-maths-course)

VCSM / ST / 02

#### Maths through coding

Euler’s method, simulations and roots of unity in code.

[Open the syllabus](/courses/maths-through-coding)

VCSM / ST / 03

#### High school mathematics

For gaps from Units 1 and 2 that resurface in Units 3 and 4.

[Open the syllabus](/courses/complete-high-school-mathematics-mastery)

How lessons run

## When Specialist lessons happen

Tutors join from India. In the cooler months Victoria is 4.5 hours in front of India; with daylight saving, in force between 4 October 2026 and 4 April 2027 according to the IANA time zone records, the gap is 5.5 hours, so a 6 pm Specialist lesson in Melbourne lands at 12.30 pm India time.

Weekday after school

Weekly progress alongside Methods.

Weekend morning

Long proof and technology sessions.

School holidays

Exam blocks before the November papers.

### Proof in full sentences

Every argument written so a stranger could check it.

### Pictures before algebra

Complex numbers and vectors drawn first, then calculated.

### Technology to check

Code and calculators used to test ideas, never to replace them.

### Groups of fifteen to twenty

Students at one level, each presenting a solution in turn.

### One-to-one sessions

For one area of study that needs rebuilding.

### Outcomes stay yours

Nobody here predicts a study score or ATAR; what you earn is your own work.

Student work

## Student projects worth a look

Built for fun and learning, not for school marks. Browse the rest in our [student labs](/student-labs).

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

Specialist lessons cost one flat monthly amount in US dollars for every family outside India; you can join without a fee and leave at the end of any month.

Free first class

USD 0

no card required

- A full lesson with a tutor
- A clear view of what to strengthen
- No card needed

Book it

Group batch

USD 100

a month, billed in US dollars

- Fifteen to twenty students at one level
- One tutor all term
- Proofs and solutions discussed
- A certificate when you finish

Start here

One to one

USD 150

a month, billed in US dollars

- One tutor, one student
- Centred on one area of study
- Often booked for the last weeks before the exams

Enquire

What families say

## Rated 4.9 across 547 Google reviews

As families and students posted them on Google, word for word.

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

Questions about Specialist

## Specialist questions from Victorian families

### What is VCE Specialist Mathematics?

It is the most advanced VCE mathematics study. Units 3 and 4 cover six areas of study including logic and proof, complex numbers, vectors, advanced calculus and differential equations, and statistical inference, with an emphasis on mathematical structure, reasoning and proof.

### Do I need Methods to take Specialist?

The study design says Specialist Units 3 and 4 assume concurrent study or previous completion of Mathematical Methods Units 3 and 4, as well as the Units 1 and 2 knowledge of both studies.

### How are Specialist marks weighted?

Forty per cent comes from coursework (twenty in each unit), twenty from the first examination and forty from the second.

### When are the 2026 Specialist exams?

Examination 1 is on Monday 9 November 2026, in the session that starts at 9:00 am and ends at 10:15 am; Examination 2 follows on Wednesday 11 November, from 11:45 am to 2:00 pm, according to the VCAA.

### What are the nth roots of unity?

They are the n complex numbers z with z to the power n equal to 1. All have modulus 1 and arguments spaced 2π/n apart, so they sit at the corners of a regular n-sided polygon on the unit circle.

### Which proof methods are examined?

The study design lists direct proof, proof by cases, proof by contradiction, proof by contrapositive and proof by mathematical induction.

### Is Euler’s method in Specialist?

Yes. The calculus area of study includes numerical solution of differential equations by Euler’s method, as a first order approximation.

### Will you help with my SAC?

No. Our problems are our own, and SAC work stays untouched by us, since the VCAA counts coursework only when it is the student's.

### How many hours a week does Specialist need?

It varies with the student, but most need steady weekly practice on proof and technology-free work rather than occasional long sessions. We set the pace together after the free lesson.

### When do lessons run for Victorian students?

Late afternoon or early evening in Victoria suits most students, and it falls inside our tutors' working day. The weekly time is agreed after the free lesson.

Related pages

## More for Victorian maths students

The study Specialist assumes, the computing studies that reward the same rigour, and the wider picture.

### [VCE Maths Methods tutoring](/vce-maths-methods-tutoring)

The study Specialist assumes, with its own two exams.

### [VCE Algorithmics (HESS) help](/vce-algorithmics-hess-help)

Proof by induction and contradiction, applied to algorithms.

### [Online maths tutoring in Australia](/online-maths-tutoring-australia)

Help for other year levels and states.

### [Australian Maths Trust competitions](/australian-maths-trust-amc-aio-cat-preparation)

Competition problems for students who enjoy proof.

### [Coding and AI classes in Melbourne](/vibe-coding-and-ai-agents-classes-in-melbourne)

Coding and AI for Victorian students who like logic.

### [Coding classes in Australia](/coding-classes-in-australia)

Where to start with coding anywhere in Australia.

Start here

## Start with a free Specialist lesson

Tell us the unit and the area of study that is hardest right now, whether proof, complex numbers, vectors or inference. The free lesson works on it with our own problems.

If you like to read before deciding, the [course atlas](/course-atlas) holds every syllabus, [how we teach](/how-we-teach) explains a lesson, and the [Maths Methods page](/vce-maths-methods-tutoring) covers the companion study.

[WhatsApp us](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20maths%20class%20about%20VCE%20Specialist%20Mathematics.) · [+91 91233 66161](tel:+919123366161) · [connect@modernagecoders.com](mailto:connect@modernagecoders.com)

WhatsApp replies come quickest. The +91 code is India's, where we teach from; there is no Australian office.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/vce-specialist-maths-tutoring*
