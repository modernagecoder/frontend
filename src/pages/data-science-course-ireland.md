---
title: "Data Science Course in Ireland | Live Online Classes"
description: "A data science course for learners in Ireland, taught on Ireland's own open data: cleaning, licences, analysis and honest charts. Live online, first class free."
canonical: https://learn.modernagecoders.com/data-science-course-ireland
source: src/pages/data-science-course-ireland.html
---
> A data science course for learners in Ireland, taught on Ireland's own open data: cleaning, licences, analysis and honest charts. Live online, first class free.

In short

A data science course should spend its time where the work is: finding data, checking whether you may use it, understanding what each column means, cleaning it, and only then analysing. We teach that on Ireland's open data portal, which lists over twenty-two thousand datasets, most of them under a Creative Commons Attribution licence. Students learn Python and pandas, SQL, charts that do not mislead, and the statistics needed to say how sure they are. Classes are live, in groups of fifteen to twenty at one level or one to one. The first class is free, then USD 100 a month in a group or USD 150 a month with a teacher to yourself.

Start here

## Three ways into data science

One full course, one for people who do not yet code, one for secondary students. Each card opens its syllabus.

[![Data Science Course course thumbnail](/images/data-science-college.webp)  DATA / 01 Data Science Masterclass The complete path for students and adults: Python and pandas, cleaning, statistics, visualisation and a first machine learning model. Open the syllabus →](/courses/data-science-complete-masterclass-college)[![Data and AI Analytics for Non-Programmers (Excel, Sheets, Power BI) course thumbnail](/images/data-ai-analytics-non-programmers.webp)  DATA / 02 Data and AI Analytics for Non-Programmers For people whose work is already full of spreadsheets and who need answers before they need a programming language. Open the syllabus →](/courses/data-and-ai-analytics-for-non-programmers-course)[![Data Science for Teens course thumbnail](/images/data-science-teens.webp)  DATA / 03 Data Science for Teens Secondary students working with real public data, learning to question a figure before they chart it. Open the syllabus →](/courses/data-science-course-for-teens-python-data)

Ireland's open data

## What Ireland actually publishes, and how to count it

The national portal is the obvious starting point, and it contains a small lesson in careful counting before you have downloaded anything at all.

| Measure | Figure | Where it comes from |
| --- | --- | --- |
| Datasets | 22,720 | Stated on the portal homepage |
| Datasets, counted through the portal's own API | 22,720 | The CKAN package search endpoint, which agrees exactly |
| Publishers | 143 | Stated on the portal homepage |
| Organisations listed by the API | 174 | The CKAN organisation list, which probably includes bodies with no datasets |
| Datasets when the current strategy was written | "almost 15,000" from "160 data publishers" | Open Data Strategy 2023 to 2027 |

### Two counts of the same thing

The portal says 143 publishers; its own interface for machines lists 174 organisations. Neither is wrong. They count different things, and the gap is almost certainly bodies that have an account but have published nothing.

A student's first instinct is to pick the bigger number. The professional instinct is to say which count you used and why, in a footnote nobody will read but everybody would miss.

### And a figure that aged

The government strategy that governs all this was published in 2023 and says the portal holds "almost 15,000" datasets from "160 data publishers". Today the portal itself says 22,720.

Quoting the strategy as current would understate the portal by about a third. Every document has a date, and the date is part of the fact.

Sources, read 16 September 2026: [data.gov.ie](https://data.gov.ie/) and its CKAN API; [Open Data Strategy 2023 to 2027](https://data.gov.ie/docs/Open.Data.Strategy_FINAL_ENG.pdf). The strategy also states an aim of "Creating easy access to high quality government data, promoting trust and stimulating innovation."

Reading a licence

## May you actually use it? The question most courses skip

Open does not mean unconditional, and the conditions differ between publishers. This is a five-minute check that saves a project.

### The portal default

data.gov.ie states that data and metadata linked from it "will be associated with the Creative Commons Attribution (CC-BY) Licence, at a minimum", and that public bodies may waive copyright entirely where that is appropriate.

It even supplies the sentence to use: "Contains Irish Public Sector Data licensed under a Creative Commons Attribution 4.0 International (CC BY 4.0) licence". Attribution is the price of the data, and it costs one line.

### Not everything matches it

Some registers published by Irish bodies sit outside that default. The Property Services Regulatory Authority, for example, allows free re-use of its property register subject to conditions including "Not use the information in a misleading way" and "Not use the information for the principal purpose of advertising or promoting a particular product or service".

That is a perfectly reasonable condition, and it is the reason no figure from that register appears anywhere on this page, even though it is one of the most interesting datasets in the country to analyse. Read the terms, then decide.

### Check before you download

The licence is on the dataset page, not in the file. Two minutes there beats discovering a restriction after you have built something on it.

### Record the version

Note the download date and the file as it was that day. Public datasets are revised, and a result that cannot be reproduced is not a result.

### Attribute properly

Name the publisher, the dataset and the licence wherever a derived figure is published, and say whether you changed the data.

Sources: [data.gov.ie open data licence](https://data.gov.ie/pages/opendatalicence); [PSRA, re-use of public sector information](https://www.psr.ie/re-use-of-public-sector-information/), read 16 September 2026. Nothing here is legal advice; the licence on the dataset you download is the one that binds you.

One column, seven units

## The average of this column is 104.8, and it means nothing

Table CPM01 holds Ireland's Consumer Price Index: 62,608 rows of monthly figures from November 1975 to December 2025. It has one column called value, and that column is not measuring one thing.

| Kind of row | What it is |
| --- | --- |
| Index, base December 2023 equals 100 | An index number, one of six different bases in the same column |
| Index, bases from November 1996 to December 2016 | Five further historical bases, all index numbers, none comparable with another |
| Percentage change over one month | A percentage, in the same column as the indices |
| Percentage change over twelve months | Another percentage, again in the same column |

For all items in December 2025 the table publishes eight values: 104.2, 126.2, 127.8, 133.4, 157.4, 186.1, then 0.5 and 2.8. The first six are the same month expressed against six different base years; the last two are percentage changes.

Average the whole column and you get 104.8. It is an average of index points and percentages together, which is like averaging a temperature and a shoe size.

The fix is one line: filter on the statistic label, or the unit, before any arithmetic. The habit behind it is bigger. Before averaging anything, ask what a single row means, and check that every row means the same thing.

Students do this with the real file, get the absurd number themselves, then rebuild the analysis properly. It is far more memorable than being warned about it.

Source: [CSO table CPM01, Consumer Price Index](https://data.cso.ie/table/CPM01), read 16 September 2026; the table was last updated on 15 January 2026. The arithmetic above is ours, and is the exercise students repeat. Nothing here is commentary on inflation.

The rungs

## Five rungs of data work

Notice how late modelling arrives. That ordering is deliberate, and it matches how the job is actually done.

| Rung | What the learner can do |
| --- | --- |
| 1. Find and check | Locate a dataset, read its licence, notes and units |
| 2. Clean | Load messy files, fix types, handle blanks and document each decision |
| 3. Join and aggregate | Combine sources and group without double counting |
| 4. Show | Make charts that answer a question without misleading |
| 5. Model and judge | Fit a model, measure it against a baseline, and state its limits |

### Why cleaning comes first

Most working data scientists spend the bulk of their time on rungs one to three. A course that skips them produces people who can only work on data somebody else prepared.

How this connects to programming and AI is on the [coding roadmap](/coding-roadmap).

### Tools we teach

Python with pandas as the main tool, SQL for anything in a database, and plain charts. Spreadsheet users are welcome and often move fastest.

For learners who prefer a visual tool first, the Orange courses cover the same ideas without code.

The catalogue

## Nine live courses for data work

By starting point. The free first class decides which course fits.

I

### Getting started

No code required to begin

DS / START / 01

#### Data and AI Analytics for Non-Programmers

Answers from data, without a language first.

[Open the syllabus](/courses/data-and-ai-analytics-for-non-programmers-course)

DS / START / 02

#### Orange Data Mining for Teens

Visual analysis, real concepts.

[Open the syllabus](/courses/orange-data-mining-visual-machine-learning-course-for-teens)

DS / START / 03

#### Data Science for Teens

Public data, questioned properly.

[Open the syllabus](/courses/data-science-course-for-teens-python-data)II

### The craft

Python, SQL and statistics

DS / CRAFT / 01

#### Data Science Masterclass

Cleaning, analysis and a first model.

[Open the syllabus](/courses/data-science-complete-masterclass-college)

DS / CRAFT / 02

#### Data Analysis Mastery

Turning messy files into clear answers.

[Open the syllabus](/courses/data-analysis-mastery-course-college)

DS / CRAFT / 03

#### MySQL Masterclass

SQL for data that lives in a database.

[Open the syllabus](/courses/mysql-database-complete-masterclass-college)III

### Going further

Models and automation

DS / MORE / 01

#### AI and Machine Learning Masterclass

Models trained and evaluated honestly.

[Open the syllabus](/courses/ai-ml-masterclass-complete-college)

DS / MORE / 02

#### Orange Data Mining for College

Machine learning you can see working.

[Open the syllabus](/courses/orange-data-mining-machine-learning-course-for-college-students)

DS / MORE / 03

#### Python and AI Automation

Running the analysis without you.

[Open the syllabus](/courses/python-ai-automation-masterclass-college)

How the classes run

## Live classes with real files open

Lessons are live, with teachers working from India at a weekly hour set in Irish time. India keeps one clock all year while Ireland changes twice, so our teachers are four and a half hours ahead of you during Irish summer time and five and a half hours ahead through the winter. Most adults choose an evening slot.

Evening

Working adults and college students, Irish time.

Weekend

Longer analysis sessions.

After school

Secondary students on the teen courses.

### A free first class

You open a genuine dataset with a teacher and see what the first ten minutes of real work look like.

### Fifteen to twenty per group

Learners at one level, comparing how each of them cleaned the same file.

### One to one

For work projects, theses, or data you cannot share with a group.

### Public data throughout

Everything is done on datasets anyone can download, so every result can be checked.

### Licences taken seriously

Students learn to record source, licence and download date as a matter of habit.

### Charts that tell the truth

Axes, baselines and scales are taught as ethics, not decoration.

Student work

## Analyses our students published

Four student projects, live online. More of them, across every subject we teach, are on the [student labs](/student-labs) page.

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

One price a month in US dollars, the same in every country outside India, covering any course on this page. No enrolment charge, and no commitment past the month you are in.

Free first class

USD 0

no card required

- A real dataset opened with a teacher
- An honest view of where to start
- No card required

Book it

Group batch

USD 100

a month, billed in US dollars

- Fifteen to twenty learners at one level
- The same teacher throughout
- Work reviewed each week
- A certificate at the end

Start here

One to one

USD 150

a month, billed in US dollars

- A teacher to yourself
- Your own data and questions
- Right for work projects

Enquire

What families say

## Rated 4.9 across 547 Google reviews

Reviews left on Google by our students and their families, published here word for word.

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

Questions

## What learners in Ireland ask about data science

### Do I need to be able to code first?

No. One of our courses is built for people who do not code at all, and the main masterclass teaches the Python you need as you go.

### How much maths does data science need?

Less than people fear to start with. Averages, percentages and a feel for uncertainty carry you a long way; the rest is taught when a problem needs it.

### Where can I get Irish data to practise on?

The national portal at data.gov.ie lists over twenty-two thousand datasets, and the CSO publishes its statistical tables openly as well. Check each dataset's licence before publishing anything derived from it.

### Is Irish public data free to use commercially?

Usually, under Creative Commons Attribution, which is the portal's stated minimum. Some registers set extra conditions, so read the terms on the dataset page. This is not legal advice.

### Python or R?

We teach Python, because it is what most Irish employers advertise for and because it carries on into automation and AI work.

### Will I finish with something to show?

Yes. Every student finishes an analysis on public data, with the code, the cleaning decisions and an honest write-up in their own repository.

### Is this suitable for a teenager?

Yes, from about thirteen on the teen course, which uses the same public data and the same habits at a gentler pace.

### What does it cost?

The first class is free. After that a group place is USD 100 a month and one-to-one lessons are USD 150 a month, in US dollars, with no enrolment fee.

### When do classes run?

Evenings, weekends or after school, at a weekly hour agreed in the free class. Our teachers are four and a half hours ahead of Irish time in summer and five and a half in winter.

### What happens after I send the form?

We call you at a sensible Irish hour and set up the free class. Nothing is charged unless you decide to continue.

Elsewhere on this site

## Related pages

Before and after data science.

### [Best Python classes online in Ireland](/best-python-classes-online-ireland)

The language this runs on.

### [Build real AI projects in Ireland](/build-real-ai-projects-ireland)

When the analysis becomes a model.

### [Learn to train AI, not just prompt it](/learn-to-train-ai-not-just-prompt-it-ireland)

Training, properly evaluated.

### [Best coding classes for adults in Ireland](/best-coding-classes-for-adults-ireland)

Starting from scratch.

### [Full stack software development](/full-stack-software-development-course-ireland)

Where the data is stored.

### [Coding classes in Ireland](/coding-classes-in-ireland)

The national page.

Start here

## Open a real dataset in a free class

Leave a number and we will ring at a time that suits you in Ireland. In the free class you open a genuine Irish dataset with a teacher, find its first problem, and see how a professional handles it.

Want to read first? There is [how we teach](/how-we-teach), the [full course list](/courses), and [work our students published](/student-labs).

[WhatsApp us](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20am%20in%20Ireland%20and%20would%20like%20a%20free%20first%20data%20science%20class.) · [+91 91233 66161](tel:+919123366161) · [connect@modernagecoders.com](mailto:connect@modernagecoders.com)

WhatsApp costs nothing from an Irish number and tends to get the fastest reply. It is an Indian number, since our team is in India, and we have no premises in Ireland.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/data-science-course-ireland*
