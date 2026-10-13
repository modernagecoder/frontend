---
title: "Choosing Year 11 Computing Subjects | NSW and Victoria"
description: "Choosing Year 11 computing subjects: NSW Software Engineering and Enterprise Computing, VCE Algorithmics and Applied Computing, and how the rules fit together."
canonical: https://learn.modernagecoders.com/choosing-year-11-computing-subjects-australia
source: src/pages/choosing-year-11-computing-subjects-australia.html
---
> In NSW, the senior computing courses are Software Engineering 11-12, centred on programming, and Enterprise Computing 11-12, centred on data and systems; each is 2 units over Year 11 and Year 12. In Victoria, VCE Applied Computing runs across Units 1 to 4 with Data Analytics and Software Development in Year 12, and Algorithmics (HESS) is a Units 3 and 4 study. Choose by interest, then check enrolment rules.

[Home](/) / [Coding classes in Australia](/coding-classes-in-australia) / Choosing computing subjects

Australia · Year 10 into Year 11 · Computing subjects

# Choosing Year 11 computing subjects

Subject selection in Year 10 can feel like a decision about the rest of a student's life. For computing, it is simpler than it looks once you know what each subject actually contains. This guide sets out the senior computing courses in New South Wales and Victoria from the authorities' own pages, explains the enrolment rules that trip students up, and leaves the ATAR guesswork out entirely.

At a glance: NSW programming course: Software Engineering 11-12; NSW data and systems course: Enterprise Computing 11-12; VCE algorithms study: Algorithmics (HESS), Units 3 and 4; VCE computing study: Applied Computing, Units 1 to 4; NSW course size: 2 units, 120 hours a year; Other states: Check your authority directly; We teach: Programming before and during; We never: Advise picking for the ATAR. Rated 4.9 across 547 Google reviews.

## Three courses that make any choice easier

Real programming fluency, the data skills behind the systems courses, and algorithmic thinking.

- [Python from scratch](/courses/python-complete-masterclass-teens): Writing, testing and debugging real programs, so a Year 11 computing course starts from strength rather than from zero.
- [Working with data](/courses/data-science-course-for-teens-python-data): Cleaning and charting data in Python, a head start for Enterprise Computing or VCE Data Analytics.
- [Algorithmic thinking](/courses/problem-solving-dsa-masterclass-teens): Searching, sorting and graph problems reasoned carefully, the territory of VCE Algorithmics and harder programming.

## Two computing courses, both 2 units

NESA's enrolment details for each course, from the NSW Curriculum site, checked on 7 October 2026.

**NSW senior computing courses: enrolment details**

| Course | Year 11 | Year 12 | Size | Year 12 prerequisite |
|---|---|---|---|---|
| Software Engineering 11-12 (2022) | 11345 | 15365 | 2 units, 120 hours each year | Software Engineering Year 11 |
| Enterprise Computing 11-12 (2022) | 11175 | 15175 | 2 units, 120 hours each year | Enterprise Computing Year 11 |

Software Engineering is the programming course. Its Year 11 focus areas are programming fundamentals, the object-oriented paradigm and programming mechatronics; Year 12 covers secure software architecture, programming for the web, software automation and a software engineering project. Our [Software Engineering page](/hsc-software-engineering-help) covers it in full.

Enterprise Computing is the data and systems course. Year 11 covers interactive media and the user experience, networking and social computing, and cybersecurity; Year 12 covers data science, data visualisation, intelligent systems and an enterprise project. See our [Enterprise Computing page](/hsc-enterprise-computing-help).

Neither course lists a prerequisite for Year 11, so a student can start either without having studied computing before, although some programming experience makes Software Engineering far less stressful. Each Year 12 course requires its own Year 11 course.

The two courses do not exclude each other in NESA's lists: each excludes only the Life Skills computing and technology courses. Whether a school can timetable both is a separate, local question, and the school's subject guide is the place to check.

Sources: NSW Curriculum enrolment details for [Software Engineering 11-12](https://curriculum.nsw.edu.au/learning-areas/tas/software-engineering-11-12-2022/overview/course) and [Enterprise Computing 11-12](https://curriculum.nsw.edu.au/learning-areas/tas/enterprise-computing-11-12-2022/overview/course). Checked on 7 October 2026.

## Applied Computing across four units, Algorithmics at the top

The VCE structure differs from NSW. The details below come from VCAA's study design and examination pages, checked on 7 October 2026.

**VCE computing studies and their 2026 examinations**

| Study | Units | Study design accredited from | 2026 VCE exam (times include reading) |
|---|---|---|---|
| Applied Computing: Data Analytics | Units 1 and 2 Applied Computing, then Units 3 and 4 Data Analytics | 2025 | Monday 9 November, 11:45 am to 2:00 pm |
| Applied Computing: Software Development | Units 1 and 2 Applied Computing, then Units 3 and 4 Software Development | 2025 | Friday 13 November, 3:00 pm to 5:15 pm |
| Algorithmics (HESS) | Units 3 and 4 | 2023 | Wednesday 4 November, 11:45 am to 2:00 pm |

Applied Computing gives Victorian students a choice in Year 12 between Data Analytics and Software Development, each with its own school-assessed task and examination. The first is closer in spirit to NSW Enterprise Computing; the second is closer to NSW Software Engineering.

Algorithmics (HESS) is a Units 3 and 4 study about designing and analysing algorithms. It suits students who enjoy the mathematical side of computing, such as graphs, searching and proving that an algorithm is correct and efficient.

The exam dates show how the three studies spread across the 2026 VCE examination period, from Algorithmics on 4 November to Software Development on 13 November. Students taking more than one computing study should plan revision around those gaps.

VCAA's pages are the authority for any rule about combining studies or counting them towards the VCE. A school's VCE coordinator can explain how they work in that school's program.

Sources: VCAA study pages for [Algorithmics (HESS)](https://www.vcaa.vic.edu.au/curriculum/vce-curriculum/vce-study-designs/algorithmics/vce-algorithmics-hess) and [Applied Computing](https://www.vcaa.vic.edu.au/curriculum/vce-curriculum/vce-study-designs/applied-computing/applied-computing); [VCAA 2026 VCE examination timetable](https://www.vcaa.vic.edu.au/administration/Key-dates/Pages/VCE-exam-timetable.aspx). Checked on 7 October 2026.

## Checking a subject list for exclusions

NESA publishes, for every course, a list of other courses it excludes. Checking a candidate subject list against those lists is a neat little programming problem, and it catches mistakes before enrolment.

A worked example, using NESA's published exclusions and an invented subject list. A Year 10 student in NSW drafts this list: Mathematics Standard Year 11, Mathematics Advanced Year 11, Software Engineering Year 11, Enterprise Computing Year 11 and Computing Technology Life Skills Year 11. A program checks every pair against the exclusion lists.

**Pairs flagged by the exclusion check (NESA exclusion lists)**

| Pair | Excluded? | Which rule |
|---|---|---|
| Mathematics Standard and Mathematics Advanced | Yes | Each lists the other as an exclusion |
| Software Engineering and Computing Technology Life Skills | Yes | Software Engineering excludes course 16623 |
| Enterprise Computing and Computing Technology Life Skills | Yes | Enterprise Computing excludes course 16623 |
| Software Engineering and Enterprise Computing | No | Neither lists the other |
| Mathematics Advanced and Software Engineering | No | Neither lists the other |

With five subjects there are ten possible pairs, and three of them clash. The fix is a choice, not a calculation: keep one of the two mathematics courses, and drop the Life Skills course if the student is enrolling in either computing course.

The check itself is a few lines of Python: store each course's exclusion list in a dictionary, loop over every pair of chosen courses, and report any pair where one appears in the other's list. Students who write it learn about pairs, dictionaries and symmetry in one go.

An exclusion check does not say whether a combination is wise or whether a school can timetable it. It only catches combinations NESA does not allow, which is exactly why it is useful: it removes impossible options so the real conversation can be about interests and goals.

Victoria has its own rules for combining studies, set by VCAA. The same programming idea works there too, with VCAA's rules as the data.

## How to decide, honestly

Our suggestions are about learning, not about ranks. Subject decisions belong with the student, the family and the school.

**Questions that sort out most computing subject choices**

| Question | Points towards |
|---|---|
| Do you enjoy writing programs and fixing them? | NSW Software Engineering, or VCE Software Development |
| Do you enjoy asking questions of data? | NSW Enterprise Computing, or VCE Data Analytics |
| Do you enjoy puzzles about efficient algorithms? | VCE Algorithmics (HESS), or harder programming alongside any course |
| Do you want computing without a senior course? | Coding outside school, at your own pace |

We deliberately do not say which subject is "good for the ATAR". The admissions centres state that scaling is designed so students are neither advantaged nor disadvantaged by their pattern of study, and our [ATAR page](/atar-explained-for-coding-students) explains that in their words. Choose computing because you want to learn it.

Whatever the choice, the most useful preparation in Year 10 is the same: write real programs, read other people's code, and get comfortable with being stuck for a while before a bug gives way. That is what we teach, in any state.

## Four things to do in Year 10

Preparation that helps whichever computing subject a student ends up taking.

**Year 10 preparation for senior computing**

| Step | What to do | The sign it is working |
|---|---|---|
| 1 | Learn one language properly | Writes a 100-line program without copying |
| 2 | Read the subject guides | Can name the focus areas of each option |
| 3 | Try a small data project | Has cleaned and charted one real data set |
| 4 | Check the rules | Has run an exclusion check on the draft list |

### If no computing subject fits

Some schools do not offer every course, and some timetables do not allow it. Learning to code outside school keeps the door open for university computing courses, many of which teach programming from the start.
Competitions are another route; the [competitions calendar](/australian-coding-maths-and-ai-competitions-calendar) lists coding contests for secondary students.

### Alongside mathematics

Computing and mathematics support each other. NSW students choosing between mathematics courses can read our [Year 11 mathematics page](/preliminary-hsc-maths-year-11-help).
Victorian students heading into Methods can start with our [Year 10 Methods preparation page](/year-10-maths-methods-preparation).

## Nine courses for future computing students

Grouped by the kind of senior subject they prepare for. Each opens a full syllabus.

### For programming courses

Software Engineering, Software Development

- [Python for teens](/courses/python-complete-masterclass-teens): A complete first language, with testing from the start.
- [Java for teens](/courses/java-programming-masterclass-for-teens): Objects and classes in a strongly typed language.
- [Full stack web development](/courses/full-stack-web-development-teens-masterclass): Programming for the web, front end to back end.

### For data and systems courses

Enterprise Computing, Data Analytics

- [Data science for teens](/courses/data-science-course-for-teens-python-data): Analysis and charts with Python.
- [MySQL for teens](/courses/mysql-mastery-for-teens): Databases and SQL queries.
- [Cybersecurity for teens](/courses/cybersecurity-course-for-teens-ethical-defensive): Security thinking for systems that hold data.

### For algorithm-heavy study

Algorithmics and beyond

- [Problem solving for teens](/courses/problem-solving-dsa-masterclass-teens): Data structures and algorithms, reasoned carefully.
- [Competitive programming](/courses/competitive-programming-for-teens-course): Efficient solutions under time limits.
- [AI and machine learning](/courses/ai-ml-masterclass-teens): Models built and evaluated in Python.

## Weekly lessons for students in any state

Our tutors are based in India. Sydney and Melbourne sit five and a half hours ahead of India time during daylight saving and four and a half hours ahead in winter; Perth is two and a half hours ahead all year. After-school hours across Australia therefore fall in the Indian working day.

- **After school** A weekly lesson through Year 10 and Year 11.
- **Weekends** Longer project sessions.
- **Holidays** Short intensives before a new course starts.

- **Programs, not slides** Students write and run code in every lesson.
- **Any state** We prepare students for whichever course their school offers.
- **No ATAR talk** Choices are about interests; ranks are left to the admissions centres.
- **Groups of fifteen to twenty** Students at one level, each sharing their work.
- **One-to-one option** Private lessons for a student with a specific aim.
- **Honest throughout** We promise effort and clarity, never results.

## Fees

Billed monthly in US dollars, at one rate for every family outside India. Free to join, and you only pay for the current month.

- Free first class: USD 0. A real programming lesson. An honest chat about options. No card required.
- Group batch: USD 100 a month. Fifteen to twenty students at one level. The same tutor each week. Code reviewed together. A certificate at the end.
- One to one: USD 150 a month. A personal tutor. Shaped around your goals. Flexible timing.

## What Year 10 families ask us

### What computing subjects can NSW students take in Year 11?

The NSW Board-developed computing courses are Software Engineering 11-12 and Enterprise Computing 11-12. Each is a 2-unit course of 120 hours in Year 11 and again in Year 12.

### What is the difference between Software Engineering and Enterprise Computing?

Software Engineering is centred on programming: fundamentals, objects, mechatronics, web, security, automation and a software project. Enterprise Computing is centred on data and systems: user experience, networks, cybersecurity, data science, visualisation, intelligent systems and an enterprise project.

### Can I take both NSW computing courses?

NESA's exclusion lists do not stop it: each course excludes only the Life Skills computing and technology courses. Whether your school can timetable both is a question for the school.

### Do I need to have studied computing before Year 11?

NESA lists no prerequisite for Year 11 Software Engineering or Year 11 Enterprise Computing. Some programming experience still makes the courses much easier.

### What computing studies are in the VCE?

VCE Applied Computing covers Units 1 to 4, with Data Analytics and Software Development as the Units 3 and 4 options, and Algorithmics (HESS) is a Units 3 and 4 study.

### When are the 2026 VCE computing exams?

From the VCAA timetable: Algorithmics (HESS) on Wednesday 4 November, Applied Computing: Data Analytics on Monday 9 November, and Applied Computing: Software Development on Friday 13 November 2026.

### What is a subject exclusion?

A rule that two courses cannot both be taken. NESA lists each course's exclusions; for example, Year 11 Mathematics Standard and Year 11 Mathematics Advanced exclude each other.

### Which computing subject is good for my ATAR?

We do not advise on that. UAC states scaling is designed so students are neither advantaged nor disadvantaged by their choice of courses. Choose the subject you want to learn.

### What about Queensland, WA, SA, Tasmania, the ACT and the NT?

Each has its own senior secondary authority and subjects. We could not read all of their pages for this guide, so please check your state's authority and your school's subject guide.

### How can I prepare in Year 10?

Learn one programming language properly, try a small data project, read your school's subject guide, and check your draft subject list against the published rules.

## Read more before choosing

- [HSC Software Engineering](/hsc-software-engineering-help): The NSW programming course in full.
- [HSC Enterprise Computing](/hsc-enterprise-computing-help): The NSW data and systems course.
- [The ATAR explained](/atar-explained-for-coding-students): Ranks and scaling, from the sources.
- [Coding from Year 7](/coding-for-year-7-australia): Where programming starts at secondary school.
- [Coding classes in Australia](/coding-classes-in-australia): Every Australian page we have.
- [How we teach](/how-we-teach): Our method, step by step.

## Contact

Book the free first class at [https://learn.modernagecoders.com/choosing-year-11-computing-subjects-australia](https://learn.modernagecoders.com/choosing-year-11-computing-subjects-australia#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
