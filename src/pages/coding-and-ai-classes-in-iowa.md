---
title: "Coding and AI Classes in Iowa | Live Online, Grades K to 12"
description: "Coding and AI classes for Iowa students, live online: what House File 2629 makes schools offer, the CSTA standards Iowa adopted, and a Python trail data project."
canonical: https://learn.modernagecoders.com/coding-and-ai-classes-in-iowa
source: src/pages/coding-and-ai-classes-in-iowa.html
---
> No. House File 2629, signed on June 29, 2020, makes every Iowa district and accredited nonpublic school offer computer science in elementary, middle and high school, but the Iowa Department of Education calls it an offer-and-teach requirement, not a graduation requirement. Modern Age Coders teaches Iowa students live online, from Scratch in second grade to Python data projects and AP Computer Science.

[Home](/) / [United States](/coding-classes-in-united-states) / Iowa

Iowa, United States / Live online

# Coding and AI classes in Iowa

**Does Iowa require computer science to graduate from high school?** No. House File 2629, signed on June 29, 2020, makes every Iowa district and accredited nonpublic school offer computer science in elementary, middle and high school, but the Iowa Department of Education calls it an offer-and-teach requirement, not a graduation requirement. Modern Age Coders teaches Iowa students live online, from Scratch in second grade to Python data projects and AP Computer Science.

Iowa wrote a computer science law that reaches elementary, middle and high school, and then stopped one step short of making students take the course. Schools have to put computer science on the timetable at every level; whether a particular student ever sits in that class is left to the student and the family. This page sets out what House File 2629 asks of schools, the CSTA standards Iowa adopted in 2018 and is now rewriting to include data science and artificial intelligence, the published counts of who offers and who enrolls, and a Python project built on the Iowa Department of Transportation&rsquo;s own statewide trail inventory.

Facts last verified 18 October 2026. Teaching is online; no Iowa branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 15 to 20 students per group.

## Where an Iowa student usually begins

Four starting points, sorted by grade. A short free lesson confirms the right one before anything is booked.

- [Scratch Coding for Kids](/courses/scratch-programming-complete-course) (Grades 2 to 5): Animations and games in blocks, the same Level 1A and 1B ideas Iowa elementary schools now teach in at least one grade.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass) (Grades 6 to 8): A first typed language for the seventh or eighth grade year in which every Iowa middle school must teach computer science.
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data) (Grades 9 to 12): Python, tables and charts on real public data, the kind of work Iowa&rsquo;s coming data science standards point toward.
- [AP Computer Science Principles](/courses/ap-computer-science-principles-exam-prep-course) (Grades 10 to 12): The AP course and exam for students whose high school offers only the one required semester, or none that fits their timetable.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Iowa&rsquo;s rule: every school offers it, no student is forced to take it

The Iowa Department of Education summarized the law in guidance dated January 24, 2022. These are its requirements, read on 18 October 2026.

**What House File 2629 requires of Iowa districts and accredited nonpublic schools, per the Department&rsquo;s guidance**

| Level | What must happen | Start date |
|---|---|---|
| Whole district | Develop and implement a standards-aligned K-12 computer science plan | July 1, 2022 |
| Grades 1 to 6 | High-quality computer science instruction in at least one grade level | July 1, 2023 |
| Grades 7 and 8 | High-quality computer science instruction in seventh or eighth grade | July 1, 2023 |
| Grades 9 to 12 | At least one high-quality one-semester course, offered and taught | July 1, 2022 |

The law itself dates from June 29, 2020, when the governor signed House File 2629. The guidance then answers fourteen practical questions, and question ten is the one families ask most. Do all high school students have to take a computer science class? The Department&rsquo;s answer is a flat no: &ldquo;This is an offer-and-teach requirement for districts and accredited nonpublic schools, not a graduation requirement.&rdquo;

### How long is a semester?

The required high school course is one-half unit. The guidance defines that as at least 100 minutes per week for 18 weeks, or the equivalent of 60 hours, so a short trimester course does not qualify.

### What cannot count

A concurrent enrollment college course may not fill the half unit, and a high school may not scatter the standards across other subjects instead of running a real computer science course.

### Who may teach it

According to the guidance, a computer science endorsement is not required at any grade level; a teacher needs only an endorsement for the grade being taught. Training quality therefore varies from school to school.

### What that means at home

Every Iowa student will meet some computer science before ninth grade, because elementary and middle schools must teach it. After that the subject becomes optional. A tenth grader who skips the one-semester course can graduate without writing another line of code, which is why some families look for classes outside school.

## What are Iowa&rsquo;s trails made of? A crosstab on state open data

The Iowa Department of Transportation publishes its recreational trail inventory under a Creative Commons Attribution 4.0 licence. Students pull every record with Python and count them by two columns at once.

**Iowa DOT trail records by facility type and surface (our crosstab of the 3,219 records downloaded 17 October 2026; selected columns)**

| Facility type | Concrete | Asphalt/Concrete | Asphalt | Granular | Crushed Limestone | Unknown |
|---|---|---|---|---|---|---|
| Path | 634 | 587 | 509 | 122 | 69 | 56 |
| Widened Sidewalk | 391 | 260 | 104 | 2 | 0 | 16 |
| Shoulder | 20 | 45 | 33 | 0 | 0 | 141 |
| Lane | 43 | 118 | 34 | 2 | 0 | 0 |

### Step 1: get all of it

The service hands back at most 2,000 records per request. A count query said 3,219, so students page through with an offset, collect 2,000 and then 1,219, and check that every OBJECTID appears once before trusting any total.

### Step 2: count by two keys

A crosstab counts pairs. Students loop over the records and tally each combination of FAC_DESC and SURF_DESC, first with a dictionary keyed by a tuple, then with pandas.crosstab, and compare the two answers.

### Step 3: read the cells

Every one of the 69 Crushed Limestone records is a path, never a lane or a sidewalk. That pattern only appears when two columns are read together, which is the whole point of a two-way table.

### The cell that teaches the most

Of 240 shoulder records, 141 have the surface Unknown. A careless reader concludes that Iowa road shoulders have mystery surfaces. A careful one says only that the inventory does not record them, and asks why. These counts are ours, from one download; the Iowa DOT does not publish this table, and its data can change after the date we read it.

A second exercise adds up LENGTH_MILE by facility type. Our sum for paths is 2,281.3 miles and for all records 3,607.5 miles, but a sum of digitized segments is not an official trail mileage, so students write that caveat beside the number before they chart it. Another quirk worth spotting: 192 records carry no county name, so a county ranking built from this file would quietly leave them out.

## Iowa teaches the CSTA standards, and is now writing data science and AI standards

Iowa did not write its own computer science standards from scratch. It adopted the national ones, and a state committee is reviewing them during 2026.

**How Iowa&rsquo;s computer science standards are grouped, with one standard from each level (Iowa Computer Science Standards document, wording shortened by us)**

| CSTA level | Grades | One standard at that level |
|---|---|---|
| Level 1A | Grades K-2 | 1A-DA-05: store, copy, search, retrieve, modify and delete information on a computing device |
| Level 1B | Grades 3-5 | 1B-NI-04: model how information is broken into packets, sent across networks and reassembled |
| Level 2 | Grades 6-8 | 2-DA-07: represent data using multiple encoding schemes |
| Level 3A | Grades 9-10 | 3A-DA-11: create interactive data visualizations that help others understand real-world phenomena |
| Level 3B | Grades 11-12 | 3B-AP-08: describe how artificial intelligence drives many software and physical systems |

The Department says the standards were approved and adopted by the Iowa State Board of Education in June 2018 on an Iowa team&rsquo;s recommendation, and that they are the CSTA K-12 Computer Science Standards developed by the Computer Science Teachers Association. Schools must align instruction to them; the guidance notes that the law sets no minimum number of standards a course has to cover.

### The 2026 rewrite

In November 2025 the Department invited applications for a committee to review the computer science standards and establish standards for data science and artificial intelligence. It said the committee would begin meeting in January 2026, that draft standards would go out for public comment, and that a final proposal would go to the State Board. Until a vote, the 2018 standards remain the ones schools follow.

## Most Iowa high schools now offer computer science. Far fewer students take it

Two national datasets carry Iowa rows: Code.org counts schools and enrolled students, and the College Board counts schools giving AP exams. Percentages we worked out ourselves are marked.

**Share of Iowa public high schools offering computer science (Code.org, 2025, Access Percent over the Years)**

| School year | Offering CS |
|---|---|
| 2018 to 2019 | 58% |
| 2020 to 2021 | 64% |
| 2022 to 2023 | 84% |
| 2023 to 2024 | 84.4% |
| 2024 to 2025 | 86.2%, 306 of 355 high schools |

**Enrollment and AP in Iowa**

| Measure | Value | Where it comes from |
|---|---|---|
| Iowa teens in a CS class during 2024 to 2025 | 8,124 of 156,342, which we work out as 5.20% | Code.org (2025), Most Recent Participation Data; the student total is from NCES, fall 2022 |
| Iowa schools with AP exams, 2023 | 190 | College Board, School Report of AP Exams by State |
| Iowa schools with AP exams, 2024 | 198 | College Board, School Report of AP Exams by State |

Read side by side, those rows show the offer-and-teach model at work. The share of high schools offering a course climbed from 58% to 86.2% in six years, roughly the period in which the law took effect, while about one high school student in twenty was enrolled in computer science in 2024 to 2025. Code.org gives the state education agency as the source of the access count. For citation, Code.org asks for: Code.org (2025). 2025 State of AI + CS Education. Only individual Iowa values appear on this page; the full sheet is theirs to publish.

## One time zone for the whole state: Central Time

The IANA time zone database lists Iowa, whole, in US central time, which it represents with the America/Chicago zone.

### Pick your slot

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

### The gap to India

Our teachers work on India time, which never shifts. By our arithmetic India runs 10 hours 30 minutes ahead of Iowa in summer and 11 hours 30 minutes ahead in winter.

### This school year

Iowa clocks fall back on November 1, 2026 and spring forward on March 14, 2027, so every class time we send is written in Central Time, never as a bare offset.

**Code that survives November** Students who build a homework reminder app learn to store times with the America/Chicago zone from the tz database rather than a fixed minus six or minus five. The test is simple: schedule an event across November 1, 2026 and check that it still fires at the right local hour.

## Four rungs that line up with Iowa&rsquo;s CSTA levels

Grades are a guide; a short placement task settles where a student actually starts.

- **Grades K to 5: Blocks and patterns** Sequences, loops and simple data in Scratch, the Level 1A and 1B ideas, finished as games a child can show off. [Scratch Coding for Kids](/courses/scratch-programming-complete-course), [Coding for Kids](/courses/kids-coding-blocks-masterclass)
- **Grades 6 to 8: Typed code arrives** Python and the web for Level 2, timed to support the middle school year in which Iowa schools must teach computer science. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [JavaScript for Teens](/courses/javascript-course-for-teens-beginners-interactive-web)
- **Grades 9 to 10: Beyond one semester** Data tables, functions and larger programs, for students whose school offers one course and who want a second year of depth. [Python for Teens](/courses/python-complete-masterclass-teens), [Data Science for Teens](/courses/data-science-course-for-teens-python-data)
- **Grades 11 to 12: AP and machine learning** AP Computer Science Principles or A, then models trained and tested on data the student has cleaned. [AP Computer Science A](/courses/ap-computer-science-a-java-exam-prep-course), [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens)

## Iowa wants AI standards. Why still learn to code?

Because the state&rsquo;s own plan puts data science beside AI, and both start with knowing what a table really says.

A chatbot asked about Iowa trails might announce that shoulders have unknown surfaces. The crosstab shows something different: the inventory leaves that field blank for 141 shoulder records. Only a student who has counted the rows can tell a property of the world from a gap in the data.

That distinction is the backbone of data science and of trustworthy AI, which is why Iowa is drafting standards for both. Students who write their own counting code can use AI assistants to speed up the boring parts and still catch the moment a confident answer rests on missing values.

Whatever the new Iowa standards say when the State Board votes, the habit they will reward is checking the data before believing the summary. The longer argument is in [whether coding still pays off in an AI decade](/blog/is-coding-worth-learning-2026).

## Live classes for Iowa homes, from Sioux City to Davenport

A rural district with one computer science teacher and a city school with five get the same class online.

- **No commute** Class happens at the kitchen table or the bedroom desk, which matters in a state where the nearest coding club can be a county away.
- **Iowa school calendar** Teachers plan around US grades and Iowa school terms, and can tie projects to the semester course a student is taking. Graded school work stays the student&rsquo;s own.
- **Placement first** The first session is free and practical: the student builds something small, and we suggest a level, a course and a time afterwards. No card is requested.
- **Small batches by level** Groups of fifteen to twenty learners at a similar stage, drawn from Iowa and other states.
- **Private option** One teacher, one student, for anyone aiming at AP, a competition or simply a faster pace.
- **Central Time always** Every confirmation names the time in Central Time, so nobody has to convert.

**Taught from India, not from Iowa** Modern Age Coders has no office or classroom in Iowa and does not claim one. Lessons are live and online, taught from India. A student needs a computer, a headset or speakers and a stable connection.

## Fees for Iowa families

Three numbers, the same for every family in the state.

- First class: USD 0. One complete lesson at no cost, followed by a suggested course, level and class time.
- Group tuition: USD 100 a month. A month of live classes in a level-matched batch of fifteen to twenty learners.
- Private tuition: USD 150 a month. A month of live classes with a teacher working only with your student.

All families outside India are billed in US dollars at one rate, so Ames pays what Dubuque pays. Nothing is charged until the free lesson is done and you have agreed a course and time; the pricing page covers holidays and missed sessions.

## Questions Iowa families ask

### Must Iowa high school students take computer science to graduate?

No. The Iowa Department of Education describes House File 2629 as an offer-and-teach requirement for districts and accredited nonpublic schools, not a graduation requirement.

### What does House File 2629 make Iowa schools do?

Adopt a K-12 computer science plan by July 1, 2022, offer a one-semester high school course from July 1, 2022, and teach computer science in one elementary grade and in seventh or eighth grade from July 1, 2023.

### Which standards does Iowa use for computer science?

The CSTA K-12 Computer Science Standards, which the Iowa State Board of Education adopted in June 2018. They run from Level 1A in grades K-2 to Level 3B in grades 11-12.

### Is Iowa adding AI to its standards?

The Department began a review in 2026 to update the computer science standards and establish standards for data science and artificial intelligence. Any change still needs public comment and a State Board vote.

### What share of Iowa high schools teach computer science?

Code.org (2025) reports 306 of 355 Iowa public high schools offering it in 2024 to 2025, or 86.2%. In the same year 8,124 high school students were enrolled.

### Does a college course count toward the Iowa requirement?

Not for the required half unit. The guidance says a concurrent enrollment course may not be used to meet it, although it can sit alongside it.

### Can your lessons stand in for the school course?

No. Only a school course meets the Iowa requirement. What we add is extra practice, bigger projects and AP coaching, while any graded school assignment remains the student's own work.

### When are classes held for Iowa students?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are confirmed in Central Time.

### Where are your teachers based?

In India. Modern Age Coders runs no Iowa location; every lesson is live online, so a computer, sound and a steady connection are all a student needs.

### Where can I find what classes cost?

Scroll to the fees panel: it shows a no-cost opening lesson, a monthly group rate and a monthly private rate. Billing begins only after that opening lesson.

## More reading for Iowa students and parents

Middle schoolers can browse [coding classes for middle school students](/coding-classes-for-middle-school-students), and high schoolers can compare [AP Computer Science Principles coaching](/ap-computer-science-principles-online-coaching). Builders looking for a goal can read the [Presidential AI Challenge guide](/presidential-ai-challenge-guide), and the [United States hub](/coding-classes-in-united-states) lists every US guide.

## Contact

Book the free class on [https://learn.modernagecoders.com/coding-and-ai-classes-in-iowa](https://learn.modernagecoders.com/coding-and-ai-classes-in-iowa#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
