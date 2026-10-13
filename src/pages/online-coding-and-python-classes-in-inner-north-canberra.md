---
title: "Online Coding and Python Classes in Inner North Canberra"
description: "Live online coding and Python classes for Canberra's Inner North, ages 6 to adult, with a Python project comparing two suburbs' registered vehicles using Counter."
canonical: https://learn.modernagecoders.com/online-coding-and-python-classes-in-inner-north-canberra
source: src/pages/online-coding-and-python-classes-in-inner-north-canberra.html
---
> Live online coding and Python classes for Canberra's Inner North, ages 6 to adult, with a Python project comparing two suburbs' registered vehicles using Counter.

Skip to contentCourse picks for the Inner North

## Python, from first programs to data work

Courses that build the habits the Counter project needs. A free trial sets the level.

[![Python Masterclass course thumbnail](/images/python-college.webp)University and adultPython MasterclassThe standard library in depth, collections included.See the syllabus](/courses/python-programming-masterclass-zero-to-advanced-college)[![Python for Teens course thumbnail](/images/python-teens.webp)Ages 13 to 17Python for TeensDictionaries, counters and tests on real tables.See the syllabus](/courses/python-complete-masterclass-teens)[![Python and AI for Kids course thumbnail](/images/python-kids.webp)Ages 8 to 12Python and AI for KidsFirst Python, counting and comparing things.See the syllabus](/courses/python-ai-kids-masterclass)[![Data Analysis Course course thumbnail](/images/data-analysis-college.webp)University and adultData Analysis CourseComparisons that respect gaps in the data.See the syllabus](/courses/data-analysis-mastery-course-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)The Inner North in the Census

## Apartments, walkers and students

The ABS calls this district the North Canberra statistical area (SA3 80105). Its 2021 QuickStats, read on 13 October 2026, sit here beside the bureau's 2025 estimate.

| Measure | Value |
| --- | --- |
| Residents, 2021 Census | 61,188 |
| Estimated residents, 2025 | 68,290 |
| Median age | 31 |
| Families | 13,352 |
| Private dwellings | 27,982 |
| Motor vehicles per dwelling | 1.4 |

| Share | Inner North | ACT |
| --- | --- | --- |
| Flat or apartment | 42.6% (10,078) | 19.4% |
| Walked to work | 13.4% (4,888) | 4.0% |
| Drove a car to work | 40.8% (14,925) | 59.0% |
| Residents aged 15 to 19 | 7.7% (4,714) | 5.8% |

### Walkable

The walking share was more than three times the ACT figure, and only 40.8% of workers drove.

### Fewer cars

Homes averaged 1.4 motor vehicles, the lowest of the eight districts on our pages, which shows in the registration data too.

### Teen residents

Young people aged 15 to 19 made up 7.7% of residents, compared with 5.8% for the ACT, and degree holders were common too.

Census night was during the pandemic, so walking and driving shares describe that week. The ABS rounds its shares and slightly perturbs small counts; table parts may not sum, and we print its figures unchanged.

Signature project

## What Braddon minus Ainslie really means

The ACT publishes registered vehicles by suburb, make, model and emissions band, dated 1 September 2026, leaving out any count of ten or fewer. Braddon has 69 published rows and Ainslie 62. Learners turn each into a Counter keyed by vehicle type and ask: which types are more common in Braddon, and by how much?

| Operation | Keys kept | What it means |
| --- | --- | --- |
| A - B | 51 | Positive differences only; negatives and zeros vanish |
| A.subtract(B) | 89 | Every key, including 34 negative and 4 zero results |
| A & B | 42 | Types published in both, at the smaller count |
| A \| B | 89 | Types in either, at the larger count |

### More in Braddon

The biggest positive gaps are small hatchbacks and compact SUVs: one popular Mazda model by 37 vehicles and one Hyundai model by 30.

### More in Ainslie

Going the other way, Ainslie leads on a Subaru wagon by 28 and on one electric SUV in the top emissions band by 23, as well as one trailer type.

### The vanishing third

Using the minus sign alone, a learner would never see Ainslie's 34 leads at all, because Counter subtraction drops results that are zero or below.

### Suppression changes "only"

Twenty-seven types appear only in Braddon's rows and 20 only in Ainslie's. That does not mean the other suburb has none: anything from zero to ten is simply not published. Learners label these as "Braddon published, Ainslie 10 or fewer" and avoid adding counts together into totals the data cannot support.

Our source is the Access Canberra registration table published on data.act.gov.au under CC BY 4.0, which we fetched on 13 October 2026. Building the two Counters, taking the differences and tallying keys were all done in our own Python session.

Writing it in Python

## Four operators and one method

Counter supports +, -, & and | as multiset operations. Each one keeps only positive results, which is handy and dangerous in equal measure.

| Step | Learner task |
| --- | --- |
| 1 | Build one Counter per suburb, keyed by make, model and emissions band. |
| 2 | Compute A - B and B - A and check that together they still miss the 4 ties. |
| 3 | Use subtract() to keep every difference and sort by size in both directions. |
| 4 | Mark every key missing from one side as "10 or fewer", not zero. |

Step 2 makes the behaviour visible: A - B has 51 keys, B - A has 34, and the four ties are in neither. Learners then try unary plus and minus on the subtract() result, which split it back into the same two groups. By the end they can say which operation answers "who has more of what" and which answers "what do both have".

### Younger learners

Compare two bags of coloured counters and decide what "take away" should mean when one bag has fewer.

### Teenagers

Run all four operations on the two suburbs and explain every key count.

### Adults

Use Counter for stock, survey or log comparisons and document what each operation drops.

Around the Inner North

## Exotic trees, street art and Friday bins

A few more Inner North facts from territory open data.

### Exotic streets

Of 54,182 public tree records in Inner North suburbs, 31,730 are labelled exotic and 17,731 native, by our count.

### Public art

Seventy-five artworks are listed, including 38 sculptures, 18 street art pieces and 10 murals.

### Friday collection

Twelve of the 13 Inner North suburbs in the ACT NOWaste list put their garbage out on a Friday.

District and dates

The boundary is the bureau's North Canberra area, roughly 44.7 square kilometres; our outline test puts 13 named suburbs in it. Russell has no rows in the vehicle data. ACT schools welcome new students on Monday 1 February 2027.

Learning ladder

## From counter bags to collections.Counter

Ages are a guide; the trial lesson places each learner.

Ages 6 to 10

### Blocks first

Scratch projects about counting and comparing.

[Scratch Coding for Kids](/courses/scratch-programming-complete-course)[Coding for Kids](/courses/kids-coding-blocks-masterclass)Ages 10 to 14

### Typed Python

Lists, dictionaries and simple tallies.

[Python and AI for Kids](/courses/python-ai-kids-masterclass)[Maths Through Coding](/courses/maths-through-coding)Ages 14 to 18

### Python with data

The collections module on real public tables.

[Python for Teens](/courses/python-complete-masterclass-teens)[Data Science for Teens](/courses/data-science-course-for-teens-python-data)University and adult

### Python at work

Careful comparisons and clean reporting.

[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)[Python Automation Course](/courses/python-ai-automation-masterclass-college)Python and AI

## Can an assistant compare the suburbs for you?

It can write the code in seconds; reading the result needs you.

An assistant asked for "what Braddon has more of" will happily write A - B. The output is correct for that question and silent about the 34 types where Ainslie leads.

An Inner North learner who knows what Counter subtraction discards, and what suppression hides, can turn generated code into a fair comparison.

Our Python classes pair quick drafts with slow, careful reading. The longer argument is in [why understanding code still beats copying it](/blog/is-coding-worth-learning-2026).

Delivery

## Inner North classes, online

Lessons are live over video, so learners join from an apartment in Braddon or a house in Hackett.

### Live and guided

A teacher leads every lesson and reviews code as it is written.

### School calendar

Lessons follow ACT terms and pause for holidays.

### Trial lesson

One free class, then a written recommendation.

### Group size

Level-matched groups of fifteen to twenty, or private.

### Pace

Two lessons a week, about eight a month.

### India hours

In summer a 7pm Inner North lesson begins at 1:30pm in India.

Clock changes

The IANA time zone database links Canberra to Sydney, so clocks move forward on 4 October 2026 and back on 4 April 2027.

Fees

## Inner North fees

All learners pay the same fees.

First class**USD 0**

The first class is free and comes with a plan.

Group tuition**USD 100**

Groups: roughly eight sessions monthly, fifteen to twenty learners.

Private tuition**USD 150**

Private classes: about eight a month, one teacher.

Billing is in US dollars, and nothing is charged until the trial lesson has agreed what to study and when. Holidays and missed classes are explained on the pricing page.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%2C%20we%20live%20in%20Canberra's%20Inner%20North.%20Could%20we%20arrange%20a%20free%20trial%20Python%20lesson%3F)Reviews

## Reviews on Google

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

## Book a free Inner North lesson

Send us the learner's age and what excites them. Primary children often begin with the two-bags game; secondary students can go straight to the Braddon and Ainslie Counters.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Inner North Canberra one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%2C%20we%20live%20in%20Canberra's%20Inner%20North.%20Could%20we%20arrange%20a%20free%20trial%20Python%20lesson%3F)

Submitted details are used for placement and follow-up.

FAQ

## Inner North coding and Python questions

Questions from Inner North families and adult learners.

### How many people live in the Inner North?

The 2021 Census counted 61,188 people in the North Canberra statistical area, median age 31. The ABS estimate for 2025 is 68,290.

### What is collections.Counter?

A Python dictionary for counting things. It adds multiset operations: +, -, & and |, plus methods such as subtract() and most_common().

### Why does Counter subtraction drop values?

The operators keep only positive counts by design. Use subtract() when you need zeros and negatives too.

### What does suppressed data mean here?

The ACT does not publish vehicle counts of ten or fewer, so a missing row means "ten or fewer", not "none".

### Can 10-year-olds learn Python?

Often yes, especially after a term or two of Scratch. The free lesson shows whether typing code will be fun or frustrating yet.

### Which suburbs are in the Inner North?

Our test places 13 named suburbs in the North Canberra area, including Braddon, Ainslie, Dickson, Lyneham, Watson and Turner.

### Do you have a centre in the Inner North?

No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.

### What do Inner North classes cost?

The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.

### How are groups formed?

By level and pace in groups of fifteen to twenty, not by age or suburb. One-to-one lessons are there if no group time fits.

### Can university students and adults join?

Yes. Students and working adults have their own groups, or a private teacher, and often bring a project of their own.

More for Canberra learners

## More pages

Inner North learners can also visit the [Canberra page](/vibe-coding-and-ai-agents-classes-in-canberra), our [ACT guide](/coding-and-ai-classes-in-australian-capital-territory), and the [Python and AI course for kids](/python-ai-course-for-kids-australia).

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%2C%20we%20live%20in%20Canberra's%20Inner%20North.%20Could%20we%20arrange%20a%20free%20trial%20Python%20lesson%3F)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/online-coding-and-python-classes-in-inner-north-canberra*
