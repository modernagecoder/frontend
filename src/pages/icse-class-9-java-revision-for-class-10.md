---
title: "Class 9 Java Revision for Class 10 ICSE, with Drills"
description: "Class 9 Java revision for Class 10 ICSE (2027): which Class 9 topics the Class 10 paper re-tests, quick drills on each, all run in Java 21, and a plan."
canonical: https://learn.modernagecoders.com/icse-class-9-java-revision-for-class-10
source: src/pages/icse-class-9-java-revision-for-class-10.html
updated: 2026-10-13
---

> Class 9 Java comes back in full in the ICSE Class 10 paper. The 2026-27 Class 10 syllabus begins with a revision of Class 9: OOP concepts, objects and classes, values and data types, operators, Scanner input, Math library methods, if and switch, loops and nested for loops. In the 2027 paper these return as Section A MCQs, outputs and definitions, and as the building blocks of every Section B program. Revise them with short drills: predict, run, correct. Modern Age Coders runs this revision live: an evening mini batch on Tuesdays and Wednesdays inside India, or personalised one to one lessons at a time you pick.

## ICSE Class 9 computer topics in Class 10: where each one comes back

All of the programming units of Class 9 are listed in the Class 10 revision unit, so all of them can be examined in 2027. The table shows how each one usually shows up in the paper's two sections.

- Class 9 unit | Section A (40 marks, compulsory) | Section B (any 4 of 6)

- Introduction to OOP concepts | Definitions: abstraction, encapsulation, inheritance, polymorphism | Not asked on its own

- Objects and classes | Object, class, state and behaviour | Every program is a class

- Values and data types | Sizes, literals, escape sequences, type conversion | Choosing int, long, double, char

- Operators in Java | Outputs with increments, %, ternary, precedence | Every calculation

- Input in Java | Scanner methods, types of error | Every accept or input method

- Mathematical library methods | Return types and outputs, writing expressions | Roots, powers, rounding inside programs

- Conditional constructs | Outputs of if, switch and fall-through | Slab, menu and number-check programs

- Iterative constructs | Loop counts, loop conversion, break and continue | Digit, series and number programs

- Nested for loops | Iteration counts and short outputs | Patterns and series

- Computing and Ethics | Not in the Class 10 revision list we checked; revise it only if your school asks

### Section A leans on Class 9
Much of Question 1 and Question 2 can be answered with Class 9 knowledge alone: types, operators, Math return types and loop counts.

### Section B is built on it
Arrays, Strings and classes are Class 10 topics, but every one of those programs runs on Class 9 loops, conditions and input.

### Gaps show up late
A shaky Class 9 basic usually appears as a "silly mistake" in a Class 10 program. Fixing the basic fixes the mistake.

How the whole 2027 syllabus is laid out, Class 10 units included, is on [the ICSE Computer Applications syllabus explained](/icse-class-10-computer-applications-syllabus-explained).

## Java basics ICSE: values, data types and type conversion drill

Java has eight primitive types, and Class 10 questions mostly test their sizes, their defaults and what happens when one type is converted to another. Learn the table, then try the drill.

- Type | Size | Default value as a member | Example literal

- byte | 1 byte | 0 | 100

- short | 2 bytes | 0 | 30000

- int | 4 bytes | 0 | -45

- long | 8 bytes | 0 | 3000000000L

- float | 4 bytes | 0.0 | 2.5f

- double | 8 bytes | 0.0 | 2.5

- char | 2 bytes | the character with code 0 | 'Q'

- boolean | true or false only | false | true

### Drill: predict, then check

- # | Code | Output | Class 9 rule

- 1 | float f = 7 / 4;System.out.println(f); | 1.0 | 7 / 4 is int division (1); widening to float only adds .0

- 2 | char c = 66;System.out.println(c + "" + (c + 1)); | B67 | An int can be stored in a char as a code; c + 1 is int arithmetic

- 3 | System.out.println((char) ('a' - 32) + " " + (int) 'z'); | A 122 | Upper and lower case letters are 32 codes apart

- 4 | System.out.println(10 / 4 * 4.0 + " " + 10 / 4.0 * 4); | 8.0 10.0 | Where the double enters the expression decides what is lost

- 5 | byte b = 10;b += 120;System.out.println(b); | -126 | A byte holds at most 127; the shorthand casts silently and the value wraps round

- 6 | System.out.println(0.1 + 0.2); | 0.30000000000000004 | Most decimals are stored approximately in a double

- Implicit conversion (widening) happens automatically from a smaller type to a larger one: int to long, int to double.

- Explicit conversion (casting) is written by the programmer, as in (int) 9.8, which gives 9: the fraction is cut, not rounded.

- In a mixed expression every value is promoted to the widest type present before the operator works.

- Escape sequences such as \n, \t and \" put a new line, a tab and a double quote inside a String.

This unit and Scanner input have their own deep page: [data types and input in Java for ICSE](/icse-class-10-data-types-and-input-java).

## Revision of Class 9 syllabus ICSE computer: operators, Scanner input and errors

Operators return as output questions, Scanner returns in every Section B program, and the three types of error return as definitions. One drill covers all three.

### Operator drill

- # | Code (with int p = 9, q = 4;) | Output | Rule

- 7 | System.out.println(p % q + p / q * q); | 9 | 1 + 8: remainder plus the part divided out gives back p

- 8 | System.out.println((p > q ? p - q : q - p) + " " + (p != q && q > 5)); | 5 false | Ternary picks a branch; && needs both sides true

- 9 | int z = 2;z *= z + 3;System.out.println(z); | 10 | The whole right side is worked first: 2 &times; 5

- 10 | int w = 5;int v = w-- * 2 + --w;System.out.println(v + " " + w); | 13 3 | 5 &times; 2, then w goes 4 and 3; 10 + 3

- 11 | System.out.println(-17 % 5 + " " + 17 % -5 + " " + 5.5 % 2); | -2 2 1.5 | The remainder takes the sign of the left operand; % works on doubles too

### The Scanner trap every Class 10 student meets

```
Scanner sc = new Scanner(System.in);
System.out.print("Roll number: ");
int roll = sc.nextInt();
System.out.print("Full name: ");
String name = sc.nextLine();
System.out.println("[" + roll + "][" + name + "]");

// Typed: 14, Enter, Anya Bose, Enter
// Output:
Roll number: Full name: [14][]
```

```
Scanner sc = new Scanner(System.in);
System.out.print("Roll number: ");
int roll = sc.nextInt();
sc.nextLine();                 // throw away the Enter
System.out.print("Full name: ");
String name = sc.nextLine();
System.out.println("[" + roll + "][" + name + "]");

// Same input. Output:
Roll number: Full name: [14][Anya Bose]
```

### Syntax, runtime and logical errors

- Error | When it is found | Example we ran | What Java said

- Syntax error | At compile time; the program never runs | int a = 5 with no semicolon | Semi.java:3: error: ';' expected

- Runtime error | While running; the program stops | total / count with count 0 | java.lang.ArithmeticException: / by zero

- Runtime error | While running, on bad input | "fourteen" typed for nextInt() | java.util.InputMismatchException

- Logical error | Never reported; the output is simply wrong | avg = a + b / 2 for a = 8, b = 6 | Prints 11 instead of 7, with no message

Operators have a full page of their own: [operators in Java for ICSE Class 10](/icse-class-10-operators-in-java). The ten Math methods, also Class 9 content, are on [Math library methods for ICSE](/icse-class-10-math-library-methods).

## Conditional and iterative constructs: the Class 9 drill for Class 10

Conditions and loops are where Class 9 matters most, because every Class 10 program uses them. Revise them as three skills: choosing the right construct, counting passes exactly, and converting one loop into another.

- # | Code | Output | Rule

- 12 | int s = 0;for (int i = 2; i <= 20; i += 6) s += i;System.out.println(s); | 44 | i is 2, 8, 14 and 20; 26 fails the test

- 13 | int n = 1;while (n < 100) n *= 3;System.out.println(n); | 243 | 81 is still below 100, so one more pass runs

- 14 | int k = 0;do { k += 2; } while (k > 50);System.out.println(k); | 2 | An exit-controlled loop runs once even when the test is false

- 15 | for (int i = 1; i <= 10; i++) {  if (i % 3 == 0) continue;  if (i > 7) break;  System.out.print(i + " ");} | 1 2 4 5 7 | continue skips 3 and 6; break ends the loop at 8

- 16 | int cnt = 0;for (int i = 1; i <= 3; i++)  for (int j = 1; j <= i * 2; j++) cnt++;System.out.println(cnt); | 12 | The inner loop runs 2, 4 and 6 times

- 17 | int m = 3; String sz;switch (m) {  case 1: case 2: sz = "low"; break;  case 3: case 4: sz = "mid"; break;  default: sz = "high";}System.out.println(sz); | mid | Stacked case labels share one block

- 18 | int g = 75;System.out.println(g >= 90 ? "A" : g >= 60 ? "B" : "C"); | B | A nested ternary is read left to right like an if-else ladder

```
int s1 = 0;
for (int i = 1; i <= 15; i += 2)
    s1 += i;

int s2 = 0, j = 1;
while (j <= 15) {
    s2 += j;
    j += 2;
}

int s3 = 0, k = 1;
do {
    s3 += k;
    k += 2;
} while (k <= 15);

System.out.println(s1 + " " + s2 + " " + s3);

// Output:
64 64 64
```

```
for (int i = 0; i < 4; i++) {
    for (int j = 0; j < 4; j++)
        System.out.print((char) ('A' + i + j) + " ");
    System.out.println();
}

// Output:
A B C D
B C D E
C D E F
D E F G
```

Patterns built from nested loops are on [ICSE pattern programs in Java](/icse-class-10-pattern-programs-java), longer loop programs on [loop programs in Java for ICSE](/icse-class-10-loop-programs-java), and switch-based menus on [ICSE menu-driven programs](/icse-class-10-menu-driven-programs).

## A three-week Class 9 Java revision plan for Class 10

Three weeks of short daily sessions, about 40 minutes each, is enough for most students who studied Class 9 properly. Do it early in Class 10, before arrays and Strings, so the new chapters sit on firm ground.

- Week | Units | Daily work | Done when

- 1 | OOP concepts, objects and classes, data types, operators | Say the definitions aloud; ten output questions a day, traced on paper | You can give every type's size and predict mixed-type outputs without a slip

- 2 | Input, errors, Math methods, conditional constructs | Write one short program a day with Scanner and an if-else ladder or switch | You know each Math return type and never lose a line to the nextLine trap

- 3 | Loops, loop conversion, nested loops | Count passes for five loops a day; write one pattern and one digit program | You can convert any for loop to while and do-while and count passes exactly

- Start each session with five minutes on yesterday's mistakes, not new work.

- Trace on paper first, then run in BlueJ. Running first teaches nothing.

- Keep a single page of your own traps; read it before every Class 10 test.

- If one unit keeps going wrong in week 3, give it a fourth week rather than moving on.

The full Class 10 picture, with month-by-month timing, is on [ICSE Computer Applications board exam preparation](/icse-class-10-computer-applications-board-exam-preparation).

## Rebuilding the basics without slowing Class 10 down

Students joining in Class 10 rarely need Class 9 retaught from the start. They need their gaps found quickly and closed, while Class 10 work carries on.

-
**A diagnostic drill first** For a new student, the first few Tuesday 5:30 PM IST classes begin with a brief mixed drill across the Class 9 units. Each student's wrong answers show which units need attention.

-
**Gaps closed in small doses** Ten minutes of each Tuesday class goes to the weakest Class 9 unit in the group, with fresh questions traced on paper and run in BlueJ on a shared screen.

-
**Basics inside Class 10 programs** On Wednesday at 8:00 PM IST, students hand-write a Class 10 program and the mentor marks it line by line using board-style criteria. Slips in types, operators or loops are named as Class 9 slips so students see the link.

-
**Doubt time** Every class keeps time for questions, including ones from school homework on Class 9 topics.

-
**Mocks from December** Full two-hour mock papers test Class 9 and Class 10 content together, the way the 2027 paper will.

With six students at most, every student's Class 9 gaps get looked at individually.

## The courses behind this page

- [ICSE Computer Applications, Java with BlueJ](/courses/icse-computer-applications-java-bluej-course): Two-year ICSE Computer Applications course; Class 10 students in it revise the Class 9 basics through short timed drills.
- [Computer Science Class 11 and 12](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course): For students going on to ISC, where these same basics carry every longer program.
- [Data Structures and Algorithms](/courses/data-structures-algorithms-masterclass-college): For the student who wants loops and conditions to grow into real problem solving.

Families also look at [Java Programming for Teens](/courses/java-programming-masterclass-for-teens), [CBSE Class 10 Maths board exam prep](/courses/cbse-class-10-maths-board-exam-prep-course), [Python for Teens](/courses/python-complete-masterclass-teens), [AI and ML for Teens](/courses/ai-ml-masterclass-teens), [Git and GitHub for Teens](/courses/git-github-version-control-course-for-teens), [Hackathon Prep for Teens](/courses/hackathon-prep-for-teens-coding-ai-build-innovate-win-course), [Full-Stack Web for Teens](/courses/full-stack-web-development-teens-masterclass), [JavaScript for Teens](/courses/javascript-course-for-teens-beginners-interactive-web).

## Batch or personalised, and the fees

Option 1, fixed batch (for families in India): Tuesday at 5:30 PM and Wednesday at 8:00 PM IST, live online, up to six students. Option 2, personalised one to one: days and time chosen by the family; outside India the ICSE course runs one to one only, two private classes a week. Monthly billing, no admission fee, stop at any month end. Fees are shown on the page in the visitor's own currency. The first class is a free demo; a paid priority demo (about 45 to 60 minutes, written skill report afterwards) is also available.

## Class times outside India

- Where you live | Time difference | Usual class window, local time | Format

- India (IST)every Indian city | IST | Tue 5:30 PM, Wed 8:00 PM | Mini batch or 1-on-1

- United Arab EmiratesDubai, Sharjah | 1 h 30 min behind India | 3:00 PM to 9:00 PM | Personalised 1-on-1

- Indonesia and ThailandWest Java, Bangkok area | 1 h 30 min ahead of India | 3:30 PM to 9:00 PM | Personalised 1-on-1

- SingaporeSingapore | 2 h 30 min ahead of India | 3:30 PM to 9:00 PM | Personalised 1-on-1

## Frequently asked questions

**Is the Class 9 syllabus included in the ICSE Class 10 Computer Applications exam?** Yes. The 2026-27 Class 10 syllabus begins with a unit called Revision of Class IX syllabus, covering OOP concepts, objects and classes, data types, operators, input, Math methods, conditional constructs, loops and nested for loops. Questions on these can appear in both sections of the 2027 paper.

**Which Class 9 topics are most important for the Class 10 board exam?** Operators, data types and type conversion, Math method return types, conditional constructs and loops matter most, because they appear directly in Section A and are used in every Section B program. OOP definitions and Scanner input are smaller topics but come up regularly as short questions.

**Is Computing and Ethics from Class 9 asked in the Class 10 paper?** Computing and Ethics is a Class 9 unit, but it is not in the Class 10 revision list we checked in the 2026-27 syllabus. Focus your Class 10 revision on the programming units, and revise ethics only if your school includes it in its own tests.

**How do I revise Class 9 Java quickly for Class 10?** Spend about three weeks on short daily sessions: week one on concepts, data types and operators; week two on input, errors, Math methods and conditions; week three on loops and nested loops. Trace every output on paper before running it, and keep a page of the mistakes you made.

**What are the Java basics for ICSE?** The basics are the Class 9 units: what objects and classes are, the eight primitive data types, operators and their precedence, input with the Scanner class, the Math library methods, if-else and switch, the for, while and do-while loops, and nested for loops. Class 10 adds methods, constructors, arrays, Strings, library classes and encapsulation on top of them.

**What is the difference between a syntax error, a runtime error and a logical error?** A syntax error breaks Java's grammar, such as a missing semicolon, and is caught when compiling. A runtime error stops a running program, such as dividing an int by zero. A logical error produces wrong output with no message at all, such as a wrong formula. Only the logical error must be found by testing.

**Why does nextLine() skip input after nextInt()?** nextInt() reads the number but leaves the Enter key in the input. The next nextLine() reads that leftover empty line immediately, so it seems to be skipped. Add an extra sc.nextLine() after nextInt() to clear it, or read the String before the number.

**Do I need to know data type sizes for ICSE Class 10?** Yes, they are a standard one-mark question. byte is 1 byte, short 2, int 4, long 8, float 4, double 8 and char 2. boolean holds only true or false. Knowing the ranges also explains why a byte variable can wrap round to a negative value.

**Do you teach Class 9 topics in the Class 10 live classes?** Yes. Our ICSE group meets twice a week, at 5:30 PM IST on Tuesday and 8:00 PM IST on Wednesday; a diagnostic drill finds each student's Class 9 gaps, and short weekly drills close them while Class 10 continues. A child who needs more attention can switch to private lessons scheduled around the family.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Tue and Wed ICSE Java batch](/icse-class-10-java-classes-online), [ICSE Java classes in the Gulf and abroad](/icse-class-10-computer-applications-classes-gulf-and-abroad), [ICSE BlueJ Java coaching](/icse-class-10-bluej-java-coaching), [ICSE computer crash course](/icse-computer-applications-crash-course), [ICSE computer tuition in Kolkata](/icse-computer-tuition-kolkata), [ICSE computer tuition in Bangalore](/icse-computer-tuition-bangalore), [ICSE computer tuition in Mumbai](/icse-computer-tuition-mumbai), [1-on-1 private Java tutor](/icse-computer-applications-private-tutor), [ICSE computer tuition in Lucknow](/icse-computer-tuition-lucknow), [ICSE computer tuition in Pune](/icse-computer-tuition-pune), [ICSE computer tuition near me](/icse-computer-tuition-near-me), [The mini batch, explained](/icse-computer-applications-small-batch-classes).

**Chapter by chapter:** [ICSE Computer Applications syllabus](/icse-class-10-computer-applications-syllabus-explained), [User-defined methods and overloading](/icse-class-10-user-defined-methods-overloading), [Constructors](/icse-class-10-constructors-questions), [Wrapper and library classes](/icse-class-10-wrapper-and-library-classes), [Class as the basis of all computation](/icse-class-10-class-as-basis-of-computation), [Encapsulation and access specifiers](/icse-class-10-encapsulation-access-specifiers), [Math library methods](/icse-class-10-math-library-methods), [Operators and expressions](/icse-class-10-operators-in-java), [Loops and loop conversion](/icse-class-10-loop-programs-java), [Data types, input and type casting](/icse-class-10-data-types-and-input-java).

**Programs for Section B:** [ICSE Java programs practice](/icse-class-10-java-programs-practice), [String programs](/icse-class-10-string-programs), [Special number programs](/icse-special-number-programs-java), [Sorting and searching programs](/icse-class-10-sorting-and-searching-programs), [2D array programs](/icse-class-10-2d-array-programs), [Pattern programs](/icse-class-10-pattern-programs-java), [Menu driven and switch case](/icse-class-10-menu-driven-programs), [Series programs](/icse-class-10-series-programs-java), [Slab and bill programs](/icse-class-10-slab-and-bill-programs).

**Questions and practice:** [ICSE CA important questions](/icse-class-10-computer-applications-important-questions), [Specimen paper and mock tests](/icse-class-10-computer-applications-specimen-paper-and-mock-tests), [Previous year papers, solved](/icse-computer-applications-previous-year-papers-solved), [Predict the output questions](/icse-class-10-java-output-questions), [Competency and case study questions](/icse-computer-applications-competency-questions), [MCQ for Question 1](/icse-computer-applications-mcq-questions), [Find the error questions](/icse-class-10-java-error-finding-questions), [Difference between questions](/icse-computer-difference-between-questions).

**Notes and revision:** [Chapter-wise notes](/icse-computer-applications-notes), [Textbook solutions guide](/icse-computer-applications-textbook-solutions-guide), [Worksheets with answers](/icse-computer-applications-worksheets).

**Exam, marks and internal assessment:** [ICSE board exam preparation](/icse-class-10-computer-applications-board-exam-preparation), [Exam date 2027 and paper pattern](/icse-class-10-computer-applications-exam-date-and-paper-pattern), [Project and internal assessment](/icse-class-10-computer-applications-project-and-internal-assessment), [How to score 100](/how-to-score-100-in-icse-computer-applications), [Paper analysis and answer key](/icse-computer-applications-paper-analysis), [Computer or Commercial Applications?](/icse-computer-applications-vs-commercial-applications).

---

*Canonical: https://learn.modernagecoders.com/icse-class-9-java-revision-for-class-10*
