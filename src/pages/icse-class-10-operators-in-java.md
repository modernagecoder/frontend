---
title: "Operators in Java ICSE Class 10: Increment Traps Solved"
description: "Operators in Java for ICSE Class 10: a++ + ++a questions evaluated step by step, the precedence table, the ternary operator and compound assignment."
canonical: https://learn.modernagecoders.com/icse-class-10-operators-in-java
source: src/pages/icse-class-10-operators-in-java.html
updated: 2026-11-06
---

> Operators in Java for ICSE Class 10 come in six families: arithmetic, relational, logical, assignment (with compound forms such as +=), increment and decrement, and the ternary operator. The most asked question is a++ + ++a style evaluation. The rule: Java reads operands left to right; a postfix operator hands over the old value and then changes the variable, a prefix operator changes it first; only then do precedence rules combine the values. We drill these expressions live twice a week in an Indian evening mini batch, and privately one to one at a time that suits the family.

## Types of operators in Java for ICSE Class 10

An operator is a symbol that performs an operation on one, two or three operands. ICSE classifies them two ways: by job (arithmetic, relational, logical and so on) and by the number of operands (unary, binary, ternary). Both appear in Section A.

- Family | Operators | Operands | Example | Result type

- Arithmetic | + - * / % | Binary | 17 % 5 gives 2 | Number

- Unary minus and plus | - + | Unary | -x | Number

- Increment, decrement | ++ -- | Unary | n++, --n | Number (also char)

- Relational | == != < > <= >= | Binary | 8 >= 8 gives true | boolean

- Logical | && || ! | Binary, ! is unary | !(3 > 1) gives false | boolean

- Assignment | = | Binary | total = 0 | Type of the left side

- Compound assignment | += -= *= /= %= | Binary | q *= 3 means q = q * 3 | Type of the left side

- Ternary (conditional) | ? : | Ternary, the only one | a > b ? a : b | The common type of the two branches

- String join | + with a String | Binary | "Class " + 10 | String

- Object creation | new | Unary | new int[5] | A reference

Two facts students drop marks on: / between two ints throws away the fraction, and % keeps the sign of the left operand. The full set of division traps sits on
[ICSE Java output questions](/icse-class-10-java-output-questions), and the types that decide every result are on
[data types and type casting for ICSE Class 10](/icse-class-10-data-types-and-input-java).

## Increment and decrement questions ICSE: the four-step method

Evaluate operands strictly left to right, write down the value each one hands over and what the variable becomes, and only after that apply * / % before + -. Postfix (a++) hands over the old value; prefix (++a) changes the variable first and hands over the new one.

-
**Write the starting values** Put every variable in a row at the top of your working, with its value before the statement runs.

-
**Go operand by operand, left to right** For each operand write two things: the value used in the expression, and the variable's value after it. A plain variable just hands over its current value.

-
**Now apply precedence to the values** Replace each operand with its value and work the arithmetic: * / % first, then + -, left to right within a level.

-
**Assignment happens last** The = (or +=) writes its result after everything on the right is done, overwriting any change an increment made to the same variable.

```
int a = 4;
int b = ++a + a++ + a;
System.out.println("a=" + a + " b=" + b);

// Output: a=6 b=16
```

- Operand | Value used | a after

- ++a | 5 | 5

- a++ | 5 | 6

- a | 6 | 6

- 5 + 5 + 6 | b = 16 | 6

```
int p = 3;
p = p++ + p++ * ++p;
System.out.println("p=" + p);

// Output: p=27
```

- Operand | Value used | p after

- p++ | 3 | 4

- p++ | 4 | 5

- ++p | 6 | 6

- 3 + 4 * 6 | 27 | 6

- assigned to p | 27 | 27

### Ten more increment and decrement questions, with answers

- # | Code | Result | Values in order

- 3 | int x = 10;int y = x-- - --x + x++; | x = 9, y = 10 | 10 (x 9), 8 (x 8), 8 (x 9): 10 - 8 + 8

- 4 | int m = 7, n = 2;m += m++ % n + --n; | m = 9, n = 1 | Left m saved as 7; m++ gives 7, 7 % 2 is 1; --n gives 1; 7 + (1 + 1)

- 5 | int a = 5;a = a++ + a--; | a = 11 | 5 (a 6), 6 (a 5), then 11 overwrites the 5

- 6 | int i = 2;i = i++ * i--; | i = 6 | 2 (i 3), 3 (i 2): 2 * 3

- 7 | int k = 9;int r = k-- / 2 + --k % 3; | r = 5, k = 7 | 9 (k 8), 9 / 2 is 4; 7 (k 7), 7 % 3 is 1

- 8 | int s = 1;s = s + s++ + ++s; | s = 5 | 1, 1 (s 2), 3 (s 3): 1 + 1 + 3

- 9 | int a = 2, b = 3;a = a++ * --b + b++ * a; | a = 10, b = 3 | 2 (a 3), 2 (b 2), 2 (b 3), 3: 2 * 2 + 2 * 3

- 10 | int a = 3;a += a++ + a; | a = 10 | Left a saved as 3; 3 (a 4), 4: 3 + (3 + 4)

- 11 | int z = 6;z--;--z; | z = 4 | On their own line, prefix and postfix do the same thing

- 12 | char c = 'A';c++;c += 2; | c = D | ++ and += keep the char type, so c moves A, B, D

Question 11 is the free mark: when ++ or -- stands alone as a statement, prefix and postfix are identical. The difference shows only when the value is used inside a bigger expression. More fragments of this kind, mixed with other traps, are on
[ICSE Computer Applications MCQ questions](/icse-computer-applications-mcq-questions).

## Operator precedence in Java for ICSE, with associativity

Precedence decides which operator binds first when several share an expression; associativity decides the order between operators of the same level. Brackets override both. The table runs from highest to lowest for the operators in the syllabus.

- Level | Operators | Associativity

- 1 | ( ) brackets, [ ] array index, . member access | Left to right

- 2 | Postfix a++ a-- | Left to right

- 3 | Prefix ++a --a, unary + -, !, cast (type) | Right to left

- 4 | * / % | Left to right

- 5 | + - (and String +) | Left to right

- 6 | < <= > >= | Left to right

- 7 | == != | Left to right

- 8 | && | Left to right

- 9 | || | Left to right

- 10 | ? : | Right to left

- 11 | = += -= *= /= %= | Right to left

### Precedence worked on real expressions

- Expression | Steps | Value

- 8 + 12 / 4 * 2 - 3 % 2 | 12 / 4 = 3, 3 * 2 = 6, 3 % 2 = 1, then 8 + 6 - 1 | 13

- -3 * -2 + 7 % -4 | Unary minus first; 6 + 3 (the remainder takes the sign of 7) | 9

- 20 - 6 - 4 and 64 / 8 / 2 | Left to right: (20 - 6) - 4, (64 / 8) / 2 | 10 and 4

- 2 + 3 * 4 > 10 && 15 % 4 == 3 | Arithmetic, then > and ==, then &&: true && true | true

- 5 > 3 && 2 > 4 || !(7 == 7) | && before ||: (true && false) || false | false

- 10 + 5 + "Java" + 10 * 2 | * first gives 20; then left to right: 15, "15Java", "15Java20" | 15Java20

- int a = 4, b;b = a = a * 2 + 1; | = is right to left: a gets 9, then b gets a | a = 9, b = 9

A common slip: high precedence for postfix ++ does not mean it runs "first" across the whole line. It binds tightly to its own variable; the operands are still read left to right, as worked example 2 showed.

## Ternary operator ICSE: syntax, if-else conversion and nesting

The ternary operator, condition ? value1 : value2, gives value1 when the condition is true and value2 when it is false. It is the only Java operator with three operands, and ICSE often asks students to rewrite an if-else with it, or the reverse.

```
int age = 16;
String msg;
if (age >= 18)
    msg = "Adult";
else
    msg = "Minor";
System.out.println(msg);

// Output: Minor
```

```
int age = 16;
String msg = age >= 18 ? "Adult" : "Minor";
System.out.println(msg);

// Output: Minor
```

- Task | Ternary code | Result (run)

- Largest of three: a = 14, b = 29, c = 21 | int big = a > b ? (a > c ? a : c) : (b > c ? b : c); | 29

- Sign of n = -8 | String s = n > 0 ? "positive" : n < 0 ? "negative" : "zero"; | negative

- Free delivery above 500 for amount = 650 | double fee = amount >= 500 ? 0 : 40; | 0.0

- Leap year for y = 2024 | boolean leap = (y % 4 == 0 && y % 100 != 0) || y % 400 == 0;System.out.println(leap ? "leap" : "not leap"); | leap

Two notes. The nested ternary for the sign reads right to left: everything after the first : is itself a ternary. And the fee prints 0.0, not 0, because the result is stored in a double; the type of a ternary result is part of the answer. When a decision has more than two or three branches, an if-else-if ladder or a switch is clearer, as on
[menu driven programs in Java for ICSE](/icse-class-10-menu-driven-programs).

## Compound assignment and writing Java expressions for formulas

A compound operator such as q *= 3 + 2 means q = q * (3 + 2): the whole right side is worked first. It also casts the result back to the type of the variable silently, which a plain = will not do.

- Code | Result (run) | Why

- int q = 20;q %= 6;q *= 3 + 2; | 10 | 20 % 6 is 2; then 2 * (3 + 2), not 2 * 3 + 2

- int t = 17;t /= 4;t -= 2 * 3; | -2 | 17 / 4 is 4 in int; 4 - 6

- short s = 10;s += 5.7; | 15 | += works out 15.7 and casts it back to short

- short s = 10;s = s + 5.7; | Does not compile | javac: incompatible types: possible lossy conversion from double to short

### Write the Java expression: a Section A favourite

- Maths | Java expression | Checked with

- ut + &frac12;at&sup2; | u * t + 0.5 * a * t * t | u = 10, t = 4, a = 3 gives 64.0. Writing 1 / 2 gives 40.0, because 1 / 2 is 0 in int

- (a + b) / 2ab | (a + b) / (2 * a * b) | a = 2, b = 3 gives 0.4166666666666667. Without the second bracket it is 15.0

- &radic;(b&sup2; &minus; 4ac) | Math.sqrt(b * b - 4 * a * c) | a = 1, b = -5, c = 6 gives 1.0

- |x &minus; y|&sup3; | Math.pow(Math.abs(x - y), 3) | x = 2, y = 5 gives 27.0

- P(1 + r/100)n | p * Math.pow(1 + r / 100.0, n) | int p = 1000, r = 10, n = 2 printed 1210.0000000000002, a normal floating point tail. With r / 100 it printed 1000.0, since 10 / 100 is 0

Two rules cover most of these marks: put brackets round every denominator and every numerator with more than one term, and never let an int / int stand where a fraction is meant. The return type of each Math method is listed on
[Math library methods for ICSE Class 10](/icse-class-10-math-library-methods).

## How the mini batch drills operators and expressions

Students learn this chapter by writing the value of each operand before writing any answer. The class is built so they cannot skip that step.

-
**Tuesday: a timed expression set** At 5:30 PM IST each student gets a sheet of increment, precedence and ternary items and five minutes per block. Answers go on paper with the operand-by-operand working.

-
**Each line run in BlueJ** The teacher runs every expression while the batch watches, so a wrong value is settled by Java, not by argument.

-
**The wrong step found aloud** A student whose answer differed reads out their working until the operand where it went wrong. In this chapter it is nearly always a postfix value or an assignment overwriting an increment.

-
**Wednesday: expressions inside programs** At the 8:00 PM IST class the week's program uses the same operators for real work, such as compound interest with Math.pow or a ternary grade, so the rules stick in context.

-
**Expressions inside mock papers** Once December arrives, the two-hour practice papers carry increment, precedence and formula items in Section A, graded as strictly as the board grades them.

Operators feed straight into loop conditions and counters; those are drilled on
[loop programs for ICSE Class 10](/icse-class-10-loop-programs-java), and expressions written with one wrong operator turn up on
[ICSE Java error finding questions](/icse-class-10-java-error-finding-questions).

## The courses behind this page

- [ICSE Computer Applications, Java with BlueJ](/courses/icse-computer-applications-java-bluej-course): Class 9 and 10 Computer Applications in a mini batch, where increment and precedence questions are worked on paper before BlueJ confirms them.
- [Computer Science Class 11 and 12](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course): For students heading to ISC Computer Science, where bitwise and shift operators join the ones on this page.
- [Data Structures and Algorithms](/courses/data-structures-algorithms-masterclass-college): For the student who enjoys exact evaluation and wants to apply it to algorithms and their running time.

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

**What is the difference between a++ and ++a in Java?** Both increase a by 1. a++ is postfix: it hands the current value to the expression and then increases a. ++a is prefix: it increases a first and hands over the new value. With a = 5, b = a++ makes b 5, while b = ++a makes b 6. In both cases a ends as 6.

**How do you solve a++ + ++a in Java?** Go left to right. With a = 5, a++ hands over 5 and a becomes 6; then ++a makes a 7 and hands over 7. The sum is 5 + 7 = 12 and a ends at 7. Write the value used and the new value of a for each operand before adding anything.

**What is the precedence of operators in Java for ICSE?** From high to low: brackets, postfix ++ and --, prefix ++ and --, unary minus and !, then * / %, then + -, then the comparisons less than and greater than, then == and !=, then &&, then ||, then the ternary operator, and finally the assignment operators. Brackets always override the order.

**What is the ternary operator in Java with an example?** It is the conditional operator: a condition, a question mark, a value for true, a colon and a value for false. Java returns the first value when the condition is true and the second otherwise. For example, a one-line statement can store "even" or "odd" in a String depending on whether n % 2 == 0. It is the only Java operator with three operands.

**How do you convert if-else to the ternary operator?** Check that both branches assign a value to the same variable. Then write that variable and =, followed by the condition, a question mark, the value from the if branch, a colon, and the value from the else branch, ending with one semicolon. The two assignments and the if-else keywords disappear, and the line does exactly the same job.

**What is the difference between = and == in Java?** = is the assignment operator: it stores the value on its right in the variable on its left. == is a relational operator: it compares two values and gives true or false. Writing if (x = 5) with an int x does not compile, because the condition of an if must be boolean.

**What is the difference between / and % in Java?** / gives the quotient and % gives the remainder. With two ints, 17 / 5 is 3, because the fraction is dropped, and 17 % 5 is 2. With a negative left operand the remainder is negative: -17 % 5 is -2. The pair is used in every digit-extraction program.

**What are unary, binary and ternary operators?** They are grouped by how many operands they take. Unary operators take one, such as ++, --, unary minus and !. Binary operators take two, such as + - * / %, == and !=, && and ||. The ternary conditional operator takes three: a condition and two values.

**Does x += 1 do the same as x = x + 1?** For an int x, yes. The difference shows with smaller types: for a short or char variable, x += 1 compiles because compound operators cast the result back automatically, while x = x + 1 does not compile, because x + 1 is an int and needs an explicit cast.

**Do you teach operators in the live ICSE classes?** Yes. Operators are revised early in the year and then practised every week through timed Tuesday sets at 5:30 PM IST, with every expression run in BlueJ on a shared screen. They also appear inside the Wednesday programs and the board-style mock tests. Personalised one to one classes are available at a time the family chooses.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Tue and Wed ICSE Java batch](/icse-class-10-java-classes-online), [ICSE Java classes in the Gulf and abroad](/icse-class-10-computer-applications-classes-gulf-and-abroad), [ICSE BlueJ Java coaching](/icse-class-10-bluej-java-coaching), [ICSE computer crash course](/icse-computer-applications-crash-course), [ICSE computer tuition in Kolkata](/icse-computer-tuition-kolkata), [ICSE computer tuition in Bangalore](/icse-computer-tuition-bangalore), [ICSE computer tuition in Mumbai](/icse-computer-tuition-mumbai), [1-on-1 private Java tutor](/icse-computer-applications-private-tutor), [ICSE computer tuition in Lucknow](/icse-computer-tuition-lucknow), [ICSE computer tuition in Pune](/icse-computer-tuition-pune), [ICSE computer tuition near me](/icse-computer-tuition-near-me), [The mini batch, explained](/icse-computer-applications-small-batch-classes).

**Chapter by chapter:** [ICSE Computer Applications syllabus](/icse-class-10-computer-applications-syllabus-explained), [User-defined methods and overloading](/icse-class-10-user-defined-methods-overloading), [Constructors](/icse-class-10-constructors-questions), [Wrapper and library classes](/icse-class-10-wrapper-and-library-classes), [Class as the basis of all computation](/icse-class-10-class-as-basis-of-computation), [Encapsulation and access specifiers](/icse-class-10-encapsulation-access-specifiers), [Math library methods](/icse-class-10-math-library-methods), [Loops and loop conversion](/icse-class-10-loop-programs-java), [Data types, input and type casting](/icse-class-10-data-types-and-input-java), [Class 9 Java revision for Class 10](/icse-class-9-java-revision-for-class-10).

**Programs for Section B:** [ICSE Java programs practice](/icse-class-10-java-programs-practice), [String programs](/icse-class-10-string-programs), [Special number programs](/icse-special-number-programs-java), [Sorting and searching programs](/icse-class-10-sorting-and-searching-programs), [2D array programs](/icse-class-10-2d-array-programs), [Pattern programs](/icse-class-10-pattern-programs-java), [Menu driven and switch case](/icse-class-10-menu-driven-programs), [Series programs](/icse-class-10-series-programs-java), [Slab and bill programs](/icse-class-10-slab-and-bill-programs).

**Questions and practice:** [ICSE CA important questions](/icse-class-10-computer-applications-important-questions), [Specimen paper and mock tests](/icse-class-10-computer-applications-specimen-paper-and-mock-tests), [Previous year papers, solved](/icse-computer-applications-previous-year-papers-solved), [Predict the output questions](/icse-class-10-java-output-questions), [Competency and case study questions](/icse-computer-applications-competency-questions), [MCQ for Question 1](/icse-computer-applications-mcq-questions), [Find the error questions](/icse-class-10-java-error-finding-questions), [Difference between questions](/icse-computer-difference-between-questions).

**Notes and revision:** [Chapter-wise notes](/icse-computer-applications-notes), [Textbook solutions guide](/icse-computer-applications-textbook-solutions-guide), [Worksheets with answers](/icse-computer-applications-worksheets).

**Exam, marks and internal assessment:** [ICSE board exam preparation](/icse-class-10-computer-applications-board-exam-preparation), [Exam date 2027 and paper pattern](/icse-class-10-computer-applications-exam-date-and-paper-pattern), [Project and internal assessment](/icse-class-10-computer-applications-project-and-internal-assessment), [How to score 100](/how-to-score-100-in-icse-computer-applications), [Paper analysis and answer key](/icse-computer-applications-paper-analysis), [Computer or Commercial Applications?](/icse-computer-applications-vs-commercial-applications).

---

*Canonical: https://learn.modernagecoders.com/icse-class-10-operators-in-java*
