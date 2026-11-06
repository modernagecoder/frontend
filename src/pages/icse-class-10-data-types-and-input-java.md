---
title: "Data Types in Java ICSE Class 10: Casting and Scanner 2027"
description: "Data types in Java for ICSE Class 10: the primitive type table, implicit and explicit type casting with results, Scanner methods and the nextLine pitfall."
canonical: https://learn.modernagecoders.com/icse-class-10-data-types-and-input-java
source: src/pages/icse-class-10-data-types-and-input-java.html
updated: 2026-11-06
---

> Java has eight primitive data types: byte, short, int and long for whole numbers, float and double for decimals, char for one character and boolean for true or false. String, arrays and objects are non-primitive types. In a mixed expression Java widens the smaller type itself (implicit conversion, or coercion); moving to a smaller type needs an explicit cast, so (int) 9.99 gives 9. ICSE input uses the Scanner class, where nextLine straight after nextInt returns an empty String. Our ICSE mini batch practises all of it on Tuesday and Wednesday evenings in India, with one to one classes for any other time.

## Values and data types ICSE: the eight primitive types

A data type tells Java what kind of value a variable holds, how much memory it uses and which operations are allowed. The ranges and default values below were printed by Java itself from each type's MIN_VALUE and MAX_VALUE constants and from unassigned fields.

- Type | Holds | Size | Range | Default | Literal

- byte | Small whole number | 8 bits | -128 to 127 | 0 | None; byte b = 12; works

- short | Whole number | 16 bits | -32768 to 32767 | 0 | None; short s = 900; works

- int | Whole number | 32 bits | -2147483648 to 2147483647 | 0 | 425

- long | Large whole number | 64 bits | About &plusmn;9.22 x 1018 | 0 | 3000000000L

- float | Decimal, about 7 digits | 32 bits | Up to about 3.4 x 1038 | 0.0 | 2.75f

- double | Decimal, about 15 digits | 64 bits | Up to about 1.8 x 10308 | 0.0 | 2.75

- char | One Unicode character | 16 bits | Codes 0 to 65535 | Code 0 | 'k'

- boolean | true or false | Not fixed in bits by Java | true, false | false | true

Default values apply to instance variables and array elements only. A local variable inside a method has no default, which is why using one before giving it a value does not compile. String, arrays and class objects are non-primitive (reference) types: their default is null.

### Literals and escape sequences

- Literal | Type | Escape sequence | Meaning

- 64, -3 | int (integer literal) | \n | New line

- 64L | long | \t | Horizontal tab

- 6.4, 6.4e2 | double (real literal) | \\ | One backslash

- 6.4f | float | \" | Double quote inside a String

- '6' | char (character literal) | \' | Single quote

- "6" | String (string literal) | Run: System.out.println("A\tB\\C\"D\'E"); printed A, a tab, then B\C"D'E

- true, false | boolean literals (the word null is the null literal) | An escape sequence counts as one character: '\n' is a single char

## Implicit and explicit type casting ICSE, worked to the result

Implicit conversion (coercion, or widening) is done by Java on its own when a smaller type meets a larger one. Explicit conversion (type casting, or narrowing) is written by the programmer as (type) value and may lose data. The widening order is byte, short, int, long, float, double, with char widening to int.

- # | Code | Result (run) | Kind and reason

- 1 | int a = 7; double x = 2.5;a + x | 9.5 | Implicit: int widened to double

- 2 | char ch = 'A';ch + 3 | 68 | Implicit: char widened to int, code 65 plus 3

- 3 | short s1 = 10, s2 = 20;int sum = s1 + s2; | 30 | Implicit: short arithmetic is done in int

- 4 | byte p = 10, q = 20;byte r = p + q; | Does not compile | javac: possible lossy conversion from int to byte; write (byte) (p + q)

- 5 | 10 / 4 * 4.0 | 8.0 | 10 / 4 is int 2 first; only then widened for * 4.0

- 6 | 5 / 2.0f | 2.5 | Implicit: int widened to float

- 7 | float ff = 1.1f;double dd = ff; | 1.100000023841858 | Implicit widening keeps float's slightly inexact value

- 8 | (int) 9.99 and (int) -9.99 | 9 and -9 | Explicit: the fraction is cut off, never rounded

- 9 | (int) 7.5 and Math.round(7.5) | 7 and 8 | A cast truncates; round rounds

- 10 | (char) 66 and (int) 'z' | B and 122 | Explicit: between a code and its character

- 11 | (byte) 200 | -56 | Explicit narrowing out of range wraps round: 200 minus 256

- 12 | double avg = (double) (17 + 18) / 2; | 17.5 | Explicit: the cast makes 35 a double before the division

- 13 | char cc = 'A' + 2; | C | Allowed: a constant that fits in char needs no cast

- 14 | 'a' + 'b' and "" + 'a' + 'b' | 195 and ab | Two chars add as ints (97 + 98); a String first makes them join

- 15 | int big = 2147483647;big = big + 1; | -2147483648 | Overflow: past the int maximum the value wraps to the minimum, with no error

- 16 | 86400 * 1000 * 365 and 86400L * 1000 * 365 | 1471228928 and 31536000000 | Milliseconds in a year overflow int; one L makes the whole product long

Writing long n = 3000000000; without the L does not even compile: javac says integer number too large, because a plain whole-number literal is an int. The return type of each Math method, which decides many of these results, is on
[Math library methods for ICSE Class 10](/icse-class-10-math-library-methods), and how the operators combine types is on
[operators in Java for ICSE Class 10](/icse-class-10-operators-in-java).

## Scanner class input ICSE: every method and what it reads

Import java.util.Scanner (or java.util.*), create one object with new Scanner(System.in), print a prompt, then call the method that matches the type you want. Each next method skips leading spaces and reads one token; nextLine reads everything up to the end of the line.

- Method | Returns | Reads | If the input does not fit

- nextInt() | int | One whole-number token | InputMismatchException

- nextLong(), nextShort(), nextByte() | long, short, byte | One whole-number token in that type's range | InputMismatchException

- nextDouble(), nextFloat() | double, float | One number token; 12 is read as 12.0 | InputMismatchException

- nextBoolean() | boolean | The token true or false, in any case | InputMismatchException

- next() | String | One word: stops at a space | Always works on text

- nextLine() | String | The rest of the current line, spaces included | Returns "" if only the line end is left

- next().charAt(0) | char | The first character of the next word | There is no nextChar() method

```
Scanner sc = new Scanner(System.in);
String first = sc.next();
String rest = sc.nextLine();
char grade = sc.next().charAt(0);
double fee = sc.nextDouble();
boolean paid = sc.nextBoolean();
long phone = sc.nextLong();

// Input line 1: Ananya Rao Kumar
// Input line 2: B+ 1250.75 true 9876543210
// first = [Ananya]  rest = [ Rao Kumar]
// grade = [B]  fee = [1250.75]
// paid = [true]  phone = [9876543210]
```

- To read | Use

- Marks, age, count | nextInt()

- Price, percentage, radius | nextDouble()

- Phone or account number | nextLong()

- One word, such as a city | next()

- A full name or sentence | nextLine()

- A grade or menu letter | next().charAt(0)

Values can also reach a program through initialisation in the code or as method parameters, which BlueJ asks for in a dialog box when the method is called. Converting a String that was read into a number uses the parse methods covered on
[wrapper and library classes for ICSE Class 10](/icse-class-10-wrapper-and-library-classes).

## The nextLine pitfall: why the text comes back empty, and the fix

nextInt reads the digits but leaves the Enter key, the line end, waiting in the input. The nextLine that follows finds that line end straight away and returns an empty String, so the program never waits for the text. Add one extra nextLine() call after nextInt to use up the leftover line end.

```
import java.util.Scanner;

public class Pitfall2 {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("Flat number: ");
        int flat = in.nextInt();
        System.out.print("Society: ");
        String society = in.nextLine();
        System.out.println(flat + ", " + society + ".");
    }
}
// Typed: 402, Enter, Green Meadows, Enter
// Printed: 402, .
```

```
import java.util.Scanner;

public class Fixed2 {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("Flat number: ");
        int flat = in.nextInt();
        in.nextLine();
        System.out.print("Society: ");
        String society = in.nextLine();
        System.out.println(flat + ", " + society + ".");
    }
}
// Typed: 402, Enter, Green Meadows, Enter
// Printed: 402, Green Meadows.
```

### A Section B input program that avoids the pitfall

```
import java.util.Scanner;

public class Report {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Name: ");
        String name = sc.nextLine();
        System.out.print("Marks in 5 subjects: ");
        int total = 0;
        for (int k = 1; k <= 5; k++)
            total += sc.nextInt();
        double percent = total / 5.0;
        int rounded = (int) Math.round(percent);
        char band = percent >= 90 ? 'A' : percent >= 75 ? 'B' : 'C';
        System.out.println(name + ": total " + total + ", "
            + percent + "%, rounded " + rounded + ", band " + band);
    }
}
// Input: Ishaan Mehta / 88 92 79 95 82
// Ishaan Mehta: total 436, 87.2%, rounded 87, band B
```

- Variable | Type | Purpose

- name | String | Full name, read with nextLine

- total | int | Sum of the five marks

- k | int | Loop counter, 1 to 5

- percent | double | Average, with decimals kept

- rounded | int | Percentage to the nearest whole number

- band | char | A, B or C from the percentage

A wrong token typed into nextInt stops the program with InputMismatchException; that and other crashes are classified on
[ICSE Java error finding questions](/icse-class-10-java-error-finding-questions).

## Type conversion Java ICSE: the question shapes and how to answer

Section A is 40 compulsory marks of one-mark MCQs and two-mark parts, and this chapter supplies a steady share of both. The shapes repeat, so a fixed answer habit for each one is worth building.

### "Name the data type of"
Look at the literal itself: a decimal point means double unless it ends in f; single quotes mean char; double quotes mean String, even for one letter or a digit.

### "State the result type"
Find the largest type in the expression after char, byte and short have become int. That type is the answer, and the value must be written in it: 8.0, not 8.

### "Implicit or explicit?"
If you can see a (type) in brackets, it is explicit. If Java converts on its own because a smaller type met a bigger one, it is implicit, also called coercion or widening.

### "Primitive or non-primitive?"
The eight keywords in the table are primitive. String, arrays and classes are non-primitive, also called reference or composite types.

### "Write the statement to input"
Match the method to the type: a ten-digit number needs nextLong, a character needs next().charAt(0). Declare the variable in the same line.

### "Size in bytes"
Convert the bits: byte 1, short 2, int 4, long 8, float 4, double 8, char 2. Writing bits when bytes are asked is a common lost mark.

Mixed one-mark questions from every chapter are on
[ICSE Computer Applications MCQ questions](/icse-computer-applications-mcq-questions), and the Class 9 chapters that this page revises are mapped on
[Class 9 Java revision for Class 10](/icse-class-9-java-revision-for-class-10).

## How the mini batch practises types, casts and input

Types are learnt by predicting a result type before running the code, and input is learnt by typing real values into real programs. The week is split that way.

-
**Tuesday: predict the type, then the value** At 5:30 PM IST the batch gets a timed set of mixed expressions and casts. Each answer is written as a type and a value, such as "double, 8.0".

-
**BlueJ checks each one live** Every expression is run on a shared screen. A missing .0 or a wrongly rounded cast is spotted by the whole group, not just the student who wrote it.

-
**Wednesday: input programs** At 8:00 PM IST students write a Section B program that reads mixed input with Scanner. The nextLine pitfall is triggered on purpose once, so nobody meets it for the first time in an exam.

-
**Variable lists every time** Each program ends with a variable list of name, type and purpose, the habit the ICSE paper asks for in its instructions.

-
**Full papers from December** Timed two-hour mock papers then mix type and input questions into both sections, and each script is marked the way an ICSE examiner would mark it.

Data types and input are the base for every program on
[ICSE Class 10 Java programs for practice](/icse-class-10-java-programs-practice).

## The courses behind this page

- [ICSE Computer Applications, Java with BlueJ](/courses/icse-computer-applications-java-bluej-course): Our small-group ICSE course, in which every result type is guessed on paper first and every input program is typed into BlueJ and run.
- [Computer Science Class 11 and 12](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course): Two more years of Java after Class 10, where a wrong type in a long program costs far more time to trace.
- [Data Structures and Algorithms](/courses/data-structures-algorithms-masterclass-college): Memory, arrays and how a choice between int and long changes what a program can handle.

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

**How many data types are there in Java?** Java has eight primitive data types: byte, short, int, long, float, double, char and boolean. Besides these there are non-primitive, or reference, types such as String, arrays and classes, which hold a reference to an object rather than the value itself. ICSE expects the eight primitive types with their sizes.

**What is the difference between primitive and non-primitive data types?** Primitive types are built into Java, store the value directly and have a fixed size, such as int at 32 bits. Non-primitive types, such as String, arrays and class types, are created from classes, store a reference to an object, can be null, and can have methods called on them.

**What is implicit type conversion in Java?** Implicit conversion, also called coercion or widening, is the automatic change of a smaller type into a larger one when they meet in an expression or assignment. For example, an int added to a double is converted to double first, so 7 + 2.5 gives 9.5. No data is lost, so Java does it without being asked.

**What is explicit type casting in Java with an example?** Explicit casting is a conversion the programmer writes by putting the target type in brackets before a value. (int) 9.99 gives 9, because the fraction is cut off, and (char) 66 gives B. It is needed whenever a value moves to a smaller type, such as double to int, since data may be lost.

**What is the size of char in Java?** char is 16 bits, which is 2 bytes, because Java stores characters in Unicode. It holds codes from 0 to 65535. This differs from languages that use 1 byte for a character, and ICSE questions sometimes test exactly that difference.

**Which Scanner method is used to input a character in Java?** Scanner has no nextChar method. The usual way is sc.next().charAt(0), which reads the next word as a String and keeps its first character. If the user types more than one character, only the first is kept, so B+ would give B.

**What is the difference between next() and nextLine()?** next() reads one word: it skips leading spaces and stops at the next space or line end. nextLine() reads the whole rest of the current line, spaces included, and then moves past the line end. Use next() for one word such as a city and nextLine() for a full name or a sentence.

**Why is nextLine() skipped after nextInt()?** nextInt() reads the number but leaves the line end from the Enter key in the input. The next nextLine() reads up to that line end at once and returns an empty String, so it looks as if the input was skipped. Call sc.nextLine() once more after nextInt() to use up the leftover line end.

**What is the default value of a variable in Java?** Instance variables and array elements get defaults: 0 for whole-number types, 0.0 for float and double, the character with code 0 for char, false for boolean and null for String and other references. Local variables inside a method get no default and must be assigned before use, or the program will not compile.

**Do you teach data types and Scanner input in the live ICSE classes?** Yes. The mini batch drills result types and casts in timed sets every Tuesday at 5:30 PM IST and writes a Scanner input program every Wednesday at 8:00 PM IST, with every answer run in BlueJ on a shared screen. Students who need gaps filled from Class 9 can take personalised one to one classes.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Tue and Wed ICSE Java batch](/icse-class-10-java-classes-online), [ICSE Java classes in the Gulf and abroad](/icse-class-10-computer-applications-classes-gulf-and-abroad), [ICSE BlueJ Java coaching](/icse-class-10-bluej-java-coaching), [ICSE computer crash course](/icse-computer-applications-crash-course), [ICSE computer tuition in Kolkata](/icse-computer-tuition-kolkata), [ICSE computer tuition in Bangalore](/icse-computer-tuition-bangalore), [ICSE computer tuition in Mumbai](/icse-computer-tuition-mumbai), [1-on-1 private Java tutor](/icse-computer-applications-private-tutor), [ICSE computer tuition in Lucknow](/icse-computer-tuition-lucknow), [ICSE computer tuition in Pune](/icse-computer-tuition-pune), [ICSE computer tuition near me](/icse-computer-tuition-near-me), [The mini batch, explained](/icse-computer-applications-small-batch-classes).

**Chapter by chapter:** [ICSE Computer Applications syllabus](/icse-class-10-computer-applications-syllabus-explained), [User-defined methods and overloading](/icse-class-10-user-defined-methods-overloading), [Constructors](/icse-class-10-constructors-questions), [Wrapper and library classes](/icse-class-10-wrapper-and-library-classes), [Class as the basis of all computation](/icse-class-10-class-as-basis-of-computation), [Encapsulation and access specifiers](/icse-class-10-encapsulation-access-specifiers), [Math library methods](/icse-class-10-math-library-methods), [Operators and expressions](/icse-class-10-operators-in-java), [Loops and loop conversion](/icse-class-10-loop-programs-java), [Class 9 Java revision for Class 10](/icse-class-9-java-revision-for-class-10).

**Programs for Section B:** [ICSE Java programs practice](/icse-class-10-java-programs-practice), [String programs](/icse-class-10-string-programs), [Special number programs](/icse-special-number-programs-java), [Sorting and searching programs](/icse-class-10-sorting-and-searching-programs), [2D array programs](/icse-class-10-2d-array-programs), [Pattern programs](/icse-class-10-pattern-programs-java), [Menu driven and switch case](/icse-class-10-menu-driven-programs), [Series programs](/icse-class-10-series-programs-java), [Slab and bill programs](/icse-class-10-slab-and-bill-programs).

**Questions and practice:** [ICSE CA important questions](/icse-class-10-computer-applications-important-questions), [Specimen paper and mock tests](/icse-class-10-computer-applications-specimen-paper-and-mock-tests), [Previous year papers, solved](/icse-computer-applications-previous-year-papers-solved), [Predict the output questions](/icse-class-10-java-output-questions), [Competency and case study questions](/icse-computer-applications-competency-questions), [MCQ for Question 1](/icse-computer-applications-mcq-questions), [Viva and oral questions](/icse-computer-applications-viva-questions), [Find the error questions](/icse-class-10-java-error-finding-questions), [Difference between questions](/icse-computer-difference-between-questions).

**Notes and revision:** [Chapter-wise notes](/icse-computer-applications-notes), [Textbook solutions guide](/icse-computer-applications-textbook-solutions-guide), [Worksheets with answers](/icse-computer-applications-worksheets).

**Exam, marks and internal assessment:** [ICSE board exam preparation](/icse-class-10-computer-applications-board-exam-preparation), [Exam date 2027 and paper pattern](/icse-class-10-computer-applications-exam-date-and-paper-pattern), [Project and internal assessment](/icse-class-10-computer-applications-project-and-internal-assessment), [How to score 100](/how-to-score-100-in-icse-computer-applications), [Paper analysis and answer key](/icse-computer-applications-paper-analysis), [Computer or Commercial Applications?](/icse-computer-applications-vs-commercial-applications).

---

*Canonical: https://learn.modernagecoders.com/icse-class-10-data-types-and-input-java*
