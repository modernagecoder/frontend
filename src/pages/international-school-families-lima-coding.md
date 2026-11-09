---
title: "Coding for International-School Families in Lima, Live"
description: "Live online coding classes in English for Lima families at international, Cambridge and IB schools: IGCSE and IB computer science support, Python, group or 1-on-1."
canonical: https://learn.modernagecoders.com/international-school-families-lima-coding
source: src/pages/international-school-families-lima-coding.html
---
> Modern Age Coders gives live online coding and computer science classes in English for children and teenagers in Lima who attend international, Cambridge, IB or other English-medium schools. We support Cambridge IGCSE Computer Science, which moves from pseudocode to Python 3 only for exams from 2029, as well as IB Diploma Computer Science and general coding from age 6. Mentors based in India teach alongside school, never instead of it; families pick a group of fifteen to twenty pupils or private lessons, at whatever hour fits a long school day.

[Home](/) / [Courses](/courses) / [Peru](/coding-and-ai-classes-in-peru) / International-school families

Lima · International, Cambridge and IB schools · Ages 6 to 18

# Coding for international-school families in Lima

If your child studies in English at a Lima school following Cambridge, IB or another international programme, the question is rarely whether to learn to code. It is how to fit computing around a demanding timetable, which language the exam will use, and how it connects to university. This page answers those three questions from the exam boards' and universities' own documents.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Who: Children and teenagers at Lima's English-medium schools; Programmes: Cambridge IGCSE and A Level, IB Diploma, general coding; What: Python, pseudocode, Java, algorithms and projects; Format: A group of fifteen to twenty, or one to one; Hours: Any day, any hour in Lima time; First class: Free; no card taken. Rated 4.9 across 547 Google reviews.

## Three courses international-school families ask for first

Two follow an exam syllabus closely; one prepares the ground for either.

- [Cambridge IGCSE Computer Science (0478)](/courses/igcse-computer-science-0478-course): Both papers, with pseudocode for exams up to 2028 and Python for exams from 2029.
- [IB Diploma Computer Science](/courses/ib-diploma-computer-science-course): Support for the Diploma course alongside the school's own teaching, including the programming component.
- [Python for teens](/courses/python-complete-masterclass-teens): Ages 13 to 17. The language Cambridge will examine from 2029, learned properly before the exam years begin.

## Is Cambridge IGCSE Computer Science changing to Python?

Yes, from the 2029 exams. Cambridge International says its updated 0478 syllabus removes pseudocode and uses Python 3 as the only language for teaching, assessment and programming questions. Until then, the 2026 to 2028 syllabus asks for pseudocode in most coding answers.

**Cambridge IGCSE Computer Science 0478: the 2026 to 2028 syllabus beside the 2029 to 2031 syllabus**

| Feature | Exams in 2026, 2027 and 2028 | Exams in 2029, 2030 and 2031 |
|---|---|---|
| Paper 1 | Computer Systems, 1 hour 45 minutes, 75 marks, 50% | Computer Systems and Logic, 1 hour 45 minutes, 75 marks, 50% |
| Paper 2 | Algorithms, Programming and Logic, 1 hour 45 minutes, 75 marks, 50% | Algorithms and Programming, 1 hour 45 minutes, 75 marks, 50% |
| How code is written in answers | Pseudocode; "Solutions written in programming code will not be awarded marks", except in the 15-mark scenario question | Python 3, the only language for teaching, assessment and programming questions |
| Scenario question | Pseudocode, or Python, Visual Basic or Java | Python |
| Pseudocode | Set out in the syllabus; arrays generally use a lower bound of 1 | Removed, with the program development life cycle |
| Trace tables | Complete a trace table to document a dry run | Complete a trace table for a given algorithm |
| Exam series | June and November | June and November |

Sources: Cambridge International, Cambridge IGCSE Computer Science (0478) syllabus for exams in 2026, 2027 and 2028, and syllabus for exams in 2029, 2030 and 2031 (first examination in 2029); the 0478 programme page, which also notes that 0265 has the same content as 0478 with 0478 as the paper-only route. Consulted on 9 November 2026. Modern Age Coders has no link with Cambridge International or with any school.

### What it means for a pupil in Lima

Which syllabus your child sits depends on the year of the exam, not the year they start the course. Ask the school which exam session your child is entered for. If it falls in 2028 or earlier, the written answers are in Cambridge pseudocode; from 2029, in Python 3.

The change is good news for learners who already code. Python practised at home now becomes exam practice directly. For pupils sitting the earlier syllabus, though, the gap between pseudocode on paper and Python on a screen is real, and the lesson below shows where it bites.

### What stays the same

Both syllabuses keep two papers of equal weight and both keep trace tables. Reading an algorithm line by line and recording each variable is assessed whichever language the code is in, which is why our mentors trace by hand in every course.

Both offer June and November series. Families who move between Peru and other countries mid-course should check with the school which series and syllabus apply.

For a fuller account of how we teach the Cambridge course, see our page on [Cambridge IGCSE Computer Science tuition](/cambridge-igcse-computer-science-tuition). Lima families at English-medium schools who want the wider picture, including Lima's English level and the national curriculum, can read our [English-medium coding classes in Lima](/english-medium-coding-classes-lima) page.

## How do you turn Cambridge pseudocode into Python without errors?

Carefully, because the two count differently. Cambridge pseudocode arrays generally start at 1 and its FOR loops include their last value; Python lists start at 0 and range() stops before its end. The lesson is ours, written for pupils moving between the two, and the marks are invented.

**The algorithm, in the style of Cambridge pseudocode** (Pseudocode)
```pseudocode
DECLARE Marks : ARRAY[1:5] OF INTEGER
Total ← 0
Passed ← 0
FOR Index ← 1 TO 5
    Total ← Total + Marks[Index]
    IF Marks[Index] >= 50
        THEN
            Passed ← Passed + 1
    ENDIF
NEXT Index
OUTPUT "Total: ", Total, " Passed: ", Passed
```
A totalling and counting algorithm, one of the standard methods in the 2026 to 2028 syllabus. Five marks, a running total, and a count of marks of 50 or more.

Asked to "write this in Python", many pupils copy the shape line by line: FOR Index ← 1 TO 5 becomes for index in range(1, 5). Before running it, the mentor asks the pupil to predict the total. The five marks add up to 294, and three of them are 50 or more.

**Version 1: the line-by-line translation** (Python)
```python
marks = [72, 45, 88, 50, 39]

total = 0
passed = 0
for index in range(1, 5):
    total = total + marks[index]
    if marks[index] >= 50:
        passed = passed + 1
print('Total:', total, 'Passed:', passed)
```
It looks like a faithful copy of the pseudocode. It runs without any error.

**What Version 1 prints** (Output)
```output
Total: 222 Passed: 2
```
Exact output from our own run with Python 3. The total is 72 short and one pass is missing. The first mark, 72, was never counted, because index 1 in Python is the second item.

A pupil who notices the missing 72 often "fixes" the range instead of the index, reasoning that the pseudocode goes to 5, so Python must go one further.

**Version 2: the tempting fix** (Python)
```python
marks = [72, 45, 88, 50, 39]

total = 0
for index in range(1, 6):
    total = total + marks[index]
print('Total:', total)
```
range(1, 6) produces 1, 2, 3, 4 and 5, so the last step asks for marks[5].

**Last line of what Version 2 prints** (Output)
```output
IndexError: list index out of range
```
Exact final line of the error from our own run. A five-item Python list has positions 0 to 4; position 5 does not exist. The first mark is still skipped, but the program now stops before it can show you.

1. **Trace both versions.** The pupil writes a trace table with columns for index, the mark read and the total, exactly as Paper 2 asks. Version 1 shows the 72 never appearing; Version 2 shows the loop asking for a sixth item.
2. **Name the two differences.** Pseudocode arrays start at 1 here; Python lists start at 0. Pseudocode FOR includes its last value; Python range() leaves it out. Two differences that partly cancel are harder to spot than one.
3. **Ask whether you need the index at all.** The algorithm only reads each mark once, in order. Python can walk through the values themselves, so there is no index to get wrong.
4. **Check independently.** Compare the loop's answer with a second method that does not share its logic.

**Version 3: loop over the values, then check** (Python)
```python
marks = [72, 45, 88, 50, 39]

total = 0
passed = 0
for mark in marks:
    total = total + mark
    if mark >= 50:
        passed = passed + 1
print('Total:', total, 'Passed:', passed, 'Average:', total / len(marks))
print('Check:', sum(marks), len([m for m in marks if m >= 50]))
```
for mark in marks visits every item once, however the list is numbered. The last line recomputes the same two numbers with sum() and a list comprehension, as an independent check.

**What Version 3 prints** (Output)
```output
Total: 294 Passed: 3 Average: 58.8
Check: 294 3
```
Exact output from our own run: total 294, three passes, average 58.8, and the check agrees.

For a pupil sitting the 2026 to 2028 papers, the lesson runs the other way too: when writing pseudocode by hand, keep Cambridge's conventions and do not let Python habits leak in. For a pupil sitting from 2029, Version 3 is simply good Python. Either way, the trace table is the tool that finds the error, and it is examined on both syllabuses.

## How do IB and Cambridge students in Peru use their diploma for university?

Peruvian universities set their own routes for international diplomas, and each university decides who it admits. Two Lima universities describe such routes in their current admission guides.

### The IB Diploma in Peru

MINEDU reported that 2,502 students in Peru obtained the IB Diploma in 2025, and that students of the public COAR high-performance schools made up 47% of them. The rest came from other schools, many of them private English-medium and international schools in Lima and other cities.

We cannot quote the IB's own course guides here, because the IB's website refused our requests. For IB Computer Science and IB Mathematics, our Spanish pages on an [IB Computer Science tutor](/bachillerato-internacional-ciencias-de-la-computacion-tutor) and an [IB maths tutor in English](/tutor-ib-matematicas-en-ingles-peru) go into more detail.

### University routes in Lima

Universidad de Lima's admission guide for 2027-1(A) includes a route for holders of the IB Diploma who apply within three years of obtaining it. PUCP's applicant guide lists a Diploma de Bachillerato route, with interviews for its second call running until 28 January 2027.

We do not advise on admission and we do not promise places. Our part is the computing and maths a pupil studies in English, alongside school; the university reads the diploma and decides.

Students aiming at universities abroad usually follow the same diploma and add more computing on their own. Cambridge says the 0478 course prepares for its AS and A Level Computer Science (9618), which we also teach.

## What about coding for younger children at international schools?

Younger children at Cambridge schools may follow computing from primary level: Cambridge lists Primary Computing (0059) and Lower Secondary Computing (0860) among its programmes. Whatever the school offers, home classes add projects and depth at the child's pace.

### Ages 6 to 8

Scratch stories and games, with an English-speaking mentor who matches the vocabulary the child already uses at school.

### Ages 9 to 12

Typed Python and web pages. Children at English-medium schools often move faster here, because instructions and error messages are already familiar.

### Ages 13 and up

Python and Java in depth, algorithms, and a plan for IGCSE, IB or A Level computing set with the family and, where useful, the school's own syllabus.

Families who arrived in Lima recently sometimes ask for continuity: the same mentor and course whether the child is in Lima, on a home visit abroad or moving to the next posting. Because everything is online, the class follows the child.

## How can coding fit around an international-school timetable?

With short, regular sessions at an hour that protects homework and sleep. International-school days are long, and most families want something that adds to school rather than competing with it.

1. **Start with the exam calendar.** Find out the exam session and syllabus year for IGCSE or IB. A pupil two years away needs foundations; a pupil in the exam year needs targeted practice.
2. **Pick one or two fixed slots.** Two classes a week is usual. Many Lima families choose an early evening hour or a weekend morning.
3. **Bring school work in.** One-to-one classes can use the pupil's own coursework topics or past-paper style questions written by our mentors, never a school's confidential material.
4. **Lighten in exam months.** In May and October, before the June and November series, families often switch to revision or pause.
5. **Review each term.** The mentor sends a short report, and the family decides whether to keep the pace, add a subject or slow down.

Everything we do runs beside school. We do not award school grades or Cambridge or IB qualifications; at the end of a course the pupil receives our own certificate of completion, and the school and exam board remain the ones that assess.

## Are the classes taught in Spanish?

No. Teaching is live, online and in English only, which suits English-medium pupils. Mentors work from India; they speak clearly, adapt to the pupil's pace and accent, and use the subject vocabulary the exam boards use.

### For pupils who study in English

Pupils used to learning computing in English at school hear the same terms with us: algorithm, iteration, selection, trace table. That matters in exams, where a precise word earns a mark and a vague one does not.

Pupils who switched recently from a Spanish-medium school get extra time with vocabulary, and the mentor checks understanding more often in the first weeks.

### For parents

You can write to us on WhatsApp in English or Spanish. Progress notes come in English.

If one parent prefers Spanish, tell us and we will keep administrative messages in Spanish while the lessons stay in English.

## What time are the classes in Lima?

Whenever suits your family. Our mentors are in India, and with no daylight saving in either country the offset never changes, so a slot chosen in March still works in October.

**Sample Lima hours converted to India time (illustrations only)**

| Lima time | India time | Day in India |
|---|---|---|
| 6:30 a.m. | 5:00 p.m. | Same day |
| 8:00 a.m. | 6:30 p.m. | Same day |
| 10:00 a.m. | 8:30 p.m. | Same day |
| 1:00 p.m. | 11:30 p.m. | Same day |
| 4:30 p.m. | 3:00 a.m. | Next day |
| 7:00 p.m. | 5:30 a.m. | Next day |

Lima uses UTC minus 5 throughout the year (tz database, America/Lima); India uses UTC plus 5:30. India is therefore 10 hours 30 minutes ahead of Lima on every day of the year.

Weekend mornings in Lima are evenings in India, a popular choice for pupils with long school days. You book in Lima time and the mentor sees the converted hour.

## How do we measure progress for an exam-bound pupil?

Five stages of our own, mapped to skills both Cambridge syllabuses assess. They are not exam grades and do not predict one.

**Five stages towards exam-ready computing (ours)**

| Stage | The pupil can | Linked exam skill |
|---|---|---|
| 1. Read | explain what a short algorithm does, line by line | Explaining the purpose of an algorithm |
| 2. Trace | complete a trace table for loops and selections | Trace tables, on both syllabuses |
| 3. Translate | move between pseudocode and Python without off-by-one errors | Writing algorithms (pseudocode to 2028, Python from 2029) |
| 4. Standard methods | write totalling, counting, linear search and bubble sort from memory | Standard methods of solution |
| 5. Scenario | plan and write a longer program from a written scenario | The scenario question in Paper 2 |

### For parents

Ask which stage your child reached this month and which stage the exam needs. The gap tells you whether to keep the pace or increase it.
Stage 3 matters most for pupils sitting the 2026 to 2028 syllabus, where pseudocode and Python must be kept apart.

### For pupils

Write the trace table before you run anything. Examiners reward the table, not the run.
When translating, ask first whether you need an index at all.

## Nine more courses for English-medium pupils

All live, in English, with one mentor through the course, taught alongside school.

### Maths for the same programmes

Ages 13 to 18

- [IGCSE Mathematics](/courses/igcse-mathematics-mastery): The Cambridge maths course, topic by topic, in English.
- [IB Mathematics AA and AI](/courses/ib-mathematics-aa-ai-masterclass): Both IB maths courses, with internal assessment support.
- [A Level Maths](/courses/a-level-maths-course-pure-mechanics-statistics): Pure, mechanics and statistics for A Level pupils.

### Computing in depth

Ages 13 to 18

- [Cambridge AS and A Level Computer Science (9618)](/courses/cambridge-a-level-computer-science-9618-course): The step after IGCSE, with programming and theory.
- [Java for teens](/courses/java-programming-masterclass-for-teens): Typed, object-oriented programming for older pupils.
- [Problem solving and DSA for teens](/courses/problem-solving-dsa-masterclass-teens): Algorithms and data structures beyond the syllabus.

### Looking abroad

Ages 15 to 18

- [AP Computer Science A](/courses/ap-computer-science-a-java-exam-prep-course): For pupils at American-curriculum schools or applying to the US.
- [SAT Maths](/courses/sat-math-prep-course): Maths for US university applications.
- [Competitive programming for teens](/courses/competitive-programming-for-teens-course): Contest problems for pupils who want a challenge.

## How do the live classes work for international-school pupils?

Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.

- **Weekday evenings** After school and homework, Lima time.
- **Weekend mornings** A common choice for long school weeks.
- **Set by the family** One-to-one classes at the hours you choose.

- **Syllabus aware** Pseudocode or Python, depending on the exam year.
- **Trace tables** Practised in every course, as both papers require.
- **Original questions** Written by our mentors, never a school's private material.
- **One mentor** The same person from first class to exam season.
- **Termly notes** Progress against the stages, sent to parents.
- **Group or private** A group of fifteen to twenty pupils of a similar level, or one to one.

## Fees for families in Lima

Below you will find each plan's monthly fee in US dollars, charged to a card. If your card is in soles, your bank converts the charge at its own rate, so the amount on the statement can vary slightly between months.

- Free first class: Free. A free first class with a mentor. A check against the pupil's syllabus and exam year. No card needed.
- Group batch: USD 100 a month. Fifteen to twenty pupils of a similar level. One mentor throughout. Two live classes a week. Monthly; stop at the end of any month.
- One to one: USD 150 a month. Your child and a mentor alone. Planned around the school syllabus. Days and hours you choose.

## Coding for international-school families in Lima: questions and answers

### Are the classes in Spanish?

No. Lessons are given live and online, in English only, by mentors in India whose speech is clear and who adjust to each pupil's pace and accent. That matches the language most international-school pupils already study computing in.

### Is Cambridge IGCSE Computer Science switching to Python?

Yes. Cambridge International says the 0478 syllabus for exams in 2029, 2030 and 2031 uses Python 3 as the only language and removes pseudocode. For exams in 2026, 2027 and 2028, most coding answers must still be written in pseudocode.

### My child sits IGCSE in 2027. Should they still learn Python?

Yes, but alongside pseudocode, not instead of it. Under the 2026 to 2028 syllabus, code written in a programming language earns no marks except in the 15-mark scenario question. Learning both, and the differences between them, is the safest plan.

### Do you support the IB Diploma?

Yes, IB Computer Science and IB Mathematics, alongside the school's own teaching. The school and the IB assess; we do not award IB grades or predict them.

### Will this help with university admission in Peru?

Universities decide admission. Universidad de Lima and PUCP both describe routes for international diploma holders in their current guides. We teach the subjects; we do not advise on applications or promise places.

### Do you use school materials?

We work from the public syllabus and from questions our mentors write. We never ask for or use a school's confidential tests or coursework briefs.

### What time are the classes?

Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Indian clocks run 10 hours 30 minutes ahead of Lima's throughout the year: 8:00 a.m. in Lima is 6:30 p.m. in India.

### Can younger siblings join too?

Yes. We teach from age 6, with Scratch for the youngest and Python from about 9. Siblings usually take separate classes matched to their age.

### Are you connected with any school in Lima?

No. We are not connected with any school, with Cambridge International, the IB, MINEDU or any university. Classes run beside school.

### Do you give a certificate?

Pupils who finish a course receive our own certificate of completion. It is not a Cambridge or IB qualification, a school grade or a Peruvian credential.

## More for international-school families

- [Cambridge IGCSE Computer Science tuition](/cambridge-igcse-computer-science-tuition): How we teach the 0478 course in detail.
- [Coding for IGCSE students](/coding-for-igcse-students): Programming practice that supports the IGCSE years.
- [IB Computer Science online tuition](/ib-computer-science-online-tuition): Support for the IB Diploma computing course.
- [Cambridge IGCSE Maths 0580 help](/cambridge-igcse-maths-0580-help): The maths course many of the same pupils take.
- [How we teach](/how-we-teach): What happens in one of our lessons.
- [Coding and AI classes in Peru](/coding-and-ai-classes-in-peru): Our full offer for Peru.

## Contact

Book the free first class at [https://learn.modernagecoders.com/international-school-families-lima-coding](https://learn.modernagecoders.com/international-school-families-lima-coding#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
