---
title: "Data Science Course in the Netherlands | Live Online"
description: "Live online data science for learners in the Netherlands: Python, statistics, SQL and machine learning on real data, taught in English. First lesson free."
canonical: https://learn.modernagecoders.com/data-science-course-netherlands
source: src/pages/data-science-course-netherlands.html
---
> Live online data science for learners in the Netherlands: Python, statistics, SQL and machine learning on real data, taught in English. First lesson free.

In short

Modern Age Coders teaches data science live online to learners in the Netherlands: Python and statistics first, then SQL, data cleaning and visualisation, then machine learning. Every project starts with the same questions a statistics office asks of a new source: who is in this data, what does it really measure and how good is it? Teenagers, students and adults are placed by ability, in groups of fifteen to twenty or one to one, and non-programmers can start with analytics tools before Python. The trial lesson costs nothing; afterwards a group seat is USD 100 and private teaching USD 150 per month.

Start here

## Three data science courses for three starting points

One for teenagers, one full course for students and adults, and one for the mathematics underneath. Each opens its own page with syllabus, timetable and fee.

[![Data Science for Teens course thumbnail](/images/data-science-teens.webp)  DATA / 01 Data Science for Teens Real datasets in Python, from cleaning and plotting to a first model, with the question of who is missing from the data asked every time. Open the syllabus →](/courses/data-science-course-for-teens-python-data)[![Data Science Course course thumbnail](/images/data-science-college.webp)  DATA / 02 Data Science Course Statistics, SQL, feature engineering, modelling and a portfolio, for students and adults heading into data roles. Open the syllabus →](/courses/data-science-complete-masterclass-college)[![Maths for Data Science course thumbnail](/images/data-analytics-maths.webp)  DATA / 03 Maths for Data Science The statistics, linear algebra and calculus behind the methods, explained through code rather than proofs. Open the syllabus →](/courses/data-analytics-mathematics-masterclass)

A big data centre

## The national statistics office runs its own big data centre

CBS launched the Center for Big Data Statistics on 27 September 2016. The details below come from the CBS launch announcement and from the centre's own page.

| Item | Detail |
| --- | --- |
| Launched | 27 September 2016 |
| Main location | Heerlen, with a second connected office |
| Purpose | Using new and existing (big) data sources and techniques to obtain better information |
| Themes | The labour market, mobility, health, the energy transition and smart farming |
| Data sources | Satellite data, social media data and sensor data |
| Methods | Supervised and unsupervised machine learning, deep learning and text mining |
| Also | Examines the quality of data sources, and trains data scientists |
| Aims at launch | Faster, real-time statistics; statistics for smaller regional and urban areas; new indicators; a zero footprint for respondents |

The partners named at the launch show how seriously the Netherlands took the idea: seven national statistical institutes, Eurostat, the research organisation TNO, the Dutch central bank DNB, IBM, KPN, SURFsara, the universities of Maastricht, Leiden, Twente and Amsterdam, and companies including Capgemini, Dell-EMC, Pivotal, Microsoft Netherlands and Humanity X.

The aims were practical: statistics that arrive faster, that describe smaller areas than before, and that ask less of the people and businesses who would otherwise fill in forms, the zero footprint the announcement describes.

For a learner, the interesting part is the order of work. Before any model is trained, the centre acquires a data source and examines its quality. Only then does it ask what statistics the source can support.

That order is exactly what we teach. We have no connection with CBS; its public pages are simply the clearest Dutch example of data science done carefully.

Sources: [CBS, CBS launching Center for Big Data Statistics](https://www.cbs.nl/en-gb/about-us/innovation/nieuwsberichten/big-data/cbs-launching-center-for-big-data-statistics); [CBS, Center for Big Data Statistics](https://www.cbs.nl/nl-nl/onze-diensten/center-for-big-data-statistics). Read 15 September 2026.

Good data first

## Big data is not the same as good data

A huge dataset can still give the wrong answer if it describes the wrong people. The simplest way to see it is with numbers a learner can check.

| Source | People in the data | Average age in the data | Error against the true figure |
| --- | --- | --- | --- |
| All residents (the true figure) | 10,000 | 42 | none |
| A survey of 1,000 residents chosen at random | 1,000 | 43 | 1 year |
| Location data from an app used by 4,000 residents, mostly younger | 4,000 | 31 | 11 years |

The app data is four times larger than the survey and eleven years wrong, because the people who use the app are not the people who live in the town. More data from the wrong group does not fix the error; it only makes it look more certain.

The numbers are invented, but the pattern is real and common. Data from apps, sensors or social media describes whoever produces it, which is rarely everyone.

So every project on our course starts with three questions. Who is in this data, and who is missing? What does each column really measure, and how was it recorded? How would we know if it were wrong? Only then do we clean, plot and model.

Learners practise on real Dutch public data too; the page on [building real AI projects](/build-real-ai-projects-netherlands) describes the sources.

A second trap is measurement. A column called visits might count people, sessions or page loads, and the three give very different totals. A sensor that records traffic may miss bicycles, which in a Dutch town is not a small omission. Before a learner trusts a column, they find out exactly how it was produced.

The third trap is time. Data collected before a change in the rules, a new road or a new version of an app may describe a world that no longer exists. A model trained on it can be accurate about the past and wrong about today.

None of this needs advanced mathematics. It needs the habit of asking, and the patience to read the documentation of a dataset before writing any code. That is why the second rung of our ladder is questioning the data, ahead of any cleaning or modelling.

Learners who form that habit early find their later models are simpler, because they have already removed the problems a complicated model would only have hidden.

The age example is invented for teaching and describes no real town or app. The three questions are our course practice.

Routes

## Data science for teenagers, students and adults

The same discipline, reached from different starting points.

Teenagers start with Python and real datasets; see [coding classes for teens](/coding-classes-for-teens-netherlands), and [machine learning for school students](/machine-learning-for-school-students-netherlands) for the model-building side.

Students in economics, the sciences or the social sciences often take data science beside their degree; see [coding for college students](/coding-for-college-students-netherlands).

Adults usually come for work, and non-programmers can begin with analytics tools before Python; see [coding and AI classes for adults](/coding-and-ai-classes-for-adults-netherlands). The language itself is covered on [Python classes in the Netherlands](/python-classes-netherlands).

For those in the south of the country, [Heerlen](/coding-classes-in-heerlen), the centre's main location, has its own city page.

The data science ladder

## From a first dataset to a model you can defend

Each rung depends on the one below. A model built on data nobody has questioned can be precise and wrong at the same time.

| Rung | What the learner can do |
| --- | --- |
| 1. Python and statistics | Load data, describe it with averages and spreads, and plot it |
| 2. Questioning the data | Ask who is in it, what it measures and how it was recorded |
| 3. SQL and cleaning | Query databases, join tables and fix what is broken |
| 4. Machine learning | Train models, test them on unseen data and compare with a baseline |
| 5. Communicating | Explain results and limits in a report or a public repository |

### Why questioning comes before cleaning

Cleaning makes data tidy; it cannot make it representative. A learner who asks who is missing before cleaning saves themselves from polishing a dataset that should not have been used.

How data science connects to the programming before it and the AI after it is set out on the [coding roadmap](/coding-roadmap).

### Pace for each group

Teenagers usually take two lessons a week and build a project each term. Students and adults often study in the evening, some one to one around a thesis or job.

Non-programmers can start with analytics tools and add Python later.

The catalogue

## Nine live data science courses

Ordered from spreadsheets to machine learning. Open a card for the syllabus, the timetable and the fee; the trial lesson decides which comes first.

I

### Teenagers

Python and real data

DATA / TEEN / 01

#### Data Science for Teens

Real datasets in Python, from cleaning to a first model.

[Open the syllabus](/courses/data-science-course-for-teens-python-data)

DATA / TEEN / 02

#### Orange Data Mining for Teens

Data mining through visual workflows, before or beside code.

[Open the syllabus](/courses/orange-data-mining-visual-machine-learning-course-for-teens)II

### Students and adults

The full discipline

DATA / PRO / 01

#### Data Science Course

Statistics, SQL, modelling and a portfolio.

[Open the syllabus](/courses/data-science-complete-masterclass-college)

DATA / PRO / 02

#### Data Analysis Course

Excel, SQL, Python and BI for analysts.

[Open the syllabus](/courses/data-analysis-mastery-course-college)

DATA / PRO / 03

#### Maths for Data Science

The mathematics behind the methods, through code.

[Open the syllabus](/courses/data-analytics-mathematics-masterclass)

DATA / PRO / 04

#### MySQL Course

Databases and SQL, the ground most data work stands on.

[Open the syllabus](/courses/mysql-database-complete-masterclass-college)

DATA / PRO / 05

#### Orange Data Mining for College Students

Applied machine learning through visual workflows, for students.

[Open the syllabus](/courses/orange-data-mining-machine-learning-course-for-college-students)III

### Beyond analysis

Models and analytics for non-programmers

DATA / NEXT / 01

#### AI and Machine Learning Masterclass

From classical methods to deep learning, evaluated properly.

[Open the syllabus](/courses/ai-ml-masterclass-complete-college)

DATA / NEXT / 02

#### Data and AI Analytics for Non-Programmers

Spreadsheets, dashboards and AI assistants for people who do not code.

[Open the syllabus](/courses/data-and-ai-analytics-for-non-programmers-course)

How the classes run

## Data lessons, live, at a Dutch hour

Our teachers are in India, where the clock stays put all year, so they are three and a half hours ahead of the Netherlands during Dutch summer time and four and a half ahead in winter. Teenagers learn after school, students and adults in the evening or at the weekend, at a regular time set in the free lesson.

After school

Late afternoon, Dutch time, for teenagers.

Evening

By arrangement, for students and adults.

Weekend

Saturday or Sunday, for longer analysis sessions.

### A free first lesson

You explore a real dataset with a teacher, who sees your level and proposes a route.

### Groups of fifteen to twenty

Learners at the same level from several countries, often analysing the same data differently.

### One to one for theses

For a thesis analysis, a work project or a learner who prefers a teacher to themselves.

### Data questioned aloud

Teachers ask who is in the data and what it measures before any chart is drawn.

### In English

The language of the tools and libraries; Dutch datasets are used as they come.

### Work published

Analyses, code and write-ups go into the learner's own GitHub repository.

Student work

## What our students have built

Four live projects by our students. More on the [student labs](/student-labs) page.

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

## Data science fees

One monthly price in US dollars for every country outside India, whether the learner analyses data in spreadsheets or in Python. Joining is free of charge and there is no annual commitment.

Free first class

USD 0

no card required

- A real lesson on real data
- A route proposed
- No card needed

Book it

Group batch

USD 100

a month, billed in US dollars

- Fifteen to twenty learners at one level
- The same live teacher each week
- Analyses reviewed weekly
- A certificate at the end

Start here

One to one

USD 150

a month, billed in US dollars

- A teacher for one learner
- Built around a thesis or job
- Pace set by your goal

Enquire

What families say

## Rated 4.9 across 547 Google reviews

From Google, as posted. We do not write or pay for reviews.

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

Questions about data science

## What learners in the Netherlands ask about data science

### What is data science, in one sentence?

Using data, statistics and code to answer real questions, with honest checks on whether the data can answer them at all.

### Does CBS really have a big data centre?

Yes. CBS launched its Center for Big Data Statistics on 27 September 2016, with its main location in Heerlen. It works with satellite, social media and sensor data and trains data scientists. We have no connection with it.

### Why does the course stress data quality so much?

Because a large dataset from the wrong people gives a confident wrong answer. Checking coverage and quality first is what separates data science from number crunching.

### Do I need to be good at maths?

School maths is enough to start. The statistics and mathematics are taught through code as they become necessary, and there is a separate course for those who want more.

### Can I start without programming?

Yes. Non-programmers can begin with the analytics course, using spreadsheets and dashboards, and move to Python later.

### Is this suitable for teenagers?

Yes, once a teenager can write basic Python, usually from about thirteen or fourteen.

### Are lessons in English?

Yes. The tools and most documentation are in English; Dutch datasets are used as they are.

### What does it cost?

After the free trial, learning in a group costs USD 100 a month and learning one to one USD 150 a month, in US dollars. No sign-up charge applies and the arrangement runs month by month.

### When are lessons held?

After school, in the evening or at the weekend, Dutch time. From India our teachers are three and a half hours ahead of Dutch summer time and four and a half ahead in winter.

### What happens after I send the form?

We ring back at an hour that works in the Netherlands and set up a trial lesson around a real dataset. Nothing is billed unless you stay on.

Elsewhere on this site

## More for data learners in the Netherlands

Related pages for projects, languages and each age group.

### [Build real AI projects](/build-real-ai-projects-netherlands)

Projects on real Dutch open data.

### [Python classes](/python-classes-netherlands)

The language most data science is done in.

### [Coding for college students](/coding-for-college-students-netherlands)

Data skills beside a degree.

### [Coding and AI classes for adults](/coding-and-ai-classes-for-adults-netherlands)

Data and automation for working adults.

### [Coding classes in Heerlen](/coding-classes-in-heerlen)

The city where the CBS big data centre is based.

### [AI and Python Academy, Netherlands](/ai-and-python-academy-netherlands)

The national ladder from Python to AI.

Start here

## Book a free data science lesson

Send us a number and we phone back at a time that suits you in the Netherlands. In the first lesson you explore a real dataset with a teacher, and by the end you will know where to start.

Reading first is fine. The [course catalogue](/courses), our page on [how lessons are taught](/how-we-teach) and the [coding roadmap](/coding-roadmap) are open to everyone.

[WhatsApp us](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20data%20science%20lesson%20in%20the%20Netherlands.) · [+91 91233 66161](tel:+919123366161) · [connect@modernagecoders.com](mailto:connect@modernagecoders.com)

WhatsApp is free from a Dutch phone and usually gets the quickest reply. Our number is Indian, and we have no Dutch office or premises.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/data-science-course-netherlands*
