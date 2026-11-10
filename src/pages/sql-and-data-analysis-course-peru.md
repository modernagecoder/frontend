---
title: "SQL and Data Analysis Course in Peru: Live Online, in English"
description: "SQL and data analysis course for Peru, live online in English: queries, joins and checks on real Peruvian open data, for analysts and students, at any hour."
canonical: https://learn.modernagecoders.com/sql-and-data-analysis-course-peru
source: src/pages/sql-and-data-analysis-course-peru.html
---
> At Modern Age Coders, SQL and data analysis for learners in Peru is taught live, online and in English. Adults and university students go from a first SELECT to joins, grouping, window functions and checks on data quality, then add spreadsheets, Python and dashboards; teenagers from 13 have their own SQL course. We practise on real open data, including Peruvian municipal registers, and teach people to question a total before reporting it. A mentor leads every class on video, in a class of fifteen to twenty or one to one, at the day and hour you choose.

[Home](/) / [Courses](/courses) / [Coding and AI classes in Peru](/coding-and-ai-classes-in-peru) / SQL and data analysis

Peru · SQL and data analysis · Live online, in English

# SQL and data analysis course in Peru

SQL is the language in which most organisations ask questions of their data, and the one analysts are expected to know before Python. This page explains what a course should teach, which of ours suits an analyst or a developer, and works through a real investigation of Chiclayo's open waste-collection data, where a simple monthly total hides a month that never happened twice.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; For: Analysts, students and adults from 18; teens from 13; You learn: SQL, spreadsheets, Python and dashboards; Data: Real open data, including Peruvian registers; Group size: Fifteen to twenty, or one to one; Peru time: Any day, the hour you choose; First class: Free, no card. Rated 4.9 across 547 Google reviews.

## Three SQL and data analysis courses

One for analysts, one for people who build databases, and one for teenagers. Each starts from zero.

- [Data analysis: Excel, SQL, Python and BI](/courses/data-analysis-mastery-course-college): The analyst's route, over 8 to 10 months for anyone 18 or older starting from nothing: spreadsheets, SQL, Python and dashboards, always on real data.
- [MySQL: SQL and database design](/courses/mysql-database-complete-masterclass-college): For beginners from 18, 7 to 8 months. Queries, then design and administration: the course for people who will build and run databases.
- [MySQL for teens](/courses/mysql-mastery-for-teens): Ages 13 to 18, 5 to 6 months, from a first query to the data behind real apps.

## Why learn SQL if you already use Excel?

Because a spreadsheet shows you the data and SQL asks it questions. Once a table is too large to scroll, shared by several people or stored in a company system, SQL is how you reach it.

### Questions you can repeat

A query is a written question. Run it again next month on new data and you get the new answer, with no hand-copied formulas to drift out of step.

### Data where it lives

Sales systems, school registers, hospital stock, municipal records: most are databases. SQL reads them directly instead of waiting for someone to export a file.

### Checks you can show

A query that finds duplicates or contradictions is evidence another analyst can rerun. That is the heart of the lesson further down this page.

### What the course teaches

SELECT, WHERE and ORDER BY; aggregates with GROUP BY and HAVING; joins between tables; subqueries and common table expressions; window functions for running totals and rankings; and the design of tables, keys and indexes.

Alongside the syntax, a set of habits: count rows before and after every join, check that keys are unique, compare two columns that should agree, and never report a total that has not been checked another way.

### Where Python and dashboards come in

Our analysis course pairs SQL with Python for cleaning and charts, and with a business intelligence tool for dashboards. The lesson below runs SQL from Python on purpose: it is how many analysts work, and it needs nothing but Python, which already includes SQLite.

Developers take the MySQL course instead, which goes deeper into database design, transactions and administration.

## What does Chiclayo publish about its rubbish collection?

The Municipalidad Provincial de Chiclayo publishes the tonnes of solid waste collected in the district of Chiclayo, shift by shift and day by day, on Peru's Plataforma Nacional de Datos Abiertos. It is a small, honest-looking table, and an ideal first SQL dataset.

**The Chiclayo waste-collection register in its publisher's own description**

| Item | Description on datosabiertos.gob.pe |
|---|---|
| Publisher | Municipalidad Provincial de Chiclayo, through its Sub-Gerencia de Residuos Sólidos |
| Content | Weight of solid waste collected, in tonnes, by collection shift and day |
| Period | 2023 to April 2026 |
| Person who recorded the weight | Anonymised |
| Update frequency | Monthly |
| Released and modified | Released 8 March 2026; last modified 9 May 2026 |
| Licence | ODC-By, the Open Data Commons Attribution License |

Taken from the "Registro de recolección de residuos sólidos en el distrito de Chiclayo" page of the Municipalidad Provincial de Chiclayo on datosabiertos.gob.pe; page and file retrieved 9 November 2026. In the file we downloaded: 3,648 rows, three shifts, dates from 1 January 2023 to 30 April 2026; these counts are ours.

### Chiclayo in figures

Chiclayo city counted 552,508 people at the 2017 census, which made it one of the largest cities in Peru; INEI has not yet published city figures from the 2025 census. The department of Lambayeque, of which Chiclayo is the capital, counted 1,404,633 people in the 2025 census.

The dataset covers only the district of Chiclayo, not the whole city or province, which is the kind of detail an analyst writes down before comparing it with anything else.

### First look, before any SQL

The file is in Latin-1, not UTF-8, so opening it the default way fails on the first accented letter. One column header, "PROVINCIA ", ends with a space. The weekday column spells Wednesday both MIERCOLES and MIÉRCOLES, and some unit values carry a trailing space.

None of that is unusual. It is simply what real registers look like, and every one of those details would break a careless query. Learners write them into a short data note before going further.

## Why did Chiclayo seem to collect twice as much rubbish in October 2024?

It did not. But the first query any analyst would write says it did, and says nothing at all about November. Here is how SQL finds out why, in four short queries.

**Load the file into SQLite (Python standard library only)** (Python)
```python
import csv, sqlite3

FILE = "residuos_chiclayo_abril2026.csv"

db = sqlite3.connect(":memory:")
db.execute("CREATE TABLE r (fecha TEXT, mes TEXT, dia TEXT, turno TEXT, peso REAL)")
with open(FILE, encoding="latin-1") as f:
    for row in csv.DictReader(f):
        db.execute("INSERT INTO r VALUES (?, ?, ?, ?, ?)",
                   (row["FECHA_REGISTRO"], row["MES"], row["DIA"].strip(),
                    row["TURNO"], float(row["PESO"])))

def show(sql):
    for row in db.execute(sql):
        print(*row, sep=" | ")
    print()
```
This keeps five columns: the date of the record, the month column, the weekday name, the shift and the weight in tonnes. show() prints each result row with | between the values.

### The obvious first question

A manager asks for tonnes collected per month at the end of 2024. The natural query takes the month from the date, groups by it and adds up the weight.

Before reading the result, the mentor asks what each month should look like: about 90 or 93 shifts, three a day, and a total in the same range as its neighbours.

### What comes back

September has 90 shifts and December 93, as expected. October has 183 shifts and almost double the tonnes. November is not there at all.

Many reports would print this table. A good analyst sees two alarms: a month with twice the expected rows, and a month with none.

**Query 1: monthly totals by the month in the date** (Python)
```python
show("""
SELECT substr(fecha, 1, 6) AS month, COUNT(*) AS shifts, ROUND(SUM(peso), 1) AS tonnes
FROM r
WHERE fecha BETWEEN '20240901' AND '20241231'
GROUP BY month
""")
```
It prints 202409 | 90 | 6368.6, 202410 | 183 | 13921.5 and 202412 | 93 | 6924.9. November 2024 is missing.

Every day should have exactly three rows, one per shift, so the date is a key that ought to be unique per shift. GROUP BY with HAVING finds the days that break the rule. Then two columns that must agree are compared: the file's own month column against the month inside the date, and the weekday name against the weekday SQLite computes from the date.

**Queries 2 to 5: find the clash, explain it, fix the total** (Python)
```python
show("""
SELECT fecha, COUNT(*) AS rows_that_day
FROM r
GROUP BY fecha
HAVING COUNT(*) <> 3
ORDER BY rows_that_day DESC
LIMIT 3
""")

show("""
SELECT mes, substr(fecha, 1, 6) AS month_in_date, COUNT(*)
FROM r
WHERE mes <> substr(fecha, 1, 6)
GROUP BY mes, month_in_date
""")

show("""
SELECT fecha, dia,
       strftime('%w', substr(fecha,1,4) || '-' || substr(fecha,5,2) || '-' || substr(fecha,7,2)) AS weekday_of_date
FROM r
WHERE mes = '202411'
LIMIT 1
""")

show("""
SELECT mes, COUNT(*) AS shifts, ROUND(SUM(peso), 1) AS tonnes
FROM r
WHERE mes BETWEEN '202409' AND '202412'
GROUP BY mes
""")
```
It prints 20250630 | 90, 20241030 | 6 and 20241029 | 6; then 202411 | 202410 | 90; then 20241001 | VIERNES | 2; and finally 202409 | 90 | 6368.6, 202410 | 93 | 7342.9, 202411 | 90 | 6578.6 and 202412 | 93 | 6924.9.

**Chiclayo, end of 2024: tonnes by the month in the date against tonnes by the month column (our queries)**

| Month | Shifts, grouped by date | Tonnes, grouped by date | Tonnes, grouped by month column |
|---|---|---|---|
| September 2024 | 90 | 6,368.6 | 6,368.6 |
| October 2024 | 183 | 13,921.5 | 7,342.9 |
| November 2024 | 0 | none | 6,578.6 |
| December 2024 | 93 | 6,924.9 | 6,924.9 |

Credit: waste-collection register of the Municipalidad Provincial de Chiclayo, published on datosabiertos.gob.pe under ODC-By. We wrote and ran the queries, and computed the totals, on 9 November 2026 (Python 3, SQLite 3.50.4).

The story is now clear. The 90 rows whose month column says November 2024 carry October dates, 1 to 30 October. The weekday settles which column to trust: the first of those rows is dated 1 October 2024 but its weekday says VIERNES, Friday, while SQLite's strftime('%w') returns 2, a Tuesday. 1 November 2024 was a Friday. So the month column and the weekday are right, and the date was typed with the wrong month. Grouped by the month column, every month has 90 or 93 shifts and a believable total.

The first clash query found a second, stranger problem: 90 rows all dated 30 June 2025. Their weekday names run Sunday, Monday, Tuesday and so on in order, and 1 June 2025 was a Sunday, so the rows almost certainly cover the whole of June with one date pasted down the column. That one is left for the learner, below. Neither problem was visible in the dataset page, and neither needed anything more advanced than GROUP BY, HAVING and a comparison of two columns.

1. **Rebuild June 2025.** Assuming the rows are in date order, three per day, write a query or a short Python step that gives each one its real date. How would you check that your fix is right?
2. **Count the gaps.** Use a table of every calendar date from 1 January 2023 to 30 April 2026 and a LEFT JOIN to list the days with no rows. Which months are they in?
3. **Clean the weekday.** Make MIERCOLES and MIÉRCOLES the same value, then compare the average tonnes per shift on each weekday.
4. **Write the note.** In five sentences, tell the municipality what you found, with the query that proves each point.

## Which SQL course should I take?

Pick by what you will do with SQL most days. The table is our own advice.

**Which of our SQL-related courses fits which goal (our advice)**

| If you mostly want to | Take | Length |
|---|---|---|
| Analyse data and build reports | Data analysis: Excel, SQL, Python and BI | 8 to 10 months |
| Design and run databases for applications | MySQL: SQL and database design | 7 to 8 months |
| Start from spreadsheets, without programming | Data and AI analytics for non-programmers | 4 months |
| Go on to statistics and machine learning | Data science course, after SQL | 10 to 12 months |
| Learn SQL as a teenager | MySQL for teens, ages 13 to 18 | 5 to 6 months |

Course lengths are from our own syllabuses. Our advice, not a ranking; the mentor confirms the choice at the free class.

### Analysts in Peruvian organisations

Many of our adult learners already prepare monthly reports by hand in spreadsheets. The analysis course moves the same work into SQL and Python so it runs again next month in seconds, with checks like the ones above built in.

Our Spanish page for [adults learning to code in Peru](/cursos-de-programacion-para-adultos-peru) describes how classes fit around a job.

### Students and future data scientists

University students in Peru meet SQL in database courses, often only as syntax. We add the analysis habits and the English vocabulary used in documentation and interviews.

If statistics and models are the goal, SQL comes first and data science second. Our Spanish page, [data science en inglés](/curso-de-data-science-en-ingles-peru), explains that next step.

## Are the classes in Spanish?

No. We teach only in English, live and online, with mentors based in India who adapt to each learner's level.

### SQL is already half English

SELECT, FROM, WHERE, GROUP BY, HAVING, JOIN: the language itself is made of English words, and so are the error messages and the documentation of every database. Learners who know a little English find that SQL reinforces it.

Mentors keep their sentences short, explain each new keyword in plain words and repeat when asked. You may answer however you can; the query on the screen is what matters.

### English across Peru

Measured by EF's English Proficiency Index 2025, adults in Chiclayo average 474, which EF labels low; Lima averages 555, which it labels high.

If your English is closer to the first figure, the free class will tell you honestly whether to start now or to take a gentler course first. Many learners find that working with SQL in English is the practice that moves them up.

## At what time are classes, from Peru?

At the time you choose. Peru keeps one time zone across the country and does not change its clocks.

**Peru time and India time, examples only (no fixed slots)**

| Peru time | India time | Good for |
|---|---|---|
| 06:45 | 17:15 | Before the office |
| 12:00 | 22:30 | A lunch break |
| 19:30 | 06:00, next day | After work |
| 20:30 | 07:00, next day | Late learners |

The whole of Peru uses zone America/Lima, five hours behind UTC and without daylight saving since 1994; India uses UTC plus 5:30. That leaves a constant gap of ten and a half hours.

Chiclayo, Lima, Arequipa and Iquitos all share Peru time, so the slot you book works anywhere in the country. You choose in your own clock and the mentor sees the India time.

## How do you know your SQL is good enough?

Our milestones, each checked with a query you write and explain.

**Six SQL milestones we use to place and track learners**

| Step | What you can do | How it is shown |
|---|---|---|
| 1. Select | Filter, sort and limit rows from one table | A query written from a spoken question |
| 2. Aggregate | Group, count and sum, and filter groups with HAVING | The duplicate-day query from the lesson |
| 3. Join | Combine tables without losing or doubling rows | Row counts before and after every join |
| 4. Check | Prove a key is unique and two columns agree | A short data-quality report |
| 5. Analyse | Use window functions and subqueries for real questions | Running totals and rankings, explained |
| 6. Report | Turn queries into a dashboard or report others trust | A report with sources, licence and checks |

### For learners

Milestone 4 is the lesson on this page. It is the one that makes colleagues trust your numbers.
If a month has twice as many rows as its neighbours, the data is telling you something before the total is.

### For employers

Each milestone leaves a query file and a short write-up the learner can show.
Our certificate of completion is our own and is not a Peruvian university qualification.

## Nine more courses around data

For analysts adding skills, for developers, and for teenagers. All live, all in English.

### Analysts

18 and over

- [Analytics without programming](/courses/data-and-ai-analytics-for-non-programmers-course): Four months of spreadsheets and Power BI dashboards.
- [Statistics and probability](/courses/statistics-probability-maths-course): The maths behind every report, without code.
- [Data science](/courses/data-science-complete-masterclass-college): Python, machine learning and deep learning after SQL.

### Developers

18 and over

- [Python masterclass](/courses/python-programming-masterclass-zero-to-advanced-college): Python from zero, the partner of SQL in analysis.
- [Full stack development](/courses/full-stack-web-development-masterclass-college): Applications that read and write a database.
- [Automation with Python](/courses/python-ai-automation-masterclass-college): Make the monthly report build itself, query to file.

### Teenagers

Ages 13 to 18

- [Python for teens](/courses/python-complete-masterclass-teens): Programming from zero for secundaria students.
- [Teen data science](/courses/data-science-course-for-teens-python-data): For 14 to 18 year olds who know some Python.
- [Backend for teens](/courses/backend-coding-masterclass-for-teens): Node, APIs and databases, from zero.

## How live SQL classes run

Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.

- **Daytime** Peru mornings and lunchtimes fall in the Indian evening, an easy fit.
- **After work** A Peru evening is an Indian early morning, and mentors teach then too.
- **1-on-1** Your data, your questions, your hour.

- **Write the query** You type it; the mentor asks what it will return first.
- **Real tables** Open registers with real flaws, not perfect samples.
- **One mentor** Who knows your work and your weak spots.
- **Clear English** Short sentences, keywords explained, no rush.
- **Check, then report** Every total is checked a second way.
- **Class size** A group of fifteen to twenty, or a private class.

## Fees for the SQL and data analysis course

One month at a time. We charge in US dollars, card only; soles appear only once your bank has converted the charge at its own rate, so allow for a small difference on the statement.

- Free first class: Free. A free first class. A first query on a real table. No card asked.
- Group batch: USD 100 a month. Fifteen to twenty learners at a similar level. One mentor the whole way. Two live classes a week. Monthly, cancel any time.
- One to one: USD 150 a month. You and one mentor. Your own data and questions. Days and times you choose.

## SQL and data analysis in Peru: questions and answers

### Are the classes in Spanish?

No. Classes are live, online and in English only. Mentors in India use short sentences, explain each keyword plainly and adapt to your pace and accent; SQL itself is written in English words.

### Can I learn SQL from zero?

Yes. Both adult courses and the teen course start with a first SELECT. If you already use spreadsheets, you will recognise many ideas.

### SQL or Python first for data analysis?

SQL first for most analysts, because it is how data is fetched from company systems; Python follows for cleaning, charts and automation. Our analysis course teaches both in that order.

### Which database do you use?

MySQL in the database course, and SQLite in lessons like the one on this page because it comes with Python. The SQL you learn carries over to PostgreSQL, SQL Server and others with small differences.

### Is the practice data Peruvian?

Partly. Lessons mix international datasets with Peruvian registers such as Chiclayo's waste-collection table, which the Municipalidad Provincial de Chiclayo publishes openly with attribution required (ODC-By).

### What time are classes?

Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Our mentors are ten and a half hours ahead, so a 19:30 class in Peru starts at 06:00 the next morning in India.

### How many months until I am good at SQL?

Basic queries take a few weeks. Being trusted with real reporting, joins and data checks takes months; our analysis course runs 8 to 10 months and the MySQL course 7 to 8.

### Is there an SQL course for teenagers?

Yes, MySQL for teens, ages 13 to 18, over 5 to 6 months, taught in teen-only groups.

### How much does it cost?

The monthly fee is listed in the fees section in US dollars, which is how your card is charged; your bank converts to soles. From India the page shows rupees. The first class is free, with no card.

### Is there a certificate at the end?

Pass the final exam and we issue our own certificate of completion. No Peruvian university or state body is involved in it, so the queries and reports you can show matter more.

### Are you connected with the Municipalidad de Chiclayo?

No. The register is open data that anyone may use with credit, which we give; the findings here are our own analysis, and we have no link with the municipality.

## Related pages

- [Data science en inglés](/curso-de-data-science-en-ingles-peru): The next step after SQL, explained in Spanish.
- [Programación para adultos](/cursos-de-programacion-para-adultos-peru): Learning to code beside a job in Peru.
- [Programación para universitarios](/cursos-de-programacion-para-universitarios-peru): Courses alongside a Peruvian degree.
- [Coding and AI classes in Peru](/coding-and-ai-classes-in-peru): Every Peru page in one index.
- [Data analytics course](/data-analytics-course): Our analytics course, described in full.
- [How we teach](/how-we-teach): One live class, from start to end.

## More pages for Peru

Part of the guide: [Every Peru page](/coding-and-ai-classes-in-peru)

### Subjects and courses

- [AI agents course](/ai-agents-course-peru)
- [AI agents for professionals](/ai-agents-for-professionals-peru)
- [AI course for business](/ai-course-for-business-peru)
- [AI course for kids](/ai-course-for-kids-peru)
- [AI course for teens](/ai-course-for-teens-peru)
- [AI for teachers](/ai-for-teachers-peru)
- [AI for university students](/ai-course-for-university-students-peru)
- [App development course](/app-development-course-peru)
- [App development for teens](/app-development-for-teens-peru)
- [C++ course](/c-plus-plus-course-peru)
- [Data science course](/data-science-course-peru)
- [Java course](/java-course-peru)
- [Java for CS students](/java-for-computer-science-students-peru)
- [Maths for kids in English](/maths-for-kids-in-english-peru)
- [Maths tutor in English](/maths-tutor-in-english-peru)
- [Minecraft coding for kids](/minecraft-coding-for-kids-peru)
- [One-on-one coding tutor](/one-on-one-coding-tutor-peru)
- [Online maths classes](/online-maths-classes-peru)
- [Python course](/python-course-peru)
- [Python for engineering students](/python-for-engineering-students-peru)
- [Python for kids](/python-for-kids-peru)
- [Roblox coding for kids](/roblox-coding-for-kids-peru)
- [Scratch for kids](/scratch-for-kids-peru)
- [Software development course](/software-development-course-peru)
- [Vibe coding classes](/vibe-coding-classes-peru)
- [Web development course](/web-development-course-peru)

### Subjects and courses (in Spanish)

- [Agentes de IA para profesionales](/curso-de-agentes-de-ia-para-profesionales)
- [Clases particulares de programación](/clases-particulares-de-programacion-online-peru)
- [Crear apps: adolescentes](/crear-apps-curso-para-adolescentes-peru)
- [Curso de agentes de IA](/curso-de-agentes-de-ia-peru)
- [Curso de IA para adolescentes](/curso-de-ia-para-adolescentes-peru)
- [Curso de IA para empresas](/curso-de-ia-para-empresas-peru)
- [Curso de inteligencia artificial en inglés](/curso-de-inteligencia-artificial-en-ingles-peru)
- [Curso de inteligencia artificial para niños](/curso-de-inteligencia-artificial-para-ninos-peru)
- [Curso de Java en inglés](/curso-de-java-en-ingles-peru)
- [Curso de Python en inglés](/curso-de-python-en-ingles-peru)
- [Cursos de programación con certificado](/cursos-online-con-certificado-programacion-en-ingles)
- [Data science y Python](/curso-de-data-science-en-ingles-peru)
- [Desarrollo de aplicaciones](/curso-de-desarrollo-de-aplicaciones-en-ingles)
- [Desarrollo de software](/curso-de-desarrollo-de-software-en-ingles-peru)
- [Desarrollo web](/curso-de-desarrollo-web-en-ingles-peru)
- [IA para docentes](/ia-para-docentes-curso-en-ingles)
- [Java para universitarios](/curso-de-java-para-universitarios-peru)
- [Matemáticas en inglés para niños](/clases-de-matematicas-en-ingles-para-ninos)
- [Profesor de matemáticas en inglés](/profesor-de-matematicas-en-ingles-peru)
- [Profesor particular de matemáticas online](/profesor-particular-de-matematicas-online-peru)
- [Programación en Minecraft para niños](/programacion-minecraft-para-ninos-peru)
- [Programación en Roblox para niños](/programacion-roblox-para-ninos-en-ingles)
- [Python para ingeniería](/python-para-estudiantes-de-ingenieria-peru)
- [Python para niños](/curso-de-python-para-ninos-peru)
- [Scratch para niños en inglés](/scratch-para-ninos-en-ingles)
- [Vibe coding en inglés](/vibe-coding-curso-en-ingles)

More guides: [Coding and AI classes in Peru](/coding-and-ai-classes-in-peru), [En español: clases de programación en inglés](/clases-de-programacion-en-ingles-peru), [Start here: English-medium coding in Lima](/english-medium-coding-classes-lima), [By age and stage: AI and coding for professionals](/ai-and-coding-for-professionals-peru), [Exams, olympiads and school holidays: IB computer science tutor](/ib-computer-science-tutor-peru), [Guides to choosing: An English-taught option to Crack The Code](/crack-the-code-alternative-in-english), [Regions of Peru: Amazonas region](/online-coding-and-ai-classes-amazonas-region-peru), [Cities: Arequipa: coding for every age](/coding-classes-in-arequipa-peru), [Lima and Callao districts: Programación para niños en Ancón](/clases-de-programacion-para-ninos-ancon-lima)

## Contact

Book the free first class at [https://learn.modernagecoders.com/sql-and-data-analysis-course-peru](https://learn.modernagecoders.com/sql-and-data-analysis-course-peru#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
