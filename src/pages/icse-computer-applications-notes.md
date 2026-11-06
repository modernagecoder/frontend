---
title: "ICSE Computer Applications Notes, Chapter-wise (2027)"
description: "ICSE Computer Applications notes for 2027: one original page per chapter in syllabus order, with the terms, rules, Java examples run in BlueJ and exam slips."
canonical: https://learn.modernagecoders.com/icse-computer-applications-notes
source: src/pages/icse-computer-applications-notes.html
updated: 2026-10-13
---

> ICSE Computer Applications notes for Class 10 should follow the eight chapters of the 2027 syllabus in order: Revision of Class IX, Class as the basis of all computation, User-defined methods, Constructors, Library classes, Encapsulation, Arrays and String handling. Good notes give each chapter one sheet: one-line definitions for Section A, the rules Java applies, one short tested program, and the common slip. The paper is two hours for 100 marks, 40 compulsory in Section A and four of six 15-mark programs in Section B. Modern Age Coders revises every chapter live in a Tuesday and Wednesday mini batch in India, or one to one.

## What are the chapters in ICSE Computer Applications Class 10?

There are eight, and the 2027 syllabus lists them in this order. The order matters for revision: every chapter leans on the one before it, so a gap in chapter 3 shows up again in chapters 4, 7 and 8.

- # | Chapter | What the sheet holds | Where it scores

- 1 | Revision of Class IX syllabus | OOP terms, data types, operators, input, Math methods, if, switch, loops | Most of the Section A outputs and loop counts

- 2 | Class as the basis of all computation | Class, object, state, behaviour, primitive and composite types | Definitions and one-mark MCQs

- 3 | User-defined methods | Prototype, signature, parameters, return, pure and impure, overloading | Section B overloading programs

- 4 | Constructors | Default and parameterised constructors, constructor against method | Class skeleton programs, difference questions

- 5 | Library classes | Wrapper classes, parse and valueOf, Character tests, autoboxing | Two-mark outputs, string and menu programs

- 6 | Encapsulation | Access specifiers, scope of variables | Definitions and "will it compile" questions

- 7 | Arrays | 1D and 2D arrays, linear and binary search, bubble and selection sort | A Section B program in almost every paper

- 8 | String handling | String methods, character-by-character processing | The other near-certain Section B program

Recursion is not in the 2027 Computer Applications syllabus, so it has no sheet here. Each unit is explained with its marks pattern on [the ICSE Computer Applications syllabus page](/icse-class-10-computer-applications-syllabus-explained).

## ICSE Class 10 Java notes: chapters 1 and 2

Chapter 1 is the Class 9 course in compressed form, and the paper treats it as fully examinable. Chapter 2 then names the idea everything else is built on: a class is a blueprint, and an object is one thing made from it.

### Chapter 1: Revision of Class IX syllabus

```
int marks = 87;
char grade = marks >= 90 ? 'A'
           : marks >= 75 ? 'B' : 'C';
int sum = 0;
for (int d = 4721; d > 0; d /= 10)
    sum += d % 10;
System.out.println(grade + " " + sum);

// Output: B 14
```

- Term | The one-line note

- Data types | Eight primitives: byte, short, int, long, float, double, char, boolean. char is 2 bytes in Unicode.

- Type conversion | Implicit widens on its own (int to double); explicit needs a cast and may lose data.

- Precedence | Unary, then * / %, then + -, then relational, then &&, then ||, then ?:, then assignment.

- Input | Scanner: nextInt, nextDouble, next for one word, nextLine for a whole line.

- Math methods | sqrt, cbrt, pow, ceil, floor return double; round of a double returns long.

- Loops | for and while test first (entry controlled); do-while runs once before testing (exit controlled).

The slip: writing 4 for Math.sqrt(16). The answer is 4.0, and the missing decimal is marked wrong. Students whose Class 9 base is thin should start with [the Class 9 Java revision for Class 10](/icse-class-9-java-revision-for-class-10) before anything else.

### Chapter 2: Class as the basis of all computation

```
class Lamp {
    boolean on;          // state
    int watts;           // state
    void toggle() {      // behaviour
        on = !on;
    }
}
// in main:
Lamp desk = new Lamp();
desk.watts = 9;
desk.toggle();
System.out.println(desk.on + " " + desk.watts);

// Output: true 9
```

- Term | The one-line note

- Class | A user-defined data type that describes what its objects hold and do.

- Object | An instance of a class, made with new, with its own copy of the instance variables.

- State | The values held in the data members at a moment.

- Behaviour | What the methods let the object do.

- Primitive type | Built in, holds one value, fixed size: int, char, double and the rest.

- Composite type | Built from other types: a class, an array, a String.

The slip: calling a class an object. The class is the plan; each object made from it is separate, so changing desk.watts changes nothing in any other Lamp.

## Computer Applications revision notes ICSE: methods, constructors, library classes, encapsulation

These four chapters are where Section A finds its definitions and where Section B finds its class skeletons. Each sheet below is short because the terms are precise: learn the exact wording and the marks follow.

### Chapter 3: User-defined methods

```
static int area(int s) { return s * s; }
static int area(int l, int b) { return l * b; }
static double area(double r) { return 3.14 * r * r; }
// in main:
System.out.println(area(5) + " " + area(4, 6)
                   + " " + area(2.0));

// Output: 25 24 12.56
```

- Term | The one-line note

- Prototype | The first line of a method: access, return type, name, parameter list.

- Signature | The name with the number, type and order of the parameters.

- Actual and formal | Actual parameters are in the call; formal parameters are in the definition.

- Pure method | Returns a value and changes nothing outside itself.

- Impure method | Changes the object's data or an array it was given.

- Overloading | Same name, different parameter lists, in one class.

Overloading programs in board format are worked on [user-defined methods and overloading](/icse-class-10-user-defined-methods-overloading).

### Chapter 4: Constructors

```
class Ticket {
    String name;
    int seats;
    Ticket() { name = "Guest"; seats = 1; }
    Ticket(String n, int s) { name = n; seats = s; }
}
// in main:
Ticket t1 = new Ticket();
Ticket t2 = new Ticket("Asha", 3);
System.out.println(t1.name + " " + t1.seats + " "
                   + t2.name + " " + t2.seats);

// Output: Guest 1 Asha 3
```

- Term | The one-line note

- Constructor | A member with the class's name and no return type, run automatically when an object is made.

- Default constructor | Takes no parameters; Java supplies one only if you write none.

- Parameterised | Takes parameters and sets the data members from them.

- Against a method | No return type, same name as class, called by new; a method is called by name.

The slip: writing void before a constructor. It then becomes an ordinary method and never runs on new. More on [ICSE constructor questions](/icse-class-10-constructors-questions).

### Chapter 5: Library classes

```
String s = "42";
int n = Integer.parseInt(s) + 8;
Integer boxed = n;              // autoboxing
char c = 'g';
System.out.println(n + " " + Character.toUpperCase(c)
    + " " + Character.isDigit('7') + " " + (boxed + 1));

// Output: 50 G true 51
```

- Term | The one-line note

- Wrapper class | A class that holds one primitive as an object: Integer, Double, Character, Boolean and the rest.

- Autoboxing | Java turns a primitive into its wrapper object on its own.

- Unboxing | Java takes the primitive back out of the wrapper on its own.

- parseInt | Turns a String of digits into an int; "4a" throws an error at run time.

- Character tests | isLetter, isDigit, isLetterOrDigit, isUpperCase, isLowerCase, isWhitespace.

Every wrapper method in the syllabus, with its return type, is on [wrapper and library classes](/icse-class-10-wrapper-and-library-classes).

### Chapter 6: Encapsulation

```
class Account {
    private double balance;
    public void deposit(double amt) {
        if (amt > 0) balance += amt;
    }
    public double getBalance() { return balance; }
}
// in main:
Account acc = new Account();
acc.deposit(500);
acc.deposit(-200);
System.out.println(acc.getBalance());

// Output: 500.0
```

- Term | The one-line note

- Encapsulation | Wrapping data and the methods that use it into one class, and hiding the data.

- private | Visible only inside its own class.

- default (no keyword) | Visible inside the same package.

- protected | Same package, plus subclasses in other packages.

- public | Visible everywhere.

- Scope | Local: inside its block. Instance: one per object. Class (static): one shared by all objects.

Scope questions with worked examples are on [encapsulation and access specifiers](/icse-class-10-encapsulation-access-specifiers).

## Chapter wise notes ICSE computer: arrays and string handling

Arrays and strings are revised last because they use everything before them, and because together they supply the bulk of Section B. Both chapters come down to one skill: walking through a sequence one index at a time without stepping off the end.

### Chapter 7: Arrays

```
int[] a = {3, 8, 15, 21, 30, 42};
int key = 21, lo = 0, hi = a.length - 1, pos = -1;
while (lo <= hi) {
    int mid = (lo + hi) / 2;
    if (a[mid] == key) { pos = mid; break; }
    else if (a[mid] < key) lo = mid + 1;
    else hi = mid - 1;
}
System.out.println(pos);

// Output: 3
```

- Term | The one-line note

- Array | A set of values of one type under one name, reached by index from 0 to length - 1.

- length | A field, no brackets: a.length. For a 2D array m, m.length is rows and m[0].length is columns.

- Linear search | Checks each element in turn; works on any array.

- Binary search | Halves a sorted array each step; needs the array in order.

- Bubble sort | Swaps neighbours that are out of order; the largest settles at the end each pass.

- Selection sort | Finds the smallest of the unsorted part and swaps it into place once per pass.

The slip: a loop that runs while i <= a.length. The last index is a.length - 1, and the extra pass throws ArrayIndexOutOfBoundsException. Full search and sort programs are on [sorting and searching programs](/icse-class-10-sorting-and-searching-programs).

### Chapter 8: String handling

```
String w = "Level";
String r = "";
for (int i = w.length() - 1; i >= 0; i--)
    r += w.charAt(i);
System.out.println(r + " " + r.equalsIgnoreCase(w)
                   + " " + r.equals(w));

// Output: leveL true false
```

- Method | The one-line note

- length(), charAt(i) | Number of characters; the character at index i.

- indexOf, lastIndexOf | First or last position of a character or substring, -1 if absent.

- substring(a, b) | Characters from a up to, not including, b.

- equals, equalsIgnoreCase | Compare contents; return boolean.

- compareTo | Returns 0, a negative or a positive int by dictionary order.

- toUpperCase, trim, replace, concat | Return a new String; the original never changes.

The slip: comparing two Strings with ==, which checks whether they are the same object, not the same text. Word, vowel and palindrome programs are worked on [ICSE Class 10 string programs](/icse-class-10-string-programs).

## How to use these ICSE Computer Applications notes before the 2027 paper

Read a sheet, close it, and write it back from memory. Notes that are only read feel familiar on the day and then fail under the clock; notes that are rewritten stay.

### One sheet per sitting
Take one chapter, cover the right-hand column of the table, and say each definition aloud. Any you cannot say in one sentence go on a short list for the next day.

### Type the example, then change it
Run each program in BlueJ, then change one value and predict the new output before running it again. That small step turns a note into an output question.

### Write a program from each sheet
Chapters 3, 4, 7 and 8 each deserve one full Section B answer in your own hand, with a variable description table, before the chapter counts as revised.

### Mix chapters in week two
Once all eight sheets are done, revise two unrelated chapters together. The paper never asks them in order, and switching is what the real Section A feels like.

### Keep the slips on one page
Collect every "the slip" line from this page, add your own from mock tests, and read that single page the night before the exam.

### Test under the clock
Two hours for 100 marks leaves about a minute a mark. Timed mock papers in the last six weeks tell you which sheet needs one more pass.

## How the mini batch revises one chapter a week

Each sheet on this page is the summary a student should be able to write after a week of live work on that chapter, not a substitute for the week.

-
**Tuesday: the sheet, built together** At the 5:30 PM IST class the teacher builds the chapter's sheet on screen with the group, asking each student to define a term before it is written down, then runs the example in BlueJ.

-
**A timed Section A set** Ten short questions from that chapter only: definitions, outputs, a difference, an error to find. Answers are marked on screen against the way the board credits them.

-
**Wednesday: one full program** At the 8:00 PM IST class each student writes a Section B program from the chapter, with comments and a variable description, and the teacher reads it line by line.

-
**Doubt time before moving on** The last part of Wednesday is kept for questions on any earlier chapter, so a gap is caught before the next chapter depends on it.

-
**Full papers from December** When all eight chapters are done, the batch moves to complete two-hour mock papers marked like the board, and each mistake is sent back to the sheet it came from.

With no more than six students, every definition and every program gets read by the teacher, not sampled.

## The courses behind this page

- [ICSE Computer Applications, Java with BlueJ](/courses/icse-computer-applications-java-bluej-course): All eight chapters in syllabus order in a mini batch of up to six, with a Section A set and a BlueJ program closing each chapter.
- [Computer Science Class 11 and 12](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course): For students going on to ISC Computer Science, where classes, arrays and strings are the starting point rather than the end.
- [Data Structures and Algorithms](/courses/data-structures-algorithms-masterclass-college): For the student who liked binary search and sorting and wants to see why some methods are faster than others.

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

**How many chapters are there in ICSE Computer Applications Class 10?** Eight in the 2027 syllabus: Revision of Class IX syllabus, Class as the basis of all computation, User-defined methods, Constructors, Library classes, Encapsulation, Arrays and String handling. Textbooks sometimes split the first one into several smaller chapters, such as operators, input and loops, so a book may show more chapter numbers for the same syllabus.

**Which chapter is most important in ICSE Computer Applications?** For marks, arrays and string handling, because between them they supply most Section B programs. For understanding, the Class IX revision chapter, because Section A outputs and loop counts come from it and every program depends on it. User-defined methods and constructors come next, since class skeleton questions need both.

**Are these notes enough to score well in ICSE Computer Applications?** Notes are a revision tool, not the whole preparation. They help a student recall definitions and rules quickly. Marks in Section B come from writing complete programs by hand, so each sheet should be followed by at least one program written without help and then run in BlueJ to check it.

**Is recursion part of the ICSE Class 10 Computer Applications syllabus for 2027?** No. Recursion does not appear in the 2027 Class 10 Computer Applications syllabus, so these notes leave it out. Some older books and websites still carry it as an extra topic. For the board paper, spend that time on 2D arrays and wrapper classes, which are in.

**How do I revise Java for the ICSE board exam in one week?** Spend the first five days on two chapters a day using one sheet each, writing every definition from memory and one program per day. Use day six for a full timed paper and day seven for the mistakes it showed. Do not start new topics in the final week; deepen the ones you have.

**What is the difference between a class and an object in ICSE Java?** A class is the design that says what data and methods its objects will have. An object is one instance created from that design with new, holding its own values. One class can produce many objects, and changing the data of one object does not change any other.

**Do I need to learn definitions word for word for ICSE Computer Applications?** Not word for word, but the key terms must be present. A definition of encapsulation that does not mention binding data with methods and hiding the data loses marks, however well it is phrased. Learn the one-line version on each sheet and you will have the words examiners look for.

**Which Math methods are in the ICSE Class 10 syllabus?** The mathematical library methods from Class 9 carry into the revision chapter: Math.pow, sqrt, cbrt, ceil, floor, round, abs, max, min and random. The marks usually turn on the return type. Most of them return double, round of a double returns long, and abs, max and min follow the type they are given.

**Can I get ICSE Computer Applications notes as a PDF?** This page is meant to be used on screen or printed from your browser. Better still, copy each sheet by hand into your own notebook: writing it once is itself revision. The tables are short on purpose, so the whole set fits on eight sides of paper.

**Do you teach ICSE Computer Applications chapter by chapter in live classes?** Yes. The mini batch covers one chapter a week in syllabus order: the sheet on Tuesday at 5:30 PM IST with a timed Section A set, and a full program on Wednesday at 8:00 PM IST. Students abroad, or those whose timings clash, take the same plan one to one at a time the family chooses.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Tue and Wed ICSE Java batch](/icse-class-10-java-classes-online), [ICSE Java classes in the Gulf and abroad](/icse-class-10-computer-applications-classes-gulf-and-abroad), [ICSE BlueJ Java coaching](/icse-class-10-bluej-java-coaching), [ICSE computer crash course](/icse-computer-applications-crash-course), [ICSE computer tuition in Kolkata](/icse-computer-tuition-kolkata), [ICSE computer tuition in Bangalore](/icse-computer-tuition-bangalore), [ICSE computer tuition in Mumbai](/icse-computer-tuition-mumbai), [1-on-1 private Java tutor](/icse-computer-applications-private-tutor), [ICSE computer tuition in Lucknow](/icse-computer-tuition-lucknow), [ICSE computer tuition in Pune](/icse-computer-tuition-pune), [ICSE computer tuition near me](/icse-computer-tuition-near-me), [The mini batch, explained](/icse-computer-applications-small-batch-classes).

**Chapter by chapter:** [ICSE Computer Applications syllabus](/icse-class-10-computer-applications-syllabus-explained), [User-defined methods and overloading](/icse-class-10-user-defined-methods-overloading), [Constructors](/icse-class-10-constructors-questions), [Wrapper and library classes](/icse-class-10-wrapper-and-library-classes), [Class as the basis of all computation](/icse-class-10-class-as-basis-of-computation), [Encapsulation and access specifiers](/icse-class-10-encapsulation-access-specifiers), [Math library methods](/icse-class-10-math-library-methods), [Operators and expressions](/icse-class-10-operators-in-java), [Loops and loop conversion](/icse-class-10-loop-programs-java), [Data types, input and type casting](/icse-class-10-data-types-and-input-java), [Class 9 Java revision for Class 10](/icse-class-9-java-revision-for-class-10).

**Programs for Section B:** [ICSE Java programs practice](/icse-class-10-java-programs-practice), [String programs](/icse-class-10-string-programs), [Special number programs](/icse-special-number-programs-java), [Sorting and searching programs](/icse-class-10-sorting-and-searching-programs), [2D array programs](/icse-class-10-2d-array-programs), [Pattern programs](/icse-class-10-pattern-programs-java), [Menu driven and switch case](/icse-class-10-menu-driven-programs), [Series programs](/icse-class-10-series-programs-java), [Slab and bill programs](/icse-class-10-slab-and-bill-programs).

**Questions and practice:** [ICSE CA important questions](/icse-class-10-computer-applications-important-questions), [Specimen paper and mock tests](/icse-class-10-computer-applications-specimen-paper-and-mock-tests), [Previous year papers, solved](/icse-computer-applications-previous-year-papers-solved), [Predict the output questions](/icse-class-10-java-output-questions), [Competency and case study questions](/icse-computer-applications-competency-questions), [MCQ for Question 1](/icse-computer-applications-mcq-questions), [Viva and oral questions](/icse-computer-applications-viva-questions), [Find the error questions](/icse-class-10-java-error-finding-questions), [Difference between questions](/icse-computer-difference-between-questions).

**Notes and revision:** [Textbook solutions guide](/icse-computer-applications-textbook-solutions-guide), [Worksheets with answers](/icse-computer-applications-worksheets).

**Exam, marks and internal assessment:** [ICSE board exam preparation](/icse-class-10-computer-applications-board-exam-preparation), [Exam date 2027 and paper pattern](/icse-class-10-computer-applications-exam-date-and-paper-pattern), [Project and internal assessment](/icse-class-10-computer-applications-project-and-internal-assessment), [How to score 100](/how-to-score-100-in-icse-computer-applications), [Paper analysis and answer key](/icse-computer-applications-paper-analysis), [Computer or Commercial Applications?](/icse-computer-applications-vs-commercial-applications).

---

*Canonical: https://learn.modernagecoders.com/icse-computer-applications-notes*
