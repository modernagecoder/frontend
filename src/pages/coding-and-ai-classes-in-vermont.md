---
title: "Coding and AI Classes in Vermont | Live Online"
description: "Live online coding and AI classes for Vermont students: where CS fits flexible pathways, the published access figures, and a Vermont public library data project."
canonical: https://learn.modernagecoders.com/coding-and-ai-classes-in-vermont
source: src/pages/coding-and-ai-classes-in-vermont.html
---
> No single CS course is required. Vermont&rsquo;s State Board adopted the ISTE Standards for student technology learning, and Act 77 of 2013 lets students reach graduation through flexible, personalized pathways. Code.org (2025) counts 33 of 55 Vermont high schools offering CS in 2023 to 2024. Modern Age Coders teaches Vermont students live online, ages 6 to 18.

[Home](/) / [United States](/coding-classes-in-united-states) / Vermont

Vermont, United States / Live online

# Coding and AI classes in Vermont

**Is computer science required in Vermont schools?** No single CS course is required. Vermont&rsquo;s State Board adopted the ISTE Standards for student technology learning, and Act 77 of 2013 lets students reach graduation through flexible, personalized pathways. Code.org (2025) counts 33 of 55 Vermont high schools offering CS in 2023 to 2024. Modern Age Coders teaches Vermont students live online, ages 6 to 18.

In Vermont, a high school schedule is meant to bend around the student. Personalized learning plans, dual enrollment, early college and work-based learning all came out of the same 2013 law, and the Agency of Education points students to online courses when a class they want is not offered nearby. Computer science sits inside that flexibility rather than on a fixed list: some schools offer it, many do not, and only about three in every hundred high schoolers were enrolled in a CS course in the most recent year counted. For a student in a small rural district, that can mean no coding teacher down the hall at all. This page sets out what the state says, the published numbers, a text-cleaning project on Vermont&rsquo;s own library list, and how live online lessons fill the gap.

Facts last verified 18 October 2026. Teaching is online; no Vermont branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 15 to 20 students per group.

## Four ways to start, wherever the school is

Pick by grade and interest; the free first lesson checks the fit before anything is agreed.

- [Scratch Coding for Kids](/courses/scratch-programming-complete-course) (Grades 1 to 5): Stories, animations and games in Scratch, ideal when the elementary school has no computing class.
- [HTML & CSS for Beginners](/courses/html-css-course-for-beginners-build-real-websites) (Grades 6 to 9): Real websites from scratch: structure, style and publishing, the kind of digital creation the ISTE Standards ask for.
- [Python for Teens](/courses/python-complete-masterclass-teens) (Grades 8 to 12): Python from first program to data projects, including the library-name cleaning task described on this page.
- [AP Computer Science A](/courses/ap-computer-science-a-java-exam-prep-course) (Grades 10 to 12): AP Computer Science A in Java for students whose school does not offer the course or wants extra support.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## How Vermont&rsquo;s graduation model leaves room for coding

From Agency of Education pages read on 17 and 18 October 2026. A search of the agency site for computer science returned no dedicated CS page.

**Vermont flexible pathways and related rules, as the Agency of Education describes them**

| Element | What the agency says |
|---|---|
| The law | The Flexible Pathways Initiative was created by Act 77 of 2013 and sits in statute at 16 V.S.A. § 941 |
| Personalized learning | Act 77 charged secondary educators to create personalized learning environments offering flexible pathways to graduation |
| Dual enrollment | Under 16 V.S.A. § 944, eligible high school students can take up to two college courses |
| Early college | Eligible twelfth graders can enroll full-time for one academic year at an approved college |
| Virtual and blended learning | Listed as a way to reach coursework beyond the traditional classroom |
| Quality rules | The Education Quality Standards, approved in 2013, took effect on April 5, 2014 |

### No CS course mandate

We found no statewide rule that every Vermont student takes computer science. What counts toward a diploma is set locally inside the proficiency and pathway framework.

### Room to personalize

A personalized learning plan is exactly where a student can name coding as a goal, then show evidence of what they built, whether inside or outside school.

### Ask before assuming

Whether any outside class earns credit is the district&rsquo;s decision, never ours. Our classes are not an approved Vermont course provider, and we do not say otherwise.

## Cleaning the names of Vermont&rsquo;s 191 public libraries

Vermont&rsquo;s geodata portal (VCGI) publishes a list of public libraries supplied by the state Department of Libraries on April 3, 2024. The names look simple. They are not, which makes them a perfect first lesson in text cleaning.

**VT Data, Public Libraries: our counts from the VCGI download (191 records, count check matched)**

| What we checked | Our result |
|---|---|
| Records and distinct names | 191 and 191 |
| Counties and towns represented | All 14 counties; 176 town names, with Hartford appearing four times |
| Counties with the most libraries | Windsor 24, Rutland 21, Windham 19 |
| Most common final word of a name | Public 67, Memorial 45, Free 22, Community 10, Town 8 |
| Names that contain the word Free anywhere | 34 |
| Names that still include the word Library | 8, while the rest have it trimmed off |
| Names with a stray space at the start or end | 4 |

### Spot the mess

Most names end before the word Library, a few keep it, and four carry an invisible trailing space. Two names that look identical on screen can fail an equality test in Python for that reason alone.

### Clean it

Students write a small function: strip spaces, drop a final Library, standardize case, then split each name into words. They test it on ten tricky names before running it on all 191.

### Count the words

With clean names, counting final words becomes one line. Students find that Public and Memorial dominate, and that Free shows up somewhere in 34 names, which only a word-level count reveals.

### Our counts, their data

The figures in the table are ours, from one download. VCGI and the State of Vermont state that they make no warranty about the data, and the list reflects the Department of Libraries file of April 2024, so a library opened or renamed since may be missing. Contact details in the file are never printed or used in class.

A fifth grader can do the counting by hand on twenty names and see why a computer helps. A high schooler can go on to match library towns against another state list, where one town name, Hartford, sits behind four separate library records and the next question is how to tell them apart.

## Vermont computer science access and enrollment

Values from Code.org and the College Board, quoted as published. A dash in the source means no data, and we leave it blank.

**Vermont public high schools with foundational CS, Code.org (2025), by school year**

| Year | Share offering CS |
|---|---|
| 2018 to 2019 | 27% |
| 2019 to 2020 | 60% |
| 2020 to 2021 | 64% |
| 2021 to 2022 | 76% |
| 2022 to 2023 | 73.3% |
| 2023 to 2024 | 60%, or 33 of 55 high schools |
| 2024 to 2025 | No Vermont value |

**Enrollment and AP in Vermont**

| Measure | Value | Source |
|---|---|---|
| High schoolers enrolled in CS, 2023 to 2024 | 766 of 24,384, or 3.14% | Code.org (2025); NCES fall 2022 base |
| Enrollment share, 2021 to 2022 and 2022 to 2023 | 3.7% and 3.68% | Code.org (2025) |
| Schools giving any AP exam, 2023 and 2024 | 65 and 69 | College Board |
| Of which public | 53 and 51 | College Board |
| Of which non-public | 12 and 18 | College Board |

Two things stand out. The access line rose steeply after 2018 to 2019 and then fell back to 60%, and with only 55 high schools in the count, a handful of schools adding or dropping a course moves the percentage a long way. Enrollment has stayed between about 3% and 4% in every year reported. Cite these figures as Code.org (2025). 2025 State of AI + CS Education; we print single values only.

## Vermont&rsquo;s ISTE Standards and what they ask of students

The Agency of Education says the State Board adopted the ISTE Standards for student learning, aligned with the Education Quality Standards, to describe what students should know and do with information technology.

### What they are

The ISTE Standards describe how students use technology to learn, create and communicate. They are a technology framework, not a programming course, so a school can meet them without teaching a language.

### Where coding fits

Building a website, a game or a data analysis is one of the most direct ways to show creative and computational use of technology. That is the work our classes are built around.

### Online options

The agency also lists the Vermont Virtual Learning Cooperative, which it says offers over 300 online courses, supports on average 1500 learners a year and works with more than 70 schools and organizations.

**A note on the agency wording** The agency page expands ISTE in its own words. We quote only the name ISTE Standards and the facts above, as published, and make no claim about any provider listed there. We are not connected with the Agency of Education or the cooperative.

## Eastern Time from Burlington to Brattleboro

The IANA time zone database places Vermont in the US eastern group, America/New_York.

### Through October

Vermont is on daylight time, and the clock in India reads nine and a half hours later.

### November 1, 2026

Standard time begins and the gap with India widens by an hour, to ten and a half, until the spring.

### March 14, 2027

Daylight time returns. Lesson times never move on the Vermont clock; we handle the change on our side.

## A Vermont student&rsquo;s path from first program to AP

Grade bands are rough guides. The placement lesson sets the real starting point.

- **Grades 1 to 4: Tinker** Block programs, patterns and characters that move, built and debugged by the child. [Scratch Coding for Kids](/courses/scratch-programming-complete-course), [Coding for Kids](/courses/kids-coding-blocks-masterclass)
- **Grades 5 to 8: Make and publish** Web pages and first Python programs, shared with family and friends. [HTML & CSS for Beginners](/courses/html-css-course-for-beginners-build-real-websites), [Python and AI for Kids](/courses/python-ai-kids-masterclass)
- **Grades 9 to 10: Handle real data** Python in depth, text cleaning, charts and a portfolio piece for a learning plan. [Python for Teens](/courses/python-complete-masterclass-teens), [Data Science for Teens](/courses/data-science-course-for-teens-python-data)
- **Grades 11 to 12: Go further** AP Computer Science A, and AI models trained on data the student has prepared. [AP Computer Science A](/courses/ap-computer-science-a-java-exam-prep-course), [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens)

## An AI tool can clean a list. Can it tell you what it changed?

The library project is a quick test of why students should understand code before handing work to AI.

Give an AI assistant the 191 library names and ask it to tidy them, and it may quietly merge names, drop words or invent a missing Library. The output looks neat. Without a cleaning function of their own and a few test cases, a student has no way of knowing what was altered.

We teach the opposite habit: write the rule, test it, then let AI help with the parts you already understand and can check. Students under 18 use only AI tools whose terms permit their age, and school assignments remain their own.

Flexible pathways reward students who can show what they made and explain how; that starts with code they wrote. The longer argument is in [whether coding is still worth learning](/blog/is-coding-worth-learning-2026).

## A coding teacher for every Vermont town, online

Distance and small enrollments make specialist teachers hard to share in rural Vermont. A live online class does not depend on either.

- **Real-time teaching** Each lesson is live: the teacher watches the student code, asks questions and corrects course as it happens.
- **Fits a learning plan** We use US grade levels and can document projects for a personalized learning plan. Credit decisions belong to the school, and school work stays the student&rsquo;s own.
- **Times** Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.
- **Batches** Groups of fifteen to twenty peers at a similar level, from Vermont and across the US, so a student in a tiny school still has classmates.
- **One to one** Private lessons for a student who wants to move quickly, prepare for AP or build a specific project.
- **First lesson free** A full lesson with a real task and a real teacher, then a suggested course and time. No card is asked for.

**Online from India, with no Vermont site** There is no Modern Age Coders center in Vermont and we claim none. Lessons are taught live online from India, so a computer, working audio and a reliable connection are all that is needed.

## Fees for Vermont families

One clear set of figures for the whole state.

- First class: USD 0. A complete lesson free of charge, followed by advice on level, course and time.
- Group tuition: USD 100 a month. A month of live lessons in a batch of fifteen to twenty learners at the same level.
- Private tuition: USD 150 a month. The same monthly pattern with one teacher for one learner.

Vermont families pay a single rate in US dollars, from the Northeast Kingdom to Bennington. Billing only starts after the free lesson, once a course and time are agreed, and the pricing page explains breaks and missed lessons.

## Vermont coding and AI questions

### Does Vermont require computer science to graduate?

We found no statewide computer science course requirement. Vermont graduation runs through local proficiency requirements and the flexible pathways created by Act 77 of 2013.

### What technology standards does Vermont use?

The Agency of Education says the State Board of Education adopted the ISTE Standards for student learning, aligned with the Education Quality Standards.

### What is Act 77?

Act 77 of 2013 created the Flexible Pathways Initiative, found at 16 V.S.A. § 941. It covers personalized learning plans, dual enrollment, early college, work-based learning and virtual learning.

### How many Vermont high schools offer computer science?

Code.org (2025) counts 33 of 55 Vermont high schools, or 60%, offering foundational computer science in 2023 to 2024.

### How many Vermont students take computer science?

In 2023 to 2024 Code.org reports 766 of 24,384 high school students, or 3.14%, enrolled in a computer science course.

### Can a Vermont student take college courses in high school?

Yes, through dual enrollment. The agency says eligible students can take up to two college courses under 16 V.S.A. § 944, and eligible twelfth graders can attend early college full-time for a year.

### Will your classes earn Vermont school credit?

Not from us. Any credit is the school district's decision. We teach skills and help students build projects they can describe in a learning plan, and graded school work stays their own.

### What times are classes for Vermont students?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. All times are shown in Eastern Time.

### Is there a Vermont classroom?

No. We have no premises in Vermont. Every lesson is taught live and online from India.

### How much do classes cost?

See the fees section on this page for the free first lesson, the monthly group rate and the monthly private rate. You pay nothing until after the free lesson.

## Other reading for Vermont families

Homeschooling families can read about [homeschool computer science credit](/homeschool-computer-science-high-school-credit), and students without a CS teacher at school may like [free coding programs for high school students](/free-coding-programs-for-high-school-students). The [North Carolina page](/coding-and-ai-classes-in-north-carolina) shows a state that took the opposite route and required a CS course.

## Contact

Book the free class on [https://learn.modernagecoders.com/coding-and-ai-classes-in-vermont](https://learn.modernagecoders.com/coding-and-ai-classes-in-vermont#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
