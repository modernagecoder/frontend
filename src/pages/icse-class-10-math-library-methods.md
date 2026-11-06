---
title: "Math Library Methods ICSE: Return Types and Output Traps"
description: "Math library methods for ICSE Class 10 (2027): all ten syllabus methods with return types, Math.round, ceil and floor traps, and outputs run in Java."
canonical: https://learn.modernagecoders.com/icse-class-10-math-library-methods
source: src/pages/icse-class-10-math-library-methods.html
updated: 2026-10-13
---

> The Math library methods in ICSE Computer Applications are the static methods of Java's Math class in java.lang: pow, sqrt, cbrt, ceil, floor, round, abs, max, min and random. Most marks depend on return types. pow, sqrt, cbrt, ceil, floor and random always return double, so whole answers print with .0; round of a double returns a long with no decimal; abs, max and min return the type of their arguments after promotion. They are part of the Class 9 syllabus that the 2027 Class 10 paper revises. Modern Age Coders drills them live in a Tuesday and Wednesday mini batch in India, or one to one.

## Mathematical functions in Java Class 10: the return-type table

The syllabus lists ten methods of the Math class, all static and all in the package java.lang, which every program imports automatically. The return type column is the one to learn by heart, because it decides how the answer prints.

- Method | What it gives | Returns | Example | Output

- Math.pow(x, y) | x raised to the power y | double | Math.pow(5, 2) | 25.0

- Math.sqrt(x) | square root of x | double | Math.sqrt(81) | 9.0

- Math.cbrt(x) | cube root of x | double | Math.cbrt(64) | 4.0

- Math.ceil(x) | smallest whole number not less than x | double | Math.ceil(6.1) | 7.0

- Math.floor(x) | largest whole number not more than x | double | Math.floor(6.9) | 6.0

- Math.round(x) | nearest whole number, halves go up | long for a double, int for a float | Math.round(6.5) | 7

- Math.abs(a) | value without its sign | same type as a | Math.abs(-12), Math.abs(-12.5) | 12 12.5

- Math.max(a, b) | the larger of two | the wider of the two types | Math.max(8, 11), Math.max(8, 11.0) | 11 11.0

- Math.min(a, b) | the smaller of two | the wider of the two types | Math.min(-4, 9), Math.min(-4.0, 9) | -4 -4.0

- Math.random() | a random value from 0.0 up to, but not including, 1.0 | double | Math.random() | varies, for example 0.6182...

### Six always give double
pow, sqrt, cbrt, ceil, floor and random return double whatever you pass in. Even Math.sqrt of a perfect square prints a decimal point.

### round is the odd one out
Math.round of a double returns long, of a float returns int. Either way, the answer has no .0. Halves round upwards, towards positive infinity.

### Three follow their arguments
abs, max and min return int for ints and double for doubles. If one argument is int and the other double, the int is promoted first, so the result is double.

Your textbook may mention other Math methods such as sin, log or exp. The 2026-27 syllabus list we checked names only the ten above, so this page stays with those. How these methods sit beside the wrapper classes and Character methods is covered on [wrapper and library classes for ICSE](/icse-class-10-wrapper-and-library-classes).

## Math.round, Math.ceil and Math.floor ICSE: output traps with answers

Nearly every wrong answer on Math comes from one of three slips: a missing or extra .0, rounding a negative half the wrong way, or doing integer division before the method sees the value. Cover the Output column and try each one.

### Rounding, ceiling and floor

- # | Code | Output | The trap

- 1 | System.out.println(Math.round(-6.5) + " " + Math.round(-6.51)); | -6 -7 | A half rounds up, and up from -6.5 is -6; only past the half does it go to -7

- 2 | System.out.println(Math.round(4.5) + " " + Math.round(-0.5)); | 5 0 | Both halves move towards positive infinity

- 3 | System.out.println(Math.round(-1.5) + " " + Math.floor(-0.5)); | -1 -1.0 | round gives a long; floor goes down to the next whole number and gives a double

- 4 | System.out.println(Math.ceil(-0.4)); | -0.0 | Java keeps the minus sign on a zero that came from a negative number

- 5 | System.out.println(Math.floor(7.0) + " " + Math.ceil(7.0)); | 7.0 7.0 | A whole number is its own floor and ceiling

- 6 | System.out.println(Math.floor(-2.2) + Math.ceil(-2.2)); | -5.0 | floor of -2.2 is -3.0 (further from zero), ceil is -2.0; two doubles are added

- 7 | System.out.println(Math.ceil(7 / 2) + " " + Math.ceil(7 / 2.0)); | 3.0 4.0 | 7 / 2 is already 3 before ceil sees it; only 7 / 2.0 keeps the half

- 8 | System.out.println(Math.round(2.0 / 3 * 100) / 100.0); | 0.67 | The standard way to keep two decimal places: scale, round, divide by a double

### Math.pow, Math.sqrt and Math.cbrt output ICSE

- # | Code | Output | The trap

- 9 | System.out.println(Math.sqrt(-9)); | NaN (no error) | No real square root exists, so Java prints NaN, "not a number"; there is no error

- 10 | System.out.println(Math.pow(-8, 1.0 / 3) + " " + Math.cbrt(-8)); | NaN -2.0 | pow cannot take a fractional power of a negative base; cbrt handles negatives

- 11 | System.out.println(Math.pow(4, 0.5) + " " + Math.pow(10, -2)); | 2.0 0.01 | Power 0.5 is a square root; a negative power is a reciprocal

- 12 | System.out.println(Math.pow(0, 0) + " " + Math.sqrt(0)); | 1.0 0.0 | Anything to the power 0 is 1.0 in Java, including 0

- 13 | System.out.println((int) Math.sqrt(30)); | 5 | The cast cuts 5.477... down to 5; it does not round

- 14 | System.out.println(Math.sqrt(Math.pow(3, 2) + Math.pow(4, 2))); | 5.0 | Nested calls work inside out: 9.0 + 16.0, then the root

- 15 | System.out.println(Math.round(Math.sqrt(50)) + Math.round(Math.cbrt(30))); | 10 | 7 + 3 are two longs added as numbers, because no String comes first

- 16 | System.out.println("" + Math.round(Math.sqrt(50)) + Math.round(Math.cbrt(30))); | 73 | The empty String first turns every + into joining

### abs, max and min

- # | Code | Output | The trap

- 17 | System.out.println(Math.max('a', 'b')); | 98 | chars are promoted to int, so the code of 'b' is printed, not the letter

- 18 | System.out.println(Math.abs(-7 / 2) + " " + Math.abs(-7.0 / 2)); | 3 3.5 | -7 / 2 is -3 in int arithmetic before abs ever runs

- 19 | System.out.println(Math.max(Math.min(15, 10), 12)); | 12 | Inner call first: min gives 10, then max of 10 and 12

- 20 | System.out.println(Math.min(Math.abs(-3), -Math.abs(3))); | -3 | The unary minus outside abs makes the second value -3

```
int a = Math.round(3.7);      // line 3
int b = Math.pow(2, 5);       // line 4
int c = Math.sqrt(36);        // line 5

// javac says:
E.java:3: error: incompatible types: possible lossy conversion from long to int
E.java:4: error: incompatible types: possible lossy conversion from double to int
E.java:5: error: incompatible types: possible lossy conversion from double to int
```

```
int d = Math.round(3.7f);     // float in, int out
long e = Math.round(3.7);     // double in, long out
int f = (int) Math.pow(2, 5); // explicit cast
System.out.println(d + " " + e + " " + f);

// Output:
4 4 32
```

Math rows sit among every other kind of trap on [ICSE Java output questions](/icse-class-10-java-output-questions), and the error side is on [ICSE Class 10 Java error finding questions](/icse-class-10-java-error-finding-questions).

## Writing mathematical expressions in Java with Math methods

A two-mark Section A part often gives a formula and asks for the Java expression. Replace each root and power with its Math method, write every multiplication sign, and add brackets wherever a fraction bar or a root covers more than one term.

- Formula | Java expression | Checked with | Result

- distance = &radic;((x2 &minus; x1)&sup2; + (y2 &minus; y1)&sup2;) | Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)) | (1, 2) and (4, 6) | 5.0

- roots of ax&sup2; + bx + c = 0 | (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a) and the same with &minus; | a = 1, b = &minus;5, c = 6 | 3.0 2.0

- amount = P(1 + r/100)n | p * Math.pow(1 + r / 100, n) | P = 10000, r = 8, n = 2 | 11664.000000000002

- |a &minus; 5b| &divide; larger of a, b | Math.abs(a - b * 5) / Math.max(a, b) | a = 7.5, b = 2 | 0.3333333333333333

- &#8731;(2.4ab) | Math.cbrt(a * b * 2.4) | a = 7.5, b = 2 | 3.3019272488946267

The compound interest row is worth a second look. The true answer is 11664, but doubles store most decimals approximately, so Java prints a tiny tail. In a program, round the result to two decimal places before printing it.

```
int r = 3;
// volume of a sphere, 4/3 x 22/7 x r cubed
System.out.println(4 / 3 * 22 / 7 * Math.pow(r, 3));
System.out.println(4.0 / 3 * 22 / 7 * Math.pow(r, 3));

// Output:
81.0
113.14285714285715
```

- Every power needs Math.pow; x^2 is not a power in Java.

- Every product needs *: 2ab is 2 * a * b.

- A fraction bar over several terms needs brackets on both top and bottom.

- A root over a sum needs the whole sum inside the brackets of Math.sqrt.

- If the formula has a fraction such as 4/3, write one of the numbers as a double.

Operator precedence, the other half of every expression question, is covered on [operators in Java for ICSE Class 10](/icse-class-10-operators-in-java).

## Math.random in ICSE Java: whole numbers in a range, and two programs

Math.random() gives a double from 0.0 up to but not including 1.0. To get a whole number from low to high, use low + (int) (Math.random() * (high - low + 1)): multiply to stretch the range, cast to cut off the fraction, then shift it.

- Goal | Expression | Smallest and largest seen

- A dice roll, 1 to 6 | (int) (Math.random() * 6) + 1 | 1 and 6 (a million runs)

- A four-digit code, 1000 to 9999 | 1000 + (int) (Math.random() * 9000) | 1000 and 9999 (two million runs)

- The bracket slip | (int) Math.random() * 6 + 1 | 1 and 1 (a million runs)

The last row is the trap. The cast applies to Math.random() alone, which is always below 1.0, so it becomes 0 every time and the "dice" always shows 1. Brackets around the multiplication are what make the expression work.

Program 1. Write a program to input a decimal number and print its absolute value, the square root of its absolute value and its cube root (each to two decimal places), and its rounded value, ceiling, floor and square, using Math methods.

```
import java.util.Scanner;
class NumberReport {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        double x = sc.nextDouble();
        double ab = Math.abs(x);
        System.out.println("Absolute value: " + ab);
        System.out.println("Square root of |x|: "
            + Math.round(Math.sqrt(ab) * 100) / 100.0);
        System.out.println("Cube root of x: "
            + Math.round(Math.cbrt(x) * 100) / 100.0);
        System.out.println("Rounded: " + Math.round(x));
        System.out.println("Ceiling: " + Math.ceil(x));
        System.out.println("Floor: " + Math.floor(x));
        System.out.println("Square: " + Math.pow(x, 2));
    }
}
```

- Variable | Type | Purpose

- sc | Scanner | reads the input

- x | double | the number entered

- ab | double | absolute value of x

```
Enter a number: -18.75
Absolute value: 18.75
Square root of |x|: 4.33
Cube root of x: -2.66
Rounded: -19
Ceiling: -18.0
Floor: -19.0
Square: 351.5625
```

Program 2. Write a program to input a positive integer. If it is a perfect square, print the number whose square it is; otherwise print the perfect squares just below and just above it and the one that is nearer.

```
import java.util.Scanner;
class NearSquare {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a positive integer: ");
        int n = sc.nextInt();
        double root = Math.sqrt(n);
        if (root == Math.floor(root)) {
            System.out.println(n + " is a perfect square of " + (int) root);
        } else {
            int below = (int) Math.pow(Math.floor(root), 2);
            int above = (int) Math.pow(Math.ceil(root), 2);
            System.out.println("Squares either side: " + below + " and " + above);
            if (Math.abs(n - below) < Math.abs(above - n))
                System.out.println("Nearest: " + below);
            else
                System.out.println("Nearest: " + above);
        }
    }
}
```

```
Enter a positive integer: 196
196 is a perfect square of 14

Enter a positive integer: 90
Squares either side: 81 and 100
Nearest: 81

Enter a positive integer: 115
Squares either side: 100 and 121
Nearest: 121
```

Perfect squares, digit powers and other number tests built on these methods are on [ICSE special number programs](/icse-special-number-programs-java), and series sums that lean on Math.pow are on [series programs in Java for ICSE](/icse-class-10-series-programs-java).

## Math library methods ICSE questions with answers

These questions come in Question 1 as one-mark MCQs and in Question 2 as two-mark parts: give the output, name the return type, or write the expression. Answer each before opening it.

### One-mark questions

- Which package contains the Math class?
Answer java.lang, which is imported into every program automatically.

- What is the return type of Math.ceil(5)?
Answer double. It returns 5.0.

- Give the output of Math.round(8.49) + Math.round(8.5).
Answer 17. 8 + 9, added as long values.

- Which Math method returns a value from 0.0 up to but not including 1.0?
Answer Math.random().

- Give the output of Math.abs(Math.floor(-3.2)).
Answer 4.0. floor of -3.2 is -4.0, and abs of a double is a double.

- Which method finds the cube root: Math.sqrt, Math.cbrt or Math.pow?
Answer Math.cbrt, which also works for negative numbers.

### Two-mark questions

- Write the Java expression for &radic;(3x + y&sup2;).
Answer Math.sqrt(3 * x + Math.pow(y, 2)), or Math.sqrt(3 * x + y * y).

- Differentiate between Math.ceil() and Math.floor().
Answer ceil returns the smallest whole number greater than or equal to its argument; floor returns the largest whole number less than or equal to it. Both return double: Math.ceil(4.2) is 5.0 and Math.floor(4.2) is 4.0.

- Give the output: double d = Math.pow(2, 10) / Math.sqrt(64); System.out.println(d);
Answer 128.0. 1024.0 divided by 8.0.

- Why does int k = Math.round(9.6); not compile? Correct it.
Answer Math.round of a double returns long, which cannot be stored in an int without a cast. Write long k = Math.round(9.6); or int k = (int) Math.round(9.6);.

- Write an expression for a random whole number from 10 to 20, both included.
Answer 10 + (int) (Math.random() * 11). There are eleven values, so the multiplier is 11.

One-mark questions from every chapter in the same style are on [ICSE Computer Applications MCQ questions](/icse-computer-applications-mcq-questions).

## Ten methods, learned until the return type is automatic

Students rarely forget what sqrt does. They forget that it returns a double. So practice is built around saying the type before the value, every time.

-
**Type first, value second** The Tuesday 5:30 PM IST class opens with a rapid round of Math calls. For each one the student names the return type, then the printed value, and a missing .0 counts as wrong.

-
**Negative numbers on purpose** Rounding, ceiling and floor are drilled with negative arguments and halves, because that is where the board's options are built to mislead.

-
**Formulas to expressions** Physics and maths formulas from the student's own school books are turned into Java expressions and run in BlueJ to check the brackets.

-
**Math inside programs** On Wednesday at 8:00 PM IST the methods appear inside full programs, such as number tests and series, written by hand and marked against the board scheme on screen.

-
**Mock papers from December** Complete two-hour papers bring Math questions back in both sections, timed and marked like the real thing.

Math methods are Class 9 content that Class 10 revises; the rest of that revision is on [Class 9 Java revision for Class 10](/icse-class-9-java-revision-for-class-10).

## The courses behind this page

- [ICSE Computer Applications, Java with BlueJ](/courses/icse-computer-applications-java-bluej-course): Class 9 and 10 Computer Applications in a mini batch, with a short Math return-type drill at the start of the Tuesday class.
- [Computer Science Class 11 and 12](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course): For students moving to ISC, where the same Math calls sit inside bigger number programs.
- [Data Structures and Algorithms](/courses/data-structures-algorithms-masterclass-college): For the student who likes floors, ceilings and square roots enough to meet them in binary search and complexity.

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

**Which Math methods are in the ICSE Computer Applications syllabus?** The 2026-27 syllabus lists ten methods of the Math class: pow(x, y), sqrt(x), cbrt(x), ceil(x), floor(x), round(x), abs(a), max(a, b), min(a, b) and random(). They are taught in Class 9 and revised in Class 10, and the 2027 paper can ask about any of them in Section A or use them inside a Section B program.

**What is the return type of Math.pow and Math.sqrt?** Both return double, whatever type of argument you pass. So Math.pow(5, 2) prints 25.0 and Math.sqrt(81) prints 9.0. To store the result in an int you must cast it, as in (int) Math.pow(5, 2), and the cast removes any fractional part.

**What is the difference between Math.round, Math.ceil and Math.floor?** Math.ceil moves up to the next whole number and Math.floor moves down; both return double, so 6.1 gives 7.0 and 6.0. Math.round goes to the nearest whole number, with halves moving up, and returns a long for a double argument, so 6.5 gives 7 with no decimal point.

**What does Math.round(-2.5) return in Java?** It returns -2. Java rounds a half towards positive infinity, and the next whole number up from -2.5 is -2. A value just past the half, such as -2.51, rounds to -3. This is one of the most common Math traps in ICSE output questions.

**Why does Math.sqrt of a negative number print NaN?** A negative number has no real square root, so Java returns the special double value NaN, meaning "not a number", instead of stopping with an error. Use Math.cbrt for cube roots of negative numbers, which works, or take Math.abs first if the question allows it.

**What is the return type of Math.abs, Math.max and Math.min?** They return the same type as their arguments: int for int arguments and double for double arguments. If one argument is int and the other is double, the int is promoted first, so Math.max(8, 11.0) returns the double 11.0.

**How do you generate a random number between 1 and 100 in Java?** Use 1 + (int) (Math.random() * 100). Math.random() gives a double from 0.0 up to but not including 1.0; multiplying by 100 stretches it, the cast removes the fraction to give 0 to 99, and adding 1 shifts it to 1 to 100. Keep the brackets around the multiplication.

**Do I need to import anything to use Math methods in Java?** No. The Math class is in the java.lang package, which Java imports into every program automatically. You call its methods through the class name, as in Math.sqrt(x), because they are static; you never create a Math object.

**Are trigonometric methods like Math.sin in the ICSE 2027 syllabus?** The 2026-27 syllabus list we checked names only pow, sqrt, cbrt, ceil, floor, round, abs, max, min and random. Some textbooks mention sin, cos, log or exp, but questions should be set from the syllabus list, so learn those ten thoroughly first.

**Do you teach Math library methods in live classes?** Yes. In the ICSE mini batch on Tuesday at 5:30 PM IST and Wednesday at 8:00 PM IST, each Tuesday opens with a return-type drill and the methods are then used inside full programs. Personalised one to one classes are available at a time the family picks, in India or abroad.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Tue and Wed ICSE Java batch](/icse-class-10-java-classes-online), [ICSE Java classes in the Gulf and abroad](/icse-class-10-computer-applications-classes-gulf-and-abroad), [ICSE BlueJ Java coaching](/icse-class-10-bluej-java-coaching), [ICSE computer crash course](/icse-computer-applications-crash-course), [ICSE computer tuition in Kolkata](/icse-computer-tuition-kolkata), [ICSE computer tuition in Bangalore](/icse-computer-tuition-bangalore), [ICSE computer tuition in Mumbai](/icse-computer-tuition-mumbai), [1-on-1 private Java tutor](/icse-computer-applications-private-tutor), [ICSE computer tuition in Lucknow](/icse-computer-tuition-lucknow), [ICSE computer tuition in Pune](/icse-computer-tuition-pune), [ICSE computer tuition near me](/icse-computer-tuition-near-me), [The mini batch, explained](/icse-computer-applications-small-batch-classes).

**Chapter by chapter:** [ICSE Computer Applications syllabus](/icse-class-10-computer-applications-syllabus-explained), [User-defined methods and overloading](/icse-class-10-user-defined-methods-overloading), [Constructors](/icse-class-10-constructors-questions), [Wrapper and library classes](/icse-class-10-wrapper-and-library-classes), [Class as the basis of all computation](/icse-class-10-class-as-basis-of-computation), [Encapsulation and access specifiers](/icse-class-10-encapsulation-access-specifiers), [Operators and expressions](/icse-class-10-operators-in-java), [Loops and loop conversion](/icse-class-10-loop-programs-java), [Data types, input and type casting](/icse-class-10-data-types-and-input-java), [Class 9 Java revision for Class 10](/icse-class-9-java-revision-for-class-10).

**Programs for Section B:** [ICSE Java programs practice](/icse-class-10-java-programs-practice), [String programs](/icse-class-10-string-programs), [Special number programs](/icse-special-number-programs-java), [Sorting and searching programs](/icse-class-10-sorting-and-searching-programs), [2D array programs](/icse-class-10-2d-array-programs), [Pattern programs](/icse-class-10-pattern-programs-java), [Menu driven and switch case](/icse-class-10-menu-driven-programs), [Series programs](/icse-class-10-series-programs-java), [Slab and bill programs](/icse-class-10-slab-and-bill-programs).

**Questions and practice:** [ICSE CA important questions](/icse-class-10-computer-applications-important-questions), [Specimen paper and mock tests](/icse-class-10-computer-applications-specimen-paper-and-mock-tests), [Previous year papers, solved](/icse-computer-applications-previous-year-papers-solved), [Predict the output questions](/icse-class-10-java-output-questions), [Competency and case study questions](/icse-computer-applications-competency-questions), [MCQ for Question 1](/icse-computer-applications-mcq-questions), [Find the error questions](/icse-class-10-java-error-finding-questions), [Difference between questions](/icse-computer-difference-between-questions).

**Notes and revision:** [Chapter-wise notes](/icse-computer-applications-notes), [Textbook solutions guide](/icse-computer-applications-textbook-solutions-guide), [Worksheets with answers](/icse-computer-applications-worksheets).

**Exam, marks and internal assessment:** [ICSE board exam preparation](/icse-class-10-computer-applications-board-exam-preparation), [Exam date 2027 and paper pattern](/icse-class-10-computer-applications-exam-date-and-paper-pattern), [Project and internal assessment](/icse-class-10-computer-applications-project-and-internal-assessment), [How to score 100](/how-to-score-100-in-icse-computer-applications), [Paper analysis and answer key](/icse-computer-applications-paper-analysis), [Computer or Commercial Applications?](/icse-computer-applications-vs-commercial-applications).

---

*Canonical: https://learn.modernagecoders.com/icse-class-10-math-library-methods*
