---
title: "Best Coding Classes in Stirling | Modern Age Coders"
description: "Live online coding, Python, AI and maths lessons for Stirling learners aged 6 to 67, from Raploch and Torbrex to Causewayhead and Cornton. The first lesson is free."
canonical: https://learn.modernagecoders.com/best-coding-class-in-stirling
source: src/pages/best-coding-class-in-stirling.html
---
> Live online coding, Python, AI and maths lessons for Stirling learners aged 6 to 67, from Raploch and Torbrex to Causewayhead and Cornton. The first lesson is free.

Skip to contentCourse picks for Stirling

## Four courses for the city of the formula

Pick the course nearest to what the learner already enjoys. Each one begins with a free live lesson, and there is no card to give when you book.

[![Scratch Coding for Kids course thumbnail](/images/scratch-kids.webp)Ages 6 to 12Scratch Coding for KidsBlock programming for younger children, from games to counting how many ways a set of cards can be arranged.See the syllabus](/courses/scratch-programming-complete-course)[![Maths Through Coding course thumbnail](/images/maths-through-coding.webp)Ages 10 to 15Maths Through CodingMultiplication, powers and logarithms explored in short programs, the arithmetic behind enormous numbers.See the syllabus](/courses/maths-through-coding)[![High School Mathematics course thumbnail](/images/high-school-maths.webp)Ages 13 to 18High School MathematicsSecondary mathematics in depth, including logarithms, series and approximations used far beyond the classroom.See the syllabus](/courses/complete-high-school-mathematics-mastery)[![Python Masterclass course thumbnail](/images/python-college.webp)University and adultPython MasterclassPython for adults who work with very large or very small numbers and need to know where a computer's arithmetic runs out.See the syllabus](/courses/python-programming-masterclass-zero-to-advanced-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Stirling today

## A city in a compact council area

The first results of Scotland's 2022 census, published by National Records of Scotland for each council area and rounded to the nearest hundred, for Stirling and for Scotland.

| Place | Counted in 2011 | Counted in 2022, to the nearest hundred | People for each square kilometre in 2022 |
| --- | --- | --- | --- |
| Stirling | 90,247 | 92,600 | 42.4 |
| Scotland | 5,295,403 | 5,436,600 | 69.8 |

### Teens and twenties

The 2022 figures put about 6,500 Stirling residents at ages 15 to 19 and about 7,500 at ages 20 to 24, each rounded to the nearest hundred.

### Homes

There were about 40,300 households with at least one usual resident in 2022, compared with 37,566 at the 2011 census.

### Age balance

In 2022, 14.6% of Stirling residents were 14 or under and 20.5% were 65 or over; for Scotland the shares were 15.3% and 20.1%.

Every 2022 figure is rounded on its own by National Records of Scotland, so we print each one as published and never add them together. Our Stirling classes take in the city and the villages around it. A Raploch eight-year-old building a first game, an S5 pupil from Torbrex working through Higher Mathematics and a Causewayhead adult learning Python to automate reports could each join a class at a different level.

Kirk, hospital and a mathematician

## A coronation church and a scholar from the west

From Historic Environment Scotland's listing records, and from the MacTutor History of Mathematics biography of James Stirling at the University of St Andrews.

### 29 July 1567

Historic Environment Scotland's listing for the Church of the Holy Rude records that James VI was crowned in the church on this date. Its west tower and nave date from 1456 to about 1470.

### 1639

Cowane's Hospital, the Guildhall on St John Street, was built to a design by John Mylne and is dated 1639, with a statue of John Cowane in a niche on its tower. Both buildings are listed at Category A.

### 1730

MacTutor records that James Stirling, born at Garden in 1692, published Methodus Differentialis in 1730, and that the formula for n! now known as Stirling's formula appears there as Example 2 to Proposition 28.

MacTutor also records that Stirling wrote to the mathematician De Moivre about errors in a table of logarithms of factorials, and that De Moivre extended his own results using Stirling's ideas. Historic Environment Scotland lists the Old Town Jail, the Tolbooth, Argyll Lodging, the Athenaeum and Stirling railway station at Category A too. We have no connection with Historic Environment Scotland or the University of St Andrews, and the dates and descriptions here are theirs.

How the numbers were checked

Python can hold whole numbers of any size, so every factorial on this page up to 92,600! was computed exactly, digit by digit, and compared with Stirling's formula. The census figure of 92,600 is the rounded 2022 count for Stirling council area.

Signature project

## How close is Stirling's formula?

Stirling's formula says that n! is close to the square root of 2 pi n, multiplied by n divided by e, raised to the power n. It needs no multiplication of the numbers from 1 to n at all, only a power, a square root and a few constants.

| n | Exact n! | Formula too low by | Adding 1/(12n) leaves |
| --- | --- | --- | --- |
| 5 | 120 | 1.65% | 0.0022% |
| 10 | 3,628,800 | 0.83% | 0.000277% |
| 100 | a 158-digit number | 0.0833% | 0.000000278% |
| 1,000 | a 2,568-digit number | 0.00833% | too small to measure in ordinary floating point |
| 92,600 | a 419,696-digit number | 0.00009% | too small to measure in ordinary floating point |

### 1. Compute exactly

Multiply 1 by 2 by 3 all the way to n with Python's unlimited whole numbers. 92,600! takes under a second and ends in 23,147 zeros, one for each factor of 5 hiding in the numbers.

### 2. Work in logarithms

The formula's answer for 92,600 is far too big for a normal decimal number, so compare logarithms instead: the logarithm tells you the number of digits and the leading digits.

### 3. Watch the error shrink

The error falls roughly in proportion to one over 12n: 0.83% at 10, 0.0833% at 100, 0.00833% at 1,000. Adding that term as a correction makes the formula far more accurate again.

### Where the computer runs out

An ordinary floating-point number, the kind most calculators and spreadsheets use, can hold nothing larger than about 1.8 times 10 to the power 308. The largest factorial that fits is 170!. Anything bigger has to be handled through logarithms, and that is exactly what Stirling's formula provides: for 92,600! it gives a logarithm of 419,695.39, so the number has 419,696 digits and begins 2.45888, matching the exact calculation.

The corrected formula is so accurate that at n = 1,000 and above, the remaining gap is smaller than ordinary floating-point arithmetic can resolve. A learner who reports "zero error" there has found the limit of the computer, not a perfect formula. Knowing which of those two things you are looking at is the most useful lesson on this page.

Approximations

## Five checks before trusting an approximation

Learned on factorials in Stirling, then used for probability, statistics, physics, finance models and any calculation too large to do exactly.

| Question | For Stirling's formula | What goes wrong if you skip it |
| --- | --- | --- |
| Is there an exact answer to compare? | Python computes every factorial exactly | An approximation checked only against itself |
| How is the error measured? | As a percentage of the exact value | Huge absolute errors that are actually tiny |
| Does the error behave as theory says? | It shrinks like 1 over 12n | An unnoticed bug hiding in a plausible number |
| Where does the computer give out? | Floating point stops at 170! | Overflow reported as infinity or an error |
| Is a tiny error real or rounding? | Below double precision past n = 1,000 | Rounding noise mistaken for a result |

The second row is the surprise for most learners. At n = 92,600 the formula is off by an absolute amount that is itself a number with more than 419,000 digits, yet as a share of the answer the error is less than one part in a million. Whether an approximation is good depends entirely on how the error is measured.

### Younger learners

Counting how many ways three, four and five cards can be arranged, and seeing how fast the numbers grow.

### Teenagers

Factorials, logarithms, asymptotic formulas and floating-point limits in Python, checked against exact arithmetic.

### Adults

Judging when an approximation is good enough for work, with the error measured the right way.

We have no connection with the University of St Andrews, Historic Environment Scotland, National Records of Scotland or Stirling Council. The biography, listing records and census tables are published openly; the factorials, errors and comparisons on this page are our own calculations.

Learning ladder

## From arranging cards to Stirling's formula

The age bands are a guide; the free lesson shows the right place to start.

Ages 6 to 10

### Counting arrangements

Arranging and counting objects in block code, and noticing how quickly the totals grow.

[Scratch Coding for Kids](/courses/scratch-programming-complete-course)[Mental Maths for Kids](/courses/mental-maths-mastery-kids)Ages 11 to 13

### Big numbers in Python

Loops, multiplication and very large whole numbers in Python, with a program that prints factorials.

[Python and AI for Kids](/courses/python-ai-kids-masterclass)[Maths Through Coding](/courses/maths-through-coding)Ages 14 to 18

### Approximations

Logarithms, Stirling's formula and floating-point limits, with every estimate tested against an exact answer.

[High School Mathematics](/courses/complete-high-school-mathematics-mastery)[Python for Teens](/courses/python-complete-masterclass-teens)Ages 18 to 67

### Numbers at work

Handling very large and very small values in Python without silent overflow or rounding errors.

[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)[College Maths Course](/courses/college-mathematics-complete-masterclass)Coding and AI

## AI works with enormous numbers constantly. Why should a Stirling teenager learn where arithmetic breaks?

Because models are built on floating-point numbers, and knowing their limits explains many of the tricks inside them.

Machine learning systems multiply and add millions of numbers, and they routinely work with logarithms of probabilities rather than the probabilities themselves, for the same reason this project does: the raw values would overflow or vanish. A learner who has watched 171! break a calculator understands why.

The project also teaches honest error reporting. An approximation that is 0.00009% out sounds perfect until you notice the true answer has 419,696 digits. Saying clearly how an error was measured is a habit that matters whenever a machine hands you a number.

So a Stirling teenager should keep learning to code in 2026, a short ride from where James Stirling was born in 1692: computers do the multiplying, but people still need to know when the answer can be trusted. The longer argument is in [why coding is worth learning in 2026](/blog/is-coding-worth-learning-2026).

Delivery

## Raploch, Cambuskenneth or Bannockburn, one class for all

Stirling learners live on both sides of the River Forth and out towards Bannockburn and Bridge of Allan. Online, each of them is the same distance from the lesson.

### Both sides of the Forth

A learner in Cornton and another in Cambusbarron can take the same class without either of them making the trip into town.

### Scottish school stages

Classes follow the stages Scottish families know, from the P years through S1 to S6, with National 5, Higher and Advanced Higher courses named as schools name them; teaching is in English.

### First lesson, real work

The free session is spent coding, not listening to a pitch, and ends with the teacher suggesting a level, a course and a weekly time. No card details are taken.

### Classes by stage

Fifteen to twenty learners at a single level, from Stirling, elsewhere in the UK and overseas, which keeps sensible times open for every stage.

### Two a week

Two fixed lessons weekly, around eight a month, with holidays and exam study planned together with the teacher.

### Teachers in India

India keeps one clock all year, so a Stirling lesson at five in the afternoon starts at 21:30 for our teachers during British Summer Time and 22:30 once the clocks go back.

Across central Scotland

Learners in Dunblane, Callander, Falkirk or Alloa join exactly the same classes, because every lesson is online and classes are arranged by level.

Fees

## Stirling lesson fees

The opening lesson is free, and a single monthly fee follows.

First class**USD 0**

A whole lesson at no charge, finishing with a recommended level, course and weekly time.

Group tuition**USD 100**

About eight live lessons a month, in a class of fifteen to twenty learners at one level.

Private tuition**USD 150**

About eight live lessons a month, with a teacher giving your learner their full attention.

Families in Borestone or Causewayhead pay in US dollars, as every family outside India does, and our site never shows pound prices. Payment starts only after the free lesson, once you have settled a course and a weekly time with us; pauses, missed lessons and changes between group and private teaching are explained on the pricing page.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20coding%20lesson%20for%20a%20learner%20in%20Stirling.)Reviews

## Six Google reviews from families, unedited

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

## Book a free lesson for a Stirling learner

We match the first lesson to the learner: a card-arranging counting game for a young child, a short Python program that prints factorials for a beginner, or exact factorials and Stirling's formula for a teenager ready for real numerical mathematics.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Stirling one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20coding%20lesson%20for%20a%20learner%20in%20Stirling.)

Submitted details are used for placement and follow-up.

FAQ

## Stirling coding class questions

What Stirling families most often ask us.

### How many people live in Stirling?

Scotland's Census 2022 counted about 92,600 usual residents in Stirling council area, rounded to the nearest hundred by National Records of Scotland, against 90,247 at the 2011 census.

### How does Stirling compare with Scotland?

The council area has 42.4 residents per square kilometre against 69.8 for Scotland, and in 2022 20.5% of its residents were 65 or over, close to the Scottish figure of 20.1%.

### What is Stirling's formula?

An approximation for n!, the product of all whole numbers up to n: the square root of 2 pi n times n over e to the power n. It becomes more accurate as n grows, and adding a small correction of 1/(12n) improves it further.

### How accurate is Stirling's formula?

For n = 10 it is 0.83% below the exact 3,628,800; for n = 1,000 it is 0.00833% below; for n = 92,600 it is less than one part in a million below, and it gives the exact number of digits, 419,696.

### Who was James Stirling?

The MacTutor History of Mathematics records that he was born in May 1692 at Garden, about 20 km west of Stirling, and published Methodus Differentialis in 1730, where the formula now named after him appears. We are not connected with MacTutor or the University of St Andrews.

### Where was James VI crowned?

Historic Environment Scotland's listing for the Church of the Holy Rude in Stirling records that James VI was crowned there on 29 July 1567. The church is listed at Category A.

### When do Stirling lessons happen?

Most Stirling families choose a time after school, on a weekday evening or at the weekend, agreed in the free lesson. For our teachers in India that is late evening: they are four and a half hours ahead of Scotland in summer and five and a half in winter.

### Is there a centre in Stirling?

No. We have no Stirling centre and no premises anywhere in the UK, because every lesson is live online. Learners need a computer with sound and a stable connection, and our phone number is Indian.

### What do Stirling lessons cost?

The first lesson is free. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, and one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.

### How are learners grouped?

By level, pace and goals rather than by age or address, with fifteen to twenty learners at the same stage. If no group fits the learner's week, we offer one-to-one lessons.

Explore Scotland and the UK

## Scotland and beyond

Up the road, the [Perth page](/best-coding-class-in-perth-scotland) runs Soundex over Walter Scott's The Fair Maid of Perth, and to the south-west [Glasgow](/best-coding-class-in-glasgow) has its own project. Scottish exam years are covered on the [National 5 Computing Science](/national-5-computing-science-help) and [Higher Computing Science](/higher-computing-science-help) pages. Read the [Scotland guide](/coding-and-ai-classes-in-scotland) for how our stages match the Curriculum for Excellence, and the [UK coding page](/coding-classes-in-united-kingdom) for every other city.

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20coding%20lesson%20for%20a%20learner%20in%20Stirling.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/best-coding-class-in-stirling*
