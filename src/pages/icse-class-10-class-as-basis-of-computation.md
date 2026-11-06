---
title: "Class as the Basis of All Computation: ICSE Class 10 Notes"
description: "Class as the basis of all computation, ICSE Class 10 (2027): objects and classes, user defined data type, instance vs class variables, two programs run."
canonical: https://learn.modernagecoders.com/icse-class-10-class-as-basis-of-computation
source: src/pages/icse-class-10-class-as-basis-of-computation.html
updated: 2026-11-06
---

> Class as the basis of all computation means that every Java program is written as one or more classes, and all data and work happen inside them. An object is an entity with state (its data members) and behaviour (its member methods). A class is the blueprint that describes such objects, so it works as an object factory. Because the programmer creates it, a class is a user defined, composite data type. Instance variables get a copy in each object; a static class variable is shared. Modern Age Coders teaches this live in a Tuesday and Wednesday mini batch in India, or one to one.

## Why is class called the basis of all computation? Definitions in one sentence

A class is called the basis of all computation because in Java every program is written inside a class, and every piece of data the program works on belongs either to a primitive variable or to an object built from a class. These are the definitions the chapter asks for, one sentence each.

- Term | One-sentence definition

- Object | An entity that has a state, the values of its characteristics, and a behaviour, the actions it can perform.

- State | The data an object holds at a moment, stored in its data members (member variables).

- Behaviour | What an object can do, written as the member methods of its class.

- Class | A blueprint or template that declares the data members and member methods shared by a set of similar objects.

- Class as an object factory | A class can produce any number of objects of the same kind, each with its own state, using new.

- Instance | An object is called an instance of its class, because it is one concrete example of that blueprint.

- Class as an abstraction | A class keeps only the features of an object that matter to the program and leaves out the rest.

- User defined data type | A class is a data type the programmer creates, so variables of that class type can be declared just like int variables.

- new operator | Allocates memory for a new object and returns a reference to it, which is stored in a variable of the class type.

### Objects and classes ICSE: real-life examples

- Class | One object of it | State (data members) | Behaviour (methods)

- CeilingFan | The fan in your bedroom | speed, isOn | switchOn(), changeSpeed()

- Train | Tonight's express to Delhi | number, coaches, currentStation | depart(), reachStation()

- LibraryBook | Your copy of a novel | title, author, issued | issue(), returnBook()

- WaterTank | The tank on your roof | capacity, level | fill(), use()

The constructor, the special method that sets an object's starting state, has its own chapter:
[constructors ICSE Class 10 questions](/icse-class-10-constructors-questions).

## Class as user defined data type: primitive against composite types

A class is a user defined data type because the programmer creates it, and once it exists, variables of that type can be declared and objects of it created. It is composite because one object bundles several values, possibly of different types, together with the methods that use them.

- Point | Primitive data type | Composite (class) type

- Who defines it | Built into Java | Created by the programmer, or supplied in a library

- Examples | int, double, char, boolean and four more | WaterTank, Batsman, String, Scanner

- What a variable holds | The value itself | A reference to an object

- How many values | Exactly one | Several data members, plus methods

- Size | Fixed (an int is 4 bytes) | Depends on the members declared

- Creating a value | int n = 5; | WaterTank t = new WaterTank(500);

- Default value as a member | 0, 0.0, false or the character with code 0 | null until an object is assigned

```
int p = 5;
int q = p;          // q gets a copy of 5
q = 8;
System.out.println(p + " " + q);

Mug m1 = new Mug();
Mug m2 = m1;        // m2 refers to the same mug
m2.ml = 250;
System.out.println(m1.ml);

Mug m3 = new Mug();
Mug m4 = new Mug();
m3.ml = 300;
m4.ml = 300;
System.out.println((m3 == m4) + " " + (m3.ml == m4.ml));

// Output
5 8
250
false true
```

### Why not every class is treated as a data type

A class written only to hold main and run a task is used as a program, not as a type. A class such as WaterTank, from which other code declares variables and creates objects, is the one that behaves as a user defined data type. Examiners accept either view if it is explained in a sentence.

### Declaring variables of a class type

- WaterTank roof; declares a reference; no tank exists yet.

- roof = new WaterTank(1000); creates the object and stores its reference.

- WaterTank sump = new WaterTank(2000); does both in one line.

Primitive types, their sizes and how values are read with Scanner are covered on [data types and input in Java for ICSE Class 10](/icse-class-10-data-types-and-input-java), and the wrapper class for each primitive is on [wrapper and library classes](/icse-class-10-wrapper-and-library-classes).

## Instance variables vs class variables ICSE, with outputs

An instance variable is a data member declared without static, so every object gets its own copy; a class variable is declared static, so one copy is shared by all objects of the class. The syllabus lists these, together with argument and local variables, under the scope of variables in the Encapsulation chapter, and they are asked alongside this one.

- Kind | Declared | Copies | Lives as long as | Example

- Instance variable | In the class, outside methods, no static | One per object | The object | int level;

- Class variable | In the class, outside methods, with static | One for the whole class | The program run | static int tanks;

- Argument (parameter) variable | In a method's brackets | One per call | That call | void fill(int litres)

- Local variable | Inside a method or block | One per call | That method or block | double pct in display()

```
class Bulb {
    int watts;              // instance variable
    static int made = 0;    // class variable
    Bulb(int w) {
        watts = w;
        made++;
    }
}
// in main:
Bulb x = new Bulb(9);
Bulb y = new Bulb(12);
x.watts = 15;
System.out.println(x.watts + " " + y.watts + " "
    + Bulb.made + " " + x.made);

// Output: 15 12 2 2
```

- Statement | x.watts | y.watts | Bulb.made

- Start | none | none | 0

- x = new Bulb(9) | 9 | none | 1

- y = new Bulb(12) | 9 | 12 | 2

- x.watts = 15 | 15 | 12 | 2

Access specifiers and the full scope rules are on [encapsulation and access specifiers](/icse-class-10-encapsulation-access-specifiers);
short answers that compare two terms in a table are collected on [ICSE Computer Applications difference between questions](/icse-computer-difference-between-questions).

## Design a class: from question text to finished program

Read the question twice and pull out its nouns and its verbs: the nouns that describe one thing become data members, the verbs become methods, and anything counted across all objects becomes a static member. Then write the parts in a fixed order.

-
**Name the class** Use the name the question gives, with a capital first letter. If none is given, choose a singular noun: Batsman, not Batsmen.

-
**List the data members** One line per member, with its type and a short comment. Mark shared totals or counters static.

-
**Write the constructor** Set every member to a sensible start: 0, 0.0, an empty String, or the value passed in.

-
**Write one method per task** Input, calculation and display are kept separate, with the method names and return types the question states.

-
**Write main last** Create the object or objects with new and call the methods in the order the task needs.

-
**Add the variable description table** Every variable, its type and its purpose. Section B asks for variable descriptions, and they carry marks in internal assessment too.

Question 1. Define a class WaterTank with instance variables capacity and level (int) and a class variable tanks (int) that counts how many tanks have been created. Write a constructor WaterTank(int cap), void fill(int litres) that reports and removes any overflow, void use(int litres) that refuses to draw more than the tank holds, and void display() showing the level and the percentage full. In main, read the capacities and amounts with Scanner and use two tanks.

```
import java.util.Scanner;
class WaterTank {
    int capacity;          // instance variable: litres the tank holds
    int level;             // instance variable: litres in it now
    static int tanks = 0;  // class variable: tanks made so far

    WaterTank(int cap) {
        capacity = cap;
        level = 0;
        tanks++;
    }

    void fill(int litres) {
        level = level + litres;
        if (level > capacity) {
            System.out.println("Overflow of " + (level - capacity) + " litres");
            level = capacity;
        }
    }

    void use(int litres) {
        if (litres > level)
            System.out.println("Only " + level + " litres available");
        else
            level = level - litres;
    }

    void display() {
        double pct = level * 100.0 / capacity;
        System.out.println(level + " of " + capacity + " litres (" + pct + "%)");
    }

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Capacity of tank A and tank B: ");
        WaterTank a = new WaterTank(sc.nextInt());
        WaterTank b = new WaterTank(sc.nextInt());
        System.out.print("Litres to pour into A, then into B: ");
        a.fill(sc.nextInt());
        b.fill(sc.nextInt());
        System.out.print("Litres to draw from A: ");
        a.use(sc.nextInt());
        a.display();
        b.display();
        System.out.println("Tanks created: " + WaterTank.tanks);
    }
}
```

- Variable | Type | Purpose

- capacity, level | int | instance variables: size and contents of one tank

- tanks | static int | class variable: number of tanks created

- cap | int | constructor parameter: capacity

- litres | int | parameter of fill and use

- pct | double | local: percentage full

- a, b | WaterTank | the two tank objects

- sc | Scanner | reads the inputs

```
Capacity of tank A and tank B: 500 800
Litres to pour into A, then into B: 620 300
Overflow of 120 litres
Litres to draw from A: 150
350 of 500 litres (70.0%)
300 of 800 litres (37.5%)
Tanks created: 2
```

Question 2. Define a class Batsman with instance variables name (String), runs and balls (int), and a class variable teamRuns (int) holding the total of all batsmen's runs. Write a default constructor, void accept(Scanner sc) to read one player's details and add the runs to teamRuns, double strikeRate() that returns runs per 100 balls to two decimal places (0 if no ball was faced), and void display(). In main, create three batsmen, display them in a table and print the team total.

```
import java.util.Scanner;
class Batsman {
    String name;              // instance: player's name
    int runs;                 // instance: runs scored
    int balls;                // instance: balls faced
    static int teamRuns = 0;  // class variable: shared by all players

    Batsman() {
        name = "";
        runs = 0;
        balls = 0;
    }

    void accept(Scanner sc) {
        System.out.print("Name, runs and balls: ");
        name = sc.next();
        runs = sc.nextInt();
        balls = sc.nextInt();
        teamRuns = teamRuns + runs;
    }

    double strikeRate() {
        if (balls == 0)
            return 0.0;
        return Math.round(runs * 10000.0 / balls) / 100.0;
    }

    void display() {
        System.out.println(name + "\t" + runs + "\t" + balls + "\t" + strikeRate());
    }

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        Batsman p1 = new Batsman();
        Batsman p2 = new Batsman();
        Batsman p3 = new Batsman();
        p1.accept(sc);
        p2.accept(sc);
        p3.accept(sc);
        System.out.println("Name\tRuns\tBalls\tStrike rate");
        p1.display();
        p2.display();
        p3.display();
        System.out.println("Team total = " + Batsman.teamRuns);
    }
}
```

- Variable | Type | Purpose

- name | String | instance: player's name

- runs, balls | int | instance: runs scored and balls faced

- teamRuns | static int | class variable: total runs of all players

- sc | Scanner | keyboard reader, passed to accept

- p1, p2, p3 | Batsman | the three player objects

```
Name, runs and balls: Rohan 47 38
Name, runs and balls: Anaya 82 51
Name, runs and balls: Vikram 9 14
Name    Runs    Balls   Strike rate
Rohan   47      38      123.68
Anaya   82      51      160.78
Vikram  9       14      64.29
Team total = 138
```

The same design steps drive bill and tariff questions: see [ICSE Class 10 slab and bill programs](/icse-class-10-slab-and-bill-programs).

## Objects and classes ICSE questions with answers

Original questions in the one-mark and two-mark shapes of Section A. Commit to an answer before you open it.

- An object's state is stored in its
Answer Data members (member variables).

- Which keyword makes a data member a class variable?
Answer static.

- Why is a class called an object factory?
Answer Because any number of objects of the same kind can be produced from one class with new, each with its own state.

- Name the operator that allocates memory for an object.
Answer new.

- Is String a primitive type or a composite type?
Answer Composite. It is a class in java.lang, so a String variable holds a reference to an object.

- Give the output: Bulb x = new Bulb(9); Bulb y = new Bulb(12); then System.out.println(Bulb.made); where the constructor does made++ on a static made starting at 0.
Answer 2. One shared counter, increased once by each constructor call.

- Why is a class known as a user defined data type?
Answer Because the programmer creates it, and after that, variables of the class type can be declared and objects of it created, just as variables of a built-in type are.

- State two differences between instance variables and class variables.
Answer An instance variable is declared without static and each object has its own copy; a class variable is declared static and one copy is shared by all objects. An instance variable is used through an object; a class variable can be used through the class name.

- Identify the state and behaviour of a ceiling fan as a Java object.
Answer State: speed and whether it is on. Behaviour: switching on or off and changing the speed.

- Differentiate between a primitive data type and a composite data type.
Answer A primitive type is built into Java and its variable holds one value directly, such as int. A composite type is made from a class, can hold several members, and its variable holds a reference to an object.

- Write one statement that declares a reference t of class Train and creates an object using a constructor that takes a train number.
Answer Train t = new Train(12301);

Questions of this kind across the whole syllabus are on [ICSE Computer Applications important questions](/icse-class-10-computer-applications-important-questions).

## How the evening group learns to think in classes

Most students can recite "a class is a blueprint" and still freeze when a Section B question names a class they have never seen. The classes aim at that gap, so the definitions turn into a design habit.

### Objects from the room
On Tuesday evening each student picks an object near them and names its state and behaviour aloud; the group decides which features a program would keep.

### References traced
Short fragments with shared static counters and copied references are traced in a table, then run in BlueJ so nobody argues about the result.

### Nouns and verbs
A fresh Section B question is marked up on screen, nouns circled for members and verbs underlined for methods, before a line of code is written.

### Written, then marked
On Wednesday evening the class is written by hand with its variable description table and marked against the scheme, part by part.

### Kept for the lab file
The finished design goes into the student's laboratory assignments, which count towards internal assessment.

### Back in the mocks
Class design returns in every full mock paper from December, under the full two-hour clock.

## The courses behind this page

- [ICSE Computer Applications, Java with BlueJ](/courses/icse-computer-applications-java-bluej-course): The Class 9 and 10 course, in a group of six at most, where each fortnight a Section B question is turned into a designed class.
- [Computer Science Class 11 and 12](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course): ISC questions hand you a class diagram and expect objects to be passed, compared and returned; this chapter is the start of that road.
- [Data Structures and Algorithms](/courses/data-structures-algorithms-masterclass-college): Stacks, queues and linked lists are just classes whose objects point at each other. A natural next step for a curious student.

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

**Why is class called the basis of all computation in Java?** Because a Java program cannot exist outside a class. All code is written in classes, and all data either sits in a primitive variable inside a class or is stored in objects created from classes. So every computation a program performs happens within, or on, a class.

**What is an object in ICSE Class 10?** An object is an entity with a state and a behaviour. Its state is the set of values in its data members, such as a fan's speed; its behaviour is what it can do, written as member methods, such as changing speed. In Java an object is created from a class with new.

**What is a class in Java for ICSE?** A class is a blueprint or template that declares the data members and member methods common to a group of similar objects. It describes what every object of that kind will have and do, and objects are then created from it.

**Why is a class called an object factory?** Because one class can produce as many objects as the program needs, all with the same structure but each with its own state. Every use of new on the class turns out another object, just as a factory turns out products from one design.

**Why is a class known as a user defined data type?** Because the programmer defines it, and once defined, it can be used like any other type: variables of the class type are declared and objects are stored in them. It is a composite type, since one object holds several values and the methods that use them.

**What is the difference between instance variables and class variables?** An instance variable is declared without static, so every object has its own copy. A class variable is declared static, so a single copy is shared by all objects and can be used through the class name. Changing an instance variable affects one object; changing a class variable affects them all.

**What is the difference between primitive and composite data types?** Primitive types such as int, double, char and boolean are built into Java and hold a single value directly. Composite types are classes, such as String or a class you write; a variable of a composite type holds a reference to an object that may contain many values.

**Is this chapter asked in Section B of the ICSE paper?** Not as a separate question, but every Section B program is a class, so the chapter is used in all of them. Its definitions and differences are asked directly in Section A, as one-mark and two-mark questions.

**Where do instance and class variables come in the ICSE syllabus?** The 2026-27 syllabus for the 2027 exam lists class, instance, argument and local variables under the scope of variables in the Encapsulation chapter. Schools usually teach the instance and class distinction alongside objects and classes, as this page does.

**Do you teach objects and classes in live classes?** Yes. The ICSE group meets on Tuesday at 5:30 PM IST and Wednesday at 8:00 PM IST, with six students at most; definitions are practised aloud and a full class is designed and marked each fortnight. Private one to one lessons are available at a time that suits the family.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Tue and Wed ICSE Java batch](/icse-class-10-java-classes-online), [ICSE Java classes in the Gulf and abroad](/icse-class-10-computer-applications-classes-gulf-and-abroad), [ICSE BlueJ Java coaching](/icse-class-10-bluej-java-coaching).

**Chapter by chapter:** [ICSE Computer Applications syllabus](/icse-class-10-computer-applications-syllabus-explained), [User-defined methods and overloading](/icse-class-10-user-defined-methods-overloading), [Constructors](/icse-class-10-constructors-questions), [Wrapper and library classes](/icse-class-10-wrapper-and-library-classes).

**Programs for Section B:** [ICSE Java programs practice](/icse-class-10-java-programs-practice), [String programs](/icse-class-10-string-programs), [Special number programs](/icse-special-number-programs-java), [Sorting and searching programs](/icse-class-10-sorting-and-searching-programs), [2D array programs](/icse-class-10-2d-array-programs), [Pattern programs](/icse-class-10-pattern-programs-java), [Menu driven and switch case](/icse-class-10-menu-driven-programs), [Series programs](/icse-class-10-series-programs-java).

**Questions and practice:** [ICSE CA important questions](/icse-class-10-computer-applications-important-questions), [Specimen paper and mock tests](/icse-class-10-computer-applications-specimen-paper-and-mock-tests), [Previous year papers, solved](/icse-computer-applications-previous-year-papers-solved), [Predict the output questions](/icse-class-10-java-output-questions), [Competency and case study questions](/icse-computer-applications-competency-questions), [MCQ for Question 1](/icse-computer-applications-mcq-questions).

**Exam, marks and internal assessment:** [ICSE board exam preparation](/icse-class-10-computer-applications-board-exam-preparation), [Exam date 2027 and paper pattern](/icse-class-10-computer-applications-exam-date-and-paper-pattern), [Project and internal assessment](/icse-class-10-computer-applications-project-and-internal-assessment), [How to score 100](/how-to-score-100-in-icse-computer-applications).

---

*Canonical: https://learn.modernagecoders.com/icse-class-10-class-as-basis-of-computation*
