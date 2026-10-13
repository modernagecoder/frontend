---
title: "HSC Maths Extension 1 Tutoring | NSW Online Help"
description: "HSC Maths Extension 1 tutoring online for NSW students: the 2024 syllabus, the 70-mark paper, proof by induction done properly, and how Ext 1 counts for ATAR."
canonical: https://learn.modernagecoders.com/hsc-maths-extension-1-tutoring
source: src/pages/hsc-maths-extension-1-tutoring.html
---
> HSC Maths Extension 1 tutoring online for NSW students: the 2024 syllabus, the 70-mark paper, proof by induction done properly, and how Ext 1 counts for ATAR.

In short

HSC Mathematics Extension 1 is a one-unit NSW course taken alongside Mathematics Advanced. Under the 2024 syllabus it adds polynomials, combinatorics, the binomial theorem, proof by mathematical induction, vectors, inverse trigonometric functions and further calculus. Its HSC exam is a 70-mark paper of 2 hours plus 10 minutes reading time, and students also sit either the Advanced or the Extension 2 paper.

A sensible start

## Three courses Extension 1 students lean on

Calculus fluency first, then counting and proof, then problems that stretch.

[![High School Mathematics course thumbnail](/images/high-school-maths.webp)  HEXO / 01 The Advanced core Functions, trigonometry and calculus at full strength, because every Extension 1 question assumes the Advanced course is solid. Open the syllabus →](/courses/complete-high-school-mathematics-mastery)[![Maths Olympiad & Competition Course course thumbnail](/images/olympiad-competition-maths.webp)  HEXO / 02 Proof and problem solving Induction, counting arguments and careful reasoning, practised on problems harder than the syllabus sets. Open the syllabus →](/courses/olympiad-competition-mathematics-mastery)[![Statistics & Probability course thumbnail](/images/statistics-probability-maths.webp)  HEXO / 03 Probability to the binomial Counting, combinations and the binomial distribution, the statistics thread of Year 12 Extension 1. Open the syllabus →](/courses/statistics-probability-maths-course)

What Extension 1 adds

## Eleven focus areas on top of Advanced

NESA lists the focus areas below in the course structure of the 2024 syllabus. Checked on the NSW Curriculum site on 7 October 2026.

| Year | Area of study | Focus area |
| --- | --- | --- |
| Year 11 | Functions | Further work with functions; Polynomials |
| Year 11 | Trigonometric functions | Further trigonometry |
| Year 11 | Combinatorics | Permutations and combinations; The binomial theorem |
| Year 12 | Proof | Proof by mathematical induction |
| Year 12 | Vectors | Introduction to vectors |
| Year 12 | Trigonometric functions | Inverse trigonometric functions |
| Year 12 | Calculus | Further calculus skills; Further applications of calculus |
| Year 12 | Statistical analysis | The binomial distribution and sampling distribution of the mean |

Extension 1 is not a separate subject so much as a second storey on the Advanced building. NESA makes that explicit in the enrolment rules: the Year 11 course, number 11250, has Year 11 Advanced as a corequisite, and the Year 12 course, number 15250, needs both Year 11 courses as prerequisites and Year 12 Advanced alongside it. Each is worth 1 unit and 60 indicative hours.

In Year 11 the new material is mostly algebraic and combinatorial: polynomials and their roots, further trigonometry, and counting arrangements. Year 12 brings the topics students remember as the real Extension 1: induction, vectors, inverse trigonometric functions and harder calculus.

The 2024 syllabus follows the same timetable as Advanced. NESA says it "is to be implemented from 2026", with Year 12 teaching from Term 4 of 2026 and the first HSC examination on it in 2027. Students moving through Year 11 and 12 during the changeover should check which version their school is teaching before buying any revision book.

Vectors is the area most likely to feel new to a student who has only seen older materials, and statistics now ends at the sampling distribution of the mean. Both reward students who understand the idea behind the formula, which is the way we teach them.

Sources: [NSW Curriculum, Mathematics Extension 1 11-12 Syllabus (2024), overview](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-extension-1-11-12-2024/overview); [course structure and enrolment details](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-extension-1-11-12-2024/overview/course). Checked on 7 October 2026.

The HSC examination

## A 70-mark paper, and a second paper beside it

The specification below is quoted from NESA's HSC examinations page for the 2024 syllabus, checked on 7 October 2026.

| Feature | What NESA specifies |
| --- | --- |
| Marks and time | A written paper worth 70 marks; 2 hours plus 10 minutes reading time |
| Support | A reference sheet will be provided; NESA-approved calculators may be used |
| Section I | Objective-response questions to the value of 10 marks |
| Section II | 60 marks; questions may contain parts; there will be 23 to 28 items |
| Longer items | At least one item will be worth 4 or 5 marks |
| Assumed knowledge | The Mathematics Advanced course and the Extension 1 Year 11 course; Year 11 Extension 1 may be examined |
| The second paper | Students also complete either the Mathematics Advanced paper or the Mathematics Extension 2 paper, depending on enrolment |

Sixty marks across 23 to 28 items puts the average item at a little over two marks, much like Advanced, but the items are denser. A two-mark Extension 1 question can hide a substitution, a sign check and a domain restriction, and each of them costs the mark if it is skipped.

With two hours for 70 marks the pace is about 1.7 minutes per mark. Students who practise to that budget learn to recognise the questions worth leaving for a second pass, rather than spending fifteen minutes stuck on a single part.

The second paper is easy to forget when planning. An Extension 1 student also sits the Advanced paper, or the Extension 2 paper if enrolled in that course, so revision time has to cover both. In our experience the Advanced paper is where Extension 1 students lose marks to carelessness, simply because the questions feel easy.

The 2026 HSC written exams run from 13 October to no later than 5 November 2026, by NESA's key dates. Students sitting the first paper on the new syllabus in 2027 should watch for NESA's 2027 timetable.

Sources: [NSW Curriculum, Mathematics Extension 1 HSC examinations](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-extension-1-11-12-2024/assessment/hsc-examinations); [NESA, 2026 HSC key dates](https://www.nsw.gov.au/education-and-training/nesa/key-dates/hsc). Checked on 7 October 2026.

Proof by mathematical induction

## Check the cases, then prove the claim

Induction is a Year 12 focus area and the clearest example of what Extension 1 asks for. The habit we teach has two halves: test a claim on small cases to see whether it is even true, then prove it, because no number of cases is a proof.

A worked lesson, written by us. Claim: the sum of the first n odd numbers is n squared. Before proving anything, a student checks small values of n. A short loop in Python or a column on paper does the job.

| n | Last odd number | Sum of odd numbers | n squared | Match? |
| --- | --- | --- | --- | --- |
| 1 | 1 | 1 | 1 | Yes |
| 2 | 3 | 4 | 4 | Yes |
| 3 | 5 | 9 | 9 | Yes |
| 4 | 7 | 16 | 16 | Yes |
| 5 | 9 | 25 | 25 | Yes |
| 6 | 11 | 36 | 36 | Yes |

The cases agree, so the claim is worth proving. The base case is n = 1, where both sides equal 1. For the inductive step, assume the sum of the first k odd numbers is k squared. The next odd number is 2k + 1, so the sum of the first k + 1 odd numbers is k squared plus 2k + 1, which factorises to (k + 1) squared. The statement for k implies the statement for k + 1, and with the base case the claim holds for every positive integer n.

| n | Value | Prime? |
| --- | --- | --- |
| 0 | 41 | Yes |
| 1 | 43 | Yes |
| 10 | 151 | Yes |
| 39 | 1601 | Yes |
| 40 | 1681 | No: 1681 = 41 squared |

The second table is the warning. The expression n squared + n + 41 gives a prime for every n from 0 to 39, forty cases in a row, and then fails at n = 40, where it equals 1681, which is 41 times 41. A student who stopped testing at 39 would have "proved" something false.

That is the whole reason induction exists, and explaining it in a sentence is worth practising. Markers look for a correct base case, a clearly stated assumption, and a step that actually uses the assumption rather than restating it.

Choosing the base case matters too. The statement 2 to the power n is greater than n squared is true for n = 1, false for n = 2, 3 and 4 (4 is not greater than 4, 8 is not greater than 9, 16 is not greater than 16), and true from n = 5 onwards. A proof must start at n = 5, and a quick table shows why.

This test-then-prove habit also carries straight into programming, where a function can pass a hundred test cases and still be wrong. Students who study both subjects find that each one makes the other easier to understand.

Units and the ATAR

## How UAC counts Extension 1

This section explains UAC's published rules only. It is not advice on subject choice and it promises no rank.

UAC, which calculates the NSW ATAR, states that "Up to 4 units of calculus-based maths can be included in the ATAR calculation." It also explains that Mathematics Extension 1 carries a different weighting depending on its partner course: with Mathematics Advanced, Extension 1 counts as 1 unit; with Mathematics Extension 2, Extension 1 counts as 2 units, calculated by doubling its mark.

UAC adds a detail families often miss: a student who completes Advanced and then goes on to complete Extension 1 and Extension 2 will not have the Advanced result included in the calculation. None of this tells a student which courses to choose. That decision belongs with the student, the family and the school, and it should rest on which mathematics the student wants to learn and is ready for.

For how the ATAR works more generally, from ranks to scaling, see our page on [the ATAR explained for coding students](/atar-explained-for-coding-students).

Source: [UAC, how your ATAR is calculated](https://www.uac.edu.au/future-applicants/atar/how-your-atar-is-calculated). Checked on 7 October 2026.

Readiness

## Four checkpoints before the Extension 1 exam

The checkpoints follow the skills the course builds, in the order students usually meet them.

| Stage | Checkpoint | The sign it is in place |
| --- | --- | --- |
| Year 10 into 11 | 1. Algebra under pressure | Divides polynomials and finds roots without notes |
| Year 11 | 2. Counting | Explains why an arrangement is a permutation or a combination |
| Year 12, early | 3. Proof | Writes an induction proof whose step really uses the assumption |
| Year 12, late | 4. Two papers | Finishes timed Advanced and Extension 1 papers in one week |

### If proof feels slippery

Most trouble with induction comes from algebra in the inductive step, not from the logic. Practising the factorising on its own first usually fixes it.

Writing a single sentence that says what the assumption is, before using it, makes the structure visible to the student as well as the marker.

### Beyond Extension 1

Students who enjoy proof and vectors may continue to [Mathematics Extension 2](/hsc-maths-extension-2-tutoring), the one-unit Year 12 course that sits above this one.

Competition problems are another outlet; the [competitions calendar](/australian-coding-maths-and-ai-competitions-calendar) lists maths contests open to secondary students.

The catalogue

## Nine courses for Extension 1 students

Arranged by the part of the course they serve. Each card opens a full syllabus.

I

### Under the course

Advanced at full strength

HEXO / A / 01

#### High school mathematics

The functions and calculus that Extension 1 assumes from Advanced.

[Open the syllabus](/courses/complete-high-school-mathematics-mastery)

HEXO / A / 02

#### Algebra foundations

Polynomial manipulation and rearranging, practised until it is fast.

[Open the syllabus](/courses/algebra-foundations-masterclass)

HEXO / A / 03

#### Calculus practice

Written for the US AP exam, with plenty of differentiation and integration that overlaps NSW calculus.

[Open the syllabus](/courses/ap-calculus-exam-prep)II

### The Extension 1 threads

Proof, counting and probability

HEXO / T / 01

#### Competition mathematics

Induction, combinatorics and proof on demanding problems.

[Open the syllabus](/courses/olympiad-competition-mathematics-mastery)

HEXO / T / 02

#### Statistics and probability

The binomial distribution and sampling ideas in depth.

[Open the syllabus](/courses/statistics-probability-maths-course)

HEXO / T / 03

#### IB Mathematics

An international course with strong overlap in vectors and calculus.

[Open the syllabus](/courses/ib-mathematics-aa-ai-masterclass)III

### Further on

For students looking past the HSC

HEXO / F / 01

#### Further mathematics

A UK course whose core pure content overlaps Extension 2 territory.

[Open the syllabus](/courses/a-level-further-maths-course)

HEXO / F / 02

#### University mathematics

Calculus and linear algebra at first-year pace.

[Open the syllabus](/courses/college-mathematics-complete-masterclass)

HEXO / F / 03

#### Maths through coding

Python for testing conjectures before proving them.

[Open the syllabus](/courses/maths-through-coding)

Lesson rhythm

## Weekly sessions that fit an NSW school day

Our tutors teach from India, which is four and a half hours behind Sydney in winter and five and a half hours behind once NSW daylight saving starts in October. A 5 pm lesson in Sydney falls around midday for the tutor, so after-school teaching is straightforward to arrange.

Weekday afternoons

Most Extension 1 students take one or two of these a week.

Weekend mornings

Longer blocks for proof practice or a full timed paper.

Before trials

Short runs in the school holidays.

### Proof as a sentence

Students say what they are assuming and why it helps, before writing a symbol.

### Cases before claims

Quick tables or short programs check a statement before any proof is attempted.

### Both papers practised

Advanced items keep their place in revision, where careless marks hide.

### Classes of fifteen to twenty

Extension 1 students at one level, each explaining a step aloud every week.

### Individual help

A single tutor for a single focus area that will not click.

### No rank promises

We never forecast an ATAR or a band. The effort and the result are the student's.

Student work

## Projects our students have published

Personal projects, none of them school assessment. The full set lives in our [student labs](/student-labs).

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

One monthly charge in US dollars, identical for every family outside India, with no joining fee and nothing payable beyond the current month.

Free first class

USD 0

no card required

- A full lesson with a tutor
- A straight answer on readiness
- No payment details

Book it

Group batch

USD 100

a month, billed in US dollars

- Fifteen to twenty students at one level
- One tutor all term
- Proofs marked and discussed
- A certificate on completion

Start here

One to one

USD 150

a month, billed in US dollars

- A tutor for one student
- Focused on chosen topics
- Good for the weeks before trials

Enquire

What families say

## Rated 4.9 across 547 Google reviews

Exactly as posted on Google by students and parents.

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

Questions about Extension 1

## What Extension 1 families ask us

### What is HSC Mathematics Extension 1?

A one-unit NSW mathematics course taken with Mathematics Advanced. Under the 2024 syllabus it adds polynomials, combinatorics, the binomial theorem, proof by mathematical induction, vectors, inverse trigonometric functions, further calculus, and the binomial distribution with the sampling distribution of the mean.

### Do I have to take Mathematics Advanced as well?

Yes. NESA lists Year 11 Advanced as a corequisite for Year 11 Extension 1, and Year 12 Advanced as a corequisite for Year 12 Extension 1.

### How long is the Extension 1 exam?

2 hours plus 10 minutes reading time, for a paper worth 70 marks with a reference sheet and approved calculators.

### Do Extension 1 students sit more than one paper?

Yes. NESA states that students also complete either the Mathematics Advanced paper or the Mathematics Extension 2 paper, depending on their enrolment.

### What is proof by mathematical induction?

A way of proving a statement for every positive integer from a starting value. You show it holds for the first value, then show that if it holds for any value k it must hold for k + 1. Together these cover every case.

### Why is checking many cases not a proof?

Because a pattern can hold for a long time and then fail. The expression n squared + n + 41 is prime for n = 0 to 39 but equals 1681, which is 41 squared, at n = 40.

### How does Extension 1 count towards the ATAR?

UAC says up to 4 units of calculus-based maths can be included. Extension 1 counts as 1 unit when paired with Advanced, and as 2 units when paired with Extension 2.

### Is there a Year 11 Extension 2 course?

No. Under the 2024 syllabus, Extension 2 is a Year 12 course; Extension 1 in Year 11 is part of the pathway towards it.

### Will you guarantee a top result?

No. We teach the mathematics and the writing; the result is earned by the student.

### Do you help with take-home tasks?

We teach the underlying mathematics with our own problems, and we do not write, edit or check any work that a school will mark.

Related pages

## More for NSW mathematics students

The course below this one, the course above it, and how it all feeds the ATAR.

### [HSC Maths Advanced](/hsc-maths-advanced-tutoring)

The corequisite course, explained from its 2024 syllabus.

### [HSC Maths Extension 2](/hsc-maths-extension-2-tutoring)

Complex numbers, mechanics and harder proof in Year 12.

### [The ATAR explained](/atar-explained-for-coding-students)

Ranks, scaling and units, from the admissions centres.

### [Coding and AI in New South Wales](/coding-and-ai-classes-in-new-south-wales)

Every NSW page and the state's school system.

### [AMC and AIO preparation](/australian-maths-trust-amc-aio-cat-preparation)

Competition mathematics and informatics.

### [How we teach](/how-we-teach)

The method behind every lesson.

Start here

## Try a free Extension 1 lesson

Send us the year level, the focus area that is hardest right now, and the school's current topic. The free lesson works on it with our own questions.

Want to look around first? Full course outlines are on the [course atlas](/course-atlas), the teaching method is on [how we teach](/how-we-teach), and our [Advanced page](/hsc-maths-advanced-tutoring) covers the corequisite course.

[WhatsApp us](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20class%20about%20HSC%20Mathematics%20Extension%201.) · [+91 91233 66161](tel:+919123366161) · [connect@modernagecoders.com](mailto:connect@modernagecoders.com)

WhatsApp answers fastest. The +91 code is Indian because we teach from India; nothing here claims an office in NSW.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/hsc-maths-extension-1-tutoring*
