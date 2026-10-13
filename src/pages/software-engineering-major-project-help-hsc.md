---
title: "HSC Software Engineering Project Help | Skills, Not Ghostwriting"
description: "Help with the skills behind the HSC Software Engineering project in NSW: Agile, Waterfall, testing, version control and quality checks. We never write your project."
canonical: https://learn.modernagecoders.com/software-engineering-major-project-help-hsc
source: src/pages/software-engineering-major-project-help-hsc.html
---
> The Software engineering project is a Year 12 focus area of the NSW Software Engineering 11-12 Syllabus (2022). Students define and analyse a problem, research Waterfall, Agile and WAgile approaches, manage the project with tools such as Gantt charts, apply quality assurance and version control, then test, evaluate and report. The project must be the student's own work under NESA rules.

[Home](/) / [Coding classes in Australia](/coding-classes-in-australia) / Software Engineering project

New South Wales · Year 12 Software Engineering · Skills, not ghostwriting

# Software Engineering project help

The Software Engineering project in Year 12 is where NSW students show they can run a piece of software work from a vague need to a tested, evaluated solution. It is meant to be hard in a particular way: not just writing code, but defining requirements, choosing a development approach, managing time, checking quality and responding to feedback. We teach every one of those skills. We do not do any of it for you.

At a glance: Focus area: Software engineering project; Indicative hours: 30, in Year 12; Approaches studied: Waterfall, Agile, WAgile; Tools named: Gantt charts, collaboration tools; Practice required: Version control and backup; Integrity program: All My Own Work; We teach: Planning, testing, evaluation skills; We never: Write, edit, debug or review your project. Rated 4.9 across 547 Google reviews.

## Three courses that build project skills

Version control, then a full build cycle, then the problem solving that keeps a project moving.

- [Version control with Git](/courses/git-github-version-control-course-for-teens): Commits, branches and history, the habit the syllabus names directly and the best evidence of steady, genuine work.
- [A full build, end to end](/courses/full-stack-web-development-teens-masterclass): Front end, back end and database built in tested slices, on projects of our own, so the cycle is familiar before Year 12.
- [Problem solving and testing](/courses/problem-solving-dsa-masterclass-teens): Algorithms, tracing and test design, the skills that turn a stuck project into a moving one.

## Four stages inside the project focus area

NESA organises the Software engineering project content into the stages below. The items are quoted from the Year 12 content on the NSW Curriculum site, checked on 7 October 2026.

**Software engineering project: content by stage (selected items, NESA wording)**

| Stage | Examples of what students do |
|---|---|
| Identifying and defining | Define and analyse the requirements of a problem, including assessing scheduling and financial feasibility and defining boundaries |
| Research and planning | Research and use the Waterfall and Agile approaches; research the WAgile approach; apply project management, including scheduling and tracking with Gantt charts |
| Quality | Defining criteria on which quality will be judged; ensuring requirements are met using a continual checking process |
| Producing and implementing | Design, construct and implement a solution; implement version control; demonstrate programmed backup |
| Testing and evaluating | Apply methodologies to test code; analyse and respond to feedback; evaluate the effectiveness of the solution, including a report that synthesises feedback |

The list makes one thing clear: code is only part of the project. A large share of the content is about the process around the code, from feasibility at the start to a feedback report at the end. Students who treat the project as "build an app, then write it up" usually find the process evidence thin when it matters.

The syllabus also asks students to explore social and ethical issues of project work, including working individually and collaboratively and responding to stakeholders, and to "Explore strategies to respond to difficulties", naming looking for a solution online, collaboration with peers and outsourcing as things to explore.

The focus area carries 30 indicative hours in Year 12, alongside Secure Software Architecture, Programming for the Web and Software Automation. That is not much time for a full development cycle, which is why planning skills and a realistic scope matter so much.

For the course as a whole, including the online HSC exam, see our [HSC Software Engineering page](/hsc-software-engineering-help). This page stays on the project.

Source: [NSW Curriculum, Software Engineering 11-12, Year 12, Software engineering project](https://curriculum.nsw.edu.au/learning-areas/tas/software-engineering-11-12-2022/content/year-12/fa0beecd16). Checked on 7 October 2026.

## Waterfall, Agile and the hybrid in between

The syllabus asks students to research and use two approaches and research a third. The comparison below is our teaching summary, built on the points NESA lists for each.

**Three approaches the project focus area names**

| Approach | What NESA asks students to look at | Our one-line summary |
|---|---|---|
| Waterfall | Logical progression of steps through the life cycle; the stages of falling water; advantages and disadvantages; scale and types of developments | Finish each stage before the next begins |
| Agile | Rate of developing a final solution; method tailoring; iteration workflow; scale and types of developments | Build in short cycles and adjust as you learn |
| WAgile | Understanding it is a hybrid model; when and how intervention is applied during the life cycle; scale and types of developments | Plan like Waterfall, build in Agile cycles |

For a one-person school project with a fixed deadline, the honest answer is often a hybrid: settle the requirements and a schedule early, then build and test in short cycles. That is close to what WAgile describes, and being able to justify such a choice in writing is worth more than naming the approaches.

A Gantt chart is the planning tool the syllabus names for scheduling and tracking. The useful habit is updating it as reality changes, so it becomes a record of what happened rather than a plan drawn once and forgotten.

We teach these approaches on small projects of our own, so students experience a Waterfall plan breaking under a late requirement change, and an Agile cycle absorbing it. That experience makes the written comparison in a student's own project far more convincing.

Version control fits every approach. Each commit is a dated, described step, and a history of steady commits is both good engineering and natural evidence that the work was built over time by the student.

## A traceability matrix catches the requirement nobody tested

The syllabus asks for "ensuring requirements are met using a continual checking process". A requirements traceability matrix is a simple way to do exactly that: every requirement is linked to the design that meets it and the test that proves it.

A worked example on an invented project of our own, a school library loan tracker. The table lists five requirements and checks each against a design element and a test.

**Traceability matrix for an invented library loan tracker**

| Requirement | Design element | Test case | Status |
|---|---|---|---|
| R1 Record a loan with a due date | Loans table and form | T1: add a loan, read it back | Passed |
| R2 Flag loans more than 14 days overdue | Daily overdue check | T2: loan dated 15 days ago is flagged | Passed |
| R3 Return a book and close the loan | Return button | T3: returned loan no longer listed | Passed |
| R4 Stop a student holding more than 3 loans | Limit check on new loan | None written | Not tested |
| R5 Search loans by student name | Search box | T5: partial name finds the student | Passed |

The matrix shows at a glance that only 4 of the 5 requirements have a test, 80% coverage, and that R4 is the gap. Writing T4, a fourth loan refused for a student who already holds 3, raises coverage to 100% and, in our example, exposes a bug: the limit check counted returned loans as well as open ones.

Nobody would have found that by clicking around the finished app. The matrix forces the uncomfortable question for every requirement: how do we know this works?

The same matrix serves the evaluation stage. When the syllabus asks students to evaluate the effectiveness of a solution, a traceability table gives the evaluation a backbone: each requirement, the evidence it is met, and what still fails.

In a student's own project, the requirements, design and tests are theirs to write. What we teach is the method, on examples like this one, so the student can build the matrix for their own work without help.

## The NESA rules around an assessed project

These points come from NESA's All My Own Work page and official notice 34/26, read on 7 October 2026.

**What NESA requires around authentic work**

| Rule | What NESA says |
|---|---|
| All My Own Work | To be eligible for entry into a Preliminary and/or HSC course, and for the award of the HSC, all students must complete AMOW or its equivalent |
| What AMOW covers | Four topics, including what is and is not all your own work, plagiarism, acknowledging other people's work, and working honestly when getting help |
| Notice 34/26 | Changes to the ACE Rules on take-home tasks, including rules on certifying HSC projects and on developing a school malpractice policy |
| Who it applies to | Year 12 students commencing HSC courses from Term 4, 2026, and Year 11 students commencing Preliminary courses from Term 1, 2027 |

One of AMOW's topics is about working honestly when getting help with your work, and that is the line we hold. We teach planning, version control, testing and evaluation as general skills on our own projects. We will talk about a student's project only in general terms, such as how to choose a scope or how to structure an evaluation, and we do not write, edit, debug, review or comment on any code, document or design that will be submitted.

This protects the student. A project that reflects the student's own skill can be explained line by line if a teacher asks, and NESA's tighter rules make that ability more important, not less.

Sources: [NESA, All My Own Work](https://www.nsw.gov.au/education-and-training/nesa/hsc/all-my-own-work); [NESA official notice 34/26](https://www.nsw.gov.au/education-and-training/nesa/news/all/changes-ace-rules-take-home-tasks-artifical-intelligence). Checked on 7 October 2026.

## Four skills to have before the project starts

A project goes far more smoothly when these are already habits, built on practice projects rather than the assessed one.

**Project skills, from first to last**

| Order | Skill | Practised on |
|---|---|---|
| 1 | Writing testable requirements | Our invented briefs, one sentence per requirement |
| 2 | Planning with a Gantt chart | A two-week practice build, updated daily |
| 3 | Version control | Every practice project, with a commit per change |
| 4 | Testing and evaluation | A traceability matrix and a short feedback report |

### Common project trouble

Scope is the usual problem: an idea that needs six months of work squeezed into far fewer hours. Practising scoping on a small brief teaches students to cut features before they cut quality.
The second is late testing. Students who test only at the end discover problems when there is no time left to fix them.

### Beyond Year 12

Every skill here is the daily work of professional software teams, and of university group projects.
Students who want harder programming problems alongside the project can look at the [competitions calendar](/australian-coding-maths-and-ai-competitions-calendar), which includes the informatics olympiad.

## Nine courses for project-ready students

Grouped by the part of the project they prepare for. Each card opens a full syllabus.

### Process skills

Planning and version control

- [Git and GitHub for teens](/courses/git-github-version-control-course-for-teens): Commits, branches and pull requests from the beginning.
- [Problem solving for teens](/courses/problem-solving-dsa-masterclass-teens): Breaking problems down and tracing solutions.
- [Competitive programming](/courses/competitive-programming-for-teens-course): Correct code under pressure, and testing edge cases.

### Build skills

Front end to back end

- [Full stack web development](/courses/full-stack-web-development-teens-masterclass): A complete web application built in tested steps.
- [Backend development](/courses/backend-coding-masterclass-for-teens): APIs, databases and error handling on the server.
- [Python for teens](/courses/python-complete-masterclass-teens): The language many NSW projects use, from basics to classes.

### Quality and security

Making it trustworthy

- [Cybersecurity for teens](/courses/cybersecurity-course-for-teens-ethical-defensive): Secure habits for code that handles real data.
- [MySQL for teens](/courses/mysql-mastery-for-teens): Database design that stays correct as data grows.
- [App development for teens](/courses/complete-app-development-masterclass-for-teens): Interfaces and state for students building apps.

## Lessons that build skills, never the project

Our tutors teach from India, which runs four and a half hours behind Sydney in winter and five and a half hours behind during NSW daylight saving. A 5.30 pm Sydney lesson in summer starts at noon for the tutor, so after-school sessions are simple to arrange.

- **Weekday after school** Weekly skill sessions through Year 11 and Year 12.
- **Weekend workshops** A practice project built from brief to evaluation.
- **Holiday blocks** Focused practice on one skill, such as testing.

- **Our examples only** Every exercise uses invented briefs and our own code.
- **Process made visible** Students keep a Gantt chart and commit history on every practice build.
- **Testing as a habit** Each practice requirement gets a test before it gets code.
- **Classes of fifteen to twenty** Students at one level, each presenting their practice work.
- **One-to-one coaching** Private lessons on a single skill, never on assessed work.
- **Clear boundaries** We do not write, edit, debug or review projects, and we promise no marks.

## Fees

A monthly fee in US dollars, set at one level for every family outside India. Joining is free and only the current month is ever charged.

- Free first class: USD 0. A real lesson on a project skill. Honest advice on what to learn next. No card details.
- Group batch: USD 100 a month. Fifteen to twenty students per class. One tutor through the term. Practice projects reviewed. A certificate at the end.
- One to one: USD 150 a month. Private skill coaching. Focused on one weak area. Strictly no assessed work.

## What Software Engineering students ask

### What is the HSC Software Engineering project?

It is the Software engineering project focus area of the NSW Software Engineering 11-12 Syllabus (2022), with 30 indicative hours in Year 12. Students define a problem, plan and manage development, build and implement a solution with version control, then test, evaluate and report.

### Will you write or fix my project?

No. We teach the skills a project needs using our own examples. We do not write, edit, debug, review or comment on any code, document or design that will be submitted for assessment.

### What is the difference between Waterfall and Agile?

Waterfall completes each stage of development before the next begins. Agile builds in short cycles and adjusts the plan as it goes. WAgile is a hybrid that the syllabus also asks students to research.

### What is a requirements traceability matrix?

A table linking each requirement to the design element that meets it and the test that proves it. Gaps, such as a requirement with no test, show up immediately, which supports the syllabus aim of checking requirements continually.

### Why does version control matter for the project?

The syllabus names it, and it is good practice: each commit records a dated, described change. A steady commit history also shows how the work developed over time.

### What is All My Own Work?

A NESA program on academic integrity. NESA states all students must complete it, or its equivalent, to be eligible to enter Preliminary and HSC courses and for the award of the HSC.

### Did NESA change the rules for projects?

NESA official notice 34/26 changed the ACE Rules on take-home tasks, including certifying HSC projects and school malpractice policies, for Year 12 students commencing HSC courses from Term 4, 2026.

### Can I use AI tools in my project?

That is set by NESA rules and your school. Ask your teacher before using any AI tool. We do not advise on using AI inside assessed work.

### Can you promise a good project mark?

No. The project and its mark belong to the student. We teach the skills that make good work possible.

### What do lessons actually cover?

Requirements writing, planning approaches, Gantt charts, Git, testing methods, traceability and evaluation reports, all practised on our own small projects.

## More for NSW computing students

- [HSC Software Engineering](/hsc-software-engineering-help): The whole course and its online exam.
- [HSC Enterprise Computing](/hsc-enterprise-computing-help): The data and systems course, with its own project.
- [Choosing computing subjects](/choosing-year-11-computing-subjects-australia): Comparing the options before Year 11.
- [Understand the code](/understand-the-code-dont-copy-paste-australia): Why copied code fails you later.
- [Coding classes in Australia](/coding-classes-in-australia): All our Australian pages.
- [How we teach](/how-we-teach): How a lesson runs, plainly.

## Contact

Book the free first class at [https://learn.modernagecoders.com/software-engineering-major-project-help-hsc](https://learn.modernagecoders.com/software-engineering-major-project-help-hsc#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
