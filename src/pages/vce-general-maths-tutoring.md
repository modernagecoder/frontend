---
title: "VCE General Maths Tutoring | Units 3 and 4 Online"
description: "VCE General Maths tutoring online for Victorian students: data analysis, recursion, matrices and networks, both 1.5-hour exams and the SACs, with real reasoning."
canonical: https://learn.modernagecoders.com/vce-general-maths-tutoring
source: src/pages/vce-general-maths-tutoring.html
---
> VCE General Mathematics Units 3 and 4 cover data analysis and recursion and financial modelling in Unit 3, and matrices and networks and decision mathematics in Unit 4. Coursework counts 40 per cent (24 in Unit 3, 16 in Unit 4), and two 1.5-hour examinations count 30 per cent each: Examination 1 is multiple choice and Examination 2 is written response.

[Home](/) / [Coding classes in Australia](/coding-classes-in-australia) / VCE General Maths

Victoria · VCE General Mathematics · Live online

# VCE General Maths tutoring

General Mathematics is the VCE maths study for students who want mathematics they can use: statistics on real data, recurrence models, matrices and networks. It is non-calculus, but it is not easy, and the two exams test whether students can interpret a model as well as compute with it.

At a glance: Study: VCE General Mathematics; Units: 3 and 4; Accredited from: 1 January 2023; Exam 1: 30 per cent, multiple choice; Exam 2: 30 per cent, written response; Each exam: 1.5 hours; 2026 exams: 30 October and 2 November; We never: Complete any SAC. Rated 4.9 across 547 Google reviews.

## Three courses that fit General Maths

Statistics first, because Data analysis carries the largest share of Unit 3, then the discrete topics.

- [Statistics and probability](/courses/statistics-probability-maths-course): Distributions, association, least squares lines and residuals, read for meaning rather than plugged into a calculator.
- [High school mathematics](/courses/complete-high-school-mathematics-mastery): Sequences, linear relations and matrices, the algebra beneath recursion and Unit 4.
- [Mathematics for data analytics](/courses/data-analytics-mathematics-masterclass): Trends, time series and forecasting, the applied side of the Data analysis topic.

## Four topics across two units

We read the VCE Mathematics Study Design on 7 October 2026. General Units 3 and 4 consist of two areas of study, Data analysis, probability and statistics, and Discrete mathematics, split into four topics.

**VCE General Mathematics Units 3 and 4: topics and examples of key knowledge**

| Unit | Topic | Examples from the key knowledge |
|---|---|---|
| Unit 3 | Data analysis | Least squares lines, residual analysis to check fit, data transformations, and time series with seasonality and smoothing by moving medians |
| Unit 3 | Recursion and financial modelling | First-order linear recurrence relations, depreciation, compound interest and the time value of money |
| Unit 4 | Matrices | Matrix operations, transition matrices, Leslie matrices and matrix recurrence relations with an equilibrium state |
| Unit 4 | Networks and decision mathematics | Eulerian trails and circuits, Hamiltonian paths, minimum spanning trees by Prim’s algorithm, and flow problems with the maximum-flow minimum-cut theorem |

The study design describes General Mathematics as the study of non-calculus and discrete mathematics topics, designed to be widely accessible. That makes it a good fit for students heading into business, health, trades and many university courses, and a common pairing with Mathematical Methods for students who want breadth.

Data analysis is the heaviest single topic, and its key knowledge is precise: the least squares line y = a + bx is fitted with x as the explanatory variable and y as the response, the slope and intercepts are interpreted in context, and residual plots are used to judge whether a linear model is good enough.

The discrete topics reward a different habit, careful bookkeeping. A transition matrix question is mostly about setting up the matrix correctly; a network question is mostly about reading the graph accurately. Most lost marks in Unit 4 come from setup, not arithmetic.

Technology is assumed in both exams, with numerical, graphical, symbolic, financial and statistical functionality. That shifts the challenge from calculating to choosing: which model, which input, and what the output means.

Checked on 7 October 2026 at the [VCAA General Mathematics page](https://www.vcaa.vic.edu.au/curriculum/vce-curriculum/vce-study-designs/general-mathematics/vce-general-mathematics) and in the Mathematics study design document.

## Two 1.5-hour papers, a weekend apart

Each weight, task length and exam rule below is the study design's; the dates are from the VCAA timetable as it stood on 7 October 2026.

**General Mathematics: what each part of the score asks for**

| Part | Counts for | In practice |
|---|---|---|
| Unit 3 coursework | 24 per cent | Two tasks: an application task of four to six hours across one or two weeks, and a recursion and financial modelling task of two to three hours inside a week |
| Unit 4 coursework | 16 per cent | The second and third modelling or problem-solving tasks |
| Examination 1 | 30 per cent | Ninety minutes of multiple-choice questions spanning every area of study |
| Examination 2 | 30 per cent | Ninety minutes of written responses, including extended applications |

In 2026 General Mathematics Examination 1 is on Friday 30 October and Examination 2 on Monday 2 November, both in the 2:00 pm to 3:45 pm session the VCAA timetable prints. General students therefore finish their maths exams before Methods students start.

Both papers assume approved technology with financial and statistical functionality, and both allow one bound reference text, which may be annotated. A well-organised reference, with worked examples for each topic, is worth building through the year rather than the week before.

Multiple choice is not easier than written response; it is faster. Each question is worth getting right in about a minute and a half on average, so a student must recognise the topic and the trap quickly. Practising whole sets under time is the only reliable preparation.

Examination 2 asks for extended application problems, where the marks are in setting up and interpreting: stating what a slope means for the context, or what a steady state says about the long run. Answers that stop at a number lose those marks.

Assessment details: VCE Mathematics Study Design (General). Exam sessions: [VCAA 2026 timetable](https://www.vcaa.vic.edu.au/administration/key-dates/vce-examination-timetable), viewed 7 October 2026.

## Where a first-order recurrence settles

The study design uses a first-order linear recurrence of the form u0 = a, un+1 = R times un + d, with a, R and d constants. Every such recurrence with R between 0 and 1 heads to a fixed value, and finding it turns a long table into one line. The example below is ours and deliberately has nothing to do with money.

### The model

A school library starts the year with 5,000 books. Each year it withdraws 8 per cent of its stock and adds 300 new books. So u0 = 5,000 and un+1 = 0.92 un + 300.

### The steady state

If the stock ever stopped changing, it would satisfy S = 0.92 S + 300, so 0.08 S = 300 and S = 3,750. That is where the library is heading, whatever it starts with.

### How fast

The gap to 3,750 shrinks by 8 per cent a year, so it halves roughly every 8.3 years. Starting from 5,000, the stock is within 50 books of 3,750 after 39 years.

**The library recurrence, year by year (our calculation)**

| Year n | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| Starting at 5,000 | 5,000 | 4,900 | 4,808 | 4,723.4 | 4,645.5 | 4,573.9 |
| Starting at 3,000 | 3,000 | 3,060 | 3,115.2 | 3,166.0 | 3,212.7 | 3,255.7 |

The two rows tell the whole story. A library that starts above 3,750 shrinks towards it; one that starts below grows towards it. The steady state does not depend on the starting value at all, only on R and d, which is why the formula S = d divided by (1 minus R) is worth understanding rather than memorising.

This is the kind of interpretation Examination 2 rewards. "In the long run the library will hold about 3,750 books" earns the mark that "u39 = 3,798.4" does not, because it answers the question a real person would ask.

The same idea reappears in Unit 4. A regular transition matrix settles to an equilibrium state matrix in exactly the same way, and the study design asks students to identify it informally by watching successive state matrices stop changing. Recognising one idea in two topics is efficient revision.

A short program makes the idea concrete: a loop of three lines prints the table above, and changing R or d shows the steady state move instantly. That is how we teach recursion, and it suits students who think visually.

Recurrence form and equilibrium key knowledge from the VCE Mathematics Study Design, General Mathematics Units 3 and 4. The library model and all values are our own, computed in Python on 7 October 2026.

## We teach the topics, never the SAC itself

Coursework is 40 per cent of General Mathematics, and the VCAA accepts it only as the student's own work. The points below are quoted from the study design.

**Coursework rules, in brief**

| Topic | The VCAA position |
|---|---|
| Who did the work | Teachers must be able to confirm that unacknowledged work came from the student |
| When and where | Largely in class, within a set period |
| Unit 3 | The application task plus a recursion and financial modelling task |
| Unit 4 | Two more modelling or problem-solving tasks |

We teach data analysis, recursion, matrices and networks with examples we write, like the library above, and show students how to use technology to check their thinking. Our tutors leave SAC work alone entirely: no completing, checking or tidying, and no practising answers for a task that has been announced. Students who can model an unfamiliar situation with us can handle the school's version alone.

From the General Mathematics coursework and authentication sections of the study design (7 October 2026).

## Four rungs to exam readiness

Students arrive at General Mathematics from many directions. The rungs describe the skill, not the year.

**From Year 10 statistics to both exams**

| When | Rung | The sign it is secure |
|---|---|---|
| Year 10 or Units 1 and 2 | 1. Describing data | Reads a distribution and states its shape, centre and spread in words |
| Unit 3 Data analysis | 2. Modelling association | Fits a least squares line and uses a residual plot to judge it |
| Unit 3 Recursion | 3. Recurrences | Writes a recurrence from a description and finds its long-run value |
| Unit 4 | 4. Matrices and networks | Sets up a transition matrix or reads a network without errors |

### If data analysis feels vague

The usual gap is interpretation. Students can produce a slope but not say what it means. Writing one plain-English sentence after every calculation fixes this faster than more calculation.
Residual plots deserve their own practice: a pattern in the residuals means the line is the wrong model, no matter how close the coefficient looks.

### Beyond General

Students who enjoy the data topic may like our [VCE Data Analytics](/vce-applied-computing-data-analytics-help) page, which applies the same statistics in software.
Networks and decision mathematics lead straight into logistics, operations and computing, where shortest paths and flows are everyday tools.

## Nine courses for General Maths students

Grouped by the topics they support. Each card opens a full syllabus.

### Data analysis

Statistics with meaning

- [Statistics and probability](/courses/statistics-probability-maths-course): Distributions, association and regression, interpreted carefully.
- [Statistics, exam level](/courses/ap-statistics-maths-exam-prep-course): More regression and data practice from a parallel senior course.
- [Data science with Python](/courses/data-science-course-for-teens-python-data): Real datasets, cleaned and charted in code.

### Algebra and recursion

The ground under Unit 3

- [Algebra foundations](/courses/algebra-foundations-masterclass): Linear relations and sequences, rebuilt with confidence.
- [High school mathematics](/courses/complete-high-school-mathematics-mastery): Senior-years maths across every General topic.
- [Maths through coding](/courses/maths-through-coding): Recurrences, matrices and simulations written as small programs.

### Matrices, networks and beyond

Unit 4 and next steps

- [Mathematics for data analytics](/courses/data-analytics-mathematics-masterclass): Matrices and models for students heading into data work.
- [Middle school mathematics](/courses/comprehensive-middle-school-mathematics-mastery): For gaps from earlier years that resurface in Units 3 and 4.
- [IGCSE Mathematics](/courses/igcse-mathematics-mastery): Extra practice in sets, matrices and graphs from another syllabus.

## General Maths lessons, after school

We teach live from India. During daylight saving (4 October 2026 to 4 April 2027 in the IANA time zone database) Victoria sits five and a half hours ahead of us, and four and a half the rest of the year; a 4.30 pm class in Victoria therefore starts at 11 am in India over summer.

- **Weekday after school** Weekly progress through the four topics.
- **Weekend morning** Timed multiple-choice sets and longer written questions.
- **School holidays** Exam blocks before late October.

- **A sentence after every number** Each answer finishes with what it means in context.
- **Reference built through the year** Students assemble their bound reference as they learn, not the night before.
- **Timed sets** Multiple-choice practice at real exam pace.
- **Fifteen to twenty per group** Matched by level, and everyone explains a model aloud.
- **Private lessons** When one topic needs focused attention.
- **Results belong to you** We make no claims about study scores or ATARs; the work and the result are yours.

## Fees

General Maths lessons have one monthly price, set in US dollars and equal for every family outside India; there is no joining charge and you are free to stop each month.

- Free first class: USD 0. A full lesson with a tutor. An honest read on weak topics. No card asked for.
- Group batch: USD 100 a month. Fifteen to twenty students at one level. A steady tutor each week. Practice checked and discussed. A certificate at the end.
- One to one: USD 150 a month. A tutor for one student. Centred on one topic. Common before the October exams.

## General Maths questions from students and parents

### What is VCE General Mathematics?

It is a VCE mathematics study of non-calculus and discrete mathematics. Units 3 and 4 cover data analysis, recursion and financial modelling, matrices, and networks and decision mathematics.

### How is the study score made up?

School-assessed Coursework contributes 40 per cent (24 per cent in Unit 3 and 16 per cent in Unit 4), and Examination 1 and Examination 2 contribute 30 per cent each.

### When are the 2026 General Maths exams?

The VCAA timetable lists Examination 1 on Friday 30 October 2026 and Examination 2 on Monday 2 November, both in the 2:00 pm to 3:45 pm session. Each examination is 1.5 hours.

### What is the difference between the two exams?

Examination 1 is multiple choice across all areas of study; Examination 2 is written response with extended application problems. Both assume approved technology and allow one bound reference text.

### What is a first-order linear recurrence?

A rule that gives each term from the one before: u0 = a and un+1 = R times un + d, where a, R and d are constants. When R is between 0 and 1 the terms settle towards d divided by (1 minus R).

### Is General Maths easier than Methods?

It is different rather than easier. General has no calculus and focuses on applied and discrete mathematics, with heavy emphasis on interpretation. Many students take both.

### What are the General Maths SACs?

Unit 3 has an application task of 4 to 6 hours over 1 to 2 weeks and a modelling or problem-solving task on recursion and financial modelling. Unit 4 has two more modelling or problem-solving tasks.

### Will you help with my SAC?

No. We teach each topic with examples we make up and keep well away from SAC work, which the VCAA only credits as the student's own.

### Does the bound reference text matter?

Yes. Both exams allow one bound reference, which may be annotated. A reference built carefully through the year, with a worked example for every topic, saves real time in the exams.

### When do lessons run?

Late afternoon in Victoria suits most students and falls during our tutors' working day. We agree the weekly time after the free lesson.

## Other pages for Victorian learners

- [VCE Maths Methods tutoring](/vce-maths-methods-tutoring): Functions and calculus, often taken alongside General.
- [VCE Data Analytics help](/vce-applied-computing-data-analytics-help): Statistics and visualisation in the Applied Computing study.
- [Online maths tutoring in Australia](/online-maths-tutoring-australia): Maths help well beyond the VCE.
- [Coding and AI classes in Melbourne](/vibe-coding-and-ai-agents-classes-in-melbourne): Coding for General Maths students who like data.
- [Australian competitions calendar](/australian-coding-maths-and-ai-competitions-calendar): Maths contests through the school year.
- [Coding classes in Australia](/coding-classes-in-australia): A starting point for coding at any age.

## Contact

Book the free first class at [https://learn.modernagecoders.com/vce-general-maths-tutoring](https://learn.modernagecoders.com/vce-general-maths-tutoring#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
