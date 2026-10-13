---
title: "ICSE Class 10 Java Classes Online | Live Tue 5:30 and Wed 8 PM"
description: "Live online ICSE Class 10 Computer Applications classes in Java and BlueJ, every Tuesday 5:30 PM and Wednesday 8 PM IST, in a mini batch of four or five."
canonical: https://learn.modernagecoders.com/icse-class-10-java-classes-online
source: src/pages/icse-class-10-java-classes-online.html
---
> Live online ICSE Class 10 Computer Applications classes in Java and BlueJ, every Tuesday 5:30 PM and Wednesday 8 PM IST, in a mini batch of four or five.

Start here

## The courses this mini batch is built from

One dedicated ICSE Computer Applications course, and the two roads students take from it after the boards.

[![ICSE Computer Applications Java with BlueJ course thumbnail](/images/java-teens.webp)  The paper / Class 10 mini batch ICSE Computer Applications, Java with BlueJ The course behind the Tuesday and Wednesday batch: the full Class 9 and 10 syllabus to the current CISCE scheme, with the lab file and project built across the year. Open the syllabus →](/courses/icse-computer-applications-java-bluej-course)[![Computer Science Class 11 and 12 course thumbnail](/images/ip-cs-class-11-12.webp)  After the boards / ISC and Class 11 Computer Science Class 11 and 12 Where a Class 10 Java student goes next: the Class 11 and 12 computer science paper, taught by the same method to a student who already reads Java. Open the syllabus →](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)  After the boards / the other direction AI and Machine Learning for Teens For the student whose favourite lab assignment was the one where the program did something clever, and who wants to know how models learn. Open the syllabus →](/courses/ai-ml-masterclass-teens)

Ans. The short version

ICSE Class 10 Computer Applications is taught in Java with BlueJ and marked out of 200: a two-hour theory paper of 100 marks, where Section A is 40 compulsory short-answer marks across the whole syllabus and Section B is 60 marks of programs, any four at 15 marks each, plus a 100-mark internal assessment from at least twenty lab assignments and a project, shared between an internal teacher and an external examiner. Modern Age Coders teaches it live online in a mini batch of four or five students, every Tuesday at 5:30 PM and Wednesday at 8 PM IST: Tuesdays for concepts and Section A technique, Wednesdays for writing programs in BlueJ with the teacher reading every line. The first class is a free demo.

Q1. How do 200 marks split?

## The marks ledger: a 100-mark paper and a 100-mark internal assessment

Most subjects are 80 plus 20. Computer Applications is 100 plus 100, and the shape of the second hundred is the reason the batch starts building the lab file in its first month.

| Component | Marks | Share of 200 |
| --- | --- | --- |
| Theory paper, Section A: compulsory short answers across the whole syllabus | 40 |   |
| Theory paper, Section B: programs, any four questions at 15 marks each, in Java with variable descriptions | 60 |   |
| Internal assessment: at least 20 lab assignments in the year, plus a project | 100 |   |
| of which assessed by the internal teacher | 50 |   |
| of which assessed by the external examiner | 50 |   |
| Total | 200 |   |

Three things follow. First, 160 of the 200 marks, Section B plus the whole internal assessment, are earned by producing working Java, so the subject is a programming course whatever the textbook looks like. Second, Section A's 40 marks cover the entire syllabus in short questions, output prediction, error correction, definitions and differences, which is a different skill from writing programs and needs its own practice. Third, half the internal marks are given by an examiner who has never met the student and will ask them to explain their own work, which is the single best argument against a copied lab file.

The unit-by-unit reading of the syllabus, with what the paper asks in each, is on [the syllabus explained](/icse-class-10-computer-applications-syllabus-explained). This page is about how the batch turns the ledger into marks.

Q2. What does a week look like?

## Tuesday is for Section A. Wednesday is for Section B and the lab file.

Two sessions, two skills, deliberately on different evenings so that a clash on one night rarely costs both.

Tuesday, 5:30 PM

### Concepts, then the Section A shapes

One unit at a time, taught as an idea with a program attached: what a constructor actually does when an object is made, why a wrapper class exists, what changes when a variable is private. Then the paper's own question shapes for that unit: predict this output, correct this error, how many times does this loop run, differentiate these two. Forty compulsory marks are won by students who have seen every shape before the exam hall, and Tuesdays make sure of it.

The last ten minutes revisit Class 9, because the paper draws on it and because a shaky Class 9 foundation shows up as a shaky Class 10 program.

Wednesday, 8:00 PM

### The programs lab, in BlueJ, screens shared

Every student writes. One Section B-style program per week from a blank class: menu-driven with switch, a number pattern, an array search, a string reversal, a class with a constructor and methods. The teacher watches each screen, so the missing semicolon, the loop that runs one time too many and the brace in the wrong place are caught while the student is still thinking about them, which is how they stop happening.

Each week's program is also the week's lab assignment, so the file of twenty grows without anyone noticing it is being built, and the variable description table is written every time until it is a habit.

Between sessions there is about an hour of set work: a handful of Section A questions from Tuesday's unit and a variation on Wednesday's program, so that Thursday's student has written Java twice this week without a teacher present. In a subject where 160 of 200 marks depend on producing code alone, that unsupervised hour is the point of the supervised two.

Q3. What is the examiner testing in each unit?

## Eight units, and the one thing the paper wants from each

- **Revision of Class IX syllabus.** Objects and the idea of a class, data types and value types, operators and their precedence, conditional and iterative constructs. Section A lives here: outputs, loop counts, precedence traps.
- **Class as the basis of all computation.** Objects as instances, primitive against composite types, what a class encapsulates. The paper asks the student to read a class definition and say what it does.
- **User-defined methods.** Syntax, invoking a method, pure against impure, actual against formal parameters, multiple methods in one class. The Section B question that gives a class skeleton and asks for its methods.
- **Constructors.** Types, uses, and the difference from a method; why a constructor runs when an object is created and what happens with parameters. A favourite two-mark difference in Section A.

- **Library classes.** Wrapper classes and their methods, autoboxing and unboxing, the character and string methods Section A loves to ask outputs for.
- **Encapsulation.** Access specifiers, visibility rules, scope of variables. The unit where private, public and default become answers to why a program does or does not compile.
- **Arrays.** Single and double dimensional arrays, declaration, initialisation, accepting data, and the search techniques, linear and binary. A guaranteed Section B program.
- **String handling.** The String class and its methods, extracting and modifying characters, implementing methods by hand. Reversals, palindromes, counting vowels and words: the other guaranteed Section B program.

Q4. Why writing beats memorising in Section B

## The same fifteen-mark question, answered by two students

A Section B question asks for a program that prints a number triangle. Watch what happens when the examiner's version is turned upside down.

***The memorised program**reproduced from a file*

```
class Pattern {
  public static void main(String args[]) {
    for (int i = 1; i <= 4; i++) {
      for (int j = 1; j <= i; j++)
        System.out.print(j);
      System.out.println();
    }
  }
}
// prints 1 / 12 / 123 / 1234
// Exam asks: print 1234 / 123 / 12 / 1
// The student rewrites the same loops
// three times. It never inverts.
```

The program is correct and useless: it answers last year's question. The student knows what it prints but not why, so a reversed pattern is a new problem instead of the same one.

***The understood program**written on a Wednesday*

```
class Pattern {
  public static void main(String args[]) {
    for (int i = 4; i >= 1; i--) {
      for (int j = 1; j <= i; j++)
        System.out.print(j);
      System.out.println();
    }
  }
}
// Variable description
// i  int  row number, counts down 4 to 1
// j  int  value printed, 1 up to i
// One line changed, because the student
// knows i is the row and j is the value.
```

Same program, one loop header reversed, and a variable description table that earns the presentation marks and proves the student knows which variable does what.

Nothing separates the two students except the question they can answer: not what does this print, but what does each variable do. Wednesdays are built to install that question, one program at a time. The families of programs Section B draws from, patterns, menus, arrays, strings, classes with methods and constructors, have their own practice page at [ICSE Class 10 Java programs practice](/icse-class-10-java-programs-practice).

Q5. How are the 100 internal marks banked?

## Twenty assignments, one project and an external examiner, planned across the year

1. #### The lab file grows one assignment a week from the first month

  At least twenty assignments are required; the batch produces closer to twenty-five, because Wednesday's program is the week's assignment and there are more Wednesdays than that in a year. Each is written by the student, run in BlueJ, and checked before it goes into the file with its variable description and output.
2. #### The project is scoped early and drafted in the second term

  The internal assessment includes a written project, and a project drafted in October and revised in November is a different thing from one assembled the week before the external examiner arrives. We help the student choose a topic they can talk about for ten minutes, because that is exactly what will be asked of them.
3. #### Every program is explained aloud, every week

  Half of the internal marks come from an examiner who was not there when the work was done. The habit that earns those marks is the one built every Wednesday: after writing a program, the student says in two sentences what it does and why one line matters. By the time the examiner asks, it is routine.
4. #### A timed practical mock in the second term

  An unseen problem, solved end to end in BlueJ under time, with the camera on: reading the question, writing the class, compiling, fixing the errors, testing with awkward inputs. The first one is hard and the third is ordinary, which is the whole idea.
5. #### A dress rehearsal before the school's practical day

  File reviewed assignment by assignment, project questioned, one program written and explained to a teacher the student has not met. Students walk into the real assessment having already done it once.

The BlueJ-specific habits that make all of this smoother, from installation to reading compiler errors, are on [ICSE Class 10 BlueJ coaching](/icse-class-10-bluej-java-coaching), and the theory paper's countdown is on [board exam preparation](/icse-class-10-computer-applications-board-exam-preparation).

Q6. Why a mini batch, and is it right for my child?

## Four or five students, because Java is taught by reading code

### Why the batch is small

A teacher can explain a concept to thirty students at once; a teacher can read only a few screens at once. Java is learned in the seconds between typing a line and seeing what it does, and a mini batch is the largest group in which every one of those seconds has a teacher watching. That is the whole reason this batch is four or five rather than eight.

### It suits

A Class 10 student who has Computer Applications this year and wants Section B programs to come from their own head. A student who found Class 9 Java went past them too fast in school. A student who is comfortable in class and would like more of the teacher's attention on their code than a larger group can offer.

### It does not suit

A student who wants recordings to replay; every session is live and attended, because the programs lab cannot be watched. Nor a family looking for a two-week pre-board blast; the lab file and the project are a year's work by design, and the batch's value is in the weeks, not the fortnight.

Q7. What does it cost?

## Monthly fees, with the Tuesday and Wednesday mini batch featured

Billed monthly, no admission fee, stop at any month end. The free demo class comes first.

Mini batch · Tue 5:30 PM and Wed 8 PM

₹2,999

per month

- Four or five students, one teacher all year
- Two live sessions a week, theory and programs lab
- Lab file, project and practical mocks included
- Certificate on completion

Book the free demo

One to one

₹4,999

per month

- Private teaching on your own schedule
- Every program read line by line as it is written
- The usual choice for a late start in the board year

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

[ICSE Computer Applications syllabus/icse-class-10-computer-applications-syllabus-explained](/icse-class-10-computer-applications-syllabus-explained)[ICSE Java programs practice/icse-class-10-java-programs-practice](/icse-class-10-java-programs-practice)[ICSE BlueJ Java coaching/icse-class-10-bluej-java-coaching](/icse-class-10-bluej-java-coaching)[ICSE board exam preparation/icse-class-10-computer-applications-board-exam-preparation](/icse-class-10-computer-applications-board-exam-preparation)[CBSE Class 10 AI classes/cbse-class-10-ai-classes-online](/cbse-class-10-ai-classes-online)[CBSE 417 syllabus explained/cbse-class-10-ai-syllabus-explained](/cbse-class-10-ai-syllabus-explained)[Python for CBSE Class 10 AI/python-for-cbse-class-10-ai](/python-for-cbse-class-10-ai)[CBSE AI board exam preparation/cbse-class-10-ai-board-exam-preparation](/cbse-class-10-ai-board-exam-preparation)[CBSE AI project and practical file/cbse-class-10-ai-project-and-practical-file](/cbse-class-10-ai-project-and-practical-file)

Questions parents ask

## About the Tuesday and Wednesday Java mini batch

### Which version of BlueJ and Java do you teach in?

BlueJ, the environment ICSE schools use and the one the board paper names, on a current Java. We help every family install BlueJ version 5.4 or later on JDK 11 or later in the first class, on Windows or Mac, so that what the student sees at home matches what they see in the school lab. Nothing else is needed: no paid software, no online IDE accounts, and no dependence on a school machine for practice.

### Does the batch revise the Class 9 syllabus too?

Yes, because the Class 10 syllabus begins with Revision of Class IX syllabus as its first unit and the board paper draws on it freely: object-oriented ideas, data types, operators, conditional and iterative constructs. The first weeks of the batch rebuild that foundation through programs rather than notes, so a student who found Class 9 shaky arrives at the Class 10 units with the basics actually working.

### Are Tuesday 5:30 PM and Wednesday 8 PM fixed?

Yes, for this mini batch: Tuesday at 5:30 PM Indian Standard Time for concepts and Section A technique, Wednesday at 8:00 PM for the programs lab in BlueJ. Two different times on purpose, so that a student with a sports or tuition clash on one evening can usually still make the other. One to one runs on a schedule set with you, and a larger group batch runs at other timings; the mentor who calls will lay out what is open.

### How many students are in the mini batch?

A few, four or five, and never more, because Java is taught by reading each student's code on screen while they write it. In a batch that small the teacher sees every missing semicolon, every off-by-one loop and every misplaced brace as it happens, which is how a Section B program becomes something the student can write alone under time rather than something they watched being written.

### Is Java too hard for a Class 10 student who has never coded?

No, and ICSE has been proving it for years: Computer Applications is designed as a first programming course, and thousands of Class 10 students write real Java for it every session. The difficulty is not the language but the way it is often taught, as programs to reproduce. Taught as a language, with each concept tried in a small program the same day, it is a subject most students come to enjoy, and one where a student who understands pulls far ahead of one who memorises.

### What is the difference between Section A and Section B of the paper?

Section A is 40 compulsory marks of short answers across the whole syllabus: definitions, outputs of small code fragments, differences, corrections of errors, and predictions of what a loop does. Section B is 60 marks of programs, any four of the questions offered at 15 marks each, written in Java with variable descriptions so the logic is clear, and the board notes that flowcharts and algorithms are not required. The batch drills both, on different days, because they need different skills.

### What is the variable description table, and does it carry marks?

Section B answers are expected to be written using variable descriptions or mnemonic codes so that the logic of the program is clearly depicted, which in practice means a short table listing each variable, its type and its purpose alongside the program. Students who write it earn the presentation marks and, more usefully, catch their own undeclared or misused variables while filling it in. We teach it as part of writing a program, not as an afterthought.

### What does the 100-mark internal assessment involve?

Practical lab work and a project. Students must complete at least 20 lab assignments in the year, and prepare a project; the assessment is shared between an internal teacher and an external examiner, 50 marks each. The batch builds the assignments across the Wednesday labs from the first month and drafts the project in the second term, so the student meets the external examiner with work they wrote and can explain.

### We are an ICSE family in the Gulf. Do the timings work?

Tuesday 5:30 PM IST is 4:00 PM in the UAE and Oman and 3:00 PM in Saudi Arabia, Qatar, Kuwait and Bahrain; Wednesday 8:00 PM IST is 6:30 PM and 5:30 PM respectively. The Tuesday slot suits families whose school day ends early, and the Wednesday slot suits everyone else. The syllabus is the same CISCE Computer Applications your school follows, and the fee is shown on this page in your own currency.

### What happens after I send the form?

A mentor calls within a few hours to book a free demo class at a time that suits you. The demo is a real Wednesday-style lab: the student writes a short Java program in BlueJ with the teacher, runs it, fixes the first error themselves and explains what it does. You watch, you see the mini batch format working on your own child, and you decide afterwards with no card and no enrolment fee involved.

Start

## The free demo is a real BlueJ lab

Book it and your child opens BlueJ with the teacher, writes a short class from scratch, compiles it, meets the first red error message and fixes it themselves, then explains in a sentence what the program does. You watch from the next chair. Afterwards you know whether your child and this teacher work well together, and whether two evenings a week in a room of four or five is the right shape for the board year. Then you decide, at your own pace.

Rather read first? The [syllabus explained](/icse-class-10-computer-applications-syllabus-explained) walks all eight units with what the paper asks, and [coding for ICSE students](/coding-for-icse-students) covers the road from Class 9 to ISC.

[WhatsApp us](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders.%20I%20want%20to%20know%20about%20the%20ICSE%20Class%2010%20Java%20mini%20batch%20on%20Tuesday%20and%20Wednesday.) · [+91 91233 66161](tel:+919123366161) · [connect@modernagecoders.com](mailto:connect@modernagecoders.com)

Every session is a live video class. Sending the form books a callback and nothing else; no seat is reserved or lost by it.

---

*Canonical: https://learn.modernagecoders.com/icse-class-10-java-classes-online*
