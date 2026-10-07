---
title: "Digital Technologies Years 7 to 10 Coding | Help and Classes"
description: "Digital Technologies coding for Years 7 to 10: what ACARA's Version 9.0 content asks students to program, store, test and secure, with a worked SQL lesson."
canonical: https://learn.modernagecoders.com/digital-technologies-years-7-to-10-coding
source: src/pages/digital-technologies-years-7-to-10-coding.html
---
> In Years 7 to 10 the Australian Curriculum asks students to implement algorithms in a general-purpose language, then by Year 10 in an object-oriented one. They also model structured data and query multi-table databases with SQL, manage collaborative projects with tools such as GitHub, and build cyber security threat models. Each school decides how these are taught and assessed.

[Home](/) / [Digital Technologies curriculum help](/australian-curriculum-digital-technologies-help) / Years 7 to 10 coding

Australia · Digital Technologies Years 7 to 10 · Live online

# Years 7 to 10 coding in Digital Technologies

Secondary Digital Technologies is where computing stops being a set of puzzles and starts looking like software work. Across Years 7 to 10 the curriculum asks for programs in a real language, then object-oriented design, databases queried with SQL, version control on shared projects, and threat models for security. This page reads the Version 9.0 content for those years and pulls out what a student is actually expected to produce, then works one lesson from the Years 9 to 10 data content: why a review table needs a key that stops the same person reviewing the same film twice. It suits students heading into senior computing and parents who want to know what the homework is really about.

At a glance: Bands: Years 7 to 8, Years 9 to 10; Languages: General-purpose, then object-oriented; Data: Spreadsheets, then multi-table databases; Queries: SELECT, WHERE, simple JOIN and GROUP BY; Projects: Agile, with version control such as GitHub; Security: Authentication, then threat models; Assessment: Set by each school; We teach: Python, SQL and testing, live. Rated 4.9 across 547 Google reviews.

## Three courses for secondary Digital Technologies

Programming first, then data, then the habits that make projects work.

- [Python, properly](/courses/python-complete-masterclass-teens): Functions, files and data structures, with every program traced and tested before it is called finished.
- [SQL and database design](/courses/mysql-mastery-for-teens): Tables, keys and joins: the structured data the Years 9 to 10 content builds on.
- [Git and GitHub](/courses/git-github-version-control-course-for-teens): Version control for shared projects, the tool the curriculum names for collaborative work.

## From a first real language to object-oriented code

The band descriptions set the direction. These sentences are ACARA's, from the Version 9.0 Years 7 to 10 file.

**Programming and data expectations, Years 7 to 8 against Years 9 to 10**

| Area | Years 7 to 8 | Years 9 to 10 |
|---|---|---|
| Language | "implementing them in a general-purpose programming language" | "implementing them, including in an object-oriented programming language" |
| Algorithms | Nested control structures, shown as flowcharts and pseudocode | Logical operators, shown as flowcharts and pseudocode |
| Checking work | Trace algorithms to predict output and find errors | Validate against "a range of test cases" |
| Data | Spreadsheets and databases to acquire, store and validate data | Model and query entities and their relationships |
| Documents | Not a separate content description | Content, structure and presentation kept apart (AC9TDI10K02) |
| Security | Multi-factor authentication and phishing | Threat models and a software, user or supply chain vulnerability |

The Year 10 achievement standard asks students to "acquire, interpret and model complex data with databases and represent documents as content, structure and presentation", and to "design and validate algorithms and implement them, including in an object-oriented programming language".

In practice that means a Year 10 student should be comfortable reading code split across files and classes. The elaboration under AC9TDI10P09 gives the example of "using the codebase of an existing adventure game and building new characters, levels or abilities".

ACARA names example languages for both bands: "Python, JavaScript or C#" in Years 9 to 10. Schools choose, and many keep the same language from Year 7 so students can concentrate on design rather than syntax.

The quietest change is testing. Years 7 to 8 trace code by hand with desk checks; Years 9 to 10 test deliberately, including boundary cases and invalid input. Students who skip that habit write programs that work in class and fail on the day they are marked.

Source: ACARA, [Digital Technologies content 7 to 10, Version 9.0](https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx) (Word download), band descriptions, Year 10 achievement standard and AC9TDI10P09, read on 7 October 2026. We are not connected with ACARA.

## One person, one review: why a database needs a composite key

The content description AC9TDI10P03 asks students to "model and query entities and their relationships using structured data". One of its elaborations is a check that "each user has only reviewed each movie once". Here is that check, done for real.

**An invented reviews table with eight rows (user and movie numbers stand for names)**

| Row | User | Movie | Rating |
|---|---|---|---|
| 1 | 1 | 1 | 4 |
| 2 | 1 | 2 | 5 |
| 3 | 2 | 1 | 3 |
| 4 | 3 | 3 | 4 |
| 5 | 2 | 1 | 5 |
| 6 | 3 | 2 | 2 |
| 7 | 1 | 3 | 4 |
| 8 | 4 | 1 | 5 |

### Finding the duplicate

Grouping by both columns and counting finds any pair that appears more than once. The query is SELECT user_id, movie_id, COUNT(*) FROM reviews GROUP BY user_id, movie_id HAVING COUNT(*) &gt; 1; and on this table it returns one row: user 2, movie 1, count 2.

That duplicate changes the answer to a simple question. Averaging every rating for movie 1 gives 17 divided by 4, an average of 4.25. With only one review per person, keeping user 2's first rating of 3, the average is 12 divided by 3, which is 4.0.

### Stopping it happening

The fix belongs in the design, not in a clean-up query run every week. Declaring PRIMARY KEY (user_id, movie_id) makes the pair a composite key, so the database itself refuses a second review from the same person for the same film.

When we load the same eight rows into a table with that key, seven are accepted and the fifth row is rejected with the message UNIQUE constraint failed: r2.user_id, r2.movie_id. Students then have to decide what should happen instead: keep the first review, or let people update their rating.

This is why the curriculum pairs modelling with querying. A student who only learns SELECT statements can find the problem; a student who learns to model entities and relationships stops it from existing. The same thinking carries straight into senior computing subjects and into any job that touches data.

Quotations: ACARA, Digital Technologies content 7 to 10, Version 9.0, AC9TDI10P03 and its elaborations. The table is invented for teaching; the query results and the error message were produced by us in SQLite on 7 October 2026.

## Projects, user stories and version control

The Years 9 to 10 content treats software as something built by groups, with roles, plans and shared code.

AC9TDI10P04 asks students to "define and decompose real-world problems with design criteria and by interviewing stakeholders to create user stories". Its elaboration gives the template "As a &lt;type of user&gt;, I want &lt;some goal&gt; so that &lt;some reason&gt;".

AC9TDI10P12 then asks students to "use simple project management tools to plan and manage individual and collaborative agile projects, accounting for risks and responsibilities". The example given is "a collaborative version control tool such as GitHub".

Group projects usually go wrong in one of two places: nobody agrees what the program is for, or two people overwrite each other's work. User stories fix the first; version control fixes the second. Both are skills we teach directly, with practice repositories rather than slides.

Assessment of group work is set by each school. We help students understand and practise the techniques; the project they hand in stays their own, done under their school's rules.

Quotations: ACARA, Digital Technologies content 7 to 10, Version 9.0, AC9TDI10P04 and AC9TDI10P12, read on 7 October 2026.

## Threat models and data flow diagrams

Security grows from passwords in primary school to thinking like an attacker by Year 10.

### The content description

AC9TDI10P13 asks students to "develop cyber security threat models, and explore a software, user or software supply chain vulnerability".

### The tool it suggests

A data flow diagram showing "how private information moves through a system", for example between a user and a server in a web application.

### The lesson it points to

The elaboration notes that sending data in plaintext would leave it "susceptible to a man-in-the-middle attack", which is why encrypted connections matter.

We teach this from the defender's side and only on systems students own. The elaboration also suggests exploring a known weakness in a student's own software, such as changing a value stored in a login cookie. Doing that on your own practice project is a lesson; doing it on someone else's system is not, and we say so plainly.

Quotations: ACARA, Digital Technologies content 7 to 10, Version 9.0, AC9TDI10P13 and its elaborations, read on 7 October 2026.

## A sensible order through Years 7 to 10

Schools vary, but skills stack in roughly this order.

**Programming and data skills, Year 7 to Year 10**

| Around | Skill | The sign it is secure |
|---|---|---|
| Year 7 | Functions and loops in a text language | Writes a short program and desk checks it on paper |
| Year 8 | Spreadsheet and database basics | Validates data and explains a trend it shows |
| Year 9 | SQL across tables | Writes a JOIN and a GROUP BY and explains the result |
| Year 10 | Objects, testing and security | Builds a class, tests its boundaries and sketches a threat model |

### If programming feels rushed at school

Many schools fit Digital Technologies around other Technologies subjects, so time with code can be short. A steady weekly class fills that gap without racing ahead of the school.
The fastest improvement usually comes from reading and tracing other people's code, not only writing new code.

### Looking ahead

Senior computing subjects differ by state. Our pages on [choosing Year 11 computing subjects](/choosing-year-11-computing-subjects-australia) and [HSC Software Engineering](/hsc-software-engineering-help) pick up from here.
Students who like the algorithmic side often enjoy the Australian Informatics Olympiad, which needs exactly these skills.

## Nine courses for Years 7 to 10

Grouped by the part of the curriculum each one serves. Each card opens the full syllabus.

### Programming

General-purpose and object-oriented

- [Python for teens](/courses/python-complete-masterclass-teens): From first script to modular programs.
- [Java for teens](/courses/java-programming-masterclass-for-teens): Classes and objects in a strongly typed language.
- [JavaScript for teens](/courses/javascript-course-for-teens-beginners-interactive-web): Interactive pages and simple browser games.

### Data and the web

Structured data and documents

- [SQL for teens](/courses/mysql-mastery-for-teens): Keys, joins and queries on real tables.
- [Data science for teens](/courses/data-science-course-for-teens-python-data): Trends, outliers and first models in Python.
- [HTML and CSS](/courses/html-css-course-for-beginners-build-real-websites): Content, structure and styling, kept separate.

### Projects and security

Working like developers

- [Git and GitHub for teens](/courses/git-github-version-control-course-for-teens): Branches, commits and pull requests on shared work.
- [Cyber security for teens](/courses/cybersecurity-course-for-teens-ethical-defensive): Threats and defences, taught ethically.
- [Algorithms and data structures](/courses/problem-solving-dsa-masterclass-teens): Choosing the right structure for the job.

## Live coding classes for Australian secondary students

Teachers work from India, which is behind every Australian time zone. A 5 pm lesson in Sydney during daylight saving begins at 11.30 am India time, so late-afternoon slots are steady for us to staff.

- **Weekday after school** Most Years 7 to 10 students choose this.
- **Saturday or Sunday** For students with sport or music on weekdays.
- **Holiday blocks** A focused week on one skill, such as SQL.

- **Code read aloud** Students explain each line before changing it.
- **Tests first** Boundaries and bad input are tried on every program.
- **Five to ten per group** Placed by skill so everyone works at the right pace.
- **Private lessons** Chosen for a specific gap or a student moving fast.
- **Notes for parents** A line on what was covered and what to ask about.
- **Honest about school work** We teach technique; assessed projects stay the student's own.

## Fees

Australian families are billed each month in US dollars at our standard rate outside India. There is no deposit, and you can stop at the end of any month.

- Free first class: USD 0. A real lesson with a teacher. An honest read on your child's level. No card required.
- Group batch: USD 100 a month. Five to ten students at one level. One teacher, every week. Code reviewed with comments. A certificate on completion.
- One to one: USD 150 a month. A teacher for one student. Aimed at a particular goal. A weekly time that suits you.

## What families and students ask

### What coding does Digital Technologies require in Years 7 to 10?

By Year 8, programs in a general-purpose language with control structures and functions; by Year 10, modular programs using algorithms and data structures, including in an object-oriented language.

### Which programming language will my child learn at school?

Schools choose. ACARA gives examples rather than a requirement; for Years 9 to 10 it names Python, JavaScript or C#.

### What is a composite key?

A primary key made of two or more columns together. In a reviews table, using the user and the movie together as the key stops the same person reviewing the same movie twice.

### Does the curriculum include SQL?

Yes. The Years 9 to 10 elaborations describe querying multi-table databases using SQL with SELECT, WHERE and simple JOIN and GROUP BY clauses.

### What is a user story?

A short statement of what a user needs and why, often written as "As a type of user, I want some goal so that some reason". The Years 9 to 10 content asks students to create them by interviewing stakeholders.

### What is a threat model?

A structured look at how a system could be attacked: what is valuable, where data moves, and where it is exposed. Year 10 students build simple ones, often with a data flow diagram.

### Can you help with my child's school project?

We teach the techniques a project needs and practise them on separate examples. Anything assessed is done by the student under the school's rules.

### Is this the same as HSC or VCE computing?

No. Years 7 to 10 follow the national Digital Technologies content; senior computing subjects are set by each state's authority and differ.

### Are you part of ACARA or a school system?

No. We are an independent online school. ACARA is quoted here because it publishes the curriculum.

### How do lesson times work in Australia?

We agree a weekly time after the free class. Every Australian time zone is ahead of India, so after-school lessons in Australia fall in our daytime.

## More for Australian secondary students

- [Digital Technologies curriculum help](/australian-curriculum-digital-technologies-help): The whole subject, Foundation to Year 10.
- [Coding for Year 7](/coding-for-year-7-australia): The first year of a text language.
- [Choosing Year 11 computing](/choosing-year-11-computing-subjects-australia): Senior subjects by state.
- [HSC Software Engineering](/hsc-software-engineering-help): The NSW senior course.
- [Understand the code](/understand-the-code-dont-copy-paste-australia): Why pasted code breaks.
- [Coding classes in Australia](/coding-classes-in-australia): Our main Australian page.

## Contact

Book the free first class at [https://learn.modernagecoders.com/digital-technologies-years-7-to-10-coding](https://learn.modernagecoders.com/digital-technologies-years-7-to-10-coding#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
