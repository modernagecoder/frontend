---
title: "Digital Technologies Years 7 to 10 Coding | Help and Classes"
description: "Digital Technologies coding for Years 7 to 10: what ACARA's Version 9.0 content asks students to program, store, test and secure, with a worked SQL lesson."
canonical: https://learn.modernagecoders.com/digital-technologies-years-7-to-10-coding
source: src/pages/digital-technologies-years-7-to-10-coding.html
---
> Digital Technologies coding for Years 7 to 10: what ACARA's Version 9.0 content asks students to program, store, test and secure, with a worked SQL lesson.

In short

In Years 7 to 10 the Australian Curriculum asks students to implement algorithms in a general-purpose language, then by Year 10 in an object-oriented one. They also model structured data and query multi-table databases with SQL, manage collaborative projects with tools such as GitHub, and build cyber security threat models. Each school decides how these are taught and assessed.

Built for these years

## Three courses for secondary Digital Technologies

Programming first, then data, then the habits that make projects work.

[![Python for Teens course thumbnail](/images/python-teens.webp)  DTSN / 01 Python, properly Functions, files and data structures, with every program traced and tested before it is called finished. Open the syllabus →](/courses/python-complete-masterclass-teens)[![MySQL for Teens course thumbnail](/images/mysql-teens.webp)  DTSN / 02 SQL and database design Tables, keys and joins: the structured data the Years 9 to 10 content builds on. Open the syllabus →](/courses/mysql-mastery-for-teens)[![Git & GitHub Course for Teens course thumbnail](/images/git-github-teens.webp)  DTSN / 03 Git and GitHub Version control for shared projects, the tool the curriculum names for collaborative work. Open the syllabus →](/courses/git-github-version-control-course-for-teens)

What the two bands ask for

## From a first real language to object-oriented code

The band descriptions set the direction. These sentences are ACARA's, from the Version 9.0 Years 7 to 10 file.

| Area | Years 7 to 8 | Years 9 to 10 |
| --- | --- | --- |
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

A lesson from AC9TDI10P03

## One person, one review: why a database needs a composite key

The content description AC9TDI10P03 asks students to "model and query entities and their relationships using structured data". One of its elaborations is a check that "each user has only reviewed each movie once". Here is that check, done for real.

| Row | User | Movie | Rating |
| --- | --- | --- | --- |
| 1 | 1 | 1 | 4 |
| 2 | 1 | 2 | 5 |
| 3 | 2 | 1 | 3 |
| 4 | 3 | 3 | 4 |
| 5 | 2 | 1 | 5 |
| 6 | 3 | 2 | 2 |
| 7 | 1 | 3 | 4 |
| 8 | 4 | 1 | 5 |

### Finding the duplicate

Grouping by both columns and counting finds any pair that appears more than once. The query is `SELECT user_id, movie_id, COUNT(*) FROM reviews GROUP BY user_id, movie_id HAVING COUNT(*) > 1;` and on this table it returns one row: user 2, movie 1, count 2.

That duplicate changes the answer to a simple question. Averaging every rating for movie 1 gives 17 divided by 4, an average of 4.25. With only one review per person, keeping user 2's first rating of 3, the average is 12 divided by 3, which is 4.0.

### Stopping it happening

The fix belongs in the design, not in a clean-up query run every week. Declaring `PRIMARY KEY (user_id, movie_id)` makes the pair a composite key, so the database itself refuses a second review from the same person for the same film.

When we load the same eight rows into a table with that key, seven are accepted and the fifth row is rejected with the message `UNIQUE constraint failed: r2.user_id, r2.movie_id`. Students then have to decide what should happen instead: keep the first review, or let people update their rating.

This is why the curriculum pairs modelling with querying. A student who only learns SELECT statements can find the problem; a student who learns to model entities and relationships stops it from existing. The same thinking carries straight into senior computing subjects and into any job that touches data.

Quotations: ACARA, Digital Technologies content 7 to 10, Version 9.0, AC9TDI10P03 and its elaborations. The table is invented for teaching; the query results and the error message were produced by us in SQLite on 7 October 2026.

Working as a team

## Projects, user stories and version control

The Years 9 to 10 content treats software as something built by groups, with roles, plans and shared code.

AC9TDI10P04 asks students to "define and decompose real-world problems with design criteria and by interviewing stakeholders to create user stories". Its elaboration gives the template "As a <type of user>, I want <some goal> so that <some reason>".

AC9TDI10P12 then asks students to "use simple project management tools to plan and manage individual and collaborative agile projects, accounting for risks and responsibilities". The example given is "a collaborative version control tool such as GitHub".

Group projects usually go wrong in one of two places: nobody agrees what the program is for, or two people overwrite each other's work. User stories fix the first; version control fixes the second. Both are skills we teach directly, with practice repositories rather than slides.

Assessment of group work is set by each school. We help students understand and practise the techniques; the project they hand in stays their own, done under their school's rules.

Quotations: ACARA, Digital Technologies content 7 to 10, Version 9.0, AC9TDI10P04 and AC9TDI10P12, read on 7 October 2026.

Security in Year 10

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

Year by year

## A sensible order through Years 7 to 10

Schools vary, but skills stack in roughly this order.

| Around | Skill | The sign it is secure |
| --- | --- | --- |
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

The catalogue

## Nine courses for Years 7 to 10

Grouped by the part of the curriculum each one serves. Each card opens the full syllabus.

I

### Programming

General-purpose and object-oriented

DTSN / C / 01

#### Python for teens

From first script to modular programs.

[Open the syllabus](/courses/python-complete-masterclass-teens)

DTSN / C / 02

#### Java for teens

Classes and objects in a strongly typed language.

[Open the syllabus](/courses/java-programming-masterclass-for-teens)

DTSN / C / 03

#### JavaScript for teens

Interactive pages and simple browser games.

[Open the syllabus](/courses/javascript-course-for-teens-beginners-interactive-web)II

### Data and the web

Structured data and documents

DTSN / D / 01

#### SQL for teens

Keys, joins and queries on real tables.

[Open the syllabus](/courses/mysql-mastery-for-teens)

DTSN / D / 02

#### Data science for teens

Trends, outliers and first models in Python.

[Open the syllabus](/courses/data-science-course-for-teens-python-data)

DTSN / D / 03

#### HTML and CSS

Content, structure and styling, kept separate.

[Open the syllabus](/courses/html-css-course-for-beginners-build-real-websites)III

### Projects and security

Working like developers

DTSN / P / 01

#### Git and GitHub for teens

Branches, commits and pull requests on shared work.

[Open the syllabus](/courses/git-github-version-control-course-for-teens)

DTSN / P / 02

#### Cyber security for teens

Threats and defences, taught ethically.

[Open the syllabus](/courses/cybersecurity-course-for-teens-ethical-defensive)

DTSN / P / 03

#### Algorithms and data structures

Choosing the right structure for the job.

[Open the syllabus](/courses/problem-solving-dsa-masterclass-teens)

How lessons run

## Live coding classes for Australian secondary students

Teachers work from India, which is behind every Australian time zone. A 5 pm lesson in Sydney during daylight saving begins at 11.30 am India time, so late-afternoon slots are steady for us to staff.

Weekday after school

Most Years 7 to 10 students choose this.

Saturday or Sunday

For students with sport or music on weekdays.

Holiday blocks

A focused week on one skill, such as SQL.

### Code read aloud

Students explain each line before changing it.

### Tests first

Boundaries and bad input are tried on every program.

### Fifteen to twenty per group

Placed by skill so everyone works at the right pace.

### Private lessons

Chosen for a specific gap or a student moving fast.

### Notes for parents

A line on what was covered and what to ask about.

### Honest about school work

We teach technique; assessed projects stay the student's own.

Student work

## Work our students have put online

Made for the learners' own reasons rather than for marks. The full set is in the [student labs](/student-labs).

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

Australian families are billed each month in US dollars at our standard rate outside India. There is no deposit, and you can stop at the end of any month.

Free first class

USD 0

no card required

- A real lesson with a teacher
- An honest read on your child's level
- No card required

Book it

Group batch

USD 100

a month, billed in US dollars

- Fifteen to twenty students at one level
- One teacher, every week
- Code reviewed with comments
- A certificate on completion

Start here

One to one

USD 150

a month, billed in US dollars

- A teacher for one student
- Aimed at a particular goal
- A weekly time that suits you

Enquire

What families say

## Rated 4.9 across 547 Google reviews

Parents' and students' words, exactly as posted on Google.

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

Questions about Years 7 to 10 coding

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

Related pages

## More for Australian secondary students

Curriculum guides, senior subjects and coding paths.

### [Digital Technologies curriculum help](/australian-curriculum-digital-technologies-help)

The whole subject, Foundation to Year 10.

### [Coding for Year 7](/coding-for-year-7-australia)

The first year of a text language.

### [Choosing Year 11 computing](/choosing-year-11-computing-subjects-australia)

Senior subjects by state.

### [HSC Software Engineering](/hsc-software-engineering-help)

The NSW senior course.

### [Understand the code](/understand-the-code-dont-copy-paste-australia)

Why pasted code breaks.

### [Coding classes in Australia](/coding-classes-in-australia)

Our main Australian page.

Start here

## Book a free secondary coding class

Tell us the year level and what the class is covering, whether that is Python, databases or a project. The free lesson works on that and ends with honest advice about next steps.

Want to look first? The [course atlas](/course-atlas) lists every course, and [how we teach](/how-we-teach) describes a lesson.

[WhatsApp us](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20coding%20class%20for%20Years%207%20to%2010%20Digital%20Technologies.) · [+91 91233 66161](tel:+919123366161) · [connect@modernagecoders.com](mailto:connect@modernagecoders.com)

A WhatsApp message is the quickest way to reach us. The number starts +91 because the school is based in India, with no office in Australia.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/digital-technologies-years-7-to-10-coding*
