---
title: "ICSE Computer Applications Worksheets with Answers 2027"
description: "ICSE Computer Applications worksheets for 2027: eight original Java sheets, one per chapter, each with an MCQ, outputs, a program and the answer key below."
canonical: https://learn.modernagecoders.com/icse-computer-applications-worksheets
source: src/pages/icse-computer-applications-worksheets.html
updated: 2026-10-13
---

> ICSE Computer Applications worksheets work best when there is one per chapter and each copies the paper's own shapes: a one-mark MCQ like Question 1, two-mark output, error and definition parts like Question 2, and a 15-mark program like Section B. This page gives eight original Java worksheets for the 2027 syllabus, one per chapter, each worth 22 marks, with the answer key directly below and every program run in Java. Sit each in about 25 minutes, then mark it honestly. Modern Age Coders sets and marks a new sheet every week in a Tuesday and Wednesday mini batch in India, or one to one.

## How do these ICSE Java worksheets for Class 10 work?

Each sheet takes one chapter and asks it in the five shapes the board uses. Do the sheet with the key covered, mark it against the key, and redo anything you lost marks on two days later.

- Part | Shape | Marks | Mirrors in the paper

- 1 | Multiple choice | 1 | Section A, Question 1

- 2 to 4 | Output, error, definition or trace | 2 each | Section A, Question 2

- 5 | Write a program, with comments | 15 | One Section B question

- | Whole sheet | 22 | About 25 minutes

Write on paper, not in BlueJ, because the board paper is handwritten. Mark strictly: an output missing a .0 or a space is wrong. Then write the reason beside each lost mark; after eight sheets that list shows which chapter needs another week.

## Chapter wise worksheet ICSE Java: Class IX revision and the class as the basis of computation

Sheet 1 tests the Class 9 base the whole paper rests on. Sheet 2 checks that the words class, object, state and behaviour are used exactly.

### Worksheet 1: Revision of Class IX syllabus

- Which loop always runs its body at least once? (a) for (b) while (c) do-while (d) none of these [1]

- Give the output: int p = 7, q = 2; double r = p / q + p % q; System.out.println(r); [2]

- Give the output: System.out.println(Math.ceil(4.1) + Math.round(2.5)); [2]

- How many times does for (int k = 2; k <= 20; k += 4) run? Show the values of k. [2]

- Write a program to input a positive integer and print the sum of its even digits and the count of its odd digits. [15]

- Answer key | Answer | Why

- 1 | (c) do-while | It is exit controlled: the test comes after the body.

- 2 | 4.0 | 7 / 2 is 3 in int, 7 % 2 is 1, and the int 4 is stored in a double.

- 3 | 8.0 | ceil gives 5.0, round(2.5) gives 3, and double plus long is double.

- 4 | 5 times | k is 2, 6, 10, 14, 18; at 22 the test fails.

```
import java.util.Scanner;
public class Digits {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        int evenSum = 0, oddCount = 0;
        while (n > 0) {
            int d = n % 10;          // last digit
            if (d % 2 == 0) evenSum += d;
            else oddCount++;
            n /= 10;                 // drop last digit
        }
        System.out.println("Sum of even digits = " + evenSum);
        System.out.println("Count of odd digits = " + oddCount);
    }
}

// Input 40271 gives: Sum of even digits = 6
//                    Count of odd digits = 2
```

- Variable | Type | Purpose

- n | int | The number entered, reduced each pass

- d | int | The current last digit

- evenSum | int | Running sum of even digits

- oddCount | int | Count of odd digits

### Worksheet 2: Class as the basis of all computation

- An object is (a) a data type (b) an instance of a class (c) a method (d) a keyword [1]

- Classify as primitive or composite: int, String, char[], double. [2]

- A class Fan has data members speed and isOn, and methods start() and setSpeed(int). Name its state and its behaviour. [2]

- Fill in the blank: the keyword ______ creates an object and allocates memory for it. Write one statement that uses it for class Fan. [2]

- Define a class Pen with data members colour (String) and inkLevel (int), and a method write(int words) that lowers inkLevel by one for every ten words, never below 0. Create a pen in main, set it to "blue" and 100, write 250 words and print both members. [15]

- Answer key | Answer | Why

- 1 | (b) | A class is the type; each object is one instance of it.

- 2 | int, double primitive; String, char[] composite | Composite types are built from other types.

- 3 | State: speed, isOn. Behaviour: start(), setSpeed(int). | Data members hold state; methods give behaviour.

- 4 | new; Fan f = new Fan(); | new allocates the object and runs the constructor.

```
public class Pen {
    String colour;
    int inkLevel;
    void write(int words) {
        inkLevel = inkLevel - words / 10;
        if (inkLevel < 0) inkLevel = 0;
    }
    public static void main(String[] args) {
        Pen p = new Pen();
        p.colour = "blue";
        p.inkLevel = 100;
        p.write(250);
        System.out.println(p.colour + " " + p.inkLevel);
    }
}

// Output: blue 75
```

The ideas behind Sheet 2 are explained on [class as the basis of all computation](/icse-class-10-class-as-basis-of-computation).

## Practice sheets ICSE computer: user-defined methods and constructors

These two chapters produce the class skeleton questions of Section B, so both sheets end with a class to write in full.

### Worksheet 3: User-defined methods

- Which pair can NOT both appear in one class? (a) int f(int) and int f(double) (b) int f(int) and double f(int) (c) void f() and void f(int) (d) int f(int, char) and int f(char, int) [1]

- Give the output: static int twice(int x) { x = x * 2; return x; } and in main int n = 6; int m = twice(n); System.out.println(n + " " + m); [2]

- State whether pure or impure: (i) int square(int a) that returns a * a; (ii) void addBonus(int[] marks) that adds 5 to every element. [2]

- Write the prototype of a public method isPrime that takes an int and returns true or false. [2]

- Write a class with two overloaded methods named check: check(int n) prints whether n is even or odd; check(String s, char ch) prints how many times ch occurs in s. Call both from main. [15]

- Answer key | Answer | Why

- 1 | (b) | They differ only in return type, which is not part of the signature.

- 2 | 6 12 | x is a copy of n, so doubling x leaves n at 6.

- 3 | (i) pure, (ii) impure | (ii) changes the caller's array.

- 4 | public boolean isPrime(int n) | Access, return type, name, parameter list.

```
public class Check {
    void check(int n) {
        if (n % 2 == 0) System.out.println(n + " is even");
        else System.out.println(n + " is odd");
    }
    void check(String s, char ch) {
        int c = 0;
        for (int i = 0; i < s.length(); i++)
            if (s.charAt(i) == ch) c++;
        System.out.println(ch + " occurs " + c + " times");
    }
    public static void main(String[] args) {
        Check obj = new Check();
        obj.check(15);
        obj.check("banana", 'a');
    }
}

// Output: 15 is odd
//         a occurs 3 times
```

Three more overloading programs in board format are on [user-defined methods and overloading](/icse-class-10-user-defined-methods-overloading).

### Worksheet 4: Constructors

- The return type of a constructor is (a) void (b) int (c) the class type (d) it has none [1]

- Find the error and correct it: class Box { int side; void Box(int s) { side = s; } } used as Box b = new Box(4); [2]

- Give the output: class Counter has Counter() { count = 10; } and Counter(int c) { count = c * 2; }; main makes new Counter() as x and new Counter(7) as y, then prints x.count + y.count. [2]

- State two differences between a constructor and a method. [2]

- Define a class Student with name and marks, a parameterised constructor, a method grade() that returns 'A' for 80 and above, 'B' for 60 to 79 and 'C' below 60, and display() that prints all three. Test it with Kabir, 72. [15]

- Answer key | Answer | Why

- 1 | (d) | A constructor has no return type, not even void.

- 2 | Remove void: Box(int s) { side = s; } | With void it is a method, so javac reports that no constructor takes an int.

- 3 | 24 | 10 from the default constructor plus 7 * 2.

- 4 | No return type, and the same name as the class; it runs on new, while a method is called by name. | Any two correct points earn the marks.

```
public class Student {
    String name;
    int marks;
    Student(String n, int m) {
        name = n;
        marks = m;
    }
    char grade() {
        if (marks >= 80) return 'A';
        else if (marks >= 60) return 'B';
        else return 'C';
    }
    void display() {
        System.out.println(name + " " + marks + " " + grade());
    }
    public static void main(String[] args) {
        Student s = new Student("Kabir", 72);
        s.display();
    }
}

// Output: Kabir 72 B
```

## ICSE Computer Applications worksheets on library classes and encapsulation

Library classes are tested mostly through outputs; encapsulation mostly through whether code compiles. The two sheets lean that way.

### Worksheet 5: Library classes

- Character.isLetterOrDigit('$') returns (a) true (b) false (c) '$' (d) an error [1]

- Give the output: String a = "12", b = "3"; System.out.println(a + b + " " + (Integer.parseInt(a) + Integer.parseInt(b))); [2]

- Give the output: System.out.println(Character.toLowerCase('Q') + "" + (char) ('a' + 2) + Character.isUpperCase('m')); [2]

- Define autoboxing and write one statement that shows it. [2]

- Write a program to input a sentence and count its uppercase letters, lowercase letters, digits and spaces using Character methods. [15]

- Answer key | Answer | Why

- 1 | (b) | $ is neither a letter nor a digit.

- 2 | 123 15 | The Strings join; the parsed ints add.

- 3 | qcfalse | The empty String makes the rest join: q, then c, then false.

- 4 | Automatic conversion of a primitive to its wrapper object: Integer k = 25; | Java wraps 25 in an Integer without a call.

```
import java.util.Scanner;
public class CharCount {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String s = sc.nextLine();
        int up = 0, low = 0, dig = 0, sp = 0;
        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            if (Character.isUpperCase(ch)) up++;
            else if (Character.isLowerCase(ch)) low++;
            else if (Character.isDigit(ch)) dig++;
            else if (Character.isWhitespace(ch)) sp++;
        }
        System.out.println("Upper " + up + ", lower " + low
            + ", digits " + dig + ", spaces " + sp);
    }
}

// Input: ICSE Exam 2027 is on Monday
// Output: Upper 6, lower 12, digits 4, spaces 5
```

Each Character and wrapper method in the syllabus is listed on [wrapper and library classes](/icse-class-10-wrapper-and-library-classes).

### Worksheet 6: Encapsulation

- Which access specifier limits a member to its own class? (a) public (b) protected (c) private (d) default [1]

- In class Visit { static int total; int id; void log(int x) { int y = x + 1; } } name the kind of variable that total, id, x and y each are. [2]

- Class Score declares private int score;. Another class runs Score t = new Score(); t.score = 5;. Will it compile? Give the reason. [2]

- Fill in the blank: a variable declared static in a class has one copy shared by all objects and is called a ______ variable. [2]

- Define a class Thermostat with a private int temp starting at 24, a method setTemp(int t) that accepts only 16 to 30 and prints "Out of range" otherwise, and getTemp(). In main, try 35 and then 21, and print the result. [15]

- Answer key | Answer | Why

- 1 | (c) | private is visible only inside its class.

- 2 | total: class variable; id: instance; x: argument (parameter); y: local | Decided by where and how each is declared.

- 3 | No: "score has private access in Score" | A private member cannot be reached from another class.

- 4 | class (static) | One copy for the class, not one per object.

```
public class Thermostat {
    private int temp = 24;
    public void setTemp(int t) {
        if (t >= 16 && t <= 30) temp = t;
        else System.out.println("Out of range");
    }
    public int getTemp() { return temp; }
    public static void main(String[] args) {
        Thermostat th = new Thermostat();
        th.setTemp(35);
        th.setTemp(21);
        System.out.println(th.getTemp());
    }
}

// Output: Out of range
//         21
```

Scope and visibility rules are set out on [encapsulation and access specifiers](/icse-class-10-encapsulation-access-specifiers).

## Java worksheets Class 10 ICSE: arrays and string handling

These two sheets carry the most Section B weight, so do each twice: now, and again in the week before the exam.

### Worksheet 7: Arrays

- Binary search needs the array to be (a) sorted (b) of even length (c) of int type only (d) two dimensional [1]

- Give the output: int[] v = {4, 9, 2, 7}; int s = 0; for (int i = 0; i < v.length; i += 2) s += v[i]; System.out.println(s + v[v.length - 1]); [2]

- For int[][] g = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}; give the sum of the left diagonal, g[2][0], and g.length * g[0].length. [2]

- Show the array after the first pass of bubble sort, ascending, on {5, 1, 4, 2}. [2]

- Write a program to input ten integers into an array, sort them in descending order by selection sort, and print them. [15]

- Answer key | Answer | Why

- 1 | (a) | Each halving step relies on the order.

- 2 | 13 | i is 0 and 2, so s is 4 + 2; then 6 + 7.

- 3 | 15, 7, 9 | 1 + 5 + 9; row 2 column 0; 3 rows times 3 columns.

- 4 | {1, 4, 2, 5} | Neighbours swap when out of order, so 5 moves to the end.

```
import java.util.Scanner;
public class SortDesc {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] a = new int[10];
        System.out.println("Enter 10 integers:");
        for (int i = 0; i < 10; i++) a[i] = sc.nextInt();
        for (int i = 0; i < 9; i++) {
            int big = i;                     // index of largest so far
            for (int j = i + 1; j < 10; j++)
                if (a[j] > a[big]) big = j;
            int t = a[i]; a[i] = a[big]; a[big] = t;
        }
        for (int i = 0; i < 10; i++) System.out.print(a[i] + " ");
        System.out.println();
    }
}

// Input: 12 5 89 -3 40 40 7 0 66 21
// Output: 89 66 40 40 21 12 7 5 0 -3
```

Bubble sort, linear search and binary search are written in full on [sorting and searching programs](/icse-class-10-sorting-and-searching-programs).

### Worksheet 8: String handling

- "COMPUTER".substring(3, 6) returns (a) "PUTE" (b) "PUT" (c) "MPU" (d) "MPUT" [1]

- Give the output: String s = "Board Exam"; System.out.println(s.indexOf('a') + " " + s.lastIndexOf('a') + " " + s.charAt(s.length() - 1)); [2]

- Give the output: System.out.println("apple".compareTo("apricot")); [2]

- Give the output: String t = "java"; t.toUpperCase(); System.out.println(t + t.replace('a', 'o')); [2]

- Write a program to input a sentence and print its longest word and that word's length. If two words tie, print the first. [15]

- Answer key | Answer | Why

- 1 | (b) | Indices 3, 4 and 5; index 6 is excluded.

- 2 | 2 8 m | The first a is at 2, the last at 8; the last character is m.

- 3 | -2 | First difference at index 2: 'p' (112) minus 'r' (114).

- 4 | javajovo | toUpperCase's result was never stored, so t is still "java".

```
import java.util.Scanner;
public class Longest {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String s = sc.nextLine().trim() + " ";   // space marks the last word's end
        String word = "", longest = "";
        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            if (ch != ' ') word += ch;
            else {
                if (word.length() > longest.length()) longest = word;
                word = "";
            }
        }
        System.out.println(longest + " " + longest.length());
    }
}

// Input: Practice makes the programs easier
// Output: Practice 8
```

Palindromes, vowel counts and word rearranging are on [ICSE Class 10 string programs](/icse-class-10-string-programs).

## How the mini batch sets and marks a worksheet each week

Alone, a worksheet shows what went wrong; in class, a teacher reading the working also shows why.

### Short parts on Tuesday
At 5:30 PM IST the group sits parts 1 to 4 of a new sheet against a timer. Answers go up on screen together, so each student sees how others reasoned.

### The program on Wednesday
At 8:00 PM IST each student writes part 5 by hand, photographs it, and the teacher marks it on screen, then the class runs it in BlueJ.

### Marks against the scheme
Each answer is marked the way a board examiner would credit it, so students learn that a right idea in broken Java still loses marks.

### Then full papers
From December the weekly sheet grows into a full two-hour mock, described on [the specimen paper and mock tests page](/icse-class-10-computer-applications-specimen-paper-and-mock-tests).

## The courses behind this page

- [ICSE Computer Applications, Java with BlueJ](/courses/icse-computer-applications-java-bluej-course): All eight chapters in a mini batch of up to six, with a fresh 22-mark worksheet every week, marked on screen.
- [Computer Science Class 11 and 12](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course): For students moving on to ISC Computer Science, where the same practice habit meets longer programs.
- [Data Structures and Algorithms](/courses/data-structures-algorithms-masterclass-college): For the student who enjoyed the sorting sheet and wants to compare algorithms properly.

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

**Where can I find ICSE Computer Applications worksheets with answers?** This page has eight, one for each chapter of the 2027 syllabus, with the answer key directly below each sheet. The short answers carry a reason, and every program in the key was compiled and run in Java, so the answers can be trusted. Do each sheet with the key covered before you check.

**Are these worksheets based on the 2027 ICSE syllabus?** Yes. They follow the eight Class 10 chapters in the 2027 syllabus order, from the Class IX revision chapter to string handling. Two-dimensional arrays and wrapper classes are included because the syllabus includes them. Recursion is left out because it is not in the 2027 Computer Applications syllabus.

**Should I write the worksheet programs in BlueJ or on paper?** On paper first. The board exam is handwritten, with no compiler to catch a missing semicolon or bracket. Once the program is finished on paper, type it into BlueJ exactly as written and run it. Every error BlueJ finds is a mark you would have lost.

**How do I mark my own ICSE Java worksheet?** Be strict. An output missing a decimal point or a space is wrong. A two-mark difference needs two separate points. For a program, check that the class compiles, that the logic gives the right result for the sample input, and that you wrote comments and a variable description. Note the reason for every lost mark.

**Are these worksheets copied from textbooks or past papers?** No. Every question and program here is original, written for this page. They use the same shapes as the board paper, so they are good practice for it, but none is taken from a past paper, a specimen paper or a published book.

**How many worksheets should I do before the ICSE board exam?** At least one per chapter, then mixed sheets that combine chapters, then full timed papers in the last six weeks. Repeating a sheet a week after first doing it shows whether the learning stayed. The arrays and strings sheets are worth doing twice, since they feed Section B most.

**What is the difference between a worksheet and a sample paper?** A worksheet tests one chapter in the paper's question shapes and takes about 25 minutes. A sample or specimen paper covers the whole syllabus in two hours. Use worksheets while learning each chapter, and sample papers once every chapter is done.

**Do you set worksheets in your live ICSE classes?** Yes. The mini batch gets a new worksheet each week: short parts on Tuesday at 5:30 PM IST and the program on Wednesday at 8:00 PM IST, both marked on screen. Students abroad, or whose timings clash, get the same sheets one to one at a time the family chooses.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Tue and Wed ICSE Java batch](/icse-class-10-java-classes-online), [ICSE Java classes in the Gulf and abroad](/icse-class-10-computer-applications-classes-gulf-and-abroad), [ICSE BlueJ Java coaching](/icse-class-10-bluej-java-coaching), [ICSE computer crash course](/icse-computer-applications-crash-course), [ICSE computer tuition in Kolkata](/icse-computer-tuition-kolkata), [ICSE computer tuition in Bangalore](/icse-computer-tuition-bangalore), [ICSE computer tuition in Mumbai](/icse-computer-tuition-mumbai), [1-on-1 private Java tutor](/icse-computer-applications-private-tutor), [ICSE computer tuition in Lucknow](/icse-computer-tuition-lucknow), [ICSE computer tuition in Pune](/icse-computer-tuition-pune), [ICSE computer tuition near me](/icse-computer-tuition-near-me), [The mini batch, explained](/icse-computer-applications-small-batch-classes).

**Chapter by chapter:** [ICSE Computer Applications syllabus](/icse-class-10-computer-applications-syllabus-explained), [User-defined methods and overloading](/icse-class-10-user-defined-methods-overloading), [Constructors](/icse-class-10-constructors-questions), [Wrapper and library classes](/icse-class-10-wrapper-and-library-classes), [Class as the basis of all computation](/icse-class-10-class-as-basis-of-computation), [Encapsulation and access specifiers](/icse-class-10-encapsulation-access-specifiers), [Math library methods](/icse-class-10-math-library-methods), [Operators and expressions](/icse-class-10-operators-in-java), [Loops and loop conversion](/icse-class-10-loop-programs-java), [Data types, input and type casting](/icse-class-10-data-types-and-input-java), [Class 9 Java revision for Class 10](/icse-class-9-java-revision-for-class-10).

**Programs for Section B:** [ICSE Java programs practice](/icse-class-10-java-programs-practice), [String programs](/icse-class-10-string-programs), [Special number programs](/icse-special-number-programs-java), [Sorting and searching programs](/icse-class-10-sorting-and-searching-programs), [2D array programs](/icse-class-10-2d-array-programs), [Pattern programs](/icse-class-10-pattern-programs-java), [Menu driven and switch case](/icse-class-10-menu-driven-programs), [Series programs](/icse-class-10-series-programs-java), [Slab and bill programs](/icse-class-10-slab-and-bill-programs).

**Questions and practice:** [ICSE CA important questions](/icse-class-10-computer-applications-important-questions), [Specimen paper and mock tests](/icse-class-10-computer-applications-specimen-paper-and-mock-tests), [Previous year papers, solved](/icse-computer-applications-previous-year-papers-solved), [Predict the output questions](/icse-class-10-java-output-questions), [Competency and case study questions](/icse-computer-applications-competency-questions), [MCQ for Question 1](/icse-computer-applications-mcq-questions), [Viva and oral questions](/icse-computer-applications-viva-questions), [Find the error questions](/icse-class-10-java-error-finding-questions), [Difference between questions](/icse-computer-difference-between-questions).

**Notes and revision:** [Chapter-wise notes](/icse-computer-applications-notes), [Textbook solutions guide](/icse-computer-applications-textbook-solutions-guide).

**Exam, marks and internal assessment:** [ICSE board exam preparation](/icse-class-10-computer-applications-board-exam-preparation), [Exam date 2027 and paper pattern](/icse-class-10-computer-applications-exam-date-and-paper-pattern), [Project and internal assessment](/icse-class-10-computer-applications-project-and-internal-assessment), [How to score 100](/how-to-score-100-in-icse-computer-applications), [Paper analysis and answer key](/icse-computer-applications-paper-analysis), [Computer or Commercial Applications?](/icse-computer-applications-vs-commercial-applications).

---

*Canonical: https://learn.modernagecoders.com/icse-computer-applications-worksheets*
