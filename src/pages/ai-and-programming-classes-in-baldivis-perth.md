---
title: "AI and Programming Classes in Baldivis, Perth"
description: "Live online AI and programming classes for Baldivis, ages 6 to adult, with a project that documents a real WA schools dataset before training any model on it."
canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-baldivis-perth
source: src/pages/ai-and-programming-classes-in-baldivis-perth.html
---
> Live online AI and programming classes for Baldivis, ages 6 to adult, with a project that documents a real WA schools dataset before training any model on it.

Skip to contentCourse picks for Baldivis

## AI, data and Python courses

Courses that pair coding with careful handling of data. The free trial confirms the level.

[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)Ages 13 to 17AI and Machine Learning for TeensMachine learning from data checks to model testing.See the syllabus](/courses/ai-ml-masterclass-teens)[![Data Science for Teens course thumbnail](/images/data-science-teens.webp)Ages 13 to 17Data Science for TeensPython and charts on public datasets, documented as you go.See the syllabus](/courses/data-science-course-for-teens-python-data)[![Artificial Intelligence Course course thumbnail](/images/ai-college.webp)University and adultArtificial Intelligence CourseHow AI systems are built, evaluated and documented.See the syllabus](/courses/artificial-intelligence-complete-masterclass-college)[![AI Literacy for Kids (Ages 8 to 14) course thumbnail](/images/ai-literacy-for-kids.webp)Ages 8 to 12AI Literacy for Kids (Ages 8 to 14)What AI learns from, explained with examples children can test.See the syllabus](/courses/ai-literacy-for-kids-course)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Baldivis in the 2021 Census

## Young families in new houses

Figures for the Baldivis suburb and locality (ABS SAL50054), a suburb of the City of Rockingham, from 2021 Census QuickStats read on 12 October 2026.

| Measure | Value |
| --- | --- |
| People | 37,697 |
| Median age | 31 |
| Families | 10,280 |
| Private dwellings | 13,660 |
| People per household | 2.9 |
| Bedrooms per dwelling | 3.7 |

| Share | Baldivis | WA |
| --- | --- | --- |
| Residents aged 5 to 9 | 9.4% (3,526) | 6.5% |
| Residents aged 10 to 14 | 8.5% (3,192) | 6.4% |
| Separate houses | 95.5% (11,843) | 79.7% |
| Technicians and trades workers | 18.7% (3,456) | 15.3% |

### Families

Couples with children made up 53.0% of Baldivis families, or 5,444, against 44.6% across the state.

### Work

Of employed residents, 60.1% worked full time, and the trades were a larger share of jobs than in WA overall.

### Census caution

Census night came during the pandemic, so commuting figures may describe an unusual week rather than a typical one.

The ABS rounds shares and lightly adjusts small counts, so parts of a table can miss the total by a little. We quote each published figure unchanged and never build totals by adding rows.

Signature project

## A datasheet before a model

In 2018 Timnit Gebru and colleagues proposed that every dataset should come with a datasheet: who made it, what it contains, how it was collected and what it should not be used for. Baldivis learners write one for the WA schools list, measuring each answer from the file rather than guessing.

| Datasheet question | What the file shows |
| --- | --- |
| What is one row? | A currently active school: 1,153 rows, 319 of them non-government |
| When was it counted? | Student numbers as at the 2026 Semester 1 census, one snapshot |
| What does a blank mean? | 79 blank year-level cells inside schools' own year ranges, at 44 schools; no cell anywhere holds a zero |
| Are all columns used? | The UPR column is empty in every row; USE has one value |
| How precise are locations? | Most coordinates have 8 decimal places, but 5 schools have only 3, roughly 100 metres |
| What is incomplete? | 3 rows lack a total, 1 lacks coordinates, 1 lacks a classification |

### The blank question

With no zeros in the file, a blank probably means no students in that year. It could also mean a value not reported. The datasheet records both readings and says which one the project assumes.

### One snapshot only

Year 1 and Year 6 in the same census are different children. A model that reads the gap between them as growth over time is misusing the file, and the datasheet says so.

### Baldivis is clean

For the 10 government schools inside the Baldivis outline, every year level in range has a number, and coordinates carry 6 or 8 decimals.

### Why this is AI work

Models inherit every gap and guess in their training data. A one-page datasheet is the cheapest safety check there is, and it often decides that a planned model should not be built, or should answer a narrower question.

The file is the Department of Education's Western Australian Schools Lists spreadsheet, licensed CC BY 4.0. Which schools fall inside Baldivis is decided by our point-in-polygon test, and it agrees with the suburb field for all ten. Counts of blanks, decimals and columns are our own measurements.

Writing the datasheet

## Questions first, then code to answer them

Each datasheet question becomes a few lines of Python, and each answer goes into a plain-text document that travels with the file.

| Step | Learner task |
| --- | --- |
| 1 | Load the spreadsheet, find the real header row and count rows by classification. |
| 2 | For each school, check every year level between its lowest and highest year for blanks or zeros. |
| 3 | Measure coordinate precision and list rows missing totals, locations or classes. |
| 4 | Write the datasheet, then list two questions the data can answer and two it cannot. |

Step 1 has its own surprise: the header sits several rows down, beneath a title block, and many columns in between are empty spacers. A learner who reads the file blindly gets shifted columns and wrong year levels. Baldivis numbers make a good check after loading, because the eight primary schools' Kindergarten counts run from 54 to 85 and the two secondary colleges list 273 and 182 students in Year 7.

### Younger learners

Make an information card for a class collection: what was counted, when, and what is missing.

### Teenagers

Write the datasheet in Python and Markdown, then argue for or against a model idea.

### Adults

Draft datasheets for datasets at work before they reach an analytics or AI project.

Around Baldivis

## Schools, roads and the 2027 calendar

Details from the schools list, the Main Roads Traffic Digest and the WA Department of Education calendar.

### Ten government schools

Eight primary schools and two senior high schools lie inside the outline, all in the South Metropolitan education region.

### Counted roads

Our map test finds 17 Main Roads count sites inside Baldivis, including three on Kwinana Freeway and two each on Safety Bay Road and Baldivis Road.

### Term 3, 2027

WA public schools run Term 3 from Monday 19 July to Friday 24 September 2027.

Outline used

Baldivis is the ABS suburb outline of about 87.3 square kilometres. Our grid test of that outline against the ABS council areas places all of it within the City of Rockingham.

Learning ladder

## From information cards to model documentation

Ages are a guide; the trial lesson places each learner.

Ages 6 to 9

### Sorting and labels

Block code about collecting and describing things.

[Scratch Coding for Kids](/courses/scratch-programming-complete-course)[AI Literacy for Kids (Ages 8 to 14)](/courses/ai-literacy-for-kids-course)Ages 8 to 12

### First data

Counting, tables and first Python programs.

[Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)[Python and AI for Kids](/courses/python-ai-kids-masterclass)Ages 13 to 17

### Data and models

Machine learning with documented, checked data.

[Data Science for Teens](/courses/data-science-course-for-teens-python-data)[AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens)University and adult

### Responsible AI

Building and documenting AI systems for work.

[Artificial Intelligence Course](/courses/artificial-intelligence-complete-masterclass-college)[Data Analysis Course](/courses/data-analysis-mastery-course-college)Coding and AI

## Do learners still need this when AI can read files?

More than ever, because AI tools read files confidently even when the file is ambiguous.

Hand the schools spreadsheet to an AI assistant and it will summarise it. It may not notice the header buried beneath the title block, the empty spacer columns or that blanks might hide missing reports.

A Baldivis learner who has written the datasheet can ask the right follow-up questions and spot an answer built on a misread column. That judgement does not come from the tool.

In our AI classes, understanding the data comes before training on it. The longer argument is in [whether learning to code is still worth it in 2026](/blog/is-coding-worth-learning-2026).

Delivery

## How Baldivis lessons work

Every class is live online, so learners join from home with no trip up the freeway.

### Taught live

Teachers lead each lesson and look at learners' code as they write it.

### WA calendar

Lessons follow WA school terms and stop for holidays.

### Free trial

The first lesson costs nothing and ends with a plan.

### Group sizes

Fifteen to twenty learners per group, or private lessons.

### Rhythm

Two lessons each week, about eight a month.

### India time

A 4:30pm Baldivis lesson begins at 2pm in India.

Western Australian time

According to the IANA time zone database, WA has not used daylight saving since March 2009, so the difference from India is always two and a half hours.

Fees

## Baldivis fees

Every learner pays the same published fees.

First class**USD 0**

The opening lesson is free, with a course plan.

Group tuition**USD 100**

Group lessons: about eight a month, fifteen to twenty learners each.

Private tuition**USD 150**

Private lessons: about eight a month with a single teacher.

Fees are in US dollars and only start after the trial has agreed a course and a weekly time. The pricing page lists holiday and missed-lesson terms.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20AI%20or%20programming%20class%20for%20a%20learner%20in%20Baldivis.)Reviews

## Family reviews on Google

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

## Book a free Baldivis lesson

Let us know the learner's age and interests. A primary student might make an information card; a teenager might start the schools datasheet.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Baldivis one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20AI%20or%20programming%20class%20for%20a%20learner%20in%20Baldivis.)

Submitted details are used for placement and follow-up.

FAQ

## Baldivis AI and programming questions

Questions from Baldivis parents and adult learners.

### How many people live in Baldivis?

The 2021 Census counted 37,697 people in the Baldivis suburb, with a median age of 31.

### Which council covers Baldivis?

The City of Rockingham. Our test of the ABS outlines places the whole suburb inside that council area.

### What is a datasheet for a dataset?

A short document describing a dataset's purpose, contents, collection, gaps and suitable uses, proposed by Gebru and colleagues in 2018.

### Why not train a model straight away?

Because blanks, snapshots and imprecise locations can mislead a model without any error message. The datasheet finds them first.

### Is this suitable for children?

Younger learners make simple information cards for their own collections. Full datasheets suit teenagers and adults.

### How many schools are in Baldivis?

The Department of Education list places 13 schools in Baldivis, 10 of them government schools, as at the 2026 Semester 1 census.

### Do you have a centre in Baldivis?

No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.

### What do Baldivis classes cost?

The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.

### How are groups put together?

By level and pace, fifteen to twenty learners each, not by age or suburb. One-to-one lessons cover anyone no group time fits.

### Can adults take AI classes?

Yes. Adults study in adult groups or one to one, often using datasets from their own jobs.

More for Perth learners

## Explore further

The [Perth page](/online-coding-and-python-classes-in-perth-western-australia) covers the city, the [Western Australia guide](/coding-and-ai-classes-in-western-australia) the state, and [AI classes for teens](/ai-classes-for-teens-australia) the secondary years.

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20AI%20or%20programming%20class%20for%20a%20learner%20in%20Baldivis.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-baldivis-perth*
