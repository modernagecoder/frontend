---
title: "WJEC GCSE Computer Science Help, Wales | Unit 1 and Unit 2"
description: "WJEC GCSE Computer Science help in Wales: the Unit 2 exam gives you a working Tkinter program with no comments to extend. How to practise, and Unit 1 too."
canonical: https://learn.modernagecoders.com/wjec-gcse-computer-science-help-wales
source: src/pages/wjec-gcse-computer-science-help-wales.html
---
> WJEC GCSE Computer Science help in Wales: the Unit 2 exam gives you a working Tkinter program with no comments to extend. How to practise, and Unit 1 too.

In short

WJEC's Made-for-Wales GCSE Computer Science, first taught in September 2025, has two units of 80 marks each, both sat on screen. Unit 1, Understanding Computer Science, is a 1 hour 30 minute digital exam first sat in summer 2026. Unit 2, Computer Programming, is a two-hour on-screen exam built on a scenario released in Year 10, first sat in summer 2027. In that exam candidates receive a working, unannotated Python program written by WJEC, using the Tkinter library, and must annotate it, add and amend features, design in pseudo-code rather than Python or flowcharts, test with typical, extreme and erroneous data, refine it and evaluate it, all in the version of IDLE the brief names, with no internet and no notes. Modern Age Coders practises exactly that on programs of our own, reading, commenting and extending unfamiliar Tkinter code, and teaches the eight areas of Unit 1. We never work on a candidate's pre-release brief. The first lesson is free, then USD 100 a month in a group or USD 150 one to one.

Start here

## Three courses for the two WJEC units

Python with Tkinter for Unit 2, the shared theory for Unit 1, and algorithms for both. Each card opens its syllabus.

[![Python for Teens course thumbnail](/images/python-teens.webp)  WJ / 01 Python for Teens Includes a module on desktop apps with Tkinter, covering windows, widgets and layouts, the library the Unit 2 program is written in. Open the syllabus →](/courses/python-complete-masterclass-teens)[![GCSE Computer Science course thumbnail](/images/gcse-computer-science.webp)  WJ / 02 GCSE Computer Science Architecture, data representation, networks, security and operating systems: the theory every GCSE board shares, mapped here to WJEC's eight Unit 1 areas. Open the syllabus →](/courses/gcse-computer-science-course)[![Problem Solving for Teens course thumbnail](/images/problem-solving-teens.webp)  WJ / 03 Problem Solving and Algorithms Tracing, decomposition and standard algorithms, which Unit 1 asks candidates to create and interpret and Unit 2 asks them to design. Open the syllabus →](/courses/problem-solving-dsa-masterclass-teens)

The Unit 2 program

## The program in the exam is WJEC's, not yours

From WJEC's Guidance for Teaching for Unit 2 and the Unit 2 sample assessment materials, version 3, July 2025.

### What a candidate receives

A working Python program based on the scenario from the pre-release brief, written by WJEC in the standard IDLE editor, with a graphical interface built in Tkinter, and without annotation.

A clean copy of the pre-release materials. Candidates are "not permitted to take any prompts or notes into the examination", so the year's own work stays outside.

### What they must do with it

Run it and explain what it does, find particular kinds of code inside it, write the comments the original programmer left out, and design new features in pseudo-code.

Then build those features into the file, test them with planned data, refine the program when the requirements change, and evaluate the result.

| Question | What it asks, set in a payroll program for a fictional firm | Marks |
| --- | --- | --- |
| 1. Running it | Find the login error message and the valid login, describe what a blank username produces, name the function that runs first, complete a pay calculation and explain why a currency symbol left in the input breaks it | 8 |
| 2. Data modelling | Point to lines in the file that show given kinds of code | 3 |
| 3. Annotation | Find four uncommented features, such as a window title, a back button, a fixed-width text routine and an error pop-up, and comment each one | 8 |
| 4. Design | Pseudo-code for a surname check that rejects digits, and a layout for a new data-entry window | 11 |
| 5. Implementation | Build that window in Tkinter inside the file: four labelled entry boxes, a Save button that writes to a file, a button back to the main menu, all annotated | 23 |
| 6. Testing | Typical, extreme and erroneous test data for the login, the outcomes explained, and a small fix using upper or lower case handling | 8 |
| 7. Refinement | Add an entry box and a check against the legal limit of 48 hours a week, with an average worked out and shown | 8 |
| 8. Refinement testing | Judge three results against the assumption behind them, such as four weeks to a month | 5 |
| 9. Evaluation | How far the final program meets the requirements and what could still improve, marked in bands | 6 |

Read the marks down the right-hand column. The single largest question, 23 of the 80 marks, is building a new Tkinter window inside code the candidate did not write, and another 8 go to commenting that code. A student who can only program on a blank page meets Unit 2 unprepared, however strong they are.

Two rules on the design question catch candidates out. The sample mark scheme says of pseudo-code that "flowcharts are not accepted", and WJEC's guidance says learners "must refrain from using any Python source code in its place". Design is marked as design, in the pseudo-code conventions the specification sets out.

Source: WJEC GCSE Computer Science Guidance for Teaching, Unit 2, and the Unit 2 Sample Assessment Materials, version 3, both linked from the [WJEC GCSE Computer Science page](https://www.wjec.co.uk/qualifications/gcse-computer-science-teaching-from-2025/). The table paraphrases the sample questions; live papers use a new scenario each year.

IDLE and Tkinter

## The tools are named, and the room has no internet

Schools may teach programming in any editor they like. For the Unit 2 exam itself, WJEC fixes the environment in writing.

| Area | The rule |
| --- | --- |
| Editor | The Python IDLE version named in the pre-release brief. Schools may teach in any editor, but the exam uses that IDLE version |
| Language | Python 3, matching the version on the brief |
| Interfaces | Tkinter, the library the exam materials use for windows, buttons and other graphical elements |
| Design | Pseudo-code only: no Python in its place, and no flowcharts |
| Environment | No internet, shared drives, virtual learning environments or email during the exam |
| Practice | WJEC's on-screen system is open through the year for practice papers, so the software is familiar before the day |

### Tkinter in five parts

The guidance names windows, frames, widgets, buttons and geometry managers, and the three ways of placing widgets: pack, grid and place. All of it should feel routine by the spring of Year 11.

### Seven validation checks

Presence, range, length and format checks, lookup tables, check digits and double entry. Candidates design them in pseudo-code and must read and adjust existing ones in the program.

### Three kinds of test data

Typical, extreme and erroneous, chosen for a specific routine and then explained. The sample paper gives more marks to a developed explanation than to a bare result.

IDLE is a plain editor. Students used to an environment that completes their code, suggests fixes or chats back will find it quiet, and the time to get used to that is months before the exam rather than the morning of it. We teach in IDLE for Unit 2 work for that reason.

A curiosity across the border: Scotland's Advanced Higher project now forbids Tkinter, because Qualifications Scotland says tools like it stop candidates showing the skills being assessed. Wales builds its GCSE exam on it. Neither is wrong; they are testing different things, and [the Advanced Higher page](/advanced-higher-computing-science-project-help) explains the Scottish reasoning.

Source: WJEC Guidance for Teaching, Unit 2, for the editor, library, pseudo-code, validation and Tkinter lists; Appendix B of the Unit 2 sample materials for the exam environment; Appendix A for practice on the on-screen system.

Unit 1

## Unit 1: eight areas, on screen, sat first

Understanding Computer Science: 1 hour 30 minutes, 80 marks, half the qualification. First sat in summer 2026.

| Area | What it takes in |
| --- | --- |
| 1.1 Computer architecture | Components, peripheral devices and storage |
| 1.2 How systems are structured and function | Data types with their representation, storage and compression; data and file structures; automated systems |
| 1.3 How systems communicate | Networks and infrastructure; cybersecurity and personal privacy |
| 1.4 Algorithms | Creating and interpreting algorithms |
| 1.5 Software | Principles of programming, the software development life cycle, program construction |
| 1.6 Logical operations | Logical operators |
| 1.7 Operating systems | What an operating system does and how |
| 1.8 Systems development life cycle | How a system is planned, built, tested and maintained |

The paper mixes question types: objective responses, short answers and extended answers, all typed. The qualification is unitised, each unit entered separately and neither tiered, and WJEC suggests taking Unit 2 in the final year so that it can draw on what Unit 1 has built. In practice that makes Unit 1 the theory a candidate needs in place before the programming exam, not a separate subject.

### Where Unit 1 feeds Unit 2

Data types, file structures and validation turn up again as code in the Unit 2 program. Authentication appears in both: as a concept in Unit 1, as a login routine to test in Unit 2.

The software development life cycle in Unit 1 is the shape of Unit 2's questions: investigate, design, implement, test, refine, evaluate.

### Typing, not writing

Extended answers are typed under time pressure. A student who writes clearly by hand but types slowly loses time on every long answer, and that is fixable with practice.

We set typed answers from the first lesson for exactly that reason.

The old GCSE, and our limits

## Still on the old GCSE? The last resit is January 2027

WJEC's earlier Computer Science GCSE, first awarded in 2019, is closing.

|   | Earlier GCSE | Made-for-Wales GCSE |
| --- | --- | --- |
| First award | Summer 2019 | Summer 2027 |
| Units | Written Unit 1, on-screen Unit 2, and a 20-hour non-exam Unit 3 | Digital Unit 1 and on-screen Unit 2, no non-exam unit |
| Status | "Summer 2026 will be the final full assessment opportunity for this qualification." | Taught from September 2025 |
| Next sitting | A January 2027 resit for the examinations, "subject to demand" | Unit 1 each summer; Unit 2 from summer 2027 |

From September 2025 WJEC stopped Year 10 entries to the earlier GCSE, so the resit only concerns students who sat it in 2026 and want another attempt at an exam. A resitter should confirm with the school that the January sitting is going ahead before planning around it. We teach both.

### Where we stop

We never see or work on a candidate's pre-release brief or their own solution to it. The brief is the school's to use, and the whole design depends on candidates meeting the exam program with only what they have learned.

Our practice uses programs we write ourselves, in other settings, with the same kind of structure: working, Tkinter-based and deliberately uncommented.

### Language

WJEC publishes its qualifications in Welsh as well as English. Our lessons are in English only, so a Welsh-medium candidate is welcome but will learn the technical terms in English.

The [Wales page](/coding-and-ai-classes-in-wales) sets out the wider picture, from primary school to sixth form.

WJEC also runs a separate GCSE Digital Technology, a different subject with a different focus; [the Digital Technology page](/wjec-gcse-digital-technology-help-wales) explains how the two differ, and [the page on declaring AI](/understand-the-code-dont-copy-paste-uk) covers AI tools near any assessed work.

Progression

## Four rungs from Year 9 to the exam

Placement depends on what a student can do without help, whatever year they are in.

| Rung | When | What should be true |
| --- | --- | --- |
| 1. Typed Python | Year 9 or early Year 10 | Variables, selection, loops, lists and functions written unaided, in IDLE |
| 2. Files and data | Year 10 | Reading and writing files, lists, tuples and dictionaries, string handling and slicing |
| 3. Tkinter | Late Year 10 | Windows, frames, labels, entry boxes and buttons placed with pack, grid or place |
| 4. Unfamiliar code | Year 11 | Opening a working program, explaining it, commenting it and extending it within the time allowed |

### Rung four is the rare one

Plenty of students can write their own programs. Far fewer can read a stranger's under time pressure, and nothing in ordinary coursework practises it.

The general order of topics runs down the [coding roadmap](/coding-roadmap).

### Unit 1 runs alongside

The theory is taught in parallel with the programming, in short weekly blocks, so the summer Unit 1 exam never becomes a cram.

Lessons thin out near each exam and pick up again afterwards.

The catalogue

## Nine courses for WJEC candidates

Grouped by the unit they serve. The free lesson settles where a student begins.

I

### Python for Unit 2

Programs, files and Tkinter

UK / WJ1 / 01

#### Python for teens

From first programs to Tkinter desktop apps, the whole Unit 2 toolkit.

[Open the syllabus](/courses/python-complete-masterclass-teens)

UK / WJ1 / 02

#### Python for younger learners

For Year 8 or 9, so typed Python is settled before the GCSE begins.

[Open the syllabus](/courses/python-ai-kids-masterclass)

UK / WJ1 / 03

#### Python for older learners

For post-16 resitters on the earlier GCSE who need the programming rebuilt quickly.

[Open the syllabus](/courses/python-programming-masterclass-zero-to-advanced-college)II

### Theory for Unit 1

The eight areas

UK / WJ2 / 01

#### GCSE Computer Science

Architecture, data, networks, operating systems and the life cycle.

[Open the syllabus](/courses/gcse-computer-science-course)

UK / WJ2 / 02

#### Problem solving and algorithms

Creating and interpreting algorithms, traced by hand first.

[Open the syllabus](/courses/problem-solving-dsa-masterclass-teens)

UK / WJ2 / 03

#### Cybersecurity for teens

Defensive security and personal privacy, the second half of area 1.3.

[Open the syllabus](/courses/cybersecurity-course-for-teens-ethical-defensive)III

### After Year 11

For students who want more

UK / WJ3 / 01

#### Data science with Python

Real datasets and charts, a natural next step from GCSE Python.

[Open the syllabus](/courses/data-science-course-for-teens-python-data)

UK / WJ3 / 02

#### Java for teens

A second, strictly typed language, useful before sixth-form computing.

[Open the syllabus](/courses/java-programming-masterclass-for-teens)

UK / WJ3 / 03

#### MySQL for teens

Databases and queries, which most sixth-form courses reach early.

[Open the syllabus](/courses/mysql-mastery-for-teens)

How lessons work

## Read first, then extend

Teachers work from India, where the clock never changes, so Wales is four and a half hours behind in summer and five and a half in winter. Times are always fixed in UK time.

Straight after school

The usual choice for Year 10 and 11.

Mid evening

After clubs, sport or homework.

Weekend

A full two-hour practice paper with time to go through it.

### Stranger's code weekly

Each week a working program the student has not seen, to run, explain and comment before changing anything.

### Tkinter by hand

Windows and widgets placed by the student, never generated, until a new data-entry window takes minutes.

### Pseudo-code as design

Designs written in pseudo-code first, checked for any slip into Python, then implemented.

### Test data explained

Typical, extreme and erroneous data chosen for a routine, with the outcome explained in full sentences.

### IDLE and no internet

Timed practice in plain IDLE with nothing else open, because that is the room.

### Groups of fifteen to twenty

Students at the same rung, reading and commenting each other's programs.

Student work

## Programs our students have written in class

Four projects from lessons, none of them assessed. More in [student labs](/student-labs).

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

## Fees for WJEC lessons

One monthly fee in US dollars, the rate for every family outside India. The first lesson costs nothing, and we bill only once a course and a regular time are fixed.

Free first class

USD 0

no card required

- A proper lesson on WJEC material
- A straight answer on which rung fits
- Only a phone number needed

Book it

Group batch

USD 100

a month, billed in US dollars

- Fifteen to twenty students on one rung
- The same teacher across Years 10 and 11
- A fresh unfamiliar program most weeks
- Lighter lessons near each exam

Start here

One to one

USD 150

a month, billed in US dollars

- A teacher for one student
- A plan built back from the exam dates
- Suits a January resitter or a late starter

Enquire

What families say

## Rated 4.9 across 547 Google reviews

Google reviews from parents, exactly as posted.

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

Questions about WJEC GCSE Computer Science

## What families in Wales ask

### How is the Made-for-Wales GCSE Computer Science assessed?

By two exams of 80 marks each, both on screen. Unit 1 is a 1 hour 30 minute digital exam on computer science theory; Unit 2 is a two-hour on-screen programming exam based on a scenario released in Year 10.

### What happens in the Unit 2 exam?

Candidates get a working Python program based on the scenario, written by WJEC and left without comments. They annotate it, design and add features, test, refine and evaluate it, within two hours.

### Can I take my own solution into the exam?

No. Learners may not take prompts or notes into the room. They receive a clean copy of the pre-release materials and WJEC's own program.

### Which Python tools are used?

Python 3 in the IDLE editor, in the version the brief names, with the Tkinter library for windows and buttons. Schools may teach in other editors, but the exam uses that IDLE version.

### Can I design with a flowchart?

Not in the sample paper's design question, where the mark scheme says flowcharts are not accepted. Designs are written in pseudo-code, and Python code must not be used in its place.

### When are the exams?

Unit 1 is available every summer and was first sat in 2026. Unit 2 is first sat in summer 2027, the first year the full qualification is awarded, and WJEC suggests taking it in the final year of the course.

### Is it tiered?

No. There is one paper for each unit for every candidate, and grades run from A* to G.

### I sat the old GCSE in 2026. Can I resit?

WJEC plans a January 2027 resit opportunity for the examinations, subject to demand. Check with your school that it is running before you plan around it.

### Will you help with the pre-release brief?

No. We never see a candidate's brief or their solution to it. We practise the same skills on programs we write ourselves.

### What does it cost?

The first lesson is free. After that there is one monthly fee in US dollars, lower for a group place than for a teacher of your own, with both figures in the fees section. Nothing is paid in advance.

Elsewhere on this site

## More for students in Wales

The Welsh system, the other WJEC subject, and the rules on AI.

### [Coding and AI classes in Wales](/coding-and-ai-classes-in-wales)

The Welsh system from primary to sixth form, and how the brief works.

### [WJEC GCSE Digital Technology](/wjec-gcse-digital-technology-help-wales)

The other WJEC computing GCSE, and how it differs.

### [Understand the code, do not copy-paste it](/understand-the-code-dont-copy-paste-uk)

AI tools and assessed work, and what the rules say.

### [Python classes online in the UK](/best-python-classes-online-uk)

How we teach Python to examined standard.

### [Problem-solving skills through coding](/problem-solving-skills-through-coding-uk)

What the research says coding does and does not teach.

### [Coding classes in the UK](/coding-classes-in-united-kingdom)

The national page, with every UK page listed.

Start here

## Book a free first lesson

Leave a number and we will ring at a UK time you choose. The lesson uses real WJEC-style material and ends with the rung to begin on.

Would you rather read first? Every [course page](/courses) shows its syllabus, [how we teach](/how-we-teach) is frank about who the method suits, and the [coding roadmap](/coding-roadmap) shows the order of topics.

[WhatsApp us](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20first%20lesson%20for%20WJEC%20GCSE%20Computer%20Science.) · [+91 91233 66161](tel:+919123366161) · [connect@modernagecoders.com](mailto:connect@modernagecoders.com)

WhatsApp is fastest and free from a UK phone. It goes to our office in India, so the number starts +91.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/wjec-gcse-computer-science-help-wales*
