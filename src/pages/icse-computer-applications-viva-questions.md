---
title: "ICSE Computer Viva Questions 2027, with Spoken Answers"
description: "ICSE computer viva questions for 2027: 56 original Java and BlueJ oral questions examiners ask about your lab programs, each with a short spoken answer."
canonical: https://learn.modernagecoders.com/icse-computer-applications-viva-questions
source: src/pages/icse-computer-applications-viva-questions.html
updated: 2026-11-06
---

> ICSE computer viva questions are the oral questions asked during the Computer Applications internal assessment. CISCE prescribes no separate viva: students submit at least twenty Java lab assignments, marked 50 by the subject teacher and 50 by an external examiner on class design, variable description, coding and documentation, and execution. While marking, examiners often ask the student to explain a program, justify a choice or change a line. The questions come from Java basics, classes and constructors, methods, arrays, strings and, above all, your own code. Modern Age Coders rehearses these aloud in a live mini batch in India, or one to one.

## Is there a viva in ICSE Computer Applications practical?

Not as a separate, marked CISCE viva. The oral questions happen inside the internal assessment, where two examiners mark your lab programs and may ask about them.

### What the regulations actually say

For 2027, Computer Applications has a two-hour written paper of 100 marks and an internal assessment of 100 marks, built on at least twenty Java lab assignments. The subject teacher awards 50 and an external examiner, nominated by the head of the school, awards 50, each on four criteria. None of them is called viva, and CISCE publishes no viva question list.

### Where the questions come from

To judge class design or documentation, an examiner needs to understand your choices, and the quickest way is to ask. So students are often asked to run a program, explain its logic, defend a data type or make a small change. How much is asked varies by school; students simply call it the computer viva.

- Criterion | Marks per examiner | The oral question it invites

- Class design | 10 | Why these fields? Why private? Why this constructor?

- Variable description | 10 | What does this variable hold, and why is it a double?

- Coding and documentation | 10 | Why this loop? What does this comment mean? What if the input is wrong?

- Execution or output | 20 | Run it with my input. Now change it to do this.

- Two examiners | 50 + 50 | 100 marks of internal assessment

Choosing and documenting the twenty assignments is covered on
[the ICSE project and internal assessment page](/icse-class-10-computer-applications-project-and-internal-assessment).

## Java viva questions class 10: basics, BlueJ and data types

Examiners often warm up with a definition before opening your file.

### Java, BlueJ and the compiler

- What is bytecode?
Spoken answer The compiler turns my Java source into bytecode, a .class file not tied to any one machine. The Java Virtual Machine runs it.

- Why is Java called platform independent?
Spoken answer The same bytecode runs on Windows, Mac or Linux wherever a JVM is installed. I compile once and the JVM handles each machine.

- What is BlueJ and why does your school use it?
Spoken answer BlueJ is a simple Java environment built for learning. It shows classes as boxes, and I can create an object and call a method without writing main.

- Is Java compiled or interpreted?
Spoken answer Both. javac compiles the source to bytecode, and the JVM interprets or translates that bytecode while the program runs.

- What is a token? Name its types.
Spoken answer The smallest unit the compiler recognises: keywords, identifiers, literals, operators and separators, like int, total, 5, + and the semicolon.

- Which kinds of comment does Java have?
Spoken answer // for one line, /* */ for several lines, and /** */ for documentation comments. I used // to explain each method in my lab programs.

- Name three kinds of error, with an example of each.
Spoken answer Syntax: a missing semicolon, so it will not compile. Runtime: a letter typed where nextInt expects a number. Logical: dividing by 5 when I meant 5.0, so it runs but gives a wrong answer.

### Data types, input and operators

- What is the difference between primitive and reference data types?
Spoken answer A primitive variable, like int or char, holds the value itself. A reference variable, like a String or an array, holds the address of an object.

- What is the size of int and double?
Spoken answer int takes 4 bytes and stores whole numbers. double takes 8 bytes and stores decimals, which is why I used it for an average.

- What is implicit and explicit type conversion?
Spoken answer Implicit is automatic, smaller type to bigger, like int to double. Explicit is a cast I write, like (char) (c + 1), and it can lose data.

- How did you take input in your programs?
Spoken answer I imported java.util.Scanner, made new Scanner(System.in), and used nextInt for numbers and nextLine for a full name.

- What is the difference between next() and nextLine()?
Spoken answer next() reads one word; nextLine() reads the whole line, so it suits a name like Ria Sen.

- What is the difference between = and ==?
Spoken answer = assigns a value to a variable. == compares two values and gives true or false.

- What does the keyword new do?
Spoken answer It creates an object in memory and calls the constructor.

If a definition question turns into "what is the difference between", the ready answers are on
[ICSE Computer Applications difference between questions](/icse-computer-difference-between-questions).

## BlueJ viva questions on classes, constructors, methods and wrappers

These sit behind the class design marks, so expect them on any program with a constructor or private fields.

### Classes, objects and constructors

- What is the difference between a class and an object?
Spoken answer A class is the plan; an object is one real copy made from it, like one Scorecard for Ria and another for Arjun.

- What is a constructor, and how is it different from a method?
Spoken answer A constructor has the class's name, no return type, and runs automatically when the object is created. A method has a return type, even void, and runs only when called.

- What happens if you do not write any constructor?
Spoken answer The compiler supplies a default constructor with no parameters. The fields then keep their default values, 0 for int, null for a String and false for boolean.

- What is constructor overloading?
Spoken answer Several constructors with different parameter lists. Java picks one by the number and type of arguments passed with new.

- What is encapsulation?
Spoken answer Keeping data and its methods together in one class and hiding the data. My fields are private so only the class's own methods change them.

- Name the access specifiers and what they allow.
Spoken answer private: inside the class only; default: inside the package; protected: package and subclasses; public: everywhere.

- What is the difference between static and non-static members?
Spoken answer A static member belongs to the class, one shared copy. An instance member belongs to each object, like each student's own marks.

### Methods and wrapper classes

- What is the difference between an instance variable and a local variable?
Spoken answer An instance variable is declared in the class and lives with the object. A local variable, like total, lives only inside its method.

- What is method overloading, and can two methods differ only in return type?
Spoken answer Overloading is the same method name with different parameter lists. Return type alone is not enough; the compiler says the method is already defined.

- What is a pure method and an impure method?
Spoken answer A pure method only returns a result and changes nothing, like grade(). An impure method changes the object's state, like computeAverage(), which updates the average field.

- What is call by value and call by reference?
Spoken answer When I pass a primitive, the method gets a copy, so the original cannot change. When I pass an array or object, the method gets the reference, so changes to its elements are seen by the caller.

- What does the return statement do?
Spoken answer It sends a value back and ends the method at once. A void method can still use return; to leave early.

- What is a wrapper class? What are autoboxing and unboxing?
Spoken answer A wrapper class like Integer wraps a primitive in an object. Autoboxing does it automatically, Integer k = 5, and unboxing reverses it, int j = k.

- What happens if Integer.parseInt gets "12a"?
Spoken answer It throws a NumberFormatException, because 12a is not a valid whole number. "42" would work and give the int 42.

Deeper practice on these chapters is on
[ICSE Class 10 constructors questions](/icse-class-10-constructors-questions) and
[encapsulation and access specifiers](/icse-class-10-encapsulation-access-specifiers).

## Oral questions computer applications ICSE: loops, arrays and strings

Most of a lab file is loops, arrays and strings, so most "why did you" questions land here.

### Decisions, loops and arrays

- When can you not use switch instead of if-else-if?
Spoken answer switch only matches exact values, so it cannot test a range like average at least 90. It also cannot switch on a double; the compiler refuses it.

- Why do you write break in each case?
Spoken answer Without break, control falls through and runs the next case too, so my menu would print two results for one choice.

- What is the difference between an entry-controlled and an exit-controlled loop?
Spoken answer for and while test first, so may run zero times; do-while tests at the end, so runs at least once.

- Why did you use a for loop here and a while loop there?
Spoken answer for when I know the count, like five subjects; while for digits of a number, stopping when it becomes 0.

- What is the difference between break and continue?
Spoken answer break leaves the loop completely. continue skips the rest of this pass and goes to the next one.

- What is an array, and where does its index start?
Spoken answer Many values of one type under one name. The index starts at 0, so the last is at length minus 1.

- What happens if you use index 3 in an array of size 3?
Spoken answer The program stops with an ArrayIndexOutOfBoundsException. The valid indexes are only 0, 1 and 2.

- What is the difference between length and length()?
Spoken answer length is an array field; length() is a String method that counts characters.

### Searching, sorting and strings

- What is the difference between linear search and binary search?
Spoken answer Linear search checks every element and works on any array. Binary search keeps halving the range, much faster, but needs a sorted array.

- How is bubble sort different from selection sort?
Spoken answer Bubble sort swaps neighbours in the wrong order; selection sort finds the smallest remaining element and swaps it into place once per pass.

- How do you find the rows and columns of a 2D array?
Spoken answer For new int[3][4], g.length gives 3 rows. g[0].length gives 4 columns.

- Why is a String called immutable?
Spoken answer A String cannot be changed after it is made; methods return a new String. If I call toUpperCase on "java" and do not store the result, it still prints java.

- Why did you compare Strings with equals() and not ==?
Spoken answer equals() compares the characters; == checks whether two references are the same object, so it can say false for matching text.

- What does compareTo return?
Spoken answer 0 if the Strings are equal, a negative number if the first comes earlier in dictionary order, and a positive number if it comes later. "apple" compared to "banana" gives -1.

If the examiner asks you to search or sort live, practise first on
[ICSE sorting and searching programs](/icse-class-10-sorting-and-searching-programs) and
[ICSE Class 10 string programs](/icse-class-10-string-programs).

## ICSE computer practical viva: questions about your own program

This is where marks are won or lost. Below is a typical lab assignment and fourteen questions an examiner might ask about it. Swap in your own program and answer them aloud.

```
import java.util.Scanner;
class Scorecard {
    private String name;    // student's name
    private int[] marks;    // marks in five subjects
    private double average; // average of the marks

    Scorecard(String n, int[] m) {
        name = n;
        marks = m;
        average = 0.0;
    }
    void computeAverage() {
        int total = 0;
        for (int i = 0; i < marks.length; i++)
            total += marks[i];
        average = total / 5.0;
    }
    char grade() {
        if (average >= 90) return 'A';
        else if (average >= 75) return 'B';
        else if (average >= 60) return 'C';
        else return 'D';
    }
    void display() {
        System.out.println("Name: " + name);
        System.out.println("Average: " + average);
        System.out.println("Grade: " + grade());
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String n = sc.nextLine();
        int[] m = new int[5];
        for (int i = 0; i < 5; i++)
            m[i] = sc.nextInt();
        Scorecard s = new Scorecard(n, m);
        s.computeAverage();
        s.display();
    }
}
```

```
int highest() {
    int max = marks[0];
    for (int i = 1; i < marks.length; i++)
        if (marks[i] > max)
            max = marks[i];
    return max;
}

// Returns 95 for Ria's marks.
```

- Explain your program in thirty seconds.
Spoken answer It stores a name and five marks in a Scorecard object, works out the average and gives a grade from A to D. main reads input, creates the object and calls its methods.

- Why are the three fields private?
Spoken answer So no other class can change the marks or average directly, only my own methods. That is encapsulation.

- What does your constructor do?
Spoken answer It is parameterised: it copies the name and marks into the fields and sets average to 0.0 as a clear start.

- Why did you divide by 5.0 and not 5?
Spoken answer total is an int, so total / 5 would be integer division: 433 / 5 gives 86 and the average shows 86.0. Dividing by 5.0 makes it a double division and gives the correct 86.6.

- Why is total a local variable but average a field?
Spoken answer total is only needed while adding; average is needed later by grade() and display(), so it belongs to the object.

- Does the order of your if conditions matter?
Spoken answer Yes. If I tested average at least 60 first, a student with 92 would get C, because the first true condition wins and the rest are skipped.

- Which inputs did you test it with?
Spoken answer A normal case, then boundaries: five 90s gives 90.0 and A, and 50 60 55 70 65 gives 60.0 and C.

- What happens if I type a letter instead of a mark?
Spoken answer nextInt throws an InputMismatchException and the program stops. I could check with hasNextInt() before reading, and ask again if the input is not a number.

- Read me the variable description for computeAverage.
Spoken answer total is an int that holds the running sum of the marks, and i is an int loop counter that goes from 0 to 4. Both are local to that method.

- Your school adds a sixth subject. What breaks?
Spoken answer The divisor 5.0 is hard-coded, so six marks of 90 would give an average of 108.0. Dividing by marks.length instead gives 90.0 and works for any number of subjects.

- Add a method that returns the highest mark.
Spoken answer Start max at marks[0], loop from index 1, replace max when an element is bigger, then return it.

- Which syllabus topics does this one program use?
Spoken answer A class with private fields, a parameterised constructor, pure and impure methods, a one-dimensional array, a for loop, if-else-if and Scanner input. That is why I chose it as a lab assignment.

- Why did you name the method computeAverage and not ca?
Spoken answer A clear name explains the method without a comment, and meaningful names earn documentation marks.

- What was the hardest part, and how did you fix it?
Spoken answer My first version printed 86.0, so I traced it on paper and found the integer division. Changing 5 to 5.0 fixed it.

For the last question, tell the true story of one bug in your own program. Spotting planted errors quickly is practised on
[ICSE Class 10 Java error finding questions](/icse-class-10-java-error-finding-questions).

## How to prepare for ICSE computer oral questions

Prepare by speaking, not reading. Answer in two sentences, the idea and then the line in your code that shows it, and expect a follow-up: "why private?" leads to "what if it were public?". If unsure, trace on paper in front of the examiner rather than guess.

-
**Tuesday: quick-fire concepts** At the 5:30 PM IST class, students answer chapter questions aloud and classmates judge whether each answer would convince an examiner.

-
**Wednesday: defend the week's program** At the 8:00 PM IST class, each student's new program is questioned on the spot.

-
**One live change** The student makes a small edit in BlueJ on a shared screen, so changing code while watched feels normal.

-
**A mock with an unfamiliar teacher** Before the school's assessment dates, a teacher new to the student questions three programs from the file, as an external examiner may.

Recursion is not in the 2027 ICSE Computer Applications syllabus, so it should not be needed in your answers. For the written paper alongside this, see
[ICSE Computer Applications important questions](/icse-class-10-computer-applications-important-questions).

## The courses behind this page

- [ICSE Computer Applications, Java with BlueJ](/courses/icse-computer-applications-java-bluej-course): Class 9 and 10 Computer Applications in a mini batch, where each Wednesday program is questioned by the teacher before it enters the lab file.
- [Computer Science Class 11 and 12](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course): For students going on to ISC Computer Science, where the practical has its own viva and the questions go deeper into design.
- [Data Structures and Algorithms](/courses/data-structures-algorithms-masterclass-college): For the student who likes the "why this method?" questions and wants to argue about searching and sorting with real reasons.

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

**Is there a viva in ICSE Class 10 Computer Applications?** Not as a separate, marked part of the CISCE scheme. The internal assessment is based on at least twenty Java lab assignments, marked 50 by the subject teacher and 50 by an external examiner on four criteria. While marking, examiners often ask students to explain or change their programs, which is what students call the computer viva.

**What questions are asked in the ICSE computer practical viva?** Mostly questions about your own lab programs: why a field is private, why you chose a loop, what a variable holds, what happens on wrong input, and a small change made live. Warm-up questions cover Java basics, BlueJ, constructors, methods, arrays and Strings.

**How many marks is the ICSE computer practical?** The internal assessment is worth 100 marks, equal to the written paper. Each of the two examiners marks out of 50: class design 10, variable description 10, coding and documentation 10, and execution or output 20. There is no separate mark for a viva, but your answers shape how the examiners judge your design and documentation.

**How do I prepare for the computer viva in ICSE Class 10?** Pick five programs from your file and explain each aloud in thirty seconds. Answer the "why" questions for each: types, loops, access specifiers, input checks. Run each with a boundary input and practise one small change in BlueJ. Saying answers aloud matters more than re-reading them.

**What are common Java viva questions for Class 10?** Bytecode and the JVM, class versus object, constructors, method overloading, static versus instance members, wrapper classes, entry and exit controlled loops, linear versus binary search, length versus length(), and equals versus ==. Each is answered above in two spoken sentences.

**What BlueJ viva questions do examiners ask?** They may ask what BlueJ is, how you create an object on it and call a method without main, how you compile and run, and what an error message in BlueJ means. Often they simply ask you to run your program in BlueJ with their own input and explain the output.

**What if I do not know the answer to a viva question?** Say what you do know and offer to trace it. Writing the values on paper, or running the code in BlueJ, shows understanding even when the first answer was not ready, and costs less than a confident wrong guess.

**Can the examiner ask about a program I did not write myself?** The questions are about your file, so a copied program shows quickly under follow-ups. The safest file is one where you wrote every program and can explain every line, which is why our classes build it in class, one program at a time.

**Is recursion asked in the ICSE computer viva?** It should not be. Recursion is not in the ICSE Computer Applications syllabus for 2027, so lab programs and questions should stay with classes, constructors, methods, library classes, arrays and strings. If an examiner mentions it, saying honestly that it is outside your syllabus is a fair answer.

**Do you rehearse viva questions in live classes?** Yes. In the mini batch, Tuesday has a quick-fire concept round aloud and Wednesday questions each student about the program they just wrote, with a live change in BlueJ. Before school assessment dates there is a mock with an unfamiliar teacher. Personalised one to one classes do the same at a time the family chooses.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Tue and Wed ICSE Java batch](/icse-class-10-java-classes-online), [ICSE Java classes in the Gulf and abroad](/icse-class-10-computer-applications-classes-gulf-and-abroad), [ICSE BlueJ Java coaching](/icse-class-10-bluej-java-coaching), [ICSE computer crash course](/icse-computer-applications-crash-course), [ICSE computer tuition in Kolkata](/icse-computer-tuition-kolkata), [ICSE computer tuition in Bangalore](/icse-computer-tuition-bangalore), [ICSE computer tuition in Mumbai](/icse-computer-tuition-mumbai), [1-on-1 private Java tutor](/icse-computer-applications-private-tutor), [ICSE computer tuition in Lucknow](/icse-computer-tuition-lucknow), [ICSE computer tuition in Pune](/icse-computer-tuition-pune), [ICSE computer tuition near me](/icse-computer-tuition-near-me), [The mini batch, explained](/icse-computer-applications-small-batch-classes).

**Chapter by chapter:** [ICSE Computer Applications syllabus](/icse-class-10-computer-applications-syllabus-explained), [User-defined methods and overloading](/icse-class-10-user-defined-methods-overloading), [Constructors](/icse-class-10-constructors-questions), [Wrapper and library classes](/icse-class-10-wrapper-and-library-classes), [Class as the basis of all computation](/icse-class-10-class-as-basis-of-computation), [Encapsulation and access specifiers](/icse-class-10-encapsulation-access-specifiers), [Math library methods](/icse-class-10-math-library-methods), [Operators and expressions](/icse-class-10-operators-in-java), [Loops and loop conversion](/icse-class-10-loop-programs-java), [Data types, input and type casting](/icse-class-10-data-types-and-input-java), [Class 9 Java revision for Class 10](/icse-class-9-java-revision-for-class-10).

**Programs for Section B:** [ICSE Java programs practice](/icse-class-10-java-programs-practice), [String programs](/icse-class-10-string-programs), [Special number programs](/icse-special-number-programs-java), [Sorting and searching programs](/icse-class-10-sorting-and-searching-programs), [2D array programs](/icse-class-10-2d-array-programs), [Pattern programs](/icse-class-10-pattern-programs-java), [Menu driven and switch case](/icse-class-10-menu-driven-programs), [Series programs](/icse-class-10-series-programs-java), [Slab and bill programs](/icse-class-10-slab-and-bill-programs).

**Questions and practice:** [ICSE CA important questions](/icse-class-10-computer-applications-important-questions), [Specimen paper and mock tests](/icse-class-10-computer-applications-specimen-paper-and-mock-tests), [Previous year papers, solved](/icse-computer-applications-previous-year-papers-solved), [Predict the output questions](/icse-class-10-java-output-questions), [Competency and case study questions](/icse-computer-applications-competency-questions), [MCQ for Question 1](/icse-computer-applications-mcq-questions), [Find the error questions](/icse-class-10-java-error-finding-questions), [Difference between questions](/icse-computer-difference-between-questions).

**Notes and revision:** [Chapter-wise notes](/icse-computer-applications-notes), [Textbook solutions guide](/icse-computer-applications-textbook-solutions-guide), [Worksheets with answers](/icse-computer-applications-worksheets).

**Exam, marks and internal assessment:** [ICSE board exam preparation](/icse-class-10-computer-applications-board-exam-preparation), [Exam date 2027 and paper pattern](/icse-class-10-computer-applications-exam-date-and-paper-pattern), [Project and internal assessment](/icse-class-10-computer-applications-project-and-internal-assessment), [How to score 100](/how-to-score-100-in-icse-computer-applications), [Paper analysis and answer key](/icse-computer-applications-paper-analysis), [Computer or Commercial Applications?](/icse-computer-applications-vs-commercial-applications).

---

*Canonical: https://learn.modernagecoders.com/icse-computer-applications-viva-questions*
