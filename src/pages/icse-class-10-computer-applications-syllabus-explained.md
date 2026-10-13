---
title: "ICSE Class 10 Computer Applications Syllabus 2026-27 Explained"
description: "ICSE Class 10 Computer Applications syllabus for the 2027 exam, unit by unit: eight Java units, the 100 plus 100 scheme, Sections A and B, internal assessment."
canonical: https://learn.modernagecoders.com/icse-class-10-computer-applications-syllabus-explained
source: src/pages/icse-class-10-computer-applications-syllabus-explained.html
---
> ICSE Class 10 Computer Applications syllabus for the 2027 exam, unit by unit: eight Java units, the 100 plus 100 scheme, Sections A and B, internal assessment.

Start here

## The courses that teach this syllabus

One course for the paper itself, and two for what a student who can write Java does with it after the boards.

[![ICSE Computer Applications Java with BlueJ course thumbnail](/images/java-teens.webp)  The paper / Class 10 mini batch ICSE Computer Applications, Java with BlueJ Every unit on this page taught live on Tuesday and Wednesday evenings in a batch of four or five, with the lab file and project built across the year. Open the syllabus →](/courses/icse-computer-applications-java-bluej-course)[![Computer Science Class 11 and 12 course thumbnail](/images/ip-cs-class-11-12.webp)  The continuation / Class 11 and 12 Computer Science Class 11 and 12 The road after Class 10 for students who keep the subject: the senior computer science paper, taught to students who already read Java. Open the syllabus →](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course)[![Full-Stack Web Development for Teens course thumbnail](/images/web-dev-teens.webp)  Beyond the paper / building Full-Stack Web for Teens For the student who finishes the string-handling unit and wants to build something people can open in a browser, with the same live small-batch method. Open the syllabus →](/courses/full-stack-web-development-teens-masterclass)

Ans. The short version

The ICSE Class 10 Computer Applications syllabus for the 2027 examination has eight Java units: Revision of Class IX syllabus, Class as the basis of all computation, User-defined methods, Constructors, Library classes, Encapsulation, Arrays and String handling. It is assessed by a two-hour theory paper of 100 marks, Section A being 40 compulsory short-answer marks across the whole syllabus and Section B being 60 marks of programs with any four attempted at 15 marks each, written in Java with variable descriptions and no flowcharts required, plus a 100-mark internal assessment from at least 20 lab assignments and a project, marked 50 by the internal teacher and 50 by an external examiner. Modern Age Coders teaches all of it live in BlueJ, Tuesday 5:30 PM and Wednesday 8 PM IST, in a mini batch of four or five.

Q1. How is the subject assessed?

## The scheme, exactly as CISCE sets it out

Two hundred marks, split into a paper the student sits alone and an assessment built across the year. The rules in the right-hand column decide how programs must be written.

| Component | Marks | What CISCE specifies |
| --- | --- | --- |
| Theory paper | 100 | One written paper of two hours duration |
| Section A | 40 | Compulsory short-answer questions covering the entire syllabus |
| Section B | 60 | Programming questions with a choice: any four of those offered, 15 marks each. Programs in Java, written using variable descriptions or mnemonic codes so the logic is clearly depicted; flowcharts and algorithms not required |
| Internal assessment | 100 | Practical lab work of at least 20 assignments in the year, plus a project |
| of which internal teacher | 50 | Continuous assessment of the lab work and project by the school |
| of which external examiner | 50 | An external examiner assesses the practical work and questions the student |

Two phrases in the Section B row are worth more than the rest of the table. "Any four of those offered" means a student who is strong in three program families and weak in one can still choose their ground, which is why our practice is organised by family rather than by unit. "Variable descriptions" means presentation marks exist for a habit that also catches the student's own mistakes, and we treat it as part of writing a program, not an extra. The environment is BlueJ, which the paper names and which every ICSE school lab uses; our [BlueJ coaching page](/icse-class-10-bluej-java-coaching) covers its habits from installation to reading a compiler error.

Q2. What is inside each unit?

## Eight units, with what each contains and how the paper asks about it

The syllabus lists topics; the paper asks questions. This is the mapping between the two, which is what a student actually needs.

Unit 1 · the most examined unit in the book

### Revision of Class IX syllabus

Object-oriented ideas, the elementary concept of objects and classes, values and data types, operators in Java and their precedence, input in Java, the mathematical library methods, conditional constructs, iterative constructs and nested loops. Nothing here is new, and everything here is examined: Section A's output-prediction and loop-count questions are built from this unit, and every Section B program assumes it. Treat it as the foundation it is.

Unit 2

### Class as the basis of all computation

Objects and classes, the class as a user-defined data type, primitive and composite data types, objects as instances of a class with state and behaviour. The paper asks the student to read a small class definition and say what it models, and to distinguish primitive from composite. Short in pages, and the conceptual key to the next two units.

Unit 3

### User-defined methods

The syntax of a method, the ways of invoking one, pure and impure methods, actual and formal parameters, the return statement, using multiple methods in a class, and method overloading. Section B's favourite format lives here: a class skeleton with named data members and method signatures, where the student must write the methods that make it work.

Unit 4

### Constructors

What a constructor is, its characteristics, the types, default and parameterised, the uses of constructors, and the difference between a constructor and a method. A reliable two-mark difference question in Section A, and the reason a Section B class compiles, since the paper's class skeletons usually require one.

Unit 5

### Library classes

The wrapper classes and their methods, converting between strings and numbers, character methods such as testing for a letter or a digit and changing case, and autoboxing and unboxing. Section A asks for the output of a wrapper or character method more often than students expect; Section B uses them inside string and menu programs.

Unit 6

### Encapsulation

Access specifiers, private, public, protected and default, the visibility rules for each, and the scope of variables: instance, class, local and argument. The unit that explains why a program will or will not compile, and a steady source of Section A definitions and differences. It rarely produces a whole Section B program but shapes how every one of them is written.

Unit 7 · Section B territory

### Arrays

Single and double dimensional arrays, declaration, initialisation, accepting data, and the search techniques, linear and binary, along with the sort techniques that follow from them. Arrays produce a Section B program in almost every paper: find, count, sum, search, sort, or fill a two-dimensional table. This unit gets the most Wednesdays in our batch for that reason.

Unit 8 · Section B territory

### String handling

The String class and its methods, extracting and modifying characters of a string, and implementing string methods by hand. The other guaranteed Section B program: reverse a word, test a palindrome, count vowels or words, change case by rule, rearrange a sentence. Character-by-character reasoning is the skill, and it transfers directly from the arrays unit.

Q3. What does a Section A question actually demand?

## One output-prediction question, traced two ways

Section A asks for the output of small code fragments, and a fragment from the string and library units is the classic. Two students, one line of Java.

***The guessed answer**read once, answered fast*

```
String s = "Computer";
System.out.println(
  s.substring(3).toUpperCase()
  + s.indexOf('t'));

Student writes:  Puter6

// substring counted from 1, not 0
// toUpperCase quietly ignored
// indexOf counted from 1 as well
// Two marks, zero earned.
```

Every error here is the same error: treating Java's zero-based indexing as one-based. It costs Section A marks in strings, arrays and loops alike, which is why it is drilled on Tuesdays.

***The traced answer**index table first*

```
String s = "Computer";
index:  0 1 2 3 4 5 6 7
char:   C o m p u t e r

s.substring(3)      = "puter"
.toUpperCase()      = "PUTER"
s.indexOf('t')      = 5
"PUTER" + 5         = "PUTER5"

Output: PUTER5
// String + int joins as text, so the
// 5 is appended, not added.
```

An index table takes ten seconds and makes the substring, the index and the concatenation rule visible. Full marks, and the same habit answers half of Section A.

The syllabus never says "draw an index table", but the paper rewards students who do, in every unit that touches a position: characters in a string, elements in an array, iterations of a loop. It is one of a handful of small techniques that turn Section A from a guessing game into forty predictable marks, and the [board exam preparation page](/icse-class-10-computer-applications-board-exam-preparation) collects the rest of them.

Q4. What does the second hundred consist of?

## The internal assessment: twenty assignments, a project, two assessors

### What the syllabus asks for

- **At least 20 lab assignments** completed during the year, each a working program with its output.
- **A project**, prepared and documented, that the student can present and answer questions on.
- **Internal assessment, 50 marks**, by the school's teacher, continuous across the year.
- **External assessment, 50 marks**, by an examiner who reviews the practical work and questions the student.

### What a strong lab file contains

Assignments from every unit rather than twenty variations of one: input-and-compute programs from the revision unit, a class with a constructor and methods, a menu-driven program using switch, several array programs including a search and a sort, several string programs, and a few that combine units. Each with a variable description and its real output, because the external examiner will pick one and ask the student to walk through it.

In our batch the Wednesday program is the week's assignment, so the file reaches twenty by mid-year and passes it comfortably by the school's deadline, with nothing in it the student cannot explain.

Q5. In what order should it be studied?

## A school-year sequence that puts the heaviest units where the practice time is

1. #### April to May: the revision unit, rebuilt through programs

  Data types, operators, input, conditionals and loops, each met in a small BlueJ program the same day, with the index-table habit and loop tracing introduced immediately. The lab file begins in week one.
2. #### June to July: classes, methods and constructors as one arc

  The three units that depend on each other, taught as one connected story: a class models something, methods give it behaviour, constructors set it up. Section B's class-skeleton format is practised from the first week of methods.
3. #### August: library classes and encapsulation

  Shorter units, taught with Section A in mind: wrapper and character method outputs, access specifiers and scope as reasons a program compiles or fails. Their vocabulary then appears inside every later program.
4. #### September to November: arrays and strings, the Section B core

  The two units that produce most Section B programs get the most weeks and the most Wednesdays: searching, sorting, two-dimensional tables, character-by-character string work, and combined programs. The lab file passes twenty here and the project is drafted.
5. #### December to February: mocks, the practical rehearsal, then the paper

  Full papers under time with Section A and Section B reviewed separately, a timed practical mock, the project defended to an unfamiliar teacher, and revision weighted toward whichever section the mocks show is losing marks.

What has and has not changed for the 2027 examination: CISCE's published Class 10 syllabus for the 2026-27 session keeps Computer Applications consistent with recent years, the same eight units, the same 100 plus 100 scheme, Java in BlueJ. Across its boards CISCE has been moving toward questions that test application over recall, which for this subject means the traced, reasoned answers this page shows rather than remembered ones.

Q6. What does the batch cost?

## Monthly fees, with the Tuesday and Wednesday mini batch featured

Billed monthly, no admission fee, stop at any month end. The free demo class doubles as a placement against the eight units.

Mini batch · Tue 5:30 PM and Wed 8 PM

₹2,999

per month

- Four or five students, one teacher all year
- Every unit on this page, theory and lab
- Lab file, project and practical mocks included
- Certificate on completion

Book the free demo

One to one

₹4,999

per month

- Private teaching on your own schedule
- The eight units at the student's pace
- The usual choice for a start after October

Enquire

Group batch · other timings

₹1,499

per month

- Ten to fifteen students
- Timings other than Tuesday and Wednesday
- The same syllabus, a larger room

Ask about timings

What families say

## Rated 4.9 across 547 Google reviews

Real reviews from real families. We neither write nor commission them.

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

The rest of the Class 10 series

## Nine more pages for Class 10 board students

Four more on ICSE Computer Applications, and five on the CBSE AI paper for families on the other board.

[The Tue and Wed mini batch/icse-class-10-java-classes-online](/icse-class-10-java-classes-online)[ICSE Java programs practice/icse-class-10-java-programs-practice](/icse-class-10-java-programs-practice)[ICSE BlueJ Java coaching/icse-class-10-bluej-java-coaching](/icse-class-10-bluej-java-coaching)[ICSE board exam preparation/icse-class-10-computer-applications-board-exam-preparation](/icse-class-10-computer-applications-board-exam-preparation)[CBSE Class 10 AI classes/cbse-class-10-ai-classes-online](/cbse-class-10-ai-classes-online)[CBSE 417 syllabus explained/cbse-class-10-ai-syllabus-explained](/cbse-class-10-ai-syllabus-explained)[Python for CBSE Class 10 AI/python-for-cbse-class-10-ai](/python-for-cbse-class-10-ai)[CBSE AI board exam preparation/cbse-class-10-ai-board-exam-preparation](/cbse-class-10-ai-board-exam-preparation)[CBSE AI project and practical file/cbse-class-10-ai-project-and-practical-file](/cbse-class-10-ai-project-and-practical-file)

Questions about the syllabus

## What parents and students ask after reading the CISCE document

### What is the exam pattern for ICSE Class 10 Computer Applications?

One written paper of two hours carrying 100 marks, plus an internal assessment of 100 marks. In the paper, Section A is 40 marks of compulsory short-answer questions covering the whole syllabus, and Section B is 60 marks of programming questions with a choice: any four of those offered, at 15 marks each, written in Java with variable descriptions so the logic is clear. CISCE's own syllabus document states that flowcharts and algorithms are not required for the programs.

### Has the Computer Applications syllabus changed for the 2027 exam?

CISCE has published the Class 10 syllabus for the 2026-27 session on its website for the 2027 examination, and for Computer Applications it is consistent with recent years: the same eight Class 10 units, the same 100 plus 100 scheme, Java in BlueJ. The unit list on this page is that syllabus. Always confirm against the school's copy of the current CISCE document, because the school's internal assessment schedule follows it.

### Which units produce the Section B programs?

Almost every Section B program draws on arrays, string handling, user-defined methods, constructors and the control constructs from the Class 9 revision unit, usually combined: a class with a constructor and a method that processes an array, or a menu-driven program using switch that manipulates a string. The library classes and encapsulation units appear more in Section A, but their vocabulary, wrapper methods and access specifiers, shows up inside Section B programs too.

### Is Class 9 material examined in the Class 10 paper?

Yes. The first Class 10 unit is Revision of Class IX syllabus, and Section A draws on it directly: operator precedence, data types and values, conditional and iterative constructs, loop counting. Section B programs assume all of it. A student who found Class 9 shaky should treat the revision unit as new material, which is how our batch teaches it in the first weeks.

### What does the internal assessment consist of?

One hundred marks from practical lab work and a project. Students must complete at least 20 lab assignments during the year, and prepare a project; the assessment is shared, 50 marks from the internal teacher and 50 from an external examiner. The assignments should span the syllabus, so a good lab file has programs from every unit rather than twenty variations of one.

### Do students need to write algorithms or flowcharts in the exam?

No. CISCE's syllabus states that flowcharts and algorithms are not required for Section B programs. What is expected is the program in Java, written using variable descriptions or mnemonic codes so the logic is clearly depicted. In practice that means a short table of variables, their types and purposes beside each program, which our students write every week until it is automatic.

### Which topics are the most heavily weighted?

CISCE does not publish unit-wise marks the way CBSE does, but the paper's structure weights the programming units: Section B is 60 of the 100 marks and its programs come overwhelmingly from arrays, strings, methods and constructors. Section A spreads its 40 marks across all eight units, which is why encapsulation and library classes, rarely the subject of a whole program, still matter: they are reliable two-mark questions.

### In what order should the syllabus be studied?

Revision first, then classes, methods and constructors as one connected arc, because each depends on the last; then library classes and encapsulation, which are shorter; then arrays and strings, which carry the most Section B weight and benefit from the most practice time. Our Tuesday and Wednesday batch follows exactly this order, with the lab file growing from the first week so that arrays and strings arrive with a student who already writes Java daily.

### What does the mini batch cost?

The fee is shown on this page in your own currency for the Tuesday and Wednesday mini batch of four or five, for one to one, and for the larger group batch on other timings. Monthly billing, no admission fee, stop at any month end, and the first class is a free demo that doubles as a check of where your child stands on the units above.

### What is the next step from this page?

Send the form and a mentor books a free demo class. Bring the student's current lab file if one exists; the teacher places the student against the eight units on this page in the first fifteen minutes, then runs a short BlueJ program with them. You leave knowing which units are understood, which are memorised and which have not yet been met, which is a better basis for the year than any brochure.

Start

## The free demo places your child against the eight units

Bring the student, the textbook and the lab file if one exists. In the first fifteen minutes the teacher works through the units on this page with them, unit by unit, and sorts each into understood, memorised or not yet met. Then they write a short program together in BlueJ. You leave with a placement instead of a guess, and a clear idea of how many Tuesdays and Wednesdays stand between your child and a paper they can sit calmly.

Reading further first? The [batch page](/icse-class-10-java-classes-online) explains the Tuesday and Wednesday rhythm, and [Java programs practice](/icse-class-10-java-programs-practice) takes Section B family by family.

[WhatsApp us](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders.%20I%20have%20a%20question%20about%20the%20ICSE%20Class%2010%20Computer%20Applications%20syllabus.) · [+91 91233 66161](tel:+919123366161) · [connect@modernagecoders.com](mailto:connect@modernagecoders.com)

Every class is live video. The form books one callback; it reserves nothing and commits you to nothing.

---

*Canonical: https://learn.modernagecoders.com/icse-class-10-computer-applications-syllabus-explained*
