---
title: "Coding and AI Classes in the East of England | Ages 6 to 67"
description: "Live online coding, AI, Python and maths classes across the East of England, with pages for Essex, Hertfordshire, Norfolk, Suffolk, Cambridge and more."
canonical: https://learn.modernagecoders.com/coding-and-ai-classes-in-east-of-england
source: src/pages/coding-and-ai-classes-in-east-of-england.html
---
> Live online coding, AI, Python and maths classes across the East of England, with pages for Essex, Hertfordshire, Norfolk, Suffolk, Cambridge and more.

Skip to contentCourses across the East

## Starting points in the East of England

A Year 3 pupil in Stevenage who keeps a rain gauge, a Year 8 in Ipswich trying Python, a Year 12 in Bedford on A level maths, and an adult in Luton learning data skills. A free lesson places each one.

[![Scratch Coding for Kids course thumbnail](/images/scratch-kids.webp)Ages 6 to 12Scratch Coding for KidsScratch projects with rain, rivers and bar charts.See the syllabus](/courses/scratch-programming-complete-course)[![Python and AI for Kids course thumbnail](/images/python-kids.webp)Ages 9 to 14Python and AI for KidsPython and early AI ideas using real measurements.See the syllabus](/courses/python-ai-kids-masterclass)[![High School Mathematics course thumbnail](/images/high-school-maths.webp)Ages 14 to 18High School MathematicsComplete secondary maths, including statistics and averages.See the syllabus](/courses/complete-high-school-mathematics-mastery)[![Data Analysis Course course thumbnail](/images/data-analysis-college.webp)AdultsData Analysis CoursePython for adults analysing real public datasets.See the syllabus](/courses/data-analysis-mastery-course-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)The region by census

## 6,335,074 people in the East of England

The total is the ONS Census 2021 usual-resident count for the region, read through Nomis. The town list uses ONS built-up areas that do not cross the regional boundary.

| Town | Population | Town | Population |
| --- | --- | --- | --- |
| Luton | 233,525 | Colchester | 130,245 |
| Norwich | 200,770 | Basildon | 115,955 |
| Peterborough | 190,605 | Chelmsford | 110,625 |
| Southend-on-Sea | 182,305 | Bedford | 97,235 |
| Cambridge | 152,740 | Hemel Hempstead | 95,985 |
| Ipswich | 151,565 | Stevenage | 94,470 |

The ONS lookup lists 45 local authorities in the region. Milton Keynes and Watford are left out of the table because their built-up areas cross the regional boundary. Schools follow the national curriculum for England, from Reception through GCSE and A level with a choice of exam boards, and holiday dates differ by council, so each family tells us its own.

Our pages for the region, each with a separate local project, link here once they are live: [Bedfordshire](/coding-classes-in-bedfordshire), [Cambridge](/best-coding-class-in-cambridge), [Cambridgeshire](/coding-classes-in-cambridgeshire), [Chelmsford](/best-coding-class-in-chelmsford), [Colchester](/best-coding-class-in-colchester), [Ely](/best-coding-class-in-ely), [Essex](/coding-classes-in-essex), [Hertfordshire](/coding-classes-in-hertfordshire), [Norfolk](/coding-classes-in-norfolk), [Norwich](/best-coding-class-in-norwich), [Peterborough](/best-coding-class-in-peterborough), [Southend-on-Sea](/best-coding-class-in-southend-on-sea), [St Albans](/best-coding-class-in-st-albans), [Suffolk](/coding-classes-in-suffolk).

### England and A level help

The [England](/coding-and-ai-classes-in-england) page covers the school system, and [A level Computer Science NEA help](/a-level-computer-science-nea-help) covers the project year.

The East of England project

## How evenly does the rain fall?

Twelve deviations from an even share, added up and scaled.

The learner reads each station's raw file, keeps the rain column, skips months marked missing, and averages each calendar month over 1991 to 2020. The year's total divided by twelve is what every month would get if rain fell evenly. Each month's gap from that even share is measured without its sign, the gaps are added, and the sum is divided by the year's total. The result, a seasonality index of the kind introduced by the geographers Walsh and Lawler in 1981, is 0 for perfectly even rain and about 1.83 if a whole year fell in one month.

| Station | Rain a year | Wettest and driest month | Seasonality index |
| --- | --- | --- | --- |
| Cambridge | 563 mm | October 58.7, March 32.9 mm | 0.136 |
| Lowestoft | 636 mm | October 67.0, April 36.7 mm | 0.150 |
| Camborne, Cornwall (contrast) | 1,076 mm | November 129.8, May 61.2 mm | 0.249 |

The East is not just dry; its rain is also fairly even. Both East stations score under 0.16, while Camborne, far wetter, has a much stronger winter season, with November more than twice as wet as May. Within the East there is still a pattern: Cambridge's February to April gets under 19 per cent of the year's rain against an even 25, and at Lowestoft the last three months of the year bring about 30 per cent. Spring is the dry season in both places, which matters for crops that are growing fast just when rain is scarcest.

The telling slip is forgetting to ignore the sign. Months above the even share and months below it always cancel exactly, so without absolute values every station scores zero, and the code seems to prove that all rain is perfectly even. The learner writes a test with an invented year of all rain in one month, which must score 1.83. Our figures are averages from the station files, Lowestoft's record spans a small site move in 2007 that the file itself notes, and three Lowestoft months are missing, so the index is a careful estimate rather than an official statistic.

### Ages 8 to 11

Draw monthly rain bars for two stations in Scratch and guess which is more even.

### Ages 11 to 15

Read the files in Python, average each month, and compute the index step by step.

### Ages 15 and up

Test the edge cases, try other stations, and compare the index with a simple wettest-over-driest ratio.

### Met Office data, our index

Monthly rainfall comes from the Met Office station files. The averaging, the index and the percentages are our calculations, so they may differ slightly from published climate averages.

Why these stations

## Two long records in a dry region

Each file opens with a short description of its own site.

| Detail | Lowestoft | Cambridge |
| --- | --- | --- |
| Position | Lat 52.483, Lon 1.727 (from September 2007) | Lat 52.245, Lon 0.102 |
| Height | 18 m above mean sea level (25 m before July 2007) | 26 m above mean sea level |
| Site history | Moved in 2007, as the file records | One site listed |
| Values given | Monthly temperature, air frost, rain and sunshine | The same set |
| Gaps, 1991 to 2020 | Three missing rain months | None missing |

Measuring how evenly something is spread is a common task in data work: how evenly sales fall across the year, how evenly traffic hits a website, how evenly a class's marks are spread. A learner in the East of England who has built a seasonality index, and found the bug that makes everything look even, has a tool that transfers to all of them.

Neither the Met Office nor the ONS is linked to us; they publish the numbers, and the seasonality sums on this page, slips included, are our own.

Year by year

## From rain bars to statistics

Years are a rough guide; placement happens in the free lesson.

Years 1 to 4

### Measuring and charting

Block coding with bar charts and simple measurements.

[Scratch Coding for Kids](/courses/scratch-programming-complete-course)[Coding for Kids](/courses/kids-coding-blocks-masterclass)Years 5 to 8

### Averages in code

Python that reads data and computes averages.

[Python and AI for Kids](/courses/python-ai-kids-masterclass)[Maths Through Coding](/courses/maths-through-coding)Years 9 to 13

### Statistics and AI

Spread, deviation and first machine learning alongside GCSE and A level.

[High School Mathematics](/courses/complete-high-school-mathematics-mastery)[Python for Teens](/courses/python-complete-masterclass-teens)Adults

### Data skills

Adult Python for analysis, from files to clear results.

[Data Analysis Course](/courses/data-analysis-mastery-course-college)[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)AI and checking

## An AI can write a statistics function. Will it test the edge case?

A formula that always returns zero can pass for working code.

Ask a chatbot for a seasonality index and it may drop the absolute value or mix up the divisor. The code runs, prints tidy numbers, and nothing flags that every answer is now zero.

An East of England learner who has tested the all-in-one-month case knows to check any function against a result that must be true.

Checking a program against an answer you already know is a habit an East of England teenager builds by coding in 2026. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

Lessons in practice

## From Harlow to Norwich, live online

Towns, villages and fen, all join the same way.

### Learners type

Students write their own code, while the tutor reads the shared screen and nudges with questions.

### By school year

A Year 4 in Basildon or a Year 12 in Hemel Hempstead is placed by year and key stage, using each exam board's own names.

### Free first lesson

A full trial lesson without charge, then straight advice.

### Classes by level

Each class holds fifteen to twenty learners working at one stage, drawn from all over Britain.

### Term time only

Two lessons a week in term; holidays left free.

### On UK time

Lessons keep their UK hour when the clocks change; our teachers move.

Why a region this size still needs online groups

Five learners at one exact level and hour rarely live in the same town. Online, a Harlow or Ipswich learner joins the right class.

Fees

## East of England fees

Every town in the region pays the same fee, as does every country we teach outside India.

First class**USD 0**

One complete lesson free, then a recommendation.

Group tuition**USD 100**

Roughly eight lessons a month with fifteen to twenty classmates.

Private tuition**USD 150**

Roughly eight lessons a month with one tutor.

We bill in US dollars, never sterling, and nothing is charged before the trial has agreed a course and a regular time; the pricing page explains breaks, absences and swaps between group and private.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20the%20East%20of%20England%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)Reviews

## How East of England families rate us

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

## Book a free East of England lesson

A school year or age and one hobby is all we need. The trial could be a Scratch rain chart, a first Python program, or the seasonality index.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented East of England one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20the%20East%20of%20England%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)

Submitted details are used for placement and follow-up.

FAQ

## East of England questions

The region, the rainfall project and the details.

### What is the population of the East of England?

The 2021 census counted 6,335,074 usual residents in the East of England region.

### What are the largest towns in the East of England?

Among ONS built-up areas wholly in the region: Luton 233,525, Norwich 200,770 and Peterborough 190,605.

### What is the rainfall project?

Learners compute a rainfall seasonality index in Python from Met Office data for Lowestoft, Cambridge and, for contrast, Camborne.

### What is a seasonality index?

The total of each month's gap from an even share of the year's rain, divided by the year's total: 0 means perfectly even.

### How much rain does Cambridge get?

About 563 mm a year on our 1991 to 2020 averages from the Met Office station file.

### Are the lessons online?

Yes, every lesson is live on video from home.

### Can you support GCSE and A level students?

Yes, across maths and computing, aiming at real understanding rather than promised results.

### Who can learn?

Six-year-olds through to adults of 67, each on a course pitched at their level.

### What are the fees?

Nothing for the trial; after it, a class place is USD 100 per month and private tuition USD 150 per month.

### Do lessons continue in the holidays?

No. Give us your holiday weeks and we pause.

Wider pages

## Beyond the East of England

Next door, [South East England](/coding-and-ai-classes-in-south-east-england) has its own region index. The [England](/coding-and-ai-classes-in-england) page covers schools, and the [UK hub](/coding-classes-in-united-kingdom) lists every page in the series.

Book the free class[Book a priority demo](/book-demo)[WhatsApp our team](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20the%20East%20of%20England%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/coding-and-ai-classes-in-east-of-england*
