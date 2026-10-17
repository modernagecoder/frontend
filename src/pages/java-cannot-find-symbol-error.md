---
title: "Java \"cannot find symbol\" Error: What It Means and How to Fix It"
description: "The Java cannot find symbol error explained from real javac output: what the symbol and location lines say, eight causes, numbered fixes, and practice."
canonical: https://learn.modernagecoders.com/java-cannot-find-symbol-error
source: src/pages/java-cannot-find-symbol-error.html
---
> The error &ldquo;cannot find symbol&rdquo; means the Java compiler met a name (a variable, method or class) that it could not match to any declaration it can see from that spot. The symbol line names the word, the location line says where Java looked. Usual causes: a typo or wrong capital letter, a variable used outside its block, or a missing import.

[Home](/) / [Courses](/courses) / [Coding classes in the USA](/coding-classes-in-united-states) / Java cannot find symbol

United States · High school and college · Java compiler errors

# Java &ldquo;cannot find symbol&rdquo;: what it means and how to fix it

You press compile and Java answers with &ldquo;error: cannot find symbol&rdquo;, a caret under one word, and two indented lines that look like a riddle. The message is far more helpful than it seems. It names the exact word the compiler could not match to any declaration, says what kind of thing it expected that word to be, and tells you where it was searching. This guide reads the message line by line from programs we compiled ourselves, lists the eight mistakes that cause nearly every case a student meets, and gives you a numbered routine for fixing it in BlueJ, Eclipse, IntelliJ IDEA, VS Code or a browser editor.

At a glance: For: Grades 9 to 12 and college; Error: cannot find symbol; Tool: javac, any editor; Tested on: JDK 22.0.1; Exam link: AP Computer Science A; Format: A batch, or one to one; Times: Weekdays or weekends, flexible; Start: A free first lesson. Rated 4.9 across 547 Google reviews.

## Three Java courses that turn compiler errors into understanding

Each one is live, and each one starts from the code your student is writing right now.

- [Java for teens](/courses/java-programming-masterclass-for-teens): Ages 13 to 18. Variables, methods, classes and the habit of reading errors.
- [AP Computer Science A](/courses/ap-computer-science-a-java-exam-prep-course): The four units, the Java Quick Reference and timed free-response practice.
- [Java for college](/courses/complete-java-programming-masterclass-college): Core Java for intro CS courses, then on to larger programs.

## The four parts of a cannot find symbol error

We wrote a ten-line program with two deliberate mistakes and compiled it with javac 22.0.1. Here is the program, then exactly what the compiler printed.

**Each line of the message, decoded (our reading of the run above)**

| Part | In our run | What it tells you |
|---|---|---|
| File and line | Grades.java:8 | Open that file and go to that line first. The mistake is almost always on it or just above it. |
| Error name | error: cannot find symbol | The compiler hit a word it could not connect to anything declared. Nothing was run yet. |
| Caret | The ^ under score | The exact word the compiler choked on, not the start of the line. |
| symbol: | variable score | What kind of name Java expected: variable, method (with argument types), or class. |
| location: | class Grades | Where Java was searching. For a member it reads, for example, variable s of type String. |

### Why one mistake can look like several

Java reports each unmatched name separately, so two mistakes produce two errors and the summary line says 2 errors. A missing import is worse: in our runs, one forgotten import of ArrayList printed two errors on the same line, one for the type name and one for the constructor after new.

Fix the first error in the list, compile again, and only then look at the rest. Counting errors is a poor measure of how broken a program is.

### What the compiler did not do

Oracle&rsquo;s own troubleshooting page puts it plainly: if you see any compiler errors, the program did not successfully compile and the compiler did not create a .class file. So there is nothing to run until every error is gone.

That is also why an old version of your program sometimes seems to run in an IDE after a failed compile: you are running the last class file that did build, not the code on your screen.

Sources: our javac 22.0.1 run (raw output kept with our notes), and Oracle, [Common Problems (and Their Solutions)](https://docs.oracle.com/javase/tutorial/getStarted/problems/index.html), read 17 October 2026. We are not connected with Oracle.

## The eight mistakes behind almost every cannot find symbol

Every row below is a mistake we typed on purpose and compiled. The middle column is the symbol line javac printed, word for word, so you can match your own message against it.

**Cause, symbol line and fix (our javac 22.0.1 runs, 17 October 2026)**

| Cause | symbol: line we got | The fix |
|---|---|---|
| 1. Wrong capital letter | variable Total | Java treats total and Total as different names. Match the declaration exactly. |
| 2. Variable used outside its block | variable score | Declare it before the block that changes it, so it still exists afterwards. |
| 3. Loop counter used after the loop | variable k | A counter declared in the for header ends with the loop. Keep a separate variable if you need the value later. |
| 4. Missing import | class ArrayList | Add import java.util.ArrayList; above the class. The same goes for Scanner and Random. |
| 5. Misspelled method | method lenght() | Check the spelling against the documentation or the Java Quick Reference. |
| 6. Method or field that does not exist on that type | variable length (on a String) | Strings use length() with brackets; arrays use .length without; an ArrayList uses size(). |
| 7. Method you never wrote | method printReport(int[]) | Write the method, or fix the call so its name and argument types match one you wrote. |
| 8. Class the compiler cannot see | class Student | Put Student.java in the same project folder or package, and compile it too. |

### Scope, the idea behind causes 2 and 3

The Java Language Specification defines it precisely: the scope of a local variable declared in a block is the rest of the block. In plain words, a variable born inside a pair of curly braces dies at the closing brace.

That is why score in Grades.java was fine inside the loop and unknown one line below it. Moving the declaration up, before the loop, widens its scope to the rest of main.

### Imports, the idea behind cause 4

Oracle&rsquo;s tutorial says the compiler automatically imports two entire packages for each source file: java.lang and the package your file is in. String, Math and System live in java.lang, which is why they never need an import.

ArrayList, Scanner and Random live in java.util, which is not imported for you. Either write the import line or use the fully qualified name, java.util.ArrayList.

Sources: Oracle, [Variables](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/variables.html) (&ldquo;Variable names are case-sensitive.&rdquo;) and [Using Package Members](https://docs.oracle.com/javase/tutorial/java/package/usepkgs.html); [Java Language Specification, Java SE 21, chapter 6](https://docs.oracle.com/javase/specs/jls/se21/html/jls-6.html). All read 17 October 2026.

## A seven-step routine for any cannot find symbol error

This is the order we teach. It works in any editor, because it relies only on what the compiler printed, not on a particular IDE.

### Why we do not just hand out the fix

When a student brings a homework file to class, we do not type the correction for them, and we never supply answers to graded assignments. The teacher asks which word the caret points at and what the symbol line says, and the student finds the declaration.

Students who fix ten of these errors themselves usually stop making the scope mistake altogether, because they finally see where a variable lives.

### When the routine runs out

If the name is declared, spelled right, in scope and imported, and the error still appears, the problem is usually the build: a file outside the project, a stale class file, or two classes with the same name in different packages.

That is the moment to ask a person. A teacher who can see the whole project on a shared screen will usually spot it in a minute.

## What the same mistakes look like in Eclipse and other editors

BlueJ, VS Code and IntelliJ IDEA usually show javac&rsquo;s wording or something close to it. Eclipse ships its own compiler, so its messages read differently. We compiled the same files with the Eclipse Compiler for Java to give you the translation.

**javac wording against Eclipse compiler wording (our runs of javac 22.0.1 and ecj 3.46.100, 17 October 2026)**

| Mistake | javac says | Eclipse compiler says |
|---|---|---|
| Wrong capital letter | cannot find symbol, symbol: variable Total | Total cannot be resolved to a variable |
| Missing import | cannot find symbol, symbol: class ArrayList | ArrayList cannot be resolved to a type |
| Misspelled method | cannot find symbol, symbol: method lenght() | The method lenght() is undefined for the type String |
| length() on an array | cannot find symbol, symbol: method length() | Cannot invoke length() on the array type int[] |
| Class not in the project | cannot find symbol, symbol: class Student | Student cannot be resolved to a type |

### Red underlines before you compile

Most editors check your code as you type, so the red squiggle under a word is the same complaint arriving early. Hovering over it shows the message, and the fix routine above still applies.

An underline that will not go away after you correct the spelling usually means the editor has not saved or rebuilt yet. Save the file and give it a moment.

### Quick fixes: useful, with care

Editors offer one-click fixes such as adding an import or creating a missing variable. Adding an import is almost always right. Creating a variable to silence the error is almost always wrong, because it hides the real mistake, which was a typo or a scope problem.

Our rule for students: accept a quick fix only if you can say in one sentence why it is correct.

## Identifier expected: the error students confuse with this one

Searches for cannot find symbol often sit next to searches for identifier expected, especially from BlueJ users. They are different problems: one is about names, the other about where code is allowed to go.

**Telling the two errors apart (our summary of the runs on this page)**

|  | cannot find symbol | identifier expected |
|---|---|---|
| What went wrong | A name is used that Java cannot match to a declaration | Java expected a name at a point where the grammar needs one |
| Typical cause | Typo, scope, missing import | A statement placed directly in the class body, or a missing bracket |
| Where to look | The declaration of the word under the caret | The braces around the line: is it inside a method? |
| First fix to try | Match spelling and capitals | Move the statement into main or another method |

## Why this error matters for AP Computer Science A

AP CSA students meet cannot find symbol constantly, because the course leans on exactly the features that trigger it: objects, String methods, ArrayList and arrays. Here is what College Board publishes about the exam, and how it connects.

**AP Computer Science A exam facts, from AP Central (read 17 October 2026)**

| Point | What College Board says |
|---|---|
| Format | &ldquo;This is a fully digital exam.&rdquo; Students answer in the Bluebook testing app. |
| Reference sheet | The Java Quick Reference &ldquo;lists the accessible methods from the Java library that may be included on the exam&rdquo;. |
| Free response | Section II: 4 questions in 1 hour 30 minutes. Question 3 works with an ArrayList, Question 4 with a 2D array. |
| Biggest unit | Unit 4, Data Collections, carries 30% to 40% of the multiple-choice weighting. |
| 2027 date | May 12, 2027, as listed on the AP Central exam page. |

### The connection, in our experience

Cause 6 in our table, mixing up length, length() and size(), is precisely the confusion between arrays, String and ArrayList that Unit 4 tests. A student who can say from memory which one each type uses has learned something the exam rewards.

The Java Quick Reference is the official list of the library methods you may meet on the exam, so it doubles as the reference to check when the compiler says a method does not exist.

### Practicing without a compiler

On the free-response section you write code for a reader, not for javac, so nobody prints cannot find symbol for you. Our advice: once a week, write a short method on paper, then compile it and count the names the compiler could not find.

That count dropping over a semester is a better sign of readiness than any single practice score. For course planning, see our [AP Computer Science A classes](/ap-computer-science-a-online-classes) and [what changed in AP CSA for 2026](/blog/ap-computer-science-a-changes-2026).

Sources: [AP Computer Science A Exam](https://apcentral.collegeboard.org/courses/ap-computer-science-a/exam) and [AP Computer Science A Course](https://apcentral.collegeboard.org/courses/ap-computer-science-a), AP Central, read 17 October 2026. AP is a trademark of College Board, which is not connected with this page or with us.

## Six lines to test yourself

Our own practice set. Each line compiles with exactly one cannot find symbol error. Before you look at the right-hand column, predict the symbol line javac will print. We checked every answer with javac 22.0.1.

**Predict the symbol line (ours; answers from our javac 22.0.1 run)**

| Line of code | symbol: line javac printed |
|---|---|
| String name = "Ada"; then println(Name) | variable Name |
| Math.squareRoot(16) | method squareRoot(int), location: class Math |
| int[] a = new int[3]; then a.size() | method size(), location: variable a of type int[] |
| Random r = new Random(); with no import | class Random |
| name.toUppercase() | method toUppercase(), location: variable name of type String |
| println(k) after for (int k = 0; k &lt; 3; k++) | variable k |

If you got the kind of symbol right on all six, you can read this error. If the Math line caught you out, the method you wanted is Math.sqrt. For more on reading errors in general, try our guide on [how to debug code](/how-to-debug-code), and for a first course, [Java for beginners](/java-for-beginners).

## Four stages of reading Java errors

Where most students are when they first search for this error, and where practice takes them.

**How students grow with compiler errors (ours)**

| Stage | What it looks like |
|---|---|
| 1. Alarmed | Sees a wall of red text and starts changing lines at random |
| 2. Locating | Goes to the file and line number, finds the word under the caret |
| 3. Diagnosing | Reads the symbol and location lines and names the cause |
| 4. Preventing | Declares variables in the right place and rarely sees the error at all |

### For parents

A teen who is frustrated by compiler errors is not failing at programming. They are at stage 1, which every programmer passes through.
What helps most is someone asking good questions about the message, rather than fixing the code for them.

### For students

The compiler is precise, not hostile. It tells you the word, the kind of name and where it looked.
Fix one error, compile, repeat. Patience here is faster than guessing.

## Nine courses for Java students and the languages around it

Nine live courses chosen for students who write Java at school now, or who are about to.

### Java first

Teens

- [Java for teens](/courses/java-programming-masterclass-for-teens): From first class to objects and lists.
- [AP Computer Science A](/courses/ap-computer-science-a-java-exam-prep-course): The College Board course, unit by unit.
- [Problem solving for teens](/courses/problem-solving-dsa-masterclass-teens): Logic and data structures behind the code.

### Alongside Java

Teens

- [AP Computer Science Principles](/courses/ap-computer-science-principles-exam-prep-course): The wider course, with the Create task.
- [Python for teens](/courses/python-complete-masterclass-teens): A second language with friendlier errors.
- [Git and GitHub for teens](/courses/git-github-version-control-course-for-teens): Save every working version of your code.

### College and beyond

Ages 18 and up

- [Java for college](/courses/complete-java-programming-masterclass-college): Intro CS Java, then real applications.
- [Data structures and algorithms](/courses/data-structures-algorithms-masterclass-college): The course after the intro sequence.
- [Competitive programming](/courses/competitive-programming-for-teens-course): USACO-style problems in Java or C++.

## Live Java classes that fit a US school week

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Weekdays** After school in your own time zone, Eastern to Pacific.
- **Weekends** A steady weekly slot for families who prefer it.
- **1-on-1** Booked around the school calendar and exam weeks.

- **One teacher all term** The same person reads your code each week.
- **Your editor, shared** BlueJ, Eclipse, IntelliJ IDEA or VS Code.
- **Errors as lessons** We start from the message on your screen.
- **No homework answers** We teach the idea; the solution stays yours.
- **Any state** Live on video, wherever you study.
- **Batch or one to one** Fifteen to twenty learners, or just you.

## Fees

Java and every editor on this page cost nothing to download. What you pay for is the live teaching: a monthly fee shown in US dollars, no semester contract, and nothing owed if you stop when a month ends.

- Free first class: USD 0. A free first lesson. Bring the file that will not compile. No card details.
- Group batch: USD 100 a month. Fifteen to twenty learners. A regular teacher. Choose your batch. Monthly.
- One to one: USD 150 a month. Just you and the teacher. Times that suit you. Built around your own course.

## Cannot find symbol: common questions

### What does cannot find symbol mean in Java?

It means the compiler found a name (a variable, a method or a class) that it could not match to any declaration it can see from that line. The symbol line says which name and what kind it is; the location line says where Java searched.

### How do I fix cannot find symbol?

Go to the first error, read the symbol line, and search your code for that exact word. Fix a spelling or capital letter if it differs, move a declaration up if it sits inside a block that has closed, and add an import for library classes such as ArrayList or Scanner. Compile again after each change.

### Why does Java say cannot find symbol for a variable I declared?

Usually because the variable was declared inside a block, such as a loop or an if, and you used it after that block closed. A local variable only exists until the closing brace of the block it was declared in. Declare it before the block instead.

### Why do I get cannot find symbol for ArrayList or Scanner?

Both live in the java.util package, which Java does not import automatically. Only java.lang and your own package are imported for you. Add import java.util.ArrayList; or import java.util.Scanner; above your class.

### Is Java case sensitive?

Yes. Oracle's Java tutorial states that variable names are case-sensitive, so total and Total are two different names. A capital letter in the wrong place is one of the most common causes of this error.

### What is the difference between cannot find symbol and identifier expected?

Cannot find symbol is about a name Java cannot match to a declaration. Identifier expected means Java wanted a name at a point where the grammar requires one, often because a statement such as an assignment or a println was written directly inside the class instead of inside a method.

### What does Eclipse show instead of cannot find symbol?

Eclipse uses its own compiler, so the wording differs. In our tests the same mistakes appeared as messages such as Total cannot be resolved to a variable, ArrayList cannot be resolved to a type, and The method lenght() is undefined for the type String.

### Will you fix my CodeHS or school Java assignment for me?

No. We do not provide answers or solutions to graded assignments. A teacher works through the error message with you and teaches the idea behind it, so you can fix your own code and explain it.

### Does this error matter for the AP Computer Science A exam?

Indirectly. The exam is fully digital in College Board's Bluebook app, and the mistakes behind this error, especially mixing up length, length() and size() for arrays, String and ArrayList, are exactly the distinctions the course tests.

### When are live Java classes for US students?

Weekdays or weekends, flexible. Choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

### How much do the Java classes cost?

The first lesson is free. After that you pay one month at a time, and the monthly fee is shown in US dollars in the fees section of this page.

## Related pages

- [Coding classes in the USA](/coding-classes-in-united-states): Every page we have written for US families.
- [How to debug code](/how-to-debug-code): A method for any error in any language.
- [AP Computer Science A classes](/ap-computer-science-a-online-classes): Our live AP CSA preparation.
- [Java for beginners](/java-for-beginners): Where a first Java course starts.
- [Java classes for teens](/java-classes-for-teens): The teen Java track in detail.
- [AP CSP or AP CSA first?](/blog/ap-csp-vs-ap-csa-which-to-take-first): Choosing between the two AP courses.

## Contact

Book the free first class at [https://learn.modernagecoders.com/java-cannot-find-symbol-error](https://learn.modernagecoders.com/java-cannot-find-symbol-error#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
