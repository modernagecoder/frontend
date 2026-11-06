---
title: "Find the Error Java ICSE Class 10: 40 Questions, Solved"
description: "Find the error Java ICSE Class 10: 40 one-bug snippets sorted into syntax, runtime and logical errors, with the real javac messages and the corrected code."
canonical: https://learn.modernagecoders.com/icse-class-10-java-error-finding-questions
source: src/pages/icse-class-10-java-error-finding-questions.html
updated: 2026-11-06
---

> Find the error questions in ICSE Class 10 Computer Applications give a short Java fragment with one mistake and ask you to identify it, classify it and correct it. There are three kinds. A syntax error breaks the rules of Java, so the compiler refuses the program. A runtime error compiles but stops the program while it runs, such as division by zero or an index out of bounds. A logical error compiles and runs but gives the wrong answer. Modern Age Coders drills all three live in a Tuesday and Wednesday mini batch in India, or personalised one to one.

## Syntax, logical and runtime errors in ICSE Java, side by side

A syntax error is caught by the compiler, a runtime error is caught by Java while the program runs, and a logical error is caught by nobody except the person who checks the answer. That one sentence classifies every snippet on this page.

- Question | Syntax error | Runtime error | Logical error

- Does it compile? | No | Yes | Yes

- Does it run to the end? | It never starts | No, it stops at the bad line | Yes

- Who reports it? | The compiler (javac, or BlueJ's Compile button) | The Java runtime, as an exception | Nobody; the output is simply wrong

- Typical cause | Missing semicolon, wrong type, undeclared variable, misspelt keyword | Division of an int by zero, bad array or String index, text that is not a number | Wrong formula, wrong condition, loop one pass short, wrong starting value

- How you find it | Read the message and the line number | Read the exception name and the line in the stack trace | Dry run with known input and compare with the expected answer

- Also called | Compile-time error | Exception | Semantic or logic error

### How to classify an error in three questions

-
**Would javac accept every line?** Check semicolons, brackets, the types on both sides of each =, the spelling and case of names, and that every variable is declared and set before use. If a line fails, it is a syntax error.

-
**Could any line crash with legal code?** Look for an int divided by something that can be 0, an index that can reach the length, a parse method or nextInt fed text, or a null String. If so, it is a runtime error.

-
**Does it give the answer the question wanted?** Dry run it with small input whose answer you know. If the output differs, it is a logical error; name the line and the wrong idea.

A fragment that compiles and runs correctly belongs to a different question shape, tracing, covered on
[ICSE Java output questions](/icse-class-10-java-output-questions).

## Syntax error questions ICSE: the code, what javac says, the fix

Cover the last two columns, find the bug, then check. The middle column is the first line javac 21 printed for that fragment; BlueJ shows the same text under the editor.

- # | Code with one error | javac says | Correct it

- 1 | int total = 0total = total + 45; | ';' expected | int total = 0; Every statement ends with a semicolon

- 2 | int runs = 64;system.out.println(runs); | package system does not exist | System.out.println(runs); Java is case sensitive; System is a class with a capital S

- 3 | String city = 'Pune'; | unclosed character literal | String city = "Pune"; Single quotes hold exactly one char; Strings need double quotes

- 4 | int weight = 52.5; | incompatible types: possible lossy conversion from double to int | double weight = 52.5; A decimal literal is a double and cannot be squeezed into an int without a cast

- 5 | int points;points = points + 10; | variable points might not have been initialized | int points = 0; Local variables get no default value

- 6 | int age = 15;if (age = 15)  System.out.println("Class 10"); | incompatible types: int cannot be converted to boolean | if (age == 15) One = assigns; == compares

- 7 | static int cube(int n) {  int c = n * n * n;} | missing return statement | Add return c; before the closing brace; a method declared int must return an int

- 8 | char grade = "A"; | incompatible types: String cannot be converted to char | char grade = 'A'; Double quotes make a String even for one letter

- 9 | void greet() { ... }// inside static main:greet(); | non-static method greet() cannot be referenced from a static context | Declare it static void greet(), or call it through an object of the class

- 10 | for (int k = 1; k <= 5; k++) {  System.out.print(k);}System.out.println(k); | cannot find symbol (symbol: variable k) | Declare int k; before the loop and write for (k = 1; k <= 5; k++). A variable declared in the for header dies when the loop ends

- 11 | int score = 70;int score = 85; | variable score is already defined in method main(String[]) | score = 85; Declare once, assign as often as you like

- 12 | if (x > 5)  System.out.println("big");  System.out.println("checked");else  System.out.println("small"); | 'else' without 'if' | Put the two println lines inside { }. Without braces the if owns only one statement

- 13 | String word = "BlueJ";System.out.println(word.length); | cannot find symbol (symbol: variable length) | word.length() For a String, length is a method

- 14 | int[] marks = {80, 75, 91};System.out.println(marks.length()); | cannot find symbol (symbol: method length()) | marks.length For an array, length is a field, no brackets

- 15 | int r = Math.round(4.6); | incompatible types: possible lossy conversion from long to int | long r = Math.round(4.6); or int r = (int) Math.round(4.6); round of a double returns long

- 16 | switch (day) {  case 1: ... break;  case 2: ... break;  case 2: ... break;} | duplicate case label | Change the third label to case 3: Each case value may appear once

- 17 | static void area(int s) {  return s * s;} | incompatible types: unexpected return value | static int area(int s) A void method cannot hand back a value

- 18 | while (n > 0) {  n--;  break;  System.out.println(n);} | unreachable statement | Move the println above the break, or delete it. Java refuses code that can never run

- 19 | boolean pass = 1; | incompatible types: int cannot be converted to boolean | boolean pass = true; Java booleans are only true and false, never 0 or 1

- 20 | float rate = 7.5; | incompatible types: possible lossy conversion from double to float | float rate = 7.5f; A literal with a decimal point is double unless it carries f

Snippet 3 is a useful warning: javac reported three errors for that single line, because one bad quote confuses everything after it. Always fix the first message first and compile again. Snippets 4, 15, 19 and 20 are all about types, which have their own page:
[data types, input and type casting in Java for ICSE Class 10](/icse-class-10-data-types-and-input-java).

## Runtime error questions: the exception Java throws and why

A runtime error is code that compiles but stops while it runs, because a value at that moment makes the operation impossible. Java names the problem in an exception. Each message below is copied from a java 21 run of the snippet.

- # | Code with one error | Java stops with | Correct it

- 21 | int boxes = 48, children = 0;System.out.println(boxes / children); | ArithmeticException: / by zero | Test first: if (children != 0) before dividing

- 22 | int n = 17;System.out.println(n % 0); | ArithmeticException: / by zero | The remainder operator divides too, so a zero divisor crashes it in the same way

- 23 | int[] runs = {12, 40, 7, 33, 9};for (int i = 0; i <= runs.length; i++)  sum += runs[i]; | ArrayIndexOutOfBoundsException: Index 5 out of bounds for length 5 | i < runs.length The last index is length minus 1

- 24 | String code = "ICSE";System.out.println(code.charAt(code.length())); | StringIndexOutOfBoundsException: Index 4 out of bounds for length 4 | code.charAt(code.length() - 1) prints E

- 25 | String s = "Kolkata";System.out.println(s.substring(3, 9)); | StringIndexOutOfBoundsException: Range [3, 9) out of bounds for length 7 | s.substring(3) prints kata. The end index may be at most the length

- 26 | int fee = Integer.parseInt("12.5"); | NumberFormatException: For input string: "12.5" | double fee = Double.parseDouble("12.5"); parseInt accepts whole numbers only

- 27 | Scanner sc = new Scanner(System.in);int qty = sc.nextInt();// the user types: ten | java.util.InputMismatchException | The code is legal; the input is not. Tell the user to enter digits, or read with next() and check before converting

- 28 | String pet = null;System.out.println(pet.length()); | NullPointerException: Cannot invoke "String.length()" because "pet" is null | Give the String a value first, for example String pet = "cat";

- 29 | int size = -3;int[] list = new int[size]; | NegativeArraySizeException: -3 | Check that the size read from the user is positive before creating the array

```
double boxes = 48, children = 0;
System.out.println(boxes / children);
System.out.println(0.0 / 0);

// Output:
// Infinity
// NaN
```

- Expression | Result | Error type

- 48 / 0 (int) | ArithmeticException | Runtime

- 48 % 0 (int) | ArithmeticException | Runtime

- 48.0 / 0 | Infinity | None, or logical

- 0.0 / 0 | NaN, not a number | None, or logical

Index errors are the commonest runtime bug inside Section B answers. Programs that walk through Strings and arrays safely are worked through on
[ICSE Class 10 String programs](/icse-class-10-string-programs) and
[2D array programs](/icse-class-10-2d-array-programs).

## Logical error examples in Java: compiles, runs, prints the wrong answer

A logical error shows up only when the output is compared with the expected answer. "Printed" is what the faulty code gave when run; the last column is what the fix gave.

- # | Code with one error | Printed | Correct it | Now prints

- 31 | int a = 7, b = 8, c = 8;double avg = (a + b + c) / 3; | 7.0 | (a + b + c) / 3.0 so the division is done in double | 7.666666666666667

- 32 | int f = 0;for (int i = 1; i <= 5; i++) f *= i; | 0 | int f = 1; A product must start at 1 | 120

- 33 | int s = 0;for (int i = 1; i < 10; i++) s += i;// meant: sum of 1 to 10 | 45 | i <= 10 The loop stopped one pass short | 55

- 34 | int marks = 25;if (marks >= 40);  System.out.println("Pass"); | Pass | Delete the semicolon after the condition; it is an empty statement that the if controls | (nothing)

- 35 | String ans = "YES".toLowerCase();System.out.println(ans == "yes"); | false | ans.equals("yes") == compares references, not the characters | true

- 36 | int p = 3, q = 9;p = q;q = p;System.out.println(p + " " + q); | 9 9 | Use a third variable: int t = p; p = q; q = t; | 9 3

- 37 | int got = 430;double pct = got / 500 * 100; | 0.0 | got * 100.0 / 500 430 / 500 is 0 in int arithmetic | 86.0

- 38 | int[] temps = {-4, -9, -2, -7};int max = 0;for (int v : temps) if (v > max) max = v; | 0 | int max = temps[0]; Start from a real element, not from 0 | -2

- 39 | int n = -7;String t = n % 2 == 1 ? "odd" : "even"; | even | n % 2 != 0 -7 % 2 is -1, not 1 | odd

- 40 | int sc = 92;if (sc >= 60) gr = "C";else if (sc >= 75) gr = "B";else if (sc >= 90) gr = "A"; | C | Test the highest band first: 90, then 75, then 60 | A

```
int i = 1;
while (i <= 10) {
    System.out.println(i);
    i--;
}

// Fix: i++ instead of i--
```

- Pass | i printed | i after i-- | i <= 10?

- 1 | 1 | 0 | true

- 2 | 0 | -1 | true

- 3 | -1 | -2 | true

- and so on | falls forever | never above 10 | always true

Loops that stop a pass early or never stop are drilled with iteration counts on
[loop programs for ICSE Class 10](/icse-class-10-loop-programs-java), and integer division, the cause of snippets 31 and 37, is traced step by step on
[operators in Java for ICSE Class 10](/icse-class-10-operators-in-java).

## Correct the code ICSE Java: rewriting a program that has one bug

Write the corrected line in full, name the error type in one word, and give a one-line reason. Rewriting the whole program wastes time unless the question asks for it. Here are two Section B style methods, each with one bug, the way they come up in class.

```
static int evenDigitSum(int n) {
    int sum = 0;
    while (n > 0) {
        int d = n % 10;
        if (d % 2 == 0)
            sum = d;
        n /= 10;
    }
    return sum;
}
// evenDigitSum(58246) returns 8
```

```
static int evenDigitSum(int n) {
    int sum = 0;
    while (n > 0) {
        int d = n % 10;
        if (d % 2 == 0)
            sum += d;
        n /= 10;
    }
    return sum;
}
// evenDigitSum(58246) returns 20
```

```
static int capitals(String s) {
    int c = 0;
    for (int i = 1; i < s.length(); i++)
        if (Character.isUpperCase(s.charAt(i)))
            c++;
    return c;
}
// capitals("Delhi Public School") returns 2
```

```
static int capitals(String s) {
    int c = 0;
    for (int i = 0; i < s.length(); i++)
        if (Character.isUpperCase(s.charAt(i)))
            c++;
    return c;
}
// capitals("Delhi Public School") returns 3
```

### Quote the line, then rewrite it
Copy the faulty line exactly, write "should be", then the corrected line. The examiner sees at once that you found the right line and fixed it the right way.

### Name the type in one word
Syntax, runtime or logical. If the question asks which type, a correct fix with no label can still lose the mark.

### Fix the cause, not the symptom
For snippet 23 the cause is the <= in the loop test. Wrapping the addition in a check on i hides the crash but leaves the wrong loop in place.

### Test with input that can expose the bug
Try zero, a negative number, the first and last positions, and an input whose answer you know. Bugs live at the edges.

Errors also appear as one-mark items in Question 1; see
[ICSE Computer Applications MCQ questions](/icse-computer-applications-mcq-questions), and for a full spread of Section A shapes,
[ICSE Computer Applications important questions](/icse-class-10-computer-applications-important-questions).

## Error finding questions ICSE computer: how the mini batch hunts bugs

Debugging improves when a student commits to an answer, sees the real compiler message, and explains the gap aloud. That is the loop each class repeats.

-
**Tuesday: a timed set of planted bugs** At the 5:30 PM IST class each student gets eight to ten fragments, each hiding one error. They write the faulty line, the type and the fix on paper before anything is compiled.

-
**BlueJ decides, on a shared screen** The teacher compiles or runs each fragment while the group watches. The real message or exception appears, so a guess of "runtime" for a missing semicolon is corrected on the spot.

-
**The student who got it wrong explains why** Saying "I thought the if owned both lines" fixes the idea behind the bug, and the whole batch hears it.

-
**Wednesday: bugs inside whole programs** At the 8:00 PM IST class a complete Section B program arrives with one fault planted in it. Students find it by testing with chosen inputs, the habit that catches their own mistakes in the board paper.

-
**Mock tests and an error log** From December, full two-hour papers are marked the way the board marks them, and every lost mark goes into the student's error log with its type, so revision targets real weak spots.

With at most six students, every wrong answer is discussed. The weekly program list that these bugs are planted in is on
[ICSE Class 10 Java programs for practice](/icse-class-10-java-programs-practice), and the mock paper ladder is on
[the ICSE specimen paper and mock tests page](/icse-class-10-computer-applications-specimen-paper-and-mock-tests).

## The courses behind this page

- [ICSE Computer Applications, Java with BlueJ](/courses/icse-computer-applications-java-bluej-course): Class 9 and 10 Computer Applications in a mini batch, where planted bugs are found, named and fixed every week before BlueJ settles the answer.
- [Computer Science Class 11 and 12](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course): For students going on to ISC Computer Science, where programs grow longer and reading compiler messages calmly saves real time.
- [Data Structures and Algorithms](/courses/data-structures-algorithms-masterclass-college): For the student who enjoys tracking down a wrong answer and wants to test code against edge cases the way working programmers do.

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

**What are the three types of errors in Java for ICSE Class 10?** Syntax errors, runtime errors and logical errors. A syntax error breaks the grammar of Java, so the program does not compile. A runtime error compiles but stops the program while it runs, for example dividing an int by zero. A logical error compiles and runs to the end but produces a wrong result because the idea in the code is wrong.

**What is the difference between a syntax error and a logical error?** A syntax error is found by the compiler before the program runs, and it comes with a message and a line number. A logical error is invisible to the compiler and to Java: the program runs normally and prints an answer, just the wrong one. You find a logical error only by checking the output against an answer you already know.

**Is division by zero a syntax, runtime or logical error?** For int values it is a runtime error. The code compiles, then Java stops with ArithmeticException: / by zero when the line runs. The same happens with the % operator. With double values there is no crash: Java prints Infinity or NaN, so if the program should have refused that input, the mistake is logical.

**Is a missing semicolon a syntax error?** Yes. javac reports "';' expected" and points to the end of the line where the semicolon belongs. The program cannot run until it is fixed. Note the opposite case too: an extra semicolon straight after if (...) or for (...) compiles happily and becomes a logical error.

**Is an infinite loop a runtime error or a logical error?** An infinite loop is a logical error. The code is legal and Java does not throw any exception; the loop simply never reaches its exit because the update moves the variable the wrong way or never changes it. You notice it only because the program never finishes, so you trace the loop variable to find the fault.

**Is ArrayIndexOutOfBoundsException a runtime error?** Yes. Using an index below 0 or equal to or above the array length compiles without complaint, but Java throws ArrayIndexOutOfBoundsException when that line runs, with a message such as "Index 5 out of bounds for length 5". The usual cause is a loop test that says "less than or equal to length" where it should say "less than length".

**How do I write the answer to a correct the code question in ICSE?** Quote the faulty line, write the corrected line next to it, and name the error type if asked. Add one short reason, such as "a char literal needs single quotes". Rewrite the full program only when the question says so. Make one change per error, since examiners look for the specific line that was wrong.

**Is using == to compare Strings an error in Java?** It compiles and runs, so it is not a syntax or runtime error, but it usually gives the wrong answer, which makes it a logical error. == checks whether two variables point to the same String object, not whether they hold the same characters. Use equals, or equalsIgnoreCase when case should not matter.

**Are find the error questions asked in the ICSE Computer Applications paper?** Questions asking students to name the type of an error, or to correct a faulty statement, have appeared in Section A of past ICSE Computer Applications papers, as one-mark or two-mark parts. Section B rewards the same skill indirectly, because a program with a bug in it loses marks for the wrong output.

**Do you teach error finding in live classes?** Yes. The ICSE mini batch runs a timed set of planted bugs every Tuesday at 5:30 PM IST, checks every answer by compiling in BlueJ on a shared screen, and plants a bug inside Wednesday's full program. Students who need closer help take personalised one to one classes at a time the family chooses.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Tue and Wed ICSE Java batch](/icse-class-10-java-classes-online), [ICSE Java classes in the Gulf and abroad](/icse-class-10-computer-applications-classes-gulf-and-abroad), [ICSE BlueJ Java coaching](/icse-class-10-bluej-java-coaching), [ICSE computer crash course](/icse-computer-applications-crash-course), [ICSE computer tuition in Kolkata](/icse-computer-tuition-kolkata), [ICSE computer tuition in Bangalore](/icse-computer-tuition-bangalore), [ICSE computer tuition in Mumbai](/icse-computer-tuition-mumbai), [1-on-1 private Java tutor](/icse-computer-applications-private-tutor), [ICSE computer tuition in Lucknow](/icse-computer-tuition-lucknow), [ICSE computer tuition in Pune](/icse-computer-tuition-pune), [ICSE computer tuition near me](/icse-computer-tuition-near-me), [The mini batch, explained](/icse-computer-applications-small-batch-classes).

**Chapter by chapter:** [ICSE Computer Applications syllabus](/icse-class-10-computer-applications-syllabus-explained), [User-defined methods and overloading](/icse-class-10-user-defined-methods-overloading), [Constructors](/icse-class-10-constructors-questions), [Wrapper and library classes](/icse-class-10-wrapper-and-library-classes), [Class as the basis of all computation](/icse-class-10-class-as-basis-of-computation), [Encapsulation and access specifiers](/icse-class-10-encapsulation-access-specifiers), [Math library methods](/icse-class-10-math-library-methods), [Operators and expressions](/icse-class-10-operators-in-java), [Loops and loop conversion](/icse-class-10-loop-programs-java), [Data types, input and type casting](/icse-class-10-data-types-and-input-java), [Class 9 Java revision for Class 10](/icse-class-9-java-revision-for-class-10).

**Programs for Section B:** [ICSE Java programs practice](/icse-class-10-java-programs-practice), [String programs](/icse-class-10-string-programs), [Special number programs](/icse-special-number-programs-java), [Sorting and searching programs](/icse-class-10-sorting-and-searching-programs), [2D array programs](/icse-class-10-2d-array-programs), [Pattern programs](/icse-class-10-pattern-programs-java), [Menu driven and switch case](/icse-class-10-menu-driven-programs), [Series programs](/icse-class-10-series-programs-java), [Slab and bill programs](/icse-class-10-slab-and-bill-programs).

**Questions and practice:** [ICSE CA important questions](/icse-class-10-computer-applications-important-questions), [Specimen paper and mock tests](/icse-class-10-computer-applications-specimen-paper-and-mock-tests), [Previous year papers, solved](/icse-computer-applications-previous-year-papers-solved), [Predict the output questions](/icse-class-10-java-output-questions), [Competency and case study questions](/icse-computer-applications-competency-questions), [MCQ for Question 1](/icse-computer-applications-mcq-questions), [Viva and oral questions](/icse-computer-applications-viva-questions), [Difference between questions](/icse-computer-difference-between-questions).

**Notes and revision:** [Chapter-wise notes](/icse-computer-applications-notes), [Textbook solutions guide](/icse-computer-applications-textbook-solutions-guide), [Worksheets with answers](/icse-computer-applications-worksheets).

**Exam, marks and internal assessment:** [ICSE board exam preparation](/icse-class-10-computer-applications-board-exam-preparation), [Exam date 2027 and paper pattern](/icse-class-10-computer-applications-exam-date-and-paper-pattern), [Project and internal assessment](/icse-class-10-computer-applications-project-and-internal-assessment), [How to score 100](/how-to-score-100-in-icse-computer-applications), [Paper analysis and answer key](/icse-computer-applications-paper-analysis), [Computer or Commercial Applications?](/icse-computer-applications-vs-commercial-applications).

---

*Canonical: https://learn.modernagecoders.com/icse-class-10-java-error-finding-questions*
