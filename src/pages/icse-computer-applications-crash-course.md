---
title: "ICSE Computer Applications Crash Course 2027, Live"
description: "ICSE Computer Applications crash course for 2027: an eight-week live plan, mock papers marked by a teacher, BlueJ programs checked and doubts cleared."
canonical: https://learn.modernagecoders.com/icse-computer-applications-crash-course
source: src/pages/icse-computer-applications-crash-course.html
updated: 2026-11-06
---

> An ICSE Computer Applications crash course is a short, intense revision of the whole Class 10 Java syllabus before the board paper, built around timed practice rather than fresh lectures. A useful one covers Section A (40 compulsory marks of MCQs and short answers) with daily drills, makes the student write one complete Section B program a week against the clock, and sets full two-hour mock papers that a teacher marks line by line. Modern Age Coders runs this live online over eight weeks, inside the Tuesday 5:30 PM and Wednesday 8:00 PM IST mini batch in India, or as personalised one to one at the family's time.

## What does an ICSE Computer Applications crash course cover, week by week?

It covers the whole syllabus in eight weeks by pairing every revision topic with the exam shape it appears in. Two weeks go to the building blocks, four to the topics Section B leans on, and the last two to full papers under exam conditions.

- Week | Revised | Section A sprint | Timed Section B program | What gets marked

- 1 | Data types, operators, Math methods, input with Scanner | Type promotion and operator precedence, twenty quick items | A program that reads values and prints a formatted result | Accuracy of every printed value and its type

- 2 | if, switch, all three loops, nested loops | Loop counts and switch fall-through traces | A menu-driven program with switch and a default case | Loop bounds, missing breaks, the default branch

- 3 | Class as the basis of computation, user-defined methods, overloading | Pure and impure methods, actual and formal parameters | A class with overloaded methods called from main | Method headers, return types and the calls

- 4 | Constructors, encapsulation, access specifiers, scope | Constructor versus method, private versus public | A class-design question with a constructor, written in full | Data members, constructor, each method, the object in main

- 5 | Single dimensional arrays, linear and binary search, bubble and selection sort | Array default values and index traces | Sort an array, then search it | Swap logic, pass count, search boundaries

- 6 | String methods, character work, wrapper classes, 2D arrays | String method results and Character tests | A word or character counting program on a sentence | Index ranges, case handling, the edge words

- 7 | Mixed revision from the student's own error list | A full Section A in 40 minutes | Full mock paper one, two hours | The whole paper, returned with a written list of lost marks

- 8 | Only the chapters mock one exposed | Second full Section A, then reading time practice | Full mock paper two, two hours | The whole paper, compared against mock one

In one to one, the eight weeks run exactly as written, with the order moved around the student's weakest chapters. In the mini batch, a student who joins late slots into the revision and mock term the batch is already running, and this table becomes their personal checklist for the set work between classes. Each week ends with the same question to the student: which mark did you lose this week, and why?

The paper itself is described on [the ICSE Computer Applications exam date and paper pattern page](/icse-class-10-computer-applications-exam-date-and-paper-pattern), and the 2D array programs that week 6 touches are worked in full on [2D array programs for ICSE Class 10](/icse-class-10-2d-array-programs).

## ICSE Java crash course online: one mock Section B question, answered and marked

Here is the kind of class-design question set in week 4, with a model answer that was compiled and run in Java 21. Below it is the split our teachers use to mark mock answers, so a student sees exactly where a mark leaks.

The question (15 marks). Define a class WaterTank with the data members id (String), length, breadth and height in metres (double) and litres (double). Write a default constructor, a method accept() to read the id and the three measurements, a method compute() to store the capacity in litres (one cubic metre holds 1000 litres), and a method display() to print the capacity and the whole number of minutes a pump filling 40 litres a minute needs, rounded up. Write main to create an object and call the methods.

```
import java.util.Scanner;

public class WaterTank {
    String id;
    double length, breadth, height;
    double litres;

    WaterTank() {
        id = "";
        length = breadth = height = 0.0;
        litres = 0.0;
    }

    void accept() {
        Scanner sc = new Scanner(System.in);
        System.out.print("Tank id: ");
        id = sc.next();
        System.out.print("Length, breadth, height in metres: ");
        length = sc.nextDouble();
        breadth = sc.nextDouble();
        height = sc.nextDouble();
    }

    void compute() {
        litres = length * breadth * height * 1000;
    }

    void display() {
        int minutes = (int) Math.ceil(litres / 40);
        System.out.println("Tank " + id + " holds " + litres + " litres");
        System.out.println("Minutes to fill at 40 litres a minute: " + minutes);
    }

    public static void main(String args[]) {
        WaterTank t = new WaterTank();
        t.accept();
        t.compute();
        t.display();
    }
}

// Input:  T7  2.0 1.5 0.9
// Output: Tank T7 holds 2700.0 litres
//         Minutes to fill at 40 litres a minute: 68
```

- Part of the answer | Marks in our mock split

- Class header and all five data members with correct types | 2

- Default constructor that sets every member | 2

- accept() with Scanner and the right next methods | 3

- compute() with the 1000 litre conversion | 2

- display() with Math.ceil and the cast in the right order | 3

- main creates the object and calls the methods in order | 2

- Variable description and comments | 1

- Total | 15

This split is ours, written so a mock can be marked consistently. It is not an official CISCE scheme; the board's examiners mark to their own instructions for each paper.

### Where crash course students usually lose these marks

- Casting before rounding. (int) (litres / 40) then Math.ceil on an int does nothing useful. The order of the two operations is worth a mark on its own.

- A constructor with a return type. Writing void WaterTank() turns it into an ordinary method, and the object is then built by the compiler's own default constructor.

- Methods written but never called. A correct compute() that main never calls prints 0.0 litres, and the examiner reads main first.

- No variable description. The paper asks for one. Students racing the clock drop it first, and it is the cheapest mark on the page.

More full class-design answers are on [constructors questions for ICSE Class 10](/icse-class-10-constructors-questions), and complete mock papers with their timings are on [the specimen paper and mock tests page](/icse-class-10-computer-applications-specimen-paper-and-mock-tests).

## Last minute ICSE computer classes: how doubts get cleared the same evening

A doubt raised in a crash week is answered before the class ends, usually by running the student's own code on the shared screen. Here is a real kind of doubt, reproduced and explained, followed by others students bring in the last weeks.

```
// Same WaterTank program, different input
// Input:  T7  1.5 1.2 0.85

Tank T7 holds 1529.9999999999998 litres
Minutes to fill at 40 litres a minute: 39
```

### How the teacher answers it

-
**Run it again with whole numbers** 2.0, 1.5 and 0.9 give a clean 2700.0, which shows the logic is sound.

-
**Name the cause in one sentence** double values are stored in binary, and many decimal fractions cannot be stored exactly.

-
**Say what the examiner expects** In the paper, write the output the logic gives for the values in the question. Board questions are usually set with values that come out cleanly.

### Other doubts students bring in the crash weeks

- My program skips the name input after I type a number. Why?
Answer nextInt() leaves the Enter key in the input. A nextLine() straight after it reads that empty line. Add one extra sc.nextLine() before reading the name.

- Can I use a for-each loop in the board paper?
Answer Yes, for reading every element. Use an index loop whenever you need the position or must change the elements, as in sorting.

- Do I have to write import java.util.Scanner if the question gives the input?
Answer If your program reads input with Scanner, the import belongs in the answer. A program that uses fixed values given in the question does not need it.

- Is it wrong to use String instead of char for one letter?
Answer Not wrong, but if the question names a char variable, match it. Character methods such as Character.isLetter take a char, not a String.

- Will I lose marks if my bubble sort uses a different loop limit?
Answer Not if the output is correctly sorted and the logic is a bubble sort. A sort that is really selection sort, when bubble sort was asked, loses marks.

- Is recursion going to be asked?
Answer No. Recursion is not in the ICSE Computer Applications syllabus for the 2027 examination, so the crash plan does not spend time on it.

Doubts about what a fragment prints are a family of their own, sorted by trap on [ICSE Java output questions](/icse-class-10-java-output-questions).

## ICSE computer revision batch: what to revise first when only a few weeks are left

With three or four weeks left, revise in the order the paper rewards: the programs Section B keeps asking for, then the Section A shapes, then the theory you can learn in an evening. Never start a brand new topic in the last fortnight.

- Priority | Topic | Why it comes here | Crash drill

- 1 | Strings and arrays (searching and sorting) | Section B regularly sets a String program and an array program, and each is worth 15 marks | One program of each kind, written from a blank screen, every week

- 2 | Class design with a constructor | A common Section B shape that also tests methods and objects in one go | The WaterTank shape with a new story each time

- 3 | Loops, menus and number checks | Section B offers a choice of six; a student strong here has a safe fourth answer | Two menu programs and two number programs, timed

- 4 | Output and error questions | Spread across Section A, where all 40 marks are compulsory | A 15-minute trace set every class

- 5 | Definitions and differences | Short and learnable from a list in a few evenings | Ten differences said aloud, then written

### Three weeks left
Weeks 5, 6 and 7 of the plan, with one full mock at the end. Class design is revised inside the mock review rather than on its own.

### Two weeks left
One String program, one array program and one class design, each written twice, plus two full Section A papers. The mock is split into halves on two evenings.

### One week left
No new programs. Rewrite the four programs the student already knows best, revise the error list from earlier tests, and sleep before the paper.

A condensed one-pass revision of every chapter is on [ICSE Computer Applications notes](/icse-computer-applications-notes), and past papers with worked answers are on [ICSE Computer Applications previous year papers, solved](/icse-computer-applications-previous-year-papers-solved).

## ICSE computer one shot live, recorded videos or a tutor: what each gives in the last eight weeks

A one shot video is fine for a quick reminder of theory, but it cannot read a program your child wrote. A live crash course earns its place only if a teacher marks what the student produces. The table compares the formats on the things that change marks in the last weeks.

- Format | Who checks the programs | Full mock marked? | Doubts | Fits when

- Our mini batch, up to six students, India | The teacher, on each shared BlueJ screen | Yes, returned with a list of lost marks | In class, the same evening | Tuesday 5:30 PM and Wednesday 8:00 PM IST suit the family

- Our personalised one to one, India or abroad | The teacher, every line | Yes, and reviewed with the student | In the session | Gaps are large, or the batch times clash

- A large online crash batch | Usually nobody individually | Often an answer key to self-check | Chat queue, if any | The student only needs a theory recap

- A local tutor or coaching centre | Depends on whether there is a computer in the room | Depends on the tutor | In person, at the tutor's times | A trusted tutor with BlueJ is close by

- Recorded one shot videos | No one | No | Comments, not answered in time | Revising theory between live classes

Whatever the format, two questions sort a good crash course from a poor one. Will a teacher read a program my child wrote, under a clock, this week? And will my child get back a marked full paper before the real one? If both answers are yes, the format matters less. How a single one to one session runs is shown on [the ICSE Computer Applications private tutor page](/icse-computer-applications-private-tutor), and the batch itself on [ICSE Computer Applications group classes](/icse-computer-applications-small-batch-classes).

## The courses behind this page

- [ICSE Computer Applications, Java with BlueJ](/courses/icse-computer-applications-java-bluej-course): The course whose revision term the crash plan follows: Section A sprints on Tuesday, a timed program on Wednesday and full mocks marked by the teacher.
- [Class 10 Maths board exam prep](/courses/cbse-class-10-maths-board-exam-prep-course): For the student whose Maths revision is as tight as Computer Applications: timed papers, marked working and a plan for the weeks left.
- [Computer Science Class 11 and 12](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course): For the student who discovers in the crash weeks that they like Java and want to take Computer Science in Class 11.

Families also look at [Java Programming for Teens](/courses/java-programming-masterclass-for-teens), [Data Structures and Algorithms](/courses/data-structures-algorithms-masterclass-college), [Python for Teens](/courses/python-complete-masterclass-teens), [AI and ML for Teens](/courses/ai-ml-masterclass-teens), [Git and GitHub for Teens](/courses/git-github-version-control-course-for-teens), [Hackathon Prep for Teens](/courses/hackathon-prep-for-teens-coding-ai-build-innovate-win-course), [Full-Stack Web for Teens](/courses/full-stack-web-development-teens-masterclass), [JavaScript for Teens](/courses/javascript-course-for-teens-beginners-interactive-web).

## Batch or personalised, and the fees

Option 1, fixed batch (for families in India): Tuesday at 5:30 PM and Wednesday at 8:00 PM IST, live online, up to six students. Option 2, personalised one to one: days and time chosen by the family; outside India the ICSE course runs one to one only, two private classes a week. Monthly billing, no admission fee, stop at any month end. Fees are shown on the page in the visitor's own currency. The first class is a free demo; a paid priority demo (about 45 to 60 minutes, written skill report afterwards) is also available.

## Class times outside India

- Where you live | Time difference | Usual class window, local time | Format

- India (IST)every Indian city | IST | Tue 5:30 PM, Wed 8:00 PM | Mini batch or 1-on-1

- United Arab EmiratesDubai, Sharjah | 1 h 30 min behind India | 3:00 PM to 9:00 PM | Personalised 1-on-1

- Indonesia and ThailandWest Java, Bangkok area | 1 h 30 min ahead of India | 3:30 PM to 9:00 PM | Personalised 1-on-1

- SingaporeSingapore | 2 h 30 min ahead of India | 3:30 PM to 9:00 PM | Personalised 1-on-1

## Frequently asked questions

**Is there a crash course for ICSE Computer Applications?** Yes. Modern Age Coders runs an eight-week live crash plan for ICSE Class 10 Computer Applications. In India it runs inside the Tuesday 5:30 PM and Wednesday 8:00 PM IST mini batch during its revision and mock term; anywhere, it can run as personalised one to one at the family's time. The first class is a free demo.

**How many weeks does an ICSE computer crash course need?** Eight weeks covers the whole syllabus once with two full marked mocks. Six weeks works if the student already writes programs comfortably. With three weeks or fewer, revise only strings, arrays and class design for Section B plus timed Section A sets, and do not start any new topic.

**Can I finish ICSE Computer Applications in one month?** A student who followed the subject through the year can revise it in a month: two weeks on strings, arrays and class design, one week of Section A sets, and a final week of two full mock papers. A student who skipped whole chapters needs those chapters taught first, which is slower.

**What is the difference between a one shot video and a live crash course?** A one shot video recaps the theory in one sitting and is useful for reminders. It cannot read your child's program or mark a mock. A live crash course makes the student write programs under a clock and has a teacher mark them, which is where the Section B marks are won.

**Are mock papers included in the crash course?** Yes. Weeks 7 and 8 are two full two-hour mock papers, each marked by a teacher and returned with a written list of the marks lost and why. Shorter timed Section A sets and one timed Section B program happen every week before that.

**How are mock answers marked in the crash course?** Each Section B answer is marked against a written split of its 15 marks: the class and members, the constructor, each method, main and the variable description. This split is our own, used so marking is consistent; it is not an official CISCE scheme.

**Which chapters should I revise first for ICSE Computer Applications?** Strings and arrays first, because Section B regularly asks for both and each program is worth 15 marks. Then class design with a constructor, then loops and menu programs, then output and error questions for Section A, and definitions last because they can be learnt quickly.

**Do last minute ICSE computer classes work for students abroad?** Yes. Outside India the crash plan is taught one to one at an evening hour in the student's own time zone, with the same mock papers and the same marking. The weeks are counted back from the date of the student's paper, and a mock can be sat at the hour of day the real paper will be. The mini batch is for families in India.

**Is recursion part of the crash course?** No. Recursion is not examined in ICSE Computer Applications for 2027, so the crash plan leaves it out and spends that time on strings, arrays, 2D arrays, wrapper classes and class design. If a guide book or video lists recursion as revision, treat it as extra reading for ISC, not as part of this paper.

**How do I join the crash course?** Book the free demo on this page. In the demo your child writes a short program under a clock and the teacher marks it on screen. You then hear which weeks of the plan matter most and whether the mini batch or one to one fits the time left.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Tue and Wed ICSE Java batch](/icse-class-10-java-classes-online), [ICSE Java classes in the Gulf and abroad](/icse-class-10-computer-applications-classes-gulf-and-abroad), [ICSE BlueJ Java coaching](/icse-class-10-bluej-java-coaching), [ICSE computer tuition in Kolkata](/icse-computer-tuition-kolkata), [ICSE computer tuition in Bangalore](/icse-computer-tuition-bangalore), [ICSE computer tuition in Mumbai](/icse-computer-tuition-mumbai), [1-on-1 private Java tutor](/icse-computer-applications-private-tutor), [ICSE computer tuition in Lucknow](/icse-computer-tuition-lucknow), [ICSE computer tuition in Pune](/icse-computer-tuition-pune), [ICSE computer tuition near me](/icse-computer-tuition-near-me), [The mini batch, explained](/icse-computer-applications-small-batch-classes).

**Chapter by chapter:** [ICSE Computer Applications syllabus](/icse-class-10-computer-applications-syllabus-explained), [User-defined methods and overloading](/icse-class-10-user-defined-methods-overloading), [Constructors](/icse-class-10-constructors-questions), [Wrapper and library classes](/icse-class-10-wrapper-and-library-classes), [Class as the basis of all computation](/icse-class-10-class-as-basis-of-computation), [Encapsulation and access specifiers](/icse-class-10-encapsulation-access-specifiers), [Math library methods](/icse-class-10-math-library-methods), [Operators and expressions](/icse-class-10-operators-in-java), [Loops and loop conversion](/icse-class-10-loop-programs-java), [Data types, input and type casting](/icse-class-10-data-types-and-input-java), [Class 9 Java revision for Class 10](/icse-class-9-java-revision-for-class-10).

**Programs for Section B:** [ICSE Java programs practice](/icse-class-10-java-programs-practice), [String programs](/icse-class-10-string-programs), [Special number programs](/icse-special-number-programs-java), [Sorting and searching programs](/icse-class-10-sorting-and-searching-programs), [2D array programs](/icse-class-10-2d-array-programs), [Pattern programs](/icse-class-10-pattern-programs-java), [Menu driven and switch case](/icse-class-10-menu-driven-programs), [Series programs](/icse-class-10-series-programs-java), [Slab and bill programs](/icse-class-10-slab-and-bill-programs).

**Questions and practice:** [ICSE CA important questions](/icse-class-10-computer-applications-important-questions), [Specimen paper and mock tests](/icse-class-10-computer-applications-specimen-paper-and-mock-tests), [Previous year papers, solved](/icse-computer-applications-previous-year-papers-solved), [Predict the output questions](/icse-class-10-java-output-questions), [Competency and case study questions](/icse-computer-applications-competency-questions), [MCQ for Question 1](/icse-computer-applications-mcq-questions), [Find the error questions](/icse-class-10-java-error-finding-questions), [Difference between questions](/icse-computer-difference-between-questions).

**Notes and revision:** [Chapter-wise notes](/icse-computer-applications-notes), [Textbook solutions guide](/icse-computer-applications-textbook-solutions-guide), [Worksheets with answers](/icse-computer-applications-worksheets).

**Exam, marks and internal assessment:** [ICSE board exam preparation](/icse-class-10-computer-applications-board-exam-preparation), [Exam date 2027 and paper pattern](/icse-class-10-computer-applications-exam-date-and-paper-pattern), [Project and internal assessment](/icse-class-10-computer-applications-project-and-internal-assessment), [How to score 100](/how-to-score-100-in-icse-computer-applications), [Paper analysis and answer key](/icse-computer-applications-paper-analysis), [Computer or Commercial Applications?](/icse-computer-applications-vs-commercial-applications).

---

*Canonical: https://learn.modernagecoders.com/icse-computer-applications-crash-course*
