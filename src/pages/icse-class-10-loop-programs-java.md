---
title: "Loop Programs ICSE Class 10: for, while, do-while 2027"
description: "Loop programs ICSE Class 10: for, while and do-while compared, loop conversion worked both ways, iteration-count drills, nested loops, break and continue."
canonical: https://learn.modernagecoders.com/icse-class-10-loop-programs-java
source: src/pages/icse-class-10-loop-programs-java.html
updated: 2026-11-06
---

> Loop programs in ICSE Class 10 use Java's three iterative constructs. for suits a known number of passes; while is entry controlled and may run zero times; do-while is exit controlled and always runs at least once. Any loop converts into the others by moving the initialisation before the loop and the update to the end of the body, but a do-while differs when its condition starts false. Section A asks for conversions and counts; Section B programs are built on loops. Loops are taught live in our ICSE evening mini batch in India, and one to one everywhere.

## for, while and do-while in ICSE Java, compared

for and while test the condition before each pass, so they are entry controlled and can run zero times. do-while tests after each pass, so it is exit controlled and always runs at least once. Choose for when the count is known, while when it is not, do-while when the body must run first.

- Feature | for | while | do-while

- Where the test is | Before each pass | Before each pass | After each pass

- Control type | Entry controlled | Entry controlled | Exit controlled

- Least number of passes | 0 | 0 | 1

- Best used when | The number of passes is known | It depends on data, such as digits left | The body must run once, such as a menu or input check

- Initialisation and update | Both inside the header | Before the loop and inside the body | Before the loop and inside the body

- Semicolon | None after the header | None after the condition | Required after while (...)

### Infinite loop
A loop whose condition never becomes false: for ( ; ; ), while (true), or a test the variable can jump past. i != 10 with i += 2 from 1 skips 10 for ever; our run stopped it after 1,000 passes with i at 2001.

### Empty loop
A loop with no statement in its body, such as for (int i = 0; i < 1000; i++);. It only uses up time, so older textbooks call it a delay loop.

### Finite loop
A loop with a condition that is certain to fail after a fixed number of passes. Every loop in a Section B answer should be finite, and your trace should prove it.

## Convert for loop to while in ICSE, and on to do-while

Move the initialisation above the loop, keep the condition in the while brackets, and put the update as the last statement of the body. For do-while, keep the same three pieces but move the test to the end, after a semicolon-terminated while.

```
for (int i = 5; i <= 25; i += 5)
    System.out.print(i + " ");

// Output: 5 10 15 20 25
```

```
int i = 5;
while (i <= 25) {
    System.out.print(i + " ");
    i += 5;
}
// Output: 5 10 15 20 25
```

```
int i = 5;
do {
    System.out.print(i + " ");
    i += 5;
} while (i <= 25);
// Output: 5 10 15 20 25
```

```
// while version
int n = 1234, s = 0;
while (n != 0) {
    s += n % 10;
    n /= 10;
}
// for version
int n, s = 0;
for (n = 1234; n != 0; n /= 10)
    s += n % 10;
// Both give s = 10, n = 0
```

### When conversion changes the answer

- Code | Passes (run) | k after

- int k = 20, c = 0;while (k < 10) { c++; k++; } | 0 | 20

- int k = 20, c = 0;do { c++; k++; } while (k < 10); | 1 | 21

If a question asks you to convert into do-while, check the starting values: when the condition is false at the start, the two are not equivalent, and saying so earns credit. Loops that print shapes have their own conversion habits on
[pattern programs for ICSE Class 10](/icse-class-10-pattern-programs-java).

## Iterative constructs in Java: ten iteration-count drills

List every value the loop variable takes, including the one that fails the test, then count the values that passed. For a counting loop that adds a fixed step, the shortcut is (last value reached minus first) divided by step, plus 1. Cover the right two columns and try each.

- # | Loop | Values that pass | Passes | Variable after

- 1 | for (i = 3; i <= 30; i += 3) | 3, 6, ... 30 | 10 | i = 33

- 2 | for (i = 100; i >= 1; i /= 2) | 100, 50, 25, 12, 6, 3, 1 | 7 | i = 0

- 3 | for (i = 1; i < 50; i *= 3) | 1, 3, 9, 27 | 4 | i = 81

- 4 | int x = 15;while (x > 0) x -= 4; | 15, 11, 7, 3 | 4 | x = -1

- 5 | int i = 0;do { i += 7; } while (i < 30); | Body runs, then i is 7, 14, 21, 28, 35 | 5 | i = 35

- 6 | for (int i = 10; i < 10; i++) | None: 10 < 10 is false | 0 | Not in scope

- 7 | for (ch = 'a'; ch <= 'z'; ch += 5) | a, f, k, p, u, z | 6 | Code 127, past z

- 8 | int n = 64, k = 0;while (n > 1) { n /= 2; k++; } | n = 64, 32, 16, 8, 4, 2 | 6 | n = 1, k = 6

- 9 | for (i = 1, j = 10; i < j; i++, j--) | (1,10) (2,9) (3,8) (4,7) (5,6) | 5 | i = 6, j = 5

- 10 | int i = 1;while (i != 10) i += 2; | 1, 3, 5, 7, 9, 11 ... | Never stops | Odd values skip 10

Drill 1 matches the shortcut: (30 minus 3) divided by 3, plus 1, is 10. The shortcut fails for loops that multiply or divide (drills 2, 3 and 8), so list those values. In drills 2 and 3 the variable is declared outside the loop, which is why its final value can be asked. More loops traced to their printed output are on
[ICSE Java output questions](/icse-class-10-java-output-questions).

## Nested loops ICSE: counting inner passes, with break and continue

In a nested loop the inner loop runs completely for every single pass of the outer loop. break leaves only the loop it sits in; continue skips the rest of the current pass and goes to the next one.

- Nested loop | Inner passes per outer i | Total inner passes (run)

- for (i = 1; i <= 5; i++)  for (j = 1; j <= 4; j++) | 4 every time | 5 x 4 = 20

- for (i = 1; i <= 5; i++)  for (j = i; j <= 5; j++) | 5, 4, 3, 2, 1 | 15

- for (i = 1; i <= 4; i++)  for (j = 1; j <= i * 2; j++) | 2, 4, 6, 8 | 20

```
for (int n = 10; n <= 30; n++) {
    boolean prime = true;
    for (int d = 2; d * d <= n; d++) {
        if (n % d == 0) {
            prime = false;
            break;
        }
    }
    if (prime)
        System.out.print(n + " ");
}
// Output: 11 13 17 19 23 29
```

- n | Divisors tried | Result

- 10 | 2 divides, break | not prime

- 11 | 2, 3 (4 x 4 > 11 ends it) | prime

- 15 | 2, then 3 divides, break | not prime

- 25 | 2, 3, 4, then 5 divides, break | not prime

- 29 | 2, 3, 4, 5 (6 x 6 > 29) | prime

- Jump statement | Code | Result (run) | What happened

- continue | for (int i = 1; i <= 10; i++) {  if (i % 3 == 0) continue;  s += i;} | s = 37 | 3, 6 and 9 skipped: 55 minus 18

- break | for (n = 51; ; n++)  if (n % 7 == 0) break; | n = 56 | A for with no condition stops only at the break

- break on a total | for (i = 1; i <= 20; i++) {  if (s > 30) break;  s += i;} | s = 36, i = 9 | s passes 30 after adding 8; the test at i = 9 breaks

Nested loops are the engine of two whole program families:
[2D array programs](/icse-class-10-2d-array-programs) and
[series programs in Java](/icse-class-10-series-programs-java).

## Two loop programs for ICSE Class 10, written and run

Section B is any four of six programs at 15 marks each, and nearly every one has a loop at its heart. These two show the loops this page has not yet used for real work: a do-while that reads until a stop value, and a while loop whose number of passes nobody knows in advance.

```
import java.util.Scanner;

public class Sentinel {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int pos = 0, neg = 0, total = 0, num;
        do {
            System.out.print("Enter a number (0 to stop): ");
            num = in.nextInt();
            if (num > 0) pos++;
            else if (num < 0) neg++;
            total += num;
        } while (num != 0);
        System.out.println();
        System.out.println("Positive: " + pos);
        System.out.println("Negative: " + neg);
        System.out.println("Total: " + total);
    }
}
// Input: 8 -3 15 -6 4 0
// Positive: 3
// Negative: 2
// Total: 18
```

```
import java.util.Scanner;

public class Gcd {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("Enter two numbers: ");
        int a = in.nextInt(), b = in.nextInt();
        int x = a, y = b;
        while (y != 0) {
            int r = x % y;
            x = y;
            y = r;
        }
        System.out.println("GCD = " + x);
        System.out.println("LCM = " + (a * b / x));
    }
}
// Input: 84 36
// GCD = 12
// LCM = 252
```

### Name the loop type in a comment
A one-line comment such as "exit controlled: input must be read first" shows the examiner you chose the loop on purpose.

### Keep the original input
When a loop destroys a number by dividing it, work on a copy, as the GCD program does. Many lost marks come from printing a variable that the loop has already reduced to 0.

### Describe the variables
The ICSE paper asks for programs written with variable descriptions or meaningful names. List each loop counter with its purpose, not just its type.

The full list of program families with loops at their core, from special numbers to menus, is on
[ICSE Class 10 Java programs for practice](/icse-class-10-java-programs-practice) and
[special number programs in Java](/icse-special-number-programs-java).

## How the mini batch practises loops every week

Loops are learnt by counting passes on paper until the count is always right, then writing programs where the loop does real work. Each week covers both.

-
**Tuesday: convert and count** At the 5:30 PM IST class students get a set of loops to convert between for, while and do-while, and a set to count, with the final value of the variable asked as well.

-
**BlueJ settles every count** The teacher adds a counter to each loop and runs it on a shared screen, so the right count is shown, not argued.

-
**The missed value found** A wrong count is nearly always one missing or extra value in the list. The student reads their list aloud until the gap shows up.

-
**Wednesday: a loop program** At the 8:00 PM IST class the batch writes a full Section B program around a loop: digits, factors, sentinel input or nested search, with a variable list.

-
**Loops under exam conditions** From December the batch sits complete mock papers, where conversions sit in Section A and loop programs in Section B, each scored to the ICSE marking pattern.

Loop mistakes that compile but give wrong answers, such as stopping one pass short, are collected on
[ICSE Java error finding questions](/icse-class-10-java-error-finding-questions).

## The courses behind this page

- [ICSE Computer Applications, Java with BlueJ](/courses/icse-computer-applications-java-bluej-course): Class 9 and 10 Computer Applications in a mini batch, where every loop is converted, counted on paper and then run in BlueJ.
- [Computer Science Class 11 and 12](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course): For students going on to ISC Computer Science, where nested loops drive matrices, searching and number problems.
- [Data Structures and Algorithms](/courses/data-structures-algorithms-masterclass-college): For the student who likes counting passes and wants to learn how programmers measure the cost of a loop.

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

**What are iterative constructs in Java?** Iterative constructs are statements that repeat a block of code while a condition holds. Java has three: the for loop, the while loop and the do-while loop. ICSE calls them iterative constructs, and they also cover nested loops and the jump statements break and continue that change how a loop runs.

**What is the difference between while and do-while?** while checks its condition before each pass, so it is entry controlled and may not run at all. do-while checks after each pass, so it is exit controlled and always runs at least once. A do-while also needs a semicolon after its closing while (condition).

**How do you convert a for loop into a while loop?** Take the three parts of the for header apart. Write the initialisation as a statement before the loop, put the condition inside while ( ), and make the update the last statement inside the loop body, adding braces if the body now has more than one statement. The output stays the same.

**How do you find how many times a loop will execute?** Write down every value the loop variable takes, starting from the first, and stop at the first value that makes the condition false. Count the values before it. For a loop that adds a fixed step, (last value reached minus first value) divided by the step, plus 1, gives the same answer quickly.

**What is an entry controlled and an exit controlled loop?** An entry controlled loop tests its condition before running the body, so it can run zero times; for and while are entry controlled. An exit controlled loop runs the body first and tests afterwards, so it runs at least once; do-while is the only exit controlled loop in Java.

**What is the difference between break and continue?** break ends the loop immediately and control moves to the first statement after it. continue ends only the current pass: the rest of the body is skipped and the loop goes on to its next pass, running the update first in a for loop. In nested loops both affect only the innermost loop they sit in.

**What is a nested loop in Java with an example?** A nested loop is a loop placed inside the body of another loop. The inner loop completes all its passes for each single pass of the outer loop. If the outer loop runs 5 times and the inner loop 4 times, the inner body runs 20 times. Nested loops are used for patterns, tables and 2D arrays.

**What is an infinite loop? Give an example.** An infinite loop is one whose condition never becomes false, so it never ends on its own. A for loop with all three header parts left empty, and while (true), are deliberate examples. A common accidental one starts i at 1, adds 2 each pass and tests i != 10; i is always odd, so it never equals 10.

**Which loop is best for ICSE Section B programs?** Use for when the number of passes is known, such as running through the digits of a fixed range or the elements of an array. Use while when the count depends on the data, such as reducing a number digit by digit. Use do-while for menus and input that must be read before it can be checked.

**Do you teach loops in the live ICSE classes?** Yes. The mini batch practises conversion and counting every Tuesday at 5:30 PM IST and builds a full loop program every Wednesday at 8:00 PM IST, with every answer run in BlueJ on a shared screen. Families who want a different time, or students outside India, take personalised one to one classes.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Tue and Wed ICSE Java batch](/icse-class-10-java-classes-online), [ICSE Java classes in the Gulf and abroad](/icse-class-10-computer-applications-classes-gulf-and-abroad), [ICSE BlueJ Java coaching](/icse-class-10-bluej-java-coaching), [ICSE computer crash course](/icse-computer-applications-crash-course), [ICSE computer tuition in Kolkata](/icse-computer-tuition-kolkata), [ICSE computer tuition in Bangalore](/icse-computer-tuition-bangalore), [ICSE computer tuition in Mumbai](/icse-computer-tuition-mumbai), [1-on-1 private Java tutor](/icse-computer-applications-private-tutor), [ICSE computer tuition in Lucknow](/icse-computer-tuition-lucknow), [ICSE computer tuition in Pune](/icse-computer-tuition-pune), [ICSE computer tuition near me](/icse-computer-tuition-near-me), [The mini batch, explained](/icse-computer-applications-small-batch-classes).

**Chapter by chapter:** [ICSE Computer Applications syllabus](/icse-class-10-computer-applications-syllabus-explained), [User-defined methods and overloading](/icse-class-10-user-defined-methods-overloading), [Constructors](/icse-class-10-constructors-questions), [Wrapper and library classes](/icse-class-10-wrapper-and-library-classes), [Class as the basis of all computation](/icse-class-10-class-as-basis-of-computation), [Encapsulation and access specifiers](/icse-class-10-encapsulation-access-specifiers), [Math library methods](/icse-class-10-math-library-methods), [Operators and expressions](/icse-class-10-operators-in-java), [Data types, input and type casting](/icse-class-10-data-types-and-input-java), [Class 9 Java revision for Class 10](/icse-class-9-java-revision-for-class-10).

**Programs for Section B:** [ICSE Java programs practice](/icse-class-10-java-programs-practice), [String programs](/icse-class-10-string-programs), [Special number programs](/icse-special-number-programs-java), [Sorting and searching programs](/icse-class-10-sorting-and-searching-programs), [2D array programs](/icse-class-10-2d-array-programs), [Pattern programs](/icse-class-10-pattern-programs-java), [Menu driven and switch case](/icse-class-10-menu-driven-programs), [Series programs](/icse-class-10-series-programs-java), [Slab and bill programs](/icse-class-10-slab-and-bill-programs).

**Questions and practice:** [ICSE CA important questions](/icse-class-10-computer-applications-important-questions), [Specimen paper and mock tests](/icse-class-10-computer-applications-specimen-paper-and-mock-tests), [Previous year papers, solved](/icse-computer-applications-previous-year-papers-solved), [Predict the output questions](/icse-class-10-java-output-questions), [Competency and case study questions](/icse-computer-applications-competency-questions), [MCQ for Question 1](/icse-computer-applications-mcq-questions), [Find the error questions](/icse-class-10-java-error-finding-questions), [Difference between questions](/icse-computer-difference-between-questions).

**Notes and revision:** [Chapter-wise notes](/icse-computer-applications-notes), [Textbook solutions guide](/icse-computer-applications-textbook-solutions-guide), [Worksheets with answers](/icse-computer-applications-worksheets).

**Exam, marks and internal assessment:** [ICSE board exam preparation](/icse-class-10-computer-applications-board-exam-preparation), [Exam date 2027 and paper pattern](/icse-class-10-computer-applications-exam-date-and-paper-pattern), [Project and internal assessment](/icse-class-10-computer-applications-project-and-internal-assessment), [How to score 100](/how-to-score-100-in-icse-computer-applications), [Paper analysis and answer key](/icse-computer-applications-paper-analysis), [Computer or Commercial Applications?](/icse-computer-applications-vs-commercial-applications).

---

*Canonical: https://learn.modernagecoders.com/icse-class-10-loop-programs-java*
