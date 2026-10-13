---
title: "Maths Tuition in Edinburgh | Higher, N5 and Adult Maths"
description: "Online maths tuition in Edinburgh for ages 6 to 67: primary maths, National 5, Higher and Advanced Higher, and adult maths, with a gradient project on Arthur's Seat."
canonical: https://learn.modernagecoders.com/maths-tuition-in-edinburgh
source: src/pages/maths-tuition-in-edinburgh.html
---
> Online maths tuition in Edinburgh for ages 6 to 67: primary maths, National 5, Higher and Advanced Higher, and adult maths, with a gradient project on Arthur's Seat.

In short

Edinburgh learners aged 6 to 67 study maths with us live online, at whatever stage they are: early and upper primary, the S1 to S3 years, the three SQA senior courses (National 5, Higher, Advanced Higher), or adult study. Learners share a class of fifteen to twenty at the same level, unless they prefer a private teacher. Our Edinburgh example is a height profile up Arthur's Seat from the Palace of Holyroodhouse: the average gradient along the straight line is 0.149, but the steepest twenty-metre step is 0.574, and the chord gradient to the summit changes as the chord shrinks, which is how Higher Mathematics introduces rate of change. The trial is free of charge. Continuing lessons cost USD 100 monthly in a group or USD 150 monthly on a one to one basis.

Where most Edinburgh learners join

## Three usual first courses

Choose by stage. Everything else, from first counting to degree-level maths, follows below.

[![Elementary Maths for Grades 1-5 course thumbnail](/images/elementary-maths.webp)  EDI / 1 Primary maths From P1 counting to P7 fractions, with measure and scale taught through maps and real distances. Open the syllabus →](/courses/elementary-mathematics-complete-masterclass)[![GCSE Maths course thumbnail](/images/gcse-maths.webp)  EDI / 2 National 5 level maths Most GCSE topics reappear in National 5, so this course works as a topic match, taught against the National 5 course specification. Open the syllabus →](/courses/gcse-mathematics-mastery)[![A-Level Maths course thumbnail](/images/a-level-maths.webp)  EDI / 3 Higher and Advanced Higher level maths Calculus and algebra from the English A level course, re-sequenced to follow the SQA senior courses. Open the syllabus →](/courses/a-level-maths-course-pure-mechanics-statistics)

The Scottish route

## From P1 to Advanced Higher: maths for Edinburgh learners

Edinburgh schools follow the Curriculum for Excellence and SQA qualifications, not GCSEs and A levels, which belong to the English system. Adults can re-enter at whichever level suits them.

| Stage | Typical ages | Our emphasis |
| --- | --- | --- |
| Early primary | 5 to 8 | Counting, place value, number facts, shape and simple measure. |
| Later primary | 8 to 12 | Multiplication, fractions, decimals, scale on maps and explaining a strategy. |
| S1 to S3 | 11 to 15 | Algebra, Pythagoras, the gradient of a straight line and early statistics. |
| National 5 | 14 to 16 | Straight lines, quadratics, trigonometry, vectors, arcs and statistics. |
| Higher | 15 to 17 | Differentiation and integration, functions, circles, vectors and recurrence relations. |
| Advanced Higher | 16 to 18 | Related rates, integration by parts, complex numbers, matrices and Maclaurin series. |
| Adults | 18 to 67 | Rebuilding number confidence, re-sitting an SQA course, or numeracy for a job. |

### Higher maths tutor

SQA Higher Mathematics (C847 76) is where calculus arrives. Its course specification includes "solving problems using rate of change" and "finding the area between a curve and the x-axis", and it asks learners to use m = tan θ "to calculate a gradient or angle". Every one of those appears in the Arthur's Seat project below.

Higher students who struggle almost always have an algebra problem rather than a calculus problem. We check algebra at the trial lesson and fix it first.

### National 5 and Advanced Higher

At National 5 (C847 75), learners must "Identify gradient and y-intercept from various forms of the equation of a straight line". It is the first time gradient becomes a number rather than a feeling. At Advanced Higher (C847 77) the same idea grows into "applying differentiation to related rates".

Each course has its own page with us: [National 5 maths](/national-5-maths-tuition-online), [Higher maths](/higher-maths-tuition-online) and [Advanced Higher maths](/advanced-higher-maths-tuition-online).

Sources: SQA course specifications for [National 5](https://www.sqa.org.uk/sqa/files_ccc/n5-course-spec-mathematics.pdf), [Higher](https://www.sqa.org.uk/sqa/files_ccc/h-course-spec-mathematics.pdf) and [Advanced Higher](https://www.sqa.org.uk/files_ccc/AHCourseSpecMathematics.pdf) Mathematics, read on 1 October 2026. Ages are typical rather than fixed.

The Edinburgh project

## How steep is Arthur's Seat? A height profile, point by point

We drew one straight line from the palace to the summit and read the ground height every 19.72 metres from a public elevation model. It is not a walking route; it is a clean set of numbers.

The start is the mapped centre of the Palace of Holyroodhouse, and the end is the Arthur's Seat summit as plotted in OpenStreetMap. Between them we placed 59 points, 19.72 metres apart, and looked up each height in EU-DEM, a European elevation model with a grid of 25 metres, through the free OpenTopoData service.

The model puts the start at 43.0 metres and the summit point at 213.6 metres. OpenStreetMap labels the summit 251 metres. The 37.4 metre shortfall is not a mistake in either. A 25 metre grid averages the ground over each cell, and a narrow rocky top gets averaged down with the slopes around it. Resolution is a real limit on any measurement, and a good learner says so.

The line does not simply climb. It rises a little, dips to 39.4 metres about 177 metres along, climbs to 85.4 metres, then drops again to 64.4 metres before the final steep pull. Of the 58 steps between points, 22 go downhill.

Add up only the uphill steps and you climb 195.4 metres to finish 170.5 metres higher than you started. A walker feels the 195.4, and a map that quotes only the net gain hides it. Simple subtraction and addition, done carefully, already tells a story.

| Distance along, m | Height, m |
| --- | --- |
| 0 | 43.0 |
| 197 | 39.5 |
| 394 | 82.1 |
| 592 | 67.2 |
| 789 | 71.8 |
| 887 | 103.7 |
| 986 | 155.5 |
| 1,085 | 196.1 |
| 1,144 | 213.6 |

Heights: EU-DEM v1.1 (produced using Copernicus data and information funded by the European Union) via [OpenTopoData eudem25m](https://www.opentopodata.org/datasets/eudem/), read on 1 October 2026. End points: [OpenStreetMap contributors](https://www.openstreetmap.org/copyright). Distances, gradients and sums are Modern Age Coders' calculations. This is not a route guide; paths on the hill do not follow a straight line.

Higher Maths on a hillside

## Average gradient, local gradient and the idea of a derivative

Gradient is rise divided by run. The question is: over which run? Change the run and the answer changes, and following that change is how calculus begins.

### From the whole hill to one step

Over the whole line the gradient is 170.5 ÷ 1,143.8 = 0.149. Using m = tan θ, as Higher asks, the angle is about 8.5°. The steepest single step, between 947 and 966 metres along, has a gradient of 0.574, or 29.8°. Even the steepest stretch of about 99 metres averages 0.530.

So one number cannot describe a hill. National 5 learners find the gradient of a straight line; the hillside is not straight, so its gradient depends on where you stand. That is exactly why Higher needs differentiation.

### Shrinking the chord

Take a chord that ends at the summit and starts further and further back. Over the last 40 steps its gradient is 0.179; over the last 20, 0.373; over 10, 0.403; over 5, 0.312; over 2, 0.291; over the final step alone, 0.292.

The values settle as the chord shrinks, around 0.29 for the very top. On a smooth curve that limit would be the derivative. On real data the steps cannot shrink below the model's spacing, so the limit is only approached, never reached, which is a lovely thing to discuss with an Advanced Higher learner.

| Chord covers the last | Length, m | Gradient |
| --- | --- | --- |
| 40 steps | 789 | 0.179 |
| 20 steps | 394 | 0.373 |
| 10 steps | 197 | 0.403 |
| 5 steps | 99 | 0.312 |
| 2 steps | 39 | 0.291 |
| 1 step | 20 | 0.292 |

Integration closes the loop. Using the trapezium rule on all 59 heights, the area under the profile divided by its length gives a mean height along the line of 86.1 metres. Higher asks for "the area between a curve and the x-axis"; here the curve is real ground, and the learner has to decide what the area actually means before calculating it.

All gradients, angles and areas are our calculations from the EU-DEM profile above. SQA wording from the [Higher Mathematics course specification](https://www.sqa.org.uk/sqa/files_ccc/h-course-spec-mathematics.pdf).

Beyond our lessons

## Maths Week Scotland, the university and other ways to go further

Edinburgh offers plenty for learners who like maths. These are details we confirmed on public pages; we play no part in them.

### Maths Week Scotland

Education Scotland lists Maths Week Scotland 2026 as 19 September to 27 September, with the theme Maths Matters, and says "This year is the tenth anniversary of Maths Week Scotland."

### University of Edinburgh

Its School of Mathematics runs "workshops for local school students and events at the Edinburgh Science Festival", led by its Mathematics Outreach Team of staff and students.

### Why it matters

The school says it wants "to show people that mathematics is more than just facts and figures, or a subject in school". The hill project above is our own attempt at the same thing.

Responsibility for Maths Week Scotland moved from National Museums Scotland to Education Scotland, according to the Education Scotland page, and the week now runs with resource packs, live events and challenges for schools.

Pupils in Scotland can also enter the UK Mathematics Trust challenges, which run across the whole UK. Our [competitions calendar](/uk-coding-maths-and-ai-competitions-calendar) lists them by age.

Learners in Leith, Morningside or Portobello join each live lesson from their own homes. We build groups by level, so a classmate could be in Glasgow, Inverness or much further away.

A learner who enjoys problem solving can try competition work through our [olympiad page](/maths-olympiad-training-uk), which explains how we prepare for the harder rounds.

Sources: [Education Scotland, Maths Week Scotland](https://education.gov.scot/resource-themes/maths-week-scotland/); [University of Edinburgh, School of Mathematics, outreach](https://maths.ed.ac.uk/outreach). Both read on 1 October 2026. Neither organisation has any tie to Modern Age Coders.

Grown-up learners

## Adult maths lessons in Edinburgh

A good share of the people who contact us are adults, and they come for very different reasons.

### Starting fresh

Fractions, percentages and algebra, from the beginning and at a comfortable speed, with every question welcome.

### Back to an SQA course

National 5 or Higher for college, a career change or simply to finish something left undone at school.

### Maths for work

Rates, charts, percentages and spreadsheets. Our [adult maths page](/online-maths-classes-for-adults-in-uk) describes how these groups work.

Adults who have walked up the hill enjoy the profile project, because the numbers confirm what their legs told them: the climb is gentle for a long way and then very steep. Seeing a gradient of 0.574 next to an average of 0.149 makes the idea of a rate of change feel obvious rather than abstract.

Step by step

## From reading a map scale to differentiation, in four steps

Each step depends on the last. A learner joins wherever they are ready, and the trial lesson tells us where that is.

| Usually | Step | Secure when the learner |
| --- | --- | --- |
| P5 to P7 | 1. Scale and measure | Turns a map distance into a real one using the scale |
| S1 to S3 | 2. Straight-line gradient | Finds rise over run from two points and from a graph |
| S4 | 3. Gradient and angle | Moves between a gradient and an angle using tangent |
| S5 and S6 | 4. Rate of change | Explains why a chord's gradient tends to the derivative |

### Starting in S4 or S5

Not too late at all. We make algebra and straight-line work secure first, then build calculus on top.

If there is more to do than time allows, we will be honest about it after the trial.

### After Higher

S6 learners usually take Advanced Higher. Others branch into [statistics and probability](/courses/statistics-probability-maths-course) or [maths through coding](/courses/maths-through-coding), where a short program draws the hill profile itself.

Others discover a taste for problem solving and move to competition maths.

Course list

## Maths courses for Edinburgh learners

Arranged by stage. Where a course was written for English exams, we match it topic by topic to the SQA course an Edinburgh learner is taking.

I

### Primary

P1 to P7

MTE / A1

#### First maths

Counting, shapes and patterns for the youngest.

[Open the syllabus](/courses/early-math-foundations)

MTE / A2

#### Primary maths

All of primary maths, with the reasons.

[Open the syllabus](/courses/elementary-mathematics-complete-masterclass)

MTE / A3

#### Mental arithmetic

Calculating confidently in the head.

[Open the syllabus](/courses/mental-maths-mastery-kids)

MTE / A4

#### Abacus

A frame of beads that becomes a mental picture.

[Open the syllabus](/courses/abacus-mental-maths-course-for-kids)II

### S1 to S4

BGE and National 5

MTE / B1

#### S1 to S3 maths

Algebra, Pythagoras and graphs before the senior phase.

[Open the syllabus](/courses/comprehensive-middle-school-mathematics-mastery)

MTE / B2

#### Algebra foundations

Solid algebra before National 5.

[Open the syllabus](/courses/algebra-foundations-masterclass)

MTE / B3

#### National 5 level maths

GCSE content used as a National 5 match.

[Open the syllabus](/courses/gcse-mathematics-mastery)

MTE / B4

#### IGCSE maths

Cambridge 0580 and Edexcel International.

[Open the syllabus](/courses/igcse-mathematics-mastery)III

### S5, S6 and university

Higher and further

MTE / C1

#### Higher level maths

Calculus and algebra matched to Higher.

[Open the syllabus](/courses/a-level-maths-course-pure-mechanics-statistics)

MTE / C2

#### Statistics

Probability, distributions and inference.

[Open the syllabus](/courses/statistics-probability-maths-course)

MTE / C3

#### University maths

First-year calculus and linear algebra.

[Open the syllabus](/courses/college-mathematics-complete-masterclass)

MTE / C4

#### Competition maths

Unusual problems for keen learners.

[Open the syllabus](/courses/olympiad-competition-mathematics-mastery)IV

### Applied and adult

Work and interest

MTE / D1

#### Finance maths

Interest, loans and investments.

[Open the syllabus](/courses/complete-business-finance-mathematics-mastery)

MTE / D2

#### Maths for data

The numbers behind analysis.

[Open the syllabus](/courses/data-analytics-mathematics-masterclass)

MTE / D3

#### Maths through coding

Programs that draw and measure.

[Open the syllabus](/courses/maths-through-coding)

MTE / D4

#### Vedic maths

Speedy arithmetic for confident learners.

[Open the syllabus](/courses/vedic-maths-course-speed-calculation-mastery)

Scheduling

## Lessons around school, work and weekends

Our teachers are in India, which does not change its clocks. Edinburgh therefore sits 5.5 hours behind in winter and 4.5 hours behind in summer. Every slot is agreed in UK time.

Weekday afternoons

For primary and secondary pupils.

Weekday evenings

For S5, S6 and adults.

Weekend mornings

For anyone who likes a fresh start.

### A familiar teacher

The same person teaches the group from week to week.

### Quick reports

A short message home on progress after lessons.

### Level-matched groups

Fifteen to twenty learners working at the same level.

### Genuine data

Height profiles, maps and records sit beside exam questions.

### Private lessons

For a single tough topic or the final weeks before exams.

### Understanding first

Every method is explained before it is practised.

Student work

## Projects our students made next

Learners who started with gradients and graphs built the four projects below. There are many more in the [student labs](/student-labs).

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

Billed monthly in US dollars at a single rate for all countries outside India. No joining fee and no lengthy commitment.

Free first class

USD 0

no card required

- A real lesson pitched correctly
- A frank account afterwards
- No card details

Book it

Group batch

USD 100

a month, billed in US dollars

- Fifteen to twenty learners, one level
- The same teacher throughout
- Written work marked and explained
- Certificate at the end

Start here

One to one

USD 150

a month, billed in US dollars

- Personal teaching
- Focused on the exact difficulty
- Helpful just before exams

Enquire

What families say

## Rated 4.9 across 547 Google reviews

Straight from Google: reviews by our families and learners, left exactly as written.

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

Edinburgh maths questions

## What Edinburgh families and adult learners want to know

### What does gradient mean in maths?

Gradient measures steepness: the vertical rise divided by the horizontal run. A gradient of 0.149 means 14.9 metres up for every 100 metres across. For a straight line it is the same everywhere; for a curve it changes, which is why calculus is needed.

### How much does a maths tutor cost in Edinburgh?

The first lesson is free. Then it is USD 100 per month for a place in a group or USD 150 per month for private lessons, with no other charges.

### Do you tutor Higher Maths in Edinburgh?

Yes. We teach SQA Higher Mathematics, including differentiation, integration, functions, circles and vectors, steering lessons to the course specification.

### Can you help with National 5 and Advanced Higher maths?

Yes. We teach National 5 Mathematics and Advanced Higher Mathematics as well, matched to the SQA courses.

### What is the best age to begin maths tuition?

Any age can work. The right moment is when a learner first starts to feel unsure, before the gap grows. We teach children from 6 and adults up to 67.

### Is learning maths over video as effective as a home tutor?

For most learners, yes. The teacher sees each line of working as it appears and responds at once. Lessons are live with a real person, and each group keeps its teacher.

### Do you teach adults in Edinburgh?

We do. Adults range from people starting over with basic number to graduates brushing up calculus, and they learn in adult-only groups or privately.

### Can an Edinburgh learner sit English GCSEs or A levels with you?

We teach both, mainly to learners in England. Pupils at Edinburgh schools normally follow SQA courses, so we teach them National 5, Higher and Advanced Higher.

### Can you promise a particular grade?

No promise of a grade is ever honest. What we offer is structured teaching, marked work and a monthly update you can trust.

### Are you linked with the University of Edinburgh or Education Scotland?

No. We mention their public activities so families are aware of them, but we have no link with either, nor with any school.

Related

## More for Edinburgh learners

Pages on each SQA maths course, Scotland as a whole, and coding in Edinburgh.

### [Higher maths tuition](/higher-maths-tuition-online)

Calculus, functions, circles and vectors.

### [National 5 maths tuition](/national-5-maths-tuition-online)

The SCQF level 5 course, topic by topic.

### [Advanced Higher maths](/advanced-higher-maths-tuition-online)

The last stage of school maths in Scotland.

### [Coding classes in Edinburgh](/best-coding-class-in-edinburgh)

Python and AI for Edinburgh learners.

### [Maths tuition in Glasgow](/maths-tuition-in-glasgow)

Circle geometry on the Subway.

### [Coding and AI in Scotland](/coding-and-ai-classes-in-scotland)

The nation page, from the Highlands to the Borders.

Start here

## Book a free maths lesson

Give us the stage, from P3 to adult, and the topic that refuses to stick. We run a proper trial lesson and then share an honest verdict.

Prefer to explore first? Look through the [courses](/courses) or read [how we teach](/how-we-teach).

[WhatsApp us](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20maths%20lesson%20for%20a%20learner%20in%20Edinburgh.) · [+91 91233 66161](tel:+919123366161) · [connect@modernagecoders.com](mailto:connect@modernagecoders.com)

Replies come quickest on WhatsApp. The +91 number reflects where our teachers live; there is no office in Edinburgh and every class is held online.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/maths-tuition-in-edinburgh*
