---
title: "Constructors ICSE Class 10 Questions with Answers, 2027"
description: "Constructors ICSE Class 10 questions for 2027: default and parameterized constructors, overloading, constructor vs method, two programs run in Java."
canonical: https://learn.modernagecoders.com/icse-class-10-constructors-questions
source: src/pages/icse-class-10-constructors-questions.html
updated: 2026-11-06
---

> Constructors ICSE Class 10 questions test four things. A constructor is a member method with the same name as its class and no return type, not even void, that runs automatically when an object is created with new, to give the data members their starting values. A default constructor takes no parameters; a parameterized constructor takes values; overloading means several constructors that differ in their parameter lists. And a constructor differs from a method in name, return type and how it is called. Modern Age Coders teaches the chapter live in a Tuesday and Wednesday mini batch in India, or one to one at the family's time.

## What is a constructor? Definitions for ICSE Class 10 in one sentence each

A constructor is a member method with the same name as the class and no return type, which is called automatically when an object is created and is used to initialise the object's data members. Each term below is worth one mark when written this cleanly.

- Term | One-sentence definition | Smallest example

- Constructor | A member method with the same name as its class and no return type, invoked automatically by new to initialise a new object. | Pen() { ink = 100; }

- Default constructor | A constructor with no parameters, which gives every data member a fixed starting value. | Pen() { colour = "blue"; ink = 100; }

- Parameterized constructor | A constructor that receives values as parameters and copies them into the data members of the new object. | Pen(String c, int i) { colour = c; ink = i; }

- Compiler-supplied constructor | If a class defines no constructor at all, Java adds an empty no-argument one, which leaves members at their default values (0, 0.0, false, null). | new Box() works with no constructor written

- Constructor overloading | Defining more than one constructor in the same class, each with a different number, type or order of parameters. | TimeSpan(), TimeSpan(int), TimeSpan(int, int)

- The this keyword | A reference to the current object, used inside a constructor when a parameter has the same name as a data member. | this.x = x;

### Characteristics of a constructor (the list examiners mark)

- Its name is exactly the class name, with the same capital letters.

- It has no return type, not even void. Add one and it stops being a constructor.

- It is called automatically, once, when new creates the object; you never call it with a dot.

- It is usually declared public so objects can be created from outside the class.

- It can be overloaded, but a class cannot have two constructors with the same parameter list.

- Once you write any constructor yourself, Java no longer supplies the empty one.

Constructors only make sense once a class is seen as a template for objects, which is the chapter before this one:
[class as the basis of all computation](/icse-class-10-class-as-basis-of-computation).

## Difference between constructor and method, ICSE style

A constructor has the class's name and no return type and runs by itself when an object is made; a method has any name, must declare a return type and runs only when it is called. A four-mark difference question wants at least four rows of this table, each written as a pair.

- Point | Constructor | Method

- Name | Same as the class | Any valid identifier

- Return type | None, not even void | Must have one, void or a data type

- How it runs | Automatically, when new creates an object | Only when called, as ob.show()

- How many times per object | Once, at creation | As many times as it is called

- Purpose | To initialise the data members | To carry out a task on the data

- If none is written | Java supplies an empty no-argument one | Nothing is supplied

### Default constructor versus parameterized constructor

- Point | Default (no-argument) | Parameterized

- Parameters | None | One or more

- Starting values | The same for every object | Different for each object, sent in by the caller

- Object creation | new Pen() | new Pen("black", 40)

- Supplied by Java? | Yes, if no constructor is written | Never; you must write it

```
class Fan {
    int speed;
    Fan(int s) {             // constructor
        speed = s;
    }
    int Fan(int s) {         // a method that happens to share the name
        return s * 2;
    }
    public static void main(String[] args) {
        Fan f = new Fan(3);
        System.out.println(f.speed + " " + f.Fan(3));
    }
}

// Output: 3 6
```

```
class Demo {
    void Demo() {
        System.out.println("method, not constructor");
    }
}
// in main:
Demo d = new Demo();
System.out.println("object made");
d.Demo();

// Output
object made
method, not constructor
```

Overloading methods follows the same rule as overloading constructors, and the methods chapter has its own programs on
[user-defined methods and function overloading](/icse-class-10-user-defined-methods-overloading).
More two-column answers of this kind are on [ICSE Computer Applications difference between questions](/icse-computer-difference-between-questions).

## Parameterized and default constructor programs in Java for ICSE

Most Section B class-design questions list the data members, then ask for a constructor, then input, calculation and display methods, then a main that creates an object and calls them. Below are two original questions in that shape, each with a variable description table and a sample run copied from Java 21.

Question 1. Define a class ExamResult with data members name (String), eng, maths and comp (int), avg (double) and grade (char). Write a default constructor to initialise the data members, void accept() to read the name and three marks, void compute() to find the average and the grade (90 and above A, 75 to below 90 B, 60 to below 75 C, 40 to below 60 D, below 40 E) and void display() to print the name, the average to two decimal places and the grade. Write main to create an object and call the methods.

```
import java.util.Scanner;
class ExamResult {
    String name;          // student's name
    int eng, maths, comp; // marks in three subjects
    double avg;           // average of the three
    char grade;           // grade worked out from avg

    ExamResult() {        // default constructor
        name = "";
        eng = 0;
        maths = 0;
        comp = 0;
        avg = 0.0;
        grade = ' ';
    }

    void accept() {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter name: ");
        name = sc.nextLine();
        System.out.print("Enter marks in English, Maths and Computer: ");
        eng = sc.nextInt();
        maths = sc.nextInt();
        comp = sc.nextInt();
    }

    void compute() {
        avg = (eng + maths + comp) / 3.0;
        if (avg >= 90)
            grade = 'A';
        else if (avg >= 75)
            grade = 'B';
        else if (avg >= 60)
            grade = 'C';
        else if (avg >= 40)
            grade = 'D';
        else
            grade = 'E';
    }

    void display() {
        System.out.println("Name: " + name);
        System.out.println("Average: " + Math.round(avg * 100) / 100.0);
        System.out.println("Grade: " + grade);
    }

    public static void main(String args[]) {
        ExamResult ob = new ExamResult();
        ob.accept();
        ob.compute();
        ob.display();
    }
}
```

- Variable | Type | Purpose

- name | String | student's name

- eng, maths, comp | int | marks in the three subjects

- avg | double | average of the three marks

- grade | char | grade decided from avg

- sc | Scanner | reads input from the keyboard

- ob | ExamResult | the object created in main

```
Enter name: Ishaan Rao
Enter marks in English, Maths and Computer: 88 79 95
Name: Ishaan Rao
Average: 87.33
Grade: B
```

Question 2. Define a class TimeSpan with data members hours and minutes (int). Overload the constructor: TimeSpan() sets both to 0; TimeSpan(int total) converts a number of minutes into hours and minutes; TimeSpan(int h, int m) stores hours and minutes, carrying any extra minutes into hours. Write int toMinutes() and void display(). In main, read the values with Scanner, create one object with each constructor, display all three and print the difference between the second and third in minutes.

```
import java.util.Scanner;
class TimeSpan {
    int hours;    // whole hours
    int minutes;  // minutes left over, 0 to 59

    TimeSpan() {                  // default constructor
        hours = 0;
        minutes = 0;
    }

    TimeSpan(int total) {         // from a number of minutes
        hours = total / 60;
        minutes = total % 60;
    }

    TimeSpan(int h, int m) {      // from hours and minutes
        hours = h + m / 60;
        minutes = m % 60;
    }

    int toMinutes() {
        return hours * 60 + minutes;
    }

    void display() {
        System.out.println(hours + " h " + minutes + " min");
    }

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a time in minutes: ");
        int t = sc.nextInt();
        System.out.print("Enter hours and minutes: ");
        int h = sc.nextInt();
        int m = sc.nextInt();
        TimeSpan a = new TimeSpan();
        TimeSpan b = new TimeSpan(t);
        TimeSpan c = new TimeSpan(h, m);
        a.display();
        b.display();
        c.display();
        System.out.println("Difference = "
            + Math.abs(b.toMinutes() - c.toMinutes()) + " min");
    }
}
```

- Variable | Type | Purpose

- hours, minutes | int | data members of each object

- total | int | parameter: a time in minutes

- h, m | int | parameters: hours and minutes

- t | int | minutes read in main

- a, b, c | TimeSpan | one object per constructor

- sc | Scanner | reads input from the keyboard

```
Enter a time in minutes: 130
Enter hours and minutes: 1 95
0 h 0 min
2 h 10 min
2 h 35 min
Difference = 25 min
```

Bill and slab classes use exactly this skeleton with a different compute method; they are worked on [ICSE Class 10 slab and bill programs](/icse-class-10-slab-and-bill-programs), and every other program family is listed on [ICSE Class 10 Java programs for practice](/icse-class-10-java-programs-practice).

## Constructor overloading and default values: output questions

Constructor output questions check two facts: which constructor runs for a given new, and what value a member holds if nobody set it. Cover the Output column and trace each one first.

- # | Code | Output | Why

- 1 | class Box { int n; double d; String s; boolean b; char c; }Box ob = new Box();System.out.println(ob.n + " " + ob.d + " " + ob.s + " " + ob.b + " " + (int) ob.c); | 0 0.0 null false 0 | No constructor written, so Java's empty one runs and every member keeps its default value

- 2 | class Counter {  static int made = 0;  Counter() { made++; }}new Counter(); new Counter();Counter k = new Counter();System.out.println(Counter.made); | 3 | The constructor runs once per object, even for objects that are never stored in a variable

- 3 | Point(int x, int y) { x = x; y = y; }Point p = new Point(3, 4);System.out.println(p.x + " " + p.y); | 0 0 | The parameters hide the data members, so each parameter is copied onto itself and the members stay 0

- 4 | Point2(int x, int y) { this.x = x; this.y = y; }Point2 q = new Point2(3, 4);System.out.println(q.x + " " + q.y); | 3 4 | this.x names the object's member; plain x names the parameter

- 5 | Pen() { ...; System.out.print("A "); }Pen(String c) { ...; System.out.print("B "); }Pen(String c, int i) { ...; System.out.print("C "); }Pen p1 = new Pen("red");Pen p2 = new Pen();Pen p3 = new Pen("black", 40); | B A C | The order of the new statements decides the order; the argument list decides which version

- 6 | Pen p4 = p3;p4.ink = 10;System.out.println(p3.ink); | 10 | No new, so no constructor runs and no new object exists: p4 and p3 name the same pen

```
class Lamp {
    int watts;
    Lamp(int w) {
        watts = w;
    }
    public static void main(String[] args) {
        Lamp a = new Lamp(60);
        Lamp b = new Lamp();      // line 8
        System.out.println(a.watts);
    }
}

// javac says:
Lamp.java:8: error: constructor Lamp in class Lamp cannot be applied to given types;
  required: int
  found:    no arguments
```

### Four rules that settle every constructor trap

- A constructor runs only when new runs, once per object.

- Members not set by the constructor keep their defaults: 0, 0.0, false, null, and the character with code 0.

- If any constructor is written, the free no-argument one disappears.

- A parameter with the same name as a member hides it, unless this. is used.

More fragments to trace, sorted by trap, are on [ICSE Computer Applications output questions](/icse-class-10-java-output-questions),
and code that will not compile has its own page: [Java error finding questions](/icse-class-10-java-error-finding-questions).

## Constructors ICSE Class 10 questions with answers for Section A

These are original questions in the shapes Question 1 (one-mark MCQs) and Question 2 (two-mark answers) use. Write your answer before opening each one.

### One-mark questions

- Which of these can be a constructor of class Kite? (a) void Kite() (b) Kite() (c) kite() (d) int Kite()
Answer (b). No return type, and the name matches the class exactly, including the capital K.

- The constructor Java supplies when none is written takes how many parameters?
Answer None. It is a no-argument constructor that leaves the members at their default values.

- Which keyword refers to the object whose constructor is running?
Answer this.

- Two constructors Car(int a) and Car(int b) in one class: will it compile?
Answer No. Parameter names do not count; both have the parameter list (int), so the class has the same constructor twice.

- What is the default value of a String data member that no constructor sets?
Answer The value null, meaning the member does not refer to any String yet.

### Two-mark questions

- State two differences between a constructor and a method.
Answer A constructor has the same name as the class and no return type; a method has any name and must declare a return type. A constructor runs automatically when an object is created; a method runs only when it is called.

- What is a parameterized constructor? Give an example.
Answer A constructor that receives values through parameters and stores them in the data members. Example: Book(String t, int p) { title = t; pages = p; }, used as new Book("Kim", 320).

- Write a default constructor for class Tank with members double litres and boolean full.
Answer Tank() { litres = 0.0; full = false; }

- What is constructor overloading? Why is it useful?
Answer Defining several constructors in one class that differ in their parameter lists. It lets objects be created in different ways, for example with default values or with values supplied by the user.

- A class has only Shop(String n). Why does new Shop() fail, and give one fix.
Answer Once a constructor is written, Java does not supply the no-argument one, so no constructor matches an empty argument list. Fix: add Shop() { name = ""; }, or pass a name.

Constructor items sit alongside every other chapter's one-mark questions on [ICSE Computer Applications MCQ questions](/icse-computer-applications-mcq-questions).

## How the mini batch turns constructors into marks

Constructors are understood in one lesson and then cost marks for months: a stray void, a member never set, a parameter hiding a member. The weekly routine targets those slips.

-
**Definitions said aloud on Tuesday** At the 5:30 PM IST class each student defines a constructor, a default constructor and overloading in one sentence, and the group corrects the wording until it would earn the mark.

-
**Traps traced against a timer** Short fragments like the six above are traced on paper, then run in BlueJ on a shared screen, so the default values and the order of constructors are seen, not just told.

-
**A full class designed on Wednesday** At the 8:00 PM IST class a fresh Section B question is set. Students write the data members, the constructor, the methods, main and the variable description table by hand.

-
**Marked against the scheme on screen** The mentor marks one answer in front of everyone: the constructor, each method, the object creation in main, the comments and the table each earn their share.

-
**Lab file and mock papers** The corrected version goes into the student's lab assignments for internal assessment, and constructors return in the full two-hour mock papers from December.

With six students at most, every constructor a student writes is read and marked, not sampled.

## The courses behind this page

- [ICSE Computer Applications, Java with BlueJ](/courses/icse-computer-applications-java-bluej-course): Class 9 and 10 Computer Applications in a mini batch, where every Section B class opens with a constructor that is marked line by line.
- [Computer Science Class 11 and 12](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course): For students going on to ISC, where every class question starts with a parameterized constructor and objects are passed between methods.
- [Data Structures and Algorithms](/courses/data-structures-algorithms-masterclass-college): For the student who wants to see constructors build linked lists, stacks and trees one object at a time.

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

**What is a constructor in Java ICSE Class 10?** A constructor is a member method with the same name as its class and no return type, not even void. It runs automatically, once per object, when new creates the object, and gives the data members their starting values.

**What is the difference between a constructor and a method?** A constructor has the class's name, has no return type and runs automatically when an object is made. A method can have any name, must declare a return type such as void or int, and runs only when it is called with the object and a dot. Constructors initialise; methods do the work.

**What is a parameterized constructor in ICSE?** A parameterized constructor receives values through its parameters and copies them into the new object's data members, so each object can start with different values. For example, Book(String t, int p) stores a title and a page count, and is used as new Book("Kim", 320).

**What is a default constructor in Java for ICSE?** A default constructor takes no parameters and gives every data member a fixed starting value, such as 0 or an empty String. If a class has no constructor at all, Java adds an empty no-argument constructor, which leaves members at their default values: 0, 0.0, false or null.

**What is constructor overloading with an example?** Constructor overloading means writing more than one constructor in the same class, each with a different parameter list. A TimeSpan class can have TimeSpan(), TimeSpan(int total) and TimeSpan(int h, int m); Java chooses the one whose parameters match the arguments given with new.

**Can a constructor have a return type?** No. Write any return type, even void, and Java treats it as an ordinary method that happens to share the class name. It compiles, but it does not run when the object is created: a favourite output-question trap.

**Why does new ClassName() give an error when I have written a constructor?** Because Java supplies the empty no-argument constructor only when a class has no constructors at all. Once you write a parameterized one, new ClassName() has nothing to match. Write a default constructor as well, or always pass the values the constructor expects.

**What is the use of the this keyword in a constructor?** this refers to the object being created. When a parameter has the same name as a data member, as in Point(int x, int y), the plain name means the parameter, so this.x = x is needed to store the value in the member. Without this, the member stays at 0.

**Are copy constructors in the ICSE 2027 syllabus?** The 2027 syllabus wording for the chapter names the definition, characteristics, types and use of constructors, the default and parameterized constructor, constructor overloading and the difference from a method. Copy constructors are not named, so this page does not teach them for the exam.

**Do you teach the Constructors chapter in live classes?** Yes. In the mini batch, on Tuesday at 5:30 PM IST and Wednesday at 8:00 PM IST, students define, trace and then write full classes with constructors, which are marked on screen and run in BlueJ. Families who want a different time can choose personalised one to one classes.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Tue and Wed ICSE Java batch](/icse-class-10-java-classes-online), [ICSE Java classes in the Gulf and abroad](/icse-class-10-computer-applications-classes-gulf-and-abroad), [ICSE BlueJ Java coaching](/icse-class-10-bluej-java-coaching), [ICSE computer crash course](/icse-computer-applications-crash-course), [ICSE computer tuition in Kolkata](/icse-computer-tuition-kolkata), [ICSE computer tuition in Bangalore](/icse-computer-tuition-bangalore), [ICSE computer tuition in Mumbai](/icse-computer-tuition-mumbai), [1-on-1 private Java tutor](/icse-computer-applications-private-tutor), [ICSE computer tuition in Lucknow](/icse-computer-tuition-lucknow), [ICSE computer tuition in Pune](/icse-computer-tuition-pune), [ICSE computer tuition near me](/icse-computer-tuition-near-me), [The mini batch, explained](/icse-computer-applications-small-batch-classes).

**Chapter by chapter:** [ICSE Computer Applications syllabus](/icse-class-10-computer-applications-syllabus-explained), [User-defined methods and overloading](/icse-class-10-user-defined-methods-overloading), [Wrapper and library classes](/icse-class-10-wrapper-and-library-classes), [Class as the basis of all computation](/icse-class-10-class-as-basis-of-computation), [Encapsulation and access specifiers](/icse-class-10-encapsulation-access-specifiers), [Math library methods](/icse-class-10-math-library-methods), [Operators and expressions](/icse-class-10-operators-in-java), [Loops and loop conversion](/icse-class-10-loop-programs-java), [Data types, input and type casting](/icse-class-10-data-types-and-input-java), [Class 9 Java revision for Class 10](/icse-class-9-java-revision-for-class-10).

**Programs for Section B:** [ICSE Java programs practice](/icse-class-10-java-programs-practice), [String programs](/icse-class-10-string-programs), [Special number programs](/icse-special-number-programs-java), [Sorting and searching programs](/icse-class-10-sorting-and-searching-programs), [2D array programs](/icse-class-10-2d-array-programs), [Pattern programs](/icse-class-10-pattern-programs-java), [Menu driven and switch case](/icse-class-10-menu-driven-programs), [Series programs](/icse-class-10-series-programs-java), [Slab and bill programs](/icse-class-10-slab-and-bill-programs).

**Questions and practice:** [ICSE CA important questions](/icse-class-10-computer-applications-important-questions), [Specimen paper and mock tests](/icse-class-10-computer-applications-specimen-paper-and-mock-tests), [Previous year papers, solved](/icse-computer-applications-previous-year-papers-solved), [Predict the output questions](/icse-class-10-java-output-questions), [Competency and case study questions](/icse-computer-applications-competency-questions), [MCQ for Question 1](/icse-computer-applications-mcq-questions), [Viva and oral questions](/icse-computer-applications-viva-questions), [Find the error questions](/icse-class-10-java-error-finding-questions), [Difference between questions](/icse-computer-difference-between-questions).

**Notes and revision:** [Chapter-wise notes](/icse-computer-applications-notes), [Textbook solutions guide](/icse-computer-applications-textbook-solutions-guide), [Worksheets with answers](/icse-computer-applications-worksheets).

**Exam, marks and internal assessment:** [ICSE board exam preparation](/icse-class-10-computer-applications-board-exam-preparation), [Exam date 2027 and paper pattern](/icse-class-10-computer-applications-exam-date-and-paper-pattern), [Project and internal assessment](/icse-class-10-computer-applications-project-and-internal-assessment), [How to score 100](/how-to-score-100-in-icse-computer-applications), [Paper analysis and answer key](/icse-computer-applications-paper-analysis), [Computer or Commercial Applications?](/icse-computer-applications-vs-commercial-applications).

---

*Canonical: https://learn.modernagecoders.com/icse-class-10-constructors-questions*
