---
title: "ICSE Computer Applications Output Questions 2027, Solved"
description: "ICSE Computer Applications output questions for 2027: 44 predict the output Java snippets sorted by trap, answers run in Java, with dry run trace tables."
canonical: https://learn.modernagecoders.com/icse-class-10-java-output-questions
source: src/pages/icse-class-10-java-output-questions.html
updated: 2026-10-13
---

> ICSE Computer Applications output questions give a short Java fragment and ask exactly what it prints. They sit in Section A, the 40 compulsory marks, as one-mark MCQs and two-mark answers. Almost all of them test the same traps: integer division and type promotion, pre and post increment, char arithmetic, String methods and immutability, Math return types, loop counts, switch fall-through, the ternary operator, short-circuit && and ||, array default values and wrapper methods. The reliable method is a written trace table, never a guess. Modern Age Coders drills these live in a Tuesday and Wednesday mini batch in India, or personalised one to one.

## Predict the output Java ICSE: division, increments and char arithmetic

Cover the Output column, write your answer, then check. Each row names the rule, so a wrong answer tells you exactly what to revise.

### Trap 1: integer division and type promotion

- # | Code | Output | The trap

- 1 | int a = 17, b = 5;double d = a / b;System.out.println(d); | 3.0 | 17 / 5 is worked out as int first (3); only then is it widened to 3.0

- 2 | System.out.println(1 + 2 + "3" + 4 + 5); | 3345 | Left to right: 1 + 2 is 3, then the String takes over and every later + joins

- 3 | System.out.println((double) (9 / 4) + " " + (double) 9 / 4); | 2.0 2.25 | Cast after the division keeps the lost fraction lost; cast before saves it

- 4 | System.out.println(-7 / 2 + " " + -7 % 2); | -3 -1 | Integer division cuts towards zero; the remainder takes the sign of the left operand

### Trap 2: pre and post increment, and compound assignment

- # | Code | Output | The trap

- 5 | int a = 5;int b = a++ + ++a;System.out.println(a + " " + b); | 7 12 | a++ gives 5 then a is 6; ++a makes a 7 and gives 7; b is 5 + 7

- 6 | int k = 3;k = k++;System.out.println(k); | 3 | The old value 3 is saved, k becomes 4, then the assignment writes 3 back

- 7 | int m = 10, n = 3;m -= n-- - --n;System.out.println(m + " " + n); | 8 1 | n-- gives 3 (n is 2), --n gives 1; m is 10 - (3 - 1)

- 8 | int y = 7;y /= 2.0;System.out.println(y); | 3 | A compound operator casts back to int silently: (int) 3.5 is 3

### Trap 3: char arithmetic and casting

- # | Code | Output | The trap

- 9 | char ch = 'a';ch++;System.out.println(ch + 1); | 99 | ch++ keeps the char type ('b'), but ch + 1 is int arithmetic: 98 + 1

- 10 | char c = '7';int n = c - '0';System.out.println(n * 2 + " " + c * 2); | 14 110 | c - '0' turns a digit character into its value; c * 2 doubles the code 55

- 11 | char p = 'P';System.out.println(p + 2 + "" + (char) (p + 2)); | 82R | 80 + 2 is added before the empty String arrives; the cast turns 82 back into R

```
int x = 4;
x += x++ * --x;
System.out.println(x);

// Output: 20
```

- Step | Value used | x after

- Save left x | 4 | 4

- x++ | 4 | 5

- --x | 4 | 4

- 4 * 4 | 16 | 4

- 4 + 16 assigned | 20 | 20

Precedence and the rest of this family are on
[operators in Java for ICSE Class 10](/icse-class-10-operators-in-java).

## ICSE Java output questions with answers: Strings, Math and wrapper classes

Two facts settle most of these. A String never changes after it is made, so a method returns a new String that must be stored. And every Math method has a fixed return type, so the number of decimal places in the answer is part of the answer.

### Trap 4: String methods and String immutability

- # | Code | Output | The trap

- 13 | String s = "board";s.toUpperCase();s.concat("exam");System.out.println(s); | board | Both results were thrown away; s still points to "board"

- 14 | String t = "MISSISSIPPI";System.out.println(t.indexOf("SS", 3) + " " + t.lastIndexOf('I', 7)); | 5 7 | The search starts at index 3, so the SS at 2 is skipped; lastIndexOf searches backwards from 7

- 15 | String w = "  Java Exam  ";System.out.println(w.trim().length() + w.length()); | 22 | 9 + 13: two ints are added. trim removes only the outer spaces

- 16 | String a = "ICSE", b = "icse";System.out.println(a.equals(b) + " " + a.equalsIgnoreCase(b) + " " + a.compareToIgnoreCase(b)); | false true 0 | Case matters to equals only; 0 means equal when case is ignored

- 17 | String s = "CAT";System.out.println(s.compareTo("CATALOG")); | -4 | No character differs, so compareTo returns the difference in lengths: 3 - 7

- 18 | static void change(String s) {  s = s + "!";  System.out.print(s + " ");}// in main:String s = "Hi";change(s);System.out.println(s); | Hi! Hi | The method builds a new String in its own copy of s; the caller's s is untouched

### Trap 5: Math method return types

- # | Code | Output | The trap

- 19 | System.out.println(Math.sqrt(16) + Math.cbrt(27)); | 7.0 | sqrt and cbrt always return double, even for perfect squares and cubes

- 20 | System.out.println(Math.pow(2, 3) + " " + (int) Math.pow(2, 3)); | 8.0 8 | pow returns double; only the cast removes the .0

- 21 | System.out.println(Math.max(3, 7.5) + " " + Math.min(-2, -2.0)); | 7.5 -2.0 | Mix an int with a double and the int is promoted, so the result is double

- 22 | System.out.println(Math.floor(-3.5) + " " + Math.round(3.49) + " " + Math.round(-3.51)); | -4.0 3 -4 | floor goes down and returns double; round of a double returns a long, so no .0

### Trap 6: wrapper classes and Character methods

- # | Code | Output | The trap

- 23 | System.out.println(Character.isLetterOrDigit('_') + " " + Character.isWhitespace('\t')); | false true | The underscore is neither a letter nor a digit; a tab counts as whitespace

- 24 | char c = Character.toUpperCase('5');System.out.println(c + 1); | 54 | toUpperCase leaves a digit alone; '5' is code 53, plus 1

- 25 | String n = "25";System.out.println(n + 5 + " " + (Integer.parseInt(n) + 5) + " " + Integer.valueOf(n) / 2); | 255 30 12 | Joined, then added, then unboxed and divided as int

- 26 | System.out.println(Double.parseDouble("3") / 2 + Integer.toString(70).length()); | 3.5 | 1.5 plus the length of "70", which is 2

The full list of Math methods in the syllabus, with return types, is on
[Math library methods for ICSE Class 10](/icse-class-10-math-library-methods), and
autoboxing, parse methods and the Character tests are on
[wrapper and library classes](/icse-class-10-wrapper-and-library-classes).

## Loop output questions ICSE: iteration counts and nested loops

Loop questions ask for the output, the number of passes, or both. Never count in your head. Write one row per pass with every variable that changes.

### Trap 7: how many times does it run?

- # | Code | Output | The trap

- 27 | int c = 0;for (int i = 10; i > 0; i -= 3) c++;System.out.println(c); | 4 | i takes 10, 7, 4 and 1; at -2 the test fails

- 28 | int n = 50;do { n += 5; } while (n < 10);System.out.println(n); | 55 | A do-while body always runs once before the condition is checked

- 29 | int t = 0;for (int i = 0; i < 5; i++);{ t++; }System.out.println(t); | 1 | The semicolon is the whole loop body; the block after it runs once

- 30 | for (int i = 1; i <= 3; i++) {  for (int j = i; j <= 3; j++)    System.out.print(j);  System.out.println();} | 123233 | The inner loop starts at i, so each line is one shorter and starts one higher

```
int n = 3047, r = 0;
while (n > 0) {
    r = r * 10 + n % 10;
    n /= 10;
}
System.out.println(r);

// Output: 7403
```

- Pass | n % 10 | r | n after

- 1 | 7 | 7 | 304

- 2 | 4 | 74 | 30

- 3 | 0 | 740 | 3

- 4 | 3 | 7403 | 0, loop ends

```
int count = 0;
for (int i = 1; i <= 4; i++)
    for (int j = 1; j <= 4; j++) {
        if (j > i) break;
        count++;
    }
System.out.println(count);

// Output: 10
```

- i | j values counted | Inner loop stops | count

- 1 | 1 | break at j = 2 | 1

- 2 | 1, 2 | break at j = 3 | 3

- 3 | 1, 2, 3 | break at j = 4 | 6

- 4 | 1, 2, 3, 4 | test fails at j = 5 | 10

Loops that build whole programs, such as digit sums, factor counts and series, are worked through on
[loop programs in Java for ICSE Class 10](/icse-class-10-loop-programs-java).

## Dry run questions ICSE Class 10: switch, ternary, short-circuit and arrays

These four traps share one idea: some visible code never runs, or runs more than you expect. Mark which lines execute before writing any output.

- # | Code | Output | The trap

- Trap 8: switch fall-through

- 33 | int d = 2;switch (d) {  case 1: System.out.print("A");  case 2: System.out.print("B");  case 3: System.out.print("C"); break;  default: System.out.print("D");} | BC | Execution enters at case 2 and falls into case 3 until the break

- 34 | char g = 'x';switch (g) {  case 'a': System.out.print(1);  default: System.out.print(0);  case 'b': System.out.print(2); break;  case 'c': System.out.print(3);} | 02 | default need not be last; with no break it falls into case 'b'

- 35 | for (int i = 1; i <= 3; i++) {  switch (i) {    case 1: System.out.print("x"); break;    case 2: System.out.print("y");    default: System.out.print("z");  }} | xyzz | i = 2 prints y and falls into z; i = 3 goes straight to default

- Trap 9: the ternary operator

- 36 | int p = 5;int q = p++ > 5 ? p : p * 10;System.out.println(p + " " + q); | 6 60 | 5 > 5 is false, but p has already become 6 before the false branch runs

- 37 | System.out.println(true ? 1 : 2.0); | 1.0 | The two branches are promoted to one type, double, even though 1 is chosen

- Trap 10: short-circuit && and ||

- 38 | int x = 5, y = 10;boolean r = (x > 6) && (++y > 10);System.out.println(r + " " + y); | false 10 | The left side is false, so ++y is never evaluated

- 39 | int i = 0;boolean f = (i++ == 0) && (i++ == 1) || (i++ == 5);System.out.println(f + " " + i); | true 2 | && binds first and is true, so the third i++ is skipped

- Trap 11: arrays and default values

- 40 | int[] a = new int[4];a[1] = 5;System.out.println(a[0] + a[1] + a.length); | 9 | Unset int elements are 0; length is a field, no brackets: 0 + 5 + 4

- 41 | double[] d = new double[2];boolean[] f = new boolean[2];String[] s = new String[2];char[] c = new char[2];System.out.println(d[0] + " " + f[1] + " " + s[0] + " " + (int) c[0]); | 0.0 false null 0 | Each type has its own default: 0.0, false, null and the character with code 0

- 42 | int[] p = {1, 2, 3};int[] q = p;q[0] = 9;System.out.println(p[0] + p.length); | 12 | q is a second name for the same array, so p[0] is now 9; 9 + 3

- 43 | int[][] m = {{1, 2, 3}, {4, 5, 6}};System.out.println(m.length + " " + m[1].length + " " + m[1][2] * m[0][1]); | 2 3 12 | m.length counts rows, m[1].length counts columns; 6 * 2

```
int[] x = {3, 6, 9, 12};
for (int i = 1; i < x.length; i++)
    x[i] = x[i] + x[i - 1];
System.out.println(x[3]);

// Output: 30
```

- i | Sum worked | Array after the pass

- start | none | {3, 6, 9, 12}

- 1 | 6 + 3 | {3, 9, 9, 12}

- 2 | 9 + 9 | {3, 9, 18, 12}

- 3 | 12 + 18 | {3, 9, 18, 30}

## Exam technique: writing the trace and showing working in Section A

Section A is 40 compulsory marks: Question 1 is twenty one-mark MCQs and Question 2 is ten parts of two marks each. Output questions appear in both, and each shape needs a slightly different habit.

### In an MCQ, trace before you read the options
The wrong options are usually the answers a trap produces. For snippet 9 the choices might be b, c, 98 and 99. A student who skims the options first is drawn to b. Work the answer on the margin, then find it in the list.

### In a two-mark part, show a compact trace
Write a small table of the variables that change, then the output on its own line. The output itself must be right; the trace is how you get it right and check it in seconds.

### Copy the layout, not just the values
print and println decide where lines break, and a missing space between two printed numbers changes the answer. Write each println as a new line and show spaces where the code prints " ".

### Mark the type of every number
Before writing a number, ask: is this int, long or double? That one question catches 3.0 against 3, 8.0 against 8 and 1.0 against 1, which are the commonest slips on this page.

### Tick each line as it runs
For switch, short-circuit and ternary questions, put a small tick beside every statement that executes. Lines without a tick produce nothing, however close to the answer they sit.

### Budget the time
The paper is two hours for 100 marks, so Section A deserves roughly a minute per mark. A loop of more than five passes earns its trace table; a one-line String call does not.

When a fragment would not compile at all, the question is about error finding rather than output, and that
shape has its own page: [ICSE Class 10 Java error finding questions](/icse-class-10-java-error-finding-questions).
One-mark questions of every other kind are on [ICSE Computer Applications MCQ questions](/icse-computer-applications-mcq-questions).

## From paper trace to BlueJ run, every week

The skill comes from committing to an answer under time pressure, being wrong, and finding the exact step where the trace went off course.

-
**A timed set on Tuesday** At the 5:30 PM IST class, students get a fresh set of fragments from two or three trap families and write their outputs on paper against the clock. Nobody sees the answers until everyone has committed.

-
**Run in BlueJ on a shared screen** The teacher pastes each fragment into BlueJ and runs it while the group watches. The real output appears beside each student's guess, so there is no arguing about who was right.

-
**Wrong outputs traced again, aloud** A student with a wrong answer re-traces it in front of the group, one variable at a time, until the step that broke is found. Usually it is one of the eleven traps above, and that trap goes on the student's own list.

-
**Traces inside Wednesday's program** At the 8:00 PM IST class, the program of the week is dry run before it is executed, so tracing becomes a way to check one's own Section B code as well.

-
**Full mock tests from December** Output questions then appear inside complete two-hour papers, marked like the board, so the habit holds when the paper is long and the clock is running.

With at most six students in the batch, every wrong output in every set gets looked at. The full mock ladder is
described on [the ICSE specimen paper and mock tests page](/icse-class-10-computer-applications-specimen-paper-and-mock-tests).

## The courses behind this page

- [ICSE Computer Applications, Java with BlueJ](/courses/icse-computer-applications-java-bluej-course): Class 9 and 10 Computer Applications in a mini batch, with a timed set of output questions every Tuesday and each answer run in BlueJ.
- [Computer Science Class 11 and 12](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course): For students moving on to ISC Computer Science, where output tracing returns with longer programs and harder loops.
- [Data Structures and Algorithms](/courses/data-structures-algorithms-masterclass-college): For the student who enjoys dry runs and wants to count steps the way programmers analyse algorithms.

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

**How do you solve predict the output questions in Java for ICSE?** Trace, do not guess. Write the variables across the top of a small table, add one row each time a statement changes a value, and only then write the output. Before writing any number, decide whether it is an int or a double, and before writing any line, check whether the code used print or println.

**Where do output questions come in the ICSE Computer Applications paper?** In Section A, the 40 compulsory marks. Question 1 has twenty one-mark MCQs, some showing a fragment with four possible outputs. Question 2 has ten two-mark parts, several of which typically ask for an output or a loop count.

**What are the most common traps in ICSE Java output questions?** Integer division, increments, char arithmetic, unstored String results, Math return types, loop counts, switch fall-through, ternary promotion, short-circuit && and ||, array defaults and wrapper methods. Each has original snippets on this page.

**Why does 5 / 2 give 2 in Java and not 2.5?** When both operands are int, Java does integer division and drops the fraction. Make one operand a double, as in 5.0 / 2 or (double) 5 / 2, to get 2.5. Casting after the division, as in (double) (5 / 2), is too late and gives 2.0.

**What is the difference between x++ and ++x in an output question?** Both add 1 to x. x++ gives the old value to the expression and then increases x; ++x increases x first and gives the new value. In a line such as b = a++ + ++a, trace each term separately, left to right, writing down x after every step.

**Why does Math.sqrt(16) print 4.0 and not 4?** Because sqrt, cbrt, pow, ceil and floor all return double, so Java prints a decimal point even when the value is whole. Math.round of a double returns a long, so it prints without .0. Writing 4 instead of 4.0 is marked wrong.

**How do I count how many times a loop runs?** List every value the control variable takes, including the one that makes the test fail, then count the values that passed. For i starting at 10, falling by 3 while it stays above 0, the values are 10, 7, 4 and 1, so the loop runs four times. A do-while loop always runs at least once.

**What is a dry run in ICSE Class 10?** A dry run means executing a program by hand, line by line, while keeping a table of each variable's value. It is how output questions are solved, and the fastest way to find a logic error in your own Section B program.

**Is recursion asked in ICSE 2027 output questions?** No. Recursion is not in the ICSE Computer Applications syllabus for 2027, so no output question should need it. Concentrate on operators, loops, nested loops, Strings, Math, wrapper classes and single and double dimensional arrays.

**Do you teach output questions in live classes?** Yes. In the mini batch every Tuesday there is a timed set of output questions, each answer is then run in BlueJ on a shared screen, and every wrong answer is traced again aloud. Students who need more focus can take personalised one to one classes at a time the family chooses.

**Are these output questions copied from past ICSE papers?** No. Every snippet on this page is original, written to test one trap at a time, and every output was checked by compiling and running the code in Java. Past papers use the same kinds of trap, so practising these prepares a student for the real ones.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Tue and Wed ICSE Java batch](/icse-class-10-java-classes-online), [ICSE Java classes in the Gulf and abroad](/icse-class-10-computer-applications-classes-gulf-and-abroad), [ICSE BlueJ Java coaching](/icse-class-10-bluej-java-coaching), [ICSE computer crash course](/icse-computer-applications-crash-course), [ICSE computer tuition in Kolkata](/icse-computer-tuition-kolkata), [ICSE computer tuition in Bangalore](/icse-computer-tuition-bangalore), [ICSE computer tuition in Mumbai](/icse-computer-tuition-mumbai), [1-on-1 private Java tutor](/icse-computer-applications-private-tutor), [ICSE computer tuition in Lucknow](/icse-computer-tuition-lucknow), [ICSE computer tuition in Pune](/icse-computer-tuition-pune), [ICSE computer tuition near me](/icse-computer-tuition-near-me), [The mini batch, explained](/icse-computer-applications-small-batch-classes).

**Chapter by chapter:** [ICSE Computer Applications syllabus](/icse-class-10-computer-applications-syllabus-explained), [User-defined methods and overloading](/icse-class-10-user-defined-methods-overloading), [Constructors](/icse-class-10-constructors-questions), [Wrapper and library classes](/icse-class-10-wrapper-and-library-classes), [Class as the basis of all computation](/icse-class-10-class-as-basis-of-computation), [Encapsulation and access specifiers](/icse-class-10-encapsulation-access-specifiers), [Math library methods](/icse-class-10-math-library-methods), [Operators and expressions](/icse-class-10-operators-in-java), [Loops and loop conversion](/icse-class-10-loop-programs-java), [Data types, input and type casting](/icse-class-10-data-types-and-input-java), [Class 9 Java revision for Class 10](/icse-class-9-java-revision-for-class-10).

**Programs for Section B:** [ICSE Java programs practice](/icse-class-10-java-programs-practice), [String programs](/icse-class-10-string-programs), [Special number programs](/icse-special-number-programs-java), [Sorting and searching programs](/icse-class-10-sorting-and-searching-programs), [2D array programs](/icse-class-10-2d-array-programs), [Pattern programs](/icse-class-10-pattern-programs-java), [Menu driven and switch case](/icse-class-10-menu-driven-programs), [Series programs](/icse-class-10-series-programs-java), [Slab and bill programs](/icse-class-10-slab-and-bill-programs).

**Questions and practice:** [ICSE CA important questions](/icse-class-10-computer-applications-important-questions), [Specimen paper and mock tests](/icse-class-10-computer-applications-specimen-paper-and-mock-tests), [Previous year papers, solved](/icse-computer-applications-previous-year-papers-solved), [Competency and case study questions](/icse-computer-applications-competency-questions), [MCQ for Question 1](/icse-computer-applications-mcq-questions), [Viva and oral questions](/icse-computer-applications-viva-questions), [Find the error questions](/icse-class-10-java-error-finding-questions), [Difference between questions](/icse-computer-difference-between-questions).

**Notes and revision:** [Chapter-wise notes](/icse-computer-applications-notes), [Textbook solutions guide](/icse-computer-applications-textbook-solutions-guide), [Worksheets with answers](/icse-computer-applications-worksheets).

**Exam, marks and internal assessment:** [ICSE board exam preparation](/icse-class-10-computer-applications-board-exam-preparation), [Exam date 2027 and paper pattern](/icse-class-10-computer-applications-exam-date-and-paper-pattern), [Project and internal assessment](/icse-class-10-computer-applications-project-and-internal-assessment), [How to score 100](/how-to-score-100-in-icse-computer-applications), [Paper analysis and answer key](/icse-computer-applications-paper-analysis), [Computer or Commercial Applications?](/icse-computer-applications-vs-commercial-applications).

---

*Canonical: https://learn.modernagecoders.com/icse-class-10-java-output-questions*
